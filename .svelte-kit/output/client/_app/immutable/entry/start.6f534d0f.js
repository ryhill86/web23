import{o as je,t as _e}from"../chunks/scheduler.cbf234a0.js";import{S as Ke,a as ze,I as q,g as Ne,f as qe,b as ye,c as le,s as ee,i as we,d as F,e as H,P as Me,h as Ye}from"../chunks/singletons.ebebfda8.js";import{u as Xe}from"../chunks/parse.bee59afc.js";function Qe(n,o){return n==="/"||o==="ignore"?n:o==="never"?n.endsWith("/")?n.slice(0,-1):n:o==="always"&&!n.endsWith("/")?n+"/":n}function Ze(n){return n.split("%25").map(decodeURI).join("%25")}function et(n){for(const o in n)n[o]=decodeURIComponent(n[o]);return n}const tt=["href","pathname","search","searchParams","toString","toJSON"];function nt(n,o){const l=new URL(n);for(const c of tt)Object.defineProperty(l,c,{get(){return o(),n[c]},enumerable:!0,configurable:!0});return at(l),l}function at(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const rt="/__data.json";function ot(n){return n.replace(/\/$/,"")+rt}function it(...n){let o=5381;for(const l of n)if(typeof l=="string"){let c=l.length;for(;c;)o=o*33^l.charCodeAt(--c)}else if(ArrayBuffer.isView(l)){const c=new Uint8Array(l.buffer,l.byteOffset,l.byteLength);let g=c.length;for(;g;)o=o*33^c[--g]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const fe=window.fetch;window.fetch=(n,o)=>((n instanceof Request?n.method:(o==null?void 0:o.method)||"GET")!=="GET"&&ne.delete(Ee(n)),fe(n,o));const ne=new Map;function st(n,o){const l=Ee(n,o),c=document.querySelector(l);if(c!=null&&c.textContent){const{body:g,...y}=JSON.parse(c.textContent),E=c.getAttribute("data-ttl");return E&&ne.set(l,{body:g,init:y,ttl:1e3*Number(E)}),Promise.resolve(new Response(g,y))}return fe(n,o)}function ct(n,o,l){if(ne.size>0){const c=Ee(n,l),g=ne.get(c);if(g){if(performance.now()<g.ttl&&["default","force-cache","only-if-cached",void 0].includes(l==null?void 0:l.cache))return new Response(g.body,g.init);ne.delete(c)}}return fe(o,l)}function Ee(n,o){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(o!=null&&o.headers||o!=null&&o.body){const g=[];o.headers&&g.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&g.push(o.body),c+=`[data-hash="${it(...g)}"]`}return c}const lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ft(n){const o=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${dt(n).map(c=>{const g=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(g)return o.push({name:g[1],matcher:g[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const y=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(y)return o.push({name:y[1],matcher:y[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const E=c.split(/\[(.+?)\](?!\])/);return"/"+E.map((b,S)=>{if(S%2){if(b.startsWith("x+"))return ve(String.fromCharCode(parseInt(b.slice(2),16)));if(b.startsWith("u+"))return ve(String.fromCharCode(...b.slice(2).split("-").map(P=>parseInt(P,16))));const h=lt.exec(b);if(!h)throw new Error(`Invalid param: ${b}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,N,T,C,O]=h;return o.push({name:C,matcher:O,optional:!!N,rest:!!T,chained:T?S===1&&E[0]==="":!1}),T?"(.*?)":N?"([^/]*)?":"([^/]+?)"}return ve(b)}).join("")}).join("")}/?$`),params:o}}function ut(n){return!/^\([^)]+\)$/.test(n)}function dt(n){return n.slice(1).split("/").filter(ut)}function pt(n,o,l){const c={},g=n.slice(1);let y=0;for(let E=0;E<o.length;E+=1){const w=o[E];let b=g[E-y];if(w.chained&&w.rest&&y&&(b=g.slice(E-y,E+1).filter(S=>S).join("/"),y=0),b===void 0){w.rest&&(c[w.name]="");continue}if(!w.matcher||l[w.matcher](b)){c[w.name]=b;const S=o[E+1],h=g[E+1];S&&!S.rest&&S.optional&&h&&w.chained&&(y=0);continue}if(w.optional&&w.chained){y++;continue}return}if(!y)return c}function ve(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ht({nodes:n,server_loads:o,dictionary:l,matchers:c}){const g=new Set(o);return Object.entries(l).map(([w,[b,S,h]])=>{const{pattern:N,params:T}=ft(w),C={id:w,exec:O=>{const P=N.exec(O);if(P)return pt(P,T,c)},errors:[1,...h||[]].map(O=>n[O]),layouts:[0,...S||[]].map(E),leaf:y(b)};return C.errors.length=C.layouts.length=Math.max(C.errors.length,C.layouts.length),C});function y(w){const b=w<0;return b&&(w=~w),[b,n[w]]}function E(w){return w===void 0?w:[g.has(w),n[w]]}}function He(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Ve(n,o){const l=JSON.stringify(o);try{sessionStorage[n]=l}catch{}}function mt(n){return n.filter(o=>o!=null)}const Be=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Be];const gt=new Set([...Be]);[...gt];async function _t(n){var o;for(const l in n)if(typeof((o=n[l])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([c,g])=>[c,await g])));return n}class te{constructor(o,l){this.status=o,typeof l=="string"?this.body={message:l}:l?this.body=l:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}}class Fe{constructor(o,l){this.status=o,this.location=l}}const yt="x-sveltekit-invalidated",B=He(Ke)??{},Z=He(ze)??{};function be(n){B[n]=ee()}function wt(n,o){var Ce;const l=ht(n),c=n.nodes[0],g=n.nodes[1];c(),g();const y=document.documentElement,E=[],w=[];let b=null;const S={before_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},N=!1,T=!1,C=!0,O=!1,P=!1,J=!1,K=!1,M,I=(Ce=history.state)==null?void 0:Ce[q];I||(I=Date.now(),history.replaceState({...history.state,[q]:I},"",location.href));const ue=B[I];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let V,ae,W;async function Re(){if(W=W||Promise.resolve(),await W,!W)return;W=null;const e=new URL(location.href),i=X(e,!0);b=null;const t=ae={},r=i&&await he(i);if(t===ae&&r){if(r.type==="redirect")return re(new URL(r.location,e).href,{},[e.pathname],t);r.props.page!==void 0&&(V=r.props.page),M.$set(r.props)}}function xe(e){w.some(i=>i==null?void 0:i.snapshot)&&(Z[e]=w.map(i=>{var t;return(t=i==null?void 0:i.snapshot)==null?void 0:t.capture()}))}function ke(e){var i;(i=Z[e])==null||i.forEach((t,r)=>{var a,s;(s=(a=w[r])==null?void 0:a.snapshot)==null||s.restore(t)})}function Le(){be(I),Ve(Ke,B),xe(I),Ve(ze,Z)}async function re(e,{noScroll:i=!1,replaceState:t=!1,keepFocus:r=!1,state:a={},invalidateAll:s=!1},f,_){return typeof e=="string"&&(e=new URL(e,Ne(document))),ce({url:e,scroll:i?ee():null,keepfocus:r,redirect_chain:f,details:{state:a,replaceState:t},nav_token:_,accepted:()=>{s&&(K=!0)},blocked:()=>{},type:"goto"})}async function Ae(e){return b={id:e.id,promise:he(e).then(i=>(i.type==="loaded"&&i.state.error&&(b=null),i))},b.promise}async function oe(...e){const t=l.filter(r=>e.some(a=>r.exec(a))).map(r=>Promise.all([...r.layouts,r.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(t)}function Pe(e){var r;h=e.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),V=e.props.page,M=new n.root({target:o,props:{...e.props,stores:F,components:w},hydrate:!0}),ke(I);const t={from:null,to:{params:h.params,route:{id:((r=h.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};S.after_navigate.forEach(a=>a(t)),T=!0}async function Y({url:e,params:i,branch:t,status:r,error:a,route:s,form:f}){let _="never";for(const u of t)(u==null?void 0:u.slash)!==void 0&&(_=u.slash);e.pathname=Qe(e.pathname,_),e.search=e.search;const m={type:"loaded",state:{url:e,params:i,branch:t,error:a,route:s},props:{constructors:mt(t).map(u=>u.node.component)}};f!==void 0&&(m.props.form=f);let p={},R=!V,x=0;for(let u=0;u<Math.max(t.length,h.branch.length);u+=1){const d=t[u],U=h.branch[u];(d==null?void 0:d.data)!==(U==null?void 0:U.data)&&(R=!0),d&&(p={...p,...d.data},R&&(m.props[`data_${x}`]=p),x+=1)}return(!h.url||e.href!==h.url.href||h.error!==a||f!==void 0&&f!==V.form||R)&&(m.props.page={error:a,params:i,route:{id:(s==null?void 0:s.id)??null},status:r,url:new URL(e),form:f??null,data:R?p:V.data}),m}async function de({loader:e,parent:i,url:t,params:r,route:a,server_data_node:s}){var p,R,x;let f=null;const _={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},m=await e();if((p=m.universal)!=null&&p.load){let k=function(...d){for(const U of d){const{href:$}=new URL(U,t);_.dependencies.add($)}};const u={route:{get id(){return _.route=!0,a.id}},params:new Proxy(r,{get:(d,U)=>(_.params.add(U),d[U])}),data:(s==null?void 0:s.data)??null,url:nt(t,()=>{_.url=!0}),async fetch(d,U){let $;d instanceof Request?($=d.url,U={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:d.headers,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...U}):$=d;const j=new URL($,t);return k(j.href),j.origin===t.origin&&($=j.href.slice(t.origin.length)),T?ct($,j.href,U):st($,U)},setHeaders:()=>{},depends:k,parent(){return _.parent=!0,i()}};f=await m.universal.load.call(null,u)??null,f=f?await _t(f):null}return{node:m,loader:e,server:s,universal:(R=m.universal)!=null&&R.load?{type:"data",data:f,uses:_}:null,data:f??(s==null?void 0:s.data)??null,slash:((x=m.universal)==null?void 0:x.trailingSlash)??(s==null?void 0:s.slash)}}function Ue(e,i,t,r,a){if(K)return!0;if(!r)return!1;if(r.parent&&e||r.route&&i||r.url&&t)return!0;for(const s of r.params)if(a[s]!==h.params[s])return!0;for(const s of r.dependencies)if(E.some(f=>f(new URL(s))))return!0;return!1}function pe(e,i){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?i??null:null}async function he({id:e,invalidating:i,url:t,params:r,route:a}){if((b==null?void 0:b.id)===e)return b.promise;const{errors:s,layouts:f,leaf:_}=a,m=[...f,_];s.forEach(v=>v==null?void 0:v().catch(()=>{})),m.forEach(v=>v==null?void 0:v[1]().catch(()=>{}));let p=null;const R=h.url?e!==h.url.pathname+h.url.search:!1,x=h.route?a.id!==h.route.id:!1;let k=!1;const u=m.map((v,A)=>{var z;const L=h.branch[A],D=!!(v!=null&&v[0])&&((L==null?void 0:L.loader)!==v[1]||Ue(k,x,R,(z=L.server)==null?void 0:z.uses,r));return D&&(k=!0),D});if(u.some(Boolean)){try{p=await Je(t,u)}catch(v){return ie({status:v instanceof te?v.status:500,error:await Q(v,{url:t,params:r,route:{id:a.id}}),url:t,route:a})}if(p.type==="redirect")return p}const d=p==null?void 0:p.nodes;let U=!1;const $=m.map(async(v,A)=>{var me;if(!v)return;const L=h.branch[A],D=d==null?void 0:d[A];if((!D||D.type==="skip")&&v[1]===(L==null?void 0:L.loader)&&!Ue(U,x,R,(me=L.universal)==null?void 0:me.uses,r))return L;if(U=!0,(D==null?void 0:D.type)==="error")throw D;return de({loader:v[1],url:t,params:r,route:a,parent:async()=>{var Te;const De={};for(let ge=0;ge<A;ge+=1)Object.assign(De,(Te=await $[ge])==null?void 0:Te.data);return De},server_data_node:pe(D===void 0&&v[0]?{type:"skip"}:D??null,v[0]?L==null?void 0:L.server:void 0)})});for(const v of $)v.catch(()=>{});const j=[];for(let v=0;v<m.length;v+=1)if(m[v])try{j.push(await $[v])}catch(A){if(A instanceof Fe)return{type:"redirect",location:A.location};let L=500,D;if(d!=null&&d.includes(A))L=A.status??L,D=A.error;else if(A instanceof te)L=A.status,D=A.body;else{if(await F.updated.check())return await G(t);D=await Q(A,{params:r,url:t,route:{id:a.id}})}const z=await Oe(v,j,s);return z?await Y({url:t,params:r,branch:j.slice(0,z.idx).concat(z.node),status:L,error:D,route:a}):await Ie(t,{id:a.id},D,L)}else j.push(void 0);return await Y({url:t,params:r,branch:j,status:200,error:null,route:a,form:i?void 0:null})}async function Oe(e,i,t){for(;e--;)if(t[e]){let r=e;for(;!i[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:i,url:t,route:r}){const a={};let s=null;if(n.server_loads[0]===0)try{const p=await Je(t,[!0]);if(p.type!=="data"||p.nodes[0]&&p.nodes[0].type!=="data")throw 0;s=p.nodes[0]??null}catch{(t.origin!==location.origin||t.pathname!==location.pathname||N)&&await G(t)}const _=await de({loader:c,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:pe(s)}),m={node:await g(),loader:g,universal:null,server:null,data:null};return await Y({url:t,params:a,branch:[_,m],status:e,error:i,route:null})}function X(e,i){if(we(e,H))return;const t=se(e);for(const r of l){const a=r.exec(t);if(a)return{id:e.pathname+e.search,invalidating:i,route:r,params:et(a),url:e}}}function se(e){return Ze(e.pathname.slice(H.length)||"/")}function $e({url:e,type:i,intent:t,delta:r}){var _,m;let a=!1;const s={from:{params:h.params,route:{id:((_=h.route)==null?void 0:_.id)??null},url:h.url},to:{params:(t==null?void 0:t.params)??null,route:{id:((m=t==null?void 0:t.route)==null?void 0:m.id)??null},url:e},willUnload:!t,type:i};r!==void 0&&(s.delta=r);const f={...s,cancel:()=>{a=!0}};return P||S.before_navigate.forEach(p=>p(f)),a?null:s}async function ce({url:e,scroll:i,keepfocus:t,redirect_chain:r,details:a,type:s,delta:f,nav_token:_={},accepted:m,blocked:p}){var $,j,v;const R=X(e,!1),x=$e({url:e,type:s,delta:f,intent:R});if(!x){p();return}const k=I;m(),P=!0,T&&F.navigating.set(x),ae=_;let u=R&&await he(R);if(!u){if(we(e,H))return await G(e);u=await Ie(e,{id:null},await Q(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(R==null?void 0:R.url)||e,ae!==_)return!1;if(u.type==="redirect")if(r.length>10||r.includes(e.pathname))u=await ie({status:500,error:await Q(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(u.location,e).href,{},[...r,e.pathname],_),!1;else(($=u.props.page)==null?void 0:$.status)>=400&&await F.updated.check()&&await G(e);if(E.length=0,K=!1,O=!0,be(k),xe(k),(j=u.props.page)!=null&&j.url&&u.props.page.url.pathname!==e.pathname&&(e.pathname=(v=u.props.page)==null?void 0:v.url.pathname),a){const A=a.replaceState?0:1;if(a.state[q]=I+=A,history[a.replaceState?"replaceState":"pushState"](a.state,"",e),!a.replaceState){let L=I+1;for(;Z[L]||B[L];)delete Z[L],delete B[L],L+=1}}b=null,T?(h=u.state,u.props.page&&(u.props.page.url=e),M.$set(u.props)):Pe(u);const{activeElement:d}=document;if(await _e(),C){const A=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));i?scrollTo(i.x,i.y):A?A.scrollIntoView():scrollTo(0,0)}const U=document.activeElement!==d&&document.activeElement!==document.body;!t&&!U&&Se(),C=!0,u.props.page&&(V=u.props.page),P=!1,s==="popstate"&&ke(I),S.after_navigate.forEach(A=>A(x)),F.navigating.set(null),O=!1}async function Ie(e,i,t,r){return e.origin===location.origin&&e.pathname===location.pathname&&!N?await ie({status:r,error:t,url:e,route:i}):await G(e)}function G(e){return location.href=e.href,new Promise(()=>{})}function We(){let e;y.addEventListener("mousemove",s=>{const f=s.target;clearTimeout(e),e=setTimeout(()=>{r(f,2)},20)});function i(s){r(s.composedPath()[0],1)}y.addEventListener("mousedown",i),y.addEventListener("touchstart",i,{passive:!0});const t=new IntersectionObserver(s=>{for(const f of s)f.isIntersecting&&(oe(se(new URL(f.target.href))),t.unobserve(f.target))},{threshold:0});function r(s,f){const _=qe(s,y);if(!_)return;const{url:m,external:p,download:R}=ye(_,H);if(p||R)return;const x=le(_);if(!x.reload)if(f<=x.preload_data){const k=X(m,!1);k&&Ae(k)}else f<=x.preload_code&&oe(se(m))}function a(){t.disconnect();for(const s of y.querySelectorAll("a")){const{url:f,external:_,download:m}=ye(s,H);if(_||m)continue;const p=le(s);p.reload||(p.preload_code===Me.viewport&&t.observe(s),p.preload_code===Me.eager&&oe(se(f)))}}S.after_navigate.push(a),a()}function Q(e,i){return e instanceof te?e.body:n.hooks.handleError({error:e,event:i})??{message:i.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{je(()=>(S.after_navigate.push(e),()=>{const i=S.after_navigate.indexOf(e);S.after_navigate.splice(i,1)}))},before_navigate:e=>{je(()=>(S.before_navigate.push(e),()=>{const i=S.before_navigate.indexOf(e);S.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(O||!T)&&(C=!1)},goto:(e,i={})=>re(e,i,[]),invalidate:e=>{if(typeof e=="function")E.push(e);else{const{href:i}=new URL(e,location.href);E.push(t=>t.href===i)}return Re()},invalidate_all:()=>(K=!0,Re()),preload_data:async e=>{const i=new URL(e,Ne(document)),t=X(i,!1);if(!t)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);await Ae(t)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const i=new URL(location.href),{branch:t,route:r}=h;if(!r)return;const a=await Oe(h.branch.length,t,r.errors);if(a){const s=await Y({url:i,params:h.params,branch:t.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:r});h=s.state,M.$set(s.props),_e().then(Se)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(M.$set({form:null,page:{...V,form:e.data,status:e.status}}),await _e(),M.$set({form:e.data}),e.type==="success"&&Se())},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{var a;let r=!1;if(Le(),!P){const s={from:{params:h.params,route:{id:((a=h.route)==null?void 0:a.id)??null},url:h.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};S.before_navigate.forEach(f=>f(s))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Le()}),(i=navigator.connection)!=null&&i.saveData||We(),y.addEventListener("click",t=>{var k;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=qe(t.composedPath()[0],y);if(!r)return;const{url:a,external:s,target:f,download:_}=ye(r,H);if(!a)return;if(f==="_parent"||f==="_top"){if(window.parent!==window)return}else if(f&&f!=="_self")return;const m=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||_)return;if(s||m.reload){$e({url:a,type:"link"})?P=!0:t.preventDefault();return}const[R,x]=a.href.split("#");if(x!==void 0&&R===location.href.split("#")[0]){if(h.url.hash===a.hash){t.preventDefault(),(k=r.ownerDocument.getElementById(x))==null||k.scrollIntoView();return}if(J=!0,be(I),e(a),!m.replace_state)return;J=!1,t.preventDefault()}ce({url:a,scroll:m.noscroll?ee():null,keepfocus:m.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:m.replace_state??a.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),y.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const f=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(we(f,H))return;const _=t.target,{keep_focus:m,noscroll:p,reload:R,replace_state:x}=le(_);if(R)return;t.preventDefault(),t.stopPropagation();const k=new FormData(_),u=a==null?void 0:a.getAttribute("name");u&&k.append(u,(a==null?void 0:a.getAttribute("value"))??""),f.search=new URLSearchParams(k).toString(),ce({url:f,scroll:p?ee():null,keepfocus:m??!1,redirect_chain:[],details:{state:{},replaceState:x??f.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[q]){if(t.state[q]===I)return;const a=B[t.state[q]];if(h.url.href.split("#")[0]===location.href.split("#")[0]){B[I]=ee(),I=t.state[q],scrollTo(a.x,a.y);return}const s=t.state[q]-I;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=t.state[q]},blocked:()=>{history.go(-s)},type:"popstate",delta:s})}else if(!J){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{J&&(J=!1,history.replaceState({...history.state,[q]:++I},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&F.navigating.set(null)});function e(t){h.url=t,F.page.set({...V,url:t}),F.page.notify()}},_hydrate:async({status:e=200,error:i,node_ids:t,params:r,route:a,data:s,form:f})=>{N=!0;const _=new URL(location.href);({params:r={},route:a={id:null}}=X(_,!1)||{});let m;try{const p=t.map(async(k,u)=>{const d=s[u];return d!=null&&d.uses&&(d.uses=Ge(d.uses)),de({loader:n.nodes[k],url:_,params:r,route:a,parent:async()=>{const U={};for(let $=0;$<u;$+=1)Object.assign(U,(await p[$]).data);return U},server_data_node:pe(d)})}),R=await Promise.all(p),x=l.find(({id:k})=>k===a.id);if(x){const k=x.layouts;for(let u=0;u<k.length;u++)k[u]||R.splice(u,0,void 0)}m=await Y({url:_,params:r,branch:R,status:e,error:i,form:f,route:x??null})}catch(p){if(p instanceof Fe){await G(new URL(p.location,location.href));return}m=await ie({status:p instanceof te?p.status:500,error:await Q(p,{url:_,params:r,route:a}),url:_,route:a})}Pe(m)}}}async function Je(n,o){const l=new URL(n);l.pathname=ot(n.pathname),l.searchParams.append(yt,o.map(g=>g?"1":"0").join(""));const c=await fe(l.href);if(!c.ok)throw new te(c.status,await c.json());return new Promise(async g=>{var h;const y=new Map,E=c.body.getReader(),w=new TextDecoder;function b(N){return Xe(N,{Promise:T=>new Promise((C,O)=>{y.set(T,{fulfil:C,reject:O})})})}let S="";for(;;){const{done:N,value:T}=await E.read();if(N&&!S)break;for(S+=!T&&S?`
`:w.decode(T);;){const C=S.indexOf(`
`);if(C===-1)break;const O=JSON.parse(S.slice(0,C));if(S=S.slice(C+1),O.type==="redirect")return g(O);if(O.type==="data")(h=O.nodes)==null||h.forEach(P=>{(P==null?void 0:P.type)==="data"&&(P.uses=Ge(P.uses),P.data=b(P.data))}),g(O);else if(O.type==="chunk"){const{id:P,data:J,error:K}=O,M=y.get(P);y.delete(P),K?M.reject(b(K)):M.fulfil(b(J))}}}})}function Ge(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function Se(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const o=document.body,l=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),l!==null?o.setAttribute("tabindex",l):o.removeAttribute("tabindex");const c=getSelection();if(c&&c.type!=="None"){const g=[];for(let y=0;y<c.rangeCount;y+=1)g.push(c.getRangeAt(y));setTimeout(()=>{if(c.rangeCount===g.length){for(let y=0;y<c.rangeCount;y+=1){const E=g[y],w=c.getRangeAt(y);if(E.commonAncestorContainer!==w.commonAncestorContainer||E.startContainer!==w.startContainer||E.endContainer!==w.endContainer||E.startOffset!==w.startOffset||E.endOffset!==w.endOffset)return}c.removeAllRanges()}})}}}async function Et(n,o,l){const c=wt(n,o);Ye({client:c}),l?await c._hydrate(l):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Et as start};
