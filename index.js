(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function s(){document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".mobile-menu"),r=document.querySelector(".burger-btn"),i=document.querySelector(".mobile-menu-close"),c=document.querySelectorAll(".menu-link-nav");function e(){n.classList.add("is-open")}function t(){n.classList.remove("is-open")}r.addEventListener("click",e),i.addEventListener("click",t),c.forEach(o=>{o.addEventListener("click",t)}),n.addEventListener("click",function(o){o.target.closest(".mobile-menu-container")||t()})})}function u(){document.querySelector(".circle-down").addEventListener("click",function(n){document.querySelector("#photo").scrollIntoView({behavior:"smooth"})})}u();s();
//# sourceMappingURL=index.js.map
