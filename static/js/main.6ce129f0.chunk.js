(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{124:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),l=t.n(c),i=(t(90),t(52)),o=t.n(i),s=t(64),u=t(17),m=(t(62),t(126)),d=t(66);var v=function(e){var a=e.weatherData,t=a.weather[0].id,c=Object(n.useState)(r.a.createElement("div",null,"Initial")),l=Object(u.a)(c,2),i=l[0],o=l[1];return Object(n.useEffect)((function(){o(t>=200&&t<300?r.a.createElement("div",{className:"icon thunder-storm"},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"lightning"},r.a.createElement("div",{className:"bolt"}),r.a.createElement("div",{className:"bolt"}))):t>=300&&t<500?r.a.createElement("div",{className:"icon sun-shower"},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"sun"},r.a.createElement("div",{className:"rays"})),r.a.createElement("div",{className:"rain"})):t>=500&&t<600?r.a.createElement("div",{className:"icon rainy"},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"rain"})):t>=600&&t<700?r.a.createElement("div",{className:"icon flurries"},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"snow"},r.a.createElement("div",{className:"flake"}),r.a.createElement("div",{className:"flake"}))):t>=700&&t<800?r.a.createElement("div",{className:"icon cloudy"},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"cloud"})):800===t?r.a.createElement("div",{className:"icon sunny"},r.a.createElement("div",{className:"sun"},r.a.createElement("div",{className:"rays"}))):t>800?r.a.createElement("div",{className:"icon cloudy"},r.a.createElement("div",{className:"cloud"}),r.a.createElement("div",{className:"cloud"})):r.a.createElement("div",null,"Error Occurred"))}),[t]),r.a.createElement("div",null,r.a.createElement(m.a,{direction:"vertical"},i,r.a.createElement("h2",{style:{textAlign:"center",marginTop:"0px"}},a.weather[0].main),r.a.createElement("p",null,"Icons Taken from ",r.a.createElement("a",{href:"https://codepen.io/joshbader/full/EjXgqr/",target:"_blank"},"Josh Bader"))))};var h=function(e){var a=e.weatherData,t=Object(n.useState)("\xb0C"),c=Object(u.a)(t,2),l=c[0],i=c[1],o=a.name+", "+a.sys.country,s=a.weather[0].description;s=s.charAt(0).toUpperCase()+s.slice(1);var v=function(e){return Number.parseFloat(e).toPrecision(3)},h=v(a.main.temp-273.15),p=v(9*h/5+32),E=Object(n.useState)(h),f=Object(u.a)(E,2),b=f[0],w=f[1],N=v(a.main.feels_like-273.15),g=v(9*N/5+32),j=Object(n.useState)(N),O=Object(u.a)(j,2),y=O[0],k=O[1],C=r.a.createElement("div",null,r.a.createElement("h2",null," Name: ",o),r.a.createElement("h2",null," Current Temperature: ",b," ",l),r.a.createElement("h2",null," Feels like: ",y," ",l," "),r.a.createElement(m.a,{direction:"horizontal"},r.a.createElement(d.a,{type:"primary",onClick:function(e){e.preventDefault(),w(h),k(N),i("\xb0C")}}," Celsius "),r.a.createElement(d.a,{type:"primary",onClick:function(e){e.preventDefault(),w(p),k(g),i("\xb0F")}}," Fahrenheit ")),r.a.createElement("h2",null,"How's it looking right now? --\x3e ",s," "));return r.a.createElement("div",null,C)};t(127),t(128);var p=function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(0),i=Object(u.a)(l,2),p=i[0],E=i[1],f=Object(n.useState)({}),b=Object(u.a)(f,2),w=b[0],N=b[1],g=Object(n.useState)(!0),j=Object(u.a)(g,2),O=j[0],y=j[1],k="https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(p,"&appid=4bd7f3965a24ff9ad9ebd6d42e0194dc"),C=function(e){console.log("An error has occurred in getting the position!")},S=function(){var e=Object(s.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(a.coords.latitude),E(a.coords.longitude);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){y(!0),navigator.geolocation.getCurrentPosition(S,C),x("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=4bd7f3965a24ff9ad9ebd6d42e0194dc").then((function(e){N(e),y(!1)}))}),[]);var x=function(){var e=Object(s.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),D=r.a.createElement("div",null,"unloaded"),A=r.a.createElement("div",null,r.a.createElement("h1",null," Weather App "),r.a.createElement(m.a,{direction:"vertical"},r.a.createElement(h,{weatherData:w,key:1}),r.a.createElement(d.a,{type:"primary",onClick:function(e){e.preventDefault(),y(!0),navigator.geolocation.getCurrentPosition(S,C),x(k).then((function(e){N(e),y(!1)}))},className:"button"},"Search for weather where I live!"),r.a.createElement(v,{weatherData:w})));return!0===O?D:A};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,a,t){},85:function(e,a,t){e.exports=t(124)},90:function(e,a,t){}},[[85,1,2]]]);
//# sourceMappingURL=main.6ce129f0.chunk.js.map