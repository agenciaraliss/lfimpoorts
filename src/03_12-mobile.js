/* LF Impoorts | módulo 12-mobile */
(function(){LF.add('mobile-nav',function(){
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
})})();
