/* LF Impoorts | módulo 31-sale */
(function(){LF.add('sale',function(){
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
})})();
