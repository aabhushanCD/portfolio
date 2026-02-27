(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))s(D);new MutationObserver(D=>{for(const G of D)if(G.type==="childList")for(const q of G.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&s(q)}).observe(document,{childList:!0,subtree:!0});function j(D){const G={};return D.integrity&&(G.integrity=D.integrity),D.referrerPolicy&&(G.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?G.credentials="include":D.crossOrigin==="anonymous"?G.credentials="omit":G.credentials="same-origin",G}function s(D){if(D.ep)return;D.ep=!0;const G=j(D);fetch(D.href,G)}})();function n1(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var sf={exports:{}},xn={};var p0;function u1(){if(p0)return xn;p0=1;var y=Symbol.for("react.transitional.element"),A=Symbol.for("react.fragment");function j(s,D,G){var q=null;if(G!==void 0&&(q=""+G),D.key!==void 0&&(q=""+D.key),"key"in D){G={};for(var sl in D)sl!=="key"&&(G[sl]=D[sl])}else G=D;return D=G.ref,{$$typeof:y,type:s,key:q,ref:D!==void 0?D:null,props:G}}return xn.Fragment=A,xn.jsx=j,xn.jsxs=j,xn}var S0;function i1(){return S0||(S0=1,sf.exports=u1()),sf.exports}var d=i1(),of={exports:{}},X={};var x0;function c1(){if(x0)return X;x0=1;var y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),q=Symbol.for("react.context"),sl=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),nl=Symbol.iterator;function Wl(r){return r===null||typeof r!="object"?null:(r=nl&&r[nl]||r["@@iterator"],typeof r=="function"?r:null)}var ql={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rl=Object.assign,_t={};function $l(r,E,O){this.props=r,this.context=E,this.refs=_t,this.updater=O||ql}$l.prototype.isReactComponent={},$l.prototype.setState=function(r,E){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,E,"setState")},$l.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Wt(){}Wt.prototype=$l.prototype;function Cl(r,E,O){this.props=r,this.context=E,this.refs=_t,this.updater=O||ql}var ct=Cl.prototype=new Wt;ct.constructor=Cl,Rl(ct,$l.prototype),ct.isPureReactComponent=!0;var zt=Array.isArray;function Gl(){}var W={H:null,A:null,T:null,S:null},Xl=Object.prototype.hasOwnProperty;function Et(r,E,O){var U=O.ref;return{$$typeof:y,type:r,key:E,ref:U!==void 0?U:null,props:O}}function Ze(r,E){return Et(r.type,E,r.props)}function Tt(r){return typeof r=="object"&&r!==null&&r.$$typeof===y}function Ql(r){var E={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(O){return E[O]})}var xe=/\/+/g;function Nt(r,E){return typeof r=="object"&&r!==null&&r.key!=null?Ql(""+r.key):E.toString(36)}function bt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Gl,Gl):(r.status="pending",r.then(function(E){r.status==="pending"&&(r.status="fulfilled",r.value=E)},function(E){r.status==="pending"&&(r.status="rejected",r.reason=E)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function S(r,E,O,U,Q){var V=typeof r;(V==="undefined"||V==="boolean")&&(r=null);var tl=!1;if(r===null)tl=!0;else switch(V){case"bigint":case"string":case"number":tl=!0;break;case"object":switch(r.$$typeof){case y:case A:tl=!0;break;case F:return tl=r._init,S(tl(r._payload),E,O,U,Q)}}if(tl)return Q=Q(r),tl=U===""?"."+Nt(r,0):U,zt(Q)?(O="",tl!=null&&(O=tl.replace(xe,"$&/")+"/"),S(Q,E,O,"",function(Ma){return Ma})):Q!=null&&(Tt(Q)&&(Q=Ze(Q,O+(Q.key==null||r&&r.key===Q.key?"":(""+Q.key).replace(xe,"$&/")+"/")+tl)),E.push(Q)),1;tl=0;var Bl=U===""?".":U+":";if(zt(r))for(var bl=0;bl<r.length;bl++)U=r[bl],V=Bl+Nt(U,bl),tl+=S(U,E,O,V,Q);else if(bl=Wl(r),typeof bl=="function")for(r=bl.call(r),bl=0;!(U=r.next()).done;)U=U.value,V=Bl+Nt(U,bl++),tl+=S(U,E,O,V,Q);else if(V==="object"){if(typeof r.then=="function")return S(bt(r),E,O,U,Q);throw E=String(r),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return tl}function M(r,E,O){if(r==null)return r;var U=[],Q=0;return S(r,U,"","",function(V){return E.call(O,V,Q++)}),U}function Y(r){if(r._status===-1){var E=r._result;E=E(),E.then(function(O){(r._status===0||r._status===-1)&&(r._status=1,r._result=O)},function(O){(r._status===0||r._status===-1)&&(r._status=2,r._result=O)}),r._status===-1&&(r._status=0,r._result=E)}if(r._status===1)return r._result.default;throw r._result}var ul=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},ol={map:M,forEach:function(r,E,O){M(r,function(){E.apply(this,arguments)},O)},count:function(r){var E=0;return M(r,function(){E++}),E},toArray:function(r){return M(r,function(E){return E})||[]},only:function(r){if(!Tt(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return X.Activity=H,X.Children=ol,X.Component=$l,X.Fragment=j,X.Profiler=D,X.PureComponent=Cl,X.StrictMode=s,X.Suspense=_,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,X.__COMPILER_RUNTIME={__proto__:null,c:function(r){return W.H.useMemoCache(r)}},X.cache=function(r){return function(){return r.apply(null,arguments)}},X.cacheSignal=function(){return null},X.cloneElement=function(r,E,O){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var U=Rl({},r.props),Q=r.key;if(E!=null)for(V in E.key!==void 0&&(Q=""+E.key),E)!Xl.call(E,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&E.ref===void 0||(U[V]=E[V]);var V=arguments.length-2;if(V===1)U.children=O;else if(1<V){for(var tl=Array(V),Bl=0;Bl<V;Bl++)tl[Bl]=arguments[Bl+2];U.children=tl}return Et(r.type,Q,U)},X.createContext=function(r){return r={$$typeof:q,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:G,_context:r},r},X.createElement=function(r,E,O){var U,Q={},V=null;if(E!=null)for(U in E.key!==void 0&&(V=""+E.key),E)Xl.call(E,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(Q[U]=E[U]);var tl=arguments.length-2;if(tl===1)Q.children=O;else if(1<tl){for(var Bl=Array(tl),bl=0;bl<tl;bl++)Bl[bl]=arguments[bl+2];Q.children=Bl}if(r&&r.defaultProps)for(U in tl=r.defaultProps,tl)Q[U]===void 0&&(Q[U]=tl[U]);return Et(r,V,Q)},X.createRef=function(){return{current:null}},X.forwardRef=function(r){return{$$typeof:sl,render:r}},X.isValidElement=Tt,X.lazy=function(r){return{$$typeof:F,_payload:{_status:-1,_result:r},_init:Y}},X.memo=function(r,E){return{$$typeof:T,type:r,compare:E===void 0?null:E}},X.startTransition=function(r){var E=W.T,O={};W.T=O;try{var U=r(),Q=W.S;Q!==null&&Q(O,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(Gl,ul)}catch(V){ul(V)}finally{E!==null&&O.types!==null&&(E.types=O.types),W.T=E}},X.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},X.use=function(r){return W.H.use(r)},X.useActionState=function(r,E,O){return W.H.useActionState(r,E,O)},X.useCallback=function(r,E){return W.H.useCallback(r,E)},X.useContext=function(r){return W.H.useContext(r)},X.useDebugValue=function(){},X.useDeferredValue=function(r,E){return W.H.useDeferredValue(r,E)},X.useEffect=function(r,E){return W.H.useEffect(r,E)},X.useEffectEvent=function(r){return W.H.useEffectEvent(r)},X.useId=function(){return W.H.useId()},X.useImperativeHandle=function(r,E,O){return W.H.useImperativeHandle(r,E,O)},X.useInsertionEffect=function(r,E){return W.H.useInsertionEffect(r,E)},X.useLayoutEffect=function(r,E){return W.H.useLayoutEffect(r,E)},X.useMemo=function(r,E){return W.H.useMemo(r,E)},X.useOptimistic=function(r,E){return W.H.useOptimistic(r,E)},X.useReducer=function(r,E,O){return W.H.useReducer(r,E,O)},X.useRef=function(r){return W.H.useRef(r)},X.useState=function(r){return W.H.useState(r)},X.useSyncExternalStore=function(r,E,O){return W.H.useSyncExternalStore(r,E,O)},X.useTransition=function(){return W.H.useTransition()},X.version="19.2.4",X}var z0;function gf(){return z0||(z0=1,of.exports=c1()),of.exports}var hl=gf();const Qe=n1(hl);var rf={exports:{}},zn={},df={exports:{}},mf={};var E0;function f1(){return E0||(E0=1,(function(y){function A(S,M){var Y=S.length;S.push(M);l:for(;0<Y;){var ul=Y-1>>>1,ol=S[ul];if(0<D(ol,M))S[ul]=M,S[Y]=ol,Y=ul;else break l}}function j(S){return S.length===0?null:S[0]}function s(S){if(S.length===0)return null;var M=S[0],Y=S.pop();if(Y!==M){S[0]=Y;l:for(var ul=0,ol=S.length,r=ol>>>1;ul<r;){var E=2*(ul+1)-1,O=S[E],U=E+1,Q=S[U];if(0>D(O,Y))U<ol&&0>D(Q,O)?(S[ul]=Q,S[U]=Y,ul=U):(S[ul]=O,S[E]=Y,ul=E);else if(U<ol&&0>D(Q,Y))S[ul]=Q,S[U]=Y,ul=U;else break l}}return M}function D(S,M){var Y=S.sortIndex-M.sortIndex;return Y!==0?Y:S.id-M.id}if(y.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var G=performance;y.unstable_now=function(){return G.now()}}else{var q=Date,sl=q.now();y.unstable_now=function(){return q.now()-sl}}var _=[],T=[],F=1,H=null,nl=3,Wl=!1,ql=!1,Rl=!1,_t=!1,$l=typeof setTimeout=="function"?setTimeout:null,Wt=typeof clearTimeout=="function"?clearTimeout:null,Cl=typeof setImmediate<"u"?setImmediate:null;function ct(S){for(var M=j(T);M!==null;){if(M.callback===null)s(T);else if(M.startTime<=S)s(T),M.sortIndex=M.expirationTime,A(_,M);else break;M=j(T)}}function zt(S){if(Rl=!1,ct(S),!ql)if(j(_)!==null)ql=!0,Gl||(Gl=!0,Ql());else{var M=j(T);M!==null&&bt(zt,M.startTime-S)}}var Gl=!1,W=-1,Xl=5,Et=-1;function Ze(){return _t?!0:!(y.unstable_now()-Et<Xl)}function Tt(){if(_t=!1,Gl){var S=y.unstable_now();Et=S;var M=!0;try{l:{ql=!1,Rl&&(Rl=!1,Wt(W),W=-1),Wl=!0;var Y=nl;try{t:{for(ct(S),H=j(_);H!==null&&!(H.expirationTime>S&&Ze());){var ul=H.callback;if(typeof ul=="function"){H.callback=null,nl=H.priorityLevel;var ol=ul(H.expirationTime<=S);if(S=y.unstable_now(),typeof ol=="function"){H.callback=ol,ct(S),M=!0;break t}H===j(_)&&s(_),ct(S)}else s(_);H=j(_)}if(H!==null)M=!0;else{var r=j(T);r!==null&&bt(zt,r.startTime-S),M=!1}}break l}finally{H=null,nl=Y,Wl=!1}M=void 0}}finally{M?Ql():Gl=!1}}}var Ql;if(typeof Cl=="function")Ql=function(){Cl(Tt)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Nt=xe.port2;xe.port1.onmessage=Tt,Ql=function(){Nt.postMessage(null)}}else Ql=function(){$l(Tt,0)};function bt(S,M){W=$l(function(){S(y.unstable_now())},M)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(S){S.callback=null},y.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Xl=0<S?Math.floor(1e3/S):5},y.unstable_getCurrentPriorityLevel=function(){return nl},y.unstable_next=function(S){switch(nl){case 1:case 2:case 3:var M=3;break;default:M=nl}var Y=nl;nl=M;try{return S()}finally{nl=Y}},y.unstable_requestPaint=function(){_t=!0},y.unstable_runWithPriority=function(S,M){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var Y=nl;nl=S;try{return M()}finally{nl=Y}},y.unstable_scheduleCallback=function(S,M,Y){var ul=y.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ul+Y:ul):Y=ul,S){case 1:var ol=-1;break;case 2:ol=250;break;case 5:ol=1073741823;break;case 4:ol=1e4;break;default:ol=5e3}return ol=Y+ol,S={id:F++,callback:M,priorityLevel:S,startTime:Y,expirationTime:ol,sortIndex:-1},Y>ul?(S.sortIndex=Y,A(T,S),j(_)===null&&S===j(T)&&(Rl?(Wt(W),W=-1):Rl=!0,bt(zt,Y-ul))):(S.sortIndex=ol,A(_,S),ql||Wl||(ql=!0,Gl||(Gl=!0,Ql()))),S},y.unstable_shouldYield=Ze,y.unstable_wrapCallback=function(S){var M=nl;return function(){var Y=nl;nl=M;try{return S.apply(this,arguments)}finally{nl=Y}}}})(mf)),mf}var T0;function s1(){return T0||(T0=1,df.exports=f1()),df.exports}var hf={exports:{}},Hl={};var A0;function o1(){if(A0)return Hl;A0=1;var y=gf();function A(_){var T="https://react.dev/errors/"+_;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var F=2;F<arguments.length;F++)T+="&args[]="+encodeURIComponent(arguments[F])}return"Minified React error #"+_+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(){}var s={d:{f:j,r:function(){throw Error(A(522))},D:j,C:j,L:j,m:j,X:j,S:j,M:j},p:0,findDOMNode:null},D=Symbol.for("react.portal");function G(_,T,F){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:H==null?null:""+H,children:_,containerInfo:T,implementation:F}}var q=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function sl(_,T){if(_==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Hl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Hl.createPortal=function(_,T){var F=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(A(299));return G(_,T,null,F)},Hl.flushSync=function(_){var T=q.T,F=s.p;try{if(q.T=null,s.p=2,_)return _()}finally{q.T=T,s.p=F,s.d.f()}},Hl.preconnect=function(_,T){typeof _=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,s.d.C(_,T))},Hl.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Hl.preinit=function(_,T){if(typeof _=="string"&&T&&typeof T.as=="string"){var F=T.as,H=sl(F,T.crossOrigin),nl=typeof T.integrity=="string"?T.integrity:void 0,Wl=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;F==="style"?s.d.S(_,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:H,integrity:nl,fetchPriority:Wl}):F==="script"&&s.d.X(_,{crossOrigin:H,integrity:nl,fetchPriority:Wl,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Hl.preinitModule=function(_,T){if(typeof _=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var F=sl(T.as,T.crossOrigin);s.d.M(_,{crossOrigin:F,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&s.d.M(_)},Hl.preload=function(_,T){if(typeof _=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var F=T.as,H=sl(F,T.crossOrigin);s.d.L(_,F,{crossOrigin:H,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Hl.preloadModule=function(_,T){if(typeof _=="string")if(T){var F=sl(T.as,T.crossOrigin);s.d.m(_,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:F,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else s.d.m(_)},Hl.requestFormReset=function(_){s.d.r(_)},Hl.unstable_batchedUpdates=function(_,T){return _(T)},Hl.useFormState=function(_,T,F){return q.H.useFormState(_,T,F)},Hl.useFormStatus=function(){return q.H.useHostTransitionStatus()},Hl.version="19.2.4",Hl}var j0;function r1(){if(j0)return hf.exports;j0=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(A){console.error(A)}}return y(),hf.exports=o1(),hf.exports}var M0;function d1(){if(M0)return zn;M0=1;var y=s1(),A=gf(),j=r1();function s(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function G(l){var t=l,e=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(e=t.return),l=t.return;while(l)}return t.tag===3?e:null}function q(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function sl(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function _(l){if(G(l)!==l)throw Error(s(188))}function T(l){var t=l.alternate;if(!t){if(t=G(l),t===null)throw Error(s(188));return t!==l?null:l}for(var e=l,a=t;;){var n=e.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){e=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===e)return _(n),l;if(u===a)return _(n),t;u=u.sibling}throw Error(s(188))}if(e.return!==a.return)e=n,a=u;else{for(var i=!1,c=n.child;c;){if(c===e){i=!0,e=n,a=u;break}if(c===a){i=!0,a=n,e=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===e){i=!0,e=u,a=n;break}if(c===a){i=!0,a=u,e=n;break}c=c.sibling}if(!i)throw Error(s(189))}}if(e.alternate!==a)throw Error(s(190))}if(e.tag!==3)throw Error(s(188));return e.stateNode.current===e?l:t}function F(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=F(l),t!==null)return t;l=l.sibling}return null}var H=Object.assign,nl=Symbol.for("react.element"),Wl=Symbol.for("react.transitional.element"),ql=Symbol.for("react.portal"),Rl=Symbol.for("react.fragment"),_t=Symbol.for("react.strict_mode"),$l=Symbol.for("react.profiler"),Wt=Symbol.for("react.consumer"),Cl=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),zt=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Xl=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Ze=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function Ql(l){return l===null||typeof l!="object"?null:(l=Tt&&l[Tt]||l["@@iterator"],typeof l=="function"?l:null)}var xe=Symbol.for("react.client.reference");function Nt(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===xe?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case Rl:return"Fragment";case $l:return"Profiler";case _t:return"StrictMode";case zt:return"Suspense";case Gl:return"SuspenseList";case Et:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case ql:return"Portal";case Cl:return l.displayName||"Context";case Wt:return(l._context.displayName||"Context")+".Consumer";case ct:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case W:return t=l.displayName||null,t!==null?t:Nt(l.type)||"Memo";case Xl:t=l._payload,l=l._init;try{return Nt(l(t))}catch{}}return null}var bt=Array.isArray,S=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ul=[],ol=-1;function r(l){return{current:l}}function E(l){0>ol||(l.current=ul[ol],ul[ol]=null,ol--)}function O(l,t){ol++,ul[ol]=l.current,l.current=t}var U=r(null),Q=r(null),V=r(null),tl=r(null);function Bl(l,t){switch(O(V,t),O(Q,l),O(U,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Zr(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Zr(t),l=Lr(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}E(U),O(U,l)}function bl(){E(U),E(Q),E(V)}function Ma(l){l.memoizedState!==null&&O(tl,l);var t=U.current,e=Lr(t,l.type);t!==e&&(O(Q,l),O(U,e))}function Tn(l){Q.current===l&&(E(U),E(Q)),tl.current===l&&(E(tl),yn._currentValue=Y)}var Vu,yf;function ze(l){if(Vu===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Vu=t&&t[1]||"",yf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vu+l+yf}var wu=!1;function Ku(l,t){if(!l||wu)return"";wu=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(b){var g=b}Reflect.construct(l,[],z)}else{try{z.call()}catch(b){g=b}l.call(z.prototype)}}else{try{throw Error()}catch(b){g=b}(z=l())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(b){if(b&&g&&typeof b.stack=="string")return[b.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var f=i.split(`
`),v=c.split(`
`);for(n=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;if(a===f.length||n===v.length)for(a=f.length-1,n=v.length-1;1<=a&&0<=n&&f[a]!==v[n];)n--;for(;1<=a&&0<=n;a--,n--)if(f[a]!==v[n]){if(a!==1||n!==1)do if(a--,n--,0>n||f[a]!==v[n]){var p=`
`+f[a].replace(" at new "," at ");return l.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",l.displayName)),p}while(1<=a&&0<=n);break}}}finally{wu=!1,Error.prepareStackTrace=e}return(e=l?l.displayName||l.name:"")?ze(e):""}function R0(l,t){switch(l.tag){case 26:case 27:case 5:return ze(l.type);case 16:return ze("Lazy");case 13:return l.child!==t&&t!==null?ze("Suspense Fallback"):ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return Ku(l.type,!1);case 11:return Ku(l.type.render,!1);case 1:return Ku(l.type,!0);case 31:return ze("Activity");default:return""}}function bf(l){try{var t="",e=null;do t+=R0(l,e),e=l,l=l.return;while(l);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ju=Object.prototype.hasOwnProperty,ku=y.unstable_scheduleCallback,Wu=y.unstable_cancelCallback,B0=y.unstable_shouldYield,Y0=y.unstable_requestPaint,Fl=y.unstable_now,q0=y.unstable_getCurrentPriorityLevel,pf=y.unstable_ImmediatePriority,Sf=y.unstable_UserBlockingPriority,An=y.unstable_NormalPriority,G0=y.unstable_LowPriority,xf=y.unstable_IdlePriority,X0=y.log,Q0=y.unstable_setDisableYieldValue,Oa=null,Il=null;function $t(l){if(typeof X0=="function"&&Q0(l),Il&&typeof Il.setStrictMode=="function")try{Il.setStrictMode(Oa,l)}catch{}}var Pl=Math.clz32?Math.clz32:V0,Z0=Math.log,L0=Math.LN2;function V0(l){return l>>>=0,l===0?32:31-(Z0(l)/L0|0)|0}var jn=256,Mn=262144,On=4194304;function Ee(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function _n(l,t,e){var a=l.pendingLanes;if(a===0)return 0;var n=0,u=l.suspendedLanes,i=l.pingedLanes;l=l.warmLanes;var c=a&134217727;return c!==0?(a=c&~u,a!==0?n=Ee(a):(i&=c,i!==0?n=Ee(i):e||(e=c&~l,e!==0&&(n=Ee(e))))):(c=a&~u,c!==0?n=Ee(c):i!==0?n=Ee(i):e||(e=a&~l,e!==0&&(n=Ee(e)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,e=t&-t,u>=e||u===32&&(e&4194048)!==0)?t:n}function _a(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function w0(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(){var l=On;return On<<=1,(On&62914560)===0&&(On=4194304),l}function $u(l){for(var t=[],e=0;31>e;e++)t.push(l);return t}function Na(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function K0(l,t,e,a,n,u){var i=l.pendingLanes;l.pendingLanes=e,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=e,l.entangledLanes&=e,l.errorRecoveryDisabledLanes&=e,l.shellSuspendCounter=0;var c=l.entanglements,f=l.expirationTimes,v=l.hiddenUpdates;for(e=i&~e;0<e;){var p=31-Pl(e),z=1<<p;c[p]=0,f[p]=-1;var g=v[p];if(g!==null)for(v[p]=null,p=0;p<g.length;p++){var b=g[p];b!==null&&(b.lane&=-536870913)}e&=~z}a!==0&&Ef(l,a,0),u!==0&&n===0&&l.tag!==0&&(l.suspendedLanes|=u&~(i&~t))}function Ef(l,t,e){l.pendingLanes|=t,l.suspendedLanes&=~t;var a=31-Pl(t);l.entangledLanes|=t,l.entanglements[a]=l.entanglements[a]|1073741824|e&261930}function Tf(l,t){var e=l.entangledLanes|=t;for(l=l.entanglements;e;){var a=31-Pl(e),n=1<<a;n&t|l[a]&t&&(l[a]|=t),e&=~n}}function Af(l,t){var e=t&-t;return e=(e&42)!==0?1:Fu(e),(e&(l.suspendedLanes|t))!==0?0:e}function Fu(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Iu(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function jf(){var l=M.p;return l!==0?l:(l=window.event,l===void 0?32:d0(l.type))}function Mf(l,t){var e=M.p;try{return M.p=l,t()}finally{M.p=e}}var Ft=Math.random().toString(36).slice(2),Ol="__reactFiber$"+Ft,Zl="__reactProps$"+Ft,Le="__reactContainer$"+Ft,Pu="__reactEvents$"+Ft,J0="__reactListeners$"+Ft,k0="__reactHandles$"+Ft,Of="__reactResources$"+Ft,Da="__reactMarker$"+Ft;function li(l){delete l[Ol],delete l[Zl],delete l[Pu],delete l[J0],delete l[k0]}function Ve(l){var t=l[Ol];if(t)return t;for(var e=l.parentNode;e;){if(t=e[Le]||e[Ol]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(l=$r(l);l!==null;){if(e=l[Ol])return e;l=$r(l)}return t}l=e,e=l.parentNode}return null}function we(l){if(l=l[Ol]||l[Le]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Ua(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(s(33))}function Ke(l){var t=l[Of];return t||(t=l[Of]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function jl(l){l[Da]=!0}var _f=new Set,Nf={};function Te(l,t){Je(l,t),Je(l+"Capture",t)}function Je(l,t){for(Nf[l]=t,l=0;l<t.length;l++)_f.add(t[l])}var W0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Df={},Uf={};function $0(l){return Ju.call(Uf,l)?!0:Ju.call(Df,l)?!1:W0.test(l)?Uf[l]=!0:(Df[l]=!0,!1)}function Nn(l,t,e){if($0(t))if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+e)}}function Dn(l,t,e){if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+e)}}function Dt(l,t,e,a){if(a===null)l.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(e);return}l.setAttributeNS(t,e,""+a)}}function ft(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function Cf(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function F0(l,t,e){var a=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){e=""+i,u.call(this,i)}}),Object.defineProperty(l,t,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function ti(l){if(!l._valueTracker){var t=Cf(l)?"checked":"value";l._valueTracker=F0(l,t,""+l[t])}}function Hf(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var e=t.getValue(),a="";return l&&(a=Cf(l)?l.checked?"true":"false":l.value),l=a,l!==e?(t.setValue(l),!0):!1}function Un(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var I0=/[\n"\\]/g;function st(l){return l.replace(I0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ei(l,t,e,a,n,u,i,c){l.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?l.type=i:l.removeAttribute("type"),t!=null?i==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+ft(t)):l.value!==""+ft(t)&&(l.value=""+ft(t)):i!=="submit"&&i!=="reset"||l.removeAttribute("value"),t!=null?ai(l,i,ft(t)):e!=null?ai(l,i,ft(e)):a!=null&&l.removeAttribute("value"),n==null&&u!=null&&(l.defaultChecked=!!u),n!=null&&(l.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?l.name=""+ft(c):l.removeAttribute("name")}function Rf(l,t,e,a,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(l.type=u),t!=null||e!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){ti(l);return}e=e!=null?""+ft(e):"",t=t!=null?""+ft(t):e,c||t===l.value||(l.value=t),l.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,l.checked=c?l.checked:!!a,l.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.name=i),ti(l)}function ai(l,t,e){t==="number"&&Un(l.ownerDocument)===l||l.defaultValue===""+e||(l.defaultValue=""+e)}function ke(l,t,e,a){if(l=l.options,t){t={};for(var n=0;n<e.length;n++)t["$"+e[n]]=!0;for(e=0;e<l.length;e++)n=t.hasOwnProperty("$"+l[e].value),l[e].selected!==n&&(l[e].selected=n),n&&a&&(l[e].defaultSelected=!0)}else{for(e=""+ft(e),t=null,n=0;n<l.length;n++){if(l[n].value===e){l[n].selected=!0,a&&(l[n].defaultSelected=!0);return}t!==null||l[n].disabled||(t=l[n])}t!==null&&(t.selected=!0)}}function Bf(l,t,e){if(t!=null&&(t=""+ft(t),t!==l.value&&(l.value=t),e==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=e!=null?""+ft(e):""}function Yf(l,t,e,a){if(t==null){if(a!=null){if(e!=null)throw Error(s(92));if(bt(a)){if(1<a.length)throw Error(s(93));a=a[0]}e=a}e==null&&(e=""),t=e}e=ft(t),l.defaultValue=e,a=l.textContent,a===e&&a!==""&&a!==null&&(l.value=a),ti(l)}function We(l,t){if(t){var e=l.firstChild;if(e&&e===l.lastChild&&e.nodeType===3){e.nodeValue=t;return}}l.textContent=t}var P0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qf(l,t,e){var a=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":a?l.setProperty(t,e):typeof e!="number"||e===0||P0.has(t)?t==="float"?l.cssFloat=e:l[t]=(""+e).trim():l[t]=e+"px"}function Gf(l,t,e){if(t!=null&&typeof t!="object")throw Error(s(62));if(l=l.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?l.setProperty(a,""):a==="float"?l.cssFloat="":l[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&e[n]!==a&&qf(l,n,a)}else for(var u in t)t.hasOwnProperty(u)&&qf(l,u,t[u])}function ni(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ld=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),td=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(l){return td.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Ut(){}var ui=null;function ii(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var $e=null,Fe=null;function Xf(l){var t=we(l);if(t&&(l=t.stateNode)){var e=l[Zl]||null;l:switch(l=t.stateNode,t.type){case"input":if(ei(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=l;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+st(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var a=e[t];if(a!==l&&a.form===l.form){var n=a[Zl]||null;if(!n)throw Error(s(90));ei(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<e.length;t++)a=e[t],a.form===l.form&&Hf(a)}break l;case"textarea":Bf(l,e.value,e.defaultValue);break l;case"select":t=e.value,t!=null&&ke(l,!!e.multiple,t,!1)}}}var ci=!1;function Qf(l,t,e){if(ci)return l(t,e);ci=!0;try{var a=l(t);return a}finally{if(ci=!1,($e!==null||Fe!==null)&&(Su(),$e&&(t=$e,l=Fe,Fe=$e=null,Xf(t),l)))for(t=0;t<l.length;t++)Xf(l[t])}}function Ca(l,t){var e=l.stateNode;if(e===null)return null;var a=e[Zl]||null;if(a===null)return null;e=a[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(l=l.type,a=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!a;break l;default:l=!1}if(l)return null;if(e&&typeof e!="function")throw Error(s(231,t,typeof e));return e}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fi=!1;if(Ct)try{var Ha={};Object.defineProperty(Ha,"passive",{get:function(){fi=!0}}),window.addEventListener("test",Ha,Ha),window.removeEventListener("test",Ha,Ha)}catch{fi=!1}var It=null,si=null,Hn=null;function Zf(){if(Hn)return Hn;var l,t=si,e=t.length,a,n="value"in It?It.value:It.textContent,u=n.length;for(l=0;l<e&&t[l]===n[l];l++);var i=e-l;for(a=1;a<=i&&t[e-a]===n[u-a];a++);return Hn=n.slice(l,1<a?1-a:void 0)}function Rn(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Bn(){return!0}function Lf(){return!1}function Ll(l){function t(e,a,n,u,i){this._reactName=e,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in l)l.hasOwnProperty(c)&&(e=l[c],this[c]=e?e(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Bn:Lf,this.isPropagationStopped=Lf,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var Ae={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yn=Ll(Ae),Ra=H({},Ae,{view:0,detail:0}),ed=Ll(Ra),oi,ri,Ba,qn=H({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mi,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Ba&&(Ba&&l.type==="mousemove"?(oi=l.screenX-Ba.screenX,ri=l.screenY-Ba.screenY):ri=oi=0,Ba=l),oi)},movementY:function(l){return"movementY"in l?l.movementY:ri}}),Vf=Ll(qn),ad=H({},qn,{dataTransfer:0}),nd=Ll(ad),ud=H({},Ra,{relatedTarget:0}),di=Ll(ud),id=H({},Ae,{animationName:0,elapsedTime:0,pseudoElement:0}),cd=Ll(id),fd=H({},Ae,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),sd=Ll(fd),od=H({},Ae,{data:0}),wf=Ll(od),rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hd(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=md[l])?!!t[l]:!1}function mi(){return hd}var vd=H({},Ra,{key:function(l){if(l.key){var t=rd[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Rn(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?dd[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mi,charCode:function(l){return l.type==="keypress"?Rn(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Rn(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),gd=Ll(vd),yd=H({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kf=Ll(yd),bd=H({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mi}),pd=Ll(bd),Sd=H({},Ae,{propertyName:0,elapsedTime:0,pseudoElement:0}),xd=Ll(Sd),zd=H({},qn,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),Ed=Ll(zd),Td=H({},Ae,{newState:0,oldState:0}),Ad=Ll(Td),jd=[9,13,27,32],hi=Ct&&"CompositionEvent"in window,Ya=null;Ct&&"documentMode"in document&&(Ya=document.documentMode);var Md=Ct&&"TextEvent"in window&&!Ya,Jf=Ct&&(!hi||Ya&&8<Ya&&11>=Ya),kf=" ",Wf=!1;function $f(l,t){switch(l){case"keyup":return jd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Ie=!1;function Od(l,t){switch(l){case"compositionend":return Ff(t);case"keypress":return t.which!==32?null:(Wf=!0,kf);case"textInput":return l=t.data,l===kf&&Wf?null:l;default:return null}}function _d(l,t){if(Ie)return l==="compositionend"||!hi&&$f(l,t)?(l=Zf(),Hn=si=It=null,Ie=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jf&&t.locale!=="ko"?null:t.data;default:return null}}var Nd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!Nd[l.type]:t==="textarea"}function Pf(l,t,e,a){$e?Fe?Fe.push(a):Fe=[a]:$e=a,t=Mu(t,"onChange"),0<t.length&&(e=new Yn("onChange","change",null,e,a),l.push({event:e,listeners:t}))}var qa=null,Ga=null;function Dd(l){Br(l,0)}function Gn(l){var t=Ua(l);if(Hf(t))return l}function ls(l,t){if(l==="change")return t}var ts=!1;if(Ct){var vi;if(Ct){var gi="oninput"in document;if(!gi){var es=document.createElement("div");es.setAttribute("oninput","return;"),gi=typeof es.oninput=="function"}vi=gi}else vi=!1;ts=vi&&(!document.documentMode||9<document.documentMode)}function as(){qa&&(qa.detachEvent("onpropertychange",ns),Ga=qa=null)}function ns(l){if(l.propertyName==="value"&&Gn(Ga)){var t=[];Pf(t,Ga,l,ii(l)),Qf(Dd,t)}}function Ud(l,t,e){l==="focusin"?(as(),qa=t,Ga=e,qa.attachEvent("onpropertychange",ns)):l==="focusout"&&as()}function Cd(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Gn(Ga)}function Hd(l,t){if(l==="click")return Gn(t)}function Rd(l,t){if(l==="input"||l==="change")return Gn(t)}function Bd(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var lt=typeof Object.is=="function"?Object.is:Bd;function Xa(l,t){if(lt(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var e=Object.keys(l),a=Object.keys(t);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var n=e[a];if(!Ju.call(t,n)||!lt(l[n],t[n]))return!1}return!0}function us(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function is(l,t){var e=us(l);l=0;for(var a;e;){if(e.nodeType===3){if(a=l+e.textContent.length,l<=t&&a>=t)return{node:e,offset:t-l};l=a}l:{for(;e;){if(e.nextSibling){e=e.nextSibling;break l}e=e.parentNode}e=void 0}e=us(e)}}function cs(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?cs(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function fs(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=Un(l.document);t instanceof l.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)l=t.contentWindow;else break;t=Un(l.document)}return t}function yi(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Yd=Ct&&"documentMode"in document&&11>=document.documentMode,Pe=null,bi=null,Qa=null,pi=!1;function ss(l,t,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;pi||Pe==null||Pe!==Un(a)||(a=Pe,"selectionStart"in a&&yi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qa&&Xa(Qa,a)||(Qa=a,a=Mu(bi,"onSelect"),0<a.length&&(t=new Yn("onSelect","select",null,t,e),l.push({event:t,listeners:a}),t.target=Pe)))}function je(l,t){var e={};return e[l.toLowerCase()]=t.toLowerCase(),e["Webkit"+l]="webkit"+t,e["Moz"+l]="moz"+t,e}var la={animationend:je("Animation","AnimationEnd"),animationiteration:je("Animation","AnimationIteration"),animationstart:je("Animation","AnimationStart"),transitionrun:je("Transition","TransitionRun"),transitionstart:je("Transition","TransitionStart"),transitioncancel:je("Transition","TransitionCancel"),transitionend:je("Transition","TransitionEnd")},Si={},os={};Ct&&(os=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function Me(l){if(Si[l])return Si[l];if(!la[l])return l;var t=la[l],e;for(e in t)if(t.hasOwnProperty(e)&&e in os)return Si[l]=t[e];return l}var rs=Me("animationend"),ds=Me("animationiteration"),ms=Me("animationstart"),qd=Me("transitionrun"),Gd=Me("transitionstart"),Xd=Me("transitioncancel"),hs=Me("transitionend"),vs=new Map,xi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xi.push("scrollEnd");function pt(l,t){vs.set(l,t),Te(t,[l])}var Xn=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},ot=[],ta=0,zi=0;function Qn(){for(var l=ta,t=zi=ta=0;t<l;){var e=ot[t];ot[t++]=null;var a=ot[t];ot[t++]=null;var n=ot[t];ot[t++]=null;var u=ot[t];if(ot[t++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&gs(e,n,u)}}function Zn(l,t,e,a){ot[ta++]=l,ot[ta++]=t,ot[ta++]=e,ot[ta++]=a,zi|=a,l.lanes|=a,l=l.alternate,l!==null&&(l.lanes|=a)}function Ei(l,t,e,a){return Zn(l,t,e,a),Ln(l)}function Oe(l,t){return Zn(l,null,null,t),Ln(l)}function gs(l,t,e){l.lanes|=e;var a=l.alternate;a!==null&&(a.lanes|=e);for(var n=!1,u=l.return;u!==null;)u.childLanes|=e,a=u.alternate,a!==null&&(a.childLanes|=e),u.tag===22&&(l=u.stateNode,l===null||l._visibility&1||(n=!0)),l=u,u=u.return;return l.tag===3?(u=l.stateNode,n&&t!==null&&(n=31-Pl(e),l=u.hiddenUpdates,a=l[n],a===null?l[n]=[t]:a.push(t),t.lane=e|536870912),u):null}function Ln(l){if(50<on)throw on=0,Uc=null,Error(s(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var ea={};function Qd(l,t,e,a){this.tag=l,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(l,t,e,a){return new Qd(l,t,e,a)}function Ti(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Ht(l,t){var e=l.alternate;return e===null?(e=tt(l.tag,t,l.key,l.mode),e.elementType=l.elementType,e.type=l.type,e.stateNode=l.stateNode,e.alternate=l,l.alternate=e):(e.pendingProps=t,e.type=l.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=l.flags&65011712,e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=l.sibling,e.index=l.index,e.ref=l.ref,e.refCleanup=l.refCleanup,e}function ys(l,t){l.flags&=65011714;var e=l.alternate;return e===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,l.type=e.type,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Vn(l,t,e,a,n,u){var i=0;if(a=l,typeof l=="function")Ti(l)&&(i=1);else if(typeof l=="string")i=Km(l,e,U.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case Et:return l=tt(31,e,t,n),l.elementType=Et,l.lanes=u,l;case Rl:return _e(e.children,n,u,t);case _t:i=8,n|=24;break;case $l:return l=tt(12,e,t,n|2),l.elementType=$l,l.lanes=u,l;case zt:return l=tt(13,e,t,n),l.elementType=zt,l.lanes=u,l;case Gl:return l=tt(19,e,t,n),l.elementType=Gl,l.lanes=u,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Cl:i=10;break l;case Wt:i=9;break l;case ct:i=11;break l;case W:i=14;break l;case Xl:i=16,a=null;break l}i=29,e=Error(s(130,l===null?"null":typeof l,"")),a=null}return t=tt(i,e,t,n),t.elementType=l,t.type=a,t.lanes=u,t}function _e(l,t,e,a){return l=tt(7,l,a,t),l.lanes=e,l}function Ai(l,t,e){return l=tt(6,l,null,t),l.lanes=e,l}function bs(l){var t=tt(18,null,null,0);return t.stateNode=l,t}function ji(l,t,e){return t=tt(4,l.children!==null?l.children:[],l.key,t),t.lanes=e,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var ps=new WeakMap;function rt(l,t){if(typeof l=="object"&&l!==null){var e=ps.get(l);return e!==void 0?e:(t={value:l,source:t,stack:bf(t)},ps.set(l,t),t)}return{value:l,source:t,stack:bf(t)}}var aa=[],na=0,wn=null,Za=0,dt=[],mt=0,Pt=null,At=1,jt="";function Rt(l,t){aa[na++]=Za,aa[na++]=wn,wn=l,Za=t}function Ss(l,t,e){dt[mt++]=At,dt[mt++]=jt,dt[mt++]=Pt,Pt=l;var a=At;l=jt;var n=32-Pl(a)-1;a&=~(1<<n),e+=1;var u=32-Pl(t)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,At=1<<32-Pl(t)+n|e<<n|a,jt=u+l}else At=1<<u|e<<n|a,jt=l}function Mi(l){l.return!==null&&(Rt(l,1),Ss(l,1,0))}function Oi(l){for(;l===wn;)wn=aa[--na],aa[na]=null,Za=aa[--na],aa[na]=null;for(;l===Pt;)Pt=dt[--mt],dt[mt]=null,jt=dt[--mt],dt[mt]=null,At=dt[--mt],dt[mt]=null}function xs(l,t){dt[mt++]=At,dt[mt++]=jt,dt[mt++]=Pt,At=t.id,jt=t.overflow,Pt=l}var _l=null,dl=null,$=!1,le=null,ht=!1,_i=Error(s(519));function te(l){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw La(rt(t,l)),_i}function zs(l){var t=l.stateNode,e=l.type,a=l.memoizedProps;switch(t[Ol]=l,t[Zl]=a,e){case"dialog":K("cancel",t),K("close",t);break;case"iframe":case"object":case"embed":K("load",t);break;case"video":case"audio":for(e=0;e<dn.length;e++)K(dn[e],t);break;case"source":K("error",t);break;case"img":case"image":case"link":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"input":K("invalid",t),Rf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":K("invalid",t);break;case"textarea":K("invalid",t),Yf(t,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||a.suppressHydrationWarning===!0||Xr(t.textContent,e)?(a.popover!=null&&(K("beforetoggle",t),K("toggle",t)),a.onScroll!=null&&K("scroll",t),a.onScrollEnd!=null&&K("scrollend",t),a.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||te(l,!0)}function Es(l){for(_l=l.return;_l;)switch(_l.tag){case 5:case 31:case 13:ht=!1;return;case 27:case 3:ht=!0;return;default:_l=_l.return}}function ua(l){if(l!==_l)return!1;if(!$)return Es(l),$=!0,!1;var t=l.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=l.type,e=!(e!=="form"&&e!=="button")||Jc(l.type,l.memoizedProps)),e=!e),e&&dl&&te(l),Es(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));dl=Wr(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));dl=Wr(l)}else t===27?(t=dl,ve(l.type)?(l=Ic,Ic=null,dl=l):dl=t):dl=_l?gt(l.stateNode.nextSibling):null;return!0}function Ne(){dl=_l=null,$=!1}function Ni(){var l=le;return l!==null&&(Jl===null?Jl=l:Jl.push.apply(Jl,l),le=null),l}function La(l){le===null?le=[l]:le.push(l)}var Di=r(null),De=null,Bt=null;function ee(l,t,e){O(Di,t._currentValue),t._currentValue=e}function Yt(l){l._currentValue=Di.current,E(Di)}function Ui(l,t,e){for(;l!==null;){var a=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),l===e)break;l=l.return}}function Ci(l,t,e,a){var n=l.child;for(n!==null&&(n.return=l);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;l:for(;u!==null;){var c=u;u=n;for(var f=0;f<t.length;f++)if(c.context===t[f]){u.lanes|=e,c=u.alternate,c!==null&&(c.lanes|=e),Ui(u.return,e,l),a||(i=null);break l}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(s(341));i.lanes|=e,u=i.alternate,u!==null&&(u.lanes|=e),Ui(i,e,l),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===l){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function ia(l,t,e,a){l=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(s(387));if(i=i.memoizedProps,i!==null){var c=n.type;lt(n.pendingProps.value,i.value)||(l!==null?l.push(c):l=[c])}}else if(n===tl.current){if(i=n.alternate,i===null)throw Error(s(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(l!==null?l.push(yn):l=[yn])}n=n.return}l!==null&&Ci(t,l,e,a),t.flags|=262144}function Kn(l){for(l=l.firstContext;l!==null;){if(!lt(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Ue(l){De=l,Bt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Nl(l){return Ts(De,l)}function Jn(l,t){return De===null&&Ue(l),Ts(l,t)}function Ts(l,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},Bt===null){if(l===null)throw Error(s(308));Bt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Bt=Bt.next=t;return e}var Zd=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(e,a){l.push(a)}};this.abort=function(){t.aborted=!0,l.forEach(function(e){return e()})}},Ld=y.unstable_scheduleCallback,Vd=y.unstable_NormalPriority,xl={$$typeof:Cl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hi(){return{controller:new Zd,data:new Map,refCount:0}}function Va(l){l.refCount--,l.refCount===0&&Ld(Vd,function(){l.controller.abort()})}var wa=null,Ri=0,ca=0,fa=null;function wd(l,t){if(wa===null){var e=wa=[];Ri=0,ca=qc(),fa={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Ri++,t.then(As,As),t}function As(){if(--Ri===0&&wa!==null){fa!==null&&(fa.status="fulfilled");var l=wa;wa=null,ca=0,fa=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Kd(l,t){var e=[],a={status:"pending",value:null,reason:null,then:function(n){e.push(n)}};return l.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<e.length;n++)(0,e[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<e.length;n++)(0,e[n])(void 0)}),a}var js=S.S;S.S=function(l,t){or=Fl(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&wd(l,t),js!==null&&js(l,t)};var Ce=r(null);function Bi(){var l=Ce.current;return l!==null?l:rl.pooledCache}function kn(l,t){t===null?O(Ce,Ce.current):O(Ce,t.pool)}function Ms(){var l=Bi();return l===null?null:{parent:xl._currentValue,pool:l}}var sa=Error(s(460)),Yi=Error(s(474)),Wn=Error(s(542)),$n={then:function(){}};function Os(l){return l=l.status,l==="fulfilled"||l==="rejected"}function _s(l,t,e){switch(e=l[e],e===void 0?l.push(t):e!==t&&(t.then(Ut,Ut),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Ds(l),l;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(l=rl,l!==null&&100<l.shellSuspendCounter)throw Error(s(482));l=t,l.status="pending",l.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Ds(l),l}throw Re=t,sa}}function He(l){try{var t=l._init;return t(l._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Re=e,sa):e}}var Re=null;function Ns(){if(Re===null)throw Error(s(459));var l=Re;return Re=null,l}function Ds(l){if(l===sa||l===Wn)throw Error(s(483))}var oa=null,Ka=0;function Fn(l){var t=Ka;return Ka+=1,oa===null&&(oa=[]),_s(oa,l,t)}function Ja(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function In(l,t){throw t.$$typeof===nl?Error(s(525)):(l=Object.prototype.toString.call(t),Error(s(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function Us(l){function t(m,o){if(l){var h=m.deletions;h===null?(m.deletions=[o],m.flags|=16):h.push(o)}}function e(m,o){if(!l)return null;for(;o!==null;)t(m,o),o=o.sibling;return null}function a(m){for(var o=new Map;m!==null;)m.key!==null?o.set(m.key,m):o.set(m.index,m),m=m.sibling;return o}function n(m,o){return m=Ht(m,o),m.index=0,m.sibling=null,m}function u(m,o,h){return m.index=h,l?(h=m.alternate,h!==null?(h=h.index,h<o?(m.flags|=67108866,o):h):(m.flags|=67108866,o)):(m.flags|=1048576,o)}function i(m){return l&&m.alternate===null&&(m.flags|=67108866),m}function c(m,o,h,x){return o===null||o.tag!==6?(o=Ai(h,m.mode,x),o.return=m,o):(o=n(o,h),o.return=m,o)}function f(m,o,h,x){var R=h.type;return R===Rl?p(m,o,h.props.children,x,h.key):o!==null&&(o.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Xl&&He(R)===o.type)?(o=n(o,h.props),Ja(o,h),o.return=m,o):(o=Vn(h.type,h.key,h.props,null,m.mode,x),Ja(o,h),o.return=m,o)}function v(m,o,h,x){return o===null||o.tag!==4||o.stateNode.containerInfo!==h.containerInfo||o.stateNode.implementation!==h.implementation?(o=ji(h,m.mode,x),o.return=m,o):(o=n(o,h.children||[]),o.return=m,o)}function p(m,o,h,x,R){return o===null||o.tag!==7?(o=_e(h,m.mode,x,R),o.return=m,o):(o=n(o,h),o.return=m,o)}function z(m,o,h){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Ai(""+o,m.mode,h),o.return=m,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Wl:return h=Vn(o.type,o.key,o.props,null,m.mode,h),Ja(h,o),h.return=m,h;case ql:return o=ji(o,m.mode,h),o.return=m,o;case Xl:return o=He(o),z(m,o,h)}if(bt(o)||Ql(o))return o=_e(o,m.mode,h,null),o.return=m,o;if(typeof o.then=="function")return z(m,Fn(o),h);if(o.$$typeof===Cl)return z(m,Jn(m,o),h);In(m,o)}return null}function g(m,o,h,x){var R=o!==null?o.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return R!==null?null:c(m,o,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Wl:return h.key===R?f(m,o,h,x):null;case ql:return h.key===R?v(m,o,h,x):null;case Xl:return h=He(h),g(m,o,h,x)}if(bt(h)||Ql(h))return R!==null?null:p(m,o,h,x,null);if(typeof h.then=="function")return g(m,o,Fn(h),x);if(h.$$typeof===Cl)return g(m,o,Jn(m,h),x);In(m,h)}return null}function b(m,o,h,x,R){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return m=m.get(h)||null,c(o,m,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wl:return m=m.get(x.key===null?h:x.key)||null,f(o,m,x,R);case ql:return m=m.get(x.key===null?h:x.key)||null,v(o,m,x,R);case Xl:return x=He(x),b(m,o,h,x,R)}if(bt(x)||Ql(x))return m=m.get(h)||null,p(o,m,x,R,null);if(typeof x.then=="function")return b(m,o,h,Fn(x),R);if(x.$$typeof===Cl)return b(m,o,h,Jn(o,x),R);In(o,x)}return null}function N(m,o,h,x){for(var R=null,I=null,C=o,L=o=0,k=null;C!==null&&L<h.length;L++){C.index>L?(k=C,C=null):k=C.sibling;var P=g(m,C,h[L],x);if(P===null){C===null&&(C=k);break}l&&C&&P.alternate===null&&t(m,C),o=u(P,o,L),I===null?R=P:I.sibling=P,I=P,C=k}if(L===h.length)return e(m,C),$&&Rt(m,L),R;if(C===null){for(;L<h.length;L++)C=z(m,h[L],x),C!==null&&(o=u(C,o,L),I===null?R=C:I.sibling=C,I=C);return $&&Rt(m,L),R}for(C=a(C);L<h.length;L++)k=b(C,m,L,h[L],x),k!==null&&(l&&k.alternate!==null&&C.delete(k.key===null?L:k.key),o=u(k,o,L),I===null?R=k:I.sibling=k,I=k);return l&&C.forEach(function(Se){return t(m,Se)}),$&&Rt(m,L),R}function B(m,o,h,x){if(h==null)throw Error(s(151));for(var R=null,I=null,C=o,L=o=0,k=null,P=h.next();C!==null&&!P.done;L++,P=h.next()){C.index>L?(k=C,C=null):k=C.sibling;var Se=g(m,C,P.value,x);if(Se===null){C===null&&(C=k);break}l&&C&&Se.alternate===null&&t(m,C),o=u(Se,o,L),I===null?R=Se:I.sibling=Se,I=Se,C=k}if(P.done)return e(m,C),$&&Rt(m,L),R;if(C===null){for(;!P.done;L++,P=h.next())P=z(m,P.value,x),P!==null&&(o=u(P,o,L),I===null?R=P:I.sibling=P,I=P);return $&&Rt(m,L),R}for(C=a(C);!P.done;L++,P=h.next())P=b(C,m,L,P.value,x),P!==null&&(l&&P.alternate!==null&&C.delete(P.key===null?L:P.key),o=u(P,o,L),I===null?R=P:I.sibling=P,I=P);return l&&C.forEach(function(a1){return t(m,a1)}),$&&Rt(m,L),R}function fl(m,o,h,x){if(typeof h=="object"&&h!==null&&h.type===Rl&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Wl:l:{for(var R=h.key;o!==null;){if(o.key===R){if(R=h.type,R===Rl){if(o.tag===7){e(m,o.sibling),x=n(o,h.props.children),x.return=m,m=x;break l}}else if(o.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Xl&&He(R)===o.type){e(m,o.sibling),x=n(o,h.props),Ja(x,h),x.return=m,m=x;break l}e(m,o);break}else t(m,o);o=o.sibling}h.type===Rl?(x=_e(h.props.children,m.mode,x,h.key),x.return=m,m=x):(x=Vn(h.type,h.key,h.props,null,m.mode,x),Ja(x,h),x.return=m,m=x)}return i(m);case ql:l:{for(R=h.key;o!==null;){if(o.key===R)if(o.tag===4&&o.stateNode.containerInfo===h.containerInfo&&o.stateNode.implementation===h.implementation){e(m,o.sibling),x=n(o,h.children||[]),x.return=m,m=x;break l}else{e(m,o);break}else t(m,o);o=o.sibling}x=ji(h,m.mode,x),x.return=m,m=x}return i(m);case Xl:return h=He(h),fl(m,o,h,x)}if(bt(h))return N(m,o,h,x);if(Ql(h)){if(R=Ql(h),typeof R!="function")throw Error(s(150));return h=R.call(h),B(m,o,h,x)}if(typeof h.then=="function")return fl(m,o,Fn(h),x);if(h.$$typeof===Cl)return fl(m,o,Jn(m,h),x);In(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,o!==null&&o.tag===6?(e(m,o.sibling),x=n(o,h),x.return=m,m=x):(e(m,o),x=Ai(h,m.mode,x),x.return=m,m=x),i(m)):e(m,o)}return function(m,o,h,x){try{Ka=0;var R=fl(m,o,h,x);return oa=null,R}catch(C){if(C===sa||C===Wn)throw C;var I=tt(29,C,null,m.mode);return I.lanes=x,I.return=m,I}}}var Be=Us(!0),Cs=Us(!1),ae=!1;function qi(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gi(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function ne(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function ue(l,t,e){var a=l.updateQueue;if(a===null)return null;if(a=a.shared,(ll&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Ln(l),gs(l,null,e),t}return Zn(l,a,t,e),Ln(l)}function ka(l,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,Tf(l,e)}}function Xi(l,t){var e=l.updateQueue,a=l.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var n=null,u=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,e=e.next}while(e!==null);u===null?n=u=t:u=u.next=t}else n=u=t;e={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},l.updateQueue=e;return}l=e.lastBaseUpdate,l===null?e.firstBaseUpdate=t:l.next=t,e.lastBaseUpdate=t}var Qi=!1;function Wa(){if(Qi){var l=fa;if(l!==null)throw l}}function $a(l,t,e,a){Qi=!1;var n=l.updateQueue;ae=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,v=f.next;f.next=null,i===null?u=v:i.next=v,i=f;var p=l.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==i&&(c===null?p.firstBaseUpdate=v:c.next=v,p.lastBaseUpdate=f))}if(u!==null){var z=n.baseState;i=0,p=v=f=null,c=u;do{var g=c.lane&-536870913,b=g!==c.lane;if(b?(J&g)===g:(a&g)===g){g!==0&&g===ca&&(Qi=!0),p!==null&&(p=p.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});l:{var N=l,B=c;g=t;var fl=e;switch(B.tag){case 1:if(N=B.payload,typeof N=="function"){z=N.call(fl,z,g);break l}z=N;break l;case 3:N.flags=N.flags&-65537|128;case 0:if(N=B.payload,g=typeof N=="function"?N.call(fl,z,g):N,g==null)break l;z=H({},z,g);break l;case 2:ae=!0}}g=c.callback,g!==null&&(l.flags|=64,b&&(l.flags|=8192),b=n.callbacks,b===null?n.callbacks=[g]:b.push(g))}else b={lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(v=p=b,f=z):p=p.next=b,i|=g;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;b=c,c=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);p===null&&(f=z),n.baseState=f,n.firstBaseUpdate=v,n.lastBaseUpdate=p,u===null&&(n.shared.lanes=0),oe|=i,l.lanes=i,l.memoizedState=z}}function Hs(l,t){if(typeof l!="function")throw Error(s(191,l));l.call(t)}function Rs(l,t){var e=l.callbacks;if(e!==null)for(l.callbacks=null,l=0;l<e.length;l++)Hs(e[l],t)}var ra=r(null),Pn=r(0);function Bs(l,t){l=Kt,O(Pn,l),O(ra,t),Kt=l|t.baseLanes}function Zi(){O(Pn,Kt),O(ra,ra.current)}function Li(){Kt=Pn.current,E(ra),E(Pn)}var et=r(null),vt=null;function ie(l){var t=l.alternate;O(pl,pl.current&1),O(et,l),vt===null&&(t===null||ra.current!==null||t.memoizedState!==null)&&(vt=l)}function Vi(l){O(pl,pl.current),O(et,l),vt===null&&(vt=l)}function Ys(l){l.tag===22?(O(pl,pl.current),O(et,l),vt===null&&(vt=l)):ce()}function ce(){O(pl,pl.current),O(et,et.current)}function at(l){E(et),vt===l&&(vt=null),E(pl)}var pl=r(0);function lu(l){for(var t=l;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||$c(e)||Fc(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qt=0,Z=null,il=null,zl=null,tu=!1,da=!1,Ye=!1,eu=0,Fa=0,ma=null,Jd=0;function gl(){throw Error(s(321))}function wi(l,t){if(t===null)return!1;for(var e=0;e<t.length&&e<l.length;e++)if(!lt(l[e],t[e]))return!1;return!0}function Ki(l,t,e,a,n,u){return qt=u,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=l===null||l.memoizedState===null?xo:cc,Ye=!1,u=e(a,n),Ye=!1,da&&(u=Gs(t,e,a,n)),qs(l),u}function qs(l){S.H=ln;var t=il!==null&&il.next!==null;if(qt=0,zl=il=Z=null,tu=!1,Fa=0,ma=null,t)throw Error(s(300));l===null||El||(l=l.dependencies,l!==null&&Kn(l)&&(El=!0))}function Gs(l,t,e,a){Z=l;var n=0;do{if(da&&(ma=null),Fa=0,da=!1,25<=n)throw Error(s(301));if(n+=1,zl=il=null,l.updateQueue!=null){var u=l.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}S.H=zo,u=t(e,a)}while(da);return u}function kd(){var l=S.H,t=l.useState()[0];return t=typeof t.then=="function"?Ia(t):t,l=l.useState()[0],(il!==null?il.memoizedState:null)!==l&&(Z.flags|=1024),t}function Ji(){var l=eu!==0;return eu=0,l}function ki(l,t,e){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~e}function Wi(l){if(tu){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}tu=!1}qt=0,zl=il=Z=null,da=!1,Fa=eu=0,ma=null}function Yl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zl===null?Z.memoizedState=zl=l:zl=zl.next=l,zl}function Sl(){if(il===null){var l=Z.alternate;l=l!==null?l.memoizedState:null}else l=il.next;var t=zl===null?Z.memoizedState:zl.next;if(t!==null)zl=t,il=l;else{if(l===null)throw Z.alternate===null?Error(s(467)):Error(s(310));il=l,l={memoizedState:il.memoizedState,baseState:il.baseState,baseQueue:il.baseQueue,queue:il.queue,next:null},zl===null?Z.memoizedState=zl=l:zl=zl.next=l}return zl}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ia(l){var t=Fa;return Fa+=1,ma===null&&(ma=[]),l=_s(ma,l,t),t=Z,(zl===null?t.memoizedState:zl.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?xo:cc),l}function nu(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return Ia(l);if(l.$$typeof===Cl)return Nl(l)}throw Error(s(438,String(l)))}function $i(l){var t=null,e=Z.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var a=Z.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=au(),Z.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(l),a=0;a<l;a++)e[a]=Ze;return t.index++,e}function Gt(l,t){return typeof t=="function"?t(l):t}function uu(l){var t=Sl();return Fi(t,il,l)}function Fi(l,t,e){var a=l.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var n=l.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,a.pending=null}if(u=l.baseState,n===null)l.memoizedState=u;else{t=n.next;var c=i=null,f=null,v=t,p=!1;do{var z=v.lane&-536870913;if(z!==v.lane?(J&z)===z:(qt&z)===z){var g=v.revertLane;if(g===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),z===ca&&(p=!0);else if((qt&g)===g){v=v.next,g===ca&&(p=!0);continue}else z={lane:0,revertLane:v.revertLane,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},f===null?(c=f=z,i=u):f=f.next=z,Z.lanes|=g,oe|=g;z=v.action,Ye&&e(u,z),u=v.hasEagerState?v.eagerState:e(u,z)}else g={lane:z,revertLane:v.revertLane,gesture:v.gesture,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},f===null?(c=f=g,i=u):f=f.next=g,Z.lanes|=z,oe|=z;v=v.next}while(v!==null&&v!==t);if(f===null?i=u:f.next=c,!lt(u,l.memoizedState)&&(El=!0,p&&(e=fa,e!==null)))throw e;l.memoizedState=u,l.baseState=i,l.baseQueue=f,a.lastRenderedState=u}return n===null&&(a.lanes=0),[l.memoizedState,a.dispatch]}function Ii(l){var t=Sl(),e=t.queue;if(e===null)throw Error(s(311));e.lastRenderedReducer=l;var a=e.dispatch,n=e.pending,u=t.memoizedState;if(n!==null){e.pending=null;var i=n=n.next;do u=l(u,i.action),i=i.next;while(i!==n);lt(u,t.memoizedState)||(El=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),e.lastRenderedState=u}return[u,a]}function Xs(l,t,e){var a=Z,n=Sl(),u=$;if(u){if(e===void 0)throw Error(s(407));e=e()}else e=t();var i=!lt((il||n).memoizedState,e);if(i&&(n.memoizedState=e,El=!0),n=n.queue,tc(Ls.bind(null,a,n,l),[l]),n.getSnapshot!==t||i||zl!==null&&zl.memoizedState.tag&1){if(a.flags|=2048,ha(9,{destroy:void 0},Zs.bind(null,a,n,e,t),null),rl===null)throw Error(s(349));u||(qt&127)!==0||Qs(a,t,e)}return e}function Qs(l,t,e){l.flags|=16384,l={getSnapshot:t,value:e},t=Z.updateQueue,t===null?(t=au(),Z.updateQueue=t,t.stores=[l]):(e=t.stores,e===null?t.stores=[l]:e.push(l))}function Zs(l,t,e,a){t.value=e,t.getSnapshot=a,Vs(t)&&ws(l)}function Ls(l,t,e){return e(function(){Vs(t)&&ws(l)})}function Vs(l){var t=l.getSnapshot;l=l.value;try{var e=t();return!lt(l,e)}catch{return!0}}function ws(l){var t=Oe(l,2);t!==null&&kl(t,l,2)}function Pi(l){var t=Yl();if(typeof l=="function"){var e=l;if(l=e(),Ye){$t(!0);try{e()}finally{$t(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:l},t}function Ks(l,t,e,a){return l.baseState=e,Fi(l,il,typeof a=="function"?a:Gt)}function Wd(l,t,e,a,n){if(fu(l))throw Error(s(485));if(l=t.action,l!==null){var u={payload:n,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};S.T!==null?e(!0):u.isTransition=!1,a(u),e=t.pending,e===null?(u.next=t.pending=u,Js(t,u)):(u.next=e.next,t.pending=e.next=u)}}function Js(l,t){var e=t.action,a=t.payload,n=l.state;if(t.isTransition){var u=S.T,i={};S.T=i;try{var c=e(n,a),f=S.S;f!==null&&f(i,c),ks(l,t,c)}catch(v){lc(l,t,v)}finally{u!==null&&i.types!==null&&(u.types=i.types),S.T=u}}else try{u=e(n,a),ks(l,t,u)}catch(v){lc(l,t,v)}}function ks(l,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Ws(l,t,a)},function(a){return lc(l,t,a)}):Ws(l,t,e)}function Ws(l,t,e){t.status="fulfilled",t.value=e,$s(t),l.state=e,t=l.pending,t!==null&&(e=t.next,e===t?l.pending=null:(e=e.next,t.next=e,Js(l,e)))}function lc(l,t,e){var a=l.pending;if(l.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=e,$s(t),t=t.next;while(t!==a)}l.action=null}function $s(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Fs(l,t){return t}function Is(l,t){if($){var e=rl.formState;if(e!==null){l:{var a=Z;if($){if(dl){t:{for(var n=dl,u=ht;n.nodeType!==8;){if(!u){n=null;break t}if(n=gt(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){dl=gt(n.nextSibling),a=n.data==="F!";break l}}te(a)}a=!1}a&&(t=e[0])}}return e=Yl(),e.memoizedState=e.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:t},e.queue=a,e=bo.bind(null,Z,a),a.dispatch=e,a=Pi(!1),u=ic.bind(null,Z,!1,a.queue),a=Yl(),n={state:t,dispatch:null,action:l,pending:null},a.queue=n,e=Wd.bind(null,Z,n,u,e),n.dispatch=e,a.memoizedState=l,[t,e,!1]}function Ps(l){var t=Sl();return lo(t,il,l)}function lo(l,t,e){if(t=Fi(l,t,Fs)[0],l=uu(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ia(t)}catch(i){throw i===sa?Wn:i}else a=t;t=Sl();var n=t.queue,u=n.dispatch;return e!==t.memoizedState&&(Z.flags|=2048,ha(9,{destroy:void 0},$d.bind(null,n,e),null)),[a,u,l]}function $d(l,t){l.action=t}function to(l){var t=Sl(),e=il;if(e!==null)return lo(t,e,l);Sl(),t=t.memoizedState,e=Sl();var a=e.queue.dispatch;return e.memoizedState=l,[t,a,!1]}function ha(l,t,e,a){return l={tag:l,create:e,deps:a,inst:t,next:null},t=Z.updateQueue,t===null&&(t=au(),Z.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=l.next=l:(a=e.next,e.next=l,l.next=a,t.lastEffect=l),l}function eo(){return Sl().memoizedState}function iu(l,t,e,a){var n=Yl();Z.flags|=l,n.memoizedState=ha(1|t,{destroy:void 0},e,a===void 0?null:a)}function cu(l,t,e,a){var n=Sl();a=a===void 0?null:a;var u=n.memoizedState.inst;il!==null&&a!==null&&wi(a,il.memoizedState.deps)?n.memoizedState=ha(t,u,e,a):(Z.flags|=l,n.memoizedState=ha(1|t,u,e,a))}function ao(l,t){iu(8390656,8,l,t)}function tc(l,t){cu(2048,8,l,t)}function Fd(l){Z.flags|=4;var t=Z.updateQueue;if(t===null)t=au(),Z.updateQueue=t,t.events=[l];else{var e=t.events;e===null?t.events=[l]:e.push(l)}}function no(l){var t=Sl().memoizedState;return Fd({ref:t,nextImpl:l}),function(){if((ll&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function uo(l,t){return cu(4,2,l,t)}function io(l,t){return cu(4,4,l,t)}function co(l,t){if(typeof t=="function"){l=l();var e=t(l);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function fo(l,t,e){e=e!=null?e.concat([l]):null,cu(4,4,co.bind(null,t,l),e)}function ec(){}function so(l,t){var e=Sl();t=t===void 0?null:t;var a=e.memoizedState;return t!==null&&wi(t,a[1])?a[0]:(e.memoizedState=[l,t],l)}function oo(l,t){var e=Sl();t=t===void 0?null:t;var a=e.memoizedState;if(t!==null&&wi(t,a[1]))return a[0];if(a=l(),Ye){$t(!0);try{l()}finally{$t(!1)}}return e.memoizedState=[a,t],a}function ac(l,t,e){return e===void 0||(qt&1073741824)!==0&&(J&261930)===0?l.memoizedState=t:(l.memoizedState=e,l=dr(),Z.lanes|=l,oe|=l,e)}function ro(l,t,e,a){return lt(e,t)?e:ra.current!==null?(l=ac(l,e,a),lt(l,t)||(El=!0),l):(qt&42)===0||(qt&1073741824)!==0&&(J&261930)===0?(El=!0,l.memoizedState=e):(l=dr(),Z.lanes|=l,oe|=l,t)}function mo(l,t,e,a,n){var u=M.p;M.p=u!==0&&8>u?u:8;var i=S.T,c={};S.T=c,ic(l,!1,t,e);try{var f=n(),v=S.S;if(v!==null&&v(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var p=Kd(f,a);Pa(l,t,p,it(l))}else Pa(l,t,a,it(l))}catch(z){Pa(l,t,{then:function(){},status:"rejected",reason:z},it())}finally{M.p=u,i!==null&&c.types!==null&&(i.types=c.types),S.T=i}}function Id(){}function nc(l,t,e,a){if(l.tag!==5)throw Error(s(476));var n=ho(l).queue;mo(l,n,t,Y,e===null?Id:function(){return vo(l),e(a)})}function ho(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:Y},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function vo(l){var t=ho(l);t.next===null&&(t=l.alternate.memoizedState),Pa(l,t.next.queue,{},it())}function uc(){return Nl(yn)}function go(){return Sl().memoizedState}function yo(){return Sl().memoizedState}function Pd(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var e=it();l=ne(e);var a=ue(t,l,e);a!==null&&(kl(a,t,e),ka(a,t,e)),t={cache:Hi()},l.payload=t;return}t=t.return}}function lm(l,t,e){var a=it();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},fu(l)?po(t,e):(e=Ei(l,t,e,a),e!==null&&(kl(e,l,a),So(e,t,a)))}function bo(l,t,e){var a=it();Pa(l,t,e,a)}function Pa(l,t,e,a){var n={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(fu(l))po(t,n);else{var u=l.alternate;if(l.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,c=u(i,e);if(n.hasEagerState=!0,n.eagerState=c,lt(c,i))return Zn(l,t,n,0),rl===null&&Qn(),!1}catch{}if(e=Ei(l,t,n,a),e!==null)return kl(e,l,a),So(e,t,a),!0}return!1}function ic(l,t,e,a){if(a={lane:2,revertLane:qc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fu(l)){if(t)throw Error(s(479))}else t=Ei(l,e,a,2),t!==null&&kl(t,l,2)}function fu(l){var t=l.alternate;return l===Z||t!==null&&t===Z}function po(l,t){da=tu=!0;var e=l.pending;e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t}function So(l,t,e){if((e&4194048)!==0){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,Tf(l,e)}}var ln={readContext:Nl,use:nu,useCallback:gl,useContext:gl,useEffect:gl,useImperativeHandle:gl,useLayoutEffect:gl,useInsertionEffect:gl,useMemo:gl,useReducer:gl,useRef:gl,useState:gl,useDebugValue:gl,useDeferredValue:gl,useTransition:gl,useSyncExternalStore:gl,useId:gl,useHostTransitionStatus:gl,useFormState:gl,useActionState:gl,useOptimistic:gl,useMemoCache:gl,useCacheRefresh:gl};ln.useEffectEvent=gl;var xo={readContext:Nl,use:nu,useCallback:function(l,t){return Yl().memoizedState=[l,t===void 0?null:t],l},useContext:Nl,useEffect:ao,useImperativeHandle:function(l,t,e){e=e!=null?e.concat([l]):null,iu(4194308,4,co.bind(null,t,l),e)},useLayoutEffect:function(l,t){return iu(4194308,4,l,t)},useInsertionEffect:function(l,t){iu(4,2,l,t)},useMemo:function(l,t){var e=Yl();t=t===void 0?null:t;var a=l();if(Ye){$t(!0);try{l()}finally{$t(!1)}}return e.memoizedState=[a,t],a},useReducer:function(l,t,e){var a=Yl();if(e!==void 0){var n=e(t);if(Ye){$t(!0);try{e(t)}finally{$t(!1)}}}else n=t;return a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:n},a.queue=l,l=l.dispatch=lm.bind(null,Z,l),[a.memoizedState,l]},useRef:function(l){var t=Yl();return l={current:l},t.memoizedState=l},useState:function(l){l=Pi(l);var t=l.queue,e=bo.bind(null,Z,t);return t.dispatch=e,[l.memoizedState,e]},useDebugValue:ec,useDeferredValue:function(l,t){var e=Yl();return ac(e,l,t)},useTransition:function(){var l=Pi(!1);return l=mo.bind(null,Z,l.queue,!0,!1),Yl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,e){var a=Z,n=Yl();if($){if(e===void 0)throw Error(s(407));e=e()}else{if(e=t(),rl===null)throw Error(s(349));(J&127)!==0||Qs(a,t,e)}n.memoizedState=e;var u={value:e,getSnapshot:t};return n.queue=u,ao(Ls.bind(null,a,u,l),[l]),a.flags|=2048,ha(9,{destroy:void 0},Zs.bind(null,a,u,e,t),null),e},useId:function(){var l=Yl(),t=rl.identifierPrefix;if($){var e=jt,a=At;e=(a&~(1<<32-Pl(a)-1)).toString(32)+e,t="_"+t+"R_"+e,e=eu++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=Jd++,t="_"+t+"r_"+e.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:uc,useFormState:Is,useActionState:Is,useOptimistic:function(l){var t=Yl();t.memoizedState=t.baseState=l;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=ic.bind(null,Z,!0,e),e.dispatch=t,[l,t]},useMemoCache:$i,useCacheRefresh:function(){return Yl().memoizedState=Pd.bind(null,Z)},useEffectEvent:function(l){var t=Yl(),e={impl:l};return t.memoizedState=e,function(){if((ll&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}},cc={readContext:Nl,use:nu,useCallback:so,useContext:Nl,useEffect:tc,useImperativeHandle:fo,useInsertionEffect:uo,useLayoutEffect:io,useMemo:oo,useReducer:uu,useRef:eo,useState:function(){return uu(Gt)},useDebugValue:ec,useDeferredValue:function(l,t){var e=Sl();return ro(e,il.memoizedState,l,t)},useTransition:function(){var l=uu(Gt)[0],t=Sl().memoizedState;return[typeof l=="boolean"?l:Ia(l),t]},useSyncExternalStore:Xs,useId:go,useHostTransitionStatus:uc,useFormState:Ps,useActionState:Ps,useOptimistic:function(l,t){var e=Sl();return Ks(e,il,l,t)},useMemoCache:$i,useCacheRefresh:yo};cc.useEffectEvent=no;var zo={readContext:Nl,use:nu,useCallback:so,useContext:Nl,useEffect:tc,useImperativeHandle:fo,useInsertionEffect:uo,useLayoutEffect:io,useMemo:oo,useReducer:Ii,useRef:eo,useState:function(){return Ii(Gt)},useDebugValue:ec,useDeferredValue:function(l,t){var e=Sl();return il===null?ac(e,l,t):ro(e,il.memoizedState,l,t)},useTransition:function(){var l=Ii(Gt)[0],t=Sl().memoizedState;return[typeof l=="boolean"?l:Ia(l),t]},useSyncExternalStore:Xs,useId:go,useHostTransitionStatus:uc,useFormState:to,useActionState:to,useOptimistic:function(l,t){var e=Sl();return il!==null?Ks(e,il,l,t):(e.baseState=l,[l,e.queue.dispatch])},useMemoCache:$i,useCacheRefresh:yo};zo.useEffectEvent=no;function fc(l,t,e,a){t=l.memoizedState,e=e(a,t),e=e==null?t:H({},t,e),l.memoizedState=e,l.lanes===0&&(l.updateQueue.baseState=e)}var sc={enqueueSetState:function(l,t,e){l=l._reactInternals;var a=it(),n=ne(a);n.payload=t,e!=null&&(n.callback=e),t=ue(l,n,a),t!==null&&(kl(t,l,a),ka(t,l,a))},enqueueReplaceState:function(l,t,e){l=l._reactInternals;var a=it(),n=ne(a);n.tag=1,n.payload=t,e!=null&&(n.callback=e),t=ue(l,n,a),t!==null&&(kl(t,l,a),ka(t,l,a))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var e=it(),a=ne(e);a.tag=2,t!=null&&(a.callback=t),t=ue(l,a,e),t!==null&&(kl(t,l,e),ka(t,l,e))}};function Eo(l,t,e,a,n,u,i){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(a,u,i):t.prototype&&t.prototype.isPureReactComponent?!Xa(e,a)||!Xa(n,u):!0}function To(l,t,e,a){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,a),t.state!==l&&sc.enqueueReplaceState(t,t.state,null)}function qe(l,t){var e=t;if("ref"in t){e={};for(var a in t)a!=="ref"&&(e[a]=t[a])}if(l=l.defaultProps){e===t&&(e=H({},e));for(var n in l)e[n]===void 0&&(e[n]=l[n])}return e}function Ao(l){Xn(l)}function jo(l){console.error(l)}function Mo(l){Xn(l)}function su(l,t){try{var e=l.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Oo(l,t,e){try{var a=l.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function oc(l,t,e){return e=ne(e),e.tag=3,e.payload={element:null},e.callback=function(){su(l,t)},e}function _o(l){return l=ne(l),l.tag=3,l}function No(l,t,e,a){var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;l.payload=function(){return n(u)},l.callback=function(){Oo(t,e,a)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(l.callback=function(){Oo(t,e,a),typeof n!="function"&&(re===null?re=new Set([this]):re.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function tm(l,t,e,a,n){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=e.alternate,t!==null&&ia(t,e,n,!0),e=et.current,e!==null){switch(e.tag){case 31:case 13:return vt===null?xu():e.alternate===null&&yl===0&&(yl=3),e.flags&=-257,e.flags|=65536,e.lanes=n,a===$n?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([a]):t.add(a),Rc(l,a,n)),!1;case 22:return e.flags|=65536,a===$n?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([a]):e.add(a)),Rc(l,a,n)),!1}throw Error(s(435,e.tag))}return Rc(l,a,n),xu(),!1}if($)return t=et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==_i&&(l=Error(s(422),{cause:a}),La(rt(l,e)))):(a!==_i&&(t=Error(s(423),{cause:a}),La(rt(t,e))),l=l.current.alternate,l.flags|=65536,n&=-n,l.lanes|=n,a=rt(a,e),n=oc(l.stateNode,a,n),Xi(l,n),yl!==4&&(yl=2)),!1;var u=Error(s(520),{cause:a});if(u=rt(u,e),sn===null?sn=[u]:sn.push(u),yl!==4&&(yl=2),t===null)return!0;a=rt(a,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,l=n&-n,e.lanes|=l,l=oc(e.stateNode,a,l),Xi(e,l),!1;case 1:if(t=e.type,u=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(re===null||!re.has(u))))return e.flags|=65536,n&=-n,e.lanes|=n,n=_o(n),No(n,l,e,a),Xi(e,n),!1}e=e.return}while(e!==null);return!1}var rc=Error(s(461)),El=!1;function Dl(l,t,e,a){t.child=l===null?Cs(t,null,e,a):Be(t,l.child,e,a)}function Do(l,t,e,a,n){e=e.render;var u=t.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return Ue(t),a=Ki(l,t,e,i,u,n),c=Ji(),l!==null&&!El?(ki(l,t,n),Xt(l,t,n)):($&&c&&Mi(t),t.flags|=1,Dl(l,t,a,n),t.child)}function Uo(l,t,e,a,n){if(l===null){var u=e.type;return typeof u=="function"&&!Ti(u)&&u.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=u,Co(l,t,u,a,n)):(l=Vn(e.type,null,a,t,t.mode,n),l.ref=t.ref,l.return=t,t.child=l)}if(u=l.child,!pc(l,n)){var i=u.memoizedProps;if(e=e.compare,e=e!==null?e:Xa,e(i,a)&&l.ref===t.ref)return Xt(l,t,n)}return t.flags|=1,l=Ht(u,a),l.ref=t.ref,l.return=t,t.child=l}function Co(l,t,e,a,n){if(l!==null){var u=l.memoizedProps;if(Xa(u,a)&&l.ref===t.ref)if(El=!1,t.pendingProps=a=u,pc(l,n))(l.flags&131072)!==0&&(El=!0);else return t.lanes=l.lanes,Xt(l,t,n)}return dc(l,t,e,a,n)}function Ho(l,t,e,a){var n=a.children,u=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|e:e,l!==null){for(a=t.child=l.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,t.child=null;return Ro(l,t,u,e,a)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&kn(t,u!==null?u.cachePool:null),u!==null?Bs(t,u):Zi(),Ys(t);else return a=t.lanes=536870912,Ro(l,t,u!==null?u.baseLanes|e:e,e,a)}else u!==null?(kn(t,u.cachePool),Bs(t,u),ce(),t.memoizedState=null):(l!==null&&kn(t,null),Zi(),ce());return Dl(l,t,n,e),t.child}function tn(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ro(l,t,e,a,n){var u=Bi();return u=u===null?null:{parent:xl._currentValue,pool:u},t.memoizedState={baseLanes:e,cachePool:u},l!==null&&kn(t,null),Zi(),Ys(t),l!==null&&ia(l,t,a,!0),t.childLanes=n,null}function ou(l,t){return t=du({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Bo(l,t,e){return Be(t,l.child,null,e),l=ou(t,t.pendingProps),l.flags|=2,at(t),t.memoizedState=null,l}function em(l,t,e){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,l===null){if($){if(a.mode==="hidden")return l=ou(t,a),t.lanes=536870912,tn(null,l);if(Vi(t),(l=dl)?(l=kr(l,ht),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:Pt!==null?{id:At,overflow:jt}:null,retryLane:536870912,hydrationErrors:null},e=bs(l),e.return=t,t.child=e,_l=t,dl=null)):l=null,l===null)throw te(t);return t.lanes=536870912,null}return ou(t,a)}var u=l.memoizedState;if(u!==null){var i=u.dehydrated;if(Vi(t),n)if(t.flags&256)t.flags&=-257,t=Bo(l,t,e);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(s(558));else if(El||ia(l,t,e,!1),n=(e&l.childLanes)!==0,El||n){if(a=rl,a!==null&&(i=Af(a,e),i!==0&&i!==u.retryLane))throw u.retryLane=i,Oe(l,i),kl(a,l,i),rc;xu(),t=Bo(l,t,e)}else l=u.treeContext,dl=gt(i.nextSibling),_l=t,$=!0,le=null,ht=!1,l!==null&&xs(t,l),t=ou(t,a),t.flags|=4096;return t}return l=Ht(l.child,{mode:a.mode,children:a.children}),l.ref=t.ref,t.child=l,l.return=t,l}function ru(l,t){var e=t.ref;if(e===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(s(284));(l===null||l.ref!==e)&&(t.flags|=4194816)}}function dc(l,t,e,a,n){return Ue(t),e=Ki(l,t,e,a,void 0,n),a=Ji(),l!==null&&!El?(ki(l,t,n),Xt(l,t,n)):($&&a&&Mi(t),t.flags|=1,Dl(l,t,e,n),t.child)}function Yo(l,t,e,a,n,u){return Ue(t),t.updateQueue=null,e=Gs(t,a,e,n),qs(l),a=Ji(),l!==null&&!El?(ki(l,t,u),Xt(l,t,u)):($&&a&&Mi(t),t.flags|=1,Dl(l,t,e,u),t.child)}function qo(l,t,e,a,n){if(Ue(t),t.stateNode===null){var u=ea,i=e.contextType;typeof i=="object"&&i!==null&&(u=Nl(i)),u=new e(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=sc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},qi(t),i=e.contextType,u.context=typeof i=="object"&&i!==null?Nl(i):ea,u.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(fc(t,e,i,a),u.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&sc.enqueueReplaceState(u,u.state,null),$a(t,a,u,n),Wa(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(l===null){u=t.stateNode;var c=t.memoizedProps,f=qe(e,c);u.props=f;var v=u.context,p=e.contextType;i=ea,typeof p=="object"&&p!==null&&(i=Nl(p));var z=e.getDerivedStateFromProps;p=typeof z=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,p||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||v!==i)&&To(t,u,a,i),ae=!1;var g=t.memoizedState;u.state=g,$a(t,a,u,n),Wa(),v=t.memoizedState,c||g!==v||ae?(typeof z=="function"&&(fc(t,e,z,a),v=t.memoizedState),(f=ae||Eo(t,e,f,a,g,v,i))?(p||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=v),u.props=a,u.state=v,u.context=i,a=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,Gi(l,t),i=t.memoizedProps,p=qe(e,i),u.props=p,z=t.pendingProps,g=u.context,v=e.contextType,f=ea,typeof v=="object"&&v!==null&&(f=Nl(v)),c=e.getDerivedStateFromProps,(v=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==z||g!==f)&&To(t,u,a,f),ae=!1,g=t.memoizedState,u.state=g,$a(t,a,u,n),Wa();var b=t.memoizedState;i!==z||g!==b||ae||l!==null&&l.dependencies!==null&&Kn(l.dependencies)?(typeof c=="function"&&(fc(t,e,c,a),b=t.memoizedState),(p=ae||Eo(t,e,p,a,g,b,f)||l!==null&&l.dependencies!==null&&Kn(l.dependencies))?(v||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,b,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,b,f)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===l.memoizedProps&&g===l.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&g===l.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=b),u.props=a,u.state=b,u.context=f,a=p):(typeof u.componentDidUpdate!="function"||i===l.memoizedProps&&g===l.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&g===l.memoizedState||(t.flags|=1024),a=!1)}return u=a,ru(l,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,l!==null&&a?(t.child=Be(t,l.child,null,n),t.child=Be(t,null,e,n)):Dl(l,t,e,n),t.memoizedState=u.state,l=t.child):l=Xt(l,t,n),l}function Go(l,t,e,a){return Ne(),t.flags|=256,Dl(l,t,e,a),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(l){return{baseLanes:l,cachePool:Ms()}}function vc(l,t,e){return l=l!==null?l.childLanes&~e:0,t&&(l|=ut),l}function Xo(l,t,e){var a=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=l!==null&&l.memoizedState===null?!1:(pl.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,l===null){if($){if(n?ie(t):ce(),(l=dl)?(l=kr(l,ht),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:Pt!==null?{id:At,overflow:jt}:null,retryLane:536870912,hydrationErrors:null},e=bs(l),e.return=t,t.child=e,_l=t,dl=null)):l=null,l===null)throw te(t);return Fc(l)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(ce(),n=t.mode,c=du({mode:"hidden",children:c},n),a=_e(a,n,e,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=hc(e),a.childLanes=vc(l,i,e),t.memoizedState=mc,tn(null,a)):(ie(t),gc(t,c))}var f=l.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(u)t.flags&256?(ie(t),t.flags&=-257,t=yc(l,t,e)):t.memoizedState!==null?(ce(),t.child=l.child,t.flags|=128,t=null):(ce(),c=a.fallback,n=t.mode,a=du({mode:"visible",children:a.children},n),c=_e(c,n,e,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,Be(t,l.child,null,e),a=t.child,a.memoizedState=hc(e),a.childLanes=vc(l,i,e),t.memoizedState=mc,t=tn(null,a));else if(ie(t),Fc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var v=i.dgst;i=v,a=Error(s(419)),a.stack="",a.digest=i,La({value:a,source:null,stack:null}),t=yc(l,t,e)}else if(El||ia(l,t,e,!1),i=(e&l.childLanes)!==0,El||i){if(i=rl,i!==null&&(a=Af(i,e),a!==0&&a!==f.retryLane))throw f.retryLane=a,Oe(l,a),kl(i,l,a),rc;$c(c)||xu(),t=yc(l,t,e)}else $c(c)?(t.flags|=192,t.child=l.child,t=null):(l=f.treeContext,dl=gt(c.nextSibling),_l=t,$=!0,le=null,ht=!1,l!==null&&xs(t,l),t=gc(t,a.children),t.flags|=4096);return t}return n?(ce(),c=a.fallback,n=t.mode,f=l.child,v=f.sibling,a=Ht(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,v!==null?c=Ht(v,c):(c=_e(c,n,e,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,tn(null,a),a=t.child,c=l.child.memoizedState,c===null?c=hc(e):(n=c.cachePool,n!==null?(f=xl._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=Ms(),c={baseLanes:c.baseLanes|e,cachePool:n}),a.memoizedState=c,a.childLanes=vc(l,i,e),t.memoizedState=mc,tn(l.child,a)):(ie(t),e=l.child,l=e.sibling,e=Ht(e,{mode:"visible",children:a.children}),e.return=t,e.sibling=null,l!==null&&(i=t.deletions,i===null?(t.deletions=[l],t.flags|=16):i.push(l)),t.child=e,t.memoizedState=null,e)}function gc(l,t){return t=du({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function du(l,t){return l=tt(22,l,null,t),l.lanes=0,l}function yc(l,t,e){return Be(t,l.child,null,e),l=gc(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function Qo(l,t,e){l.lanes|=t;var a=l.alternate;a!==null&&(a.lanes|=t),Ui(l.return,t,e)}function bc(l,t,e,a,n,u){var i=l.memoizedState;i===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:n,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=e,i.tailMode=n,i.treeForkCount=u)}function Zo(l,t,e){var a=t.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=pl.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,O(pl,i),Dl(l,t,a,e),a=$?Za:0,!c&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Qo(l,e,t);else if(l.tag===19)Qo(l,e,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(n){case"forwards":for(e=t.child,n=null;e!==null;)l=e.alternate,l!==null&&lu(l)===null&&(n=e),e=e.sibling;e=n,e===null?(n=t.child,t.child=null):(n=e.sibling,e.sibling=null),bc(t,!1,n,e,u,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,n=t.child,t.child=null;n!==null;){if(l=n.alternate,l!==null&&lu(l)===null){t.child=n;break}l=n.sibling,n.sibling=e,e=n,n=l}bc(t,!0,e,null,u,a);break;case"together":bc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Xt(l,t,e){if(l!==null&&(t.dependencies=l.dependencies),oe|=t.lanes,(e&t.childLanes)===0)if(l!==null){if(ia(l,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(s(153));if(t.child!==null){for(l=t.child,e=Ht(l,l.pendingProps),t.child=e,e.return=t;l.sibling!==null;)l=l.sibling,e=e.sibling=Ht(l,l.pendingProps),e.return=t;e.sibling=null}return t.child}function pc(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Kn(l)))}function am(l,t,e){switch(t.tag){case 3:Bl(t,t.stateNode.containerInfo),ee(t,xl,l.memoizedState.cache),Ne();break;case 27:case 5:Ma(t);break;case 4:Bl(t,t.stateNode.containerInfo);break;case 10:ee(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Vi(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ie(t),t.flags|=128,null):(e&t.child.childLanes)!==0?Xo(l,t,e):(ie(t),l=Xt(l,t,e),l!==null?l.sibling:null);ie(t);break;case 19:var n=(l.flags&128)!==0;if(a=(e&t.childLanes)!==0,a||(ia(l,t,e,!1),a=(e&t.childLanes)!==0),n){if(a)return Zo(l,t,e);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),O(pl,pl.current),a)break;return null;case 22:return t.lanes=0,Ho(l,t,e,t.pendingProps);case 24:ee(t,xl,l.memoizedState.cache)}return Xt(l,t,e)}function Lo(l,t,e){if(l!==null)if(l.memoizedProps!==t.pendingProps)El=!0;else{if(!pc(l,e)&&(t.flags&128)===0)return El=!1,am(l,t,e);El=(l.flags&131072)!==0}else El=!1,$&&(t.flags&1048576)!==0&&Ss(t,Za,t.index);switch(t.lanes=0,t.tag){case 16:l:{var a=t.pendingProps;if(l=He(t.elementType),t.type=l,typeof l=="function")Ti(l)?(a=qe(l,a),t.tag=1,t=qo(null,t,l,a,e)):(t.tag=0,t=dc(null,t,l,a,e));else{if(l!=null){var n=l.$$typeof;if(n===ct){t.tag=11,t=Do(null,t,l,a,e);break l}else if(n===W){t.tag=14,t=Uo(null,t,l,a,e);break l}}throw t=Nt(l)||l,Error(s(306,t,""))}}return t;case 0:return dc(l,t,t.type,t.pendingProps,e);case 1:return a=t.type,n=qe(a,t.pendingProps),qo(l,t,a,n,e);case 3:l:{if(Bl(t,t.stateNode.containerInfo),l===null)throw Error(s(387));a=t.pendingProps;var u=t.memoizedState;n=u.element,Gi(l,t),$a(t,a,null,e);var i=t.memoizedState;if(a=i.cache,ee(t,xl,a),a!==u.cache&&Ci(t,[xl],e,!0),Wa(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Go(l,t,a,e);break l}else if(a!==n){n=rt(Error(s(424)),t),La(n),t=Go(l,t,a,e);break l}else for(l=t.stateNode.containerInfo,l.nodeType===9?l=l.body:l=l.nodeName==="HTML"?l.ownerDocument.body:l,dl=gt(l.firstChild),_l=t,$=!0,le=null,ht=!0,e=Cs(t,null,a,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Ne(),a===n){t=Xt(l,t,e);break l}Dl(l,t,a,e)}t=t.child}return t;case 26:return ru(l,t),l===null?(e=l0(t.type,null,t.pendingProps,null))?t.memoizedState=e:$||(e=t.type,l=t.pendingProps,a=Ou(V.current).createElement(e),a[Ol]=t,a[Zl]=l,Ul(a,e,l),jl(a),t.stateNode=a):t.memoizedState=l0(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Ma(t),l===null&&$&&(a=t.stateNode=Fr(t.type,t.pendingProps,V.current),_l=t,ht=!0,n=dl,ve(t.type)?(Ic=n,dl=gt(a.firstChild)):dl=n),Dl(l,t,t.pendingProps.children,e),ru(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&$&&((n=a=dl)&&(a=Cm(a,t.type,t.pendingProps,ht),a!==null?(t.stateNode=a,_l=t,dl=gt(a.firstChild),ht=!1,n=!0):n=!1),n||te(t)),Ma(t),n=t.type,u=t.pendingProps,i=l!==null?l.memoizedProps:null,a=u.children,Jc(n,u)?a=null:i!==null&&Jc(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Ki(l,t,kd,null,null,e),yn._currentValue=n),ru(l,t),Dl(l,t,a,e),t.child;case 6:return l===null&&$&&((l=e=dl)&&(e=Hm(e,t.pendingProps,ht),e!==null?(t.stateNode=e,_l=t,dl=null,l=!0):l=!1),l||te(t)),null;case 13:return Xo(l,t,e);case 4:return Bl(t,t.stateNode.containerInfo),a=t.pendingProps,l===null?t.child=Be(t,null,a,e):Dl(l,t,a,e),t.child;case 11:return Do(l,t,t.type,t.pendingProps,e);case 7:return Dl(l,t,t.pendingProps,e),t.child;case 8:return Dl(l,t,t.pendingProps.children,e),t.child;case 12:return Dl(l,t,t.pendingProps.children,e),t.child;case 10:return a=t.pendingProps,ee(t,t.type,a.value),Dl(l,t,a.children,e),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Ue(t),n=Nl(n),a=a(n),t.flags|=1,Dl(l,t,a,e),t.child;case 14:return Uo(l,t,t.type,t.pendingProps,e);case 15:return Co(l,t,t.type,t.pendingProps,e);case 19:return Zo(l,t,e);case 31:return em(l,t,e);case 22:return Ho(l,t,e,t.pendingProps);case 24:return Ue(t),a=Nl(xl),l===null?(n=Bi(),n===null&&(n=rl,u=Hi(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=e),n=u),t.memoizedState={parent:a,cache:n},qi(t),ee(t,xl,n)):((l.lanes&e)!==0&&(Gi(l,t),$a(t,null,null,e),Wa()),n=l.memoizedState,u=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ee(t,xl,a)):(a=u.cache,ee(t,xl,a),a!==n.cache&&Ci(t,[xl],e,!0))),Dl(l,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Qt(l){l.flags|=4}function Sc(l,t,e,a,n){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(n&335544128)===n)if(l.stateNode.complete)l.flags|=8192;else if(gr())l.flags|=8192;else throw Re=$n,Yi}else l.flags&=-16777217}function Vo(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!u0(t))if(gr())l.flags|=8192;else throw Re=$n,Yi}function mu(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?zf():536870912,l.lanes|=t,ba|=t)}function en(l,t){if(!$)switch(l.tailMode){case"hidden":t=l.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?l.tail=null:e.sibling=null;break;case"collapsed":e=l.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:a.sibling=null}}function ml(l){var t=l.alternate!==null&&l.alternate.child===l.child,e=0,a=0;if(t)for(var n=l.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=l,n=n.sibling;else for(n=l.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=l,n=n.sibling;return l.subtreeFlags|=a,l.childLanes=e,t}function nm(l,t,e){var a=t.pendingProps;switch(Oi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ml(t),null;case 1:return ml(t),null;case 3:return e=t.stateNode,a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Yt(xl),bl(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(l===null||l.child===null)&&(ua(t)?Qt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ni())),ml(t),null;case 26:var n=t.type,u=t.memoizedState;return l===null?(Qt(t),u!==null?(ml(t),Vo(t,u)):(ml(t),Sc(t,n,null,a,e))):u?u!==l.memoizedState?(Qt(t),ml(t),Vo(t,u)):(ml(t),t.flags&=-16777217):(l=l.memoizedProps,l!==a&&Qt(t),ml(t),Sc(t,n,l,a,e)),null;case 27:if(Tn(t),e=V.current,n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&Qt(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return ml(t),null}l=U.current,ua(t)?zs(t):(l=Fr(n,a,e),t.stateNode=l,Qt(t))}return ml(t),null;case 5:if(Tn(t),n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&Qt(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return ml(t),null}if(u=U.current,ua(t))zs(t);else{var i=Ou(V.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[Ol]=t,u[Zl]=a;l:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break l;for(;i.sibling===null;){if(i.return===null||i.return===t)break l;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;l:switch(Ul(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break l;case"img":a=!0;break l;default:a=!1}a&&Qt(t)}}return ml(t),Sc(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,e),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==a&&Qt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(l=V.current,ua(t)){if(l=t.stateNode,e=t.memoizedProps,a=null,n=_l,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}l[Ol]=t,l=!!(l.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Xr(l.nodeValue,e)),l||te(t,!0)}else l=Ou(l).createTextNode(a),l[Ol]=t,t.stateNode=l}return ml(t),null;case 31:if(e=t.memoizedState,l===null||l.memoizedState!==null){if(a=ua(t),e!==null){if(l===null){if(!a)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(557));l[Ol]=t}else Ne(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),l=!1}else e=Ni(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=e),l=!0;if(!l)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(s(558))}return ml(t),null;case 13:if(a=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(n=ua(t),a!==null&&a.dehydrated!==null){if(l===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[Ol]=t}else Ne(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),n=!1}else n=Ni(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=e,t):(e=a!==null,l=l!==null&&l.memoizedState!==null,e&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),e!==l&&e&&(t.child.flags|=8192),mu(t,t.updateQueue),ml(t),null);case 4:return bl(),l===null&&Zc(t.stateNode.containerInfo),ml(t),null;case 10:return Yt(t.type),ml(t),null;case 19:if(E(pl),a=t.memoizedState,a===null)return ml(t),null;if(n=(t.flags&128)!==0,u=a.rendering,u===null)if(n)en(a,!1);else{if(yl!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(u=lu(l),u!==null){for(t.flags|=128,en(a,!1),l=u.updateQueue,t.updateQueue=l,mu(t,l),t.subtreeFlags=0,l=e,e=t.child;e!==null;)ys(e,l),e=e.sibling;return O(pl,pl.current&1|2),$&&Rt(t,a.treeForkCount),t.child}l=l.sibling}a.tail!==null&&Fl()>bu&&(t.flags|=128,n=!0,en(a,!1),t.lanes=4194304)}else{if(!n)if(l=lu(u),l!==null){if(t.flags|=128,n=!0,l=l.updateQueue,t.updateQueue=l,mu(t,l),en(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!$)return ml(t),null}else 2*Fl()-a.renderingStartTime>bu&&e!==536870912&&(t.flags|=128,n=!0,en(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(l=a.last,l!==null?l.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(l=a.tail,a.rendering=l,a.tail=l.sibling,a.renderingStartTime=Fl(),l.sibling=null,e=pl.current,O(pl,n?e&1|2:e&1),$&&Rt(t,a.treeForkCount),l):(ml(t),null);case 22:case 23:return at(t),Li(),a=t.memoizedState!==null,l!==null?l.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(e&536870912)!==0&&(t.flags&128)===0&&(ml(t),t.subtreeFlags&6&&(t.flags|=8192)):ml(t),e=t.updateQueue,e!==null&&mu(t,e.retryQueue),e=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(t.flags|=2048),l!==null&&E(Ce),null;case 24:return e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Yt(xl),ml(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function um(l,t){switch(Oi(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Yt(xl),bl(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return Tn(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(s(340));Ne()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(at(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ne()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return E(pl),null;case 4:return bl(),null;case 10:return Yt(t.type),null;case 22:case 23:return at(t),Li(),l!==null&&E(Ce),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Yt(xl),null;case 25:return null;default:return null}}function wo(l,t){switch(Oi(t),t.tag){case 3:Yt(xl),bl();break;case 26:case 27:case 5:Tn(t);break;case 4:bl();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:E(pl);break;case 10:Yt(t.type);break;case 22:case 23:at(t),Li(),l!==null&&E(Ce);break;case 24:Yt(xl)}}function an(l,t){try{var e=t.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var n=a.next;e=n;do{if((e.tag&l)===l){a=void 0;var u=e.create,i=e.inst;a=u(),i.destroy=a}e=e.next}while(e!==n)}}catch(c){al(t,t.return,c)}}function fe(l,t,e){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&l)===l){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=t;var f=e,v=c;try{v()}catch(p){al(n,f,p)}}}a=a.next}while(a!==u)}}catch(p){al(t,t.return,p)}}function Ko(l){var t=l.updateQueue;if(t!==null){var e=l.stateNode;try{Rs(t,e)}catch(a){al(l,l.return,a)}}}function Jo(l,t,e){e.props=qe(l.type,l.memoizedProps),e.state=l.memoizedState;try{e.componentWillUnmount()}catch(a){al(l,t,a)}}function nn(l,t){try{var e=l.ref;if(e!==null){switch(l.tag){case 26:case 27:case 5:var a=l.stateNode;break;case 30:a=l.stateNode;break;default:a=l.stateNode}typeof e=="function"?l.refCleanup=e(a):e.current=a}}catch(n){al(l,t,n)}}function Mt(l,t){var e=l.ref,a=l.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(n){al(l,t,n)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(n){al(l,t,n)}else e.current=null}function ko(l){var t=l.type,e=l.memoizedProps,a=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break l;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(n){al(l,l.return,n)}}function xc(l,t,e){try{var a=l.stateNode;Mm(a,l.type,e,t),a[Zl]=t}catch(n){al(l,l.return,n)}}function Wo(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&ve(l.type)||l.tag===4}function zc(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||Wo(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&ve(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function Ec(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(l),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Ut));else if(a!==4&&(a===27&&ve(l.type)&&(e=l.stateNode,t=null),l=l.child,l!==null))for(Ec(l,t,e),l=l.sibling;l!==null;)Ec(l,t,e),l=l.sibling}function hu(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?e.insertBefore(l,t):e.appendChild(l);else if(a!==4&&(a===27&&ve(l.type)&&(e=l.stateNode),l=l.child,l!==null))for(hu(l,t,e),l=l.sibling;l!==null;)hu(l,t,e),l=l.sibling}function $o(l){var t=l.stateNode,e=l.memoizedProps;try{for(var a=l.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ul(t,a,e),t[Ol]=l,t[Zl]=e}catch(u){al(l,l.return,u)}}var Zt=!1,Tl=!1,Tc=!1,Fo=typeof WeakSet=="function"?WeakSet:Set,Ml=null;function im(l,t){if(l=l.containerInfo,wc=Ru,l=fs(l),yi(l)){if("selectionStart"in l)var e={start:l.selectionStart,end:l.selectionEnd};else l:{e=(e=l.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{e.nodeType,u.nodeType}catch{e=null;break l}var i=0,c=-1,f=-1,v=0,p=0,z=l,g=null;t:for(;;){for(var b;z!==e||n!==0&&z.nodeType!==3||(c=i+n),z!==u||a!==0&&z.nodeType!==3||(f=i+a),z.nodeType===3&&(i+=z.nodeValue.length),(b=z.firstChild)!==null;)g=z,z=b;for(;;){if(z===l)break t;if(g===e&&++v===n&&(c=i),g===u&&++p===a&&(f=i),(b=z.nextSibling)!==null)break;z=g,g=z.parentNode}z=b}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(Kc={focusedElem:l,selectionRange:e},Ru=!1,Ml=t;Ml!==null;)if(t=Ml,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,Ml=l;else for(;Ml!==null;){switch(t=Ml,u=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(e=0;e<l.length;e++)n=l[e],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&u!==null){l=void 0,e=t,n=u.memoizedProps,u=u.memoizedState,a=e.stateNode;try{var N=qe(e.type,n);l=a.getSnapshotBeforeUpdate(N,u),a.__reactInternalSnapshotBeforeUpdate=l}catch(B){al(e,e.return,B)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,e=l.nodeType,e===9)Wc(l);else if(e===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Wc(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(s(163))}if(l=t.sibling,l!==null){l.return=t.return,Ml=l;break}Ml=t.return}}function Io(l,t,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Vt(l,e),a&4&&an(5,e);break;case 1:if(Vt(l,e),a&4)if(l=e.stateNode,t===null)try{l.componentDidMount()}catch(i){al(e,e.return,i)}else{var n=qe(e.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(n,t,l.__reactInternalSnapshotBeforeUpdate)}catch(i){al(e,e.return,i)}}a&64&&Ko(e),a&512&&nn(e,e.return);break;case 3:if(Vt(l,e),a&64&&(l=e.updateQueue,l!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{Rs(l,t)}catch(i){al(e,e.return,i)}}break;case 27:t===null&&a&4&&$o(e);case 26:case 5:Vt(l,e),t===null&&a&4&&ko(e),a&512&&nn(e,e.return);break;case 12:Vt(l,e);break;case 31:Vt(l,e),a&4&&tr(l,e);break;case 13:Vt(l,e),a&4&&er(l,e),a&64&&(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(e=vm.bind(null,e),Rm(l,e))));break;case 22:if(a=e.memoizedState!==null||Zt,!a){t=t!==null&&t.memoizedState!==null||Tl,n=Zt;var u=Tl;Zt=a,(Tl=t)&&!u?wt(l,e,(e.subtreeFlags&8772)!==0):Vt(l,e),Zt=n,Tl=u}break;case 30:break;default:Vt(l,e)}}function Po(l){var t=l.alternate;t!==null&&(l.alternate=null,Po(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&li(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var vl=null,Vl=!1;function Lt(l,t,e){for(e=e.child;e!==null;)lr(l,t,e),e=e.sibling}function lr(l,t,e){if(Il&&typeof Il.onCommitFiberUnmount=="function")try{Il.onCommitFiberUnmount(Oa,e)}catch{}switch(e.tag){case 26:Tl||Mt(e,t),Lt(l,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Tl||Mt(e,t);var a=vl,n=Vl;ve(e.type)&&(vl=e.stateNode,Vl=!1),Lt(l,t,e),hn(e.stateNode),vl=a,Vl=n;break;case 5:Tl||Mt(e,t);case 6:if(a=vl,n=Vl,vl=null,Lt(l,t,e),vl=a,Vl=n,vl!==null)if(Vl)try{(vl.nodeType===9?vl.body:vl.nodeName==="HTML"?vl.ownerDocument.body:vl).removeChild(e.stateNode)}catch(u){al(e,t,u)}else try{vl.removeChild(e.stateNode)}catch(u){al(e,t,u)}break;case 18:vl!==null&&(Vl?(l=vl,Kr(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.stateNode),ja(l)):Kr(vl,e.stateNode));break;case 4:a=vl,n=Vl,vl=e.stateNode.containerInfo,Vl=!0,Lt(l,t,e),vl=a,Vl=n;break;case 0:case 11:case 14:case 15:fe(2,e,t),Tl||fe(4,e,t),Lt(l,t,e);break;case 1:Tl||(Mt(e,t),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Jo(e,t,a)),Lt(l,t,e);break;case 21:Lt(l,t,e);break;case 22:Tl=(a=Tl)||e.memoizedState!==null,Lt(l,t,e),Tl=a;break;default:Lt(l,t,e)}}function tr(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{ja(l)}catch(e){al(t,t.return,e)}}}function er(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{ja(l)}catch(e){al(t,t.return,e)}}function cm(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Fo),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Fo),t;default:throw Error(s(435,l.tag))}}function vu(l,t){var e=cm(l);t.forEach(function(a){if(!e.has(a)){e.add(a);var n=gm.bind(null,l,a);a.then(n,n)}})}function wl(l,t){var e=t.deletions;if(e!==null)for(var a=0;a<e.length;a++){var n=e[a],u=l,i=t,c=i;l:for(;c!==null;){switch(c.tag){case 27:if(ve(c.type)){vl=c.stateNode,Vl=!1;break l}break;case 5:vl=c.stateNode,Vl=!1;break l;case 3:case 4:vl=c.stateNode.containerInfo,Vl=!0;break l}c=c.return}if(vl===null)throw Error(s(160));lr(u,i,n),vl=null,Vl=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ar(t,l),t=t.sibling}var St=null;function ar(l,t){var e=l.alternate,a=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:wl(t,l),Kl(l),a&4&&(fe(3,l,l.return),an(3,l),fe(5,l,l.return));break;case 1:wl(t,l),Kl(l),a&512&&(Tl||e===null||Mt(e,e.return)),a&64&&Zt&&(l=l.updateQueue,l!==null&&(a=l.callbacks,a!==null&&(e=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var n=St;if(wl(t,l),Kl(l),a&512&&(Tl||e===null||Mt(e,e.return)),a&4){var u=e!==null?e.memoizedState:null;if(a=l.memoizedState,e===null)if(a===null)if(l.stateNode===null){l:{a=l.type,e=l.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Da]||u[Ol]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),Ul(u,a,e),u[Ol]=l,jl(u),a=u;break l;case"link":var i=a0("link","href",n).get(a+(e.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&u.getAttribute("rel")===(e.rel==null?null:e.rel)&&u.getAttribute("title")===(e.title==null?null:e.title)&&u.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(c,1);break t}}u=n.createElement(a),Ul(u,a,e),n.head.appendChild(u);break;case"meta":if(i=a0("meta","content",n).get(a+(e.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(e.content==null?null:""+e.content)&&u.getAttribute("name")===(e.name==null?null:e.name)&&u.getAttribute("property")===(e.property==null?null:e.property)&&u.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&u.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(c,1);break t}}u=n.createElement(a),Ul(u,a,e),n.head.appendChild(u);break;default:throw Error(s(468,a))}u[Ol]=l,jl(u),a=u}l.stateNode=a}else n0(n,l.type,l.stateNode);else l.stateNode=e0(n,a,l.memoizedProps);else u!==a?(u===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):u.count--,a===null?n0(n,l.type,l.stateNode):e0(n,a,l.memoizedProps)):a===null&&l.stateNode!==null&&xc(l,l.memoizedProps,e.memoizedProps)}break;case 27:wl(t,l),Kl(l),a&512&&(Tl||e===null||Mt(e,e.return)),e!==null&&a&4&&xc(l,l.memoizedProps,e.memoizedProps);break;case 5:if(wl(t,l),Kl(l),a&512&&(Tl||e===null||Mt(e,e.return)),l.flags&32){n=l.stateNode;try{We(n,"")}catch(N){al(l,l.return,N)}}a&4&&l.stateNode!=null&&(n=l.memoizedProps,xc(l,n,e!==null?e.memoizedProps:n)),a&1024&&(Tc=!0);break;case 6:if(wl(t,l),Kl(l),a&4){if(l.stateNode===null)throw Error(s(162));a=l.memoizedProps,e=l.stateNode;try{e.nodeValue=a}catch(N){al(l,l.return,N)}}break;case 3:if(Du=null,n=St,St=_u(t.containerInfo),wl(t,l),St=n,Kl(l),a&4&&e!==null&&e.memoizedState.isDehydrated)try{ja(t.containerInfo)}catch(N){al(l,l.return,N)}Tc&&(Tc=!1,nr(l));break;case 4:a=St,St=_u(l.stateNode.containerInfo),wl(t,l),Kl(l),St=a;break;case 12:wl(t,l),Kl(l);break;case 31:wl(t,l),Kl(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,vu(l,a)));break;case 13:wl(t,l),Kl(l),l.child.flags&8192&&l.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(yu=Fl()),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,vu(l,a)));break;case 22:n=l.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,v=Zt,p=Tl;if(Zt=v||n,Tl=p||f,wl(t,l),Tl=p,Zt=v,Kl(l),a&8192)l:for(t=l.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(e===null||f||Zt||Tl||Ge(l)),e=null,t=l;;){if(t.tag===5||t.tag===26){if(e===null){f=e=t;try{if(u=f.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var z=f.memoizedProps.style,g=z!=null&&z.hasOwnProperty("display")?z.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(N){al(f,f.return,N)}}}else if(t.tag===6){if(e===null){f=t;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(N){al(f,f.return,N)}}}else if(t.tag===18){if(e===null){f=t;try{var b=f.stateNode;n?Jr(b,!0):Jr(f.stateNode,!1)}catch(N){al(f,f.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=l.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,vu(l,e))));break;case 19:wl(t,l),Kl(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,vu(l,a)));break;case 30:break;case 21:break;default:wl(t,l),Kl(l)}}function Kl(l){var t=l.flags;if(t&2){try{for(var e,a=l.return;a!==null;){if(Wo(a)){e=a;break}a=a.return}if(e==null)throw Error(s(160));switch(e.tag){case 27:var n=e.stateNode,u=zc(l);hu(l,u,n);break;case 5:var i=e.stateNode;e.flags&32&&(We(i,""),e.flags&=-33);var c=zc(l);hu(l,c,i);break;case 3:case 4:var f=e.stateNode.containerInfo,v=zc(l);Ec(l,v,f);break;default:throw Error(s(161))}}catch(p){al(l,l.return,p)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function nr(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;nr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Vt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Io(l,t.alternate,t),t=t.sibling}function Ge(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:fe(4,t,t.return),Ge(t);break;case 1:Mt(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&Jo(t,t.return,e),Ge(t);break;case 27:hn(t.stateNode);case 26:case 5:Mt(t,t.return),Ge(t);break;case 22:t.memoizedState===null&&Ge(t);break;case 30:Ge(t);break;default:Ge(t)}l=l.sibling}}function wt(l,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=l,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:wt(n,u,e),an(4,u);break;case 1:if(wt(n,u,e),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(v){al(a,a.return,v)}if(a=u,n=a.updateQueue,n!==null){var c=a.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)Hs(f[n],c)}catch(v){al(a,a.return,v)}}e&&i&64&&Ko(u),nn(u,u.return);break;case 27:$o(u);case 26:case 5:wt(n,u,e),e&&a===null&&i&4&&ko(u),nn(u,u.return);break;case 12:wt(n,u,e);break;case 31:wt(n,u,e),e&&i&4&&tr(n,u);break;case 13:wt(n,u,e),e&&i&4&&er(n,u);break;case 22:u.memoizedState===null&&wt(n,u,e),nn(u,u.return);break;case 30:break;default:wt(n,u,e)}t=t.sibling}}function Ac(l,t){var e=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(l!=null&&l.refCount++,e!=null&&Va(e))}function jc(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Va(l))}function xt(l,t,e,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ur(l,t,e,a),t=t.sibling}function ur(l,t,e,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:xt(l,t,e,a),n&2048&&an(9,t);break;case 1:xt(l,t,e,a);break;case 3:xt(l,t,e,a),n&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Va(l)));break;case 12:if(n&2048){xt(l,t,e,a),l=t.stateNode;try{var u=t.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(f){al(t,t.return,f)}}else xt(l,t,e,a);break;case 31:xt(l,t,e,a);break;case 13:xt(l,t,e,a);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?xt(l,t,e,a):un(l,t):u._visibility&2?xt(l,t,e,a):(u._visibility|=2,va(l,t,e,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ac(i,t);break;case 24:xt(l,t,e,a),n&2048&&jc(t.alternate,t);break;default:xt(l,t,e,a)}}function va(l,t,e,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=l,i=t,c=e,f=a,v=i.flags;switch(i.tag){case 0:case 11:case 15:va(u,i,c,f,n),an(8,i);break;case 23:break;case 22:var p=i.stateNode;i.memoizedState!==null?p._visibility&2?va(u,i,c,f,n):un(u,i):(p._visibility|=2,va(u,i,c,f,n)),n&&v&2048&&Ac(i.alternate,i);break;case 24:va(u,i,c,f,n),n&&v&2048&&jc(i.alternate,i);break;default:va(u,i,c,f,n)}t=t.sibling}}function un(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=l,a=t,n=a.flags;switch(a.tag){case 22:un(e,a),n&2048&&Ac(a.alternate,a);break;case 24:un(e,a),n&2048&&jc(a.alternate,a);break;default:un(e,a)}t=t.sibling}}var cn=8192;function ga(l,t,e){if(l.subtreeFlags&cn)for(l=l.child;l!==null;)ir(l,t,e),l=l.sibling}function ir(l,t,e){switch(l.tag){case 26:ga(l,t,e),l.flags&cn&&l.memoizedState!==null&&Jm(e,St,l.memoizedState,l.memoizedProps);break;case 5:ga(l,t,e);break;case 3:case 4:var a=St;St=_u(l.stateNode.containerInfo),ga(l,t,e),St=a;break;case 22:l.memoizedState===null&&(a=l.alternate,a!==null&&a.memoizedState!==null?(a=cn,cn=16777216,ga(l,t,e),cn=a):ga(l,t,e));break;default:ga(l,t,e)}}function cr(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function fn(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Ml=a,sr(a,l)}cr(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)fr(l),l=l.sibling}function fr(l){switch(l.tag){case 0:case 11:case 15:fn(l),l.flags&2048&&fe(9,l,l.return);break;case 3:fn(l);break;case 12:fn(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,gu(l)):fn(l);break;default:fn(l)}}function gu(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Ml=a,sr(a,l)}cr(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:fe(8,t,t.return),gu(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,gu(t));break;default:gu(t)}l=l.sibling}}function sr(l,t){for(;Ml!==null;){var e=Ml;switch(e.tag){case 0:case 11:case 15:fe(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Ml=a;else l:for(e=l;Ml!==null;){a=Ml;var n=a.sibling,u=a.return;if(Po(a),a===e){Ml=null;break l}if(n!==null){n.return=u,Ml=n;break l}Ml=u}}}var fm={getCacheForType:function(l){var t=Nl(xl),e=t.data.get(l);return e===void 0&&(e=l(),t.data.set(l,e)),e},cacheSignal:function(){return Nl(xl).controller.signal}},sm=typeof WeakMap=="function"?WeakMap:Map,ll=0,rl=null,w=null,J=0,el=0,nt=null,se=!1,ya=!1,Mc=!1,Kt=0,yl=0,oe=0,Xe=0,Oc=0,ut=0,ba=0,sn=null,Jl=null,_c=!1,yu=0,or=0,bu=1/0,pu=null,re=null,Al=0,de=null,pa=null,Jt=0,Nc=0,Dc=null,rr=null,on=0,Uc=null;function it(){return(ll&2)!==0&&J!==0?J&-J:S.T!==null?qc():jf()}function dr(){if(ut===0)if((J&536870912)===0||$){var l=Mn;Mn<<=1,(Mn&3932160)===0&&(Mn=262144),ut=l}else ut=536870912;return l=et.current,l!==null&&(l.flags|=32),ut}function kl(l,t,e){(l===rl&&(el===2||el===9)||l.cancelPendingCommit!==null)&&(Sa(l,0),me(l,J,ut,!1)),Na(l,e),((ll&2)===0||l!==rl)&&(l===rl&&((ll&2)===0&&(Xe|=e),yl===4&&me(l,J,ut,!1)),Ot(l))}function mr(l,t,e){if((ll&6)!==0)throw Error(s(327));var a=!e&&(t&127)===0&&(t&l.expiredLanes)===0||_a(l,t),n=a?dm(l,t):Hc(l,t,!0),u=a;do{if(n===0){ya&&!a&&me(l,t,0,!1);break}else{if(e=l.current.alternate,u&&!om(e)){n=Hc(l,t,!1),u=!1;continue}if(n===2){if(u=t,l.errorRecoveryDisabledLanes&u)var i=0;else i=l.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;l:{var c=l;n=sn;var f=c.current.memoizedState.isDehydrated;if(f&&(Sa(c,i).flags|=256),i=Hc(c,i,!1),i!==2){if(Mc&&!f){c.errorRecoveryDisabledLanes|=u,Xe|=u,n=4;break l}u=Jl,Jl=n,u!==null&&(Jl===null?Jl=u:Jl.push.apply(Jl,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){Sa(l,0),me(l,t,0,!0);break}l:{switch(a=l,u=n,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:me(a,t,ut,!se);break l;case 2:Jl=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=yu+300-Fl(),10<n)){if(me(a,t,ut,!se),_n(a,0,!0)!==0)break l;Jt=t,a.timeoutHandle=Vr(hr.bind(null,a,e,Jl,pu,_c,t,ut,Xe,ba,se,u,"Throttled",-0,0),n);break l}hr(a,e,Jl,pu,_c,t,ut,Xe,ba,se,u,null,-0,0)}}break}while(!0);Ot(l)}function hr(l,t,e,a,n,u,i,c,f,v,p,z,g,b){if(l.timeoutHandle=-1,z=t.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},ir(t,u,z);var N=(u&62914560)===u?yu-Fl():(u&4194048)===u?or-Fl():0;if(N=km(z,N),N!==null){Jt=u,l.cancelPendingCommit=N(zr.bind(null,l,t,u,e,a,n,i,c,f,p,z,null,g,b)),me(l,u,i,!v);return}}zr(l,t,u,e,a,n,i,c,f)}function om(l){for(var t=l;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var n=e[a],u=n.getSnapshot;n=n.value;try{if(!lt(u(),n))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function me(l,t,e,a){t&=~Oc,t&=~Xe,l.suspendedLanes|=t,l.pingedLanes&=~t,a&&(l.warmLanes|=t),a=l.expirationTimes;for(var n=t;0<n;){var u=31-Pl(n),i=1<<u;a[u]=-1,n&=~i}e!==0&&Ef(l,e,t)}function Su(){return(ll&6)===0?(rn(0),!1):!0}function Cc(){if(w!==null){if(el===0)var l=w.return;else l=w,Bt=De=null,Wi(l),oa=null,Ka=0,l=w;for(;l!==null;)wo(l.alternate,l),l=l.return;w=null}}function Sa(l,t){var e=l.timeoutHandle;e!==-1&&(l.timeoutHandle=-1,Nm(e)),e=l.cancelPendingCommit,e!==null&&(l.cancelPendingCommit=null,e()),Jt=0,Cc(),rl=l,w=e=Ht(l.current,null),J=t,el=0,nt=null,se=!1,ya=_a(l,t),Mc=!1,ba=ut=Oc=Xe=oe=yl=0,Jl=sn=null,_c=!1,(t&8)!==0&&(t|=t&32);var a=l.entangledLanes;if(a!==0)for(l=l.entanglements,a&=t;0<a;){var n=31-Pl(a),u=1<<n;t|=l[n],a&=~u}return Kt=t,Qn(),e}function vr(l,t){Z=null,S.H=ln,t===sa||t===Wn?(t=Ns(),el=3):t===Yi?(t=Ns(),el=4):el=t===rc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,w===null&&(yl=1,su(l,rt(t,l.current)))}function gr(){var l=et.current;return l===null?!0:(J&4194048)===J?vt===null:(J&62914560)===J||(J&536870912)!==0?l===vt:!1}function yr(){var l=S.H;return S.H=ln,l===null?ln:l}function br(){var l=S.A;return S.A=fm,l}function xu(){yl=4,se||(J&4194048)!==J&&et.current!==null||(ya=!0),(oe&134217727)===0&&(Xe&134217727)===0||rl===null||me(rl,J,ut,!1)}function Hc(l,t,e){var a=ll;ll|=2;var n=yr(),u=br();(rl!==l||J!==t)&&(pu=null,Sa(l,t)),t=!1;var i=yl;l:do try{if(el!==0&&w!==null){var c=w,f=nt;switch(el){case 8:Cc(),i=6;break l;case 3:case 2:case 9:case 6:et.current===null&&(t=!0);var v=el;if(el=0,nt=null,xa(l,c,f,v),e&&ya){i=0;break l}break;default:v=el,el=0,nt=null,xa(l,c,f,v)}}rm(),i=yl;break}catch(p){vr(l,p)}while(!0);return t&&l.shellSuspendCounter++,Bt=De=null,ll=a,S.H=n,S.A=u,w===null&&(rl=null,J=0,Qn()),i}function rm(){for(;w!==null;)pr(w)}function dm(l,t){var e=ll;ll|=2;var a=yr(),n=br();rl!==l||J!==t?(pu=null,bu=Fl()+500,Sa(l,t)):ya=_a(l,t);l:do try{if(el!==0&&w!==null){t=w;var u=nt;t:switch(el){case 1:el=0,nt=null,xa(l,t,u,1);break;case 2:case 9:if(Os(u)){el=0,nt=null,Sr(t);break}t=function(){el!==2&&el!==9||rl!==l||(el=7),Ot(l)},u.then(t,t);break l;case 3:el=7;break l;case 4:el=5;break l;case 7:Os(u)?(el=0,nt=null,Sr(t)):(el=0,nt=null,xa(l,t,u,7));break;case 5:var i=null;switch(w.tag){case 26:i=w.memoizedState;case 5:case 27:var c=w;if(i?u0(i):c.stateNode.complete){el=0,nt=null;var f=c.sibling;if(f!==null)w=f;else{var v=c.return;v!==null?(w=v,zu(v)):w=null}break t}}el=0,nt=null,xa(l,t,u,5);break;case 6:el=0,nt=null,xa(l,t,u,6);break;case 8:Cc(),yl=6;break l;default:throw Error(s(462))}}mm();break}catch(p){vr(l,p)}while(!0);return Bt=De=null,S.H=a,S.A=n,ll=e,w!==null?0:(rl=null,J=0,Qn(),yl)}function mm(){for(;w!==null&&!B0();)pr(w)}function pr(l){var t=Lo(l.alternate,l,Kt);l.memoizedProps=l.pendingProps,t===null?zu(l):w=t}function Sr(l){var t=l,e=t.alternate;switch(t.tag){case 15:case 0:t=Yo(e,t,t.pendingProps,t.type,void 0,J);break;case 11:t=Yo(e,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Wi(t);default:wo(e,t),t=w=ys(t,Kt),t=Lo(e,t,Kt)}l.memoizedProps=l.pendingProps,t===null?zu(l):w=t}function xa(l,t,e,a){Bt=De=null,Wi(t),oa=null,Ka=0;var n=t.return;try{if(tm(l,n,t,e,J)){yl=1,su(l,rt(e,l.current)),w=null;return}}catch(u){if(n!==null)throw w=n,u;yl=1,su(l,rt(e,l.current)),w=null;return}t.flags&32768?($||a===1?l=!0:ya||(J&536870912)!==0?l=!1:(se=l=!0,(a===2||a===9||a===3||a===6)&&(a=et.current,a!==null&&a.tag===13&&(a.flags|=16384))),xr(t,l)):zu(t)}function zu(l){var t=l;do{if((t.flags&32768)!==0){xr(t,se);return}l=t.return;var e=nm(t.alternate,t,Kt);if(e!==null){w=e;return}if(t=t.sibling,t!==null){w=t;return}w=t=l}while(t!==null);yl===0&&(yl=5)}function xr(l,t){do{var e=um(l.alternate,l);if(e!==null){e.flags&=32767,w=e;return}if(e=l.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(l=l.sibling,l!==null)){w=l;return}w=l=e}while(l!==null);yl=6,w=null}function zr(l,t,e,a,n,u,i,c,f){l.cancelPendingCommit=null;do Eu();while(Al!==0);if((ll&6)!==0)throw Error(s(327));if(t!==null){if(t===l.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=zi,K0(l,e,u,i,c,f),l===rl&&(w=rl=null,J=0),pa=t,de=l,Jt=e,Nc=u,Dc=n,rr=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,ym(An,function(){return Mr(),null})):(l.callbackNode=null,l.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,n=M.p,M.p=2,i=ll,ll|=4;try{im(l,t,e)}finally{ll=i,M.p=n,S.T=a}}Al=1,Er(),Tr(),Ar()}}function Er(){if(Al===1){Al=0;var l=de,t=pa,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=S.T,S.T=null;var a=M.p;M.p=2;var n=ll;ll|=4;try{ar(t,l);var u=Kc,i=fs(l.containerInfo),c=u.focusedElem,f=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&cs(c.ownerDocument.documentElement,c)){if(f!==null&&yi(c)){var v=f.start,p=f.end;if(p===void 0&&(p=v),"selectionStart"in c)c.selectionStart=v,c.selectionEnd=Math.min(p,c.value.length);else{var z=c.ownerDocument||document,g=z&&z.defaultView||window;if(g.getSelection){var b=g.getSelection(),N=c.textContent.length,B=Math.min(f.start,N),fl=f.end===void 0?B:Math.min(f.end,N);!b.extend&&B>fl&&(i=fl,fl=B,B=i);var m=is(c,B),o=is(c,fl);if(m&&o&&(b.rangeCount!==1||b.anchorNode!==m.node||b.anchorOffset!==m.offset||b.focusNode!==o.node||b.focusOffset!==o.offset)){var h=z.createRange();h.setStart(m.node,m.offset),b.removeAllRanges(),B>fl?(b.addRange(h),b.extend(o.node,o.offset)):(h.setEnd(o.node,o.offset),b.addRange(h))}}}}for(z=[],b=c;b=b.parentNode;)b.nodeType===1&&z.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<z.length;c++){var x=z[c];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Ru=!!wc,Kc=wc=null}finally{ll=n,M.p=a,S.T=e}}l.current=t,Al=2}}function Tr(){if(Al===2){Al=0;var l=de,t=pa,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=S.T,S.T=null;var a=M.p;M.p=2;var n=ll;ll|=4;try{Io(l,t.alternate,t)}finally{ll=n,M.p=a,S.T=e}}Al=3}}function Ar(){if(Al===4||Al===3){Al=0,Y0();var l=de,t=pa,e=Jt,a=rr;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Al=5:(Al=0,pa=de=null,jr(l,l.pendingLanes));var n=l.pendingLanes;if(n===0&&(re=null),Iu(e),t=t.stateNode,Il&&typeof Il.onCommitFiberRoot=="function")try{Il.onCommitFiberRoot(Oa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=S.T,n=M.p,M.p=2,S.T=null;try{for(var u=l.onRecoverableError,i=0;i<a.length;i++){var c=a[i];u(c.value,{componentStack:c.stack})}}finally{S.T=t,M.p=n}}(Jt&3)!==0&&Eu(),Ot(l),n=l.pendingLanes,(e&261930)!==0&&(n&42)!==0?l===Uc?on++:(on=0,Uc=l):on=0,rn(0)}}function jr(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Va(t)))}function Eu(){return Er(),Tr(),Ar(),Mr()}function Mr(){if(Al!==5)return!1;var l=de,t=Nc;Nc=0;var e=Iu(Jt),a=S.T,n=M.p;try{M.p=32>e?32:e,S.T=null,e=Dc,Dc=null;var u=de,i=Jt;if(Al=0,pa=de=null,Jt=0,(ll&6)!==0)throw Error(s(331));var c=ll;if(ll|=4,fr(u.current),ur(u,u.current,i,e),ll=c,rn(0,!1),Il&&typeof Il.onPostCommitFiberRoot=="function")try{Il.onPostCommitFiberRoot(Oa,u)}catch{}return!0}finally{M.p=n,S.T=a,jr(l,t)}}function Or(l,t,e){t=rt(e,t),t=oc(l.stateNode,t,2),l=ue(l,t,2),l!==null&&(Na(l,2),Ot(l))}function al(l,t,e){if(l.tag===3)Or(l,l,e);else for(;t!==null;){if(t.tag===3){Or(t,l,e);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(re===null||!re.has(a))){l=rt(e,l),e=_o(2),a=ue(t,e,2),a!==null&&(No(e,a,t,l),Na(a,2),Ot(a));break}}t=t.return}}function Rc(l,t,e){var a=l.pingCache;if(a===null){a=l.pingCache=new sm;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(e)||(Mc=!0,n.add(e),l=hm.bind(null,l,t,e),t.then(l,l))}function hm(l,t,e){var a=l.pingCache;a!==null&&a.delete(t),l.pingedLanes|=l.suspendedLanes&e,l.warmLanes&=~e,rl===l&&(J&e)===e&&(yl===4||yl===3&&(J&62914560)===J&&300>Fl()-yu?(ll&2)===0&&Sa(l,0):Oc|=e,ba===J&&(ba=0)),Ot(l)}function _r(l,t){t===0&&(t=zf()),l=Oe(l,t),l!==null&&(Na(l,t),Ot(l))}function vm(l){var t=l.memoizedState,e=0;t!==null&&(e=t.retryLane),_r(l,e)}function gm(l,t){var e=0;switch(l.tag){case 31:case 13:var a=l.stateNode,n=l.memoizedState;n!==null&&(e=n.retryLane);break;case 19:a=l.stateNode;break;case 22:a=l.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),_r(l,e)}function ym(l,t){return ku(l,t)}var Tu=null,za=null,Bc=!1,Au=!1,Yc=!1,he=0;function Ot(l){l!==za&&l.next===null&&(za===null?Tu=za=l:za=za.next=l),Au=!0,Bc||(Bc=!0,pm())}function rn(l,t){if(!Yc&&Au){Yc=!0;do for(var e=!1,a=Tu;a!==null;){if(l!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,c=a.pingedLanes;u=(1<<31-Pl(42|l)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(e=!0,Cr(a,u))}else u=J,u=_n(a,a===rl?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||_a(a,u)||(e=!0,Cr(a,u));a=a.next}while(e);Yc=!1}}function bm(){Nr()}function Nr(){Au=Bc=!1;var l=0;he!==0&&_m()&&(l=he);for(var t=Fl(),e=null,a=Tu;a!==null;){var n=a.next,u=Dr(a,t);u===0?(a.next=null,e===null?Tu=n:e.next=n,n===null&&(za=e)):(e=a,(l!==0||(u&3)!==0)&&(Au=!0)),a=n}Al!==0&&Al!==5||rn(l),he!==0&&(he=0)}function Dr(l,t){for(var e=l.suspendedLanes,a=l.pingedLanes,n=l.expirationTimes,u=l.pendingLanes&-62914561;0<u;){var i=31-Pl(u),c=1<<i,f=n[i];f===-1?((c&e)===0||(c&a)!==0)&&(n[i]=w0(c,t)):f<=t&&(l.expiredLanes|=c),u&=~c}if(t=rl,e=J,e=_n(l,l===t?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a=l.callbackNode,e===0||l===t&&(el===2||el===9)||l.cancelPendingCommit!==null)return a!==null&&a!==null&&Wu(a),l.callbackNode=null,l.callbackPriority=0;if((e&3)===0||_a(l,e)){if(t=e&-e,t===l.callbackPriority)return t;switch(a!==null&&Wu(a),Iu(e)){case 2:case 8:e=Sf;break;case 32:e=An;break;case 268435456:e=xf;break;default:e=An}return a=Ur.bind(null,l),e=ku(e,a),l.callbackPriority=t,l.callbackNode=e,t}return a!==null&&a!==null&&Wu(a),l.callbackPriority=2,l.callbackNode=null,2}function Ur(l,t){if(Al!==0&&Al!==5)return l.callbackNode=null,l.callbackPriority=0,null;var e=l.callbackNode;if(Eu()&&l.callbackNode!==e)return null;var a=J;return a=_n(l,l===rl?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a===0?null:(mr(l,a,t),Dr(l,Fl()),l.callbackNode!=null&&l.callbackNode===e?Ur.bind(null,l):null)}function Cr(l,t){if(Eu())return null;mr(l,t,!0)}function pm(){Dm(function(){(ll&6)!==0?ku(pf,bm):Nr()})}function qc(){if(he===0){var l=ca;l===0&&(l=jn,jn<<=1,(jn&261888)===0&&(jn=256)),he=l}return he}function Hr(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Cn(""+l)}function Rr(l,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,l.id&&e.setAttribute("form",l.id),t.parentNode.insertBefore(e,t),l=new FormData(l),e.parentNode.removeChild(e),l}function Sm(l,t,e,a,n){if(t==="submit"&&e&&e.stateNode===n){var u=Hr((n[Zl]||null).action),i=a.submitter;i&&(t=(t=i[Zl]||null)?Hr(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var c=new Yn("action","action",null,a,n);l.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(he!==0){var f=i?Rr(n,i):new FormData(n);nc(e,{pending:!0,data:f,method:n.method,action:u},null,f)}}else typeof u=="function"&&(c.preventDefault(),f=i?Rr(n,i):new FormData(n),nc(e,{pending:!0,data:f,method:n.method,action:u},u,f))},currentTarget:n}]})}}for(var Gc=0;Gc<xi.length;Gc++){var Xc=xi[Gc],xm=Xc.toLowerCase(),zm=Xc[0].toUpperCase()+Xc.slice(1);pt(xm,"on"+zm)}pt(rs,"onAnimationEnd"),pt(ds,"onAnimationIteration"),pt(ms,"onAnimationStart"),pt("dblclick","onDoubleClick"),pt("focusin","onFocus"),pt("focusout","onBlur"),pt(qd,"onTransitionRun"),pt(Gd,"onTransitionStart"),pt(Xd,"onTransitionCancel"),pt(hs,"onTransitionEnd"),Je("onMouseEnter",["mouseout","mouseover"]),Je("onMouseLeave",["mouseout","mouseover"]),Je("onPointerEnter",["pointerout","pointerover"]),Je("onPointerLeave",["pointerout","pointerover"]),Te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Te("onBeforeInput",["compositionend","keypress","textInput","paste"]),Te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Em=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dn));function Br(l,t){t=(t&4)!==0;for(var e=0;e<l.length;e++){var a=l[e],n=a.event;a=a.listeners;l:{var u=void 0;if(t)for(var i=a.length-1;0<=i;i--){var c=a[i],f=c.instance,v=c.currentTarget;if(c=c.listener,f!==u&&n.isPropagationStopped())break l;u=c,n.currentTarget=v;try{u(n)}catch(p){Xn(p)}n.currentTarget=null,u=f}else for(i=0;i<a.length;i++){if(c=a[i],f=c.instance,v=c.currentTarget,c=c.listener,f!==u&&n.isPropagationStopped())break l;u=c,n.currentTarget=v;try{u(n)}catch(p){Xn(p)}n.currentTarget=null,u=f}}}}function K(l,t){var e=t[Pu];e===void 0&&(e=t[Pu]=new Set);var a=l+"__bubble";e.has(a)||(Yr(t,l,2,!1),e.add(a))}function Qc(l,t,e){var a=0;t&&(a|=4),Yr(e,l,a,t)}var ju="_reactListening"+Math.random().toString(36).slice(2);function Zc(l){if(!l[ju]){l[ju]=!0,_f.forEach(function(e){e!=="selectionchange"&&(Em.has(e)||Qc(e,!1,l),Qc(e,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[ju]||(t[ju]=!0,Qc("selectionchange",!1,t))}}function Yr(l,t,e,a){switch(d0(t)){case 2:var n=Fm;break;case 8:n=Im;break;default:n=af}e=n.bind(null,t,e,l),n=void 0,!fi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?l.addEventListener(t,e,{capture:!0,passive:n}):l.addEventListener(t,e,!0):n!==void 0?l.addEventListener(t,e,{passive:n}):l.addEventListener(t,e,!1)}function Lc(l,t,e,a,n){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)l:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=a.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=Ve(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){a=u=i;continue l}c=c.parentNode}}a=a.return}Qf(function(){var v=u,p=ii(e),z=[];l:{var g=vs.get(l);if(g!==void 0){var b=Yn,N=l;switch(l){case"keypress":if(Rn(e)===0)break l;case"keydown":case"keyup":b=gd;break;case"focusin":N="focus",b=di;break;case"focusout":N="blur",b=di;break;case"beforeblur":case"afterblur":b=di;break;case"click":if(e.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=nd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=pd;break;case rs:case ds:case ms:b=cd;break;case hs:b=xd;break;case"scroll":case"scrollend":b=ed;break;case"wheel":b=Ed;break;case"copy":case"cut":case"paste":b=sd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Kf;break;case"toggle":case"beforetoggle":b=Ad}var B=(t&4)!==0,fl=!B&&(l==="scroll"||l==="scrollend"),m=B?g!==null?g+"Capture":null:g;B=[];for(var o=v,h;o!==null;){var x=o;if(h=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||h===null||m===null||(x=Ca(o,m),x!=null&&B.push(mn(o,x,h))),fl)break;o=o.return}0<B.length&&(g=new b(g,N,null,e,p),z.push({event:g,listeners:B}))}}if((t&7)===0){l:{if(g=l==="mouseover"||l==="pointerover",b=l==="mouseout"||l==="pointerout",g&&e!==ui&&(N=e.relatedTarget||e.fromElement)&&(Ve(N)||N[Le]))break l;if((b||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,b?(N=e.relatedTarget||e.toElement,b=v,N=N?Ve(N):null,N!==null&&(fl=G(N),B=N.tag,N!==fl||B!==5&&B!==27&&B!==6)&&(N=null)):(b=null,N=v),b!==N)){if(B=Vf,x="onMouseLeave",m="onMouseEnter",o="mouse",(l==="pointerout"||l==="pointerover")&&(B=Kf,x="onPointerLeave",m="onPointerEnter",o="pointer"),fl=b==null?g:Ua(b),h=N==null?g:Ua(N),g=new B(x,o+"leave",b,e,p),g.target=fl,g.relatedTarget=h,x=null,Ve(p)===v&&(B=new B(m,o+"enter",N,e,p),B.target=h,B.relatedTarget=fl,x=B),fl=x,b&&N)t:{for(B=Tm,m=b,o=N,h=0,x=m;x;x=B(x))h++;x=0;for(var R=o;R;R=B(R))x++;for(;0<h-x;)m=B(m),h--;for(;0<x-h;)o=B(o),x--;for(;h--;){if(m===o||o!==null&&m===o.alternate){B=m;break t}m=B(m),o=B(o)}B=null}else B=null;b!==null&&qr(z,g,b,B,!1),N!==null&&fl!==null&&qr(z,fl,N,B,!0)}}l:{if(g=v?Ua(v):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var I=ls;else if(If(g))if(ts)I=Rd;else{I=Cd;var C=Ud}else b=g.nodeName,!b||b.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?v&&ni(v.elementType)&&(I=ls):I=Hd;if(I&&(I=I(l,v))){Pf(z,I,e,p);break l}C&&C(l,g,v),l==="focusout"&&v&&g.type==="number"&&v.memoizedProps.value!=null&&ai(g,"number",g.value)}switch(C=v?Ua(v):window,l){case"focusin":(If(C)||C.contentEditable==="true")&&(Pe=C,bi=v,Qa=null);break;case"focusout":Qa=bi=Pe=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,ss(z,e,p);break;case"selectionchange":if(Yd)break;case"keydown":case"keyup":ss(z,e,p)}var L;if(hi)l:{switch(l){case"compositionstart":var k="onCompositionStart";break l;case"compositionend":k="onCompositionEnd";break l;case"compositionupdate":k="onCompositionUpdate";break l}k=void 0}else Ie?$f(l,e)&&(k="onCompositionEnd"):l==="keydown"&&e.keyCode===229&&(k="onCompositionStart");k&&(Jf&&e.locale!=="ko"&&(Ie||k!=="onCompositionStart"?k==="onCompositionEnd"&&Ie&&(L=Zf()):(It=p,si="value"in It?It.value:It.textContent,Ie=!0)),C=Mu(v,k),0<C.length&&(k=new wf(k,l,null,e,p),z.push({event:k,listeners:C}),L?k.data=L:(L=Ff(e),L!==null&&(k.data=L)))),(L=Md?Od(l,e):_d(l,e))&&(k=Mu(v,"onBeforeInput"),0<k.length&&(C=new wf("onBeforeInput","beforeinput",null,e,p),z.push({event:C,listeners:k}),C.data=L)),Sm(z,l,v,e,p)}Br(z,t)})}function mn(l,t,e){return{instance:l,listener:t,currentTarget:e}}function Mu(l,t){for(var e=t+"Capture",a=[];l!==null;){var n=l,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Ca(l,e),n!=null&&a.unshift(mn(l,n,u)),n=Ca(l,t),n!=null&&a.push(mn(l,n,u))),l.tag===3)return a;l=l.return}return[]}function Tm(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function qr(l,t,e,a,n){for(var u=t._reactName,i=[];e!==null&&e!==a;){var c=e,f=c.alternate,v=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||v===null||(f=v,n?(v=Ca(e,u),v!=null&&i.unshift(mn(e,v,f))):n||(v=Ca(e,u),v!=null&&i.push(mn(e,v,f)))),e=e.return}i.length!==0&&l.push({event:t,listeners:i})}var Am=/\r\n?/g,jm=/\u0000|\uFFFD/g;function Gr(l){return(typeof l=="string"?l:""+l).replace(Am,`
`).replace(jm,"")}function Xr(l,t){return t=Gr(t),Gr(l)===t}function cl(l,t,e,a,n,u){switch(e){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||We(l,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&We(l,""+a);break;case"className":Dn(l,"class",a);break;case"tabIndex":Dn(l,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Dn(l,e,a);break;case"style":Gf(l,a,u);break;case"data":if(t!=="object"){Dn(l,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||e!=="href")){l.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Cn(""+a),l.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){l.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(e==="formAction"?(t!=="input"&&cl(l,t,"name",n.name,n,null),cl(l,t,"formEncType",n.formEncType,n,null),cl(l,t,"formMethod",n.formMethod,n,null),cl(l,t,"formTarget",n.formTarget,n,null)):(cl(l,t,"encType",n.encType,n,null),cl(l,t,"method",n.method,n,null),cl(l,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Cn(""+a),l.setAttribute(e,a);break;case"onClick":a!=null&&(l.onclick=Ut);break;case"onScroll":a!=null&&K("scroll",l);break;case"onScrollEnd":a!=null&&K("scrollend",l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(s(60));l.innerHTML=e}}break;case"multiple":l.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":l.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){l.removeAttribute("xlink:href");break}e=Cn(""+a),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""+a):l.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""):l.removeAttribute(e);break;case"capture":case"download":a===!0?l.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,a):l.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?l.setAttribute(e,a):l.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?l.removeAttribute(e):l.setAttribute(e,a);break;case"popover":K("beforetoggle",l),K("toggle",l),Nn(l,"popover",a);break;case"xlinkActuate":Dt(l,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Dt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Dt(l,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Dt(l,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Dt(l,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Dt(l,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Dt(l,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Dt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Dt(l,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Nn(l,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=ld.get(e)||e,Nn(l,e,a))}}function Vc(l,t,e,a,n,u){switch(e){case"style":Gf(l,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(s(60));l.innerHTML=e}}break;case"children":typeof a=="string"?We(l,a):(typeof a=="number"||typeof a=="bigint")&&We(l,""+a);break;case"onScroll":a!=null&&K("scroll",l);break;case"onScrollEnd":a!=null&&K("scrollend",l);break;case"onClick":a!=null&&(l.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nf.hasOwnProperty(e))l:{if(e[0]==="o"&&e[1]==="n"&&(n=e.endsWith("Capture"),t=e.slice(2,n?e.length-7:void 0),u=l[Zl]||null,u=u!=null?u[e]:null,typeof u=="function"&&l.removeEventListener(t,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(e in l?l[e]=null:l.hasAttribute(e)&&l.removeAttribute(e)),l.addEventListener(t,a,n);break l}e in l?l[e]=a:a===!0?l.setAttribute(e,""):Nn(l,e,a)}}}function Ul(l,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":K("error",l),K("load",l);var a=!1,n=!1,u;for(u in e)if(e.hasOwnProperty(u)){var i=e[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:cl(l,t,u,i,e,null)}}n&&cl(l,t,"srcSet",e.srcSet,e,null),a&&cl(l,t,"src",e.src,e,null);return;case"input":K("invalid",l);var c=u=i=n=null,f=null,v=null;for(a in e)if(e.hasOwnProperty(a)){var p=e[a];if(p!=null)switch(a){case"name":n=p;break;case"type":i=p;break;case"checked":f=p;break;case"defaultChecked":v=p;break;case"value":u=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(s(137,t));break;default:cl(l,t,a,p,e,null)}}Rf(l,u,c,f,v,i,n,!1);return;case"select":K("invalid",l),a=i=u=null;for(n in e)if(e.hasOwnProperty(n)&&(c=e[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:cl(l,t,n,c,e,null)}t=u,e=i,l.multiple=!!a,t!=null?ke(l,!!a,t,!1):e!=null&&ke(l,!!a,e,!0);return;case"textarea":K("invalid",l),u=n=a=null;for(i in e)if(e.hasOwnProperty(i)&&(c=e[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:cl(l,t,i,c,e,null)}Yf(l,a,n,u);return;case"option":for(f in e)e.hasOwnProperty(f)&&(a=e[f],a!=null)&&(f==="selected"?l.selected=a&&typeof a!="function"&&typeof a!="symbol":cl(l,t,f,a,e,null));return;case"dialog":K("beforetoggle",l),K("toggle",l),K("cancel",l),K("close",l);break;case"iframe":case"object":K("load",l);break;case"video":case"audio":for(a=0;a<dn.length;a++)K(dn[a],l);break;case"image":K("error",l),K("load",l);break;case"details":K("toggle",l);break;case"embed":case"source":case"link":K("error",l),K("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in e)if(e.hasOwnProperty(v)&&(a=e[v],a!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:cl(l,t,v,a,e,null)}return;default:if(ni(t)){for(p in e)e.hasOwnProperty(p)&&(a=e[p],a!==void 0&&Vc(l,t,p,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&cl(l,t,c,a,e,null))}function Mm(l,t,e,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,f=null,v=null,p=null;for(b in e){var z=e[b];if(e.hasOwnProperty(b)&&z!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":f=z;default:a.hasOwnProperty(b)||cl(l,t,b,null,a,z)}}for(var g in a){var b=a[g];if(z=e[g],a.hasOwnProperty(g)&&(b!=null||z!=null))switch(g){case"type":u=b;break;case"name":n=b;break;case"checked":v=b;break;case"defaultChecked":p=b;break;case"value":i=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(137,t));break;default:b!==z&&cl(l,t,g,b,a,z)}}ei(l,i,c,f,v,p,u,n);return;case"select":b=i=c=g=null;for(u in e)if(f=e[u],e.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":b=f;default:a.hasOwnProperty(u)||cl(l,t,u,null,a,f)}for(n in a)if(u=a[n],f=e[n],a.hasOwnProperty(n)&&(u!=null||f!=null))switch(n){case"value":g=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==f&&cl(l,t,n,u,a,f)}t=c,e=i,a=b,g!=null?ke(l,!!e,g,!1):!!a!=!!e&&(t!=null?ke(l,!!e,t,!0):ke(l,!!e,e?[]:"",!1));return;case"textarea":b=g=null;for(c in e)if(n=e[c],e.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:cl(l,t,c,null,a,n)}for(i in a)if(n=a[i],u=e[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":g=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==u&&cl(l,t,i,n,a,u)}Bf(l,g,b);return;case"option":for(var N in e)g=e[N],e.hasOwnProperty(N)&&g!=null&&!a.hasOwnProperty(N)&&(N==="selected"?l.selected=!1:cl(l,t,N,null,a,g));for(f in a)g=a[f],b=e[f],a.hasOwnProperty(f)&&g!==b&&(g!=null||b!=null)&&(f==="selected"?l.selected=g&&typeof g!="function"&&typeof g!="symbol":cl(l,t,f,g,a,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in e)g=e[B],e.hasOwnProperty(B)&&g!=null&&!a.hasOwnProperty(B)&&cl(l,t,B,null,a,g);for(v in a)if(g=a[v],b=e[v],a.hasOwnProperty(v)&&g!==b&&(g!=null||b!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(s(137,t));break;default:cl(l,t,v,g,a,b)}return;default:if(ni(t)){for(var fl in e)g=e[fl],e.hasOwnProperty(fl)&&g!==void 0&&!a.hasOwnProperty(fl)&&Vc(l,t,fl,void 0,a,g);for(p in a)g=a[p],b=e[p],!a.hasOwnProperty(p)||g===b||g===void 0&&b===void 0||Vc(l,t,p,g,a,b);return}}for(var m in e)g=e[m],e.hasOwnProperty(m)&&g!=null&&!a.hasOwnProperty(m)&&cl(l,t,m,null,a,g);for(z in a)g=a[z],b=e[z],!a.hasOwnProperty(z)||g===b||g==null&&b==null||cl(l,t,z,g,a,b)}function Qr(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Om(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var n=e[a],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&Qr(i)){for(i=0,c=n.responseEnd,a+=1;a<e.length;a++){var f=e[a],v=f.startTime;if(v>c)break;var p=f.transferSize,z=f.initiatorType;p&&Qr(z)&&(f=f.responseEnd,i+=p*(f<c?1:(c-v)/(f-v)))}if(--a,t+=8*(u+i)/(n.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var wc=null,Kc=null;function Ou(l){return l.nodeType===9?l:l.ownerDocument}function Zr(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lr(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Jc(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kc=null;function _m(){var l=window.event;return l&&l.type==="popstate"?l===kc?!1:(kc=l,!0):(kc=null,!1)}var Vr=typeof setTimeout=="function"?setTimeout:void 0,Nm=typeof clearTimeout=="function"?clearTimeout:void 0,wr=typeof Promise=="function"?Promise:void 0,Dm=typeof queueMicrotask=="function"?queueMicrotask:typeof wr<"u"?function(l){return wr.resolve(null).then(l).catch(Um)}:Vr;function Um(l){setTimeout(function(){throw l})}function ve(l){return l==="head"}function Kr(l,t){var e=t,a=0;do{var n=e.nextSibling;if(l.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"||e==="/&"){if(a===0){l.removeChild(n),ja(t);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")hn(l.ownerDocument.documentElement);else if(e==="head"){e=l.ownerDocument.head,hn(e);for(var u=e.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[Da]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||e.removeChild(u),u=i}}else e==="body"&&hn(l.ownerDocument.body);e=n}while(e);ja(t)}function Jr(l,t){var e=l;l=0;do{var a=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(l===0)break;l--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||l++;e=a}while(e)}function Wc(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Wc(e),li(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}l.removeChild(e)}}function Cm(l,t,e,a){for(;l.nodeType===1;){var n=e;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(a){if(!l[Da])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(u=l.getAttribute("rel"),u==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(u!==n.rel||l.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||l.getAttribute("title")!==(n.title==null?null:n.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(u=l.getAttribute("src"),(u!==(n.src==null?null:n.src)||l.getAttribute("type")!==(n.type==null?null:n.type)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&l.getAttribute("name")===u)return l}else return l;if(l=gt(l.nextSibling),l===null)break}return null}function Hm(l,t,e){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!e||(l=gt(l.nextSibling),l===null))return null;return l}function kr(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=gt(l.nextSibling),l===null))return null;return l}function $c(l){return l.data==="$?"||l.data==="$~"}function Fc(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function Rm(l,t){var e=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||e.readyState!=="loading")t();else{var a=function(){t(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),l._reactRetry=a}}function gt(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Ic=null;function Wr(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="/$"||e==="/&"){if(t===0)return gt(l.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}l=l.nextSibling}return null}function $r(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return l;t--}else e!=="/$"&&e!=="/&"||t++}l=l.previousSibling}return null}function Fr(l,t,e){switch(t=Ou(e),l){case"html":if(l=t.documentElement,!l)throw Error(s(452));return l;case"head":if(l=t.head,!l)throw Error(s(453));return l;case"body":if(l=t.body,!l)throw Error(s(454));return l;default:throw Error(s(451))}}function hn(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);li(l)}var yt=new Map,Ir=new Set;function _u(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var kt=M.d;M.d={f:Bm,r:Ym,D:qm,C:Gm,L:Xm,m:Qm,X:Lm,S:Zm,M:Vm};function Bm(){var l=kt.f(),t=Su();return l||t}function Ym(l){var t=we(l);t!==null&&t.tag===5&&t.type==="form"?vo(t):kt.r(l)}var Ea=typeof document>"u"?null:document;function Pr(l,t,e){var a=Ea;if(a&&typeof t=="string"&&t){var n=st(t);n='link[rel="'+l+'"][href="'+n+'"]',typeof e=="string"&&(n+='[crossorigin="'+e+'"]'),Ir.has(n)||(Ir.add(n),l={rel:l,crossOrigin:e,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Ul(t,"link",l),jl(t),a.head.appendChild(t)))}}function qm(l){kt.D(l),Pr("dns-prefetch",l,null)}function Gm(l,t){kt.C(l,t),Pr("preconnect",l,t)}function Xm(l,t,e){kt.L(l,t,e);var a=Ea;if(a&&l&&t){var n='link[rel="preload"][as="'+st(t)+'"]';t==="image"&&e&&e.imageSrcSet?(n+='[imagesrcset="'+st(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(n+='[imagesizes="'+st(e.imageSizes)+'"]')):n+='[href="'+st(l)+'"]';var u=n;switch(t){case"style":u=Ta(l);break;case"script":u=Aa(l)}yt.has(u)||(l=H({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:l,as:t},e),yt.set(u,l),a.querySelector(n)!==null||t==="style"&&a.querySelector(vn(u))||t==="script"&&a.querySelector(gn(u))||(t=a.createElement("link"),Ul(t,"link",l),jl(t),a.head.appendChild(t)))}}function Qm(l,t){kt.m(l,t);var e=Ea;if(e&&l){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+st(a)+'"][href="'+st(l)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Aa(l)}if(!yt.has(u)&&(l=H({rel:"modulepreload",href:l},t),yt.set(u,l),e.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(gn(u)))return}a=e.createElement("link"),Ul(a,"link",l),jl(a),e.head.appendChild(a)}}}function Zm(l,t,e){kt.S(l,t,e);var a=Ea;if(a&&l){var n=Ke(a).hoistableStyles,u=Ta(l);t=t||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(vn(u)))c.loading=5;else{l=H({rel:"stylesheet",href:l,"data-precedence":t},e),(e=yt.get(u))&&Pc(l,e);var f=i=a.createElement("link");jl(f),Ul(f,"link",l),f._p=new Promise(function(v,p){f.onload=v,f.onerror=p}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Nu(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function Lm(l,t){kt.X(l,t);var e=Ea;if(e&&l){var a=Ke(e).hoistableScripts,n=Aa(l),u=a.get(n);u||(u=e.querySelector(gn(n)),u||(l=H({src:l,async:!0},t),(t=yt.get(n))&&lf(l,t),u=e.createElement("script"),jl(u),Ul(u,"link",l),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Vm(l,t){kt.M(l,t);var e=Ea;if(e&&l){var a=Ke(e).hoistableScripts,n=Aa(l),u=a.get(n);u||(u=e.querySelector(gn(n)),u||(l=H({src:l,async:!0,type:"module"},t),(t=yt.get(n))&&lf(l,t),u=e.createElement("script"),jl(u),Ul(u,"link",l),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function l0(l,t,e,a){var n=(n=V.current)?_u(n):null;if(!n)throw Error(s(446));switch(l){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=Ta(e.href),e=Ke(n).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){l=Ta(e.href);var u=Ke(n).hoistableStyles,i=u.get(l);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(l,i),(u=n.querySelector(vn(l)))&&!u._p&&(i.instance=u,i.state.loading=5),yt.has(l)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},yt.set(l,e),u||wm(n,l,e,i.state))),t&&a===null)throw Error(s(528,""));return i}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Aa(e),e=Ke(n).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,l))}}function Ta(l){return'href="'+st(l)+'"'}function vn(l){return'link[rel="stylesheet"]['+l+"]"}function t0(l){return H({},l,{"data-precedence":l.precedence,precedence:null})}function wm(l,t,e,a){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=l.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ul(t,"link",e),jl(t),l.head.appendChild(t))}function Aa(l){return'[src="'+st(l)+'"]'}function gn(l){return"script[async]"+l}function e0(l,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var a=l.querySelector('style[data-href~="'+st(e.href)+'"]');if(a)return t.instance=a,jl(a),a;var n=H({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(l.ownerDocument||l).createElement("style"),jl(a),Ul(a,"style",n),Nu(a,e.precedence,l),t.instance=a;case"stylesheet":n=Ta(e.href);var u=l.querySelector(vn(n));if(u)return t.state.loading|=4,t.instance=u,jl(u),u;a=t0(e),(n=yt.get(n))&&Pc(a,n),u=(l.ownerDocument||l).createElement("link"),jl(u);var i=u;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ul(u,"link",a),t.state.loading|=4,Nu(u,e.precedence,l),t.instance=u;case"script":return u=Aa(e.src),(n=l.querySelector(gn(u)))?(t.instance=n,jl(n),n):(a=e,(n=yt.get(u))&&(a=H({},e),lf(a,n)),l=l.ownerDocument||l,n=l.createElement("script"),jl(n),Ul(n,"link",a),l.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Nu(a,e.precedence,l));return t.instance}function Nu(l,t,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===t)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(l,u.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(l,t.firstChild))}function Pc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function lf(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Du=null;function a0(l,t,e){if(Du===null){var a=new Map,n=Du=new Map;n.set(e,a)}else n=Du,a=n.get(e),a||(a=new Map,n.set(e,a));if(a.has(l))return a;for(a.set(l,null),e=e.getElementsByTagName(l),n=0;n<e.length;n++){var u=e[n];if(!(u[Da]||u[Ol]||l==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=l+i;var c=a.get(i);c?c.push(u):a.set(i,[u])}}return a}function n0(l,t,e){l=l.ownerDocument||l,l.head.insertBefore(e,t==="title"?l.querySelector("head > title"):null)}function Km(l,t,e){if(e===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(l=t.disabled,typeof t.precedence=="string"&&l==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function u0(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Jm(l,t,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Ta(a.href),u=t.querySelector(vn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Uu.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=u,jl(u);return}u=t.ownerDocument||t,a=t0(a),(n=yt.get(n))&&Pc(a,n),u=u.createElement("link"),jl(u);var i=u;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ul(u,"link",a),e.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=Uu.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}var tf=0;function km(l,t){return l.stylesheets&&l.count===0&&Hu(l,l.stylesheets),0<l.count||0<l.imgCount?function(e){var a=setTimeout(function(){if(l.stylesheets&&Hu(l,l.stylesheets),l.unsuspend){var u=l.unsuspend;l.unsuspend=null,u()}},6e4+t);0<l.imgBytes&&tf===0&&(tf=62500*Om());var n=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Hu(l,l.stylesheets),l.unsuspend)){var u=l.unsuspend;l.unsuspend=null,u()}},(l.imgBytes>tf?50:800)+t);return l.unsuspend=e,function(){l.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hu(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Cu=null;function Hu(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Cu=new Map,t.forEach(Wm,l),Cu=null,Uu.call(l))}function Wm(l,t){if(!(t.state.loading&4)){var e=Cu.get(l);if(e)var a=e.get(null);else{e=new Map,Cu.set(l,e);for(var n=l.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),a=i)}a&&e.set(null,a)}n=t.instance,i=n.getAttribute("data-precedence"),u=e.get(i)||a,u===a&&e.set(null,n),e.set(i,n),this.count++,a=Uu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(n,l.firstChild)),t.state.loading|=4}}var yn={$$typeof:Cl,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function $m(l,t,e,a,n,u,i,c,f){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$u(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$u(0),this.hiddenUpdates=$u(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function i0(l,t,e,a,n,u,i,c,f,v,p,z){return l=new $m(l,t,e,i,f,v,p,z,c),t=1,u===!0&&(t|=24),u=tt(3,null,null,t),l.current=u,u.stateNode=l,t=Hi(),t.refCount++,l.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:e,cache:t},qi(u),l}function c0(l){return l?(l=ea,l):ea}function f0(l,t,e,a,n,u){n=c0(n),a.context===null?a.context=n:a.pendingContext=n,a=ne(t),a.payload={element:e},u=u===void 0?null:u,u!==null&&(a.callback=u),e=ue(l,a,t),e!==null&&(kl(e,l,t),ka(e,l,t))}function s0(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var e=l.retryLane;l.retryLane=e!==0&&e<t?e:t}}function ef(l,t){s0(l,t),(l=l.alternate)&&s0(l,t)}function o0(l){if(l.tag===13||l.tag===31){var t=Oe(l,67108864);t!==null&&kl(t,l,67108864),ef(l,67108864)}}function r0(l){if(l.tag===13||l.tag===31){var t=it();t=Fu(t);var e=Oe(l,t);e!==null&&kl(e,l,t),ef(l,t)}}var Ru=!0;function Fm(l,t,e,a){var n=S.T;S.T=null;var u=M.p;try{M.p=2,af(l,t,e,a)}finally{M.p=u,S.T=n}}function Im(l,t,e,a){var n=S.T;S.T=null;var u=M.p;try{M.p=8,af(l,t,e,a)}finally{M.p=u,S.T=n}}function af(l,t,e,a){if(Ru){var n=nf(a);if(n===null)Lc(l,t,a,Bu,e),m0(l,a);else if(l1(n,l,t,e,a))a.stopPropagation();else if(m0(l,a),t&4&&-1<Pm.indexOf(l)){for(;n!==null;){var u=we(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Ee(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-Pl(i);c.entanglements[1]|=f,i&=~f}Ot(u),(ll&6)===0&&(bu=Fl()+500,rn(0))}}break;case 31:case 13:c=Oe(u,2),c!==null&&kl(c,u,2),Su(),ef(u,2)}if(u=nf(a),u===null&&Lc(l,t,a,Bu,e),u===n)break;n=u}n!==null&&a.stopPropagation()}else Lc(l,t,a,null,e)}}function nf(l){return l=ii(l),uf(l)}var Bu=null;function uf(l){if(Bu=null,l=Ve(l),l!==null){var t=G(l);if(t===null)l=null;else{var e=t.tag;if(e===13){if(l=q(t),l!==null)return l;l=null}else if(e===31){if(l=sl(t),l!==null)return l;l=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Bu=l,null}function d0(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q0()){case pf:return 2;case Sf:return 8;case An:case G0:return 32;case xf:return 268435456;default:return 32}default:return 32}}var cf=!1,ge=null,ye=null,be=null,bn=new Map,pn=new Map,pe=[],Pm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m0(l,t){switch(l){case"focusin":case"focusout":ge=null;break;case"dragenter":case"dragleave":ye=null;break;case"mouseover":case"mouseout":be=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(t.pointerId)}}function Sn(l,t,e,a,n,u){return l===null||l.nativeEvent!==u?(l={blockedOn:t,domEventName:e,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},t!==null&&(t=we(t),t!==null&&o0(t)),l):(l.eventSystemFlags|=a,t=l.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),l)}function l1(l,t,e,a,n){switch(t){case"focusin":return ge=Sn(ge,l,t,e,a,n),!0;case"dragenter":return ye=Sn(ye,l,t,e,a,n),!0;case"mouseover":return be=Sn(be,l,t,e,a,n),!0;case"pointerover":var u=n.pointerId;return bn.set(u,Sn(bn.get(u)||null,l,t,e,a,n)),!0;case"gotpointercapture":return u=n.pointerId,pn.set(u,Sn(pn.get(u)||null,l,t,e,a,n)),!0}return!1}function h0(l){var t=Ve(l.target);if(t!==null){var e=G(t);if(e!==null){if(t=e.tag,t===13){if(t=q(e),t!==null){l.blockedOn=t,Mf(l.priority,function(){r0(e)});return}}else if(t===31){if(t=sl(e),t!==null){l.blockedOn=t,Mf(l.priority,function(){r0(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){l.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Yu(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var e=nf(l.nativeEvent);if(e===null){e=l.nativeEvent;var a=new e.constructor(e.type,e);ui=a,e.target.dispatchEvent(a),ui=null}else return t=we(e),t!==null&&o0(t),l.blockedOn=e,!1;t.shift()}return!0}function v0(l,t,e){Yu(l)&&e.delete(t)}function t1(){cf=!1,ge!==null&&Yu(ge)&&(ge=null),ye!==null&&Yu(ye)&&(ye=null),be!==null&&Yu(be)&&(be=null),bn.forEach(v0),pn.forEach(v0)}function qu(l,t){l.blockedOn===t&&(l.blockedOn=null,cf||(cf=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,t1)))}var Gu=null;function g0(l){Gu!==l&&(Gu=l,y.unstable_scheduleCallback(y.unstable_NormalPriority,function(){Gu===l&&(Gu=null);for(var t=0;t<l.length;t+=3){var e=l[t],a=l[t+1],n=l[t+2];if(typeof a!="function"){if(uf(a||e)===null)continue;break}var u=we(e);u!==null&&(l.splice(t,3),t-=3,nc(u,{pending:!0,data:n,method:e.method,action:a},a,n))}}))}function ja(l){function t(f){return qu(f,l)}ge!==null&&qu(ge,l),ye!==null&&qu(ye,l),be!==null&&qu(be,l),bn.forEach(t),pn.forEach(t);for(var e=0;e<pe.length;e++){var a=pe[e];a.blockedOn===l&&(a.blockedOn=null)}for(;0<pe.length&&(e=pe[0],e.blockedOn===null);)h0(e),e.blockedOn===null&&pe.shift();if(e=(l.ownerDocument||l).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var n=e[a],u=e[a+1],i=n[Zl]||null;if(typeof u=="function")i||g0(e);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Zl]||null)c=i.formAction;else if(uf(n)!==null)continue}else c=i.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),g0(e)}}}function y0(){function l(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ff(l){this._internalRoot=l}Xu.prototype.render=ff.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(s(409));var e=t.current,a=it();f0(e,a,l,t,null,null)},Xu.prototype.unmount=ff.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;f0(l.current,2,null,l,null,null),Su(),t[Le]=null}};function Xu(l){this._internalRoot=l}Xu.prototype.unstable_scheduleHydration=function(l){if(l){var t=jf();l={blockedOn:null,target:l,priority:t};for(var e=0;e<pe.length&&t!==0&&t<pe[e].priority;e++);pe.splice(e,0,l),e===0&&h0(l)}};var b0=A.version;if(b0!=="19.2.4")throw Error(s(527,b0,"19.2.4"));M.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(s(188)):(l=Object.keys(l).join(","),Error(s(268,l)));return l=T(t),l=l!==null?F(l):null,l=l===null?null:l.stateNode,l};var e1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{Oa=Qu.inject(e1),Il=Qu}catch{}}return zn.createRoot=function(l,t){if(!D(l))throw Error(s(299));var e=!1,a="",n=Ao,u=jo,i=Mo;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=i0(l,1,!1,null,null,e,a,null,n,u,i,y0),l[Le]=t.current,Zc(l),new ff(t)},zn.hydrateRoot=function(l,t,e){if(!D(l))throw Error(s(299));var a=!1,n="",u=Ao,i=jo,c=Mo,f=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),t=i0(l,1,!0,t,e??null,a,n,f,u,i,c,y0),t.context=c0(null),e=t.current,a=it(),a=Fu(a),n=ne(a),n.callback=null,ue(e,n,a),e=a,t.current.lanes=e,Na(t,e),Ot(t),l[Le]=t.current,Zc(l),new Xu(t)},zn.version="19.2.4",zn}var O0;function m1(){if(O0)return rf.exports;O0=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(A){console.error(A)}}return y(),rf.exports=d1(),rf.exports}var h1=m1(),C0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_0=Qe.createContext&&Qe.createContext(C0),v1=["attr","size","title"];function g1(y,A){if(y==null)return{};var j=y1(y,A),s,D;if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(y);for(D=0;D<G.length;D++)s=G[D],!(A.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(y,s)&&(j[s]=y[s])}return j}function y1(y,A){if(y==null)return{};var j={};for(var s in y)if(Object.prototype.hasOwnProperty.call(y,s)){if(A.indexOf(s)>=0)continue;j[s]=y[s]}return j}function Zu(){return Zu=Object.assign?Object.assign.bind():function(y){for(var A=1;A<arguments.length;A++){var j=arguments[A];for(var s in j)Object.prototype.hasOwnProperty.call(j,s)&&(y[s]=j[s])}return y},Zu.apply(this,arguments)}function N0(y,A){var j=Object.keys(y);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(y);A&&(s=s.filter(function(D){return Object.getOwnPropertyDescriptor(y,D).enumerable})),j.push.apply(j,s)}return j}function Lu(y){for(var A=1;A<arguments.length;A++){var j=arguments[A]!=null?arguments[A]:{};A%2?N0(Object(j),!0).forEach(function(s){b1(y,s,j[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(j)):N0(Object(j)).forEach(function(s){Object.defineProperty(y,s,Object.getOwnPropertyDescriptor(j,s))})}return y}function b1(y,A,j){return A=p1(A),A in y?Object.defineProperty(y,A,{value:j,enumerable:!0,configurable:!0,writable:!0}):y[A]=j,y}function p1(y){var A=S1(y,"string");return typeof A=="symbol"?A:A+""}function S1(y,A){if(typeof y!="object"||!y)return y;var j=y[Symbol.toPrimitive];if(j!==void 0){var s=j.call(y,A);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(A==="string"?String:Number)(y)}function H0(y){return y&&y.map((A,j)=>Qe.createElement(A.tag,Lu({key:j},A.attr),H0(A.child)))}function En(y){return A=>Qe.createElement(x1,Zu({attr:Lu({},y.attr)},A),H0(y.child))}function x1(y){var A=j=>{var{attr:s,size:D,title:G}=y,q=g1(y,v1),sl=D||j.size||"1em",_;return j.className&&(_=j.className),y.className&&(_=(_?_+" ":"")+y.className),Qe.createElement("svg",Zu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},j.attr,s,q,{className:_,style:Lu(Lu({color:y.color||j.color},j.style),y.style),height:sl,width:sl,xmlns:"http://www.w3.org/2000/svg"}),G&&Qe.createElement("title",null,G),y.children)};return _0!==void 0?Qe.createElement(_0.Consumer,null,j=>A(j)):A(C0)}function z1(y){return En({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Menu_Fries"},child:[{tag:"path",attr:{d:"M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"},child:[]},{tag:"path",attr:{d:"M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"},child:[]},{tag:"path",attr:{d:"M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"},child:[]}]}]})(y)}function E1(y){return En({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"},child:[]}]})(y)}const T1="/assets/aabhuCv-FCoiR8Xq.pdf",vf=["Home","About","Projects","Contact"],A1=()=>{const[y,A]=hl.useState(!1),[j,s]=hl.useState(!1),[D,G]=hl.useState("home");return hl.useEffect(()=>{const q=()=>s(window.scrollY>20);return window.addEventListener("scroll",q,{passive:!0}),()=>window.removeEventListener("scroll",q)},[]),hl.useEffect(()=>{const q=new IntersectionObserver(sl=>{sl.forEach(_=>{_.isIntersecting&&G(_.target.id)})},{threshold:.4});return vf.forEach(sl=>{const _=document.getElementById(sl.toLowerCase());_&&q.observe(_)}),()=>q.disconnect()},[]),d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .navbar {
          font-family: 'DM Sans', sans-serif;
          transition: all 0.4s ease;
        }

        .navbar.scrolled {
          background: rgba(7, 9, 13, 0.88);
          border-color: rgba(255,255,255,0.06);
          box-shadow: 0 4px 40px rgba(0,0,0,0.4);
        }

        .navbar.top {
          background: transparent;
          border-color: transparent;
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          letter-spacing: -0.03em;
          color: #f1f1f1;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .nav-logo .accent {
          color: #f59e0b;
        }

        .nav-logo .bracket {
          color: #374151;
          font-weight: 400;
          font-size: 1rem;
          font-family: 'DM Sans', monospace;
        }

        /* Desktop nav links */
        .nav-link {
          position: relative;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6b7280;
          text-decoration: none;
          padding: 4px 0;
          transition: color 0.25s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #f59e0b;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #e5e7eb;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-link.active {
          color: #fbbf24;
        }

        /* Nav pill indicator */
        .nav-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #22c55e;
          background: rgba(34,197,94,0.07);
          border: 1px solid rgba(34,197,94,0.15);
          border-radius: 100px;
          padding: 4px 10px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
        }

        .nav-pill-dot {
          width: 5px;
          height: 5px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse-green 2s ease-in-out infinite;
        }

        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50% { box-shadow: 0 0 0 4px rgba(34,197,94,0); }
        }

        /* Mobile menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: rgba(7,9,13,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
          z-index: 40;
          transform: translateX(100%);
          transition: transform 0.45s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-link {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(2.5rem, 8vw, 4rem);
          letter-spacing: -0.03em;
          color: #1f2937;
          text-decoration: none;
          padding: 10px 0;
          transition: color 0.2s ease, transform 0.2s ease;
          display: block;
        }

        .mobile-link:hover,
        .mobile-link.active {
          color: #f59e0b;
          transform: translateX(8px);
        }

        .mobile-link-index {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          color: #374151;
          vertical-align: super;
          margin-right: 6px;
          font-weight: 400;
        }

        .mobile-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 1.4rem;
        }

        .mobile-close:hover {
          background: rgba(245,158,11,0.1);
          border-color: rgba(245,158,11,0.3);
          color: #f59e0b;
        }

        .mobile-footer {
          position: absolute;
          bottom: 40px;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #1f2937;
          font-family: 'DM Sans', sans-serif;
        }

         /* CV button */
        .cv-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 20px;
          background: rgba(7,9,13,0.8);
          border: 1px solid rgba(245,158,11,0.4);
          border-radius: 100px;
          color: #fbbf24;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          backdrop-filter: blur(16px);
          transition: all 0.3s ease;
        }

        .cv-btn:hover {
          background: rgba(245,158,11,0.1);
          border-color: rgba(245,158,11,0.7);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(245,158,11,0.15);
        }

        .cv-btn svg {
          width: 14px;
          height: 14px;
        }

        /* Hamburger */
        .menu-btn {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.2s ease;
          position: relative;
          z-index: 60;
        }

        .menu-btn:hover {
          background: rgba(245,158,11,0.08);
          border-color: rgba(245,158,11,0.25);
          color: #f59e0b;
        }

        .menu-btn.active {
          border-color: rgba(245,158,11,0.3);
          color: #f59e0b;
        }

        /* Divider line in mobile menu */
        .mobile-divider {
          width: 40px;
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 16px auto;
        }
      `}),d.jsxs("div",{className:` mobile-menu ${y?"open":""}`,children:[d.jsx("button",{className:"mobile-close",onClick:()=>A(!1),children:d.jsx(E1,{})}),d.jsx("nav",{children:vf.map((q,sl)=>d.jsxs("a",{href:`#${q.toLowerCase()}`,className:`mobile-link ${D===q.toLowerCase()?"active":""}`,onClick:()=>A(!1),children:[d.jsxs("span",{className:"mobile-link-index",children:["0",sl+1]}),q]},q))}),d.jsx("div",{className:" mobile-footer",children:"Aabhushan · Portfolio · 2025"})]}),d.jsx("header",{className:`navbar fixed top-0 w-full z-50 border-b ${j?"scrolled":"top"}`,style:{backdropFilter:j?"blur(20px)":"none"},children:d.jsxs("div",{style:{maxWidth:"1100px"},className:" mx-auto flex justify-between items-center px-6 py-4",children:[d.jsxs("a",{href:"#home",className:"nav-logo",children:[d.jsx("span",{className:"bracket",children:"["}),"Aabhush",d.jsx("span",{className:"accent",children:"an"}),d.jsx("span",{className:"bracket",children:"]"})]}),d.jsxs("div",{className:"hidden md:flex items-center gap-10",children:[d.jsx("nav",{className:"flex gap-10",children:vf.map(q=>d.jsx("a",{href:`#${q.toLowerCase()}`,className:`nav-link ${D===q.toLowerCase()?"active":""}`,children:q},q))}),d.jsxs("span",{className:"nav-pill",children:[d.jsx("span",{className:"nav-pill-dot"}),"Open to work"]}),d.jsxs("a",{href:T1,target:"_blank",rel:"noreferrer",className:"cv-btn   ",children:[d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"})}),"Resume"]})]}),d.jsx("div",{className:"md:hidden",children:d.jsx("button",{className:`menu-btn ${y?"active":""}`,onClick:()=>A(!y),"aria-label":"Toggle menu",children:d.jsx(z1,{className:""})})})]})})]})},j1=({children:y})=>d.jsxs("div",{className:"bg-linear-to-br from-slate-950 via-blue-950 to-black text-white min-h-screen overflow-x-hidden",children:[d.jsx(A1,{}),d.jsx("main",{className:"pt-20",children:y})]}),D0=["Full Stack Developer","Backend Engineer","Systems Thinker","DevOps Learner"],M1=()=>{const[y,A]=hl.useState(0),[j,s]=hl.useState(""),[D,G]=hl.useState(!0),[q,sl]=hl.useState(0),[_,T]=hl.useState(!1);return hl.useEffect(()=>{T(!0)},[]),hl.useEffect(()=>{const F=D0[y];if(D)if(q<F.length){const H=setTimeout(()=>{s(F.slice(0,q+1)),sl(nl=>nl+1)},70);return()=>clearTimeout(H)}else{const H=setTimeout(()=>G(!1),1800);return()=>clearTimeout(H)}else if(q>0){const H=setTimeout(()=>{s(F.slice(0,q-1)),sl(nl=>nl-1)},35);return()=>clearTimeout(H)}else A(H=>(H+1)%D0.length),G(!0)},[q,D,y]),d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        #home {
          font-family: 'DM Sans', sans-serif;
          background: #07090d;
        }

        /* Animated grid bg */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }

        /* Orbs */
        .orb-amber {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 65%);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-60%, -60%);
          animation: floatA 8s ease-in-out infinite;
          pointer-events: none;
        }

        .orb-blue {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(10%, 10%);
          animation: floatB 10s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes floatA {
          0%, 100% { transform: translate(-60%, -60%) scale(1); }
          50% { transform: translate(-55%, -65%) scale(1.08); }
        }

        @keyframes floatB {
          0%, 100% { transform: translate(10%, 10%) scale(1); }
          50% { transform: translate(15%, 5%) scale(1.05); }
        }

        /* Noise overlay */
        .noise {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          pointer-events: none;
        }

       

        /* Main heading */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #6b7280;
          margin-bottom: 24px;
        }

        .hero-eyebrow span {
          display: block;
          width: 28px;
          height: 1px;
          background: #f59e0b;
        }

        .hero-eyebrow em {
          color: #f59e0b;
          font-style: normal;
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.5rem, 9vw, 7.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #f1f1f1;
          margin-bottom: 16px;
        }

        .hero-name .dot {
          color: #f59e0b;
        }

        .hero-role-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 28px;
          min-height: 36px;
        }

        .hero-role-label {
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #4b5563;
          font-weight: 500;
        }

        .hero-role-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          font-weight: 600;
          color: #93c5fd;
          min-width: 280px;
          text-align: left;
        }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: #93c5fd;
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
          border-radius: 1px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-sub {
          max-width: 540px;
          color: #6b7280;
          font-size: 1rem;
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 44px;
        }

        /* CTA buttons */
        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f59e0b;
          color: #07090d;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.04em;
          padding: 13px 28px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 0 0 rgba(245,158,11,0.4);
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(245,158,11,0.3);
          background: #fbbf24;
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #9ca3af;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 0.9rem;
          padding: 13px 28px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          color: #f1f1f1;
          border-color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.04);
          transform: translateY(-3px);
        }

        /* Scroll indicator */
        .scroll-hint {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: #374151;
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, #f59e0b, transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }

        /* Stagger reveal */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          animation: revealUp 0.7s ease forwards;
        }

        .r1 { animation-delay: 0.1s; }
        .r2 { animation-delay: 0.25s; }
        .r3 { animation-delay: 0.4s; }
        .r4 { animation-delay: 0.55s; }
        .r5 { animation-delay: 0.7s; }

        @keyframes revealUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Decorative side text */
        .side-text {
          position: absolute;
          left: 28px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-size: 0.65rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: grey;
          white-space: nowrap;
          font-weight: 500;
          display: none;
        }

        @media (min-width: 1024px) {
          .side-text { display: block; }
          
        }

        /* Location badge */
        .location-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 100px;
          font-size: 0.75rem;
          color: #4b5563;
          margin-bottom: 32px;
        }

        .location-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 6px #22c55e;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 6px #22c55e; }
          50% { box-shadow: 0 0 12px #22c55e, 0 0 20px rgba(34,197,94,0.3); }
        }
      `}),d.jsxs("section",{id:"home",className:"relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden",children:[d.jsx("div",{className:"hero-grid"}),d.jsx("div",{className:"orb-amber"}),d.jsx("div",{className:"orb-blue"}),d.jsx("div",{className:"noise"}),d.jsx("span",{className:"side-text",children:"Aabhushan · Portfolio · 2025"}),d.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[d.jsxs("div",{className:`location-badge reveal r1 ${_?"":"opacity-0"}`,children:[d.jsx("span",{className:"location-dot"}),"Available for opportunities"]}),d.jsxs("p",{className:`hero-eyebrow reveal r2 ${_?"":"opacity-0"}`,children:[d.jsx("span",{}),"Hey there — I'm",d.jsx("em",{children:"Aabhushan"}),d.jsx("span",{})]}),d.jsxs("div",{className:"grid grid-cols-1 md:block justify-items-center",children:[d.jsxs("h1",{className:`hero-name reveal r2 ${_?"":"opacity-0"}`,children:["Aabhushan",d.jsx("span",{className:"dot",children:"."})]}),d.jsxs("div",{className:`hero-role-row reveal r3 ${_?"":"opacity-0"}`,children:[d.jsx("span",{className:"hero-role-label",children:"I'm a"}),d.jsxs("span",{className:"hero-role-text",children:[j,d.jsx("span",{className:"cursor"})]})]}),d.jsx("p",{className:`hero-sub reveal r4 ${_?"":"opacity-0"}`,children:"Backend-focused full-stack developer building scalable systems, secure architectures, and modern interactive web experiences with the MERN stack."})]}),d.jsxs("div",{className:`flex flex-wrap gap-4 justify-center reveal r5 ${_?"":"opacity-0"}`,children:[d.jsxs("a",{href:"#projects",className:"cta-primary",children:["View Projects",d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:d.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),d.jsxs("a",{href:"#contact",className:"cta-secondary",children:["Contact Me",d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})})]})]})]}),d.jsxs("div",{className:"scroll-hint",children:[d.jsx("span",{children:"Scroll"}),d.jsx("div",{className:"scroll-line"})]})]})]})},O1="/assets/whatshero-DbYusx_P.jpg",U0={left:["JavaScript (ES6+)","TypeScript","React.js","Next.js","Node.js","Nest.js"],right:["PostgreSQL","MySQL","Python","Django","C / C++","C# & .NET"]},_1=[{label:"Projects Built",value:"10+"},{label:"Tech Stack",value:"12+"},{label:"Focus",value:"Backend"}],N1=()=>{const y=hl.useRef(null),[A,j]=hl.useState(!1);return hl.useEffect(()=>{const s=new IntersectionObserver(([D])=>{D.isIntersecting&&j(!0)},{threshold:.1});return y.current&&s.observe(y.current),()=>s.disconnect()},[]),d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .about-section {
          font-family: 'DM Sans', sans-serif;
          background: #080c10;
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-section::after {
          content: '';
          position: absolute;
          bottom: -200px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99, 179, 237, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #f59e0b;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-label::before {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: #f59e0b;
        }

        .about-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: #f1f1f1;
        }

        .about-heading span {
          color: #f59e0b;
          position: relative;
          display: inline-block;
        }

        .about-heading span::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #f59e0b, transparent);
          border-radius: 2px;
        }

        .body-text {
          color: #9ca3af;
          line-height: 1.8;
          font-size: 1rem;
          font-weight: 300;
        }

        .body-text strong {
          color: #e5e7eb;
          font-weight: 500;
        }

        /* Main two-column grid */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }

        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 60px;
            align-items: start;
          }
        }

        /* Stats row */
        .stats-grid {
          display: grid;
          
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 36px;
        }

        @media (max-width: 1000px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          
          }
        }
    

        .stat-card {
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 20px 24px;
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(10px);
          transition: border-color 0.3s ease, background 0.3s ease;
        }

        .stat-card:hover {
          border-color: rgba(245, 158, 11, 0.3);
          background: rgba(245, 158, 11, 0.03);
        }

        .stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #f59e0b;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6b7280;
          margin-top: 4px;
          font-weight: 500;
        }

        /* Image card */
        .image-wrapper {
          position: relative;
        }

        /* On mobile, image column appears after text column (natural DOM order) */
        /* On desktop, it sits in the second column via grid */

        .image-frame {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 3/4;
          max-height: 520px;
          width: 100%;
        }

        @media (max-width: 767px) {
          .image-frame {
            aspect-ratio: 4/5;
            max-height: 380px;
          }
        }

        .image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.6s ease;
        }

        .image-frame:hover img {
          transform: scale(1.04);
        }

        .image-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,12,16,0.6) 0%, transparent 60%);
          pointer-events: none;
        }

        .image-border-glow {
          position: absolute;
          inset: -1px;
          border-radius: 25px;
          background: linear-gradient(135deg, rgba(245,158,11,0.4), rgba(99,179,237,0.2), transparent 60%);
          z-index: -1;
        }

        .image-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          z-index: 10;
          background: rgba(8,12,16,0.85);
          border: 1px solid rgba(245,158,11,0.3);
          border-radius: 10px;
          padding: 10px 16px;
          backdrop-filter: blur(12px);
        }

        .image-badge-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #f1f1f1;
        }

        .image-badge-title {
          font-size: 0.72rem;
          color: #f59e0b;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        .corner-decor {
          position: absolute;
          top: -12px;
          right: -12px;
          width: 80px;
          height: 80px;
          border-top: 2px solid rgba(245,158,11,0.5);
          border-right: 2px solid rgba(245,158,11,0.5);
          border-radius: 0 12px 0 0;
          pointer-events: none;
        }

        .corner-decor-bl {
          position: absolute;
          bottom: -12px;
          left: -12px;
          width: 60px;
          height: 60px;
          border-bottom: 2px solid rgba(99,179,237,0.3);
          border-left: 2px solid rgba(99,179,237,0.3);
          border-radius: 0 0 0 12px;
          pointer-events: none;
        }

        /* Tech stack */
        .tech-section-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #6b7280;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tech-section-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.06);
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-pill {
          display: inline-block;
          padding: 5px 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 100px;
          font-size: 0.82rem;
          color: #d1d5db;
          transition: all 0.2s ease;
          cursor: default;
          font-weight: 400;
        }

        .tech-pill:hover {
          background: rgba(245,158,11,0.08);
          border-color: rgba(245,158,11,0.25);
          color: #fcd34d;
          transform: translateY(-1px);
        }

        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
          margin: 32px 0;
        }

        /* Fade-in animations */
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
      `}),d.jsx("section",{ref:y,id:"about",className:"about-section py-28 px-6",children:d.jsxs("div",{className:"about-inner",children:[d.jsxs("div",{className:`fade-up ${A?"visible":""}`,children:[d.jsx("p",{className:"section-label mb-5",children:"About Me"}),d.jsxs("h2",{className:"about-heading mb-14",children:["Building the web,",d.jsx("br",{}),d.jsx("span",{children:"one system"})," at a time."]})]}),d.jsxs("div",{className:"about-grid",children:[d.jsxs("div",{children:[d.jsx("div",{className:`fade-up delay-1 ${A?"visible":""}`,children:d.jsx("div",{className:"stats-grid",children:_1.map(s=>d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-value",children:s.value}),d.jsx("div",{className:"stat-label",children:s.label})]},s.label))})}),d.jsxs("div",{className:`fade-up delay-2 ${A?"visible":""}`,children:[d.jsxs("p",{className:"body-text mb-5",children:["I'm ",d.jsx("strong",{children:"Aabhushan"}),", a passionate Computer Science student and full-stack developer focused on building"," ",d.jsx("strong",{children:"scalable, real-world applications"}),". I specialize in backend development using the MERN stack and enjoy designing efficient systems that solve practical problems."]}),d.jsxs("p",{className:"body-text mb-5",children:["I have hands-on experience developing production-ready features — including",d.jsx("strong",{children:" authentication systems"}),","," ",d.jsx("strong",{children:"REST APIs"}),", file handling, cloud integrations, and database architecture. Currently building an advanced",d.jsx("strong",{children:" Learning Management System (LMS)"})," combining academic learning, skill-based courses, and interactive features."]}),d.jsxs("p",{className:"body-text",children:["Beyond development, I actively deepen my knowledge in"," ",d.jsx("strong",{children:"DSA"}),",",d.jsx("strong",{children:" Network Security"}),", and"," ",d.jsx("strong",{children:"DevOps"}),". My goal is to become a highly skilled backend and DevOps engineer who builds reliable, secure, and scalable digital products."]})]}),d.jsx("div",{className:"divider"}),d.jsxs("div",{className:`fade-up delay-3 ${A?"visible":""}`,children:[d.jsx("p",{className:"tech-section-title",children:"Tech Stack"}),d.jsx("div",{className:"tech-pills ",children:[...U0.left,...U0.right].map(s=>d.jsx("span",{className:"tech-pill",children:s},s))})]})]}),d.jsxs("div",{className:`image-wrapper fade-up delay-4 ${A?"visible":""}`,children:[d.jsx("div",{className:"corner-decor"}),d.jsx("div",{className:"corner-decor-bl"}),d.jsx("div",{className:"image-border-glow"}),d.jsxs("div",{className:"image-frame",children:[d.jsx("img",{src:O1,alt:"Aabhushan"}),d.jsxs("div",{className:"image-badge",children:[d.jsx("div",{className:"image-badge-name",children:"Aabhushan"}),d.jsx("div",{className:"image-badge-title",children:"Full-Stack Developer"})]})]})]})]})]})})]})},D1=({title:y,description:A,tech:j,link:s,index:D})=>d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        .project-card {
          position: relative;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
          cursor: default;
        }

        .project-card:hover {
          border-color: rgba(245,158,11,0.25);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(245,158,11,0.08);
        }

        /* Glow spot that follows hover */
        .project-card::before {
          content: '';
          position: absolute;
          top: -60px;
          left: -60px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          border-radius: 50%;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .card-number {
          font-family: 'Syne', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #374151;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .card-number::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.05);
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #f1f1f1;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          line-height: 1.25;
          transition: color 0.2s ease;
        }

        .project-card:hover .card-title {
          color: #fbbf24;
        }

        .card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: #6b7280;
          line-height: 1.75;
          font-weight: 300;
          flex: 1;
          margin-bottom: 24px;
        }

        .card-tech-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
        }

        .card-tech {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #4b5563;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px;
          padding: 4px 10px;
          transition: all 0.2s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .project-card:hover .card-tech {
          border-color: rgba(245,158,11,0.12);
          color: #6b7280;
        }

        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          letter-spacing: 0.05em;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.05);
          transition: color 0.2s ease, gap 0.2s ease;
          margin-top: auto;
        }

        .card-link:hover {
          color: #f59e0b;
          gap: 12px;
        }

        .card-link svg {
          transition: transform 0.2s ease;
        }

        .card-link:hover svg {
          transform: translateX(3px);
        }
      `}),d.jsxs("div",{className:"project-card",children:[d.jsxs("div",{className:"card-number",children:["Project ",String(D+1).padStart(2,"0")]}),d.jsx("h3",{className:"card-title",children:y}),d.jsx("p",{className:"card-desc",children:A}),d.jsx("div",{className:"card-tech-wrap",children:j.map((G,q)=>d.jsx("span",{className:"card-tech",children:G},q))}),s&&d.jsxs("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"card-link",children:["View Project",d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:d.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),U1=[{title:"Smart Learn LMS",description:"Full-featured Learning Management System with authentication, video courses, quizzes, and discussion forums. Built for real-world academic and skill-based learning.",tech:["React","Node.js","MongoDB","JWT","REST API"],link:"https://github.com/aakashstha1/EduPal_FYP"},{title:"Chat Application",description:"Real-time chat app with theme toggle, modern UI, and backend message handling. Supports rooms, presence indicators, and persistent history.",tech:["React","Express","Socket.io","MongoDB"],link:"https://chat-app-olive-psi.vercel.app/"},{title:"Social Media",description:"A feature-rich social networking app where users can post, like, comment, and share content. Includes authentication, real-time updates, and a responsive design.",tech:["React","Tailwind","MongoDb","socket.io","Node.js"],link:"https://app-wine-nine.vercel.app/"}],C1=()=>{const y=hl.useRef(null),[A,j]=hl.useState(!1);return hl.useEffect(()=>{const s=new IntersectionObserver(([D])=>{D.isIntersecting&&j(!0)},{threshold:.1});return y.current&&s.observe(y.current),()=>s.disconnect()},[]),d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        #projects {
          background: #07090d;
          position: relative;
          overflow: hidden;
        }

        #projects::before {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .projects-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #f59e0b;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .projects-label::before {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: #f59e0b;
        }

        .projects-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1;
          color: #f1f1f1;
          margin-bottom: 16px;
        }

        .projects-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: #4b5563;
          font-weight: 300;
          max-width: 400px;
          line-height: 1.7;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .card-reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .card-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cd1 { transition-delay: 0.1s; }
        .cd2 { transition-delay: 0.25s; }
        .cd3 { transition-delay: 0.4s; }

        /* bottom CTA */
        .projects-cta {
          margin-top: 48px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .projects-cta-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.06), transparent);
        }

        .projects-cta-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4b5563;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s ease;
        }

        .projects-cta-link:hover {
          color: #f59e0b;
        }

        .header-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .header-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hd1 { transition-delay: 0.05s; }
        .hd2 { transition-delay: 0.15s; }
      `}),d.jsx("section",{ref:y,id:"projects",className:"py-28 px-6",children:d.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[d.jsxs("div",{style:{marginBottom:"56px"},children:[d.jsx("p",{className:`projects-label header-reveal hd1 ${A?"visible":""}`,children:"Selected Work"}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"20px"},children:[d.jsxs("h2",{className:`projects-heading header-reveal hd2 ${A?"visible":""}`,children:["Things I've",d.jsx("br",{}),"built."]}),d.jsx("p",{className:`projects-sub header-reveal hd2 ${A?"visible":""}`,children:"A selection of real-world projects spanning full-stack development, real-time systems, and production-ready features."})]})]}),d.jsx("div",{className:"projects-grid",children:U1.map((s,D)=>d.jsx("div",{className:`card-reveal cd${D+1} ${A?"visible":""}`,children:d.jsx(D1,{...s,index:D})},D))}),d.jsxs("div",{className:`projects-cta card-reveal cd3 ${A?"visible":""}`,children:[d.jsx("div",{className:"projects-cta-line"}),d.jsxs("a",{href:"https://github.com/aabhushanCD",target:"_blank",rel:"noreferrer",className:"projects-cta-link",children:["More on GitHub",d.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:d.jsx("path",{d:"M7 17L17 7M7 7h10v10"})})]})]})]})})]})};function H1(y){return En({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(y)}function R1(y){return En({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(y)}function B1(y){return En({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(y)}const Y1=[{icon:d.jsx(H1,{}),label:"GitHub",sub:"aabhushanCD",href:"https://github.com/aabhushanCD",color:"#6b7280",hoverColor:"#f1f1f1"},{icon:d.jsx(R1,{}),label:"LinkedIn",sub:"aabhushan-dhakal",href:"https://www.linkedin.com/in/aabhushan-dhakal-7020b3226/",color:"#6b7280",hoverColor:"#0ea5e9"},{icon:d.jsx(B1,{}),label:"Twitter",sub:"@your_twitter",href:"https://twitter.com/your_twitter",color:"#6b7280",hoverColor:"#38bdf8"}],q1=()=>{const y=hl.useRef(null),[A,j]=hl.useState(!1);return hl.useEffect(()=>{const s=new IntersectionObserver(([D])=>{D.isIntersecting&&j(!0)},{threshold:.1});return y.current&&s.observe(y.current),()=>s.disconnect()},[]),d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        #contact {
          font-family: 'DM Sans', sans-serif;
          background: #07090d;
          position: relative;
          overflow: hidden;
        }

        /* Top border line */
        #contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 80px;
          background: linear-gradient(to bottom, transparent, rgba(245,158,11,0.4));
        }

        /* Ambient glow */
        .contact-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(245,158,11,0.05) 0%, transparent 65%);
          pointer-events: none;
        }

        /* Section label */
        .contact-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #f59e0b;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 32px;
        }

        .contact-label::before,
        .contact-label::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #f59e0b;
        }

        /* Big heading */
        .contact-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 8vw, 6.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #f1f1f1;
          margin-bottom: 24px;
        }

        .contact-heading .muted {
          color: #1f2937;
        }

        .contact-sub {
          font-size: 1rem;
          color: #4b5563;
          font-weight: 300;
          max-width: 420px;
          margin: 0 auto 48px;
          line-height: 1.75;
        }

        /* Email CTA */
        .email-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          background: #f59e0b;
          color: #07090d;
          padding: 14px 32px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 0 0 rgba(245,158,11,0.3);
          margin-bottom: 64px;
        }

        .email-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(245,158,11,0.25);
          background: #fbbf24;
        }

        .email-cta svg {
          transition: transform 0.25s ease;
        }

        .email-cta:hover svg {
          transform: translateX(4px);
        }

        /* Or divider */
        .or-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          max-width: 320px;
          margin: 0 auto 48px;
        }

        .or-divider span {
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #1f2937;
          white-space: nowrap;
        }

        .or-divider::before,
        .or-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.05);
        }

        /* Social cards */
        .socials-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 80px;
        }

        .social-card {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 14px 20px;
          text-decoration: none;
          transition: all 0.3s ease;
          min-width: 180px;
        }

        .social-card:hover {
          border-color: rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          transform: translateY(-3px);
        }

        .social-icon {
          font-size: 1.3rem;
          color: #374151;
          transition: color 0.2s ease;
          flex-shrink: 0;
        }

        .social-card:hover .social-icon {
          color: var(--hover-color);
        }

        .social-info-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #9ca3af;
          line-height: 1.2;
          transition: color 0.2s ease;
        }

        .social-card:hover .social-info-label {
          color: #f1f1f1;
        }

        .social-info-sub {
          font-size: 0.72rem;
          color: #374151;
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        .social-arrow {
          margin-left: auto;
          color: #1f2937;
          font-size: 0.8rem;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .social-card:hover .social-arrow {
          transform: translate(2px, -2px);
          color: #4b5563;
        }

        /* Footer */
        .contact-footer {
          border-top: 1px solid rgba(255,255,255,0.04);
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: gap;
          gap: 16px;
        }

        .footer-copy {
          font-size: 0.75rem;
          color: grey;
          letter-spacing: 0.08em;
          font-weight: 400;
        }

        .footer-copy span {
          color: grey;
        }

        .footer-tagline {
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: grey;
        }

        /* Reveal animations */
        .c-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .c-reveal.visible { opacity: 1; transform: translateY(0); }
        .cr1 { transition-delay: 0.05s; }
        .cr2 { transition-delay: 0.15s; }
        .cr3 { transition-delay: 0.28s; }
        .cr4 { transition-delay: 0.4s; }
        .cr5 { transition-delay: 0.5s; }
      `}),d.jsxs("section",{ref:y,id:"contact",className:"py-28 px-6",children:[d.jsx("div",{className:"contact-glow"}),d.jsxs("div",{style:{maxWidth:"700px",margin:"0 auto",textAlign:"center"},children:[d.jsx("p",{className:`contact-label c-reveal cr1 ${A?"visible":""}`,children:"Get In Touch"}),d.jsxs("h2",{className:`contact-heading c-reveal cr2 ${A?"visible":""}`,children:["Let's build",d.jsx("br",{}),d.jsx("span",{className:"muted",children:"something"}),d.jsx("br",{}),"great."]}),d.jsx("p",{className:`contact-sub c-reveal cr3 ${A?"visible":""}`,children:"I'm always open to collaboration, freelance work, or just a friendly conversation. Drop me a line anytime."}),d.jsx("div",{className:`c-reveal cr3 ${A?"visible":""}`,children:d.jsxs("a",{href:"mailto:your-email@example.com",className:"email-cta",children:["Say Hello",d.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:d.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})}),d.jsx("div",{className:`or-divider c-reveal cr4 ${A?"visible":""}`,children:d.jsx("span",{children:"or find me on"})}),d.jsx("div",{className:`socials-row c-reveal cr4 ${A?"visible":""}`,children:Y1.map(s=>d.jsxs("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:"social-card",style:{"--hover-color":s.hoverColor},children:[d.jsx("span",{className:"social-icon",children:s.icon}),d.jsxs("span",{children:[d.jsx("div",{className:"social-info-label",children:s.label}),d.jsx("div",{className:"social-info-sub",children:s.sub})]}),d.jsx("svg",{className:"social-arrow",width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:d.jsx("path",{d:"M7 17L17 7M7 7h10v10"})})]},s.label))}),d.jsxs("div",{className:`contact-footer c-reveal cr5 ${A?"visible":""}`,children:[d.jsxs("p",{className:"footer-copy",children:["© 2025 ",d.jsx("span",{children:"Aabhushan"}),". All rights reserved."]}),d.jsx("p",{className:"footer-tagline",children:"Built with React + Tailwind"})]})]})]})]})},G1=()=>{const[y,A]=hl.useState({x:0,y:0});return hl.useEffect(()=>{const j=s=>{A({x:s.clientX,y:s.clientY})};return window.addEventListener("mousemove",j),()=>{window.removeEventListener("mousemove",j)}},[]),d.jsx("div",{className:`pointer-events-none fixed top-0 left-0 w-62.5 h-62.5 rounded-full \r
      bg-linear-to-br from-cyan-400/40 via-blue-500/30 to-purple-500/20 \r
      blur-3xl opacity-70 z-9999`,style:{transform:`translate(${y.x-125}px, ${y.y-125}px)`}})},X1=()=>d.jsxs(j1,{children:[d.jsx(G1,{}),d.jsx(M1,{}),d.jsx(N1,{}),d.jsx(C1,{}),d.jsx(q1,{})]});h1.createRoot(document.getElementById("root")).render(d.jsx(hl.StrictMode,{children:d.jsx(X1,{})}));
