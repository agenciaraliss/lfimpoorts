/* LF Impoorts | módulo 32-brands */
(function(){LF.add('brands',function(){
var s=LF.$('.section-brands-home');if(!s||s.dataset.lf)return;var imgs=LF.$$('img',s);if(!imgs.length)return;s.dataset.lf=1;
var srcs=[];imgs.forEach(function(i){var u=LF.imgOf(i);if(u&&srcs.indexOf(u)<0)srcs.push(u)});
var w=document.createElement('div');w.id='lf-br';
w.innerHTML='<div class="bx"><div class="ed"><small>Curadoria</small><h3>As maisons que você ama, <em>em um só lugar.</em></h3><p>Das grandes maisons clássicas às árabes, uma curadoria que não para de crescer.</p></div><div class="gd">'+srcs.map(function(){return '<span class="cl"><span class="lg"></span></span>'}).join('')+'</div></div>';
s.classList.add('lf-br-host');s.appendChild(w);
var cells=LF.$$('.lg',w);
srcs.forEach(function(u,k){var im=new Image();im.crossOrigin='anonymous';im.onload=function(){try{var W=im.naturalWidth,H=im.naturalHeight,cv=document.createElement('canvas');cv.width=W;cv.height=H;var x=cv.getContext('2d');x.drawImage(im,0,0);var d=x.getImageData(0,0,W,H),p=d.data,minX=W,minY=H,maxX=0,maxY=0;for(var i=0;i<p.length;i+=4){var l=(p[i]+p[i+1]+p[i+2])/3;var a=p[i+3]*(1-Math.max(0,(l-200))/55);if(l>235)a=0;p[i]=p[i+1]=p[i+2]=0;p[i+3]=Math.max(0,Math.min(255,a));if(p[i+3]>20){var px=(i/4)%W,py=Math.floor(i/4/W);if(px<minX)minX=px;if(px>maxX)maxX=px;if(py<minY)minY=py;if(py>maxY)maxY=py}}x.putImageData(d,0,0);if(maxX<=minX){return}var cw=maxX-minX+1,ch=maxY-minY+1,c2=document.createElement('canvas');c2.width=cw;c2.height=ch;c2.getContext('2d').drawImage(cv,minX,minY,cw,ch,0,0,cw,ch);var url=c2.toDataURL('image/png');var r=cw/ch;var el=cells[k];var bw=r>2.6?132:r>1.6?112:r>0.9?84:58;el.style.width=bw+'px';el.style.height=Math.min(64,bw/r)+'px';el.style.webkitMaskImage='url('+url+')';el.style.maskImage='url('+url+')'}catch(e){cells[k].style.background='none';cells[k].innerHTML='<img src="'+u+'" style="max-width:110px;max-height:60px;mix-blend-mode:multiply">'}};im.src=u});
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
})})();
