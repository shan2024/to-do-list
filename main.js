(()=>{"use strict";!function(){let e=document.querySelector("body"),t=document.createElement("div");t.id="content",e.appendChild(t),function(e){let t=function(){let e=document.createElement("header"),t=document.createElement("h1");return t.innerHTML="Todo List",e.appendChild(t),e}(),n=function(){let e=document.createElement("div"),t=function(){let e=document.createElement("div");e.className="info-tab",["Home","Today","Week"].forEach((t=>{let n=document.createElement("button");n.className="info-tab-button",n.innerHTML=t,e.appendChild(n)}));let t=document.createElement("h2");t.innerHTML="Projects";let n=document.createElement("button");return n.innerHTML="Add Project",e.appendChild(t),e.appendChild(void 0),e.appendChild(n),e}();return e.appendChild(t),e}(),d=function(){let e=document.createElement("footer"),t=document.createElement("p");return t.innerHTML="Created By Seulchan Han",e.appendChild(t),e}();e.appendChild(t),e.appendChild(n),e.appendChild(d)}()}()})();