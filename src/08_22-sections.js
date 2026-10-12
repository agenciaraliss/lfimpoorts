/* LF Impoorts | módulo 22-sections */
(function(){LF.add('sections',function(){
LF.$$('#lf-ib span').forEach(function(s){s.textContent=s.textContent.toLowerCase().replace(/^./,function(c){return c.toUpperCase()}).replace(/whatsapp/i,'WhatsApp')});
LF.css('lf-sec-css','.js-section-products-featured,.js-section-products-new,.js-section-products-best-seller,.js-section-products-promotion{background:#f4f2ef!important;padding:64px 0 54px!important;margin:0!important}'+
'.js-section-products-featured>.container,.js-section-products-new>.container,.js-section-products-best-seller>.container,.js-section-products-promotion>.container,.js-section-products-sale>.container{max-width:1150px!important}'+
'.js-section-products-new,.js-section-products-promotion{background:#faf8f5!important}'+
'@media(max-width:767px){.js-section-products-featured,.js-section-products-new,.js-section-products-best-seller,.js-section-products-promotion{padding:40px 0 26px!important}}')})})();
