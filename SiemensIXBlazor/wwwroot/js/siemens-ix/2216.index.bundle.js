"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[2216],{4673:(e,t,n)=>{n.d(t,{m:()=>o});const i={sm:"(max-width: 48em)",md:"(min-width: 48.0625em) and (max-width: 80em)",lg:"(min-width: 80.0625em)"},o=e=>{if("undefined"!=typeof window&&window.matchMedia){const t=i[e];return window.matchMedia(t).matches}return!1}},6826:(e,t,n)=>{n.d(t,{A:()=>h,a:()=>a,c:()=>s,u:()=>r});var i=n(1917);class o extends Event{constructor(e,t,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=n}}function a(e,t,n,i){let a;return e.dispatchEvent(new o(t,((e,t)=>{n(e,t),a=t}),i)),{unsubscribe:()=>{a()}}}function r(e,t,n){const o=new i.T,a=new i.T,r=new Set;return e.addEventListener("context-request",(e=>{(null==e?void 0:e.context.name)===t.name&&(e.stopPropagation(),e.subscribe&&r.add(e),o.emit(e),n&&e.callback(n,(()=>{r.delete(e)})))})),a.on((e=>{r.forEach((t=>t.callback(e,(()=>{r.delete(t)}))))})),{emit:e=>{a.emit(e)}}}const s=e=>e.closest("ix-menu"),h={name:"application-layout-context",initialValue:{hideHeader:!1,host:null,sidebar:!1}}},2216:(e,t,n)=>{n.r(t),n.d(t,{ix_basic_navigation:()=>r});var i=n(4801),o=n(6826),a=n(2238);n(4673);const r=class{constructor(e){(0,i.r)(this,e),this.applicationName=void 0,this.hideHeader=!1,this.forceBreakpoint=void 0,this.breakpoints=["sm","md","lg"],this.breakpoint="lg"}onHideHeaderChange(){var e;null===(e=this.contextProvider)||void 0===e||e.emit({hideHeader:this.hideHeader,host:"basic-navigation"}),this.breakpoint=a.a.breakpoint}forceLayoutChange(e){e?(a.a.disableBreakpointDetection(),a.a.setBreakpoint(e)):a.a.enableBreakpointDetection()}onBreakpointsChange(e){a.a.setBreakpoints(e)}get menu(){return this.hostElement.querySelector("ix-menu")}onContentClick(){var e;a.m.isPinned||null===(e=this.menu)||void 0===e||e.toggleMenu(!1)}componentWillLoad(){a.a.setBreakpoints(this.breakpoints),this.contextProvider=(0,o.u)(this.hostElement,o.A,{hideHeader:this.hideHeader,host:"basic-navigation"}),this.modeDisposable=a.a.onChange.on((e=>{this.breakpoint=e})),this.breakpoint=a.a.breakpoint,this.forceBreakpoint&&this.forceLayoutChange(this.forceBreakpoint)}componentDidRender(){this.menu&&(this.menu.applicationName=this.applicationName)}disconnectedCallback(){var e;null===(e=this.modeDisposable)||void 0===e||e.dispose()}render(){return(0,i.h)(i.H,{"data-role":"",class:{"hide-header":this.hideHeader,[`breakpoint-${this.breakpoint}`]:!0}},this.hideHeader?null:(0,i.h)("ix-application-header",{name:this.applicationName},(0,i.h)("slot",{name:"logo",slot:"logo"})),(0,i.h)("div",{class:"navigation-content"},(0,i.h)("slot",{name:"menu"}),(0,i.h)("div",{class:"content",onClick:()=>this.onContentClick()},(0,i.h)("slot",null))))}get hostElement(){return(0,i.g)(this)}static get watchers(){return{hideHeader:["onHideHeaderChange"],breakpoints:["onBreakpointsChange"]}}};r.style=":host{display:flex;position:relative;width:100%;height:100%;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .content{display:flex;height:100%;width:100%;position:relative;margin-left:3.25rem;overflow:auto}:host .navigation-content{display:flex;position:relative;flex-direction:row;height:calc(100% - 2.75rem);width:100%}:host(.hide-header) .navigation-content,:host(.hide-header) .content{height:100%}:host(.breakpoint-lg) .content{margin-left:0rem}:host(.breakpoint-sm) .content{margin-left:0px;width:100%}"},2238:(e,t,n)=>{n.d(t,{a:()=>d,m:()=>m});var i,o,a,r,s=n(4673),h=n(1917),l=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)},c=function(e,t,n,i,o){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?o.call(e,n):o?o.value=n:t.set(e,n),n};i=new WeakMap,o=new WeakMap,a=new WeakMap,r=new WeakMap;const d=new class{constructor(){i.set(this,["sm","md","lg"]),o.set(this,new h.T),a.set(this,"lg"),r.set(this,!0),"undefined"!=typeof window&&(window.addEventListener("resize",this.onResize.bind(this)),this.onResize())}get breakpoint(){return l(this,a,"f")}get onChange(){return l(this,o,"f")}get isDetectionEnabled(){return l(this,r,"f")}onResize(){if(!l(this,r,"f"))return;if(!l(this,i,"f"))return;const e=[];if(l(this,i,"f").forEach((t=>{const n=(0,s.m)(t);e.push([t,n])})),e.every((([e,t])=>!1===t))){let t=0;l(this,i,"f").includes("lg")||(t=e.length-1);const[n,r]=e[t];return l(this,o,"f").emit(n),void c(this,a,n,"f")}for(const[t,n]of e.reverse())if(n){l(this,o,"f").emit(t),c(this,a,t,"f");break}}disableBreakpointDetection(){c(this,r,!1,"f")}enableBreakpointDetection(){c(this,r,!0,"f")}setBreakpoint(e){c(this,a,e,"f"),l(this,o,"f").emit(e)}setBreakpoints(e){c(this,i,e,"f"),this.onResize()}};var u;u=new WeakMap;const m=new class{constructor(){this.menuElement=null,this.menuExpandChange=new h.T,u.set(this,!1)}register(e){this.menuElement?console.warn("Menu already defined"):(this.menuElement=e,this.menuElement.addEventListener("expandChange",(e=>{this.menuExpandChange.emit(e.detail)})))}setIsPinned(e){!function(e,t,n,i,o){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===i?o.call(e,n):o?o.value=n:t.set(e,n)}(this,u,e,"f")}async open(){return!!this.menuElement&&(this.menuElement.toggleMenu(!0),!0)}async close(){return!!this.menuElement&&(this.menuElement.toggleMenu(!1),!0)}async toggle(){return!!this.menuElement&&(this.menuElement.toggleMenu(),!0)}get nativeElement(){return this.menuElement}get expandChange(){return this.menuExpandChange}get isPinned(){return function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)}(this,u,"f")}}}}]);