(this["webpackJsonpfullpage-react-fs-example"]=this["webpackJsonpfullpage-react-fs-example"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);t(7);var r=t(0),c=t.n(r),a=t(5),i=t.n(a),o=t(1),l=t(2),u=t(3),s={fullPanel:"_styles-module__fullPanel__1X2N_",screenPane:"_styles-module__screenPane__3cHdp",panelsContainer:"_styles-module__panelsContainer__ytvCK",panelTransitioning:"_styles-module__panelTransitioning__13cd7",navIndicators:"_styles-module__navIndicators__2g5Xg",indicator:"_styles-module__indicator__3klkV",active:"_styles-module__active__3sodH",clickMask:"_styles-module__clickMask__2690c"},d=function(e){var n=e.showIndicators,t=void 0===n||n,a=Object(u.a)(e,["showIndicators"]),i=c.a.Children.count(a.children),d=Object(r.useRef)(window.innerHeight),m=Object(r.useState)({currentPanel:1,transitioning:!1,currentTop:0}),v=Object(l.a)(m,2),p=v[0],w=v[1],b=function(){w((function(e){return e.transitioning?e:e.currentPanel<=1?Object(o.a)(Object(o.a)({},e),{},{currentTop:0}):(setTimeout((function(){w((function(e){return Object(o.a)(Object(o.a)({},e),{},{transitioning:!1})}))}),1e3),{transitioning:!0,currentPanel:e.currentPanel-1,currentTop:-d.current*(e.currentPanel-2)})}))},E=function(){w((function(e){return e.transitioning?e:e.currentPanel>=i?Object(o.a)(Object(o.a)({},e),{},{currentTop:-d.current*(i-1)}):(setTimeout((function(){w((function(e){return Object(o.a)(Object(o.a)({},e),{},{transitioning:!1})}))}),1e3),{transitioning:!0,currentPanel:e.currentPanel+1,currentTop:-d.current*e.currentPanel})}))},g=function(e){e.deltaY>40&&p.currentPanel<i?E():e.deltaY<-40&&p.currentPanel>0&&b()},_=function(){window.removeEventListener("wheel",(function(e){g(e)})),window.removeEventListener("touchstart",(function(e){L(e,!0)})),window.removeEventListener("touchend",(function(e){L(e,!1)})),window.removeEventListener("pointerdown",(function(e){L(e.changedTouches[0].screenY,!0)})),window.removeEventListener("pointerup",(function(e){L(e.changedTouches[0].screenY,!1)})),window.removeEventListener("pointermove",(function(e){P(e.screenY)})),window.removeEventListener("resize",(function(){d.current=window.innerHeight}))};Object(r.useEffect)((function(){return _(),window.addEventListener("wheel",(function(e){g(e)})),window.addEventListener("touchstart",(function(e){L(e.changedTouches[0].screenY,!0)})),window.addEventListener("touchend",(function(e){L(e.changedTouches[0].screenY,!1)})),window.addEventListener("pointerdown",(function(e){L(e.screenY,!0)})),window.addEventListener("pointerup",(function(e){L(e.screenY,!1)})),window.addEventListener("pointermove",(function(e){P(e.screenY)})),window.addEventListener("touchmove",(function(e){P(e.changedTouches[0].screenY)})),window.addEventListener("resize",(function(){d.current=window.innerHeight})),function(){_()}}),[]);var h=Object(r.useRef)(0),j=Object(r.useState)(0),T=Object(l.a)(j,2),y=T[0],O=T[1],P=function(e){if(0!==h.current){var n=!1,t=0;O((function(r){return 0===r?(n=!0,e):(t=r-e)<0&&t>-2||t>0&&t<2?(n=!0,r):e})),n||w((function(e){return e.transitioning?e:Object(o.a)(Object(o.a)({},e),{},{currentTop:e.currentTop-t})}))}},L=function(e,n,t){if(n)h.current=e;else{var r=e,c=h.current-r;c<-100?b():c>100?E():w((function(e){return Object(o.a)(Object(o.a)({},e),{},{currentTop:-d.current*(e.currentPanel-1)})})),h.current=0,O(0)}},k=[s.panelsContainer];return p.transitioning&&k.push(s.panelTransitioning),c.a.createElement("div",{className:s.screenPane},0!==y&&c.a.createElement("div",{className:s.clickMask}),c.a.createElement("div",{className:k.join(" "),style:{top:"".concat(p.currentTop,"px")}},a.children,t&&c.a.createElement(f,{count:i,activeIndex:p.currentPanel,setIndicator:function(e){w((function(n){return setTimeout((function(){w((function(e){return Object(o.a)(Object(o.a)({},e),{},{transitioning:!1})}))}),1e3),{transitioning:!0,currentPanel:e,currentTop:-d.current*(e-1)}}))}})))},f=function(e){var n=e.count,t=e.activeIndex,r=e.setIndicator,a=null;return n&&(a=Array(n).fill(0).map((function(e,n){var a=[s.indicator];return n===t-1&&a.push(s.active),c.a.createElement("div",{key:n,className:a.join(" "),onClick:function(){r(n+1)}},"\u2b24")}))),c.a.createElement("div",{className:s.navIndicators},a)},m=function(e){var n=e.bgColor,t=Object(u.a)(e,["bgColor"]);return c.a.createElement("div",{className:s.fullPanel,style:{backgroundColor:n}},c.a.createElement("div",{className:s.panelContent},t.children))},v=(t(12),function(){return c.a.createElement(d,null,c.a.createElement(m,null,c.a.createElement("div",null,"Use"," ",c.a.createElement("a",{href:"https://github.com/FaisalST32/fullpage-react-fs",target:"_blank",style:{textDecoration:"none",color:"purple",fontWeight:"bold"}},"fullpage-react-fs")," ","to create beautiful webpages because"),c.a.createElement("div",{style:{fontSize:"1.5rem",textAlign:"center"}},c.a.createElement("span",{style:{fontSize:"4rem"}},"Sometimes"),c.a.createElement("br",null)," all you need in Life")),c.a.createElement(m,{bgColor:"azure"},c.a.createElement("div",{style:{fontSize:"1.5rem",textAlign:"center"}},"is a little bit of",c.a.createElement("br",null),c.a.createElement("span",{style:{fontSize:"4rem",color:"blue"}},"Color"))),c.a.createElement(m,{bgColor:"#35437f"},c.a.createElement("div",{style:{fontSize:"1.5rem",textAlign:"center",color:"white"}},"and a little less",c.a.createElement("br",null),c.a.createElement("span",{style:{fontSize:"4rem",color:"#c8f193"}},"Scroll"),c.a.createElement("br",null),"Touch or Drag to switch slides.",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("a",{href:"https://github.com/FaisalST32/fullpage-react-fs",target:"_blank",style:{textDecoration:"none",color:"white"}},"View on GitHub"))))});i.a.render(c.a.createElement(v,null),document.getElementById("root"))},6:function(e,n,t){e.exports=t(13)},7:function(e,n,t){}},[[6,1,2]]]);
//# sourceMappingURL=main.b8ae1aa5.chunk.js.map