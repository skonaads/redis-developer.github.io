(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(a),u=n,m=b["".concat(c,".").concat(u)]||b[u]||p[u]||i;return a?r.a.createElement(m,o(o({ref:t},l),{},{components:a})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},106:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},109:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(22),r=a(111);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+d:d}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},111:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},114:function(e,t,a){"use strict";var n=a(0),r=a(115);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},115:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},122:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(114),c=a(106),o=a(62),s=a.n(o),l=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,b=e.values,p=e.groupId,u=e.className,m=Object(i.a)(),h=m.tabGroupChoices,j=m.setTabGroupChoices,f=Object(n.useState)(o),A=f[0],O=f[1],g=n.Children.toArray(e.children);if(null!=p){var v=h[p];null!=v&&v!==A&&b.some((function(e){return e.value===v}))&&O(v)}var y=function(e){O(e),null!=p&&j(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},u)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":A===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":A===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}},123:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},154:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/spring-840a3a0aafc4886b3a2bb441b6d4beda.png"},155:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABUCAYAAADUKzhSAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAMCgAwAEAAAAAQAAAFQAAAAAmofVGQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAIxtJREFUeAHtXQmYXFWVvm+p6u6kO4jQonwoiCAknUSZhnRWaHAcBQcFpBHIANlIZsjiN87nrkwpIzoOLpBlICuEbUz7KZ+sDo6UZO1gi0A6REBANpUgDtm6u+ot8//3vltdVf1edVV1dQjMu0l1vXffveeee945555z7lJCxCmmQEyBmAIxBWIKxBSIKRBTIKZATIGYAjEFYgrEFIgpEFMgpkBMgZgCMQViCsQUiCkQUyCmQEyBmAIxBWIKxBSIKRBTIKZATIGYAjEFYgrEFIgpEFMgpkBMgZgCMQViCsQUiCkQUyCmQEyBmAIxBWIKxBSIKXDIU8CoGsP2dlvs3Tu4fne3C5he1XBLVzREa6sdWqS7Oys6Oizx7LNm6PNaZBb0DW1VmzpQUePZfTxo1UmalUoG+maKzlJFRuJZJ9+jj//G/NaV4XQPafbopg/6qfSZTsijsrNS7Q/Zr+x9ajB/RUBY2b2A7QHXQyONBBOWTYwRJsFI4EHBTgDvMNhheSPcxQHwKZGq6l36EJoBKJVeVV234jYrrqC7Yo2f/Bnf948whJGlhsC783xfNODPA+LJrqdRjoSr1UhAPH3R0tJoiaaLfd+zDMOQ0g4ccClcd9yx6+xdL57pud5YwzB7UbyqF6f7V/htoGt+0nONe8Wubc+LE9rGmHXiJuS9A+WgeYCBID6SDsE3ISgcC/N9DzQ7gId/xPdO1/C7xI6ux1laJo6s6bTSnhzROjtdu+W0j/vC+JInjDcAM6Rf+Qyj8SA0fa3xYF5xWZ2ny8jnHJEamyz7q3se37xt9unfe6/pJS/wfXMfQEaPfHgnhu8l8EpeW7t50YaBfrONspN817OnLf2MaYgjADCLV8m88AS2w/OkXZ+4beUvFoA++h2EFy/OLXtYy1UMXpDv+X8v6ur/wXfA/3z/YBFhJ4SR6fsJrj4t2ttNvMjaCADNHpg4lt/Y4dclVwnXgTToNm3hZ/ofB6Os9lsmfU3UNZyRwymH9HAv0CPTFpaf2Q3OeF7UeaOQcaFhJdA4nkW/noiGVQXUFKYHiOPbfgP2u8nt6VopmZ+jAU06ZSa5YPwTRLL+DEPTOgJqzbKJmGWJvqx7DGGu23/Hn+Y2zLl4TMORk3uze4VpQgZYZlBSmZaZEHOnL2tcs8lY29GSSnb2pDKDioZk6LKzpy2bN7rusFWOlw1IG05gz3dEQ/Iwsaf3z3eB+ZdztEpBEYeAjsyqXACam2UvPeF9x8z0XQrI1Baq51kXmlmc7U9sOwYv8iXk12YUULY3GW2uIBN4HjS8sHHvCMdvAHmuwT2Hmz2GA1r7eO7hee2SKzy/Hu31SZBWwsOY8zoE8V24B0LBe6qsPc1CNjjqb3zTvMlsaVvimeIK0d3VDQVC/GUZQ5h9voNBwfPYfi37FYGxj3fq12UMV/UXwjhmysyz3uh79SmMrsf4rs/8qJGADFgHzFfNmbZi89rNV/2uvT1lp9MpNapFtJhCmVQ6lZk1ZenJ4KGbDmSgzIXoxydkxOMj4ZiG1fBG76s96zYtPl/mVPEnCng0qE7pGJli5yM9GHs2CtOi7UpiJNFpD5qywXR9CoaAXRtFJPm4rD80A8jbE9paYexMAxOQKRrwQb7ZgPsXXbHvAQULQ6UcjQRxquHHT0q4HthzIEEApWYiQ1bz0fgZ6IMDYcpCEFpM3/i1NW5ShxwJ+vtZBgnm3PDaqhA/A+UNjHim7O+5rfNH/WDr53qBxuWWIVGqA1Ia/+JvPPOdhF0HnD2YQQJdSTnglXA1zt7hGZhfCohpGRsSFupK0xKCFNoO8RMNqAeSeZfhWtBpTolURdqf9fJfKO/LSb5mbNMwVgcvRmszE9oXMIwrJCAO49VpxwE8gmiJ6Yk5EDbma03iove8v1309OzjBUgZRQCOUqxX5cdAPXQx8DvYUkQiHdiGbo/f+pOfz2vShs+Y+EITEATYu3itlrXBmtB2jti6lSMdEoZ1mlrR+Os2+K3bYfnilI+fLqvL8zu4hm3B/gZ/7m5amZnfelNi7eaFD2W9zL/VJ0aTmUuYNYaddfsyKDdx9oylSwloQYkokn42F2VRZwLrogppEpF8p84eDZJ4/7Lm4SWP0nSqNupUjQAI2KcklHDN3p9Cc/0JjEFkyXymgBcKxhxnj538tyyDoXw4o4ApbeHW1sMA6SLAJkTC49tJ0BfwTPMWZpZMJgxa04KpUe3HTApUhVIMNHJoa3BLoKZVG7o9fusP21f5lg2HAg6TNKalEGjBJXw4OBACD0HPsVOPZUu4HSXbN836iD7oNhR8BbcYyWL8grKSJsXXdQX93dtqBGFGY92mRV/vy+7fkrDqk2iAQhyRjCTKuUmzYdHcGSvOQ/0shai4MPP4DMx/no2yrAM2GlQur142aY9K9DsH7l+7adH3U6mUWa6PkQcjd1lCynJlwi44CtBR2y9aJt0Bs+dzYEZyJxCHtjQwMJnOXNz/Iqxy2Xk0obq7PavfutC37CPRBgWPODtkBN9zHhBPbN2F6FASo0CxRoKQSHtoLwIF/ygM9w3hQVCH1uJh6IEjswnXsbfJhxn01SoY0TkaWYbndRle9qsYmBvRjmbqYngw0/wxiF6NB35nox8T5cDl0+6Wwk3HOgMGHAUX53voxIWe5d5jZftfRr3+khERhGnQvT60/z7U+88AHi5pmlqW73kPWL77XQQwDgO+UpsUIyfvGVlx3ITr+1vlvVJ4fkfHBquz8yIXPbs0K/p2wR+oB0z46NGWhCsHNW/9/Bk3nbRy44I/ahiEy+uVnRdlZ7Uvf7fv+OtZFqqN9CkgrsRB/XFh9ycyzv7XnYxxGbN6esZFlc2rFn1ZrQAIcTwmcLq7oYGtm03X+RyaoNSS2DY1M9KnxEnTjoYB+AquOdJEMQTLhift/Powf5QJUFAORuZq+Rb73wci9BQ8kzckjS8ybs8xPypjsmlw/agc8FJRd/DaMPgJ7yV/5yP/E1UtJP9LCCdfBGFYhfpjIAjsDkc4jm6M737ah+8jnuji7OKzIfXDs06Y0WzWZVbkPQSTGgxQPO3s6HooL7+cS0VFlCTz09xYs2XRH2DaXJm06m7N+AfwXsNCsxK05fluNmk1NGXcA3cip31DZwfCwGBypOBamI5/R9JGGaeXYZ8I7S9DusJCNM5x3MvWb1/0Fzl6QIBkS1X+qV4AEJ9GmyY08BN+S9svDdM6CyYK8wgzCw3WYPrOpaDOddJngCavCMcgBi7GTzoVGm2qNK0IGzF/NGvj/g9wfu+WMA97tRRsQ0x8+QjxuHhVjhTNzaXKlkaRETDV75BylH04y0zHtdeL46Q9LW8H/dEz6NCs7o5tG8TEUx+DPt4OJoUQSD+GCgNOsZUwPedyINwtpkxpEHV1pV/2Sy9Z4pln+oXdf3jAY4VN+4hkMQ2FH8sQx0Dz81YnmhuM6qxLL75tzvTlH62zGy/vd/Zh9DVU33XBge9Exu2FP9B4Bsr/q7HJ+IY2hYxuIztn2tKvw+4/E6YP+xbB/ATmZ1Eu2Z/Z94ObNy++T5tOA81Ud1W9ALC9wESB57sag9ZZeSgoZ9gQlyPvOhCSnctpkrxy0Ze7d0stYVL7w3QOTCzAhaK14A277m3S7JGmGJcTdEfD8k3FOD09/CanVpuG8JmCyaTTmrPRglLQtCEZe+vW3xnjJs3zTWuDQIxRlqBZAesC2H5M3ucc4oL6xTeogJSAE0s9W5wQb5JZ5eNXDEHet6eFl8bV6CZ3/v49+0+3rORx8N8R6ZHKL6xOAgzuYX4gNff0ZQ+tfHjBwywEu3+aaSS+2ZvdT5unFC9mERlK9mf3/3bN5sW0NsTK7vkwMxbwclhpiBc6BGztDI+x7gJDvgINhk4EGkw5wxPslklKMCpzhk0ZBvzwhzHTanQo51fOQJI5pHngecYtErvuc13BtTWlEqZwSz1+E5/5QaTHdHdu70Q/H8s5xhj2FCnFB8T4qR9QOJa5/shPhPeX9jVToFwUzMr/phBupAZeev+SflOYlzAcCdA03aKUC9uVz+B/bOho2ZDkKIIZY4RJpQNByyEcZ9iacAoSWbcfLol5MbFlXRSPaotFyk7DEwB2ihpYaafbMWSjYSPoDL4NKDEDGrzSFMwfWNnkhTCljoRZAGkHMIYNMRqg5/fJ5RZyjiCltFqlbRxK5XPzJVhGIrspNTXeO/prwtzznWMluu1qVDwUUGfkhv7A6s1XbfPc7NX1CfjsMFNK4GbByaUpdFTTO19de7zTvAYmzdHIy+J9ltL+LvwDvH7jnzipxjaHmlQrgcOgR8MVACGdYYD1fO+WwPnNc4YhC75xnmg57d1SoytneBASgzK08yuMOUXOr0HuN01/tawzTE02qN03OQO68JkCFKhYIQWWYXLN0SGX4A+A4X1j7ebF1/RnD2yEs0s/oJQQyNCoZdgz4cxe3pfZR+VVwu4XmTqEPOEcd67duHCVjCCVuayiXGINXwCkU4ihWc4MiwfVKCBj20ojWPZoRGsukQjlNF0J9PTMb8tppyEMMiXn/NIegKeN++fcpHuvhJBOc7SpJEUNs5XAGMGyUYOZnP0ewXarBo3QaKfkIcyRz+x3+3oRGk1AbKM6woYs13UQLskyMlWK/1wISbLf6X05M+rAbFZs6dwJhVDbVAqB8lsKhmY1M1xQDRqbtKhgZjjn/EL7q5nfgMlhUpkS3VulU03TiyZYOclk2FIm/V1OrYNeBjbu+wsapRGELmJk+GtB/iF0o0Oj6x5e+CL8gXmYIMPrli89Gkua/dL0jyzCoDdeNtjHMGbe+t+f30+fg75HZI0qH5SyvcoHGWhid1/9z8zRvS9CU78XRpGLd0eNzUmYD4kJU85AyPRX8GCswBwKg6+c3wnTDxdeNs/5lQ4PnV/XM6z1smLOTAoDU5Rny5lqqJCWhBhOGLRWq1uL0BNyU0w3FKL4qIqC8uWDeqSf72HazXheVkm3gwHS8vJQ+sPQaEouZrvqjjnTl30codHLhgiNDoG+n21INCb7nAPXrNu48Fe1CnmGNVobAeDLkuHIdJ+aGTa/KFzG8Dipo2aGMVk2Fxm/CkMilxeEVS3P4czvEWB42JNy9ZUD59f2XZg+O7b8HnOIgDvkLioN1hePbnxN3gyeLdZl3rzvYxDff6mz1xrbdg7mcU9TJp+MqMjZZfhAT8k9CBLD2mvAmnUcoVHCGt3kXbl/7/7ptpl8PxzcUqHRqKYR8mygr7AFSx2uBmthGQbXYo1MqpUAKGd4YGb4i0BXmyictCL252Pd+1HQ/n/GNTWcJBgf5JLW6oavnV+YADIp51cYayQkmlzp4En0F+rQ4vEbzZZJ6yCivUPYnOGQ2LLPEKy51xP1V4ue9D6EfOmZhpdnLs04tZw5ugwnmpqafNCjV4xtfQ/We64tcvgDnyer/B2pYOR8SjTMN/HJQGh0Qf/s6csuQVBkmwqNypdQglh5SMN3wCoahDz7erE8VvqN7e3fsNLpEpOKedWruaydANAZVrO3uzAz/HP4qx8D45NfubaFM8ON2PzxGXD9DXoCrQBhvROqZcokcNxk1CX3Aj86v4h9es7vsevrXtGD5TjlO7+AYXBh1xUFbVV6wyVFDqJ1/W98G1X3ATcIQAnSKfyI/9Cppe1MaIPb4N8cJZdFC2musa6a73AhGEyBmSSvD9E/OjSKBXNdc2cs+wpCntf2ZfcyhF2CWHmd4XYyLIXud/rmrt/02RcY8uzEHoG8EjW/LA+xcpvVDqwQnBlWM5iqLvQoWN/3ZuH2hmBmOBSqaXhwfoGWWviGUUQ6vyZMqvVydrUyTag0jzSlQpsrJ1MxI/Q6drwNHrUKIASLuFpbx4gD9liMOKFCYJv+GGwdHY+Hn0Ag5CMSBPcE5OLhXAyXqBNu9kaxa/tTcjRJd46YGVDQhWHeqJWZvrFmo/Ft+ANn2Fbdxxw3Q0WIUbRkQsizkbO9N6/bvOhO5VOMLPMTm9oKgHaG+/9yt1l3xB/gDB8bOMM0g+gMnyLGTZohdm7fGIwW0qIBHjBp0o4ocH4lwchw1IRZz/JvJcIQHl1H3pb5h/3UzJg/HEflsQyfMQ4DHDAESDNoqNaCsF5fYrxpm5uk0MsqGpyqj3GekxkIlqAJ0oVm1sC7yEABgPmd5739o+S0fwUj3lAIHpTnHS3fSHT2iAzW312NnlERagLk0z6HCzIdy0zC6d33+0Rfcr58EPgUuUIjdEFbvJZJOcNckOUbmBkG+FxMWM0MI1Q6RzaYP4kVHHViMfJj2e+UJpP2Ezjza4h7xePbn5NCE+Y7DN0DEp595YfX+hOVp8uTNQPNBT+g3CUVPqLiMhKIJc4M62D+H98DHzI9RzhPLptFWdkGhADLnU0rifwD2OdwtngeQYW8rZHA+62QDDUKoDe+890AYaVMQrBnp/GxsWqUixsuphlV7e6uEPBDZpEBapukrQou9eTMMDuunWEyENu6QJwyo1lqfMWQ1Op6eNfOr8ZL6kZwyGqJZL7QyIyy/hAHzk5W+8nIV4Tt/mBOwiojWdihBhnSa29UDQoVE77lSMFRicJFoqjZU5o9nvOCZxinyn0ONPf0CREo9FZICFlKqwKO8DX1iaYzHC/DvkWaPyBGti4xGsOs+wXMKP+adn+1u7uqoY9mtGrqRtQJnGHYrtDc98uVnOolg4+xpseyx5iZzEWyMsOeaubXF+Mmt2HSow1CQibjRAnXElFonnZ3bL9Plq+MGcB+kufegD6e4nnWiQjMtmAeYaz8CHMcbLJxBdf59yyn7lnuRJhgk8W7R8md2iKRjPIFlHm2c+uj0PrfQV9JXwp3HvPLnqg/cgcZ+sjdYSzjuTd69e5YsWPbkyqsfOhGffJ6kbvU8frZU5eelTCTXwuWOpQys7G7S4Y8H1y7cdF/FO7u8g0ufcgBH6GLUshV32TOGcYyaV+cA0CaAaAVafKK2chbLjV/U5PspMnQZ77zq5c9e+4tKKt3oClNWRlmnmg0d4qtW4L9tZVVLio90I+iBwW3EGqvs/PLRkvbOMOyPwlzh5GMZEEZ9sn3D+DzMvTDPdhYtEpqfRZSEbFq+lrUxMG7JfOmUguyM9tuGAO9c4e0fJVvE6Vkg91dvf+LLc8ziane3YWQqplCZmcnR0cGFsKDCbXo3cgIgHaG69x7zD7jOWjy99PbwyuXzrBvWK1i/JSpYsfWLXKIH+z8KtPJdfs917xddpTLnkut+S9Fjb9kRuNxr2IsdaxLqeLhz1qAU4qPhjaDdu6Upo3f3PBpY3cvljhb49B9MjQ1PRMmuejceNd5O7alZA7/KMb33mpmD1HXzFtvm+uTiVFHYc9umNCzaC7x/CDPca5Yt2nJbjl6YHcXtX4KO89mnX79iaZvXbl2o/EFJVypqFE3B6+ai5ERgHyN3dLGGPfX82aGOcOJHanuHPRoC5E2XZhEduJwRntwSybRM7/3iF1dz6uIUUqZF6xQadImi1rKUCUh5cGcUdqsEKOeca5ob5YnvHktrWfjRIsemGON0PbsA4UD68Rld76MlbKY23jkEcFdWmk4vW/BJOP1nRdl5k5bvgjM/6l+R+7uKh7x8nvGEyOSfZn9S2H3/0ybTihgcMEbKW169vVj6o84e8605Y+lUgtvl23UeCUoESrvhbJkpUlqbIZszPUQc75tMja1Z+AM+xeKE05pJliYwvPAHLzU+MjBE0cVDMf5JbziNLT2Lq5Rzb2cqUZYV27W734BnfokeklI7B8FkDfY2G8msYDs53K5+EDEB4/eOokRG0Z95s344UQcY7gUzE/kS9juODMIu7uw1OEJHJ+4hIWP7v6j1AZg8gTMH2/OjGWfr7Mbzt7T9xpDQzfPbV9+AttolxthWKN2STNc7SDmIGHIooPbs/UZRADvC5xhOoR0hrPQ+IdZSfvvRMuUE7AV8FRoRDIG8VFrYDx3l9OzVR14VZnzm8PgTbsITs+TWzYhBE4PNqL73kI4u2R8PQLBHMQxCKZ1OISA/VRzIQNK4E1Dv9yG4cTgQKsz5aFXrm//yEYEF0m943Ag6LuJM4MYJffk7i454QWmzwnS9BWtoMd3YUIRggthscEtZR2wFd5k6dwRFAA0nHOGocmV7tXtQcPjDAXTnAVb4PNBtIZaQDGImk+6RaLOUOBbOXEBHmx7r6drBUy8FRACmp16eh9GsMsjUD4Eh/nHed0kHQ75lDvQavryG2HSnOy4/exXKbPahWbHS/YXrtu4ZKcKeaYcaH2TgkRTyDO8/zLVygkKUlIesJUcdcrs6ct/SILoNnldi6QZshawBsPQznBz/X1cyyPDmvJUBxAJy4Tg238Ela4EY7BuYCJh9afr9IEQt0uAwbyCvH6r/gnoACFY6LtOGgxPVamFIIn+ZhAtusAcP/lbyPcQAi3FRIcEFci8nLSaM23ZRQhlzs9k9+MlGiXtfu7ugmb/6ZpNi1cU7O5qlyO/cBoyN9VZo09wvHxBCg7Ysuo+ixMkPsk2KSi1IsLICoB2hmnC+OLWwplh2QVqunxtJ/f8QjJ+JnY88qKMipS/7LkcmuS3VU75WpXxg/kOkKHhXAj/C7T/AVxKPr4p9DT9vmKNb7tMrpWi/3CIJs2889pvOAZvb500abiJPzoFu7sO/Kk/681isZYWtbuLzMxzQaHhL8GJb7PhQ4QKkjw0yzBunfeRVUfJRXc1miMohXR0dyp5EqzdkWt5cgvcAoNIwcl3TDE6kpI4c7SWicuXZerQAlftd/VYcbUszTksp8baiLNh/8Pkw1ivRkSFD0ZFzN6tFxPbJueOfKm+xcE1ZWhhcDZyDDqYZEZ+AmczoFlxed/ALjDpx3iOeWfSqh+F1R480CqKl+Aq0MiFZW/6M2/vWrJHMn0Kdj/mDtQosuIkoLaSgoSyYXDUAVt2wxivv/9OYhRsj4zAsRjn6PuwxqJLV/dEOcNPPPIspjTuyXOGNTTdCe387sTpZQ/Kh7Vyfke7wSSY3ERDgav2ox1YjXtl3zwfSUaGunbi9MELgxGR/Sc+fBfUfggL49QL7BGQI4FaC1RZOxWUDmZbfZ60QGbkJzh1QR6FWAwq+Kkkf86M5d+E3T89ow6yLWWSZOuTo3FgeObbqx9e/EsyP9sg3Ffufo+KFhnelaOShzVCkPogKlE8yc3xPBzrTPz2wNcYLWLUqBi/Su8Pjq2Zc4b9NVDw5wHJsE6qDSCGe7PsRGXLnsP6LUcTPBhj9dkPYzMOTl6W7eaPOGH1wvKwetlv8ixrkdzWmbQtkdEmfFjxEnl0itE3t3v7Xeb4SV/Fsudv0QdADZo82DuhI0PiAUjbKZgboJlEeg1P+AAAoZeC8CQ1PbQ54YtZ05adA0n8EK8hgr/FEST3c78vywQCAYs0Za9M0+6//kyc7MBDcolTKSbE7q56hjy7sLvrK4Sdf6BV7trf/w1Mm51vm4njh9hFZvMQLdu0r5l9+vJfYh/ylnyBIvxK08ERAO0MY00PfgTiaTjDJ+J9qj3DCmMwpXR+ez3bukNmDWfmt5AKNo65b+Vr5f/qEtAzcaCzk2mWAeucSVUdNKnZsa3T29F5LegxHk7xJXlCoCNDE42WST/2e7ZfELSiR4pKG4UBAgGC5oEdcr+s3Jz2NWNj0VobAN8CRj0JB8/Kx1yZibX8v0Ovr1iXXtSlyv6rm04bzlXtyxv7HLU0HfV4XEUUD2FNH3d39WZMU8jdXdJ36MSq4Fwy/BSEKpX+4l7gcanaRSbhAWzo2+LwwFHSNj3/zo4p3z955dYFvcOZKQ7TxDn0anih1vJILQYbFxSBNs7XaJz5ZXN3ice2vgxVA6Km8p8PDxXa29ydVvXHyyCKRZzl0D08ZHTtTr5kgcjQpYD9G8wHcATQ8IPIUOJ8c3zbtSw2jMiQGlk990mcQ/oTttm+O2VQqyOqcir8rW2ItZ+EcGOWM7j88Jp5YPBtLMOyqfa0fEHvEuP6AEIuCkQHKJQRibu7eBSpfyVMn+cYNeKIUlw4Bdh8xl1kmCj/EkwcFtF0KC5OW9HGKJGBw/y+JiuxRhZIyxFyUNlyMg6WAOQ2soAVbwu0HYdOxeRSQ2HO2PdUh8rBvLIyfHnVf7ABUr5rnOVXWbMlS3tK0EEE04JTjJ9c4pk6hZEhHgP/Zatl0uXVR4bUPgwwotT+LS0dSW3SYPXtKuzYEnA+ydRsO/dhHhmYZdgLxOld6bzKiS/xE2x6Z3aEkvK5u8vOZntvW7tpyXqOIHqPACsVJz5LYS5gzaZF/w5z6edcIYoykUKAZzgv6EAWP5Jxydxpy66gEBG3Yrjl3B88ASCxODOMX1mEFOc7w4ggYEmw7+5w9NHigclUTgeKyjDiwMS//PAF6W9e59/n5+vyOk9/qzoSKrIKtziyDJJcw5Hfrsou5y/te/o6j2951fMNrJqVIGlSaE2JGBEtRfwIyNggMlSWU4xoSgBMokHzJ1hJ2NyMc8qQZp9+/VTY3B+Gtkdb2Dc9ONXzGcvMmbpsCh77maakHAXgwP+WZhITMCYB5EfdiqxtyoNsnx81xp3HMu1pSXdeRqaeDnXOP7yhmRnnwOs4FEsrgxx83Q6/AciEU0wBvXHW5B8cR8c6cOgj2wh7cDAFIDczDG5fKZEx5MQJfikFdPWDzd9kCNXBMHxL5/FseZpX1GRca8+IwsA3r/Pv9XOdx3udp791HYQrATdnJMuwqvrdMBxjINvjlz7bvpKNOzoytHNbFyYGZ0laYC9hgIsaeQAb/3/BZSN5TnEILVIqz09ypAINiJpfB1gEp46GEcfJMqZnncyz9vGc/BQxsmEfKMoAzFhW2t//V1kOP+H0WkCqhIWfHdD/QB6DjOti2wcwvoSH58pRowxzluYRy/LcfxgEM4ExyW1LmLkWdEs4LNKw5e4knElaj3nFH3MECUysiL7Ibg/6QwocvBSENZ2ecx4UE+7H+h/GwXEAeiZrindYj0lEBnaHlY+X+uE+/LaW/8/4NcVr8T6x3RAvtVBjlw8vtKQHprSflI/qnNe9bKIdv1BJQQMDoQ8uftDOCZis0hFMnVdkuj3bbkG06lHo/1HgeI4+5E+8UEyVm/zVGQwHKlEDhqSUqtP/jhe9ujcmqbrgEz9re31GDyt8cO973LSqGZgYZfGLKrtnj2zf8Pb+xvGcKeDygjMb8SM5+KEXB4ezm6/fvHXxLuWcqpCnarL0X2pxMnJq08IH5k69fgJ2isLMNxy4cKFIYmQ0sOnGNYXV8HTbOxtFl9gDgqGR0OKhjZdfMrR6zTOJT8TLHbKt4dQdEnhegaHaGep5HqhBl1TZiokHPcplDAc+d1lJTYmfI51g2dbjiL2zPcLkpzAhUIEBDidyZCes2fLZHSqKM9iRLayk7oYTmZFCUMaoEdJuxbQZ3OkQqCOSRX+ApgJXTvJbac1qmT9AMWXC4CQTjUzKxzEff7Ym+9AOZgq0cLUY5MPVptQAjcisQwmIarkYzgDuBpiTH2/O9KX3YN/uJ/Dj170YLhmy0fxAu6gPxxM29GX33YMY/rlFzM+ZY6u5eVzufe3evdPgvf4Oi/hUQhK2p2Gxnr7W3/mwmAfHnqNTDp/856WuD64JlI9J5E8N5Req9BrMV4bDVSnU0PKh+KdDi1aUGQq3IgiqcDQcMolk9KRnzwGD/7oh0fRefLOeNrEs5DVAMF6o86y5fMC1O9iiqJOcOdY3I/E9XAEqFyct8eWWj8u9TSigNfr89uuOdJz65VCeF9hWvdywgBAobf6fIiJzFZ1SXfZt0vWCbsQCUECO/183+Yw9d+qyY7Fg8WRSwHSNXfwlSF7nl+F9nGIKvK0oQGeVTF7cKebxWXH+2+0+HgHebm+0yv4w8iLahWJ4+FG4L8/ZrrK9uFpMgZgCMQViCsQUiCkQUyCmQEyBmAIxBWIKxBSIKRBTIKZATIGYAjEFYgrEFIgpEFMgpkBMgZgCMQViCsQUiCkQUyCmQEyBmAIxBWIKxBSIKRBTIKZATIGYAjEFYgoMiwL/B0EimzaLfyxmAAAAAElFTkSuQmCC"},156:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/micronaut-dc77eb63819d66d67d3af937bc6e7061.svg"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(105)),c=a(122),o=a(123),s=(a(109),{id:"index-java",title:"Java and Redis",sidebar_label:"Java",slug:"/develop/java/"}),l={unversionedId:"develop/java/index-java",id:"develop/java/index-java",isDocsHomePage:!1,title:"Java and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Java.",source:"@site/docs/develop/java/index-java.mdx",slug:"/develop/java/",permalink:"/redis-developer/docs/develop/java/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/develop/java/index-java.mdx",version:"current",sidebar_label:"Java",sidebar:"mainSideBar",next:{title:"Node.js and Redis",permalink:"/redis-developer/docs/develop/node/"}},d=[{value:"Getting Started",id:"getting-started",children:[{value:"Getting Started with Jedis",id:"getting-started-with-jedis",children:[]},{value:"Getting Started with Lettuce",id:"getting-started-with-lettuce",children:[]}]},{value:"Ecosystem",id:"ecosystem",children:[]},{value:"More developer resources",id:"more-developer-resources",children:[]},{value:"Redis University",id:"redis-university",children:[{value:"Redis for Java Developers",id:"redis-for-java-developers",children:[]}]}],b={toc:d};function p(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Java."),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"Java community has built many client libraries that you can find ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/clients#java"}),"here"),". For your first steps with Java and Redis, this article will show how to use the two main libraries: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/redis/jedis"}),"Jedis")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://lettuce.io/"}),"Lettuce"),"."),Object(i.b)("p",null,"The blog post \u201c",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://redislabs.com/blog/jedis-vs-lettuce-an-exploration/"}),"Jedis vs. Lettuce: An Exploration"),"\u201d will help you to select the best for your application; keeping in mind that both are available in Spring & SpringBoot framework."),Object(i.b)(c.a,{defaultValue:"jedis",values:[{label:"Jedis",value:"jedis"},{label:"Lettuce",value:"lettuce"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"jedis",mdxType:"TabItem"},Object(i.b)("h3",{id:"getting-started-with-jedis"},"Getting Started with Jedis"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add dependencies Jedis dependency to your Maven (or Gradle) project file:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>redis.clients</groupId>\n    <artifactId>jedis</artifactId>\n    <version>3.4.0</version>\n</dependency>\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Import the required classes"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"import redis.clients.jedis.*;\n")))),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a Connection Pool"),Object(i.b)("p",{parentName:"li"},"Once you have added the Jedis library to your project and imported the necessary classes you can create a connection pool. "),Object(i.b)("p",{parentName:"li"},"You can find more information about Jedis connection pool in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/redis/jedis/wiki/Getting-started#basic-usage-example"}),"Jedis Wiki"),". The connection pool is based on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://commons.apache.org/proper/commons-pool/apidocs/org/apache/commons/pool2/impl/GenericObjectPoolConfig.html"}),"Apache Common Pool 2.0 library"),"."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'JedisPool jedisPool = new JedisPool(new JedisPoolConfig(), "localhost", 6379);\n')))),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Write your application code"),Object(i.b)("p",{parentName:"li"},"Once you have access to the connection pool you can now get a Jedis instance and start to interact with your Redis instance."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'    // Create a Jedis connection pool\n    JedisPool jedisPool = new JedisPool(new JedisPoolConfig(), "localhost", 6379);\n\n    // Get the pool and use the database\n    try (Jedis jedis = jedisPool.getResource()) {\n\n        jedis.set("mykey", "Hello from Jedis");\n        String value = jedis.get("mykey");\n        System.out.println( value );\n        \n        jedis.zadd("vehicles", 0, "car"); \n        jedis.zadd("vehicles", 0, "bike");\n        Set<String> vehicles = jedis.zrange("vehicles", 0, -1);\n        System.out.println( vehicles );\n\n    }\n    \n    // close the connection pool\n    jedisPool.close();\n')))),Object(i.b)("p",null,'Find more information about Java & Redis connections in the "',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/redis-developer/redis-connect/tree/master/java/jedis"}),"Redis Connect"),'".')),Object(i.b)(o.a,{value:"lettuce",mdxType:"TabItem"},Object(i.b)("h3",{id:"getting-started-with-lettuce"},"Getting Started with Lettuce"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add dependencies Jedis dependency to your Maven (or Gradle) project file:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>io.lettuce</groupId>\n    <artifactId>lettuce-core</artifactId>a\n    <version>6.0.1.RELEASE</version>\n</dependency>\n")))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Import the Jedis classes"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"import io.lettuce.core.RedisClient;\nimport io.lettuce.core.api.StatefulRedisConnection;\nimport io.lettuce.core.api.sync.RedisCommands;\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Write your application code"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'    RedisClient redisClient = RedisClient.create("redis://localhost:6379/");\n    StatefulRedisConnection<String, String> connection = redisClient.connect();\n    RedisCommands<String, String> syncCommands = connection.sync();\n    \n    syncCommands.set("mykey", "Hello from Lettuce!");\n    String value = syncCommands.get("mykey");\n    System.out.println( value );\n\n    syncCommands.zadd("vehicles", 0, "car"); \n    syncCommands.zadd("vehicles", 0, "bike");\n    List<String> vehicles = syncCommands.zrange("vehicles", 0, -1);\n    System.out.println( vehicles );\n\n    connection.close();\n    redisClient.shutdown();\n')))),Object(i.b)("p",null,'Find more information about Java & Redis connections in the "',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/redis-developer/redis-connect/tree/master/java/lettuce"}),"Redis Connect"),'".'))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"ecosystem"},"Ecosystem"),Object(i.b)("p",null,"As developer you can use the Java client library directly in your application, or you can frameworks like: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://spring.io/"}),"Spring"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://vertx.io/"}),"Vert.x"),", and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://micronaut.io/"}),"Micronaut"),"."),Object(i.b)("div",{class:"row text--center"},Object(i.b)("div",{class:"col "},Object(i.b)("h4",{id:"develop-with-spring"},"Develop with Spring"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Spring logo",src:a(154).default})),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://spring.io/projects/spring-data-redis"}),"Spring Data Redis"),", part of the larger Spring Data project. It provides easy access to Redis from Spring applications.")),Object(i.b)("div",{class:"col"},Object(i.b)("h4",{id:"develop-with-vertx"},"Develop with Vert.x"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Vert.x logo",src:a(155).default})),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://vertx.io/introduction-to-vertx-and-reactive/"}),"Eclipse Vert.x")," is a framework to build reactive applications on the JVM. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://vertx.io/docs/vertx-redis-client/java/"}),"Vert.x-redis")," is redis client to be used with Vert.x. ")),Object(i.b)("div",{class:"col"},Object(i.b)("h4",{id:"develop-with-micronaut"},"Develop with Micronaut"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Micronaut logo",src:a(156).default})),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://micronaut.io/"}),"Micronaut")," is a framework for building microservices and serverless applications. The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://micronaut-projects.github.io/micronaut-redis/snapshot/guide/"}),"Micronaut Redis")," extension provides the integration with Redis."))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"more-developer-resources"},"More developer resources"),Object(i.b)("div",{class:"row"},Object(i.b)("div",{class:"col"},Object(i.b)("h4",{id:"sample-code"},"Sample Code"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/redis-developer/brewdis"}),"Brewdis - Product Catalog (Spring)")),"\nSee how to use Redis and Spring to build a product catalog with streams, hashes and RediSearch"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/redis-developer/brewdis"}),"Redis Stream in Action (Spring)")),"\nSee how to use Spring to create multiple producer and consumers with Redis Streams"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/redis-developer/vertx-rate-limiting-redis"}),"Rate Limiting with Vert.x")),"\nSee how to use Redis Sorted Set with Vert.x to build a rate limiting service."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/redis-developer/vertx-rate-limiting-redis"}),"Redis Java Samples with Lettuce")),"\nRun Redis Commands from Lettuce")),Object(i.b)("div",{class:"col col--1"}),Object(i.b)("div",{class:"col"},Object(i.b)("h4",{id:"technical-articles"},"Technical Articles"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"https://redislabs.com/blog/getting-started-with-redis-streams-and-java/"}),"Getting Started with Redis Streams and Java (Lettuce)"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"https://redislabs.com/blog/jedis-vs-lettuce-an-exploration/https://redislabs.com/blog/jedis-vs-lettuce-an-exploration/"}),"Jedis vs. Lettuce: An Exploration"))))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"redis-university"},"Redis University"),Object(i.b)("h3",{id:"redis-for-java-developers"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"https://university.redislabs.com/courses/ru102j/"}),"Redis for Java Developers")),Object(i.b)("p",null,"Redis for Java Developers teaches you how to build robust Redis client applications in Java using the Jedis client library. The course focuses on writing idiomatic Java applications with the Jedis API, describing language-specific patterns for managing Redis database connections, handling errors, and using standard classes from the JDK. The course material uses the Jedis API directly with no additional frameworks. As such, the course is appropriate for all Java developers, and it clearly illustrates the principles involved in writing applications with Redis."),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/CmQMdJefTjc",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}p.isMDXComponent=!0}}]);