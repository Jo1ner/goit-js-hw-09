const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");function r(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){const o=r();document.body.style.backgroundColor=o,timerId=setInterval((()=>{const t=r();document.body.style.backgroundColor=t}),1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(timerId),e.setAttribute("disabled","true"),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.9007c7cd.js.map