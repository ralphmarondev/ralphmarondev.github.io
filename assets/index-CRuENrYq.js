const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CProgrammingIndex-C0O0_jDA.js","assets/MainLayout.vue_vue_type_style_index_0_lang-BFtLnDSm.js","assets/MainLayout-DOIhJtcZ.css","assets/IntroductionIndex-CXo2rhpx.js","assets/CodeBlock-B5pCUJyF.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/CodeBlock-DGQ9ZZ9i.css","assets/OutputBlock-DA1V7p0W.js","assets/OutputBlock-D8mF8BQf.css","assets/CompilationProcessIndex-D7_fnYzz.js","assets/IdentifiersIndex-JBvhmhMZ.js","assets/IdentifiersIndex-P3PbYShb.css","assets/KeywordsIndex-D3LFrKK5.js","assets/KeywordsIndex-D99_SN2F.css","assets/VariablesIndex-CIk576jN.js","assets/DataTypeIndex-Bis5PHWd.js","assets/QuizOneIndex-CZlUyApn.js","assets/InputAndOutputIndex-BF6yMyQp.js","assets/OperatorsIndex-g6IV7mLf.js","assets/QuizTwoIndex-buIaiK-m.js","assets/ConditionalStatementsIndex-lLss-c1l.js","assets/LoopsIndex-DEoh_8gN.js","assets/QuizThreeIndex-DRR3x7NW.js","assets/LoginIndex-BSOBVatx.js","assets/LoginIndex-C-ymjigd.css","assets/DashboardIndex-DgAkfths.js","assets/MainLayout.vue_vue_type_style_index_0_lang-DGvUFxfG.js","assets/useThemeStore-BLxCGhXP.js","assets/MainLayout-8ZLcnXjI.css","assets/MemoryListIndex-pwykLfpP.js","assets/storageUtils-gcLBRKOp.js","assets/useMemoriesStore-B_5cGoiu.js","assets/MemoryListIndex-CtxJ-zIk.css","assets/DetailsIndex-CoKkiRm-.js","assets/DetailsIndex-0yvoXKcq.css","assets/NewMemoryIndex-Dr1IEtmw.js","assets/PortfolioIndex-Dkk-acuj.js","assets/PortfolioIndex-B8Au0Qul.css","assets/BlogIndex-B6lrOqX-.js","assets/BlogIndex-Cx_9sonR.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},fs=[],cn=()=>{},$p=()=>!1,Ca=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Kl=t=>t.startsWith("onUpdate:"),tt=Object.assign,Gl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},DE=Object.prototype.hasOwnProperty,Ae=(t,e)=>DE.call(t,e),re=Array.isArray,ds=t=>Xi(t)==="[object Map]",ka=t=>Xi(t)==="[object Set]",rf=t=>Xi(t)==="[object Date]",ue=t=>typeof t=="function",ze=t=>typeof t=="string",Gt=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",qp=t=>(Ce(t)||ue(t))&&ue(t.then)&&ue(t.catch),Hp=Object.prototype.toString,Xi=t=>Hp.call(t),OE=t=>Xi(t).slice(8,-1),zp=t=>Xi(t)==="[object Object]",Ql=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fi=Wl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Na=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},VE=/-\w/g,qt=Na(t=>t.replace(VE,e=>e.slice(1).toUpperCase())),xE=/\B([A-Z])/g,Er=Na(t=>t.replace(xE,"-$1").toLowerCase()),Da=Na(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sc=Na(t=>t?`on${Da(t)}`:""),nr=(t,e)=>!Object.is(t,e),xo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Wp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},nl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},LE=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let sf;const Oa=()=>sf||(sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xl(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?BE(r):Xl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||Ce(t))return t}const ME=/;(?![^(]*\))/g,UE=/:([^]+)/,FE=/\/\*[^]*?\*\//g;function BE(t){const e={};return t.replace(FE,"").split(ME).forEach(n=>{if(n){const r=n.split(UE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Yl(t){let e="";if(ze(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Yl(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$E=Wl(jE);function Kp(t){return!!t||t===""}function qE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Va(t[r],e[r]);return n}function Va(t,e){if(t===e)return!0;let n=rf(t),r=rf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Gt(t),r=Gt(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?qE(t,e):!1;if(n=Ce(t),r=Ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Va(t[o],e[o]))return!1}}return String(t)===String(e)}function Gp(t,e){return t.findIndex(n=>Va(n,e))}const Qp=t=>!!(t&&t.__v_isRef===!0),HE=t=>ze(t)?t:t==null?"":re(t)||Ce(t)&&(t.toString===Hp||!ue(t.toString))?Qp(t)?HE(t.value):JSON.stringify(t,Xp,2):String(t),Xp=(t,e)=>Qp(e)?Xp(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Pc(r,i)+" =>"]=s,n),{})}:ka(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pc(n))}:Gt(e)?Pc(e):Ce(e)&&!re(e)&&!zp(e)?String(e):e,Pc=(t,e="")=>{var n;return Gt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dt;class Yp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=dt,!e&&dt&&(this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=dt;try{return dt=this,e()}finally{dt=n}}}on(){++this._on===1&&(this.prevScope=dt,dt=this)}off(){this._on>0&&--this._on===0&&(dt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Jp(t){return new Yp(t)}function Zp(){return dt}function zE(t,e=!1){dt&&dt.cleanups.push(t)}let De;const Cc=new WeakSet;class em{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dt&&dt.active&&dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cc.has(this)&&(Cc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,of(this),rm(this);const e=De,n=Kt;De=this,Kt=!0;try{return this.fn()}finally{sm(this),De=e,Kt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)eu(e);this.deps=this.depsTail=void 0,of(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rl(this)&&this.run()}get dirty(){return rl(this)}}let tm=0,di,pi;function nm(t,e=!1){if(t.flags|=8,e){t.next=pi,pi=t;return}t.next=di,di=t}function Jl(){tm++}function Zl(){if(--tm>0)return;if(pi){let e=pi;for(pi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;di;){let e=di;for(di=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function rm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),eu(r),WE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function rl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(im(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function im(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ci)||(t.globalVersion=Ci,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!rl(t))))return;t.flags|=2;const e=t.dep,n=De,r=Kt;De=t,Kt=!0;try{rm(t);const s=t.fn(t._value);(e.version===0||nr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,Kt=r,sm(t),t.flags&=-3}}function eu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)eu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function WE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Kt=!0;const om=[];function Cn(){om.push(Kt),Kt=!1}function kn(){const t=om.pop();Kt=t===void 0?!0:t}function of(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let Ci=0;class KE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!De||!Kt||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new KE(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,am(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,Ci++,this.notify(e)}notify(e){Jl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zl()}}}function am(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)am(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Yo=new WeakMap,Ur=Symbol(""),sl=Symbol(""),ki=Symbol("");function mt(t,e,n){if(Kt&&De){let r=Yo.get(t);r||Yo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new tu),s.map=r,s.key=n),s.track()}}function Rn(t,e,n,r,s,i){const o=Yo.get(t);if(!o){Ci++;return}const c=l=>{l&&l.trigger()};if(Jl(),e==="clear")o.forEach(c);else{const l=re(t),u=l&&Ql(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===ki||!Gt(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(ki)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Ur)),ds(t)&&c(o.get(sl)));break;case"delete":l||(c(o.get(Ur)),ds(t)&&c(o.get(sl)));break;case"set":ds(t)&&c(o.get(Ur));break}}Zl()}function GE(t,e){const n=Yo.get(t);return n&&n.get(e)}function rs(t){const e=Ie(t);return e===t?e:(mt(e,"iterate",ki),jt(t)?e:e.map(it))}function xa(t){return mt(t=Ie(t),"iterate",ki),t}const QE={__proto__:null,[Symbol.iterator](){return kc(this,Symbol.iterator,it)},concat(...t){return rs(this).concat(...t.map(e=>re(e)?rs(e):e))},entries(){return kc(this,"entries",t=>(t[1]=it(t[1]),t))},every(t,e){return Tn(this,"every",t,e,void 0,arguments)},filter(t,e){return Tn(this,"filter",t,e,n=>n.map(it),arguments)},find(t,e){return Tn(this,"find",t,e,it,arguments)},findIndex(t,e){return Tn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tn(this,"findLast",t,e,it,arguments)},findLastIndex(t,e){return Tn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Nc(this,"includes",t)},indexOf(...t){return Nc(this,"indexOf",t)},join(t){return rs(this).join(t)},lastIndexOf(...t){return Nc(this,"lastIndexOf",t)},map(t,e){return Tn(this,"map",t,e,void 0,arguments)},pop(){return ti(this,"pop")},push(...t){return ti(this,"push",t)},reduce(t,...e){return af(this,"reduce",t,e)},reduceRight(t,...e){return af(this,"reduceRight",t,e)},shift(){return ti(this,"shift")},some(t,e){return Tn(this,"some",t,e,void 0,arguments)},splice(...t){return ti(this,"splice",t)},toReversed(){return rs(this).toReversed()},toSorted(t){return rs(this).toSorted(t)},toSpliced(...t){return rs(this).toSpliced(...t)},unshift(...t){return ti(this,"unshift",t)},values(){return kc(this,"values",it)}};function kc(t,e,n){const r=xa(t),s=r[e]();return r!==t&&!jt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const XE=Array.prototype;function Tn(t,e,n,r,s,i){const o=xa(t),c=o!==t&&!jt(t),l=o[e];if(l!==XE[e]){const p=l.apply(t,i);return c?it(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,it(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function af(t,e,n,r){const s=xa(t);let i=n;return s!==t&&(jt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,it(c),l,t)}),s[e](i,...r)}function Nc(t,e,n){const r=Ie(t);mt(r,"iterate",ki);const s=r[e](...n);return(s===-1||s===!1)&&su(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function ti(t,e,n=[]){Cn(),Jl();const r=Ie(t)[e].apply(t,n);return Zl(),kn(),r}const YE=Wl("__proto__,__v_isRef,__isVue"),cm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gt));function JE(t){Gt(t)||(t=String(t));const e=Ie(this);return mt(e,"has",t),e.hasOwnProperty(t)}class lm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?cT:dm:i?fm:hm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){let l;if(o&&(l=QE[n]))return l;if(n==="hasOwnProperty")return JE}const c=Reflect.get(e,n,He(e)?e:r);if((Gt(n)?cm.has(n):YE(n))||(s||mt(e,"get",n),i))return c;if(He(c)){const l=o&&Ql(n)?c:c.value;return s&&Ce(l)?ol(l):l}return Ce(c)?s?ol(c):Yi(c):c}}class um extends lm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ur(i);if(!jt(r)&&!ur(r)&&(i=Ie(i),r=Ie(r)),!re(e)&&He(i)&&!He(r))return l||(i.value=r),!0}const o=re(e)&&Ql(n)?Number(n)<e.length:Ae(e,n),c=Reflect.set(e,n,r,He(e)?e:s);return e===Ie(s)&&(o?nr(r,i)&&Rn(e,"set",n,r):Rn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Gt(n)||!cm.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",re(e)?"length":Ur),Reflect.ownKeys(e)}}class ZE extends lm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const eT=new um,tT=new ZE,nT=new um(!0);const il=t=>t,Io=t=>Reflect.getPrototypeOf(t);function rT(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=ds(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?il:e?Jo:it;return!e&&mt(i,"iterate",l?sl:Ur),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function wo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function sT(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);t||(nr(s,c)&&mt(o,"get",s),mt(o,"get",c));const{has:l}=Io(o),u=e?il:t?Jo:it;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&mt(Ie(s),"iterate",Ur),s.size},has(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);return t||(nr(s,c)&&mt(o,"has",s),mt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ie(c),u=e?il:t?Jo:it;return!t&&mt(l,"iterate",Ur),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return tt(n,t?{add:wo("add"),set:wo("set"),delete:wo("delete"),clear:wo("clear")}:{add(s){!e&&!jt(s)&&!ur(s)&&(s=Ie(s));const i=Ie(this);return Io(i).has.call(i,s)||(i.add(s),Rn(i,"add",s,s)),this},set(s,i){!e&&!jt(i)&&!ur(i)&&(i=Ie(i));const o=Ie(this),{has:c,get:l}=Io(o);let u=c.call(o,s);u||(s=Ie(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?nr(i,f)&&Rn(o,"set",s,i):Rn(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:c}=Io(i);let l=o.call(i,s);l||(s=Ie(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Rn(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&Rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=rT(s,t,e)}),n}function nu(t,e){const n=sT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ae(n,s)&&s in r?n:r,s,i)}const iT={get:nu(!1,!1)},oT={get:nu(!1,!0)},aT={get:nu(!0,!1)};const hm=new WeakMap,fm=new WeakMap,dm=new WeakMap,cT=new WeakMap;function lT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uT(t){return t.__v_skip||!Object.isExtensible(t)?0:lT(OE(t))}function Yi(t){return ur(t)?t:ru(t,!1,eT,iT,hm)}function pm(t){return ru(t,!1,nT,oT,fm)}function ol(t){return ru(t,!0,tT,aT,dm)}function ru(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=uT(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function rr(t){return ur(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function ur(t){return!!(t&&t.__v_isReadonly)}function jt(t){return!!(t&&t.__v_isShallow)}function su(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function iu(t){return!Ae(t,"__v_skip")&&Object.isExtensible(t)&&Wp(t,"__v_skip",!0),t}const it=t=>Ce(t)?Yi(t):t,Jo=t=>Ce(t)?ol(t):t;function He(t){return t?t.__v_isRef===!0:!1}function Ni(t){return mm(t,!1)}function hT(t){return mm(t,!0)}function mm(t,e){return He(t)?t:new fT(t,e)}class fT{constructor(e,n){this.dep=new tu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:it(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||jt(e)||ur(e);e=r?e:Ie(e),nr(e,n)&&(this._rawValue=e,this._value=r?e:it(e),this.dep.trigger())}}function ps(t){return He(t)?t.value:t}const dT={get:(t,e,n)=>e==="__v_raw"?t:ps(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return He(s)&&!He(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function gm(t){return rr(t)?t:new Proxy(t,dT)}function pT(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=gT(t,n);return e}class mT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return GE(Ie(this._object),this._key)}}function gT(t,e,n){const r=t[e];return He(r)?r:new mT(t,e,n)}class _T{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ci-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return nm(this,!0),!0}get value(){const e=this.dep.track();return im(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function yT(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new _T(r,s,n)}const Ao={},Zo=new WeakMap;let Or;function ET(t,e=!1,n=Or){if(n){let r=Zo.get(n);r||Zo.set(n,r=[]),r.push(t)}}function TT(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=H=>s?H:jt(H)||s===!1||s===0?bn(H,1):bn(H);let f,p,m,E,P=!1,N=!1;if(He(t)?(p=()=>t.value,P=jt(t)):rr(t)?(p=()=>u(t),P=!0):re(t)?(N=!0,P=t.some(H=>rr(H)||jt(H)),p=()=>t.map(H=>{if(He(H))return H.value;if(rr(H))return u(H);if(ue(H))return l?l(H,2):H()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Cn();try{m()}finally{kn()}}const H=Or;Or=f;try{return l?l(t,3,[E]):t(E)}finally{Or=H}}:p=cn,e&&s){const H=p,Z=s===!0?1/0:s;p=()=>bn(H(),Z)}const D=Zp(),B=()=>{f.stop(),D&&D.active&&Gl(D.effects,f)};if(i&&e){const H=e;e=(...Z)=>{H(...Z),B()}}let F=N?new Array(t.length).fill(Ao):Ao;const j=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const Z=f.run();if(s||P||(N?Z.some((ie,b)=>nr(ie,F[b])):nr(Z,F))){m&&m();const ie=Or;Or=f;try{const b=[Z,F===Ao?void 0:N&&F[0]===Ao?[]:F,E];F=Z,l?l(e,3,b):e(...b)}finally{Or=ie}}}else f.run()};return c&&c(j),f=new em(p),f.scheduler=o?()=>o(j,!1):j,E=H=>ET(H,!1,f),m=f.onStop=()=>{const H=Zo.get(f);if(H){if(l)l(H,4);else for(const Z of H)Z();Zo.delete(f)}},e?r?j(!0):F=f.run():o?o(j.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function bn(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,He(t))bn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)bn(t[r],e,n);else if(ka(t)||ds(t))t.forEach(r=>{bn(r,e,n)});else if(zp(t)){for(const r in t)bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ji(t,e,n,r){try{return r?t(...r):t()}catch(s){La(s,e,n)}}function Qt(t,e,n,r){if(ue(t)){const s=Ji(t,e,n,r);return s&&qp(s)&&s.catch(i=>{La(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Qt(t[i],e,n,r));return s}}function La(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Cn(),Ji(i,null,10,[t,l,u]),kn();return}}vT(t,n,s,r,o)}function vT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const wt=[];let rn=-1;const ms=[];let Kn=null,is=0;const _m=Promise.resolve();let ea=null;function ou(t){const e=ea||_m;return t?e.then(this?t.bind(this):t):e}function IT(t){let e=rn+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=Di(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function au(t){if(!(t.flags&1)){const e=Di(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=Di(n)?wt.push(t):wt.splice(IT(e),0,t),t.flags|=1,ym()}}function ym(){ea||(ea=_m.then(Tm))}function wT(t){re(t)?ms.push(...t):Kn&&t.id===-1?Kn.splice(is+1,0,t):t.flags&1||(ms.push(t),t.flags|=1),ym()}function cf(t,e,n=rn+1){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Em(t){if(ms.length){const e=[...new Set(ms)].sort((n,r)=>Di(n)-Di(r));if(ms.length=0,Kn){Kn.push(...e);return}for(Kn=e,is=0;is<Kn.length;is++){const n=Kn[is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Kn=null,is=0}}const Di=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Tm(t){try{for(rn=0;rn<wt.length;rn++){const e=wt[rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ji(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rn<wt.length;rn++){const e=wt[rn];e&&(e.flags&=-2)}rn=-1,wt.length=0,Em(),ea=null,(wt.length||ms.length)&&Tm()}}let at=null,vm=null;function ta(t){const e=at;return at=t,vm=t&&t.type.__scopeId||null,e}function AT(t,e=at,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ia(-1);const i=ta(e);let o;try{o=t(...s)}finally{ta(i),r._d&&ia(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ik(t,e){if(at===null)return t;const n=ja(at),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Cr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Cn(),Qt(l,n,8,[t.el,c,t,e]),kn())}}const RT=Symbol("_vte"),Im=t=>t.__isTeleport,An=Symbol("_leaveCb"),Ro=Symbol("_enterCb");function bT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nm(()=>{t.isMounted=!0}),Dm(()=>{t.isUnmounting=!0}),t}const Mt=[Function,Array],wm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},Am=t=>{const e=t.subTree;return e.component?Am(e.component):e},ST={name:"BaseTransition",props:wm,setup(t,{slots:e}){const n=hu(),r=bT();return()=>{const s=e.default&&Sm(e.default(),!0);if(!s||!s.length)return;const i=Rm(s),o=Ie(t),{mode:c}=o;if(r.isLeaving)return Dc(i);const l=lf(i);if(!l)return Dc(i);let u=al(l,o,r,n,p=>u=p);l.type!==_t&&Oi(l,u);let f=n.subTree&&lf(n.subTree);if(f&&f.type!==_t&&!xr(f,l)&&Am(n).type!==_t){let p=al(f,o,r,n);if(Oi(f,p),c==="out-in"&&l.type!==_t)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Dc(i);c==="in-out"&&l.type!==_t?p.delayLeave=(m,E,P)=>{const N=bm(r,f);N[String(f.key)]=f,m[An]=()=>{E(),m[An]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{P(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Rm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==_t){e=n;break}}return e}const PT=ST;function bm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function al(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:E,onAfterLeave:P,onLeaveCancelled:N,onBeforeAppear:D,onAppear:B,onAfterAppear:F,onAppearCancelled:j}=e,H=String(t.key),Z=bm(n,t),ie=(_,A)=>{_&&Qt(_,r,9,A)},b=(_,A)=>{const w=A[1];ie(_,A),re(_)?_.every(I=>I.length<=1)&&w():_.length<=1&&w()},y={mode:o,persisted:c,beforeEnter(_){let A=l;if(!n.isMounted)if(i)A=D||l;else return;_[An]&&_[An](!0);const w=Z[H];w&&xr(t,w)&&w.el[An]&&w.el[An](),ie(A,[_])},enter(_){let A=u,w=f,I=p;if(!n.isMounted)if(i)A=B||u,w=F||f,I=j||p;else return;let T=!1;const ye=_[Ro]=Le=>{T||(T=!0,Le?ie(I,[_]):ie(w,[_]),y.delayedLeave&&y.delayedLeave(),_[Ro]=void 0)};A?b(A,[_,ye]):ye()},leave(_,A){const w=String(t.key);if(_[Ro]&&_[Ro](!0),n.isUnmounting)return A();ie(m,[_]);let I=!1;const T=_[An]=ye=>{I||(I=!0,A(),ye?ie(N,[_]):ie(P,[_]),_[An]=void 0,Z[w]===t&&delete Z[w])};Z[w]=t,E?b(E,[_,T]):T()},clone(_){const A=al(_,e,n,r,s);return s&&s(A),A}};return y}function Dc(t){if(Ma(t))return t=hr(t),t.children=null,t}function lf(t){if(!Ma(t))return Im(t.type)&&t.children?Rm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function Oi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Oi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Sm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ot?(o.patchFlag&128&&s++,r=r.concat(Sm(o.children,e,c))):(e||o.type!==_t)&&r.push(c!=null?hr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Pm(t,e){return ue(t)?tt({name:t.name},e,{setup:t}):t}function Cm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const na=new WeakMap;function mi(t,e,n,r,s=!1){if(re(t)){t.forEach((P,N)=>mi(P,e&&(re(e)?e[N]:e),n,r,s));return}if(gs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&mi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ja(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Ne?c.refs={}:c.refs,p=c.setupState,m=Ie(p),E=p===Ne?$p:P=>Ae(m,P);if(u!=null&&u!==l){if(uf(e),ze(u))f[u]=null,E(u)&&(p[u]=null);else if(He(u)){u.value=null;const P=e;P.k&&(f[P.k]=null)}}if(ue(l))Ji(l,c,12,[o,f]);else{const P=ze(l),N=He(l);if(P||N){const D=()=>{if(t.f){const B=P?E(l)?p[l]:f[l]:l.value;if(s)re(B)&&Gl(B,i);else if(re(B))B.includes(i)||B.push(i);else if(P)f[l]=[i],E(l)&&(p[l]=f[l]);else{const F=[i];l.value=F,t.k&&(f[t.k]=F)}}else P?(f[l]=o,E(l)&&(p[l]=o)):N&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const B=()=>{D(),na.delete(t)};B.id=-1,na.set(t,B),Dt(B,n)}else uf(t),D()}}}function uf(t){const e=na.get(t);e&&(e.flags|=8,na.delete(t))}Oa().requestIdleCallback;Oa().cancelIdleCallback;const gs=t=>!!t.type.__asyncLoader,Ma=t=>t.type.__isKeepAlive;function CT(t,e){km(t,"a",e)}function kT(t,e){km(t,"da",e)}function km(t,e,n=yt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ua(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ma(s.parent.vnode)&&NT(r,e,n,s),s=s.parent}}function NT(t,e,n,r){const s=Ua(e,t,r,!0);Om(()=>{Gl(r[e],s)},n)}function Ua(t,e,n=yt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Cn();const c=Zi(n),l=Qt(e,n,t,o);return c(),kn(),l});return r?s.unshift(i):s.push(i),i}}const xn=t=>(e,n=yt)=>{(!Li||t==="sp")&&Ua(t,(...r)=>e(...r),n)},DT=xn("bm"),Nm=xn("m"),OT=xn("bu"),VT=xn("u"),Dm=xn("bum"),Om=xn("um"),xT=xn("sp"),LT=xn("rtg"),MT=xn("rtc");function UT(t,e=yt){Ua("ec",t,e)}const FT="components";function BT(t,e){return $T(FT,t,!0,e)||t}const jT=Symbol.for("v-ndc");function $T(t,e,n=!0,r=!1){const s=at||yt;if(s){const i=s.type;{const c=Nv(i,!1);if(c&&(c===e||c===qt(e)||c===Da(qt(e))))return i}const o=hf(s[t]||i[t],e)||hf(s.appContext[t],e);return!o&&r?i:o}}function hf(t,e){return t&&(t[e]||t[qt(e)]||t[Da(qt(e))])}function ok(t,e,n,r){let s;const i=n,o=re(t);if(o||ze(t)){const c=o&&rr(t);let l=!1,u=!1;c&&(l=!jt(t),u=ur(t),t=xa(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?Jo(it(t[f])):it(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}function ak(t,e,n={},r,s){if(at.ce||at.parent&&gs(at.parent)&&at.parent.ce){const u=Object.keys(n).length>0;return sa(),oa(Ot,null,[At("slot",n,r)],u?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),sa();const o=i&&Vm(i(n)),c=n.key||o&&o.key,l=oa(Ot,{key:(c&&!Gt(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Vm(t){return t.some(e=>xi(e)?!(e.type===_t||e.type===Ot&&!Vm(e.children)):!0)?t:null}const cl=t=>t?tg(t)?ja(t):cl(t.parent):null,gi=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cl(t.parent),$root:t=>cl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Lm(t),$forceUpdate:t=>t.f||(t.f=()=>{au(t.update)}),$nextTick:t=>t.n||(t.n=ou.bind(t.proxy)),$watch:t=>uv.bind(t)}),Oc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Ae(t,e),qT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Oc(r,e))return o[e]=1,r[e];if(s!==Ne&&Ae(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ae(u,e))return o[e]=3,i[e];if(n!==Ne&&Ae(n,e))return o[e]=4,n[e];ll&&(o[e]=0)}}const f=gi[e];let p,m;if(f)return e==="$attrs"&&mt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&Ae(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ae(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Oc(s,e)?(s[e]=n,!0):r!==Ne&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==Ne&&c[0]!=="$"&&Ae(t,c)||Oc(e,c)||(l=i[0])&&Ae(l,c)||Ae(r,c)||Ae(gi,c)||Ae(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ff(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ll=!0;function HT(t){const e=Lm(t),n=t.proxy,r=t.ctx;ll=!1,e.beforeCreate&&df(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:E,updated:P,activated:N,deactivated:D,beforeDestroy:B,beforeUnmount:F,destroyed:j,unmounted:H,render:Z,renderTracked:ie,renderTriggered:b,errorCaptured:y,serverPrefetch:_,expose:A,inheritAttrs:w,components:I,directives:T,filters:ye}=e;if(u&&zT(u,r,null),o)for(const fe in o){const Ee=o[fe];ue(Ee)&&(r[fe]=Ee.bind(n))}if(s){const fe=s.call(n,n);Ce(fe)&&(t.data=Yi(fe))}if(ll=!0,i)for(const fe in i){const Ee=i[fe],Rt=ue(Ee)?Ee.bind(n,n):ue(Ee.get)?Ee.get.bind(n,n):cn,Zt=!ue(Ee)&&ue(Ee.set)?Ee.set.bind(n):cn,Pt=Ut({get:Rt,set:Zt});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:nt=>Pt.value=nt})}if(c)for(const fe in c)xm(c[fe],r,n,fe);if(l){const fe=ue(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(Ee=>{Lo(Ee,fe[Ee])})}f&&df(f,t,"c");function be(fe,Ee){re(Ee)?Ee.forEach(Rt=>fe(Rt.bind(n))):Ee&&fe(Ee.bind(n))}if(be(DT,p),be(Nm,m),be(OT,E),be(VT,P),be(CT,N),be(kT,D),be(UT,y),be(MT,ie),be(LT,b),be(Dm,F),be(Om,H),be(xT,_),re(A))if(A.length){const fe=t.exposed||(t.exposed={});A.forEach(Ee=>{Object.defineProperty(fe,Ee,{get:()=>n[Ee],set:Rt=>n[Ee]=Rt,enumerable:!0})})}else t.exposed||(t.exposed={});Z&&t.render===cn&&(t.render=Z),w!=null&&(t.inheritAttrs=w),I&&(t.components=I),T&&(t.directives=T),_&&Cm(t)}function zT(t,e,n=cn){re(t)&&(t=ul(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=$t(s.from||r,s.default,!0):i=$t(s.from||r):i=$t(s),He(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function df(t,e,n){Qt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xm(t,e,n,r){let s=r.includes(".")?Qm(n,r):()=>n[r];if(ze(t)){const i=e[t];ue(i)&&_i(s,i)}else if(ue(t))_i(s,t.bind(n));else if(Ce(t))if(re(t))t.forEach(i=>xm(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&_i(s,i,t)}}function Lm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ra(l,u,o,!0)),ra(l,e,o)),Ce(e)&&i.set(e,l),l}function ra(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ra(t,i,n,!0),s&&s.forEach(o=>ra(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=WT[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const WT={data:pf,props:mf,emits:mf,methods:oi,computed:oi,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:oi,directives:oi,watch:GT,provide:pf,inject:KT};function pf(t,e){return e?t?function(){return tt(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function KT(t,e){return oi(ul(t),ul(e))}function ul(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function oi(t,e){return t?tt(Object.create(null),t,e):e}function mf(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:tt(Object.create(null),ff(t),ff(e??{})):e}function GT(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const r in e)n[r]=It(t[r],e[r]);return n}function Mm(){return{app:null,config:{isNativeTag:$p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let QT=0;function XT(t,e){return function(r,s=null){ue(r)||(r=tt({},r)),s!=null&&!Ce(s)&&(s=null);const i=Mm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:QT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ov,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ue(f.install)?(o.add(f),f.install(u,...p)):ue(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const E=u._ceVNode||At(r,s);return E.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(E,f,m),l=!0,u._container=f,f.__vue_app__=u,ja(E.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Qt(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Fr;Fr=u;try{return f()}finally{Fr=p}}};return u}}let Fr=null;function Lo(t,e){if(yt){let n=yt.provides;const r=yt.parent&&yt.parent.provides;r===n&&(n=yt.provides=Object.create(r)),n[t]=e}}function $t(t,e,n=!1){const r=hu();if(r||Fr){let s=Fr?Fr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}function YT(){return!!(hu()||Fr)}const Um={},Fm=()=>Object.create(Um),Bm=t=>Object.getPrototypeOf(t)===Um;function JT(t,e,n,r=!1){const s={},i=Fm();t.propsDefaults=Object.create(null),jm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:pm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ZT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Fa(t.emitsOptions,m))continue;const E=e[m];if(l)if(Ae(i,m))E!==i[m]&&(i[m]=E,u=!0);else{const P=qt(m);s[P]=hl(l,c,P,E,t,!1)}else E!==i[m]&&(i[m]=E,u=!0)}}}else{jm(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Ae(e,p)&&((f=Er(p))===p||!Ae(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=hl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ae(e,p))&&(delete i[p],u=!0)}u&&Rn(t.attrs,"set","")}function jm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(fi(l))continue;const u=e[l];let f;s&&Ae(s,f=qt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Fa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ie(n),u=c||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=hl(s,l,p,u[p],t,!Ae(u,p))}}return o}function hl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ae(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Zi(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Er(n))&&(r=!0))}return r}const ev=new WeakMap;function $m(t,e,n=!1){const r=n?ev:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const f=p=>{l=!0;const[m,E]=$m(p,e,!0);tt(o,m),E&&c.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ce(t)&&r.set(t,fs),fs;if(re(i))for(let f=0;f<i.length;f++){const p=qt(i[f]);gf(p)&&(o[p]=Ne)}else if(i)for(const f in i){const p=qt(f);if(gf(p)){const m=i[f],E=o[p]=re(m)||ue(m)?{type:m}:tt({},m),P=E.type;let N=!1,D=!0;if(re(P))for(let B=0;B<P.length;++B){const F=P[B],j=ue(F)&&F.name;if(j==="Boolean"){N=!0;break}else j==="String"&&(D=!1)}else N=ue(P)&&P.name==="Boolean";E[0]=N,E[1]=D,(N||Ae(E,"default"))&&c.push(p)}}const u=[o,c];return Ce(t)&&r.set(t,u),u}function gf(t){return t[0]!=="$"&&!fi(t)}const cu=t=>t==="_"||t==="_ctx"||t==="$stable",lu=t=>re(t)?t.map(on):[on(t)],tv=(t,e,n)=>{if(e._n)return e;const r=AT((...s)=>lu(e(...s)),n);return r._c=!1,r},qm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(cu(s))continue;const i=t[s];if(ue(i))e[s]=tv(s,i,r);else if(i!=null){const o=lu(i);e[s]=()=>o}}},Hm=(t,e)=>{const n=lu(e);t.slots.default=()=>n},zm=(t,e,n)=>{for(const r in e)(n||!cu(r))&&(t[r]=e[r])},nv=(t,e,n)=>{const r=t.slots=Fm();if(t.vnode.shapeFlag&32){const s=e._;s?(zm(r,e,n),n&&Wp(r,"_",s,!0)):qm(e,r)}else e&&Hm(t,e)},rv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:zm(s,e,n):(i=!e.$stable,qm(e,s)),o=e}else e&&(Hm(t,e),o={default:1});if(i)for(const c in s)!cu(c)&&o[c]==null&&delete s[c]},Dt=yv;function sv(t){return iv(t)}function iv(t,e){const n=Oa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:E=cn,insertStaticContent:P}=t,N=(v,R,S,L=null,U=null,O=null,K=void 0,z=null,$=!!R.dynamicChildren)=>{if(v===R)return;v&&!xr(v,R)&&(L=V(v),nt(v,U,O,!0),v=null),R.patchFlag===-2&&($=!1,R.dynamicChildren=null);const{type:q,ref:se,shapeFlag:Q}=R;switch(q){case Ba:D(v,R,S,L);break;case _t:B(v,R,S,L);break;case Mo:v==null&&F(R,S,L,K);break;case Ot:I(v,R,S,L,U,O,K,z,$);break;default:Q&1?Z(v,R,S,L,U,O,K,z,$):Q&6?T(v,R,S,L,U,O,K,z,$):(Q&64||Q&128)&&q.process(v,R,S,L,U,O,K,z,$,ee)}se!=null&&U?mi(se,v&&v.ref,O,R||v,!R):se==null&&v&&v.ref!=null&&mi(v.ref,null,O,v,!0)},D=(v,R,S,L)=>{if(v==null)r(R.el=c(R.children),S,L);else{const U=R.el=v.el;R.children!==v.children&&u(U,R.children)}},B=(v,R,S,L)=>{v==null?r(R.el=l(R.children||""),S,L):R.el=v.el},F=(v,R,S,L)=>{[v.el,v.anchor]=P(v.children,R,S,L,v.el,v.anchor)},j=({el:v,anchor:R},S,L)=>{let U;for(;v&&v!==R;)U=m(v),r(v,S,L),v=U;r(R,S,L)},H=({el:v,anchor:R})=>{let S;for(;v&&v!==R;)S=m(v),s(v),v=S;s(R)},Z=(v,R,S,L,U,O,K,z,$)=>{R.type==="svg"?K="svg":R.type==="math"&&(K="mathml"),v==null?ie(R,S,L,U,O,K,z,$):_(v,R,U,O,K,z,$)},ie=(v,R,S,L,U,O,K,z)=>{let $,q;const{props:se,shapeFlag:Q,transition:ne,dirs:oe}=v;if($=v.el=o(v.type,O,se&&se.is,se),Q&8?f($,v.children):Q&16&&y(v.children,$,null,L,U,Vc(v,O),K,z),oe&&Cr(v,null,L,"created"),b($,v,v.scopeId,K,L),se){for(const Pe in se)Pe!=="value"&&!fi(Pe)&&i($,Pe,null,se[Pe],O,L);"value"in se&&i($,"value",null,se.value,O),(q=se.onVnodeBeforeMount)&&nn(q,L,v)}oe&&Cr(v,null,L,"beforeMount");const pe=ov(U,ne);pe&&ne.beforeEnter($),r($,R,S),((q=se&&se.onVnodeMounted)||pe||oe)&&Dt(()=>{q&&nn(q,L,v),pe&&ne.enter($),oe&&Cr(v,null,L,"mounted")},U)},b=(v,R,S,L,U)=>{if(S&&E(v,S),L)for(let O=0;O<L.length;O++)E(v,L[O]);if(U){let O=U.subTree;if(R===O||Ym(O.type)&&(O.ssContent===R||O.ssFallback===R)){const K=U.vnode;b(v,K,K.scopeId,K.slotScopeIds,U.parent)}}},y=(v,R,S,L,U,O,K,z,$=0)=>{for(let q=$;q<v.length;q++){const se=v[q]=z?Gn(v[q]):on(v[q]);N(null,se,R,S,L,U,O,K,z)}},_=(v,R,S,L,U,O,K)=>{const z=R.el=v.el;let{patchFlag:$,dynamicChildren:q,dirs:se}=R;$|=v.patchFlag&16;const Q=v.props||Ne,ne=R.props||Ne;let oe;if(S&&kr(S,!1),(oe=ne.onVnodeBeforeUpdate)&&nn(oe,S,R,v),se&&Cr(R,v,S,"beforeUpdate"),S&&kr(S,!0),(Q.innerHTML&&ne.innerHTML==null||Q.textContent&&ne.textContent==null)&&f(z,""),q?A(v.dynamicChildren,q,z,S,L,Vc(R,U),O):K||Ee(v,R,z,null,S,L,Vc(R,U),O,!1),$>0){if($&16)w(z,Q,ne,S,U);else if($&2&&Q.class!==ne.class&&i(z,"class",null,ne.class,U),$&4&&i(z,"style",Q.style,ne.style,U),$&8){const pe=R.dynamicProps;for(let Pe=0;Pe<pe.length;Pe++){const ve=pe[Pe],ut=Q[ve],ht=ne[ve];(ht!==ut||ve==="value")&&i(z,ve,ut,ht,U,S)}}$&1&&v.children!==R.children&&f(z,R.children)}else!K&&q==null&&w(z,Q,ne,S,U);((oe=ne.onVnodeUpdated)||se)&&Dt(()=>{oe&&nn(oe,S,R,v),se&&Cr(R,v,S,"updated")},L)},A=(v,R,S,L,U,O,K)=>{for(let z=0;z<R.length;z++){const $=v[z],q=R[z],se=$.el&&($.type===Ot||!xr($,q)||$.shapeFlag&198)?p($.el):S;N($,q,se,null,L,U,O,K,!0)}},w=(v,R,S,L,U)=>{if(R!==S){if(R!==Ne)for(const O in R)!fi(O)&&!(O in S)&&i(v,O,R[O],null,U,L);for(const O in S){if(fi(O))continue;const K=S[O],z=R[O];K!==z&&O!=="value"&&i(v,O,z,K,U,L)}"value"in S&&i(v,"value",R.value,S.value,U)}},I=(v,R,S,L,U,O,K,z,$)=>{const q=R.el=v?v.el:c(""),se=R.anchor=v?v.anchor:c("");let{patchFlag:Q,dynamicChildren:ne,slotScopeIds:oe}=R;oe&&(z=z?z.concat(oe):oe),v==null?(r(q,S,L),r(se,S,L),y(R.children||[],S,se,U,O,K,z,$)):Q>0&&Q&64&&ne&&v.dynamicChildren?(A(v.dynamicChildren,ne,S,U,O,K,z),(R.key!=null||U&&R===U.subTree)&&Wm(v,R,!0)):Ee(v,R,S,se,U,O,K,z,$)},T=(v,R,S,L,U,O,K,z,$)=>{R.slotScopeIds=z,v==null?R.shapeFlag&512?U.ctx.activate(R,S,L,K,$):ye(R,S,L,U,O,K,$):Le(v,R,$)},ye=(v,R,S,L,U,O,K)=>{const z=v.component=bv(v,L,U);if(Ma(v)&&(z.ctx.renderer=ee),Sv(z,!1,K),z.asyncDep){if(U&&U.registerDep(z,be,K),!v.el){const $=z.subTree=At(_t);B(null,$,R,S),v.placeholder=$.el}}else be(z,v,R,S,U,O,K)},Le=(v,R,S)=>{const L=R.component=v.component;if(gv(v,R,S))if(L.asyncDep&&!L.asyncResolved){fe(L,R,S);return}else L.next=R,L.update();else R.el=v.el,L.vnode=R},be=(v,R,S,L,U,O,K)=>{const z=()=>{if(v.isMounted){let{next:Q,bu:ne,u:oe,parent:pe,vnode:Pe}=v;{const kt=Km(v);if(kt){Q&&(Q.el=Pe.el,fe(v,Q,K)),kt.asyncDep.then(()=>{v.isUnmounted||z()});return}}let ve=Q,ut;kr(v,!1),Q?(Q.el=Pe.el,fe(v,Q,K)):Q=Pe,ne&&xo(ne),(ut=Q.props&&Q.props.onVnodeBeforeUpdate)&&nn(ut,pe,Q,Pe),kr(v,!0);const ht=yf(v),Ct=v.subTree;v.subTree=ht,N(Ct,ht,p(Ct.el),V(Ct),v,U,O),Q.el=ht.el,ve===null&&_v(v,ht.el),oe&&Dt(oe,U),(ut=Q.props&&Q.props.onVnodeUpdated)&&Dt(()=>nn(ut,pe,Q,Pe),U)}else{let Q;const{el:ne,props:oe}=R,{bm:pe,m:Pe,parent:ve,root:ut,type:ht}=v,Ct=gs(R);kr(v,!1),pe&&xo(pe),!Ct&&(Q=oe&&oe.onVnodeBeforeMount)&&nn(Q,ve,R),kr(v,!0);{ut.ce&&ut.ce._def.shadowRoot!==!1&&ut.ce._injectChildStyle(ht);const kt=v.subTree=yf(v);N(null,kt,S,L,v,U,O),R.el=kt.el}if(Pe&&Dt(Pe,U),!Ct&&(Q=oe&&oe.onVnodeMounted)){const kt=R;Dt(()=>nn(Q,ve,kt),U)}(R.shapeFlag&256||ve&&gs(ve.vnode)&&ve.vnode.shapeFlag&256)&&v.a&&Dt(v.a,U),v.isMounted=!0,R=S=L=null}};v.scope.on();const $=v.effect=new em(z);v.scope.off();const q=v.update=$.run.bind($),se=v.job=$.runIfDirty.bind($);se.i=v,se.id=v.uid,$.scheduler=()=>au(se),kr(v,!0),q()},fe=(v,R,S)=>{R.component=v;const L=v.vnode.props;v.vnode=R,v.next=null,ZT(v,R.props,L,S),rv(v,R.children,S),Cn(),cf(v),kn()},Ee=(v,R,S,L,U,O,K,z,$=!1)=>{const q=v&&v.children,se=v?v.shapeFlag:0,Q=R.children,{patchFlag:ne,shapeFlag:oe}=R;if(ne>0){if(ne&128){Zt(q,Q,S,L,U,O,K,z,$);return}else if(ne&256){Rt(q,Q,S,L,U,O,K,z,$);return}}oe&8?(se&16&&lt(q,U,O),Q!==q&&f(S,Q)):se&16?oe&16?Zt(q,Q,S,L,U,O,K,z,$):lt(q,U,O,!0):(se&8&&f(S,""),oe&16&&y(Q,S,L,U,O,K,z,$))},Rt=(v,R,S,L,U,O,K,z,$)=>{v=v||fs,R=R||fs;const q=v.length,se=R.length,Q=Math.min(q,se);let ne;for(ne=0;ne<Q;ne++){const oe=R[ne]=$?Gn(R[ne]):on(R[ne]);N(v[ne],oe,S,null,U,O,K,z,$)}q>se?lt(v,U,O,!0,!1,Q):y(R,S,L,U,O,K,z,$,Q)},Zt=(v,R,S,L,U,O,K,z,$)=>{let q=0;const se=R.length;let Q=v.length-1,ne=se-1;for(;q<=Q&&q<=ne;){const oe=v[q],pe=R[q]=$?Gn(R[q]):on(R[q]);if(xr(oe,pe))N(oe,pe,S,null,U,O,K,z,$);else break;q++}for(;q<=Q&&q<=ne;){const oe=v[Q],pe=R[ne]=$?Gn(R[ne]):on(R[ne]);if(xr(oe,pe))N(oe,pe,S,null,U,O,K,z,$);else break;Q--,ne--}if(q>Q){if(q<=ne){const oe=ne+1,pe=oe<se?R[oe].el:L;for(;q<=ne;)N(null,R[q]=$?Gn(R[q]):on(R[q]),S,pe,U,O,K,z,$),q++}}else if(q>ne)for(;q<=Q;)nt(v[q],U,O,!0),q++;else{const oe=q,pe=q,Pe=new Map;for(q=pe;q<=ne;q++){const rt=R[q]=$?Gn(R[q]):on(R[q]);rt.key!=null&&Pe.set(rt.key,q)}let ve,ut=0;const ht=ne-pe+1;let Ct=!1,kt=0;const zt=new Array(ht);for(q=0;q<ht;q++)zt[q]=0;for(q=oe;q<=Q;q++){const rt=v[q];if(ut>=ht){nt(rt,U,O,!0);continue}let Je;if(rt.key!=null)Je=Pe.get(rt.key);else for(ve=pe;ve<=ne;ve++)if(zt[ve-pe]===0&&xr(rt,R[ve])){Je=ve;break}Je===void 0?nt(rt,U,O,!0):(zt[Je-pe]=q+1,Je>=kt?kt=Je:Ct=!0,N(rt,R[Je],S,null,U,O,K,z,$),ut++)}const Zr=Ct?av(zt):fs;for(ve=Zr.length-1,q=ht-1;q>=0;q--){const rt=pe+q,Je=R[rt],Bs=R[rt+1],Ar=rt+1<se?Bs.el||Bs.placeholder:L;zt[q]===0?N(null,Je,S,Ar,U,O,K,z,$):Ct&&(ve<0||q!==Zr[ve]?Pt(Je,S,Ar,2):ve--)}}},Pt=(v,R,S,L,U=null)=>{const{el:O,type:K,transition:z,children:$,shapeFlag:q}=v;if(q&6){Pt(v.component.subTree,R,S,L);return}if(q&128){v.suspense.move(R,S,L);return}if(q&64){K.move(v,R,S,ee);return}if(K===Ot){r(O,R,S);for(let Q=0;Q<$.length;Q++)Pt($[Q],R,S,L);r(v.anchor,R,S);return}if(K===Mo){j(v,R,S);return}if(L!==2&&q&1&&z)if(L===0)z.beforeEnter(O),r(O,R,S),Dt(()=>z.enter(O),U);else{const{leave:Q,delayLeave:ne,afterLeave:oe}=z,pe=()=>{v.ctx.isUnmounted?s(O):r(O,R,S)},Pe=()=>{O._isLeaving&&O[An](!0),Q(O,()=>{pe(),oe&&oe()})};ne?ne(O,pe,Pe):Pe()}else r(O,R,S)},nt=(v,R,S,L=!1,U=!1)=>{const{type:O,props:K,ref:z,children:$,dynamicChildren:q,shapeFlag:se,patchFlag:Q,dirs:ne,cacheIndex:oe}=v;if(Q===-2&&(U=!1),z!=null&&(Cn(),mi(z,null,S,v,!0),kn()),oe!=null&&(R.renderCache[oe]=void 0),se&256){R.ctx.deactivate(v);return}const pe=se&1&&ne,Pe=!gs(v);let ve;if(Pe&&(ve=K&&K.onVnodeBeforeUnmount)&&nn(ve,R,v),se&6)Ln(v.component,S,L);else{if(se&128){v.suspense.unmount(S,L);return}pe&&Cr(v,null,R,"beforeUnmount"),se&64?v.type.remove(v,R,S,ee,L):q&&!q.hasOnce&&(O!==Ot||Q>0&&Q&64)?lt(q,R,S,!1,!0):(O===Ot&&Q&384||!U&&se&16)&&lt($,R,S),L&&En(v)}(Pe&&(ve=K&&K.onVnodeUnmounted)||pe)&&Dt(()=>{ve&&nn(ve,R,v),pe&&Cr(v,null,R,"unmounted")},S)},En=v=>{const{type:R,el:S,anchor:L,transition:U}=v;if(R===Ot){Ht(S,L);return}if(R===Mo){H(v);return}const O=()=>{s(S),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(v.shapeFlag&1&&U&&!U.persisted){const{leave:K,delayLeave:z}=U,$=()=>K(S,O);z?z(v.el,O,$):$()}else O()},Ht=(v,R)=>{let S;for(;v!==R;)S=m(v),s(v),v=S;s(R)},Ln=(v,R,S)=>{const{bum:L,scope:U,job:O,subTree:K,um:z,m:$,a:q}=v;_f($),_f(q),L&&xo(L),U.stop(),O&&(O.flags|=8,nt(K,v,R,S)),z&&Dt(z,R),Dt(()=>{v.isUnmounted=!0},R)},lt=(v,R,S,L=!1,U=!1,O=0)=>{for(let K=O;K<v.length;K++)nt(v[K],R,S,L,U)},V=v=>{if(v.shapeFlag&6)return V(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const R=m(v.anchor||v.el),S=R&&R[RT];return S?m(S):R};let Y=!1;const G=(v,R,S)=>{v==null?R._vnode&&nt(R._vnode,null,null,!0):N(R._vnode||null,v,R,null,null,null,S),R._vnode=v,Y||(Y=!0,cf(),Em(),Y=!1)},ee={p:N,um:nt,m:Pt,r:En,mt:ye,mc:y,pc:Ee,pbc:A,n:V,o:t};return{render:G,hydrate:void 0,createApp:XT(G)}}function Vc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function kr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ov(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Wm(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Gn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Wm(o,c)),c.type===Ba&&c.patchFlag!==-1&&(c.el=o.el),c.type===_t&&!c.el&&(c.el=o.el)}}function av(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Km(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Km(e)}function _f(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const cv=Symbol.for("v-scx"),lv=()=>$t(cv);function _i(t,e,n){return Gm(t,e,n)}function Gm(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=tt({},n),l=e&&r||!e&&i!=="post";let u;if(Li){if(i==="sync"){const E=lv();u=E.__watcherHandles||(E.__watcherHandles=[])}else if(!l){const E=()=>{};return E.stop=cn,E.resume=cn,E.pause=cn,E}}const f=yt;c.call=(E,P,N)=>Qt(E,f,P,N);let p=!1;i==="post"?c.scheduler=E=>{Dt(E,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(E,P)=>{P?E():au(E)}),c.augmentJob=E=>{e&&(E.flags|=4),p&&(E.flags|=2,f&&(E.id=f.uid,E.i=f))};const m=TT(t,e,c);return Li&&(u?u.push(m):l&&m()),m}function uv(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?Qm(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=Zi(this),c=Gm(s,i.bind(r),n);return o(),c}function Qm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const hv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qt(e)}Modifiers`]||t[`${Er(e)}Modifiers`];function fv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&hv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>ze(f)?f.trim():f)),o.number&&(s=n.map(nl)));let c,l=r[c=Sc(e)]||r[c=Sc(qt(e))];!l&&i&&(l=r[c=Sc(Er(e))]),l&&Qt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Qt(u,t,6,s)}}const dv=new WeakMap;function Xm(t,e,n=!1){const r=n?dv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=u=>{const f=Xm(u,e,!0);f&&(c=!0,tt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ce(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>o[l]=null):tt(o,i),Ce(t)&&r.set(t,o),o)}function Fa(t,e){return!t||!Ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Er(e))||Ae(t,e))}function yf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:E,ctx:P,inheritAttrs:N}=t,D=ta(t);let B,F;try{if(n.shapeFlag&4){const H=s||r,Z=H;B=on(u.call(Z,H,f,p,E,m,P)),F=c}else{const H=e;B=on(H.length>1?H(p,{attrs:c,slots:o,emit:l}):H(p,null)),F=e.props?c:pv(c)}}catch(H){yi.length=0,La(H,t,1),B=At(_t)}let j=B;if(F&&N!==!1){const H=Object.keys(F),{shapeFlag:Z}=j;H.length&&Z&7&&(i&&H.some(Kl)&&(F=mv(F,i)),j=hr(j,F,!1,!0))}return n.dirs&&(j=hr(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Oi(j,n.transition),B=j,ta(D),B}const pv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ca(n))&&((e||(e={}))[n]=t[n]);return e},mv=(t,e)=>{const n={};for(const r in t)(!Kl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ef(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Fa(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Ef(r,o,u):!0:!!o;return!1}function Ef(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Fa(n,i))return!0}return!1}function _v({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ym=t=>t.__isSuspense;function yv(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):wT(t)}const Ot=Symbol.for("v-fgt"),Ba=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),Mo=Symbol.for("v-stc"),yi=[];let Vt=null;function sa(t=!1){yi.push(Vt=t?null:[])}function Ev(){yi.pop(),Vt=yi[yi.length-1]||null}let Vi=1;function ia(t,e=!1){Vi+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function Jm(t){return t.dynamicChildren=Vi>0?Vt||fs:null,Ev(),Vi>0&&Vt&&Vt.push(t),t}function ck(t,e,n,r,s,i){return Jm(eg(t,e,n,r,s,i,!0))}function oa(t,e,n,r,s){return Jm(At(t,e,n,r,s,!0))}function xi(t){return t?t.__v_isVNode===!0:!1}function xr(t,e){return t.type===e.type&&t.key===e.key}const Zm=({key:t})=>t??null,Uo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||He(t)||ue(t)?{i:at,r:t,k:e,f:!!n}:t:null);function eg(t,e=null,n=null,r=0,s=null,i=t===Ot?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zm(e),ref:e&&Uo(e),scopeId:vm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:at};return c?(uu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),Vi>0&&!o&&Vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Vt.push(l),l}const At=Tv;function Tv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===jT)&&(t=_t),xi(t)){const c=hr(t,e,!0);return n&&uu(c,n),Vi>0&&!i&&Vt&&(c.shapeFlag&6?Vt[Vt.indexOf(t)]=c:Vt.push(c)),c.patchFlag=-2,c}if(Dv(t)&&(t=t.__vccOpts),e){e=vv(e);let{class:c,style:l}=e;c&&!ze(c)&&(e.class=Yl(c)),Ce(l)&&(su(l)&&!re(l)&&(l=tt({},l)),e.style=Xl(l))}const o=ze(t)?1:Ym(t)?128:Im(t)?64:Ce(t)?4:ue(t)?2:0;return eg(t,e,n,r,s,o,i,!0)}function vv(t){return t?su(t)||Bm(t)?tt({},t):t:null}function hr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?wv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Zm(u),ref:e&&e.ref?n&&i?re(i)?i.concat(Uo(e)):[i,Uo(e)]:Uo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hr(t.ssContent),ssFallback:t.ssFallback&&hr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Oi(f,l.clone(f)),f}function Iv(t=" ",e=0){return At(Ba,null,t,e)}function lk(t,e){const n=At(Mo,null,t);return n.staticCount=e,n}function uk(t="",e=!1){return e?(sa(),oa(_t,null,t)):At(_t,null,t)}function on(t){return t==null||typeof t=="boolean"?At(_t):re(t)?At(Ot,null,t.slice()):xi(t)?Gn(t):At(Ba,null,String(t))}function Gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hr(t)}function uu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),uu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Bm(e)?e._ctx=at:s===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:at},n=32):(e=String(e),r&64?(n=16,e=[Iv(e)]):n=8);t.children=e,t.shapeFlag|=n}function wv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Yl([e.class,r.class]));else if(s==="style")e.style=Xl([e.style,r.style]);else if(Ca(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function nn(t,e,n,r=null){Qt(t,e,7,[n,r])}const Av=Mm();let Rv=0;function bv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Av,i={uid:Rv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$m(r,s),emitsOptions:Xm(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fv.bind(null,i),t.ce&&t.ce(i),i}let yt=null;const hu=()=>yt||at;let aa,fl;{const t=Oa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};aa=e("__VUE_INSTANCE_SETTERS__",n=>yt=n),fl=e("__VUE_SSR_SETTERS__",n=>Li=n)}const Zi=t=>{const e=yt;return aa(t),t.scope.on(),()=>{t.scope.off(),aa(e)}},Tf=()=>{yt&&yt.scope.off(),aa(null)};function tg(t){return t.vnode.shapeFlag&4}let Li=!1;function Sv(t,e=!1,n=!1){e&&fl(e);const{props:r,children:s}=t.vnode,i=tg(t);JT(t,r,i,e),nv(t,s,n||e);const o=i?Pv(t,e):void 0;return e&&fl(!1),o}function Pv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qT);const{setup:r}=n;if(r){Cn();const s=t.setupContext=r.length>1?kv(t):null,i=Zi(t),o=Ji(r,t,0,[t.props,s]),c=qp(o);if(kn(),i(),(c||t.sp)&&!gs(t)&&Cm(t),c){if(o.then(Tf,Tf),e)return o.then(l=>{vf(t,l)}).catch(l=>{La(l,t,0)});t.asyncDep=o}else vf(t,o)}else ng(t)}function vf(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=gm(e)),ng(t)}function ng(t,e,n){const r=t.type;t.render||(t.render=r.render||cn);{const s=Zi(t);Cn();try{HT(t)}finally{kn(),s()}}}const Cv={get(t,e){return mt(t,"get",""),t[e]}};function kv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Cv),slots:t.slots,emit:t.emit,expose:e}}function ja(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(gm(iu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gi)return gi[n](t)},has(e,n){return n in e||n in gi}})):t.proxy}function Nv(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function Dv(t){return ue(t)&&"__vccOpts"in t}const Ut=(t,e)=>yT(t,e,Li);function fu(t,e,n){try{ia(-1);const r=arguments.length;return r===2?Ce(e)&&!re(e)?xi(e)?At(t,null,[e]):At(t,e):At(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xi(n)&&(n=[n]),At(t,e,n))}finally{ia(1)}}const Ov="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dl;const If=typeof window<"u"&&window.trustedTypes;if(If)try{dl=If.createPolicy("vue",{createHTML:t=>t})}catch{}const rg=dl?t=>dl.createHTML(t):t=>t,Vv="http://www.w3.org/2000/svg",xv="http://www.w3.org/1998/Math/MathML",wn=typeof document<"u"?document:null,wf=wn&&wn.createElement("template"),Lv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?wn.createElementNS(Vv,t):e==="mathml"?wn.createElementNS(xv,t):n?wn.createElement(t,{is:n}):wn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>wn.createTextNode(t),createComment:t=>wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{wf.innerHTML=rg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=wf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qn="transition",ni="animation",Mi=Symbol("_vtc"),sg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Mv=tt({},wm,sg),Uv=t=>(t.displayName="Transition",t.props=Mv,t),hk=Uv((t,{slots:e})=>fu(PT,Fv(t),e)),Nr=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},Af=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function Fv(t){const e={};for(const I in t)I in sg||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,P=Bv(s),N=P&&P[0],D=P&&P[1],{onBeforeEnter:B,onEnter:F,onEnterCancelled:j,onLeave:H,onLeaveCancelled:Z,onBeforeAppear:ie=B,onAppear:b=F,onAppearCancelled:y=j}=e,_=(I,T,ye,Le)=>{I._enterCancelled=Le,Dr(I,T?f:c),Dr(I,T?u:o),ye&&ye()},A=(I,T)=>{I._isLeaving=!1,Dr(I,p),Dr(I,E),Dr(I,m),T&&T()},w=I=>(T,ye)=>{const Le=I?b:F,be=()=>_(T,I,ye);Nr(Le,[T,be]),Rf(()=>{Dr(T,I?l:i),vn(T,I?f:c),Af(Le)||bf(T,r,N,be)})};return tt(e,{onBeforeEnter(I){Nr(B,[I]),vn(I,i),vn(I,o)},onBeforeAppear(I){Nr(ie,[I]),vn(I,l),vn(I,u)},onEnter:w(!1),onAppear:w(!0),onLeave(I,T){I._isLeaving=!0;const ye=()=>A(I,T);vn(I,p),I._enterCancelled?(vn(I,m),Cf(I)):(Cf(I),vn(I,m)),Rf(()=>{I._isLeaving&&(Dr(I,p),vn(I,E),Af(H)||bf(I,r,D,ye))}),Nr(H,[I,ye])},onEnterCancelled(I){_(I,!1,void 0,!0),Nr(j,[I])},onAppearCancelled(I){_(I,!0,void 0,!0),Nr(y,[I])},onLeaveCancelled(I){A(I),Nr(Z,[I])}})}function Bv(t){if(t==null)return null;if(Ce(t))return[xc(t.enter),xc(t.leave)];{const e=xc(t);return[e,e]}}function xc(t){return LE(t)}function vn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Mi]||(t[Mi]=new Set)).add(e)}function Dr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Mi];n&&(n.delete(e),n.size||(t[Mi]=void 0))}function Rf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let jv=0;function bf(t,e,n,r){const s=t._endId=++jv,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=$v(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),i()},m=E=>{E.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,m)}function $v(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${qn}Delay`),i=r(`${qn}Duration`),o=Sf(s,i),c=r(`${ni}Delay`),l=r(`${ni}Duration`),u=Sf(c,l);let f=null,p=0,m=0;e===qn?o>0&&(f=qn,p=o,m=i.length):e===ni?u>0&&(f=ni,p=u,m=l.length):(p=Math.max(o,u),f=p>0?o>u?qn:ni:null,m=f?f===qn?i.length:l.length:0);const E=f===qn&&/\b(?:transform|all)(?:,|$)/.test(r(`${qn}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:E}}function Sf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Pf(n)+Pf(t[r])))}function Pf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Cf(t){return(t?t.ownerDocument:document).body.offsetHeight}function qv(t,e,n){const r=t[Mi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ca=Symbol("_vod"),ig=Symbol("_vsh"),fk={name:"show",beforeMount(t,{value:e},{transition:n}){t[ca]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ri(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ri(t,!0),r.enter(t)):r.leave(t,()=>{ri(t,!1)}):ri(t,e))},beforeUnmount(t,{value:e}){ri(t,e)}};function ri(t,e){t.style.display=e?t[ca]:"none",t[ig]=!e}const Hv=Symbol(""),zv=/(?:^|;)\s*display\s*:/;function Wv(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Fo(r,c,"")}else for(const o in e)n[o]==null&&Fo(r,o,"");for(const o in n)o==="display"&&(i=!0),Fo(r,o,n[o])}else if(s){if(e!==n){const o=r[Hv];o&&(n+=";"+o),r.cssText=n,i=zv.test(n)}}else e&&t.removeAttribute("style");ca in t&&(t[ca]=i?r.display:"",t[ig]&&(r.display="none"))}const kf=/\s*!important$/;function Fo(t,e,n){if(re(n))n.forEach(r=>Fo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Kv(t,e);kf.test(n)?t.setProperty(Er(r),n.replace(kf,""),"important"):t[r]=n}}const Nf=["Webkit","Moz","ms"],Lc={};function Kv(t,e){const n=Lc[e];if(n)return n;let r=qt(e);if(r!=="filter"&&r in t)return Lc[e]=r;r=Da(r);for(let s=0;s<Nf.length;s++){const i=Nf[s]+r;if(i in t)return Lc[e]=i}return e}const Df="http://www.w3.org/1999/xlink";function Of(t,e,n,r,s,i=$E(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Df,e.slice(6,e.length)):t.setAttributeNS(Df,e,n):n==null||i&&!Kp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Gt(n)?String(n):n)}function Vf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?rg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Kp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Lr(t,e,n,r){t.addEventListener(e,n,r)}function Gv(t,e,n,r){t.removeEventListener(e,n,r)}const xf=Symbol("_vei");function Qv(t,e,n,r,s=null){const i=t[xf]||(t[xf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=Xv(e);if(r){const u=i[e]=Zv(r,s);Lr(t,c,u,l)}else o&&(Gv(t,c,o,l),i[e]=void 0)}}const Lf=/(?:Once|Passive|Capture)$/;function Xv(t){let e;if(Lf.test(t)){e={};let r;for(;r=t.match(Lf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Er(t.slice(2)),e]}let Mc=0;const Yv=Promise.resolve(),Jv=()=>Mc||(Yv.then(()=>Mc=0),Mc=Date.now());function Zv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qt(eI(r,n.value),e,5,[r])};return n.value=t,n.attached=Jv(),n}function eI(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,tI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?qv(t,r,o):e==="style"?Wv(t,n,r):Ca(e)?Kl(e)||Qv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nI(t,e,r,o))?(Vf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Of(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(r))?Vf(t,qt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Of(t,e,r,o))};function nI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mf(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mf(e)&&ze(n)?!1:e in t}const la=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>xo(e,n):e};function rI(t){t.target.composing=!0}function Uf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _s=Symbol("_assign"),dk={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[_s]=la(s);const i=r||s.props&&s.props.type==="number";Lr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=nl(c)),t[_s](c)}),n&&Lr(t,"change",()=>{t.value=t.value.trim()}),e||(Lr(t,"compositionstart",rI),Lr(t,"compositionend",Uf),Lr(t,"change",Uf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[_s]=la(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?nl(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},pk={deep:!0,created(t,e,n){t[_s]=la(n),Lr(t,"change",()=>{const r=t._modelValue,s=sI(t),i=t.checked,o=t[_s];if(re(r)){const c=Gp(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(ka(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(og(t,i))})},mounted:Ff,beforeUpdate(t,e,n){t[_s]=la(n),Ff(t,e,n)}};function Ff(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(re(e))s=Gp(e,r.props.value)>-1;else if(ka(e))s=e.has(r.props.value);else{if(e===n)return;s=Va(e,og(t,!0))}t.checked!==s&&(t.checked=s)}function sI(t){return"_value"in t?t._value:t.value}function og(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const iI=["ctrl","shift","alt","meta"],oI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>iI.some(n=>t[`${n}Key`]&&!e.includes(n))},mk=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=oI[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},aI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gk=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=Er(s.key);if(e.some(o=>o===i||aI[o]===i))return t(s)}))},cI=tt({patchProp:tI},Lv);let Bf;function lI(){return Bf||(Bf=sv(cI))}const uI=((...t)=>{const e=lI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=fI(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,hI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function hI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function fI(t){return ze(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ag;const $a=t=>ag=t,cg=Symbol();function pl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ei;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ei||(Ei={}));function dI(){const t=Jp(!0),e=t.run(()=>Ni({}));let n=[],r=[];const s=iu({install(i){$a(s),s._a=i,i.provide(cg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const lg=()=>{};function jf(t,e,n,r=lg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Zp()&&zE(s),s}function ss(t,...e){t.slice().forEach(n=>{n(...e)})}const pI=t=>t(),$f=Symbol(),Uc=Symbol();function ml(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];pl(s)&&pl(r)&&t.hasOwnProperty(n)&&!He(r)&&!rr(r)?t[n]=ml(s,r):t[n]=r}return t}const mI=Symbol();function gI(t){return!pl(t)||!Object.prototype.hasOwnProperty.call(t,mI)}const{assign:Wn}=Object;function _I(t){return!!(He(t)&&t.effect)}function yI(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=pT(n.state.value[t]);return Wn(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=iu(Ut(()=>{$a(n);const E=n._s.get(t);return o[m].call(E,E)})),p),{}))}return l=ug(t,u,e,n,r,!0),l}function ug(t,e,n={},r,s,i){let o;const c=Wn({actions:{}},n),l={deep:!0};let u,f,p=[],m=[],E;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),Ni({});let N;function D(y){let _;u=f=!1,typeof y=="function"?(y(r.state.value[t]),_={type:Ei.patchFunction,storeId:t,events:E}):(ml(r.state.value[t],y),_={type:Ei.patchObject,payload:y,storeId:t,events:E});const A=N=Symbol();ou().then(()=>{N===A&&(u=!0)}),f=!0,ss(p,_,r.state.value[t])}const B=i?function(){const{state:_}=n,A=_?_():{};this.$patch(w=>{Wn(w,A)})}:lg;function F(){o.stop(),p=[],m=[],r._s.delete(t)}const j=(y,_="")=>{if($f in y)return y[Uc]=_,y;const A=function(){$a(r);const w=Array.from(arguments),I=[],T=[];function ye(fe){I.push(fe)}function Le(fe){T.push(fe)}ss(m,{args:w,name:A[Uc],store:Z,after:ye,onError:Le});let be;try{be=y.apply(this&&this.$id===t?this:Z,w)}catch(fe){throw ss(T,fe),fe}return be instanceof Promise?be.then(fe=>(ss(I,fe),fe)).catch(fe=>(ss(T,fe),Promise.reject(fe))):(ss(I,be),be)};return A[$f]=!0,A[Uc]=_,A},H={_p:r,$id:t,$onAction:jf.bind(null,m),$patch:D,$reset:B,$subscribe(y,_={}){const A=jf(p,y,_.detached,()=>w()),w=o.run(()=>_i(()=>r.state.value[t],I=>{(_.flush==="sync"?f:u)&&y({storeId:t,type:Ei.direct,events:E},I)},Wn({},l,_)));return A},$dispose:F},Z=Yi(H);r._s.set(t,Z);const b=(r._a&&r._a.runWithContext||pI)(()=>r._e.run(()=>(o=Jp()).run(()=>e({action:j}))));for(const y in b){const _=b[y];if(He(_)&&!_I(_)||rr(_))i||(P&&gI(_)&&(He(_)?_.value=P[y]:ml(_,P[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const A=j(_,y);b[y]=A,c.actions[y]=_}}return Wn(Z,b),Wn(Ie(Z),b),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:y=>{D(_=>{Wn(_,y)})}}),r._p.forEach(y=>{Wn(Z,o.run(()=>y({store:Z,app:r._a,pinia:r,options:c})))}),P&&i&&n.hydrate&&n.hydrate(Z.$state,P),u=!0,f=!0,Z}/*! #__NO_SIDE_EFFECTS__ */function EI(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=YT();return o=o||(l?$t(cg,null):null),o&&$a(o),o=ag,o._s.has(t)||(s?ug(t,e,r,o):yI(t,r,o)),o._s.get(t)}return i.$id=t,i}const TI=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},vI={};function II(t,e){const n=BT("RouterView");return sa(),oa(n)}const wI=TI(vI,[["render",II]]),AI="modulepreload",RI=function(t){return"/"+t},qf={},Be=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(n.map(u=>{if(u=RI(u),u in qf)return;qf[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":AI,f||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),f)return new Promise((E,P)=>{m.addEventListener("load",E),m.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof document<"u";function hg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&hg(t.default)}const we=Object.assign;function Fc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Xt(s)?s.map(t):t(s)}return n}const Ti=()=>{},Xt=Array.isArray,fg=/#/g,SI=/&/g,PI=/\//g,CI=/=/g,kI=/\?/g,dg=/\+/g,NI=/%5B/g,DI=/%5D/g,pg=/%5E/g,OI=/%60/g,mg=/%7B/g,VI=/%7C/g,gg=/%7D/g,xI=/%20/g;function du(t){return encodeURI(""+t).replace(VI,"|").replace(NI,"[").replace(DI,"]")}function LI(t){return du(t).replace(mg,"{").replace(gg,"}").replace(pg,"^")}function gl(t){return du(t).replace(dg,"%2B").replace(xI,"+").replace(fg,"%23").replace(SI,"%26").replace(OI,"`").replace(mg,"{").replace(gg,"}").replace(pg,"^")}function MI(t){return gl(t).replace(CI,"%3D")}function UI(t){return du(t).replace(fg,"%23").replace(kI,"%3F")}function FI(t){return t==null?"":UI(t).replace(PI,"%2F")}function Ui(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const BI=/\/$/,jI=t=>t.replace(BI,"");function Bc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=zI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ui(o)}}function $I(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&As(e.matched[r],n.matched[s])&&_g(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function As(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _g(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!HI(t[n],e[n]))return!1;return!0}function HI(t,e){return Xt(t)?zf(t,e):Xt(e)?zf(e,t):t===e}function zf(t,e){return Xt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function zI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Fi;(function(t){t.pop="pop",t.push="push"})(Fi||(Fi={}));var vi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vi||(vi={}));function WI(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jI(t)}const KI=/^[^#]+#/;function GI(t,e){return t.replace(KI,"#")+e}function QI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const qa=()=>({left:window.scrollX,top:window.scrollY});function XI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=QI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Wf(t,e){return(history.state?history.state.position-e:-1)+t}const _l=new Map;function YI(t,e){_l.set(t,e)}function JI(t){const e=_l.get(t);return _l.delete(t),e}let ZI=()=>location.protocol+"//"+location.host;function yg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Hf(l,"")}return Hf(n,t)+r+s}function ew(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const E=yg(t,location),P=n.value,N=e.value;let D=0;if(m){if(n.value=E,e.value=m,o&&o===P){o=null;return}D=N?m.position-N.position:0}else r(E);s.forEach(B=>{B(n.value,P,{delta:D,type:Fi.pop,direction:D?D>0?vi.forward:vi.back:vi.unknown})})};function l(){o=n.value}function u(m){s.push(m);const E=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(E),E}function f(){const{history:m}=window;m.state&&m.replaceState(we({},m.state,{scroll:qa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Kf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?qa():null}}function tw(t){const{history:e,location:n}=window,r={value:yg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:ZI()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(E){console.error(E),n[f?"replace":"assign"](m)}}function o(l,u){const f=we({},e.state,Kf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=we({},s.value,e.state,{forward:l,scroll:qa()});i(f.current,f,!0);const p=we({},Kf(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function nw(t){t=WI(t);const e=tw(t),n=ew(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:GI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function rw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),nw(t)}function sw(t){return typeof t=="string"||t&&typeof t=="object"}function Eg(t){return typeof t=="string"||typeof t=="symbol"}const Tg=Symbol("");var Gf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gf||(Gf={}));function Rs(t,e){return we(new Error,{type:t,[Tg]:!0},e)}function In(t,e){return t instanceof Error&&Tg in t&&(e==null||!!(t.type&e))}const Qf="[^/]+?",iw={sensitive:!1,strict:!1,start:!0,end:!0},ow=/[.+*?^${}()[\]/\\]/g;function aw(t,e){const n=we({},iw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let E=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(ow,"\\$&"),E+=40;else if(m.type===1){const{value:P,repeatable:N,optional:D,regexp:B}=m;i.push({name:P,repeatable:N,optional:D});const F=B||Qf;if(F!==Qf){E+=10;try{new RegExp(`(${F})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${P}" (${F}): `+H.message)}}let j=N?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(j=D&&u.length<2?`(?:/${j})`:"/"+j),D&&(j+="?"),s+=j,E+=20,D&&(E+=-8),N&&(E+=-20),F===".*"&&(E+=-50)}f.push(E)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const E=f[m]||"",P=i[m-1];p[P.name]=E&&P.repeatable?E.split("/"):E}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const E of m)if(E.type===0)f+=E.value;else if(E.type===1){const{value:P,repeatable:N,optional:D}=E,B=P in u?u[P]:"";if(Xt(B)&&!N)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const F=Xt(B)?B.join("/"):B;if(!F)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);f+=F}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function cw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function vg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=cw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xf(r))return 1;if(Xf(s))return-1}return s.length-r.length}function Xf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lw={type:0,value:""},uw=/[a-zA-Z0-9_]/;function hw(t){if(!t)return[[]];if(t==="/")return[[lw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${u}": ${E}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:uw.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function fw(t,e,n){const r=aw(hw(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function dw(t,e){const n=[],r=new Map;e=ed({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,E){const P=!E,N=Jf(p);N.aliasOf=E&&E.record;const D=ed(e,p),B=[N];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of H)B.push(Jf(we({},N,{components:E?E.record.components:N.components,path:Z,aliasOf:E?E.record:N})))}let F,j;for(const H of B){const{path:Z}=H;if(m&&Z[0]!=="/"){const ie=m.record.path,b=ie[ie.length-1]==="/"?"":"/";H.path=m.record.path+(Z&&b+Z)}if(F=fw(H,m,D),E?E.alias.push(F):(j=j||F,j!==F&&j.alias.push(F),P&&p.name&&!Zf(F)&&o(p.name)),Ig(F)&&l(F),N.children){const ie=N.children;for(let b=0;b<ie.length;b++)i(ie[b],F,E&&E.children[b])}E=E||F}return j?()=>{o(j)}:Ti}function o(p){if(Eg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=gw(p,n);n.splice(m,0,p),p.record.name&&!Zf(p)&&r.set(p.record.name,p)}function u(p,m){let E,P={},N,D;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw Rs(1,{location:p});D=E.record.name,P=we(Yf(m.params,E.keys.filter(j=>!j.optional).concat(E.parent?E.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&Yf(p.params,E.keys.map(j=>j.name))),N=E.stringify(P)}else if(p.path!=null)N=p.path,E=n.find(j=>j.re.test(N)),E&&(P=E.parse(N),D=E.record.name);else{if(E=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!E)throw Rs(1,{location:p,currentLocation:m});D=E.record.name,P=we({},m.params,p.params),N=E.stringify(P)}const B=[];let F=E;for(;F;)B.unshift(F.record),F=F.parent;return{name:D,path:N,params:P,matched:B,meta:mw(B)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Yf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Jf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:pw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function pw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Zf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mw(t){return t.reduce((e,n)=>we(e,n.meta),{})}function ed(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function gw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;vg(t,e[i])<0?r=i:n=i+1}const s=_w(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function _w(t){let e=t;for(;e=e.parent;)if(Ig(e)&&vg(t,e)===0)return e}function Ig({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function yw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(dg," "),o=i.indexOf("="),c=Ui(o<0?i:i.slice(0,o)),l=o<0?null:Ui(i.slice(o+1));if(c in e){let u=e[c];Xt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function td(t){let e="";for(let n in t){const r=t[n];if(n=MI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xt(r)?r.map(i=>i&&gl(i)):[r&&gl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ew(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Tw=Symbol(""),nd=Symbol(""),Ha=Symbol(""),pu=Symbol(""),yl=Symbol("");function si(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Rs(4,{from:n,to:e})):m instanceof Error?l(m):sw(m)?l(Rs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function jc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(hg(l)){const f=(l.__vccOpts||l)[e];f&&i.push(Qn(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=bI(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const E=(p.__vccOpts||p)[e];return E&&Qn(E,n,r,o,c,s)()}))}}return i}function rd(t){const e=$t(Ha),n=$t(pu),r=Ut(()=>{const l=ps(t.to);return e.resolve(l)}),s=Ut(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(As.bind(null,f));if(m>-1)return m;const E=sd(l[u-2]);return u>1&&sd(f)===E&&p[p.length-1].path!==E?p.findIndex(As.bind(null,l[u-2])):m}),i=Ut(()=>s.value>-1&&Rw(n.params,r.value.params)),o=Ut(()=>s.value>-1&&s.value===n.matched.length-1&&_g(n.params,r.value.params));function c(l={}){if(Aw(l)){const u=e[ps(t.replace)?"replace":"push"](ps(t.to)).catch(Ti);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ut(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function vw(t){return t.length===1?t[0]:t}const Iw=Pm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:rd,setup(t,{slots:e}){const n=Yi(rd(t)),{options:r}=$t(Ha),s=Ut(()=>({[id(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[id(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&vw(e.default(n));return t.custom?i:fu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ww=Iw;function Aw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Rw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function sd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const id=(t,e,n)=>t??e??n,bw=Pm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$t(yl),s=Ut(()=>t.route||r.value),i=$t(nd,0),o=Ut(()=>{let u=ps(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Ut(()=>s.value.matched[o.value]);Lo(nd,Ut(()=>o.value+1)),Lo(Tw,c),Lo(yl,s);const l=Ni();return _i(()=>[l.value,c.value,t.name],([u,f,p],[m,E,P])=>{f&&(f.instances[p]=u,E&&E!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=E.leaveGuards),f.updateGuards.size||(f.updateGuards=E.updateGuards))),u&&f&&(!E||!As(f,E)||!m)&&(f.enterCallbacks[p]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return od(n.default,{Component:m,route:u});const E=p.props[f],P=E?E===!0?u.params:typeof E=="function"?E(u):E:null,D=fu(m,we({},P,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return od(n.default,{Component:D,route:u})||D}}});function od(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Sw=bw;function Pw(t){const e=dw(t.routes,t),n=t.parseQuery||yw,r=t.stringifyQuery||td,s=t.history,i=si(),o=si(),c=si(),l=hT(Hn);let u=Hn;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Fc.bind(null,V=>""+V),p=Fc.bind(null,FI),m=Fc.bind(null,Ui);function E(V,Y){let G,ee;return Eg(V)?(G=e.getRecordMatcher(V),ee=Y):ee=V,e.addRoute(ee,G)}function P(V){const Y=e.getRecordMatcher(V);Y&&e.removeRoute(Y)}function N(){return e.getRoutes().map(V=>V.record)}function D(V){return!!e.getRecordMatcher(V)}function B(V,Y){if(Y=we({},Y||l.value),typeof V=="string"){const S=Bc(n,V,Y.path),L=e.resolve({path:S.path},Y),U=s.createHref(S.fullPath);return we(S,L,{params:m(L.params),hash:Ui(S.hash),redirectedFrom:void 0,href:U})}let G;if(V.path!=null)G=we({},V,{path:Bc(n,V.path,Y.path).path});else{const S=we({},V.params);for(const L in S)S[L]==null&&delete S[L];G=we({},V,{params:p(S)}),Y.params=p(Y.params)}const ee=e.resolve(G,Y),Se=V.hash||"";ee.params=f(m(ee.params));const v=$I(r,we({},V,{hash:LI(Se),path:ee.path})),R=s.createHref(v);return we({fullPath:v,hash:Se,query:r===td?Ew(V.query):V.query||{}},ee,{redirectedFrom:void 0,href:R})}function F(V){return typeof V=="string"?Bc(n,V,l.value.path):we({},V)}function j(V,Y){if(u!==V)return Rs(8,{from:Y,to:V})}function H(V){return b(V)}function Z(V){return H(we(F(V),{replace:!0}))}function ie(V){const Y=V.matched[V.matched.length-1];if(Y&&Y.redirect){const{redirect:G}=Y;let ee=typeof G=="function"?G(V):G;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=F(ee):{path:ee},ee.params={}),we({query:V.query,hash:V.hash,params:ee.path!=null?{}:V.params},ee)}}function b(V,Y){const G=u=B(V),ee=l.value,Se=V.state,v=V.force,R=V.replace===!0,S=ie(G);if(S)return b(we(F(S),{state:typeof S=="object"?we({},Se,S.state):Se,force:v,replace:R}),Y||G);const L=G;L.redirectedFrom=Y;let U;return!v&&qI(r,ee,G)&&(U=Rs(16,{to:L,from:ee}),Pt(ee,ee,!0,!1)),(U?Promise.resolve(U):A(L,ee)).catch(O=>In(O)?In(O,2)?O:Zt(O):Ee(O,L,ee)).then(O=>{if(O){if(In(O,2))return b(we({replace:R},F(O.to),{state:typeof O.to=="object"?we({},Se,O.to.state):Se,force:v}),Y||L)}else O=I(L,ee,!0,R,Se);return w(L,ee,O),O})}function y(V,Y){const G=j(V,Y);return G?Promise.reject(G):Promise.resolve()}function _(V){const Y=Ht.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(V):V()}function A(V,Y){let G;const[ee,Se,v]=Cw(V,Y);G=jc(ee.reverse(),"beforeRouteLeave",V,Y);for(const S of ee)S.leaveGuards.forEach(L=>{G.push(Qn(L,V,Y))});const R=y.bind(null,V,Y);return G.push(R),lt(G).then(()=>{G=[];for(const S of i.list())G.push(Qn(S,V,Y));return G.push(R),lt(G)}).then(()=>{G=jc(Se,"beforeRouteUpdate",V,Y);for(const S of Se)S.updateGuards.forEach(L=>{G.push(Qn(L,V,Y))});return G.push(R),lt(G)}).then(()=>{G=[];for(const S of v)if(S.beforeEnter)if(Xt(S.beforeEnter))for(const L of S.beforeEnter)G.push(Qn(L,V,Y));else G.push(Qn(S.beforeEnter,V,Y));return G.push(R),lt(G)}).then(()=>(V.matched.forEach(S=>S.enterCallbacks={}),G=jc(v,"beforeRouteEnter",V,Y,_),G.push(R),lt(G))).then(()=>{G=[];for(const S of o.list())G.push(Qn(S,V,Y));return G.push(R),lt(G)}).catch(S=>In(S,8)?S:Promise.reject(S))}function w(V,Y,G){c.list().forEach(ee=>_(()=>ee(V,Y,G)))}function I(V,Y,G,ee,Se){const v=j(V,Y);if(v)return v;const R=Y===Hn,S=os?history.state:{};G&&(ee||R?s.replace(V.fullPath,we({scroll:R&&S&&S.scroll},Se)):s.push(V.fullPath,Se)),l.value=V,Pt(V,Y,G,R),Zt()}let T;function ye(){T||(T=s.listen((V,Y,G)=>{if(!Ln.listening)return;const ee=B(V),Se=ie(ee);if(Se){b(we(Se,{replace:!0,force:!0}),ee).catch(Ti);return}u=ee;const v=l.value;os&&YI(Wf(v.fullPath,G.delta),qa()),A(ee,v).catch(R=>In(R,12)?R:In(R,2)?(b(we(F(R.to),{force:!0}),ee).then(S=>{In(S,20)&&!G.delta&&G.type===Fi.pop&&s.go(-1,!1)}).catch(Ti),Promise.reject()):(G.delta&&s.go(-G.delta,!1),Ee(R,ee,v))).then(R=>{R=R||I(ee,v,!1),R&&(G.delta&&!In(R,8)?s.go(-G.delta,!1):G.type===Fi.pop&&In(R,20)&&s.go(-1,!1)),w(ee,v,R)}).catch(Ti)}))}let Le=si(),be=si(),fe;function Ee(V,Y,G){Zt(V);const ee=be.list();return ee.length?ee.forEach(Se=>Se(V,Y,G)):console.error(V),Promise.reject(V)}function Rt(){return fe&&l.value!==Hn?Promise.resolve():new Promise((V,Y)=>{Le.add([V,Y])})}function Zt(V){return fe||(fe=!V,ye(),Le.list().forEach(([Y,G])=>V?G(V):Y()),Le.reset()),V}function Pt(V,Y,G,ee){const{scrollBehavior:Se}=t;if(!os||!Se)return Promise.resolve();const v=!G&&JI(Wf(V.fullPath,0))||(ee||!G)&&history.state&&history.state.scroll||null;return ou().then(()=>Se(V,Y,v)).then(R=>R&&XI(R)).catch(R=>Ee(R,V,Y))}const nt=V=>s.go(V);let En;const Ht=new Set,Ln={currentRoute:l,listening:!0,addRoute:E,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:N,resolve:B,options:t,push:H,replace:Z,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:be.add,isReady:Rt,install(V){const Y=this;V.component("RouterLink",ww),V.component("RouterView",Sw),V.config.globalProperties.$router=Y,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>ps(l)}),os&&!En&&l.value===Hn&&(En=!0,H(s.location).catch(Se=>{}));const G={};for(const Se in Hn)Object.defineProperty(G,Se,{get:()=>l.value[Se],enumerable:!0});V.provide(Ha,Y),V.provide(pu,pm(G)),V.provide(yl,l);const ee=V.unmount;Ht.add(V),V.unmount=function(){Ht.delete(V),Ht.size<1&&(u=Hn,T&&T(),T=null,l.value=Hn,En=!1,fe=!1),ee()}}};function lt(V){return V.reduce((Y,G)=>Y.then(()=>_(G)),Promise.resolve())}return Ln}function Cw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>As(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>As(u,l))||s.push(l))}return[n,r,s]}function _k(){return $t(Ha)}function yk(t){return $t(pu)}const kw=()=>{};var ad={};/**
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
 */const wg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Nw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,E=u&63;l||(E=64,o||(m=64)),r.push(n[f],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new Dw;const m=i<<2|c>>4;if(r.push(m),u!==64){const E=c<<4&240|u>>2;if(r.push(E),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Dw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ow=function(t){const e=wg(t);return Ag.encodeByteArray(e,!0)},ua=function(t){return Ow(t).replace(/\./g,"")},Rg=function(t){try{return Ag.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xw=()=>Vw().__FIREBASE_DEFAULTS__,Lw=()=>{if(typeof process>"u"||typeof ad>"u")return;const t=ad.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Mw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rg(t[1]);return e&&JSON.parse(e)},za=()=>{try{return kw()||xw()||Lw()||Mw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bg=t=>za()?.emulatorHosts?.[t],Sg=t=>{const e=bg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Pg=()=>za()?.config,Cg=t=>za()?.[`_${t}`];/**
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
 */class Uw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Tr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mu(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function kg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ua(JSON.stringify(n)),ua(JSON.stringify(o)),""].join(".")}const Ii={};function Fw(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ii))Ii[e]?t.emulator.push(e):t.prod.push(e);return t}function Bw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let cd=!1;function gu(t,e){if(typeof window>"u"||typeof document>"u"||!Tr(window.location.host)||Ii[t]===e||Ii[t]||cd)return;Ii[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Fw().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,E){m.setAttribute("width","24"),m.setAttribute("id",E),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{cd=!0,o()},m}function f(m,E){m.setAttribute("id",E),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Bw(r),E=n("text"),P=document.getElementById(E)||document.createElement("span"),N=n("learnmore"),D=document.getElementById(N)||document.createElement("a"),B=n("preprendIcon"),F=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const j=m.element;c(j),f(D,N);const H=u();l(F,B),j.append(F,P,D,H),document.body.appendChild(j)}i?(P.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function $w(){const t=za()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ww(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kw(){return!$w()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gw(){try{return typeof indexedDB=="object"}catch{return!1}}function Qw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const Xw="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Xw,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Yw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new yn(s,c,r)}}function Yw(t,e){return t.replace(Jw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Jw=/\{\$([^}]+)}/g;function Zw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ld(i)&&ld(o)){if(!jr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ld(t){return t!==null&&typeof t=="object"}/**
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
 */function to(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ai(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ci(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function eA(t,e){const n=new tA(t,e);return n.subscribe.bind(n)}class tA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$c),s.error===void 0&&(s.error=$c),s.complete===void 0&&(s.complete=$c);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $c(){}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vr="[DEFAULT]";/**
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
 */class rA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Uw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iA(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sA(t){return t===Vr?void 0:t}function iA(t){return t.instantiationMode==="EAGER"}/**
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
 */class oA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const aA={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},cA=me.INFO,lA={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},uA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=cA,this._logHandler=uA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const hA=(t,e)=>e.some(n=>t instanceof n);let ud,hd;function fA(){return ud||(ud=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dA(){return hd||(hd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ng=new WeakMap,El=new WeakMap,Dg=new WeakMap,qc=new WeakMap,yu=new WeakMap;function pA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ng.set(n,t)}).catch(()=>{}),yu.set(e,t),e}function mA(t){if(El.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});El.set(t,e)}let Tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return El.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gA(t){Tl=t(Tl)}function _A(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hc(this),e,...n);return Dg.set(r,e.sort?e.sort():[e]),sr(r)}:dA().includes(t)?function(...e){return t.apply(Hc(this),e),sr(Ng.get(this))}:function(...e){return sr(t.apply(Hc(this),e))}}function yA(t){return typeof t=="function"?_A(t):(t instanceof IDBTransaction&&mA(t),hA(t,fA())?new Proxy(t,Tl):t)}function sr(t){if(t instanceof IDBRequest)return pA(t);if(qc.has(t))return qc.get(t);const e=yA(t);return e!==t&&(qc.set(t,e),yu.set(e,t)),e}const Hc=t=>yu.get(t);function EA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sr(o.result),l.oldVersion,l.newVersion,sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const TA=["get","getKey","getAll","getAllKeys","count"],vA=["put","add","delete","clear"],zc=new Map;function fd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zc.get(e))return zc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=vA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||TA.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return zc.set(e,i),i}gA(t=>({...t,get:(e,n,r)=>fd(e,n)||t.get(e,n,r),has:(e,n)=>!!fd(e,n)||t.has(e,n)}));/**
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
 */class IA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wA(t){return t.getComponent()?.type==="VERSION"}const vl="@firebase/app",dd="0.14.6";/**
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
 */const Nn=new _u("@firebase/app"),AA="@firebase/app-compat",RA="@firebase/analytics-compat",bA="@firebase/analytics",SA="@firebase/app-check-compat",PA="@firebase/app-check",CA="@firebase/auth",kA="@firebase/auth-compat",NA="@firebase/database",DA="@firebase/data-connect",OA="@firebase/database-compat",VA="@firebase/functions",xA="@firebase/functions-compat",LA="@firebase/installations",MA="@firebase/installations-compat",UA="@firebase/messaging",FA="@firebase/messaging-compat",BA="@firebase/performance",jA="@firebase/performance-compat",$A="@firebase/remote-config",qA="@firebase/remote-config-compat",HA="@firebase/storage",zA="@firebase/storage-compat",WA="@firebase/firestore",KA="@firebase/ai",GA="@firebase/firestore-compat",QA="firebase",XA="12.6.0";/**
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
 */const Il="[DEFAULT]",YA={[vl]:"fire-core",[AA]:"fire-core-compat",[bA]:"fire-analytics",[RA]:"fire-analytics-compat",[PA]:"fire-app-check",[SA]:"fire-app-check-compat",[CA]:"fire-auth",[kA]:"fire-auth-compat",[NA]:"fire-rtdb",[DA]:"fire-data-connect",[OA]:"fire-rtdb-compat",[VA]:"fire-fn",[xA]:"fire-fn-compat",[LA]:"fire-iid",[MA]:"fire-iid-compat",[UA]:"fire-fcm",[FA]:"fire-fcm-compat",[BA]:"fire-perf",[jA]:"fire-perf-compat",[$A]:"fire-rc",[qA]:"fire-rc-compat",[HA]:"fire-gcs",[zA]:"fire-gcs-compat",[WA]:"fire-fst",[GA]:"fire-fst-compat",[KA]:"fire-vertex","fire-js":"fire-js",[QA]:"fire-js-all"};/**
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
 */const ha=new Map,JA=new Map,wl=new Map;function pd(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $r(t){const e=t.name;if(wl.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;wl.set(e,t);for(const n of ha.values())pd(n,t);for(const n of JA.values())pd(n,t);return!0}function Wa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ZA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new eo("app","Firebase",ZA);/**
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
 */class eR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Gr=XA;function Og(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Il,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ir.create("bad-app-name",{appName:String(s)});if(n||(n=Pg()),!n)throw ir.create("no-options");const i=ha.get(s);if(i){if(jr(n,i.options)&&jr(r,i.config))return i;throw ir.create("duplicate-app",{appName:s})}const o=new oA(s);for(const l of wl.values())o.addComponent(l);const c=new eR(n,r,o);return ha.set(s,c),c}function Eu(t=Il){const e=ha.get(t);if(!e&&t===Il&&Pg())return Og();if(!e)throw ir.create("no-app",{appName:t});return e}function ln(t,e,n){let r=YA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(o.join(" "));return}$r(new fr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const tR="firebase-heartbeat-database",nR=1,Bi="firebase-heartbeat-store";let Wc=null;function Vg(){return Wc||(Wc=EA(tR,nR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),Wc}async function rR(t){try{const n=(await Vg()).transaction(Bi),r=await n.objectStore(Bi).get(xg(t));return await n.done,r}catch(e){if(e instanceof yn)Nn.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e?.message});Nn.warn(n.message)}}}async function md(t,e){try{const r=(await Vg()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(e,xg(t)),await r.done}catch(n){if(n instanceof yn)Nn.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n?.message});Nn.warn(r.message)}}}function xg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sR=1024,iR=30;class oR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gd();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>iR){const s=lR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Nn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gd(),{heartbeatsToSend:n,unsentEntries:r}=aR(this._heartbeatsCache.heartbeats),s=ua(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Nn.warn(e),""}}}function gd(){return new Date().toISOString().substring(0,10)}function aR(t,e=sR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_d(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_d(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gw()?Qw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rR(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return md(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return md(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _d(t){return ua(JSON.stringify({version:2,heartbeats:t})).length}function lR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function uR(t){$r(new fr("platform-logger",e=>new IA(e),"PRIVATE")),$r(new fr("heartbeat",e=>new oR(e),"PRIVATE")),ln(vl,dd,t),ln(vl,dd,"esm2020"),ln("fire-js","")}uR("");function Lg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hR=Lg,Mg=new eo("auth","Firebase",Lg());/**
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
 */const fa=new _u("@firebase/auth");function fR(t,...e){fa.logLevel<=me.WARN&&fa.warn(`Auth (${Gr}): ${t}`,...e)}function Bo(t,...e){fa.logLevel<=me.ERROR&&fa.error(`Auth (${Gr}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw Tu(t,...e)}function un(t,...e){return Tu(t,...e)}function Ug(t,e,n){const r={...hR(),[e]:n};return new eo("auth","Firebase",r).create(e,{appName:t.name})}function or(t){return Ug(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mg.create(t,...e)}function ae(t,e,...n){if(!t)throw Tu(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bo(e),new Error(e)}function Dn(t,e){t||Sn(e)}/**
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
 */function Al(){return typeof self<"u"&&self.location?.href||""}function dR(){return yd()==="http:"||yd()==="https:"}function yd(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function pR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dR()||Hw()||"connection"in navigator)?navigator.onLine:!0}function mR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class no{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=jw()||zw()}get(){return pR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vu(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Fg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _R=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yR=new no(3e4,6e4);function Qr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function vr(t,e,n,r,s={}){return Bg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=to({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return qw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Tr(t.emulatorConfig.host)&&(u.credentials="include"),Fg.fetch()(await jg(t,t.config.apiHost,n,c),u)})}async function Bg(t,e,n){t._canInitEmulator=!1;const r={...gR,...e};try{const s=new TR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw bo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ug(t,f,u);Yt(t,f)}}catch(s){if(s instanceof yn)throw s;Yt(t,"network-request-failed",{message:String(s)})}}async function Ka(t,e,n,r,s={}){const i=await vr(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function jg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?vu(t.config,s):`${t.config.apiScheme}://${s}`;return _R.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function ER(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),yR.get())})}}function bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}function Ed(t){return t!==void 0&&t.enterprise!==void 0}class vR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ER(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function IR(t,e){return vr(t,"GET","/v2/recaptchaConfig",Qr(t,e))}/**
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
 */async function wR(t,e){return vr(t,"POST","/v1/accounts:delete",e)}async function da(t,e){return vr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AR(t,e=!1){const n=Me(t),r=await n.getIdToken(e),s=Iu(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:wi(Kc(s.auth_time)),issuedAtTime:wi(Kc(s.iat)),expirationTime:wi(Kc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Kc(t){return Number(t)*1e3}function Iu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rg(n);return s?JSON.parse(s):(Bo("Failed to decode base64 JWT payload"),null)}catch(s){return Bo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Td(t){const e=Iu(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ji(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&RR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pa(t){const e=t.auth,n=await t.getIdToken(),r=await ji(t,da(e,{idToken:n}));ae(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?$g(s.providerUserInfo):[],o=PR(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function SR(t){const e=Me(t);await pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $g(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function CR(t,e){const n=await Bg(t,{},async()=>{const r=to({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await jg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Tr(t.emulatorConfig.host)&&(l.credentials="include"),Fg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kR(t,e){return vr(t,"POST","/v2/accounts:revokeToken",Qr(t,e))}/**
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
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Td(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=Td(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await CR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ys;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function zn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new bR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ji(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AR(this,e)}reload(){return SR(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(or(this.auth));const e=await this.getIdToken();return await ji(this,wR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:E,providerData:P,stsTokenManager:N}=n;ae(p&&N,e,"internal-error");const D=ys.fromJSON(this.name,N);ae(typeof p=="string",e,"internal-error"),zn(r,e.name),zn(s,e.name),ae(typeof m=="boolean",e,"internal-error"),ae(typeof E=="boolean",e,"internal-error"),zn(i,e.name),zn(o,e.name),zn(c,e.name),zn(l,e.name),zn(u,e.name),zn(f,e.name);const B=new Wt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:u,lastLoginAt:f});return P&&Array.isArray(P)&&(B.providerData=P.map(F=>({...F}))),l&&(B._redirectEventId=l),B}static async _fromIdTokenResponse(e,n,r=!1){const s=new ys;s.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await pa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$g(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new ys;c.updateFromIdToken(r);const l=new Wt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
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
 */const vd=new Map;function Pn(t){Dn(t instanceof Function,"Expected a class definition");let e=vd.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vd.set(t,e),e)}/**
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
 */class qg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qg.type="NONE";const Id=qg;/**
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
 */function jo(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=jo(this.userKey,s.apiKey,i),this.fullPersistenceKey=jo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await da(this.auth,{idToken:e}).catch(()=>{});return n?Wt._fromGetAccountInfoResponse(this.auth,n,e):null}return Wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Es(Pn(Id),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Pn(Id);const o=jo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await da(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Wt._fromGetAccountInfoResponse(e,m,f)}else p=Wt._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Es(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Es(i,e,r))}}/**
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
 */function wd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qg(e))return"Blackberry";if(Xg(e))return"Webos";if(zg(e))return"Safari";if((e.includes("chrome/")||Wg(e))&&!e.includes("edge/"))return"Chrome";if(Gg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Hg(t=Et()){return/firefox\//i.test(t)}function zg(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wg(t=Et()){return/crios\//i.test(t)}function Kg(t=Et()){return/iemobile/i.test(t)}function Gg(t=Et()){return/android/i.test(t)}function Qg(t=Et()){return/blackberry/i.test(t)}function Xg(t=Et()){return/webos/i.test(t)}function wu(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NR(t=Et()){return wu(t)&&!!window.navigator?.standalone}function DR(){return Ww()&&document.documentMode===10}function Yg(t=Et()){return wu(t)||Gg(t)||Xg(t)||Qg(t)||/windows phone/i.test(t)||Kg(t)}/**
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
 */function Jg(t,e=[]){let n;switch(t){case"Browser":n=wd(Et());break;case"Worker":n=`${wd(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gr}/${r}`}/**
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
 */class OR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function VR(t,e={}){return vr(t,"GET","/v2/passwordPolicy",Qr(t,e))}/**
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
 */const xR=6;class LR{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??xR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class MR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ad(this),this.idTokenSubscription=new Ad(this),this.beforeStateQueue=new OR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await da(this,{idToken:e}),r=await Wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ft(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pa(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(or(this));const n=e?Me(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VR(this),n=new LR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kR(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&fR(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Os(t){return Me(t)}class Ad{constructor(e){this.auth=e,this.observer=null,this.addObserver=eA(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ga={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UR(t){Ga=t}function Zg(t){return Ga.loadJS(t)}function FR(){return Ga.recaptchaEnterpriseScript}function BR(){return Ga.gapiScript}function jR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class $R{constructor(){this.enterprise=new qR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class qR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const HR="recaptcha-enterprise",e_="NO_RECAPTCHA";class zR{constructor(e){this.type=HR,this.auth=Os(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{IR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new vR(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Ed(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(e_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $R().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Ed(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=FR();l.length!==0&&(l+=c),Zg(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Rd(t,e,n,r=!1,s=!1){const i=new zR(t);let o;if(s)o=e_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function bd(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Rd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Rd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function WR(t,e){const n=Wa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(jr(i,e??{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function KR(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Pn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function GR(t,e,n){const r=Os(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=t_(e),{host:o,port:c}=QR(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(jr(u,r.config.emulator)&&jr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Tr(o)?(mu(`${i}//${o}${l}`),gu("Auth",!0)):XR()}function t_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QR(t){const e=t_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Sd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Sd(o)}}}function Sd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Au{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function YR(t,e){return vr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function JR(t,e){return Ka(t,"POST","/v1/accounts:signInWithPassword",Qr(t,e))}/**
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
 */async function ZR(t,e){return Ka(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}async function eb(t,e){return Ka(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}/**
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
 */class $i extends Au{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $i(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $i(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bd(e,n,"signInWithPassword",JR);case"emailLink":return ZR(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bd(e,r,"signUpPassword",YR);case"emailLink":return eb(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ts(t,e){return Ka(t,"POST","/v1/accounts:signInWithIdp",Qr(t,e))}/**
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
 */const tb="http://localhost";class qr extends Au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ts(e,n)}buildRequest(){const e={requestUri:tb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=to(n)}return e}}/**
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
 */function nb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rb(t){const e=ai(ci(t)).link,n=e?ai(ci(e)).deep_link_id:null,r=ai(ci(t)).deep_link_id;return(r?ai(ci(r)).link:null)||r||n||e||t}class Ru{constructor(e){const n=ai(ci(e)),r=n.apiKey??null,s=n.oobCode??null,i=nb(n.mode??null);ae(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=rb(e);try{return new Ru(n)}catch{return null}}}/**
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
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return $i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ru.parseLink(n);return ae(r,"argument-error"),$i._fromEmailAndCode(e,r.code,r.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class n_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ro extends n_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xn extends ro{constructor(){super("facebook.com")}static credential(e){return qr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
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
 */class Yn extends ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
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
 */class Jn extends ro{constructor(){super("github.com")}static credential(e){return qr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Zn extends ro{constructor(){super("twitter.com")}static credential(e,n){return qr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */class bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Wt._fromIdTokenResponse(e,r,s),o=Pd(r);return new bs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Pd(r);return new bs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Pd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ma extends yn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ma.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ma(e,n,r,s)}}function r_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ma._fromErrorAndOperation(t,i,e,r):i})}async function sb(t,e,n=!1){const r=await ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bs._forOperation(t,"link",r)}/**
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
 */async function ib(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(or(r));const s="reauthenticate";try{const i=await ji(t,r_(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=Iu(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),bs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
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
 */async function s_(t,e,n=!1){if(Ft(t.app))return Promise.reject(or(t));const r="signIn",s=await r_(t,r,e),i=await bs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ob(t,e){return s_(Os(t),e)}/**
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
 */async function ab(t){const e=Os(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function cb(t,e,n){return Ft(t.app)?Promise.reject(or(t)):ob(Me(t),Vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ab(t),r})}/**
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
 */function lb(t,e){return Me(t).setPersistence(e)}function ub(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function hb(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function fb(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function db(t){return Me(t).signOut()}const ga="__sak";/**
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
 */class i_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ga,"1"),this.storage.removeItem(ga),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const pb=1e3,mb=10;class o_ extends i_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);DR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}o_.type="LOCAL";const a_=o_;/**
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
 */class c_ extends i_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}c_.type="SESSION";const l_=c_;/**
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
 */function gb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Qa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await gb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qa.receivers=[];/**
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
 */function bu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _b{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=bu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function hn(){return window}function yb(t){hn().location.href=t}/**
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
 */function u_(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function Eb(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tb(){return navigator?.serviceWorker?.controller||null}function vb(){return u_()?self:null}/**
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
 */const h_="firebaseLocalStorageDb",Ib=1,_a="firebaseLocalStorage",f_="fbase_key";class so{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xa(t,e){return t.transaction([_a],e?"readwrite":"readonly").objectStore(_a)}function wb(){const t=indexedDB.deleteDatabase(h_);return new so(t).toPromise()}function bl(){const t=indexedDB.open(h_,Ib);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_a,{keyPath:f_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_a)?e(r):(r.close(),await wb(),e(await bl()))})})}async function Cd(t,e,n){const r=Xa(t,!0).put({[f_]:e,value:n});return new so(r).toPromise()}async function Ab(t,e){const n=Xa(t,!1).get(e),r=await new so(n).toPromise();return r===void 0?null:r.value}function kd(t,e){const n=Xa(t,!0).delete(e);return new so(n).toPromise()}const Rb=800,bb=3;class d_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return u_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qa._getInstance(vb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Eb(),!this.activeServiceWorker)return;this.sender=new _b(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bl();return await Cd(e,ga,"1"),await kd(e,ga),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ab(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xa(s,!1).getAll();return new so(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}d_.type="LOCAL";const Sb=d_;new no(3e4,6e4);/**
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
 */function Pb(t,e){return e?Pn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Su extends Au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Cb(t){return s_(t.auth,new Su(t),t.bypassAuthState)}function kb(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),ib(n,new Su(t),t.bypassAuthState)}async function Nb(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),sb(n,new Su(t),t.bypassAuthState)}/**
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
 */class p_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cb;case"linkViaPopup":case"linkViaRedirect":return Nb;case"reauthViaPopup":case"reauthViaRedirect":return kb;default:Yt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Db=new no(2e3,1e4);class hs extends p_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hs.currentPopupAction&&hs.currentPopupAction.cancel(),hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=bu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Db.get())};e()}}hs.currentPopupAction=null;/**
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
 */const Ob="pendingRedirect",$o=new Map;class Vb extends p_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$o.get(this.auth._key());if(!e){try{const r=await xb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$o.set(this.auth._key(),e)}return this.bypassAuthState||$o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xb(t,e){const n=Ub(e),r=Mb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Lb(t,e){$o.set(t._key(),e)}function Mb(t){return Pn(t._redirectPersistence)}function Ub(t){return jo(Ob,t.config.apiKey,t.name)}async function Fb(t,e,n=!1){if(Ft(t.app))return Promise.reject(or(t));const r=Os(t),s=Pb(r,e),o=await new Vb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Bb=600*1e3;class jb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$b(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!m_(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(un(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nd(e))}saveEventToCache(e){this.cachedEventUids.add(Nd(e)),this.lastProcessedEventTime=Date.now()}}function Nd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function m_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function $b(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return m_(t);default:return!1}}/**
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
 */async function qb(t,e={}){return vr(t,"GET","/v1/projects",e)}/**
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
 */const Hb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zb=/^https?/;async function Wb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qb(t);for(const n of e)try{if(Kb(n))return}catch{}Yt(t,"unauthorized-domain")}function Kb(t){const e=Al(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zb.test(n))return!1;if(Hb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Gb=new no(3e4,6e4);function Dd(){const t=hn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qb(t){return new Promise((e,n)=>{function r(){Dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dd(),n(un(t,"network-request-failed"))},timeout:Gb.get()})}if(hn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(hn().gapi?.load)r();else{const s=jR("iframefcb");return hn()[s]=()=>{gapi.load?r():n(un(t,"network-request-failed"))},Zg(`${BR()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw qo=null,e})}let qo=null;function Xb(t){return qo=qo||Qb(t),qo}/**
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
 */const Yb=new no(5e3,15e3),Jb="__/auth/iframe",Zb="emulator/auth/iframe",eS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nS(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vu(e,Zb):`https://${t.config.authDomain}/${Jb}`,r={apiKey:e.apiKey,appName:t.name,v:Gr},s=tS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${to(r).slice(1)}`}async function rS(t){const e=await Xb(t),n=hn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:nS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),c=hn().setTimeout(()=>{i(o)},Yb.get());function l(){hn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const sS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iS=500,oS=600,aS="_blank",cS="http://localhost";class Od{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lS(t,e,n,r=iS,s=oS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...sS,width:r.toString(),height:s.toString(),top:i,left:o},u=Et().toLowerCase();n&&(c=Wg(u)?aS:n),Hg(u)&&(e=e||cS,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[E,P])=>`${m}${E}=${P},`,"");if(NR(u)&&c!=="_self")return uS(e||"",c),new Od(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Od(p)}function uS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const hS="__/auth/handler",fS="emulator/auth/handler",dS=encodeURIComponent("fac");async function Vd(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gr,eventId:s};if(e instanceof n_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ro){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${dS}=${encodeURIComponent(l)}`:"";return`${pS(t)}?${to(c).slice(1)}${u}`}function pS({config:t}){return t.emulator?vu(t,fS):`https://${t.authDomain}/${hS}`}/**
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
 */const Gc="webStorageSupport";class mS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=l_,this._completeRedirectFn=Fb,this._overrideRedirectResult=Lb}async _openPopup(e,n,r,s){Dn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Vd(e,n,r,Al(),s);return lS(e,i,bu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Vd(e,n,r,Al(),s);return yb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rS(e),r=new jb(e);return n.register("authEvent",s=>(ae(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gc,{type:Gc},s=>{const i=s?.[0]?.[Gc];i!==void 0&&n(!!i),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yg()||zg()||wu()}}const gS=mS;var xd="@firebase/auth",Ld="1.12.0";/**
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
 */class _S{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ES(t){$r(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jg(t)},u=new MR(r,s,i,l);return KR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$r(new fr("auth-internal",e=>{const n=Os(e.getProvider("auth").getImmediate());return(r=>new _S(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(xd,Ld,yS(t)),ln(xd,Ld,"esm2020")}/**
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
 */const TS=300,vS=Cg("authIdTokenMaxAge")||TS;let Md=null;const IS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vS)return;const s=n?.token;Md!==s&&(Md=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ho(t=Eu()){const e=Wa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WR(t,{popupRedirectResolver:gS,persistence:[Sb,a_,l_]}),r=Cg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=IS(i.toString());hb(n,o,()=>o(n.currentUser)),ub(n,c=>o(c))}}const s=bg("auth");return s&&GR(n,`http://${s}`),n}function wS(){return document.getElementsByTagName("head")?.[0]??document}UR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",wS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ES("Browser");const AS=EI("auth",()=>{const t=Ni(null),e=Ni(!0);return{user:t,loading:e,login:async(i,o)=>{const c=Ho(),l=await cb(c,i,o);t.value={email:l.user.email??""}},logout:async()=>{const i=Ho();await db(i),t.value=null},fetchUser:()=>new Promise(i=>{const o=Ho();fb(o,c=>{t.value=c?{email:c.email??""}:null,e.value=!1,i()})})}}),RS=[{path:"/blog/c-programming-language",name:"c-programming",component:()=>Be(()=>import("./CProgrammingIndex-C0O0_jDA.js"),__vite__mapDeps([0,1,2])),meta:{title:"C Programming Tutorial",icon:"/ralphmaron.png"}},{path:"/blog/c-introduction",name:"c-introduction",component:()=>Be(()=>import("./IntroductionIndex-CXo2rhpx.js"),__vite__mapDeps([3,1,2,4,5,6,7,8])),meta:{title:"C Language Introduction",icon:"/ralphmaron.png"}},{path:"/blog/c-compilation-process",name:"c-compilation-process",component:()=>Be(()=>import("./CompilationProcessIndex-D7_fnYzz.js"),__vite__mapDeps([9,1,2])),meta:{title:"C Compilation Process",icon:"/ralphmaron.png"}},{path:"/blog/c-identifiers",name:"c-identifiers",component:()=>Be(()=>import("./IdentifiersIndex-JBvhmhMZ.js"),__vite__mapDeps([10,1,2,4,5,6,7,8,11])),meta:{title:"Identifiers in C",icon:"/ralphmaron.png"}},{path:"/blog/c-keywords",name:"c-keywords",component:()=>Be(()=>import("./KeywordsIndex-D3LFrKK5.js"),__vite__mapDeps([12,1,2,4,5,6,13])),meta:{title:"Identifiers in C",icon:"/ralphmaron.png"}},{path:"/blog/c-variables",name:"c-variables",component:()=>Be(()=>import("./VariablesIndex-CIk576jN.js"),__vite__mapDeps([14,1,2,4,5,6,7,8])),meta:{title:"C Language Variables",icon:"/ralphmaron.png"}},{path:"/blog/c-data-types",name:"c-data-types",component:()=>Be(()=>import("./DataTypeIndex-Bis5PHWd.js"),__vite__mapDeps([15,1,2,4,5,6])),meta:{title:"C Data Types",icon:"/ralphmaron.png"}},{path:"/blog/c-quiz-basics",name:"c-quiz-basics",component:()=>Be(()=>import("./QuizOneIndex-CZlUyApn.js"),__vite__mapDeps([16,1,2])),meta:{title:"Quiz Variables and Data Types in C",icon:"/ralphmaron.png"}},{path:"/blog/c-input-output",name:"c-input-output",component:()=>Be(()=>import("./InputAndOutputIndex-BF6yMyQp.js"),__vite__mapDeps([17,1,2])),meta:{title:"C Input and Output",icon:"/ralphmaron.png"}},{path:"/blog/c-operators",name:"c-operators",component:()=>Be(()=>import("./OperatorsIndex-g6IV7mLf.js"),__vite__mapDeps([18,1,2])),meta:{title:"C Operators",icon:"/ralphmaron.png"}},{path:"/blog/c-quiz-io-operators",name:"c-quiz-io-operators",component:()=>Be(()=>import("./QuizTwoIndex-buIaiK-m.js"),__vite__mapDeps([19,1,2])),meta:{title:"C - Quiz Two",icon:"/ralphmaron.png"}},{path:"/blog/c-conditional-statements",name:"c-conditional-statements",component:()=>Be(()=>import("./ConditionalStatementsIndex-lLss-c1l.js"),__vite__mapDeps([20,1,2])),meta:{title:"Conditional Statements",icon:"/ralphmaron.png"}},{path:"/blog/c-loops",name:"c-loops",component:()=>Be(()=>import("./LoopsIndex-DEoh_8gN.js"),__vite__mapDeps([21,1,2])),meta:{title:"Conditional Statements",icon:"/ralphmaron.png"}},{path:"/blog/c-quiz-conditional-loops",name:"c-quiz-conditional-loops",component:()=>Be(()=>import("./QuizThreeIndex-DRR3x7NW.js"),__vite__mapDeps([22,1,2])),meta:{title:"Conditional Statements",icon:"/ralphmaron.png"}}],bS=[...RS],SS=[{path:"/private/login",name:"login",component:()=>Be(()=>import("./LoginIndex-BSOBVatx.js"),__vite__mapDeps([23,24])),meta:{title:"Login",icon:"/favicon.jpg"}},{path:"/private/dashboard",name:"dashboard",component:()=>Be(()=>import("./DashboardIndex-DgAkfths.js"),__vite__mapDeps([25,26,27,28])),meta:{requiresAuth:!0,title:"Dashboard",icon:"/favicon.jpg"}},{path:"/private/memories",name:"memories",component:()=>Be(()=>import("./MemoryListIndex-pwykLfpP.js"),__vite__mapDeps([29,26,27,28,30,31,32])),meta:{requiresAuth:!0,title:"Memories",icon:"/favicon.jpg"}},{path:"/private/details/:id",name:"details",component:()=>Be(()=>import("./DetailsIndex-CoKkiRm-.js"),__vite__mapDeps([33,26,27,28,31,30,34])),meta:{requiresAuth:!0,title:"Details",icon:"/favicon.jpg"}},{path:"/private/new-memory",name:"new-memory",component:()=>Be(()=>import("./NewMemoryIndex-Dr1IEtmw.js"),__vite__mapDeps([35,26,27,28,31])),meta:{requiresAuth:!0,title:"New Memory",icon:"/favicon.jpg"}}],g_=Pw({history:rw(),routes:[{path:"/",name:"portfolio",component:()=>Be(()=>import("./PortfolioIndex-Dkk-acuj.js"),__vite__mapDeps([36,27,5,37])),meta:{title:"Ralph Maron Eda",icon:"/ralphmaron.png"}},{path:"/blog",name:"blog",component:()=>Be(()=>import("./BlogIndex-B6lrOqX-.js"),__vite__mapDeps([38,1,2,39])),meta:{title:"Blogs",icon:"/ralphmaron.png"}},...bS,...SS,{path:"/:pathMatch(.*)*",name:"not-found",component:()=>Be(()=>import("./NotFound-Bh9tNGqH.js"),[]),meta:{title:"Page Not Found",icon:"/ralphmaron.png"}}],scrollBehavior(t){return t.hash?{el:t.hash,behavior:"smooth"}:{top:0}}});g_.beforeEach(async(t,e,n)=>{const r=AS();if(t.meta.requiresAuth&&(!r.user&&r.loading&&await r.fetchUser(),!r.user))return n({name:"login"});if(t.meta?.title&&(document.title=t.meta.title),t.meta?.icon){const s=document.querySelector("link[rel~='icon']")||document.createElement("link");s.rel="icon",s.href=t.meta.icon,document.head.appendChild(s)}n()});var PS="firebase",CS="12.7.0";/**
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
 */ln(PS,CS,"app");/**
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
 */const __="firebasestorage.googleapis.com",y_="storageBucket",kS=120*1e3,NS=600*1e3;/**
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
 */class $e extends yn{constructor(e,n,r=0){super(Qc(e),`Firebase Storage: ${n} (${Qc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var je;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(je||(je={}));function Qc(t){return"storage/"+t}function Pu(){const t="An unknown error occurred, please check the error payload for server response.";return new $e(je.UNKNOWN,t)}function DS(t){return new $e(je.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function OS(t){return new $e(je.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function VS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $e(je.UNAUTHENTICATED,t)}function xS(){return new $e(je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function LS(t){return new $e(je.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function MS(){return new $e(je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function US(){return new $e(je.CANCELED,"User canceled the upload/download.")}function FS(t){return new $e(je.INVALID_URL,"Invalid URL '"+t+"'.")}function BS(t){return new $e(je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function jS(){return new $e(je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+y_+"' property when initializing the app?")}function $S(){return new $e(je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qS(){return new $e(je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HS(t){return new $e(je.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Sl(t){return new $e(je.INVALID_ARGUMENT,t)}function E_(){return new $e(je.APP_DELETED,"The Firebase app was deleted.")}function zS(t){return new $e(je.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ai(t,e){return new $e(je.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ii(t){throw new $e(je.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=xt.makeFromUrl(e,n)}catch{return new xt(e,"")}if(r.path==="")return r;throw BS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(H){H.path_=decodeURIComponent(H.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),P={bucket:1,path:3},N=n===__?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",B=new RegExp(`^https?://${N}/${s}/${D}`,"i"),j=[{regex:c,indices:l,postModify:i},{regex:E,indices:P,postModify:u},{regex:B,indices:{bucket:1,path:2},postModify:u}];for(let H=0;H<j.length;H++){const Z=j[H],ie=Z.regex.exec(e);if(ie){const b=ie[Z.indices.bucket];let y=ie[Z.indices.path];y||(y=""),r=new xt(b,y),Z.postModify(r);break}}if(r==null)throw FS(e);return r}}class WS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function KS(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function f(...D){u||(u=!0,e.apply(null,D))}function p(D){s=setTimeout(()=>{s=null,t(E,l())},D)}function m(){i&&clearTimeout(i)}function E(D,...B){if(u){m();return}if(D){m(),f.call(null,D,...B);return}if(l()||o){m(),f.call(null,D,...B);return}r<64&&(r*=2);let j;c===1?(c=2,j=0):j=(r+Math.random())*1e3,p(j)}let P=!1;function N(D){P||(P=!0,m(),!u&&(s!==null?(D||(c=2),clearTimeout(s),p(0)):D||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function GS(t){t(!1)}/**
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
 */function QS(t){return t!==void 0}function XS(t){return typeof t=="object"&&!Array.isArray(t)}function Cu(t){return typeof t=="string"||t instanceof String}function Ud(t){return ku()&&t instanceof Blob}function ku(){return typeof Blob<"u"}function Fd(t,e,n,r){if(r<e)throw Sl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Sl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Nu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function T_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Br;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Br||(Br={}));/**
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
 */function YS(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class JS{constructor(e,n,r,s,i,o,c,l,u,f,p,m=!0,E=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,N)=>{this.resolve_=P,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new So(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Br.NO_ERROR,l=i.getStatus();if(!c||YS(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Br.ABORT;r(!1,new So(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new So(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());QS(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=Pu();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?E_():US();o(l)}else{const l=MS();o(l)}};this.canceled_?n(!1,new So(!1,null,!0)):this.backoffId_=KS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&GS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class So{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ZS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rP(t,e,n,r,s,i,o=!0,c=!1){const l=T_(t.urlParams),u=t.url+l,f=Object.assign({},t.headers);return tP(f,e),ZS(f,n),eP(f,i),nP(f,r),new JS(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,c)}/**
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
 */function sP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function iP(...t){const e=sP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ku())return new Blob(t);throw new $e(je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function aP(t){if(typeof atob>"u")throw HS("base-64");return atob(t)}/**
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
 */const an={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xc{constructor(e,n){this.data=e,this.contentType=n||null}}function cP(t,e){switch(t){case an.RAW:return new Xc(v_(e));case an.BASE64:case an.BASE64URL:return new Xc(I_(t,e));case an.DATA_URL:return new Xc(uP(e),hP(e))}throw Pu()}function v_(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function lP(t){let e;try{e=decodeURIComponent(t)}catch{throw Ai(an.DATA_URL,"Malformed data URL.")}return v_(e)}function I_(t,e){switch(t){case an.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ai(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case an.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ai(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=aP(e)}catch(s){throw s.message.includes("polyfill")?s:Ai(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class w_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ai(an.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=fP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function uP(t){const e=new w_(t);return e.base64?I_(an.BASE64,e.rest):lP(e.rest)}function hP(t){return new w_(t).contentType}function fP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class er{constructor(e,n){let r=0,s="";Ud(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ud(this.data_)){const r=this.data_,s=oP(r,e,n);return s===null?null:new er(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new er(r,!0)}}static getBlob(...e){if(ku()){const n=e.map(r=>r instanceof er?r.data_:r);return new er(iP.apply(null,n))}else{const n=e.map(o=>Cu(o)?cP(an.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new er(s,!0)}}uploadData(){return this.data_}}/**
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
 */function A_(t){let e;try{e=JSON.parse(t)}catch{return null}return XS(e)?e:null}/**
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
 */function dP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function R_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function mP(t,e){return e}class vt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||mP}}let Po=null;function gP(t){return!Cu(t)||t.length<2?t:R_(t)}function b_(){if(Po)return Po;const t=[];t.push(new vt("bucket")),t.push(new vt("generation")),t.push(new vt("metageneration")),t.push(new vt("name","fullPath",!0));function e(i,o){return gP(o)}const n=new vt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new vt("size");return s.xform=r,t.push(s),t.push(new vt("timeCreated")),t.push(new vt("updated")),t.push(new vt("md5Hash",null,!0)),t.push(new vt("cacheControl",null,!0)),t.push(new vt("contentDisposition",null,!0)),t.push(new vt("contentEncoding",null,!0)),t.push(new vt("contentLanguage",null,!0)),t.push(new vt("contentType",null,!0)),t.push(new vt("metadata","customMetadata",!0)),Po=t,Po}function _P(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new xt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function yP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return _P(r,t),r}function S_(t,e,n){const r=A_(e);return r===null?null:yP(t,r,n)}function EP(t,e,n,r){const s=A_(e);if(s===null||!Cu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,p=t.fullPath,m="/b/"+o(f)+"/o/"+o(p),E=Nu(m,n,r),P=T_({alt:"media",token:u});return E+P})[0]}function TP(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class P_{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function C_(t){if(!t)throw Pu()}function vP(t,e){function n(r,s){const i=S_(t,s,e);return C_(i!==null),i}return n}function IP(t,e){function n(r,s){const i=S_(t,s,e);return C_(i!==null),EP(i,s,t.host,t._protocol)}return n}function k_(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=xS():s=VS():n.getStatus()===402?s=OS(t.bucket):n.getStatus()===403?s=LS(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function wP(t){const e=k_(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=DS(t.path)),i.serverResponse=s.serverResponse,i}return n}function AP(t,e,n){const r=e.fullServerUrl(),s=Nu(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new P_(s,i,IP(t,n),o);return c.errorHandler=wP(e),c}function RP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function bP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=RP(null,e)),r}function SP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let j="";for(let H=0;H<2;H++)j=j+Math.random().toString().slice(2);return j}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=bP(e,r,s),f=TP(u,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",E=er.getBlob(p,r,m);if(E===null)throw $S();const P={name:u.fullPath},N=Nu(i,t.host,t._protocol),D="POST",B=t.maxUploadRetryTime,F=new P_(N,D,vP(t,n),B);return F.urlParams=P,F.headers=o,F.body=E.uploadData(),F.errorHandler=k_(e),F}class PP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw ii("cannot .send() more than once");if(Tr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ii("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ii("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ii("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ii("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class CP extends PP{initXhr(){this.xhr_.responseType="text"}}function N_(){return new CP}/**
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
 */class Hr{constructor(e,n){this._service=e,n instanceof xt?this._location=n:this._location=xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hr(e,n)}get root(){const e=new xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return R_(this._location.path)}get storage(){return this._service}get parent(){const e=dP(this._location.path);if(e===null)return null;const n=new xt(this._location.bucket,e);return new Hr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zS(e)}}function kP(t,e,n){t._throwIfRoot("uploadBytes");const r=SP(t.storage,t._location,b_(),new er(e,!0),n);return t.storage.makeRequestWithTokens(r,N_).then(s=>({metadata:s,ref:t}))}function NP(t){t._throwIfRoot("getDownloadURL");const e=AP(t.storage,t._location,b_());return t.storage.makeRequestWithTokens(e,N_).then(n=>{if(n===null)throw qS();return n})}function DP(t,e){const n=pP(t._location.path,e),r=new xt(t._location.bucket,n);return new Hr(t.storage,r)}/**
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
 */function OP(t){return/^[A-Za-z]+:\/\//.test(t)}function VP(t,e){return new Hr(t,e)}function D_(t,e){if(t instanceof Du){const n=t;if(n._bucket==null)throw jS();const r=new Hr(n,n._bucket);return e!=null?D_(r,e):r}else return e!==void 0?DP(t,e):t}function xP(t,e){if(e&&OP(e)){if(t instanceof Du)return VP(t,e);throw Sl("To use ref(service, url), the first argument must be a Storage instance.")}else return D_(t,e)}function Bd(t,e){const n=e?.[y_];return n==null?null:xt.makeFromBucketSpec(n,t)}function LP(t,e,n,r={}){t.host=`${e}:${n}`;const s=Tr(e);s&&(mu(`https://${t.host}/b`),gu("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:kg(i,t.app.options.projectId))}class Du{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=__,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kS,this._maxUploadRetryTime=NS,this._requests=new Set,s!=null?this._bucket=xt.makeFromBucketSpec(s,this._host):this._bucket=Bd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=xt.makeFromBucketSpec(this._url,e):this._bucket=Bd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new WS(E_());{const o=rP(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const jd="@firebase/storage",$d="0.14.0";/**
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
 */const O_="storage";function Ek(t,e,n){return t=Me(t),kP(t,e,n)}function Tk(t){return t=Me(t),NP(t)}function vk(t,e){return t=Me(t),xP(t,e)}function MP(t=Eu(),e){t=Me(t);const r=Wa(t,O_).getImmediate({identifier:e}),s=Sg("storage");return s&&UP(r,...s),r}function UP(t,e,n,r={}){LP(t,e,n,r)}function FP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Du(n,r,s,e,Gr)}function BP(){$r(new fr(O_,FP,"PUBLIC").setMultipleInstances(!0)),ln(jd,$d,""),ln(jd,$d,"esm2020")}BP();var qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ar,V_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.F=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(A,w,I){for(var T=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)T[ye-2]=arguments[ye];return y.prototype[w].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,_){_||(_=0);const A=Array(16);if(typeof y=="string")for(var w=0;w<16;++w)A[w]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(w=0;w<16;++w)A[w]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],w=b.g[2];let I=b.g[3],T;T=y+(I^_&(w^I))+A[0]+3614090360&4294967295,y=_+(T<<7&4294967295|T>>>25),T=I+(w^y&(_^w))+A[1]+3905402710&4294967295,I=y+(T<<12&4294967295|T>>>20),T=w+(_^I&(y^_))+A[2]+606105819&4294967295,w=I+(T<<17&4294967295|T>>>15),T=_+(y^w&(I^y))+A[3]+3250441966&4294967295,_=w+(T<<22&4294967295|T>>>10),T=y+(I^_&(w^I))+A[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=I+(w^y&(_^w))+A[5]+1200080426&4294967295,I=y+(T<<12&4294967295|T>>>20),T=w+(_^I&(y^_))+A[6]+2821735955&4294967295,w=I+(T<<17&4294967295|T>>>15),T=_+(y^w&(I^y))+A[7]+4249261313&4294967295,_=w+(T<<22&4294967295|T>>>10),T=y+(I^_&(w^I))+A[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=I+(w^y&(_^w))+A[9]+2336552879&4294967295,I=y+(T<<12&4294967295|T>>>20),T=w+(_^I&(y^_))+A[10]+4294925233&4294967295,w=I+(T<<17&4294967295|T>>>15),T=_+(y^w&(I^y))+A[11]+2304563134&4294967295,_=w+(T<<22&4294967295|T>>>10),T=y+(I^_&(w^I))+A[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=I+(w^y&(_^w))+A[13]+4254626195&4294967295,I=y+(T<<12&4294967295|T>>>20),T=w+(_^I&(y^_))+A[14]+2792965006&4294967295,w=I+(T<<17&4294967295|T>>>15),T=_+(y^w&(I^y))+A[15]+1236535329&4294967295,_=w+(T<<22&4294967295|T>>>10),T=y+(w^I&(_^w))+A[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=I+(_^w&(y^_))+A[6]+3225465664&4294967295,I=y+(T<<9&4294967295|T>>>23),T=w+(y^_&(I^y))+A[11]+643717713&4294967295,w=I+(T<<14&4294967295|T>>>18),T=_+(I^y&(w^I))+A[0]+3921069994&4294967295,_=w+(T<<20&4294967295|T>>>12),T=y+(w^I&(_^w))+A[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=I+(_^w&(y^_))+A[10]+38016083&4294967295,I=y+(T<<9&4294967295|T>>>23),T=w+(y^_&(I^y))+A[15]+3634488961&4294967295,w=I+(T<<14&4294967295|T>>>18),T=_+(I^y&(w^I))+A[4]+3889429448&4294967295,_=w+(T<<20&4294967295|T>>>12),T=y+(w^I&(_^w))+A[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=I+(_^w&(y^_))+A[14]+3275163606&4294967295,I=y+(T<<9&4294967295|T>>>23),T=w+(y^_&(I^y))+A[3]+4107603335&4294967295,w=I+(T<<14&4294967295|T>>>18),T=_+(I^y&(w^I))+A[8]+1163531501&4294967295,_=w+(T<<20&4294967295|T>>>12),T=y+(w^I&(_^w))+A[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=I+(_^w&(y^_))+A[2]+4243563512&4294967295,I=y+(T<<9&4294967295|T>>>23),T=w+(y^_&(I^y))+A[7]+1735328473&4294967295,w=I+(T<<14&4294967295|T>>>18),T=_+(I^y&(w^I))+A[12]+2368359562&4294967295,_=w+(T<<20&4294967295|T>>>12),T=y+(_^w^I)+A[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=I+(y^_^w)+A[8]+2272392833&4294967295,I=y+(T<<11&4294967295|T>>>21),T=w+(I^y^_)+A[11]+1839030562&4294967295,w=I+(T<<16&4294967295|T>>>16),T=_+(w^I^y)+A[14]+4259657740&4294967295,_=w+(T<<23&4294967295|T>>>9),T=y+(_^w^I)+A[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=I+(y^_^w)+A[4]+1272893353&4294967295,I=y+(T<<11&4294967295|T>>>21),T=w+(I^y^_)+A[7]+4139469664&4294967295,w=I+(T<<16&4294967295|T>>>16),T=_+(w^I^y)+A[10]+3200236656&4294967295,_=w+(T<<23&4294967295|T>>>9),T=y+(_^w^I)+A[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=I+(y^_^w)+A[0]+3936430074&4294967295,I=y+(T<<11&4294967295|T>>>21),T=w+(I^y^_)+A[3]+3572445317&4294967295,w=I+(T<<16&4294967295|T>>>16),T=_+(w^I^y)+A[6]+76029189&4294967295,_=w+(T<<23&4294967295|T>>>9),T=y+(_^w^I)+A[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=I+(y^_^w)+A[12]+3873151461&4294967295,I=y+(T<<11&4294967295|T>>>21),T=w+(I^y^_)+A[15]+530742520&4294967295,w=I+(T<<16&4294967295|T>>>16),T=_+(w^I^y)+A[2]+3299628645&4294967295,_=w+(T<<23&4294967295|T>>>9),T=y+(w^(_|~I))+A[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=I+(_^(y|~w))+A[7]+1126891415&4294967295,I=y+(T<<10&4294967295|T>>>22),T=w+(y^(I|~_))+A[14]+2878612391&4294967295,w=I+(T<<15&4294967295|T>>>17),T=_+(I^(w|~y))+A[5]+4237533241&4294967295,_=w+(T<<21&4294967295|T>>>11),T=y+(w^(_|~I))+A[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=I+(_^(y|~w))+A[3]+2399980690&4294967295,I=y+(T<<10&4294967295|T>>>22),T=w+(y^(I|~_))+A[10]+4293915773&4294967295,w=I+(T<<15&4294967295|T>>>17),T=_+(I^(w|~y))+A[1]+2240044497&4294967295,_=w+(T<<21&4294967295|T>>>11),T=y+(w^(_|~I))+A[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=I+(_^(y|~w))+A[15]+4264355552&4294967295,I=y+(T<<10&4294967295|T>>>22),T=w+(y^(I|~_))+A[6]+2734768916&4294967295,w=I+(T<<15&4294967295|T>>>17),T=_+(I^(w|~y))+A[13]+1309151649&4294967295,_=w+(T<<21&4294967295|T>>>11),T=y+(w^(_|~I))+A[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=I+(_^(y|~w))+A[11]+3174756917&4294967295,I=y+(T<<10&4294967295|T>>>22),T=w+(y^(I|~_))+A[2]+718787259&4294967295,w=I+(T<<15&4294967295|T>>>17),T=_+(I^(w|~y))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(w+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+I&4294967295}r.prototype.v=function(b,y){y===void 0&&(y=b.length);const _=y-this.blockSize,A=this.C;let w=this.h,I=0;for(;I<y;){if(w==0)for(;I<=_;)s(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<y;)if(A[w++]=b.charCodeAt(I++),w==this.blockSize){s(this,A),w=0;break}}else for(;I<y;)if(A[w++]=b[I++],w==this.blockSize){s(this,A),w=0;break}}this.h=w,this.o+=y},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,_=0;_<4;++_)for(let A=0;A<32;A+=8)b[y++]=this.g[_]>>>A&255;return b};function i(b,y){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function o(b,y){this.h=y;const _=[];let A=!0;for(let w=b.length-1;w>=0;w--){const I=b[w]|0;A&&I==y||(_[w]=I,A=!1)}this.g=_}var c={};function l(b){return-128<=b&&b<128?i(b,function(y){return new o([y|0],y<0?-1:0)}):new o([b|0],b<0?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return D(u(-b));const y=[];let _=1;for(let A=0;b>=_;A++)y[A]=b/_|0,_*=4294967296;return new o(y,0)}function f(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return D(f(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(y,8));let A=p;for(let I=0;I<b.length;I+=8){var w=Math.min(8,b.length-I);const T=parseInt(b.substring(I,I+w),y);w<8?(w=u(Math.pow(y,w)),A=A.j(w).add(u(T))):(A=A.j(_),A=A.add(u(T)))}return A}var p=l(0),m=l(1),E=l(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();let b=0,y=1;for(let _=0;_<this.g.length;_++){const A=this.i(_);b+=(A>=0?A:4294967296+A)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(P(this))return"0";if(N(this))return"-"+D(this).toString(b);const y=u(Math.pow(b,6));var _=this;let A="";for(;;){const w=H(_,y).g;_=B(_,w.j(y));let I=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=w,P(_))return I+A;for(;I.length<6;)I="0"+I;A=I+A}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function P(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function N(b){return b.h==-1}t.l=function(b){return b=B(this,b),N(b)?-1:P(b)?0:1};function D(b){const y=b.g.length,_=[];for(let A=0;A<y;A++)_[A]=~b.g[A];return new o(_,~b.h).add(m)}t.abs=function(){return N(this)?D(this):this},t.add=function(b){const y=Math.max(this.g.length,b.g.length),_=[];let A=0;for(let w=0;w<=y;w++){let I=A+(this.i(w)&65535)+(b.i(w)&65535),T=(I>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);A=T>>>16,I&=65535,T&=65535,_[w]=T<<16|I}return new o(_,_[_.length-1]&-2147483648?-1:0)};function B(b,y){return b.add(D(y))}t.j=function(b){if(P(this)||P(b))return p;if(N(this))return N(b)?D(this).j(D(b)):D(D(this).j(b));if(N(b))return D(this.j(D(b)));if(this.l(E)<0&&b.l(E)<0)return u(this.m()*b.m());const y=this.g.length+b.g.length,_=[];for(var A=0;A<2*y;A++)_[A]=0;for(A=0;A<this.g.length;A++)for(let w=0;w<b.g.length;w++){const I=this.i(A)>>>16,T=this.i(A)&65535,ye=b.i(w)>>>16,Le=b.i(w)&65535;_[2*A+2*w]+=T*Le,F(_,2*A+2*w),_[2*A+2*w+1]+=I*Le,F(_,2*A+2*w+1),_[2*A+2*w+1]+=T*ye,F(_,2*A+2*w+1),_[2*A+2*w+2]+=I*ye,F(_,2*A+2*w+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new o(_,0)};function F(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function j(b,y){this.g=b,this.h=y}function H(b,y){if(P(y))throw Error("division by zero");if(P(b))return new j(p,p);if(N(b))return y=H(D(b),y),new j(D(y.g),D(y.h));if(N(y))return y=H(b,D(y)),new j(D(y.g),y.h);if(b.g.length>30){if(N(b)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,A=y;A.l(b)<=0;)_=Z(_),A=Z(A);var w=ie(_,1),I=ie(A,1);for(A=ie(A,2),_=ie(_,2);!P(A);){var T=I.add(A);T.l(b)<=0&&(w=w.add(_),I=T),A=ie(A,1),_=ie(_,1)}return y=B(b,w.j(y)),new j(w,y)}for(w=p;b.l(y)>=0;){for(_=Math.max(1,Math.floor(b.m()/y.m())),A=Math.ceil(Math.log(_)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),I=u(_),T=I.j(y);N(T)||T.l(b)>0;)_-=A,I=u(_),T=I.j(y);P(I)&&(I=m),w=w.add(I),b=B(b,T)}return new j(w,b)}t.B=function(b){return H(this,b).h},t.and=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<y;A++)_[A]=this.i(A)&b.i(A);return new o(_,this.h&b.h)},t.or=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<y;A++)_[A]=this.i(A)|b.i(A);return new o(_,this.h|b.h)},t.xor=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<y;A++)_[A]=this.i(A)^b.i(A);return new o(_,this.h^b.h)};function Z(b){const y=b.g.length+1,_=[];for(let A=0;A<y;A++)_[A]=b.i(A)<<1|b.i(A-1)>>>31;return new o(_,b.h)}function ie(b,y){const _=y>>5;y%=32;const A=b.g.length-_,w=[];for(let I=0;I<A;I++)w[I]=y>0?b.i(I+_)>>>y|b.i(I+_+1)<<32-y:b.i(I+_);return new o(w,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,V_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,ar=o}).apply(typeof qd<"u"?qd:typeof self<"u"?self:typeof window<"u"?window:{});var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var x_,li,L_,zo,Pl,M_,U_,F_;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Co=="object"&&Co];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,C,k){for(var W=Array(arguments.length-2),de=2;de<arguments.length;de++)W[de-2]=arguments[de];return h.prototype[C].apply(g,W)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function P(a,h){for(let g=1;g<arguments.length;g++){const C=arguments[g];var d=typeof C;if(d=d!="object"?d:C?Array.isArray(C)?"array":d:"null",d=="array"||d=="object"&&typeof C.length=="number"){d=a.length||0;const k=C.length||0;a.length=d+k;for(let W=0;W<k;W++)a[d+W]=C[W]}else a.push(C)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function B(){var a=b;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class F{constructor(){this.h=this.g=null}add(h,d){const g=j.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var j=new N(()=>new H,a=>a.reset());class H{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,ie=!1,b=new F,y=()=>{const a=Promise.resolve(void 0);Z=()=>{a.then(_)}};function _(){for(var a;a=B();){try{a.h.call(a.g)}catch(d){D(d)}var h=j;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ie=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function ye(a,h){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(ye,w),ye.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ye.Z.h.call(this)},ye.prototype.h=function(){ye.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Le="closure_listenable_"+(Math.random()*1e6|0),be=0;function fe(a,h,d,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=C,this.key=++be,this.da=this.fa=!1}function Ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Rt(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function Zt(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Pt(a){const h={};for(const d in a)h[d]=a[d];return h}const nt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function En(a,h){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let k=0;k<nt.length;k++)d=nt[k],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Ht(a){this.src=a,this.g={},this.h=0}Ht.prototype.add=function(a,h,d,g,C){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const W=lt(a,h,g,C);return W>-1?(h=a[W],d||(h.fa=!1)):(h=new fe(h,this.src,k,!!g,C),h.fa=d,a.push(h)),h};function Ln(a,h){const d=h.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,h,void 0),k;(k=C>=0)&&Array.prototype.splice.call(g,C,1),k&&(Ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function lt(a,h,d,g){for(let C=0;C<a.length;++C){const k=a[C];if(!k.da&&k.listener==h&&k.capture==!!d&&k.ha==g)return C}return-1}var V="closure_lm_"+(Math.random()*1e6|0),Y={};function G(a,h,d,g,C){if(Array.isArray(h)){for(let k=0;k<h.length;k++)G(a,h[k],d,g,C);return null}return d=K(d),a&&a[Le]?a.J(h,d,c(g)?!!g.capture:!1,C):ee(a,h,d,!1,g,C)}function ee(a,h,d,g,C,k){if(!h)throw Error("Invalid event type");const W=c(C)?!!C.capture:!!C;let de=U(a);if(de||(a[V]=de=new Ht(a)),d=de.add(h,d,g,W,k),d.proxy)return d;if(g=Se(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)I||(C=W),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(S(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Se(){function a(d){return h.call(a.src,a.listener,d)}const h=L;return a}function v(a,h,d,g,C){if(Array.isArray(h))for(var k=0;k<h.length;k++)v(a,h[k],d,g,C);else g=c(g)?!!g.capture:!!g,d=K(d),a&&a[Le]?(a=a.i,k=String(h).toString(),k in a.g&&(h=a.g[k],d=lt(h,d,g,C),d>-1&&(Ee(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[k],a.h--)))):a&&(a=U(a))&&(h=a.g[h.toString()],a=-1,h&&(a=lt(h,d,g,C)),(d=a>-1?h[a]:null)&&R(d))}function R(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Le])Ln(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(S(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=U(h))?(Ln(d,a),d.h==0&&(d.src=null,h[V]=null)):Ee(a)}}}function S(a){return a in Y?Y[a]:Y[a]="on"+a}function L(a,h){if(a.da)a=!0;else{h=new ye(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&R(a),a=d.call(g,h)}return a}function U(a){return a=a[V],a instanceof Ht?a:null}var O="__closure_events_fn_"+(Math.random()*1e9>>>0);function K(a){return typeof a=="function"?a:(a[O]||(a[O]=function(h){return a.handleEvent(h)}),a[O])}function z(){A.call(this),this.i=new Ht(this),this.M=this,this.G=null}p(z,A),z.prototype[Le]=!0,z.prototype.removeEventListener=function(a,h,d,g){v(this,a,h,d,g)};function $(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new w(h,a);else if(h instanceof w)h.target=h.target||a;else{var C=h;h=new w(g,a),En(h,C)}C=!0;let k,W;if(d)for(W=d.length-1;W>=0;W--)k=h.g=d[W],C=q(k,g,!0,h)&&C;if(k=h.g=a,C=q(k,g,!0,h)&&C,C=q(k,g,!1,h)&&C,d)for(W=0;W<d.length;W++)k=h.g=d[W],C=q(k,g,!1,h)&&C}z.prototype.N=function(){if(z.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)Ee(d[g]);delete a.g[h],a.h--}}this.G=null},z.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},z.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function q(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let C=!0;for(let k=0;k<h.length;++k){const W=h[k];if(W&&!W.da&&W.capture==d){const de=W.listener,Xe=W.ha||W.src;W.fa&&Ln(a.i,W),C=de.call(Xe,g)!==!1&&C}}return C&&!g.defaultPrevented}function se(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Q(a){a.g=se(()=>{a.g=null,a.i&&(a.i=!1,Q(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ne extends A{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Q(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(a){A.call(this),this.h=a,this.g={}}p(oe,A);var pe=[];function Pe(a){Rt(a.g,function(h,d){this.g.hasOwnProperty(d)&&R(h)},a),a.g={}}oe.prototype.N=function(){oe.Z.N.call(this),Pe(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ve=o.JSON.stringify,ut=o.JSON.parse,ht=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ct(){}function kt(){}var zt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Zr(){w.call(this,"d")}p(Zr,w);function rt(){w.call(this,"c")}p(rt,w);var Je={},Bs=null;function Ar(){return Bs=Bs||new z}Je.Ia="serverreachability";function mh(a){w.call(this,Je.Ia,a)}p(mh,w);function js(a){const h=Ar();$(h,new mh(h))}Je.STAT_EVENT="statevent";function gh(a,h){w.call(this,Je.STAT_EVENT,a),this.stat=h}p(gh,w);function Tt(a){const h=Ar();$(h,new gh(h,a))}Je.Ja="timingevent";function _h(a,h){w.call(this,Je.Ja,a),this.size=h}p(_h,w);function $s(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function qs(){this.g=!0}qs.prototype.ua=function(){this.g=!1};function uE(a,h,d,g,C,k){a.info(function(){if(a.g)if(k){var W="",de=k.split("&");for(let ke=0;ke<de.length;ke++){var Xe=de[ke].split("=");if(Xe.length>1){const Ze=Xe[0];Xe=Xe[1];const tn=Ze.split("_");W=tn.length>=2&&tn[1]=="type"?W+(Ze+"="+Xe+"&"):W+(Ze+"=redacted&")}}}else W=null;else W=k;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+d+`
`+W})}function hE(a,h,d,g,C,k,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+d+`
`+k+" "+W})}function es(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+dE(a,d)+(g?" "+g:"")})}function fE(a,h){a.info(function(){return"TIMEOUT: "+h})}qs.prototype.info=function(){};function dE(a,h){if(!a.g)return h;if(!h)return null;try{const k=JSON.parse(h);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var d=k[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let W=1;W<g.length;W++)g[W]=""}}}}return ve(k)}catch{return h}}var ho={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},yh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Eh;function dc(){}p(dc,Ct),dc.prototype.g=function(){return new XMLHttpRequest},Eh=new dc;function Hs(a){return encodeURIComponent(String(a))}function pE(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Mn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new oe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Th}function Th(){this.i=null,this.g="",this.h=!1}var vh={},pc={};function mc(a,h,d){a.M=1,a.A=po(en(h)),a.u=d,a.R=!0,Ih(a,null)}function Ih(a,h){a.F=Date.now(),fo(a),a.B=en(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),xh(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Th,a.g=Zh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new ne(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(pe[0]=C.toString()),C=pe);for(let k=0;k<C.length;k++){const W=G(d,C[k],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.J?Pt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),js(),uE(a.i,a.v,a.B,a.l,a.S,a.u)}Mn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Bn(a)==3?h.j():this.Y(a)},Mn.prototype.Y=function(a){try{if(a==this.g)e:{const de=Bn(this.g),Xe=this.g.ya(),ke=this.g.ca();if(!(de<3)&&(de!=3||this.g&&(this.h.h||this.g.la()||$h(this.g)))){this.K||de!=4||Xe==7||(Xe==8||ke<=0?js(3):js(2)),gc(this);var h=this.g.ca();this.X=h;var d=mE(this);if(this.o=h==200,hE(this.i,this.v,this.B,this.l,this.S,de,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var k=g;break t}}k=null}if(a=k)es(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,_c(this,a);else{this.o=!1,this.m=3,Tt(12),Rr(this),zs(this);break e}}if(this.R){a=!0;let Ze;for(;!this.K&&this.C<d.length;)if(Ze=gE(this,d),Ze==pc){de==4&&(this.m=4,Tt(14),a=!1),es(this.i,this.l,null,"[Incomplete Response]");break}else if(Ze==vh){this.m=4,Tt(15),es(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else es(this.i,this.l,Ze,null),_c(this,Ze);if(wh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),de!=4||d.length!=0||this.h.h||(this.m=1,Tt(16),a=!1),this.o=this.o&&a,!a)es(this.i,this.l,d,"[Invalid Chunked Response]"),Rr(this),zs(this);else if(d.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Rc(W),W.P=!0,Tt(11))}}else es(this.i,this.l,d,null),_c(this,d);de==4&&Rr(this),this.o&&!this.K&&(de==4?Qh(this.j,this):(this.o=!1,fo(this)))}else kE(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,Tt(12)):(this.m=0,Tt(13)),Rr(this),zs(this)}}}catch{}finally{}};function mE(a){if(!wh(a))return a.g.la();const h=$h(a.g);if(h==="")return"";let d="";const g=h.length,C=Bn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Rr(a),zs(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<g;k++)a.h.h=!0,d+=a.h.i.decode(h[k],{stream:!(C&&k==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function wh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function gE(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?pc:(d=Number(h.substring(d,g)),isNaN(d)?vh:(g+=1,g+d>h.length?pc:(h=h.slice(g,g+d),a.C=g+d,h)))}Mn.prototype.cancel=function(){this.K=!0,Rr(this)};function fo(a){a.T=Date.now()+a.H,Ah(a,a.H)}function Ah(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=$s(u(a.aa,a),h)}function gc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Mn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(fE(this.i,this.B),this.M!=2&&(js(),Tt(17)),Rr(this),this.m=2,zs(this)):Ah(this,this.T-a)};function zs(a){a.j.I==0||a.K||Qh(a.j,a)}function Rr(a){gc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Pe(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function _c(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||yc(d.h,a))){if(!a.L&&yc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Eo(d),_o(d);else break e;Ac(d),Tt(18)}}else d.xa=C[1],0<d.xa-d.K&&C[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=$s(u(d.Va,d),6e3));Sh(d.h)<=1&&d.ta&&(d.ta=void 0)}else Sr(d,11)}else if((a.L||d.g==a)&&Eo(d),!T(h))for(C=d.Ba.g.parse(h),h=0;h<C.length;h++){let ke=C[h];const Ze=ke[0];if(!(Ze<=d.K))if(d.K=Ze,ke=ke[1],d.I==2)if(ke[0]=="c"){d.M=ke[1],d.ba=ke[2];const tn=ke[3];tn!=null&&(d.ka=tn,d.j.info("VER="+d.ka));const Pr=ke[4];Pr!=null&&(d.za=Pr,d.j.info("SVER="+d.za));const jn=ke[5];jn!=null&&typeof jn=="number"&&jn>0&&(g=1.5*jn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const $n=a.g;if($n){const vo=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vo){var k=g.h;k.g||vo.indexOf("spdy")==-1&&vo.indexOf("quic")==-1&&vo.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Ec(k,k.h),k.h=null))}if(g.G){const bc=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;bc&&(g.wa=bc,Ve(g.J,g.G,bc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var W=a;if(g.na=Jh(g,g.L?g.ba:null,g.W),W.L){Ph(g.h,W);var de=W,Xe=g.O;Xe&&(de.H=Xe),de.D&&(gc(de),fo(de)),g.g=W}else Kh(g);d.i.length>0&&yo(d)}else ke[0]!="stop"&&ke[0]!="close"||Sr(d,7);else d.I==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Sr(d,7):wc(d):ke[0]!="noop"&&d.l&&d.l.qa(ke),d.A=0)}}js(4)}catch{}}var _E=class{constructor(a,h){this.g=a,this.map=h}};function Rh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function bh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Sh(a){return a.h?1:a.g?a.g.size:0}function yc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ec(a,h){a.g?a.g.add(h):a.h=h}function Ph(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Rh.prototype.cancel=function(){if(this.i=Ch(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ch(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return E(a.i)}var kh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yE(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let C,k=null;g>=0?(C=a[d].substring(0,g),k=a[d].substring(g+1)):C=a[d],h(C,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Un(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Un?(this.l=a.l,Ws(this,a.j),this.o=a.o,this.g=a.g,Ks(this,a.u),this.h=a.h,Tc(this,Lh(a.i)),this.m=a.m):a&&(h=String(a).match(kh))?(this.l=!1,Ws(this,h[1]||"",!0),this.o=Gs(h[2]||""),this.g=Gs(h[3]||"",!0),Ks(this,h[4]),this.h=Gs(h[5]||"",!0),Tc(this,h[6]||"",!0),this.m=Gs(h[7]||"")):(this.l=!1,this.i=new Xs(null,this.l))}Un.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Qs(h,Nh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Qs(h,Nh,!0),"@"),a.push(Hs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Qs(d,d.charAt(0)=="/"?vE:TE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Qs(d,wE)),a.join("")},Un.prototype.resolve=function(a){const h=en(this);let d=!!a.j;d?Ws(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)Ks(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=h.h.lastIndexOf("/");C!=-1&&(g=h.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const k=[];for(let W=0;W<C.length;){const de=C[W++];de=="."?g&&W==C.length&&k.push(""):de==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),g&&W==C.length&&k.push("")):(k.push(de),g=!0)}g=k.join("/")}else g=C}return d?h.h=g:d=a.i.toString()!=="",d?Tc(h,Lh(a.i)):d=!!a.m,d&&(h.m=a.m),h};function en(a){return new Un(a)}function Ws(a,h,d){a.j=d?Gs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ks(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Tc(a,h,d){h instanceof Xs?(a.i=h,AE(a.i,a.l)):(d||(h=Qs(h,IE)),a.i=new Xs(h,a.l))}function Ve(a,h,d){a.i.set(h,d)}function po(a){return Ve(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Gs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,EE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function EE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Nh=/[#\/\?@]/g,TE=/[#\?:]/g,vE=/[#\?]/g,IE=/[#\?@]/g,wE=/#/g;function Xs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function br(a){a.g||(a.g=new Map,a.h=0,a.i&&yE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Xs.prototype,t.add=function(a,h){br(this),this.i=null,a=ts(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Dh(a,h){br(a),h=ts(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Oh(a,h){return br(a),h=ts(a,h),a.g.has(h)}t.forEach=function(a,h){br(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(h,C,g,this)},this)},this)};function Vh(a,h){br(a);let d=[];if(typeof h=="string")Oh(a,h)&&(d=d.concat(a.g.get(ts(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return br(this),this.i=null,a=ts(this,a),Oh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Vh(this,a),a.length>0?String(a[0]):h):h};function xh(a,h,d){Dh(a,h),d.length>0&&(a.i=null,a.g.set(ts(a,h),E(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const C=Hs(d);d=Vh(this,d);for(let k=0;k<d.length;k++){let W=C;d[k]!==""&&(W+="="+Hs(d[k])),a.push(W)}}return this.i=a.join("&")};function Lh(a){const h=new Xs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ts(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function AE(a,h){h&&!a.j&&(br(a),a.i=null,a.g.forEach(function(d,g){const C=g.toLowerCase();g!=C&&(Dh(this,g),xh(this,C,d))},a)),a.j=h}function RE(a,h){const d=new qs;if(o.Image){const g=new Image;g.onload=f(Fn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(Fn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(Fn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(Fn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function bE(a,h){const d=new qs,g=new AbortController,C=setTimeout(()=>{g.abort(),Fn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(C),k.ok?Fn(d,"TestPingServer: ok",!0,h):Fn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Fn(d,"TestPingServer: error",!1,h)})}function Fn(a,h,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function SE(){this.g=new ht}function vc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(vc,Ct),vc.prototype.g=function(){return new mo(this.i,this.h)};function mo(a,h){z.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(mo,z),t=mo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Js(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ys(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Js(this)),this.g&&(this.readyState=3,Js(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Mh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Mh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ys(this):Js(this),this.readyState==3&&Mh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ys(this))},t.Na=function(a){this.g&&(this.response=a,Ys(this))},t.ga=function(){this.g&&Ys(this)};function Ys(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Js(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Js(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Uh(a){let h="";return Rt(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Ic(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Uh(d),typeof a=="string"?d!=null&&Hs(d):Ve(a,h,d))}function Fe(a){z.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Fe,z);var PE=/^https?$/i,CE=["POST","PUT"];t=Fe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Eh.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(k){Fh(this,k);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())d.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(CE,h,void 0)>=0)||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,W]of d)this.g.setRequestHeader(k,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){Fh(this,k)}};function Fh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Bh(a),go(a)}function Bh(a){a.A||(a.A=!0,$(a,"complete"),$(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,$(this,"complete"),$(this,"abort"),go(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),go(this,!0)),Fe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?jh(this):this.Xa())},t.Xa=function(){jh(this)};function jh(a){if(a.h&&typeof i<"u"){if(a.v&&Bn(a)==4)setTimeout(a.Ca.bind(a),0);else if($(a,"readystatechange"),Bn(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=k===0){let W=String(a.D).match(kh)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),g=!PE.test(W?W.toLowerCase():"")}d=g}if(d)$(a,"complete"),$(a,"success");else{a.o=6;try{var C=Bn(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",Bh(a)}}finally{go(a)}}}}function go(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||$(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Bn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ut(h)}};function $h(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function kE(a){const h={};a=(a.g&&Bn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=pE(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=h[C]||[];h[C]=k,k.push(d)}Zt(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function qh(a){this.za=0,this.i=[],this.j=new qs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Zs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Zs("baseRetryDelayMs",5e3,a),this.Za=Zs("retryDelaySeedMs",1e4,a),this.Ta=Zs("forwardChannelMaxRetries",2,a),this.va=Zs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Rh(a&&a.concurrentRequestLimit),this.Ba=new SE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=qh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){Tt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Jh(this,null,this.W),yo(this)};function wc(a){if(Hh(a),a.I==3){var h=a.V++,d=en(a.J);if(Ve(d,"SID",a.M),Ve(d,"RID",h),Ve(d,"TYPE","terminate"),ei(a,d),h=new Mn(a,a.j,h),h.M=2,h.A=po(en(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Zh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),fo(h)}Yh(a)}function _o(a){a.g&&(Rc(a),a.g.cancel(),a.g=null)}function Hh(a){_o(a),a.v&&(o.clearTimeout(a.v),a.v=null),Eo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function yo(a){if(!bh(a.h)&&!a.m){a.m=!0;var h=a.Ea;Z||y(),ie||(Z(),ie=!0),b.add(h,a),a.D=0}}function NE(a,h){return Sh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=$s(u(a.Ea,a,h),Xh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new Mn(this,this.j,a);let k=this.o;if(this.U&&(k?(k=Pt(k),En(k,this.U)):k=this.U),this.u!==null||this.R||(C.J=k,k=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Wh(this,C,h),d=en(this.J),Ve(d,"RID",a),Ve(d,"CVER",22),this.G&&Ve(d,"X-HTTP-Session-Id",this.G),ei(this,d),k&&(this.R?h="headers="+Hs(Uh(k))+"&"+h:this.u&&Ic(d,this.u,k)),Ec(this.h,C),this.Ra&&Ve(d,"TYPE","init"),this.S?(Ve(d,"$req",h),Ve(d,"SID","null"),C.U=!0,mc(C,d,null)):mc(C,d,h),this.I=2}}else this.I==3&&(a?zh(this,a):this.i.length==0||bh(this.h)||zh(this))};function zh(a,h){var d;h?d=h.l:d=a.V++;const g=en(a.J);Ve(g,"SID",a.M),Ve(g,"RID",d),Ve(g,"AID",a.K),ei(a,g),a.u&&a.o&&Ic(g,a.u,a.o),d=new Mn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Wh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ec(a.h,d),mc(d,g,h)}function ei(a,h){a.H&&Rt(a.H,function(d,g){Ve(h,g,d)}),a.l&&Rt({},function(d,g){Ve(h,g,d)})}function Wh(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var C=a.i;let de=-1;for(;;){const Xe=["count="+d];de==-1?d>0?(de=C[0].g,Xe.push("ofs="+de)):de=0:Xe.push("ofs="+de);let ke=!0;for(let Ze=0;Ze<d;Ze++){var k=C[Ze].g;const tn=C[Ze].map;if(k-=de,k<0)de=Math.max(0,C[Ze].g-100),ke=!1;else try{k="req"+k+"_"||"";try{var W=tn instanceof Map?tn:Object.entries(tn);for(const[Pr,jn]of W){let $n=jn;c(jn)&&($n=ve(jn)),Xe.push(k+Pr+"="+encodeURIComponent($n))}}catch(Pr){throw Xe.push(k+"type="+encodeURIComponent("_badmap")),Pr}}catch{g&&g(tn)}}if(ke){W=Xe.join("&");break e}}W=void 0}return a=a.i.splice(0,d),h.G=a,W}function Kh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;Z||y(),ie||(Z(),ie=!0),b.add(h,a),a.A=0}}function Ac(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=$s(u(a.Da,a),Xh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Gh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=$s(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Tt(10),_o(this),Gh(this))};function Rc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Gh(a){a.g=new Mn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=en(a.na);Ve(h,"RID","rpc"),Ve(h,"SID",a.M),Ve(h,"AID",a.K),Ve(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ve(h,"TO",a.ia),Ve(h,"TYPE","xmlhttp"),ei(a,h),a.u&&a.o&&Ic(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=po(en(h)),d.u=null,d.R=!0,Ih(d,a)}t.Va=function(){this.C!=null&&(this.C=null,_o(this),Ac(this),Tt(19))};function Eo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Qh(a,h){var d=null;if(a.g==h){Eo(a),Rc(a),a.g=null;var g=2}else if(yc(a.h,h))d=h.G,Ph(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var C=a.D;g=Ar(),$(g,new _h(g,d)),yo(a)}else Kh(a);else if(C=h.m,C==3||C==0&&h.X>0||!(g==1&&NE(a,h)||g==2&&Ac(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),C){case 1:Sr(a,5);break;case 4:Sr(a,10);break;case 3:Sr(a,6);break;default:Sr(a,2)}}}function Xh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Sr(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const C=!g;g=new Un(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ws(g,"https"),po(g),C?RE(g.toString(),d):bE(g.toString(),d)}else Tt(2);a.I=0,a.l&&a.l.pa(h),Yh(a),Hh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Yh(a){if(a.I=0,a.ja=[],a.l){const h=Ch(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function Jh(a,h,d){var g=d instanceof Un?en(d):new Un(d);if(g.g!="")h&&(g.g=h+"."+g.g),Ks(g,g.u);else{var C=o.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;const k=new Un(null);g&&Ws(k,g),h&&(k.g=h),C&&Ks(k,C),d&&(k.h=d),g=k}return d=a.G,h=a.wa,d&&h&&Ve(g,d,h),Ve(g,"VER",a.ka),ei(a,g),g}function Zh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Fe(new vc({ab:d})):new Fe(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ef(){}t=ef.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function To(){}To.prototype.g=function(a,h){return new Nt(a,h)};function Nt(a,h){z.call(this),this.g=new qh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ns(this)}p(Nt,z),Nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){wc(this.g)},Nt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ve(a),a=d);h.i.push(new _E(h.Ya++,a)),h.I==3&&yo(h)},Nt.prototype.N=function(){this.g.l=null,delete this.j,wc(this.g),delete this.g,Nt.Z.N.call(this)};function tf(a){Zr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(tf,Zr);function nf(){rt.call(this),this.status=1}p(nf,rt);function ns(a){this.g=a}p(ns,ef),ns.prototype.ra=function(){$(this.g,"a")},ns.prototype.qa=function(a){$(this.g,new tf(a))},ns.prototype.pa=function(a){$(this.g,new nf)},ns.prototype.oa=function(){$(this.g,"b")},To.prototype.createWebChannel=To.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,F_=function(){return new To},U_=function(){return Ar()},M_=Je,Pl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ho.NO_ERROR=0,ho.TIMEOUT=8,ho.HTTP_ERROR=6,zo=ho,yh.COMPLETE="complete",L_=yh,kt.EventType=zt,zt.OPEN="a",zt.CLOSE="b",zt.ERROR="c",zt.MESSAGE="d",z.prototype.listen=z.prototype.J,li=kt,Fe.prototype.listenOnce=Fe.prototype.K,Fe.prototype.getLastError=Fe.prototype.Ha,Fe.prototype.getLastErrorCode=Fe.prototype.ya,Fe.prototype.getStatus=Fe.prototype.ca,Fe.prototype.getResponseJson=Fe.prototype.La,Fe.prototype.getResponseText=Fe.prototype.la,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Fa,x_=Fe}).apply(typeof Co<"u"?Co:typeof self<"u"?self:typeof window<"u"?window:{});const Hd="@firebase/firestore",zd="4.9.3";/**
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
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let xs="12.7.0";/**
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
 */const zr=new _u("@firebase/firestore");function as(){return zr.logLevel}function J(t,...e){if(zr.logLevel<=me.DEBUG){const n=e.map(Ou);zr.debug(`Firestore (${xs}): ${t}`,...n)}}function On(t,...e){if(zr.logLevel<=me.ERROR){const n=e.map(Ou);zr.error(`Firestore (${xs}): ${t}`,...n)}}function Ss(t,...e){if(zr.logLevel<=me.WARN){const n=e.map(Ou);zr.warn(`Firestore (${xs}): ${t}`,...n)}}function Ou(t){if(typeof t=="string")return t;try{/**
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
 */function ce(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,B_(t,r,n)}function B_(t,e,n){let r=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw On(r),new Error(r)}function Re(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||B_(e,s,r)}function he(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class j_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(pt.UNAUTHENTICATED)))}shutdown(){}}class $P{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class qP{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Re(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new j_(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new pt(e)}}class HP{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class zP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new HP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(pt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Re(this.o===void 0,3512);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Re(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Wd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function KP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Vu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=KP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Cl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Yc(s)===Yc(i)?ge(s,i):Yc(s)?1:-1}return ge(t.length,e.length)}const GP=55296,QP=57343;function Yc(t){const e=t.charCodeAt(0);return e>=GP&&e<=QP}function Ps(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const Kd="__name__";class sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ce(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=sn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=sn.isNumericId(e),s=sn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?sn.extractNumericId(e).compare(sn.extractNumericId(n)):Cl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ar.fromString(e.substring(4,e.length-2))}}class Oe extends sn{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Oe(n)}static emptyPath(){return new Oe([])}}const XP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends sn{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return XP.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kd}static keyField(){return new ot([Kd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new X(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new X(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Oe.fromString(e))}static fromName(e){return new te(Oe.fromString(e).popFirst(5))}static empty(){return new te(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Oe(e.slice()))}}/**
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
 */function $_(t,e,n){if(!n)throw new X(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YP(t,e,n,r){if(e===!0&&r===!0)throw new X(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gd(t){if(!te.isDocumentKey(t))throw new X(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qd(t){if(te.isDocumentKey(t))throw new X(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function q_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ya(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce(12329,{type:typeof t})}function Wr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ya(t);throw new X(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ge(t,e){const n={typeString:t};return e&&(n.value=e),n}function io(t,e){if(!q_(t))throw new X(x.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(x.INVALID_ARGUMENT,n);return!0}/**
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
 */const Xd=-62135596800,Yd=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Yd);return new xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Xd)throw new X(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yd}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(io(e,xe._jsonSchema))return new xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xe._jsonSchemaVersion="firestore/timestamp/1.0",xe._jsonSchema={type:Ge("string",xe._jsonSchemaVersion),seconds:Ge("number"),nanoseconds:Ge("number")};/**
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
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new xe(0,0))}static max(){return new le(new xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const qi=-1;function JP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new dr(s,te.empty(),e)}function ZP(t){return new dr(t.readTime,t.key,qi)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(le.min(),te.empty(),qi)}static max(){return new dr(le.max(),te.empty(),qi)}}function eC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const tC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ls(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==tC)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):M.reject(n)}static resolve(e){return new M(((n,r)=>{n(e)}))}static reject(e){return new M(((n,r)=>{r(e)}))}static waitFor(e){return new M(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next((s=>s?M.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new M(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new M(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function rC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ms(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ja{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ja.ce=-1;/**
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
 */const xu=-1;function Za(t){return t==null}function ya(t){return t===0&&1/t==-1/0}function sC(t){return typeof t=="number"&&Number.isInteger(t)&&!ya(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const H_="";function iC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Jd(e)),e=oC(t.get(n),e);return Jd(e)}function oC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case H_:n+="";break;default:n+=i}}return n}function Jd(t){return t+H_+""}/**
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
 */function Zd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ir(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function z_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ko(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ko(this.root,e,this.comparator,!1)}getReverseIterator(){return new ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ko(this.root,e,this.comparator,!0)}}class ko{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new st(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ye{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ep(this.data.getIterator())}getIteratorFrom(e){return new ep(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class ep{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new Ye(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class W_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new W_("Invalid base64 string: "+i):i}})(e);return new ct(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const aC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(Re(!!t,39018),typeof t=="string"){let e=0;const n=aC.exec(t);if(Re(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
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
 */const K_="server_timestamp",G_="__type__",Q_="__previous_value__",X_="__local_write_time__";function Lu(t){return(t?.mapValue?.fields||{})[G_]?.stringValue===K_}function ec(t){const e=t.mapValue.fields[Q_];return Lu(e)?ec(e):e}function Hi(t){const e=pr(t.mapValue.fields[X_].timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class cC{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const Ea="(default)";class zi{constructor(e,n){this.projectId=e,this.database=n||Ea}static empty(){return new zi("","")}get isDefaultDatabase(){return this.database===Ea}isEqual(e){return e instanceof zi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Y_="__type__",lC="__max__",No={mapValue:{}},J_="__vector__",Ta="value";function gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lu(t)?4:hC(t)?9007199254740991:uC(t)?10:11:ce(28295,{value:t})}function _n(t,e){if(t===e)return!0;const n=gr(t);if(n!==gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hi(t).isEqual(Hi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=pr(s.timestampValue),c=pr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return mr(s.bytesValue).isEqual(mr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),c=qe(i.doubleValue);return o===c?ya(o)===ya(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Zd(o)!==Zd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!_n(o[l],c[l])))return!1;return!0})(t,e);default:return ce(52216,{left:t})}}function Wi(t,e){return(t.values||[]).find((n=>_n(n,e)))!==void 0}function Cs(t,e){if(t===e)return 0;const n=gr(t),r=gr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return tp(t.timestampValue,e.timestampValue);case 4:return tp(Hi(t),Hi(e));case 5:return Cl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=mr(i),l=mr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ge(c[u],l[u]);if(f!==0)return f}return ge(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ge(qe(i.latitude),qe(o.latitude));return c!==0?c:ge(qe(i.longitude),qe(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return np(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[Ta]?.arrayValue,f=l[Ta]?.arrayValue,p=ge(u?.values?.length||0,f?.values?.length||0);return p!==0?p:np(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===No.mapValue&&o===No.mapValue)return 0;if(i===No.mapValue)return 1;if(o===No.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Cl(l[p],f[p]);if(m!==0)return m;const E=Cs(c[l[p]],u[f[p]]);if(E!==0)return E}return ge(l.length,f.length)})(t.mapValue,e.mapValue);default:throw ce(23264,{he:n})}}function tp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=pr(t),r=pr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function np(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Cs(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function ks(t){return kl(t)}function kl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return mr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return te.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=kl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${kl(n.fields[o])}`;return s+"}"})(t.mapValue):ce(61005,{value:t})}function Wo(t){switch(gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ec(t);return e?16+Wo(e):16;case 5:return 2*t.stringValue.length;case 6:return mr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Wo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Ir(r.fields,((i,o)=>{s+=i.length+Wo(o)})),s})(t.mapValue);default:throw ce(13486,{value:t})}}function rp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Nl(t){return!!t&&"integerValue"in t}function Mu(t){return!!t&&"arrayValue"in t}function sp(t){return!!t&&"nullValue"in t}function ip(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ko(t){return!!t&&"mapValue"in t}function uC(t){return(t?.mapValue?.fields||{})[Y_]?.stringValue===J_}function Ri(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ir(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ri(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ri(t.arrayValue.values[n]);return e}return{...t}}function hC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===lC}/**
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
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ri(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ri(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ko(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ir(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new St(Ri(this.value))}}function Z_(t){const e=[];return Ir(t.fields,((n,r)=>{const s=new ot([n]);if(Ko(r)){const i=Z_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Lt(e)}/**
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
 */class gt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new gt(e,0,le.min(),le.min(),le.min(),St.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,le.min(),le.min(),St.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,le.min(),le.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class va{constructor(e,n){this.position=e,this.inclusive=n}}function op(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=Cs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ap(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ki{constructor(e,n="asc"){this.field=e,this.dir=n}}function fC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ey{}class Ke extends ey{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pC(e,n,r):n==="array-contains"?new _C(e,r):n==="in"?new yC(e,r):n==="not-in"?new EC(e,r):n==="array-contains-any"?new TC(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mC(e,r):new gC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Cs(n,this.value)):n!==null&&gr(this.value)===gr(n)&&this.matchesComparison(Cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends ey{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Jt(e,n)}matches(e){return ty(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ty(t){return t.op==="and"}function ny(t){return dC(t)&&ty(t)}function dC(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function Dl(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+ks(t.value);if(ny(t))return t.filters.map((e=>Dl(e))).join(",");{const e=t.filters.map((n=>Dl(n))).join(",");return`${t.op}(${e})`}}function ry(t,e){return t instanceof Ke?(function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&_n(r.value,s.value)})(t,e):t instanceof Jt?(function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&ry(o,s.filters[c])),!0):!1})(t,e):void ce(19439)}function sy(t){return t instanceof Ke?(function(n){return`${n.field.canonicalString()} ${n.op} ${ks(n.value)}`})(t):t instanceof Jt?(function(n){return n.op.toString()+" {"+n.getFilters().map(sy).join(" ,")+"}"})(t):"Filter"}class pC extends Ke{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class mC extends Ke{constructor(e,n){super(e,"in",n),this.keys=iy("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class gC extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=iy("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function iy(t,e){return(e.arrayValue?.values||[]).map((n=>te.fromName(n.referenceValue)))}class _C extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mu(n)&&Wi(n.arrayValue,this.value)}}class yC extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wi(this.value.arrayValue,n)}}class EC extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Wi(this.value.arrayValue,n)}}class TC extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Wi(this.value.arrayValue,r)))}}/**
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
 */class vC{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function cp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new vC(t,e,n,r,s,i,o)}function Uu(t){const e=he(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Dl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Za(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>ks(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>ks(r))).join(",")),e.Te=n}return e.Te}function Fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ry(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ap(t.startAt,e.startAt)&&ap(t.endAt,e.endAt)}function Ol(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Us{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function IC(t,e,n,r,s,i,o,c){return new Us(t,e,n,r,s,i,o,c)}function oy(t){return new Us(t)}function lp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ay(t){return t.collectionGroup!==null}function bi(t){const e=he(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ye(ot.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ki(i,r))})),n.has(ot.keyField().canonicalString())||e.Ie.push(new Ki(ot.keyField(),r))}return e.Ie}function fn(t){const e=he(t);return e.Ee||(e.Ee=wC(e,bi(t))),e.Ee}function wC(t,e){if(t.limitType==="F")return cp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ki(s.field,i)}));const n=t.endAt?new va(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new va(t.startAt.position,t.startAt.inclusive):null;return cp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vl(t,e){const n=t.filters.concat([e]);return new Us(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xl(t,e,n){return new Us(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tc(t,e){return Fu(fn(t),fn(e))&&t.limitType===e.limitType}function cy(t){return`${Uu(fn(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>sy(s))).join(", ")}]`),Za(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>ks(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>ks(s))).join(",")),`Target(${r})`})(fn(t))}; limitType=${t.limitType})`}function nc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of bi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=op(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,bi(r),s)||r.endAt&&!(function(o,c,l){const u=op(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,bi(r),s))})(t,e)}function AC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ly(t){return(e,n)=>{let r=!1;for(const s of bi(t)){const i=RC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function RC(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Cs(l,u):ce(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:t.dir})}}/**
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
 */class Xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ir(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return z_(this.inner)}size(){return this.innerSize}}/**
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
 */const bC=new Ue(te.comparator);function Vn(){return bC}const uy=new Ue(te.comparator);function ui(...t){let e=uy;for(const n of t)e=e.insert(n.key,n);return e}function hy(t){let e=uy;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Mr(){return Si()}function fy(){return Si()}function Si(){return new Xr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const SC=new Ue(te.comparator),PC=new Ye(te.comparator);function _e(...t){let e=PC;for(const n of t)e=e.add(n);return e}const CC=new Ye(ge);function kC(){return CC}/**
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
 */function Bu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ya(e)?"-0":e}}function dy(t){return{integerValue:""+t}}function NC(t,e){return sC(e)?dy(e):Bu(t,e)}/**
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
 */class rc{constructor(){this._=void 0}}function DC(t,e,n){return t instanceof Ia?(function(s,i){const o={fields:{[G_]:{stringValue:K_},[X_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Lu(i)&&(i=ec(i)),i&&(o.fields[Q_]=i),{mapValue:o}})(n,e):t instanceof Gi?my(t,e):t instanceof Qi?gy(t,e):(function(s,i){const o=py(s,i),c=up(o)+up(s.Ae);return Nl(o)&&Nl(s.Ae)?dy(c):Bu(s.serializer,c)})(t,e)}function OC(t,e,n){return t instanceof Gi?my(t,e):t instanceof Qi?gy(t,e):n}function py(t,e){return t instanceof wa?(function(r){return Nl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ia extends rc{}class Gi extends rc{constructor(e){super(),this.elements=e}}function my(t,e){const n=_y(e);for(const r of t.elements)n.some((s=>_n(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Qi extends rc{constructor(e){super(),this.elements=e}}function gy(t,e){let n=_y(e);for(const r of t.elements)n=n.filter((s=>!_n(s,r)));return{arrayValue:{values:n}}}class wa extends rc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function up(t){return qe(t.integerValue||t.doubleValue)}function _y(t){return Mu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function VC(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Gi&&s instanceof Gi||r instanceof Qi&&s instanceof Qi?Ps(r.elements,s.elements,_n):r instanceof wa&&s instanceof wa?_n(r.Ae,s.Ae):r instanceof Ia&&s instanceof Ia})(t.transform,e.transform)}class xC{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Go(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sc{}function yy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ty(t.key,dn.none()):new oo(t.key,t.data,dn.none());{const n=t.data,r=St.empty();let s=new Ye(ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new wr(t.key,r,new Lt(s.toArray()),dn.none())}}function LC(t,e,n){t instanceof oo?(function(s,i,o){const c=s.value.clone(),l=fp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof wr?(function(s,i,o){if(!Go(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=fp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Ey(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Pi(t,e,n,r){return t instanceof oo?(function(i,o,c,l){if(!Go(i.precondition,o))return c;const u=i.value.clone(),f=dp(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof wr?(function(i,o,c,l){if(!Go(i.precondition,o))return c;const u=dp(i.fieldTransforms,l,o),f=o.data;return f.setAll(Ey(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return Go(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function MC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=py(r.transform,s||null);i!=null&&(n===null&&(n=St.empty()),n.set(r.field,i))}return n||null}function hp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ps(r,s,((i,o)=>VC(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oo extends sc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wr extends sc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ey(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function fp(t,e,n){const r=new Map;Re(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,OC(o,c,n[s]))}return r}function dp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,DC(i,o,e))}return r}class Ty extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UC extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class FC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&LC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fy();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=yy(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),_e())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,((n,r)=>hp(n,r)))&&Ps(this.baseMutations,e.baseMutations,((n,r)=>hp(n,r)))}}class ju{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Re(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return SC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ju(e,n,r,s)}}/**
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
 */class BC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class jC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var We,Te;function $C(t){switch(t){case x.OK:return ce(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return ce(15467,{code:t})}}function vy(t){if(t===void 0)return On("GRPC error has no .code"),x.UNKNOWN;switch(t){case We.OK:return x.OK;case We.CANCELLED:return x.CANCELLED;case We.UNKNOWN:return x.UNKNOWN;case We.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case We.INTERNAL:return x.INTERNAL;case We.UNAVAILABLE:return x.UNAVAILABLE;case We.UNAUTHENTICATED:return x.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case We.NOT_FOUND:return x.NOT_FOUND;case We.ALREADY_EXISTS:return x.ALREADY_EXISTS;case We.PERMISSION_DENIED:return x.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case We.ABORTED:return x.ABORTED;case We.OUT_OF_RANGE:return x.OUT_OF_RANGE;case We.UNIMPLEMENTED:return x.UNIMPLEMENTED;case We.DATA_LOSS:return x.DATA_LOSS;default:return ce(39323,{code:t})}}(Te=We||(We={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qC(){return new TextEncoder}/**
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
 */const HC=new ar([4294967295,4294967295],0);function pp(t){const e=qC().encode(t),n=new V_;return n.update(e),new Uint8Array(n.digest())}function mp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ar([n,r],0),new ar([s,i],0)]}class $u{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new hi(`Invalid padding: ${n}`);if(r<0)throw new hi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new hi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ar.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ar.fromNumber(r)));return s.compare(HC)===1&&(s=new ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=pp(e),[r,s]=mp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new $u(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=pp(e),[r,s]=mp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ic{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ao.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ic(le.min(),s,new Ue(ge),Vn(),_e())}}class ao{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ao(r,n,_e(),_e(),_e())}}/**
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
 */class Qo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Iy{constructor(e,n){this.targetId=e,this.Ce=n}}class wy{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class gp{constructor(){this.ve=0,this.Fe=_p(),this.Me=ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=_e(),n=_e(),r=_e();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}})),new ao(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=_p()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Re(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class zC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vn(),this.Je=Do(),this.He=Do(),this.Ye=new Ue(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ol(i))if(r===0){const o=new te(i.path);this.et(n,o,gt.newNoDocument(o,le.min()))}else Re(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=mr(r).toUint8Array()}catch(l){if(l instanceof W_)return Ss("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new $u(o,s,i)}catch(l){return Ss(l instanceof hi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Ol(c.target)){const l=new te(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,gt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=_e();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new ic(e,n,this.Ye,this.je,r);return this.je=Vn(),this.Je=Do(),this.He=Do(),this.Ye=new Ue(ge),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new gp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ye(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ye(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new gp),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Do(){return new Ue(te.comparator)}function _p(){return new Ue(te.comparator)}const WC={asc:"ASCENDING",desc:"DESCENDING"},KC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GC={and:"AND",or:"OR"};class QC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ll(t,e){return t.useProto3Json||Za(e)?e:{value:e}}function Aa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ay(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function XC(t,e){return Aa(t,e.toTimestamp())}function pn(t){return Re(!!t,49232),le.fromTimestamp((function(n){const r=pr(n);return new xe(r.seconds,r.nanos)})(t))}function qu(t,e){return Ml(t,e).canonicalString()}function Ml(t,e){const n=(function(s){return new Oe(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Ry(t){const e=Oe.fromString(t);return Re(ky(e),10190,{key:e.toString()}),e}function Ul(t,e){return qu(t.databaseId,e.path)}function Jc(t,e){const n=Ry(e);if(n.get(1)!==t.databaseId.projectId)throw new X(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(Sy(n))}function by(t,e){return qu(t.databaseId,e)}function YC(t){const e=Ry(t);return e.length===4?Oe.emptyPath():Sy(e)}function Fl(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sy(t){return Re(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function yp(t,e,n){return{name:Ul(t,e),fields:n.value.mapValue.fields}}function JC(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Re(f===void 0||typeof f=="string",58123),ct.fromBase64String(f||"")):(Re(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ct.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?x.UNKNOWN:vy(u.code);return new X(f,u.message||"")})(o);n=new wy(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Jc(t,r.document.name),i=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):le.min(),c=new St({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Qo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Jc(t,r.document),i=r.readTime?pn(r.readTime):le.min(),o=gt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Qo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Jc(t,r.document),i=r.removedTargetIds||[];n=new Qo([],i,s,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new jC(s,i),c=r.targetId;n=new Iy(c,o)}}return n}function ZC(t,e){let n;if(e instanceof oo)n={update:yp(t,e.key,e.value)};else if(e instanceof Ty)n={delete:Ul(t,e.key)};else if(e instanceof wr)n={update:yp(t,e.key,e.data),updateMask:c0(e.fieldMask)};else{if(!(e instanceof UC))return ce(16599,{Vt:e.type});n={verify:Ul(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Gi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Qi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof wa)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ce(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:XC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)})(t,e.precondition)),n}function e0(t,e){return t&&t.length>0?(Re(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?pn(s.updateTime):pn(i);return o.isEqual(le.min())&&(o=pn(i)),new xC(o,s.transformResults||[])})(n,e)))):[]}function t0(t,e){return{documents:[by(t,e.path)]}}function n0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=by(t,s);const i=(function(u){if(u.length!==0)return Cy(Jt.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:ls(m.field),direction:i0(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Ll(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function r0(t){let e=YC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Re(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=Py(p);return m instanceof Jt&&ny(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(P){return new Ki(us(P.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,Za(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,E=p.values||[];return new va(E,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,E=p.values||[];return new va(E,m)})(n.endAt)),IC(e,s,o,i,c,"F",l,u)}function s0(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Py(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=us(n.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=us(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ke.create(us(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Jt.create(n.compositeFilter.filters.map((r=>Py(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}})(n.compositeFilter.op))})(t):ce(30097,{filter:t})}function i0(t){return WC[t]}function o0(t){return KC[t]}function a0(t){return GC[t]}function ls(t){return{fieldPath:t.canonicalString()}}function us(t){return ot.fromServerFormat(t.fieldPath)}function Cy(t){return t instanceof Ke?(function(n){if(n.op==="=="){if(ip(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(sp(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ip(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(sp(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:o0(n.op),value:n.value}}})(t):t instanceof Jt?(function(n){const r=n.getFilters().map((s=>Cy(s)));return r.length===1?r[0]:{compositeFilter:{op:a0(n.op),filters:r}}})(t):ce(54877,{filter:t})}function c0(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function ky(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class tr{constructor(e,n,r,s,i=le.min(),o=le.min(),c=ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class l0{constructor(e){this.yt=e}}function u0(t){const e=r0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xl(e,e.limit,"L"):e}/**
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
 */class h0{constructor(){this.Cn=new f0}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(dr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class f0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(Oe.comparator)).toArray()}}/**
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
 */const Ep={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ny=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(Ny,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
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
 */class Ns{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ns(0)}static cr(){return new Ns(-1)}}/**
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
 */const Tp="LruGarbageCollector",d0=1048576;function vp([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class p0{constructor(e){this.Ir=e,this.buffer=new Ye(vp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();vp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class m0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){J(Tp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ms(n)?J(Tp,"Ignoring IndexedDB error during garbage collection: ",n):await Ls(n)}await this.Vr(3e5)}))}}class g0{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Ja.ce);const r=new p0(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Ep)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ep):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),as()<=me.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function _0(t,e){return new g0(t,e)}/**
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
 */class y0{constructor(){this.changes=new Xr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class E0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class T0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Pi(r.mutation,s,Lt.empty(),xe.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,_e()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=_e()){const s=Mr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=ui();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,_e())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Vn();const o=Si(),c=(function(){return Si()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof wr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Pi(f.mutation,u,f.mutation.getFieldMask(),xe.now())):o.set(u.key,Lt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new E0(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=Si();let s=new Ue(((o,c)=>o-c)),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Lt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=fy();f.forEach((m=>{if(!i.has(m)){const E=yy(n.get(m),r.get(m));E!==null&&p.set(m,E),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ay(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Mr());let c=qi,l=i;return o.next((u=>M.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,_e()))).next((f=>({batchId:c,changes:hy(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next((r=>{let s=ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ui();return this.indexManager.getCollectionParents(e,i).next((c=>M.forEach(c,(l=>{const u=(function(p,m){return new Us(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,gt.newInvalidDocument(f)))}));let c=ui();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Pi(f.mutation,u,Lt.empty(),xe.now()),nc(n,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class v0{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:pn(s.createTime)}})(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:u0(s.bundledQuery),readTime:pn(s.readTime)}})(n)),M.resolve()}}/**
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
 */class I0{constructor(){this.overlays=new Ue(te.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return M.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Mr(),i=n.length+1,o=new te(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Mr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Mr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return M.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new BC(n,r));let i=this.qr.get(n);i===void 0&&(i=_e(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class w0{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Hu{constructor(){this.Qr=new Ye(et.$r),this.Ur=new Ye(et.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new et(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new et(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new te(new Oe([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new te(new Oe([])),r=new et(n,e),s=new et(n,e+1);let i=_e();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new et(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return te.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||te.comparator(e.key,n.key)}}/**
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
 */class A0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ye(et.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FC(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new et(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?xu:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ge);return n.forEach((s=>{const i=new et(s,0),o=new et(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new et(new te(i),0);let c=new Ye(ge);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),M.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Re(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(n.mutations,(s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new et(n,0),s=this.Zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class R0{constructor(e){this.ri=e,this.docs=(function(){return new Ue(te.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))})),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Vn();const o=n.path,c=new te(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||eC(ZP(f),r)<=0||(s.has(f.key)||nc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce(9500)}ii(e,n){return M.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new b0(this)}getSize(e){return M.resolve(this.size)}}class b0 extends y0{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class S0{constructor(e){this.persistence=e,this.si=new Xr((n=>Uu(n)),Fu),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.oi=0,this._i=new Hu,this.targetCount=0,this.ai=Ns.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),M.waitFor(i).next((()=>s))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
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
 */class Dy{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ja(0),this.li=!1,this.li=!0,this.hi=new w0,this.referenceDelegate=e(this),this.Pi=new S0(this),this.indexManager=new h0,this.remoteDocumentCache=(function(s){return new R0(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new l0(n),this.Ii=new v0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new I0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new A0(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const s=new P0(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return M.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class P0 extends nC{constructor(e){super(),this.currentSequenceNumber=e}}class zu{constructor(e){this.persistence=e,this.Ri=new Hu,this.Vi=null}static mi(e){return new zu(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,(r=>{const s=te.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,le.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ra{constructor(e,n){this.persistence=e,this.pi=new Xr((r=>iC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=_0(this,n)}static mi(e,n){return new Ra(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return M.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?M.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,le.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Wo(e.data.value)),n}br(e,n,r){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Wu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Wu(e,n.fromCache,r,s)}}/**
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
 */class C0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class k0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Kw()?8:rC(Et())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new C0;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(as()<=me.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(as()<=me.DEBUG&&J("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(as()<=me.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):M.resolve())}ys(e,n){if(lp(n))return M.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=xl(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=_e(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,xl(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return lp(n)||s.isEqual(le.min())?M.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?M.resolve(null):(as()<=me.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cs(n)),this.vs(e,o,n,JP(s,qi)).next((c=>c)))}))}Ds(e,n){let r=new Ye(ly(e));return n.forEach(((s,i)=>{nc(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return as()<=me.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",cs(n)),this.ps.getDocumentsMatchingQuery(e,n,dr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const Ku="LocalStore",N0=3e8;class D0{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ue(ge),this.xs=new Xr((i=>Uu(i)),Fu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new T0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function O0(t,e,n,r){return new D0(t,e,n,r)}async function Oy(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function V0(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let E=M.resolve();return m.forEach((P=>{E=E.next((()=>f.getEntry(l,P))).next((N=>{const D=u.docVersions.get(P);Re(D!==null,48541),N.version.compareTo(D)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),f.addEntry(N)))}))})),E.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Vy(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function x0(t,e){const n=he(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let E=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(ct.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(p,E),(function(N,D,B){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=N0?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(m,E,f)&&c.push(n.Pi.updateTargetData(i,E))}));let l=Vn(),u=_e();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(L0(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(le.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return M.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function L0(t,e,n){let r=_e(),s=_e();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Vn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):J(Ku,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function M0(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=xu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function U0(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,M.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function Bl(t,e,n){const r=he(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ms(o))throw o;J(Ku,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Ip(t,e,n){const r=he(t);let s=le.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=he(l),m=p.xs.get(f);return m!==void 0?M.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,fn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:le.min(),n?i:_e()))).next((c=>(F0(r,AC(e),c),{documents:c,Qs:i})))))}function F0(t,e,n){let r=t.Os.get(e)||le.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class wp{constructor(){this.activeTargetIds=kC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class B0{constructor(){this.Mo=new wp,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new wp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class j0{Oo(e){}shutdown(){}}/**
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
 */const Ap="ConnectivityMonitor";class Rp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){J(Ap,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){J(Ap,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oo=null;function jl(){return Oo===null?Oo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Oo++,"0x"+Oo.toString(16)}/**
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
 */const Zc="RestConnection",$0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class q0{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ea?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=jl(),c=this.zo(e,n.toUriEncodedString());J(Zc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=Tr(u);return this.Jo(e,c,l,r,f).then((p=>(J(Zc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Ss(Zc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+xs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=$0[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class H0{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ft="WebChannelConnection";class z0 extends q0{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=jl();return new Promise(((c,l)=>{const u=new x_;u.setWithCredentials(!0),u.listenOnce(L_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case zo.NO_ERROR:const p=u.getResponseJson();J(ft,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case zo.TIMEOUT:J(ft,`RPC '${e}' ${o} timed out`),l(new X(x.DEADLINE_EXCEEDED,"Request time out"));break;case zo.HTTP_ERROR:const m=u.getStatus();if(J(ft,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const P=E?.error;if(P&&P.status&&P.message){const N=(function(B){const F=B.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(F)>=0?F:x.UNKNOWN})(P.status);l(new X(N,P.message))}else l(new X(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new X(x.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{J(ft,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);J(ft,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=jl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=F_(),c=U_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");J(ft,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,E=!1;const P=new H0({Yo:D=>{E?J(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(J(ft,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),J(ft,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Zo:()=>p.close()}),N=(D,B,F)=>{D.listen(B,(j=>{try{F(j)}catch(H){setTimeout((()=>{throw H}),0)}}))};return N(p,li.EventType.OPEN,(()=>{E||(J(ft,`RPC '${e}' stream ${s} transport opened.`),P.o_())})),N(p,li.EventType.CLOSE,(()=>{E||(E=!0,J(ft,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(p))})),N(p,li.EventType.ERROR,(D=>{E||(E=!0,Ss(ft,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),P.a_(new X(x.UNAVAILABLE,"The operation could not be completed")))})),N(p,li.EventType.MESSAGE,(D=>{if(!E){const B=D.data[0];Re(!!B,16349);const F=B,j=F?.error||F[0]?.error;if(j){J(ft,`RPC '${e}' stream ${s} received error:`,j);const H=j.status;let Z=(function(y){const _=We[y];if(_!==void 0)return vy(_)})(H),ie=j.message;Z===void 0&&(Z=x.INTERNAL,ie="Unknown error status: "+H+" with message "+j.message),E=!0,P.a_(new X(Z,ie)),p.close()}else J(ft,`RPC '${e}' stream ${s} received:`,B),P.u_(B)}})),N(c,M_.STAT_EVENT,(D=>{D.stat===Pl.PROXY?J(ft,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Pl.NOPROXY&&J(ft,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{P.__()}),0),P}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function el(){return typeof document<"u"?document:null}/**
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
 */function oc(t){return new QC(t,!0)}/**
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
 */class xy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const bp="PersistentStream";class Ly{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new xy(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new X(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return J(bp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(J(bp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class W0 extends Ly{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=JC(this.serializer,e),r=(function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?pn(o.readTime):le.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Fl(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=Ol(l)?{documents:t0(i,l)}:{query:n0(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Ay(i,o.resumeToken);const u=Ll(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(le.min())>0){c.readTime=Aa(i,o.snapshotVersion.toTimestamp());const u=Ll(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=s0(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Fl(this.serializer),n.removeTarget=e,this.q_(n)}}class K0 extends Ly{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=e0(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Fl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>ZC(this.serializer,r)))};this.q_(n)}}/**
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
 */class G0{}class Q0 extends G0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(x.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Ml(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(x.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,Ml(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(x.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class X0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(On(n),this.aa=!1):J("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Kr="RemoteStore";class Y0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{Yr(this)&&(J(Kr,"Restarting streams for network reachability change."),await(async function(l){const u=he(l);u.Ea.add(4),await co(u),u.Ra.set("Unknown"),u.Ea.delete(4),await ac(u)})(this))}))})),this.Ra=new X0(r,s)}}async function ac(t){if(Yr(t))for(const e of t.da)await e(!0)}async function co(t){for(const e of t.da)await e(!1)}function My(t,e){const n=he(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Yu(n)?Xu(n):Fs(n).O_()&&Qu(n,e))}function Gu(t,e){const n=he(t),r=Fs(n);n.Ia.delete(e),r.O_()&&Uy(n,e),n.Ia.size===0&&(r.O_()?r.L_():Yr(n)&&n.Ra.set("Unknown"))}function Qu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fs(t).Y_(e)}function Uy(t,e){t.Va.Ue(e),Fs(t).Z_(e)}function Xu(t){t.Va=new zC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Fs(t).start(),t.Ra.ua()}function Yu(t){return Yr(t)&&!Fs(t).x_()&&t.Ia.size>0}function Yr(t){return he(t).Ea.size===0}function Fy(t){t.Va=void 0}async function J0(t){t.Ra.set("Online")}async function Z0(t){t.Ia.forEach(((e,n)=>{Qu(t,e)}))}async function e1(t,e){Fy(t),Yu(t)?(t.Ra.ha(e),Xu(t)):t.Ra.set("Unknown")}async function t1(t,e,n){if(t.Ra.set("Online"),e instanceof wy&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){J(Kr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ba(t,r)}else if(e instanceof Qo?t.Va.Ze(e):e instanceof Iy?t.Va.st(e):t.Va.tt(e),!n.isEqual(le.min()))try{const r=await Vy(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ct.EMPTY_BYTE_STRING,f.snapshotVersion)),Uy(i,l);const p=new tr(f.target,l,u,f.sequenceNumber);Qu(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){J(Kr,"Failed to raise snapshot:",r),await ba(t,r)}}async function ba(t,e,n){if(!Ms(e))throw e;t.Ea.add(1),await co(t),t.Ra.set("Offline"),n||(n=()=>Vy(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{J(Kr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ac(t)}))}function By(t,e){return e().catch((n=>ba(t,n,e)))}async function cc(t){const e=he(t),n=_r(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:xu;for(;n1(e);)try{const s=await M0(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,r1(e,s)}catch(s){await ba(e,s)}jy(e)&&$y(e)}function n1(t){return Yr(t)&&t.Ta.length<10}function r1(t,e){t.Ta.push(e);const n=_r(t);n.O_()&&n.X_&&n.ea(e.mutations)}function jy(t){return Yr(t)&&!_r(t).x_()&&t.Ta.length>0}function $y(t){_r(t).start()}async function s1(t){_r(t).ra()}async function i1(t){const e=_r(t);for(const n of t.Ta)e.ea(n.mutations)}async function o1(t,e,n){const r=t.Ta.shift(),s=ju.from(r,e,n);await By(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await cc(t)}async function a1(t,e){e&&_r(t).X_&&await(async function(r,s){if((function(o){return $C(o)&&o!==x.ABORTED})(s.code)){const i=r.Ta.shift();_r(r).B_(),await By(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await cc(r)}})(t,e),jy(t)&&$y(t)}async function Sp(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),J(Kr,"RemoteStore received new credentials");const r=Yr(n);n.Ea.add(3),await co(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ac(n)}async function c1(t,e){const n=he(t);e?(n.Ea.delete(2),await ac(n)):e||(n.Ea.add(2),await co(n),n.Ra.set("Unknown"))}function Fs(t){return t.ma||(t.ma=(function(n,r,s){const i=he(n);return i.sa(),new W0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:J0.bind(null,t),t_:Z0.bind(null,t),r_:e1.bind(null,t),H_:t1.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Yu(t)?Xu(t):t.Ra.set("Unknown")):(await t.ma.stop(),Fy(t))}))),t.ma}function _r(t){return t.fa||(t.fa=(function(n,r,s){const i=he(n);return i.sa(),new K0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:s1.bind(null,t),r_:a1.bind(null,t),ta:i1.bind(null,t),na:o1.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await cc(t)):(await t.fa.stop(),t.Ta.length>0&&(J(Kr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class Ju{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Ju(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zu(t,e){if(On("AsyncQueue",`${e}: ${t}`),Ms(t))return new X(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class vs{static emptySet(e){return new vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=ui(),this.sortedSet=new Ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Pp{constructor(){this.ga=new Ue(te.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Ds{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Ds(e,n,vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class l1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class u1{constructor(){this.queries=Cp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=Cp(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new X(x.ABORTED,"Firestore shutting down"))}}function Cp(){return new Xr((t=>cy(t)),tc)}async function h1(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new l1,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Zu(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&eh(n)}async function f1(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function d1(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&eh(n)}function p1(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function eh(t){t.Ca.forEach((e=>{e.next()}))}var $l,kp;(kp=$l||($l={})).Ma="default",kp.Cache="cache";class m1{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$l.Cache}}/**
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
 */class qy{constructor(e){this.key=e}}class Hy{constructor(e){this.key=e}}class g1{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=_e(),this.mutatedKeys=_e(),this.eu=ly(e),this.tu=new vs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Pp,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),E=nc(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),N=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let D=!1;m&&E?m.data.isEqual(E.data)?P!==N&&(r.track({type:3,doc:E}),D=!0):this.su(m,E)||(r.track({type:2,doc:E}),D=!0,(l&&this.eu(E,l)>0||u&&this.eu(E,u)<0)&&(c=!0)):!m&&E?(r.track({type:0,doc:E}),D=!0):m&&!E&&(r.track({type:1,doc:m}),D=!0,(l||u)&&(c=!0)),D&&(E?(o=o.add(E),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(E,P){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:D})}};return N(E)-N(P)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Ds(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Pp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=_e(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new Hy(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new qy(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=_e();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ds.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const th="SyncEngine";class _1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class y1{constructor(e){this.key=e,this.hu=!1}}class E1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Xr((c=>cy(c)),tc),this.Iu=new Map,this.Eu=new Set,this.du=new Ue(te.comparator),this.Au=new Map,this.Ru=new Hu,this.Vu={},this.mu=new Map,this.fu=Ns.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function T1(t,e,n=!0){const r=Xy(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await zy(r,e,n,!0),s}async function v1(t,e){const n=Xy(t);await zy(n,e,!0,!1)}async function zy(t,e,n,r){const s=await U0(t.localStore,fn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await I1(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&My(t.remoteStore,s),c}async function I1(t,e,n,r,s){t.pu=(p,m,E)=>(async function(N,D,B,F){let j=D.view.ru(B);j.Cs&&(j=await Ip(N.localStore,D.query,!1).then((({documents:b})=>D.view.ru(b,j))));const H=F&&F.targetChanges.get(D.targetId),Z=F&&F.targetMismatches.get(D.targetId)!=null,ie=D.view.applyChanges(j,N.isPrimaryClient,H,Z);return Dp(N,D.targetId,ie.au),ie.snapshot})(t,p,m,E);const i=await Ip(t.localStore,e,!0),o=new g1(e,i.Qs),c=o.ru(i.documents),l=ao.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Dp(t,n,u.au);const f=new _1(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function w1(t,e,n){const r=he(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!tc(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Gu(r.remoteStore,s.targetId),ql(r,s.targetId)})).catch(Ls)):(ql(r,s.targetId),await Bl(r.localStore,s.targetId,!0))}async function A1(t,e){const n=he(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gu(n.remoteStore,r.targetId))}async function R1(t,e,n){const r=D1(t);try{const s=await(function(o,c){const l=he(o),u=xe.now(),f=c.reduce(((E,P)=>E.add(P.key)),_e());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(E=>{let P=Vn(),N=_e();return l.Ns.getEntries(E,f).next((D=>{P=D,P.forEach(((B,F)=>{F.isValidDocument()||(N=N.add(B))}))})).next((()=>l.localDocuments.getOverlayedDocuments(E,P))).next((D=>{p=D;const B=[];for(const F of c){const j=MC(F,p.get(F.key).overlayedDocument);j!=null&&B.push(new wr(F.key,j,Z_(j.value.mapValue),dn.exists(!0)))}return l.mutationQueue.addMutationBatch(E,u,B,c)})).next((D=>{m=D;const B=D.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(E,D.batchId,B)}))})).then((()=>({batchId:m.batchId,changes:hy(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Ue(ge)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await lo(r,s.changes),await cc(r.remoteStore)}catch(s){const i=Zu(s,"Failed to persist write");n.reject(i)}}async function Wy(t,e){const n=he(t);try{const r=await x0(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Re(o.hu,14607):s.removedDocuments.size>0&&(Re(o.hu,42227),o.hu=!1))})),await lo(n,r,e)}catch(r){await Ls(r)}}function Np(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=he(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&eh(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function b1(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ue(te.comparator);o=o.insert(i,gt.newNoDocument(i,le.min()));const c=_e().add(i),l=new ic(le.min(),new Map,new Ue(ge),o,c);await Wy(r,l),r.du=r.du.remove(i),r.Au.delete(e),nh(r)}else await Bl(r.localStore,e,!1).then((()=>ql(r,e,n))).catch(Ls)}async function S1(t,e){const n=he(t),r=e.batch.batchId;try{const s=await V0(n.localStore,e);Gy(n,r,null),Ky(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lo(n,s)}catch(s){await Ls(s)}}async function P1(t,e,n){const r=he(t);try{const s=await(function(o,c){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Re(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);Gy(r,e,n),Ky(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lo(r,s)}catch(s){await Ls(s)}}function Ky(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Gy(t,e,n){const r=he(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function ql(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||Qy(t,r)}))}function Qy(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Gu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),nh(t))}function Dp(t,e,n){for(const r of n)r instanceof qy?(t.Ru.addReference(r.key,e),C1(t,r)):r instanceof Hy?(J(th,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Qy(t,r.key)):ce(19791,{wu:r})}function C1(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(J(th,"New document in limbo: "+n),t.Eu.add(r),nh(t))}function nh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new te(Oe.fromString(e)),r=t.fu.next();t.Au.set(r,new y1(n)),t.du=t.du.insert(n,r),My(t.remoteStore,new tr(fn(oy(n.path)),r,"TargetPurposeLimboResolution",Ja.ce))}}async function lo(t,e,n){const r=he(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Wu.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=he(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>M.forEach(u,(m=>M.forEach(m.Es,(E=>f.persistence.referenceDelegate.addReference(p,m.targetId,E))).next((()=>M.forEach(m.ds,(E=>f.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))))))}catch(p){if(!Ms(p))throw p;J(Ku,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const E=f.Ms.get(m),P=E.snapshotVersion,N=E.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(m,N)}}})(r.localStore,i))}async function k1(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){J(th,"User change. New user:",e.toKey());const r=await Oy(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new X(x.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lo(n,r.Ls)}}function N1(t,e){const n=he(t),r=n.Au.get(e);if(r&&r.hu)return _e().add(r.key);{let s=_e();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function Xy(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=N1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=b1.bind(null,e),e.Pu.H_=d1.bind(null,e.eventManager),e.Pu.yu=p1.bind(null,e.eventManager),e}function D1(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=S1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=P1.bind(null,e),e}class Sa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return O0(this.persistence,new k0,e.initialUser,this.serializer)}Cu(e){return new Dy(zu.mi,this.serializer)}Du(e){return new B0}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sa.provider={build:()=>new Sa};class O1 extends Sa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Re(this.persistence.referenceDelegate instanceof Ra,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new m0(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new Dy((r=>Ra.mi(r,n)),this.serializer)}}class Hl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Np(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=k1.bind(null,this.syncEngine),await c1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new u1})()}createDatastore(e){const n=oc(e.databaseInfo.databaseId),r=(function(i){return new z0(i)})(e.databaseInfo);return(function(i,o,c,l){return new Q0(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new Y0(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Np(this.syncEngine,n,0)),(function(){return Rp.v()?new Rp:new j0})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new E1(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=he(n);J(Kr,"RemoteStore shutting down."),r.Ea.add(5),await co(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Hl.provider={build:()=>new Hl};/**
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
 *//**
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
 */class V1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const yr="FirestoreClient";class x1{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=Vu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{J(yr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(J(yr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function tl(t,e){t.asyncQueue.verifyOperationInProgress(),J(yr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Oy(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Op(t,e){t.asyncQueue.verifyOperationInProgress();const n=await L1(t);J(yr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Sp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Sp(e.remoteStore,s))),t._onlineComponents=e}async function L1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J(yr,"Using user provided OfflineComponentProvider");try{await tl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Ss("Error using user provided cache. Falling back to memory cache: "+n),await tl(t,new Sa)}}else J(yr,"Using default OfflineComponentProvider"),await tl(t,new O1(void 0));return t._offlineComponents}async function Yy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J(yr,"Using user provided OnlineComponentProvider"),await Op(t,t._uninitializedComponentsProvider._online)):(J(yr,"Using default OnlineComponentProvider"),await Op(t,new Hl))),t._onlineComponents}function M1(t){return Yy(t).then((e=>e.syncEngine))}async function U1(t){const e=await Yy(t),n=e.eventManager;return n.onListen=T1.bind(null,e.syncEngine),n.onUnlisten=w1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=v1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=A1.bind(null,e.syncEngine),n}function F1(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new V1({next:m=>{f.Nu(),o.enqueueAndForget((()=>f1(i,p))),m.fromCache&&l.source==="server"?u.reject(new X(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new m1(c,f,{includeMetadataChanges:!0,qa:!0});return h1(i,p)})(await U1(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function Jy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Vp=new Map;/**
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
 */const Zy="firestore.googleapis.com",xp=!0;class Lp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zy,this.ssl=xp}else this.host=e.host,this.ssl=e.ssl??xp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ny;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<d0)throw new X(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jy(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new jP;switch(r.type){case"firstParty":return new zP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Vp.get(n);r&&(J("ComponentProvider","Removing Datastore"),Vp.delete(n),r.terminate())})(this),Promise.resolve()}}function B1(t,e,n,r={}){t=Wr(t,lc);const s=Tr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(mu(`https://${c}`),gu("Firestore",!0)),i.host!==Zy&&i.host!==c&&Ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!jr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=pt.MOCK_USER;else{u=kg(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new X(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new pt(p)}t._authCredentials=new $P(new j_(u,f))}}/**
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
 */class Jr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jr(this.firestore,e,this._query)}}class Qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}toJSON(){return{type:Qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(io(n,Qe._jsonSchema))return new Qe(e,r||null,new te(Oe.fromString(n.referencePath)))}}Qe._jsonSchemaVersion="firestore/documentReference/1.0",Qe._jsonSchema={type:Ge("string",Qe._jsonSchemaVersion),referencePath:Ge("string")};class lr extends Jr{constructor(e,n,r){super(e,n,oy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new te(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function wk(t,e,...n){if(t=Me(t),$_("collection","path",e),t instanceof lc){const r=Oe.fromString(e,...n);return Qd(r),new lr(t,null,r)}{if(!(t instanceof Qe||t instanceof lr))throw new X(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Qd(r),new lr(t.firestore,null,r)}}function Ak(t,e,...n){if(t=Me(t),arguments.length===1&&(e=Vu.newId()),$_("doc","path",e),t instanceof lc){const r=Oe.fromString(e,...n);return Gd(r),new Qe(t,null,new te(r))}{if(!(t instanceof Qe||t instanceof lr))throw new X(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Gd(r),new Qe(t.firestore,t instanceof lr?t.converter:null,new te(r))}}/**
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
 */const Mp="AsyncQueue";class Up{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new xy(this,"async_queue_retry"),this._c=()=>{const r=el();r&&J(Mp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=el();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=el();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new cr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ms(e))throw e;J(Mp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,On("INTERNAL UNHANDLED ERROR: ",Fp(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Ju.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ce(47125,{Pc:Fp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Fp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class uc extends lc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Up,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Up(e),this._firestoreClient=void 0,await e}}}function j1(t,e){const n=typeof t=="object"?t:Eu(),r=typeof t=="string"?t:Ea,s=Wa(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Sg("firestore");i&&B1(s,...i)}return s}function eE(t){if(t._terminated)throw new X(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||$1(t),t._firestoreClient}function $1(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new cC(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Jy(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new x1(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
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
 */class Bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bt(ct.fromBase64String(e))}catch(n){throw new X(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bt(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(io(e,Bt._jsonSchema))return Bt.fromBase64String(e.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:Ge("string",Bt._jsonSchemaVersion),bytes:Ge("string")};/**
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
 */class hc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rh{constructor(e){this._methodName=e}}/**
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
 */class mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mn._jsonSchemaVersion}}static fromJSON(e){if(io(e,mn._jsonSchema))return new mn(e.latitude,e.longitude)}}mn._jsonSchemaVersion="firestore/geoPoint/1.0",mn._jsonSchema={type:Ge("string",mn._jsonSchemaVersion),latitude:Ge("number"),longitude:Ge("number")};/**
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
 */class gn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(io(e,gn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new gn(e.vectorValues);throw new X(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gn._jsonSchemaVersion="firestore/vectorValue/1.0",gn._jsonSchema={type:Ge("string",gn._jsonSchemaVersion),vectorValues:Ge("object")};/**
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
 */const q1=/^__.*__$/;class H1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new oo(e,this.data,n,this.fieldTransforms)}}class tE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:t})}}class sh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new sh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Pa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(nE(this.Ac)&&q1.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class z1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||oc(e)}Cc(e,n,r,s=!1){return new sh({Ac:e,methodName:n,Dc:r,path:ot.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ih(t){const e=t._freezeSettings(),n=oc(t._databaseId);return new z1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function W1(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);oh("Data must be an object, but it was:",o,r);const c=rE(r,o);let l,u;if(i.merge)l=new Lt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=zl(e,p,n);if(!o.contains(m))throw new X(x.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);iE(f,m)||f.push(m)}l=new Lt(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new H1(new St(c),l,u)}class fc extends rh{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fc}}function K1(t,e,n,r){const s=t.Cc(1,e,n);oh("Data must be an object, but it was:",s,r);const i=[],o=St.empty();Ir(r,((l,u)=>{const f=ah(e,l,n);u=Me(u);const p=s.yc(f);if(u instanceof fc)i.push(f);else{const m=uo(u,p);m!=null&&(i.push(f),o.set(f,m))}}));const c=new Lt(i);return new tE(o,c,s.fieldTransforms)}function G1(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[zl(e,r,n)],l=[s];if(i.length%2!=0)throw new X(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(zl(e,i[m])),l.push(i[m+1]);const u=[],f=St.empty();for(let m=c.length-1;m>=0;--m)if(!iE(u,c[m])){const E=c[m];let P=l[m];P=Me(P);const N=o.yc(E);if(P instanceof fc)u.push(E);else{const D=uo(P,N);D!=null&&(u.push(E),f.set(E,D))}}const p=new Lt(u);return new tE(f,p,o.fieldTransforms)}function Q1(t,e,n,r=!1){return uo(n,t.Cc(r?4:3,e))}function uo(t,e){if(sE(t=Me(t)))return oh("Unsupported field value:",e,t),rE(t,e);if(t instanceof rh)return(function(r,s){if(!nE(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=uo(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:Aa(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Aa(s.serializer,i)}}if(r instanceof mn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bt)return{bytesValue:Ay(s.serializer,r._byteString)};if(r instanceof Qe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof gn)return(function(o,c){return{mapValue:{fields:{[Y_]:{stringValue:J_},[Ta]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return Bu(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Ya(r)}`)})(t,e)}function rE(t,e){const n={};return z_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ir(t,((r,s)=>{const i=uo(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function sE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof mn||t instanceof Bt||t instanceof Qe||t instanceof rh||t instanceof gn)}function oh(t,e,n){if(!sE(n)||!q_(n)){const r=Ya(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function zl(t,e,n){if((e=Me(e))instanceof hc)return e._internalPath;if(typeof e=="string")return ah(t,e);throw Pa("Field path arguments must be of type string or ",t,!1,void 0,n)}const X1=new RegExp("[~\\*/\\[\\]]");function ah(t,e,n){if(e.search(X1)>=0)throw Pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hc(...e.split("."))._internalPath}catch{throw Pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(x.INVALID_ARGUMENT,c+t+l)}function iE(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class oE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Y1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ch("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Y1 extends oE{data(){return super.data()}}function ch(t,e){return typeof e=="string"?ah(t,e):e instanceof hc?e._internalPath:e._delegate._internalPath}/**
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
 */function J1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lh{}class aE extends lh{}function Rk(t,e,...n){let r=[];e instanceof lh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof hh)).length,c=i.filter((l=>l instanceof uh)).length;if(o>1||o>0&&c>0)throw new X(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class uh extends aE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new uh(e,n,r)}_apply(e){const n=this._parse(e);return cE(e._query,n),new Jr(e.firestore,e.converter,Vl(e._query,n))}_parse(e){const n=ih(e.firestore);return(function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new X(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){jp(p,f);const P=[];for(const N of p)P.push(Bp(l,i,N));m={arrayValue:{values:P}}}else m=Bp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||jp(p,f),m=Q1(c,o,p,f==="in"||f==="not-in");return Ke.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class hh extends lh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)cE(o,l),o=Vl(o,l)})(e._query,n),new Jr(e.firestore,e.converter,Vl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fh extends aE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new fh(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new X(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ki(i,o)})(e._query,this._field,this._direction);return new Jr(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Us(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function bk(t,e="asc"){const n=e,r=ch("orderBy",t);return fh._create(r,n)}function Bp(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new X(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ay(e)&&n.indexOf("/")!==-1)throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!te.isDocumentKey(r))throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rp(t,new te(r))}if(n instanceof Qe)return rp(t,n._key);throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ya(n)}.`)}function jp(t,e){if(!Array.isArray(t)||t.length===0)throw new X(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cE(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new X(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Z1{convertValue(e,n="none"){switch(gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ir(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[Ta].arrayValue?.values?.map((r=>qe(r.doubleValue)));return new gn(n)}convertGeoPoint(e){return new mn(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ec(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hi(e));default:return null}}convertTimestamp(e){const n=pr(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Re(ky(r),9688,{name:e});const s=new zi(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||On(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function ek(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Vo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Is extends oE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ch("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Is._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Is._jsonSchemaVersion="firestore/documentSnapshot/1.0",Is._jsonSchema={type:Ge("string",Is._jsonSchemaVersion),bundleSource:Ge("string","DocumentSnapshot"),bundleName:Ge("string"),bundle:Ge("string")};class Xo extends Is{data(e={}){return super.data(e)}}class ws{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Xo(this._firestore,this._userDataWriter,r.key,r,new Vo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Xo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Vo(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Xo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Vo(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:tk(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ws._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Vu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:t})}}ws._jsonSchemaVersion="firestore/querySnapshot/1.0",ws._jsonSchema={type:Ge("string",ws._jsonSchemaVersion),bundleSource:Ge("string","QuerySnapshot"),bundleName:Ge("string"),bundle:Ge("string")};class nk extends Z1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,n)}}function Sk(t){t=Wr(t,Jr);const e=Wr(t.firestore,uc),n=eE(e),r=new nk(e);return J1(t._query),F1(n,t._query).then((s=>new ws(e,r,t,s)))}function Pk(t,e,n){t=Wr(t,Qe);const r=Wr(t.firestore,uc),s=ek(t.converter,e);return lE(r,[W1(ih(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,dn.none())])}function Ck(t,e,n,...r){t=Wr(t,Qe);const s=Wr(t.firestore,uc),i=ih(s);let o;return o=typeof(e=Me(e))=="string"||e instanceof hc?G1(i,"updateDoc",t._key,e,n,r):K1(i,"updateDoc",t._key,e),lE(s,[o.toMutation(t._key,dn.exists(!0))])}function lE(t,e){return(function(r,s){const i=new cr;return r.asyncQueue.enqueueAndForget((async()=>R1(await M1(r),s,i))),i.promise})(eE(t),e)}(function(e,n=!0){(function(s){xs=s})(Gr),$r(new fr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new uc(new qP(r.getProvider("auth-internal")),new WP(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),ln(Hd,zd,e),ln(Hd,zd,"esm2020")})();const rk={apiKey:"AIzaSyBRFiDaknpB8mPa_Wq_U6fCNK95LJrlPZU",authDomain:"imralphmaron.firebaseapp.com",projectId:"imralphmaron",storageBucket:"imralphmaron.firebasestorage.app",messagingSenderId:"742817279999",appId:"1:742817279999:web:c3e429bbbb675ae64fc1ca",measurementId:"G-F3ZSVCTWD3"},dh=Og(rk),sk=Ho(dh);lb(sk,a_);const kk=MP(dh),Nk=j1(dh),ph=uI(wI);ph.use(dI());ph.use(g_);ph.mount("#app");export{dk as A,Ut as B,yk as C,g_ as D,Xl as E,Ot as F,vk as G,Tk as H,kk as I,gk as J,pk as K,wk as L,Nk as M,Rk as N,bk as O,Sk as P,Ak as Q,Ck as R,Pk as S,hk as T,MP as U,Ek as V,TI as _,lk as a,eg as b,ck as c,Pm as d,Iv as e,uk as f,Nm as g,BT as h,At as i,AT as j,EI as k,_i as l,ik as m,Yl as n,sa as o,ps as p,Om as q,Ni as r,ak as s,HE as t,_k as u,fk as v,mk as w,oa as x,ok as y,AS as z};
