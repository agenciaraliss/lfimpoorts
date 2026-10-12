/* LF Impoorts | módulo 16-head-stable */
(function(){LF.add('head-stable',function(){var h=LF.$('#lf-head');if(!h||h.dataset.st)return;h.dataset.st=1;var small=h.classList.contains('lf-small'),tk=false;
window.addEventListener('scroll',function(e){if(tk)return;tk=true;requestAnimationFrame(function(){tk=false;var y=window.scrollY;if(!small&&y>140){small=true;h.classList.add('lf-small')}else if(small&&y<30){small=false;h.classList.remove('lf-small')}else{h.classList.toggle('lf-small',small)}})},{passive:true});
LF.css('lf-headst-css','#lf-head .lf-row,#lf-head .lf-lgm{will-change:height}')})})();
