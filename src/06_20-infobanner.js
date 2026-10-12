/* LF Impoorts | módulo 20-infobanner */
(function(){LF.add('infobanner',function(){
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
})})();
