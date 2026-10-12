/* LF Impoorts | módulo 05-preload */
(function(){LF.cfg=LF.cfg||{};var R={elas:'https://i.ibb.co/7xpQBN17/Luxury-Perfume-Trio-on-Golden-Gradient.png',eles:'https://i.ibb.co/qMSs8pj5/Luxury-Fragrances-in-Golden-Light.png'};LF.cfg.pe={};Object.keys(R).forEach(function(k){var c=null;try{c=localStorage.getItem('lf:img:'+k)}catch(e){}LF.cfg.pe[k]=c||R[k]})})();
