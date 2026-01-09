const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PortfolioIndex-DN4ir0CO.js","assets/ralphmaron-DPo1Mce3.js","assets/PortfolioIndex-C91ysNnV.css","assets/LoginIndex-D1y5Ur6U.js","assets/LoginIndex-BNnvmqPI.css","assets/DashboardIndex-D1SCjSFz.js","assets/DashboardIndex-CdOuSAzR.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fa(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const we={},hs=[],kt=()=>{},Wu=()=>!1,Ni=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),da=t=>t.startsWith("onUpdate:"),Ne=Object.assign,pa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zd=Object.prototype.hasOwnProperty,ge=(t,e)=>Zd.call(t,e),te=Array.isArray,fs=t=>Di(t)==="[object Map]",Ku=t=>Di(t)==="[object Set]",se=t=>typeof t=="function",Re=t=>typeof t=="string",Zt=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",Gu=t=>(be(t)||se(t))&&se(t.then)&&se(t.catch),zu=Object.prototype.toString,Di=t=>zu.call(t),ep=t=>Di(t).slice(8,-1),qu=t=>Di(t)==="[object Object]",ga=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Js=fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Li=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},tp=/-\w/g,ut=Li(t=>t.replace(tp,e=>e.slice(1).toUpperCase())),np=/\B([A-Z])/g,Yn=Li(t=>t.replace(np,"-$1").toLowerCase()),xi=Li(t=>t.charAt(0).toUpperCase()+t.slice(1)),po=Li(t=>t?`on${xi(t)}`:""),En=(t,e)=>!Object.is(t,e),Qr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ju=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},jo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},sp=t=>{const e=Re(t)?Number(t):NaN;return isNaN(e)?t:e};let $c;const Mi=()=>$c||($c=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ma(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Re(s)?ap(s):ma(s);if(r)for(const o in r)e[o]=r[o]}return e}else if(Re(t)||be(t))return t}const rp=/;(?![^(]*\))/g,ip=/:([^]+)/,op=/\/\*[^]*?\*\//g;function ap(t){const e={};return t.replace(op,"").split(rp).forEach(n=>{if(n){const s=n.split(ip);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function _a(t){let e="";if(Re(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const s=_a(t[n]);s&&(e+=s+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const cp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lp=fa(cp);function Xu(t){return!!t||t===""}const Yu=t=>!!(t&&t.__v_isRef===!0),up=t=>Re(t)?t:t==null?"":te(t)||be(t)&&(t.toString===zu||!se(t.toString))?Yu(t)?up(t.value):JSON.stringify(t,Qu,2):String(t),Qu=(t,e)=>Yu(e)?Qu(t,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],o)=>(n[go(s,o)+" =>"]=r,n),{})}:Ku(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>go(n))}:Zt(e)?go(e):be(e)&&!te(e)&&!qu(e)?String(e):e,go=(t,e="")=>{var n;return Zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Be;class Zu{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Be,!e&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Be;try{return Be=this,e()}finally{Be=n}}}on(){++this._on===1&&(this.prevScope=Be,Be=this)}off(){this._on>0&&--this._on===0&&(Be=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function eh(t){return new Zu(t)}function th(){return Be}function hp(t,e=!1){Be&&Be.cleanups.push(t)}let Ie;const mo=new WeakSet;class nh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Be&&Be.active&&Be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,mo.has(this)&&(mo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wc(this),ih(this);const e=Ie,n=_t;Ie=this,_t=!0;try{return this.fn()}finally{oh(this),Ie=e,_t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ea(e);this.deps=this.depsTail=void 0,Wc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?mo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bo(this)&&this.run()}get dirty(){return Bo(this)}}let sh=0,Xs,Ys;function rh(t,e=!1){if(t.flags|=8,e){t.next=Ys,Ys=t;return}t.next=Xs,Xs=t}function ya(){sh++}function va(){if(--sh>0)return;if(Ys){let e=Ys;for(Ys=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Xs;){let e=Xs;for(Xs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function ih(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function oh(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Ea(s),fp(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Bo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ah(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ah(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ur)||(t.globalVersion=ur,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Bo(t))))return;t.flags|=2;const e=t.dep,n=Ie,s=_t;Ie=t,_t=!0;try{ih(t);const r=t.fn(t._value);(e.version===0||En(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ie=n,_t=s,oh(t),t.flags&=-3}}function Ea(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Ea(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function fp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let _t=!0;const ch=[];function Jt(){ch.push(_t),_t=!1}function Xt(){const t=ch.pop();_t=t===void 0?!0:t}function Wc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ie;Ie=void 0;try{e()}finally{Ie=n}}}let ur=0;class dp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ie||!_t||Ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ie)n=this.activeLink=new dp(Ie,this),Ie.deps?(n.prevDep=Ie.depsTail,Ie.depsTail.nextDep=n,Ie.depsTail=n):Ie.deps=Ie.depsTail=n,lh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ie.depsTail,n.nextDep=void 0,Ie.depsTail.nextDep=n,Ie.depsTail=n,Ie.deps===n&&(Ie.deps=s)}return n}trigger(e){this.version++,ur++,this.notify(e)}notify(e){ya();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{va()}}}function lh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)lh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const li=new WeakMap,$n=Symbol(""),Ho=Symbol(""),hr=Symbol("");function He(t,e,n){if(_t&&Ie){let s=li.get(t);s||li.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new wa),r.map=s,r.key=n),r.track()}}function Wt(t,e,n,s,r,o){const a=li.get(t);if(!a){ur++;return}const l=u=>{u&&u.trigger()};if(ya(),e==="clear")a.forEach(l);else{const u=te(t),f=u&&ga(n);if(u&&n==="length"){const d=Number(s);a.forEach((g,v)=>{(v==="length"||v===hr||!Zt(v)&&v>=d)&&l(g)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(hr)),e){case"add":u?f&&l(a.get("length")):(l(a.get($n)),fs(t)&&l(a.get(Ho)));break;case"delete":u||(l(a.get($n)),fs(t)&&l(a.get(Ho)));break;case"set":fs(t)&&l(a.get($n));break}}va()}function pp(t,e){const n=li.get(t);return n&&n.get(e)}function is(t){const e=de(t);return e===t?e:(He(e,"iterate",hr),ct(t)?e:e.map(Me))}function Ui(t){return He(t=de(t),"iterate",hr),t}const gp={__proto__:null,[Symbol.iterator](){return _o(this,Symbol.iterator,Me)},concat(...t){return is(this).concat(...t.map(e=>te(e)?is(e):e))},entries(){return _o(this,"entries",t=>(t[1]=Me(t[1]),t))},every(t,e){return Vt(this,"every",t,e,void 0,arguments)},filter(t,e){return Vt(this,"filter",t,e,n=>n.map(Me),arguments)},find(t,e){return Vt(this,"find",t,e,Me,arguments)},findIndex(t,e){return Vt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Vt(this,"findLast",t,e,Me,arguments)},findLastIndex(t,e){return Vt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Vt(this,"forEach",t,e,void 0,arguments)},includes(...t){return yo(this,"includes",t)},indexOf(...t){return yo(this,"indexOf",t)},join(t){return is(this).join(t)},lastIndexOf(...t){return yo(this,"lastIndexOf",t)},map(t,e){return Vt(this,"map",t,e,void 0,arguments)},pop(){return Hs(this,"pop")},push(...t){return Hs(this,"push",t)},reduce(t,...e){return Kc(this,"reduce",t,e)},reduceRight(t,...e){return Kc(this,"reduceRight",t,e)},shift(){return Hs(this,"shift")},some(t,e){return Vt(this,"some",t,e,void 0,arguments)},splice(...t){return Hs(this,"splice",t)},toReversed(){return is(this).toReversed()},toSorted(t){return is(this).toSorted(t)},toSpliced(...t){return is(this).toSpliced(...t)},unshift(...t){return Hs(this,"unshift",t)},values(){return _o(this,"values",Me)}};function _o(t,e,n){const s=Ui(t),r=s[e]();return s!==t&&!ct(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=n(o.value)),o}),r}const mp=Array.prototype;function Vt(t,e,n,s,r,o){const a=Ui(t),l=a!==t&&!ct(t),u=a[e];if(u!==mp[e]){const g=u.apply(t,o);return l?Me(g):g}let f=n;a!==t&&(l?f=function(g,v){return n.call(this,Me(g),v,t)}:n.length>2&&(f=function(g,v){return n.call(this,g,v,t)}));const d=u.call(a,f,s);return l&&r?r(d):d}function Kc(t,e,n,s){const r=Ui(t);let o=n;return r!==t&&(ct(t)?n.length>3&&(o=function(a,l,u){return n.call(this,a,l,u,t)}):o=function(a,l,u){return n.call(this,a,Me(l),u,t)}),r[e](o,...s)}function yo(t,e,n){const s=de(t);He(s,"iterate",hr);const r=s[e](...n);return(r===-1||r===!1)&&Ta(n[0])?(n[0]=de(n[0]),s[e](...n)):r}function Hs(t,e,n=[]){Jt(),ya();const s=de(t)[e].apply(t,n);return va(),Xt(),s}const _p=fa("__proto__,__v_isRef,__isVue"),uh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zt));function yp(t){Zt(t)||(t=String(t));const e=de(this);return He(e,"has",t),e.hasOwnProperty(t)}class hh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(r?o?Rp:gh:o?ph:dh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=te(e);if(!r){let u;if(a&&(u=gp[n]))return u;if(n==="hasOwnProperty")return yp}const l=Reflect.get(e,n,Ce(e)?e:s);if((Zt(n)?uh.has(n):_p(n))||(r||He(e,"get",n),o))return l;if(Ce(l)){const u=a&&ga(n)?l:l.value;return r&&be(u)?Wo(u):u}return be(l)?r?Wo(l):Sr(l):l}}class fh extends hh{constructor(e=!1){super(!1,e)}set(e,n,s,r){let o=e[n];if(!this._isShallow){const u=Sn(o);if(!ct(s)&&!Sn(s)&&(o=de(o),s=de(s)),!te(e)&&Ce(o)&&!Ce(s))return u||(o.value=s),!0}const a=te(e)&&ga(n)?Number(n)<e.length:ge(e,n),l=Reflect.set(e,n,s,Ce(e)?e:r);return e===de(r)&&(a?En(s,o)&&Wt(e,"set",n,s):Wt(e,"add",n,s)),l}deleteProperty(e,n){const s=ge(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Wt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Zt(n)||!uh.has(n))&&He(e,"has",n),s}ownKeys(e){return He(e,"iterate",te(e)?"length":$n),Reflect.ownKeys(e)}}class vp extends hh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ep=new fh,wp=new vp,Ip=new fh(!0);const $o=t=>t,$r=t=>Reflect.getPrototypeOf(t);function bp(t,e,n){return function(...s){const r=this.__v_raw,o=de(r),a=fs(o),l=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,f=r[t](...s),d=n?$o:e?ui:Me;return!e&&He(o,"iterate",u?Ho:$n),{next(){const{value:g,done:v}=f.next();return v?{value:g,done:v}:{value:l?[d(g[0]),d(g[1])]:d(g),done:v}},[Symbol.iterator](){return this}}}}function Wr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Tp(t,e){const n={get(r){const o=this.__v_raw,a=de(o),l=de(r);t||(En(r,l)&&He(a,"get",r),He(a,"get",l));const{has:u}=$r(a),f=e?$o:t?ui:Me;if(u.call(a,r))return f(o.get(r));if(u.call(a,l))return f(o.get(l));o!==a&&o.get(r)},get size(){const r=this.__v_raw;return!t&&He(de(r),"iterate",$n),r.size},has(r){const o=this.__v_raw,a=de(o),l=de(r);return t||(En(r,l)&&He(a,"has",r),He(a,"has",l)),r===l?o.has(r):o.has(r)||o.has(l)},forEach(r,o){const a=this,l=a.__v_raw,u=de(l),f=e?$o:t?ui:Me;return!t&&He(u,"iterate",$n),l.forEach((d,g)=>r.call(o,f(d),f(g),a))}};return Ne(n,t?{add:Wr("add"),set:Wr("set"),delete:Wr("delete"),clear:Wr("clear")}:{add(r){!e&&!ct(r)&&!Sn(r)&&(r=de(r));const o=de(this);return $r(o).has.call(o,r)||(o.add(r),Wt(o,"add",r,r)),this},set(r,o){!e&&!ct(o)&&!Sn(o)&&(o=de(o));const a=de(this),{has:l,get:u}=$r(a);let f=l.call(a,r);f||(r=de(r),f=l.call(a,r));const d=u.call(a,r);return a.set(r,o),f?En(o,d)&&Wt(a,"set",r,o):Wt(a,"add",r,o),this},delete(r){const o=de(this),{has:a,get:l}=$r(o);let u=a.call(o,r);u||(r=de(r),u=a.call(o,r)),l&&l.call(o,r);const f=o.delete(r);return u&&Wt(o,"delete",r,void 0),f},clear(){const r=de(this),o=r.size!==0,a=r.clear();return o&&Wt(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=bp(r,t,e)}),n}function Ia(t,e){const n=Tp(t,e);return(s,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ge(n,r)&&r in s?n:s,r,o)}const Sp={get:Ia(!1,!1)},Ap={get:Ia(!1,!0)},Cp={get:Ia(!0,!1)};const dh=new WeakMap,ph=new WeakMap,gh=new WeakMap,Rp=new WeakMap;function Pp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Op(t){return t.__v_skip||!Object.isExtensible(t)?0:Pp(ep(t))}function Sr(t){return Sn(t)?t:ba(t,!1,Ep,Sp,dh)}function mh(t){return ba(t,!1,Ip,Ap,ph)}function Wo(t){return ba(t,!0,wp,Cp,gh)}function ba(t,e,n,s,r){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=Op(t);if(o===0)return t;const a=r.get(t);if(a)return a;const l=new Proxy(t,o===2?s:n);return r.set(t,l),l}function wn(t){return Sn(t)?wn(t.__v_raw):!!(t&&t.__v_isReactive)}function Sn(t){return!!(t&&t.__v_isReadonly)}function ct(t){return!!(t&&t.__v_isShallow)}function Ta(t){return t?!!t.__v_raw:!1}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function Sa(t){return!ge(t,"__v_skip")&&Object.isExtensible(t)&&Ju(t,"__v_skip",!0),t}const Me=t=>be(t)?Sr(t):t,ui=t=>be(t)?Wo(t):t;function Ce(t){return t?t.__v_isRef===!0:!1}function fr(t){return _h(t,!1)}function kp(t){return _h(t,!0)}function _h(t,e){return Ce(t)?t:new Np(t,e)}class Np{constructor(e,n){this.dep=new wa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:de(e),this._value=n?e:Me(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||ct(e)||Sn(e);e=s?e:de(e),En(e,n)&&(this._rawValue=e,this._value=s?e:Me(e),this.dep.trigger())}}function ds(t){return Ce(t)?t.value:t}const Dp={get:(t,e,n)=>e==="__v_raw"?t:ds(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ce(r)&&!Ce(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function yh(t){return wn(t)?t:new Proxy(t,Dp)}function Lp(t){const e=te(t)?new Array(t.length):{};for(const n in t)e[n]=Mp(t,n);return e}class xp{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return pp(de(this._object),this._key)}}function Mp(t,e,n){const s=t[e];return Ce(s)?s:new xp(t,e,n)}class Up{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new wa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ie!==this)return rh(this,!0),!0}get value(){const e=this.dep.track();return ah(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fp(t,e,n=!1){let s,r;return se(t)?s=t:(s=t.get,r=t.set),new Up(s,r,n)}const Kr={},hi=new WeakMap;let Fn;function Vp(t,e=!1,n=Fn){if(n){let s=hi.get(n);s||hi.set(n,s=[]),s.push(t)}}function jp(t,e,n=we){const{immediate:s,deep:r,once:o,scheduler:a,augmentJob:l,call:u}=n,f=V=>r?V:ct(V)||r===!1||r===0?Kt(V,1):Kt(V);let d,g,v,A,O=!1,x=!1;if(Ce(t)?(g=()=>t.value,O=ct(t)):wn(t)?(g=()=>f(t),O=!0):te(t)?(x=!0,O=t.some(V=>wn(V)||ct(V)),g=()=>t.map(V=>{if(Ce(V))return V.value;if(wn(V))return f(V);if(se(V))return u?u(V,2):V()})):se(t)?e?g=u?()=>u(t,2):t:g=()=>{if(v){Jt();try{v()}finally{Xt()}}const V=Fn;Fn=d;try{return u?u(t,3,[A]):t(A)}finally{Fn=V}}:g=kt,e&&r){const V=g,J=r===!0?1/0:r;g=()=>Kt(V(),J)}const j=th(),$=()=>{d.stop(),j&&j.active&&pa(j.effects,d)};if(o&&e){const V=e;e=(...J)=>{V(...J),$()}}let B=x?new Array(t.length).fill(Kr):Kr;const W=V=>{if(!(!(d.flags&1)||!d.dirty&&!V))if(e){const J=d.run();if(r||O||(x?J.some((ne,S)=>En(ne,B[S])):En(J,B))){v&&v();const ne=Fn;Fn=d;try{const S=[J,B===Kr?void 0:x&&B[0]===Kr?[]:B,A];B=J,u?u(e,3,S):e(...S)}finally{Fn=ne}}}else d.run()};return l&&l(W),d=new nh(g),d.scheduler=a?()=>a(W,!1):W,A=V=>Vp(V,!1,d),v=d.onStop=()=>{const V=hi.get(d);if(V){if(u)u(V,4);else for(const J of V)J();hi.delete(d)}},e?s?W(!0):B=d.run():a?a(W.bind(null,!0),!0):d.run(),$.pause=d.pause.bind(d),$.resume=d.resume.bind(d),$.stop=$,$}function Kt(t,e=1/0,n){if(e<=0||!be(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ce(t))Kt(t.value,e,n);else if(te(t))for(let s=0;s<t.length;s++)Kt(t[s],e,n);else if(Ku(t)||fs(t))t.forEach(s=>{Kt(s,e,n)});else if(qu(t)){for(const s in t)Kt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Kt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ar(t,e,n,s){try{return s?t(...s):t()}catch(r){Fi(r,e,n)}}function yt(t,e,n,s){if(se(t)){const r=Ar(t,e,n,s);return r&&Gu(r)&&r.catch(o=>{Fi(o,e,n)}),r}if(te(t)){const r=[];for(let o=0;o<t.length;o++)r.push(yt(t[o],e,n,s));return r}}function Fi(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||we;if(e){let l=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](t,u,f)===!1)return}l=l.parent}if(o){Jt(),Ar(o,null,10,[t,u,f]),Xt();return}}Bp(t,n,r,s,a)}function Bp(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const qe=[];let At=-1;const ps=[];let dn=null,as=0;const vh=Promise.resolve();let fi=null;function Aa(t){const e=fi||vh;return t?e.then(this?t.bind(this):t):e}function Hp(t){let e=At+1,n=qe.length;for(;e<n;){const s=e+n>>>1,r=qe[s],o=dr(r);o<t||o===t&&r.flags&2?e=s+1:n=s}return e}function Ca(t){if(!(t.flags&1)){const e=dr(t),n=qe[qe.length-1];!n||!(t.flags&2)&&e>=dr(n)?qe.push(t):qe.splice(Hp(e),0,t),t.flags|=1,Eh()}}function Eh(){fi||(fi=vh.then(Ih))}function $p(t){te(t)?ps.push(...t):dn&&t.id===-1?dn.splice(as+1,0,t):t.flags&1||(ps.push(t),t.flags|=1),Eh()}function Gc(t,e,n=At+1){for(;n<qe.length;n++){const s=qe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;qe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function wh(t){if(ps.length){const e=[...new Set(ps)].sort((n,s)=>dr(n)-dr(s));if(ps.length=0,dn){dn.push(...e);return}for(dn=e,as=0;as<dn.length;as++){const n=dn[as];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}dn=null,as=0}}const dr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ih(t){try{for(At=0;At<qe.length;At++){const e=qe[At];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ar(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;At<qe.length;At++){const e=qe[At];e&&(e.flags&=-2)}At=-1,qe.length=0,wh(),fi=null,(qe.length||ps.length)&&Ih()}}let Ue=null,bh=null;function di(t){const e=Ue;return Ue=t,bh=t&&t.type.__scopeId||null,e}function Wp(t,e=Ue,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&_i(-1);const o=di(e);let a;try{a=t(...r)}finally{di(o),s._d&&_i(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function QI(t,e){if(Ue===null)return t;const n=$i(Ue),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,u=we]=e[r];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Kt(a),s.push({dir:o,instance:n,value:a,oldValue:void 0,arg:l,modifiers:u}))}return t}function Ln(t,e,n,s){const r=t.dirs,o=e&&e.dirs;for(let a=0;a<r.length;a++){const l=r[a];o&&(l.oldValue=o[a].value);let u=l.dir[s];u&&(Jt(),yt(u,n,8,[t.el,l,t,e]),Xt())}}const Kp=Symbol("_vte"),Th=t=>t.__isTeleport,$t=Symbol("_leaveCb"),Gr=Symbol("_enterCb");function Gp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dh(()=>{t.isMounted=!0}),Lh(()=>{t.isUnmounting=!0}),t}const it=[Function,Array],Sh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:it,onEnter:it,onAfterEnter:it,onEnterCancelled:it,onBeforeLeave:it,onLeave:it,onAfterLeave:it,onLeaveCancelled:it,onBeforeAppear:it,onAppear:it,onAfterAppear:it,onAppearCancelled:it},Ah=t=>{const e=t.subTree;return e.component?Ah(e.component):e},zp={name:"BaseTransition",props:Sh,setup(t,{slots:e}){const n=ka(),s=Gp();return()=>{const r=e.default&&Ph(e.default(),!0);if(!r||!r.length)return;const o=Ch(r),a=de(t),{mode:l}=a;if(s.isLeaving)return vo(o);const u=zc(o);if(!u)return vo(o);let f=Ko(u,a,s,n,g=>f=g);u.type!==$e&&pr(u,f);let d=n.subTree&&zc(n.subTree);if(d&&d.type!==$e&&!jn(d,u)&&Ah(n).type!==$e){let g=Ko(d,a,s,n);if(pr(d,g),l==="out-in"&&u.type!==$e)return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete g.afterLeave,d=void 0},vo(o);l==="in-out"&&u.type!==$e?g.delayLeave=(v,A,O)=>{const x=Rh(s,d);x[String(d.key)]=d,v[$t]=()=>{A(),v[$t]=void 0,delete f.delayedLeave,d=void 0},f.delayedLeave=()=>{O(),delete f.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function Ch(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==$e){e=n;break}}return e}const qp=zp;function Rh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ko(t,e,n,s,r){const{appear:o,mode:a,persisted:l=!1,onBeforeEnter:u,onEnter:f,onAfterEnter:d,onEnterCancelled:g,onBeforeLeave:v,onLeave:A,onAfterLeave:O,onLeaveCancelled:x,onBeforeAppear:j,onAppear:$,onAfterAppear:B,onAppearCancelled:W}=e,V=String(t.key),J=Rh(n,t),ne=(m,b)=>{m&&yt(m,s,9,b)},S=(m,b)=>{const I=b[1];ne(m,b),te(m)?m.every(w=>w.length<=1)&&I():m.length<=1&&I()},_={mode:a,persisted:l,beforeEnter(m){let b=u;if(!n.isMounted)if(o)b=j||u;else return;m[$t]&&m[$t](!0);const I=J[V];I&&jn(t,I)&&I.el[$t]&&I.el[$t](),ne(b,[m])},enter(m){let b=f,I=d,w=g;if(!n.isMounted)if(o)b=$||f,I=B||d,w=W||g;else return;let y=!1;const ae=m[Gr]=Se=>{y||(y=!0,Se?ne(w,[m]):ne(I,[m]),_.delayedLeave&&_.delayedLeave(),m[Gr]=void 0)};b?S(b,[m,ae]):ae()},leave(m,b){const I=String(t.key);if(m[Gr]&&m[Gr](!0),n.isUnmounting)return b();ne(v,[m]);let w=!1;const y=m[$t]=ae=>{w||(w=!0,b(),ae?ne(x,[m]):ne(O,[m]),m[$t]=void 0,J[I]===t&&delete J[I])};J[I]=t,A?S(A,[m,y]):y()},clone(m){const b=Ko(m,e,n,s,r);return r&&r(b),b}};return _}function vo(t){if(Vi(t))return t=An(t),t.children=null,t}function zc(t){if(!Vi(t))return Th(t.type)&&t.children?Ch(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&se(n.default))return n.default()}}function pr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,pr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ph(t,e=!1,n){let s=[],r=0;for(let o=0;o<t.length;o++){let a=t[o];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:o);a.type===tt?(a.patchFlag&128&&r++,s=s.concat(Ph(a.children,e,l))):(e||a.type!==$e)&&s.push(l!=null?An(a,{key:l}):a)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function Oh(t,e){return se(t)?Ne({name:t.name},e,{setup:t}):t}function kh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const pi=new WeakMap;function Qs(t,e,n,s,r=!1){if(te(t)){t.forEach((O,x)=>Qs(O,e&&(te(e)?e[x]:e),n,s,r));return}if(gs(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Qs(t,e,n,s.component.subTree);return}const o=s.shapeFlag&4?$i(s.component):s.el,a=r?null:o,{i:l,r:u}=t,f=e&&e.r,d=l.refs===we?l.refs={}:l.refs,g=l.setupState,v=de(g),A=g===we?Wu:O=>ge(v,O);if(f!=null&&f!==u){if(qc(e),Re(f))d[f]=null,A(f)&&(g[f]=null);else if(Ce(f)){f.value=null;const O=e;O.k&&(d[O.k]=null)}}if(se(u))Ar(u,l,12,[a,d]);else{const O=Re(u),x=Ce(u);if(O||x){const j=()=>{if(t.f){const $=O?A(u)?g[u]:d[u]:u.value;if(r)te($)&&pa($,o);else if(te($))$.includes(o)||$.push(o);else if(O)d[u]=[o],A(u)&&(g[u]=d[u]);else{const B=[o];u.value=B,t.k&&(d[t.k]=B)}}else O?(d[u]=a,A(u)&&(g[u]=a)):x&&(u.value=a,t.k&&(d[t.k]=a))};if(a){const $=()=>{j(),pi.delete(t)};$.id=-1,pi.set(t,$),et($,n)}else qc(t),j()}}}function qc(t){const e=pi.get(t);e&&(e.flags|=8,pi.delete(t))}Mi().requestIdleCallback;Mi().cancelIdleCallback;const gs=t=>!!t.type.__asyncLoader,Vi=t=>t.type.__isKeepAlive;function Jp(t,e){Nh(t,"a",e)}function Xp(t,e){Nh(t,"da",e)}function Nh(t,e,n=We){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ji(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Vi(r.parent.vnode)&&Yp(s,e,n,r),r=r.parent}}function Yp(t,e,n,s){const r=ji(e,t,s,!0);xh(()=>{pa(s[e],r)},n)}function ji(t,e,n=We,s=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{Jt();const l=Cr(n),u=yt(e,n,t,a);return l(),Xt(),u});return s?r.unshift(o):r.push(o),o}}const en=t=>(e,n=We)=>{(!_r||t==="sp")&&ji(t,(...s)=>e(...s),n)},Qp=en("bm"),Dh=en("m"),Zp=en("bu"),eg=en("u"),Lh=en("bum"),xh=en("um"),tg=en("sp"),ng=en("rtg"),sg=en("rtc");function rg(t,e=We){ji("ec",t,e)}const ig="components";function og(t,e){return cg(ig,t,!0,e)||t}const ag=Symbol.for("v-ndc");function cg(t,e,n=!0,s=!1){const r=Ue||We;if(r){const o=r.type;{const l=Yg(o,!1);if(l&&(l===e||l===ut(e)||l===xi(ut(e))))return o}const a=Jc(r[t]||o[t],e)||Jc(r.appContext[t],e);return!a&&s?o:a}}function Jc(t,e){return t&&(t[e]||t[ut(e)]||t[xi(ut(e))])}function ZI(t,e,n,s){let r;const o=n,a=te(t);if(a||Re(t)){const l=a&&wn(t);let u=!1,f=!1;l&&(u=!ct(t),f=Sn(t),t=Ui(t)),r=new Array(t.length);for(let d=0,g=t.length;d<g;d++)r[d]=e(u?f?ui(Me(t[d])):Me(t[d]):t[d],d,void 0,o)}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,o)}else if(be(t))if(t[Symbol.iterator])r=Array.from(t,(l,u)=>e(l,u,void 0,o));else{const l=Object.keys(t);r=new Array(l.length);for(let u=0,f=l.length;u<f;u++){const d=l[u];r[u]=e(t[d],d,u,o)}}else r=[];return r}function eb(t,e,n={},s,r){if(Ue.ce||Ue.parent&&gs(Ue.parent)&&Ue.parent.ce){const f=Object.keys(n).length>0;return mi(),yi(tt,null,[Je("slot",n,s)],f?-2:64)}let o=t[e];o&&o._c&&(o._d=!1),mi();const a=o&&Mh(o(n)),l=n.key||a&&a.key,u=yi(tt,{key:(l&&!Zt(l)?l:`_${e}`)+(!a&&s?"_fb":"")},a||[],a&&t._===1?64:-2);return u.scopeId&&(u.slotScopeIds=[u.scopeId+"-s"]),o&&o._c&&(o._d=!0),u}function Mh(t){return t.some(e=>mr(e)?!(e.type===$e||e.type===tt&&!Mh(e.children)):!0)?t:null}const Go=t=>t?sf(t)?$i(t):Go(t.parent):null,Zs=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Go(t.parent),$root:t=>Go(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Fh(t),$forceUpdate:t=>t.f||(t.f=()=>{Ca(t.update)}),$nextTick:t=>t.n||(t.n=Aa.bind(t.proxy)),$watch:t=>Og.bind(t)}),Eo=(t,e)=>t!==we&&!t.__isScriptSetup&&ge(t,e),lg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:o,accessCache:a,type:l,appContext:u}=t;let f;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(Eo(s,e))return a[e]=1,s[e];if(r!==we&&ge(r,e))return a[e]=2,r[e];if((f=t.propsOptions[0])&&ge(f,e))return a[e]=3,o[e];if(n!==we&&ge(n,e))return a[e]=4,n[e];zo&&(a[e]=0)}}const d=Zs[e];let g,v;if(d)return e==="$attrs"&&He(t.attrs,"get",""),d(t);if((g=l.__cssModules)&&(g=g[e]))return g;if(n!==we&&ge(n,e))return a[e]=4,n[e];if(v=u.config.globalProperties,ge(v,e))return v[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:o}=t;return Eo(r,e)?(r[e]=n,!0):s!==we&&ge(s,e)?(s[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:o,type:a}},l){let u,f;return!!(n[l]||t!==we&&l[0]!=="$"&&ge(t,l)||Eo(e,l)||(u=o[0])&&ge(u,l)||ge(s,l)||ge(Zs,l)||ge(r.config.globalProperties,l)||(f=a.__cssModules)&&f[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xc(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let zo=!0;function ug(t){const e=Fh(t),n=t.proxy,s=t.ctx;zo=!1,e.beforeCreate&&Yc(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:a,watch:l,provide:u,inject:f,created:d,beforeMount:g,mounted:v,beforeUpdate:A,updated:O,activated:x,deactivated:j,beforeDestroy:$,beforeUnmount:B,destroyed:W,unmounted:V,render:J,renderTracked:ne,renderTriggered:S,errorCaptured:_,serverPrefetch:m,expose:b,inheritAttrs:I,components:w,directives:y,filters:ae}=e;if(f&&hg(f,s,null),a)for(const re in a){const ce=a[re];se(ce)&&(s[re]=ce.bind(n))}if(r){const re=r.call(n,n);be(re)&&(t.data=Sr(re))}if(zo=!0,o)for(const re in o){const ce=o[re],Ye=se(ce)?ce.bind(n,n):se(ce.get)?ce.get.bind(n,n):kt,It=!se(ce)&&se(ce.set)?ce.set.bind(n):kt,Qe=ot({get:Ye,set:It});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:De=>Qe.value=De})}if(l)for(const re in l)Uh(l[re],s,n,re);if(u){const re=se(u)?u.call(n):u;Reflect.ownKeys(re).forEach(ce=>{Zr(ce,re[ce])})}d&&Yc(d,t,"c");function _e(re,ce){te(ce)?ce.forEach(Ye=>re(Ye.bind(n))):ce&&re(ce.bind(n))}if(_e(Qp,g),_e(Dh,v),_e(Zp,A),_e(eg,O),_e(Jp,x),_e(Xp,j),_e(rg,_),_e(sg,ne),_e(ng,S),_e(Lh,B),_e(xh,V),_e(tg,m),te(b))if(b.length){const re=t.exposed||(t.exposed={});b.forEach(ce=>{Object.defineProperty(re,ce,{get:()=>n[ce],set:Ye=>n[ce]=Ye,enumerable:!0})})}else t.exposed||(t.exposed={});J&&t.render===kt&&(t.render=J),I!=null&&(t.inheritAttrs=I),w&&(t.components=w),y&&(t.directives=y),m&&kh(t)}function hg(t,e,n=kt){te(t)&&(t=qo(t));for(const s in t){const r=t[s];let o;be(r)?"default"in r?o=lt(r.from||s,r.default,!0):o=lt(r.from||s):o=lt(r),Ce(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Yc(t,e,n){yt(te(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Uh(t,e,n,s){let r=s.includes(".")?Yh(n,s):()=>n[s];if(Re(t)){const o=e[t];se(o)&&er(r,o)}else if(se(t))er(r,t.bind(n));else if(be(t))if(te(t))t.forEach(o=>Uh(o,e,n,s));else{const o=se(t.handler)?t.handler.bind(n):e[t.handler];se(o)&&er(r,o,t)}}function Fh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,l=o.get(e);let u;return l?u=l:!r.length&&!n&&!s?u=e:(u={},r.length&&r.forEach(f=>gi(u,f,a,!0)),gi(u,e,a)),be(e)&&o.set(e,u),u}function gi(t,e,n,s=!1){const{mixins:r,extends:o}=e;o&&gi(t,o,n,!0),r&&r.forEach(a=>gi(t,a,n,!0));for(const a in e)if(!(s&&a==="expose")){const l=fg[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const fg={data:Qc,props:Zc,emits:Zc,methods:Gs,computed:Gs,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Gs,directives:Gs,watch:pg,provide:Qc,inject:dg};function Qc(t,e){return e?t?function(){return Ne(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function dg(t,e){return Gs(qo(t),qo(e))}function qo(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function Gs(t,e){return t?Ne(Object.create(null),t,e):e}function Zc(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:Ne(Object.create(null),Xc(t),Xc(e??{})):e}function pg(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const s in e)n[s]=Ge(t[s],e[s]);return n}function Vh(){return{app:null,config:{isNativeTag:Wu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gg=0;function mg(t,e){return function(s,r=null){se(s)||(s=Ne({},s)),r!=null&&!be(r)&&(r=null);const o=Vh(),a=new WeakSet,l=[];let u=!1;const f=o.app={_uid:gg++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Zg,get config(){return o.config},set config(d){},use(d,...g){return a.has(d)||(d&&se(d.install)?(a.add(d),d.install(f,...g)):se(d)&&(a.add(d),d(f,...g))),f},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),f},component(d,g){return g?(o.components[d]=g,f):o.components[d]},directive(d,g){return g?(o.directives[d]=g,f):o.directives[d]},mount(d,g,v){if(!u){const A=f._ceVNode||Je(s,r);return A.appContext=o,v===!0?v="svg":v===!1&&(v=void 0),t(A,d,v),u=!0,f._container=d,d.__vue_app__=f,$i(A.component)}},onUnmount(d){l.push(d)},unmount(){u&&(yt(l,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,g){return o.provides[d]=g,f},runWithContext(d){const g=Wn;Wn=f;try{return d()}finally{Wn=g}}};return f}}let Wn=null;function Zr(t,e){if(We){let n=We.provides;const s=We.parent&&We.parent.provides;s===n&&(n=We.provides=Object.create(s)),n[t]=e}}function lt(t,e,n=!1){const s=ka();if(s||Wn){let r=Wn?Wn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&se(e)?e.call(s&&s.proxy):e}}function _g(){return!!(ka()||Wn)}const jh={},Bh=()=>Object.create(jh),Hh=t=>Object.getPrototypeOf(t)===jh;function yg(t,e,n,s=!1){const r={},o=Bh();t.propsDefaults=Object.create(null),$h(t,e,r,o);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=s?r:mh(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function vg(t,e,n,s){const{props:r,attrs:o,vnode:{patchFlag:a}}=t,l=de(r),[u]=t.propsOptions;let f=!1;if((s||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let v=d[g];if(Bi(t.emitsOptions,v))continue;const A=e[v];if(u)if(ge(o,v))A!==o[v]&&(o[v]=A,f=!0);else{const O=ut(v);r[O]=Jo(u,l,O,A,t,!1)}else A!==o[v]&&(o[v]=A,f=!0)}}}else{$h(t,e,r,o)&&(f=!0);let d;for(const g in l)(!e||!ge(e,g)&&((d=Yn(g))===g||!ge(e,d)))&&(u?n&&(n[g]!==void 0||n[d]!==void 0)&&(r[g]=Jo(u,l,g,void 0,t,!0)):delete r[g]);if(o!==l)for(const g in o)(!e||!ge(e,g))&&(delete o[g],f=!0)}f&&Wt(t.attrs,"set","")}function $h(t,e,n,s){const[r,o]=t.propsOptions;let a=!1,l;if(e)for(let u in e){if(Js(u))continue;const f=e[u];let d;r&&ge(r,d=ut(u))?!o||!o.includes(d)?n[d]=f:(l||(l={}))[d]=f:Bi(t.emitsOptions,u)||(!(u in s)||f!==s[u])&&(s[u]=f,a=!0)}if(o){const u=de(n),f=l||we;for(let d=0;d<o.length;d++){const g=o[d];n[g]=Jo(r,u,g,f[g],t,!ge(f,g))}}return a}function Jo(t,e,n,s,r,o){const a=t[n];if(a!=null){const l=ge(a,"default");if(l&&s===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&se(u)){const{propsDefaults:f}=r;if(n in f)s=f[n];else{const d=Cr(r);s=f[n]=u.call(null,e),d()}}else s=u;r.ce&&r.ce._setProp(n,s)}a[0]&&(o&&!l?s=!1:a[1]&&(s===""||s===Yn(n))&&(s=!0))}return s}const Eg=new WeakMap;function Wh(t,e,n=!1){const s=n?Eg:e.propsCache,r=s.get(t);if(r)return r;const o=t.props,a={},l=[];let u=!1;if(!se(t)){const d=g=>{u=!0;const[v,A]=Wh(g,e,!0);Ne(a,v),A&&l.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!u)return be(t)&&s.set(t,hs),hs;if(te(o))for(let d=0;d<o.length;d++){const g=ut(o[d]);el(g)&&(a[g]=we)}else if(o)for(const d in o){const g=ut(d);if(el(g)){const v=o[d],A=a[g]=te(v)||se(v)?{type:v}:Ne({},v),O=A.type;let x=!1,j=!0;if(te(O))for(let $=0;$<O.length;++$){const B=O[$],W=se(B)&&B.name;if(W==="Boolean"){x=!0;break}else W==="String"&&(j=!1)}else x=se(O)&&O.name==="Boolean";A[0]=x,A[1]=j,(x||ge(A,"default"))&&l.push(g)}}const f=[a,l];return be(t)&&s.set(t,f),f}function el(t){return t[0]!=="$"&&!Js(t)}const Ra=t=>t==="_"||t==="_ctx"||t==="$stable",Pa=t=>te(t)?t.map(Rt):[Rt(t)],wg=(t,e,n)=>{if(e._n)return e;const s=Wp((...r)=>Pa(e(...r)),n);return s._c=!1,s},Kh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Ra(r))continue;const o=t[r];if(se(o))e[r]=wg(r,o,s);else if(o!=null){const a=Pa(o);e[r]=()=>a}}},Gh=(t,e)=>{const n=Pa(e);t.slots.default=()=>n},zh=(t,e,n)=>{for(const s in e)(n||!Ra(s))&&(t[s]=e[s])},Ig=(t,e,n)=>{const s=t.slots=Bh();if(t.vnode.shapeFlag&32){const r=e._;r?(zh(s,e,n),n&&Ju(s,"_",r,!0)):Kh(e,s)}else e&&Gh(t,e)},bg=(t,e,n)=>{const{vnode:s,slots:r}=t;let o=!0,a=we;if(s.shapeFlag&32){const l=e._;l?n&&l===1?o=!1:zh(r,e,n):(o=!e.$stable,Kh(e,r)),a=e}else e&&(Gh(t,e),a={default:1});if(o)for(const l in r)!Ra(l)&&a[l]==null&&delete r[l]},et=Fg;function Tg(t){return Sg(t)}function Sg(t,e){const n=Mi();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:a,createText:l,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:v,setScopeId:A=kt,insertStaticContent:O}=t,x=(E,T,C,D=null,L=null,k=null,K=void 0,F=null,M=!!T.dynamicChildren)=>{if(E===T)return;E&&!jn(E,T)&&(D=N(E),De(E,L,k,!0),E=null),T.patchFlag===-2&&(M=!1,T.dynamicChildren=null);const{type:U,ref:Q,shapeFlag:z}=T;switch(U){case Hi:j(E,T,C,D);break;case $e:$(E,T,C,D);break;case ei:E==null&&B(T,C,D,K);break;case tt:w(E,T,C,D,L,k,K,F,M);break;default:z&1?J(E,T,C,D,L,k,K,F,M):z&6?y(E,T,C,D,L,k,K,F,M):(z&64||z&128)&&U.process(E,T,C,D,L,k,K,F,M,X)}Q!=null&&L?Qs(Q,E&&E.ref,k,T||E,!T):Q==null&&E&&E.ref!=null&&Qs(E.ref,null,k,E,!0)},j=(E,T,C,D)=>{if(E==null)s(T.el=l(T.children),C,D);else{const L=T.el=E.el;T.children!==E.children&&f(L,T.children)}},$=(E,T,C,D)=>{E==null?s(T.el=u(T.children||""),C,D):T.el=E.el},B=(E,T,C,D)=>{[E.el,E.anchor]=O(E.children,T,C,D,E.el,E.anchor)},W=({el:E,anchor:T},C,D)=>{let L;for(;E&&E!==T;)L=v(E),s(E,C,D),E=L;s(T,C,D)},V=({el:E,anchor:T})=>{let C;for(;E&&E!==T;)C=v(E),r(E),E=C;r(T)},J=(E,T,C,D,L,k,K,F,M)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),E==null?ne(T,C,D,L,k,K,F,M):m(E,T,L,k,K,F,M)},ne=(E,T,C,D,L,k,K,F)=>{let M,U;const{props:Q,shapeFlag:z,transition:Y,dirs:Z}=E;if(M=E.el=a(E.type,k,Q&&Q.is,Q),z&8?d(M,E.children):z&16&&_(E.children,M,null,D,L,wo(E,k),K,F),Z&&Ln(E,null,D,"created"),S(M,E,E.scopeId,K,D),Q){for(const ve in Q)ve!=="value"&&!Js(ve)&&o(M,ve,null,Q[ve],k,D);"value"in Q&&o(M,"value",null,Q.value,k),(U=Q.onVnodeBeforeMount)&&St(U,D,E)}Z&&Ln(E,null,D,"beforeMount");const oe=Ag(L,Y);oe&&Y.beforeEnter(M),s(M,T,C),((U=Q&&Q.onVnodeMounted)||oe||Z)&&et(()=>{U&&St(U,D,E),oe&&Y.enter(M),Z&&Ln(E,null,D,"mounted")},L)},S=(E,T,C,D,L)=>{if(C&&A(E,C),D)for(let k=0;k<D.length;k++)A(E,D[k]);if(L){let k=L.subTree;if(T===k||Zh(k.type)&&(k.ssContent===T||k.ssFallback===T)){const K=L.vnode;S(E,K,K.scopeId,K.slotScopeIds,L.parent)}}},_=(E,T,C,D,L,k,K,F,M=0)=>{for(let U=M;U<E.length;U++){const Q=E[U]=F?pn(E[U]):Rt(E[U]);x(null,Q,T,C,D,L,k,K,F)}},m=(E,T,C,D,L,k,K)=>{const F=T.el=E.el;let{patchFlag:M,dynamicChildren:U,dirs:Q}=T;M|=E.patchFlag&16;const z=E.props||we,Y=T.props||we;let Z;if(C&&xn(C,!1),(Z=Y.onVnodeBeforeUpdate)&&St(Z,C,T,E),Q&&Ln(T,E,C,"beforeUpdate"),C&&xn(C,!0),(z.innerHTML&&Y.innerHTML==null||z.textContent&&Y.textContent==null)&&d(F,""),U?b(E.dynamicChildren,U,F,C,D,wo(T,L),k):K||ce(E,T,F,null,C,D,wo(T,L),k,!1),M>0){if(M&16)I(F,z,Y,C,L);else if(M&2&&z.class!==Y.class&&o(F,"class",null,Y.class,L),M&4&&o(F,"style",z.style,Y.style,L),M&8){const oe=T.dynamicProps;for(let ve=0;ve<oe.length;ve++){const fe=oe[ve],Ve=z[fe],je=Y[fe];(je!==Ve||fe==="value")&&o(F,fe,Ve,je,L,C)}}M&1&&E.children!==T.children&&d(F,T.children)}else!K&&U==null&&I(F,z,Y,C,L);((Z=Y.onVnodeUpdated)||Q)&&et(()=>{Z&&St(Z,C,T,E),Q&&Ln(T,E,C,"updated")},D)},b=(E,T,C,D,L,k,K)=>{for(let F=0;F<T.length;F++){const M=E[F],U=T[F],Q=M.el&&(M.type===tt||!jn(M,U)||M.shapeFlag&198)?g(M.el):C;x(M,U,Q,null,D,L,k,K,!0)}},I=(E,T,C,D,L)=>{if(T!==C){if(T!==we)for(const k in T)!Js(k)&&!(k in C)&&o(E,k,T[k],null,L,D);for(const k in C){if(Js(k))continue;const K=C[k],F=T[k];K!==F&&k!=="value"&&o(E,k,F,K,L,D)}"value"in C&&o(E,"value",T.value,C.value,L)}},w=(E,T,C,D,L,k,K,F,M)=>{const U=T.el=E?E.el:l(""),Q=T.anchor=E?E.anchor:l("");let{patchFlag:z,dynamicChildren:Y,slotScopeIds:Z}=T;Z&&(F=F?F.concat(Z):Z),E==null?(s(U,C,D),s(Q,C,D),_(T.children||[],C,Q,L,k,K,F,M)):z>0&&z&64&&Y&&E.dynamicChildren?(b(E.dynamicChildren,Y,C,L,k,K,F),(T.key!=null||L&&T===L.subTree)&&qh(E,T,!0)):ce(E,T,C,Q,L,k,K,F,M)},y=(E,T,C,D,L,k,K,F,M)=>{T.slotScopeIds=F,E==null?T.shapeFlag&512?L.ctx.activate(T,C,D,K,M):ae(T,C,D,L,k,K,M):Se(E,T,M)},ae=(E,T,C,D,L,k,K)=>{const F=E.component=Gg(E,D,L);if(Vi(E)&&(F.ctx.renderer=X),zg(F,!1,K),F.asyncDep){if(L&&L.registerDep(F,_e,K),!E.el){const M=F.subTree=Je($e);$(null,M,T,C),E.placeholder=M.el}}else _e(F,E,T,C,L,k,K)},Se=(E,T,C)=>{const D=T.component=E.component;if(Mg(E,T,C))if(D.asyncDep&&!D.asyncResolved){re(D,T,C);return}else D.next=T,D.update();else T.el=E.el,D.vnode=T},_e=(E,T,C,D,L,k,K)=>{const F=()=>{if(E.isMounted){let{next:z,bu:Y,u:Z,parent:oe,vnode:ve}=E;{const st=Jh(E);if(st){z&&(z.el=ve.el,re(E,z,K)),st.asyncDep.then(()=>{E.isUnmounted||F()});return}}let fe=z,Ve;xn(E,!1),z?(z.el=ve.el,re(E,z,K)):z=ve,Y&&Qr(Y),(Ve=z.props&&z.props.onVnodeBeforeUpdate)&&St(Ve,oe,z,ve),xn(E,!0);const je=nl(E),Ze=E.subTree;E.subTree=je,x(Ze,je,g(Ze.el),N(Ze),E,L,k),z.el=je.el,fe===null&&Ug(E,je.el),Z&&et(Z,L),(Ve=z.props&&z.props.onVnodeUpdated)&&et(()=>St(Ve,oe,z,ve),L)}else{let z;const{el:Y,props:Z}=T,{bm:oe,m:ve,parent:fe,root:Ve,type:je}=E,Ze=gs(T);xn(E,!1),oe&&Qr(oe),!Ze&&(z=Z&&Z.onVnodeBeforeMount)&&St(z,fe,T),xn(E,!0);{Ve.ce&&Ve.ce._def.shadowRoot!==!1&&Ve.ce._injectChildStyle(je);const st=E.subTree=nl(E);x(null,st,C,D,E,L,k),T.el=st.el}if(ve&&et(ve,L),!Ze&&(z=Z&&Z.onVnodeMounted)){const st=T;et(()=>St(z,fe,st),L)}(T.shapeFlag&256||fe&&gs(fe.vnode)&&fe.vnode.shapeFlag&256)&&E.a&&et(E.a,L),E.isMounted=!0,T=C=D=null}};E.scope.on();const M=E.effect=new nh(F);E.scope.off();const U=E.update=M.run.bind(M),Q=E.job=M.runIfDirty.bind(M);Q.i=E,Q.id=E.uid,M.scheduler=()=>Ca(Q),xn(E,!0),U()},re=(E,T,C)=>{T.component=E;const D=E.vnode.props;E.vnode=T,E.next=null,vg(E,T.props,D,C),bg(E,T.children,C),Jt(),Gc(E),Xt()},ce=(E,T,C,D,L,k,K,F,M=!1)=>{const U=E&&E.children,Q=E?E.shapeFlag:0,z=T.children,{patchFlag:Y,shapeFlag:Z}=T;if(Y>0){if(Y&128){It(U,z,C,D,L,k,K,F,M);return}else if(Y&256){Ye(U,z,C,D,L,k,K,F,M);return}}Z&8?(Q&16&&Fe(U,L,k),z!==U&&d(C,z)):Q&16?Z&16?It(U,z,C,D,L,k,K,F,M):Fe(U,L,k,!0):(Q&8&&d(C,""),Z&16&&_(z,C,D,L,k,K,F,M))},Ye=(E,T,C,D,L,k,K,F,M)=>{E=E||hs,T=T||hs;const U=E.length,Q=T.length,z=Math.min(U,Q);let Y;for(Y=0;Y<z;Y++){const Z=T[Y]=M?pn(T[Y]):Rt(T[Y]);x(E[Y],Z,C,null,L,k,K,F,M)}U>Q?Fe(E,L,k,!0,!1,z):_(T,C,D,L,k,K,F,M,z)},It=(E,T,C,D,L,k,K,F,M)=>{let U=0;const Q=T.length;let z=E.length-1,Y=Q-1;for(;U<=z&&U<=Y;){const Z=E[U],oe=T[U]=M?pn(T[U]):Rt(T[U]);if(jn(Z,oe))x(Z,oe,C,null,L,k,K,F,M);else break;U++}for(;U<=z&&U<=Y;){const Z=E[z],oe=T[Y]=M?pn(T[Y]):Rt(T[Y]);if(jn(Z,oe))x(Z,oe,C,null,L,k,K,F,M);else break;z--,Y--}if(U>z){if(U<=Y){const Z=Y+1,oe=Z<Q?T[Z].el:D;for(;U<=Y;)x(null,T[U]=M?pn(T[U]):Rt(T[U]),C,oe,L,k,K,F,M),U++}}else if(U>Y)for(;U<=z;)De(E[U],L,k,!0),U++;else{const Z=U,oe=U,ve=new Map;for(U=oe;U<=Y;U++){const Le=T[U]=M?pn(T[U]):Rt(T[U]);Le.key!=null&&ve.set(Le.key,U)}let fe,Ve=0;const je=Y-oe+1;let Ze=!1,st=0;const ft=new Array(je);for(U=0;U<je;U++)ft[U]=0;for(U=Z;U<=z;U++){const Le=E[U];if(Ve>=je){De(Le,L,k,!0);continue}let xe;if(Le.key!=null)xe=ve.get(Le.key);else for(fe=oe;fe<=Y;fe++)if(ft[fe-oe]===0&&jn(Le,T[fe])){xe=fe;break}xe===void 0?De(Le,L,k,!0):(ft[xe-oe]=U+1,xe>=st?st=xe:Ze=!0,x(Le,T[xe],C,null,L,k,K,F,M),Ve++)}const es=Ze?Cg(ft):hs;for(fe=es.length-1,U=je-1;U>=0;U--){const Le=oe+U,xe=T[Le],Cs=T[Le+1],ts=Le+1<Q?Cs.el||Cs.placeholder:D;ft[U]===0?x(null,xe,C,ts,L,k,K,F,M):Ze&&(fe<0||U!==es[fe]?Qe(xe,C,ts,2):fe--)}}},Qe=(E,T,C,D,L=null)=>{const{el:k,type:K,transition:F,children:M,shapeFlag:U}=E;if(U&6){Qe(E.component.subTree,T,C,D);return}if(U&128){E.suspense.move(T,C,D);return}if(U&64){K.move(E,T,C,X);return}if(K===tt){s(k,T,C);for(let z=0;z<M.length;z++)Qe(M[z],T,C,D);s(E.anchor,T,C);return}if(K===ei){W(E,T,C);return}if(D!==2&&U&1&&F)if(D===0)F.beforeEnter(k),s(k,T,C),et(()=>F.enter(k),L);else{const{leave:z,delayLeave:Y,afterLeave:Z}=F,oe=()=>{E.ctx.isUnmounted?r(k):s(k,T,C)},ve=()=>{k._isLeaving&&k[$t](!0),z(k,()=>{oe(),Z&&Z()})};Y?Y(k,oe,ve):ve()}else s(k,T,C)},De=(E,T,C,D=!1,L=!1)=>{const{type:k,props:K,ref:F,children:M,dynamicChildren:U,shapeFlag:Q,patchFlag:z,dirs:Y,cacheIndex:Z}=E;if(z===-2&&(L=!1),F!=null&&(Jt(),Qs(F,null,C,E,!0),Xt()),Z!=null&&(T.renderCache[Z]=void 0),Q&256){T.ctx.deactivate(E);return}const oe=Q&1&&Y,ve=!gs(E);let fe;if(ve&&(fe=K&&K.onVnodeBeforeUnmount)&&St(fe,T,E),Q&6)tn(E.component,C,D);else{if(Q&128){E.suspense.unmount(C,D);return}oe&&Ln(E,null,T,"beforeUnmount"),Q&64?E.type.remove(E,T,C,X,D):U&&!U.hasOnce&&(k!==tt||z>0&&z&64)?Fe(U,T,C,!1,!0):(k===tt&&z&384||!L&&Q&16)&&Fe(M,T,C),D&&Ft(E)}(ve&&(fe=K&&K.onVnodeUnmounted)||oe)&&et(()=>{fe&&St(fe,T,E),oe&&Ln(E,null,T,"unmounted")},C)},Ft=E=>{const{type:T,el:C,anchor:D,transition:L}=E;if(T===tt){ht(C,D);return}if(T===ei){V(E);return}const k=()=>{r(C),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:K,delayLeave:F}=L,M=()=>K(C,k);F?F(E.el,k,M):M()}else k()},ht=(E,T)=>{let C;for(;E!==T;)C=v(E),r(E),E=C;r(T)},tn=(E,T,C)=>{const{bum:D,scope:L,job:k,subTree:K,um:F,m:M,a:U}=E;tl(M),tl(U),D&&Qr(D),L.stop(),k&&(k.flags|=8,De(K,E,T,C)),F&&et(F,T),et(()=>{E.isUnmounted=!0},T)},Fe=(E,T,C,D=!1,L=!1,k=0)=>{for(let K=k;K<E.length;K++)De(E[K],T,C,D,L)},N=E=>{if(E.shapeFlag&6)return N(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=v(E.anchor||E.el),C=T&&T[Kp];return C?v(C):T};let q=!1;const G=(E,T,C)=>{E==null?T._vnode&&De(T._vnode,null,null,!0):x(T._vnode||null,E,T,null,null,null,C),T._vnode=E,q||(q=!0,Gc(),wh(),q=!1)},X={p:x,um:De,m:Qe,r:Ft,mt:ae,mc:_,pc:ce,pbc:b,n:N,o:t};return{render:G,hydrate:void 0,createApp:mg(G)}}function wo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function xn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ag(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function qh(t,e,n=!1){const s=t.children,r=e.children;if(te(s)&&te(r))for(let o=0;o<s.length;o++){const a=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=pn(r[o]),l.el=a.el),!n&&l.patchFlag!==-2&&qh(a,l)),l.type===Hi&&l.patchFlag!==-1&&(l.el=a.el),l.type===$e&&!l.el&&(l.el=a.el)}}function Cg(t){const e=t.slice(),n=[0];let s,r,o,a,l;const u=t.length;for(s=0;s<u;s++){const f=t[s];if(f!==0){if(r=n[n.length-1],t[r]<f){e[s]=r,n.push(s);continue}for(o=0,a=n.length-1;o<a;)l=o+a>>1,t[n[l]]<f?o=l+1:a=l;f<t[n[o]]&&(o>0&&(e[s]=n[o-1]),n[o]=s)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Jh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jh(e)}function tl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Rg=Symbol.for("v-scx"),Pg=()=>lt(Rg);function er(t,e,n){return Xh(t,e,n)}function Xh(t,e,n=we){const{immediate:s,deep:r,flush:o,once:a}=n,l=Ne({},n),u=e&&s||!e&&o!=="post";let f;if(_r){if(o==="sync"){const A=Pg();f=A.__watcherHandles||(A.__watcherHandles=[])}else if(!u){const A=()=>{};return A.stop=kt,A.resume=kt,A.pause=kt,A}}const d=We;l.call=(A,O,x)=>yt(A,d,O,x);let g=!1;o==="post"?l.scheduler=A=>{et(A,d&&d.suspense)}:o!=="sync"&&(g=!0,l.scheduler=(A,O)=>{O?A():Ca(A)}),l.augmentJob=A=>{e&&(A.flags|=4),g&&(A.flags|=2,d&&(A.id=d.uid,A.i=d))};const v=jp(t,e,l);return _r&&(f?f.push(v):u&&v()),v}function Og(t,e,n){const s=this.proxy,r=Re(t)?t.includes(".")?Yh(s,t):()=>s[t]:t.bind(s,s);let o;se(e)?o=e:(o=e.handler,n=e);const a=Cr(this),l=Xh(r,o.bind(s),n);return a(),l}function Yh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const kg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ut(e)}Modifiers`]||t[`${Yn(e)}Modifiers`];function Ng(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let r=n;const o=e.startsWith("update:"),a=o&&kg(s,e.slice(7));a&&(a.trim&&(r=n.map(d=>Re(d)?d.trim():d)),a.number&&(r=n.map(jo)));let l,u=s[l=po(e)]||s[l=po(ut(e))];!u&&o&&(u=s[l=po(Yn(e))]),u&&yt(u,t,6,r);const f=s[l+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,yt(f,t,6,r)}}const Dg=new WeakMap;function Qh(t,e,n=!1){const s=n?Dg:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const o=t.emits;let a={},l=!1;if(!se(t)){const u=f=>{const d=Qh(f,e,!0);d&&(l=!0,Ne(a,d))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!o&&!l?(be(t)&&s.set(t,null),null):(te(o)?o.forEach(u=>a[u]=null):Ne(a,o),be(t)&&s.set(t,a),a)}function Bi(t,e){return!t||!Ni(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,Yn(e))||ge(t,e))}function nl(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[o],slots:a,attrs:l,emit:u,render:f,renderCache:d,props:g,data:v,setupState:A,ctx:O,inheritAttrs:x}=t,j=di(t);let $,B;try{if(n.shapeFlag&4){const V=r||s,J=V;$=Rt(f.call(J,V,d,g,A,v,O)),B=l}else{const V=e;$=Rt(V.length>1?V(g,{attrs:l,slots:a,emit:u}):V(g,null)),B=e.props?l:Lg(l)}}catch(V){tr.length=0,Fi(V,t,1),$=Je($e)}let W=$;if(B&&x!==!1){const V=Object.keys(B),{shapeFlag:J}=W;V.length&&J&7&&(o&&V.some(da)&&(B=xg(B,o)),W=An(W,B,!1,!0))}return n.dirs&&(W=An(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&pr(W,n.transition),$=W,di(j),$}const Lg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ni(n))&&((e||(e={}))[n]=t[n]);return e},xg=(t,e)=>{const n={};for(const s in t)(!da(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Mg(t,e,n){const{props:s,children:r,component:o}=t,{props:a,children:l,patchFlag:u}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?sl(s,a,f):!!a;if(u&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const v=d[g];if(a[v]!==s[v]&&!Bi(f,v))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===a?!1:s?a?sl(s,a,f):!0:!!a;return!1}function sl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(e[o]!==t[o]&&!Bi(n,o))return!0}return!1}function Ug({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Zh=t=>t.__isSuspense;function Fg(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):$p(t)}const tt=Symbol.for("v-fgt"),Hi=Symbol.for("v-txt"),$e=Symbol.for("v-cmt"),ei=Symbol.for("v-stc"),tr=[];let nt=null;function mi(t=!1){tr.push(nt=t?null:[])}function Vg(){tr.pop(),nt=tr[tr.length-1]||null}let gr=1;function _i(t,e=!1){gr+=t,t<0&&nt&&e&&(nt.hasOnce=!0)}function ef(t){return t.dynamicChildren=gr>0?nt||hs:null,Vg(),gr>0&&nt&&nt.push(t),t}function tb(t,e,n,s,r,o){return ef(nf(t,e,n,s,r,o,!0))}function yi(t,e,n,s,r){return ef(Je(t,e,n,s,r,!0))}function mr(t){return t?t.__v_isVNode===!0:!1}function jn(t,e){return t.type===e.type&&t.key===e.key}const tf=({key:t})=>t??null,ti=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||Ce(t)||se(t)?{i:Ue,r:t,k:e,f:!!n}:t:null);function nf(t,e=null,n=null,s=0,r=null,o=t===tt?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tf(e),ref:e&&ti(e),scopeId:bh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ue};return l?(Oa(u,n),o&128&&t.normalize(u)):n&&(u.shapeFlag|=Re(n)?8:16),gr>0&&!a&&nt&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&nt.push(u),u}const Je=jg;function jg(t,e=null,n=null,s=0,r=null,o=!1){if((!t||t===ag)&&(t=$e),mr(t)){const l=An(t,e,!0);return n&&Oa(l,n),gr>0&&!o&&nt&&(l.shapeFlag&6?nt[nt.indexOf(t)]=l:nt.push(l)),l.patchFlag=-2,l}if(Qg(t)&&(t=t.__vccOpts),e){e=Bg(e);let{class:l,style:u}=e;l&&!Re(l)&&(e.class=_a(l)),be(u)&&(Ta(u)&&!te(u)&&(u=Ne({},u)),e.style=ma(u))}const a=Re(t)?1:Zh(t)?128:Th(t)?64:be(t)?4:se(t)?2:0;return nf(t,e,n,s,r,a,o,!0)}function Bg(t){return t?Ta(t)||Hh(t)?Ne({},t):t:null}function An(t,e,n=!1,s=!1){const{props:r,ref:o,patchFlag:a,children:l,transition:u}=t,f=e?$g(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&tf(f),ref:e&&e.ref?n&&o?te(o)?o.concat(ti(e)):[o,ti(e)]:ti(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&An(t.ssContent),ssFallback:t.ssFallback&&An(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&s&&pr(d,u.clone(d)),d}function Hg(t=" ",e=0){return Je(Hi,null,t,e)}function nb(t,e){const n=Je(ei,null,t);return n.staticCount=e,n}function sb(t="",e=!1){return e?(mi(),yi($e,null,t)):Je($e,null,t)}function Rt(t){return t==null||typeof t=="boolean"?Je($e):te(t)?Je(tt,null,t.slice()):mr(t)?pn(t):Je(Hi,null,String(t))}function pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:An(t)}function Oa(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Oa(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Hh(e)?e._ctx=Ue:r===3&&Ue&&(Ue.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:Ue},n=32):(e=String(e),s&64?(n=16,e=[Hg(e)]):n=8);t.children=e,t.shapeFlag|=n}function $g(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=_a([e.class,s.class]));else if(r==="style")e.style=ma([e.style,s.style]);else if(Ni(r)){const o=e[r],a=s[r];a&&o!==a&&!(te(o)&&o.includes(a))&&(e[r]=o?[].concat(o,a):a)}else r!==""&&(e[r]=s[r])}return e}function St(t,e,n,s=null){yt(t,e,7,[n,s])}const Wg=Vh();let Kg=0;function Gg(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Wg,o={uid:Kg++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wh(s,r),emitsOptions:Qh(s,r),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Ng.bind(null,o),t.ce&&t.ce(o),o}let We=null;const ka=()=>We||Ue;let vi,Xo;{const t=Mi(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),o=>{r.length>1?r.forEach(a=>a(o)):r[0](o)}};vi=e("__VUE_INSTANCE_SETTERS__",n=>We=n),Xo=e("__VUE_SSR_SETTERS__",n=>_r=n)}const Cr=t=>{const e=We;return vi(t),t.scope.on(),()=>{t.scope.off(),vi(e)}},rl=()=>{We&&We.scope.off(),vi(null)};function sf(t){return t.vnode.shapeFlag&4}let _r=!1;function zg(t,e=!1,n=!1){e&&Xo(e);const{props:s,children:r}=t.vnode,o=sf(t);yg(t,s,o,e),Ig(t,r,n||e);const a=o?qg(t,e):void 0;return e&&Xo(!1),a}function qg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,lg);const{setup:s}=n;if(s){Jt();const r=t.setupContext=s.length>1?Xg(t):null,o=Cr(t),a=Ar(s,t,0,[t.props,r]),l=Gu(a);if(Xt(),o(),(l||t.sp)&&!gs(t)&&kh(t),l){if(a.then(rl,rl),e)return a.then(u=>{il(t,u)}).catch(u=>{Fi(u,t,0)});t.asyncDep=a}else il(t,a)}else rf(t)}function il(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=yh(e)),rf(t)}function rf(t,e,n){const s=t.type;t.render||(t.render=s.render||kt);{const r=Cr(t);Jt();try{ug(t)}finally{Xt(),r()}}}const Jg={get(t,e){return He(t,"get",""),t[e]}};function Xg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Jg),slots:t.slots,emit:t.emit,expose:e}}function $i(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(yh(Sa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zs)return Zs[n](t)},has(e,n){return n in e||n in Zs}})):t.proxy}function Yg(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function Qg(t){return se(t)&&"__vccOpts"in t}const ot=(t,e)=>Fp(t,e,_r);function Na(t,e,n){try{_i(-1);const s=arguments.length;return s===2?be(e)&&!te(e)?mr(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&mr(n)&&(n=[n]),Je(t,e,n))}finally{_i(1)}}const Zg="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yo;const ol=typeof window<"u"&&window.trustedTypes;if(ol)try{Yo=ol.createPolicy("vue",{createHTML:t=>t})}catch{}const of=Yo?t=>Yo.createHTML(t):t=>t,em="http://www.w3.org/2000/svg",tm="http://www.w3.org/1998/Math/MathML",Ht=typeof document<"u"?document:null,al=Ht&&Ht.createElement("template"),nm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Ht.createElementNS(em,t):e==="mathml"?Ht.createElementNS(tm,t):n?Ht.createElement(t,{is:n}):Ht.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,o){const a=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{al.innerHTML=of(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=al.content;if(s==="svg"||s==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ln="transition",$s="animation",yr=Symbol("_vtc"),af={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sm=Ne({},Sh,af),rm=t=>(t.displayName="Transition",t.props=sm,t),rb=rm((t,{slots:e})=>Na(qp,im(t),e)),Mn=(t,e=[])=>{te(t)?t.forEach(n=>n(...e)):t&&t(...e)},cl=t=>t?te(t)?t.some(e=>e.length>1):t.length>1:!1;function im(t){const e={};for(const w in t)w in af||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:f=a,appearToClass:d=l,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:A=`${n}-leave-to`}=t,O=om(r),x=O&&O[0],j=O&&O[1],{onBeforeEnter:$,onEnter:B,onEnterCancelled:W,onLeave:V,onLeaveCancelled:J,onBeforeAppear:ne=$,onAppear:S=B,onAppearCancelled:_=W}=e,m=(w,y,ae,Se)=>{w._enterCancelled=Se,Un(w,y?d:l),Un(w,y?f:a),ae&&ae()},b=(w,y)=>{w._isLeaving=!1,Un(w,g),Un(w,A),Un(w,v),y&&y()},I=w=>(y,ae)=>{const Se=w?S:B,_e=()=>m(y,w,ae);Mn(Se,[y,_e]),ll(()=>{Un(y,w?u:o),jt(y,w?d:l),cl(Se)||ul(y,s,x,_e)})};return Ne(e,{onBeforeEnter(w){Mn($,[w]),jt(w,o),jt(w,a)},onBeforeAppear(w){Mn(ne,[w]),jt(w,u),jt(w,f)},onEnter:I(!1),onAppear:I(!0),onLeave(w,y){w._isLeaving=!0;const ae=()=>b(w,y);jt(w,g),w._enterCancelled?(jt(w,v),dl(w)):(dl(w),jt(w,v)),ll(()=>{w._isLeaving&&(Un(w,g),jt(w,A),cl(V)||ul(w,s,j,ae))}),Mn(V,[w,ae])},onEnterCancelled(w){m(w,!1,void 0,!0),Mn(W,[w])},onAppearCancelled(w){m(w,!0,void 0,!0),Mn(_,[w])},onLeaveCancelled(w){b(w),Mn(J,[w])}})}function om(t){if(t==null)return null;if(be(t))return[Io(t.enter),Io(t.leave)];{const e=Io(t);return[e,e]}}function Io(t){return sp(t)}function jt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[yr]||(t[yr]=new Set)).add(e)}function Un(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[yr];n&&(n.delete(e),n.size||(t[yr]=void 0))}function ll(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let am=0;function ul(t,e,n,s){const r=t._endId=++am,o=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(o,n);const{type:a,timeout:l,propCount:u}=cm(t,e);if(!a)return s();const f=a+"end";let d=0;const g=()=>{t.removeEventListener(f,v),o()},v=A=>{A.target===t&&++d>=u&&g()};setTimeout(()=>{d<u&&g()},l+1),t.addEventListener(f,v)}function cm(t,e){const n=window.getComputedStyle(t),s=O=>(n[O]||"").split(", "),r=s(`${ln}Delay`),o=s(`${ln}Duration`),a=hl(r,o),l=s(`${$s}Delay`),u=s(`${$s}Duration`),f=hl(l,u);let d=null,g=0,v=0;e===ln?a>0&&(d=ln,g=a,v=o.length):e===$s?f>0&&(d=$s,g=f,v=u.length):(g=Math.max(a,f),d=g>0?a>f?ln:$s:null,v=d?d===ln?o.length:u.length:0);const A=d===ln&&/\b(?:transform|all)(?:,|$)/.test(s(`${ln}Property`).toString());return{type:d,timeout:g,propCount:v,hasTransform:A}}function hl(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>fl(n)+fl(t[s])))}function fl(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function dl(t){return(t?t.ownerDocument:document).body.offsetHeight}function lm(t,e,n){const s=t[yr];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ei=Symbol("_vod"),cf=Symbol("_vsh"),ib={name:"show",beforeMount(t,{value:e},{transition:n}){t[Ei]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ws(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ws(t,!0),s.enter(t)):s.leave(t,()=>{Ws(t,!1)}):Ws(t,e))},beforeUnmount(t,{value:e}){Ws(t,e)}};function Ws(t,e){t.style.display=e?t[Ei]:"none",t[cf]=!e}const um=Symbol(""),hm=/(?:^|;)\s*display\s*:/;function fm(t,e,n){const s=t.style,r=Re(n);let o=!1;if(n&&!r){if(e)if(Re(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&ni(s,l,"")}else for(const a in e)n[a]==null&&ni(s,a,"");for(const a in n)a==="display"&&(o=!0),ni(s,a,n[a])}else if(r){if(e!==n){const a=s[um];a&&(n+=";"+a),s.cssText=n,o=hm.test(n)}}else e&&t.removeAttribute("style");Ei in t&&(t[Ei]=o?s.display:"",t[cf]&&(s.display="none"))}const pl=/\s*!important$/;function ni(t,e,n){if(te(n))n.forEach(s=>ni(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=dm(t,e);pl.test(n)?t.setProperty(Yn(s),n.replace(pl,""),"important"):t[s]=n}}const gl=["Webkit","Moz","ms"],bo={};function dm(t,e){const n=bo[e];if(n)return n;let s=ut(e);if(s!=="filter"&&s in t)return bo[e]=s;s=xi(s);for(let r=0;r<gl.length;r++){const o=gl[r]+s;if(o in t)return bo[e]=o}return e}const ml="http://www.w3.org/1999/xlink";function _l(t,e,n,s,r,o=lp(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ml,e.slice(6,e.length)):t.setAttributeNS(ml,e,n):n==null||o&&!Xu(n)?t.removeAttribute(e):t.setAttribute(e,o?"":Zt(n)?String(n):n)}function yl(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?of(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Xu(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function cs(t,e,n,s){t.addEventListener(e,n,s)}function pm(t,e,n,s){t.removeEventListener(e,n,s)}const vl=Symbol("_vei");function gm(t,e,n,s,r=null){const o=t[vl]||(t[vl]={}),a=o[e];if(s&&a)a.value=s;else{const[l,u]=mm(e);if(s){const f=o[e]=vm(s,r);cs(t,l,f,u)}else a&&(pm(t,l,a,u),o[e]=void 0)}}const El=/(?:Once|Passive|Capture)$/;function mm(t){let e;if(El.test(t)){e={};let s;for(;s=t.match(El);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yn(t.slice(2)),e]}let To=0;const _m=Promise.resolve(),ym=()=>To||(_m.then(()=>To=0),To=Date.now());function vm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;yt(Em(s,n.value),e,5,[s])};return n.value=t,n.attached=ym(),n}function Em(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const wl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wm=(t,e,n,s,r,o)=>{const a=r==="svg";e==="class"?lm(t,s,a):e==="style"?fm(t,n,s):Ni(e)?da(e)||gm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Im(t,e,s,a))?(yl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&_l(t,e,s,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Re(s))?yl(t,ut(e),s,o,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),_l(t,e,s,a))};function Im(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&wl(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return wl(e)&&Re(n)?!1:e in t}const Il=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>Qr(e,n):e};function bm(t){t.target.composing=!0}function bl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const So=Symbol("_assign"),ob={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[So]=Il(r);const o=s||r.props&&r.props.type==="number";cs(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),o&&(l=jo(l)),t[So](l)}),n&&cs(t,"change",()=>{t.value=t.value.trim()}),e||(cs(t,"compositionstart",bm),cs(t,"compositionend",bl),cs(t,"change",bl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:o}},a){if(t[So]=Il(a),t.composing)return;const l=(o||t.type==="number")&&!/^0\d/.test(t.value)?jo(t.value):t.value,u=e??"";l!==u&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===u)||(t.value=u))}},Tm=["ctrl","shift","alt","meta"],Sm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Tm.some(n=>t[`${n}Key`]&&!e.includes(n))},ab=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...o)=>{for(let a=0;a<e.length;a++){const l=Sm[e[a]];if(l&&l(r,e))return}return t(r,...o)}))},Am=Ne({patchProp:wm},nm);let Tl;function Cm(){return Tl||(Tl=Tg(Am))}const Rm=((...t)=>{const e=Cm().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Om(s);if(!r)return;const o=e._component;!se(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,Pm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function Pm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Om(t){return Re(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let lf;const Wi=t=>lf=t,uf=Symbol();function Qo(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var nr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(nr||(nr={}));function km(){const t=eh(!0),e=t.run(()=>fr({}));let n=[],s=[];const r=Sa({install(o){Wi(r),r._a=o,o.provide(uf,r),o.config.globalProperties.$pinia=r,s.forEach(a=>n.push(a)),s=[]},use(o){return this._a?n.push(o):s.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const hf=()=>{};function Sl(t,e,n,s=hf){t.push(e);const r=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),s())};return!n&&th()&&hp(r),r}function os(t,...e){t.slice().forEach(n=>{n(...e)})}const Nm=t=>t(),Al=Symbol(),Ao=Symbol();function Zo(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Qo(r)&&Qo(s)&&t.hasOwnProperty(n)&&!Ce(s)&&!wn(s)?t[n]=Zo(r,s):t[n]=s}return t}const Dm=Symbol();function Lm(t){return!Qo(t)||!Object.prototype.hasOwnProperty.call(t,Dm)}const{assign:fn}=Object;function xm(t){return!!(Ce(t)&&t.effect)}function Mm(t,e,n,s){const{state:r,actions:o,getters:a}=e,l=n.state.value[t];let u;function f(){l||(n.state.value[t]=r?r():{});const d=Lp(n.state.value[t]);return fn(d,o,Object.keys(a||{}).reduce((g,v)=>(g[v]=Sa(ot(()=>{Wi(n);const A=n._s.get(t);return a[v].call(A,A)})),g),{}))}return u=ff(t,f,e,n,s,!0),u}function ff(t,e,n={},s,r,o){let a;const l=fn({actions:{}},n),u={deep:!0};let f,d,g=[],v=[],A;const O=s.state.value[t];!o&&!O&&(s.state.value[t]={}),fr({});let x;function j(_){let m;f=d=!1,typeof _=="function"?(_(s.state.value[t]),m={type:nr.patchFunction,storeId:t,events:A}):(Zo(s.state.value[t],_),m={type:nr.patchObject,payload:_,storeId:t,events:A});const b=x=Symbol();Aa().then(()=>{x===b&&(f=!0)}),d=!0,os(g,m,s.state.value[t])}const $=o?function(){const{state:m}=n,b=m?m():{};this.$patch(I=>{fn(I,b)})}:hf;function B(){a.stop(),g=[],v=[],s._s.delete(t)}const W=(_,m="")=>{if(Al in _)return _[Ao]=m,_;const b=function(){Wi(s);const I=Array.from(arguments),w=[],y=[];function ae(re){w.push(re)}function Se(re){y.push(re)}os(v,{args:I,name:b[Ao],store:J,after:ae,onError:Se});let _e;try{_e=_.apply(this&&this.$id===t?this:J,I)}catch(re){throw os(y,re),re}return _e instanceof Promise?_e.then(re=>(os(w,re),re)).catch(re=>(os(y,re),Promise.reject(re))):(os(w,_e),_e)};return b[Al]=!0,b[Ao]=m,b},V={_p:s,$id:t,$onAction:Sl.bind(null,v),$patch:j,$reset:$,$subscribe(_,m={}){const b=Sl(g,_,m.detached,()=>I()),I=a.run(()=>er(()=>s.state.value[t],w=>{(m.flush==="sync"?d:f)&&_({storeId:t,type:nr.direct,events:A},w)},fn({},u,m)));return b},$dispose:B},J=Sr(V);s._s.set(t,J);const S=(s._a&&s._a.runWithContext||Nm)(()=>s._e.run(()=>(a=eh()).run(()=>e({action:W}))));for(const _ in S){const m=S[_];if(Ce(m)&&!xm(m)||wn(m))o||(O&&Lm(m)&&(Ce(m)?m.value=O[_]:Zo(m,O[_])),s.state.value[t][_]=m);else if(typeof m=="function"){const b=W(m,_);S[_]=b,l.actions[_]=m}}return fn(J,S),fn(de(J),S),Object.defineProperty(J,"$state",{get:()=>s.state.value[t],set:_=>{j(m=>{fn(m,_)})}}),s._p.forEach(_=>{fn(J,a.run(()=>_({store:J,app:s._a,pinia:s,options:l})))}),O&&o&&n.hydrate&&n.hydrate(J.$state,O),f=!0,d=!0,J}/*! #__NO_SIDE_EFFECTS__ */function Um(t,e,n){let s;const r=typeof e=="function";s=r?n:e;function o(a,l){const u=_g();return a=a||(u?lt(uf,null):null),a&&Wi(a),a=lf,a._s.has(t)||(r?ff(t,e,s,a):Mm(t,s,a)),a._s.get(t)}return o.$id=t,o}const Fm=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Vm={};function jm(t,e){const n=og("RouterView");return mi(),yi(n)}const Bm=Fm(Vm,[["render",jm]]),Hm="modulepreload",$m=function(t){return"/"+t},Cl={},zr=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let u=function(f){return Promise.all(f.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=u(n.map(f=>{if(f=$m(f),f in Cl)return;Cl[f]=!0;const d=f.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${g}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":Hm,d||(v.as="script"),v.crossOrigin="",v.href=f,l&&v.setAttribute("nonce",l),document.head.appendChild(v),d)return new Promise((A,O)=>{v.addEventListener("load",A),v.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ls=typeof document<"u";function df(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Wm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&df(t.default)}const pe=Object.assign;function Co(t,e){const n={};for(const s in e){const r=e[s];n[s]=vt(r)?r.map(t):t(r)}return n}const sr=()=>{},vt=Array.isArray,pf=/#/g,Km=/&/g,Gm=/\//g,zm=/=/g,qm=/\?/g,gf=/\+/g,Jm=/%5B/g,Xm=/%5D/g,mf=/%5E/g,Ym=/%60/g,_f=/%7B/g,Qm=/%7C/g,yf=/%7D/g,Zm=/%20/g;function Da(t){return encodeURI(""+t).replace(Qm,"|").replace(Jm,"[").replace(Xm,"]")}function e_(t){return Da(t).replace(_f,"{").replace(yf,"}").replace(mf,"^")}function ea(t){return Da(t).replace(gf,"%2B").replace(Zm,"+").replace(pf,"%23").replace(Km,"%26").replace(Ym,"`").replace(_f,"{").replace(yf,"}").replace(mf,"^")}function t_(t){return ea(t).replace(zm,"%3D")}function n_(t){return Da(t).replace(pf,"%23").replace(qm,"%3F")}function s_(t){return t==null?"":n_(t).replace(Gm,"%2F")}function vr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const r_=/\/$/,i_=t=>t.replace(r_,"");function Ro(t,e,n="/"){let s,r={},o="",a="";const l=e.indexOf("#");let u=e.indexOf("?");return l<u&&l>=0&&(u=-1),u>-1&&(s=e.slice(0,u),o=e.slice(u+1,l>-1?l:e.length),r=t(o)),l>-1&&(s=s||e.slice(0,l),a=e.slice(l,e.length)),s=l_(s??e,n),{fullPath:s+(o&&"?")+o+a,path:s,query:r,hash:vr(a)}}function o_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function a_(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Es(e.matched[s],n.matched[r])&&vf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!c_(t[n],e[n]))return!1;return!0}function c_(t,e){return vt(t)?Pl(t,e):vt(e)?Pl(e,t):t===e}function Pl(t,e){return vt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function l_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let o=n.length-1,a,l;for(a=0;a<s.length;a++)if(l=s[a],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(a).join("/")}const un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Er;(function(t){t.pop="pop",t.push="push"})(Er||(Er={}));var rr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(rr||(rr={}));function u_(t){if(!t)if(ls){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),i_(t)}const h_=/^[^#]+#/;function f_(t,e){return t.replace(h_,"#")+e}function d_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ki=()=>({left:window.scrollX,top:window.scrollY});function p_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=d_(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ol(t,e){return(history.state?history.state.position-e:-1)+t}const ta=new Map;function g_(t,e){ta.set(t,e)}function m_(t){const e=ta.get(t);return ta.delete(t),e}let __=()=>location.protocol+"//"+location.host;function Ef(t,e){const{pathname:n,search:s,hash:r}=e,o=t.indexOf("#");if(o>-1){let l=r.includes(t.slice(o))?t.slice(o).length:1,u=r.slice(l);return u[0]!=="/"&&(u="/"+u),Rl(u,"")}return Rl(n,t)+s+r}function y_(t,e,n,s){let r=[],o=[],a=null;const l=({state:v})=>{const A=Ef(t,location),O=n.value,x=e.value;let j=0;if(v){if(n.value=A,e.value=v,a&&a===O){a=null;return}j=x?v.position-x.position:0}else s(A);r.forEach($=>{$(n.value,O,{delta:j,type:Er.pop,direction:j?j>0?rr.forward:rr.back:rr.unknown})})};function u(){a=n.value}function f(v){r.push(v);const A=()=>{const O=r.indexOf(v);O>-1&&r.splice(O,1)};return o.push(A),A}function d(){const{history:v}=window;v.state&&v.replaceState(pe({},v.state,{scroll:Ki()}),"")}function g(){for(const v of o)v();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:f,destroy:g}}function kl(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ki():null}}function v_(t){const{history:e,location:n}=window,s={value:Ef(t,n)},r={value:e.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(u,f,d){const g=t.indexOf("#"),v=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+u:__()+t+u;try{e[d?"replaceState":"pushState"](f,"",v),r.value=f}catch(A){console.error(A),n[d?"replace":"assign"](v)}}function a(u,f){const d=pe({},e.state,kl(r.value.back,u,r.value.forward,!0),f,{position:r.value.position});o(u,d,!0),s.value=u}function l(u,f){const d=pe({},r.value,e.state,{forward:u,scroll:Ki()});o(d.current,d,!0);const g=pe({},kl(s.value,u,null),{position:d.position+1},f);o(u,g,!1),s.value=u}return{location:s,state:r,push:l,replace:a}}function E_(t){t=u_(t);const e=v_(t),n=y_(t,e.state,e.location,e.replace);function s(o,a=!0){a||n.pauseListeners(),history.go(o)}const r=pe({location:"",base:t,go:s,createHref:f_.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function w_(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),E_(t)}function I_(t){return typeof t=="string"||t&&typeof t=="object"}function wf(t){return typeof t=="string"||typeof t=="symbol"}const If=Symbol("");var Nl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nl||(Nl={}));function ws(t,e){return pe(new Error,{type:t,[If]:!0},e)}function Bt(t,e){return t instanceof Error&&If in t&&(e==null||!!(t.type&e))}const Dl="[^/]+?",b_={sensitive:!1,strict:!1,start:!0,end:!0},T_=/[.+*?^${}()[\]/\\]/g;function S_(t,e){const n=pe({},b_,e),s=[];let r=n.start?"^":"";const o=[];for(const f of t){const d=f.length?[]:[90];n.strict&&!f.length&&(r+="/");for(let g=0;g<f.length;g++){const v=f[g];let A=40+(n.sensitive?.25:0);if(v.type===0)g||(r+="/"),r+=v.value.replace(T_,"\\$&"),A+=40;else if(v.type===1){const{value:O,repeatable:x,optional:j,regexp:$}=v;o.push({name:O,repeatable:x,optional:j});const B=$||Dl;if(B!==Dl){A+=10;try{new RegExp(`(${B})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${O}" (${B}): `+V.message)}}let W=x?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;g||(W=j&&f.length<2?`(?:/${W})`:"/"+W),j&&(W+="?"),r+=W,A+=20,j&&(A+=-8),x&&(A+=-20),B===".*"&&(A+=-50)}d.push(A)}s.push(d)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function l(f){const d=f.match(a),g={};if(!d)return null;for(let v=1;v<d.length;v++){const A=d[v]||"",O=o[v-1];g[O.name]=A&&O.repeatable?A.split("/"):A}return g}function u(f){let d="",g=!1;for(const v of t){(!g||!d.endsWith("/"))&&(d+="/"),g=!1;for(const A of v)if(A.type===0)d+=A.value;else if(A.type===1){const{value:O,repeatable:x,optional:j}=A,$=O in f?f[O]:"";if(vt($)&&!x)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const B=vt($)?$.join("/"):$;if(!B)if(j)v.length<2&&(d.endsWith("/")?d=d.slice(0,-1):g=!0);else throw new Error(`Missing required param "${O}"`);d+=B}}return d||"/"}return{re:a,score:s,keys:o,parse:l,stringify:u}}function A_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function bf(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const o=A_(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(Ll(s))return 1;if(Ll(r))return-1}return r.length-s.length}function Ll(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const C_={type:0,value:""},R_=/[a-zA-Z0-9_]/;function P_(t){if(!t)return[[]];if(t==="/")return[[C_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(A){throw new Error(`ERR (${n})/"${f}": ${A}`)}let n=0,s=n;const r=[];let o;function a(){o&&r.push(o),o=[]}let l=0,u,f="",d="";function g(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),f="")}function v(){f+=u}for(;l<t.length;){if(u=t[l++],u==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:u==="/"?(f&&g(),a()):u===":"?(g(),n=1):v();break;case 4:v(),n=s;break;case 1:u==="("?n=2:R_.test(u)?v():(g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:n=3:d+=u;break;case 3:g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),g(),a(),r}function O_(t,e,n){const s=S_(P_(t.path),n),r=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function k_(t,e){const n=[],s=new Map;e=Fl({strict:!1,end:!0,sensitive:!1},e);function r(g){return s.get(g)}function o(g,v,A){const O=!A,x=Ml(g);x.aliasOf=A&&A.record;const j=Fl(e,g),$=[x];if("alias"in g){const V=typeof g.alias=="string"?[g.alias]:g.alias;for(const J of V)$.push(Ml(pe({},x,{components:A?A.record.components:x.components,path:J,aliasOf:A?A.record:x})))}let B,W;for(const V of $){const{path:J}=V;if(v&&J[0]!=="/"){const ne=v.record.path,S=ne[ne.length-1]==="/"?"":"/";V.path=v.record.path+(J&&S+J)}if(B=O_(V,v,j),A?A.alias.push(B):(W=W||B,W!==B&&W.alias.push(B),O&&g.name&&!Ul(B)&&a(g.name)),Tf(B)&&u(B),x.children){const ne=x.children;for(let S=0;S<ne.length;S++)o(ne[S],B,A&&A.children[S])}A=A||B}return W?()=>{a(W)}:sr}function a(g){if(wf(g)){const v=s.get(g);v&&(s.delete(g),n.splice(n.indexOf(v),1),v.children.forEach(a),v.alias.forEach(a))}else{const v=n.indexOf(g);v>-1&&(n.splice(v,1),g.record.name&&s.delete(g.record.name),g.children.forEach(a),g.alias.forEach(a))}}function l(){return n}function u(g){const v=L_(g,n);n.splice(v,0,g),g.record.name&&!Ul(g)&&s.set(g.record.name,g)}function f(g,v){let A,O={},x,j;if("name"in g&&g.name){if(A=s.get(g.name),!A)throw ws(1,{location:g});j=A.record.name,O=pe(xl(v.params,A.keys.filter(W=>!W.optional).concat(A.parent?A.parent.keys.filter(W=>W.optional):[]).map(W=>W.name)),g.params&&xl(g.params,A.keys.map(W=>W.name))),x=A.stringify(O)}else if(g.path!=null)x=g.path,A=n.find(W=>W.re.test(x)),A&&(O=A.parse(x),j=A.record.name);else{if(A=v.name?s.get(v.name):n.find(W=>W.re.test(v.path)),!A)throw ws(1,{location:g,currentLocation:v});j=A.record.name,O=pe({},v.params,g.params),x=A.stringify(O)}const $=[];let B=A;for(;B;)$.unshift(B.record),B=B.parent;return{name:j,path:x,params:O,matched:$,meta:D_($)}}t.forEach(g=>o(g));function d(){n.length=0,s.clear()}return{addRoute:o,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:r}}function xl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Ml(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:N_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function N_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Ul(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function D_(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function Fl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function L_(t,e){let n=0,s=e.length;for(;n!==s;){const o=n+s>>1;bf(t,e[o])<0?s=o:n=o+1}const r=x_(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function x_(t){let e=t;for(;e=e.parent;)if(Tf(e)&&bf(t,e)===0)return e}function Tf({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function M_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(gf," "),a=o.indexOf("="),l=vr(a<0?o:o.slice(0,a)),u=a<0?null:vr(o.slice(a+1));if(l in e){let f=e[l];vt(f)||(f=e[l]=[f]),f.push(u)}else e[l]=u}return e}function Vl(t){let e="";for(let n in t){const s=t[n];if(n=t_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(vt(s)?s.map(o=>o&&ea(o)):[s&&ea(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function U_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=vt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const F_=Symbol(""),jl=Symbol(""),Gi=Symbol(""),La=Symbol(""),na=Symbol("");function Ks(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gn(t,e,n,s,r,o=a=>a()){const a=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,u)=>{const f=v=>{v===!1?u(ws(4,{from:n,to:e})):v instanceof Error?u(v):I_(v)?u(ws(2,{from:e,to:v})):(a&&s.enterCallbacks[r]===a&&typeof v=="function"&&a.push(v),l())},d=o(()=>t.call(s&&s.instances[r],e,n,f));let g=Promise.resolve(d);t.length<3&&(g=g.then(f)),g.catch(v=>u(v))})}function Po(t,e,n,s,r=o=>o()){const o=[];for(const a of t)for(const l in a.components){let u=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(df(u)){const d=(u.__vccOpts||u)[e];d&&o.push(gn(d,n,s,a,l,r))}else{let f=u();o.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const g=Wm(d)?d.default:d;a.mods[l]=d,a.components[l]=g;const A=(g.__vccOpts||g)[e];return A&&gn(A,n,s,a,l,r)()}))}}return o}function Bl(t){const e=lt(Gi),n=lt(La),s=ot(()=>{const u=ds(t.to);return e.resolve(u)}),r=ot(()=>{const{matched:u}=s.value,{length:f}=u,d=u[f-1],g=n.matched;if(!d||!g.length)return-1;const v=g.findIndex(Es.bind(null,d));if(v>-1)return v;const A=Hl(u[f-2]);return f>1&&Hl(d)===A&&g[g.length-1].path!==A?g.findIndex(Es.bind(null,u[f-2])):v}),o=ot(()=>r.value>-1&&$_(n.params,s.value.params)),a=ot(()=>r.value>-1&&r.value===n.matched.length-1&&vf(n.params,s.value.params));function l(u={}){if(H_(u)){const f=e[ds(t.replace)?"replace":"push"](ds(t.to)).catch(sr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:ot(()=>s.value.href),isActive:o,isExactActive:a,navigate:l}}function V_(t){return t.length===1?t[0]:t}const j_=Oh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Bl,setup(t,{slots:e}){const n=Sr(Bl(t)),{options:s}=lt(Gi),r=ot(()=>({[$l(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[$l(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&V_(e.default(n));return t.custom?o:Na("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),B_=j_;function H_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $_(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!vt(r)||r.length!==s.length||s.some((o,a)=>o!==r[a]))return!1}return!0}function Hl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $l=(t,e,n)=>t??e??n,W_=Oh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=lt(na),r=ot(()=>t.route||s.value),o=lt(jl,0),a=ot(()=>{let f=ds(o);const{matched:d}=r.value;let g;for(;(g=d[f])&&!g.components;)f++;return f}),l=ot(()=>r.value.matched[a.value]);Zr(jl,ot(()=>a.value+1)),Zr(F_,l),Zr(na,r);const u=fr();return er(()=>[u.value,l.value,t.name],([f,d,g],[v,A,O])=>{d&&(d.instances[g]=f,A&&A!==d&&f&&f===v&&(d.leaveGuards.size||(d.leaveGuards=A.leaveGuards),d.updateGuards.size||(d.updateGuards=A.updateGuards))),f&&d&&(!A||!Es(d,A)||!v)&&(d.enterCallbacks[g]||[]).forEach(x=>x(f))},{flush:"post"}),()=>{const f=r.value,d=t.name,g=l.value,v=g&&g.components[d];if(!v)return Wl(n.default,{Component:v,route:f});const A=g.props[d],O=A?A===!0?f.params:typeof A=="function"?A(f):A:null,j=Na(v,pe({},O,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(g.instances[d]=null)},ref:u}));return Wl(n.default,{Component:j,route:f})||j}}});function Wl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const K_=W_;function G_(t){const e=k_(t.routes,t),n=t.parseQuery||M_,s=t.stringifyQuery||Vl,r=t.history,o=Ks(),a=Ks(),l=Ks(),u=kp(un);let f=un;ls&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Co.bind(null,N=>""+N),g=Co.bind(null,s_),v=Co.bind(null,vr);function A(N,q){let G,X;return wf(N)?(G=e.getRecordMatcher(N),X=q):X=N,e.addRoute(X,G)}function O(N){const q=e.getRecordMatcher(N);q&&e.removeRoute(q)}function x(){return e.getRoutes().map(N=>N.record)}function j(N){return!!e.getRecordMatcher(N)}function $(N,q){if(q=pe({},q||u.value),typeof N=="string"){const C=Ro(n,N,q.path),D=e.resolve({path:C.path},q),L=r.createHref(C.fullPath);return pe(C,D,{params:v(D.params),hash:vr(C.hash),redirectedFrom:void 0,href:L})}let G;if(N.path!=null)G=pe({},N,{path:Ro(n,N.path,q.path).path});else{const C=pe({},N.params);for(const D in C)C[D]==null&&delete C[D];G=pe({},N,{params:g(C)}),q.params=g(q.params)}const X=e.resolve(G,q),ye=N.hash||"";X.params=d(v(X.params));const E=o_(s,pe({},N,{hash:e_(ye),path:X.path})),T=r.createHref(E);return pe({fullPath:E,hash:ye,query:s===Vl?U_(N.query):N.query||{}},X,{redirectedFrom:void 0,href:T})}function B(N){return typeof N=="string"?Ro(n,N,u.value.path):pe({},N)}function W(N,q){if(f!==N)return ws(8,{from:q,to:N})}function V(N){return S(N)}function J(N){return V(pe(B(N),{replace:!0}))}function ne(N){const q=N.matched[N.matched.length-1];if(q&&q.redirect){const{redirect:G}=q;let X=typeof G=="function"?G(N):G;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=B(X):{path:X},X.params={}),pe({query:N.query,hash:N.hash,params:X.path!=null?{}:N.params},X)}}function S(N,q){const G=f=$(N),X=u.value,ye=N.state,E=N.force,T=N.replace===!0,C=ne(G);if(C)return S(pe(B(C),{state:typeof C=="object"?pe({},ye,C.state):ye,force:E,replace:T}),q||G);const D=G;D.redirectedFrom=q;let L;return!E&&a_(s,X,G)&&(L=ws(16,{to:D,from:X}),Qe(X,X,!0,!1)),(L?Promise.resolve(L):b(D,X)).catch(k=>Bt(k)?Bt(k,2)?k:It(k):ce(k,D,X)).then(k=>{if(k){if(Bt(k,2))return S(pe({replace:T},B(k.to),{state:typeof k.to=="object"?pe({},ye,k.to.state):ye,force:E}),q||D)}else k=w(D,X,!0,T,ye);return I(D,X,k),k})}function _(N,q){const G=W(N,q);return G?Promise.reject(G):Promise.resolve()}function m(N){const q=ht.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(N):N()}function b(N,q){let G;const[X,ye,E]=z_(N,q);G=Po(X.reverse(),"beforeRouteLeave",N,q);for(const C of X)C.leaveGuards.forEach(D=>{G.push(gn(D,N,q))});const T=_.bind(null,N,q);return G.push(T),Fe(G).then(()=>{G=[];for(const C of o.list())G.push(gn(C,N,q));return G.push(T),Fe(G)}).then(()=>{G=Po(ye,"beforeRouteUpdate",N,q);for(const C of ye)C.updateGuards.forEach(D=>{G.push(gn(D,N,q))});return G.push(T),Fe(G)}).then(()=>{G=[];for(const C of E)if(C.beforeEnter)if(vt(C.beforeEnter))for(const D of C.beforeEnter)G.push(gn(D,N,q));else G.push(gn(C.beforeEnter,N,q));return G.push(T),Fe(G)}).then(()=>(N.matched.forEach(C=>C.enterCallbacks={}),G=Po(E,"beforeRouteEnter",N,q,m),G.push(T),Fe(G))).then(()=>{G=[];for(const C of a.list())G.push(gn(C,N,q));return G.push(T),Fe(G)}).catch(C=>Bt(C,8)?C:Promise.reject(C))}function I(N,q,G){l.list().forEach(X=>m(()=>X(N,q,G)))}function w(N,q,G,X,ye){const E=W(N,q);if(E)return E;const T=q===un,C=ls?history.state:{};G&&(X||T?r.replace(N.fullPath,pe({scroll:T&&C&&C.scroll},ye)):r.push(N.fullPath,ye)),u.value=N,Qe(N,q,G,T),It()}let y;function ae(){y||(y=r.listen((N,q,G)=>{if(!tn.listening)return;const X=$(N),ye=ne(X);if(ye){S(pe(ye,{replace:!0,force:!0}),X).catch(sr);return}f=X;const E=u.value;ls&&g_(Ol(E.fullPath,G.delta),Ki()),b(X,E).catch(T=>Bt(T,12)?T:Bt(T,2)?(S(pe(B(T.to),{force:!0}),X).then(C=>{Bt(C,20)&&!G.delta&&G.type===Er.pop&&r.go(-1,!1)}).catch(sr),Promise.reject()):(G.delta&&r.go(-G.delta,!1),ce(T,X,E))).then(T=>{T=T||w(X,E,!1),T&&(G.delta&&!Bt(T,8)?r.go(-G.delta,!1):G.type===Er.pop&&Bt(T,20)&&r.go(-1,!1)),I(X,E,T)}).catch(sr)}))}let Se=Ks(),_e=Ks(),re;function ce(N,q,G){It(N);const X=_e.list();return X.length?X.forEach(ye=>ye(N,q,G)):console.error(N),Promise.reject(N)}function Ye(){return re&&u.value!==un?Promise.resolve():new Promise((N,q)=>{Se.add([N,q])})}function It(N){return re||(re=!N,ae(),Se.list().forEach(([q,G])=>N?G(N):q()),Se.reset()),N}function Qe(N,q,G,X){const{scrollBehavior:ye}=t;if(!ls||!ye)return Promise.resolve();const E=!G&&m_(Ol(N.fullPath,0))||(X||!G)&&history.state&&history.state.scroll||null;return Aa().then(()=>ye(N,q,E)).then(T=>T&&p_(T)).catch(T=>ce(T,N,q))}const De=N=>r.go(N);let Ft;const ht=new Set,tn={currentRoute:u,listening:!0,addRoute:A,removeRoute:O,clearRoutes:e.clearRoutes,hasRoute:j,getRoutes:x,resolve:$,options:t,push:V,replace:J,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:o.add,beforeResolve:a.add,afterEach:l.add,onError:_e.add,isReady:Ye,install(N){const q=this;N.component("RouterLink",B_),N.component("RouterView",K_),N.config.globalProperties.$router=q,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>ds(u)}),ls&&!Ft&&u.value===un&&(Ft=!0,V(r.location).catch(ye=>{}));const G={};for(const ye in un)Object.defineProperty(G,ye,{get:()=>u.value[ye],enumerable:!0});N.provide(Gi,q),N.provide(La,mh(G)),N.provide(na,u);const X=N.unmount;ht.add(N),N.unmount=function(){ht.delete(N),ht.size<1&&(f=un,y&&y(),y=null,u.value=un,Ft=!1,re=!1),X()}}};function Fe(N){return N.reduce((q,G)=>q.then(()=>m(G)),Promise.resolve())}return tn}function z_(t,e){const n=[],s=[],r=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const l=e.matched[a];l&&(t.matched.find(f=>Es(f,l))?s.push(l):n.push(l));const u=t.matched[a];u&&(e.matched.find(f=>Es(f,u))||r.push(u))}return[n,s,r]}function cb(){return lt(Gi)}function lb(t){return lt(La)}const q_=()=>{};var Kl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},J_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],a=t[n++],l=t[n++],u=((r&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Af={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const o=t[r],a=r+1<t.length,l=a?t[r+1]:0,u=r+2<t.length,f=u?t[r+2]:0,d=o>>2,g=(o&3)<<4|l>>4;let v=(l&15)<<2|f>>6,A=f&63;u||(A=64,a||(v=64)),s.push(n[d],n[g],n[v],n[A])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):J_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const f=r<t.length?n[t.charAt(r)]:64;++r;const g=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||l==null||f==null||g==null)throw new X_;const v=o<<2|l>>4;if(s.push(v),f!==64){const A=l<<4&240|f>>2;if(s.push(A),g!==64){const O=f<<6&192|g;s.push(O)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class X_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y_=function(t){const e=Sf(t);return Af.encodeByteArray(e,!0)},wi=function(t){return Y_(t).replace(/\./g,"")},Cf=function(t){try{return Af.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=()=>Q_().__FIREBASE_DEFAULTS__,ey=()=>{if(typeof process>"u"||typeof Kl>"u")return;const t=Kl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ty=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cf(t[1]);return e&&JSON.parse(e)},xa=()=>{try{return q_()||Z_()||ey()||ty()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rf=t=>xa()?.emulatorHosts?.[t],Pf=t=>{const e=Rf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Of=()=>xa()?.config,kf=t=>xa()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ma(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[wi(JSON.stringify(n)),wi(JSON.stringify(a)),""].join(".")}const ir={};function sy(){const t={prod:[],emulator:[]};for(const e of Object.keys(ir))ir[e]?t.emulator.push(e):t.prod.push(e);return t}function ry(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Gl=!1;function Ua(t,e){if(typeof window>"u"||typeof document>"u"||!Ts(window.location.host)||ir[t]===e||ir[t]||Gl)return;ir[t]=e;function n(v){return`__firebase__banner__${v}`}const s="__firebase__banner",o=sy().prod.length>0;function a(){const v=document.getElementById(s);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function u(v,A){v.setAttribute("width","24"),v.setAttribute("id",A),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function f(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Gl=!0,a()},v}function d(v,A){v.setAttribute("id",A),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=ry(s),A=n("text"),O=document.getElementById(A)||document.createElement("span"),x=n("learnmore"),j=document.getElementById(x)||document.createElement("a"),$=n("preprendIcon"),B=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const W=v.element;l(W),d(j,x);const V=f();u(B,$),W.append(B,O,j,V),document.body.appendChild(W)}o?(O.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function oy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ay(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ly(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uy(){try{return typeof indexedDB=="object"}catch{return!1}}function hy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="FirebaseError";class Mt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=fy,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?dy(o,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new Mt(r,l,s)}}function dy(t,e){return t.replace(py,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const py=/\{\$([^}]+)}/g;function gy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const o=t[r],a=e[r];if(zl(o)&&zl(a)){if(!zn(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function zl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,o]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(o)}}),e}function qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function my(t,e){const n=new _y(t,e);return n.subscribe.bind(n)}class _y{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");yy(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Oo),r.error===void 0&&(r.error=Oo),r.complete===void 0&&(r.complete=Oo);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t){return t&&t._delegate?t._delegate:t}class Cn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ny;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wy(e))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=Vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vn){return this.instances.has(e)}getOptions(e=Vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);s===l&&a.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ey(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Vn){return this.component?this.component.multipleInstances?e:Vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ey(t){return t===Vn?void 0:t}function wy(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const by={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Ty=me.INFO,Sy={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},Ay=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Sy[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fa{constructor(e){this.name=e,this._logLevel=Ty,this._logHandler=Ay,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?by[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const Cy=(t,e)=>e.some(n=>t instanceof n);let ql,Jl;function Ry(){return ql||(ql=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Py(){return Jl||(Jl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Df=new WeakMap,sa=new WeakMap,Lf=new WeakMap,ko=new WeakMap,Va=new WeakMap;function Oy(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(In(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Df.set(n,t)}).catch(()=>{}),Va.set(e,t),e}function ky(t){if(sa.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});sa.set(t,e)}let ra={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return In(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ny(t){ra=t(ra)}function Dy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(No(this),e,...n);return Lf.set(s,e.sort?e.sort():[e]),In(s)}:Py().includes(t)?function(...e){return t.apply(No(this),e),In(Df.get(this))}:function(...e){return In(t.apply(No(this),e))}}function Ly(t){return typeof t=="function"?Dy(t):(t instanceof IDBTransaction&&ky(t),Cy(t,Ry())?new Proxy(t,ra):t)}function In(t){if(t instanceof IDBRequest)return Oy(t);if(ko.has(t))return ko.get(t);const e=Ly(t);return e!==t&&(ko.set(t,e),Va.set(e,t)),e}const No=t=>Va.get(t);function xy(t,e,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(t,e),l=In(a);return s&&a.addEventListener("upgradeneeded",u=>{s(In(a.result),u.oldVersion,u.newVersion,In(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),r&&u.addEventListener("versionchange",f=>r(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const My=["get","getKey","getAll","getAllKeys","count"],Uy=["put","add","delete","clear"],Do=new Map;function Xl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Do.get(e))return Do.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Uy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||My.includes(n)))return;const o=async function(a,...l){const u=this.transaction(a,r?"readwrite":"readonly");let f=u.store;return s&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),r&&u.done]))[0]};return Do.set(e,o),o}Ny(t=>({...t,get:(e,n,s)=>Xl(e,n)||t.get(e,n,s),has:(e,n)=>!!Xl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Vy(t){return t.getComponent()?.type==="VERSION"}const ia="@firebase/app",Yl="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new Fa("@firebase/app"),jy="@firebase/app-compat",By="@firebase/analytics-compat",Hy="@firebase/analytics",$y="@firebase/app-check-compat",Wy="@firebase/app-check",Ky="@firebase/auth",Gy="@firebase/auth-compat",zy="@firebase/database",qy="@firebase/data-connect",Jy="@firebase/database-compat",Xy="@firebase/functions",Yy="@firebase/functions-compat",Qy="@firebase/installations",Zy="@firebase/installations-compat",ev="@firebase/messaging",tv="@firebase/messaging-compat",nv="@firebase/performance",sv="@firebase/performance-compat",rv="@firebase/remote-config",iv="@firebase/remote-config-compat",ov="@firebase/storage",av="@firebase/storage-compat",cv="@firebase/firestore",lv="@firebase/ai",uv="@firebase/firestore-compat",hv="firebase",fv="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="[DEFAULT]",dv={[ia]:"fire-core",[jy]:"fire-core-compat",[Hy]:"fire-analytics",[By]:"fire-analytics-compat",[Wy]:"fire-app-check",[$y]:"fire-app-check-compat",[Ky]:"fire-auth",[Gy]:"fire-auth-compat",[zy]:"fire-rtdb",[qy]:"fire-data-connect",[Jy]:"fire-rtdb-compat",[Xy]:"fire-fn",[Yy]:"fire-fn-compat",[Qy]:"fire-iid",[Zy]:"fire-iid-compat",[ev]:"fire-fcm",[tv]:"fire-fcm-compat",[nv]:"fire-perf",[sv]:"fire-perf-compat",[rv]:"fire-rc",[iv]:"fire-rc-compat",[ov]:"fire-gcs",[av]:"fire-gcs-compat",[cv]:"fire-fst",[uv]:"fire-fst-compat",[lv]:"fire-vertex","fire-js":"fire-js",[hv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new Map,pv=new Map,aa=new Map;function Ql(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qn(t){const e=t.name;if(aa.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;aa.set(e,t);for(const n of Ii.values())Ql(n,t);for(const n of pv.values())Ql(n,t);return!0}function zi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function at(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new Rr("app","Firebase",gv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=fv;function xf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:oa,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw bn.create("bad-app-name",{appName:String(r)});if(n||(n=Of()),!n)throw bn.create("no-options");const o=Ii.get(r);if(o){if(zn(n,o.options)&&zn(s,o.config))return o;throw bn.create("duplicate-app",{appName:r})}const a=new Iy(r);for(const u of aa.values())a.addComponent(u);const l=new mv(n,s,a);return Ii.set(r,l),l}function ja(t=oa){const e=Ii.get(t);if(!e&&t===oa&&Of())return xf();if(!e)throw bn.create("no-app",{appName:t});return e}function Nt(t,e,n){let s=dv[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(a.join(" "));return}qn(new Cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="firebase-heartbeat-database",yv=1,wr="firebase-heartbeat-store";let Lo=null;function Mf(){return Lo||(Lo=xy(_v,yv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wr)}catch(n){console.warn(n)}}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),Lo}async function vv(t){try{const n=(await Mf()).transaction(wr),s=await n.objectStore(wr).get(Uf(t));return await n.done,s}catch(e){if(e instanceof Mt)Yt.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e?.message});Yt.warn(n.message)}}}async function Zl(t,e){try{const s=(await Mf()).transaction(wr,"readwrite");await s.objectStore(wr).put(e,Uf(t)),await s.done}catch(n){if(n instanceof Mt)Yt.warn(n.message);else{const s=bn.create("idb-set",{originalErrorMessage:n?.message});Yt.warn(s.message)}}}function Uf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=1024,wv=30;class Iv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=eu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>wv){const r=Sv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Yt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=eu(),{heartbeatsToSend:n,unsentEntries:s}=bv(this._heartbeatsCache.heartbeats),r=wi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Yt.warn(e),""}}}function eu(){return new Date().toISOString().substring(0,10)}function bv(t,e=Ev){const n=[];let s=t.slice();for(const r of t){const o=n.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),tu(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Tv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uy()?hy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vv(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Zl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Zl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tu(t){return wi(JSON.stringify({version:2,heartbeats:t})).length}function Sv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){qn(new Cn("platform-logger",e=>new Fy(e),"PRIVATE")),qn(new Cn("heartbeat",e=>new Iv(e),"PRIVATE")),Nt(ia,Yl,t),Nt(ia,Yl,"esm2020"),Nt("fire-js","")}Av("");function Ff(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cv=Ff,Vf=new Rr("auth","Firebase",Ff());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new Fa("@firebase/auth");function Rv(t,...e){bi.logLevel<=me.WARN&&bi.warn(`Auth (${Qn}): ${t}`,...e)}function si(t,...e){bi.logLevel<=me.ERROR&&bi.error(`Auth (${Qn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,...e){throw Ba(t,...e)}function Dt(t,...e){return Ba(t,...e)}function jf(t,e,n){const s={...Cv(),[e]:n};return new Rr("auth","Firebase",s).create(e,{appName:t.name})}function Tn(t){return jf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ba(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Vf.create(t,...e)}function ee(t,e,...n){if(!t)throw Ba(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw si(e),new Error(e)}function Qt(t,e){t||zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(){return typeof self<"u"&&self.location?.href||""}function Pv(){return nu()==="http:"||nu()==="https:"}function nu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pv()||ay()||"connection"in navigator)?navigator.onLine:!0}function kv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=iy()||cy()}get(){return Ov()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Lv=new Or(3e4,6e4);function Zn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Pn(t,e,n,s,r={}){return Hf(t,r,async()=>{let o={},a={};s&&(e==="GET"?a=s:o={body:JSON.stringify(s)});const l=Pr({key:t.config.apiKey,...a}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const f={method:e,headers:u,...o};return oy()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(f.credentials="include"),Bf.fetch()(await $f(t,t.config.apiHost,n,l),f)})}async function Hf(t,e,n){t._canInitEmulator=!1;const s={...Nv,...e};try{const r=new Mv(t),o=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw qr(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,f]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw qr(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw qr(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw qr(t,"user-disabled",a);const d=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw jf(t,d,f);Et(t,d)}}catch(r){if(r instanceof Mt)throw r;Et(t,"network-request-failed",{message:String(r)})}}async function qi(t,e,n,s,r={}){const o=await Pn(t,e,n,s,r);return"mfaPendingCredential"in o&&Et(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function $f(t,e,n,s){const r=`${e}${n}?${s}`,o=t,a=o.config.emulator?Ha(t.config,r):`${t.config.apiScheme}://${r}`;return Dv.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function xv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Mv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Dt(this.auth,"network-request-failed")),Lv.get())})}}function qr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Dt(t,e,s);return r.customData._tokenResponse=n,r}function su(t){return t!==void 0&&t.enterprise!==void 0}class Uv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Fv(t,e){return Pn(t,"GET","/v2/recaptchaConfig",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vv(t,e){return Pn(t,"POST","/v1/accounts:delete",e)}async function Ti(t,e){return Pn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jv(t,e=!1){const n=wt(t),s=await n.getIdToken(e),r=$a(s);ee(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,a=o?.sign_in_provider;return{claims:r,token:s,authTime:or(xo(r.auth_time)),issuedAtTime:or(xo(r.iat)),expirationTime:or(xo(r.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function xo(t){return Number(t)*1e3}function $a(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return si("JWT malformed, contained fewer than 3 sections"),null;try{const r=Cf(n);return r?JSON.parse(r):(si("Failed to decode base64 JWT payload"),null)}catch(r){return si("Caught error parsing JWT payload as JSON",r?.toString()),null}}function ru(t){const e=$a(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Mt&&Bv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Bv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=or(this.lastLoginAt),this.creationTime=or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(t){const e=t.auth,n=await t.getIdToken(),s=await Ir(t,Ti(e,{idToken:n}));ee(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=r.providerUserInfo?.length?Wf(r.providerUserInfo):[],a=Wv(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!a?.length,f=l?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new la(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function $v(t){const e=wt(t);await Si(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wv(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Wf(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kv(t,e){const n=await Hf(t,{},async()=>{const s=Pr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,a=await $f(t,r,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:s};return t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(u.credentials="include"),Bf.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Gv(t,e){return Pn(t,"POST","/v2/accounts:revokeToken",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ru(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=ru(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:o}=await Kv(e,n);this.updateTokensAndExpiration(s,r,Number(o))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:o}=n,a=new ms;return s&&(ee(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(ee(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),o&&(ee(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ms,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pt{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Hv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new la(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ir(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jv(this,e)}reload(){return $v(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Si(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(at(this.auth.app))return Promise.reject(Tn(this.auth));const e=await this.getIdToken();return await Ir(this,Vv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,o=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,f=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:g,emailVerified:v,isAnonymous:A,providerData:O,stsTokenManager:x}=n;ee(g&&x,e,"internal-error");const j=ms.fromJSON(this.name,x);ee(typeof g=="string",e,"internal-error"),hn(s,e.name),hn(r,e.name),ee(typeof v=="boolean",e,"internal-error"),ee(typeof A=="boolean",e,"internal-error"),hn(o,e.name),hn(a,e.name),hn(l,e.name),hn(u,e.name),hn(f,e.name),hn(d,e.name);const $=new pt({uid:g,auth:e,email:r,emailVerified:v,displayName:s,isAnonymous:A,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:j,createdAt:f,lastLoginAt:d});return O&&Array.isArray(O)&&($.providerData=O.map(B=>({...B}))),u&&($._redirectEventId=u),$}static async _fromIdTokenResponse(e,n,s=!1){const r=new ms;r.updateFromServerResponse(n);const o=new pt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Si(o),o}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ee(r.localId!==void 0,"internal-error");const o=r.providerUserInfo!==void 0?Wf(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!o?.length,l=new ms;l.updateFromIdToken(s);const u=new pt({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new la(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!o?.length};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new Map;function qt(t){Qt(t instanceof Function,"Expected a class definition");let e=iu.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,iu.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kf.type="NONE";const ou=Kf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:o}=this.auth;this.fullUserKey=ri(this.userKey,r.apiKey,o),this.fullPersistenceKey=ri("persistence",r.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ti(this.auth,{idToken:e}).catch(()=>{});return n?pt._fromGetAccountInfoResponse(this.auth,n,e):null}return pt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new _s(qt(ou),e,s);const r=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=r[0]||qt(ou);const a=ri(s,e.config.apiKey,e.name);let l=null;for(const f of n)try{const d=await f._get(a);if(d){let g;if(typeof d=="string"){const v=await Ti(e,{idToken:d}).catch(()=>{});if(!v)break;g=await pt._fromGetAccountInfoResponse(e,v,d)}else g=pt._fromJSON(e,d);f!==o&&(l=g),o=f;break}}catch{}const u=r.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new _s(o,e,s):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new _s(o,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yf(e))return"Blackberry";if(Qf(e))return"Webos";if(zf(e))return"Safari";if((e.includes("chrome/")||qf(e))&&!e.includes("edge/"))return"Chrome";if(Xf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Gf(t=Xe()){return/firefox\//i.test(t)}function zf(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qf(t=Xe()){return/crios\//i.test(t)}function Jf(t=Xe()){return/iemobile/i.test(t)}function Xf(t=Xe()){return/android/i.test(t)}function Yf(t=Xe()){return/blackberry/i.test(t)}function Qf(t=Xe()){return/webos/i.test(t)}function Wa(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zv(t=Xe()){return Wa(t)&&!!window.navigator?.standalone}function qv(){return ly()&&document.documentMode===10}function Zf(t=Xe()){return Wa(t)||Xf(t)||Qf(t)||Yf(t)||/windows phone/i.test(t)||Jf(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t,e=[]){let n;switch(t){case"Browser":n=au(Xe());break;case"Worker":n=`${au(Xe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=o=>new Promise((a,l)=>{try{const u=e(o);a(u)}catch(u){l(u)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xv(t,e={}){return Pn(t,"GET","/v2/passwordPolicy",Zn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=6;class Qv{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Yv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cu(this),this.idTokenSubscription=new cu(this),this.beforeStateQueue=new Jv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ti(this,{idToken:e}),s=await pt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(at(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Si(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(at(this.app))return Promise.reject(Tn(this));const n=e?wt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return at(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return at(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xv(this),n=new Qv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Rr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Gv(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qt(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ed(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Rv(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ss(t){return wt(t)}class cu{constructor(e){this.auth=e,this.observer=null,this.addObserver=my(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eE(t){Ji=t}function td(t){return Ji.loadJS(t)}function tE(){return Ji.recaptchaEnterpriseScript}function nE(){return Ji.gapiScript}function sE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class rE{constructor(){this.enterprise=new iE}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class iE{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const oE="recaptcha-enterprise",nd="NO_RECAPTCHA";class aE{constructor(e){this.type=oE,this.auth=Ss(e)}async verify(e="verify",n=!1){async function s(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{Fv(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new Uv(u);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,a(f.siteKey)}}).catch(u=>{l(u)})})}function r(o,a,l){const u=window.grecaptcha;su(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(f=>{a(f)}).catch(()=>{a(nd)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new rE().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{s(this.auth).then(l=>{if(!n&&su(window.grecaptcha))r(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=tE();u.length!==0&&(u+=l),td(u).then(()=>{r(l,o,a)}).catch(f=>{a(f)})}}).catch(l=>{a(l)})})}}async function lu(t,e,n,s=!1,r=!1){const o=new aE(t);let a;if(r)a=nd;else try{a=await o.verify(n)}catch{a=await o.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,f=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:f,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function uu(t,e,n,s,r){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await lu(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await lu(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t,e){const n=zi(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(zn(o,e??{}))return r;Et(r,"already-initialized")}return n.initialize({options:e})}function lE(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(qt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function uE(t,e,n){const s=Ss(t);ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,o=sd(e),{host:a,port:l}=hE(e),u=l===null?"":`:${l}`,f={url:`${o}//${a}${u}/`},d=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ee(zn(f,s.config.emulator)&&zn(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,Ts(a)?(Ma(`${o}//${a}${u}`),Ua("Auth",!0)):fE()}function sd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hE(t){const e=sd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const o=r[1];return{host:o,port:hu(s.substr(o.length+1))}}else{const[o,a]=s.split(":");return{host:o,port:hu(a)}}}function hu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}async function dE(t,e){return Pn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pE(t,e){return qi(t,"POST","/v1/accounts:signInWithPassword",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(t,e){return qi(t,"POST","/v1/accounts:signInWithEmailLink",Zn(t,e))}async function mE(t,e){return qi(t,"POST","/v1/accounts:signInWithEmailLink",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Ka{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new br(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new br(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uu(e,n,"signInWithPassword",pE);case"emailLink":return gE(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uu(e,s,"signUpPassword",dE);case"emailLink":return mE(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t,e){return qi(t,"POST","/v1/accounts:signInWithIdp",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="http://localhost";class Jn extends Ka{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...o}=n;if(!s||!r)return null;const a=new Jn(s,r);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ys(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ys(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ys(e,n)}buildRequest(){const e={requestUri:_E,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vE(t){const e=zs(qs(t)).link,n=e?zs(qs(e)).deep_link_id:null,s=zs(qs(t)).deep_link_id;return(s?zs(qs(s)).link:null)||s||n||e||t}class Ga{constructor(e){const n=zs(qs(e)),s=n.apiKey??null,r=n.oobCode??null,o=yE(n.mode??null);ee(s&&r&&o,"argument-error"),this.apiKey=s,this.operation=o,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=vE(e);try{return new Ga(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,n){return br._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ga.parseLink(n);return ee(s,"argument-error"),br._fromEmailAndCode(e,s.code,s.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends rd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends kr{constructor(){super("facebook.com")}static credential(e){return Jn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return _n.credential(n,s)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends kr{constructor(){super("github.com")}static credential(e){return Jn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends kr{constructor(){super("twitter.com")}static credential(e,n){return Jn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return vn.credential(n,s)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const o=await pt._fromIdTokenResponse(e,s,r),a=fu(s);return new Is({user:o,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=fu(s);return new Is({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function fu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Mt{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ai.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ai(e,n,s,r)}}function id(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ai._fromErrorAndOperation(t,o,e,s):o})}async function EE(t,e,n=!1){const s=await Ir(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Is._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(t,e,n=!1){const{auth:s}=t;if(at(s.app))return Promise.reject(Tn(s));const r="reauthenticate";try{const o=await Ir(t,id(s,r,e,t),n);ee(o.idToken,s,"internal-error");const a=$a(o.idToken);ee(a,s,"internal-error");const{sub:l}=a;return ee(t.uid===l,s,"user-mismatch"),Is._forOperation(t,r,o)}catch(o){throw o?.code==="auth/user-not-found"&&Et(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function od(t,e,n=!1){if(at(t.app))return Promise.reject(Tn(t));const s="signIn",r=await id(t,s,e),o=await Is._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(o.user),o}async function IE(t,e){return od(Ss(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(t){const e=Ss(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function TE(t,e,n){return at(t.app)?Promise.reject(Tn(t)):IE(wt(t),As.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&bE(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t,e){return wt(t).setPersistence(e)}function AE(t,e,n,s){return wt(t).onIdTokenChanged(e,n,s)}function CE(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function RE(t,e,n,s){return wt(t).onAuthStateChanged(e,n,s)}function PE(t){return wt(t).signOut()}const Ci="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ci,"1"),this.storage.removeItem(Ci),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=1e3,kE=10;class cd extends ad{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},o=this.storage.getItem(s);qv()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,kE):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},OE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cd.type="LOCAL";const ld=cd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends ad{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ud.type="SESSION";const hd=ud;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Xi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:o}=n.data,a=this.handlersMap[r];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(a).map(async f=>f(n.origin,o)),u=await NE(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const f=za("",20);r.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const v=g;if(v.data.eventId===f)switch(v.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(v.data.response);break;default:clearTimeout(d),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function LE(t){Lt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function xE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ME(){return navigator?.serviceWorker?.controller||null}function UE(){return fd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="firebaseLocalStorageDb",FE=1,Ri="firebaseLocalStorage",pd="fbase_key";class Nr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yi(t,e){return t.transaction([Ri],e?"readwrite":"readonly").objectStore(Ri)}function VE(){const t=indexedDB.deleteDatabase(dd);return new Nr(t).toPromise()}function ua(){const t=indexedDB.open(dd,FE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ri,{keyPath:pd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ri)?e(s):(s.close(),await VE(),e(await ua()))})})}async function du(t,e,n){const s=Yi(t,!0).put({[pd]:e,value:n});return new Nr(s).toPromise()}async function jE(t,e){const n=Yi(t,!1).get(e),s=await new Nr(n).toPromise();return s===void 0?null:s.value}function pu(t,e){const n=Yi(t,!0).delete(e);return new Nr(n).toPromise()}const BE=800,HE=3;class gd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ua(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>HE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xi._getInstance(UE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await xE(),!this.activeServiceWorker)return;this.sender=new DE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ME()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ua();return await du(e,Ci,"1"),await pu(e,Ci),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>du(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>jE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=Yi(r,!1).getAll();return new Nr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:o}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gd.type="LOCAL";const $E=gd;new Or(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t,e){return e?qt(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Ka{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KE(t){return od(t.auth,new qa(t),t.bypassAuthState)}function GE(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),wE(n,new qa(t),t.bypassAuthState)}async function zE(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),EE(n,new qa(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n,s,r,o=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:s,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KE;case"linkViaPopup":case"linkViaRedirect":return zE;case"reauthViaPopup":case"reauthViaRedirect":return GE;default:Et(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=new Or(2e3,1e4);class us extends md{constructor(e,n,s,r,o){super(e,n,r,o),this.provider=s,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=za();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qE.get())};e()}}us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="pendingRedirect",ii=new Map;class XE extends md{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ii.get(this.auth._key());if(!e){try{const s=await YE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ii.set(this.auth._key(),e)}return this.bypassAuthState||ii.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YE(t,e){const n=ew(e),s=ZE(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function QE(t,e){ii.set(t._key(),e)}function ZE(t){return qt(t._redirectPersistence)}function ew(t){return ri(JE,t.config.apiKey,t.name)}async function tw(t,e,n=!1){if(at(t.app))return Promise.reject(Tn(t));const s=Ss(t),r=WE(s,e),a=await new XE(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=600*1e3;class sw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!_d(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Dt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nw&&this.cachedEventUids.clear(),this.cachedEventUids.has(gu(e))}saveEventToCache(e){this.cachedEventUids.add(gu(e)),this.lastProcessedEventTime=Date.now()}}function gu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _d({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function rw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _d(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(t,e={}){return Pn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aw=/^https?/;async function cw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iw(t);for(const n of e)try{if(lw(n))return}catch{}Et(t,"unauthorized-domain")}function lw(t){const e=ca(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!aw.test(n))return!1;if(ow.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new Or(3e4,6e4);function mu(){const t=Lt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hw(t){return new Promise((e,n)=>{function s(){mu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mu(),n(Dt(t,"network-request-failed"))},timeout:uw.get()})}if(Lt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Lt().gapi?.load)s();else{const r=sE("iframefcb");return Lt()[r]=()=>{gapi.load?s():n(Dt(t,"network-request-failed"))},td(`${nE()}?onload=${r}`).catch(o=>n(o))}}).catch(e=>{throw oi=null,e})}let oi=null;function fw(t){return oi=oi||hw(t),oi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=new Or(5e3,15e3),pw="__/auth/iframe",gw="emulator/auth/iframe",mw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_w=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yw(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ha(e,gw):`https://${t.config.authDomain}/${pw}`,s={apiKey:e.apiKey,appName:t.name,v:Qn},r=_w.get(t.config.apiHost);r&&(s.eid=r);const o=t._getFrameworks();return o.length&&(s.fw=o.join(",")),`${n}?${Pr(s).slice(1)}`}async function vw(t){const e=await fw(t),n=Lt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:yw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mw,dontclear:!0},s=>new Promise(async(r,o)=>{await s.restyle({setHideOnLeave:!1});const a=Dt(t,"network-request-failed"),l=Lt().setTimeout(()=>{o(a)},dw.get());function u(){Lt().clearTimeout(l),r(s)}s.ping(u).then(u,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ww=500,Iw=600,bw="_blank",Tw="http://localhost";class _u{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sw(t,e,n,s=ww,r=Iw){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const u={...Ew,width:s.toString(),height:r.toString(),top:o,left:a},f=Xe().toLowerCase();n&&(l=qf(f)?bw:n),Gf(f)&&(e=e||Tw,u.scrollbars="yes");const d=Object.entries(u).reduce((v,[A,O])=>`${v}${A}=${O},`,"");if(zv(f)&&l!=="_self")return Aw(e||"",l),new _u(null);const g=window.open(e||"",l,d);ee(g,t,"popup-blocked");try{g.focus()}catch{}return new _u(g)}function Aw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="__/auth/handler",Rw="emulator/auth/handler",Pw=encodeURIComponent("fac");async function yu(t,e,n,s,r,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Qn,eventId:r};if(e instanceof rd){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",gy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof kr){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),f=u?`#${Pw}=${encodeURIComponent(u)}`:"";return`${Ow(t)}?${Pr(l).slice(1)}${f}`}function Ow({config:t}){return t.emulator?Ha(t,Rw):`https://${t.authDomain}/${Cw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="webStorageSupport";class kw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hd,this._completeRedirectFn=tw,this._overrideRedirectResult=QE}async _openPopup(e,n,s,r){Qt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await yu(e,n,s,ca(),r);return Sw(e,o,za())}async _openRedirect(e,n,s,r){await this._originValidation(e);const o=await yu(e,n,s,ca(),r);return LE(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:o}=this.eventManagers[n];return r?Promise.resolve(r):(Qt(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await vw(e),s=new sw(e);return n.register("authEvent",r=>(ee(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mo,{type:Mo},r=>{const o=r?.[0]?.[Mo];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zf()||zf()||Wa()}}const Nw=kw;var vu="@firebase/auth",Eu="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xw(t){qn(new Cn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ed(t)},f=new Zv(s,r,o,u);return lE(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),qn(new Cn("auth-internal",e=>{const n=Ss(e.getProvider("auth").getImmediate());return(s=>new Dw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(vu,Eu,Lw(t)),Nt(vu,Eu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=300,Uw=kf("authIdTokenMaxAge")||Mw;let wu=null;const Fw=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Uw)return;const r=n?.token;wu!==r&&(wu=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ai(t=ja()){const e=zi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cE(t,{popupRedirectResolver:Nw,persistence:[$E,ld,hd]}),s=kf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(s,location.origin);if(location.origin===o.origin){const a=Fw(o.toString());CE(n,a,()=>a(n.currentUser)),AE(n,l=>a(l))}}const r=Rf("auth");return r&&uE(n,`http://${r}`),n}function Vw(){return document.getElementsByTagName("head")?.[0]??document}eE({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const o=Dt("internal-error");o.customData=r,n(o)},s.type="text/javascript",s.charset="UTF-8",Vw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xw("Browser");const jw=Um("auth",()=>{const t=fr(null),e=fr(!0);return{user:t,loading:e,login:async(o,a)=>{const l=ai(),u=await TE(l,o,a);t.value={email:u.user.email??""}},logout:async()=>{const o=ai();await PE(o),t.value=null},fetchUser:()=>new Promise(o=>{const a=ai();RE(a,l=>{t.value=l?{email:l.email??""}:null,e.value=!1,o()})})}}),yd=G_({history:w_(),routes:[{path:"/",name:"portfolio",component:()=>zr(()=>import("./PortfolioIndex-DN4ir0CO.js"),__vite__mapDeps([0,1,2])),meta:{title:"Ralph Maron Eda",icon:"/ralphmaron.png"}},{path:"/login",name:"login",component:()=>zr(()=>import("./LoginIndex-D1y5Ur6U.js"),__vite__mapDeps([3,4])),meta:{title:"Login",icon:"/favicon.jpg"}},{path:"/dashboard",name:"dashboard",component:()=>zr(()=>import("./DashboardIndex-D1SCjSFz.js"),__vite__mapDeps([5,1,6])),meta:{requiresAuth:!0,title:"Dashboard",icon:"/favicon.jpg"}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>zr(()=>import("./NotFound-CR7Pi5Cj.js"),[]),meta:{title:"Page Not Found",icon:"/favicon.jpg"}}],scrollBehavior(t){return t.hash?{el:t.hash,behavior:"smooth"}:{top:0}}});yd.beforeEach(async(t,e,n)=>{const s=jw();if(t.meta.requiresAuth&&(!s.user&&s.loading&&await s.fetchUser(),!s.user))return n({name:"login"});if(t.meta?.title&&(document.title=t.meta.title),t.meta?.icon){const r=document.querySelector("link[rel~='icon']")||document.createElement("link");r.rel="icon",r.href=t.meta.icon,document.head.appendChild(r)}n()});var Bw="firebase",Hw="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(Bw,Hw,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="firebasestorage.googleapis.com",$w="storageBucket",Ww=120*1e3,Kw=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Mt{constructor(e,n,s=0){super(Uo(e),`Firebase Storage: ${n} (${Uo(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ut.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Uo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var xt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(xt||(xt={}));function Uo(t){return"storage/"+t}function Gw(){const t="An unknown error occurred, please check the error payload for server response.";return new Ut(xt.UNKNOWN,t)}function zw(){return new Ut(xt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qw(){return new Ut(xt.CANCELED,"User canceled the upload/download.")}function Jw(t){return new Ut(xt.INVALID_URL,"Invalid URL '"+t+"'.")}function Xw(t){return new Ut(xt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Iu(t){return new Ut(xt.INVALID_ARGUMENT,t)}function Ed(){return new Ut(xt.APP_DELETED,"The Firebase app was deleted.")}function Yw(t){return new Ut(xt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=gt.makeFromUrl(e,n)}catch{return new gt(e,"")}if(s.path==="")return s;throw Xw(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+r+a,"i"),u={bucket:1,path:3};function f(V){V.path_=decodeURIComponent(V.path)}const d="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",A=new RegExp(`^https?://${g}/${d}/b/${r}/o${v}`,"i"),O={bucket:1,path:3},x=n===vd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,j="([^?#]*)",$=new RegExp(`^https?://${x}/${r}/${j}`,"i"),W=[{regex:l,indices:u,postModify:o},{regex:A,indices:O,postModify:f},{regex:$,indices:{bucket:1,path:2},postModify:f}];for(let V=0;V<W.length;V++){const J=W[V],ne=J.regex.exec(e);if(ne){const S=ne[J.indices.bucket];let _=ne[J.indices.path];_||(_=""),s=new gt(S,_),J.postModify(s);break}}if(s==null)throw Jw(e);return s}}class Qw{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t,e,n){let s=1,r=null,o=null,a=!1,l=0;function u(){return l===2}let f=!1;function d(...j){f||(f=!0,e.apply(null,j))}function g(j){r=setTimeout(()=>{r=null,t(A,u())},j)}function v(){o&&clearTimeout(o)}function A(j,...$){if(f){v();return}if(j){v(),d.call(null,j,...$);return}if(u()||a){v(),d.call(null,j,...$);return}s<64&&(s*=2);let W;l===1?(l=2,W=0):W=(s+Math.random())*1e3,g(W)}let O=!1;function x(j){O||(O=!0,v(),!f&&(r!==null?(j||(l=2),clearTimeout(r),g(0)):j||(l=1)))}return g(0),o=setTimeout(()=>{a=!0,x(!0)},n),x}function eI(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t){return t!==void 0}function bu(t,e,n,s){if(s<e)throw Iu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Iu(`Invalid value for '${t}'. Expected ${n} or less.`)}function nI(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var Pi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Pi||(Pi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||r||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n,s,r,o,a,l,u,f,d,g,v=!0,A=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=f,this.progressCallback_=d,this.connectionFactory_=g,this.retry=v,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,x)=>{this.resolve_=O,this.reject_=x,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Jr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const u=l.loaded,f=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,f)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===Pi.NO_ERROR,u=o.getStatus();if(!l||sI(u,this.additionalRetryCodes_)&&this.retry){const d=o.getErrorCode()===Pi.ABORT;s(!1,new Jr(!1,null,d));return}const f=this.successCodes_.indexOf(u)!==-1;s(!0,new Jr(f,o))})},n=(s,r)=>{const o=this.resolve_,a=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());tI(u)?o(u):o()}catch(u){a(u)}else if(l!==null){const u=Gw();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(r.canceled){const u=this.appDelete_?Ed():qw();a(u)}else{const u=zw();a(u)}};this.canceled_?n(!1,new Jr(!1,null,!0)):this.backoffId_=Zw(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&eI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Jr{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function iI(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function oI(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function aI(t,e){e&&(t["X-Firebase-GMPID"]=e)}function cI(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lI(t,e,n,s,r,o,a=!0,l=!1){const u=nI(t.urlParams),f=t.url+u,d=Object.assign({},t.headers);return aI(d,e),iI(d,n),oI(d,o),cI(d,s),new rI(f,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,a,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function hI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this._service=e,n instanceof gt?this._location=n:this._location=gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Oi(e,n)}get root(){const e=new gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hI(this._location.path)}get storage(){return this._service}get parent(){const e=uI(this._location.path);if(e===null)return null;const n=new gt(this._location.bucket,e);return new Oi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Yw(e)}}function Tu(t,e){const n=e?.[$w];return n==null?null:gt.makeFromBucketSpec(n,t)}function fI(t,e,n,s={}){t.host=`${e}:${n}`;const r=Ts(e);r&&(Ma(`https://${t.host}/b`),Ua("Storage",!0)),t._isUsingEmulator=!0,t._protocol=r?"https":"http";const{mockUserToken:o}=s;o&&(t._overrideAuthToken=typeof o=="string"?o:Nf(o,t.app.options.projectId))}class dI{constructor(e,n,s,r,o,a=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._isUsingEmulator=a,this._bucket=null,this._host=vd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ww,this._maxUploadRetryTime=Kw,this._requests=new Set,r!=null?this._bucket=gt.makeFromBucketSpec(r,this._host):this._bucket=Tu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gt.makeFromBucketSpec(this._url,e):this._bucket=Tu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Oi(this,e)}_makeRequest(e,n,s,r,o=!0){if(this._deleted)return new Qw(Ed());{const a=lI(e,this._appId,s,r,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Su="@firebase/storage",Au="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="storage";function pI(t=ja(),e){t=wt(t);const s=zi(t,wd).getImmediate({identifier:e}),r=Pf("storage");return r&&gI(s,...r),s}function gI(t,e,n,s={}){fI(t,e,n,s)}function mI(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new dI(n,s,r,e,Qn)}function _I(){qn(new Cn(wd,mI,"PUBLIC").setMultipleInstances(!0)),Nt(Su,Au,""),Nt(Su,Au,"esm2020")}_I();var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ja;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function m(){}m.prototype=_.prototype,S.F=_.prototype,S.prototype=new m,S.prototype.constructor=S,S.D=function(b,I,w){for(var y=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)y[ae-2]=arguments[ae];return _.prototype[I].apply(b,y)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,_,m){m||(m=0);const b=Array(16);if(typeof _=="string")for(var I=0;I<16;++I)b[I]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(I=0;I<16;++I)b[I]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=S.g[0],m=S.g[1],I=S.g[2];let w=S.g[3],y;y=_+(w^m&(I^w))+b[0]+3614090360&4294967295,_=m+(y<<7&4294967295|y>>>25),y=w+(I^_&(m^I))+b[1]+3905402710&4294967295,w=_+(y<<12&4294967295|y>>>20),y=I+(m^w&(_^m))+b[2]+606105819&4294967295,I=w+(y<<17&4294967295|y>>>15),y=m+(_^I&(w^_))+b[3]+3250441966&4294967295,m=I+(y<<22&4294967295|y>>>10),y=_+(w^m&(I^w))+b[4]+4118548399&4294967295,_=m+(y<<7&4294967295|y>>>25),y=w+(I^_&(m^I))+b[5]+1200080426&4294967295,w=_+(y<<12&4294967295|y>>>20),y=I+(m^w&(_^m))+b[6]+2821735955&4294967295,I=w+(y<<17&4294967295|y>>>15),y=m+(_^I&(w^_))+b[7]+4249261313&4294967295,m=I+(y<<22&4294967295|y>>>10),y=_+(w^m&(I^w))+b[8]+1770035416&4294967295,_=m+(y<<7&4294967295|y>>>25),y=w+(I^_&(m^I))+b[9]+2336552879&4294967295,w=_+(y<<12&4294967295|y>>>20),y=I+(m^w&(_^m))+b[10]+4294925233&4294967295,I=w+(y<<17&4294967295|y>>>15),y=m+(_^I&(w^_))+b[11]+2304563134&4294967295,m=I+(y<<22&4294967295|y>>>10),y=_+(w^m&(I^w))+b[12]+1804603682&4294967295,_=m+(y<<7&4294967295|y>>>25),y=w+(I^_&(m^I))+b[13]+4254626195&4294967295,w=_+(y<<12&4294967295|y>>>20),y=I+(m^w&(_^m))+b[14]+2792965006&4294967295,I=w+(y<<17&4294967295|y>>>15),y=m+(_^I&(w^_))+b[15]+1236535329&4294967295,m=I+(y<<22&4294967295|y>>>10),y=_+(I^w&(m^I))+b[1]+4129170786&4294967295,_=m+(y<<5&4294967295|y>>>27),y=w+(m^I&(_^m))+b[6]+3225465664&4294967295,w=_+(y<<9&4294967295|y>>>23),y=I+(_^m&(w^_))+b[11]+643717713&4294967295,I=w+(y<<14&4294967295|y>>>18),y=m+(w^_&(I^w))+b[0]+3921069994&4294967295,m=I+(y<<20&4294967295|y>>>12),y=_+(I^w&(m^I))+b[5]+3593408605&4294967295,_=m+(y<<5&4294967295|y>>>27),y=w+(m^I&(_^m))+b[10]+38016083&4294967295,w=_+(y<<9&4294967295|y>>>23),y=I+(_^m&(w^_))+b[15]+3634488961&4294967295,I=w+(y<<14&4294967295|y>>>18),y=m+(w^_&(I^w))+b[4]+3889429448&4294967295,m=I+(y<<20&4294967295|y>>>12),y=_+(I^w&(m^I))+b[9]+568446438&4294967295,_=m+(y<<5&4294967295|y>>>27),y=w+(m^I&(_^m))+b[14]+3275163606&4294967295,w=_+(y<<9&4294967295|y>>>23),y=I+(_^m&(w^_))+b[3]+4107603335&4294967295,I=w+(y<<14&4294967295|y>>>18),y=m+(w^_&(I^w))+b[8]+1163531501&4294967295,m=I+(y<<20&4294967295|y>>>12),y=_+(I^w&(m^I))+b[13]+2850285829&4294967295,_=m+(y<<5&4294967295|y>>>27),y=w+(m^I&(_^m))+b[2]+4243563512&4294967295,w=_+(y<<9&4294967295|y>>>23),y=I+(_^m&(w^_))+b[7]+1735328473&4294967295,I=w+(y<<14&4294967295|y>>>18),y=m+(w^_&(I^w))+b[12]+2368359562&4294967295,m=I+(y<<20&4294967295|y>>>12),y=_+(m^I^w)+b[5]+4294588738&4294967295,_=m+(y<<4&4294967295|y>>>28),y=w+(_^m^I)+b[8]+2272392833&4294967295,w=_+(y<<11&4294967295|y>>>21),y=I+(w^_^m)+b[11]+1839030562&4294967295,I=w+(y<<16&4294967295|y>>>16),y=m+(I^w^_)+b[14]+4259657740&4294967295,m=I+(y<<23&4294967295|y>>>9),y=_+(m^I^w)+b[1]+2763975236&4294967295,_=m+(y<<4&4294967295|y>>>28),y=w+(_^m^I)+b[4]+1272893353&4294967295,w=_+(y<<11&4294967295|y>>>21),y=I+(w^_^m)+b[7]+4139469664&4294967295,I=w+(y<<16&4294967295|y>>>16),y=m+(I^w^_)+b[10]+3200236656&4294967295,m=I+(y<<23&4294967295|y>>>9),y=_+(m^I^w)+b[13]+681279174&4294967295,_=m+(y<<4&4294967295|y>>>28),y=w+(_^m^I)+b[0]+3936430074&4294967295,w=_+(y<<11&4294967295|y>>>21),y=I+(w^_^m)+b[3]+3572445317&4294967295,I=w+(y<<16&4294967295|y>>>16),y=m+(I^w^_)+b[6]+76029189&4294967295,m=I+(y<<23&4294967295|y>>>9),y=_+(m^I^w)+b[9]+3654602809&4294967295,_=m+(y<<4&4294967295|y>>>28),y=w+(_^m^I)+b[12]+3873151461&4294967295,w=_+(y<<11&4294967295|y>>>21),y=I+(w^_^m)+b[15]+530742520&4294967295,I=w+(y<<16&4294967295|y>>>16),y=m+(I^w^_)+b[2]+3299628645&4294967295,m=I+(y<<23&4294967295|y>>>9),y=_+(I^(m|~w))+b[0]+4096336452&4294967295,_=m+(y<<6&4294967295|y>>>26),y=w+(m^(_|~I))+b[7]+1126891415&4294967295,w=_+(y<<10&4294967295|y>>>22),y=I+(_^(w|~m))+b[14]+2878612391&4294967295,I=w+(y<<15&4294967295|y>>>17),y=m+(w^(I|~_))+b[5]+4237533241&4294967295,m=I+(y<<21&4294967295|y>>>11),y=_+(I^(m|~w))+b[12]+1700485571&4294967295,_=m+(y<<6&4294967295|y>>>26),y=w+(m^(_|~I))+b[3]+2399980690&4294967295,w=_+(y<<10&4294967295|y>>>22),y=I+(_^(w|~m))+b[10]+4293915773&4294967295,I=w+(y<<15&4294967295|y>>>17),y=m+(w^(I|~_))+b[1]+2240044497&4294967295,m=I+(y<<21&4294967295|y>>>11),y=_+(I^(m|~w))+b[8]+1873313359&4294967295,_=m+(y<<6&4294967295|y>>>26),y=w+(m^(_|~I))+b[15]+4264355552&4294967295,w=_+(y<<10&4294967295|y>>>22),y=I+(_^(w|~m))+b[6]+2734768916&4294967295,I=w+(y<<15&4294967295|y>>>17),y=m+(w^(I|~_))+b[13]+1309151649&4294967295,m=I+(y<<21&4294967295|y>>>11),y=_+(I^(m|~w))+b[4]+4149444226&4294967295,_=m+(y<<6&4294967295|y>>>26),y=w+(m^(_|~I))+b[11]+3174756917&4294967295,w=_+(y<<10&4294967295|y>>>22),y=I+(_^(w|~m))+b[2]+718787259&4294967295,I=w+(y<<15&4294967295|y>>>17),y=m+(w^(I|~_))+b[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,S.g[2]=S.g[2]+I&4294967295,S.g[3]=S.g[3]+w&4294967295}s.prototype.v=function(S,_){_===void 0&&(_=S.length);const m=_-this.blockSize,b=this.C;let I=this.h,w=0;for(;w<_;){if(I==0)for(;w<=m;)r(this,S,w),w+=this.blockSize;if(typeof S=="string"){for(;w<_;)if(b[I++]=S.charCodeAt(w++),I==this.blockSize){r(this,b),I=0;break}}else for(;w<_;)if(b[I++]=S[w++],I==this.blockSize){r(this,b),I=0;break}}this.h=I,this.o+=_},s.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;_=this.o*8;for(var m=S.length-8;m<S.length;++m)S[m]=_&255,_/=256;for(this.v(S),S=Array(16),_=0,m=0;m<4;++m)for(let b=0;b<32;b+=8)S[_++]=this.g[m]>>>b&255;return S};function o(S,_){var m=l;return Object.prototype.hasOwnProperty.call(m,S)?m[S]:m[S]=_(S)}function a(S,_){this.h=_;const m=[];let b=!0;for(let I=S.length-1;I>=0;I--){const w=S[I]|0;b&&w==_||(m[I]=w,b=!1)}this.g=m}var l={};function u(S){return-128<=S&&S<128?o(S,function(_){return new a([_|0],_<0?-1:0)}):new a([S|0],S<0?-1:0)}function f(S){if(isNaN(S)||!isFinite(S))return g;if(S<0)return j(f(-S));const _=[];let m=1;for(let b=0;S>=m;b++)_[b]=S/m|0,m*=4294967296;return new a(_,0)}function d(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return j(d(S.substring(1),_));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=f(Math.pow(_,8));let b=g;for(let w=0;w<S.length;w+=8){var I=Math.min(8,S.length-w);const y=parseInt(S.substring(w,w+I),_);I<8?(I=f(Math.pow(_,I)),b=b.j(I).add(f(y))):(b=b.j(m),b=b.add(f(y)))}return b}var g=u(0),v=u(1),A=u(16777216);t=a.prototype,t.m=function(){if(x(this))return-j(this).m();let S=0,_=1;for(let m=0;m<this.g.length;m++){const b=this.i(m);S+=(b>=0?b:4294967296+b)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(O(this))return"0";if(x(this))return"-"+j(this).toString(S);const _=f(Math.pow(S,6));var m=this;let b="";for(;;){const I=V(m,_).g;m=$(m,I.j(_));let w=((m.g.length>0?m.g[0]:m.h)>>>0).toString(S);if(m=I,O(m))return w+b;for(;w.length<6;)w="0"+w;b=w+b}},t.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function O(S){if(S.h!=0)return!1;for(let _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function x(S){return S.h==-1}t.l=function(S){return S=$(this,S),x(S)?-1:O(S)?0:1};function j(S){const _=S.g.length,m=[];for(let b=0;b<_;b++)m[b]=~S.g[b];return new a(m,~S.h).add(v)}t.abs=function(){return x(this)?j(this):this},t.add=function(S){const _=Math.max(this.g.length,S.g.length),m=[];let b=0;for(let I=0;I<=_;I++){let w=b+(this.i(I)&65535)+(S.i(I)&65535),y=(w>>>16)+(this.i(I)>>>16)+(S.i(I)>>>16);b=y>>>16,w&=65535,y&=65535,m[I]=y<<16|w}return new a(m,m[m.length-1]&-2147483648?-1:0)};function $(S,_){return S.add(j(_))}t.j=function(S){if(O(this)||O(S))return g;if(x(this))return x(S)?j(this).j(j(S)):j(j(this).j(S));if(x(S))return j(this.j(j(S)));if(this.l(A)<0&&S.l(A)<0)return f(this.m()*S.m());const _=this.g.length+S.g.length,m=[];for(var b=0;b<2*_;b++)m[b]=0;for(b=0;b<this.g.length;b++)for(let I=0;I<S.g.length;I++){const w=this.i(b)>>>16,y=this.i(b)&65535,ae=S.i(I)>>>16,Se=S.i(I)&65535;m[2*b+2*I]+=y*Se,B(m,2*b+2*I),m[2*b+2*I+1]+=w*Se,B(m,2*b+2*I+1),m[2*b+2*I+1]+=y*ae,B(m,2*b+2*I+1),m[2*b+2*I+2]+=w*ae,B(m,2*b+2*I+2)}for(S=0;S<_;S++)m[S]=m[2*S+1]<<16|m[2*S];for(S=_;S<2*_;S++)m[S]=0;return new a(m,0)};function B(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function W(S,_){this.g=S,this.h=_}function V(S,_){if(O(_))throw Error("division by zero");if(O(S))return new W(g,g);if(x(S))return _=V(j(S),_),new W(j(_.g),j(_.h));if(x(_))return _=V(S,j(_)),new W(j(_.g),_.h);if(S.g.length>30){if(x(S)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var m=v,b=_;b.l(S)<=0;)m=J(m),b=J(b);var I=ne(m,1),w=ne(b,1);for(b=ne(b,2),m=ne(m,2);!O(b);){var y=w.add(b);y.l(S)<=0&&(I=I.add(m),w=y),b=ne(b,1),m=ne(m,1)}return _=$(S,I.j(_)),new W(I,_)}for(I=g;S.l(_)>=0;){for(m=Math.max(1,Math.floor(S.m()/_.m())),b=Math.ceil(Math.log(m)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),w=f(m),y=w.j(_);x(y)||y.l(S)>0;)m-=b,w=f(m),y=w.j(_);O(w)&&(w=v),I=I.add(w),S=$(S,y)}return new W(I,S)}t.B=function(S){return V(this,S).h},t.and=function(S){const _=Math.max(this.g.length,S.g.length),m=[];for(let b=0;b<_;b++)m[b]=this.i(b)&S.i(b);return new a(m,this.h&S.h)},t.or=function(S){const _=Math.max(this.g.length,S.g.length),m=[];for(let b=0;b<_;b++)m[b]=this.i(b)|S.i(b);return new a(m,this.h|S.h)},t.xor=function(S){const _=Math.max(this.g.length,S.g.length),m=[];for(let b=0;b<_;b++)m[b]=this.i(b)^S.i(b);return new a(m,this.h^S.h)};function J(S){const _=S.g.length+1,m=[];for(let b=0;b<_;b++)m[b]=S.i(b)<<1|S.i(b-1)>>>31;return new a(m,S.h)}function ne(S,_){const m=_>>5;_%=32;const b=S.g.length-m,I=[];for(let w=0;w<b;w++)I[w]=_>0?S.i(w+m)>>>_|S.i(w+m+1)<<32-_:S.i(w+m);return new a(I,S.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,Ja=a}).apply(typeof Cu<"u"?Cu:typeof self<"u"?self:typeof window<"u"?window:{});var Xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=Object.defineProperty;function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xr=="object"&&Xr];for(var c=0;c<i.length;++c){var h=i[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=n(this);function r(i,c){if(c)e:{var h=s;i=i.split(".");for(var p=0;p<i.length-1;p++){var R=i[p];if(!(R in h))break e;h=h[R]}i=i[i.length-1],p=h[i],c=c(p),c!=p&&c!=null&&e(h,i,{configurable:!0,writable:!0,value:c})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(c){var h=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&h.push([p,c[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function u(i,c,h){return i.call.apply(i.bind,arguments)}function f(i,c,h){return f=u,f.apply(null,arguments)}function d(i,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function g(i,c){function h(){}h.prototype=c.prototype,i.Z=c.prototype,i.prototype=new h,i.prototype.constructor=i,i.Ob=function(p,R,P){for(var H=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)H[ie-2]=arguments[ie];return c.prototype[R].apply(p,H)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function A(i){const c=i.length;if(c>0){const h=Array(c);for(let p=0;p<c;p++)h[p]=i[p];return h}return[]}function O(i,c){for(let p=1;p<arguments.length;p++){const R=arguments[p];var h=typeof R;if(h=h!="object"?h:R?Array.isArray(R)?"array":h:"null",h=="array"||h=="object"&&typeof R.length=="number"){h=i.length||0;const P=R.length||0;i.length=h+P;for(let H=0;H<P;H++)i[h+H]=R[H]}else i.push(R)}}class x{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function j(i){a.setTimeout(()=>{throw i},0)}function $(){var i=S;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class B{constructor(){this.h=this.g=null}add(c,h){const p=W.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var W=new x(()=>new V,i=>i.reset());class V{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let J,ne=!1,S=new B,_=()=>{const i=Promise.resolve(void 0);J=()=>{i.then(m)}};function m(){for(var i;i=$();){try{i.h.call(i.g)}catch(h){j(h)}var c=W;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}ne=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return i})();function y(i){return/^[\s\xa0]*$/.test(i)}function ae(i,c){I.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}g(ae,I),ae.prototype.init=function(i,c){const h=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(h=="mouseover"?c=i.fromElement:h=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&ae.Z.h.call(this)},ae.prototype.h=function(){ae.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Se="closure_listenable_"+(Math.random()*1e6|0),_e=0;function re(i,c,h,p,R){this.listener=i,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=R,this.key=++_e,this.da=this.fa=!1}function ce(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Ye(i,c,h){for(const p in i)c.call(h,i[p],p,i)}function It(i,c){for(const h in i)c.call(void 0,i[h],h,i)}function Qe(i){const c={};for(const h in i)c[h]=i[h];return c}const De="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ft(i,c){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)i[h]=p[h];for(let P=0;P<De.length;P++)h=De[P],Object.prototype.hasOwnProperty.call(p,h)&&(i[h]=p[h])}}function ht(i){this.src=i,this.g={},this.h=0}ht.prototype.add=function(i,c,h,p,R){const P=i.toString();i=this.g[P],i||(i=this.g[P]=[],this.h++);const H=Fe(i,c,p,R);return H>-1?(c=i[H],h||(c.fa=!1)):(c=new re(c,this.src,P,!!p,R),c.fa=h,i.push(c)),c};function tn(i,c){const h=c.type;if(h in i.g){var p=i.g[h],R=Array.prototype.indexOf.call(p,c,void 0),P;(P=R>=0)&&Array.prototype.splice.call(p,R,1),P&&(ce(c),i.g[h].length==0&&(delete i.g[h],i.h--))}}function Fe(i,c,h,p){for(let R=0;R<i.length;++R){const P=i[R];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==p)return R}return-1}var N="closure_lm_"+(Math.random()*1e6|0),q={};function G(i,c,h,p,R){if(Array.isArray(c)){for(let P=0;P<c.length;P++)G(i,c[P],h,p,R);return null}return h=K(h),i&&i[Se]?i.J(c,h,l(p)?!!p.capture:!1,R):X(i,c,h,!1,p,R)}function X(i,c,h,p,R,P){if(!c)throw Error("Invalid event type");const H=l(R)?!!R.capture:!!R;let ie=L(i);if(ie||(i[N]=ie=new ht(i)),h=ie.add(c,h,p,H,P),h.proxy)return h;if(p=ye(),h.proxy=p,p.src=i,p.listener=h,i.addEventListener)w||(R=H),R===void 0&&(R=!1),i.addEventListener(c.toString(),p,R);else if(i.attachEvent)i.attachEvent(C(c.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ye(){function i(h){return c.call(i.src,i.listener,h)}const c=D;return i}function E(i,c,h,p,R){if(Array.isArray(c))for(var P=0;P<c.length;P++)E(i,c[P],h,p,R);else p=l(p)?!!p.capture:!!p,h=K(h),i&&i[Se]?(i=i.i,P=String(c).toString(),P in i.g&&(c=i.g[P],h=Fe(c,h,p,R),h>-1&&(ce(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete i.g[P],i.h--)))):i&&(i=L(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Fe(c,h,p,R)),(h=i>-1?c[i]:null)&&T(h))}function T(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Se])tn(c.i,i);else{var h=i.type,p=i.proxy;c.removeEventListener?c.removeEventListener(h,p,i.capture):c.detachEvent?c.detachEvent(C(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=L(c))?(tn(h,i),h.h==0&&(h.src=null,c[N]=null)):ce(i)}}}function C(i){return i in q?q[i]:q[i]="on"+i}function D(i,c){if(i.da)i=!0;else{c=new ae(c,this);const h=i.listener,p=i.ha||i.src;i.fa&&T(i),i=h.call(p,c)}return i}function L(i){return i=i[N],i instanceof ht?i:null}var k="__closure_events_fn_"+(Math.random()*1e9>>>0);function K(i){return typeof i=="function"?i:(i[k]||(i[k]=function(c){return i.handleEvent(c)}),i[k])}function F(){b.call(this),this.i=new ht(this),this.M=this,this.G=null}g(F,b),F.prototype[Se]=!0,F.prototype.removeEventListener=function(i,c,h,p){E(this,i,c,h,p)};function M(i,c){var h,p=i.G;if(p)for(h=[];p;p=p.G)h.push(p);if(i=i.M,p=c.type||c,typeof c=="string")c=new I(c,i);else if(c instanceof I)c.target=c.target||i;else{var R=c;c=new I(p,i),Ft(c,R)}R=!0;let P,H;if(h)for(H=h.length-1;H>=0;H--)P=c.g=h[H],R=U(P,p,!0,c)&&R;if(P=c.g=i,R=U(P,p,!0,c)&&R,R=U(P,p,!1,c)&&R,h)for(H=0;H<h.length;H++)P=c.g=h[H],R=U(P,p,!1,c)&&R}F.prototype.N=function(){if(F.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const h=i.g[c];for(let p=0;p<h.length;p++)ce(h[p]);delete i.g[c],i.h--}}this.G=null},F.prototype.J=function(i,c,h,p){return this.i.add(String(i),c,!1,h,p)},F.prototype.K=function(i,c,h,p){return this.i.add(String(i),c,!0,h,p)};function U(i,c,h,p){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let P=0;P<c.length;++P){const H=c[P];if(H&&!H.da&&H.capture==h){const ie=H.listener,Oe=H.ha||H.src;H.fa&&tn(i.i,H),R=ie.call(Oe,p)!==!1&&R}}return R&&!p.defaultPrevented}function Q(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=f(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function z(i){i.g=Q(()=>{i.g=null,i.i&&(i.i=!1,z(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Y extends b{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:z(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(i){b.call(this),this.h=i,this.g={}}g(Z,b);var oe=[];function ve(i){Ye(i.g,function(c,h){this.g.hasOwnProperty(h)&&T(c)},i),i.g={}}Z.prototype.N=function(){Z.Z.N.call(this),ve(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fe=a.JSON.stringify,Ve=a.JSON.parse,je=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Ze(){}function st(){}var ft={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function es(){I.call(this,"d")}g(es,I);function Le(){I.call(this,"c")}g(Le,I);var xe={},Cs=null;function ts(){return Cs=Cs||new F}xe.Ia="serverreachability";function nc(i){I.call(this,xe.Ia,i)}g(nc,I);function Rs(i){const c=ts();M(c,new nc(c))}xe.STAT_EVENT="statevent";function sc(i,c){I.call(this,xe.STAT_EVENT,i),this.stat=c}g(sc,I);function Ke(i){const c=ts();M(c,new sc(c,i))}xe.Ja="timingevent";function rc(i,c){I.call(this,xe.Ja,i),this.size=c}g(rc,I);function Ps(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function Os(){this.g=!0}Os.prototype.ua=function(){this.g=!1};function Od(i,c,h,p,R,P){i.info(function(){if(i.g)if(P){var H="",ie=P.split("&");for(let Ee=0;Ee<ie.length;Ee++){var Oe=ie[Ee].split("=");if(Oe.length>1){const ke=Oe[0];Oe=Oe[1];const Tt=ke.split("_");H=Tt.length>=2&&Tt[1]=="type"?H+(ke+"="+Oe+"&"):H+(ke+"=redacted&")}}}else H=null;else H=P;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+h+`
`+H})}function kd(i,c,h,p,R,P,H){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+h+`
`+P+" "+H})}function ns(i,c,h,p){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Dd(i,h)+(p?" "+p:"")})}function Nd(i,c){i.info(function(){return"TIMEOUT: "+c})}Os.prototype.info=function(){};function Dd(i,c){if(!i.g)return c;if(!c)return null;try{const P=JSON.parse(c);if(P){for(i=0;i<P.length;i++)if(Array.isArray(P[i])){var h=P[i];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var R=p[0];if(R!="noop"&&R!="stop"&&R!="close")for(let H=1;H<p.length;H++)p[H]=""}}}}return fe(P)}catch{return c}}var Qi={NO_ERROR:0,TIMEOUT:8},Ld={},ic;function Zi(){}g(Zi,Ze),Zi.prototype.g=function(){return new XMLHttpRequest},ic=new Zi;function ks(i){return encodeURIComponent(String(i))}function xd(i){var c=1;i=i.split(":");const h=[];for(;c>0&&i.length;)h.push(i.shift()),c--;return i.length&&h.push(i.join(":")),h}function nn(i,c,h,p){this.j=i,this.i=c,this.l=h,this.S=p||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new oc}function oc(){this.i=null,this.g="",this.h=!1}var ac={},eo={};function to(i,c,h){i.M=1,i.A=Mr(bt(c)),i.u=h,i.R=!0,cc(i,null)}function cc(i,c){i.F=Date.now(),xr(i),i.B=bt(i.A);var h=i.B,p=i.S;Array.isArray(p)||(p=[String(p)]),wc(h.i,"t",p),i.C=0,h=i.j.L,i.h=new oc,i.g=Vc(i.j,h?c:null,!i.u),i.P>0&&(i.O=new Y(f(i.Y,i,i.g),i.P)),c=i.V,h=i.g,p=i.ba;var R="readystatechange";Array.isArray(R)||(R&&(oe[0]=R.toString()),R=oe);for(let P=0;P<R.length;P++){const H=G(h,R[P],p||c.handleEvent,!1,c.h||c);if(!H)break;c.g[H.key]=H}c=i.J?Qe(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Rs(),Od(i.i,i.v,i.B,i.l,i.S,i.u)}nn.prototype.ba=function(i){i=i.target;const c=this.O;c&&on(i)==3?c.j():this.Y(i)},nn.prototype.Y=function(i){try{if(i==this.g)e:{const ie=on(this.g),Oe=this.g.ya(),Ee=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||Rc(this.g)))){this.K||ie!=4||Oe==7||(Oe==8||Ee<=0?Rs(3):Rs(2)),no(this);var c=this.g.ca();this.X=c;var h=Md(this);if(this.o=c==200,kd(this.i,this.v,this.B,this.l,this.S,ie,c),this.o){if(this.U&&!this.L){t:{if(this.g){var p,R=this.g;if((p=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var P=p;break t}}P=null}if(i=P)ns(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,so(this,i);else{this.o=!1,this.m=3,Ke(12),On(this),Ns(this);break e}}if(this.R){i=!0;let ke;for(;!this.K&&this.C<h.length;)if(ke=Ud(this,h),ke==eo){ie==4&&(this.m=4,Ke(14),i=!1),ns(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==ac){this.m=4,Ke(15),ns(this.i,this.l,h,"[Invalid Chunk]"),i=!1;break}else ns(this.i,this.l,ke,null),so(this,ke);if(lc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||h.length!=0||this.h.h||(this.m=1,Ke(16),i=!1),this.o=this.o&&i,!i)ns(this.i,this.l,h,"[Invalid Chunked Response]"),On(this),Ns(this);else if(h.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),ho(H),H.P=!0,Ke(11))}}else ns(this.i,this.l,h,null),so(this,h);ie==4&&On(this),this.o&&!this.K&&(ie==4?xc(this.j,this):(this.o=!1,xr(this)))}else Yd(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ke(12)):(this.m=0,Ke(13)),On(this),Ns(this)}}}catch{}finally{}};function Md(i){if(!lc(i))return i.g.la();const c=Rc(i.g);if(c==="")return"";let h="";const p=c.length,R=on(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return On(i),Ns(i),"";i.h.i=new a.TextDecoder}for(let P=0;P<p;P++)i.h.h=!0,h+=i.h.i.decode(c[P],{stream:!(R&&P==p-1)});return c.length=0,i.h.g+=h,i.C=0,i.h.g}function lc(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Ud(i,c){var h=i.C,p=c.indexOf(`
`,h);return p==-1?eo:(h=Number(c.substring(h,p)),isNaN(h)?ac:(p+=1,p+h>c.length?eo:(c=c.slice(p,p+h),i.C=p+h,c)))}nn.prototype.cancel=function(){this.K=!0,On(this)};function xr(i){i.T=Date.now()+i.H,uc(i,i.H)}function uc(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Ps(f(i.aa,i),c)}function no(i){i.D&&(a.clearTimeout(i.D),i.D=null)}nn.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Nd(this.i,this.B),this.M!=2&&(Rs(),Ke(17)),On(this),this.m=2,Ns(this)):uc(this,this.T-i)};function Ns(i){i.j.I==0||i.K||xc(i.j,i)}function On(i){no(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,ve(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function so(i,c){try{var h=i.j;if(h.I!=0&&(h.g==i||ro(h.h,i))){if(!i.L&&ro(h.h,i)&&h.I==3){try{var p=h.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<i.F)Br(h),Vr(h);else break e;uo(h),Ke(18)}}else h.xa=R[1],0<h.xa-h.K&&R[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Ps(f(h.Va,h),6e3));dc(h.h)<=1&&h.ta&&(h.ta=void 0)}else Nn(h,11)}else if((i.L||h.g==i)&&Br(h),!y(c))for(R=h.Ba.g.parse(c),c=0;c<R.length;c++){let Ee=R[c];const ke=Ee[0];if(!(ke<=h.K))if(h.K=ke,Ee=Ee[1],h.I==2)if(Ee[0]=="c"){h.M=Ee[1],h.ba=Ee[2];const Tt=Ee[3];Tt!=null&&(h.ka=Tt,h.j.info("VER="+h.ka));const Dn=Ee[4];Dn!=null&&(h.za=Dn,h.j.info("SVER="+h.za));const an=Ee[5];an!=null&&typeof an=="number"&&an>0&&(p=1.5*an,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const cn=i.g;if(cn){const Hr=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hr){var P=p.h;P.g||Hr.indexOf("spdy")==-1&&Hr.indexOf("quic")==-1&&Hr.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(io(P,P.h),P.h=null))}if(p.G){const fo=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;fo&&(p.wa=fo,Te(p.J,p.G,fo))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-i.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var H=i;if(p.na=Fc(p,p.L?p.ba:null,p.W),H.L){pc(p.h,H);var ie=H,Oe=p.O;Oe&&(ie.H=Oe),ie.D&&(no(ie),xr(ie)),p.g=H}else Dc(p);h.i.length>0&&jr(h)}else Ee[0]!="stop"&&Ee[0]!="close"||Nn(h,7);else h.I==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?Nn(h,7):lo(h):Ee[0]!="noop"&&h.l&&h.l.qa(Ee),h.A=0)}}Rs(4)}catch{}}var Fd=class{constructor(i,c){this.g=i,this.map=c}};function hc(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fc(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function dc(i){return i.h?1:i.g?i.g.size:0}function ro(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function io(i,c){i.g?i.g.add(c):i.h=c}function pc(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}hc.prototype.cancel=function(){if(this.i=gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function gc(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const h of i.g.values())c=c.concat(h.G);return c}return A(i.i)}var mc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vd(i,c){if(i){i=i.split("&");for(let h=0;h<i.length;h++){const p=i[h].indexOf("=");let R,P=null;p>=0?(R=i[h].substring(0,p),P=i[h].substring(p+1)):R=i[h],c(R,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function sn(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof sn?(this.l=i.l,Ds(this,i.j),this.o=i.o,this.g=i.g,Ls(this,i.u),this.h=i.h,oo(this,Ic(i.i)),this.m=i.m):i&&(c=String(i).match(mc))?(this.l=!1,Ds(this,c[1]||"",!0),this.o=xs(c[2]||""),this.g=xs(c[3]||"",!0),Ls(this,c[4]),this.h=xs(c[5]||"",!0),oo(this,c[6]||"",!0),this.m=xs(c[7]||"")):(this.l=!1,this.i=new Us(null,this.l))}sn.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(Ms(c,_c,!0),":");var h=this.g;return(h||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Ms(c,_c,!0),"@"),i.push(ks(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&i.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Ms(h,h.charAt(0)=="/"?Hd:Bd,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Ms(h,Wd)),i.join("")},sn.prototype.resolve=function(i){const c=bt(this);let h=!!i.j;h?Ds(c,i.j):h=!!i.o,h?c.o=i.o:h=!!i.g,h?c.g=i.g:h=i.u!=null;var p=i.h;if(h)Ls(c,i.u);else if(h=!!i.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var R=c.h.lastIndexOf("/");R!=-1&&(p=c.h.slice(0,R+1)+p)}if(R=p,R==".."||R==".")p="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){p=R.lastIndexOf("/",0)==0,R=R.split("/");const P=[];for(let H=0;H<R.length;){const ie=R[H++];ie=="."?p&&H==R.length&&P.push(""):ie==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),p&&H==R.length&&P.push("")):(P.push(ie),p=!0)}p=P.join("/")}else p=R}return h?c.h=p:h=i.i.toString()!=="",h?oo(c,Ic(i.i)):h=!!i.m,h&&(c.m=i.m),c};function bt(i){return new sn(i)}function Ds(i,c,h){i.j=h?xs(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Ls(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function oo(i,c,h){c instanceof Us?(i.i=c,Kd(i.i,i.l)):(h||(c=Ms(c,$d)),i.i=new Us(c,i.l))}function Te(i,c,h){i.i.set(c,h)}function Mr(i){return Te(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function xs(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ms(i,c,h){return typeof i=="string"?(i=encodeURI(i).replace(c,jd),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function jd(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var _c=/[#\/\?@]/g,Bd=/[#\?:]/g,Hd=/[#\?]/g,$d=/[#\?@]/g,Wd=/#/g;function Us(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function kn(i){i.g||(i.g=new Map,i.h=0,i.i&&Vd(i.i,function(c,h){i.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=Us.prototype,t.add=function(i,c){kn(this),this.i=null,i=ss(this,i);let h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(c),this.h+=1,this};function yc(i,c){kn(i),c=ss(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function vc(i,c){return kn(i),c=ss(i,c),i.g.has(c)}t.forEach=function(i,c){kn(this),this.g.forEach(function(h,p){h.forEach(function(R){i.call(c,R,p,this)},this)},this)};function Ec(i,c){kn(i);let h=[];if(typeof c=="string")vc(i,c)&&(h=h.concat(i.g.get(ss(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)h=h.concat(i[c]);return h}t.set=function(i,c){return kn(this),this.i=null,i=ss(this,i),vc(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},t.get=function(i,c){return i?(i=Ec(this,i),i.length>0?String(i[0]):c):c};function wc(i,c,h){yc(i,c),h.length>0&&(i.i=null,i.g.set(ss(i,c),A(h)),i.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var h=c[p];const R=ks(h);h=Ec(this,h);for(let P=0;P<h.length;P++){let H=R;h[P]!==""&&(H+="="+ks(h[P])),i.push(H)}}return this.i=i.join("&")};function Ic(i){const c=new Us;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function ss(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Kd(i,c){c&&!i.j&&(kn(i),i.i=null,i.g.forEach(function(h,p){const R=p.toLowerCase();p!=R&&(yc(this,p),wc(this,R,h))},i)),i.j=c}function Gd(i,c){const h=new Os;if(a.Image){const p=new Image;p.onload=d(rn,h,"TestLoadImage: loaded",!0,c,p),p.onerror=d(rn,h,"TestLoadImage: error",!1,c,p),p.onabort=d(rn,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=d(rn,h,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else c(!1)}function zd(i,c){const h=new Os,p=new AbortController,R=setTimeout(()=>{p.abort(),rn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:p.signal}).then(P=>{clearTimeout(R),P.ok?rn(h,"TestPingServer: ok",!0,c):rn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),rn(h,"TestPingServer: error",!1,c)})}function rn(i,c,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function qd(){this.g=new je}function ao(i){this.i=i.Sb||null,this.h=i.ab||!1}g(ao,Ze),ao.prototype.g=function(){return new Ur(this.i,this.h)};function Ur(i,c){F.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Ur,F),t=Ur.prototype,t.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Vs(this)},t.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=0},t.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;bc(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function bc(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}t.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Fs(this):Vs(this),this.readyState==3&&bc(this)}},t.Oa=function(i){this.g&&(this.response=this.responseText=i,Fs(this))},t.Na=function(i){this.g&&(this.response=i,Fs(this))},t.ga=function(){this.g&&Fs(this)};function Fs(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Vs(i)}t.setRequestHeader=function(i,c){this.A.append(i,c)},t.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=c.next();return i.join(`\r
`)};function Vs(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Ur.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Tc(i){let c="";return Ye(i,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function co(i,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Tc(h),typeof i=="string"?h!=null&&ks(h):Te(i,c,h))}function Ae(i){F.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Ae,F);var Jd=/^https?$/i,Xd=["POST","PUT"];t=Ae.prototype,t.Fa=function(i){this.H=i},t.ea=function(i,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ic.g(),this.g.onreadystatechange=v(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(P){Sc(this,P);return}if(i=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),R=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(Xd,c,void 0)>=0)||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,H]of h)this.g.setRequestHeader(P,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(P){Sc(this,P)}};function Sc(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Ac(i),Fr(i)}function Ac(i){i.A||(i.A=!0,M(i,"complete"),M(i,"error"))}t.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,M(this,"complete"),M(this,"abort"),Fr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fr(this,!0)),Ae.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Cc(this):this.Xa())},t.Xa=function(){Cc(this)};function Cc(i){if(i.h&&typeof o<"u"){if(i.v&&on(i)==4)setTimeout(i.Ca.bind(i),0);else if(M(i,"readystatechange"),on(i)==4){i.h=!1;try{const P=i.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=P===0){let H=String(i.D).match(mc)[1]||null;!H&&a.self&&a.self.location&&(H=a.self.location.protocol.slice(0,-1)),p=!Jd.test(H?H.toLowerCase():"")}h=p}if(h)M(i,"complete"),M(i,"success");else{i.o=6;try{var R=on(i)>2?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.ca()+"]",Ac(i)}}finally{Fr(i)}}}}function Fr(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const h=i.g;i.g=null,c||M(i,"ready");try{h.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function on(i){return i.g?i.g.readyState:0}t.ca=function(){try{return on(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Ve(c)}};function Rc(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Yd(i){const c={};i=(i.g&&on(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if(y(i[p]))continue;var h=xd(i[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[R]||[];c[R]=P,P.push(h)}It(c,function(p){return p.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function js(i,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||c}function Pc(i){this.za=0,this.i=[],this.j=new Os,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=js("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=js("baseRetryDelayMs",5e3,i),this.Za=js("retryDelaySeedMs",1e4,i),this.Ta=js("forwardChannelMaxRetries",2,i),this.va=js("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new hc(i&&i.concurrentRequestLimit),this.Ba=new qd,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Pc.prototype,t.ka=8,t.I=1,t.connect=function(i,c,h,p){Ke(0),this.W=i,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=Fc(this,null,this.W),jr(this)};function lo(i){if(Oc(i),i.I==3){var c=i.V++,h=bt(i.J);if(Te(h,"SID",i.M),Te(h,"RID",c),Te(h,"TYPE","terminate"),Bs(i,h),c=new nn(i,i.j,c),c.M=2,c.A=Mr(bt(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Vc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),xr(c)}Uc(i)}function Vr(i){i.g&&(ho(i),i.g.cancel(),i.g=null)}function Oc(i){Vr(i),i.v&&(a.clearTimeout(i.v),i.v=null),Br(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function jr(i){if(!fc(i.h)&&!i.m){i.m=!0;var c=i.Ea;J||_(),ne||(J(),ne=!0),S.add(c,i),i.D=0}}function Qd(i,c){return dc(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Ps(f(i.Ea,i,c),Mc(i,i.D)),i.D++,!0)}t.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const R=new nn(this,this.j,i);let P=this.o;if(this.U&&(P?(P=Qe(P),Ft(P,this.U)):P=this.U),this.u!==null||this.R||(R.J=P,P=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Nc(this,R,c),h=bt(this.J),Te(h,"RID",i),Te(h,"CVER",22),this.G&&Te(h,"X-HTTP-Session-Id",this.G),Bs(this,h),P&&(this.R?c="headers="+ks(Tc(P))+"&"+c:this.u&&co(h,this.u,P)),io(this.h,R),this.Ra&&Te(h,"TYPE","init"),this.S?(Te(h,"$req",c),Te(h,"SID","null"),R.U=!0,to(R,h,null)):to(R,h,c),this.I=2}}else this.I==3&&(i?kc(this,i):this.i.length==0||fc(this.h)||kc(this))};function kc(i,c){var h;c?h=c.l:h=i.V++;const p=bt(i.J);Te(p,"SID",i.M),Te(p,"RID",h),Te(p,"AID",i.K),Bs(i,p),i.u&&i.o&&co(p,i.u,i.o),h=new nn(i,i.j,h,i.D+1),i.u===null&&(h.J=i.o),c&&(i.i=c.G.concat(i.i)),c=Nc(i,h,1e3),h.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),io(i.h,h),to(h,p,c)}function Bs(i,c){i.H&&Ye(i.H,function(h,p){Te(c,p,h)}),i.l&&Ye({},function(h,p){Te(c,p,h)})}function Nc(i,c,h){h=Math.min(i.i.length,h);const p=i.l?f(i.l.Ka,i.l,i):null;e:{var R=i.i;let ie=-1;for(;;){const Oe=["count="+h];ie==-1?h>0?(ie=R[0].g,Oe.push("ofs="+ie)):ie=0:Oe.push("ofs="+ie);let Ee=!0;for(let ke=0;ke<h;ke++){var P=R[ke].g;const Tt=R[ke].map;if(P-=ie,P<0)ie=Math.max(0,R[ke].g-100),Ee=!1;else try{P="req"+P+"_"||"";try{var H=Tt instanceof Map?Tt:Object.entries(Tt);for(const[Dn,an]of H){let cn=an;l(an)&&(cn=fe(an)),Oe.push(P+Dn+"="+encodeURIComponent(cn))}}catch(Dn){throw Oe.push(P+"type="+encodeURIComponent("_badmap")),Dn}}catch{p&&p(Tt)}}if(Ee){H=Oe.join("&");break e}}H=void 0}return i=i.i.splice(0,h),c.G=i,H}function Dc(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;J||_(),ne||(J(),ne=!0),S.add(c,i),i.A=0}}function uo(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Ps(f(i.Da,i),Mc(i,i.A)),i.A++,!0)}t.Da=function(){if(this.v=null,Lc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Ps(f(this.Wa,this),i)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ke(10),Vr(this),Lc(this))};function ho(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Lc(i){i.g=new nn(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=bt(i.na);Te(c,"RID","rpc"),Te(c,"SID",i.M),Te(c,"AID",i.K),Te(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&Te(c,"TO",i.ia),Te(c,"TYPE","xmlhttp"),Bs(i,c),i.u&&i.o&&co(c,i.u,i.o),i.O&&(i.g.H=i.O);var h=i.g;i=i.ba,h.M=1,h.A=Mr(bt(c)),h.u=null,h.R=!0,cc(h,i)}t.Va=function(){this.C!=null&&(this.C=null,Vr(this),uo(this),Ke(19))};function Br(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function xc(i,c){var h=null;if(i.g==c){Br(i),ho(i),i.g=null;var p=2}else if(ro(i.h,c))h=c.G,pc(i.h,c),p=1;else return;if(i.I!=0){if(c.o)if(p==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var R=i.D;p=ts(),M(p,new rc(p,h)),jr(i)}else Dc(i);else if(R=c.m,R==3||R==0&&c.X>0||!(p==1&&Qd(i,c)||p==2&&uo(i)))switch(h&&h.length>0&&(c=i.h,c.i=c.i.concat(h)),R){case 1:Nn(i,5);break;case 4:Nn(i,10);break;case 3:Nn(i,6);break;default:Nn(i,2)}}}function Mc(i,c){let h=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(h*=2),h*c}function Nn(i,c){if(i.j.info("Error code "+c),c==2){var h=f(i.bb,i),p=i.Ua;const R=!p;p=new sn(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ds(p,"https"),Mr(p),R?Gd(p.toString(),h):zd(p.toString(),h)}else Ke(2);i.I=0,i.l&&i.l.pa(c),Uc(i),Oc(i)}t.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function Uc(i){if(i.I=0,i.ja=[],i.l){const c=gc(i.h);(c.length!=0||i.i.length!=0)&&(O(i.ja,c),O(i.ja,i.i),i.h.i.length=0,A(i.i),i.i.length=0),i.l.oa()}}function Fc(i,c,h){var p=h instanceof sn?bt(h):new sn(h);if(p.g!="")c&&(p.g=c+"."+p.g),Ls(p,p.u);else{var R=a.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const P=new sn(null);p&&Ds(P,p),c&&(P.g=c),R&&Ls(P,R),h&&(P.h=h),p=P}return h=i.G,c=i.wa,h&&c&&Te(p,h,c),Te(p,"VER",i.ka),Bs(i,p),p}function Vc(i,c,h){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new Ae(new ao({ab:h})):new Ae(i.ma),c.Fa(i.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jc(){}t=jc.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function rt(i,c){F.call(this),this.g=new Pc(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!y(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new rs(this)}g(rt,F),rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},rt.prototype.close=function(){lo(this.g)},rt.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.v&&(h={},h.__data__=fe(i),i=h);c.i.push(new Fd(c.Ya++,i)),c.I==3&&jr(c)},rt.prototype.N=function(){this.g.l=null,delete this.j,lo(this.g),delete this.g,rt.Z.N.call(this)};function Bc(i){es.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const h in c){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}g(Bc,es);function Hc(){Le.call(this),this.status=1}g(Hc,Le);function rs(i){this.g=i}g(rs,jc),rs.prototype.ra=function(){M(this.g,"a")},rs.prototype.qa=function(i){M(this.g,new Bc(i))},rs.prototype.pa=function(i){M(this.g,new Hc)},rs.prototype.oa=function(){M(this.g,"b")},rt.prototype.send=rt.prototype.o,rt.prototype.open=rt.prototype.m,rt.prototype.close=rt.prototype.close,Qi.NO_ERROR=0,Qi.TIMEOUT=8,Qi.HTTP_ERROR=6,Ld.COMPLETE="complete",st.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",F.prototype.listen=F.prototype.J,Ae.prototype.listenOnce=Ae.prototype.K,Ae.prototype.getLastError=Ae.prototype.Ha,Ae.prototype.getLastErrorCode=Ae.prototype.ya,Ae.prototype.getStatus=Ae.prototype.ca,Ae.prototype.getResponseJson=Ae.prototype.La,Ae.prototype.getResponseText=Ae.prototype.la,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Fa}).apply(typeof Xr<"u"?Xr:typeof self<"u"?self:typeof window<"u"?window:{});const Ru="@firebase/firestore",Pu="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dr="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new Fa("@firebase/firestore");function mt(t,...e){if(bs.logLevel<=me.DEBUG){const n=e.map(Xa);bs.debug(`Firestore (${Dr}): ${t}`,...n)}}function Id(t,...e){if(bs.logLevel<=me.ERROR){const n=e.map(Xa);bs.error(`Firestore (${Dr}): ${t}`,...n)}}function yI(t,...e){if(bs.logLevel<=me.WARN){const n=e.map(Xa);bs.warn(`Firestore (${Dr}): ${t}`,...n)}}function Xa(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,bd(t,s,n)}function bd(t,e,n){let s=`FIRESTORE (${Dr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Id(s),new Error(s)}function ar(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||bd(e,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class he extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(ze.UNAUTHENTICATED)))}shutdown(){}}class EI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class wI{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ar(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let o=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new cr,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const u=o;e.enqueueRetryable((async()=>{await u.promise,await r(this.currentUser)}))},l=u=>{mt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(mt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new cr)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(mt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ar(typeof s.accessToken=="string",31837,{l:s}),new Td(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ar(e===null||typeof e=="string",2055,{h:e}),new ze(e)}}class II{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class bI{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new II(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(ze.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ou{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,at(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ar(this.o===void 0,3512);const s=o=>{o.error!=null&&mt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,mt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>s(o)))};const r=o=>{mt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>r(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):mt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ou(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ar(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ou(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=SI(40);for(let o=0;o<r.length;++o)s.length<20&&r[o]<n&&(s+=e.charAt(r[o]%62))}return s}}function Rn(t,e){return t<e?-1:t>e?1:0}function CI(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),o=e.charAt(s);if(r!==o)return Fo(r)===Fo(o)?Rn(r,o):Fo(r)?1:-1}return Rn(t.length,e.length)}const RI=55296,PI=57343;function Fo(t){const e=t.charCodeAt(0);return e>=RI&&e<=PI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="__name__";class Ct{constructor(e,n,s){n===void 0?n=0:n>e.length&&Tr(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Tr(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ct.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ct?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const o=Ct.compareSegments(e.get(r),n.get(r));if(o!==0)return o}return Rn(e.length,n.length)}static compareSegments(e,n){const s=Ct.isNumericId(e),r=Ct.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?Ct.extractNumericId(e).compare(Ct.extractNumericId(n)):CI(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ja.fromString(e.substring(4,e.length-2))}}class dt extends Ct{construct(e,n,s){return new dt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(ue.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new dt(n)}static emptyPath(){return new dt([])}}const OI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bn extends Ct{construct(e,n,s){return new Bn(e,n,s)}static isValidIdentifier(e){return OI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ku}static keyField(){return new Bn([ku])}static fromServerFormat(e){const n=[];let s="",r=0;const o=()=>{if(s.length===0)throw new he(ue.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new he(ue.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new he(ue.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(o(),r++)}if(o(),a)throw new he(ue.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Bn(n)}static emptyPath(){return new Bn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.path=e}static fromPath(e){return new Hn(dt.fromString(e))}static fromName(e){return new Hn(dt.fromString(e).popFirst(5))}static empty(){return new Hn(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&dt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return dt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Hn(new dt(e.slice()))}}function kI(t,e,n,s){if(e===!0&&s===!0)throw new he(ue.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function NI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function DI(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Tr(12329,{type:typeof t})}function LI(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new he(ue.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=DI(t);throw new he(ue.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Lr(t,e){if(!NI(t))throw new he(ue.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const a=t[s];if(r&&typeof a!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${s}' field to equal '${o.value}'`;break}}if(n)throw new he(ue.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=-62135596800,Du=1e6;class Pt{static now(){return Pt.fromMillis(Date.now())}static fromDate(e){return Pt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Du);return new Pt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Nu)throw new he(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Du}_compareTo(e){return this.seconds===e.seconds?Rn(this.nanoseconds,e.nanoseconds):Rn(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Pt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Lr(e,Pt._jsonSchema))return new Pt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Nu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Pt._jsonSchemaVersion="firestore/timestamp/1.0",Pt._jsonSchema={type:Pe("string",Pt._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};function xI(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new MI("Invalid base64 string: "+o):o}})(e);return new Xn(n)}static fromUint8Array(e){const n=(function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o})(e);return new Xn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Rn(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xn.EMPTY_BYTE_STRING=new Xn("");const ha="(default)";class ki{constructor(e,n){this.projectId=e,this.database=n||ha}static empty(){return new ki("","")}get isDefaultDatabase(){return this.database===ha}isEqual(e){return e instanceof ki&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n=null,s=[],r=[],o=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function FI(t){return new UI(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lu,le;(le=Lu||(Lu={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ja([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=1048576;function Vo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n,s=1e3,r=1.5,o=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=r,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&mt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,s,r,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=o,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,o){const a=Date.now()+s,l=new Ya(e,n,a,r,o);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(ue.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var xu,Mu;(Mu=xu||(xu={})).Ma="default",Mu.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="firestore.googleapis.com",Fu=!0;class Vu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he(ue.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Sd,this.ssl=Fu}else this.host=e.host,this.ssl=e.ssl??Fu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=VI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jI)throw new he(ue.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=HI(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ad{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(ue.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(ue.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new vI;switch(s.type){case"firstParty":return new bI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(ue.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Uu.get(n);s&&(mt("ComponentProvider","Removing Datastore"),Uu.delete(n),s.terminate())})(this),Promise.resolve()}}function $I(t,e,n,s={}){t=LI(t,Ad);const r=Ts(e),o=t._getSettings(),a={...o,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;r&&(Ma(`https://${l}`),Ua("Firestore",!0)),o.host!==Sd&&o.host!==l&&yI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...o,host:l,ssl:r,emulatorOptions:s};if(!zn(u,a)&&(t._setSettings(u),s.mockUserToken)){let f,d;if(typeof s.mockUserToken=="string")f=s.mockUserToken,d=ze.MOCK_USER;else{f=Nf(s.mockUserToken,t._app?.options.projectId);const g=s.mockUserToken.sub||s.mockUserToken.user_id;if(!g)throw new he(ue.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ze(g)}t._authCredentials=new EI(new Td(f,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Qa(this.firestore,e,this._query)}}class Ot{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Za(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}toJSON(){return{type:Ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Lr(n,Ot._jsonSchema))return new Ot(e,s||null,new Hn(dt.fromString(n.referencePath)))}}Ot._jsonSchemaVersion="firestore/documentReference/1.0",Ot._jsonSchema={type:Pe("string",Ot._jsonSchemaVersion),referencePath:Pe("string")};class Za extends Qa{constructor(e,n,s){super(e,n,FI(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new Hn(e))}withConverter(e){return new Za(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="AsyncQueue";class Bu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new BI(this,"async_queue_retry"),this._c=()=>{const s=Vo();s&&mt(ju,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Vo();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Vo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new cr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!xI(e))throw e;mt(ju,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Id("INTERNAL UNHANDLED ERROR: ",Hu(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=Ya.createAndSchedule(this,e,n,s,(o=>this.hc(o)));return this.tc.push(r),r}uc(){this.nc&&Tr(47125,{Pc:Hu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Hu(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class WI extends Ad{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Bu,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bu(e),this._firestoreClient=void 0,await e}}}function KI(t,e){const n=typeof t=="object"?t:ja(),s=typeof t=="string"?t:ha,r=zi(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const o=Pf("firestore");o&&$I(r,...o)}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gt(Xn.fromBase64String(e))}catch(n){throw new he(ue.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gt(Xn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Gt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Lr(e,Gt._jsonSchema))return Gt.fromBase64String(e.bytes)}}Gt._jsonSchemaVersion="firestore/bytes/1.0",Gt._jsonSchema={type:Pe("string",Gt._jsonSchemaVersion),bytes:Pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(ue.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(ue.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(ue.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Rn(this._lat,e._lat)||Rn(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Kn._jsonSchemaVersion}}static fromJSON(e){if(Lr(e,Kn._jsonSchema))return new Kn(e.latitude,e.longitude)}}Kn._jsonSchemaVersion="firestore/geoPoint/1.0",Kn._jsonSchema={type:Pe("string",Kn._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==r[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Lr(e,Gn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Gn(e.vectorValues);throw new he(ue.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gn._jsonSchemaVersion="firestore/vectorValue/1.0",Gn._jsonSchema={type:Pe("string",Gn._jsonSchemaVersion),vectorValues:Pe("object")};const GI=new RegExp("[~\\*/\\[\\]]");function zI(t,e,n){if(e.search(GI)>=0)throw $u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Cd(...e.split("."))._internalPath}catch{throw $u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function $u(t,e,n,s,r){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new he(ue.INVALID_ARGUMENT,o+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n,s,r,o){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Pd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qI extends Rd{data(){return super.data()}}function Pd(t,e){return typeof e=="string"?zI(t,e):e instanceof Cd?e._internalPath:e._delegate._internalPath}class Yr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vs extends Rd{constructor(e,n,s,r,o,a){super(e,n,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ci(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Pd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(ue.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=vs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",vs._jsonSchema={type:Pe("string",vs._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class ci extends vs{data(e={}){return super.data(e)}}class lr{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Yr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new ci(this._firestore,this._userDataWriter,s.key,s,new Yr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new he(ue.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((l=>{const u=new ci(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Yr(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const u=new ci(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Yr(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:JI(l.type),doc:u,oldIndex:f,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(ue.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=lr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=AI.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((o=>{o._document!==null&&(n.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),r.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function JI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Tr(61501,{type:t})}}lr._jsonSchemaVersion="firestore/querySnapshot/1.0",lr._jsonSchema={type:Pe("string",lr._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};(function(e,n=!0){(function(r){Dr=r})(Qn),qn(new Cn("firestore",((s,{instanceIdentifier:r,options:o})=>{const a=s.getProvider("app").getImmediate(),l=new WI(new wI(s.getProvider("auth-internal")),new TI(a,s.getProvider("app-check-internal")),(function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new he(ue.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ki(f.options.projectId,d)})(a,r),a);return o={useFetchStreams:n,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Nt(Ru,Pu,e),Nt(Ru,Pu,"esm2020")})();const XI={apiKey:"AIzaSyBRFiDaknpB8mPa_Wq_U6fCNK95LJrlPZU",authDomain:"imralphmaron.firebaseapp.com",projectId:"imralphmaron",storageBucket:"imralphmaron.firebasestorage.app",messagingSenderId:"742817279999",appId:"1:742817279999:web:c3e429bbbb675ae64fc1ca",measurementId:"G-F3ZSVCTWD3"},ec=xf(XI),YI=ai(ec);SE(YI,ld);pI(ec);KI(ec);const tc=Rm(Bm);tc.use(km());tc.use(yd);tc.mount("#app");export{lb as A,eb as B,yi as C,tt as F,rb as T,Fm as _,Oh as a,nf as b,tb as c,Um as d,QI as e,Je as f,og as g,Wp as h,mi as i,Hg as j,xh as k,nb as l,sb as m,_a as n,Dh as o,ab as p,jw as q,fr as r,ob as s,up as t,ds as u,ib as v,er as w,cb as x,ot as y,ZI as z};
