const http=require('http'),fs=require('fs'),path=require('path');const root=path.join(__dirname,'dist');http.createServer((req,res)=>{const name=decodeURIComponent(req.url.split('?')[0]);const file=path.resolve(root,'.'+(name==='/'?'/index.html':name));if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end()}fs.readFile(file,(e,data)=>{if(e){res.writeHead(404);return res.end('Not found')}res.setHeader('Content-Type',({'html':'text/html','css':'text/css','js':'text/javascript','svg':'image/svg+xml','jpg':'image/jpeg','pdf':'application/pdf','png':'image/png'})[path.extname(file).slice(1)]||'application/octet-stream');res.end(data)})}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
// Serve SVG icons with their image MIME type in local previews.



