(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/ael-awin.3321a66f.jpg"},function(e,a,t){e.exports=t.p+"static/media/ael-clone-harry-flameu.4b645585.jpg"},function(e,a,t){e.exports=t.p+"static/media/ael-colland-duke-nio-2.36c6ddac.jpg"},function(e,a,t){e.exports=t.p+"static/media/ael-colland-duke-nio-3.cd3b2aee.jpg"},function(e,a,t){e.exports=t.p+"static/media/ael-colland-duke-nio.47f65365.jpg"},function(e,a,t){e.exports=t.p+"static/media/ael-complete-guide-cover.53dde260.jpg"},function(e,a,t){e.exports=t.p+"static/media/ael-escha-and-logy.508c85e7.jpg"},function(e,a,t){e.exports=t.p+"static/media/ael-escha.86bf9bb4.jpg"},function(e,a,t){e.exports=t.p+"static/media/ael-logix-ficsario.8d6b216c.jpg"},function(e,a,t){e.exports=t.p+"static/media/ael-logy-copy.71477bfb.jpg"},,function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(5),i=t.n(r),l=(t(22),t(23),t(16)),o=t(2),s=function(e){return n.a.createElement("div",{className:"score-board"},n.a.createElement("h2",null,"Highscore: ",e.highscore),n.a.createElement("h2",null,"Score: ",e.score," / ",e.maxScore))},m=t(6),u=t.n(m),p=t(7),d=t.n(p),f=t(8),g=t.n(f),h=t(9),b=t.n(h),E=t(10),j=t.n(E),k=t(11),x=t.n(k),v=t(12),y=t.n(v),O=t(13),N=t.n(O),S=t(14),C=t.n(S),M=t(15),w=t.n(M),G=[u.a,d.a,g.a,b.a,j.a,x.a,y.a,N.a,C.a,w.a],J=function(e){return function(e){for(var a,t,c=e.length;c;)t=Math.floor(Math.random()*c--),a=e[c],e[c]=e[t],e[t]=a;return e}(G).map((function(a){return n.a.createElement("div",{key:a,className:"image-frame"},n.a.createElement("img",{src:a,alt:"",name:a,onClick:e.click}))}))},W=function(e){return n.a.createElement("div",{className:"win-message",onClick:e.handleWinClick},n.a.createElement("h2",null,"Congratulations! You beat the game!"))},B=function(e){var a=Object(c.useState)([]),t=Object(o.a)(a,2),r=t[0],i=t[1],m=Object(c.useState)(0),u=Object(o.a)(m,2),p=u[0],d=u[1],f=Object(c.useState)(0),g=Object(o.a)(f,2),h=g[0],b=g[1],E=Object(c.useState)(!1),j=Object(o.a)(E,2),k=j[0],x=j[1],v=G.length;return k?n.a.createElement("div",{className:"app"},n.a.createElement("h1",{className:"app-header"},"Memory Game"),n.a.createElement("p",{className:"instructions"},"Click all pictures once. Order suffled after every click."),n.a.createElement(s,{score:p,maxScore:v,highscore:h}),n.a.createElement(W,{handleWinClick:function(e){x(!1),d(0),b(0),i([])}})):n.a.createElement("div",{className:"app"},n.a.createElement("h1",{className:"app-header"},"Memory Game"),n.a.createElement("p",{className:"instructions"},"Click all pictures once. Order suffled after every click."),n.a.createElement(s,{score:p,maxScore:v,highscore:h}),n.a.createElement("div",{className:"card-grid"},n.a.createElement(J,{click:function(e){r.includes(e.target.name)?(p>h&&b(p),d(0),i([])):p===v-1?(b(v),d(v),x(!0)):(d(p+1),i([].concat(Object(l.a)(r),[e.target.name])))}})))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(B,null)),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.e372f14a.chunk.js.map