/* small helper for legal pages: logo placeholder + year */
(function(){var y=document.querySelectorAll("[data-year]");for(var i=0;i<y.length;i++)y[i].textContent=new Date().getFullYear();
var l=document.querySelector(".logo");if(l){var img=new Image();img.onload=function(){l.innerHTML="";l.appendChild(img)};img.src="images/logo.png";
l.innerHTML='<svg viewBox="0 0 64 64" width="40" height="40"><rect width="64" height="64" rx="16" fill="#111A2E"/><path d="M26 14h12v13l10 17a4 4 0 0 1-3.5 6h-25A4 4 0 0 1 16 44l10-17z" fill="none" stroke="#F1F5F9" stroke-width="2.4"/><path d="M20.4 38h23.2l3.6 6.2a2.4 2.4 0 0 1-2.1 3.6H18.9a2.4 2.4 0 0 1-2.1-3.6z" fill="#2DD4BF"/></svg>';}})();
