/* LF Impoorts | módulo 10-header */
(function(){LF.add('header',function(){
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
})})();
