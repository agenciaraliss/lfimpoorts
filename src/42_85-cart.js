/* LF Impoorts | módulo 85-cart */
(function(){LF.add('cart',function(){var c=LF.$('#modal-cart');if(!c||c.dataset.lf)return;c.dataset.lf=1;
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
})})();
