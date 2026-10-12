/* LF Impoorts | módulo 15-head-icons */
(function(){LF.add('head-icons',function(){
var u='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.2"/><circle cx="12" cy="10" r="3.1"/><path d="M6.3 18.6c1.3-2.3 3.3-3.5 5.7-3.5s4.4 1.2 5.7 3.5"/></svg>';
var b='<svg viewBox="0 0 24 24"><path d="M4.8 8.5h14.4l-1 11.2a1.6 1.6 0 0 1-1.6 1.5H7.4a1.6 1.6 0 0 1-1.6-1.5z"/><path d="M8.6 8.5V7a3.4 3.4 0 0 1 6.8 0v1.5"/></svg>';
var ic=LF.$$('#lf-head .lf-icons a');if(ic[0]&&!ic[0].dataset.ic){ic[0].dataset.ic=1;ic[0].innerHTML=u}
var bag=LF.$('#lf-head .lf-bag');if(bag&&!bag.dataset.ic){bag.dataset.ic=1;var c=bag.querySelector('.lf-count');bag.innerHTML=b;bag.appendChild(c)}
LF.css('lf-hicons-css','#lf-head .lf-icons svg{width:25px;height:25px;stroke-width:1.6}#lf-head .lf-sic svg,#lf-head .lf-msb svg{stroke-width:1.6}#lf-head .lf-count{top:auto;bottom:4px;right:2px;transform:scale(1)!important;min-width:16px;height:16px;font-size:9px;border:1.5px solid #faf7f2}');
});
LF.add('cards-eq',function(){LF.css('lf-cardeq-css',
'.swiper-wrapper:has(>.lf-card),.js-product-table:has(>.lf-card),.row-grid:has(>.lf-card){align-items:stretch!important}'+
'.lf-card{display:flex!important;flex-direction:column;height:auto!important}'+
'.lf-card>.item{flex:1 1 auto;height:auto!important}'+
'.lf-card:hover>.item{transform:none!important}'+
'.lf-card .item-image{flex:0 0 auto}'+
'.lf-card .js-item-name{min-height:58px;display:flex;flex-direction:column;justify-content:flex-start}'+
'.lf-card .item-price-container{min-height:72px;justify-content:flex-end}'+
'.lf-card .mi-w-full:not(.lf-norate){display:none!important}')})})();
