!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("react-redux"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","prop-types","react-redux","react-dom"],t):"object"==typeof exports?exports["react-redux-popup"]=t(require("react"),require("prop-types"),require("react-redux"),require("react-dom")):e["react-redux-popup"]=t(e.React,e.PropTypes,e.ReactRedux,e.ReactDOM)}("undefined"!=typeof self?self:this,function(e,t,n,r){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e){return{popupId:e,type:u}}function o(e){return{popupId:e,type:s}}function i(){return{type:c}}function a(){return{type:l}}n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return l}),t.f=r,t.e=o,t.g=i,t.h=a;var s="CLOSE_POPUP",u="OPEN_POPUP",c="PORTAL_INITIALIZED",l="REFRESH_POPUP_POSITION"},function(e,t,n){"use strict";(function(e){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){h=e}function s(){return h}t.c=a,t.b=s;var u=n(1),c=n.n(u),l=n(0),p=(n.n(l),n(4)),f=(n.n(p),n(2)),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=void 0,m=function(t){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),d(n,[{key:"componentDidMount",value:function(){this.props.portalInitialized()}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return e.createElement("div",{ref:a})}}]),n}(l.Component);m.propTypes={portalInitialized:c.a.func.isRequired},t.a=Object(p.connect)(null,{portalInitialized:f.g})(m)}).call(t,n(0))},function(e,t){e.exports=n},function(e,t,n){"use strict";(function(e){function r(e,t,n){return function(){if(t)return void t(e);n(Object(s.e)(e))}}n.d(t,"b",function(){return p});var o=n(1),i=n.n(o),a=n(4),s=(n.n(a),n(2)),u=n(12),c=n(3),l=n(6),p=function(e){return e.popup},f=function(t){return e.createElement(l.a,{getPortalElement:t.getPortalElement,isOpen:!!t[t.id],isPortalReady:t.isPortalReady,render:function(){return e.createElement(u.a,{anchor:t.anchor,className:t.className,closePopup:r(t.id,t.closePopup,t.dispatch),getRect:t.getRect,offset:t.offset,refreshPosition:t.refreshPosition,render:t.render,style:t.style})},transitionEnterTimeout:t.transitionEnterTimeout,transitionExitTimeout:t.transitionExitTimeout,transitionName:t.transitionName})};f.propTypes={anchor:i.a.oneOf(["bottom","left","right","top"]).isRequired,className:i.a.string,closePopup:i.a.func,dispatch:i.a.func.isRequired,getPortalElement:i.a.func.isRequired,getRect:i.a.func.isRequired,id:i.a.string.isRequired,isPortalReady:i.a.bool.isRequired,offset:i.a.number.isRequired,refreshPosition:i.a.bool.isRequired,render:i.a.func.isRequired,style:i.a.object,transitionEnterTimeout:i.a.number.isRequired,transitionExitTimeout:i.a.number.isRequired,transitionName:i.a.oneOfType([i.a.string,i.a.shape({appear:i.a.string,appearActive:i.a.string,enter:i.a.string,enterActive:i.a.string,exit:i.a.string,exitActive:i.a.string})]).isRequired},f.defaultProps={anchor:"bottom",getPortalElement:c.b,isPortalReady:!1,offset:0,refreshPosition:!1,transitionEnterTimeout:100,transitionExitTimeout:100,transitionName:"popup"},t.a=Object(a.connect)(p)(f)}).call(t,n(0))},function(e,t,n){"use strict";(function(e){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(14),s=n.n(a),u=n(1),c=n.n(u),l=n(0),p=(n.n(l),n(7)),f=(n.n(p),n(3)),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(t){function n(e){r(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.el=document.createElement("div"),t}return i(n,t),d(n,[{key:"componentDidMount",value:function(){var e=this.props.getPortalElement();e&&e.appendChild(this.el)}},{key:"componentWillUpdate",value:function(e){this.props.isPortalReady!==e.isPortalReady&&e.isPortalReady&&this.props.getPortalElement().appendChild(this.el)}},{key:"componentWillUnmount",value:function(){var e=this.props.getPortalElement();e&&e.removeChild(this.el),this.el=null}},{key:"render",value:function(){return Object(p.createPortal)(e.createElement(s.a,{classNames:this.props.transitionName,in:this.props.isOpen,timeout:{enter:this.props.transitionEnterTimeout,exit:this.props.transitionExitTimeout},unmountOnExit:!0},this.props.render()),this.el)}}]),n}(l.PureComponent);t.a=h,h.propTypes={getPortalElement:c.a.func.isRequired,isOpen:c.a.bool.isRequired,isPortalReady:c.a.bool.isRequired,render:c.a.func.isRequired,transitionEnterTimeout:c.a.number.isRequired,transitionExitTimeout:c.a.number.isRequired,transitionName:c.a.oneOfType([c.a.string,c.a.shape({appear:c.a.string,appearActive:c.a.string,enter:c.a.string,enterActive:c.a.string,exit:c.a.string,exitActive:c.a.string})]).isRequired},h.defaultProps={getPortalElement:f.b,isOpen:!1,isPortalReady:!1}}).call(t,n(0))},function(e,t){e.exports=r},function(e,t,n){"use strict";function r(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,t.transitionTimeout=r;var o=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.timeoutsShape=i.default.oneOfType([i.default.number,i.default.shape({enter:i.default.number,exit:i.default.number}).isRequired]),t.classNamesShape=i.default.oneOfType([i.default.string,i.default.shape({enter:i.default.string,exit:i.default.string,active:i.default.string}),i.default.shape({enter:i.default.string,enterActive:i.default.string,exit:i.default.string,exitActive:i.default.string})])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);n.d(t,"closePopup",function(){return r.e}),n.d(t,"openPopup",function(){return r.f}),n.d(t,"refreshPopupPosition",function(){return r.h});var o=n(10);n.d(t,"Modal",function(){return o.a});var i=n(5);n.d(t,"Popup",function(){return i.a});var a=n(19);n.d(t,"popupReducer",function(){return a.a});var s=n(3);n.d(t,"Portal",function(){return s.a}),n.d(t,"getPortalElement",function(){return s.b}),n.d(t,"setPortalElement",function(){return s.c})},function(e,t,n){"use strict";(function(e){var r=n(1),o=n.n(r),i=n(4),a=(n.n(i),n(11)),s=n(5),u=n(3),c=n(6),l=function(t){return e.createElement(c.a,{getPortalElement:t.getPortalElement,isOpen:!!t[t.id],isPortalReady:t.isPortalReady,render:function(){return e.createElement(a.a,{className:t.className,layoverClassName:t.layoverClassName,render:t.render,style:t.style})},transitionEnterTimeout:t.transitionEnterTimeout,transitionExitTimeout:t.transitionExitTimeout,transitionName:t.transitionName})};l.propTypes={className:o.a.string,getPortalElement:o.a.func.isRequired,id:o.a.string.isRequired,isPortalReady:o.a.bool.isRequired,layoverClassName:o.a.string,render:o.a.func.isRequired,style:o.a.object,transitionEnterTimeout:o.a.number.isRequired,transitionExitTimeout:o.a.number.isRequired,transitionName:o.a.oneOfType([o.a.string,o.a.shape({appear:o.a.string,appearActive:o.a.string,enter:o.a.string,enterActive:o.a.string,exit:o.a.string,exitActive:o.a.string})]).isRequired},l.defaultProps={getPortalElement:u.b,className:"modal-container",layoverClassName:"modal-layover",isPortalReady:!1,transitionEnterTimeout:300,transitionExitTimeout:300,transitionName:"modal"},t.a=Object(i.connect)(s.b)(l)}).call(t,n(0))},function(e,t,n){"use strict";(function(e){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(1),s=n.n(a),u=n(0),c=(n.n(u),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(t){function n(e){r(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={left:0,top:0},t.resizeHandler=function(){return window.requestAnimationFrame(function(){return t.updatePosition()})},t}return i(n,t),l(n,[{key:"componentDidMount",value:function(){this.updatePosition(),window.addEventListener("resize",this.resizeHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeHandler)}},{key:"updatePosition",value:function(){var e=this.modal,t=e.clientHeight,n=e.clientWidth;this.setState({left:(window.innerWidth-n)/2,top:(window.innerHeight-t)/2})}},{key:"render",value:function(){var t=this,n=c({},this.props.style,this.state);return e.createElement("div",null,e.createElement("div",{className:this.props.layoverClassName}),e.createElement("div",{className:this.props.className,ref:function(e){t.modal=e},style:n},this.props.render()))}}]),n}(u.PureComponent);t.a=p,p.propTypes={className:s.a.string,layoverClassName:s.a.string,render:s.a.func.isRequired,style:s.a.object}}).call(t,n(0))},function(e,t,n){"use strict";(function(e){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){e.stopPropagation()}var s=n(1),u=n.n(s),c=n(0),l=(n.n(c),n(13)),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(t){function n(e){r(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={},t.refreshPositionHandler=function(){return t.refreshPosition()},t}return i(n,t),f(n,[{key:"componentDidMount",value:function(){this.setPopupPosition(),window.addEventListener("mouseup",this.props.closePopup),window.addEventListener("resize",this.refreshPositionHandler)}},{key:"componentWillReceiveProps",value:function(e){this.props.refreshPosition===e.refreshPosition&&this.props.anchor===e.anchor&&this.props.offset===e.offset&&this.props.getRect===e.getRect||this.setPopupPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mouseup",this.props.closePopup),window.removeEventListener("resize",this.refreshPositionHandler)}},{key:"setPopupPosition",value:function(){var e=this.popup.getBoundingClientRect(),t=Object(l.a)(this.props.anchor,this.props.getRect(),e.width,e.height,window.innerWidth,window.innerHeight,this.props.offset),n=t.left,r=t.top;this.setState({left:n,top:r})}},{key:"refreshPosition",value:function(){var e=this;window.requestAnimationFrame(function(){return e.setPopupPosition()})}},{key:"render",value:function(){var t=this,n=p({},this.props.style,{left:this.state.left,top:this.state.top});return e.createElement("div",{className:this.props.className,onMouseUp:a,ref:function(e){t.popup=e},style:n},this.props.render())}}]),n}(c.PureComponent);t.a=d,d.propTypes={anchor:u.a.oneOf(["bottom","left","right","top"]).isRequired,className:u.a.string,closePopup:u.a.func.isRequired,getRect:u.a.func.isRequired,offset:u.a.number.isRequired,refreshPosition:u.a.bool.isRequired,render:u.a.func.isRequired,style:u.a.object}}).call(t,n(0))},function(e,t,n){"use strict";function r(e,t){return e+t}function o(e,t,n){return e-t-n}function i(e,t,n,r){return n+t>e&&r-t>=0?r-t:n}function a(e,t,n,i,a,s){var u=r(i,a),c=o(n,a,t);return s?u+t>e&&c>=0?c:u:c<0&&u+t<=e?u:c}function s(e,t,n,r,o,s,u){switch(e){case"bottom":case"top":return{left:i(o,n,t.left,t.right),top:a(s,r,t.top,t.bottom,u,"bottom"===e)};default:return{left:a(o,n,t.left,t.right,u,"right"===e),top:i(s,r,t.top,t.bottom)}}}t.a=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(u),l=n(15),p=r(l),f=n(17),d=r(f),h=n(0),m=r(h),y=n(18),E=r(y),b=n(8),v=function(e,t){return t&&t.split(" ").forEach(function(t){return(0,p.default)(e,t)})},g=function(e,t){return t&&t.split(" ").forEach(function(t){return(0,d.default)(e,t)})},x=(s({},E.default.propTypes,{classNames:b.classNamesShape,onEnter:c.func,onEntering:c.func,onEntered:c.func,onExit:c.func,onExiting:c.func,onExited:c.func}),function(e){function t(){var n,r,a;o(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=r=i(this,e.call.apply(e,[this].concat(u))),r.onEnter=function(e,t){var n=r.getClassNames(t?"appear":"enter"),o=n.className;r.removeClasses(e,"exit"),v(e,o),r.props.onEnter&&r.props.onEnter(e)},r.onEntering=function(e,t){var n=r.getClassNames(t?"appear":"enter"),o=n.activeClassName;r.reflowAndAddClass(e,o),r.props.onEntering&&r.props.onEntering(e)},r.onEntered=function(e,t){r.removeClasses(e,t?"appear":"enter"),r.props.onEntered&&r.props.onEntered(e)},r.onExit=function(e){var t=r.getClassNames("exit"),n=t.className;r.removeClasses(e,"appear"),r.removeClasses(e,"enter"),v(e,n),r.props.onExit&&r.props.onExit(e)},r.onExiting=function(e){var t=r.getClassNames("exit"),n=t.activeClassName;r.reflowAndAddClass(e,n),r.props.onExiting&&r.props.onExiting(e)},r.onExited=function(e){r.removeClasses(e,"exit"),r.props.onExited&&r.props.onExited(e)},r.getClassNames=function(e){var t=r.props.classNames,n="string"!=typeof t?t[e]:t+"-"+e;return{className:n,activeClassName:"string"!=typeof t?t[e+"Active"]:n+"-active"}},a=n,i(r,a)}return a(t,e),t.prototype.removeClasses=function(e,t){var n=this.getClassNames(t),r=n.className,o=n.activeClassName;r&&g(e,r),o&&g(e,o)},t.prototype.reflowAndAddClass=function(e,t){e.scrollTop,v(e,t)},t.prototype.render=function(){var e=s({},this.props);return delete e.classNames,m.default.createElement(E.default,s({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(m.default.Component));x.propTypes={},t.default=x,e.exports=t.default},function(e,t,n){"use strict";function r(e,t){e.classList?e.classList.add(t):(0,i.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(16),i=function(e){return e&&e.__esModule?e:{default:e}}(o);e.exports=t.default},function(e,t,n){"use strict";function r(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=r(e.className,t):e.setAttribute("class",r(e.className&&e.className.baseVal||"",t))}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(){}t.__esModule=!0,t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var c=n(1),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),p=n(0),f=r(p),d=n(7),h=r(d),m=(n(8),t.UNMOUNTED="unmounted"),y=t.EXITED="exited",E=t.ENTERING="entering",b=t.ENTERED="entered",v=t.EXITING="exiting",g=function(e){function t(n,r){i(this,t);var o=a(this,e.call(this,n,r)),s=r.transitionGroup,u=s&&!s.isMounting?n.enter:n.appear,c=void 0;return o.nextStatus=null,n.in?u?(c=y,o.nextStatus=E):c=b:c=n.unmountOnExit||n.mountOnEnter?m:y,o.state={status:c},o.nextCallback=null,o}return s(t,e),t.prototype.getChildContext=function(){return{transitionGroup:null}},t.prototype.componentDidMount=function(){this.updateStatus(!0)},t.prototype.componentWillReceiveProps=function(e){var t=this.pendingState||this.state,n=t.status;e.in?(n===m&&this.setState({status:y}),n!==E&&n!==b&&(this.nextStatus=E)):n!==E&&n!==b||(this.nextStatus=v)},t.prototype.componentDidUpdate=function(){this.updateStatus()},t.prototype.componentWillUnmount=function(){this.cancelNextCallback()},t.prototype.getTimeouts=function(){var e=this.props.timeout,t=void 0,n=void 0,r=void 0;return t=n=r=e,null!=e&&"number"!=typeof e&&(t=e.exit,n=e.enter,r=e.appear),{exit:t,enter:n,appear:r}},t.prototype.updateStatus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.nextStatus;if(null!==t){this.nextStatus=null,this.cancelNextCallback();var n=h.default.findDOMNode(this);t===E?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===y&&this.setState({status:m})},t.prototype.performEnter=function(e,t){var n=this,r=this.props.enter,o=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts();if(!t&&!r)return void this.safeSetState({status:b},function(){n.props.onEntered(e)});this.props.onEnter(e,o),this.safeSetState({status:E},function(){n.props.onEntering(e,o),n.onTransitionEnd(e,i.enter,function(){n.safeSetState({status:b},function(){n.props.onEntered(e,o)})})})},t.prototype.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();if(!n)return void this.safeSetState({status:y},function(){t.props.onExited(e)});this.props.onExit(e),this.safeSetState({status:v},function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,function(){t.safeSetState({status:y},function(){t.props.onExited(e)})})})},t.prototype.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},t.prototype.safeSetState=function(e,t){var n=this;this.pendingState=e,t=this.setNextCallback(t),this.setState(e,function(){n.pendingState=null,t()})},t.prototype.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},t.prototype.onTransitionEnd=function(e,t,n){this.setNextCallback(n),e?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},t.prototype.render=function(){var e=this.state.status;if(e===m)return null;var t=this.props,n=t.children,r=o(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"==typeof n)return n(e,r);var i=f.default.Children.only(n);return f.default.cloneElement(i,r)},t}(f.default.Component);g.contextTypes={transitionGroup:l.object},g.childContextTypes={transitionGroup:function(){}},g.propTypes={},g.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:u,onEntering:u,onEntered:u,onExit:u,onExiting:u,onExited:u},g.UNMOUNTED=0,g.EXITED=1,g.ENTERING=2,g.ENTERED=3,g.EXITING=4,t.default=g},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o,i=n(2),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=(o={},r(o,i.b,function(e,t){var n=t.popupId;return a({},e,r({},n,!0))}),r(o,i.a,function(e,t){var n=t.popupId;if(!e[n])return e;var r=a({},e);return delete r[n],r}),r(o,i.c,function(e){return a({},e,{isPortalReady:!0})}),r(o,i.d,function(e){return a({},e,{refreshPosition:!e.refreshPosition})}),o),u={isPortalReady:!1,refreshPosition:!1};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],n=s[t.type];return n?n(e,t):e}}])});