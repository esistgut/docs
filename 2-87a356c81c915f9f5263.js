(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{160:function(e,t,n){var i=n(6),r=n(161),o=n(27).f,s=n(163).f,a=n(58),l=n(76),c=i.RegExp,u=c,p=c.prototype,f=/a/g,h=/a/g,g=new c(f)!==f;if(n(18)&&(!g||n(26)(function(){return h[n(4)("match")]=!1,c(f)!=f||c(h)==h||"/a/i"!=c(f,"i")}))){c=function(e,t){var n=this instanceof c,i=a(e),o=void 0===t;return!n&&i&&e.constructor===c&&o?e:r(g?new u(i&&!o?e.source:e,t):u((i=e instanceof c)?e.source:e,i&&o?l.call(e):t),n?this:p,c)};for(var d=function(e){e in c||o(c,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},m=s(u),b=0;m.length>b;)d(m[b++]);p.constructor=c,c.prototype=p,n(19)(i,"RegExp",c)}n(82)("RegExp")},161:function(e,t,n){var i=n(11),r=n(165).set;e.exports=function(e,t,n){var o,s=t.constructor;return s!==n&&"function"==typeof s&&(o=s.prototype)!==n.prototype&&i(o)&&r&&r(e,o),e}},162:function(e,t,n){var i=n(81),r=n(56),o=n(38),s=n(77),a=n(29),l=n(78),c=Object.getOwnPropertyDescriptor;t.f=n(18)?c:function(e,t){if(e=o(e),t=s(t,!0),l)try{return c(e,t)}catch(n){}if(a(e,t))return r(!i.f.call(e,t),e[t])}},163:function(e,t,n){var i=n(80),r=n(57).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,r)}},165:function(e,t,n){var i=n(11),r=n(5),o=function(e,t){if(r(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,i){try{(i=n(21)(Function.call,n(162).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return o(e,n),t?e.__proto__=n:i(e,n),e}}({},!1):void 0),check:o}},167:function(e,t,n){(function(t){n(187),e.exports=Object.freeze({docPagesDirectory:t+"/src/pages/docs/",outlinePath:t+"/config/outline.yaml",current:"current",versions:["master","2.3","2.2","2.1"],currentVersion:"2.4",masterVersion:"2.5",siteUrl:"https://api-platform.com"})}).call(this,"/")},168:function(e,t,n){var i=n(12),r=n(20),o=n(26);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],s={};s[e]=t(n),i(i.S+i.F*o(function(){n(1)}),"Object",s)}},169:function(e,t,n){n(189),n(192),e.exports.getPrefixedVersion=function(e){return Number.isNaN(Number(e))?e:"v"+e}},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(0),o=a(r),s=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleTriggerClick=n.handleTriggerClick.bind(n),n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n.continueOpenCollapsible=n.continueOpenCollapsible.bind(n),n.setInnerRef=n.setInnerRef.bind(n),e.open?n.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:n.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height "+e.transitionTime+"ms "+e.easing,hasBeenOpened:!1,overflow:"hidden",inTransition:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),i(t,[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"===t.height&&!0===this.state.shouldSwitchAutoOnNextCycle&&window.setTimeout(function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})},50),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"closeCollapsible",value:function(){this.setState({shouldSwitchAutoOnNextCycle:!0,height:this.innerRef.offsetHeight,transition:"height "+(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime)+"ms "+this.props.easing,inTransition:!0})}},{key:"openCollapsible",value:function(){this.setState({inTransition:!0,shouldOpenOnNextCycle:!0})}},{key:"continueOpenCollapsible",value:function(){this.setState({height:this.innerRef.offsetHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,isClosed:!1,hasBeenOpened:!0,inTransition:!0,shouldOpenOnNextCycle:!1})}},{key:"handleTriggerClick",value:function(e){e.preventDefault(),this.props.triggerDisabled||(this.props.handleTriggerClick?this.props.handleTriggerClick(this.props.accordionPosition):!0===this.state.isClosed?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?o.default.createElement("span",{className:this.props.classParentString+"__trigger-sibling"},this.props.triggerSibling):this.props.triggerSibling?o.default.createElement(this.props.triggerSibling,null):null}},{key:"handleTransitionEnd",value:function(){this.state.isClosed?(this.setState({inTransition:!1}),this.props.onClose()):(this.setState({height:"auto",overflow:this.props.overflowWhenOpen,inTransition:!1}),this.props.onOpen())}},{key:"setInnerRef",value:function(e){this.innerRef=e}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",i=this.props.triggerDisabled?"is-disabled":"",r=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,s=this.props.triggerTagName,a=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,l=this.props.classParentString+"__trigger "+n+" "+i+" "+(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),c=this.props.classParentString+" "+(this.state.isClosed?this.props.className:this.props.openedClassName),u=this.props.classParentString+"__contentOuter "+this.props.contentOuterClassName,p=this.props.classParentString+"__contentInner "+this.props.contentInnerClassName;return o.default.createElement("div",{className:c.trim()},o.default.createElement(s,{className:l.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;" "!==n&&"Enter"!==n||e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},r),this.renderNonClickableTriggerElement(),o.default.createElement("div",{className:u.trim(),style:t,onTransitionEnd:this.handleTransitionEnd},o.default.createElement("div",{className:p.trim(),ref:this.setInnerRef},a)))}}]),t}();l.propTypes={transitionTime:s.default.number,transitionCloseTime:s.default.number,triggerTagName:s.default.string,easing:s.default.string,open:s.default.bool,classParentString:s.default.string,openedClassName:s.default.string,triggerStyle:s.default.object,triggerClassName:s.default.string,triggerOpenedClassName:s.default.string,contentOuterClassName:s.default.string,contentInnerClassName:s.default.string,accordionPosition:s.default.oneOfType([s.default.string,s.default.number]),handleTriggerClick:s.default.func,onOpen:s.default.func,onClose:s.default.func,onOpening:s.default.func,onClosing:s.default.func,trigger:s.default.oneOfType([s.default.string,s.default.element]),triggerWhenOpen:s.default.oneOfType([s.default.string,s.default.element]),triggerDisabled:s.default.bool,lazyRender:s.default.bool,overflowWhenOpen:s.default.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),triggerSibling:s.default.oneOfType([s.default.element,s.default.func]),tabIndex:s.default.number},l.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},tabIndex:null},t.default=l},175:function(e,t,n){"use strict";n(89),n(83),n(79),n(160),n(28);var i=n(7),r=n.n(i),o=n(0),s=n.n(o),a=n(1),l=n.n(a),c=n(36),u=n(173),p=n.n(u),f=n(157),h=n.n(f),g=function e(t){var n=t.path,i=t.anchors,r=t.location;return s.a.createElement("ul",null,i.map(function(t){var i=n+"#"+t.id;return s.a.createElement("li",{key:i,className:h()("submenu-item__link",{current:""!==r.hash&&"#"+t.id===r.hash})},s.a.createElement(c.Link,{to:i},t.title),t.anchors&&s.a.createElement(e,{path:n,anchors:t.anchors,title:t.title,location:r}))}))},d=g;g.propTypes={path:l.a.string.isRequired,anchors:l.a.array.isRequired,location:l.a.object.isRequired};var m=function(e){var t=e.path,n=e.anchors,i=e.title,r=e.current,o=e.location;return n?s.a.createElement(p.a,{className:"submenu__item",openedClassName:"submenu__item open",open:r,triggerDisabled:!0,transitionTime:500,easing:"ease",trigger:s.a.createElement(c.Link,{to:t},i)},s.a.createElement("ul",null,n.map(function(e){var n=t+"#"+e.id;return s.a.createElement("li",{key:n,className:h()("submenu-item__link",{current:""!==o.hash&&"#"+e.id===o.hash})},s.a.createElement(c.Link,{to:n},e.title),e.anchors&&s.a.createElement(d,{path:t,anchors:e.anchors,title:e.title,location:o}))}))):s.a.createElement(c.Link,{className:h()({current:r}),to:t},i)};m.propTypes={path:l.a.string.isRequired,anchors:l.a.array,title:l.a.string.isRequired,current:l.a.bool,location:l.a.object},m.defaultProps={anchors:null,current:!1,location:null};var b=m,v=function(e){var t=e.item,n=e.location,i=e.current,r=e.onClick,o=e.version,a=t.items,l=t.path,u=t.title,f=""+o+l,g=f===i;return a?s.a.createElement(p.a,{className:"menu__item",openedClassName:"menu__item open",triggerDisabled:!0,transitionTime:500,open:g,easing:"ease",trigger:s.a.createElement("div",{className:"item__title",role:"presentation",onClick:function(){return r(f)}},s.a.createElement("h2",{key:f},u),s.a.createElement("i",{className:"icon-chevron-"+(g?"top":"down")}))},s.a.createElement("ul",{className:"menu-item__list"},a.map(function(e){var t="index"===e.id?"/docs/"+f+"/":"/docs/"+f+"/"+e.id+"/",i=t===n.pathname;return s.a.createElement("li",{key:t,className:h()("menu-item__link",{active:i})},s.a.createElement(b,{path:t,anchors:e.anchors,title:e.title,current:i,location:n,version:o}))}))):s.a.createElement("div",{className:"menu__item"},s.a.createElement(c.Link,{className:"item__title",to:"/docs/"+f+"/"},s.a.createElement("h2",{key:f},u)))};v.propTypes={item:l.a.object.isRequired,location:l.a.object.isRequired,current:l.a.string,onClick:l.a.func,version:l.a.string},v.defaultProps={current:null,version:"",onClick:function(){}};var y=v,C=n(167),N=n(169),O=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).updateLocation=function(e){t.setState(function(t){return Object.assign({},t,{locationWithHash:Object.assign({},e)})})},t.getItemByLocation=function(e){var t=C.versions.map(N.getPrefixedVersion).join("|"),n=new RegExp("docs/((("+t+")/)?.*?)(/|$)"),i=e.pathname.match(n);return i?i[1]:null},t.state={currentItem:null},t.toggleMenu=function(e){return t.setState(function(t){return Object.assign({},t,{currentItem:t.currentItem===e?null:e})})},t}r()(t,e);var n=t.prototype;return n.componentWillMount=function(){var e=this,t=this.props.location;"undefined"!=typeof window&&(window.addEventListener("scroll",this.handleScroll),window.addEventListener("click",this.handleScroll)),this.setState(function(n){return Object.assign({},n,{currentItem:e.getItemByLocation(t)})})},n.componentWillReceiveProps=function(e){var t=this;if(e.location.pathname!==this.props.location.pathname){var n=e.location;this.setState(function(e){return Object.assign({},e,{currentItem:t.getItemByLocation(n)})})}},n.handleScroll=function(){if(void 0!==document.querySelectorAll(".Collapsible.submenu__item.open")[0]){var e=document.querySelectorAll(".Collapsible.submenu__item.open")[0].querySelectorAll("a"),t=[];e.forEach(function(e,n){t[n]=document.getElementById(e.getAttribute("href").split("#")[1]),e.parentElement.classList.remove("current")});for(var n=e.length;0<n;n-=1)if(t[n]&&t[n].offsetTop<window.scrollY+2&&t[n].parentNode.offsetTop<window.scrollY+2)return void e[n].parentNode.classList.add("current")}},n.render=function(){var e=this,t=this.state.currentItem;return s.a.createElement("div",{className:"docs__menu openable"},this.props.nav.map(function(n){return s.a.createElement(y,{item:n,key:n.path,onClick:e.toggleMenu,current:t,location:e.props.location,version:e.props.version})}))},t}(o.Component);O.propTypes={location:l.a.object.isRequired,nav:l.a.array,version:l.a.string},O.defaultProps={nav:[],version:""};t.a=O},187:function(e,t,n){var i=n(11),r=n(188).onFreeze;n(168)("freeze",function(e){return function(t){return e&&i(t)?e(r(t)):t}})},188:function(e,t,n){var i=n(39)("meta"),r=n(11),o=n(29),s=n(27).f,a=0,l=Object.isExtensible||function(){return!0},c=!n(26)(function(){return l(Object.preventExtensions({}))}),u=function(e){s(e,i,{value:{i:"O"+ ++a,w:{}}})},p=e.exports={KEY:i,NEED:!1,fastKey:function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,i)){if(!l(e))return"F";if(!t)return"E";u(e)}return e[i].i},getWeak:function(e,t){if(!o(e,i)){if(!l(e))return!0;if(!t)return!1;u(e)}return e[i].w},onFreeze:function(e){return c&&p.NEED&&l(e)&&!o(e,i)&&u(e),e}}},189:function(e,t,n){"use strict";var i=n(6),r=n(29),o=n(15),s=n(161),a=n(77),l=n(26),c=n(163).f,u=n(162).f,p=n(27).f,f=n(190).trim,h=i.Number,g=h,d=h.prototype,m="Number"==o(n(88)(d)),b="trim"in String.prototype,v=function(e){var t=a(e,!1);if("string"==typeof t&&t.length>2){var n,i,r,o=(t=b?t.trim():f(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+t}for(var s,l=t.slice(2),c=0,u=l.length;c<u;c++)if((s=l.charCodeAt(c))<48||s>r)return NaN;return parseInt(l,i)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(m?l(function(){d.valueOf.call(n)}):"Number"!=o(n))?s(new g(v(t)),n,h):v(t)};for(var y,C=n(18)?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;C.length>N;N++)r(g,y=C[N])&&!r(h,y)&&p(h,y,u(g,y));h.prototype=d,d.constructor=h,n(19)(i,"Number",h)}},190:function(e,t,n){var i=n(12),r=n(22),o=n(26),s=n(191),a="["+s+"]",l=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),u=function(e,t,n){var r={},a=o(function(){return!!s[e]()||"​"!="​"[e]()}),l=r[e]=a?t(p):s[e];n&&(r[n]=l),i(i.P+i.F*a,"String",r)},p=u.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=u},191:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},192:function(e,t,n){var i=n(12);i(i.S,"Number",{isNaN:function(e){return e!=e}})}}]);
//# sourceMappingURL=2-87a356c81c915f9f5263.js.map