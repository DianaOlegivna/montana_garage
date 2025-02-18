import{S as l,N as a,K as c,a as d}from"./assets/vendor-B6aSHALP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();function h(){document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".mobile-menu"),o=document.querySelector(".burger-btn"),r=document.querySelector(".mobile-menu-close"),i=document.querySelectorAll(".menu-link-nav");function t(){n.classList.add("is-open")}function e(){n.classList.remove("is-open")}o.addEventListener("click",t),r.addEventListener("click",e),i.forEach(s=>{s.addEventListener("click",e)}),n.addEventListener("click",function(s){s.target.closest(".mobile-menu-container")||e()})})}function p(){document.querySelector(".circle-down").addEventListener("click",function(){document.querySelector("#photo").scrollIntoView({behavior:"smooth",block:"center"})})}function w(){document.querySelector(".paragraph").addEventListener("click",function(){const n=['<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#1da9d7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-dollar-sign"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#1da9d7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#1da9d7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-gauge"><path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"/><circle cx="12" cy="12" r="2"/><path d="M13.4 10.6 19 5"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#1da9d7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#1da9d7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-drill"><path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"/><path d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"/><path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"/><path d="M18 6h4"/><path d="m5 10-2 8"/><path d="m7 18 2-8"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#1da9d7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-euro"><path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#1fb7ea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-square"><path d="M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"/><path d="m14 7 3 3"/><path d="m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#1fb7ea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#227dc3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'],o=n[Math.floor(Math.random()*n.length)],r=event.clientX,i=event.clientY;for(let t=0;t<1;t++){const e=document.createElement("div");e.classList.add("flying-dollar"),e.innerHTML=o,document.body.appendChild(e);const s=r+(Math.random()*100-50),u=i;e.style.position="absolute",e.style.top=`${u}px`,e.style.left=`${s}px`,e.style.transition="transform 3s ease-out, opacity 3s ease-out",e.style.zIndex=9999,setTimeout(()=>{e.style.transform="translateY(-300px)",e.style.opacity=0},100),setTimeout(()=>{e.remove()},5e3)}})}function g(){new l(".about-swiper",{modules:[a,c],loop:!1,slidesPerView:1,navigation:{nextEl:".about-next",prevEl:".about-prev"},keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,breakpoints:{1440:{slidesPerView:3,spaceBetween:20}},on:{init:function(o){n(o,".about-prev",".about-next")},slideChange:function(o){n(o,".about-prev",".about-next")}}}),new l(".swiper-photo",{modules:[a,c],loop:!1,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".photo-next",prevEl:".photo-prev"},keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,on:{init:function(o){n(o,".photo-prev",".photo-next")},slideChange:function(o){n(o,".photo-prev",".photo-next")}}});function n(o,r,i){const t=document.querySelector(r),e=document.querySelector(i);!t||!e||(t.disabled=o.isBeginning,e.disabled=o.isEnd,t.classList.toggle("swiper-button-disabled",o.isBeginning),e.classList.toggle("swiper-button-disabled",o.isEnd))}}function v(){document.addEventListener("DOMContentLoaded",()=>{new Rellax(".rellax",{breakpoints:[375,768,1440],center:!0,round:!0})})}function m(){let n=new d(".photo-section .photo-simple",{captionDelay:250,overlayOpacity:.4,widthRatio:.7,maxZoom:5}),o=new d(".about-section .photo-simple",{captionDelay:250,overlayOpacity:.4,maxZoom:5});[n,o].forEach(r=>{r.on("show.simplelightbox",()=>{document.querySelectorAll(".swiper").forEach(i=>{i.swiper.allowTouchMove=!1})}),r.on("close.simplelightbox",()=>{document.querySelectorAll(".swiper").forEach(i=>{i.swiper.allowTouchMove=!0})}),r.refresh()})}p();h();w();g();v();m();
//# sourceMappingURL=index.js.map
