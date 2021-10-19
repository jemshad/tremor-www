"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[4555],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,g=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43009:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={},u="stats",l={unversionedId:"scripting/tremor-query/functions/aggr/stats",id:"scripting/tremor-query/functions/aggr/stats",isDocsHomePage:!1,title:"stats",description:"The stats module contains functions for aggregating statistical measures of various events.",source:"@site/docs/scripting/tremor-query/functions/aggr/stats.md",sourceDirName:"scripting/tremor-query/functions/aggr",slug:"/scripting/tremor-query/functions/aggr/stats",permalink:"/docs/next/scripting/tremor-query/functions/aggr/stats",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/docs/scripting/tremor-query/functions/aggr/stats.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"aggr",permalink:"/docs/next/scripting/tremor-query/functions/aggr"},next:{title:"win",permalink:"/docs/next/scripting/tremor-query/functions/aggr/win"}},c=[{value:"Size\xb6",id:"size",children:[]},{value:"Functions",id:"functions",children:[{value:"count()",id:"count",children:[]},{value:"min(number)",id:"minnumber",children:[]},{value:"max(number)",id:"maxnumber",children:[]},{value:"sum(number)",id:"sumnumber",children:[]},{value:"var(number)",id:"varnumber",children:[]},{value:"stdev(number)",id:"stdevnumber",children:[]},{value:"mean(number)",id:"meannumber",children:[]},{value:"hdr(number, array)",id:"hdrnumber-array",children:[]},{value:"dds(number, array)",id:"ddsnumber-array",children:[]}]}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stats"},"stats"),(0,i.kt)("p",null,"The stats module contains functions for aggregating statistical measures of various events."),(0,i.kt)("h2",{id:"size"},"Size\xb6"),(0,i.kt)("p",null,"When using stats aggregate functions size in memory becomes an important factor from a capacity planning perspective. The exact size of a window using aggregates depends on three main factors:"),(0,i.kt)("p",null,'The size of the dimension identifier. I.e. if the window is identified by the string "window" it will require that amount of memory related to this. If it is identified by an array of 10.000 elements all reading "window" it will use (about) 10.000 times that size.\nThe unit size of each aggregate used in the window. We will try to give an estimate of size for each aggregate but please be aware that those are not always exact as they can depend on the data they hold.\nThe number of groups, if grouping is configured. Each group will maintain a separate window of data\nFor aggregates we\'ll provide an "order of magnitude" and a growth rate if applicable.'),(0,i.kt)("p",null,"For example Fixed, 10 bytes indicate that the size doesn't grow and is in the order of two digit bytes. We try to give pessimistic estimates where possible."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"count"},"count()"),(0,i.kt)("p",null,"Counts the number of events aggregated in the current windowed operation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"size: Fixed, 10 bytes")),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"integer")),(0,i.kt)("h3",{id:"minnumber"},"min(number)"),(0,i.kt)("p",null,"Determines the smallest event value in the current windowed operation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"size: Fixed, 10 bytes")),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h3",{id:"maxnumber"},"max(number)"),(0,i.kt)("p",null,"Determines the largest event value in the current windowed operation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"size: Fixed, 10 bytes")),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h3",{id:"sumnumber"},"sum(number)"),(0,i.kt)("p",null,"Determines the arithmetic sum of event values in the current windowed operation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"size: Fixed, 10 bytes")),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h3",{id:"varnumber"},"var(number)"),(0,i.kt)("p",null,"Calculates the sample variance of event values in the current windowed operation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"size: Fixed, 100 bytes")),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"float")),(0,i.kt)("h3",{id:"stdevnumber"},"stdev(number)"),(0,i.kt)("p",null,"Calculates the sample standard deviation of event values in the current windowed operation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"size: Fixed, 100 bytes")),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"float")),(0,i.kt)("h3",{id:"meannumber"},"mean(number)"),(0,i.kt)("p",null,"Calculates the stastical mean of the event values in the current windowed operation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"size: Fixed, 100 bytes")),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"float")),(0,i.kt)("h3",{id:"hdrnumber-array"},"hdr(number, array)"),(0,i.kt)("p",null,"Uses a High Dynamic Range ( HDR ) Histogram to calculate all basic statistics against the event\nvalues sin the current windowed operation. The function additionally interpolates percentiles or\nquartiles based on a configuration specification passed in as an argument to the aggregater\nfunction."),(0,i.kt)("p",null,"The HDR Histogram trades off memory utilisation for accuracy and is configured internally to\nlimit accuracy to 2 significant decimal places."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"size: Fixed, 100 Kilo Bytes (note: this strongly depends on configuration, and can be estimated\nmore correctly with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/HdrHistogram/HdrHistogram#footprint-estimation"},"this formula"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'aggr::stats::hdr(event.value, ["0.5","0.75","0.9","0.99","0.999"])\n')),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"record")," (all values are integers)"),(0,i.kt)("h3",{id:"ddsnumber-array"},"dds(number, array)"),(0,i.kt)("p",null,"Uses a Distributed data-stream Sketch ( DDS (",(0,i.kt)("a",{parentName:"p",href:"http://www.vldb.org/pvldb/vol12/p2195-masson.pdf"},"paper"),") Histogram to calculate count, min, max, mean\nand quartiles with quartile relative-error accurate over the range of points in the histogram.\nThe DDS histogram trades off accuracy ( to a very low error and guaranteed low relative error )\nand unlike HDR histograms does not need bounds specified."),(0,i.kt)("p",null,"size: Fixed, 10 Kilo Bytes (estimate based on ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1908.10693.pdf"},"this paper"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'aggr::stats::hdr(event.value, ["0.5","0.75","0.9","0.99","0.999"])\n')),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"record")," (all values are floats)"))}m.isMDXComponent=!0}}]);