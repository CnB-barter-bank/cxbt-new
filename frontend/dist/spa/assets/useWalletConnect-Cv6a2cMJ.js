const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/exports-CZOqf00r.js","assets/chunk-Bj-mKKzh.js","assets/lit-element-CGguLZJe.js","assets/if-defined-ghVGx_lB.js","assets/ed25519-DFLYdrtd.js","assets/index.es-DGM67ydp.js","assets/esm-C-TguwCW.js","assets/browser-IyuN6U_1.js","assets/esm-M_mMwyI5.js","assets/w3m-modal-Bb2dbTJc.js","assets/preload-helper-a8rE3rwG.js","assets/decorators-C1NV6Kfd.js","assets/exports-DK5gP5EC.js","assets/ccip-tv_2JUCk.js","assets/utils-BGBDpM54.js","assets/_esm-BmptF5s6.js","assets/secp256k1-CGxyodSr.js"])))=>i.map(i=>d[i]);
import{r as e}from"./chunk-Bj-mKKzh.js";import{An as t,Fn as n,Vt as r,kn as i,pn as a,yn as o}from"./ccip-tv_2JUCk.js";import{E as s,O as c,T as l,_ as u,d,m as f,n as p,p as m,w as h}from"./_esm-BmptF5s6.js";import{t as g}from"./preload-helper-a8rE3rwG.js";import{C as _,S as v,_ as y,a as b,b as x,c as ee,d as S,f as C,g as te,h as w,i as T,m as ne,n as E,o as D,r as re,s as ie,u as ae,v as oe,w as se,x as ce,y as le}from"./exports-DK5gP5EC.js";import{$t as O,At as ue,Bt as k,Dt as de,Et as fe,Ft as pe,Gt as me,Ht as he,It as A,Jt as j,Kt as M,Lt as N,Mt as ge,Nt as _e,Pt as ve,Qt as P,Rt as F,Ut as ye,Vt as be,Wt as I,Xt as xe,Yt as L,Zt as R,an as Se,cn as Ce,en as we,in as Te,jt as z,ln as Ee,mt as De,n as Oe,nn as B,on as ke,qt as Ae,rn as je,sn as Me,t as Ne,tn as Pe,un as Fe,wt as V,zt as H}from"./esm-C-TguwCW.js";import{a as U,t as W,u as G}from"./lit-element-CGguLZJe.js";import{o as K,s as q,t as J}from"./if-defined-ghVGx_lB.js";import{n as Ie,r as Le}from"./browser-IyuN6U_1.js";import"./decorators-C1NV6Kfd.js";import{g as Re}from"./index.es-DIKwiSsl.js";import{a as ze,i as Be,n as Ve,r as He}from"./index.es-DGM67ydp.js";import{a as Ue,c as We,i as Ge,n as Ke,o as qe,r as Je,s as Ye,t as Xe}from"./ed25519-DFLYdrtd.js";function Ze(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var Qe={},$e=[],et=()=>{},tt=()=>!1,nt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),rt=e=>e.startsWith(`onUpdate:`),it=Object.assign,at=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},ot=Object.prototype.hasOwnProperty,st=(e,t)=>ot.call(e,t),Y=Array.isArray,ct=e=>_t(e)===`[object Map]`,lt=e=>_t(e)===`[object Set]`,ut=e=>_t(e)===`[object Date]`,dt=e=>_t(e)===`[object RegExp]`,X=e=>typeof e==`function`,ft=e=>typeof e==`string`,pt=e=>typeof e==`symbol`,mt=e=>typeof e==`object`&&!!e,ht=e=>(mt(e)||X(e))&&X(e.then)&&X(e.catch),gt=Object.prototype.toString,_t=e=>gt.call(e),vt=e=>_t(e).slice(8,-1),yt=e=>_t(e)===`[object Object]`,bt=e=>ft(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,xt=Ze(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),St=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ct=/-\w/g,wt=St(e=>e.replace(Ct,e=>e.slice(1).toUpperCase())),Tt=/\B([A-Z])/g,Et=St(e=>e.replace(Tt,`-$1`).toLowerCase()),Dt=St(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ot=St(e=>e?`on${Dt(e)}`:``),kt=(e,t)=>!Object.is(e,t),At=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},jt=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Mt=e=>{let t=parseFloat(e);return isNaN(t)?e:t},Nt=e=>{let t=ft(e)?Number(e):NaN;return isNaN(t)?e:t},Pt,Ft=()=>Pt||(Pt=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}),It=Ze(`Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol`);function Lt(e){if(Y(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=ft(r)?Vt(r):Lt(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(ft(e)||mt(e))return e}var Rt=/;(?![^(]*\))/g,zt=/:([^]+)/,Bt=/\/\*[^]*?\*\//g;function Vt(e){let t={};return e.replace(Bt,``).split(Rt).forEach(e=>{if(e){let n=e.split(zt);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Ht(e){let t=``;if(ft(e))t=e;else if(Y(e))for(let n=0;n<e.length;n++){let r=Ht(e[n]);r&&(t+=r+` `)}else if(mt(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}function Ut(e){if(!e)return null;let{class:t,style:n}=e;return t&&!ft(t)&&(e.class=Ht(t)),n&&(e.style=Lt(n)),e}var Wt=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,Gt=Ze(Wt);Wt+``;function Kt(e){return!!e||e===``}function qt(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Jt(e[r],t[r]);return n}function Jt(e,t){if(e===t)return!0;let n=ut(e),r=ut(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=pt(e),r=pt(t),n||r)return e===t;if(n=Y(e),r=Y(t),n||r)return n&&r?qt(e,t):!1;if(n=mt(e),r=mt(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Jt(e[n],t[n]))return!1}}return String(e)===String(t)}function Yt(e,t){return e.findIndex(e=>Jt(e,t))}var Xt=e=>!!(e&&e.__v_isRef===!0),Zt=e=>ft(e)?e:e==null?``:Y(e)||mt(e)&&(e.toString===gt||!X(e.toString))?Xt(e)?Zt(e.value):JSON.stringify(e,Qt,2):String(e),Qt=(e,t)=>Xt(t)?Qt(e,t.value):ct(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[$t(t,r)+` =>`]=n,e),{})}:lt(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>$t(e))}:pt(t)?$t(t):mt(t)&&!Y(t)&&!yt(t)?String(t):t,$t=(e,t=``)=>pt(e)?`Symbol(${e.description??t})`:e;function en(e){return e==null?`initial`:typeof e==`string`?e===``?` `:e:String(e)}var tn,nn=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=tn,!e&&tn&&(this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=tn;try{return tn=this,e()}finally{tn=t}}}on(){++this._on===1&&(this.prevScope=tn,tn=this)}off(){this._on>0&&--this._on===0&&(tn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function rn(e){return new nn(e)}function an(){return tn}function on(e,t=!1){tn&&tn.cleanups.push(e)}var sn,cn=new WeakSet,ln=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tn&&tn.active&&tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,cn.has(this)&&(cn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||pn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,On(this),gn(this);let e=sn,t=wn;sn=this,wn=!0;try{return this.fn()}finally{_n(this),sn=e,wn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)bn(e);this.deps=this.depsTail=void 0,On(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?cn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vn(this)&&this.run()}get dirty(){return vn(this)}},un=0,dn,fn;function pn(e,t=!1){if(e.flags|=8,t){e.next=fn,fn=e;return}e.next=dn,dn=e}function mn(){un++}function hn(){if(--un>0)return;if(fn){let e=fn;for(fn=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;dn;){let t=dn;for(dn=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||(e=t)}t=n}}if(e)throw e}function gn(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function _n(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),bn(r),xn(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function vn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(yn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function yn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===kn)||(e.globalVersion=kn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!vn(e))))return;e.flags|=2;let t=e.dep,n=sn,r=wn;sn=e,wn=!0;try{gn(e);let n=e.fn(e._value);(t.version===0||kt(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{sn=n,wn=r,_n(e),e.flags&=-3}}function bn(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)bn(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function xn(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}function Sn(e,t){e.effect instanceof ln&&(e=e.effect.fn);let n=new ln(e);t&&it(n,t);try{n.run()}catch(e){throw n.stop(),e}let r=n.run.bind(n);return r.effect=n,r}function Cn(e){e.effect.stop()}var wn=!0,Tn=[];function En(){Tn.push(wn),wn=!1}function Dn(){let e=Tn.pop();wn=e===void 0?!0:e}function On(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=sn;sn=void 0;try{t()}finally{sn=e}}}var kn=0,An=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},jn=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!sn||!wn||sn===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==sn)t=this.activeLink=new An(sn,this),sn.deps?(t.prevDep=sn.depsTail,sn.depsTail.nextDep=t,sn.depsTail=t):sn.deps=sn.depsTail=t,Mn(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=sn.depsTail,t.nextDep=void 0,sn.depsTail.nextDep=t,sn.depsTail=t,sn.deps===t&&(sn.deps=e)}return t}trigger(e){this.version++,kn++,this.notify(e)}notify(e){mn();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{hn()}}};function Mn(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Mn(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Nn=new WeakMap,Pn=Symbol(``),Fn=Symbol(``),In=Symbol(``);function Ln(e,t,n){if(wn&&sn){let t=Nn.get(e);t||Nn.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new jn),r.map=t,r.key=n),r.track()}}function Rn(e,t,n,r,i,a){let o=Nn.get(e);if(!o){kn++;return}let s=e=>{e&&e.trigger()};if(mn(),t===`clear`)o.forEach(s);else{let i=Y(e),a=i&&bt(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===In||!pt(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(In)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Pn)),ct(e)&&s(o.get(Fn)));break;case`delete`:i||(s(o.get(Pn)),ct(e)&&s(o.get(Fn)));break;case`set`:ct(e)&&s(o.get(Pn));break}}hn()}function zn(e,t){let n=Nn.get(e);return n&&n.get(t)}function Bn(e){let t=jr(e);return t===e?t:(Ln(t,`iterate`,In),kr(e)?t:t.map(Nr))}function Vn(e){return Ln(e=jr(e),`iterate`,In),e}function Hn(e,t){return Or(e)?Pr(Dr(e)?Nr(t):t):Nr(t)}var Un={__proto__:null,[Symbol.iterator](){return Wn(this,Symbol.iterator,e=>Hn(this,e))},concat(...e){return Bn(this).concat(...e.map(e=>Y(e)?Bn(e):e))},entries(){return Wn(this,`entries`,e=>(e[1]=Hn(this,e[1]),e))},every(e,t){return Kn(this,`every`,e,t,void 0,arguments)},filter(e,t){return Kn(this,`filter`,e,t,e=>e.map(e=>Hn(this,e)),arguments)},find(e,t){return Kn(this,`find`,e,t,e=>Hn(this,e),arguments)},findIndex(e,t){return Kn(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return Kn(this,`findLast`,e,t,e=>Hn(this,e),arguments)},findLastIndex(e,t){return Kn(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return Kn(this,`forEach`,e,t,void 0,arguments)},includes(...e){return Jn(this,`includes`,e)},indexOf(...e){return Jn(this,`indexOf`,e)},join(e){return Bn(this).join(e)},lastIndexOf(...e){return Jn(this,`lastIndexOf`,e)},map(e,t){return Kn(this,`map`,e,t,void 0,arguments)},pop(){return Yn(this,`pop`)},push(...e){return Yn(this,`push`,e)},reduce(e,...t){return qn(this,`reduce`,e,t)},reduceRight(e,...t){return qn(this,`reduceRight`,e,t)},shift(){return Yn(this,`shift`)},some(e,t){return Kn(this,`some`,e,t,void 0,arguments)},splice(...e){return Yn(this,`splice`,e)},toReversed(){return Bn(this).toReversed()},toSorted(e){return Bn(this).toSorted(e)},toSpliced(...e){return Bn(this).toSpliced(...e)},unshift(...e){return Yn(this,`unshift`,e)},values(){return Wn(this,`values`,e=>Hn(this,e))}};function Wn(e,t,n){let r=Vn(e),i=r[t]();return r!==e&&!kr(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var Gn=Array.prototype;function Kn(e,t,n,r,i,a){let o=Vn(e),s=o!==e&&!kr(e),c=o[t];if(c!==Gn[t]){let t=c.apply(e,a);return s?Nr(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Hn(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function qn(e,t,n,r){let i=Vn(e),a=i!==e&&!kr(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=Hn(e,t)),n.call(this,t,Hn(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?Hn(e,c):c}function Jn(e,t,n){let r=jr(e);Ln(r,`iterate`,In);let i=r[t](...n);return(i===-1||i===!1)&&Ar(n[0])?(n[0]=jr(n[0]),r[t](...n)):i}function Yn(e,t,n=[]){En(),mn();let r=jr(e)[t].apply(e,n);return hn(),Dn(),r}var Xn=Ze(`__proto__,__v_isRef,__isVue`),Zn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(pt));function Qn(e){pt(e)||(e=String(e));let t=jr(this);return Ln(t,`has`,e),t.hasOwnProperty(e)}var $n=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?yr:vr:i?_r:gr).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=Y(e);if(!r){let e;if(a&&(e=Un[t]))return e;if(t===`hasOwnProperty`)return Qn}let o=Reflect.get(e,t,Fr(e)?e:n);if((pt(t)?Zn.has(t):Xn(t))||(r||Ln(e,`get`,t),i))return o;if(Fr(o)){let e=a&&bt(t)?o:o.value;return r&&mt(e)?wr(e):e}return mt(o)?r?wr(o):Sr(o):o}},er=class extends $n{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=Y(e)&&bt(t);if(!this._isShallow){let e=Or(i);if(!kr(n)&&!Or(n)&&(i=jr(i),n=jr(n)),!a&&Fr(i)&&!Fr(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:st(e,t),s=Reflect.set(e,t,n,Fr(e)?e:r);return e===jr(r)&&(o?kt(n,i)&&Rn(e,`set`,t,n,i):Rn(e,`add`,t,n)),s}deleteProperty(e,t){let n=st(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Rn(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!pt(t)||!Zn.has(t))&&Ln(e,`has`,t),n}ownKeys(e){return Ln(e,`iterate`,Y(e)?`length`:Pn),Reflect.ownKeys(e)}},tr=class extends $n{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},nr=new er,rr=new tr,ir=new er(!0),ar=new tr(!0),or=e=>e,sr=e=>Reflect.getPrototypeOf(e);function cr(e,t,n){return function(...r){let i=this.__v_raw,a=jr(i),o=ct(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?or:t?Pr:Nr;return!t&&Ln(a,`iterate`,c?Fn:Pn),it(Object.create(l),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}}})}}function lr(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function ur(e,t){let n={get(n){let r=this.__v_raw,i=jr(r),a=jr(n);e||(kt(n,a)&&Ln(i,`get`,n),Ln(i,`get`,a));let{has:o}=sr(i),s=t?or:e?Pr:Nr;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&Ln(jr(t),`iterate`,Pn),t.size},has(t){let n=this.__v_raw,r=jr(n),i=jr(t);return e||(kt(t,i)&&Ln(r,`has`,t),Ln(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=jr(a),s=t?or:e?Pr:Nr;return!e&&Ln(o,`iterate`,Pn),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return it(n,e?{add:lr(`add`),set:lr(`set`),delete:lr(`delete`),clear:lr(`clear`)}:{add(e){let n=jr(this),r=sr(n),i=jr(e),a=!t&&!kr(e)&&!Or(e)?i:e;return r.has.call(n,a)||kt(e,a)&&r.has.call(n,e)||kt(i,a)&&r.has.call(n,i)||(n.add(a),Rn(n,`add`,a,a)),this},set(e,n){!t&&!kr(n)&&!Or(n)&&(n=jr(n));let r=jr(this),{has:i,get:a}=sr(r),o=i.call(r,e);o||(e=jr(e),o=i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?kt(n,s)&&Rn(r,`set`,e,n,s):Rn(r,`add`,e,n),this},delete(e){let t=jr(this),{has:n,get:r}=sr(t),i=n.call(t,e);i||(e=jr(e),i=n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Rn(t,`delete`,e,void 0,a),o},clear(){let e=jr(this),t=e.size!==0,n=e.clear();return t&&Rn(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=cr(r,e,t)}),n}function dr(e,t){let n=ur(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(st(n,r)&&r in t?n:t,r,i)}var fr={get:dr(!1,!1)},pr={get:dr(!1,!0)},mr={get:dr(!0,!1)},hr={get:dr(!0,!0)},gr=new WeakMap,_r=new WeakMap,vr=new WeakMap,yr=new WeakMap;function br(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function xr(e){return e.__v_skip||!Object.isExtensible(e)?0:br(vt(e))}function Sr(e){return Or(e)?e:Er(e,!1,nr,fr,gr)}function Cr(e){return Er(e,!1,ir,pr,_r)}function wr(e){return Er(e,!0,rr,mr,vr)}function Tr(e){return Er(e,!0,ar,hr,yr)}function Er(e,t,n,r,i){if(!mt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=xr(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function Dr(e){return Or(e)?Dr(e.__v_raw):!!(e&&e.__v_isReactive)}function Or(e){return!!(e&&e.__v_isReadonly)}function kr(e){return!!(e&&e.__v_isShallow)}function Ar(e){return e?!!e.__v_raw:!1}function jr(e){let t=e&&e.__v_raw;return t?jr(t):e}function Mr(e){return!st(e,`__v_skip`)&&Object.isExtensible(e)&&jt(e,`__v_skip`,!0),e}var Nr=e=>mt(e)?Sr(e):e,Pr=e=>mt(e)?wr(e):e;function Fr(e){return e?e.__v_isRef===!0:!1}function Ir(e){return Rr(e,!1)}function Lr(e){return Rr(e,!0)}function Rr(e,t){return Fr(e)?e:new zr(e,t)}var zr=class{constructor(e,t){this.dep=new jn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:jr(e),this._value=t?e:Nr(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||kr(e)||Or(e);e=n?e:jr(e),kt(e,t)&&(this._rawValue=e,this._value=n?e:Nr(e),this.dep.trigger())}};function Br(e){e.dep&&e.dep.trigger()}function Vr(e){return Fr(e)?e.value:e}function Hr(e){return X(e)?e():Vr(e)}var Ur={get:(e,t,n)=>t===`__v_raw`?e:Vr(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return Fr(i)&&!Fr(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Wr(e){return Dr(e)?e:new Proxy(e,Ur)}var Gr=class{constructor(e){this.__v_isRef=!0,this._value=void 0;let t=this.dep=new jn,{get:n,set:r}=e(t.track.bind(t),t.trigger.bind(t));this._get=n,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}};function Kr(e){return new Gr(e)}function qr(e){let t=Y(e)?Array(e.length):{};for(let n in e)t[n]=Zr(e,n);return t}var Jr=class{constructor(e,t,n){this._object=e,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._key=pt(t)?t:String(t),this._raw=jr(e);let r=!0,i=e;if(!Y(e)||pt(this._key)||!bt(this._key))do r=!Ar(i)||kr(i);while(r&&(i=i.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=Vr(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Fr(this._raw[this._key])){let t=this._object[this._key];if(Fr(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return zn(this._raw,this._key)}},Yr=class{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}};function Xr(e,t,n){return Fr(e)?e:X(e)?new Yr(e):mt(e)&&arguments.length>1?Zr(e,t,n):Ir(e)}function Zr(e,t,n){return new Jr(e,t,n)}var Qr=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new jn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&sn!==this)return pn(this,!0),!0}get value(){let e=this.dep.track();return yn(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function $r(e,t,n=!1){let r,i;return X(e)?r=e:(r=e.get,i=e.set),new Qr(r,i,n)}var ei={GET:`get`,HAS:`has`,ITERATE:`iterate`},ti={SET:`set`,ADD:`add`,DELETE:`delete`,CLEAR:`clear`},ni={},ri=new WeakMap,ii=void 0;function ai(){return ii}function oi(e,t=!1,n=ii){if(n){let t=ri.get(n);t||ri.set(n,t=[]),t.push(e)}}function si(e,t,n=Qe){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:kr(e)||i===!1||i===0?ci(e,1):ci(e),u,d,f,p,m=!1,h=!1;if(Fr(e)?(d=()=>e.value,m=kr(e)):Dr(e)?(d=()=>l(e),m=!0):Y(e)?(h=!0,m=e.some(e=>Dr(e)||kr(e)),d=()=>e.map(e=>{if(Fr(e))return e.value;if(Dr(e))return l(e);if(X(e))return c?c(e,2):e()})):d=X(e)?t?c?()=>c(e,2):e:()=>{if(f){En();try{f()}finally{Dn()}}let t=ii;ii=u;try{return c?c(e,3,[p]):e(p)}finally{ii=t}}:et,t&&i){let e=d,t=i===!0?1/0:i;d=()=>ci(e(),t)}let g=an(),_=()=>{u.stop(),g&&g.active&&at(g.effects,u)};if(a&&t){let e=t;t=(...t)=>{e(...t),_()}}let v=h?Array(e.length).fill(ni):ni,y=e=>{if(!(!(u.flags&1)||!u.dirty&&!e))if(t){let e=u.run();if(i||m||(h?e.some((e,t)=>kt(e,v[t])):kt(e,v))){f&&f();let n=ii;ii=u;try{let n=[e,v===ni?void 0:h&&v[0]===ni?[]:v,p];v=e,c?c(t,3,n):t(...n)}finally{ii=n}}}else u.run()};return s&&s(y),u=new ln(d),u.scheduler=o?()=>o(y,!1):y,p=e=>oi(e,!1,u),f=u.onStop=()=>{let e=ri.get(u);if(e){if(c)c(e,4);else for(let t of e)t();ri.delete(u)}},t?r?y(!0):v=u.run():o?o(y.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function ci(e,t=1/0,n){if(t<=0||!mt(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Fr(e))ci(e.value,t,n);else if(Y(e))for(let r=0;r<e.length;r++)ci(e[r],t,n);else if(lt(e)||ct(e))e.forEach(e=>{ci(e,t,n)});else if(yt(e)){for(let r in e)ci(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ci(e[r],t,n)}return e}var li=[];function ui(e){li.push(e)}function di(){li.pop()}function fi(e,t){}var pi={SETUP_FUNCTION:0,0:`SETUP_FUNCTION`,RENDER_FUNCTION:1,1:`RENDER_FUNCTION`,NATIVE_EVENT_HANDLER:5,5:`NATIVE_EVENT_HANDLER`,COMPONENT_EVENT_HANDLER:6,6:`COMPONENT_EVENT_HANDLER`,VNODE_HOOK:7,7:`VNODE_HOOK`,DIRECTIVE_HOOK:8,8:`DIRECTIVE_HOOK`,TRANSITION_HOOK:9,9:`TRANSITION_HOOK`,APP_ERROR_HANDLER:10,10:`APP_ERROR_HANDLER`,APP_WARN_HANDLER:11,11:`APP_WARN_HANDLER`,FUNCTION_REF:12,12:`FUNCTION_REF`,ASYNC_COMPONENT_LOADER:13,13:`ASYNC_COMPONENT_LOADER`,SCHEDULER:14,14:`SCHEDULER`,COMPONENT_UPDATE:15,15:`COMPONENT_UPDATE`,APP_UNMOUNT_CLEANUP:16,16:`APP_UNMOUNT_CLEANUP`},mi={sp:`serverPrefetch hook`,bc:`beforeCreate hook`,c:`created hook`,bm:`beforeMount hook`,m:`mounted hook`,bu:`beforeUpdate hook`,u:`updated`,bum:`beforeUnmount hook`,um:`unmounted hook`,a:`activated hook`,da:`deactivated hook`,ec:`errorCaptured hook`,rtc:`renderTracked hook`,rtg:`renderTriggered hook`,0:`setup function`,1:`render function`,2:`watcher getter`,3:`watcher callback`,4:`watcher cleanup function`,5:`native event handler`,6:`component event handler`,7:`vnode hook`,8:`directive hook`,9:`transition hook`,10:`app errorHandler`,11:`app warnHandler`,12:`ref function`,13:`async component loader`,14:`scheduler flush`,15:`component update`,16:`app unmount cleanup function`};function hi(e,t,n,r){try{return r?e(...r):e()}catch(e){_i(e,t,n)}}function gi(e,t,n,r){if(X(e)){let i=hi(e,t,n,r);return i&&ht(i)&&i.catch(e=>{_i(e,t,n)}),i}if(Y(e)){let i=[];for(let a=0;a<e.length;a++)i.push(gi(e[a],t,n,r));return i}}function _i(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Qe;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){En(),hi(a,null,10,[e,i,o]),Dn();return}}vi(e,n,i,r,o)}function vi(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var yi=[],bi=-1,xi=[],Si=null,Ci=0,wi=Promise.resolve(),Ti=null;function Ei(e){let t=Ti||wi;return e?t.then(this?e.bind(this):e):t}function Di(e){let t=bi+1,n=yi.length;for(;t<n;){let r=t+n>>>1,i=yi[r],a=Ni(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function Oi(e){if(!(e.flags&1)){let t=Ni(e),n=yi[yi.length-1];!n||!(e.flags&2)&&t>=Ni(n)?yi.push(e):yi.splice(Di(t),0,e),e.flags|=1,ki()}}function ki(){Ti||(Ti=wi.then(Pi))}function Ai(e){Y(e)?xi.push(...e):Si&&e.id===-1?Si.splice(Ci+1,0,e):e.flags&1||(xi.push(e),e.flags|=1),ki()}function ji(e,t,n=bi+1){for(;n<yi.length;n++){let t=yi[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;yi.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Mi(e){if(xi.length){let e=[...new Set(xi)].sort((e,t)=>Ni(e)-Ni(t));if(xi.length=0,Si){Si.push(...e);return}for(Si=e,Ci=0;Ci<Si.length;Ci++){let e=Si[Ci];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Si=null,Ci=0}}var Ni=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Pi(e){try{for(bi=0;bi<yi.length;bi++){let e=yi[bi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),hi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;bi<yi.length;bi++){let e=yi[bi];e&&(e.flags&=-2)}bi=-1,yi.length=0,Mi(e),Ti=null,(yi.length||xi.length)&&Pi(e)}}var Fi,Ii=[];function Li(e,t){var n,r;Fi=e,Fi?(Fi.enabled=!0,Ii.forEach(({event:e,args:t})=>Fi.emit(e,...t)),Ii=[]):typeof window<`u`&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes(`jsdom`))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(e=>{Li(e,t)}),setTimeout(()=>{Fi||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ii=[])},3e3)):Ii=[]}var Ri=null,zi=null;function Bi(e){let t=Ri;return Ri=e,zi=e&&e.type.__scopeId||null,t}function Vi(e){zi=e}function Hi(){zi=null}var Ui=e=>Wi;function Wi(e,t=Ri,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Bc(-1);let i=Bi(t),a;try{a=e(...n)}finally{Bi(i),r._d&&Bc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Gi(e,t){if(Ri===null)return e;let n=kl(Ri),r=e.dirs||(e.dirs=[]);for(let e=0;e<t.length;e++){let[i,a,o,s=Qe]=t[e];i&&(X(i)&&(i={mounted:i,updated:i}),i.deep&&ci(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:s}))}return e}function Ki(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(En(),gi(c,n,8,[e.el,s,e,t]),Dn())}}function qi(e,t){if(dl){let n=dl.provides,r=dl.parent&&dl.parent.provides;r===n&&(n=dl.provides=Object.create(r)),n[e]=t}}function Ji(e,t,n=!1){let r=fl();if(r||Ds){let i=Ds?Ds._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&X(t)?t.call(r&&r.proxy):t}}function Yi(){return!!(fl()||Ds)}var Xi=Symbol.for(`v-scx`),Zi=()=>Ji(Xi);function Qi(e,t){return na(e,null,t)}function $i(e,t){return na(e,null,{flush:`post`})}function ea(e,t){return na(e,null,{flush:`sync`})}function ta(e,t,n){return na(e,t,n)}function na(e,t,n=Qe){let{immediate:r,deep:i,flush:a,once:o}=n,s=it({},n),c=t&&r||!t&&a!==`post`,l;if(vl){if(a===`sync`){let e=Zi();l=e.__watcherHandles||(e.__watcherHandles=[])}else if(!c){let e=()=>{};return e.stop=et,e.resume=et,e.pause=et,e}}let u=dl;s.call=(e,t,n)=>gi(e,u,t,n);let d=!1;a===`post`?s.scheduler=e=>{oc(e,u&&u.suspense)}:a!==`sync`&&(d=!0,s.scheduler=(e,t)=>{t?e():Oi(e)}),s.augmentJob=e=>{t&&(e.flags|=4),d&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};let f=si(e,t,s);return vl&&(l?l.push(f):c&&f()),f}function ra(e,t,n){let r=this.proxy,i=ft(e)?e.includes(`.`)?ia(r,e):()=>r[e]:e.bind(r,r),a;X(t)?a=t:(a=t.handler,n=t);let o=hl(this),s=na(i,a.bind(r),n);return o(),s}function ia(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var aa=Symbol(`_vte`),oa=e=>e.__isTeleport,sa=e=>e&&(e.disabled||e.disabled===``),ca=e=>e&&(e.defer||e.defer===``),la=e=>typeof SVGElement<`u`&&e instanceof SVGElement,ua=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,da=(e,t)=>{let n=e&&e.to;return ft(n)?t?t(n):null:n},fa={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g}}=l,_=sa(t.props),{shapeFlag:v,children:y,dynamicChildren:b}=t;if(e==null){let e=t.el=h(``),l=t.anchor=h(``);p(e,n,r),p(l,n,r);let d=(e,t)=>{v&16&&u(y,e,t,i,a,o,s,c)},f=()=>{let e=t.target=da(t.props,m),n=_a(e,t,h,p);e&&(o!==`svg`&&la(e)?o=`svg`:o!==`mathml`&&ua(e)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(e),_||(d(e,n),ga(t,!1)))};_&&(d(n,l),ga(t,!0)),ca(t.props)||a&&a.pendingBranch?(t.el.__isMounted=!1,oc(()=>{t.el.__isMounted===!1&&(f(),delete t.el.__isMounted)},a)):f()}else{t.el=e.el,t.targetStart=e.targetStart;let u=t.anchor=e.anchor,p=t.target=e.target,h=t.targetAnchor=e.targetAnchor;if(e.el.__isMounted===!1){oc(()=>{fa.process(e,t,n,r,i,a,o,s,c,l)},a);return}let g=sa(e.props),v=g?n:p,y=g?u:h;if(o===`svg`||la(p)?o=`svg`:(o===`mathml`||ua(p))&&(o=`mathml`),b?(f(e.dynamicChildren,b,v,i,a,o,s),pc(e,t,!0)):c||d(e,t,v,y,i,a,o,s,!1),_)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):pa(t,n,u,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=t.target=da(t.props,m);e&&pa(t,e,null,l,0)}else g&&pa(t,p,h,l,1);ga(t,_)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e;if(d&&(i(l),i(u)),a&&i(c),o&16){let e=a||!sa(f);for(let i=0;i<s.length;i++){let a=s[i];r(a,t,n,e,!!a.dynamicChildren)}}},move:pa,hydrate:ma};function pa(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),(!d||sa(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function ma(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=da(t.props,c),h=sa(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||_a(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||_a(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),ga(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var ha=fa;function ga(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function _a(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[aa]=o,e&&(r(a,e,i),r(o,e,i)),o}var va=Symbol(`_leaveCb`),ya=Symbol(`_enterCb`);function ba(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xo(()=>{e.isMounted=!0}),wo(()=>{e.isUnmounting=!0}),e}var xa=[Function,Array],Sa={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xa,onEnter:xa,onAfterEnter:xa,onEnterCancelled:xa,onBeforeLeave:xa,onLeave:xa,onAfterLeave:xa,onLeaveCancelled:xa,onBeforeAppear:xa,onAppear:xa,onAfterAppear:xa,onAppearCancelled:xa},Ca=e=>{let t=e.subTree;return t.component?Ca(t.component):t},wa={name:`BaseTransition`,props:Sa,setup(e,{slots:t}){let n=fl(),r=ba();return()=>{let i=t.default&&Ma(t.default(),!0);if(!i||!i.length)return;let a=Ta(i),o=jr(e),{mode:s}=o;if(r.isLeaving)return ka(a);let c=Aa(a);if(!c)return ka(a);let l=Oa(c,o,r,n,e=>l=e);c.type!==Nc&&ja(c,l);let u=n.subTree&&Aa(n.subTree);if(u&&u.type!==Nc&&!Gc(u,c)&&Ca(n).type!==Nc){let e=Oa(u,o,r,n);if(ja(u,e),s===`out-in`&&c.type!==Nc)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},ka(a);s===`in-out`&&c.type!==Nc?e.delayLeave=(e,t,n)=>{let i=Da(r,u);i[String(u.key)]=u,e[va]=()=>{t(),e[va]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return a}}};function Ta(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==Nc){t=n;break}}return t}var Ea=wa;function Da(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Oa(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:g,onAppear:_,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),x=Da(n,e),ee=(e,t)=>{e&&gi(e,r,9,t)},S=(e,t)=>{let n=t[1];ee(e,t),Y(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},C={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted)if(a)r=g||c;else return;t[va]&&t[va](!0);let i=x[b];i&&Gc(e,i)&&i.el[va]&&i.el[va](),ee(r,[t])},enter(t){if(x[b]===e)return;let r=l,i=u,o=d;if(!n.isMounted)if(a)r=_||l,i=v||u,o=y||d;else return;let s=!1;t[ya]=e=>{s||(s=!0,ee(e?o:i,[t]),C.delayedLeave&&C.delayedLeave(),t[ya]=void 0)};let c=t[ya].bind(null,!1);r?S(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[ya]&&t[ya](!0),n.isUnmounting)return r();ee(f,[t]);let a=!1;t[va]=n=>{a||(a=!0,r(),ee(n?h:m,[t]),t[va]=void 0,x[i]===e&&delete x[i])};let o=t[va].bind(null,!1);x[i]=e,p?S(p,[t,o]):o()},clone(e){let a=Oa(e,t,n,r,i);return i&&i(a),a}};return C}function ka(e){if(co(e))return e=$c(e),e.children=null,e}function Aa(e){if(!co(e))return oa(e.type)&&e.children?Ta(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&X(n.default))return n.default()}}function ja(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ja(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ma(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===jc?(o.patchFlag&128&&i++,r=r.concat(Ma(o.children,t,s))):(t||o.type!==Nc)&&r.push(s==null?o:$c(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function Na(e,t){return X(e)?it({name:e.name},t,{setup:e}):e}function Pa(){let e=fl();return e?(e.appContext.config.idPrefix||`v`)+`-`+e.ids[0]+ e.ids[1]++:``}function Fa(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function Ia(e){let t=fl(),n=Lr(null);if(t){let r=t.refs===Qe?t.refs={}:t.refs;Object.defineProperty(r,e,{enumerable:!0,get:()=>n.value,set:e=>n.value=e})}return n}function La(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Ra=new WeakMap;function za(e,t,n,r,i=!1){if(Y(e)){e.forEach((e,a)=>za(e,t&&(Y(t)?t[a]:t),n,r,i));return}if(ao(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&za(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?kl(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,u=s.refs===Qe?s.refs={}:s.refs,d=s.setupState,f=jr(d),p=d===Qe?tt:e=>La(u,e)?!1:st(f,e),m=(e,t)=>!(t&&La(u,t));if(l!=null&&l!==c){if(Ba(t),ft(l))u[l]=null,p(l)&&(d[l]=null);else if(Fr(l)){let e=t;m(l,e.k)&&(l.value=null),e.k&&(u[e.k]=null)}}if(X(c))hi(c,s,12,[o,u]);else{let t=ft(c),r=Fr(c);if(t||r){let s=()=>{if(e.f){let n=t?p(c)?d[c]:u[c]:m(c)||!e.k?c.value:u[e.k];if(i)Y(n)&&at(n,a);else if(Y(n))n.includes(a)||n.push(a);else if(t)u[c]=[a],p(c)&&(d[c]=u[c]);else{let t=[a];m(c,e.k)&&(c.value=t),e.k&&(u[e.k]=t)}}else t?(u[c]=o,p(c)&&(d[c]=o)):r&&(m(c,e.k)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){let t=()=>{s(),Ra.delete(e)};t.id=-1,Ra.set(e,t),oc(t,n)}else Ba(e),s()}}}function Ba(e){let t=Ra.get(e);t&&(t.flags|=8,Ra.delete(e))}var Va=!1,Ha=()=>{Va||(console.error(`Hydration completed but contains mismatches.`),Va=!0)},Ua=e=>e.namespaceURI.includes(`svg`)&&e.tagName!==`foreignObject`,Wa=e=>e.namespaceURI.includes(`MathML`),Ga=e=>{if(e.nodeType===1){if(Ua(e))return`svg`;if(Wa(e))return`mathml`}},Ka=e=>e.nodeType===8;function qa(e){let{mt:t,p:n,o:{patchProp:r,createText:i,nextSibling:a,parentNode:o,remove:s,insert:c,createComment:l}}=e,u=(e,t)=>{if(!t.hasChildNodes()){n(null,e,t),Mi(),t._vnode=e;return}d(t.firstChild,e,null,null,null),Mi(),t._vnode=e},d=(n,r,s,l,u,y=!1)=>{y=y||!!r.dynamicChildren;let b=Ka(n)&&n.data===`[`,x=()=>h(n,r,s,l,u,b),{type:ee,ref:S,shapeFlag:C,patchFlag:te}=r,w=n.nodeType;r.el=n,te===-2&&(y=!1,r.dynamicChildren=null);let T=null;switch(ee){case Mc:w===3?(n.data!==r.children&&(Ha(),n.data=r.children),T=a(n)):r.children===``?(c(r.el=i(``),o(n),n),T=n):T=x();break;case Nc:v(n)?(T=a(n),_(r.el=n.content.firstChild,n,s)):T=w!==8||b?x():a(n);break;case Pc:if(b&&(n=a(n),w=n.nodeType),w===1||w===3){T=n;let e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=T.nodeType===1?T.outerHTML:T.data),t===r.staticCount-1&&(r.anchor=T),T=a(T);return b?a(T):T}else x();break;case jc:T=b?m(n,r,s,l,u,y):x();break;default:if(C&1)T=(w!==1||r.type.toLowerCase()!==n.tagName.toLowerCase())&&!v(n)?x():f(n,r,s,l,u,y);else if(C&6){r.slotScopeIds=u;let e=o(n);if(T=b?g(n):Ka(n)&&n.data===`teleport start`?g(n,n.data,`teleport end`):a(n),t(r,e,null,s,l,Ga(e),y),ao(r)&&!r.type.__asyncResolved){let t;b?(t=Xc(jc),t.anchor=T?T.previousSibling:e.lastChild):t=n.nodeType===3?el(``):Xc(`div`),t.el=n,r.component.subTree=t}}else C&64?T=w===8?r.type.hydrate(n,r,s,l,u,y,e,p):x():C&128&&(T=r.type.hydrate(n,r,s,l,Ga(o(n)),u,y,e,d))}return S!=null&&za(S,null,l,r),T},f=(e,t,n,i,a,o)=>{o=o||!!t.dynamicChildren;let{type:c,props:l,patchFlag:u,shapeFlag:d,dirs:f,transition:m}=t,h=c===`input`||c===`option`;if(h||u!==-1){f&&Ki(t,null,n,`created`);let c=!1;if(v(e)){c=fc(null,m)&&n&&n.vnode.props&&n.vnode.props.appear;let r=e.content.firstChild;if(c){let e=r.getAttribute(`class`);e&&(r.$cls=e),m.beforeEnter(r)}_(r,e,n),t.el=e=r}if(d&16&&!(l&&(l.innerHTML||l.textContent))){let r=p(e.firstChild,t,e,n,i,a,o);for(;r;){Xa(e,1)||Ha();let t=r;r=r.nextSibling,s(t)}}else if(d&8){let n=t.children;n[0]===`
`&&(e.tagName===`PRE`||e.tagName===`TEXTAREA`)&&(n=n.slice(1));let{textContent:r}=e;r!==n&&r!==n.replace(/\r\n|\r/g,`
`)&&(Xa(e,0)||Ha(),e.textContent=t.children)}if(l){if(h||!o||u&48){let t=e.tagName.includes(`-`);for(let i in l)(h&&(i.endsWith(`value`)||i===`indeterminate`)||nt(i)&&!xt(i)||i[0]===`.`||t&&!xt(i))&&r(e,i,null,l[i],void 0,n)}else if(l.onClick)r(e,`onClick`,null,l.onClick,void 0,n);else if(u&4&&Dr(l.style))for(let e in l.style)l.style[e]}let g;(g=l&&l.onVnodeBeforeMount)&&sl(g,n,t),f&&Ki(t,null,n,`beforeMount`),((g=l&&l.onVnodeMounted)||f||c)&&Oc(()=>{g&&sl(g,n,t),c&&m.enter(e),f&&Ki(t,null,n,`mounted`)},i)}return e.nextSibling},p=(e,t,r,o,s,l,u)=>{u=u||!!t.dynamicChildren;let f=t.children,p=f.length;for(let t=0;t<p;t++){let m=u?f[t]:f[t]=rl(f[t]),h=m.type===Mc;e?(h&&!u&&t+1<p&&rl(f[t+1]).type===Mc&&(c(i(e.data.slice(m.children.length)),r,a(e)),e.data=m.children),e=d(e,m,o,s,l,u)):h&&!m.children?c(m.el=i(``),r):(Xa(r,1)||Ha(),n(null,m,r,null,o,s,Ga(r),l))}return e},m=(e,t,n,r,i,s)=>{let{slotScopeIds:u}=t;u&&(i=i?i.concat(u):u);let d=o(e),f=p(a(e),t,d,n,r,i,s);return f&&Ka(f)&&f.data===`]`?a(t.anchor=f):(Ha(),c(t.anchor=l(`]`),d,f),f)},h=(e,t,r,i,c,l)=>{if(Xa(e.parentElement,1)||Ha(),t.el=null,l){let t=g(e);for(;;){let n=a(e);if(n&&n!==t)s(n);else break}}let u=a(e),d=o(e);return s(e),n(null,t,d,u,r,i,Ga(d),c),r&&(r.vnode.el=t.el,Vs(r,t.el)),u},g=(e,t=`[`,n=`]`)=>{let r=0;for(;e;)if(e=a(e),e&&Ka(e)&&(e.data===t&&r++,e.data===n)){if(r===0)return a(e);r--}return e},_=(e,t,n)=>{let r=t.parentNode;r&&r.replaceChild(e,t);let i=n;for(;i;)i.vnode.el===t&&(i.vnode.el=i.subTree.el=e),i=i.parent},v=e=>e.nodeType===1&&e.tagName===`TEMPLATE`;return[u,d]}var Ja=`data-allow-mismatch`,Ya={0:`text`,1:`children`,2:`class`,3:`style`,4:`attribute`};function Xa(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(Ja);)e=e.parentElement;let n=e&&e.getAttribute(Ja);if(n==null)return!1;if(n===``)return!0;{let e=n.split(`,`);return t===0&&e.includes(`children`)?!0:e.includes(Ya[t])}}var Za=Ft().requestIdleCallback||(e=>setTimeout(e,1)),Qa=Ft().cancelIdleCallback||(e=>clearTimeout(e)),$a=(e=1e4)=>t=>{let n=Za(t,{timeout:e});return()=>Qa(n)};function eo(e){let{top:t,left:n,bottom:r,right:i}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:o}=window;return(t>0&&t<a||r>0&&r<a)&&(n>0&&n<o||i>0&&i<o)}var to=e=>(t,n)=>{let r=new IntersectionObserver(e=>{for(let n of e)if(n.isIntersecting){r.disconnect(),t();break}},e);return n(e=>{if(e instanceof Element){if(eo(e))return t(),r.disconnect(),!1;r.observe(e)}}),()=>r.disconnect()},no=e=>t=>{if(e){let n=matchMedia(e);if(n.matches)t();else return n.addEventListener(`change`,t,{once:!0}),()=>n.removeEventListener(`change`,t)}},ro=(e=[])=>(t,n)=>{ft(e)&&(e=[e]);let r=!1,i=e=>{r||(r=!0,a(),t(),e.target.dispatchEvent(new e.constructor(e.type,e)))},a=()=>{n(t=>{for(let n of e)t.removeEventListener(n,i)})};return n(t=>{for(let n of e)t.addEventListener(n,i,{once:!0})}),a};function io(e,t){if(Ka(e)&&e.data===`[`){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===!1)break}else if(Ka(r))if(r.data===`]`){if(--n===0)break}else r.data===`[`&&n++;r=r.nextSibling}}else t(e)}var ao=e=>!!e.type.__asyncLoader;function oo(e){X(e)&&(e={loader:e});let{loader:t,loadingComponent:n,errorComponent:r,delay:i=200,hydrate:a,timeout:o,suspensible:s=!0,onError:c}=e,l=null,u,d=0,f=()=>(d++,l=null,p()),p=()=>{let e;return l||(e=l=t().catch(e=>{if(e=e instanceof Error?e:Error(String(e)),c)return new Promise((t,n)=>{c(e,()=>t(f()),()=>n(e),d+1)});throw e}).then(t=>e!==l&&l?l:(t&&(t.__esModule||t[Symbol.toStringTag]===`Module`)&&(t=t.default),u=t,t)))};return Na({name:`AsyncComponentWrapper`,__asyncLoader:p,__asyncHydrate(e,t,n){let r=!1;(t.bu||(t.bu=[])).push(()=>r=!0);let i=()=>{r||n()},o=a?()=>{let n=a(i,t=>io(e,t));n&&(t.bum||(t.bum=[])).push(n)}:i;u?o():p().then(()=>!t.isUnmounted&&o())},get __asyncResolved(){return u},setup(){let e=dl;if(Fa(e),u)return()=>so(u,e);let t=t=>{l=null,_i(t,e,13,!r)};if(s&&e.suspense||vl)return p().then(t=>()=>so(t,e)).catch(e=>(t(e),()=>r?Xc(r,{error:e}):null));let a=Ir(!1),c=Ir(),d=Ir(!!i);return i&&setTimeout(()=>{d.value=!1},i),o!=null&&setTimeout(()=>{if(!a.value&&!c.value){let e=Error(`Async component timed out after ${o}ms.`);t(e),c.value=e}},o),p().then(()=>{a.value=!0,e.parent&&co(e.parent.vnode)&&e.parent.update()}).catch(e=>{t(e),c.value=e}),()=>{if(a.value&&u)return so(u,e);if(c.value&&r)return Xc(r,{error:c.value});if(n&&!d.value)return so(n,e)}}})}function so(e,t){let{ref:n,props:r,children:i,ce:a}=t.vnode,o=Xc(e,r,i);return o.ref=n,o.ce=a,delete t.vnode.ce,o}var co=e=>e.type.__isKeepAlive,lo={name:`KeepAlive`,__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){let n=fl(),r=n.ctx;if(!r.renderer)return()=>{let e=t.default&&t.default();return e&&e.length===1?e[0]:e};let i=new Map,a=new Set,o=null,s=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:d}}}=r,f=d(`div`);r.activate=(e,t,n,r,i)=>{let a=e.component;l(e,t,n,0,s),c(a.vnode,e,t,n,a,s,r,e.slotScopeIds,i),oc(()=>{a.isDeactivated=!1,a.a&&At(a.a);let t=e.props&&e.props.onVnodeMounted;t&&sl(t,a.parent,e)},s)},r.deactivate=e=>{let t=e.component;gc(t.m),gc(t.a),l(e,f,null,1,s),oc(()=>{t.da&&At(t.da);let n=e.props&&e.props.onVnodeUnmounted;n&&sl(n,t.parent,e),t.isDeactivated=!0},s)};function p(e){go(e),u(e,n,s,!0)}function m(e){i.forEach((t,n)=>{let r=Al(ao(t)?t.type.__asyncResolved||{}:t.type);r&&!e(r)&&h(n)})}function h(e){let t=i.get(e);t&&(!o||!Gc(t,o))?p(t):o&&go(o),i.delete(e),a.delete(e)}ta(()=>[e.include,e.exclude],([e,t])=>{e&&m(t=>uo(e,t)),t&&m(e=>!uo(t,e))},{flush:`post`,deep:!0});let g=null,_=()=>{g!=null&&(vc(n.subTree.type)?oc(()=>{i.set(g,_o(n.subTree))},n.subTree.suspense):i.set(g,_o(n.subTree)))};return xo(_),Co(_),wo(()=>{i.forEach(e=>{let{subTree:t,suspense:r}=n,i=_o(t);if(e.type===i.type&&e.key===i.key){go(i);let e=i.component.da;e&&oc(e,r);return}p(e)})}),()=>{if(g=null,!t.default)return o=null;let n=t.default(),r=n[0];if(n.length>1)return o=null,n;if(!Wc(r)||!(r.shapeFlag&4)&&!(r.shapeFlag&128))return o=null,r;let s=_o(r);if(s.type===Nc)return o=null,s;let c=s.type,l=Al(ao(s)?s.type.__asyncResolved||{}:c),{include:u,exclude:d,max:f}=e;if(u&&(!l||!uo(u,l))||d&&l&&uo(d,l))return s.shapeFlag&=-257,o=s,r;let p=s.key==null?c:s.key,m=i.get(p);return s.el&&(s=$c(s),r.shapeFlag&128&&(r.ssContent=s)),g=p,m?(s.el=m.el,s.component=m.component,s.transition&&ja(s,s.transition),s.shapeFlag|=512,a.delete(p),a.add(p)):(a.add(p),f&&a.size>parseInt(f,10)&&h(a.values().next().value)),s.shapeFlag|=256,o=s,vc(r.type)?r:s}}};function uo(e,t){return Y(e)?e.some(e=>uo(e,t)):ft(e)?e.split(`,`).includes(t):dt(e)?(e.lastIndex=0,e.test(t)):!1}function fo(e,t){mo(e,`a`,t)}function po(e,t){mo(e,`da`,t)}function mo(e,t,n=dl){let r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(vo(t,r,n),n){let e=n.parent;for(;e&&e.parent;)co(e.parent.vnode)&&ho(r,t,n,e),e=e.parent}}function ho(e,t,n,r){let i=vo(t,e,r,!0);To(()=>{at(r[t],i)},n)}function go(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function _o(e){return e.shapeFlag&128?e.ssContent:e}function vo(e,t,n=dl,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...r)=>{En();let i=hl(n),a=gi(t,n,e,r);return i(),Dn(),a});return r?i.unshift(a):i.push(a),a}}var yo=e=>(t,n=dl)=>{(!vl||e===`sp`)&&vo(e,(...e)=>t(...e),n)},bo=yo(`bm`),xo=yo(`m`),So=yo(`bu`),Co=yo(`u`),wo=yo(`bum`),To=yo(`um`),Eo=yo(`sp`),Do=yo(`rtg`),Oo=yo(`rtc`);function ko(e,t=dl){vo(`ec`,e,t)}var Ao=`components`,jo=`directives`;function Mo(e,t){return Io(Ao,e,!0,t)||e}var No=Symbol.for(`v-ndc`);function Po(e){return ft(e)?Io(Ao,e,!1)||e:e||No}function Fo(e){return Io(jo,e)}function Io(e,t,n=!0,r=!1){let i=Ri||dl;if(i){let n=i.type;if(e===Ao){let e=Al(n,!1);if(e&&(e===t||e===wt(t)||e===Dt(wt(t))))return n}let a=Lo(i[e]||n[e],t)||Lo(i.appContext[e],t);return!a&&r?n:a}}function Lo(e,t){return e&&(e[t]||e[wt(t)]||e[Dt(wt(t))])}function Ro(e,t,n,r){let i,a=n&&n[r],o=Y(e);if(o||ft(e)){let n=o&&Dr(e),r=!1,s=!1;n&&(r=!kr(e),s=Or(e),e=Vn(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Pr(Nr(e[n])):Nr(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(mt(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}function zo(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(Y(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{let t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function Bo(e,t,n={},r,i){if(Ri.ce||Ri.parent&&ao(Ri.parent)&&Ri.parent.ce){let e=Object.keys(n).length>0;return t!==`default`&&(n.name=t),Lc(),Uc(jc,null,[Xc(`slot`,n,r&&r())],e?-2:64)}let a=e[t];a&&a._c&&(a._d=!1),Lc();let o=a&&Vo(a(n)),s=n.key||o&&o.key,c=Uc(jc,{key:(s&&!pt(s)?s:`_${t}`)+(!o&&r?`_fb`:``)},o||(r?r():[]),o&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),a&&a._c&&(a._d=!0),c}function Vo(e){return e.some(e=>Wc(e)?!(e.type===Nc||e.type===jc&&!Vo(e.children)):!0)?e:null}function Ho(e,t){let n={};for(let r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:Ot(r)]=e[r];return n}var Uo=e=>e?_l(e)?kl(e):Uo(e.parent):null,Wo=it(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Uo(e.parent),$root:e=>Uo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ms(e),$forceUpdate:e=>e.f||(e.f=()=>{Oi(e.update)}),$nextTick:e=>e.n||(e.n=Ei.bind(e.proxy)),$watch:e=>ra.bind(e)}),Go=(e,t)=>e!==Qe&&!e.__isScriptSetup&&st(e,t),Ko={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t[0]!==`$`){let e=o[t];if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(Go(r,t))return o[t]=1,r[t];else if(i!==Qe&&st(i,t))return o[t]=2,i[t];else if(st(a,t))return o[t]=3,a[t];else if(n!==Qe&&st(n,t))return o[t]=4,n[t];else ls&&(o[t]=0)}let l=Wo[t],u,d;if(l)return t===`$attrs`&&Ln(e.attrs,`get`,``),l(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==Qe&&st(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,st(d,t))return d[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return Go(i,t)?(i[t]=n,!0):r!==Qe&&st(r,t)?(r[t]=n,!0):st(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},s){let c;return!!(n[s]||e!==Qe&&s[0]!==`$`&&st(e,s)||Go(t,s)||st(a,s)||st(r,s)||st(Wo,s)||st(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get==null?st(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}},qo=it({},Ko,{get(e,t){if(t!==Symbol.unscopables)return Ko.get(e,t,e)},has(e,t){return t[0]!==`_`&&!It(t)}});function Jo(){return null}function Yo(){return null}function Xo(e){}function Zo(e){}function Qo(){return null}function $o(){}function es(e,t){return null}function ts(){return rs(`useSlots`).slots}function ns(){return rs(`useAttrs`).attrs}function rs(e){let t=fl();return t.setupContext||(t.setupContext=Ol(t))}function is(e){return Y(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}function as(e,t){let n=is(e);for(let e in t){if(e.startsWith(`__skip`))continue;let r=n[e];r?Y(r)||X(r)?r=n[e]={type:r,default:t[e]}:r.default=t[e]:r===null&&(r=n[e]={default:t[e]}),r&&t[`__skip_${e}`]&&(r.skipFactory=!0)}return n}function os(e,t){return!e||!t?e||t:Y(e)&&Y(t)?e.concat(t):it({},is(e),is(t))}function ss(e,t){let n={};for(let r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n}function cs(e){let t=fl(),n=vl,r=e();gl(),n&&ml(!1);let i=()=>{hl(t),n&&ml(!0)},a=()=>{fl()!==t&&t.scope.off(),gl(),n&&ml(!1)};return ht(r)&&(r=r.catch(e=>{throw i(),Promise.resolve().then(()=>Promise.resolve().then(a)),e})),[r,()=>{i(),Promise.resolve().then(a)}]}var ls=!0;function us(e){let t=ms(e),n=e.proxy,r=e.ctx;ls=!1,t.beforeCreate&&fs(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:h,deactivated:g,beforeDestroy:_,beforeUnmount:v,destroyed:y,unmounted:b,render:x,renderTracked:ee,renderTriggered:S,errorCaptured:C,serverPrefetch:te,expose:w,inheritAttrs:T,components:ne,directives:E,filters:D}=t;if(l&&ds(l,r,null),o)for(let e in o){let t=o[e];X(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);mt(t)&&(e.data=Sr(t))}if(ls=!0,a)for(let e in a){let t=a[e],i=Z({get:X(t)?t.bind(n,n):X(t.get)?t.get.bind(n,n):et,set:!X(t)&&X(t.set)?t.set.bind(n):et});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)ps(s[e],r,n,e);if(c){let e=X(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{qi(t,e[t])})}u&&fs(u,e,`c`);function re(e,t){Y(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(re(bo,d),re(xo,f),re(So,p),re(Co,m),re(fo,h),re(po,g),re(ko,C),re(Oo,ee),re(Do,S),re(wo,v),re(To,b),re(Eo,te),Y(w))if(w.length){let t=e.exposed||(e.exposed={});w.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||(e.exposed={});x&&e.render===et&&(e.render=x),T!=null&&(e.inheritAttrs=T),ne&&(e.components=ne),E&&(e.directives=E),te&&Fa(e)}function ds(e,t,n=et){Y(e)&&(e=ys(e));for(let n in e){let r=e[n],i;i=mt(r)?`default`in r?Ji(r.from||n,r.default,!0):Ji(r.from||n):Ji(r),Fr(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function fs(e,t,n){gi(Y(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function ps(e,t,n,r){let i=r.includes(`.`)?ia(n,r):()=>n[r];if(ft(e)){let n=t[e];X(n)&&ta(i,n)}else if(X(e))ta(i,e.bind(n));else if(mt(e))if(Y(e))e.forEach(e=>ps(e,t,n,r));else{let r=X(e.handler)?e.handler.bind(n):t[e.handler];X(r)&&ta(i,r,e)}}function ms(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>hs(c,e,o,!0)),hs(c,t,o)),mt(t)&&a.set(t,c),c}function hs(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&hs(e,a,n,!0),i&&i.forEach(t=>hs(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=gs[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var gs={data:_s,props:Ss,emits:Ss,methods:xs,computed:xs,beforeCreate:bs,created:bs,beforeMount:bs,mounted:bs,beforeUpdate:bs,updated:bs,beforeDestroy:bs,beforeUnmount:bs,destroyed:bs,unmounted:bs,activated:bs,deactivated:bs,errorCaptured:bs,serverPrefetch:bs,components:xs,directives:xs,watch:Cs,provide:_s,inject:vs};function _s(e,t){return t?e?function(){return it(X(e)?e.call(this,this):e,X(t)?t.call(this,this):t)}:t:e}function vs(e,t){return xs(ys(e),ys(t))}function ys(e){if(Y(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function bs(e,t){return e?[...new Set([].concat(e,t))]:t}function xs(e,t){return e?it(Object.create(null),e,t):t}function Ss(e,t){return e?Y(e)&&Y(t)?[...new Set([...e,...t])]:it(Object.create(null),is(e),is(t??{})):t}function Cs(e,t){if(!e)return t;if(!t)return e;let n=it(Object.create(null),e);for(let r in t)n[r]=bs(e[r],t[r]);return n}function ws(){return{app:null,config:{isNativeTag:tt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Ts=0;function Es(e,t){return function(n,r=null){X(n)||(n=it({},n)),r!=null&&!mt(r)&&(r=null);let i=ws(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:Ts++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Il,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&X(e.install)?(a.add(e),e.install(c,...t)):X(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||Xc(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,kl(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(gi(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=Ds;Ds=c;try{return e()}finally{Ds=t}}};return c}}var Ds=null;function Os(e,t,n=Qe){let r=fl(),i=wt(t),a=Et(t),o=ks(e,i),s=Kr((o,s)=>{let c,l=Qe,u;return ea(()=>{let t=e[i];kt(c,t)&&(c=t,s())}),{get(){return o(),n.get?n.get(c):c},set(e){let o=n.set?n.set(e):e;if(!kt(o,c)&&!(l!==Qe&&kt(e,l)))return;let d=r.vnode.props;d&&(t in d||i in d||a in d)&&(`onUpdate:${t}`in d||`onUpdate:${i}`in d||`onUpdate:${a}`in d)||(c=e,s()),r.emit(`update:${t}`,o),kt(e,o)&&kt(e,l)&&!kt(o,u)&&s(),l=e,u=o}}});return s[Symbol.iterator]=()=>{let e=0;return{next(){return e<2?{value:e++?o||Qe:s,done:!1}:{done:!0}}}},s}var ks=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${wt(t)}Modifiers`]||e[`${Et(t)}Modifiers`];function As(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||Qe,i=n,a=t.startsWith(`update:`),o=a&&ks(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>ft(e)?e.trim():e)),o.number&&(i=n.map(Mt)));let s,c=r[s=Ot(t)]||r[s=Ot(wt(t))];!c&&a&&(c=r[s=Ot(Et(t))]),c&&gi(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,gi(l,e,6,i)}}var js=new WeakMap;function Ms(e,t,n=!1){let r=n?js:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!X(e)){let r=e=>{let n=Ms(e,t,!0);n&&(s=!0,it(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(mt(e)&&r.set(e,null),null):(Y(a)?a.forEach(e=>o[e]=null):it(o,a),mt(e)&&r.set(e,o),o)}function Ns(e,t){return!e||!nt(t)?!1:(t=t.slice(2).replace(/Once$/,``),st(e,t[0].toLowerCase()+t.slice(1))||st(e,Et(t))||st(e,t))}function Ps(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:h}=e,g=Bi(e),_,v;try{if(n.shapeFlag&4){let e=i||r,t=e;_=rl(l.call(t,e,u,d,p,f,m)),v=s}else{let e=t;_=rl(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),v=t.props?s:Is(s)}}catch(t){Fc.length=0,_i(t,e,1),_=Xc(Nc)}let y=_;if(v&&h!==!1){let e=Object.keys(v),{shapeFlag:t}=y;e.length&&t&7&&(a&&e.some(rt)&&(v=Ls(v,a)),y=$c(y,v,!1,!0))}return n.dirs&&(y=$c(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&ja(y,n.transition),_=y,Bi(g),_}function Fs(e,t=!0){let n;for(let t=0;t<e.length;t++){let r=e[t];if(Wc(r)){if(r.type!==Nc||r.children===`v-if`){if(n)return;n=r}}else return}return n}var Is=e=>{let t;for(let n in e)(n===`class`||n===`style`||nt(n))&&((t||(t={}))[n]=e[n]);return t},Ls=(e,t)=>{let n={};for(let r in e)(!rt(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Rs(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?zs(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Bs(o,r,n)&&!Ns(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?zs(r,o,l):!0:!!o;return!1}function zs(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Bs(t,e,a)&&!Ns(n,a))return!0}return!1}function Bs(e,t,n){let r=e[n],i=t[n];return n===`style`&&mt(r)&&mt(i)?!Jt(r,i):r!==i}function Vs({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Hs={},Us=()=>Object.create(Hs),Ws=e=>Object.getPrototypeOf(e)===Hs;function Gs(e,t,n,r=!1){let i={},a=Us();e.propsDefaults=Object.create(null),qs(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Cr(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Ks(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=jr(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Ns(e.emitsOptions,o))continue;let u=t[o];if(c)if(st(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=wt(o);i[t]=Js(c,s,t,u,e,!1)}else u!==a[o]&&(a[o]=u,l=!0)}}}else{qs(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!st(t,a)&&((r=Et(a))===a||!st(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Js(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!st(t,e))&&(delete a[e],l=!0)}l&&Rn(e.attrs,`set`,``)}function qs(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(xt(c))continue;let l=t[c],u;i&&st(i,u=wt(c))?!a||!a.includes(u)?n[u]=l:(s||(s={}))[u]=l:Ns(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(a){let t=jr(n),r=s||Qe;for(let o=0;o<a.length;o++){let s=a[o];n[s]=Js(i,t,s,r[s],e,!st(r,s))}}return o}function Js(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=st(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&X(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=hl(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===Et(n))&&(r=!0))}return r}var Ys=new WeakMap;function Xs(e,t,n=!1){let r=n?Ys:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!X(e)){let r=e=>{c=!0;let[n,r]=Xs(e,t,!0);it(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return mt(e)&&r.set(e,$e),$e;if(Y(a))for(let e=0;e<a.length;e++){let t=wt(a[e]);Zs(t)&&(o[t]=Qe)}else if(a)for(let e in a){let t=wt(e);if(Zs(t)){let n=a[e],r=o[t]=Y(n)||X(n)?{type:n}:it({},n),i=r.type,c=!1,l=!0;if(Y(i))for(let e=0;e<i.length;++e){let t=i[e],n=X(t)&&t.name;if(n===`Boolean`){c=!0;break}else n===`String`&&(l=!1)}else c=X(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||st(r,`default`))&&s.push(t)}}let l=[o,s];return mt(e)&&r.set(e,l),l}function Zs(e){return e[0]!==`$`&&!xt(e)}var Qs=e=>e===`_`||e===`_ctx`||e===`$stable`,$s=e=>Y(e)?e.map(rl):[rl(e)],ec=(e,t,n)=>{if(t._n)return t;let r=Wi((...e)=>$s(t(...e)),n);return r._c=!1,r},tc=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Qs(n))continue;let i=e[n];if(X(i))t[n]=ec(n,i,r);else if(i!=null){let e=$s(i);t[n]=()=>e}}},nc=(e,t)=>{let n=$s(t);e.slots.default=()=>n},rc=(e,t,n)=>{for(let r in t)(n||!Qs(r))&&(e[r]=t[r])},ic=(e,t,n)=>{let r=e.slots=Us();if(e.vnode.shapeFlag&32){let e=t._;e?(rc(r,t,n),n&&jt(r,`_`,e,!0)):tc(t,r)}else t&&nc(e,t)},ac=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=Qe;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:rc(i,t,n):(a=!t.$stable,tc(t,i)),o=t}else t&&(nc(e,t),o={default:1});if(a)for(let e in i)!Qs(e)&&o[e]==null&&delete i[e]},oc=Oc;function sc(e){return lc(e)}function cc(e){return lc(e,qa)}function lc(e,t){let n=Ft();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=et,insertStaticContent:m}=e,h=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Gc(e,t)&&(r=pe(e),O(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Mc:g(e,t,n,r);break;case Nc:_(e,t,n,r);break;case Pc:e??v(t,n,r,o);break;case jc:ne(e,t,n,r,i,a,o,s,c);break;default:d&1?x(e,t,n,r,i,a,o,s,c):d&6?E(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,A)}u!=null&&i?za(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&za(e.ref,null,a,e,!0)},g=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},_=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},v=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},y=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=f(e),r(e,n,i),e=a;r(t,n,i)},b=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),i(e),e=n;i(t)},x=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)ee(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),te(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},ee=(e,t,n,i,s,c,l,d)=>{let f,p,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(f=e.el=o(e.type,c,m&&m.is,m),h&8?u(f,e.children):h&16&&C(e.children,f,null,i,s,uc(e,c),l,d),_&&Ki(e,null,i,`created`),S(f,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!xt(e)&&a(f,e,null,m[e],c,i);`value`in m&&a(f,`value`,null,m.value,c),(p=m.onVnodeBeforeMount)&&sl(p,i,e)}_&&Ki(e,null,i,`beforeMount`);let v=fc(s,g);v&&g.beforeEnter(f),r(f,t,n),((p=m&&m.onVnodeMounted)||v||_)&&oc(()=>{try{p&&sl(p,i,e),v&&g.enter(f),_&&Ki(e,null,i,`mounted`)}finally{}},s)},S=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let t=0;t<r.length;t++)p(e,r[t]);if(i){let n=i.subTree;if(t===n||vc(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;S(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},C=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)h(null,e[l]=s?il(e[l]):rl(e[l]),t,n,r,i,a,o,s)},te=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=e.patchFlag&16;let p=e.props||Qe,m=t.props||Qe,h;if(n&&dc(n,!1),(h=m.onVnodeBeforeUpdate)&&sl(h,n,t,e),f&&Ki(t,e,n,`beforeUpdate`),n&&dc(n,!0),(p.innerHTML&&m.innerHTML==null||p.textContent&&m.textContent==null)&&u(c,``),d?w(e.dynamicChildren,d,c,n,r,uc(t,i),o):s||oe(e,t,c,null,n,r,uc(t,i),o,!1),l>0){if(l&16)T(c,p,m,n,i);else if(l&2&&p.class!==m.class&&a(c,`class`,null,m.class,i),l&4&&a(c,`style`,p.style,m.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=p[r],s=m[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&u(c,t.children)}else !s&&d==null&&T(c,p,m,n,i);((h=m.onVnodeUpdated)||f)&&oc(()=>{h&&sl(h,n,t,e),f&&Ki(t,e,n,`updated`)},r)},w=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];h(c,l,c.el&&(c.type===jc||!Gc(c,l)||c.shapeFlag&198)?d(c.el):n,null,r,i,a,o,!0)}},T=(e,t,n,r,i)=>{if(t!==n){if(t!==Qe)for(let o in t)!xt(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(xt(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},ne=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),C(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(w(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&pc(e,t,!0)):oe(e,t,n,f,a,o,c,l,u)},E=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):D(t,n,r,i,a,o,c):re(e,t,c)},D=(e,t,n,r,i,a,o)=>{let s=e.component=ul(e,r,i);if(co(e)&&(s.ctx.renderer=A),yl(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ie,o),!e.el){let r=s.subTree=Xc(Nc);_(null,r,t,n),e.placeholder=r.el}}else ie(s,e,t,n,i,a,o)},re=(e,t,n)=>{let r=t.component=e.component;if(Rs(e,t,n))if(r.asyncDep&&!r.asyncResolved){ae(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ie=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=hc(e);if(n){t&&(t.el=c.el,ae(e,t,o)),n.asyncDep.then(()=>{oc(()=>{e.isUnmounted||l()},i)});return}}let u=t,f;dc(e,!1),t?(t.el=c.el,ae(e,t,o)):t=c,n&&At(n),(f=t.props&&t.props.onVnodeBeforeUpdate)&&sl(f,s,t,c),dc(e,!0);let p=Ps(e),m=e.subTree;e.subTree=p,h(m,p,d(m.el),pe(m),e,i,a),t.el=p.el,u===null&&Vs(e,p.el),r&&oc(r,i),(f=t.props&&t.props.onVnodeUpdated)&&oc(()=>sl(f,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=ao(t);if(dc(e,!1),l&&At(l),!m&&(o=c&&c.onVnodeBeforeMount)&&sl(o,d,t),dc(e,!0),s&&M){let t=()=>{e.subTree=Ps(e),M(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Ps(e);h(null,o,n,r,e,i,a),t.el=o.el}if(u&&oc(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;oc(()=>sl(o,d,e),i)}(t.shapeFlag&256||d&&ao(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&oc(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new ln(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>Oi(u),dc(e,!0),l()},ae=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Ks(e,t.props,r,n),ac(e,t.children,n),En(),ji(e),Dn()},oe=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:m}=t;if(p>0){if(p&128){ce(l,f,n,r,i,a,o,s,c);return}else if(p&256){se(l,f,n,r,i,a,o,s,c);return}}m&8?(d&16&&fe(l,i,a),f!==l&&u(n,f)):d&16?m&16?ce(l,f,n,r,i,a,o,s,c):fe(l,i,a,!0):(d&8&&u(n,``),m&16&&C(f,n,r,i,a,o,s,c))},se=(e,t,n,r,i,a,o,s,c)=>{e=e||$e,t=t||$e;let l=e.length,u=t.length,d=Math.min(l,u),f;for(f=0;f<d;f++){let r=t[f]=c?il(t[f]):rl(t[f]);h(e[f],r,n,null,i,a,o,s,c)}l>u?fe(e,i,a,!0,!1,d):C(t,n,r,i,a,o,s,c,d)},ce=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,d=e.length-1,f=u-1;for(;l<=d&&l<=f;){let r=e[l],u=t[l]=c?il(t[l]):rl(t[l]);if(Gc(r,u))h(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=d&&l<=f;){let r=e[d],l=t[f]=c?il(t[f]):rl(t[f]);if(Gc(r,l))h(r,l,n,null,i,a,o,s,c);else break;d--,f--}if(l>d){if(l<=f){let e=f+1,d=e<u?t[e].el:r;for(;l<=f;)h(null,t[l]=c?il(t[l]):rl(t[l]),n,d,i,a,o,s,c),l++}}else if(l>f)for(;l<=d;)O(e[l],i,a,!0),l++;else{let p=l,m=l,g=new Map;for(l=m;l<=f;l++){let e=t[l]=c?il(t[l]):rl(t[l]);e.key!=null&&g.set(e.key,l)}let _,v=0,y=f-m+1,b=!1,x=0,ee=Array(y);for(l=0;l<y;l++)ee[l]=0;for(l=p;l<=d;l++){let r=e[l];if(v>=y){O(r,i,a,!0);continue}let u;if(r.key!=null)u=g.get(r.key);else for(_=m;_<=f;_++)if(ee[_-m]===0&&Gc(r,t[_])){u=_;break}u===void 0?O(r,i,a,!0):(ee[u-m]=l+1,u>=x?x=u:b=!0,h(r,t[u],n,null,i,a,o,s,c),v++)}let S=b?mc(ee):$e;for(_=S.length-1,l=y-1;l>=0;l--){let e=m+l,d=t[e],f=t[e+1],p=e+1<u?f.el||_c(f):r;ee[l]===0?h(null,d,n,p,i,a,o,s,c):b&&(_<0||l!==S[_]?le(d,n,p,2):_--)}}},le=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){le(e.component.subTree,t,n,a);return}if(d&128){e.suspense.move(t,n,a);return}if(d&64){c.move(e,t,n,A);return}if(c===jc){r(s,t,n);for(let e=0;e<u.length;e++)le(u[e],t,n,a);r(e.anchor,t,n);return}if(c===Pc){y(e,t,n);return}if(a!==2&&d&1&&l)if(a===0)l.beforeEnter(s),r(s,t,n),oc(()=>l.enter(s),o);else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{s._isLeaving&&s[va](!0),a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}else r(s,t,n)},O=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(En(),za(s,null,n,e,!0),Dn()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!ao(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&sl(_,t,e),u&6)de(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Ki(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,A,r):l&&!l.hasOnce&&(a!==jc||d>0&&d&64)?fe(l,t,n,!1,!0):(a===jc&&d&384||!i&&u&16)&&fe(c,t,n),r&&ue(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&oc(()=>{_&&sl(_,t,e),h&&Ki(e,null,t,`unmounted`),v&&(e.el=null)},n)},ue=e=>{let{type:t,el:n,anchor:r,transition:a}=e;if(t===jc){k(n,r);return}if(t===Pc){b(e);return}let o=()=>{i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},k=(e,t)=>{let n;for(;e!==t;)n=f(e),i(e),e=n;i(t)},de=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;gc(c),gc(l),r&&At(r),i.stop(),a&&(a.flags|=8,O(o,e,t,n)),s&&oc(s,t),oc(()=>{e.isUnmounted=!0},t)},fe=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)O(e[o],t,n,r,i)},pe=e=>{if(e.shapeFlag&6)return pe(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=f(e.anchor||e.el),n=t&&t[aa];return n?f(n):t},me=!1,he=(e,t,n)=>{let r;e==null?t._vnode&&(O(t._vnode,null,null,!0),r=t._vnode.component):h(t._vnode||null,e,t,null,null,null,n),t._vnode=e,me||(me=!0,ji(r),Mi(),me=!1)},A={p:h,um:O,m:le,r:ue,mt:D,mc:C,pc:oe,pbc:w,n:pe,o:e},j,M;return t&&([j,M]=t(A)),{render:he,hydrate:j,createApp:Es(he,j)}}function uc({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function dc({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function fc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function pc(e,t,n=!1){let r=e.children,i=t.children;if(Y(r)&&Y(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=il(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&pc(t,a)),a.type===Mc&&(a.patchFlag===-1&&(a=i[e]=il(a)),a.el=t.el),a.type===Nc&&!a.el&&(a.el=t.el)}}function mc(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function hc(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:hc(t)}function gc(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function _c(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?_c(t.subTree):null}var vc=e=>e.__isSuspense,yc=0,bc={name:`Suspense`,__isSuspense:!0,process(e,t,n,r,i,a,o,s,c,l){if(e==null)Sc(t,n,r,i,a,o,s,c,l);else{if(a&&a.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}Cc(e,t,n,r,i,o,s,c,l)}},hydrate:Tc,normalize:Ec};function xc(e,t){let n=e.props&&e.props[t];X(n)&&n()}function Sc(e,t,n,r,i,a,o,s,c){let{p:l,o:{createElement:u}}=c,d=u(`div`),f=e.suspense=wc(e,i,r,t,d,n,a,o,s,c);l(null,f.pendingBranch=e.ssContent,d,null,r,f,a,o),f.deps>0?(xc(e,`onPending`),xc(e,`onFallback`),l(null,e.ssFallback,t,n,r,null,a,o),kc(f,e.ssFallback)):f.resolve(!1,!0)}function Cc(e,t,n,r,i,a,o,s,{p:c,um:l,o:{createElement:u}}){let d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;let f=t.ssContent,p=t.ssFallback,{activeBranch:m,pendingBranch:h,isInFallback:g,isHydrating:_}=d;if(h)d.pendingBranch=f,Gc(h,f)?(c(h,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0?d.resolve():g&&(_||(c(m,p,n,r,i,null,a,o,s),kc(d,p)))):(d.pendingId=yc++,_?(d.isHydrating=!1,d.activeBranch=h):l(h,i,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u(`div`),g?(c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0?d.resolve():(c(m,p,n,r,i,null,a,o,s),kc(d,p))):m&&Gc(m,f)?(c(m,f,n,r,i,d,a,o,s),d.resolve(!0)):(c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0&&d.resolve()));else if(m&&Gc(m,f))c(m,f,n,r,i,d,a,o,s),kc(d,f);else if(xc(t,`onPending`),d.pendingBranch=f,f.shapeFlag&512?d.pendingId=f.component.suspenseId:d.pendingId=yc++,c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0)d.resolve();else{let{timeout:e,pendingId:t}=d;e>0?setTimeout(()=>{d.pendingId===t&&d.fallback(p)},e):e===0&&d.fallback(p)}}function wc(e,t,n,r,i,a,o,s,c,l,u=!1){let{p:d,m:f,um:p,n:m,o:{parentNode:h,remove:g}}=l,_,v=Ac(e);v&&t&&t.pendingBranch&&(_=t.pendingId,t.deps++);let y=e.props?Nt(e.props.timeout):void 0,b=a,x={vnode:e,parent:t,parentComponent:n,namespace:o,container:r,hiddenContainer:i,deps:0,pendingId:yc++,timeout:typeof y==`number`?y:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(e=!1,n=!1){let{vnode:r,activeBranch:i,pendingBranch:o,pendingId:s,effects:c,parentComponent:l,container:u,isInFallback:d}=x,g=!1;x.isHydrating?x.isHydrating=!1:e||(g=i&&o.transition&&o.transition.mode===`out-in`,g&&(i.transition.afterLeave=()=>{s===x.pendingId&&(f(o,u,a===b?m(i):a,0),Ai(c),d&&r.ssFallback&&(r.ssFallback.el=null))}),i&&!x.isFallbackMountPending&&(h(i.el)===u&&(a=m(i)),p(i,l,x,!0),!g&&d&&r.ssFallback&&oc(()=>r.ssFallback.el=null,x)),g||f(o,u,a,0)),x.isFallbackMountPending=!1,kc(x,o),x.pendingBranch=null,x.isInFallback=!1;let y=x.parent,ee=!1;for(;y;){if(y.pendingBranch){y.effects.push(...c),ee=!0;break}y=y.parent}!ee&&!g&&Ai(c),x.effects=[],v&&t&&t.pendingBranch&&_===t.pendingId&&(t.deps--,t.deps===0&&!n&&t.resolve()),xc(r,`onResolve`)},fallback(e){if(!x.pendingBranch)return;let{vnode:t,activeBranch:n,parentComponent:r,container:i,namespace:a}=x;xc(t,`onFallback`);let o=m(n),l=()=>{x.isFallbackMountPending=!1,x.isInFallback&&(d(null,e,i,o,r,null,a,s,c),kc(x,e))},u=e.transition&&e.transition.mode===`out-in`;u&&(x.isFallbackMountPending=!0,n.transition.afterLeave=l),x.isInFallback=!0,p(n,r,null,!0),u||l()},move(e,t,n){x.activeBranch&&f(x.activeBranch,e,t,n),x.container=e},next(){return x.activeBranch&&m(x.activeBranch)},registerDep(e,t,n){let r=!!x.pendingBranch;r&&x.deps++;let i=e.vnode.el;e.asyncDep.catch(t=>{_i(t,e,0)}).then(a=>{if(e.isUnmounted||x.isUnmounted||x.pendingId!==e.suspenseId)return;e.asyncResolved=!0;let{vnode:s}=e;xl(e,a,!1),i&&(s.el=i);let c=!i&&e.subTree.el;t(e,s,h(i||e.subTree.el),i?null:m(e.subTree),x,o,n),c&&(s.placeholder=null,g(c)),Vs(e,s.el),r&&--x.deps===0&&x.resolve()})},unmount(e,t){x.isUnmounted=!0,x.activeBranch&&p(x.activeBranch,n,e,t),x.pendingBranch&&p(x.pendingBranch,n,e,t)}};return x}function Tc(e,t,n,r,i,a,o,s,c){let l=t.suspense=wc(t,r,n,e.parentNode,document.createElement(`div`),null,i,a,o,s,!0),u=c(e,l.pendingBranch=t.ssContent,n,l,a,o);return l.deps===0&&l.resolve(!1,!0),u}function Ec(e){let{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=Dc(r?n.default:n),e.ssFallback=r?Dc(n.fallback):Xc(Nc)}function Dc(e){let t;if(X(e)){let n=zc&&e._c;n&&(e._d=!1,Lc()),e=e(),n&&(e._d=!0,t=Ic,Rc())}return Y(e)&&(e=Fs(e)),e=rl(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(t=>t!==e)),e}function Oc(e,t){t&&t.pendingBranch?Y(e)?t.effects.push(...e):t.effects.push(e):Ai(e)}function kc(e,t){e.activeBranch=t;let{vnode:n,parentComponent:r}=e,i=t.el;for(;!i&&t.component;)t=t.component.subTree,i=t.el;n.el=i,r&&r.subTree===n&&(r.vnode.el=i,Vs(r,i))}function Ac(e){let t=e.props&&e.props.suspensible;return t!=null&&t!==!1}var jc=Symbol.for(`v-fgt`),Mc=Symbol.for(`v-txt`),Nc=Symbol.for(`v-cmt`),Pc=Symbol.for(`v-stc`),Fc=[],Ic=null;function Lc(e=!1){Fc.push(Ic=e?null:[])}function Rc(){Fc.pop(),Ic=Fc[Fc.length-1]||null}var zc=1;function Bc(e,t=!1){zc+=e,e<0&&Ic&&t&&(Ic.hasOnce=!0)}function Vc(e){return e.dynamicChildren=zc>0?Ic||$e:null,Rc(),zc>0&&Ic&&Ic.push(e),e}function Hc(e,t,n,r,i,a){return Vc(Yc(e,t,n,r,i,a,!0))}function Uc(e,t,n,r,i){return Vc(Xc(e,t,n,r,i,!0))}function Wc(e){return e?e.__v_isVNode===!0:!1}function Gc(e,t){return e.type===t.type&&e.key===t.key}function Kc(e){}var qc=({key:e})=>e??null,Jc=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:ft(e)||Fr(e)||X(e)?{i:Ri,r:e,k:t,f:!!n}:e);function Yc(e,t=null,n=null,r=0,i=null,a=e===jc?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qc(t),ref:t&&Jc(t),scopeId:zi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ri};return s?(al(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=ft(n)?8:16),zc>0&&!o&&Ic&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Ic.push(c),c}var Xc=Zc;function Zc(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===No)&&(e=Nc),Wc(e)){let r=$c(e,t,!0);return n&&al(r,n),zc>0&&!a&&Ic&&(r.shapeFlag&6?Ic[Ic.indexOf(e)]=r:Ic.push(r)),r.patchFlag=-2,r}if(jl(e)&&(e=e.__vccOpts),t){t=Qc(t);let{class:e,style:n}=t;e&&!ft(e)&&(t.class=Ht(e)),mt(n)&&(Ar(n)&&!Y(n)&&(n=it({},n)),t.style=Lt(n))}let o=ft(e)?1:vc(e)?128:oa(e)?64:mt(e)?4:X(e)?2:0;return Yc(e,t,n,r,i,o,a,!0)}function Qc(e){return e?Ar(e)||Ws(e)?it({},e):e:null}function $c(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ol(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&qc(l),ref:t&&t.ref?n&&a?Y(a)?a.concat(Jc(t)):[a,Jc(t)]:Jc(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==jc?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$c(e.ssContent),ssFallback:e.ssFallback&&$c(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&ja(u,c.clone(u)),u}function el(e=` `,t=0){return Xc(Mc,null,e,t)}function tl(e,t){let n=Xc(Pc,null,e);return n.staticCount=t,n}function nl(e=``,t=!1){return t?(Lc(),Uc(Nc,null,e)):Xc(Nc,null,e)}function rl(e){return e==null||typeof e==`boolean`?Xc(Nc):Y(e)?Xc(jc,null,e.slice()):Wc(e)?il(e):Xc(Mc,null,String(e))}function il(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$c(e)}function al(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(Y(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),al(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!Ws(t)?t._ctx=Ri:r===3&&Ri&&(Ri.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else X(t)?(t={default:t,_ctx:Ri},n=32):(t=String(t),r&64?(n=16,t=[el(t)]):n=8);e.children=t,e.shapeFlag|=n}function ol(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=Ht([t.class,r.class]));else if(e===`style`)t.style=Lt([t.style,r.style]);else if(nt(e)){let n=t[e],i=r[e];i&&n!==i&&!(Y(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!rt(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function sl(e,t,n,r=null){gi(e,t,7,[n,r])}var cl=ws(),ll=0;function ul(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||cl,a={uid:ll++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nn(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xs(r,i),emitsOptions:Ms(r,i),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:r.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=As.bind(null,a),e.ce&&e.ce(a),a}var dl=null,fl=()=>dl||Ri,pl,ml;{let e=Ft(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};pl=t(`__VUE_INSTANCE_SETTERS__`,e=>dl=e),ml=t(`__VUE_SSR_SETTERS__`,e=>vl=e)}var hl=e=>{let t=dl;return pl(e),e.scope.on(),()=>{e.scope.off(),pl(t)}},gl=()=>{dl&&dl.scope.off(),pl(null)};function _l(e){return e.vnode.shapeFlag&4}var vl=!1;function yl(e,t=!1,n=!1){t&&ml(t);let{props:r,children:i}=e.vnode,a=_l(e);Gs(e,r,a,t),ic(e,i,n||t);let o=a?bl(e,t):void 0;return t&&ml(!1),o}function bl(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ko);let{setup:r}=n;if(r){En();let n=e.setupContext=r.length>1?Ol(e):null,i=hl(e),a=hi(r,e,0,[e.props,n]),o=ht(a);if(Dn(),i(),(o||e.sp)&&!ao(e)&&Fa(e),o){if(a.then(gl,gl),t)return a.then(n=>{xl(e,n,t)}).catch(t=>{_i(t,e,0)});e.asyncDep=a}else xl(e,a,t)}else El(e,t)}function xl(e,t,n){X(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:mt(t)&&(e.setupState=Wr(t)),El(e,n)}var Sl,Cl;function wl(e){Sl=e,Cl=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,qo))}}var Tl=()=>!Sl;function El(e,t,n){let r=e.type;if(!e.render){if(!t&&Sl&&!r.render){let t=r.template||ms(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r,s=it(it({isCustomElement:n,delimiters:a},i),o);r.render=Sl(t,s)}}e.render=r.render||et,Cl&&Cl(e)}{let t=hl(e);En();try{us(e)}finally{Dn(),t()}}}var Dl={get(e,t){return Ln(e,`get`,``),e[t]}};function Ol(e){return{attrs:new Proxy(e.attrs,Dl),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function kl(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Wr(Mr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wo)return Wo[n](e)},has(e,t){return t in e||t in Wo}})):e.proxy}function Al(e,t=!0){return X(e)?e.displayName||e.name:e.name||t&&e.__name}function jl(e){return X(e)&&`__vccOpts`in e}var Z=(e,t)=>$r(e,t,vl);function Ml(e,t,n){try{Bc(-1);let r=arguments.length;return r===2?mt(t)&&!Y(t)?Wc(t)?Xc(e,null,[t]):Xc(e,t):Xc(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wc(n)&&(n=[n]),Xc(e,t,n))}finally{Bc(1)}}function Nl(){return;function e(t,n,r){let i=t[r];if(Y(i)&&i.includes(n)||mt(i)&&n in i||t.extends&&e(t.extends,n,r)||t.mixins&&t.mixins.some(t=>e(t,n,r)))return!0}}function Pl(e,t,n,r){let i=n[r];if(i&&Fl(i,e))return i;let a=t();return a.memo=e.slice(),a.cacheIndex=r,n[r]=a}function Fl(e,t){let n=e.memo;if(n.length!=t.length)return!1;for(let e=0;e<n.length;e++)if(kt(n[e],t[e]))return!1;return zc>0&&Ic&&Ic.push(e),!0}var Il=`3.5.31`,Ll=et,Rl=mi,zl=Fi,Bl=Li,Vl={createComponentInstance:ul,setupComponent:yl,renderComponentRoot:Ps,setCurrentRenderingInstance:Bi,isVNode:Wc,normalizeVNode:rl,getComponentPublicInstance:kl,ensureValidVNode:Vo,pushWarningContext:ui,popWarningContext:di},Hl=void 0,Ul=typeof window<`u`&&window.trustedTypes;if(Ul)try{Hl=Ul.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Wl=Hl?e=>Hl.createHTML(e):e=>e,Gl=`http://www.w3.org/2000/svg`,Kl=`http://www.w3.org/1998/Math/MathML`,ql=typeof document<`u`?document:null,Jl=ql&&ql.createElement(`template`),Yl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?ql.createElementNS(Gl,e):t===`mathml`?ql.createElementNS(Kl,e):n?ql.createElement(e,{is:n}):ql.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>ql.createTextNode(e),createComment:e=>ql.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ql.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Jl.innerHTML=Wl(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Jl.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Xl=`transition`,Zl=`animation`,Ql=Symbol(`_vtc`),$l={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},eu=it({},Sa,$l),tu=(e=>(e.displayName=`Transition`,e.props=eu,e))((e,{slots:t})=>Ml(Ea,iu(e),t)),nu=(e,t=[])=>{Y(e)?e.forEach(e=>e(...t)):e&&e(...t)},ru=e=>e?Y(e)?e.some(e=>e.length>1):e.length>1:!1;function iu(e){let t={};for(let n in e)n in $l||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:l=o,appearToClass:u=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=au(i),h=m&&m[0],g=m&&m[1],{onBeforeEnter:_,onEnter:v,onEnterCancelled:y,onLeave:b,onLeaveCancelled:x,onBeforeAppear:ee=_,onAppear:S=v,onAppearCancelled:C=y}=t,te=(e,t,n,r)=>{e._enterCancelled=r,cu(e,t?u:s),cu(e,t?l:o),n&&n()},w=(e,t)=>{e._isLeaving=!1,cu(e,d),cu(e,p),cu(e,f),t&&t()},T=e=>(t,n)=>{let i=e?S:v,o=()=>te(t,e,n);nu(i,[t,o]),lu(()=>{cu(t,e?c:a),su(t,e?u:s),ru(i)||du(t,r,h,o)})};return it(t,{onBeforeEnter(e){nu(_,[e]),su(e,a),su(e,o)},onBeforeAppear(e){nu(ee,[e]),su(e,c),su(e,l)},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>w(e,t);su(e,d),e._enterCancelled?(su(e,f),hu(e)):(hu(e),su(e,f)),lu(()=>{e._isLeaving&&(cu(e,d),su(e,p),ru(b)||du(e,r,g,n))}),nu(b,[e,n])},onEnterCancelled(e){te(e,!1,void 0,!0),nu(y,[e])},onAppearCancelled(e){te(e,!0,void 0,!0),nu(C,[e])},onLeaveCancelled(e){w(e),nu(x,[e])}})}function au(e){if(e==null)return null;if(mt(e))return[ou(e.enter),ou(e.leave)];{let t=ou(e);return[t,t]}}function ou(e){return Nt(e)}function su(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Ql]||(e[Ql]=new Set)).add(t)}function cu(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[Ql];n&&(n.delete(t),n.size||(e[Ql]=void 0))}function lu(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var uu=0;function du(e,t,n,r){let i=e._endId=++uu,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=fu(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function fu(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${Xl}Delay`),a=r(`${Xl}Duration`),o=pu(i,a),s=r(`${Zl}Delay`),c=r(`${Zl}Duration`),l=pu(s,c),u=null,d=0,f=0;t===Xl?o>0&&(u=Xl,d=o,f=a.length):t===Zl?l>0&&(u=Zl,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Xl:Zl:null,f=u?u===Xl?a.length:c.length:0);let p=u===Xl&&/\b(?:transform|all)(?:,|$)/.test(r(`${Xl}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function pu(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>mu(t)+mu(e[n])))}function mu(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function hu(e){return(e?e.ownerDocument:document).body.offsetHeight}function gu(e,t,n){let r=e[Ql];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var _u=Symbol(`_vod`),vu=Symbol(`_vsh`),yu={name:`show`,beforeMount(e,{value:t},{transition:n}){e[_u]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):bu(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),bu(e,!0),r.enter(e)):r.leave(e,()=>{bu(e,!1)}):bu(e,t))},beforeUnmount(e,{value:t}){bu(e,t)}};function bu(e,t){e.style.display=t?e[_u]:`none`,e[vu]=!t}function xu(){yu.getSSRProps=({value:e})=>{if(!e)return{style:{display:`none`}}}}var Su=Symbol(``);function Cu(e){let t=fl();if(!t)return;let n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(e=>Tu(e,n))},r=()=>{let r=e(t.proxy);t.ce?Tu(t.ce,r):wu(t.subTree,r),n(r)};So(()=>{Ai(r)}),xo(()=>{ta(r,et,{flush:`post`});let e=new MutationObserver(r);e.observe(t.subTree.el.parentNode,{childList:!0}),To(()=>e.disconnect())})}function wu(e,t){if(e.shapeFlag&128){let n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{wu(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)Tu(e.el,t);else if(e.type===jc)e.children.forEach(e=>wu(e,t));else if(e.type===Pc){let{el:n,anchor:r}=e;for(;n&&(Tu(n,t),n!==r);)n=n.nextSibling}}function Tu(e,t){if(e.nodeType===1){let n=e.style,r=``;for(let e in t){let i=en(t[e]);n.setProperty(`--${e}`,i),r+=`--${e}: ${i};`}n[Su]=r}}var Eu=/(?:^|;)\s*display\s*:/;function Du(e,t,n){let r=e.style,i=ft(n),a=!1;if(n&&!i){if(t)if(ft(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??ku(r,t,``)}else for(let e in t)n[e]??ku(r,e,``);for(let e in n)e===`display`&&(a=!0),ku(r,e,n[e])}else if(i){if(t!==n){let e=r[Su];e&&(n+=`;`+e),r.cssText=n,a=Eu.test(n)}}else t&&e.removeAttribute(`style`);_u in e&&(e[_u]=a?r.display:``,e[vu]&&(r.display=`none`))}var Ou=/\s*!important$/;function ku(e,t,n){if(Y(n))n.forEach(n=>ku(e,t,n));else if(n??(n=``),t.startsWith(`--`))e.setProperty(t,n);else{let r=Mu(e,t);Ou.test(n)?e.setProperty(Et(r),n.replace(Ou,``),`important`):e[r]=n}}var Au=[`Webkit`,`Moz`,`ms`],ju={};function Mu(e,t){let n=ju[t];if(n)return n;let r=wt(t);if(r!==`filter`&&r in e)return ju[t]=r;r=Dt(r);for(let n=0;n<Au.length;n++){let i=Au[n]+r;if(i in e)return ju[t]=i}return t}var Nu=`http://www.w3.org/1999/xlink`;function Pu(e,t,n,r,i,a=Gt(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Nu,t.slice(6,t.length)):e.setAttributeNS(Nu,t,n):n==null||a&&!Kt(n)?e.removeAttribute(t):e.setAttribute(t,a?``:pt(n)?String(n):n)}function Fu(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Wl(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=Kt(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Iu(e,t,n,r){e.addEventListener(t,n,r)}function Lu(e,t,n,r){e.removeEventListener(t,n,r)}var Ru=Symbol(`_vei`);function zu(e,t,n,r,i=null){let a=e[Ru]||(e[Ru]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Vu(t);r?Iu(e,n,a[t]=Gu(r,i),s):o&&(Lu(e,n,o,s),a[t]=void 0)}}var Bu=/(?:Once|Passive|Capture)$/;function Vu(e){let t;if(Bu.test(e)){t={};let n;for(;n=e.match(Bu);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):Et(e.slice(2)),t]}var Hu=0,Uu=Promise.resolve(),Wu=()=>Hu||(Uu.then(()=>Hu=0),Hu=Date.now());function Gu(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;gi(Ku(e,n.value),t,5,[e])};return n.value=e,n.attached=Wu(),n}function Ku(e,t){if(Y(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var qu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ju=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?gu(e,r,o):t===`style`?Du(e,n,r):nt(t)?rt(t)||zu(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Yu(e,t,r,o))?(Fu(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Pu(e,t,r,o,a,t!==`value`)):e._isVueCE&&(Xu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ft(r)))?Fu(e,wt(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Pu(e,t,r,o))};function Yu(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&qu(t)&&X(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return qu(t)&&ft(n)?!1:t in e}function Xu(e,t){let n=e._def.props;if(!n)return!1;let r=wt(t);return Array.isArray(n)?n.some(e=>wt(e)===r):Object.keys(n).some(e=>wt(e)===r)}var Zu={};function Qu(e,t,n){let r=Na(e,t);yt(r)&&(r=it({},r,t));class i extends td{constructor(e){super(r,e,n)}}return i.def=r,i}var $u=((e,t)=>Qu(e,t,Gd)),ed=typeof HTMLElement<`u`?HTMLElement:class{},td=class e extends ed{constructor(e,t={},n=Wd){super(),this._def=e,this._props=t,this._createApp=n,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._patching=!1,this._dirty=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._styleAnchors=new WeakMap,this._ob=null,this.shadowRoot&&n!==Wd?this._root=this.shadowRoot:e.shadowRoot===!1?this._root=this:(this.attachShadow(it({},e.shadowRootOptions,{mode:`open`})),this._root=this.shadowRoot)}connectedCallback(){if(!this.isConnected)return;!this.shadowRoot&&!this._resolved&&this._parseSlots(),this._connected=!0;let t=this;for(;t=t&&(t.assignedSlot||t.parentNode||t.host);)if(t instanceof e){this._parent=t;break}this._instance||(this._resolved?this._mount(this._def):t&&t._pendingResolve?this._pendingResolve=t._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._inheritParentContext(e))}_inheritParentContext(e=this._parent){e&&this._app&&Object.setPrototypeOf(this._app._context.provides,e._instance.provides)}disconnectedCallback(){this._connected=!1,Ei(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null,this._teleportTargets&&(this._teleportTargets.clear(),this._teleportTargets=void 0))})}_processMutations(e){for(let t of e)this._setAttr(t.attributeName)}_resolveDef(){if(this._pendingResolve)return;for(let e=0;e<this.attributes.length;e++)this._setAttr(this.attributes[e].name);this._ob=new MutationObserver(this._processMutations.bind(this)),this._ob.observe(this,{attributes:!0});let e=(e,t=!1)=>{this._resolved=!0,this._pendingResolve=void 0;let{props:n,styles:r}=e,i;if(n&&!Y(n))for(let e in n){let t=n[e];(t===Number||t&&t.type===Number)&&(e in this._props&&(this._props[e]=Nt(this._props[e])),(i||(i=Object.create(null)))[wt(e)]=!0)}this._numberProps=i,this._resolveProps(e),this.shadowRoot&&this._applyStyles(r),this._mount(e)},t=this._def.__asyncLoader;t?this._pendingResolve=t().then(t=>{t.configureApp=this._def.configureApp,e(this._def=t,!0)}):e(this._def)}_mount(e){this._app=this._createApp(e),this._inheritParentContext(),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);let t=this._instance&&this._instance.exposed;if(t)for(let e in t)st(this,e)||Object.defineProperty(this,e,{get:()=>Vr(t[e])})}_resolveProps(e){let{props:t}=e,n=Y(t)?t:Object.keys(t||{});for(let e of Object.keys(this))e[0]!==`_`&&n.includes(e)&&this._setProp(e,this[e]);for(let e of n.map(wt))Object.defineProperty(this,e,{get(){return this._getProp(e)},set(t){this._setProp(e,t,!0,!this._patching)}})}_setAttr(e){if(e.startsWith(`data-v-`))return;let t=this.hasAttribute(e),n=t?this.getAttribute(e):Zu,r=wt(e);t&&this._numberProps&&this._numberProps[r]&&(n=Nt(n)),this._setProp(r,n,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,r=!1){if(t!==this._props[e]&&(this._dirty=!0,t===Zu?delete this._props[e]:(this._props[e]=t,e===`key`&&this._app&&(this._app._ceVNode.key=t)),r&&this._instance&&this._update(),n)){let n=this._ob;n&&(this._processMutations(n.takeRecords()),n.disconnect()),t===!0?this.setAttribute(Et(e),``):typeof t==`string`||typeof t==`number`?this.setAttribute(Et(e),t+``):t||this.removeAttribute(Et(e)),n&&n.observe(this,{attributes:!0})}}_update(){let e=this._createVNode();this._app&&(e.appContext=this._app._context),Hd(e,this._root)}_createVNode(){let e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));let t=Xc(this._def,it(e,this._props));return this._instance||(t.ce=e=>{this._instance=e,e.ce=this,e.isCE=!0;let t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,yt(t[0])?it({detail:t},t[0]):{detail:t}))};e.emit=(e,...n)=>{t(e,n),Et(e)!==e&&t(Et(e),n)},this._setParent()}),t}_applyStyles(e,t,n){if(!e)return;if(t){if(t===this._def||this._styleChildren.has(t))return;this._styleChildren.add(t)}let r=this._nonce,i=this.shadowRoot,a=n?this._getStyleAnchor(n)||this._getStyleAnchor(this._def):this._getRootStyleInsertionAnchor(i),o=null;for(let s=e.length-1;s>=0;s--){let c=document.createElement(`style`);r&&c.setAttribute(`nonce`,r),c.textContent=e[s],i.insertBefore(c,o||a),o=c,s===0&&(n||this._styleAnchors.set(this._def,c),t&&this._styleAnchors.set(t,c))}}_getStyleAnchor(e){if(!e)return null;let t=this._styleAnchors.get(e);return t&&t.parentNode===this.shadowRoot?t:(t&&this._styleAnchors.delete(e),null)}_getRootStyleInsertionAnchor(e){for(let t=0;t<e.childNodes.length;t++){let n=e.childNodes[t];if(!(n instanceof HTMLStyleElement))return n}return null}_parseSlots(){let e=this._slots={},t;for(;t=this.firstChild;){let n=t.nodeType===1&&t.getAttribute(`slot`)||`default`;(e[n]||(e[n]=[])).push(t),this.removeChild(t)}}_renderSlots(){let e=this._getSlots(),t=this._instance.type.__scopeId;for(let n=0;n<e.length;n++){let r=e[n],i=r.getAttribute(`name`)||`default`,a=this._slots[i],o=r.parentNode;if(a)for(let e of a){if(t&&e.nodeType===1){let n=t+`-s`,r=document.createTreeWalker(e,1);e.setAttribute(n,``);let i;for(;i=r.nextNode();)i.setAttribute(n,``)}o.insertBefore(e,r)}else for(;r.firstChild;)o.insertBefore(r.firstChild,r);o.removeChild(r)}}_getSlots(){let e=[this];this._teleportTargets&&e.push(...this._teleportTargets);let t=new Set;for(let n of e){let e=n.querySelectorAll(`slot`);for(let n=0;n<e.length;n++)t.add(e[n])}return Array.from(t)}_injectChildStyle(e,t){this._applyStyles(e.styles,e,t)}_beginPatch(){this._patching=!0,this._dirty=!1}_endPatch(){this._patching=!1,this._dirty&&this._instance&&this._update()}_hasShadowRoot(){return this._def.shadowRoot!==!1}_removeChildStyle(e){}};function nd(e){let t=fl();return t&&t.ce||null}function rd(){let e=nd();return e&&e.shadowRoot}function id(e=`$style`){{let t=fl();if(!t)return Qe;let n=t.type.__cssModules;return n&&n[e]||Qe}}var ad=new WeakMap,od=new WeakMap,sd=Symbol(`_moveCb`),cd=Symbol(`_enterCb`),ld=(e=>(delete e.props.mode,e))({name:`TransitionGroup`,props:it({},eu,{tag:String,moveClass:String}),setup(e,{slots:t}){let n=fl(),r=ba(),i,a;return Co(()=>{if(!i.length)return;let t=e.moveClass||`${e.name||`v`}-move`;if(!md(i[0].el,n.vnode.el,t)){i=[];return}i.forEach(ud),i.forEach(dd);let r=i.filter(fd);hu(n.vnode.el),r.forEach(e=>{let n=e.el,r=n.style;su(n,t),r.transform=r.webkitTransform=r.transitionDuration=``;let i=n[sd]=e=>{e&&e.target!==n||(!e||e.propertyName.endsWith(`transform`))&&(n.removeEventListener(`transitionend`,i),n[sd]=null,cu(n,t))};n.addEventListener(`transitionend`,i)}),i=[]}),()=>{let o=jr(e),s=iu(o),c=o.tag||jc;if(i=[],a)for(let e=0;e<a.length;e++){let t=a[e];t.el&&t.el instanceof Element&&(i.push(t),ja(t,Oa(t,s,r,n)),ad.set(t,pd(t.el)))}a=t.default?Ma(t.default()):[];for(let e=0;e<a.length;e++){let t=a[e];t.key!=null&&ja(t,Oa(t,s,r,n))}return Xc(c,null,a)}}});function ud(e){let t=e.el;t[sd]&&t[sd](),t[cd]&&t[cd]()}function dd(e){od.set(e,pd(e.el))}function fd(e){let t=ad.get(e),n=od.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){let t=e.el,n=t.style,a=t.getBoundingClientRect(),o=1,s=1;return t.offsetWidth&&(o=a.width/t.offsetWidth),t.offsetHeight&&(s=a.height/t.offsetHeight),(!Number.isFinite(o)||o===0)&&(o=1),(!Number.isFinite(s)||s===0)&&(s=1),Math.abs(o-1)<.01&&(o=1),Math.abs(s-1)<.01&&(s=1),n.transform=n.webkitTransform=`translate(${r/o}px,${i/s}px)`,n.transitionDuration=`0s`,e}}function pd(e){let t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function md(e,t,n){let r=e.cloneNode(),i=e[Ql];i&&i.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display=`none`;let a=t.nodeType===1?t:t.parentNode;a.appendChild(r);let{hasTransform:o}=fu(r);return a.removeChild(r),o}var hd=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return Y(t)?e=>At(t,e):t};function gd(e){e.target.composing=!0}function _d(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var vd=Symbol(`_assign`);function yd(e,t,n){return t&&(e=e.trim()),n&&(e=Mt(e)),e}var bd={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[vd]=hd(i);let a=r||i.props&&i.props.type===`number`;Iu(e,t?`change`:`input`,t=>{t.target.composing||e[vd](yd(e.value,n,a))}),(n||a)&&Iu(e,`change`,()=>{e.value=yd(e.value,n,a)}),t||(Iu(e,`compositionstart`,gd),Iu(e,`compositionend`,_d),Iu(e,`change`,_d))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[vd]=hd(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?Mt(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},xd={deep:!0,created(e,t,n){e[vd]=hd(n),Iu(e,`change`,()=>{let t=e._modelValue,n=Ed(e),r=e.checked,i=e[vd];if(Y(t)){let e=Yt(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(lt(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(Dd(e,r))})},mounted:Sd,beforeUpdate(e,t,n){e[vd]=hd(n),Sd(e,t,n)}};function Sd(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(Y(t))i=Yt(t,r.props.value)>-1;else if(lt(t))i=t.has(r.props.value);else{if(t===n)return;i=Jt(t,Dd(e,!0))}e.checked!==i&&(e.checked=i)}var Cd={created(e,{value:t},n){e.checked=Jt(t,n.props.value),e[vd]=hd(n),Iu(e,`change`,()=>{e[vd](Ed(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[vd]=hd(r),t!==n&&(e.checked=Jt(t,r.props.value))}},wd={deep:!0,created(e,{value:t,modifiers:{number:n}},r){let i=lt(t);Iu(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?Mt(Ed(e)):Ed(e));e[vd](e.multiple?i?new Set(t):t:t[0]),e._assigning=!0,Ei(()=>{e._assigning=!1})}),e[vd]=hd(r)},mounted(e,{value:t}){Td(e,t)},beforeUpdate(e,t,n){e[vd]=hd(n)},updated(e,{value:t}){e._assigning||Td(e,t)}};function Td(e,t){let n=e.multiple,r=Y(t);if(!(n&&!r&&!lt(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=Ed(a);if(n)if(r){let e=typeof o;e===`string`||e===`number`?a.selected=t.some(e=>String(e)===String(o)):a.selected=Yt(t,o)>-1}else a.selected=t.has(o);else if(Jt(Ed(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Ed(e){return`_value`in e?e._value:e.value}function Dd(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var Od={created(e,t,n){Ad(e,t,n,null,`created`)},mounted(e,t,n){Ad(e,t,n,null,`mounted`)},beforeUpdate(e,t,n,r){Ad(e,t,n,r,`beforeUpdate`)},updated(e,t,n,r){Ad(e,t,n,r,`updated`)}};function kd(e,t){switch(e){case`SELECT`:return wd;case`TEXTAREA`:return bd;default:switch(t){case`checkbox`:return xd;case`radio`:return Cd;default:return bd}}}function Ad(e,t,n,r,i){let a=kd(e.tagName,n.props&&n.props.type)[i];a&&a(e,t,n,r)}function jd(){bd.getSSRProps=({value:e})=>({value:e}),Cd.getSSRProps=({value:e},t)=>{if(t.props&&Jt(t.props.value,e))return{checked:!0}},xd.getSSRProps=({value:e},t)=>{if(Y(e)){if(t.props&&Yt(e,t.props.value)>-1)return{checked:!0}}else if(lt(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},Od.getSSRProps=(e,t)=>{if(typeof t.type!=`string`)return;let n=kd(t.type.toUpperCase(),t.props&&t.props.type);if(n.getSSRProps)return n.getSSRProps(e,t)}}var Md=[`ctrl`,`shift`,`alt`,`meta`],Nd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Md.some(n=>e[`${n}Key`]&&!t.includes(n))},Pd=(e,t)=>{if(!e)return e;let n=e._withMods||(e._withMods={}),r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=Nd[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},Fd={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},Id=(e,t)=>{let n=e._withKeys||(e._withKeys={}),r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=Et(n.key);if(t.some(e=>e===r||Fd[e]===r))return e(n)}))},Ld=it({patchProp:Ju},Yl),Rd,zd=!1;function Bd(){return Rd||(Rd=sc(Ld))}function Vd(){return Rd=zd?Rd:cc(Ld),zd=!0,Rd}var Hd=((...e)=>{Bd().render(...e)}),Ud=((...e)=>{Vd().hydrate(...e)}),Wd=((...e)=>{let t=Bd().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=qd(e);if(!r)return;let i=t._component;!X(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Kd(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t}),Gd=((...e)=>{let t=Vd().createApp(...e),{mount:n}=t;return t.mount=e=>{let t=qd(e);if(t)return n(t,!0,Kd(t))},t});function Kd(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function qd(e){return ft(e)?document.querySelector(e):e}var Jd=!1,Yd=()=>{Jd||(Jd=!0,jd(),xu())},Xd=e({BaseTransition:()=>Ea,BaseTransitionPropsValidators:()=>Sa,Comment:()=>Nc,DeprecationTypes:()=>null,EffectScope:()=>nn,ErrorCodes:()=>pi,ErrorTypeStrings:()=>Rl,Fragment:()=>jc,KeepAlive:()=>lo,ReactiveEffect:()=>ln,Static:()=>Pc,Suspense:()=>bc,Teleport:()=>ha,Text:()=>Mc,TrackOpTypes:()=>ei,Transition:()=>tu,TransitionGroup:()=>ld,TriggerOpTypes:()=>ti,VueElement:()=>td,assertNumber:()=>fi,callWithAsyncErrorHandling:()=>gi,callWithErrorHandling:()=>hi,camelize:()=>wt,capitalize:()=>Dt,cloneVNode:()=>$c,compatUtils:()=>null,compile:()=>Zd,computed:()=>Z,createApp:()=>Wd,createBlock:()=>Uc,createCommentVNode:()=>nl,createElementBlock:()=>Hc,createElementVNode:()=>Yc,createHydrationRenderer:()=>cc,createPropsRestProxy:()=>ss,createRenderer:()=>sc,createSSRApp:()=>Gd,createSlots:()=>zo,createStaticVNode:()=>tl,createTextVNode:()=>el,createVNode:()=>Xc,customRef:()=>Kr,defineAsyncComponent:()=>oo,defineComponent:()=>Na,defineCustomElement:()=>Qu,defineEmits:()=>Yo,defineExpose:()=>Xo,defineModel:()=>$o,defineOptions:()=>Zo,defineProps:()=>Jo,defineSSRCustomElement:()=>$u,defineSlots:()=>Qo,devtools:()=>zl,effect:()=>Sn,effectScope:()=>rn,getCurrentInstance:()=>fl,getCurrentScope:()=>an,getCurrentWatcher:()=>ai,getTransitionRawChildren:()=>Ma,guardReactiveProps:()=>Qc,h:()=>Ml,handleError:()=>_i,hasInjectionContext:()=>Yi,hydrate:()=>Ud,hydrateOnIdle:()=>$a,hydrateOnInteraction:()=>ro,hydrateOnMediaQuery:()=>no,hydrateOnVisible:()=>to,initCustomFormatter:()=>Nl,initDirectivesForSSR:()=>Yd,inject:()=>Ji,isMemoSame:()=>Fl,isProxy:()=>Ar,isReactive:()=>Dr,isReadonly:()=>Or,isRef:()=>Fr,isRuntimeOnly:()=>Tl,isShallow:()=>kr,isVNode:()=>Wc,markRaw:()=>Mr,mergeDefaults:()=>as,mergeModels:()=>os,mergeProps:()=>ol,nextTick:()=>Ei,nodeOps:()=>Yl,normalizeClass:()=>Ht,normalizeProps:()=>Ut,normalizeStyle:()=>Lt,onActivated:()=>fo,onBeforeMount:()=>bo,onBeforeUnmount:()=>wo,onBeforeUpdate:()=>So,onDeactivated:()=>po,onErrorCaptured:()=>ko,onMounted:()=>xo,onRenderTracked:()=>Oo,onRenderTriggered:()=>Do,onScopeDispose:()=>on,onServerPrefetch:()=>Eo,onUnmounted:()=>To,onUpdated:()=>Co,onWatcherCleanup:()=>oi,openBlock:()=>Lc,patchProp:()=>Ju,popScopeId:()=>Hi,provide:()=>qi,proxyRefs:()=>Wr,pushScopeId:()=>Vi,queuePostFlushCb:()=>Ai,reactive:()=>Sr,readonly:()=>wr,ref:()=>Ir,registerRuntimeCompiler:()=>wl,render:()=>Hd,renderList:()=>Ro,renderSlot:()=>Bo,resolveComponent:()=>Mo,resolveDirective:()=>Fo,resolveDynamicComponent:()=>Po,resolveFilter:()=>null,resolveTransitionHooks:()=>Oa,setBlockTracking:()=>Bc,setDevtoolsHook:()=>Bl,setTransitionHooks:()=>ja,shallowReactive:()=>Cr,shallowReadonly:()=>Tr,shallowRef:()=>Lr,ssrContextKey:()=>Xi,ssrUtils:()=>Vl,stop:()=>Cn,toDisplayString:()=>Zt,toHandlerKey:()=>Ot,toHandlers:()=>Ho,toRaw:()=>jr,toRef:()=>Xr,toRefs:()=>qr,toValue:()=>Hr,transformVNodeArgs:()=>Kc,triggerRef:()=>Br,unref:()=>Vr,useAttrs:()=>ns,useCssModule:()=>id,useCssVars:()=>Cu,useHost:()=>nd,useId:()=>Pa,useModel:()=>Os,useSSRContext:()=>Zi,useShadowRoot:()=>rd,useSlots:()=>ts,useTemplateRef:()=>Ia,useTransitionState:()=>ba,vModelCheckbox:()=>xd,vModelDynamic:()=>Od,vModelRadio:()=>Cd,vModelSelect:()=>wd,vModelText:()=>bd,vShow:()=>yu,version:()=>Il,warn:()=>Ll,watch:()=>ta,watchEffect:()=>Qi,watchPostEffect:()=>$i,watchSyncEffect:()=>ea,withAsyncContext:()=>cs,withCtx:()=>Wi,withDefaults:()=>es,withDirectives:()=>Gi,withKeys:()=>Id,withMemo:()=>Pl,withModifiers:()=>Pd,withScopeId:()=>Ui}),Zd=()=>{};function Qd(e,t,n,r){return Object.defineProperty(e,t,{get:n,set:r,enumerable:!0}),e}var $d=Ir(!1),ef;function tf(e,t){let n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||``,version:n[4]||n[2]||`0`,platform:t[0]||``}}function nf(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}var rf=`ontouchstart`in window||window.navigator.maxTouchPoints>0;function af(e){let t=e.toLowerCase(),n=tf(t,nf(t)),r={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};n.browser&&(r[n.browser]=!0,r.version=n.version,r.versionNumber=parseInt(n.version,10)),n.platform&&(r[n.platform]=!0);let i=r.android||r.ios||r.bb||r.blackberry||r.ipad||r.iphone||r.ipod||r.kindle||r.playbook||r.silk||r[`windows phone`];if(i===!0||t.indexOf(`mobile`)!==-1?r.mobile=!0:r.desktop=!0,r[`windows phone`]&&(r.winphone=!0,delete r[`windows phone`]),r.edga||r.edgios||r.edg?(r.edge=!0,n.browser=`edge`):r.crios?(r.chrome=!0,n.browser=`chrome`):r.fxios&&(r.firefox=!0,n.browser=`firefox`),(r.ipod||r.ipad||r.iphone)&&(r.ios=!0),r.vivaldi&&(n.browser=`vivaldi`,r.vivaldi=!0),(r.chrome||r.opr||r.safari||r.vivaldi||r.mobile===!0&&r.ios!==!0&&i!==!0)&&(r.webkit=!0),r.opr&&(n.browser=`opera`,r.opera=!0),r.safari&&(r.blackberry||r.bb?(n.browser=`blackberry`,r.blackberry=!0):r.playbook?(n.browser=`playbook`,r.playbook=!0):r.android?(n.browser=`android`,r.android=!0):r.kindle?(n.browser=`kindle`,r.kindle=!0):r.silk&&(n.browser=`silk`,r.silk=!0)),r.name=n.browser,r.platform=n.platform,t.indexOf(`electron`)!==-1)r.electron=!0;else if(document.location.href.indexOf(`-extension://`)!==-1)r.bex=!0;else{if(window.Capacitor===void 0?(window._cordovaNative!==void 0||window.cordova!==void 0)&&(r.cordova=!0,r.nativeMobile=!0,r.nativeMobileWrapper=`cordova`):(r.capacitor=!0,r.nativeMobile=!0,r.nativeMobileWrapper=`capacitor`),$d.value===!0&&(ef={is:{...r}}),rf===!0&&r.mac===!0&&(r.desktop===!0&&r.safari===!0||r.nativeMobile===!0&&r.android!==!0&&r.ios!==!0&&r.ipad!==!0)){delete r.mac,delete r.desktop;let e=Math.min(window.innerHeight,window.innerWidth)>414?`ipad`:`iphone`;Object.assign(r,{mobile:!0,ios:!0,platform:e,[e]:!0})}r.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete r.desktop,r.mobile=!0)}return r}var of=navigator.userAgent||navigator.vendor||window.opera,sf={has:{touch:!1,webStorage:!1},within:{iframe:!1}},cf={userAgent:of,is:af(of),has:{touch:rf},within:{iframe:window.self!==window.top}},lf={install(e){let{$q:t}=e;$d.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,cf),$d.value=!1}),t.platform=Sr(this)):t.platform=this}};{let e;Qd(cf.has,`webStorage`,()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(lf,cf),$d.value===!0&&(Object.assign(lf,ef,sf),ef=null)}function uf(e){return Mr(Na(e))}function df(e){return Mr(e)}var ff=(e,t)=>{let n=Sr(e);for(let r in e)Qd(t,r,()=>n[r],e=>{n[r]=e});return t},pf={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{let e=Object.defineProperty({},`passive`,{get(){Object.assign(pf,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener(`qtest`,null,e),window.removeEventListener(`qtest`,null,e)}catch{}function mf(){}function hf(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function gf(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();let t=[],n=e.target;for(;n;){if(t.push(n),n.tagName===`HTML`)return t.push(document),t.push(window),t;n=n.parentElement}}function _f(e){e.stopPropagation()}function vf(e){e.cancelable!==!1&&e.preventDefault()}function yf(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function bf(e,t,n){let r=`__q_${t}_evt`;e[r]=e[r]===void 0?n:e[r].concat(n),n.forEach(t=>{t[0].addEventListener(t[1],e[t[2]],pf[t[3]])})}function xf(e,t){let n=`__q_${t}_evt`;e[n]!==void 0&&(e[n].forEach(t=>{t[0].removeEventListener(t[1],e[t[2]],pf[t[3]])}),e[n]=void 0)}function Sf(e,t=250,n){let r=null;function i(){let i=arguments;r===null?n===!0&&e.apply(this,i):clearTimeout(r),r=setTimeout(()=>{r=null,n!==!0&&e.apply(this,i)},t)}return i.cancel=()=>{r!==null&&clearTimeout(r)},i}var Cf=[`sm`,`md`,`lg`,`xl`],{passive:wf}=pf,Tf=ff({width:0,height:0,name:`xs`,sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:mf,setDebounce:mf,install({$q:e,onSSRHydrated:t}){var n;if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}let{visualViewport:r}=window,i=r||window,a=document.scrollingElement||document.documentElement,o=r===void 0||cf.is.mobile===!0?()=>[Math.max(window.innerWidth,a.clientWidth),Math.max(window.innerHeight,a.clientHeight)]:()=>[r.width*r.scale+window.innerWidth-a.clientWidth,r.height*r.scale+window.innerHeight-a.clientHeight],s=((n=e.config.screen)==null?void 0:n.bodyClasses)===!0;this.__update=e=>{let[t,n]=o();if(n!==this.height&&(this.height=n),t!==this.width)this.width=t;else if(e!==!0)return;let r=this.sizes;this.gt.xs=t>=r.sm,this.gt.sm=t>=r.md,this.gt.md=t>=r.lg,this.gt.lg=t>=r.xl,this.lt.sm=t<r.sm,this.lt.md=t<r.md,this.lt.lg=t<r.lg,this.lt.xl=t<r.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,r=this.xs===!0&&`xs`||this.sm===!0&&`sm`||this.md===!0&&`md`||this.lg===!0&&`lg`||`xl`,r!==this.name&&(s===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${r}`)),this.name=r)};let c,l={},u=16;this.setSizes=e=>{Cf.forEach(t=>{e[t]!==void 0&&(l[t]=e[t])})},this.setDebounce=e=>{u=e};let d=()=>{let e=getComputedStyle(document.body);e.getPropertyValue(`--q-size-sm`)&&Cf.forEach(t=>{this.sizes[t]=parseInt(e.getPropertyValue(`--q-size-${t}`),10)}),this.setSizes=e=>{Cf.forEach(t=>{e[t]&&(this.sizes[t]=e[t])}),this.__update(!0)},this.setDebounce=e=>{c!==void 0&&i.removeEventListener(`resize`,c,wf),c=e>0?Sf(this.__update,e):this.__update,i.addEventListener(`resize`,c,wf)},this.setDebounce(u),Object.keys(l).length===0?this.__update():(this.setSizes(l),l=void 0),s===!0&&this.name===`xs`&&document.body.classList.add(`screen--xs`)};$d.value===!0?t.push(d):d()}}),Ef=ff({isActive:!1,mode:!1},{__media:void 0,set(e){Ef.mode=e,e===`auto`?(Ef.__media===void 0&&(Ef.__media=window.matchMedia(`(prefers-color-scheme: dark)`),Ef.__updateMedia=()=>{Ef.set(`auto`)},Ef.__media.addListener(Ef.__updateMedia)),e=Ef.__media.matches):Ef.__media!==void 0&&(Ef.__media.removeListener(Ef.__updateMedia),Ef.__media=void 0),Ef.isActive=e===!0,document.body.classList.remove(`body--${e===!0?`light`:`dark`}`),document.body.classList.add(`body--${e===!0?`dark`:`light`}`)},toggle(){Ef.set(Ef.isActive===!1)},install({$q:e,ssrContext:t}){let n=e.config.dark;e.dark=this,this.__installed!==!0&&this.set(n===void 0?!1:n)}});function Df(e,t,n=document.body){if(typeof e!=`string`)throw TypeError(`Expected a string as propName`);if(typeof t!=`string`)throw TypeError(`Expected a string as value`);if(!(n instanceof Element))throw TypeError(`Expected a DOM element`);n.style.setProperty(`--q-${e}`,t)}var Of=!1;function kf(e){Of=e.isComposing===!0}function Af(e){return Of===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function jf(e,t){return Af(e)===!0?!1:[].concat(t).includes(e.keyCode)}function Mf(e){if(e.ios===!0)return`ios`;if(e.android===!0)return`android`}function Nf({is:e,has:t,within:n},r){let i=[e.desktop===!0?`desktop`:`mobile`,`${t.touch===!1?`no-`:``}touch`];if(e.mobile===!0){let t=Mf(e);t!==void 0&&i.push(`platform-`+t)}if(e.nativeMobile===!0){let t=e.nativeMobileWrapper;i.push(t),i.push(`native-mobile`),e.ios===!0&&(r[t]===void 0||r[t].iosStatusBarPadding!==!1)&&i.push(`q-ios-padding`)}else e.electron===!0?i.push(`electron`):e.bex===!0&&i.push(`bex`);return n.iframe===!0&&i.push(`within-iframe`),i}function Pf(){let{is:e}=cf,t=document.body.className,n=new Set(t.replace(/ {2}/g,` `).split(` `));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)n.delete(`mobile`),n.delete(`platform-ios`),n.delete(`platform-android`),n.add(`desktop`);else if(e.mobile===!0){n.delete(`desktop`),n.add(`mobile`),n.delete(`platform-ios`),n.delete(`platform-android`);let t=Mf(e);t!==void 0&&n.add(`platform-${t}`)}}cf.has.touch===!0&&(n.delete(`no-touch`),n.add(`touch`)),cf.within.iframe===!0&&n.add(`within-iframe`);let r=Array.from(n).join(` `);t!==r&&(document.body.className=r)}function Ff(e){for(let t in e)Df(t,e[t])}var If={install(e){if(this.__installed!==!0){if($d.value===!0)Pf();else{let{$q:t}=e;t.config.brand!==void 0&&Ff(t.config.brand);let n=Nf(cf,t.config);document.body.classList.add.apply(document.body.classList,n)}cf.is.ios===!0&&document.body.addEventListener(`touchstart`,mf),window.addEventListener(`keydown`,kf,!0)}}},Lf=()=>!0;function Rf(e){return typeof e==`string`&&e!==``&&e!==`/`&&e!==`#/`}function zf(e){return e.startsWith(`#`)===!0&&(e=e.substring(1)),e.startsWith(`/`)===!1&&(e=`/`+e),e.endsWith(`/`)===!0&&(e=e.substring(0,e.length-1)),`#`+e}function Bf(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit===`*`)return Lf;let t=[`#/`];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(Rf).map(zf)),()=>t.includes(window.location.hash)}var Vf={__history:[],add:mf,remove:mf,install({$q:e}){if(this.__installed===!0)return;let{cordova:t,capacitor:n}=cf.is;if(t!==!0&&n!==!0)return;let r=e.config[t===!0?`cordova`:`capacitor`];if((r==null?void 0:r.backButton)===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=e=>{e.condition===void 0&&(e.condition=Lf),this.__history.push(e)},this.remove=e=>{let t=this.__history.indexOf(e);t>=0&&this.__history.splice(t,1)};let i=Bf(Object.assign({backButtonExit:!0},r)),a=()=>{if(this.__history.length){let e=this.__history[this.__history.length-1];e.condition()===!0&&(this.__history.pop(),e.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener(`deviceready`,()=>{document.addEventListener(`backbutton`,a,!1)}):window.Capacitor.Plugins.App.addListener(`backButton`,a)}},Hf={isoName:`en-US`,nativeName:`English (US)`,label:{clear:`Clear`,ok:`OK`,cancel:`Cancel`,close:`Close`,set:`Set`,select:`Select`,reset:`Reset`,remove:`Remove`,update:`Update`,create:`Create`,search:`Search`,filter:`Filter`,refresh:`Refresh`,expand:e=>e?`Expand "${e}"`:`Expand`,collapse:e=>e?`Collapse "${e}"`:`Collapse`},date:{days:`Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday`.split(`_`),daysShort:`Sun_Mon_Tue_Wed_Thu_Fri_Sat`.split(`_`),months:`January_February_March_April_May_June_July_August_September_October_November_December`.split(`_`),monthsShort:`Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec`.split(`_`),firstDayOfWeek:0,format24h:!1,pluralDay:`days`,prevMonth:`Previous month`,nextMonth:`Next month`,prevYear:`Previous year`,nextYear:`Next year`,today:`Today`,prevRangeYears:e=>`Previous ${e} years`,nextRangeYears:e=>`Next ${e} years`},table:{noData:`No data available`,noResults:`No matching records found`,loading:`Loading...`,selectedRecords:e=>e===1?`1 record selected.`:(e===0?`No`:e)+` records selected.`,recordsPerPage:`Records per page:`,allRows:`All`,pagination:(e,t,n)=>e+`-`+t+` of `+n,columns:`Columns`},pagination:{first:`First page`,prev:`Previous page`,next:`Next page`,last:`Last page`},editor:{url:`URL`,bold:`Bold`,italic:`Italic`,strikethrough:`Strikethrough`,underline:`Underline`,unorderedList:`Unordered List`,orderedList:`Ordered List`,subscript:`Subscript`,superscript:`Superscript`,hyperlink:`Hyperlink`,toggleFullscreen:`Toggle Fullscreen`,quote:`Quote`,left:`Left align`,center:`Center align`,right:`Right align`,justify:`Justify align`,print:`Print`,outdent:`Decrease indentation`,indent:`Increase indentation`,removeFormat:`Remove formatting`,formatting:`Formatting`,fontSize:`Font Size`,align:`Align`,hr:`Insert Horizontal Rule`,undo:`Undo`,redo:`Redo`,heading1:`Heading 1`,heading2:`Heading 2`,heading3:`Heading 3`,heading4:`Heading 4`,heading5:`Heading 5`,heading6:`Heading 6`,paragraph:`Paragraph`,code:`Code`,size1:`Very small`,size2:`A bit small`,size3:`Normal`,size4:`Medium-large`,size5:`Big`,size6:`Very big`,size7:`Maximum`,defaultFont:`Default Font`,viewSource:`View Source`},tree:{noNodes:`No nodes available`,noResults:`No matching nodes found`}};function Uf(){let e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e==`string`)return e.split(/[-_]/).map((e,t)=>t===0?e.toLowerCase():t>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join(`-`)}var Wf=ff({__qLang:{}},{getLocale:Uf,set(e=Hf,t){let n={...e,rtl:e.rtl===!0,getLocale:Uf};if(n.set=Wf.set,Wf.__langConfig===void 0||Wf.__langConfig.noHtmlAttrs!==!0){let e=document.documentElement;e.setAttribute(`dir`,n.rtl===!0?`rtl`:`ltr`),e.setAttribute(`lang`,n.isoName)}Object.assign(Wf.__qLang,n)},install({$q:e,lang:t,ssrContext:n}){e.lang=Wf.__qLang,Wf.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(e){return Reflect.ownKeys(e).filter(e=>e!==`set`&&e!==`getLocale`)}}),this.set(t||Hf))}}),Gf={name:`material-icons`,type:{positive:`check_circle`,negative:`warning`,info:`info`,warning:`priority_high`},arrow:{up:`arrow_upward`,right:`arrow_forward`,down:`arrow_downward`,left:`arrow_back`,dropdown:`arrow_drop_down`},chevron:{left:`chevron_left`,right:`chevron_right`},colorPicker:{spectrum:`gradient`,tune:`tune`,palette:`style`},pullToRefresh:{icon:`refresh`},carousel:{left:`chevron_left`,right:`chevron_right`,up:`keyboard_arrow_up`,down:`keyboard_arrow_down`,navigationIcon:`lens`},chip:{remove:`cancel`,selected:`check`},datetime:{arrowLeft:`chevron_left`,arrowRight:`chevron_right`,now:`access_time`,today:`today`},editor:{bold:`format_bold`,italic:`format_italic`,strikethrough:`strikethrough_s`,underline:`format_underlined`,unorderedList:`format_list_bulleted`,orderedList:`format_list_numbered`,subscript:`vertical_align_bottom`,superscript:`vertical_align_top`,hyperlink:`link`,toggleFullscreen:`fullscreen`,quote:`format_quote`,left:`format_align_left`,center:`format_align_center`,right:`format_align_right`,justify:`format_align_justify`,print:`print`,outdent:`format_indent_decrease`,indent:`format_indent_increase`,removeFormat:`format_clear`,formatting:`text_format`,fontSize:`format_size`,align:`format_align_left`,hr:`remove`,undo:`undo`,redo:`redo`,heading:`format_size`,code:`code`,size:`format_size`,font:`font_download`,viewSource:`code`},expansionItem:{icon:`keyboard_arrow_down`,denseIcon:`arrow_drop_down`},fab:{icon:`add`,activeIcon:`close`},field:{clear:`cancel`,error:`error`},pagination:{first:`first_page`,prev:`keyboard_arrow_left`,next:`keyboard_arrow_right`,last:`last_page`},rating:{icon:`grade`},stepper:{done:`check`,active:`edit`,error:`warning`},tabs:{left:`chevron_left`,right:`chevron_right`,up:`keyboard_arrow_up`,down:`keyboard_arrow_down`},table:{arrowUp:`arrow_upward`,warning:`warning`,firstPage:`first_page`,prevPage:`chevron_left`,nextPage:`chevron_right`,lastPage:`last_page`},tree:{icon:`play_arrow`},uploader:{done:`done`,clear:`clear`,add:`add_box`,upload:`cloud_upload`,removeQueue:`clear_all`,removeUploaded:`done_all`}},Kf=ff({iconMapFn:null,__qIconSet:{}},{set(e,t){let n={...e};n.set=Kf.set,Object.assign(Kf.__qIconSet,n)},install({$q:e,iconSet:t,ssrContext:n}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,Qd(e,`iconMapFn`,()=>this.iconMapFn,e=>{this.iconMapFn=e}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(e){return Reflect.ownKeys(e).filter(e=>e!==`set`)}}),this.set(t||Gf))}}),qf=`_q_l_`,Jf=`_q_pc_`,Yf=`_q_fo_`;function Xf(){}var Zf={},Qf=!1;function $f(){Qf=!0}function ep(e){return typeof e==`object`&&!!e&&Array.isArray(e)!==!0}var tp=[lf,If,Ef,Tf,Vf,Wf,Kf];function np(e,t){let n=Wd(e);n.config.globalProperties=t.config.globalProperties;let{reload:r,...i}=t._context;return Object.assign(n._context,i),n}function rp(e,t){t.forEach(t=>{t.install(e),t.__installed=!0})}function ip(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(`_q_`,n.$q),rp(n,tp),t.components!==void 0&&Object.values(t.components).forEach(t=>{ep(t)===!0&&t.name!==void 0&&e.component(t.name,t)}),t.directives!==void 0&&Object.values(t.directives).forEach(t=>{ep(t)===!0&&t.name!==void 0&&e.directive(t.name,t)}),t.plugins!==void 0&&rp(n,Object.values(t.plugins).filter(e=>typeof e.install==`function`&&tp.includes(e)===!1)),$d.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(e=>{e()}),n.$q.onSSRHydrated=()=>{}})}var ap=function(e,t={}){let n={version:`2.19.2`};Qf===!1?(t.config!==void 0&&Object.assign(Zf,t.config),n.config={...Zf},$f()):n.config=t.config||{},ip(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})};function op(e,t){return e===void 0?t:e()||t}function sp(e,t){if(e!==void 0){let t=e();if(t!=null)return t.slice()}return t}function cp(e,t){return e===void 0?t:t.concat(e())}function lp(e,t){return e===void 0?t:t===void 0?e():t.concat(e())}function up(e,t){let n=e.style;for(let e in t)n[e]=t[e]}function dp(e){if(e==null)return;if(typeof e==`string`)try{return document.querySelector(e)||void 0}catch{return}let t=Vr(e);if(t)return t.$el||t}function fp(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}var pp={xs:18,sm:24,md:32,lg:38,xl:46},mp={size:String};function hp(e,t=pp){return Z(()=>e.size===void 0?null:{fontSize:e.size in t?`${t[e.size]}px`:e.size})}var gp=`0 0 24 24`,_p=e=>e,vp=e=>`ionicons ${e}`,yp={"mdi-":e=>`mdi ${e}`,"icon-":_p,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":vp,"ion-ios":vp,"ion-logo":vp,"iconfont ":_p,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`,"i-":_p},bp={o_:`-outlined`,r_:`-round`,s_:`-sharp`},xp={sym_o_:`-outlined`,sym_r_:`-rounded`,sym_s_:`-sharp`},Sp=RegExp(`^(`+Object.keys(yp).join(`|`)+`)`),Cp=RegExp(`^(`+Object.keys(bp).join(`|`)+`)`),wp=RegExp(`^(`+Object.keys(xp).join(`|`)+`)`),Tp=/^[Mm]\s?[-+]?\.?\d/,Ep=/^img:/,Dp=/^svguse:/,Op=/^ion-/,kp=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,Ap=uf({name:`QIcon`,props:{...mp,tag:{type:String,default:`i`},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){let{proxy:{$q:n}}=fl(),r=hp(e),i=Z(()=>`q-icon`+(e.left===!0?` on-left`:``)+(e.right===!0?` on-right`:``)+(e.color===void 0?``:` text-${e.color}`)),a=Z(()=>{let t,r=e.name;if(r===`none`||!r)return{none:!0};if(n.iconMapFn!==null){let e=n.iconMapFn(r);if(e!==void 0)if(e.icon!==void 0){if(r=e.icon,r===`none`||!r)return{none:!0}}else return{cls:e.cls,content:e.content===void 0?` `:e.content}}if(Tp.test(r)===!0){let[e,t=gp]=r.split(`|`);return{svg:!0,viewBox:t,nodes:e.split(`&&`).map(e=>{let[t,n,r]=e.split(`@@`);return Ml(`path`,{style:n,d:t,transform:r})})}}if(Ep.test(r)===!0)return{img:!0,src:r.substring(4)};if(Dp.test(r)===!0){let[e,t=gp]=r.split(`|`);return{svguse:!0,src:e.substring(7),viewBox:t}}let i=` `,a=r.match(Sp);if(a!==null)t=yp[a[1]](r);else if(kp.test(r)===!0)t=r;else if(Op.test(r)===!0)t=`ionicons ion-${n.platform.is.ios===!0?`ios`:`md`}${r.substring(3)}`;else if(wp.test(r)===!0){t=`notranslate material-symbols`;let e=r.match(wp);e!==null&&(r=r.substring(6),t+=xp[e[1]]),i=r}else{t=`notranslate material-icons`;let e=r.match(Cp);e!==null&&(r=r.substring(2),t+=bp[e[1]]),i=r}return{cls:t,content:i}});return()=>{let n={class:i.value,style:r.value,"aria-hidden":`true`};return a.value.none===!0?Ml(e.tag,n,op(t.default)):a.value.img===!0?Ml(e.tag,n,cp(t.default,[Ml(`img`,{src:a.value.src})])):a.value.svg===!0?Ml(e.tag,n,cp(t.default,[Ml(`svg`,{viewBox:a.value.viewBox||`0 0 24 24`},a.value.nodes)])):a.value.svguse===!0?Ml(e.tag,n,cp(t.default,[Ml(`svg`,{viewBox:a.value.viewBox},[Ml(`use`,{"xlink:href":a.value.src})])])):(a.value.cls!==void 0&&(n.class+=` `+a.value.cls),Ml(e.tag,n,cp(t.default,[a.value.content])))}}});function jp(e){return e.appContext.config.globalProperties.$router!==void 0}function Mp(e){return e.isUnmounted===!0||e.isDeactivated===!0}var Np=[],Pp=[],Fp=1,Ip=document.body;function Lp(e,t){let n=document.createElement(`div`);if(n.id=t===void 0?e:`q-portal--${t}--${Fp++}`,Zf.globalNodes!==void 0){let e=Zf.globalNodes.class;e!==void 0&&(n.className=e)}return Ip.appendChild(n),Np.push(n),Pp.push(t),n}function Rp(e){let t=Np.indexOf(e);Np.splice(t,1),Pp.splice(t,1),e.remove()}var zp={size:{type:[String,Number],default:`1em`},color:String};function Bp(e){return{cSize:Z(()=>e.size in pp?`${pp[e.size]}px`:e.size),classes:Z(()=>`q-spinner`+(e.color?` text-${e.color}`:``))}}var Vp=uf({name:`QSpinner`,props:{...zp,thickness:{type:Number,default:5}},setup(e){let{cSize:t,classes:n}=Bp(e);return()=>Ml(`svg`,{class:n.value+` q-spinner-mat`,width:t.value,height:t.value,viewBox:`25 25 50 50`},[Ml(`circle`,{class:`path`,cx:`50`,cy:`50`,r:`20`,fill:`none`,stroke:`currentColor`,"stroke-width":e.thickness,"stroke-miterlimit":`10`})])}});function Hp(e,t=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),r=e.apply(this,arguments)),r}}function Up(e,t,n,r){n.modifiers.stop===!0&&_f(e);let i=n.modifiers.color,a=n.modifiers.center;a=a===!0||r===!0;let o=document.createElement(`span`),s=document.createElement(`span`),c=hf(e),{left:l,top:u,width:d,height:f}=t.getBoundingClientRect(),p=Math.sqrt(d*d+f*f),m=p/2,h=`${(d-p)/2}px`,g=a?h:`${c.left-l-m}px`,_=`${(f-p)/2}px`,v=a?_:`${c.top-u-m}px`;s.className=`q-ripple__inner`,up(s,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${g},${v},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?` text-`+i:``}`,o.setAttribute(`dir`,`ltr`),o.appendChild(s),t.appendChild(o);let y=()=>{o.remove(),clearTimeout(b)};n.abort.push(y);let b=setTimeout(()=>{s.classList.add(`q-ripple__inner--enter`),s.style.transform=`translate3d(${h},${_},0) scale3d(1,1,1)`,s.style.opacity=.2,b=setTimeout(()=>{s.classList.remove(`q-ripple__inner--enter`),s.classList.add(`q-ripple__inner--leave`),s.style.opacity=0,b=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(y),1)},275)},250)},50)}function Wp(e,{modifiers:t,value:n,arg:r}){let i=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var Gp=df({name:`ripple`,beforeMount(e,t){let n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;let r={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(t){r.enabled===!0&&t.qSkipRipple!==!0&&t.type===(r.modifiers.early===!0?`pointerdown`:`click`)&&Up(t,e,r,t.qKeyEvent===!0)},keystart:Hp(t=>{r.enabled===!0&&t.qSkipRipple!==!0&&jf(t,r.modifiers.keyCodes)===!0&&t.type===`key${r.modifiers.early===!0?`down`:`up`}`&&Up(t,e,r,!0)},300)};Wp(r,t),e.__qripple=r,bf(r,`main`,[[e,`pointerdown`,`start`,`passive`],[e,`click`,`start`,`passive`],[e,`keydown`,`keystart`,`passive`],[e,`keyup`,`keystart`,`passive`]])},updated(e,t){if(t.oldValue!==t.value){let n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&Wp(n,t))}},beforeUnmount(e){let t=e.__qripple;t!==void 0&&(t.abort.forEach(e=>{e()}),xf(t,`main`),delete e._qripple)}}),Kp={left:`start`,center:`center`,right:`end`,between:`between`,around:`around`,evenly:`evenly`,stretch:`stretch`},qp=Object.keys(Kp),Jp={align:{type:String,validator:e=>qp.includes(e)}};function Yp(e){return Z(()=>{let t=e.align===void 0?e.vertical===!0?`stretch`:`left`:e.align;return`${e.vertical===!0?`items`:`justify`}-${Kp[t]}`})}function Xp(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}function Zp(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Qp(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(Array.isArray(i)===!1||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function $p(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function em(e,t){return Array.isArray(e)===!0?$p(e,t):Array.isArray(t)===!0?$p(t,e):e===t}function tm(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(em(e[n],t[n])===!1)return!1;return!0}var nm={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},rm={...nm,exact:Boolean,activeClass:{type:String,default:`q-router-link--active`},exactActiveClass:{type:String,default:`q-router-link--exact-active`}};function im({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){let n=fl(),{props:r,proxy:i,emit:a}=n,o=jp(n),s=Z(()=>r.disable!==!0&&r.href!==void 0),c=Z(t===!0?()=>o===!0&&r.disable!==!0&&s.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==``:()=>o===!0&&s.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==``),l=Z(()=>c.value===!0?v(r.to):null),u=Z(()=>l.value!==null),d=Z(()=>s.value===!0||u.value===!0),f=Z(()=>r.type===`a`||d.value===!0?`a`:r.tag||e||`div`),p=Z(()=>s.value===!0?{href:r.href,target:r.target}:u.value===!0?{href:l.value.href,target:r.target}:{}),m=Z(()=>{if(u.value===!1)return-1;let{matched:e}=l.value,{length:t}=e,n=e[t-1];if(n===void 0)return-1;let r=i.$route.matched;if(r.length===0)return-1;let a=r.findIndex(Zp.bind(null,n));if(a!==-1)return a;let o=Xp(e[t-2]);return t>1&&Xp(n)===o&&r[r.length-1].path!==o?r.findIndex(Zp.bind(null,e[t-2])):a}),h=Z(()=>u.value===!0&&m.value!==-1&&Qp(i.$route.params,l.value.params)),g=Z(()=>h.value===!0&&m.value===i.$route.matched.length-1&&tm(i.$route.params,l.value.params)),_=Z(()=>u.value===!0?g.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?``:h.value===!0?` ${r.activeClass}`:``:``);function v(e){try{return i.$router.resolve(e)}catch{}return null}function y(e,{returnRouterError:t,to:n=r.to,replace:a=r.replace}={}){if(r.disable===!0)return e.preventDefault(),Promise.resolve(!1);if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==void 0&&e.button!==0||r.target===`_blank`)return Promise.resolve(!1);e.preventDefault();let o=i.$router[a===!0?`replace`:`push`](n);return t===!0?o:o.then(()=>{}).catch(()=>{})}function b(e){if(u.value===!0){let t=t=>y(e,t);a(`click`,e,t),e.defaultPrevented!==!0&&t()}else a(`click`,e)}return{hasRouterLink:u,hasHrefLink:s,hasLink:d,linkTag:f,resolvedLink:l,linkIsActive:h,linkIsExactActive:g,linkClass:_,linkAttrs:p,getLink:v,navigateToRouterLink:y,navigateOnClick:b}}var am={none:0,xs:4,sm:8,md:16,lg:24,xl:32},om={xs:8,sm:10,md:14,lg:20,xl:24},sm=[`button`,`submit`,`reset`],cm=/[^\s]\/[^\s]/,lm=[`flat`,`outline`,`push`,`unelevated`];function um(e,t){return e.flat===!0?`flat`:e.outline===!0?`outline`:e.push===!0?`push`:e.unelevated===!0?`unelevated`:t}var dm={...mp,...nm,type:{type:String,default:`button`},label:[Number,String],icon:String,iconRight:String,...lm.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Jp.align,default:`center`},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean,round:Boolean};function fm(e){let t=hp(e,om),n=Yp(e),{hasRouterLink:r,hasLink:i,linkTag:a,linkAttrs:o,navigateOnClick:s}=im({fallbackTag:`button`}),c=Z(()=>{let n=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding===void 0?n:Object.assign({},n,{padding:e.padding.split(/\s+/).map(e=>e in am?am[e]+`px`:e).join(` `),minWidth:`0`,minHeight:`0`})}),l=Z(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),u=Z(()=>e.disable!==!0&&e.loading!==!0),d=Z(()=>u.value===!0?e.tabindex||0:-1),f=Z(()=>um(e,`standard`)),p=Z(()=>{let t={tabindex:d.value};return i.value===!0?Object.assign(t,o.value):sm.includes(e.type)===!0&&(t.type=e.type),a.value===`a`?(e.disable===!0?t[`aria-disabled`]=`true`:t.href===void 0&&(t.role=`button`),r.value!==!0&&cm.test(e.type)===!0&&(t.type=e.type)):e.disable===!0&&(t.disabled=``,t[`aria-disabled`]=`true`),e.loading===!0&&e.percentage!==void 0&&Object.assign(t,{role:`progressbar`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),t});return{classes:Z(()=>{let t;e.color===void 0?e.textColor&&(t=`text-${e.textColor}`):t=e.flat===!0||e.outline===!0?`text-${e.textColor||e.color}`:`bg-${e.color} text-${e.textColor||`white`}`;let n=e.round===!0?`round`:`rectangle${l.value===!0?` q-btn--rounded`:e.square===!0?` q-btn--square`:``}`;return`q-btn--${f.value} q-btn--${n}`+(t===void 0?``:` `+t)+(u.value===!0?` q-btn--actionable q-focusable q-hoverable`:e.disable===!0?` disabled`:``)+(e.fab===!0?` q-btn--fab`:e.fabMini===!0?` q-btn--fab-mini`:``)+(e.noCaps===!0?` q-btn--no-uppercase`:``)+(e.dense===!0?` q-btn--dense`:``)+(e.stretch===!0?` no-border-radius self-stretch`:``)+(e.glossy===!0?` glossy`:``)+(e.square?` q-btn--square`:``)}),style:c,innerClasses:Z(()=>n.value+(e.stack===!0?` column`:` row`)+(e.noWrap===!0?` no-wrap text-no-wrap`:``)+(e.loading===!0?` q-btn__content--hidden`:``)),attributes:p,hasLink:i,linkTag:a,navigateOnClick:s,isActionable:u}}var{passiveCapture:pm}=pf,mm=null,hm=null,gm=null,_m=uf({name:`QBtn`,props:{...dm,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:[`click`,`keydown`,`mousedown`,`keyup`],setup(e,{slots:t,emit:n}){let{proxy:r}=fl(),{classes:i,style:a,innerClasses:o,attributes:s,hasLink:c,linkTag:l,navigateOnClick:u,isActionable:d}=fm(e),f=Ir(null),p=Ir(null),m=null,h,g=null,_=Z(()=>e.label!==void 0&&e.label!==null&&e.label!==``),v=Z(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:c.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),y=Z(()=>({center:e.round})),b=Z(()=>{let t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:`transform 0.6s`,transform:`translateX(${t-100}%)`}:{}}),x=Z(()=>{if(e.loading===!0)return{onMousedown:E,onTouchstart:E,onClick:E,onKeydown:E,onKeyup:E};if(d.value===!0){let t={onClick:S,onKeydown:C,onMousedown:w};if(r.$q.platform.has.touch===!0){let n=e.onTouchstart===void 0?`Passive`:``;t[`onTouchstart${n}`]=te}return t}return{onClick:yf}}),ee=Z(()=>({ref:f,class:`q-btn q-btn-item non-selectable no-outline `+i.value,style:a.value,...s.value,...x.value}));function S(t){if(f.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;let n=document.activeElement;if(e.type===`submit`&&n!==document.body&&f.value.contains(n)===!1&&n.contains(f.value)===!1){t.qAvoidFocus!==!0&&f.value.focus();let e=()=>{var t;document.removeEventListener(`keydown`,yf,!0),document.removeEventListener(`keyup`,e,pm),(t=f.value)==null||t.removeEventListener(`blur`,e,pm)};document.addEventListener(`keydown`,yf,!0),document.addEventListener(`keyup`,e,pm),f.value.addEventListener(`blur`,e,pm)}}u(t)}}function C(e){f.value!==null&&(n(`keydown`,e),jf(e,[13,32])===!0&&hm!==f.value&&(hm!==null&&ne(),e.defaultPrevented!==!0&&(e.qAvoidFocus!==!0&&f.value.focus(),hm=f.value,f.value.classList.add(`q-btn--active`),document.addEventListener(`keyup`,T,!0),f.value.addEventListener(`blur`,T,pm)),yf(e)))}function te(e){f.value!==null&&(n(`touchstart`,e),e.defaultPrevented!==!0&&(mm!==f.value&&(mm!==null&&ne(),mm=f.value,m=e.target,m.addEventListener(`touchcancel`,T,pm),m.addEventListener(`touchend`,T,pm)),h=!0,g!==null&&clearTimeout(g),g=setTimeout(()=>{g=null,h=!1},200)))}function w(e){f.value!==null&&(e.qSkipRipple=h===!0,n(`mousedown`,e),e.defaultPrevented!==!0&&gm!==f.value&&(gm!==null&&ne(),gm=f.value,f.value.classList.add(`q-btn--active`),document.addEventListener(`mouseup`,T,pm)))}function T(e){if(f.value!==null&&!((e==null?void 0:e.type)===`blur`&&document.activeElement===f.value)){if((e==null?void 0:e.type)===`keyup`){if(hm===f.value&&jf(e,[13,32])===!0){let t=new MouseEvent(`click`,e);t.qKeyEvent=!0,e.defaultPrevented===!0&&vf(t),e.cancelBubble===!0&&_f(t),f.value.dispatchEvent(t),yf(e),e.qKeyEvent=!0}n(`keyup`,e)}ne()}}function ne(e){var t;let n=p.value;if(e!==!0&&(mm===f.value||gm===f.value)&&n!==null&&n!==document.activeElement&&(n.setAttribute(`tabindex`,-1),n.focus()),mm===f.value&&(m!==null&&(m.removeEventListener(`touchcancel`,T,pm),m.removeEventListener(`touchend`,T,pm)),mm=m=null),gm===f.value&&(document.removeEventListener(`mouseup`,T,pm),gm=null),hm===f.value){var r;document.removeEventListener(`keyup`,T,!0),(r=f.value)==null||r.removeEventListener(`blur`,T,pm),hm=null}(t=f.value)==null||t.classList.remove(`q-btn--active`)}function E(e){yf(e),e.qSkipRipple=!0}return wo(()=>{ne(!0)}),Object.assign(r,{click:e=>{d.value===!0&&S(e)}}),()=>{let n=[];e.icon!==void 0&&n.push(Ml(Ap,{name:e.icon,left:e.stack!==!0&&_.value===!0,role:`img`})),_.value===!0&&n.push(Ml(`span`,{class:`block`},[e.label])),n=cp(t.default,n),e.iconRight!==void 0&&e.round===!1&&n.push(Ml(Ap,{name:e.iconRight,right:e.stack!==!0&&_.value===!0,role:`img`}));let r=[Ml(`span`,{class:`q-focus-helper`,ref:p})];return e.loading===!0&&e.percentage!==void 0&&r.push(Ml(`span`,{class:`q-btn__progress absolute-full overflow-hidden`+(e.darkPercentage===!0?` q-btn__progress--dark`:``)},[Ml(`span`,{class:`q-btn__progress-indicator fit block`,style:b.value})])),r.push(Ml(`span`,{class:`q-btn__content text-center col items-center q-anchor--skip `+o.value},n)),e.loading!==null&&r.push(Ml(tu,{name:`q-transition--fade`},()=>e.loading===!0?[Ml(`span`,{key:`loading`,class:`absolute-full flex flex-center`},t.loading===void 0?[Ml(Vp)]:t.loading())]:null)),Gi(Ml(l.value,ee.value,r),[[Gp,v.value,void 0,y.value]])}}}),vm=typeof window<`u`,ym,bm=e=>ym=e,xm=Symbol();function Sm(e){return e&&typeof e==`object`&&Object.prototype.toString.call(e)===`[object Object]`&&typeof e.toJSON!=`function`}var Cm;(function(e){e.direct=`direct`,e.patchObject=`patch object`,e.patchFunction=`patch function`})(Cm||(Cm={}));var wm=typeof window==`object`&&window.window===window?window:typeof self==`object`&&self.self===self?self:typeof global==`object`&&global.global===global?global:typeof globalThis==`object`?globalThis:{HTMLElement:null};function Tm(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([`﻿`,e],{type:e.type}):e}function Em(e,t,n){let r=new XMLHttpRequest;r.open(`GET`,e),r.responseType=`blob`,r.onload=function(){jm(r.response,t,n)},r.onerror=function(){console.error(`could not download file`)},r.send()}function Dm(e){let t=new XMLHttpRequest;t.open(`HEAD`,e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function Om(e){try{e.dispatchEvent(new MouseEvent(`click`))}catch{let t=new MouseEvent(`click`,{bubbles:!0,cancelable:!0,view:window,detail:0,screenX:80,screenY:20,clientX:80,clientY:20,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});e.dispatchEvent(t)}}var km=typeof navigator==`object`?navigator:{userAgent:``},Am=/Macintosh/.test(km.userAgent)&&/AppleWebKit/.test(km.userAgent)&&!/Safari/.test(km.userAgent),jm=vm?typeof HTMLAnchorElement<`u`&&`download`in HTMLAnchorElement.prototype&&!Am?Mm:`msSaveOrOpenBlob`in km?Nm:Pm:()=>{};function Mm(e,t=`download`,n){let r=document.createElement(`a`);r.download=t,r.rel=`noopener`,typeof e==`string`?(r.href=e,r.origin===location.origin?Om(r):Dm(r.href)?Em(e,t,n):(r.target=`_blank`,Om(r))):(r.href=URL.createObjectURL(e),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){Om(r)},0))}function Nm(e,t=`download`,n){if(typeof e==`string`)if(Dm(e))Em(e,t,n);else{let t=document.createElement(`a`);t.href=e,t.target=`_blank`,setTimeout(function(){Om(t)})}else navigator.msSaveOrOpenBlob(Tm(e,n),t)}function Pm(e,t,n,r){if(r=r||open(``,`_blank`),r&&(r.document.title=r.document.body.innerText=`downloading...`),typeof e==`string`)return Em(e,t,n);let i=e.type===`application/octet-stream`,a=/constructor/i.test(String(wm.HTMLElement))||`safari`in wm,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&a||Am)&&typeof FileReader<`u`){let t=new FileReader;t.onloadend=function(){let e=t.result;if(typeof e!=`string`)throw r=null,Error(`Wrong reader.result type`);e=o?e:e.replace(/^data:[^;]*;/,`data:attachment/file;`),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{let t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout(function(){URL.revokeObjectURL(t)},4e4)}}var{assign:Fm}=Object;function Im(){let e=rn(!0),t=e.run(()=>Ir({})),n=[],r=[],i=Mr({install(e){bm(i),i._a=e,e.provide(xm,i),e.config.globalProperties.$pinia=i,r.forEach(e=>n.push(e)),r=[]},use(e){return this._a?n.push(e):r.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}var Lm=()=>{};function Rm(e,t,n,r=Lm){e.add(t);let i=()=>{e.delete(t)&&r()};return!n&&an()&&on(i),i}function zm(e,...t){e.forEach(e=>{e(...t)})}var Bm=e=>e(),Vm=Symbol(),Hm=Symbol();function Um(e,t){e instanceof Map&&t instanceof Map?t.forEach((t,n)=>e.set(n,t)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(let n in t){if(!t.hasOwnProperty(n))continue;let r=t[n],i=e[n];Sm(i)&&Sm(r)&&e.hasOwnProperty(n)&&!Fr(r)&&!Dr(r)?e[n]=Um(i,r):e[n]=r}return e}var Wm=Symbol();function Gm(e){return!Sm(e)||!Object.prototype.hasOwnProperty.call(e,Wm)}var{assign:Km}=Object;function qm(e){return!!(Fr(e)&&e.effect)}function Jm(e,t,n,r){let{state:i,actions:a,getters:o}=t,s=n.state.value[e],c;function l(){return s||(n.state.value[e]=i?i():{}),Km(qr(n.state.value[e]),a,Object.keys(o||{}).reduce((t,r)=>(t[r]=Mr(Z(()=>{bm(n);let t=n._s.get(e);return o[r].call(t,t)})),t),{}))}return c=Ym(e,l,t,n,r,!0),c}function Ym(e,t,n={},r,i,a){let o,s=Km({actions:{}},n),c={deep:!0},l,u,d=new Set,f=new Set,p=r.state.value[e];!a&&!p&&(r.state.value[e]={});let m;function h(t){let n;l=u=!1,typeof t==`function`?(t(r.state.value[e]),n={type:Cm.patchFunction,storeId:e,events:void 0}):(Um(r.state.value[e],t),n={type:Cm.patchObject,payload:t,storeId:e,events:void 0});let i=m=Symbol();Ei().then(()=>{m===i&&(l=!0)}),u=!0,zm(d,n,r.state.value[e])}let g=a?function(){let{state:e}=n,t=e?e():{};this.$patch(e=>{Km(e,t)})}:Lm;function _(){o.stop(),d.clear(),f.clear(),r._s.delete(e)}let v=(t,n=``)=>{if(Vm in t)return t[Hm]=n,t;let i=function(){bm(r);let n=Array.from(arguments),a=new Set,o=new Set;function s(e){a.add(e)}function c(e){o.add(e)}zm(f,{args:n,name:i[Hm],store:y,after:s,onError:c});let l;try{l=t.apply(this&&this.$id===e?this:y,n)}catch(e){throw zm(o,e),e}return l instanceof Promise?l.then(e=>(zm(a,e),e)).catch(e=>(zm(o,e),Promise.reject(e))):(zm(a,l),l)};return i[Vm]=!0,i[Hm]=n,i},y=Sr({_p:r,$id:e,$onAction:Rm.bind(null,f),$patch:h,$reset:g,$subscribe(t,n={}){let i=Rm(d,t,n.detached,()=>a()),a=o.run(()=>ta(()=>r.state.value[e],r=>{(n.flush===`sync`?u:l)&&t({storeId:e,type:Cm.direct,events:void 0},r)},Km({},c,n)));return i},$dispose:_});r._s.set(e,y);let b=(r._a&&r._a.runWithContext||Bm)(()=>r._e.run(()=>(o=rn()).run(()=>t({action:v}))));for(let t in b){let n=b[t];Fr(n)&&!qm(n)||Dr(n)?a||(p&&Gm(n)&&(Fr(n)?n.value=p[t]:Um(n,p[t])),r.state.value[e][t]=n):typeof n==`function`&&(b[t]=v(n,t),s.actions[t]=n)}return Km(y,b),Km(jr(y),b),Object.defineProperty(y,`$state`,{get:()=>r.state.value[e],set:e=>{h(t=>{Km(t,e)})}}),r._p.forEach(e=>{Km(y,o.run(()=>e({store:y,app:r._a,pinia:r,options:s})))}),p&&a&&n.hydrate&&n.hydrate(y.$state,p),l=!0,u=!0,y}function Xm(e,t,n){let r,i=typeof t==`function`;r=i?n:t;function a(n,a){let o=Yi();return n=n||(o?Ji(xm,null):null),n&&bm(n),n=ym,n._s.has(e)||(i?Ym(e,t,r,n):Jm(e,r,n)),n._s.get(e)}return a.$id=e,a}var Zm=e=>{if(typeof e==`bigint`)return e.toString();if(Array.isArray(e))return e.map(Zm);if(typeof e==`object`&&e){let t={};for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=Zm(e[n]));return t}return e},Qm=e=>JSON.stringify(e,(e,t)=>typeof t==`bigint`?t.toString():t),$m=e=>({name:e.name,message:e.message,code:e.code,cause:e.cause?$m(e.cause):void 0,data:e.data?Zm(e.data):void 0}),eh=e=>Zm(e),th=e=>Qm(e),nh=Xm(`wallet`,()=>{var e,t,n,r,i,a,o,s,c,l,u,d,f;let p=`cxbt-wallet`,m=Ir(null);try{let e=localStorage.getItem(p);e&&(m.value=JSON.parse(e))}catch{}let h=Ir(((e=m.value)==null?void 0:e.address)||null),g=Ir(((t=m.value)==null?void 0:t.isConnected)||!1),_=Ir(((n=m.value)==null?void 0:n.chainId)||null),v=Ir(((r=m.value)==null?void 0:r.balance)||null),y=Ir((i=m.value)!=null&&i.paidBalance?BigInt(m.value.paidBalance):null),b=Ir((a=m.value)!=null&&a.workBalance?BigInt(m.value.workBalance):null),x=Ir((o=m.value)!=null&&o.lockedTokens?BigInt(m.value.lockedTokens):null),ee=Ir(!1),S=Ir(null),C=Ir(((s=m.value)==null?void 0:s.paidTokenName)||null),te=Ir(((c=m.value)==null?void 0:c.paidTokenSymbol)||null),w=Ir(((l=m.value)==null?void 0:l.workTokenName)||null),T=Ir(((u=m.value)==null?void 0:u.workTokenSymbol)||null),ne=Ir(((d=m.value)==null?void 0:d.paidDecimals)||18),E=Ir(((f=m.value)==null?void 0:f.workDecimals)||18);function D(){try{localStorage.setItem(p,Qm({address:h.value,isConnected:g.value,chainId:_.value,balance:v.value,paidBalance:y.value?y.value.toString():null,workBalance:b.value?b.value.toString():null,lockedTokens:x.value?x.value.toString():null,paidTokenName:C.value,paidTokenSymbol:te.value,workTokenName:w.value,workTokenSymbol:T.value,paidDecimals:ne.value,workDecimals:E.value}))}catch{}}function re(){console.log(`[Wallet Store] connect() called`),g.value=!0,console.log(`[Wallet Store] isConnected.value after connect:`,g.value),M(),D()}function ie(){console.log(`[Wallet Store] disconnect() called`),h.value=null,g.value=!1,_.value=null,v.value=null,M(),console.log(`[Wallet Store] State after disconnect - address:`,h.value,`isConnected:`,g.value),D()}function ae(e){console.log(`[Wallet Store] setAddress called with:`,e),h.value=e,console.log(`[Wallet Store] address.value after set:`,h.value),D()}function oe(e){console.log(`[Wallet Store] setIsConnected called with:`,e),g.value=e,console.log(`[Wallet Store] isConnected.value after set:`,g.value),D()}function se(e){_.value=e,D()}function ce(e){v.value=e,D()}function le(e){y.value=e,D()}function O(e){b.value=e,D()}function ue(e){x.value=e,D()}function k(e){ee.value=e}function de(e){S.value=e}function fe(e){C.value=e,D()}function pe(e){te.value=e,D()}function me(e){w.value=e,D()}function he(e){T.value=e,D()}function A(e){console.log(`[Wallet Store] setPaidDecimals called with:`,e),ne.value=e,D()}function j(e){console.log(`[Wallet Store] setWorkDecimals called with:`,e),E.value=e,D()}function M(){y.value=null,b.value=null,x.value=null,ee.value=!1,S.value=null,C.value=null,te.value=null,w.value=null,T.value=null,ne.value=18,E.value=18}let N=Z(()=>h.value?`${h.value.slice(0,6)}...${h.value.slice(-4)}`:null),ge=Z(()=>_.value===8453),_e=Z(()=>y.value!==null||b.value!==null),ve=(e,t)=>{if(e==null)return`0`;let n=BigInt(10**t),r=e/n,i=e%n,a=r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,` `),o=i.toString().padStart(t,`0`);return o=o.replace(/0+$/,``),o===``?a:`${a}.${o}`};return{address:h,isConnected:g,chainId:_,balance:v,paidBalance:y,workBalance:b,lockedTokens:x,balancesLoading:ee,balancesError:S,paidTokenName:C,paidTokenSymbol:te,workTokenName:w,workTokenSymbol:T,paidDecimals:ne,workDecimals:E,connect:re,disconnect:ie,setAddress:ae,setIsConnected:oe,setChainId:se,setBalance:ce,setPaidBalance:le,setWorkBalance:O,setLockedTokens:ue,setBalancesLoading:k,setBalancesError:de,setPaidTokenName:fe,setPaidTokenSymbol:pe,setWorkTokenName:me,setWorkTokenSymbol:he,setPaidDecimals:A,setWorkDecimals:j,clearBalances:M,shortAddress:N,isBaseNetwork:ge,hasBalances:_e,formattedPaidBalance:Z(()=>{var e;if(console.log(`[Wallet Store] formattedPaidBalance computed:`,{balance:(e=y.value)==null?void 0:e.toString(),decimals:ne.value}),y.value===null)return`0`;let t=ve(y.value,ne.value);return console.log(`[Wallet Store] formattedPaidBalance result:`,t),t}),formattedWorkBalance:Z(()=>{var e;if(console.log(`[Wallet Store] formattedWorkBalance computed:`,{balance:(e=b.value)==null?void 0:e.toString(),decimals:E.value}),b.value===null)return`0`;let t=ve(b.value,E.value);return console.log(`[Wallet Store] formattedWorkBalance result:`,t),t}),formattedLockedTokens:Z(()=>{var e;if(console.log(`[Wallet Store] formattedLockedTokens computed:`,{balance:(e=x.value)==null?void 0:e.toString(),decimals:E.value}),x.value===null||x.value===void 0)return`0`;let t=ve(x.value,E.value);return console.log(`[Wallet Store] formattedLockedTokens result:`,t),t}),totalWorkTokens:Z(()=>{let e=b.value||0n,t=x.value||0n,n=e+t;console.log(`[Wallet Store] totalWorkTokens computed:`,{work:e.toString(),locked:t.toString(),total:n.toString(),decimals:E.value});let r=ve(n,E.value);return console.log(`[Wallet Store] totalWorkTokens result:`,r),r})}}),rh={gasPriceOracle:{address:`0x420000000000000000000000000000000000000F`},l1Block:{address:`0x4200000000000000000000000000000000000015`},l2CrossDomainMessenger:{address:`0x4200000000000000000000000000000000000007`},l2Erc721Bridge:{address:`0x4200000000000000000000000000000000000014`},l2StandardBridge:{address:`0x4200000000000000000000000000000000000010`},l2ToL1MessagePasser:{address:`0x4200000000000000000000000000000000000016`}},ih={block:h({format(e){var n;return{transactions:(n=e.transactions)==null?void 0:n.map(e=>{if(typeof e==`string`)return e;let n=s(e);return n.typeHex===`0x7e`&&(n.isSystemTx=e.isSystemTx,n.mint=e.mint?t(e.mint):void 0,n.sourceHash=e.sourceHash,n.type=`deposit`),n}),stateRoot:e.stateRoot}}}),transaction:l({format(e){let n={};return e.type===`0x7e`&&(n.isSystemTx=e.isSystemTx,n.mint=e.mint?t(e.mint):void 0,n.sourceHash=e.sourceHash,n.type=`deposit`),n}}),transactionReceipt:m({format(e){return{l1GasPrice:e.l1GasPrice?t(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?t(e.l1GasUsed):null,l1Fee:e.l1Fee?t(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null}}})};function ah(e,t){return ch(e)?sh(e):u(e,t)}var oh={transaction:ah};function sh(e){lh(e);let{sourceHash:t,data:n,from:r,gas:o,isSystemTx:s,mint:l,to:u,value:d}=e;return a([`0x7e`,c([t,r,u??`0x`,l?i(l):`0x`,d?i(d):`0x`,o?i(o):`0x`,s?`0x1`:`0x`,n??`0x`])])}function ch(e){return e.type===`deposit`||e.sourceHash!==void 0}function lh(e){let{from:t,to:r}=e;if(t&&!o(t))throw new n({address:t});if(r&&!o(r))throw new n({address:r})}var uh={blockTime:2e3,contracts:rh,formatters:ih,serializers:oh},dh=1,fh=f({...uh,id:8453,name:`Base`,nativeCurrency:{name:`Ether`,symbol:`ETH`,decimals:18},rpcUrls:{default:{http:[`https://mainnet.base.org`]}},blockExplorers:{default:{name:`Basescan`,url:`https://basescan.org`,apiUrl:`https://api.basescan.org/api`}},contracts:{...uh.contracts,disputeGameFactory:{[dh]:{address:`0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e`}},l2OutputOracle:{[dh]:{address:`0x56315b90c40730925ec5485cf004d835058518A0`}},multicall3:{address:`0xca11bde05977b3631167028862be2a173976ca11`,blockCreated:5022},portal:{[dh]:{address:`0x49048044D57e1C92A77f79988d21Fa8fAF74E97e`,blockCreated:17482143}},l1StandardBridge:{[dh]:{address:`0x3154Cf16ccdb4C6d922629664174b904d80F2C35`,blockCreated:17482143}}},sourceId:dh});({...fh});var ph=f({id:1,name:`Ethereum`,nativeCurrency:{name:`Ether`,symbol:`ETH`,decimals:18},blockTime:12e3,rpcUrls:{default:{http:[`https://eth.merkle.io`]}},blockExplorers:{default:{name:`Etherscan`,url:`https://etherscan.io`,apiUrl:`https://api.etherscan.io/api`}},contracts:{ensUniversalResolver:{address:`0xeeeeeeee14d718c2b47d9923deab1335e144eeee`,blockCreated:23085558},multicall3:{address:`0xca11bde05977b3631167028862be2a173976ca11`,blockCreated:14353601}}}),mh={WALLET_CONNECT_CONNECTOR_ID:`walletConnect`,INJECTED_CONNECTOR_ID:`injected`,WALLET_STANDARD_CONNECTOR_ID:`announced`,COINBASE_CONNECTOR_ID:`coinbaseWallet`,COINBASE_SDK_CONNECTOR_ID:`coinbaseWalletSDK`,SAFE_CONNECTOR_ID:`safe`,LEDGER_CONNECTOR_ID:`ledger`,EIP6963_CONNECTOR_ID:`eip6963`,AUTH_CONNECTOR_ID:`w3mAuth`,EIP155:`eip155`,ADD_CHAIN_METHOD:`wallet_addEthereumChain`,EIP6963_ANNOUNCE_EVENT:`eip6963:announceProvider`,EIP6963_REQUEST_EVENT:`eip6963:requestProvider`,CONNECTOR_RDNS_MAP:{coinbaseWallet:`com.coinbase.wallet`,coinbaseWalletSDK:`com.coinbase.wallet`},VERSION:`5.1.11`},hh={ConnectorExplorerIds:{[mh.COINBASE_CONNECTOR_ID]:`fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa`,[mh.COINBASE_SDK_CONNECTOR_ID]:`fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa`,[mh.SAFE_CONNECTOR_ID]:`225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f`,[mh.LEDGER_CONNECTOR_ID]:`19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927`},EIP155NetworkImageIds:{1:`ba0ba0cd-17c6-4806-ad93-f9d174f17900`,42161:`3bff954d-5cb0-47a0-9a23-d20192e74600`,43114:`30c46e53-e989-45fb-4549-be3bd4eb3b00`,56:`93564157-2e8e-4ce7-81df-b264dbee9b00`,250:`06b26297-fe0c-4733-5d6b-ffa5498aac00`,10:`ab9c186a-c52f-464b-2906-ca59d760a400`,137:`41d04d42-da3b-4453-8506-668cc0727900`,100:`02b53f6a-e3d4-479e-1cb4-21178987d100`,9001:`f926ff41-260d-4028-635e-91913fc28e00`,324:`b310f07f-4ef7-49f3-7073-2a0a39685800`,314:`5a73b3dd-af74-424e-cae0-0de859ee9400`,4689:`34e68754-e536-40da-c153-6ef2e7188a00`,1088:`3897a66d-40b9-4833-162f-a2c90531c900`,1284:`161038da-44ae-4ec7-1208-0ea569454b00`,1285:`f1d73bb6-5450-4e18-38f7-fb6484264a00`,7777777:`845c60df-d429-4991-e687-91ae45791600`,42220:`ab781bbc-ccc6-418d-d32d-789b15da1f00`,8453:`7289c336-3981-4081-c5f4-efc26ac64a00`,1313161554:`3ff73439-a619-4894-9262-4470c773a100`,2020:`b8101fc0-9c19-4b6f-ec65-f6dfff106e00`,2021:`b8101fc0-9c19-4b6f-ec65-f6dfff106e00`,"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":`a1b58899-f671-4276-6a5e-56ca5bd59700`,"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":`a1b58899-f671-4276-6a5e-56ca5bd59700`,EtWTRABZaYq6iMfeYKouRu166VU2xqa1:`a1b58899-f671-4276-6a5e-56ca5bd59700`},ConnectorImageIds:{[mh.COINBASE_CONNECTOR_ID]:`0c2840c3-5b04-4c44-9661-fbd4b49e1800`,[mh.COINBASE_SDK_CONNECTOR_ID]:`0c2840c3-5b04-4c44-9661-fbd4b49e1800`,[mh.SAFE_CONNECTOR_ID]:`461db637-8616-43ce-035a-d89b8a1d5800`,[mh.LEDGER_CONNECTOR_ID]:`54a1aa77-d202-4f8d-0fb2-5d2bb6db0300`,[mh.WALLET_CONNECT_CONNECTOR_ID]:`ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400`,[mh.INJECTED_CONNECTOR_ID]:`07ba87ed-43aa-4adf-4540-9e6a2b9cae00`},ConnectorNamesMap:{[mh.INJECTED_CONNECTOR_ID]:`Browser Wallet`,[mh.WALLET_CONNECT_CONNECTOR_ID]:`WalletConnect`,[mh.COINBASE_CONNECTOR_ID]:`Coinbase`,[mh.COINBASE_SDK_CONNECTOR_ID]:`Coinbase`,[mh.LEDGER_CONNECTOR_ID]:`Ledger`,[mh.SAFE_CONNECTOR_ID]:`Safe`},ConnectorTypesMap:{[mh.INJECTED_CONNECTOR_ID]:`INJECTED`,[mh.WALLET_CONNECT_CONNECTOR_ID]:`WALLET_CONNECT`,[mh.EIP6963_CONNECTOR_ID]:`ANNOUNCED`,[mh.AUTH_CONNECTOR_ID]:`AUTH`},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},gh={getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,n])=>{t[`${mh.EIP155}:${e}`]=n}),t}},_h;(function(e){e.Google=`google`,e.Github=`github`,e.Apple=`apple`,e.Facebook=`facebook`,e.X=`x`,e.Discord=`discord`,e.Farcaster=`farcaster`})(_h||(_h={}));var vh=!1,yh=class{constructor(e){var t;this.initPromise=void 0,this.setIsConnected=(e,t)=>{N.setIsConnected(e,t)},this.getIsConnectedState=()=>N.state.isConnected,this.setAllAccounts=(e,t)=>{N.setAllAccounts(e,t),M.setHasMultipleAddresses((e==null?void 0:e.length)>1)},this.addAddressLabel=(e,t,n)=>{N.addAddressLabel(e,t,n)},this.removeAddressLabel=(e,t)=>{N.removeAddressLabel(e,t)},this.getCaipAddress=()=>N.state.caipAddress,this.setCaipAddress=(e,t)=>{N.setCaipAddress(e,t)},this.setBalance=(e,t,n)=>{N.setBalance(e,t,n)},this.setProfileName=(e,t)=>{N.setProfileName(e,t)},this.setProfileImage=(e,t)=>{N.setProfileImage(e,t)},this.resetAccount=e=>{N.resetAccount(e)},this.setCaipNetwork=e=>{j.setCaipNetwork(e)},this.getCaipNetwork=()=>j.state.caipNetwork,this.setRequestedCaipNetworks=(e,t)=>{j.setRequestedCaipNetworks(e,t)},this.getApprovedCaipNetworkIds=()=>j.getApprovedCaipNetworkIds(),this.setApprovedCaipNetworksData=e=>j.setApprovedCaipNetworksData(e),this.resetNetwork=()=>{j.resetNetwork()},this.setConnectors=e=>{P.setConnectors(e)},this.addConnector=e=>{P.addConnector(e)},this.getConnectors=()=>P.getConnectors(),this.resetWcConnection=()=>{k.resetWcConnection()},this.fetchIdentity=e=>me.fetchIdentity(e),this.setAddressExplorerUrl=(e,t)=>{N.setAddressExplorerUrl(e,t)},this.setSmartAccountDeployed=(e,t)=>{N.setSmartAccountDeployed(e,t)},this.setConnectedWalletInfo=(e,t)=>{N.setConnectedWalletInfo(e,t)},this.setSmartAccountEnabledNetworks=(e,t)=>{j.setSmartAccountEnabledNetworks(e,t)},this.setPreferredAccountType=(e,t)=>{N.setPreferredAccountType(e,t)},this.getWalletConnectName=e=>ge.getNamesForAddress(e),this.resolveWalletConnectName=async e=>{var t;let n=e.replace(Se.WC_NAME_SUFFIX,``),r=await ge.resolveName(n);return((t=(Object.values(r==null?void 0:r.addresses)||[])[0])==null?void 0:t.address)||!1},this.setEIP6963Enabled=e=>{M.setEIP6963Enabled(e)},this.setClientId=e=>{me.setClientId(e)},this.getConnectorImage=e=>z.getConnectorImage(e),this.handleUnsafeRPCRequest=()=>{if(this.isOpen()){if(this.isTransactionStackEmpty())return;this.isTransactionShouldReplaceView()?this.replace(`ApproveTransaction`):this.redirect(`ApproveTransaction`)}else this.open({view:`ApproveTransaction`})},this.adapter=(t=e.adapters)==null?void 0:t[0],this.initControllers(e),this.initOrContinue()}static getInstance(){return this.instance}async open(e){await this.initOrContinue(),A.open(e)}async close(){await this.initOrContinue(),A.close()}setLoading(e){A.setLoading(e)}getError(){var e,t;return(e=this.adapter)==null||(t=e.getError)==null?void 0:t.call(e)}getChainId(){var e,t;return(e=this.adapter)==null||(t=e.getChainId)==null?void 0:t.call(e)}getAddress(){var e,t;return(e=this.adapter)==null||(t=e.getAddress)==null?void 0:t.call(e)}switchNetwork(e){var t,n;return(t=this.adapter)==null||(n=t.switchNetwork)==null?void 0:n.call(t,e)}getIsConnected(){var e,t;return(e=this.adapter)==null||(t=e.getIsConnected)==null?void 0:t.call(e)}getWalletProvider(){var e,t;return(e=this.adapter)==null||(t=e.getWalletProvider)==null?void 0:t.call(e)}getWalletProviderType(){var e,t;return(e=this.adapter)==null||(t=e.getWalletProviderType)==null?void 0:t.call(e)}subscribeProvider(e){var t,n;return(t=this.adapter)==null||(n=t.subscribeProvider)==null?void 0:n.call(t,e)}getThemeMode(){return O.state.themeMode}getThemeVariables(){return O.state.themeVariables}setThemeMode(e){O.setThemeMode(e),fe(O.state.themeMode)}setThemeVariables(e){O.setThemeVariables(e),de(O.state.themeVariables)}subscribeTheme(e){return O.subscribe(e)}getWalletInfo(){return N.state.connectedWalletInfo}subscribeWalletInfo(e){return N.subscribeKey(`connectedWalletInfo`,e)}subscribeShouldUpdateToAddress(e){N.subscribeKey(`shouldUpdateToAddress`,e)}subscribeCaipNetworkChange(e){j.subscribeKey(`caipNetwork`,e)}getState(){return xe.state}subscribeState(e){return xe.subscribe(e)}showErrorMessage(e){I.showError(e)}showSuccessMessage(e){I.showSuccess(e)}getEvent(){return{...R.state}}subscribeEvents(e){return R.subscribe(e)}replace(e){H.replace(e)}redirect(e){H.push(e)}popTransactionStack(e){H.popTransactionStack(e)}isOpen(){return A.state.open}isTransactionStackEmpty(){return H.state.transactionStack.length===0}isTransactionShouldReplaceView(){var e;return(e=H.state.transactionStack[H.state.transactionStack.length-1])==null?void 0:e.replace}async initControllers(e){var t,n;if(M.setProjectId(e.projectId),M.setSdkVersion(e.sdkVersion),L.initialize(e.adapters||[]),(t=e.adapters)==null||t.forEach(t=>{var n;(n=t.construct)==null||n.call(t,this,e),j.setAllowUnsupportedChain(e.allowUnsupportedChain,t.chain),j.setDefaultCaipNetwork(e.defaultChain)}),M.setAllWallets(e.allWallets),M.setIncludeWalletIds(e.includeWalletIds),M.setExcludeWalletIds(e.excludeWalletIds),M.setFeaturedWalletIds(e.featuredWalletIds),M.setTokens(e.tokens),M.setTermsConditionsUrl(e.termsConditionsUrl),M.setPrivacyPolicyUrl(e.privacyPolicyUrl),M.setCustomWallets(e.customWallets),M.setEnableAnalytics(e.enableAnalytics),M.setOnrampEnabled(e.enableOnramp),M.setEnableSwaps(e.enableSwaps),e.metadata&&M.setMetadata(e.metadata),e.themeMode&&O.setThemeMode(e.themeMode),e.themeVariables&&O.setThemeVariables(e.themeVariables),e.disableAppend&&M.setDisableAppend(!!e.disableAppend),(n=e.adapters)!=null&&n.find(e=>e.chain===Se.CHAIN.EVM)&&e.siweConfig){let{SIWEController:t}=await g(async()=>{let{SIWEController:e}=await import(`./exports-CZOqf00r.js`);return{SIWEController:e}},__vite__mapDeps([0,1,2,3,4,5,6,7]));t.setSIWEClient(e.siweConfig)}}async initOrContinue(){return!this.initPromise&&!vh&&B.isClient()&&(vh=!0,this.initPromise=new Promise(async e=>{await Promise.all([g(()=>import(`./esm-M_mMwyI5.js`),__vite__mapDeps([8,6,1,2,3,7])),g(()=>import(`./w3m-modal-Bb2dbTJc.js`),__vite__mapDeps([9,10,2,3,6,1,7,11]))]);let t=document.createElement(`w3m-modal`);M.state.disableAppend||document.body.insertAdjacentElement(`beforeend`,t),e()})),this.initPromise}},bh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},xh=class extends W{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=`show`,this.charsStart=4,this.charsEnd=6,this.address=N.state.address,this.balanceVal=N.state.balance,this.balanceSymbol=N.state.balanceSymbol,this.profileName=N.state.profileName,this.profileImage=N.state.profileImage,this.network=j.state.caipNetwork,this.networkImage=this.network?z.getNetworkImage(this.network):void 0,this.isUnsupportedChain=j.state.isUnsupportedChain,this.unsubscribe.push(we.subscribeNetworkImages(()=>{var e;this.networkImage=(e=this.network)!=null&&e.imageId?z.getNetworkImage(this.network):void 0}),N.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address=``,this.balanceVal=``,this.profileName=``,this.profileImage=``,this.balanceSymbol=``)}),j.subscribeKey(`caipNetwork`,e=>{this.network=e,this.networkImage=e!=null&&e.imageId?z.getNetworkImage(e):void 0}),j.subscribeKey(`isUnsupportedChain`,e=>{this.isUnsupportedChain=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.balance===`show`;return U`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${J(this.address)}
        profileName=${J(this.profileName)}
        networkSrc=${J(this.networkImage)}
        avatarSrc=${J(this.profileImage)}
        balance=${e?B.formatBalance(this.balanceVal,this.balanceSymbol):``}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?A.open({view:`UnsupportedChain`}):A.open()}};bh([q({type:Boolean})],xh.prototype,`disabled`,void 0),bh([q()],xh.prototype,`balance`,void 0),bh([q()],xh.prototype,`charsStart`,void 0),bh([q()],xh.prototype,`charsEnd`,void 0),bh([K()],xh.prototype,`address`,void 0),bh([K()],xh.prototype,`balanceVal`,void 0),bh([K()],xh.prototype,`balanceSymbol`,void 0),bh([K()],xh.prototype,`profileName`,void 0),bh([K()],xh.prototype,`profileImage`,void 0),bh([K()],xh.prototype,`network`,void 0),bh([K()],xh.prototype,`networkImage`,void 0),bh([K()],xh.prototype,`isUnsupportedChain`,void 0),xh=bh([V(`w3m-account-button`)],xh);var Sh=G`
  :host {
    display: block;
    width: max-content;
  }
`,Ch=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},wh=class extends W{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=N.state.isConnected,this.isLoading=A.state.loading}firstUpdated(){this.unsubscribe.push(N.subscribe(e=>{this.isAccount=e.isConnected}),A.subscribeKey(`loading`,e=>{this.isLoading=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount&&!this.isLoading?U`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${J(this.balance)}
            .charsStart=${J(this.charsStart)}
            .charsEnd=${J(this.charsEnd)}
          >
          </w3m-account-button>
        `:U`
          <w3m-connect-button
            size=${J(this.size)}
            label=${J(this.label)}
            loadingLabel=${J(this.loadingLabel)}
          ></w3m-connect-button>
        `}};wh.styles=Sh,Ch([q({type:Boolean})],wh.prototype,`disabled`,void 0),Ch([q()],wh.prototype,`balance`,void 0),Ch([q()],wh.prototype,`size`,void 0),Ch([q()],wh.prototype,`label`,void 0),Ch([q()],wh.prototype,`loadingLabel`,void 0),Ch([q()],wh.prototype,`charsStart`,void 0),Ch([q()],wh.prototype,`charsEnd`,void 0),Ch([K()],wh.prototype,`isAccount`,void 0),Ch([K()],wh.prototype,`isLoading`,void 0),wh=Ch([V(`w3m-button`)],wh);var Th=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Eh=class extends W{constructor(){super(),this.unsubscribe=[],this.size=`md`,this.label=`Connect Wallet`,this.loadingLabel=`Connecting...`,this.open=A.state.open,this.loading=A.state.loading,this.unsubscribe.push(A.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.loading||this.open;return U`
      <wui-connect-button
        size=${J(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?A.close():this.loading||A.open()}};Th([q()],Eh.prototype,`size`,void 0),Th([q()],Eh.prototype,`label`,void 0),Th([q()],Eh.prototype,`loadingLabel`,void 0),Th([K()],Eh.prototype,`open`,void 0),Th([K()],Eh.prototype,`loading`,void 0),Eh=Th([V(`w3m-connect-button`)],Eh);var Dh=G`
  :host {
    display: block;
    width: max-content;
  }
`,Oh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},kh=class extends W{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.network=j.state.caipNetwork,this.networkImage=this.network?z.getNetworkImage(this.network):void 0,this.connected=N.state.isConnected,this.loading=A.state.loading,this.isUnsupportedChain=j.state.isUnsupportedChain}firstUpdated(){this.unsubscribe.push(we.subscribeNetworkImages(()=>{var e;this.networkImage=(e=this.network)!=null&&e.imageId?z.getNetworkImage(this.network):void 0}),j.subscribeKey(`caipNetwork`,e=>{this.network=e,this.networkImage=e!=null&&e.imageId?z.getNetworkImage(e):void 0}),N.subscribeKey(`isConnected`,e=>this.connected=e),A.subscribeKey(`loading`,e=>this.loading=e),j.subscribeKey(`isUnsupportedChain`,e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return U`
      <wui-network-button
        data-testid="wui-network-button"
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${J(this.networkImage)}
        @click=${this.onClick.bind(this)}
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.label?this.label:this.isUnsupportedChain?`Switch Network`:this.network?this.network.name:this.connected?`Unknown Network`:`Select Network`}onClick(){this.loading||(R.sendEvent({type:`track`,event:`CLICK_NETWORKS`}),A.open({view:`Networks`}))}};kh.styles=Dh,Oh([q({type:Boolean})],kh.prototype,`disabled`,void 0),Oh([q({type:String})],kh.prototype,`label`,void 0),Oh([K()],kh.prototype,`network`,void 0),Oh([K()],kh.prototype,`networkImage`,void 0),Oh([K()],kh.prototype,`connected`,void 0),Oh([K()],kh.prototype,`loading`,void 0),Oh([K()],kh.prototype,`isUnsupportedChain`,void 0),kh=Oh([V(`w3m-network-button`)],kh);var Ah=G`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,jh={ACCOUNT_TABS:[{label:`Tokens`},{label:`NFTs`},{label:`Activity`}],SECURE_SITE_ORIGIN:{}.NEXT_PUBLIC_SECURE_SITE_ORIGIN||`https://secure.walletconnect.org`,VIEW_DIRECTION:{Next:`next`,Prev:`prev`},ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}},Mh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Nh=class extends W{constructor(){super(),this.resizeObserver=void 0,this.prevHeight=`0px`,this.prevHistoryLength=1,this.unsubscribe=[],this.view=H.state.view,this.viewDirection=``,this.unsubscribe.push(H.subscribeKey(`view`,e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(([e])=>{let t=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!==`0px`&&(this.style.setProperty(`--prev-height`,this.prevHeight),this.style.setProperty(`--new-height`,t),this.style.animation=`w3m-view-height 150ms forwards ease`,this.style.height=`auto`),setTimeout(()=>{this.prevHeight=t,this.style.animation=`unset`},jh.ANIMATION_DURATIONS.ModalHeight)}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return U`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case`AccountSettings`:return U`<w3m-account-settings-view></w3m-account-settings-view>`;case`Account`:return U`<w3m-account-view></w3m-account-view>`;case`AllWallets`:return U`<w3m-all-wallets-view></w3m-all-wallets-view>`;case`ApproveTransaction`:return U`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case`BuyInProgress`:return U`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case`ChooseAccountName`:return U`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case`Connect`:return U`<w3m-connect-view></w3m-connect-view>`;case`ConnectingWalletConnect`:return U`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case`ConnectingExternal`:return U`<w3m-connecting-external-view></w3m-connecting-external-view>`;case`ConnectingSiwe`:return U`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case`ConnectWallets`:return U`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case`ConnectSocials`:return U`<w3m-connect-socials-view></w3m-connect-socials-view>`;case`ConnectingSocial`:return U`<w3m-connecting-social-view></w3m-connecting-social-view>`;case`Downloads`:return U`<w3m-downloads-view></w3m-downloads-view>`;case`EmailVerifyOtp`:return U`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case`EmailVerifyDevice`:return U`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case`GetWallet`:return U`<w3m-get-wallet-view></w3m-get-wallet-view>`;case`Networks`:return U`<w3m-networks-view></w3m-networks-view>`;case`SwitchNetwork`:return U`<w3m-network-switch-view></w3m-network-switch-view>`;case`Profile`:return U`<w3m-profile-view></w3m-profile-view>`;case`SelectAddresses`:return U`<w3m-select-addresses-view></w3m-select-addresses-view>`;case`SwitchAddress`:return U`<w3m-switch-address-view></w3m-switch-address-view>`;case`Transactions`:return U`<w3m-transactions-view></w3m-transactions-view>`;case`OnRampProviders`:return U`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case`OnRampActivity`:return U`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case`OnRampTokenSelect`:return U`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case`OnRampFiatSelect`:return U`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case`UpgradeEmailWallet`:return U`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case`UpgradeToSmartAccount`:return U`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case`UpdateEmailWallet`:return U`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case`UpdateEmailPrimaryOtp`:return U`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case`UpdateEmailSecondaryOtp`:return U`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case`UnsupportedChain`:return U`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case`Swap`:return U`<w3m-swap-view></w3m-swap-view>`;case`SwapSelectToken`:return U`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case`SwapPreview`:return U`<w3m-swap-preview-view></w3m-swap-preview-view>`;case`WalletSend`:return U`<w3m-wallet-send-view></w3m-wallet-send-view>`;case`WalletSendSelectToken`:return U`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case`WalletSendPreview`:return U`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case`WhatIsABuy`:return U`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case`WalletReceive`:return U`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case`WalletCompatibleNetworks`:return U`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case`WhatIsAWallet`:return U`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case`ConnectingMultiChain`:return U`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case`WhatIsANetwork`:return U`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case`ConnectingFarcaster`:return U`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case`SwitchActiveChain`:return U`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case`RegisterAccountName`:return U`<w3m-register-account-name-view></w3m-register-account-name-view>`;case`RegisterAccountNameSuccess`:return U`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;default:return U`<w3m-connect-view></w3m-connect-view>`}}onViewChange(e){_e.hide();let t=jh.VIEW_DIRECTION.Next,{history:n}=H.state;n.length<this.prevHistoryLength&&(t=jh.VIEW_DIRECTION.Prev),this.prevHistoryLength=n.length,this.viewDirection=t,setTimeout(()=>{this.view=e},jh.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`div`)}};Nh.styles=Ah,Mh([K()],Nh.prototype,`view`,void 0),Mh([K()],Nh.prototype,`viewDirection`,void 0),Nh=Mh([V(`w3m-router`)],Nh);var Ph=G`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`,Fh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ih={USD:`$`,EUR:`€`,GBP:`£`},Lh=[100,250,500,1e3],Rh=class extends W{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=N.state.isConnected,this.loading=A.state.loading,this.paymentCurrency=pe.state.paymentCurrency,this.paymentAmount=pe.state.paymentAmount,this.purchaseAmount=pe.state.purchaseAmount,this.quoteLoading=pe.state.quotesLoading,this.unsubscribe.push(N.subscribeKey(`isConnected`,e=>{this.connected=e}),A.subscribeKey(`loading`,e=>{this.loading=e}),pe.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return U`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${Lh.map(e=>{var t;return U`<wui-button
                  variant=${this.paymentAmount===e?`accent`:`neutral`}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${Ih[((t=this.paymentCurrency)==null?void 0:t.id)||`USD`]} ${e}`}</wui-button
                >`})}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?U`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:U`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||A.open({view:`OnRampProviders`})}openModal(){A.open({view:`Connect`})}async onPaymentAmountChange(e){pe.setPaymentAmount(Number(e.detail)),await pe.getQuote()}async selectPresetAmount(e){pe.setPaymentAmount(e),await pe.getQuote()}};Rh.styles=Ph,Fh([q({type:Boolean})],Rh.prototype,`disabled`,void 0),Fh([K()],Rh.prototype,`connected`,void 0),Fh([K()],Rh.prototype,`loading`,void 0),Fh([K()],Rh.prototype,`paymentCurrency`,void 0),Fh([K()],Rh.prototype,`paymentAmount`,void 0),Fh([K()],Rh.prototype,`purchaseAmount`,void 0),Fh([K()],Rh.prototype,`quoteLoading`,void 0),Rh=Fh([V(`w3m-onramp-widget`)],Rh);var zh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Bh=class extends W{constructor(){super(),this.usubscribe=[],this.networkImages=we.state.networkImages,this.address=N.state.address,this.profileImage=N.state.profileImage,this.profileName=N.state.profileName,this.network=j.state.caipNetwork,this.preferredAccountType=N.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text=``,this.usubscribe.push(N.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):A.close()}),N.subscribeKey(`preferredAccountType`,e=>this.preferredAccountType=e),j.subscribeKey(`caipNetwork`,e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var e,t,n;if(!this.address)throw Error(`w3m-account-settings-view: No account provided`);let r=this.networkImages[((e=this.network)==null?void 0:e.imageId)??``],i=(t=this.profileName)==null?void 0:t.split(`.`)[0];return U`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${[`0`,`xl`,`m`,`xl`]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${J(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${i?De.getTruncateString({string:i,charsStart:20,charsEnd:0,truncate:`end`}):De.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:`middle`})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${[`0`,`l`,`m`,`l`]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${r?`image`:`icon`}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${J(r)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((n=this.network)==null?void 0:n.name)??`Unknown`}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){let e=Pe.getConnectedConnector(),t=P.getAuthConnector();return!j.checkIfNamesSupported()||!t||e!==`AUTH`||this.profileName?null:U`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){let e=Pe.getConnectedConnector(),t=P.getAuthConnector(),{origin:n}=location;return!t||e!==`AUTH`||n.includes(je.SECURE_SITE)?null:U`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){let e=j.getRequestedCaipNetworks(),t=e?e.length>1:!1,n=e==null?void 0:e.find(({id:e})=>{var t;return e===((t=this.network)==null?void 0:t.id)});return t||!n}onCopyAddress(){try{this.profileName?(B.copyToClopboard(this.profileName),I.showSuccess(`Name copied`)):this.address&&(B.copyToClopboard(this.address),I.showSuccess(`Address copied`))}catch{I.showError(`Failed to copy`)}}togglePreferredAccountBtnTemplate(){let e=j.checkIfSmartAccountEnabled(),t=Pe.getConnectedConnector();return!P.getAuthConnector()||t!==`AUTH`||!e?null:(this.switched||(this.text=this.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT?`Switch to your EOA`:`Switch to your smart account`),U`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `)}onChooseName(){H.push(`ChooseAccountName`)}async changePreferredAccountType(){let e=j.checkIfSmartAccountEnabled(),t=this.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT||!e?ye.ACCOUNT_TYPES.EOA:ye.ACCOUNT_TYPES.SMART_ACCOUNT;P.getAuthConnector()&&(this.loading=!0,await k.setPreferredAccountType(t),this.text=t===ye.ACCOUNT_TYPES.SMART_ACCOUNT?`Switch to your EOA`:`Switch to your smart account`,this.switched=!0,ve.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&H.push(`Networks`)}async onDisconnect(){try{this.disconnecting=!0,await k.disconnect(),R.sendEvent({type:`track`,event:`DISCONNECT_SUCCESS`}),A.close()}catch{R.sendEvent({type:`track`,event:`DISCONNECT_ERROR`}),I.showError(`Failed to disconnect`)}finally{this.disconnecting=!1}}onGoToUpgradeView(){R.sendEvent({type:`track`,event:`EMAIL_UPGRADE_FROM_MODAL`}),H.push(`UpgradeEmailWallet`)}};zh([K()],Bh.prototype,`address`,void 0),zh([K()],Bh.prototype,`profileImage`,void 0),zh([K()],Bh.prototype,`profileName`,void 0),zh([K()],Bh.prototype,`network`,void 0),zh([K()],Bh.prototype,`preferredAccountType`,void 0),zh([K()],Bh.prototype,`disconnecting`,void 0),zh([K()],Bh.prototype,`loading`,void 0),zh([K()],Bh.prototype,`switched`,void 0),zh([K()],Bh.prototype,`text`,void 0),Bh=zh([V(`w3m-account-settings-view`)],Bh);var Vh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Hh=class extends W{render(){let e=Pe.getConnectedConnector(),t=P.getAuthConnector();return U`
      ${t!=null&&t.walletFeatures&&e===`AUTH`?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return U`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return U`<w3m-account-default-widget></w3m-account-default-widget>`}};Hh=Vh([V(`w3m-account-view`)],Hh);var Uh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Wh=class extends W{constructor(){super(...arguments),this.search=``,this.onDebouncedSearch=B.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return U`
      <wui-flex .padding=${[`0`,`s`,`s`,`s`]} gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?U`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:U`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return B.isMobile()?U`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){H.push(`ConnectingWalletConnect`)}};Uh([K()],Wh.prototype,`search`,void 0),Wh=Uh([V(`w3m-all-wallets-view`)],Wh);var Gh=G`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`,Kh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},qh=class extends W{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=pe.state.selectedProvider,this.uri=k.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(pe.subscribeKey(`selectedProvider`,e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var e;let t=`Continue in external window`;if(this.error)t=`Buy failed`;else if(this.selectedOnRampProvider){var n;t=`Buy in ${(n=this.selectedOnRampProvider)==null?void 0:n.label}`}let r=this.error?`Buy can be declined from your side or due to and error on the provider app`:`We’ll notify you once your Buy is processed`;return U`
      <wui-flex
        data-error=${J(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${[`3xl`,`xl`,`xl`,`xl`]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${J((e=this.selectedOnRampProvider)==null?void 0:e.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?`error-100`:`fg-100`}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${r}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${[`0`,`xl`,`xl`,`xl`]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case`coinbase`:this.startTime=Date.now(),this.initializeCoinbaseTransactions();break;default:break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{let e=N.state.address,t=M.state.projectId;if(!e)throw Error(`No address found`);(await me.fetchTransactions({account:e,onramp:`coinbase`,projectId:t})).data.filter(e=>new Date(e.metadata.minedAt)>new Date(this.startTime)||e.metadata.status===`ONRAMP_TRANSACTION_STATUS_IN_PROGRESS`).length?(clearInterval(this.intervalId),H.replace(`OnRampActivity`)):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){I.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,B.openHref(this.selectedOnRampProvider.url,`popupWindow`,`width=600,height=800,scrollbars=yes`))}tryAgainTemplate(){var e;return(e=this.selectedOnRampProvider)!=null&&e.url?U`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let e=O.state.themeVariables[`--w3m-border-radius-master`];return U`<wui-loading-thumbnail radius=${(e?parseInt(e.replace(`px`,``),10):4)*9}></wui-loading-thumbnail>`}onCopyUri(){var e;if(!((e=this.selectedOnRampProvider)!=null&&e.url)){I.showError(`No link found`),H.goBack();return}try{B.copyToClopboard(this.selectedOnRampProvider.url),I.showSuccess(`Link copied`)}catch{I.showError(`Failed to copy`)}}};qh.styles=Gh,Kh([K()],qh.prototype,`intervalId`,void 0),Kh([K()],qh.prototype,`selectedOnRampProvider`,void 0),Kh([K()],qh.prototype,`uri`,void 0),Kh([K()],qh.prototype,`ready`,void 0),Kh([K()],qh.prototype,`showRetry`,void 0),Kh([K()],qh.prototype,`buffering`,void 0),Kh([K()],qh.prototype,`error`,void 0),Kh([K()],qh.prototype,`startTime`,void 0),Kh([q({type:Boolean})],qh.prototype,`isMobile`,void 0),Kh([q()],qh.prototype,`onRetry`,void 0),qh=Kh([V(`w3m-buy-in-progress-view`)],qh);var Jh=G`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }
`,Yh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xh=class extends W{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey(`connectors`,e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return U`
      <wui-flex flexDirection="column" .padding=${[`3xs`,`s`,`s`,`s`]}>
        <w3m-email-login-widget></w3m-email-login-widget>
        <w3m-social-login-widget></w3m-social-login-widget>
        ${this.walletListTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletListTemplate(){let e=this.connectors.find(e=>e.type===`AUTH`);return e!=null&&e.socials?e!=null&&e.showWallets?U`
          <wui-flex flexDirection="column" gap="xs" .margin=${[`xs`,`0`,`0`,`0`]}>
            <w3m-connector-list></w3m-connector-list>
            <wui-flex class="all-wallets">
              <w3m-all-wallets-widget></w3m-all-wallets-widget>
            </wui-flex>
          </wui-flex>
        `:U`<wui-list-button
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:U`<w3m-wallet-login-list></w3m-wallet-login-list>`}onContinueWalletClick(){H.push(`ConnectWallets`)}};Xh.styles=Jh,Yh([K()],Xh.prototype,`connectors`,void 0),Xh=Yh([V(`w3m-connect-view`)],Xh);var Zh=G`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,Qh=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$h=class extends W{constructor(){var e,t,n,r;super(),this.wallet=(e=H.state.data)==null?void 0:e.wallet,this.connector=(t=H.state.data)==null?void 0:t.connector,this.timeout=void 0,this.secondaryBtnLabel=`Try again`,this.secondaryBtnIcon=`refresh`,this.secondaryLabel=`Accept connection request in the wallet`,this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=z.getWalletImage(this.wallet)??z.getConnectorImage(this.connector),this.name=((n=this.wallet)==null?void 0:n.name)??((r=this.connector)==null?void 0:r.name)??`Wallet`,this.isRetrying=!1,this.uri=k.state.wcUri,this.error=k.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(k.subscribeKey(`wcUri`,e=>{if(this.uri=e,this.isRetrying&&this.onRetry){var t;this.isRetrying=!1,(t=this.onConnect)==null||t.call(this)}}),k.subscribeKey(`wcError`,e=>this.error=e),k.subscribeKey(`buffering`,e=>this.buffering=e))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var e;(e=this.onRender)==null||e.call(this),this.onShowRetry();let t=this.error?`Connection can be declined if a previous request is still active`:this.secondaryLabel,n=`Continue in ${this.name}`;return this.buffering&&(n=`Connecting...`),this.error&&(n=`Connection declined`),U`
      <wui-flex
        data-error=${J(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${[`3xl`,`xl`,`xl`,`xl`]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${J(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?`error-100`:`fg-100`}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          size="md"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?U`
            <wui-flex .padding=${[`0`,`xl`,`xl`,`xl`]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){var e;this.showRetry=!0;let t=(e=this.shadowRoot)==null?void 0:e.querySelector(`wui-button`);t==null||t.animate([{opacity:0},{opacity:1}],{fill:`forwards`,easing:`ease`})}}onTryAgain(){if(!this.buffering)if(k.setWcError(!1),this.onRetry){var e;this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)}else{var t;(t=this.onConnect)==null||t.call(this)}}loaderTemplate(){let e=O.state.themeVariables[`--w3m-border-radius-master`];return U`<wui-loading-thumbnail radius=${(e?parseInt(e.replace(`px`,``),10):4)*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(B.copyToClopboard(this.uri),I.showSuccess(`Link copied`))}catch{I.showError(`Failed to copy`)}}};$h.styles=Zh,Qh([K()],$h.prototype,`uri`,void 0),Qh([K()],$h.prototype,`error`,void 0),Qh([K()],$h.prototype,`ready`,void 0),Qh([K()],$h.prototype,`showRetry`,void 0),Qh([K()],$h.prototype,`buffering`,void 0),Qh([q({type:Boolean})],$h.prototype,`isMobile`,void 0),Qh([q()],$h.prototype,`onRetry`,void 0);var eg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},tg=class extends $h{constructor(){if(super(),!this.connector)throw Error(`w3m-connecting-view: No connector provided`);R.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.connector.name??`Unknown`,platform:`browser`}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id!==mh.COINBASE_SDK_CONNECTOR_ID||!this.error)&&(await k.connectExternal(this.connector,this.connector.chain),M.state.isSiweEnabled?H.push(`ConnectingSiwe`):A.close(),R.sendEvent({type:`track`,event:`CONNECT_SUCCESS`,properties:{method:`browser`,name:this.connector.name||`Unknown`}}))}catch(e){R.sendEvent({type:`track`,event:`CONNECT_ERROR`,properties:{message:(e==null?void 0:e.message)??`Unknown`}}),this.error=!0}}};tg=eg([V(`w3m-connecting-external-view`)],tg);var ng=G`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`,rg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ig=class extends W{constructor(){super(),this.unsubscribe=[],this.activeConnector=L.state.activeConnector,this.unsubscribe.push(L.subscribeKey(`activeConnector`,e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return U`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`m`,`xl`,`xl`,`xl`]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${J(z.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${[`0`,`s`,`0`,`s`]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${(e=this.activeConnector)==null?void 0:e.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${[`xs`,`0`,`xs`,`0`]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){var e;return(e=this.activeConnector)==null||(e=e.providers)==null?void 0:e.map(e=>U`
        <wui-list-wallet
          imageSrc=${J(z.getChainImage(e.chain))}
          name=${e.name}
          @click=${()=>this.onConnector(e)}
        ></wui-list-wallet>
      `)}onConnector(e){var t;L.setActiveChain(e.chain);let n=(t=this.activeConnector)==null||(t=t.providers)==null?void 0:t.find(t=>t.chain===e.chain);if(!n){I.showError(`Failed to find connector`);return}n.type===`WALLET_CONNECT`?B.isMobile()?H.push(`AllWallets`):H.push(`ConnectingWalletConnect`):H.push(`ConnectingExternal`,{connector:n})}};ig.styles=ng,rg([K()],ig.prototype,`activeConnector`,void 0),ig=rg([V(`w3m-connecting-multi-chain-view`)],ig);var ag=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},og=class extends W{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=H.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.determinePlatforms(),this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),je.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?U`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `:U`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{if(this.platform===`browser`)return;let{wcPairingExpiry:t}=k.state;if(e||B.isPairingExpired(t))if(await k.connectWalletConnect(),this.finalizeConnection(),Pe.getConnectedConnector()===`AUTH`&&M.state.hasMultipleAddresses)H.push(`SelectAddresses`);else if(M.state.isSiweEnabled){let{SIWEController:e}=await g(async()=>{let{SIWEController:e}=await import(`./exports-CZOqf00r.js`);return{SIWEController:e}},__vite__mapDeps([0,1,2,3,4,5,6,7]));e.state.status===`success`?A.close():H.push(`ConnectingSiwe`)}else A.close()}catch(e){R.sendEvent({type:`track`,event:`CONNECT_ERROR`,properties:{message:(e==null?void 0:e.message)??`Unknown`}}),k.setWcError(!0),B.isAllowedRetry(this.lastRetry)&&(I.showError(`Declined`),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){var e;let{wcLinking:t,recentWallet:n}=k.state;t&&Pe.setWalletConnectDeepLink(t),n&&Pe.setWeb3ModalRecent(n),R.sendEvent({type:`track`,event:`CONNECT_SUCCESS`,properties:{method:t?`mobile`:`qrcode`,name:((e=this.wallet)==null?void 0:e.name)||`Unknown`}})}determinePlatforms(){if(!this.wallet){this.platforms.push(`qrcode`),this.platform=`qrcode`;return}if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:n,injected:r,rdns:i,name:a}=this.wallet,o=r==null?void 0:r.map(({injected_id:e})=>e).filter(Boolean),s=[...i?[i]:o??[],a],c=M.state.isUniversalProvider?!1:s.length,l=e,u=n,d=k.checkInstalled(s),f=c&&d,p=t&&!B.isMobile();f&&this.platforms.push(`browser`),l&&this.platforms.push(B.isMobile()?`mobile`:`qrcode`),u&&this.platforms.push(`web`),p&&this.platforms.push(`desktop`),!f&&c&&this.platforms.push(`unsupported`),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case`browser`:return U`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case`desktop`:return U`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case`web`:return U`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case`mobile`:return U`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case`qrcode`:return U`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return U`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?U`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var t;let n=(t=this.shadowRoot)==null?void 0:t.querySelector(`div`);n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`}))}};ag([K()],og.prototype,`platform`,void 0),ag([K()],og.prototype,`platforms`,void 0),og=ag([V(`w3m-connecting-wc-view`)],og);var sg=G`
  .continue-button-container {
    width: 100%;
  }
`,cg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},lg=class extends W{constructor(){super(...arguments),this.loading=!1}render(){return U`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${[`0`,`0`,`l`,`0`]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{B.openHref(ke.URLS.FAQ,`_blank`)}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return U` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${[`0`,`xxl`,`0`,`xxl`]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return U`<wui-flex
      .padding=${[`0`,`2l`,`0`,`2l`]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){H.push(`RegisterAccountName`),R.sendEvent({type:`track`,event:`OPEN_ENS_FLOW`,properties:{isSmartAccount:N.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT}})}};lg.styles=sg,cg([K()],lg.prototype,`loading`,void 0),lg=cg([V(`w3m-choose-account-name-view`)],lg);var ug=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},dg=class extends W{constructor(){var e;super(...arguments),this.wallet=(e=H.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw Error(`w3m-downloads-view`);return U`
      <wui-flex gap="xs" flexDirection="column" .padding=${[`s`,`s`,`l`,`s`]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?U`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?U`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?U`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?U`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&B.openHref(this.wallet.chrome_store,`_blank`)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&B.openHref(this.wallet.app_store,`_blank`)}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&B.openHref(this.wallet.play_store,`_blank`)}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&B.openHref(this.wallet.homepage,`_blank`)}};dg=ug([V(`w3m-downloads-view`)],dg);var fg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},pg=`https://walletconnect.com/explorer`,mg=class extends W{render(){return U`
      <wui-flex flexDirection="column" .padding=${[`0`,`s`,`s`,`s`]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{B.openHref(`https://walletconnect.com/explorer?type=wallet`,`_blank`)}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=Ae.state,{customWallets:n}=M.state;return[...t,...n??[],...e].slice(0,4).map(e=>U`
        <wui-list-wallet
          name=${e.name??`Unknown`}
          tagVariant="main"
          imageSrc=${J(z.getWalletImage(e))}
          @click=${()=>{B.openHref(e.homepage??pg,`_blank`)}}
        ></wui-list-wallet>
      `)}};mg=fg([V(`w3m-get-wallet-view`)],mg);var hg=G`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`,gg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_g=class extends W{constructor(){super(),this.formRef=Ie(),this.usubscribe=[],this.name=``,this.error=``,this.loading=ge.state.loading,this.suggestions=ge.state.suggestions,this.registered=!1,this.profileName=N.state.profileName,this.onDebouncedNameInputChange=B.debounce(e=>{ge.validateName(e)?(this.error=``,this.name=e,ge.getSuggestions(e),ge.isNameRegistered(e).then(e=>{this.registered=e})):e.length<4?this.error=`Name must be at least 4 characters long`:this.error=`Can only contain letters, numbers and - characters`}),this.usubscribe.push(ge.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),N.subscribeKey(`profileName`,e=>{this.profileName=e,e&&(this.error=`You already own a name`)}))}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener(`keydown`,this.onEnterKey.bind(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.usubscribe.forEach(e=>e()),(e=this.formRef.value)==null||e.removeEventListener(`keydown`,this.onEnterKey.bind(this))}render(){return U`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${[`0`,`s`,`m`,`s`]}
      >
        <form ${Le(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){return this.isAllowedToSubmit()?U`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(e){return()=>{this.name=e,this.registered=!1,this.requestUpdate()}}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(){return this.loading?U`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?U`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:U`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;let e=this.registered?this.suggestions.filter(e=>e.name!==this.name):[];return U`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${[`m`,`m`,`m`,`m`]}
        justifyContent="space-between"
        class="suggestion"
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map(e=>this.availableNameTemplate(e.name))}
    </wui-flex>`}availableNameTemplate(e){return U` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${[`m`,`m`,`m`,`m`]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&ge.validateName(this.name)}async onSubmitName(){try{if(!this.isAllowedToSubmit())return;R.sendEvent({type:`track`,event:`REGISTER_NAME_INITIATED`,properties:{isSmartAccount:N.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name}}),await ge.registerName(this.name),R.sendEvent({type:`track`,event:`REGISTER_NAME_SUCCESS`,properties:{isSmartAccount:N.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name}})}catch(e){I.showError(e.message),R.sendEvent({type:`track`,event:`REGISTER_NAME_ERROR`,properties:{isSmartAccount:N.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name,error:(e==null?void 0:e.message)||`Unknown error`}})}}onEnterKey(e){e.key===`Enter`&&this.isAllowedToSubmit()&&this.onSubmitName()}};_g.styles=hg,gg([q()],_g.prototype,`errorMessage`,void 0),gg([K()],_g.prototype,`name`,void 0),gg([K()],_g.prototype,`error`,void 0),gg([K()],_g.prototype,`loading`,void 0),gg([K()],_g.prototype,`suggestions`,void 0),gg([K()],_g.prototype,`registered`,void 0),gg([K()],_g.prototype,`profileName`,void 0),_g=gg([V(`w3m-register-account-name-view`)],_g);var vg=G`
  .continue-button-container {
    width: 100%;
  }
`,yg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},bg=class extends W{render(){return U`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${[`0`,`0`,`l`,`0`]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{B.openHref(ke.URLS.FAQ,`_blank`)}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return U` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${[`0`,`xxl`,`0`,`xxl`]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return U`<wui-flex
      .padding=${[`0`,`2l`,`0`,`2l`]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){H.replace(`Account`)}};bg.styles=vg,bg=yg([V(`w3m-register-account-name-success-view`)],bg);var xg=G`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,Sg={onNetworkChange:async()=>{if(M.state.isSiweEnabled){var e;let{SIWEController:t}=await g(async()=>{let{SIWEController:e}=await import(`./exports-CZOqf00r.js`);return{SIWEController:e}},__vite__mapDeps([0,1,2,3,4,5,6,7]));!((e=t.state._client)==null||(e=e.options)==null)&&e.signOutOnNetworkChange?await t.signOut():ue.navigateAfterNetworkSwitch()}else ue.navigateAfterNetworkSwitch()}},Cg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},wg=class extends W{constructor(){var e;super(),this.network=(e=H.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error(`w3m-network-switch-view: No network provided`);this.onShowRetry();let e=this.getLabel(),t=this.getSubLabel();return U`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${[`3xl`,`xl`,`3xl`,`xl`]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${J(z.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:U`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){let e=Pe.getConnectedConnector();return P.getAuthConnector()&&e===`AUTH`?``:this.error?`Switch can be declined if chain is not supported by a wallet or previous request is still active`:`Accept connection request in your wallet`}getLabel(){let e=Pe.getConnectedConnector();if(P.getAuthConnector()&&e===`AUTH`){var t;return`Switching to ${((t=this.network)==null?void 0:t.name)??`Unknown`} network...`}return this.error?`Switch declined`:`Approve in wallet`}onShowRetry(){if(this.error&&!this.showRetry){var e;this.showRetry=!0;let t=(e=this.shadowRoot)==null?void 0:e.querySelector(`wui-button`);t==null||t.animate([{opacity:0},{opacity:1}],{fill:`forwards`,easing:`ease`})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await j.switchActiveNetwork(this.network),await Sg.onNetworkChange())}catch{this.error=!0}}};wg.styles=xg,Cg([K()],wg.prototype,`showRetry`,void 0),Cg([K()],wg.prototype,`error`,void 0),wg=Cg([V(`w3m-network-switch-view`)],wg);var Tg=G`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`,Eg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Dg=class extends W{constructor(){super(),this.unsubscribe=[],this.network=j.state.caipNetwork,this.requestedCaipNetworks=j.getRequestedCaipNetworks(),this.search=``,this.onDebouncedSearch=B.debounce(e=>{this.search=e},100),this.unsubscribe.push(j.subscribeKey(`caipNetwork`,e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return U`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${[`0`,`s`,`s`,`s`]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return U`
      <wui-flex gap="xs" .padding=${[`0`,`s`,`s`,`s`]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){R.sendEvent({type:`track`,event:`CLICK_NETWORK_HELP`}),H.push(`WhatIsANetwork`)}networksTemplate(){var e;let t=j.getRequestedCaipNetworks(),n=j.state.approvedCaipNetworkIds,r=j.state.supportsAllNetworks,i=B.sortRequestedNetworks(n,t);return this.search?this.filteredNetworks=i==null?void 0:i.filter(e=>{var t;return e==null||(t=e.name)==null?void 0:t.toLowerCase().includes(this.search.toLowerCase())}):this.filteredNetworks=i,(e=this.filteredNetworks)==null?void 0:e.map(e=>{var t;return U`
        <wui-list-network
          .selected=${((t=this.network)==null?void 0:t.id)===e.id}
          imageSrc=${J(z.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${!r&&!(n!=null&&n.includes(e.id))&&e.chain===L.state.activeChain}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `})}async onSwitchNetwork(e){let t=N.state.isConnected,n=N.getChainIsConnected(e.chain),r=j.state.approvedCaipNetworkIds,i=j.state.supportsAllNetworks,a=j.state.caipNetwork,o=H.state.data;if(t&&(a==null?void 0:a.id)!==e.id){if(!n){H.push(`SwitchActiveChain`,{switchToChain:e.chain,navigateTo:`Connect`,navigateWithReplace:!0});return}r!=null&&r.includes(e.id)?(await j.switchActiveNetwork(e),await Sg.onNetworkChange()):i&&H.push(`SwitchNetwork`,{...o,network:e})}else t||(j.setActiveCaipNetwork(e),n||H.push(`Connect`))}};Dg.styles=Tg,Eg([K()],Dg.prototype,`network`,void 0),Eg([K()],Dg.prototype,`requestedCaipNetworks`,void 0),Eg([K()],Dg.prototype,`filteredNetworks`,void 0),Eg([K()],Dg.prototype,`search`,void 0),Dg=Eg([V(`w3m-networks-view`)],Dg);var Og=G`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`,kg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ag=7,jg=class extends W{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=pe.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=be.state.coinbaseTransactions,this.tokenImages=we.state.tokenImages,this.unsubscribe.push(pe.subscribeKey(`selectedProvider`,e=>{this.selectedOnRampProvider=e}),we.subscribeKey(`tokenImages`,e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},be.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),be.clearCursor(),this.fetchTransactions()}render(){return U`
      <wui-flex flexDirection="column" .padding=${[`0`,`s`,`s`,`s`]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e==null?void 0:e.map(e=>{var t,n,r;let i=Fe.formatDate(e==null||(t=e.metadata)==null?void 0:t.minedAt),a=e.transfers[0],o=a==null?void 0:a.fungible_info;if(!o)return null;let s=(o==null||(n=o.icon)==null?void 0:n.url)||((r=this.tokenImages)==null?void 0:r[o.symbol||``]);return U`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${e.metadata.status===`ONRAMP_TRANSACTION_STATUS_SUCCESS`}
          .inProgress=${e.metadata.status===`ONRAMP_TRANSACTION_STATUS_IN_PROGRESS`}
          .failed=${e.metadata.status===`ONRAMP_TRANSACTION_STATUS_FAILED`}
          purchaseCurrency=${J(o.symbol)}
          purchaseValue=${a.quantity.numeric}
          date=${i}
          icon=${J(s)}
          symbol=${J(o.symbol)}
        ></w3m-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(e=>{let t=parseInt(e,10);return Array(12).fill(null).map((e,t)=>t).reverse().map(e=>{var n;let r=Ne.getTransactionGroupTitle(t,e),i=(n=this.coinbaseTransactions[t])==null?void 0:n[e];return i?U`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${[`xs`,`s`,`s`,`s`]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${r}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(i)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){let e=N.state.address,t=M.state.projectId;if(!e)throw Error(`No address found`);if(!t)throw Error(`No projectId found`);this.loading=!0,await be.fetchTransactions(e,`coinbase`),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){var e;let t=new Date;if((((e=this.coinbaseTransactions[t.getFullYear()])==null?void 0:e[t.getMonth()])||[]).filter(e=>e.metadata.status===`ONRAMP_TRANSACTION_STATUS_IN_PROGRESS`).length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{let e=N.state.address;await be.fetchTransactions(e,`coinbase`),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(Ag).fill(U` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};jg.styles=Og,kg([K()],jg.prototype,`selectedOnRampProvider`,void 0),kg([K()],jg.prototype,`loading`,void 0),kg([K()],jg.prototype,`coinbaseTransactions`,void 0),kg([K()],jg.prototype,`tokenImages`,void 0),jg=kg([V(`w3m-onramp-activity-view`)],jg);var Mg=G`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,Ng=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Pg=class extends W{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=pe.state.paymentCurrency,this.currencies=pe.state.paymentCurrencies,this.currencyImages=we.state.currencyImages,this.unsubscribe.push(pe.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),we.subscribeKey(`currencyImages`,e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return U`
      <wui-flex flexDirection="column" .padding=${[`0`,`s`,`s`,`s`]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>{var t;return U`
        <wui-list-item
          imageSrc=${J((t=this.currencyImages)==null?void 0:t[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `})}selectCurrency(e){e&&(pe.setPaymentCurrency(e),A.close())}};Pg.styles=Mg,Ng([K()],Pg.prototype,`selectedCurrency`,void 0),Ng([K()],Pg.prototype,`currencies`,void 0),Ng([K()],Pg.prototype,`currencyImages`,void 0),Pg=Ng([V(`w3m-onramp-fiat-select-view`)],Pg);var Fg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ig=class extends W{constructor(){super(),this.unsubscribe=[],this.providers=pe.state.providers,this.unsubscribe.push(pe.subscribeKey(`providers`,e=>{this.providers=e}))}firstUpdated(){let e=this.providers.map(async e=>e.name===`coinbase`?await this.getCoinbaseOnRampURL():Promise.resolve(e==null?void 0:e.url));Promise.all(e).then(e=>{this.providers=this.providers.map((t,n)=>({...t,url:e[n]||``}))})}render(){return U`
      <wui-flex flexDirection="column" .padding=${[`0`,`s`,`s`,`s`]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter(e=>e.supportedChains.includes(L.state.activeChain??`evm`)).map(e=>U`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(e){pe.setSelectedProvider(e),H.push(`BuyInProgress`),B.openHref(e.url,`popupWindow`,`width=600,height=800,scrollbars=yes`),R.sendEvent({type:`track`,event:`SELECT_BUY_PROVIDER`,properties:{provider:e.name,isSmartAccount:N.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){let e=N.state.address,t=j.state.caipNetwork;if(!e)throw Error(`No address found`);if(!(t!=null&&t.name))throw Error(`No network found`);let n=je.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??je.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,r=pe.state.purchaseCurrency,i=r?[r.symbol]:pe.state.purchaseCurrencies.map(e=>e.symbol);return await me.generateOnRampURL({defaultNetwork:n,destinationWallets:[{address:e,blockchains:je.WC_COINBASE_PAY_SDK_CHAINS,assets:i}],partnerUserId:e,purchaseAmount:pe.state.purchaseAmount})}};Fg([K()],Ig.prototype,`providers`,void 0),Ig=Fg([V(`w3m-onramp-providers-view`)],Ig);var Lg=G`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,Rg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},zg=class extends W{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=pe.state.purchaseCurrencies,this.tokens=pe.state.purchaseCurrencies,this.tokenImages=we.state.tokenImages,this.unsubscribe.push(pe.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),we.subscribeKey(`tokenImages`,e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return U`
      <wui-flex flexDirection="column" .padding=${[`0`,`s`,`s`,`s`]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>{var t;return U`
        <wui-list-item
          imageSrc=${J((t=this.tokenImages)==null?void 0:t[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `})}selectToken(e){e&&(pe.setPurchaseCurrency(e),A.close())}};zg.styles=Lg,Rg([K()],zg.prototype,`selectedCurrency`,void 0),Rg([K()],zg.prototype,`tokens`,void 0),Rg([K()],zg.prototype,`tokenImages`,void 0),zg=Rg([V(`w3m-onramp-token-select-view`)],zg);var Bg=G`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,Vg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Hg=class extends W{constructor(){var e;super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=(e=j.state.caipNetwork)==null?void 0:e.id,this.initialized=F.state.initialized,this.loadingQuote=F.state.loadingQuote,this.loadingPrices=F.state.loadingPrices,this.loadingTransaction=F.state.loadingTransaction,this.sourceToken=F.state.sourceToken,this.sourceTokenAmount=F.state.sourceTokenAmount,this.sourceTokenPriceInUSD=F.state.sourceTokenPriceInUSD,this.toToken=F.state.toToken,this.toTokenAmount=F.state.toTokenAmount,this.toTokenPriceInUSD=F.state.toTokenPriceInUSD,this.inputError=F.state.inputError,this.gasPriceInUSD=F.state.gasPriceInUSD,this.fetchError=F.state.fetchError,this.onDebouncedGetSwapCalldata=B.debounce(async()=>{await F.swapTokens()},200),j.subscribeKey(`caipNetwork`,e=>{this.caipNetworkId!==(e==null?void 0:e.id)&&(this.caipNetworkId=e==null?void 0:e.id,F.resetState(),F.initializeState())}),this.unsubscribe.push(A.subscribeKey(`open`,e=>{e||F.resetState()}),H.subscribeKey(`view`,e=>{e.includes(`Swap`)||F.resetValues()}),F.subscribe(e=>{this.initialized=e.initialized,this.loadingQuote=e.loadingQuote,this.loadingPrices=e.loadingPrices,this.loadingTransaction=e.loadingTransaction,this.sourceToken=e.sourceToken,this.sourceTokenAmount=e.sourceTokenAmount,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError,this.gasPriceInUSD=e.gasPriceInUSD,this.fetchError=e.fetchError}))}firstUpdated(){F.initializeState(),this.watchTokensAndValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e==null?void 0:e()),clearInterval(this.interval)}render(){return U`
      <wui-flex flexDirection="column" .padding=${[`0`,`l`,`l`,`l`]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{F.getNetworkTokenPrice(),F.getMyTokensWithBalance(),F.swapTokens()},1e4)}templateSwap(){return U`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput(`sourceToken`,this.sourceToken)}
          ${this.templateTokenInput(`toToken`,this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?`Swap`:!this.sourceToken||!this.toToken?`Select token`:this.sourceTokenAmount?this.inputError?this.inputError:`Review swap`:`Enter amount`}templateReplaceTokensButton(){return U`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return U`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(e,t){var n,r;let i=(n=F.state.myTokensWithBalance)==null?void 0:n.find(e=>(e==null?void 0:e.address)===(t==null?void 0:t.address)),a=e===`toToken`?this.toTokenAmount:this.sourceTokenAmount,o=e===`toToken`?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,s=parseFloat(a)*o;return e===`toToken`&&(s-=this.gasPriceInUSD||0),U`<w3m-swap-input
      .value=${e===`toToken`?this.toTokenAmount:this.sourceTokenAmount}
      ?disabled=${this.loadingQuote&&e===`toToken`}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${t}
      .balance=${i==null||(r=i.quantity)==null?void 0:r.numeric}
      .price=${i==null?void 0:i.price}
      .marketValue=${s}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(e,t){let n=e===`sourceToken`?this.sourceToken:this.toToken,r=(n==null?void 0:n.address)===j.getActiveNetworkTokenAddress(),i=`0`;if(!t){i=`0`,this.handleChangeAmount(e,i);return}if(!this.gasPriceInUSD){i=t,this.handleChangeAmount(e,i);return}let a=Ce.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),o=r?Ce.bigNumber(t).minus(a):Ce.bigNumber(t);this.handleChangeAmount(e,o.isGreaterThan(0)?o.toFixed(20):`0`)}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:U`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}handleChangeAmount(e,t){F.clearError(),e===`sourceToken`?F.setSourceTokenAmount(t):F.setToTokenAmount(t),this.onDebouncedGetSwapCalldata()}templateActionButton(){let e=!this.toToken||!this.sourceToken,t=!this.sourceTokenAmount,n=this.loadingQuote||this.loadingPrices||this.loadingTransaction,r=n||e||t||this.inputError;return U` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${e?`neutral`:`main`}
        .loading=${n}
        .disabled=${r}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){F.switchTokens()}onSwapPreview(){var e,t;if(this.fetchError){F.swapTokens();return}R.sendEvent({type:`track`,event:`INITIATE_SWAP`,properties:{network:this.caipNetworkId||``,swapFromToken:((e=this.sourceToken)==null?void 0:e.symbol)||``,swapToToken:((t=this.toToken)==null?void 0:t.symbol)||``,swapFromAmount:this.sourceTokenAmount||``,swapToAmount:this.toTokenAmount||``,isSmartAccount:N.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT}}),H.push(`SwapPreview`)}};Hg.styles=Bg,Vg([K()],Hg.prototype,`interval`,void 0),Vg([K()],Hg.prototype,`detailsOpen`,void 0),Vg([K()],Hg.prototype,`caipNetworkId`,void 0),Vg([K()],Hg.prototype,`initialized`,void 0),Vg([K()],Hg.prototype,`loadingQuote`,void 0),Vg([K()],Hg.prototype,`loadingPrices`,void 0),Vg([K()],Hg.prototype,`loadingTransaction`,void 0),Vg([K()],Hg.prototype,`sourceToken`,void 0),Vg([K()],Hg.prototype,`sourceTokenAmount`,void 0),Vg([K()],Hg.prototype,`sourceTokenPriceInUSD`,void 0),Vg([K()],Hg.prototype,`toToken`,void 0),Vg([K()],Hg.prototype,`toTokenAmount`,void 0),Vg([K()],Hg.prototype,`toTokenPriceInUSD`,void 0),Vg([K()],Hg.prototype,`inputError`,void 0),Vg([K()],Hg.prototype,`gasPriceInUSD`,void 0),Vg([K()],Hg.prototype,`fetchError`,void 0),Hg=Vg([V(`w3m-swap-view`)],Hg);var Ug=G`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`,Wg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Gg=class extends W{constructor(){var e,t,n;super(...arguments),this.unsubscribe=[],this.switchToChain=(e=H.state.data)==null?void 0:e.switchToChain,this.navigateTo=(t=H.state.data)==null?void 0:t.navigateTo,this.navigateWithReplace=(n=H.state.data)==null?void 0:n.navigateWithReplace,this.activeChain=L.state.activeChain}firstUpdated(){this.unsubscribe.push(L.subscribeKey(`activeChain`,e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return U`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`3xl`,`xl`,`xl`,`xl`]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name="eth"></wui-visual>
          <wui-text variant="paragraph-500" color="fg-100" align="center">Switch to EVM</wui-text>
          <wui-text variant="small-400" color="fg-200" align="center">
            This feature is not supported on the ${this.activeChain?Se.CHAIN_NAME_MAP[this.activeChain]:`current`} chain. Switch to
            ${this.switchToChain?Se.CHAIN_NAME_MAP[this.switchToChain]:`supported`} chain to proceed using it.
          </wui-text>
          <wui-button size="md" @click=${this.switchActiveChain.bind(this)}>Switch</wui-button>
        </wui-flex>
      </wui-flex>
    `}switchActiveChain(){this.switchToChain&&(L.setActiveChain(this.switchToChain),this.navigateTo?this.navigateWithReplace?H.replace(this.navigateTo):H.push(this.navigateTo):H.goBack())}};Gg.styles=Ug,Wg([q()],Gg.prototype,`activeChain`,void 0),Gg=Wg([V(`w3m-switch-active-chain-view`)],Gg);var Kg=G`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,qg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Jg=class extends W{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=F.state.approvalTransaction,this.swapTransaction=F.state.swapTransaction,this.sourceToken=F.state.sourceToken,this.sourceTokenAmount=F.state.sourceTokenAmount??``,this.sourceTokenPriceInUSD=F.state.sourceTokenPriceInUSD,this.toToken=F.state.toToken,this.toTokenAmount=F.state.toTokenAmount??``,this.toTokenPriceInUSD=F.state.toTokenPriceInUSD,this.caipNetwork=j.state.caipNetwork,this.balanceSymbol=N.state.balanceSymbol,this.gasPriceInUSD=F.state.gasPriceInUSD,this.inputError=F.state.inputError,this.loadingQuote=F.state.loadingQuote,this.loadingApprovalTransaction=F.state.loadingApprovalTransaction,this.loadingBuildTransaction=F.state.loadingBuildTransaction,this.loadingTransaction=F.state.loadingTransaction,this.unsubscribe.push(N.subscribeKey(`balanceSymbol`,e=>{this.balanceSymbol!==e&&H.goBack()}),j.subscribeKey(`caipNetwork`,e=>{this.caipNetwork!==e&&(this.caipNetwork=e)}),F.subscribe(e=>{this.approvalTransaction=e.approvalTransaction,this.swapTransaction=e.swapTransaction,this.sourceToken=e.sourceToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toToken=e.toToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??``,this.toTokenAmount=e.toTokenAmount??``,this.inputError=e.inputError,e.inputError&&H.goBack(),this.loadingQuote=e.loadingQuote,this.loadingApprovalTransaction=e.loadingApprovalTransaction,this.loadingBuildTransaction=e.loadingBuildTransaction,this.loadingTransaction=e.loadingTransaction}))}firstUpdated(){F.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(e=>e==null?void 0:e()),clearInterval(this.interval)}render(){return U`
      <wui-flex flexDirection="column" .padding=${[`0`,`l`,`l`,`l`]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{F.getApprovalLoadingState()||F.getTransaction()},1e4)}templateSwap(){var e,t,n,r;let i=`${De.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${(e=this.sourceToken)==null?void 0:e.symbol}`,a=`${De.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${(t=this.toToken)==null?void 0:t.symbol}`,o=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,s=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),c=De.formatNumberToLocalString(o),l=De.formatNumberToLocalString(s),u=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return U`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${c}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${i}
              imageSrc=${(n=this.sourceToken)==null?void 0:n.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${l}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${a}
              imageSrc=${(r=this.toToken)==null?void 0:r.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${u}
            ?disabled=${u}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:U`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}actionButtonLabel(){return this.loadingApprovalTransaction?`Approving...`:this.approvalTransaction?`Approve`:`Swap`}onCancelTransaction(){H.goBack()}onSendTransaction(){this.approvalTransaction?F.sendTransactionForApproval(this.approvalTransaction):F.sendTransactionForSwap(this.swapTransaction)}};Jg.styles=Kg,qg([K()],Jg.prototype,`interval`,void 0),qg([K()],Jg.prototype,`detailsOpen`,void 0),qg([K()],Jg.prototype,`approvalTransaction`,void 0),qg([K()],Jg.prototype,`swapTransaction`,void 0),qg([K()],Jg.prototype,`sourceToken`,void 0),qg([K()],Jg.prototype,`sourceTokenAmount`,void 0),qg([K()],Jg.prototype,`sourceTokenPriceInUSD`,void 0),qg([K()],Jg.prototype,`toToken`,void 0),qg([K()],Jg.prototype,`toTokenAmount`,void 0),qg([K()],Jg.prototype,`toTokenPriceInUSD`,void 0),qg([K()],Jg.prototype,`caipNetwork`,void 0),qg([K()],Jg.prototype,`balanceSymbol`,void 0),qg([K()],Jg.prototype,`gasPriceInUSD`,void 0),qg([K()],Jg.prototype,`inputError`,void 0),qg([K()],Jg.prototype,`loadingQuote`,void 0),qg([K()],Jg.prototype,`loadingApprovalTransaction`,void 0),qg([K()],Jg.prototype,`loadingBuildTransaction`,void 0),qg([K()],Jg.prototype,`loadingTransaction`,void 0),Jg=qg([V(`w3m-swap-preview-view`)],Jg);var Yg=G`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`,Xg=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Zg=class extends W{constructor(){var e;super(),this.unsubscribe=[],this.targetToken=(e=H.state.data)==null?void 0:e.target,this.sourceToken=F.state.sourceToken,this.sourceTokenAmount=F.state.sourceTokenAmount,this.toToken=F.state.toToken,this.myTokensWithBalance=F.state.myTokensWithBalance,this.popularTokens=F.state.popularTokens,this.searchValue=``,this.unsubscribe.push(F.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.myTokensWithBalance=e.myTokensWithBalance}))}updated(){var e,t;let n=(e=this.renderRoot)==null?void 0:e.querySelector(`.suggested-tokens-container`);n==null||n.addEventListener(`scroll`,this.handleSuggestedTokensScroll.bind(this));let r=(t=this.renderRoot)==null?void 0:t.querySelector(`.tokens`);r==null||r.addEventListener(`scroll`,this.handleTokenListScroll.bind(this))}disconnectedCallback(){var e,t;super.disconnectedCallback();let n=(e=this.renderRoot)==null?void 0:e.querySelector(`.suggested-tokens-container`),r=(t=this.renderRoot)==null?void 0:t.querySelector(`.tokens`);n==null||n.removeEventListener(`scroll`,this.handleSuggestedTokensScroll.bind(this)),r==null||r.removeEventListener(`scroll`,this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return U`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(e){this.targetToken===`sourceToken`?F.setSourceToken(e):(F.setToToken(e),this.sourceToken&&this.sourceTokenAmount&&F.swapTokens()),H.goBack()}templateSearchInput(){return U`
      <wui-flex .padding=${[`3xs`,`s`,`0`,`s`]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){let e=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],t=this.popularTokens?this.popularTokens:[],n=this.filterTokensWithText(e,this.searchValue),r=this.filterTokensWithText(t,this.searchValue);return U`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${[`0`,`s`,`s`,`s`]} flexDirection="column">
          ${(n==null?void 0:n.length)>0?U`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${n.map(e=>{var t,n,r;let i=e.symbol===((t=this.sourceToken)==null?void 0:t.symbol)||e.symbol===((n=this.toToken)==null?void 0:n.symbol);return U`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${e.symbol}"
                      name=${e.name}
                      ?disabled=${i}
                      symbol=${e.symbol}
                      price=${e==null?void 0:e.price}
                      amount=${e==null||(r=e.quantity)==null?void 0:r.numeric}
                      imageSrc=${e.logoUri}
                      @click=${()=>{i||this.onSelectToken(e)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${(r==null?void 0:r.length)>0?r.map(e=>U`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${e.symbol}"
                    name=${e.name}
                    symbol=${e.symbol}
                    imageSrc=${e.logoUri}
                    @click=${()=>this.onSelectToken(e)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){let e=F.state.suggestedTokens?F.state.suggestedTokens.slice(0,8):null;return e?U`
      <wui-flex class="suggested-tokens-container" .padding=${[`0`,`s`,`0`,`s`]} gap="xs">
        ${e.map(e=>U`
            <wui-token-button
              text=${e.symbol}
              imageSrc=${e.logoUri}
              @click=${()=>this.onSelectToken(e)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){var e;let t=(e=this.renderRoot)==null?void 0:e.querySelector(`.suggested-tokens-container`);t&&(t.style.setProperty(`--suggested-tokens-scroll--left-opacity`,Oe.interpolate([0,100],[0,1],t.scrollLeft).toString()),t.style.setProperty(`--suggested-tokens-scroll--right-opacity`,Oe.interpolate([0,100],[0,1],t.scrollWidth-t.scrollLeft-t.offsetWidth).toString()))}handleTokenListScroll(){var e;let t=(e=this.renderRoot)==null?void 0:e.querySelector(`.tokens`);t&&(t.style.setProperty(`--tokens-scroll--top-opacity`,Oe.interpolate([0,100],[0,1],t.scrollTop).toString()),t.style.setProperty(`--tokens-scroll--bottom-opacity`,Oe.interpolate([0,100],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString()))}filterTokensWithText(e,t){return e.filter(e=>`${e.symbol} ${e.name} ${e.address}`.toLowerCase().includes(t.toLowerCase()))}};Zg.styles=Yg,Xg([K()],Zg.prototype,`interval`,void 0),Xg([K()],Zg.prototype,`targetToken`,void 0),Xg([K()],Zg.prototype,`sourceToken`,void 0),Xg([K()],Zg.prototype,`sourceTokenAmount`,void 0),Xg([K()],Zg.prototype,`toToken`,void 0),Xg([K()],Zg.prototype,`myTokensWithBalance`,void 0),Xg([K()],Zg.prototype,`popularTokens`,void 0),Xg([K()],Zg.prototype,`searchValue`,void 0),Zg=Xg([V(`w3m-swap-select-token-view`)],Zg);var Qg=G`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`,$g=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},e_=class extends W{render(){return U`
      <wui-flex flexDirection="column" .padding=${[`0`,`m`,`m`,`m`]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};e_.styles=Qg,e_=$g([V(`w3m-transactions-view`)],e_);var t_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},n_=[{images:[`network`,`layers`,`system`],title:`The system’s nuts and bolts`,text:`A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services.`},{images:[`noun`,`defiAlt`,`dao`],title:`Designed for different uses`,text:`Each network is designed differently, and may therefore suit certain apps and experiences.`}],r_=class extends W{render(){return U`
      <wui-flex
        flexDirection="column"
        .padding=${[`xxl`,`xl`,`xl`,`xl`]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${n_}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{B.openHref(`https://ethereum.org/en/developers/docs/networks/`,`_blank`)}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};r_=t_([V(`w3m-what-is-a-network-view`)],r_);var i_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},a_=[{images:[`login`,`profile`,`lock`],title:`One login for all of web3`,text:`Log in to any app by connecting your wallet. Say goodbye to countless passwords!`},{images:[`defi`,`nft`,`eth`],title:`A home for your digital assets`,text:`A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.`},{images:[`browser`,`noun`,`dao`],title:`Your gateway to a new web`,text:`With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.`}],o_=class extends W{render(){return U`
      <wui-flex
        flexDirection="column"
        .padding=${[`xxl`,`xl`,`xl`,`xl`]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${a_}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){R.sendEvent({type:`track`,event:`CLICK_GET_WALLET`}),H.push(`GetWallet`)}};o_=i_([V(`w3m-what-is-a-wallet-view`)],o_);var s_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},c_=class extends W{render(){return U`
      <wui-flex
        flexDirection="column"
        .padding=${[`xxl`,`3xl`,`xl`,`3xl`]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${H.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};c_=s_([V(`w3m-what-is-a-buy-view`)],c_);var l_=G`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`,u_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},d_=6,f_=class extends W{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=he.getTimeToNextEmailLogin(),this.error=``,this.otp=``,this.email=(e=H.state.data)==null?void 0:e.email,this.authConnector=P.getAuthConnector()}render(){if(!this.email)throw Error(`w3m-email-otp-widget: No email provided`);let e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return U`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`l`,`0`,`l`,`0`]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${[`0`,`xl`,`0`,`xl`]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?U`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:U` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?U`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=he.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=he.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{if(!this.loading&&(this.otp=e.detail,this.authConnector&&this.otp.length===d_)){var t;this.loading=!0,await((t=this.onOtpSubmit)==null?void 0:t.call(this,this.otp))}}catch(e){this.error=B.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error=``,this.otp=``,!P.getAuthConnector()||!this.email)throw Error(`w3m-email-otp-widget: Unable to resend email`);this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),I.showSuccess(`Code email resent`)}}else this.onStartOver&&this.onStartOver()}catch(e){I.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:`Something wrong?`,action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:``}`}:{title:`Didn't receive it?`,action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:`Code`}`}}};f_.styles=l_,u_([K()],f_.prototype,`loading`,void 0),u_([K()],f_.prototype,`timeoutTimeLeft`,void 0),u_([K()],f_.prototype,`error`,void 0),f_=u_([V(`w3m-email-otp-widget`)],f_);var p_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},m_=class extends f_{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=N.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.authConnector){let t=j.checkIfSmartAccountEnabled();await this.authConnector.provider.connectOtp({otp:e}),R.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_PASS`}),await k.connectExternal(this.authConnector,this.authConnector.chain),R.sendEvent({type:`track`,event:`CONNECT_SUCCESS`,properties:{method:`email`,name:this.authConnector.name||`Unknown`}}),N.state.allAccounts.length>1?H.push(`SelectAddresses`):t&&!this.smartAccountDeployed?H.push(`UpgradeToSmartAccount`):A.close()}}catch(e){throw R.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_FAIL`}),e}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),R.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_SENT`}))},this.unsubscribe.push(N.subscribeKey(`smartAccountDeployed`,e=>{this.smartAccountDeployed=e}))}};p_([K()],m_.prototype,`smartAccountDeployed`,void 0),m_=p_([V(`w3m-email-verify-otp-view`)],m_);var h_=G`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`,g_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},__=class extends W{constructor(){var e;super(),this.email=(e=H.state.data)==null?void 0:e.email,this.authConnector=P.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error(`w3m-email-verify-device-view: No email provided`);if(!this.authConnector)throw Error(`w3m-email-verify-device-view: No auth connector provided`);return U`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`xxl`,`s`,`xxl`,`s`]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),R.sendEvent({type:`track`,event:`DEVICE_REGISTERED_FOR_EMAIL`}),R.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_SENT`}),H.replace(`EmailVerifyOtp`,{email:this.email})}catch{H.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw Error(`w3m-email-login-widget: Unable to resend email`);this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),I.showSuccess(`Code email resent`)}}catch(e){I.showError(e)}finally{this.loading=!1}}};__.styles=h_,g_([K()],__.prototype,`loading`,void 0),__=g_([V(`w3m-email-verify-device-view`)],__);var v_=G`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`,y_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},b_=400,x_=360,S_=64,C_=class extends W{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById(`w3m-iframe`),this.ready=!1,this.unsubscribe.push(A.subscribeKey(`open`,e=>{e||(this.onHideIframe(),H.popTransactionStack())}),A.subscribeKey(`shake`,e=>{e?this.iframe.style.animation=`w3m-shake 500ms var(--wui-ease-out-power-2)`:this.iframe.style.animation=`none`}))}disconnectedCallback(){var e;this.onHideIframe(),this.unsubscribe.forEach(e=>e()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display=`block`,this.bodyObserver=new ResizeObserver(e=>{var t,n;let r=e==null||(t=e[0])==null?void 0:t.contentBoxSize,i=r==null||(n=r[0])==null?void 0:n.inlineSize;this.iframe.style.height=`${b_}px`,i&&i<=430?(this.iframe.style.width=`100%`,this.iframe.style.left=`0px`,this.iframe.style.bottom=`0px`,this.iframe.style.top=`unset`):(this.iframe.style.width=`${x_}px`,this.iframe.style.left=`calc(50% - ${x_/2}px)`,this.iframe.style.top=`calc(50% - ${b_/2}px + ${S_/2}px)`,this.iframe.style.bottom=`unset`),this.ready=!0,this.onShowIframe()}),this.bodyObserver.observe(window.document.body)}render(){return U`<div data-ready=${this.ready}></div>`}onShowIframe(){let e=window.innerWidth<=430;this.iframe.style.animation=e?`w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)`:`w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)`}onHideIframe(){this.iframe.style.display=`none`,this.iframe.style.animation=`w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)`}async syncTheme(){let e=P.getAuthConnector();if(e){let t=O.getSnapshot().themeMode,n=O.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:n,w3mThemeVariables:Te(n,t)})}}};C_.styles=v_,y_([K()],C_.prototype,`ready`,void 0),C_=y_([V(`w3m-approve-transaction-view`)],C_);var w_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},T_=class extends W{render(){return U`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${je.SECURE_SITE_DASHBOARD}
          imageSrc=${je.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};T_=w_([V(`w3m-upgrade-wallet-view`)],T_);var E_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},D_=class extends W{constructor(){super(...arguments),this.authConnector=P.getAuthConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.authConnector)try{this.loading=!0,await k.setPreferredAccountType(ye.ACCOUNT_TYPES.SMART_ACCOUNT),this.loading=!1,ue.navigateAfterPreferredAccountTypeSelect()}catch{I.showError(`Error upgrading to smart account`)}}}render(){return U`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${[`0`,`0`,`l`,`0`]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{B.openHref(ke.URLS.FAQ,`_blank`)}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return U` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${[`0`,`xxl`,`0`,`xxl`]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return U`<wui-flex .padding=${[`0`,`2l`,`0`,`2l`]} gap="s">
      <wui-button
        variant="accent"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){H.push(`Account`)}};E_([K()],D_.prototype,`authConnector`,void 0),E_([K()],D_.prototype,`loading`,void 0),D_=E_([V(`w3m-upgrade-to-smart-account-view`)],D_);var O_=G`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`,k_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},A_=class extends W{constructor(){var e;super(...arguments),this.formRef=Ie(),this.initialEmail=((e=H.state.data)==null?void 0:e.email)??``,this.email=``,this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.onSubmitEmail(e)})}render(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return U`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${Le(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${H.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=P.getAuthConnector();if(!t)throw Error(`w3m-update-email-wallet: Auth connector not found`);let n=await t.provider.updateEmail({email:this.email});R.sendEvent({type:`track`,event:`EMAIL_EDIT`}),n.action===`VERIFY_SECONDARY_OTP`?H.push(`UpdateEmailSecondaryOtp`,{email:this.initialEmail,newEmail:this.email}):H.push(`UpdateEmailPrimaryOtp`,{email:this.initialEmail,newEmail:this.email})}catch(e){I.showError(e),this.loading=!1}}};A_.styles=O_,k_([K()],A_.prototype,`email`,void 0),k_([K()],A_.prototype,`loading`,void 0),A_=k_([V(`w3m-update-email-wallet-view`)],A_);var j_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},M_=class extends f_{constructor(){var e;super(),this.email=(e=H.state.data)==null?void 0:e.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),R.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_PASS`}),H.replace(`UpdateEmailSecondaryOtp`,H.state.data))}catch(e){throw R.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_FAIL`}),e}},this.onStartOver=()=>{H.replace(`UpdateEmailWallet`,H.state.data)}}};M_=j_([V(`w3m-update-email-primary-otp-view`)],M_);var N_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},P_=class extends f_{constructor(){var e;super(),this.email=(e=H.state.data)==null?void 0:e.newEmail,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),R.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_PASS`}),H.reset(`Account`))}catch(e){throw R.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_FAIL`}),e}},this.onStartOver=()=>{H.replace(`UpdateEmailWallet`,H.state.data)}}};P_=N_([V(`w3m-update-email-secondary-otp-view`)],P_);var F_=G`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,I_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},L_=class extends W{constructor(){var e;super(...arguments),this.swapUnsupportedChain=(e=H.state.data)==null?void 0:e.swapUnsupportedChain,this.disconecting=!1}render(){return U`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${[`m`,`xl`,`xs`,`xl`]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?U`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:U`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){let e=j.getRequestedCaipNetworks(),t=j.state.approvedCaipNetworkIds,n=B.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?n.filter(e=>je.SWAP_SUPPORTED_NETWORKS.includes(e.id)):n).map(e=>U`
        <wui-list-network
          imageSrc=${J(z.getNetworkImage(e))}
          name=${e.name??`Unknown`}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await k.disconnect(),R.sendEvent({type:`track`,event:`DISCONNECT_SUCCESS`}),A.close()}catch{R.sendEvent({type:`track`,event:`DISCONNECT_ERROR`}),I.showError(`Failed to disconnect`)}finally{this.disconecting=!1}}async onSwitchNetwork(e){let t=N.state.isConnected,n=j.state.approvedCaipNetworkIds,r=j.state.supportsAllNetworks,i=j.state.caipNetwork,a=H.state.data;t&&(i==null?void 0:i.id)!==e.id?n!=null&&n.includes(e.id)?(await j.switchActiveNetwork(e),await Sg.onNetworkChange()):r&&H.push(`SwitchNetwork`,{...a,network:e}):t||(j.setActiveCaipNetwork(e),H.push(`Connect`))}};L_.styles=F_,I_([K()],L_.prototype,`disconecting`,void 0),L_=I_([V(`w3m-unsupported-chain-view`)],L_);var R_=G`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`,z_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},B_=class extends W{constructor(){super(),this.unsubscribe=[],this.address=N.state.address,this.profileName=N.state.profileName,this.network=j.state.caipNetwork,this.preferredAccountType=N.state.preferredAccountType,this.unsubscribe.push(N.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):I.showError(`Account not found`)}),j.subscribeKey(`caipNetwork`,e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error(`w3m-wallet-receive-view: No account provided`);let e=z.getNetworkImage(this.network);return U` <wui-flex
      flexDirection="column"
      .padding=${[`0`,`l`,`l`,`l`]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${De.getTruncateString({string:this.profileName||this.address||``,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?`end`:`middle`})}
        icon="copy"
        size="sm"
        imageSrc=${e||``}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${[`l`,`0`,`0`,`0`]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${O.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var e;let t=j.getRequestedCaipNetworks(),n=j.checkIfSmartAccountEnabled(),r=j.state.caipNetwork;if(this.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT&&n)return r?U`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[z.getNetworkImage(r)??``]}
      ></wui-compatible-network>`:null;let i=(t==null||(e=t.filter(e=>e==null?void 0:e.imageId))==null?void 0:e.slice(0,5)).map(z.getNetworkImage).filter(Boolean);return U`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${i}
    ></wui-compatible-network>`}onReceiveClick(){H.push(`WalletCompatibleNetworks`)}onCopyClick(){try{this.address&&(B.copyToClopboard(this.address),I.showSuccess(`Address copied`))}catch{I.showError(`Failed to copy`)}}};B_.styles=R_,z_([K()],B_.prototype,`address`,void 0),z_([K()],B_.prototype,`profileName`,void 0),z_([K()],B_.prototype,`network`,void 0),z_([K()],B_.prototype,`preferredAccountType`,void 0),B_=z_([V(`w3m-wallet-receive-view`)],B_);var V_=G`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,H_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},U_=class extends W{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=N.state.preferredAccountType,this.unsubscribe.push(N.subscribeKey(`preferredAccountType`,e=>{this.preferredAccountType=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return U` <wui-flex
      flexDirection="column"
      .padding=${[`xs`,`s`,`m`,`s`]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=j.getRequestedCaipNetworks(),t=j.state.approvedCaipNetworkIds,n=j.state.caipNetwork,r=j.checkIfSmartAccountEnabled(),i=B.sortRequestedNetworks(t,e);if(r&&this.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT){if(!n)return null;i=[n]}return i.map(e=>U`
        <wui-list-network
          imageSrc=${J(z.getNetworkImage(e))}
          name=${e.name??`Unknown`}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};U_.styles=V_,H_([K()],U_.prototype,`preferredAccountType`,void 0),U_=H_([V(`w3m-wallet-compatible-networks-view`)],U_);var W_=G`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`,G_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},K_=class extends W{constructor(){super(),this.unsubscribe=[],this.token=ve.state.token,this.sendTokenAmount=ve.state.sendTokenAmount,this.receiverAddress=ve.state.receiverAddress,this.receiverProfileName=ve.state.receiverProfileName,this.loading=ve.state.loading,this.gasPriceInUSD=ve.state.gasPriceInUSD,this.gasPrice=ve.state.gasPrice,this.message=`Preview Send`,this.fetchNetworkPrice(),this.unsubscribe.push(ve.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),U` <wui-flex flexDirection="column" .padding=${[`0`,`l`,`l`,`l`]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
          .gasPrice=${this.gasPrice}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${[`l`,`0`,`0`,`0`]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith(`Preview Send`)}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchNetworkPrice(){await F.getNetworkTokenPrice();let e=await F.getInitialGasPrice();e!=null&&e.gasPrice&&e!=null&&e.gasPriceInUSD&&(ve.setGasPrice(e.gasPrice),ve.setGasPriceInUsd(e.gasPriceInUSD))}onButtonClick(){H.push(`WalletSendPreview`)}getMessage(){var e;this.message=`Preview Send`,this.receiverAddress&&!B.isAddress(this.receiverAddress,L.state.activeChain)&&(this.message=`Invalid Address`),this.receiverAddress||(this.message=`Add Address`),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message=`Insufficient Funds`),this.sendTokenAmount||(this.message=`Add Amount`),this.sendTokenAmount&&(e=this.token)!=null&&e.price&&(this.sendTokenAmount*this.token.price||(this.message=`Incorrect Value`)),this.token||(this.message=`Select Token`)}};K_.styles=W_,G_([K()],K_.prototype,`token`,void 0),G_([K()],K_.prototype,`sendTokenAmount`,void 0),G_([K()],K_.prototype,`receiverAddress`,void 0),G_([K()],K_.prototype,`receiverProfileName`,void 0),G_([K()],K_.prototype,`loading`,void 0),G_([K()],K_.prototype,`gasPriceInUSD`,void 0),G_([K()],K_.prototype,`gasPrice`,void 0),G_([K()],K_.prototype,`message`,void 0),K_=G_([V(`w3m-wallet-send-view`)],K_);var q_=G`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`,J_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Y_=class extends W{constructor(){super(),this.unsubscribe=[],this.tokenBalance=N.state.tokenBalance,this.search=``,this.onDebouncedSearch=B.debounce(e=>{this.search=e}),this.unsubscribe.push(N.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return U`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return U`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){var e;if(this.tokens=(e=this.tokenBalance)==null?void 0:e.filter(e=>{var t;return e.chainId===((t=j.state.caipNetwork)==null?void 0:t.id)}),this.search){var t;this.filteredTokens=(t=this.tokenBalance)==null?void 0:t.filter(e=>e.name.toLowerCase().includes(this.search.toLowerCase()))}else this.filteredTokens=this.tokens;return U`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${[`0`,`s`,`0`,`s`]}
      >
        <wui-flex justifyContent="flex-start" .padding=${[`m`,`s`,`s`,`s`]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(e=>U`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`):U`<wui-flex
                .padding=${[`4xl`,`0`,`0`,`0`]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){H.push(`OnRampProviders`)}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){ve.setToken(e),ve.setTokenAmount(void 0),H.goBack()}};Y_.styles=q_,J_([K()],Y_.prototype,`tokenBalance`,void 0),J_([K()],Y_.prototype,`tokens`,void 0),J_([K()],Y_.prototype,`filteredTokens`,void 0),J_([K()],Y_.prototype,`search`,void 0),Y_=J_([V(`w3m-wallet-send-select-token-view`)],Y_);var X_=G`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`,Z_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Q_=class extends W{constructor(){super(),this.unsubscribe=[],this.token=ve.state.token,this.sendTokenAmount=ve.state.sendTokenAmount,this.receiverAddress=ve.state.receiverAddress,this.receiverProfileName=ve.state.receiverProfileName,this.receiverProfileImageUrl=ve.state.receiverProfileImageUrl,this.gasPriceInUSD=ve.state.gasPriceInUSD,this.caipNetwork=j.state.caipNetwork,this.unsubscribe.push(ve.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl}),j.subscribeKey(`caipNetwork`,e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e,t;return U` <wui-flex flexDirection="column" .padding=${[`0`,`l`,`l`,`l`]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${[`0`,`xs`,`0`,`xs`]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?De.roundNumber(this.sendTokenAmount,6,5):`unknown`} ${(e=this.token)==null?void 0:e.symbol}"
            .imageSrc=${(t=this.token)==null?void 0:t.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?De.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:`end`}):De.getTruncateString({string:this.receiverAddress?this.receiverAddress:``,charsStart:4,charsEnd:4,truncate:`middle`})}"
            address=${this.receiverAddress??``}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${[`xxl`,`0`,`0`,`0`]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${[`s`,`0`,`0`,`0`]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${[`l`,`0`,`0`,`0`]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){return this.token&&this.sendTokenAmount?U`<wui-text variant="paragraph-400" color="fg-100"
        >$${(this.token.price*this.sendTokenAmount).toFixed(2)}</wui-text
      >`:null}onSendClick(){ve.sendToken()}onCancelClick(){H.goBack()}};Q_.styles=X_,Z_([K()],Q_.prototype,`token`,void 0),Z_([K()],Q_.prototype,`sendTokenAmount`,void 0),Z_([K()],Q_.prototype,`receiverAddress`,void 0),Z_([K()],Q_.prototype,`receiverProfileName`,void 0),Z_([K()],Q_.prototype,`receiverProfileImageUrl`,void 0),Z_([K()],Q_.prototype,`gasPriceInUSD`,void 0),Z_([K()],Q_.prototype,`caipNetwork`,void 0),Q_=Z_([V(`w3m-wallet-send-preview-view`)],Q_);var $_=G`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,ev=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},tv=class extends W{render(){return U`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-wallet-login-list></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};tv.styles=$_,tv=ev([V(`w3m-connect-wallets-view`)],tv);var nv=G`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,rv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},iv=class extends W{render(){return U`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-social-login-list></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};iv.styles=nv,iv=rv([V(`w3m-connect-socials-view`)],iv);var av=G`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`,ov=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},sv=class extends W{constructor(){super(),this.unsubscribe=[],this.socialProvider=N.state.socialProvider,this.socialWindow=N.state.socialWindow,this.error=!1,this.connecting=!1,this.message=`Connect in the provider window`,this.authConnector=P.getAuthConnector(),this.handleSocialConnection=async e=>{var t;if((t=e.data)!=null&&t.resultUri)if(e.origin===jh.SECURE_SITE_ORIGIN){window.removeEventListener(`message`,this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),N.setSocialWindow(void 0,L.state.activeChain)),this.connecting=!0,this.updateMessage();let t=e.data.resultUri;await this.authConnector.provider.connectSocial(t),this.socialProvider&&(Pe.setConnectedSocialProvider(this.socialProvider),await k.connectExternal(this.authConnector,this.authConnector.chain),R.sendEvent({type:`track`,event:`SOCIAL_LOGIN_SUCCESS`,properties:{provider:this.socialProvider}}))}}catch{this.error=!0,this.updateMessage(),this.socialProvider&&R.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider}})}}else H.goBack(),I.showError(`Untrusted Origin`),this.socialProvider&&R.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider}})},this.unsubscribe.push(N.subscribe(e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&A.state.open&&A.close()})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener(`message`,this.handleSocialConnection,!1)}render(){return U`
      <wui-flex
        data-error=${J(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${[`3xl`,`xl`,`xl`,`xl`]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${J(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??`Social`}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?`error-100`:`fg-200`}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){let e=O.state.themeVariables[`--w3m-border-radius-master`];return U`<wui-loading-thumbnail radius=${(e?parseInt(e.replace(`px`,``),10):4)*9}></wui-loading-thumbnail>`}connectSocial(){let e=setInterval(()=>{var t;(t=this.socialWindow)!=null&&t.closed&&(!this.connecting&&H.state.view===`ConnectingSocial`&&H.goBack(),clearInterval(e))},1e3);window.addEventListener(`message`,this.handleSocialConnection,!1)}updateMessage(){this.error?this.message=`Something went wrong`:this.connecting?this.message=`Retrieving user data`:this.message=`Connect in the provider window`}};sv.styles=av,ov([K()],sv.prototype,`socialProvider`,void 0),ov([K()],sv.prototype,`socialWindow`,void 0),ov([K()],sv.prototype,`error`,void 0),ov([K()],sv.prototype,`connecting`,void 0),ov([K()],sv.prototype,`message`,void 0),sv=ov([V(`w3m-connecting-social-view`)],sv);var cv=G`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`,lv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},uv=class extends W{constructor(){super(),this.usubscribe=[],this.address=N.state.address,this.profileImage=N.state.profileImage,this.profileName=N.state.profileName,this.accounts=N.state.allAccounts,this.usubscribe.push(N.subscribeKey(`address`,e=>{e?this.address=e:A.close()})),this.usubscribe.push(N.subscribeKey(`profileImage`,e=>{this.profileImage=e})),this.usubscribe.push(N.subscribeKey(`profileName`,e=>{this.profileName=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var e;if(!this.address)throw Error(`w3m-profile-view: No account provided`);let t=(e=this.profileName)==null?void 0:e.split(`.`)[0];return U`
      <wui-flex flexDirection="column" gap="l" .padding=${[`0`,`xl`,`m`,`xl`]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${J(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${t?De.getTruncateString({string:t,charsStart:20,charsEnd:0,truncate:`end`}):De.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:`middle`})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>H.push(`AccountSettings`)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return U`<wui-flex flexDirection="column">
      <wui-flex .padding=${[`3xs`,`m`,`s`,`s`]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map(e=>this.accountTemplate(e))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){N.setShouldUpdateToAddress(e.address,L.state.activeChain);let t=P.getAuthConnector();t&&(await t.provider.setPreferredAccount(e.type),await t.provider.connect())}accountTemplate(e){return U`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?``:U`<wui-button
            slot="action"
            textVariant="small-600"
            size="sm"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.profileName?(B.copyToClopboard(this.profileName),I.showSuccess(`Name copied`)):this.address&&(B.copyToClopboard(this.address),I.showSuccess(`Address copied`))}catch{I.showError(`Failed to copy`)}}};uv.styles=cv,lv([K()],uv.prototype,`address`,void 0),lv([K()],uv.prototype,`profileImage`,void 0),lv([K()],uv.prototype,`profileName`,void 0),lv([K()],uv.prototype,`accounts`,void 0),uv=lv([V(`w3m-profile-view`)],uv);var dv=G`
  input[type='checkbox'] {
    all: revert;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    accent-color: var(--wui-color-accent-100);
  }
`,fv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},pv=class extends W{constructor(){super(),this.metadata=M.state.metadata,this.allAccounts=N.state.allAccounts,this.selectedAccounts=N.state.allAccounts,this.selectAll=!0,this.approved=!1,this.isApproving=!1,this.getAddressTemplate=e=>{let t=this.selectedAccounts.some(t=>t.address===e.address);return U`<wui-list-account accountAddress="${e.address}" accountType="${e.type}">
      <input
        id="${e.address}"
        slot="action"
        type="checkbox"
        .checked="${t}"
        @change="${this.handleClick(e)}"
      />
    </wui-list-account>`},this.onSelectAll=e=>{let t=e.target.checked;this.selectAll=this.selectedAccounts.length===this.allAccounts.length,this.allAccounts.forEach(e=>{this.onSelect(e,t)})},this.onSelect=(e,t)=>{t?this.selectedAccounts.push(e):this.selectedAccounts=this.selectedAccounts.filter(t=>t.address!==e.address),this.selectedAccounts.length>0&&(this.selectAll=this.selectedAccounts.length===this.allAccounts.length)},N.subscribeKey(`allAccounts`,e=>{this.allAccounts=e})}render(){var e,t;return U`
    <wui-flex justifyContent="center" .padding=${[`xl`,`0`,`xl`,`0`]}>
      <wui-banner-img imageSrc="${J((e=this.metadata)==null?void 0:e.icons[0])}" text="${J((t=this.metadata)==null?void 0:t.url)}" size="sm"></wui-banner>
    </wui-flex>
    <wui-flex .padding=${[`0`,`xl`,`0`,`xl`]} flexDirection="row" justifyContent="space-between">
        <wui-text variant="paragraph-400" color="fg-200">Select all</wui-text>
        <input type="checkbox" .checked=${this.selectAll}  @click=${this.onSelectAll.bind(this)} />
    </wui-flex>
      <wui-flex flexDirection="column" .padding=${[`l`,`xl`,`xl`,`xl`]}>
        ${this.allAccounts.map(e=>this.getAddressTemplate(e))}
      </wui-flex>
      <wui-flex .padding=${[`l`,`xl`,`xl`,`xl`]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="neutral"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="main"
          .disabled=${this.selectedAccounts.length===0}
          @click=${this.onContinue.bind(this)}
          ?loading=${this.isApproving}
        >
          ${this.isApproving?`Signing...`:`Continue`}
        </wui-button>
      </wui-flex>
    `}handleClick(e){return t=>{var n;let r=t.target;(n=this.onSelect)==null||n.call(this,{...e},r==null?void 0:r.checked)}}onContinue(){if(this.selectedAccounts.length>0){var e;this.isApproving=!0,N.setAllAccounts(this.selectedAccounts,L.state.activeChain),N.setShouldUpdateToAddress(((e=this.selectedAccounts[0])==null?void 0:e.address)??``,L.state.activeChain),this.approved=!0,this.isApproving=!1,A.close()}else this.onCancel()}async onCancel(){let{isConnected:e}=N.state;e?(await k.disconnect(),A.close()):H.push(`Connect`)}disconnectedCallback(){super.disconnectedCallback(),this.approved||this.onCancel()}};pv.styles=dv,fv([K()],pv.prototype,`allAccounts`,void 0),fv([K()],pv.prototype,`selectedAccounts`,void 0),fv([K()],pv.prototype,`selectAll`,void 0),fv([K()],pv.prototype,`approved`,void 0),fv([K()],pv.prototype,`isApproving`,void 0),pv=fv([V(`w3m-select-addresses-view`)],pv);var mv=G`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`,hv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},gv=class extends W{constructor(){super(),this.metadata=M.state.metadata,this.allAccounts=N.state.allAccounts||[],this.balances={},this.labels=N.state.addressLabels,this.currentAddress=N.state.address||``,this.connectedConnector=Pe.getConnectedConnector(),this.shouldShowIcon=this.connectedConnector===`AUTH`,this.caipNetwork=j.state.caipNetwork,N.subscribeKey(`allAccounts`,e=>{this.allAccounts=e})}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach(e=>{var t;me.getBalance(e.address,(t=this.caipNetwork)==null?void 0:t.id).then(t=>{let n=this.balances[e.address]||0;t.balances.length>0&&(n=t.balances.reduce((e,t)=>e+((t==null?void 0:t.value)||0),0)),this.balances[e.address]=n,this.requestUpdate()})})}getAddressIcon(e){return e===`smartAccount`?`lightbulb`:`mail`}render(){var e,t;return U`
      <wui-flex justifyContent="center" .padding=${[`xl`,`0`,`xl`,`0`]}>
        <wui-banner-img
          imageSrc=${J((e=this.metadata)==null?void 0:e.icons[0])}
          text=${J((t=this.metadata)==null?void 0:t.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${[`l`,`xl`,`xl`,`xl`]}>
        ${this.allAccounts.map((e,t)=>this.getAddressTemplate(e,t))}
      </wui-flex>
    `}getAddressTemplate(e,t){var n,r,i,a;let o=(n=this.labels)==null?void 0:n.get(e.address);return U`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${this.shouldShowIcon?U`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:U`<wui-flex .padding="${[`0`,`0`,`0`,`s`]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${o||De.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:`middle`})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${typeof this.balances[e.address]==`number`?`$${(r=this.balances[e.address])==null?void 0:r.toFixed(2)}`:U`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${((i=e.address)==null?void 0:i.toLowerCase())===((a=this.currentAddress)==null?void 0:a.toLowerCase())?``:U`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${t}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){N.setShouldUpdateToAddress(e,L.state.activeChain),A.close()}};gv.styles=mv,hv([K()],gv.prototype,`allAccounts`,void 0),hv([K()],gv.prototype,`balances`,void 0),gv=hv([V(`w3m-switch-address-view`)],gv);var _v=G`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`,vv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},yv=class extends W{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=N.state.socialProvider,this.uri=N.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=P.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(N.subscribeKey(`farcasterUrl`,e=>{e&&(this.uri=e,this.connectFarcaster())}),N.subscribeKey(`socialProvider`,e=>{e&&(this.socialProvider=e)})),window.addEventListener(`resize`,this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener(`resize`,this.forceUpdate)}render(){return this.onRenderProxy(),U`${this.platformTemplate()}`}platformTemplate(){return B.isMobile()?U`${this.mobileTemplate()}`:U`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?U`${this.loadingTemplate()}`:U`${this.qrTemplate()}`}qrTemplate(){return U` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${[`0`,`xl`,`xl`,`xl`]}
      gap="xl"
    >
      <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="paragraph-500" color="fg-100">
        Scan this QR Code with your phone
      </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return U`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`xl`,`xl`,`xl`,`xl`]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return U` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${[`3xl`,`xl`,`xl`,`xl`]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          backgroundColor="error-100"
          background="opaque"
          iconColor="error-100"
          icon="close"
          size="sm"
          border
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){let e=O.state.themeVariables[`--w3m-border-radius-master`];return U`<wui-loading-thumbnail radius=${(e?parseInt(e.replace(`px`,``),10):4)*9}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{var e;await((e=this.authConnector)==null?void 0:e.provider.connectFarcaster()),this.socialProvider&&Pe.setConnectedSocialProvider(this.socialProvider),this.loading=!0,await k.connectExternal(this.authConnector,this.authConnector.chain),this.loading=!1,A.close()}catch(e){H.goBack(),I.showError(e)}}mobileLinkTemplate(){return U`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&B.openHref(this.uri,`_blank`)}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},0))}qrCodeTemplate(){return!this.uri||!this.ready?null:U` <wui-qr-code
      size=${this.getBoundingClientRect().width-40}
      theme=${O.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){return U`<wui-link
      .disabled=${!this.uri||!this.ready}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(B.copyToClopboard(this.uri),I.showSuccess(`Link copied`))}catch{I.showError(`Failed to copy`)}}};yv.styles=_v,vv([K()],yv.prototype,`socialProvider`,void 0),vv([K()],yv.prototype,`uri`,void 0),vv([K()],yv.prototype,`ready`,void 0),vv([K()],yv.prototype,`loading`,void 0),yv=vv([V(`w3m-connecting-farcaster-view`)],yv);var bv=G`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function xv(e){let{connectors:t}=P.state,n=t.filter(e=>e.type===`ANNOUNCED`).reduce((e,t)=>{var n;return(n=t.info)!=null&&n.rdns&&(e[t.info.rdns]=!0),e},{});return e.map(e=>({...e,installed:!!e.rdns&&!!n[e.rdns??``]})).sort((e,t)=>Number(t.installed)-Number(e.installed))}var Sv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Cv=`local-paginator`,wv=class extends W{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!Ae.state.wallets.length,this.wallets=Ae.state.wallets,this.recommended=Ae.state.recommended,this.featured=Ae.state.featured,this.unsubscribe.push(Ae.subscribeKey(`wallets`,e=>this.wallets=e),Ae.subscribeKey(`recommended`,e=>this.recommended=e),Ae.subscribeKey(`featured`,e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(e=>e()),(e=this.paginationObserver)==null||e.disconnect()}render(){return U`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${[`0`,`s`,`s`,`s`]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var e;let t=(e=this.shadowRoot)==null?void 0:e.querySelector(`wui-grid`);this.initial&&t&&(await Ae.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>U`
        <wui-card-select-loader type="wallet" id=${J(t)}></wui-card-select-loader>
      `)}walletsTemplate(){return xv([...this.featured,...this.recommended,...this.wallets]).map(e=>U`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:n,count:r}=Ae.state,i=window.innerWidth<352?3:4,a=e.length+t.length,o=Math.ceil(a/i)*i-a+i;return o-=e.length?n.length%i:0,r===0&&n.length>0?null:r===0||[...n,...e,...t].length<r?this.shimmerTemplate(o,Cv):null}createPaginationObserver(){var e;let t=(e=this.shadowRoot)==null?void 0:e.querySelector(`#${Cv}`);t&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e!=null&&e.isIntersecting&&!this.initial){let{page:e,count:t,wallets:n}=Ae.state;n.length<t&&Ae.fetchWallets({page:e+1})}}),this.paginationObserver.observe(t))}onConnectWallet(e){let t=P.getConnector(e.id,e.rdns);t?H.push(`ConnectingExternal`,{connector:t}):H.push(`ConnectingWalletConnect`,{wallet:e})}};wv.styles=bv,Sv([K()],wv.prototype,`initial`,void 0),Sv([K()],wv.prototype,`wallets`,void 0),Sv([K()],wv.prototype,`recommended`,void 0),Sv([K()],wv.prototype,`featured`,void 0),wv=Sv([V(`w3m-all-wallets-list`)],wv);var Tv=G`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    will-change: background-color, color;
    outline: none;
    border: none;
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`,Ev=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Dv=class extends W{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e;return U`
      <button ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color="inherit">${(e=this.wallet)==null?void 0:e.name}</wui-text>
      </button>
    `}imageTemplate(){var e,t;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():U`
      <wui-wallet-image
        size="md"
        imageSrc=${J(this.imageSrc)}
        name=${(e=this.wallet)==null?void 0:e.name}
        .installed=${(t=this.wallet)==null?void 0:t.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return U`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=z.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await z.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Dv.styles=Tv,Ev([K()],Dv.prototype,`visible`,void 0),Ev([K()],Dv.prototype,`imageSrc`,void 0),Ev([K()],Dv.prototype,`imageLoading`,void 0),Ev([q()],Dv.prototype,`wallet`,void 0),Dv=Ev([V(`w3m-all-wallets-list-item`)],Dv);var Ov=G`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,kv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Av=class extends W{constructor(){super(...arguments),this.prevQuery=``,this.loading=!0,this.query=``}render(){return this.onSearch(),this.loading?U`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()!==this.prevQuery.trim()&&(this.prevQuery=this.query,this.loading=!0,await Ae.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=Ae.state,t=xv(e);return e.length?U`
      <wui-grid
        .padding=${[`0`,`s`,`s`,`s`]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(e=>U`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:U`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let t=P.getConnector(e.id,e.rdns);t?H.push(`ConnectingExternal`,{connector:t}):H.push(`ConnectingWalletConnect`,{wallet:e})}};Av.styles=Ov,kv([K()],Av.prototype,`loading`,void 0),kv([q()],Av.prototype,`query`,void 0),Av=kv([V(`w3m-all-wallets-search`)],Av);var jv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Mv=class extends W{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(k.subscribeKey(`buffering`,e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return U`
      <wui-flex justifyContent="center" .padding=${[`0`,`0`,`l`,`0`]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>e===`browser`?{label:`Browser`,icon:`extension`,platform:`browser`}:e===`mobile`?{label:`Mobile`,icon:`mobile`,platform:`mobile`}:e===`qrcode`?{label:`Mobile`,icon:`mobile`,platform:`qrcode`}:e===`web`?{label:`Webapp`,icon:`browser`,platform:`web`}:e===`desktop`?{label:`Desktop`,icon:`desktop`,platform:`desktop`}:{label:`Browser`,icon:`extension`,platform:`unsupported`});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];if(t){var n;(n=this.onSelectPlatfrom)==null||n.call(this,t)}}};jv([q({type:Array})],Mv.prototype,`platforms`,void 0),jv([q()],Mv.prototype,`onSelectPlatfrom`,void 0),jv([K()],Mv.prototype,`buffering`,void 0),Mv=jv([V(`w3m-connecting-header`)],Mv);var Nv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Pv=class extends $h{constructor(){if(super(),!this.wallet)throw Error(`w3m-connecting-wc-browser: No wallet provided`);this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),R.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`browser`}})}async onConnectProxy(){try{var e;this.error=!1;let{connectors:t}=P.state,n=t.find(e=>{var t,n,r;return e.type===`ANNOUNCED`&&((t=e.info)==null?void 0:t.rdns)===((n=this.wallet)==null?void 0:n.rdns)||e.type===`INJECTED`||e.name===((r=this.wallet)==null?void 0:r.name)});if(n)await k.connectExternal(n,n.chain);else throw Error(`w3m-connecting-wc-browser: No connector found`);A.close(),R.sendEvent({type:`track`,event:`CONNECT_SUCCESS`,properties:{method:`browser`,name:((e=this.wallet)==null?void 0:e.name)||`Unknown`}})}catch(e){R.sendEvent({type:`track`,event:`CONNECT_ERROR`,properties:{message:(e==null?void 0:e.message)??`Unknown`}}),this.error=!0}}};Pv=Nv([V(`w3m-connecting-wc-browser`)],Pv);var Fv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Iv=class extends $h{constructor(){if(super(),!this.wallet)throw Error(`w3m-connecting-wc-desktop: No wallet provided`);this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),R.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`desktop`}})}onRenderProxy(){if(!this.ready&&this.uri){var e;this.ready=!0,(e=this.onConnect)==null||e.call(this)}}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:n,href:r}=B.formatNativeUrl(e,this.uri);k.setWcLinking({name:t,href:r}),k.setRecentWallet(this.wallet),B.openHref(n,`_blank`)}catch{this.error=!0}}};Iv=Fv([V(`w3m-connecting-wc-desktop`)],Iv);var Lv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Rv=class extends $h{constructor(){if(super(),!this.wallet)throw Error(`w3m-connecting-wc-mobile: No wallet provided`);this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener(`visibilitychange`,this.onBuffering.bind(this)),R.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`mobile`}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`visibilitychange`,this.onBuffering.bind(this))}onRenderProxy(){if(!this.ready&&this.uri){var e;this.ready=!0,(e=this.onConnect)==null||e.call(this)}}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:n,href:r}=B.formatNativeUrl(e,this.uri);k.setWcLinking({name:t,href:r}),k.setRecentWallet(this.wallet),B.openHref(n,`_self`)}catch{this.error=!0}}onBuffering(){var e;let t=B.isIos();((e=document)==null?void 0:e.visibilityState)===`visible`&&!this.error&&t&&(k.setBuffering(!0),setTimeout(()=>{k.setBuffering(!1)},5e3))}};Rv=Lv([V(`w3m-connecting-wc-mobile`)],Rv);var zv=G`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,Bv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Vv=class extends $h{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener(`resize`,this.forceUpdate),R.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:((e=this.wallet)==null?void 0:e.name)??`WalletConnect`,platform:`qrcode`}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`resize`,this.forceUpdate)}render(){return this.onRenderProxy(),U`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`0`,`xl`,`xl`,`xl`]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},0))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return k.setWcLinking(void 0),k.setRecentWallet(this.wallet),U` <wui-qr-code
      size=${e}
      theme=${O.state.themeMode}
      uri=${this.uri}
      imageSrc=${J(z.getWalletImage(this.wallet))}
      alt=${J(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){return U`<wui-link
      .disabled=${!this.uri||!this.ready}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Vv.styles=zv,Vv=Bv([V(`w3m-connecting-wc-qrcode`)],Vv);var Hv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Uv=class extends W{constructor(){var e;if(super(),this.wallet=(e=H.state.data)==null?void 0:e.wallet,!this.wallet)throw Error(`w3m-connecting-wc-unsupported: No wallet provided`);R.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`browser`}})}render(){return U`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`3xl`,`xl`,`xl`,`xl`]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${J(z.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Uv=Hv([V(`w3m-connecting-wc-unsupported`)],Uv);var Wv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Gv=class extends $h{constructor(){if(super(),!this.wallet)throw Error(`w3m-connecting-wc-web: No wallet provided`);this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel=`Open`,this.secondaryLabel=`Open and continue in a new browser tab`,this.secondaryBtnIcon=`externalLink`,R.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`web`}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:n,href:r}=B.formatUniversalUrl(e,this.uri);k.setWcLinking({name:t,href:r}),k.setRecentWallet(this.wallet),B.openHref(n,`_blank`)}catch{this.error=!0}}};Gv=Wv([V(`w3m-connecting-wc-web`)],Gv);var Kv=G`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`,qv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Jv=je.CONVERT_SLIPPAGE_TOLERANCE,Yv=class extends W{constructor(){var e;super(),this.unsubscribe=[],this.networkName=(e=j.state.caipNetwork)==null?void 0:e.name,this.detailsOpen=!1,this.sourceToken=F.state.sourceToken,this.toToken=F.state.toToken,this.toTokenAmount=F.state.toTokenAmount,this.sourceTokenPriceInUSD=F.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=F.state.toTokenPriceInUSD,this.gasPriceInUSD=F.state.gasPriceInUSD,this.priceImpact=F.state.priceImpact,this.maxSlippage=F.state.maxSlippage,this.networkTokenSymbol=F.state.networkTokenSymbol,this.inputError=F.state.inputError,this.unsubscribe.push(F.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.gasPriceInUSD=e.gasPriceInUSD,this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError}))}render(){let e=this.toTokenAmount&&this.maxSlippage?Ce.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;let t=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return U`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${[`0`,`xs`,`0`,`xs`]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${De.formatNumberToLocalString(t,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${De.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?U`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${De.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?U` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${De.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?U`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${e?`Transaction will be reversed if you receive less than ${De.formatNumberToLocalString(e,6)} ${this.toToken.symbol} due to price changes.`:``}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${De.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${Jv}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};Yv.styles=[Kv],qv([K()],Yv.prototype,`networkName`,void 0),qv([q()],Yv.prototype,`detailsOpen`,void 0),qv([K()],Yv.prototype,`sourceToken`,void 0),qv([K()],Yv.prototype,`toToken`,void 0),qv([K()],Yv.prototype,`toTokenAmount`,void 0),qv([K()],Yv.prototype,`sourceTokenPriceInUSD`,void 0),qv([K()],Yv.prototype,`toTokenPriceInUSD`,void 0),qv([K()],Yv.prototype,`gasPriceInUSD`,void 0),qv([K()],Yv.prototype,`priceImpact`,void 0),qv([K()],Yv.prototype,`maxSlippage`,void 0),qv([K()],Yv.prototype,`networkTokenSymbol`,void 0),qv([K()],Yv.prototype,`inputError`,void 0),Yv=qv([V(`w3m-swap-details`)],Yv);var Xv=G`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`,Zv=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qv=5e-5,$v=class extends W{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target=`sourceToken`,this.onSetAmount=null,this.onSetMaxValue=null}render(){let e=this.marketValue||`0`,t=Ce.bigNumber(e).isGreaterThan(`0`);return U`
      <wui-flex class="${this.focused?`focus`:``}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${De.formatNumberToLocalString(this.marketValue,3)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){return Me.numericInputKeyDown(e,this.value,e=>{var t;return(t=this.onSetAmount)==null?void 0:t.call(this,this.target,e)})}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;let t=e.target.value.replace(/[^0-9.]/gu,``);t===`,`||t===`.`?this.onSetAmount(this.target,`0.`):t.endsWith(`,`)?this.onSetAmount(this.target,t.replace(`,`,`.`)):this.onSetAmount(this.target,t)}setMaxValueToInput(){var e;(e=this.onSetMaxValue)==null||e.call(this,this.target,this.balance)}templateTokenSelectButton(){return this.token?U`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:U` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){let e=Ce.multiply(this.balance,this.price),t=e?e==null?void 0:e.isGreaterThan(Qv):!1;return U`
      ${t?U`<wui-text variant="small-400" color="fg-200">
            ${De.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${this.target===`sourceToken`?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?U` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:U` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){R.sendEvent({type:`track`,event:`CLICK_SELECT_TOKEN_TO_SWAP`}),H.push(`SwapSelectToken`,{target:this.target})}onBuyToken(){H.push(`OnRampProviders`)}};$v.styles=[Xv],Zv([q()],$v.prototype,`focused`,void 0),Zv([q()],$v.prototype,`balance`,void 0),Zv([q()],$v.prototype,`value`,void 0),Zv([q()],$v.prototype,`price`,void 0),Zv([q()],$v.prototype,`marketValue`,void 0),Zv([q()],$v.prototype,`disabled`,void 0),Zv([q()],$v.prototype,`target`,void 0),Zv([q()],$v.prototype,`token`,void 0),Zv([q()],$v.prototype,`onSetAmount`,void 0),Zv([q()],$v.prototype,`onSetMaxValue`,void 0),$v=Zv([V(`w3m-swap-input`)],$v);var ey=G`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`,ty=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ny=class extends W{constructor(){super(...arguments),this.target=`sourceToken`}render(){return U`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return U`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};ny.styles=[ey],ty([q()],ny.prototype,`target`,void 0),ny=ty([V(`w3m-swap-input-skeleton`)],ny);var ry=G`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,iy=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ay=[`Swap`,`SwapSelectToken`,`SwapPreview`];function oy(){var e,t,n,r;let i=(e=H.state.data)==null||(e=e.connector)==null?void 0:e.name,a=(t=H.state.data)==null||(t=t.wallet)==null?void 0:t.name,o=(n=H.state.data)==null||(n=n.network)==null?void 0:n.name,s=a??i,c=P.getConnectors();return{Connect:`Connect ${c.length===1&&((r=c[0])==null?void 0:r.id)===`w3m-email`?`Email`:``} Wallet`,ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:`All Wallets`,ApproveTransaction:`Approve Transaction`,BuyInProgress:`Buy`,ConnectingExternal:s??`Connect Wallet`,ConnectingWalletConnect:s??`WalletConnect`,ConnectingSiwe:`Sign In`,Convert:`Convert`,ConvertSelectToken:`Select token`,ConvertPreview:`Preview convert`,Downloads:s?`Get ${s}`:`Downloads`,EmailVerifyOtp:`Confirm Email`,EmailVerifyDevice:`Register Device`,GetWallet:`Get a wallet`,Networks:`Choose Network`,OnRampProviders:`Choose Provider`,OnRampActivity:`Activity`,OnRampTokenSelect:`Select Token`,OnRampFiatSelect:`Select Currency`,Profile:void 0,SelectAddresses:`Select accounts`,SwitchNetwork:o??`Switch Network`,SwitchAddress:`Switch Address`,Transactions:`Activity`,UnsupportedChain:`Switch Network`,UpgradeEmailWallet:`Upgrade your Wallet`,UpgradeToSmartAccount:void 0,UpdateEmailWallet:`Edit Email`,UpdateEmailPrimaryOtp:`Confirm Current Email`,UpdateEmailSecondaryOtp:`Confirm New Email`,WhatIsABuy:`What is Buy?`,RegisterAccountName:`Choose name`,RegisterAccountNameSuccess:``,WalletReceive:`Receive`,WalletCompatibleNetworks:`Compatible Networks`,Swap:`Swap`,SwapSelectToken:`Select token`,SwapPreview:`Preview swap`,WalletSend:`Send`,WalletSendPreview:`Review send`,WalletSendSelectToken:`Select Token`,WhatIsANetwork:`What is a network?`,WhatIsAWallet:`What is a wallet?`,ConnectWallets:`Connect wallet`,ConnectSocials:`All socials`,ConnectingSocial:N.state.socialProvider?N.state.socialProvider:`Connect Social`,ConnectingMultiChain:`Select chain`,ConnectingFarcaster:`Farcaster`,SwitchActiveChain:`Switch chain`}}var sy=class extends W{constructor(){super(),this.unsubscribe=[],this.heading=oy()[H.state.view],this.network=j.state.caipNetwork,this.buffering=!1,this.showBack=!1,this.isSiweEnabled=M.state.isSiweEnabled,this.prevHistoryLength=1,this.view=H.state.view,this.viewDirection=``,this.headerText=oy()[H.state.view],this.unsubscribe.push(H.subscribeKey(`view`,e=>{setTimeout(()=>{this.view=e,this.headerText=oy()[e]},jh.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),k.subscribeKey(`buffering`,e=>this.buffering=e),j.subscribeKey(`caipNetwork`,e=>this.network=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return U`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()} ${this.closeButtonTemplate()}
      </wui-flex>
    `}onWalletHelp(){R.sendEvent({type:`track`,event:`CLICK_WALLET_HELP`}),H.push(`WhatIsAWallet`)}async onClose(){if(this.isSiweEnabled){let{SIWEController:e}=await g(async()=>{let{SIWEController:e}=await import(`./exports-CZOqf00r.js`);return{SIWEController:e}},__vite__mapDeps([0,1,2,3,4,5,6,7])),t=H.state.view===`ApproveTransaction`;e.state.status!==`success`&&t?H.popTransactionStack(!0):A.close()}else A.close()}closeButtonTemplate(){let e=H.state.view===`ConnectingSiwe`;return this.isSiweEnabled&&e?U`<div style="width:40px" />`:U`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){let e=ay.includes(this.view);return U`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100">${this.headerText}</wui-text>
        ${e?U`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}dynamicButtonTemplate(){let{view:e}=H.state,t=e===`Connect`,n=e===`ApproveTransaction`,r=e===`UpgradeToSmartAccount`,i=e===`ConnectingSiwe`,a=e===`Account`,o=n||r||i;if(a){var s;return U`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(s=this.network)==null?void 0:s.name}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${J(z.getNetworkImage(this.network))}
      ></wui-select>`}return this.showBack&&!o?U`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:U`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(R.sendEvent({type:`track`,event:`CLICK_NETWORKS`}),H.push(`Networks`))}isAllowedNetworkSwitch(){let e=j.getRequestedCaipNetworks(),t=e?e.length>1:!1,n=e==null?void 0:e.find(({id:e})=>{var t;return e===((t=this.network)==null?void 0:t.id)});return t||!n}getPadding(){return this.heading?[`l`,`2l`,`l`,`2l`]:[`0`,`2l`,`0`,`2l`]}onViewChange(){let{history:e}=H.state,t=jh.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=jh.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var e;let{history:t}=H.state,n=(e=this.shadowRoot)==null?void 0:e.querySelector(`#dynamic`);t.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`})):t.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`}))}onGoBack(){H.goBack()}};sy.styles=ry,iy([K()],sy.prototype,`heading`,void 0),iy([K()],sy.prototype,`network`,void 0),iy([K()],sy.prototype,`buffering`,void 0),iy([K()],sy.prototype,`showBack`,void 0),iy([K()],sy.prototype,`isSiweEnabled`,void 0),iy([K()],sy.prototype,`prevHistoryLength`,void 0),iy([K()],sy.prototype,`view`,void 0),iy([K()],sy.prototype,`viewDirection`,void 0),iy([K()],sy.prototype,`headerText`,void 0),sy=iy([V(`w3m-header`)],sy);var cy=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ly=class extends W{constructor(){super(...arguments),this.data=[]}render(){return U`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>U`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>U`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};cy([q({type:Array})],ly.prototype,`data`,void 0),ly=cy([V(`w3m-help-widget`)],ly);var uy=G`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`,dy=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},fy=class extends W{constructor(){super(...arguments),this.disabled=!1,this.color=`inherit`,this.label=`Bought`,this.purchaseValue=``,this.purchaseCurrency=``,this.date=``,this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=``}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return U`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?U`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:U`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await Ae._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return U`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){return U`<wui-flex class="purchase-image-container">
      <wui-image src=${this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return U`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};fy.styles=[uy],dy([q({type:Boolean})],fy.prototype,`disabled`,void 0),dy([q()],fy.prototype,`color`,void 0),dy([q()],fy.prototype,`label`,void 0),dy([q()],fy.prototype,`purchaseValue`,void 0),dy([q()],fy.prototype,`purchaseCurrency`,void 0),dy([q()],fy.prototype,`date`,void 0),dy([q({type:Boolean})],fy.prototype,`completed`,void 0),dy([q({type:Boolean})],fy.prototype,`inProgress`,void 0),dy([q({type:Boolean})],fy.prototype,`failed`,void 0),dy([q()],fy.prototype,`onClick`,void 0),dy([q()],fy.prototype,`symbol`,void 0),dy([q()],fy.prototype,`icon`,void 0),fy=dy([V(`w3m-onramp-activity-item`)],fy);var py=G`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`,my=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},hy=class extends W{constructor(){var e;super(),this.unsubscribe=[],this.type=`Token`,this.value=0,this.currencies=[],this.selectedCurrency=(e=this.currencies)==null?void 0:e[0],this.currencyImages=we.state.currencyImages,this.tokenImages=we.state.tokenImages,this.unsubscribe.push(pe.subscribeKey(`purchaseCurrency`,e=>{!e||this.type===`Fiat`||(this.selectedCurrency=this.formatPurchaseCurrency(e))}),pe.subscribeKey(`paymentCurrency`,e=>{!e||this.type===`Token`||(this.selectedCurrency=this.formatPaymentCurrency(e))}),pe.subscribe(e=>{this.type===`Fiat`?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)}),we.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){pe.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;let t=((e=this.selectedCurrency)==null?void 0:e.symbol)||``,n=this.currencyImages[t]||this.tokenImages[t];return U`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?U` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>A.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${J(n)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:U`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};hy.styles=py,my([q({type:String})],hy.prototype,`type`,void 0),my([q({type:Number})],hy.prototype,`value`,void 0),my([K()],hy.prototype,`currencies`,void 0),my([K()],hy.prototype,`selectedCurrency`,void 0),my([K()],hy.prototype,`currencyImages`,void 0),my([K()],hy.prototype,`tokenImages`,void 0),hy=my([V(`w3m-onramp-input`)],hy);var gy=G`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,_y=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},vy=class extends W{constructor(){super(...arguments),this.disabled=!1,this.color=`inherit`,this.label=``,this.feeRange=``,this.loading=!1,this.onClick=null}render(){return U`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${J(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?U`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:U`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){var e;let t=j.getRequestedCaipNetworks(),n=t==null||(e=t.filter(e=>e==null?void 0:e.imageId))==null?void 0:e.slice(0,5);return U`
      <wui-flex class="networks">
        ${n==null?void 0:n.map(e=>U`
            <wui-flex class="network-icon">
              <wui-image src=${J(z.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};vy.styles=[gy],_y([q({type:Boolean})],vy.prototype,`disabled`,void 0),_y([q()],vy.prototype,`color`,void 0),_y([q()],vy.prototype,`name`,void 0),_y([q()],vy.prototype,`label`,void 0),_y([q()],vy.prototype,`feeRange`,void 0),_y([q({type:Boolean})],vy.prototype,`loading`,void 0),_y([q()],vy.prototype,`onClick`,void 0),vy=_y([V(`w3m-onramp-provider-item`)],vy);var yy=G`
  wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`,by=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},xy=class extends W{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=M.state;return!e&&!t?null:U`
      <wui-flex .padding=${[`m`,`s`,`s`,`s`]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=M.state;return e&&t?`and`:``}termsTemplate(){let{termsConditionsUrl:e}=M.state;return e?U`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=M.state;return e?U`<a href=${e}>Privacy Policy</a>`:null}};xy.styles=[yy],xy=by([V(`w3m-legal-footer`)],xy);var Sy=G`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,Cy=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},wy=class extends W{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display=`none`,null;let{name:e,app_store:t,play_store:n,chrome_store:r,homepage:i}=this.wallet,a=B.isMobile(),o=B.isIos(),s=B.isAndroid(),c=[t,n,i,r].filter(Boolean).length>1,l=De.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:`end`});return c&&!a?U`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>H.push(`Downloads`,{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&i?U`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&o?U`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&s?U`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display=`none`,null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&B.openHref(this.wallet.app_store,`_blank`)}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&B.openHref(this.wallet.play_store,`_blank`)}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&B.openHref(this.wallet.homepage,`_blank`)}};wy.styles=[Sy],Cy([q({type:Object})],wy.prototype,`wallet`,void 0),wy=Cy([V(`w3m-mobile-download-links`)],wy);var Ty=G`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`,Ey=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Dy=class extends W{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=M.state;return!e&&!t?null:U`
      <wui-flex
        .padding=${[`m`,`s`,`s`,`s`]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return U` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){R.sendEvent({type:`track`,event:`SELECT_WHAT_IS_A_BUY`,properties:{isSmartAccount:N.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT}}),H.push(`WhatIsABuy`)}};Dy.styles=[Ty],Dy=Ey([V(`w3m-onramp-providers-footer`)],Dy);var Oy=G`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,ky=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ay={loading:void 0,success:{backgroundColor:`success-100`,iconColor:`success-100`,icon:`checkmark`},error:{backgroundColor:`error-100`,iconColor:`error-100`,icon:`close`}},jy=class extends W{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=I.state.open,this.unsubscribe.push(I.subscribeKey(`open`,e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=I.state,n=Ay[t];return U`
      <wui-snackbar
        message=${e}
        backgroundColor=${n==null?void 0:n.backgroundColor}
        iconColor=${n==null?void 0:n.iconColor}
        icon=${n==null?void 0:n.icon}
        .loading=${t===`loading`}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:`translateX(-50%) scale(0.85)`},{opacity:1,transform:`translateX(-50%) scale(1)`}],{duration:150,fill:`forwards`,easing:`ease`}),this.timeout=setTimeout(()=>I.hide(),2500)):this.animate([{opacity:1,transform:`translateX(-50%) scale(1)`},{opacity:0,transform:`translateX(-50%) scale(0.85)`}],{duration:150,fill:`forwards`,easing:`ease`})}};jy.styles=Oy,ky([K()],jy.prototype,`open`,void 0),jy=ky([V(`w3m-snackbar`)],jy);var My=G`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`,Ny=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Py=class extends W{constructor(){super(),this.unsubscribe=[],this.formRef=Ie(),this.connectors=P.state.connectors,this.email=``,this.loading=!1,this.error=``,this.unsubscribe.push(P.subscribeKey(`connectors`,e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.onSubmitEmail(e)})}render(){let e=this.connectors.find(e=>e.type===`AUTH`),t=this.connectors.length>1;return e!=null&&e.email?U`
      <form ${Le(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e.socials||!t?null:U`<wui-flex .padding=${[`xxs`,`0`,`0`,`0`]}>
            <wui-separator text="or"></wui-separator>
          </wui-flex>`}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?U`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?U`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=``}async onSubmitEmail(e){if(![Se.CHAIN.EVM,Se.CHAIN.SOLANA].find(e=>e===L.state.activeChain)){H.push(`SwitchActiveChain`,{switchToChain:Se.CHAIN.EVM});return}try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=P.getAuthConnector();if(!t)throw Error(`w3m-email-login-widget: Auth connector not found`);let{action:n}=await t.provider.connectEmail({email:this.email});R.sendEvent({type:`track`,event:`EMAIL_SUBMITTED`}),n===`VERIFY_OTP`?(R.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_SENT`}),H.push(`EmailVerifyOtp`,{email:this.email})):n===`VERIFY_DEVICE`&&H.push(`EmailVerifyDevice`,{email:this.email})}catch(e){let t=B.parseError(e);t!=null&&t.includes(`Invalid email`)?this.error=`Invalid email. Try again.`:I.showError(e)}finally{this.loading=!1}}onFocusEvent(){R.sendEvent({type:`track`,event:`EMAIL_LOGIN_SELECTED`})}};Py.styles=My,Ny([K()],Py.prototype,`connectors`,void 0),Ny([K()],Py.prototype,`email`,void 0),Ny([K()],Py.prototype,`loading`,void 0),Ny([K()],Py.prototype,`error`,void 0),Py=Ny([V(`w3m-email-login-widget`)],Py);var Fy=G`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`,Iy=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ly=class extends W{constructor(){super(),this.unsubscribe=[],this.address=N.state.address,this.profileImage=N.state.profileImage,this.profileName=N.state.profileName,this.disconnecting=!1,this.balance=N.state.balance,this.balanceSymbol=N.state.balanceSymbol,this.unsubscribe.push(N.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||I.showError(`Account not found`)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error(`w3m-account-view: No account provided`);return U`<wui-flex
        flexDirection="column"
        .padding=${[`0`,`xl`,`m`,`xl`]}
        alignItems="center"
        gap="l"
      >
        ${L.state.activeChain===Se.CHAIN.EVM?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${B.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${[`0`,`s`,`s`,`s`]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.onrampTemplate()} ${this.swapsTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){let{enableOnramp:e}=M.state;return e?U`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}activityTemplate(){let e=L.state.activeChain===Se.CHAIN.SOLANA;return U` <wui-list-item
      iconVariant="blue"
      icon="clock"
      iconSize="sm"
      ?chevron=${!e}
      ?disabled=${e}
      @click=${this.onTransactions.bind(this)}
    >
      <wui-text variant="paragraph-500" color="fg-100" ?disabled=${e}> Activity </wui-text>
      ${e?U`<wui-tag variant="main">Coming soon</wui-tag>`:``}
    </wui-list-item>`}swapsTemplate(){let{enableSwaps:e}=M.state;return!e||L.state.activeChain===Se.CHAIN.SOLANA?null:U`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `}authCardTemplate(){let e=Pe.getConnectedConnector(),t=P.getAuthConnector(),{origin:n}=location;return!t||e!==`AUTH`||n.includes(je.SECURE_SITE)?null:U`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){H.push(`SwitchAddress`)}handleClickPay(){H.push(`OnRampProviders`)}handleClickSwap(){H.push(`Swap`)}explorerBtnTemplate(){return N.state.addressExplorerUrl?U`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return U`
      <wui-avatar
        alt=${J(this.address)}
        address=${J(this.address)}
        imageSrc=${J(this.profileImage===null?void 0:this.profileImage)}
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?De.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:`end`}):De.getTruncateString({string:this.address?this.address:``,charsStart:4,charsEnd:4,truncate:`middle`})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){var e;if(!this.address)throw Error(`w3m-account-view: No account provided`);let t=(e=N.state.allAccounts)==null?void 0:e.find(e=>e.address===this.address),n=N.state.addressLabels.get(this.address);return U`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${J(this.address)}
        icon="${(t==null?void 0:t.type)===ye.ACCOUNT_TYPES.SMART_ACCOUNT&&L.state.activeChain===Se.CHAIN.EVM?`lightbulb`:`mail`}"
        avatarSrc=${J(this.profileImage?this.profileImage:void 0)}
        profileName=${J(n||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}onCopyAddress(){try{this.address&&(B.copyToClopboard(this.address),I.showSuccess(`Address copied`))}catch{I.showError(`Failed to copy`)}}onTransactions(){R.sendEvent({type:`track`,event:`CLICK_TRANSACTIONS`,properties:{isSmartAccount:N.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT}}),H.push(`Transactions`)}async onDisconnect(){try{this.disconnecting=!0,await k.disconnect(),R.sendEvent({type:`track`,event:`DISCONNECT_SUCCESS`}),A.close()}catch{R.sendEvent({type:`track`,event:`DISCONNECT_ERROR`}),I.showError(`Failed to disconnect`)}finally{this.disconnecting=!1}}onExplorer(){let e=N.state.addressExplorerUrl;e&&B.openHref(e,`_blank`)}onGoToUpgradeView(){R.sendEvent({type:`track`,event:`EMAIL_UPGRADE_FROM_MODAL`}),H.push(`UpgradeEmailWallet`)}};Ly.styles=Fy,Iy([K()],Ly.prototype,`address`,void 0),Iy([K()],Ly.prototype,`profileImage`,void 0),Iy([K()],Ly.prototype,`profileName`,void 0),Iy([K()],Ly.prototype,`disconnecting`,void 0),Iy([K()],Ly.prototype,`balance`,void 0),Iy([K()],Ly.prototype,`balanceSymbol`,void 0),Ly=Iy([V(`w3m-account-default-widget`)],Ly);var Ry=G`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,zy=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},By=3,Vy=48,Hy=430,Uy=class extends W{constructor(){super(),this.unsubscribe=[],this.address=N.state.address,this.profileImage=N.state.profileImage,this.profileName=N.state.profileName,this.smartAccountDeployed=N.state.smartAccountDeployed,this.network=j.state.caipNetwork,this.currentTab=N.state.currentTab,this.tokenBalance=N.state.tokenBalance,this.preferredAccountType=N.state.preferredAccountType,this.unsubscribe.push(N.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed,this.preferredAccountType=e.preferredAccountType):A.close()}),j.subscribeKey(`caipNetwork`,e=>{this.network=e})),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){N.fetchTokenBalance()}render(){if(!this.address)throw Error(`w3m-account-view: No account provided`);let e=z.getNetworkImage(this.network);return U`<wui-flex
      flexDirection="column"
      .padding=${[`0`,`xl`,`m`,`xl`]}
      alignItems="center"
      gap="m"
    >
      ${this.network&&U`<wui-network-icon .network=${this.network}></wui-network-icon>`}
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${J(this.address)}
        networkSrc=${J(e)}
        icon="chevronBottom"
        avatarSrc=${J(this.profileImage?this.profileImage:void 0)}
        profileName=${this.profileName}
        data-testid="w3m-profile-button"
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <w3m-tooltip-trigger text="Buy">
          <wui-icon-button
            data-testid="wallet-features-onramp-button"
            @click=${this.onBuyClick.bind(this)}
            icon="card"
          ></wui-icon-button>
        </w3m-tooltip-trigger>
        ${this.swapsTemplate()}
        <w3m-tooltip-trigger text="Receive">
          <wui-icon-button
            data-testid="wallet-features-receive-button"
            @click=${this.onReceiveClick.bind(this)}
            icon="arrowBottomCircle"
          >
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Send">
          <wui-icon-button
            data-testid="wallet-features-send-button"
            @click=${this.onSendClick.bind(this)}
            icon="send"
          ></wui-icon-button>
        </w3m-tooltip-trigger>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${B.isMobile()&&window.innerWidth<Hy?`${(window.innerWidth-Vy)/By}px`:`104px`}
        .tabs=${jh.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}swapsTemplate(){let{enableSwaps:e}=M.state;return e?U`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swap-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>N.fetchTokenBalance(),1e4)}listContentTemplate(){return this.currentTab===0?U`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?U`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?U`<w3m-account-activity-widget></w3m-account-activity-widget>`:U`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>=0){let e=B.calculateBalance(this.tokenBalance),{dollars:t=`0`,pennies:n=`00`}=B.formatTokenBalance(e);return U`<wui-balance dollars=${t} pennies=${n}></wui-balance>`}return U`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){return!j.checkIfSmartAccountEnabled()||this.preferredAccountType!==ye.ACCOUNT_TYPES.EOA||this.smartAccountDeployed?null:U` <wui-promo
      text=${`Activate your account`}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){N.setCurrentTab(e)}onProfileButtonClick(){H.push(`Profile`)}onBuyClick(){H.push(`OnRampProviders`)}onSwapClick(){var e,t;if((e=this.network)!=null&&e.id&&!je.SWAP_SUPPORTED_NETWORKS.includes((t=this.network)==null?void 0:t.id))H.push(`UnsupportedChain`,{swapUnsupportedChain:!0});else{var n;R.sendEvent({type:`track`,event:`OPEN_SWAP`,properties:{network:((n=this.network)==null?void 0:n.id)||``,isSmartAccount:N.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT}}),H.push(`Swap`)}}onReceiveClick(){H.push(`WalletReceive`)}onSendClick(){var e;R.sendEvent({type:`track`,event:`OPEN_SEND`,properties:{network:((e=this.network)==null?void 0:e.id)||``,isSmartAccount:N.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT}}),H.push(`WalletSend`)}onUpdateToSmartAccount(){H.push(`UpgradeToSmartAccount`)}};Uy.styles=Ry,zy([K()],Uy.prototype,`watchTokenBalance`,void 0),zy([K()],Uy.prototype,`address`,void 0),zy([K()],Uy.prototype,`profileImage`,void 0),zy([K()],Uy.prototype,`profileName`,void 0),zy([K()],Uy.prototype,`smartAccountDeployed`,void 0),zy([K()],Uy.prototype,`network`,void 0),zy([K()],Uy.prototype,`currentTab`,void 0),zy([K()],Uy.prototype,`tokenBalance`,void 0),zy([K()],Uy.prototype,`preferredAccountType`,void 0),Uy=zy([V(`w3m-account-wallet-features-widget`)],Uy);var Wy=G`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`,Gy=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ky=class extends W{render(){return U`<w3m-activity-list page="account"></w3m-activity-list>`}};Ky.styles=Wy,Ky=Gy([V(`w3m-account-activity-widget`)],Ky);var qy=G`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,Jy=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Yy=class extends W{render(){return U`${this.nftTemplate()}`}nftTemplate(){return U` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">Coming soon</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive funds</wui-link>
    </wui-flex>`}onReceiveClick(){H.push(`WalletReceive`)}};Yy.styles=qy,Yy=Jy([V(`w3m-account-nfts-widget`)],Yy);var Xy=G`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`,Zy=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qy=class extends W{constructor(){super(),this.unsubscribe=[],this.tokenBalance=N.state.tokenBalance,this.unsubscribe.push(N.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return U`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>0?U`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:U` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){var e;return(e=this.tokenBalance)==null?void 0:e.map(e=>U`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){H.push(`WalletReceive`)}onBuyClick(){R.sendEvent({type:`track`,event:`SELECT_BUY_CRYPTO`,properties:{isSmartAccount:N.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT}}),H.push(`OnRampProviders`)}};Qy.styles=Xy,Zy([K()],Qy.prototype,`tokenBalance`,void 0),Qy=Zy([V(`w3m-account-tokens-widget`)],Qy);var $y=G`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`,eb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},tb=`last-transaction`,nb=7,rb=class extends W{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page=`activity`,this.address=N.state.address,this.transactionsByYear=be.state.transactionsByYear,this.loading=be.state.loading,this.empty=be.state.empty,this.next=be.state.next,be.clearCursor(),this.unsubscribe.push(N.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,be.resetTransactions(),be.fetchTransactions(e.address))}),j.subscribeKey(`caipNetwork`,()=>{this.updateTransactionView()}),be.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return U` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){var e;let t=(e=j.state.caipNetwork)==null?void 0:e.id;be.state.lastNetworkInView!==t&&(be.resetTransactions(),be.fetchTransactions(this.address)),be.setLastNetworkInView(t)}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(e=>{let t=parseInt(e,10),n=Array(12).fill(null).map((e,n)=>{var r;return{groupTitle:Ne.getTransactionGroupTitle(t,n),transactions:(r=this.transactionsByYear[t])==null?void 0:r[n]}}).filter(({transactions:e})=>e).reverse();return n.map(({groupTitle:e,transactions:t},r)=>{let i=r===n.length-1;return t?U`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${i?`true`:`false`}"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${[`xs`,`s`,`s`,`s`]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${e}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(t,i)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){let{date:n,descriptions:r,direction:i,isAllNFT:a,images:o,status:s,transfers:c,type:l}=this.getTransactionListItemProps(e),u=(c==null?void 0:c.length)>1;return(c==null?void 0:c.length)===2&&!a?U`
        <wui-transaction-list-item
          date=${n}
          .direction=${i}
          id=${t&&this.next?tb:``}
          status=${s}
          type=${l}
          .images=${o}
          .descriptions=${r}
        ></wui-transaction-list-item>
      `:u?c.map((e,r)=>{let i=Ne.getTransferDescription(e),a=t&&r===c.length-1;return U` <wui-transaction-list-item
          date=${n}
          direction=${e.direction}
          id=${a&&this.next?tb:``}
          status=${s}
          type=${l}
          .onlyDirectionIcon=${!0}
          .images=${[o[r]]}
          .descriptions=${[i]}
        ></wui-transaction-list-item>`}):U`
      <wui-transaction-list-item
        date=${n}
        .direction=${i}
        id=${t&&this.next?tb:``}
        status=${s}
        type=${l}
        .images=${o}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((n,r)=>{let i=t&&r===e.length-1;return U`${this.templateRenderTransaction(n,i)}`})}emptyStateActivity(){return U`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${[`3xl`,`xl`,`3xl`,`xl`]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return U`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page===`account`?U`${this.emptyStateAccount()}`:U`${this.emptyStateActivity()}`}templateLoading(){return this.page===`activity`?Array(nb).fill(U` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){H.push(`WalletReceive`)}createPaginationObserver(){let{projectId:e}=M.state;this.paginationObserver=new IntersectionObserver(([t])=>{t!=null&&t.isIntersecting&&!this.loading&&(be.fetchTransactions(this.address),R.sendEvent({type:`track`,event:`LOAD_MORE_TRANSACTIONS`,properties:{address:this.address,projectId:e,cursor:this.next,isSmartAccount:N.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var e,t;(e=this.paginationObserver)==null||e.disconnect();let n=(t=this.shadowRoot)==null?void 0:t.querySelector(`#${tb}`);if(n){var r;(r=this.paginationObserver)==null||r.observe(n)}}getTransactionListItemProps(e){var t,n,r,i,a;let o=Fe.formatDate(e==null||(t=e.metadata)==null?void 0:t.minedAt),s=Ne.getTransactionDescriptions(e),c=e==null?void 0:e.transfers,l=e==null||(n=e.transfers)==null?void 0:n[0],u=!!l&&(e==null||(r=e.transfers)==null?void 0:r.every(e=>!!e.nft_info)),d=Ne.getTransactionImages(c);return{date:o,direction:l==null?void 0:l.direction,descriptions:s,isAllNFT:u,images:d,status:(i=e.metadata)==null?void 0:i.status,transfers:c,type:(a=e.metadata)==null?void 0:a.operationType}}};rb.styles=$y,eb([q()],rb.prototype,`page`,void 0),eb([K()],rb.prototype,`address`,void 0),eb([K()],rb.prototype,`transactionsByYear`,void 0),eb([K()],rb.prototype,`loading`,void 0),eb([K()],rb.prototype,`empty`,void 0),eb([K()],rb.prototype,`next`,void 0),rb=eb([V(`w3m-activity-list`)],rb);var ib=G`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`,ab=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ob=class extends W{render(){return U` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${[`xl`,`s`,`l`,`l`]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):``}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?U`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:U`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){H.push(`WalletSendSelectToken`)}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let e=this.token.price*this.sendTokenAmount;return U`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${e?`$${De.formatNumberToLocalString(e,2)}`:`Incorrect value`}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?U` <wui-text variant="small-400" color="error-100">
          ${De.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:U` <wui-text variant="small-400" color="fg-200">
        ${De.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?U`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:U`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){ve.setTokenAmount(e.detail)}onMaxClick(){if(this.token&&this.gasPrice!==void 0){let e=this.token.address===void 0||Object.values(je.NATIVE_TOKEN_ADDRESS).some(e=>{var t;return((t=this.token)==null?void 0:t.address)===e}),t=Ce.bigNumber(this.gasPrice).shiftedBy(-this.token.quantity.decimals),n=e?Ce.bigNumber(this.token.quantity.numeric).minus(t):Ce.bigNumber(this.token.quantity.numeric);ve.setTokenAmount(Number(n.toFixed(20)))}}onBuyClick(){H.push(`OnRampProviders`)}};ob.styles=ib,ab([q({type:Object})],ob.prototype,`token`,void 0),ab([q({type:Number})],ob.prototype,`sendTokenAmount`,void 0),ab([q({type:Number})],ob.prototype,`gasPriceInUSD`,void 0),ab([q({type:Number})],ob.prototype,`gasPrice`,void 0),ob=ab([V(`w3m-input-token`)],ob);var sb=G`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`,cb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},lb=class extends W{constructor(){super(...arguments),this.inputElementRef=Ie(),this.instructionElementRef=Ie(),this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=B.debounce(async e=>{let t=await k.getEnsAddress(e);if(ve.setLoading(!1),t){ve.setReceiverProfileName(e),ve.setReceiverAddress(t);let n=await k.getEnsAvatar(e);n&&ve.setReceiverProfileImageUrl(n)}else ve.setReceiverAddress(e),ve.setReceiverProfileName(void 0),ve.setReceiverProfileImageUrl(void 0)})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return U` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${[`2xl`,`l`,`xl`,`l`]}
    >
      <wui-text
        ${Le(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${Le(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??``}
        autocomplete="off"
      >
${this.value??``}</textarea
      >
    </wui-flex>`}async focusInput(){if(this.instructionElementRef.value){var e;this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents=`none`,(e=this.inputElementRef.value)==null||e.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length)}}async focusInstruction(){if(this.instructionElementRef.value){var e;this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents=`auto`,(e=this.inputElementRef.value)==null||e.blur()}}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:`ease`,fill:`forwards`}).finished}onBoxClick(){!this.value&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.value&&this.instructionHidden&&!this.pasting&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;let e=await navigator.clipboard.readText();ve.setReceiverAddress(e),this.focusInput()}onInputChange(e){this.pasting=!1;let t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),ve.setLoading(!0),this.onDebouncedSearch(t.value)}};lb.styles=sb,cb([q()],lb.prototype,`value`,void 0),cb([K()],lb.prototype,`instructionHidden`,void 0),cb([K()],lb.prototype,`pasting`,void 0),lb=cb([V(`w3m-input-address`)],lb);var ub=G`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`,db=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},fb=class extends W{render(){return U` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${J(De.formatNumberToLocalString(this.networkFee,2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${De.getTruncateString({string:this.receiverAddress??``,charsStart:4,charsEnd:4,truncate:`middle`})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){var e;return(e=this.caipNetwork)!=null&&e.name?U` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${J(z.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&H.push(`Networks`,{network:e})}};fb.styles=ub,db([q()],fb.prototype,`receiverAddress`,void 0),db([q({type:Object})],fb.prototype,`caipNetwork`,void 0),db([q({type:Number})],fb.prototype,`networkFee`,void 0),fb=db([V(`w3m-wallet-send-details`)],fb);var pb=G`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,mb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},hb=class extends W{constructor(){super(),this.unsubscribe=[],this.open=_e.state.open,this.message=_e.state.message,this.triggerRect=_e.state.triggerRect,this.variant=_e.state.variant,this.unsubscribe.push(_e.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;let e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?`flex`:`none`};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,U`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};hb.styles=[pb],mb([K()],hb.prototype,`open`,void 0),mb([K()],hb.prototype,`message`,void 0),mb([K()],hb.prototype,`triggerRect`,void 0),mb([K()],hb.prototype,`variant`,void 0),hb=mb([V(`w3m-tooltip`)],hb);var gb=G`
  :host {
    width: 100%;
    display: block;
  }
`,_b=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},vb=class extends W{constructor(){super(),this.unsubscribe=[],this.text=``,this.open=_e.state.open,this.unsubscribe.push(H.subscribeKey(`view`,()=>{_e.hide()}),A.subscribeKey(`open`,e=>{e||_e.hide()}),_e.subscribeKey(`open`,e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),_e.hide()}render(){return U`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return U`<slot></slot> `}onMouseEnter(){let e=this.getBoundingClientRect();this.open||_e.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:`shade`})}onMouseLeave(e){this.contains(e.relatedTarget)||_e.hide()}};vb.styles=[gb],_b([q()],vb.prototype,`text`,void 0),_b([K()],vb.prototype,`open`,void 0),vb=_b([V(`w3m-tooltip-trigger`)],vb);var yb=G`
  :host > wui-flex:first-child {
    margin-top: var(--wui-spacing-s);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,bb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},xb=2,Sb=6,Cb=class extends W{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.connector=this.connectors.find(e=>e.type===`AUTH`),this.unsubscribe.push(P.subscribeKey(`connectors`,e=>{this.connectors=e,this.connector=this.connectors.find(e=>e.type===`AUTH`)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.connector?U`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        .padding=${[`0`,`0`,`xs`,`0`]}
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
      ${this.separatorTemplate()}
    `:null}topViewTemplate(){var e,t;return!((e=this.connector)==null||(e=e.socials)==null)&&e.length?this.connector.socials.length===2?U` <wui-flex gap="xs">
        ${this.connector.socials.slice(0,xb).map(e=>U`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
            ></wui-logo-select>`)}
      </wui-flex>`:U` <wui-list-social
      data-testid=${`social-selector-${(t=this.connector)==null||(t=t.socials)==null?void 0:t[0]}`}
      @click=${()=>{var e;this.onSocialClick((e=this.connector)==null||(e=e.socials)==null?void 0:e[0])}}
      logo=${J(this.connector.socials[0])}
      align="center"
      name=${`Continue with ${this.connector.socials[0]}`}
    ></wui-list-social>`:null}bottomViewTemplate(){var e,t,n;return!(!((e=this.connector)==null||(e=e.socials)==null)&&e.length)||((t=this.connector)==null?void 0:t.socials.length)<=xb?null:((n=this.connector)==null?void 0:n.socials.length)>Sb?U`<wui-flex gap="xs">
        ${this.connector.socials.slice(1,Sb-1).map(e=>U`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
            ></wui-logo-select>`)}
        <wui-logo-select logo="more" @click=${this.onMoreSocialsClick.bind(this)}></wui-logo-select>
      </wui-flex>`:U`<wui-flex gap="xs">
      ${this.connector.socials.slice(1,this.connector.socials.length).map(e=>U`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
          ></wui-logo-select>`)}
    </wui-flex>`}separatorTemplate(){return this.connectors.find(e=>e.type===`WALLET_CONNECT`)?U`<wui-separator text="or"></wui-separator>`:null}onMoreSocialsClick(){H.push(`ConnectSocials`)}async onSocialClick(e){if(e&&(N.setSocialProvider(e,L.state.activeChain),R.sendEvent({type:`track`,event:`SOCIAL_LOGIN_STARTED`,properties:{provider:e}})),e===_h.Farcaster){H.push(`ConnectingFarcaster`);let e=P.getAuthConnector();if(e&&!N.state.farcasterUrl)try{let{url:t}=await e.provider.getFarcasterUri();N.setFarcasterUrl(t,L.state.activeChain)}catch(e){H.goBack(),I.showError(e)}}else{H.push(`ConnectingSocial`);let r=P.getAuthConnector();this.popupWindow=B.returnOpenHref(``,`popupWindow`,`width=600,height=800,scrollbars=yes`);try{if(r&&e){let{uri:n}=await r.provider.getSocialRedirectUri({provider:e});if(this.popupWindow&&n)N.setSocialWindow(this.popupWindow,L.state.activeChain),this.popupWindow.location.href=n;else{var t;throw(t=this.popupWindow)==null||t.close(),Error(`Something went wrong`)}}}catch{var n;(n=this.popupWindow)==null||n.close(),I.showError(`Something went wrong`)}}}};Cb.styles=yb,bb([K()],Cb.prototype,`connectors`,void 0),Cb=bb([V(`w3m-social-login-widget`)],Cb);var wb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Tb=class extends W{render(){return U`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list></w3m-connector-list>
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>
    `}};Tb=wb([V(`w3m-wallet-login-list`)],Tb);var Eb=G`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,Db=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ob=class extends W{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.connector=this.connectors.find(e=>e.type===`AUTH`),this.unsubscribe.push(P.subscribeKey(`connectors`,e=>{this.connectors=e,this.connector=this.connectors.find(e=>e.type===`AUTH`)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return(e=this.connector)!=null&&e.socials?U` <wui-flex flexDirection="column" gap="xs">
      ${this.connector.socials.map(e=>U`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            name=${e}
            logo=${e}
          ></wui-list-social>`)}
    </wui-flex>`:null}async onSocialClick(e){if(e&&(N.setSocialProvider(e,L.state.activeChain),R.sendEvent({type:`track`,event:`SOCIAL_LOGIN_STARTED`,properties:{provider:e}})),e===_h.Farcaster){H.push(`ConnectingFarcaster`);let e=P.getAuthConnector();if(e&&!N.state.farcasterUrl)try{let{url:t}=await e.provider.getFarcasterUri();N.setFarcasterUrl(t,L.state.activeChain)}catch(e){H.goBack(),I.showError(e)}}else{H.push(`ConnectingSocial`);let r=P.getAuthConnector();this.popupWindow=B.returnOpenHref(``,`popupWindow`,`width=600,height=800,scrollbars=yes`);try{if(r&&e){let{uri:n}=await r.provider.getSocialRedirectUri({provider:e});if(this.popupWindow&&n)N.setSocialWindow(this.popupWindow,L.state.activeChain),this.popupWindow.location.href=n;else{var t;throw(t=this.popupWindow)==null||t.close(),Error(`Something went wrong`)}}}catch{var n;(n=this.popupWindow)==null||n.close(),I.showError(`Something went wrong`)}}}};Ob.styles=Eb,Db([K()],Ob.prototype,`connectors`,void 0),Ob=Db([V(`w3m-social-login-list`)],Ob);var kb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ab=class extends W{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey(`connectors`,e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>e.type===`ANNOUNCED`);return e!=null&&e.length?U`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>{var t;if((t=e.info)!=null&&t.rdns&&Ae.state.excludedRDNS){var n;if(Ae.state.excludedRDNS.includes(e==null||(n=e.info)==null?void 0:n.rdns))return null}return U`
            <wui-list-wallet
              imageSrc=${J(z.getConnectorImage(e))}
              name=${e.name??`Unknown`}
              @click=${()=>this.onConnector(e)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              .installed=${!0}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText=`display: none`,null)}onConnector(e){e.type===`WALLET_CONNECT`?B.isMobile()?H.push(`AllWallets`):H.push(`ConnectingWalletConnect`):H.push(`ConnectingExternal`,{connector:e})}};kb([K()],Ab.prototype,`connectors`,void 0),Ab=kb([V(`w3m-connect-announced-widget`)],Ab);var jb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Mb=class extends W{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey(`connectors`,e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{customWallets:e}=M.state;return e!=null&&e.length?U`<wui-flex flexDirection="column" gap="xs">
      ${this.filterOutDuplicateWallets(e).map(e=>U`
          <wui-list-wallet
            imageSrc=${J(z.getWalletImage(e))}
            name=${e.name??`Unknown`}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`:(this.style.cssText=`display: none`,null)}filterOutDuplicateWallets(e){let t=Pe.getRecentWallets(),n=this.connectors.map(e=>{var t;return(t=e.info)==null?void 0:t.rdns}).filter(Boolean),r=t.map(e=>e.rdns).filter(Boolean),i=n.concat(r);if(i.includes(`io.metamask.mobile`)&&B.isMobile()){let e=i.indexOf(`io.metamask.mobile`);i[e]=`io.metamask`}return e.filter(e=>!i.includes(String(e==null?void 0:e.rdns)))}onConnectWallet(e){H.push(`ConnectingWalletConnect`,{wallet:e})}};jb([K()],Mb.prototype,`connectors`,void 0),Mb=jb([V(`w3m-connect-custom-widget`)],Mb);var Nb={filterOutDuplicatesByRDNS(e){let t=M.state.enableEIP6963?P.state.connectors:[],n=Pe.getRecentWallets(),r=t.map(e=>{var t;return(t=e.info)==null?void 0:t.rdns}).filter(Boolean),i=n.map(e=>e.rdns).filter(Boolean),a=r.concat(i);if(a.includes(`io.metamask.mobile`)&&B.isMobile()){let e=a.indexOf(`io.metamask.mobile`);a[e]=`io.metamask`}return e.filter(e=>!a.includes(String(e==null?void 0:e.rdns)))},filterOutDuplicatesByIds(e){let t=P.state.connectors.filter(e=>e.type===`ANNOUNCED`||e.type===`INJECTED`),n=Pe.getRecentWallets(),r=t.map(e=>e.explorerId),i=n.map(e=>e.id),a=r.concat(i);return e.filter(e=>!a.includes(e==null?void 0:e.id))},filterOutDuplicateWallets(e){let t=this.filterOutDuplicatesByRDNS(e);return this.filterOutDuplicatesByIds(t)}},Pb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Fb=class extends W{constructor(){super(...arguments),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{featured:e}=Ae.state;return e.length?U`
      <wui-flex flexDirection="column" gap="xs">
        ${Nb.filterOutDuplicateWallets(e).map(e=>U`
            <wui-list-wallet
              imageSrc=${J(z.getWalletImage(e))}
              name=${e.name??`Unknown`}
              @click=${()=>this.onConnectWallet(e)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText=`display: none`,null)}onConnectWallet(e){let t=P.getConnector(e.id,e.rdns);t?H.push(`ConnectingExternal`,{connector:t}):H.push(`ConnectingWalletConnect`,{wallet:e})}};Fb=Pb([V(`w3m-connect-featured-widget`)],Fb);var Ib=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Lb=class extends W{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey(`connectors`,e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;let t=this.connectors.filter(e=>e.type===`INJECTED`);return!(t!=null&&t.length)||t.length===1&&((e=t[0])==null?void 0:e.name)===`Browser Wallet`&&!B.isMobile()?(this.style.cssText=`display: none`,null):U`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>{var t;if(!B.isMobile()&&e.name===`Browser Wallet`)return null;if(!k.checkInstalled(void 0,e.chain))return this.style.cssText=`display: none`,null;if((t=e.info)!=null&&t.rdns&&Ae.state.excludedRDNS){var n;if(Ae.state.excludedRDNS.includes(e==null||(n=e.info)==null?void 0:n.rdns))return null}return U`
            <wui-list-wallet
              imageSrc=${J(z.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??`Unknown`}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){L.setActiveConnector(e),H.push(`ConnectingExternal`,{connector:e})}};Ib([K()],Lb.prototype,`connectors`,void 0),Lb=Ib([V(`w3m-connect-injected-widget`)],Lb);var Rb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},zb=class extends W{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey(`connectors`,e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>e.type===`MULTI_CHAIN`&&e.name!==`WalletConnect`);return e!=null&&e.length?U`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>U`
            <wui-list-wallet
              imageSrc=${J(z.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??`Unknown`}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText=`display: none`,null)}onConnector(e){L.setActiveConnector(e),H.push(`ConnectingMultiChain`)}};Rb([K()],zb.prototype,`connectors`,void 0),zb=Rb([V(`w3m-connect-multi-chain-widget`)],zb);var Bb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Vb=class extends W{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey(`connectors`,e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>e.type===`EXTERNAL`).filter(e=>e.id!==`coinbaseWalletSDK`);return e!=null&&e.length?U`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>U`
            <wui-list-wallet
              imageSrc=${J(z.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??`Unknown`}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText=`display: none`,null)}onConnector(e){H.push(`ConnectingExternal`,{connector:e})}};Bb([K()],Vb.prototype,`connectors`,void 0),Vb=Bb([V(`w3m-connect-external-widget`)],Vb);var Hb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ub=class extends W{render(){let e=Pe.getRecentWallets();return e!=null&&e.length?U`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>U`
            <wui-list-wallet
              imageSrc=${J(z.getWalletImage(e))}
              name=${e.name??`Unknown`}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText=`display: none`,null)}onConnectWallet(e){H.push(`ConnectingWalletConnect`,{wallet:e})}};Ub=Hb([V(`w3m-connect-recent-widget`)],Ub);var Wb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Gb=class extends W{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey(`connectors`,e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.connectors.find(e=>e.type===`WALLET_CONNECT`))return null;let{recommended:e}=Ae.state,{customWallets:t,featuredWalletIds:n}=M.state,{connectors:r}=P.state,i=Pe.getRecentWallets(),a=r.filter(e=>e.type===`INJECTED`||e.type===`ANNOUNCED`).filter(e=>e.name!==`Browser Wallet`);if(n||t||!e.length)return this.style.cssText=`display: none`,null;let o=a.length+i.length,s=Math.max(0,2-o),c=Nb.filterOutDuplicateWallets(e).slice(0,s);return c.length?U`
      <wui-flex flexDirection="column" gap="xs">
        ${c.map(e=>U`
            <wui-list-wallet
              imageSrc=${J(z.getWalletImage(e))}
              name=${(e==null?void 0:e.name)??`Unknown`}
              @click=${()=>this.onConnectWallet(e)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText=`display: none`,null)}onConnectWallet(e){let t=P.getConnector(e.id,e.rdns);t?H.push(`ConnectingExternal`,{connector:t}):H.push(`ConnectingWalletConnect`,{wallet:e})}};Wb([K()],Gb.prototype,`connectors`,void 0),Gb=Wb([V(`w3m-connect-recommended-widget`)],Gb);var Kb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},qb=class extends W{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey(`connectors`,e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(B.isMobile())return this.style.cssText=`display: none`,null;let e=this.connectors.find(e=>e.type===`WALLET_CONNECT`);return e?U`
      <wui-list-wallet
        imageSrc=${J(z.getConnectorImage(e))}
        name=${e.name??`Unknown`}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:(this.style.cssText=`display: none`,null)}onConnector(e){e.type===`WALLET_CONNECT`?B.isMobile()?H.push(`AllWallets`):H.push(`ConnectingWalletConnect`):H.push(`ConnectingExternal`,{connector:e})}};Kb([K()],qb.prototype,`connectors`,void 0),qb=Kb([V(`w3m-connect-walletconnect-widget`)],qb);var Jb=G`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,Yb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xb=class extends W{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey(`connectors`,e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{custom:e,recent:t,announced:n,injected:r,multiChain:i,recommended:a,featured:o,external:s}=this.getConnectorsByType();return U`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connect-walletconnect-widget></w3m-connect-walletconnect-widget>
        ${t.length?U`<w3m-connect-recent-widget></w3m-connect-recent-widget>`:null}
        ${i.length?U`<w3m-connect-multi-chain-widget></w3m-connect-multi-chain-widget>`:null}
        ${n.length?U`<w3m-connect-announced-widget></w3m-connect-announced-widget>`:null}
        ${r.length?U`<w3m-connect-injected-widget></w3m-connect-injected-widget>`:null}
        ${o.length?U`<w3m-connect-featured-widget></w3m-connect-featured-widget>`:null}
        ${e!=null&&e.length?U`<w3m-connect-custom-widget></w3m-connect-custom-widget>`:null}
        ${s.length?U`<w3m-connect-external-widget></w3m-connect-external-widget>`:null}
        ${a.length?U`<w3m-connect-recommended-widget></w3m-connect-recommended-widget>`:null}
      </wui-flex>
    `}getConnectorsByType(){let{featured:e,recommended:t}=Ae.state,{customWallets:n}=M.state,r=Pe.getRecentWallets(),i=Nb.filterOutDuplicateWallets(t),a=Nb.filterOutDuplicateWallets(e),o=this.connectors.filter(e=>e.type===`MULTI_CHAIN`),s=this.connectors.filter(e=>e.type===`ANNOUNCED`),c=this.connectors.filter(e=>e.type===`INJECTED`),l=this.connectors.filter(e=>e.type===`EXTERNAL`),u=L.state.activeChain===Se.CHAIN.EVM?M.state.enableEIP6963:!0;return{custom:n,recent:r,external:l,multiChain:o,announced:u?s:[],injected:u?c:[],recommended:i,featured:a}}};Xb.styles=Jb,Yb([K()],Xb.prototype,`connectors`,void 0),Xb=Yb([V(`w3m-connector-list`)],Xb);var Zb=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qb=class extends W{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.count=Ae.state.count,this.unsubscribe.push(P.subscribeKey(`connectors`,e=>this.connectors=e),Ae.subscribeKey(`count`,e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>e.type===`WALLET_CONNECT`),{allWallets:t}=M.state;if(!e||t===`HIDE`||t===`ONLY_MOBILE`&&!B.isMobile())return null;let n=Ae.state.featured.length,r=this.count+n,i=r<10?r:Math.floor(r/10)*10,a=i<r?`${i}+`:`${i}`;return U`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}onAllWallets(){R.sendEvent({type:`track`,event:`CLICK_ALL_WALLETS`}),H.push(`AllWallets`)}};Zb([K()],Qb.prototype,`connectors`,void 0),Zb([K()],Qb.prototype,`count`,void 0),Qb=Zb([V(`w3m-all-wallets-widget`)],Qb);var $b=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ex=class extends W{constructor(){super(...arguments),this.socialProvider=Pe.getConnectedSocialProvider(),this.socialUsername=Pe.getConnectedSocialUsername()}render(){let e=Pe.getConnectedConnector(),t=P.getAuthConnector();if(!t||e!==`AUTH`)return this.style.cssText=`display: none`,null;let n=t.provider.getEmail()??``;return U`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??`mail`}
        iconSize=${this.socialProvider?`xxl`:`sm`}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(n,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(n)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,t){t||H.push(`UpdateEmailWallet`,{email:e})}getAuthName(e){return this.socialUsername?this.socialProvider===`discord`&&this.socialUsername.endsWith(`0`)?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};ex=$b([V(`w3m-account-auth-button`)],ex);var tx=`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`,nx=new Map([[8217,`apostrophe`],[8260,`fraction slash`],[12539,`middle dot`]]),rx=4;function ix(e){let t=0;function n(){return e[t++]<<8|e[t++]}let r=n(),i=1,a=[0,1];for(let e=1;e<r;e++)a.push(i+=n());let o=n(),s=t;t+=o;let c=0,l=0;function u(){return c==0&&(l=l<<8|e[t++],c=8),l>>--c&1}let d=2**31,f=d>>>1,p=f>>1,m=d-1,h=0;for(let e=0;e<31;e++)h=h<<1|u();let g=[],_=0,v=d;for(;;){let e=Math.floor(((h-_+1)*i-1)/v),t=0,n=r;for(;n-t>1;){let r=t+n>>>1;e<a[r]?n=r:t=r}if(t==0)break;g.push(t);let o=_+Math.floor(v*a[t]/i),s=_+Math.floor(v*a[t+1]/i)-1;for(;((o^s)&f)==0;)h=h<<1&m|u(),o=o<<1&m,s=s<<1&m|1;for(;o&~s&p;)h=h&f|h<<1&m>>>1|u(),o=o<<1^f,s=(s^f)<<1|f|1;_=o,v=1+s-o}let y=r-4;return g.map(t=>{switch(t-y){case 3:return y+65792+(e[s++]<<16|e[s++]<<8|e[s++]);case 2:return y+256+(e[s++]<<8|e[s++]);case 1:return y+e[s++];default:return t-1}})}function ax(e){let t=0;return()=>e[t++]}function ox(e){return ax(ix(sx(e)))}function sx(e){let t=[];[...`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`].forEach((e,n)=>t[e.charCodeAt(0)]=n);let n=e.length,r=new Uint8Array(6*n>>3);for(let i=0,a=0,o=0,s=0;i<n;i++)s=s<<6|t[e.charCodeAt(i)],o+=6,o>=8&&(r[a++]=s>>(o-=8));return r}function cx(e){return e&1?~e>>1:e>>1}function lx(e,t){let n=Array(e);for(let r=0,i=0;r<e;r++)n[r]=i+=cx(t());return n}function ux(e,t=0){let n=[];for(;;){let r=e(),i=e();if(!i)break;t+=r;for(let e=0;e<i;e++)n.push(t+e);t+=i+1}return n}function dx(e){return px(()=>{let t=ux(e);if(t.length)return t})}function fx(e){let t=[];for(;;){let n=e();if(n==0)break;t.push(hx(n,e))}for(;;){let n=e()-1;if(n<0)break;t.push(gx(n,e))}return t.flat()}function px(e){let t=[];for(;;){let n=e(t.length);if(!n)break;t.push(n)}return t}function mx(e,t,n){let r=Array(e).fill().map(()=>[]);for(let i=0;i<t;i++)lx(e,n).forEach((e,t)=>r[t].push(e));return r}function hx(e,t){let n=1+t(),r=t(),i=px(t);return mx(i.length,1+e,t).flatMap((e,t)=>{let[a,...o]=e;return Array(i[t]).fill().map((e,t)=>{let i=t*r;return[a+t*n,o.map(e=>e+i)]})})}function gx(e,t){return mx(1+t(),1+e,t).map(e=>[e[0],e.slice(1)])}function _x(e){let t=[],n=ux(e);return i(r([]),[]),t;function r(t){return{S:e(),B:px(()=>{let t=ux(e).map(e=>n[e]);if(t.length)return r(t)}),Q:t}}function i({S:e,B:n},r,a){if(!(e&4&&a===r[r.length-1])){e&2&&(a=r[r.length-1]),e&1&&t.push(r);for(let e of n)for(let t of e.Q)i(e,[...r,t],a)}}}function vx(e){return e.toString(16).toUpperCase().padStart(2,`0`)}function yx(e){return`{${vx(e)}}`}function bx(e){let t=[];for(let n=0,r=e.length;n<r;){let r=e.codePointAt(n);n+=r<65536?1:2,t.push(r)}return t}function xx(e){let t=4096,n=e.length;if(n<t)return String.fromCodePoint(...e);let r=[];for(let i=0;i<n;)r.push(String.fromCodePoint(...e.slice(i,i+=t)));return r.join(``)}function Sx(e,t){let n=e.length,r=n-t.length;for(let i=0;r==0&&i<n;i++)r=e[i]-t[i];return r}var Cx=`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`,wx=44032,Tx=4352,Ex=4449,Dx=4519,Ox=19,kx=21,Ax=28,jx=kx*Ax,Mx=wx+Ox*jx,Nx=Tx+Ox,Px=Ex+kx,Fx=Dx+Ax;function Ix(e){return e>>24&255}function Lx(e){return e&16777215}var Rx,zx,Bx,Vx;function Hx(){let e=ox(Cx);Rx=new Map(dx(e).flatMap((e,t)=>e.map(e=>[e,t+1<<24]))),zx=new Set(ux(e)),Bx=new Map,Vx=new Map;for(let[t,n]of fx(e)){if(!zx.has(t)&&n.length==2){let[e,r]=n,i=Vx.get(e);i||(i=new Map,Vx.set(e,i)),i.set(r,t)}Bx.set(t,n.reverse())}}function Ux(e){return e>=wx&&e<Mx}function Wx(e,t){if(e>=Tx&&e<Nx&&t>=Ex&&t<Px)return wx+(e-Tx)*jx+(t-Ex)*Ax;if(Ux(e)&&t>Dx&&t<Fx&&(e-wx)%Ax==0)return e+(t-Dx);{let n=Vx.get(e);return n&&(n=n.get(t),n)?n:-1}}function Gx(e){Rx||Hx();let t=[],n=[],r=!1;function i(e){let n=Rx.get(e);n&&(r=!0,e|=n),t.push(e)}for(let r of e)for(;;){if(r<128)t.push(r);else if(Ux(r)){let e=r-wx,t=e/jx|0,n=e%jx/Ax|0,a=e%Ax;i(Tx+t),i(Ex+n),a>0&&i(Dx+a)}else{let e=Bx.get(r);e?n.push(...e):i(r)}if(!n.length)break;r=n.pop()}if(r&&t.length>1){let e=Ix(t[0]);for(let n=1;n<t.length;n++){let r=Ix(t[n]);if(r==0||e<=r){e=r;continue}let i=n-1;for(;;){let n=t[i+1];if(t[i+1]=t[i],t[i]=n,!i||(e=Ix(t[--i]),e<=r))break}e=Ix(t[n])}}return t}function Kx(e){let t=[],n=[],r=-1,i=0;for(let a of e){let e=Ix(a),o=Lx(a);if(r==-1)e==0?r=o:t.push(o);else if(i>0&&i>=e)e==0?(t.push(r,...n),n.length=0,r=o):n.push(o),i=e;else{let a=Wx(r,o);a>=0?r=a:i==0&&e==0?(t.push(r),r=o):(n.push(o),i=e)}}return r>=0&&t.push(r,...n),t}function qx(e){return Gx(e).map(Lx)}function Jx(e){return Kx(Gx(e))}var Yx=45,Xx=`.`,Zx=65039,Qx=1,$x=e=>Array.from(e);function eS(e,t){return e.P.has(t)||e.Q.has(t)}var tS=class extends Array{get is_emoji(){return!0}},nS,rS,iS,aS,oS,sS,cS,lS,uS,dS,fS;function pS(){if(nS)return;let e=ox(tx),t=()=>ux(e),n=()=>new Set(t()),r=(e,t)=>t.forEach(t=>e.add(t));nS=new Map(fx(e)),rS=n(),iS=t(),aS=new Set(t().map(e=>iS[e])),iS=new Set(iS),oS=n(),n();let i=dx(e),a=e(),o=()=>{let e=new Set;return t().forEach(t=>r(e,i[t])),r(e,t()),e};sS=px(t=>{let n=px(e).map(e=>e+96);if(n.length){let r=t>=a;n[0]-=32,n=xx(n),r&&(n=`Restricted[${n}]`);let i=o(),s=o(),c=!e();return{N:n,P:i,Q:s,M:c,R:r}}}),cS=n(),lS=new Map;let s=t().concat($x(cS)).sort((e,t)=>e-t);s.forEach((t,n)=>{let r=e(),i=s[n]=r?s[n-r]:{V:[],M:new Map};i.V.push(t),cS.has(t)||lS.set(t,i)});for(let{V:e,M:t}of new Set(lS.values())){let n=[];for(let t of e){let e=sS.filter(e=>eS(e,t)),i=n.find(({G:t})=>e.some(e=>t.has(e)));i||(i={G:new Set,V:[]},n.push(i)),i.V.push(t),r(i.G,e)}let i=n.flatMap(e=>$x(e.G));for(let{G:e,V:r}of n){let n=new Set(i.filter(t=>!e.has(t)));for(let e of r)t.set(e,n)}}uS=new Set;let c=new Set,l=e=>uS.has(e)?c.add(e):uS.add(e);for(let e of sS){for(let t of e.P)l(t);for(let t of e.Q)l(t)}for(let e of uS)!lS.has(e)&&!c.has(e)&&lS.set(e,Qx);r(uS,qx(uS)),dS=_x(e).map(e=>tS.from(e)).sort(Sx),fS=new Map;for(let e of dS){let t=[fS];for(let n of e){let e=t.map(e=>{let t=e.get(n);return t||(t=new Map,e.set(n,t)),t});n===Zx?t.push(...e):t=e}for(let n of t)n.V=e}}function mS(e){return(xS(e)?``:`${hS(yS([e]))} `)+yx(e)}function hS(e){return`"${e}"\u200E`}function gS(e){if(e.length>=4&&e[2]==Yx&&e[3]==Yx)throw Error(`invalid label extension: "${xx(e.slice(0,4))}"`)}function _S(e){for(let t=e.lastIndexOf(95);t>0;)if(e[--t]!==95)throw Error(`underscore allowed only at start`)}function vS(e){let t=e[0],n=nx.get(t);if(n)throw kS(`leading ${n}`);let r=e.length,i=-1;for(let a=1;a<r;a++){t=e[a];let r=nx.get(t);if(r){if(i==a)throw kS(`${n} + ${r}`);i=a+1,n=r}}if(i==r)throw kS(`trailing ${n}`)}function yS(e,t=1/0,n=yx){let r=[];bS(e[0])&&r.push(`◌`),e.length>t&&(t>>=1,e=[...e.slice(0,t),8230,...e.slice(-t)]);let i=0,a=e.length;for(let t=0;t<a;t++){let a=e[t];xS(a)&&(r.push(xx(e.slice(i,t))),r.push(n(a)),i=t+1)}return r.push(xx(e.slice(i,a))),r.join(``)}function bS(e,t){return pS(),t?aS.has(e):iS.has(e)}function xS(e){return pS(),oS.has(e)}function SS(e){return ES(CS(e,Jx,MS))}function CS(e,t,n){if(!e)return[];pS();let r=0;return e.split(Xx).map(e=>{let i=bx(e),a={input:i,offset:r};r+=i.length+1;try{let e=a.tokens=jS(i,t,n),r=e.length,o;if(!r)throw Error(`empty label`);let s=a.output=e.flat();if(_S(s),!(a.emoji=r>1||e[0].is_emoji)&&s.every(e=>e<128))gS(s),o=`ASCII`;else{let t=e.flatMap(e=>e.is_emoji?[]:e);if(!t.length)o=`Emoji`;else{if(iS.has(s[0]))throw kS(`leading combining mark`);for(let t=1;t<r;t++){let n=e[t];if(!n.is_emoji&&iS.has(n[0]))throw kS(`emoji + combining mark: "${xx(e[t-1])} + ${yS([n[0]])}"`)}vS(s);let n=$x(new Set(t)),[i]=TS(n);AS(i,t),wS(i,n),o=i.N}}a.type=o}catch(e){a.error=e}return a})}function wS(e,t){let n,r=[];for(let e of t){let t=lS.get(e);if(t===Qx)return;if(t){let r=t.M.get(e);if(n=n?n.filter(e=>r.has(e)):$x(r),!n.length)return}else r.push(e)}if(n){for(let t of n)if(r.every(e=>eS(t,e)))throw Error(`whole-script confusable: ${e.N}/${t.N}`)}}function TS(e){let t=sS;for(let n of e){let e=t.filter(e=>eS(e,n));if(!e.length)throw sS.some(e=>eS(e,n))?OS(t[0],n):DS(n);if(t=e,e.length==1)break}return t}function ES(e){return e.map(({input:t,error:n,output:r})=>{if(n){let r=n.message;throw Error(e.length==1?r:`Invalid label ${hS(yS(t,63))}: ${r}`)}return xx(r)}).join(Xx)}function DS(e){return Error(`disallowed character: ${mS(e)}`)}function OS(e,t){let n=mS(t),r=sS.find(e=>e.P.has(t));return r&&(n=`${r.N} ${n}`),Error(`illegal mixture: ${e.N} + ${n}`)}function kS(e){return Error(`illegal placement: ${e}`)}function AS(e,t){for(let n of t)if(!eS(e,n))throw OS(e,n);if(e.M){let e=qx(t);for(let t=1,n=e.length;t<n;t++)if(aS.has(e[t])){let r=t+1;for(let i;r<n&&aS.has(i=e[r]);r++)for(let n=t;n<r;n++)if(e[n]==i)throw Error(`duplicate non-spacing marks: ${mS(i)}`);if(r-t>rx)throw Error(`excessive non-spacing marks: ${hS(yS(e.slice(t-1,r)))} (${r-t}/${rx})`);t=r}}}function jS(e,t,n){let r=[],i=[];for(e=e.slice().reverse();e.length;){let a=NS(e);if(a)i.length&&(r.push(t(i)),i=[]),r.push(n(a));else{let t=e.pop();if(uS.has(t))i.push(t);else{let e=nS.get(t);if(e)i.push(...e);else if(!rS.has(t))throw DS(t)}}}return i.length&&r.push(t(i)),r}function MS(e){return e.filter(e=>e!=Zx)}function NS(e,t){let n=fS,r,i=e.length;for(;i&&(n=n.get(e[--i]),n);){let{V:a}=n;a&&(r=a,t&&t.push(...e.slice(i).reverse()),e.length=i)}return r}Re();var PS=[`eth_accounts`,`eth_requestAccounts`,`eth_sendRawTransaction`,`eth_sign`,`eth_signTransaction`,`eth_signTypedData`,`eth_signTypedData_v3`,`eth_signTypedData_v4`,`eth_sendTransaction`,`personal_sign`,`wallet_switchEthereumChain`,`wallet_addEthereumChain`,`wallet_getPermissions`,`wallet_requestPermissions`,`wallet_registerOnboarding`,`wallet_watchAsset`,`wallet_scanQRCode`,`wallet_sendCalls`,`wallet_getCapabilities`,`wallet_getCallsStatus`,`wallet_showCallsStatus`];function FS(e){if(e)return{"--w3m-font-family":e[`--wcm-font-family`],"--w3m-accent":e[`--wcm-accent-color`],"--w3m-color-mix":e[`--wcm-background-color`],"--w3m-z-index":e[`--wcm-z-index`]?Number(e[`--wcm-z-index`]):void 0,"--w3m-qr-color":e[`--wcm-accent-color`],"--w3m-font-size-master":e[`--wcm-text-medium-regular-size`],"--w3m-border-radius-master":e[`--wcm-container-border-radius`],"--w3m-color-mix-strength":0}}var IS=e=>{let[t,n]=e.split(`:`);return RS({id:n,caipNetworkId:e,chainNamespace:t,name:``,nativeCurrency:{name:``,symbol:``,decimals:8},rpcUrls:{default:{http:[`https://rpc.walletconnect.org/v1`]}}})};function LS(e){var t,n,r,i,a,o,s;let c=(t=e.chains)==null?void 0:t.map(IS).filter(Boolean);if(c.length===0)throw Error(`At least one chain must be specified`);let l=c.find(t=>{var n;return t.id===((n=e.defaultChain)==null?void 0:n.id)}),u={projectId:e.projectId,networks:c,themeMode:e.themeMode,themeVariables:FS(e.themeVariables),chainImages:e.chainImages,connectorImages:e.walletImages,defaultNetwork:l,metadata:{...e.metadata,name:((n=e.metadata)==null?void 0:n.name)||`WalletConnect`,description:((r=e.metadata)==null?void 0:r.description)||`Connect to WalletConnect-compatible wallets`,url:((i=e.metadata)==null?void 0:i.url)||`https://walletconnect.org`,icons:((a=e.metadata)==null?void 0:a.icons)||[`https://walletconnect.org/walletconnect-logo.png`]},showWallets:!0,featuredWalletIds:e.explorerRecommendedWalletIds===`NONE`?[]:Array.isArray(e.explorerRecommendedWalletIds)?e.explorerRecommendedWalletIds:[],excludeWalletIds:e.explorerExcludedWalletIds===`ALL`?[]:Array.isArray(e.explorerExcludedWalletIds)?e.explorerExcludedWalletIds:[],enableEIP6963:!1,enableInjected:!1,enableCoinbase:!0,enableWalletConnect:!0,features:{email:!1,socials:!1}};if((o=e.mobileWallets)!=null&&o.length||(s=e.desktopWallets)!=null&&s.length){let t=[...(e.mobileWallets||[]).map(e=>({id:e.id,name:e.name,links:e.links})),...(e.desktopWallets||[]).map(e=>({id:e.id,name:e.name,links:{native:e.links.native,universal:e.links.universal}}))],n=[...u.featuredWalletIds||[],...u.excludeWalletIds||[]],r=t.filter(e=>!n.includes(e.id));r.length&&(u.customWallets=r)}return u}function RS(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}Object.freeze({__proto__:null,convertWCMToAppKitOptions:LS,defineChain:RS}),Ve.base16,{...Ve},Xe(),Ue(),ze(),Be(),He(),We(),Ye(),qe(),Ge(),Je(),Ke();var zS=`:`;function BS(e){let{namespace:t,reference:n}=e;return[t,n].join(zS)}function VS(e){let[t,n,r]=e.split(zS);return{namespace:t,reference:n,address:r}}function HS(e,t){let n=[];return e.forEach(e=>{let r=t(e);n.includes(r)||n.push(r)}),n}function US(e){let{namespace:t,reference:n}=VS(e);return BS({namespace:t,reference:n})}function WS(e){return HS(e,US)}var GS=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{};function KS(e){var t=e.default;if(typeof t==`function`){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,`__esModule`,{value:!0}),Object.keys(e).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}),n}var qS={exports:{}};(function(e){(function(){var t=`input is invalid type`,n=`finalize already called`,r=typeof window==`object`,i=r?window:{};i.JS_SHA3_NO_WINDOW&&(r=!1);var a=!r&&typeof self==`object`;!i.JS_SHA3_NO_NODE_JS&&typeof process==`object`&&process.versions&&process.versions.node?i=GS:a&&(i=self);var o=!i.JS_SHA3_NO_COMMON_JS&&e.exports,s=!i.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<`u`,c=`0123456789abcdef`.split(``),l=[31,7936,2031616,520093696],u=[4,1024,262144,67108864],d=[1,256,65536,16777216],f=[6,1536,393216,100663296],p=[0,8,16,24],m=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],h=[224,256,384,512],g=[128,256],_=[`hex`,`buffer`,`arrayBuffer`,`array`,`digest`],v={128:168,256:136};(i.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)===`[object Array]`}),s&&(i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e==`object`&&e.buffer&&e.buffer.constructor===ArrayBuffer});for(var y=function(e,t,n){return function(r){return new oe(e,t,e).update(r)[n]()}},b=function(e,t,n){return function(r,i){return new oe(e,t,i).update(r)[n]()}},x=function(e,t,n){return function(t,r,i,a){return w[`cshake`+e].update(t,r,i,a)[n]()}},ee=function(e,t,n){return function(t,r,i,a){return w[`kmac`+e].update(t,r,i,a)[n]()}},S=function(e,t,n,r){for(var i=0;i<_.length;++i){var a=_[i];e[a]=t(n,r,a)}return e},C=function(e,t){var n=y(e,t,`hex`);return n.create=function(){return new oe(e,t,e)},n.update=function(e){return n.create().update(e)},S(n,y,e,t)},te=[{name:`keccak`,padding:d,bits:h,createMethod:C},{name:`sha3`,padding:f,bits:h,createMethod:C},{name:`shake`,padding:l,bits:g,createMethod:function(e,t){var n=b(e,t,`hex`);return n.create=function(n){return new oe(e,t,n)},n.update=function(e,t){return n.create(t).update(e)},S(n,b,e,t)}},{name:`cshake`,padding:u,bits:g,createMethod:function(e,t){var n=v[e],r=x(e,t,`hex`);return r.create=function(r,i,a){return!i&&!a?w[`shake`+e].create(r):new oe(e,t,r).bytepad([i,a],n)},r.update=function(e,t,n,i){return r.create(t,n,i).update(e)},S(r,x,e,t)}},{name:`kmac`,padding:u,bits:g,createMethod:function(e,t){var n=v[e],r=ee(e,t,`hex`);return r.create=function(r,i,a){return new se(e,t,i).bytepad([`KMAC`,a],n).bytepad([r],n)},r.update=function(e,t,n,i){return r.create(e,n,i).update(t)},S(r,ee,e,t)}}],w={},T=[],ne=0;ne<te.length;++ne)for(var E=te[ne],D=E.bits,re=0;re<D.length;++re){var ie=E.name+`_`+D[re];if(T.push(ie),w[ie]=E.createMethod(D[re],E.padding),E.name!==`sha3`){var ae=E.name+D[re];T.push(ae),w[ae]=w[ie]}}function oe(e,t,n){this.blocks=[],this.s=[],this.padding=t,this.outputBits=n,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=n>>5,this.extraBytes=(n&31)>>3;for(var r=0;r<50;++r)this.s[r]=0}oe.prototype.update=function(e){if(this.finalized)throw Error(n);var r,i=typeof e;if(i!==`string`){if(i===`object`){if(e===null)throw Error(t);if(s&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!s||!ArrayBuffer.isView(e)))throw Error(t)}else throw Error(t);r=!0}for(var a=this.blocks,o=this.byteCount,c=e.length,l=this.blockCount,u=0,d=this.s,f,m;u<c;){if(this.reset)for(this.reset=!1,a[0]=this.block,f=1;f<l+1;++f)a[f]=0;if(r)for(f=this.start;u<c&&f<o;++u)a[f>>2]|=e[u]<<p[f++&3];else for(f=this.start;u<c&&f<o;++u)m=e.charCodeAt(u),m<128?a[f>>2]|=m<<p[f++&3]:m<2048?(a[f>>2]|=(192|m>>6)<<p[f++&3],a[f>>2]|=(128|m&63)<<p[f++&3]):m<55296||m>=57344?(a[f>>2]|=(224|m>>12)<<p[f++&3],a[f>>2]|=(128|m>>6&63)<<p[f++&3],a[f>>2]|=(128|m&63)<<p[f++&3]):(m=65536+((m&1023)<<10|e.charCodeAt(++u)&1023),a[f>>2]|=(240|m>>18)<<p[f++&3],a[f>>2]|=(128|m>>12&63)<<p[f++&3],a[f>>2]|=(128|m>>6&63)<<p[f++&3],a[f>>2]|=(128|m&63)<<p[f++&3]);if(this.lastByteIndex=f,f>=o){for(this.start=f-o,this.block=a[l],f=0;f<l;++f)d[f]^=a[f];ce(d),this.reset=!0}else this.start=f}return this},oe.prototype.encode=function(e,t){var n=e&255,r=1,i=[n];for(e>>=8,n=e&255;n>0;)i.unshift(n),e>>=8,n=e&255,++r;return t?i.push(r):i.unshift(r),this.update(i),i.length},oe.prototype.encodeString=function(e){var n,r=typeof e;if(r!==`string`){if(r===`object`){if(e===null)throw Error(t);if(s&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!s||!ArrayBuffer.isView(e)))throw Error(t)}else throw Error(t);n=!0}var i=0,a=e.length;if(n)i=a;else for(var o=0;o<e.length;++o){var c=e.charCodeAt(o);c<128?i+=1:c<2048?i+=2:c<55296||c>=57344?i+=3:(c=65536+((c&1023)<<10|e.charCodeAt(++o)&1023),i+=4)}return i+=this.encode(i*8),this.update(e),i},oe.prototype.bytepad=function(e,t){for(var n=this.encode(t),r=0;r<e.length;++r)n+=this.encodeString(e[r]);var i=t-n%t,a=[];return a.length=i,this.update(a),this},oe.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex,n=this.blockCount,r=this.s;if(e[t>>2]|=this.padding[t&3],this.lastByteIndex===this.byteCount)for(e[0]=e[n],t=1;t<n+1;++t)e[t]=0;for(e[n-1]|=2147483648,t=0;t<n;++t)r[t]^=e[t];ce(r)}},oe.prototype.toString=oe.prototype.hex=function(){this.finalize();for(var e=this.blockCount,t=this.s,n=this.outputBlocks,r=this.extraBytes,i=0,a=0,o=``,s;a<n;){for(i=0;i<e&&a<n;++i,++a)s=t[i],o+=c[s>>4&15]+c[s&15]+c[s>>12&15]+c[s>>8&15]+c[s>>20&15]+c[s>>16&15]+c[s>>28&15]+c[s>>24&15];a%e===0&&(ce(t),i=0)}return r&&(s=t[i],o+=c[s>>4&15]+c[s&15],r>1&&(o+=c[s>>12&15]+c[s>>8&15]),r>2&&(o+=c[s>>20&15]+c[s>>16&15])),o},oe.prototype.arrayBuffer=function(){this.finalize();for(var e=this.blockCount,t=this.s,n=this.outputBlocks,r=this.extraBytes,i=0,a=0,o=this.outputBits>>3,s=r?new ArrayBuffer(n+1<<2):new ArrayBuffer(o),c=new Uint32Array(s);a<n;){for(i=0;i<e&&a<n;++i,++a)c[a]=t[i];a%e===0&&ce(t)}return r&&(c[i]=t[i],s=s.slice(0,o)),s},oe.prototype.buffer=oe.prototype.arrayBuffer,oe.prototype.digest=oe.prototype.array=function(){this.finalize();for(var e=this.blockCount,t=this.s,n=this.outputBlocks,r=this.extraBytes,i=0,a=0,o=[],s,c;a<n;){for(i=0;i<e&&a<n;++i,++a)s=a<<2,c=t[i],o[s]=c&255,o[s+1]=c>>8&255,o[s+2]=c>>16&255,o[s+3]=c>>24&255;a%e===0&&ce(t)}return r&&(s=a<<2,c=t[i],o[s]=c&255,r>1&&(o[s+1]=c>>8&255),r>2&&(o[s+2]=c>>16&255)),o};function se(e,t,n){oe.call(this,e,t,n)}se.prototype=new oe,se.prototype.finalize=function(){return this.encode(this.outputBits,!0),oe.prototype.finalize.call(this)};var ce=function(e){var t,n,r,i,a,o,s,c,l,u,d,f,p,h,g,_,v,y,b,x,ee,S,C,te,w,T,ne,E,D,re,ie,ae,oe,se,ce,le,O,ue,k,de,fe,pe,me,he,A,j,M,N,ge,_e,ve,P,F,ye,be,I,xe,L,R,Se,Ce,we,Te;for(r=0;r<48;r+=2)i=e[0]^e[10]^e[20]^e[30]^e[40],a=e[1]^e[11]^e[21]^e[31]^e[41],o=e[2]^e[12]^e[22]^e[32]^e[42],s=e[3]^e[13]^e[23]^e[33]^e[43],c=e[4]^e[14]^e[24]^e[34]^e[44],l=e[5]^e[15]^e[25]^e[35]^e[45],u=e[6]^e[16]^e[26]^e[36]^e[46],d=e[7]^e[17]^e[27]^e[37]^e[47],f=e[8]^e[18]^e[28]^e[38]^e[48],p=e[9]^e[19]^e[29]^e[39]^e[49],t=f^(o<<1|s>>>31),n=p^(s<<1|o>>>31),e[0]^=t,e[1]^=n,e[10]^=t,e[11]^=n,e[20]^=t,e[21]^=n,e[30]^=t,e[31]^=n,e[40]^=t,e[41]^=n,t=i^(c<<1|l>>>31),n=a^(l<<1|c>>>31),e[2]^=t,e[3]^=n,e[12]^=t,e[13]^=n,e[22]^=t,e[23]^=n,e[32]^=t,e[33]^=n,e[42]^=t,e[43]^=n,t=o^(u<<1|d>>>31),n=s^(d<<1|u>>>31),e[4]^=t,e[5]^=n,e[14]^=t,e[15]^=n,e[24]^=t,e[25]^=n,e[34]^=t,e[35]^=n,e[44]^=t,e[45]^=n,t=c^(f<<1|p>>>31),n=l^(p<<1|f>>>31),e[6]^=t,e[7]^=n,e[16]^=t,e[17]^=n,e[26]^=t,e[27]^=n,e[36]^=t,e[37]^=n,e[46]^=t,e[47]^=n,t=u^(i<<1|a>>>31),n=d^(a<<1|i>>>31),e[8]^=t,e[9]^=n,e[18]^=t,e[19]^=n,e[28]^=t,e[29]^=n,e[38]^=t,e[39]^=n,e[48]^=t,e[49]^=n,h=e[0],g=e[1],j=e[11]<<4|e[10]>>>28,M=e[10]<<4|e[11]>>>28,E=e[20]<<3|e[21]>>>29,D=e[21]<<3|e[20]>>>29,Se=e[31]<<9|e[30]>>>23,Ce=e[30]<<9|e[31]>>>23,pe=e[40]<<18|e[41]>>>14,me=e[41]<<18|e[40]>>>14,se=e[2]<<1|e[3]>>>31,ce=e[3]<<1|e[2]>>>31,_=e[13]<<12|e[12]>>>20,v=e[12]<<12|e[13]>>>20,N=e[22]<<10|e[23]>>>22,ge=e[23]<<10|e[22]>>>22,re=e[33]<<13|e[32]>>>19,ie=e[32]<<13|e[33]>>>19,we=e[42]<<2|e[43]>>>30,Te=e[43]<<2|e[42]>>>30,ye=e[5]<<30|e[4]>>>2,be=e[4]<<30|e[5]>>>2,le=e[14]<<6|e[15]>>>26,O=e[15]<<6|e[14]>>>26,y=e[25]<<11|e[24]>>>21,b=e[24]<<11|e[25]>>>21,_e=e[34]<<15|e[35]>>>17,ve=e[35]<<15|e[34]>>>17,ae=e[45]<<29|e[44]>>>3,oe=e[44]<<29|e[45]>>>3,te=e[6]<<28|e[7]>>>4,w=e[7]<<28|e[6]>>>4,I=e[17]<<23|e[16]>>>9,xe=e[16]<<23|e[17]>>>9,ue=e[26]<<25|e[27]>>>7,k=e[27]<<25|e[26]>>>7,x=e[36]<<21|e[37]>>>11,ee=e[37]<<21|e[36]>>>11,P=e[47]<<24|e[46]>>>8,F=e[46]<<24|e[47]>>>8,he=e[8]<<27|e[9]>>>5,A=e[9]<<27|e[8]>>>5,T=e[18]<<20|e[19]>>>12,ne=e[19]<<20|e[18]>>>12,L=e[29]<<7|e[28]>>>25,R=e[28]<<7|e[29]>>>25,de=e[38]<<8|e[39]>>>24,fe=e[39]<<8|e[38]>>>24,S=e[48]<<14|e[49]>>>18,C=e[49]<<14|e[48]>>>18,e[0]=h^~_&y,e[1]=g^~v&b,e[10]=te^~T&E,e[11]=w^~ne&D,e[20]=se^~le&ue,e[21]=ce^~O&k,e[30]=he^~j&N,e[31]=A^~M&ge,e[40]=ye^~I&L,e[41]=be^~xe&R,e[2]=_^~y&x,e[3]=v^~b&ee,e[12]=T^~E&re,e[13]=ne^~D&ie,e[22]=le^~ue&de,e[23]=O^~k&fe,e[32]=j^~N&_e,e[33]=M^~ge&ve,e[42]=I^~L&Se,e[43]=xe^~R&Ce,e[4]=y^~x&S,e[5]=b^~ee&C,e[14]=E^~re&ae,e[15]=D^~ie&oe,e[24]=ue^~de&pe,e[25]=k^~fe&me,e[34]=N^~_e&P,e[35]=ge^~ve&F,e[44]=L^~Se&we,e[45]=R^~Ce&Te,e[6]=x^~S&h,e[7]=ee^~C&g,e[16]=re^~ae&te,e[17]=ie^~oe&w,e[26]=de^~pe&se,e[27]=fe^~me&ce,e[36]=_e^~P&he,e[37]=ve^~F&A,e[46]=Se^~we&ye,e[47]=Ce^~Te&be,e[8]=S^~h&_,e[9]=C^~g&v,e[18]=ae^~te&T,e[19]=oe^~w&ne,e[28]=pe^~se&le,e[29]=me^~ce&O,e[38]=P^~he&j,e[39]=F^~A&M,e[48]=we^~ye&I,e[49]=Te^~be&xe,e[0]^=m[r],e[1]^=m[r+1]};if(o)e.exports=w;else for(ne=0;ne<T.length;++ne)i[T[ne]]=w[T[ne]]})()})(qS),qS.exports;var JS=`logger/5.7.0`,YS=!1,XS=!1,ZS={debug:1,default:2,info:2,warning:3,error:4,off:5},QS=ZS.default,$S=null;function eC(){try{let e=[];if([`NFD`,`NFC`,`NFKD`,`NFKC`].forEach(t=>{try{if(`test`.normalize(t)!==`test`)throw Error(`bad normalize`)}catch{e.push(t)}}),e.length)throw Error(`missing `+e.join(`, `));if(`é`.normalize(`NFD`)!==`é`)throw Error(`broken implementation`)}catch(e){return e.message}return null}var tC=eC(),nC;(function(e){e.DEBUG=`DEBUG`,e.INFO=`INFO`,e.WARNING=`WARNING`,e.ERROR=`ERROR`,e.OFF=`OFF`})(nC||(nC={}));var rC;(function(e){e.UNKNOWN_ERROR=`UNKNOWN_ERROR`,e.NOT_IMPLEMENTED=`NOT_IMPLEMENTED`,e.UNSUPPORTED_OPERATION=`UNSUPPORTED_OPERATION`,e.NETWORK_ERROR=`NETWORK_ERROR`,e.SERVER_ERROR=`SERVER_ERROR`,e.TIMEOUT=`TIMEOUT`,e.BUFFER_OVERRUN=`BUFFER_OVERRUN`,e.NUMERIC_FAULT=`NUMERIC_FAULT`,e.MISSING_NEW=`MISSING_NEW`,e.INVALID_ARGUMENT=`INVALID_ARGUMENT`,e.MISSING_ARGUMENT=`MISSING_ARGUMENT`,e.UNEXPECTED_ARGUMENT=`UNEXPECTED_ARGUMENT`,e.CALL_EXCEPTION=`CALL_EXCEPTION`,e.INSUFFICIENT_FUNDS=`INSUFFICIENT_FUNDS`,e.NONCE_EXPIRED=`NONCE_EXPIRED`,e.REPLACEMENT_UNDERPRICED=`REPLACEMENT_UNDERPRICED`,e.UNPREDICTABLE_GAS_LIMIT=`UNPREDICTABLE_GAS_LIMIT`,e.TRANSACTION_REPLACED=`TRANSACTION_REPLACED`,e.ACTION_REJECTED=`ACTION_REJECTED`})(rC||(rC={}));var iC=`0123456789abcdef`,aC=class e{constructor(e){Object.defineProperty(this,`version`,{enumerable:!0,value:e,writable:!1})}_log(e,t){let n=e.toLowerCase();ZS[n]??this.throwArgumentError(`invalid log level name`,`logLevel`,e),!(QS>ZS[n])&&console.log.apply(console,t)}debug(...t){this._log(e.levels.DEBUG,t)}info(...t){this._log(e.levels.INFO,t)}warn(...t){this._log(e.levels.WARNING,t)}makeError(t,n,r){if(XS)return this.makeError(`censored error`,n,{});n||(n=e.errors.UNKNOWN_ERROR),r||(r={});let i=[];Object.keys(r).forEach(e=>{let t=r[e];try{if(t instanceof Uint8Array){let n=``;for(let e=0;e<t.length;e++)n+=iC[t[e]>>4],n+=iC[t[e]&15];i.push(e+`=Uint8Array(0x`+n+`)`)}else i.push(e+`=`+JSON.stringify(t))}catch{i.push(e+`=`+JSON.stringify(r[e].toString()))}}),i.push(`code=${n}`),i.push(`version=${this.version}`);let a=t,o=``;switch(n){case rC.NUMERIC_FAULT:{o=`NUMERIC_FAULT`;let e=t;switch(e){case`overflow`:case`underflow`:case`division-by-zero`:o+=`-`+e;break;case`negative-power`:case`negative-width`:o+=`-unsupported`;break;case`unbound-bitwise-result`:o+=`-unbound-result`;break}break}case rC.CALL_EXCEPTION:case rC.INSUFFICIENT_FUNDS:case rC.MISSING_NEW:case rC.NONCE_EXPIRED:case rC.REPLACEMENT_UNDERPRICED:case rC.TRANSACTION_REPLACED:case rC.UNPREDICTABLE_GAS_LIMIT:o=n;break}o&&(t+=` [ See: https://links.ethers.org/v5-errors-`+o+` ]`),i.length&&(t+=` (`+i.join(`, `)+`)`);let s=Error(t);return s.reason=a,s.code=n,Object.keys(r).forEach(function(e){s[e]=r[e]}),s}throwError(e,t,n){throw this.makeError(e,t,n)}throwArgumentError(t,n,r){return this.throwError(t,e.errors.INVALID_ARGUMENT,{argument:n,value:r})}assert(e,t,n,r){e||this.throwError(t,n,r)}assertArgument(e,t,n,r){e||this.throwArgumentError(t,n,r)}checkNormalize(t){tC&&this.throwError(`platform missing String.prototype.normalize`,e.errors.UNSUPPORTED_OPERATION,{operation:`String.prototype.normalize`,form:tC})}checkSafeUint53(t,n){typeof t==`number`&&(n??(n=`value not safe`),(t<0||t>=9007199254740991)&&this.throwError(n,e.errors.NUMERIC_FAULT,{operation:`checkSafeInteger`,fault:`out-of-safe-range`,value:t}),t%1&&this.throwError(n,e.errors.NUMERIC_FAULT,{operation:`checkSafeInteger`,fault:`non-integer`,value:t}))}checkArgumentCount(t,n,r){r=r?`: `+r:``,t<n&&this.throwError(`missing argument`+r,e.errors.MISSING_ARGUMENT,{count:t,expectedCount:n}),t>n&&this.throwError(`too many arguments`+r,e.errors.UNEXPECTED_ARGUMENT,{count:t,expectedCount:n})}checkNew(t,n){(t===Object||t==null)&&this.throwError(`missing new`,e.errors.MISSING_NEW,{name:n.name})}checkAbstract(t,n){t===n?this.throwError(`cannot instantiate abstract class `+JSON.stringify(n.name)+` directly; use a sub-class`,e.errors.UNSUPPORTED_OPERATION,{name:t.name,operation:`new`}):(t===Object||t==null)&&this.throwError(`missing new`,e.errors.MISSING_NEW,{name:n.name})}static globalLogger(){return $S||($S=new e(JS)),$S}static setCensorship(t,n){if(!t&&n&&this.globalLogger().throwError(`cannot permanently disable censorship`,e.errors.UNSUPPORTED_OPERATION,{operation:`setCensorship`}),YS){if(!t)return;this.globalLogger().throwError(`error censorship permanent`,e.errors.UNSUPPORTED_OPERATION,{operation:`setCensorship`})}XS=!!t,YS=!!n}static setLogLevel(t){let n=ZS[t.toLowerCase()];if(n==null){e.globalLogger().warn(`invalid log level - `+t);return}QS=n}static from(t){return new e(t)}};aC.errors=rC,aC.levels=nC;var oC=new aC(`bytes/5.7.0`);function sC(e){return!!e.toHexString}function cC(e){return e.slice||(e.slice=function(){let t=Array.prototype.slice.call(arguments);return cC(new Uint8Array(Array.prototype.slice.apply(e,t)))}),e}function lC(e){return typeof e==`number`&&e==e&&e%1==0}function uC(e){if(e==null)return!1;if(e.constructor===Uint8Array)return!0;if(typeof e==`string`||!lC(e.length)||e.length<0)return!1;for(let t=0;t<e.length;t++){let n=e[t];if(!lC(n)||n<0||n>=256)return!1}return!0}function dC(e,t){if(t||(t={}),typeof e==`number`){oC.checkSafeUint53(e,`invalid arrayify value`);let t=[];for(;e;)t.unshift(e&255),e=parseInt(String(e/256));return t.length===0&&t.push(0),cC(new Uint8Array(t))}if(t.allowMissingPrefix&&typeof e==`string`&&e.substring(0,2)!==`0x`&&(e=`0x`+e),sC(e)&&(e=e.toHexString()),fC(e)){let n=e.substring(2);n.length%2&&(t.hexPad===`left`?n=`0`+n:t.hexPad===`right`?n+=`0`:oC.throwArgumentError(`hex data is odd-length`,`value`,e));let r=[];for(let e=0;e<n.length;e+=2)r.push(parseInt(n.substring(e,e+2),16));return cC(new Uint8Array(r))}return uC(e)?cC(new Uint8Array(e)):oC.throwArgumentError(`invalid arrayify value`,`value`,e)}function fC(e,t){return!(typeof e!=`string`||!e.match(/^0x[0-9A-Fa-f]*$/)||t&&e.length!==2+2*t)}var pC=`0123456789abcdef`;function mC(e,t){if(t||(t={}),typeof e==`number`){oC.checkSafeUint53(e,`invalid hexlify value`);let t=``;for(;e;)t=pC[e&15]+t,e=Math.floor(e/16);return t.length?(t.length%2&&(t=`0`+t),`0x`+t):`0x00`}if(typeof e==`bigint`)return e=e.toString(16),e.length%2?`0x0`+e:`0x`+e;if(t.allowMissingPrefix&&typeof e==`string`&&e.substring(0,2)!==`0x`&&(e=`0x`+e),sC(e))return e.toHexString();if(fC(e))return e.length%2&&(t.hexPad===`left`?e=`0x0`+e.substring(2):t.hexPad===`right`?e+=`0`:oC.throwArgumentError(`hex data is odd-length`,`value`,e)),e.toLowerCase();if(uC(e)){let t=`0x`;for(let n=0;n<e.length;n++){let r=e[n];t+=pC[(r&240)>>4]+pC[r&15]}return t}return oC.throwArgumentError(`invalid hexlify value`,`value`,e)}function hC(e,t){for(typeof e==`string`?fC(e)||oC.throwArgumentError(`invalid hex string`,`value`,e):e=mC(e),e.length>2*t+2&&oC.throwArgumentError(`value out of range`,`value`,arguments[1]);e.length<2*t+2;)e=`0x0`+e.substring(2);return e}var gC={exports:{}},_C=KS(Object.freeze({__proto__:null,default:{}}));(function(e){(function(e,t){function n(e,t){if(!e)throw Error(t||`Assertion failed`)}function r(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}function i(e,t,n){if(i.isBN(e))return e;this.negative=0,this.words=null,this.length=0,this.red=null,e!==null&&((t===`le`||t===`be`)&&(n=t,t=10),this._init(e||0,t||10,n||`be`))}typeof e==`object`?e.exports=i:t.BN=i,i.BN=i,i.wordSize=26;var a;try{a=typeof window<`u`&&typeof window.Buffer<`u`?window.Buffer:_C.Buffer}catch{}i.isBN=function(e){return e instanceof i?!0:typeof e==`object`&&!!e&&e.constructor.wordSize===i.wordSize&&Array.isArray(e.words)},i.max=function(e,t){return e.cmp(t)>0?e:t},i.min=function(e,t){return e.cmp(t)<0?e:t},i.prototype._init=function(e,t,r){if(typeof e==`number`)return this._initNumber(e,t,r);if(typeof e==`object`)return this._initArray(e,t,r);t===`hex`&&(t=16),n(t===(t|0)&&t>=2&&t<=36),e=e.toString().replace(/\s+/g,``);var i=0;e[0]===`-`&&(i++,this.negative=1),i<e.length&&(t===16?this._parseHex(e,i,r):(this._parseBase(e,t,i),r===`le`&&this._initArray(this.toArray(),t,r)))},i.prototype._initNumber=function(e,t,r){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[e&67108863],this.length=1):e<4503599627370496?(this.words=[e&67108863,e/67108864&67108863],this.length=2):(n(e<9007199254740992),this.words=[e&67108863,e/67108864&67108863,1],this.length=3),r===`le`&&this._initArray(this.toArray(),t,r)},i.prototype._initArray=function(e,t,r){if(n(typeof e.length==`number`),e.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(e.length/3),this.words=Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var a,o,s=0;if(r===`be`)for(i=e.length-1,a=0;i>=0;i-=3)o=e[i]|e[i-1]<<8|e[i-2]<<16,this.words[a]|=o<<s&67108863,this.words[a+1]=o>>>26-s&67108863,s+=24,s>=26&&(s-=26,a++);else if(r===`le`)for(i=0,a=0;i<e.length;i+=3)o=e[i]|e[i+1]<<8|e[i+2]<<16,this.words[a]|=o<<s&67108863,this.words[a+1]=o>>>26-s&67108863,s+=24,s>=26&&(s-=26,a++);return this._strip()};function o(e,t){var r=e.charCodeAt(t);if(r>=48&&r<=57)return r-48;if(r>=65&&r<=70)return r-55;if(r>=97&&r<=102)return r-87;n(!1,`Invalid character in `+e)}function s(e,t,n){var r=o(e,n);return n-1>=t&&(r|=o(e,n-1)<<4),r}i.prototype._parseHex=function(e,t,n){this.length=Math.ceil((e.length-t)/6),this.words=Array(this.length);for(var r=0;r<this.length;r++)this.words[r]=0;var i=0,a=0,o;if(n===`be`)for(r=e.length-1;r>=t;r-=2)o=s(e,t,r)<<i,this.words[a]|=o&67108863,i>=18?(i-=18,a+=1,this.words[a]|=o>>>26):i+=8;else for(r=(e.length-t)%2==0?t+1:t;r<e.length;r+=2)o=s(e,t,r)<<i,this.words[a]|=o&67108863,i>=18?(i-=18,a+=1,this.words[a]|=o>>>26):i+=8;this._strip()};function c(e,t,r,i){for(var a=0,o=0,s=Math.min(e.length,r),c=t;c<s;c++){var l=e.charCodeAt(c)-48;a*=i,o=l>=49?l-49+10:l>=17?l-17+10:l,n(l>=0&&o<i,`Invalid character`),a+=o}return a}i.prototype._parseBase=function(e,t,n){this.words=[0],this.length=1;for(var r=0,i=1;i<=67108863;i*=t)r++;r--,i=i/t|0;for(var a=e.length-n,o=a%r,s=Math.min(a,a-o)+n,l=0,u=n;u<s;u+=r)l=c(e,u,u+r,t),this.imuln(i),this.words[0]+l<67108864?this.words[0]+=l:this._iaddn(l);if(o!==0){var d=1;for(l=c(e,u,e.length,t),u=0;u<o;u++)d*=t;this.imuln(d),this.words[0]+l<67108864?this.words[0]+=l:this._iaddn(l)}this._strip()},i.prototype.copy=function(e){e.words=Array(this.length);for(var t=0;t<this.length;t++)e.words[t]=this.words[t];e.length=this.length,e.negative=this.negative,e.red=this.red};function l(e,t){e.words=t.words,e.length=t.length,e.negative=t.negative,e.red=t.red}if(i.prototype._move=function(e){l(e,this)},i.prototype.clone=function(){var e=new i(null);return this.copy(e),e},i.prototype._expand=function(e){for(;this.length<e;)this.words[this.length++]=0;return this},i.prototype._strip=function(){for(;this.length>1&&this.words[this.length-1]===0;)this.length--;return this._normSign()},i.prototype._normSign=function(){return this.length===1&&this.words[0]===0&&(this.negative=0),this},typeof Symbol<`u`&&typeof Symbol.for==`function`)try{i.prototype[Symbol.for(`nodejs.util.inspect.custom`)]=u}catch{i.prototype.inspect=u}else i.prototype.inspect=u;function u(){return(this.red?`<BN-R: `:`<BN: `)+this.toString(16)+`>`}var d=`.0.00.000.0000.00000.000000.0000000.00000000.000000000.0000000000.00000000000.000000000000.0000000000000.00000000000000.000000000000000.0000000000000000.00000000000000000.000000000000000000.0000000000000000000.00000000000000000000.000000000000000000000.0000000000000000000000.00000000000000000000000.000000000000000000000000.0000000000000000000000000`.split(`.`),f=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],p=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];i.prototype.toString=function(e,t){e=e||10,t=t|0||1;var r;if(e===16||e===`hex`){r=``;for(var i=0,a=0,o=0;o<this.length;o++){var s=this.words[o],c=((s<<i|a)&16777215).toString(16);a=s>>>24-i&16777215,i+=2,i>=26&&(i-=26,o--),r=a!==0||o!==this.length-1?d[6-c.length]+c+r:c+r}for(a!==0&&(r=a.toString(16)+r);r.length%t!==0;)r=`0`+r;return this.negative!==0&&(r=`-`+r),r}if(e===(e|0)&&e>=2&&e<=36){var l=f[e],u=p[e];r=``;var m=this.clone();for(m.negative=0;!m.isZero();){var h=m.modrn(u).toString(e);m=m.idivn(u),r=m.isZero()?h+r:d[l-h.length]+h+r}for(this.isZero()&&(r=`0`+r);r.length%t!==0;)r=`0`+r;return this.negative!==0&&(r=`-`+r),r}n(!1,`Base should be between 2 and 36`)},i.prototype.toNumber=function(){var e=this.words[0];return this.length===2?e+=this.words[1]*67108864:this.length===3&&this.words[2]===1?e+=4503599627370496+this.words[1]*67108864:this.length>2&&n(!1,`Number can only safely store up to 53 bits`),this.negative===0?e:-e},i.prototype.toJSON=function(){return this.toString(16,2)},a&&(i.prototype.toBuffer=function(e,t){return this.toArrayLike(a,e,t)}),i.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)};var m=function(e,t){return e.allocUnsafe?e.allocUnsafe(t):new e(t)};i.prototype.toArrayLike=function(e,t,r){this._strip();var i=this.byteLength(),a=r||Math.max(1,i);n(i<=a,`byte array longer than desired length`),n(a>0,`Requested array length <= 0`);var o=m(e,a);return this[`_toArrayLike`+(t===`le`?`LE`:`BE`)](o,i),o},i.prototype._toArrayLikeLE=function(e,t){for(var n=0,r=0,i=0,a=0;i<this.length;i++){var o=this.words[i]<<a|r;e[n++]=o&255,n<e.length&&(e[n++]=o>>8&255),n<e.length&&(e[n++]=o>>16&255),a===6?(n<e.length&&(e[n++]=o>>24&255),r=0,a=0):(r=o>>>24,a+=2)}if(n<e.length)for(e[n++]=r;n<e.length;)e[n++]=0},i.prototype._toArrayLikeBE=function(e,t){for(var n=e.length-1,r=0,i=0,a=0;i<this.length;i++){var o=this.words[i]<<a|r;e[n--]=o&255,n>=0&&(e[n--]=o>>8&255),n>=0&&(e[n--]=o>>16&255),a===6?(n>=0&&(e[n--]=o>>24&255),r=0,a=0):(r=o>>>24,a+=2)}if(n>=0)for(e[n--]=r;n>=0;)e[n--]=0},Math.clz32?i.prototype._countBits=function(e){return 32-Math.clz32(e)}:i.prototype._countBits=function(e){var t=e,n=0;return t>=4096&&(n+=13,t>>>=13),t>=64&&(n+=7,t>>>=7),t>=8&&(n+=4,t>>>=4),t>=2&&(n+=2,t>>>=2),n+t},i.prototype._zeroBits=function(e){if(e===0)return 26;var t=e,n=0;return t&8191||(n+=13,t>>>=13),t&127||(n+=7,t>>>=7),t&15||(n+=4,t>>>=4),t&3||(n+=2,t>>>=2),t&1||n++,n},i.prototype.bitLength=function(){var e=this.words[this.length-1],t=this._countBits(e);return(this.length-1)*26+t};function h(e){for(var t=Array(e.bitLength()),n=0;n<t.length;n++){var r=n/26|0,i=n%26;t[n]=e.words[r]>>>i&1}return t}i.prototype.zeroBits=function(){if(this.isZero())return 0;for(var e=0,t=0;t<this.length;t++){var n=this._zeroBits(this.words[t]);if(e+=n,n!==26)break}return e},i.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},i.prototype.toTwos=function(e){return this.negative===0?this.clone():this.abs().inotn(e).iaddn(1)},i.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},i.prototype.isNeg=function(){return this.negative!==0},i.prototype.neg=function(){return this.clone().ineg()},i.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},i.prototype.iuor=function(e){for(;this.length<e.length;)this.words[this.length++]=0;for(var t=0;t<e.length;t++)this.words[t]=this.words[t]|e.words[t];return this._strip()},i.prototype.ior=function(e){return n((this.negative|e.negative)===0),this.iuor(e)},i.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},i.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},i.prototype.iuand=function(e){for(var t=this.length>e.length?e:this,n=0;n<t.length;n++)this.words[n]=this.words[n]&e.words[n];return this.length=t.length,this._strip()},i.prototype.iand=function(e){return n((this.negative|e.negative)===0),this.iuand(e)},i.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},i.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},i.prototype.iuxor=function(e){var t,n;this.length>e.length?(t=this,n=e):(t=e,n=this);for(var r=0;r<n.length;r++)this.words[r]=t.words[r]^n.words[r];if(this!==t)for(;r<t.length;r++)this.words[r]=t.words[r];return this.length=t.length,this._strip()},i.prototype.ixor=function(e){return n((this.negative|e.negative)===0),this.iuxor(e)},i.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},i.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},i.prototype.inotn=function(e){n(typeof e==`number`&&e>=0);var t=Math.ceil(e/26)|0,r=e%26;this._expand(t),r>0&&t--;for(var i=0;i<t;i++)this.words[i]=~this.words[i]&67108863;return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this._strip()},i.prototype.notn=function(e){return this.clone().inotn(e)},i.prototype.setn=function(e,t){n(typeof e==`number`&&e>=0);var r=e/26|0,i=e%26;return this._expand(r+1),t?this.words[r]=this.words[r]|1<<i:this.words[r]=this.words[r]&~(1<<i),this._strip()},i.prototype.iadd=function(e){var t;if(this.negative!==0&&e.negative===0)return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign();if(this.negative===0&&e.negative!==0)return e.negative=0,t=this.isub(e),e.negative=1,t._normSign();var n,r;this.length>e.length?(n=this,r=e):(n=e,r=this);for(var i=0,a=0;a<r.length;a++)t=(n.words[a]|0)+(r.words[a]|0)+i,this.words[a]=t&67108863,i=t>>>26;for(;i!==0&&a<n.length;a++)t=(n.words[a]|0)+i,this.words[a]=t&67108863,i=t>>>26;if(this.length=n.length,i!==0)this.words[this.length]=i,this.length++;else if(n!==this)for(;a<n.length;a++)this.words[a]=n.words[a];return this},i.prototype.add=function(e){var t;return e.negative!==0&&this.negative===0?(e.negative=0,t=this.sub(e),e.negative^=1,t):e.negative===0&&this.negative!==0?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},i.prototype.isub=function(e){if(e.negative!==0){e.negative=0;var t=this.iadd(e);return e.negative=1,t._normSign()}else if(this.negative!==0)return this.negative=0,this.iadd(e),this.negative=1,this._normSign();var n=this.cmp(e);if(n===0)return this.negative=0,this.length=1,this.words[0]=0,this;var r,i;n>0?(r=this,i=e):(r=e,i=this);for(var a=0,o=0;o<i.length;o++)t=(r.words[o]|0)-(i.words[o]|0)+a,a=t>>26,this.words[o]=t&67108863;for(;a!==0&&o<r.length;o++)t=(r.words[o]|0)+a,a=t>>26,this.words[o]=t&67108863;if(a===0&&o<r.length&&r!==this)for(;o<r.length;o++)this.words[o]=r.words[o];return this.length=Math.max(this.length,o),r!==this&&(this.negative=1),this._strip()},i.prototype.sub=function(e){return this.clone().isub(e)};function g(e,t,n){n.negative=t.negative^e.negative;var r=e.length+t.length|0;n.length=r,r=r-1|0;var i=e.words[0]|0,a=t.words[0]|0,o=i*a,s=o&67108863,c=o/67108864|0;n.words[0]=s;for(var l=1;l<r;l++){for(var u=c>>>26,d=c&67108863,f=Math.min(l,t.length-1),p=Math.max(0,l-e.length+1);p<=f;p++){var m=l-p|0;i=e.words[m]|0,a=t.words[p]|0,o=i*a+d,u+=o/67108864|0,d=o&67108863}n.words[l]=d|0,c=u|0}return c===0?n.length--:n.words[l]=c|0,n._strip()}var _=function(e,t,n){var r=e.words,i=t.words,a=n.words,o=0,s,c,l,u=r[0]|0,d=u&8191,f=u>>>13,p=r[1]|0,m=p&8191,h=p>>>13,g=r[2]|0,_=g&8191,v=g>>>13,y=r[3]|0,b=y&8191,x=y>>>13,ee=r[4]|0,S=ee&8191,C=ee>>>13,te=r[5]|0,w=te&8191,T=te>>>13,ne=r[6]|0,E=ne&8191,D=ne>>>13,re=r[7]|0,ie=re&8191,ae=re>>>13,oe=r[8]|0,se=oe&8191,ce=oe>>>13,le=r[9]|0,O=le&8191,ue=le>>>13,k=i[0]|0,de=k&8191,fe=k>>>13,pe=i[1]|0,me=pe&8191,he=pe>>>13,A=i[2]|0,j=A&8191,M=A>>>13,N=i[3]|0,ge=N&8191,_e=N>>>13,ve=i[4]|0,P=ve&8191,F=ve>>>13,ye=i[5]|0,be=ye&8191,I=ye>>>13,xe=i[6]|0,L=xe&8191,R=xe>>>13,Se=i[7]|0,Ce=Se&8191,we=Se>>>13,Te=i[8]|0,z=Te&8191,Ee=Te>>>13,De=i[9]|0,Oe=De&8191,B=De>>>13;n.negative=e.negative^t.negative,n.length=19,s=Math.imul(d,de),c=Math.imul(d,fe),c=c+Math.imul(f,de)|0,l=Math.imul(f,fe);var ke=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(ke>>>26)|0,ke&=67108863,s=Math.imul(m,de),c=Math.imul(m,fe),c=c+Math.imul(h,de)|0,l=Math.imul(h,fe),s=s+Math.imul(d,me)|0,c=c+Math.imul(d,he)|0,c=c+Math.imul(f,me)|0,l=l+Math.imul(f,he)|0;var Ae=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(Ae>>>26)|0,Ae&=67108863,s=Math.imul(_,de),c=Math.imul(_,fe),c=c+Math.imul(v,de)|0,l=Math.imul(v,fe),s=s+Math.imul(m,me)|0,c=c+Math.imul(m,he)|0,c=c+Math.imul(h,me)|0,l=l+Math.imul(h,he)|0,s=s+Math.imul(d,j)|0,c=c+Math.imul(d,M)|0,c=c+Math.imul(f,j)|0,l=l+Math.imul(f,M)|0;var je=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(je>>>26)|0,je&=67108863,s=Math.imul(b,de),c=Math.imul(b,fe),c=c+Math.imul(x,de)|0,l=Math.imul(x,fe),s=s+Math.imul(_,me)|0,c=c+Math.imul(_,he)|0,c=c+Math.imul(v,me)|0,l=l+Math.imul(v,he)|0,s=s+Math.imul(m,j)|0,c=c+Math.imul(m,M)|0,c=c+Math.imul(h,j)|0,l=l+Math.imul(h,M)|0,s=s+Math.imul(d,ge)|0,c=c+Math.imul(d,_e)|0,c=c+Math.imul(f,ge)|0,l=l+Math.imul(f,_e)|0;var Me=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(Me>>>26)|0,Me&=67108863,s=Math.imul(S,de),c=Math.imul(S,fe),c=c+Math.imul(C,de)|0,l=Math.imul(C,fe),s=s+Math.imul(b,me)|0,c=c+Math.imul(b,he)|0,c=c+Math.imul(x,me)|0,l=l+Math.imul(x,he)|0,s=s+Math.imul(_,j)|0,c=c+Math.imul(_,M)|0,c=c+Math.imul(v,j)|0,l=l+Math.imul(v,M)|0,s=s+Math.imul(m,ge)|0,c=c+Math.imul(m,_e)|0,c=c+Math.imul(h,ge)|0,l=l+Math.imul(h,_e)|0,s=s+Math.imul(d,P)|0,c=c+Math.imul(d,F)|0,c=c+Math.imul(f,P)|0,l=l+Math.imul(f,F)|0;var Ne=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(Ne>>>26)|0,Ne&=67108863,s=Math.imul(w,de),c=Math.imul(w,fe),c=c+Math.imul(T,de)|0,l=Math.imul(T,fe),s=s+Math.imul(S,me)|0,c=c+Math.imul(S,he)|0,c=c+Math.imul(C,me)|0,l=l+Math.imul(C,he)|0,s=s+Math.imul(b,j)|0,c=c+Math.imul(b,M)|0,c=c+Math.imul(x,j)|0,l=l+Math.imul(x,M)|0,s=s+Math.imul(_,ge)|0,c=c+Math.imul(_,_e)|0,c=c+Math.imul(v,ge)|0,l=l+Math.imul(v,_e)|0,s=s+Math.imul(m,P)|0,c=c+Math.imul(m,F)|0,c=c+Math.imul(h,P)|0,l=l+Math.imul(h,F)|0,s=s+Math.imul(d,be)|0,c=c+Math.imul(d,I)|0,c=c+Math.imul(f,be)|0,l=l+Math.imul(f,I)|0;var Pe=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(Pe>>>26)|0,Pe&=67108863,s=Math.imul(E,de),c=Math.imul(E,fe),c=c+Math.imul(D,de)|0,l=Math.imul(D,fe),s=s+Math.imul(w,me)|0,c=c+Math.imul(w,he)|0,c=c+Math.imul(T,me)|0,l=l+Math.imul(T,he)|0,s=s+Math.imul(S,j)|0,c=c+Math.imul(S,M)|0,c=c+Math.imul(C,j)|0,l=l+Math.imul(C,M)|0,s=s+Math.imul(b,ge)|0,c=c+Math.imul(b,_e)|0,c=c+Math.imul(x,ge)|0,l=l+Math.imul(x,_e)|0,s=s+Math.imul(_,P)|0,c=c+Math.imul(_,F)|0,c=c+Math.imul(v,P)|0,l=l+Math.imul(v,F)|0,s=s+Math.imul(m,be)|0,c=c+Math.imul(m,I)|0,c=c+Math.imul(h,be)|0,l=l+Math.imul(h,I)|0,s=s+Math.imul(d,L)|0,c=c+Math.imul(d,R)|0,c=c+Math.imul(f,L)|0,l=l+Math.imul(f,R)|0;var Fe=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(Fe>>>26)|0,Fe&=67108863,s=Math.imul(ie,de),c=Math.imul(ie,fe),c=c+Math.imul(ae,de)|0,l=Math.imul(ae,fe),s=s+Math.imul(E,me)|0,c=c+Math.imul(E,he)|0,c=c+Math.imul(D,me)|0,l=l+Math.imul(D,he)|0,s=s+Math.imul(w,j)|0,c=c+Math.imul(w,M)|0,c=c+Math.imul(T,j)|0,l=l+Math.imul(T,M)|0,s=s+Math.imul(S,ge)|0,c=c+Math.imul(S,_e)|0,c=c+Math.imul(C,ge)|0,l=l+Math.imul(C,_e)|0,s=s+Math.imul(b,P)|0,c=c+Math.imul(b,F)|0,c=c+Math.imul(x,P)|0,l=l+Math.imul(x,F)|0,s=s+Math.imul(_,be)|0,c=c+Math.imul(_,I)|0,c=c+Math.imul(v,be)|0,l=l+Math.imul(v,I)|0,s=s+Math.imul(m,L)|0,c=c+Math.imul(m,R)|0,c=c+Math.imul(h,L)|0,l=l+Math.imul(h,R)|0,s=s+Math.imul(d,Ce)|0,c=c+Math.imul(d,we)|0,c=c+Math.imul(f,Ce)|0,l=l+Math.imul(f,we)|0;var V=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(V>>>26)|0,V&=67108863,s=Math.imul(se,de),c=Math.imul(se,fe),c=c+Math.imul(ce,de)|0,l=Math.imul(ce,fe),s=s+Math.imul(ie,me)|0,c=c+Math.imul(ie,he)|0,c=c+Math.imul(ae,me)|0,l=l+Math.imul(ae,he)|0,s=s+Math.imul(E,j)|0,c=c+Math.imul(E,M)|0,c=c+Math.imul(D,j)|0,l=l+Math.imul(D,M)|0,s=s+Math.imul(w,ge)|0,c=c+Math.imul(w,_e)|0,c=c+Math.imul(T,ge)|0,l=l+Math.imul(T,_e)|0,s=s+Math.imul(S,P)|0,c=c+Math.imul(S,F)|0,c=c+Math.imul(C,P)|0,l=l+Math.imul(C,F)|0,s=s+Math.imul(b,be)|0,c=c+Math.imul(b,I)|0,c=c+Math.imul(x,be)|0,l=l+Math.imul(x,I)|0,s=s+Math.imul(_,L)|0,c=c+Math.imul(_,R)|0,c=c+Math.imul(v,L)|0,l=l+Math.imul(v,R)|0,s=s+Math.imul(m,Ce)|0,c=c+Math.imul(m,we)|0,c=c+Math.imul(h,Ce)|0,l=l+Math.imul(h,we)|0,s=s+Math.imul(d,z)|0,c=c+Math.imul(d,Ee)|0,c=c+Math.imul(f,z)|0,l=l+Math.imul(f,Ee)|0;var H=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(H>>>26)|0,H&=67108863,s=Math.imul(O,de),c=Math.imul(O,fe),c=c+Math.imul(ue,de)|0,l=Math.imul(ue,fe),s=s+Math.imul(se,me)|0,c=c+Math.imul(se,he)|0,c=c+Math.imul(ce,me)|0,l=l+Math.imul(ce,he)|0,s=s+Math.imul(ie,j)|0,c=c+Math.imul(ie,M)|0,c=c+Math.imul(ae,j)|0,l=l+Math.imul(ae,M)|0,s=s+Math.imul(E,ge)|0,c=c+Math.imul(E,_e)|0,c=c+Math.imul(D,ge)|0,l=l+Math.imul(D,_e)|0,s=s+Math.imul(w,P)|0,c=c+Math.imul(w,F)|0,c=c+Math.imul(T,P)|0,l=l+Math.imul(T,F)|0,s=s+Math.imul(S,be)|0,c=c+Math.imul(S,I)|0,c=c+Math.imul(C,be)|0,l=l+Math.imul(C,I)|0,s=s+Math.imul(b,L)|0,c=c+Math.imul(b,R)|0,c=c+Math.imul(x,L)|0,l=l+Math.imul(x,R)|0,s=s+Math.imul(_,Ce)|0,c=c+Math.imul(_,we)|0,c=c+Math.imul(v,Ce)|0,l=l+Math.imul(v,we)|0,s=s+Math.imul(m,z)|0,c=c+Math.imul(m,Ee)|0,c=c+Math.imul(h,z)|0,l=l+Math.imul(h,Ee)|0,s=s+Math.imul(d,Oe)|0,c=c+Math.imul(d,B)|0,c=c+Math.imul(f,Oe)|0,l=l+Math.imul(f,B)|0;var U=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(U>>>26)|0,U&=67108863,s=Math.imul(O,me),c=Math.imul(O,he),c=c+Math.imul(ue,me)|0,l=Math.imul(ue,he),s=s+Math.imul(se,j)|0,c=c+Math.imul(se,M)|0,c=c+Math.imul(ce,j)|0,l=l+Math.imul(ce,M)|0,s=s+Math.imul(ie,ge)|0,c=c+Math.imul(ie,_e)|0,c=c+Math.imul(ae,ge)|0,l=l+Math.imul(ae,_e)|0,s=s+Math.imul(E,P)|0,c=c+Math.imul(E,F)|0,c=c+Math.imul(D,P)|0,l=l+Math.imul(D,F)|0,s=s+Math.imul(w,be)|0,c=c+Math.imul(w,I)|0,c=c+Math.imul(T,be)|0,l=l+Math.imul(T,I)|0,s=s+Math.imul(S,L)|0,c=c+Math.imul(S,R)|0,c=c+Math.imul(C,L)|0,l=l+Math.imul(C,R)|0,s=s+Math.imul(b,Ce)|0,c=c+Math.imul(b,we)|0,c=c+Math.imul(x,Ce)|0,l=l+Math.imul(x,we)|0,s=s+Math.imul(_,z)|0,c=c+Math.imul(_,Ee)|0,c=c+Math.imul(v,z)|0,l=l+Math.imul(v,Ee)|0,s=s+Math.imul(m,Oe)|0,c=c+Math.imul(m,B)|0,c=c+Math.imul(h,Oe)|0,l=l+Math.imul(h,B)|0;var W=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(W>>>26)|0,W&=67108863,s=Math.imul(O,j),c=Math.imul(O,M),c=c+Math.imul(ue,j)|0,l=Math.imul(ue,M),s=s+Math.imul(se,ge)|0,c=c+Math.imul(se,_e)|0,c=c+Math.imul(ce,ge)|0,l=l+Math.imul(ce,_e)|0,s=s+Math.imul(ie,P)|0,c=c+Math.imul(ie,F)|0,c=c+Math.imul(ae,P)|0,l=l+Math.imul(ae,F)|0,s=s+Math.imul(E,be)|0,c=c+Math.imul(E,I)|0,c=c+Math.imul(D,be)|0,l=l+Math.imul(D,I)|0,s=s+Math.imul(w,L)|0,c=c+Math.imul(w,R)|0,c=c+Math.imul(T,L)|0,l=l+Math.imul(T,R)|0,s=s+Math.imul(S,Ce)|0,c=c+Math.imul(S,we)|0,c=c+Math.imul(C,Ce)|0,l=l+Math.imul(C,we)|0,s=s+Math.imul(b,z)|0,c=c+Math.imul(b,Ee)|0,c=c+Math.imul(x,z)|0,l=l+Math.imul(x,Ee)|0,s=s+Math.imul(_,Oe)|0,c=c+Math.imul(_,B)|0,c=c+Math.imul(v,Oe)|0,l=l+Math.imul(v,B)|0;var G=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(G>>>26)|0,G&=67108863,s=Math.imul(O,ge),c=Math.imul(O,_e),c=c+Math.imul(ue,ge)|0,l=Math.imul(ue,_e),s=s+Math.imul(se,P)|0,c=c+Math.imul(se,F)|0,c=c+Math.imul(ce,P)|0,l=l+Math.imul(ce,F)|0,s=s+Math.imul(ie,be)|0,c=c+Math.imul(ie,I)|0,c=c+Math.imul(ae,be)|0,l=l+Math.imul(ae,I)|0,s=s+Math.imul(E,L)|0,c=c+Math.imul(E,R)|0,c=c+Math.imul(D,L)|0,l=l+Math.imul(D,R)|0,s=s+Math.imul(w,Ce)|0,c=c+Math.imul(w,we)|0,c=c+Math.imul(T,Ce)|0,l=l+Math.imul(T,we)|0,s=s+Math.imul(S,z)|0,c=c+Math.imul(S,Ee)|0,c=c+Math.imul(C,z)|0,l=l+Math.imul(C,Ee)|0,s=s+Math.imul(b,Oe)|0,c=c+Math.imul(b,B)|0,c=c+Math.imul(x,Oe)|0,l=l+Math.imul(x,B)|0;var K=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(K>>>26)|0,K&=67108863,s=Math.imul(O,P),c=Math.imul(O,F),c=c+Math.imul(ue,P)|0,l=Math.imul(ue,F),s=s+Math.imul(se,be)|0,c=c+Math.imul(se,I)|0,c=c+Math.imul(ce,be)|0,l=l+Math.imul(ce,I)|0,s=s+Math.imul(ie,L)|0,c=c+Math.imul(ie,R)|0,c=c+Math.imul(ae,L)|0,l=l+Math.imul(ae,R)|0,s=s+Math.imul(E,Ce)|0,c=c+Math.imul(E,we)|0,c=c+Math.imul(D,Ce)|0,l=l+Math.imul(D,we)|0,s=s+Math.imul(w,z)|0,c=c+Math.imul(w,Ee)|0,c=c+Math.imul(T,z)|0,l=l+Math.imul(T,Ee)|0,s=s+Math.imul(S,Oe)|0,c=c+Math.imul(S,B)|0,c=c+Math.imul(C,Oe)|0,l=l+Math.imul(C,B)|0;var q=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(q>>>26)|0,q&=67108863,s=Math.imul(O,be),c=Math.imul(O,I),c=c+Math.imul(ue,be)|0,l=Math.imul(ue,I),s=s+Math.imul(se,L)|0,c=c+Math.imul(se,R)|0,c=c+Math.imul(ce,L)|0,l=l+Math.imul(ce,R)|0,s=s+Math.imul(ie,Ce)|0,c=c+Math.imul(ie,we)|0,c=c+Math.imul(ae,Ce)|0,l=l+Math.imul(ae,we)|0,s=s+Math.imul(E,z)|0,c=c+Math.imul(E,Ee)|0,c=c+Math.imul(D,z)|0,l=l+Math.imul(D,Ee)|0,s=s+Math.imul(w,Oe)|0,c=c+Math.imul(w,B)|0,c=c+Math.imul(T,Oe)|0,l=l+Math.imul(T,B)|0;var J=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(J>>>26)|0,J&=67108863,s=Math.imul(O,L),c=Math.imul(O,R),c=c+Math.imul(ue,L)|0,l=Math.imul(ue,R),s=s+Math.imul(se,Ce)|0,c=c+Math.imul(se,we)|0,c=c+Math.imul(ce,Ce)|0,l=l+Math.imul(ce,we)|0,s=s+Math.imul(ie,z)|0,c=c+Math.imul(ie,Ee)|0,c=c+Math.imul(ae,z)|0,l=l+Math.imul(ae,Ee)|0,s=s+Math.imul(E,Oe)|0,c=c+Math.imul(E,B)|0,c=c+Math.imul(D,Oe)|0,l=l+Math.imul(D,B)|0;var Ie=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,s=Math.imul(O,Ce),c=Math.imul(O,we),c=c+Math.imul(ue,Ce)|0,l=Math.imul(ue,we),s=s+Math.imul(se,z)|0,c=c+Math.imul(se,Ee)|0,c=c+Math.imul(ce,z)|0,l=l+Math.imul(ce,Ee)|0,s=s+Math.imul(ie,Oe)|0,c=c+Math.imul(ie,B)|0,c=c+Math.imul(ae,Oe)|0,l=l+Math.imul(ae,B)|0;var Le=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(Le>>>26)|0,Le&=67108863,s=Math.imul(O,z),c=Math.imul(O,Ee),c=c+Math.imul(ue,z)|0,l=Math.imul(ue,Ee),s=s+Math.imul(se,Oe)|0,c=c+Math.imul(se,B)|0,c=c+Math.imul(ce,Oe)|0,l=l+Math.imul(ce,B)|0;var Re=(o+s|0)+((c&8191)<<13)|0;o=(l+(c>>>13)|0)+(Re>>>26)|0,Re&=67108863,s=Math.imul(O,Oe),c=Math.imul(O,B),c=c+Math.imul(ue,Oe)|0,l=Math.imul(ue,B);var ze=(o+s|0)+((c&8191)<<13)|0;return o=(l+(c>>>13)|0)+(ze>>>26)|0,ze&=67108863,a[0]=ke,a[1]=Ae,a[2]=je,a[3]=Me,a[4]=Ne,a[5]=Pe,a[6]=Fe,a[7]=V,a[8]=H,a[9]=U,a[10]=W,a[11]=G,a[12]=K,a[13]=q,a[14]=J,a[15]=Ie,a[16]=Le,a[17]=Re,a[18]=ze,o!==0&&(a[19]=o,n.length++),n};Math.imul||(_=g);function v(e,t,n){n.negative=t.negative^e.negative,n.length=e.length+t.length;for(var r=0,i=0,a=0;a<n.length-1;a++){var o=i;i=0;for(var s=r&67108863,c=Math.min(a,t.length-1),l=Math.max(0,a-e.length+1);l<=c;l++){var u=a-l,d=(e.words[u]|0)*(t.words[l]|0),f=d&67108863;o=o+(d/67108864|0)|0,f=f+s|0,s=f&67108863,o=o+(f>>>26)|0,i+=o>>>26,o&=67108863}n.words[a]=s,r=o,o=i}return r===0?n.length--:n.words[a]=r,n._strip()}function y(e,t,n){return v(e,t,n)}i.prototype.mulTo=function(e,t){var n,r=this.length+e.length;return n=this.length===10&&e.length===10?_(this,e,t):r<63?g(this,e,t):r<1024?v(this,e,t):y(this,e,t),n},i.prototype.mul=function(e){var t=new i(null);return t.words=Array(this.length+e.length),this.mulTo(e,t)},i.prototype.mulf=function(e){var t=new i(null);return t.words=Array(this.length+e.length),y(this,e,t)},i.prototype.imul=function(e){return this.clone().mulTo(e,this)},i.prototype.imuln=function(e){var t=e<0;t&&(e=-e),n(typeof e==`number`),n(e<67108864);for(var r=0,i=0;i<this.length;i++){var a=(this.words[i]|0)*e,o=(a&67108863)+(r&67108863);r>>=26,r+=a/67108864|0,r+=o>>>26,this.words[i]=o&67108863}return r!==0&&(this.words[i]=r,this.length++),t?this.ineg():this},i.prototype.muln=function(e){return this.clone().imuln(e)},i.prototype.sqr=function(){return this.mul(this)},i.prototype.isqr=function(){return this.imul(this.clone())},i.prototype.pow=function(e){var t=h(e);if(t.length===0)return new i(1);for(var n=this,r=0;r<t.length&&t[r]===0;r++,n=n.sqr());if(++r<t.length)for(var a=n.sqr();r<t.length;r++,a=a.sqr())t[r]!==0&&(n=n.mul(a));return n},i.prototype.iushln=function(e){n(typeof e==`number`&&e>=0);var t=e%26,r=(e-t)/26,i=67108863>>>26-t<<26-t,a;if(t!==0){var o=0;for(a=0;a<this.length;a++){var s=this.words[a]&i,c=(this.words[a]|0)-s<<t;this.words[a]=c|o,o=s>>>26-t}o&&(this.words[a]=o,this.length++)}if(r!==0){for(a=this.length-1;a>=0;a--)this.words[a+r]=this.words[a];for(a=0;a<r;a++)this.words[a]=0;this.length+=r}return this._strip()},i.prototype.ishln=function(e){return n(this.negative===0),this.iushln(e)},i.prototype.iushrn=function(e,t,r){n(typeof e==`number`&&e>=0);var i=t?(t-t%26)/26:0,a=e%26,o=Math.min((e-a)/26,this.length),s=67108863^67108863>>>a<<a,c=r;if(i-=o,i=Math.max(0,i),c){for(var l=0;l<o;l++)c.words[l]=this.words[l];c.length=o}if(o!==0)if(this.length>o)for(this.length-=o,l=0;l<this.length;l++)this.words[l]=this.words[l+o];else this.words[0]=0,this.length=1;var u=0;for(l=this.length-1;l>=0&&(u!==0||l>=i);l--){var d=this.words[l]|0;this.words[l]=u<<26-a|d>>>a,u=d&s}return c&&u!==0&&(c.words[c.length++]=u),this.length===0&&(this.words[0]=0,this.length=1),this._strip()},i.prototype.ishrn=function(e,t,r){return n(this.negative===0),this.iushrn(e,t,r)},i.prototype.shln=function(e){return this.clone().ishln(e)},i.prototype.ushln=function(e){return this.clone().iushln(e)},i.prototype.shrn=function(e){return this.clone().ishrn(e)},i.prototype.ushrn=function(e){return this.clone().iushrn(e)},i.prototype.testn=function(e){n(typeof e==`number`&&e>=0);var t=e%26,r=(e-t)/26,i=1<<t;return this.length<=r?!1:!!(this.words[r]&i)},i.prototype.imaskn=function(e){n(typeof e==`number`&&e>=0);var t=e%26,r=(e-t)/26;if(n(this.negative===0,`imaskn works only with positive numbers`),this.length<=r)return this;if(t!==0&&r++,this.length=Math.min(r,this.length),t!==0){var i=67108863^67108863>>>t<<t;this.words[this.length-1]&=i}return this._strip()},i.prototype.maskn=function(e){return this.clone().imaskn(e)},i.prototype.iaddn=function(e){return n(typeof e==`number`),n(e<67108864),e<0?this.isubn(-e):this.negative===0?this._iaddn(e):this.length===1&&(this.words[0]|0)<=e?(this.words[0]=e-(this.words[0]|0),this.negative=0,this):(this.negative=0,this.isubn(e),this.negative=1,this)},i.prototype._iaddn=function(e){this.words[0]+=e;for(var t=0;t<this.length&&this.words[t]>=67108864;t++)this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++;return this.length=Math.max(this.length,t+1),this},i.prototype.isubn=function(e){if(n(typeof e==`number`),n(e<67108864),e<0)return this.iaddn(-e);if(this.negative!==0)return this.negative=0,this.iaddn(e),this.negative=1,this;if(this.words[0]-=e,this.length===1&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var t=0;t<this.length&&this.words[t]<0;t++)this.words[t]+=67108864,--this.words[t+1];return this._strip()},i.prototype.addn=function(e){return this.clone().iaddn(e)},i.prototype.subn=function(e){return this.clone().isubn(e)},i.prototype.iabs=function(){return this.negative=0,this},i.prototype.abs=function(){return this.clone().iabs()},i.prototype._ishlnsubmul=function(e,t,r){var i=e.length+r,a;this._expand(i);var o,s=0;for(a=0;a<e.length;a++){o=(this.words[a+r]|0)+s;var c=(e.words[a]|0)*t;o-=c&67108863,s=(o>>26)-(c/67108864|0),this.words[a+r]=o&67108863}for(;a<this.length-r;a++)o=(this.words[a+r]|0)+s,s=o>>26,this.words[a+r]=o&67108863;if(s===0)return this._strip();for(n(s===-1),s=0,a=0;a<this.length;a++)o=-(this.words[a]|0)+s,s=o>>26,this.words[a]=o&67108863;return this.negative=1,this._strip()},i.prototype._wordDiv=function(e,t){var n=this.length-e.length,r=this.clone(),a=e,o=a.words[a.length-1]|0;n=26-this._countBits(o),n!==0&&(a=a.ushln(n),r.iushln(n),o=a.words[a.length-1]|0);var s=r.length-a.length,c;if(t!==`mod`){c=new i(null),c.length=s+1,c.words=Array(c.length);for(var l=0;l<c.length;l++)c.words[l]=0}var u=r.clone()._ishlnsubmul(a,1,s);u.negative===0&&(r=u,c&&(c.words[s]=1));for(var d=s-1;d>=0;d--){var f=(r.words[a.length+d]|0)*67108864+(r.words[a.length+d-1]|0);for(f=Math.min(f/o|0,67108863),r._ishlnsubmul(a,f,d);r.negative!==0;)f--,r.negative=0,r._ishlnsubmul(a,1,d),r.isZero()||(r.negative^=1);c&&(c.words[d]=f)}return c&&c._strip(),r._strip(),t!==`div`&&n!==0&&r.iushrn(n),{div:c||null,mod:r}},i.prototype.divmod=function(e,t,r){if(n(!e.isZero()),this.isZero())return{div:new i(0),mod:new i(0)};var a,o,s;return this.negative!==0&&e.negative===0?(s=this.neg().divmod(e,t),t!==`mod`&&(a=s.div.neg()),t!==`div`&&(o=s.mod.neg(),r&&o.negative!==0&&o.iadd(e)),{div:a,mod:o}):this.negative===0&&e.negative!==0?(s=this.divmod(e.neg(),t),t!==`mod`&&(a=s.div.neg()),{div:a,mod:s.mod}):this.negative&e.negative?(s=this.neg().divmod(e.neg(),t),t!==`div`&&(o=s.mod.neg(),r&&o.negative!==0&&o.isub(e)),{div:s.div,mod:o}):e.length>this.length||this.cmp(e)<0?{div:new i(0),mod:this}:e.length===1?t===`div`?{div:this.divn(e.words[0]),mod:null}:t===`mod`?{div:null,mod:new i(this.modrn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new i(this.modrn(e.words[0]))}:this._wordDiv(e,t)},i.prototype.div=function(e){return this.divmod(e,`div`,!1).div},i.prototype.mod=function(e){return this.divmod(e,`mod`,!1).mod},i.prototype.umod=function(e){return this.divmod(e,`mod`,!0).mod},i.prototype.divRound=function(e){var t=this.divmod(e);if(t.mod.isZero())return t.div;var n=t.div.negative===0?t.mod:t.mod.isub(e),r=e.ushrn(1),i=e.andln(1),a=n.cmp(r);return a<0||i===1&&a===0?t.div:t.div.negative===0?t.div.iaddn(1):t.div.isubn(1)},i.prototype.modrn=function(e){var t=e<0;t&&(e=-e),n(e<=67108863);for(var r=(1<<26)%e,i=0,a=this.length-1;a>=0;a--)i=(r*i+(this.words[a]|0))%e;return t?-i:i},i.prototype.modn=function(e){return this.modrn(e)},i.prototype.idivn=function(e){var t=e<0;t&&(e=-e),n(e<=67108863);for(var r=0,i=this.length-1;i>=0;i--){var a=(this.words[i]|0)+r*67108864;this.words[i]=a/e|0,r=a%e}return this._strip(),t?this.ineg():this},i.prototype.divn=function(e){return this.clone().idivn(e)},i.prototype.egcd=function(e){n(e.negative===0),n(!e.isZero());var t=this,r=e.clone();t=t.negative===0?t.clone():t.umod(e);for(var a=new i(1),o=new i(0),s=new i(0),c=new i(1),l=0;t.isEven()&&r.isEven();)t.iushrn(1),r.iushrn(1),++l;for(var u=r.clone(),d=t.clone();!t.isZero();){for(var f=0,p=1;!(t.words[0]&p)&&f<26;++f,p<<=1);if(f>0)for(t.iushrn(f);f-- >0;)(a.isOdd()||o.isOdd())&&(a.iadd(u),o.isub(d)),a.iushrn(1),o.iushrn(1);for(var m=0,h=1;!(r.words[0]&h)&&m<26;++m,h<<=1);if(m>0)for(r.iushrn(m);m-- >0;)(s.isOdd()||c.isOdd())&&(s.iadd(u),c.isub(d)),s.iushrn(1),c.iushrn(1);t.cmp(r)>=0?(t.isub(r),a.isub(s),o.isub(c)):(r.isub(t),s.isub(a),c.isub(o))}return{a:s,b:c,gcd:r.iushln(l)}},i.prototype._invmp=function(e){n(e.negative===0),n(!e.isZero());var t=this,r=e.clone();t=t.negative===0?t.clone():t.umod(e);for(var a=new i(1),o=new i(0),s=r.clone();t.cmpn(1)>0&&r.cmpn(1)>0;){for(var c=0,l=1;!(t.words[0]&l)&&c<26;++c,l<<=1);if(c>0)for(t.iushrn(c);c-- >0;)a.isOdd()&&a.iadd(s),a.iushrn(1);for(var u=0,d=1;!(r.words[0]&d)&&u<26;++u,d<<=1);if(u>0)for(r.iushrn(u);u-- >0;)o.isOdd()&&o.iadd(s),o.iushrn(1);t.cmp(r)>=0?(t.isub(r),a.isub(o)):(r.isub(t),o.isub(a))}var f;return f=t.cmpn(1)===0?a:o,f.cmpn(0)<0&&f.iadd(e),f},i.prototype.gcd=function(e){if(this.isZero())return e.abs();if(e.isZero())return this.abs();var t=this.clone(),n=e.clone();t.negative=0,n.negative=0;for(var r=0;t.isEven()&&n.isEven();r++)t.iushrn(1),n.iushrn(1);do{for(;t.isEven();)t.iushrn(1);for(;n.isEven();)n.iushrn(1);var i=t.cmp(n);if(i<0){var a=t;t=n,n=a}else if(i===0||n.cmpn(1)===0)break;t.isub(n)}while(!0);return n.iushln(r)},i.prototype.invm=function(e){return this.egcd(e).a.umod(e)},i.prototype.isEven=function(){return(this.words[0]&1)==0},i.prototype.isOdd=function(){return(this.words[0]&1)==1},i.prototype.andln=function(e){return this.words[0]&e},i.prototype.bincn=function(e){n(typeof e==`number`);var t=e%26,r=(e-t)/26,i=1<<t;if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this;for(var a=i,o=r;a!==0&&o<this.length;o++){var s=this.words[o]|0;s+=a,a=s>>>26,s&=67108863,this.words[o]=s}return a!==0&&(this.words[o]=a,this.length++),this},i.prototype.isZero=function(){return this.length===1&&this.words[0]===0},i.prototype.cmpn=function(e){var t=e<0;if(this.negative!==0&&!t)return-1;if(this.negative===0&&t)return 1;this._strip();var r;if(this.length>1)r=1;else{t&&(e=-e),n(e<=67108863,`Number is too big`);var i=this.words[0]|0;r=i===e?0:i<e?-1:1}return this.negative===0?r:-r|0},i.prototype.cmp=function(e){if(this.negative!==0&&e.negative===0)return-1;if(this.negative===0&&e.negative!==0)return 1;var t=this.ucmp(e);return this.negative===0?t:-t|0},i.prototype.ucmp=function(e){if(this.length>e.length)return 1;if(this.length<e.length)return-1;for(var t=0,n=this.length-1;n>=0;n--){var r=this.words[n]|0,i=e.words[n]|0;if(r!==i){r<i?t=-1:r>i&&(t=1);break}}return t},i.prototype.gtn=function(e){return this.cmpn(e)===1},i.prototype.gt=function(e){return this.cmp(e)===1},i.prototype.gten=function(e){return this.cmpn(e)>=0},i.prototype.gte=function(e){return this.cmp(e)>=0},i.prototype.ltn=function(e){return this.cmpn(e)===-1},i.prototype.lt=function(e){return this.cmp(e)===-1},i.prototype.lten=function(e){return this.cmpn(e)<=0},i.prototype.lte=function(e){return this.cmp(e)<=0},i.prototype.eqn=function(e){return this.cmpn(e)===0},i.prototype.eq=function(e){return this.cmp(e)===0},i.red=function(e){return new w(e)},i.prototype.toRed=function(e){return n(!this.red,`Already a number in reduction context`),n(this.negative===0,`red works only with positives`),e.convertTo(this)._forceRed(e)},i.prototype.fromRed=function(){return n(this.red,`fromRed works only with numbers in reduction context`),this.red.convertFrom(this)},i.prototype._forceRed=function(e){return this.red=e,this},i.prototype.forceRed=function(e){return n(!this.red,`Already a number in reduction context`),this._forceRed(e)},i.prototype.redAdd=function(e){return n(this.red,`redAdd works only with red numbers`),this.red.add(this,e)},i.prototype.redIAdd=function(e){return n(this.red,`redIAdd works only with red numbers`),this.red.iadd(this,e)},i.prototype.redSub=function(e){return n(this.red,`redSub works only with red numbers`),this.red.sub(this,e)},i.prototype.redISub=function(e){return n(this.red,`redISub works only with red numbers`),this.red.isub(this,e)},i.prototype.redShl=function(e){return n(this.red,`redShl works only with red numbers`),this.red.shl(this,e)},i.prototype.redMul=function(e){return n(this.red,`redMul works only with red numbers`),this.red._verify2(this,e),this.red.mul(this,e)},i.prototype.redIMul=function(e){return n(this.red,`redMul works only with red numbers`),this.red._verify2(this,e),this.red.imul(this,e)},i.prototype.redSqr=function(){return n(this.red,`redSqr works only with red numbers`),this.red._verify1(this),this.red.sqr(this)},i.prototype.redISqr=function(){return n(this.red,`redISqr works only with red numbers`),this.red._verify1(this),this.red.isqr(this)},i.prototype.redSqrt=function(){return n(this.red,`redSqrt works only with red numbers`),this.red._verify1(this),this.red.sqrt(this)},i.prototype.redInvm=function(){return n(this.red,`redInvm works only with red numbers`),this.red._verify1(this),this.red.invm(this)},i.prototype.redNeg=function(){return n(this.red,`redNeg works only with red numbers`),this.red._verify1(this),this.red.neg(this)},i.prototype.redPow=function(e){return n(this.red&&!e.red,`redPow(normalNum)`),this.red._verify1(this),this.red.pow(this,e)};var b={k256:null,p224:null,p192:null,p25519:null};function x(e,t){this.name=e,this.p=new i(t,16),this.n=this.p.bitLength(),this.k=new i(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}x.prototype._tmp=function(){var e=new i(null);return e.words=Array(Math.ceil(this.n/13)),e},x.prototype.ireduce=function(e){var t=e,n;do this.split(t,this.tmp),t=this.imulK(t),t=t.iadd(this.tmp),n=t.bitLength();while(n>this.n);var r=n<this.n?-1:t.ucmp(this.p);return r===0?(t.words[0]=0,t.length=1):r>0?t.isub(this.p):t.strip===void 0?t._strip():t.strip(),t},x.prototype.split=function(e,t){e.iushrn(this.n,0,t)},x.prototype.imulK=function(e){return e.imul(this.k)};function ee(){x.call(this,`k256`,`ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f`)}r(ee,x),ee.prototype.split=function(e,t){for(var n=4194303,r=Math.min(e.length,9),i=0;i<r;i++)t.words[i]=e.words[i];if(t.length=r,e.length<=9){e.words[0]=0,e.length=1;return}var a=e.words[9];for(t.words[t.length++]=a&n,i=10;i<e.length;i++){var o=e.words[i]|0;e.words[i-10]=(o&n)<<4|a>>>22,a=o}a>>>=22,e.words[i-10]=a,a===0&&e.length>10?e.length-=10:e.length-=9},ee.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2;for(var t=0,n=0;n<e.length;n++){var r=e.words[n]|0;t+=r*977,e.words[n]=t&67108863,t=r*64+(t/67108864|0)}return e.words[e.length-1]===0&&(e.length--,e.words[e.length-1]===0&&e.length--),e};function S(){x.call(this,`p224`,`ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001`)}r(S,x);function C(){x.call(this,`p192`,`ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff`)}r(C,x);function te(){x.call(this,`25519`,`7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed`)}r(te,x),te.prototype.imulK=function(e){for(var t=0,n=0;n<e.length;n++){var r=(e.words[n]|0)*19+t,i=r&67108863;r>>>=26,e.words[n]=i,t=r}return t!==0&&(e.words[e.length++]=t),e},i._prime=function(e){if(b[e])return b[e];var t;if(e===`k256`)t=new ee;else if(e===`p224`)t=new S;else if(e===`p192`)t=new C;else if(e===`p25519`)t=new te;else throw Error(`Unknown prime `+e);return b[e]=t,t};function w(e){if(typeof e==`string`){var t=i._prime(e);this.m=t.p,this.prime=t}else n(e.gtn(1),`modulus must be greater than 1`),this.m=e,this.prime=null}w.prototype._verify1=function(e){n(e.negative===0,`red works only with positives`),n(e.red,`red works only with red numbers`)},w.prototype._verify2=function(e,t){n((e.negative|t.negative)===0,`red works only with positives`),n(e.red&&e.red===t.red,`red works only with red numbers`)},w.prototype.imod=function(e){return this.prime?this.prime.ireduce(e)._forceRed(this):(l(e,e.umod(this.m)._forceRed(this)),e)},w.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},w.prototype.add=function(e,t){this._verify2(e,t);var n=e.add(t);return n.cmp(this.m)>=0&&n.isub(this.m),n._forceRed(this)},w.prototype.iadd=function(e,t){this._verify2(e,t);var n=e.iadd(t);return n.cmp(this.m)>=0&&n.isub(this.m),n},w.prototype.sub=function(e,t){this._verify2(e,t);var n=e.sub(t);return n.cmpn(0)<0&&n.iadd(this.m),n._forceRed(this)},w.prototype.isub=function(e,t){this._verify2(e,t);var n=e.isub(t);return n.cmpn(0)<0&&n.iadd(this.m),n},w.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},w.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},w.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},w.prototype.isqr=function(e){return this.imul(e,e.clone())},w.prototype.sqr=function(e){return this.mul(e,e)},w.prototype.sqrt=function(e){if(e.isZero())return e.clone();var t=this.m.andln(3);if(n(t%2==1),t===3){var r=this.m.add(new i(1)).iushrn(2);return this.pow(e,r)}for(var a=this.m.subn(1),o=0;!a.isZero()&&a.andln(1)===0;)o++,a.iushrn(1);n(!a.isZero());var s=new i(1).toRed(this),c=s.redNeg(),l=this.m.subn(1).iushrn(1),u=this.m.bitLength();for(u=new i(2*u*u).toRed(this);this.pow(u,l).cmp(c)!==0;)u.redIAdd(c);for(var d=this.pow(u,a),f=this.pow(e,a.addn(1).iushrn(1)),p=this.pow(e,a),m=o;p.cmp(s)!==0;){for(var h=p,g=0;h.cmp(s)!==0;g++)h=h.redSqr();n(g<m);var _=this.pow(d,new i(1).iushln(m-g-1));f=f.redMul(_),d=_.redSqr(),p=p.redMul(d),m=g}return f},w.prototype.invm=function(e){var t=e._invmp(this.m);return t.negative===0?this.imod(t):(t.negative=0,this.imod(t).redNeg())},w.prototype.pow=function(e,t){if(t.isZero())return new i(1).toRed(this);if(t.cmpn(1)===0)return e.clone();var n=4,r=Array(1<<n);r[0]=new i(1).toRed(this),r[1]=e;for(var a=2;a<r.length;a++)r[a]=this.mul(r[a-1],e);var o=r[0],s=0,c=0,l=t.bitLength()%26;for(l===0&&(l=26),a=t.length-1;a>=0;a--){for(var u=t.words[a],d=l-1;d>=0;d--){var f=u>>d&1;if(o!==r[0]&&(o=this.sqr(o)),f===0&&s===0){c=0;continue}s<<=1,s|=f,c++,!(c!==n&&(a!==0||d!==0))&&(o=this.mul(o,r[s]),c=0,s=0)}l=26}return o},w.prototype.convertTo=function(e){var t=e.umod(this.m);return t===e?t.clone():t},w.prototype.convertFrom=function(e){var t=e.clone();return t.red=null,t},i.mont=function(e){return new T(e)};function T(e){w.call(this,e),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new i(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}r(T,w),T.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},T.prototype.convertFrom=function(e){var t=this.imod(e.mul(this.rinv));return t.red=null,t},T.prototype.imul=function(e,t){if(e.isZero()||t.isZero())return e.words[0]=0,e.length=1,e;var n=e.imul(t),r=n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=n.isub(r).iushrn(this.shift),a=i;return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},T.prototype.mul=function(e,t){if(e.isZero()||t.isZero())return new i(0)._forceRed(this);var n=e.mul(t),r=n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),a=n.isub(r).iushrn(this.shift),o=a;return a.cmp(this.m)>=0?o=a.isub(this.m):a.cmpn(0)<0&&(o=a.iadd(this.m)),o._forceRed(this)},T.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)}})(e,GS)})(gC);var vC=gC.exports,yC=`bignumber/5.7.0`,bC=vC.BN,xC=new aC(yC),SC={},CC=9007199254740991;function wC(e){return e!=null&&(EC.isBigNumber(e)||typeof e==`number`&&e%1==0||typeof e==`string`&&!!e.match(/^-?[0-9]+$/)||fC(e)||typeof e==`bigint`||uC(e))}var TC=!1,EC=class e{constructor(e,t){e!==SC&&xC.throwError(`cannot call constructor directly; use BigNumber.from`,aC.errors.UNSUPPORTED_OPERATION,{operation:`new (BigNumber)`}),this._hex=t,this._isBigNumber=!0,Object.freeze(this)}fromTwos(e){return OC(kC(this).fromTwos(e))}toTwos(e){return OC(kC(this).toTwos(e))}abs(){return this._hex[0]===`-`?e.from(this._hex.substring(1)):this}add(e){return OC(kC(this).add(kC(e)))}sub(e){return OC(kC(this).sub(kC(e)))}div(t){return e.from(t).isZero()&&AC(`division-by-zero`,`div`),OC(kC(this).div(kC(t)))}mul(e){return OC(kC(this).mul(kC(e)))}mod(e){let t=kC(e);return t.isNeg()&&AC(`division-by-zero`,`mod`),OC(kC(this).umod(t))}pow(e){let t=kC(e);return t.isNeg()&&AC(`negative-power`,`pow`),OC(kC(this).pow(t))}and(e){let t=kC(e);return(this.isNegative()||t.isNeg())&&AC(`unbound-bitwise-result`,`and`),OC(kC(this).and(t))}or(e){let t=kC(e);return(this.isNegative()||t.isNeg())&&AC(`unbound-bitwise-result`,`or`),OC(kC(this).or(t))}xor(e){let t=kC(e);return(this.isNegative()||t.isNeg())&&AC(`unbound-bitwise-result`,`xor`),OC(kC(this).xor(t))}mask(e){return(this.isNegative()||e<0)&&AC(`negative-width`,`mask`),OC(kC(this).maskn(e))}shl(e){return(this.isNegative()||e<0)&&AC(`negative-width`,`shl`),OC(kC(this).shln(e))}shr(e){return(this.isNegative()||e<0)&&AC(`negative-width`,`shr`),OC(kC(this).shrn(e))}eq(e){return kC(this).eq(kC(e))}lt(e){return kC(this).lt(kC(e))}lte(e){return kC(this).lte(kC(e))}gt(e){return kC(this).gt(kC(e))}gte(e){return kC(this).gte(kC(e))}isNegative(){return this._hex[0]===`-`}isZero(){return kC(this).isZero()}toNumber(){try{return kC(this).toNumber()}catch{AC(`overflow`,`toNumber`,this.toString())}return null}toBigInt(){try{return BigInt(this.toString())}catch{}return xC.throwError(`this platform does not support BigInt`,aC.errors.UNSUPPORTED_OPERATION,{value:this.toString()})}toString(){return arguments.length>0&&(arguments[0]===10?TC||(TC=!0,xC.warn(`BigNumber.toString does not accept any parameters; base-10 is assumed`)):arguments[0]===16?xC.throwError(`BigNumber.toString does not accept any parameters; use bigNumber.toHexString()`,aC.errors.UNEXPECTED_ARGUMENT,{}):xC.throwError(`BigNumber.toString does not accept parameters`,aC.errors.UNEXPECTED_ARGUMENT,{})),kC(this).toString(10)}toHexString(){return this._hex}toJSON(e){return{type:`BigNumber`,hex:this.toHexString()}}static from(t){if(t instanceof e)return t;if(typeof t==`string`)return t.match(/^-?0x[0-9a-f]+$/i)?new e(SC,DC(t)):t.match(/^-?[0-9]+$/)?new e(SC,DC(new bC(t))):xC.throwArgumentError(`invalid BigNumber string`,`value`,t);if(typeof t==`number`)return t%1&&AC(`underflow`,`BigNumber.from`,t),(t>=CC||t<=-CC)&&AC(`overflow`,`BigNumber.from`,t),e.from(String(t));let n=t;if(typeof n==`bigint`)return e.from(n.toString());if(uC(n))return e.from(mC(n));if(n)if(n.toHexString){let t=n.toHexString();if(typeof t==`string`)return e.from(t)}else{let t=n._hex;if(t==null&&n.type===`BigNumber`&&(t=n.hex),typeof t==`string`&&(fC(t)||t[0]===`-`&&fC(t.substring(1))))return e.from(t)}return xC.throwArgumentError(`invalid BigNumber value`,`value`,t)}static isBigNumber(e){return!!(e&&e._isBigNumber)}};function DC(e){if(typeof e!=`string`)return DC(e.toString(16));if(e[0]===`-`)return e=e.substring(1),e[0]===`-`&&xC.throwArgumentError(`invalid hex`,`value`,e),e=DC(e),e===`0x00`?e:`-`+e;if(e.substring(0,2)!==`0x`&&(e=`0x`+e),e===`0x`)return`0x00`;for(e.length%2&&(e=`0x0`+e.substring(2));e.length>4&&e.substring(0,4)===`0x00`;)e=`0x`+e.substring(4);return e}function OC(e){return EC.from(DC(e))}function kC(e){let t=EC.from(e).toHexString();return t[0]===`-`?new bC(`-`+t.substring(3),16):new bC(t.substring(2),16)}function AC(e,t,n){let r={fault:e,operation:t};return n!=null&&(r.value=n),xC.throwError(e,aC.errors.NUMERIC_FAULT,r)}var jC=new aC(yC),MC={},NC=EC.from(0),PC=EC.from(-1);function FC(e,t,n,r){let i={fault:t,operation:n};return r!==void 0&&(i.value=r),jC.throwError(e,aC.errors.NUMERIC_FAULT,i)}for(var IC=`0`;IC.length<256;)IC+=IC;function LC(e){if(typeof e!=`number`)try{e=EC.from(e).toNumber()}catch{}return typeof e==`number`&&e>=0&&e<=256&&!(e%1)?`1`+IC.substring(0,e):jC.throwArgumentError(`invalid decimal size`,`decimals`,e)}function RC(e,t){t??(t=0);let n=LC(t);e=EC.from(e);let r=e.lt(NC);r&&(e=e.mul(PC));let i=e.mod(n).toString();for(;i.length<n.length-1;)i=`0`+i;i=i.match(/^([0-9]*[1-9]|0)(0*)/)[1];let a=e.div(n).toString();return e=n.length===1?a:a+`.`+i,r&&(e=`-`+e),e}function zC(e,t){t??(t=0);let n=LC(t);(typeof e!=`string`||!e.match(/^-?[0-9.]+$/))&&jC.throwArgumentError(`invalid decimal value`,`value`,e);let r=e.substring(0,1)===`-`;r&&(e=e.substring(1)),e===`.`&&jC.throwArgumentError(`missing value`,`value`,e);let i=e.split(`.`);i.length>2&&jC.throwArgumentError(`too many decimal points`,`value`,e);let a=i[0],o=i[1];for(a||(a=`0`),o||(o=`0`);o[o.length-1]===`0`;)o=o.substring(0,o.length-1);for(o.length>n.length-1&&FC(`fractional component exceeds decimals`,`underflow`,`parseFixed`),o===``&&(o=`0`);o.length<n.length-1;)o+=`0`;let s=EC.from(a),c=EC.from(o),l=s.mul(n).add(c);return r&&(l=l.mul(PC)),l}var BC=class e{constructor(e,t,n,r){e!==MC&&jC.throwError(`cannot use FixedFormat constructor; use FixedFormat.from`,aC.errors.UNSUPPORTED_OPERATION,{operation:`new FixedFormat`}),this.signed=t,this.width=n,this.decimals=r,this.name=(t?``:`u`)+`fixed`+String(n)+`x`+String(r),this._multiplier=LC(r),Object.freeze(this)}static from(t){if(t instanceof e)return t;typeof t==`number`&&(t=`fixed128x${t}`);let n=!0,r=128,i=18;if(typeof t==`string`){if(t!==`fixed`)if(t===`ufixed`)n=!1;else{let e=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);e||jC.throwArgumentError(`invalid fixed format`,`format`,t),n=e[1]!==`u`,r=parseInt(e[2]),i=parseInt(e[3])}}else if(t){let e=(e,n,r)=>t[e]==null?r:(typeof t[e]!==n&&jC.throwArgumentError(`invalid fixed format (`+e+` not `+n+`)`,`format.`+e,t[e]),t[e]);n=e(`signed`,`boolean`,n),r=e(`width`,`number`,r),i=e(`decimals`,`number`,i)}return r%8&&jC.throwArgumentError(`invalid fixed format width (not byte aligned)`,`format.width`,r),i>80&&jC.throwArgumentError(`invalid fixed format (decimals too large)`,`format.decimals`,i),new e(MC,n,r,i)}},VC=class e{constructor(e,t,n,r){e!==MC&&jC.throwError(`cannot use FixedNumber constructor; use FixedNumber.from`,aC.errors.UNSUPPORTED_OPERATION,{operation:`new FixedFormat`}),this.format=r,this._hex=t,this._value=n,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&jC.throwArgumentError(`incompatible format; use fixedNumber.toFormat`,`other`,e)}addUnsafe(t){this._checkFormat(t);let n=zC(this._value,this.format.decimals),r=zC(t._value,t.format.decimals);return e.fromValue(n.add(r),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);let n=zC(this._value,this.format.decimals),r=zC(t._value,t.format.decimals);return e.fromValue(n.sub(r),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);let n=zC(this._value,this.format.decimals),r=zC(t._value,t.format.decimals);return e.fromValue(n.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);let n=zC(this._value,this.format.decimals),r=zC(t._value,t.format.decimals);return e.fromValue(n.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){let t=this.toString().split(`.`);t.length===1&&t.push(`0`);let n=e.from(t[0],this.format),r=!t[1].match(/^(0*)$/);return this.isNegative()&&r&&(n=n.subUnsafe(HC.toFormat(n.format))),n}ceiling(){let t=this.toString().split(`.`);t.length===1&&t.push(`0`);let n=e.from(t[0],this.format),r=!t[1].match(/^(0*)$/);return!this.isNegative()&&r&&(n=n.addUnsafe(HC.toFormat(n.format))),n}round(t){t??(t=0);let n=this.toString().split(`.`);if(n.length===1&&n.push(`0`),(t<0||t>80||t%1)&&jC.throwArgumentError(`invalid decimal count`,`decimals`,t),n[1].length<=t)return this;let r=e.from(`1`+IC.substring(0,t),this.format),i=UC.toFormat(this.format);return this.mulUnsafe(r).addUnsafe(i).floor().divUnsafe(r)}isZero(){return this._value===`0.0`||this._value===`0`}isNegative(){return this._value[0]===`-`}toString(){return this._value}toHexString(e){return e==null?this._hex:(e%8&&jC.throwArgumentError(`invalid byte width`,`width`,e),hC(EC.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString(),e/8))}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return e.fromString(this._value,t)}static fromValue(t,n,r){return r==null&&n!=null&&!wC(n)&&(r=n,n=null),n??(n=0),r??(r=`fixed`),e.fromString(RC(t,n),BC.from(r))}static fromString(t,n){n??(n=`fixed`);let r=BC.from(n),i=zC(t,r.decimals);!r.signed&&i.lt(NC)&&FC(`unsigned value cannot be negative`,`overflow`,`value`,t);let a=null;r.signed?a=i.toTwos(r.width).toHexString():(a=i.toHexString(),a=hC(a,r.width/8));let o=RC(i,r.decimals);return new e(MC,a,o,r)}static fromBytes(t,n){n??(n=`fixed`);let r=BC.from(n);if(dC(t).length>r.width/8)throw Error(`overflow`);let i=EC.from(t);return r.signed&&(i=i.fromTwos(r.width)),new e(MC,i.toTwos((r.signed?0:1)+r.width).toHexString(),RC(i,r.decimals),r)}static from(t,n){if(typeof t==`string`)return e.fromString(t,n);if(uC(t))return e.fromBytes(t,n);try{return e.fromValue(t,0,n)}catch(e){if(e.code!==aC.errors.INVALID_ARGUMENT)throw e}return jC.throwArgumentError(`invalid FixedNumber value`,`value`,t)}static isFixedNumber(e){return!!(e&&e._isFixedNumber)}},HC=VC.from(1),UC=VC.from(`0.5`),WC=new aC(`strings/5.7.0`),GC;(function(e){e.current=``,e.NFC=`NFC`,e.NFD=`NFD`,e.NFKC=`NFKC`,e.NFKD=`NFKD`})(GC||(GC={}));var KC;(function(e){e.UNEXPECTED_CONTINUE=`unexpected continuation byte`,e.BAD_PREFIX=`bad codepoint prefix`,e.OVERRUN=`string overrun`,e.MISSING_CONTINUE=`missing continuation byte`,e.OUT_OF_RANGE=`out of UTF-8 range`,e.UTF16_SURROGATE=`UTF-16 surrogate`,e.OVERLONG=`overlong representation`})(KC||(KC={}));function qC(e,t,n,r,i){return WC.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`,`bytes`,n)}function JC(e,t,n,r,i){if(e===KC.BAD_PREFIX||e===KC.UNEXPECTED_CONTINUE){let e=0;for(let r=t+1;r<n.length&&n[r]>>6==2;r++)e++;return e}return e===KC.OVERRUN?n.length-t-1:0}function YC(e,t,n,r,i){return e===KC.OVERLONG?(r.push(i),0):(r.push(65533),JC(e,t,n))}Object.freeze({error:qC,ignore:JC,replace:YC});function XC(e){if(e.length%4!=0)throw Error(`bad data`);let t=[];for(let n=0;n<e.length;n+=4)t.push(parseInt(e.substring(n,n+4),16));return t}function ZC(e,t){t||(t=function(e){return[parseInt(e,16)]});let n=0,r={};return e.split(`,`).forEach(e=>{let i=e.split(`:`);n+=parseInt(i[0],16),r[n]=t(i[1])}),r}function QC(e){let t=0;return e.split(`,`).map(e=>{let n=e.split(`-`);n.length===1?n[1]=`0`:n[1]===``&&(n[1]=`1`);let r=t+parseInt(n[0],16);return t=parseInt(n[1],16),{l:r,h:t}})}QC(`221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d`),`ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff`.split(`,`).map(e=>parseInt(e,16)),ZC(`b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3`),ZC(`179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7`),ZC(`df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D`,XC),QC(`80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001`);var $C=`hash/5.7.0`;function ew(e){e=atob(e);let t=[];for(let n=0;n<e.length;n++)t.push(e.charCodeAt(n));return dC(t)}function tw(e,t){t??(t=1);let n=[],r=n.forEach,i=function(e,t){r.call(e,function(e){t>0&&Array.isArray(e)?i(e,t-1):n.push(e)})};return i(e,t),n}function nw(e){let t={};for(let n=0;n<e.length;n++){let r=e[n];t[r[0]]=r[1]}return t}function rw(e){let t=0;function n(){return e[t++]<<8|e[t++]}let r=n(),i=1,a=[0,1];for(let e=1;e<r;e++)a.push(i+=n());let o=n(),s=t;t+=o;let c=0,l=0;function u(){return c==0&&(l=l<<8|e[t++],c=8),l>>--c&1}let d=2**31,f=d>>>1,p=f>>1,m=d-1,h=0;for(let e=0;e<31;e++)h=h<<1|u();let g=[],_=0,v=d;for(;;){let e=Math.floor(((h-_+1)*i-1)/v),t=0,n=r;for(;n-t>1;){let r=t+n>>>1;e<a[r]?n=r:t=r}if(t==0)break;g.push(t);let o=_+Math.floor(v*a[t]/i),s=_+Math.floor(v*a[t+1]/i)-1;for(;!((o^s)&f);)h=h<<1&m|u(),o=o<<1&m,s=s<<1&m|1;for(;o&~s&p;)h=h&f|h<<1&m>>>1|u(),o=o<<1^f,s=(s^f)<<1|f|1;_=o,v=1+s-o}let y=r-4;return g.map(t=>{switch(t-y){case 3:return y+65792+(e[s++]<<16|e[s++]<<8|e[s++]);case 2:return y+256+(e[s++]<<8|e[s++]);case 1:return y+e[s++];default:return t-1}})}function iw(e){let t=0;return()=>e[t++]}function aw(e){return iw(rw(e))}function ow(e){return e&1?~e>>1:e>>1}function sw(e,t){let n=Array(e);for(let r=0;r<e;r++)n[r]=1+t();return n}function cw(e,t){let n=Array(e);for(let r=0,i=-1;r<e;r++)n[r]=i+=1+t();return n}function lw(e,t){let n=Array(e);for(let r=0,i=0;r<e;r++)n[r]=i+=ow(t());return n}function uw(e,t){let n=cw(e(),e),r=e(),i=cw(r,e),a=sw(r,e);for(let e=0;e<r;e++)for(let t=0;t<a[e];t++)n.push(i[e]+t);return t?n.map(e=>t[e]):n}function dw(e){let t=[];for(;;){let n=e();if(n==0)break;t.push(mw(n,e))}for(;;){let n=e()-1;if(n<0)break;t.push(hw(n,e))}return nw(tw(t))}function fw(e){let t=[];for(;;){let n=e();if(n==0)break;t.push(n)}return t}function pw(e,t,n){let r=Array(e).fill(void 0).map(()=>[]);for(let i=0;i<t;i++)lw(e,n).forEach((e,t)=>r[t].push(e));return r}function mw(e,t){let n=1+t(),r=t(),i=fw(t);return tw(pw(i.length,1+e,t).map((e,t)=>{let a=e[0],o=e.slice(1);return Array(i[t]).fill(void 0).map((e,t)=>{let i=t*r;return[a+t*n,o.map(e=>e+i)]})}))}function hw(e,t){return pw(1+t(),1+e,t).map(e=>[e[0],e.slice(1)])}function gw(e){let t=uw(e).sort((e,t)=>e-t);return n();function n(){let r=[];for(;;){let i=uw(e,t);if(i.length==0)break;r.push({set:new Set(i),node:n()})}r.sort((e,t)=>t.set.size-e.set.size);let i=e(),a=i%3;i=i/3|0;let o=!!(i&1);return i>>=1,{branches:r,valid:a,fe0f:o,save:i==1,check:i==2}}}function _w(){return aw(ew(`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`))}var vw=_w();new Set(uw(vw)),new Set(uw(vw)),dw(vw),gw(vw),new aC($C),new Uint8Array(32).fill(0),new aC(`rlp/5.7.0`),new aC(`address/5.7.0`);var yw=9007199254740991;function bw(e){return Math.log10?Math.log10(e):Math.log(e)/Math.LN10}var xw={};for(let e=0;e<10;e++)xw[String(e)]=String(e);for(let e=0;e<26;e++)xw[String.fromCharCode(65+e)]=String(10+e);Math.floor(bw(yw)),new aC(`properties/5.7.0`),new aC($C),new Uint8Array(32).fill(0),EC.from(-1);var Sw=EC.from(0),Cw=EC.from(1);EC.from(`0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff`),hC(Cw.toHexString(),32),hC(Sw.toHexString(),32);var ww={},Tw={},Ew=Dw;function Dw(e,t){if(!e)throw Error(t||`Assertion failed`)}Dw.equal=function(e,t,n){if(e!=t)throw Error(n||`Assertion failed: `+e+` != `+t)};var Ow={exports:{}};typeof Object.create==`function`?Ow.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:Ow.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}};var kw=Ew;Tw.inherits=Ow.exports;function Aw(e,t){return(e.charCodeAt(t)&64512)!=55296||t<0||t+1>=e.length?!1:(e.charCodeAt(t+1)&64512)==56320}function jw(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var n=[];if(typeof e==`string`)if(t){if(t===`hex`)for(e=e.replace(/[^a-z0-9]+/gi,``),e.length%2!=0&&(e=`0`+e),i=0;i<e.length;i+=2)n.push(parseInt(e[i]+e[i+1],16))}else for(var r=0,i=0;i<e.length;i++){var a=e.charCodeAt(i);a<128?n[r++]=a:a<2048?(n[r++]=a>>6|192,n[r++]=a&63|128):Aw(e,i)?(a=65536+((a&1023)<<10)+(e.charCodeAt(++i)&1023),n[r++]=a>>18|240,n[r++]=a>>12&63|128,n[r++]=a>>6&63|128,n[r++]=a&63|128):(n[r++]=a>>12|224,n[r++]=a>>6&63|128,n[r++]=a&63|128)}else for(i=0;i<e.length;i++)n[i]=e[i]|0;return n}Tw.toArray=jw;function Mw(e){for(var t=``,n=0;n<e.length;n++)t+=Fw(e[n].toString(16));return t}Tw.toHex=Mw;function Nw(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(e&255)<<24)>>>0}Tw.htonl=Nw;function Pw(e,t){for(var n=``,r=0;r<e.length;r++){var i=e[r];t===`little`&&(i=Nw(i)),n+=Iw(i.toString(16))}return n}Tw.toHex32=Pw;function Fw(e){return e.length===1?`0`+e:e}Tw.zero2=Fw;function Iw(e){return e.length===7?`0`+e:e.length===6?`00`+e:e.length===5?`000`+e:e.length===4?`0000`+e:e.length===3?`00000`+e:e.length===2?`000000`+e:e.length===1?`0000000`+e:e}Tw.zero8=Iw;function Lw(e,t,n,r){var i=n-t;kw(i%4==0);for(var a=Array(i/4),o=0,s=t;o<a.length;o++,s+=4)a[o]=(r===`big`?e[s]<<24|e[s+1]<<16|e[s+2]<<8|e[s+3]:e[s+3]<<24|e[s+2]<<16|e[s+1]<<8|e[s])>>>0;return a}Tw.join32=Lw;function Rw(e,t){for(var n=Array(e.length*4),r=0,i=0;r<e.length;r++,i+=4){var a=e[r];t===`big`?(n[i]=a>>>24,n[i+1]=a>>>16&255,n[i+2]=a>>>8&255,n[i+3]=a&255):(n[i+3]=a>>>24,n[i+2]=a>>>16&255,n[i+1]=a>>>8&255,n[i]=a&255)}return n}Tw.split32=Rw;function zw(e,t){return e>>>t|e<<32-t}Tw.rotr32=zw;function Bw(e,t){return e<<t|e>>>32-t}Tw.rotl32=Bw;function Vw(e,t){return e+t>>>0}Tw.sum32=Vw;function Hw(e,t,n){return e+t+n>>>0}Tw.sum32_3=Hw;function Uw(e,t,n,r){return e+t+n+r>>>0}Tw.sum32_4=Uw;function Ww(e,t,n,r,i){return e+t+n+r+i>>>0}Tw.sum32_5=Ww;function Gw(e,t,n,r){var i=e[t],a=r+e[t+1]>>>0;e[t]=(a<r?1:0)+n+i>>>0,e[t+1]=a}Tw.sum64=Gw;function Kw(e,t,n,r){return(t+r>>>0<t?1:0)+e+n>>>0}Tw.sum64_hi=Kw;function qw(e,t,n,r){return t+r>>>0}Tw.sum64_lo=qw;function Jw(e,t,n,r,i,a,o,s){var c=0,l=t;return l=l+r>>>0,c+=l<t?1:0,l=l+a>>>0,c+=l<a?1:0,l=l+s>>>0,c+=l<s?1:0,e+n+i+o+c>>>0}Tw.sum64_4_hi=Jw;function Yw(e,t,n,r,i,a,o,s){return t+r+a+s>>>0}Tw.sum64_4_lo=Yw;function Xw(e,t,n,r,i,a,o,s,c,l){var u=0,d=t;return d=d+r>>>0,u+=d<t?1:0,d=d+a>>>0,u+=d<a?1:0,d=d+s>>>0,u+=d<s?1:0,d=d+l>>>0,u+=d<l?1:0,e+n+i+o+c+u>>>0}Tw.sum64_5_hi=Xw;function Zw(e,t,n,r,i,a,o,s,c,l){return t+r+a+s+l>>>0}Tw.sum64_5_lo=Zw;function Qw(e,t,n){return(t<<32-n|e>>>n)>>>0}Tw.rotr64_hi=Qw;function $w(e,t,n){return(e<<32-n|t>>>n)>>>0}Tw.rotr64_lo=$w;function eT(e,t,n){return e>>>n}Tw.shr64_hi=eT;function tT(e,t,n){return(e<<32-n|t>>>n)>>>0}Tw.shr64_lo=tT;var nT={},rT=Tw,iT=Ew;function aT(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian=`big`,this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}nT.BlockHash=aT,aT.prototype.update=function(e,t){if(e=rT.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){e=this.pending;var n=e.length%this._delta8;this.pending=e.slice(e.length-n,e.length),this.pending.length===0&&(this.pending=null),e=rT.join32(e,0,e.length-n,this.endian);for(var r=0;r<e.length;r+=this._delta32)this._update(e,r,r+this._delta32)}return this},aT.prototype.digest=function(e){return this.update(this._pad()),iT(this.pending===null),this._digest(e)},aT.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,n=t-(e+this.padLength)%t,r=Array(n+this.padLength);r[0]=128;for(var i=1;i<n;i++)r[i]=0;if(e<<=3,this.endian===`big`){for(var a=8;a<this.padLength;a++)r[i++]=0;r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=e>>>24&255,r[i++]=e>>>16&255,r[i++]=e>>>8&255,r[i++]=e&255}else for(r[i++]=e&255,r[i++]=e>>>8&255,r[i++]=e>>>16&255,r[i++]=e>>>24&255,r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=0,a=8;a<this.padLength;a++)r[i++]=0;return r};var oT={},sT={},cT=Tw.rotr32;function lT(e,t,n,r){if(e===0)return uT(t,n,r);if(e===1||e===3)return fT(t,n,r);if(e===2)return dT(t,n,r)}sT.ft_1=lT;function uT(e,t,n){return e&t^~e&n}sT.ch32=uT;function dT(e,t,n){return e&t^e&n^t&n}sT.maj32=dT;function fT(e,t,n){return e^t^n}sT.p32=fT;function pT(e){return cT(e,2)^cT(e,13)^cT(e,22)}sT.s0_256=pT;function mT(e){return cT(e,6)^cT(e,11)^cT(e,25)}sT.s1_256=mT;function hT(e){return cT(e,7)^cT(e,18)^e>>>3}sT.g0_256=hT;function gT(e){return cT(e,17)^cT(e,19)^e>>>10}sT.g1_256=gT;var _T=Tw,vT=nT,yT=sT,bT=_T.rotl32,xT=_T.sum32,ST=_T.sum32_5,CT=yT.ft_1,wT=vT.BlockHash,TT=[1518500249,1859775393,2400959708,3395469782];function ET(){if(!(this instanceof ET))return new ET;wT.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=Array(80)}_T.inherits(ET,wT);var DT=ET;ET.blockSize=512,ET.outSize=160,ET.hmacStrength=80,ET.padLength=64,ET.prototype._update=function(e,t){for(var n=this.W,r=0;r<16;r++)n[r]=e[t+r];for(;r<n.length;r++)n[r]=bT(n[r-3]^n[r-8]^n[r-14]^n[r-16],1);var i=this.h[0],a=this.h[1],o=this.h[2],s=this.h[3],c=this.h[4];for(r=0;r<n.length;r++){var l=~~(r/20),u=ST(bT(i,5),CT(l,a,o,s),c,n[r],TT[l]);c=s,s=o,o=bT(a,30),a=i,i=u}this.h[0]=xT(this.h[0],i),this.h[1]=xT(this.h[1],a),this.h[2]=xT(this.h[2],o),this.h[3]=xT(this.h[3],s),this.h[4]=xT(this.h[4],c)},ET.prototype._digest=function(e){return e===`hex`?_T.toHex32(this.h,`big`):_T.split32(this.h,`big`)};var OT=Tw,kT=nT,AT=sT,jT=Ew,MT=OT.sum32,NT=OT.sum32_4,PT=OT.sum32_5,FT=AT.ch32,IT=AT.maj32,LT=AT.s0_256,RT=AT.s1_256,zT=AT.g0_256,BT=AT.g1_256,VT=kT.BlockHash,HT=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function UT(){if(!(this instanceof UT))return new UT;VT.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=HT,this.W=Array(64)}OT.inherits(UT,VT);var WT=UT;UT.blockSize=512,UT.outSize=256,UT.hmacStrength=192,UT.padLength=64,UT.prototype._update=function(e,t){for(var n=this.W,r=0;r<16;r++)n[r]=e[t+r];for(;r<n.length;r++)n[r]=NT(BT(n[r-2]),n[r-7],zT(n[r-15]),n[r-16]);var i=this.h[0],a=this.h[1],o=this.h[2],s=this.h[3],c=this.h[4],l=this.h[5],u=this.h[6],d=this.h[7];for(jT(this.k.length===n.length),r=0;r<n.length;r++){var f=PT(d,RT(c),FT(c,l,u),this.k[r],n[r]),p=MT(LT(i),IT(i,a,o));d=u,u=l,l=c,c=MT(s,f),s=o,o=a,a=i,i=MT(f,p)}this.h[0]=MT(this.h[0],i),this.h[1]=MT(this.h[1],a),this.h[2]=MT(this.h[2],o),this.h[3]=MT(this.h[3],s),this.h[4]=MT(this.h[4],c),this.h[5]=MT(this.h[5],l),this.h[6]=MT(this.h[6],u),this.h[7]=MT(this.h[7],d)},UT.prototype._digest=function(e){return e===`hex`?OT.toHex32(this.h,`big`):OT.split32(this.h,`big`)};var GT=Tw,KT=WT;function qT(){if(!(this instanceof qT))return new qT;KT.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}GT.inherits(qT,KT);var JT=qT;qT.blockSize=512,qT.outSize=224,qT.hmacStrength=192,qT.padLength=64,qT.prototype._digest=function(e){return e===`hex`?GT.toHex32(this.h.slice(0,7),`big`):GT.split32(this.h.slice(0,7),`big`)};var YT=Tw,XT=nT,ZT=Ew,QT=YT.rotr64_hi,$T=YT.rotr64_lo,eE=YT.shr64_hi,tE=YT.shr64_lo,nE=YT.sum64,rE=YT.sum64_hi,iE=YT.sum64_lo,aE=YT.sum64_4_hi,oE=YT.sum64_4_lo,sE=YT.sum64_5_hi,cE=YT.sum64_5_lo,lE=XT.BlockHash,uE=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function dE(){if(!(this instanceof dE))return new dE;lE.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=uE,this.W=Array(160)}YT.inherits(dE,lE);var fE=dE;dE.blockSize=1024,dE.outSize=512,dE.hmacStrength=192,dE.padLength=128,dE.prototype._prepareBlock=function(e,t){for(var n=this.W,r=0;r<32;r++)n[r]=e[t+r];for(;r<n.length;r+=2){var i=CE(n[r-4],n[r-3]),a=wE(n[r-4],n[r-3]),o=n[r-14],s=n[r-13],c=xE(n[r-30],n[r-29]),l=SE(n[r-30],n[r-29]),u=n[r-32],d=n[r-31];n[r]=aE(i,a,o,s,c,l,u,d),n[r+1]=oE(i,a,o,s,c,l,u,d)}},dE.prototype._update=function(e,t){this._prepareBlock(e,t);var n=this.W,r=this.h[0],i=this.h[1],a=this.h[2],o=this.h[3],s=this.h[4],c=this.h[5],l=this.h[6],u=this.h[7],d=this.h[8],f=this.h[9],p=this.h[10],m=this.h[11],h=this.h[12],g=this.h[13],_=this.h[14],v=this.h[15];ZT(this.k.length===n.length);for(var y=0;y<n.length;y+=2){var b=_,x=v,ee=yE(d,f),S=bE(d,f),C=pE(d,f,p,m,h),te=mE(d,f,p,m,h,g),w=this.k[y],T=this.k[y+1],ne=n[y],E=n[y+1],D=sE(b,x,ee,S,C,te,w,T,ne,E),re=cE(b,x,ee,S,C,te,w,T,ne,E);b=_E(r,i),x=vE(r,i),ee=hE(r,i,a,o,s),S=gE(r,i,a,o,s,c);var ie=rE(b,x,ee,S),ae=iE(b,x,ee,S);_=h,v=g,h=p,g=m,p=d,m=f,d=rE(l,u,D,re),f=iE(u,u,D,re),l=s,u=c,s=a,c=o,a=r,o=i,r=rE(D,re,ie,ae),i=iE(D,re,ie,ae)}nE(this.h,0,r,i),nE(this.h,2,a,o),nE(this.h,4,s,c),nE(this.h,6,l,u),nE(this.h,8,d,f),nE(this.h,10,p,m),nE(this.h,12,h,g),nE(this.h,14,_,v)},dE.prototype._digest=function(e){return e===`hex`?YT.toHex32(this.h,`big`):YT.split32(this.h,`big`)};function pE(e,t,n,r,i){var a=e&n^~e&i;return a<0&&(a+=4294967296),a}function mE(e,t,n,r,i,a){var o=t&r^~t&a;return o<0&&(o+=4294967296),o}function hE(e,t,n,r,i){var a=e&n^e&i^n&i;return a<0&&(a+=4294967296),a}function gE(e,t,n,r,i,a){var o=t&r^t&a^r&a;return o<0&&(o+=4294967296),o}function _E(e,t){var n=QT(e,t,28),r=QT(t,e,2),i=QT(t,e,7),a=n^r^i;return a<0&&(a+=4294967296),a}function vE(e,t){var n=$T(e,t,28),r=$T(t,e,2),i=$T(t,e,7),a=n^r^i;return a<0&&(a+=4294967296),a}function yE(e,t){var n=QT(e,t,14),r=QT(e,t,18),i=QT(t,e,9),a=n^r^i;return a<0&&(a+=4294967296),a}function bE(e,t){var n=$T(e,t,14),r=$T(e,t,18),i=$T(t,e,9),a=n^r^i;return a<0&&(a+=4294967296),a}function xE(e,t){var n=QT(e,t,1),r=QT(e,t,8),i=eE(e,t,7),a=n^r^i;return a<0&&(a+=4294967296),a}function SE(e,t){var n=$T(e,t,1),r=$T(e,t,8),i=tE(e,t,7),a=n^r^i;return a<0&&(a+=4294967296),a}function CE(e,t){var n=QT(e,t,19),r=QT(t,e,29),i=eE(e,t,6),a=n^r^i;return a<0&&(a+=4294967296),a}function wE(e,t){var n=$T(e,t,19),r=$T(t,e,29),i=tE(e,t,6),a=n^r^i;return a<0&&(a+=4294967296),a}var TE=Tw,EE=fE;function DE(){if(!(this instanceof DE))return new DE;EE.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}TE.inherits(DE,EE);var OE=DE;DE.blockSize=1024,DE.outSize=384,DE.hmacStrength=192,DE.padLength=128,DE.prototype._digest=function(e){return e===`hex`?TE.toHex32(this.h.slice(0,12),`big`):TE.split32(this.h.slice(0,12),`big`)},oT.sha1=DT,oT.sha224=JT,oT.sha256=WT,oT.sha384=OE,oT.sha512=fE;var kE={},AE=Tw,jE=nT,ME=AE.rotl32,NE=AE.sum32,PE=AE.sum32_3,FE=AE.sum32_4,IE=jE.BlockHash;function LE(){if(!(this instanceof LE))return new LE;IE.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian=`little`}AE.inherits(LE,IE),kE.ripemd160=LE,LE.blockSize=512,LE.outSize=160,LE.hmacStrength=192,LE.padLength=64,LE.prototype._update=function(e,t){for(var n=this.h[0],r=this.h[1],i=this.h[2],a=this.h[3],o=this.h[4],s=n,c=r,l=i,u=a,d=o,f=0;f<80;f++){var p=NE(ME(FE(n,RE(f,r,i,a),e[VE[f]+t],zE(f)),UE[f]),o);n=o,o=a,a=ME(i,10),i=r,r=p,p=NE(ME(FE(s,RE(79-f,c,l,u),e[HE[f]+t],BE(f)),WE[f]),d),s=d,d=u,u=ME(l,10),l=c,c=p}p=PE(this.h[1],i,u),this.h[1]=PE(this.h[2],a,d),this.h[2]=PE(this.h[3],o,s),this.h[3]=PE(this.h[4],n,c),this.h[4]=PE(this.h[0],r,l),this.h[0]=p},LE.prototype._digest=function(e){return e===`hex`?AE.toHex32(this.h,`little`):AE.split32(this.h,`little`)};function RE(e,t,n,r){return e<=15?t^n^r:e<=31?t&n|~t&r:e<=47?(t|~n)^r:e<=63?t&r|n&~r:t^(n|~r)}function zE(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function BE(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}var VE=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],HE=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],UE=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],WE=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],GE=Tw,KE=Ew;function qE(e,t,n){if(!(this instanceof qE))return new qE(e,t,n);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(GE.toArray(t,n))}var JE=qE;qE.prototype._init=function(e){e.length>this.blockSize&&(e=new this.Hash().update(e).digest()),KE(e.length<=this.blockSize);for(var t=e.length;t<this.blockSize;t++)e.push(0);for(t=0;t<e.length;t++)e[t]^=54;for(this.inner=new this.Hash().update(e),t=0;t<e.length;t++)e[t]^=106;this.outer=new this.Hash().update(e)},qE.prototype.update=function(e,t){return this.inner.update(e,t),this},qE.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)},function(e){var t=e;t.utils=Tw,t.common=nT,t.sha=oT,t.ripemd=kE,t.hmac=JE,t.sha1=t.sha.sha1,t.sha256=t.sha.sha256,t.sha224=t.sha.sha224,t.sha384=t.sha.sha384,t.sha512=t.sha.sha512,t.ripemd160=t.ripemd.ripemd160}(ww);function YE(e,t,n){return n={path:t,exports:{},require:function(e,t){return XE(e,t??n.path)}},e(n,n.exports),n.exports}function XE(){throw Error(`Dynamic requires are not currently supported by @rollup/plugin-commonjs`)}var ZE=QE;function QE(e,t){if(!e)throw Error(t||`Assertion failed`)}QE.equal=function(e,t,n){if(e!=t)throw Error(n||`Assertion failed: `+e+` != `+t)};var $E=YE(function(e,t){var n=t;function r(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var n=[];if(typeof e!=`string`){for(var r=0;r<e.length;r++)n[r]=e[r]|0;return n}if(t===`hex`){e=e.replace(/[^a-z0-9]+/gi,``),e.length%2!=0&&(e=`0`+e);for(var r=0;r<e.length;r+=2)n.push(parseInt(e[r]+e[r+1],16))}else for(var r=0;r<e.length;r++){var i=e.charCodeAt(r),a=i>>8,o=i&255;a?n.push(a,o):n.push(o)}return n}n.toArray=r;function i(e){return e.length===1?`0`+e:e}n.zero2=i;function a(e){for(var t=``,n=0;n<e.length;n++)t+=i(e[n].toString(16));return t}n.toHex=a,n.encode=function(e,t){return t===`hex`?a(e):e}}),eD=YE(function(e,t){var n=t;n.assert=ZE,n.toArray=$E.toArray,n.zero2=$E.zero2,n.toHex=$E.toHex,n.encode=$E.encode;function r(e,t,n){var r=Array(Math.max(e.bitLength(),n)+1);r.fill(0);for(var i=1<<t+1,a=e.clone(),o=0;o<r.length;o++){var s,c=a.andln(i-1);a.isOdd()?(s=c>(i>>1)-1?(i>>1)-c:c,a.isubn(s)):s=0,r[o]=s,a.iushrn(1)}return r}n.getNAF=r;function i(e,t){var n=[[],[]];e=e.clone(),t=t.clone();for(var r=0,i=0,a;e.cmpn(-r)>0||t.cmpn(-i)>0;){var o=e.andln(3)+r&3,s=t.andln(3)+i&3;o===3&&(o=-1),s===3&&(s=-1);var c;o&1?(a=e.andln(7)+r&7,c=(a===3||a===5)&&s===2?-o:o):c=0,n[0].push(c);var l;s&1?(a=t.andln(7)+i&7,l=(a===3||a===5)&&o===2?-s:s):l=0,n[1].push(l),2*r===c+1&&(r=1-r),2*i===l+1&&(i=1-i),e.iushrn(1),t.iushrn(1)}return n}n.getJSF=i;function a(e,t,n){var r=`_`+t;e.prototype[t]=function(){return this[r]===void 0?this[r]=n.call(this):this[r]}}n.cachedProperty=a;function o(e){return typeof e==`string`?n.toArray(e,`hex`):e}n.parseBytes=o;function s(e){return new vC(e,`hex`,`le`)}n.intFromLE=s}),tD=eD.getNAF,nD=eD.getJSF,rD=eD.assert;function iD(e,t){this.type=e,this.p=new vC(t.p,16),this.red=t.prime?vC.red(t.prime):vC.mont(this.p),this.zero=new vC(0).toRed(this.red),this.one=new vC(1).toRed(this.red),this.two=new vC(2).toRed(this.red),this.n=t.n&&new vC(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=[,,,,],this._wnafT2=[,,,,],this._wnafT3=[,,,,],this._wnafT4=[,,,,],this._bitLength=this.n?this.n.bitLength():0;var n=this.n&&this.p.div(this.n);!n||n.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}var aD=iD;iD.prototype.point=function(){throw Error(`Not implemented`)},iD.prototype.validate=function(){throw Error(`Not implemented`)},iD.prototype._fixedNafMul=function(e,t){rD(e.precomputed);var n=e._getDoubles(),r=tD(t,1,this._bitLength),i=(1<<n.step+1)-(n.step%2==0?2:1);i/=3;var a=[],o,s;for(o=0;o<r.length;o+=n.step){s=0;for(var c=o+n.step-1;c>=o;c--)s=(s<<1)+r[c];a.push(s)}for(var l=this.jpoint(null,null,null),u=this.jpoint(null,null,null),d=i;d>0;d--){for(o=0;o<a.length;o++)s=a[o],s===d?u=u.mixedAdd(n.points[o]):s===-d&&(u=u.mixedAdd(n.points[o].neg()));l=l.add(u)}return l.toP()},iD.prototype._wnafMul=function(e,t){var n=4,r=e._getNAFPoints(n);n=r.wnd;for(var i=r.points,a=tD(t,n,this._bitLength),o=this.jpoint(null,null,null),s=a.length-1;s>=0;s--){for(var c=0;s>=0&&a[s]===0;s--)c++;if(s>=0&&c++,o=o.dblp(c),s<0)break;var l=a[s];rD(l!==0),o=e.type===`affine`?l>0?o.mixedAdd(i[l-1>>1]):o.mixedAdd(i[-l-1>>1].neg()):l>0?o.add(i[l-1>>1]):o.add(i[-l-1>>1].neg())}return e.type===`affine`?o.toP():o},iD.prototype._wnafMulAdd=function(e,t,n,r,i){var a=this._wnafT1,o=this._wnafT2,s=this._wnafT3,c=0,l,u,d;for(l=0;l<r;l++){d=t[l];var f=d._getNAFPoints(e);a[l]=f.wnd,o[l]=f.points}for(l=r-1;l>=1;l-=2){var p=l-1,m=l;if(a[p]!==1||a[m]!==1){s[p]=tD(n[p],a[p],this._bitLength),s[m]=tD(n[m],a[m],this._bitLength),c=Math.max(s[p].length,c),c=Math.max(s[m].length,c);continue}var h=[t[p],null,null,t[m]];t[p].y.cmp(t[m].y)===0?(h[1]=t[p].add(t[m]),h[2]=t[p].toJ().mixedAdd(t[m].neg())):t[p].y.cmp(t[m].y.redNeg())===0?(h[1]=t[p].toJ().mixedAdd(t[m]),h[2]=t[p].add(t[m].neg())):(h[1]=t[p].toJ().mixedAdd(t[m]),h[2]=t[p].toJ().mixedAdd(t[m].neg()));var g=[-3,-1,-5,-7,0,7,5,1,3],_=nD(n[p],n[m]);for(c=Math.max(_[0].length,c),s[p]=Array(c),s[m]=Array(c),u=0;u<c;u++){var v=_[0][u]|0,y=_[1][u]|0;s[p][u]=g[(v+1)*3+(y+1)],s[m][u]=0,o[p]=h}}var b=this.jpoint(null,null,null),x=this._wnafT4;for(l=c;l>=0;l--){for(var ee=0;l>=0;){var S=!0;for(u=0;u<r;u++)x[u]=s[u][l]|0,x[u]!==0&&(S=!1);if(!S)break;ee++,l--}if(l>=0&&ee++,b=b.dblp(ee),l<0)break;for(u=0;u<r;u++){var C=x[u];C!==0&&(C>0?d=o[u][C-1>>1]:C<0&&(d=o[u][-C-1>>1].neg()),b=d.type===`affine`?b.mixedAdd(d):b.add(d))}}for(l=0;l<r;l++)o[l]=null;return i?b:b.toP()};function oD(e,t){this.curve=e,this.type=t,this.precomputed=null}iD.BasePoint=oD,oD.prototype.eq=function(){throw Error(`Not implemented`)},oD.prototype.validate=function(){return this.curve.validate(this)},iD.prototype.decodePoint=function(e,t){e=eD.toArray(e,t);var n=this.p.byteLength();if((e[0]===4||e[0]===6||e[0]===7)&&e.length-1==2*n)return e[0]===6?rD(e[e.length-1]%2==0):e[0]===7&&rD(e[e.length-1]%2==1),this.point(e.slice(1,1+n),e.slice(1+n,1+2*n));if((e[0]===2||e[0]===3)&&e.length-1===n)return this.pointFromX(e.slice(1,1+n),e[0]===3);throw Error(`Unknown point format`)},oD.prototype.encodeCompressed=function(e){return this.encode(e,!0)},oD.prototype._encode=function(e){var t=this.curve.p.byteLength(),n=this.getX().toArray(`be`,t);return e?[this.getY().isEven()?2:3].concat(n):[4].concat(n,this.getY().toArray(`be`,t))},oD.prototype.encode=function(e,t){return eD.encode(this._encode(t),e)},oD.prototype.precompute=function(e){if(this.precomputed)return this;var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},oD.prototype._hasDoubles=function(e){if(!this.precomputed)return!1;var t=this.precomputed.doubles;return t?t.points.length>=Math.ceil((e.bitLength()+1)/t.step):!1},oD.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var n=[this],r=this,i=0;i<t;i+=e){for(var a=0;a<e;a++)r=r.dbl();n.push(r)}return{step:e,points:n}},oD.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var t=[this],n=(1<<e)-1,r=n===1?null:this.dbl(),i=1;i<n;i++)t[i]=t[i-1].add(r);return{wnd:e,points:t}},oD.prototype._getBeta=function(){return null},oD.prototype.dblp=function(e){for(var t=this,n=0;n<e;n++)t=t.dbl();return t};var sD=YE(function(e){typeof Object.create==`function`?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}}),cD=eD.assert;function lD(e){aD.call(this,`short`,e),this.a=new vC(e.a,16).toRed(this.red),this.b=new vC(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=this.a.fromRed().cmpn(0)===0,this.threeA=this.a.fromRed().sub(this.p).cmpn(-3)===0,this.endo=this._getEndomorphism(e),this._endoWnafT1=[,,,,],this._endoWnafT2=[,,,,]}sD(lD,aD);var uD=lD;lD.prototype._getEndomorphism=function(e){if(!(!this.zeroA||!this.g||!this.n||this.p.modn(3)!==1)){var t,n;if(e.beta)t=new vC(e.beta,16).toRed(this.red);else{var r=this._getEndoRoots(this.p);t=r[0].cmp(r[1])<0?r[0]:r[1],t=t.toRed(this.red)}if(e.lambda)n=new vC(e.lambda,16);else{var i=this._getEndoRoots(this.n);this.g.mul(i[0]).x.cmp(this.g.x.redMul(t))===0?n=i[0]:(n=i[1],cD(this.g.mul(n).x.cmp(this.g.x.redMul(t))===0))}var a;return a=e.basis?e.basis.map(function(e){return{a:new vC(e.a,16),b:new vC(e.b,16)}}):this._getEndoBasis(n),{beta:t,lambda:n,basis:a}}},lD.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:vC.mont(e),n=new vC(2).toRed(t).redInvm(),r=n.redNeg(),i=new vC(3).toRed(t).redNeg().redSqrt().redMul(n);return[r.redAdd(i).fromRed(),r.redSub(i).fromRed()]},lD.prototype._getEndoBasis=function(e){for(var t=this.n.ushrn(Math.floor(this.n.bitLength()/2)),n=e,r=this.n.clone(),i=new vC(1),a=new vC(0),o=new vC(0),s=new vC(1),c,l,u,d,f,p,m,h=0,g,_;n.cmpn(0)!==0;){var v=r.div(n);g=r.sub(v.mul(n)),_=o.sub(v.mul(i));var y=s.sub(v.mul(a));if(!u&&g.cmp(t)<0)c=m.neg(),l=i,u=g.neg(),d=_;else if(u&&++h===2)break;m=g,r=n,n=g,o=i,i=_,s=a,a=y}f=g.neg(),p=_;var b=u.sqr().add(d.sqr());return f.sqr().add(p.sqr()).cmp(b)>=0&&(f=c,p=l),u.negative&&(u=u.neg(),d=d.neg()),f.negative&&(f=f.neg(),p=p.neg()),[{a:u,b:d},{a:f,b:p}]},lD.prototype._endoSplit=function(e){var t=this.endo.basis,n=t[0],r=t[1],i=r.b.mul(e).divRound(this.n),a=n.b.neg().mul(e).divRound(this.n),o=i.mul(n.a),s=a.mul(r.a),c=i.mul(n.b),l=a.mul(r.b);return{k1:e.sub(o).sub(s),k2:c.add(l).neg()}},lD.prototype.pointFromX=function(e,t){e=new vC(e,16),e.red||(e=e.toRed(this.red));var n=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),r=n.redSqrt();if(r.redSqr().redSub(n).cmp(this.zero)!==0)throw Error(`invalid point`);var i=r.fromRed().isOdd();return(t&&!i||!t&&i)&&(r=r.redNeg()),this.point(e,r)},lD.prototype.validate=function(e){if(e.inf)return!0;var t=e.x,n=e.y,r=this.a.redMul(t),i=t.redSqr().redMul(t).redIAdd(r).redIAdd(this.b);return n.redSqr().redISub(i).cmpn(0)===0},lD.prototype._endoWnafMulAdd=function(e,t,n){for(var r=this._endoWnafT1,i=this._endoWnafT2,a=0;a<e.length;a++){var o=this._endoSplit(t[a]),s=e[a],c=s._getBeta();o.k1.negative&&(o.k1.ineg(),s=s.neg(!0)),o.k2.negative&&(o.k2.ineg(),c=c.neg(!0)),r[a*2]=s,r[a*2+1]=c,i[a*2]=o.k1,i[a*2+1]=o.k2}for(var l=this._wnafMulAdd(1,r,i,a*2,n),u=0;u<a*2;u++)r[u]=null,i[u]=null;return l};function dD(e,t,n,r){aD.BasePoint.call(this,e,`affine`),t===null&&n===null?(this.x=null,this.y=null,this.inf=!0):(this.x=new vC(t,16),this.y=new vC(n,16),r&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}sD(dD,aD.BasePoint),lD.prototype.point=function(e,t,n){return new dD(this,e,t,n)},lD.prototype.pointFromJSON=function(e,t){return dD.fromJSON(this,e,t)},dD.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed;if(e&&e.beta)return e.beta;var t=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(e){var n=this.curve,r=function(e){return n.point(e.x.redMul(n.endo.beta),e.y)};e.beta=t,t.precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(r)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(r)}}}return t}},dD.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},dD.fromJSON=function(e,t,n){typeof t==`string`&&(t=JSON.parse(t));var r=e.point(t[0],t[1],n);if(!t[2])return r;function i(t){return e.point(t[0],t[1],n)}var a=t[2];return r.precomputed={beta:null,doubles:a.doubles&&{step:a.doubles.step,points:[r].concat(a.doubles.points.map(i))},naf:a.naf&&{wnd:a.naf.wnd,points:[r].concat(a.naf.points.map(i))}},r},dD.prototype.inspect=function(){return this.isInfinity()?`<EC Point Infinity>`:`<EC Point x: `+this.x.fromRed().toString(16,2)+` y: `+this.y.fromRed().toString(16,2)+`>`},dD.prototype.isInfinity=function(){return this.inf},dD.prototype.add=function(e){if(this.inf)return e;if(e.inf)return this;if(this.eq(e))return this.dbl();if(this.neg().eq(e)||this.x.cmp(e.x)===0)return this.curve.point(null,null);var t=this.y.redSub(e.y);t.cmpn(0)!==0&&(t=t.redMul(this.x.redSub(e.x).redInvm()));var n=t.redSqr().redISub(this.x).redISub(e.x),r=t.redMul(this.x.redSub(n)).redISub(this.y);return this.curve.point(n,r)},dD.prototype.dbl=function(){if(this.inf)return this;var e=this.y.redAdd(this.y);if(e.cmpn(0)===0)return this.curve.point(null,null);var t=this.curve.a,n=this.x.redSqr(),r=e.redInvm(),i=n.redAdd(n).redIAdd(n).redIAdd(t).redMul(r),a=i.redSqr().redISub(this.x.redAdd(this.x)),o=i.redMul(this.x.redSub(a)).redISub(this.y);return this.curve.point(a,o)},dD.prototype.getX=function(){return this.x.fromRed()},dD.prototype.getY=function(){return this.y.fromRed()},dD.prototype.mul=function(e){return e=new vC(e,16),this.isInfinity()?this:this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},dD.prototype.mulAdd=function(e,t,n){var r=[this,t],i=[e,n];return this.curve.endo?this.curve._endoWnafMulAdd(r,i):this.curve._wnafMulAdd(1,r,i,2)},dD.prototype.jmulAdd=function(e,t,n){var r=[this,t],i=[e,n];return this.curve.endo?this.curve._endoWnafMulAdd(r,i,!0):this.curve._wnafMulAdd(1,r,i,2,!0)},dD.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||this.x.cmp(e.x)===0&&this.y.cmp(e.y)===0)},dD.prototype.neg=function(e){if(this.inf)return this;var t=this.curve.point(this.x,this.y.redNeg());if(e&&this.precomputed){var n=this.precomputed,r=function(e){return e.neg()};t.precomputed={naf:n.naf&&{wnd:n.naf.wnd,points:n.naf.points.map(r)},doubles:n.doubles&&{step:n.doubles.step,points:n.doubles.points.map(r)}}}return t},dD.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)};function fD(e,t,n,r){aD.BasePoint.call(this,e,`jacobian`),t===null&&n===null&&r===null?(this.x=this.curve.one,this.y=this.curve.one,this.z=new vC(0)):(this.x=new vC(t,16),this.y=new vC(n,16),this.z=new vC(r,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}sD(fD,aD.BasePoint),lD.prototype.jpoint=function(e,t,n){return new fD(this,e,t,n)},fD.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var e=this.z.redInvm(),t=e.redSqr(),n=this.x.redMul(t),r=this.y.redMul(t).redMul(e);return this.curve.point(n,r)},fD.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},fD.prototype.add=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var t=e.z.redSqr(),n=this.z.redSqr(),r=this.x.redMul(t),i=e.x.redMul(n),a=this.y.redMul(t.redMul(e.z)),o=e.y.redMul(n.redMul(this.z)),s=r.redSub(i),c=a.redSub(o);if(s.cmpn(0)===0)return c.cmpn(0)===0?this.dbl():this.curve.jpoint(null,null,null);var l=s.redSqr(),u=l.redMul(s),d=r.redMul(l),f=c.redSqr().redIAdd(u).redISub(d).redISub(d),p=c.redMul(d.redISub(f)).redISub(a.redMul(u)),m=this.z.redMul(e.z).redMul(s);return this.curve.jpoint(f,p,m)},fD.prototype.mixedAdd=function(e){if(this.isInfinity())return e.toJ();if(e.isInfinity())return this;var t=this.z.redSqr(),n=this.x,r=e.x.redMul(t),i=this.y,a=e.y.redMul(t).redMul(this.z),o=n.redSub(r),s=i.redSub(a);if(o.cmpn(0)===0)return s.cmpn(0)===0?this.dbl():this.curve.jpoint(null,null,null);var c=o.redSqr(),l=c.redMul(o),u=n.redMul(c),d=s.redSqr().redIAdd(l).redISub(u).redISub(u),f=s.redMul(u.redISub(d)).redISub(i.redMul(l)),p=this.z.redMul(o);return this.curve.jpoint(d,f,p)},fD.prototype.dblp=function(e){if(e===0||this.isInfinity())return this;if(!e)return this.dbl();var t;if(this.curve.zeroA||this.curve.threeA){var n=this;for(t=0;t<e;t++)n=n.dbl();return n}var r=this.curve.a,i=this.curve.tinv,a=this.x,o=this.y,s=this.z,c=s.redSqr().redSqr(),l=o.redAdd(o);for(t=0;t<e;t++){var u=a.redSqr(),d=l.redSqr(),f=d.redSqr(),p=u.redAdd(u).redIAdd(u).redIAdd(r.redMul(c)),m=a.redMul(d),h=p.redSqr().redISub(m.redAdd(m)),g=m.redISub(h),_=p.redMul(g);_=_.redIAdd(_).redISub(f);var v=l.redMul(s);t+1<e&&(c=c.redMul(f)),a=h,s=v,l=_}return this.curve.jpoint(a,l.redMul(i),s)},fD.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},fD.prototype._zeroDbl=function(){var e,t,n;if(this.zOne){var r=this.x.redSqr(),i=this.y.redSqr(),a=i.redSqr(),o=this.x.redAdd(i).redSqr().redISub(r).redISub(a);o=o.redIAdd(o);var s=r.redAdd(r).redIAdd(r),c=s.redSqr().redISub(o).redISub(o),l=a.redIAdd(a);l=l.redIAdd(l),l=l.redIAdd(l),e=c,t=s.redMul(o.redISub(c)).redISub(l),n=this.y.redAdd(this.y)}else{var u=this.x.redSqr(),d=this.y.redSqr(),f=d.redSqr(),p=this.x.redAdd(d).redSqr().redISub(u).redISub(f);p=p.redIAdd(p);var m=u.redAdd(u).redIAdd(u),h=m.redSqr(),g=f.redIAdd(f);g=g.redIAdd(g),g=g.redIAdd(g),e=h.redISub(p).redISub(p),t=m.redMul(p.redISub(e)).redISub(g),n=this.y.redMul(this.z),n=n.redIAdd(n)}return this.curve.jpoint(e,t,n)},fD.prototype._threeDbl=function(){var e,t,n;if(this.zOne){var r=this.x.redSqr(),i=this.y.redSqr(),a=i.redSqr(),o=this.x.redAdd(i).redSqr().redISub(r).redISub(a);o=o.redIAdd(o);var s=r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),c=s.redSqr().redISub(o).redISub(o);e=c;var l=a.redIAdd(a);l=l.redIAdd(l),l=l.redIAdd(l),t=s.redMul(o.redISub(c)).redISub(l),n=this.y.redAdd(this.y)}else{var u=this.z.redSqr(),d=this.y.redSqr(),f=this.x.redMul(d),p=this.x.redSub(u).redMul(this.x.redAdd(u));p=p.redAdd(p).redIAdd(p);var m=f.redIAdd(f);m=m.redIAdd(m);var h=m.redAdd(m);e=p.redSqr().redISub(h),n=this.y.redAdd(this.z).redSqr().redISub(d).redISub(u);var g=d.redSqr();g=g.redIAdd(g),g=g.redIAdd(g),g=g.redIAdd(g),t=p.redMul(m.redISub(e)).redISub(g)}return this.curve.jpoint(e,t,n)},fD.prototype._dbl=function(){var e=this.curve.a,t=this.x,n=this.y,r=this.z,i=r.redSqr().redSqr(),a=t.redSqr(),o=n.redSqr(),s=a.redAdd(a).redIAdd(a).redIAdd(e.redMul(i)),c=t.redAdd(t);c=c.redIAdd(c);var l=c.redMul(o),u=s.redSqr().redISub(l.redAdd(l)),d=l.redISub(u),f=o.redSqr();f=f.redIAdd(f),f=f.redIAdd(f),f=f.redIAdd(f);var p=s.redMul(d).redISub(f),m=n.redAdd(n).redMul(r);return this.curve.jpoint(u,p,m)},fD.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var e=this.x.redSqr(),t=this.y.redSqr(),n=this.z.redSqr(),r=t.redSqr(),i=e.redAdd(e).redIAdd(e),a=i.redSqr(),o=this.x.redAdd(t).redSqr().redISub(e).redISub(r);o=o.redIAdd(o),o=o.redAdd(o).redIAdd(o),o=o.redISub(a);var s=o.redSqr(),c=r.redIAdd(r);c=c.redIAdd(c),c=c.redIAdd(c),c=c.redIAdd(c);var l=i.redIAdd(o).redSqr().redISub(a).redISub(s).redISub(c),u=t.redMul(l);u=u.redIAdd(u),u=u.redIAdd(u);var d=this.x.redMul(s).redISub(u);d=d.redIAdd(d),d=d.redIAdd(d);var f=this.y.redMul(l.redMul(c.redISub(l)).redISub(o.redMul(s)));f=f.redIAdd(f),f=f.redIAdd(f),f=f.redIAdd(f);var p=this.z.redAdd(o).redSqr().redISub(n).redISub(s);return this.curve.jpoint(d,f,p)},fD.prototype.mul=function(e,t){return e=new vC(e,t),this.curve._wnafMul(this,e)},fD.prototype.eq=function(e){if(e.type===`affine`)return this.eq(e.toJ());if(this===e)return!0;var t=this.z.redSqr(),n=e.z.redSqr();if(this.x.redMul(n).redISub(e.x.redMul(t)).cmpn(0)!==0)return!1;var r=t.redMul(this.z),i=n.redMul(e.z);return this.y.redMul(i).redISub(e.y.redMul(r)).cmpn(0)===0},fD.prototype.eqXToP=function(e){var t=this.z.redSqr(),n=e.toRed(this.curve.red).redMul(t);if(this.x.cmp(n)===0)return!0;for(var r=e.clone(),i=this.curve.redN.redMul(t);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(n.redIAdd(i),this.x.cmp(n)===0)return!0}},fD.prototype.inspect=function(){return this.isInfinity()?`<EC JPoint Infinity>`:`<EC JPoint x: `+this.x.toString(16,2)+` y: `+this.y.toString(16,2)+` z: `+this.z.toString(16,2)+`>`},fD.prototype.isInfinity=function(){return this.z.cmpn(0)===0};var pD=YE(function(e,t){var n=t;n.base=aD,n.short=uD,n.mont=null,n.edwards=null}),mD=YE(function(e,t){var n=t,r=eD.assert;function i(e){e.type===`short`?this.curve=new pD.short(e):e.type===`edwards`?this.curve=new pD.edwards(e):this.curve=new pD.mont(e),this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,r(this.g.validate(),`Invalid curve`),r(this.g.mul(this.n).isInfinity(),`Invalid curve, G*N != O`)}n.PresetCurve=i;function a(e,t){Object.defineProperty(n,e,{configurable:!0,enumerable:!0,get:function(){var r=new i(t);return Object.defineProperty(n,e,{configurable:!0,enumerable:!0,value:r}),r}})}a(`p192`,{type:`short`,prime:`p192`,p:`ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff`,a:`ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc`,b:`64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1`,n:`ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831`,hash:ww.sha256,gRed:!1,g:[`188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012`,`07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811`]}),a(`p224`,{type:`short`,prime:`p224`,p:`ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001`,a:`ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe`,b:`b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4`,n:`ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d`,hash:ww.sha256,gRed:!1,g:[`b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21`,`bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34`]}),a(`p256`,{type:`short`,prime:null,p:`ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff`,a:`ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc`,b:`5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b`,n:`ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551`,hash:ww.sha256,gRed:!1,g:[`6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296`,`4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5`]}),a(`p384`,{type:`short`,prime:null,p:`ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff`,a:`ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc`,b:`b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef`,n:`ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973`,hash:ww.sha384,gRed:!1,g:[`aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7`,`3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f`]}),a(`p521`,{type:`short`,prime:null,p:`000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff`,a:`000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc`,b:`00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00`,n:`000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409`,hash:ww.sha512,gRed:!1,g:[`000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66`,`00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650`]}),a(`curve25519`,{type:`mont`,prime:`p25519`,p:`7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed`,a:`76d06`,b:`1`,n:`1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed`,hash:ww.sha256,gRed:!1,g:[`9`]}),a(`ed25519`,{type:`edwards`,prime:`p25519`,p:`7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed`,a:`-1`,c:`1`,d:`52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3`,n:`1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed`,hash:ww.sha256,gRed:!1,g:[`216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a`,`6666666666666666666666666666666666666666666666666666666666666658`]});var o;try{o=null.crash()}catch{o=void 0}a(`secp256k1`,{type:`short`,prime:`k256`,p:`ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f`,a:`0`,b:`7`,n:`ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141`,h:`1`,hash:ww.sha256,beta:`7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee`,lambda:`5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72`,basis:[{a:`3086d221a7d46bcde86c90e49284eb15`,b:`-e4437ed6010e88286f547fa90abfe4c3`},{a:`114ca50f7a8e2f3f657c1108d9d44cfd8`,b:`3086d221a7d46bcde86c90e49284eb15`}],gRed:!1,g:[`79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798`,`483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8`,o]})});function hD(e){if(!(this instanceof hD))return new hD(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=$E.toArray(e.entropy,e.entropyEnc||`hex`),n=$E.toArray(e.nonce,e.nonceEnc||`hex`),r=$E.toArray(e.pers,e.persEnc||`hex`);ZE(t.length>=this.minEntropy/8,`Not enough entropy. Minimum is: `+this.minEntropy+` bits`),this._init(t,n,r)}var gD=hD;hD.prototype._init=function(e,t,n){var r=e.concat(t).concat(n);this.K=Array(this.outLen/8),this.V=Array(this.outLen/8);for(var i=0;i<this.V.length;i++)this.K[i]=0,this.V[i]=1;this._update(r),this._reseed=1,this.reseedInterval=281474976710656},hD.prototype._hmac=function(){return new ww.hmac(this.hash,this.K)},hD.prototype._update=function(e){var t=this._hmac().update(this.V).update([0]);e&&(t=t.update(e)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest())},hD.prototype.reseed=function(e,t,n,r){typeof t!=`string`&&(r=n,n=t,t=null),e=$E.toArray(e,t),n=$E.toArray(n,r),ZE(e.length>=this.minEntropy/8,`Not enough entropy. Minimum is: `+this.minEntropy+` bits`),this._update(e.concat(n||[])),this._reseed=1},hD.prototype.generate=function(e,t,n,r){if(this._reseed>this.reseedInterval)throw Error(`Reseed is required`);typeof t!=`string`&&(r=n,n=t,t=null),n&&(n=$E.toArray(n,r||`hex`),this._update(n));for(var i=[];i.length<e;)this.V=this._hmac().update(this.V).digest(),i=i.concat(this.V);var a=i.slice(0,e);return this._update(n),this._reseed++,$E.encode(a,t)};var _D=eD.assert;function vD(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}var yD=vD;vD.fromPublic=function(e,t,n){return t instanceof vD?t:new vD(e,{pub:t,pubEnc:n})},vD.fromPrivate=function(e,t,n){return t instanceof vD?t:new vD(e,{priv:t,privEnc:n})},vD.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:`Invalid public key`}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:`Public key * N != O`}:{result:!1,reason:`Public key is not a point`}},vD.prototype.getPublic=function(e,t){return typeof e==`string`&&(t=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t?this.pub.encode(t,e):this.pub},vD.prototype.getPrivate=function(e){return e===`hex`?this.priv.toString(16,2):this.priv},vD.prototype._importPrivate=function(e,t){this.priv=new vC(e,t||16),this.priv=this.priv.umod(this.ec.curve.n)},vD.prototype._importPublic=function(e,t){if(e.x||e.y){this.ec.curve.type===`mont`?_D(e.x,`Need x coordinate`):(this.ec.curve.type===`short`||this.ec.curve.type===`edwards`)&&_D(e.x&&e.y,`Need both x and y coordinate`),this.pub=this.ec.curve.point(e.x,e.y);return}this.pub=this.ec.curve.decodePoint(e,t)},vD.prototype.derive=function(e){return e.validate()||_D(e.validate(),`public point not validated`),e.mul(this.priv).getX()},vD.prototype.sign=function(e,t,n){return this.ec.sign(e,this,t,n)},vD.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},vD.prototype.inspect=function(){return`<Key priv: `+(this.priv&&this.priv.toString(16,2))+` pub: `+(this.pub&&this.pub.inspect())+` >`};var bD=eD.assert;function xD(e,t){if(e instanceof xD)return e;this._importDER(e,t)||(bD(e.r&&e.s,`Signature without r or s`),this.r=new vC(e.r,16),this.s=new vC(e.s,16),e.recoveryParam===void 0?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}var SD=xD;function CD(){this.place=0}function wD(e,t){var n=e[t.place++];if(!(n&128))return n;var r=n&15;if(r===0||r>4)return!1;for(var i=0,a=0,o=t.place;a<r;a++,o++)i<<=8,i|=e[o],i>>>=0;return i<=127?!1:(t.place=o,i)}function TD(e){for(var t=0,n=e.length-1;!e[t]&&!(e[t+1]&128)&&t<n;)t++;return t===0?e:e.slice(t)}xD.prototype._importDER=function(e,t){e=eD.toArray(e,t);var n=new CD;if(e[n.place++]!==48)return!1;var r=wD(e,n);if(r===!1||r+n.place!==e.length||e[n.place++]!==2)return!1;var i=wD(e,n);if(i===!1)return!1;var a=e.slice(n.place,i+n.place);if(n.place+=i,e[n.place++]!==2)return!1;var o=wD(e,n);if(o===!1||e.length!==o+n.place)return!1;var s=e.slice(n.place,o+n.place);if(a[0]===0)if(a[1]&128)a=a.slice(1);else return!1;if(s[0]===0)if(s[1]&128)s=s.slice(1);else return!1;return this.r=new vC(a),this.s=new vC(s),this.recoveryParam=null,!0};function ED(e,t){if(t<128){e.push(t);return}var n=1+(Math.log(t)/Math.LN2>>>3);for(e.push(n|128);--n;)e.push(t>>>(n<<3)&255);e.push(t)}xD.prototype.toDER=function(e){var t=this.r.toArray(),n=this.s.toArray();for(t[0]&128&&(t=[0].concat(t)),n[0]&128&&(n=[0].concat(n)),t=TD(t),n=TD(n);!n[0]&&!(n[1]&128);)n=n.slice(1);var r=[2];ED(r,t.length),r=r.concat(t),r.push(2),ED(r,n.length);var i=r.concat(n),a=[48];return ED(a,i.length),a=a.concat(i),eD.encode(a,e)};var DD=function(){throw Error(`unsupported`)},OD=eD.assert;function kD(e){if(!(this instanceof kD))return new kD(e);typeof e==`string`&&(OD(Object.prototype.hasOwnProperty.call(mD,e),`Unknown curve `+e),e=mD[e]),e instanceof mD.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}var AD=kD;kD.prototype.keyPair=function(e){return new yD(this,e)},kD.prototype.keyFromPrivate=function(e,t){return yD.fromPrivate(this,e,t)},kD.prototype.keyFromPublic=function(e,t){return yD.fromPublic(this,e,t)},kD.prototype.genKeyPair=function(e){e||(e={});for(var t=new gD({hash:this.hash,pers:e.pers,persEnc:e.persEnc||`utf8`,entropy:e.entropy||DD(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||`utf8`,nonce:this.n.toArray()}),n=this.n.byteLength(),r=this.n.sub(new vC(2));;){var i=new vC(t.generate(n));if(!(i.cmp(r)>0))return i.iaddn(1),this.keyFromPrivate(i)}},kD.prototype._truncateToN=function(e,t){var n=e.byteLength()*8-this.n.bitLength();return n>0&&(e=e.ushrn(n)),!t&&e.cmp(this.n)>=0?e.sub(this.n):e},kD.prototype.sign=function(e,t,n,r){typeof n==`object`&&(r=n,n=null),r||(r={}),t=this.keyFromPrivate(t,n),e=this._truncateToN(new vC(e,16));for(var i=this.n.byteLength(),a=t.getPrivate().toArray(`be`,i),o=e.toArray(`be`,i),s=new gD({hash:this.hash,entropy:a,nonce:o,pers:r.pers,persEnc:r.persEnc||`utf8`}),c=this.n.sub(new vC(1)),l=0;;l++){var u=r.k?r.k(l):new vC(s.generate(this.n.byteLength()));if(u=this._truncateToN(u,!0),!(u.cmpn(1)<=0||u.cmp(c)>=0)){var d=this.g.mul(u);if(!d.isInfinity()){var f=d.getX(),p=f.umod(this.n);if(p.cmpn(0)!==0){var m=u.invm(this.n).mul(p.mul(t.getPrivate()).iadd(e));if(m=m.umod(this.n),m.cmpn(0)!==0){var h=(d.getY().isOdd()?1:0)|(f.cmp(p)===0?0:2);return r.canonical&&m.cmp(this.nh)>0&&(m=this.n.sub(m),h^=1),new SD({r:p,s:m,recoveryParam:h})}}}}}},kD.prototype.verify=function(e,t,n,r){e=this._truncateToN(new vC(e,16)),n=this.keyFromPublic(n,r),t=new SD(t,`hex`);var i=t.r,a=t.s;if(i.cmpn(1)<0||i.cmp(this.n)>=0||a.cmpn(1)<0||a.cmp(this.n)>=0)return!1;var o=a.invm(this.n),s=o.mul(e).umod(this.n),c=o.mul(i).umod(this.n),l;return this.curve._maxwellTrick?(l=this.g.jmulAdd(s,n.getPublic(),c),l.isInfinity()?!1:l.eqXToP(i)):(l=this.g.mulAdd(s,n.getPublic(),c),l.isInfinity()?!1:l.getX().umod(this.n).cmp(i)===0)},kD.prototype.recoverPubKey=function(e,t,n,r){OD((3&n)===n,`The recovery param is more than two bits`),t=new SD(t,r);var i=this.n,a=new vC(e),o=t.r,s=t.s,c=n&1,l=n>>1;if(o.cmp(this.curve.p.umod(this.curve.n))>=0&&l)throw Error(`Unable to find sencond key candinate`);o=l?this.curve.pointFromX(o.add(this.curve.n),c):this.curve.pointFromX(o,c);var u=t.r.invm(i),d=i.sub(a).mul(u).umod(i),f=s.mul(u).umod(i);return this.g.mulAdd(d,o,f)},kD.prototype.getKeyRecoveryParam=function(e,t,n,r){if(t=new SD(t,r),t.recoveryParam!==null)return t.recoveryParam;for(var i=0;i<4;i++){var a;try{a=this.recoverPubKey(e,t,i)}catch{continue}if(a.eq(n))return i}throw Error(`Unable to find valid recovery factor`)},YE(function(e,t){var n=t;n.version=`6.5.4`,n.utils=eD,n.rand=function(){throw Error(`unsupported`)},n.curve=pD,n.curves=mD,n.ec=AD,n.eddsa=null}).ec,new aC(`signing-key/5.7.0`),new aC(`transactions/5.7.0`);var jD;(function(e){e[e.legacy=0]=`legacy`,e[e.eip2930=1]=`eip2930`,e[e.eip1559=2]=`eip1559`})(jD||(jD={}));function MD(e){if(e)return{id:`${mh.EIP155}:${e.id}`,name:e.name,imageId:hh.EIP155NetworkImageIds[e.id],chain:Se.CHAIN.EVM}}async function ND(e){var t,n,r;if(!e)throw Error(`networkControllerClient:getApprovedCaipNetworks - connector is undefined`);let i=await(e==null?void 0:e.getProvider()),a=i==null||(t=i.signer)==null||(t=t.session)==null?void 0:t.namespaces,o=a==null||(n=a[mh.EIP155])==null?void 0:n.methods,s=WS((a==null||(r=a[mh.EIP155])==null?void 0:r.accounts)||[]);return{supportsAllNetworks:!!(o!=null&&o.includes(mh.ADD_CHAIN_METHOD)),approvedCaipNetworkIds:s}}function PD(){return{supportsAllNetworks:!1,approvedCaipNetworkIds:hh.WalletConnectRpcChainIds.map(e=>`${mh.EIP155}:${e}`)}}function FD(e){if(!e)throw Error(`No CAIP address provided`);let t=e.split(`:`)[2];if(!t)throw Error(`Invalid CAIP address`);return t}function ID(e){return SS(e)}function LD(e){return ID(e)}var RD=class{constructor(e){var t,n,i;this.appKit=void 0,this.options=void 0,this.chain=Se.CHAIN.EVM,this.defaultChain=void 0,this.tokens=gh.getCaipTokens((t=this.options)==null?void 0:t.tokens),this.getCaipDefaultChain=(n=this.options)==null?void 0:n.defaultChain,this.siweControllerClient=(i=this.options)==null?void 0:i.siweConfig;let{wagmiConfig:a,defaultChain:o}=e;if(!a)throw Error(`wagmiConfig is undefined`);this.wagmiConfig=a,this.defaultChain=MD(o),this.siweControllerClient=e.siweConfig,this.networkControllerClient={switchCaipNetwork:async e=>{let t=Ee.caipNetworkIdToNumber(e==null?void 0:e.id);t&&await ee(this.wagmiConfig,{chainId:t})},getApprovedCaipNetworksData:async()=>new Promise(e=>{var t,n;let r=new Map(this.wagmiConfig.state.connections).get(this.wagmiConfig.state.current||``);(r==null||(t=r.connector)==null?void 0:t.id)===mh.AUTH_CONNECTOR_ID?e(PD()):(r==null||(n=r.connector)==null?void 0:n.id)===mh.WALLET_CONNECT_CONNECTOR_ID&&e(ND(this.wagmiConfig.connectors.find(e=>e.id===mh.WALLET_CONNECT_CONNECTOR_ID))),e({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})})},this.connectionControllerClient={connectWalletConnect:async e=>{var t,n,r,i,a;let o=(t=this.options)==null?void 0:t.siweConfig,s=this.wagmiConfig.connectors.find(e=>e.id===mh.WALLET_CONNECT_CONNECTOR_ID);if(!s)throw Error(`connectionControllerClient:getWalletConnectUri - connector is undefined`);let c=await s.getProvider();c.on(`display_uri`,t=>{e(t)});let l=await((n=c.signer)==null||(n=n.client)==null||(n=n.core)==null||(n=n.crypto)==null?void 0:n.getClientId());if(l){var u;(u=this.appKit)==null||u.setClientId(l)}let d=Ee.caipNetworkIdToNumber((r=this.appKit)==null||(r=r.getCaipNetwork())==null?void 0:r.id),f=await(o==null||(i=o.getMessageParams)==null?void 0:i.call(o));if(!(o==null||(a=o.options)==null)&&a.enabled&&typeof(c==null?void 0:c.authenticate)==`function`&&f&&Object.keys(f||{}).length>0){var p;let{SIWEController:e,getDidChainId:t,getDidAddress:n}=await g(async()=>{let{SIWEController:e,getDidChainId:t,getDidAddress:n}=await import(`./exports-CZOqf00r.js`);return{SIWEController:e,getDidChainId:t,getDidAddress:n}},__vite__mapDeps([0,1,2,3,4,5,6,7]));await s.setRequestedChainsIds(f.chains);let r=f.chains;d&&(r=[d,...f.chains.filter(e=>e!==d)]);let i=await c.authenticate({nonce:await o.getNonce(),methods:[...PS],...f,chains:r}),a=i==null||(p=i.auths)==null?void 0:p[0];if(a){let{p:r,s:i}=a,o=t(r.iss)||``,s=n(r.iss);s&&o&&e.setSession({address:s,chainId:parseInt(o,10)});try{let t=c.signer.client.formatAuthMessage({request:r,iss:r.iss});await e.verifyMessage({message:t,signature:i.s,cacao:a})}catch(t){throw console.error(`Error verifying message`,t),await c.disconnect().catch(console.error),await e.signOut().catch(console.error),t}}this.wagmiConfig.state.current=``}await se(this.wagmiConfig,{connector:s,chainId:d})},connectExternal:async({id:e,provider:t,info:n})=>{var r,i;let a=this.wagmiConfig.connectors.find(t=>t.id===e);if(!a)throw Error(`connectionControllerClient:connectExternal - connector is undefined`);if((r=this.appKit)==null||r.setClientId(null),t&&n&&a.id===mh.EIP6963_CONNECTOR_ID){var o;(o=a.setEip6963Wallet)==null||o.call(a,{provider:t,info:n})}let s=Ee.caipNetworkIdToNumber((i=this.appKit)==null||(i=i.getCaipNetwork())==null?void 0:i.id);await se(this.wagmiConfig,{connector:a,chainId:s})},checkInstalled:e=>{var t;let n=(t=this.appKit)==null?void 0:t.getConnectors().find(e=>e.type===`INJECTED`);if(!e)return!!window.ethereum;if(n){var r;return(r=window)!=null&&r.ethereum?e.some(e=>{var t;return!!((t=window.ethereum)!=null&&t[String(e)])}):!1}return!1},disconnect:async()=>{var e,t;if(await _(this.wagmiConfig),(e=this.appKit)==null||e.setClientId(null),!((t=this.options)==null||(t=t.siweConfig)==null||(t=t.options)==null)&&t.signOutOnDisconnect){let{SIWEController:e}=await g(async()=>{let{SIWEController:e}=await import(`./exports-CZOqf00r.js`);return{SIWEController:e}},__vite__mapDeps([0,1,2,3,4,5,6,7]));await e.signOut()}},signMessage:async e=>{var t;let n=FD(((t=this.appKit)==null?void 0:t.getCaipAddress())||``);return ae(this.wagmiConfig,{message:e,account:n})},estimateGas:async e=>{if(e.chainNamespace&&e.chainNamespace!==`eip155`)throw Error(`connectionControllerClient:estimateGas - invalid chain namespace`);try{return await v(this.wagmiConfig,{account:e.address,to:e.to,data:e.data,type:`legacy`})}catch{return 0n}},sendTransaction:async e=>{if(e.chainNamespace&&e.chainNamespace!==`eip155`)throw Error(`connectionControllerClient:sendTransaction - invalid chain namespace`);let{chainId:t}=x(this.wagmiConfig),n={account:e.address,to:e.to,value:e.value,gas:e.gas,gasPrice:e.gasPrice,data:e.data,chainId:t,type:`legacy`};await ne(this.wagmiConfig,n);let r=await S(this.wagmiConfig,n);return await D(this.wagmiConfig,{hash:r,timeout:25e3}),r},writeContract:async e=>{var t,n;let r=FD(((t=this.appKit)==null?void 0:t.getCaipAddress())||``),i=Ee.caipNetworkIdToNumber((n=this.appKit)==null||(n=n.getCaipNetwork())==null?void 0:n.id);return await re(this.wagmiConfig,{chainId:i,address:e.tokenAddress,account:r,abi:e.abi,functionName:e.method,args:[e.receiverAddress,e.tokenAmount]})},getEnsAddress:async e=>{try{var t;let r=Ee.caipNetworkIdToNumber((t=this.appKit)==null||(t=t.getCaipNetwork())==null?void 0:t.id),i=!1,a=!1;if(e!=null&&e.endsWith(Se.WC_NAME_SUFFIX)){var n;a=await((n=this.appKit)==null?void 0:n.resolveWalletConnectName(e))||!1}return r===ph.id&&(i=await oe(this.wagmiConfig,{name:LD(e),chainId:r})),i||a||!1}catch{return!1}},getEnsAvatar:async e=>{var t;let n=Ee.caipNetworkIdToNumber((t=this.appKit)==null||(t=t.getCaipNetwork())==null?void 0:t.id);return n===ph.id&&await y(this.wagmiConfig,{name:LD(e),chainId:n})||!1},parseUnits:d,formatUnits:r}}construct(e,t){var n,r;if(!t.projectId)throw Error(`projectId is undefined`);this.appKit=e,this.options=t,this.tokens=gh.getCaipTokens(t.tokens),this.syncRequestedNetworks([...this.wagmiConfig.chains]),this.syncConnectors(this.wagmiConfig.connectors),this.initAuthConnectorListeners([...this.wagmiConfig.connectors]),T(this.wagmiConfig,{onChange:e=>this.syncConnectors(e)}),b(this.wagmiConfig,{onChange:e=>this.syncAccount({...e})}),(n=this.appKit)==null||n.setEIP6963Enabled(t.enableEIP6963!==!1),(r=this.appKit)==null||r.subscribeShouldUpdateToAddress(e=>{if(e){var t;let n=(t=le(this.wagmiConfig)[0])==null?void 0:t.connector;n&&ie(this.wagmiConfig,{connector:n}).then(t=>this.syncAccount({address:e,isConnected:!0,addresses:t.accounts,connector:n,chainId:t.chainId}))}})}subscribeState(e){var t;return(t=this.appKit)==null?void 0:t.subscribeState(t=>e({...t,selectedNetworkId:Ee.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){var t;let n=e==null?void 0:e.map(e=>{var t;return{id:`${mh.EIP155}:${e.id}`,name:e.name,imageId:hh.EIP155NetworkImageIds[e.id],imageUrl:(t=this.options)==null||(t=t.chainImages)==null?void 0:t[e.id],chain:this.chain}});(t=this.appKit)==null||t.setRequestedCaipNetworks(n??[],this.chain)}async syncAccount({address:e,chainId:t,connector:n,addresses:r,status:i}){var a;let o=`${mh.EIP155}:${t}:${e}`;if(((a=this.appKit)==null?void 0:a.getCaipAddress())!==o){if(i===`connected`&&e&&t){var s,c,l;if(this.syncNetwork(e,t,!0),(s=this.appKit)==null||s.setIsConnected(!0,this.chain),(c=this.appKit)==null||c.setCaipAddress(o,this.chain),await Promise.all([this.syncProfile(e,t),this.syncBalance(e,t),this.syncConnectedWalletInfo(n),(l=this.appKit)==null?void 0:l.setApprovedCaipNetworksData(this.chain)]),n&&this.syncConnectedWalletInfo(n),(n==null?void 0:n.id)!==mh.AUTH_CONNECTOR_ID&&r!=null&&r.length){var u;(u=this.appKit)==null||u.setAllAccounts(r.map(e=>({address:e,type:`eoa`})),this.chain)}}else if(i===`disconnected`){var d,f,p,m,h;(d=this.appKit)==null||d.resetAccount(this.chain),(f=this.appKit)==null||f.resetWcConnection(),(p=this.appKit)==null||p.resetNetwork(),(m=this.appKit)==null||m.setAllAccounts([],this.chain),(h=this.appKit)==null||h.setIsConnected(!1,this.chain)}}}async syncNetwork(e,t,n){let r=this.wagmiConfig.chains.find(e=>e.id===t);if(r||t){var i,a;let u=(r==null?void 0:r.name)??(t==null?void 0:t.toString()),d=Number((r==null?void 0:r.id)??t),f=`${mh.EIP155}:${d}`;if((i=this.appKit)==null||i.setCaipNetwork({id:f,name:u,imageId:hh.EIP155NetworkImageIds[d],imageUrl:(a=this.options)==null||(a=a.chainImages)==null?void 0:a[d],chain:this.chain}),n&&e&&t){var o,s;let n=`${mh.EIP155}:${d}:${e}`;if((o=this.appKit)==null||o.setCaipAddress(n,this.chain),!(r==null||(s=r.blockExplorers)==null||(s=s.default)==null)&&s.url){var c;let t=`${r.blockExplorers.default.url}/address/${e}`;(c=this.appKit)==null||c.setAddressExplorerUrl(t,this.chain)}else{var l;(l=this.appKit)==null||l.setAddressExplorerUrl(void 0,this.chain)}await this.syncBalance(e,t)}}}async syncWalletConnectName(e){if(!this.appKit)throw Error(`syncWalletConnectName - appKit is undefined`);try{let r=await this.appKit.getWalletConnectName(e);if(r[0]){var t;let e=r[0];(t=this.appKit)==null||t.setProfileName(e.name,this.chain)}else{var n;(n=this.appKit)==null||n.setProfileName(null,this.chain)}}catch{var r;(r=this.appKit)==null||r.setProfileName(null,this.chain)}}async syncProfile(e,t){if(!this.appKit)throw Error(`syncProfile - appKit is undefined`);try{var n,r;let{name:t,avatar:i}=await this.appKit.fetchIdentity({address:e});(n=this.appKit)==null||n.setProfileName(t,this.chain),(r=this.appKit)==null||r.setProfileImage(i,this.chain),t||await this.syncWalletConnectName(e)}catch{if(t===ph.id){let n=await te(this.wagmiConfig,{address:e,chainId:t});if(n){var i;(i=this.appKit)==null||i.setProfileName(n,this.chain);let e=await y(this.wagmiConfig,{name:n,chainId:t});if(e){var a;(a=this.appKit)==null||a.setProfileImage(e,this.chain)}}else{var o;await this.syncWalletConnectName(e),(o=this.appKit)==null||o.setProfileImage(null,this.chain)}}else{var s;await this.syncWalletConnectName(e),(s=this.appKit)==null||s.setProfileImage(null,this.chain)}}}async syncBalance(e,t){var n;let r=this.wagmiConfig.chains.find(e=>e.id===t);if(r){var i,a;let t=await ce(this.wagmiConfig,{address:e,chainId:r.id,token:(i=this.options)==null||(i=i.tokens)==null||(i=i[r.id])==null?void 0:i.address});(a=this.appKit)==null||a.setBalance(t.formatted,t.symbol,this.chain);return}(n=this.appKit)==null||n.setBalance(void 0,void 0,this.chain)}async syncConnectedWalletInfo(e){if(!e)throw Error(`syncConnectedWalletInfo - connector is undefined`);if(e.id===mh.WALLET_CONNECT_CONNECTOR_ID&&e.getProvider){let r=await e.getProvider();if(r.session){var t,n;(t=this.appKit)==null||t.setConnectedWalletInfo({...r.session.peer.metadata,name:r.session.peer.metadata.name,icon:(n=r.session.peer.metadata.icons)==null?void 0:n[0]},this.chain)}}else{var r,i;let t=(r=this.appKit)==null?void 0:r.getConnectors().find(t=>t.id===e.id);(i=this.appKit)==null||i.setConnectedWalletInfo({name:e.name,icon:e.icon||this.appKit.getConnectorImage(t)},this.chain)}}syncConnectors(e){var t;let n=new Set,r=e.filter(e=>!n.has(e.id)&&n.add(e.id)),i=[];r.forEach(({id:e,name:t,type:n,icon:r})=>{if(mh.AUTH_CONNECTOR_ID!==e){var a;i.push({id:e,explorerId:hh.ConnectorExplorerIds[e],imageUrl:((a=this.options)==null||(a=a.connectorImages)==null?void 0:a[e])??r,name:hh.ConnectorNamesMap[e]??t,imageId:hh.ConnectorImageIds[e],type:hh.ConnectorTypesMap[n]??`EXTERNAL`,info:{rdns:e},chain:this.chain})}}),(t=this.appKit)==null||t.setConnectors(i),this.syncAuthConnector(r)}async syncAuthConnector(e){let t=e.find(({id:e})=>e===mh.AUTH_CONNECTOR_ID);if(t){var n;let e=await t.getProvider();(n=this.appKit)==null||n.addConnector({id:mh.AUTH_CONNECTOR_ID,type:`AUTH`,name:`Auth`,provider:e,email:t.email,socials:t.socials,showWallets:t.showWallets,chain:this.chain,walletFeatures:t.walletFeatures})}}async initAuthConnectorListeners(e){let t=e.find(({id:e})=>e===mh.AUTH_CONNECTOR_ID);t&&(await this.listenAuthConnector(t),await this.listenModal(t))}async listenAuthConnector(e){if(typeof window<`u`&&e){var t,n;(t=this.appKit)==null||t.setLoading(!0);let i=await e.getProvider(),a=i.getLoginEmailUsed();if((n=this.appKit)==null||n.setLoading(a),a){var r;(r=this.appKit)==null||r.setIsConnected(!1,this.chain)}i.onRpcRequest(e=>{if(he.checkIfRequestExists(e)){if(!he.checkIfRequestIsSafe(e)){var t;(t=this.appKit)==null||t.handleUnsafeRPCRequest()}}else{var n;(n=this.appKit)==null||n.open(),console.error(ye.RPC_METHOD_NOT_ALLOWED_MESSAGE,{method:e.method}),setTimeout(()=>{var e;(e=this.appKit)==null||e.showErrorMessage(ye.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)},300),i.rejectRpcRequests()}}),i.onRpcError(()=>{var e;if((e=this.appKit)!=null&&e.isOpen()){var t;if((t=this.appKit)!=null&&t.isTransactionStackEmpty()){var n;(n=this.appKit)==null||n.close()}else{var r;(r=this.appKit)==null||r.popTransactionStack(!0)}}}),i.onRpcSuccess((e,t)=>{var n;if(!he.checkIfRequestIsSafe(t))if((n=this.appKit)!=null&&n.isTransactionStackEmpty()){var r;(r=this.appKit)==null||r.close()}else{var i;(i=this.appKit)==null||i.popTransactionStack()}}),i.onNotConnected(()=>{var e;if(!((e=this.appKit)!=null&&e.getIsConnectedState())){var t,n;(t=this.appKit)==null||t.setIsConnected(!1,this.chain),(n=this.appKit)==null||n.setLoading(!1)}}),i.onIsConnected(e=>{var t,n,r,i,a;(t=this.appKit)==null||t.setIsConnected(!0,this.chain),(n=this.appKit)==null||n.setSmartAccountDeployed(!!e.smartAccountDeployed,this.chain),(r=this.appKit)==null||r.setPreferredAccountType(e.preferredAccountType,this.chain),(i=this.appKit)==null||i.setLoading(!1),(a=this.appKit)==null||a.setAllAccounts(e.accounts||[{address:e.address,type:e.preferredAccountType||`eoa`}],this.chain)}),i.onGetSmartAccountEnabledNetworks(e=>{var t;(t=this.appKit)==null||t.setSmartAccountEnabledNetworks(e,this.chain)}),i.onSetPreferredAccount(({address:t,type:n})=>{var r;t&&((r=this.appKit)==null||r.setPreferredAccountType(n,this.chain),C(this.wagmiConfig,{connectors:[e]}))})}}async listenModal(e){let t=await e.getProvider();this.subscribeState(e=>{e.open||t.rejectRpcRequests()})}},zD=void 0;function BD(e){e&&(zD=e)}function VD(){if(!zD)throw Error(`Please call "createWeb3Modal" before using "useWeb3Modal" composable`);async function e(e){await(zD==null?void 0:zD.open(e))}async function t(){await(zD==null?void 0:zD.close())}return Sr({open:e,close:t})}var HD=void 0,UD=void 0;function WD(e){return UD=new RD({wagmiConfig:e.wagmiConfig,siweConfig:e.siweConfig,defaultChain:e.defaultChain}),HD=new yh({...e,defaultChain:UD.defaultChain,adapters:[UD],sdkType:`w3m`,sdkVersion:`vue-wagmi-${mh.VERSION}`}),BD(HD),HD}var GD=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}};function KD(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function qD(e,t,n){KD(e,t),t.set(e,n)}function JD(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function Q(e,t,n){return e.set(JD(e,t),n),n}function $(e,t){return e.get(JD(e,t))}var YD,XD,ZD,QD=new(YD=new WeakMap,XD=new WeakMap,ZD=new WeakMap,class extends GD{constructor(){super(),qD(this,YD,void 0),qD(this,XD,void 0),qD(this,ZD,void 0),Q(ZD,this,e=>{if(typeof window<`u`&&window.addEventListener){let t=()=>e();return window.addEventListener(`visibilitychange`,t,!1),()=>{window.removeEventListener(`visibilitychange`,t)}}})}onSubscribe(){$(XD,this)||this.setEventListener($(ZD,this))}onUnsubscribe(){if(!this.hasListeners()){var e;(e=$(XD,this))==null||e.call(this),Q(XD,this,void 0)}}setEventListener(e){var t;Q(ZD,this,e),(t=$(XD,this))==null||t.call(this),Q(XD,this,e(e=>{typeof e==`boolean`?this.setFocused(e):this.onFocus()}))}setFocused(e){$(YD,this)!==e&&(Q(YD,this,e),this.onFocus())}onFocus(){let e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){var e;return typeof $(YD,this)==`boolean`?$(YD,this):((e=globalThis.document)==null?void 0:e.visibilityState)!==`hidden`}}),$D,eO,tO={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},nO=new($D=new WeakMap,eO=new WeakMap,class{constructor(){qD(this,$D,tO),qD(this,eO,!1)}setTimeoutProvider(e){Q($D,this,e)}setTimeout(e,t){return $($D,this).setTimeout(e,t)}clearTimeout(e){$($D,this).clearTimeout(e)}setInterval(e,t){return $($D,this).setInterval(e,t)}clearInterval(e){$($D,this).clearInterval(e)}});function rO(e){setTimeout(e,0)}var iO=typeof window>`u`||`Deno`in globalThis;function aO(){}function oO(e,t){return typeof e==`function`?e(t):e}function sO(e){return typeof e==`number`&&e>=0&&e!==1/0}function cO(e,t){return Math.max(e+(t||0)-Date.now(),0)}function lO(e,t){return typeof e==`function`?e(t):e}function uO(e,t){return typeof e==`function`?e(t):e}function dO(e,t){let{type:n=`all`,exact:r,fetchStatus:i,predicate:a,queryKey:o,stale:s}=e;if(o){if(r){if(t.queryHash!==pO(o,t.options))return!1}else if(!hO(t.queryKey,o))return!1}if(n!==`all`){let e=t.isActive();if(n===`active`&&!e||n===`inactive`&&e)return!1}return!(typeof s==`boolean`&&t.isStale()!==s||i&&i!==t.state.fetchStatus||a&&!a(t))}function fO(e,t){let{exact:n,status:r,predicate:i,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(n){if(mO(t.options.mutationKey)!==mO(a))return!1}else if(!hO(t.options.mutationKey,a))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function pO(e,t){return((t==null?void 0:t.queryKeyHashFn)||mO)(e)}function mO(e){return JSON.stringify(e,(e,t)=>yO(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t)}function hO(e,t){return e===t?!0:typeof e==typeof t&&e&&t&&typeof e==`object`&&typeof t==`object`?Object.keys(t).every(n=>hO(e[n],t[n])):!1}var gO=Object.prototype.hasOwnProperty;function _O(e,t,n=0){if(e===t)return e;if(n>500)return t;let r=vO(e)&&vO(t);if(!r&&!(yO(e)&&yO(t)))return t;let i=(r?e:Object.keys(e)).length,a=r?t:Object.keys(t),o=a.length,s=r?Array(o):{},c=0;for(let l=0;l<o;l++){let o=r?l:a[l],u=e[o],d=t[o];if(u===d){s[o]=u,(r?l<i:gO.call(e,o))&&c++;continue}if(u===null||d===null||typeof u!=`object`||typeof d!=`object`){s[o]=d;continue}let f=_O(u,d,n+1);s[o]=f,f===u&&c++}return i===o&&c===i?e:s}function vO(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function yO(e){if(!bO(e))return!1;let t=e.constructor;if(t===void 0)return!0;let n=t.prototype;return!(!bO(n)||!n.hasOwnProperty(`isPrototypeOf`)||Object.getPrototypeOf(e)!==Object.prototype)}function bO(e){return Object.prototype.toString.call(e)===`[object Object]`}function xO(e){return new Promise(t=>{nO.setTimeout(t,e)})}function SO(e,t,n){return typeof n.structuralSharing==`function`?n.structuralSharing(e,t):n.structuralSharing===!1?t:_O(e,t)}function CO(e,t,n=0){let r=[...e,t];return n&&r.length>n?r.slice(1):r}function wO(e,t,n=0){let r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var TO=Symbol();function EO(e,t){return!e.queryFn&&t!=null&&t.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===TO?()=>Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function DO(e,t,n){let r=!1,i;return Object.defineProperty(e,`signal`,{enumerable:!0,get:()=>(i??(i=t()),r?i:(r=!0,i.aborted?n():i.addEventListener(`abort`,n,{once:!0}),i))}),e}var OO=(()=>{let e=()=>iO;return{isServer(){return e()},setIsServer(t){e=t}}})();function kO(){let e,t,n=new Promise((n,r)=>{e=n,t=r});n.status=`pending`,n.catch(()=>{});function r(e){Object.assign(n,e),delete n.resolve,delete n.reject}return n.resolve=t=>{r({status:`fulfilled`,value:t}),e(t)},n.reject=e=>{r({status:`rejected`,reason:e}),t(e)},n}var AO=rO;function jO(){let e=[],t=0,n=e=>{e()},r=e=>{e()},i=AO,a=r=>{t?e.push(r):i(()=>{n(r)})},o=()=>{let t=e;e=[],t.length&&i(()=>{r(()=>{t.forEach(e=>{n(e)})})})};return{batch:e=>{let n;t++;try{n=e()}finally{t--,t||o()}return n},batchCalls:e=>(...t)=>{a(()=>{e(...t)})},schedule:a,setNotifyFunction:e=>{n=e},setBatchNotifyFunction:e=>{r=e},setScheduler:e=>{i=e}}}var MO=jO(),NO,PO,FO,IO=new(NO=new WeakMap,PO=new WeakMap,FO=new WeakMap,class extends GD{constructor(){super(),qD(this,NO,!0),qD(this,PO,void 0),qD(this,FO,void 0),Q(FO,this,e=>{if(typeof window<`u`&&window.addEventListener){let t=()=>e(!0),n=()=>e(!1);return window.addEventListener(`online`,t,!1),window.addEventListener(`offline`,n,!1),()=>{window.removeEventListener(`online`,t),window.removeEventListener(`offline`,n)}}})}onSubscribe(){$(PO,this)||this.setEventListener($(FO,this))}onUnsubscribe(){if(!this.hasListeners()){var e;(e=$(PO,this))==null||e.call(this),Q(PO,this,void 0)}}setEventListener(e){var t;Q(FO,this,e),(t=$(PO,this))==null||t.call(this),Q(PO,this,e(this.setOnline.bind(this)))}setOnline(e){$(NO,this)!==e&&(Q(NO,this,e),this.listeners.forEach(t=>{t(e)}))}isOnline(){return $(NO,this)}});function LO(e){return Math.min(1e3*2**e,3e4)}function RO(e){return(e??`online`)===`online`?IO.isOnline():!0}var zO=class extends Error{constructor(e){super(`CancelledError`),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function BO(e){let t=!1,n=0,r,i=kO(),a=()=>i.status!==`pending`,o=t=>{if(!a()){var n;let r=new zO(t);f(r),(n=e.onCancel)==null||n.call(e,r)}},s=()=>{t=!0},c=()=>{t=!1},l=()=>QD.isFocused()&&(e.networkMode===`always`||IO.isOnline())&&e.canRun(),u=()=>RO(e.networkMode)&&e.canRun(),d=e=>{a()||(r==null||r(),i.resolve(e))},f=e=>{a()||(r==null||r(),i.reject(e))},p=()=>new Promise(t=>{var n;r=e=>{(a()||l())&&t(e)},(n=e.onPause)==null||n.call(e)}).then(()=>{if(r=void 0,!a()){var t;(t=e.onContinue)==null||t.call(e)}}),m=()=>{if(a())return;let r,i=n===0?e.initialPromise:void 0;try{r=i??e.fn()}catch(e){r=Promise.reject(e)}Promise.resolve(r).then(d).catch(r=>{var i;if(a())return;let o=e.retry??(OO.isServer()?0:3),s=e.retryDelay??LO,c=typeof s==`function`?s(n,r):s,u=o===!0||typeof o==`number`&&n<o||typeof o==`function`&&o(n,r);if(t||!u){f(r);return}n++,(i=e.onFail)==null||i.call(e,n,r),xO(c).then(()=>l()?void 0:p()).then(()=>{t?f(r):m()})})};return{promise:i,status:()=>i.status,cancel:o,continue:()=>(r==null||r(),i),cancelRetry:s,continueRetry:c,canStart:u,start:()=>(u()?m():p().then(m),i)}}var VO,HO=(VO=new WeakMap,class{constructor(){qD(this,VO,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),sO(this.gcTime)&&Q(VO,this,nO.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(OO.isServer()?1/0:300*1e3))}clearGcTimeout(){$(VO,this)&&(nO.clearTimeout($(VO,this)),Q(VO,this,void 0))}});function UO(e,t){KD(e,t),t.add(e)}var WO,GO,KO,qO,JO,YO,XO,ZO,QO=(WO=new WeakMap,GO=new WeakMap,KO=new WeakMap,qO=new WeakMap,JO=new WeakMap,YO=new WeakMap,XO=new WeakMap,ZO=new WeakSet,class extends HO{constructor(e){super(),UO(this,ZO),qD(this,WO,void 0),qD(this,GO,void 0),qD(this,KO,void 0),qD(this,qO,void 0),qD(this,JO,void 0),qD(this,YO,void 0),qD(this,XO,void 0),Q(XO,this,!1),Q(YO,this,e.defaultOptions),this.setOptions(e.options),this.observers=[],Q(qO,this,e.client),Q(KO,this,$(qO,this).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,Q(WO,this,rk(this.options)),this.state=e.state??$(WO,this),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=$(JO,this))==null?void 0:e.promise}setOptions(e){if(this.options={...$(YO,this),...e},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){let e=rk(this.options);e.data!==void 0&&(this.setState(nk(e.data,e.dataUpdatedAt)),Q(WO,this,e))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus===`idle`&&$(KO,this).remove(this)}setData(e,t){let n=SO(this.state.data,e,this.options);return JD(ZO,this,ek).call(this,{data:n,type:`success`,dataUpdatedAt:t==null?void 0:t.updatedAt,manual:t==null?void 0:t.manual}),n}setState(e,t){JD(ZO,this,ek).call(this,{type:`setState`,state:e,setStateOptions:t})}cancel(e){var t,n;let r=(t=$(JO,this))==null?void 0:t.promise;return(n=$(JO,this))==null||n.cancel(e),r?r.then(aO).catch(aO):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return $(WO,this)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>uO(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===TO||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>lO(e.options.staleTime,this)===`static`):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e===`static`?!1:this.state.isInvalidated?!0:!cO(this.state.dataUpdatedAt,e)}onFocus(){var e;let t=this.observers.find(e=>e.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(e=$(JO,this))==null||e.continue()}onOnline(){var e;let t=this.observers.find(e=>e.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(e=$(JO,this))==null||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),$(KO,this).notify({type:`observerAdded`,query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||($(JO,this)&&($(XO,this)||JD(ZO,this,$O).call(this)?$(JO,this).cancel({revert:!0}):$(JO,this).cancelRetry()),this.scheduleGc()),$(KO,this).notify({type:`observerRemoved`,query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||JD(ZO,this,ek).call(this,{type:`invalidate`})}async fetch(e,t){var n,r,i;if(this.state.fetchStatus!==`idle`&&((n=$(JO,this))==null?void 0:n.status())!==`rejected`){if(this.state.data!==void 0&&t!=null&&t.cancelRefetch)this.cancel({silent:!0});else if($(JO,this))return $(JO,this).continueRetry(),$(JO,this).promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let a=new AbortController,o=e=>{Object.defineProperty(e,`signal`,{enumerable:!0,get:()=>(Q(XO,this,!0),a.signal)})},s=()=>{let e=EO(this.options,t),n=(()=>{let e={client:$(qO,this),queryKey:this.queryKey,meta:this.meta};return o(e),e})();return Q(XO,this,!1),this.options.persister?this.options.persister(e,n,this):e(n)},c=(()=>{let e={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:$(qO,this),state:this.state,fetchFn:s};return o(e),e})();if((r=this.options.behavior)==null||r.onFetch(c,this),Q(GO,this,this.state),this.state.fetchStatus===`idle`||this.state.fetchMeta!==((i=c.fetchOptions)==null?void 0:i.meta)){var l;JD(ZO,this,ek).call(this,{type:`fetch`,meta:(l=c.fetchOptions)==null?void 0:l.meta})}Q(JO,this,BO({initialPromise:t==null?void 0:t.initialPromise,fn:c.fetchFn,onCancel:e=>{e instanceof zO&&e.revert&&this.setState({...$(GO,this),fetchStatus:`idle`}),a.abort()},onFail:(e,t)=>{JD(ZO,this,ek).call(this,{type:`failed`,failureCount:e,error:t})},onPause:()=>{JD(ZO,this,ek).call(this,{type:`pause`})},onContinue:()=>{JD(ZO,this,ek).call(this,{type:`continue`})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode,canRun:()=>!0}));try{var u,d,f,p;let e=await $(JO,this).start();if(e===void 0)throw Error(`${this.queryHash} data is undefined`);return this.setData(e),(u=(d=$(KO,this).config).onSuccess)==null||u.call(d,e,this),(f=(p=$(KO,this).config).onSettled)==null||f.call(p,e,this.state.error,this),e}catch(e){var m,h,g,_;if(e instanceof zO){if(e.silent)return $(JO,this).promise;if(e.revert){if(this.state.data===void 0)throw e;return this.state.data}}throw JD(ZO,this,ek).call(this,{type:`error`,error:e}),(m=(h=$(KO,this).config).onError)==null||m.call(h,e,this),(g=(_=$(KO,this).config).onSettled)==null||g.call(_,this.state.data,e,this),e}finally{this.scheduleGc()}}});function $O(){return this.state.fetchStatus===`paused`&&this.state.status===`pending`}function ek(e){this.state=(t=>{switch(e.type){case`failed`:return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case`pause`:return{...t,fetchStatus:`paused`};case`continue`:return{...t,fetchStatus:`fetching`};case`fetch`:return{...t,...tk(t.data,this.options),fetchMeta:e.meta??null};case`success`:let n={...t,...nk(e.data,e.dataUpdatedAt),dataUpdateCount:t.dataUpdateCount+1,...!e.manual&&{fetchStatus:`idle`,fetchFailureCount:0,fetchFailureReason:null}};return Q(GO,this,e.manual?n:void 0),n;case`error`:let r=e.error;return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:`idle`,status:`error`,isInvalidated:!0};case`invalidate`:return{...t,isInvalidated:!0};case`setState`:return{...t,...e.state}}})(this.state),MO.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate()}),$(KO,this).notify({query:this,type:`updated`,action:e})})}function tk(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:RO(t.networkMode)?`fetching`:`paused`,...e===void 0&&{error:null,status:`pending`}}}function nk(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:`success`}}function rk(e){let t=typeof e.initialData==`function`?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt==`function`?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?`success`:`pending`,fetchStatus:`idle`}}function ik(e){return{onFetch:(t,n)=>{var r,i,a;let o=t.options,s=(r=t.fetchOptions)==null||(r=r.meta)==null||(r=r.fetchMore)==null?void 0:r.direction,c=((i=t.state.data)==null?void 0:i.pages)||[],l=((a=t.state.data)==null?void 0:a.pageParams)||[],u={pages:[],pageParams:[]},d=0,f=async()=>{let n=!1,r=e=>{DO(e,()=>t.signal,()=>n=!0)},i=EO(t.options,t.fetchOptions),a=async(e,a,o)=>{if(n)return Promise.reject();if(a==null&&e.pages.length)return Promise.resolve(e);let s=await i((()=>{let e={client:t.client,queryKey:t.queryKey,pageParam:a,direction:o?`backward`:`forward`,meta:t.options.meta};return r(e),e})()),{maxPages:c}=t.options,l=o?wO:CO;return{pages:l(e.pages,s,c),pageParams:l(e.pageParams,a,c)}};if(s&&c.length){let e=s===`backward`,t=e?ok:ak,n={pages:c,pageParams:l};u=await a(n,t(o,n),e)}else{let t=e??c.length;do{let e=d===0?l[0]??o.initialPageParam:ak(o,u);if(d>0&&e==null)break;u=await a(u,e),d++}while(d<t)}return u};t.options.persister?t.fetchFn=()=>{var e,r;return(e=(r=t.options).persister)==null?void 0:e.call(r,f,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=f}}}function ak(e,{pages:t,pageParams:n}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function ok(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var sk,ck,lk,uk,dk,fk=(sk=new WeakMap,ck=new WeakMap,lk=new WeakMap,uk=new WeakMap,dk=new WeakSet,class extends HO{constructor(e){super(),UO(this,dk),qD(this,sk,void 0),qD(this,ck,void 0),qD(this,lk,void 0),qD(this,uk,void 0),Q(sk,this,e.client),this.mutationId=e.mutationId,Q(lk,this,e.mutationCache),Q(ck,this,[]),this.state=e.state||mk(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){$(ck,this).includes(e)||($(ck,this).push(e),this.clearGcTimeout(),$(lk,this).notify({type:`observerAdded`,mutation:this,observer:e}))}removeObserver(e){Q(ck,this,$(ck,this).filter(t=>t!==e)),this.scheduleGc(),$(lk,this).notify({type:`observerRemoved`,mutation:this,observer:e})}optionalRemove(){$(ck,this).length||(this.state.status===`pending`?this.scheduleGc():$(lk,this).remove(this))}continue(){var e;return((e=$(uk,this))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){let t=()=>{JD(dk,this,pk).call(this,{type:`continue`})},n={client:$(sk,this),meta:this.options.meta,mutationKey:this.options.mutationKey};Q(uk,this,BO({fn:()=>this.options.mutationFn?this.options.mutationFn(e,n):Promise.reject(Error(`No mutationFn found`)),onFail:(e,t)=>{JD(dk,this,pk).call(this,{type:`failed`,failureCount:e,error:t})},onPause:()=>{JD(dk,this,pk).call(this,{type:`pause`})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>$(lk,this).canRun(this)}));let r=this.state.status===`pending`,i=!$(uk,this).canStart();try{var a,o,s,c,l,u,d,f;if(r)t();else{var p,m;JD(dk,this,pk).call(this,{type:`pending`,variables:e,isPaused:i}),$(lk,this).config.onMutate&&await $(lk,this).config.onMutate(e,this,n);let t=await((p=(m=this.options).onMutate)==null?void 0:p.call(m,e,n));t!==this.state.context&&JD(dk,this,pk).call(this,{type:`pending`,context:t,variables:e,isPaused:i})}let h=await $(uk,this).start();return await((a=(o=$(lk,this).config).onSuccess)==null?void 0:a.call(o,h,e,this.state.context,this,n)),await((s=(c=this.options).onSuccess)==null?void 0:s.call(c,h,e,this.state.context,n)),await((l=(u=$(lk,this).config).onSettled)==null?void 0:l.call(u,h,null,this.state.variables,this.state.context,this,n)),await((d=(f=this.options).onSettled)==null?void 0:d.call(f,h,null,e,this.state.context,n)),JD(dk,this,pk).call(this,{type:`success`,data:h}),h}catch(t){try{var h,g;await((h=(g=$(lk,this).config).onError)==null?void 0:h.call(g,t,e,this.state.context,this,n))}catch(e){Promise.reject(e)}try{var _,v;await((_=(v=this.options).onError)==null?void 0:_.call(v,t,e,this.state.context,n))}catch(e){Promise.reject(e)}try{var y,b;await((y=(b=$(lk,this).config).onSettled)==null?void 0:y.call(b,void 0,t,this.state.variables,this.state.context,this,n))}catch(e){Promise.reject(e)}try{var x,ee;await((x=(ee=this.options).onSettled)==null?void 0:x.call(ee,void 0,t,e,this.state.context,n))}catch(e){Promise.reject(e)}throw JD(dk,this,pk).call(this,{type:`error`,error:t}),t}finally{$(lk,this).runNext(this)}}});function pk(e){this.state=(t=>{switch(e.type){case`failed`:return{...t,failureCount:e.failureCount,failureReason:e.error};case`pause`:return{...t,isPaused:!0};case`continue`:return{...t,isPaused:!1};case`pending`:return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:`pending`,variables:e.variables,submittedAt:Date.now()};case`success`:return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:`success`,isPaused:!1};case`error`:return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:`error`}}})(this.state),MO.batch(()=>{$(ck,this).forEach(t=>{t.onMutationUpdate(e)}),$(lk,this).notify({mutation:this,type:`updated`,action:e})})}function mk(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:`idle`,variables:void 0,submittedAt:0}}var hk,gk,_k,vk=(hk=new WeakMap,gk=new WeakMap,_k=new WeakMap,class extends GD{constructor(e={}){super(),qD(this,hk,void 0),qD(this,gk,void 0),qD(this,_k,void 0),this.config=e,Q(hk,this,new Set),Q(gk,this,new Map),Q(_k,this,0)}build(e,t,n){var r;let i=new fk({client:e,mutationCache:this,mutationId:Q(_k,this,(r=$(_k,this),++r)),options:e.defaultMutationOptions(t),state:n});return this.add(i),i}add(e){$(hk,this).add(e);let t=yk(e);if(typeof t==`string`){let n=$(gk,this).get(t);n?n.push(e):$(gk,this).set(t,[e])}this.notify({type:`added`,mutation:e})}remove(e){if($(hk,this).delete(e)){let t=yk(e);if(typeof t==`string`){let n=$(gk,this).get(t);if(n)if(n.length>1){let t=n.indexOf(e);t!==-1&&n.splice(t,1)}else n[0]===e&&$(gk,this).delete(t)}}this.notify({type:`removed`,mutation:e})}canRun(e){let t=yk(e);if(typeof t==`string`){let n=$(gk,this).get(t),r=n==null?void 0:n.find(e=>e.state.status===`pending`);return!r||r===e}else return!0}runNext(e){let t=yk(e);if(typeof t==`string`){var n;let r=(n=$(gk,this).get(t))==null?void 0:n.find(t=>t!==e&&t.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){MO.batch(()=>{$(hk,this).forEach(e=>{this.notify({type:`removed`,mutation:e})}),$(hk,this).clear(),$(gk,this).clear()})}getAll(){return Array.from($(hk,this))}find(e){let t={exact:!0,...e};return this.getAll().find(e=>fO(t,e))}findAll(e={}){return this.getAll().filter(t=>fO(e,t))}notify(e){MO.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return MO.batch(()=>Promise.all(e.map(e=>e.continue().catch(aO))))}});function yk(e){var t;return(t=e.options.scope)==null?void 0:t.id}var bk,xk=(bk=new WeakMap,class extends GD{constructor(e={}){super(),qD(this,bk,void 0),this.config=e,Q(bk,this,new Map)}build(e,t,n){let r=t.queryKey,i=t.queryHash??pO(r,t),a=this.get(i);return a||(a=new QO({client:e,queryKey:r,queryHash:i,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(a)),a}add(e){$(bk,this).has(e.queryHash)||($(bk,this).set(e.queryHash,e),this.notify({type:`added`,query:e}))}remove(e){let t=$(bk,this).get(e.queryHash);t&&(e.destroy(),t===e&&$(bk,this).delete(e.queryHash),this.notify({type:`removed`,query:e}))}clear(){MO.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return $(bk,this).get(e)}getAll(){return[...$(bk,this).values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>dO(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>dO(e,t)):t}notify(e){MO.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){MO.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){MO.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}}),Sk,Ck,wk,Tk,Ek,Dk,Ok,kk,Ak=(Sk=new WeakMap,Ck=new WeakMap,wk=new WeakMap,Tk=new WeakMap,Ek=new WeakMap,Dk=new WeakMap,Ok=new WeakMap,kk=new WeakMap,class{constructor(e={}){qD(this,Sk,void 0),qD(this,Ck,void 0),qD(this,wk,void 0),qD(this,Tk,void 0),qD(this,Ek,void 0),qD(this,Dk,void 0),qD(this,Ok,void 0),qD(this,kk,void 0),Q(Sk,this,e.queryCache||new xk),Q(Ck,this,e.mutationCache||new vk),Q(wk,this,e.defaultOptions||{}),Q(Tk,this,new Map),Q(Ek,this,new Map),Q(Dk,this,0)}mount(){var e;Q(Dk,this,(e=$(Dk,this),e++,e)),$(Dk,this)===1&&(Q(Ok,this,QD.subscribe(async e=>{e&&(await this.resumePausedMutations(),$(Sk,this).onFocus())})),Q(kk,this,IO.subscribe(async e=>{e&&(await this.resumePausedMutations(),$(Sk,this).onOnline())})))}unmount(){var e,t,n;Q(Dk,this,(e=$(Dk,this),e--,e)),$(Dk,this)===0&&((t=$(Ok,this))==null||t.call(this),Q(Ok,this,void 0),(n=$(kk,this))==null||n.call(this),Q(kk,this,void 0))}isFetching(e){return $(Sk,this).findAll({...e,fetchStatus:`fetching`}).length}isMutating(e){return $(Ck,this).findAll({...e,status:`pending`}).length}getQueryData(e){var t;let n=this.defaultQueryOptions({queryKey:e});return(t=$(Sk,this).get(n.queryHash))==null?void 0:t.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),n=$(Sk,this).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(lO(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return $(Sk,this).findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,n){let r=this.defaultQueryOptions({queryKey:e}),i=$(Sk,this).get(r.queryHash),a=oO(t,i==null?void 0:i.state.data);if(a!==void 0)return $(Sk,this).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return MO.batch(()=>$(Sk,this).findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,n)]))}getQueryState(e){var t;let n=this.defaultQueryOptions({queryKey:e});return(t=$(Sk,this).get(n.queryHash))==null?void 0:t.state}removeQueries(e){let t=$(Sk,this);MO.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=$(Sk,this);return MO.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:`active`,...e},t)))}cancelQueries(e,t={}){let n={revert:!0,...t},r=MO.batch(()=>$(Sk,this).findAll(e).map(e=>e.cancel(n)));return Promise.all(r).then(aO).catch(aO)}invalidateQueries(e,t={}){return MO.batch(()=>($(Sk,this).findAll(e).forEach(e=>{e.invalidate()}),(e==null?void 0:e.refetchType)===`none`?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??`active`},t)))}refetchQueries(e,t={}){let n={...t,cancelRefetch:t.cancelRefetch??!0},r=MO.batch(()=>$(Sk,this).findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(aO)),e.state.fetchStatus===`paused`?Promise.resolve():t}));return Promise.all(r).then(aO)}fetchQuery(e){let t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);let n=$(Sk,this).build(this,t);return n.isStaleByTime(lO(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(aO).catch(aO)}fetchInfiniteQuery(e){return e.behavior=ik(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(aO).catch(aO)}ensureInfiniteQueryData(e){return e.behavior=ik(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return IO.isOnline()?$(Ck,this).resumePausedMutations():Promise.resolve()}getQueryCache(){return $(Sk,this)}getMutationCache(){return $(Ck,this)}getDefaultOptions(){return $(wk,this)}setDefaultOptions(e){Q(wk,this,e)}setQueryDefaults(e,t){$(Tk,this).set(mO(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...$(Tk,this).values()],n={};return t.forEach(t=>{hO(e,t.queryKey)&&Object.assign(n,t.defaultOptions)}),n}setMutationDefaults(e,t){$(Ek,this).set(mO(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...$(Ek,this).values()],n={};return t.forEach(t=>{hO(e,t.mutationKey)&&Object.assign(n,t.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...$(wk,this).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=pO(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!==`always`),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode=`offlineFirst`),t.queryFn===TO&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...$(wk,this).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){$(Sk,this).clear(),$(Ck,this).clear()}});function jk(e,t,n=``,r=0){if(t){let i=t(e,n,r);if(i===void 0&&Fr(e)||i!==void 0)return i}if(Array.isArray(e))return e.map((e,n)=>jk(e,t,String(n),r+1));if(typeof e==`object`&&Pk(e)){let n=Object.entries(e).map(([e,n])=>[e,jk(n,t,e,r+1)]);return Object.fromEntries(n)}return e}function Mk(e,t){return jk(e,t)}function Nk(e,t=!1){return Mk(e,(e,n,r)=>{if(r===1&&n===`queryKey`)return Nk(e,!0);if(t&&Fk(e))return Nk(e(),t);if(Fr(e))return Nk(Vr(e),t)})}function Pk(e){if(Object.prototype.toString.call(e)!==`[object Object]`)return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function Fk(e){return typeof e==`function`}var Ik=class extends xk{find(e){return super.find(Nk(e))}findAll(e={}){return super.findAll(Nk(e))}},Lk=class extends vk{find(e){return super.find(Nk(e))}findAll(e={}){return super.findAll(Nk(e))}},Rk=class extends Ak{constructor(e={}){let t={defaultOptions:e.defaultOptions,queryCache:e.queryCache||new Ik,mutationCache:e.mutationCache||new Lk};super(t),this.isRestoring=Ir(!1)}isFetching(e={}){return super.isFetching(Nk(e))}isMutating(e={}){return super.isMutating(Nk(e))}getQueryData(e){return super.getQueryData(Nk(e))}ensureQueryData(e){return super.ensureQueryData(Nk(e))}getQueriesData(e){return super.getQueriesData(Nk(e))}setQueryData(e,t,n={}){return super.setQueryData(Nk(e),t,Nk(n))}setQueriesData(e,t,n={}){return super.setQueriesData(Nk(e),t,Nk(n))}getQueryState(e){return super.getQueryState(Nk(e))}removeQueries(e={}){return super.removeQueries(Nk(e))}resetQueries(e={},t={}){return super.resetQueries(Nk(e),Nk(t))}cancelQueries(e={},t={}){return super.cancelQueries(Nk(e),Nk(t))}invalidateQueries(e={},t={}){let n=Nk(e),r=Nk(t);if(super.invalidateQueries({...n,refetchType:`none`},r),n.refetchType===`none`)return Promise.resolve();let i={...n,type:n.refetchType??n.type??`active`};return Ei().then(()=>super.refetchQueries(i,r))}refetchQueries(e={},t={}){return super.refetchQueries(Nk(e),Nk(t))}fetchQuery(e){return super.fetchQuery(Nk(e))}prefetchQuery(e){return super.prefetchQuery(Nk(e))}fetchInfiniteQuery(e){return super.fetchInfiniteQuery(Nk(e))}prefetchInfiniteQuery(e){return super.prefetchInfiniteQuery(Nk(e))}setDefaultOptions(e){super.setDefaultOptions(Nk(e))}setQueryDefaults(e,t){super.setQueryDefaults(Nk(e),Nk(t))}getQueryDefaults(e){return super.getQueryDefaults(Nk(e))}setMutationDefaults(e,t){super.setMutationDefaults(Nk(e),Nk(t))}getMutationDefaults(e){return super.getMutationDefaults(Nk(e))}},zk=uf({name:`QAvatar`,props:{...mp,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){let n=hp(e),r=Z(()=>`q-avatar`+(e.color?` bg-${e.color}`:``)+(e.textColor?` text-${e.textColor} q-chip--colored`:``)+(e.square===!0?` q-avatar--square`:e.rounded===!0?` rounded-borders`:``)),i=Z(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{let a=e.icon===void 0?void 0:[Ml(Ap,{name:e.icon})];return Ml(`div`,{class:r.value,style:n.value},[Ml(`div`,{class:`q-avatar__content row flex-center overflow-hidden`,style:i.value},lp(t.default,a))])}}}),Bk=0,Vk={},Hk={},Uk={},Wk={},Gk=/^\s*$/,Kk=[],qk=[void 0,null,!0,!1,``],Jk=[`top-left`,`top-right`,`bottom-left`,`bottom-right`,`top`,`bottom`,`left`,`right`,`center`],Yk=[`top-left`,`top-right`,`bottom-left`,`bottom-right`],Xk={positive:{icon:e=>e.iconSet.type.positive,color:`positive`},negative:{icon:e=>e.iconSet.type.negative,color:`negative`},warning:{icon:e=>e.iconSet.type.warning,color:`warning`,textColor:`dark`},info:{icon:e=>e.iconSet.type.info,color:`info`},ongoing:{group:!1,timeout:0,spinner:!0,color:`grey-8`}};function Zk(e,t,n){var r;if(!e)return eA(`parameter required`);let i,a={textColor:`white`};if(e.ignoreDefaults!==!0&&Object.assign(a,Vk),ep(e)===!1&&(a.type&&Object.assign(a,Xk[a.type]),e={message:e}),Object.assign(a,Xk[e.type||a.type],e),typeof a.icon==`function`&&(a.icon=a.icon(t)),a.spinner?(a.spinner===!0&&(a.spinner=Vp),a.spinner=Mr(a.spinner)):a.spinner=!1,a.meta={hasMedia:!!(a.spinner!==!1||a.icon||a.avatar),hasText:$k(a.message)||$k(a.caption)},a.position){if(Jk.includes(a.position)===!1)return eA(`wrong position`,e)}else a.position=`bottom`;if(qk.includes(a.timeout)===!0)a.timeout=5e3;else{let t=Number(a.timeout);if(isNaN(t)||t<0)return eA(`wrong timeout`,e);a.timeout=Number.isFinite(t)?t:0}a.timeout===0?a.progress=!1:a.progress===!0&&(a.meta.progressClass=`q-notification__progress`+(a.progressClass?` ${a.progressClass}`:``),a.meta.progressStyle={animationDuration:`${a.timeout+1e3}ms`});let o=(Array.isArray(e.actions)===!0?e.actions:[]).concat(e.ignoreDefaults!==!0&&Array.isArray(Vk.actions)===!0?Vk.actions:[]).concat(Array.isArray((r=Xk[e.type])==null?void 0:r.actions)===!0?Xk[e.type].actions:[]),{closeBtn:s}=a;if(s&&o.push({label:typeof s==`string`?s:t.lang.label.close}),a.actions=o.map(({handler:e,noDismiss:t,...n})=>({flat:!0,...n,onClick:typeof e==`function`?()=>{e(),t!==!0&&c()}:()=>{c()}})),a.multiLine===void 0&&(a.multiLine=a.actions.length>1),Object.assign(a.meta,{class:`q-notification row items-stretch q-notification--${a.multiLine===!0?`multi-line`:`standard`}`+(a.color===void 0?``:` bg-${a.color}`)+(a.textColor===void 0?``:` text-${a.textColor}`)+(a.classes===void 0?``:` ${a.classes}`),wrapperClass:`q-notification__wrapper col relative-position border-radius-inherit `+(a.multiLine===!0?`column no-wrap justify-center`:`row items-center`),contentClass:`q-notification__content row items-center`+(a.multiLine===!0?``:` col`),leftClass:a.meta.hasText===!0?`additional`:`single`,attrs:{role:`alert`,...a.attrs}}),a.group===!1?(a.group=void 0,a.meta.group=void 0):((a.group===void 0||a.group===!0)&&(a.group=[a.message,a.caption,a.multiline].concat(a.actions.map(e=>`${e.label}*${e.icon}`)).join(`|`)),a.meta.group=a.group+`|`+a.position),a.actions.length===0?a.actions=void 0:a.meta.actionsClass=`q-notification__actions row items-center `+(a.multiLine===!0?`justify-end`:`col-auto`)+(a.meta.hasMedia===!0?` q-notification__actions--with-media`:``),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),a.meta.uid=n.notif.meta.uid;let e=Uk[a.position].value.indexOf(n.notif);Uk[a.position].value[e]=a}else{let t=Hk[a.meta.group];if(t===void 0){if(a.meta.uid=Bk++,a.meta.badge=1,[`left`,`right`,`center`].indexOf(a.position)!==-1)Uk[a.position].value.splice(Math.floor(Uk[a.position].value.length/2),0,a);else{let e=a.position.indexOf(`top`)===-1?`push`:`unshift`;Uk[a.position].value[e](a)}a.group!==void 0&&(Hk[a.meta.group]=a)}else{if(t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0),a.badgePosition!==void 0){if(Yk.includes(a.badgePosition)===!1)return eA(`wrong badgePosition`,e)}else a.badgePosition=`top-${a.position.indexOf(`left`)===-1?`left`:`right`}`;a.meta.uid=t.meta.uid,a.meta.badge=t.meta.badge+1,a.meta.badgeClass=`q-notification__badge q-notification__badge--${a.badgePosition}`+(a.badgeColor===void 0?``:` bg-${a.badgeColor}`)+(a.badgeTextColor===void 0?``:` text-${a.badgeTextColor}`)+(a.badgeClass?` ${a.badgeClass}`:``);let n=Uk[a.position].value.indexOf(t);Uk[a.position].value[n]=Hk[a.meta.group]=a}}let c=()=>{Qk(a),i=void 0};if(a.timeout>0&&(a.meta.timer=setTimeout(()=>{a.meta.timer=void 0,c()},a.timeout+1e3)),a.group!==void 0)return t=>{t===void 0?c():eA(`trying to update a grouped one which is forbidden`,e)};if(i={dismiss:c,config:e,notif:a},n!==void 0){Object.assign(n,i);return}return e=>{i!==void 0&&(e===void 0?i.dismiss():Zk(Object.assign({},i.config,e,{group:!1,position:a.position}),t,i))}}function Qk(e){e.meta.timer&&(clearTimeout(e.meta.timer),e.meta.timer=void 0);let t=Uk[e.position].value.indexOf(e);if(t!==-1){e.group!==void 0&&delete Hk[e.meta.group];let n=Kk[String(e.meta.uid)];if(n){let{width:e,height:t}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=e,n.style.height=t}Uk[e.position].value.splice(t,1),typeof e.onDismiss==`function`&&e.onDismiss()}}function $k(e){return e!=null&&Gk.test(e)!==!0}function eA(e,t){return console.error(`Notify: ${e}`,t),!1}function tA(){return uf({name:`QNotifications`,devtools:{hide:!0},setup(){return()=>Ml(`div`,{class:`q-notifications`},Jk.map(e=>Ml(ld,{key:e,class:Wk[e],tag:`div`,name:`q-notification--${e}`},()=>Uk[e].value.map(e=>{let t=e.meta,n=[];if(t.hasMedia===!0&&(e.spinner===!1?e.icon?n.push(Ml(Ap,{class:`q-notification__icon q-notification__icon--`+t.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:`img`})):e.avatar&&n.push(Ml(zk,{class:`q-notification__avatar q-notification__avatar--`+t.leftClass},()=>Ml(`img`,{src:e.avatar,"aria-hidden":`true`}))):n.push(Ml(e.spinner,{class:`q-notification__spinner q-notification__spinner--`+t.leftClass,color:e.spinnerColor,size:e.spinnerSize}))),t.hasText===!0){let t,r={class:`q-notification__message col`};if(e.html===!0)r.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{let n=[e.message];t=e.caption?[Ml(`div`,n),Ml(`div`,{class:`q-notification__caption`},[e.caption])]:n}n.push(Ml(`div`,r,t))}let r=[Ml(`div`,{class:t.contentClass},n)];return e.progress===!0&&r.push(Ml(`div`,{key:`${t.uid}|p|${t.badge}`,class:t.progressClass,style:t.progressStyle})),e.actions!==void 0&&r.push(Ml(`div`,{class:t.actionsClass},e.actions.map(e=>Ml(_m,e)))),t.badge>1&&r.push(Ml(`div`,{key:`${t.uid}|${t.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[t.badge])),Ml(`div`,{ref:e=>{Kk[String(t.uid)]=e},key:t.uid,class:t.class,...t.attrs},[Ml(`div`,{class:t.wrapperClass},r)])}))))}})}var nA={setDefaults(e){ep(e)===!0&&Object.assign(Vk,e)},registerType(e,t){ep(t)===!0&&(Xk[e]=t)},install({$q:e,parentApp:t}){if(e.notify=this.create=t=>Zk(t,e),e.notify.setDefaults=this.setDefaults,e.notify.registerType=this.registerType,e.config.notify!==void 0&&this.setDefaults(e.config.notify),this.__installed!==!0){Jk.forEach(e=>{Uk[e]=Ir([]);let t=[`left`,`center`,`right`].includes(e)===!0?`center`:e.indexOf(`top`)===-1?`bottom`:`top`,n=e.indexOf(`left`)===-1?e.indexOf(`right`)===-1?`center`:`end`:`start`;Wk[e]=`q-notifications__list q-notifications__list--${t} fixed column no-wrap ${[`left`,`right`].includes(e)?`items-${e===`left`?`start`:`end`} justify-center`:e===`center`?`flex-center`:`items-${n}`}`});let e=Lp(`q-notify`);np(tA(),t).mount(e)}}},rA=8453,iA={chainId:rA,name:`Base`,nativeCurrency:{name:`Ether`,symbol:`ETH`,decimals:18},rpcUrls:{default:{http:[`https://mainnet.base.org`]},public:{http:[`https://mainnet.base.org`]}},blockExplorers:{default:{name:`BaseScan`,url:`https://basescan.org`}}},aA=E({chains:[fh],transports:{[fh.id]:p(`https://mainnet.base.org`)},ssr:!1});console.log(`[useWalletConnect] wagmiConfig инициализирован:`,aA),console.log(`[useWalletConnect] wagmiConfig.chains:`,aA.chains);var oA=new Rk,sA,cA=!1,lA=()=>{if(cA)return sA;if(typeof window>`u`)return console.warn(`[Web3Modal] Пропуск инициализации: не клиентское окружение`),sA={open:()=>{throw console.error(`[Web3Modal] Невозможно открыть модальное окно - Web3Modal не инициализирован (SSR)`),Error(`Web3Modal не инициализирован. Проверьте консоль для деталей.`)},close:()=>{console.warn(`[Web3Modal] Web3Modal не инициализирован (SSR)`)}},sA;try{let e=`75516222060340cc5254fcc6072d35f1`;e===`YOUR_PROJECT_ID`&&(console.error(`[Web3Modal] Ошибка: Project ID не задан или некорректен`),console.error(`[Web3Modal] Пожалуйста, установите VITE_WALLETCONNECT_PROJECT_ID в файле .env`)),console.log(`[Web3Modal] Инициализация с Project ID:`,e),sA=WD({wagmiConfig:aA,projectId:e,enableAnalytics:!1,themeMode:`light`,defaultChain:fh,themeVariables:{"--w3m-color-mix":`#00DCFF`,"--w3m-color-mix-strength":40}}),cA=!0,console.log(`[Web3Modal] Инициализация успешна`)}catch(e){console.error(`[Web3Modal] Ошибка при инициализации:`,e),console.error(`[Web3Modal] Stack trace:`,e.stack),sA={open:()=>{throw console.error(`[Web3Modal] Невозможно открыть модальное окно - Web3Modal не инициализирован`),Error(`Web3Modal не инициализирован. Проверьте консоль для деталей.`)},close:()=>{console.warn(`[Web3Modal] Web3Modal не инициализирован`)}}}return sA},uA=()=>cA?sA:lA(),dA=console.error;console.error=function(...e){try{let t=th(e);t.includes(`getChainId`)&&t.includes(`not a function`)&&(console.error(`[GLOBAL ERROR HANDLER] Обнаружена ошибка "getChainId is not a function":`,e),console.error(`[GLOBAL ERROR HANDLER] Stack trace:`,Error().stack))}catch{}dA.apply(console,e)},window.addEventListener(`error`,e=>{if(e.message&&e.message.includes(`getChainId`)&&e.message.includes(`not a function`)){var t;console.error(`[GLOBAL WINDOW ERROR] Обнаружена ошибка "getChainId is not a function":`,e),console.error(`[GLOBAL WINDOW ERROR] Stack trace:`,((t=e.error)==null?void 0:t.stack)||Error().stack)}}),window.addEventListener(`unhandledrejection`,e=>{if(e.reason&&e.reason.message&&e.reason.message.includes(`getChainId`)&&e.reason.message.includes(`not a function`)){var t;console.error(`[GLOBAL UNHANDLED REJECTION] Обнаружена ошибка "getChainId is not a function":`,e.reason),console.error(`[GLOBAL UNHANDLED REJECTION] Stack trace:`,((t=e.reason)==null?void 0:t.stack)||Error().stack)}});var fA=0,pA=x,mA=async e=>{fA++;let t=fA;console.log(`[TRACKED getConnection] Вызов #${t} - Начало`),console.log(`[TRACKED getConnection] Вызов #${t} - Stack trace:`,Error().stack);try{let n=await pA(e);return console.log(`[TRACKED getConnection] Вызов #${t} - Успешно получен результат:`,n),console.log(`[TRACKED getConnection] Вызов #${t} - result.connector:`,n==null?void 0:n.connector),console.log(`[TRACKED getConnection] Вызов #${t} - Тип connector:`,typeof(n==null?void 0:n.connector)),n!=null&&n.connector&&(console.log(`[TRACKED getConnection] Вызов #${t} - Методы connector:`,Object.getOwnPropertyNames(Object.getPrototypeOf(n.connector))),console.log(`[TRACKED getConnection] Вызов #${t} - Есть ли getChainId?`,typeof n.connector.getChainId)),n}catch(e){throw console.error(`[TRACKED getConnection] Вызов #${t} - Ошибка:`,e),console.error(`[TRACKED getConnection] Вызов #${t} - Stack trace:`,e.stack),e}};function hA(){console.log(`[useWalletConnect] Инициализация composable`),console.log(`[useWalletConnect] Stack trace:`,Error().stack),cA||lA();let{open:e}=VD(),t=Ir(void 0),n=Ir(!1),r=Ir(void 0),i=Ir(void 0),a=Ir(void 0),o=Ir(`0`),s=Ir(!1),c=Ir(!1),l=`cxbt-wallet-auto-opened`,u=()=>{try{return localStorage.getItem(l)===`true`}catch(e){return console.warn(`[useWalletConnect] Ошибка чтения из localStorage:`,e),!1}},d=e=>{try{localStorage.setItem(l,String(e))}catch(e){console.warn(`[useWalletConnect] Ошибка записи в localStorage:`,e)}},f=()=>{d(!1)},p=Ir(u()),m=nh(),h=async()=>{try{console.log(`[WalletConnect] ensureBaseNetwork - Начало выполнения`),console.log(`[WalletConnect] ensureBaseNetwork - Stack trace:`,Error().stack);let e=await mA(aA);console.log(`[WalletConnect] ensureBaseNetwork - connection:`,e),console.log(`[WalletConnect] ensureBaseNetwork - connection.connector:`,e==null?void 0:e.connector),e!=null&&e.connector&&(console.log(`[WalletConnect] ensureBaseNetwork - Методы connector:`,Object.getOwnPropertyNames(Object.getPrototypeOf(e.connector))),console.log(`[WalletConnect] ensureBaseNetwork - Есть ли getChainId?`,typeof e.connector.getChainId),console.log(`[WalletConnect] ensureBaseNetwork - connection.chainId:`,e.chainId));let t=e==null?void 0:e.chainId;if(!t)return console.log(`[WalletConnect] Сеть не определена, ожидаем подключения`),!1;if(t!==8453){console.warn(`[WalletConnect] Неподдерживаемая сеть: ${t}. Требуется Base (${rA})`),nA.create({type:`warning`,message:`Требуется сеть Base. Автоматическое переключение...`,timeout:3e3,position:`top`});try{return await ee(aA,{chainId:rA}),console.log(`[WalletConnect] Успешное переключение на сеть Base`),nA.create({type:`positive`,message:`Переключено на сеть Base`,timeout:2e3,position:`top`}),!0}catch(e){return console.error(`[WalletConnect] Ошибка при переключении на Base:`,e),nA.create({type:`negative`,message:`Не удалось переключиться на сеть Base. Пожалуйста, переключите сеть вручную.`,timeout:5e3,position:`top`,actions:[{label:`Понятно`,color:`white`,handler:()=>{}}]}),!1}}return!0}catch(e){return console.error(`[WalletConnect] Ошибка при проверке сети:`,e),console.error(`[WalletConnect] Stack trace:`,e.stack),!1}},_=async()=>{console.log(`[WalletConnect] autoReconnect - Начало выполнения`),console.log(`[WalletConnect] autoReconnect - isConnected.value ДО reconnect:`,n.value),console.log(`[WalletConnect] autoReconnect - walletStore.isConnected ДО reconnect:`,m.isConnected);try{let{reconnect:e}=await g(async()=>{let{reconnect:e}=await import(`./exports-DK5gP5EC.js`).then(e=>e.t);return{reconnect:e}},__vite__mapDeps([12,1,13,10,14,15,16]));console.log(`[WalletConnect] autoReconnect - Вызываем reconnect(wagmiConfig)`),await e(aA),console.log(`[WalletConnect] autoReconnect - reconnect завершён`),console.log(`[WalletConnect] autoReconnect - isConnected.value ПОСЛЕ reconnect:`,n.value),console.log(`[WalletConnect] autoReconnect - walletStore.isConnected ПОСЛЕ reconnect:`,m.isConnected),n.value?(console.log(`[WalletConnect] autoReconnect - Кошелёк подключён, проверяем сеть`),await h()):console.log(`[WalletConnect] autoReconnect - Кошелёк НЕ подключён`)}catch(e){console.error(`[WalletConnect] Ошибка автоматического подключения к кошельку:`,e)}},v=0,y=0,x=b(aA,{onChange(e){v++;let o=Date.now(),s=y?o-y:0;if(y=o,console.log(`[useWalletConnect] 👁️ watchAccount onChange сработал`),console.log(`[useWalletConnect]   Номер вызова:`,v),console.log(`[useWalletConnect]   Время с последнего вызова:`,s,`ms`),console.log(`[useWalletConnect]   account:`,e),console.log(`[useWalletConnect]   address.value ДО обновления:`,t.value),console.log(`[useWalletConnect]   isConnected.value ДО обновления:`,n.value),!e||e.address===void 0&&e.chainId===void 0&&e.chain===void 0&&e.connector===void 0){console.log(`[useWalletConnect] watchAccount onChange - Account не определён или все поля undefined, сбрасываем состояние`),t.value=void 0,n.value=!1,r.value=void 0,i.value=void 0,a.value=void 0,console.log(`[useWalletConnect]   state ПОСЛЕ сброса - address:`,t.value,`isConnected:`,n.value);return}if(e!=null&&e.connector&&(console.log(`[useWalletConnect] watchAccount onChange - Методы connector:`,Object.getOwnPropertyNames(Object.getPrototypeOf(e.connector))),console.log(`[useWalletConnect] watchAccount onChange - Есть ли getChainId?`,typeof e.connector.getChainId),console.log(`[useWalletConnect] watchAccount onChange - account.chainId:`,e.chainId)),t.value=e.address,n.value=!!e.address,r.value=e.chainId,i.value=e.chain,n.value&&e.chainId)try{let t=w(aA,{chainId:e.chainId});a.value=t,console.log(`[useWalletConnect] watchAccount onChange - publicClient получен:`,t)}catch(e){console.error(`[useWalletConnect] Ошибка при получении public client в watchAccount:`,e)}else a.value=void 0;console.log(`[useWalletConnect]   address.value ПОСЛЕ обновления:`,t.value),console.log(`[useWalletConnect]   isConnected.value ПОСЛЕ обновления:`,n.value),console.log(`[useWalletConnect]   chainId.value ПОСЛЕ обновления:`,r.value)}});return ta(t,(e,t)=>{console.log(`[useWalletConnect] watch address triggered - old:`,t,`new:`,e),t&&e&&t!==e&&(console.log(`[useWalletConnect] Адрес кошелька изменился, очищаем старые балансы`),m.clearBalances()),m.setAddress(e)},{immediate:!0}),ta(n,e=>{console.log(`[useWalletConnect] watch isConnected triggered - newIsConnected:`,e),m.setIsConnected(e),e?m.connect():m.disconnect()}),ta(r,e=>{m.setChainId(e),e&&e!==8453&&n.value&&h()},{immediate:!0}),To(()=>{x&&(x(),console.log(`[useWalletConnect] unwatchAccount called`))}),xo(async()=>{if(console.log(`[WalletConnect] onMounted - Начало выполнения`),console.log(`[WalletConnect] onMounted - isConnected.value ДО autoReconnect:`,n.value),console.log(`[WalletConnect] onMounted - walletStore.isConnected:`,m.isConnected),console.log(`[WalletConnect] onMounted - walletStore.address:`,m.address),console.log(`[WalletConnect] onMounted - hasAutoOpened.value:`,p.value),console.log(`[WalletConnect] onMounted - shouldAutoOpen:`,!0),console.log(`[WalletConnect] onMounted - localStorage wallet data:`,localStorage.getItem(`cxbt-wallet`)),await _(),console.log(`[WalletConnect] onMounted - isConnected.value ПОСЛЕ autoReconnect:`,n.value),console.log(`[WalletConnect] onMounted - walletStore.isConnected ПОСЛЕ autoReconnect:`,m.isConnected),await new Promise(e=>setTimeout(e,100)),console.log(`[WalletConnect] onMounted - isConnected.value ПОСЛЕ задержки:`,n.value),console.log(`[WalletConnect] onMounted - walletStore.isConnected ПОСЛЕ задержки:`,m.isConnected),console.log(`[WalletConnect] onMounted - address.value:`,t.value),console.log(`[WalletConnect] onMounted - walletStore.address:`,m.address),!p.value&&!n.value&&!m.isConnected){console.log(`[WalletConnect] onMounted - Условия для открытия модального окна ВЫПОЛНЕНЫ`),console.log(`[WalletConnect] onMounted - shouldAutoOpen:`,!0),console.log(`[WalletConnect] onMounted - !hasAutoOpened.value:`,!p.value),console.log(`[WalletConnect] onMounted - !isConnected.value:`,!n.value),console.log(`[WalletConnect] onMounted - !walletStore.isConnected:`,!m.isConnected),console.log(`[WalletConnect] onMounted - ПРОВЕРКА: Все условия ИСТИННЫ, открываем модальное окно`),p.value=!0,d(!0);try{await e(),console.log(`[WalletConnect] Модальное окно автоматически открыто`)}catch(e){console.error(`[WalletConnect] Ошибка при автоматическом открытии:`,e)}}else console.log(`[WalletConnect] onMounted - Условия для открытия модального окна НЕ выполнены`),console.log(`[WalletConnect] onMounted - shouldAutoOpen:`,!0),console.log(`[WalletConnect] onMounted - !hasAutoOpened.value:`,!p.value),console.log(`[WalletConnect] onMounted - !isConnected.value:`,!n.value),console.log(`[WalletConnect] onMounted - !walletStore.isConnected:`,!m.isConnected),console.log(`[WalletConnect] onMounted - ПРОВЕРКА: Условие ЛОЖНО, модальное окно НЕ открывается`)}),{connect:async()=>{try{s.value=!0,c.value=!0,await e(),n.value&&(await h()||console.warn(`[WalletConnect] Подключение не к сети Base`))}catch(e){throw console.error(`Ошибка подключения к кошельку:`,e),e}finally{s.value=!1}},disconnect:async()=>{try{uA().close(),c.value=!1,f(),console.log(`[WalletConnect] disconnect - Флаг hasAutoOpened сброшен`)}catch(e){throw console.error(`Ошибка отключения от кошелька:`,e),e}},getAccount:()=>t.value,getBalance:async()=>{if(!t.value)return`0`;try{return o.value=(await ce(aA,{address:t.value})).toString(),o.value}catch(e){return console.error(`Ошибка получения баланса:`,e),`0`}},ensureBaseNetwork:h,account:Z(()=>t.value),isConnected:Z(()=>n.value),chainId:Z(()=>r.value),chain:Z(()=>i.value),provider:Z(()=>a.value),balance:o,isConnecting:s,isBaseNetwork:Z(()=>r.value===rA),isWalletDialogOpen:c}}export{lf as $,cp as A,Mo as At,Vf as B,Zt as Bt,Rp as C,So as Ct,fp as D,Lc as Dt,Ap as E,To as Et,Yf as F,Ir as Ft,xf as G,Af as H,qf as I,Cr as It,mf as J,gf as K,Jf as L,Lr as Lt,sp as M,Wi as Mt,ap as N,Mr as Nt,up as O,qi as Ot,Xf as P,Sr as Pt,uf as Q,Kf as R,Vr as Rt,Lp as S,wo as St,Mp as T,xo as Tt,Sf as U,jf as V,bf as W,_f as X,vf as Y,yf as Z,im as _,fl as _t,oA as a,Wd as at,Jp as b,Ei as bt,sA as c,Mc as ct,Qm as d,Uc as dt,cf as et,$m as f,nl as ft,_m as g,Na as gt,Xm as h,Xc as ht,lA as i,tu as it,op as j,ta as jt,dp as k,Ro as kt,nA as l,Z as lt,Im as m,el as mt,iA as n,Qd as nt,hA as o,jc as ot,eh as p,Hc as pt,pf as q,uA as r,Xd as rt,aA as s,ha as st,rA as t,$d as tt,nh as u,Yc as ut,rm as v,Ml as vt,jp as w,po as wt,Vp as x,fo as xt,Yp as y,Ji as yt,Wf as z,Ht as zt};