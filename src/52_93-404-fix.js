/* LF Impoorts | módulo 93-404-fix */
(function(){LF.add('nf-fix',function(){if(LF.tpl()!=='404')return;var pg=LF.$('#lf-pg');if(!pg)return;var n=pg.nextElementSibling;while(n){if(n.tagName==='SECTION'||(n.tagName==='DIV'&&n.classList.contains('container')))n.classList.add('lf-hid2');else if(n.tagName!=='SCRIPT')break;n=n.nextElementSibling}
var all=LF.$$('#lf-pg .nf .cc a').filter(function(a){return /todos/i.test(a.textContent)})[0];if(all){var b2=LF.$('#lf-pg .nf .b2');if(b2)b2.setAttribute('href',all.getAttribute('href'));all.remove()}})})();
