/* LF Impoorts | módulo 9D-apps-compat */
(function(){LF.add('apps-compat',function(){
/* Preserve actual app slot nodes, including listeners and late SDK mounts.
   Native shopping forms and their anti-bot controls stay in their original place. */
var selector='[data-slot]',timer;
var area=function(parent,key,before){
 var box=parent.querySelector(':scope > .lf-app-area[data-lf-area="'+key+'"]');
 if(!box){box=document.createElement('div');box.className='lf-app-area';box.dataset.lfArea=key;parent.insertBefore(box,before||null)}
 return box;
};
var preserve=function(){
 var pp=LF.$('#lf-pp'),inf=pp&&pp.querySelector('.inf');
 var scopes=LF.$$('#single-product .lf-hide-native,header.lf-nat-head,footer>.lf-native-footer');
 scopes.forEach(function(scope){
  var nodes=LF.$$(selector,scope).filter(function(n){var p=n.parentElement;while(p&&p!==scope){if(p.matches(selector))return false;p=p.parentElement}return true});
  nodes.forEach(function(n){
   /* Do not move forms protected by reCAPTCHA or Turnstile. */
   if(n.querySelector('.g-recaptcha,.cf-turnstile,iframe[src*="recaptcha"],iframe[src*="challenges.cloudflare"]'))return;
   var key=n.getAttribute('data-slot')||n.getAttribute('data-nubesdk-slot')||'',dest;
   if(scope.closest('#single-product')){
    if(!pp||!inf||document.body.classList.contains('lf-vip-landing'))return;
    if(/description|product_bottom|product_after_content/.test(key))dest=area(pp.querySelector('.pi'),'product-details');
    else if(/before_title/.test(key))dest=area(inf,'product-before-title',inf.querySelector('h1'));
    else if(/title/.test(key))dest=area(inf,'product-title',inf.querySelector('.fam,.pr'));
    else if(/price/.test(key))dest=area(inf,'product-price',inf.querySelector('.vr,.buy'));
    else if(/cart|buy|variant/.test(key))dest=area(inf,'product-buy',inf.querySelector('.shp,.acc'));
    else dest=area(pp.querySelector('.pi'),'product-details');
   }else if(scope.matches('header.lf-nat-head')){
    var head=LF.$('#lf-head');if(head)dest=area(head,'header-apps');
   }else{
    var footer=LF.$('#lf-ft');if(footer)dest=area(footer,'footer-apps');
   }
   if(dest)dest.appendChild(n);
  });
 });
};
LF.preserveAppSlots=preserve;
preserve();
new MutationObserver(function(ms){if(ms.some(function(m){return m.addedNodes.length})){clearTimeout(timer);timer=setTimeout(preserve,80)}}).observe(document.body,{childList:true,subtree:true});
LF.css('lf-apps-css','.lf-app-area{min-width:0;max-width:100%;height:auto}.lf-app-area:empty{display:none}.lf-app-area[data-lf-area="product-details"]{margin-top:28px}.lf-app-area[data-lf-area="product-title"]{margin:6px 0 12px}.lf-app-area [data-slot],.lf-app-area .js-nubesdk-slot{max-width:100%}');
})})();
