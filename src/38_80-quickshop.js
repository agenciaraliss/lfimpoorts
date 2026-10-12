/* LF Impoorts | módulo 80-quickshop */
(function(){
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
});})();
