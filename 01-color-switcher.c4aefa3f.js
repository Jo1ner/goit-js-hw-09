const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o=null;function r(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){const n=r();document.body.style.backgroundColor=n,o=setInterval((()=>{const t=r();document.body.style.backgroundColor=t}),1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(o),e.setAttribute("disabled","true"),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.c4aefa3f.js.map
