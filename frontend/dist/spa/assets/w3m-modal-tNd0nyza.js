const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/exports-hBJuVROr.js","assets/index-Dn_aV1RT.js","assets/chunk-Bj-mKKzh.js","assets/preload-helper-Bt1Whyx0.js","assets/lit-element-DSHPE3H8.js","assets/if-defined-DF_EpVrQ.js","assets/exports-DthAOvYn.js","assets/ccip-BAuio0Gw.js","assets/utils-CJt4aqcQ.js","assets/_esm-Z36dKuC3.js","assets/secp256k1-BkE1S8MS.js","assets/esm-ezU1Rvan.js","assets/esm-DOvmhlQj.js","assets/browser-EW2dOsAA.js","assets/index-CGLhsgoo.css"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-Bt1Whyx0.js";import{$t as t,It as n,Kt as r,Lt as i,Tt as a,Wt as o,Zt as s,mt as c,nn as l,qt as u,wt as d,zt as f}from"./esm-DOvmhlQj.js";import{a as p,t as m,u as h}from"./lit-element-DSHPE3H8.js";import{o as g}from"./if-defined-DF_EpVrQ.js";import"./index-Dn_aV1RT.js";var _=h`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

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

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`,v=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},y=`scroll-lock`,b=class extends m{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=n.state.open,this.caipAddress=i.state.caipAddress,this.isSiweEnabled=r.state.isSiweEnabled,this.connected=i.state.isConnected,this.loading=n.state.loading,this.shake=n.state.shake,this.initializeTheming(),u.prefetch(),this.unsubscribe.push(n.subscribeKey(`open`,e=>e?this.onOpen():this.onClose()),n.subscribeKey(`shake`,e=>this.shake=e),n.subscribeKey(`loading`,e=>{this.loading=e,this.onNewAddress(i.state.caipAddress)}),i.subscribeKey(`isConnected`,e=>this.connected=e),i.subscribeKey(`caipAddress`,e=>this.onNewAddress(e)),r.subscribeKey(`isSiweEnabled`,e=>this.isSiweEnabled=e)),s.sendEvent({type:`track`,event:`MODAL_LOADED`})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?p`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){let t=f.state.view===`ConnectingSiwe`,r=f.state.view===`ApproveTransaction`;if(this.isSiweEnabled){let{SIWEController:i}=await e(async()=>{let{SIWEController:e}=await import(`./exports-hBJuVROr.js`);return{SIWEController:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]));i.state.status!==`success`&&(t||r)?n.shake():n.close()}else n.close()}initializeTheming(){let{themeVariables:e,themeMode:n}=t.state;a(e,c.getColorTheme(n))}onClose(){this.open=!1,this.classList.remove(`open`),this.onScrollUnlock(),o.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add(`open`),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement(`style`);e.dataset.w3m=y,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${y}"]`);e&&e.remove()}onAddKeyboardListener(){var e;this.abortController=new AbortController;let t=(e=this.shadowRoot)==null?void 0:e.querySelector(`wui-card`);t==null||t.focus(),window.addEventListener(`keydown`,e=>{if(e.key===`Escape`)this.handleClose();else if(e.key===`Tab`){let{tagName:n}=e.target;n&&!n.includes(`W3M-`)&&!n.includes(`WUI-`)&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAddress(t){if(!this.connected||this.loading)return;let n=l.getPlainAddress(this.caipAddress),r=l.getPlainAddress(t),i=l.getNetworkId(this.caipAddress),a=l.getNetworkId(t);if(this.caipAddress=t,this.isSiweEnabled){let{SIWEController:t}=await e(async()=>{let{SIWEController:e}=await import(`./exports-hBJuVROr.js`);return{SIWEController:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])),c=await t.getSession();if(c&&n&&r&&n!==r){var o;(o=t.state._client)!=null&&o.options.signOutOnAccountChange&&(await t.signOut(),this.onSiweNavigation());return}if(c&&i&&a&&i!==a){var s;(s=t.state._client)!=null&&s.options.signOutOnNetworkChange&&(await t.signOut(),this.onSiweNavigation());return}this.onSiweNavigation()}}onSiweNavigation(){this.open?f.push(`ConnectingSiwe`):n.open({view:`ConnectingSiwe`})}};b.styles=_,v([g()],b.prototype,`open`,void 0),v([g()],b.prototype,`caipAddress`,void 0),v([g()],b.prototype,`isSiweEnabled`,void 0),v([g()],b.prototype,`connected`,void 0),v([g()],b.prototype,`loading`,void 0),v([g()],b.prototype,`shake`,void 0),b=v([d(`w3m-modal`)],b);export{b as W3mModal};