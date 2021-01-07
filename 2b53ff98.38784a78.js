(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.a.createElement(f,s(s({ref:t},l),{},{components:r})):n.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(113)),i={id:"import-data",title:"Online Database Migration from Amazon ElastiCache to Redis Enterprise Cloud Made Simple",sidebar_label:"Import Data",slug:"/guides/import-data/database-migration-aws-elasticache-redis-enterprise-cloud"},s={unversionedId:"guides/import/import-data",id:"guides/import/import-data",isDocsHomePage:!1,title:"Online Database Migration from Amazon ElastiCache to Redis Enterprise Cloud Made Simple",description:"Most of the database migration tools available today are offline in nature. They are complex and require manual intervention.",source:"@site/docs/guides/import/database-migration-aws-elasticache-redis-enterprise-cloud.mdx",slug:"/guides/import-data/database-migration-aws-elasticache-redis-enterprise-cloud",permalink:"/docs/guides/import-data/database-migration-aws-elasticache-redis-enterprise-cloud",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/website/docs/guides/import/database-migration-aws-elasticache-redis-enterprise-cloud.mdx",version:"current",sidebar_label:"Import Data"},c=[],l={toc:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Most of the database migration tools available today are offline in nature. They are complex and require manual intervention. "),Object(o.b)("p",null,"If you want to migrate your data from Amazon ElastiCache to Redis Enterprise Cloud, for example, the usual process is to back up your ElastiCache data to an Amazon S3 bucket and then import your data using the Redis Enterprise Cloud UI. This process can require painful downtime and could result in data loss. Other available techniques include creating point-in-time snapshots of the source Redis server and applying the changes to the destination servers to keep both the servers in sync. That might sound like a good approach, but it can be challenging when you have to maintain dozens of scripts to implement the migration strategy. "),Object(o.b)("p",null,"So we\u2019ve come up with a different approach:"))}u.isMDXComponent=!0}}]);