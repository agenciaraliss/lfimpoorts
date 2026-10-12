/* LF Impoorts | módulo 33-banners */
(function(){LF.add('banners',function(){
var s=LF.$('.js-section-banner-home');if(!s||s.dataset.lf)return;s.dataset.lf=1;s.classList.add('lf-bns');
LF.$$('.js-textbanner, .textbanner',s).forEach(function(b,i){b.classList.add('lf-bn');b.style.setProperty('--d',(i*1.6)+'s');if(!b.querySelector('.lf-fr'))b.insertAdjacentHTML('beforeend','<span class="lf-fr"></span><span class="lf-sh"></span>');
 b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;b.style.transform='perspective(900px) rotateY('+(x*5)+'deg) rotateX('+(-y*5)+'deg)'});b.addEventListener('mouseleave',function(){b.style.transform=''})});
LF.css('lf-bns-css','.lf-bns{background:#fff!important;padding:60px 0!important}.lf-bns .js-banners-section-title,.lf-bns .section-title,.lf-bns .textbanner-text,.lf-bns .js-banners-title{display:none!important}'+
'.lf-bns .lf-bn{position:relative;border-radius:16px;overflow:hidden;transition:transform .5s cubic-bezier(.2,.8,.2,1),box-shadow .5s;box-shadow:0 20px 40px -30px rgba(0,0,0,.6);will-change:transform}'+
'.lf-bns .lf-bn:hover{box-shadow:0 30px 50px -28px rgba(0,0,0,.7)}'+
'.lf-bns .lf-bn img{animation:lfbkb 14s ease-in-out infinite alternate;animation-delay:var(--d)}'+
'@keyframes lfbkb{from{transform:scale(1)}to{transform:scale(1.07)}}'+
'.lf-bns .lf-fr{position:absolute;inset:10px;border:1px solid rgba(230,207,152,.75);border-radius:9px;pointer-events:none;z-index:2}'+
'.lf-bns .lf-sh{position:absolute;top:0;bottom:0;left:-40%;width:30%;z-index:2;background:linear-gradient(100deg,transparent,rgba(255,240,205,.35),transparent);transform:skewX(-18deg);animation:lfbsh 6.5s ease-in-out infinite;animation-delay:var(--d);pointer-events:none}'+
'@keyframes lfbsh{0%,70%{left:-40%}100%{left:140%}}');
})})();
