"use strict";(self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[]).push([[87],{246:(e,t,l)=>{var a=l(8934),r=l(9631),n=l(7358),s=l(1890),o=l(7322),i=l(419),u=l(7673),c=l(4481),d=l(928).f,p=l(8438),v=n.Symbol,g=v&&v.prototype;if(r&&i(v)&&(!("description"in g)||void 0!==v().description)){var f={},h=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:c(arguments[0]),t=u(g,this)?new v(e):void 0===e?v():v(e);return""===e&&(f[t]=!0),t};p(h,v),h.prototype=g,g.constructor=h;var m="Symbol(test)"==String(v("test")),w=s(g.toString),b=s(g.valueOf),_=/^Symbol\((.*)\)[^)]+$/,y=s("".replace),x=s("".slice);d(g,"description",{configurable:!0,get:function(){var e=b(this),t=w(e);if(o(f,e))return"";var l=m?x(t,7,-1):y(t,_,"$1");return""===l?void 0:l}}),a({global:!0,forced:!0},{Symbol:h})}},4260:(e,t)=>{t.Z=(e,t)=>{const l=e.__vccOpts||e;for(const[a,r]of t)l[a]=r;return l}},8485:(e,t,l)=>{l.d(t,{Z:()=>u});var a=l(3673),r=l(2323);function n(e,t){return(0,a.wg)(),(0,a.iD)("p",{class:(0,r.C_)(e.$q.screen.lt.md?"text-h4":"text-h2")},[(0,a.WI)(e.$slots,"default")],2)}var s=l(4260);const o={},i=(0,s.Z)(o,[["render",n]]),u=i},1087:(e,t,l)=>{l.r(t),l.d(t,{default:()=>O});l(246);var a=l(3673),r=l(1959),n=l(2323),s=(l(9377),l(6245),l(2236)),o=l(908),i=l(7657);const u=(0,o.L)({name:"QCard",props:{...s.S,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const l=(0,a.FN)(),n=(0,s.Z)(e,l.proxy.$q),o=(0,r.Fl)((()=>"q-card"+(!0===n.value?" q-card--dark q-dark":"")+(!0===e.bordered?" q-card--bordered":"")+(!0===e.square?" q-card--square no-border-radius":"")+(!0===e.flat?" q-card--flat no-shadow":"")));return()=>(0,a.h)(e.tag,{class:o.value},(0,i.KR)(t.default))}});var c=l(9992);const d=(0,o.L)({name:"QCardActions",props:{...c.jO,vertical:Boolean},setup(e,{slots:t}){const l=(0,c.ZP)(e),n=(0,r.Fl)((()=>`q-card__actions ${l.value} q-card__actions--`+(!0===e.vertical?"vert column":"horiz row")));return()=>(0,a.h)("div",{class:n.value},(0,i.KR)(t.default))}}),p={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},v={xs:2,sm:4,md:8,lg:16,xl:24},g=(0,o.L)({name:"QSeparator",props:{...s.S,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=(0,a.FN)(),l=(0,s.Z)(e,t.proxy.$q),n=(0,r.Fl)((()=>!0===e.vertical?"vertical":"horizontal")),o=(0,r.Fl)((()=>` q-separator--${n.value}`)),i=(0,r.Fl)((()=>!1!==e.inset?`${o.value}-${p[e.inset]}`:"")),u=(0,r.Fl)((()=>`q-separator${o.value}${i.value}`+(void 0!==e.color?` bg-${e.color}`:"")+(!0===l.value?" q-separator--dark":""))),c=(0,r.Fl)((()=>{const t={};if(void 0!==e.size&&(t[!0===e.vertical?"width":"height"]=e.size),!1!==e.spaced){const l=!0===e.spaced?`${v.md}px`:e.spaced in v?`${v[e.spaced]}px`:e.spaced,a=!0===e.vertical?["Left","Right"]:["Top","Bottom"];t[`margin${a[0]}`]=t[`margin${a[1]}`]=l}return t}));return()=>(0,a.h)("hr",{class:u.value,style:c.value,"aria-orientation":n.value})}}),f=(0,o.L)({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const l=(0,r.Fl)((()=>"q-card__section q-card__section--"+(!0===e.horizontal?"horiz row no-wrap":"vert")));return()=>(0,a.h)(e.tag,{class:l.value},(0,i.KR)(t.default))}});var h=l(9754),m=l(8485);const w={class:"text-primary text-center"},b=(0,a._)("br",null,null,-1),_=(0,a.Uk)("Projects"),y=(0,a._)("br",null,null,-1),x=(0,a._)("p",{class:"text-h6"},"repos on my github",-1),q=(0,a._)("br",null,null,-1),S={key:0},k=(0,a._)("br",null,null,-1),$=(0,a._)("br",null,null,-1),z=(0,a._)("br",null,null,-1),U=(0,a._)("p",{class:"text-h6"},"fetching content from github",-1),F=(0,a._)("br",null,null,-1),B={key:1},D={class:"flex flex-center q-gutter-x-xl q-pa-sm row"},Z=(0,a._)("br",null,null,-1),C={class:"text-primary text-body1 text-weight-bold"},W={key:0,class:"text-grey"},j=(0,a._)("div",{style:{height:"53px"}},null,-1),H={class:"absolute-bottom"},K=(0,a.Uk)("view"),L=(0,a._)("br",null,null,-1),Q={setup(e){let t=(0,r.iH)([]),l=(0,r.iH)(!1),s=(0,r.iH)({languages:{}});async function o(){const e=await fetch("https://api.github.com/users/vieruuuu/repos"),a=await e.json();t.value=a;for(let l=0;l<t.value.length;l++){const{language:e}=t.value[l];null!==e&&(s.value.languages[e]?s.value.languages[e]++:s.value.languages[e]=1)}l.value=!0}return o(),(e,o)=>{const i=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)("div",w,[b,(0,a.Wm)(m.Z,null,{default:(0,a.w5)((()=>[_])),_:1}),y,x,q,(0,r.SU)(l)?((0,a.wg)(),(0,a.iD)("div",B,[(0,a._)("div",D,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(s).languages,((e,t)=>((0,a.wg)(),(0,a.iD)("p",{key:t.key,class:"text-h6"},(0,n.zw)(t)+": "+(0,n.zw)(e),1)))),128))]),Z,(0,a._)("div",{class:(0,n.C_)([{"q-pa-xl":e.$q.screen.gt.md},"flex flex-center q-gutter-md row"])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(t),(e=>((0,a.wg)(),(0,a.j4)((0,r.SU)(u),{key:e.key,flat:"",bordered:"",class:"text-white",style:{width:"300px"}},{default:(0,a.w5)((()=>[(0,a.Wm)((0,r.SU)(f),null,{default:(0,a.w5)((()=>[(0,a._)("div",C,(0,n.zw)(e.name),1),null!==e.language?((0,a.wg)(),(0,a.iD)("div",W," lang: "+(0,n.zw)(e.language),1)):(0,a.kq)("",!0)])),_:2},1024),null!=e.description?((0,a.wg)(),(0,a.j4)((0,r.SU)(f),{key:0,class:"text-body1 q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.description),1)])),_:2},1024)):(0,a.kq)("",!0),j,(0,a._)("div",H,[(0,a.Wm)((0,r.SU)(g)),(0,a.Wm)((0,r.SU)(d),null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{type:"a",target:"_blank",class:"text-primary",href:e.html_url,flat:"","no-caps":""},{default:(0,a.w5)((()=>[K])),_:2},1032,["href"])])),_:2},1024)])])),_:2},1024)))),128))],2)])):((0,a.wg)(),(0,a.iD)("div",S,[k,$,z,U,F,(0,a.Wm)((0,r.SU)(h.Z),{color:"primary",size:"3em",thickness:2})])),L])}}},R=Q,O=R}}]);