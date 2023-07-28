import{r as s,j as f,f as T,t as st,d as it,v as _e,w as J}from"./index-fde794c4.js";import{T as ct,E as ut,a as Pe,b as ee,c as ye,P as le}from"./Transition-194ae826.js";function lt(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function ft(e,t){e.classList?e.classList.add(t):lt(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function Se(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function dt(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Se(e.className,t):e.setAttribute("class",Se(e.className&&e.className.baseVal||"",t))}const vt=["xxl","xl","lg","md","sm","xs"],mt="xs",gt=s.createContext({prefixes:{},breakpoints:vt,minBreakpoint:mt});function k(e,t){const{prefixes:n}=s.useContext(gt);return e||n[t]||t}const He=s.forwardRef(({bsPrefix:e,fluid:t=!1,as:n="div",className:r,...a},o)=>{const c=k(e,"container"),i=typeof t=="string"?`-${t}`:"-fluid";return f.jsx(n,{ref:o,...a,className:T(r,t?`${c}${i}`:c)})});He.displayName="Container";const Gn=He,ht=s.createContext(null),Xn=(e,t=null)=>e!=null?String(e):t||null,pt=ht;function $e(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function Et(e){var t=xt(e,"string");return typeof t=="symbol"?t:String(t)}function xt(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function yt(e,t,n){var r=s.useRef(e!==void 0),a=s.useState(t),o=a[0],c=a[1],i=e!==void 0,u=r.current;return r.current=i,!i&&u&&o!==t&&c(t),[i?e:o,s.useCallback(function(l){for(var d=arguments.length,v=new Array(d>1?d-1:0),h=1;h<d;h++)v[h-1]=arguments[h];n&&n.apply(void 0,[l].concat(v)),c(l)},[n])]}function Ct(e,t){return Object.keys(t).reduce(function(n,r){var a,o=n,c=o[$e(r)],i=o[r],u=st(o,[$e(r),r].map(Et)),l=t[r],d=yt(i,c,e[l]),v=d[0],h=d[1];return it({},u,(a={},a[r]=v,a[l]=h,a))},e)}var bt=/-(.)/g;function Rt(e){return e.replace(bt,function(t,n){return n.toUpperCase()})}const Tt=e=>e[0].toUpperCase()+Rt(e).slice(1);function Ce(e,{displayName:t=Tt(e),Component:n,defaultProps:r}={}){const a=s.forwardRef(({className:o,bsPrefix:c,as:i=n||"div",...u},l)=>{const d={...r,...u},v=k(c,e);return f.jsx(i,{ref:l,className:T(o,v),...d})});return a.displayName=t,a}const Ue=s.forwardRef(({bsPrefix:e,className:t,as:n,...r},a)=>{e=k(e,"navbar-brand");const o=n||(r.href?"a":"span");return f.jsx(o,{...r,ref:a,className:T(t,e)})});Ue.displayName="NavbarBrand";const wt=Ue;function be(e){return e&&e.ownerDocument||document}function Nt(e){var t=be(e);return t&&t.defaultView||window}function Ot(e,t){return Nt(e).getComputedStyle(e,t)}var Mt=/([A-Z])/g;function jt(e){return e.replace(Mt,"-$1").toLowerCase()}var kt=/^ms-/;function Z(e){return jt(e).replace(kt,"-ms-")}var St=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function $t(e){return!!(e&&St.test(e))}function j(e,t){var n="",r="";if(typeof t=="string")return e.style.getPropertyValue(Z(t))||Ot(e).getPropertyValue(Z(t));Object.keys(t).forEach(function(a){var o=t[a];!o&&o!==0?e.style.removeProperty(Z(a)):$t(a)?r+=a+"("+o+") ":n+=Z(a)+": "+o+";"}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}const te=!!(typeof window<"u"&&window.document&&window.document.createElement);var he=!1,pe=!1;try{var fe={get passive(){return he=!0},get once(){return pe=he=!0}};te&&(window.addEventListener("test",fe,fe),window.removeEventListener("test",fe,!0))}catch{}function Bt(e,t,n,r){if(r&&typeof r!="boolean"&&!pe){var a=r.once,o=r.capture,c=n;!pe&&a&&(c=n.__once||function i(u){this.removeEventListener(t,i,o),n.call(this,u)},n.__once=c),e.addEventListener(t,c,he?r:o)}e.addEventListener(t,n,r)}function Lt(e,t,n,r){var a=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)}function q(e,t,n,r){return Bt(e,t,n,r),function(){Lt(e,t,n,r)}}function Dt(e,t,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}function At(e){var t=j(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function Ft(e,t,n){n===void 0&&(n=5);var r=!1,a=setTimeout(function(){r||Dt(e,"transitionend",!0)},t+n),o=q(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(a),o()}}function It(e,t,n,r){n==null&&(n=At(e)||0);var a=Ft(e,n,r),o=q(e,"transitionend",t);return function(){a(),o()}}function Be(e,t){const n=j(e,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function Re(e,t){const n=Be(e,"transitionDuration"),r=Be(e,"transitionDelay"),a=It(e,o=>{o.target===e&&(a(),t(o))},n+r)}function W(...e){return e.filter(t=>t!=null).reduce((t,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===null?n:function(...a){t.apply(this,a),n.apply(this,a)}},null)}function We(e){e.offsetHeight}var Le=function(t){return!t||typeof t=="function"?t:function(n){t.current=n}};function _t(e,t){var n=Le(e),r=Le(t);return function(a){n&&n(a),r&&r(a)}}function Te(e,t){return s.useMemo(function(){return _t(e,t)},[e,t])}function Pt(e){return e&&"setState"in e?_e.findDOMNode(e):e??null}const Ht=J.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:a,onExited:o,addEndListener:c,children:i,childRef:u,...l},d)=>{const v=s.useRef(null),h=Te(v,u),y=g=>{h(Pt(g))},p=g=>R=>{g&&v.current&&g(v.current,R)},C=s.useCallback(p(e),[e]),m=s.useCallback(p(t),[t]),w=s.useCallback(p(n),[n]),M=s.useCallback(p(r),[r]),N=s.useCallback(p(a),[a]),B=s.useCallback(p(o),[o]),S=s.useCallback(p(c),[c]);return f.jsx(ct,{ref:d,...l,onEnter:C,onEntered:w,onEntering:m,onExit:M,onExited:B,onExiting:N,addEndListener:S,nodeRef:v,children:typeof i=="function"?(g,R)=>i(g,{...R,ref:y}):J.cloneElement(i,{ref:y})})}),we=Ht,Ut={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Wt(e,t){const n=`offset${e[0].toUpperCase()}${e.slice(1)}`,r=t[n],a=Ut[e];return r+parseInt(j(t,a[0]),10)+parseInt(j(t,a[1]),10)}const Kt={[ut]:"collapse",[Pe]:"collapsing",[ee]:"collapsing",[ye]:"collapse show"},Gt=J.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:a,className:o,children:c,dimension:i="height",in:u=!1,timeout:l=300,mountOnEnter:d=!1,unmountOnExit:v=!1,appear:h=!1,getDimensionValue:y=Wt,...p},C)=>{const m=typeof i=="function"?i():i,w=s.useMemo(()=>W(g=>{g.style[m]="0"},e),[m,e]),M=s.useMemo(()=>W(g=>{const R=`scroll${m[0].toUpperCase()}${m.slice(1)}`;g.style[m]=`${g[R]}px`},t),[m,t]),N=s.useMemo(()=>W(g=>{g.style[m]=null},n),[m,n]),B=s.useMemo(()=>W(g=>{g.style[m]=`${y(m,g)}px`,We(g)},r),[r,y,m]),S=s.useMemo(()=>W(g=>{g.style[m]=null},a),[m,a]);return f.jsx(we,{ref:C,addEndListener:Re,...p,"aria-expanded":p.role?u:null,onEnter:w,onEntering:M,onEntered:N,onExit:B,onExiting:S,childRef:c.ref,in:u,timeout:l,mountOnEnter:d,unmountOnExit:v,appear:h,children:(g,R)=>J.cloneElement(c,{...R,className:T(o,c.props.className,Kt[g],m==="width"&&"collapse-horizontal")})})}),Xt=Gt,Ke=s.createContext(null);Ke.displayName="NavbarContext";const K=Ke,Ge=s.forwardRef(({children:e,bsPrefix:t,...n},r)=>{t=k(t,"navbar-collapse");const a=s.useContext(K);return f.jsx(Xt,{in:!!(a&&a.expanded),...n,children:f.jsx("div",{ref:r,className:t,children:e})})});Ge.displayName="NavbarCollapse";const Vt=Ge;function Yt(e){var t=s.useRef(e);return s.useEffect(function(){t.current=e},[e]),t}function O(e){var t=Yt(e);return s.useCallback(function(){return t.current&&t.current.apply(t,arguments)},[t])}const Xe=s.forwardRef(({bsPrefix:e,className:t,children:n,label:r="Toggle navigation",as:a="button",onClick:o,...c},i)=>{e=k(e,"navbar-toggler");const{onToggle:u,expanded:l}=s.useContext(K)||{},d=O(v=>{o&&o(v),u&&u()});return a==="button"&&(c.type="button"),f.jsx(a,{...c,ref:i,onClick:d,"aria-label":r,className:T(t,e,!l&&"collapsed"),children:n||f.jsx("span",{className:`${e}-icon`})})});Xe.displayName="NavbarToggle";const zt=Xe;var Qt=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Zt=typeof document<"u";const Ee=Zt||Qt?s.useLayoutEffect:s.useEffect;var xe=new WeakMap,De=function(t,n){if(!(!t||!n)){var r=xe.get(n)||new Map;xe.set(n,r);var a=r.get(t);return a||(a=n.matchMedia(t),a.refCount=0,r.set(a.media,a)),a}};function Jt(e,t){t===void 0&&(t=typeof window>"u"?void 0:window);var n=De(e,t),r=s.useState(function(){return n?n.matches:!1}),a=r[0],o=r[1];return Ee(function(){var c=De(e,t);if(!c)return o(!1);var i=xe.get(t),u=function(){o(c.matches)};return c.refCount++,c.addListener(u),u(),function(){c.removeListener(u),c.refCount--,c.refCount<=0&&(i==null||i.delete(c.media)),c=void 0}},[e]),a}function qt(e){var t=Object.keys(e);function n(i,u){return i===u?u:i?i+" and "+u:u}function r(i){return t[Math.min(t.indexOf(i)+1,t.length-1)]}function a(i){var u=r(i),l=e[u];return typeof l=="number"?l=l-.2+"px":l="calc("+l+" - 0.2px)","(max-width: "+l+")"}function o(i){var u=e[i];return typeof u=="number"&&(u=u+"px"),"(min-width: "+u+")"}function c(i,u,l){var d;if(typeof i=="object")d=i,l=u,u=!0;else{var v;u=u||!0,d=(v={},v[i]=u,v)}var h=s.useMemo(function(){return Object.entries(d).reduce(function(y,p){var C=p[0],m=p[1];return(m==="up"||m===!0)&&(y=n(y,o(C))),(m==="down"||m===!0)&&(y=n(y,a(C))),y},"")},[JSON.stringify(d)]);return Jt(h,l)}return c}var en=qt({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function de(e){e===void 0&&(e=be());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function Ae(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}function tn(){var e=s.useRef(!0),t=s.useRef(function(){return e.current});return s.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),t.current}function nn(e){var t=s.useRef(e);return t.current=e,t}function rn(e){var t=nn(e);s.useEffect(function(){return function(){return t.current()}},[])}function an(e){var t=s.useRef(null);return s.useEffect(function(){t.current=e}),t.current}const on="data-rr-ui-",sn="rrUi";function cn(e){return`${on}${e}`}function Vn(e){return`${sn}${e}`}function un(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const Fe=cn("modal-open");class ln{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return un(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",a=this.getElement();t.style={overflow:a.style.overflow,[r]:a.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(j(a,r)||"0",10)+t.scrollBarWidth}px`),a.setAttribute(Fe,""),j(a,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(Fe),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const Ne=ln,Ve=s.createContext(te?window:void 0);Ve.Provider;function Oe(){return s.useContext(Ve)}const ve=(e,t)=>te?e==null?(t||be()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function fn(e,t){const n=Oe(),[r,a]=s.useState(()=>ve(e,n==null?void 0:n.document));if(!r){const o=ve(e);o&&a(o)}return s.useEffect(()=>{t&&r&&t(r)},[t,r]),s.useEffect(()=>{const o=ve(e);o!==r&&a(o)},[e,r]),r}function dn({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:a}){const o=s.useRef(null),c=s.useRef(t),i=O(n);s.useEffect(()=>{t?c.current=!0:i(o.current)},[t,i]);const u=Te(o,e.ref),l=s.cloneElement(e,{ref:u});return t?l:a||!c.current&&r?null:l}function vn({in:e,onTransition:t}){const n=s.useRef(null),r=s.useRef(!0),a=O(t);return Ee(()=>{if(!n.current)return;let o=!1;return a({in:e,element:n.current,initial:r.current,isStale:()=>o}),()=>{o=!0}},[e,a]),Ee(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function mn({children:e,in:t,onExited:n,onEntered:r,transition:a}){const[o,c]=s.useState(!t);t&&o&&c(!1);const i=vn({in:!!t,onTransition:l=>{const d=()=>{l.isStale()||(l.in?r==null||r(l.element,l.initial):(c(!0),n==null||n(l.element)))};Promise.resolve(a(l)).then(d,v=>{throw l.in||c(!0),v})}}),u=Te(i,e.ref);return o&&!t?null:s.cloneElement(e,{ref:u})}function Ie(e,t,n){return e?f.jsx(e,Object.assign({},n)):t?f.jsx(mn,Object.assign({},n,{transition:t})):f.jsx(dn,Object.assign({},n))}function gn(e){return e.code==="Escape"||e.keyCode===27}const hn=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function pn(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}let me;function En(e){return me||(me=new Ne({ownerDocument:e==null?void 0:e.document})),me}function xn(e){const t=Oe(),n=e||En(t),r=s.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:s.useCallback(a=>{r.current.dialog=a},[]),setBackdropRef:s.useCallback(a=>{r.current.backdrop=a},[])})}const Ye=s.forwardRef((e,t)=>{let{show:n=!1,role:r="dialog",className:a,style:o,children:c,backdrop:i=!0,keyboard:u=!0,onBackdropClick:l,onEscapeKeyDown:d,transition:v,runTransition:h,backdropTransition:y,runBackdropTransition:p,autoFocus:C=!0,enforceFocus:m=!0,restoreFocus:w=!0,restoreFocusOptions:M,renderDialog:N,renderBackdrop:B=E=>f.jsx("div",Object.assign({},E)),manager:S,container:g,onShow:R,onHide:I=()=>{},onExit:G,onExited:X,onExiting:ne,onEnter:re,onEntering:_,onEntered:V}=e,Y=pn(e,hn);const $=Oe(),L=fn(g),x=xn(S),ae=tn(),oe=an(n),[P,z]=s.useState(!n),D=s.useRef(null);s.useImperativeHandle(t,()=>x,[x]),te&&!oe&&n&&(D.current=de($==null?void 0:$.document)),n&&P&&z(!1);const H=O(()=>{if(x.add(),ie.current=q(document,"keydown",at),se.current=q(document,"focus",()=>setTimeout(U),!0),R&&R(),C){var E,ke;const ue=de((E=(ke=x.dialog)==null?void 0:ke.ownerDocument)!=null?E:$==null?void 0:$.document);x.dialog&&ue&&!Ae(x.dialog,ue)&&(D.current=ue,x.dialog.focus())}}),b=O(()=>{if(x.remove(),ie.current==null||ie.current(),se.current==null||se.current(),w){var E;(E=D.current)==null||E.focus==null||E.focus(M),D.current=null}});s.useEffect(()=>{!n||!L||H()},[n,L,H]),s.useEffect(()=>{P&&b()},[P,b]),rn(()=>{b()});const U=O(()=>{if(!m||!ae()||!x.isTopModal())return;const E=de($==null?void 0:$.document);x.dialog&&E&&!Ae(x.dialog,E)&&x.dialog.focus()}),rt=O(E=>{E.target===E.currentTarget&&(l==null||l(E),i===!0&&I())}),at=O(E=>{u&&gn(E)&&x.isTopModal()&&(d==null||d(E),E.defaultPrevented||I())}),se=s.useRef(),ie=s.useRef(),ot=(...E)=>{z(!0),X==null||X(...E)};if(!L)return null;const je=Object.assign({role:r,ref:x.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},Y,{style:o,className:a,tabIndex:-1});let ce=N?N(je):f.jsx("div",Object.assign({},je,{children:s.cloneElement(c,{role:"document"})}));ce=Ie(v,h,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:G,onExiting:ne,onExited:ot,onEnter:re,onEntering:_,onEntered:V,children:ce});let Q=null;return i&&(Q=B({ref:x.setBackdropRef,onClick:rt}),Q=Ie(y,p,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Q})),f.jsx(f.Fragment,{children:_e.createPortal(f.jsxs(f.Fragment,{children:[Q,ce]}),L)})});Ye.displayName="Modal";const yn=Object.assign(Ye,{Manager:Ne}),Cn={[ee]:"show",[ye]:"show"},ze=s.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...a},o)=>{const c={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...a},i=s.useCallback((u,l)=>{We(u),r==null||r(u,l)},[r]);return f.jsx(we,{ref:o,addEndListener:Re,...c,onEnter:i,childRef:t.ref,children:(u,l)=>s.cloneElement(t,{...l,className:T("fade",e,t.props.className,Cn[u],n[u])})})});ze.displayName="Fade";const bn=ze,Rn=Ce("offcanvas-body"),Tn={[ee]:"show",[ye]:"show"},Qe=s.forwardRef(({bsPrefix:e,className:t,children:n,in:r=!1,mountOnEnter:a=!1,unmountOnExit:o=!1,appear:c=!1,...i},u)=>(e=k(e,"offcanvas"),f.jsx(we,{ref:u,addEndListener:Re,in:r,mountOnEnter:a,unmountOnExit:o,appear:c,...i,childRef:n.ref,children:(l,d)=>s.cloneElement(n,{...d,className:T(t,n.props.className,(l===ee||l===Pe)&&`${e}-toggling`,Tn[l])})})));Qe.displayName="OffcanvasToggling";const wn=Qe,Nn=s.createContext({onHide(){}}),Ze=Nn,On={"aria-label":le.string,onClick:le.func,variant:le.oneOf(["white"])},Me=s.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},a)=>f.jsx("button",{ref:a,type:"button",className:T("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));Me.displayName="CloseButton";Me.propTypes=On;const Mn=Me,jn=s.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:a,...o},c)=>{const i=s.useContext(Ze),u=O(()=>{i==null||i.onHide(),r==null||r()});return f.jsxs("div",{ref:c,...o,children:[a,n&&f.jsx(Mn,{"aria-label":e,variant:t,onClick:u})]})}),kn=jn,Je=s.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...a},o)=>(e=k(e,"offcanvas-header"),f.jsx(kn,{ref:o,...a,className:T(t,e),closeLabel:n,closeButton:r})));Je.displayName="OffcanvasHeader";const Sn=Je,$n=e=>s.forwardRef((t,n)=>f.jsx("div",{...t,ref:n,className:T(t.className,e)})),Bn=$n("h5"),Ln=Ce("offcanvas-title",{Component:Bn});var Dn=Function.prototype.bind.call(Function.prototype.call,[].slice);function A(e,t){return Dn(e.querySelectorAll(t))}const F={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class qe extends Ne{adjustAndStore(t,n,r){const a=n.style[t];n.dataset[t]=a,j(n,{[t]:`${parseFloat(j(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],j(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(ft(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";A(n,F.FIXED_CONTENT).forEach(o=>this.adjustAndStore(r,o,t.scrollBarWidth)),A(n,F.STICKY_CONTENT).forEach(o=>this.adjustAndStore(a,o,-t.scrollBarWidth)),A(n,F.NAVBAR_TOGGLER).forEach(o=>this.adjustAndStore(a,o,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();dt(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";A(n,F.FIXED_CONTENT).forEach(o=>this.restore(r,o)),A(n,F.STICKY_CONTENT).forEach(o=>this.restore(a,o)),A(n,F.NAVBAR_TOGGLER).forEach(o=>this.restore(a,o))}}let ge;function An(e){return ge||(ge=new qe(e)),ge}const Fn=qe;function In(e){return f.jsx(wn,{...e})}function _n(e){return f.jsx(bn,{...e})}const et=s.forwardRef(({bsPrefix:e,className:t,children:n,"aria-labelledby":r,placement:a="start",responsive:o,show:c=!1,backdrop:i=!0,keyboard:u=!0,scroll:l=!1,onEscapeKeyDown:d,onShow:v,onHide:h,container:y,autoFocus:p=!0,enforceFocus:C=!0,restoreFocus:m=!0,restoreFocusOptions:w,onEntered:M,onExit:N,onExiting:B,onEnter:S,onEntering:g,onExited:R,backdropClassName:I,manager:G,renderStaticNode:X=!1,...ne},re)=>{const _=s.useRef();e=k(e,"offcanvas");const{onToggle:V}=s.useContext(K)||{},[Y,$]=s.useState(!1),L=en(o||"xs","up");s.useEffect(()=>{$(o?c&&!L:c)},[c,o,L]);const x=O(()=>{V==null||V(),h==null||h()}),ae=s.useMemo(()=>({onHide:x}),[x]);function oe(){return G||(l?(_.current||(_.current=new Fn({handleContainerOverflow:!1})),_.current):An())}const P=(b,...U)=>{b&&(b.style.visibility="visible"),S==null||S(b,...U)},z=(b,...U)=>{b&&(b.style.visibility=""),R==null||R(...U)},D=s.useCallback(b=>f.jsx("div",{...b,className:T(`${e}-backdrop`,I)}),[I,e]),H=b=>f.jsx("div",{...b,...ne,className:T(t,o?`${e}-${o}`:e,`${e}-${a}`),"aria-labelledby":r,children:n});return f.jsxs(f.Fragment,{children:[!Y&&(o||X)&&H({}),f.jsx(Ze.Provider,{value:ae,children:f.jsx(yn,{show:Y,ref:re,backdrop:i,container:y,keyboard:u,autoFocus:p,enforceFocus:C&&!l,restoreFocus:m,restoreFocusOptions:w,onEscapeKeyDown:d,onShow:v,onHide:x,onEnter:P,onEntering:g,onEntered:M,onExit:N,onExiting:B,onExited:z,manager:oe(),transition:In,backdropTransition:_n,renderBackdrop:D,renderDialog:H})})]})});et.displayName="Offcanvas";const Pn=Object.assign(et,{Body:Rn,Header:Sn,Title:Ln}),tt=s.forwardRef((e,t)=>{const n=s.useContext(K);return f.jsx(Pn,{ref:t,show:!!(n!=null&&n.expanded),...e,renderStaticNode:!0})});tt.displayName="NavbarOffcanvas";const Hn=tt,Un=Ce("navbar-text",{Component:"span"}),nt=s.forwardRef((e,t)=>{const{bsPrefix:n,expand:r=!0,variant:a="light",bg:o,fixed:c,sticky:i,className:u,as:l="nav",expanded:d,onToggle:v,onSelect:h,collapseOnSelect:y=!1,...p}=Ct(e,{expanded:"onToggle"}),C=k(n,"navbar"),m=s.useCallback((...N)=>{h==null||h(...N),y&&d&&(v==null||v(!1))},[h,y,d,v]);p.role===void 0&&l!=="nav"&&(p.role="navigation");let w=`${C}-expand`;typeof r=="string"&&(w=`${w}-${r}`);const M=s.useMemo(()=>({onToggle:()=>v==null?void 0:v(!d),bsPrefix:C,expanded:!!d,expand:r}),[C,d,r,v]);return f.jsx(K.Provider,{value:M,children:f.jsx(pt.Provider,{value:m,children:f.jsx(l,{ref:t,...p,className:T(u,C,r&&w,a&&`${C}-${a}`,o&&`bg-${o}`,i&&`sticky-${i}`,c&&`fixed-${c}`)})})})});nt.displayName="Navbar";const Yn=Object.assign(nt,{Brand:wt,Collapse:Vt,Offcanvas:Hn,Text:Un,Toggle:zt});export{Gn as C,Yn as N,pt as S,Te as a,Vn as b,Ce as c,cn as d,k as e,Ct as f,K as g,Xn as m,A as q,O as u};
