/* LF Impoorts | módulo 41-atacado-qs */
(function(){
LF.cfg=LF.cfg||{};LF.cfg.qsImg=LF.cfg.qsImg||'https://i.ibb.co/PG2sWyMp/Whats-App-Image-2026-10-09-at-14-36-47.jpg';
LF.add('quemsomos',function(){if(LF.tpl()!=='home'||LF.$('#lf-qs'))return;var HF=LF.HF;var foot=LF.$('footer');if(!foot)return;
var sec=document.createElement('section');sec.id='lf-qs';
sec.innerHTML='<div class="qi"><div class="qf"><div class="qa"><img alt="Fundadora" referrerpolicy="no-referrer" src="'+LF.cfg.qsImg+'"></div><span class="qo"></span></div><div class="qt"><small>Quem somos</small><h2 class="qh">Um sonho que virou a sua perfumaria</h2><p class="qp"></p><blockquote class="qq"></blockquote><ol class="ql"></ol><a class="qb" href="/quem-somos/"><span>Conheça nossa história</span>'+LF.ico.arr+'</a></div></div>';
foot.parentNode.insertBefore(sec,foot);
LF.fetchDoc('/quem-somos/').then(function(d){var c=d.querySelector('.user-content')||d.querySelector('main');if(!c){sec.remove();return}var pi=c.querySelector('img');if(pi)sec.querySelector('img').src=LF.imgOf(pi);
 var ps=(c.innerText||c.textContent).split(/\n+/).map(function(t){return t.trim()}).filter(function(t){return t.length>30});var sen=ps.join(' ').match(/[^.!?]+[.!?]+/g)||[];
 sec.querySelector('.qp').textContent=ps[0]||'';var q=sen.filter(function(t){return /experiência|cuidado|diferencial/i.test(t)})[0];var qq=sec.querySelector('.qq');if(q)qq.textContent='“'+q.trim().replace(/\.$/,'')+'”';else qq.remove();
 var yrs=((c.textContent.match(/\b(19|20)\d{2}\b/g))||[]).filter(function(v,i,a){return a.indexOf(v)===i}).sort();
 var lab=function(y){var t=sen.filter(function(s){return s.indexOf(y)>-1})[0]||'';if(/site|e-?commerce|online/i.test(t))return 'Nosso site no ar';if(/surgiu|ideia|idéia|nasceu|começ/i.test(t))return 'Nasce a LF';return 'Nossa história'};
 var ol=sec.querySelector('.ql');if(yrs.length)ol.innerHTML=yrs.map(function(y){return '<li><b>'+y+'</b><span>'+lab(y)+'</span></li>'}).join('')+'<li><b>Hoje</b><span>Evoluindo todos os dias</span></li>';else ol.remove()});
LF.css('lf-qs-css','#lf-qs{background:linear-gradient(180deg,#fff 0%,#f7f3ed 100%);padding:90px 24px 96px;overflow:hidden;font-family:'+LF.BF+'}#lf-qs *{box-sizing:border-box}'+
'#lf-qs .qi{max-width:1060px;margin:0 auto;display:grid;grid-template-columns:420px 1fr;gap:90px;align-items:center}'+
'#lf-qs .qf{position:relative;width:380px;height:480px;margin-left:20px}'+
'#lf-qs .qa{position:relative;z-index:2;width:100%;height:100%;border-radius:200px 200px 18px 18px;overflow:hidden;box-shadow:0 40px 70px -35px rgba(40,30,15,.45);background:#eee}'+
'#lf-qs .qa img{width:100%;height:100%;object-fit:cover;object-position:50% 38%;display:block}'+
'#lf-qs .qo{position:absolute;z-index:1;top:-16px;left:-16px;right:16px;bottom:16px;border:1px solid rgba(184,146,74,.55);border-radius:216px 216px 22px 22px}'+
'#lf-qs .qt small{display:flex;align-items:center;gap:12px;font-size:10.5px;letter-spacing:.3em;text-transform:uppercase;color:#a8843f;margin-bottom:18px}#lf-qs .qt small:before{content:"";width:28px;height:1px;background:#c9a961}'+
'#lf-qs .qh{font-family:'+HF+';font-weight:400;font-size:38px;line-height:1.15;color:#141210;margin:0 0 22px;text-align:left;text-transform:none}'+
'#lf-qs .qp{font-size:14.5px;line-height:1.75;color:#5e5850;margin:0 0 22px;max-width:520px}'+
'#lf-qs .qq{margin:0 0 30px;padding:2px 0 2px 20px;border-left:1px solid #c9a961;font-family:'+HF+';font-size:17px;line-height:1.5;color:#2b2621;font-style:italic;max-width:500px}'+
'#lf-qs .ql{list-style:none;margin:0 0 34px;padding:0;display:flex;max-width:520px;position:relative}#lf-qs .ql:before{content:"";position:absolute;left:0;right:0;top:5px;height:1px;background:linear-gradient(90deg,#c9a961,rgba(201,169,97,.25))}'+
'#lf-qs .ql li{flex:1;position:relative;padding-top:22px}#lf-qs .ql li:before{content:"";position:absolute;top:1px;left:0;width:9px;height:9px;background:#f7f3ed;border:1px solid #b8924a;transform:rotate(45deg)}#lf-qs .ql li:last-child:before{background:#b8924a}'+
'#lf-qs .ql b{display:block;font-family:'+HF+';font-weight:400;font-size:20px;color:#141210;margin-bottom:4px}#lf-qs .ql span{font-size:12px;color:#7a736a;line-height:1.4}'+
'#lf-qs .qb{display:inline-flex;align-items:center;gap:12px;height:48px;padding:0 26px 0 30px;border-radius:30px;background:#141210;color:#f5f0e7!important;text-decoration:none!important;font-size:11px;font-weight:500;letter-spacing:.2em;text-transform:uppercase;transition:background .4s,transform .4s}'+
'#lf-qs .qb svg{width:18px;height:18px;fill:none;stroke:#d9bd7c;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;transition:transform .35s}#lf-qs .qb:hover{background:#2a241c;transform:translateY(-2px)}#lf-qs .qb:hover svg{transform:translateX(4px)}'+
'@media(max-width:960px){#lf-qs .qi{grid-template-columns:1fr;gap:56px;justify-items:center}#lf-qs .qt{max-width:560px;display:flex;flex-direction:column;align-items:center;text-align:center}#lf-qs .qt small{justify-content:center}#lf-qs .qh{text-align:center}#lf-qs .qq{border-left:0;padding:0;text-align:center}#lf-qs .ql{width:100%;text-align:left}}'+
'@media(max-width:560px){#lf-qs{padding:64px 22px 70px}#lf-qs .qf{width:280px;height:360px;margin-left:16px}#lf-qs .qh{font-size:29px}#lf-qs .ql b{font-size:17px}}');
});
LF.add('atacado',function(){if(LF.tpl()!=='home'||LF.$('#lf-at'))return;var HF=LF.HF;var qs=LF.$('#lf-qs')||LF.$('footer');if(!qs)return;
var ba=LF.$$('.js-section-banner-home a').filter(function(a){return /vendizap|atacad/i.test(a.href+' '+(a.textContent||''))})[0];var cat=ba?ba.href:'';var catOk=cat&&!/app\.vendizap\.com\/(vitrine|login)/.test(cat);
var wa=LF.waLink('Olá! Tenho interesse em comprar no atacado da LF Impoorts 🤍');
var sec=document.createElement('section');sec.id='lf-at';
sec.innerHTML='<div class="tw"><span class="bg" aria-hidden="true">Atacado</span><div class="tx"><small>Atacado LF</small><h2>Revenda as fragrâncias <br>que todo mundo ama</h2><p>Monte seu estoque com as marcas mais desejadas do momento. Fale com a gente e receba as condições especiais para revenda.</p><div class="tb">'+(wa?'<a class="b1" href="'+wa+'" target="_blank" rel="noopener">'+LF.ico.wa+'Quero revender</a>':'')+(catOk?'<a class="b2" href="'+cat+'" target="_blank" rel="noopener">Ver catálogo de atacado'+LF.ico.arr+'</a>':'')+'</div></div>'+
'<ol class="st"><li><span>'+LF.ico.wa+'</span><b>Fale com a gente</b><em>Chame no WhatsApp e conte o que você procura.</em></li><li><span><svg viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z"/><path d="M9 10h6M9 14h6M9 18h3"/></svg></span><b>Receba as condições</b><em>Enviamos os produtos disponíveis e os valores de atacado.</em></li><li><span>'+LF.ico.box+'</span><b>Monte seu pedido</b><em>Escolha suas fragrâncias e receba em todo o Brasil.</em></li></ol></div>';
qs.parentNode.insertBefore(sec,qs);
LF.css('lf-at-css','#lf-at{background:#fff;padding:80px 24px 10px;font-family:'+LF.BF+'}#lf-at *{box-sizing:border-box}'+
'#lf-at .tw{position:relative;max-width:1120px;margin:0 auto;border-radius:26px;overflow:hidden;background:radial-gradient(70% 90% at 50% 0%,rgba(201,169,97,.18),transparent 60%),#0f0e0d;box-shadow:0 40px 80px -40px rgba(0,0,0,.55);text-align:center;padding:78px 30px 0}'+
'#lf-at .tw:after{content:"";position:absolute;inset:12px;border:1px solid rgba(217,189,124,.2);border-radius:18px;pointer-events:none}'+
'#lf-at .bg{position:absolute;left:50%;top:26px;transform:translateX(-50%);font-family:'+HF+';font-size:190px;line-height:1;color:transparent;-webkit-text-stroke:1px rgba(217,189,124,.13);white-space:nowrap;pointer-events:none;user-select:none}'+
'#lf-at .tx{position:relative;max-width:640px;margin:0 auto}'+
'#lf-at small{display:inline-flex;align-items:center;gap:14px;font-size:10.5px;letter-spacing:.32em;text-transform:uppercase;color:#d9bd7c;margin-bottom:20px}#lf-at small:before,#lf-at small:after{content:"";width:28px;height:1px;background:#c9a961}'+
'#lf-at h2{font-family:'+HF+';font-weight:400;font-size:40px;line-height:1.15;color:#f5f0e7;margin:0 0 18px;text-transform:none;text-align:center}'+
'#lf-at p{font-size:14.5px;line-height:1.7;color:#a59e93;margin:0 auto 32px;max-width:540px}'+
'#lf-at .tb{display:flex;justify-content:center;flex-wrap:wrap;gap:12px}'+
'#lf-at .tb a{display:inline-flex;align-items:center;gap:10px;height:50px;padding:0 28px;border-radius:30px;font-size:10.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;text-decoration:none!important;white-space:nowrap;transition:all .4s}'+
'#lf-at .tb svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}'+
'#lf-at .b1{background:linear-gradient(120deg,#b8924a,#e6cf98 50%,#b8924a);background-size:200% 100%;color:#141210!important}#lf-at .b1:hover{background-position:100% 0}'+
'#lf-at .b2{border:1px solid rgba(255,255,255,.22);color:#f5f0e7!important}#lf-at .b2:hover{border-color:#d9bd7c;color:#e6cf98!important}'+
'#lf-at .st{position:relative;list-style:none;margin:64px -30px 0;padding:40px 60px 48px;border-top:1px solid rgba(255,255,255,.07);display:grid;grid-template-columns:repeat(3,1fr);gap:40px;background:linear-gradient(180deg,rgba(255,255,255,.02),transparent)}'+
'#lf-at .st:before{content:"";position:absolute;top:66px;left:calc(16.66% + 40px);right:calc(16.66% + 40px);height:1px;background:linear-gradient(90deg,rgba(217,189,124,.5),rgba(217,189,124,.15),rgba(217,189,124,.5))}'+
'#lf-at .st li{position:relative;display:flex;flex-direction:column;align-items:center;text-align:center}'+
'#lf-at .st span{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#0f0e0d;border:1px solid rgba(217,189,124,.5);margin-bottom:18px;position:relative;z-index:1;transition:all .5s}#lf-at .st span:after{content:"";position:absolute;inset:-6px;border-radius:50%;border:1px solid rgba(217,189,124,.12)}'+
'#lf-at .st svg{width:21px;height:21px;fill:none;stroke:#d9bd7c;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round}#lf-at .st li:hover span{background:linear-gradient(135deg,#b8924a,#e6cf98);border-color:transparent}#lf-at .st li:hover svg{stroke:#141210}'+
'#lf-at .st b{font-family:'+HF+';font-weight:400;font-size:19px;color:#f5f0e7;margin-bottom:8px}#lf-at .st em{font-style:normal;font-size:12.5px;line-height:1.55;color:#8f897f;max-width:230px}'+
'@media(max-width:767px){#lf-at{padding:40px 14px 0}#lf-at .tw{padding:36px 20px 0;border-radius:20px}#lf-at .tw:after{inset:8px;border-radius:14px}#lf-at .bg{font-size:72px;top:14px}#lf-at small{margin-bottom:12px;font-size:9.5px}#lf-at h2{font-size:24px;margin-bottom:10px}#lf-at h2 br{display:none}#lf-at p{font-size:13px;margin-bottom:20px}#lf-at .tb a{height:46px}'+
'#lf-at .st{gap:8px;margin:28px -20px 0;padding:20px 12px 24px}#lf-at .st:before{top:39px;left:calc(16.66% + 20px);right:calc(16.66% + 20px)}#lf-at .st span{width:38px;height:38px;margin-bottom:10px}#lf-at .st span:after{inset:-4px}#lf-at .st svg{width:16px;height:16px}#lf-at .st b{font-size:13px;line-height:1.25;margin:0}#lf-at .st em{display:none}}');
});
})();
