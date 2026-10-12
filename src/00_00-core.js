/* LF Impoorts | módulo 00-core */
(function(){
if(window.LF&&window.LF.__booted)return;
var LF=window.LF={};LF.__booted=true;
LF.HF="Marcellus, serif";LF.BF="'Libre Franklin', sans-serif";
LF.$=function(s,r){return (r||document).querySelector(s)};
LF.$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
LF.css=function(id,txt){var s=document.getElementById(id);if(!s){s=document.createElement('style');s.id=id;document.head.appendChild(s);}s.textContent=txt;return s};
LF.cap=function(t){return String(t||'').toLowerCase().replace(/(^|[\s\/(\-])([a-zà-ú])/g,function(m,a,b){return a+b.toUpperCase()}).replace(/\b(De|Do|Da|Dos|Das|E|Em|Para|Com|Os|As)\b/g,function(w){return w.toLowerCase()}).replace(/^./,function(c){return c.toUpperCase()}).replace(/'S\b/g,"'s").replace(/\bBbw\b/g,'BBW').replace(/\bVip\b/g,'VIP').replace(/\bYsl\b/g,'YSL')};
LF.brl=function(n){return 'R$'+Number(n).toFixed(2).replace('.',',').replace(/\B(?=(\d{3})+(?!\d),)/g,'.')};
LF.num=function(s){if(s==null)return 0;s=String(s).replace(/[^\d,\.]/g,'');if(s.indexOf(',')>-1)s=s.replace(/\./g,'').replace(',','.');return parseFloat(s)||0};
LF.esc=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
LF.tpl=function(){var b=document.body.className.match(/template-([\w-]+)/);return b?b[1]:''};
LF.mobile=function(){return window.innerWidth<768};
LF.fetchDoc=function(url){LF._dc=LF._dc||{};if(!LF._dc[url]){LF._dc[url]=fetch(url,{credentials:'same-origin'}).then(function(r){return r.text()}).then(function(h){return new DOMParser().parseFromString(h,'text/html')});}return LF._dc[url]};
LF.imgOf=function(img,size){if(!img)return '';var ss=img.getAttribute('data-srcset')||img.getAttribute('srcset')||'';var list=ss?ss.split(',').map(function(x){return x.trim().split(' ')[0]}).filter(Boolean):[];var u='';if(list.length){if(size){u=list.filter(function(x){return x.indexOf('-'+size+'-')>-1})[0]||''}u=u||list[list.length-1]}else{u=img.getAttribute('data-src')||img.getAttribute('src')||''}if(/^data:/.test(u))u='';if(u&&u.indexOf('//')===0)u='https:'+u;return u};
LF.wa=function(){var a=LF.$('a.btn-whatsapp')||LF.$('a[href*="wa.me"]');var m=a&&a.getAttribute('href').match(/(\d{10,13})/);return m?m[1]:''};
LF.waLink=function(msg){var n=LF.wa();return n?('https://wa.me/'+n+(msg?'?text='+encodeURIComponent(msg):'')):''};
LF.logoUrl=function(){var i=LF.$('header.js-head-main .js-logo-container img')||LF.$('.logo-img-container img');return LF.imgOf(i)};
LF.storeName=function(){var i=LF.$('header.js-head-main .js-logo-container img');return (i&&i.alt)||'Início'};
LF.menu=function(){if(LF._menu)return LF._menu;var lis=LF.$$('.js-nav-desktop-list > li, .nav-desktop-list > li');if(!lis.length)lis=LF.$$('#nav-hamburger .nav-list > li');var seen={};LF._menu=lis.map(function(li){var a=li.querySelector('a');if(!a)return null;var t=a.textContent.trim();var subs=LF.$$('ul a',li).filter(function(x){return x.textContent.trim().toUpperCase()!==t.toUpperCase()}).map(function(x){return{t:LF.cap(x.textContent.trim()),h:x.getAttribute('href')}});return{t:LF.cap(t),h:a.getAttribute('href'),subs:subs}}).filter(function(m){if(!m||seen[m.h])return false;seen[m.h]=1;return true});return LF._menu};
LF.path=function(u){try{return new URL(u,location.origin).pathname.replace(/\/page\/\d+\/?$/,'/').replace(/\/?$/,'/')}catch(e){return ''}};
LF.ico={
 search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/></svg>',
 user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M4.8 20.2c1.3-3.7 4-5.6 7.2-5.6s5.9 1.9 7.2 5.6"/></svg>',
 bag:'<svg viewBox="0 0 24 24"><path d="M5.2 8.2h13.6l-.9 11.3a1.6 1.6 0 0 1-1.6 1.5H7.7a1.6 1.6 0 0 1-1.6-1.5z"/><path d="M8.8 10.4V7a3.2 3.2 0 0 1 6.4 0v3.4"/></svg>',
 bow:'<svg viewBox="0 0 24 24"><path d="M5.2 8.6h13.6l-.9 11a1.6 1.6 0 0 1-1.6 1.4H7.7a1.6 1.6 0 0 1-1.6-1.4z"/><path d="M12 8.6c-1.6-2.6-4.4-3.4-4.4-1.6 0 1.3 2.2 1.6 4.4 1.6zM12 8.6c1.6-2.6 4.4-3.4 4.4-1.6 0 1.3-2.2 1.6-4.4 1.6z"/></svg>',
 x:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
 arr:'<svg viewBox="0 0 24 24"><path d="M5 12h13M13 7l5 5-5 5"/></svg>',
 chev:'<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
 wa:'<svg viewBox="0 0 24 24"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/></svg>',
 mail:'<svg viewBox="0 0 24 24"><rect x="3.5" y="6" width="17" height="12" rx="1.5"/><path d="M4 7l8 6 8-6"/></svg>',
 truck:'<svg viewBox="0 0 24 24"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.5"/><circle cx="17" cy="17.5" r="1.5"/></svg>',
 box:'<svg viewBox="0 0 24 24"><path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v8"/></svg>',
 check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
 bell:'<svg viewBox="0 0 24 24"><path d="M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5H5z"/><path d="M10 20.2a2.2 2.2 0 0 0 4 0"/></svg>'
};
LF.mods=[];LF.add=function(name,fn){LF.mods.push({n:name,f:fn})};
LF.run=function(){var lu=LF.logoUrl();if(lu)document.documentElement.style.setProperty('--lf-logo','url("'+lu+'")');LF.mods.forEach(function(m){if(m.done)return;try{m.f();m.done=1}catch(e){console.warn('[LF] '+m.n,e)}})};
LF.liveSearch=function(inp,box){var tm,ctr;inp.addEventListener('input',function(){clearTimeout(tm);var q=inp.value.trim();if(q.length<2){box.innerHTML='';box.classList.remove('on');return}tm=setTimeout(function(){if(ctr)ctr.abort();ctr=window.AbortController?new AbortController():null;fetch('/search/?q='+encodeURIComponent(q),ctr?{signal:ctr.signal}:{}).then(function(r){return r.text()}).then(function(h){var d=new DOMParser().parseFromString(h,'text/html');var P=LF.$$('.js-item-product',d).slice(0,6).map(function(p){var i=p.querySelector('img.item-image-featured')||p.querySelector('img');var a=p.querySelector('a[href*="/produtos/"]');var n=((p.querySelector('.js-item-name')||{}).textContent||(i&&i.alt)||'').trim();if(!a||!n)return '';var pr=(p.querySelector('.js-price-display')||{}).textContent||'';return '<a href="'+a.getAttribute('href')+'"><img src="'+LF.imgOf(i,'240')+'" alt=""><div><b>'+LF.esc(n)+'</b><span>'+LF.esc(pr.trim())+'</span></div></a>'}).join('');box.innerHTML=P?P+'<a class="all" href="/search/?q='+encodeURIComponent(q)+'">Ver todos os resultados</a>':'<p>Nenhum perfume encontrado para “'+LF.esc(q)+'”.</p>';box.classList.add('on')}).catch(function(){})},280)})};
})();
