"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9661],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},94333:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={},s="status",l={unversionedId:"tremor-script/stdlib/cncf/otel/trace/status",id:"version-0.11/tremor-script/stdlib/cncf/otel/trace/status",isDocsHomePage:!1,title:"status",description:"The Status type defines a logical error model that is suitable for different",source:"@site/versioned_docs/version-0.11/tremor-script/stdlib/cncf/otel/trace/status.md",sourceDirName:"tremor-script/stdlib/cncf/otel/trace",slug:"/tremor-script/stdlib/cncf/otel/trace/status",permalink:"/docs/tremor-script/stdlib/cncf/otel/trace/status",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/versioned_docs/version-0.11/tremor-script/stdlib/cncf/otel/trace/status.md",tags:[],version:"0.11",frontMatter:{},sidebar:"version-0.11/tutorialSidebar",previous:{title:"spankind",permalink:"/docs/tremor-script/stdlib/cncf/otel/trace/spankind"},next:{title:"trace_id",permalink:"/docs/tremor-script/stdlib/cncf/otel/trace_id"}},p=[{value:"Functions",id:"functions",children:[{value:"ok()",id:"ok",children:[]},{value:"error(message)",id:"errormessage",children:[]}]}],d={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"status"},"status"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Status type defines a logical error model that is suitable for different\nprogramming environments, including REST APIs and RPC APIs."),(0,a.kt)("p",{parentName:"blockquote"},"IMPORTANT: Backward compatibility notes:"),(0,a.kt)("p",{parentName:"blockquote"},"To ensure any pair of senders and receivers continues to correctly signal and\ninterpret erroneous situations, the senders and receivers MUST follow these rules:"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Old senders and receivers that are not aware of ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," field will continue using\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"deprecated_code")," field to signal and interpret erroneous situation.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"New senders, which are aware of the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," field MUST set both the\n",(0,a.kt)("inlineCode",{parentName:"p"},"deprecated_code")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," fields according to the following rules:"),(0,a.kt)("p",{parentName:"li"},"  if code==STATUS_CODE_UNSET then ",(0,a.kt)("inlineCode",{parentName:"p"},"deprecated_code")," MUST be\nset to DEPRECATED_STATUS_CODE_OK."),(0,a.kt)("p",{parentName:"li"},"  if code==STATUS_CODE_OK then ",(0,a.kt)("inlineCode",{parentName:"p"},"deprecated_code")," MUST be\nset to DEPRECATED_STATUS_CODE_OK."),(0,a.kt)("p",{parentName:"li"},"  if code==STATUS_CODE_ERROR then ",(0,a.kt)("inlineCode",{parentName:"p"},"deprecated_code")," MUST be\nset to DEPRECATED_STATUS_CODE_UNKNOWN_ERROR."))),(0,a.kt)("p",{parentName:"blockquote"},"These rules allow old receivers to correctly interpret data received from new senders."),(0,a.kt)("ol",{parentName:"blockquote",start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"New receivers MUST look at both the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"deprecated_code")," fields in order\nto interpret the overall status:"),(0,a.kt)("p",{parentName:"li"},"  If code==STATUS_CODE_UNSET then the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"deprecated_code")," is the\ncarrier of the overall status according to these rules:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"if deprecated_code==DEPRECATED_STATUS_CODE_OK then the receiver MUST interpret\nthe overall status to be STATUS_CODE_UNSET.\n\nif deprecated_code!=DEPRECATED_STATUS_CODE_OK then the receiver MUST interpret\nthe overall status to be STATUS_CODE_ERROR.\n")),(0,a.kt)("p",{parentName:"li"},"  If code!=STATUS_CODE_UNSET then the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"deprecated_code")," MUST be\nignored, the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," field is the sole carrier of the status."))),(0,a.kt)("p",{parentName:"blockquote"},"These rules allow new receivers to correctly interpret data received from old senders.")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"ok"},"ok()"),(0,a.kt)("p",null,"Returns a success status code"),(0,a.kt)("h3",{id:"errormessage"},"error(message)"),(0,a.kt)("p",null,"Returns an error status code, with user defined error messsage"))}u.isMDXComponent=!0}}]);