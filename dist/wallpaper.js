// A single local image animated by the GPU. No video download or external runtime.
(() => {
  const host = document.createElement('div');
  host.id = 'live-wallpaper';
  host.setAttribute('aria-hidden', 'true');
  const canvas = document.createElement('canvas');
  host.append(canvas);
  document.querySelector('#desktop').prepend(host);
  const toggle = document.createElement('button');
  toggle.id = 'wallpaper-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Pause live wallpaper');
  toggle.title = 'Pause live wallpaper';
  toggle.textContent = 'Pause';
  document.querySelector('.tray').prepend(toggle);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduced.matches, ready = false, frame = 0, elapsed = 0, last = 0;
  const updateButton = () => {
    toggle.textContent = paused ? 'Play' : 'Pause';
    toggle.title = toggle.getAttribute('aria-label');
    toggle.setAttribute('aria-label', paused ? 'Play live wallpaper' : 'Pause live wallpaper');
    toggle.title = toggle.getAttribute('aria-label');
    toggle.setAttribute('aria-pressed', String(!paused));
    host.classList.toggle('motion-paused', paused);
  };
  updateButton();
  const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false, powerPreference: 'low-power' });
  function fallback() {
    host.classList.add('motion-fallback');
    canvas.hidden = true;
    toggle.onclick = () => { paused = !paused; updateButton(); };
    reduced.addEventListener('change', () => { paused = reduced.matches; updateButton(); });
  }
  if (!gl) { fallback(); return; }
  const vertex = `attribute vec2 position; varying vec2 uv;
    void main(){uv=position*.5+.5;gl_Position=vec4(position,0.,1.);}`;
  const fragment = `precision mediump float;
    varying vec2 uv; uniform sampler2D photo; uniform vec2 resolution; uniform float time;
    float horizon(float x){
      if(x<.28)return mix(.393,.447,sin(x/.28*1.5708));
      if(x<.6)return mix(.447,.365,smoothstep(.28,.6,x));
      return mix(.365,.25,smoothstep(.6,1.,x));
    }
    void main(){
      float aspect=resolution.x/resolution.y;float imageAspect=1720./720.;
      vec2 scale=vec2(min(1.,aspect/imageAspect),min(1.,imageAspect/aspect));
      vec2 p=(uv-.5)*scale+.5;
      float edge=horizon(p.x);
      float sky=smoothstep(edge+.012,edge+.13,p.y);
      float grass=1.-smoothstep(edge-.045,edge,p.y);
      vec2 q=p;
      // Cloud drift eases into the fixed horizon, keeping the hill silhouette stable.
      q.x+=sky*(.065*sin(time*.18)+.012*sin(p.y*8.+time*.22));
      q.y+=sky*.007*sin(time*.19+p.x*5.);
      // Tiny wind ripples grow toward the foreground.
      float wind=sin(p.x*110.+p.y*37.+time*1.7)*sin(p.y*85.-time*.8);
      q.x+=grass*.0014*wind*(1.-p.y);
      q.y+=grass*.0009*sin(p.x*130.+time*1.5);
      vec3 color=texture2D(photo,clamp(q,vec2(.001),vec2(.999))).rgb;
      float shadow=sin(p.x*6.-time*.22+p.y*3.)*.5+.5;
      color*=1.-grass*.11*shadow*shadow;
      gl_FragColor=vec4(color,1.);
    }`;
  function shader(type, source) {
    const s = gl.createShader(type); gl.shaderSource(s, source); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error('Wallpaper shader unavailable');
    return s;
  }
  let program;
  try {
    program = gl.createProgram();
    gl.attachShader(program, shader(gl.VERTEX_SHADER, vertex));
    gl.attachShader(program, shader(gl.FRAGMENT_SHADER, fragment));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('Wallpaper unavailable');
  } catch { fallback(); return; }
  gl.useProgram(program);
  const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
  const timeLocation = gl.getUniformLocation(program,'time');
  const resolution = gl.getUniformLocation(program,'resolution');
  function resize() {
    // Cap resolution to keep this inexpensive on high-DPI and mobile screens.
    const ratio = Math.min(devicePixelRatio || 1, 1.25, 1600 / Math.max(1,host.clientWidth));
    canvas.width = Math.max(1,Math.round(host.clientWidth*ratio));
    canvas.height = Math.max(1,Math.round(host.clientHeight*ratio));
    gl.viewport(0,0,canvas.width,canvas.height);
    gl.uniform2f(resolution,canvas.width,canvas.height);
    if(ready) draw();
  }
  function draw(){gl.uniform1f(timeLocation,elapsed);gl.drawArrays(gl.TRIANGLES,0,6);}
  function animate(now) {
    frame = 0;
    if(paused || document.hidden || !ready) {last=0;return;}
    if(!last)last=now;
    const delta=now-last;
    if(delta>=32){elapsed+=Math.min(delta,100)/1000;last=now;draw();}
    frame=requestAnimationFrame(animate);
  }
  function resume(){if(!frame&&!paused&&!document.hidden&&ready)frame=requestAnimationFrame(animate);}
  toggle.onclick=()=>{paused=!paused;last=0;updateButton();resume();};
  reduced.addEventListener('change',()=>{paused=reduced.matches;last=0;updateButton();resume();});
  document.addEventListener('visibilitychange',()=>{last=0;resume();});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();cancelAnimationFrame(frame);frame=0;canvas.style.opacity=0;fallback();});
  const image = new Image();
  image.onload=()=>{
    const texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
    gl.texImage2D(gl.TEXTURE_2D,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,image);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
    gl.uniform1i(gl.getUniformLocation(program,'photo'),0);
    ready=true;resize();canvas.style.opacity=1;resume();
  };
  image.onerror=()=>{toggle.hidden=true;};
  image.src='wallpaper/bliss.jpg';
  new ResizeObserver(resize).observe(host);
})();
