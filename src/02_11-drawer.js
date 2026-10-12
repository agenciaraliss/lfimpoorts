/* LF Impoorts | módulo 11-drawer */
(function(){LF.add('drawer',function(){
var $=LF.$,I=LF.ico,HF=LF.HF;if($('#lf-dw'))return;
var M=LF.menu();if(!M.length)return;
var accA=$('#lf-head .lf-icons a');var acc=accA?accA.getAttribute('href'):'/account/login/';
var wa=LF.waLink();
var dw=document.createElement('div');dw.id='lf-dw';
dw.innerHTML='<div class="bk"></div><div class="wrap"><div class="pn"><div class="top"><small>Navegue</small><button class="x" type="button" aria-label="Fechar">'+I.x+'</button></div><nav>'+M.map(function(m,i){return '<a class="c" href="'+m.h+'" data-i="'+i+'"><span>'+LF.esc(m.t)+'</span>'+I.chev+'</a>'}).join('')+'</nav><div class="ft"><a href="'+acc+'">'+I.user+'Minha conta</a><a href="/account/orders/">'+I.bag+'Meus pedidos</a>'+(wa?'<a href="'+wa+'" target="_blank" rel="noopener">'+I.wa+'Atendimento</a>':'')+'</div></div><div class="ex"><div class="exi"></div></div></div>';
document.body.appendChild(dw);
var ex=dw.querySelector('.ex'),exi=dw.querySelector('.exi'),cur=-1,tm;
var out=function(p){var s=p.querySelector('.js-stock-label');return s&&!/display:\s*none/.test(s.getAttribute('style')||'')&&/esgotad/i.test(s.textContent)};
var prodsOf=function(url){if(!url||url==='/'||/^#/.test(url))return Promise.resolve([]);return LF.fetchDoc(url).then(function(d){return LF.$$('.js-item-product',d).filter(function(p){return !out(p)}).slice(0,3).map(function(p){var i=p.querySelector('img.item-image-featured')||p.querySelector('img');var a=p.querySelector('a[href*="/produtos/"]');return{img:LF.imgOf(i,'480'),h:a?a.getAttribute('href'):'#',n:((p.querySelector('.js-item-name')||{}).textContent||'').replace(/^\s*decant\s*/i,'').trim()}}).filter(function(x){return x.img})}).catch(function(){return[]})};
var show=function(i){if(i===cur)return;cur=i;var m=M[i];dw.querySelectorAll('nav .c').forEach(function(a,j){a.classList.toggle('on',j===i)});
 ex.classList.add('on');exi.classList.remove('in');exi.classList.add('sw');
 exi.innerHTML='<small>Coleção</small><h3>'+LF.esc(m.t)+'</h3>'+(m.subs.length?'<div class="sbs">'+m.subs.map(function(s){return '<a href="'+s.h+'">'+LF.esc(s.t)+'</a>'}).join('')+'</div>':'')+'<a class="all" href="'+m.h+'">Ver tudo '+I.arr+'</a><div class="ars"><span class="sk"></span><span class="sk"></span><span class="sk"></span></div>';
 requestAnimationFrame(function(){requestAnimationFrame(function(){exi.classList.remove('sw');exi.classList.add('in')})});
 prodsOf(m.h).then(function(P){if(cur!==i)return;var box=exi.querySelector('.ars');if(!box)return;if(!P.length){box.remove();return}box.innerHTML=P.map(function(p){return '<a class="ar" href="'+p.h+'"><span class="aw"><img src="'+p.img+'" alt=""></span><em>'+LF.esc(p.n)+'</em></a>'}).join('')})};
dw.querySelectorAll('nav .c').forEach(function(a){a.addEventListener('mouseenter',function(){clearTimeout(tm);var i=+a.dataset.i;tm=setTimeout(function(){show(i)},90)})});
LF.openDrawer=function(){dw.classList.add('on');document.documentElement.style.overflow='hidden';var f=M.findIndex(function(m){return m.h&&m.h!=='/'&&!/inicio|início/i.test(m.t)});show(f<0?0:f)};
var close=function(){dw.classList.remove('on');ex.classList.remove('on');cur=-1;document.documentElement.style.overflow=''};
dw.querySelector('.bk').addEventListener('click',close);dw.querySelector('.x').addEventListener('click',close);
document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
LF.css('lf-dw-css',
'#lf-dw{position:fixed;inset:0;z-index:20000;pointer-events:none;font-family:'+LF.BF+'}'+
'#lf-dw *{box-sizing:border-box}'+
'#lf-dw .bk{position:absolute;inset:0;background:rgba(15,14,13,.42);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);opacity:0;transition:opacity .45s}'+
'#lf-dw.on{pointer-events:auto}#lf-dw.on .bk{opacity:1}'+
'#lf-dw .wrap{position:absolute;top:0;left:0;bottom:0;display:flex;transform:translateX(-102%);transition:transform .6s cubic-bezier(.2,.8,.2,1)}'+
'#lf-dw.on .wrap{transform:none}'+
'#lf-dw svg{display:block;fill:none;stroke:#141210;stroke-width:1.35;stroke-linecap:round;stroke-linejoin:round}'+
'#lf-dw .pn{position:relative;z-index:2;width:400px;height:100%;background:#faf7f2;display:flex;flex-direction:column;padding:28px 36px 30px;box-shadow:20px 0 50px -30px rgba(0,0,0,.3)}'+
'#lf-dw .top{display:flex;align-items:center;justify-content:space-between;margin-bottom:26px}'+
'#lf-dw .top small{display:flex;align-items:center;gap:12px;font-size:10.5px;letter-spacing:.3em;text-transform:uppercase;color:#a8843f}'+
'#lf-dw .top small:before{content:"";width:26px;height:1px;background:#c9a961}'+
'#lf-dw .x{width:42px;height:42px;border-radius:50%;border:1px solid rgba(20,18,16,.12);background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .4s;padding:0}'+
'#lf-dw .x:hover{transform:rotate(90deg)}#lf-dw .x svg{width:15px;height:15px}'+
'#lf-dw nav{display:flex;flex-direction:column;overflow-y:auto}'+
'#lf-dw nav .c{display:flex;align-items:center;justify-content:space-between;padding:15px 4px;border-bottom:1px solid rgba(20,18,16,.07);font-family:'+HF+';font-size:23px;color:#8f887e!important;text-decoration:none!important;transition:color .35s,padding .35s}'+
'#lf-dw nav .c svg{width:16px;height:16px;stroke:#b8924a;opacity:0;transform:translateX(-6px);transition:all .35s}'+
'#lf-dw nav .c:hover,#lf-dw nav .c.on{color:#141210!important;padding-left:12px}'+
'#lf-dw nav .c.on svg,#lf-dw nav .c:hover svg{opacity:1;transform:none}'+
'#lf-dw .ft{margin-top:auto;padding-top:24px;display:flex;flex-direction:column;gap:2px}'+
'#lf-dw .ft a{display:flex;align-items:center;gap:12px;padding:9px 0;font-size:13.5px;color:#4a443d!important;text-decoration:none!important;transition:color .3s}'+
'#lf-dw .ft a:hover{color:#a8843f!important}#lf-dw .ft svg{width:18px;height:18px;stroke:#a8843f}'+
'#lf-dw .ex{position:relative;z-index:1;width:0;height:100%;overflow:hidden;background:#fff;transition:width .55s cubic-bezier(.2,.8,.2,1)}'+
'#lf-dw .ex.on{width:min(620px,calc(100vw - 440px))}'+
'#lf-dw .exi{width:min(620px,calc(100vw - 440px));height:100%;padding:58px 52px 40px;display:flex;flex-direction:column;overflow-y:auto;transition:opacity .45s,transform .45s}'+
'#lf-dw .exi.sw{opacity:0;transform:translateY(8px);transition:none}#lf-dw .exi.in{opacity:1;transform:none}'+
'#lf-dw .exi small{font-size:10.5px;letter-spacing:.3em;text-transform:uppercase;color:#a8843f;margin-bottom:10px}'+
'#lf-dw .exi h3{font-family:'+HF+';font-weight:400;font-size:40px;line-height:1.1;color:#141210;margin:0 0 22px}'+
'#lf-dw .sbs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px}'+
'#lf-dw .sbs a{height:38px;display:inline-flex;align-items:center;padding:0 18px;border-radius:30px;border:1px solid rgba(20,18,16,.14);font-size:13px;color:#3d3730!important;text-decoration:none!important;transition:all .3s}'+
'#lf-dw .sbs a:hover{background:#141210;border-color:#141210;color:#e6cf98!important}'+
'#lf-dw .all{align-self:flex-start;display:inline-flex;align-items:center;gap:8px;font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:#141210!important;text-decoration:none!important;border-bottom:1px solid #c9a961;padding-bottom:4px;margin-bottom:34px}'+
'#lf-dw .all svg{width:15px;height:15px;stroke:#a8843f;transition:transform .3s}#lf-dw .all:hover svg{transform:translateX(4px)}'+
'#lf-dw .ars{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:auto}'+
'#lf-dw .ar{display:flex;flex-direction:column;align-items:center;gap:10px;text-decoration:none!important}'+
'#lf-dw .aw{position:relative;display:block;width:100%;aspect-ratio:3/4;border-radius:999px 999px 14px 14px;background:#faf7f2;border:1px solid rgba(201,169,97,.35);overflow:hidden;transition:transform .5s cubic-bezier(.2,.8,.2,1)}'+
'#lf-dw .ar:hover .aw{transform:translateY(-6px)}'+
'#lf-dw .aw img{position:absolute;left:8%;top:18%;width:84%;height:74%;object-fit:contain;transition:transform .6s}'+
'#lf-dw .ar:hover .aw img{transform:scale(1.05)}'+
'#lf-dw .ar em{font-style:normal;font-size:12px;line-height:1.35;color:#4a443d;text-align:center;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}'+
'#lf-dw .sk{display:block;aspect-ratio:3/4;border-radius:999px 999px 14px 14px;background:linear-gradient(90deg,#faf7f2,#f1ece4,#faf7f2);background-size:200% 100%;animation:lfsk 1.2s infinite}'+
'@keyframes lfsk{to{background-position:-200% 0}}'+
'@media(max-width:767px){#lf-dw{display:none}}');
})})();
