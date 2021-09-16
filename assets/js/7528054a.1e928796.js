"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9189],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},57490:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={},s={unversionedId:"implemented/onramp-postgres",id:"implemented/onramp-postgres",isDocsHomePage:!1,title:"Onramp Postgres",description:"- Feature Name: rfc0008onramp_postgres",source:"@site/rfc/implemented/0008-onramp-postgres.md",sourceDirName:"implemented",slug:"/implemented/onramp-postgres",permalink:"/rfc/implemented/onramp-postgres",version:"current",sidebarPosition:8,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Pipeline Optimisations",permalink:"/rfc/implemented/pipeline-optimizations"},next:{title:"Modularity",permalink:"/rfc/implemented/modularity"}},p=[{value:"Summary",id:"summary",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Guide-level Explanation",id:"guide-level-explanation",children:[]},{value:"Reference-level Explanation",id:"reference-level-explanation",children:[]},{value:"Drawbacks",id:"drawbacks",children:[]},{value:"Rationale and Alternatives",id:"rationale-and-alternatives",children:[]},{value:"Prior Art",id:"prior-art",children:[]},{value:"Unresolved Questions",id:"unresolved-questions",children:[]},{value:"Future Possibilities",id:"future-possibilities",children:[]}],m={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Feature Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"rfc_0008_onramp_postgres")),(0,i.kt)("li",{parentName:"ul"},"Start Date: 2020-01-21"),(0,i.kt)("li",{parentName:"ul"},"Tremor Issue:\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-rfcs/issues/15"},"tremor-rs/tremor-runtime#0015")),(0,i.kt)("li",{parentName:"ul"},"RFC PR: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-rfcs/pull/14"},"tremor-rs/tremor-rfcs#0008"))),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Pull data from Postgres tables."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"We see use cases a function of features supported by PostgreSQL out of the box,\nas well as additional features introduced as extensions or otherwise packaged as\ncompletely separate products. Primary examples that we are looking at are ",(0,i.kt)("a",{parentName:"p",href:"https://www.timescale.com/"},"TimescaleDB")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.pipelinedb.com/"},"PipelineDB"),"."),(0,i.kt)("p",null,"The ultimate goal is to be able to reliably pipe in data from PostgreSQL core to Tremor engine."),(0,i.kt)("h2",{id:"guide-level-explanation"},"Guide-level Explanation"),(0,i.kt)("p",null,"PostgreSQL is a standard Tremor onramp. It is configured by passing in standard PostgreSQL connection string arguments, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"port"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dbname"),"."),(0,i.kt)("p",null,"In addition to connection string arguments, we require:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"interval")," in milliseconds that specifies the time we wait before executing the next query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"consume_from")," specifies the timestamp from which to backfill data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query")," in form of standard ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT")," query which retrieves rows from a table or view.")),(0,i.kt)("p",null,"Unlike other onramps implemented so far, PostgreSQL onramp will persist ",(0,i.kt)("inlineCode",{parentName:"p"},"consume_from")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"consume_until"),", allowing recovery from error conditions or other failures."),(0,i.kt)("p",null,"Example ",(0,i.kt)("inlineCode",{parentName:"p"},"onramp.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'id: db\ntype: postgres\ncodec: json\nconfig:\n  host: localhost\n  port: 5432\n  user: postgres\n  password: example\n  query: "SELECT id, name from events WHERE produced_at <= $1 AND produced_at >\n  $2"\n  interval_ms: 1000\n  dbname: sales\n  cache:\n    path: "/path/to/cache.json"\n    size: 4096\n')),(0,i.kt)("p",null,"Cache is a memory mapped region, either file-based or anonymous."),(0,i.kt)("h2",{id:"reference-level-explanation"},"Reference-level Explanation"),(0,i.kt)("h2",{id:"drawbacks"},"Drawbacks"),(0,i.kt)("p",null,"The onramp does not provide an implementation of all types Postgres supports and\nthe entirety of query language (for example, LISTEN/NOTIFY semantics)."),(0,i.kt)("h2",{id:"rationale-and-alternatives"},"Rationale and Alternatives"),(0,i.kt)("p",null,"As a starting point, or first implementation, supporting basic ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," statements with a time interval as additional ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," clause supports the major use case: ingesting rows from a table or view."),(0,i.kt)("p",null,"Alternative approach would utilize PostgreSQL ",(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/12/libpq-single-row-mode.html"},(0,i.kt)("em",{parentName:"a"},"single row mode"))," suitable for ingestion of results returned by queries that span a large number of rows. Ensuring ",(0,i.kt)("em",{parentName:"p"},"at-most-once")," ingestion of rows would be a potential problem and a time-consuming/API-breaking implementation."),(0,i.kt)("p",null,"Other approaches, such as trigger-based watches or binary log readers are also a\npossibility."),(0,i.kt)("h2",{id:"prior-art"},"Prior Art"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_integration"},"Data Integration"),"."),(0,i.kt)("h2",{id:"unresolved-questions"},"Unresolved Questions"),(0,i.kt)("h2",{id:"future-possibilities"},"Future Possibilities"),(0,i.kt)("p",null,"For users that utilise PostgreSQL as an event store, which seems to be a more\ncommon use case lately, support for ",(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/12/sql-notify.html"},(0,i.kt)("inlineCode",{parentName:"a"},"LISTEN/NOTIFY"))," would be essential to become one of modes of this onramp."),(0,i.kt)("p",null,"Support multiple queries in the same onramp."),(0,i.kt)("p",null,"More flexible means of specifying parameters."))}u.isMDXComponent=!0}}]);