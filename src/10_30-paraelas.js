/* LF Impoorts | módulo 30-paraelas */
(function(){
LF.cfg=LF.cfg||{};LF.cfg.pe={elas:'https://cdn.jsdelivr.net/gh/agenciaraliss/lfimpoorts@fa69b0cf70153392da4aa5c4866d9b37ff9ad400/img/para-elas.webp',eles:'https://cdn.jsdelivr.net/gh/agenciaraliss/lfimpoorts@fa69b0cf70153392da4aa5c4866d9b37ff9ad400/img/para-eles.webp'};
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
var request=0;
var load=function(i){var ticket=++request,t=tabs[i];all2.href=t.h;tr.classList.add('wipe');
 LF.fetchDoc(t.h).then(function(d){if(ticket!==request)return;var P=LF.$$('.js-item-product',d).filter(function(p){return !out(p)}).slice(0,10);
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
});})();
