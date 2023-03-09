const le="modulepreload",ie=function(e){return"/"+e},$={},se=function(t,_,o){if(!_||_.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(_.map(r=>{if(r=ie(r),r in $)return;$[r]=!0;const a=r.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(!!o)for(let n=l.length-1;n>=0;n--){const d=l[n];if(d.href===r&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${u}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":le,a||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),a)return new Promise((n,d)=>{s.addEventListener("load",n),s.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};var O,h,G,b,B,J,U={},K=[],ae=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,t){for(var _ in t)e[_]=t[_];return e}function Q(e){var t=e.parentNode;t&&t.removeChild(e)}function S(e,t,_){var o,l,r,a={};for(r in t)r=="key"?o=t[r]:r=="ref"?l=t[r]:a[r]=t[r];if(arguments.length>2&&(a.children=arguments.length>3?O.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)a[r]===void 0&&(a[r]=e.defaultProps[r]);return T(e,a,o,l,null)}function T(e,t,_,o,l){var r={type:e,props:t,key:_,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++G};return l==null&&h.vnode!=null&&h.vnode(r),r}function R(e){return e.children}function A(e,t){this.props=e,this.context=t}function P(e,t){if(t==null)return e.__?P(e.__,e.__.__k.indexOf(e)+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__e;return typeof e.type=="function"?P(e):null}function X(e){var t,_;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null){e.__e=e.__c.base=_.__e;break}return X(e)}}function F(e){(!e.__d&&(e.__d=!0)&&b.push(e)&&!D.__r++||B!==h.debounceRendering)&&((B=h.debounceRendering)||J)(D)}function D(){var e,t,_,o,l,r,a,u;for(b.sort(function(f,s){return f.__v.__b-s.__v.__b});e=b.shift();)e.__d&&(t=b.length,o=void 0,l=void 0,a=(r=(_=e).__v).__e,(u=_.__P)&&(o=[],(l=k({},r)).__v=r.__v+1,W(u,r,l,_.__n,u.ownerSVGElement!==void 0,r.__h!=null?[a]:null,o,a??P(r),r.__h),ne(o,r),r.__e!=a&&X(r)),b.length>t&&b.sort(function(f,s){return f.__v.__b-s.__v.__b}));D.__r=0}function Y(e,t,_,o,l,r,a,u,f,s){var n,d,c,i,p,w,v,y=o&&o.__k||K,g=y.length;for(_.__k=[],n=0;n<t.length;n++)if((i=_.__k[n]=(i=t[n])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?T(null,i,null,null,i):Array.isArray(i)?T(R,{children:i},null,null,null):i.__b>0?T(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null){if(i.__=_,i.__b=_.__b+1,(c=y[n])===null||c&&i.key==c.key&&i.type===c.type)y[n]=void 0;else for(d=0;d<g;d++){if((c=y[d])&&i.key==c.key&&i.type===c.type){y[d]=void 0;break}c=null}W(e,i,c=c||U,l,r,a,u,f,s),p=i.__e,(d=i.ref)&&c.ref!=d&&(v||(v=[]),c.ref&&v.push(c.ref,null,i),v.push(d,i.__c||p,i)),p!=null?(w==null&&(w=p),typeof i.type=="function"&&i.__k===c.__k?i.__d=f=Z(i,f,e):f=ee(e,i,c,y,p,f),typeof _.type=="function"&&(_.__d=f)):f&&c.__e==f&&f.parentNode!=e&&(f=P(c))}for(_.__e=w,n=g;n--;)y[n]!=null&&(typeof _.type=="function"&&y[n].__e!=null&&y[n].__e==_.__d&&(_.__d=te(o).nextSibling),re(y[n],y[n]));if(v)for(n=0;n<v.length;n++)_e(v[n],v[++n],v[++n])}function Z(e,t,_){for(var o,l=e.__k,r=0;l&&r<l.length;r++)(o=l[r])&&(o.__=e,t=typeof o.type=="function"?Z(o,t,_):ee(_,o,o,l,o.__e,t));return t}function ee(e,t,_,o,l,r){var a,u,f;if(t.__d!==void 0)a=t.__d,t.__d=void 0;else if(_==null||l!=r||l.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(l),a=null;else{for(u=r,f=0;(u=u.nextSibling)&&f<o.length;f+=1)if(u==l)break e;e.insertBefore(l,r),a=r}return a!==void 0?a:l.nextSibling}function te(e){var t,_,o;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((_=e.__k[t])&&(o=te(_)))return o}return null}function fe(e,t,_,o,l){var r;for(r in _)r==="children"||r==="key"||r in t||M(e,r,null,_[r],o);for(r in t)l&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||_[r]===t[r]||M(e,r,t[r],_[r],o)}function j(e,t,_){t[0]==="-"?e.setProperty(t,_??""):e[t]=_==null?"":typeof _!="number"||ae.test(t)?_:_+"px"}function M(e,t,_,o,l){var r;e:if(t==="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)_&&t in _||j(e.style,t,"");if(_)for(t in _)o&&_[t]===o[t]||j(e.style,t,_[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=_,_?o||e.addEventListener(t,r?q:V,r):e.removeEventListener(t,r?q:V,r);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,_))}}function V(e){return this.l[e.type+!1](h.event?h.event(e):e)}function q(e){return this.l[e.type+!0](h.event?h.event(e):e)}function W(e,t,_,o,l,r,a,u,f){var s,n,d,c,i,p,w,v,y,g,C,x,I,E,N,m=t.type;if(t.constructor!==void 0)return null;_.__h!=null&&(f=_.__h,u=t.__e=_.__e,t.__h=null,r=[u]),(s=h.__b)&&s(t);try{e:if(typeof m=="function"){if(v=t.props,y=(s=m.contextType)&&o[s.__c],g=s?y?y.props.value:s.__:o,_.__c?w=(n=t.__c=_.__c).__=n.__E:("prototype"in m&&m.prototype.render?t.__c=n=new m(v,g):(t.__c=n=new A(v,g),n.constructor=m,n.render=ue),y&&y.sub(n),n.props=v,n.state||(n.state={}),n.context=g,n.__n=o,d=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),m.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=k({},n.__s)),k(n.__s,m.getDerivedStateFromProps(v,n.__s))),c=n.props,i=n.state,n.__v=t,d)m.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(m.getDerivedStateFromProps==null&&v!==c&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,g),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,g)===!1||t.__v===_.__v){for(t.__v!==_.__v&&(n.props=v,n.state=n.__s,n.__d=!1),n.__e=!1,t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(L){L&&(L.__=t)}),C=0;C<n._sb.length;C++)n.__h.push(n._sb[C]);n._sb=[],n.__h.length&&a.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,g),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(c,i,p)})}if(n.context=g,n.props=v,n.__P=e,x=h.__r,I=0,"prototype"in m&&m.prototype.render){for(n.state=n.__s,n.__d=!1,x&&x(t),s=n.render(n.props,n.state,n.context),E=0;E<n._sb.length;E++)n.__h.push(n._sb[E]);n._sb=[]}else do n.__d=!1,x&&x(t),s=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++I<25);n.state=n.__s,n.getChildContext!=null&&(o=k(k({},o),n.getChildContext())),d||n.getSnapshotBeforeUpdate==null||(p=n.getSnapshotBeforeUpdate(c,i)),N=s!=null&&s.type===R&&s.key==null?s.props.children:s,Y(e,Array.isArray(N)?N:[N],t,_,o,l,r,a,u,f),n.base=t.__e,t.__h=null,n.__h.length&&a.push(n),w&&(n.__E=n.__=null),n.__e=!1}else r==null&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=ce(_.__e,t,_,o,l,r,a,f);(s=h.diffed)&&s(t)}catch(L){t.__v=null,(f||r!=null)&&(t.__e=u,t.__h=!!f,r[r.indexOf(u)]=null),h.__e(L,t,_)}}function ne(e,t){h.__c&&h.__c(t,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(o){o.call(_)})}catch(o){h.__e(o,_.__v)}})}function ce(e,t,_,o,l,r,a,u){var f,s,n,d=_.props,c=t.props,i=t.type,p=0;if(i==="svg"&&(l=!0),r!=null){for(;p<r.length;p++)if((f=r[p])&&"setAttribute"in f==!!i&&(i?f.localName===i:f.nodeType===3)){e=f,r[p]=null;break}}if(e==null){if(i===null)return document.createTextNode(c);e=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,c.is&&c),r=null,u=!1}if(i===null)d===c||u&&e.data===c||(e.data=c);else{if(r=r&&O.call(e.childNodes),s=(d=_.props||U).dangerouslySetInnerHTML,n=c.dangerouslySetInnerHTML,!u){if(r!=null)for(d={},p=0;p<e.attributes.length;p++)d[e.attributes[p].name]=e.attributes[p].value;(n||s)&&(n&&(s&&n.__html==s.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(fe(e,c,d,l,u),n)t.__k=[];else if(p=t.props.children,Y(e,Array.isArray(p)?p:[p],t,_,o,l&&i!=="foreignObject",r,a,r?r[0]:_.__k&&P(_,0),u),r!=null)for(p=r.length;p--;)r[p]!=null&&Q(r[p]);u||("value"in c&&(p=c.value)!==void 0&&(p!==e.value||i==="progress"&&!p||i==="option"&&p!==d.value)&&M(e,"value",p,d.value,!1),"checked"in c&&(p=c.checked)!==void 0&&p!==e.checked&&M(e,"checked",p,d.checked,!1))}return e}function _e(e,t,_){try{typeof e=="function"?e(t):e.current=t}catch(o){h.__e(o,_)}}function re(e,t,_){var o,l;if(h.unmount&&h.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||_e(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){h.__e(r,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&re(o[l],t,_||typeof e.type!="function");_||e.__e==null||Q(e.__e),e.__=e.__e=e.__d=void 0}function ue(e,t,_){return this.constructor(e,_)}function pe(e,t,_){var o,l,r;h.__&&h.__(e,t),l=(o=typeof _=="function")?null:_&&_.__k||t.__k,r=[],W(t,e=(!o&&_||t).__k=S(R,null,[e]),l||U,U,t.ownerSVGElement!==void 0,!o&&_?[_]:l?null:t.firstChild?O.call(t.childNodes):null,r,!o&&_?_:l?l.__e:t.firstChild,o),ne(r,e)}O=K.slice,h={__e:function(e,t,_,o){for(var l,r,a;t=t.__;)if((l=t.__c)&&!l.__)try{if((r=l.constructor)&&r.getDerivedStateFromError!=null&&(l.setState(r.getDerivedStateFromError(e)),a=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,o||{}),a=l.__d),a)return l.__E=l}catch(u){e=u}throw e}},G=0,A.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},_),this.props)),e&&k(_,e),e!=null&&this.__v&&(t&&this._sb.push(t),F(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),F(this))},A.prototype.render=R,b=[],J=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,D.__r=0;const oe=({value:e,name:t})=>e?S("astro-slot",{name:t,dangerouslySetInnerHTML:{__html:e}}):null;oe.shouldComponentUpdate=()=>!1;var z=oe;const H=new Map;var de=e=>async(t,_,{default:o,...l})=>{if(!e.hasAttribute("ssr"))return;for(const[u,f]of Object.entries(l))_[u]=S(z,{value:f,name:u});if(e.dataset.preactSignals){const{signal:u}=await se(()=>import("./signals.module.8cf4d2eb.js"),[]);let f=JSON.parse(e.dataset.preactSignals);for(const[s,n]of Object.entries(f)){if(!H.has(n)){const d=u(_[s]);H.set(n,d)}_[s]=H.get(n)}}function a({children:u}){let f=Object.fromEntries(Array.from(e.attributes).map(s=>[s.name,s.value]));return S(e.localName,f,u)}pe(S(a,null,S(t,_,o!=null?S(z,{value:o}):o)),e.parentNode,e)};export{A as _,de as c,h as l};