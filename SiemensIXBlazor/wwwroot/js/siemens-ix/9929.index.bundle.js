"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[9929],{3879:(e,t,a)=>{a.d(t,{A:()=>d,a:()=>o,c:()=>r,u:()=>s});var i=a(2483);class n extends Event{constructor(e,t,a){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=a}}function o(e,t,a,i){let o;return e.dispatchEvent(new n(t,((e,t)=>{a(e,t),o=t}),i)),{unsubscribe:()=>{o()}}}function s(e,t,a){const n=new i.T,o=new i.T,s=new Set;return e.addEventListener("context-request",(e=>{(null==e?void 0:e.context.name)===t.name&&(e.stopPropagation(),e.subscribe&&s.add(e),n.emit(e),a&&e.callback(a,(()=>{s.delete(e)})))})),o.on((e=>{s.forEach((t=>t.callback(e,(()=>{s.delete(t)}))))})),{emit:e=>{o.emit(e)}}}const r=e=>e.closest("ix-menu"),d={name:"application-layout-context",initialValue:{hideHeader:!1,host:null,sidebar:!1}}},9929:(e,t,a)=>{a.r(t),a.d(t,{ix_map_navigation:()=>s});var i=a(6969),n=a(8137),o=a(3879);const s=class{constructor(e){(0,i.r)(this,e),this.navigationToggled=(0,i.c)(this,"navigationToggled",7),this.contextMenuClick=(0,i.c)(this,"contextMenuClick",7),this.applicationName=void 0,this.navigationTitle=void 0,this.hideContextMenu=!0,this.isSidebarOpen=!0,this.hasContentHeader=!1}get menu(){return this.hostElement.querySelector("ix-menu")}get menuOverlay(){return this.hostElement.querySelector("ix-menu-overlay")}get mapNavMenu(){return this.hostElement.shadowRoot.querySelector(".map-nav-menu")}get sidebar(){return this.hostElement.shadowRoot.querySelector(".map-nav-sidebar")}get overlay(){return this.hostElement.shadowRoot.querySelector("#overlay")}componentDidRender(){this.appendMenu(),this.closeOverlay()}componentWillLoad(){(0,o.u)(this.hostElement,o.A,{hideHeader:!1,host:"map-navigation"})}appendMenu(){this.menu.addEventListener("mapExpandChange",(e=>{const t=!e.detail;this.toggleSidebar(t)})),this.menu.enableMapExpand=!0}async toggleSidebar(e){this.isSidebarOpen=void 0!==e?e:!this.isSidebarOpen,this.isSidebarOpen?this.openSidebar():this.closeSidebar(),this.navigationToggled.emit(this.isSidebarOpen),this.menu.toggleMapExpand(this.isSidebarOpen)}closeSidebar(){(0,n.a)({targets:this.sidebar,duration:s.defaultTime,marginLeft:[0,"-29.75rem"],opacity:[1,0],easing:"easeInSine",complete:()=>{this.sidebar.classList.add("d-none")}})}openSidebar(){(0,n.a)({targets:this.sidebar,duration:s.defaultTime,marginLeft:["-29.75rem",0],opacity:[0,1],easing:"easeOutSine",begin:()=>{this.sidebar.classList.remove("d-none")}})}async openOverlay(e,t,a,i){(0,n.a)({targets:this.overlay,duration:s.slowTime,backdropFilter:[0,"blur(1rem)"],translateX:["-4rem",0],opacity:[0,1],easing:"easeOutSine",begin:()=>{this.overlay.classList.remove("d-none")}});const o=document.createElement("ix-map-navigation-overlay");o.setAttribute("color",i),o.setAttribute("name",e),o.setAttribute("icon",a),o.setAttribute("slot","overlay"),o.addEventListener("closeClick",(()=>this.closeOverlay())),o.appendChild(t),this.hostElement.appendChild(o)}async closeOverlay(){(0,n.a)({targets:this.overlay,duration:s.slowTime,backdropFilter:["blur(1rem)",0],translateX:[0,"-4rem"],opacity:[1,0],easing:"easeInSine",complete:()=>{var e;this.overlay&&(null===(e=this.overlay.firstChild)||void 0===e||e.remove(),this.overlay.classList.add("d-none"))}})}checkHasContentHeader(e){const t=e.currentTarget.assignedNodes({flatten:!0});this.hasContentHeader=0!==(null==t?void 0:t.length)}render(){return(0,i.h)(i.H,{key:"cce268591eb698f3ea4e1df75f6d901b299955cd"},(0,i.h)("slot",{key:"5fe015d8ea32646579e2908ed96d384cf6d3b23c",name:"menu"}),(0,i.h)("div",{key:"4b3aef7e9d54ad0ca685fe78a966c68212ddeeac",class:"map-nav"},(0,i.h)("div",{key:"3ec6010dfb0782a34d05f88802fa4c1af3e5c4fc",class:"map-nav-sidebar"},(0,i.h)("div",{key:"8dcbc1abbd2e92e4587e8ce3a13827ad7c3af96f",class:"map-nav-header"},(0,i.h)("ix-application-header",{key:"fde3c4b328cc2decdbab0046fab65e236b48675e",name:this.applicationName,class:"map-nav-header-brand"},(0,i.h)("slot",{key:"3c0fc3155201783ce46cfa5c0f9636ce85a62eef",slot:"logo",name:"logo"}))),(0,i.h)("div",{key:"814697d7b86d4a7f1d940a4677261a1106cc8e6e",class:"map-nav-sidebar-content"},(0,i.h)("div",{key:"92b84f7bd508df872dee03f233da8aae9277df2d",class:"map-nav-sidebar-static-content"},(0,i.h)("div",{key:"a68ddb0e887157c08e45d85cef327bf1bf76064f",class:"map-nav-title"},this.navigationTitle),this.hideContextMenu?"":(0,i.h)("ix-icon-button",{icon:"context-menu",ghost:!0,size:"24",variant:"secondary",onClick:e=>this.contextMenuClick.emit()})),(0,i.h)("div",{key:"d0dc557464a6eef40b5d26e72b3eda0d3113bb9e",class:"map-nav-sidebar-user-content"},(0,i.h)("slot",{key:"a4c80892e77776c69d1397514b76da25b6785737",name:"sidebar-content"})))),(0,i.h)("div",{key:"742909b2f8cb2897d4f3e27fe8624a058ca86bfa",class:"content"},(0,i.h)("div",{key:"86ae660768f26bbae02417ab6b20c16dfec82b00",class:{"map-nav-header-content":!0,"bg-2":!0,empty:!this.hasContentHeader}},(0,i.h)("slot",{key:"e042f4d6dadf007435e87e6ca028a9908ffcc48b",name:"content-header",onSlotchange:e=>this.checkHasContentHeader(e)})),(0,i.h)("main",{key:"2f5ca6dd5e3a9e8d32a2b02e0baf462daeff4a7c"},(0,i.h)("slot",{key:"437f35dd628c442991188436aebfb72213f4e723"}),(0,i.h)("slot",{key:"7b107165c57e30798ed188959ff4e88416a0e6be",name:"overlay"})))))}get hostElement(){return(0,i.g)(this)}};s.defaultTime=150,s.slowTime=500,s.style=":host{display:flex;position:relative;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .map-nav{display:flex;margin-left:3.25rem;position:relative;height:100%;flex-grow:1;overflow:hidden}:host .map-nav-sidebar{display:flex;flex-direction:column;align-items:center;width:29.75rem;max-width:29.75rem;min-width:29.75rem;height:100%;left:4rem;background-color:var(--theme-map-navigation--background);border-inline-end:0.125rem solid var(--theme-map-navigation-separator--background);z-index:99}:host .map-nav-sidebar-content{align-items:center;position:relative;overflow:auto;height:100%;width:100%}:host .map-nav-sidebar-content .map-nav-sidebar-static-content{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;justify-content:space-between;margin-top:0.437rem;margin-bottom:0.812rem;margin-left:1rem;margin-right:1rem}:host .map-nav-header{display:flex;position:relative;align-items:center;height:3.5rem;min-height:3.5rem;width:100%}:host .map-nav-header .map-nav-header-brand{background-color:var(--theme-map-navigation-background);display:flex;align-items:center;height:100%;width:100%;padding:0 1rem;--theme-app-header--color:var(--theme-map-navigation-header--color);--theme-app-header-logo--color:var(--theme-map-navigation-logo--color)}:host .map-nav-header .map-nav-header-brand button{margin-left:1rem}:host .map-nav-header-content{display:flex;height:3.5rem;align-items:center;overflow:hidden;padding:0 1rem}:host .map-nav-header-content.empty{height:0}:host .map-nav-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;align-items:center;flex-grow:1}:host .content{display:block;flex-grow:1;position:relative;height:100%;overflow:hidden;z-index:calc(var(--theme-z-index-sticky) - 1)}:host ::slotted(ix-menu){position:absolute}"}}]);