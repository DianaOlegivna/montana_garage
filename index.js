(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function l(){document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector(".mobile-menu"),n=document.querySelector(".burger-btn"),o=document.querySelector(".mobile-menu-close"),r=document.querySelectorAll(".menu-link-nav");function e(){i.classList.add("is-open")}function t(){i.classList.remove("is-open")}n.addEventListener("click",e),o.addEventListener("click",t),r.forEach(c=>{c.addEventListener("click",t)}),i.addEventListener("click",function(c){c.target.closest(".mobile-menu-container")||t()})})}function s(){document.querySelector(".circle-down").addEventListener("click",function(i){document.querySelector("#photo").scrollIntoView({behavior:"smooth"})})}function u(){document.querySelector(".paragraph").addEventListener("click",function(i){for(let n=0;n<1;n++){let o=document.createElement("img");o.src="./img/dollar.png",o.classList.add("flying-dollar"),document.body.appendChild(o);const r=this.getBoundingClientRect();o.style.top=`${r.top-50}px`,o.style.left=`${r.left+Math.random()*100-50}px`,setTimeout(()=>{o.remove()},5e3)}})}s();l();u();
//# sourceMappingURL=index.js.map
