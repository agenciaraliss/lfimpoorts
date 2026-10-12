/* LF Impoorts | módulo 67-product-vb3 */
(function(){LF.add('product-vb3',function(){
var bs=LF.$$('#lf-pp .vb button');if(!bs.length)return;var pc=LF.$('.js-product-detail .js-product-container');var V=[];try{V=JSON.parse(pc.getAttribute('data-variants')||'[]')}catch(e){}
var ml=function(t){var m=String(t).match(/(\d+(?:[.,]\d+)?)\s*ml/i);return m?parseFloat(m[1].replace(',','.')):0};
var lab=bs.map(function(b){var v=V[+b.dataset.i];return v?String(v.option0||''):b.textContent});
var vals=lab.map(ml);var u=vals.filter(function(x,i,a){return x&&a.indexOf(x)===i}).sort(function(a,b){return a-b});
bs.forEach(function(b,k){var full=lab[k].replace(/\s+/g,' ').trim();var m=full.match(/^(.*?\d+(?:[.,]\d+)?\s*ml)\s*[\(\-–]?\s*([^\)]*)\)?\s*$/i);var t1=full,t2='';if(m&&m[2]&&m[2].trim()){t1=m[1].trim();t2=m[2].trim()}
 var r=u.indexOf(vals[k]);var s=!vals[k]?0:(u.length<=1?2:Math.round(r/(u.length-1)*2)+1);b.dataset.s=s;
 b.innerHTML=(s?'<i class="vl"></i>':'')+'<span class="vt"><b>'+LF.esc(t1)+'</b>'+(t2?'<em>'+LF.esc(t2)+'</em>':'')+'</span>';b.title=full});
var svg=function(c){return 'data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 30"><rect x="3.4" y="0" width="5.2" height="4.4" rx=".6" fill="'+c+'"/><rect x="4.6" y="4.4" width="2.8" height="2.1" fill="'+c+'"/><rect x="1.9" y="6.5" width="8.2" height="21.6" rx="1.3" fill="none" stroke="'+c+'" stroke-width="1.2"/></svg>')};
LF.css('lf-vb3-css','#lf-pp .vb{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;align-items:stretch}'+
'#lf-pp .vb button{width:100%;height:auto!important;min-height:58px!important;display:flex!important;flex-direction:row!important;align-items:center!important;justify-content:center!important;gap:10px;padding:8px 14px!important;border-radius:40px!important;text-align:left}'+
'#lf-pp .vb .vl{display:block;flex:0 0 14px;width:14px;height:32px;background:url("'+svg('#B7BEC5')+'") center bottom/auto 24px no-repeat;transition:background-image .3s}'+
'#lf-pp .vb button[data-s="1"] .vl{background-size:auto 17px}#lf-pp .vb button[data-s="3"] .vl{background-size:auto 31px}'+
'#lf-pp .vb button:hover .vl{background-image:url("'+svg('#141210')+'")}#lf-pp .vb button.on .vl{background-image:url("'+svg('#e6cf98')+'")}'+
'#lf-pp .vb .vt{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;min-width:0;line-height:1.2}'+
'#lf-pp .vb .vt b{font-weight:600;font-size:14px;white-space:nowrap}#lf-pp .vb .vt em{font-style:normal;font-size:11px;opacity:.7;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}'+
'@media(max-width:560px){#lf-pp .vb{grid-template-columns:repeat(3,1fr);gap:8px}#lf-pp .vb button{gap:7px;padding:8px 8px!important;min-height:56px!important}#lf-pp .vb .vl{flex-basis:12px;width:12px;height:28px}#lf-pp .vb .vt b{font-size:13px}#lf-pp .vb .vt em{font-size:9.5px}}');
})})();
