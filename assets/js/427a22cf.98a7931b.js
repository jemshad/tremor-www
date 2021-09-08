"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[4646],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4914:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return m},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Continuous Benchmarking in Tremor",slug:"continuous-benchmarking",author:"Akshat Agarwal",author_url:"https://twitter.com/humancalico",author_title:"Tremor Mentee",tags:["benchmarking"],description:"How we implemented a continuous benchmarking pipeline in Tremor.",draft:!1,hide_table_of_contents:!1},c=void 0,l={permalink:"/tremor-new-website/blog/continuous-benchmarking",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/blog/2021-07-14-continuous-benchmarking.md",source:"@site/blog/2021-07-14-continuous-benchmarking.md",title:"Continuous Benchmarking in Tremor",description:"How we implemented a continuous benchmarking pipeline in Tremor.",date:"2021-07-14T00:00:00.000Z",formattedDate:"July 14, 2021",tags:[{label:"benchmarking",permalink:"/tremor-new-website/blog/tags/benchmarking"}],readingTime:5.975,truncated:!0,authors:[{name:"Akshat Agarwal",title:"Tremor Mentee",url:"https://twitter.com/humancalico"}],nextItem:{title:"Property Based Testing of Tremor Script",permalink:"/tremor-new-website/blog/2021/07/06/Blog-Rohit-Property-Based-Testing"}},u={authorsImageUrls:[void 0]},m=[{value:"Why?",id:"why",children:[]}],p={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hey I'm Akshat. Recently I had the chance to implement a continuous benchmarking\nsystem for Tremor under the ",(0,a.kt)("a",{parentName:"p",href:"https://mentorship.lfx.linuxfoundation.org"},"LFX Mentorship"),"\nprogram."),(0,a.kt)("h3",{id:"why"},"Why?"),(0,a.kt)("p",null,"So why do we need continuous benchmarking? Let's step back and ask what\nTremor is and what problem is it trying to solve."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tremor is an event processing system originally designed for the needs of\nplatform engineering and infrastructure. Tremor has been running in production\nsince October 2018, processes 10 terabytes of data per day, or 10 billion\nmessages per minute and 10 million metrics per second. Tremor achieves this\nwith 10x footprint reduction in bare metal infrastructure and cloud based\ndeployments in 6 ( and counting ) systems at Wayfair, whilst reducing memory\nusage by 10x and delivering better quality of service under conditions when\nour network is saturated at peak eCommerce trading lifecycles. As a secondary\nbenefit, tremor is relatively low latency and relatively high throughput\nhowever this is an explicit non-goal of the project. Tremor is built for users\nthat have a high message volume to deal with and want to build pipelines to\nprocess, route, or limit this event stream. ",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,a.kt)("p",null,"Tremor emerged at Wayfair because the existing data distribution tools weren\u2019t\nperformant enough for their needs. So for\nthe kind of problem Tremor is trying to solve it makes sense to track its\nperformance over time and try to make it better or at least prevent any major\nregressions.",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"See /docs/",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);