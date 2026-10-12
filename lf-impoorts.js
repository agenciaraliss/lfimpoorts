/* LF Impoorts — layout personalizado (Nuvemshop / tema Recife)
   Agência Raliss · Sites com a Lari */
(function(){
var show=function(){document.documentElement.classList.add("lf-ready")};
var boot=function(){
try{
/* ---- 00-core ---- */
try{(function(){
if(window.LF&&window.LF.__booted)return;
var LF=window.LF={};LF.__booted=true;
LF.HF="Marcellus, serif";LF.BF="'Libre Franklin', sans-serif";
LF.$=function(s,r){return (r||document).querySelector(s)};
LF.$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
LF.css=function(id,txt){var s=document.getElementById(id);if(!s){s=document.createElement('style');s.id=id;document.head.appendChild(s);}s.textContent=txt;return s};
LF.cap=function(t){return String(t||'').toLowerCase().replace(/(^|[\s\/(\-])([a-zà-ú])/g,function(m,a,b){return a+b.toUpperCase()}).replace(/\b(De|Do|Da|Dos|Das|E|Em|Para|Com|Os|As)\b/g,function(w){return w.toLowerCase()}).replace(/^./,function(c){return c.toUpperCase()}).replace(/'S\b/g,"'s").replace(/\bBbw\b/g,'BBW').replace(/\bVip\b/g,'VIP').replace(/\bYsl\b/g,'YSL')};
LF.brl=function(n){return 'R$'+Number(n).toFixed(2).replace('.',',').replace(/\B(?=(\d{3})+(?!\d),)/g,'.')};
LF.num=function(s){if(s==null)return 0;s=String(s).replace(/[^\d,\.]/g,'');if(s.indexOf(',')>-1)s=s.replace(/\./g,'').replace(',','.');return parseFloat(s)||0};
LF.esc=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
LF.tpl=function(){var b=document.body.className.match(/template-([\w-]+)/);return b?b[1]:''};
LF.mobile=function(){return window.innerWidth<768};
LF.fetchDoc=function(url){LF._dc=LF._dc||{};if(!LF._dc[url]){LF._dc[url]=fetch(url,{credentials:'same-origin'}).then(function(r){return r.text()}).then(function(h){return new DOMParser().parseFromString(h,'text/html')});}return LF._dc[url]};
LF.imgOf=function(img,size){if(!img)return '';var ss=img.getAttribute('data-srcset')||img.getAttribute('srcset')||'';var list=ss?ss.split(',').map(function(x){return x.trim().split(' ')[0]}).filter(Boolean):[];var u='';if(list.length){if(size){u=list.filter(function(x){return x.indexOf('-'+size+'-')>-1})[0]||''}u=u||list[list.length-1]}else{u=img.getAttribute('data-src')||img.getAttribute('src')||''}if(/^data:/.test(u))u='';if(u&&u.indexOf('//')===0)u='https:'+u;return u};
LF.wa=function(){var a=LF.$('a.btn-whatsapp')||LF.$('a[href*="wa.me"]');var m=a&&a.getAttribute('href').match(/(\d{10,13})/);return m?m[1]:''};
LF.waLink=function(msg){var n=LF.wa();return n?('https://wa.me/'+n+(msg?'?text='+encodeURIComponent(msg):'')):''};
LF.logoUrl=function(){var i=LF.$('header.js-head-main .js-logo-container img')||LF.$('.logo-img-container img');return LF.imgOf(i)};
LF.storeName=function(){var i=LF.$('header.js-head-main .js-logo-container img');return (i&&i.alt)||'Início'};
LF.menu=function(){if(LF._menu)return LF._menu;var lis=LF.$$('.js-nav-desktop-list > li, .nav-desktop-list > li');if(!lis.length)lis=LF.$$('#nav-hamburger .nav-list > li');var seen={};LF._menu=lis.map(function(li){var a=li.querySelector('a');if(!a)return null;var t=a.textContent.trim();var subs=LF.$$('ul a',li).filter(function(x){return x.textContent.trim().toUpperCase()!==t.toUpperCase()}).map(function(x){return{t:LF.cap(x.textContent.trim()),h:x.getAttribute('href')}});return{t:LF.cap(t),h:a.getAttribute('href'),subs:subs}}).filter(function(m){if(!m||seen[m.h])return false;seen[m.h]=1;return true});return LF._menu};
LF.path=function(u){try{return new URL(u,location.origin).pathname.replace(/\/page\/\d+\/?$/,'/').replace(/\/?$/,'/')}catch(e){return ''}};
LF.ico={
 search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/></svg>',
 user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M4.8 20.2c1.3-3.7 4-5.6 7.2-5.6s5.9 1.9 7.2 5.6"/></svg>',
 bag:'<svg viewBox="0 0 24 24"><path d="M5.2 8.2h13.6l-.9 11.3a1.6 1.6 0 0 1-1.6 1.5H7.7a1.6 1.6 0 0 1-1.6-1.5z"/><path d="M8.8 10.4V7a3.2 3.2 0 0 1 6.4 0v3.4"/></svg>',
 bow:'<svg viewBox="0 0 24 24"><path d="M5.2 8.6h13.6l-.9 11a1.6 1.6 0 0 1-1.6 1.4H7.7a1.6 1.6 0 0 1-1.6-1.4z"/><path d="M12 8.6c-1.6-2.6-4.4-3.4-4.4-1.6 0 1.3 2.2 1.6 4.4 1.6zM12 8.6c1.6-2.6 4.4-3.4 4.4-1.6 0 1.3-2.2 1.6-4.4 1.6z"/></svg>',
 x:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
 arr:'<svg viewBox="0 0 24 24"><path d="M5 12h13M13 7l5 5-5 5"/></svg>',
 chev:'<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
 wa:'<svg viewBox="0 0 24 24"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/></svg>',
 mail:'<svg viewBox="0 0 24 24"><rect x="3.5" y="6" width="17" height="12" rx="1.5"/><path d="M4 7l8 6 8-6"/></svg>',
 truck:'<svg viewBox="0 0 24 24"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.5"/><circle cx="17" cy="17.5" r="1.5"/></svg>',
 box:'<svg viewBox="0 0 24 24"><path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v8"/></svg>',
 check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
 bell:'<svg viewBox="0 0 24 24"><path d="M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5H5z"/><path d="M10 20.2a2.2 2.2 0 0 0 4 0"/></svg>'
};
LF.mods=[];LF.add=function(name,fn){LF.mods.push({n:name,f:fn})};
LF.run=function(){var lu=LF.logoUrl();if(lu)document.documentElement.style.setProperty('--lf-logo','url("'+lu+'")');LF.mods.forEach(function(m){if(m.done)return;try{m.f();m.done=1}catch(e){console.warn('[LF] '+m.n,e)}})};
LF.liveSearch=function(inp,box){var tm,ctr;inp.addEventListener('input',function(){clearTimeout(tm);var q=inp.value.trim();if(q.length<2){box.innerHTML='';box.classList.remove('on');return}tm=setTimeout(function(){if(ctr)ctr.abort();ctr=window.AbortController?new AbortController():null;fetch('/search/?q='+encodeURIComponent(q),ctr?{signal:ctr.signal}:{}).then(function(r){return r.text()}).then(function(h){var d=new DOMParser().parseFromString(h,'text/html');var P=LF.$$('.js-item-product',d).slice(0,6).map(function(p){var i=p.querySelector('img.item-image-featured')||p.querySelector('img');var a=p.querySelector('a[href*="/produtos/"]');var n=((p.querySelector('.js-item-name')||{}).textContent||(i&&i.alt)||'').trim();if(!a||!n)return '';var pr=(p.querySelector('.js-price-display')||{}).textContent||'';return '<a href="'+a.getAttribute('href')+'"><img src="'+LF.imgOf(i,'240')+'" alt=""><div><b>'+LF.esc(n)+'</b><span>'+LF.esc(pr.trim())+'</span></div></a>'}).join('');box.innerHTML=P?P+'<a class="all" href="/search/?q='+encodeURIComponent(q)+'">Ver todos os resultados</a>':'<p>Nenhum perfume encontrado para “'+LF.esc(q)+'”.</p>';box.classList.add('on')}).catch(function(){})},280)})};
})()}catch(e){console.warn("[LF] 00-core",e)}
/* ---- 10-header ---- */
try{(function(){LF.add('header',function(){
var $=LF.$,I=LF.ico;
var nat=$('header.js-head-main');if(!nat||$('#lf-head'))return;
var accA=$('header.js-head-main a.btn-utility[href*="/account"]');var acc=accA?accA.getAttribute('href'):'/account/login/';
var head=document.createElement('div');head.id='lf-head';
head.innerHTML='<div class="lf-row"><div class="lf-left"><button type="button" class="lf-mbtn" aria-label="Abrir menu"><i></i><span>Menu</span></button><div class="lf-sbox"><button type="button" class="lf-sic" aria-label="Buscar">'+I.search+'</button><input type="search" placeholder="Qual perfume você procura?" autocomplete="off" aria-label="Buscar"><button type="button" class="lf-sx" aria-label="Fechar busca">'+I.x+'</button><div class="lf-sres"></div></div><button type="button" class="lf-msb" aria-label="Buscar">'+I.search+'</button></div><a class="lf-logo" href="/" aria-label="'+LF.esc(LF.storeName())+'"><i class="lf-lgm"></i></a><div class="lf-icons"><a href="'+acc+'" aria-label="Minha conta">'+I.user+'</a><a href="#" class="lf-bag" aria-label="Sacola">'+I.bow+'<span class="lf-count">0</span></a></div></div>';
nat.parentNode.insertBefore(head,nat);nat.classList.add('lf-nat-head');
var onS=function(){head.classList.toggle('lf-small',window.scrollY>60)};window.addEventListener('scroll',onS,{passive:true});onS();
head.querySelector('.lf-bag').addEventListener('click',function(e){e.preventDefault();var b=$('header.js-head-main [data-toggle="#modal-cart"]')||$('[data-toggle="#modal-cart"]');if(b)b.click();else location.href='/comprar/'});
var cnt=head.querySelector('.lf-count');var src=$('header.js-head-main .js-cart-widget-amount')||$('.js-cart-widget-amount');
var upd=function(){var n=parseInt((src&&src.textContent)||'0',10)||0;cnt.textContent=n;cnt.classList.toggle('on',n>0)};
if(src){upd();new MutationObserver(upd).observe(src,{childList:true,characterData:true,subtree:true})}
var sb=head.querySelector('.lf-sbox'),inp=sb.querySelector('input'),res=sb.querySelector('.lf-sres');
var openS=function(){sb.classList.add('on');setTimeout(function(){inp.focus()},50)};
var closeS=function(){sb.classList.remove('on');res.innerHTML='';res.classList.remove('on');inp.value=''};
sb.querySelector('.lf-sic').addEventListener('click',function(){if(sb.classList.contains('on')&&inp.value.trim())location.href='/search/?q='+encodeURIComponent(inp.value.trim());else openS()});
sb.querySelector('.lf-sx').addEventListener('click',closeS);
document.addEventListener('click',function(e){if(!sb.contains(e.target)&&!inp.value)closeS()});
inp.addEventListener('keydown',function(e){if(e.key==='Enter'&&inp.value.trim())location.href='/search/?q='+encodeURIComponent(inp.value.trim());if(e.key==='Escape')closeS()});
LF.liveSearch(inp,res);
head.querySelector('.lf-mbtn').addEventListener('click',function(){if(LF.mobile()){LF.openMDrawer&&LF.openMDrawer()}else{LF.openDrawer&&LF.openDrawer()}});
head.querySelector('.lf-msb').addEventListener('click',function(){LF.openMSearch&&LF.openMSearch()});
LF.css('lf-head-css',
'header.js-head-main.lf-nat-head{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;opacity:0!important;pointer-events:none!important;top:0;left:0}'+
'.js-big-search-mobile{display:none!important}'+
'#lf-head{position:sticky;top:0;z-index:1000;background:#faf7f2;font-family:'+LF.BF+';color:#141210;transition:background .45s,box-shadow .45s}'+
'#lf-head *{box-sizing:border-box}'+
'#lf-head:after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:linear-gradient(90deg,transparent,rgba(184,146,79,.55) 22%,#e6cf98 50%,rgba(184,146,79,.55) 78%,transparent);pointer-events:none}'+
'#lf-head.lf-small{background:rgba(250,247,242,.78);backdrop-filter:saturate(1.4) blur(14px);-webkit-backdrop-filter:saturate(1.4) blur(14px);box-shadow:0 10px 30px -18px rgba(40,30,15,.35)}'+
'#lf-head svg{display:block;fill:none;stroke:#141210;stroke-width:1.35;stroke-linecap:round;stroke-linejoin:round}'+
'#lf-head .lf-row{max-width:1440px;margin:0 auto;display:grid;grid-template-columns:1fr auto 1fr;column-gap:24px;align-items:center;height:84px;padding:0 48px;transition:height .4s}'+
'#lf-head.lf-small .lf-row{height:62px}'+
'#lf-head .lf-left{display:flex;align-items:center;gap:22px;min-width:0}'+
'#lf-head button{background:none;border:0;padding:0;cursor:pointer;color:inherit;font:inherit}'+
'#lf-head .lf-mbtn{display:flex;align-items:center;gap:12px;height:42px}'+
'#lf-head .lf-mbtn i{position:relative;width:24px;height:12px;display:block}'+
'#lf-head .lf-mbtn i:before,#lf-head .lf-mbtn i:after{content:"";position:absolute;left:0;height:1.4px;background:#141210;border-radius:2px;transition:width .35s}'+
'#lf-head .lf-mbtn i:before{top:0;width:24px}#lf-head .lf-mbtn i:after{bottom:0;width:15px}'+
'#lf-head .lf-mbtn:hover i:after{width:24px}'+
'#lf-head .lf-mbtn span{font-size:15px;letter-spacing:.02em}'+
'#lf-head .lf-sbox{position:relative;display:flex;align-items:center;height:42px;width:42px;border-radius:30px;border:1px solid transparent;transition:width .5s cubic-bezier(.2,.8,.2,1),border-color .4s,background .4s}'+
'#lf-head .lf-sbox.on{width:320px;border-color:rgba(20,18,16,.14);background:#fff}'+
'#lf-head .lf-sic{flex:0 0 42px;width:42px;height:42px;display:flex;align-items:center;justify-content:center}'+
'#lf-head .lf-sic svg{width:21px;height:21px}'+
'#lf-head .lf-sbox input{flex:1;min-width:0;width:0;border:0!important;outline:0;background:transparent!important;box-shadow:none!important;font:inherit;font-size:13.5px;color:#141210;padding:0;margin:0;height:100%;opacity:0;transition:opacity .3s}'+
'#lf-head .lf-sbox.on input{opacity:1}'+
'#lf-head .lf-sx{flex:0 0 34px;width:34px;height:34px;display:none;align-items:center;justify-content:center}'+
'#lf-head .lf-sbox.on .lf-sx{display:flex}#lf-head .lf-sx svg{width:14px;height:14px}'+
'#lf-head .lf-msb{display:none}'+
'#lf-head .lf-logo{display:flex;align-items:center;justify-content:center}'+
'#lf-head .lf-lgm{display:block;width:124px;height:58px;background:linear-gradient(120deg,#a8803c,#e2c98d 45%,#a8803c);-webkit-mask:var(--lf-logo) center/contain no-repeat;mask:var(--lf-logo) center/contain no-repeat;transition:width .4s,height .4s}'+
'#lf-head.lf-small .lf-lgm{width:90px;height:42px}'+
'#lf-head .lf-icons{display:flex;align-items:center;justify-content:flex-end;gap:10px}'+
'#lf-head .lf-icons a{position:relative;width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:50%;transition:background .3s}'+
'#lf-head .lf-icons a:hover{background:rgba(201,169,97,.12)}'+
'#lf-head .lf-icons svg{width:23px;height:23px}'+
'#lf-head .lf-count{position:absolute;top:3px;right:1px;min-width:17px;height:17px;padding:0 4px;border-radius:9px;background:#141210;color:#e6cf98;font-size:9.5px;font-weight:600;display:flex;align-items:center;justify-content:center;transform:scale(0);transition:transform .35s}'+
'#lf-head .lf-count.on{transform:scale(1)}'+
'.lf-sres{position:absolute;top:calc(100% + 10px);left:0;width:380px;max-height:70vh;overflow:auto;background:#fff;border-radius:18px;box-shadow:0 30px 60px -25px rgba(40,30,15,.4);border:1px solid rgba(20,18,16,.06);padding:8px;display:none;z-index:5}'+
'.lf-sres.on{display:block}'+
'.lf-sres a,#lf-msr .rs a{display:flex;align-items:center;gap:14px;padding:9px 8px;border-radius:12px;text-decoration:none!important;color:#141210!important;transition:background .25s}'+
'.lf-sres a:hover{background:#faf7f2}'+
'.lf-sres img,#lf-msr .rs img{width:52px;height:52px;object-fit:contain;background:#fff;border-radius:10px;flex:0 0 52px;border:1px solid rgba(20,18,16,.05)}'+
'.lf-sres b,#lf-msr .rs b{display:block;font-weight:500;font-size:13px;line-height:1.35}'+
'.lf-sres span,#lf-msr .rs span{font-size:12.5px;color:#7a736a}'+
'.lf-sres .all,#lf-msr .rs .all{justify-content:center;padding:12px 0 6px;font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#a8843f!important}'+
'.lf-sres p,#lf-msr .rs p{text-align:center;color:#7a736a;font-size:13px;margin:14px 0}'+
'@media(max-width:1100px){#lf-head .lf-row{padding:0 24px}#lf-head .lf-sbox.on{width:240px}}');
})})()}catch(e){console.warn("[LF] 10-header",e)}
/* ---- 11-drawer ---- */
try{(function(){LF.add('drawer',function(){
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
})})()}catch(e){console.warn("[LF] 11-drawer",e)}
/* ---- 12-mobile ---- */
try{(function(){LF.add('mobile-nav',function(){
var $=LF.$,I=LF.ico,HF=LF.HF;if($('#lf-mdw'))return;
var M=LF.menu();var accA=$('#lf-head .lf-icons a');var acc=accA?accA.getAttribute('href'):'/account/login/';var wa=LF.waLink();
var dw=document.createElement('div');dw.id='lf-mdw';
dw.innerHTML='<div class="bk"></div><aside class="pn" role="dialog" aria-label="Menu"><div class="tp"><a href="/" class="lg" aria-label="Início"><i></i></a><button class="x" type="button" aria-label="Fechar">'+I.x+'</button></div><button class="sr" type="button">'+I.search+'<span>Qual perfume você procura?</span></button><small class="ey">Navegue</small><nav>'+M.map(function(it){return it.subs.length?'<div class="gp"><button class="c" type="button" aria-expanded="false"><span>'+LF.esc(it.t)+'</span><i class="pl"></i></button><div class="sb"><div>'+it.subs.map(function(s){return '<a href="'+s.h+'">'+LF.esc(s.t)+'</a>'}).join('')+'<a class="all" href="'+it.h+'">Ver tudo em '+LF.esc(it.t)+'</a></div></div></div>':'<a class="c" href="'+it.h+'"><span>'+LF.esc(it.t)+'</span>'+I.chev+'</a>'}).join('')+'</nav><div class="ft"><a href="'+acc+'">'+I.user+'Minha conta</a><a href="/account/orders/">'+I.bag+'Meus pedidos</a>'+(wa?'<a href="'+wa+'" target="_blank" rel="noopener">'+I.wa+'Atendimento</a>':'')+'</div></aside>';
document.body.appendChild(dw);
var sr=document.createElement('div');sr.id='lf-msr';
sr.innerHTML='<div class="bx"><form>'+I.search+'<input type="search" placeholder="Qual perfume você procura?" autocomplete="off" enterkeyhint="search" aria-label="Buscar"><button type="button" class="cl">Fechar</button></form><div class="rs"></div></div>';
document.body.appendChild(sr);
var lock=function(on){document.documentElement.style.overflow=on?'hidden':''};
LF.openMDrawer=function(){dw.classList.add('on');lock(true)};
var close=function(){dw.classList.remove('on');lock(false)};
dw.querySelector('.bk').onclick=close;dw.querySelector('.x').onclick=close;
dw.querySelectorAll('.gp > .c').forEach(function(b){b.onclick=function(){var g=b.parentElement;var o=!g.classList.contains('op');dw.querySelectorAll('.gp.op').forEach(function(x){if(x!==g)x.classList.remove('op')});g.classList.toggle('op',o);b.setAttribute('aria-expanded',o)}});
var inp=sr.querySelector('input'),rs=sr.querySelector('.rs');
LF.openMSearch=function(){close();sr.classList.add('on');lock(true);setTimeout(function(){inp.focus()},80)};
var closeS=function(){sr.classList.remove('on');lock(false)};
dw.querySelector('.sr').onclick=LF.openMSearch;sr.onclick=function(e){if(e.target===sr)closeS()};sr.querySelector('.cl').onclick=closeS;
sr.querySelector('form').onsubmit=function(e){e.preventDefault();if(inp.value.trim())location.href='/search/?q='+encodeURIComponent(inp.value.trim())};
LF.liveSearch(inp,rs);
LF.css('lf-mob-css','#lf-mdw,#lf-msr{display:none}@media(max-width:767px){'+
'#lf-head .lf-row{height:62px;padding:0 12px;column-gap:6px}#lf-head.lf-small .lf-row{height:54px}#lf-head .lf-left{gap:0}'+
'#lf-head .lf-mbtn span,#lf-head .lf-sbox{display:none!important}#lf-head .lf-mbtn{width:42px;justify-content:center}'+
'#lf-head .lf-msb{display:flex;align-items:center;justify-content:center;width:42px;height:42px}#lf-head .lf-msb svg{width:21px;height:21px}'+
'#lf-head .lf-lgm{width:104px;height:42px}#lf-head.lf-small .lf-lgm{width:88px;height:36px}#lf-head .lf-icons{gap:0}#lf-head .lf-icons svg{width:22px;height:22px}'+
'#lf-mdw{display:block;position:fixed;inset:0;z-index:20000;pointer-events:none;font-family:'+LF.BF+'}'+
'#lf-mdw .bk{position:absolute;inset:0;background:rgba(15,14,13,.45);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);opacity:0;transition:opacity .4s}'+
'#lf-mdw .pn{position:absolute;top:0;left:0;bottom:0;width:min(88vw,380px);background:#faf7f2;transform:translateX(-102%);transition:transform .5s cubic-bezier(.2,.8,.2,1);display:flex;flex-direction:column;overflow-y:auto;overscroll-behavior:contain;box-shadow:20px 0 60px -20px rgba(0,0,0,.35)}'+
'#lf-mdw.on{pointer-events:auto}#lf-mdw.on .bk{opacity:1}#lf-mdw.on .pn{transform:none}#lf-mdw *{box-sizing:border-box}'+
'#lf-mdw svg{display:block;fill:none;stroke:#141210;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round}'+
'#lf-mdw .tp{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 10px 22px}'+
'#lf-mdw .lg i{display:block;width:104px;height:40px;background:linear-gradient(120deg,#a8803c,#d9bd7c 45%,#a8803c);-webkit-mask:var(--lf-logo) left center/contain no-repeat;mask:var(--lf-logo) left center/contain no-repeat}'+
'#lf-mdw .x{width:40px;height:40px;border-radius:50%;border:1px solid rgba(20,18,16,.12);background:#fff;display:flex;align-items:center;justify-content:center;padding:0}#lf-mdw .x svg{width:16px;height:16px}'+
'#lf-mdw .sr{margin:10px 18px 6px;height:46px;border-radius:30px;border:1px solid rgba(20,18,16,.12);background:#fff;display:flex;align-items:center;gap:10px;padding:0 18px;font:inherit;font-size:13.5px;color:#8a837a;text-align:left}#lf-mdw .sr svg{width:17px;height:17px;stroke:#a8843f}'+
'#lf-mdw .ey{display:flex;align-items:center;gap:10px;padding:22px 22px 6px;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:#a8843f}#lf-mdw .ey:before{content:"";width:22px;height:1px;background:#c9a961}'+
'#lf-mdw nav{padding:0 22px}'+
'#lf-mdw .c{width:100%;display:flex;align-items:center;justify-content:space-between;padding:16px 2px;border:0;border-bottom:1px solid rgba(20,18,16,.07);background:none;font-family:'+HF+';font-size:19px;color:#141210!important;text-decoration:none!important;text-align:left}#lf-mdw .c svg{width:16px;height:16px;stroke:#b8924a}'+
'#lf-mdw .pl{position:relative;width:14px;height:14px}#lf-mdw .pl:before,#lf-mdw .pl:after{content:"";position:absolute;left:0;right:0;top:50%;height:1px;background:#b8924a;transition:transform .4s}#lf-mdw .pl:after{transform:rotate(90deg)}#lf-mdw .gp.op .pl:after{transform:rotate(0)}'+
'#lf-mdw .sb{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s cubic-bezier(.2,.8,.2,1)}#lf-mdw .gp.op .sb{grid-template-rows:1fr}#lf-mdw .sb>div{overflow:hidden;display:flex;flex-direction:column}'+
'#lf-mdw .sb a{padding:11px 0 11px 16px;font-size:14px;color:#5a534b!important;text-decoration:none!important;border-left:1px solid rgba(201,169,97,.4);margin-left:2px}#lf-mdw .gp.op .sb>div{padding:8px 0 14px}'+
'#lf-mdw .sb a.all{font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#a8843f!important;padding-top:14px}'+
'#lf-mdw .ft{margin-top:auto;padding:26px 22px 30px;display:flex;flex-direction:column;gap:4px;background:linear-gradient(180deg,transparent,rgba(201,169,97,.06))}'+
'#lf-mdw .ft a{display:flex;align-items:center;gap:12px;padding:10px 0;font-size:13.5px;color:#3d3730!important;text-decoration:none!important}#lf-mdw .ft svg{width:18px;height:18px;stroke:#a8843f}'+
'#lf-msr{display:block;position:fixed;inset:0;z-index:20001;pointer-events:none;background:rgba(15,14,13,.35);opacity:0;transition:opacity .35s;font-family:'+LF.BF+'}#lf-msr.on{opacity:1;pointer-events:auto}'+
'#lf-msr .bx{background:#faf7f2;padding:14px 14px 18px;transform:translateY(-100%);transition:transform .45s cubic-bezier(.2,.8,.2,1);max-height:85vh;overflow-y:auto;border-radius:0 0 22px 22px;box-shadow:0 20px 50px -20px rgba(0,0,0,.4)}#lf-msr.on .bx{transform:none}'+
'#lf-msr form{display:flex;align-items:center;gap:10px;height:50px;padding:0 6px 0 18px;border-radius:30px;background:#fff;border:1px solid rgba(201,169,97,.55);margin:0}'+
'#lf-msr form svg{width:18px;height:18px;fill:none;stroke:#a8843f;stroke-width:1.5;stroke-linecap:round;flex:0 0 18px}'+
'#lf-msr input{flex:1;min-width:0;border:0!important;outline:0;background:transparent!important;font:inherit;font-size:16px;color:#141210;box-shadow:none!important;padding:0;height:100%}'+
'#lf-msr .cl{border:0;background:#141210;color:#f5f0e7;height:38px;padding:0 16px;border-radius:24px;font:inherit;font-size:10px;letter-spacing:.16em;text-transform:uppercase}'+
'#lf-msr .rs a{border-radius:0;border-bottom:1px solid rgba(20,18,16,.06)}#lf-msr .rs .all{border:0}}');
})})()}catch(e){console.warn("[LF] 12-mobile",e)}
/* ---- 13-drawer-bg ---- */
try{(function(){LF.add('drawer-bg',function(){LF.css('lf-dw2-css','#lf-dw .ex{background:#faf7f2;border-left:1px solid rgba(201,169,97,.25)}#lf-dw .aw{background:#fff;border-color:rgba(201,169,97,.4)}#lf-dw .sk{background:linear-gradient(90deg,#fff,#f3eee6,#fff);background-size:200% 100%}#lf-dw .sbs a{background:rgba(255,255,255,.6)}')})})()}catch(e){console.warn("[LF] 13-drawer-bg",e)}
/* ---- 14-util ---- */
try{(function(){
LF.cleanName=function(n){var t=String(n||'');var r={tags:[],badges:[]};if(/\bdecant\b/i.test(t))r.tags.push('Decant');if(/miniatura/i.test(t))r.tags.push('Miniatura');if(/lan[çc]amento/i.test(t))r.badges.push('Lançamento');if(/pr[ée][\s-]?venda/i.test(t))r.badges.push('Pré-venda');
 t=t.replace(/\(\s*decant\s*\)/ig,'').replace(/^\s*decant\s+/i,'').replace(/^\s*decant(?=[A-ZÀ-Ú0-9])/,'').replace(/\s+decant\s*$/i,'').replace(/lan[çc]amento\s*(\d{4})?/ig,'').replace(/pr[ée][\s-]?venda/ig,'').replace(/\(\s*\)/g,'').replace(/\s*[-–|]\s*$/,'').replace(/\s{2,}/g,' ').trim();r.name=t;return r};
LF.add('adbar',function(){var a=LF.$('.js-adbar');if(!a||a.dataset.lf)return;a.dataset.lf=1;
 LF.$$('.adbar-message',a).forEach(function(m){if(m.dataset.lf)return;m.dataset.lf=1;m.innerHTML=m.innerHTML.replace(/\b([A-ZÀ-Ú0-9]{4,})\b/g,function(w){return /^\d+$/.test(w)?w:'<b class="lf-cupom">'+w+'</b>'})});
 LF.css('lf-adbar-css','.js-adbar{background:#0b0b0b!important;color:#f3eee6!important;position:relative;overflow:hidden;font-family:'+LF.BF+'}'+
 '.js-adbar .adbar-message{color:#f3eee6!important;font-size:12.5px!important;letter-spacing:.06em;display:inline-flex!important;align-items:center;margin-right:0!important;padding-right:34px;position:relative}'+
 '.js-adbar .adbar-message:after{content:"";position:absolute;right:14px;top:50%;width:5px;height:5px;margin-top:-3px;border:1px solid #c9a961;transform:rotate(45deg)}'+
 '.js-adbar .lf-cupom{display:inline-flex;align-items:center;height:20px;padding:0 10px;margin-left:8px;border:1px solid #c9a961;border-radius:12px;color:#e6cf98;font-size:10.5px;letter-spacing:.16em;font-weight:600}'+
 '.js-adbar:after{content:"";position:absolute;top:0;bottom:0;left:-30%;width:22%;background:linear-gradient(90deg,transparent,rgba(230,207,152,.16),transparent);animation:lfluz 7s ease-in-out infinite;pointer-events:none}'+
 '@keyframes lfluz{0%,55%{left:-30%}100%{left:130%}}'+
 '.js-adbar:hover .js-adbar-text-container,.js-adbar:hover .js-adbar-animated{animation-play-state:paused!important}')});
LF.add('titles',function(){LF.$$('h2.section-title, .js-banners-section-title').forEach(function(h){if(h.dataset.lf)return;h.dataset.lf=1;var t=h.textContent.trim();if(!t){(h.closest('.section-title-container')||h).classList.add('lf-empty');h.classList.add('lf-empty');return}h.innerHTML='<span class="lf-tt">'+LF.esc(LF.cap(t)).replace('Best-sellers','Best-Sellers')+'</span><i class="lf-orn"><em></em></i>'});
 LF.css('lf-titles-css','h2.section-title{text-align:center!important;text-transform:none!important;letter-spacing:.005em!important;margin-bottom:34px!important}'+
 'h2.section-title .lf-tt{display:block;font-family:'+LF.HF+';font-weight:400;font-size:34px;line-height:1.15;color:#141210}'+
 'h2.section-title .lf-orn{display:flex;justify-content:center;align-items:center;gap:10px;margin-top:12px}'+
 'h2.section-title .lf-orn:before,h2.section-title .lf-orn:after{content:"";width:46px;height:1px;background:linear-gradient(90deg,transparent,#c9a961)}h2.section-title .lf-orn:after{transform:scaleX(-1)}'+
 'h2.section-title .lf-orn em{width:6px;height:6px;border:1px solid #c9a961;transform:rotate(45deg)}'+
 '.lf-empty{display:none!important}'+
 '@media(max-width:767px){h2.section-title .lf-tt{font-size:26px}h2.section-title{margin-bottom:22px!important}}')});
})()}catch(e){console.warn("[LF] 14-util",e)}
/* ---- 20-infobanner ---- */
try{(function(){LF.add('infobanner',function(){
var s=LF.$('.section-informative-banners');if(!s||LF.$('#lf-ib'))return;
var IC={box:'<path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v8"/>',card:'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 14.5h4"/>',shield:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',bottle:'<path d="M10 3h4v3l2 2v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8l2-2z"/><path d="M8 12h8"/>',ret:'<path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>',seal:'<circle cx="12" cy="10" r="6"/><path d="M9 15l-1.5 6L12 19l4.5 2L15 15"/>',tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8" r="1.3"/>',gem:'<path d="M6 4h12l3 5-9 11L3 9z"/><path d="M3 9h18M9 4l3 16 3-16"/>'};
var pick=function(t){t=t.toLowerCase();if(/envi|frete|entreg|brasil/.test(t))return 'box';if(/parcel|cart[ãa]o|pix|pagament|juros/.test(t))return 'card';if(/dados|segur|proteg|tranquil/.test(t))return 'shield';if(/encomenda|whats|pedido/.test(t))return 'bottle';if(/troca|devolu/.test(t))return 'ret';if(/original|autent/.test(t))return 'seal';if(/descont|cupom|ofert/.test(t))return 'tag';return 'gem'};
var items=LF.$$('.swiper-slide',s).map(function(x){var h=x.querySelector('h3,h4,h5,.h6,strong');var p=x.querySelector('p');return{t:h?h.textContent.trim():'',p:p?p.textContent.trim():''}}).filter(function(i){return i.t});
var seen={};items=items.filter(function(i){if(seen[i.t])return false;seen[i.t]=1;return true});
var ib=document.createElement('div');ib.id='lf-ib';
ib.innerHTML='<div class="in">'+items.map(function(i){return '<div class="it"><svg viewBox="0 0 24 24">'+IC[pick(i.t+' '+i.p)]+'</svg><div><b>'+LF.esc(i.t)+'</b>'+(i.p?'<span>'+LF.esc(LF.cap(i.p).replace(/^./,function(c){return c.toUpperCase()}))+'</span>':'')+'</div></div>'}).join('<i class="sep"></i>')+'</div>';
s.classList.add('lf-ib-host');s.insertBefore(ib,s.firstChild);
LF.css('lf-ib-css','.section-informative-banners.lf-ib-host{background:#faf7f2!important;padding:0!important;border-bottom:1px solid #efe8de}'+
'.lf-ib-host>*:not(#lf-ib){display:none!important}'+
'#lf-ib{background:linear-gradient(180deg,rgba(255,255,255,.7),rgba(255,255,255,.35));backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);font-family:'+LF.BF+'}'+
'#lf-ib .in{max-width:1240px;margin:0 auto;display:flex;align-items:center;justify-content:center;gap:28px;padding:16px 24px}'+
'#lf-ib .it{display:flex;align-items:center;gap:12px;flex:0 1 auto;min-width:0}'+
'#lf-ib svg{width:28px;height:28px;flex:0 0 28px;fill:none;stroke:#b8924a;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round}'+
'#lf-ib b{display:block;font-size:10.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:#141210;white-space:nowrap}'+
'#lf-ib span{display:block;font-size:12px;color:#7a736a;margin-top:3px;white-space:nowrap}'+
'#lf-ib .sep{flex:0 0 5px;width:5px;height:5px;border:1px solid #c9a961;transform:rotate(45deg)}'+
'@media(max-width:1100px){#lf-ib .in{justify-content:flex-start;overflow-x:auto;scrollbar-width:none;gap:20px}#lf-ib .in::-webkit-scrollbar{display:none}}'+
'@media(max-width:767px){#lf-ib .in{padding:12px 16px}#lf-ib svg{width:24px;height:24px;flex-basis:24px}}');
})})()}catch(e){console.warn("[LF] 20-infobanner",e)}
/* ---- 21-cards ---- */
try{(function(){
LF.cardify=function(root){LF.$$('.js-item-product',root||document).forEach(function(c){if(c.dataset.lfc)return;var item=c.querySelector('.item')||c;var desc=c.querySelector('.item-description');if(!desc)return;c.dataset.lfc=1;c.classList.add('lf-card');
 var nm=c.querySelector('.js-item-name');if(nm){var r=LF.cleanName(nm.textContent);nm.innerHTML=(r.tags[0]?'<small class="lf-tag">'+r.tags[0]+'</small>':'')+'<span class="lf-nm">'+LF.esc(r.name)+'</span>';var imc=c.querySelector('.js-product-item-image-container-private, .item-image');if(imc&&r.badges.length&&!imc.querySelector('.lf-badge'))imc.insertAdjacentHTML('beforeend','<span class="lf-badge">'+r.badges[0]+'</span>')}
 LF.$$('span',c).forEach(function(s){if(/^\(0\)$/.test(s.textContent.trim())){var w=s.closest('.mi-w-full')||s.parentElement;w.classList.add('lf-norate')}});
 var pd=c.querySelector('.js-payment-discount-price-product-container');
 if(pd&&!/display:\s*none/.test(pd.getAttribute('style')||'')&&pd.textContent.trim()){c.classList.add('lf-haspix');LF.$$('span',pd).forEach(function(s){var t=s.textContent.trim().toLowerCase();if(t==='com')s.classList.add('lf-com');if(t==='pix'){s.classList.add('lf-pixw');s.textContent='no Pix'}})}
 var pr=c.querySelector('.js-price-display');if(pr&&c.classList.contains('lf-haspix')&&!c.querySelector('.lf-nc'))pr.insertAdjacentHTML('afterend','<em class="lf-nc">no cartão</em>');
 var st=c.querySelector('.js-stock-label');var out=st&&/esgotad/i.test(st.textContent)&&!/display:\s*none/.test(st.getAttribute('style')||'');
 LF.$$('.item-actions, .js-quickshop-modal-open, .js-addtocart',c).forEach(function(b){b.classList.add('lf-hid')});
 var bw=document.createElement('div');bw.className='lf-buyw';
 var link=(c.querySelector('a.item-link')||c.querySelector('a[href*="/produtos/"]'));
 if(out){c.classList.add('lf-out');var n=(nm&&nm.querySelector('.lf-nm'))?nm.querySelector('.lf-nm').textContent:'';var im=c.querySelector('.js-product-item-image-container-private, .item-image');if(im&&!im.querySelector('.lf-veil'))im.insertAdjacentHTML('beforeend','<div class="lf-veil"><span class="a">Esgotado</span><span class="b">Te avisamos quando voltar</span></div>');var wl=LF.waLink('Olá! Quero ser avisada quando o '+n+' voltar ao estoque 🤍');bw.innerHTML='<a class="lf-buy lf-notify" href="'+(wl||(link?link.getAttribute('href'):'#'))+'" target="_blank" rel="noopener">'+LF.ico.bell+'<span>Avise-me quando chegar</span></a>'}
 else{bw.innerHTML='<button type="button" class="lf-buy">'+LF.ico.bag+'<span>Comprar</span></button>';bw.firstChild.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();var q=c.querySelector('.js-quickshop-modal-open');if(q)q.click();else if(link)location.href=link.getAttribute('href')})}
 desc.appendChild(bw)})};
LF.add('cards',function(){LF.cardify();var tm;new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(function(){LF.cardify()},120)}).observe(document.body,{childList:true,subtree:true});
LF.css('lf-cards-css',
'.lf-card{font-family:'+LF.BF+'}'+
'.lf-card>.item{position:relative;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 16px 34px -26px rgba(40,30,15,.45),0 0 0 1px rgba(20,18,16,.035);transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s;height:100%;display:flex;flex-direction:column;margin:0!important}'+
'.lf-card:hover>.item{transform:translateY(-5px);box-shadow:0 28px 46px -26px rgba(40,30,15,.5),0 0 0 1px rgba(201,169,97,.25)}'+
'.lf-card .js-product-container{display:flex;flex-direction:column;flex:1}'+
'.lf-card .item-image{background:#fff}'+
'.lf-card .item-description{flex:1;display:flex!important;flex-direction:column;text-align:center;padding:14px 14px 0!important;margin:0!important}'+
'.lf-card .item-description>a.item-link{display:flex;flex-direction:column;flex:1;text-decoration:none!important;color:inherit}'+
'.lf-card .js-item-name{margin:0 0 8px!important;text-transform:none!important}'+
'.lf-card .lf-tag{display:block;font-size:9.5px;letter-spacing:.3em;text-transform:uppercase;color:#b8924a;font-weight:500;margin-bottom:6px}'+
'.lf-card .lf-nm{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-size:14px;line-height:1.35;color:#141210;min-height:38px}'+
'.lf-card .lf-norate{display:none!important}'+
'.lf-card .item-price-container{display:flex;flex-direction:column;align-items:center;margin:auto 0 12px!important;gap:2px}'+
'.lf-card .item-price-container>*{margin:0!important}'+
'.lf-card .js-price-display{font-size:16px!important;font-weight:700!important;color:#141210!important}'+
'.lf-card.lf-haspix .js-price-display{font-size:12.5px!important;font-weight:400!important;color:#7a736a!important}'+
'.lf-card .lf-nc{font-style:normal;font-size:11.5px;color:#9a9288;margin-left:4px!important}'+
'.lf-card .price-compare{font-size:11.5px!important;color:#aaa29a!important}'+
'.lf-card .js-payment-discount-price-product-container{display:flex!important;align-items:center;justify-content:center;gap:8px;font-size:17px!important;font-weight:700!important;color:#141210!important;order:3}'+
'.lf-card .js-payment-discount-price-product-container[style*="none"]{display:none!important}'+
'.lf-card .lf-com{display:none!important}'+
'.lf-card .lf-pixw{display:inline-flex;align-items:center;height:20px;padding:0 9px;border-radius:12px;background:linear-gradient(120deg,#b8924a,#e6cf98 50%,#b8924a);color:#fff!important;font-size:9.5px!important;font-weight:700;letter-spacing:.16em;text-transform:uppercase;text-shadow:0 1px 1px rgba(120,90,30,.35)}'+
'.lf-card .js-max-installments-container,.lf-card .item-installments{order:4;font-size:11.5px!important;color:#8a837a!important}'+
'.lf-card .js-offer-label{background:transparent!important;border:1px solid #c9a961!important;color:#a8843f!important;border-radius:12px!important;font-size:10px!important;padding:2px 7px!important}'+
'.lf-card .labels-absolute .label:not(.js-offer-label),.lf-card .js-stock-label{display:none!important}'+
'.lf-card .lf-badge{position:absolute;top:12px;left:12px;z-index:3;height:24px;display:inline-flex;align-items:center;padding:0 11px;border-radius:14px;background:#141210;color:#e6cf98;font-size:9px;letter-spacing:.2em;text-transform:uppercase}'+
'.lf-card .lf-hid{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;opacity:0!important;pointer-events:none!important}'+
'.lf-card .lf-buyw{margin:0 -14px;margin-top:auto}'+
'.lf-card .lf-buy{width:100%;height:40px;display:flex;align-items:center;justify-content:center;gap:9px;border:0;border-radius:0;background:#141210;color:#f5f0e7!important;font-family:'+LF.BF+';font-size:10.5px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;cursor:pointer;text-decoration:none!important;transition:background .35s,color .35s}'+
'.lf-card .lf-buy svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round}'+
'.lf-card .lf-buy:hover{background:#2a241c;color:#e6cf98!important}'+
'.lf-card.lf-out .lf-notify{background:#fff;color:#141210!important;border-top:1px solid rgba(20,18,16,.08);letter-spacing:.16em;font-size:9.5px}'+
'.lf-card.lf-out .lf-notify:hover{background:#faf7f2;color:#a8843f!important}'+
'.lf-card .lf-veil{position:absolute;inset:0;z-index:4;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;background:rgba(255,255,255,.55);backdrop-filter:grayscale(1);-webkit-backdrop-filter:grayscale(1);pointer-events:none}'+
'.lf-card .lf-veil .a{font-family:'+LF.HF+';font-size:20px;color:#141210;padding:6px 18px;border-top:1px solid #c9a961;border-bottom:1px solid #c9a961;background:rgba(255,255,255,.7)}'+
'.lf-card .lf-veil .b{font-size:11px;color:#7c6440;opacity:0;transform:translateY(4px);transition:all .4s}'+
'.lf-card.lf-out:hover .lf-veil .b{opacity:1;transform:none}'+
'.lf-card .item-image img{transition:opacity .5s}'+
'@media(max-width:767px){'+
'html body .swiper-wrapper.swiper-mobile-only{display:flex!important;transform:none!important;overflow-x:auto;overflow-y:visible;scroll-snap-type:x mandatory;gap:12px;padding:6px 16px 22px!important;margin:0!important;scrollbar-width:none;-webkit-overflow-scrolling:touch;width:auto!important;box-sizing:border-box}'+
'html body .swiper-wrapper.swiper-mobile-only::-webkit-scrollbar{display:none}'+
'html body .swiper-wrapper.swiper-mobile-only>.js-item-product{flex:0 0 calc((100% - 44px)/2.15)!important;width:calc((100% - 44px)/2.15)!important;max-width:none!important;margin:0!important;scroll-snap-align:start;scroll-margin-left:16px}'+
'html body .swiper-container:has(> .swiper-mobile-only){overflow:visible!important;margin:0 -15px!important}'+
'.lf-card .lf-nm{font-size:13px;min-height:35px}.lf-card .js-payment-discount-price-product-container{font-size:15px!important;gap:6px}.lf-card .lf-pixw{font-size:8.5px!important;padding:0 7px;height:18px}.lf-card .lf-buy{height:38px;font-size:9.5px;letter-spacing:.16em}'+
'}');
});
})()}catch(e){console.warn("[LF] 21-cards",e)}
/* ---- 22-sections ---- */
try{(function(){LF.add('sections',function(){
LF.$$('#lf-ib span').forEach(function(s){s.textContent=s.textContent.toLowerCase().replace(/^./,function(c){return c.toUpperCase()}).replace(/whatsapp/i,'WhatsApp')});
LF.css('lf-sec-css','.js-section-products-featured,.js-section-products-new,.js-section-products-best-seller,.js-section-products-promotion{background:#f4f2ef!important;padding:64px 0 54px!important;margin:0!important}'+
'.js-section-products-featured>.container,.js-section-products-new>.container,.js-section-products-best-seller>.container,.js-section-products-promotion>.container,.js-section-products-sale>.container{max-width:1150px!important}'+
'.js-section-products-new,.js-section-products-promotion{background:#faf8f5!important}'+
'@media(max-width:767px){.js-section-products-featured,.js-section-products-new,.js-section-products-best-seller,.js-section-products-promotion{padding:40px 0 26px!important}}')})})()}catch(e){console.warn("[LF] 22-sections",e)}
/* ---- 15-head-icons ---- */
try{(function(){LF.add('head-icons',function(){
var u='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.2"/><circle cx="12" cy="10" r="3.1"/><path d="M6.3 18.6c1.3-2.3 3.3-3.5 5.7-3.5s4.4 1.2 5.7 3.5"/></svg>';
var b='<svg viewBox="0 0 24 24"><path d="M4.8 8.5h14.4l-1 11.2a1.6 1.6 0 0 1-1.6 1.5H7.4a1.6 1.6 0 0 1-1.6-1.5z"/><path d="M8.6 8.5V7a3.4 3.4 0 0 1 6.8 0v1.5"/></svg>';
var ic=LF.$$('#lf-head .lf-icons a');if(ic[0]&&!ic[0].dataset.ic){ic[0].dataset.ic=1;ic[0].innerHTML=u}
var bag=LF.$('#lf-head .lf-bag');if(bag&&!bag.dataset.ic){bag.dataset.ic=1;var c=bag.querySelector('.lf-count');bag.innerHTML=b;bag.appendChild(c)}
LF.css('lf-hicons-css','#lf-head .lf-icons svg{width:25px;height:25px;stroke-width:1.6}#lf-head .lf-sic svg,#lf-head .lf-msb svg{stroke-width:1.6}#lf-head .lf-count{top:auto;bottom:4px;right:2px;transform:scale(1)!important;min-width:16px;height:16px;font-size:9px;border:1.5px solid #faf7f2}');
});
LF.add('cards-eq',function(){LF.css('lf-cardeq-css',
'.swiper-wrapper:has(>.lf-card),.js-product-table:has(>.lf-card),.row-grid:has(>.lf-card){align-items:stretch!important}'+
'.lf-card{display:flex!important;flex-direction:column;height:auto!important}'+
'.lf-card>.item{flex:1 1 auto;height:auto!important}'+
'.lf-card:hover>.item{transform:none!important}'+
'.lf-card .item-image{flex:0 0 auto}'+
'.lf-card .js-item-name{min-height:58px;display:flex;flex-direction:column;justify-content:flex-start}'+
'.lf-card .item-price-container{min-height:72px;justify-content:flex-end}'+
'.lf-card .mi-w-full:not(.lf-norate){display:none!important}')})})()}catch(e){console.warn("[LF] 15-head-icons",e)}
/* ---- 30-paraelas ---- */
try{(function(){
LF.cfg=LF.cfg||{};LF.cfg.pe={elas:'https://i.ibb.co/7xpQBN17/Luxury-Perfume-Trio-on-Golden-Gradient.png',eles:'https://i.ibb.co/qMSs8pj5/Luxury-Fragrances-in-Golden-Light.png'};
LF.add('paraelas',function(){
if(LF.tpl()!=='home'||LF.$('#lf-pe'))return;
var anchor=LF.$('.js-section-products-best-seller')||LF.$('.js-section-products-new');if(!anchor)return;
var all=[];LF.menu().forEach(function(m){all.push({t:m.t,h:m.h});m.subs.forEach(function(s){all.push(s)})});
var fem=all.filter(function(x){return /femin/i.test(x.t)})[0],mas=all.filter(function(x){return /mascul/i.test(x.t)})[0];
if(!fem&&!mas)return;
var tabs=[];if(fem)tabs.push({k:'elas',l:'Para elas',h:fem.h,img:LF.cfg.pe.elas});if(mas)tabs.push({k:'eles',l:'Para eles',h:mas.h,img:LF.cfg.pe.eles});
var sec=document.createElement('section');sec.id='lf-pe';
sec.innerHTML='<div class="pi"><div class="tb"><span class="th"></span>'+tabs.map(function(t,i){return '<button type="button" data-i="'+i+'"'+(i?'':' class="on"')+'>'+t.l+'</button>'}).join('')+'</div>'+
'<div class="vw"><button class="ar pv" type="button" aria-label="Anterior">'+LF.ico.chev+'</button><div class="tr"></div><button class="ar nx" type="button" aria-label="Próximo">'+LF.ico.chev+'</button></div><div class="pg"><i></i></div>'+
'<div class="ft"><a class="all" href="'+tabs[0].h+'">Ver todos <span>'+LF.ico.arr+'</span></a></div></div>';
anchor.parentNode.insertBefore(sec,anchor);
var tr=sec.querySelector('.tr'),th=sec.querySelector('.th'),bt=LF.$$('.tb button',sec),bar=sec.querySelector('.pg i'),all2=sec.querySelector('.all');
var out=function(p){var s=p.querySelector('.js-stock-label');return s&&/esgotad/i.test(s.textContent)&&!/display:\s*none/.test(s.getAttribute('style')||'')};
var load=function(i){var t=tabs[i];all2.href=t.h;tr.classList.add('wipe');
 LF.fetchDoc(t.h).then(function(d){var P=LF.$$('.js-item-product',d).filter(function(p){return !out(p)}).slice(0,10);
  tr.innerHTML='';P.forEach(function(p,k){var n=document.importNode(p,true);n.className='js-item-product lf-pec';tr.appendChild(n);if(k===0){var b=document.createElement('div');b.className='bn';b.innerHTML='<div class="bi" style="background-image:url(\''+t.img+'\')"></div><span class="fr"></span>';tr.appendChild(b)}});
  LF.cardify(tr);tr.scrollLeft=0;upd();requestAnimationFrame(function(){tr.classList.remove('wipe')})})};
var move=function(){var b=bt.filter(function(x){return x.classList.contains('on')})[0];th.style.width=b.offsetWidth+'px';th.style.transform='translateX('+(b.offsetLeft-4)+'px)'};
bt.forEach(function(b){b.onclick=function(){if(b.classList.contains('on'))return;bt.forEach(function(x){x.classList.toggle('on',x===b)});move();load(+b.dataset.i)}});
var upd=function(){var m=tr.scrollWidth-tr.clientWidth;var p=m>0?tr.scrollLeft/m:0;bar.style.width=Math.max(12,(tr.clientWidth/tr.scrollWidth)*100)+'%';bar.style.left=(p*(100-parseFloat(bar.style.width)))+'%';sec.querySelector('.pv').disabled=tr.scrollLeft<5;sec.querySelector('.nx').disabled=tr.scrollLeft>m-5};
tr.addEventListener('scroll',upd,{passive:true});
sec.querySelector('.pv').onclick=function(){tr.scrollBy({left:-tr.clientWidth*.8,behavior:'smooth'})};
sec.querySelector('.nx').onclick=function(){tr.scrollBy({left:tr.clientWidth*.8,behavior:'smooth'})};
var dn=false,sx,sl,mv;tr.addEventListener('mousedown',function(e){dn=true;mv=false;sx=e.pageX;sl=tr.scrollLeft;tr.classList.add('drag')});
window.addEventListener('mouseup',function(){dn=false;tr.classList.remove('drag')});
tr.addEventListener('mousemove',function(e){if(!dn)return;var dx=e.pageX-sx;if(Math.abs(dx)>4)mv=true;tr.scrollLeft=sl-dx});
tr.addEventListener('click',function(e){if(mv){e.preventDefault();e.stopPropagation();mv=false}},true);
setTimeout(move,60);window.addEventListener('resize',move);load(0);
LF.css('lf-pe-css','#lf-pe{background:#faf8f5;padding:64px 0 56px;font-family:'+LF.BF+'}'+
'#lf-pe *{box-sizing:border-box}#lf-pe .pi{max-width:1150px;margin:0 auto;padding:0 15px}'+
'#lf-pe .tb{position:relative;display:flex;width:max-content;margin:0 auto 34px;padding:4px;border-radius:40px;background:rgba(255,255,255,.6);border:1px solid rgba(20,18,16,.08);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 14px 30px -22px rgba(40,30,15,.4)}'+
'#lf-pe .th{position:absolute;top:4px;left:4px;bottom:4px;border-radius:30px;background:#141210;transition:transform .55s cubic-bezier(.2,.8,.2,1),width .55s}'+
'#lf-pe .tb button{position:relative;z-index:1;border:0;background:none;padding:0 30px;height:46px;font-family:'+LF.HF+';font-size:19px;color:#7a736a;cursor:pointer;transition:color .45s}'+
'#lf-pe .tb button.on{color:#e6cf98}'+
'#lf-pe .vw{position:relative}'+
'#lf-pe .tr{display:flex;align-items:stretch;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:6px 2px 18px;transition:opacity .45s,transform .45s;cursor:grab}'+
'#lf-pe .tr::-webkit-scrollbar{display:none}#lf-pe .tr.drag{cursor:grabbing;scroll-snap-type:none}#lf-pe .tr.drag *{pointer-events:none}'+
'#lf-pe .tr.wipe{opacity:0;transform:translateX(18px)}'+
'#lf-pe .lf-pec{flex:0 0 calc((100% - 48px)/4);scroll-snap-align:start;display:flex}'+
'#lf-pe .lf-pec>.item{width:100%}'+
'#lf-pe .bn{position:relative;flex:0 0 calc((100% - 48px)/2 + 16px);border-radius:14px;overflow:hidden;scroll-snap-align:start;box-shadow:0 16px 34px -26px rgba(40,30,15,.45)}'+
'#lf-pe .bi{position:absolute;inset:0;background-size:cover;background-position:center;animation:lfkb 16s ease-in-out infinite alternate}'+
'@keyframes lfkb{from{transform:scale(1)}to{transform:scale(1.08)}}'+
'#lf-pe .fr{position:absolute;inset:12px;border:1px solid rgba(230,207,152,.7);border-radius:8px;pointer-events:none}'+
'#lf-pe .ar{position:absolute;top:42%;z-index:3;width:46px;height:46px;border-radius:50%;border:1px solid rgba(20,18,16,.1);background:rgba(255,255,255,.85);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 10px 24px -14px rgba(0,0,0,.4);transition:opacity .3s}'+
'#lf-pe .ar svg{width:16px;height:16px;fill:none;stroke:#141210;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}'+
'#lf-pe .pv{left:-22px}#lf-pe .pv svg{transform:rotate(180deg)}#lf-pe .nx{right:-22px}#lf-pe .ar:disabled{opacity:0;pointer-events:none}'+
'#lf-pe .pg{position:relative;height:2px;background:rgba(20,18,16,.08);max-width:340px;margin:10px auto 0;border-radius:2px;overflow:hidden}'+
'#lf-pe .pg i{position:absolute;top:0;bottom:0;left:0;width:20%;background:linear-gradient(90deg,#b8924a,#e6cf98);border-radius:2px;transition:left .2s}'+
'#lf-pe .ft{text-align:center;margin-top:26px}'+
'#lf-pe .all{display:inline-flex;align-items:center;gap:10px;height:46px;padding:0 28px;border-radius:30px;border:1px solid #141210;color:#141210!important;text-decoration:none!important;font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;transition:all .35s}'+
'#lf-pe .all svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;display:block}'+
'#lf-pe .all:hover{background:#141210;color:#e6cf98!important}'+
'@media(max-width:767px){#lf-pe{padding:40px 0 34px}#lf-pe .pi{padding:0}#lf-pe .tb{margin-bottom:22px}#lf-pe .tb button{font-size:16px;padding:0 22px;height:42px}#lf-pe .tr{padding:6px 16px 16px;gap:12px}#lf-pe .lf-pec{flex-basis:calc((100% - 44px)/2.15);scroll-margin-left:16px}#lf-pe .bn{flex-basis:84%;scroll-margin-left:16px}#lf-pe .ar{display:none}}');
});})()}catch(e){console.warn("[LF] 30-paraelas",e)}
/* ---- 23-cardgap ---- */
try{(function(){LF.add('cardgap',function(){LF.css('lf-cardgap-css','.lf-card{margin-bottom:22px!important;padding-left:8px!important;padding-right:8px!important}#lf-pe .lf-card,.lf-sale .lf-card{margin-bottom:0!important;padding:0!important}.lf-card.lf-haspix .js-payment-discount-price-product-container{font-size:17px!important}@media(max-width:767px){html body .swiper-wrapper.swiper-mobile-only>.lf-card{padding:0!important;margin-bottom:0!important}.row-grid>.lf-card{padding-left:6px!important;padding-right:6px!important;margin-bottom:14px!important}}')})})()}catch(e){console.warn("[LF] 23-cardgap",e)}
/* ---- 31-sale ---- */
try{(function(){LF.add('sale',function(){
var s=LF.$('.js-section-products-sale');if(!s||s.dataset.lf)return;var items=LF.$$('.js-item-product',s);if(!items.length)return;s.dataset.lf=1;
var tt=(LF.$('.js-products-sale-title',s)||{}).textContent||'Descontos';tt=LF.cap(tt.trim());
s.classList.add('lf-sale');
var w=document.createElement('div');w.className='lf-sw';
w.innerHTML='<div class="lf-sed"><small>Ofertas</small><h3>'+LF.esc(tt)+'</h3><p>Fragrâncias selecionadas com preço especial, enquanto houver estoque.</p><span class="ct">'+items.length+' '+(items.length>1?'ofertas':'oferta')+'</span></div><div class="lf-svw"><div class="lf-str"></div><button class="lf-sar pv" type="button" aria-label="Anterior">'+LF.ico.chev+'</button><button class="lf-sar nx" type="button" aria-label="Próximo">'+LF.ico.chev+'</button></div>';
var cont=s.querySelector('.container')||s;cont.classList.add('lf-sc');cont.appendChild(w);
var tr=w.querySelector('.lf-str');items.forEach(function(p){p.classList.remove('swiper-slide');p.removeAttribute('style');tr.appendChild(p)});
LF.cardify(tr);
items.forEach(function(p){var pr=LF.num((p.querySelector('.js-price-display')||{}).textContent),cp=p.querySelector('.js-compare-price-display');var c=cp&&!/display:\s*none/.test(cp.getAttribute('style')||'')?LF.num(cp.textContent):0;if(c>pr&&pr>0){var pct=Math.round((1-pr/c)*100);var im=p.querySelector('.js-product-item-image-container-private, .item-image');if(im&&!im.querySelector('.lf-seal'))im.insertAdjacentHTML('beforeend','<span class="lf-seal"><b>−'+pct+'%</b><i>off</i></span>');var d=p.querySelector('.item-price-container');if(d&&!p.querySelector('.lf-save'))d.insertAdjacentHTML('beforeend','<span class="lf-save">Você economiza '+LF.brl(c-pr)+'</span>')}});
var many=items.length>3;w.classList.toggle('many',many);
w.querySelector('.pv').onclick=function(){tr.scrollBy({left:-tr.clientWidth*.7,behavior:'smooth'})};w.querySelector('.nx').onclick=function(){tr.scrollBy({left:tr.clientWidth*.7,behavior:'smooth'})};
LF.css('lf-sale-css','.lf-sale{background:radial-gradient(70% 90% at 15% 0%,rgba(201,169,97,.22),transparent 60%),radial-gradient(60% 80% at 100% 100%,rgba(201,169,97,.12),transparent 60%),#0f0e0d!important;padding:70px 0!important;margin:0!important}'+
'.lf-sale .lf-sc>*:not(.lf-sw){display:none!important}'+
'.lf-sale .lf-sc{max-width:1150px!important}'+
'.lf-sw{display:grid;grid-template-columns:260px 1fr;gap:40px;align-items:center;font-family:'+LF.BF+'}'+
'.lf-sed small{display:flex;align-items:center;gap:12px;font-size:10.5px;letter-spacing:.3em;text-transform:uppercase;color:#d9bd7c;margin-bottom:14px}.lf-sed small:before{content:"";width:26px;height:1px;background:#c9a961}'+
'.lf-sed h3{font-family:'+LF.HF+';font-weight:400;font-size:40px;line-height:1.1;margin:0 0 16px;background:linear-gradient(120deg,#c9a961,#f1dfaf 50%,#c9a961);-webkit-background-clip:text;background-clip:text;color:transparent}'+
'.lf-sed p{font-size:14px;line-height:1.7;color:#a59e93;margin:0 0 20px}'+
'.lf-sed .ct{font-size:10.5px;letter-spacing:.24em;text-transform:uppercase;color:#d8d0c2}'+
'.lf-svw{position:relative;min-width:0}'+
'.lf-str{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:6px 2px 10px}.lf-str::-webkit-scrollbar{display:none}'+
'.lf-str>.lf-card{flex:0 0 calc((100% - 32px)/3)!important;max-width:none!important;width:auto!important;scroll-snap-align:start}'+
'.lf-sale .lf-buy{background:linear-gradient(120deg,#b8924a,#e6cf98 50%,#b8924a)!important;background-size:200% 100%!important;color:#141210!important;font-weight:600!important;transition:background-position .6s!important}.lf-sale .lf-buy:hover{background-position:100% 0!important}'+
'.lf-seal{position:absolute;top:12px;right:12px;z-index:4;width:58px;height:58px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:radial-gradient(circle at 35% 30%,#f3e2b0,#c9a961 60%,#a8803c);color:#141210;box-shadow:0 10px 20px -10px rgba(120,90,30,.7)}'+
'.lf-seal b{font-family:'+LF.HF+';font-weight:400;font-size:16px;line-height:1}.lf-seal i{font-style:normal;font-size:8px;letter-spacing:.2em;text-transform:uppercase}'+
'.lf-save{display:inline-block;margin-top:6px!important;padding:3px 10px;border-radius:12px;background:#faf3e3;color:#7c6440;font-size:11px}'+
'.lf-sale .lf-card .js-offer-label{display:none!important}'+
'.lf-sar{display:none;position:absolute;top:40%;z-index:3;width:44px;height:44px;border-radius:50%;border:1px solid rgba(230,207,152,.4);background:rgba(15,14,13,.7);backdrop-filter:blur(6px);align-items:center;justify-content:center;cursor:pointer}'+
'.lf-sar svg{width:15px;height:15px;fill:none;stroke:#e6cf98;stroke-width:1.5;stroke-linecap:round}.lf-sar.pv{left:-22px}.lf-sar.pv svg{transform:rotate(180deg)}.lf-sar.nx{right:-22px}'+
'.lf-sw.many .lf-sar{display:flex}'+
'@media(max-width:900px){.lf-sw{grid-template-columns:1fr;gap:24px}.lf-sed{text-align:center}.lf-sed small{justify-content:center}.lf-sed h3{font-size:30px}.lf-str>.lf-card{flex-basis:calc((100% - 28px)/2.15)!important}.lf-sale{padding:44px 0!important}.lf-sar{display:none!important}.lf-save{font-size:10px;white-space:nowrap}}');
})})()}catch(e){console.warn("[LF] 31-sale",e)}
/* ---- 32-brands ---- */
try{(function(){LF.add('brands',function(){
var s=LF.$('.section-brands-home');if(!s||s.dataset.lf)return;var imgs=LF.$$('img',s);if(!imgs.length)return;s.dataset.lf=1;
var srcs=[];imgs.forEach(function(i){var u=LF.imgOf(i);if(u&&srcs.indexOf(u)<0)srcs.push(u)});
var w=document.createElement('div');w.id='lf-br';
w.innerHTML='<div class="bx"><div class="ed"><small>Curadoria</small><h3>As maisons que você ama, <em>em um só lugar.</em></h3><p>Das grandes maisons clássicas às árabes, uma curadoria que não para de crescer.</p></div><div class="gd">'+srcs.map(function(){return '<span class="cl"><span class="lg"></span></span>'}).join('')+'</div></div>';
s.classList.add('lf-br-host');s.appendChild(w);
var cells=LF.$$('.lg',w);
srcs.forEach(function(u,k){var im=new Image();im.crossOrigin='anonymous';im.onload=function(){try{var W=im.naturalWidth,H=im.naturalHeight,cv=document.createElement('canvas');cv.width=W;cv.height=H;var x=cv.getContext('2d');x.drawImage(im,0,0);var d=x.getImageData(0,0,W,H),p=d.data,minX=W,minY=H,maxX=0,maxY=0;for(var i=0;i<p.length;i+=4){var l=(p[i]+p[i+1]+p[i+2])/3;var a=p[i+3]*(1-Math.max(0,(l-200))/55);if(l>235)a=0;p[i]=p[i+1]=p[i+2]=0;p[i+3]=Math.max(0,Math.min(255,a));if(p[i+3]>20){var px=(i/4)%W,py=Math.floor(i/4/W);if(px<minX)minX=px;if(px>maxX)maxX=px;if(py<minY)minY=py;if(py>maxY)maxY=py}}x.putImageData(d,0,0);if(maxX<=minX){return}var cw=maxX-minX+1,ch=maxY-minY+1,c2=document.createElement('canvas');c2.width=cw;c2.height=ch;c2.getContext('2d').drawImage(cv,minX,minY,cw,ch,0,0,cw,ch);var url=c2.toDataURL('image/png');var r=cw/ch;var el=cells[k];var bw=r>2.6?132:r>1.6?112:r>0.9?84:58;el.style.width=bw+'px';el.style.height=Math.min(64,bw/r)+'px';el.style.webkitMaskImage='url('+url+')';el.style.maskImage='url('+url+')'}catch(e){cells[k].style.background='none';cells[k].innerHTML='<img src="'+u+'" style="max-width:110px;max-height:60px;mix-blend-mode:multiply">'}};im.src=u});
LF.css('lf-br-css','.lf-br-host{background:#faf7f2!important;padding:80px 0!important;margin:0!important}.lf-br-host>*:not(#lf-br){display:none!important}'+
'#lf-br{font-family:'+LF.BF+'}#lf-br .bx{max-width:1150px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:330px 1fr;gap:60px;align-items:center}'+
'#lf-br small{display:flex;align-items:center;gap:12px;font-size:10.5px;letter-spacing:.3em;text-transform:uppercase;color:#a8843f;margin-bottom:16px}#lf-br small:before{content:"";width:26px;height:1px;background:#c9a961}'+
'#lf-br h3{font-family:'+LF.HF+';font-weight:400;font-size:38px;line-height:1.15;color:#141210;margin:0 0 18px}#lf-br h3 em{font-style:normal;color:#a8843f}'+
'#lf-br p{font-size:14px;line-height:1.7;color:#6f685f;margin:0}'+
'#lf-br .gd{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(20,18,16,.08);border-left:1px solid rgba(20,18,16,.08)}'+
'#lf-br .cl{height:112px;display:flex;align-items:center;justify-content:center;border-right:1px solid rgba(20,18,16,.08);border-bottom:1px solid rgba(20,18,16,.08);transition:background .4s}'+
'#lf-br .cl:hover{background:#fff}'+
'#lf-br .lg{display:block;width:90px;height:50px;background:#2b2724;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;transition:background .4s,transform .4s}'+
'#lf-br .cl:hover .lg{background:linear-gradient(120deg,#a8803c,#e2c98d 50%,#a8803c);transform:scale(1.05)}'+
'@media(min-width:1000px){#lf-br .gd{grid-template-columns:repeat(4,1fr)}}'+
'@media(max-width:860px){#lf-br .bx{grid-template-columns:1fr;gap:30px;text-align:center}#lf-br small{justify-content:center}#lf-br h3{font-size:28px}.lf-br-host{padding:50px 0!important}#lf-br .bx{padding:0 16px}#lf-br .cl{height:84px}}');
})})()}catch(e){console.warn("[LF] 32-brands",e)}
/* ---- 33-banners ---- */
try{(function(){LF.add('banners',function(){
var s=LF.$('.js-section-banner-home');if(!s||s.dataset.lf)return;s.dataset.lf=1;s.classList.add('lf-bns');
LF.$$('.js-textbanner, .textbanner',s).forEach(function(b,i){b.classList.add('lf-bn');b.style.setProperty('--d',(i*1.6)+'s');if(!b.querySelector('.lf-fr'))b.insertAdjacentHTML('beforeend','<span class="lf-fr"></span><span class="lf-sh"></span>');
 b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;b.style.transform='perspective(900px) rotateY('+(x*5)+'deg) rotateX('+(-y*5)+'deg)'});b.addEventListener('mouseleave',function(){b.style.transform=''})});
LF.css('lf-bns-css','.lf-bns{background:#fff!important;padding:60px 0!important}.lf-bns .js-banners-section-title,.lf-bns .section-title,.lf-bns .textbanner-text,.lf-bns .js-banners-title{display:none!important}'+
'.lf-bns .lf-bn{position:relative;border-radius:16px;overflow:hidden;transition:transform .5s cubic-bezier(.2,.8,.2,1),box-shadow .5s;box-shadow:0 20px 40px -30px rgba(0,0,0,.6);will-change:transform}'+
'.lf-bns .lf-bn:hover{box-shadow:0 30px 50px -28px rgba(0,0,0,.7)}'+
'.lf-bns .lf-bn img{animation:lfbkb 14s ease-in-out infinite alternate;animation-delay:var(--d)}'+
'@keyframes lfbkb{from{transform:scale(1)}to{transform:scale(1.07)}}'+
'.lf-bns .lf-fr{position:absolute;inset:10px;border:1px solid rgba(230,207,152,.75);border-radius:9px;pointer-events:none;z-index:2}'+
'.lf-bns .lf-sh{position:absolute;top:0;bottom:0;left:-40%;width:30%;z-index:2;background:linear-gradient(100deg,transparent,rgba(255,240,205,.35),transparent);transform:skewX(-18deg);animation:lfbsh 6.5s ease-in-out infinite;animation-delay:var(--d);pointer-events:none}'+
'@keyframes lfbsh{0%,70%{left:-40%}100%{left:140%}}');
})})()}catch(e){console.warn("[LF] 33-banners",e)}
/* ---- 34-pe-img ---- */
try{(function(){LF.add('pe-img',function(){
var fix=function(){LF.$$('#lf-pe .bi').forEach(function(b){if(b.dataset.f)return;b.dataset.f=1;var u=(b.getAttribute('style')||'').match(/url\(['"]?([^'")]+)/);if(!u)return;b.style.backgroundImage='none';b.innerHTML='<img src="'+u[1]+'" referrerpolicy="no-referrer" alt="" style="width:100%;height:100%;object-fit:cover;display:block">'})};
var t=LF.$('#lf-pe .tr');if(t){fix();new MutationObserver(fix).observe(t,{childList:true})}})})()}catch(e){console.warn("[LF] 34-pe-img",e)}
/* ---- 40-aromas ---- */
try{(function(){LF.add('aromas',function(){
if(LF.tpl()!=='home'||LF.$('#lf-ar'))return;var HF=LF.HF;
var F=[{n:'Floral',p:'florais',q:'floral',nt:'Rosa · Jasmim · Flor de laranjeira',d:'Delicado e romântico, o buquê das flores mais amadas da perfumaria.',c:['#f6dfe0','#ecc4c8','#fbefe9']},{n:'Amadeirado',p:'amadeirados',q:'amadeirado',nt:'Sândalo · Cedro · Vetiver',d:'Elegante e marcante, com a profundidade das madeiras nobres.',c:['#ecdfcd','#d6bd99','#f6efe4']},{n:'Cítrico',p:'cítricos',q:'citrico',nt:'Bergamota · Limão · Laranja',d:'Leve e vibrante, perfeito para os dias quentes e o dia a dia.',c:['#f5eecb','#e8d690','#fbf7e6']},{n:'Gourmand',p:'gourmands',q:'gourmand',nt:'Baunilha · Caramelo · Pralinê',d:'Doce e envolvente, com notas que dão vontade de chegar mais perto.',c:['#f1e2cf','#dcb88e','#f9f0e6']},{n:'Oriental',p:'orientais',q:'oriental',nt:'Âmbar · Especiarias · Resinas',d:'Intenso e sensual, com a riqueza do âmbar e das especiarias.',c:['#eedccb','#cf9f7a','#f7ece2']},{n:'Fresco',p:'frescos',q:'fresco',nt:'Notas aquáticas · Verdes · Ozônicas',d:'Limpo e revigorante, como um respiro de ar puro.',c:['#dcebee','#aacdd5','#eef6f7']}];
/* se existir a categoria "Aromas" no painel, usa as subcategorias dela (vínculo exato) */
var arom=LF.menu().filter(function(m){return /aroma|fam[ií]lia/i.test(m.t)})[0];
F.forEach(function(f){f.url='/search/?q='+f.q;if(arom){var s=arom.subs.filter(function(x){return x.t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').indexOf(f.q)===0})[0];if(s)f.url=s.h}});
var anchor=LF.$('.js-section-products-best-seller');if(!anchor)return;
var sec=document.createElement('section');sec.id='lf-ar';
sec.innerHTML='<div class="ai"><div class="al"><small>Famílias olfativas</small><h2>Qual aroma é você?</h2><ul class="an">'+F.map(function(f,i){return '<li><button type="button" data-i="'+i+'"'+(i?'':' class="on"')+'><span>'+f.n+'</span><i></i></button></li>'}).join('')+'</ul></div><div class="ap"><div class="af"><b class="b1"></b><b class="b2"></b><b class="b3"></b></div><div class="aw"><div class="at"><em class="nt"></em><h3 class="nm"></h3><p class="ds"></p></div><div class="apr"></div><a class="all" href="#"><span></span>'+LF.ico.arr+'</a></div></div></div>';
anchor.parentNode.insertBefore(sec,anchor.nextSibling);
var cache={};var out=function(p){var s=p.querySelector('.js-stock-label');return s&&/esgotad/i.test(s.textContent)&&!/display:\s*none/.test(s.getAttribute('style')||'')};
var load=function(f){return cache[f.q]||(cache[f.q]=LF.fetchDoc(f.url).then(function(d){return LF.$$('.js-item-product',d).filter(function(p){return !out(p)}).map(function(p){var i=p.querySelector('img.item-image-featured')||p.querySelector('img');var a=p.querySelector('a[href*="/produtos/"]');return{n:LF.cleanName((p.querySelector('.js-item-name')||{}).textContent).name,pr:((p.querySelector('.js-price-display')||{}).textContent||'').trim(),img:LF.imgOf(i,'480'),h:a&&a.getAttribute('href')}}).filter(function(x){return x.h&&x.img}).slice(0,4)}))};
var aw=sec.querySelector('.aw'),ap=sec.querySelector('.ap');
var show=function(i){var f=F[i];LF.$$('.an button',sec).forEach(function(b,j){b.classList.toggle('on',j==i)});ap.style.background=f.c[2];var B=LF.$$('.af b',sec);B[0].style.background=f.c[1];B[1].style.background=f.c[0];B[2].style.background=f.c[1];
 aw.classList.remove('sw');void aw.offsetWidth;aw.classList.add('sw');sec.querySelector('.nt').textContent=f.nt;sec.querySelector('.nm').textContent=f.n;sec.querySelector('.ds').textContent=f.d;
 var all=sec.querySelector('.all');all.href=f.url;all.querySelector('span').textContent='Ver todos os '+f.p;var pr=sec.querySelector('.apr');pr.innerHTML=new Array(5).join('<div class="pi sk"><div class="im"></div></div>');sec.dataset.cur=i;
 load(f).then(function(L){if(sec.dataset.cur!=i)return;pr.innerHTML=L.map(function(p){return '<a class="pi" href="'+p.h+'"><div class="im"><img src="'+p.img+'" alt="" loading="lazy"></div><b>'+LF.esc(p.n)+'</b><span>'+LF.esc(p.pr)+'</span></a>'}).join('')})};
LF.$$('.an button',sec).forEach(function(b){b.addEventListener('mouseenter',function(){if(matchMedia('(hover:hover)').matches)show(+b.dataset.i)});b.addEventListener('click',function(){show(+b.dataset.i)})});
show(0);
LF.css('lf-ar-css','#lf-ar{background:#fbf9f6;padding:90px 24px;font-family:'+LF.BF+'}#lf-ar *{box-sizing:border-box}'+
'#lf-ar .ai{max-width:1120px;margin:0 auto;display:grid;grid-template-columns:330px 1fr;gap:56px;align-items:stretch}#lf-ar .ai>*,#lf-ar .apr>*{min-width:0}'+
'#lf-ar .al small{display:flex;align-items:center;gap:12px;font-size:10.5px;letter-spacing:.3em;text-transform:uppercase;color:#a8843f;margin-bottom:16px}#lf-ar .al small:before{content:"";width:28px;height:1px;background:#c9a961}'+
'#lf-ar .al h2{font-family:'+HF+';font-weight:400;font-size:36px;line-height:1.15;color:#141210;margin:0 0 34px;text-transform:none;text-align:left}'+
'#lf-ar .an{list-style:none;margin:0;padding:0;border-top:1px solid rgba(20,18,16,.08)}#lf-ar .an li{border-bottom:1px solid rgba(20,18,16,.08)}'+
'#lf-ar .an button{width:100%;display:flex;align-items:center;justify-content:space-between;background:none;border:0;padding:15px 4px;cursor:pointer;font-family:'+HF+';font-size:24px;color:#b3aca2;text-align:left;transition:color .45s,padding .45s}'+
'#lf-ar .an button i{width:7px;height:7px;background:#c9a961;transform:rotate(45deg) scale(0);transition:transform .45s}#lf-ar .an button:hover{color:#5a534b;padding-left:10px}#lf-ar .an button.on{color:#141210;padding-left:10px}#lf-ar .an button.on i{transform:rotate(45deg) scale(1)}'+
'#lf-ar .ap{position:relative;border-radius:28px;overflow:hidden;min-height:470px;background:#f7efe6;transition:background 1s}'+
'#lf-ar .af{position:absolute;inset:0;overflow:hidden}#lf-ar .af b{position:absolute;border-radius:50%;filter:blur(50px);opacity:.9;transition:background 1.1s}'+
'#lf-ar .af .b1{width:360px;height:360px;top:-90px;right:-60px;animation:lfarf1 14s ease-in-out infinite alternate}#lf-ar .af .b2{width:300px;height:300px;bottom:-110px;left:-40px;animation:lfarf2 17s ease-in-out infinite alternate}#lf-ar .af .b3{width:220px;height:220px;top:40%;left:45%;opacity:.6;animation:lfarf1 20s ease-in-out infinite alternate-reverse}'+
'@keyframes lfarf1{to{transform:translate(-60px,50px) scale(1.15)}}@keyframes lfarf2{to{transform:translate(70px,-40px) scale(1.1)}}'+
'#lf-ar .aw{position:relative;z-index:1;height:100%;padding:44px 44px 40px;display:flex;flex-direction:column}'+
'#lf-ar .at .nt{display:block;font-style:normal;font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;color:#7c6440;margin-bottom:12px}'+
'#lf-ar .at h3{font-family:'+HF+';font-weight:400;font-size:44px;line-height:1;color:#141210;margin:0 0 12px}#lf-ar .at p{font-size:14px;line-height:1.6;color:#4f483f;margin:0 0 28px;max-width:420px}'+
'#lf-ar .apr{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:26px}'+
'#lf-ar .pi{display:flex;flex-direction:column;background:rgba(255,255,255,.72);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.9);border-radius:16px;padding:10px 10px 14px;text-decoration:none!important;color:#141210;box-shadow:0 16px 30px -22px rgba(60,40,15,.45)}'+
'#lf-ar .pi .im{position:relative;height:120px;border-radius:10px;background:#fff;overflow:hidden;margin-bottom:10px}#lf-ar .pi img{position:absolute;left:8%;top:8%;width:84%;height:84%;object-fit:contain}'+
'#lf-ar .pi b{font-weight:500;font-size:12px;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:32px;padding:0 2px}#lf-ar .pi span{font-size:12.5px;font-weight:600;margin-top:6px;padding:0 2px;color:#141210}'+
'#lf-ar .pi.sk .im{background:linear-gradient(90deg,#fff,#f6f1ea,#fff);background-size:200% 100%;animation:lfsk 1.2s infinite}@keyframes lfsk{to{background-position:-200% 0}}'+
'#lf-ar .all{margin-top:auto;align-self:center;display:inline-flex;align-items:center;gap:10px;height:46px;padding:0 24px;border-radius:30px;background:#141210;color:#f5f0e7!important;text-decoration:none!important;font-size:10.5px;font-weight:500;letter-spacing:.2em;text-transform:uppercase}'+
'#lf-ar .all svg{width:17px;height:17px;fill:none;stroke:#d9bd7c;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;transition:transform .35s}#lf-ar .all:hover svg{transform:translateX(4px)}'+
'#lf-ar .aw.sw .at,#lf-ar .aw.sw .apr{animation:lfarin .7s cubic-bezier(.2,.7,.2,1)}@keyframes lfarin{from{opacity:0;transform:translateY(10px)}}'+
'@media(max-width:980px){#lf-ar .ai{grid-template-columns:1fr;gap:26px}#lf-ar .al h2{margin-bottom:18px}#lf-ar .an{display:flex;overflow-x:auto;border:0;gap:8px;scrollbar-width:none;margin:0 -16px;padding:0 16px}#lf-ar .an::-webkit-scrollbar{display:none}#lf-ar .an li{border:0}#lf-ar .an button{font-size:15px;padding:10px 18px!important;border:1px solid rgba(20,18,16,.12);border-radius:30px;white-space:nowrap}#lf-ar .an button.on{background:#141210;color:#f5f0e7;border-color:#141210}#lf-ar .an button i{display:none}#lf-ar .apr{grid-template-columns:repeat(2,1fr)}}'+
'@media(max-width:560px){#lf-ar{padding:56px 16px}#lf-ar .aw{padding:28px 18px}#lf-ar .at h3{font-size:32px}#lf-ar .al h2{font-size:28px}#lf-ar .apr{gap:10px}#lf-ar .pi .im{height:110px}#lf-ar .all{align-self:stretch;justify-content:center}}');
})})()}catch(e){console.warn("[LF] 40-aromas",e)}
/* ---- 41-atacado-qs ---- */
try{(function(){
LF.cfg=LF.cfg||{};LF.cfg.qsImg=LF.cfg.qsImg||'https://i.ibb.co/PG2sWyMp/Whats-App-Image-2026-10-09-at-14-36-47.jpg';
LF.add('quemsomos',function(){if(LF.tpl()!=='home'||LF.$('#lf-qs'))return;var HF=LF.HF;var foot=LF.$('footer');if(!foot)return;
var sec=document.createElement('section');sec.id='lf-qs';
sec.innerHTML='<div class="qi"><div class="qf"><div class="qa"><img alt="Fundadora" referrerpolicy="no-referrer" src="'+LF.cfg.qsImg+'"></div><span class="qo"></span></div><div class="qt"><small>Quem somos</small><h2 class="qh">Um sonho que virou a sua perfumaria</h2><p class="qp"></p><blockquote class="qq"></blockquote><ol class="ql"></ol><a class="qb" href="/quem-somos/"><span>Conheça nossa história</span>'+LF.ico.arr+'</a></div></div>';
foot.parentNode.insertBefore(sec,foot);
LF.fetchDoc('/quem-somos/').then(function(d){var c=d.querySelector('.user-content')||d.querySelector('main');if(!c){sec.remove();return}var pi=c.querySelector('img');if(pi)sec.querySelector('img').src=LF.imgOf(pi);
 var ps=(c.innerText||c.textContent).split(/\n+/).map(function(t){return t.trim()}).filter(function(t){return t.length>30});var sen=ps.join(' ').match(/[^.!?]+[.!?]+/g)||[];
 sec.querySelector('.qp').textContent=ps[0]||'';var q=sen.filter(function(t){return /experiência|cuidado|diferencial/i.test(t)})[0];var qq=sec.querySelector('.qq');if(q)qq.textContent='“'+q.trim().replace(/\.$/,'')+'”';else qq.remove();
 var yrs=((c.textContent.match(/\b(19|20)\d{2}\b/g))||[]).filter(function(v,i,a){return a.indexOf(v)===i}).sort();
 var lab=function(y){var t=sen.filter(function(s){return s.indexOf(y)>-1})[0]||'';if(/site|e-?commerce|online/i.test(t))return 'Nosso site no ar';if(/surgiu|ideia|idéia|nasceu|começ/i.test(t))return 'Nasce a LF';return 'Nossa história'};
 var ol=sec.querySelector('.ql');if(yrs.length)ol.innerHTML=yrs.map(function(y){return '<li><b>'+y+'</b><span>'+lab(y)+'</span></li>'}).join('')+'<li><b>Hoje</b><span>Evoluindo todos os dias</span></li>';else ol.remove()});
LF.css('lf-qs-css','#lf-qs{background:linear-gradient(180deg,#fff 0%,#f7f3ed 100%);padding:90px 24px 96px;overflow:hidden;font-family:'+LF.BF+'}#lf-qs *{box-sizing:border-box}'+
'#lf-qs .qi{max-width:1060px;margin:0 auto;display:grid;grid-template-columns:420px 1fr;gap:90px;align-items:center}'+
'#lf-qs .qf{position:relative;width:380px;height:480px;margin-left:20px}'+
'#lf-qs .qa{position:relative;z-index:2;width:100%;height:100%;border-radius:200px 200px 18px 18px;overflow:hidden;box-shadow:0 40px 70px -35px rgba(40,30,15,.45);background:#eee}'+
'#lf-qs .qa img{width:100%;height:100%;object-fit:cover;object-position:50% 38%;display:block}'+
'#lf-qs .qo{position:absolute;z-index:1;top:-16px;left:-16px;right:16px;bottom:16px;border:1px solid rgba(184,146,74,.55);border-radius:216px 216px 22px 22px}'+
'#lf-qs .qt small{display:flex;align-items:center;gap:12px;font-size:10.5px;letter-spacing:.3em;text-transform:uppercase;color:#a8843f;margin-bottom:18px}#lf-qs .qt small:before{content:"";width:28px;height:1px;background:#c9a961}'+
'#lf-qs .qh{font-family:'+HF+';font-weight:400;font-size:38px;line-height:1.15;color:#141210;margin:0 0 22px;text-align:left;text-transform:none}'+
'#lf-qs .qp{font-size:14.5px;line-height:1.75;color:#5e5850;margin:0 0 22px;max-width:520px}'+
'#lf-qs .qq{margin:0 0 30px;padding:2px 0 2px 20px;border-left:1px solid #c9a961;font-family:'+HF+';font-size:17px;line-height:1.5;color:#2b2621;font-style:italic;max-width:500px}'+
'#lf-qs .ql{list-style:none;margin:0 0 34px;padding:0;display:flex;max-width:520px;position:relative}#lf-qs .ql:before{content:"";position:absolute;left:0;right:0;top:5px;height:1px;background:linear-gradient(90deg,#c9a961,rgba(201,169,97,.25))}'+
'#lf-qs .ql li{flex:1;position:relative;padding-top:22px}#lf-qs .ql li:before{content:"";position:absolute;top:1px;left:0;width:9px;height:9px;background:#f7f3ed;border:1px solid #b8924a;transform:rotate(45deg)}#lf-qs .ql li:last-child:before{background:#b8924a}'+
'#lf-qs .ql b{display:block;font-family:'+HF+';font-weight:400;font-size:20px;color:#141210;margin-bottom:4px}#lf-qs .ql span{font-size:12px;color:#7a736a;line-height:1.4}'+
'#lf-qs .qb{display:inline-flex;align-items:center;gap:12px;height:48px;padding:0 26px 0 30px;border-radius:30px;background:#141210;color:#f5f0e7!important;text-decoration:none!important;font-size:11px;font-weight:500;letter-spacing:.2em;text-transform:uppercase;transition:background .4s,transform .4s}'+
'#lf-qs .qb svg{width:18px;height:18px;fill:none;stroke:#d9bd7c;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;transition:transform .35s}#lf-qs .qb:hover{background:#2a241c;transform:translateY(-2px)}#lf-qs .qb:hover svg{transform:translateX(4px)}'+
'@media(max-width:960px){#lf-qs .qi{grid-template-columns:1fr;gap:56px;justify-items:center}#lf-qs .qt{max-width:560px;display:flex;flex-direction:column;align-items:center;text-align:center}#lf-qs .qt small{justify-content:center}#lf-qs .qh{text-align:center}#lf-qs .qq{border-left:0;padding:0;text-align:center}#lf-qs .ql{width:100%;text-align:left}}'+
'@media(max-width:560px){#lf-qs{padding:64px 22px 70px}#lf-qs .qf{width:280px;height:360px;margin-left:16px}#lf-qs .qh{font-size:29px}#lf-qs .ql b{font-size:17px}}');
});
LF.add('atacado',function(){if(LF.tpl()!=='home'||LF.$('#lf-at'))return;var HF=LF.HF;var qs=LF.$('#lf-qs')||LF.$('footer');if(!qs)return;
var ba=LF.$$('.js-section-banner-home a').filter(function(a){return /vendizap|atacad/i.test(a.href+' '+(a.textContent||''))})[0];var cat=ba?ba.href:'';var catOk=cat&&!/app\.vendizap\.com\/(vitrine|login)/.test(cat);
var wa=LF.waLink('Olá! Tenho interesse em comprar no atacado da LF Impoorts 🤍');
var sec=document.createElement('section');sec.id='lf-at';
sec.innerHTML='<div class="tw"><span class="bg" aria-hidden="true">Atacado</span><div class="tx"><small>Atacado LF</small><h2>Revenda as fragrâncias <br>que todo mundo ama</h2><p>Monte seu estoque com as marcas mais desejadas do momento. Fale com a gente e receba as condições especiais para revenda.</p><div class="tb">'+(wa?'<a class="b1" href="'+wa+'" target="_blank" rel="noopener">'+LF.ico.wa+'Quero revender</a>':'')+(catOk?'<a class="b2" href="'+cat+'" target="_blank" rel="noopener">Ver catálogo de atacado'+LF.ico.arr+'</a>':'')+'</div></div>'+
'<ol class="st"><li><span>'+LF.ico.wa+'</span><b>Fale com a gente</b><em>Chame no WhatsApp e conte o que você procura.</em></li><li><span><svg viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z"/><path d="M9 10h6M9 14h6M9 18h3"/></svg></span><b>Receba as condições</b><em>Enviamos os produtos disponíveis e os valores de atacado.</em></li><li><span>'+LF.ico.box+'</span><b>Monte seu pedido</b><em>Escolha suas fragrâncias e receba em todo o Brasil.</em></li></ol></div>';
qs.parentNode.insertBefore(sec,qs);
LF.css('lf-at-css','#lf-at{background:#fff;padding:80px 24px 10px;font-family:'+LF.BF+'}#lf-at *{box-sizing:border-box}'+
'#lf-at .tw{position:relative;max-width:1120px;margin:0 auto;border-radius:26px;overflow:hidden;background:radial-gradient(70% 90% at 50% 0%,rgba(201,169,97,.18),transparent 60%),#0f0e0d;box-shadow:0 40px 80px -40px rgba(0,0,0,.55);text-align:center;padding:78px 30px 0}'+
'#lf-at .tw:after{content:"";position:absolute;inset:12px;border:1px solid rgba(217,189,124,.2);border-radius:18px;pointer-events:none}'+
'#lf-at .bg{position:absolute;left:50%;top:26px;transform:translateX(-50%);font-family:'+HF+';font-size:190px;line-height:1;color:transparent;-webkit-text-stroke:1px rgba(217,189,124,.13);white-space:nowrap;pointer-events:none;user-select:none}'+
'#lf-at .tx{position:relative;max-width:640px;margin:0 auto}'+
'#lf-at small{display:inline-flex;align-items:center;gap:14px;font-size:10.5px;letter-spacing:.32em;text-transform:uppercase;color:#d9bd7c;margin-bottom:20px}#lf-at small:before,#lf-at small:after{content:"";width:28px;height:1px;background:#c9a961}'+
'#lf-at h2{font-family:'+HF+';font-weight:400;font-size:40px;line-height:1.15;color:#f5f0e7;margin:0 0 18px;text-transform:none;text-align:center}'+
'#lf-at p{font-size:14.5px;line-height:1.7;color:#a59e93;margin:0 auto 32px;max-width:540px}'+
'#lf-at .tb{display:flex;justify-content:center;flex-wrap:wrap;gap:12px}'+
'#lf-at .tb a{display:inline-flex;align-items:center;gap:10px;height:50px;padding:0 28px;border-radius:30px;font-size:10.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;text-decoration:none!important;white-space:nowrap;transition:all .4s}'+
'#lf-at .tb svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}'+
'#lf-at .b1{background:linear-gradient(120deg,#b8924a,#e6cf98 50%,#b8924a);background-size:200% 100%;color:#141210!important}#lf-at .b1:hover{background-position:100% 0}'+
'#lf-at .b2{border:1px solid rgba(255,255,255,.22);color:#f5f0e7!important}#lf-at .b2:hover{border-color:#d9bd7c;color:#e6cf98!important}'+
'#lf-at .st{position:relative;list-style:none;margin:64px -30px 0;padding:40px 60px 48px;border-top:1px solid rgba(255,255,255,.07);display:grid;grid-template-columns:repeat(3,1fr);gap:40px;background:linear-gradient(180deg,rgba(255,255,255,.02),transparent)}'+
'#lf-at .st:before{content:"";position:absolute;top:66px;left:calc(16.66% + 40px);right:calc(16.66% + 40px);height:1px;background:linear-gradient(90deg,rgba(217,189,124,.5),rgba(217,189,124,.15),rgba(217,189,124,.5))}'+
'#lf-at .st li{position:relative;display:flex;flex-direction:column;align-items:center;text-align:center}'+
'#lf-at .st span{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#0f0e0d;border:1px solid rgba(217,189,124,.5);margin-bottom:18px;position:relative;z-index:1;transition:all .5s}#lf-at .st span:after{content:"";position:absolute;inset:-6px;border-radius:50%;border:1px solid rgba(217,189,124,.12)}'+
'#lf-at .st svg{width:21px;height:21px;fill:none;stroke:#d9bd7c;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round}#lf-at .st li:hover span{background:linear-gradient(135deg,#b8924a,#e6cf98);border-color:transparent}#lf-at .st li:hover svg{stroke:#141210}'+
'#lf-at .st b{font-family:'+HF+';font-weight:400;font-size:19px;color:#f5f0e7;margin-bottom:8px}#lf-at .st em{font-style:normal;font-size:12.5px;line-height:1.55;color:#8f897f;max-width:230px}'+
'@media(max-width:767px){#lf-at{padding:40px 14px 0}#lf-at .tw{padding:36px 20px 0;border-radius:20px}#lf-at .tw:after{inset:8px;border-radius:14px}#lf-at .bg{font-size:72px;top:14px}#lf-at small{margin-bottom:12px;font-size:9.5px}#lf-at h2{font-size:24px;margin-bottom:10px}#lf-at h2 br{display:none}#lf-at p{font-size:13px;margin-bottom:20px}#lf-at .tb a{height:46px}'+
'#lf-at .st{gap:8px;margin:28px -20px 0;padding:20px 12px 24px}#lf-at .st:before{top:39px;left:calc(16.66% + 20px);right:calc(16.66% + 20px)}#lf-at .st span{width:38px;height:38px;margin-bottom:10px}#lf-at .st span:after{inset:-4px}#lf-at .st svg{width:16px;height:16px}#lf-at .st b{font-size:13px;line-height:1.25;margin:0}#lf-at .st em{display:none}}');
});
})()}catch(e){console.warn("[LF] 41-atacado-qs",e)}
/* ---- 36-pe-imgfit ---- */
try{(function(){LF.add('pe-imgfit',function(){LF.css('lf-pefit-css','#lf-pe .bi img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;max-height:none!important;max-width:none!important;object-fit:cover!important;object-position:center 60%}#lf-pe .bn{background:#e9d9bd}')})})()}catch(e){console.warn("[LF] 36-pe-imgfit",e)}
/* ---- 05-preload ---- */
try{(function(){LF.cfg=LF.cfg||{};var R={elas:'https://i.ibb.co/7xpQBN17/Luxury-Perfume-Trio-on-Golden-Gradient.png',eles:'https://i.ibb.co/qMSs8pj5/Luxury-Fragrances-in-Golden-Light.png'};LF.cfg.pe={};Object.keys(R).forEach(function(k){var c=null;try{c=localStorage.getItem('lf:img:'+k)}catch(e){}LF.cfg.pe[k]=c||R[k]})})()}catch(e){console.warn("[LF] 05-preload",e)}
/* ---- 37-pe-motion ---- */
try{(function(){LF.add('pe-motion',function(){
var pe=LF.$('#lf-pe');if(!pe)return;var tr=pe.querySelector('.tr');
var mk=function(u){var b=document.createElement('div');b.className='bn';b.innerHTML='<div class="bi"><img src="'+u+'" referrerpolicy="no-referrer" fetchpriority="high" decoding="async" alt=""></div><span class="lt"></span><span class="fr"></span>';return b};
var ensure=function(){var on=pe.querySelector('.tb button.on');var k=on&&/eles/i.test(on.textContent)?'eles':'elas';var u=LF.cfg.pe[k];if(!u)return;var b=tr.querySelector('.bn');if(!b){b=mk(u);var f=tr.querySelector('.lf-pec');if(f)f.after(b);else tr.appendChild(b)}else{var im=b.querySelector('img');if(!im){b.innerHTML=mk(u).innerHTML}else if(im.getAttribute('src')!==u)im.setAttribute('src',u);if(!b.querySelector('.lt'))b.insertAdjacentHTML('beforeend','<span class="lt"></span>')}};
ensure();new MutationObserver(function(){ensure()}).observe(tr,{childList:true});
LF.css('lf-pemo-css','#lf-pe .bn{background:linear-gradient(135deg,#ead9b8,#f6ecd8)}'+
'#lf-pe .bi{animation:none!important;overflow:hidden}'+
'#lf-pe .bi img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;max-height:none!important;max-width:none!important;object-fit:cover!important;transform-origin:50% 60%;animation:lfpemove 18s ease-in-out infinite alternate!important;will-change:transform}'+
'@keyframes lfpemove{0%{transform:scale(1.04) translate(0,0)}35%{transform:scale(1.10) translate(-1.6%,-1%)}70%{transform:scale(1.07) translate(1.4%,-1.8%)}100%{transform:scale(1.12) translate(-.8%,.6%)}}'+
'#lf-pe .lt{position:absolute;top:0;bottom:0;left:-45%;width:35%;z-index:1;background:linear-gradient(100deg,transparent,rgba(255,244,214,.32),transparent);transform:skewX(-16deg);animation:lfpelt 7s ease-in-out infinite;pointer-events:none;mix-blend-mode:screen}'+
'@keyframes lfpelt{0%,60%{left:-45%}100%{left:130%}}'+
'#lf-pe .fr{z-index:2}'+
'@media(prefers-reduced-motion:reduce){#lf-pe .bi img,#lf-pe .lt{animation:none!important}}');
})})()}catch(e){console.warn("[LF] 37-pe-motion",e)}
/* ---- 38-pe-mobile ---- */
try{(function(){LF.add('pe-mobile',function(){LF.css('lf-pemob-css','#lf-pe .bgb{display:none!important}@media(max-width:767px){#lf-pe .tr{align-items:stretch}#lf-pe .tr .bn{display:block!important;flex:0 0 calc((100% - 44px)/2.15*2 + 12px)!important;align-self:stretch!important;height:auto!important;aspect-ratio:auto!important}#lf-pe .tr .bn .bi{position:absolute!important;inset:0!important;transform:none!important;height:100%!important}#lf-pe .tr .bn .bi img{object-fit:cover!important;object-position:center 60%}#lf-pe .tr .bn .fr{inset:8px;border-radius:10px}}')})})()}catch(e){console.warn("[LF] 38-pe-mobile",e)}
/* ---- 50-footer ---- */
try{(function(){LF.add('footer',function(){
var $=LF.$,$$=LF.$$,I=LF.ico,HF=LF.HF;var f=$('footer');if(!f||$('#lf-ft'))return;
/* menus do painel */
var groups=[],cur=null;$$('a',f).forEach(function(a){var h=a.getAttribute('href')||'';var t=a.textContent.trim();if(!t&&!a.querySelector('img'))return;var isHead=(!h||h==='#'||/javascript/.test(h))&&t&&!a.querySelector('img');if(isHead){cur={t:t,l:[]};groups.push(cur);return}if(cur)cur.l.push({t:t,h:h})});
var contact=groups.filter(function(g){return /contato|atendimento/i.test(g.t)})[0];var menus=groups.filter(function(g){return g!==contact&&g.l.length&&!g.l.every(function(x){return /instagram|tiktok|facebook|youtube|pinterest|twitter/i.test(x.h)})}).slice(0,2);
var all=$$('a',f);var phone='',mail='';all.forEach(function(a){var h=a.getAttribute('href')||'';if(/^tel:/.test(h)&&!phone)phone=a.textContent.trim();if(/^mailto:/.test(h)&&!mail)mail=h.replace('mailto:','')});
var wa=LF.waLink();var waNum=LF.wa();var waTxt=phone||(waNum?waNum.replace(/^55(\d{2})(\d{4,5})(\d{4})$/,'$1 $2-$3'):'');
var SO={instagram:'<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none"/></svg>',tiktok:'<svg viewBox="0 0 24 24"><path d="M13.6 3.2v11.6a3.4 3.4 0 1 1-3.4-3.4"/><path d="M13.6 3.2c.3 2.9 2.3 4.9 5.2 5.1"/></svg>',facebook:'<svg viewBox="0 0 24 24"><path d="M14 8h3V4.5h-3a4 4 0 0 0-4 4V11H7.5v3.5H10V20h3.5v-5.5H16l.5-3.5h-3V8.8c0-.5.3-.8.8-.8z"/></svg>',youtube:'<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="4"/><path d="M10.5 9.5l4 2.5-4 2.5z"/></svg>',pinterest:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M10.5 20l1.8-7.3M11 13.5c.5 1.2 1.6 1.6 2.6 1.4 2-.4 2.9-2.7 2.4-4.6-.6-2.4-3.6-3.4-5.8-2-1.6 1-2 3-1.2 4.3"/></svg>'};
var soc=[];all.forEach(function(a){var h=a.href||'';Object.keys(SO).forEach(function(k){if(h.indexOf(k)>-1&&!soc.some(function(s){return s.k===k}))soc.push({k:k,h:h})})});
/* pagamentos e envios */
var pays=[];$$('img',f).forEach(function(i){var u=LF.imgOf(i);if(u&&!/logo-|placeholder/.test(u)&&pays.indexOf(u)<0)pays.push(u)});
/* legal / CNPJ */
var legal=(f.textContent||'').replace(/\s+/g,' ');var cn=(legal.match(/\b\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}\b/)||[''])[0].replace(/\D/g,'');var cnpj=cn.length===14?cn.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,'$1.$2.$3/$4-$5'):'';
var nl=$('.js-newsletter form, form.js-newsletter, .newsletter-footer form, footer form[action*="newsletter"]');
var name=LF.storeName();var year=new Date().getFullYear();
var WM="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 330 276'%3E%3Cpath fill='%23c9bfae' d='M115 270l0-7l4 0c4 0 7 2 5 5c0 1 0 3 0 5c0 2 0 3 0 3c0 0-1-1-1-2c-1-4-6-4-6-1c0 2 0 3-1 3c-1 0-1-3-1-6zM135 275c0-3 4-11 5-11c1 0 2 2 4 6c1 3 2 6 1 6c-1 0-1-1-2-2c0-2-6-3-6-1c0 1 0 2-1 3c-1 0-1 0-1-1zM156 270c0-4 0-7 1-7c1 0 1 2 1 5c0 6 0 6 3 6c2 0 3 0 3 1c0 1-2 1-4 1l-4 0l0-6zM174 274c-1-2-1-10 0-10c1-1 1 1 1 5c0 7 0 8-1 5zM187 275c-1-1-2-2-2-3c0-1 0-1 2 0c2 2 5 2 6 0c0 0-1-1-3-2c-4-1-5-3-4-5c2-3 7-2 8 1c0 1 0 1-2 0c-2-2-2-2-4-1c-1 2 1 4 5 4c0 0 1 1 2 2c1 4-4 6-8 4zM205 275c0-1-1-2-1-3c0-1 0-1 1 0c2 2 6 3 6 1c0-1-1-2-3-3c-2 0-3-2-4-2c-1-4 5-7 8-3c2 2 0 3-1 1c-2-2-5-2-5 0c0 1 1 2 3 3c4 1 5 3 3 6c-2 1-5 1-7 0zM141 270c1 0 0-1 0-2c-1-1-3 0-3 2c0 1 3 1 3 0zM122 267c0-1-1-2-2-2c-2 0-3 0-3 2c0 2 1 2 3 2c1 0 2-1 2-2zM159 255c-1-1-2-2-2-3c0-2-8-3-13-2c-6 2-6 1 0-6c3-5 4-7 4-10c0-6 11-23 15-23c5 0 14 13 15 22c1 5 2 8 5 12c5 6 5 8-1 5c-5-2-13 0-13 3c0 3-7 5-10 2zM166 254c0-1-1-1-3-1c-3 0-3 0-2 1c2 1 4 1 5 0zM170 249l6-2l0-8c0-11-7-25-13-25c-5 0-13 15-13 25l0 8l6 2c7 2 6 2 14 0zM148 244c0-1 0-1-2 0c-1 1-2 3-2 3c0 1 1 1 2 0c1-1 2-2 2-3zM181 245c-1-1-2-2-2-1c-1 1 2 4 3 4c0-1 0-2-1-3zM160 239c-4-3-4-6-1-9c4-4 10-1 10 4c0 6-5 8-9 5zM166 237c2-2 1-5-1-6c-2-1-5 0-6 2c-1 4 4 7 7 4zM56 205c-55-6-74-42-36-69c12-8 12-8 0 1c-21 17-24 35-8 50c22 19 65 22 119 8c19-5 19-5 17-4c-2 1-25 7-36 10c-19 4-41 5-56 4zM248 198c-13-3-20-9-34-25c-9-12-13-15-19-18c-7-4-7-4-7 16l0 19l-4 0c-3 0-4 0-7-6l-3-6l0-34c0-33-1-34-3-37l-2-3l23 0c31 0 41 2 48 11c13 15-1 32-28 36l-6 1l4 2c7 2 14 8 21 17c15 19 27 27 42 27c4 0 4 0 1 1c-5 1-20 1-26-1zM38 149c0-23-1-42-1-43c-1-2 0-2 8-2l10 0l0 42l0 41l6 0c13 0 25-4 35-12l6-5l-4 9c-2 5-4 9-4 10c0 1-6 1-28 1l-28 0l0-41zM159 184c-2-4-5-8-6-11c-7-14-37-15-55-2l-5 4l6-12c3-6 12-22 18-35c7-13 12-23 13-23c0-1 47 83 47 84c0 1-3 1-7 1l-8 0l-3-6zM255 166l0-24l-2 1l-3 1l3-2c2-1 2-2 2-20l0-18l7 0l8 0l0 14l0 14l11-7c55-38 61-73 13-81c-5-1-6-2-4-2c15 0 33 9 37 20c6 18-9 41-44 63l-13 9l0 28l0 28l-8 0l-7 0l0-24zM106 163c8-5 28-8 36-5c2 0 3 1 3 0c-1-3-20-36-20-36c0 0-2 3-4 7c-2 3-7 13-11 21c-8 15-9 16-4 13zM208 149c12-3 19-11 19-21c0-14-8-20-27-21l-11 0l0 22l0 23l7-1c4 0 9-1 12-2zM246 147c0-1 1-1 2-2c1-1 2-1 2-1c0 1-1 1-2 2c-1 1-2 1-2 1zM275 98c-3-22-12-31-31-34l-6-1l8-1c18-3 26-12 29-33c1-4 1-8 1-8c1 0 1 3 1 7c2 21 11 31 31 35l4 0l-5 1c-20 3-28 13-31 37c0 1-1 0-1-3zM55 97c-19-5-19-33 0-38c8-2 17 1 21 6c2 5 0 5-3 1c-12-12-31-3-30 14c2 15 19 20 30 10c4-4 5-3 2 1c-4 5-13 8-20 6zM101 96c-8-3-13-14-11-22c5-23 39-20 39 4c0 14-15 23-28 18zM143 96c-1-1 0-37 1-38c0 0 5 6 10 13c4 7 9 13 9 13c0 0 3-4 7-9c15-21 14-22 14 3c0 16 0 19-1 19c-2 0-2-3-2-17l-1-16l-8 12c-4 7-9 12-9 12c0 0-4-6-9-13l-9-12l0 17c0 15-1 19-2 16zM203 96c0-1 19-36 20-37c0 0 18 33 20 37c1 4-3 0-5-4l-2-5l-13 0l-13 0l-2 5c-3 4-5 7-5 4zM119 92c12-9 9-27-5-31c-21-6-31 25-11 33c3 2 13 0 16-2zM229 74c-3-5-6-10-6-10c0-1-3 4-6 10l-5 10l11 0l11 0l-5-10zM50 47c-3-1-7-5-9-8c-2-4 1-4 3 0c5 9 25 9 28 0c3-7-1-11-13-13c-17-4-22-12-13-21c8-8 28-5 28 4c0 3-1 2-3 0c-4-8-21-8-25-1c-4 7 1 12 12 15c16 3 21 9 16 18c-3 6-16 9-24 6zM96 47c-1-1-1-47 0-47c0 0 1 1 1 1c1 3-1 47-1 46zM131 26l0-23l-10 0c-8 0-10 0-10-1c0-2 3-2 22-2c17 0 22 0 22 1c-1 1-4 2-11 2l-11 0l0 23c0 14 0 22-1 22c-1 0-1-8-1-22zM167 47c-1 0-1-11-1-24l0-23l16 0c14 0 16 0 16 2c0 1-2 1-15 1l-15 0l0 10l0 9l14 1c7 0 13 0 13 1c0 1-6 1-13 1l-14 1l0 9l0 10l15 0c12 0 15 0 15 1c-1 2-30 3-31 1zM218 47c-3-2-6-6-7-9c-1-3 1-3 3 1c4 9 23 9 27 0c3-7-1-11-13-13c-13-4-16-6-16-14c0-13 23-17 30-5c2 4 0 5-3 1c-6-7-17-7-22-1c-7 7-2 13 11 16c12 2 16 6 16 13c0 9-14 16-26 11z'/%3E%3C/svg%3E";
var ft=document.createElement('div');ft.id='lf-ft';
var ck='<svg viewBox="0 0 24 24"><path pathLength="1" d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
ft.innerHTML='<section class="lf4-duo"><div class="lf4-in">'+
 (nl?'<div class="lf4-p lf4-nl"><div class="lf4-b"><small>Clube LF</small><h3>Novidades antes de todo mundo</h3><p>Seja a primeira a saber, direto no seu e-mail.</p><ul class="lf4-pk"><li>Lançamentos</li><li>Reposições</li><li>Cupons exclusivos</li></ul><form class="lf4-f" novalidate><input type="email" placeholder="Seu melhor e-mail" autocomplete="email" aria-label="Seu e-mail"><button type="submit"><span>Participar</span>'+I.arr+'</button></form><div class="lf4-ok">'+ck+'<span>Pronto! Você agora faz parte do Clube LF.</span></div><span class="lf4-err" aria-live="polite"></span></div></div>':'')+
 '<div class="lf4-p lf4-tr"><div class="lf4-b"><small>Rastreio Nuvem Envio</small><h3>Acompanhe sua entrega</h3><ol class="lf4-st"><li><i>'+I.check+'</i><span>Confirmado</span></li><li><i>'+I.box+'</i><span>Enviado</span></li><li><i>'+I.truck+'</i><span>A caminho</span></li><li><i><svg viewBox="0 0 24 24"><path d="M4 11l8-6 8 6v8H4z"/><path d="M10 19v-5h4v5"/></svg></i><span>Entregue</span></li><b class="ln"><em></em></b></ol><form class="lf4-f lf4-tf" novalidate><input type="text" placeholder="Número do pedido" aria-label="Número do pedido"><button type="submit"><span>Rastrear</span>'+I.arr+'</button></form><span class="lf4-err" aria-live="polite"></span><a class="lf4-acc" href="/account/orders/">'+I.user+'<span>Tem cadastro? <b>Veja seus pedidos</b></span></a></div></div>'+
'</div></section><div class="lf3-in"><div class="lf4-grid"><div class="lf4-brand"><a href="/" class="lf3-logo" aria-label="Início"><i></i></a><div class="lf3-soc">'+soc.map(function(s){return '<a href="'+s.h+'" target="_blank" rel="noopener" aria-label="'+s.k+'">'+SO[s.k]+'</a>'}).join('')+'</div></div>'+
 menus.map(function(g){return '<div class="lf3-col"><h4>'+LF.esc(g.t)+'</h4><ul>'+g.l.map(function(l){return '<li><a href="'+l.h+'">'+LF.esc(l.t)+'</a></li>'}).join('')+'</ul></div>'}).join('')+
 '<div class="lf3-col lf3-ct"><h4>'+LF.esc(contact?contact.t:'Atendimento').replace(/entre em contato/i,'Atendimento')+'</h4><ul>'+(wa?'<li><a href="'+wa+'" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9.3 8.6c.3-.6.7-.6 1-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.3 0 .5-.1.7l-.5.6c.6 1.2 1.6 2.1 2.8 2.7l.6-.5c.2-.2.5-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .4-.2.8-.7 1-1 .4-2.6.1-4.3-1.4-1.6-1.5-2.4-3.1-2-4.5"/></svg><span>'+LF.esc(waTxt)+'</span></a></li>':'')+(mail?'<li><a href="mailto:'+mail+'">'+I.mail+'<span>'+LF.esc(mail)+'</span></a></li>':'')+'</ul></div></div>'+
 (pays.length?'<div class="lf3-pay"><span>Pagamento e envio</span><div class="lf3-pi">'+pays.map(function(u){return '<img src="'+u+'" alt="" loading="lazy">'}).join('')+'</div></div>':'')+
 '<div class="lf3-leg"><p><span>© '+year+' '+LF.esc(name)+'. Todos os direitos reservados.</span>'+(cnpj?'<b>·</b><span>CNPJ '+cnpj+'</span>':'')+'</p><div id="lari-wm-box"><a id="lari-wm" href="https://wa.me/message/IGGSZJCTRU67K1" target="_blank" rel="noopener" aria-label="Criado por Sites com a Lari"><span>Criado por</span><span class="lw"></span></a></div></div></div>';
f.appendChild(ft);f.classList.add('lf-ftn');
/* comportamento */
var nlb=ft.querySelector('.lf4-nl');if(nlb){var fm=nlb.querySelector('form'),er=nlb.querySelector('.lf4-err');fm.addEventListener('submit',function(e){e.preventDefault();var v=fm.querySelector('input').value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){er.textContent='Confere o e-mail? Parece que falta algo.';return}er.textContent='';if(!window.__lfNoSubmit){var ni=nl.querySelector('input[type=email]');if(ni){ni.value=v;if(nl.requestSubmit)nl.requestSubmit();else nl.submit()}}nlb.classList.add('done')})}
var tf=ft.querySelector('.lf4-tf'),ti=tf.querySelector('input'),te=ft.querySelector('.lf4-tr .lf4-err');ti.addEventListener('input',function(){te.textContent=''});tf.addEventListener('submit',function(e){e.preventDefault();var v=ti.value.replace(/^#/,'').trim();if(v.length<3){te.textContent='Digite o número do seu pedido.';return}try{navigator.clipboard&&navigator.clipboard.writeText(v)}catch(x){}te.textContent='Número copiado! É só colar na página de rastreio que abrimos para você.';window.open('https://rastreae.com.br','_blank','noopener')});
LF.$$('.lf3-col:not(.lf3-ct) h4',ft).forEach(function(h){h.addEventListener('click',function(){if(LF.mobile())h.parentElement.classList.toggle('op')})});
LF.css('lf-ft-css','footer.lf-ftn{background:#0e0e0e!important;padding:0!important;position:relative;margin:0!important}footer.lf-ftn>*:not(#lf-ft){position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;opacity:0!important;pointer-events:none!important;left:0}.newsletter-footer{display:none!important}'+
'#lf-ft{background:#0e0e0e;color:#bdb6ab;font-family:'+LF.BF+';border-top:1px solid rgba(201,169,97,.25)}#lf-ft *{box-sizing:border-box}'+
'#lf-ft svg{display:block}'+
'#lf-ft .lf4-duo{border-bottom:1px solid rgba(255,255,255,.07);background:radial-gradient(60% 120% at 25% 0%,rgba(201,169,97,.07),transparent 60%),radial-gradient(60% 120% at 80% 100%,rgba(201,169,97,.05),transparent 60%)}'+
'#lf-ft .lf4-in{max-width:1120px;margin:0 auto;padding:48px 24px;display:grid;grid-template-columns:1fr 1fr;gap:28px}'+
'#lf-ft .lf4-in>.lf4-p:only-child{grid-column:1/-1;max-width:640px;margin:0 auto;width:100%}'+
'#lf-ft .lf4-p{position:relative;padding:34px 34px 30px;border-radius:20px;background:linear-gradient(160deg,rgba(255,255,255,.055),rgba(255,255,255,.015) 55%,rgba(201,169,97,.04));box-shadow:0 30px 60px -30px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.06);overflow:hidden}'+
'#lf-ft .lf4-p:before{content:"";position:absolute;inset:0;border-radius:20px;padding:1px;background:linear-gradient(140deg,rgba(230,207,152,.55),rgba(255,255,255,.06) 35%,rgba(255,255,255,.04) 65%,rgba(230,207,152,.3));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}'+
'#lf-ft .lf4-p:after{content:"";position:absolute;top:-40%;left:-60%;width:40%;height:180%;background:linear-gradient(90deg,transparent,rgba(255,240,205,.06),transparent);transform:rotate(18deg);animation:lf4sh 9s ease-in-out infinite;pointer-events:none}#lf-ft .lf4-tr:after{animation-delay:4.5s}@keyframes lf4sh{0%,70%{left:-60%}100%{left:130%}}'+
'#lf-ft .lf4-b small{display:block;font-size:10px;letter-spacing:.26em;text-transform:uppercase;color:#c9a961;margin:0 0 10px}'+
'#lf-ft .lf4-b h3{font-family:'+HF+';font-size:24px;font-weight:400;color:#f5f0e7;margin:0 0 10px;line-height:1.2;text-transform:none}'+
'#lf-ft .lf4-b p{font-size:13px;line-height:1.55;color:#8f897f;margin:0 0 14px}'+
'#lf-ft .lf4-pk{list-style:none;display:flex;flex-wrap:wrap;gap:8px 18px;margin:0 0 22px;padding:0}#lf-ft .lf4-pk li{display:flex;align-items:center;gap:8px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#cfc7ba}#lf-ft .lf4-pk li:before{content:"";width:5px;height:5px;background:#c9a961;transform:rotate(45deg)}'+
'#lf-ft .lf4-f{display:flex;align-items:center;height:48px;padding:5px 5px 5px 20px;border-radius:30px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.12);transition:border-color .4s,box-shadow .4s;margin:0}'+
'#lf-ft .lf4-f:focus-within{border-color:rgba(217,189,124,.7);box-shadow:0 0 0 4px rgba(201,169,97,.08)}'+
'#lf-ft .lf4-f input{flex:1;min-width:0;height:100%;background:transparent!important;border:0!important;outline:0;box-shadow:none!important;color:#f5f0e7;font:inherit;font-size:13.5px;padding:0;margin:0}#lf-ft .lf4-f input::placeholder{color:#6c675f}'+
'#lf-ft .lf4-f button{height:38px;padding:0 8px 0 18px;border:0;border-radius:24px;cursor:pointer;display:flex;align-items:center;gap:6px;background:linear-gradient(120deg,#b8924a,#e6cf98 50%,#b8924a);background-size:200% 100%;color:#141210;font:inherit;font-size:10.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;transition:background-position .6s}#lf-ft .lf4-f button:hover{background-position:100% 0}'+
'#lf-ft .lf4-f button svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}'+
'#lf-ft .lf4-err{display:block;min-height:18px;font-size:12px;color:#d9bd7c;margin-top:8px;padding-left:6px}'+
'#lf-ft .lf4-ok{display:none;align-items:center;gap:12px;height:48px;color:#f5f0e7;font-size:13.5px}#lf-ft .lf4-ok svg{width:30px;height:30px;padding:5px;border-radius:50%;border:1px solid rgba(217,189,124,.6);fill:none;stroke:#d9bd7c;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1}'+
'#lf-ft .lf4-nl.done .lf4-f{display:none}#lf-ft .lf4-nl.done .lf4-ok{display:flex}#lf-ft .lf4-nl.done .lf4-ok svg path{animation:lf4ck .7s .2s ease forwards}@keyframes lf4ck{to{stroke-dashoffset:0}}'+
'#lf-ft .lf4-st{list-style:none;margin:16px 0 24px;padding:0;display:flex;justify-content:space-between;position:relative}'+
'#lf-ft .lf4-st li{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:10px;width:25%}'+
'#lf-ft .lf4-st li i{width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#121110;border:1px solid rgba(217,189,124,.35);color:#8a7d62;animation:lf4dot2 4.8s infinite}'+
'#lf-ft .lf4-st li i svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round}'+
'#lf-ft .lf4-st li:nth-child(2) i{animation-delay:1.2s}#lf-ft .lf4-st li:nth-child(3) i{animation-delay:2.4s}#lf-ft .lf4-st li:nth-child(4) i{animation-delay:3.6s}'+
'@keyframes lf4dot2{0%,100%{color:#8a7d62;border-color:rgba(217,189,124,.35);box-shadow:none;background:#121110}8%,24%{color:#141210;border-color:#e6cf98;background:#e0c78c;box-shadow:0 0 18px rgba(230,207,152,.45)}}'+
'#lf-ft .lf4-st span{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#7f796f;white-space:nowrap}'+
'#lf-ft .lf4-st .ln{position:absolute;left:12.5%;right:12.5%;top:17px;height:1px;background:rgba(255,255,255,.1);overflow:hidden}#lf-ft .lf4-st .ln em{position:absolute;top:0;left:-30%;width:30%;height:1px;background:linear-gradient(90deg,transparent,#e6cf98,transparent);animation:lf4run 4.8s linear infinite}@keyframes lf4run{to{left:100%}}'+
'#lf-ft .lf4-acc{display:inline-flex;align-items:center;gap:7px;margin-top:4px;padding-left:6px;font-size:11.5px;color:#8f897f!important;text-decoration:none!important;white-space:nowrap}#lf-ft .lf4-acc svg{width:13px;height:13px;fill:none;stroke:#c9a961;stroke-width:1.3}#lf-ft .lf4-acc b{font-weight:500;color:#e2d6bf}#lf-ft .lf4-acc:hover b{color:#e6cf98}'+
'#lf-ft .lf3-in{max-width:1120px;margin:0 auto;padding:0 24px}'+
'#lf-ft .lf4-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr 1.1fr;gap:48px;padding:44px 0 40px}'+
'#lf-ft .lf3-logo{display:block;width:150px;height:46px;margin-bottom:22px}#lf-ft .lf3-logo i{display:block;width:100%;height:100%;background:linear-gradient(120deg,#b8924a,#ecd9a6 45%,#b8924a);-webkit-mask:var(--lf-logo) left center/contain no-repeat;mask:var(--lf-logo) left center/contain no-repeat}'+
'#lf-ft .lf3-soc{display:flex;gap:10px}#lf-ft .lf3-soc a{width:34px;height:34px;border:1px solid rgba(255,255,255,.14);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#d8d1c5;transition:all .35s}#lf-ft .lf3-soc a:hover{border-color:#c9a961;color:#c9a961;transform:translateY(-2px)}#lf-ft .lf3-soc svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round}'+
'#lf-ft h4{font-size:11px!important;font-weight:500;line-height:1;letter-spacing:.22em;text-transform:uppercase;color:#f3eee6;margin:6px 0 24px;font-family:inherit}'+
'#lf-ft ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:13px}'+
'#lf-ft ul a{color:#9d978d!important;font-size:13px;line-height:1.4;text-decoration:none!important;display:inline-flex;align-items:center;gap:11px;transition:color .3s}#lf-ft ul a:hover{color:#f3eee6!important}'+
'#lf-ft .lf3-ct ul a svg{width:15px;height:15px;flex:0 0 15px;fill:none;stroke:#c9a961;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round}'+
'#lf-ft .lf3-pay{display:flex;align-items:center;gap:22px;padding:22px 0;border-top:1px solid rgba(255,255,255,.07);border-bottom:1px solid rgba(255,255,255,.07)}#lf-ft .lf3-pay>span{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#7d776e;white-space:nowrap}'+
'#lf-ft .lf3-pi{display:flex;flex-wrap:wrap;gap:8px;align-items:center}#lf-ft .lf3-pi img{height:21px;width:auto;background:#fff;border-radius:5px;padding:3px 5px;opacity:.6;filter:grayscale(1);transition:all .3s}#lf-ft .lf3-pi img:hover{opacity:1;filter:none}'+
'#lf-ft .lf3-leg{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:14px 0 18px}#lf-ft .lf3-leg p{margin:0;font-size:11.5px;color:#6f6a63;letter-spacing:.03em}#lf-ft .lf3-leg b{margin:0 10px;color:#c9a961;font-weight:400}'+
'#lf-ft #lari-wm-box{display:flex;padding:0}#lf-ft #lari-wm{display:inline-flex;align-items:center;gap:9px;color:#8b857b!important;opacity:.85;text-decoration:none!important;font:500 9.5px/1 Jost,Arial,sans-serif;letter-spacing:.22em;text-transform:uppercase;transition:opacity .3s}#lf-ft #lari-wm:hover{opacity:1}'+
'#lf-ft #lari-wm .lw{display:block;width:44px;height:37px;background:url("'+WM+'") center/contain no-repeat;transition:transform .3s}#lf-ft #lari-wm:hover .lw{transform:translateY(-2px) rotate(-3deg)}'+
'@media(max-width:900px){#lf-ft .lf4-in{grid-template-columns:1fr}#lf-ft .lf4-grid{grid-template-columns:1fr 1fr;gap:34px 24px}#lf-ft .lf4-brand{grid-column:1/-1}}'+
'@media(max-width:767px){#lf-ft .lf4-in{padding:28px 14px;gap:12px}#lf-ft .lf4-p{padding:20px 18px 18px;border-radius:16px}#lf-ft .lf4-b small{margin:0 0 6px;font-size:9.5px}#lf-ft .lf4-b h3{font-size:19px;margin-bottom:12px}#lf-ft .lf4-nl p,#lf-ft .lf4-pk{display:none}#lf-ft .lf4-f{height:44px}#lf-ft .lf4-f button{height:34px}#lf-ft .lf4-f button span{display:none}#lf-ft .lf4-f button{padding:0 10px}'+
'#lf-ft .lf4-st{margin:4px 0 14px}#lf-ft .lf4-st li i{width:26px;height:26px}#lf-ft .lf4-st li i svg{width:12px;height:12px}#lf-ft .lf4-st .ln{top:13px}#lf-ft .lf4-st li{gap:6px}#lf-ft .lf4-st span{font-size:8.5px;letter-spacing:.06em}#lf-ft .lf4-err{min-height:0;margin:4px 0 0}'+
'#lf-ft .lf3-in{padding:0 18px}#lf-ft .lf4-grid{grid-template-columns:1fr;gap:0;padding:22px 0 10px}#lf-ft .lf4-brand{display:flex;align-items:center;justify-content:space-between;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,.07)}#lf-ft .lf3-logo{width:110px;height:36px;margin:0}'+
'#lf-ft .lf3-col{border-bottom:1px solid rgba(255,255,255,.07)}#lf-ft .lf3-col h4{margin:0;padding:16px 0;display:flex;justify-content:space-between;align-items:center;cursor:pointer}#lf-ft .lf3-col h4:after{content:"+";font-size:16px;font-weight:300;color:#c9a961;letter-spacing:0;transition:transform .3s}#lf-ft .lf3-col.op h4:after{transform:rotate(45deg)}#lf-ft .lf3-col ul{display:none;padding:0 0 16px;gap:12px}#lf-ft .lf3-col.op ul{display:flex}'+
'#lf-ft .lf3-ct{border-bottom:0}#lf-ft .lf3-ct h4{pointer-events:none}#lf-ft .lf3-ct h4:after{display:none}#lf-ft .lf3-ct ul{display:flex;flex-direction:row;flex-wrap:wrap;gap:10px 22px}'+
'#lf-ft .lf3-pay{padding:14px 0;flex-direction:column;align-items:flex-start;gap:10px}#lf-ft .lf3-pay>span{font-size:9.5px}#lf-ft .lf3-pi{gap:5px}#lf-ft .lf3-pi img{height:17px;padding:2px 4px}'+
'#lf-ft .lf3-leg{flex-direction:column;align-items:center;gap:8px;padding:14px 0 90px;text-align:center}#lf-ft .lf3-leg p{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px}#lf-ft .lf3-leg b{display:none}}');
})})()}catch(e){console.warn("[LF] 50-footer",e)}
/* ---- 51-footer-seal ---- */
try{(function(){LF.add('footer-seal',function(){
var ft=LF.$('#lf-ft');if(!ft||ft.querySelector('.lf-seal-ft'))return;
var segs=LF.$$('footer .custom-seal a, footer .custom-seal').filter(function(e){return !e.closest('#lf-ft')});var box=segs[0];if(!box)return;
var img=box.querySelector('img');var u=LF.imgOf(img);if(!u)return;
LF.$$('#lf-ft .lf3-pi img').forEach(function(i){if(i.getAttribute('src')===u)i.remove()});
var a=box.closest('a')||box.querySelector('a');var html='<img src="'+u+'" alt="'+LF.esc(img.alt||'Selo de segurança')+'" loading="lazy">';
var li=document.createElement('li');li.className='lf-seal-ft';li.innerHTML=a?'<a href="'+a.getAttribute('href')+'" target="_blank" rel="noopener">'+html+'</a>':html;
var ul=ft.querySelector('.lf3-ct ul');if(ul)ul.appendChild(li);
LF.css('lf-ftseal-css','#lf-ft .lf-seal-ft{margin-top:8px}#lf-ft .lf-seal-ft img{display:block;height:46px;width:auto;border-radius:6px}@media(max-width:767px){#lf-ft .lf-seal-ft{flex-basis:100%}#lf-ft .lf-seal-ft img{height:40px}}');
})})()}catch(e){console.warn("[LF] 51-footer-seal",e)}
/* ---- 52-seal-clean ---- */
try{(function(){LF.add('seal-clean',function(){
var im=LF.$('#lf-ft .lf-seal-ft img');if(!im||im.dataset.cl)return;im.dataset.cl=1;
var src=im.getAttribute('src');var t=new Image();t.crossOrigin='anonymous';
t.onload=function(){try{var W=t.naturalWidth,H=t.naturalHeight,c=document.createElement('canvas');c.width=W;c.height=H;var x=c.getContext('2d');x.drawImage(t,0,0);var d=x.getImageData(0,0,W,H),p=d.data;
 var cs=[[0,0],[W-1,0],[0,H-1],[W-1,H-1]].map(function(q){var i=(q[1]*W+q[0])*4;return[p[i],p[i+1],p[i+2]]});var br=Math.round(cs.reduce(function(a,b){return a+b[0]},0)/4),bg=Math.round(cs.reduce(function(a,b){return a+b[1]},0)/4),bb=Math.round(cs.reduce(function(a,b){return a+b[2]},0)/4);
 for(var i=0;i<p.length;i+=4){var dd=Math.abs(p[i]-br)+Math.abs(p[i+1]-bg)+Math.abs(p[i+2]-bb);if(dd<40)p[i+3]=0;else if(dd<90)p[i+3]=Math.round(p[i+3]*(dd-40)/50)}
 x.putImageData(d,0,0);im.src=c.toDataURL('image/png');im.classList.add('ok')}catch(e){im.classList.add('blend')}};
t.onerror=function(){im.classList.add('blend')};t.src=src;
LF.css('lf-sealcl-css','#lf-ft .lf-seal-ft img{background:transparent!important;border-radius:0!important}#lf-ft .lf-seal-ft img.blend{mix-blend-mode:screen}');
})})()}catch(e){console.warn("[LF] 52-seal-clean",e)}
/* ---- 60-product ---- */
try{(function(){LF.add('product',function(){
if(LF.tpl()!=='product'||LF.$('#lf-pp'))return;var $=LF.$,$$=LF.$$,I=LF.ico,HF=LF.HF;
var det=$('.js-product-detail');if(!det)return;var pc=det.querySelector('.js-product-container')||det;var V=[];try{V=JSON.parse(pc.getAttribute('data-variants')||'[]')}catch(e){}
var nmEl=det.querySelector('.js-product-name');var cl=LF.cleanName(nmEl?nmEl.textContent:'');var name=cl.name;
var imgs=$$('.js-swiper-product img',det).map(function(i){return LF.imgOf(i)}).filter(Boolean).filter(function(v,i,a){return a.indexOf(v)===i});
var crumbs=$$('.breadcrumbs > *').filter(function(e){return !e.classList.contains('separator')});
var crumbHtml=crumbs.slice(0,-1).map(function(e){return '<a href="'+(e.getAttribute('href')||'/')+'">'+LF.esc(LF.cap(e.textContent.trim()))+'</a>'}).join('<i></i>');
var uc=det.querySelector('.user-content');var about='',main='',notes=[],family='';
if(uc){var kids=[].slice.call(uc.children);var si=kids.findIndex(function(k){return /^\s*saiba mais\s*$/i.test(k.textContent)});
 if(si>=0)about=kids.slice(0,si).map(function(k){return k.textContent.trim()}).filter(function(t){return t&&!/^decant$/i.test(t)}).join(' ').replace(/⚠️\s*/,'');
 (si>=0?kids.slice(si+1):kids).forEach(function(k){if(k.tagName==='UL'||/Notas de/i.test(k.textContent)){$$('li',k).forEach(function(li){var m=li.textContent.trim().match(/^([^:]+):\s*(.+)$/);if(!m)return;if(/fam[ií]lia/i.test(m[1]))family=m[2].trim();else notes.push({k:m[1].replace(/^Notas?\s+de\s+/i,'').trim(),v:m[2].trim()})})}else if(k.textContent.trim())main+='<p>'+k.innerHTML+'</p>'});
 if(!main&&!notes.length)main=uc.innerHTML}
var box=document.createElement('div');box.id='lf-pp';
var opts=V.map(function(v,i){return{i:i,l:v.option0,ok:v.available&&v.stock!==0}});
box.innerHTML='<div class="pi"><nav class="cb">'+crumbHtml+'<i></i><span>'+LF.esc(name)+'</span></nav><div class="pg">'+
 '<div class="gal"><div class="th">'+imgs.map(function(u,i){return '<button type="button" data-i="'+i+'"'+(i?'':' class="on"')+'><img src="'+u+'" alt=""></button>'}).join('')+'</div><div class="mn"><div class="tr">'+imgs.map(function(u){return '<div class="sl"><img src="'+u+'" alt="'+LF.esc(name)+'"></div>'}).join('')+'</div>'+(cl.badges.length?'<div class="bd">'+cl.badges.map(function(b){return '<span>'+b+'</span>'}).join('')+'</div>':'')+'<span class="off" hidden></span><div class="dt">'+imgs.map(function(u,i){return '<i'+(i?'':' class="on"')+'></i>'}).join('')+'</div></div></div>'+
 '<div class="inf">'+(cl.tags[0]?'<small class="tg">'+cl.tags[0]+'</small>':'')+'<h1>'+LF.esc(name)+'</h1>'+(family?'<p class="fam">'+LF.esc(family)+'</p>':'')+
 '<div class="pr"><div class="r1"><span class="cp"></span><span class="pct"></span></div><div class="pix"><b class="pv"></b><span>no Pix</span></div><div class="r2"><span class="cd"></span> <em>no cartão</em></div><p class="ins"></p></div>'+
 (opts.length&&opts[0].l?'<div class="vr"><div class="vh"><span>Volume</span><em class="vs"></em></div><div class="vb">'+opts.map(function(o){return '<button type="button" data-i="'+o.i+'"'+(o.ok?'':' disabled')+'>'+LF.esc(o.l)+'</button>'}).join('')+'</div></div>':'')+
 '<div class="buy"><div class="qt"><button type="button" class="m" aria-label="Diminuir">−</button><input type="number" value="1" min="1" aria-label="Quantidade"><button type="button" class="p" aria-label="Aumentar">+</button></div><button type="button" class="add">'+I.bag+'<span>Adicionar à sacola</span></button></div><p class="stk"></p>'+
 '<div class="shp"><div class="sh">'+I.truck+'<span>Calcule o frete e o prazo</span></div><div class="shn"></div></div><div class="acc"></div></div></div></div>';
var host=det.querySelector('.container')||det.firstElementChild;det.insertBefore(box,host);host.classList.add('lf-hide-native');
/* frete nativo */
/* acordeões */
var acc=box.querySelector('.acc');var add=function(t,html,open){var d=document.createElement('div');d.className='ai'+(open?' op':'');d.innerHTML='<button type="button"><span>'+t+'</span><i></i></button><div class="ab"><div>'+html+'</div></div>';d.querySelector('button').onclick=function(){d.classList.toggle('op')};acc.appendChild(d)};
if(main)add('Descrição',main,true);if(notes.length)add('Notas olfativas','<ul class="nl">'+notes.map(function(n){return '<li><b>'+LF.esc(LF.cap(n.k))+'</b><span>'+LF.esc(n.v)+'</span></li>'}).join('')+'</ul>');if(about)add(cl.tags[0]==='Decant'?'Sobre o decant':'Importante','<p>'+LF.esc(about)+'</p>');
/* galeria */
var tr=box.querySelector('.tr'),th=$$('.th button',box),dots=$$('.dt i',box);var goImg=function(i){tr.scrollTo({left:tr.clientWidth*i,behavior:'smooth'})};
th.forEach(function(b){b.onclick=function(){goImg(+b.dataset.i)}});
tr.addEventListener('scroll',function(){var i=Math.round(tr.scrollLeft/tr.clientWidth);th.forEach(function(b,j){b.classList.toggle('on',j===i)});dots.forEach(function(b,j){b.classList.toggle('on',j===i)})},{passive:true});
$$('.sl',box).forEach(function(s){var im=s.querySelector('img');s.onmousemove=function(e){var r=s.getBoundingClientRect();im.style.transformOrigin=((e.clientX-r.left)/r.width*100)+'% '+((e.clientY-r.top)/r.height*100)+'%';s.classList.add('zm')};s.onmouseleave=function(){s.classList.remove('zm')}});
/* variantes ligadas ao formulário nativo */
var setV=function(i,sync){var v=V[i];if(!v)return;$$('.vb button',box).forEach(function(b){b.classList.toggle('on',+b.dataset.i===i)});var vs=box.querySelector('.vs');if(vs)vs.textContent=v.option0||'';
 var p=v.price_number,c=v.compare_at_price_number;box.querySelector('.cd').textContent=v.price_short;box.querySelector('.cp').textContent=c&&c>p?v.compare_at_price_short:'';var pct=c&&c>p?Math.round((1-p/c)*100):0;box.querySelector('.pct').textContent=pct?'−'+pct+'%':'';box.querySelector('.r1').hidden=!pct;var off=box.querySelector('.off');off.hidden=!pct;off.textContent=pct?'−'+pct+'%':'';
 var pixN=LF.num(v.price_with_payment_discount_short);var pix=box.querySelector('.pix');var hasPix=pixN&&pixN<p;pix.hidden=!hasPix;box.querySelector('.pv').textContent=hasPix?v.price_with_payment_discount_short:'';box.querySelector('.r2').classList.toggle('main',!hasPix);
 var ins='';try{var idt=typeof v.installments_data==='string'?JSON.parse(v.installments_data):v.installments_data;var g=Object.keys(idt).map(function(k){return idt[k]})[0];var best=Object.keys(g).map(function(k){return[+k,g[k]]}).filter(function(x){return x[1].without_interests||x[1].interest===0}).sort(function(a,b){return b[0]-a[0]})[0];if(best&&best[0]>1)ins='ou até <b>'+best[0]+'x de '+LF.brl(best[1].installment_value)+'</b> sem juros'}catch(e){}box.querySelector('.ins').innerHTML=ins;
 var s=box.querySelector('.stk');s.textContent=v.stock!==null&&v.stock>0&&v.stock<=3?'Restam apenas '+v.stock+(v.stock===1?' unidade':' unidades')+' deste volume':'';
 var ad=box.querySelector('.add');var ok=v.available&&v.stock!==0;ad.disabled=!ok;ad.querySelector('span').textContent=ok?'Adicionar à sacola':'Esgotado';
 if(v.image_url){var key=String(v.image_url).split('/').pop().split('-').slice(0,2).join('-');var k=imgs.findIndex(function(u){return u.indexOf(key)>-1});if(k>=0)goImg(k)}
 if(sync){var nb=$$('[data-option]',det).filter(function(b){return b.getAttribute('data-option')===v.option0})[0];if(nb)nb.click();else{var sel=det.querySelector('select[name="variation[0]"]');if(sel){sel.value=v.option0;sel.dispatchEvent(new Event('change',{bubbles:true}))}}}};
$$('.vb button',box).forEach(function(b){b.onclick=function(){setV(+b.dataset.i,true)}});
var sel0=det.querySelector('select[name="variation[0]"]');var first=V.findIndex(function(v){return sel0?v.option0===sel0.value&&v.available:false});if(first<0)first=V.findIndex(function(v){return v.available&&v.stock!==0});setV(first<0?0:first,first>=0&&sel0&&V[first].option0!==sel0.value);
var q=box.querySelector('.qt input'),nq=det.querySelector('input[name=quantity]');var sq=function(){if(nq){nq.value=q.value;nq.dispatchEvent(new Event('change',{bubbles:true}))}};
box.querySelector('.qt .m').onclick=function(){q.value=Math.max(1,+q.value-1);sq()};box.querySelector('.qt .p').onclick=function(){q.value=+q.value+1;sq()};q.onchange=sq;
box.querySelector('.add').onclick=function(e){var b=e.currentTarget;var na=det.querySelector('.js-addtocart');sq();if(na)na.click();b.classList.add('done');b.querySelector('span').textContent='Adicionado ✓';setTimeout(function(){b.classList.remove('done');b.querySelector('span').textContent='Adicionar à sacola'},1800)};
LF.css('lf-pp-css','#lf-pp{background:#fff;padding:22px 24px 70px;font-family:'+LF.BF+'}#lf-pp *{box-sizing:border-box}#lf-pp .pi{max-width:1180px;margin:0 auto}'+
'#lf-pp .cb{display:flex;align-items:center;flex-wrap:wrap;gap:10px;font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#9a9288;margin:0 0 22px}#lf-pp .cb a{color:#9a9288!important;text-decoration:none!important}#lf-pp .cb a:hover{color:#141210!important}#lf-pp .cb span{color:#a8843f}#lf-pp .cb i{width:4px;height:4px;background:#c9a961;transform:rotate(45deg);opacity:.7}'+
'#lf-pp .pg{display:grid;grid-template-columns:1.08fr 1fr;gap:56px;align-items:start}'+
'#lf-pp .gal{display:grid;grid-template-columns:76px 1fr;gap:16px;position:sticky;top:100px}#lf-pp .th{display:flex;flex-direction:column;gap:10px}'+
'#lf-pp .th button{width:76px;height:76px;border-radius:12px;border:1px solid rgba(20,18,16,.08);background:#fff;padding:6px;cursor:pointer;opacity:.6;transition:all .3s}#lf-pp .th button.on,#lf-pp .th button:hover{opacity:1;border-color:#141210}#lf-pp .th img{width:100%;height:100%;object-fit:contain}'+
'#lf-pp .mn{position:relative;border-radius:18px;background:#fff;overflow:hidden;border:1px solid rgba(20,18,16,.08)}'+
'#lf-pp .tr{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;aspect-ratio:1/1}#lf-pp .tr::-webkit-scrollbar{display:none}'+
'#lf-pp .sl{flex:0 0 100%;scroll-snap-align:start;display:flex;align-items:center;justify-content:center;padding:40px;overflow:hidden;cursor:zoom-in}#lf-pp .sl img{width:100%;height:100%;object-fit:contain;transition:transform .35s}#lf-pp .sl.zm img{transform:scale(1.9)}'+
'#lf-pp .bd{position:absolute;top:16px;left:16px;display:flex;gap:8px}#lf-pp .bd span{height:26px;display:inline-flex;align-items:center;padding:0 12px;border-radius:14px;background:#fff;color:#141210;border:1px solid rgba(20,18,16,.15);font-size:9.5px;letter-spacing:.2em;text-transform:uppercase}'+
'#lf-pp .off{position:absolute;top:16px;right:16px;height:26px;display:flex;align-items:center;padding:0 10px;border-radius:14px;background:#fff;border:1px solid #c9a961;color:#a8843f;font-size:11px;font-weight:600}#lf-pp .off[hidden]{display:none}#lf-pp .dt{display:none}'+
'#lf-pp .tg{display:inline-block;font-size:10.5px;letter-spacing:.3em;text-transform:uppercase;color:#a8843f;margin-bottom:12px}'+
'#lf-pp h1{font-family:'+HF+';font-weight:400;font-size:32px;line-height:1.12;color:#141210;margin:0 0 10px;text-transform:none}#lf-pp .fam{font-size:13px;letter-spacing:.06em;color:#7a736a;margin:0 0 18px;font-style:italic}'+
'#lf-pp .pr{display:flex;flex-direction:column;padding:18px 0;border-top:1px solid rgba(20,18,16,.08);margin-bottom:22px}#lf-pp .r1{display:flex;align-items:center;gap:10px;margin-bottom:4px}#lf-pp .r1[hidden]{display:none}'+
'#lf-pp .cp{font-size:14px;color:#9a9288;text-decoration:line-through}#lf-pp .pct{height:22px;display:inline-flex;align-items:center;padding:0 9px;border-radius:12px;border:1px solid #c9a961;color:#a8843f;font-size:11px;font-weight:600}'+
'#lf-pp .pix{display:flex;align-items:center;gap:10px;margin:2px 0 6px}#lf-pp .pix[hidden]{display:none}#lf-pp .pix b{font-size:28px;font-weight:700;color:#141210}#lf-pp .pix span{height:22px;display:inline-flex;align-items:center;padding:0 10px;border-radius:12px;background:linear-gradient(120deg,#b8924a,#e6cf98 50%,#b8924a);color:#141210;font-size:10px;letter-spacing:.14em;text-transform:uppercase;font-weight:600}'+
'#lf-pp .r2{font-size:13.5px;color:#4a443d;margin:0 0 2px}#lf-pp .r2 .cd{font-weight:600;font-size:14px}#lf-pp .r2 em{font-style:normal;color:#8a837a;font-size:13px}#lf-pp .r2.main .cd{font-size:28px;font-weight:700}#lf-pp .r2.main em{display:none}'+
'#lf-pp .ins{font-size:13px;color:#7a736a;margin:0}#lf-pp .ins b{color:#141210;font-weight:600}'+
'#lf-pp .vh{display:flex;align-items:baseline;gap:10px;margin-bottom:12px}#lf-pp .vh span{font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#141210;font-weight:600}#lf-pp .vh em{font-style:normal;font-size:13px;color:#7a736a}'+
'#lf-pp .vb{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:24px}#lf-pp .vb button{min-height:46px;padding:0 20px;border-radius:30px;border:1px solid rgba(20,18,16,.14);background:#fff;font:inherit;font-size:13.5px;color:#141210;cursor:pointer;transition:all .3s}#lf-pp .vb button:hover{border-color:#c9a961}#lf-pp .vb button.on{background:#141210;border-color:#141210;color:#e6cf98}#lf-pp .vb button:disabled{opacity:.4;text-decoration:line-through;cursor:not-allowed}'+
'#lf-pp .buy{display:flex;gap:12px}#lf-pp .qt{display:flex;align-items:center;height:56px;border-radius:30px;border:1px solid rgba(20,18,16,.14);background:#fff;padding:0 6px}#lf-pp .qt button{width:38px;height:38px;border:0;background:none;font-size:18px;color:#141210;cursor:pointer;border-radius:50%}#lf-pp .qt button:hover{background:#f4f2ef}'+
'#lf-pp .qt input{width:34px;border:0!important;background:none!important;text-align:center;font:inherit;font-size:15px;color:#141210;-moz-appearance:textfield;box-shadow:none!important;padding:0}#lf-pp .qt input::-webkit-inner-spin-button{-webkit-appearance:none}'+
'#lf-pp .add{flex:1;height:56px;display:flex;align-items:center;justify-content:center;gap:12px;border:0;border-radius:30px;background:#141210;color:#f5f0e7;font:inherit;font-size:11.5px;font-weight:500;letter-spacing:.2em;text-transform:uppercase;cursor:pointer;transition:background .35s}#lf-pp .add.done{background:linear-gradient(120deg,#b8924a,#e6cf98 50%,#b8924a);color:#141210}#lf-pp .add:disabled{opacity:.45;cursor:not-allowed}'+
'#lf-pp .add svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round}#lf-pp .stk{font-size:12.5px;color:#a8843f;margin:12px 0 0}#lf-pp .stk:empty{display:none}'+
'#lf-pp .shp{margin-top:20px}#lf-pp .sh{display:flex;align-items:center;gap:10px;font-size:12.5px;color:#5a534b;margin-bottom:10px}#lf-pp .sh svg{width:20px;height:20px;fill:none;stroke:#a8843f;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round}'+
'#lf-pp .shn .form-control,#lf-pp .shn input[name=zipcode]{height:46px!important;border-radius:30px!important;border:1px solid rgba(20,18,16,.14)!important;background:#faf8f5!important;padding:0 18px!important;font-size:14px!important;box-shadow:none!important}'+
'#lf-pp .shn .btn,#lf-pp .shn button{height:46px!important;border-radius:30px!important;border:1px solid #141210!important;background:#fff!important;color:#141210!important;font-size:10.5px!important;letter-spacing:.18em!important;text-transform:uppercase!important;padding:0 22px!important}'+
'#lf-pp .shn .btn:hover{background:#141210!important;color:#e6cf98!important}#lf-pp .shn a{color:#8a837a!important;font-size:12px!important}#lf-pp .shn h6,#lf-pp .shn .font-small{font-size:12.5px!important}'+
'#lf-pp .acc{margin-top:30px;border-top:1px solid rgba(20,18,16,.1)}#lf-pp .ai{border-bottom:1px solid rgba(20,18,16,.1)}'+
'#lf-pp .ai>button{width:100%;display:flex;align-items:center;justify-content:space-between;padding:18px 0;border:0;background:none;cursor:pointer;font:inherit;font-size:11.5px;letter-spacing:.2em;text-transform:uppercase;color:#141210;font-weight:500}'+
'#lf-pp .ai>button i{position:relative;width:12px;height:12px}#lf-pp .ai>button i:before,#lf-pp .ai>button i:after{content:"";position:absolute;left:0;right:0;top:50%;height:1px;background:#141210;transition:transform .3s}#lf-pp .ai>button i:after{transform:rotate(90deg)}#lf-pp .ai.op>button i:after{transform:rotate(0)}'+
'#lf-pp .ab{display:grid;grid-template-rows:0fr;transition:grid-template-rows .4s ease}#lf-pp .ai.op .ab{grid-template-rows:1fr}#lf-pp .ab>div{overflow:hidden}#lf-pp .ai.op .ab>div{padding-bottom:20px}'+
'#lf-pp .ab p{font-size:14px;line-height:1.8;color:#4a443d;margin:0 0 10px}#lf-pp .nl{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}#lf-pp .nl li{display:grid;grid-template-columns:90px 1fr;gap:12px;font-size:14px;color:#4a443d}#lf-pp .nl b{font-weight:500;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#a8843f;padding-top:2px}'+
'.js-related-products{background:#f4f2ef!important;padding:60px 0!important}.js-related-products .products-section-title,.js-related-products h2{font-family:'+HF+'!important;font-weight:400!important;font-size:30px!important;text-align:center;text-transform:none!important}'+
'@media(max-width:900px){#lf-pp{padding:14px 0 40px}#lf-pp .cb{padding:0 16px;font-size:9.5px;margin-bottom:12px}#lf-pp .pg{grid-template-columns:1fr;gap:22px}#lf-pp .gal{position:static;grid-template-columns:1fr;padding:0 12px}#lf-pp .th{display:none}#lf-pp .sl{padding:26px}'+
'#lf-pp .dt{display:flex;justify-content:center;gap:6px;position:absolute;bottom:14px;left:0;right:0}#lf-pp .dt i{width:6px;height:6px;border-radius:50%;background:rgba(20,18,16,.18);transition:all .3s}#lf-pp .dt i.on{width:18px;border-radius:3px;background:#b8924a}'+
'#lf-pp .inf{padding:0 18px}#lf-pp h1{font-size:26px}#lf-pp .pix b{font-size:25px}#lf-pp .buy{position:sticky;bottom:10px;z-index:5;background:#fff;padding:8px 0;border-radius:30px}}');
})})()}catch(e){console.warn("[LF] 60-product",e)}
/* ---- 62-product-ship2 ---- */
try{(function(){LF.add('product-ship2',function(){
var n=LF.$('#lf-pp .shn');if(!n||n.querySelector('.lfz'))return;
var nf=LF.$$('.js-product-detail .js-shipping-calculator-form').filter(function(f){return !f.closest('#lf-pp')&&f.querySelector('input[name=zipcode]')})[0];if(!nf){n.closest('.shp').remove();return}
var root=nf.closest('[data-store="shipping-calculator"]')||nf.parentElement.parentElement;var ni=nf.querySelector('input[name=zipcode]'),nb=nf.querySelector('.js-calculate-shipping');
var saved=(root.querySelector('.js-shipping-calculator-current-zip')||{}).textContent||ni.value||'';
var z=document.createElement('div');z.className='lfz';z.innerHTML='<div class="row1"><input type="text" inputmode="numeric" maxlength="9" placeholder="Digite seu CEP" aria-label="CEP"><button type="button">Calcular</button></div><a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a><div class="lfres"></div>';
n.innerHTML='';n.appendChild(z);var i=z.querySelector('input'),out=z.querySelector('.lfres');var fmt=function(v){v=String(v).replace(/\D/g,'').slice(0,8);return v.length>5?v.slice(0,5)+'-'+v.slice(5):v};i.value=fmt(saved);
i.addEventListener('input',function(){i.value=fmt(i.value)});
var resp=root.querySelector('.js-shipping-calculator-response'),spin=root.querySelector('.js-shipping-calculator-spinner');
var mirror=function(){var busy=spin&&getComputedStyle(spin).display!=='none'&&!(resp&&resp.textContent.trim());if(busy){out.innerHTML='<p class="ld">Calculando o frete…</p>';return}if(resp&&resp.textContent.trim()){out.innerHTML=resp.innerHTML;LF.$$('input,label',out).forEach(function(x){x.removeAttribute('id');x.removeAttribute('for')})}};
if(resp)new MutationObserver(mirror).observe(resp,{childList:true,subtree:true,characterData:true,attributes:true});if(spin)new MutationObserver(mirror).observe(spin,{attributes:true});
var go=function(){var v=i.value.replace(/\D/g,'');if(v.length!==8){i.focus();z.classList.add('err');return}z.classList.remove('err');out.innerHTML='<p class="ld">Calculando o frete…</p>';var ch=root.querySelector('.js-shipping-calculator-change-zipcode');if(ch)ch.click();ni.value=v;ni.dispatchEvent(new Event('input',{bubbles:true}));ni.dispatchEvent(new Event('keyup',{bubbles:true}));if(nb)nb.click();setTimeout(mirror,2500);setTimeout(mirror,5000)};
z.querySelector('button').onclick=go;i.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();go()}});
mirror();
LF.css('lf-ppship2-css','#lf-pp .lfz .row1{display:flex;gap:8px}#lf-pp .lfz input{flex:1;min-width:0;height:46px;padding:0 18px;border-radius:30px;border:1px solid rgba(20,18,16,.14)!important;background:#faf8f5!important;font:inherit;font-size:14px;outline:0;box-shadow:none!important}#lf-pp .lfz input:focus{border-color:#c9a961!important}#lf-pp .lfz.err input{border-color:#c0392b!important}'+
'#lf-pp .lfz button{height:46px!important;padding:0 24px!important;border-radius:30px!important;border:1px solid #141210!important;background:#141210!important;color:#f5f0e7!important;font:inherit;font-size:10.5px!important;letter-spacing:.18em!important;text-transform:uppercase!important;cursor:pointer}#lf-pp .lfz button:hover{color:#e6cf98!important}'+
'#lf-pp .lfz>a{display:inline-block;margin-top:8px;font-size:12px;color:#8a837a!important;text-decoration:none!important}'+
'#lf-pp .lfres{margin-top:10px;font-size:13px;color:#3d3730}#lf-pp .lfres .ld{color:#a8843f;font-size:12.5px;margin:6px 0}#lf-pp .lfres ul{list-style:none;padding:0;margin:0}#lf-pp .lfres li{padding:10px 14px;border:1px solid rgba(20,18,16,.08);border-radius:12px;margin-bottom:8px;background:#faf8f5}#lf-pp .lfres input[type=radio]{display:none}#lf-pp .lfres .btn,#lf-pp .lfres button{display:none!important}');
})})()}catch(e){console.warn("[LF] 62-product-ship2",e)}
/* ---- 01-base ---- */
try{(function(){LF.add('base',function(){LF.css('lf-base','.lf-hide-native{position:absolute!important;left:-9999px!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;opacity:0!important;pointer-events:none!important}')})})()}catch(e){console.warn("[LF] 01-base",e)}
/* ---- 63-product-gal-mobile ---- */
try{(function(){LF.add('product-gal-mobile',function(){var mn=LF.$('#lf-pp .mn');if(!mn||mn.querySelector('.ga'))return;var tr=mn.querySelector('.tr');var n=mn.querySelectorAll('.sl').length;if(n<2)return;
mn.insertAdjacentHTML('beforeend','<button type="button" class="ga gp" aria-label="Foto anterior">'+LF.ico.chev+'</button><button type="button" class="ga gn" aria-label="Próxima foto">'+LF.ico.chev+'</button><span class="gc"><b>1</b> / '+n+'</span>');
var go=function(d){var i=Math.round(tr.scrollLeft/tr.clientWidth)+d;i=Math.max(0,Math.min(n-1,i));tr.scrollTo({left:tr.clientWidth*i,behavior:'smooth'})};
mn.querySelector('.gp').onclick=function(){go(-1)};mn.querySelector('.gn').onclick=function(){go(1)};
var up=function(){var i=Math.round(tr.scrollLeft/tr.clientWidth);mn.querySelector('.gc b').textContent=i+1;mn.querySelector('.gp').disabled=i===0;mn.querySelector('.gn').disabled=i===n-1};tr.addEventListener('scroll',up,{passive:true});up();
LF.css('lf-ppgal-css','#lf-pp .ga,#lf-pp .gc{display:none}@media(max-width:900px){#lf-pp .ga{display:flex;position:absolute;top:50%;margin-top:-20px;z-index:3;width:40px;height:40px;border-radius:50%;border:1px solid rgba(20,18,16,.1);background:rgba(255,255,255,.9);backdrop-filter:blur(6px);align-items:center;justify-content:center;box-shadow:0 8px 20px -12px rgba(0,0,0,.4);transition:opacity .3s;padding:0}#lf-pp .ga svg{width:15px;height:15px;fill:none;stroke:#141210;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}#lf-pp .gp{left:10px}#lf-pp .gp svg{transform:rotate(180deg)}#lf-pp .gn{right:10px}#lf-pp .ga:disabled{opacity:0;pointer-events:none}'+
'#lf-pp .gc{display:block;position:absolute;right:12px;bottom:12px;z-index:3;padding:4px 10px;border-radius:12px;background:rgba(20,18,16,.75);color:#f5f0e7;font-size:11px;letter-spacing:.06em}#lf-pp .gc b{color:#e6cf98;font-weight:600}#lf-pp .dt{bottom:16px}}');
})})()}catch(e){console.warn("[LF] 63-product-gal-mobile",e)}
/* ---- 65-product-ship3 ---- */
try{(function(){LF.add('product-ship3',function(){LF.css('lf-ppship3-css','#lf-pp .lfres .alert,#lf-pp .lfres [class*=alert],#lf-pp .lfres [class*=warning]{background:#faf6ec!important;border:1px solid #ead9b0!important;color:#7c6440!important;border-radius:12px!important;font-size:11.5px!important;line-height:1.55!important;text-transform:none!important;letter-spacing:0!important;padding:10px 14px!important}#lf-pp .lfres .alert svg{display:none}#lf-pp .lfres h6,#lf-pp .lfres .font-weight-bold{font-size:12px!important;letter-spacing:.14em;text-transform:uppercase;color:#141210;margin:14px 0 8px!important}#lf-pp .lfres li{display:flex;align-items:center;justify-content:space-between;gap:10px}#lf-pp .lfres .radio-button-icons,#lf-pp .lfres [class*=radio-button-icon]{display:none!important}#lf-pp .lfres li strong,#lf-pp .lfres .price{color:#141210;font-weight:600}')})})()}catch(e){console.warn("[LF] 65-product-ship3",e)}
/* ---- 16-head-stable ---- */
try{(function(){LF.add('head-stable',function(){var h=LF.$('#lf-head');if(!h||h.dataset.st)return;h.dataset.st=1;var small=h.classList.contains('lf-small'),tk=false;
window.addEventListener('scroll',function(e){if(tk)return;tk=true;requestAnimationFrame(function(){tk=false;var y=window.scrollY;if(!small&&y>140){small=true;h.classList.add('lf-small')}else if(small&&y<30){small=false;h.classList.remove('lf-small')}else{h.classList.toggle('lf-small',small)}})},{passive:true});
LF.css('lf-headst-css','#lf-head .lf-row,#lf-head .lf-lgm{will-change:height}')})})()}catch(e){console.warn("[LF] 16-head-stable",e)}
/* ---- 66-product-vb2 ---- */
try{(function(){LF.add('product-vb2',function(){LF.css('lf-vb2-css','#lf-pp .vb{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}#lf-pp .vb button{width:100%;height:60px;min-height:60px;display:flex!important;align-items:center!important;justify-content:flex-start;gap:12px;padding:0 16px!important;border-radius:16px!important;text-align:left}#lf-pp .vb .vl{align-self:center}#lf-pp .vb .vt b{font-size:14px}#lf-pp .vb button>span:not(.vt){font-weight:600;font-size:14px}@media(max-width:560px){#lf-pp .vb{grid-template-columns:repeat(3,1fr);gap:8px}#lf-pp .vb button{height:auto;min-height:64px;flex-direction:column!important;justify-content:center;gap:6px;padding:10px 6px!important;text-align:center}#lf-pp .vb .vt{align-items:center;text-align:center}#lf-pp .vb .vt em{font-size:10px}}')})})()}catch(e){console.warn("[LF] 66-product-vb2",e)}
/* ---- 67-product-vb3 ---- */
try{(function(){LF.add('product-vb3',function(){
var bs=LF.$$('#lf-pp .vb button');if(!bs.length)return;var pc=LF.$('.js-product-detail .js-product-container');var V=[];try{V=JSON.parse(pc.getAttribute('data-variants')||'[]')}catch(e){}
var ml=function(t){var m=String(t).match(/(\d+(?:[.,]\d+)?)\s*ml/i);return m?parseFloat(m[1].replace(',','.')):0};
var lab=bs.map(function(b){var v=V[+b.dataset.i];return v?String(v.option0||''):b.textContent});
var vals=lab.map(ml);var u=vals.filter(function(x,i,a){return x&&a.indexOf(x)===i}).sort(function(a,b){return a-b});
bs.forEach(function(b,k){var full=lab[k].replace(/\s+/g,' ').trim();var m=full.match(/^(.*?\d+(?:[.,]\d+)?\s*ml)\s*[\(\-–]?\s*([^\)]*)\)?\s*$/i);var t1=full,t2='';if(m&&m[2]&&m[2].trim()){t1=m[1].trim();t2=m[2].trim()}
 var r=u.indexOf(vals[k]);var s=!vals[k]?0:(u.length<=1?2:Math.round(r/(u.length-1)*2)+1);b.dataset.s=s;
 b.innerHTML=(s?'<i class="vl"></i>':'')+'<span class="vt"><b>'+LF.esc(t1)+'</b>'+(t2?'<em>'+LF.esc(t2)+'</em>':'')+'</span>';b.title=full});
var svg=function(c){return 'data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 30"><rect x="3.4" y="0" width="5.2" height="4.4" rx=".6" fill="'+c+'"/><rect x="4.6" y="4.4" width="2.8" height="2.1" fill="'+c+'"/><rect x="1.9" y="6.5" width="8.2" height="21.6" rx="1.3" fill="none" stroke="'+c+'" stroke-width="1.2"/></svg>')};
LF.css('lf-vb3-css','#lf-pp .vb{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;align-items:stretch}'+
'#lf-pp .vb button{width:100%;height:auto!important;min-height:58px!important;display:flex!important;flex-direction:row!important;align-items:center!important;justify-content:center!important;gap:10px;padding:8px 14px!important;border-radius:40px!important;text-align:left}'+
'#lf-pp .vb .vl{display:block;flex:0 0 14px;width:14px;height:32px;background:url("'+svg('#B7BEC5')+'") center bottom/auto 24px no-repeat;transition:background-image .3s}'+
'#lf-pp .vb button[data-s="1"] .vl{background-size:auto 17px}#lf-pp .vb button[data-s="3"] .vl{background-size:auto 31px}'+
'#lf-pp .vb button:hover .vl{background-image:url("'+svg('#141210')+'")}#lf-pp .vb button.on .vl{background-image:url("'+svg('#e6cf98')+'")}'+
'#lf-pp .vb .vt{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;min-width:0;line-height:1.2}'+
'#lf-pp .vb .vt b{font-weight:600;font-size:14px;white-space:nowrap}#lf-pp .vb .vt em{font-style:normal;font-size:11px;opacity:.7;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}'+
'@media(max-width:560px){#lf-pp .vb{grid-template-columns:repeat(3,1fr);gap:8px}#lf-pp .vb button{gap:7px;padding:8px 8px!important;min-height:56px!important}#lf-pp .vb .vl{flex-basis:12px;width:12px;height:28px}#lf-pp .vb .vt b{font-size:13px}#lf-pp .vb .vt em{font-size:9.5px}}');
})})()}catch(e){console.warn("[LF] 67-product-vb3",e)}
/* ---- 68-product-vb-pill ---- */
try{(function(){LF.add('product-vb-pill',function(){LF.css('lf-vbpill-css','#lf-pp .vb button{border-radius:40px!important;min-height:58px!important;padding:8px 18px!important}@media(max-width:560px){#lf-pp .vb button{border-radius:22px!important}}')})})()}catch(e){console.warn("[LF] 68-product-vb-pill",e)}
/* ---- 69-ship-list ---- */
try{(function(){LF.add('ship-list',function(){LF.css('lf-shiplist-css','#lf-pp .lfres li{display:block!important;padding:12px 16px!important}#lf-pp .lfres li>*{width:100%}#lf-pp .lfres label{display:flex!important;align-items:center;justify-content:space-between;gap:12px;margin:0!important;padding:0!important;width:100%;cursor:default}#lf-pp .lfres label>*{text-align:left}#lf-pp .lfres .shipping-option-price,#lf-pp .lfres [class*=price]{margin-left:auto;text-align:right;white-space:nowrap;font-weight:600;color:#141210}#lf-pp .lfres a{color:#8a837a!important;font-size:12px}')})})()}catch(e){console.warn("[LF] 69-ship-list",e)}
/* ---- 70-vb-fill ---- */
try{(function(){LF.add('vb-fill',function(){LF.css('lf-vbfill-css','#lf-pp .vb .vl{background-position:center center!important}#lf-pp .vb button[data-s="1"] .vl{background-size:auto 19px!important}#lf-pp .vb .vt b:only-child{font-size:15px}')})})()}catch(e){console.warn("[LF] 70-vb-fill",e)}
/* ---- 02-esc ---- */
try{(function(){LF.add('esc',function(){if(window.__lfEsc)return;window.__lfEsc=1;
document.addEventListener('keydown',function(e){if(e.key!=='Escape'&&e.key!=='Esc')return;
 var done=false;var cl=function(sel){var el=document.querySelector(sel);if(el){el.click();done=true}};
 ['#lf-msr.on .cl','#lf-mdw.on .x','#lf-cfd.on .x','#lf-dw.on .x'].forEach(function(s){if(!done)cl(s)});
 var sb=document.querySelector('#lf-head .lf-sbox.on');if(sb){var x=sb.querySelector('.lf-sx');if(x)x.click();done=true}
 LF.$$('.js-modal.modal-show, .js-modal.show, .modal.modal-show, .js-fullscreen-modal.modal-show, .js-modal[style*="display: block"]').forEach(function(m){var c=m.querySelector('.js-modal-close');if(c){c.click();done=true}});
 if(!done){var ov=document.querySelector('.js-modal-overlay[style*="block"], .modal-overlay.modal-show');if(ov)ov.click()}
 var fs=LF.$$('.lf-x-open');fs.forEach(function(f){f.classList.remove('lf-x-open')});
});})})()}catch(e){console.warn("[LF] 02-esc",e)}
/* ---- 70-category ---- */
try{(function(){LF.add('category',function(){
var t=LF.tpl();if((t!=='category'&&t!=='search')||LF.$('#lf-ch'))return;var HF=LF.HF,I=LF.ico;
var ph=LF.$('section.page-header');var h1=ph&&ph.querySelector('h1');var bc=ph&&ph.querySelector('.breadcrumbs');
var title=h1?LF.cap(h1.textContent.trim()):'';
if(t==='search'){var q=new URLSearchParams(location.search).get('q')||'';title=q?'Resultados para “'+LF.esc(q)+'”':'Busca'}
var path=LF.path(location.href);var chips=[],parent=null;
LF.menu().forEach(function(m){if(parent)return;var ok=LF.path(m.h)===path||m.subs.some(function(s){return LF.path(s.h)===path});if(ok&&m.subs.length){parent=m;chips=m.subs}});
var crumbs=bc?LF.$$(':scope > *',bc).filter(function(e){return !e.classList.contains('separator')}).map(function(e){return e.tagName==='A'?'<a href="'+e.getAttribute('href')+'">'+LF.esc(LF.cap(e.textContent.trim()))+'</a>':'<span>'+LF.esc(LF.cap(e.textContent.trim()))+'</span>'}).join('<i></i>'):'<a href="/">Início</a><i></i><span>Busca</span>';
var hero=document.createElement('section');hero.id='lf-ch';
hero.innerHTML='<div class="ci"><nav class="cb">'+crumbs+'</nav><h1>'+title+'</h1><i class="co"><em></em></i>'+(chips.length?'<div class="cc"><a href="'+parent.h+'"'+(LF.path(parent.h)===path?' class="on"':'')+'>Todos</a>'+chips.map(function(c){return '<a href="'+c.h+'"'+(LF.path(c.h)===path?' class="on"':'')+'>'+LF.esc(c.t)+'</a>'}).join('')+'</div>':'')+'</div>';
var top=ph?ph.closest('body > *')||ph:LF.$('section.category-body');top.parentNode.insertBefore(hero,top);if(ph)(ph.closest('body > div.container')||ph).classList.add('lf-hid-ph');
var body=LF.$('section.category-body');if(body){var row=body.querySelector('.row');var fs=row&&row.querySelector('.filters-sidebar');var main=row&&row.querySelector(':scope > .col')||row;
 var sel=LF.$('select.js-sort-by-private')||LF.$('select.js-sort-by');var fc=fs&&fs.querySelector('.filters-properties-container');var hasF=!!(fc&&fc.querySelector('input'));
 var tb=document.createElement('div');tb.id='lf-ctb';tb.innerHTML=(hasF?'<button type="button" class="fb"><svg viewBox="0 0 24 24"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg><span>Filtrar</span><b class="fc" hidden></b></button>':'<span></span>')+'<span class="ct"></span>'+(sel?'<label class="so"><span>Ordenar</span><span class="sv"></span><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5"/></svg></label>':'<span></span>');
 if(main)main.insertBefore(tb,main.firstChild);
 if(sel){var so=tb.querySelector('.so');so.appendChild(sel);var sv=tb.querySelector('.sv');var upd=function(){sv.textContent=(sel.options[sel.selectedIndex]||{}).text||''};upd();sel.addEventListener('change',upd)}
 if(hasF){var fd=document.createElement('div');fd.id='lf-cfd';fd.innerHTML='<div class="bk"></div><aside><div class="hd"><span>Filtrar</span><button class="x" type="button" aria-label="Fechar">'+I.x+'</button></div><div class="bd"></div></aside>';document.body.appendChild(fd);fd.querySelector('.bd').appendChild(fc);
  var op=function(){fd.classList.add('on');document.documentElement.style.overflow='hidden'},cl=function(){fd.classList.remove('on');document.documentElement.style.overflow=''};tb.querySelector('.fb').onclick=op;fd.querySelector('.bk').onclick=cl;fd.querySelector('.x').onclick=cl;
  var cnt=function(){var n=fd.querySelectorAll('input:checked').length;var b=tb.querySelector('.fc');b.textContent=n||'';b.hidden=!n};cnt();fd.addEventListener('change',cnt)}
 if(fs)fs.classList.add('lf-fs-off');
 var pg=body.querySelector('.js-product-table');var nav=pg&&pg.nextElementSibling;if(nav&&/de\s*\d/.test(nav.textContent)){nav.classList.add('lf-pag');var tc=nav.querySelector('.text-center');var sp=tc&&tc.querySelectorAll('span');if(sp&&sp.length>=3)tc.innerHTML='<small>Página</small><b>'+sp[0].textContent+'</b><i>de</i><span>'+sp[sp.length-1].textContent+'</span>'}
}
LF.css('lf-cat-css','body>div.container.lf-hid-ph,section.page-header.lf-hid-ph{display:none!important}section.js-category-controls,section.js-category-controls-prev{display:none!important}'+
'#lf-ch{background:radial-gradient(60% 120% at 50% 0%,rgba(201,169,97,.10),transparent 70%),#faf7f2;border-bottom:1px solid #efe8de;padding:44px 24px 38px;text-align:center;font-family:'+LF.BF+'}#lf-ch .ci{max-width:1120px;margin:0 auto}'+
'#lf-ch .cb{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:10px;font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:#9a9288;margin-bottom:18px}#lf-ch .cb a{color:#9a9288!important;text-decoration:none!important}#lf-ch .cb a:hover{color:#141210!important}#lf-ch .cb span{color:#a8843f}#lf-ch .cb i{width:4px;height:4px;background:#c9a961;transform:rotate(45deg);opacity:.7}'+
'#lf-ch h1{font-family:'+HF+';font-weight:400;font-size:44px;line-height:1.1;color:#141210;margin:0 0 14px;text-transform:none}'+
'#lf-ch .co{display:flex;justify-content:center;align-items:center;gap:10px}#lf-ch .co:before,#lf-ch .co:after{content:"";width:46px;height:1px;background:linear-gradient(90deg,transparent,#c9a961)}#lf-ch .co:after{transform:scaleX(-1)}#lf-ch .co em{width:6px;height:6px;background:#c9a961;transform:rotate(45deg)}'+
'#lf-ch .cc{display:flex;justify-content:center;flex-wrap:wrap;gap:10px;margin-top:26px}#lf-ch .cc a{height:40px;display:inline-flex;align-items:center;padding:0 22px;border-radius:30px;border:1px solid rgba(20,18,16,.14);background:rgba(255,255,255,.7);font-size:12px;letter-spacing:.06em;color:#3d3730!important;text-decoration:none!important;transition:all .35s}#lf-ch .cc a:hover{border-color:#c9a961;color:#141210!important}#lf-ch .cc a.on{background:#141210;border-color:#141210;color:#e6cf98!important}'+
'section.category-body{background:#f4f2ef;padding-bottom:50px}section.category-body>.container{max-width:1168px;margin-top:0!important;padding-top:26px}section.category-body .filters-sidebar.lf-fs-off{display:none!important}section.category-body .row>.col{padding-top:0!important}'+
'#lf-ctb{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:16px;padding:6px 8px 26px;font-family:'+LF.BF+'}'+
'#lf-ctb .fb{justify-self:start;display:inline-flex;align-items:center;gap:10px;height:42px;padding:0 20px;border-radius:30px;border:1px solid rgba(20,18,16,.14);background:#fff;font:inherit;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#141210;cursor:pointer}#lf-ctb .fb:hover{border-color:#c9a961}'+
'#lf-ctb svg{width:17px;height:17px;fill:none;stroke:#141210;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round}#lf-ctb .fc{min-width:20px;height:20px;border-radius:10px;background:#141210;color:#e6cf98;font-size:10px;letter-spacing:0;display:inline-flex;align-items:center;justify-content:center;padding:0 6px}#lf-ctb .fc[hidden]{display:none}'+
'#lf-ctb .so{justify-self:end;position:relative;display:inline-flex;align-items:center;gap:8px;height:42px;padding:0 16px 0 20px;border-radius:30px;border:1px solid rgba(20,18,16,.14);background:#fff;cursor:pointer;margin:0}#lf-ctb .so:hover{border-color:#c9a961}#lf-ctb .so>span:first-child{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#8a837a}#lf-ctb .sv{font-size:13px;color:#141210}'+
'#lf-ctb .so select{position:absolute!important;inset:0;width:100%!important;height:100%!important;opacity:0;cursor:pointer;margin:0!important}'+
'#lf-cfd{position:fixed;inset:0;z-index:20000;pointer-events:none;font-family:'+LF.BF+'}#lf-cfd .bk{position:absolute;inset:0;background:rgba(15,14,13,.4);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);opacity:0;transition:opacity .4s}'+
'#lf-cfd aside{position:absolute;top:0;left:0;bottom:0;width:min(88vw,380px);background:#faf7f2;transform:translateX(-102%);transition:transform .5s cubic-bezier(.2,.8,.2,1);display:flex;flex-direction:column;box-shadow:20px 0 60px -20px rgba(0,0,0,.35)}#lf-cfd.on{pointer-events:auto}#lf-cfd.on .bk{opacity:1}#lf-cfd.on aside{transform:none}'+
'#lf-cfd .hd{display:flex;align-items:center;justify-content:space-between;padding:22px 22px 18px 26px;border-bottom:1px solid #ece5da;font-family:'+HF+';font-size:24px;color:#141210}#lf-cfd .x{width:40px;height:40px;border-radius:50%;border:1px solid rgba(20,18,16,.12);background:#fff;display:flex;align-items:center;justify-content:center;padding:0;cursor:pointer}#lf-cfd .x svg{width:16px;height:16px;fill:none;stroke:#141210;stroke-width:1.4;stroke-linecap:round}'+
'#lf-cfd .bd{padding:20px 26px 30px;overflow-y:auto}#lf-cfd .bd h4,#lf-cfd .bd .h6,#lf-cfd .bd .font-weight-bold{font-family:'+HF+'!important;font-weight:400!important;font-size:18px!important;margin:0 0 14px!important;color:#141210}'+
'#lf-cfd .checkbox-container{display:flex!important;align-items:center;padding:7px 0!important;cursor:pointer}#lf-cfd .checkbox-icon{width:18px!important;height:18px!important;border:1px solid rgba(20,18,16,.25)!important;border-radius:5px!important;background:#fff!important;position:relative}#lf-cfd .checkbox-icon:before,#lf-cfd .checkbox-icon:after{display:none!important}'+
'#lf-cfd input:checked+.checkbox .checkbox-icon{background:#141210!important;border-color:#141210!important}#lf-cfd input:checked+.checkbox .checkbox-icon:after{content:""!important;display:block!important;position:absolute;left:6px;top:2px;width:5px;height:9px;border:solid #e6cf98;border-width:0 1.5px 1.5px 0;transform:rotate(45deg)}#lf-cfd .checkbox-text{font-size:13.5px;color:#3d3730}#lf-cfd .bd a{color:#a8843f!important;font-size:11px;letter-spacing:.16em;text-transform:uppercase;text-decoration:none!important}'+
'.lf-pag{margin-top:46px!important}.lf-pag>.col-auto{padding:0 6px!important}.lf-pag .swiper-button-prev,.lf-pag .swiper-button-next{position:static!important;margin:0!important;width:46px!important;height:46px!important;border-radius:50%;border:1px solid rgba(20,18,16,.14);background:#fff;display:flex!important;align-items:center;justify-content:center;opacity:1!important}.lf-pag .swiper-button-prev:after,.lf-pag .swiper-button-next:after{display:none}.lf-pag svg{width:14px!important;height:14px!important;fill:#141210}.lf-pag a:not(.disabled):hover{background:#141210;border-color:#141210}.lf-pag a:not(.disabled):hover svg{fill:#e6cf98}.lf-pag a.disabled{opacity:.35!important;pointer-events:none}'+
'.lf-pag .text-center{display:flex;gap:7px;height:46px;padding:0 24px;border-radius:30px;background:#fff;border:1px solid rgba(20,18,16,.08);align-items:center}.lf-pag .text-center small{font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#9a9288}.lf-pag .text-center b{font-family:'+HF+';font-weight:400;font-size:19px;color:#141210}.lf-pag .text-center i{font-style:normal;font-size:12px;color:#9a9288}.lf-pag .text-center span{font-family:'+HF+';font-size:15px;color:#7a736a}'+
'@media(max-width:767px){#lf-ch{padding:28px 16px 24px}#lf-ch h1{font-size:30px}#lf-ch .cb{font-size:9.5px;margin-bottom:12px}#lf-ch .cc{flex-wrap:nowrap;overflow-x:auto;justify-content:flex-start;margin:20px -16px 0;padding:0 16px;scrollbar-width:none}#lf-ch .cc::-webkit-scrollbar{display:none}#lf-ch .cc a{flex:0 0 auto;height:36px;padding:0 16px}#lf-ctb{grid-template-columns:auto 1fr;padding:4px 0 18px}#lf-ctb .ct{display:none}#lf-ctb .so>span:first-child{display:none}#lf-ctb .so{justify-self:end}}');
})})()}catch(e){console.warn("[LF] 70-category",e)}
/* ---- 80-quickshop ---- */
try{(function(){
LF.vialSvg=function(c){return 'data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 30"><rect x="3.4" y="0" width="5.2" height="4.4" rx=".6" fill="'+c+'"/><rect x="4.6" y="4.4" width="2.8" height="2.1" fill="'+c+'"/><rect x="1.9" y="6.5" width="8.2" height="21.6" rx="1.3" fill="none" stroke="'+c+'" stroke-width="1.2"/></svg>')};
LF.decoVariants=function(root){LF.$$('.js-product-variants-group',root).forEach(function(g){var bs=LF.$$('a.btn-variant',g);if(!bs.length)return;var ml=function(t){var m=String(t).match(/(\d+(?:[.,]\d+)?)\s*ml/i);return m?parseFloat(m[1].replace(',','.')):0};
 var labs=bs.map(function(b){var c=b.querySelector('.btn-variant-content')||b;return c.dataset.lfv||c.textContent.replace(/\s+/g,' ').trim()});var vals=labs.map(ml);var u=vals.filter(function(x,i,a){return x&&a.indexOf(x)===i}).sort(function(a,b){return a-b});
 bs.forEach(function(b,k){var c=b.querySelector('.btn-variant-content')||b;if(c.dataset.lfv===labs[k]&&c.querySelector('.vt'))return;var full=labs[k];var m=full.match(/^(.*?\d+(?:[.,]\d+)?\s*ml)\s*[\(\-–]?\s*([^\)]*)\)?\s*$/i);var t1=full,t2='';if(m&&m[2]&&m[2].trim()){t1=m[1].trim();t2=m[2].trim()}var r=u.indexOf(vals[k]);var s=!vals[k]?0:(u.length<=1?2:Math.round(r/(u.length-1)*2)+1);b.dataset.s=s;b.title=full;
  c.innerHTML=(s?'<i class="vl"></i>':'')+'<span class="vt"><b>'+LF.esc(t1)+'</b>'+(t2?'<em>'+LF.esc(t2)+'</em>':'')+'</span>';c.dataset.lfv=full})})};
LF.add('quickshop',function(){var m=LF.$('#quickshop-modal');if(!m||m.dataset.lf)return;m.dataset.lf=1;
 var deco=function(){LF.$$('span',m).forEach(function(s){var t=s.textContent.trim();if(/^\(0\)$/.test(t)){var w=s.closest('.mi-w-full')||s.parentElement;w.style.display='none'}if(t.toLowerCase()==='com'&&s.closest('.js-payment-discount-price-product-container'))s.style.display='none'});LF.decoVariants(m)};
 var tm;new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(deco,30)}).observe(m,{childList:true,subtree:true,characterData:true});deco();
 var V=LF.vialSvg;
 LF.css('lf-qs-modal-css','#quickshop-modal{font-family:'+LF.BF+'}'+
 '@media(min-width:768px){#quickshop-modal{border-radius:24px!important;overflow:hidden;height:auto!important;max-height:90vh;bottom:auto!important}#quickshop-modal .modal-body{padding:18px!important}}'+
 '@media(max-width:767px){#quickshop-modal{border-radius:22px 22px 0 0!important;overflow:hidden}#quickshop-modal .modal-body{padding:14px 16px 20px!important}}'+
 '#quickshop-modal .quickshop-image-container{background:#fff;border-radius:18px;border:1px solid rgba(20,18,16,.06)}'+
 '#quickshop-modal .js-item-name{font-family:'+LF.HF+'!important;font-weight:400!important;font-size:30px!important;line-height:1.15!important;color:#141210!important;text-transform:none!important}'+
 '#quickshop-modal .js-item-name .lf-tag{display:block;font-family:'+LF.BF+';font-size:10.5px;letter-spacing:.3em;text-transform:uppercase;color:#a8843f;margin-bottom:8px}'+
 '#quickshop-modal .js-price-display{font-size:14px!important;color:#7a736a!important;font-weight:400!important}#quickshop-modal .js-price-display:after{content:" no cartão";font-size:12.5px;color:#9a9288}'+
 '#quickshop-modal .js-payment-discount-price-product-container{display:flex!important;align-items:center;gap:10px;margin-top:4px}#quickshop-modal .js-payment-discount-price-product{font-size:26px!important;font-weight:700!important;color:#141210!important}'+
 '#quickshop-modal .js-payment-discount-name-product{height:22px;display:inline-flex;align-items:center;padding:0 10px;border-radius:12px;background:linear-gradient(120deg,#b8924a,#e6cf98 50%,#b8924a);color:#141210!important;font-size:10px!important;letter-spacing:.14em;text-transform:uppercase;font-weight:600}'+
 '#quickshop-modal .form-label{font-size:11px!important;letter-spacing:.2em;text-transform:uppercase;color:#141210}#quickshop-modal .js-insta-variation-label{font-weight:400;letter-spacing:0;text-transform:none;color:#7a736a}'+
 '#quickshop-modal .js-product-variants-group{display:flex;flex-wrap:wrap;gap:8px}#quickshop-modal .js-product-variants-group .form-label{flex-basis:100%}'+
 '#quickshop-modal a.btn-variant{min-height:54px;display:inline-flex!important;align-items:center;padding:6px 16px!important;border-radius:40px!important;border:1px solid rgba(20,18,16,.14)!important;background:#fff!important;color:#141210!important;margin:0!important;transition:all .3s}#quickshop-modal a.btn-variant:hover{border-color:#c9a961!important}'+
 '#quickshop-modal a.btn-variant.selected{background:#141210!important;border-color:#141210!important;color:#e6cf98!important}'+
 '#quickshop-modal .btn-variant-content{display:flex!important;align-items:center;gap:9px;padding:0!important}'+
 '#quickshop-modal .vl{display:block;flex:0 0 12px;width:12px;height:28px;background:url("'+V('#B7BEC5')+'") center/auto 21px no-repeat}#quickshop-modal [data-s="1"] .vl{background-size:auto 16px}#quickshop-modal [data-s="3"] .vl{background-size:auto 27px}'+
 '#quickshop-modal a.btn-variant:hover .vl{background-image:url("'+V('#141210')+'")}#quickshop-modal a.btn-variant.selected .vl{background-image:url("'+V('#e6cf98')+'")}'+
 '#quickshop-modal .vt{display:flex;flex-direction:column;align-items:flex-start;line-height:1.2;text-align:left}#quickshop-modal .vt b{font-size:13.5px;font-weight:600}#quickshop-modal .vt em{font-style:normal;font-size:10.5px;opacity:.7;margin-top:2px}'+
 '#quickshop-modal .form-quantity{height:52px;border-radius:30px!important;border:1px solid rgba(20,18,16,.14)!important;overflow:hidden;align-items:center;background:#fff}#quickshop-modal .form-quantity input{border:0!important;background:none!important;text-align:center;box-shadow:none!important}'+
 '@media(max-width:767px){#quickshop-modal .js-item-name{font-size:22px!important}#quickshop-modal a.btn-variant{min-height:48px;padding:6px 12px!important}#quickshop-modal .js-payment-discount-price-product{font-size:22px!important}}');
});})()}catch(e){console.warn("[LF] 80-quickshop",e)}
/* ---- 15-clean2 ---- */
try{(function(){if(LF.cleanName&&!LF.cleanName.__w){var o=LF.cleanName;LF.cleanName=function(n){return o(String(n||'').replace(/^\s*decant(?=[A-Za-zÀ-ú0-9])/i,'Decant '))};LF.cleanName.__w=1}})()}catch(e){console.warn("[LF] 15-clean2",e)}
/* ---- 81-quickshop-fix ---- */
try{(function(){LF.add('quickshop-fix',function(){var m=LF.$('#quickshop-modal');if(!m||m.dataset.lf2)return;m.dataset.lf2=1;
var fix=function(){LF.$$('.js-item-name',m).forEach(function(n){if(n.querySelector('.lf-qn'))return;var r=LF.cleanName(n.textContent);n.innerHTML=(r.tags[0]?'<small class="lf-tag">'+r.tags[0]+'</small>':'')+'<span class="lf-qn">'+LF.esc(r.name)+'</span>'});
 LF.$$('input.js-addtocart',m).forEach(function(b){if(/^comprar$/i.test(b.value.trim()))b.value='Adicionar à sacola'})};
var tm;new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(fix,10)}).observe(m,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['value','class']});fix();
LF.css('lf-qsfix-css','#quickshop-modal .modal-close{width:42px!important;height:42px!important;padding:0!important;margin:0!important;border-radius:50%!important;border:1px solid rgba(20,18,16,.12)!important;display:flex!important;align-items:center!important;justify-content:center!important;line-height:0!important;background:#fff!important}#quickshop-modal .modal-close svg{width:15px!important;height:15px!important;margin:0!important;position:static!important;fill:#141210}#quickshop-modal .modal-close>*{margin:0!important}'+
'#quickshop-modal .js-addtocart,#quickshop-modal .js-addtocart-placeholder,#quickshop-modal .btn-add-to-cart{height:52px!important;border-radius:30px!important;background:#141210!important;border:0!important;color:#f5f0e7!important;font-family:'+LF.BF+'!important;font-size:11.5px!important;letter-spacing:.2em!important;text-transform:uppercase!important;font-weight:500!important;width:100%;box-shadow:none!important}'+
'#quickshop-modal .js-addtocart.d-none,#quickshop-modal .js-addtocart-placeholder.d-none,#quickshop-modal .js-addtocart-success.d-none.d-none{display:none!important}'+
'#quickshop-modal .js-addtocart-success{background:linear-gradient(120deg,#b8924a,#e6cf98 50%,#b8924a)!important;color:#141210!important}#quickshop-modal .js-addtocart-placeholder svg,#quickshop-modal .js-addtocart-success svg{fill:currentColor;width:16px;height:16px;margin-left:8px}');
})})()}catch(e){console.warn("[LF] 81-quickshop-fix",e)}
/* ---- 82-quickshop-adding ---- */
try{(function(){LF.add('qs-adding',function(){LF.css('lf-qsadd-css','#quickshop-modal .js-addtocart-placeholder .js-addtocart-text{display:none!important}#quickshop-modal .js-addtocart-placeholder{position:relative}#quickshop-modal .js-addtocart-placeholder .transition-container{color:inherit!important}')})})()}catch(e){console.warn("[LF] 82-quickshop-adding",e)}
/* ---- 85-cart ---- */
try{(function(){LF.add('cart',function(){var c=LF.$('#modal-cart');if(!c||c.dataset.lf)return;c.dataset.lf=1;
var deco=function(){LF.$$('.js-cart-item',c).forEach(function(it){var a=LF.$$('a',it).filter(function(x){return x.textContent.trim().length>3})[0];if(a&&!a.dataset.lf){var sm=a.querySelector('small, span');var var_=sm?sm.outerHTML:'';var txt=(sm?a.textContent.replace(sm.textContent,''):a.textContent).trim();var r=LF.cleanName(txt);a.innerHTML=(r.tags[0]?'<small class="lf-tag">'+r.tags[0]+'</small>':'')+'<span class="lf-cn">'+LF.esc(r.name)+'</span>'+var_;a.dataset.lf=1}});
 var h=c.querySelector('.modal-header');if(h&&!h.querySelector('.lf-ct')){var t=LF.$$('*',h).filter(function(x){return !x.children.length&&/carrinho/i.test(x.textContent)})[0];if(t){t.classList.add('lf-ct');t.textContent='Sua sacola'}}};
var tm;new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(deco,30)}).observe(c,{childList:true,subtree:true});deco();
LF.css('lf-cart-css','#modal-cart{background:#faf7f2!important;font-family:'+LF.BF+'!important;max-width:440px;box-shadow:-20px 0 60px -20px rgba(0,0,0,.35)}'+
'#modal-cart .modal-header{border-bottom:1px solid #ece5da!important;padding:22px 24px!important;background:#faf7f2}'+
'#modal-cart .lf-ct{font-family:'+LF.HF+'!important;font-size:26px!important;font-weight:400!important;color:#141210}'+
'#modal-cart .modal-header svg{width:16px;height:16px}#modal-cart .modal-header .modal-close,#modal-cart .modal-header [class*=close] svg{transition:transform .4s}'+
'#modal-cart .modal-body{padding:18px 24px!important}'+
'#modal-cart .js-cart-item{background:#fff;border-radius:16px;padding:12px!important;margin-bottom:12px!important;border:1px solid rgba(20,18,16,.05);box-shadow:0 12px 26px -22px rgba(40,30,15,.4)}'+
'#modal-cart .cart-item-image{border-radius:10px;background:#fff}'+
'#modal-cart .js-cart-item a{color:#141210!important;text-decoration:none!important;font-size:13.5px!important;line-height:1.35}#modal-cart .lf-tag{display:block;font-size:9px;letter-spacing:.28em;text-transform:uppercase;color:#a8843f;margin-bottom:3px}#modal-cart .lf-cn{display:block;font-weight:500}#modal-cart .js-cart-item a small{display:block;font-size:11.5px;color:#7a736a;margin-top:2px}'+
'#modal-cart .form-quantity,#modal-cart .cart-item-quantity .form-quantity{border-radius:30px!important;border:1px solid rgba(20,18,16,.14)!important;overflow:hidden;background:#fff;height:36px}#modal-cart .form-quantity input{border:0!important;background:none!important;box-shadow:none!important}'+
'#modal-cart .cart-item-subtotal{font-weight:700;color:#141210}#modal-cart .cart-item-subtotal .text-accent,#modal-cart .cart-item-subtotal [class*=discount]{color:#a8843f!important}'+
'#modal-cart .js-cart-item .btn-link,#modal-cart .js-cart-item [class*=delete]{font-size:11px!important;color:#9a9288!important;letter-spacing:.06em}'+
'#modal-cart .cart-subtotal,#modal-cart .cart-total{color:#141210}#modal-cart .cart-total{font-family:'+LF.HF+'!important;font-weight:400!important;border-top:1px solid #ece5da;padding-top:14px}'+
'#modal-cart .js-cart-total-promotional-price,#modal-cart [class*=payment-discount]{color:#a8843f!important}'+
'#modal-cart input[name=go_to_checkout],#modal-cart .js-go-checkout-btn,#modal-cart .btn-primary.btn-block{height:54px!important;border-radius:30px!important;background:#141210!important;border:0!important;color:#f5f0e7!important;font-size:11.5px!important;letter-spacing:.2em!important;text-transform:uppercase!important;font-weight:500!important}'+
'#modal-cart input[name=go_to_checkout]:hover{color:#e6cf98!important}'+
'#modal-cart .btn-link.no-underline{color:#7a736a!important;font-size:12.5px!important}'+
'#modal-cart .js-shipping-calculator-container,#modal-cart [class*=toggle-cart-shipping]{border-top:1px solid #ece5da;border-bottom:1px solid #ece5da}#modal-cart .form-control{border-radius:30px!important;border-color:rgba(20,18,16,.14)!important}');
})})()}catch(e){console.warn("[LF] 85-cart",e)}
/* ---- 86-cart-var ---- */
try{(function(){LF.add('cart-var',function(){var c=LF.$('#modal-cart');if(!c||c.dataset.lfv)return;c.dataset.lfv=1;var f=function(){LF.$$('.js-cart-item .cart-item-name span.font-small, .js-cart-item a small',c).forEach(function(s){if(s.dataset.lf)return;s.dataset.lf=1;var t=s.textContent.trim().replace(/^\((.*)\)$/,'$1').replace(/\s*\((.*)\)\s*$/,' · $1');s.textContent=t;s.style.display='block'})};f();new MutationObserver(function(){setTimeout(f,40)}).observe(c,{childList:true,subtree:true})})})()}catch(e){console.warn("[LF] 86-cart-var",e)}
/* ---- 83-qs-mobile ---- */
try{(function(){LF.add('qs-mobile',function(){LF.css('lf-qsmob-css','@media(max-width:767px){#quickshop-modal .js-quickshop-image-padding{padding:0!important;height:28vh;width:100%;display:flex;align-items:center;justify-content:center}#quickshop-modal .js-quickshop-img{position:static!important;transform:none!important;left:auto!important;top:auto!important;width:100%!important;height:100%!important;object-fit:contain!important;max-height:none!important;padding:12px}#quickshop-modal .js-item-variants>div:first-child{display:none!important}#quickshop-modal .modal-close{flex:0 0 42px}#quickshop-modal .js-item-name{font-size:21px!important}}')})})()}catch(e){console.warn("[LF] 83-qs-mobile",e)}
/* ---- 84-qs-x ---- */
try{(function(){LF.add('qs-x',function(){LF.css('lf-qsx-css','@media(max-width:767px){#quickshop-modal .modal-close{margin:10px 14px 0 0!important}}')})})()}catch(e){console.warn("[LF] 84-qs-x",e)}
/* ---- 87-cart-head ---- */
try{(function(){LF.add('cart-head',function(){LF.css('lf-carthead-css','#modal-cart .modal-header{height:auto!important;min-height:0!important;padding:18px 20px 16px 24px!important;display:block}#modal-cart .modal-header .row{align-items:center!important;flex-wrap:nowrap}#modal-cart .modal-header .lf-ct{padding:0!important;line-height:1.2!important}#modal-cart .modal-header .modal-close{width:40px;height:40px;border-radius:50%;border:1px solid rgba(20,18,16,.12);display:flex!important;align-items:center;justify-content:center;padding:0!important;background:#fff}#modal-cart .modal-header .modal-close svg{width:14px;height:14px;margin:0}')})})()}catch(e){console.warn("[LF] 87-cart-head",e)}
/* ---- 88-cart-totals ---- */
try{(function(){LF.add('cart-totals',function(){var N=':not([style*="none"]):not(.d-none):not(.hidden)';LF.css('lf-carttot-css','#modal-cart .cart-subtotals-container .row'+N+',#modal-cart .cart-subtotals-container [class*=row]'+N+'{margin-left:0!important;margin-right:0!important;display:flex!important;align-items:center;justify-content:space-between;padding:3px 0!important}#modal-cart .cart-subtotals-container .col,#modal-cart .cart-subtotals-container [class*=col]{padding-left:0!important;padding-right:0!important;margin:0!important}#modal-cart .cart-subtotals-container{padding:10px 0 8px!important;border-bottom:1px solid #ece5da}#modal-cart .cart-subtotals-container *{border-top:0!important;border-bottom:0!important}#modal-cart .cart-total{display:flex!important;align-items:center;justify-content:space-between;margin:6px 0 0!important;padding-top:10px!important;border-top:0!important}#modal-cart .cart-total>*{padding-left:0!important;padding-right:0!important}')})})()}catch(e){console.warn("[LF] 88-cart-totals",e)}
/* ---- 89-cart-divider ---- */
try{(function(){LF.add('cart-divider',function(){LF.css('lf-cartdiv-css','#modal-cart .cart-subtotals-container{border-bottom:0!important;padding-bottom:2px!important;margin-bottom:0!important}#modal-cart .cart-totals-divider{margin:12px 0!important;border-color:#ece5da!important}#modal-cart .cart-subtotals-container>*{margin-bottom:0!important}#modal-cart .cart-subtotals-container .js-coupon-discount-row{margin:0!important}#modal-cart .js-cart-total-container{margin-top:0!important;padding-top:0!important}')})})()}catch(e){console.warn("[LF] 89-cart-divider",e)}
/* ---- 90-pages ---- */
try{(function(){LF.add('pages',function(){
var t=LF.tpl();var ok=/^(page|contact|404)$/.test(t)||/^account/.test(t);if(!ok||LF.$('#lf-pg'))return;var HF=LF.HF,I=LF.ico;
/* REGRA: formularios com verificacao anti-robo (Turnstile/reCAPTCHA) NUNCA sao movidos no DOM; so estilizados no lugar */
var hc=LF.$('section.page-header');var h1=LF.$('h1');var title=h1?LF.cap(h1.textContent.trim()):'';
title={'404':'Página não encontrada','account-login':'Minha conta','account-register':'Criar conta','account-reset':'Recuperar senha'}[t]||title||'Minha conta';
var pg=document.createElement('div');pg.id='lf-pg';pg.className='lfz lfp-'+t;
pg.innerHTML='<section id="lf-ch"><div class="ci"><nav class="cb"><a href="/">Início</a><i></i><span>'+LF.esc(title)+'</span></nav><h1>'+LF.esc(title)+'</h1><i class="co"><em></em></i></div></section><section class="pb"><div class="pi"></div></section>';
var hcon=hc&&(hc.closest('body > div.container')||hc);
var nat=t==='contact'?LF.$('section.contact-page'):(/^account/.test(t)?LF.$('section.account-page'):null);
var anchor=nat||hcon||LF.$('footer');
if(hcon&&nat&&hcon.compareDocumentPosition(nat)&Node.DOCUMENT_POSITION_FOLLOWING)anchor=hcon;
anchor.parentNode.insertBefore(pg,anchor);if(hcon)hcon.classList.add('lf-hid2');
var pi=pg.querySelector('.pi');
var foot=function(){var L=[],s={};LF.$$('#lf-ft .lf3-col:not(.lf3-ct) a').forEach(function(a){var h=a.getAttribute('href')||'';if(!/^\/|lfimpoorts\.com/.test(h))return;var p=LF.path(a.href);if(!s[p]){s[p]=1;L.push({t:a.textContent.trim(),h:h,on:p===LF.path(location.href)})}});return L};
if(t==='page'){var uc=LF.$('section.user-content');var col=uc&&(uc.querySelector('.col-md-8')||uc);var links=foot();var wa=LF.waLink();
 pi.innerHTML='<div class="inst"><aside class="nv"><small>Institucional</small><ul>'+links.map(function(l){return '<li><a href="'+l.h+'"'+(l.on?' class="on"':'')+'>'+LF.esc(l.t)+'</a></li>'}).join('')+'</ul>'+(wa?'<a class="hp" href="'+wa+'" target="_blank" rel="noopener">'+I.wa+'<span><b>Precisa de ajuda?</b>Fale com a gente no WhatsApp</span></a>':'')+'</aside><article class="tx"><div class="txi"></div></article></div>';
 var txi=pi.querySelector('.txi');if(col)LF.$$(':scope > *',col).forEach(function(n){txi.appendChild(n)});if(uc)uc.classList.add('lf-hid2');
 var isQ=function(p){var s=p.querySelector('strong,b');return s&&s.textContent.trim()===p.textContent.trim()&&p.textContent.trim().length>3};
 if(LF.$$('p',txi).filter(isQ).length>=3){var items=[],cur=null;LF.$$(':scope > *',txi).forEach(function(n){if(n.tagName==='P'&&isQ(n)){cur={q:n.textContent.trim(),a:[]};items.push(cur)}else if(cur)cur.a.push(n)});var acc=document.createElement('div');acc.className='fq';items.forEach(function(it){var el=document.createElement('div');el.className='fi';el.innerHTML='<button type="button" aria-expanded="false"><span>'+LF.esc(it.q)+'</span><i></i></button><div class="fa"><div></div></div>';it.a.forEach(function(n){el.querySelector('.fa>div').appendChild(n)});var b=el.querySelector('button');b.onclick=function(){var o=!el.classList.contains('op');LF.$$('.fi.op',acc).forEach(function(x){x.classList.remove('op');x.querySelector('button').setAttribute('aria-expanded','false')});el.classList.toggle('op',o);b.setAttribute('aria-expanded',o)};acc.appendChild(el)});txi.innerHTML='';txi.appendChild(acc);pi.querySelector('.tx').classList.add('isfaq')}
 if(/quem-somos|sobre/.test(location.pathname)){var im=txi.querySelector('img');var src=im?LF.imgOf(im):(LF.cfg&&LF.cfg.qsImg);if(im){var pp=im.closest('p');(pp||im).remove()}if(src){var tx=pi.querySelector('.tx');tx.classList.add('qsw');tx.insertAdjacentHTML('afterbegin','<figure class="qph"><span class="o"></span><div class="a"><img src="'+src+'" alt="" referrerpolicy="no-referrer"></div></figure>')}}}
else if(t==='contact'&&nat){pg.querySelector('.pb').remove();nat.classList.add('lfz','lf-sec');
 var row=nat.querySelector('.row');var info=row&&row.querySelector('[class*="col-"]:not(:last-child)');var fcol=row&&LF.$$(':scope > [class*="col-"]',row).filter(function(c){return c.querySelector('form')})[0];
 var intro=info?((info.querySelector('p')||{}).textContent||'').trim():'';var cts=info?LF.$$('a',info):[];var soc=(LF.$('#lf-ft .lf3-soc')||{}).innerHTML||'';var wa2=LF.waLink('Olá! Vim pelo site 🤍');
 var ic=function(h){return /wa\.me|whats/.test(h)?I.wa:(/mailto/.test(h)?I.mail:(/tel:/.test(h)?I.wa:I.chev))};
 var cl=document.createElement('aside');cl.className='cl';cl.innerHTML='<small>Atendimento</small><h2>Vamos conversar?</h2>'+(intro?'<p>'+LF.esc(intro)+'</p>':'')+(wa2?'<a class="wa" href="'+wa2+'" target="_blank" rel="noopener">'+I.wa+'<span>Chamar no WhatsApp</span></a>':'')+(cts.length?'<ul>'+cts.map(function(a){var h=a.getAttribute('href')||'#';return '<li><a href="'+LF.esc(h)+'"'+(/^http/.test(h)?' target="_blank" rel="noopener"':'')+'>'+ic(h)+'<span>'+LF.esc(a.textContent.trim())+'</span></a></li>'}).join('')+'</ul>':'')+(soc?'<div class="so">'+soc+'</div>':'');
 if(row){row.classList.add('ctr');row.insertBefore(cl,row.firstChild);if(info)info.classList.add('lf-hid2')}
 if(fcol){fcol.classList.add('cf');var f=fcol.querySelector('form');var hd=document.createElement('div');hd.className='cfh';hd.innerHTML='<h3>Envie uma mensagem</h3><p class="cs">Respondemos o mais rápido possível.</p>';fcol.insertBefore(hd,fcol.firstChild);var hp=f&&f.querySelector('[name="winnie-pooh"]');if(hp)(hp.closest('.form-group,.winnie-pooh')||hp.parentElement).classList.add('lf-hp');if(f)f.addEventListener('submit',function(e){if(window.__lfNoSubmit)e.preventDefault()})}}
else if(/^account/.test(t)&&nat){pg.querySelector('.pb').remove();nat.classList.add('lfz','lf-sec');var wide=!/login|register|reset|newpass|activate/.test(t);nat.classList.add(wide?'acw':'acn');
 if(!wide){var col2=nat.querySelector('form')?nat.querySelector('form').closest('[class*="col-"]')||nat.querySelector('form').parentElement:null;if(col2){col2.classList.add('acc-card');
  var sub={'account-login':['Entrar','Acesse com seu e-mail e senha.'],'account-register':['Criar conta',''],'account-reset':['Esqueceu a senha?','']}[t]||[title,''];
  var txt='';LF.$$('h1,h2,h3,h4,h5,h6,p,div',col2).filter(function(e){return !e.closest('form')&&!e.querySelector('*:not(br):not(strong):not(b)')&&e.textContent.trim().length>2}).forEach(function(e){var s=e.textContent.trim();if(s.length>12&&!txt)txt=s;e.classList.add('lf-hid2')});
  var hd2=document.createElement('div');hd2.className='ach';hd2.innerHTML='<h2 class="lt">'+sub[0]+'</h2><p class="cs">'+LF.esc(sub[1]||txt||'')+'</p>';col2.insertBefore(hd2,col2.firstChild);
  var b=col2.querySelector('form [type=submit]');var lb={'account-login':'Entrar','account-register':'Criar minha conta','account-reset':'Enviar link'}[t];if(b&&lb){if(b.tagName==='INPUT')b.value=lb;else if(!b.querySelector('*'))b.textContent=lb}}}
 else nat.classList.add('acc-card-wrap');
 LF.$$('form',nat).forEach(function(f){f.addEventListener('submit',function(e){if(window.__lfNoSubmit)e.preventDefault()})})}
else if(t==='404'){var M=LF.menu().filter(function(m){return m.h&&m.h!=='/'});pi.innerHTML='<div class="nf"><b class="big">404</b><p>A página que você procura mudou de lugar ou não existe mais.<br>Que tal continuar explorando nossas fragrâncias?</p><div class="bt"><a class="b1" href="/">Voltar ao início</a><a class="b2" href="/produtos/">Ver todos os produtos</a></div>'+(M.length?'<div class="cc">'+M.map(function(m){return '<a href="'+m.h+'">'+LF.esc(m.t)+'</a>'}).join('')+'</div>':'')+'</div>';LF.$$('body > div.container, body > section').forEach(function(c){if(!c.closest('#lf-pg')&&c.querySelector('h1'))c.classList.add('lf-hid2')})}
var Z='.lfz';
LF.css('lf-pages-css','.lf-hid2{display:none!important}'+
'#lf-pg,.lf-sec{background:#f4f2ef;font-family:'+LF.BF+'}.lfz *{box-sizing:border-box}'+
'#lf-pg #lf-ch{background:radial-gradient(60% 120% at 50% 0%,rgba(201,169,97,.10),transparent 70%),#faf7f2;border-bottom:1px solid #efe8de;padding:44px 24px 38px;text-align:center}#lf-pg #lf-ch .ci{max-width:1120px;margin:0 auto}'+
'#lf-pg .cb{display:flex;justify-content:center;align-items:center;gap:10px;font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:#9a9288;margin-bottom:18px}#lf-pg .cb a{color:#9a9288!important;text-decoration:none!important}#lf-pg .cb span{color:#a8843f}#lf-pg .cb i{width:4px;height:4px;background:#c9a961;transform:rotate(45deg);opacity:.7}'+
'#lf-pg #lf-ch h1{font-family:'+HF+';font-weight:400;font-size:44px;line-height:1.1;color:#141210;margin:0 0 14px;text-transform:none}'+
'#lf-pg .co{display:flex;justify-content:center;align-items:center;gap:10px}#lf-pg .co:before,#lf-pg .co:after{content:"";width:46px;height:1px;background:linear-gradient(90deg,transparent,#c9a961)}#lf-pg .co:after{transform:scaleX(-1)}#lf-pg .co em{width:6px;height:6px;background:#c9a961;transform:rotate(45deg)}'+
'#lf-pg .pb{padding:50px 24px 80px}#lf-pg .pi{max-width:1080px;margin:0 auto}'+
'.lf-sec{padding:50px 24px 80px!important;margin:0!important}.lf-sec>.container{max-width:1080px;padding:0}'+
Z+' small{display:flex;align-items:center;gap:12px;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:#a8843f;margin-bottom:14px}'+Z+' small:before{content:"";width:22px;height:1px;background:#c9a961}'+
'#lf-pg .inst{display:grid;grid-template-columns:260px 1fr;gap:40px;align-items:start}#lf-pg .nv{position:sticky;top:100px}#lf-pg .nv ul{list-style:none;margin:0 0 26px;padding:0;border-left:1px solid rgba(20,18,16,.1)}'+
'#lf-pg .nv li a{display:block;padding:10px 0 10px 18px;margin-left:-1px;border-left:1px solid transparent;font-size:14px;color:#6f685f!important;text-decoration:none!important;transition:all .3s}#lf-pg .nv li a:hover{color:#141210!important;padding-left:22px}#lf-pg .nv li a.on{color:#141210!important;border-left-color:#b8924a;font-weight:500}'+
'#lf-pg .hp{display:flex;align-items:center;gap:12px;padding:16px 18px;border-radius:16px;background:#141210;color:#f5f0e7!important;text-decoration:none!important}#lf-pg .hp svg{width:30px;height:30px;padding:6px;border-radius:50%;border:1px solid rgba(217,189,124,.5);fill:none;stroke:#d9bd7c;stroke-width:1.4;flex:0 0 30px}#lf-pg .hp span{font-size:12px;color:#a59e93;line-height:1.4}#lf-pg .hp b{display:block;font-family:'+HF+';font-weight:400;font-size:16px;color:#f5f0e7}'+
'#lf-pg .tx{background:#fff;border-radius:22px;padding:48px 56px;box-shadow:0 24px 50px -36px rgba(40,30,15,.35);border:1px solid rgba(20,18,16,.04)}'+
'#lf-pg .tx p,#lf-pg .tx li{font-size:15px;line-height:1.85;color:#4a443d;margin:0 0 16px}#lf-pg .tx h2,#lf-pg .tx h3,#lf-pg .tx h4{font-family:'+HF+';font-weight:400;color:#141210;margin:28px 0 12px}#lf-pg .tx strong,#lf-pg .tx b{color:#141210;font-weight:600}#lf-pg .tx a{color:#a8843f!important}#lf-pg .tx img{max-height:34px;width:auto;margin:4px 6px 4px 0;vertical-align:middle;border-radius:4px}'+
'#lf-pg .tx.isfaq{padding-top:26px;padding-bottom:26px}'+
'#lf-pg .tx.qsw{display:grid;grid-template-columns:300px 1fr;gap:48px;align-items:start}#lf-pg .qph{position:sticky;top:110px;margin:0;padding:14px 0 0 14px}#lf-pg .qph .a{position:relative;z-index:1;height:380px;border-radius:160px 160px 14px 14px;overflow:hidden;box-shadow:0 30px 50px -30px rgba(40,30,15,.5)}#lf-pg .qph img{width:100%;height:100%;object-fit:cover;object-position:50% 36%;display:block;max-height:none!important;margin:0!important;border-radius:0!important}#lf-pg .qph .o{position:absolute;top:0;left:0;right:14px;bottom:-14px;border:1px solid rgba(184,146,74,.55);border-radius:170px 170px 18px 18px}'+
'#lf-pg .fi{border-bottom:1px solid rgba(20,18,16,.08)}#lf-pg .fi:last-child{border-bottom:0}#lf-pg .fi button{width:100%;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:22px 2px;background:none;border:0;cursor:pointer;text-align:left;font-family:'+HF+';font-size:18px;color:#141210;line-height:1.35}'+
'#lf-pg .fi button i{position:relative;flex:0 0 30px;width:30px;height:30px;border-radius:50%;border:1px solid rgba(201,169,97,.5);transition:all .35s}#lf-pg .fi button i:before,#lf-pg .fi button i:after{content:"";position:absolute;left:9px;right:9px;top:50%;height:1px;background:#a8843f;transition:transform .35s}#lf-pg .fi button i:after{transform:rotate(90deg)}#lf-pg .fi.op button i{background:#141210;border-color:#141210}#lf-pg .fi.op button i:before,#lf-pg .fi.op button i:after{background:#e6cf98}#lf-pg .fi.op button i:after{transform:rotate(0)}'+
'#lf-pg .fa{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s cubic-bezier(.2,.8,.2,1)}#lf-pg .fi.op .fa{grid-template-rows:1fr}#lf-pg .fa>div{overflow:hidden}#lf-pg .fi.op .fa>div{padding:0 50px 20px 2px}'+
/* contato */
'.lf-sec .ctr{display:grid!important;grid-template-columns:400px 1fr;margin:0!important;border-radius:24px;overflow:hidden;box-shadow:0 30px 60px -40px rgba(40,30,15,.45);background:#fff}.lf-sec .ctr>[class*="col-"]{max-width:none!important;flex:none!important;width:auto!important;margin:0!important}'+
'.lf-sec .cl{background:radial-gradient(80% 60% at 0% 0%,rgba(201,169,97,.18),transparent 60%),#0f0e0d;color:#f5f0e7;padding:48px 42px}.lf-sec .cl small{color:#d9bd7c}.lf-sec .cl h2{font-family:'+HF+';font-weight:400;font-size:32px;color:#f5f0e7;margin:0 0 14px;text-transform:none;text-align:left}.lf-sec .cl p{font-size:14px;line-height:1.7;color:#a59e93;margin:0 0 26px}'+
'.lf-sec .wa{display:flex;align-items:center;justify-content:center;gap:10px;height:50px;border-radius:30px;background:linear-gradient(120deg,#b8924a,#e6cf98 50%,#b8924a);color:#141210!important;text-decoration:none!important;font-size:10.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;margin-bottom:28px}.lf-sec .wa svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.5}'+
'.lf-sec .cl ul{list-style:none;margin:0 0 26px;padding:22px 0 0;border-top:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column;gap:14px}.lf-sec .cl ul a{display:flex;align-items:center;gap:12px;font-size:14px;color:#d8d0c2!important;text-decoration:none!important;word-break:break-word}.lf-sec .cl ul svg{width:30px;height:30px;flex:0 0 30px;padding:7px;border-radius:50%;border:1px solid rgba(217,189,124,.4);fill:none;stroke:#d9bd7c;stroke-width:1.3}'+
'.lf-sec .so{display:flex;gap:10px}.lf-sec .so a{width:36px;height:36px;border:1px solid rgba(255,255,255,.15);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#d8d0c2}.lf-sec .so svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.4}'+
'.lf-sec .cf,.lf-sec .acc-card{padding:48px 52px!important}.lf-sec .cfh h3,.lf-sec .lt{font-family:'+HF+';font-weight:400;font-size:28px;color:#141210;margin:0 0 6px;text-transform:none}.lf-sec .cs{font-size:13.5px;color:#8a837a;margin:0 0 26px}.lf-sec .cs:empty{display:none}'+
'.lf-sec .lf-hp{position:absolute!important;left:-9999px!important;height:1px;overflow:hidden}'+
/* campos */
'.lf-sec form label,.lf-sec .form-label{font-size:10.5px!important;letter-spacing:.16em;text-transform:uppercase;color:#7a736a!important;margin-bottom:6px!important;font-weight:500}'+
'.lf-sec form .form-control,.lf-sec form input[type=text],.lf-sec form input[type=email],.lf-sec form input[type=password],.lf-sec form input[type=tel]{height:50px!important;border-radius:14px!important;border:1px solid rgba(20,18,16,.14)!important;background:#faf8f5!important;font-size:14.5px!important;padding:0 16px!important;box-shadow:none!important;color:#141210}'+
'.lf-sec form textarea,.lf-sec form textarea.form-control{height:140px!important;min-height:140px;padding:14px 16px!important;resize:vertical}'+
'.lf-sec form .form-control:focus,.lf-sec form input:focus,.lf-sec form textarea:focus{border-color:#c9a961!important;background:#fff!important}.lf-sec .form-group{margin-bottom:16px!important;position:relative}'+
'.lf-sec .cf-turnstile,.lf-sec .g-recaptcha{display:flex;justify-content:center;margin:6px 0 14px;min-height:65px}'+
'.lf-sec form [type=submit]{display:flex!important;align-items:center;justify-content:center;width:100%!important;height:52px!important;border-radius:30px!important;background:#141210!important;border:0!important;color:#f5f0e7!important;font-size:11px!important;letter-spacing:.2em!important;text-transform:uppercase!important;font-weight:500!important;margin:6px 0 18px!important}.lf-sec form [type=submit]:hover{color:#e6cf98!important}'+
/* conta */
'.lf-sec.acn .row{justify-content:center;margin:0!important}.lf-sec .acc-card{max-width:470px!important;flex:0 0 100%!important;width:100%!important;margin:0 auto!important;background:#fff;border-radius:22px;box-shadow:0 30px 60px -40px rgba(40,30,15,.45);border:1px solid rgba(20,18,16,.04)}'+
'.lf-sec .ach{text-align:center}.lf-sec .acc-card a{color:#a8843f!important;text-decoration:none!important}.lf-sec .acc-card a[href*="reset"]{display:inline-block;font-size:13px;margin:-4px 0 14px}.lf-sec .acc-card .text-center,.lf-sec .acc-card form>div:last-child{font-size:13.5px;color:#6f685f;text-align:center}'+
'.lf-sec.acw table{width:100%;border-collapse:collapse;font-size:13.5px;background:#fff;border-radius:16px;overflow:hidden}.lf-sec.acw th{font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:#7a736a;font-weight:500;border-bottom:1px solid #ece5da;padding:12px 10px}.lf-sec.acw td{border-bottom:1px solid #f1ece4;padding:12px 10px}.lf-sec.acw h2,.lf-sec.acw h3,.lf-sec.acw h4{font-family:'+HF+';font-weight:400}.lf-sec.acw .btn-primary{border-radius:30px!important;background:#141210!important;border:0!important}.lf-sec.acw .card,.lf-sec.acw .box{border-radius:18px;border:1px solid rgba(20,18,16,.06)}'+
/* 404 */
'#lf-pg .nf{text-align:center;max-width:640px;margin:0 auto}#lf-pg .nf .big{display:block;font-family:'+HF+';font-weight:400;font-size:120px;line-height:1;background:linear-gradient(120deg,#b8924a,#ecd9a6 50%,#b8924a);-webkit-background-clip:text;background-clip:text;color:transparent;margin-bottom:10px}#lf-pg .nf p{font-size:15px;line-height:1.7;color:#5a534b;margin:0 0 28px}'+
'#lf-pg .nf .bt{display:flex;justify-content:center;flex-wrap:wrap;gap:12px;margin-bottom:28px}#lf-pg .nf .bt a{display:inline-flex;align-items:center;height:50px;padding:0 28px;border-radius:30px;font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;text-decoration:none!important}#lf-pg .nf .b1{background:#141210;color:#f5f0e7!important}#lf-pg .nf .b2{border:1px solid #141210;color:#141210!important}'+
'#lf-pg .nf .cc{display:flex;justify-content:center;flex-wrap:wrap;gap:8px}#lf-pg .nf .cc a{height:38px;display:inline-flex;align-items:center;padding:0 18px;border-radius:30px;border:1px solid rgba(20,18,16,.14);background:#fff;font-size:12.5px;color:#3d3730!important;text-decoration:none!important}#lf-pg .nf .cc a:hover{border-color:#c9a961}'+
'@media(max-width:860px){#lf-pg .inst,.lf-sec .ctr,#lf-pg .tx.qsw{grid-template-columns:1fr}#lf-pg .nv{position:static;order:2}#lf-pg .nv ul,#lf-pg .nv small{display:none}#lf-pg .tx{padding:30px 22px;border-radius:18px}#lf-pg .tx.isfaq{padding:8px 20px}#lf-pg .pb,.lf-sec{padding:22px 14px 50px!important}#lf-pg #lf-ch{padding:28px 16px 24px}#lf-pg #lf-ch h1{font-size:30px}.lf-sec .cl,.lf-sec .cf,.lf-sec .acc-card{padding:30px 22px!important}#lf-pg .qph{position:static;width:240px;margin:0 auto}#lf-pg .qph .a{height:300px}#lf-pg .fi button{font-size:16px}#lf-pg .nf .big{font-size:84px}.lf-sec .cl h2{font-size:26px}}');
})})()}catch(e){console.warn("[LF] 90-pages",e)}
/* ---- 91-contact-tidy ---- */
try{(function(){LF.add('contact-tidy',function(){var ul=LF.$('.lf-sec .cl ul');if(!ul||ul.dataset.td)return;ul.dataset.td=1;var seen={};LF.$$('li',ul).forEach(function(li){var a=li.querySelector('a'),s=li.querySelector('span');var h=a.getAttribute('href')||'';var dg=(h+' '+s.textContent).replace(/\D/g,'').replace(/^55(?=\d{10,11})/,'').slice(-11);var isNum=/^[\d\s()+-]+$/.test(s.textContent.trim());if(isNum&&dg.length>=10){if(seen[dg]){li.remove();return}seen[dg]=1;s.textContent='('+dg.slice(0,2)+') '+dg.slice(2,-4)+'-'+dg.slice(-4)}})})})()}catch(e){console.warn("[LF] 91-contact-tidy",e)}
/* ---- 92-captcha-css ---- */
try{(function(){LF.add('captcha-css',function(){LF.css('lf-captcha-css','.lf-sec .g-recaptcha{display:block!important;min-height:0!important;margin:0!important}.lf-sec .js-nubesdk-slot:empty{display:none}')})})()}catch(e){console.warn("[LF] 92-captcha-css",e)}
/* ---- 93-404-fix ---- */
try{(function(){LF.add('nf-fix',function(){if(LF.tpl()!=='404')return;var pg=LF.$('#lf-pg');if(!pg)return;var n=pg.nextElementSibling;while(n){if(n.tagName==='SECTION'||(n.tagName==='DIV'&&n.classList.contains('container')))n.classList.add('lf-hid2');else if(n.tagName!=='SCRIPT')break;n=n.nextElementSibling}
var all=LF.$$('#lf-pg .nf .cc a').filter(function(a){return /todos/i.test(a.textContent)})[0];if(all){var b2=LF.$('#lf-pg .nf .b2');if(b2)b2.setAttribute('href',all.getAttribute('href'));all.remove()}})})()}catch(e){console.warn("[LF] 93-404-fix",e)}
/* ---- 94-drawer-names ---- */
try{(function(){LF.add('drawer-names',function(){var x=document.getElementById('lf-dw');if(!x||x.dataset.cn||!LF.cleanName)return;x.dataset.cn=1;var fix=function(){LF.$$('.ar em:not([data-c])',x).forEach(function(e){e.setAttribute('data-c','1');try{var c=LF.cleanName(e.textContent.trim());if(c&&c.name)e.textContent=c.name}catch(_){}})};new MutationObserver(fix).observe(x,{childList:true,subtree:true});fix()})})()}catch(e){console.warn("[LF] 94-drawer-names",e)}
/* ---- 95-loadmore ---- */
try{(function(){LF.add('loadmore',function(){var t=LF.tpl();if(!/^(category|search)$/.test(t))return;var tb=LF.$('.js-product-table');if(!tb||LF.$('#lf-more'))return;var per=LF.$$('.js-item-product',tb).length;if(per<12)return;
var box=document.createElement('div');box.id='lf-more';box.innerHTML='<p class="ct"></p><button type="button" class="bt"><span>Ver mais produtos</span><i></i></button>';tb.parentNode.insertBefore(box,tb.nextSibling);
var btn=box.querySelector('.bt'),ct=box.querySelector('.ct'),page=1,busy=false,end=false;var seen={};LF.$$('.js-item-product',tb).forEach(function(c){seen[c.getAttribute('data-product-id')]=1});
var shown=function(){ct.textContent='Mostrando '+LF.$$('.js-item-product',tb).length+' produtos'};shown();
var url=function(n){var p=location.pathname.replace(/\/page\/\d+\/?$/,'/').replace(/\/?$/,'/');return p+'page/'+n+'/'+location.search};
var near=function(){var r=box.getBoundingClientRect();return r.top<innerHeight+700&&r.bottom>-200};
var load=function(){if(busy||end)return;busy=true;box.classList.add('ld');fetch(url(page+1),{credentials:'same-origin'}).then(function(r){return r.text()}).then(function(h){var d=new DOMParser().parseFromString(h,'text/html');if(/template-404/.test(d.body.className)){end=true;return}var it=LF.$$('.js-product-table .js-item-product',d).filter(function(c){var id=c.getAttribute('data-product-id');if(seen[id])return false;seen[id]=1;return true});if(!it.length){end=true;return}page++;var fr=document.createDocumentFragment();it.forEach(function(c){fr.appendChild(document.importNode(c,true))});tb.appendChild(fr);try{LF.cardify&&LF.cardify(tb)}catch(e){}try{LF.decoVariants&&LF.decoVariants(tb)}catch(e){}if(it.length<per)end=true}).catch(function(){}).then(function(){busy=false;box.classList.remove('ld');shown();if(end)box.classList.add('end');else if(near())setTimeout(load,250)})};
btn.onclick=load;if('IntersectionObserver' in window){new IntersectionObserver(function(es){if(es[0].isIntersecting)load()},{rootMargin:'700px 0px'}).observe(box)}
LF.css('lf-more-css','#lf-more{display:flex;flex-direction:column;align-items:center;gap:14px;padding:34px 0 10px;font-family:'+LF.BF+'}#lf-more .ct{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#8a837a;margin:0}#lf-more .bt{display:inline-flex;align-items:center;gap:12px;height:50px;padding:0 30px;border-radius:30px;border:1px solid #141210;background:transparent;color:#141210;font:inherit;font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;cursor:pointer;transition:all .3s}#lf-more .bt:hover{background:#141210;color:#f5f0e7}#lf-more .bt i{display:none;width:14px;height:14px;border-radius:50%;border:1.5px solid currentColor;border-right-color:transparent;animation:lfspin .7s linear infinite}#lf-more.ld .bt i{display:block}#lf-more.end .bt{display:none}@keyframes lfspin{to{transform:rotate(360deg)}}')})})()}catch(e){console.warn("[LF] 95-loadmore",e)}
/* ---- 96-variant-sync ---- */
try{(function(){
/* sincroniza a variacao escolhida no layout com a variacao nativa (a que vai pra sacola) */
LF.syncNativeVariant=function(det,opt){if(!det||opt==null)return;var a=LF.$$('a[data-option],button[data-option]',det).filter(function(b){return b.getAttribute('data-option')===opt})[0];if(a&&!a.classList.contains('selected'))a.click();var s=det.querySelector('select[name="variation[0]"]');if(s&&s.value!==opt){s.value=opt;s.dispatchEvent(new Event('change',{bubbles:true}))}};
LF.add('variant-sync',function(){if(LF.tpl()!=='product'||window.__lfVS)return;window.__lfVS=1;document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('#lf-pp .vb button');if(!b)return;var det=document.getElementById('single-product')||LF.$('.js-product-detail');var V=[];try{V=JSON.parse(det.getAttribute('data-variants')||(det.querySelector('[data-variants]')||{getAttribute:function(){return '[]'}}).getAttribute('data-variants'))}catch(x){}var v=V[+b.dataset.i];if(v)setTimeout(function(){LF.syncNativeVariant(det,v.option0)},30)},true)})})()}catch(e){console.warn("[LF] 96-variant-sync",e)}
/* ---- 97-soldout ---- */
try{(function(){LF.add('soldout',function(){LF.css('lf-soldout-css',
'#lf-pp .vb button[disabled]{opacity:1!important;background:#f6f3ee!important;border:1px dashed rgba(20,18,16,.18)!important;cursor:not-allowed}'+
'html body #lf-pp .vb button[disabled],html body #lf-pp .vb button[disabled] *,html body .btn-variant-no-stock,html body .btn-variant-no-stock *{text-decoration:none!important}'+
'#lf-pp .vb button[disabled] .vt b{color:#a39b90!important}#lf-pp .vb button[disabled] .vl{opacity:.35}'+
'#lf-pp .vb button[disabled] .vt em{display:none!important}'+
'#lf-pp .vb button[disabled] .vt:after{content:"Esgotado";display:block;font-size:9.5px;letter-spacing:.18em;text-transform:uppercase;color:#a8843f;margin-top:3px;font-style:normal}'+
'#lf-pp .vb button[disabled]:before,#lf-pp .vb button[disabled]:after{display:none!important}'+
/* pop-up e cards (variacao nativa) */
'.btn-variant-no-stock,.btn-variant-no-stock *{text-decoration:none!important}'+
'.btn-variant-no-stock:before,.btn-variant-no-stock:after,.btn-variant-no-stock .btn-variant-content:before,.btn-variant-no-stock .btn-variant-content:after{display:none!important;background:none!important}'+
'.modal-quickshop .btn-variant-no-stock{background:#f6f3ee!important;border:1px dashed rgba(20,18,16,.18)!important;color:#a39b90!important;opacity:1!important}'+
'.modal-quickshop .btn-variant-no-stock em,.modal-quickshop .btn-variant-no-stock small{display:none!important}'+
'.modal-quickshop .btn-variant-no-stock .lf-sold{display:block!important}')})})()}catch(e){console.warn("[LF] 97-soldout",e)}
/* ---- 98-soldout-qs ---- */
try{(function(){LF.add('soldout-qs',function(){LF.css('lf-soldout-qs','html body .modal-quickshop a.btn-variant.btn-variant-no-stock{background:#f6f3ee!important;border:1px dashed rgba(20,18,16,.2)!important;box-shadow:none!important}html body .modal-quickshop a.btn-variant-no-stock .vt b{color:#a39b90!important}html body .modal-quickshop a.btn-variant-no-stock .vl{opacity:.35}html body .modal-quickshop a.btn-variant-no-stock .vt{display:flex;flex-direction:column;align-items:flex-start;line-height:1.1}html body .modal-quickshop a.btn-variant-no-stock .vt:after{content:"Esgotado";font-size:8px;letter-spacing:.16em;text-transform:uppercase;color:#a8843f;margin-top:2px}')})})()}catch(e){console.warn("[LF] 98-soldout-qs",e)}
/* ---- 99-ship-align ---- */
try{(function(){LF.add('ship-align',function(){if(LF.tpl()!=='product')return;LF.css('lf-ship-align','.template-product label.js-shipping-radio .radio-button-label{padding-left:0!important;margin-left:0!important;width:100%}.template-product label.js-shipping-radio .radio-button-content{width:100%}.template-product label.js-shipping-radio .radio-button-text{flex-wrap:nowrap;margin:0!important;align-items:center;gap:12px}.template-product label.js-shipping-radio .radio-button-text>.col{padding:0!important;flex:1 1 auto;min-width:0}.template-product label.js-shipping-radio .radio-button-text>[class*="col-"],.template-product label.js-shipping-radio .radio-button-text>.col+div{padding:0!important;margin-left:auto;text-align:right;flex:0 0 auto;white-space:nowrap}.template-product label.js-shipping-radio .radio-button-icons,.template-product label.js-shipping-radio .radio-button-icons-container{display:none!important}')})})()}catch(e){console.warn("[LF] 99-ship-align",e)}
/* ---- 24-infobanner-mob ---- */
try{(function(){LF.add('ib-mob',function(){var ib=document.getElementById('lf-ib');if(!ib)return;var inn=ib.querySelector('.in');if(!inn||inn.dataset.mq)return;inn.dataset.mq=1;
var PERF='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="9.2" y="2.6" width="5.6" height="3.4" rx=".7"/><path d="M14.8 4.3h2.6M17.4 3.3v2"/><path d="M10.6 6v2.1M13.4 6v2.1"/><rect x="5.2" y="8.1" width="13.6" height="13.3" rx="3"/><rect x="8.6" y="12.6" width="6.8" height="4.6" rx=".6"/></svg>';
LF.$$('.it',inn).forEach(function(it){if(/perfum/i.test(it.textContent)){var s=it.querySelector('svg');if(s&&!s.dataset.pf){var t=document.createElement('div');t.innerHTML=PERF;var n=t.firstChild;n.dataset.pf=1;n.setAttribute('class',s.getAttribute('class')||'');s.parentNode.replaceChild(n,s)}}});
var its=[].slice.call(inn.querySelectorAll('.it'));if(its.length<2)return;var mw=document.createElement('div');mw.className='mqw';var tr=document.createElement('div');tr.className='mq';its.concat([its[0]]).forEach(function(n){var c=n.cloneNode(true);c.setAttribute('aria-hidden','true');var s=document.createElement('div');s.className='sl';s.appendChild(c);tr.appendChild(s)});mw.appendChild(tr);inn.parentNode.insertBefore(mw,inn.nextSibling);
var i=0,N=its.length,tm,go=function(k,anim){i=k;tr.style.transition=anim===false?'none':'transform .7s cubic-bezier(.65,0,.35,1)';tr.style.transform='translateX('+(-100*i)+'%)'};
tr.addEventListener('transitionend',function(){if(i>=N)go(0,false)});
var next=function(){if(getComputedStyle(mw).display==='none')return;go(i+1)};var start=function(){clearInterval(tm);tm=setInterval(next,3200)};start();
var x0=null;mw.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;clearInterval(tm)},{passive:true});mw.addEventListener('touchend',function(e){if(x0!=null){var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40){if(dx<0)go(i+1);else go(i<=0?0:i-1)}}x0=null;start()},{passive:true});
document.addEventListener('visibilitychange',function(){if(document.hidden)clearInterval(tm);else start()});
LF.css('lf-ib-mob','#lf-ib .mqw{display:none}@media(max-width:1023px){#lf-ib .in{display:none!important}#lf-ib .mqw{display:block;overflow:hidden;padding:16px 0}#lf-ib .mq{display:flex;will-change:transform}#lf-ib .sl{flex:0 0 100%;display:flex;justify-content:center;padding:0 20px;box-sizing:border-box}#lf-ib .sl .it{width:auto!important;max-width:100%!important;flex:none!important;margin:0!important;gap:12px!important;align-items:center!important;padding:0!important;border:0!important}#lf-ib .sl .it b{white-space:normal!important}#lf-ib .sl .it:before,#lf-ib .sl .it:after{display:none!important}}')})})()}catch(e){console.warn("[LF] 24-infobanner-mob",e)}
/* ---- 91-pages-tidy ---- */
try{(function(){LF.add('pages-tidy',function(){LF.$$('#lf-pg .txi > p, .lf-sec p').forEach(function(p){if(!p.textContent.replace(/ /g,'').trim()&&!p.querySelector('img,iframe,video'))p.classList.add('lf-hid2')});LF.css('lf-pages-tidy','#lf-pg .qph{position:relative}#lf-pg .tx .txi>*:last-child{margin-bottom:0}@media(max-width:860px){#lf-pg .tx.qsw{gap:6px!important}#lf-pg .qph{position:relative!important;top:auto!important;width:230px;margin:0 auto 26px!important}}')})})()}catch(e){console.warn("[LF] 91-pages-tidy",e)}
/* ---- 9A-responsive-fix ---- */
try{(function(){LF.add('responsive-fix',function(){LF.css('lf-resp-fix',"@media(max-width:860px){#lf-pp .pg{grid-template-columns:minmax(0,1fr)!important}#lf-pp .pg>*{min-width:0!important}}#lf-pp .pg>*{min-width:0}@media(max-width:1279px){#lf-pe .ar.nx{right:6px!important}#lf-pe .ar.pv{left:6px!important}}#lf-pp .vb:not(:has(>button:nth-child(4))){grid-template-columns:none!important;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#lf-pp .vb button{min-width:0}@media(max-width:400px){#lf-pp .vb button{padding-left:8px!important;padding-right:8px!important;gap:6px!important}#lf-pp .vb .vt em{font-size:9.5px!important;letter-spacing:0!important}#lf-pp button.add{letter-spacing:.12em!important;font-size:10px!important;white-space:nowrap!important;padding-left:12px!important;padding-right:12px!important}#lf-pp button.add span{white-space:nowrap}}")})})()}catch(e){console.warn("[LF] 9A-responsive-fix",e)}
window.LF&&LF.run&&LF.run();
}finally{show()}
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
})();
