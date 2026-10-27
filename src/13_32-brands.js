/* LF Impoorts | módulo 32-brands */
(function(){LF.add('brands',function(){
var s=LF.$('.section-brands-home');if(!s||s.dataset.lf)return;var imgs=LF.$$('img',s);if(!imgs.length)return;s.dataset.lf=1;
var srcs=[];imgs.forEach(function(i){var u=LF.imgOf(i);if(u&&srcs.indexOf(u)<0)srcs.push(u)});
var w=document.createElement('div');w.id='lf-br';
w.innerHTML='<div class="bx"><div class="ed"><h3>Marcas que você ama</h3></div><div class="gd">'+srcs.map(function(){return '<span class="cl"><span class="lg"></span></span>'}).join('')+'</div></div>';
s.classList.add('lf-br-host');s.appendChild(w);
var cells=LF.$$('.lg',w);
srcs.forEach(function(u,k){var im=new Image();im.crossOrigin='anonymous';im.onload=function(){try{var ratio=Math.min(1,320/Math.max(im.naturalWidth,im.naturalHeight));var W=Math.max(1,Math.round(im.naturalWidth*ratio)),H=Math.max(1,Math.round(im.naturalHeight*ratio)),cv=document.createElement('canvas');cv.width=W;cv.height=H;var x=cv.getContext('2d');x.drawImage(im,0,0,W,H);var d=x.getImageData(0,0,W,H),p=d.data,minX=W,minY=H,maxX=0,maxY=0;for(var i=0;i<p.length;i+=4){var l=(p[i]+p[i+1]+p[i+2])/3;var a=p[i+3]*(1-Math.max(0,(l-200))/55);if(l>235)a=0;p[i]=p[i+1]=p[i+2]=0;p[i+3]=Math.max(0,Math.min(255,a));if(p[i+3]>20){var px=(i/4)%W,py=Math.floor(i/4/W);if(px<minX)minX=px;if(px>maxX)maxX=px;if(py<minY)minY=py;if(py>maxY)maxY=py}}x.putImageData(d,0,0);if(maxX<=minX){return}var cw=maxX-minX+1,ch=maxY-minY+1,c2=document.createElement('canvas');c2.width=cw;c2.height=ch;c2.getContext('2d').drawImage(cv,minX,minY,cw,ch,0,0,cw,ch);var url=c2.toDataURL('image/png');var r=cw/ch;var el=cells[k];var bw=r>2.6?132:r>1.6?112:r>0.9?84:58;el.style.width=bw+'px';el.style.height=Math.min(64,bw/r)+'px';el.style.webkitMaskImage='url('+url+')';el.style.maskImage='url('+url+')'}catch(e){cells[k].style.background='none';cells[k].innerHTML='<img src="'+u+'" style="max-width:110px;max-height:60px;mix-blend-mode:multiply">'}};im.src=u});

/* Read all logos from the theme; no hardcoded list or fixed brand count. */
var group=w.querySelector('.gd'),track=document.createElement('div'),view=document.createElement('div');
track.className='lf-brand-track';view.className='lf-brand-window';group.before(view);view.appendChild(track);track.appendChild(group);
var motion=window.matchMedia('(prefers-reduced-motion: reduce)'),animation,mirror,timer,paused=false;
var loop=function(){
 if(animation)animation.cancel();if(mirror)mirror.remove();
 var width=group.getBoundingClientRect().width;if(!width)return;
 // Repeat short lists until one group covers the viewport, including future
 // stores configured with only one or two brand images.
 track.querySelectorAll('.lf-brand-extra').forEach(function(n){n.remove()});
 var copies=Math.max(1,Math.ceil(view.clientWidth/width)),distance=width*copies;
 for(var j=1;j<copies;j++){var extra=group.cloneNode(true);extra.classList.add('lf-brand-extra');extra.setAttribute('aria-hidden','true');extra.inert=true;track.appendChild(extra)}
 mirror=document.createElement('div');mirror.className='lf-brand-mirror';mirror.setAttribute('aria-hidden','true');mirror.inert=true;
 for(var k=0;k<copies;k++)mirror.appendChild(group.cloneNode(true));track.appendChild(mirror);
 if(!motion.matches&&track.animate){animation=track.animate([{transform:'translateX(0)'},{transform:'translateX(-'+distance+'px)'}],{duration:distance/28*1000,easing:'linear',iterations:Infinity});if(paused)animation.pause()}
};
var observer=new MutationObserver(function(){clearTimeout(timer);timer=setTimeout(loop,100)});observer.observe(group,{childList:true,subtree:true,attributes:true});
view.addEventListener('pointerenter',function(){paused=true;if(animation)animation.pause()});view.addEventListener('pointerleave',function(){paused=false;if(animation)animation.play()});
if(window.ResizeObserver)new ResizeObserver(loop).observe(view);else window.addEventListener('resize',loop);
if(motion.addEventListener)motion.addEventListener('change',loop);
LF.css('lf-br-css','.lf-br-host{background:#faf7f2!important;padding:80px 0!important;margin:0!important}.lf-br-host>*:not(#lf-br){display:none!important}'+
'#lf-br{font-family:'+LF.BF+'}#lf-br .bx{max-width:1150px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:330px 1fr;gap:60px;align-items:center}'+
'#lf-br small{display:flex;align-items:center;gap:12px;font-size:10.5px;letter-spacing:.3em;text-transform:uppercase;color:#a8843f;margin-bottom:16px}#lf-br small:before{content:"";width:26px;height:1px;background:#c9a961}'+
'#lf-br h3{font-family:'+LF.HF+';font-weight:400;font-size:38px;line-height:1.15;color:#141210;margin:0 0 18px}#lf-br h3 em{font-style:normal;color:#a8843f}'+
'#lf-br p{font-size:14px;line-height:1.7;color:#6f685f;margin:0}'+
'#lf-br .gd{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(20,18,16,.08);border-left:1px solid rgba(20,18,16,.08)}'+
'#lf-br .cl{height:112px;display:flex;align-items:center;justify-content:center;border-right:1px solid rgba(20,18,16,.08);border-bottom:1px solid rgba(20,18,16,.08);transition:background .4s}'+
'#lf-br .cl:hover{background:#fff}'+
'#lf-br .lg{display:block;width:90px;height:50px;background:#2b2724;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;transition:background .4s,transform .4s}'+
'#lf-br .cl:hover .lg{background:linear-gradient(120deg,#a8803c,#e2c98d 50%,#a8803c);transform:scale(1.05)}'+
'@media(min-width:1000px){#lf-br .gd{grid-template-columns:repeat(4,1fr)}}'+
'@media(max-width:860px){#lf-br .bx{grid-template-columns:1fr;gap:30px;text-align:center}#lf-br small{justify-content:center}#lf-br h3{font-size:28px}.lf-br-host{padding:50px 0!important}#lf-br .bx{padding:0 16px}#lf-br .cl{height:84px}}');

LF.css('lf-br-marquee-css',
'.lf-br-host{padding:38px 0!important;overflow:hidden}#lf-br .bx{display:flex;flex-direction:column;gap:23px;width:100%;max-width:1320px;box-sizing:border-box}'+
'#lf-br .ed{width:100%;text-align:center}#lf-br h3{font-size:23px;line-height:1.3;font-weight:400;letter-spacing:.025em;margin:0}'+
'#lf-br .lf-brand-window{width:100%;overflow:hidden;mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}'+
'#lf-br .lf-brand-track,#lf-br .lf-brand-mirror{display:flex;width:max-content;flex:none}#lf-br .lf-brand-track{will-change:transform}'+
'#lf-br .gd{display:flex;flex:none;width:max-content;gap:0;border:0}#lf-br .cl{flex:0 0 154px;width:154px;height:68px;padding:8px 32px;box-sizing:border-box;border:0;background:transparent!important}'+
'#lf-br .lg{transform:scale(.68);opacity:.8;flex:none}#lf-br .cl:hover .lg{transform:scale(.68);opacity:1;background:#a8843f}'+
'@media(max-width:600px){.lf-br-host{padding:36px 0!important}#lf-br .bx{gap:20px;padding:0 16px}#lf-br h3{font-size:22px}#lf-br .cl{flex-basis:128px;width:128px;height:62px;padding:8px 20px}}'+
'@media(prefers-reduced-motion:reduce){#lf-br .lf-brand-window{overflow-x:auto}#lf-br .lf-brand-extra,#lf-br .lf-brand-mirror{display:none}}');
requestAnimationFrame(loop);

})})();
