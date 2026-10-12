/* LF Impoorts | módulo 02-esc */
(function(){LF.add('esc',function(){if(window.__lfEsc)return;window.__lfEsc=1;
document.addEventListener('keydown',function(e){if(e.key!=='Escape'&&e.key!=='Esc')return;
 var done=false;var cl=function(sel){var el=document.querySelector(sel);if(el){el.click();done=true}};
 ['#lf-msr.on .cl','#lf-mdw.on .x','#lf-cfd.on .x','#lf-dw.on .x'].forEach(function(s){if(!done)cl(s)});
 var sb=document.querySelector('#lf-head .lf-sbox.on');if(sb){var x=sb.querySelector('.lf-sx');if(x)x.click();done=true}
 LF.$$('.js-modal.modal-show, .js-modal.show, .modal.modal-show, .js-fullscreen-modal.modal-show, .js-modal[style*="display: block"]').forEach(function(m){var c=m.querySelector('.js-modal-close');if(c){c.click();done=true}});
 if(!done){var ov=document.querySelector('.js-modal-overlay[style*="block"], .modal-overlay.modal-show');if(ov)ov.click()}
 var fs=LF.$$('.lf-x-open');fs.forEach(function(f){f.classList.remove('lf-x-open')});
});})})();
