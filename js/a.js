!function(){let t=document.querySelectorAll('[class*="track-"], [class*="atomicat-track-"]'),e=document.body.getAttribute("id")?.replace("_",""),i=document.body.getAttribute("data-page")?.replace("_",""),n=[],a=0,o=document.documentElement.scrollHeight-window.innerHeight,c=new Date,r=()=>{try{let t=window.location.hostname;return t?.includes("atomicatpages.com")||t?.includes("b-cdn.net")}catch(e){console.log(e)}};function l(t){let o="https://apidopro.atomicat-api.com/lytics/save";t.visitorId=function t(){try{var e,i,n=localStorage.getItem("atomicat.host");e=JSON.parse(n).uuid}catch(a){e=(i=new Date().getTime(),(i*Math.random()*1e5).toString(36)+"-"+i+"-"+(i*Math.random()*1e5).toString(36)),localStorage.setItem("atomicat.host",JSON.stringify({uuid:e}))}return e}(),t.duration=(new Date-c)/1e3,t.btnClicks=n,t.uid=e,t.pid=i,t.search=window.location.search,t.pathname=window.location.pathname,t.scrolled=isNaN(a)?0:a,e&&i&&!r()&&(navigator&&navigator.sendBeacon?navigator.sendBeacon(o,JSON.stringify(t)):(t.origin=window.location.hostname,fetch(o,{keepalive:!0,method:"POST",mode:"no-cors",headers:{"content-type":"application/json"},body:JSON.stringify(t)})),n=[])}document.addEventListener("visibilitychange",function t(){"hidden"===document.visibilityState&&l({action:"left",listenerType:"visibilitychange"})}),"onpagehide"in window&&window.addEventListener("pagehide",()=>{l({action:"left",listenerType:"pagehide"})}),"onbeforeunload"in window&&window.addEventListener("beforeunload",t=>{l({action:"left",listenerType:"beforeunload"})}),document.addEventListener("mouseout",function(t){!t.relatedTarget&&t.clientY<=0&&(console.log("mouseout..."),l({action:"left",listenerType:"mouseout"}))}),t.forEach(t=>{t.addEventListener("click",e=>(function t(e,i){e.target;let a=i.classList,o="";for(let c=0;c<a.length;c++)if(a[c].startsWith("track-")||a[c].startsWith("atomicat-track-")){o=a[c].replace("atomicat-track-","").replace("track-","");break}let r=n.findIndex(t=>t.id==o);-1!==r?n[r].count=n[r].count+1:n.push({id:o,count:1})})(e,t))}),window.addEventListener("scroll",function t(){let e=window.pageYOffset||document.documentElement.scrollTop;if(o<=0)a=0;else{let i=e/o*100;a=isNaN(i)?0:Math.max(a,i).toFixed(2)}}),l({action:"viewed"})}();