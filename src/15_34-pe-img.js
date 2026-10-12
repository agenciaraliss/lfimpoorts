/* LF Impoorts | módulo 34-pe-img */
(function(){LF.add('pe-img',function(){
var fix=function(){LF.$$('#lf-pe .bi').forEach(function(b){if(b.dataset.f)return;b.dataset.f=1;var u=(b.getAttribute('style')||'').match(/url\(['"]?([^'")]+)/);if(!u)return;b.style.backgroundImage='none';b.innerHTML='<img src="'+u[1]+'" referrerpolicy="no-referrer" alt="" style="width:100%;height:100%;object-fit:cover;display:block">'})};
var t=LF.$('#lf-pe .tr');if(t){fix();new MutationObserver(fix).observe(t,{childList:true})}})})();
