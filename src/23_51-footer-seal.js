/* LF Impoorts | módulo 51-footer-seal */
(function(){LF.add('footer-seal',function(){
var ft=LF.$('#lf-ft');if(!ft||ft.querySelector('.lf-seal-ft'))return;
var segs=LF.$$('footer .custom-seal a, footer .custom-seal').filter(function(e){return !e.closest('#lf-ft')});var box=segs[0];if(!box)return;
var img=box.querySelector('img');var u=LF.imgOf(img);if(!u)return;
LF.$$('#lf-ft .lf3-pi img').forEach(function(i){if(i.getAttribute('src')===u)i.remove()});
var a=box.closest('a')||box.querySelector('a');var html='<img src="'+u+'" alt="'+LF.esc(img.alt||'Selo de segurança')+'" loading="lazy">';
var li=document.createElement('li');li.className='lf-seal-ft';li.innerHTML=a?'<a href="'+a.getAttribute('href')+'" target="_blank" rel="noopener">'+html+'</a>':html;
var ul=ft.querySelector('.lf3-ct ul');if(ul)ul.appendChild(li);
LF.css('lf-ftseal-css','#lf-ft .lf-seal-ft{margin-top:8px}#lf-ft .lf-seal-ft img{display:block;height:46px;width:auto;border-radius:6px}@media(max-width:767px){#lf-ft .lf-seal-ft{flex-basis:100%}#lf-ft .lf-seal-ft img{height:40px}}');
})})();
