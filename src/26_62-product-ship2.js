/* LF Impoorts | módulo 62-product-ship2 */
(function(){LF.add('product-ship2',function(){
var n=LF.$('#lf-pp .shn');if(!n||n.querySelector('.lfz'))return;
var nf=LF.$$('.js-product-detail .js-shipping-calculator-form').filter(function(f){return !f.closest('#lf-pp')&&f.querySelector('input[name=zipcode]')})[0];if(!nf){n.closest('.shp').remove();return}
var root=nf.closest('[data-store="shipping-calculator"]')||nf.parentElement.parentElement;var ni=nf.querySelector('input[name=zipcode]'),nb=nf.querySelector('.js-calculate-shipping');
var saved=(root.querySelector('.js-shipping-calculator-current-zip')||{}).textContent||ni.value||'';
var z=document.createElement('div');z.className='lfz';z.innerHTML='<div class="row1"><input type="text" inputmode="numeric" maxlength="9" placeholder="Digite seu CEP" aria-label="CEP"><button type="button">Calcular</button></div><a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener">Não sei meu CEP</a><div class="lfres"></div>';
n.innerHTML='';n.appendChild(z);var i=z.querySelector('input'),out=z.querySelector('.lfres');var fmt=function(v){v=String(v).replace(/\D/g,'').slice(0,8);return v.length>5?v.slice(0,5)+'-'+v.slice(5):v};i.value=fmt(saved);
i.addEventListener('input',function(){i.value=fmt(i.value)});
var resp=root.querySelector('.js-shipping-calculator-response'),spin=root.querySelector('.js-shipping-calculator-spinner');
var mirror=function(){var busy=spin&&getComputedStyle(spin).display!=='none'&&!(resp&&resp.textContent.trim());if(busy){out.innerHTML='<p class="ld">Calculando o frete…</p>';return}if(resp&&resp.textContent.trim()){out.innerHTML=resp.innerHTML;LF.$$('input,label',out).forEach(function(x){x.removeAttribute('id');x.removeAttribute('for')})}};
if(resp)new MutationObserver(mirror).observe(resp,{childList:true,subtree:true,characterData:true,attributes:true});if(spin)new MutationObserver(mirror).observe(spin,{attributes:true});
var go=function(){var v=i.value.replace(/\D/g,'');if(v.length!==8){i.focus();z.classList.add('err');return}z.classList.remove('err');out.innerHTML='<p class="ld">Calculando o frete…</p>';var ch=root.querySelector('.js-shipping-calculator-change-zipcode');if(ch)ch.click();ni.value=v;ni.dispatchEvent(new Event('input',{bubbles:true}));ni.dispatchEvent(new Event('keyup',{bubbles:true}));if(nb)nb.click();setTimeout(mirror,2500);setTimeout(mirror,5000)};
z.querySelector('button').onclick=go;i.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();go()}});
mirror();
LF.css('lf-ppship2-css','#lf-pp .lfz .row1{display:flex;gap:8px}#lf-pp .lfz input{flex:1;min-width:0;height:46px;padding:0 18px;border-radius:30px;border:1px solid rgba(20,18,16,.14)!important;background:#faf8f5!important;font:inherit;font-size:14px;outline:0;box-shadow:none!important}#lf-pp .lfz input:focus{border-color:#c9a961!important}#lf-pp .lfz.err input{border-color:#c0392b!important}'+
'#lf-pp .lfz button{height:46px!important;padding:0 24px!important;border-radius:30px!important;border:1px solid #141210!important;background:#141210!important;color:#f5f0e7!important;font:inherit;font-size:10.5px!important;letter-spacing:.18em!important;text-transform:uppercase!important;cursor:pointer}#lf-pp .lfz button:hover{color:#e6cf98!important}'+
'#lf-pp .lfz>a{display:inline-block;margin-top:8px;font-size:12px;color:#8a837a!important;text-decoration:none!important}'+
'#lf-pp .lfres{margin-top:10px;font-size:13px;color:#3d3730}#lf-pp .lfres .ld{color:#a8843f;font-size:12.5px;margin:6px 0}#lf-pp .lfres ul{list-style:none;padding:0;margin:0}#lf-pp .lfres li{padding:10px 14px;border:1px solid rgba(20,18,16,.08);border-radius:12px;margin-bottom:8px;background:#faf8f5}#lf-pp .lfres input[type=radio]{display:none}#lf-pp .lfres .btn,#lf-pp .lfres button{display:none!important}');
})})();
