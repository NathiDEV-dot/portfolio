// Real website captures, browsed in the desktop media player.
openMedia = function () {
  const w = makeWin('media', 'Media Player - Project screenshots', 'media', `<div class="player screenshot-player"><div class="screen"></div><div class="transport"><button data-previous>Previous</button><button data-play>Play slideshow</button><button data-next>Next</button><span data-counter></span></div><div class="gallery-links"><a data-full target="_blank" rel="noopener noreferrer">View full size</a><a data-site target="_blank" rel="noopener noreferrer">Open live website</a></div><div class="playlist">${P.projects.map((p,i)=>`<button data-track="${i}"><span>${esc(p.name)}</span><span>${p.images.length} screenshots</span></button>`).join('')}</div></div>`, 760);
  let picture = 0, slideshow = false;
  function draw() {
    const p=P.projects[track], images=p.images;
    w.el.querySelector('.screen').innerHTML=`<img src="${esc(images[picture])}" alt="${esc(p.name)} - screenshot ${picture+1}">`;
    w.el.querySelector('[data-counter]').textContent=`${picture+1} / ${images.length}`;
    w.el.querySelector('[data-full]').href=images[picture];
    w.el.querySelector('[data-site]').href=p.url;
    w.el.querySelector('[data-play]').textContent=slideshow?'Pause slideshow':'Play slideshow';
    w.el.querySelector('[data-play]').disabled=images.length<2;
    w.el.querySelectorAll('[data-track]').forEach(b=>b.classList.toggle('active',+b.dataset.track===track));
    w.el.querySelector('.status').textContent=`${p.name} | Website capture ${picture+1} of ${images.length}`;
  }
  w.selectTrack=i=>{track=i;picture=0;slideshow=false;draw();};
  w.el.querySelectorAll('[data-track]').forEach(b=>b.onclick=()=>w.selectTrack(+b.dataset.track));
  w.el.querySelector('[data-next]').onclick=()=>{picture=(picture+1)%P.projects[track].images.length;draw();};
  w.el.querySelector('[data-previous]').onclick=()=>{picture=(picture+P.projects[track].images.length-1)%P.projects[track].images.length;draw();};
  w.el.querySelector('[data-play]').onclick=()=>{slideshow=!slideshow;draw();};
  const timer=setInterval(()=>{if(slideshow&&!w.el.hidden&&!document.hidden){picture=(picture+1)%P.projects[track].images.length;draw();}},4000);
  w.cleanup=()=>clearInterval(timer);
  draw();
};
selectTrack = function(i){windows.get('media')?.selectTrack(i);};
