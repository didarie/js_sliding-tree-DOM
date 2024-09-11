document.querySelectorAll("li").forEach(function(e){var l=e.childNodes[0],n=document.createElement("span");e.replaceChild(n,l),n.appendChild(l)}),document.addEventListener("click",function(e){var l=e.target.closest("span"),n=l.nextSibling;l&&("none"!==n.style.display?n.style.display="none":n.style.display="block")});
//# sourceMappingURL=index.42b30bf4.js.map
