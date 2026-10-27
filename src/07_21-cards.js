/* LF Impoorts | módulo 21-cards */
(function(){

/* Start featured photos before their cards enter the viewport. Keep the
   secondary hover photo and the Nuvemshop purchase controls untouched. */
LF.prepareCardImage=function(card){
var im=card.querySelector('img.item-image-featured');if(!im||im.dataset.lfPhoto)return;
var ss=im.getAttribute('data-srcset');if(!ss)return;im.dataset.lfPhoto='1';
var reveal=function(){
 var seen={},set=ss.split(',').map(function(x){return x.trim()}).filter(function(x){var u=x.split(/\s+/)[0];if(!u||seen[u])return false;seen[u]=1;return true}).join(', ');
 var width=im.clientWidth||(card.clientWidth)|| (LF.mobile()?180:280);
 im.setAttribute('sizes',Math.ceil(width)+'px');im.decoding='async';im.loading='eager';
 im.setAttribute('srcset',set);var u=LF.imgOf(im,'480');if(u)im.setAttribute('src',u);
 im.classList.remove('lazyload','lazyloading','lazyautosizes');im.classList.add('lazyloaded');
};
if(!window.IntersectionObserver){reveal();return}
var io=new IntersectionObserver(function(es){if(es.some(function(e){return e.isIntersecting})){io.disconnect();reveal()}},{rootMargin:'600px'});io.observe(im);
};

/* Mobile rows scroll natively; keep the theme Swiper from consuming the gesture.
   The saved settings are restored when the desktop breakpoint is reached. */
var mobileRows=window.matchMedia('(max-width:767px)'),rowSettings=new WeakMap(),rowGestures=new WeakSet();
LF.syncMobileRows=function(){
 LF.$$('.swiper-wrapper.swiper-mobile-only').forEach(function(row){
  if(!rowGestures.has(row)){rowGestures.add(row);var start=0,dragged=false;
   row.addEventListener('touchstart',function(){start=row.scrollLeft;dragged=false},{passive:true});
   row.addEventListener('scroll',function(){if(Math.abs(row.scrollLeft-start)>6)dragged=true},{passive:true});
   row.addEventListener('click',function(e){if(mobileRows.matches&&dragged&&e.detail){e.preventDefault();e.stopPropagation();dragged=false}},true);
  }
  var sw=row.parentElement&&row.parentElement.swiper;if(!sw||sw.destroyed||!sw.params)return;
  if(mobileRows.matches){
   if(!rowSettings.has(sw))rowSettings.set(sw,{move:sw.allowTouchMove,prevent:sw.params.touchStartPreventDefault});
   sw.allowTouchMove=false;sw.params.touchStartPreventDefault=false;
  }else if(rowSettings.has(sw)){var saved=rowSettings.get(sw);sw.allowTouchMove=saved.move;sw.params.touchStartPreventDefault=saved.prevent;rowSettings.delete(sw)}
 });
};
if(mobileRows.addEventListener)mobileRows.addEventListener('change',LF.syncMobileRows);else mobileRows.addListener(LF.syncMobileRows);
window.addEventListener('load',LF.syncMobileRows);

LF.cardify=function(root){LF.$$('.js-item-product',root||document).forEach(function(c){LF.prepareCardImage(c);if(c.dataset.lfc)return;var item=c.querySelector('.item')||c;var desc=c.querySelector('.item-description');if(!desc)return;c.dataset.lfc=1;c.classList.add('lf-card');
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
 desc.appendChild(bw)});LF.syncMobileRows()};
LF.add('cards',function(){LF.cardify();[300,1200,3500].forEach(function(ms){setTimeout(LF.syncMobileRows,ms)});var tm;new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(function(){LF.cardify()},120)}).observe(document.body,{childList:true,subtree:true});
LF.css('lf-cards-css',
'.lf-card{font-family:'+LF.BF+'}'+
'.lf-card>.item{position:relative;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 4px 14px -10px rgba(40,30,15,.18),0 0 0 1px rgba(20,18,16,.035);transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s;height:100%;display:flex;flex-direction:column;margin:0!important}'+
'.lf-card:hover>.item{transform:translateY(-2px);box-shadow:0 7px 18px -12px rgba(40,30,15,.22),0 0 0 1px rgba(201,169,97,.18)}'+
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
'html body .swiper-wrapper.swiper-mobile-only{display:flex!important;transform:none!important;overflow-x:auto;overflow-y:visible;scroll-snap-type:x mandatory;touch-action:pan-x pan-y;overscroll-behavior-x:contain;gap:12px;padding:6px 16px 22px!important;margin:0!important;scrollbar-width:none;-webkit-overflow-scrolling:touch;width:auto!important;box-sizing:border-box}'+
'html body .swiper-wrapper.swiper-mobile-only{height:auto!important;align-items:stretch!important}'+
'html body .swiper-wrapper.swiper-mobile-only>.js-item-product{height:auto!important}'+
'.lf-card{display:flex!important;flex-direction:column!important;align-items:stretch!important}'+
'.lf-card>.item{height:auto!important;width:100%;flex:1 1 auto!important;box-shadow:0 3px 10px -8px rgba(40,30,15,.14),0 0 0 1px rgba(20,18,16,.035)!important}'+
'.lf-card:hover>.item{transform:none!important}'+
'.lf-card .js-product-container,.lf-card .item-description,.lf-card .item-description>a.item-link{flex:1 1 auto!important}'+
'.lf-card .item-description{min-height:212px!important;box-sizing:border-box!important}'+
'.lf-card .lf-buyw{margin-top:auto!important;flex-shrink:0!important}'+
'.lf-card .js-item-name{min-height:0!important}'+
'.lf-card .item-price-container{min-height:0!important;margin:8px 0 12px!important;line-height:1.35!important}'+
'.lf-card .item-price-container>*,.lf-card .item-price-container .d-block{line-height:1.35!important}'+
'.lf-card .js-item-image-padding:has(.product-item-slider-slide:nth-child(2)){margin-bottom:24px!important}'+
'.lf-card .product-item-slider-container:has(.product-item-slider-slide:nth-child(2)){overflow:visible!important;clip-path:inset(0 0 -24px 0)}'+
'.lf-card .product-item-slider-container:has(.product-item-slider-slide:nth-child(2)) .product-item-slider-pagination-container{bottom:-20px!important}'+
'html body .swiper-wrapper.swiper-mobile-only::-webkit-scrollbar{display:none}'+
'html body .swiper-wrapper.swiper-mobile-only>.js-item-product{flex:0 0 calc((100% - 44px)/2.15)!important;width:calc((100% - 44px)/2.15)!important;max-width:none!important;margin:0!important;scroll-snap-align:start;scroll-margin-left:16px}'+
'html body .swiper-container:has(> .swiper-mobile-only){overflow:visible!important;margin:0 -15px!important}'+
'.lf-card .lf-nm{font-size:13px;min-height:35px}.lf-card .js-payment-discount-price-product-container{font-size:15px!important;gap:6px}.lf-card .lf-pixw{font-size:8.5px!important;padding:0 7px;height:18px}.lf-card .lf-buy{height:38px;font-size:9.5px;letter-spacing:.16em}'+
'}');
});
})();
