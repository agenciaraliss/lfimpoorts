/* LF Impoorts | módulo 37-pe-motion */
(function(){LF.add('pe-motion',function(){
var pe=LF.$('#lf-pe');if(!pe)return;var tr=pe.querySelector('.tr');
var mk=function(u){var b=document.createElement('div');b.className='bn';b.innerHTML='<div class="bi"><img src="'+u+'" referrerpolicy="no-referrer" fetchpriority="high" decoding="async" alt=""></div><span class="lt"></span><span class="fr"></span>';return b};
var ensure=function(){var on=pe.querySelector('.tb button.on');var k=on&&/eles/i.test(on.textContent)?'eles':'elas';var u=LF.cfg.pe[k];if(!u)return;var b=tr.querySelector('.bn');if(!b){b=mk(u);var f=tr.querySelector('.lf-pec');if(f)f.after(b);else tr.appendChild(b)}else{var im=b.querySelector('img');if(!im){b.innerHTML=mk(u).innerHTML}else if(im.getAttribute('src')!==u)im.setAttribute('src',u);if(!b.querySelector('.lt'))b.insertAdjacentHTML('beforeend','<span class="lt"></span>')}};
ensure();new MutationObserver(function(){ensure()}).observe(tr,{childList:true});
LF.css('lf-pemo-css','#lf-pe .bn{background:linear-gradient(135deg,#ead9b8,#f6ecd8)}'+
'#lf-pe .bi{animation:none!important;overflow:hidden}'+
'#lf-pe .bi img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;max-height:none!important;max-width:none!important;object-fit:cover!important;transform-origin:50% 60%;animation:lfpemove 18s ease-in-out infinite alternate!important;will-change:transform}'+
'@keyframes lfpemove{0%{transform:scale(1.04) translate(0,0)}35%{transform:scale(1.10) translate(-1.6%,-1%)}70%{transform:scale(1.07) translate(1.4%,-1.8%)}100%{transform:scale(1.12) translate(-.8%,.6%)}}'+
'#lf-pe .lt{position:absolute;top:0;bottom:0;left:-45%;width:35%;z-index:1;background:linear-gradient(100deg,transparent,rgba(255,244,214,.32),transparent);transform:skewX(-16deg);animation:lfpelt 7s ease-in-out infinite;pointer-events:none;mix-blend-mode:screen}'+
'@keyframes lfpelt{0%,60%{left:-45%}100%{left:130%}}'+
'#lf-pe .fr{z-index:2}'+
'@media(prefers-reduced-motion:reduce){#lf-pe .bi img,#lf-pe .lt{animation:none!important}}');
})})();
