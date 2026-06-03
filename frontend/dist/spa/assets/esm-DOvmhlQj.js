import{s as e,t}from"./chunk-Bj-mKKzh.js";import{a as n,d as r,s as i,t as a,u as o}from"./lit-element-DSHPE3H8.js";import{n as s,o as c,s as l,t as u}from"./if-defined-DF_EpVrQ.js";import{n as d,r as f,t as p}from"./browser-EW2dOsAA.js";var m=Symbol(),h=Symbol(),g=`a`,_=`w`,v=(e,t)=>new Proxy(e,t),y=Object.getPrototypeOf,b=new WeakMap,x=e=>e&&(b.has(e)?b.get(e):y(e)===Object.prototype||y(e)===Array.prototype),ee=e=>typeof e==`object`&&!!e,S=e=>{if(Array.isArray(e))return Array.from(e);let t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(y(e),t)},te=e=>e[h]||e,C=(e,t,n,r)=>{if(!x(e))return e;let i=r&&r.get(e);if(!i){let t=te(e);i=(e=>Object.values(Object.getOwnPropertyDescriptors(e)).some(e=>!e.configurable&&!e.writable))(t)?[t,S(t)]:[t],r==null||r.set(e,i)}let[a,o]=i,s=n&&n.get(a);return s&&s[1].f===!!o||(s=((e,t)=>{let n={f:t},r=!1,i=(t,i)=>{if(!r){let r=n[g].get(e);if(r||(r={},n[g].set(e,r)),t===_)r[_]=!0;else{let e=r[t];e||(e=new Set,r[t]=e),e.add(i)}}},a={get:(t,r)=>r===h?e:(i(`k`,r),C(Reflect.get(t,r),n[g],n.c,n.t)),has:(t,a)=>a===m?(r=!0,n[g].delete(e),!0):(i(`h`,a),Reflect.has(t,a)),getOwnPropertyDescriptor:(e,t)=>(i(`o`,t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(i(_),Reflect.ownKeys(e))};return t&&(a.set=a.deleteProperty=()=>!1),[a,n]})(a,!!o),s[1].p=v(o||a,s[0]),n&&n.set(a,s)),s[1][g]=t,s[1].c=n,s[1].t=r,s[1].p},ne=(e,t,n,r)=>{if(Object.is(e,t))return!1;if(!ee(e)||!ee(t))return!0;let i=n.get(te(e));if(!i)return!0;if(r){let n=r.get(e);if(n&&n.n===t)return n.g;r.set(e,{n:t,g:!1})}let a=null;try{for(let n of i.h||[])if(a=Reflect.has(e,n)!==Reflect.has(t,n),a)return a;if(!0===i[_]){if(a=((e,t)=>{let n=Reflect.ownKeys(e),r=Reflect.ownKeys(t);return n.length!==r.length||n.some((e,t)=>e!==r[t])})(e,t),a)return a}else for(let n of i.o||[])if(a=!!Reflect.getOwnPropertyDescriptor(e,n)!=!!Reflect.getOwnPropertyDescriptor(t,n),a)return a;for(let o of i.k||[])if(a=ne(e[o],t[o],n,r),a)return a;return a===null&&(a=!0),a}finally{r&&r.set(e,{n:t,g:a})}},re=e=>x(e)&&e[h]||null,ie=(e,t=!0)=>{b.set(e,t)},w=e=>typeof e==`object`&&!!e,ae=new WeakMap,oe=new WeakSet,[se]=((e=Object.is,t=(e,t)=>new Proxy(e,t),n=e=>w(e)&&!oe.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),r=e=>{switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:throw e}},i=new WeakMap,a=(e,t,n=r)=>{let o=i.get(e);if((o==null?void 0:o[0])===t)return o[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return ie(s,!0),i.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let r=Reflect.get(e,t),i={value:r,enumerable:!0,configurable:!0};if(oe.has(r))ie(r,!1);else if(r instanceof Promise)delete i.value,i.get=()=>n(r);else if(ae.has(r)){let[e,t]=ae.get(r);i.value=a(e,t(),n)}Object.defineProperty(s,t,i)}),Object.preventExtensions(s)},o=new WeakMap,s=[1,1],c=r=>{if(!w(r))throw Error(`object required`);let i=o.get(r);if(i)return i;let l=s[0],u=new Set,d=(e,t=++s[0])=>{l!==t&&(l=t,u.forEach(n=>n(e,t)))},f=s[1],p=(e=++s[1])=>(f!==e&&!u.size&&(f=e,h.forEach(([t])=>{let n=t[1](e);n>l&&(l=n)})),l),m=e=>(t,n)=>{let r=[...t];r[1]=[e,...r[1]],d(r,n)},h=new Map,g=(e,t)=>{if(u.size){let n=t[3](m(e));h.set(e,[t,n])}else h.set(e,[t])},_=e=>{var t;let n=h.get(e);n&&(h.delete(e),(t=n[1])==null||t.call(n))},v=e=>(u.add(e),u.size===1&&h.forEach(([e,t],n)=>{let r=e[3](m(n));h.set(n,[e,r])}),()=>{u.delete(e),u.size===0&&h.forEach(([e,t],n)=>{t&&(t(),h.set(n,[e]))})}),y=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),b=t(y,{deleteProperty(e,t){let n=Reflect.get(e,t);_(t);let r=Reflect.deleteProperty(e,t);return r&&d([`delete`,[t],n]),r},set(t,r,i,a){let s=Reflect.has(t,r),l=Reflect.get(t,r,a);if(s&&(e(l,i)||o.has(i)&&e(l,o.get(i))))return!0;_(r),w(i)&&(i=re(i)||i);let u=i;if(i instanceof Promise)i.then(e=>{i.status=`fulfilled`,i.value=e,d([`resolve`,[r],e])}).catch(e=>{i.status=`rejected`,i.reason=e,d([`reject`,[r],e])});else{!ae.has(i)&&n(i)&&(u=c(i));let e=!oe.has(u)&&ae.get(u);e&&g(r,e)}return Reflect.set(t,r,u,a),d([`set`,[r],i,l]),!0}});o.set(r,b);let x=[y,p,a,v];return ae.set(b,x),Reflect.ownKeys(r).forEach(e=>{let t=Object.getOwnPropertyDescriptor(r,e);`value`in t&&(b[e]=r[e],delete t.value,delete t.writable),Object.defineProperty(y,e,t)}),b})=>[c,ae,oe,e,t,n,r,i,a,o,s])();function ce(e={}){return se(e)}function le(e,t,n){let r=ae.get(e),i,a=[],o=r[3],s=!1,c=o(e=>{if(a.push(e),n){t(a.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,s&&t(a.splice(0))}))});return s=!0,()=>{s=!1,c()}}function ue(e,t){let[n,r,i]=ae.get(e);return i(n,r(),t)}function de(e){return oe.add(e),e}function T(e,t,n,r){let i=e[t];return le(e,()=>{let r=e[t];Object.is(i,r)||n(i=r)},r)}function fe(e){let t=ce({data:Array.from(e||[]),has(e){return this.data.some(t=>t[0]===e)},set(e,t){let n=this.data.find(t=>t[0]===e);return n?n[1]=t:this.data.push([e,t]),this},get(e){var t;return(t=this.data.find(t=>t[0]===e))==null?void 0:t[1]},delete(e){let t=this.data.findIndex(t=>t[0]===e);return t===-1?!1:(this.data.splice(t,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(e){this.data.forEach(t=>{e(t[1],t[0],this)})},keys(){return this.data.map(e=>e[0]).values()},values(){return this.data.map(e=>e[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return`Map`},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(t,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(t),t}var pe=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs=r()})(e,(function(){var e=1e3,t=6e4,n=36e5,r=`millisecond`,i=`second`,a=`minute`,o=`hour`,s=`day`,c=`week`,l=`month`,u=`quarter`,d=`year`,f=`date`,p=`Invalid Date`,m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:`en`,weekdays:`Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday`.split(`_`),months:`January_February_March_April_May_June_July_August_September_October_November_December`.split(`_`),ordinal:function(e){var t=[`th`,`st`,`nd`,`rd`],n=e%100;return`[`+e+(t[(n-20)%10]||t[n]||t[0])+`]`}},_=function(e,t,n){var r=String(e);return!r||r.length>=t?e:``+Array(t+1-r.length).join(n)+e},v={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?`+`:`-`)+_(r,2,`0`)+`:`+_(i,2,`0`)},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),a=n-i<0,o=t.clone().add(r+(a?-1:1),l);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:f,h:o,m:a,s:i,ms:r,Q:u}[e]||String(e||``).toLowerCase().replace(/s$/,``)},u:function(e){return e===void 0}},y=`en`,b={};b[y]=g;var x=`$isDayjsObject`,ee=function(e){return e instanceof ne||!(!e||!e[x])},S=function e(t,n,r){var i;if(!t)return y;if(typeof t==`string`){var a=t.toLowerCase();b[a]&&(i=a),n&&(b[a]=n,i=a);var o=t.split(`-`);if(!i&&o.length>1)return e(o[0])}else{var s=t.name;b[s]=t,i=s}return!r&&i&&(y=i),i||!r&&y},te=function(e,t){if(ee(e))return e.clone();var n=typeof t==`object`?t:{};return n.date=e,n.args=arguments,new ne(n)},C=v;C.l=S,C.i=ee,C.w=function(e,t){return te(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var ne=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var _=g.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(t===null)return new Date(NaN);if(C.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t==`string`&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,a=(r[7]||`0`).substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return C},_.isValid=function(){return this.$d.toString()!==p},_.isSame=function(e,t){var n=te(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return te(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<te(e)},_.$g=function(e,t,n){return C.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,r=!!C.u(t)||t,u=C.p(e),p=function(e,t){var i=C.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},m=function(e,t){return C.w(n.toDate()[e].apply(n.toDate(`s`),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,g=this.$M,_=this.$D,v=`set`+(this.$u?`UTC`:``);switch(u){case d:return r?p(1,0):p(31,11);case l:return r?p(1,g):p(0,g+1);case c:var y=this.$locale().weekStart||0,b=(h<y?h+7:h)-y;return p(r?_-b:_+(6-b),g);case s:case f:return m(v+`Hours`,0);case o:return m(v+`Minutes`,1);case a:return m(v+`Seconds`,2);case i:return m(v+`Milliseconds`,3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var n,c=C.p(e),u=`set`+(this.$u?`UTC`:``),p=(n={},n[s]=u+`Date`,n[f]=u+`Date`,n[l]=u+`Month`,n[d]=u+`FullYear`,n[o]=u+`Hours`,n[a]=u+`Minutes`,n[i]=u+`Seconds`,n[r]=u+`Milliseconds`,n)[c],m=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var h=this.clone().set(f,1);h.$d[p](m),h.init(),this.$d=h.set(f,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](m);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[C.p(e)]()},_.add=function(r,u){var f,p=this;r=Number(r);var m=C.p(u),h=function(e){var t=te(p);return C.w(t.date(t.date()+Math.round(e*r)),p)};if(m===l)return this.set(l,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===s)return h(1);if(m===c)return h(7);var g=(f={},f[a]=t,f[o]=n,f[i]=e,f)[m]||1,_=this.$d.getTime()+r*g;return C.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||`YYYY-MM-DDTHH:mm:ssZ`,i=C.z(this),a=this.$H,o=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},f=function(e){return C.s(a%12||12,e,`0`)},m=u||function(e,t,n){var r=e<12?`AM`:`PM`;return n?r.toLowerCase():r};return r.replace(h,(function(e,r){return r||function(e){switch(e){case`YY`:return String(t.$y).slice(-2);case`YYYY`:return C.s(t.$y,4,`0`);case`M`:return s+1;case`MM`:return C.s(s+1,2,`0`);case`MMM`:return d(n.monthsShort,s,l,3);case`MMMM`:return d(l,s);case`D`:return t.$D;case`DD`:return C.s(t.$D,2,`0`);case`d`:return String(t.$W);case`dd`:return d(n.weekdaysMin,t.$W,c,2);case`ddd`:return d(n.weekdaysShort,t.$W,c,3);case`dddd`:return c[t.$W];case`H`:return String(a);case`HH`:return C.s(a,2,`0`);case`h`:return f(1);case`hh`:return f(2);case`a`:return m(a,o,!0);case`A`:return m(a,o,!1);case`m`:return String(o);case`mm`:return C.s(o,2,`0`);case`s`:return String(t.$s);case`ss`:return C.s(t.$s,2,`0`);case`SSS`:return C.s(t.$ms,3,`0`);case`Z`:return i}return null}(e)||i.replace(`:`,``)}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(r,f,p){var m,h=this,g=C.p(f),_=te(r),v=(_.utcOffset()-this.utcOffset())*t,y=this-_,b=function(){return C.m(h,_)};switch(g){case d:m=b()/12;break;case l:m=b();break;case u:m=b()/3;break;case c:m=(y-v)/6048e5;break;case s:m=(y-v)/864e5;break;case o:m=y/n;break;case a:m=y/t;break;case i:m=y/e;break;default:m=y}return p?m:C.a(m)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return b[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},_.clone=function(){return C.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},g}(),re=ne.prototype;return te.prototype=re,[[`$ms`,r],[`$s`,i],[`$m`,a],[`$H`,o],[`$W`,s],[`$M`,l],[`$y`,d],[`$D`,f]].forEach((function(e){re[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),te.extend=function(e,t){return e.$i||(e(t,ne,te),e.$i=!0),te},te.locale=S,te.isDayjs=ee,te.unix=function(e){return te(1e3*e)},te.en=b[y],te.Ls=b,te.p={},te}))})),me=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_locale_en=r()})(e,(function(){return{name:`en`,weekdays:`Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday`.split(`_`),months:`January_February_March_April_May_June_July_August_September_October_November_December`.split(`_`),ordinal:function(e){var t=[`th`,`st`,`nd`,`rd`],n=e%100;return`[`+e+(t[(n-20)%10]||t[n]||t[0])+`]`}}}))})),he=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_relativeTime=r()})(e,(function(){return function(e,t,n){e=e||{};var r=t.prototype,i={future:`in %s`,past:`%s ago`,s:`a few seconds`,m:`a minute`,mm:`%d minutes`,h:`an hour`,hh:`%d hours`,d:`a day`,dd:`%d days`,M:`a month`,MM:`%d months`,y:`a year`,yy:`%d years`};function a(e,t,n,i){return r.fromToBase(e,t,n,i)}n.en.relativeTime=i,r.fromToBase=function(t,r,a,o,s){for(var c,l,u,d=a.$locale().relativeTime||i,f=e.thresholds||[{l:`s`,r:44,d:`second`},{l:`m`,r:89},{l:`mm`,r:44,d:`minute`},{l:`h`,r:89},{l:`hh`,r:21,d:`hour`},{l:`d`,r:35},{l:`dd`,r:25,d:`day`},{l:`M`,r:45},{l:`MM`,r:10,d:`month`},{l:`y`,r:17},{l:`yy`,d:`year`}],p=f.length,m=0;m<p;m+=1){var h=f[m];h.d&&(c=o?n(t).diff(a,h.d,!0):a.diff(t,h.d,!0));var g=(e.rounding||Math.round)(Math.abs(c));if(u=c>0,g<=h.r||!h.r){g<=1&&m>0&&(h=f[m-1]);var _=d[h.l];s&&(g=s(``+g)),l=typeof _==`string`?_.replace(`%d`,g):_(g,r,h.l,u);break}}if(r)return l;var v=u?d.future:d.past;return typeof v==`function`?v(l):v.replace(`%s`,l)},r.to=function(e,t){return a(e,t,this,!0)},r.from=function(e,t){return a(e,t,this)};var o=function(e){return e.$u?n.utc():n()};r.toNow=function(e){return this.to(o(this),e)},r.fromNow=function(e){return this.from(o(this),e)}}}))})),ge=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_updateLocale=r()})(e,(function(){return function(e,t,n){n.updateLocale=function(e,t){var r=n.Ls[e];if(r)return(t?Object.keys(t):[]).forEach((function(e){r[e]=t[e]})),r}}}))})),_e=e(pe(),1),ve=e(me(),1),ye=e(he(),1),be=e(ge(),1);_e.default.extend(ye.default),_e.default.extend(be.default);var xe={...ve.default,name:`en-web3-modal`,relativeTime:{future:`in %s`,past:`%s ago`,s:`%d sec`,m:`1 min`,mm:`%d min`,h:`1 hr`,hh:`%d hrs`,d:`1 d`,dd:`%d d`,M:`1 mo`,MM:`%d mo`,y:`1 yr`,yy:`%d yr`}};_e.default.locale(`en-web3-modal`,xe);var Se={getYear(e=new Date().toISOString()){return(0,_e.default)(e).year()},getRelativeDateFromNow(e){return(0,_e.default)(e).locale(`en-web3-modal`).fromNow(!0)},formatDate(e,t=`DD MMM`){return(0,_e.default)(e).format(t)}},Ce={caipNetworkIdToNumber(e){return e?Number(e.split(`:`)[1]):void 0},parseEvmChainId(e){return typeof e==`string`?this.caipNetworkIdToNumber(e):e}},we=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,Te=Math.ceil,Ee=Math.floor,De=`[BigNumber Error] `,Oe=De+`Number primitive has more than 15 significant digits: `,ke=0x5af3107a4000,E=14,Ae=9007199254740991,je=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,0xe8d4a51000,0x9184e72a000],Me=1e7,Ne=1e9;function Pe(e){var t,n,r,i=v.prototype={constructor:v,toString:null,valueOf:null},a=new v(1),o=20,s=4,c=-7,l=21,u=-1e7,d=1e7,f=!1,p=1,m=0,h={prefix:``,groupSize:3,secondaryGroupSize:0,groupSeparator:`,`,decimalSeparator:`.`,fractionGroupSize:0,fractionGroupSeparator:`\xA0`,suffix:``},g=`0123456789abcdefghijklmnopqrstuvwxyz`,_=!0;function v(e,t){var i,a,c,l,f,p,m,h,y=this;if(!(y instanceof v))return new v(e,t);if(t==null){if(e&&e._isBigNumber===!0){y.s=e.s,!e.c||e.e>d?y.c=y.e=null:e.e<u?y.c=[y.e=0]:(y.e=e.e,y.c=e.c.slice());return}if((p=typeof e==`number`)&&e*0==0){if(y.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,f=e;f>=10;f/=10,l++);l>d?y.c=y.e=null:(y.e=l,y.c=[e]);return}h=String(e)}else{if(!we.test(h=String(e)))return r(y,h,p);y.s=h.charCodeAt(0)==45?(h=h.slice(1),-1):1}(l=h.indexOf(`.`))>-1&&(h=h.replace(`.`,``)),(f=h.search(/e/i))>0?(l<0&&(l=f),l+=+h.slice(f+1),h=h.substring(0,f)):l<0&&(l=h.length)}else{if(Re(t,2,g.length,`Base`),t==10&&_)return y=new v(e),ee(y,o+y.e+1,s);if(h=String(e),p=typeof e==`number`){if(e*0!=0)return r(y,h,p,t);if(y.s=1/e<0?(h=h.slice(1),-1):1,v.DEBUG&&h.replace(/^0\.0*|\./,``).length>15)throw Error(Oe+e)}else y.s=h.charCodeAt(0)===45?(h=h.slice(1),-1):1;for(i=g.slice(0,t),l=f=0,m=h.length;f<m;f++)if(i.indexOf(a=h.charAt(f))<0){if(a==`.`){if(f>l){l=m;continue}}else if(!c&&(h==h.toUpperCase()&&(h=h.toLowerCase())||h==h.toLowerCase()&&(h=h.toUpperCase()))){c=!0,f=-1,l=0;continue}return r(y,String(e),p,t)}p=!1,h=n(h,t,10,y.s),(l=h.indexOf(`.`))>-1?h=h.replace(`.`,``):l=h.length}for(f=0;h.charCodeAt(f)===48;f++);for(m=h.length;h.charCodeAt(--m)===48;);if(h=h.slice(f,++m)){if(m-=f,p&&v.DEBUG&&m>15&&(e>Ae||e!==Ee(e)))throw Error(Oe+y.s*e);if((l=l-f-1)>d)y.c=y.e=null;else if(l<u)y.c=[y.e=0];else{if(y.e=l,y.c=[],f=(l+1)%E,l<0&&(f+=E),f<m){for(f&&y.c.push(+h.slice(0,f)),m-=E;f<m;)y.c.push(+h.slice(f,f+=E));f=E-(h=h.slice(f)).length}else f-=m;for(;f--;h+=`0`);y.c.push(+h)}}else y.c=[y.e=0]}v.clone=Pe,v.ROUND_UP=0,v.ROUND_DOWN=1,v.ROUND_CEIL=2,v.ROUND_FLOOR=3,v.ROUND_HALF_UP=4,v.ROUND_HALF_DOWN=5,v.ROUND_HALF_EVEN=6,v.ROUND_HALF_CEIL=7,v.ROUND_HALF_FLOOR=8,v.EUCLID=9,v.config=v.set=function(e){var t,n;if(e!=null)if(typeof e==`object`){if(e.hasOwnProperty(t=`DECIMAL_PLACES`)&&(n=e[t],Re(n,0,Ne,t),o=n),e.hasOwnProperty(t=`ROUNDING_MODE`)&&(n=e[t],Re(n,0,8,t),s=n),e.hasOwnProperty(t=`EXPONENTIAL_AT`)&&(n=e[t],n&&n.pop?(Re(n[0],-Ne,0,t),Re(n[1],0,Ne,t),c=n[0],l=n[1]):(Re(n,-Ne,Ne,t),c=-(l=n<0?-n:n))),e.hasOwnProperty(t=`RANGE`))if(n=e[t],n&&n.pop)Re(n[0],-Ne,-1,t),Re(n[1],1,Ne,t),u=n[0],d=n[1];else if(Re(n,-Ne,Ne,t),n)u=-(d=n<0?-n:n);else throw Error(De+t+` cannot be zero: `+n);if(e.hasOwnProperty(t=`CRYPTO`))if(n=e[t],n===!!n)if(n)if(typeof crypto<`u`&&crypto&&(crypto.getRandomValues||crypto.randomBytes))f=n;else throw f=!n,Error(De+`crypto unavailable`);else f=n;else throw Error(De+t+` not true or false: `+n);if(e.hasOwnProperty(t=`MODULO_MODE`)&&(n=e[t],Re(n,0,9,t),p=n),e.hasOwnProperty(t=`POW_PRECISION`)&&(n=e[t],Re(n,0,Ne,t),m=n),e.hasOwnProperty(t=`FORMAT`))if(n=e[t],typeof n==`object`)h=n;else throw Error(De+t+` not an object: `+n);if(e.hasOwnProperty(t=`ALPHABET`))if(n=e[t],typeof n==`string`&&!/^.?$|[+\-.\s]|(.).*\1/.test(n))_=n.slice(0,10)==`0123456789`,g=n;else throw Error(De+t+` invalid: `+n)}else throw Error(De+`Object expected: `+e);return{DECIMAL_PLACES:o,ROUNDING_MODE:s,EXPONENTIAL_AT:[c,l],RANGE:[u,d],CRYPTO:f,MODULO_MODE:p,POW_PRECISION:m,FORMAT:h,ALPHABET:g}},v.isBigNumber=function(e){if(!e||e._isBigNumber!==!0)return!1;if(!v.DEBUG)return!0;var t,n,r=e.c,i=e.e,a=e.s;out:if({}.toString.call(r)==`[object Array]`){if((a===1||a===-1)&&i>=-Ne&&i<=Ne&&i===Ee(i)){if(r[0]===0){if(i===0&&r.length===1)return!0;break out}if(t=(i+1)%E,t<1&&(t+=E),String(r[0]).length==t){for(t=0;t<r.length;t++)if(n=r[t],n<0||n>=ke||n!==Ee(n))break out;if(n!==0)return!0}}}else if(r===null&&i===null&&(a===null||a===1||a===-1))return!0;throw Error(De+`Invalid BigNumber: `+e)},v.maximum=v.max=function(){return b(arguments,-1)},v.minimum=v.min=function(){return b(arguments,1)},v.random=(function(){var e=9007199254740992,t=Math.random()*e&2097151?function(){return Ee(Math.random()*e)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(e){var n,r,i,s,c,l=0,u=[],d=new v(a);if(e==null?e=o:Re(e,0,Ne),s=Te(e/E),f)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(s*=2));l<s;)c=n[l]*131072+(n[l+1]>>>11),c>=9e15?(r=crypto.getRandomValues(new Uint32Array(2)),n[l]=r[0],n[l+1]=r[1]):(u.push(c%0x5af3107a4000),l+=2);l=s/2}else if(crypto.randomBytes){for(n=crypto.randomBytes(s*=7);l<s;)c=(n[l]&31)*281474976710656+n[l+1]*1099511627776+n[l+2]*4294967296+n[l+3]*16777216+(n[l+4]<<16)+(n[l+5]<<8)+n[l+6],c>=9e15?crypto.randomBytes(7).copy(n,l):(u.push(c%0x5af3107a4000),l+=7);l=s/7}else throw f=!1,Error(De+`crypto unavailable`);if(!f)for(;l<s;)c=t(),c<9e15&&(u[l++]=c%0x5af3107a4000);for(s=u[--l],e%=E,s&&e&&(c=je[E-e],u[l]=Ee(s/c)*c);u[l]===0;u.pop(),l--);if(l<0)u=[i=0];else{for(i=-1;u[0]===0;u.splice(0,1),i-=E);for(l=1,c=u[0];c>=10;c/=10,l++);l<E&&(i-=E-l)}return d.e=i,d.c=u,d}})(),v.sum=function(){for(var e=1,t=arguments,n=new v(t[0]);e<t.length;)n=n.plus(t[e++]);return n},n=(function(){var e=`0123456789`;function n(e,t,n,r){for(var i,a=[0],o,s=0,c=e.length;s<c;){for(o=a.length;o--;a[o]*=t);for(a[0]+=r.indexOf(e.charAt(s++)),i=0;i<a.length;i++)a[i]>n-1&&(a[i+1]??(a[i+1]=0),a[i+1]+=a[i]/n|0,a[i]%=n)}return a.reverse()}return function(r,i,a,c,l){var u,d,f,p,h,_,y,b,x=r.indexOf(`.`),ee=o,S=s;for(x>=0&&(p=m,m=0,r=r.replace(`.`,``),b=new v(i),_=b.pow(r.length-x),m=p,b.c=n(Ve(Ie(_.c),_.e,`0`),10,a,e),b.e=b.c.length),y=n(r,i,a,l?(u=g,e):(u=e,g)),f=p=y.length;y[--p]==0;y.pop());if(!y[0])return u.charAt(0);if(x<0?--f:(_.c=y,_.e=f,_.s=c,_=t(_,b,ee,S,a),y=_.c,h=_.r,f=_.e),d=f+ee+1,x=y[d],p=a/2,h=h||d<0||y[d+1]!=null,h=S<4?(x!=null||h)&&(S==0||S==(_.s<0?3:2)):x>p||x==p&&(S==4||h||S==6&&y[d-1]&1||S==(_.s<0?8:7)),d<1||!y[0])r=h?Ve(u.charAt(1),-ee,u.charAt(0)):u.charAt(0);else{if(y.length=d,h)for(--a;++y[--d]>a;)y[d]=0,d||(++f,y=[1].concat(y));for(p=y.length;!y[--p];);for(x=0,r=``;x<=p;r+=u.charAt(y[x++]));r=Ve(r,f,u.charAt(0))}return r}})(),t=(function(){function e(e,t,n){var r,i,a,o,s=0,c=e.length,l=t%Me,u=t/Me|0;for(e=e.slice();c--;)a=e[c]%Me,o=e[c]/Me|0,r=u*a+o*l,i=l*a+r%Me*Me+s,s=(i/n|0)+(r/Me|0)+u*o,e[c]=i%n;return s&&(e=[s].concat(e)),e}function t(e,t,n,r){var i,a;if(n!=r)a=n>r?1:-1;else for(i=a=0;i<n;i++)if(e[i]!=t[i]){a=e[i]>t[i]?1:-1;break}return a}function n(e,t,n,r){for(var i=0;n--;)e[n]-=i,i=e[n]<t[n]?1:0,e[n]=i*r+e[n]-t[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(r,i,a,o,s){var c,l,u,d,f,p,m,h,g,_,y,b,x,S,te,C,ne,re=r.s==i.s?1:-1,ie=r.c,w=i.c;if(!ie||!ie[0]||!w||!w[0])return new v(!r.s||!i.s||(ie?w&&ie[0]==w[0]:!w)?NaN:ie&&ie[0]==0||!w?re*0:re/0);for(h=new v(re),g=h.c=[],l=r.e-i.e,re=a+l+1,s||(s=ke,l=Fe(r.e/E)-Fe(i.e/E),re=re/E|0),u=0;w[u]==(ie[u]||0);u++);if(w[u]>(ie[u]||0)&&l--,re<0)g.push(1),d=!0;else{for(S=ie.length,C=w.length,u=0,re+=2,f=Ee(s/(w[0]+1)),f>1&&(w=e(w,f,s),ie=e(ie,f,s),C=w.length,S=ie.length),x=C,_=ie.slice(0,C),y=_.length;y<C;_[y++]=0);ne=w.slice(),ne=[0].concat(ne),te=w[0],w[1]>=s/2&&te++;do{if(f=0,c=t(w,_,C,y),c<0){if(b=_[0],C!=y&&(b=b*s+(_[1]||0)),f=Ee(b/te),f>1)for(f>=s&&(f=s-1),p=e(w,f,s),m=p.length,y=_.length;t(p,_,m,y)==1;)f--,n(p,C<m?ne:w,m,s),m=p.length,c=1;else f==0&&(c=f=1),p=w.slice(),m=p.length;if(m<y&&(p=[0].concat(p)),n(_,p,y,s),y=_.length,c==-1)for(;t(w,_,C,y)<1;)f++,n(_,C<y?ne:w,y,s),y=_.length}else c===0&&(f++,_=[0]);g[u++]=f,_[0]?_[y++]=ie[x]||0:(_=[ie[x]],y=1)}while((x++<S||_[0]!=null)&&re--);d=_[0]!=null,g[0]||g.splice(0,1)}if(s==ke){for(u=1,re=g[0];re>=10;re/=10,u++);ee(h,a+(h.e=u+l*E-1)+1,o,d)}else h.e=l,h.r=+d;return h}})();function y(e,t,n,r){var i,a,o,u,d;if(n==null?n=s:Re(n,0,8),!e.c)return e.toString();if(i=e.c[0],o=e.e,t==null)d=Ie(e.c),d=r==1||r==2&&(o<=c||o>=l)?Be(d,o):Ve(d,o,`0`);else if(e=ee(new v(e),t,n),a=e.e,d=Ie(e.c),u=d.length,r==1||r==2&&(t<=a||a<=c)){for(;u<t;d+=`0`,u++);d=Be(d,a)}else if(t-=o,d=Ve(d,a,`0`),a+1>u){if(--t>0)for(d+=`.`;t--;d+=`0`);}else if(t+=a-u,t>0)for(a+1==u&&(d+=`.`);t--;d+=`0`);return e.s<0&&i?`-`+d:d}function b(e,t){for(var n,r,i=1,a=new v(e[0]);i<e.length;i++)r=new v(e[i]),(!r.s||(n=Le(a,r))===t||n===0&&a.s===t)&&(a=r);return a}function x(e,t,n){for(var r=1,i=t.length;!t[--i];t.pop());for(i=t[0];i>=10;i/=10,r++);return(n=r+n*E-1)>d?e.c=e.e=null:n<u?e.c=[e.e=0]:(e.e=n,e.c=t),e}r=(function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,t=/^([^.]+)\.$/,n=/^\.([^.]+)$/,r=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(a,o,s,c){var l,u=s?o:o.replace(i,``);if(r.test(u))a.s=isNaN(u)?null:u<0?-1:1;else{if(!s&&(u=u.replace(e,function(e,t,n){return l=(n=n.toLowerCase())==`x`?16:n==`b`?2:8,!c||c==l?t:e}),c&&(l=c,u=u.replace(t,`$1`).replace(n,`0.$1`)),o!=u))return new v(u,l);if(v.DEBUG)throw Error(De+`Not a`+(c?` base `+c:``)+` number: `+o);a.s=null}a.c=a.e=null}})();function ee(e,t,n,r){var i,a,o,s,c,l,f,p=e.c,m=je;if(p){out:{for(i=1,s=p[0];s>=10;s/=10,i++);if(a=t-i,a<0)a+=E,o=t,c=p[l=0],f=Ee(c/m[i-o-1]%10);else if(l=Te((a+1)/E),l>=p.length)if(r){for(;p.length<=l;p.push(0));c=f=0,i=1,a%=E,o=a-E+1}else break out;else{for(c=s=p[l],i=1;s>=10;s/=10,i++);a%=E,o=a-E+i,f=o<0?0:Ee(c/m[i-o-1]%10)}if(r=r||t<0||p[l+1]!=null||(o<0?c:c%m[i-o-1]),r=n<4?(f||r)&&(n==0||n==(e.s<0?3:2)):f>5||f==5&&(n==4||r||n==6&&(a>0?o>0?c/m[i-o]:0:p[l-1])%10&1||n==(e.s<0?8:7)),t<1||!p[0])return p.length=0,r?(t-=e.e+1,p[0]=m[(E-t%E)%E],e.e=-t||0):p[0]=e.e=0,e;if(a==0?(p.length=l,s=1,l--):(p.length=l+1,s=m[E-a],p[l]=o>0?Ee(c/m[i-o]%m[o])*s:0),r)for(;;)if(l==0){for(a=1,o=p[0];o>=10;o/=10,a++);for(o=p[0]+=s,s=1;o>=10;o/=10,s++);a!=s&&(e.e++,p[0]==ke&&(p[0]=1));break}else{if(p[l]+=s,p[l]!=ke)break;p[l--]=0,s=1}for(a=p.length;p[--a]===0;p.pop());}e.e>d?e.c=e.e=null:e.e<u&&(e.c=[e.e=0])}return e}function S(e){var t,n=e.e;return n===null?e.toString():(t=Ie(e.c),t=n<=c||n>=l?Be(t,n):Ve(t,n,`0`),e.s<0?`-`+t:t)}return i.absoluteValue=i.abs=function(){var e=new v(this);return e.s<0&&(e.s=1),e},i.comparedTo=function(e,t){return Le(this,new v(e,t))},i.decimalPlaces=i.dp=function(e,t){var n,r,i,a=this;if(e!=null)return Re(e,0,Ne),t==null?t=s:Re(t,0,8),ee(new v(a),e+a.e+1,t);if(!(n=a.c))return null;if(r=((i=n.length-1)-Fe(this.e/E))*E,i=n[i])for(;i%10==0;i/=10,r--);return r<0&&(r=0),r},i.dividedBy=i.div=function(e,n){return t(this,new v(e,n),o,s)},i.dividedToIntegerBy=i.idiv=function(e,n){return t(this,new v(e,n),0,1)},i.exponentiatedBy=i.pow=function(e,t){var n,r,i,o,c,l,u,d,f,p=this;if(e=new v(e),e.c&&!e.isInteger())throw Error(De+`Exponent not an integer: `+S(e));if(t!=null&&(t=new v(t)),l=e.e>14,!p.c||!p.c[0]||p.c[0]==1&&!p.e&&p.c.length==1||!e.c||!e.c[0])return f=new v(S(p)**(l?e.s*(2-ze(e)):+S(e))),t?f.mod(t):f;if(u=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new v(NaN);r=!u&&p.isInteger()&&t.isInteger(),r&&(p=p.mod(t))}else if(e.e>9&&(p.e>0||p.e<-1||(p.e==0?p.c[0]>1||l&&p.c[1]>=24e7:p.c[0]<8e13||l&&p.c[0]<=9999975e7)))return o=p.s<0&&ze(e)?-0:0,p.e>-1&&(o=1/o),new v(u?1/o:o);else m&&(o=Te(m/E+2));for(l?(n=new v(.5),u&&(e.s=1),d=ze(e)):(i=Math.abs(+S(e)),d=i%2),f=new v(a);;){if(d){if(f=f.times(p),!f.c)break;o?f.c.length>o&&(f.c.length=o):r&&(f=f.mod(t))}if(i){if(i=Ee(i/2),i===0)break;d=i%2}else if(e=e.times(n),ee(e,e.e+1,1),e.e>14)d=ze(e);else{if(i=+S(e),i===0)break;d=i%2}p=p.times(p),o?p.c&&p.c.length>o&&(p.c.length=o):r&&(p=p.mod(t))}return r?f:(u&&(f=a.div(f)),t?f.mod(t):o?ee(f,m,s,c):f)},i.integerValue=function(e){var t=new v(this);return e==null?e=s:Re(e,0,8),ee(t,t.e+1,e)},i.isEqualTo=i.eq=function(e,t){return Le(this,new v(e,t))===0},i.isFinite=function(){return!!this.c},i.isGreaterThan=i.gt=function(e,t){return Le(this,new v(e,t))>0},i.isGreaterThanOrEqualTo=i.gte=function(e,t){return(t=Le(this,new v(e,t)))===1||t===0},i.isInteger=function(){return!!this.c&&Fe(this.e/E)>this.c.length-2},i.isLessThan=i.lt=function(e,t){return Le(this,new v(e,t))<0},i.isLessThanOrEqualTo=i.lte=function(e,t){return(t=Le(this,new v(e,t)))===-1||t===0},i.isNaN=function(){return!this.s},i.isNegative=function(){return this.s<0},i.isPositive=function(){return this.s>0},i.isZero=function(){return!!this.c&&this.c[0]==0},i.minus=function(e,t){var n,r,i,a,o=this,c=o.s;if(e=new v(e,t),t=e.s,!c||!t)return new v(NaN);if(c!=t)return e.s=-t,o.plus(e);var l=o.e/E,u=e.e/E,d=o.c,f=e.c;if(!l||!u){if(!d||!f)return d?(e.s=-t,e):new v(f?o:NaN);if(!d[0]||!f[0])return f[0]?(e.s=-t,e):new v(d[0]?o:s==3?-0:0)}if(l=Fe(l),u=Fe(u),d=d.slice(),c=l-u){for((a=c<0)?(c=-c,i=d):(u=l,i=f),i.reverse(),t=c;t--;i.push(0));i.reverse()}else for(r=(a=(c=d.length)<(t=f.length))?c:t,c=t=0;t<r;t++)if(d[t]!=f[t]){a=d[t]<f[t];break}if(a&&(i=d,d=f,f=i,e.s=-e.s),t=(r=f.length)-(n=d.length),t>0)for(;t--;d[n++]=0);for(t=ke-1;r>c;){if(d[--r]<f[r]){for(n=r;n&&!d[--n];d[n]=t);--d[n],d[r]+=ke}d[r]-=f[r]}for(;d[0]==0;d.splice(0,1),--u);return d[0]?x(e,d,u):(e.s=s==3?-1:1,e.c=[e.e=0],e)},i.modulo=i.mod=function(e,n){var r,i,a=this;return e=new v(e,n),!a.c||!e.s||e.c&&!e.c[0]?new v(NaN):!e.c||a.c&&!a.c[0]?new v(a):(p==9?(i=e.s,e.s=1,r=t(a,e,0,3),e.s=i,r.s*=i):r=t(a,e,0,p),e=a.minus(r.times(e)),!e.c[0]&&p==1&&(e.s=a.s),e)},i.multipliedBy=i.times=function(e,t){var n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_=this,y=_.c,b=(e=new v(e,t)).c;if(!y||!b||!y[0]||!b[0])return!_.s||!e.s||y&&!y[0]&&!b||b&&!b[0]&&!y?e.c=e.e=e.s=null:(e.s*=_.s,!y||!b?e.c=e.e=null:(e.c=[0],e.e=0)),e;for(r=Fe(_.e/E)+Fe(e.e/E),e.s*=_.s,c=y.length,d=b.length,c<d&&(m=y,y=b,b=m,i=c,c=d,d=i),i=c+d,m=[];i--;m.push(0));for(h=ke,g=Me,i=d;--i>=0;){for(n=0,f=b[i]%g,p=b[i]/g|0,o=c,a=i+o;a>i;)l=y[--o]%g,u=y[o]/g|0,s=p*l+u*f,l=f*l+s%g*g+m[a]+n,n=(l/h|0)+(s/g|0)+p*u,m[a--]=l%h;m[a]=n}return n?++r:m.splice(0,1),x(e,m,r)},i.negated=function(){var e=new v(this);return e.s=-e.s||null,e},i.plus=function(e,t){var n,r=this,i=r.s;if(e=new v(e,t),t=e.s,!i||!t)return new v(NaN);if(i!=t)return e.s=-t,r.minus(e);var a=r.e/E,o=e.e/E,s=r.c,c=e.c;if(!a||!o){if(!s||!c)return new v(i/0);if(!s[0]||!c[0])return c[0]?e:new v(s[0]?r:i*0)}if(a=Fe(a),o=Fe(o),s=s.slice(),i=a-o){for(i>0?(o=a,n=c):(i=-i,n=s),n.reverse();i--;n.push(0));n.reverse()}for(i=s.length,t=c.length,i-t<0&&(n=c,c=s,s=n,t=i),i=0;t;)i=(s[--t]=s[t]+c[t]+i)/ke|0,s[t]=ke===s[t]?0:s[t]%ke;return i&&(s=[i].concat(s),++o),x(e,s,o)},i.precision=i.sd=function(e,t){var n,r,i,a=this;if(e!=null&&e!==!!e)return Re(e,1,Ne),t==null?t=s:Re(t,0,8),ee(new v(a),e,t);if(!(n=a.c))return null;if(i=n.length-1,r=i*E+1,i=n[i]){for(;i%10==0;i/=10,r--);for(i=n[0];i>=10;i/=10,r++);}return e&&a.e+1>r&&(r=a.e+1),r},i.shiftedBy=function(e){return Re(e,-Ae,Ae),this.times(`1e`+e)},i.squareRoot=i.sqrt=function(){var e,n,r,i,a,c=this,l=c.c,u=c.s,d=c.e,f=o+4,p=new v(`0.5`);if(u!==1||!l||!l[0])return new v(!u||u<0&&(!l||l[0])?NaN:l?c:1/0);if(u=Math.sqrt(+S(c)),u==0||u==1/0?(n=Ie(l),(n.length+d)%2==0&&(n+=`0`),u=Math.sqrt(+n),d=Fe((d+1)/2)-(d<0||d%2),u==1/0?n=`5e`+d:(n=u.toExponential(),n=n.slice(0,n.indexOf(`e`)+1)+d),r=new v(n)):r=new v(u+``),r.c[0]){for(d=r.e,u=d+f,u<3&&(u=0);;)if(a=r,r=p.times(a.plus(t(c,a,f,1))),Ie(a.c).slice(0,u)===(n=Ie(r.c)).slice(0,u))if(r.e<d&&--u,n=n.slice(u-3,u+1),n==`9999`||!i&&n==`4999`){if(!i&&(ee(a,a.e+o+2,0),a.times(a).eq(c))){r=a;break}f+=4,u+=4,i=1}else{(!+n||!+n.slice(1)&&n.charAt(0)==`5`)&&(ee(r,r.e+o+2,1),e=!r.times(r).eq(c));break}}return ee(r,r.e+o+1,s,e)},i.toExponential=function(e,t){return e!=null&&(Re(e,0,Ne),e++),y(this,e,t,1)},i.toFixed=function(e,t){return e!=null&&(Re(e,0,Ne),e=e+this.e+1),y(this,e,t)},i.toFormat=function(e,t,n){var r,i=this;if(n==null)e!=null&&t&&typeof t==`object`?(n=t,t=null):e&&typeof e==`object`?(n=e,e=t=null):n=h;else if(typeof n!=`object`)throw Error(De+`Argument not an object: `+n);if(r=i.toFixed(e,t),i.c){var a,o=r.split(`.`),s=+n.groupSize,c=+n.secondaryGroupSize,l=n.groupSeparator||``,u=o[0],d=o[1],f=i.s<0,p=f?u.slice(1):u,m=p.length;if(c&&(a=s,s=c,c=a,m-=a),s>0&&m>0){for(a=m%s||s,u=p.substr(0,a);a<m;a+=s)u+=l+p.substr(a,s);c>0&&(u+=l+p.slice(a)),f&&(u=`-`+u)}r=d?u+(n.decimalSeparator||``)+((c=+n.fractionGroupSize)?d.replace(RegExp(`\\d{`+c+`}\\B`,`g`),`$&`+(n.fractionGroupSeparator||``)):d):u}return(n.prefix||``)+r+(n.suffix||``)},i.toFraction=function(e){var n,r,i,o,c,l,u,f,p,m,h,g,_=this,y=_.c;if(e!=null&&(u=new v(e),!u.isInteger()&&(u.c||u.s!==1)||u.lt(a)))throw Error(De+`Argument `+(u.isInteger()?`out of range: `:`not an integer: `)+S(u));if(!y)return new v(_);for(n=new v(a),p=r=new v(a),i=f=new v(a),g=Ie(y),c=n.e=g.length-_.e-1,n.c[0]=je[(l=c%E)<0?E+l:l],e=!e||u.comparedTo(n)>0?c>0?n:p:u,l=d,d=1/0,u=new v(g),f.c[0]=0;m=t(u,n,0,1),o=r.plus(m.times(i)),o.comparedTo(e)!=1;)r=i,i=o,p=f.plus(m.times(o=p)),f=o,n=u.minus(m.times(o=n)),u=o;return o=t(e.minus(r),i,0,1),f=f.plus(o.times(p)),r=r.plus(o.times(i)),f.s=p.s=_.s,c*=2,h=t(p,i,c,s).minus(_).abs().comparedTo(t(f,r,c,s).minus(_).abs())<1?[p,i]:[f,r],d=l,h},i.toNumber=function(){return+S(this)},i.toPrecision=function(e,t){return e!=null&&Re(e,1,Ne),y(this,e,t,2)},i.toString=function(e){var t,r=this,i=r.s,a=r.e;return a===null?i?(t=`Infinity`,i<0&&(t=`-`+t)):t=`NaN`:(e==null?t=a<=c||a>=l?Be(Ie(r.c),a):Ve(Ie(r.c),a,`0`):e===10&&_?(r=ee(new v(r),o+a+1,s),t=Ve(Ie(r.c),r.e,`0`)):(Re(e,2,g.length,`Base`),t=n(Ve(Ie(r.c),a,`0`),10,e,i,!0)),i<0&&r.c[0]&&(t=`-`+t)),t},i.valueOf=i.toJSON=function(){return S(this)},i._isBigNumber=!0,i[Symbol.toStringTag]=`BigNumber`,i[Symbol.for(`nodejs.util.inspect.custom`)]=i.valueOf,e!=null&&v.set(e),v}function Fe(e){var t=e|0;return e>0||e===t?t:t-1}function Ie(e){for(var t,n,r=1,i=e.length,a=e[0]+``;r<i;){for(t=e[r++]+``,n=E-t.length;n--;t=`0`+t);a+=t}for(i=a.length;a.charCodeAt(--i)===48;);return a.slice(0,i+1||1)}function Le(e,t){var n,r,i=e.c,a=t.c,o=e.s,s=t.s,c=e.e,l=t.e;if(!o||!s)return null;if(n=i&&!i[0],r=a&&!a[0],n||r)return n?r?0:-s:o;if(o!=s)return o;if(n=o<0,r=c==l,!i||!a)return r?0:!i^n?1:-1;if(!r)return c>l^n?1:-1;for(s=(c=i.length)<(l=a.length)?c:l,o=0;o<s;o++)if(i[o]!=a[o])return i[o]>a[o]^n?1:-1;return c==l?0:c>l^n?1:-1}function Re(e,t,n,r){if(e<t||e>n||e!==Ee(e))throw Error(De+(r||`Argument`)+(typeof e==`number`?e<t||e>n?` out of range: `:` not an integer: `:` not a primitive number: `)+String(e))}function ze(e){var t=e.c.length-1;return Fe(e.e/E)==t&&e.c[t]%2!=0}function Be(e,t){return(e.length>1?e.charAt(0)+`.`+e.slice(1):e)+(t<0?`e`:`e+`)+t}function Ve(e,t,n){var r,i;if(t<0){for(i=n+`.`;++t;i+=n);e=i+e}else if(r=e.length,++t>r){for(i=n,t-=r;--t;i+=n);e+=i}else t<r&&(e=e.slice(0,t)+`.`+e.slice(t));return e}var He=Pe(),D={bigNumber(e){return new He(e)},multiply(e,t){if(e===void 0||t===void 0)return He(0);let n=new He(e),r=new He(t);return n.multipliedBy(r)},formatNumberToLocalString(e,t=2){return e===void 0?`0.00`:typeof e==`number`?e.toLocaleString(`en-US`,{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString(`en-US`,{maximumFractionDigits:t,minimumFractionDigits:t})}},Ue={numericInputKeyDown(e,t,n){let r=[`Backspace`,`Meta`,`Ctrl`,`a`,`A`,`c`,`C`,`x`,`X`,`v`,`V`,`ArrowLeft`,`ArrowRight`,`Tab`],i=e.metaKey||e.ctrlKey,a=e.key,o=a.toLocaleLowerCase(),s=o===`a`,c=o===`c`,l=o===`v`,u=o===`x`,d=a===`,`,f=a===`.`,p=a>=`0`&&a<=`9`;!i&&(s||c||l||u)&&e.preventDefault(),t===`0`&&!d&&!f&&a===`0`&&e.preventDefault(),t===`0`&&p&&(n(a),e.preventDefault()),(d||f)&&(t||(n(`0.`),e.preventDefault()),(t!=null&&t.includes(`.`)||t!=null&&t.includes(`,`))&&e.preventDefault()),!p&&!r.includes(a)&&!f&&!d&&e.preventDefault()}},We=[{constant:!0,inputs:[],name:`name`,outputs:[{name:``,type:`string`}],payable:!1,stateMutability:`view`,type:`function`},{constant:!1,inputs:[{name:`_spender`,type:`address`},{name:`_value`,type:`uint256`}],name:`approve`,outputs:[{name:``,type:`bool`}],payable:!1,stateMutability:`nonpayable`,type:`function`},{constant:!0,inputs:[],name:`totalSupply`,outputs:[{name:``,type:`uint256`}],payable:!1,stateMutability:`view`,type:`function`},{constant:!1,inputs:[{name:`_from`,type:`address`},{name:`_to`,type:`address`},{name:`_value`,type:`uint256`}],name:`transferFrom`,outputs:[{name:``,type:`bool`}],payable:!1,stateMutability:`nonpayable`,type:`function`},{constant:!0,inputs:[],name:`decimals`,outputs:[{name:``,type:`uint8`}],payable:!1,stateMutability:`view`,type:`function`},{constant:!0,inputs:[{name:`_owner`,type:`address`}],name:`balanceOf`,outputs:[{name:`balance`,type:`uint256`}],payable:!1,stateMutability:`view`,type:`function`},{constant:!0,inputs:[],name:`symbol`,outputs:[{name:``,type:`string`}],payable:!1,stateMutability:`view`,type:`function`},{constant:!1,inputs:[{name:`_to`,type:`address`},{name:`_value`,type:`uint256`}],name:`transfer`,outputs:[{name:``,type:`bool`}],payable:!1,stateMutability:`nonpayable`,type:`function`},{constant:!0,inputs:[{name:`_owner`,type:`address`},{name:`_spender`,type:`address`}],name:`allowance`,outputs:[{name:``,type:`uint256`}],payable:!1,stateMutability:`view`,type:`function`},{payable:!0,stateMutability:`payable`,type:`fallback`},{anonymous:!1,inputs:[{indexed:!0,name:`owner`,type:`address`},{indexed:!0,name:`spender`,type:`address`},{indexed:!1,name:`value`,type:`uint256`}],name:`Approval`,type:`event`},{anonymous:!1,inputs:[{indexed:!0,name:`from`,type:`address`},{indexed:!0,name:`to`,type:`address`},{indexed:!1,name:`value`,type:`uint256`}],name:`Transfer`,type:`event`}],Ge={URLS:{FAQ:`https://walletconnect.com/faq`}},Ke={WC_NAME_SUFFIX:`.wcn.id`,BLOCKCHAIN_API_RPC_URL:`https://rpc.walletconnect.org`,PULSE_API_URL:`https://pulse.walletconnect.org`,W3M_API_URL:`https://api.web3modal.org`,CHAIN:{EVM:`evm`,SOLANA:`solana`},CHAIN_NAME_MAP:{evm:`Ethereum`,solana:`Solana`}};function qe(e,t){return t===`light`?{"--w3m-accent":(e==null?void 0:e[`--w3m-accent`])||`hsla(231, 100%, 70%, 1)`,"--w3m-background":`#fff`}:{"--w3m-accent":(e==null?void 0:e[`--w3m-accent`])||`hsla(230, 100%, 67%, 1)`,"--w3m-background":`#121313`}}var Je=`https://secure.walletconnect.org`,Ye=[{label:`Coinbase`,name:`coinbase`,feeRange:`1-2%`,url:``,supportedChains:[`evm`]},{label:`Meld.io`,name:`meld`,feeRange:`1-2%`,url:`https://meldcrypto.com`,supportedChains:[`evm`,`solana`]}],Xe=`WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU`,Ze={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:Je,SECURE_SITE_DASHBOARD:`${Je}/dashboard`,SECURE_SITE_FAVICON:`${Je}/images/favicon.png`,RESTRICTED_TIMEZONES:[`ASIA/SHANGHAI`,`ASIA/URUMQI`,`ASIA/CHONGQING`,`ASIA/HARBIN`,`ASIA/KASHGAR`,`ASIA/MACAU`,`ASIA/HONG_KONG`,`ASIA/MACAO`,`ASIA/BEIJING`,`ASIA/HARBIN`],WC_COINBASE_PAY_SDK_CHAINS:[`ethereum`,`arbitrum`,`polygon`,`avalanche-c-chain`,`optimism`,`celo`,`base`],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:`ethereum`,WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:`ethereum`,"Arbitrum One":`arbitrum`,Polygon:`polygon`,Avalanche:`avalanche-c-chain`,"OP Mainnet":`optimism`,Celo:`celo`,Base:`base`},WC_COINBASE_ONRAMP_APP_ID:`bf18c88d-495a-463b-b249-0b9d3656cf5e`,SWAP_SUGGESTED_TOKENS:`ETH.UNI.1INCH.AAVE.SOL.ADA.AVAX.DOT.LINK.NITRO.GAIA.MILK.TRX.NEAR.GNO.WBTC.DAI.WETH.USDC.USDT.ARB.BAL.BICO.CRV.ENS.MATIC.OP`.split(`.`),SWAP_POPULAR_TOKENS:`ETH.UNI.1INCH.AAVE.SOL.ADA.AVAX.DOT.LINK.NITRO.GAIA.MILK.TRX.NEAR.GNO.WBTC.DAI.WETH.USDC.USDT.ARB.BAL.BICO.CRV.ENS.MATIC.OP.METAL.DAI.CHAMP.WOLF.SALE.BAL.BUSD.MUST.BTCpx.ROUTE.HEX.WELT.amDAI.VSQ.VISION.AURUM.pSP.SNX.VC.LINK.CHP.amUSDT.SPHERE.FOX.GIDDY.GFC.OMEN.OX_OLD.DE.WNT`.split(`.`),SWAP_SUPPORTED_NETWORKS:[`eip155:1`,`eip155:42161`,`eip155:10`,`eip155:324`,`eip155:8453`,`eip155:56`,`eip155:137`,`eip155:100`,`eip155:43114`,`eip155:250`,`eip155:8217`,`eip155:1313161554`],NATIVE_TOKEN_ADDRESS:{evm:`0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`,solana:`So11111111111111111111111111111111111111111`},CONVERT_SLIPPAGE_TOLERANCE:1,DEFAULT_FEATURES:{swaps:!0,onramp:!0,analytics:!0,allWallets:`SHOW`,disableAppend:!1,enableEIP6963:!1}},Qe={isMobile(){return typeof window<`u`?!!(window.matchMedia(`(pointer:coarse)`).matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(e,t=``){return e==null?void 0:e.id.toLocaleLowerCase().includes(t.toLowerCase())},isAndroid(){let e=window.navigator.userAgent.toLowerCase();return Qe.isMobile()&&e.includes(`android`)},isIos(){let e=window.navigator.userAgent.toLowerCase();return Qe.isMobile()&&(e.includes(`iphone`)||e.includes(`ipad`))},isClient(){return typeof window<`u`},isPairingExpired(e){return e?e-Date.now()<=Ze.TEN_SEC_MS:!0},isAllowedRetry(e){return Date.now()-e>=Ze.ONE_SEC_MS},copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry(){return Date.now()+Ze.FOUR_MINUTES_MS},getNetworkId(e){return e==null?void 0:e.split(`:`)[1]},getPlainAddress(e){return e==null?void 0:e.split(`:`)[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let n;return(...r)=>{function i(){e(...r)}n&&clearTimeout(n),n=setTimeout(i,t)}},isHttpUrl(e){return e.startsWith(`http://`)||e.startsWith(`https://`)},formatNativeUrl(e,t){if(Qe.isHttpUrl(e))return this.formatUniversalUrl(e,t);let n=e;return n.includes(`://`)||(n=e.replaceAll(`/`,``).replaceAll(`:`,``),n=`${n}://`),n.endsWith(`/`)||(n=`${n}/`),{redirect:`${n}wc?uri=${encodeURIComponent(t)}`,href:n}},formatUniversalUrl(e,t){if(!Qe.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;return n.endsWith(`/`)||(n=`${n}/`),{redirect:`${n}wc?uri=${encodeURIComponent(t)}`,href:n}},openHref(e,t,n){window.open(e,t,n||`noreferrer noopener`)},returnOpenHref(e,t,n){return window.open(e,t,n||`noreferrer noopener`)},async preloadImage(e){let t=new Promise((t,n)=>{let r=new Image;r.onload=t,r.onerror=n,r.crossOrigin=`anonymous`,r.src=e});return Promise.race([t,Qe.wait(2e3)])},formatBalance(e,t){let n=`0.000`;if(typeof e==`string`){let t=Number(e);if(t){let e=Math.floor(t*1e3)/1e3;e&&(n=e.toString())}}return`${n}${t?` ${t}`:``}`},formatBalance2(e,t){let n;if(e===`0`)n=`0`;else if(typeof e==`string`){let t=Number(e);if(t){var r;n=(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0]}}return{value:n??`0`,rest:n===`0`?`000`:``,symbol:t}},getApiUrl(){return Ke.W3M_API_URL},getBlockchainApiUrl(){return Ke.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return Ke.PULSE_API_URL},getUUID(){var e;return(e=crypto)!=null&&e.randomUUID?crypto.randomUUID():`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/gu,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})},parseError(e){var t;return typeof e==`string`?e:typeof(e==null||(t=e.issues)==null||(t=t[0])==null?void 0:t.message)==`string`?e.issues[0].message:e instanceof Error?e.message:`Unknown error`},sortRequestedNetworks(e,t=[]){let n={};return t&&e&&(e.forEach((e,t)=>{n[e]=t}),t.sort((e,t)=>{let r=n[e.id],i=n[t.id];return r!==void 0&&i!==void 0?r-i:r===void 0?i===void 0?0:1:-1})),t},calculateBalance(e){let t=0;for(let n of e)t+=n.value??0;return t},formatTokenBalance(e){let[t,n]=e.toFixed(2).split(`.`);return{dollars:t,pennies:n}},isAddress(e,t=`evm`){switch(t){case`evm`:return/^(?:0x)?[0-9a-f]{40}$/iu.test(e)?!!(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e)):!1;case`solana`:return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);default:return!1}},uniqueBy(e,t){let n=new Set;return e.filter(e=>{let r=e[t];return n.has(r)?!1:(n.add(r),!0)})}};async function $e(...e){let t=await fetch(...e);if(!t.ok)throw Error(`HTTP status code: ${t.status}`,{cause:t});return t}var et=class{constructor({baseUrl:e,clientId:t}){this.baseUrl=e,this.clientId=t}async get({headers:e,signal:t,cache:n,...r}){return(await $e(this.createUrl(r),{method:`GET`,headers:e,signal:t,cache:n})).json()}async getBlob({headers:e,signal:t,...n}){return(await $e(this.createUrl(n),{method:`GET`,headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:n,...r}){return(await $e(this.createUrl(r),{method:`POST`,headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}async put({body:e,headers:t,signal:n,...r}){return(await $e(this.createUrl(r),{method:`PUT`,headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}async delete({body:e,headers:t,signal:n,...r}){return(await $e(this.createUrl(r),{method:`DELETE`,headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}createUrl({path:e,params:t}){let n=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&n.searchParams.append(e,t)}),this.clientId&&n.searchParams.append(`clientId`,this.clientId),n}},tt=`WALLETCONNECT_DEEPLINK_CHOICE`,nt=`@w3m/recent`,rt=`@w3m/connected_connector`,it=`@w3m/connected_social`,at=`@w3m-storage/SOCIAL_USERNAME`,ot={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(tt,JSON.stringify({href:e,name:t}))}catch{console.info(`Unable to set WalletConnect deep link`)}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(tt);if(e)return JSON.parse(e)}catch{console.info(`Unable to get WalletConnect deep link`)}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(tt)}catch{console.info(`Unable to delete WalletConnect deep link`)}},setWeb3ModalRecent(e){try{let t=ot.getRecentWallets();t.find(t=>t.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(nt,JSON.stringify(t)))}catch{console.info(`Unable to set Web3Modal recent`)}},getRecentWallets(){try{let e=localStorage.getItem(nt);return e?JSON.parse(e):[]}catch{console.info(`Unable to get Web3Modal recent`)}return[]},setConnectedConnector(e){try{localStorage.setItem(rt,e)}catch{console.info(`Unable to set Connected Connector`)}},getConnectedConnector(){try{return localStorage.getItem(rt)}catch{console.info(`Unable to get Connected Connector`)}},setConnectedSocialProvider(e){try{localStorage.setItem(it,e)}catch{console.info(`Unable to set Connected Social Provider`)}},getConnectedSocialProvider(){try{return localStorage.getItem(it)}catch{console.info(`Unable to get Connected Social Provider`)}},getConnectedSocialUsername(){try{return localStorage.getItem(at)}catch{console.info(`Unable to get Connected Social Username`)}}},st=ce({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),ct={state:st,subscribeNetworkImages(e){return le(st.networkImages,()=>e(st.networkImages))},subscribeKey(e,t){return T(st,e,t)},subscribe(e){return le(st,()=>e(st))},setWalletImage(e,t){st.walletImages[e]=t},setNetworkImage(e,t){st.networkImages[e]=t},setChainImage(e,t){st.chainImages[e]=t},setConnectorImage(e,t){st.connectorImages[e]=t},setTokenImage(e,t){st.tokenImages[e]=t},setCurrencyImage(e,t){st.currencyImages[e]=t}},lt=ce({themeMode:`dark`,themeVariables:{},w3mThemeVariables:void 0}),ut={state:lt,subscribe(e){return le(lt,()=>e(lt))},setThemeMode(e){lt.themeMode=e;try{let t=ft.getAuthConnector();if(t){let n=ut.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:n,w3mThemeVariables:qe(n,e)})}}catch{console.info(`Unable to sync theme to auth connector`)}},setThemeVariables(e){lt.themeVariables={...lt.themeVariables,...e};try{let e=ft.getAuthConnector();if(e){let t=ut.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:t,w3mThemeVariables:qe(lt.themeVariables,lt.themeMode)})}}catch{console.info(`Unable to sync theme to auth connector`)}},getSnapshot(){return ue(lt)}},dt=ce({unMergedConnectors:[],connectors:[]}),ft={state:dt,subscribeKey(e,t){return T(dt,e,t)},setConnectors(e){e.forEach(this.syncIfAuthConnector),dt.unMergedConnectors=[...dt.unMergedConnectors,...e].filter(e=>{try{if(!ce(e))throw Error(`Connector is not available`);return!0}catch(t){return console.error(`ConnectorController.setConnectors: Not possible to add connector`,{connector:e,error:t}),!1}}),dt.connectors=this.mergeMultiChainConnectors(dt.unMergedConnectors)},mergeMultiChainConnectors(e){let t=this.generateConnectorMapByName(e);return Array.from(t.values()).map(e=>{if(e.length>1){var t,n,r;return{name:(t=e[0])==null?void 0:t.name,imageUrl:(n=e[0])==null?void 0:n.imageUrl,imageId:(r=e[0])==null?void 0:r.imageId,providers:this.getUniqueConnectorsByName(e),type:`MULTI_CHAIN`}}return e[0]})},generateConnectorMapByName(e){let t=new Map;return e.forEach(e=>{let{name:n}=e;if(!n)return;let r=t.get(n)||[];r.find(t=>t.chain===e.chain)||r.push(e),t.set(n,r)}),t},getUniqueConnectorsByName(e){let t=[];return e.forEach(e=>{t.find(t=>t.chain===e.chain)||t.push({...e,name:Ke.CHAIN_NAME_MAP[e.chain]})}),t},addConnector(e){this.setConnectors([e])},getAuthConnector(){return dt.connectors.find(e=>e.type===`AUTH`)},getAnnouncedConnectorRdns(){return dt.connectors.filter(e=>e.type===`ANNOUNCED`).map(e=>{var t;return(t=e.info)==null?void 0:t.rdns})},getConnectors(){return dt.connectors},getConnector(e,t){return dt.connectors.find(n=>{var r;return n.explorerId===e||((r=n.info)==null?void 0:r.rdns)===t})},syncIfAuthConnector(e){var t,n;if(e.id!==`w3mAuth`)return;let r=e,i=ue(M.state),a=ut.getSnapshot().themeMode,o=ut.getSnapshot().themeVariables;r==null||(t=r.provider)==null||(n=t.syncDappData)==null||n.call(t,{metadata:i.metadata,sdkVersion:i.sdkVersion,projectId:i.projectId}),r.provider.syncTheme({themeMode:a,themeVariables:o,w3mThemeVariables:qe(o,a)})}},pt=new et({baseUrl:Qe.getAnalyticsUrl(),clientId:null}),mt=[`MODAL_CREATED`],ht=ce({timestamp:Date.now(),data:{type:`track`,event:`MODAL_CREATED`}}),gt={state:ht,subscribe(e){return le(ht,()=>e(ht))},_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:n}=M.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _sendAnalyticsEvent(e){try{if(mt.includes(e.data.event)||typeof window>`u`)return;await pt.post({path:`/e`,headers:gt._getApiHeaders(),body:{eventId:Qe.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){ht.timestamp=Date.now(),ht.data=e,M.state.enableAnalytics&&gt._sendAnalyticsEvent(ht)}},_t=ce({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0}),vt={state:_t,subscribe(e){return le(_t,()=>e(_t))},set(e){Object.assign(_t,{..._t,...e})}},yt={isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]},bt={supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]},O=ce({chains:fe(),activeChain:void 0,activeCaipNetwork:void 0}),k={state:O,subscribeKey(e,t){return T(O,e,t)},subscribeChain(e){let t;return le(O.chains,()=>{let n=O.activeChain;if(n){let r=O.chains.get(n);(!t||t!==r)&&(t=r,e(r))}})},subscribeChainProp(e,t){let n;return le(O.chains,()=>{let r=O.activeChain;if(r){var i;let a=(i=O.chains.get(r))==null?void 0:i[e];n!==a&&(n=a,t(a))}})},initialize(e){let t=e==null?void 0:e[0];if(!t)throw Error(`Adapter is required to initialize ChainController`);O.activeChain=t.chain,vt.set({activeChain:t.chain}),this.setActiveCaipNetwork(t.defaultChain),e.forEach(e=>{O.chains.set(e.chain,{chain:e.chain,connectionControllerClient:e.connectionControllerClient,networkControllerClient:e.networkControllerClient,accountState:yt,networkState:bt})})},setChainNetworkData(e,t,n=!1){if(!e)throw Error(`Chain is required to update chain network data`);let r=O.chains.get(e);r&&(r.networkState=de({...r.networkState,...t}),O.chains.set(e,de(r)),(n||O.chains.size===1||O.activeChain===e)&&A.replaceState(r.networkState))},setChainAccountData(e,t,n=!0){if(!e)throw Error(`Chain is required to update chain account data`);let r=O.chains.get(e);r&&(r.accountState=de({...r.accountState,...t}),O.chains.set(e,r),(n||O.chains.size===1||O.activeChain===e)&&J.replaceState(r.accountState))},setAccountProp(e,t,n){this.setChainAccountData(n,{[e]:t})},setActiveChain(e){let t=e?O.chains.get(e):void 0;if(t&&t.chain!==O.activeChain){var n,r,i,a;O.activeChain=t.chain,O.activeCaipNetwork=(n=t.networkState)!=null&&n.caipNetwork?de((r=t.networkState)==null?void 0:r.caipNetwork):void 0,J.replaceState(t.accountState),A.replaceState(t.networkState),this.setCaipNetwork(t.chain,(i=t.networkState)==null?void 0:i.caipNetwork),vt.set({activeChain:e,selectedNetworkId:(a=t.networkState)==null||(a=a.caipNetwork)==null?void 0:a.id})}},setActiveCaipNetwork(e){e&&(e.chain!==O.activeChain&&this.setActiveChain(e.chain),O.activeCaipNetwork=de(e),O.activeChain=e.chain,this.setCaipNetwork(e.chain,e,!0),vt.set({activeChain:e.chain,selectedNetworkId:e==null?void 0:e.id}))},setCaipNetwork(e,t,n=!1){this.setChainNetworkData(e,{caipNetwork:t},n)},setActiveConnector(e){e&&(O.activeConnector=de(e))},getNetworkControllerClient(){let e=O.activeChain;if(!e)throw Error(`Chain is required to get network controller client`);let t=O.chains.get(e);if(!t)throw Error(`Chain adapter not found`);if(!t.networkControllerClient)throw Error(`NetworkController client not set`);return t.networkControllerClient},getConnectionControllerClient(e){let t=e||O.activeChain;if(!t)throw Error(`Chain is required to get connection controller client`);let n=O.chains.get(t);if(!n)throw Error(`Chain adapter not found`);if(!n.connectionControllerClient)throw Error(`ConnectionController client not set`);return n.connectionControllerClient},getAccountProp(e,t){var n;let r=O.activeChain;if(t&&(r=t),!r)return;let i=(n=O.chains.get(r))==null?void 0:n.accountState;if(i)return i[e]},getNetworkProp(e){var t;let n=O.activeChain;if(!n)return;let r=(t=O.chains.get(n))==null?void 0:t.networkState;if(r)return r[e]},resetAccount(e){let t=e;if(!t)throw Error(`Chain is required to set account prop`);this.setChainAccountData(t,de({isConnected:!1,smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0}))}},xt=ce({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),A={state:xt,replaceState(e){e&&Object.assign(xt,de(e))},subscribeKey(e,t){let n;return k.subscribeChainProp(`networkState`,r=>{if(r){let i=r[e];n!==i&&(n=i,t(i))}})},_getClient(){return k.getNetworkControllerClient()},initializeDefaultNetwork(){let e=this.getRequestedCaipNetworks();e.length>0&&this.setCaipNetwork(e[0])},setDefaultCaipNetwork(e){e&&(k.setCaipNetwork(e.chain,e,!0),k.setChainNetworkData(e.chain,{isDefaultCaipNetwork:!0}),vt.set({selectedNetworkId:e.id}))},setActiveCaipNetwork(e){var t;e&&(k.setActiveCaipNetwork(e),k.setChainNetworkData(e.chain,{caipNetwork:e}),vt.set({activeChain:e.chain,selectedNetworkId:e==null?void 0:e.id}),!((t=k.state.chains.get(e.chain))==null||(t=t.networkState)==null)&&t.allowUnsupportedChain||this.checkIfSupportedNetwork()||this.showUnsupportedChainUI())},setCaipNetwork(e){var t;if(e){if(!(e!=null&&e.chain))throw Error(`chain is required to set active network`);k.setCaipNetwork(e==null?void 0:e.chain,e),!((t=k.state.chains.get(e.chain))==null||(t=t.networkState)==null)&&t.allowUnsupportedChain||this.checkIfSupportedNetwork()||this.showUnsupportedChainUI()}},setRequestedCaipNetworks(e,t){k.setChainNetworkData(t,{requestedCaipNetworks:e})},setAllowUnsupportedChain(e,t){k.setChainNetworkData(t||k.state.activeChain,{allowUnsupportedChain:e})},setSmartAccountEnabledNetworks(e,t){k.setChainNetworkData(t,{smartAccountEnabledNetworks:e})},getRequestedCaipNetworks(e){let t;if(!k.state.activeChain)throw Error(`activeChain is required to get requested networks`);if(e){let n=e;if(!n)throw Error(`chain is required to get requested networks`);t=[n]}else t=[...k.state.chains.keys()];let n=[],r=[];return t.forEach(e=>{var t,i;if(!((t=k.state.chains.get(e))==null||(t=t.networkState)==null)&&t.approvedCaipNetworkIds){var a;n.push(...((a=k.state.chains.get(e))==null||(a=a.networkState)==null?void 0:a.approvedCaipNetworkIds)||[])}if(!((i=k.state.chains.get(e))==null||(i=i.networkState)==null)&&i.requestedCaipNetworks){var o;r.push(...((o=k.state.chains.get(e))==null||(o=o.networkState)==null?void 0:o.requestedCaipNetworks)||[])}}),Qe.sortRequestedNetworks(n,r)},async switchActiveNetwork(e){var t;let n=e?(t=k.state.chains.get(e.chain))==null?void 0:t.networkControllerClient:void 0;if(!n)throw Error(`networkControllerClient not found for given network object`);k.setActiveCaipNetwork(e),await(n==null?void 0:n.switchCaipNetwork(e)),e&&gt.sendEvent({type:`track`,event:`SWITCH_NETWORK`,properties:{network:e.id}})},getApprovedCaipNetworkIds(e){if(e){var t;let n=e;if(!n)throw Error(`chain is required to get approved network IDs`);return(t=k.state.chains.get(n))==null||(t=t.networkState)==null?void 0:t.approvedCaipNetworkIds}let n=[];return Object.values(k.state.chains).forEach(e=>{if(e.networkState.approvedCaipNetworkIds){var t;n.push(...((t=e.networkState)==null?void 0:t.approvedCaipNetworkIds)||[])}}),n},async setApprovedCaipNetworksData(e){let t=await k.getNetworkControllerClient().getApprovedCaipNetworksData();if(!e)throw Error(`chain is required to set approved network data`);k.setChainNetworkData(e,{approvedCaipNetworkIds:t==null?void 0:t.approvedCaipNetworkIds,supportsAllNetworks:(t==null?void 0:t.supportsAllNetworks)||!1})},checkIfSupportedNetwork(){var e;let t=k.state.activeChain;if(!t)return!1;let n=(e=k.state.chains.get(t))==null||(e=e.networkState)==null?void 0:e.caipNetwork,r=this.getRequestedCaipNetworks();return r.length?r==null?void 0:r.some(e=>e.id===(n==null?void 0:n.id)):!0},checkIfSmartAccountEnabled(){var e;let t=Ce.caipNetworkIdToNumber((e=xt.caipNetwork)==null?void 0:e.id);if(!k.state.activeChain)throw Error(`activeChain is required to check if smart account is enabled`);if(!t)return!1;let n=k.getNetworkProp(`smartAccountEnabledNetworks`);return!!(n!=null&&n.includes(t))},checkIfNamesSupported(){var e;let t=k.state.activeChain;if(!t)return!1;let n=(e=k.state.chains.get(t))==null||(e=e.networkState)==null?void 0:e.caipNetwork;return(n==null?void 0:n.chain)===Ke.CHAIN.EVM},resetNetwork(){let e=k.state.activeChain;if(!e)throw Error(`chain is required to reset network`);k.setChainNetworkData(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},getSupportsAllNetworks(){var e;let t=k.state.activeChain;if(!t)throw Error(`chain is required to check if network supports all networks`);return(e=k.state.chains.get(t))==null||(e=e.networkState)==null?void 0:e.supportsAllNetworks},showUnsupportedChainUI(){setTimeout(()=>{Ca.open({view:`UnsupportedChain`})},300)},getActiveNetworkTokenAddress(){var e,t;let n=Ze.NATIVE_TOKEN_ADDRESS[((e=this.state.caipNetwork)==null?void 0:e.chain)||`evm`];return`${((t=this.state.caipNetwork)==null?void 0:t.id)||`eip155:1`}:${n}`}},St=new et({baseUrl:Qe.getApiUrl(),clientId:null}),Ct=`40`,wt=`4`,Tt=20,Et=ce({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedRDNS:[]}),j={state:Et,subscribeKey(e,t){return T(Et,e,t)},_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:n}=M.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},_filterOutExtensions(e){return M.state.isUniversalProvider?e.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):e},async _fetchWalletImage(e){let t=`${St.baseUrl}/getWalletImage/${e}`,n=await St.getBlob({path:t,headers:j._getApiHeaders()});ct.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){let t=`${St.baseUrl}/public/getAssetImage/${e}`,n=await St.getBlob({path:t,headers:j._getApiHeaders()});ct.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){let t=`${St.baseUrl}/public/getAssetImage/${e}`,n=await St.getBlob({path:t,headers:j._getApiHeaders()});ct.setConnectorImage(e,URL.createObjectURL(n))},async _fetchCurrencyImage(e){let t=`${St.baseUrl}/public/getCurrencyImage/${e}`,n=await St.getBlob({path:t,headers:j._getApiHeaders()});ct.setCurrencyImage(e,URL.createObjectURL(n))},async _fetchTokenImage(e){let t=`${St.baseUrl}/public/getTokenImage/${e}`,n=await St.getBlob({path:t,headers:j._getApiHeaders()});ct.setTokenImage(e,URL.createObjectURL(n))},async fetchNetworkImages(){let e=A.getRequestedCaipNetworks(),t=e==null?void 0:e.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>j._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=ft.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>j._fetchConnectorImage(e)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(e=>j._fetchCurrencyImage(e)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(e=>j._fetchTokenImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=M.state;if(e!=null&&e.length){let{data:t}=await St.get({path:`/getWallets`,headers:j._getApiHeaders(),params:{page:`1`,entries:e!=null&&e.length?String(e.length):wt,include:e==null?void 0:e.join(`,`)}});t.sort((t,n)=>e.indexOf(t.id)-e.indexOf(n.id));let n=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(n.map(e=>j._fetchWalletImage(e))),Et.featured=t}},async fetchRecommendedWallets(){var e;let{includeWalletIds:t,excludeWalletIds:n,featuredWalletIds:r}=M.state,i=[...n??[],...r??[]].filter(Boolean),{data:a,count:o}=await St.get({path:`/getWallets`,headers:j._getApiHeaders(),params:{page:`1`,chains:(e=A.state.caipNetwork)==null?void 0:e.id,entries:wt,include:t==null?void 0:t.join(`,`),exclude:i==null?void 0:i.join(`,`)}}),s=ot.getRecentWallets(),c=a.map(e=>e.image_id).filter(Boolean),l=s.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...c,...l].map(e=>j._fetchWalletImage(e))),Et.recommended=a,Et.count=o??0},async fetchWallets({page:e}){var t;let{includeWalletIds:n,excludeWalletIds:r,featuredWalletIds:i}=M.state,a=[...Et.recommended.map(({id:e})=>e),...r??[],...i??[]].filter(Boolean),{data:o,count:s}=await St.get({path:`/getWallets`,headers:j._getApiHeaders(),params:{page:String(e),entries:Ct,chains:(t=A.state.caipNetwork)==null?void 0:t.id,include:n==null?void 0:n.join(`,`),exclude:a.join(`,`)}}),c=o.slice(0,Tt).map(e=>e.image_id).filter(Boolean);await Promise.allSettled(c.map(e=>j._fetchWalletImage(e))),Et.wallets=Qe.uniqueBy([...Et.wallets,...j._filterOutExtensions(o)],`id`),Et.count=s>Et.count?s:Et.count,Et.page=e},async searchWalletByIds({ids:e}){var t;let{data:n}=await St.get({path:`/getWallets`,headers:j._getApiHeaders(),params:{page:`1`,entries:String(e.length),chains:(t=A.state.caipNetwork)==null?void 0:t.id,include:e==null?void 0:e.join(`,`)}});n&&n.forEach(e=>{e!=null&&e.rdns&&Et.excludedRDNS.push(e.rdns)})},async searchWallet({search:e}){var t;let{includeWalletIds:n,excludeWalletIds:r}=M.state;Et.search=[];let{data:i}=await St.get({path:`/getWallets`,headers:j._getApiHeaders(),params:{page:`1`,entries:`100`,search:e==null?void 0:e.trim(),chains:(t=A.state.caipNetwork)==null?void 0:t.id,include:n==null?void 0:n.join(`,`),exclude:r==null?void 0:r.join(`,`)}}),a=i.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...a.map(e=>j._fetchWalletImage(e)),Qe.wait(300)]),Et.search=j._filterOutExtensions(i)},async reFetchWallets(){Et.page=1,Et.wallets=[],await j.fetchFeaturedWallets(),await j.fetchRecommendedWallets()},prefetch(){let e=[j.fetchFeaturedWallets(),j.fetchRecommendedWallets(),j.fetchNetworkImages(),j.fetchConnectorImages()];M.state.enableAnalytics&&e.push(j.fetchAnalyticsConfig()),Et.prefetchPromise=Promise.race([Promise.allSettled(e)])},async fetchAnalyticsConfig(){let{isAnalyticsEnabled:e}=await St.get({path:`/getAnalyticsConfig`,headers:j._getApiHeaders()});M.setEnableAnalytics(e)}},Dt=ce({projectId:``,sdkType:`w3m`,sdkVersion:`html-wagmi-undefined`,enableAnalytics:Ze.DEFAULT_FEATURES.analytics,enableOnramp:Ze.DEFAULT_FEATURES.onramp,enableSwaps:Ze.DEFAULT_FEATURES.swaps,allWallets:Ze.DEFAULT_FEATURES.allWallets,disableAppend:Ze.DEFAULT_FEATURES.disableAppend,enableEIP6963:Ze.DEFAULT_FEATURES.enableEIP6963}),M={state:Dt,subscribeKey(e,t){return T(Dt,e,t)},setOptions(e){Object.assign(Dt,e)},setProjectId(e){Dt.projectId=e},setAllWallets(e=Ze.DEFAULT_FEATURES.allWallets){Dt.allWallets=e},setIncludeWalletIds(e){Dt.includeWalletIds=e},setExcludeWalletIds(e){Dt.excludeWalletIds=e,e&&j.searchWalletByIds({ids:e})},setFeaturedWalletIds(e){Dt.featuredWalletIds=e},setTokens(e){Dt.tokens=e},setTermsConditionsUrl(e){Dt.termsConditionsUrl=e},setPrivacyPolicyUrl(e){Dt.privacyPolicyUrl=e},setCustomWallets(e){Dt.customWallets=e},setIsSiweEnabled(e){Dt.isSiweEnabled=e},setIsUniversalProvider(e){Dt.isUniversalProvider=e},setEnableAnalytics(e=Ze.DEFAULT_FEATURES.analytics){Dt.enableAnalytics=e},setSdkVersion(e){Dt.sdkVersion=e},setMetadata(e){Dt.metadata=e},setOnrampEnabled(e=Ze.DEFAULT_FEATURES.onramp){Dt.enableOnramp=e},setDisableAppend(e=Ze.DEFAULT_FEATURES.disableAppend){Dt.disableAppend=e},setEIP6963Enabled(e=Ze.DEFAULT_FEATURES.enableEIP6963){Dt.enableEIP6963=e},setHasMultipleAddresses(e){Dt.hasMultipleAddresses=e},setEnableSwaps(e=Ze.DEFAULT_FEATURES.swaps){Dt.enableSwaps=e}},Ot={purchaseCurrencies:[{id:`2b92315d-eab7-5bef-84fa-089a131333f5`,name:`USD Coin`,symbol:`USDC`,networks:[{name:`ethereum-mainnet`,display_name:`Ethereum`,chain_id:`1`,contract_address:`0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`},{name:`polygon-mainnet`,display_name:`Polygon`,chain_id:`137`,contract_address:`0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174`}]},{id:`2b92315d-eab7-5bef-84fa-089a131333f5`,name:`Ether`,symbol:`ETH`,networks:[{name:`ethereum-mainnet`,display_name:`Ethereum`,chain_id:`1`,contract_address:`0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`},{name:`polygon-mainnet`,display_name:`Polygon`,chain_id:`137`,contract_address:`0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174`}]}],paymentCurrencies:[{id:`USD`,payment_method_limits:[{id:`card`,min:`10.00`,max:`7500.00`},{id:`ach_bank_account`,min:`10.00`,max:`25000.00`}]},{id:`EUR`,payment_method_limits:[{id:`card`,min:`10.00`,max:`7500.00`},{id:`ach_bank_account`,min:`10.00`,max:`25000.00`}]}]},kt=Qe.getBlockchainApiUrl(),At=ce({clientId:null,api:new et({baseUrl:kt,clientId:null})}),jt={state:At,fetchIdentity({address:e}){return At.api.get({path:`/v1/identity/${e}`,params:{projectId:M.state.projectId,sender:J.state.address}})},fetchTransactions({account:e,projectId:t,cursor:n,onramp:r,signal:i,cache:a,chainId:o}){return At.api.get({path:`/v1/account/${e}/history`,params:{projectId:t,cursor:n,onramp:r,chainId:o},signal:i,cache:a})},fetchSwapQuote({projectId:e,amount:t,userAddress:n,from:r,to:i,gasPrice:a}){return At.api.get({path:`/v1/convert/quotes`,headers:{"Content-Type":`application/json`},params:{projectId:e,amount:t,userAddress:n,from:r,to:i,gasPrice:a}})},fetchSwapTokens({projectId:e,chainId:t}){return At.api.get({path:`/v1/convert/tokens`,params:{projectId:e,chainId:t}})},fetchTokenPrice({projectId:e,addresses:t}){return At.api.post({path:`/v1/fungible/price`,body:{projectId:e,currency:`usd`,addresses:t},headers:{"Content-Type":`application/json`}})},fetchSwapAllowance({projectId:e,tokenAddress:t,userAddress:n}){let{sdkType:r,sdkVersion:i}=M.state;return At.api.get({path:`/v1/convert/allowance`,params:{projectId:e,tokenAddress:t,userAddress:n},headers:{"Content-Type":`application/json`,"x-sdk-type":r,"x-sdk-version":i}})},fetchGasPrice({projectId:e,chainId:t}){let{sdkType:n,sdkVersion:r}=M.state;return At.api.get({path:`/v1/convert/gas-price`,headers:{"Content-Type":`application/json`,"x-sdk-type":n,"x-sdk-version":r},params:{projectId:e,chainId:t}})},generateSwapCalldata({amount:e,from:t,projectId:n,to:r,userAddress:i}){return At.api.post({path:`/v1/convert/build-transaction`,headers:{"Content-Type":`application/json`},body:{amount:e,eip155:{slippage:Ze.CONVERT_SLIPPAGE_TOLERANCE},from:t,projectId:n,to:r,userAddress:i}})},generateApproveCalldata({from:e,projectId:t,to:n,userAddress:r}){let{sdkType:i,sdkVersion:a}=M.state;return At.api.get({path:`/v1/convert/build-approve`,headers:{"Content-Type":`application/json`,"x-sdk-type":i,"x-sdk-version":a},params:{projectId:t,userAddress:r,from:e,to:n}})},async getBalance(e,t,n){let{sdkType:r,sdkVersion:i}=M.state;return At.api.get({path:`/v1/account/${e}/balance`,headers:{"x-sdk-type":r,"x-sdk-version":i},params:{currency:`usd`,projectId:M.state.projectId,chainId:t,forceUpdate:n}})},async lookupEnsName(e){return At.api.get({path:`/v1/profile/account/${e}${Ke.WC_NAME_SUFFIX}`,params:{projectId:M.state.projectId,apiVersion:`2`}})},async reverseLookupEnsName({address:e}){return At.api.get({path:`/v1/profile/reverse/${e}`,params:{sender:J.state.address,projectId:M.state.projectId,apiVersion:`2`}})},async getEnsNameSuggestions(e){return At.api.get({path:`/v1/profile/suggestions/${e}`,params:{projectId:M.state.projectId}})},async registerEnsName({coinType:e,address:t,message:n,signature:r}){return At.api.post({path:`/v1/profile/account`,body:{coin_type:e,address:t,message:n,signature:r},headers:{"Content-Type":`application/json`}})},async generateOnRampURL({destinationWallets:e,partnerUserId:t,defaultNetwork:n,purchaseAmount:r,paymentAmount:i}){return(await At.api.post({path:`/v1/generators/onrampurl`,params:{projectId:M.state.projectId},body:{destinationWallets:e,defaultNetwork:n,partnerUserId:t,defaultExperience:`buy`,presetCryptoAmount:r,presetFiatAmount:i}})).url},async getOnrampOptions(){try{return await At.api.get({path:`/v1/onramp/options`,params:{projectId:M.state.projectId}})}catch{return Ot}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:n,network:r}){try{return await At.api.post({path:`/v1/onramp/quote`,params:{projectId:M.state.projectId},body:{purchaseCurrency:e,paymentCurrency:t,amount:n,network:r}})}catch{return{coinbaseFee:{amount:n,currency:t.id},networkFee:{amount:n,currency:t.id},paymentSubtotal:{amount:n,currency:t.id},paymentTotal:{amount:n,currency:t.id},purchaseAmount:{amount:n,currency:t.id},quoteId:`mocked-quote-id`}}},setClientId(e){At.clientId=e,At.api=new et({baseUrl:kt,clientId:e})}},Mt=ce({message:``,variant:`success`,open:!1}),Nt={state:Mt,subscribeKey(e,t){return T(Mt,e,t)},showLoading(e){Mt.message=e,Mt.variant=`loading`,Mt.open=!0},showSuccess(e){Mt.message=e,Mt.variant=`success`,Mt.open=!0},showError(e){Mt.message=Qe.parseError(e),Mt.variant=`error`,Mt.open=!0},hide(){Mt.open=!1}},Pt=t((e=>{e.byteLength=c,e.toByteArray=u,e.fromByteArray=p;for(var t=[],n=[],r=typeof Uint8Array<`u`?Uint8Array:Array,i=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,a=0,o=i.length;a<o;++a)t[a]=i[a],n[i.charCodeAt(a)]=a;n[45]=62,n[95]=63;function s(e){var t=e.length;if(t%4>0)throw Error(`Invalid string. Length must be a multiple of 4`);var n=e.indexOf(`=`);n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function c(e){var t=s(e),n=t[0],r=t[1];return(n+r)*3/4-r}function l(e,t,n){return(t+n)*3/4-n}function u(e){var t,i=s(e),a=i[0],o=i[1],c=new r(l(e,a,o)),u=0,d=o>0?a-4:a,f;for(f=0;f<d;f+=4)t=n[e.charCodeAt(f)]<<18|n[e.charCodeAt(f+1)]<<12|n[e.charCodeAt(f+2)]<<6|n[e.charCodeAt(f+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=t&255;return o===2&&(t=n[e.charCodeAt(f)]<<2|n[e.charCodeAt(f+1)]>>4,c[u++]=t&255),o===1&&(t=n[e.charCodeAt(f)]<<10|n[e.charCodeAt(f+1)]<<4|n[e.charCodeAt(f+2)]>>2,c[u++]=t>>8&255,c[u++]=t&255),c}function d(e){return t[e>>18&63]+t[e>>12&63]+t[e>>6&63]+t[e&63]}function f(e,t,n){for(var r,i=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(e[a+2]&255),i.push(d(r));return i.join(``)}function p(e){for(var n,r=e.length,i=r%3,a=[],o=16383,s=0,c=r-i;s<c;s+=o)a.push(f(e,s,s+o>c?c:s+o));return i===1?(n=e[r-1],a.push(t[n>>2]+t[n<<4&63]+`==`)):i===2&&(n=(e[r-2]<<8)+e[r-1],a.push(t[n>>10]+t[n>>4&63]+t[n<<2&63]+`=`)),a.join(``)}})),Ft=t((e=>{e.read=function(e,t,n,r,i){var a,o,s=i*8-r-1,c=(1<<s)-1,l=c>>1,u=-7,d=n?i-1:0,f=n?-1:1,p=e[t+d];for(d+=f,a=p&(1<<-u)-1,p>>=-u,u+=s;u>0;a=a*256+e[t+d],d+=f,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=r;u>0;o=o*256+e[t+d],d+=f,u-=8);if(a===0)a=1-l;else if(a===c)return o?NaN:(p?-1:1)*(1/0);else o+=2**r,a-=l;return(p?-1:1)*o*2**(a-r)},e.write=function(e,t,n,r,i,a){var o,s,c,l=a*8-i-1,u=(1<<l)-1,d=u>>1,f=i===23?2**-24-2**-77:0,p=r?0:a-1,m=r?1:-1,h=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=2**-o)<1&&(o--,c*=2),o+d>=1?t+=f/c:t+=f*2**(1-d),t*c>=2&&(o++,c/=2),o+d>=u?(s=0,o=u):o+d>=1?(s=(t*c-1)*2**i,o+=d):(s=t*2**(d-1)*2**i,o=0));i>=8;e[n+p]=s&255,p+=m,s/=256,i-=8);for(o=o<<i|s,l+=i;l>0;e[n+p]=o&255,p+=m,o/=256,l-=8);e[n+p-m]|=h*128}})),It=t((e=>{var t=Pt(),n=Ft(),r=typeof Symbol==`function`&&typeof Symbol.for==`function`?Symbol.for(`nodejs.util.inspect.custom`):null;e.Buffer=s,e.SlowBuffer=v,e.INSPECT_MAX_BYTES=50;var i=2147483647;e.kMaxLength=i,s.TYPED_ARRAY_SUPPORT=a(),!s.TYPED_ARRAY_SUPPORT&&typeof console<`u`&&typeof console.error==`function`&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch{return!1}}Object.defineProperty(s.prototype,`parent`,{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,`offset`,{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}});function o(e){if(e>i)throw RangeError(`The value "`+e+`" is invalid for option "size"`);let t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,n){if(typeof e==`number`){if(typeof t==`string`)throw TypeError(`The "string" argument must be of type string. Received type number`);return d(e)}return c(e,t,n)}s.poolSize=8192;function c(e,t,n){if(typeof e==`string`)return f(e,t);if(ArrayBuffer.isView(e))return m(e);if(e==null)throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type `+typeof e);if(je(e,ArrayBuffer)||e&&je(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer<`u`&&(je(e,SharedArrayBuffer)||e&&je(e.buffer,SharedArrayBuffer)))return h(e,t,n);if(typeof e==`number`)throw TypeError(`The "value" argument must not be of type number. Received type number`);let r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return s.from(r,t,n);let i=g(e);if(i)return i;if(typeof Symbol<`u`&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]==`function`)return s.from(e[Symbol.toPrimitive](`string`),t,n);throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type `+typeof e)}s.from=function(e,t,n){return c(e,t,n)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array);function l(e){if(typeof e!=`number`)throw TypeError(`"size" argument must be of type number`);if(e<0)throw RangeError(`The value "`+e+`" is invalid for option "size"`)}function u(e,t,n){return l(e),e<=0||t===void 0?o(e):typeof n==`string`?o(e).fill(t,n):o(e).fill(t)}s.alloc=function(e,t,n){return u(e,t,n)};function d(e){return l(e),o(e<0?0:_(e)|0)}s.allocUnsafe=function(e){return d(e)},s.allocUnsafeSlow=function(e){return d(e)};function f(e,t){if((typeof t!=`string`||t===``)&&(t=`utf8`),!s.isEncoding(t))throw TypeError(`Unknown encoding: `+t);let n=y(e,t)|0,r=o(n),i=r.write(e,t);return i!==n&&(r=r.slice(0,i)),r}function p(e){let t=e.length<0?0:_(e.length)|0,n=o(t);for(let r=0;r<t;r+=1)n[r]=e[r]&255;return n}function m(e){if(je(e,Uint8Array)){let t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return p(e)}function h(e,t,n){if(t<0||e.byteLength<t)throw RangeError(`"offset" is outside of buffer bounds`);if(e.byteLength<t+(n||0))throw RangeError(`"length" is outside of buffer bounds`);let r;return r=t===void 0&&n===void 0?new Uint8Array(e):n===void 0?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,s.prototype),r}function g(e){if(s.isBuffer(e)){let t=_(e.length)|0,n=o(t);return n.length===0||e.copy(n,0,0,t),n}if(e.length!==void 0)return typeof e.length!=`number`||Me(e.length)?o(0):p(e);if(e.type===`Buffer`&&Array.isArray(e.data))return p(e.data)}function _(e){if(e>=i)throw RangeError(`Attempt to allocate Buffer larger than maximum size: 0x`+i.toString(16)+` bytes`);return e|0}function v(e){return+e!=e&&(e=0),s.alloc(+e)}s.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==s.prototype},s.compare=function(e,t){if(je(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),je(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError(`The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array`);if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,a=Math.min(n,r);i<a;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case`hex`:case`utf8`:case`utf-8`:case`ascii`:case`latin1`:case`binary`:case`base64`:case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return!0;default:return!1}},s.concat=function(e,t){if(!Array.isArray(e))throw TypeError(`"list" argument must be an Array of Buffers`);if(e.length===0)return s.alloc(0);let n;if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let r=s.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){let t=e[n];if(je(t,Uint8Array))i+t.length>r.length?(s.isBuffer(t)||(t=s.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else if(s.isBuffer(t))t.copy(r,i);else throw TypeError(`"list" argument must be an Array of Buffers`);i+=t.length}return r};function y(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||je(e,ArrayBuffer))return e.byteLength;if(typeof e!=`string`)throw TypeError(`The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type `+typeof e);let n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;let i=!1;for(;;)switch(t){case`ascii`:case`latin1`:case`binary`:return n;case`utf8`:case`utf-8`:return De(e).length;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return n*2;case`hex`:return n>>>1;case`base64`:return E(e).length;default:if(i)return r?-1:De(e).length;t=(``+t).toLowerCase(),i=!0}}s.byteLength=y;function b(e,t,n){let r=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,t>>>=0,n<=t))return``;for(e||(e=`utf8`);;)switch(e){case`hex`:return ue(this,t,n);case`utf8`:case`utf-8`:return ae(this,t,n);case`ascii`:return ce(this,t,n);case`latin1`:case`binary`:return le(this,t,n);case`base64`:return w(this,t,n);case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return de(this,t,n);default:if(r)throw TypeError(`Unknown encoding: `+e);e=(e+``).toLowerCase(),r=!0}}s.prototype._isBuffer=!0;function x(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}s.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError(`Buffer size must be a multiple of 16-bits`);for(let t=0;t<e;t+=2)x(this,t,t+1);return this},s.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError(`Buffer size must be a multiple of 32-bits`);for(let t=0;t<e;t+=4)x(this,t,t+3),x(this,t+1,t+2);return this},s.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError(`Buffer size must be a multiple of 64-bits`);for(let t=0;t<e;t+=8)x(this,t,t+7),x(this,t+1,t+6),x(this,t+2,t+5),x(this,t+3,t+4);return this},s.prototype.toString=function(){let e=this.length;return e===0?``:arguments.length===0?ae(this,0,e):b.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError(`Argument must be a Buffer`);return this===e?!0:s.compare(this,e)===0},s.prototype.inspect=function(){let t=``,n=e.INSPECT_MAX_BYTES;return t=this.toString(`hex`,0,n).replace(/(.{2})/g,`$1 `).trim(),this.length>n&&(t+=` ... `),`<Buffer `+t+`>`},r&&(s.prototype[r]=s.prototype.inspect),s.prototype.compare=function(e,t,n,r,i){if(je(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError(`The "target" argument must be one of type Buffer or Uint8Array. Received type `+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?e.length:0),r===void 0&&(r=0),i===void 0&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw RangeError(`out of range index`);if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,i>>>=0,this===e)return 0;let a=i-r,o=n-t,c=Math.min(a,o),l=this.slice(r,i),u=e.slice(t,n);for(let e=0;e<c;++e)if(l[e]!==u[e]){a=l[e],o=u[e];break}return a<o?-1:o<a?1:0};function ee(e,t,n,r,i){if(e.length===0)return-1;if(typeof n==`string`?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Me(n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0)if(i)n=0;else return-1;if(typeof t==`string`&&(t=s.from(t,r)),s.isBuffer(t))return t.length===0?-1:S(e,t,n,r,i);if(typeof t==`number`)return t&=255,typeof Uint8Array.prototype.indexOf==`function`?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):S(e,[t],n,r,i);throw TypeError(`val must be string, number or Buffer`)}function S(e,t,n,r,i){let a=1,o=e.length,s=t.length;if(r!==void 0&&(r=String(r).toLowerCase(),r===`ucs2`||r===`ucs-2`||r===`utf16le`||r===`utf-16le`)){if(e.length<2||t.length<2)return-1;a=2,o/=2,s/=2,n/=2}function c(e,t){return a===1?e[t]:e.readUInt16BE(t*a)}let l;if(i){let r=-1;for(l=n;l<o;l++)if(c(e,l)===c(t,r===-1?0:l-r)){if(r===-1&&(r=l),l-r+1===s)return r*a}else r!==-1&&(l-=l-r),r=-1}else for(n+s>o&&(n=o-s),l=n;l>=0;l--){let n=!0;for(let r=0;r<s;r++)if(c(e,l+r)!==c(t,r)){n=!1;break}if(n)return l}return-1}s.prototype.includes=function(e,t,n){return this.indexOf(e,t,n)!==-1},s.prototype.indexOf=function(e,t,n){return ee(this,e,t,n,!0)},s.prototype.lastIndexOf=function(e,t,n){return ee(this,e,t,n,!1)};function te(e,t,n,r){n=Number(n)||0;let i=e.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;let a=t.length;r>a/2&&(r=a/2);let o;for(o=0;o<r;++o){let r=parseInt(t.substr(o*2,2),16);if(Me(r))return o;e[n+o]=r}return o}function C(e,t,n,r){return Ae(De(t,e.length-n),e,n,r)}function ne(e,t,n,r){return Ae(Oe(t),e,n,r)}function re(e,t,n,r){return Ae(E(t),e,n,r)}function ie(e,t,n,r){return Ae(ke(t,e.length-n),e,n,r)}s.prototype.write=function(e,t,n,r){if(t===void 0)r=`utf8`,n=this.length,t=0;else if(n===void 0&&typeof t==`string`)r=t,n=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(n)?(n>>>=0,r===void 0&&(r=`utf8`)):(r=n,n=void 0);else throw Error(`Buffer.write(string, encoding, offset[, length]) is no longer supported`);let i=this.length-t;if((n===void 0||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw RangeError(`Attempt to write outside buffer bounds`);r||(r=`utf8`);let a=!1;for(;;)switch(r){case`hex`:return te(this,e,t,n);case`utf8`:case`utf-8`:return C(this,e,t,n);case`ascii`:case`latin1`:case`binary`:return ne(this,e,t,n);case`base64`:return re(this,e,t,n);case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return ie(this,e,t,n);default:if(a)throw TypeError(`Unknown encoding: `+r);r=(``+r).toLowerCase(),a=!0}},s.prototype.toJSON=function(){return{type:`Buffer`,data:Array.prototype.slice.call(this._arr||this,0)}};function w(e,n,r){return n===0&&r===e.length?t.fromByteArray(e):t.fromByteArray(e.slice(n,r))}function ae(e,t,n){n=Math.min(e.length,n);let r=[],i=t;for(;i<n;){let t=e[i],a=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,s,c;switch(o){case 1:t<128&&(a=t);break;case 2:n=e[i+1],(n&192)==128&&(c=(t&31)<<6|n&63,c>127&&(a=c));break;case 3:n=e[i+1],r=e[i+2],(n&192)==128&&(r&192)==128&&(c=(t&15)<<12|(n&63)<<6|r&63,c>2047&&(c<55296||c>57343)&&(a=c));break;case 4:n=e[i+1],r=e[i+2],s=e[i+3],(n&192)==128&&(r&192)==128&&(s&192)==128&&(c=(t&15)<<18|(n&63)<<12|(r&63)<<6|s&63,c>65535&&c<1114112&&(a=c))}}a===null?(a=65533,o=1):a>65535&&(a-=65536,r.push(a>>>10&1023|55296),a=56320|a&1023),r.push(a),i+=o}return se(r)}var oe=4096;function se(e){let t=e.length;if(t<=oe)return String.fromCharCode.apply(String,e);let n=``,r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=oe));return n}function ce(e,t,n){let r=``;n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]&127);return r}function le(e,t,n){let r=``;n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function ue(e,t,n){let r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i=``;for(let r=t;r<n;++r)i+=Ne[e[r]];return i}function de(e,t,n){let r=e.slice(t,n),i=``;for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+r[e+1]*256);return i}s.prototype.slice=function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let r=this.subarray(e,t);return Object.setPrototypeOf(r,s.prototype),r};function T(e,t,n){if(e%1!=0||e<0)throw RangeError(`offset is not uint`);if(e+t>n)throw RangeError(`Trying to access beyond buffer length`)}s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||T(e,t,this.length);let r=this[e],i=1,a=0;for(;++a<t&&(i*=256);)r+=this[e+a]*i;return r},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||T(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e>>>=0,t||T(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||T(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||T(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=Pe(function(e){e>>>=0,Ce(e,`offset`);let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&we(e,this.length-8);let r=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,i=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))}),s.prototype.readBigUInt64BE=Pe(function(e){e>>>=0,Ce(e,`offset`);let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&we(e,this.length-8);let r=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],i=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(r)<<BigInt(32))+BigInt(i)}),s.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||T(e,t,this.length);let r=this[e],i=1,a=0;for(;++a<t&&(i*=256);)r+=this[e+a]*i;return i*=128,r>=i&&(r-=2**(8*t)),r},s.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||T(e,t,this.length);let r=t,i=1,a=this[e+--r];for(;r>0&&(i*=256);)a+=this[e+--r]*i;return i*=128,a>=i&&(a-=2**(8*t)),a},s.prototype.readInt8=function(e,t){return e>>>=0,t||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||T(e,2,this.length);let n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n},s.prototype.readInt16BE=function(e,t){e>>>=0,t||T(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=Pe(function(e){e>>>=0,Ce(e,`offset`);let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&we(e,this.length-8);let r=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)}),s.prototype.readBigInt64BE=Pe(function(e){e>>>=0,Ce(e,`offset`);let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&we(e,this.length-8);let r=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)}),s.prototype.readFloatLE=function(e,t){return e>>>=0,t||T(e,4,this.length),n.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||T(e,4,this.length),n.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||T(e,8,this.length),n.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||T(e,8,this.length),n.read(this,e,!1,52,8)};function fe(e,t,n,r,i,a){if(!s.isBuffer(e))throw TypeError(`"buffer" argument must be a Buffer instance`);if(t>i||t<a)throw RangeError(`"value" argument is out of bounds`);if(n+r>e.length)throw RangeError(`Index out of range`)}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){let r=2**(8*n)-1;fe(this,e,t,n,r,0)}let i=1,a=0;for(this[t]=e&255;++a<n&&(i*=256);)this[t+a]=e/i&255;return t+n},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){let r=2**(8*n)-1;fe(this,e,t,n,r,0)}let i=n-1,a=1;for(this[t+i]=e&255;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+n},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||fe(this,e,t,1,255,0),this[t]=e&255,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||fe(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||fe(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||fe(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||fe(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function pe(e,t,n,r,i){Se(t,r,i,e,n,7);let a=Number(t&BigInt(4294967295));e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function me(e,t,n,r,i){Se(t,r,i,e,n,7);let a=Number(t&BigInt(4294967295));e[n+7]=a,a>>=8,e[n+6]=a,a>>=8,e[n+5]=a,a>>=8,e[n+4]=a;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}s.prototype.writeBigUInt64LE=Pe(function(e,t=0){return pe(this,e,t,BigInt(0),BigInt(`0xffffffffffffffff`))}),s.prototype.writeBigUInt64BE=Pe(function(e,t=0){return me(this,e,t,BigInt(0),BigInt(`0xffffffffffffffff`))}),s.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){let r=2**(8*n-1);fe(this,e,t,n,r-1,-r)}let i=0,a=1,o=0;for(this[t]=e&255;++i<n&&(a*=256);)e<0&&o===0&&this[t+i-1]!==0&&(o=1),this[t+i]=(e/a>>0)-o&255;return t+n},s.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){let r=2**(8*n-1);fe(this,e,t,n,r-1,-r)}let i=n-1,a=1,o=0;for(this[t+i]=e&255;--i>=0&&(a*=256);)e<0&&o===0&&this[t+i+1]!==0&&(o=1),this[t+i]=(e/a>>0)-o&255;return t+n},s.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||fe(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},s.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||fe(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||fe(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},s.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||fe(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||fe(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},s.prototype.writeBigInt64LE=Pe(function(e,t=0){return pe(this,e,t,-BigInt(`0x8000000000000000`),BigInt(`0x7fffffffffffffff`))}),s.prototype.writeBigInt64BE=Pe(function(e,t=0){return me(this,e,t,-BigInt(`0x8000000000000000`),BigInt(`0x7fffffffffffffff`))});function he(e,t,n,r,i,a){if(n+r>e.length||n<0)throw RangeError(`Index out of range`)}function ge(e,t,r,i,a){return t=+t,r>>>=0,a||he(e,t,r,4,34028234663852886e22,-34028234663852886e22),n.write(e,t,r,i,23,4),r+4}s.prototype.writeFloatLE=function(e,t,n){return ge(this,e,t,!0,n)},s.prototype.writeFloatBE=function(e,t,n){return ge(this,e,t,!1,n)};function _e(e,t,r,i,a){return t=+t,r>>>=0,a||he(e,t,r,8,17976931348623157e292,-17976931348623157e292),n.write(e,t,r,i,52,8),r+8}s.prototype.writeDoubleLE=function(e,t,n){return _e(this,e,t,!0,n)},s.prototype.writeDoubleBE=function(e,t,n){return _e(this,e,t,!1,n)},s.prototype.copy=function(e,t,n,r){if(!s.isBuffer(e))throw TypeError(`argument should be a Buffer`);if(n||(n=0),!r&&r!==0&&(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n||e.length===0||this.length===0)return 0;if(t<0)throw RangeError(`targetStart out of bounds`);if(n<0||n>=this.length)throw RangeError(`Index out of range`);if(r<0)throw RangeError(`sourceEnd out of bounds`);r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);let i=r-n;return this===e&&typeof Uint8Array.prototype.copyWithin==`function`?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},s.prototype.fill=function(e,t,n,r){if(typeof e==`string`){if(typeof t==`string`?(r=t,t=0,n=this.length):typeof n==`string`&&(r=n,n=this.length),r!==void 0&&typeof r!=`string`)throw TypeError(`encoding must be a string`);if(typeof r==`string`&&!s.isEncoding(r))throw TypeError(`Unknown encoding: `+r);if(e.length===1){let t=e.charCodeAt(0);(r===`utf8`&&t<128||r===`latin1`)&&(e=t)}}else typeof e==`number`?e&=255:typeof e==`boolean`&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw RangeError(`Out of range index`);if(n<=t)return this;t>>>=0,n=n===void 0?this.length:n>>>0,e||(e=0);let i;if(typeof e==`number`)for(i=t;i<n;++i)this[i]=e;else{let a=s.isBuffer(e)?e:s.from(e,r),o=a.length;if(o===0)throw TypeError(`The value "`+e+`" is invalid for argument "value"`);for(i=0;i<n-t;++i)this[i+t]=a[i%o]}return this};var ve={};function ye(e,t,n){ve[e]=class extends n{constructor(){super(),Object.defineProperty(this,`message`,{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,`code`,{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}ye(`ERR_BUFFER_OUT_OF_BOUNDS`,function(e){return e?`${e} is outside of buffer bounds`:`Attempt to access memory outside buffer bounds`},RangeError),ye(`ERR_INVALID_ARG_TYPE`,function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),ye(`ERR_OUT_OF_RANGE`,function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=be(String(n)):typeof n==`bigint`&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=be(i)),i+=`n`),r+=` It must be ${t}. Received ${i}`,r},RangeError);function be(e){let t=``,n=e.length,r=e[0]===`-`?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function xe(e,t,n){Ce(t,`offset`),(e[t]===void 0||e[t+n]===void 0)&&we(t,e.length-(n+1))}function Se(e,t,n,r,i,a){if(e>n||e<t){let r=typeof t==`bigint`?`n`:``,i;throw i=a>3?t===0||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${(a+1)*8}${r}`:`>= -(2${r} ** ${(a+1)*8-1}${r}) and < 2 ** ${(a+1)*8-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new ve.ERR_OUT_OF_RANGE(`value`,i,e)}xe(r,i,a)}function Ce(e,t){if(typeof e!=`number`)throw new ve.ERR_INVALID_ARG_TYPE(t,`number`,e)}function we(e,t,n){throw Math.floor(e)===e?t<0?new ve.ERR_BUFFER_OUT_OF_BOUNDS:new ve.ERR_OUT_OF_RANGE(n||`offset`,`>= ${n?1:0} and <= ${t}`,e):(Ce(e,n),new ve.ERR_OUT_OF_RANGE(n||`offset`,`an integer`,e))}var Te=/[^+/0-9A-Za-z-_]/g;function Ee(e){if(e=e.split(`=`)[0],e=e.trim().replace(Te,``),e.length<2)return``;for(;e.length%4!=0;)e+=`=`;return e}function De(e,t){t=t||1/0;let n,r=e.length,i=null,a=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&a.push(239,191,189);continue}else if(o+1===r){(t-=3)>-1&&a.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&a.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,n<128){if(--t<0)break;a.push(n)}else if(n<2048){if((t-=2)<0)break;a.push(n>>6|192,n&63|128)}else if(n<65536){if((t-=3)<0)break;a.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((t-=4)<0)break;a.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw Error(`Invalid code point`)}return a}function Oe(e){let t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n)&255);return t}function ke(e,t){let n,r,i,a=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,a.push(i),a.push(r);return a}function E(e){return t.toByteArray(Ee(e))}function Ae(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function je(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function Me(e){return e!==e}var Ne=(function(){let e=`0123456789abcdef`,t=Array(256);for(let n=0;n<16;++n){let r=n*16;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t})();function Pe(e){return typeof BigInt>`u`?Fe:e}function Fe(){throw Error(`BigInt not supported`)}}))();if(typeof window<`u`){var Lt;window.Buffer||(window.Buffer=It.Buffer),window.global||(window.global=window),window.process||(window.process={}),(Lt=window.process)!=null&&Lt.env||(window.process={env:{}})}({}).NEXT_PUBLIC_SECURE_SITE_SDK_URL,{}.NEXT_PUBLIC_DEFAULT_LOG_LEVEL;var Rt={APP_EVENT_KEY:`@w3m-app/`,FRAME_EVENT_KEY:`@w3m-frame/`,RPC_METHOD_KEY:`RPC_`,STORAGE_KEY:`@w3m-storage/`,SESSION_TOKEN_KEY:`SESSION_TOKEN_KEY`,EMAIL_LOGIN_USED_KEY:`EMAIL_LOGIN_USED_KEY`,LAST_USED_CHAIN_KEY:`LAST_USED_CHAIN_KEY`,LAST_EMAIL_LOGIN_TIME:`LAST_EMAIL_LOGIN_TIME`,EMAIL:`EMAIL`,PREFERRED_ACCOUNT_TYPE:`PREFERRED_ACCOUNT_TYPE`,SMART_ACCOUNT_ENABLED:`SMART_ACCOUNT_ENABLED`,SMART_ACCOUNT_ENABLED_NETWORKS:`SMART_ACCOUNT_ENABLED_NETWORKS`,SOCIAL_USERNAME:`SOCIAL_USERNAME`,SOCIAL:`@w3m/connected_social`,APP_SWITCH_NETWORK:`@w3m-app/SWITCH_NETWORK`,APP_CONNECT_EMAIL:`@w3m-app/CONNECT_EMAIL`,APP_CONNECT_DEVICE:`@w3m-app/CONNECT_DEVICE`,APP_CONNECT_OTP:`@w3m-app/CONNECT_OTP`,APP_CONNECT_SOCIAL:`@w3m-app/CONNECT_SOCIAL`,APP_GET_SOCIAL_REDIRECT_URI:`@w3m-app/GET_SOCIAL_REDIRECT_URI`,APP_GET_USER:`@w3m-app/GET_USER`,APP_SIGN_OUT:`@w3m-app/SIGN_OUT`,APP_IS_CONNECTED:`@w3m-app/IS_CONNECTED`,APP_GET_CHAIN_ID:`@w3m-app/GET_CHAIN_ID`,APP_RPC_REQUEST:`@w3m-app/RPC_REQUEST`,APP_UPDATE_EMAIL:`@w3m-app/UPDATE_EMAIL`,APP_UPDATE_EMAIL_PRIMARY_OTP:`@w3m-app/UPDATE_EMAIL_PRIMARY_OTP`,APP_UPDATE_EMAIL_SECONDARY_OTP:`@w3m-app/UPDATE_EMAIL_SECONDARY_OTP`,APP_AWAIT_UPDATE_EMAIL:`@w3m-app/AWAIT_UPDATE_EMAIL`,APP_SYNC_THEME:`@w3m-app/SYNC_THEME`,APP_SYNC_DAPP_DATA:`@w3m-app/SYNC_DAPP_DATA`,APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:`@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS`,APP_INIT_SMART_ACCOUNT:`@w3m-app/INIT_SMART_ACCOUNT`,APP_SET_PREFERRED_ACCOUNT:`@w3m-app/SET_PREFERRED_ACCOUNT`,APP_CONNECT_FARCASTER:`@w3m-app/CONNECT_FARCASTER`,APP_GET_FARCASTER_URI:`@w3m-app/GET_FARCASTER_URI`,FRAME_SWITCH_NETWORK_ERROR:`@w3m-frame/SWITCH_NETWORK_ERROR`,FRAME_SWITCH_NETWORK_SUCCESS:`@w3m-frame/SWITCH_NETWORK_SUCCESS`,FRAME_CONNECT_EMAIL_ERROR:`@w3m-frame/CONNECT_EMAIL_ERROR`,FRAME_CONNECT_EMAIL_SUCCESS:`@w3m-frame/CONNECT_EMAIL_SUCCESS`,FRAME_CONNECT_DEVICE_ERROR:`@w3m-frame/CONNECT_DEVICE_ERROR`,FRAME_CONNECT_DEVICE_SUCCESS:`@w3m-frame/CONNECT_DEVICE_SUCCESS`,FRAME_CONNECT_OTP_SUCCESS:`@w3m-frame/CONNECT_OTP_SUCCESS`,FRAME_CONNECT_OTP_ERROR:`@w3m-frame/CONNECT_OTP_ERROR`,FRAME_CONNECT_SOCIAL_SUCCESS:`@w3m-frame/CONNECT_SOCIAL_SUCCESS`,FRAME_CONNECT_SOCIAL_ERROR:`@w3m-frame/CONNECT_SOCIAL_ERROR`,FRAME_CONNECT_FARCASTER_SUCCESS:`@w3m-frame/CONNECT_FARCASTER_SUCCESS`,FRAME_CONNECT_FARCASTER_ERROR:`@w3m-frame/CONNECT_FARCASTER_ERROR`,FRAME_GET_FARCASTER_URI_SUCCESS:`@w3m-frame/GET_FARCASTER_URI_SUCCESS`,FRAME_GET_FARCASTER_URI_ERROR:`@w3m-frame/GET_FARCASTER_URI_ERROR`,FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:`@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS`,FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:`@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR`,FRAME_GET_USER_SUCCESS:`@w3m-frame/GET_USER_SUCCESS`,FRAME_GET_USER_ERROR:`@w3m-frame/GET_USER_ERROR`,FRAME_SIGN_OUT_SUCCESS:`@w3m-frame/SIGN_OUT_SUCCESS`,FRAME_SIGN_OUT_ERROR:`@w3m-frame/SIGN_OUT_ERROR`,FRAME_IS_CONNECTED_SUCCESS:`@w3m-frame/IS_CONNECTED_SUCCESS`,FRAME_IS_CONNECTED_ERROR:`@w3m-frame/IS_CONNECTED_ERROR`,FRAME_GET_CHAIN_ID_SUCCESS:`@w3m-frame/GET_CHAIN_ID_SUCCESS`,FRAME_GET_CHAIN_ID_ERROR:`@w3m-frame/GET_CHAIN_ID_ERROR`,FRAME_RPC_REQUEST_SUCCESS:`@w3m-frame/RPC_REQUEST_SUCCESS`,FRAME_RPC_REQUEST_ERROR:`@w3m-frame/RPC_REQUEST_ERROR`,FRAME_SESSION_UPDATE:`@w3m-frame/SESSION_UPDATE`,FRAME_UPDATE_EMAIL_SUCCESS:`@w3m-frame/UPDATE_EMAIL_SUCCESS`,FRAME_UPDATE_EMAIL_ERROR:`@w3m-frame/UPDATE_EMAIL_ERROR`,FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:`@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS`,FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:`@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR`,FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:`@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS`,FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:`@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR`,FRAME_SYNC_THEME_SUCCESS:`@w3m-frame/SYNC_THEME_SUCCESS`,FRAME_SYNC_THEME_ERROR:`@w3m-frame/SYNC_THEME_ERROR`,FRAME_SYNC_DAPP_DATA_SUCCESS:`@w3m-frame/SYNC_DAPP_DATA_SUCCESS`,FRAME_SYNC_DAPP_DATA_ERROR:`@w3m-frame/SYNC_DAPP_DATA_ERROR`,FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:`@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS`,FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:`@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR`,FRAME_INIT_SMART_ACCOUNT_SUCCESS:`@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS`,FRAME_INIT_SMART_ACCOUNT_ERROR:`@w3m-frame/INIT_SMART_ACCOUNT_ERROR`,FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:`@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS`,FRAME_SET_PREFERRED_ACCOUNT_ERROR:`@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR`,RPC_RESPONSE_TYPE_ERROR:`RPC_RESPONSE_ERROR`,RPC_RESPONSE_TYPE_TX:`RPC_RESPONSE_TRANSACTION_HASH`,RPC_RESPONSE_TYPE_OBJECT:`RPC_RESPONSE_OBJECT`},zt={SAFE_RPC_METHODS:`eth_accounts.eth_blockNumber.eth_call.eth_chainId.eth_estimateGas.eth_feeHistory.eth_gasPrice.eth_getAccount.eth_getBalance.eth_getBlockByHash.eth_getBlockByNumber.eth_getBlockReceipts.eth_getBlockTransactionCountByHash.eth_getBlockTransactionCountByNumber.eth_getCode.eth_getFilterChanges.eth_getFilterLogs.eth_getLogs.eth_getProof.eth_getStorageAt.eth_getTransactionByBlockHashAndIndex.eth_getTransactionByBlockNumberAndIndex.eth_getTransactionByHash.eth_getTransactionCount.eth_getTransactionReceipt.eth_getUncleCountByBlockHash.eth_getUncleCountByBlockNumber.eth_maxPriorityFeePerGas.eth_newBlockFilter.eth_newFilter.eth_newPendingTransactionFilter.eth_sendRawTransaction.eth_syncing.eth_uninstallFilter.wallet_getCapabilities.wallet_getCallsStatus.eth_getUserOperationReceipt.eth_estimateUserOperationGas.eth_getUserOperationByHash.eth_supportedEntryPoints`.split(`.`),NOT_SAFE_RPC_METHODS:[`personal_sign`,`eth_signTypedData_v4`,`eth_sendTransaction`,`solana_signMessage`,`solana_signTransaction`,`solana_signAllTransactions`,`solana_signAndSendTransaction`,`wallet_sendCalls`,`wallet_grantPermissions`,`eth_sendUserOperation`],GET_CHAIN_ID:`eth_chainId`,RPC_METHOD_NOT_ALLOWED_MESSAGE:`Requested RPC call is not allowed`,RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:`Action not allowed`,ACCOUNT_TYPES:{EOA:`eoa`,SMART_ACCOUNT:`smartAccount`}},N;(function(e){e.assertEqual=e=>e;function t(e){}e.assertIs=t;function n(e){throw Error()}e.assertNever=n,e.arrayToEnum=e=>{let t={};for(let n of e)t[n]=n;return t},e.getValidEnumValues=t=>{let n=e.objectKeys(t).filter(e=>typeof t[t[e]]!=`number`),r={};for(let e of n)r[e]=t[e];return e.objectValues(r)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys=typeof Object.keys==`function`?e=>Object.keys(e):e=>{let t=[];for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},e.find=(e,t)=>{for(let n of e)if(t(n))return n},e.isInteger=typeof Number.isInteger==`function`?e=>Number.isInteger(e):e=>typeof e==`number`&&isFinite(e)&&Math.floor(e)===e;function r(e,t=` | `){return e.map(e=>typeof e==`string`?`'${e}'`:e).join(t)}e.joinValues=r,e.jsonStringifyReplacer=(e,t)=>typeof t==`bigint`?t.toString():t})(N||(N={}));var Bt;(function(e){e.mergeShapes=(e,t)=>({...e,...t})})(Bt||(Bt={}));var P=N.arrayToEnum([`string`,`nan`,`number`,`integer`,`float`,`boolean`,`date`,`bigint`,`symbol`,`function`,`undefined`,`null`,`array`,`object`,`unknown`,`promise`,`void`,`never`,`map`,`set`]),Vt=e=>{switch(typeof e){case`undefined`:return P.undefined;case`string`:return P.string;case`number`:return isNaN(e)?P.nan:P.number;case`boolean`:return P.boolean;case`function`:return P.function;case`bigint`:return P.bigint;case`symbol`:return P.symbol;case`object`:return Array.isArray(e)?P.array:e===null?P.null:e.then&&typeof e.then==`function`&&e.catch&&typeof e.catch==`function`?P.promise:typeof Map<`u`&&e instanceof Map?P.map:typeof Set<`u`&&e instanceof Set?P.set:typeof Date<`u`&&e instanceof Date?P.date:P.object;default:return P.unknown}},F=N.arrayToEnum([`invalid_type`,`invalid_literal`,`custom`,`invalid_union`,`invalid_union_discriminator`,`invalid_enum_value`,`unrecognized_keys`,`invalid_arguments`,`invalid_return_type`,`invalid_date`,`invalid_string`,`too_small`,`too_big`,`invalid_intersection_types`,`not_multiple_of`,`not_finite`]),Ht=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,`$1:`),Ut=class extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name=`ZodError`,this.issues=e}get errors(){return this.issues}format(e){let t=e||function(e){return e.message},n={_errors:[]},r=e=>{for(let i of e.issues)if(i.code===`invalid_union`)i.unionErrors.map(r);else if(i.code===`invalid_return_type`)r(i.returnTypeError);else if(i.code===`invalid_arguments`)r(i.argumentsError);else if(i.path.length===0)n._errors.push(t(i));else{let e=n,r=0;for(;r<i.path.length;){let n=i.path[r];r===i.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(i))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}};return r(this),n}toString(){return this.message}get message(){return JSON.stringify(this.issues,N.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=e=>e.message){let t={},n=[];for(let r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}};Ut.create=e=>new Ut(e);var Wt=(e,t)=>{let n;switch(e.code){case F.invalid_type:n=e.received===P.undefined?`Required`:`Expected ${e.expected}, received ${e.received}`;break;case F.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,N.jsonStringifyReplacer)}`;break;case F.unrecognized_keys:n=`Unrecognized key(s) in object: ${N.joinValues(e.keys,`, `)}`;break;case F.invalid_union:n=`Invalid input`;break;case F.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${N.joinValues(e.options)}`;break;case F.invalid_enum_value:n=`Invalid enum value. Expected ${N.joinValues(e.options)}, received '${e.received}'`;break;case F.invalid_arguments:n=`Invalid function arguments`;break;case F.invalid_return_type:n=`Invalid function return type`;break;case F.invalid_date:n=`Invalid date`;break;case F.invalid_string:typeof e.validation==`object`?`includes`in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position==`number`&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):`startsWith`in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:`endsWith`in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:N.assertNever(e.validation):n=e.validation===`regex`?`Invalid`:`Invalid ${e.validation}`;break;case F.too_small:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at least`:`more than`} ${e.minimum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at least`:`over`} ${e.minimum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${e.minimum}`:e.type===`date`?`Date must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${new Date(Number(e.minimum))}`:`Invalid input`;break;case F.too_big:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at most`:`less than`} ${e.maximum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at most`:`under`} ${e.maximum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`bigint`?`BigInt must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`date`?`Date must be ${e.exact?`exactly`:e.inclusive?`smaller than or equal to`:`smaller than`} ${new Date(Number(e.maximum))}`:`Invalid input`;break;case F.custom:n=`Invalid input`;break;case F.invalid_intersection_types:n=`Intersection results could not be merged`;break;case F.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case F.not_finite:n=`Number must be finite`;break;default:n=t.defaultError,N.assertNever(e)}return{message:n}},Gt=Wt;function Kt(e){Gt=e}function qt(){return Gt}var Jt=e=>{let{data:t,path:n,errorMaps:r,issueData:i}=e,a=[...n,...i.path||[]],o={...i,path:a},s=``,c=r.filter(e=>!!e).slice().reverse();for(let e of c)s=e(o,{data:t,defaultError:s}).message;return{...i,path:a,message:i.message||s}},Yt=[];function I(e,t){let n=Jt({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,qt(),Wt].filter(e=>!!e)});e.common.issues.push(n)}var Xt=class e{constructor(){this.value=`valid`}dirty(){this.value===`valid`&&(this.value=`dirty`)}abort(){this.value!==`aborted`&&(this.value=`aborted`)}static mergeArray(e,t){let n=[];for(let r of t){if(r.status===`aborted`)return L;r.status===`dirty`&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(t,n){let r=[];for(let e of n)r.push({key:await e.key,value:await e.value});return e.mergeObjectSync(t,r)}static mergeObjectSync(e,t){let n={};for(let r of t){let{key:t,value:i}=r;if(t.status===`aborted`||i.status===`aborted`)return L;t.status===`dirty`&&e.dirty(),i.status===`dirty`&&e.dirty(),t.value!==`__proto__`&&(i.value!==void 0||r.alwaysSet)&&(n[t.value]=i.value)}return{status:e.value,value:n}}},L=Object.freeze({status:`aborted`}),Zt=e=>({status:`dirty`,value:e}),Qt=e=>({status:`valid`,value:e}),$t=e=>e.status===`aborted`,en=e=>e.status===`dirty`,tn=e=>e.status===`valid`,nn=e=>typeof Promise<`u`&&e instanceof Promise,R;(function(e){e.errToObj=e=>typeof e==`string`?{message:e}:e||{},e.toString=e=>typeof e==`string`?e:e==null?void 0:e.message})(R||(R={}));var rn=class{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},an=(e,t)=>{if(tn(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error(`Validation failed but no issues detected.`);return{success:!1,get error(){return this._error||(this._error=new Ut(e.common.issues)),this._error}}};function z(e){if(!e)return{};let{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(e,t)=>e.code===`invalid_type`?t.data===void 0?{message:r??t.defaultError}:{message:n??t.defaultError}:{message:t.defaultError},description:i}}var B=class{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Vt(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Vt(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Xt,ctx:{common:e.parent.common,data:e.data,parsedType:Vt(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(nn(t))throw Error(`Synchronous parse encountered promise.`);return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){let n={common:{issues:[],async:(t==null?void 0:t.async)??!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Vt(e)};return an(n,this._parseSync({data:e,path:n.path,parent:n}))}async parseAsync(e,t){let n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){let n={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Vt(e)},r=this._parse({data:e,path:n.path,parent:n});return an(n,await(nn(r)?r:Promise.resolve(r)))}refine(e,t){let n=e=>typeof t==`string`||t===void 0?{message:t}:typeof t==`function`?t(e):t;return this._refinement((t,r)=>{let i=e(t),a=()=>r.addIssue({code:F.custom,...n(t)});return typeof Promise<`u`&&i instanceof Promise?i.then(e=>e?!0:(a(),!1)):i?!0:(a(),!1)})}refinement(e,t){return this._refinement((n,r)=>e(n)?!0:(r.addIssue(typeof t==`function`?t(n,r):t),!1))}_refinement(e){return new Yn({schema:this,typeName:V.ZodEffects,effect:{type:`refinement`,refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Xn.create(this,this._def)}nullable(){return Zn.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return An.create(this,this._def)}promise(){return Jn.create(this,this._def)}or(e){return Nn.create([this,e],this._def)}and(e){return Ln.create(this,e,this._def)}transform(e){return new Yn({...z(this._def),schema:this,typeName:V.ZodEffects,effect:{type:`transform`,transform:e}})}default(e){let t=typeof e==`function`?e:()=>e;return new Qn({...z(this._def),innerType:this,defaultValue:t,typeName:V.ZodDefault})}brand(){return new nr({typeName:V.ZodBranded,type:this,...z(this._def)})}catch(e){let t=typeof e==`function`?e:()=>e;return new $n({...z(this._def),innerType:this,catchValue:t,typeName:V.ZodCatch})}describe(e){let t=this.constructor;return new t({...this._def,description:e})}pipe(e){return rr.create(this,e)}readonly(){return ir.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},on=/^c[^\s-]{8,}$/i,sn=/^[a-z][a-z0-9]*$/,cn=/^[0-9A-HJKMNP-TV-Z]{26}$/,ln=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,un=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,dn=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,fn,pn=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,mn=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,hn=e=>e.precision?e.offset?RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`):e.offset?RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`):RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);function gn(e,t){return!!((t===`v4`||!t)&&pn.test(e)||(t===`v6`||!t)&&mn.test(e))}var _n=class e extends B{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==P.string){let t=this._getOrReturnCtx(e);return I(t,{code:F.invalid_type,expected:P.string,received:t.parsedType}),L}let t=new Xt,n;for(let r of this._def.checks)if(r.kind===`min`)e.data.length<r.value&&(n=this._getOrReturnCtx(e,n),I(n,{code:F.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`max`)e.data.length>r.value&&(n=this._getOrReturnCtx(e,n),I(n,{code:F.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`length`){let i=e.data.length>r.value,a=e.data.length<r.value;(i||a)&&(n=this._getOrReturnCtx(e,n),i?I(n,{code:F.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}):a&&I(n,{code:F.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}),t.dirty())}else if(r.kind===`email`)un.test(e.data)||(n=this._getOrReturnCtx(e,n),I(n,{validation:`email`,code:F.invalid_string,message:r.message}),t.dirty());else if(r.kind===`emoji`)fn||(fn=new RegExp(dn,`u`)),fn.test(e.data)||(n=this._getOrReturnCtx(e,n),I(n,{validation:`emoji`,code:F.invalid_string,message:r.message}),t.dirty());else if(r.kind===`uuid`)ln.test(e.data)||(n=this._getOrReturnCtx(e,n),I(n,{validation:`uuid`,code:F.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid`)on.test(e.data)||(n=this._getOrReturnCtx(e,n),I(n,{validation:`cuid`,code:F.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid2`)sn.test(e.data)||(n=this._getOrReturnCtx(e,n),I(n,{validation:`cuid2`,code:F.invalid_string,message:r.message}),t.dirty());else if(r.kind===`ulid`)cn.test(e.data)||(n=this._getOrReturnCtx(e,n),I(n,{validation:`ulid`,code:F.invalid_string,message:r.message}),t.dirty());else if(r.kind===`url`)try{new URL(e.data)}catch{n=this._getOrReturnCtx(e,n),I(n,{validation:`url`,code:F.invalid_string,message:r.message}),t.dirty()}else r.kind===`regex`?(r.regex.lastIndex=0,r.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),I(n,{validation:`regex`,code:F.invalid_string,message:r.message}),t.dirty())):r.kind===`trim`?e.data=e.data.trim():r.kind===`includes`?e.data.includes(r.value,r.position)||(n=this._getOrReturnCtx(e,n),I(n,{code:F.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),t.dirty()):r.kind===`toLowerCase`?e.data=e.data.toLowerCase():r.kind===`toUpperCase`?e.data=e.data.toUpperCase():r.kind===`startsWith`?e.data.startsWith(r.value)||(n=this._getOrReturnCtx(e,n),I(n,{code:F.invalid_string,validation:{startsWith:r.value},message:r.message}),t.dirty()):r.kind===`endsWith`?e.data.endsWith(r.value)||(n=this._getOrReturnCtx(e,n),I(n,{code:F.invalid_string,validation:{endsWith:r.value},message:r.message}),t.dirty()):r.kind===`datetime`?hn(r).test(e.data)||(n=this._getOrReturnCtx(e,n),I(n,{code:F.invalid_string,validation:`datetime`,message:r.message}),t.dirty()):r.kind===`ip`?gn(e.data,r.version)||(n=this._getOrReturnCtx(e,n),I(n,{validation:`ip`,code:F.invalid_string,message:r.message}),t.dirty()):N.assertNever(r);return{status:t.value,value:e.data}}_regex(e,t,n){return this.refinement(t=>e.test(t),{validation:t,code:F.invalid_string,...R.errToObj(n)})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}email(e){return this._addCheck({kind:`email`,...R.errToObj(e)})}url(e){return this._addCheck({kind:`url`,...R.errToObj(e)})}emoji(e){return this._addCheck({kind:`emoji`,...R.errToObj(e)})}uuid(e){return this._addCheck({kind:`uuid`,...R.errToObj(e)})}cuid(e){return this._addCheck({kind:`cuid`,...R.errToObj(e)})}cuid2(e){return this._addCheck({kind:`cuid2`,...R.errToObj(e)})}ulid(e){return this._addCheck({kind:`ulid`,...R.errToObj(e)})}ip(e){return this._addCheck({kind:`ip`,...R.errToObj(e)})}datetime(e){return typeof e==`string`?this._addCheck({kind:`datetime`,precision:null,offset:!1,message:e}):this._addCheck({kind:`datetime`,precision:(e==null?void 0:e.precision)===void 0?null:e==null?void 0:e.precision,offset:(e==null?void 0:e.offset)??!1,...R.errToObj(e==null?void 0:e.message)})}regex(e,t){return this._addCheck({kind:`regex`,regex:e,...R.errToObj(t)})}includes(e,t){return this._addCheck({kind:`includes`,value:e,position:t==null?void 0:t.position,...R.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:`startsWith`,value:e,...R.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:`endsWith`,value:e,...R.errToObj(t)})}min(e,t){return this._addCheck({kind:`min`,value:e,...R.errToObj(t)})}max(e,t){return this._addCheck({kind:`max`,value:e,...R.errToObj(t)})}length(e,t){return this._addCheck({kind:`length`,value:e,...R.errToObj(t)})}nonempty(e){return this.min(1,R.errToObj(e))}trim(){return new e({...this._def,checks:[...this._def.checks,{kind:`trim`}]})}toLowerCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toLowerCase`}]})}toUpperCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toUpperCase`}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind===`datetime`)}get isEmail(){return!!this._def.checks.find(e=>e.kind===`email`)}get isURL(){return!!this._def.checks.find(e=>e.kind===`url`)}get isEmoji(){return!!this._def.checks.find(e=>e.kind===`emoji`)}get isUUID(){return!!this._def.checks.find(e=>e.kind===`uuid`)}get isCUID(){return!!this._def.checks.find(e=>e.kind===`cuid`)}get isCUID2(){return!!this._def.checks.find(e=>e.kind===`cuid2`)}get isULID(){return!!this._def.checks.find(e=>e.kind===`ulid`)}get isIP(){return!!this._def.checks.find(e=>e.kind===`ip`)}get minLength(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};_n.create=e=>new _n({checks:[],typeName:V.ZodString,coerce:(e==null?void 0:e.coerce)??!1,...z(e)});function vn(e,t){let n=(e.toString().split(`.`)[1]||``).length,r=(t.toString().split(`.`)[1]||``).length,i=n>r?n:r;return parseInt(e.toFixed(i).replace(`.`,``))%parseInt(t.toFixed(i).replace(`.`,``))/10**i}var yn=class e extends B{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==P.number){let t=this._getOrReturnCtx(e);return I(t,{code:F.invalid_type,expected:P.number,received:t.parsedType}),L}let t,n=new Xt;for(let r of this._def.checks)r.kind===`int`?N.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),I(t,{code:F.invalid_type,expected:`integer`,received:`float`,message:r.message}),n.dirty()):r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),I(t,{code:F.too_small,minimum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),I(t,{code:F.too_big,maximum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`multipleOf`?vn(e.data,r.value)!==0&&(t=this._getOrReturnCtx(e,t),I(t,{code:F.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):r.kind===`finite`?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),I(t,{code:F.not_finite,message:r.message}),n.dirty()):N.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit(`min`,e,!0,R.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,R.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,R.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,R.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:R.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}int(e){return this._addCheck({kind:`int`,message:R.toString(e)})}positive(e){return this._addCheck({kind:`min`,value:0,inclusive:!1,message:R.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:0,inclusive:!1,message:R.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:0,inclusive:!0,message:R.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:0,inclusive:!0,message:R.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:R.toString(t)})}finite(e){return this._addCheck({kind:`finite`,message:R.toString(e)})}safe(e){return this._addCheck({kind:`min`,inclusive:!0,value:-(2**53-1),message:R.toString(e)})._addCheck({kind:`max`,inclusive:!0,value:2**53-1,message:R.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind===`int`||e.kind===`multipleOf`&&N.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let n of this._def.checks)if(n.kind===`finite`||n.kind===`int`||n.kind===`multipleOf`)return!0;else n.kind===`min`?(t===null||n.value>t)&&(t=n.value):n.kind===`max`&&(e===null||n.value<e)&&(e=n.value);return Number.isFinite(t)&&Number.isFinite(e)}};yn.create=e=>new yn({checks:[],typeName:V.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,...z(e)});var bn=class e extends B{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==P.bigint){let t=this._getOrReturnCtx(e);return I(t,{code:F.invalid_type,expected:P.bigint,received:t.parsedType}),L}let t,n=new Xt;for(let r of this._def.checks)r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),I(t,{code:F.too_small,type:`bigint`,minimum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),I(t,{code:F.too_big,type:`bigint`,maximum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`multipleOf`?e.data%r.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),I(t,{code:F.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):N.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit(`min`,e,!0,R.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,R.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,R.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,R.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:R.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}positive(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!1,message:R.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!1,message:R.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!0,message:R.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!0,message:R.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:R.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};bn.create=e=>new bn({checks:[],typeName:V.ZodBigInt,coerce:(e==null?void 0:e.coerce)??!1,...z(e)});var xn=class extends B{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==P.boolean){let t=this._getOrReturnCtx(e);return I(t,{code:F.invalid_type,expected:P.boolean,received:t.parsedType}),L}return Qt(e.data)}};xn.create=e=>new xn({typeName:V.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,...z(e)});var Sn=class e extends B{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==P.date){let t=this._getOrReturnCtx(e);return I(t,{code:F.invalid_type,expected:P.date,received:t.parsedType}),L}if(isNaN(e.data.getTime()))return I(this._getOrReturnCtx(e),{code:F.invalid_date}),L;let t=new Xt,n;for(let r of this._def.checks)r.kind===`min`?e.data.getTime()<r.value&&(n=this._getOrReturnCtx(e,n),I(n,{code:F.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:`date`}),t.dirty()):r.kind===`max`?e.data.getTime()>r.value&&(n=this._getOrReturnCtx(e,n),I(n,{code:F.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:`date`}),t.dirty()):N.assertNever(r);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}min(e,t){return this._addCheck({kind:`min`,value:e.getTime(),message:R.toString(t)})}max(e,t){return this._addCheck({kind:`max`,value:e.getTime(),message:R.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e==null?null:new Date(e)}get maxDate(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e==null?null:new Date(e)}};Sn.create=e=>new Sn({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:V.ZodDate,...z(e)});var Cn=class extends B{_parse(e){if(this._getType(e)!==P.symbol){let t=this._getOrReturnCtx(e);return I(t,{code:F.invalid_type,expected:P.symbol,received:t.parsedType}),L}return Qt(e.data)}};Cn.create=e=>new Cn({typeName:V.ZodSymbol,...z(e)});var wn=class extends B{_parse(e){if(this._getType(e)!==P.undefined){let t=this._getOrReturnCtx(e);return I(t,{code:F.invalid_type,expected:P.undefined,received:t.parsedType}),L}return Qt(e.data)}};wn.create=e=>new wn({typeName:V.ZodUndefined,...z(e)});var Tn=class extends B{_parse(e){if(this._getType(e)!==P.null){let t=this._getOrReturnCtx(e);return I(t,{code:F.invalid_type,expected:P.null,received:t.parsedType}),L}return Qt(e.data)}};Tn.create=e=>new Tn({typeName:V.ZodNull,...z(e)});var En=class extends B{constructor(){super(...arguments),this._any=!0}_parse(e){return Qt(e.data)}};En.create=e=>new En({typeName:V.ZodAny,...z(e)});var Dn=class extends B{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Qt(e.data)}};Dn.create=e=>new Dn({typeName:V.ZodUnknown,...z(e)});var On=class extends B{_parse(e){let t=this._getOrReturnCtx(e);return I(t,{code:F.invalid_type,expected:P.never,received:t.parsedType}),L}};On.create=e=>new On({typeName:V.ZodNever,...z(e)});var kn=class extends B{_parse(e){if(this._getType(e)!==P.undefined){let t=this._getOrReturnCtx(e);return I(t,{code:F.invalid_type,expected:P.void,received:t.parsedType}),L}return Qt(e.data)}};kn.create=e=>new kn({typeName:V.ZodVoid,...z(e)});var An=class e extends B{_parse(e){let{ctx:t,status:n}=this._processInputParams(e),r=this._def;if(t.parsedType!==P.array)return I(t,{code:F.invalid_type,expected:P.array,received:t.parsedType}),L;if(r.exactLength!==null){let e=t.data.length>r.exactLength.value,i=t.data.length<r.exactLength.value;(e||i)&&(I(t,{code:e?F.too_big:F.too_small,minimum:i?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:`array`,inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(I(t,{code:F.too_small,minimum:r.minLength.value,type:`array`,inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(I(t,{code:F.too_big,maximum:r.maxLength.value,type:`array`,inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((e,n)=>r.type._parseAsync(new rn(t,e,t.path,n)))).then(e=>Xt.mergeArray(n,e));let i=[...t.data].map((e,n)=>r.type._parseSync(new rn(t,e,t.path,n)));return Xt.mergeArray(n,i)}get element(){return this._def.type}min(t,n){return new e({...this._def,minLength:{value:t,message:R.toString(n)}})}max(t,n){return new e({...this._def,maxLength:{value:t,message:R.toString(n)}})}length(t,n){return new e({...this._def,exactLength:{value:t,message:R.toString(n)}})}nonempty(e){return this.min(1,e)}};An.create=(e,t)=>new An({type:e,minLength:null,maxLength:null,exactLength:null,typeName:V.ZodArray,...z(t)});function jn(e){if(e instanceof Mn){let t={};for(let n in e.shape){let r=e.shape[n];t[n]=Xn.create(jn(r))}return new Mn({...e._def,shape:()=>t})}else if(e instanceof An)return new An({...e._def,type:jn(e.element)});else if(e instanceof Xn)return Xn.create(jn(e.unwrap()));else if(e instanceof Zn)return Zn.create(jn(e.unwrap()));else if(e instanceof Rn)return Rn.create(e.items.map(e=>jn(e)));else return e}var Mn=class e extends B{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape();return this._cached={shape:e,keys:N.objectKeys(e)}}_parse(e){if(this._getType(e)!==P.object){let t=this._getOrReturnCtx(e);return I(t,{code:F.invalid_type,expected:P.object,received:t.parsedType}),L}let{status:t,ctx:n}=this._processInputParams(e),{shape:r,keys:i}=this._getCached(),a=[];if(!(this._def.catchall instanceof On&&this._def.unknownKeys===`strip`))for(let e in n.data)i.includes(e)||a.push(e);let o=[];for(let e of i){let t=r[e],i=n.data[e];o.push({key:{status:`valid`,value:e},value:t._parse(new rn(n,i,n.path,e)),alwaysSet:e in n.data})}if(this._def.catchall instanceof On){let e=this._def.unknownKeys;if(e===`passthrough`)for(let e of a)o.push({key:{status:`valid`,value:e},value:{status:`valid`,value:n.data[e]}});else if(e===`strict`)a.length>0&&(I(n,{code:F.unrecognized_keys,keys:a}),t.dirty());else if(e!==`strip`)throw Error(`Internal ZodObject error: invalid unknownKeys value.`)}else{let e=this._def.catchall;for(let t of a){let r=n.data[t];o.push({key:{status:`valid`,value:t},value:e._parse(new rn(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of o){let n=await t.key;e.push({key:n,value:await t.value,alwaysSet:t.alwaysSet})}return e}).then(e=>Xt.mergeObjectSync(t,e)):Xt.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(t){return R.errToObj,new e({...this._def,unknownKeys:`strict`,...t===void 0?{}:{errorMap:(e,n)=>{var r,i;let a=((i=(r=this._def).errorMap)==null?void 0:i.call(r,e,n).message)??n.defaultError;return e.code===`unrecognized_keys`?{message:R.errToObj(t).message??a}:{message:a}}}})}strip(){return new e({...this._def,unknownKeys:`strip`})}passthrough(){return new e({...this._def,unknownKeys:`passthrough`})}extend(t){return new e({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new e({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:V.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(t){return new e({...this._def,catchall:t})}pick(t){let n={};return N.objectKeys(t).forEach(e=>{t[e]&&this.shape[e]&&(n[e]=this.shape[e])}),new e({...this._def,shape:()=>n})}omit(t){let n={};return N.objectKeys(this.shape).forEach(e=>{t[e]||(n[e]=this.shape[e])}),new e({...this._def,shape:()=>n})}deepPartial(){return jn(this)}partial(t){let n={};return N.objectKeys(this.shape).forEach(e=>{let r=this.shape[e];t&&!t[e]?n[e]=r:n[e]=r.optional()}),new e({...this._def,shape:()=>n})}required(t){let n={};return N.objectKeys(this.shape).forEach(e=>{if(t&&!t[e])n[e]=this.shape[e];else{let t=this.shape[e];for(;t instanceof Xn;)t=t._def.innerType;n[e]=t}}),new e({...this._def,shape:()=>n})}keyof(){return Gn(N.objectKeys(this.shape))}};Mn.create=(e,t)=>new Mn({shape:()=>e,unknownKeys:`strip`,catchall:On.create(),typeName:V.ZodObject,...z(t)}),Mn.strictCreate=(e,t)=>new Mn({shape:()=>e,unknownKeys:`strict`,catchall:On.create(),typeName:V.ZodObject,...z(t)}),Mn.lazycreate=(e,t)=>new Mn({shape:e,unknownKeys:`strip`,catchall:On.create(),typeName:V.ZodObject,...z(t)});var Nn=class extends B{_parse(e){let{ctx:t}=this._processInputParams(e),n=this._def.options;function r(e){for(let t of e)if(t.result.status===`valid`)return t.result;for(let n of e)if(n.result.status===`dirty`)return t.common.issues.push(...n.ctx.common.issues),n.result;let n=e.map(e=>new Ut(e.ctx.common.issues));return I(t,{code:F.invalid_union,unionErrors:n}),L}if(t.common.async)return Promise.all(n.map(async e=>{let n={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}})).then(r);{let e,r=[];for(let i of n){let n={...t,common:{...t.common,issues:[]},parent:null},a=i._parseSync({data:t.data,path:t.path,parent:n});if(a.status===`valid`)return a;a.status===`dirty`&&!e&&(e={result:a,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let i=r.map(e=>new Ut(e));return I(t,{code:F.invalid_union,unionErrors:i}),L}}get options(){return this._def.options}};Nn.create=(e,t)=>new Nn({options:e,typeName:V.ZodUnion,...z(t)});var Pn=e=>e instanceof Un?Pn(e.schema):e instanceof Yn?Pn(e.innerType()):e instanceof Wn?[e.value]:e instanceof Kn?e.options:e instanceof qn?Object.keys(e.enum):e instanceof Qn?Pn(e._def.innerType):e instanceof wn?[void 0]:e instanceof Tn?[null]:null,Fn=class e extends B{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==P.object)return I(t,{code:F.invalid_type,expected:P.object,received:t.parsedType}),L;let n=this.discriminator,r=t.data[n],i=this.optionsMap.get(r);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(I(t,{code:F.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),L)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){let i=new Map;for(let e of n){let n=Pn(e.shape[t]);if(!n)throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(let r of n){if(i.has(r))throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);i.set(r,e)}}return new e({typeName:V.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...z(r)})}};function In(e,t){let n=Vt(e),r=Vt(t);if(e===t)return{valid:!0,data:e};if(n===P.object&&r===P.object){let n=N.objectKeys(t),r=N.objectKeys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=In(e[n],t[n]);if(!r.valid)return{valid:!1};i[n]=r.data}return{valid:!0,data:i}}else if(n===P.array&&r===P.array){if(e.length!==t.length)return{valid:!1};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=In(i,a);if(!o.valid)return{valid:!1};n.push(o.data)}return{valid:!0,data:n}}else if(n===P.date&&r===P.date&&+e==+t)return{valid:!0,data:e};else return{valid:!1}}var Ln=class extends B{_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=(e,r)=>{if($t(e)||$t(r))return L;let i=In(e.value,r.value);return i.valid?((en(e)||en(r))&&t.dirty(),{status:t.value,value:i.data}):(I(n,{code:F.invalid_intersection_types}),L)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([e,t])=>r(e,t)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}};Ln.create=(e,t,n)=>new Ln({left:e,right:t,typeName:V.ZodIntersection,...z(n)});var Rn=class e extends B{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==P.array)return I(n,{code:F.invalid_type,expected:P.array,received:n.parsedType}),L;if(n.data.length<this._def.items.length)return I(n,{code:F.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),L;!this._def.rest&&n.data.length>this._def.items.length&&(I(n,{code:F.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),t.dirty());let r=[...n.data].map((e,t)=>{let r=this._def.items[t]||this._def.rest;return r?r._parse(new rn(n,e,n.path,t)):null}).filter(e=>!!e);return n.common.async?Promise.all(r).then(e=>Xt.mergeArray(t,e)):Xt.mergeArray(t,r)}get items(){return this._def.items}rest(t){return new e({...this._def,rest:t})}};Rn.create=(e,t)=>{if(!Array.isArray(e))throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);return new Rn({items:e,typeName:V.ZodTuple,rest:null,...z(t)})};var zn=class e extends B{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==P.object)return I(n,{code:F.invalid_type,expected:P.object,received:n.parsedType}),L;let r=[],i=this._def.keyType,a=this._def.valueType;for(let e in n.data)r.push({key:i._parse(new rn(n,e,n.path,e)),value:a._parse(new rn(n,n.data[e],n.path,e))});return n.common.async?Xt.mergeObjectAsync(t,r):Xt.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof B?new e({keyType:t,valueType:n,typeName:V.ZodRecord,...z(r)}):new e({keyType:_n.create(),valueType:t,typeName:V.ZodRecord,...z(n)})}},Bn=class extends B{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==P.map)return I(n,{code:F.invalid_type,expected:P.map,received:n.parsedType}),L;let r=this._def.keyType,i=this._def.valueType,a=[...n.data.entries()].map(([e,t],a)=>({key:r._parse(new rn(n,e,n.path,[a,`key`])),value:i._parse(new rn(n,t,n.path,[a,`value`]))}));if(n.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let n of a){let r=await n.key,i=await n.value;if(r.status===`aborted`||i.status===`aborted`)return L;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}})}else{let e=new Map;for(let n of a){let r=n.key,i=n.value;if(r.status===`aborted`||i.status===`aborted`)return L;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}}};Bn.create=(e,t,n)=>new Bn({valueType:t,keyType:e,typeName:V.ZodMap,...z(n)});var Vn=class e extends B{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==P.set)return I(n,{code:F.invalid_type,expected:P.set,received:n.parsedType}),L;let r=this._def;r.minSize!==null&&n.data.size<r.minSize.value&&(I(n,{code:F.too_small,minimum:r.minSize.value,type:`set`,inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&n.data.size>r.maxSize.value&&(I(n,{code:F.too_big,maximum:r.maxSize.value,type:`set`,inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());let i=this._def.valueType;function a(e){let n=new Set;for(let r of e){if(r.status===`aborted`)return L;r.status===`dirty`&&t.dirty(),n.add(r.value)}return{status:t.value,value:n}}let o=[...n.data.values()].map((e,t)=>i._parse(new rn(n,e,n.path,t)));return n.common.async?Promise.all(o).then(e=>a(e)):a(o)}min(t,n){return new e({...this._def,minSize:{value:t,message:R.toString(n)}})}max(t,n){return new e({...this._def,maxSize:{value:t,message:R.toString(n)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};Vn.create=(e,t)=>new Vn({valueType:e,minSize:null,maxSize:null,typeName:V.ZodSet,...z(t)});var Hn=class e extends B{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==P.function)return I(t,{code:F.invalid_type,expected:P.function,received:t.parsedType}),L;function n(e,n){return Jt({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,qt(),Wt].filter(e=>!!e),issueData:{code:F.invalid_arguments,argumentsError:n}})}function r(e,n){return Jt({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,qt(),Wt].filter(e=>!!e),issueData:{code:F.invalid_return_type,returnTypeError:n}})}let i={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof Jn){let e=this;return Qt(async function(...t){let o=new Ut([]),s=await e._def.args.parseAsync(t,i).catch(e=>{throw o.addIssue(n(t,e)),o}),c=await Reflect.apply(a,this,s);return await e._def.returns._def.type.parseAsync(c,i).catch(e=>{throw o.addIssue(r(c,e)),o})})}else{let e=this;return Qt(function(...t){let o=e._def.args.safeParse(t,i);if(!o.success)throw new Ut([n(t,o.error)]);let s=Reflect.apply(a,this,o.data),c=e._def.returns.safeParse(s,i);if(!c.success)throw new Ut([r(s,c.error)]);return c.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new e({...this._def,args:Rn.create(t).rest(Dn.create())})}returns(t){return new e({...this._def,returns:t})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(t,n,r){return new e({args:t||Rn.create([]).rest(Dn.create()),returns:n||Dn.create(),typeName:V.ZodFunction,...z(r)})}},Un=class extends B{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};Un.create=(e,t)=>new Un({getter:e,typeName:V.ZodLazy,...z(t)});var Wn=class extends B{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return I(t,{received:t.data,code:F.invalid_literal,expected:this._def.value}),L}return{status:`valid`,value:e.data}}get value(){return this._def.value}};Wn.create=(e,t)=>new Wn({value:e,typeName:V.ZodLiteral,...z(t)});function Gn(e,t){return new Kn({values:e,typeName:V.ZodEnum,...z(t)})}var Kn=class e extends B{_parse(e){if(typeof e.data!=`string`){let t=this._getOrReturnCtx(e),n=this._def.values;return I(t,{expected:N.joinValues(n),received:t.parsedType,code:F.invalid_type}),L}if(this._def.values.indexOf(e.data)===-1){let t=this._getOrReturnCtx(e),n=this._def.values;return I(t,{received:t.data,code:F.invalid_enum_value,options:n}),L}return Qt(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(t){return e.create(t)}exclude(t){return e.create(this.options.filter(e=>!t.includes(e)))}};Kn.create=Gn;var qn=class extends B{_parse(e){let t=N.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==P.string&&n.parsedType!==P.number){let e=N.objectValues(t);return I(n,{expected:N.joinValues(e),received:n.parsedType,code:F.invalid_type}),L}if(t.indexOf(e.data)===-1){let e=N.objectValues(t);return I(n,{received:n.data,code:F.invalid_enum_value,options:e}),L}return Qt(e.data)}get enum(){return this._def.values}};qn.create=(e,t)=>new qn({values:e,typeName:V.ZodNativeEnum,...z(t)});var Jn=class extends B{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==P.promise&&t.common.async===!1?(I(t,{code:F.invalid_type,expected:P.promise,received:t.parsedType}),L):Qt((t.parsedType===P.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}};Jn.create=(e,t)=>new Jn({type:e,typeName:V.ZodPromise,...z(t)});var Yn=class extends B{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===V.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:e=>{I(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),r.type===`preprocess`){let e=r.transform(n.data,i);return n.common.issues.length?{status:`dirty`,value:n.data}:n.common.async?Promise.resolve(e).then(e=>this._def.schema._parseAsync({data:e,path:n.path,parent:n})):this._def.schema._parseSync({data:e,path:n.path,parent:n})}if(r.type===`refinement`){let e=e=>{let t=r.refinement(e,i);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error(`Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`);return e};if(n.common.async===!1){let r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return r.status===`aborted`?L:(r.status===`dirty`&&t.dirty(),e(r.value),{status:t.value,value:r.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(n=>n.status===`aborted`?L:(n.status===`dirty`&&t.dirty(),e(n.value).then(()=>({status:t.value,value:n.value}))))}if(r.type===`transform`)if(n.common.async===!1){let e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!tn(e))return e;let a=r.transform(e.value,i);if(a instanceof Promise)throw Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(e=>tn(e)?Promise.resolve(r.transform(e.value,i)).then(e=>({status:t.value,value:e})):e);N.assertNever(r)}};Yn.create=(e,t,n)=>new Yn({schema:e,typeName:V.ZodEffects,effect:t,...z(n)}),Yn.createWithPreprocess=(e,t,n)=>new Yn({schema:t,effect:{type:`preprocess`,transform:e},typeName:V.ZodEffects,...z(n)});var Xn=class extends B{_parse(e){return this._getType(e)===P.undefined?Qt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Xn.create=(e,t)=>new Xn({innerType:e,typeName:V.ZodOptional,...z(t)});var Zn=class extends B{_parse(e){return this._getType(e)===P.null?Qt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Zn.create=(e,t)=>new Zn({innerType:e,typeName:V.ZodNullable,...z(t)});var Qn=class extends B{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return t.parsedType===P.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};Qn.create=(e,t)=>new Qn({innerType:e,typeName:V.ZodDefault,defaultValue:typeof t.default==`function`?t.default:()=>t.default,...z(t)});var $n=class extends B{_parse(e){let{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return nn(r)?r.then(e=>({status:`valid`,value:e.status===`valid`?e.value:this._def.catchValue({get error(){return new Ut(n.common.issues)},input:n.data})})):{status:`valid`,value:r.status===`valid`?r.value:this._def.catchValue({get error(){return new Ut(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}};$n.create=(e,t)=>new $n({innerType:e,typeName:V.ZodCatch,catchValue:typeof t.catch==`function`?t.catch:()=>t.catch,...z(t)});var er=class extends B{_parse(e){if(this._getType(e)!==P.nan){let t=this._getOrReturnCtx(e);return I(t,{code:F.invalid_type,expected:P.nan,received:t.parsedType}),L}return{status:`valid`,value:e.data}}};er.create=e=>new er({typeName:V.ZodNaN,...z(e)});var tr=Symbol(`zod_brand`),nr=class extends B{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}},rr=class e extends B{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?L:e.status===`dirty`?(t.dirty(),Zt(e.value)):this._def.out._parseAsync({data:e.value,path:n.path,parent:n})})();{let e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?L:e.status===`dirty`?(t.dirty(),{status:`dirty`,value:e.value}):this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(t,n){return new e({in:t,out:n,typeName:V.ZodPipeline})}},ir=class extends B{_parse(e){let t=this._def.innerType._parse(e);return tn(t)&&(t.value=Object.freeze(t.value)),t}};ir.create=(e,t)=>new ir({innerType:e,typeName:V.ZodReadonly,...z(t)});var ar=(e,t={},n)=>e?En.create().superRefine((r,i)=>{if(!e(r)){let e=typeof t==`function`?t(r):typeof t==`string`?{message:t}:t,a=e.fatal??n??!0,o=typeof e==`string`?{message:e}:e;i.addIssue({code:`custom`,...o,fatal:a})}}):En.create(),or={object:Mn.lazycreate},V;(function(e){e.ZodString=`ZodString`,e.ZodNumber=`ZodNumber`,e.ZodNaN=`ZodNaN`,e.ZodBigInt=`ZodBigInt`,e.ZodBoolean=`ZodBoolean`,e.ZodDate=`ZodDate`,e.ZodSymbol=`ZodSymbol`,e.ZodUndefined=`ZodUndefined`,e.ZodNull=`ZodNull`,e.ZodAny=`ZodAny`,e.ZodUnknown=`ZodUnknown`,e.ZodNever=`ZodNever`,e.ZodVoid=`ZodVoid`,e.ZodArray=`ZodArray`,e.ZodObject=`ZodObject`,e.ZodUnion=`ZodUnion`,e.ZodDiscriminatedUnion=`ZodDiscriminatedUnion`,e.ZodIntersection=`ZodIntersection`,e.ZodTuple=`ZodTuple`,e.ZodRecord=`ZodRecord`,e.ZodMap=`ZodMap`,e.ZodSet=`ZodSet`,e.ZodFunction=`ZodFunction`,e.ZodLazy=`ZodLazy`,e.ZodLiteral=`ZodLiteral`,e.ZodEnum=`ZodEnum`,e.ZodEffects=`ZodEffects`,e.ZodNativeEnum=`ZodNativeEnum`,e.ZodOptional=`ZodOptional`,e.ZodNullable=`ZodNullable`,e.ZodDefault=`ZodDefault`,e.ZodCatch=`ZodCatch`,e.ZodPromise=`ZodPromise`,e.ZodBranded=`ZodBranded`,e.ZodPipeline=`ZodPipeline`,e.ZodReadonly=`ZodReadonly`})(V||(V={}));var sr=(e,t={message:`Input not instance of ${e.name}`})=>ar(t=>t instanceof e,t),cr=_n.create,lr=yn.create,ur=er.create,dr=bn.create,fr=xn.create,pr=Sn.create,mr=Cn.create,hr=wn.create,gr=Tn.create,_r=En.create,vr=Dn.create,yr=On.create,br=kn.create,xr=An.create,Sr=Mn.create,Cr=Mn.strictCreate,wr=Nn.create,Tr=Fn.create,Er=Ln.create,Dr=Rn.create,Or=zn.create,kr=Bn.create,Ar=Vn.create,jr=Hn.create,Mr=Un.create,Nr=Wn.create,Pr=Kn.create,Fr=qn.create,Ir=Jn.create,Lr=Yn.create,Rr=Xn.create,zr=Zn.create,Br=Yn.createWithPreprocess,Vr=rr.create,H=Object.freeze({__proto__:null,defaultErrorMap:Wt,setErrorMap:Kt,getErrorMap:qt,makeIssue:Jt,EMPTY_PATH:Yt,addIssueToContext:I,ParseStatus:Xt,INVALID:L,DIRTY:Zt,OK:Qt,isAborted:$t,isDirty:en,isValid:tn,isAsync:nn,get util(){return N},get objectUtil(){return Bt},ZodParsedType:P,getParsedType:Vt,ZodType:B,ZodString:_n,ZodNumber:yn,ZodBigInt:bn,ZodBoolean:xn,ZodDate:Sn,ZodSymbol:Cn,ZodUndefined:wn,ZodNull:Tn,ZodAny:En,ZodUnknown:Dn,ZodNever:On,ZodVoid:kn,ZodArray:An,ZodObject:Mn,ZodUnion:Nn,ZodDiscriminatedUnion:Fn,ZodIntersection:Ln,ZodTuple:Rn,ZodRecord:zn,ZodMap:Bn,ZodSet:Vn,ZodFunction:Hn,ZodLazy:Un,ZodLiteral:Wn,ZodEnum:Kn,ZodNativeEnum:qn,ZodPromise:Jn,ZodEffects:Yn,ZodTransformer:Yn,ZodOptional:Xn,ZodNullable:Zn,ZodDefault:Qn,ZodCatch:$n,ZodNaN:er,BRAND:tr,ZodBranded:nr,ZodPipeline:rr,ZodReadonly:ir,custom:ar,Schema:B,ZodSchema:B,late:or,get ZodFirstPartyTypeKind(){return V},coerce:{string:(e=>_n.create({...e,coerce:!0})),number:(e=>yn.create({...e,coerce:!0})),boolean:(e=>xn.create({...e,coerce:!0})),bigint:(e=>bn.create({...e,coerce:!0})),date:(e=>Sn.create({...e,coerce:!0}))},any:_r,array:xr,bigint:dr,boolean:fr,date:pr,discriminatedUnion:Tr,effect:Lr,enum:Pr,function:jr,instanceof:sr,intersection:Er,lazy:Mr,literal:Nr,map:kr,nan:ur,nativeEnum:Fr,never:yr,null:gr,nullable:zr,number:lr,object:Sr,oboolean:()=>fr().optional(),onumber:()=>lr().optional(),optional:Rr,ostring:()=>cr().optional(),pipeline:Vr,preprocess:Br,promise:Ir,record:Or,set:Ar,strictObject:Cr,string:cr,symbol:mr,transformer:Lr,tuple:Dr,undefined:hr,union:wr,unknown:vr,void:br,NEVER:L,ZodIssueCode:F,quotelessJson:Ht,ZodError:Ut}),Hr=H.object({message:H.string()});function U(e){return H.literal(Rt[e])}H.object({accessList:H.array(H.string()),blockHash:H.string().nullable(),blockNumber:H.string().nullable(),chainId:H.string().or(H.number()),from:H.string(),gas:H.string(),hash:H.string(),input:H.string().nullable(),maxFeePerGas:H.string(),maxPriorityFeePerGas:H.string(),nonce:H.string(),r:H.string(),s:H.string(),to:H.string(),transactionIndex:H.string().nullable(),type:H.string(),v:H.string(),value:H.string()});var Ur=H.object({chainId:H.string().or(H.number())}),Wr=H.object({email:H.string().email()}),Gr=H.object({otp:H.string()}),Kr=H.object({uri:H.string()}),qr=H.object({chainId:H.optional(H.string().or(H.number())),preferredAccountType:H.optional(H.string())}),Jr=H.object({provider:H.enum([`google`,`github`,`apple`,`facebook`,`x`,`discord`])}),Yr=H.object({email:H.string().email()}),Xr=H.object({otp:H.string()}),Zr=H.object({otp:H.string()}),Qr=H.object({themeMode:H.optional(H.enum([`light`,`dark`])),themeVariables:H.optional(H.record(H.string(),H.string().or(H.number()))),w3mThemeVariables:H.optional(H.record(H.string(),H.string()))}),$r=H.object({metadata:H.object({name:H.string(),description:H.string(),url:H.string(),icons:H.array(H.string())}).optional(),sdkVersion:H.string(),projectId:H.string()}),ei=H.object({type:H.string()}),ti=H.object({action:H.enum([`VERIFY_DEVICE`,`VERIFY_OTP`])}),ni=H.object({url:H.string()}),ri=H.object({userName:H.string()}),ii=H.object({email:H.string(),address:H.string(),chainId:H.string().or(H.number()),accounts:H.array(H.object({address:H.string(),type:H.enum([zt.ACCOUNT_TYPES.EOA,zt.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),userName:H.string().optional()}),ai=H.object({action:H.enum([`VERIFY_PRIMARY_OTP`,`VERIFY_SECONDARY_OTP`])}),oi=H.object({email:H.string().email().optional().nullable(),address:H.string(),chainId:H.string().or(H.number()),smartAccountDeployed:H.optional(H.boolean()),accounts:H.array(H.object({address:H.string(),type:H.enum([zt.ACCOUNT_TYPES.EOA,zt.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),preferredAccountType:H.optional(H.string())}),si=H.object({uri:H.string()}),ci=H.object({isConnected:H.boolean()}),li=H.object({chainId:H.string().or(H.number())}),ui=H.object({chainId:H.string().or(H.number())}),di=H.object({newEmail:H.string().email()}),fi=H.object({smartAccountEnabledNetworks:H.array(H.number())});H.object({address:H.string(),isDeployed:H.boolean()});var pi=H.object({type:H.string(),address:H.string()}),mi=H.any(),hi=H.object({method:H.literal(`eth_accounts`)}),gi=H.object({method:H.literal(`eth_blockNumber`)}),_i=H.object({method:H.literal(`eth_call`),params:H.array(H.any())}),vi=H.object({method:H.literal(`eth_chainId`)}),yi=H.object({method:H.literal(`eth_estimateGas`),params:H.array(H.any())}),bi=H.object({method:H.literal(`eth_feeHistory`),params:H.array(H.any())}),xi=H.object({method:H.literal(`eth_gasPrice`)}),Si=H.object({method:H.literal(`eth_getAccount`),params:H.array(H.any())}),Ci=H.object({method:H.literal(`eth_getBalance`),params:H.array(H.any())}),wi=H.object({method:H.literal(`eth_getBlockByHash`),params:H.array(H.any())}),Ti=H.object({method:H.literal(`eth_getBlockByNumber`),params:H.array(H.any())}),Ei=H.object({method:H.literal(`eth_getBlockReceipts`),params:H.array(H.any())}),Di=H.object({method:H.literal(`eth_getBlockTransactionCountByHash`),params:H.array(H.any())}),Oi=H.object({method:H.literal(`eth_getBlockTransactionCountByNumber`),params:H.array(H.any())}),ki=H.object({method:H.literal(`eth_getCode`),params:H.array(H.any())}),Ai=H.object({method:H.literal(`eth_getFilterChanges`),params:H.array(H.any())}),ji=H.object({method:H.literal(`eth_getFilterLogs`),params:H.array(H.any())}),Mi=H.object({method:H.literal(`eth_getLogs`),params:H.array(H.any())}),Ni=H.object({method:H.literal(`eth_getProof`),params:H.array(H.any())}),Pi=H.object({method:H.literal(`eth_getStorageAt`),params:H.array(H.any())}),Fi=H.object({method:H.literal(`eth_getTransactionByBlockHashAndIndex`),params:H.array(H.any())}),Ii=H.object({method:H.literal(`eth_getTransactionByBlockNumberAndIndex`),params:H.array(H.any())}),Li=H.object({method:H.literal(`eth_getTransactionByHash`),params:H.array(H.any())}),Ri=H.object({method:H.literal(`eth_getTransactionCount`),params:H.array(H.any())}),zi=H.object({method:H.literal(`eth_getTransactionReceipt`),params:H.array(H.any())}),Bi=H.object({method:H.literal(`eth_getUncleCountByBlockHash`),params:H.array(H.any())}),Vi=H.object({method:H.literal(`eth_getUncleCountByBlockNumber`),params:H.array(H.any())}),Hi=H.object({method:H.literal(`eth_maxPriorityFeePerGas`)}),Ui=H.object({method:H.literal(`eth_newBlockFilter`)}),Wi=H.object({method:H.literal(`eth_newFilter`),params:H.array(H.any())}),Gi=H.object({method:H.literal(`eth_newPendingTransactionFilter`)}),Ki=H.object({method:H.literal(`eth_sendRawTransaction`),params:H.array(H.any())}),qi=H.object({method:H.literal(`eth_syncing`),params:H.array(H.any())}),Ji=H.object({method:H.literal(`eth_uninstallFilter`),params:H.array(H.any())}),Yi=H.object({method:H.literal(`personal_sign`),params:H.array(H.any())}),Xi=H.object({method:H.literal(`eth_signTypedData_v4`),params:H.array(H.any())}),Zi=H.object({method:H.literal(`eth_sendTransaction`),params:H.array(H.any())}),Qi=H.object({method:H.literal(`solana_signMessage`),params:H.object({message:H.string(),pubkey:H.string()})}),$i=H.object({method:H.literal(`solana_signTransaction`),params:H.object({transaction:H.string()})}),ea=H.object({method:H.literal(`solana_signAllTransactions`),params:H.object({transactions:H.array(H.string())})}),ta=H.object({method:H.literal(`solana_signAndSendTransaction`),params:H.object({transaction:H.string(),options:H.object({skipPreflight:H.boolean().optional(),preflightCommitment:H.enum([`processed`,`confirmed`,`finalized`,`recent`,`single`,`singleGossip`,`root`,`max`]).optional(),maxRetries:H.number().optional(),minContextSlot:H.number().optional()}).optional()})}),na=H.object({method:H.literal(`wallet_sendCalls`),params:H.array(H.object({chainId:H.string().or(H.number()).optional(),from:H.string().optional(),version:H.string().optional(),capabilities:H.any().optional(),calls:H.array(H.object({to:H.string().startsWith(`0x`),data:H.string().startsWith(`0x`).optional(),value:H.string().optional()}))}))}),ra=H.object({method:H.literal(`wallet_getCallsStatus`),params:H.array(H.string())}),ia=H.object({method:H.literal(`wallet_getCapabilities`)}),aa=H.object({method:H.literal(`wallet_grantPermissions`),params:H.array(H.any())}),oa=H.object({token:H.string()}),W=H.object({id:H.string().optional()});W.extend({type:U(`APP_SWITCH_NETWORK`),payload:Ur}).or(W.extend({type:U(`APP_CONNECT_EMAIL`),payload:Wr})).or(W.extend({type:U(`APP_CONNECT_DEVICE`)})).or(W.extend({type:U(`APP_CONNECT_OTP`),payload:Gr})).or(W.extend({type:U(`APP_CONNECT_SOCIAL`),payload:Kr})).or(W.extend({type:U(`APP_GET_FARCASTER_URI`)})).or(W.extend({type:U(`APP_CONNECT_FARCASTER`)})).or(W.extend({type:U(`APP_GET_USER`),payload:H.optional(qr)})).or(W.extend({type:U(`APP_GET_SOCIAL_REDIRECT_URI`),payload:Jr})).or(W.extend({type:U(`APP_SIGN_OUT`)})).or(W.extend({type:U(`APP_IS_CONNECTED`),payload:H.optional(oa)})).or(W.extend({type:U(`APP_GET_CHAIN_ID`)})).or(W.extend({type:U(`APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS`)})).or(W.extend({type:U(`APP_INIT_SMART_ACCOUNT`)})).or(W.extend({type:U(`APP_SET_PREFERRED_ACCOUNT`),payload:ei})).or(W.extend({type:U(`APP_RPC_REQUEST`),payload:Yi.or(Zi).or(hi).or(gi).or(_i).or(vi).or(yi).or(bi).or(xi).or(Si).or(Ci).or(wi).or(Ti).or(Ei).or(Di).or(Oi).or(ki).or(Ai).or(ji).or(Mi).or(Ni).or(Pi).or(Fi).or(Ii).or(Li).or(Ri).or(zi).or(Bi).or(Vi).or(Hi).or(Ui).or(Wi).or(Gi).or(Ki).or(qi).or(Ji).or(Yi).or(Xi).or(Zi).or(Qi).or($i).or(ea).or(ta).or(ra).or(na).or(ia).or(aa)})).or(W.extend({type:U(`APP_UPDATE_EMAIL`),payload:Yr})).or(W.extend({type:U(`APP_UPDATE_EMAIL_PRIMARY_OTP`),payload:Xr})).or(W.extend({type:U(`APP_UPDATE_EMAIL_SECONDARY_OTP`),payload:Zr})).or(W.extend({type:U(`APP_SYNC_THEME`),payload:Qr})).or(W.extend({type:U(`APP_SYNC_DAPP_DATA`),payload:$r})),W.extend({type:U(`FRAME_SWITCH_NETWORK_ERROR`),payload:Hr}).or(W.extend({type:U(`FRAME_SWITCH_NETWORK_SUCCESS`),payload:ui})).or(W.extend({type:U(`FRAME_CONNECT_EMAIL_SUCCESS`),payload:ti})).or(W.extend({type:U(`FRAME_CONNECT_EMAIL_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_GET_FARCASTER_URI_SUCCESS`),payload:ni})).or(W.extend({type:U(`FRAME_GET_FARCASTER_URI_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_CONNECT_FARCASTER_SUCCESS`),payload:ri})).or(W.extend({type:U(`FRAME_CONNECT_FARCASTER_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_CONNECT_OTP_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_CONNECT_OTP_SUCCESS`)})).or(W.extend({type:U(`FRAME_CONNECT_DEVICE_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_CONNECT_DEVICE_SUCCESS`)})).or(W.extend({type:U(`FRAME_CONNECT_SOCIAL_SUCCESS`),payload:ii})).or(W.extend({type:U(`FRAME_CONNECT_SOCIAL_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_GET_USER_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_GET_USER_SUCCESS`),payload:oi})).or(W.extend({type:U(`FRAME_GET_SOCIAL_REDIRECT_URI_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS`),payload:si})).or(W.extend({type:U(`FRAME_SIGN_OUT_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_SIGN_OUT_SUCCESS`)})).or(W.extend({type:U(`FRAME_IS_CONNECTED_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_IS_CONNECTED_SUCCESS`),payload:ci})).or(W.extend({type:U(`FRAME_GET_CHAIN_ID_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_GET_CHAIN_ID_SUCCESS`),payload:li})).or(W.extend({type:U(`FRAME_RPC_REQUEST_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_RPC_REQUEST_SUCCESS`),payload:mi})).or(W.extend({type:U(`FRAME_SESSION_UPDATE`),payload:oa})).or(W.extend({type:U(`FRAME_UPDATE_EMAIL_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_UPDATE_EMAIL_SUCCESS`),payload:ai})).or(W.extend({type:U(`FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS`)})).or(W.extend({type:U(`FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS`),payload:di})).or(W.extend({type:U(`FRAME_SYNC_THEME_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_SYNC_THEME_SUCCESS`)})).or(W.extend({type:U(`FRAME_SYNC_DAPP_DATA_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_SYNC_DAPP_DATA_SUCCESS`)})).or(W.extend({type:U(`FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS`),payload:fi})).or(W.extend({type:U(`FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_INIT_SMART_ACCOUNT_ERROR`),payload:Hr})).or(W.extend({type:U(`FRAME_SET_PREFERRED_ACCOUNT_SUCCESS`),payload:pi})).or(W.extend({type:U(`FRAME_SET_PREFERRED_ACCOUNT_ERROR`),payload:Hr}));var sa={set(e,t){ua.isClient&&localStorage.setItem(`${Rt.STORAGE_KEY}${e}`,t)},get(e){return ua.isClient?localStorage.getItem(`${Rt.STORAGE_KEY}${e}`):null},delete(e,t){ua.isClient&&(t?localStorage.removeItem(e):localStorage.removeItem(`${Rt.STORAGE_KEY}${e}`))}},ca={address:/^0x(?:[A-Fa-f0-9]{40})$/u,transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[a-fA-F0-9]{62,})$/u},la=30*1e3,ua={checkIfAllowedToTriggerEmail(){let e=sa.get(Rt.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<la){let e=Math.ceil((la-t)/1e3);throw Error(`Please try again after ${e} seconds`)}}},getTimeToNextEmailLogin(){let e=sa.get(Rt.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<la)return Math.ceil((la-t)/1e3)}return 0},checkIfRequestExists(e){return zt.NOT_SAFE_RPC_METHODS.includes(e.method)||zt.SAFE_RPC_METHODS.includes(e.method)},getResponseType(e){return typeof e==`string`&&(e!=null&&e.match(ca.transactionHash)||e!=null&&e.match(ca.signedMessage))?Rt.RPC_RESPONSE_TYPE_TX:Rt.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsSafe(e){return zt.SAFE_RPC_METHODS.includes(e.method)},isClient:typeof window<`u`},da=t(((e,t)=>{function n(e){try{return JSON.stringify(e)}catch{return`"[Circular]"`}}t.exports=r;function r(e,t,r){var i=r&&r.stringify||n,a=1;if(typeof e==`object`&&e){var o=t.length+a;if(o===1)return e;var s=Array(o);s[0]=i(e);for(var c=1;c<o;c++)s[c]=i(t[c]);return s.join(` `)}if(typeof e!=`string`)return e;var l=t.length;if(l===0)return e;for(var u=``,d=1-a,f=-1,p=e&&e.length||0,m=0;m<p;){if(e.charCodeAt(m)===37&&m+1<p){switch(f=f>-1?f:0,e.charCodeAt(m+1)){case 100:case 102:if(d>=l||t[d]==null)break;f<m&&(u+=e.slice(f,m)),u+=Number(t[d]),f=m+2,m++;break;case 105:if(d>=l||t[d]==null)break;f<m&&(u+=e.slice(f,m)),u+=Math.floor(Number(t[d])),f=m+2,m++;break;case 79:case 111:case 106:if(d>=l||t[d]===void 0)break;f<m&&(u+=e.slice(f,m));var h=typeof t[d];if(h===`string`){u+=`'`+t[d]+`'`,f=m+2,m++;break}if(h===`function`){u+=t[d].name||`<anonymous>`,f=m+2,m++;break}u+=i(t[d]),f=m+2,m++;break;case 115:if(d>=l)break;f<m&&(u+=e.slice(f,m)),u+=String(t[d]),f=m+2,m++;break;case 37:f<m&&(u+=e.slice(f,m)),u+=`%`,f=m+2,m++,d--;break}++d}++m}return f===-1?e:(f<p&&(u+=e.slice(f)),u)}}));t(((e,t)=>{var n=da();t.exports=o;var r=S().console||{},i={mapHttpRequest:g,mapHttpResponse:g,wrapRequestSerializer:_,wrapResponseSerializer:_,wrapErrorSerializer:_,req:g,res:g,err:m};function a(e,t){return Array.isArray(e)?e.filter(function(e){return e!==`!stdSerializers.err`}):e===!0?Object.keys(t):!1}function o(e){e=e||{},e.browser=e.browser||{};let t=e.browser.transmit;if(t&&typeof t.send!=`function`)throw Error(`pino: transmit option must have a send function`);let n=e.browser.write||r;e.browser.write&&(e.browser.asObject=!0);let i=e.serializers||{},c=a(e.browser.serialize,i),l=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf(`!stdSerializers.err`)>-1&&(l=!1);let f=[`error`,`fatal`,`warn`,`info`,`debug`,`trace`];typeof n==`function`&&(n.error=n.fatal=n.warn=n.info=n.debug=n.trace=n),e.enabled===!1&&(e.level=`silent`);let m=e.level||`info`,g=Object.create(n);g.log||(g.log=v),Object.defineProperty(g,`levelVal`,{get:y}),Object.defineProperty(g,`level`,{get:b,set:x});let _={transmit:t,serialize:c,asObject:e.browser.asObject,levels:f,timestamp:h(e)};g.levels=o.levels,g.level=m,g.setMaxListeners=g.getMaxListeners=g.emit=g.addListener=g.on=g.prependListener=g.once=g.prependOnceListener=g.removeListener=g.removeAllListeners=g.listeners=g.listenerCount=g.eventNames=g.write=g.flush=v,g.serializers=i,g._serialize=c,g._stdErrSerialize=l,g.child=ee,t&&(g._logEvent=p());function y(){return this.level===`silent`?1/0:this.levels.values[this.level]}function b(){return this._level}function x(e){if(e!==`silent`&&!this.levels.values[e])throw Error(`unknown level `+e);this._level=e,s(_,g,`error`,`log`),s(_,g,`fatal`,`error`),s(_,g,`warn`,`error`),s(_,g,`info`,`log`),s(_,g,`debug`,`log`),s(_,g,`trace`,`log`)}function ee(n,r){if(!n)throw Error(`missing bindings for child Pino`);r=r||{},c&&n.serializers&&(r.serializers=n.serializers);let a=r.serializers;if(c&&a){var o=Object.assign({},i,a),s=e.browser.serialize===!0?Object.keys(o):c;delete n.serializers,u([n],s,o,this._stdErrSerialize)}function l(e){this._childLevel=(e._childLevel|0)+1,this.error=d(e,n,`error`),this.fatal=d(e,n,`fatal`),this.warn=d(e,n,`warn`),this.info=d(e,n,`info`),this.debug=d(e,n,`debug`),this.trace=d(e,n,`trace`),o&&(this.serializers=o,this._serialize=s),t&&(this._logEvent=p([].concat(e._logEvent.bindings,n)))}return l.prototype=this,new l(this)}return g}o.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:`trace`,20:`debug`,30:`info`,40:`warn`,50:`error`,60:`fatal`}},o.stdSerializers=i,o.stdTimeFunctions=Object.assign({},{nullTime:y,epochTime:b,unixTime:x,isoTime:ee});function s(e,t,n,i){let a=Object.getPrototypeOf(t);t[n]=t.levelVal>t.levels.values[n]?v:a[n]?a[n]:r[n]||r[i]||v,c(e,t,n)}function c(e,t,n){!e.transmit&&t[n]===v||(t[n]=(function(i){return function(){let a=e.timestamp(),s=Array(arguments.length),c=Object.getPrototypeOf&&Object.getPrototypeOf(this)===r?r:this;for(var d=0;d<s.length;d++)s[d]=arguments[d];if(e.serialize&&!e.asObject&&u(s,this._serialize,this.serializers,this._stdErrSerialize),e.asObject?i.call(c,l(this,n,s,a)):i.apply(c,s),e.transmit){let r=e.transmit.level||t.level,i=o.levels.values[r],c=o.levels.values[n];if(c<i)return;f(this,{ts:a,methodLevel:n,methodValue:c,transmitLevel:r,transmitValue:o.levels.values[e.transmit.level||t.level],send:e.transmit.send,val:t.levelVal},s)}}})(t[n]))}function l(e,t,r,i){e._serialize&&u(r,e._serialize,e.serializers,e._stdErrSerialize);let a=r.slice(),s=a[0],c={};i&&(c.time=i),c.level=o.levels.values[t];let l=(e._childLevel|0)+1;if(l<1&&(l=1),typeof s==`object`&&s){for(;l--&&typeof a[0]==`object`;)Object.assign(c,a.shift());s=a.length?n(a.shift(),a):void 0}else typeof s==`string`&&(s=n(a.shift(),a));return s!==void 0&&(c.msg=s),c}function u(e,t,n,r){for(let i in e)if(r&&e[i]instanceof Error)e[i]=o.stdSerializers.err(e[i]);else if(typeof e[i]==`object`&&!Array.isArray(e[i]))for(let r in e[i])t&&t.indexOf(r)>-1&&r in n&&(e[i][r]=n[r](e[i][r]))}function d(e,t,n){return function(){let r=Array(1+arguments.length);r[0]=t;for(var i=1;i<r.length;i++)r[i]=arguments[i-1];return e[n].apply(this,r)}}function f(e,t,n){let r=t.send,i=t.ts,a=t.methodLevel,o=t.methodValue,s=t.val,c=e._logEvent.bindings;u(n,e._serialize||Object.keys(e.serializers),e.serializers,e._stdErrSerialize===void 0?!0:e._stdErrSerialize),e._logEvent.ts=i,e._logEvent.messages=n.filter(function(e){return c.indexOf(e)===-1}),e._logEvent.level.label=a,e._logEvent.level.value=o,r(a,e._logEvent,s),e._logEvent=p(c)}function p(e){return{ts:0,messages:[],bindings:e||[],level:{label:``,value:0}}}function m(e){let t={type:e.constructor.name,msg:e.message,stack:e.stack};for(let n in e)t[n]===void 0&&(t[n]=e[n]);return t}function h(e){return typeof e.timestamp==`function`?e.timestamp:e.timestamp===!1?y:b}function g(){return{}}function _(e){return e}function v(){}function y(){return!1}function b(){return Date.now()}function x(){return Math.round(Date.now()/1e3)}function ee(){return new Date(Date.now()).toISOString()}function S(){function e(e){return e!==void 0&&e}try{return typeof globalThis<`u`||Object.defineProperty(Object.prototype,`globalThis`,{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return e(self)||e(window)||e(this)||{}}}}))();var G=ce({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),fa={state:G,subscribe(e){return le(G,()=>e(G))},setLastNetworkInView(e){G.lastNetworkInView=e},async fetchTransactions(e,t){let{projectId:n}=M.state;if(!n||!e)throw Error(`Transactions can't be fetched without a projectId and an accountAddress`);G.loading=!0;try{var r;let i=await jt.fetchTransactions({account:e,projectId:n,cursor:G.next,onramp:t,cache:t===`coinbase`?`no-cache`:void 0,chainId:(r=A.state.caipNetwork)==null?void 0:r.id}),a=this.filterSpamTransactions(i.data),o=this.filterByConnectedChain(a),s=[...G.transactions,...o];G.loading=!1,t===`coinbase`?G.coinbaseTransactions=this.groupTransactionsByYearAndMonth(G.coinbaseTransactions,i.data):(G.transactions=s,G.transactionsByYear=this.groupTransactionsByYearAndMonth(G.transactionsByYear,o)),G.empty=s.length===0,G.next=i.next?i.next:void 0}catch{gt.sendEvent({type:`track`,event:`ERROR_FETCH_TRANSACTIONS`,properties:{address:e,projectId:n,cursor:G.next,isSmartAccount:J.state.preferredAccountType===zt.ACCOUNT_TYPES.SMART_ACCOUNT}}),Nt.showError(`Failed to fetch transactions`),G.loading=!1,G.empty=!0,G.next=void 0}},groupTransactionsByYearAndMonth(e={},t=[]){let n=e;return t.forEach(e=>{let t=new Date(e.metadata.minedAt).getFullYear(),r=new Date(e.metadata.minedAt).getMonth(),i=n[t]??{},a=(i[r]??[]).filter(t=>t.id!==e.id);n[t]={...i,[r]:[...a,e].sort((e,t)=>new Date(t.metadata.minedAt).getTime()-new Date(e.metadata.minedAt).getTime())}}),n},filterSpamTransactions(e){return e.filter(e=>!e.transfers.every(e=>{var t;return((t=e.nft_info)==null?void 0:t.flags.is_spam)===!0}))},filterByConnectedChain(e){var t;let n=(t=A.state.caipNetwork)==null?void 0:t.id;return e.filter(e=>e.metadata.chain===n)},clearCursor(){G.next=void 0},resetTransactions(){G.transactions=[],G.transactionsByYear={},G.lastNetworkInView=void 0,G.loading=!1,G.empty=!1,G.next=void 0}},pa=ce({wcError:!1,buffering:!1}),ma={state:pa,subscribeKey(e,t){return T(pa,e,t)},_getClient(e){return k.getConnectionControllerClient(e)},setClient(e){pa._client=de(e)},async connectWalletConnect(){ot.setConnectedConnector(`WALLET_CONNECT`),await this._getClient().connectWalletConnect(e=>{pa.wcUri=e,pa.wcPairingExpiry=Qe.getPairingExpiry()})},async connectExternal(e,t){var n,r;await((n=(r=this._getClient(t)).connectExternal)==null?void 0:n.call(r,e)),k.setActiveChain(t),ot.setConnectedConnector(e.type)},async reconnectExternal(e){var t,n;await((t=(n=this._getClient()).reconnectExternal)==null?void 0:t.call(n,e)),ot.setConnectedConnector(e.type)},async setPreferredAccountType(e){var t;Ca.setLoading(!0);let n=ft.getAuthConnector();n&&(await(n==null?void 0:n.provider.setPreferredAccount(e)),await this.reconnectExternal(n),Ca.setLoading(!1),gt.sendEvent({type:`track`,event:`SET_PREFERRED_ACCOUNT_TYPE`,properties:{accountType:e,network:((t=A.state.caipNetwork)==null?void 0:t.id)||``}}))},async signMessage(e){return this._getClient().signMessage(e)},parseUnits(e,t){return this._getClient().parseUnits(e,t)},formatUnits(e,t){return this._getClient().formatUnits(e,t)},async sendTransaction(e){return this._getClient().sendTransaction(e)},async estimateGas(e){return this._getClient().estimateGas(e)},async writeContract(e){return this._getClient().writeContract(e)},async getEnsAddress(e){return this._getClient().getEnsAddress(e)},async getEnsAvatar(e){return this._getClient().getEnsAvatar(e)},checkInstalled(e,t){var n,r;return((n=(r=this._getClient(t)).checkInstalled)==null?void 0:n.call(r,e))||!1},resetWcConnection(){pa.wcUri=void 0,pa.wcPairingExpiry=void 0,pa.wcLinking=void 0,pa.recentWallet=void 0,fa.resetTransactions(),ot.deleteWalletConnectDeepLink()},setWcLinking(e){pa.wcLinking=e},setWcError(e){pa.wcError=e,pa.buffering=!1},setRecentWallet(e){pa.recentWallet=e},setBuffering(e){pa.buffering=e},async disconnect(){let e=this._getClient();try{await e.disconnect(),this.resetWcConnection()}catch{throw Error(`Failed to disconnect`)}}},ha={async getTokenList(){var e;let t=A.state.caipNetwork,n=await jt.fetchSwapTokens({chainId:t==null?void 0:t.id,projectId:M.state.projectId});return(n==null||(e=n.tokens)==null?void 0:e.map(e=>({...e,eip2612:!1,quantity:{decimals:`0`,numeric:`0`},price:0,value:0})))||[]},async fetchGasPrice(){let e=M.state.projectId,t=A.state.caipNetwork;if(!t)return null;try{switch(t.chain){case`solana`:let n=(await ma.estimateGas({chainNamespace:`solana`})).toString();return{standard:n,fast:n,instant:n};default:return await jt.fetchGasPrice({projectId:e,chainId:t.id})}}catch{return null}},async fetchSwapAllowance({tokenAddress:e,userAddress:t,sourceTokenAmount:n,sourceTokenDecimals:r}){let i=M.state.projectId,a=await jt.fetchSwapAllowance({projectId:i,tokenAddress:e,userAddress:t});if(a!=null&&a.allowance&&n&&r){let e=ma.parseUnits(n,r)||0;return BigInt(a.allowance)>=e}return!1},async getMyTokensWithBalance(e){let t=J.state.address,n=A.state.caipNetwork;if(!t||!n)return[];let r=(await jt.getBalance(t,n.id,e)).balances.filter(e=>e.quantity.decimals!==`0`);return J.setTokenBalance(r,k.state.activeChain),this.mapBalancesToSwapTokens(r)},mapBalancesToSwapTokens(e){return(e==null?void 0:e.map(e=>({...e,address:e!=null&&e.address?e.address:A.getActiveNetworkTokenAddress(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1})))||[]}},K=ce({view:`Connect`,history:[`Connect`],transactionStack:[]}),ga={state:K,subscribeKey(e,t){return T(K,e,t)},pushTransactionStack(e){K.transactionStack.push(e)},popTransactionStack(e){let t=K.transactionStack.pop();if(t)if(e){var n;this.goBack(),t==null||(n=t.onCancel)==null||n.call(t)}else{var r;t.goBack?this.goBack():t.view&&this.reset(t.view),t==null||(r=t.onSuccess)==null||r.call(t)}},push(e,t){e!==K.view&&(K.view=e,K.history.push(e),K.data=t)},reset(e){K.view=e,K.history=[e]},replace(e,t){K.history.length>=1&&K.history.at(-1)!==e&&(K.view=e,K.history[K.history.length-1]=e,K.data=t)},goBack(){if(K.history.length>1){K.history.pop();let[e]=K.history.slice(-1);e&&(K.view=e)}},goBackToIndex(e){if(K.history.length>1){K.history=K.history.slice(0,e+1);let[t]=K.history.slice(-1);t&&(K.view=t)}}},_a={getGasPriceInEther(e,t){let n=t*e;return Number(n)/0xde0b6b3a7640000},getGasPriceInUSD(e,t,n){let r=_a.getGasPriceInEther(t,n);return D.bigNumber(e).multipliedBy(r).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:n,toTokenAmount:r}){let i=D.bigNumber(e).multipliedBy(t),a=D.bigNumber(r).multipliedBy(n);return i.minus(a).dividedBy(i).multipliedBy(100).toNumber()},getMaxSlippage(e,t){let n=D.bigNumber(e).dividedBy(100);return D.multiply(t,n).toNumber()},getProviderFee(e,t=.0085){return D.bigNumber(e).multipliedBy(t).toString()},isInsufficientNetworkTokenForGas(e,t){let n=t||`0`;return D.bigNumber(e).isZero()?!0:D.bigNumber(D.bigNumber(n)).isGreaterThan(e)},isInsufficientSourceTokenForSwap(e,t,n){var r;let i=n==null||(r=n.find(e=>e.address===t))==null||(r=r.quantity)==null?void 0:r.numeric;return D.bigNumber(i||`0`).isLessThan(e)},getToTokenAmount({sourceToken:e,toToken:t,sourceTokenPrice:n,toTokenPrice:r,sourceTokenAmount:i}){if(i===`0`||!e||!t)return`0`;let a=e.decimals,o=n,s=t.decimals,c=r;if(c<=0)return`0`;let l=D.bigNumber(i).multipliedBy(.0085),u=D.bigNumber(i).minus(l).multipliedBy(D.bigNumber(10).pow(a)),d=D.bigNumber(o).dividedBy(c),f=a-s;return u.multipliedBy(d).dividedBy(D.bigNumber(10).pow(f)).dividedBy(D.bigNumber(10).pow(s)).toFixed(s).toString()}},va=15e4,ya={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:``,sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:``,toTokenPriceInUSD:0,networkPrice:`0`,networkBalanceInUSD:`0`,networkTokenSymbol:``,inputError:void 0,slippage:Ze.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:`0`,gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},q=ce(ya),ba={state:q,subscribe(e){return le(q,()=>e(q))},subscribeKey(e,t){return T(q,e,t)},getParams(){var e,t,n,r,i,a,o,s;let c=J.state.address,l=A.getActiveNetworkTokenAddress(),u=ot.getConnectedConnector(),d=ft.getAuthConnector();if(!c)throw Error(`No address found to swap the tokens from.`);let f=J.state.caipAddress,p=!((e=q.toToken)!=null&&e.address)||!((t=q.toToken)!=null&&t.decimals),m=!((n=q.sourceToken)!=null&&n.address)||!((r=q.sourceToken)!=null&&r.decimals)||!D.bigNumber(q.sourceTokenAmount).isGreaterThan(0),h=!q.sourceTokenAmount;return{networkAddress:l,fromAddress:c,fromCaipAddress:J.state.caipAddress,sourceTokenAddress:(i=q.sourceToken)==null?void 0:i.address,toTokenAddress:(a=q.toToken)==null?void 0:a.address,toTokenAmount:q.toTokenAmount,toTokenDecimals:(o=q.toToken)==null?void 0:o.decimals,sourceTokenAmount:q.sourceTokenAmount,sourceTokenDecimals:(s=q.sourceToken)==null?void 0:s.decimals,invalidToToken:p,invalidSourceToken:m,invalidSourceTokenAmount:h,availableToSwap:f&&!p&&!m&&!h,isAuthConnector:(d==null?void 0:d.walletFeatures)&&u===`AUTH`}},setSourceToken(e){if(!e){q.sourceToken=e,q.sourceTokenAmount=``,q.sourceTokenPriceInUSD=0;return}q.sourceToken=e,this.setTokenPrice(e.address,`sourceToken`)},setSourceTokenAmount(e){q.sourceTokenAmount=e},setToToken(e){if(!e){q.toToken=e,q.toTokenAmount=``,q.toTokenPriceInUSD=0;return}q.toToken=e,this.setTokenPrice(e.address,`toToken`)},setToTokenAmount(e){q.toTokenAmount=e?D.formatNumberToLocalString(e,6):``},async setTokenPrice(e,t){let{availableToSwap:n}=this.getParams(),r=q.tokensPriceMap[e]||0;r||(q.loadingPrices=!0,r=await this.getAddressPrice(e)),t===`sourceToken`?q.sourceTokenPriceInUSD=r:t===`toToken`&&(q.toTokenPriceInUSD=r),q.loadingPrices&&(q.loadingPrices=!1,n&&this.swapTokens())},switchTokens(){if(q.initializing||!q.initialized)return;let e=q.toToken?{...q.toToken}:void 0,t=q.sourceToken?{...q.sourceToken}:void 0,n=e&&q.toTokenAmount===``?`1`:q.toTokenAmount;this.setSourceToken(e),this.setToToken(t),this.setSourceTokenAmount(n),this.setToTokenAmount(``),this.swapTokens()},resetState(){q.myTokensWithBalance=ya.myTokensWithBalance,q.tokensPriceMap=ya.tokensPriceMap,q.initialized=ya.initialized,q.sourceToken=ya.sourceToken,q.sourceTokenAmount=ya.sourceTokenAmount,q.sourceTokenPriceInUSD=ya.sourceTokenPriceInUSD,q.toToken=ya.toToken,q.toTokenAmount=ya.toTokenAmount,q.toTokenPriceInUSD=ya.toTokenPriceInUSD,q.networkPrice=ya.networkPrice,q.networkTokenSymbol=ya.networkTokenSymbol,q.networkBalanceInUSD=ya.networkBalanceInUSD,q.inputError=ya.inputError},resetValues(){var e;let{networkAddress:t}=this.getParams(),n=(e=q.tokens)==null?void 0:e.find(e=>e.address===t);this.setSourceToken(n),this.setToToken(void 0)},getApprovalLoadingState(){return q.loadingApprovalTransaction},clearError(){q.transactionError=void 0},async initializeState(){if(!q.initializing){if(q.initializing=!0,!q.initialized)try{await this.fetchTokens(),q.initialized=!0}catch{q.initialized=!1,Nt.showError(`Failed to initialize swap`),ga.goBack()}q.initializing=!1}},async fetchTokens(){var e;let{networkAddress:t}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();let n=(e=q.tokens)==null?void 0:e.find(e=>e.address===t);n&&(q.networkTokenSymbol=n.symbol,this.setSourceToken(n),this.setSourceTokenAmount(`1`))},async getTokenList(){let e=await ha.getTokenList();q.tokens=e,q.popularTokens=e.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0),q.suggestedTokens=e.filter(e=>!!Ze.SWAP_SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(e){var t,n;let r=q.tokensPriceMap[e];if(r)return r;let i=(await jt.fetchTokenPrice({projectId:M.state.projectId,addresses:[e]})).fungibles||[],a=[...q.tokens||[],...q.myTokensWithBalance||[]],o=a==null||(t=a.find(t=>t.address===e))==null?void 0:t.symbol,s=((n=i.find(e=>e.symbol.toLowerCase()===(o==null?void 0:o.toLowerCase())))==null?void 0:n.price)||0,c=parseFloat(s.toString());return q.tokensPriceMap[e]=c,c},async getNetworkTokenPrice(){var e;let{networkAddress:t}=this.getParams(),n=(e=(await jt.fetchTokenPrice({projectId:M.state.projectId,addresses:[t]}).catch(()=>(Nt.showError(`Failed to fetch network token price`),{fungibles:[]}))).fungibles)==null?void 0:e[0],r=(n==null?void 0:n.price.toString())||`0`;q.tokensPriceMap[t]=parseFloat(r),q.networkTokenSymbol=(n==null?void 0:n.symbol)||``,q.networkPrice=r},async getMyTokensWithBalance(e){let t=await ha.getMyTokensWithBalance(e);t&&(await this.getInitialGasPrice(),this.setBalances(t))},setBalances(e){let{networkAddress:t}=this.getParams(),n=A.state.caipNetwork;if(!n)return;let r=e.find(e=>e.address===t);e.forEach(e=>{q.tokensPriceMap[e.address]=e.price||0}),q.myTokensWithBalance=e.filter(e=>e.address.startsWith(n.id)),q.networkBalanceInUSD=r?D.multiply(r.quantity.numeric,r.price).toString():`0`},async getInitialGasPrice(){var e;let t=await ha.fetchGasPrice();if(!t)return{gasPrice:null,gasPriceInUSD:null};switch((e=A.state.caipNetwork)==null?void 0:e.chain){case`solana`:return q.gasFee=t.standard,q.gasPriceInUSD=D.multiply(t.standard,q.networkPrice).dividedBy(1e9).toNumber(),{gasPrice:BigInt(q.gasFee),gasPriceInUSD:Number(q.gasPriceInUSD)};default:let e=t.standard,n=BigInt(e),r=BigInt(va),i=_a.getGasPriceInUSD(q.networkPrice,r,n);return q.gasFee=e,q.gasPriceInUSD=i,{gasPrice:n,gasPriceInUSD:i}}},async swapTokens(){var e;let t=J.state.address,n=q.sourceToken,r=q.toToken,i=D.bigNumber(q.sourceTokenAmount).isGreaterThan(0);if(!r||!n||q.loadingPrices||!i)return;q.loadingQuote=!0;let a=D.bigNumber(q.sourceTokenAmount).multipliedBy(10**n.decimals),o=await jt.fetchSwapQuote({userAddress:t,projectId:M.state.projectId,from:n.address,to:r.address,gasPrice:q.gasFee,amount:a.toString()});q.loadingQuote=!1;let s=o==null||(e=o.quotes)==null||(e=e[0])==null?void 0:e.toAmount;if(!s)return;let c=D.bigNumber(s).dividedBy(10**r.decimals).toString();this.setToTokenAmount(c),this.hasInsufficientToken(q.sourceTokenAmount,n.address)?q.inputError=`Insufficient balance`:(q.inputError=void 0,this.setTransactionDetails())},async getTransaction(){let{fromCaipAddress:e,availableToSwap:t}=this.getParams(),n=q.sourceToken,r=q.toToken;if(!(!e||!t||!n||!r||q.loadingQuote))try{q.loadingBuildTransaction=!0;let t=await ha.fetchSwapAllowance({userAddress:e,tokenAddress:n.address,sourceTokenAmount:q.sourceTokenAmount,sourceTokenDecimals:n.decimals}),r;return r=t?await this.createSwapTransaction():await this.createAllowanceTransaction(),q.loadingBuildTransaction=!1,q.fetchError=!1,r}catch{ga.goBack(),Nt.showError(`Failed to check allowance`),q.loadingBuildTransaction=!1,q.approvalTransaction=void 0,q.swapTransaction=void 0,q.fetchError=!0;return}},async createAllowanceTransaction(){let{fromCaipAddress:e,fromAddress:t,sourceTokenAddress:n,toTokenAddress:r}=this.getParams();if(!(!e||!r)){if(!n)throw Error(`createAllowanceTransaction - No source token address found.`);try{let i=await jt.generateApproveCalldata({projectId:M.state.projectId,from:n,to:r,userAddress:e}),a=await ma.estimateGas({address:t,to:Qe.getPlainAddress(i.tx.to),data:i.tx.data}),o={data:i.tx.data,to:Qe.getPlainAddress(i.tx.from),gas:a,gasPrice:BigInt(i.tx.eip155.gasPrice),value:BigInt(i.tx.value),toAmount:q.toTokenAmount};return q.swapTransaction=void 0,q.approvalTransaction=o,o}catch{ga.goBack(),Nt.showError(`Failed to create approval transaction`),q.approvalTransaction=void 0,q.swapTransaction=void 0,q.fetchError=!0;return}}},async createSwapTransaction(){let{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:n}=this.getParams(),r=q.sourceToken,i=q.toToken;if(!t||!n||!r||!i)return;let a=ma.parseUnits(n,r.decimals).toString();try{let n=await jt.generateSwapCalldata({projectId:M.state.projectId,userAddress:t,from:r.address,to:i.address,amount:a}),o=r.address===e,s=BigInt(n.tx.eip155.gas),c=BigInt(n.tx.eip155.gasPrice),l={data:n.tx.data,to:Qe.getPlainAddress(n.tx.to),gas:s,gasPrice:c,value:BigInt(o?a:`0`),toAmount:q.toTokenAmount};return q.gasPriceInUSD=_a.getGasPriceInUSD(q.networkPrice,s,c),q.approvalTransaction=void 0,q.swapTransaction=l,l}catch{ga.goBack(),Nt.showError(`Failed to create transaction`),q.approvalTransaction=void 0,q.swapTransaction=void 0,q.fetchError=!0;return}},async sendTransactionForApproval(e){let{fromAddress:t,isAuthConnector:n}=this.getParams();q.loadingApprovalTransaction=!0;let r=`Approve limit increase in your wallet`;n?ga.pushTransactionStack({view:null,goBack:!0,onSuccess(){Nt.showLoading(r)}}):Nt.showLoading(r);try{await ma.sendTransaction({address:t,to:e.to,data:e.data,value:BigInt(e.value),gasPrice:BigInt(e.gasPrice)}),await this.swapTokens(),await this.getTransaction(),q.approvalTransaction=void 0,q.loadingApprovalTransaction=!1}catch(e){let t=e;q.transactionError=t==null?void 0:t.shortMessage,q.loadingApprovalTransaction=!1,Nt.showError((t==null?void 0:t.shortMessage)||`Transaction error`)}},async sendTransactionForSwap(e){var t,n,r,i;if(!e)return;let{fromAddress:a,toTokenAmount:o,isAuthConnector:s}=this.getParams();q.loadingTransaction=!0;let c=`Swapping ${(t=q.sourceToken)==null?void 0:t.symbol} to ${D.formatNumberToLocalString(o,3)} ${(n=q.toToken)==null?void 0:n.symbol}`,l=`Swapped ${(r=q.sourceToken)==null?void 0:r.symbol} to ${D.formatNumberToLocalString(o,3)} ${(i=q.toToken)==null?void 0:i.symbol}`;s?ga.pushTransactionStack({view:`Account`,goBack:!1,onSuccess(){Nt.showLoading(c),ba.resetState()}}):Nt.showLoading(`Confirm transaction in your wallet`);try{var u,d,f,p,m;let t=[(u=q.sourceToken)==null?void 0:u.address,(d=q.toToken)==null?void 0:d.address].join(`,`),n=await ma.sendTransaction({address:a,to:e.to,data:e.data,gas:e.gas,gasPrice:BigInt(e.gasPrice),value:e.value});return q.loadingTransaction=!1,Nt.showSuccess(l),gt.sendEvent({type:`track`,event:`SWAP_SUCCESS`,properties:{network:((f=A.state.caipNetwork)==null?void 0:f.id)||``,swapFromToken:((p=this.state.sourceToken)==null?void 0:p.symbol)||``,swapToToken:((m=this.state.toToken)==null?void 0:m.symbol)||``,swapFromAmount:this.state.sourceTokenAmount||``,swapToAmount:this.state.toTokenAmount||``,isSmartAccount:J.state.preferredAccountType===zt.ACCOUNT_TYPES.SMART_ACCOUNT}}),ba.resetState(),s||ga.replace(`Account`),ba.getMyTokensWithBalance(t),n}catch(e){var h,g,_;let t=e;q.transactionError=t==null?void 0:t.shortMessage,q.loadingTransaction=!1,Nt.showError((t==null?void 0:t.shortMessage)||`Transaction error`),gt.sendEvent({type:`track`,event:`SWAP_ERROR`,properties:{network:((h=A.state.caipNetwork)==null?void 0:h.id)||``,swapFromToken:((g=this.state.sourceToken)==null?void 0:g.symbol)||``,swapToToken:((_=this.state.toToken)==null?void 0:_.symbol)||``,swapFromAmount:this.state.sourceTokenAmount||``,swapToAmount:this.state.toTokenAmount||``,isSmartAccount:J.state.preferredAccountType===zt.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken(e,t){let n=_a.isInsufficientSourceTokenForSwap(e,t,q.myTokensWithBalance);return _a.isInsufficientNetworkTokenForGas(q.networkBalanceInUSD,q.gasPriceInUSD)||n},setTransactionDetails(){let{toTokenAddress:e,toTokenDecimals:t}=this.getParams();!e||!t||(q.gasPriceInUSD=_a.getGasPriceInUSD(q.networkPrice,BigInt(q.gasFee),BigInt(va)),q.priceImpact=_a.getPriceImpact({sourceTokenAmount:q.sourceTokenAmount,sourceTokenPriceInUSD:q.sourceTokenPriceInUSD,toTokenPriceInUSD:q.toTokenPriceInUSD,toTokenAmount:q.toTokenAmount}),q.maxSlippage=_a.getMaxSlippage(q.slippage,q.toTokenAmount),q.providerFee=_a.getProviderFee(q.sourceTokenAmount))}},xa=ce({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),J={state:xa,replaceState(e){e&&Object.assign(xa,de(e))},subscribe(e){return k.subscribeChainProp(`accountState`,t=>{if(t)return e(t)})},subscribeKey(e,t){let n;return k.subscribeChainProp(`accountState`,r=>{if(r){let i=r[e];n!==i&&(n=i,t(i))}})},setIsConnected(e,t){k.setAccountProp(`isConnected`,e,t)},getChainIsConnected(e){return k.getAccountProp(`isConnected`,e)},setCaipAddress(e,t){let n=e?Qe.getPlainAddress(e):void 0;k.setAccountProp(`caipAddress`,e,t),k.setAccountProp(`address`,n,t)},setBalance(e,t,n){k.setAccountProp(`balance`,e,n),k.setAccountProp(`balanceSymbol`,t,n)},setProfileName(e,t){k.setAccountProp(`profileName`,e,t)},setProfileImage(e,t){k.setAccountProp(`profileImage`,e,t)},setAddressExplorerUrl(e,t){k.setAccountProp(`addressExplorerUrl`,e,t)},setSmartAccountDeployed(e,t){k.setAccountProp(`smartAccountDeployed`,e,t)},setCurrentTab(e){k.setAccountProp(`currentTab`,e,k.state.activeChain)},setTokenBalance(e,t){e&&k.setAccountProp(`tokenBalance`,e,t)},setShouldUpdateToAddress(e,t){k.setAccountProp(`shouldUpdateToAddress`,e,t)},setAllAccounts(e,t){k.setAccountProp(`allAccounts`,e,t)},addAddressLabel(e,t,n){let r=k.getAccountProp(`addressLabels`,n)||new Map;r.set(e,t),k.setAccountProp(`addressLabels`,r,k.state.activeChain)},removeAddressLabel(e,t){let n=k.getAccountProp(`addressLabels`,t)||new Map;n.delete(e),k.setAccountProp(`addressLabels`,n,k.state.activeChain)},setConnectedWalletInfo(e,t){k.setAccountProp(`connectedWalletInfo`,e,t)},setPreferredAccountType(e,t){k.setAccountProp(`preferredAccountType`,e,t)},setSocialProvider(e,t){e&&k.setAccountProp(`socialProvider`,e,t)},setSocialWindow(e,t){e&&k.setAccountProp(`socialWindow`,de(e),t)},setFarcasterUrl(e,t){e&&k.setAccountProp(`farcasterUrl`,e,t)},async fetchTokenBalance(){var e,t;let n=(e=A.state.caipNetwork)==null?void 0:e.id,r=(t=A.state.caipNetwork)==null?void 0:t.chain,i=J.state.address;try{if(i&&n&&r){let e=await jt.getBalance(i,n),t=e.balances.filter(e=>e.quantity.decimals!==`0`);this.setTokenBalance(t,r),ba.setBalances(ha.mapBalancesToSwapTokens(e.balances))}}catch{Nt.showError(`Failed to fetch token balance`)}},resetAccount(e){k.resetAccount(e)}},Sa=ce({loading:!1,open:!1,shake:!1}),Ca={state:Sa,subscribe(e){return le(Sa,()=>e(Sa))},subscribeKey(e,t){return T(Sa,e,t)},async open(e){await j.state.prefetchPromise;let t=J.state.isConnected;e!=null&&e.view?ga.reset(e.view):t?ga.reset(`Account`):ga.reset(`Connect`),Sa.open=!0,vt.set({open:!0}),gt.sendEvent({type:`track`,event:`MODAL_OPEN`,properties:{connected:t}})},close(){let e=J.state.isConnected||!1;Sa.open=!1,vt.set({open:!1}),gt.sendEvent({type:`track`,event:`MODAL_CLOSE`,properties:{connected:e}})},setLoading(e){Sa.loading=e,vt.set({loading:e})},shake(){Sa.shake||(Sa.shake=!0,setTimeout(()=>{Sa.shake=!1},500))}},wa={id:`2b92315d-eab7-5bef-84fa-089a131333f5`,name:`USD Coin`,symbol:`USDC`,networks:[{name:`ethereum-mainnet`,display_name:`Ethereum`,chain_id:`1`,contract_address:`0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`},{name:`polygon-mainnet`,display_name:`Polygon`,chain_id:`137`,contract_address:`0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174`}]},Ta={id:`USD`,payment_method_limits:[{id:`card`,min:`10.00`,max:`7500.00`},{id:`ach_bank_account`,min:`10.00`,max:`25000.00`}]},Y=ce({providers:Ye,selectedProvider:null,error:null,purchaseCurrency:wa,paymentCurrency:Ta,purchaseCurrencies:[wa],paymentCurrencies:[],quotesLoading:!1}),Ea={state:Y,subscribe(e){return le(Y,()=>e(Y))},subscribeKey(e,t){return T(Y,e,t)},setSelectedProvider(e){if(e&&e.name===`meld`){let t=Xe,n=k.state.activeChain===Ke.CHAIN.SOLANA?`SOL`:`USDC`,r=J.state.address??``,i=new URL(e.url);i.searchParams.append(`publicKey`,t),i.searchParams.append(`destinationCurrencyCode`,n),i.searchParams.append(`walletAddress`,r),e.url=i.toString()}Y.selectedProvider=e},setPurchaseCurrency(e){Y.purchaseCurrency=e},setPaymentCurrency(e){Y.paymentCurrency=e},setPurchaseAmount(e){this.state.purchaseAmount=e},setPaymentAmount(e){this.state.paymentAmount=e},async getAvailableCurrencies(){let e=await jt.getOnrampOptions();Y.purchaseCurrencies=e.purchaseCurrencies,Y.paymentCurrencies=e.paymentCurrencies,Y.paymentCurrency=e.paymentCurrencies[0]||Ta,Y.purchaseCurrency=e.purchaseCurrencies[0]||wa,await j.fetchCurrencyImages(e.paymentCurrencies.map(e=>e.id)),await j.fetchTokenImages(e.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){Y.quotesLoading=!0;try{var e,t;let n=await jt.getOnrampQuote({purchaseCurrency:Y.purchaseCurrency,paymentCurrency:Y.paymentCurrency,amount:((e=Y.paymentAmount)==null?void 0:e.toString())||`0`,network:(t=Y.purchaseCurrency)==null?void 0:t.symbol});return Y.quotesLoading=!1,Y.purchaseAmount=Number(n.purchaseAmount.amount),n}catch(e){return Y.error=e.message,Y.quotesLoading=!1,null}finally{Y.quotesLoading=!1}},resetState(){Y.providers=Ye,Y.selectedProvider=null,Y.error=null,Y.purchaseCurrency=wa,Y.paymentCurrency=Ta,Y.purchaseCurrencies=[wa],Y.paymentCurrencies=[],Y.paymentAmount=void 0,Y.purchaseAmount=void 0,Y.quotesLoading=!1}},Da=ce({loading:!1}),Oa={state:Da,subscribe(e){return le(Da,()=>e(Da))},subscribeKey(e,t){return T(Da,e,t)},setToken(e){e&&(Da.token=de(e))},setTokenAmount(e){Da.sendTokenAmount=e},setReceiverAddress(e){Da.receiverAddress=e},setReceiverProfileImageUrl(e){Da.receiverProfileImageUrl=e},setReceiverProfileName(e){Da.receiverProfileName=e},setGasPrice(e){Da.gasPrice=e},setGasPriceInUsd(e){Da.gasPriceInUSD=e},setLoading(e){Da.loading=e},sendToken(){var e;switch((e=k.state.activeCaipNetwork)==null?void 0:e.chain){case`evm`:this.sendEvmToken();return;case`solana`:this.sendSolanaToken();return;default:throw Error(`Unsupported chain`)}},sendEvmToken(){var e,t;if((e=this.state.token)!=null&&e.address&&this.state.sendTokenAmount&&this.state.receiverAddress){var n;gt.sendEvent({type:`track`,event:`SEND_INITIATED`,properties:{isSmartAccount:J.state.preferredAccountType===zt.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token.address,amount:this.state.sendTokenAmount,network:((n=A.state.caipNetwork)==null?void 0:n.id)||``}}),this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals})}else if(this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&(t=this.state.token)!=null&&t.quantity.decimals){var r,i;gt.sendEvent({type:`track`,event:`SEND_INITIATED`,properties:{isSmartAccount:J.state.preferredAccountType===zt.ACCOUNT_TYPES.SMART_ACCOUNT,token:(r=this.state.token)==null?void 0:r.symbol,amount:this.state.sendTokenAmount,network:((i=A.state.caipNetwork)==null?void 0:i.id)||``}}),this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals})}},async sendNativeToken(e){ga.pushTransactionStack({view:`Account`,goBack:!1});let t=e.receiverAddress,n=J.state.address,r=ma.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));try{var i,a;await ma.sendTransaction({to:t,address:n,data:`0x`,value:r,gasPrice:e.gasPrice}),Nt.showSuccess(`Transaction started`),gt.sendEvent({type:`track`,event:`SEND_SUCCESS`,properties:{isSmartAccount:J.state.preferredAccountType===zt.ACCOUNT_TYPES.SMART_ACCOUNT,token:((i=this.state.token)==null?void 0:i.symbol)||``,amount:e.sendTokenAmount,network:((a=A.state.caipNetwork)==null?void 0:a.id)||``}}),this.resetSend()}catch{var o,s;gt.sendEvent({type:`track`,event:`SEND_ERROR`,properties:{isSmartAccount:J.state.preferredAccountType===zt.ACCOUNT_TYPES.SMART_ACCOUNT,token:((o=this.state.token)==null?void 0:o.symbol)||``,amount:e.sendTokenAmount,network:((s=A.state.caipNetwork)==null?void 0:s.id)||``}}),Nt.showError(`Something went wrong`)}},async sendERC20Token(e){ga.pushTransactionStack({view:`Account`,goBack:!1});let t=ma.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));try{J.state.address&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress&&(await ma.writeContract({fromAddress:J.state.address,tokenAddress:Qe.getPlainAddress(e.tokenAddress),receiverAddress:e.receiverAddress,tokenAmount:t,method:`transfer`,abi:We}),Nt.showSuccess(`Transaction started`),this.resetSend())}catch{Nt.showError(`Something went wrong`)}},sendSolanaToken(){if(!this.state.sendTokenAmount||!this.state.receiverAddress){Nt.showError(`Please enter a valid amount and receiver address`);return}ga.pushTransactionStack({view:`Account`,goBack:!1}),ma.sendTransaction({chainNamespace:`solana`,to:this.state.receiverAddress,value:this.state.sendTokenAmount}).then(()=>{this.resetSend(),J.fetchTokenBalance()}).catch(e=>{Nt.showError(`Failed to send transaction. Please try again.`),console.error(`SendController:sendToken - failed to send solana transaction`,e)})},resetSend(){Da.token=void 0,Da.sendTokenAmount=void 0,Da.receiverAddress=void 0,Da.receiverProfileImageUrl=void 0,Da.receiverProfileName=void 0,Da.loading=!1}},ka=ce({message:``,open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:`shade`}),Aa={state:ka,subscribe(e){return le(ka,()=>e(ka))},subscribeKey(e,t){return T(ka,e,t)},showTooltip({message:e,triggerRect:t,variant:n}){ka.open=!0,ka.message=e,ka.triggerRect=t,ka.variant=n},hide(){ka.open=!1,ka.message=``,ka.triggerRect={width:0,height:0,top:0,left:0}}},ja=2147483648,Ma={convertEVMChainIdToCoinType(e){if(e>=ja)throw Error(`Invalid chainId`);return(ja|e)>>>0}},Na=ce({suggestions:[],loading:!1}),Pa={state:Na,subscribe(e){return le(Na,()=>e(Na))},subscribeKey(e,t){return T(Na,e,t)},async resolveName(e){try{return await jt.lookupEnsName(e)}catch(e){var t;let n=e;throw Error((n==null||(t=n.reasons)==null||(t=t[0])==null?void 0:t.description)||`Error resolving name`)}},async isNameRegistered(e){try{return await jt.lookupEnsName(e),!0}catch{return!1}},async getSuggestions(e){try{return Na.loading=!0,Na.suggestions=[],Na.suggestions=(await jt.getEnsNameSuggestions(e)).suggestions.map(e=>({...e,name:e.name.replace(Ke.WC_NAME_SUFFIX,``)}))||[],Na.suggestions}catch(e){let t=this.parseEnsApiError(e,`Error fetching name suggestions`);throw Error(t)}finally{Na.loading=!1}},async getNamesForAddress(e){try{return A.state.caipNetwork?await jt.reverseLookupEnsName({address:e}):[]}catch(e){let t=this.parseEnsApiError(e,`Error fetching names for address`);throw Error(t)}},async registerName(e){let t=A.state.caipNetwork;if(!t)throw Error(`Network not found`);let n=J.state.address,r=ft.getAuthConnector();if(!n||!r)throw Error(`Address or auth connector not found`);Na.loading=!0;try{let r=JSON.stringify({name:`${e}${Ke.WC_NAME_SUFFIX}`,attributes:{},timestamp:Math.floor(Date.now()/1e3)});ga.pushTransactionStack({view:`RegisterAccountNameSuccess`,goBack:!1,replace:!0,onCancel(){Na.loading=!1}});let i=await ma.signMessage(r),a=Ce.caipNetworkIdToNumber(t.id);if(!a)throw Error(`Network not found`);let o=Ma.convertEVMChainIdToCoinType(a);await jt.registerEnsName({coinType:o,address:n,signature:i,message:r}),J.setProfileName(`${e}${Ke.WC_NAME_SUFFIX}`,k.state.activeChain),ga.replace(`RegisterAccountNameSuccess`)}catch(t){let n=this.parseEnsApiError(t,`Error registering name ${e}`);throw ga.replace(`RegisterAccountName`),Error(n)}finally{Na.loading=!1}},validateName(e){return/^[a-zA-Z0-9-]{4,}$/u.test(e)},parseEnsApiError(e,t){var n;let r=e;return(r==null||(n=r.reasons)==null||(n=n[0])==null?void 0:n.description)||t}},Fa={evm:`ba0ba0cd-17c6-4806-ad93-f9d174f17900`,solana:`a1b58899-f671-4276-6a5e-56ca5bd59700`},Ia={async fetchWalletImage(e){if(e)return await j._fetchWalletImage(e),this.getWalletImageById(e)},getWalletImageById(e){if(e)return ct.state.walletImages[e]},getWalletImage(e){if(e!=null&&e.image_url)return e==null?void 0:e.image_url;if(e!=null&&e.image_id)return ct.state.walletImages[e.image_id]},getNetworkImage(e){if(e!=null&&e.imageUrl)return e==null?void 0:e.imageUrl;if(e!=null&&e.imageId)return ct.state.networkImages[e.imageId]},getNetworkImageById(e){if(e)return ct.state.networkImages[e]},getConnectorImage(e){if(e!=null&&e.imageUrl)return e.imageUrl;if(e!=null&&e.imageId)return ct.state.connectorImages[e.imageId]},getChainImage(e){return ct.state.networkImages[Fa[e]]}},La={goBackOrCloseModal(){ga.state.history.length>1?ga.goBack():Ca.close()},navigateAfterNetworkSwitch(){let{history:e}=ga.state,t=e.findIndex(e=>e===`Networks`);t>=1?ga.goBackToIndex(t-1):Ca.close()},navigateAfterPreferredAccountTypeSelect(){let{isSiweEnabled:e}=M.state;e&&k.state.activeChain===Ke.CHAIN.EVM?ga.push(`ConnectingSiwe`):ga.push(`Account`)}},Ra=i`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,za=i`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`,Ba=void 0,Va=void 0,Ha=void 0;function Ua(e,t){Ba=document.createElement(`style`),Va=document.createElement(`style`),Ha=document.createElement(`style`),Ba.textContent=Ka(e).core.cssText,Va.textContent=Ka(e).dark.cssText,Ha.textContent=Ka(e).light.cssText,document.head.appendChild(Ba),document.head.appendChild(Va),document.head.appendChild(Ha),Wa(t)}function Wa(e){Va&&Ha&&(e===`light`?(Va.removeAttribute(`media`),Ha.media=`enabled`):(Ha.removeAttribute(`media`),Va.media=`enabled`))}function Ga(e){Ba&&Va&&Ha&&(Ba.textContent=Ka(e).core.cssText,Va.textContent=Ka(e).dark.cssText,Ha.textContent=Ka(e).light.cssText)}function Ka(e){return{core:o`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${r(e!=null&&e[`--w3m-color-mix-strength`]?`${e[`--w3m-color-mix-strength`]}%`:`0%`)};
        --w3m-font-family: ${r((e==null?void 0:e[`--w3m-font-family`])||`Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`)};
        --w3m-font-size-master: ${r((e==null?void 0:e[`--w3m-font-size-master`])||`10px`)};
        --w3m-border-radius-master: ${r((e==null?void 0:e[`--w3m-border-radius-master`])||`4px`)};
        --w3m-z-index: ${r((e==null?void 0:e[`--w3m-z-index`])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:o`
      :root {
        --w3m-color-mix: ${r((e==null?void 0:e[`--w3m-color-mix`])||`#fff`)};
        --w3m-accent: ${r(qe(e,`dark`)[`--w3m-accent`])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${r(qe(e,`dark`)[`--w3m-background`])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;
      }
    `,dark:o`
      :root {
        --w3m-color-mix: ${r((e==null?void 0:e[`--w3m-color-mix`])||`#000`)};
        --w3m-accent: ${r(qe(e,`light`)[`--w3m-accent`])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${r(qe(e,`light`)[`--w3m-background`])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}var X=o`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Z=o`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,qa=o`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function Ja(e,t){let{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){customElements.get(e)||customElements.define(e,t)}}}function Ya(e,t){return customElements.get(e)||customElements.define(e,t),t}function Q(e){return function(t){return typeof t==`function`?Ya(e,t):Ja(e,t)}}var Xa=o`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`,Za=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qa=class extends a{render(){return n`<slot></slot>`}};Qa.styles=[X,Xa],Qa=Za([Q(`wui-card`)],Qa);var $a=o`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,eo=i`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,to=i`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,no=i`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,ro=i`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,io=i`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ao=i`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,oo=i`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,so=i`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,co=i`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,lo=i`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,uo=i`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,fo=i`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,po=i`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,mo=i`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="#26D962"/>
</svg>
`,ho=i`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,go=i`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,_o=i`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,vo=i`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,yo=i`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,bo=i`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`,xo=i`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,So=i`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Co=i`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,wo=i`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,To=i` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Eo=i`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,Do=i`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,Oo=i`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ko=i`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Ao=i`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,jo=i`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,Mo=i`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,No=i`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Po=i`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,Fo=i`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Io=i`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Lo=i`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,Ro=i`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,zo=i`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`,Bo=i`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Vo=i`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,Ho=i`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,Uo=i`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`,Wo=i`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,Go=i`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,Ko=i`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,qo=i` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,Jo=i`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,Yo=i`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,Xo=i`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,Zo=i`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,Qo=i`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,$o=i`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,es=i`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,ts=i`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,ns=i`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,rs=i`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,is=i`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,as=i`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,os=i`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`,ss=i`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,cs=i`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,ls=i`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,us=i`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,ds=i`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,fs=i`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,ps=i`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,ms=i`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,hs=i`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`,gs=i`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`,_s=i`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`,vs=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ys={add:eo,allWallets:to,arrowBottomCircle:no,appStore:ro,apple:io,arrowBottom:ao,arrowLeft:oo,arrowRight:so,arrowTop:co,bank:lo,browser:uo,card:fo,checkmark:mo,checkmarkBold:po,chevronBottom:ho,chevronLeft:go,chevronRight:_o,chevronTop:vo,chromeStore:yo,clock:bo,close:xo,compass:Co,coinPlaceholder:So,copy:wo,cursor:To,cursorTransparent:Eo,desktop:Do,disconnect:Oo,discord:ko,etherscan:Ao,extension:jo,externalLink:Mo,facebook:No,farcaster:Po,filters:Fo,github:Io,google:Lo,helpCircle:Ro,image:zo,id:gs,infoCircle:Bo,lightbulb:hs,mail:Vo,mobile:Ho,more:Uo,networkPlaceholder:Wo,nftPlaceholder:Go,off:Ko,playStore:qo,plus:Jo,qrCode:Yo,recycleHorizontal:Xo,refresh:Zo,search:Qo,send:$o,swapHorizontal:es,swapHorizontalMedium:ns,swapHorizontalBold:ts,swapHorizontalRoundedBold:rs,swapVertical:is,telegram:as,threeDots:os,twitch:ss,twitter:_s,twitterIcon:cs,verify:ls,verifyFilled:us,wallet:fs,walletConnect:ps,walletPlaceholder:ds,warningCircle:ms,x:_s},bs=class extends a{constructor(){super(...arguments),this.size=`md`,this.name=`copy`,this.color=`fg-300`}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,n`${ys[this.name]}`}};bs.styles=[X,qa,$a],vs([l()],bs.prototype,`size`,void 0),vs([l()],bs.prototype,`name`,void 0),vs([l()],bs.prototype,`color`,void 0),bs=vs([Q(`wui-icon`)],bs);var xs=o`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,Ss=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Cs=class extends a{constructor(){super(...arguments),this.src=`./path/to/image.jpg`,this.alt=`Image`,this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:`100%`};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:`100%`};
      `,n`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent(`onLoadError`,{bubbles:!0,composed:!0}))}};Cs.styles=[X,qa,xs],Ss([l()],Cs.prototype,`src`,void 0),Ss([l()],Cs.prototype,`alt`,void 0),Ss([l()],Cs.prototype,`size`,void 0),Cs=Ss([Q(`wui-image`)],Cs);var ws=o`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,Ts=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Es=class extends a{render(){return n`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Es.styles=[X,ws],Es=Ts([Q(`wui-loading-hexagon`)],Es);var Ds=o`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,Os=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ks=class extends a{constructor(){super(...arguments),this.color=`accent-100`,this.size=`lg`}render(){return this.style.cssText=`--local-color: ${this.color===`inherit`?`inherit`:`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,n`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};ks.styles=[X,Ds],Os([l()],ks.prototype,`color`,void 0),Os([l()],ks.prototype,`size`,void 0),ks=Os([Q(`wui-loading-spinner`)],ks);var As=o`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,js=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ms=class extends a{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return n`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+t*1.75}
        />
      </svg>
    `}};Ms.styles=[X,As],js([l({type:Number})],Ms.prototype,`radius`,void 0),Ms=js([Q(`wui-loading-thumbnail`)],Ms);var Ns=o`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,Ps=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Fs=class extends a{constructor(){super(...arguments),this.width=``,this.height=``,this.borderRadius=`m`,this.variant=`default`}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,n`<slot></slot>`}};Fs.styles=[Ns],Ps([l()],Fs.prototype,`width`,void 0),Ps([l()],Fs.prototype,`height`,void 0),Ps([l()],Fs.prototype,`borderRadius`,void 0),Ps([l()],Fs.prototype,`variant`,void 0),Fs=Ps([Q(`wui-shimmer`)],Fs);var Is=o`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`,Ls=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Rs=class extends a{constructor(){super(...arguments),this.variant=`paragraph-500`,this.color=`fg-300`,this.align=`left`,this.lineClamp=void 0}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,n`<slot class=${s(e)}></slot>`}};Rs.styles=[X,Is],Ls([l()],Rs.prototype,`variant`,void 0),Ls([l()],Rs.prototype,`color`,void 0),Ls([l()],Rs.prototype,`align`,void 0),Ls([l()],Rs.prototype,`lineClamp`,void 0),Rs=Ls([Q(`wui-text`)],Rs);var zs=i`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,Bs=i`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Vs=i`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,Hs=i`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Us=i`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Ws=i`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Gs=i`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Ks=i`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,qs=i`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,Js=i`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,Ys=i`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Xs=i`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,Zs=i`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Qs=i`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,$s=i`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,ec=i`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,tc=i`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,nc=i`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,rc=i`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,ic=i`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,ac=i`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,oc=i`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`,sc=o`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`,cc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},lc={browser:zs,dao:Bs,defi:Vs,defiAlt:Hs,eth:Us,layers:Ws,lock:Gs,login:Ks,network:qs,nft:Js,noun:Ys,profile:Xs,system:Zs,coinbase:Qs,meld:oc,onrampCard:nc,moonpay:$s,stripe:ec,paypal:tc,google:rc,pencil:ic,lightbulb:ac},uc=class extends a{constructor(){super(...arguments),this.name=`browser`,this.size=`md`}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,n`${lc[this.name]}`}};uc.styles=[X,sc],cc([l()],uc.prototype,`name`,void 0),cc([l()],uc.prototype,`size`,void 0),uc=cc([Q(`wui-visual`)],uc);var $={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e==`string`)return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`}).format(e)},getHostName(e){try{return new URL(e).hostname}catch{return``}},getTruncateString({string:e,charsStart:t,charsEnd:n,truncate:r}){return e.length<=t+n?e:r===`end`?`${e.substring(0,t)}...`:r===`start`?`...${e.substring(e.length-n)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(n))}`},generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,``).substring(0,6),n=this.hexToRgb(t),r=getComputedStyle(document.documentElement).getPropertyValue(`--w3m-border-radius-master`),i=100-3*Number(r==null?void 0:r.replace(`px`,``)),a=`${i}% ${i}% at 65% 40%`,o=[];for(let e=0;e<5;e+=1){let t=this.tintColor(n,.15*e);o.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${o[0]};
    --local-color-2: ${o[1]};
    --local-color-3: ${o[2]};
    --local-color-4: ${o[3]};
    --local-color-5: ${o[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,t&255]},tintColor(e,t){let[n,r,i]=e;return[Math.round(n+(255-n)*t),Math.round(r+(255-r)*t),Math.round(i+(255-i)*t)]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){return e||(typeof window<`u`&&window.matchMedia?window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`:`dark`)},splitBalance(e){let t=e.split(`.`);return t.length===2?[t[0],t[1]]:[`0`,`00`]},roundNumber(e,t,n){return e.toString().length>=t?Number(e).toFixed(n):e},formatNumberToLocalString(e,t=2){return e===void 0?`0.00`:typeof e==`number`?e.toLocaleString(`en-US`,{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString(`en-US`,{maximumFractionDigits:t,minimumFractionDigits:t})}},dc=o`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,fc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},pc=class extends a{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&$.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&$.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&$.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&$.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&$.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&$.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&$.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&$.getSpacingStyles(this.margin,3)};
    `,n`<slot></slot>`}};pc.styles=[X,dc],fc([l()],pc.prototype,`flexDirection`,void 0),fc([l()],pc.prototype,`flexWrap`,void 0),fc([l()],pc.prototype,`flexBasis`,void 0),fc([l()],pc.prototype,`flexGrow`,void 0),fc([l()],pc.prototype,`flexShrink`,void 0),fc([l()],pc.prototype,`alignItems`,void 0),fc([l()],pc.prototype,`justifyContent`,void 0),fc([l()],pc.prototype,`columnGap`,void 0),fc([l()],pc.prototype,`rowGap`,void 0),fc([l()],pc.prototype,`gap`,void 0),fc([l()],pc.prototype,`padding`,void 0),fc([l()],pc.prototype,`margin`,void 0),pc=fc([Q(`wui-flex`)],pc);var mc=o`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,hc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},gc=class extends a{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size=`xl`}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,n`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant=`image`,n`<wui-image src=${this.imageSrc} alt=${this.alt??`avatar`}></wui-image>`;if(this.address){this.dataset.variant=`generated`;let e=$.generateAvatarColors(this.address);return this.style.cssText+=`\n ${e}`,null}return this.dataset.variant=`default`,null}};gc.styles=[X,mc],hc([l()],gc.prototype,`imageSrc`,void 0),hc([l()],gc.prototype,`alt`,void 0),hc([l()],gc.prototype,`address`,void 0),hc([l()],gc.prototype,`size`,void 0),gc=hc([Q(`wui-avatar`)],gc);var _c=o`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,vc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},yc=class extends a{constructor(){super(...arguments),this.size=`md`,this.backgroundColor=`accent-100`,this.iconColor=`accent-100`,this.background=`transparent`,this.border=!1,this.borderColor=`wui-color-bg-125`,this.icon=`copy`}render(){let e=this.iconSize||this.size,t=this.size===`lg`,r=this.size===`xl`,i=t?`12%`:`16%`,a=t?`xxs`:r?`s`:`3xl`,o=this.background===`gray`,s=this.background===`opaque`,c=this.backgroundColor===`accent-100`&&s||this.backgroundColor===`success-100`&&s||this.backgroundColor===`error-100`&&s||this.backgroundColor===`inverse-100`&&s,l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${l};
       --local-bg-mix: ${c||o?`100%`:i};
       --local-border-radius: var(--wui-border-radius-${a});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor===`wui-color-bg-125`?`2px`:`1px`} solid ${this.border?`var(--${this.borderColor})`:`transparent`}
   `,n` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};yc.styles=[X,Z,_c],vc([l()],yc.prototype,`size`,void 0),vc([l()],yc.prototype,`backgroundColor`,void 0),vc([l()],yc.prototype,`iconColor`,void 0),vc([l()],yc.prototype,`iconSize`,void 0),vc([l()],yc.prototype,`background`,void 0),vc([l({type:Boolean})],yc.prototype,`border`,void 0),vc([l()],yc.prototype,`borderColor`,void 0),vc([l()],yc.prototype,`icon`,void 0),yc=vc([Q(`wui-icon-box`)],yc);var bc=o`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,xc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Sc=class extends a{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address=``,this.profileName=``,this.charsStart=4,this.charsEnd=6}render(){return n`
      <button
        ?disabled=${this.disabled}
        class=${u(this.balance?void 0:`local-no-balance`)}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?$.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?`end`:`middle`}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){return this.isUnsupportedChain?n` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`:this.balance?n`
        ${this.networkSrc?n`<wui-image src=${this.networkSrc}></wui-image>`:n`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `:null}};Sc.styles=[X,Z,bc],xc([l()],Sc.prototype,`networkSrc`,void 0),xc([l()],Sc.prototype,`avatarSrc`,void 0),xc([l()],Sc.prototype,`balance`,void 0),xc([l({type:Boolean})],Sc.prototype,`isUnsupportedChain`,void 0),xc([l({type:Boolean})],Sc.prototype,`disabled`,void 0),xc([l()],Sc.prototype,`address`,void 0),xc([l()],Sc.prototype,`profileName`,void 0),xc([l()],Sc.prototype,`charsStart`,void 0),xc([l()],Sc.prototype,`charsEnd`,void 0),Sc=xc([Q(`wui-account-button`)],Sc);var Cc=o`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`,wc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Tc=class extends a{constructor(){super(...arguments),this.size=`md`,this.name=``,this.installed=!1,this.badgeSize=`xs`}render(){let e=`xxs`;return e=this.size===`lg`?`m`:this.size===`md`?`xs`:`xxs`,this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),n`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?n`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?n`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:n`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Tc.styles=[X,Cc],wc([l()],Tc.prototype,`size`,void 0),wc([l()],Tc.prototype,`name`,void 0),wc([l()],Tc.prototype,`imageSrc`,void 0),wc([l()],Tc.prototype,`walletIcon`,void 0),wc([l({type:Boolean})],Tc.prototype,`installed`,void 0),wc([l()],Tc.prototype,`badgeSize`,void 0),Tc=wc([Q(`wui-wallet-image`)],Tc);var Ec=o`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,Dc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Oc=4,kc=class extends a{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<Oc;return n`${this.walletImages.slice(0,Oc).map(({src:e,walletName:t})=>n`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${u(t)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(Oc-this.walletImages.length)].map(()=>n` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};kc.styles=[X,Ec],Dc([l({type:Array})],kc.prototype,`walletImages`,void 0),kc=Dc([Q(`wui-all-wallets-image`)],kc);var Ac=o`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,jc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Mc={main:`inverse-100`,inverse:`inverse-000`,accent:`accent-100`,"accent-error":`error-100`,"accent-success":`success-100`,neutral:`fg-100`,disabled:`gray-glass-020`},Nc={lg:`paragraph-600`,md:`small-600`},Pc={lg:`md`,md:`md`},Fc=class extends a{constructor(){super(...arguments),this.size=`lg`,this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant=`main`,this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius=`m`}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?`100%`:`auto`};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;let e=this.textVariant??Nc[this.size];return n`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){let e=Pc[this.size];return n`<wui-loading-spinner color=${this.disabled?Mc.disabled:Mc[this.variant]} size=${e}></wui-loading-spinner>`}return n``}};Fc.styles=[X,Z,Ac],jc([l()],Fc.prototype,`size`,void 0),jc([l({type:Boolean})],Fc.prototype,`disabled`,void 0),jc([l({type:Boolean})],Fc.prototype,`fullWidth`,void 0),jc([l({type:Boolean})],Fc.prototype,`loading`,void 0),jc([l()],Fc.prototype,`variant`,void 0),jc([l({type:Boolean})],Fc.prototype,`hasIconLeft`,void 0),jc([l({type:Boolean})],Fc.prototype,`hasIconRight`,void 0),jc([l()],Fc.prototype,`borderRadius`,void 0),jc([l()],Fc.prototype,`textVariant`,void 0),Fc=jc([Q(`wui-button`)],Fc);var Ic=i`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Lc=o`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }
`,Rc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},zc=class extends a{constructor(){super(...arguments),this.type=`wallet`}render(){return n`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type===`network`?n` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Ic}`:n`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};zc.styles=[X,Z,Lc],Rc([l()],zc.prototype,`type`,void 0),zc=Rc([Q(`wui-card-select-loader`)],zc);var Bc=i`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,Vc=i`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Hc=o`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,Uc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Wc=class extends a{constructor(){super(...arguments),this.size=`md`,this.name=`uknown`,this.networkImagesBySize={sm:Bc,md:Ic,lg:Vc},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round=`true`,this.style.cssText=`
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `):this.style.cssText=`

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,n`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?n`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:n`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Wc.styles=[X,Hc],Uc([l()],Wc.prototype,`size`,void 0),Uc([l()],Wc.prototype,`name`,void 0),Uc([l({type:Object})],Wc.prototype,`networkImagesBySize`,void 0),Uc([l()],Wc.prototype,`imageSrc`,void 0),Uc([l({type:Boolean})],Wc.prototype,`selected`,void 0),Uc([l({type:Boolean})],Wc.prototype,`round`,void 0),Wc=Uc([Q(`wui-network-image`)],Wc);var Gc=o`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
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
`,Kc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},qc=class extends a{constructor(){super(...arguments),this.name=`Unknown`,this.type=`wallet`,this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return n`
      <button data-selected=${u(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?`accent-100`:`inherit`}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type===`network`?n`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${u(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:n`
      <wui-wallet-image
        size="md"
        imageSrc=${u(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};qc.styles=[X,Z,Gc],Kc([l()],qc.prototype,`name`,void 0),Kc([l()],qc.prototype,`type`,void 0),Kc([l()],qc.prototype,`imageSrc`,void 0),Kc([l({type:Boolean})],qc.prototype,`disabled`,void 0),Kc([l({type:Boolean})],qc.prototype,`selected`,void 0),Kc([l({type:Boolean})],qc.prototype,`installed`,void 0),qc=Kc([Q(`wui-card-select`)],qc);var Jc=o`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`,Yc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xc=class extends a{constructor(){super(...arguments),this.variant=`fill`,this.imageSrc=void 0,this.disabled=!1,this.icon=`externalLink`,this.href=``,this.text=void 0}render(){let e=this.variant===`success`||this.variant===`transparent`||this.variant===`shadeSmall`?`small-600`:`paragraph-600`;return n`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?`disabled`:``}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${this.title?this.title:$.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?n`<wui-image src=${this.imageSrc}></wui-image>`:null}};Xc.styles=[X,Z,Jc],Yc([l()],Xc.prototype,`variant`,void 0),Yc([l()],Xc.prototype,`imageSrc`,void 0),Yc([l({type:Boolean})],Xc.prototype,`disabled`,void 0),Yc([l()],Xc.prototype,`icon`,void 0),Yc([l()],Xc.prototype,`href`,void 0),Yc([l()],Xc.prototype,`text`,void 0),Xc=Yc([Q(`wui-chip`)],Xc);var Zc=o`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,Qc=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$c=class extends a{constructor(){super(...arguments),this.size=`md`,this.loading=!1}render(){let e=this.size===`md`?`paragraph-600`:`small-600`;return n`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?`accent-100`:`inherit`}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?n`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};$c.styles=[X,Z,Zc],Qc([l()],$c.prototype,`size`,void 0),Qc([l({type:Boolean})],$c.prototype,`loading`,void 0),$c=Qc([Q(`wui-connect-button`)],$c);var el=o`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,tl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},nl=class extends a{constructor(){super(...arguments),this.disabled=!1,this.label=``,this.buttonLabel=``}render(){return n`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${[`1xs`,`2l`,`1xs`,`2l`]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};nl.styles=[X,Z,el],tl([l({type:Boolean})],nl.prototype,`disabled`,void 0),tl([l()],nl.prototype,`label`,void 0),tl([l()],nl.prototype,`buttonLabel`,void 0),nl=tl([Q(`wui-cta-button`)],nl);var rl=o`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`,il=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},al=class extends a{render(){return n`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};al.styles=[X,Z,rl],al=il([Q(`wui-details-group`)],al);var ol=o`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`,sl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},cl=class extends a{constructor(){super(...arguments),this.name=``}render(){return n`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};cl.styles=[X,Z,ol],sl([l()],cl.prototype,`name`,void 0),cl=sl([Q(`wui-details-group-item`)],cl);var ll=o`
  :host {
    z-index: calc(var(--w3m-z-index) + 1);
    width: 200px;
    padding: var(--wui-spacing-3xs);
    align-items: center;
    display: inherit;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-fg-base-125);
    /* Dark/Elevation/L */
    box-shadow:
      0px 8px 22px -6px rgba(0, 0, 0, 0.12),
      0px 14px 64px -4px rgba(0, 0, 0, 0.12);
  }
`,ul=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},dl=class extends a{constructor(){super(...arguments),this.actions=[],this.isOpen=!1}render(){return this.isOpen?n`
      <wui-flex flexDirection="column" gap="4xs">
        ${this.actions.map(e=>n`
            <wui-list-item
              icon=${e.icon}
              iconSize="sm"
              variant="icon"
              @click=${e.onClick}
            >
              <wui-text variant="small-400" color="fg-100">${e.label}</wui-text>
            </wui-list-item>
          `)}
      </wui-flex>
    `:null}};dl.styles=[X,Z,ll],ul([l({type:Array})],dl.prototype,`actions`,void 0),ul([l({type:Boolean})],dl.prototype,`isOpen`,void 0),dl=ul([Q(`wui-dropdown-menu`)],dl);var fl=o`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,pl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ml=class extends a{constructor(){super(...arguments),this.inputElementRef=d(),this.size=`md`,this.disabled=!1,this.placeholder=``,this.type=`text`,this.value=``}render(){let e=`wui-padding-right-${this.inputRightPadding}`,t={[`wui-size-${this.size}`]:!0,[e]:!!this.inputRightPadding};return n`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${f(this.inputElementRef)}
        class=${s(t)}
        type=${this.type}
        enterkeyhint=${u(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||``}
      />
      <slot></slot>`}templateIcon(){return this.icon?n`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent(`inputChange`,{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};ml.styles=[X,Z,fl],pl([l()],ml.prototype,`size`,void 0),pl([l()],ml.prototype,`icon`,void 0),pl([l({type:Boolean})],ml.prototype,`disabled`,void 0),pl([l()],ml.prototype,`placeholder`,void 0),pl([l()],ml.prototype,`type`,void 0),pl([l()],ml.prototype,`keyHint`,void 0),pl([l()],ml.prototype,`value`,void 0),pl([l()],ml.prototype,`inputRightPadding`,void 0),ml=pl([Q(`wui-input-text`)],ml);var hl=o`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,gl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_l=class extends a{constructor(){super(...arguments),this.disabled=!1}render(){return n`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?n`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};_l.styles=[X,hl],gl([l()],_l.prototype,`errorMessage`,void 0),gl([l({type:Boolean})],_l.prototype,`disabled`,void 0),gl([l()],_l.prototype,`value`,void 0),_l=gl([Q(`wui-email-input`)],_l);var vl=o`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`,yl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},bl=class extends a{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return n`
      <wui-input-text
        value=${u(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||``}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return n`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${Ke.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?n`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?n`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};bl.styles=[X,vl],yl([l()],bl.prototype,`errorMessage`,void 0),yl([l({type:Boolean})],bl.prototype,`disabled`,void 0),yl([l()],bl.prototype,`value`,void 0),yl([l({type:Boolean})],bl.prototype,`loading`,void 0),bl=yl([Q(`wui-ens-input`)],bl);var xl=o`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,Sl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Cl=class extends a{constructor(){super(...arguments),this.size=`md`,this.disabled=!1,this.icon=`copy`,this.iconColor=`inherit`}render(){let e=this.size===`lg`?`--wui-border-radius-xs`:`--wui-border-radius-xxs`,t=this.size===`lg`?`--wui-spacing-1xs`:`--wui-spacing-2xs`;return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,n`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Cl.styles=[X,Z,qa,xl],Sl([l()],Cl.prototype,`size`,void 0),Sl([l({type:Boolean})],Cl.prototype,`disabled`,void 0),Sl([l()],Cl.prototype,`icon`,void 0),Sl([l()],Cl.prototype,`iconColor`,void 0),Cl=Sl([Q(`wui-icon-link`)],Cl);var wl=o`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,Tl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},El=class extends a{constructor(){super(...arguments),this.icon=`copy`}render(){return n`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};El.styles=[X,Z,wl],Tl([l()],El.prototype,`icon`,void 0),El=Tl([Q(`wui-input-element`)],El);var Dl=o`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`,Ol=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},kl=class extends a{constructor(){super(...arguments),this.disabled=!1,this.value=``}render(){return n`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};kl.styles=[X,Z,Dl],Ol([l({type:Boolean})],kl.prototype,`disabled`,void 0),Ol([l({type:String})],kl.prototype,`value`,void 0),kl=Ol([Q(`wui-input-numeric`)],kl);var Al=o`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,jl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ml=class extends a{constructor(){super(...arguments),this.disabled=!1,this.color=`inherit`}render(){return n`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Ml.styles=[X,Z,Al],jl([l({type:Boolean})],Ml.prototype,`disabled`,void 0),jl([l()],Ml.prototype,`color`,void 0),Ml=jl([Q(`wui-link`)],Ml);var Nl=o`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,Pl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Fl=class extends a{constructor(){super(...arguments),this.variant=`icon`,this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return n`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${u(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant===`image`&&this.imageSrc)return n`<wui-image src=${this.imageSrc} alt=${this.alt??`list item`}></wui-image>`;if(this.iconVariant===`square`&&this.icon&&this.variant===`icon`)return n`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant===`icon`&&this.icon&&this.iconVariant){let e=[`blue`,`square-blue`].includes(this.iconVariant)?`accent-100`:`fg-200`,t=this.iconVariant===`square-blue`?`mdl`:`md`,r=this.iconSize?this.iconSize:t;return n`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?n`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:n``}chevronTemplate(){return this.chevron?n`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Fl.styles=[X,Z,Nl],Pl([l()],Fl.prototype,`icon`,void 0),Pl([l()],Fl.prototype,`iconSize`,void 0),Pl([l()],Fl.prototype,`variant`,void 0),Pl([l()],Fl.prototype,`iconVariant`,void 0),Pl([l({type:Boolean})],Fl.prototype,`disabled`,void 0),Pl([l()],Fl.prototype,`imageSrc`,void 0),Pl([l()],Fl.prototype,`alt`,void 0),Pl([l({type:Boolean})],Fl.prototype,`chevron`,void 0),Pl([l({type:Boolean})],Fl.prototype,`loading`,void 0),Fl=Pl([Q(`wui-list-item`)],Fl);var Il;(function(e){e.approve=`approved`,e.bought=`bought`,e.borrow=`borrowed`,e.burn=`burnt`,e.cancel=`canceled`,e.claim=`claimed`,e.deploy=`deployed`,e.deposit=`deposited`,e.execute=`executed`,e.mint=`minted`,e.receive=`received`,e.repay=`repaid`,e.send=`sent`,e.sell=`sold`,e.stake=`staked`,e.trade=`swapped`,e.unstake=`unstaked`,e.withdraw=`withdrawn`})(Il||(Il={}));var Ll=o`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`,Rl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},zl=class extends a{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:``}}render(){let[e,t]=this.images,r=(e==null?void 0:e.type)===`NFT`,i=t!=null&&t.url?t.type===`NFT`:r,a=r?`var(--wui-border-radius-xxs)`:`var(--wui-border-radius-s)`,o=i?`var(--wui-border-radius-xxs)`:`var(--wui-border-radius-s)`;return this.style.cssText=`
    --local-left-border-radius: ${a};
    --local-right-border-radius: ${o};
    `,n`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||t!=null&&t.url)?n`<div class="swap-images-container">
        ${e!=null&&e.url?n`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t!=null&&t.url?n`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?n`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r===`NFT`?n`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:n`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e=`accent-100`,t;return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?n`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case`in`:return`arrowBottom`;case`out`:return`arrowTop`;default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type===`trade`?`swapHorizontalBold`:this.type===`approve`?`checkmark`:this.type===`cancel`?`close`:this.getDirectionIcon()}getStatusColor(){switch(this.status){case`confirmed`:return`success-100`;case`failed`:return`error-100`;case`pending`:return`inverse-100`;default:return`accent-100`}}};zl.styles=[Ll],Rl([l()],zl.prototype,`type`,void 0),Rl([l()],zl.prototype,`status`,void 0),Rl([l()],zl.prototype,`direction`,void 0),Rl([l({type:Boolean})],zl.prototype,`onlyDirectionIcon`,void 0),Rl([l({type:Array})],zl.prototype,`images`,void 0),Rl([l({type:Object})],zl.prototype,`secondImage`,void 0),zl=Rl([Q(`wui-transaction-visual`)],zl);var Bl=o`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,Vl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Hl=class extends a{constructor(){super(...arguments),this.type=`approve`,this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return n`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${u(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${u(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Il[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var e;let t=(e=this.descriptions)==null?void 0:e[0];return t?n`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var e;let t=(e=this.descriptions)==null?void 0:e[1];return t?n`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};Hl.styles=[X,Bl],Vl([l()],Hl.prototype,`type`,void 0),Vl([l({type:Array})],Hl.prototype,`descriptions`,void 0),Vl([l()],Hl.prototype,`date`,void 0),Vl([l({type:Boolean})],Hl.prototype,`onlyDirectionIcon`,void 0),Vl([l()],Hl.prototype,`status`,void 0),Vl([l()],Hl.prototype,`direction`,void 0),Vl([l({type:Array})],Hl.prototype,`images`,void 0),Vl([l({type:Array})],Hl.prototype,`price`,void 0),Vl([l({type:Array})],Hl.prototype,`amount`,void 0),Vl([l({type:Array})],Hl.prototype,`symbol`,void 0),Hl=Vl([Q(`wui-transaction-list-item`)],Hl);var Ul=o`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,Wl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Gl=class extends a{render(){return n`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Gl.styles=[X,Ul],Gl=Wl([Q(`wui-transaction-list-item-loader`)],Gl);var Kl=o`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,ql=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Jl=class extends a{constructor(){super(...arguments),this.variant=`main`,this.size=`lg`}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let e=this.size===`md`?`mini-700`:`micro-700`;return n`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};Jl.styles=[X,Kl],ql([l()],Jl.prototype,`variant`,void 0),ql([l()],Jl.prototype,`size`,void 0),Jl=ql([Q(`wui-tag`)],Jl);var Yl=o`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,Xl=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Zl=class extends a{constructor(){super(...arguments),this.walletImages=[],this.imageSrc=``,this.name=``,this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return n`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?n` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?n` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?n`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?n`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?n`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?n`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Zl.styles=[X,Z,Yl],Xl([l({type:Array})],Zl.prototype,`walletImages`,void 0),Xl([l()],Zl.prototype,`imageSrc`,void 0),Xl([l()],Zl.prototype,`name`,void 0),Xl([l()],Zl.prototype,`tagLabel`,void 0),Xl([l()],Zl.prototype,`tagVariant`,void 0),Xl([l()],Zl.prototype,`icon`,void 0),Xl([l()],Zl.prototype,`walletIcon`,void 0),Xl([l({type:Boolean})],Zl.prototype,`installed`,void 0),Xl([l({type:Boolean})],Zl.prototype,`disabled`,void 0),Xl([l({type:Boolean})],Zl.prototype,`showAllWallets`,void 0),Zl=Xl([Q(`wui-list-wallet`)],Zl);var Ql=o`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,$l=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},eu=class extends a{constructor(){super(...arguments),this.logo=`google`}render(){return n`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};eu.styles=[X,Ql],$l([l()],eu.prototype,`logo`,void 0),eu=$l([Q(`wui-logo`)],eu);var tu=o`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,nu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ru=class extends a{constructor(){super(...arguments),this.logo=`google`,this.disabled=!1}render(){return n`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};ru.styles=[X,Z,tu],nu([l()],ru.prototype,`logo`,void 0),nu([l({type:Boolean})],ru.prototype,`disabled`,void 0),ru=nu([Q(`wui-logo-select`)],ru);var iu=o`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`,au=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ou=class extends a{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return n`
      <button data-testid="w3m-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?n`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?n`<wui-image src=${this.imageSrc}></wui-image>`:n`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ou.styles=[X,Z,iu],au([l()],ou.prototype,`imageSrc`,void 0),au([l({type:Boolean})],ou.prototype,`isUnsupportedChain`,void 0),au([l({type:Boolean})],ou.prototype,`disabled`,void 0),ou=au([Q(`wui-network-button`)],ou);var su=o`
  :host {
    position: relative;
    display: block;
  }
`,cu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},lu=class extends a{constructor(){super(...arguments),this.length=6,this.otp=``,this.values=Array.from({length:this.length}).map(()=>``),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(e=>e!==``),this.handleKeyDown=(e,t)=>{let n=e.target,r=this.getInputElement(n),i=[`ArrowLeft`,`ArrowRight`,`Shift`,`Delete`];if(!r)return;i.includes(e.key)&&e.preventDefault();let a=r.selectionStart;switch(e.key){case`ArrowLeft`:a&&r.setSelectionRange(a+1,a+1),this.focusInputField(`prev`,t);break;case`ArrowRight`:this.focusInputField(`next`,t);break;case`Shift`:this.focusInputField(`next`,t);break;case`Delete`:r.value===``?this.focusInputField(`prev`,t):this.updateInput(r,t,``);break;case`Backspace`:r.value===``?this.focusInputField(`prev`,t):this.updateInput(r,t,``);break;default:}},this.focusInputField=(e,t)=>{if(e===`next`){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let n=this.numerics[e<this.length?e:t],r=n?this.getInputElement(n):void 0;r&&(r.disabled=!1,r.focus())}if(e===`prev`){let e=t-1,n=this.numerics[e>-1?e:t],r=n?this.getInputElement(n):void 0;r&&r.focus()}}}firstUpdated(){var e,t;this.otp&&(this.values=this.otp.split(``));let n=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(`wui-input-numeric`);n&&(this.numerics=Array.from(n)),(t=this.numerics[0])==null||t.focus()}render(){return n`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>n`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||``}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,n){let r=this.numerics[t],i=e||(r?this.getInputElement(r):void 0);i&&(i.value=n,this.values=this.values.map((e,r)=>r===t?n:e))}selectInput(e){let t=e.target;if(t){let e=this.getInputElement(t);e==null||e.select()}}handleInput(e,t){let n=e.target,r=this.getInputElement(n);if(r){let n=r.value;e.inputType===`insertFromPaste`?this.handlePaste(r,n,t):$.isNumber(n)&&e.data?(this.updateInput(r,t,e.data),this.focusInputField(`next`,t)):this.updateInput(r,t,``)}this.dispatchInputChangeEvent()}handlePaste(e,t,n){let r=t[0];if(r&&$.isNumber(r)){this.updateInput(e,n,r);let i=t.substring(1);if(n+1<this.length&&i.length){let e=this.numerics[n+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,i,n+1)}else this.focusInputField(`next`,n)}else this.updateInput(e,n,``)}getInputElement(e){var t;return(t=e.shadowRoot)!=null&&t.querySelector(`input`)?e.shadowRoot.querySelector(`input`):null}dispatchInputChangeEvent(){let e=this.values.join(``);this.dispatchEvent(new CustomEvent(`inputChange`,{detail:e,bubbles:!0,composed:!0}))}};lu.styles=[X,su],cu([l({type:Number})],lu.prototype,`length`,void 0),cu([l({type:String})],lu.prototype,`otp`,void 0),cu([c()],lu.prototype,`values`,void 0),lu=cu([Q(`wui-otp`)],lu);var uu=e(p(),1),du=.1,fu=2.5,pu=7;function mu(e,t,n){return e===t?!1:(e-t<0?t-e:e-t)<=n+du}function hu(e,t){let n=Array.prototype.slice.call(uu.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((e,t,n)=>(n%r===0?e.push([t]):e[e.length-1].push(t))&&e,[])}var gu={generate(e,t,n){let r=`#141414`,a=[],o=hu(e,`Q`),s=t/o.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:e,y:t})=>{let n=(o.length-pu)*s*e,l=(o.length-pu)*s*t,u=.45;for(let e=0;e<c.length;e+=1){let t=s*(pu-e*2);a.push(i`
            <rect
              fill=${e===2?r:`transparent`}
              width=${e===0?t-5:t}
              rx= ${e===0?(t-5)*u:t*u}
              ry= ${e===0?(t-5)*u:t*u}
              stroke=${r}
              stroke-width=${e===0?5:0}
              height=${e===0?t-5:t}
              x= ${e===0?l+s*e+5/2:l+s*e}
              y= ${e===0?n+s*e+5/2:n+s*e}
            />
          `)}});let l=Math.floor((n+25)/s),u=o.length/2-l/2,d=o.length/2+l/2-1,f=[];o.forEach((e,t)=>{e.forEach((e,n)=>{if(o[t][n]&&!(t<pu&&n<pu||t>o.length-(pu+1)&&n<pu||t<pu&&n>o.length-(pu+1))&&!(t>u&&t<d&&n>u&&n<d)){let e=t*s+s/2,r=n*s+s/2;f.push([e,r])}})});let p={};return f.forEach(([e,t])=>{if(p[e]){var n;(n=p[e])==null||n.push(t)}else p[e]=[t]}),Object.entries(p).map(([e,t])=>{let n=t.filter(e=>t.every(t=>!mu(e,t,s)));return[Number(e),n]}).forEach(([e,t])=>{t.forEach(t=>{a.push(i`<circle cx=${e} cy=${t} fill=${r} r=${s/fu} />`)})}),Object.entries(p).filter(([e,t])=>t.length>1).map(([e,t])=>{let n=t.filter(e=>t.some(t=>mu(e,t,s)));return[Number(e),n]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let n=[];for(let e of t){let t=n.find(t=>t.some(t=>mu(e,t,s)));t?t.push(e):n.push([e])}return[e,n.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,n])=>{a.push(i`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${n}
                stroke=${r}
                stroke-width=${s/(fu/2)}
                stroke-linecap="round"
              />
            `)})}),a}},_u=o`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,vu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},yu=class extends a{constructor(){super(...arguments),this.uri=``,this.size=0,this.theme=`dark`,this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,n`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e=this.theme===`light`?this.size:this.size-32;return i`
      <svg height=${e} width=${e}>
        ${gu.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?n`<wui-image src=${this.imageSrc} alt=${this.alt??`logo`}></wui-image>`:this.farcaster?n`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:n`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};yu.styles=[X,_u],vu([l()],yu.prototype,`uri`,void 0),vu([l({type:Number})],yu.prototype,`size`,void 0),vu([l()],yu.prototype,`theme`,void 0),vu([l()],yu.prototype,`imageSrc`,void 0),vu([l()],yu.prototype,`alt`,void 0),vu([l({type:Boolean})],yu.prototype,`arenaClear`,void 0),vu([l({type:Boolean})],yu.prototype,`farcaster`,void 0),yu=vu([Q(`wui-qr-code`)],yu);var bu=o`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,xu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Su=class extends a{constructor(){super(...arguments),this.inputComponentRef=d()}render(){return n`
      <wui-input-text
        ${f(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e==null?void 0:e.inputElementRef.value;t&&(t.value=``,t.focus(),t.dispatchEvent(new Event(`input`)))}};Su.styles=[X,bu],Su=xu([Q(`wui-search-bar`)],Su);var Cu=o`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`,wu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Tu=class extends a{constructor(){super(...arguments),this.backgroundColor=`accent-100`,this.iconColor=`accent-100`,this.icon=`checkmark`,this.message=``,this.loading=!1}render(){return n`
      ${this.loading?n`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:n`<wui-icon-box
            size="sm"
            iconSize="xs"
            iconColor=${this.iconColor}
            backgroundColor=${this.backgroundColor}
            icon=${this.icon}
            background="opaque"
          ></wui-icon-box>`}
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Tu.styles=[X,Cu],wu([l()],Tu.prototype,`backgroundColor`,void 0),wu([l()],Tu.prototype,`iconColor`,void 0),wu([l()],Tu.prototype,`icon`,void 0),wu([l()],Tu.prototype,`message`,void 0),wu([l()],Tu.prototype,`loading`,void 0),Tu=wu([Q(`wui-snackbar`)],Tu);var Eu=o`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,Du=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ou=class extends a{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth=`100px`,this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?`flex`:`block`,this.tabs.map((e,t)=>{var r;let i=t===this.activeTab;return n`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${i}
          data-testid="tab-${(r=e.label)==null?void 0:r.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll(`button`)],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?n`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let n=this.buttons[this.activeTab],r=this.buttons[e],i=n==null?void 0:n.querySelector(`wui-text`),a=r==null?void 0:r.querySelector(`wui-text`),o=r==null?void 0:r.getBoundingClientRect(),s=a==null?void 0:a.getBoundingClientRect();n&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:`ease`,fill:`forwards`}),n.animate([{width:`34px`}],{duration:500,easing:`ease`,fill:`forwards`})),r&&o&&s&&a&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(o.width+s.width)+6}px`,r.animate([{width:`${o.width+s.width}px`}],{duration:t?0:500,fill:`forwards`,easing:`ease`}),a.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:`forwards`,easing:`ease`}))}};Ou.styles=[X,Z,Eu],Du([l({type:Array})],Ou.prototype,`tabs`,void 0),Du([l()],Ou.prototype,`onTabChange`,void 0),Du([l({type:Array})],Ou.prototype,`buttons`,void 0),Du([l({type:Boolean})],Ou.prototype,`disabled`,void 0),Du([l()],Ou.prototype,`localTabWidth`,void 0),Du([c()],Ou.prototype,`activeTab`,void 0),Du([c()],Ou.prototype,`isDense`,void 0),Ou=Du([Q(`wui-tabs`)],Ou);var ku=o`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`,Au=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ju=class extends a{constructor(){super(...arguments),this.text=``}render(){return n`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?n`<wui-image src=${this.imageSrc}></wui-image>`:n`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ju.styles=[X,Z,ku],Au([l()],ju.prototype,`imageSrc`,void 0),Au([l()],ju.prototype,`text`,void 0),ju=Au([Q(`wui-token-button`)],ju);var Mu=o`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
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
`,Nu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Pu=class extends a{constructor(){super(...arguments),this.placement=`top`,this.variant=`fill`,this.message=``}render(){return this.dataset.variant=this.variant,n`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant===`fill`?`cursor`:`cursorTransparent`}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Pu.styles=[X,Z,Mu],Nu([l()],Pu.prototype,`placement`,void 0),Nu([l()],Pu.prototype,`variant`,void 0),Nu([l()],Pu.prototype,`message`,void 0),Pu=Nu([Q(`wui-tooltip`)],Pu);var Fu=o`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`,Iu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Lu=class extends a{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e;if(!this.visible)return null;let t=this.amount&&this.price?(e=D.multiply(this.price,this.amount))==null?void 0:e.toFixed(3):null;return n`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${t?n`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${$.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?n`<wui-text variant="small-400" color="fg-200">
                  ${$.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?n`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?n`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};Lu.styles=[X,Z,Fu],Iu([l()],Lu.prototype,`imageSrc`,void 0),Iu([l()],Lu.prototype,`name`,void 0),Iu([l()],Lu.prototype,`symbol`,void 0),Iu([l()],Lu.prototype,`price`,void 0),Iu([l()],Lu.prototype,`amount`,void 0),Iu([c()],Lu.prototype,`visible`,void 0),Iu([c()],Lu.prototype,`imageError`,void 0),Lu=Iu([Q(`wui-token-list-item`)],Lu);var Ru=o`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,zu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Bu=class extends a{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?`1000px`:`20px`}; background-color: var(--wui-color-modal-bg);`,n`${this.templateVisual()}`}templateVisual(){return this.imageSrc?n`<wui-image src=${this.imageSrc} alt=${this.alt??``}></wui-image>`:n`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Bu.styles=[X,Ru],zu([l()],Bu.prototype,`imageSrc`,void 0),zu([l()],Bu.prototype,`alt`,void 0),zu([l({type:Boolean})],Bu.prototype,`borderRadiusFull`,void 0),Bu=zu([Q(`wui-visual-thumbnail`)],Bu);var Vu=o`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`,Hu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Uu=class extends a{constructor(){super(...arguments),this.label=``,this.description=``,this.icon=`wallet`}render(){return n`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Uu.styles=[X,Z,Vu],Hu([l()],Uu.prototype,`label`,void 0),Hu([l()],Uu.prototype,`description`,void 0),Hu([l()],Uu.prototype,`icon`,void 0),Uu=Hu([Q(`wui-notice-card`)],Uu);var Wu=o`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-150), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`,Gu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ku=100,qu=class extends a{constructor(){super(...arguments),this.textTitle=``,this.overflowedContent=``,this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has(`textTitle`)||e.has(`overflowedContent`))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{var e,t;let n=(e=this.shadowRoot)==null?void 0:e.querySelector(`.heightContent`),r=(t=this.shadowRoot)==null?void 0:t.querySelector(`.textContent`);if(n&&r){this.scrollElement=n;let e=r==null?void 0:r.scrollHeight;e&&e>Ku&&(this.enableAccordion=!0,this.scrollHeightElement=e,this.requestUpdate())}})}render(){return n`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var e;let t=(e=this.shadowRoot)==null?void 0:e.querySelector(`wui-icon`);this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${Ku}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${Ku}px`}],{duration:300,fill:`forwards`,easing:`ease`}),t&&t.animate([{transform:this.toggled?`rotate(0deg)`:`rotate(180deg)`},{transform:this.toggled?`rotate(180deg)`:`rotate(0deg)`}],{duration:300,fill:`forwards`,easing:`ease`}))}chevronTemplate(){return this.enableAccordion?n` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};qu.styles=[X,Z,Wu],Gu([l()],qu.prototype,`textTitle`,void 0),Gu([l()],qu.prototype,`overflowedContent`,void 0),qu=Gu([Q(`wui-list-accordion`)],qu);var Ju=o`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,Yu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xu=class extends a{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle=``,this.textValue=void 0}render(){return n`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?`fg-200`:`fg-100`}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?n`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?n` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:n`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Xu.styles=[X,Z,Ju],Yu([l()],Xu.prototype,`imageSrc`,void 0),Yu([l()],Xu.prototype,`textTitle`,void 0),Yu([l()],Xu.prototype,`textValue`,void 0),Xu=Yu([Q(`wui-list-content`)],Xu);var Zu=o`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,Qu=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$u=class extends a{constructor(){super(...arguments),this.imageSrc=``,this.name=``,this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return n`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?n`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?n`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:n`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};$u.styles=[X,Z,Zu],Qu([l()],$u.prototype,`imageSrc`,void 0),Qu([l()],$u.prototype,`name`,void 0),Qu([l({type:Boolean})],$u.prototype,`disabled`,void 0),Qu([l({type:Boolean})],$u.prototype,`selected`,void 0),Qu([l({type:Boolean})],$u.prototype,`transparent`,void 0),$u=Qu([Q(`wui-list-network`)],$u);var ed=o`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,td=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},nd=class extends a{constructor(){super(...arguments),this.amount=``,this.networkCurreny=``,this.networkImageUrl=``,this.receiverAddress=``,this.addressExplorerUrl=``}render(){return n`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?n`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:n`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};nd.styles=[X,Z,ed],td([l()],nd.prototype,`amount`,void 0),td([l()],nd.prototype,`networkCurreny`,void 0),td([l()],nd.prototype,`networkImageUrl`,void 0),td([l()],nd.prototype,`receiverAddress`,void 0),td([l()],nd.prototype,`addressExplorerUrl`,void 0),nd=td([Q(`wui-list-wallet-transaction`)],nd);var rd=o`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`,id=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ad=class extends a{constructor(){super(...arguments),this.text=``}render(){return n`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};ad.styles=[X,Z,rd],id([l()],ad.prototype,`text`,void 0),ad=id([Q(`wui-promo`)],ad);var od=o`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`,sd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},cd=class extends a{constructor(){super(...arguments),this.dollars=`0`,this.pennies=`00`}render(){return n`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};cd.styles=[X,od],sd([l()],cd.prototype,`dollars`,void 0),sd([l()],cd.prototype,`pennies`,void 0),cd=sd([Q(`wui-balance`)],cd);var ld=o`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,ud=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},dd=class extends a{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName=``,this.address=``,this.icon=`chevronBottom`}render(){return n`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${$.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?`end`:`middle`})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?n`<wui-image src=${this.networkSrc}></wui-image>`:n`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};dd.styles=[X,Z,ld],ud([l()],dd.prototype,`networkSrc`,void 0),ud([l()],dd.prototype,`avatarSrc`,void 0),ud([l()],dd.prototype,`profileName`,void 0),ud([l()],dd.prototype,`address`,void 0),ud([l()],dd.prototype,`icon`,void 0),dd=ud([Q(`wui-profile-button`)],dd);var fd=o`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,pd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},md=class extends a{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName=``,this.address=``,this.icon=`mail`,this.connectedConnector=ot.getConnectedConnector(),this.shouldShowIcon=this.connectedConnector===`AUTH`}render(){return n`<button ontouchstart data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.shouldShowIcon?this.getIconTemplate(this.icon):``}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${$.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?`end`:`middle`})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){var t;if(e.target instanceof HTMLElement&&e.target.id===`copy-address`){var n;(n=this.onCopyClick)==null||n.call(this,e);return}(t=this.onProfileClick)==null||t.call(this,e)}getIconTemplate(e){return n`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||`networkPlaceholder`}"
      ></wui-icon-box>
    `}};md.styles=[X,Z,fd],pd([l()],md.prototype,`avatarSrc`,void 0),pd([l()],md.prototype,`profileName`,void 0),pd([l()],md.prototype,`address`,void 0),pd([l()],md.prototype,`icon`,void 0),pd([l()],md.prototype,`onProfileClick`,void 0),pd([l()],md.prototype,`onCopyClick`,void 0),md=pd([Q(`wui-profile-button-v2`)],md);var hd=o`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,gd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_d=class extends a{constructor(){super(...arguments),this.variant=`accent`,this.imageSrc=``,this.disabled=!1,this.icon=`externalLink`,this.size=`md`,this.text=``}render(){let e=this.size===`sm`?`small-600`:`paragraph-600`;return n`
      <button
        class=${this.disabled?`disabled`:``}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?n`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};_d.styles=[X,Z,hd],gd([l()],_d.prototype,`variant`,void 0),gd([l()],_d.prototype,`imageSrc`,void 0),gd([l({type:Boolean})],_d.prototype,`disabled`,void 0),gd([l()],_d.prototype,`icon`,void 0),gd([l()],_d.prototype,`size`,void 0),gd([l()],_d.prototype,`text`,void 0),_d=gd([Q(`wui-chip-button`)],_d);var vd=o`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,yd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},bd=class extends a{constructor(){super(...arguments),this.networkImages=[``],this.text=``}render(){return n`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){let e=this.networkImages.slice(0,5);return n` <wui-flex class="networks">
      ${e==null?void 0:e.map(e=>n` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};bd.styles=[X,Z,vd],yd([l({type:Array})],bd.prototype,`networkImages`,void 0),yd([l()],bd.prototype,`text`,void 0),bd=yd([Q(`wui-compatible-network`)],bd);var xd=o`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`,Sd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Cd=class extends a{constructor(){super(...arguments),this.icon=`externalLink`,this.text=``}render(){return n`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Cd.styles=[X,Z,xd],Sd([l()],Cd.prototype,`icon`,void 0),Sd([l()],Cd.prototype,`text`,void 0),Cd=Sd([Q(`wui-banner`)],Cd);var wd=o`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`,Td=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ed=class extends a{constructor(){super(...arguments),this.imageSrc=``,this.text=``,this.size=``}render(){return n`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Ed.styles=[X,Z,wd],Td([l()],Ed.prototype,`imageSrc`,void 0),Td([l()],Ed.prototype,`text`,void 0),Td([l()],Ed.prototype,`size`,void 0),Ed=Td([Q(`wui-banner-img`)],Ed);var Dd=o`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`,Od=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},kd=class extends a{constructor(){super(...arguments),this.tokenName=``,this.tokenImageUrl=``,this.tokenValue=0,this.tokenAmount=`0.0`,this.tokenCurrency=``,this.clickable=!1}render(){return n`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${$.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?n`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:n`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};kd.styles=[X,Z,Dd],Od([l()],kd.prototype,`tokenName`,void 0),Od([l()],kd.prototype,`tokenImageUrl`,void 0),Od([l({type:Number})],kd.prototype,`tokenValue`,void 0),Od([l()],kd.prototype,`tokenAmount`,void 0),Od([l()],kd.prototype,`tokenCurrency`,void 0),Od([l({type:Boolean})],kd.prototype,`clickable`,void 0),kd=Od([Q(`wui-list-token`)],kd);var Ad=o`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`,jd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Md=class extends a{constructor(){super(...arguments),this.icon=`card`,this.text=``,this.description=``,this.tag=void 0,this.iconBackgroundColor=`accent-100`,this.iconColor=`accent-100`,this.disabled=!1}render(){return n`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?n` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:n`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};Md.styles=[X,Z,Ad],jd([l()],Md.prototype,`icon`,void 0),jd([l()],Md.prototype,`text`,void 0),jd([l()],Md.prototype,`description`,void 0),jd([l()],Md.prototype,`tag`,void 0),jd([l()],Md.prototype,`iconBackgroundColor`,void 0),jd([l()],Md.prototype,`iconColor`,void 0),jd([l({type:Boolean})],Md.prototype,`disabled`,void 0),Md=jd([Q(`wui-list-description`)],Md);var Nd=o`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,Pd=/[.*+?^${}()|[\]\\]/gu,Fd=/[0-9,.]/u,Id=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ld=class extends a{constructor(){super(...arguments),this.inputElementRef=d(),this.disabled=!1,this.value=``,this.placeholder=`0`}render(){var e;return(e=this.inputElementRef)!=null&&e.value&&this.value&&(this.inputElementRef.value.value=this.value),n`<input
      ${f(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??``}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){var t,n;let r=e.data;if(r&&(t=this.inputElementRef)!=null&&t.value)if(r===`,`){let e=this.inputElementRef.value.value.replace(`,`,`.`);this.inputElementRef.value.value=e,this.value=`${this.value}${e}`}else Fd.test(r)||(this.inputElementRef.value.value=this.value.replace(new RegExp(r.replace(Pd,`\\$&`),`gu`),``));this.dispatchEvent(new CustomEvent(`inputChange`,{detail:(n=this.inputElementRef.value)==null?void 0:n.value,bubbles:!0,composed:!0}))}};Ld.styles=[X,Z,Nd],Id([l({type:Boolean})],Ld.prototype,`disabled`,void 0),Id([l({type:String})],Ld.prototype,`value`,void 0),Id([l({type:String})],Ld.prototype,`placeholder`,void 0),Ld=Id([Q(`wui-input-amount`)],Ld);var Rd=o`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`,zd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Bd=class extends a{constructor(){super(...arguments),this.text=``,this.address=``,this.isAddress=!1}render(){return n`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?n`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?n`<wui-image src=${this.imageSrc}></wui-image>`:n`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Bd.styles=[X,Z,Rd],zd([l()],Bd.prototype,`text`,void 0),zd([l()],Bd.prototype,`address`,void 0),zd([l()],Bd.prototype,`imageSrc`,void 0),zd([l({type:Boolean})],Bd.prototype,`isAddress`,void 0),Bd=zd([Q(`wui-preview-item`)],Bd);var Vd=o`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`,Hd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ud=class extends a{constructor(){super(...arguments),this.accountAddress=``,this.accountType=``,this.connectedConnector=ot.getConnectedConnector(),this.labels=J.state.addressLabels,this.caipNetwork=A.state.caipNetwork,this.socialProvider=ot.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){var e;super.connectedCallback(),jt.getBalance(this.accountAddress,(e=this.caipNetwork)==null?void 0:e.id).then(e=>{let t=this.balance;e.balances.length>0&&(t=e.balances.reduce((e,t)=>e+((t==null?void 0:t.value)||0),0)),this.balance=t,this.fetchingBalance=!1,this.requestUpdate()})}render(){let e=this.getLabel();return this.shouldShowIcon=this.connectedConnector===`AUTH`,n`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${[`0`,`0`,`s`,`1xs`]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?n`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===zt.ACCOUNT_TYPES.EOA?this.socialProvider??`mail`:`lightbulb`}
                background="fg-300"
              ></wui-icon-box>`:n`<wui-flex .padding="${[`0`,`0`,`0`,`s`]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${$.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:`middle`})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${this.fetchingBalance?n`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:n` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
          <slot name="action"></slot>
        </wui-flex>
      </wui-flex>
    `}getLabel(){var e;let t=(e=this.labels)==null?void 0:e.get(this.accountAddress);return!t&&this.connectedConnector===`AUTH`?t=`${this.accountType===`eoa`?this.socialProvider??`Email`:`Smart`} Account`:!t&&this.connectedConnector===`INJECTED`||this.connectedConnector===`ANNOUNCED`?t=`Injected Account`:t||(t=`EOA`),t}};Ud.styles=[X,Z,Vd],Hd([l()],Ud.prototype,`accountAddress`,void 0),Hd([l()],Ud.prototype,`accountType`,void 0),Hd([l({type:Boolean})],Ud.prototype,`selected`,void 0),Hd([l({type:Function})],Ud.prototype,`onSelect`,void 0),Ud=Hd([Q(`wui-list-account`)],Ud);var Wd=o`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`,Gd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Kd=class extends a{constructor(){super(...arguments),this.text=``,this.icon=`card`}render(){return n`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};Kd.styles=[X,Z,Wd],Gd([l()],Kd.prototype,`text`,void 0),Gd([l()],Kd.prototype,`icon`,void 0),Kd=Gd([Q(`wui-icon-button`)],Kd);var qd=o`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,Jd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Yd=class extends a{constructor(){super(...arguments),this.text=``,this.disabled=!1}render(){return n`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};Yd.styles=[X,Z,qd],Jd([l()],Yd.prototype,`text`,void 0),Jd([l({type:Boolean})],Yd.prototype,`disabled`,void 0),Yd=Jd([Q(`wui-list-button`)],Yd);var Xd=o`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,Zd=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qd=class extends a{constructor(){super(...arguments),this.logo=`google`,this.name=`Continue with google`,this.align=`left`,this.disabled=!1}render(){return n`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return this.align===`center`?n` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};Qd.styles=[X,Z,Xd],Zd([l()],Qd.prototype,`logo`,void 0),Zd([l()],Qd.prototype,`name`,void 0),Zd([l()],Qd.prototype,`align`,void 0),Zd([l({type:Boolean})],Qd.prototype,`disabled`,void 0),Qd=Zd([Q(`wui-list-social`)],Qd);var $d=o`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`,ef=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},tf=class extends a{constructor(){super(...arguments),this.imageSrc=``}render(){return n`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?n`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:n`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};tf.styles=[X,Z,qa,$d],ef([l()],tf.prototype,`imageSrc`,void 0),tf=ef([Q(`wui-select`)],tf);var nf=o`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,rf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},af=class extends a{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&$.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&$.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&$.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&$.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&$.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&$.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&$.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&$.getSpacingStyles(this.margin,3)};
    `,n`<slot></slot>`}};af.styles=[X,nf],rf([l()],af.prototype,`gridTemplateRows`,void 0),rf([l()],af.prototype,`gridTemplateColumns`,void 0),rf([l()],af.prototype,`justifyItems`,void 0),rf([l()],af.prototype,`alignItems`,void 0),rf([l()],af.prototype,`justifyContent`,void 0),rf([l()],af.prototype,`alignContent`,void 0),rf([l()],af.prototype,`columnGap`,void 0),rf([l()],af.prototype,`rowGap`,void 0),rf([l()],af.prototype,`gap`,void 0),rf([l()],af.prototype,`padding`,void 0),rf([l()],af.prototype,`margin`,void 0),af=rf([Q(`wui-grid`)],af);var of=o`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`,sf=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},cf=class extends a{constructor(){super(...arguments),this.text=``}render(){return n`${this.template()}`}template(){return this.text?n`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};cf.styles=[X,of],sf([l()],cf.prototype,`text`,void 0),cf=sf([Q(`wui-separator`)],cf);var lf={interpolate(e,t,n){if(e.length!==2||t.length!==2)throw Error(`inputRange and outputRange must be an array of length 2`);let r=e[0]||0,i=e[1]||0,a=t[0]||0,o=t[1]||0;return n<r?a:n>i?o:(o-a)/(i-r)*(n-r)+a}},uf=3,df=[`receive`,`deposit`,`borrow`,`claim`],ff=[`withdraw`,`repay`,`burn`],pf={getMonthName(e){let t=new Date;return t.setMonth(e),t.toLocaleString(`en-US`,{month:`long`})},getTransactionGroupTitle(e,t){let n=Se.getYear(),r=this.getMonthName(t);return e===n?r:`${r} ${e}`},getTransactionImages(e){let[t,n]=e,r=!!t&&(e==null?void 0:e.every(e=>!!e.nft_info)),i=(e==null?void 0:e.length)>1;return(e==null?void 0:e.length)===2&&!r?[this.getTransactionImage(t),this.getTransactionImage(n)]:i?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]},getTransactionImage(e){return{type:pf.getTransactionTransferTokenType(e),url:pf.getTransactionImageURL(e)}},getTransactionImageURL(e){let t,n=!!(e!=null&&e.nft_info),r=!!(e!=null&&e.fungible_info);if(e&&n){var i;t=e==null||(i=e.nft_info)==null||(i=i.content)==null||(i=i.preview)==null?void 0:i.url}else if(e&&r){var a;t=e==null||(a=e.fungible_info)==null||(a=a.icon)==null?void 0:a.url}return t},getTransactionTransferTokenType(e){if(e!=null&&e.fungible_info)return`FUNGIBLE`;if(e!=null&&e.nft_info)return`NFT`},getTransactionDescriptions(e){var t,n,r;let i=e==null||(t=e.metadata)==null?void 0:t.operationType,a=e==null?void 0:e.transfers,o=(e==null||(n=e.transfers)==null?void 0:n.length)>0,s=(e==null||(r=e.transfers)==null?void 0:r.length)>1,c=o&&(a==null?void 0:a.every(e=>!!(e!=null&&e.fungible_info))),[l,u]=a,d=this.getTransferDescription(l),f=this.getTransferDescription(u);if(!o)return(i===`send`||i===`receive`)&&c?(d=$.getTruncateString({string:e==null?void 0:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:`middle`}),f=$.getTruncateString({string:e==null?void 0:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:`middle`}),[d,f]):[e.metadata.status];if(s)return a.map(e=>this.getTransferDescription(e));let p=``;return df.includes(i)?p=`+`:ff.includes(i)&&(p=`-`),d=p.concat(d),[d]},getTransferDescription(e){let t=``;if(!e)return t;if(e!=null&&e.nft_info){var n;t=(e==null||(n=e.nft_info)==null?void 0:n.name)||`-`}else e!=null&&e.fungible_info&&(t=this.getFungibleTransferDescription(e)||`-`);return t},getFungibleTransferDescription(e){var t;return e?[this.getQuantityFixedValue(e==null?void 0:e.quantity.numeric),e==null||(t=e.fungible_info)==null?void 0:t.symbol].join(` `).trim():null},getQuantityFixedValue(e){return e?parseFloat(e).toFixed(uf):null}};export{cl as $,ut as $t,ju as A,La as At,Jl as B,ma as Bt,$u as C,Qa as Ct,Bu as D,Ga as Dt,Uu as E,Wa as Et,lu as F,Ea as Ft,Ml as G,jt as Gt,Hl as H,ua as Ht,ou as I,Ca as It,Cl as J,A as Jt,kl as K,M as Kt,ru as L,J as Lt,Tu as M,Pa as Mt,Su as N,Aa as Nt,Lu as O,za as Ot,yu as P,Oa as Pt,dl as Q,ft as Qt,eu as R,ba as Rt,nd as S,bs as St,qu as T,Ua as Tt,zl as U,zt as Ut,Gl as V,fa as Vt,Fl as W,Nt as Wt,_l as X,vt as Xt,bl as Y,k as Yt,ml as Z,gt as Zt,_d as _,Fs as _t,tf as a,Ke as an,Wc as at,cd as b,Es as bt,Kd as c,D as cn,kc as ct,Ld as d,yc as dt,ct as en,al as et,Md as f,gc as ft,bd as g,Rs as gt,Cd as h,uc as ht,af as i,qe as in,qc as it,Ou as j,Ia as jt,Pu as k,Ra as kt,Ud as l,Ce as ln,Tc as lt,Ed as m,$ as mt,lf as n,Qe as nn,$c as nt,Qd as o,Ge as on,zc as ot,kd as p,pc as pt,El as q,j as qt,cf as r,Ze as rn,Xc as rt,Yd as s,Ue as sn,Fc as st,pf as t,ot as tn,nl as tt,Bd as u,Se as un,Sc as ut,md as v,Ms as vt,Xu as w,Q as wt,ad as x,Cs as xt,dd as y,ks as yt,Zl as z,ga as zt};