/* LF Impoorts | módulo 52-seal-clean */
(function(){LF.add('seal-clean',function(){
var im=LF.$('#lf-ft .lf-seal-ft img');if(!im||im.dataset.cl)return;im.dataset.cl=1;
var src=im.getAttribute('src');var t=new Image();t.crossOrigin='anonymous';
t.onload=function(){try{var W=t.naturalWidth,H=t.naturalHeight,c=document.createElement('canvas');c.width=W;c.height=H;var x=c.getContext('2d');x.drawImage(t,0,0);var d=x.getImageData(0,0,W,H),p=d.data;
 var cs=[[0,0],[W-1,0],[0,H-1],[W-1,H-1]].map(function(q){var i=(q[1]*W+q[0])*4;return[p[i],p[i+1],p[i+2]]});var br=Math.round(cs.reduce(function(a,b){return a+b[0]},0)/4),bg=Math.round(cs.reduce(function(a,b){return a+b[1]},0)/4),bb=Math.round(cs.reduce(function(a,b){return a+b[2]},0)/4);
 for(var i=0;i<p.length;i+=4){var dd=Math.abs(p[i]-br)+Math.abs(p[i+1]-bg)+Math.abs(p[i+2]-bb);if(dd<40)p[i+3]=0;else if(dd<90)p[i+3]=Math.round(p[i+3]*(dd-40)/50)}
 x.putImageData(d,0,0);im.src=c.toDataURL('image/png');im.classList.add('ok')}catch(e){im.classList.add('blend')}};
t.onerror=function(){im.classList.add('blend')};t.src=src;
LF.css('lf-sealcl-css','#lf-ft .lf-seal-ft img{background:transparent!important;border-radius:0!important}#lf-ft .lf-seal-ft img.blend{mix-blend-mode:screen}');
})})();
