/* LF Impoorts | módulo 14-util */
(function(){
LF.cleanName=function(n){var t=String(n||'');var r={tags:[],badges:[]};if(/\bdecant\b/i.test(t))r.tags.push('Decant');if(/miniatura/i.test(t))r.tags.push('Miniatura');if(/lan[çc]amento/i.test(t))r.badges.push('Lançamento');if(/pr[ée][\s-]?venda/i.test(t))r.badges.push('Pré-venda');
 t=t.replace(/\(\s*decant\s*\)/ig,'').replace(/^\s*decant\s+/i,'').replace(/^\s*decant(?=[A-ZÀ-Ú0-9])/,'').replace(/\s+decant\s*$/i,'').replace(/lan[çc]amento\s*(\d{4})?/ig,'').replace(/pr[ée][\s-]?venda/ig,'').replace(/\(\s*\)/g,'').replace(/\s*[-–|]\s*$/,'').replace(/\s{2,}/g,' ').trim();r.name=t;return r};
LF.add('adbar',function(){var a=LF.$('.js-adbar');if(!a||a.dataset.lf)return;a.dataset.lf=1;
 LF.$$('.adbar-message',a).forEach(function(m){if(m.dataset.lf)return;m.dataset.lf=1;m.innerHTML=m.innerHTML.replace(/\b([A-ZÀ-Ú0-9]{4,})\b/g,function(w){return /^\d+$/.test(w)?w:'<b class="lf-cupom">'+w+'</b>'})});
 LF.css('lf-adbar-css','.js-adbar{background:#0b0b0b!important;color:#f3eee6!important;position:relative;overflow:hidden;font-family:'+LF.BF+'}'+
 '.js-adbar .adbar-message{color:#f3eee6!important;font-size:12.5px!important;letter-spacing:.06em;display:inline-flex!important;align-items:center;margin-right:0!important;padding-right:34px;position:relative}'+
 '.js-adbar .adbar-message:after{content:"";position:absolute;right:14px;top:50%;width:5px;height:5px;margin-top:-3px;border:1px solid #c9a961;transform:rotate(45deg)}'+
 '.js-adbar .lf-cupom{display:inline-flex;align-items:center;height:20px;padding:0 10px;margin-left:8px;border:1px solid #c9a961;border-radius:12px;color:#e6cf98;font-size:10.5px;letter-spacing:.16em;font-weight:600}'+
 '.js-adbar:after{content:"";position:absolute;top:0;bottom:0;left:-30%;width:22%;background:linear-gradient(90deg,transparent,rgba(230,207,152,.16),transparent);animation:lfluz 7s ease-in-out infinite;pointer-events:none}'+
 '@keyframes lfluz{0%,55%{left:-30%}100%{left:130%}}'+
 '.js-adbar:hover .js-adbar-text-container,.js-adbar:hover .js-adbar-animated{animation-play-state:paused!important}')});
LF.add('titles',function(){LF.$$('h2.section-title, .js-banners-section-title').forEach(function(h){if(h.dataset.lf)return;h.dataset.lf=1;var t=h.textContent.trim();if(!t){(h.closest('.section-title-container')||h).classList.add('lf-empty');h.classList.add('lf-empty');return}h.innerHTML='<span class="lf-tt">'+LF.esc(LF.cap(t)).replace('Best-sellers','Best-Sellers')+'</span><i class="lf-orn"><em></em></i>'});
 LF.css('lf-titles-css','h2.section-title{text-align:center!important;text-transform:none!important;letter-spacing:.005em!important;margin-bottom:34px!important}'+
 'h2.section-title .lf-tt{display:block;font-family:'+LF.HF+';font-weight:400;font-size:34px;line-height:1.15;color:#141210}'+
 'h2.section-title .lf-orn{display:flex;justify-content:center;align-items:center;gap:10px;margin-top:12px}'+
 'h2.section-title .lf-orn:before,h2.section-title .lf-orn:after{content:"";width:46px;height:1px;background:linear-gradient(90deg,transparent,#c9a961)}h2.section-title .lf-orn:after{transform:scaleX(-1)}'+
 'h2.section-title .lf-orn em{width:6px;height:6px;border:1px solid #c9a961;transform:rotate(45deg)}'+
 '.lf-empty{display:none!important}'+
 '@media(max-width:767px){h2.section-title .lf-tt{font-size:26px}h2.section-title{margin-bottom:22px!important}}')});
})();
