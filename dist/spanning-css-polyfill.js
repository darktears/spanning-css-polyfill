!function(){var e="single-fold-horizontal",n="single-fold-vertical",t="none",i="fold-top",o="fold-left",r="fold-height",a="fold-width",d="__foldables_env_vars__",l=/\((.*?)\)/gi,s=/@media[^\(]+/gi,c=function(e){return new RegExp("env\\(\\s*"+e+"\\s*\\)","gi")};if(void 0===window[d]){var f=sessionStorage.getItem(d+"-spanning")||t,u=+sessionStorage.getItem(d+"-foldSize")||0,h=+sessionStorage.getItem(d+"-browserShellSize")||0;Object.defineProperty(window,d,{value:{spanning:f,foldSize:u,browserShellSize:h,update:function(e){Object.keys(e).forEach(function(n){v.has(n)&&(window[d][n]=e[n],sessionStorage.setItem(d+"-"+n,window[d][n]))}),window[d].onupdate.forEach(function(e){return e()})},onupdate:[m]}}),window.addEventListener("message",function(e){"update"===(e.data.action||"")&&window[d].update(e.data.value||{})})}else window[d].onupdate.push(m);var w,p=Array.from(document.querySelectorAll('link[rel="stylesheet"], style')),g={};function m(){Array.from(document.querySelectorAll("."+d)).forEach(function(e){return e.parentElement.removeChild(e)});var l=window[d];if(l.spanning!==t){var s=g[l.spanning],f=function(t){var d,l=0,s=0,c=0,f=0;return t.spanning===n&&(c=t.foldSize,f=window.innerHeight,l=window.innerWidth/2-t.foldSize/2),t.spanning===e&&(c=window.innerWidth,f=t.foldSize,s=window.innerHeight/2-t.foldSize/2-t.browserShellSize),(d={})[i]=s,d[o]=l,d[r]=f,d[a]=c,d}(l);Object.keys(f).forEach(function(e){var n;n=f[e]+"px",s=s.replace(c(e),n)});var u=document.createElement("style");u.className=d,u.textContent=s,document.head.appendChild(u)}}g[e]="",g[n]="",g[t]="",(w=p,Promise.all(w.map(function(e){var n=e.href;return n?fetch(n).then(function(e){return e.text()}):e.textContent}))).then(function(i){var o,r,a=new DocumentFragment;i.forEach(function(i,o){var r,d,c,f,u,h=i.replace(new RegExp("(@media.*?\\bspanning\\b[^{]+)\\{([\\s\\S]+?\\})\\s*\\}","gi"),""),w=(f=function(e){var n=new RegExp("(@media.*?\\bspanning\\b[^{]+)\\{([\\s\\S]+?\\})\\s*\\}","gi");return Array.from(e.matchAll(n))}(i),(u={})[e]="",u[n]="",u[t]="",f.forEach(function(i){var o=i[1],r=i[2],a=t;o.indexOf(e)>-1&&(a=e),o.indexOf(n)>-1&&(a=n);var d=o.match(s)||[],c=o.match(l)||[];c=c.filter(function(e){return!e.includes("spanning")}).join(" and "),u[a]+="\n      "+d+" "+c+" {\n        "+r+"\n      }"}),u),m=p[o].href||"inline";Object.keys(w).forEach(function(e){void 0!==g[e]&&(g[e]+="\n          /* origin:  "+m+" */\n          "+w[e])}),a.appendChild((r={"data-css-origin":m},d=h,c=document.createElement("style"),Object.keys(r).forEach(function(e){c.setAttribute(e,r[e])}),void 0!==d&&(c.textContent=d),c))}),p.forEach(function(e){return e.parentElement.removeChild(e)}),document.head.appendChild(a),m(),window.addEventListener("resize",(o=m,function(){var e=arguments,n=this;clearTimeout(r),r=setTimeout(function(){return o.apply(n,e)},150)}))});var v=new Set(["foldSize","browserShellSize","spanning"])}();
//# sourceMappingURL=spanning-css-polyfill.js.map
