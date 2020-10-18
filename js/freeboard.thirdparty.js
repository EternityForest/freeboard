/*! head.core - v1.0.2 */
(function(n,t){"use strict";function r(n){a[a.length]=n}function k(n){var t=new RegExp(" ?\\b"+n+"\\b");c.className=c.className.replace(t,"")}function p(n,t){for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}function tt(){var t,e,f,o;c.className=c.className.replace(/ (w-|eq-|gt-|gte-|lt-|lte-|portrait|no-portrait|landscape|no-landscape)\d+/g,"");t=n.innerWidth||c.clientWidth;e=n.outerWidth||n.screen.width;u.screen.innerWidth=t;u.screen.outerWidth=e;r("w-"+t);p(i.screens,function(n){t>n?(i.screensCss.gt&&r("gt-"+n),i.screensCss.gte&&r("gte-"+n)):t<n?(i.screensCss.lt&&r("lt-"+n),i.screensCss.lte&&r("lte-"+n)):t===n&&(i.screensCss.lte&&r("lte-"+n),i.screensCss.eq&&r("e-q"+n),i.screensCss.gte&&r("gte-"+n))});f=n.innerHeight||c.clientHeight;o=n.outerHeight||n.screen.height;u.screen.innerHeight=f;u.screen.outerHeight=o;u.feature("portrait",f>t);u.feature("landscape",f<t)}function it(){n.clearTimeout(b);b=n.setTimeout(tt,50)}var y=n.document,rt=n.navigator,ut=n.location,c=y.documentElement,a=[],i={screens:[240,320,480,640,768,800,1024,1280,1440,1680,1920],screensCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!1},browsers:[{ie:{min:6,max:11}}],browserCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!0},html5:!0,page:"-page",section:"-section",head:"head"},v,u,s,w,o,h,l,d,f,g,nt,e,b;if(n.head_conf)for(v in n.head_conf)n.head_conf[v]!==t&&(i[v]=n.head_conf[v]);u=n[i.head]=function(){u.ready.apply(null,arguments)};u.feature=function(n,t,i){return n?(Object.prototype.toString.call(t)==="[object Function]"&&(t=t.call()),r((t?"":"no-")+n),u[n]=!!t,i||(k("no-"+n),k(n),u.feature()),u):(c.className+=" "+a.join(" "),a=[],u)};u.feature("js",!0);s=rt.userAgent.toLowerCase();w=/mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/.test(s);u.feature("mobile",w,!0);u.feature("desktop",!w,!0);s=/(chrome|firefox)[ \/]([\w.]+)/.exec(s)||/(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(android)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(msie) ([\w.]+)/.exec(s)||/(trident).+rv:(\w.)+/.exec(s)||[];o=s[1];h=parseFloat(s[2]);switch(o){case"msie":case"trident":o="ie";h=y.documentMode||h;break;case"firefox":o="ff";break;case"ipod":case"ipad":case"iphone":o="ios";break;case"webkit":o="safari"}for(u.browser={name:o,version:h},u.browser[o]=!0,l=0,d=i.browsers.length;l<d;l++)for(f in i.browsers[l])if(o===f)for(r(f),g=i.browsers[l][f].min,nt=i.browsers[l][f].max,e=g;e<=nt;e++)h>e?(i.browserCss.gt&&r("gt-"+f+e),i.browserCss.gte&&r("gte-"+f+e)):h<e?(i.browserCss.lt&&r("lt-"+f+e),i.browserCss.lte&&r("lte-"+f+e)):h===e&&(i.browserCss.lte&&r("lte-"+f+e),i.browserCss.eq&&r("eq-"+f+e),i.browserCss.gte&&r("gte-"+f+e));else r("no-"+f);r(o);r(o+parseInt(h,10));i.html5&&o==="ie"&&h<9&&p("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|progress|section|summary|time|video".split("|"),function(n){y.createElement(n)});p(ut.pathname.split("/"),function(n,u){if(this.length>2&&this[u+1]!==t)u&&r(this.slice(u,u+1).join("-").toLowerCase()+i.section);else{var f=n||"index",e=f.indexOf(".");e>0&&(f=f.substring(0,e));c.id=f.toLowerCase()+i.page;u||r("root"+i.section)}});u.screen={height:n.screen.height,width:n.screen.width};tt();b=0;n.addEventListener?n.addEventListener("resize",it,!1):n.attachEvent("onresize",it)})(window);
/*! head.css3 - v1.0.0 */
(function(n,t){"use strict";function a(n){for(var r in n)if(i[n[r]]!==t)return!0;return!1}function r(n){var t=n.charAt(0).toUpperCase()+n.substr(1),i=(n+" "+c.join(t+" ")+t).split(" ");return!!a(i)}var h=n.document,o=h.createElement("i"),i=o.style,s=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),c="Webkit Moz O ms Khtml".split(" "),l=n.head_conf&&n.head_conf.head||"head",u=n[l],f={gradient:function(){var n="background-image:";return i.cssText=(n+s.join("gradient(linear,left top,right bottom,from(#9f9),to(#fff));"+n)+s.join("linear-gradient(left top,#eee,#fff);"+n)).slice(0,-n.length),!!i.backgroundImage},rgba:function(){return i.cssText="background-color:rgba(0,0,0,0.5)",!!i.backgroundColor},opacity:function(){return o.style.opacity===""},textshadow:function(){return i.textShadow===""},multiplebgs:function(){i.cssText="background:url(https://),url(https://),red url(https://)";var n=(i.background||"").match(/url/g);return Object.prototype.toString.call(n)==="[object Array]"&&n.length===3},boxshadow:function(){return r("boxShadow")},borderimage:function(){return r("borderImage")},borderradius:function(){return r("borderRadius")},cssreflections:function(){return r("boxReflect")},csstransforms:function(){return r("transform")},csstransitions:function(){return r("transition")},touch:function(){return"ontouchstart"in n},retina:function(){return n.devicePixelRatio>1},fontface:function(){var t=u.browser.name,n=u.browser.version;switch(t){case"ie":return n>=9;case"chrome":return n>=13;case"ff":return n>=6;case"ios":return n>=5;case"android":return!1;case"webkit":return n>=5.1;case"opera":return n>=10;default:return!1}}};for(var e in f)f[e]&&u.feature(e,f[e].call(),!0);u.feature()})(window);
/*! head.load - v1.0.3 */
(function(n,t){"use strict";function w(){}function u(n,t){if(n){typeof n=="object"&&(n=[].slice.call(n));for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}}function it(n,i){var r=Object.prototype.toString.call(i).slice(8,-1);return i!==t&&i!==null&&r===n}function s(n){return it("Function",n)}function a(n){return it("Array",n)}function et(n){var i=n.split("/"),t=i[i.length-1],r=t.indexOf("?");return r!==-1?t.substring(0,r):t}function f(n){(n=n||w,n._done)||(n(),n._done=1)}function ot(n,t,r,u){var f=typeof n=="object"?n:{test:n,success:!t?!1:a(t)?t:[t],failure:!r?!1:a(r)?r:[r],callback:u||w},e=!!f.test;return e&&!!f.success?(f.success.push(f.callback),i.load.apply(null,f.success)):e||!f.failure?u():(f.failure.push(f.callback),i.load.apply(null,f.failure)),i}function v(n){var t={},i,r;if(typeof n=="object")for(i in n)!n[i]||(t={name:i,url:n[i]});else t={name:et(n),url:n};return(r=c[t.name],r&&r.url===t.url)?r:(c[t.name]=t,t)}function y(n){n=n||c;for(var t in n)if(n.hasOwnProperty(t)&&n[t].state!==l)return!1;return!0}function st(n){n.state=ft;u(n.onpreload,function(n){n.call()})}function ht(n){n.state===t&&(n.state=nt,n.onpreload=[],rt({url:n.url,type:"cache"},function(){st(n)}))}function ct(){var n=arguments,t=n[n.length-1],r=[].slice.call(n,1),f=r[0];return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(f?(u(r,function(n){s(n)||!n||ht(v(n))}),b(v(n[0]),s(f)?f:function(){i.load.apply(null,r)})):b(v(n[0])),i)}function lt(){var n=arguments,t=n[n.length-1],r={};return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(u(n,function(n){n!==t&&(n=v(n),r[n.name]=n)}),u(n,function(n){n!==t&&(n=v(n),b(n,function(){y(r)&&f(t)}))}),i)}function b(n,t){if(t=t||w,n.state===l){t();return}if(n.state===tt){i.ready(n.name,t);return}if(n.state===nt){n.onpreload.push(function(){b(n,t)});return}n.state=tt;rt(n,function(){n.state=l;t();u(h[n.name],function(n){f(n)});o&&y()&&u(h.ALL,function(n){f(n)})})}function at(n){n=n||"";var t=n.split("?")[0].split(".");return t[t.length-1].toLowerCase()}function rt(t,i){function e(t){t=t||n.event;u.onload=u.onreadystatechange=u.onerror=null;i()}function o(f){f=f||n.event;(f.type==="load"||/loaded|complete/.test(u.readyState)&&(!r.documentMode||r.documentMode<9))&&(n.clearTimeout(t.errorTimeout),n.clearTimeout(t.cssTimeout),u.onload=u.onreadystatechange=u.onerror=null,i())}function s(){if(t.state!==l&&t.cssRetries<=20){for(var i=0,f=r.styleSheets.length;i<f;i++)if(r.styleSheets[i].href===u.href){o({type:"load"});return}t.cssRetries++;t.cssTimeout=n.setTimeout(s,250)}}var u,h,f;i=i||w;h=at(t.url);h==="css"?(u=r.createElement("link"),u.type="text/"+(t.type||"css"),u.rel="stylesheet",u.href=t.url,t.cssRetries=0,t.cssTimeout=n.setTimeout(s,500)):(u=r.createElement("script"),u.type="text/"+(t.type||"javascript"),u.src=t.url);u.onload=u.onreadystatechange=o;u.onerror=e;u.async=!1;u.defer=!1;t.errorTimeout=n.setTimeout(function(){e({type:"timeout"})},7e3);f=r.head||r.getElementsByTagName("head")[0];f.insertBefore(u,f.lastChild)}function vt(){for(var t,u=r.getElementsByTagName("script"),n=0,f=u.length;n<f;n++)if(t=u[n].getAttribute("data-headjs-load"),!!t){i.load(t);return}}function yt(n,t){var v,p,e;return n===r?(o?f(t):d.push(t),i):(s(n)&&(t=n,n="ALL"),a(n))?(v={},u(n,function(n){v[n]=c[n];i.ready(n,function(){y(v)&&f(t)})}),i):typeof n!="string"||!s(t)?i:(p=c[n],p&&p.state===l||n==="ALL"&&y()&&o)?(f(t),i):(e=h[n],e?e.push(t):e=h[n]=[t],i)}function e(){if(!r.body){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(e,50);return}o||(o=!0,vt(),u(d,function(n){f(n)}))}function k(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",k,!1),e()):r.readyState==="complete"&&(r.detachEvent("onreadystatechange",k),e())}var r=n.document,d=[],h={},c={},ut="async"in r.createElement("script")||"MozAppearance"in r.documentElement.style||n.opera,o,g=n.head_conf&&n.head_conf.head||"head",i=n[g]=n[g]||function(){i.ready.apply(null,arguments)},nt=1,ft=2,tt=3,l=4,p;if(r.readyState==="complete")e();else if(r.addEventListener)r.addEventListener("DOMContentLoaded",k,!1),n.addEventListener("load",e,!1);else{r.attachEvent("onreadystatechange",k);n.attachEvent("onload",e);p=!1;try{p=!n.frameElement&&r.documentElement}catch(wt){}p&&p.doScroll&&function pt(){if(!o){try{p.doScroll("left")}catch(t){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(pt,50);return}e()}}()}i.load=i.js=ut?lt:ct;i.test=ot;i.ready=yt;i.ready(r,function(){y()&&u(h.ALL,function(n){f(n)});i.feature&&i.feature("domloaded",!0)})})(window);
/*
//# sourceMappingURL=head.min.js.map
*/
/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
// +--------------------------------------------------------------------+ \\
// � Rapha�l 2.1.0 - JavaScript Vector Library                          � \\
// +--------------------------------------------------------------------� \\
// � Copyright � 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    � \\
// � Copyright � 2008-2012 Sencha Labs (http://sencha.com)              � \\
// +--------------------------------------------------------------------� \\
// � Licensed under the MIT (http://raphaeljs.com/license.html) license.� \\
// +--------------------------------------------------------------------+ \\

(function(a){var b="0.3.4",c="hasOwnProperty",d=/[\.\/]/,e="*",f=function(){},g=function(a,b){return a-b},h,i,j={n:{}},k=function(a,b){var c=j,d=i,e=Array.prototype.slice.call(arguments,2),f=k.listeners(a),l=0,m=!1,n,o=[],p={},q=[],r=h,s=[];h=a,i=0;for(var t=0,u=f.length;t<u;t++)"zIndex"in f[t]&&(o.push(f[t].zIndex),f[t].zIndex<0&&(p[f[t].zIndex]=f[t]));o.sort(g);while(o[l]<0){n=p[o[l++]],q.push(n.apply(b,e));if(i){i=d;return q}}for(t=0;t<u;t++){n=f[t];if("zIndex"in n)if(n.zIndex==o[l]){q.push(n.apply(b,e));if(i)break;do{l++,n=p[o[l]],n&&q.push(n.apply(b,e));if(i)break}while(n)}else p[n.zIndex]=n;else{q.push(n.apply(b,e));if(i)break}}i=d,h=r;return q.length?q:null};k.listeners=function(a){var b=a.split(d),c=j,f,g,h,i,k,l,m,n,o=[c],p=[];for(i=0,k=b.length;i<k;i++){n=[];for(l=0,m=o.length;l<m;l++){c=o[l].n,g=[c[b[i]],c[e]],h=2;while(h--)f=g[h],f&&(n.push(f),p=p.concat(f.f||[]))}o=n}return p},k.on=function(a,b){var c=a.split(d),e=j;for(var g=0,h=c.length;g<h;g++)e=e.n,!e[c[g]]&&(e[c[g]]={n:{}}),e=e[c[g]];e.f=e.f||[];for(g=0,h=e.f.length;g<h;g++)if(e.f[g]==b)return f;e.f.push(b);return function(a){+a==+a&&(b.zIndex=+a)}},k.stop=function(){i=1},k.nt=function(a){if(a)return(new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)")).test(h);return h},k.off=k.unbind=function(a,b){var f=a.split(d),g,h,i,k,l,m,n,o=[j];for(k=0,l=f.length;k<l;k++)for(m=0;m<o.length;m+=i.length-2){i=[m,1],g=o[m].n;if(f[k]!=e)g[f[k]]&&i.push(g[f[k]]);else for(h in g)g[c](h)&&i.push(g[h]);o.splice.apply(o,i)}for(k=0,l=o.length;k<l;k++){g=o[k];while(g.n){if(b){if(g.f){for(m=0,n=g.f.length;m<n;m++)if(g.f[m]==b){g.f.splice(m,1);break}!g.f.length&&delete g.f}for(h in g.n)if(g.n[c](h)&&g.n[h].f){var p=g.n[h].f;for(m=0,n=p.length;m<n;m++)if(p[m]==b){p.splice(m,1);break}!p.length&&delete g.n[h].f}}else{delete g.f;for(h in g.n)g.n[c](h)&&g.n[h].f&&delete g.n[h].f}g=g.n}}},k.once=function(a,b){var c=function(){var d=b.apply(this,arguments);k.unbind(a,c);return d};return k.on(a,c)},k.version=b,k.toString=function(){return"You are running Eve "+b},typeof module!="undefined"&&module.exports?module.exports=k:typeof define!="undefined"?define("eve",[],function(){return k}):a.eve=k})(this),function(){function cF(a){for(var b=0;b<cy.length;b++)cy[b].el.paper==a&&cy.splice(b--,1)}function cE(b,d,e,f,h,i){e=Q(e);var j,k,l,m=[],o,p,q,t=b.ms,u={},v={},w={};if(f)for(y=0,z=cy.length;y<z;y++){var x=cy[y];if(x.el.id==d.id&&x.anim==b){x.percent!=e?(cy.splice(y,1),l=1):k=x,d.attr(x.totalOrigin);break}}else f=+v;for(var y=0,z=b.percents.length;y<z;y++){if(b.percents[y]==e||b.percents[y]>f*b.top){e=b.percents[y],p=b.percents[y-1]||0,t=t/b.top*(e-p),o=b.percents[y+1],j=b.anim[e];break}f&&d.attr(b.anim[b.percents[y]])}if(!!j){if(!k){for(var A in j)if(j[g](A))if(U[g](A)||d.paper.customAttributes[g](A)){u[A]=d.attr(A),u[A]==null&&(u[A]=T[A]),v[A]=j[A];switch(U[A]){case C:w[A]=(v[A]-u[A])/t;break;case"colour":u[A]=a.getRGB(u[A]);var B=a.getRGB(v[A]);w[A]={r:(B.r-u[A].r)/t,g:(B.g-u[A].g)/t,b:(B.b-u[A].b)/t};break;case"path":var D=bR(u[A],v[A]),E=D[1];u[A]=D[0],w[A]=[];for(y=0,z=u[A].length;y<z;y++){w[A][y]=[0];for(var F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(E[y][F]-u[A][y][F])/t}break;case"transform":var H=d._,I=ca(H[A],v[A]);if(I){u[A]=I.from,v[A]=I.to,w[A]=[],w[A].real=!0;for(y=0,z=u[A].length;y<z;y++){w[A][y]=[u[A][y][0]];for(F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(v[A][y][F]-u[A][y][F])/t}}else{var J=d.matrix||new cb,K={_:{transform:H.transform},getBBox:function(){return d.getBBox(1)}};u[A]=[J.a,J.b,J.c,J.d,J.e,J.f],b$(K,v[A]),v[A]=K._.transform,w[A]=[(K.matrix.a-J.a)/t,(K.matrix.b-J.b)/t,(K.matrix.c-J.c)/t,(K.matrix.d-J.d)/t,(K.matrix.e-J.e)/t,(K.matrix.f-J.f)/t]}break;case"csv":var L=r(j[A])[s](c),M=r(u[A])[s](c);if(A=="clip-rect"){u[A]=M,w[A]=[],y=M.length;while(y--)w[A][y]=(L[y]-u[A][y])/t}v[A]=L;break;default:L=[][n](j[A]),M=[][n](u[A]),w[A]=[],y=d.paper.customAttributes[A].length;while(y--)w[A][y]=((L[y]||0)-(M[y]||0))/t}}var O=j.easing,P=a.easing_formulas[O];if(!P){P=r(O).match(N);if(P&&P.length==5){var R=P;P=function(a){return cC(a,+R[1],+R[2],+R[3],+R[4],t)}}else P=bf}q=j.start||b.start||+(new Date),x={anim:b,percent:e,timestamp:q,start:q+(b.del||0),status:0,initstatus:f||0,stop:!1,ms:t,easing:P,from:u,diff:w,to:v,el:d,callback:j.callback,prev:p,next:o,repeat:i||b.times,origin:d.attr(),totalOrigin:h},cy.push(x);if(f&&!k&&!l){x.stop=!0,x.start=new Date-t*f;if(cy.length==1)return cA()}l&&(x.start=new Date-x.ms*f),cy.length==1&&cz(cA)}else k.initstatus=f,k.start=new Date-k.ms*f;eve("raphael.anim.start."+d.id,d,b)}}function cD(a,b){var c=[],d={};this.ms=b,this.times=1;if(a){for(var e in a)a[g](e)&&(d[Q(e)]=a[e],c.push(Q(e)));c.sort(bd)}this.anim=d,this.top=c[c.length-1],this.percents=c}function cC(a,b,c,d,e,f){function o(a,b){var c,d,e,f,j,k;for(e=a,k=0;k<8;k++){f=m(e)-a;if(z(f)<b)return e;j=(3*i*e+2*h)*e+g;if(z(j)<1e-6)break;e=e-f/j}c=0,d=1,e=a;if(e<c)return c;if(e>d)return d;while(c<d){f=m(e);if(z(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}function n(a,b){var c=o(a,b);return((l*c+k)*c+j)*c}function m(a){return((i*a+h)*a+g)*a}var g=3*b,h=3*(d-b)-g,i=1-g-h,j=3*c,k=3*(e-c)-j,l=1-j-k;return n(a,1/(200*f))}function cq(){return this.x+q+this.y+q+this.width+" � "+this.height}function cp(){return this.x+q+this.y}function cb(a,b,c,d,e,f){a!=null?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function bH(b,c,d){b=a._path2curve(b),c=a._path2curve(c);var e,f,g,h,i,j,k,l,m,n,o=d?0:[];for(var p=0,q=b.length;p<q;p++){var r=b[p];if(r[0]=="M")e=i=r[1],f=j=r[2];else{r[0]=="C"?(m=[e,f].concat(r.slice(1)),e=m[6],f=m[7]):(m=[e,f,e,f,i,j,i,j],e=i,f=j);for(var s=0,t=c.length;s<t;s++){var u=c[s];if(u[0]=="M")g=k=u[1],h=l=u[2];else{u[0]=="C"?(n=[g,h].concat(u.slice(1)),g=n[6],h=n[7]):(n=[g,h,g,h,k,l,k,l],g=k,h=l);var v=bG(m,n,d);if(d)o+=v;else{for(var w=0,x=v.length;w<x;w++)v[w].segment1=p,v[w].segment2=s,v[w].bez1=m,v[w].bez2=n;o=o.concat(v)}}}}}return o}function bG(b,c,d){var e=a.bezierBBox(b),f=a.bezierBBox(c);if(!a.isBBoxIntersect(e,f))return d?0:[];var g=bB.apply(0,b),h=bB.apply(0,c),i=~~(g/5),j=~~(h/5),k=[],l=[],m={},n=d?0:[];for(var o=0;o<i+1;o++){var p=a.findDotsAtSegment.apply(a,b.concat(o/i));k.push({x:p.x,y:p.y,t:o/i})}for(o=0;o<j+1;o++)p=a.findDotsAtSegment.apply(a,c.concat(o/j)),l.push({x:p.x,y:p.y,t:o/j});for(o=0;o<i;o++)for(var q=0;q<j;q++){var r=k[o],s=k[o+1],t=l[q],u=l[q+1],v=z(s.x-r.x)<.001?"y":"x",w=z(u.x-t.x)<.001?"y":"x",x=bD(r.x,r.y,s.x,s.y,t.x,t.y,u.x,u.y);if(x){if(m[x.x.toFixed(4)]==x.y.toFixed(4))continue;m[x.x.toFixed(4)]=x.y.toFixed(4);var y=r.t+z((x[v]-r[v])/(s[v]-r[v]))*(s.t-r.t),A=t.t+z((x[w]-t[w])/(u[w]-t[w]))*(u.t-t.t);y>=0&&y<=1&&A>=0&&A<=1&&(d?n++:n.push({x:x.x,y:x.y,t1:y,t2:A}))}}return n}function bF(a,b){return bG(a,b,1)}function bE(a,b){return bG(a,b)}function bD(a,b,c,d,e,f,g,h){if(!(x(a,c)<y(e,g)||y(a,c)>x(e,g)||x(b,d)<y(f,h)||y(b,d)>x(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(!k)return;var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(n<+y(a,c).toFixed(2)||n>+x(a,c).toFixed(2)||n<+y(e,g).toFixed(2)||n>+x(e,g).toFixed(2)||o<+y(b,d).toFixed(2)||o>+x(b,d).toFixed(2)||o<+y(f,h).toFixed(2)||o>+x(f,h).toFixed(2))return;return{x:l,y:m}}}function bC(a,b,c,d,e,f,g,h,i){if(!(i<0||bB(a,b,c,d,e,f,g,h)<i)){var j=1,k=j/2,l=j-k,m,n=.01;m=bB(a,b,c,d,e,f,g,h,l);while(z(m-i)>n)k/=2,l+=(m<i?1:-1)*k,m=bB(a,b,c,d,e,f,g,h,l);return l}}function bB(a,b,c,d,e,f,g,h,i){i==null&&(i=1),i=i>1?1:i<0?0:i;var j=i/2,k=12,l=[-0.1252,.1252,-0.3678,.3678,-0.5873,.5873,-0.7699,.7699,-0.9041,.9041,-0.9816,.9816],m=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],n=0;for(var o=0;o<k;o++){var p=j*l[o]+j,q=bA(p,a,c,e,g),r=bA(p,b,d,f,h),s=q*q+r*r;n+=m[o]*w.sqrt(s)}return j*n}function bA(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function by(a,b){var c=[];for(var d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function bx(){return this.hex}function bv(a,b,c){function d(){var e=Array.prototype.slice.call(arguments,0),f=e.join("?"),h=d.cache=d.cache||{},i=d.count=d.count||[];if(h[g](f)){bu(i,f);return c?c(h[f]):h[f]}i.length>=1e3&&delete h[i.shift()],i.push(f),h[f]=a[m](b,e);return c?c(h[f]):h[f]}return d}function bu(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function bm(a){if(Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[g](c)&&(b[c]=bm(a[c]));return b}function a(c){if(a.is(c,"function"))return b?c():eve.on("raphael.DOMload",c);if(a.is(c,E))return a._engine.create[m](a,c.splice(0,3+a.is(c[0],C))).add(c);var d=Array.prototype.slice.call(arguments,0);if(a.is(d[d.length-1],"function")){var e=d.pop();return b?e.call(a._engine.create[m](a,d)):eve.on("raphael.DOMload",function(){e.call(a._engine.create[m](a,d))})}return a._engine.create[m](a,arguments)}a.version="2.1.0",a.eve=eve;var b,c=/[, ]+/,d={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},e=/\{(\d+)\}/g,f="prototype",g="hasOwnProperty",h={doc:document,win:window},i={was:Object.prototype[g].call(h.win,"Raphael"),is:h.win.Raphael},j=function(){this.ca=this.customAttributes={}},k,l="appendChild",m="apply",n="concat",o="createTouch"in h.doc,p="",q=" ",r=String,s="split",t="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[s](q),u={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},v=r.prototype.toLowerCase,w=Math,x=w.max,y=w.min,z=w.abs,A=w.pow,B=w.PI,C="number",D="string",E="array",F="toString",G="fill",H=Object.prototype.toString,I={},J="push",K=a._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,L=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,M={NaN:1,Infinity:1,"-Infinity":1},N=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,O=w.round,P="setAttribute",Q=parseFloat,R=parseInt,S=r.prototype.toUpperCase,T=a._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},U=a._availableAnimAttrs={blur:C,"clip-rect":"csv",cx:C,cy:C,fill:"colour","fill-opacity":C,"font-size":C,height:C,opacity:C,path:"path",r:C,rx:C,ry:C,stroke:"colour","stroke-opacity":C,"stroke-width":C,transform:"transform",width:C,x:C,y:C},V=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,W=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,X={hs:1,rg:1},Y=/,?([achlmqrstvxz]),?/gi,Z=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,$=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,_=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,ba=a._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,bb={},bc=function(a,b){return a.key-b.key},bd=function(a,b){return Q(a)-Q(b)},be=function(){},bf=function(a){return a},bg=a._rectPath=function(a,b,c,d,e){if(e)return[["M",a+e,b],["l",c-e*2,0],["a",e,e,0,0,1,e,e],["l",0,d-e*2],["a",e,e,0,0,1,-e,e],["l",e*2-c,0],["a",e,e,0,0,1,-e,-e],["l",0,e*2-d],["a",e,e,0,0,1,e,-e],["z"]];return[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},bh=function(a,b,c,d){d==null&&(d=c);return[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},bi=a._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return bg(b.x,b.y,b.width,b.height)}},bj=a.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;a=bR(a);for(e=0,g=a.length;e<g;e++){i=a[e];for(f=1,h=i.length;f<h;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d}return a};a._g=h,a.type=h.win.SVGAngle||h.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML";if(a.type=="VML"){var bk=h.doc.createElement("div"),bl;bk.innerHTML='<v:shape adj="1"/>',bl=bk.firstChild,bl.style.behavior="url(#default#VML)";if(!bl||typeof bl.adj!="object")return a.type=p;bk=null}a.svg=!(a.vml=a.type=="VML"),a._Paper=j,a.fn=k=j.prototype=a.prototype,a._id=0,a._oid=0,a.is=function(a,b){b=v.call(b);if(b=="finite")return!M[g](+a);if(b=="array")return a instanceof Array;return b=="null"&&a===null||b==typeof a&&a!==null||b=="object"&&a===Object(a)||b=="array"&&Array.isArray&&Array.isArray(a)||H.call(a).slice(8,-1).toLowerCase()==b},a.angle=function(b,c,d,e,f,g){if(f==null){var h=b-d,i=c-e;if(!h&&!i)return 0;return(180+w.atan2(-i,-h)*180/B+360)%360}return a.angle(b,c,f,g)-a.angle(d,e,f,g)},a.rad=function(a){return a%360*B/180},a.deg=function(a){return a*180/B%360},a.snapTo=function(b,c,d){d=a.is(d,"finite")?d:10;if(a.is(b,E)){var e=b.length;while(e--)if(z(b[e]-c)<=d)return b[e]}else{b=+b;var f=c%b;if(f<d)return c-f;if(f>b-d)return c-f+b}return c};var bn=a.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=w.random()*16|0,c=a=="x"?b:b&3|8;return c.toString(16)});a.setWindow=function(b){eve("raphael.setWindow",a,h.win,b),h.win=b,h.doc=h.win.document,a._engine.initWin&&a._engine.initWin(h.win)};var bo=function(b){if(a.vml){var c=/^\s+|\s+$/g,d;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),d=e.body}catch(f){d=createPopup().document.body}var g=d.createTextRange();bo=bv(function(a){try{d.style.color=r(a).replace(c,p);var b=g.queryCommandValue("ForeColor");b=(b&255)<<16|b&65280|(b&16711680)>>>16;return"#"+("000000"+b.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=h.doc.createElement("i");i.title="Rapha�l Colour Picker",i.style.display="none",h.doc.body.appendChild(i),bo=bv(function(a){i.style.color=a;return h.doc.defaultView.getComputedStyle(i,p).getPropertyValue("color")})}return bo(b)},bp=function(){return"hsb("+[this.h,this.s,this.b]+")"},bq=function(){return"hsl("+[this.h,this.s,this.l]+")"},br=function(){return this.hex},bs=function(b,c,d){c==null&&a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b&&(d=b.b,c=b.g,b=b.r);if(c==null&&a.is(b,D)){var e=a.getRGB(b);b=e.r,c=e.g,d=e.b}if(b>1||c>1||d>1)b/=255,c/=255,d/=255;return[b,c,d]},bt=function(b,c,d,e){b*=255,c*=255,d*=255;var f={r:b,g:c,b:d,hex:a.rgb(b,c,d),toString:br};a.is(e,"finite")&&(f.opacity=e);return f};a.color=function(b){var c;a.is(b,"object")&&"h"in b&&"s"in b&&"b"in b?(c=a.hsb2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):a.is(b,"object")&&"h"in b&&"s"in b&&"l"in b?(c=a.hsl2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):(a.is(b,"string")&&(b=a.getRGB(b)),a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b?(c=a.rgb2hsl(b),b.h=c.h,b.s=c.s,b.l=c.l,c=a.rgb2hsb(b),b.v=c.b):(b={hex:"none"},b.r=b.g=b.b=b.h=b.s=b.v=b.l=-1)),b.toString=br;return b},a.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;a=a%360/60,i=c*b,h=i*(1-z(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bt(e,f,g,d)},a.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h);if(a>1||b>1||c>1)a/=360,b/=100,c/=100;a*=360;var e,f,g,h,i;a=a%360/60,i=2*b*(c<.5?c:1-c),h=i*(1-z(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bt(e,f,g,d)},a.rgb2hsb=function(a,b,c){c=bs(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;f=x(a,b,c),g=f-y(a,b,c),d=g==0?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=g==0?0:g/f;return{h:d,s:e,b:f,toString:bp}},a.rgb2hsl=function(a,b,c){c=bs(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;g=x(a,b,c),h=y(a,b,c),i=g-h,d=i==0?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=i==0?0:f<.5?i/(2*f):i/(2-2*f);return{h:d,s:e,l:f,toString:bq}},a._path2string=function(){return this.join(",").replace(Y,"$1")};var bw=a._preload=function(a,b){var c=h.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,h.doc.body.removeChild(this)},c.onerror=function(){h.doc.body.removeChild(this)},h.doc.body.appendChild(c),c.src=a};a.getRGB=bv(function(b){if(!b||!!((b=r(b)).indexOf("-")+1))return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx};if(b=="none")return{r:-1,g:-1,b:-1,hex:"none",toString:bx};!X[g](b.toLowerCase().substring(0,2))&&b.charAt()!="#"&&(b=bo(b));var c,d,e,f,h,i,j,k=b.match(L);if(k){k[2]&&(f=R(k[2].substring(5),16),e=R(k[2].substring(3,5),16),d=R(k[2].substring(1,3),16)),k[3]&&(f=R((i=k[3].charAt(3))+i,16),e=R((i=k[3].charAt(2))+i,16),d=R((i=k[3].charAt(1))+i,16)),k[4]&&(j=k[4][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),k[1].toLowerCase().slice(0,4)=="rgba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100));if(k[5]){j=k[5][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="�")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsb2rgb(d,e,f,h)}if(k[6]){j=k[6][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="�")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsla"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsl2rgb(d,e,f,h)}k={r:d,g:e,b:f,toString:bx},k.hex="#"+(16777216|f|e<<8|d<<16).toString(16).slice(1),a.is(h,"finite")&&(k.opacity=h);return k}return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx}},a),a.hsb=bv(function(b,c,d){return a.hsb2rgb(b,c,d).hex}),a.hsl=bv(function(b,c,d){return a.hsl2rgb(b,c,d).hex}),a.rgb=bv(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),a.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b}));return c.hex},a.getColor.reset=function(){delete this.start},a.parsePathString=function(b){if(!b)return null;var c=bz(b);if(c.arr)return bJ(c.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];a.is(b,E)&&a.is(b[0],E)&&(e=bJ(b)),e.length||r(b).replace(Z,function(a,b,c){var f=[],g=b.toLowerCase();c.replace(_,function(a,b){b&&f.push(+b)}),g=="m"&&f.length>2&&(e.push([b][n](f.splice(0,2))),g="l",b=b=="m"?"l":"L");if(g=="r")e.push([b][n](f));else while(f.length>=d[g]){e.push([b][n](f.splice(0,d[g])));if(!d[g])break}}),e.toString=a._path2string,c.arr=bJ(e);return e},a.parseTransformString=bv(function(b){if(!b)return null;var c={r:3,s:4,t:2,m:6},d=[];a.is(b,E)&&a.is(b[0],E)&&(d=bJ(b)),d.length||r(b).replace($,function(a,b,c){var e=[],f=v.call(b);c.replace(_,function(a,b){b&&e.push(+b)}),d.push([b][n](e))}),d.toString=a._path2string;return d});var bz=function(a){var b=bz.ps=bz.ps||{};b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[g](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])});return b[a]};a.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=A(j,3),l=A(j,2),m=i*i,n=m*i,o=k*a+l*3*i*c+j*3*i*i*e+n*g,p=k*b+l*3*i*d+j*3*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,x=j*e+i*g,y=j*f+i*h,z=90-w.atan2(q-s,r-t)*180/B;(q>s||r<t)&&(z+=180);return{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:x,y:y},alpha:z}},a.bezierBBox=function(b,c,d,e,f,g,h,i){a.is(b,"array")||(b=[b,c,d,e,f,g,h,i]);var j=bQ.apply(null,b);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},a.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},a.isBBoxIntersect=function(b,c){var d=a.isPointInsideBBox;return d(c,b.x,b.y)||d(c,b.x2,b.y)||d(c,b.x,b.y2)||d(c,b.x2,b.y2)||d(b,c.x,c.y)||d(b,c.x2,c.y)||d(b,c.x,c.y2)||d(b,c.x2,c.y2)||(b.x<c.x2&&b.x>c.x||c.x<b.x2&&c.x>b.x)&&(b.y<c.y2&&b.y>c.y||c.y<b.y2&&c.y>b.y)},a.pathIntersection=function(a,b){return bH(a,b)},a.pathIntersectionNumber=function(a,b){return bH(a,b,1)},a.isPointInsidePath=function(b,c,d){var e=a.pathBBox(b);return a.isPointInsideBBox(e,c,d)&&bH(b,[["M",c,d],["H",e.x2+10]],1)%2==1},a._removedFactory=function(a){return function(){eve("raphael.log",null,"Rapha�l: you are calling to method �"+a+"� of removed object",a)}};var bI=a.pathBBox=function(a){var b=bz(a);if(b.bbox)return b.bbox;if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=bR(a);var c=0,d=0,e=[],f=[],g;for(var h=0,i=a.length;h<i;h++){g=a[h];if(g[0]=="M")c=g[1],d=g[2],e.push(c),f.push(d);else{var j=bQ(c,d,g[1],g[2],g[3],g[4],g[5],g[6]);e=e[n](j.min.x,j.max.x),f=f[n](j.min.y,j.max.y),c=g[5],d=g[6]}}var k=y[m](0,e),l=y[m](0,f),o=x[m](0,e),p=x[m](0,f),q={x:k,y:l,x2:o,y2:p,width:o-k,height:p-l};b.bbox=bm(q);return q},bJ=function(b){var c=bm(b);c.toString=a._path2string;return c},bK=a._pathToRelative=function(b){var c=bz(b);if(c.rel)return bJ(c.rel);if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);var d=[],e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&(e=b[0][1],f=b[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=b.length;j<k;j++){var l=d[j]=[],m=b[j];if(m[0]!=v.call(m[0])){l[0]=v.call(m[0]);switch(l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;n<o;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}}else{l=d[j]=[],m[0]=="m"&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;p<q;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}d.toString=a._path2string,c.rel=bJ(d);return d},bL=a._pathToAbsolute=function(b){var c=bz(b);if(c.abs)return bJ(c.abs);if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);if(!b||!b.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&(e=+b[0][1],f=+b[0][2],g=e,h=f,i++,d[0]=["M",e,f]);var j=b.length==3&&b[0][0]=="M"&&b[1][0].toUpperCase()=="R"&&b[2][0].toUpperCase()=="Z";for(var k,l,m=i,o=b.length;m<o;m++){d.push(k=[]),l=b[m];if(l[0]!=S.call(l[0])){k[0]=S.call(l[0]);switch(k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":var p=[e,f][n](l.slice(1));for(var q=2,r=p.length;q<r;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[n](by(p,j));break;case"M":g=+l[1]+e,h=+l[2]+f;default:for(q=1,r=l.length;q<r;q++)k[q]=+l[q]+(q%2?e:f)}}else if(l[0]=="R")p=[e,f][n](l.slice(1)),d.pop(),d=d[n](by(p,j)),k=["R"][n](l.slice(-2));else for(var s=0,t=l.length;s<t;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=h;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],h=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}d.toString=a._path2string,c.abs=bJ(d);return d},bM=function(a,b,c,d){return[a,b,c,d,c,d]},bN=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},bO=function(a,b,c,d,e,f,g,h,i,j){var k=B*120/180,l=B/180*(+e||0),m=[],o,p=bv(function(a,b,c){var d=a*w.cos(c)-b*w.sin(c),e=a*w.sin(c)+b*w.cos(c);return{x:d,y:e}});if(!j){o=p(a,b,-l),a=o.x,b=o.y,o=p(h,i,-l),h=o.x,i=o.y;var q=w.cos(B/180*e),r=w.sin(B/180*e),t=(a-h)/2,u=(b-i)/2,v=t*t/(c*c)+u*u/(d*d);v>1&&(v=w.sqrt(v),c=v*c,d=v*d);var x=c*c,y=d*d,A=(f==g?-1:1)*w.sqrt(z((x*y-x*u*u-y*t*t)/(x*u*u+y*t*t))),C=A*c*u/d+(a+h)/2,D=A*-d*t/c+(b+i)/2,E=w.asin(((b-D)/d).toFixed(9)),F=w.asin(((i-D)/d).toFixed(9));E=a<C?B-E:E,F=h<C?B-F:F,E<0&&(E=B*2+E),F<0&&(F=B*2+F),g&&E>F&&(E=E-B*2),!g&&F>E&&(F=F-B*2)}else E=j[0],F=j[1],C=j[2],D=j[3];var G=F-E;if(z(G)>k){var H=F,I=h,J=i;F=E+k*(g&&F>E?1:-1),h=C+c*w.cos(F),i=D+d*w.sin(F),m=bO(h,i,c,d,e,0,g,I,J,[F,H,C,D])}G=F-E;var K=w.cos(E),L=w.sin(E),M=w.cos(F),N=w.sin(F),O=w.tan(G/4),P=4/3*c*O,Q=4/3*d*O,R=[a,b],S=[a+P*L,b-Q*K],T=[h+P*N,i-Q*M],U=[h,i];S[0]=2*R[0]-S[0],S[1]=2*R[1]-S[1];if(j)return[S,T,U][n](m);m=[S,T,U][n](m).join()[s](",");var V=[];for(var W=0,X=m.length;W<X;W++)V[W]=W%2?p(m[W-1],m[W],l).y:p(m[W],m[W+1],l).x;return V},bP=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:A(j,3)*a+A(j,2)*3*i*c+j*3*i*i*e+A(i,3)*g,y:A(j,3)*b+A(j,2)*3*i*d+j*3*i*i*f+A(i,3)*h}},bQ=bv(function(a,b,c,d,e,f,g,h){var i=e-2*c+a-(g-2*e+c),j=2*(c-a)-2*(e-c),k=a-c,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,o=[b,h],p=[a,g],q;z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bP(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bP(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y)),i=f-2*d+b-(h-2*f+d),j=2*(d-b)-2*(f-d),k=b-d,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bP(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bP(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y));return{min:{x:y[m](0,p),y:y[m](0,o)},max:{x:x[m](0,p),y:x[m](0,o)}}}),bR=a._path2curve=bv(function(a,b){var c=!b&&bz(a);if(!b&&c.curve)return bJ(c.curve);var d=bL(a),e=b&&bL(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=function(a,b){var c,d;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null);switch(a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][n](bO[m](0,[b.x,b.y][n](a.slice(1))));break;case"S":c=b.x+(b.x-(b.bx||b.x)),d=b.y+(b.y-(b.by||b.y)),a=["C",c,d][n](a.slice(1));break;case"T":b.qx=b.x+(b.x-(b.qx||b.x)),b.qy=b.y+(b.y-(b.qy||b.y)),a=["C"][n](bN(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][n](bN(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][n](bM(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][n](bM(b.x,b.y,a[1],b.y));break;case"V":a=["C"][n](bM(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][n](bM(b.x,b.y,b.X,b.Y))}return a},i=function(a,b){if(a[b].length>7){a[b].shift();var c=a[b];while(c.length)a.splice(b++,0,["C"][n](c.splice(0,6)));a.splice(b,1),l=x(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&a[g][0]=="M"&&b[g][0]!="M"&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=x(d.length,e&&e.length||0))};for(var k=0,l=x(d.length,e&&e.length||0);k<l;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var o=d[k],p=e&&e[k],q=o.length,r=e&&p.length;f.x=o[q-2],f.y=o[q-1],f.bx=Q(o[q-4])||f.x,f.by=Q(o[q-3])||f.y,g.bx=e&&(Q(p[r-4])||g.x),g.by=e&&(Q(p[r-3])||g.y),g.x=e&&p[r-2],g.y=e&&p[r-1]}e||(c.curve=bJ(d));return e?[d,e]:d},null,bJ),bS=a._parseDots=bv(function(b){var c=[];for(var d=0,e=b.length;d<e;d++){var f={},g=b[d].match(/^([^:]*):?([\d\.]*)/);f.color=a.getRGB(g[1]);if(f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),c.push(f)}for(d=1,e=c.length-1;d<e;d++)if(!c[d].offset){var h=Q(c[d-1].offset||0),i=0;for(var j=d+1;j<e;j++)if(c[j].offset){i=c[j].offset;break}i||(i=100,j=e),i=Q(i);var k=(i-h)/(j-d+1);for(;d<j;d++)h+=k,c[d].offset=h+"%"}return c}),bT=a._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)},bU=a._tofront=function(a,b){b.top!==a&&(bT(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},bV=a._toback=function(a,b){b.bottom!==a&&(bT(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},bW=a._insertafter=function(a,b,c){bT(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},bX=a._insertbefore=function(a,b,c){bT(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},bY=a.toMatrix=function(a,b){var c=bI(a),d={_:{transform:p},getBBox:function(){return c}};b$(d,b);return d.matrix},bZ=a.transformPath=function(a,b){return bj(a,bY(a,b))},b$=a._extractTransform=function(b,c){if(c==null)return b._.transform;c=r(c).replace(/\.{3}|\u2026/g,b._.transform||p);var d=a.parseTransformString(c),e=0,f=0,g=0,h=1,i=1,j=b._,k=new cb;j.transform=d||[];if(d)for(var l=0,m=d.length;l<m;l++){var n=d[l],o=n.length,q=r(n[0]).toLowerCase(),s=n[0]!=q,t=s?k.invert():0,u,v,w,x,y;q=="t"&&o==3?s?(u=t.x(0,0),v=t.y(0,0),w=t.x(n[1],n[2]),x=t.y(n[1],n[2]),k.translate(w-u,x-v)):k.translate(n[1],n[2]):q=="r"?o==2?(y=y||b.getBBox(1),k.rotate(n[1],y.x+y.width/2,y.y+y.height/2),e+=n[1]):o==4&&(s?(w=t.x(n[2],n[3]),x=t.y(n[2],n[3]),k.rotate(n[1],w,x)):k.rotate(n[1],n[2],n[3]),e+=n[1]):q=="s"?o==2||o==3?(y=y||b.getBBox(1),k.scale(n[1],n[o-1],y.x+y.width/2,y.y+y.height/2),h*=n[1],i*=n[o-1]):o==5&&(s?(w=t.x(n[3],n[4]),x=t.y(n[3],n[4]),k.scale(n[1],n[2],w,x)):k.scale(n[1],n[2],n[3],n[4]),h*=n[1],i*=n[2]):q=="m"&&o==7&&k.add(n[1],n[2],n[3],n[4],n[5],n[6]),j.dirtyT=1,b.matrix=k}b.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,h==1&&i==1&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1},b_=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return a.length==4?[b,0,a[2],a[3]]:[b,0];case"s":return a.length==5?[b,1,1,a[3],a[4]]:a.length==3?[b,1,1]:[b,1]}},ca=a._equaliseTransform=function(b,c){c=r(c).replace(/\.{3}|\u2026/g,b),b=a.parseTransformString(b)||[],c=a.parseTransformString(c)||[];var d=x(b.length,c.length),e=[],f=[],g=0,h,i,j,k;for(;g<d;g++){j=b[g]||b_(c[g]),k=c[g]||b_(j);if(j[0]!=k[0]||j[0].toLowerCase()=="r"&&(j[2]!=k[2]||j[3]!=k[3])||j[0].toLowerCase()=="s"&&(j[3]!=k[3]||j[4]!=k[4]))return;e[g]=[],f[g]=[];for(h=0,i=x(j.length,k.length);h<i;h++)h in j&&(e[g][h]=j[h]),h in k&&(f[g][h]=k[h])}return{from:e,to:f}};a._getContainer=function(b,c,d,e){var f;f=e==null&&!a.is(b,"object")?h.doc.getElementById(b):b;if(f!=null){if(f.tagName)return c==null?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d};return{container:1,x:b,y:c,width:d,height:e}}},a.pathToRelative=bK,a._engine={},a.path2curve=bR,a.matrix=function(a,b,c,d,e,f){return new cb(a,b,c,d,e,f)},function(b){function d(a){var b=w.sqrt(c(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}function c(a){return a[0]*a[0]+a[1]*a[1]}b.add=function(a,b,c,d,e,f){var g=[[],[],[]],h=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],i=[[a,c,e],[b,d,f],[0,0,1]],j,k,l,m;a&&a instanceof cb&&(i=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]);for(j=0;j<3;j++)for(k=0;k<3;k++){m=0;for(l=0;l<3;l++)m+=h[j][l]*i[l][k];g[j][k]=m}this.a=g[0][0],this.b=g[1][0],this.c=g[0][1],this.d=g[1][1],this.e=g[0][2],this.f=g[1][2]},b.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new cb(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},b.clone=function(){return new cb(this.a,this.b,this.c,this.d,this.e,this.f)},b.translate=function(a,b){this.add(1,0,0,1,a,b)},b.scale=function(a,b,c,d){b==null&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},b.rotate=function(b,c,d){b=a.rad(b),c=c||0,d=d||0;var e=+w.cos(b).toFixed(9),f=+w.sin(b).toFixed(9);this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},b.x=function(a,b){return a*this.a+b*this.c+this.e},b.y=function(a,b){return a*this.b+b*this.d+this.f},b.get=function(a){return+this[r.fromCharCode(97+a)].toFixed(4)},b.toString=function(){return a.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},b.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},b.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},b.split=function(){var b={};b.dx=this.e,b.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];b.scalex=w.sqrt(c(e[0])),d(e[0]),b.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*b.shear,e[1][1]-e[0][1]*b.shear],b.scaley=w.sqrt(c(e[1])),d(e[1]),b.shear/=b.scaley;var f=-e[0][1],g=e[1][1];g<0?(b.rotate=a.deg(w.acos(g)),f<0&&(b.rotate=360-b.rotate)):b.rotate=a.deg(w.asin(f)),b.isSimple=!+b.shear.toFixed(9)&&(b.scalex.toFixed(9)==b.scaley.toFixed(9)||!b.rotate),b.isSuperSimple=!+b.shear.toFixed(9)&&b.scalex.toFixed(9)==b.scaley.toFixed(9)&&!b.rotate,b.noRotation=!+b.shear.toFixed(9)&&!b.rotate;return b},b.toTransformString=function(a){var b=a||this[s]();if(b.isSimple){b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4);return(b.dx||b.dy?"t"+[b.dx,b.dy]:p)+(b.scalex!=1||b.scaley!=1?"s"+[b.scalex,b.scaley,0,0]:p)+(b.rotate?"r"+[b.rotate,0,0]:p)}return"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(cb.prototype);var cc=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);navigator.vendor=="Apple Computer, Inc."&&(cc&&cc[1]<4||navigator.platform.slice(0,2)=="iP")||navigator.vendor=="Google Inc."&&cc&&cc[1]<8?k.safari=function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:k.safari=be;var cd=function(){this.returnValue=!1},ce=function(){return this.originalEvent.preventDefault()},cf=function(){this.cancelBubble=!0},cg=function(){return this.originalEvent.stopPropagation()},ch=function(){if(h.doc.addEventListener)return function(a,b,c,d){var e=o&&u[b]?u[b]:b,f=function(e){var f=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,i=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,j=e.clientX+i,k=e.clientY+f;if(o&&u[g](b))for(var l=0,m=e.targetTouches&&e.targetTouches.length;l<m;l++)if(e.targetTouches[l].target==a){var n=e;e=e.targetTouches[l],e.originalEvent=n,e.preventDefault=ce,e.stopPropagation=cg;break}return c.call(d,e,j,k)};a.addEventListener(e,f,!1);return function(){a.removeEventListener(e,f,!1);return!0}};if(h.doc.attachEvent)return function(a,b,c,d){var e=function(a){a=a||h.win.event;var b=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;a.preventDefault=a.preventDefault||cd,a.stopPropagation=a.stopPropagation||cf;return c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){a.detachEvent("on"+b,e);return!0};return f}}(),ci=[],cj=function(a){var b=a.clientX,c=a.clientY,d=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f,g=ci.length;while(g--){f=ci[g];if(o){var i=a.touches.length,j;while(i--){j=a.touches[i];if(j.identifier==f.el._drag.id){b=j.clientX,c=j.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}}else a.preventDefault();var k=f.el.node,l,m=k.nextSibling,n=k.parentNode,p=k.style.display;h.win.opera&&n.removeChild(k),k.style.display="none",l=f.el.paper.getElementByPoint(b,c),k.style.display=p,h.win.opera&&(m?n.insertBefore(k,m):n.appendChild(k)),l&&eve("raphael.drag.over."+f.el.id,f.el,l),b+=e,c+=d,eve("raphael.drag.move."+f.el.id,f.move_scope||f.el,b-f.el._drag.x,c-f.el._drag.y,b,c,a)}},ck=function(b){a.unmousemove(cj).unmouseup(ck);var c=ci.length,d;while(c--)d=ci[c],d.el._drag={},eve("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,b);ci=[]},cl=a.el={};for(var cm=t.length;cm--;)(function(b){a[b]=cl[b]=function(c,d){a.is(c,"function")&&(this.events=this.events||[],this.events.push({name:b,f:c,unbind:ch(this.shape||this.node||h.doc,b,c,d||this)}));return this},a["un"+b]=cl["un"+b]=function(a){var c=this.events||[],d=c.length;while(d--)if(c[d].name==b&&c[d].f==a){c[d].unbind(),c.splice(d,1),!c.length&&delete this.events;return this}return this}})(t[cm]);cl.data=function(b,c){var d=bb[this.id]=bb[this.id]||{};if(arguments.length==1){if(a.is(b,"object")){for(var e in b)b[g](e)&&this.data(e,b[e]);return this}eve("raphael.data.get."+this.id,this,d[b],b);return d[b]}d[b]=c,eve("raphael.data.set."+this.id,this,c,b);return this},cl.removeData=function(a){a==null?bb[this.id]={}:bb[this.id]&&delete bb[this.id][a];return this},cl.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},cl.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var cn=[];cl.drag=function(b,c,d,e,f,g){function i(i){(i.originalEvent||i).preventDefault();var j=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,k=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft;this._drag.x=i.clientX+k,this._drag.y=i.clientY+j,this._drag.id=i.identifier,!ci.length&&a.mousemove(cj).mouseup(ck),ci.push({el:this,move_scope:e,start_scope:f,end_scope:g}),c&&eve.on("raphael.drag.start."+this.id,c),b&&eve.on("raphael.drag.move."+this.id,b),d&&eve.on("raphael.drag.end."+this.id,d),eve("raphael.drag.start."+this.id,f||e||this,i.clientX+k,i.clientY+j,i)}this._drag={},cn.push({el:this,start:i}),this.mousedown(i);return this},cl.onDragOver=function(a){a?eve.on("raphael.drag.over."+this.id,a):eve.unbind("raphael.drag.over."+this.id)},cl.undrag=function(){var b=cn.length;while(b--)cn[b].el==this&&(this.unmousedown(cn[b].start),cn.splice(b,1),eve.unbind("raphael.drag.*."+this.id));!cn.length&&a.unmousemove(cj).unmouseup(ck)},k.circle=function(b,c,d){var e=a._engine.circle(this,b||0,c||0,d||0);this.__set__&&this.__set__.push(e);return e},k.rect=function(b,c,d,e,f){var g=a._engine.rect(this,b||0,c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.ellipse=function(b,c,d,e){var f=a._engine.ellipse(this,b||0,c||0,d||0,e||0);this.__set__&&this.__set__.push(f);return f},k.path=function(b){b&&!a.is(b,D)&&!a.is(b[0],E)&&(b+=p);var c=a._engine.path(a.format[m](a,arguments),this);this.__set__&&this.__set__.push(c);return c},k.image=function(b,c,d,e,f){var g=a._engine.image(this,b||"about:blank",c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.text=function(b,c,d){var e=a._engine.text(this,b||0,c||0,r(d));this.__set__&&this.__set__.push(e);return e},k.set=function(b){!a.is(b,"array")&&(b=Array.prototype.splice.call(arguments,0,arguments.length));var c=new cG(b);this.__set__&&this.__set__.push(c);return c},k.setStart=function(a){this.__set__=a||this.set()},k.setFinish=function(a){var b=this.__set__;delete this.__set__;return b},k.setSize=function(b,c){return a._engine.setSize.call(this,b,c)},k.setViewBox=function(b,c,d,e,f){return a._engine.setViewBox.call(this,b,c,d,e,f)},k.top=k.bottom=null,k.raphael=a;var co=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,i=b.top+(h.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+(h.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:i,x:j}};k.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=h.doc.elementFromPoint(a,b);if(h.win.opera&&e.tagName=="svg"){var f=co(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var i=d.getIntersectionList(g,null);i.length&&(e=i[i.length-1])}if(!e)return null;while(e.parentNode&&e!=d.parentNode&&!e.raphael)e=e.parentNode;e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null;return e},k.getById=function(a){var b=this.bottom;while(b){if(b.id==a)return b;b=b.next}return null},k.forEach=function(a,b){var c=this.bottom;while(c){if(a.call(b,c)===!1)return this;c=c.next}return this},k.getElementsByPoint=function(a,b){var c=this.set();this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)});return c},cl.isPointInside=function(b,c){var d=this.realPath=this.realPath||bi[this.type](this);return a.isPointInsidePath(d,b,c)},cl.getBBox=function(a){if(this.removed)return{};var b=this._;if(a){if(b.dirty||!b.bboxwt)this.realPath=bi[this.type](this),b.bboxwt=bI(this.realPath),b.bboxwt.toString=cq,b.dirty=0;return b.bboxwt}if(b.dirty||b.dirtyT||!b.bbox){if(b.dirty||!this.realPath)b.bboxwt=0,this.realPath=bi[this.type](this);b.bbox=bI(bj(this.realPath,this.matrix)),b.bbox.toString=cq,b.dirty=b.dirtyT=0}return b.bbox},cl.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());this.__set__&&this.__set__.push(a);return a},cl.glow=function(a){if(this.type=="text")return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||bi[this.type](this);f=this.matrix?bj(f,this.matrix):f;for(var g=1;g<c+1;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cr={},cs=function(b,c,d,e,f,g,h,i,j){return j==null?bB(b,c,d,e,f,g,h,i):a.findDotsAtSegment(b,c,d,e,f,g,h,i,bC(b,c,d,e,f,g,h,i,j))},ct=function(b,c){return function(d,e,f){d=bR(d);var g,h,i,j,k="",l={},m,n=0;for(var o=0,p=d.length;o<p;o++){i=d[o];if(i[0]=="M")g=+i[1],h=+i[2];else{j=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6]);if(n+j>e){if(c&&!l.start){m=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),k+=["C"+m.start.x,m.start.y,m.m.x,m.m.y,m.x,m.y];if(f)return k;l.start=k,k=["M"+m.x,m.y+"C"+m.n.x,m.n.y,m.end.x,m.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!b&&!c){m=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);return{x:m.x,y:m.y,alpha:m.alpha}}}n+=j,g=+i[5],h=+i[6]}k+=i.shift()+i}l.end=k,m=b?n:c?l:a.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),m.alpha&&(m={x:m.x,y:m.y,alpha:m.alpha});return m}},cu=ct(1),cv=ct(),cw=ct(0,1);a.getTotalLength=cu,a.getPointAtLength=cv,a.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return cw(a,b).end;var d=cw(a,c,1);return b?cw(d,b).end:d},cl.getTotalLength=function(){if(this.type=="path"){if(this.node.getTotalLength)return this.node.getTotalLength();return cu(this.attrs.path)}},cl.getPointAtLength=function(a){if(this.type=="path")return cv(this.attrs.path,a)},cl.getSubpath=function(b,c){if(this.type=="path")return a.getSubpath(this.attrs.path,b,c)};var cx=a.easing_formulas={linear:function(a){return a},"<":function(a){return A(a,1.7)},">":function(a){return A(a,.48)},"<>":function(a){var b=.48-a/1.04,c=w.sqrt(.1734+b*b),d=c-b,e=A(z(d),1/3)*(d<0?-1:1),f=-c-b,g=A(z(f),1/3)*(f<0?-1:1),h=e+g+.5;return(1-h)*3*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a=a-1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){if(a==!!a)return a;return A(2,-10*a)*w.sin((a-.075)*2*B/.3)+1},bounce:function(a){var b=7.5625,c=2.75,d;a<1/c?d=b*a*a:a<2/c?(a-=1.5/c,d=b*a*a+.75):a<2.5/c?(a-=2.25/c,d=b*a*a+.9375):(a-=2.625/c,d=b*a*a+.984375);return d}};cx.easeIn=cx["ease-in"]=cx["<"],cx.easeOut=cx["ease-out"]=cx[">"],cx.easeInOut=cx["ease-in-out"]=cx["<>"],cx["back-in"]=cx.backIn,cx["back-out"]=cx.backOut;var cy=[],cz=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,16)},cA=function(){var b=+(new Date),c=0;for(;c<cy.length;c++){var d=cy[c];if(d.el.removed||d.paused)continue;var e=b-d.start,f=d.ms,h=d.easing,i=d.from,j=d.diff,k=d.to,l=d.t,m=d.el,o={},p,r={},s;d.initstatus?(e=(d.initstatus*d.anim.top-d.prev)/(d.percent-d.prev)*f,d.status=d.initstatus,delete d.initstatus,d.stop&&cy.splice(c--,1)):d.status=(d.prev+(d.percent-d.prev)*(e/f))/d.anim.top;if(e<0)continue;if(e<f){var t=h(e/f);for(var u in i)if(i[g](u)){switch(U[u]){case C:p=+i[u]+t*f*j[u];break;case"colour":p="rgb("+[cB(O(i[u].r+t*f*j[u].r)),cB(O(i[u].g+t*f*j[u].g)),cB(O(i[u].b+t*f*j[u].b))].join(",")+")";break;case"path":p=[];for(var v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(var x=1,y=i[u][v].length;x<y;x++)p[v][x]=+i[u][v][x]+t*f*j[u][v][x];p[v]=p[v].join(q)}p=p.join(q);break;case"transform":if(j[u].real){p=[];for(v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(x=1,y=i[u][v].length;x<y;x++)p[v][x]=i[u][v][x]+t*f*j[u][v][x]}}else{var z=function(a){return+i[u][a]+t*f*j[u][a]};p=[["m",z(0),z(1),z(2),z(3),z(4),z(5)]]}break;case"csv":if(u=="clip-rect"){p=[],v=4;while(v--)p[v]=+i[u][v]+t*f*j[u][v]}break;default:var A=[][n](i[u]);p=[],v=m.paper.customAttributes[u].length;while(v--)p[v]=+A[v]+t*f*j[u][v]}o[u]=p}m.attr(o),function(a,b,c){setTimeout(function(){eve("raphael.anim.frame."+a,b,c)})}(m.id,m,d.anim)}else{(function(b,c,d){setTimeout(function(){eve("raphael.anim.frame."+c.id,c,d),eve("raphael.anim.finish."+c.id,c,d),a.is(b,"function")&&b.call(c)})})(d.callback,m,d.anim),m.attr(k),cy.splice(c--,1);if(d.repeat>1&&!d.next){for(s in k)k[g](s)&&(r[s]=d.totalOrigin[s]);d.el.attr(r),cE(d.anim,d.el,d.anim.percents[0],null,d.totalOrigin,d.repeat-1)}d.next&&!d.stop&&cE(d.anim,d.el,d.next,null,d.totalOrigin,d.repeat)}}a.svg&&m&&m.paper&&m.paper.safari(),cy.length&&cz(cA)},cB=function(a){return a>255?255:a<0?0:a};cl.animateWith=function(b,c,d,e,f,g){var h=this;if(h.removed){g&&g.call(h);return h}var i=d instanceof cD?d:a.animation(d,e,f,g),j,k;cE(i,h,i.percents[0],null,h.attr());for(var l=0,m=cy.length;l<m;l++)if(cy[l].anim==c&&cy[l].el==b){cy[m-1].start=cy[l].start;break}return h},cl.onAnimation=function(a){a?eve.on("raphael.anim.frame."+this.id,a):eve.unbind("raphael.anim.frame."+this.id);return this},cD.prototype.delay=function(a){var b=new cD(this.anim,this.ms);b.times=this.times,b.del=+a||0;return b},cD.prototype.repeat=function(a){var b=new cD(this.anim,this.ms);b.del=this.del,b.times=w.floor(x(a,0))||1;return b},a.animation=function(b,c,d,e){if(b instanceof cD)return b;if(a.is(d,"function")||!d)e=e||d||null,d=null;b=Object(b),c=+c||0;var f={},h,i;for(i in b)b[g](i)&&Q(i)!=i&&Q(i)+"%"!=i&&(h=!0,f[i]=b[i]);if(!h)return new cD(b,c);d&&(f.easing=d),e&&(f.callback=e);return new cD({100:f},c)},cl.animate=function(b,c,d,e){var f=this;if(f.removed){e&&e.call(f);return f}var g=b instanceof cD?b:a.animation(b,c,d,e);cE(g,f,g.percents[0],null,f.attr());return f},cl.setTime=function(a,b){a&&b!=null&&this.status(a,y(b,a.ms)/a.ms);return this},cl.status=function(a,b){var c=[],d=0,e,f;if(b!=null){cE(a,this,-1,y(b,1));return this}e=cy.length;for(;d<e;d++){f=cy[d];if(f.el.id==this.id&&(!a||f.anim==a)){if(a)return f.status;c.push({anim:f.anim,status:f.status})}}if(a)return 0;return c},cl.pause=function(a){for(var b=0;b<cy.length;b++)cy[b].el.id==this.id&&(!a||cy[b].anim==a)&&eve("raphael.anim.pause."+this.id,this,cy[b].anim)!==!1&&(cy[b].paused=!0);return this},cl.resume=function(a){for(var b=0;b<cy.length;b++)if(cy[b].el.id==this.id&&(!a||cy[b].anim==a)){var c=cy[b];eve("raphael.anim.resume."+this.id,this,c.anim)!==!1&&(delete c.paused,this.status(c.anim,c.status))}return this},cl.stop=function(a){for(var b=0;b<cy.length;b++)cy[b].el.id==this.id&&(!a||cy[b].anim==a)&&eve("raphael.anim.stop."+this.id,this,cy[b].anim)!==!1&&cy.splice(b--,1);return this},eve.on("raphael.remove",cF),eve.on("raphael.clear",cF),cl.toString=function(){return"Rapha�l�s object"};var cG=function(a){this.items=[],this.length=0,this.type="set";if(a)for(var b=0,c=a.length;b<c;b++)a[b]&&(a[b].constructor==cl.constructor||a[b].constructor==cG)&&(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},cH=cG.prototype;cH.push=function(){var a,b;for(var c=0,d=arguments.length;c<d;c++)a=arguments[c],a&&(a.constructor==cl.constructor||a.constructor==cG)&&(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},cH.pop=function(){this.length&&delete this[this.length--];return this.items.pop()},cH.forEach=function(a,b){for(var c=0,d=this.items.length;c<d;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var cI in cl)cl[g](cI)&&(cH[cI]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][m](c,b)})}}(cI));cH.attr=function(b,c){if(b&&a.is(b,E)&&a.is(b[0],"object"))for(var d=0,e=b.length;d<e;d++)this.items[d].attr(b[d]);else for(var f=0,g=this.items.length;f<g;f++)this.items[f].attr(b,c);return this},cH.clear=function(){while(this.length)this.pop()},cH.splice=function(a,b,c){a=a<0?x(this.length+a,0):a,b=x(0,y(this.length-a,b));var d=[],e=[],f=[],g;for(g=2;g<arguments.length;g++)f.push(arguments[g]);for(g=0;g<b;g++)e.push(this[a+g]);for(;g<this.length-a;g++)d.push(this[a+g]);var h=f.length;for(g=0;g<h+d.length;g++)this.items[a+g]=this[a+g]=g<h?f[g]:d[g-h];g=this.items.length=this.length-=b-h;while(this[g])delete this[g++];return new cG(e)},cH.exclude=function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]==a){this.splice(b,1);return!0}},cH.animate=function(b,c,d,e){(a.is(d,"function")||!d)&&(e=d||null);var f=this.items.length,g=f,h,i=this,j;if(!f)return this;e&&(j=function(){!--f&&e.call(i)}),d=a.is(d,D)?d:j;var k=a.animation(b,c,d,j);h=this.items[--g].animate(k);while(g--)this.items[g]&&!this.items[g].removed&&this.items[g].animateWith(h,k,k);return this},cH.insertAfter=function(a){var b=this.items.length;while(b--)this.items[b].insertAfter(a);return this},cH.getBBox=function(){var a=[],b=[],c=[],d=[];for(var e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}a=y[m](0,a),b=y[m](0,b),c=x[m](0,c),d=x[m](0,d);return{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},cH.clone=function(a){a=new cG;for(var b=0,c=this.items.length;b<c;b++)a.push(this.items[b].clone());return a},cH.toString=function(){return"Rapha�l�s set"},a.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[g](d)&&(b.face[d]=a.face[d]);this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b];if(!a.svg){b.face["units-per-em"]=R(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[g](e)){var f=a.glyphs[e];b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"};if(f.k)for(var h in f.k)f[g](h)&&(b.glyphs[e].k[h]=f.k[h])}}return a},k.getFont=function(b,c,d,e){e=e||"normal",d=d||"normal",c=+c||{normal:400,bold:700,lighter:300,bolder:800}[c]||400;if(!!a.fonts){var f=a.fonts[b];if(!f){var h=new RegExp("(^|\\s)"+b.replace(/[^\w\d\s+!~.:_-]/g,p)+"(\\s|$)","i");for(var i in a.fonts)if(a.fonts[g](i)&&h.test(i)){f=a.fonts[i];break}}var j;if(f)for(var k=0,l=f.length;k<l;k++){j=f[k];if(j.face["font-weight"]==c&&(j.face["font-style"]==d||!j.face["font-style"])&&j.face["font-stretch"]==e)break}return j}},k.print=function(b,d,e,f,g,h,i){h=h||"middle",i=x(y(i||0,1),-1);var j=r(e)[s](p),k=0,l=0,m=p,n;a.is(f,e)&&(f=this.getFont(f));if(f){n=(g||16)/f.face["units-per-em"];var o=f.face.bbox[s](c),q=+o[0],t=o[3]-o[1],u=0,v=+o[1]+(h=="baseline"?t+ +f.face.descent:t/2);for(var w=0,z=j.length;w<z;w++){if(j[w]=="\n")k=0,B=0,l=0,u+=t;else{var A=l&&f.glyphs[j[w-1]]||{},B=f.glyphs[j[w]];k+=l?(A.w||f.w)+(A.k&&A.k[j[w]]||0)+f.w*i:0,l=1}B&&B.d&&(m+=a.transformPath(B.d,["t",k*n,u*n,"s",n,n,q,v,"t",(b-q)/n,(d-v)/n]))}}return this.path(m).attr({fill:"#000",stroke:"none"})},k.add=function(b){if(a.is(b,"array")){var c=this.set(),e=0,f=b.length,h;for(;e<f;e++)h=b[e]||{},d[g](h.type)&&c.push(this[h.type]().attr(h))}return c},a.format=function(b,c){var d=a.is(c,E)?[0][n](c):arguments;b&&a.is(b,D)&&d.length-1&&(b=b.replace(e,function(a,b){return d[++b]==null?p:d[b]}));return b||p},a.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),typeof e=="function"&&f&&(e=e()))}),e=(e==null||e==d?a:e)+"";return e};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),a.ninja=function(){i.was?h.win.Raphael=i.is:delete Raphael;return a},a.st=cH,function(b,c,d){function e(){/in/.test(b.readyState)?setTimeout(e,9):a.eve("raphael.DOMload")}b.readyState==null&&b.addEventListener&&(b.addEventListener(c,d=function(){b.removeEventListener(c,d,!1),b.readyState="complete"},!1),b.readyState="loading"),e()}(document,"DOMContentLoaded"),i.was?h.win.Raphael=a:Raphael=a,eve.on("raphael.DOMload",function(){b=!0})}(),window.Raphael.svg&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=a.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};a.toString=function(){return"Your browser supports SVG.\nYou are running Rapha�l "+this.version};var q=function(d,e){if(e){typeof d=="string"&&(d=q(d));for(var f in e)e[b](f)&&(f.substring(0,6)=="xlink:"?d.setAttributeNS(n,f.substring(6),c(e[f])):d.setAttribute(f,c(e[f])))}else d=a._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(b,e){var j="linear",k=b.id+e,m=.5,n=.5,o=b.node,p=b.paper,r=o.style,s=a._g.doc.getElementById(k);if(!s){e=c(e).replace(a._radial_gradient,function(a,b,c){j="radial";if(b&&c){m=d(b),n=d(c);var e=(n>.5)*2-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&n!=.5&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/);if(j=="linear"){var t=e.shift();t=-d(t);if(isNaN(t))return null;var u=[0,0,f.cos(a.rad(t)),f.sin(a.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=a._parseDots(e);if(!w)return null;k=k.replace(/[\(\)\s,\xb0#]/g,"_"),b.gradient&&k!=b.gradient.id&&(p.defs.removeChild(b.gradient),delete b.gradient);if(!b.gradient){s=q(j+"Gradient",{id:k}),b.gradient=s,q(s,j=="radial"?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;x<y;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1;return 1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if(d.type=="path"){var g=c(e).toLowerCase().split("-"),h=d.paper,i=f?"end":"start",j=d.node,k=d.attrs,m=k["stroke-width"],n=g.length,r="classic",s,t,u,v,w,x=3,y=3,z=5;while(n--)switch(g[n]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":r=g[n];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}r=="open"?(x+=2,y+=2,z+=2,u=1,v=f?4:1,w={fill:"none",stroke:k.stroke}):(v=u=x/2,w={fill:k.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={};if(r!="none"){var A="raphael-marker-"+r,B="raphael-marker-"+i+r+x+y;a._g.doc.getElementById(A)?p[A]++:(h.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[r],id:A})),p[A]=1);var C=a._g.doc.getElementById(B),D;C?(p[B]++,D=C.getElementsByTagName("use")[0]):(C=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:v,refY:y/2}),D=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),C.appendChild(D),h.defs.appendChild(C),p[B]=1),q(D,w);var F=u*(r!="diamond"&&r!="oval");f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-F*m):(s=F*m,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),w={},w["marker-"+i]="url(#"+B+")";if(t||s)w.d=Raphael.getSubpath(k.path,s,t);q(j,w),d._.arrows[i+"Path"]=A,d._.arrows[i+"Marker"]=B,d._.arrows[i+"dx"]=F,d._.arrows[i+"Type"]=r,d._.arrows[i+"String"]=e}else f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-s):(s=0,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),d._.arrows[i+"Path"]&&q(j,{d:Raphael.getSubpath(k.path,s,t)}),delete d._.arrows[i+"Path"],delete d._.arrows[i+"Marker"],delete d._.arrows[i+"dx"],delete d._.arrows[i+"Type"],delete d._.arrows[i+"String"];for(w in p)if(p[b](w)&&!p[w]){var G=a._g.doc.getElementById(w);G&&G.parentNode.removeChild(G)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,b,d){b=u[c(b).toLowerCase()];if(b){var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=b.length;while(h--)g[h]=b[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[b](o)){if(!a._availableAttrs[b](o))continue;var p=f[o];k[o]=p;switch(o){case"blur":d.blur(p);break;case"href":case"title":case"target":var u=i.parentNode;if(u.tagName.toLowerCase()!="a"){var w=q("a");u.insertBefore(w,i),w.appendChild(i),u=w}o=="target"?u.setAttributeNS(n,"show",p=="blank"?"new":p):u.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var x=c(p).split(j);if(x.length==4){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var z=q("clipPath"),A=q("rect");z.id=a.createUUID(),q(A,{x:x[0],y:x[1],width:x[2],height:x[3]}),z.appendChild(A),d.paper.defs.appendChild(z),q(i,{"clip-path":"url(#"+z.id+")"}),d.clip=A}if(!p){var B=i.getAttribute("clip-path");if(B){var C=a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g,l));C&&C.parentNode.removeChild(C),q(i,{"clip-path":l}),delete d.clip}}break;case"path":d.type=="path"&&(q(i,{d:p?k.path=a._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":i.setAttribute(o,p),d._.dirty=1;if(k.fx)o="x",p=k.x;else break;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if(o=="rx"&&d.type=="rect")break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":i.setAttribute(o,p),d._.dirty=1;if(k.fy)o="y",p=k.y;else break;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if(o=="ry"&&d.type=="rect")break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":d.type=="rect"?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":d.type=="image"&&i.setAttributeNS(n,"href",p);break;case"stroke-width":if(d._.sx!=1||d._.sy!=1)p/=g(h(d._.sx),h(d._.sy))||1;d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var D=c(p).match(a._ISURL);if(D){z=q("pattern");var F=q("image");z.id=a.createUUID(),q(z,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":D[1]}),z.appendChild(F),function(b){a._preload(D[1],function(){var a=this.offsetWidth,c=this.offsetHeight;q(b,{width:a,height:c}),q(F,{width:a,height:c}),d.paper.safari()})}(z),d.paper.defs.appendChild(z),q(i,{fill:"url(#"+z.id+")"}),d.pattern=z,d.pattern&&s(d);break}var G=a.getRGB(p);if(!G.error)delete f.gradient,delete k.gradient,!a.is(k.opacity,"undefined")&&a.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!a.is(k["fill-opacity"],"undefined")&&a.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});else if((d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}G[b]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=a.getRGB(p),i.setAttribute(o,G.hex),o=="stroke"&&G[b]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),o=="stroke"&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":(d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p);break;case"opacity":k.gradient&&!k[b]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break};default:o=="font-size"&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if(d.type=="text"&&!!(f[b]("text")||f[b]("font")||f[b]("font-size")||f[b]("x")||f[b]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(a._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[b]("text")){g.text=f.text;while(h.firstChild)h.removeChild(h.firstChild);var j=c(f.text).split("\n"),k=[],m;for(var n=0,o=j.length;n<o;n++)m=q("tspan"),n&&q(m,{dy:i*x,x:g.x}),m.appendChild(a._g.doc.createTextNode(j[n])),h.appendChild(m),k[n]=m}else{k=h.getElementsByTagName("tspan");for(n=0,o=k.length;n<o;n++)n?q(k[n],{dy:i*x,x:g.x}):q(k[0],{dy:0})}q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&a.is(r,"finite")&&q(k[0],{dy:r})}},z=function(b,c){var d=0,e=0;this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matrix(),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},A=a.el;z.prototype=A,A.constructor=z,a._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);d.type="path",w(d,{fill:"none",stroke:"#000",path:a});return d},A.rotate=function(a,b,e){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this.transform(this._.transform.concat([["r",a,b,e]]));return this},A.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]]));return this},A.translate=function(a,b){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this.transform(this._.transform.concat([["t",a,b]]));return this},A.transform=function(c){var d=this._;if(c==null)return d.transform;a._extractTransform(this,c),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix});if(d.sx!=1||d.sy!=1){var e=this.attrs[b]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){!this.removed&&this.paper.safari(this.node.style.display="none");return this},A.show=function(){!this.removed&&this.paper.safari(this.node.style.display="");return this},A.remove=function(){if(!this.removed&&!!this.node.parentNode){var b=this.paper;b.__set__&&b.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&b.defs.removeChild(this.gradient),a._tear(this,b),this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var c in this)this[c]=typeof this[c]=="function"?a._removedFactory(c):null;this.removed=!0}},A._getBBox=function(){if(this.node.style.display=="none"){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}a&&this.hide();return b},A.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;if(c=="transform")return this._.transform;var g=c.split(j),h={};for(var i=0,l=g.length;i<l;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return l-1?h:h[g[0]]}if(d==null&&a.is(c,"array")){h={};for(i=0,l=c.length;i<l;i++)h[c[i]]=this.attr(c[i]);return h}if(d!=null){var m={};m[c]=d}else c!=null&&a.is(c,"object")&&(m=c);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[b](n)&&m[b](n)&&a.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[b](p)&&(m[p]=o[p])}w(this,m);return this},A.toFront=function(){if(this.removed)return this;this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var b=this.paper;b.top!=this&&a._tofront(this,b);return this},A.toBack=function(){if(this.removed)return this;var b=this.node.parentNode;b.tagName.toLowerCase()=="a"?b.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):b.firstChild!=this.node&&b.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper);var c=this.paper;return this},A.insertAfter=function(b){if(this.removed)return this;var c=b.node||b[b.length-1].node;c.nextSibling?c.parentNode.insertBefore(this.node,c.nextSibling):c.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},A.insertBefore=function(b){if(this.removed)return this;var c=b.node||b[0].node;c.parentNode.insertBefore(this.node,c),a._insertbefore(this,b,this.paper);return this},A.blur=function(b){var c=this;if(+b!==0){var d=q("filter"),e=q("feGaussianBlur");c.attrs.blur=b,d.id=a.createUUID(),q(e,{stdDeviation:+b||1.5}),d.appendChild(e),c.paper.defs.appendChild(d),c._blur=d,q(c.node,{filter:"url(#"+d.id+")"})}else c._blur&&(c._blur.parentNode.removeChild(c._blur),delete c._blur,delete c.attrs.blur),c.node.removeAttribute("filter")},a._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs);return f},a._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs);return h},a._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs);return g},a._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image";return h},a._engine.text=function(b,c,d,e){var f=q("text");b.canvas&&b.canvas.appendChild(f);var g=new z(f,b);g.attrs={x:c,y:d,"text-anchor":"middle",text:e,font:a._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs);return g},a._engine.setSize=function(a,b){this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox);return this},a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b&&b.container,d=b.x,e=b.y,f=b.width,g=b.height;if(!c)throw new Error("SVG container not found.");var h=q("svg"),i="overflow:hidden;",j;d=d||0,e=e||0,f=f||512,g=g||342,q(h,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),c==1?(h.style.cssText=i+"position:absolute;left:"+d+"px;top:"+e+"px",a._g.doc.body.appendChild(h),j=1):(h.style.cssText=i+"position:relative",c.firstChild?c.insertBefore(h,c.firstChild):c.appendChild(h)),c=new a._Paper,c.width=f,c.height=g,c.canvas=h,c.clear(),c._left=c._top=0,j&&(c.renderfix=function(){}),c.renderfix();return c},a._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f=g(c/this.width,d/this.height),h=this.top,i=e?"meet":"xMinYMin",j,l;a==null?(this._vbSize&&(f=1),delete this._vbSize,j="0 0 "+this.width+m+this.height):(this._vbSize=f,j=a+m+b+m+c+m+d),q(this.canvas,{viewBox:j,preserveAspectRatio:i});while(f&&h)l="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":l}),h._.dirty=1,h._.dirtyT=1,h=h.prev;this._viewBox=[a,b,c,d,!!e];return this},a.prototype.renderfix=function(){var a=this.canvas,b=a.style,c;try{c=a.getScreenCTM()||a.createSVGMatrix()}catch(d){c=a.createSVGMatrix()}var e=-c.e%1,f=-c.f%1;if(e||f)e&&(this._left=(this._left+e)%1,b.left=this._left+"px"),f&&(this._top=(this._top+f)%1,b.top=this._top+"px")},a.prototype.clear=function(){a.eve("raphael.clear",this);var b=this.canvas;while(b.firstChild)b.removeChild(b.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(a._g.doc.createTextNode("Created with Rapha�l "+a.version)),b.appendChild(this.desc),b.appendChild(this.defs=q("defs"))},a.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null};var B=a.st;for(var C in A)A[b](C)&&!B[b](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}(window.Raphael),window.Raphael.vml&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=a.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(b){var d=/[ahqstv]/ig,e=a._pathToAbsolute;c(b).match(d)&&(e=a._path2curve),d=/[clmz]/g;if(e==a._pathToAbsolute&&!c(b).match(d)){var g=c(b).replace(q,function(a,b,c){var d=[],e=b.toLowerCase()=="m",g=p[b];c.replace(s,function(a){e&&d.length==2&&(g+=d+p[b=="m"?"l":"L"],d=[]),d.push(f(a*u))});return g+d});return g}var h=e(b),i,j;g=[];for(var k=0,l=h.length;k<l;k++){i=h[k],j=h[k][0].toLowerCase(),j=="z"&&(j="x");for(var m=1,r=i.length;m<r;m++)j+=f(i[m]*u)+(m!=r-1?",":o);g.push(j)}return g.join(n)},y=function(b,c,d){var e=a.matrix();e.rotate(-b,.5,.5);return{dx:e.x(c,d),dy:e.y(c,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q,r=u/b,s=u/c;m.visibility="hidden";if(!!b&&!!c){l.coordsize=i(r)+n+i(s),m.rotation=f*(b*c<0?-1:1);if(f){var t=y(f,d,e);d=t.dx,e=t.dy}b<0&&(p+="x"),c<0&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-r+n+e*-s;if(k||g.fillsize){var v=l.getElementsByTagName(j);v=v&&v[0],l.removeChild(v),k&&(t=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),v.position=t.dx*o+n+t.dy*o),g.fillsize&&(v.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(v)}m.visibility="visible"}};a.toString=function(){return"Your browser doesn�t support SVG. Falling down to VML.\nYou are running Rapha�l "+this.version};var A=function(a,b,d){var e=c(b).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";while(g--)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q,r=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),s=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),t=e;for(var y in i)i[b](y)&&(m[y]=i[y]);r&&(m.path=a._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur);if(i.path&&e.type=="path"||r)l.path=x(~c(m.path).toLowerCase().indexOf("r")?a._pathToAbsolute(m.path):m.path),e.type=="image"&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0));"transform"in i&&e.transform(i.transform);if(s){var B=+m.cx,D=+m.cy,E=+m.rx||+m.r||0,G=+m.ry||+m.r||0;l.path=a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((B-E)*u),f((D-G)*u),f((B+E)*u),f((D+G)*u),f(B*u))}if("clip-rect"in i){var H=c(i["clip-rect"]).split(k);if(H.length==4){H[2]=+H[2]+ +H[0],H[3]=+H[3]+ +H[1];var I=l.clipRect||a._g.doc.createElement("div"),J=I.style;J.clip=a.format("rect({1}px {2}px {3}px {0}px)",H),l.clipRect||(J.position="absolute",J.top=0,J.left=0,J.width=e.paper.width+"px",J.height=e.paper.height+"px",l.parentNode.insertBefore(I,l),I.appendChild(l),l.clipRect=I)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var K=e.textpath.style;i.font&&(K.font=i.font),i["font-family"]&&(K.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(K.fontSize=i["font-size"]),i["font-weight"]&&(K.fontWeight=i["font-weight"]),i["font-style"]&&(K.fontStyle=i["font-style"])}"arrow-start"in i&&A(t,i["arrow-start"]),"arrow-end"in i&&A(t,i["arrow-end"],1);if(i.opacity!=null||i["stroke-width"]!=null||i.fill!=null||i.src!=null||i.stroke!=null||i["stroke-width"]!=null||i["stroke-opacity"]!=null||i["fill-opacity"]!=null||i["stroke-dasharray"]!=null||i["stroke-miterlimit"]!=null||i["stroke-linejoin"]!=null||i["stroke-linecap"]!=null){var L=l.getElementsByTagName(j),M=!1;L=L&&L[0],!L&&(M=L=F(j)),e.type=="image"&&i.src&&(L.src=i.src),i.fill&&(L.on=!0);if(L.on==null||i.fill=="none"||i.fill===null)L.on=!1;if(L.on&&i.fill){var N=c(i.fill).match(a._ISURL);if(N){L.parentNode==l&&l.removeChild(L),L.rotate=!0,L.src=N[1],L.type="tile";var O=e.getBBox(1);L.position=O.x+n+O.y,e._.fillpos=[O.x,O.y],a._preload(N[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else L.color=a.getRGB(i.fill).hex,L.src=o,L.type="solid",a.getRGB(i.fill).error&&(t.type in{circle:1,ellipse:1}||c(i.fill).charAt()!="r")&&C(t,i.fill,L)&&(m.fill="none",m.gradient=i.fill,L.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var P=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+a.getRGB(i.fill).o+1||2)-1);P=h(g(P,0),1),L.opacity=P,L.src&&(L.color="none")}l.appendChild(L);var Q=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],T=!1;!Q&&(T=Q=F("stroke"));if(i.stroke&&i.stroke!="none"||i["stroke-width"]||i["stroke-opacity"]!=null||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])Q.on=!0;(i.stroke=="none"||i.stroke===null||Q.on==null||i.stroke==0||i["stroke-width"]==0)&&(Q.on=!1);var U=a.getRGB(i.stroke);Q.on&&i.stroke&&(Q.color=U.hex),P=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+U.o+1||2)-1);var V=(d(i["stroke-width"])||1)*.75;P=h(g(P,0),1),i["stroke-width"]==null&&(V=m["stroke-width"]),i["stroke-width"]&&(Q.weight=V),V&&V<1&&(P*=V)&&(Q.weight=1),Q.opacity=P,i["stroke-linejoin"]&&(Q.joinstyle=i["stroke-linejoin"]||"miter"),Q.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(Q.endcap=i["stroke-linecap"]=="butt"?"flat":i["stroke-linecap"]=="square"?"square":"round");if(i["stroke-dasharray"]){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};Q.dashstyle=W[b](i["stroke-dasharray"])?W[i["stroke-dasharray"]]:o}T&&l.appendChild(Q)}if(t.type=="text"){t.paper.canvas.style.display=o;var X=t.paper.span,Y=100,Z=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=X.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),Z=d(m["font-size"]||Z&&Z[0])||10,p.fontSize=Z*Y+"px",t.textpath.string&&(X.innerHTML=c(t.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var $=X.getBoundingClientRect();t.W=m.w=($.right-$.left)/Y,t.H=m.h=($.bottom-$.top)/Y,t.X=m.x,t.Y=m.y+t.H/2,("x"in i||"y"in i)&&(t.path.v=a.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));var _=["x","y","text","font","font-family","font-weight","font-style","font-size"];for(var ba=0,bb=_.length;ba<bb;ba++)if(_[ba]in i){t._.dirty=1;break}switch(m["text-anchor"]){case"start":t.textpath.style["v-text-align"]="left",t.bbx=t.W/2;break;case"end":t.textpath.style["v-text-align"]="right",t.bbx=-t.W/2;break;default:t.textpath.style["v-text-align"]="center",t.bbx=0}t.textpath.style["v-text-kern"]=!0}},C=function(b,f,g){b.attrs=b.attrs||{};var h=b.attrs,i=Math.pow,j,k,l="linear",m=".5 .5";b.attrs.gradient=f,f=c(f).replace(a._radial_gradient,function(a,b,c){l="radial",b&&c&&(b=d(b),c=d(c),i(b-.5,2)+i(c-.5,2)>.25&&(c=e.sqrt(.25-i(b-.5,2))*((c>.5)*2-1)+.5),m=b+n+c);return o}),f=f.split(/\s*\-\s*/);if(l=="linear"){var p=f.shift();p=-d(p);if(isNaN(p))return null}var q=a._parseDots(f);if(!q)return null;b=b.shape||b.node;if(q.length){b.removeChild(g),g.on=!0,g.method="none",g.color=q[0].color,g.color2=q[q.length-1].color;var r=[];for(var s=0,t=q.length;s<t;s++)q[s].offset&&r.push(q[s].offset+n+q[s].color);g.colors=r.length?r.join():"0% "+g.color,l=="radial"?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=m,g.angle=0):(g.type="gradient",g.angle=(270-p)%360),b.appendChild(g)}return 1},D=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=c,this.matrix=a.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},E=a.el;D.prototype=E,E.constructor=D,E.transform=function(b){if(b==null)return this._.transform;var d=this.paper._viewBoxShift,e=d?"s"+[d.scale,d.scale]+"-1-1t"+[d.dx,d.dy]:o,f;d&&(f=b=c(b).replace(/\.{3}|\u2026/g,this._.transform||o)),a._extractTransform(this,e+b);var g=this.matrix.clone(),h=this.skew,i=this.node,j,k=~c(this.attrs.fill).indexOf("-"),l=!c(this.attrs.fill).indexOf("url(");g.translate(-0.5,-0.5);if(l||k||this.type=="image"){h.matrix="1 0 0 1",h.offset="0 0",j=g.split();if(k&&j.noRotation||!j.isSimple){i.style.filter=g.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;i.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else i.style.filter=o,z(this,j.scalex,j.scaley,j.dx,j.dy,j.rotate)}else i.style.filter=o,h.matrix=c(g),h.offset=g.offset();f&&(this._.transform=f);return this},E.rotate=function(a,b,e){if(this.removed)return this;if(a!=null){a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,b,e]]));return this}},E.translate=function(a,b){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=b),this.transform(this._.transform.concat([["t",a,b]]));return this},E.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]])),this._.dirtyT=1;return this},E.hide=function(){!this.removed&&(this.node.style.display="none");return this},E.show=function(){!this.removed&&(this.node.style.display=o);return this},E._getBBox=function(){if(this.removed)return{};return{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&!!this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),a.eve.unbind("raphael.*.*."+this.id),a._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;this.removed=!0}},E.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c==j&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;var g=c.split(k),h={};for(var i=0,m=g.length;i<m;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return m-1?h:h[g[0]]}if(this.attrs&&d==null&&a.is(c,"array")){h={};for(i=0,m=c.length;i<m;i++)h[c[i]]=this.attr(c[i]);return h}var n;d!=null&&(n={},n[c]=d),d==null&&a.is(c,"object")&&(n=c);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[b](o)&&n[b](o)&&a.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[b](q)&&(n[q]=p[q])}n.text&&this.type=="text"&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&a._tofront(this,this.paper);return this},E.toBack=function(){if(this.removed)return this;this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper));return this},E.insertAfter=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[b.length-1]),b.node.nextSibling?b.node.parentNode.insertBefore(this.node,b.node.nextSibling):b.node.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},E.insertBefore=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[0]),b.node.parentNode.insertBefore(this.node,b.node),a._insertbefore(this,b,this.paper);return this},E.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;d=d.replace(r,o),+b!==0?(this.attrs.blur=b,c.filter=d+n+m+".Blur(pixelradius="+(+b||1.5)+")",c.margin=a.format("-{0}px 0 0 -{0}px",f(+b||1.5))):(c.filter=d,c.margin=0,delete this.attrs.blur)},a._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");f.on=!0,c.appendChild(f),d.skew=f,d.transform(o);return d},a._engine.rect=function(b,c,d,e,f,g){var h=a._rectPath(c,d,e,f,g),i=b.path(h),j=i.attrs;i.X=j.x=c,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect";return i},a._engine.ellipse=function(a,b,c,d,e){var f=a.path(),g=f.attrs;f.X=b-d,f.Y=c-e,f.W=d*2,f.H=e*2,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e});return f},a._engine.circle=function(a,b,c,d){var e=a.path(),f=e.attrs;e.X=b-d,e.Y=c-d,e.W=e.H=d*2,e.type="circle",B(e,{cx:b,cy:c,r:d});return e},a._engine.image=function(b,c,d,e,f,g){var h=a._rectPath(d,e,f,g),i=b.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];k.src=c,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=c,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0);return i},a._engine.text=function(b,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=a.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=c(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,b),l={fill:"#000",stroke:"none",font:a._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=c(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),b.canvas.appendChild(h);var m=F("skew");m.on=!0,h.appendChild(m),k.skew=m,k.transform(o);return k},a._engine.setSize=function(b,c){var d=this.canvas.style;this.width=b,this.height=c,b==+b&&(b+="px"),c==+c&&(c+="px"),d.width=b,d.height=c,d.clip="rect(0 "+b+" "+c+" 0)",this._viewBox&&a._engine.setViewBox.apply(this,this._viewBox);return this},a._engine.setViewBox=function(b,c,d,e,f){a.eve("raphael.setViewBox",this,this._viewBox,[b,c,d,e,f]);var h=this.width,i=this.height,j=1/g(d/h,e/i),k,l;f&&(k=i/e,l=h/d,d*k<h&&(b-=(h-d*k)/2/k),e*l<i&&(c-=(i-e*l)/2/l)),this._viewBox=[b,c,d,e,!!f],this._viewBoxShift={dx:-b,dy:-c,scale:j},this.forEach(function(a){a.transform("...")});return this};var F;a._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},a._engine.initWin(a._g.win),a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b.container,d=b.height,e,f=b.width,g=b.x,h=b.y;if(!c)throw new Error("VML container not found.");var i=new a._Paper,j=i.canvas=a._g.doc.createElement("div"),k=j.style;g=g||0,h=h||0,f=f||512,d=d||342,i.width=f,i.height=d,f==+f&&(f+="px"),d==+d&&(d+="px"),i.coordsize=u*1e3+n+u*1e3,i.coordorigin="0 0",i.span=a._g.doc.createElement("span"),i.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",j.appendChild(i.span),k.cssText=a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",f,d),c==1?(a._g.doc.body.appendChild(j),k.left=g+"px",k.top=h+"px",k.position="absolute"):c.firstChild?c.insertBefore(j,c.firstChild):c.appendChild(j),i.renderfix=function(){};return i},a.prototype.clear=function(){a.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=a._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},a.prototype.remove=function(){a.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;return!0};var G=a.st;for(var H in E)E[b](H)&&!G[b](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}(window.Raphael)
/**
 * JustGage - a handy JavaScript plugin for generating and animating nice & clean dashboard gauges.
 * Copyright (c) 2012 Bojan Djuricic - pindjur(at)gmail(dot)com | http://www.madcog.com
 * Licensed under MIT.
 * Date: 31/07/2012
 * @author Bojan Djuricic  (@Toorshia)
 * @version 1.0
 *
 * http://www.justgage.com
 */

JustGage = function(config)
{

	if(!config.id)
	{
		alert("Missing id parameter for gauge!");
		return false;
	}
	if(!document.getElementById(config.id))
	{
		alert("No element with id: \"" + config.id + "\" found!");
		return false;
	}

	// configurable parameters
	this.config = {
		// id : string
		// this is container element id
		id                  : config.id,

		// value : int
		// value gauge is showing
		value               : (config.value) ? config.value : 0,

		// valueFontColor : string
		// color of label showing current value
		valueFontColor      : (config.valueFontColor) ? config.valueFontColor : "#010101",

		// min : int
		// min value
		min                 : (config.min) ? config.min : 0,

		// max : int
		// max value
		max                 : (config.max) ? config.max : 100,

		// showMinMax : bool
		// hide or display min and max values
		showMinMax          : (config.showMinMax != null) ? config.showMinMax : true,

		// gaugeWidthScale : float
		// width of the gauge element
		gaugeWidthScale     : (config.gaugeWidthScale) ? config.gaugeWidthScale : 1.0,

		// gaugeColor : string
		// background color of gauge element
		gaugeColor          : (config.gaugeColor) ? config.gaugeColor : "#edebeb",

		// label : string
		// text to show below value
		label               : (config.label) ? config.label : "",

		// showInnerShadow : bool
		// give gauge element small amount of inner shadow
		showInnerShadow     : (config.showInnerShadow != null) ? config.showInnerShadow : true,

		// shadowOpacity : int
		// 0 ~ 1
		shadowOpacity       : (config.shadowOpacity) ? config.shadowOpacity : 0.2,

		// shadowSize: int
		// inner shadow size
		shadowSize          : (config.shadowSize) ? config.shadowSize : 5,

		// shadowVerticalOffset : int
		// how much shadow is offset from top
		shadowVerticalOffset: (config.shadowVerticalOffset) ? config.shadowVerticalOffset : 3,

		// levelColors : string[]
		// colors of indicator, from lower to upper, in RGB format
		levelColors         : (config.levelColors) ? config.levelColors : percentColors,

		// levelColorsGradient : bool
		// whether to use gradual color change for value, or sector-based
		levelColorsGradient : (config.levelColorsGradient != null) ? config.levelColorsGradient : true,

		// labelFontColor : string
		// color of label showing label under value
		labelFontColor      : (config.labelFontColor) ? config.labelFontColor : "#b3b3b3",

		// startAnimationTime : int
		// length of initial animation
		startAnimationTime  : (config.startAnimationTime) ? config.startAnimationTime : 700,

		// startAnimationType : string
		// type of initial animation (linear, >, <,  <>, bounce)
		startAnimationType  : (config.startAnimationType) ? config.startAnimationType : ">",

		// refreshAnimationTime : int
		// length of refresh animation
		refreshAnimationTime: (config.refreshAnimationTime) ? config.refreshAnimationTime : 700,

		// refreshAnimationType : string
		// type of refresh animation (linear, >, <,  <>, bounce)
		refreshAnimationType: (config.refreshAnimationType) ? config.refreshAnimationType : ">"
	};

	// overflow values
	if(config.value > this.config.max) this.config.value = this.config.max;
	if(config.value < this.config.min) this.config.value = this.config.min;
	this.originalValue = config.value;

	// canvas
	this.canvas = Raphael(this.config.id, "100%", "100%");

	// canvas dimensions
	//var canvasW = document.getElementById(this.config.id).clientWidth;
	//var canvasH = document.getElementById(this.config.id).clientHeight;
	var canvasW = getStyle(document.getElementById(this.config.id), "width").slice(0, -2) * 1;
	var canvasH = getStyle(document.getElementById(this.config.id), "height").slice(0, -2) * 1;

	// widget dimensions
	var widgetW, widgetH;
	if((canvasW / canvasH) > 1.25)
	{
		widgetW = 1.25 * canvasH;
		widgetH = canvasH;
	}
	else
	{
		widgetW = canvasW;
		widgetH = canvasW / 1.25;
	}

	// delta
	var dx = (canvasW - widgetW) / 2;
	var dy = (canvasH - widgetH) / 2;

	// value
	var valueFontSize = ((widgetH / 6.4) > 16) ? (widgetH / 6.4) : 16;
	var valueX = dx + widgetW / 2;
	var valueY = dy + widgetH / 1.4;

	// label
	var labelFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
	var labelX = dx + widgetW / 2;
	//var labelY = dy + widgetH / 1.126760563380282;
	var labelY = valueY + valueFontSize / 2 + 6;

	// min
	var minFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
	var minX = dx + (widgetW / 10) + (widgetW / 6.666666666666667 * this.config.gaugeWidthScale) / 2;
	var minY = dy + widgetH / 1.126760563380282;

	// max
	var maxFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
	var maxX = dx + widgetW - (widgetW / 10) - (widgetW / 6.666666666666667 * this.config.gaugeWidthScale) / 2;
	var maxY = dy + widgetH / 1.126760563380282;

	// parameters
	this.params = {
		canvasW      : canvasW,
		canvasH      : canvasH,
		widgetW      : widgetW,
		widgetH      : widgetH,
		dx           : dx,
		dy           : dy,
		valueFontSize: valueFontSize,
		valueX       : valueX,
		valueY       : valueY,
		labelFontSize: labelFontSize,
		labelX       : labelX,
		labelY       : labelY,
		minFontSize  : minFontSize,
		minX         : minX,
		minY         : minY,
		maxFontSize  : maxFontSize,
		maxX         : maxX,
		maxY         : maxY
	};

	// pki - custom attribute for generating gauge paths
	this.canvas.customAttributes.pki = function(value, min, max, w, h, dx, dy, gws)
	{

		var alpha = (1 - (value - min) / (max - min)) * Math.PI , Ro = w / 2 - w / 10, Ri = Ro - w / 6.666666666666667 * gws,

			Cx = w / 2 + dx, Cy = h / 1.25 + dy,

			Xo = w / 2 + dx + Ro * Math.cos(alpha), Yo = h - (h - Cy) + dy - Ro * Math.sin(alpha), Xi = w / 2 + dx + Ri * Math.cos(alpha), Yi = h - (h - Cy) + dy - Ri * Math.sin(alpha), path;

		path += "M" + (Cx - Ri) + "," + Cy + " ";
		path += "L" + (Cx - Ro) + "," + Cy + " ";
		path += "A" + Ro + "," + Ro + " 0 0,1 " + Xo + "," + Yo + " ";
		path += "L" + Xi + "," + Yi + " ";
		path += "A" + Ri + "," + Ri + " 0 0,0 " + (Cx - Ri) + "," + Cy + " ";
		path += "z ";
		return { path: path };
	}

	// gauge
	this.gauge = this.canvas.path().attr({
		"stroke": "none",
		"fill"  : this.config.gaugeColor,
		pki     : [this.config.max, this.config.min, this.config.max, this.params.widgetW, this.params.widgetH,
		           this.params.dx, this.params.dy, this.config.gaugeWidthScale]
	});
	this.gauge.id = this.config.id + "-gauge";

	// level
	this.level = this.canvas.path().attr({
		"stroke": "none",
		"fill"  : getColorForPercentage((this.config.value - this.config.min) / (this.config.max - this.config.min), this.config.levelColors, this.config.levelColorsGradient),
		pki     : [this.config.min, this.config.min, this.config.max, this.params.widgetW, this.params.widgetH,
		           this.params.dx, this.params.dy, this.config.gaugeWidthScale]
	});
	this.level.id = this.config.id + "-level";

	// value
	this.txtValue = this.canvas.text(this.params.valueX, this.params.valueY, this.originalValue);
	this.txtValue.attr({
		"font-size"   : this.params.valueFontSize,
		"font-weight" : "bold",
		"font-family" : "Arial",
		"fill"        : this.config.valueFontColor,
		"fill-opacity": "0"
	});
	this.txtValue.id = this.config.id + "-txtvalue";

	// label
	this.txtLabel = this.canvas.text(this.params.labelX, this.params.labelY, this.config.label);
	this.txtLabel.attr({
		"font-size"   : this.params.labelFontSize,
		"font-weight" : "normal",
		"font-family" : "Arial",
		"fill"        : this.config.labelFontColor,
		"fill-opacity": "0"
	});
	this.txtLabel.id = this.config.id + "-txtlabel";

	// min
	this.txtMin = this.canvas.text(this.params.minX, this.params.minY, this.config.min);
	this.txtMin.attr({
		"font-size"   : this.params.minFontSize,
		"font-weight" : "normal",
		"font-family" : "Arial",
		"fill"        : this.config.labelFontColor,
		"fill-opacity": (this.config.showMinMax == true) ? "1" : "0"
	});
	this.txtMin.id = this.config.id + "-txtmin";

	// max
	this.txtMax = this.canvas.text(this.params.maxX, this.params.maxY, this.config.max);
	this.txtMax.attr({
		"font-size"   : this.params.maxFontSize,
		"font-weight" : "normal",
		"font-family" : "Arial",
		"fill"        : this.config.labelFontColor,
		"fill-opacity": (this.config.showMinMax == true) ? "1" : "0"
	});
	this.txtMax.id = this.config.id + "-txtmax";

	var defs = this.canvas.canvas.childNodes[1];
	var svg = "http://www.w3.org/2000/svg";


	if(ie < 9)
	{
		onCreateElementNsReady(function()
		{
			this.generateShadow();
		});
	}
	else
	{
		this.generateShadow(svg, defs);
	}

	// animate
	this.level.animate({pki: [this.config.value, this.config.min, this.config.max, this.params.widgetW,
	                          this.params.widgetH, this.params.dx, this.params.dy, this.config.gaugeWidthScale
	]}, this.config.startAnimationTime, this.config.startAnimationType);

	this.txtValue.animate({"fill-opacity": "1"}, this.config.startAnimationTime, this.config.startAnimationType);
	this.txtLabel.animate({"fill-opacity": "1"}, this.config.startAnimationTime, this.config.startAnimationType);
};

// refresh gauge level
JustGage.prototype.refresh = function(val)
{
	// overflow values
	originalVal = val;
	if(val > this.config.max)
	{
		val = this.config.max;
	}
	if(val < this.config.min)
	{
		val = this.config.min;
	}

	var color = getColorForPercentage((val - this.config.min) / (this.config.max - this.config.min), this.config.levelColors, this.config.levelColorsGradient);
	this.canvas.getById(this.config.id + "-txtvalue").attr({"text": originalVal});
	this.canvas.getById(this.config.id + "-level").animate({pki                                       : [val,
	                                                                                                     this.config.min,
	                                                                                                     this.config.max,
	                                                                                                     this.params.widgetW,
	                                                                                                     this.params.widgetH,
	                                                                                                     this.params.dx,
	                                                                                                     this.params.dy,
	                                                                                                     this.config.gaugeWidthScale
	], "fill"                                                                                         : color}, this.config.refreshAnimationTime, this.config.refreshAnimationType);
};

var percentColors = [
	"#a9d70b", "#f9c802", "#ff0000"
]

JustGage.prototype.generateShadow = function(svg, defs)
{
	// FILTER
	var gaussFilter = document.createElementNS(svg, "filter");
	gaussFilter.setAttribute("id", this.config.id + "-inner-shadow");
	defs.appendChild(gaussFilter);

	// offset
	var feOffset = document.createElementNS(svg, "feOffset");
	feOffset.setAttribute("dx", 0);
	feOffset.setAttribute("dy", this.config.shadowVerticalOffset);
	gaussFilter.appendChild(feOffset);

	// blur
	var feGaussianBlur = document.createElementNS(svg, "feGaussianBlur");
	feGaussianBlur.setAttribute("result", "offset-blur");
	feGaussianBlur.setAttribute("stdDeviation", this.config.shadowSize);
	gaussFilter.appendChild(feGaussianBlur);

	// composite 1
	var feComposite1 = document.createElementNS(svg, "feComposite");
	feComposite1.setAttribute("operator", "out");
	feComposite1.setAttribute("in", "SourceGraphic");
	feComposite1.setAttribute("in2", "offset-blur");
	feComposite1.setAttribute("result", "inverse");
	gaussFilter.appendChild(feComposite1);

	// flood
	var feFlood = document.createElementNS(svg, "feFlood");
	feFlood.setAttribute("flood-color", "black");
	feFlood.setAttribute("flood-opacity", this.config.shadowOpacity);
	feFlood.setAttribute("result", "color");
	gaussFilter.appendChild(feFlood);

	// composite 2
	var feComposite2 = document.createElementNS(svg, "feComposite");
	feComposite2.setAttribute("operator", "in");
	feComposite2.setAttribute("in", "color");
	feComposite2.setAttribute("in2", "inverse");
	feComposite2.setAttribute("result", "shadow");
	gaussFilter.appendChild(feComposite2);

	// composite 3
	var feComposite3 = document.createElementNS(svg, "feComposite");
	feComposite3.setAttribute("operator", "over");
	feComposite3.setAttribute("in", "shadow");
	feComposite3.setAttribute("in2", "SourceGraphic");
	gaussFilter.appendChild(feComposite3);

	// set shadow
	if(this.config.showInnerShadow == true)
	{
		this.canvas.canvas.childNodes[2].setAttribute("filter", "url(#" + this.config.id + "-inner-shadow)");
		this.canvas.canvas.childNodes[3].setAttribute("filter", "url(#" + this.config.id + "-inner-shadow)");
	}
}

var getColorForPercentage = function(pct, col, grad)
{

	var no = col.length;
	if(no === 1) return col[0];
	var inc = (grad) ? (1 / (no - 1)) : (1 / no);
	var colors = new Array();
	for(var i = 0; i < col.length; i++)
	{
		var percentage = (grad) ? (inc * i) : (inc * (i + 1));
		var rval = parseInt((cutHex(col[i])).substring(0, 2), 16);
		var gval = parseInt((cutHex(col[i])).substring(2, 4), 16);
		var bval = parseInt((cutHex(col[i])).substring(4, 6), 16);
		colors[i] = { pct: percentage, color: { r: rval, g: gval, b: bval  } };
	}

	if(pct == 0) return 'rgb(' + [colors[0].color.r, colors[0].color.g, colors[0].color.b].join(',') + ')';
	for(var i = 0; i < colors.length; i++)
	{
		if(pct <= colors[i].pct)
		{
			if(grad == true)
			{
				var lower = colors[i - 1];
				var upper = colors[i];
				var range = upper.pct - lower.pct;
				var rangePct = (pct - lower.pct) / range;
				var pctLower = 1 - rangePct;
				var pctUpper = rangePct;
				var color = {
					r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
					g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
					b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
				};
				return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
			}
			else
			{
				return 'rgb(' + [colors[i].color.r, colors[i].color.g, colors[i].color.b].join(',') + ')';
			}
		}
	}
}

function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cutHex(str)
{
	return (str.charAt(0) == "#") ? str.substring(1, 7) : str
}

function getStyle(oElm, strCssRule)
{
	var strValue = "";
	if(document.defaultView && document.defaultView.getComputedStyle)
	{
		strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
	}
	else if(oElm.currentStyle)
	{
		strCssRule = strCssRule.replace(/\-(\w)/g, function(strMatch, p1)
		{
			return p1.toUpperCase();
		});
		strValue = oElm.currentStyle[strCssRule];
	}
	return strValue;
}

function onCreateElementNsReady(func)
{
	if(document.createElementNS != undefined)
	{
		func();
	}
	else
	{
		setTimeout(function()
		{
			onCreateElementNsReady(func);
		}, 100);
	}
}

// ----------------------------------------------------------
// A short snippet for detecting versions of IE in JavaScript
// without resorting to user-agent sniffing
// ----------------------------------------------------------
// If you're not in IE (or IE version is less than 5) then:
// ie === undefined
// If you're in IE (>=5) then you can determine which version:
// ie === 7; // IE7
// Thus, to detect IE:
// if (ie) {}
// And to detect the version:
// ie === 6 // IE6
// ie > 7 // IE8, IE9 ...
// ie < 9 // Anything less than IE9
// ----------------------------------------------------------

// UPDATE: Now using Live NodeList idea from @jdalton

var ie = (function()
{

	var undef, v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i');

	while(div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]);

	return v > 4 ? v : undef;

}());
/* jquery.sparkline 2.1.2 - http://omnipotent.net/jquery.sparkline/
** Licensed under the New BSD License - see above site for details */

(function(a,b,c){(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):jQuery&&!jQuery.fn.sparkline&&a(jQuery)})(function(d){"use strict";var e={},f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L=0;f=function(){return{common:{type:"line",lineColor:"#00f",fillColor:"#cdf",defaultPixelsPerValue:3,width:"auto",height:"auto",composite:!1,tagValuesAttribute:"values",tagOptionsPrefix:"spark",enableTagOptions:!1,enableHighlight:!0,highlightLighten:1.4,tooltipSkipNull:!0,tooltipPrefix:"",tooltipSuffix:"",disableHiddenCheck:!1,numberFormatter:!1,numberDigitGroupCount:3,numberDigitGroupSep:",",numberDecimalMark:".",disableTooltips:!1,disableInteraction:!1},line:{spotColor:"#f80",highlightSpotColor:"#5f5",highlightLineColor:"#f22",spotRadius:1.5,minSpotColor:"#f80",maxSpotColor:"#f80",lineWidth:1,normalRangeMin:c,normalRangeMax:c,normalRangeColor:"#ccc",drawNormalOnTop:!1,chartRangeMin:c,chartRangeMax:c,chartRangeMinX:c,chartRangeMaxX:c,tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:"#3366cc",negBarColor:"#f44",stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],zeroColor:c,nullColor:c,zeroAxis:!0,barWidth:4,barSpacing:1,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,colorMap:c,tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:"#6f6",negBarColor:"#f44",zeroBarColor:"#999",colorMap:{},tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{"-1":"Loss",0:"Draw",1:"Win"}}},discrete:{lineHeight:"auto",thresholdColor:c,thresholdValue:0,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,tooltipFormat:new h("{{prefix}}{{value}}{{suffix}}")},bullet:{targetColor:"#f33",targetWidth:3,performanceColor:"#33f",rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],base:c,tooltipFormat:new h("{{fieldkey:fields}} - {{value}}"),tooltipValueLookups:{fields:{r:"Range",p:"Performance",t:"Target"}}},pie:{offset:0,sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],borderWidth:0,borderColor:"#000",tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:!1,boxLineColor:"#000",boxFillColor:"#cdf",whiskerColor:"#000",outlierLineColor:"#333",outlierFillColor:"#fff",medianColor:"#f00",showOutliers:!0,outlierIQR:1.5,spotRadius:1.5,target:c,targetColor:"#4a2",chartRangeMax:c,chartRangeMin:c,tooltipFormat:new h("{{field:fields}}: {{value}}"),tooltipFormatFieldlistKey:"field",tooltipValueLookups:{fields:{lq:"Lower Quartile",med:"Median",uq:"Upper Quartile",lo:"Left Outlier",ro:"Right Outlier",lw:"Left Whisker",rw:"Right Whisker"}}}}},E='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',g=function(){var a,b;return a=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(a.prototype=d.extend(new arguments[0],arguments[arguments.length-1]),a._super=arguments[0].prototype):a.prototype=arguments[arguments.length-1],arguments.length>2&&(b=Array.prototype.slice.call(arguments,1,-1),b.unshift(a.prototype),d.extend.apply(d,b))):a.prototype=arguments[0],a.prototype.cls=a,a},d.SPFormatClass=h=g({fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,precre:/(\w+)\.(\d+)/,init:function(a,b){this.format=a,this.fclass=b},render:function(a,b,d){var e=this,f=a,g,h,i,j,k;return this.format.replace(this.fre,function(){var a;return h=arguments[1],i=arguments[3],g=e.precre.exec(h),g?(k=g[2],h=g[1]):k=!1,j=f[h],j===c?"":i&&b&&b[i]?(a=b[i],a.get?b[i].get(j)||j:b[i][j]||j):(n(j)&&(d.get("numberFormatter")?j=d.get("numberFormatter")(j):j=s(j,k,d.get("numberDigitGroupCount"),d.get("numberDigitGroupSep"),d.get("numberDecimalMark"))),j)})}}),d.spformat=function(a,b){return new h(a,b)},i=function(a,b,c){return a<b?b:a>c?c:a},j=function(a,c){var d;return c===2?(d=b.floor(a.length/2),a.length%2?a[d]:(a[d-1]+a[d])/2):a.length%2?(d=(a.length*c+c)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1]):(d=(a.length*c+2)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1])},k=function(a){var b;switch(a){case"undefined":a=c;break;case"null":a=null;break;case"true":a=!0;break;case"false":a=!1;break;default:b=parseFloat(a),a==b&&(a=b)}return a},l=function(a){var b,c=[];for(b=a.length;b--;)c[b]=k(a[b]);return c},m=function(a,b){var c,d,e=[];for(c=0,d=a.length;c<d;c++)a[c]!==b&&e.push(a[c]);return e},n=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},s=function(a,b,c,e,f){var g,h;a=(b===!1?parseFloat(a).toString():a.toFixed(b)).split(""),g=(g=d.inArray(".",a))<0?a.length:g,g<a.length&&(a[g]=f);for(h=g-c;h>0;h-=c)a.splice(h,0,e);return a.join("")},o=function(a,b,c){var d;for(d=b.length;d--;){if(c&&b[d]===null)continue;if(b[d]!==a)return!1}return!0},p=function(a){var b=0,c;for(c=a.length;c--;)b+=typeof a[c]=="number"?a[c]:0;return b},r=function(a){return d.isArray(a)?a:[a]},q=function(b){var c;a.createStyleSheet?a.createStyleSheet().cssText=b:(c=a.createElement("style"),c.type="text/css",a.getElementsByTagName("head")[0].appendChild(c),c[typeof a.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=b)},d.fn.simpledraw=function(b,e,f,g){var h,i;if(f&&(h=this.data("_jqs_vcanvas")))return h;if(d.fn.sparkline.canvas===!1)return!1;if(d.fn.sparkline.canvas===c){var j=a.createElement("canvas");if(!j.getContext||!j.getContext("2d")){if(!a.namespaces||!!a.namespaces.v)return d.fn.sparkline.canvas=!1,!1;a.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"),d.fn.sparkline.canvas=function(a,b,c,d){return new J(a,b,c)}}else d.fn.sparkline.canvas=function(a,b,c,d){return new I(a,b,c,d)}}return b===c&&(b=d(this).innerWidth()),e===c&&(e=d(this).innerHeight()),h=d.fn.sparkline.canvas(b,e,this,g),i=d(this).data("_jqs_mhandler"),i&&i.registerCanvas(h),h},d.fn.cleardraw=function(){var a=this.data("_jqs_vcanvas");a&&a.reset()},d.RangeMapClass=t=g({init:function(a){var b,c,d=[];for(b in a)a.hasOwnProperty(b)&&typeof b=="string"&&b.indexOf(":")>-1&&(c=b.split(":"),c[0]=c[0].length===0?-Infinity:parseFloat(c[0]),c[1]=c[1].length===0?Infinity:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1},get:function(a){var b=this.rangelist,d,e,f;if((f=this.map[a])!==c)return f;if(b)for(d=b.length;d--;){e=b[d];if(e[0]<=a&&e[1]>=a)return e[2]}return c}}),d.range_map=function(a){return new t(a)},u=g({init:function(a,b){var c=d(a);this.$el=c,this.options=b,this.currentPageX=0,this.currentPageY=0,this.el=a,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!b.get("disableTooltips"),this.highlightEnabled=!b.get("disableHighlight")},registerSparkline:function(a){this.splist.push(a),this.over&&this.updateDisplay()},registerCanvas:function(a){var b=d(a.canvas);this.canvas=a,this.$canvas=b,b.mouseenter(d.proxy(this.mouseenter,this)),b.mouseleave(d.proxy(this.mouseleave,this)),b.click(d.proxy(this.mouseclick,this))},reset:function(a){this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=c)},mouseclick:function(a){var b=d.Event("sparklineClick");b.originalEvent=a,b.sparklines=this.splist,this.$el.trigger(b)},mouseenter:function(b){d(a.body).unbind("mousemove.jqs"),d(a.body).bind("mousemove.jqs",d.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new v(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()},mouseleave:function(){d(a.body).unbind("mousemove.jqs");var b=this.splist,c=b.length,e=!1,f,g;this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null);for(g=0;g<c;g++)f=b[g],f.clearRegionHighlight()&&(e=!0);e&&this.canvas.render()},mousemove:function(a){this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()},updateDisplay:function(){var a=this.splist,b=a.length,c=!1,e=this.$canvas.offset(),f=this.currentPageX-e.left,g=this.currentPageY-e.top,h,i,j,k,l;if(!this.over)return;for(j=0;j<b;j++)i=a[j],k=i.setRegionHighlight(this.currentEl,f,g),k&&(c=!0);if(c){l=d.Event("sparklineRegionChange"),l.sparklines=this.splist,this.$el.trigger(l);if(this.tooltip){h="";for(j=0;j<b;j++)i=a[j],h+=i.getCurrentRegionTooltip();this.tooltip.setContent(h)}this.disableHighlight||this.canvas.render()}k===null&&this.mouseleave()}}),v=g({sizeStyle:"position: static !important;display: block !important;visibility: hidden !important;float: left !important;",init:function(b){var c=b.get("tooltipClassname","jqstooltip"),e=this.sizeStyle,f;this.container=b.get("tooltipContainer")||a.body,this.tooltipOffsetX=b.get("tooltipOffsetX",10),this.tooltipOffsetY=b.get("tooltipOffsetY",12),d("#jqssizetip").remove(),d("#jqstooltip").remove(),this.sizetip=d("<div/>",{id:"jqssizetip",style:e,"class":c}),this.tooltip=d("<div/>",{id:"jqstooltip","class":c}).appendTo(this.container),f=this.tooltip.offset(),this.offsetLeft=f.left,this.offsetTop=f.top,this.hidden=!0,d(window).unbind("resize.jqs scroll.jqs"),d(window).bind("resize.jqs scroll.jqs",d.proxy(this.updateWindowDims,this)),this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=d(window).scrollTop(),this.scrollLeft=d(window).scrollLeft(),this.scrollRight=this.scrollLeft+d(window).width(),this.updatePosition()},getSize:function(a){this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()},setContent:function(a){if(!a){this.tooltip.css("visibility","hidden"),this.hidden=!0;return}this.getSize(a),this.tooltip.html(a).css({width:this.width,height:this.height,visibility:"visible"}),this.hidden&&(this.hidden=!1,this.updatePosition())},updatePosition:function(a,b){if(a===c){if(this.mousex===c)return;a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop}else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;if(!this.height||!this.width||this.hidden)return;b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({left:a,top:b})},remove:function(){this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=c,d(window).unbind("resize.jqs scroll.jqs")}}),F=function(){q(E)},d(F),K=[],d.fn.sparkline=function(b,e){return this.each(function(){var f=new d.fn.sparkline.options(this,e),g=d(this),h,i;h=function(){var e,h,i,j,k,l,m;if(b==="html"||b===c){m=this.getAttribute(f.get("tagValuesAttribute"));if(m===c||m===null)m=g.html();e=m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")}else e=b;h=f.get("width")==="auto"?e.length*f.get("defaultPixelsPerValue"):f.get("width");if(f.get("height")==="auto"){if(!f.get("composite")||!d.data(this,"_jqs_vcanvas"))j=a.createElement("span"),j.innerHTML="a",g.html(j),i=d(j).innerHeight()||d(j).height(),d(j).remove(),j=null}else i=f.get("height");f.get("disableInteraction")?k=!1:(k=d.data(this,"_jqs_mhandler"),k?f.get("composite")||k.reset():(k=new u(this,f),d.data(this,"_jqs_mhandler",k)));if(f.get("composite")&&!d.data(this,"_jqs_vcanvas")){d.data(this,"_jqs_errnotify")||(alert("Attempted to attach a composite sparkline to an element with no existing sparkline"),d.data(this,"_jqs_errnotify",!0));return}l=new(d.fn.sparkline[f.get("type")])(this,e,f,h,i),l.render(),k&&k.registerSparkline(l)};if(d(this).html()&&!f.get("disableHiddenCheck")&&d(this).is(":hidden")||!d(this).parents("body").length){if(!f.get("composite")&&d.data(this,"_jqs_pending"))for(i=K.length;i;i--)K[i-1][0]==this&&K.splice(i-1,1);K.push([this,h]),d.data(this,"_jqs_pending",!0)}else h.call(this)})},d.fn.sparkline.defaults=f(),d.sparkline_display_visible=function(){var a,b,c,e=[];for(b=0,c=K.length;b<c;b++)a=K[b][0],d(a).is(":visible")&&!d(a).parents().is(":hidden")?(K[b][1].call(a),d.data(K[b][0],"_jqs_pending",!1),e.push(b)):!d(a).closest("html").length&&!d.data(a,"_jqs_pending")&&(d.data(K[b][0],"_jqs_pending",!1),e.push(b));for(b=e.length;b;b--)K.splice(e[b-1],1)},d.fn.sparkline.options=g({init:function(a,b){var c,f,g,h;this.userOptions=b=b||{},this.tag=a,this.tagValCache={},f=d.fn.sparkline.defaults,g=f.common,this.tagOptionsPrefix=b.enableTagOptions&&(b.tagOptionsPrefix||g.tagOptionsPrefix),h=this.getTagSetting("type"),h===e?c=f[b.type||g.type]:c=f[h],this.mergedOptions=d.extend({},g,c,b)},getTagSetting:function(a){var b=this.tagOptionsPrefix,d,f,g,h;if(b===!1||b===c)return e;if(this.tagValCache.hasOwnProperty(a))d=this.tagValCache.key;else{d=this.tag.getAttribute(b+a);if(d===c||d===null)d=e;else if(d.substr(0,1)==="["){d=d.substr(1,d.length-2).split(",");for(f=d.length;f--;)d[f]=k(d[f].replace(/(^\s*)|(\s*$)/g,""))}else if(d.substr(0,1)==="{"){g=d.substr(1,d.length-2).split(","),d={};for(f=g.length;f--;)h=g[f].split(":",2),d[h[0].replace(/(^\s*)|(\s*$)/g,"")]=k(h[1].replace(/(^\s*)|(\s*$)/g,""))}else d=k(d);this.tagValCache.key=d}return d},get:function(a,b){var d=this.getTagSetting(a),f;return d!==e?d:(f=this.mergedOptions[a])===c?b:f}}),d.fn.sparkline._base=g({disabled:!1,init:function(a,b,e,f,g){this.el=a,this.$el=d(a),this.values=b,this.options=e,this.width=f,this.height=g,this.currentRegion=c},initTarget:function(){var a=!this.options.get("disableInteraction");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0},render:function(){return this.disabled?(this.el.innerHTML="",!1):!0},getRegion:function(a,b){},setRegionHighlight:function(a,b,d){var e=this.currentRegion,f=!this.options.get("disableHighlight"),g;return b>this.canvasWidth||d>this.canvasHeight||b<0||d<0?null:(g=this.getRegion(a,b,d),e!==g?(e!==c&&f&&this.removeHighlight(),this.currentRegion=g,g!==c&&f&&this.renderHighlight(),!0):!1)},clearRegionHighlight:function(){return this.currentRegion!==c?(this.removeHighlight(),this.currentRegion=c,!0):!1},renderHighlight:function(){this.changeHighlight(!0)},removeHighlight:function(){this.changeHighlight(!1)},changeHighlight:function(a){},getCurrentRegionTooltip:function(){var a=this.options,b="",e=[],f,g,i,j,k,l,m,n,o,p,q,r,s,t;if(this.currentRegion===c)return"";f=this.getCurrentRegionFields(),q=a.get("tooltipFormatter");if(q)return q(this,a,f);a.get("tooltipChartTitle")&&(b+='<div class="jqs jqstitle">'+a.get("tooltipChartTitle")+"</div>\n"),g=this.options.get("tooltipFormat");if(!g)return"";d.isArray(g)||(g=[g]),d.isArray(f)||(f=[f]),m=this.options.get("tooltipFormatFieldlist"),n=this.options.get("tooltipFormatFieldlistKey");if(m&&n){o=[];for(l=f.length;l--;)p=f[l][n],(t=d.inArray(p,m))!=-1&&(o[t]=f[l]);f=o}i=g.length,s=f.length;for(l=0;l<i;l++){r=g[l],typeof r=="string"&&(r=new h(r)),j=r.fclass||"jqsfield";for(t=0;t<s;t++)if(!f[t].isNull||!a.get("tooltipSkipNull"))d.extend(f[t],{prefix:a.get("tooltipPrefix"),suffix:a.get("tooltipSuffix")}),k=r.render(f[t],a.get("tooltipValueLookups"),a),e.push('<div class="'+j+'">'+k+"</div>")}return e.length?b+e.join("\n"):""},getCurrentRegionFields:function(){},calcHighlightColor:function(a,c){var d=c.get("highlightColor"),e=c.get("highlightLighten"),f,g,h,j;if(d)return d;if(e){f=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a);if(f){h=[],g=a.length===4?16:1;for(j=0;j<3;j++)h[j]=i(b.round(parseInt(f[j+1],16)*g*e),0,255);return"rgb("+h.join(",")+")"}}return a}}),w={changeHighlight:function(a){var b=this.currentRegion,c=this.target,e=this.regionShapes[b],f;e&&(f=this.renderRegion(b,a),d.isArray(f)||d.isArray(e)?(c.replaceWithShapes(e,f),this.regionShapes[b]=d.map(f,function(a){return a.id})):(c.replaceWithShape(e,f),this.regionShapes[b]=f.id))},render:function(){var a=this.values,b=this.target,c=this.regionShapes,e,f,g,h;if(!this.cls._super.render.call(this))return;for(g=a.length;g--;){e=this.renderRegion(g);if(e)if(d.isArray(e)){f=[];for(h=e.length;h--;)e[h].append(),f.push(e[h].id);c[g]=f}else e.append(),c[g]=e.id;else c[g]=null}b.render()}},d.fn.sparkline.line=x=g(d.fn.sparkline._base,{type:"line",init:function(a,b,c,d,e){x._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()},getRegion:function(a,b,d){var e,f=this.regionMap;for(e=f.length;e--;)if(f[e]!==null&&b>=f[e][0]&&b<=f[e][1])return f[e][2];return c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.yvalues[a]===null,x:this.xvalues[a],y:this.yvalues[a],color:this.options.get("lineColor"),fillColor:this.options.get("fillColor"),offset:a}},renderHighlight:function(){var a=this.currentRegion,b=this.target,d=this.vertices[a],e=this.options,f=e.get("spotRadius"),g=e.get("highlightSpotColor"),h=e.get("highlightLineColor"),i,j;if(!d)return;f&&g&&(i=b.drawCircle(d[0],d[1],f,c,g),this.highlightSpotId=i.id,b.insertAfterShape(this.lastShapeId,i)),h&&(j=b.drawLine(d[0],this.canvasTop,d[0],this.canvasTop+this.canvasHeight,h),this.highlightLineId=j.id,b.insertAfterShape(this.lastShapeId,j))},removeHighlight:function(){var a=this.target;this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)},scanValues:function(){var a=this.values,c=a.length,d=this.xvalues,e=this.yvalues,f=this.yminmax,g,h,i,j,k;for(g=0;g<c;g++)h=a[g],i=typeof a[g]=="string",j=typeof a[g]=="object"&&a[g]instanceof Array,k=i&&a[g].split(":"),i&&k.length===2?(d.push(Number(k[0])),e.push(Number(k[1])),f.push(Number(k[1]))):j?(d.push(h[0]),e.push(h[1]),f.push(h[1])):(d.push(g),a[g]===null||a[g]==="null"?e.push(null):(e.push(Number(h)),f.push(Number(h))));this.options.get("xvalues")&&(d=this.options.get("xvalues")),this.maxy=this.maxyorg=b.max.apply(b,f),this.miny=this.minyorg=b.min.apply(b,f),this.maxx=b.max.apply(b,d),this.minx=b.min.apply(b,d),this.xvalues=d,this.yvalues=e,this.yminmax=f},processRangeOptions:function(){var a=this.options,b=a.get("normalRangeMin"),d=a.get("normalRangeMax");b!==c&&(b<this.miny&&(this.miny=b),d>this.maxy&&(this.maxy=d)),a.get("chartRangeMin")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMin")<this.miny)&&(this.miny=a.get("chartRangeMin")),a.get("chartRangeMax")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMax")>this.maxy)&&(this.maxy=a.get("chartRangeMax")),a.get("chartRangeMinX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMinX")<this.minx)&&(this.minx=a.get("chartRangeMinX")),a.get("chartRangeMaxX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMaxX")>this.maxx)&&(this.maxx=a.get("chartRangeMaxX"))},drawNormalRange:function(a,d,e,f,g){var h=this.options.get("normalRangeMin"),i=this.options.get("normalRangeMax"),j=d+b.round(e-e*((i-this.miny)/g)),k=b.round(e*(i-h)/g);this.target.drawRect(a,j,f,k,c,this.options.get("normalRangeColor")).append()},render:function(){var a=this.options,e=this.target,f=this.canvasWidth,g=this.canvasHeight,h=this.vertices,i=a.get("spotRadius"),j=this.regionMap,k,l,m,n,o,p,q,r,s,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K;if(!x._super.render.call(this))return;this.scanValues(),this.processRangeOptions(),I=this.xvalues,J=this.yvalues;if(!this.yminmax.length||this.yvalues.length<2)return;n=o=0,k=this.maxx-this.minx===0?1:this.maxx-this.minx,l=this.maxy-this.miny===0?1:this.maxy-this.miny,m=this.yvalues.length-1,i&&(f<i*4||g<i*4)&&(i=0);if(i){G=a.get("highlightSpotColor")&&!a.get("disableInteraction");if(G||a.get("minSpotColor")||a.get("spotColor")&&J[m]===this.miny)g-=b.ceil(i);if(G||a.get("maxSpotColor")||a.get("spotColor")&&J[m]===this.maxy)g-=b.ceil(i),n+=b.ceil(i);if(G||(a.get("minSpotColor")||a.get("maxSpotColor"))&&(J[0]===this.miny||J[0]===this.maxy))o+=b.ceil(i),f-=b.ceil(i);if(G||a.get("spotColor")||a.get("minSpotColor")||a.get("maxSpotColor")&&(J[m]===this.miny||J[m]===this.maxy))f-=b.ceil(i)}g--,a.get("normalRangeMin")!==c&&!a.get("drawNormalOnTop")&&this.drawNormalRange(o,n,g,f,l),q=[],r=[q],z=A=null,B=J.length;for(K=0;K<B;K++)s=I[K],v=I[K+1],u=J[K],w=o+b.round((s-this.minx)*(f/k)),y=K<B-1?o+b.round((v-this.minx)*(f/k)):f,A=w+(y-w)/2,j[K]=[z||0,A,K],z=A,u===null?K&&(J[K-1]!==null&&(q=[],r.push(q)),h.push(null)):(u<this.miny&&(u=this.miny),u>this.maxy&&(u=this.maxy),q.length||q.push([w,n+g]),p=[w,n+b.round(g-g*((u-this.miny)/l))],q.push(p),h.push(p));C=[],D=[],E=r.length;for(K=0;K<E;K++)q=r[K],q.length&&(a.get("fillColor")&&(q.push([q[q.length-1][0],n+g]),D.push(q.slice(0)),q.pop()),q.length>2&&(q[0]=[q[0][0],q[1][1]]),C.push(q));E=D.length;for(K=0;K<E;K++)e.drawShape(D[K],a.get("fillColor"),a.get("fillColor")).append();a.get("normalRangeMin")!==c&&a.get("drawNormalOnTop")&&this.drawNormalRange(o,n,g,f,l),E=C.length;for(K=0;K<E;K++)e.drawShape(C[K],a.get("lineColor"),c,a.get("lineWidth")).append();if(i&&a.get("valueSpots")){F=a.get("valueSpots"),F.get===c&&(F=new t(F));for(K=0;K<B;K++)H=F.get(J[K]),H&&e.drawCircle(o+b.round((I[K]-this.minx)*(f/k)),n+b.round(g-g*((J[K]-this.miny)/l)),i,c,H).append()}i&&a.get("spotColor")&&J[m]!==null&&e.drawCircle(o+b.round((I[I.length-1]-this.minx)*(f/k)),n+b.round(g-g*((J[m]-this.miny)/l)),i,c,a.get("spotColor")).append(),this.maxy!==this.minyorg&&(i&&a.get("minSpotColor")&&(s=I[d.inArray(this.minyorg,J)],e.drawCircle(o+b.round((s-this.minx)*(f/k)),n+b.round(g-g*((this.minyorg-this.miny)/l)),i,c,a.get("minSpotColor")).append()),i&&a.get("maxSpotColor")&&(s=I[d.inArray(this.maxyorg,J)],e.drawCircle(o+b.round((s-this.minx)*(f/k)),n+b.round(g-g*((this.maxyorg-this.miny)/l)),i,c,a.get("maxSpotColor")).append())),this.lastShapeId=e.getLastShapeId(),this.canvasTop=n,e.render()}}),d.fn.sparkline.bar=y=g(d.fn.sparkline._base,w,{type:"bar",init:function(a,e,f,g,h){var j=parseInt(f.get("barWidth"),10),n=parseInt(f.get("barSpacing"),10),o=f.get("chartRangeMin"),p=f.get("chartRangeMax"),q=f.get("chartRangeClip"),r=Infinity,s=-Infinity,u,v,w,x,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R;y._super.init.call(this,a,e,f,g,h);for(A=0,B=e.length;A<B;A++){O=e[A],u=typeof O=="string"&&O.indexOf(":")>-1;if(u||d.isArray(O))J=!0,u&&(O=e[A]=l(O.split(":"))),O=m(O,null),v=b.min.apply(b,O),w=b.max.apply(b,O),v<r&&(r=v),w>s&&(s=w)}this.stacked=J,this.regionShapes={},this.barWidth=j,this.barSpacing=n,this.totalBarWidth=j+n,this.width=g=e.length*j+(e.length-1)*n,this.initTarget(),q&&(H=o===c?-Infinity:o,I=p===c?Infinity:p),z=[],x=J?[]:z;var S=[],T=[];for(A=0,B=e.length;A<B;A++)if(J){K=e[A],e[A]=N=[],S[A]=0,x[A]=T[A]=0;for(L=0,M=K.length;L<M;L++)O=N[L]=q?i(K[L],H,I):K[L],O!==null&&(O>0&&(S[A]+=O),r<0&&s>0?O<0?T[A]+=b.abs(O):x[A]+=O:x[A]+=b.abs(O-(O<0?s:r)),z.push(O))}else O=q?i(e[A],H,I):e[A],O=e[A]=k(O),O!==null&&z.push(O);this.max=G=b.max.apply(b,z),this.min=F=b.min.apply(b,z),this.stackMax=s=J?b.max.apply(b,S):G,this.stackMin=r=J?b.min.apply(b,z):F,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<F)&&(F=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>G)&&(G=f.get("chartRangeMax")),this.zeroAxis=D=f.get("zeroAxis",!0),F<=0&&G>=0&&D?E=0:D==0?E=F:F>0?E=F:E=G,this.xaxisOffset=E,C=J?b.max.apply(b,x)+b.max.apply(b,T):G-F,this.canvasHeightEf=D&&F<0?this.canvasHeight-2:this.canvasHeight-1,F<E?(Q=J&&G>=0?s:G,P=(Q-E)/C*this.canvasHeight,P!==b.ceil(P)&&(this.canvasHeightEf-=2,P=b.ceil(P))):P=this.canvasHeight,this.yoffset=P,d.isArray(f.get("colorMap"))?(this.colorMapByIndex=f.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=f.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new t(this.colorMapByValue))),this.range=C},getRegion:function(a,d,e){var f=b.floor(d/this.totalBarWidth);return f<0||f>=this.values.length?c:f},getCurrentRegionFields:function(){var a=this.currentRegion,b=r(this.values[a]),c=[],d,e;for(e=b.length;e--;)d=b[e],c.push({isNull:d===null,value:d,color:this.calcColor(e,d,a),offset:a});return c},calcColor:function(a,b,e){var f=this.colorMapByIndex,g=this.colorMapByValue,h=this.options,i,j;return this.stacked?i=h.get("stackedBarColor"):i=b<0?h.get("negBarColor"):h.get("barColor"),b===0&&h.get("zeroColor")!==c&&(i=h.get("zeroColor")),g&&(j=g.get(b))?i=j:f&&f.length>e&&(i=f[e]),d.isArray(i)?i[a%i.length]:i},renderRegion:function(a,e){var f=this.values[a],g=this.options,h=this.xaxisOffset,i=[],j=this.range,k=this.stacked,l=this.target,m=a*this.totalBarWidth,n=this.canvasHeightEf,p=this.yoffset,q,r,s,t,u,v,w,x,y,z;f=d.isArray(f)?f:[f],w=f.length,x=f[0],t=o(null,f),z=o(h,f,!0);if(t)return g.get("nullColor")?(s=e?g.get("nullColor"):this.calcHighlightColor(g.get("nullColor"),g),q=p>0?p-1:p,l.drawRect(m,q,this.barWidth-1,0,s,s)):c;u=p;for(v=0;v<w;v++){x=f[v];if(k&&x===h){if(!z||y)continue;y=!0}j>0?r=b.floor(n*(b.abs(x-h)/j))+1:r=1,x<h||x===h&&p===0?(q=u,u+=r):(q=p-r,p-=r),s=this.calcColor(v,x,a),e&&(s=this.calcHighlightColor(s,g)),i.push(l.drawRect(m,q,this.barWidth-1,r-1,s,s))}return i.length===1?i[0]:i}}),d.fn.sparkline.tristate=z=g(d.fn.sparkline._base,w,{type:"tristate",init:function(a,b,e,f,g){var h=parseInt(e.get("barWidth"),10),i=parseInt(e.get("barSpacing"),10);z._super.init.call(this,a,b,e,f,g),this.regionShapes={},this.barWidth=h,this.barSpacing=i,this.totalBarWidth=h+i,this.values=d.map(b,Number),this.width=f=b.length*h+(b.length-1)*i,d.isArray(e.get("colorMap"))?(this.colorMapByIndex=e.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=e.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new t(this.colorMapByValue))),this.initTarget()},getRegion:function(a,c,d){return b.floor(c/this.totalBarWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],color:this.calcColor(this.values[a],a),offset:a}},calcColor:function(a,b){var c=this.values,d=this.options,e=this.colorMapByIndex,f=this.colorMapByValue,g,h;return f&&(h=f.get(a))?g=h:e&&e.length>b?g=e[b]:c[b]<0?g=d.get("negBarColor"):c[b]>0?g=d.get("posBarColor"):g=d.get("zeroBarColor"),g},renderRegion:function(a,c){var d=this.values,e=this.options,f=this.target,g,h,i,j,k,l;g=f.pixelHeight,i=b.round(g/2),j=a*this.totalBarWidth,d[a]<0?(k=i,h=i-1):d[a]>0?(k=0,h=i-1):(k=i-1,h=2),l=this.calcColor(d[a],a);if(l===null)return;return c&&(l=this.calcHighlightColor(l,e)),f.drawRect(j,k,this.barWidth-1,h-1,l,l)}}),d.fn.sparkline.discrete=A=g(d.fn.sparkline._base,w,{type:"discrete",init:function(a,e,f,g,h){A._super.init.call(this,a,e,f,g,h),this.regionShapes={},this.values=e=d.map(e,Number),this.min=b.min.apply(b,e),this.max=b.max.apply(b,e),this.range=this.max-this.min,this.width=g=f.get("width")==="auto"?e.length*2:this.width,this.interval=b.floor(g/e.length),this.itemWidth=g/e.length,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<this.min)&&(this.min=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>this.max)&&(this.max=f.get("chartRangeMax")),this.initTarget(),this.target&&(this.lineHeight=f.get("lineHeight")==="auto"?b.round(this.canvasHeight*.3):f.get("lineHeight"))},getRegion:function(a,c,d){return b.floor(c/this.itemWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],offset:a}},renderRegion:function(a,c){var d=this.values,e=this.options,f=this.min,g=this.max,h=this.range,j=this.interval,k=this.target,l=this.canvasHeight,m=this.lineHeight,n=l-m,o,p,q,r;return p=i(d[a],f,g),r=a*j,o=b.round(n-n*((p-f)/h)),q=e.get("thresholdColor")&&p<e.get("thresholdValue")?e.get("thresholdColor"):e.get("lineColor"),c&&(q=this.calcHighlightColor(q,e)),k.drawLine(r,o,r,o+m,q)}}),d.fn.sparkline.bullet=B=g(d.fn.sparkline._base,{type:"bullet",init:function(a,d,e,f,g){var h,i,j;B._super.init.call(this,a,d,e,f,g),this.values=d=l(d),j=d.slice(),j[0]=j[0]===null?j[2]:j[0],j[1]=d[1]===null?j[2]:j[1],h=b.min.apply(b,d),i=b.max.apply(b,d),e.get("base")===c?h=h<0?h:0:h=e.get("base"),this.min=h,this.max=i,this.range=i-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=f=e.get("width")==="auto"?"4.0em":f,this.target=this.$el.simpledraw(f,g,e.get("composite")),d.length||(this.disabled=!0),this.initTarget()},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{fieldkey:a.substr(0,1),value:this.values[a.substr(1)],region:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.valueShapes[b],d;delete this.shapes[c];switch(b.substr(0,1)){case"r":d=this.renderRange(b.substr(1),a);break;case"p":d=this.renderPerformance(a);break;case"t":d=this.renderTarget(a)}this.valueShapes[b]=d.id,this.shapes[d.id]=b,this.target.replaceWithShape(c,d)},renderRange:function(a,c){var d=this.values[a],e=b.round(this.canvasWidth*((d-this.min)/this.range)),f=this.options.get("rangeColors")[a-2];return c&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(0,0,e-1,this.canvasHeight-1,f,f)},renderPerformance:function(a){var c=this.values[1],d=b.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get("performanceColor");return a&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,b.round(this.canvasHeight*.3),d-1,b.round(this.canvasHeight*.4)-1,e,e)},renderTarget:function(a){var c=this.values[0],d=b.round(this.canvasWidth*((c-this.min)/this.range)-this.options.get("targetWidth")/2),e=b.round(this.canvasHeight*.1),f=this.canvasHeight-e*2,g=this.options.get("targetColor");return a&&(g=this.calcHighlightColor(g,this.options)),this.target.drawRect(d,e,this.options.get("targetWidth")-1,f-1,g,g)},render:function(){var a=this.values.length,b=this.target,c,d;if(!B._super.render.call(this))return;for(c=2;c<a;c++)d=this.renderRange(c).append(),this.shapes[d.id]="r"+c,this.valueShapes["r"+c]=d.id;this.values[1]!==null&&(d=this.renderPerformance().append(),this.shapes[d.id]="p1",this.valueShapes.p1=d.id),this.values[0]!==null&&(d=this.renderTarget().append(),this.shapes[d.id]="t0",this.valueShapes.t0=d.id),b.render()}}),d.fn.sparkline.pie=C=g(d.fn.sparkline._base,{type:"pie",init:function(a,c,e,f,g){var h=0,i;C._super.init.call(this,a,c,e,f,g),this.shapes={},this.valueShapes={},this.values=c=d.map(c,Number),e.get("width")==="auto"&&(this.width=this.height);if(c.length>0)for(i=c.length;i--;)h+=c[i];this.total=h,this.initTarget(),this.radius=b.floor(b.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],percent:this.values[a]/this.total*100,color:this.options.get("sliceColors")[a%this.options.get("sliceColors").length],offset:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b},renderSlice:function(a,d){var e=this.target,f=this.options,g=this.radius,h=f.get("borderWidth"),i=f.get("offset"),j=2*b.PI,k=this.values,l=this.total,m=i?2*b.PI*(i/360):0,n,o,p,q,r;q=k.length;for(p=0;p<q;p++){n=m,o=m,l>0&&(o=m+j*(k[p]/l));if(a===p)return r=f.get("sliceColors")[p%f.get("sliceColors").length],d&&(r=this.calcHighlightColor(r,f)),e.drawPieSlice(g,g,g-h,n,o,c,r);m=o}},render:function(){var a=this.target,d=this.values,e=this.options,f=this.radius,g=e.get("borderWidth"),h,i;if(!C._super.render.call(this))return;g&&a.drawCircle(f,f,b.floor(f-g/2),e.get("borderColor"),c,g).append();for(i=d.length;i--;)d[i]&&(h=this.renderSlice(i).append(),this.valueShapes[i]=h.id,this.shapes[h.id]=i);a.render()}}),d.fn.sparkline.box=D=g(d.fn.sparkline._base,{type:"box",init:function(a,b,c,e,f){D._super.init.call(this,a,b,c,e,f),this.values=d.map(b,Number),this.width=c.get("width")==="auto"?"4.0em":e,this.initTarget(),this.values.length||(this.disabled=1)},getRegion:function(){return 1},getCurrentRegionFields:function(){var a=[{field:"lq",value:this.quartiles[0]},{field:"med",value:this.quartiles
[1]},{field:"uq",value:this.quartiles[2]}];return this.loutlier!==c&&a.push({field:"lo",value:this.loutlier}),this.routlier!==c&&a.push({field:"ro",value:this.routlier}),this.lwhisker!==c&&a.push({field:"lw",value:this.lwhisker}),this.rwhisker!==c&&a.push({field:"rw",value:this.rwhisker}),a},render:function(){var a=this.target,d=this.values,e=d.length,f=this.options,g=this.canvasWidth,h=this.canvasHeight,i=f.get("chartRangeMin")===c?b.min.apply(b,d):f.get("chartRangeMin"),k=f.get("chartRangeMax")===c?b.max.apply(b,d):f.get("chartRangeMax"),l=0,m,n,o,p,q,r,s,t,u,v,w;if(!D._super.render.call(this))return;if(f.get("raw"))f.get("showOutliers")&&d.length>5?(n=d[0],m=d[1],p=d[2],q=d[3],r=d[4],s=d[5],t=d[6]):(m=d[0],p=d[1],q=d[2],r=d[3],s=d[4]);else{d.sort(function(a,b){return a-b}),p=j(d,1),q=j(d,2),r=j(d,3),o=r-p;if(f.get("showOutliers")){m=s=c;for(u=0;u<e;u++)m===c&&d[u]>p-o*f.get("outlierIQR")&&(m=d[u]),d[u]<r+o*f.get("outlierIQR")&&(s=d[u]);n=d[0],t=d[e-1]}else m=d[0],s=d[e-1]}this.quartiles=[p,q,r],this.lwhisker=m,this.rwhisker=s,this.loutlier=n,this.routlier=t,w=g/(k-i+1),f.get("showOutliers")&&(l=b.ceil(f.get("spotRadius")),g-=2*b.ceil(f.get("spotRadius")),w=g/(k-i+1),n<m&&a.drawCircle((n-i)*w+l,h/2,f.get("spotRadius"),f.get("outlierLineColor"),f.get("outlierFillColor")).append(),t>s&&a.drawCircle((t-i)*w+l,h/2,f.get("spotRadius"),f.get("outlierLineColor"),f.get("outlierFillColor")).append()),a.drawRect(b.round((p-i)*w+l),b.round(h*.1),b.round((r-p)*w),b.round(h*.8),f.get("boxLineColor"),f.get("boxFillColor")).append(),a.drawLine(b.round((m-i)*w+l),b.round(h/2),b.round((p-i)*w+l),b.round(h/2),f.get("lineColor")).append(),a.drawLine(b.round((m-i)*w+l),b.round(h/4),b.round((m-i)*w+l),b.round(h-h/4),f.get("whiskerColor")).append(),a.drawLine(b.round((s-i)*w+l),b.round(h/2),b.round((r-i)*w+l),b.round(h/2),f.get("lineColor")).append(),a.drawLine(b.round((s-i)*w+l),b.round(h/4),b.round((s-i)*w+l),b.round(h-h/4),f.get("whiskerColor")).append(),a.drawLine(b.round((q-i)*w+l),b.round(h*.1),b.round((q-i)*w+l),b.round(h*.9),f.get("medianColor")).append(),f.get("target")&&(v=b.ceil(f.get("spotRadius")),a.drawLine(b.round((f.get("target")-i)*w+l),b.round(h/2-v),b.round((f.get("target")-i)*w+l),b.round(h/2+v),f.get("targetColor")).append(),a.drawLine(b.round((f.get("target")-i)*w+l-v),b.round(h/2),b.round((f.get("target")-i)*w+l+v),b.round(h/2),f.get("targetColor")).append()),a.render()}}),G=g({init:function(a,b,c,d){this.target=a,this.id=b,this.type=c,this.args=d},append:function(){return this.target.appendShape(this),this}}),H=g({_pxregex:/(\d+)(px)?\s*$/i,init:function(a,b,c){if(!a)return;this.width=a,this.height=b,this.target=c,this.lastShapeId=null,c[0]&&(c=c[0]),d.data(c,"_jqs_vcanvas",this)},drawLine:function(a,b,c,d,e,f){return this.drawShape([[a,b],[c,d]],e,f)},drawShape:function(a,b,c,d){return this._genShape("Shape",[a,b,c,d])},drawCircle:function(a,b,c,d,e,f){return this._genShape("Circle",[a,b,c,d,e,f])},drawPieSlice:function(a,b,c,d,e,f,g){return this._genShape("PieSlice",[a,b,c,d,e,f,g])},drawRect:function(a,b,c,d,e,f){return this._genShape("Rect",[a,b,c,d,e,f])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert("reset not implemented")},_insert:function(a,b){d(b).html(a)},_calculatePixelDims:function(a,b,c){var e;e=this._pxregex.exec(b),e?this.pixelHeight=e[1]:this.pixelHeight=d(c).height(),e=this._pxregex.exec(a),e?this.pixelWidth=e[1]:this.pixelWidth=d(c).width()},_genShape:function(a,b){var c=L++;return b.unshift(c),new G(this,c,a,b)},appendShape:function(a){alert("appendShape not implemented")},replaceWithShape:function(a,b){alert("replaceWithShape not implemented")},insertAfterShape:function(a,b){alert("insertAfterShape not implemented")},removeShapeId:function(a){alert("removeShapeId not implemented")},getShapeAt:function(a,b,c){alert("getShapeAt not implemented")},render:function(){alert("render not implemented")}}),I=g(H,{init:function(b,e,f,g){I._super.init.call(this,b,e,f),this.canvas=a.createElement("canvas"),f[0]&&(f=f[0]),d.data(f,"_jqs_vcanvas",this),d(this.canvas).css({display:"inline-block",width:b,height:e,verticalAlign:"top"}),this._insert(this.canvas,f),this._calculatePixelDims(b,e,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=g,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c,d(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(a,b,d){var e=this.canvas.getContext("2d");return a!==c&&(e.strokeStyle=a),e.lineWidth=d===c?1:d,b!==c&&(e.fillStyle=b),e},reset:function(){var a=this._getContext();a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c},_drawShape:function(a,b,d,e,f){var g=this._getContext(d,e,f),h,i;g.beginPath(),g.moveTo(b[0][0]+.5,b[0][1]+.5);for(h=1,i=b.length;h<i;h++)g.lineTo(b[h][0]+.5,b[h][1]+.5);d!==c&&g.stroke(),e!==c&&g.fill(),this.targetX!==c&&this.targetY!==c&&g.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawCircle:function(a,d,e,f,g,h,i){var j=this._getContext(g,h,i);j.beginPath(),j.arc(d,e,f,0,2*b.PI,!1),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),g!==c&&j.stroke(),h!==c&&j.fill()},_drawPieSlice:function(a,b,d,e,f,g,h,i){var j=this._getContext(h,i);j.beginPath(),j.moveTo(b,d),j.arc(b,d,e,f,g,!1),j.lineTo(b,d),j.closePath(),h!==c&&j.stroke(),i&&j.fill(),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)},appendShape:function(a){return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=this.shapeseq,d;this.shapes[b.id]=b;for(d=c.length;d--;)c[d]==a&&(c[d]=b.id);delete this.shapes[a]},replaceWithShapes:function(a,b){var c=this.shapeseq,d={},e,f,g;for(f=a.length;f--;)d[a[f]]=!0;for(f=c.length;f--;)e=c[f],d[e]&&(c.splice(f,1),delete this.shapes[e],g=f);for(f=b.length;f--;)c.splice(g,0,b[f].id),this.shapes[b[f].id]=b[f]},insertAfterShape:function(a,b){var c=this.shapeseq,d;for(d=c.length;d--;)if(c[d]===a){c.splice(d+1,0,b.id),this.shapes[b.id]=b;return}},removeShapeId:function(a){var b=this.shapeseq,c;for(c=b.length;c--;)if(b[c]===a){b.splice(c,1);break}delete this.shapes[a]},getShapeAt:function(a,b,c){return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId},render:function(){var a=this.shapeseq,b=this.shapes,c=a.length,d=this._getContext(),e,f,g;d.clearRect(0,0,this.pixelWidth,this.pixelHeight);for(g=0;g<c;g++)e=a[g],f=b[e],this["_draw"+f.type].apply(this,f.args);this.interact||(this.shapes={},this.shapeseq=[])}}),J=g(H,{init:function(b,c,e){var f;J._super.init.call(this,b,c,e),e[0]&&(e=e[0]),d.data(e,"_jqs_vcanvas",this),this.canvas=a.createElement("span"),d(this.canvas).css({display:"inline-block",position:"relative",overflow:"hidden",width:b,height:c,margin:"0px",padding:"0px",verticalAlign:"top"}),this._insert(this.canvas,e),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,f='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"'+' style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>',this.canvas.insertAdjacentHTML("beforeEnd",f),this.group=d(this.canvas).children()[0],this.rendered=!1,this.prerender=""},_drawShape:function(a,b,d,e,f){var g=[],h,i,j,k,l,m,n;for(n=0,m=b.length;n<m;n++)g[n]=""+b[n][0]+","+b[n][1];return h=g.splice(0,1),f=f===c?1:f,i=d===c?' stroked="false" ':' strokeWeight="'+f+'px" strokeColor="'+d+'" ',j=e===c?' filled="false"':' fillColor="'+e+'" filled="true" ',k=g[0]===g[g.length-1]?"x ":"",l='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+i+j+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+h+" l "+g.join(", ")+" "+k+'e">'+" </v:shape>",l},_drawCircle:function(a,b,d,e,f,g,h){var i,j,k;return b-=e,d-=e,i=f===c?' stroked="false" ':' strokeWeight="'+h+'px" strokeColor="'+f+'" ',j=g===c?' filled="false"':' fillColor="'+g+'" filled="true" ',k='<v:oval  id="jqsshape'+a+'" '+i+j+' style="position:absolute;top:'+d+"px; left:"+b+"px; width:"+e*2+"px; height:"+e*2+'px"></v:oval>',k},_drawPieSlice:function(a,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r;if(g===h)return"";h-g===2*b.PI&&(g=0,h=2*b.PI),l=d+b.round(b.cos(g)*f),m=e+b.round(b.sin(g)*f),n=d+b.round(b.cos(h)*f),o=e+b.round(b.sin(h)*f);if(l===n&&m===o){if(h-g<b.PI)return"";l=n=d+f,m=o=e}return l===n&&m===o&&h-g<b.PI?"":(k=[d-f,e-f,d+f,e+f,l,m,n,o],p=i===c?' stroked="false" ':' strokeWeight="1px" strokeColor="'+i+'" ',q=j===c?' filled="false"':' fillColor="'+j+'" filled="true" ',r='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+p+q+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+d+","+e+" wa "+k.join(", ")+' x e">'+" </v:shape>",r)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)},reset:function(){this.group.innerHTML=""},appendShape:function(a){var b=this["_draw"+a.type].apply(this,a.args);return this.rendered?this.group.insertAdjacentHTML("beforeEnd",b):this.prerender+=b,this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].outerHTML=e},replaceWithShapes:function(a,b){var c=d("#jqsshape"+a[0]),e="",f=b.length,g;for(g=0;g<f;g++)e+=this["_draw"+b[g].type].apply(this,b[g].args);c[0].outerHTML=e;for(g=1;g<a.length;g++)d("#jqsshape"+a[g]).remove()},insertAfterShape:function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].insertAdjacentHTML("afterEnd",e)},removeShapeId:function(a){var b=d("#jqsshape"+a);this.group.removeChild(b[0])},getShapeAt:function(a,b,c){var d=a.id.substr(8);return d},render:function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)}})})})(document,Math);
// Knockout JavaScript library v3.0.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function() {(function(q){var y=this||(0,eval)("this"),w=y.document,K=y.navigator,u=y.jQuery,B=y.JSON;(function(q){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?q(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],q):q(y.ko={})})(function(F){function G(a,c){return null===a||typeof a in N?a===c:!1}function H(b,c,d,e){a.d[b]={init:function(b){a.a.f.set(b,L,{});return{controlsDescendantBindings:!0}},update:function(b,h,k,m,f){k=a.a.f.get(b,L);h=a.a.c(h());
m=!d!==!h;var p=!k.ob;if(p||c||m!==k.Db)p&&(k.ob=a.a.Ya(a.e.childNodes(b),!0)),m?(p||a.e.S(b,a.a.Ya(k.ob)),a.Ta(e?e(f,h):f,b)):a.e.Z(b),k.Db=m}};a.g.Y[b]=!1;a.e.P[b]=!0}var a="undefined"!==typeof F?F:{};a.b=function(b,c){for(var d=b.split("."),e=a,g=0;g<d.length-1;g++)e=e[d[g]];e[d[d.length-1]]=c};a.s=function(a,c,d){a[c]=d};a.version="3.0.0";a.b("version",a.version);a.a=function(){function b(a,b){for(var f in a)a.hasOwnProperty(f)&&b(f,a[f])}function c(k,b){if("input"!==a.a.v(k)||!k.type||"click"!=
b.toLowerCase())return!1;var f=k.type;return"checkbox"==f||"radio"==f}var d={},e={};d[K&&/Firefox\/2/i.test(K.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];d.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(d,function(a,b){if(b.length)for(var f=0,c=b.length;f<c;f++)e[b[f]]=a});var g={propertychange:!0},h=w&&function(){for(var a=3,b=w.createElement("div"),f=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+
++a+"]><i></i><![endif]--\x3e",f[0];);return 4<a?a:q}();return{$a:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],n:function(a,b){for(var f=0,c=a.length;f<c;f++)b(a[f])},l:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var f=0,c=a.length;f<c;f++)if(a[f]===b)return f;return-1},Ua:function(a,b,f){for(var c=0,d=a.length;c<d;c++)if(b.call(f,a[c]))return a[c];return null},ia:function(b,c){var f=a.a.l(b,c);0<=f&&b.splice(f,1)},Va:function(b){b=
b||[];for(var c=[],f=0,d=b.length;f<d;f++)0>a.a.l(c,b[f])&&c.push(b[f]);return c},ha:function(a,b){a=a||[];for(var f=[],c=0,d=a.length;c<d;c++)f.push(b(a[c]));return f},ga:function(a,b){a=a||[];for(var f=[],c=0,d=a.length;c<d;c++)b(a[c])&&f.push(a[c]);return f},X:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var f=0,c=b.length;f<c;f++)a.push(b[f]);return a},V:function(b,c,f){var d=a.a.l(a.a.Ha(b),c);0>d?f&&b.push(c):f||b.splice(d,1)},extend:function(a,b){if(b)for(var f in b)b.hasOwnProperty(f)&&
(a[f]=b[f]);return a},K:b,Da:function(a,b){if(!a)return a;var f={},c;for(c in a)a.hasOwnProperty(c)&&(f[c]=b(a[c],c,a));return f},wa:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Vb:function(b){b=a.a.Q(b);for(var c=w.createElement("div"),f=0,d=b.length;f<d;f++)c.appendChild(a.L(b[f]));return c},Ya:function(b,c){for(var f=0,d=b.length,e=[];f<d;f++){var g=b[f].cloneNode(!0);e.push(c?a.L(g):g)}return e},S:function(b,c){a.a.wa(b);if(c)for(var f=0,d=c.length;f<d;f++)b.appendChild(c[f])},nb:function(b,
c){var f=b.nodeType?[b]:b;if(0<f.length){for(var d=f[0],e=d.parentNode,g=0,n=c.length;g<n;g++)e.insertBefore(c[g],d);g=0;for(n=f.length;g<n;g++)a.removeNode(f[g])}},$:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);if(1<a.length){var f=a[0],c=a[a.length-1];for(a.length=0;f!==c;)if(a.push(f),f=f.nextSibling,!f)return;a.push(c)}}return a},qb:function(a,b){7>h?a.setAttribute("selected",b):a.selected=b},la:function(a){return null===a||a===
q?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ec:function(b,c){for(var f=[],d=(b||"").split(c),e=0,g=d.length;e<g;e++){var n=a.a.la(d[e]);""!==n&&f.push(n)}return f},ac:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},Gb:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;
return!!a},va:function(b){return a.a.Gb(b,b.ownerDocument.documentElement)},Ra:function(b){return!!a.a.Ua(b,a.a.va)},v:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},r:function(b,d,f){var e=h&&g[d];if(e||"undefined"==typeof u)if(e||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var s=function(a){f.call(b,a)},l="on"+d;b.attachEvent(l,s);a.a.C.ea(b,function(){b.detachEvent(l,s)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(d,
f,!1);else{if(c(b,d)){var n=f;f=function(a,b){var f=this.checked;b&&(this.checked=!0!==b.Ab);n.call(this,a);this.checked=f}}u(b).bind(d,f)}},da:function(a,b){if(!a||!a.nodeType)throw Error("element must be a DOM node when calling triggerEvent");if("undefined"!=typeof u){var f=[];c(a,b)&&f.push({Ab:a.checked});u(a).trigger(b,f)}else if("function"==typeof w.createEvent)if("function"==typeof a.dispatchEvent)f=w.createEvent(e[b]||"HTMLEvents"),f.initEvent(b,!0,!0,y,0,0,0,0,0,!1,!1,!1,!1,0,a),a.dispatchEvent(f);
else throw Error("The supplied element doesn't support dispatchEvent");else if("undefined"!=typeof a.fireEvent)c(a,b)&&(a.checked=!0!==a.checked),a.fireEvent("on"+b);else throw Error("Browser doesn't support triggering events");},c:function(b){return a.M(b)?b():b},Ha:function(b){return a.M(b)?b.t():b},ma:function(b,c,f){if(c){var d=/\S+/g,e=b.className.match(d)||[];a.a.n(c.match(d),function(b){a.a.V(e,b,f)});b.className=e.join(" ")}},Ma:function(b,c){var f=a.a.c(c);if(null===f||f===q)f="";var d=a.e.firstChild(b);
!d||3!=d.nodeType||a.e.nextSibling(d)?a.e.S(b,[w.createTextNode(f)]):d.data=f;a.a.Jb(b)},pb:function(a,b){a.name=b;if(7>=h)try{a.mergeAttributes(w.createElement("<input name='"+a.name+"'/>"),!1)}catch(f){}},Jb:function(a){9<=h&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},Hb:function(a){if(h){var b=a.style.width;a.style.width=0;a.style.width=b}},Zb:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var f=[],d=b;d<=c;d++)f.push(d);return f},Q:function(a){for(var b=[],c=0,d=a.length;c<
d;c++)b.push(a[c]);return b},cc:6===h,dc:7===h,ja:h,ab:function(b,c){for(var f=a.a.Q(b.getElementsByTagName("input")).concat(a.a.Q(b.getElementsByTagName("textarea"))),d="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},e=[],g=f.length-1;0<=g;g--)d(f[g])&&e.push(f[g]);return e},Wb:function(b){return"string"==typeof b&&(b=a.a.la(b))?B&&B.parse?B.parse(b):(new Function("return "+b))():null},Na:function(b,c,f){if(!B||!B.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return B.stringify(a.a.c(b),c,f)},Xb:function(c,d,f){f=f||{};var e=f.params||{},g=f.includeFields||this.$a,h=c;if("object"==typeof c&&"form"===a.a.v(c))for(var h=c.action,n=g.length-1;0<=n;n--)for(var r=a.a.ab(c,g[n]),v=r.length-1;0<=v;v--)e[r[v].name]=r[v].value;d=a.a.c(d);var t=w.createElement("form");t.style.display="none";t.action=h;t.method="post";for(var E in d)c=w.createElement("input"),c.name=E,c.value=a.a.Na(a.a.c(d[E])),t.appendChild(c);b(e,function(a,b){var c=w.createElement("input");c.name=
a;c.value=b;t.appendChild(c)});w.body.appendChild(t);f.submitter?f.submitter(t):t.submit();setTimeout(function(){t.parentNode.removeChild(t)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.n);a.b("utils.arrayFirst",a.a.Ua);a.b("utils.arrayFilter",a.a.ga);a.b("utils.arrayGetDistinctValues",a.a.Va);a.b("utils.arrayIndexOf",a.a.l);a.b("utils.arrayMap",a.a.ha);a.b("utils.arrayPushAll",a.a.X);a.b("utils.arrayRemoveItem",a.a.ia);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",
a.a.$a);a.b("utils.getFormFields",a.a.ab);a.b("utils.peekObservable",a.a.Ha);a.b("utils.postJson",a.a.Xb);a.b("utils.parseJson",a.a.Wb);a.b("utils.registerEventHandler",a.a.r);a.b("utils.stringifyJson",a.a.Na);a.b("utils.range",a.a.Zb);a.b("utils.toggleDomNodeCssClass",a.a.ma);a.b("utils.triggerEvent",a.a.da);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.K);a.b("utils.addOrRemoveItem",a.a.V);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var c=
this,d=Array.prototype.slice.call(arguments);a=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});a.a.f=new function(){function a(b,h){var k=b[d];if(!k||"null"===k||!e[k]){if(!h)return q;k=b[d]="ko"+c++;e[k]={}}return e[k]}var c=0,d="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===q?q:e[d]},set:function(c,d,e){if(e!==q||a(c,!1)!==q)a(c,!0)[d]=e},clear:function(a){var b=a[d];return b?(delete e[b],a[d]=null,!0):!1},D:function(){return c++ +
d}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);a.a.C=new function(){function b(b,c){var e=a.a.f.get(b,d);e===q&&c&&(e=[],a.a.f.set(b,d,e));return e}function c(d){var e=b(d,!1);if(e)for(var e=e.slice(0),m=0;m<e.length;m++)e[m](d);a.a.f.clear(d);"function"==typeof u&&"function"==typeof u.cleanData&&u.cleanData([d]);if(g[d.nodeType])for(e=d.firstChild;d=e;)e=d.nextSibling,8===d.nodeType&&c(d)}var d=a.a.f.D(),e={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{ea:function(a,c){if("function"!=
typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},mb:function(c,e){var g=b(c,!1);g&&(a.a.ia(g,e),0==g.length&&a.a.f.set(c,d,q))},L:function(b){if(e[b.nodeType]&&(c(b),g[b.nodeType])){var d=[];a.a.X(d,b.getElementsByTagName("*"));for(var m=0,f=d.length;m<f;m++)c(d[m])}return b},removeNode:function(b){a.L(b);b.parentNode&&b.parentNode.removeChild(b)}}};a.L=a.a.C.L;a.removeNode=a.a.C.removeNode;a.b("cleanNode",a.L);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.C);
a.b("utils.domNodeDisposal.addDisposeCallback",a.a.C.ea);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.C.mb);(function(){a.a.Fa=function(b){var c;if("undefined"!=typeof u)if(u.parseHTML)c=u.parseHTML(b)||[];else{if((c=u.clean([b]))&&c[0]){for(b=c[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&b.parentNode.removeChild(b)}}else{var d=a.a.la(b).toLowerCase();c=w.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,
"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+d[1]+b+d[2]+"</div>";for("function"==typeof y.innerShiv?c.appendChild(y.innerShiv(b)):c.innerHTML=b;d[0]--;)c=c.lastChild;c=a.a.Q(c.lastChild.childNodes)}return c};a.a.Ka=function(b,c){a.a.wa(b);c=a.a.c(c);if(null!==c&&c!==q)if("string"!=typeof c&&(c=c.toString()),"undefined"!=typeof u)u(b).html(c);else for(var d=a.a.Fa(c),e=0;e<d.length;e++)b.appendChild(d[e])}})();
a.b("utils.parseHtmlFragment",a.a.Fa);a.b("utils.setHtml",a.a.Ka);a.u=function(){function b(c,e){if(c)if(8==c.nodeType){var g=a.u.jb(c.nodeValue);null!=g&&e.push({Fb:c,Tb:g})}else if(1==c.nodeType)for(var g=0,h=c.childNodes,k=h.length;g<k;g++)b(h[g],e)}var c={};return{Ca:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);
c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},ub:function(a,b){var g=c[a];if(g===q)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return g.apply(null,b||[]),!0}finally{delete c[a]}},vb:function(c,e){var g=[];b(c,g);for(var h=0,k=g.length;h<k;h++){var m=g[h].Fb,f=[m];e&&a.a.X(f,e);a.u.ub(g[h].Tb,f);m.nodeValue="";m.parentNode&&m.parentNode.removeChild(m)}},jb:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.u);a.b("memoization.memoize",
a.u.Ca);a.b("memoization.unmemoize",a.u.ub);a.b("memoization.parseMemoText",a.u.jb);a.b("memoization.unmemoizeDomNodeAndDescendants",a.u.vb);a.xa={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.h({read:b,write:function(a){clearTimeout(d);d=setTimeout(function(){b(a)},c)}})},notify:function(a,c){a.equalityComparer="always"==c?null:G}};var N={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.xa);a.sb=function(b,c,d){this.target=b;this.qa=c;this.Eb=d;a.s(this,"dispose",
this.B)};a.sb.prototype.B=function(){this.Qb=!0;this.Eb()};a.ca=function(){this.F={};a.a.extend(this,a.ca.fn);a.s(this,"subscribe",this.T);a.s(this,"extend",this.extend);a.s(this,"getSubscriptionsCount",this.Lb)};var I="change";a.ca.fn={T:function(b,c,d){d=d||I;var e=new a.sb(this,c?b.bind(c):b,function(){a.a.ia(this.F[d],e)}.bind(this));this.F[d]||(this.F[d]=[]);this.F[d].push(e);return e},notifySubscribers:function(b,c){c=c||I;if(this.cb(c))try{a.i.Wa();for(var d=this.F[c].slice(0),e=0,g;g=d[e];++e)g&&
!0!==g.Qb&&g.qa(b)}finally{a.i.end()}},cb:function(a){return this.F[a]&&this.F[a].length},Lb:function(){var b=0;a.a.K(this.F,function(a,d){b+=d.length});return b},extend:function(b){var c=this;b&&a.a.K(b,function(b,e){var g=a.xa[b];"function"==typeof g&&(c=g(c,e)||c)});return c}};a.fb=function(a){return null!=a&&"function"==typeof a.T&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.ca);a.b("isSubscribable",a.fb);a.i=function(){var b=[];return{Wa:function(a){b.push(a&&{qa:a,Za:[]})},
end:function(){b.pop()},lb:function(c){if(!a.fb(c))throw Error("Only subscribable things can act as dependencies");if(0<b.length){var d=b[b.length-1];!d||0<=a.a.l(d.Za,c)||(d.Za.push(c),d.qa(c))}},p:function(a,d,e){try{return b.push(null),a.apply(d,e||[])}finally{b.pop()}}}}();a.q=function(b){function c(){if(0<arguments.length)return c.equalityComparer&&c.equalityComparer(d,arguments[0])||(c.O(),d=arguments[0],c.N()),this;a.i.lb(c);return d}var d=b;a.ca.call(c);c.t=function(){return d};c.N=function(){c.notifySubscribers(d)};
c.O=function(){c.notifySubscribers(d,"beforeChange")};a.a.extend(c,a.q.fn);a.s(c,"peek",c.t);a.s(c,"valueHasMutated",c.N);a.s(c,"valueWillMutate",c.O);return c};a.q.fn={equalityComparer:G};var C=a.q.Yb="__ko_proto__";a.q.fn[C]=a.q;a.ya=function(b,c){return null===b||b===q||b[C]===q?!1:b[C]===c?!0:a.ya(b[C],c)};a.M=function(b){return a.ya(b,a.q)};a.gb=function(b){return"function"==typeof b&&b[C]===a.q||"function"==typeof b&&b[C]===a.h&&b.Nb?!0:!1};a.b("observable",a.q);a.b("isObservable",a.M);a.b("isWriteableObservable",
a.gb);a.ba=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.q(b);a.a.extend(b,a.ba.fn);return b.extend({trackArrayChanges:!0})};a.ba.fn={remove:function(b){for(var c=this.t(),d=[],e="function"!=typeof b||a.M(b)?function(a){return a===b}:b,g=0;g<c.length;g++){var h=c[g];e(h)&&(0===d.length&&this.O(),d.push(h),c.splice(g,1),g--)}d.length&&this.N();return d},removeAll:function(b){if(b===
q){var c=this.t(),d=c.slice(0);this.O();c.splice(0,c.length);this.N();return d}return b?this.remove(function(c){return 0<=a.a.l(b,c)}):[]},destroy:function(b){var c=this.t(),d="function"!=typeof b||a.M(b)?function(a){return a===b}:b;this.O();for(var e=c.length-1;0<=e;e--)d(c[e])&&(c[e]._destroy=!0);this.N()},destroyAll:function(b){return b===q?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.l(b,c)}):[]},indexOf:function(b){var c=this();return a.a.l(c,b)},replace:function(a,
c){var d=this.indexOf(a);0<=d&&(this.O(),this.t()[d]=c,this.N())}};a.a.n("pop push reverse shift sort splice unshift".split(" "),function(b){a.ba.fn[b]=function(){var a=this.t();this.O();this.Xa(a,b,arguments);a=a[b].apply(a,arguments);this.N();return a}});a.a.n(["slice"],function(b){a.ba.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.ba);var J="arrayChange";a.xa.trackArrayChanges=function(b){function c(){if(!d){d=!0;var c=b.notifySubscribers;b.notifySubscribers=
function(a,b){b&&b!==I||++g;return c.apply(this,arguments)};var m=[].concat(b.t()||[]);e=null;b.T(function(c){c=[].concat(c||[]);if(b.cb(J)){var d;if(!e||1<g)e=a.a.ra(m,c,{sparse:!0});d=e;d.length&&b.notifySubscribers(d,J)}m=c;e=null;g=0})}}if(!b.Xa){var d=!1,e=null,g=0,h=b.T;b.T=b.subscribe=function(a,b,f){f===J&&c();return h.apply(this,arguments)};b.Xa=function(a,b,c){function p(a,b,c){h.push({status:a,value:b,index:c})}if(d&&!g){var h=[],l=a.length,n=c.length,r=0;switch(b){case "push":r=l;case "unshift":for(b=
0;b<n;b++)p("added",c[b],r+b);break;case "pop":r=l-1;case "shift":l&&p("deleted",a[r],r);break;case "splice":b=Math.min(Math.max(0,0>c[0]?l+c[0]:c[0]),l);for(var l=1===n?l:Math.min(b+(c[1]||0),l),n=b+n-2,r=Math.max(l,n),v=2;b<r;++b,++v)b<l&&p("deleted",a[b],b),b<n&&p("added",c[v],b);break;default:return}e=h}}}};a.h=function(b,c,d){function e(){a.a.n(z,function(a){a.B()});z=[]}function g(){var a=k.throttleEvaluation;a&&0<=a?(clearTimeout(x),x=setTimeout(h,a)):h()}function h(){if(!s){if(E&&E()){if(!l){D();
p=!0;return}}else l=!1;s=!0;try{var b=a.a.ha(z,function(a){return a.target});a.i.Wa(function(c){var d;0<=(d=a.a.l(b,c))?b[d]=q:z.push(c.T(g))});for(var d=c?n.call(c):n(),e=b.length-1;0<=e;e--)b[e]&&z.splice(e,1)[0].B();p=!0;k.equalityComparer&&k.equalityComparer(f,d)||(k.notifySubscribers(f,"beforeChange"),f=d,k.notifySubscribers(f))}finally{a.i.end(),s=!1}z.length||D()}}function k(){if(0<arguments.length){if("function"===typeof r)r.apply(c,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
return this}p||h();a.i.lb(k);return f}function m(){return!p||0<z.length}var f,p=!1,s=!1,l=!1,n=b;n&&"object"==typeof n?(d=n,n=d.read):(d=d||{},n||(n=d.read));if("function"!=typeof n)throw Error("Pass a function that returns the value of the ko.computed");var r=d.write,v=d.disposeWhenNodeIsRemoved||d.I||null,t=d.disposeWhen||d.ua,E=t,D=e,z=[],x=null;c||(c=d.owner);k.t=function(){p||h();return f};k.Kb=function(){return z.length};k.Nb="function"===typeof d.write;k.B=function(){D()};k.aa=m;a.ca.call(k);
a.a.extend(k,a.h.fn);a.s(k,"peek",k.t);a.s(k,"dispose",k.B);a.s(k,"isActive",k.aa);a.s(k,"getDependenciesCount",k.Kb);v&&(l=!0,v.nodeType&&(E=function(){return!a.a.va(v)||t&&t()}));!0!==d.deferEvaluation&&h();v&&m()&&(D=function(){a.a.C.mb(v,D);e()},a.a.C.ea(v,D));return k};a.Pb=function(b){return a.ya(b,a.h)};F=a.q.Yb;a.h[F]=a.q;a.h.fn={equalityComparer:G};a.h.fn[F]=a.h;a.b("dependentObservable",a.h);a.b("computed",a.h);a.b("isComputed",a.Pb);(function(){function b(a,g,h){h=h||new d;a=g(a);if("object"!=
typeof a||null===a||a===q||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var k=a instanceof Array?[]:{};h.save(a,k);c(a,function(c){var d=g(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":k[c]=d;break;case "object":case "undefined":var p=h.get(d);k[c]=p!==q?p:b(d,g,h)}});return k}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=
[];this.Qa=[]}a.tb=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.M(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.tb(b);return a.a.Na(b,c,d)};d.prototype={save:function(b,c){var d=a.a.l(this.keys,b);0<=d?this.Qa[d]=c:(this.keys.push(b),this.Qa.push(c))},get:function(b){b=a.a.l(this.keys,b);return 0<=b?this.Qa[b]:q}}})();a.b("toJS",a.tb);a.b("toJSON",a.toJSON);(function(){a.k={o:function(b){switch(a.a.v(b)){case "option":return!0===
b.__ko__hasDomDataOptionValue__?a.a.f.get(b,a.d.options.Ea):7>=a.a.ja?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.k.o(b.options[b.selectedIndex]):q;default:return b.value}},na:function(b,c){switch(a.a.v(b)){case "option":switch(typeof c){case "string":a.a.f.set(b,a.d.options.Ea,q);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.f.set(b,a.d.options.Ea,c),b.__ko__hasDomDataOptionValue__=
!0,b.value="number"===typeof c?c:""}break;case "select":""===c&&(c=q);if(null===c||c===q)b.selectedIndex=-1;for(var d=b.options.length-1;0<=d;d--)if(a.k.o(b.options[d])==c){b.selectedIndex=d;break}1<b.size||-1!==b.selectedIndex||(b.selectedIndex=0);break;default:if(null===c||c===q)c="";b.value=c}}}})();a.b("selectExtensions",a.k);a.b("selectExtensions.readValue",a.k.o);a.b("selectExtensions.writeValue",a.k.na);a.g=function(){function b(b){b=a.a.la(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=
[],d=b.match(e),k,l,n=0;if(d){d.push(",");for(var r=0,v;v=d[r];++r){var t=v.charCodeAt(0);if(44===t){if(0>=n){k&&c.push(l?{key:k,value:l.join("")}:{unknown:k});k=l=n=0;continue}}else if(58===t){if(!l)continue}else if(47===t&&r&&1<v.length)(t=d[r-1].match(g))&&!h[t[0]]&&(b=b.substr(b.indexOf(v)+1),d=b.match(e),d.push(","),r=-1,v="/");else if(40===t||123===t||91===t)++n;else if(41===t||125===t||93===t)--n;else if(!k&&!l){k=34===t||39===t?v.slice(1,-1):v;continue}l?l.push(v):l=[v]}}return c}var c=["true",
"false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),g=/[\])"'A-Za-z0-9_$]+$/,h={"in":1,"return":1,"typeof":1},k={};return{Y:[],U:k,Ga:b,ka:function(e,f){function g(b,f){var e,r=a.getBindingHandler(b);if(r&&r.preprocess?f=r.preprocess(f,b,g):1){if(r=k[b])e=f,0<=a.a.l(c,e)?e=!1:(r=e.match(d),e=null===r?!1:r[1]?"Object("+r[1]+")"+
r[2]:e),r=e;r&&l.push("'"+b+"':function(_z){"+e+"=_z}");n&&(f="function(){return "+f+" }");h.push("'"+b+"':"+f)}}f=f||{};var h=[],l=[],n=f.valueAccessors,r="string"===typeof e?b(e):e;a.a.n(r,function(a){g(a.key||a.unknown,a.value)});l.length&&g("_ko_property_writers","{"+l.join(",")+"}");return h.join(",")},Sb:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},oa:function(b,c,d,e,k){if(b&&a.M(b))!a.gb(b)||k&&b.t()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();
a.b("expressionRewriting",a.g);a.b("expressionRewriting.bindingRewriteValidators",a.g.Y);a.b("expressionRewriting.parseObjectLiteral",a.g.Ga);a.b("expressionRewriting.preProcessBindings",a.g.ka);a.b("expressionRewriting._twoWayBindings",a.g.U);a.b("jsonExpressionRewriting",a.g);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.g.ka);(function(){function b(a){return 8==a.nodeType&&h.test(g?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&k.test(g?a.text:a.nodeValue)}function d(a,
d){for(var e=a,k=1,n=[];e=e.nextSibling;){if(c(e)&&(k--,0===k))return n;n.push(e);b(e)&&k++}if(!d)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var g=w&&"\x3c!--test--\x3e"===w.createComment("test").text,h=g?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,k=g?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,m={ul:!0,ol:!0};a.e={P:{},childNodes:function(a){return b(a)?
d(a):a.childNodes},Z:function(c){if(b(c)){c=a.e.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.wa(c)},S:function(c,d){if(b(c)){a.e.Z(c);for(var e=c.nextSibling,k=0,n=d.length;k<n;k++)e.parentNode.insertBefore(d[k],e)}else a.a.S(c,d)},kb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},eb:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):
c.appendChild(d):a.e.kb(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||c(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling},Mb:b,bc:function(a){return(a=(g?a.text:a.nodeValue).match(h))?a[1]:null},ib:function(d){if(m[a.a.v(d)]){var k=d.firstChild;if(k){do if(1===k.nodeType){var g;g=k.firstChild;var h=null;if(g){do if(h)h.push(g);else if(b(g)){var n=e(g,!0);n?g=n:h=[g]}else c(g)&&(h=[g]);while(g=
g.nextSibling)}if(g=h)for(h=k.nextSibling,n=0;n<g.length;n++)h?d.insertBefore(g[n],h):d.appendChild(g[n])}while(k=k.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",a.e.P);a.b("virtualElements.emptyNode",a.e.Z);a.b("virtualElements.insertAfter",a.e.eb);a.b("virtualElements.prepend",a.e.kb);a.b("virtualElements.setDomNodeChildren",a.e.S);(function(){a.H=function(){this.zb={}};a.a.extend(a.H.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=
b.getAttribute("data-bind");case 8:return a.e.Mb(b);default:return!1}},getBindings:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c,a):null},getBindingAccessors:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c,a,{valueAccessors:!0}):null},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.bc(b);default:return null}},parseBindingsString:function(b,c,d,e){try{var g=this.zb,
h=b+(e&&e.valueAccessors||""),k;if(!(k=g[h])){var m,f="with($context){with($data||{}){return{"+a.g.ka(b,e)+"}}}";m=new Function("$context","$element",f);k=g[h]=m}return k(c,d)}catch(p){throw p.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+p.message,p;}}});a.H.instance=new a.H})();a.b("bindingProvider",a.H);(function(){function b(a){return function(){return a}}function c(a){return a()}function d(b){return a.a.Da(a.i.p(b),function(a,c){return function(){return b()[c]}})}function e(a,
b){return d(this.getBindings.bind(this,a,b))}function g(b,c,d){var f,e=a.e.firstChild(c),k=a.H.instance,g=k.preprocessNode;if(g){for(;f=e;)e=a.e.nextSibling(f),g.call(k,f);e=a.e.firstChild(c)}for(;f=e;)e=a.e.nextSibling(f),h(b,f,d)}function h(b,c,d){var f=!0,e=1===c.nodeType;e&&a.e.ib(c);if(e&&d||a.H.instance.nodeHasBindings(c))f=m(c,null,b,d).shouldBindDescendants;f&&!p[a.a.v(c)]&&g(b,c,!e)}function k(b){var c=[],d={},f=[];a.a.K(b,function D(e){if(!d[e]){var k=a.getBindingHandler(e);k&&(k.after&&
(f.push(e),a.a.n(k.after,function(c){if(b[c]){if(-1!==a.a.l(f,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+f.join(", "));D(c)}}),f.pop()),c.push({key:e,bb:k}));d[e]=!0}});return c}function m(b,d,f,g){var h=a.a.f.get(b,s);if(!d){if(h)throw Error("You cannot apply bindings multiple times to the same element.");a.a.f.set(b,s,!0)}!h&&g&&a.rb(b,f);var m;if(d&&"function"!==typeof d)m=d;else{var p=a.H.instance,l=p.getBindingAccessors||e;if(d||f.A){var A=
a.h(function(){(m=d?d(f,b):l.call(p,b,f))&&f.A&&f.A();return m},null,{I:b});m&&A.aa()||(A=null)}else m=a.i.p(l,p,[b,f])}var u;if(m){var w=A?function(a){return function(){return c(A()[a])}}:function(a){return m[a]},y=function(){return a.a.Da(A?A():m,c)};y.get=function(a){return m[a]&&c(w(a))};y.has=function(a){return a in m};g=k(m);a.a.n(g,function(c){var d=c.bb.init,e=c.bb.update,k=c.key;if(8===b.nodeType&&!a.e.P[k])throw Error("The binding '"+k+"' cannot be used with virtual elements");try{"function"==
typeof d&&a.i.p(function(){var a=d(b,w(k),y,f.$data,f);if(a&&a.controlsDescendantBindings){if(u!==q)throw Error("Multiple bindings ("+u+" and "+k+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=k}}),"function"==typeof e&&a.h(function(){e(b,w(k),y,f.$data,f)},null,{I:b})}catch(g){throw g.message='Unable to process binding "'+k+": "+m[k]+'"\nMessage: '+g.message,g;}})}return{shouldBindDescendants:u===q}}function f(b){return b&&
b instanceof a.G?b:new a.G(b)}a.d={};var p={script:!0};a.getBindingHandler=function(b){return a.d[b]};a.G=function(b,c,d,f){var e=this,k="function"==typeof b,g,h=a.h(function(){var g=k?b():b;c?(c.A&&c.A(),a.a.extend(e,c),h&&(e.A=h)):(e.$parents=[],e.$root=g,e.ko=a);e.$rawData=b;e.$data=g;d&&(e[d]=g);f&&f(e,c,g);return e.$data},null,{ua:function(){return g&&!a.a.Ra(g)},I:!0});h.aa()&&(e.A=h,h.equalityComparer=null,g=[],h.wb=function(b){g.push(b);a.a.C.ea(b,function(b){a.a.ia(g,b);g.length||(h.B(),
e.A=h=q)})})};a.G.prototype.createChildContext=function(b,c,d){return new a.G(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.G.prototype.extend=function(b){return new a.G(this.$rawData,this,null,function(c){a.a.extend(c,"function"==typeof b?b():b)})};var s=a.a.f.D(),l=a.a.f.D();a.rb=function(b,c){if(2==arguments.length)a.a.f.set(b,l,c),c.A&&c.A.wb(b);else return a.a.f.get(b,l)};a.pa=function(b,c,d){1===b.nodeType&&
a.e.ib(b);return m(b,c,f(d),!0)};a.xb=function(c,e,k){k=f(k);return a.pa(c,"function"===typeof e?d(e.bind(null,k,c)):a.a.Da(e,b),k)};a.Ta=function(a,b){1!==b.nodeType&&8!==b.nodeType||g(f(a),b,!0)};a.Sa=function(a,b){if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||y.document.body;h(f(a),b,!0)};a.ta=function(b){switch(b.nodeType){case 1:case 8:var c=a.rb(b);if(c)return c;if(b.parentNode)return a.ta(b.parentNode)}return q};
a.Cb=function(b){return(b=a.ta(b))?b.$data:q};a.b("bindingHandlers",a.d);a.b("applyBindings",a.Sa);a.b("applyBindingsToDescendants",a.Ta);a.b("applyBindingAccessorsToNode",a.pa);a.b("applyBindingsToNode",a.xb);a.b("contextFor",a.ta);a.b("dataFor",a.Cb)})();var M={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.K(d,function(c,d){d=a.a.c(d);var h=!1===d||null===d||d===q;h&&b.removeAttribute(c);8>=a.a.ja&&c in M?(c=M[c],h?b.removeAttribute(c):b[c]=d):h||b.setAttribute(c,
d.toString());"name"===c&&a.a.pb(b,h?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,c,d){function e(){return d.has("checkedValue")?a.a.c(d.get("checkedValue")):b.value}function g(){var k=b.checked,g=s?e():k;if(l&&(!m||k)){var h=a.i.p(c);f?p!==g?(k&&(a.a.V(h,g,!0),a.a.V(h,p,!1)),p=g):a.a.V(h,g,k):a.g.oa(h,d,"checked",g,!0)}}function h(){var d=a.a.c(c());b.checked=f?0<=a.a.l(d,e()):k?d:e()===d}var k="checkbox"==b.type,m="radio"==b.type;if(k||m){var f=k&&a.a.c(c())instanceof
Array,p=f?e():q,s=m||f,l=!1;m&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.h(g,null,{I:b});a.a.r(b,"click",g);a.h(h,null,{I:b});l=!0}}};a.g.U.checked=!0;a.d.checkedValue={update:function(b,c){b.value=a.a.c(c())}}})();a.d.css={update:function(b,c){var d=a.a.c(c());"object"==typeof d?a.a.K(d,function(c,d){d=a.a.c(d);a.a.ma(b,c,d)}):(d=String(d||""),a.a.ma(b,b.__ko__cssValue,!1),b.__ko__cssValue=d,a.a.ma(b,d,!0))}};a.d.enable={update:function(b,c){var d=a.a.c(c());d&&b.disabled?b.removeAttribute("disabled"):
d||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return!a.a.c(c())})}};a.d.event={init:function(b,c,d,e,g){var h=c()||{};a.a.K(h,function(k){"string"==typeof k&&a.a.r(b,k,function(b){var f,h=c()[k];if(h){try{var s=a.a.Q(arguments);e=g.$data;s.unshift(e);f=h.apply(e,s)}finally{!0!==f&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===d.get(k+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={hb:function(b){return function(){var c=
b(),d=a.a.Ha(c);if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.J.Aa};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.J.Aa}}},init:function(b,c){return a.d.template.init(b,a.d.foreach.hb(c))},update:function(b,c,d,e,g){return a.d.template.update(b,a.d.foreach.hb(c),d,e,g)}};a.g.Y.foreach=!1;a.e.P.foreach=!0;a.d.hasfocus=
{init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var g=b.ownerDocument;if("activeElement"in g){var f;try{f=g.activeElement}catch(h){f=g.body}e=f===b}g=c();a.g.oa(g,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var g=e.bind(null,!0),h=e.bind(null,!1);a.a.r(b,"focus",g);a.a.r(b,"focusin",g);a.a.r(b,"blur",h);a.a.r(b,"focusout",h)},update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),a.i.p(a.a.da,
null,[b,d?"focusin":"focusout"]))}};a.g.U.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.g.U.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Ka(b,c())}};var L=a.a.f.D();H("if");H("ifnot",!1,!0);H("with",!0,!1,function(a,c){return a.createChildContext(c)});a.d.options={init:function(b){if("select"!==a.a.v(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,
c,d){function e(){return a.a.ga(b.options,function(a){return a.selected})}function g(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function h(c,d){if(p.length){var f=0<=a.a.l(p,a.k.o(d[0]));a.a.qb(d[0],f);l&&!f&&a.i.p(a.a.da,null,[b,"change"])}}var k=0!=b.length&&b.multiple?b.scrollTop:null;c=a.a.c(c());var m=d.get("optionsIncludeDestroyed"),f={},p;p=b.multiple?a.a.ha(e(),a.k.o):0<=b.selectedIndex?[a.k.o(b.options[b.selectedIndex])]:[];if(c){"undefined"==typeof c.length&&(c=[c]);
var s=a.a.ga(c,function(b){return m||b===q||null===b||!a.a.c(b._destroy)});d.has("optionsCaption")&&(c=a.a.c(d.get("optionsCaption")),null!==c&&c!==q&&s.unshift(f))}else c=[];var l=!1;c=h;d.has("optionsAfterRender")&&(c=function(b,c){h(0,c);a.i.p(d.get("optionsAfterRender"),null,[c[0],b!==f?b:q])});a.a.Ja(b,s,function(b,c,e){e.length&&(p=e[0].selected?[a.k.o(e[0])]:[],l=!0);c=w.createElement("option");b===f?(a.a.Ma(c,d.get("optionsCaption")),a.k.na(c,q)):(e=g(b,d.get("optionsValue"),b),a.k.na(c,a.a.c(e)),
b=g(b,d.get("optionsText"),e),a.a.Ma(c,b));return[c]},null,c);(b.multiple?p.length&&e().length<p.length:p.length&&0<=b.selectedIndex?a.k.o(b.options[b.selectedIndex])!==p[0]:p.length||0<=b.selectedIndex)&&a.i.p(a.a.da,null,[b,"change"]);a.a.Hb(b);k&&20<Math.abs(k-b.scrollTop)&&(b.scrollTop=k)}};a.d.options.Ea=a.a.f.D();a.d.selectedOptions={after:["options","foreach"],init:function(b,c,d){a.a.r(b,"change",function(){var e=c(),g=[];a.a.n(b.getElementsByTagName("option"),function(b){b.selected&&g.push(a.k.o(b))});
a.g.oa(e,d,"selectedOptions",g)})},update:function(b,c){if("select"!=a.a.v(b))throw Error("values binding applies only to SELECT elements");var d=a.a.c(c());d&&"number"==typeof d.length&&a.a.n(b.getElementsByTagName("option"),function(b){var c=0<=a.a.l(d,a.k.o(b));a.a.qb(b,c)})}};a.g.U.selectedOptions=!0;a.d.style={update:function(b,c){var d=a.a.c(c()||{});a.a.K(d,function(c,d){d=a.a.c(d);b.style[c]=d||""})}};a.d.submit={init:function(b,c,d,e,g){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");
a.a.r(b,"submit",function(a){var d,e=c();try{d=e.call(g.$data,b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Ma(b,c())}};a.e.P.text=!0;a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.d.uniqueName.Bb;a.a.pb(b,d)}}};a.d.uniqueName.Bb=0;a.d.value={after:["options","foreach"],init:function(b,c,d){function e(){k=!1;var e=c(),f=a.k.o(b);a.g.oa(e,d,"value",f)}var g=
["change"],h=d.get("valueUpdate"),k=!1;h&&("string"==typeof h&&(h=[h]),a.a.X(g,h),g=a.a.Va(g));!a.a.ja||"input"!=b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.l(g,"propertychange")||(a.a.r(b,"propertychange",function(){k=!0}),a.a.r(b,"blur",function(){k&&e()}));a.a.n(g,function(c){var d=e;a.a.ac(c,"after")&&(d=function(){setTimeout(e,0)},c=c.substring(5));a.a.r(b,c,d)})},update:function(b,c){var d="select"===a.a.v(b),e=a.a.c(c()),g=a.k.o(b);
e!==g&&(g=function(){a.k.na(b,e)},g(),d&&(e!==a.k.o(b)?a.i.p(a.a.da,null,[b,"change"]):setTimeout(g,0)))}};a.g.U.value=!0;a.d.visible={update:function(b,c){var d=a.a.c(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(c,d,e,g,h){return a.d.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,g,h)}}})("click");a.w=function(){};a.w.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");
};a.w.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.w.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.m.j(d)}if(1==b.nodeType||8==b.nodeType)return new a.m.W(b);throw Error("Unknown template type: "+b);};a.w.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,
d)};a.w.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.w.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.w);a.Oa=function(){function b(b,c,d,k){b=a.g.Ga(b);for(var m=a.g.Y,f=0;f<b.length;f++){var p=b[f].key;if(m.hasOwnProperty(p)){var s=m[p];if("function"===typeof s){if(p=s(b[f].value))throw Error(p);}else if(!s)throw Error("This template engine does not support the '"+
p+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.g.ka(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return k.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{Ib:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Oa.Ub(b,c)},
d)},Ub:function(a,g){return a.replace(c,function(a,c,d,f,e){return b(e,c,d,g)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",g)})},yb:function(b,c){return a.u.Ca(function(d,k){var m=d.nextSibling;m&&m.nodeName.toLowerCase()===c&&a.pa(m,b,k)})}}}();a.b("__tr_ambtns",a.Oa.yb);(function(){a.m={};a.m.j=function(a){this.j=a};a.m.j.prototype.text=function(){var b=a.a.v(this.j),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.j[b];var c=arguments[0];
"innerHTML"===b?a.a.Ka(this.j,c):this.j[b]=c};var b=a.a.f.D()+"_";a.m.j.prototype.data=function(c){if(1===arguments.length)return a.a.f.get(this.j,b+c);a.a.f.set(this.j,b+c,arguments[1])};var c=a.a.f.D();a.m.W=function(a){this.j=a};a.m.W.prototype=new a.m.j;a.m.W.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.j,c)||{};b.Pa===q&&b.sa&&(b.Pa=b.sa.innerHTML);return b.Pa}a.a.f.set(this.j,c,{Pa:arguments[0]})};a.m.j.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.j,
c)||{}).sa;a.a.f.set(this.j,c,{sa:arguments[0]})};a.b("templateSources",a.m);a.b("templateSources.domElement",a.m.j);a.b("templateSources.anonymousTemplate",a.m.W)})();(function(){function b(b,c,d){var e;for(c=a.e.nextSibling(c);b&&(e=b)!==c;)b=a.e.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var f=c[0],e=c[c.length-1],g=f.parentNode,h=a.H.instance,n=h.preprocessNode;if(n){b(f,e,function(a,b){var c=a.previousSibling,d=n.call(h,a);d&&(a===f&&(f=d[0]||b),a===e&&(e=d[d.length-1]||c))});c.length=
0;if(!f)return;f===e?c.push(f):(c.push(f,e),a.a.$(c,g))}b(f,e,function(b){1!==b.nodeType&&8!==b.nodeType||a.Sa(d,b)});b(f,e,function(b){1!==b.nodeType&&8!==b.nodeType||a.u.vb(b,[d])});a.a.$(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,s){s=s||{};var l=b&&d(b),l=l&&l.ownerDocument,n=s.templateEngine||g;a.Oa.Ib(f,n,l);f=n.renderTemplate(f,h,s,l);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");
l=!1;switch(e){case "replaceChildren":a.e.S(b,f);l=!0;break;case "replaceNode":a.a.nb(b,f);l=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}l&&(c(f,h),s.afterRender&&a.i.p(s.afterRender,null,[f,h.$data]));return f}var g;a.La=function(b){if(b!=q&&!(b instanceof a.w))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.Ia=function(b,c,f,h,s){f=f||{};if((f.templateEngine||g)==q)throw Error("Set a template engine before calling renderTemplate");
s=s||"replaceChildren";if(h){var l=d(h);return a.h(function(){var g=c&&c instanceof a.G?c:new a.G(a.a.c(c)),r="function"==typeof b?b(g.$data,g):b,g=e(h,s,r,g,f);"replaceNode"==s&&(h=g,l=d(h))},null,{ua:function(){return!l||!a.a.va(l)},I:l&&"replaceNode"==s?l.parentNode:l})}return a.u.Ca(function(d){a.Ia(b,c,f,d,"replaceNode")})};a.$b=function(b,d,f,g,h){function l(a,b){c(b,r);f.afterRender&&f.afterRender(b,a)}function n(a,c){r=h.createChildContext(a,f.as,function(a){a.$index=c});var d="function"==
typeof b?b(a,r):b;return e(null,"ignoreTargetNode",d,r,f)}var r;return a.h(function(){var b=a.a.c(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.ga(b,function(b){return f.includeDestroyed||b===q||null===b||!a.a.c(b._destroy)});a.i.p(a.a.Ja,null,[g,b,n,f,l])},null,{I:g})};var h=a.a.f.D();a.d.template={init:function(b,c){var d=a.a.c(c());"string"==typeof d||d.name?a.e.Z(b):(d=a.e.childNodes(b),d=a.a.Vb(d),(new a.m.W(b)).nodes(d));return{controlsDescendantBindings:!0}},update:function(b,c,d,e,g){c=
a.a.c(c());d={};e=!0;var l,n=null;"string"!=typeof c&&(d=c,c=a.a.c(d.name),"if"in d&&(e=a.a.c(d["if"])),e&&"ifnot"in d&&(e=!a.a.c(d.ifnot)),l=a.a.c(d.data));"foreach"in d?n=a.$b(c||b,e&&d.foreach||[],d,b,g):e?(g="data"in d?g.createChildContext(l,d.as):g,n=a.Ia(c||b,g,d,b)):a.e.Z(b);g=n;(l=a.a.f.get(b,h))&&"function"==typeof l.B&&l.B();a.a.f.set(b,h,g&&g.aa()?g:q)}};a.g.Y.template=function(b){b=a.g.Ga(b);return 1==b.length&&b[0].unknown||a.g.Sb(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};
a.e.P.template=!0})();a.b("setTemplateEngine",a.La);a.b("renderTemplate",a.Ia);a.a.ra=function(){function a(b,d,e,g,h){var k=Math.min,m=Math.max,f=[],p,q=b.length,l,n=d.length,r=n-q||1,v=q+n+1,t,u,w;for(p=0;p<=q;p++)for(u=t,f.push(t=[]),w=k(n,p+r),l=m(0,p-1);l<=w;l++)t[l]=l?p?b[p-1]===d[l-1]?u[l-1]:k(u[l]||v,t[l-1]||v)+1:l+1:p+1;k=[];m=[];r=[];p=q;for(l=n;p||l;)n=f[p][l]-1,l&&n===f[p][l-1]?m.push(k[k.length]={status:e,value:d[--l],index:l}):p&&n===f[p-1][l]?r.push(k[k.length]={status:g,value:b[--p],
index:p}):(--l,--p,h.sparse||k.push({status:"retained",value:d[l]}));if(m.length&&r.length){b=10*q;var z;for(d=e=0;(h.dontLimitMoves||d<b)&&(z=m[e]);e++){for(g=0;f=r[g];g++)if(z.value===f.value){z.moved=f.index;f.moved=z.index;r.splice(g,1);d=g=0;break}d+=g}}return k.reverse()}return function(c,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};c=c||[];d=d||[];return c.length<=d.length?a(c,d,"added","deleted",e):a(d,c,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.ra);(function(){function b(b,
c,g,h,k){var m=[],f=a.h(function(){var f=c(g,k,a.a.$(m,b))||[];0<m.length&&(a.a.nb(m,f),h&&a.i.p(h,null,[g,f,k]));m.splice(0,m.length);a.a.X(m,f)},null,{I:b,ua:function(){return!a.a.Ra(m)}});return{R:m,h:f.aa()?f:q}}var c=a.a.f.D();a.a.Ja=function(d,e,g,h,k){function m(b,c){x=s[c];t!==c&&(z[b]=x);x.za(t++);a.a.$(x.R,d);r.push(x);w.push(x)}function f(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.n(c[d].R,function(a){b(a,d,c[d].fa)})}e=e||[];h=h||{};var p=a.a.f.get(d,c)===q,s=a.a.f.get(d,c)||[],
l=a.a.ha(s,function(a){return a.fa}),n=a.a.ra(l,e,h.dontLimitMoves),r=[],v=0,t=0,u=[],w=[];e=[];for(var z=[],l=[],x,A=0,y,B;y=n[A];A++)switch(B=y.moved,y.status){case "deleted":B===q&&(x=s[v],x.h&&x.h.B(),u.push.apply(u,a.a.$(x.R,d)),h.beforeRemove&&(e[A]=x,w.push(x)));v++;break;case "retained":m(A,v++);break;case "added":B!==q?m(A,B):(x={fa:y.value,za:a.q(t++)},r.push(x),w.push(x),p||(l[A]=x))}f(h.beforeMove,z);a.a.n(u,h.beforeRemove?a.L:a.removeNode);for(var A=0,p=a.e.firstChild(d),C;x=w[A];A++){x.R||
a.a.extend(x,b(d,g,x.fa,k,x.za));for(v=0;n=x.R[v];p=n.nextSibling,C=n,v++)n!==p&&a.e.eb(d,n,C);!x.Ob&&k&&(k(x.fa,x.R,x.za),x.Ob=!0)}f(h.beforeRemove,e);f(h.afterMove,z);f(h.afterAdd,l);a.a.f.set(d,c,r)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Ja);a.J=function(){this.allowTemplateRewriting=!1};a.J.prototype=new a.w;a.J.prototype.renderTemplateSource=function(b){var c=(9>a.a.ja?0:b.nodes)?b.nodes():null;if(c)return a.a.Q(c.cloneNode(!0).childNodes);b=b.text();return a.a.Fa(b)};a.J.Aa=
new a.J;a.La(a.J.Aa);a.b("nativeTemplateEngine",a.J);(function(){a.Ba=function(){var a=this.Rb=function(){if("undefined"==typeof u||!u.tmpl)return 0;try{if(0<=u.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,g){g=g||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=u.template(null,"{{ko_with $item.koBindingContext}}"+h+
"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=u.extend({koBindingContext:e},g.templateOptions);e=u.tmpl(h,b,e);e.appendTo(w.createElement("div"));u.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(u.tmpl.tag.ko_code={open:"__.push($1 || '');"},u.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.Ba.prototype=
new a.w;var b=new a.Ba;0<b.Rb&&a.La(b);a.b("jqueryTmplTemplateEngine",a.Ba)})()})})();})();
//     Underscore.js 1.5.1
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,w=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.1";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(j.has(n,a)&&t.call(e,n[a],a,n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=F(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(null==t?j.identity:t);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};j.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)})},j.countBy=function(n,t,r){return k(n,t,r,function(n,t){j.has(n,t)||(n[t]=0),n[t]++})},j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var R=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return R(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var M=function(){};j.bind=function(n,t){var r,e;if(w&&n.bind===w)return w.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));M.prototype=n.prototype;var u=new M;M.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u=null;return function(){var i=this,a=arguments,o=function(){u=null,r||(e=n.apply(i,a))},c=r&&!u;return clearTimeout(u),u=setTimeout(o,t),c&&(e=n.apply(i,a)),e}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push(n[r]);return t},j.pairs=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push([r,n[r]]);return t},j.invert=function(n){var t={};for(var r in n)j.has(n,r)&&(t[n[r]]=r);return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this);
//# sourceMappingURL=underscore-min.map
/*! gridster.js - v0.1.0 - 2013-06-14
 * http://gridster.net/
 * Copyright (c) 2013 ducksboard; Licensed MIT */

;
(function($, window, document, undefined)
{
	/**
	 * Creates objects with coordinates (x1, y1, x2, y2, cx, cy, width, height)
	 * to simulate DOM elements on the screen.
	 * Coords is used by Gridster to create a faux grid with any DOM element can
	 * collide.
	 *
	 * @class Coords
	 * @param {HTMLElement|Object} obj The jQuery HTMLElement or a object with: left,
	 * top, width and height properties.
	 * @return {Object} Coords instance.
	 * @constructor
	 */
	function Coords(obj)
	{
		if(obj[0] && $.isPlainObject(obj[0]))
		{
			this.data = obj[0];
		}
		else
		{
			this.el = obj;
		}

		this.isCoords = true;
		this.coords = {};
		this.init();
		return this;
	}


	var fn = Coords.prototype;


	fn.init = function()
	{
		this.set();
		this.original_coords = this.get();
	};


	fn.set = function(update, not_update_offsets)
	{
		var el = this.el;

		if(el && !update)
		{
			this.data = el.offset();
			this.data.width = el.width();
			this.data.height = el.height();
		}

		if(el && update && !not_update_offsets)
		{
			var offset = el.offset();
			this.data.top = offset.top;
			this.data.left = offset.left;
		}

		var d = this.data;

		this.coords.x1 = d.left;
		this.coords.y1 = d.top;
		this.coords.x2 = d.left + d.width;
		this.coords.y2 = d.top + d.height;
		this.coords.cx = d.left + (d.width / 2);
		this.coords.cy = d.top + (d.height / 2);
		this.coords.width = d.width;
		this.coords.height = d.height;
		this.coords.el = el || false;

		return this;
	};


	fn.update = function(data)
	{
		if(!data && !this.el)
		{
			return this;
		}

		if(data)
		{
			var new_data = $.extend({}, this.data, data);
			this.data = new_data;
			return this.set(true, true);
		}

		this.set(true);
		return this;
	};


	fn.get = function()
	{
		return this.coords;
	};


	//jQuery adapter
	$.fn.coords = function()
	{
		if(this.data('coords'))
		{
			return this.data('coords');
		}

		var ins = new Coords(this, arguments[0]);
		this.data('coords', ins);
		return ins;
	};

}(jQuery, window, document));

;
(function($, window, document, undefined)
{

	var defaults = {
		colliders_context: document.body
		// ,on_overlap: function(collider_data){},
		// on_overlap_start : function(collider_data){},
		// on_overlap_stop : function(collider_data){}
	};


	/**
	 * Detects collisions between a DOM element against other DOM elements or
	 * Coords objects.
	 *
	 * @class Collision
	 * @uses Coords
	 * @param {HTMLElement} el The jQuery wrapped HTMLElement.
	 * @param {HTMLElement|Array} colliders Can be a jQuery collection
	 *  of HTMLElements or an Array of Coords instances.
	 * @param {Object} [options] An Object with all options you want to
	 *        overwrite:
	 *   @param {Function} [options.on_overlap_start] Executes a function the first
	 *    time each `collider ` is overlapped.
	 *   @param {Function} [options.on_overlap_stop] Executes a function when a
	 *    `collider` is no longer collided.
	 *   @param {Function} [options.on_overlap] Executes a function when the
	 * mouse is moved during the collision.
	 * @return {Object} Collision instance.
	 * @constructor
	 */
	function Collision(el, colliders, options)
	{
		this.options = $.extend(defaults, options);
		this.$element = el;
		this.last_colliders = [];
		this.last_colliders_coords = [];
		if(typeof colliders === 'string' || colliders instanceof jQuery)
		{
			this.$colliders = $(colliders, this.options.colliders_context).not(this.$element);
		}
		else
		{
			this.colliders = $(colliders);
		}

		this.init();
	}


	var fn = Collision.prototype;


	fn.init = function()
	{
		this.find_collisions();
	};


	fn.overlaps = function(a, b)
	{
		var x = false;
		var y = false;

		if((b.x1 >= a.x1 && b.x1 <= a.x2) || (b.x2 >= a.x1 && b.x2 <= a.x2) || (a.x1 >= b.x1 && a.x2 <= b.x2))
		{
			x = true;
		}

		if((b.y1 >= a.y1 && b.y1 <= a.y2) || (b.y2 >= a.y1 && b.y2 <= a.y2) || (a.y1 >= b.y1 && a.y2 <= b.y2))
		{
			y = true;
		}

		return (x && y);
	};


	fn.detect_overlapping_region = function(a, b)
	{
		var regionX = '';
		var regionY = '';

		if(a.y1 > b.cy && a.y1 < b.y2)
		{
			regionX = 'N';
		}
		if(a.y2 > b.y1 && a.y2 < b.cy)
		{
			regionX = 'S';
		}
		if(a.x1 > b.cx && a.x1 < b.x2)
		{
			regionY = 'W';
		}
		if(a.x2 > b.x1 && a.x2 < b.cx)
		{
			regionY = 'E';
		}

		return (regionX + regionY) || 'C';
	};


	fn.calculate_overlapped_area_coords = function(a, b)
	{
		var x1 = Math.max(a.x1, b.x1);
		var y1 = Math.max(a.y1, b.y1);
		var x2 = Math.min(a.x2, b.x2);
		var y2 = Math.min(a.y2, b.y2);

		return $({
			left  : x1,
			top   : y1,
			width : (x2 - x1),
			height: (y2 - y1)
		}).coords().get();
	};


	fn.calculate_overlapped_area = function(coords)
	{
		return (coords.width * coords.height);
	};


	fn.manage_colliders_start_stop = function(new_colliders_coords, start_callback, stop_callback)
	{
		var last = this.last_colliders_coords;

		for(var i = 0, il = last.length; i < il; i++)
		{
			if($.inArray(last[i], new_colliders_coords) === -1)
			{
				start_callback.call(this, last[i]);
			}
		}

		for(var j = 0, jl = new_colliders_coords.length; j < jl; j++)
		{
			if($.inArray(new_colliders_coords[j], last) === -1)
			{
				stop_callback.call(this, new_colliders_coords[j]);
			}

		}
	};


	fn.find_collisions = function(player_data_coords)
	{
		var self = this;
		var colliders_coords = [];
		var colliders_data = [];
		var $colliders = (this.colliders || this.$colliders);
		var count = $colliders.length;
		var player_coords = self.$element.coords().update(player_data_coords || false).get();

		while(count--)
		{
			var $collider = self.$colliders ? $($colliders[count]) : $colliders[count];
			var $collider_coords_ins = ($collider.isCoords) ? $collider : $collider.coords();
			var collider_coords = $collider_coords_ins.get();
			var overlaps = self.overlaps(player_coords, collider_coords);

			if(!overlaps)
			{
				continue;
			}

			var region = self.detect_overlapping_region(player_coords, collider_coords);

			//todo: make this an option
			if(region === 'C')
			{
				var area_coords = self.calculate_overlapped_area_coords(player_coords, collider_coords);
				var area = self.calculate_overlapped_area(area_coords);
				var collider_data = {
					area         : area,
					area_coords  : area_coords,
					region       : region,
					coords       : collider_coords,
					player_coords: player_coords,
					el           : $collider
				};

				if(self.options.on_overlap)
				{
					self.options.on_overlap.call(this, collider_data);
				}
				colliders_coords.push($collider_coords_ins);
				colliders_data.push(collider_data);
			}
		}

		if(self.options.on_overlap_stop || self.options.on_overlap_start)
		{
			this.manage_colliders_start_stop(colliders_coords, self.options.on_overlap_start, self.options.on_overlap_stop);
		}

		this.last_colliders_coords = colliders_coords;

		return colliders_data;
	};


	fn.get_closest_colliders = function(player_data_coords)
	{
		var colliders = this.find_collisions(player_data_coords);

		colliders.sort(function(a, b)
		{
			/* if colliders are being overlapped by the "C" (center) region,
			 * we have to set a lower index in the array to which they are placed
			 * above in the grid. */
			if(a.region === 'C' && b.region === 'C')
			{
				if(a.coords.y1 < b.coords.y1 || a.coords.x1 < b.coords.x1)
				{
					return -1;
				}
				else
				{
					return 1;
				}
			}

			if(a.area < b.area)
			{
				return 1;
			}

			return 1;
		});
		return colliders;
	};


	//jQuery adapter
	$.fn.collision = function(collider, options)
	{
		return new Collision(this, collider, options);
	};


}(jQuery, window, document));

;
(function(window, undefined)
{
	/* Debounce and throttle functions taken from underscore.js */
	window.debounce = function(func, wait, immediate)
	{
		var timeout;
		return function()
		{
			var context = this, args = arguments;
			var later = function()
			{
				timeout = null;
				if(!immediate) func.apply(context, args);
			};
			if(immediate && !timeout) func.apply(context, args);
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	};


	window.throttle = function(func, wait)
	{
		var context, args, timeout, throttling, more, result;
		var whenDone = debounce(function()
			{
				more = throttling = false;
			}, wait);
		return function()
		{
			context = this;
			args = arguments;
			var later = function()
			{
				timeout = null;
				if(more) func.apply(context, args);
				whenDone();
			};
			if(!timeout) timeout = setTimeout(later, wait);
			if(throttling)
			{
				more = true;
			}
			else
			{
				result = func.apply(context, args);
			}
			whenDone();
			throttling = true;
			return result;
		};
	};

})(window);

;
(function($, window, document, undefined)
{

	var defaults = {
		items          : '.gs_w',
		distance       : 1,
		limit          : true,
		offset_left    : 0,
		autoscroll     : true,
		ignore_dragging: ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'],
		handle         : null,
		container_width: 0  // 0 == auto
		// drag: function(e){},
		// start : function(e, ui){},
		// stop : function(e){}
	};

	var $window = $(window);
	var isTouch = !!('ontouchstart' in window);
	var pointer_events = {
		start: isTouch ? 'touchstart.gridster-draggable' : 'mousedown.gridster-draggable',
		move : isTouch ? 'touchmove.gridster-draggable' : 'mousemove.gridster-draggable',
		end  : isTouch ? 'touchend.gridster-draggable' : 'mouseup.gridster-draggable'
	};

	/**
	 * Basic drag implementation for DOM elements inside a container.
	 * Provide start/stop/drag callbacks.
	 *
	 * @class Draggable
	 * @param {HTMLElement} el The HTMLelement that contains all the panes
	 *  to be dragged.
	 * @param {Object} [options] An Object with all options you want to
	 *        overwrite:
	 *    @param {HTMLElement|String} [options.items] Define who will
	 *     be the draggable items. Can be a CSS Selector String or a
	 *     collection of HTMLElements.
	 *    @param {Number} [options.distance] Distance in pixels after mousedown
	 *     the mouse must move before dragging should start.
	 *    @param {Boolean} [options.limit] Constrains dragging to the width of
	 *     the container
	 *    @param {offset_left} [options.offset_left] Offset added to the item
	 *     that is being dragged.
	 *    @param {Number} [options.drag] Executes a callback when the mouse is
	 *     moved during the dragging.
	 *    @param {Number} [options.start] Executes a callback when the drag
	 *     starts.
	 *    @param {Number} [options.stop] Executes a callback when the drag stops.
	 * @return {Object} Returns `el`.
	 * @constructor
	 */
	function Draggable(el, options)
	{
		this.options = $.extend({}, defaults, options);
		this.$body = $(document.body);
		this.$container = $(el);
		this.$dragitems = $(this.options.items, this.$container);
		this.is_dragging = false;
		this.player_min_left = 0 + this.options.offset_left;
		this.init();
	}

	var fn = Draggable.prototype;

	fn.init = function()
	{
		this.calculate_positions();
		this.$container.css('position', 'relative');
		this.disabled = false;
		this.events();

		$(window).bind('resize.gridster-draggable', throttle($.proxy(this.calculate_positions, this), 200));
	};

	fn.setOptions = function(options)
	{
		this.options = $.extend(this.options, options);
	};

	fn.events = function()
	{
		this.$container.on('selectstart.gridster-draggable', $.proxy(this.on_select_start, this));

		this.$container.on(pointer_events.start, this.options.items, $.proxy(this.drag_handler, this));

		this.$body.on(pointer_events.end, $.proxy(function(e)
		{
			this.is_dragging = false;
			if(this.disabled)
			{
				return;
			}
			this.$body.off(pointer_events.move);
			if(this.drag_start)
			{
				this.on_dragstop(e);
			}
		}, this));
	};

	fn.get_actual_pos = function($el)
	{
		var pos = $el.position();
		return pos;
	};


	fn.get_mouse_pos = function(e)
	{
		if(isTouch)
		{
			var oe = e.originalEvent;
			e = oe.touches.length ? oe.touches[0] : oe.changedTouches[0];
		}

		return {
			left: e.clientX,
			top : e.clientY
		};
	};


	fn.get_offset = function(e)
	{
		e.preventDefault();
		var mouse_actual_pos = this.get_mouse_pos(e);
		var diff_x = Math.round(mouse_actual_pos.left - this.mouse_init_pos.left);
		var diff_y = Math.round(mouse_actual_pos.top - this.mouse_init_pos.top);

		var left = Math.round(this.el_init_offset.left + diff_x - this.baseX);
		var top = Math.round(this.el_init_offset.top + diff_y - this.baseY + this.scrollOffset);

		if(this.options.limit)
		{
			if(left > this.player_max_left)
			{
				left = this.player_max_left;
			}
			else if(left < this.player_min_left)
			{
				left = this.player_min_left;
			}
		}

		return {
			left      : left,
			top       : top,
			mouse_left: mouse_actual_pos.left,
			mouse_top : mouse_actual_pos.top
		};
	};


	fn.manage_scroll = function(offset)
	{
		/* scroll document */
		var nextScrollTop;
		var scrollTop = $window.scrollTop();
		var min_window_y = scrollTop;
		var max_window_y = min_window_y + this.window_height;

		var mouse_down_zone = max_window_y - 50;
		var mouse_up_zone = min_window_y + 50;

		var abs_mouse_left = offset.mouse_left;
		var abs_mouse_top = min_window_y + offset.mouse_top;

		var max_player_y = (this.doc_height - this.window_height + this.player_height);

		if(abs_mouse_top >= mouse_down_zone)
		{
			nextScrollTop = scrollTop + 30;
			if(nextScrollTop < max_player_y)
			{
				$window.scrollTop(nextScrollTop);
				this.scrollOffset = this.scrollOffset + 30;
			}
		}

		if(abs_mouse_top <= mouse_up_zone)
		{
			nextScrollTop = scrollTop - 30;
			if(nextScrollTop > 0)
			{
				$window.scrollTop(nextScrollTop);
				this.scrollOffset = this.scrollOffset - 30;
			}
		}
	};


	fn.calculate_positions = function(e)
	{
		this.window_height = $window.height();
	};


	fn.drag_handler = function(e)
	{
		var node = e.target.nodeName;
		if(this.disabled || e.which !== 1 && !isTouch)
		{
			return;
		}

		if(this.ignore_drag(e))
		{
			return;
		}

		var self = this;
		var first = true;
		this.$player = $(e.currentTarget);

		this.el_init_pos = this.get_actual_pos(this.$player);
		this.mouse_init_pos = this.get_mouse_pos(e);
		this.offsetY = this.mouse_init_pos.top - this.el_init_pos.top;

		this.$body.on(pointer_events.move, function(mme)
		{
			var mouse_actual_pos = self.get_mouse_pos(mme);
			var diff_x = Math.abs(mouse_actual_pos.left - self.mouse_init_pos.left);
			var diff_y = Math.abs(mouse_actual_pos.top - self.mouse_init_pos.top);
			if(!(diff_x > self.options.distance || diff_y > self.options.distance))
			{
				return false;
			}

			if(first)
			{
				first = false;
				self.on_dragstart.call(self, mme);
				return false;
			}

			if(self.is_dragging === true)
			{
				self.on_dragmove.call(self, mme);
			}

			return false;
		});

		if(!isTouch)
		{
			return false;
		}
	};


	fn.on_dragstart = function(e)
	{
		e.preventDefault();
		this.drag_start = true;
		this.is_dragging = true;
		var offset = this.$container.offset();
		this.baseX = Math.round(offset.left);
		this.baseY = Math.round(offset.top);
		this.doc_height = $(document).height();

		if(this.options.helper === 'clone')
		{
			this.$helper = this.$player.clone().appendTo(this.$container).addClass('helper');
			this.helper = true;
		}
		else
		{
			this.helper = false;
		}
		this.scrollOffset = 0;
		this.el_init_offset = this.$player.offset();
		this.player_width = this.$player.width();
		this.player_height = this.$player.height();

		var container_width = this.options.container_width || this.$container.width();
		this.player_max_left = (container_width - this.player_width + this.options.offset_left);

		if(this.options.start)
		{
			this.options.start.call(this.$player, e, {
				helper: this.helper ? this.$helper : this.$player
			});
		}
		return false;
	};


	fn.on_dragmove = function(e)
	{
		var offset = this.get_offset(e);

		this.options.autoscroll && this.manage_scroll(offset);

		(this.helper ? this.$helper : this.$player).css({
			'position': 'absolute',
			'left'    : offset.left,
			'top'     : offset.top
		});

		var ui = {
			'position': {
				'left': offset.left,
				'top' : offset.top
			}
		};

		if(this.options.drag)
		{
			this.options.drag.call(this.$player, e, ui);
		}
		return false;
	};


	fn.on_dragstop = function(e)
	{
		var offset = this.get_offset(e);
		this.drag_start = false;

		var ui = {
			'position': {
				'left': offset.left,
				'top' : offset.top
			}
		};

		if(this.options.stop)
		{
			this.options.stop.call(this.$player, e, ui);
		}

		if(this.helper)
		{
			this.$helper.remove();
		}

		return false;
	};

	fn.on_select_start = function(e)
	{
		if(this.disabled)
		{
			return;
		}

		if(this.ignore_drag(e))
		{
			return;
		}

		return false;
	};

	fn.enable = function()
	{
		this.disabled = false;
	};

	fn.disable = function()
	{
		this.disabled = true;
	};


	fn.destroy = function()
	{
		this.disable();

		this.$container.off('.gridster-draggable');
		this.$body.off('.gridster-draggable');
		$(window).off('.gridster-draggable');

		$.removeData(this.$container, 'drag');
	};

	fn.ignore_drag = function(event)
	{
		if(this.options.handle)
		{
			return !$(event.target).is(this.options.handle);
		}

		return $.inArray(event.target.nodeName, this.options.ignore_dragging) >= 0;
	};

	//jQuery adapter
	$.fn.drag = function(options)
	{
		return this.each(function()
		{
			if(!$.data(this, 'drag'))
			{
				$.data(this, 'drag', new Draggable(this, options));
			}
			else
			{
				$.data(this, 'drag').setOptions(options);
			}
		});
	};


}(jQuery, window, document));

;
(function($, window, document, undefined)
{

	var defaults = {
		namespace               : '',
		widget_selector         : 'li',
		widget_margins          : [10, 10],
		widget_base_dimensions  : [400, 225],
		extra_rows              : 0,
		extra_cols              : 0,
		min_cols                : 1,
		max_cols                : null,
		min_rows                : 15,
		max_size_x              : 6,
		autogenerate_stylesheet : true,
		avoid_overlapped_widgets: true,
		serialize_params        : function($w, wgd)
		{
			return {
				col   : wgd.col,
				row   : wgd.row,
				size_x: wgd.size_x,
				size_y: wgd.size_y
			};
		},
		collision               : {},
		draggable               : {
			distance: 4
		}
	};

	/**
	 * @class Gridster
	 * @uses Draggable
	 * @uses Collision
	 * @param {HTMLElement} el The HTMLelement that contains all the panes.
	 * @param {Object} [options] An Object with all options you want to
	 *        overwrite:
	 *    @param {HTMLElement|String} [options.widget_selector] Define who will
	 *     be the draggable panes. Can be a CSS Selector String or a
	 *     collection of HTMLElements
	 *    @param {Array} [options.widget_margins] Margin between panes.
	 *     The first index for the horizontal margin (left, right) and
	 *     the second for the vertical margin (top, bottom).
	 *    @param {Array} [options.widget_base_dimensions] Base widget dimensions
	 *     in pixels. The first index for the width and the second for the
	 *     height.
	 *    @param {Number} [options.extra_cols] Add more columns in addition to
	 *     those that have been calculated.
	 *    @param {Number} [options.extra_rows] Add more rows in addition to
	 *     those that have been calculated.
	 *    @param {Number} [options.min_cols] The minimum required columns.
	 *    @param {Number} [options.max_cols] The maximum columns possible (set to null
	 *     for no maximum).
	 *    @param {Number} [options.min_rows] The minimum required rows.
	 *    @param {Number} [options.max_size_x] The maximum number of columns
	 *     that a widget can span.
	 *    @param {Boolean} [options.autogenerate_stylesheet] If true, all the
	 *     CSS required to position all panes in their respective columns
	 *     and rows will be generated automatically and injected to the
	 *     `<head>` of the document. You can set this to false, and write
	 *     your own CSS targeting rows and cols via data-attributes like so:
	 *     `[data-col="1"] { left: 10px; }`
	 *    @param {Boolean} [options.avoid_overlapped_widgets] Avoid that panes loaded
	 *     from the DOM can be overlapped. It is helpful if the positions were
	 *     bad stored in the database or if there was any conflict.
	 *    @param {Function} [options.serialize_params] Return the data you want
	 *     for each widget in the serialization. Two arguments are passed:
	 *     `$w`: the jQuery wrapped HTMLElement, and `wgd`: the grid
	 *     coords object (`col`, `row`, `size_x`, `size_y`).
	 *    @param {Object} [options.collision] An Object with all options for
	 *     Collision class you want to overwrite. See Collision docs for
	 *     more info.
	 *    @param {Object} [options.draggable] An Object with all options for
	 *     Draggable class you want to overwrite. See Draggable docs for more
	 *     info.
	 *
	 * @constructor
	 */
	function Gridster(el, options)
	{
		this.options = $.extend(true, defaults, options);
		this.$el = $(el);
		this.$wrapper = this.$el.parent();
		this.$widgets = this.$el.children(this.options.widget_selector).addClass('gs_w');
		this.panes = [];
		this.$changed = $([]);
		this.wrapper_width = this.$wrapper.width();
		this.min_widget_width = (this.options.widget_margins[0] * 2) + this.options.widget_base_dimensions[0];
		this.min_widget_height = (this.options.widget_margins[1] * 2) + this.options.widget_base_dimensions[1];

		this.$style_tags = $([]);

		this.init();
	}

	Gridster.generated_stylesheets = [];

	var fn = Gridster.prototype;

	fn.init = function()
	{
		this.generate_grid_and_stylesheet();
		this.get_widgets_from_DOM();
		this.set_dom_grid_height();
		this.$wrapper.addClass('ready');
		this.draggable();

		$(window).bind('resize.gridster', throttle($.proxy(this.recalculate_faux_grid, this), 200));
	};


	/**
	 * Disables dragging.
	 *
	 * @method disable
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.disable = function()
	{
		this.$wrapper.find('.player-revert').removeClass('player-revert');
		this.drag_api.disable();
		return this;
	};


	/**
	 * Enables dragging.
	 *
	 * @method enable
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.enable = function()
	{
		this.drag_api.enable();
		return this;
	};


	/**
	 * Add a new widget to the grid.
	 *
	 * @method add_widget
	 * @param {String|HTMLElement} html The string representing the HTML of the widget
	 *  or the HTMLElement.
	 * @param {Number} [size_x] The nº of rows the widget occupies horizontally.
	 * @param {Number} [size_y] The nº of columns the widget occupies vertically.
	 * @param {Number} [col] The column the widget should start in.
	 * @param {Number} [row] The row the widget should start in.
	 * @return {HTMLElement} Returns the jQuery wrapped HTMLElement representing.
	 *  the widget that was just created.
	 */
	fn.add_widget = function(html, size_x, size_y, col, row)
	{
		var pos;
		size_x || (size_x = 1);
		size_y || (size_y = 1);

		if(!col & !row)
		{
			pos = this.next_position(size_x, size_y);
		}
		else
		{
			pos = {
				col: col,
				row: row
			};

			this.empty_cells(col, row, size_x, size_y);
		}

		var $w = $(html).attr({
			'data-col'  : pos.col,
			'data-row'  : pos.row,
			'data-sizex': size_x,
			'data-sizey': size_y
		}).addClass('gs_w').appendTo(this.$el).hide();

		this.$widgets = this.$widgets.add($w);

		this.register_widget($w);

		this.add_faux_rows(pos.size_y);
		//this.add_faux_cols(pos.size_x);

		this.set_dom_grid_height();

		return $w.fadeIn();
	};


	/**
	 * Change the size of a widget.
	 *
	 * @method resize_widget
	 * @param {HTMLElement} $widget The jQuery wrapped HTMLElement
	 *  representing the widget.
	 * @param {Number} size_x The number of columns that will occupy the widget.
	 * @param {Number} size_y The number of rows that will occupy the widget.
	 * @param {Function} callback Function executed when the widget is removed.
	 * @return {HTMLElement} Returns $widget.
	 */
	fn.resize_widget = function($widget, size_x, size_y, callback)
	{
		var wgd = $widget.coords().grid;
		size_x || (size_x = wgd.size_x);
		size_y || (size_y = wgd.size_y);

		if(size_x > this.cols)
		{
			size_x = this.cols;
		}

		var old_cells_occupied = this.get_cells_occupied(wgd);
		var old_size_x = wgd.size_x;
		var old_size_y = wgd.size_y;
		var old_col = wgd.col;
		var new_col = old_col;
		var wider = size_x > old_size_x;
		var taller = size_y > old_size_y;

		if(old_col + size_x - 1 > this.cols)
		{
			var diff = old_col + (size_x - 1) - this.cols;
			var c = old_col - diff;
			new_col = Math.max(1, c);
		}

		var new_grid_data = {
			col   : new_col,
			row   : wgd.row,
			size_x: size_x,
			size_y: size_y
		};

		var new_cells_occupied = this.get_cells_occupied(new_grid_data);

		var empty_cols = [];
		$.each(old_cells_occupied.cols, function(i, col)
		{
			if($.inArray(col, new_cells_occupied.cols) === -1)
			{
				empty_cols.push(col);
			}
		});

		var occupied_cols = [];
		$.each(new_cells_occupied.cols, function(i, col)
		{
			if($.inArray(col, old_cells_occupied.cols) === -1)
			{
				occupied_cols.push(col);
			}
		});

		var empty_rows = [];
		$.each(old_cells_occupied.rows, function(i, row)
		{
			if($.inArray(row, new_cells_occupied.rows) === -1)
			{
				empty_rows.push(row);
			}
		});

		var occupied_rows = [];
		$.each(new_cells_occupied.rows, function(i, row)
		{
			if($.inArray(row, old_cells_occupied.rows) === -1)
			{
				occupied_rows.push(row);
			}
		});

		this.remove_from_gridmap(wgd);

		if(occupied_cols.length)
		{
			var cols_to_empty = [
				new_col, wgd.row, size_x, Math.min(old_size_y, size_y), $widget
			];
			this.empty_cells.apply(this, cols_to_empty);
		}

		if(occupied_rows.length)
		{
			var rows_to_empty = [new_col, wgd.row, size_x, size_y, $widget];
			this.empty_cells.apply(this, rows_to_empty);
		}

		wgd.col = new_col;
		wgd.size_x = size_x;
		wgd.size_y = size_y;
		this.add_to_gridmap(new_grid_data, $widget);

		//update coords instance attributes
		$widget.data('coords').update({
			width : (size_x * this.options.widget_base_dimensions[0] + ((size_x - 1) * this.options.widget_margins[0]) * 2),
			height: (size_y * this.options.widget_base_dimensions[1] + ((size_y - 1) * this.options.widget_margins[1]) * 2)
		});

		if(size_y > old_size_y)
		{
			this.add_faux_rows(size_y - old_size_y);
		}

		if(size_x > old_size_x)
		{
			this.add_faux_cols(size_x - old_size_x);
		}

		$widget.attr({
			'data-col'  : new_col,
			'data-sizex': size_x,
			'data-sizey': size_y
		});

		if(empty_cols.length)
		{
			var cols_to_remove_holes = [
				empty_cols[0], wgd.row, empty_cols.length, Math.min(old_size_y, size_y), $widget
			];

			this.remove_empty_cells.apply(this, cols_to_remove_holes);
		}

		if(empty_rows.length)
		{
			var rows_to_remove_holes = [
				new_col, wgd.row, size_x, size_y, $widget
			];
			this.remove_empty_cells.apply(this, rows_to_remove_holes);
		}

		if(callback)
		{
			callback.call(this, size_x, size_y);
		}

		return $widget;
	};

	/**
	 * Move down panes in cells represented by the arguments col, row, size_x,
	 * size_y
	 *
	 * @method empty_cells
	 * @param {Number} col The column where the group of cells begin.
	 * @param {Number} row The row where the group of cells begin.
	 * @param {Number} size_x The number of columns that the group of cells
	 * occupy.
	 * @param {Number} size_y The number of rows that the group of cells
	 * occupy.
	 * @param {HTMLElement} $exclude Exclude panes from being moved.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.empty_cells = function(col, row, size_x, size_y, $exclude)
	{
		var $nexts = this.widgets_below({
			col   : col,
			row   : row - size_y,
			size_x: size_x,
			size_y: size_y
		});

		$nexts.not($exclude).each($.proxy(function(i, w)
		{
			var wgd = $(w).coords().grid;
			if(!(wgd.row <= (row + size_y - 1)))
			{
				return;
			}
			var diff = (row + size_y) - wgd.row;
			this.move_widget_down($(w), diff);
		}, this));

		this.set_dom_grid_height();

		return this;
	};


	/**
	 * Move up panes below cells represented by the arguments col, row, size_x,
	 * size_y.
	 *
	 * @method remove_empty_cells
	 * @param {Number} col The column where the group of cells begin.
	 * @param {Number} row The row where the group of cells begin.
	 * @param {Number} size_x The number of columns that the group of cells
	 * occupy.
	 * @param {Number} size_y The number of rows that the group of cells
	 * occupy.
	 * @param {HTMLElement} exclude Exclude panes from being moved.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.remove_empty_cells = function(col, row, size_x, size_y, exclude)
	{
		var $nexts = this.widgets_below({
			col   : col,
			row   : row,
			size_x: size_x,
			size_y: size_y
		});

		$nexts.not(exclude).each($.proxy(function(i, widget)
		{
			this.move_widget_up($(widget), size_y);
		}, this));

		this.set_dom_grid_height();

		return this;
	};


	/**
	 * Get the most left column below to add a new widget.
	 *
	 * @method next_position
	 * @param {Number} size_x The nº of rows the widget occupies horizontally.
	 * @param {Number} size_y The nº of columns the widget occupies vertically.
	 * @return {Object} Returns a grid coords object representing the future
	 *  widget coords.
	 */
	fn.next_position = function(size_x, size_y)
	{
		size_x || (size_x = 1);
		size_y || (size_y = 1);
		var ga = this.gridmap;
		var cols_l = ga.length;
		var valid_pos = [];
		var rows_l;

		for(var c = 1; c < cols_l; c++)
		{
			rows_l = ga[c].length;
			for(var r = 1; r <= rows_l; r++)
			{
				var can_move_to = this.can_move_to({
					size_x: size_x,
					size_y: size_y
				}, c, r);

				if(can_move_to)
				{
					valid_pos.push({
						col   : c,
						row   : r,
						size_y: size_y,
						size_x: size_x
					});
				}
			}
		}

		if(valid_pos.length)
		{
			return this.sort_by_row_and_col_asc(valid_pos)[0];
		}
		return false;
	};


	/**
	 * Remove a widget from the grid.
	 *
	 * @method remove_widget
	 * @param {HTMLElement} el The jQuery wrapped HTMLElement you want to remove.
	 * @param {Boolean|Function} silent If true, panes below the removed one
	 * will not move up. If a Function is passed it will be used as callback.
	 * @param {Function} callback Function executed when the widget is removed.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.remove_widget = function(el, silent, callback)
	{
		var $el = el instanceof jQuery ? el : $(el);
		var wgd = $el.coords().grid;

		// if silent is a function assume it's a callback
		if($.isFunction(silent))
		{
			callback = silent;
			silent = false;
		}

		this.cells_occupied_by_placeholder = {};
		this.$widgets = this.$widgets.not($el);

		var $nexts = this.widgets_below($el);

		this.remove_from_gridmap(wgd);

		$el.fadeOut($.proxy(function()
		{
			$el.remove();

			if(!silent)
			{
				$nexts.each($.proxy(function(i, widget)
				{
					this.move_widget_up($(widget), wgd.size_y);
				}, this));
			}

			this.set_dom_grid_height();

			if(callback)
			{
				callback.call(this, el);
			}
		}, this));
	};


	/**
	 * Remove all panes from the grid.
	 *
	 * @method remove_all_widgets
	 * @param {Function} callback Function executed for each widget removed.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.remove_all_widgets = function(callback)
	{
		this.$widgets.each($.proxy(function(i, el)
		{
			this.remove_widget(el, true, callback);
		}, this));

		return this;
	};


	/**
	 * Returns a serialized array of the panes in the grid.
	 *
	 * @method serialize
	 * @param {HTMLElement} [$widgets] The collection of jQuery wrapped
	 *  HTMLElements you want to serialize. If no argument is passed all panes
	 *  will be serialized.
	 * @return {Array} Returns an Array of Objects with the data specified in
	 *  the serialize_params option.
	 */
	fn.serialize = function($widgets)
	{
		$widgets || ($widgets = this.$widgets);
		var result = [];
		$widgets.each($.proxy(function(i, widget)
		{
			result.push(this.options.serialize_params($(widget), $(widget).coords().grid));
		}, this));

		return result;
	};


	/**
	 * Returns a serialized array of the panes that have changed their
	 *  position.
	 *
	 * @method serialize_changed
	 * @return {Array} Returns an Array of Objects with the data specified in
	 *  the serialize_params option.
	 */
	fn.serialize_changed = function()
	{
		return this.serialize(this.$changed);
	};


	/**
	 * Creates the grid coords object representing the widget a add it to the
	 * mapped array of positions.
	 *
	 * @method register_widget
	 * @return {Array} Returns the instance of the Gridster class.
	 */
	fn.register_widget = function($el)
	{

		var wgd = {
			'col'   : parseInt($el.attr('data-col'), 10),
			'row'   : parseInt($el.attr('data-row'), 10),
			'size_x': parseInt($el.attr('data-sizex'), 10),
			'size_y': parseInt($el.attr('data-sizey'), 10),
			'el'    : $el
		};

		if(this.options.avoid_overlapped_widgets && !this.can_move_to({size_x: wgd.size_x, size_y: wgd.size_y}, wgd.col, wgd.row))
		{
			wgd = this.next_position(wgd.size_x, wgd.size_y);
			wgd.el = $el;
			$el.attr({
				'data-col'  : wgd.col,
				'data-row'  : wgd.row,
				'data-sizex': wgd.size_x,
				'data-sizey': wgd.size_y
			});
		}

		// attach Coord object to player data-coord attribute
		$el.data('coords', $el.coords());

		// Extend Coord object with grid position info
		$el.data('coords').grid = wgd;

		this.add_to_gridmap(wgd, $el);

		return this;
	};


	/**
	 * Update in the mapped array of positions the value of cells represented by
	 * the grid coords object passed in the `grid_data` param.
	 *
	 * @param {Object} grid_data The grid coords object representing the cells
	 *  to update in the mapped array.
	 * @param {HTMLElement|Boolean} value Pass `false` or the jQuery wrapped
	 *  HTMLElement, depends if you want to delete an existing position or add
	 *  a new one.
	 * @method update_widget_position
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.update_widget_position = function(grid_data, value)
	{
		this.for_each_cell_occupied(grid_data, function(col, row)
		{
			if(!this.gridmap[col])
			{
				return this;
			}
			this.gridmap[col][row] = value;
		});
		return this;
	};


	/**
	 * Remove a widget from the mapped array of positions.
	 *
	 * @method remove_from_gridmap
	 * @param {Object} grid_data The grid coords object representing the cells
	 *  to update in the mapped array.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.remove_from_gridmap = function(grid_data)
	{
		return this.update_widget_position(grid_data, false);
	};


	/**
	 * Add a widget to the mapped array of positions.
	 *
	 * @method add_to_gridmap
	 * @param {Object} grid_data The grid coords object representing the cells
	 *  to update in the mapped array.
	 * @param {HTMLElement|Boolean} value The value to set in the specified
	 *  position .
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.add_to_gridmap = function(grid_data, value)
	{
		this.update_widget_position(grid_data, value || grid_data.el);

		if(grid_data.el)
		{
			var $widgets = this.widgets_below(grid_data.el);
			$widgets.each($.proxy(function(i, widget)
			{
				this.move_widget_up($(widget));
			}, this));
		}
	};


	/**
	 * Make panes draggable.
	 *
	 * @uses Draggable
	 * @method draggable
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.draggable = function()
	{
		var self = this;
		var draggable_options = $.extend(true, {}, this.options.draggable, {
			offset_left    : this.options.widget_margins[0],
			container_width: this.container_width,
			start          : function(event, ui)
			{
				self.$widgets.filter('.player-revert').removeClass('player-revert');

				self.$player = $(this);
				self.$helper = self.options.draggable.helper === 'clone' ? $(ui.helper) : self.$player;
				self.helper = !self.$helper.is(self.$player);

				self.on_start_drag.call(self, event, ui);
				self.$el.trigger('gridster:dragstart');
			},
			stop           : function(event, ui)
			{
				self.on_stop_drag.call(self, event, ui);
				self.$el.trigger('gridster:dragstop');
			},
			drag           : throttle(function(event, ui)
			{
				self.on_drag.call(self, event, ui);
				self.$el.trigger('gridster:drag');
			}, 60)
		});

		this.drag_api = this.$el.drag(draggable_options).data('drag');
		return this;
	};


	/**
	 * This function is executed when the player begins to be dragged.
	 *
	 * @method on_start_drag
	 * @param {Event} event The original browser event
	 * @param {Object} ui A prepared ui object.
	 */
	fn.on_start_drag = function(event, ui)
	{

		this.$helper.add(this.$player).add(this.$wrapper).addClass('dragging');

		this.$player.addClass('player');
		this.player_grid_data = this.$player.coords().grid;
		this.placeholder_grid_data = $.extend({}, this.player_grid_data);

		//set new grid height along the dragging period
		this.$el.css('height', this.$el.height() + (this.player_grid_data.size_y * this.min_widget_height));

		var colliders = this.faux_grid;
		var coords = this.$player.data('coords').coords;

		this.cells_occupied_by_player = this.get_cells_occupied(this.player_grid_data);
		this.cells_occupied_by_placeholder = this.get_cells_occupied(this.placeholder_grid_data);

		this.last_cols = [];
		this.last_rows = [];


		// see jquery.collision.js
		this.collision_api = this.$helper.collision(colliders, this.options.collision);

		this.$preview_holder = $('<li />', {
			'class'   : 'preview-holder',
			'data-row': this.$player.attr('data-row'),
			'data-col': this.$player.attr('data-col'),
			css       : {
				width : coords.width,
				height: coords.height
			}
		}).appendTo(this.$el);

		if(this.options.draggable.start)
		{
			this.options.draggable.start.call(this, event, ui);
		}
	};


	/**
	 * This function is executed when the player is being dragged.
	 *
	 * @method on_drag
	 * @param {Event} event The original browser event
	 * @param {Object} ui A prepared ui object.
	 */
	fn.on_drag = function(event, ui)
	{
		//break if dragstop has been fired
		if(this.$player === null)
		{
			return false;
		}

		var abs_offset = {
			left: ui.position.left + this.baseX,
			top : ui.position.top + this.baseY
		};

		this.colliders_data = this.collision_api.get_closest_colliders(abs_offset);

		this.on_overlapped_column_change(this.on_start_overlapping_column, this.on_stop_overlapping_column);

		this.on_overlapped_row_change(this.on_start_overlapping_row, this.on_stop_overlapping_row);

		if(this.helper && this.$player)
		{
			this.$player.css({
				'left': ui.position.left,
				'top' : ui.position.top
			});
		}

		if(this.options.draggable.drag)
		{
			this.options.draggable.drag.call(this, event, ui);
		}
	};

	/**
	 * This function is executed when the player stops being dragged.
	 *
	 * @method on_stop_drag
	 * @param {Event} event The original browser event
	 * @param {Object} ui A prepared ui object.
	 */
	fn.on_stop_drag = function(event, ui)
	{
		this.$helper.add(this.$player).add(this.$wrapper).removeClass('dragging');

		ui.position.left = ui.position.left + this.baseX;
		ui.position.top = ui.position.top + this.baseY;
		this.colliders_data = this.collision_api.get_closest_colliders(ui.position);

		this.on_overlapped_column_change(this.on_start_overlapping_column, this.on_stop_overlapping_column);

		this.on_overlapped_row_change(this.on_start_overlapping_row, this.on_stop_overlapping_row);

		this.$player.addClass('player-revert').removeClass('player').attr({
				'data-col': this.placeholder_grid_data.col,
				'data-row': this.placeholder_grid_data.row
			}).css({
				'left': '',
				'top' : ''
			});

		this.$changed = this.$changed.add(this.$player);

		this.cells_occupied_by_player = this.get_cells_occupied(this.placeholder_grid_data);
		this.set_cells_player_occupies(this.placeholder_grid_data.col, this.placeholder_grid_data.row);

		this.$player.coords().grid.row = this.placeholder_grid_data.row;
		this.$player.coords().grid.col = this.placeholder_grid_data.col;

		if(this.options.draggable.stop)
		{
			this.options.draggable.stop.call(this, event, ui);
		}

		this.$preview_holder.remove();

		this.$player = null;
		this.$helper = null;
		this.placeholder_grid_data = {};
		this.player_grid_data = {};
		this.cells_occupied_by_placeholder = {};
		this.cells_occupied_by_player = {};

		this.set_dom_grid_height();
	};


	/**
	 * Executes the callbacks passed as arguments when a column begins to be
	 * overlapped or stops being overlapped.
	 *
	 * @param {Function} start_callback Function executed when a new column
	 *  begins to be overlapped. The column is passed as first argument.
	 * @param {Function} stop_callback Function executed when a column stops
	 *  being overlapped. The column is passed as first argument.
	 * @method on_overlapped_column_change
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.on_overlapped_column_change = function(start_callback, stop_callback)
	{
		if(!this.colliders_data.length)
		{
			return this;
		}
		var cols = this.get_targeted_columns(this.colliders_data[0].el.data.col);

		var last_n_cols = this.last_cols.length;
		var n_cols = cols.length;
		var i;

		for(i = 0; i < n_cols; i++)
		{
			if($.inArray(cols[i], this.last_cols) === -1)
			{
				(start_callback || $.noop).call(this, cols[i]);
			}
		}

		for(i = 0; i < last_n_cols; i++)
		{
			if($.inArray(this.last_cols[i], cols) === -1)
			{
				(stop_callback || $.noop).call(this, this.last_cols[i]);
			}
		}

		this.last_cols = cols;

		return this;
	};


	/**
	 * Executes the callbacks passed as arguments when a row starts to be
	 * overlapped or stops being overlapped.
	 *
	 * @param {Function} start_callback Function executed when a new row begins
	 *  to be overlapped. The row is passed as first argument.
	 * @param {Function} end_callback Function executed when a row stops being
	 *  overlapped. The row is passed as first argument.
	 * @method on_overlapped_row_change
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.on_overlapped_row_change = function(start_callback, end_callback)
	{
		if(!this.colliders_data.length)
		{
			return this;
		}
		var rows = this.get_targeted_rows(this.colliders_data[0].el.data.row);
		var last_n_rows = this.last_rows.length;
		var n_rows = rows.length;
		var i;

		for(i = 0; i < n_rows; i++)
		{
			if($.inArray(rows[i], this.last_rows) === -1)
			{
				(start_callback || $.noop).call(this, rows[i]);
			}
		}

		for(i = 0; i < last_n_rows; i++)
		{
			if($.inArray(this.last_rows[i], rows) === -1)
			{
				(end_callback || $.noop).call(this, this.last_rows[i]);
			}
		}

		this.last_rows = rows;
	};


	/**
	 * Sets the current position of the player
	 *
	 * @param {Number} col
	 * @param {Number} row
	 * @param {Boolean} no_player
	 * @method set_player
	 * @return {object}
	 */
	fn.set_player = function(col, row, no_player)
	{
		var self = this;
		if(!no_player)
		{
			this.empty_cells_player_occupies();
		}
		var cell = !no_player ? self.colliders_data[0].el.data : {col: col};
		var to_col = cell.col;
		var to_row = row || cell.row;

		this.player_grid_data = {
			col   : to_col,
			row   : to_row,
			size_y: this.player_grid_data.size_y,
			size_x: this.player_grid_data.size_x
		};

		this.cells_occupied_by_player = this.get_cells_occupied(this.player_grid_data);

		var $overlapped_widgets = this.get_widgets_overlapped(this.player_grid_data);

		var constraints = this.widgets_constraints($overlapped_widgets);

		this.manage_movements(constraints.can_go_up, to_col, to_row);
		this.manage_movements(constraints.can_not_go_up, to_col, to_row);

		/* if there is not panes overlapping in the new player position,
		 * update the new placeholder position. */
		if(!$overlapped_widgets.length)
		{
			var pp = this.can_go_player_up(this.player_grid_data);
			if(pp !== false)
			{
				to_row = pp;
			}
			this.set_placeholder(to_col, to_row);
		}

		return {
			col: to_col,
			row: to_row
		};
	};


	/**
	 * See which of the panes in the $panes param collection can go to
	 * a upper row and which not.
	 *
	 * @method widgets_contraints
	 * @param {jQuery} $widgets A jQuery wrapped collection of
	 * HTMLElements.
	 * @return {object} Returns a literal Object with two keys: `can_go_up` &
	 * `can_not_go_up`. Each contains a set of HTMLElements.
	 */
	fn.widgets_constraints = function($widgets)
	{
		var $widgets_can_go_up = $([]);
		var $widgets_can_not_go_up;
		var wgd_can_go_up = [];
		var wgd_can_not_go_up = [];

		$widgets.each($.proxy(function(i, w)
		{
			var $w = $(w);
			var wgd = $w.coords().grid;
			if(this.can_go_widget_up(wgd))
			{
				$widgets_can_go_up = $widgets_can_go_up.add($w);
				wgd_can_go_up.push(wgd);
			}
			else
			{
				wgd_can_not_go_up.push(wgd);
			}
		}, this));

		$widgets_can_not_go_up = $widgets.not($widgets_can_go_up);

		return {
			can_go_up    : this.sort_by_row_asc(wgd_can_go_up),
			can_not_go_up: this.sort_by_row_desc(wgd_can_not_go_up)
		};
	};


	/**
	 * Sorts an Array of grid coords objects (representing the grid coords of
	 * each widget) in ascending way.
	 *
	 * @method sort_by_row_asc
	 * @param {Array} widgets Array of grid coords objects
	 * @return {Array} Returns the array sorted.
	 */
	fn.sort_by_row_asc = function(widgets)
	{
		widgets = widgets.sort(function(a, b)
		{
			if(!a.row)
			{
				a = $(a).coords().grid;
				b = $(b).coords().grid;
			}

			if(a.row > b.row)
			{
				return 1;
			}
			return -1;
		});

		return widgets;
	};


	/**
	 * Sorts an Array of grid coords objects (representing the grid coords of
	 * each widget) placing first the empty cells upper left.
	 *
	 * @method sort_by_row_and_col_asc
	 * @param {Array} widgets Array of grid coords objects
	 * @return {Array} Returns the array sorted.
	 */
	fn.sort_by_row_and_col_asc = function(widgets)
	{
		widgets = widgets.sort(function(a, b)
		{
			if(a.row > b.row || a.row === b.row && a.col > b.col)
			{
				return 1;
			}
			return -1;
		});

		return widgets;
	};


	/**
	 * Sorts an Array of grid coords objects by column (representing the grid
	 * coords of each widget) in ascending way.
	 *
	 * @method sort_by_col_asc
	 * @param {Array} widgets Array of grid coords objects
	 * @return {Array} Returns the array sorted.
	 */
	fn.sort_by_col_asc = function(widgets)
	{
		widgets = widgets.sort(function(a, b)
		{
			if(a.col > b.col)
			{
				return 1;
			}
			return -1;
		});

		return widgets;
	};


	/**
	 * Sorts an Array of grid coords objects (representing the grid coords of
	 * each widget) in descending way.
	 *
	 * @method sort_by_row_desc
	 * @param {Array} widgets Array of grid coords objects
	 * @return {Array} Returns the array sorted.
	 */
	fn.sort_by_row_desc = function(widgets)
	{
		widgets = widgets.sort(function(a, b)
		{
			if(a.row + a.size_y < b.row + b.size_y)
			{
				return 1;
			}
			return -1;
		});
		return widgets;
	};


	/**
	 * Sorts an Array of grid coords objects (representing the grid coords of
	 * each widget) in descending way.
	 *
	 * @method manage_movements
	 * @param {jQuery} $widgets A jQuery collection of HTMLElements
	 *  representing the panes you want to move.
	 * @param {Number} to_col The column to which we want to move the panes.
	 * @param {Number} to_row The row to which we want to move the panes.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.manage_movements = function($widgets, to_col, to_row)
	{
		$.each($widgets, $.proxy(function(i, w)
		{
			var wgd = w;
			var $w = wgd.el;

			var can_go_widget_up = this.can_go_widget_up(wgd);

			if(can_go_widget_up)
			{
				//target CAN go up
				//so move widget up
				this.move_widget_to($w, can_go_widget_up);
				this.set_placeholder(to_col, can_go_widget_up + wgd.size_y);

			}
			else
			{
				//target can't go up
				var can_go_player_up = this.can_go_player_up(this.player_grid_data);

				if(!can_go_player_up)
				{
					// target can't go up
					// player cant't go up
					// so we need to move widget down to a position that dont
					// overlaps player
					var y = (to_row + this.player_grid_data.size_y) - wgd.row;

					this.move_widget_down($w, y);
					this.set_placeholder(to_col, to_row);
				}
			}
		}, this));

		return this;
	};

	/**
	 * Determines if there is a widget in the row and col given. Or if the
	 * HTMLElement passed as first argument is the player.
	 *
	 * @method is_player
	 * @param {Number|HTMLElement} col_or_el A jQuery wrapped collection of
	 * HTMLElements.
	 * @param {Number} [row] The column to which we want to move the panes.
	 * @return {Boolean} Returns true or false.
	 */
	fn.is_player = function(col_or_el, row)
	{
		if(row && !this.gridmap[col_or_el])
		{
			return false;
		}
		var $w = row ? this.gridmap[col_or_el][row] : col_or_el;
		return $w && ($w.is(this.$player) || $w.is(this.$helper));
	};


	/**
	 * Determines if the widget that is being dragged is currently over the row
	 * and col given.
	 *
	 * @method is_player_in
	 * @param {Number} col The column to check.
	 * @param {Number} row The row to check.
	 * @return {Boolean} Returns true or false.
	 */
	fn.is_player_in = function(col, row)
	{
		var c = this.cells_occupied_by_player || {};
		return $.inArray(col, c.cols) >= 0 && $.inArray(row, c.rows) >= 0;
	};


	/**
	 * Determines if the placeholder is currently over the row and col given.
	 *
	 * @method is_placeholder_in
	 * @param {Number} col The column to check.
	 * @param {Number} row The row to check.
	 * @return {Boolean} Returns true or false.
	 */
	fn.is_placeholder_in = function(col, row)
	{
		var c = this.cells_occupied_by_placeholder || {};
		return this.is_placeholder_in_col(col) && $.inArray(row, c.rows) >= 0;
	};


	/**
	 * Determines if the placeholder is currently over the column given.
	 *
	 * @method is_placeholder_in_col
	 * @param {Number} col The column to check.
	 * @return {Boolean} Returns true or false.
	 */
	fn.is_placeholder_in_col = function(col)
	{
		var c = this.cells_occupied_by_placeholder || [];
		return $.inArray(col, c.cols) >= 0;
	};


	/**
	 * Determines if the cell represented by col and row params is empty.
	 *
	 * @method is_empty
	 * @param {Number} col The column to check.
	 * @param {Number} row The row to check.
	 * @return {Boolean} Returns true or false.
	 */
	fn.is_empty = function(col, row)
	{
		if(typeof this.gridmap[col] !== 'undefined')
		{
			if(typeof this.gridmap[col][row] !== 'undefined' && this.gridmap[col][row] === false)
			{
				return true;
			}
			return false;
		}
		return true;
	};


	/**
	 * Determines if the cell represented by col and row params is occupied.
	 *
	 * @method is_occupied
	 * @param {Number} col The column to check.
	 * @param {Number} row The row to check.
	 * @return {Boolean} Returns true or false.
	 */
	fn.is_occupied = function(col, row)
	{
		if(!this.gridmap[col])
		{
			return false;
		}

		if(this.gridmap[col][row])
		{
			return true;
		}
		return false;
	};


	/**
	 * Determines if there is a widget in the cell represented by col/row params.
	 *
	 * @method is_widget
	 * @param {Number} col The column to check.
	 * @param {Number} row The row to check.
	 * @return {Boolean|HTMLElement} Returns false if there is no widget,
	 * else returns the jQuery HTMLElement
	 */
	fn.is_widget = function(col, row)
	{
		var cell = this.gridmap[col];
		if(!cell)
		{
			return false;
		}

		cell = cell[row];

		if(cell)
		{
			return cell;
		}

		return false;
	};


	/**
	 * Determines if there is a widget in the cell represented by col/row
	 * params and if this is under the widget that is being dragged.
	 *
	 * @method is_widget_under_player
	 * @param {Number} col The column to check.
	 * @param {Number} row The row to check.
	 * @return {Boolean} Returns true or false.
	 */
	fn.is_widget_under_player = function(col, row)
	{
		if(this.is_widget(col, row))
		{
			return this.is_player_in(col, row);
		}
		return false;
	};


	/**
	 * Get panes overlapping with the player or with the object passed
	 * representing the grid cells.
	 *
	 * @method get_widgets_under_player
	 * @return {HTMLElement} Returns a jQuery collection of HTMLElements
	 */
	fn.get_widgets_under_player = function(cells)
	{
		cells || (cells = this.cells_occupied_by_player || {cols: [], rows: []});
		var $widgets = $([]);

		$.each(cells.cols, $.proxy(function(i, col)
		{
			$.each(cells.rows, $.proxy(function(i, row)
			{
				if(this.is_widget(col, row))
				{
					$widgets = $widgets.add(this.gridmap[col][row]);
				}
			}, this));
		}, this));

		return $widgets;
	};


	/**
	 * Put placeholder at the row and column specified.
	 *
	 * @method set_placeholder
	 * @param {Number} col The column to which we want to move the
	 *  placeholder.
	 * @param {Number} row The row to which we want to move the
	 *  placeholder.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.set_placeholder = function(col, row)
	{
		var phgd = $.extend({}, this.placeholder_grid_data);
		var $nexts = this.widgets_below({
			col   : phgd.col,
			row   : phgd.row,
			size_y: phgd.size_y,
			size_x: phgd.size_x
		});

		// Prevents panes go out of the grid
		var right_col = (col + phgd.size_x - 1);
		if(right_col > this.cols)
		{
			col = col - (right_col - col);
		}

		var moved_down = this.placeholder_grid_data.row < row;
		var changed_column = this.placeholder_grid_data.col !== col;

		this.placeholder_grid_data.col = col;
		this.placeholder_grid_data.row = row;

		this.cells_occupied_by_placeholder = this.get_cells_occupied(this.placeholder_grid_data);

		this.$preview_holder.attr({
			'data-row': row,
			'data-col': col
		});

		if(moved_down || changed_column)
		{
			$nexts.each($.proxy(function(i, widget)
			{
				this.move_widget_up($(widget), this.placeholder_grid_data.col - col + phgd.size_y);
			}, this));
		}


		var $widgets_under_ph = this.get_widgets_under_player(this.cells_occupied_by_placeholder);
		if($widgets_under_ph.length)
		{
			$widgets_under_ph.each($.proxy(function(i, widget)
			{
				var $w = $(widget);
				this.move_widget_down($w, row + phgd.size_y - $w.data('coords').grid.row);
			}, this));
		}

	};


	/**
	 * Determines whether the player can move to a position above.
	 *
	 * @method can_go_player_up
	 * @param {Object} widget_grid_data The actual grid coords object of the
	 *  player.
	 * @return {Number|Boolean} If the player can be moved to an upper row
	 *  returns the row number, else returns false.
	 */
	fn.can_go_player_up = function(widget_grid_data)
	{
		var p_bottom_row = widget_grid_data.row + widget_grid_data.size_y - 1;
		var result = true;
		var upper_rows = [];
		var min_row = 10000;
		var $widgets_under_player = this.get_widgets_under_player();

		/* generate an array with columns as index and array with upper rows
		 * empty as value */
		this.for_each_column_occupied(widget_grid_data, function(tcol)
		{
			var grid_col = this.gridmap[tcol];
			var r = p_bottom_row + 1;
			upper_rows[tcol] = [];

			while(--r > 0)
			{
				if(this.is_empty(tcol, r) || this.is_player(tcol, r) || this.is_widget(tcol, r) && grid_col[r].is($widgets_under_player))
				{
					upper_rows[tcol].push(r);
					min_row = r < min_row ? r : min_row;
				}
				else
				{
					break;
				}
			}

			if(upper_rows[tcol].length === 0)
			{
				result = false;
				return true; //break
			}

			upper_rows[tcol].sort(function(a, b)
			{
				return a - b;
			});
		});

		if(!result)
		{
			return false;
		}

		return this.get_valid_rows(widget_grid_data, upper_rows, min_row);
	};


	/**
	 * Determines whether a widget can move to a position above.
	 *
	 * @method can_go_widget_up
	 * @param {Object} widget_grid_data The actual grid coords object of the
	 *  widget we want to check.
	 * @return {Number|Boolean} If the widget can be moved to an upper row
	 *  returns the row number, else returns false.
	 */
	fn.can_go_widget_up = function(widget_grid_data)
	{
		var p_bottom_row = widget_grid_data.row + widget_grid_data.size_y - 1;
		var result = true;
		var upper_rows = [];
		var min_row = 10000;

		/* generate an array with columns as index and array with topmost rows
		 * empty as value */
		this.for_each_column_occupied(widget_grid_data, function(tcol)
		{
			var grid_col = this.gridmap[tcol];
			upper_rows[tcol] = [];

			var r = p_bottom_row + 1;
			// iterate over each row
			while(--r > 0)
			{
				if(this.is_widget(tcol, r) && !this.is_player_in(tcol, r))
				{
					if(!grid_col[r].is(widget_grid_data.el))
					{
						break;
					}
				}

				if(!this.is_player(tcol, r) && !this.is_placeholder_in(tcol, r) && !this.is_player_in(tcol, r))
				{
					upper_rows[tcol].push(r);
				}

				if(r < min_row)
				{
					min_row = r;
				}
			}

			if(upper_rows[tcol].length === 0)
			{
				result = false;
				return true; //break
			}

			upper_rows[tcol].sort(function(a, b)
			{
				return a - b;
			});
		});

		if(!result)
		{
			return false;
		}

		return this.get_valid_rows(widget_grid_data, upper_rows, min_row);
	};


	/**
	 * Search a valid row for the widget represented by `widget_grid_data' in
	 * the `upper_rows` array. Iteration starts from row specified in `min_row`.
	 *
	 * @method get_valid_rows
	 * @param {Object} widget_grid_data The actual grid coords object of the
	 *  player.
	 * @param {Array} upper_rows An array with columns as index and arrays
	 *  of valid rows as values.
	 * @param {Number} min_row The upper row from which the iteration will start.
	 * @return {Number|Boolean} Returns the upper row valid from the `upper_rows`
	 *  for the widget in question.
	 */
	fn.get_valid_rows = function(widget_grid_data, upper_rows, min_row)
	{
		var p_top_row = widget_grid_data.row;
		var p_bottom_row = widget_grid_data.row + widget_grid_data.size_y - 1;
		var size_y = widget_grid_data.size_y;
		var r = min_row - 1;
		var valid_rows = [];

		while(++r <= p_bottom_row)
		{
			var common = true;
			$.each(upper_rows, function(col, rows)
			{
				if($.isArray(rows) && $.inArray(r, rows) === -1)
				{
					common = false;
				}
			});

			if(common === true)
			{
				valid_rows.push(r);
				if(valid_rows.length === size_y)
				{
					break;
				}
			}
		}

		var new_row = false;
		if(size_y === 1)
		{
			if(valid_rows[0] !== p_top_row)
			{
				new_row = valid_rows[0] || false;
			}
		}
		else
		{
			if(valid_rows[0] !== p_top_row)
			{
				new_row = this.get_consecutive_numbers_index(valid_rows, size_y);
			}
		}

		return new_row;
	};


	fn.get_consecutive_numbers_index = function(arr, size_y)
	{
		var max = arr.length;
		var result = [];
		var first = true;
		var prev = -1; // or null?

		for(var i = 0; i < max; i++)
		{
			if(first || arr[i] === prev + 1)
			{
				result.push(i);
				if(result.length === size_y)
				{
					break;
				}
				first = false;
			}
			else
			{
				result = [];
				first = true;
			}

			prev = arr[i];
		}

		return result.length >= size_y ? arr[result[0]] : false;
	};


	/**
	 * Get panes overlapping with the player.
	 *
	 * @method get_widgets_overlapped
	 * @return {jQuery} Returns a jQuery collection of HTMLElements.
	 */
	fn.get_widgets_overlapped = function()
	{
		var $w;
		var $widgets = $([]);
		var used = [];
		var rows_from_bottom = this.cells_occupied_by_player.rows.slice(0);
		rows_from_bottom.reverse();

		$.each(this.cells_occupied_by_player.cols, $.proxy(function(i, col)
		{
			$.each(rows_from_bottom, $.proxy(function(i, row)
			{
				// if there is a widget in the player position
				if(!this.gridmap[col])
				{
					return true;
				} //next iteration
				var $w = this.gridmap[col][row];
				if(this.is_occupied(col, row) && !this.is_player($w) && $.inArray($w, used) === -1)
				{
					$widgets = $widgets.add($w);
					used.push($w);
				}

			}, this));
		}, this));

		return $widgets;
	};


	/**
	 * This callback is executed when the player begins to collide with a column.
	 *
	 * @method on_start_overlapping_column
	 * @param {Number} col The collided column.
	 * @return {jQuery} Returns a jQuery collection of HTMLElements.
	 */
	fn.on_start_overlapping_column = function(col)
	{
		this.set_player(col, false);
	};


	/**
	 * A callback executed when the player begins to collide with a row.
	 *
	 * @method on_start_overlapping_row
	 * @param {Number} row The collided row.
	 * @return {jQuery} Returns a jQuery collection of HTMLElements.
	 */
	fn.on_start_overlapping_row = function(row)
	{
		this.set_player(false, row);
	};


	/**
	 * A callback executed when the the player ends to collide with a column.
	 *
	 * @method on_stop_overlapping_column
	 * @param {Number} col The collided row.
	 * @return {jQuery} Returns a jQuery collection of HTMLElements.
	 */
	fn.on_stop_overlapping_column = function(col)
	{
		this.set_player(col, false);

		var self = this;
		this.for_each_widget_below(col, this.cells_occupied_by_player.rows[0], function(tcol, trow)
			{
				self.move_widget_up(this, self.player_grid_data.size_y);
			});
	};


	/**
	 * This callback is executed when the player ends to collide with a row.
	 *
	 * @method on_stop_overlapping_row
	 * @param {Number} row The collided row.
	 * @return {jQuery} Returns a jQuery collection of HTMLElements.
	 */
	fn.on_stop_overlapping_row = function(row)
	{
		this.set_player(false, row);

		var self = this;
		var cols = this.cells_occupied_by_player.cols;
		for(var c = 0, cl = cols.length; c < cl; c++)
		{
			this.for_each_widget_below(cols[c], row, function(tcol, trow)
			{
				self.move_widget_up(this, self.player_grid_data.size_y);
			});
		}
	};


	/**
	 * Move a widget to a specific row. The cell or cells must be empty.
	 * If the widget has panes below, all of these panes will be moved also
	 * if they can.
	 *
	 * @method move_widget_to
	 * @param {HTMLElement} $widget The jQuery wrapped HTMLElement of the
	 * widget is going to be moved.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.move_widget_to = function($widget, row)
	{
		var self = this;
		var widget_grid_data = $widget.coords().grid;
		var diff = row - widget_grid_data.row;
		var $next_widgets = this.widgets_below($widget);

		var can_move_to_new_cell = this.can_move_to(widget_grid_data, widget_grid_data.col, row, $widget);

		if(can_move_to_new_cell === false)
		{
			return false;
		}

		this.remove_from_gridmap(widget_grid_data);
		widget_grid_data.row = row;
		this.add_to_gridmap(widget_grid_data);
		$widget.attr('data-row', row);
		this.$changed = this.$changed.add($widget);


		$next_widgets.each(function(i, widget)
		{
			var $w = $(widget);
			var wgd = $w.coords().grid;
			var can_go_up = self.can_go_widget_up(wgd);
			if(can_go_up && can_go_up !== wgd.row)
			{
				self.move_widget_to($w, can_go_up);
			}
		});

		return this;
	};


	/**
	 * Move up the specified widget and all below it.
	 *
	 * @method move_widget_up
	 * @param {HTMLElement} $widget The widget you want to move.
	 * @param {Number} [y_units] The number of cells that the widget has to move.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.move_widget_up = function($widget, y_units)
	{
		var el_grid_data = $widget.coords().grid;
		var actual_row = el_grid_data.row;
		var moved = [];
		var can_go_up = true;
		y_units || (y_units = 1);

		if(!this.can_go_up($widget))
		{
			return false;
		} //break;

		this.for_each_column_occupied(el_grid_data, function(col)
		{
			// can_go_up
			if($.inArray($widget, moved) === -1)
			{
				var widget_grid_data = $widget.coords().grid;
				var next_row = actual_row - y_units;
				next_row = this.can_go_up_to_row(widget_grid_data, col, next_row);

				if(!next_row)
				{
					return true;
				}

				var $next_widgets = this.widgets_below($widget);

				this.remove_from_gridmap(widget_grid_data);
				widget_grid_data.row = next_row;
				this.add_to_gridmap(widget_grid_data);
				$widget.attr('data-row', widget_grid_data.row);
				this.$changed = this.$changed.add($widget);

				moved.push($widget);

				$next_widgets.each($.proxy(function(i, widget)
				{
					this.move_widget_up($(widget), y_units);
				}, this));
			}
		});

	};


	/**
	 * Move down the specified widget and all below it.
	 *
	 * @method move_widget_down
	 * @param {jQuery} $widget The jQuery object representing the widget
	 *  you want to move.
	 * @param {Number} y_units The number of cells that the widget has to move.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.move_widget_down = function($widget, y_units)
	{
		var el_grid_data = $widget.coords().grid;
		var actual_row = el_grid_data.row;
		var moved = [];
		var y_diff = y_units;

		if(!$widget)
		{
			return false;
		}

		if($.inArray($widget, moved) === -1)
		{

			var widget_grid_data = $widget.coords().grid;
			var next_row = actual_row + y_units;
			var $next_widgets = this.widgets_below($widget);

			this.remove_from_gridmap(widget_grid_data);

			$next_widgets.each($.proxy(function(i, widget)
			{
				var $w = $(widget);
				var wd = $w.coords().grid;
				var tmp_y = this.displacement_diff(wd, widget_grid_data, y_diff);

				if(tmp_y > 0)
				{
					this.move_widget_down($w, tmp_y);
				}
			}, this));

			widget_grid_data.row = next_row;
			this.update_widget_position(widget_grid_data, $widget);
			$widget.attr('data-row', widget_grid_data.row);
			this.$changed = this.$changed.add($widget);

			moved.push($widget);
		}
	};


	/**
	 * Check if the widget can move to the specified row, else returns the
	 * upper row possible.
	 *
	 * @method can_go_up_to_row
	 * @param {Number} widget_grid_data The current grid coords object of the
	 *  widget.
	 * @param {Number} col The target column.
	 * @param {Number} row The target row.
	 * @return {Boolean|Number} Returns the row number if the widget can move
	 *  to the target position, else returns false.
	 */
	fn.can_go_up_to_row = function(widget_grid_data, col, row)
	{
		var ga = this.gridmap;
		var result = true;
		var urc = []; // upper_rows_in_columns
		var actual_row = widget_grid_data.row;
		var r;

		/* generate an array with columns as index and array with
		 * upper rows empty in the column */
		this.for_each_column_occupied(widget_grid_data, function(tcol)
		{
			var grid_col = ga[tcol];
			urc[tcol] = [];

			r = actual_row;
			while(r--)
			{
				if(this.is_empty(tcol, r) && !this.is_placeholder_in(tcol, r))
				{
					urc[tcol].push(r);
				}
				else
				{
					break;
				}
			}

			if(!urc[tcol].length)
			{
				result = false;
				return true;
			}

		});

		if(!result)
		{
			return false;
		}

		/* get common rows starting from upper position in all the columns
		 * that widget occupies */
		r = row;
		for(r = 1; r < actual_row; r++)
		{
			var common = true;

			for(var uc = 0, ucl = urc.length; uc < ucl; uc++)
			{
				if(urc[uc] && $.inArray(r, urc[uc]) === -1)
				{
					common = false;
				}
			}

			if(common === true)
			{
				result = r;
				break;
			}
		}

		return result;
	};


	fn.displacement_diff = function(widget_grid_data, parent_bgd, y_units)
	{
		var actual_row = widget_grid_data.row;
		var diffs = [];
		var parent_max_y = parent_bgd.row + parent_bgd.size_y;

		this.for_each_column_occupied(widget_grid_data, function(col)
		{
			var temp_y_units = 0;

			for(var r = parent_max_y; r < actual_row; r++)
			{
				if(this.is_empty(col, r))
				{
					temp_y_units = temp_y_units + 1;
				}
			}

			diffs.push(temp_y_units);
		});

		var max_diff = Math.max.apply(Math, diffs);
		y_units = (y_units - max_diff);

		return y_units > 0 ? y_units : 0;
	};


	/**
	 * Get panes below a widget.
	 *
	 * @method widgets_below
	 * @param {HTMLElement} $el The jQuery wrapped HTMLElement.
	 * @return {jQuery} A jQuery collection of HTMLElements.
	 */
	fn.widgets_below = function($el)
	{
		var el_grid_data = $.isPlainObject($el) ? $el : $el.coords().grid;
		var self = this;
		var ga = this.gridmap;
		var next_row = el_grid_data.row + el_grid_data.size_y - 1;
		var $nexts = $([]);

		this.for_each_column_occupied(el_grid_data, function(col)
		{
			self.for_each_widget_below(col, next_row, function(tcol, trow)
			{
				if(!self.is_player(this) && $.inArray(this, $nexts) === -1)
				{
					$nexts = $nexts.add(this);
					return true; // break
				}
			});
		});

		return this.sort_by_row_asc($nexts);
	};


	/**
	 * Update the array of mapped positions with the new player position.
	 *
	 * @method set_cells_player_occupies
	 * @param {Number} col The new player col.
	 * @param {Number} col The new player row.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.set_cells_player_occupies = function(col, row)
	{
		this.remove_from_gridmap(this.placeholder_grid_data);
		this.placeholder_grid_data.col = col;
		this.placeholder_grid_data.row = row;
		this.add_to_gridmap(this.placeholder_grid_data, this.$player);
		return this;
	};


	/**
	 * Remove from the array of mapped positions the reference to the player.
	 *
	 * @method empty_cells_player_occupies
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.empty_cells_player_occupies = function()
	{
		this.remove_from_gridmap(this.placeholder_grid_data);
		return this;
	};


	fn.can_go_up = function($el)
	{
		var el_grid_data = $el.coords().grid;
		var initial_row = el_grid_data.row;
		var prev_row = initial_row - 1;
		var ga = this.gridmap;
		var upper_rows_by_column = [];

		var result = true;
		if(initial_row === 1)
		{
			return false;
		}

		this.for_each_column_occupied(el_grid_data, function(col)
		{
			var $w = this.is_widget(col, prev_row);

			if(this.is_occupied(col, prev_row) || this.is_player(col, prev_row) || this.is_placeholder_in(col, prev_row) || this.is_player_in(col, prev_row))
			{
				result = false;
				return true; //break
			}
		});

		return result;
	};


	/**
	 * Check if it's possible to move a widget to a specific col/row. It takes
	 * into account the dimensions (`size_y` and `size_x` attrs. of the grid
	 *  coords object) the widget occupies.
	 *
	 * @method can_move_to
	 * @param {Object} widget_grid_data The grid coords object that represents
	 *  the widget.
	 * @param {Object} col The col to check.
	 * @param {Object} row The row to check.
	 * @param {Number} [max_row] The max row allowed.
	 * @return {Boolean} Returns true if all cells are empty, else return false.
	 */
	fn.can_move_to = function(widget_grid_data, col, row, max_row)
	{
		var ga = this.gridmap;
		var $w = widget_grid_data.el;
		var future_wd = {
			size_y: widget_grid_data.size_y,
			size_x: widget_grid_data.size_x,
			col   : col,
			row   : row
		};
		var result = true;

		//Prevents panes go out of the grid
		var right_col = col + widget_grid_data.size_x - 1;
		if(right_col > this.cols)
		{
			return false;
		}

		if(max_row && max_row < row + widget_grid_data.size_y - 1)
		{
			return false;
		}

		this.for_each_cell_occupied(future_wd, function(tcol, trow)
		{
			var $tw = this.is_widget(tcol, trow);
			if($tw && (!widget_grid_data.el || $tw.is($w)))
			{
				result = false;
			}
		});

		return result;
	};


	/**
	 * Given the leftmost column returns all columns that are overlapping
	 *  with the player.
	 *
	 * @method get_targeted_columns
	 * @param {Number} [from_col] The leftmost column.
	 * @return {Array} Returns an array with column numbers.
	 */
	fn.get_targeted_columns = function(from_col)
	{
		var max = (from_col || this.player_grid_data.col) + (this.player_grid_data.size_x - 1);
		var cols = [];
		for(var col = from_col; col <= max; col++)
		{
			cols.push(col);
		}
		return cols;
	};


	/**
	 * Given the upper row returns all rows that are overlapping with the player.
	 *
	 * @method get_targeted_rows
	 * @param {Number} [from_row] The upper row.
	 * @return {Array} Returns an array with row numbers.
	 */
	fn.get_targeted_rows = function(from_row)
	{
		var max = (from_row || this.player_grid_data.row) + (this.player_grid_data.size_y - 1);
		var rows = [];
		for(var row = from_row; row <= max; row++)
		{
			rows.push(row);
		}
		return rows;
	};

	/**
	 * Get all columns and rows that a widget occupies.
	 *
	 * @method get_cells_occupied
	 * @param {Object} el_grid_data The grid coords object of the widget.
	 * @return {Object} Returns an object like `{ cols: [], rows: []}`.
	 */
	fn.get_cells_occupied = function(el_grid_data)
	{
		var cells = { cols: [], rows: []};
		var i;
		if(arguments[1] instanceof jQuery)
		{
			el_grid_data = arguments[1].coords().grid;
		}

		for(i = 0; i < el_grid_data.size_x; i++)
		{
			var col = el_grid_data.col + i;
			cells.cols.push(col);
		}

		for(i = 0; i < el_grid_data.size_y; i++)
		{
			var row = el_grid_data.row + i;
			cells.rows.push(row);
		}

		return cells;
	};


	/**
	 * Iterate over the cells occupied by a widget executing a function for
	 * each one.
	 *
	 * @method for_each_cell_occupied
	 * @param {Object} el_grid_data The grid coords object that represents the
	 *  widget.
	 * @param {Function} callback The function to execute on each column
	 *  iteration. Column and row are passed as arguments.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.for_each_cell_occupied = function(grid_data, callback)
	{
		this.for_each_column_occupied(grid_data, function(col)
		{
			this.for_each_row_occupied(grid_data, function(row)
			{
				callback.call(this, col, row);
			});
		});
		return this;
	};


	/**
	 * Iterate over the columns occupied by a widget executing a function for
	 * each one.
	 *
	 * @method for_each_column_occupied
	 * @param {Object} el_grid_data The grid coords object that represents
	 *  the widget.
	 * @param {Function} callback The function to execute on each column
	 *  iteration. The column number is passed as first argument.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.for_each_column_occupied = function(el_grid_data, callback)
	{
		for(var i = 0; i < el_grid_data.size_x; i++)
		{
			var col = el_grid_data.col + i;
			callback.call(this, col, el_grid_data);
		}
	};


	/**
	 * Iterate over the rows occupied by a widget executing a function for
	 * each one.
	 *
	 * @method for_each_row_occupied
	 * @param {Object} el_grid_data The grid coords object that represents
	 *  the widget.
	 * @param {Function} callback The function to execute on each column
	 *  iteration. The row number is passed as first argument.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.for_each_row_occupied = function(el_grid_data, callback)
	{
		for(var i = 0; i < el_grid_data.size_y; i++)
		{
			var row = el_grid_data.row + i;
			callback.call(this, row, el_grid_data);
		}
	};


	fn._traversing_widgets = function(type, direction, col, row, callback)
	{
		var ga = this.gridmap;
		if(!ga[col])
		{
			return;
		}

		var cr, max;
		var action = type + '/' + direction;
		if(arguments[2] instanceof jQuery)
		{
			var el_grid_data = arguments[2].coords().grid;
			col = el_grid_data.col;
			row = el_grid_data.row;
			callback = arguments[3];
		}
		var matched = [];
		var trow = row;


		var methods = {
			'for_each/above': function()
			{
				while(trow--)
				{
					if(trow > 0 && this.is_widget(col, trow) && $.inArray(ga[col][trow], matched) === -1)
					{
						cr = callback.call(ga[col][trow], col, trow);
						matched.push(ga[col][trow]);
						if(cr)
						{
							break;
						}
					}
				}
			},
			'for_each/below': function()
			{
				for(trow = row + 1, max = ga[col].length; trow < max; trow++)
				{
					if(this.is_widget(col, trow) && $.inArray(ga[col][trow], matched) === -1)
					{
						cr = callback.call(ga[col][trow], col, trow);
						matched.push(ga[col][trow]);
						if(cr)
						{
							break;
						}
					}
				}
			}
		};

		if(methods[action])
		{
			methods[action].call(this);
		}
	};


	/**
	 * Iterate over each widget above the column and row specified.
	 *
	 * @method for_each_widget_above
	 * @param {Number} col The column to start iterating.
	 * @param {Number} row The row to start iterating.
	 * @param {Function} callback The function to execute on each widget
	 *  iteration. The value of `this` inside the function is the jQuery
	 *  wrapped HTMLElement.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.for_each_widget_above = function(col, row, callback)
	{
		this._traversing_widgets('for_each', 'above', col, row, callback);
		return this;
	};


	/**
	 * Iterate over each widget below the column and row specified.
	 *
	 * @method for_each_widget_below
	 * @param {Number} col The column to start iterating.
	 * @param {Number} row The row to start iterating.
	 * @param {Function} callback The function to execute on each widget
	 *  iteration. The value of `this` inside the function is the jQuery wrapped
	 *  HTMLElement.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.for_each_widget_below = function(col, row, callback)
	{
		this._traversing_widgets('for_each', 'below', col, row, callback);
		return this;
	};


	/**
	 * Returns the highest occupied cell in the grid.
	 *
	 * @method get_highest_occupied_cell
	 * @return {Object} Returns an object with `col` and `row` numbers.
	 */
	fn.get_highest_occupied_cell = function()
	{
		var r;
		var gm = this.gridmap;
		var rows = [];
		var row_in_col = [];
		for(var c = gm.length - 1; c >= 1; c--)
		{
			for(r = gm[c].length - 1; r >= 1; r--)
			{
				if(this.is_widget(c, r))
				{
					rows.push(r);
					row_in_col[r] = c;
					break;
				}
			}
		}

		var highest_row = Math.max.apply(Math, rows);

		this.highest_occupied_cell = {
			col: row_in_col[highest_row],
			row: highest_row
		};

		return this.highest_occupied_cell;
	};


	fn.get_widgets_from = function(col, row)
	{
		var ga = this.gridmap;
		var $widgets = $();

		if(col)
		{
			$widgets = $widgets.add(this.$widgets.filter(function()
			{
				var tcol = $(this).attr('data-col');
				return (tcol === col || tcol > col);
			}));
		}

		if(row)
		{
			$widgets = $widgets.add(this.$widgets.filter(function()
			{
				var trow = $(this).attr('data-row');
				return (trow === row || trow > row);
			}));
		}

		return $widgets;
	};


	/**
	 * Set the current height of the parent grid.
	 *
	 * @method set_dom_grid_height
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.set_dom_grid_height = function()
	{
		var r = this.get_highest_occupied_cell().row + 1;
		this.$el.css('height', r * this.min_widget_height);
		return this;
	};


	/**
	 * It generates the neccessary styles to position the panes.
	 *
	 * @method generate_stylesheet
	 * @param {Number} rows Number of columns.
	 * @param {Number} cols Number of rows.
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.generate_stylesheet = function(opts)
	{
		var styles = '';
		var max_size_x = this.options.max_size_x;
		var max_rows = 0;
		var max_cols = 0;
		var i;
		var rules;

		opts || (opts = {});
		opts.cols || (opts.cols = this.cols);
		opts.rows || (opts.rows = this.rows);
		opts.namespace || (opts.namespace = this.options.namespace);
		opts.widget_base_dimensions || (opts.widget_base_dimensions = this.options.widget_base_dimensions);
		opts.widget_margins || (opts.widget_margins = this.options.widget_margins);
		opts.min_widget_width = (opts.widget_margins[0] * 2) + opts.widget_base_dimensions[0];
		opts.min_widget_height = (opts.widget_margins[1] * 2) + opts.widget_base_dimensions[1];

		// don't duplicate stylesheets for the same configuration
		var serialized_opts = $.param(opts);
		if($.inArray(serialized_opts, Gridster.generated_stylesheets) >= 0)
		{
			return false;
		}

		Gridster.generated_stylesheets.push(serialized_opts);

		/* generate CSS styles for cols */
		for(i = opts.cols; i >= 0; i--)
		{
			styles += (opts.namespace + ' [data-col="' + (i + 1) + '"] { left:' + ((i * opts.widget_base_dimensions[0]) + (i * opts.widget_margins[0]) + ((i + 1) * opts.widget_margins[0])) + 'px;} ');
		}

		/* generate CSS styles for rows */
		for(i = opts.rows; i >= 0; i--)
		{
			styles += (opts.namespace + ' [data-row="' + (i + 1) + '"] { top:' + ((i * opts.widget_base_dimensions[1]) + (i * opts.widget_margins[1]) + ((i + 1) * opts.widget_margins[1]) ) + 'px;} ');
		}

		for(var y = 1; y <= opts.rows; y++)
		{
			styles += (opts.namespace + ' [data-sizey="' + y + '"] { height:' + (y * opts.widget_base_dimensions[1] + (y - 1) * (opts.widget_margins[1] * 2)) + 'px;}');
		}

		for(var x = 1; x <= max_size_x; x++)
		{
			styles += (opts.namespace + ' [data-sizex="' + x + '"] { width:' + (x * opts.widget_base_dimensions[0] + (x - 1) * (opts.widget_margins[0] * 2)) + 'px;}');
		}

		return this.add_style_tag(styles);
	};


	/**
	 * Injects the given CSS as string to the head of the document.
	 *
	 * @method add_style_tag
	 * @param {String} css The styles to apply.
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.add_style_tag = function(css)
	{
		var d = document;
		var tag = d.createElement('style');

		d.getElementsByTagName('head')[0].appendChild(tag);
		tag.setAttribute('type', 'text/css');

		if(tag.styleSheet)
		{
			tag.styleSheet.cssText = css;
		}
		else
		{
			tag.appendChild(document.createTextNode(css));
		}

		this.$style_tags = this.$style_tags.add(tag);

		return this;
	};


	/**
	 * Remove the style tag with the associated id from the head of the document
	 *
	 * @method  remove_style_tag
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.remove_style_tags = function()
	{
		this.$style_tags.remove();
	};


	/**
	 * Generates a faux grid to collide with it when a widget is dragged and
	 * detect row or column that we want to go.
	 *
	 * @method generate_faux_grid
	 * @param {Number} rows Number of columns.
	 * @param {Number} cols Number of rows.
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.generate_faux_grid = function(rows, cols)
	{
		this.faux_grid = [];
		this.gridmap = [];
		var col;
		var row;
		for(col = cols; col > 0; col--)
		{
			this.gridmap[col] = [];
			for(row = rows; row > 0; row--)
			{
				this.add_faux_cell(row, col);
			}
		}
		return this;
	};


	/**
	 * Add cell to the faux grid.
	 *
	 * @method add_faux_cell
	 * @param {Number} row The row for the new faux cell.
	 * @param {Number} col The col for the new faux cell.
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.add_faux_cell = function(row, col)
	{
		var coords = $({
			left        : this.baseX + ((col - 1) * this.min_widget_width),
			top         : this.baseY + (row - 1) * this.min_widget_height,
			width       : this.min_widget_width,
			height      : this.min_widget_height,
			col         : col,
			row         : row,
			original_col: col,
			original_row: row
		}).coords();

		if(!$.isArray(this.gridmap[col]))
		{
			this.gridmap[col] = [];
		}

		this.gridmap[col][row] = false;
		this.faux_grid.push(coords);

		return this;
	};


	/**
	 * Add rows to the faux grid.
	 *
	 * @method add_faux_rows
	 * @param {Number} rows The number of rows you want to add to the faux grid.
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.add_faux_rows = function(rows)
	{
		var actual_rows = this.rows;
		var max_rows = actual_rows + (rows || 1);

		for(var r = max_rows; r > actual_rows; r--)
		{
			for(var c = this.cols; c >= 1; c--)
			{
				this.add_faux_cell(r, c);
			}
		}

		this.rows = max_rows;

		if(this.options.autogenerate_stylesheet)
		{
			this.generate_stylesheet();
		}

		return this;
	};

	/**
	 * Add cols to the faux grid.
	 *
	 * @method add_faux_cols
	 * @param {Number} cols The number of cols you want to add to the faux grid.
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.add_faux_cols = function(cols)
	{
		var actual_cols = this.cols;
		var max_cols = actual_cols + (cols || 1);

		for(var c = actual_cols; c < max_cols; c++)
		{
			for(var r = this.rows; r >= 1; r--)
			{
				this.add_faux_cell(r, c);
			}
		}

		this.cols = max_cols;

		if(this.options.autogenerate_stylesheet)
		{
			this.generate_stylesheet();
		}

		return this;
	};


	/**
	 * Recalculates the offsets for the faux grid. You need to use it when
	 * the browser is resized.
	 *
	 * @method recalculate_faux_grid
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.recalculate_faux_grid = function()
	{
		var aw = this.$wrapper.width();
		this.baseX = ($(window).width() - aw) / 2;
		this.baseY = this.$wrapper.offset().top;

		$.each(this.faux_grid, $.proxy(function(i, coords)
		{
			this.faux_grid[i] = coords.update({
				left: this.baseX + (coords.data.col - 1) * this.min_widget_width,
				top : this.baseY + (coords.data.row - 1) * this.min_widget_height
			});

		}, this));

		return this;
	};


	/**
	 * Get all panes in the DOM and register them.
	 *
	 * @method get_widgets_from_DOM
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.get_widgets_from_DOM = function()
	{
		this.$widgets.each($.proxy(function(i, widget)
		{
			this.register_widget($(widget));
		}, this));
		return this;
	};


	/**
	 * Calculate columns and rows to be set based on the configuration
	 *  parameters, grid dimensions, etc ...
	 *
	 * @method generate_grid_and_stylesheet
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.generate_grid_and_stylesheet = function()
	{
		var aw = this.$wrapper.width();
		var ah = this.$wrapper.height();
		var max_cols = this.options.max_cols;

		var cols = Math.floor(aw / this.min_widget_width) + this.options.extra_cols;

		var actual_cols = this.$widgets.map(function()
		{
			return $(this).attr('data-col');
		}).get();

		//needed to pass tests with phantomjs
		actual_cols.length || (actual_cols = [0]);

		var min_cols = Math.max.apply(Math, actual_cols);

		// get all rows that could be occupied by the current panes
		var max_rows = this.options.extra_rows;
		this.$widgets.each(function(i, w)
		{
			max_rows += (+$(w).attr('data-sizey'));
		});

		this.cols = cols;//Math.max(Math.min(min_cols, cols), 1, this.options.min_cols);

		/*if(max_cols && max_cols >= min_cols && max_cols < this.cols)
		{
			this.cols = max_cols;
		}*/

		this.rows = Math.max(max_rows, this.options.min_rows);

		this.baseX = ($(window).width() - aw) / 2;
		this.baseY = this.$wrapper.offset().top;

		// left and right gutters not included
		this.container_width = (this.cols * this.options.widget_base_dimensions[0]) + ((this.cols - 1) * 2 * this.options.widget_margins[0]);

		if(this.options.autogenerate_stylesheet)
		{
			this.generate_stylesheet();
		}

		return this.generate_faux_grid(this.rows, this.cols);
	};

	/**
	 * Destroy this gridster by removing any sign of its presence, making it easy to avoid memory leaks
	 *
	 * @method destroy
	 * @return {undefined}
	 */
	fn.destroy = function()
	{
		// remove bound callback on window resize
		$(window).unbind('.gridster');

		if(this.drag_api)
		{
			this.drag_api.destroy();
		}

		this.remove_style_tags();

		// lastly, remove gridster element
		// this will additionally cause any data associated to this element to be removed, including this
		// very gridster instance
		this.$el.remove();

		return this;
	};


	//jQuery adapter
	$.fn.gridster = function(options)
	{
		return this.each(function()
		{
			if(!$(this).data('gridster'))
			{
				$(this).data('gridster', new Gridster(this, options));
			}
		});
	};

	$.Gridster = fn;

}(jQuery, window, document));

;
(function($, window, document, undefined)
{

	var fn = $.Gridster;

	fn.widgets_in_col = function(col)
	{
		if(!this.gridmap[col])
		{
			return false;
		}

		for(var i = this.gridmap[col].length - 1; i >= 0; i--)
		{
			if(this.is_widget(col, i) !== false)
			{
				return true;
			}
		}

		return false;
	};

	fn.widgets_in_row = function(row)
	{
		for(var i = this.gridmap.length; i >= 1; i--)
		{
			if(this.is_widget(i, row) !== false)
			{
				return true;
			}
		}

		return false;
	};


	fn.widgets_in_range = function(col1, row1, col2, row2)
	{
		var valid_cols = [];
		var valid_rows = [];
		var $widgets = $([]);
		var c, r, $w, wgd;

		for(c = col2; c >= col1; c--)
		{
			for(r = row2; r >= row1; r--)
			{
				$w = this.is_widget(c, r);

				if($w !== false)
				{
					wgd = $w.data('coords').grid;
					if(wgd.col >= col1 && wgd.col <= col2 && wgd.row >= row1 && wgd.row <= row2)
					{
						$widgets = $widgets.add($w);
					}
				}
			}
		}

		return $widgets;
	};


	fn.get_bottom_most_occupied_cell = function()
	{
		var row = 0;
		var col = 0;
		this.for_each_cell(function($el, c, r)
		{
			if($el && r > row)
			{
				row = r;
				col = c;
			}
		});

		return {col: col, row: row};
	};


	fn.get_right_most_occupied_cell = function()
	{
		var row = 0;
		var col = 0;
		this.for_each_cell(function($el, c, r)
		{
			if($el)
			{
				row = r;
				col = c;
				return false;
			}
		});

		return {col: col, row: row};
	};


	fn.for_each_cell = function(callback, gridmap)
	{
		gridmap || (gridmap = this.gridmap);
		var cols = gridmap.length;
		var rows = gridmap[1].length;

		cols_iter:
			for(var c = cols - 1; c >= 1; c--)
			{
				for(var r = rows - 1; r >= 1; r--)
				{
					var $el = gridmap[c] && gridmap[c][r];
					if(callback)
					{
						if(callback.call(this, $el, c, r) === false)
						{
							break cols_iter;
						}
						else
						{
							continue;
						}
					}
				}
			}
	};


	fn.next_position_in_range = function(size_x, size_y, max_rows)
	{
		size_x || (size_x = 1);
		size_y || (size_y = 1);
		var ga = this.gridmap;
		var cols_l = ga.length;
		var valid_pos = [];
		var rows_l;

		for(var c = 1; c < cols_l; c++)
		{
			rows_l = max_rows || ga[c].length;
			for(var r = 1; r <= rows_l; r++)
			{
				var can_move_to = this.can_move_to({
					size_x: size_x,
					size_y: size_y
				}, c, r, max_rows);

				if(can_move_to)
				{
					valid_pos.push({
						col   : c,
						row   : r,
						size_y: size_y,
						size_x: size_x
					});
				}
			}
		}

		if(valid_pos.length >= 1)
		{
			return this.sort_by_col_asc(valid_pos)[0];
		}

		return false;
	};


	fn.closest_to_right = function(col, row)
	{
		if(!this.gridmap[col])
		{
			return false;
		}
		var cols_l = this.gridmap.length - 1;

		for(var c = col; c <= cols_l; c++)
		{
			if(this.gridmap[c][row])
			{
				return { col: c, row: row };
			}
		}

		return false;
	};


	fn.closest_to_left = function(col, row)
	{
		var cols_l = this.gridmap.length - 1;
		if(!this.gridmap[col])
		{
			return false;
		}

		for(var c = col; c >= 1; c--)
		{
			if(this.gridmap[c][row])
			{
				return { col: c, row: row };
			}
		}

		return false;
	};

}(jQuery, window, document));

(function($)
{
	$.fn.insertAtCaret = function(text, opts)
	{
		var element = $(this).get(0);

		if(document.selection)
		{
			element.focus();
			var orig = element.value.replace(/\r\n/g, "\n");
			var range = document.selection.createRange();

			if(range.parentElement() != element)
			{
				return false;
			}

			range.text = text;

			var actual = tmp = element.value.replace(/\r\n/g, "\n");

			for(var diff = 0; diff < orig.length; diff++)
			{
				if(orig.charAt(diff) != actual.charAt(diff)) break;
			}

			for(var index = 0, start = 0; tmp.match(text) && (tmp = tmp.replace(text, "")) && index <= diff; index = start + text.length)
			{
				start = actual.indexOf(text, index);
			}
		}
		else if(element.selectionStart)
		{
			var start = element.selectionStart;
			var end = element.selectionEnd;

			element.value = element.value.substr(0, start) + text + element.value.substr(end, element.value.length);
		}

		if(start)
		{
			setCaretTo(element, start + text.length);
		}
		else
		{
			element.value = text + element.value;
		}

		$(this).change();

		return this;
	}

	$.fn.replaceTextAt = function(start, end, replacementText)
	{
		var element = $(this).get(0);

		var wholeString = $(this).val();
		var prefix = wholeString.substr(0, start);
		var suffix = wholeString.substr(end);

		$(this).val(prefix + replacementText + suffix);

		var newCursorPosition = prefix.length + replacementText.length;

		setCaretTo(element, newCursorPosition);

		$(this).change();

		return this;
	}

	$.fn.setCaretPosition = function(start, end)
	{
		var element = $(this).get(0);
		element.focus();
		setCaretTo(element, start, end);
		return this;
	}


	$.fn.getCaretPosition = function()
	{
		var element = $(this).get(0);
		$(element).focus();
		return getCaretPosition(element);
	}

	$.fn.getSelectedText = function()
	{
		var element = $(this).get(0);

		// workaround for firefox because window.getSelection does not work inside inputs
		if(typeof element.selectionStart == 'number')
		{
			return $(element).val().substr(element.selectionStart, element.selectionEnd - element.selectionStart);
		}
		else if(document.getSelection)
		{
			return document.getSelection();
		}
		else if(window.getSelection)
		{
			return window.getSelection();
		}
	}

	// privates
	function setCaretTo(element, start, end)
	{
		if(element.createTextRange)
		{
			var range = element.createTextRange();
			range.moveStart('character', start);
			range.moveEnd('character', (end || start));
			range.select();
		}
		else if(element.selectionStart)
		{
			element.focus();
			element.setSelectionRange(start, (end || start));
		}
	}

	function getCaretPosition(element)
	{
		if(typeof element.selectionStart == 'number')
		{
			return element.selectionStart;
		}
		else if(document.selection)
		{
			var range = document.selection.createRange();
			var rangeLength = range.text.length;
			range.moveStart('character', -element.value.length);
			return range.text.length - rangeLength;
		}
	}
})(jQuery);
/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.3 - 2014-06-06
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2014 Jason Moon (@JSONMOON)
 * Licensed MIT (/blob/master/LICENSE.txt)
 */
(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else if(typeof exports==='object'){module.exports=a(require('jquery'))}else{a(jQuery)}}(function($){if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){return}var n=/^https?:\/\//i;var o=/^get|post$/i;var p=new RegExp('^'+location.protocol,'i');$.ajaxTransport('* text html xml json',function(j,k,l){if(!j.crossDomain||!j.async||!o.test(j.type)||!n.test(j.url)||!p.test(j.url)){return}var m=null;return{send:function(f,g){var h='';var i=(k.dataType||'').toLowerCase();m=new XDomainRequest();if(/^\d+$/.test(k.timeout)){m.timeout=k.timeout}m.ontimeout=function(){g(500,'timeout')};m.onload=function(){var a='Content-Length: '+m.responseText.length+'\r\nContent-Type: '+m.contentType;var b={code:200,message:'success'};var c={text:m.responseText};try{if(i==='html'||/text\/html/i.test(m.contentType)){c.html=m.responseText}else if(i==='json'||(i!=='text'&&/\/json/i.test(m.contentType))){try{c.json=$.parseJSON(m.responseText)}catch(e){b.code=500;b.message='parseerror'}}else if(i==='xml'||(i!=='text'&&/\/xml/i.test(m.contentType))){var d=new ActiveXObject('Microsoft.XMLDOM');d.async=false;try{d.loadXML(m.responseText)}catch(e){d=undefined}if(!d||!d.documentElement||d.getElementsByTagName('parsererror').length){b.code=500;b.message='parseerror';throw'Invalid XML: '+m.responseText;}c.xml=d}}catch(parseMessage){throw parseMessage;}finally{g(b.code,b.message,c,a)}};m.onprogress=function(){};m.onerror=function(){g(500,'error',{text:m.responseText})};if(k.data){h=($.type(k.data)==='string')?k.data:$.param(k.data)}m.open(j.type,j.url);m.send(h)},abort:function(){if(m){m.abort()}}}})}));
/* CodeMirror - Minified & Bundled
   Generated on 4/30/2014 with http://codemirror.net/doc/compress.html
   Version: HEAD

   CodeMirror Library:
   - codemirror.js
   Modes:
   - javascript.js
   Add-ons:
   - closebrackets.js
   - continuecomment.js
   - javascript-hint.js
   - matchbrackets.js
   - show-hint.js
 */

!function(a){if("object"==typeof exports&&"object"==typeof module)module.exports=a();else{if("function"==typeof define&&define.amd)return define([],a);this.CodeMirror=a()}}(function(){"use strict";function y(a,c){if(!(this instanceof y))return new y(a,c);this.options=c=c||{},Eg(Zd,c,!1),M(c);var d=c.value;"string"==typeof d&&(d=new yf(d,c.mode)),this.doc=d;var e=this.display=new z(a,d);e.wrapper.CodeMirror=this,I(this),G(this),c.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),c.autofocus&&!q&&Qc(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,draggingText:!1,highlight:new ug},b&&setTimeout(Fg(Pc,this,!0),20),Tc(this),Xg();var f=this;zc(this,function(){f.curOp.forceUpdate=!0,Cf(f,d),c.autofocus&&!q||Qg()==e.input?setTimeout(Fg(vd,f),20):wd(f);for(var a in $d)$d.hasOwnProperty(a)&&$d[a](f,c[a],ae);for(var b=0;b<ee.length;++b)ee[b](f)})}function z(a,b){var d=this,e=d.input=Lg("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em; outline: none");h?e.style.width="1000px":e.setAttribute("wrap","off"),p&&(e.style.border="1px solid black"),e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),e.setAttribute("spellcheck","false"),d.inputDiv=Lg("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;"),d.scrollbarH=Lg("div",[Lg("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar"),d.scrollbarV=Lg("div",[Lg("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),d.scrollbarFiller=Lg("div",null,"CodeMirror-scrollbar-filler"),d.gutterFiller=Lg("div",null,"CodeMirror-gutter-filler"),d.lineDiv=Lg("div",null,"CodeMirror-code"),d.selectionDiv=Lg("div",null,null,"position: relative; z-index: 1"),d.cursorDiv=Lg("div",null,"CodeMirror-cursors"),d.measure=Lg("div",null,"CodeMirror-measure"),d.lineMeasure=Lg("div",null,"CodeMirror-measure"),d.lineSpace=Lg("div",[d.measure,d.lineMeasure,d.selectionDiv,d.cursorDiv,d.lineDiv],null,"position: relative; outline: none"),d.mover=Lg("div",[Lg("div",[d.lineSpace],"CodeMirror-lines")],null,"position: relative"),d.sizer=Lg("div",[d.mover],"CodeMirror-sizer"),d.heightForcer=Lg("div",null,null,"position: absolute; height: "+pg+"px; width: 1px;"),d.gutters=Lg("div",null,"CodeMirror-gutters"),d.lineGutter=null,d.scroller=Lg("div",[d.sizer,d.heightForcer,d.gutters],"CodeMirror-scroll"),d.scroller.setAttribute("tabIndex","-1"),d.wrapper=Lg("div",[d.inputDiv,d.scrollbarH,d.scrollbarV,d.scrollbarFiller,d.gutterFiller,d.scroller],"CodeMirror"),c&&(d.gutters.style.zIndex=-1,d.scroller.style.paddingRight=0),p&&(e.style.width="0px"),h||(d.scroller.draggable=!0),m&&(d.inputDiv.style.height="1px",d.inputDiv.style.position="absolute"),c&&(d.scrollbarH.style.minHeight=d.scrollbarV.style.minWidth="18px"),a.appendChild?a.appendChild(d.wrapper):a(d.wrapper),d.viewFrom=d.viewTo=b.first,d.view=[],d.externalMeasured=null,d.viewOffset=0,d.lastSizeC=0,d.updateLineNumbers=null,d.lineNumWidth=d.lineNumInnerWidth=d.lineNumChars=null,d.prevInput="",d.alignWidgets=!1,d.pollingFast=!1,d.poll=new ug,d.cachedCharWidth=d.cachedTextHeight=d.cachedPaddingH=null,d.inaccurateSelection=!1,d.maxLine=null,d.maxLineLength=0,d.maxLineChanged=!1,d.wheelDX=d.wheelDY=d.wheelStartX=d.wheelStartY=null,d.shift=!1,d.selForContextMenu=null}function A(a){a.doc.mode=y.getMode(a.options,a.doc.modeOption),B(a)}function B(a){a.doc.iter(function(a){a.stateAfter&&(a.stateAfter=null),a.styles&&(a.styles=null)}),a.doc.frontier=a.doc.first,Sb(a,100),a.state.modeGen++,a.curOp&&Fc(a)}function C(a){a.options.lineWrapping?(Tg(a.display.wrapper,"CodeMirror-wrap"),a.display.sizer.style.minWidth=""):(Sg(a.display.wrapper,"CodeMirror-wrap"),L(a)),E(a),Fc(a),ic(a),setTimeout(function(){O(a)},100)}function D(a){var b=uc(a.display),c=a.options.lineWrapping,d=c&&Math.max(5,a.display.scroller.clientWidth/vc(a.display)-3);return function(e){if(Ue(a.doc,e))return 0;var f=0;if(e.widgets)for(var g=0;g<e.widgets.length;g++)e.widgets[g].height&&(f+=e.widgets[g].height);return c?f+(Math.ceil(e.text.length/d)||1)*b:f+b}}function E(a){var b=a.doc,c=D(a);b.iter(function(a){var b=c(a);b!=a.height&&Gf(a,b)})}function F(a){var b=je[a.options.keyMap],c=b.style;a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-keymap-\S+/g,"")+(c?" cm-keymap-"+c:"")}function G(a){a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+a.options.theme.replace(/(^|\s)\s*/g," cm-s-"),ic(a)}function H(a){I(a),Fc(a),setTimeout(function(){Q(a)},20)}function I(a){var b=a.display.gutters,c=a.options.gutters;Ng(b);for(var d=0;d<c.length;++d){var e=c[d],f=b.appendChild(Lg("div",null,"CodeMirror-gutter "+e));"CodeMirror-linenumbers"==e&&(a.display.lineGutter=f,f.style.width=(a.display.lineNumWidth||1)+"px")}b.style.display=d?"":"none",J(a)}function J(a){var b=a.display.gutters.offsetWidth;a.display.sizer.style.marginLeft=b+"px",a.display.scrollbarH.style.left=a.options.fixedGutter?b+"px":0}function K(a){if(0==a.height)return 0;for(var c,b=a.text.length,d=a;c=Ne(d);){var e=c.find(0,!0);d=e.from.line,b+=e.from.ch-e.to.ch}for(d=a;c=Oe(d);){var e=c.find(0,!0);b-=d.text.length-e.from.ch,d=e.to.line,b+=d.text.length-e.to.ch}return b}function L(a){var b=a.display,c=a.doc;b.maxLine=Df(c,c.first),b.maxLineLength=K(b.maxLine),b.maxLineChanged=!0,c.iter(function(a){var c=K(a);c>b.maxLineLength&&(b.maxLineLength=c,b.maxLine=a)})}function M(a){var b=Bg(a.gutters,"CodeMirror-linenumbers");-1==b&&a.lineNumbers?a.gutters=a.gutters.concat(["CodeMirror-linenumbers"]):b>-1&&!a.lineNumbers&&(a.gutters=a.gutters.slice(0),a.gutters.splice(b,1))}function N(a){var b=a.display.scroller;return{clientHeight:b.clientHeight,barHeight:a.display.scrollbarV.clientHeight,scrollWidth:b.scrollWidth,clientWidth:b.clientWidth,barWidth:a.display.scrollbarH.clientWidth,docHeight:Math.round(a.doc.height+Xb(a.display))}}function O(a,b){b||(b=N(a));var c=a.display,d=b.docHeight+pg,e=b.scrollWidth>b.clientWidth,f=d>b.clientHeight;if(f?(c.scrollbarV.style.display="block",c.scrollbarV.style.bottom=e?_g(c.measure)+"px":"0",c.scrollbarV.firstChild.style.height=Math.max(0,d-b.clientHeight+(b.barHeight||c.scrollbarV.clientHeight))+"px"):(c.scrollbarV.style.display="",c.scrollbarV.firstChild.style.height="0"),e?(c.scrollbarH.style.display="block",c.scrollbarH.style.right=f?_g(c.measure)+"px":"0",c.scrollbarH.firstChild.style.width=b.scrollWidth-b.clientWidth+(b.barWidth||c.scrollbarH.clientWidth)+"px"):(c.scrollbarH.style.display="",c.scrollbarH.firstChild.style.width="0"),e&&f?(c.scrollbarFiller.style.display="block",c.scrollbarFiller.style.height=c.scrollbarFiller.style.width=_g(c.measure)+"px"):c.scrollbarFiller.style.display="",e&&a.options.coverGutterNextToScrollbar&&a.options.fixedGutter?(c.gutterFiller.style.display="block",c.gutterFiller.style.height=_g(c.measure)+"px",c.gutterFiller.style.width=c.gutters.offsetWidth+"px"):c.gutterFiller.style.display="",!a.state.checkedOverlayScrollbar&&b.clientHeight>0){if(0===_g(c.measure)){var g=r&&!n?"12px":"18px";c.scrollbarV.style.minWidth=c.scrollbarH.style.minHeight=g;var h=function(b){cg(b)!=c.scrollbarV&&cg(b)!=c.scrollbarH&&Ac(a,Xc)(b)};eg(c.scrollbarV,"mousedown",h),eg(c.scrollbarH,"mousedown",h)}a.state.checkedOverlayScrollbar=!0}}function P(a,b,c){var d=c&&null!=c.top?c.top:a.scroller.scrollTop;d=Math.floor(d-Wb(a));var e=c&&null!=c.bottom?c.bottom:d+a.wrapper.clientHeight,f=If(b,d),g=If(b,e);if(c&&c.ensure){var h=c.ensure.from.line,i=c.ensure.to.line;if(f>h)return{from:h,to:If(b,Jf(Df(b,h))+a.wrapper.clientHeight)};if(Math.min(i,b.lastLine())>=g)return{from:If(b,Jf(Df(b,i))-a.wrapper.clientHeight),to:i}}return{from:f,to:g}}function Q(a){var b=a.display,c=b.view;if(b.alignWidgets||b.gutters.firstChild&&a.options.fixedGutter){for(var d=T(b)-b.scroller.scrollLeft+a.doc.scrollLeft,e=b.gutters.offsetWidth,f=d+"px",g=0;g<c.length;g++)if(!c[g].hidden){a.options.fixedGutter&&c[g].gutter&&(c[g].gutter.style.left=f);var h=c[g].alignable;if(h)for(var i=0;i<h.length;i++)h[i].style.left=f}a.options.fixedGutter&&(b.gutters.style.left=d+e+"px")}}function R(a){if(!a.options.lineNumbers)return!1;var b=a.doc,c=S(a.options,b.first+b.size-1),d=a.display;if(c.length!=d.lineNumChars){var e=d.measure.appendChild(Lg("div",[Lg("div",c)],"CodeMirror-linenumber CodeMirror-gutter-elt")),f=e.firstChild.offsetWidth,g=e.offsetWidth-f;return d.lineGutter.style.width="",d.lineNumInnerWidth=Math.max(f,d.lineGutter.offsetWidth-g),d.lineNumWidth=d.lineNumInnerWidth+g,d.lineNumChars=d.lineNumInnerWidth?c.length:-1,d.lineGutter.style.width=d.lineNumWidth+"px",J(a),!0}return!1}function S(a,b){return String(a.lineNumberFormatter(b+a.firstLineNumber))}function T(a){return a.scroller.getBoundingClientRect().left-a.sizer.getBoundingClientRect().left}function U(a,b,c){for(var f,d=a.display.viewFrom,e=a.display.viewTo,g=P(a.display,a.doc,b),i=!0;;i=!1){var j=a.display.scroller.clientWidth;if(!V(a,g,c))break;f=!0,a.display.maxLineChanged&&!a.options.lineWrapping&&W(a);var k=N(a);if(Ob(a),X(a,k),O(a,k),h&&a.options.lineWrapping&&Y(a,k),i&&a.options.lineWrapping&&j!=a.display.scroller.clientWidth)c=!0;else if(c=!1,b&&null!=b.top&&(b={top:Math.min(k.docHeight-pg-k.clientHeight,b.top)}),g=P(a.display,a.doc,b),g.from>=a.display.viewFrom&&g.to<=a.display.viewTo)break}return a.display.updateLineNumbers=null,f&&(jg(a,"update",a),(a.display.viewFrom!=d||a.display.viewTo!=e)&&jg(a,"viewportChange",a,a.display.viewFrom,a.display.viewTo)),f}function V(a,b,c){var d=a.display,e=a.doc;if(!d.wrapper.offsetWidth)return Hc(a),void 0;if(!(!c&&b.from>=d.viewFrom&&b.to<=d.viewTo&&0==Lc(a))){R(a)&&Hc(a);var f=_(a),g=e.first+e.size,h=Math.max(b.from-a.options.viewportMargin,e.first),i=Math.min(g,b.to+a.options.viewportMargin);d.viewFrom<h&&h-d.viewFrom<20&&(h=Math.max(e.first,d.viewFrom)),d.viewTo>i&&d.viewTo-i<20&&(i=Math.min(g,d.viewTo)),x&&(h=Se(a.doc,h),i=Te(a.doc,i));var j=h!=d.viewFrom||i!=d.viewTo||d.lastSizeC!=d.wrapper.clientHeight;Kc(a,h,i),d.viewOffset=Jf(Df(a.doc,d.viewFrom)),a.display.mover.style.top=d.viewOffset+"px";var k=Lc(a);if(j||0!=k||c){var l=Qg();return k>4&&(d.lineDiv.style.display="none"),ab(a,d.updateLineNumbers,f),k>4&&(d.lineDiv.style.display=""),l&&Qg()!=l&&l.offsetHeight&&l.focus(),Ng(d.cursorDiv),Ng(d.selectionDiv),j&&(d.lastSizeC=d.wrapper.clientHeight,Sb(a,400)),Z(a),!0}}}function W(a){var b=a.display,c=ac(a,b.maxLine,b.maxLine.text.length).left;b.maxLineChanged=!1;var d=Math.max(0,c+3),e=Math.max(0,b.sizer.offsetLeft+d+pg-b.scroller.clientWidth);b.sizer.style.minWidth=d+"px",e<a.doc.scrollLeft&&hd(a,Math.min(b.scroller.scrollLeft,e),!0)}function X(a,b){a.display.sizer.style.minHeight=a.display.heightForcer.style.top=b.docHeight+"px",a.display.gutters.style.height=Math.max(b.docHeight,b.clientHeight-pg)+"px"}function Y(a,b){a.display.sizer.offsetWidth+a.display.gutters.offsetWidth<a.display.scroller.clientWidth-1&&(a.display.sizer.style.minHeight=a.display.heightForcer.style.top="0px",a.display.gutters.style.height=b.docHeight+"px")}function Z(a){for(var b=a.display,d=b.lineDiv.offsetTop,e=0;e<b.view.length;e++){var g,f=b.view[e];if(!f.hidden){if(c){var h=f.node.offsetTop+f.node.offsetHeight;g=h-d,d=h}else{var i=f.node.getBoundingClientRect();g=i.bottom-i.top}var j=f.line.height-g;if(2>g&&(g=uc(b)),(j>.001||-.001>j)&&(Gf(f.line,g),$(f.line),f.rest))for(var k=0;k<f.rest.length;k++)$(f.rest[k])}}}function $(a){if(a.widgets)for(var b=0;b<a.widgets.length;++b)a.widgets[b].height=a.widgets[b].node.offsetHeight}function _(a){for(var b=a.display,c={},d={},e=b.gutters.firstChild,f=0;e;e=e.nextSibling,++f)c[a.options.gutters[f]]=e.offsetLeft,d[a.options.gutters[f]]=e.offsetWidth;return{fixedPos:T(b),gutterTotalWidth:b.gutters.offsetWidth,gutterLeft:c,gutterWidth:d,wrapperWidth:b.wrapper.clientWidth}}function ab(a,b,c){function i(b){var c=b.nextSibling;return h&&r&&a.display.currentWheelTarget==b?b.style.display="none":b.parentNode.removeChild(b),c}for(var d=a.display,e=a.options.lineNumbers,f=d.lineDiv,g=f.firstChild,j=d.view,k=d.viewFrom,l=0;l<j.length;l++){var m=j[l];if(m.hidden);else if(m.node){for(;g!=m.node;)g=i(g);var o=e&&null!=b&&k>=b&&m.lineNumber;m.changes&&(Bg(m.changes,"gutter")>-1&&(o=!1),bb(a,m,k,c)),o&&(Ng(m.lineNumber),m.lineNumber.appendChild(document.createTextNode(S(a.options,k)))),g=m.node.nextSibling}else{var n=jb(a,m,k,c);f.insertBefore(n,g)}k+=m.size}for(;g;)g=i(g)}function bb(a,b,c,d){for(var e=0;e<b.changes.length;e++){var f=b.changes[e];"text"==f?fb(a,b):"gutter"==f?hb(a,b,c,d):"class"==f?gb(b):"widget"==f&&ib(b,d)}b.changes=null}function cb(a){return a.node==a.text&&(a.node=Lg("div",null,null,"position: relative"),a.text.parentNode&&a.text.parentNode.replaceChild(a.node,a.text),a.node.appendChild(a.text),c&&(a.node.style.zIndex=2)),a.node}function db(a){var b=a.bgClass?a.bgClass+" "+(a.line.bgClass||""):a.line.bgClass;if(b&&(b+=" CodeMirror-linebackground"),a.background)b?a.background.className=b:(a.background.parentNode.removeChild(a.background),a.background=null);else if(b){var c=cb(a);a.background=c.insertBefore(Lg("div",null,b),c.firstChild)}}function eb(a,b){var c=a.display.externalMeasured;return c&&c.line==b.line?(a.display.externalMeasured=null,b.measure=c.measure,c.built):mf(a,b)}function fb(a,b){var c=b.text.className,d=eb(a,b);b.text==b.node&&(b.node=d.pre),b.text.parentNode.replaceChild(d.pre,b.text),b.text=d.pre,d.bgClass!=b.bgClass||d.textClass!=b.textClass?(b.bgClass=d.bgClass,b.textClass=d.textClass,gb(b)):c&&(b.text.className=c)}function gb(a){db(a),a.line.wrapClass?cb(a).className=a.line.wrapClass:a.node!=a.text&&(a.node.className="");var b=a.textClass?a.textClass+" "+(a.line.textClass||""):a.line.textClass;a.text.className=b||""}function hb(a,b,c,d){b.gutter&&(b.node.removeChild(b.gutter),b.gutter=null);var e=b.line.gutterMarkers;if(a.options.lineNumbers||e){var f=cb(b),g=b.gutter=f.insertBefore(Lg("div",null,"CodeMirror-gutter-wrapper","position: absolute; left: "+(a.options.fixedGutter?d.fixedPos:-d.gutterTotalWidth)+"px"),b.text);if(!a.options.lineNumbers||e&&e["CodeMirror-linenumbers"]||(b.lineNumber=g.appendChild(Lg("div",S(a.options,c),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+d.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+a.display.lineNumInnerWidth+"px"))),e)for(var h=0;h<a.options.gutters.length;++h){var i=a.options.gutters[h],j=e.hasOwnProperty(i)&&e[i];j&&g.appendChild(Lg("div",[j],"CodeMirror-gutter-elt","left: "+d.gutterLeft[i]+"px; width: "+d.gutterWidth[i]+"px"))}}}function ib(a,b){a.alignable&&(a.alignable=null);for(var d,c=a.node.firstChild;c;c=d){var d=c.nextSibling;"CodeMirror-linewidget"==c.className&&a.node.removeChild(c)}kb(a,b)}function jb(a,b,c,d){var e=eb(a,b);return b.text=b.node=e.pre,e.bgClass&&(b.bgClass=e.bgClass),e.textClass&&(b.textClass=e.textClass),gb(b),hb(a,b,c,d),kb(b,d),b.node}function kb(a,b){if(lb(a.line,a,b,!0),a.rest)for(var c=0;c<a.rest.length;c++)lb(a.rest[c],a,b,!1)}function lb(a,b,c,d){if(a.widgets)for(var e=cb(b),f=0,g=a.widgets;f<g.length;++f){var h=g[f],i=Lg("div",[h.node],"CodeMirror-linewidget");h.handleMouseEvents||(i.ignoreEvents=!0),mb(h,i,b,c),d&&h.above?e.insertBefore(i,b.gutter||b.text):e.appendChild(i),jg(h,"redraw")}}function mb(a,b,c,d){if(a.noHScroll){(c.alignable||(c.alignable=[])).push(b);var e=d.wrapperWidth;b.style.left=d.fixedPos+"px",a.coverGutter||(e-=d.gutterTotalWidth,b.style.paddingLeft=d.gutterTotalWidth+"px"),b.style.width=e+"px"}a.coverGutter&&(b.style.zIndex=5,b.style.position="relative",a.noHScroll||(b.style.marginLeft=-d.gutterTotalWidth+"px"))}function pb(a){return nb(a.line,a.ch)}function qb(a,b){return ob(a,b)<0?b:a}function rb(a,b){return ob(a,b)<0?a:b}function sb(a,b){this.ranges=a,this.primIndex=b}function tb(a,b){this.anchor=a,this.head=b}function ub(a,b){var c=a[b];a.sort(function(a,b){return ob(a.from(),b.from())}),b=Bg(a,c);for(var d=1;d<a.length;d++){var e=a[d],f=a[d-1];if(ob(f.to(),e.from())>=0){var g=rb(f.from(),e.from()),h=qb(f.to(),e.to()),i=f.empty()?e.from()==e.head:f.from()==f.head;b>=d&&--b,a.splice(--d,2,new tb(i?h:g,i?g:h))}}return new sb(a,b)}function vb(a,b){return new sb([new tb(a,b||a)],0)}function wb(a,b){return Math.max(a.first,Math.min(b,a.first+a.size-1))}function xb(a,b){if(b.line<a.first)return nb(a.first,0);var c=a.first+a.size-1;return b.line>c?nb(c,Df(a,c).text.length):yb(b,Df(a,b.line).text.length)}function yb(a,b){var c=a.ch;return null==c||c>b?nb(a.line,b):0>c?nb(a.line,0):a}function zb(a,b){return b>=a.first&&b<a.first+a.size}function Ab(a,b){for(var c=[],d=0;d<b.length;d++)c[d]=xb(a,b[d]);return c}function Bb(a,b,c,d){if(a.cm&&a.cm.display.shift||a.extend){var e=b.anchor;if(d){var f=ob(c,e)<0;f!=ob(d,e)<0?(e=c,c=d):f!=ob(c,d)<0&&(c=d)}return new tb(e,c)}return new tb(d||c,c)}function Cb(a,b,c,d){Ib(a,new sb([Bb(a,a.sel.primary(),b,c)],0),d)}function Db(a,b,c){for(var d=[],e=0;e<a.sel.ranges.length;e++)d[e]=Bb(a,a.sel.ranges[e],b[e],null);var f=ub(d,a.sel.primIndex);Ib(a,f,c)}function Eb(a,b,c,d){var e=a.sel.ranges.slice(0);e[b]=c,Ib(a,ub(e,a.sel.primIndex),d)}function Fb(a,b,c,d){Ib(a,vb(b,c),d)}function Gb(a,b){var c={ranges:b.ranges,update:function(b){this.ranges=[];for(var c=0;c<b.length;c++)this.ranges[c]=new tb(xb(a,b[c].anchor),xb(a,b[c].head))}};return gg(a,"beforeSelectionChange",a,c),a.cm&&gg(a.cm,"beforeSelectionChange",a.cm,c),c.ranges!=b.ranges?ub(c.ranges,c.ranges.length-1):b}function Hb(a,b,c){var d=a.history.done,e=zg(d);e&&e.ranges?(d[d.length-1]=b,Jb(a,b,c)):Ib(a,b,c)}function Ib(a,b,c){Jb(a,b,c),Rf(a,a.sel,a.cm?a.cm.curOp.id:0/0,c)}function Jb(a,b,c){(ng(a,"beforeSelectionChange")||a.cm&&ng(a.cm,"beforeSelectionChange"))&&(b=Gb(a,b));var d=ob(b.primary().head,a.sel.primary().head)<0?-1:1;Kb(a,Mb(a,b,d,!0)),c&&c.scroll===!1||!a.cm||Rd(a.cm)}function Kb(a,b){b.equals(a.sel)||(a.sel=b,a.cm&&(a.cm.curOp.updateInput=a.cm.curOp.selectionChanged=!0,mg(a.cm)),jg(a,"cursorActivity",a))}function Lb(a){Kb(a,Mb(a,a.sel,null,!1),rg)}function Mb(a,b,c,d){for(var e,f=0;f<b.ranges.length;f++){var g=b.ranges[f],h=Nb(a,g.anchor,c,d),i=Nb(a,g.head,c,d);(e||h!=g.anchor||i!=g.head)&&(e||(e=b.ranges.slice(0,f)),e[f]=new tb(h,i))}return e?ub(e,b.primIndex):b}function Nb(a,b,c,d){var e=!1,f=b,g=c||1;a.cantEdit=!1;a:for(;;){var h=Df(a,f.line);if(h.markedSpans)for(var i=0;i<h.markedSpans.length;++i){var j=h.markedSpans[i],k=j.marker;if((null==j.from||(k.inclusiveLeft?j.from<=f.ch:j.from<f.ch))&&(null==j.to||(k.inclusiveRight?j.to>=f.ch:j.to>f.ch))){if(d&&(gg(k,"beforeCursorEnter"),k.explicitlyCleared)){if(h.markedSpans){--i;continue}break}if(!k.atomic)continue;var l=k.find(0>g?-1:1);if(0==ob(l,f)&&(l.ch+=g,l.ch<0?l=l.line>a.first?xb(a,nb(l.line-1)):null:l.ch>h.text.length&&(l=l.line<a.first+a.size-1?nb(l.line+1,0):null),!l)){if(e)return d?(a.cantEdit=!0,nb(a.first,0)):Nb(a,b,c,!0);e=!0,l=b,g=-g}f=l;continue a}}return f}}function Ob(a){for(var b=a.display,c=a.doc,d=document.createDocumentFragment(),e=document.createDocumentFragment(),f=0;f<c.sel.ranges.length;f++){var g=c.sel.ranges[f],h=g.empty();(h||a.options.showCursorWhenSelecting)&&Pb(a,g,d),h||Qb(a,g,e)}if(a.options.moveInputWithCursor){var i=oc(a,c.sel.primary().head,"div"),j=b.wrapper.getBoundingClientRect(),k=b.lineDiv.getBoundingClientRect(),l=Math.max(0,Math.min(b.wrapper.clientHeight-10,i.top+k.top-j.top)),m=Math.max(0,Math.min(b.wrapper.clientWidth-10,i.left+k.left-j.left));b.inputDiv.style.top=l+"px",b.inputDiv.style.left=m+"px"}Og(b.cursorDiv,d),Og(b.selectionDiv,e)}function Pb(a,b,c){var d=oc(a,b.head,"div"),e=c.appendChild(Lg("div","\xa0","CodeMirror-cursor"));if(e.style.left=d.left+"px",e.style.top=d.top+"px",e.style.height=Math.max(0,d.bottom-d.top)*a.options.cursorHeight+"px",d.other){var f=c.appendChild(Lg("div","\xa0","CodeMirror-cursor CodeMirror-secondarycursor"));f.style.display="",f.style.left=d.other.left+"px",f.style.top=d.other.top+"px",f.style.height=.85*(d.other.bottom-d.other.top)+"px"}}function Qb(a,b,c){function j(a,b,c,d){0>b&&(b=0),b=Math.round(b),d=Math.round(d),f.appendChild(Lg("div",null,"CodeMirror-selected","position: absolute; left: "+a+"px; top: "+b+"px; width: "+(null==c?i-a:c)+"px; height: "+(d-b)+"px"))}function k(b,c,d){function m(c,d){return nc(a,nb(b,c),"div",f,d)}var k,l,f=Df(e,b),g=f.text.length;return ih(Kf(f),c||0,null==d?g:d,function(a,b,e){var n,o,p,f=m(a,"left");if(a==b)n=f,o=p=f.left;else{if(n=m(b-1,"right"),"rtl"==e){var q=f;f=n,n=q}o=f.left,p=n.right}null==c&&0==a&&(o=h),n.top-f.top>3&&(j(o,f.top,null,f.bottom),o=h,f.bottom<n.top&&j(o,f.bottom,null,n.top)),null==d&&b==g&&(p=i),(!k||f.top<k.top||f.top==k.top&&f.left<k.left)&&(k=f),(!l||n.bottom>l.bottom||n.bottom==l.bottom&&n.right>l.right)&&(l=n),h+1>o&&(o=h),j(o,n.top,p-o,n.bottom)}),{start:k,end:l}}var d=a.display,e=a.doc,f=document.createDocumentFragment(),g=Yb(a.display),h=g.left,i=d.lineSpace.offsetWidth-g.right,l=b.from(),m=b.to();if(l.line==m.line)k(l.line,l.ch,m.ch);else{var n=Df(e,l.line),o=Df(e,m.line),p=Qe(n)==Qe(o),q=k(l.line,l.ch,p?n.text.length+1:null).end,r=k(m.line,p?0:null,m.ch).start;p&&(q.top<r.top-2?(j(q.right,q.top,null,q.bottom),j(h,r.top,r.left,r.bottom)):j(q.right,q.top,r.left-q.right,q.bottom)),q.bottom<r.top&&j(h,q.bottom,null,r.top)}c.appendChild(f)}function Rb(a){if(a.state.focused){var b=a.display;clearInterval(b.blinker);var c=!0;b.cursorDiv.style.visibility="",a.options.cursorBlinkRate>0&&(b.blinker=setInterval(function(){b.cursorDiv.style.visibility=(c=!c)?"":"hidden"},a.options.cursorBlinkRate))}}function Sb(a,b){a.doc.mode.startState&&a.doc.frontier<a.display.viewTo&&a.state.highlight.set(b,Fg(Tb,a))}function Tb(a){var b=a.doc;if(b.frontier<b.first&&(b.frontier=b.first),!(b.frontier>=a.display.viewTo)){var c=+new Date+a.options.workTime,d=ge(b.mode,Vb(a,b.frontier));zc(a,function(){b.iter(b.frontier,Math.min(b.first+b.size,a.display.viewTo+500),function(e){if(b.frontier>=a.display.viewFrom){var f=e.styles,g=ff(a,e,d,!0);e.styles=g.styles,g.classes?e.styleClasses=g.classes:e.styleClasses&&(e.styleClasses=null);for(var h=!f||f.length!=e.styles.length,i=0;!h&&i<f.length;++i)h=f[i]!=e.styles[i];h&&Gc(a,b.frontier,"text"),e.stateAfter=ge(b.mode,d)}else hf(a,e.text,d),e.stateAfter=0==b.frontier%5?ge(b.mode,d):null;return++b.frontier,+new Date>c?(Sb(a,a.options.workDelay),!0):void 0})})}}function Ub(a,b,c){for(var d,e,f=a.doc,g=c?-1:b-(a.doc.mode.innerMode?1e3:100),h=b;h>g;--h){if(h<=f.first)return f.first;var i=Df(f,h-1);if(i.stateAfter&&(!c||h<=f.frontier))return h;var j=vg(i.text,null,a.options.tabSize);(null==e||d>j)&&(e=h-1,d=j)}return e}function Vb(a,b,c){var d=a.doc,e=a.display;if(!d.mode.startState)return!0;var f=Ub(a,b,c),g=f>d.first&&Df(d,f-1).stateAfter;return g=g?ge(d.mode,g):he(d.mode),d.iter(f,b,function(c){hf(a,c.text,g);var h=f==b-1||0==f%5||f>=e.viewFrom&&f<e.viewTo;c.stateAfter=h?ge(d.mode,g):null,++f}),c&&(d.frontier=f),g}function Wb(a){return a.lineSpace.offsetTop}function Xb(a){return a.mover.offsetHeight-a.lineSpace.offsetHeight}function Yb(a){if(a.cachedPaddingH)return a.cachedPaddingH;var b=Og(a.measure,Lg("pre","x")),c=window.getComputedStyle?window.getComputedStyle(b):b.currentStyle,d={left:parseInt(c.paddingLeft),right:parseInt(c.paddingRight)};return isNaN(d.left)||isNaN(d.right)||(a.cachedPaddingH=d),d}function Zb(a,b,c){var d=a.options.lineWrapping,e=d&&a.display.scroller.clientWidth;if(!b.measure.heights||d&&b.measure.width!=e){var f=b.measure.heights=[];if(d){b.measure.width=e;for(var g=b.text.firstChild.getClientRects(),h=0;h<g.length-1;h++){var i=g[h],j=g[h+1];Math.abs(i.bottom-j.bottom)>2&&f.push((i.bottom+j.top)/2-c.top)}}f.push(c.bottom-c.top)}}function $b(a,b,c){if(a.line==b)return{map:a.measure.map,cache:a.measure.cache};for(var d=0;d<a.rest.length;d++)if(a.rest[d]==b)return{map:a.measure.maps[d],cache:a.measure.caches[d]};for(var d=0;d<a.rest.length;d++)if(Hf(a.rest[d])>c)return{map:a.measure.maps[d],cache:a.measure.caches[d],before:!0}}function _b(a,b){b=Qe(b);var c=Hf(b),d=a.display.externalMeasured=new Dc(a.doc,b,c);d.lineN=c;var e=d.built=mf(a,d);return d.text=e.pre,Og(a.display.lineMeasure,e.pre),d}function ac(a,b,c,d){return dc(a,cc(a,b),c,d)}function bc(a,b){if(b>=a.display.viewFrom&&b<a.display.viewTo)return a.display.view[Ic(a,b)];var c=a.display.externalMeasured;return c&&b>=c.lineN&&b<c.lineN+c.size?c:void 0}function cc(a,b){var c=Hf(b),d=bc(a,c);d&&!d.text?d=null:d&&d.changes&&bb(a,d,c,_(a)),d||(d=_b(a,b));var e=$b(d,b,c);return{line:b,view:d,rect:null,map:e.map,cache:e.cache,before:e.before,hasHeights:!1}}function dc(a,b,c,d){b.before&&(c=-1);var f,e=c+(d||"");return b.cache.hasOwnProperty(e)?f=b.cache[e]:(b.rect||(b.rect=b.view.text.getBoundingClientRect()),b.hasHeights||(Zb(a,b.view,b.rect),b.hasHeights=!0),f=fc(a,b,c,d),f.bogus||(b.cache[e]=f)),{left:f.left,right:f.right,top:f.top,bottom:f.bottom}}function fc(a,b,c,e){for(var h,i,j,k,f=b.map,l=0;l<f.length;l+=3){var m=f[l],n=f[l+1];if(m>c?(i=0,j=1,k="left"):n>c?(i=c-m,j=i+1):(l==f.length-3||c==n&&f[l+3]>c)&&(j=n-m,i=j-1,c>=n&&(k="right")),null!=i){if(h=f[l+2],m==n&&e==(h.insertLeft?"left":"right")&&(k=e),"left"==e&&0==i)for(;l&&f[l-2]==f[l-3]&&f[l-1].insertLeft;)h=f[(l-=3)+2],k="left";if("right"==e&&i==n-m)for(;l<f.length-3&&f[l+3]==f[l+4]&&!f[l+5].insertLeft;)h=f[(l+=3)+2],k="right";break}}var o;if(3==h.nodeType){for(;i&&Kg(b.line.text.charAt(m+i));)--i;for(;n>m+j&&Kg(b.line.text.charAt(m+j));)++j;if(d&&0==i&&j==n-m)o=h.parentNode.getBoundingClientRect();else if(g&&a.options.lineWrapping){var p=Mg(h,i,j).getClientRects();o=p.length?p["right"==e?p.length-1:0]:ec}else o=Mg(h,i,j).getBoundingClientRect()||ec}else{i>0&&(k=e="right");var p;o=a.options.lineWrapping&&(p=h.getClientRects()).length>1?p["right"==e?p.length-1:0]:h.getBoundingClientRect()}if(d&&!i&&(!o||!o.left&&!o.right)){var q=h.parentNode.getClientRects()[0];o=q?{left:q.left,right:q.left+vc(a.display),top:q.top,bottom:q.bottom}:ec}for(var r,s=(o.bottom+o.top)/2-b.rect.top,t=b.view.measure.heights,l=0;l<t.length-1&&!(s<t[l]);l++);r=l?t[l-1]:0,s=t[l];var u={left:("right"==k?o.right:o.left)-b.rect.left,right:("left"==k?o.left:o.right)-b.rect.left,top:r,bottom:s};return o.left||o.right||(u.bogus=!0),u}function gc(a){if(a.measure&&(a.measure.cache={},a.measure.heights=null,a.rest))for(var b=0;b<a.rest.length;b++)a.measure.caches[b]={}}function hc(a){a.display.externalMeasure=null,Ng(a.display.lineMeasure);for(var b=0;b<a.display.view.length;b++)gc(a.display.view[b])}function ic(a){hc(a),a.display.cachedCharWidth=a.display.cachedTextHeight=a.display.cachedPaddingH=null,a.options.lineWrapping||(a.display.maxLineChanged=!0),a.display.lineNumChars=null}function jc(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft}function kc(){return window.pageYOffset||(document.documentElement||document.body).scrollTop}function lc(a,b,c,d){if(b.widgets)for(var e=0;e<b.widgets.length;++e)if(b.widgets[e].above){var f=Ye(b.widgets[e]);c.top+=f,c.bottom+=f}if("line"==d)return c;d||(d="local");var g=Jf(b);if("local"==d?g+=Wb(a.display):g-=a.display.viewOffset,"page"==d||"window"==d){var h=a.display.lineSpace.getBoundingClientRect();g+=h.top+("window"==d?0:kc());var i=h.left+("window"==d?0:jc());c.left+=i,c.right+=i}return c.top+=g,c.bottom+=g,c}function mc(a,b,c){if("div"==c)return b;var d=b.left,e=b.top;if("page"==c)d-=jc(),e-=kc();else if("local"==c||!c){var f=a.display.sizer.getBoundingClientRect();d+=f.left,e+=f.top}var g=a.display.lineSpace.getBoundingClientRect();return{left:d-g.left,top:e-g.top}}function nc(a,b,c,d,e){return d||(d=Df(a.doc,b.line)),lc(a,d,ac(a,d,b.ch,e),c)}function oc(a,b,c,d,e){function f(b,f){var g=dc(a,e,b,f?"right":"left");return f?g.left=g.right:g.right=g.left,lc(a,d,g,c)}function g(a,b){var c=h[b],d=c.level%2;return a==jh(c)&&b&&c.level<h[b-1].level?(c=h[--b],a=kh(c)-(c.level%2?0:1),d=!0):a==kh(c)&&b<h.length-1&&c.level<h[b+1].level&&(c=h[++b],a=jh(c)-c.level%2,d=!1),d&&a==c.to&&a>c.from?f(a-1):f(a,d)}d=d||Df(a.doc,b.line),e||(e=cc(a,d));var h=Kf(d),i=b.ch;if(!h)return f(i);var j=rh(h,i),k=g(i,j);return null!=qh&&(k.other=g(i,qh)),k}function pc(a,b){var c=0,b=xb(a.doc,b);a.options.lineWrapping||(c=vc(a.display)*b.ch);var d=Df(a.doc,b.line),e=Jf(d)+Wb(a.display);return{left:c,right:c,top:e,bottom:e+d.height}}function qc(a,b,c,d){var e=nb(a,b);return e.xRel=d,c&&(e.outside=!0),e}function rc(a,b,c){var d=a.doc;if(c+=a.display.viewOffset,0>c)return qc(d.first,0,!0,-1);var e=If(d,c),f=d.first+d.size-1;if(e>f)return qc(d.first+d.size-1,Df(d,f).text.length,!0,1);0>b&&(b=0);for(var g=Df(d,e);;){var h=sc(a,g,e,b,c),i=Oe(g),j=i&&i.find(0,!0);if(!i||!(h.ch>j.from.ch||h.ch==j.from.ch&&h.xRel>0))return h;e=Hf(g=j.to.line)}}function sc(a,b,c,d,e){function j(d){var e=oc(a,nb(c,d),"line",b,i);return g=!0,f>e.bottom?e.left-h:f<e.top?e.left+h:(g=!1,e.left)}var f=e-Jf(b),g=!1,h=2*a.display.wrapper.clientWidth,i=cc(a,b),k=Kf(b),l=b.text.length,m=lh(b),n=mh(b),o=j(m),p=g,q=j(n),r=g;if(d>q)return qc(c,n,r,1);for(;;){if(k?n==m||n==th(b,m,1):1>=n-m){for(var s=o>d||q-d>=d-o?m:n,t=d-(s==m?o:q);Kg(b.text.charAt(s));)++s;var u=qc(c,s,s==m?p:r,-1>t?-1:t>1?1:0);return u}var v=Math.ceil(l/2),w=m+v;if(k){w=m;for(var x=0;v>x;++x)w=th(b,w,1)}var y=j(w);y>d?(n=w,q=y,(r=g)&&(q+=1e3),l=v):(m=w,o=y,p=g,l-=v)}}function uc(a){if(null!=a.cachedTextHeight)return a.cachedTextHeight;if(null==tc){tc=Lg("pre");for(var b=0;49>b;++b)tc.appendChild(document.createTextNode("x")),tc.appendChild(Lg("br"));tc.appendChild(document.createTextNode("x"))}Og(a.measure,tc);var c=tc.offsetHeight/50;return c>3&&(a.cachedTextHeight=c),Ng(a.measure),c||1}function vc(a){if(null!=a.cachedCharWidth)return a.cachedCharWidth;var b=Lg("span","xxxxxxxxxx"),c=Lg("pre",[b]);Og(a.measure,c);var d=b.getBoundingClientRect(),e=(d.right-d.left)/10;return e>2&&(a.cachedCharWidth=e),e||10}function xc(a){a.curOp={viewChanged:!1,startHeight:a.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,id:++wc},ig++||(hg=[])}function yc(a){var b=a.curOp,c=a.doc,d=a.display;if(a.curOp=null,b.updateMaxLine&&L(a),b.viewChanged||b.forceUpdate||null!=b.scrollTop||b.scrollToPos&&(b.scrollToPos.from.line<d.viewFrom||b.scrollToPos.to.line>=d.viewTo)||d.maxLineChanged&&a.options.lineWrapping){var e=U(a,{top:b.scrollTop,ensure:b.scrollToPos},b.forceUpdate);a.display.scroller.offsetHeight&&(a.doc.scrollTop=a.display.scroller.scrollTop)}if(!e&&b.selectionChanged&&Ob(a),e||b.startHeight==a.doc.height||O(a),null!=b.scrollTop&&d.scroller.scrollTop!=b.scrollTop){var f=Math.max(0,Math.min(d.scroller.scrollHeight-d.scroller.clientHeight,b.scrollTop));d.scroller.scrollTop=d.scrollbarV.scrollTop=c.scrollTop=f}if(null!=b.scrollLeft&&d.scroller.scrollLeft!=b.scrollLeft){var g=Math.max(0,Math.min(d.scroller.scrollWidth-d.scroller.clientWidth,b.scrollLeft));d.scroller.scrollLeft=d.scrollbarH.scrollLeft=c.scrollLeft=g,Q(a)}if(b.scrollToPos){var h=Nd(a,xb(a.doc,b.scrollToPos.from),xb(a.doc,b.scrollToPos.to),b.scrollToPos.margin);b.scrollToPos.isCursor&&a.state.focused&&Md(a,h)}b.selectionChanged&&Rb(a),a.state.focused&&b.updateInput&&Pc(a,b.typing);var i=b.maybeHiddenMarkers,j=b.maybeUnhiddenMarkers;if(i)for(var k=0;k<i.length;++k)i[k].lines.length||gg(i[k],"hide");if(j)for(var k=0;k<j.length;++k)j[k].lines.length&&gg(j[k],"unhide");var l;if(--ig||(l=hg,hg=null),b.changeObjs&&gg(a,"changes",a,b.changeObjs),l)for(var k=0;k<l.length;++k)l[k]();if(b.cursorActivityHandlers)for(var k=0;k<b.cursorActivityHandlers.length;k++)b.cursorActivityHandlers[k](a)}function zc(a,b){if(a.curOp)return b();xc(a);try{return b()}finally{yc(a)}}function Ac(a,b){return function(){if(a.curOp)return b.apply(a,arguments);xc(a);try{return b.apply(a,arguments)}finally{yc(a)}}}function Bc(a){return function(){if(this.curOp)return a.apply(this,arguments);xc(this);try{return a.apply(this,arguments)}finally{yc(this)}}}function Cc(a){return function(){var b=this.cm;if(!b||b.curOp)return a.apply(this,arguments);xc(b);try{return a.apply(this,arguments)}finally{yc(b)
}}}function Dc(a,b,c){this.line=b,this.rest=Re(b),this.size=this.rest?Hf(zg(this.rest))-c+1:1,this.node=this.text=null,this.hidden=Ue(a,b)}function Ec(a,b,c){for(var e,d=[],f=b;c>f;f=e){var g=new Dc(a.doc,Df(a.doc,f),f);e=f+g.size,d.push(g)}return d}function Fc(a,b,c,d){null==b&&(b=a.doc.first),null==c&&(c=a.doc.first+a.doc.size),d||(d=0);var e=a.display;if(d&&c<e.viewTo&&(null==e.updateLineNumbers||e.updateLineNumbers>b)&&(e.updateLineNumbers=b),a.curOp.viewChanged=!0,b>=e.viewTo)x&&Se(a.doc,b)<e.viewTo&&Hc(a);else if(c<=e.viewFrom)x&&Te(a.doc,c+d)>e.viewFrom?Hc(a):(e.viewFrom+=d,e.viewTo+=d);else if(b<=e.viewFrom&&c>=e.viewTo)Hc(a);else if(b<=e.viewFrom){var f=Jc(a,c,c+d,1);f?(e.view=e.view.slice(f.index),e.viewFrom=f.lineN,e.viewTo+=d):Hc(a)}else if(c>=e.viewTo){var f=Jc(a,b,b,-1);f?(e.view=e.view.slice(0,f.index),e.viewTo=f.lineN):Hc(a)}else{var g=Jc(a,b,b,-1),h=Jc(a,c,c+d,1);g&&h?(e.view=e.view.slice(0,g.index).concat(Ec(a,g.lineN,h.lineN)).concat(e.view.slice(h.index)),e.viewTo+=d):Hc(a)}var i=e.externalMeasured;i&&(c<i.lineN?i.lineN+=d:b<i.lineN+i.size&&(e.externalMeasured=null))}function Gc(a,b,c){a.curOp.viewChanged=!0;var d=a.display,e=a.display.externalMeasured;if(e&&b>=e.lineN&&b<e.lineN+e.size&&(d.externalMeasured=null),!(b<d.viewFrom||b>=d.viewTo)){var f=d.view[Ic(a,b)];if(null!=f.node){var g=f.changes||(f.changes=[]);-1==Bg(g,c)&&g.push(c)}}}function Hc(a){a.display.viewFrom=a.display.viewTo=a.doc.first,a.display.view=[],a.display.viewOffset=0}function Ic(a,b){if(b>=a.display.viewTo)return null;if(b-=a.display.viewFrom,0>b)return null;for(var c=a.display.view,d=0;d<c.length;d++)if(b-=c[d].size,0>b)return d}function Jc(a,b,c,d){var f,e=Ic(a,b),g=a.display.view;if(!x)return{index:e,lineN:c};for(var h=0,i=a.display.viewFrom;e>h;h++)i+=g[h].size;if(i!=b){if(d>0){if(e==g.length-1)return null;f=i+g[e].size-b,e++}else f=i-b;b+=f,c+=f}for(;Se(a.doc,c)!=c;){if(e==(0>d?0:g.length-1))return null;c+=d*g[e-(0>d?1:0)].size,e+=d}return{index:e,lineN:c}}function Kc(a,b,c){var d=a.display,e=d.view;0==e.length||b>=d.viewTo||c<=d.viewFrom?(d.view=Ec(a,b,c),d.viewFrom=b):(d.viewFrom>b?d.view=Ec(a,b,d.viewFrom).concat(d.view):d.viewFrom<b&&(d.view=d.view.slice(Ic(a,b))),d.viewFrom=b,d.viewTo<c?d.view=d.view.concat(Ec(a,d.viewTo,c)):d.viewTo>c&&(d.view=d.view.slice(0,Ic(a,c)))),d.viewTo=c}function Lc(a){for(var b=a.display.view,c=0,d=0;d<b.length;d++){var e=b[d];e.hidden||e.node&&!e.changes||++c}return c}function Mc(a){a.display.pollingFast||a.display.poll.set(a.options.pollInterval,function(){Oc(a),a.state.focused&&Mc(a)})}function Nc(a){function c(){var d=Oc(a);d||b?(a.display.pollingFast=!1,Mc(a)):(b=!0,a.display.poll.set(60,c))}var b=!1;a.display.pollingFast=!0,a.display.poll.set(20,c)}function Oc(a){var b=a.display.input,c=a.display.prevInput,e=a.doc;if(!a.state.focused||fh(b)&&!c||Sc(a)||a.options.disableInput)return!1;a.state.pasteIncoming&&a.state.fakedLastChar&&(b.value=b.value.substring(0,b.value.length-1),a.state.fakedLastChar=!1);var f=b.value;if(f==c&&!a.somethingSelected())return!1;if(g&&!d&&a.display.inputHasSelection===f)return Pc(a),!1;var h=!a.curOp;h&&xc(a),a.display.shift=!1,8203!=f.charCodeAt(0)||e.sel!=a.display.selForContextMenu||c||(c="\u200b");for(var i=0,j=Math.min(c.length,f.length);j>i&&c.charCodeAt(i)==f.charCodeAt(i);)++i;for(var k=f.slice(i),l=eh(k),m=a.state.pasteIncoming&&l.length>1&&e.sel.ranges.length==l.length,n=e.sel.ranges.length-1;n>=0;n--){var o=e.sel.ranges[n],p=o.from(),q=o.to();i<c.length?p=nb(p.line,p.ch-(c.length-i)):a.state.overwrite&&o.empty()&&!a.state.pasteIncoming&&(q=nb(q.line,Math.min(Df(e,q.line).text.length,q.ch+zg(l).length)));var r=a.curOp.updateInput,s={from:p,to:q,text:m?[l[n]]:l,origin:a.state.pasteIncoming?"paste":a.state.cutIncoming?"cut":"+input"};if(Fd(a.doc,s),jg(a,"inputRead",a,s),k&&!a.state.pasteIncoming&&a.options.electricChars&&a.options.smartIndent&&o.head.ch<100&&(!n||e.sel.ranges[n-1].head.line!=o.head.line)){var t=a.getModeAt(o.head);if(t.electricChars){for(var u=0;u<t.electricChars.length;u++)if(k.indexOf(t.electricChars.charAt(u))>-1){Td(a,o.head.line,"smart");break}}else if(t.electricInput){var v=zd(s);t.electricInput.test(Df(e,v.line).text.slice(0,v.ch))&&Td(a,o.head.line,"smart")}}}return Rd(a),a.curOp.updateInput=r,a.curOp.typing=!0,f.length>1e3||f.indexOf("\n")>-1?b.value=a.display.prevInput="":a.display.prevInput=f,h&&yc(a),a.state.pasteIncoming=a.state.cutIncoming=!1,!0}function Pc(a,b){var c,e,f=a.doc;if(a.somethingSelected()){a.display.prevInput="";var h=f.sel.primary();c=gh&&(h.to().line-h.from().line>100||(e=a.getSelection()).length>1e3);var i=c?"-":e||a.getSelection();a.display.input.value=i,a.state.focused&&Ag(a.display.input),g&&!d&&(a.display.inputHasSelection=i)}else b||(a.display.prevInput=a.display.input.value="",g&&!d&&(a.display.inputHasSelection=null));a.display.inaccurateSelection=c}function Qc(a){"nocursor"==a.options.readOnly||q&&Qg()==a.display.input||a.display.input.focus()}function Rc(a){a.state.focused||(Qc(a),vd(a))}function Sc(a){return a.options.readOnly||a.doc.cantEdit}function Tc(a){function e(){a.state.focused&&setTimeout(Fg(Qc,a),0)}function f(b){lg(a,b)||bg(b)}function i(b){if(a.somethingSelected())c.inaccurateSelection&&(c.prevInput="",c.inaccurateSelection=!1,c.input.value=a.getSelection(),Ag(c.input));else{for(var d="",e=[],f=0;f<a.doc.sel.ranges.length;f++){var g=a.doc.sel.ranges[f].head.line,h={anchor:nb(g,0),head:nb(g+1,0)};e.push(h),d+=a.getRange(h.anchor,h.head)}"cut"==b.type?a.setSelections(e,null,rg):(c.prevInput="",c.input.value=d,Ag(c.input))}"cut"==b.type&&(a.state.cutIncoming=!0)}var c=a.display;eg(c.scroller,"mousedown",Ac(a,Xc)),b?eg(c.scroller,"dblclick",Ac(a,function(b){if(!lg(a,b)){var c=Wc(a,b);if(c&&!cd(a,b)&&!Vc(a.display,b)){$f(b);var d=Yd(a.doc,c);Cb(a.doc,d.anchor,d.head)}}})):eg(c.scroller,"dblclick",function(b){lg(a,b)||$f(b)}),eg(c.lineSpace,"selectstart",function(a){Vc(c,a)||$f(a)}),v||eg(c.scroller,"contextmenu",function(b){xd(a,b)}),eg(c.scroller,"scroll",function(){c.scroller.clientHeight&&(gd(a,c.scroller.scrollTop),hd(a,c.scroller.scrollLeft,!0),gg(a,"scroll",a))}),eg(c.scrollbarV,"scroll",function(){c.scroller.clientHeight&&gd(a,c.scrollbarV.scrollTop)}),eg(c.scrollbarH,"scroll",function(){c.scroller.clientHeight&&hd(a,c.scrollbarH.scrollLeft)}),eg(c.scroller,"mousewheel",function(b){kd(a,b)}),eg(c.scroller,"DOMMouseScroll",function(b){kd(a,b)}),eg(c.scrollbarH,"mousedown",e),eg(c.scrollbarV,"mousedown",e),eg(c.wrapper,"scroll",function(){c.wrapper.scrollTop=c.wrapper.scrollLeft=0}),eg(c.input,"keyup",Ac(a,td)),eg(c.input,"input",function(){g&&!d&&a.display.inputHasSelection&&(a.display.inputHasSelection=null),Nc(a)}),eg(c.input,"keydown",Ac(a,rd)),eg(c.input,"keypress",Ac(a,ud)),eg(c.input,"focus",Fg(vd,a)),eg(c.input,"blur",Fg(wd,a)),a.options.dragDrop&&(eg(c.scroller,"dragstart",function(b){fd(a,b)}),eg(c.scroller,"dragenter",f),eg(c.scroller,"dragover",f),eg(c.scroller,"drop",Ac(a,ed))),eg(c.scroller,"paste",function(b){Vc(c,b)||(a.state.pasteIncoming=!0,Qc(a),Nc(a))}),eg(c.input,"paste",function(){if(h&&!a.state.fakedLastChar&&!(new Date-a.state.lastMiddleDown<200)){var b=c.input.selectionStart,d=c.input.selectionEnd;c.input.value+="$",c.input.selectionStart=b,c.input.selectionEnd=d,a.state.fakedLastChar=!0}a.state.pasteIncoming=!0,Nc(a)}),eg(c.input,"cut",i),eg(c.input,"copy",i),m&&eg(c.sizer,"mouseup",function(){Qg()==c.input&&c.input.blur(),Qc(a)})}function Uc(a){var b=a.display;b.cachedCharWidth=b.cachedTextHeight=b.cachedPaddingH=null,a.setSize()}function Vc(a,b){for(var c=cg(b);c!=a.wrapper;c=c.parentNode)if(!c||c.ignoreEvents||c.parentNode==a.sizer&&c!=a.mover)return!0}function Wc(a,b,c,d){var e=a.display;if(!c){var f=cg(b);if(f==e.scrollbarH||f==e.scrollbarV||f==e.scrollbarFiller||f==e.gutterFiller)return null}var g,h,i=e.lineSpace.getBoundingClientRect();try{g=b.clientX-i.left,h=b.clientY-i.top}catch(b){return null}var k,j=rc(a,g,h);if(d&&1==j.xRel&&(k=Df(a.doc,j.line).text).length==j.ch){var l=vg(k,k.length,a.options.tabSize)-k.length;j=nb(j.line,Math.max(0,Math.round((g-Yb(a.display).left)/vc(a.display))-l))}return j}function Xc(a){if(!lg(this,a)){var b=this,c=b.display;if(c.shift=a.shiftKey,Vc(c,a))return h||(c.scroller.draggable=!1,setTimeout(function(){c.scroller.draggable=!0},100)),void 0;if(!cd(b,a)){var d=Wc(b,a);switch(window.focus(),dg(a)){case 1:d?$c(b,a,d):cg(a)==c.scroller&&$f(a);break;case 2:h&&(b.state.lastMiddleDown=+new Date),d&&Cb(b.doc,d),setTimeout(Fg(Qc,b),20),$f(a);break;case 3:v&&xd(b,a)}}}}function $c(a,b,c){setTimeout(Fg(Rc,a),0);var e,d=+new Date;Zc&&Zc.time>d-400&&0==ob(Zc.pos,c)?e="triple":Yc&&Yc.time>d-400&&0==ob(Yc.pos,c)?(e="double",Zc={time:d,pos:c}):(e="single",Yc={time:d,pos:c});var f=a.doc.sel,g=r?b.metaKey:b.ctrlKey;a.options.dragDrop&&Zg&&!g&&!Sc(a)&&"single"==e&&f.contains(c)>-1&&f.somethingSelected()?_c(a,b,c):ad(a,b,c,e,g)}function _c(a,c,e){var f=a.display,g=Ac(a,function(i){h&&(f.scroller.draggable=!1),a.state.draggingText=!1,fg(document,"mouseup",g),fg(f.scroller,"drop",g),Math.abs(c.clientX-i.clientX)+Math.abs(c.clientY-i.clientY)<10&&($f(i),Cb(a.doc,e),Qc(a),b&&!d&&setTimeout(function(){document.body.focus(),Qc(a)},20))});h&&(f.scroller.draggable=!0),a.state.draggingText=g,f.scroller.dragDrop&&f.scroller.dragDrop(),eg(document,"mouseup",g),eg(f.scroller,"drop",g)}function ad(a,b,c,d,f){function p(b){if(0!=ob(o,b))if(o=b,"rect"==d){for(var e=[],f=a.options.tabSize,g=vg(Df(i,c.line).text,c.ch,f),h=vg(Df(i,b.line).text,b.ch,f),m=Math.min(g,h),n=Math.max(g,h),p=Math.min(c.line,b.line),q=Math.min(a.lastLine(),Math.max(c.line,b.line));q>=p;p++){var r=Df(i,p).text,s=wg(r,m,f);m==n?e.push(new tb(nb(p,s),nb(p,s))):r.length>s&&e.push(new tb(nb(p,s),nb(p,wg(r,n,f))))}e.length||e.push(new tb(c,c)),Ib(i,ub(l.ranges.slice(0,k).concat(e),k),sg)}else{var t=j,u=t.anchor,v=b;if("single"!=d){if("double"==d)var w=Yd(i,b);else var w=new tb(nb(b.line,0),xb(i,nb(b.line+1,0)));ob(w.anchor,u)>0?(v=w.head,u=rb(t.from(),w.anchor)):(v=w.anchor,u=qb(t.to(),w.head))}var e=l.ranges.slice(0);e[k]=new tb(xb(i,u),v),Ib(i,ub(e,k),sg)}}function s(b){var c=++r,e=Wc(a,b,!0,"rect"==d);if(e)if(0!=ob(e,o)){Rc(a),p(e);var f=P(h,i);(e.line>=f.to||e.line<f.from)&&setTimeout(Ac(a,function(){r==c&&s(b)}),150)}else{var g=b.clientY<q.top?-20:b.clientY>q.bottom?20:0;g&&setTimeout(Ac(a,function(){r==c&&(h.scroller.scrollTop+=g,s(b))}),50)}}function t(b){r=1/0,$f(b),Qc(a),fg(document,"mousemove",u),fg(document,"mouseup",v),i.history.lastSelOrigin=null}var h=a.display,i=a.doc;$f(b);var j,k,l=i.sel;if(f&&!b.shiftKey?(k=i.sel.contains(c),j=k>-1?i.sel.ranges[k]:new tb(c,c)):j=i.sel.primary(),b.altKey)d="rect",f||(j=new tb(c,c)),c=Wc(a,b,!0,!0),k=-1;else if("double"==d){var m=Yd(i,c);j=a.display.shift||i.extend?Bb(i,j,m.anchor,m.head):m}else if("triple"==d){var n=new tb(nb(c.line,0),xb(i,nb(c.line+1,0)));j=a.display.shift||i.extend?Bb(i,j,n.anchor,n.head):n}else j=Bb(i,j,c);f?k>-1?Eb(i,k,j,sg):(k=i.sel.ranges.length,Ib(i,ub(i.sel.ranges.concat([j]),k),{scroll:!1,origin:"*mouse"})):(k=0,Ib(i,new sb([j],0),sg),l=i.sel);var o=c,q=h.wrapper.getBoundingClientRect(),r=0,u=Ac(a,function(a){(g&&!e?a.buttons:dg(a))?s(a):t(a)}),v=Ac(a,t);eg(document,"mousemove",u),eg(document,"mouseup",v)}function bd(a,b,c,d,e){try{var f=b.clientX,g=b.clientY}catch(b){return!1}if(f>=Math.floor(a.display.gutters.getBoundingClientRect().right))return!1;d&&$f(b);var h=a.display,i=h.lineDiv.getBoundingClientRect();if(g>i.bottom||!ng(a,c))return ag(b);g-=i.top-h.viewOffset;for(var j=0;j<a.options.gutters.length;++j){var k=h.gutters.childNodes[j];if(k&&k.getBoundingClientRect().right>=f){var l=If(a.doc,g),m=a.options.gutters[j];return e(a,c,a,l,m,b),ag(b)}}}function cd(a,b){return bd(a,b,"gutterClick",!0,jg)}function ed(a){var b=this;if(!lg(b,a)&&!Vc(b.display,a)){$f(a),g&&(dd=+new Date);var c=Wc(b,a,!0),d=a.dataTransfer.files;if(c&&!Sc(b))if(d&&d.length&&window.FileReader&&window.File)for(var e=d.length,f=Array(e),h=0,i=function(a,d){var g=new FileReader;g.onload=Ac(b,function(){if(f[d]=g.result,++h==e){c=xb(b.doc,c);var a={from:c,to:c,text:eh(f.join("\n")),origin:"paste"};Fd(b.doc,a),Hb(b.doc,vb(c,zd(a)))}}),g.readAsText(a)},j=0;e>j;++j)i(d[j],j);else{if(b.state.draggingText&&b.doc.sel.contains(c)>-1)return b.state.draggingText(a),setTimeout(Fg(Qc,b),20),void 0;try{var f=a.dataTransfer.getData("Text");if(f){var k=b.state.draggingText&&b.listSelections();if(Jb(b.doc,vb(c,c)),k)for(var j=0;j<k.length;++j)Ld(b.doc,"",k[j].anchor,k[j].head,"drag");b.replaceSelection(f,"around","paste"),Qc(b)}}catch(a){}}}}function fd(a,b){if(g&&(!a.state.draggingText||+new Date-dd<100))return bg(b),void 0;if(!lg(a,b)&&!Vc(a.display,b)&&(b.dataTransfer.setData("Text",a.getSelection()),b.dataTransfer.setDragImage&&!l)){var c=Lg("img",null,null,"position: fixed; left: 0; top: 0;");c.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",k&&(c.width=c.height=1,a.display.wrapper.appendChild(c),c._top=c.offsetTop),b.dataTransfer.setDragImage(c,0,0),k&&c.parentNode.removeChild(c)}}function gd(b,c){Math.abs(b.doc.scrollTop-c)<2||(b.doc.scrollTop=c,a||U(b,{top:c}),b.display.scroller.scrollTop!=c&&(b.display.scroller.scrollTop=c),b.display.scrollbarV.scrollTop!=c&&(b.display.scrollbarV.scrollTop=c),a&&U(b),Sb(b,100))}function hd(a,b,c){(c?b==a.doc.scrollLeft:Math.abs(a.doc.scrollLeft-b)<2)||(b=Math.min(b,a.display.scroller.scrollWidth-a.display.scroller.clientWidth),a.doc.scrollLeft=b,Q(a),a.display.scroller.scrollLeft!=b&&(a.display.scroller.scrollLeft=b),a.display.scrollbarH.scrollLeft!=b&&(a.display.scrollbarH.scrollLeft=b))}function kd(b,c){var d=c.wheelDeltaX,e=c.wheelDeltaY;null==d&&c.detail&&c.axis==c.HORIZONTAL_AXIS&&(d=c.detail),null==e&&c.detail&&c.axis==c.VERTICAL_AXIS?e=c.detail:null==e&&(e=c.wheelDelta);var f=b.display,g=f.scroller;if(d&&g.scrollWidth>g.clientWidth||e&&g.scrollHeight>g.clientHeight){if(e&&r&&h)a:for(var i=c.target,j=f.view;i!=g;i=i.parentNode)for(var l=0;l<j.length;l++)if(j[l].node==i){b.display.currentWheelTarget=i;break a}if(d&&!a&&!k&&null!=jd)return e&&gd(b,Math.max(0,Math.min(g.scrollTop+e*jd,g.scrollHeight-g.clientHeight))),hd(b,Math.max(0,Math.min(g.scrollLeft+d*jd,g.scrollWidth-g.clientWidth))),$f(c),f.wheelStartX=null,void 0;if(e&&null!=jd){var m=e*jd,n=b.doc.scrollTop,o=n+f.wrapper.clientHeight;0>m?n=Math.max(0,n+m-50):o=Math.min(b.doc.height,o+m+50),U(b,{top:n,bottom:o})}20>id&&(null==f.wheelStartX?(f.wheelStartX=g.scrollLeft,f.wheelStartY=g.scrollTop,f.wheelDX=d,f.wheelDY=e,setTimeout(function(){if(null!=f.wheelStartX){var a=g.scrollLeft-f.wheelStartX,b=g.scrollTop-f.wheelStartY,c=b&&f.wheelDY&&b/f.wheelDY||a&&f.wheelDX&&a/f.wheelDX;f.wheelStartX=f.wheelStartY=null,c&&(jd=(jd*id+c)/(id+1),++id)}},200)):(f.wheelDX+=d,f.wheelDY+=e))}}function ld(a,b,c){if("string"==typeof b&&(b=ie[b],!b))return!1;a.display.pollingFast&&Oc(a)&&(a.display.pollingFast=!1);var d=a.display.shift,e=!1;try{Sc(a)&&(a.state.suppressEdits=!0),c&&(a.display.shift=!1),e=b(a)!=qg}finally{a.display.shift=d,a.state.suppressEdits=!1}return e}function md(a){var b=a.state.keyMaps.slice(0);return a.options.extraKeys&&b.push(a.options.extraKeys),b.push(a.options.keyMap),b}function od(a,b){var c=ke(a.options.keyMap),d=c.auto;clearTimeout(nd),d&&!me(b)&&(nd=setTimeout(function(){ke(a.options.keyMap)==c&&(a.options.keyMap=d.call?d.call(null,a):d,F(a))},50));var e=ne(b,!0),f=!1;if(!e)return!1;var g=md(a);return f=b.shiftKey?le("Shift-"+e,g,function(b){return ld(a,b,!0)})||le(e,g,function(b){return("string"==typeof b?/^go[A-Z]/.test(b):b.motion)?ld(a,b):void 0}):le(e,g,function(b){return ld(a,b)}),f&&($f(b),Rb(a),jg(a,"keyHandled",a,e,b)),f}function pd(a,b,c){var d=le("'"+c+"'",md(a),function(b){return ld(a,b,!0)});return d&&($f(b),Rb(a),jg(a,"keyHandled",a,"'"+c+"'",b)),d}function rd(a){var c=this;if(Rc(c),!lg(c,a)){b&&27==a.keyCode&&(a.returnValue=!1);var d=a.keyCode;c.display.shift=16==d||a.shiftKey;var e=od(c,a);k&&(qd=e?d:null,!e&&88==d&&!gh&&(r?a.metaKey:a.ctrlKey)&&c.replaceSelection("",null,"cut")),18!=d||/\bCodeMirror-crosshair\b/.test(c.display.lineDiv.className)||sd(c)}}function sd(a){function c(a){18!=a.keyCode&&a.altKey||(Sg(b,"CodeMirror-crosshair"),fg(document,"keyup",c),fg(document,"mouseover",c))}var b=a.display.lineDiv;Tg(b,"CodeMirror-crosshair"),eg(document,"keyup",c),eg(document,"mouseover",c)}function td(a){lg(this,a)||16==a.keyCode&&(this.doc.sel.shift=!1)}function ud(a){var b=this;if(!lg(b,a)){var c=a.keyCode,e=a.charCode;if(k&&c==qd)return qd=null,$f(a),void 0;if(!(k&&(!a.which||a.which<10)||m)||!od(b,a)){var f=String.fromCharCode(null==e?c:e);pd(b,a,f)||(g&&!d&&(b.display.inputHasSelection=null),Nc(b))}}}function vd(a){"nocursor"!=a.options.readOnly&&(a.state.focused||(gg(a,"focus",a),a.state.focused=!0,Tg(a.display.wrapper,"CodeMirror-focused"),a.curOp||a.display.selForContextMenu==a.doc.sel||(Pc(a),h&&setTimeout(Fg(Pc,a,!0),0))),Mc(a),Rb(a))}function wd(a){a.state.focused&&(gg(a,"blur",a),a.state.focused=!1,Sg(a.display.wrapper,"CodeMirror-focused")),clearInterval(a.display.blinker),setTimeout(function(){a.state.focused||(a.display.shift=!1)},150)}function xd(a,b){function j(){if(null!=c.input.selectionStart){var b=a.somethingSelected(),d=c.input.value="\u200b"+(b?c.input.value:"");c.prevInput=b?"":"\u200b",c.input.selectionStart=1,c.input.selectionEnd=d.length}}function l(){if(c.inputDiv.style.position="relative",c.input.style.cssText=i,d&&(c.scrollbarV.scrollTop=c.scroller.scrollTop=f),Mc(a),null!=c.input.selectionStart){(!g||d)&&j();var b=0,e=function(){c.selForContextMenu==a.doc.sel&&0==c.input.selectionStart?Ac(a,ie.selectAll)(a):b++<10?c.detectingSelectAll=setTimeout(e,500):Pc(a)};c.detectingSelectAll=setTimeout(e,200)}}if(!lg(a,b,"contextmenu")){var c=a.display;if(!Vc(c,b)&&!yd(a,b)){var e=Wc(a,b),f=c.scroller.scrollTop;if(e&&!k){var h=a.options.resetSelectionOnContextMenu;h&&-1==a.doc.sel.contains(e)&&Ac(a,Ib)(a.doc,vb(e),rg);var i=c.input.style.cssText;if(c.inputDiv.style.position="absolute",c.input.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(b.clientY-5)+"px; left: "+(b.clientX-5)+"px; z-index: 1000; background: "+(g?"rgba(255, 255, 255, .05)":"transparent")+"; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",Qc(a),Pc(a),a.somethingSelected()||(c.input.value=c.prevInput=" "),c.selForContextMenu=a.doc.sel,clearTimeout(c.detectingSelectAll),g&&!d&&j(),v){bg(b);var m=function(){fg(window,"mouseup",m),setTimeout(l,20)};eg(window,"mouseup",m)}else setTimeout(l,50)}}}}function yd(a,b){return ng(a,"gutterContextMenu")?bd(a,b,"gutterContextMenu",!1,gg):!1}function Ad(a,b){if(ob(a,b.from)<0)return a;if(ob(a,b.to)<=0)return zd(b);var c=a.line+b.text.length-(b.to.line-b.from.line)-1,d=a.ch;return a.line==b.to.line&&(d+=zd(b).ch-b.to.ch),nb(c,d)}function Bd(a,b){for(var c=[],d=0;d<a.sel.ranges.length;d++){var e=a.sel.ranges[d];c.push(new tb(Ad(e.anchor,b),Ad(e.head,b)))}return ub(c,a.sel.primIndex)}function Cd(a,b,c){return a.line==b.line?nb(c.line,a.ch-b.ch+c.ch):nb(c.line+(a.line-b.line),a.ch)}function Dd(a,b,c){for(var d=[],e=nb(a.first,0),f=e,g=0;g<b.length;g++){var h=b[g],i=Cd(h.from,e,f),j=Cd(zd(h),e,f);if(e=h.to,f=j,"around"==c){var k=a.sel.ranges[g],l=ob(k.head,k.anchor)<0;d[g]=new tb(l?j:i,l?i:j)}else d[g]=new tb(i,i)}return new sb(d,a.sel.primIndex)}function Ed(a,b,c){var d={canceled:!1,from:b.from,to:b.to,text:b.text,origin:b.origin,cancel:function(){this.canceled=!0}};return c&&(d.update=function(b,c,d,e){b&&(this.from=xb(a,b)),c&&(this.to=xb(a,c)),d&&(this.text=d),void 0!==e&&(this.origin=e)}),gg(a,"beforeChange",a,d),a.cm&&gg(a.cm,"beforeChange",a.cm,d),d.canceled?null:{from:d.from,to:d.to,text:d.text,origin:d.origin}}function Fd(a,b,c){if(a.cm){if(!a.cm.curOp)return Ac(a.cm,Fd)(a,b,c);if(a.cm.state.suppressEdits)return}if(!(ng(a,"beforeChange")||a.cm&&ng(a.cm,"beforeChange"))||(b=Ed(a,b,!0))){var d=w&&!c&&Ge(a,b.from,b.to);if(d)for(var e=d.length-1;e>=0;--e)Gd(a,{from:d[e].from,to:d[e].to,text:e?[""]:b.text});else Gd(a,b)}}function Gd(a,b){if(1!=b.text.length||""!=b.text[0]||0!=ob(b.from,b.to)){var c=Bd(a,b);Pf(a,b,c,a.cm?a.cm.curOp.id:0/0),Jd(a,b,c,De(a,b));var d=[];Bf(a,function(a,c){c||-1!=Bg(d,a.history)||(Zf(a.history,b),d.push(a.history)),Jd(a,b,null,De(a,b))})}}function Hd(a,b,c){if(!a.cm||!a.cm.state.suppressEdits){for(var e,d=a.history,f=a.sel,g="undo"==b?d.done:d.undone,h="undo"==b?d.undone:d.done,i=0;i<g.length&&(e=g[i],c?!e.ranges||e.equals(a.sel):e.ranges);i++);if(i!=g.length){for(d.lastOrigin=d.lastSelOrigin=null;e=g.pop(),e.ranges;){if(Sf(e,h),c&&!e.equals(a.sel))return Ib(a,e,{clearRedo:!1}),void 0;f=e}var j=[];Sf(f,h),h.push({changes:j,generation:d.generation}),d.generation=e.generation||++d.maxGeneration;for(var k=ng(a,"beforeChange")||a.cm&&ng(a.cm,"beforeChange"),i=e.changes.length-1;i>=0;--i){var l=e.changes[i];if(l.origin=b,k&&!Ed(a,l,!1))return g.length=0,void 0;j.push(Mf(a,l));var m=i?Bd(a,l,null):zg(g);Jd(a,l,m,Fe(a,l)),!i&&a.cm&&a.cm.scrollIntoView(l);var n=[];Bf(a,function(a,b){b||-1!=Bg(n,a.history)||(Zf(a.history,l),n.push(a.history)),Jd(a,l,null,Fe(a,l))})}}}}function Id(a,b){if(0!=b&&(a.first+=b,a.sel=new sb(Cg(a.sel.ranges,function(a){return new tb(nb(a.anchor.line+b,a.anchor.ch),nb(a.head.line+b,a.head.ch))}),a.sel.primIndex),a.cm)){Fc(a.cm,a.first,a.first-b,b);for(var c=a.cm.display,d=c.viewFrom;d<c.viewTo;d++)Gc(a.cm,d,"gutter")}}function Jd(a,b,c,d){if(a.cm&&!a.cm.curOp)return Ac(a.cm,Jd)(a,b,c,d);if(b.to.line<a.first)return Id(a,b.text.length-1-(b.to.line-b.from.line)),void 0;if(!(b.from.line>a.lastLine())){if(b.from.line<a.first){var e=b.text.length-1-(a.first-b.from.line);Id(a,e),b={from:nb(a.first,0),to:nb(b.to.line+e,b.to.ch),text:[zg(b.text)],origin:b.origin}}var f=a.lastLine();b.to.line>f&&(b={from:b.from,to:nb(f,Df(a,f).text.length),text:[b.text[0]],origin:b.origin}),b.removed=Ef(a,b.from,b.to),c||(c=Bd(a,b,null)),a.cm?Kd(a.cm,b,d):uf(a,b,d),Jb(a,c,rg)}}function Kd(a,b,c){var d=a.doc,e=a.display,f=b.from,g=b.to,h=!1,i=f.line;a.options.lineWrapping||(i=Hf(Qe(Df(d,f.line))),d.iter(i,g.line+1,function(a){return a==e.maxLine?(h=!0,!0):void 0})),d.sel.contains(b.from,b.to)>-1&&mg(a),uf(d,b,c,D(a)),a.options.lineWrapping||(d.iter(i,f.line+b.text.length,function(a){var b=K(a);b>e.maxLineLength&&(e.maxLine=a,e.maxLineLength=b,e.maxLineChanged=!0,h=!1)}),h&&(a.curOp.updateMaxLine=!0)),d.frontier=Math.min(d.frontier,f.line),Sb(a,400);var j=b.text.length-(g.line-f.line)-1;f.line!=g.line||1!=b.text.length||tf(a.doc,b)?Fc(a,f.line,g.line+1,j):Gc(a,f.line,"text");var k=ng(a,"changes"),l=ng(a,"change");if(l||k){var m={from:f,to:g,text:b.text,removed:b.removed,origin:b.origin};l&&jg(a,"change",a,m),k&&(a.curOp.changeObjs||(a.curOp.changeObjs=[])).push(m)}a.display.selForContextMenu=null}function Ld(a,b,c,d,e){if(d||(d=c),ob(d,c)<0){var f=d;d=c,c=f}"string"==typeof b&&(b=eh(b)),Fd(a,{from:c,to:d,text:b,origin:e})}function Md(a,b){var c=a.display,d=c.sizer.getBoundingClientRect(),e=null;if(b.top+d.top<0?e=!0:b.bottom+d.top>(window.innerHeight||document.documentElement.clientHeight)&&(e=!1),null!=e&&!o){var f=Lg("div","\u200b",null,"position: absolute; top: "+(b.top-c.viewOffset-Wb(a.display))+"px; height: "+(b.bottom-b.top+pg)+"px; left: "+b.left+"px; width: 2px;");a.display.lineSpace.appendChild(f),f.scrollIntoView(e),a.display.lineSpace.removeChild(f)}}function Nd(a,b,c,d){for(null==d&&(d=0);;){var e=!1,f=oc(a,b),g=c&&c!=b?oc(a,c):f,h=Pd(a,Math.min(f.left,g.left),Math.min(f.top,g.top)-d,Math.max(f.left,g.left),Math.max(f.bottom,g.bottom)+d),i=a.doc.scrollTop,j=a.doc.scrollLeft;if(null!=h.scrollTop&&(gd(a,h.scrollTop),Math.abs(a.doc.scrollTop-i)>1&&(e=!0)),null!=h.scrollLeft&&(hd(a,h.scrollLeft),Math.abs(a.doc.scrollLeft-j)>1&&(e=!0)),!e)return f}}function Od(a,b,c,d,e){var f=Pd(a,b,c,d,e);null!=f.scrollTop&&gd(a,f.scrollTop),null!=f.scrollLeft&&hd(a,f.scrollLeft)}function Pd(a,b,c,d,e){var f=a.display,g=uc(a.display);0>c&&(c=0);var h=a.curOp&&null!=a.curOp.scrollTop?a.curOp.scrollTop:f.scroller.scrollTop,i=f.scroller.clientHeight-pg,j={},k=a.doc.height+Xb(f),l=g>c,m=e>k-g;if(h>c)j.scrollTop=l?0:c;else if(e>h+i){var n=Math.min(c,(m?k:e)-i);n!=h&&(j.scrollTop=n)}var o=a.curOp&&null!=a.curOp.scrollLeft?a.curOp.scrollLeft:f.scroller.scrollLeft,p=f.scroller.clientWidth-pg;b+=f.gutters.offsetWidth,d+=f.gutters.offsetWidth;var q=f.gutters.offsetWidth,r=q+10>b;return o+q>b||r?(r&&(b=0),j.scrollLeft=Math.max(0,b-10-q)):d>p+o-3&&(j.scrollLeft=d+10-p),j}function Qd(a,b,c){(null!=b||null!=c)&&Sd(a),null!=b&&(a.curOp.scrollLeft=(null==a.curOp.scrollLeft?a.doc.scrollLeft:a.curOp.scrollLeft)+b),null!=c&&(a.curOp.scrollTop=(null==a.curOp.scrollTop?a.doc.scrollTop:a.curOp.scrollTop)+c)}function Rd(a){Sd(a);var b=a.getCursor(),c=b,d=b;a.options.lineWrapping||(c=b.ch?nb(b.line,b.ch-1):b,d=nb(b.line,b.ch+1)),a.curOp.scrollToPos={from:c,to:d,margin:a.options.cursorScrollMargin,isCursor:!0}}function Sd(a){var b=a.curOp.scrollToPos;if(b){a.curOp.scrollToPos=null;var c=pc(a,b.from),d=pc(a,b.to),e=Pd(a,Math.min(c.left,d.left),Math.min(c.top,d.top)-b.margin,Math.max(c.right,d.right),Math.max(c.bottom,d.bottom)+b.margin);a.scrollTo(e.scrollLeft,e.scrollTop)}}function Td(a,b,c,d){var f,e=a.doc;null==c&&(c="add"),"smart"==c&&(a.doc.mode.indent?f=Vb(a,b):c="prev");var g=a.options.tabSize,h=Df(e,b),i=vg(h.text,null,g);h.stateAfter&&(h.stateAfter=null);var k,j=h.text.match(/^\s*/)[0];if(d||/\S/.test(h.text)){if("smart"==c&&(k=a.doc.mode.indent(f,h.text.slice(j.length),h.text),k==qg)){if(!d)return;c="prev"}}else k=0,c="not";"prev"==c?k=b>e.first?vg(Df(e,b-1).text,null,g):0:"add"==c?k=i+a.options.indentUnit:"subtract"==c?k=i-a.options.indentUnit:"number"==typeof c&&(k=i+c),k=Math.max(0,k);var l="",m=0;if(a.options.indentWithTabs)for(var n=Math.floor(k/g);n;--n)m+=g,l+="	";if(k>m&&(l+=yg(k-m)),l!=j)Ld(a.doc,l,nb(b,0),nb(b,j.length),"+input");else for(var n=0;n<e.sel.ranges.length;n++){var o=e.sel.ranges[n];if(o.head.line==b&&o.head.ch<j.length){var m=nb(b,j.length);Eb(e,n,new tb(m,m));break}}h.stateAfter=null}function Ud(a,b,c,d){var e=b,f=b,g=a.doc;return"number"==typeof b?f=Df(g,wb(g,b)):e=Hf(b),null==e?null:(d(f,e)&&Gc(a,e,c),f)}function Vd(a,b){for(var c=a.doc.sel.ranges,d=[],e=0;e<c.length;e++){for(var f=b(c[e]);d.length&&ob(f.from,zg(d).to)<=0;){var g=d.pop();if(ob(g.from,f.from)<0){f.from=g.from;break}}d.push(f)}zc(a,function(){for(var b=d.length-1;b>=0;b--)Ld(a.doc,"",d[b].from,d[b].to,"+delete");Rd(a)})}function Wd(a,b,c,d,e){function k(){var b=f+c;return b<a.first||b>=a.first+a.size?j=!1:(f=b,i=Df(a,b))}function l(a){var b=(e?th:uh)(i,g,c,!0);if(null==b){if(a||!k())return j=!1;g=e?(0>c?mh:lh)(i):0>c?i.text.length:0}else g=b;return!0}var f=b.line,g=b.ch,h=c,i=Df(a,f),j=!0;if("char"==d)l();else if("column"==d)l(!0);else if("word"==d||"group"==d)for(var m=null,n="group"==d,o=!0;!(0>c)||l(!o);o=!1){var p=i.text.charAt(g)||"\n",q=Hg(p)?"w":n&&"\n"==p?"n":!n||/\s/.test(p)?null:"p";if(!n||o||q||(q="s"),m&&m!=q){0>c&&(c=1,l());break}if(q&&(m=q),c>0&&!l(!o))break}var r=Nb(a,nb(f,g),h,!0);return j||(r.hitSide=!0),r}function Xd(a,b,c,d){var g,e=a.doc,f=b.left;if("page"==d){var h=Math.min(a.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight);g=b.top+c*(h-(0>c?1.5:.5)*uc(a.display))}else"line"==d&&(g=c>0?b.bottom+3:b.top-3);for(;;){var i=rc(a,f,g);if(!i.outside)break;if(0>c?0>=g:g>=e.height){i.hitSide=!0;break}g+=5*c}return i}function Yd(a,b){var c=Df(a,b.line).text,d=b.ch,e=b.ch;if(c){(b.xRel<0||e==c.length)&&d?--d:++e;for(var f=c.charAt(d),g=Hg(f)?Hg:/\s/.test(f)?function(a){return/\s/.test(a)}:function(a){return!/\s/.test(a)&&!Hg(a)};d>0&&g(c.charAt(d-1));)--d;for(;e<c.length&&g(c.charAt(e));)++e}return new tb(nb(b.line,d),nb(b.line,e))}function _d(a,b,c,d){y.defaults[a]=b,c&&($d[a]=d?function(a,b,d){d!=ae&&c(a,b,d)}:c)}function ke(a){return"string"==typeof a?je[a]:a}function re(a,b,c,d,e){if(d&&d.shared)return te(a,b,c,d,e);if(a.cm&&!a.cm.curOp)return Ac(a.cm,re)(a,b,c,d,e);var f=new pe(a,e),g=ob(b,c);if(d&&Eg(d,f,!1),g>0||0==g&&f.clearWhenEmpty!==!1)return f;if(f.replacedWith&&(f.collapsed=!0,f.widgetNode=Lg("span",[f.replacedWith],"CodeMirror-widget"),d.handleMouseEvents||(f.widgetNode.ignoreEvents=!0),d.insertLeft&&(f.widgetNode.insertLeft=!0)),f.collapsed){if(Pe(a,b.line,b,c,f)||b.line!=c.line&&Pe(a,c.line,b,c,f))throw new Error("Inserting collapsed marker partially overlapping an existing one");x=!0}f.addToHistory&&Pf(a,{from:b,to:c,origin:"markText"},a.sel,0/0);var j,h=b.line,i=a.cm;if(a.iter(h,c.line+1,function(a){i&&f.collapsed&&!i.options.lineWrapping&&Qe(a)==i.display.maxLine&&(j=!0),f.collapsed&&h!=b.line&&Gf(a,0),Ae(a,new xe(f,h==b.line?b.ch:null,h==c.line?c.ch:null)),++h}),f.collapsed&&a.iter(b.line,c.line+1,function(b){Ue(a,b)&&Gf(b,0)}),f.clearOnEnter&&eg(f,"beforeCursorEnter",function(){f.clear()}),f.readOnly&&(w=!0,(a.history.done.length||a.history.undone.length)&&a.clearHistory()),f.collapsed&&(f.id=++qe,f.atomic=!0),i){if(j&&(i.curOp.updateMaxLine=!0),f.collapsed)Fc(i,b.line,c.line+1);else if(f.className||f.title||f.startStyle||f.endStyle)for(var k=b.line;k<=c.line;k++)Gc(i,k,"text");f.atomic&&Lb(i.doc),jg(i,"markerAdded",i,f)}return f}function te(a,b,c,d,e){d=Eg(d),d.shared=!1;var f=[re(a,b,c,d,e)],g=f[0],h=d.widgetNode;return Bf(a,function(a){h&&(d.widgetNode=h.cloneNode(!0)),f.push(re(a,xb(a,b),xb(a,c),d,e));for(var i=0;i<a.linked.length;++i)if(a.linked[i].isParent)return;g=zg(f)}),new se(f,g)}function ue(a){return a.findMarks(nb(a.first,0),a.clipPos(nb(a.lastLine())),function(a){return a.parent})}function ve(a,b){for(var c=0;c<b.length;c++){var d=b[c],e=d.find(),f=a.clipPos(e.from),g=a.clipPos(e.to);if(ob(f,g)){var h=re(a,f,g,d.primary,d.primary.type);d.markers.push(h),h.parent=d}}}function we(a){for(var b=0;b<a.length;b++){var c=a[b],d=[c.primary.doc];Bf(c.primary.doc,function(a){d.push(a)});for(var e=0;e<c.markers.length;e++){var f=c.markers[e];-1==Bg(d,f.doc)&&(f.parent=null,c.markers.splice(e--,1))}}}function xe(a,b,c){this.marker=a,this.from=b,this.to=c}function ye(a,b){if(a)for(var c=0;c<a.length;++c){var d=a[c];if(d.marker==b)return d}}function ze(a,b){for(var c,d=0;d<a.length;++d)a[d]!=b&&(c||(c=[])).push(a[d]);return c}function Ae(a,b){a.markedSpans=a.markedSpans?a.markedSpans.concat([b]):[b],b.marker.attachLine(a)}function Be(a,b,c){if(a)for(var e,d=0;d<a.length;++d){var f=a[d],g=f.marker,h=null==f.from||(g.inclusiveLeft?f.from<=b:f.from<b);if(h||f.from==b&&"bookmark"==g.type&&(!c||!f.marker.insertLeft)){var i=null==f.to||(g.inclusiveRight?f.to>=b:f.to>b);(e||(e=[])).push(new xe(g,f.from,i?null:f.to))}}return e}function Ce(a,b,c){if(a)for(var e,d=0;d<a.length;++d){var f=a[d],g=f.marker,h=null==f.to||(g.inclusiveRight?f.to>=b:f.to>b);if(h||f.from==b&&"bookmark"==g.type&&(!c||f.marker.insertLeft)){var i=null==f.from||(g.inclusiveLeft?f.from<=b:f.from<b);(e||(e=[])).push(new xe(g,i?null:f.from-b,null==f.to?null:f.to-b))}}return e}function De(a,b){var c=zb(a,b.from.line)&&Df(a,b.from.line).markedSpans,d=zb(a,b.to.line)&&Df(a,b.to.line).markedSpans;if(!c&&!d)return null;var e=b.from.ch,f=b.to.ch,g=0==ob(b.from,b.to),h=Be(c,e,g),i=Ce(d,f,g),j=1==b.text.length,k=zg(b.text).length+(j?e:0);if(h)for(var l=0;l<h.length;++l){var m=h[l];if(null==m.to){var n=ye(i,m.marker);n?j&&(m.to=null==n.to?null:n.to+k):m.to=e}}if(i)for(var l=0;l<i.length;++l){var m=i[l];if(null!=m.to&&(m.to+=k),null==m.from){var n=ye(h,m.marker);n||(m.from=k,j&&(h||(h=[])).push(m))}else m.from+=k,j&&(h||(h=[])).push(m)}h&&(h=Ee(h)),i&&i!=h&&(i=Ee(i));var o=[h];if(!j){var q,p=b.text.length-2;if(p>0&&h)for(var l=0;l<h.length;++l)null==h[l].to&&(q||(q=[])).push(new xe(h[l].marker,null,null));for(var l=0;p>l;++l)o.push(q);o.push(i)}return o}function Ee(a){for(var b=0;b<a.length;++b){var c=a[b];null!=c.from&&c.from==c.to&&c.marker.clearWhenEmpty!==!1&&a.splice(b--,1)}return a.length?a:null}function Fe(a,b){var c=Vf(a,b),d=De(a,b);if(!c)return d;if(!d)return c;for(var e=0;e<c.length;++e){var f=c[e],g=d[e];if(f&&g)a:for(var h=0;h<g.length;++h){for(var i=g[h],j=0;j<f.length;++j)if(f[j].marker==i.marker)continue a;
f.push(i)}else g&&(c[e]=g)}return c}function Ge(a,b,c){var d=null;if(a.iter(b.line,c.line+1,function(a){if(a.markedSpans)for(var b=0;b<a.markedSpans.length;++b){var c=a.markedSpans[b].marker;!c.readOnly||d&&-1!=Bg(d,c)||(d||(d=[])).push(c)}}),!d)return null;for(var e=[{from:b,to:c}],f=0;f<d.length;++f)for(var g=d[f],h=g.find(0),i=0;i<e.length;++i){var j=e[i];if(!(ob(j.to,h.from)<0||ob(j.from,h.to)>0)){var k=[i,1],l=ob(j.from,h.from),m=ob(j.to,h.to);(0>l||!g.inclusiveLeft&&!l)&&k.push({from:j.from,to:h.from}),(m>0||!g.inclusiveRight&&!m)&&k.push({from:h.to,to:j.to}),e.splice.apply(e,k),i+=k.length-1}}return e}function He(a){var b=a.markedSpans;if(b){for(var c=0;c<b.length;++c)b[c].marker.detachLine(a);a.markedSpans=null}}function Ie(a,b){if(b){for(var c=0;c<b.length;++c)b[c].marker.attachLine(a);a.markedSpans=b}}function Je(a){return a.inclusiveLeft?-1:0}function Ke(a){return a.inclusiveRight?1:0}function Le(a,b){var c=a.lines.length-b.lines.length;if(0!=c)return c;var d=a.find(),e=b.find(),f=ob(d.from,e.from)||Je(a)-Je(b);if(f)return-f;var g=ob(d.to,e.to)||Ke(a)-Ke(b);return g?g:b.id-a.id}function Me(a,b){var d,c=x&&a.markedSpans;if(c)for(var e,f=0;f<c.length;++f)e=c[f],e.marker.collapsed&&null==(b?e.from:e.to)&&(!d||Le(d,e.marker)<0)&&(d=e.marker);return d}function Ne(a){return Me(a,!0)}function Oe(a){return Me(a,!1)}function Pe(a,b,c,d,e){var f=Df(a,b),g=x&&f.markedSpans;if(g)for(var h=0;h<g.length;++h){var i=g[h];if(i.marker.collapsed){var j=i.marker.find(0),k=ob(j.from,c)||Je(i.marker)-Je(e),l=ob(j.to,d)||Ke(i.marker)-Ke(e);if(!(k>=0&&0>=l||0>=k&&l>=0)&&(0>=k&&(ob(j.to,c)||Ke(i.marker)-Je(e))>0||k>=0&&(ob(j.from,d)||Je(i.marker)-Ke(e))<0))return!0}}}function Qe(a){for(var b;b=Ne(a);)a=b.find(-1,!0).line;return a}function Re(a){for(var b,c;b=Oe(a);)a=b.find(1,!0).line,(c||(c=[])).push(a);return c}function Se(a,b){var c=Df(a,b),d=Qe(c);return c==d?b:Hf(d)}function Te(a,b){if(b>a.lastLine())return b;var d,c=Df(a,b);if(!Ue(a,c))return b;for(;d=Oe(c);)c=d.find(1,!0).line;return Hf(c)+1}function Ue(a,b){var c=x&&b.markedSpans;if(c)for(var d,e=0;e<c.length;++e)if(d=c[e],d.marker.collapsed){if(null==d.from)return!0;if(!d.marker.widgetNode&&0==d.from&&d.marker.inclusiveLeft&&Ve(a,b,d))return!0}}function Ve(a,b,c){if(null==c.to){var d=c.marker.find(1,!0);return Ve(a,d.line,ye(d.line.markedSpans,c.marker))}if(c.marker.inclusiveRight&&c.to==b.text.length)return!0;for(var e,f=0;f<b.markedSpans.length;++f)if(e=b.markedSpans[f],e.marker.collapsed&&!e.marker.widgetNode&&e.from==c.to&&(null==e.to||e.to!=c.from)&&(e.marker.inclusiveLeft||c.marker.inclusiveRight)&&Ve(a,b,e))return!0}function Xe(a,b,c){Jf(b)<(a.curOp&&a.curOp.scrollTop||a.doc.scrollTop)&&Qd(a,null,c)}function Ye(a){return null!=a.height?a.height:(Pg(document.body,a.node)||Og(a.cm.display.measure,Lg("div",[a.node],null,"position: relative")),a.height=a.node.offsetHeight)}function Ze(a,b,c,d){var e=new We(a,c,d);return e.noHScroll&&(a.display.alignWidgets=!0),Ud(a,b,"widget",function(b){var c=b.widgets||(b.widgets=[]);if(null==e.insertAt?c.push(e):c.splice(Math.min(c.length-1,Math.max(0,e.insertAt)),0,e),e.line=b,!Ue(a.doc,b)){var d=Jf(b)<a.doc.scrollTop;Gf(b,b.height+Ye(e)),d&&Qd(a,null,e.height),a.curOp.forceUpdate=!0}return!0}),e}function _e(a,b,c,d){a.text=b,a.stateAfter&&(a.stateAfter=null),a.styles&&(a.styles=null),null!=a.order&&(a.order=null),He(a),Ie(a,c);var e=d?d(a):1;e!=a.height&&Gf(a,e)}function af(a){a.parent=null,He(a)}function bf(a,b){if(a)for(;;){var c=a.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!c)break;a=a.slice(0,c.index)+a.slice(c.index+c[0].length);var d=c[1]?"bgClass":"textClass";null==b[d]?b[d]=c[2]:new RegExp("(?:^|s)"+c[2]+"(?:$|s)").test(b[d])||(b[d]+=" "+c[2])}return a}function cf(a,b){if(a.blankLine)return a.blankLine(b);if(a.innerMode){var c=y.innerMode(a,b);return c.mode.blankLine?c.mode.blankLine(c.state):void 0}}function df(a,b,c){for(var d=0;10>d;d++){var e=a.token(b,c);if(b.pos>b.start)return e}throw new Error("Mode "+a.name+" failed to advance stream.")}function ef(a,b,c,d,e,f,g){var h=c.flattenSpans;null==h&&(h=a.options.flattenSpans);var l,i=0,j=null,k=new oe(b,a.options.tabSize);for(""==b&&bf(cf(c,d),f);!k.eol();){if(k.pos>a.options.maxHighlightLength?(h=!1,g&&hf(a,b,d,k.pos),k.pos=b.length,l=null):l=bf(df(c,k,d),f),a.options.addModeClass){var m=y.innerMode(c,d).mode.name;m&&(l="m-"+(l?m+" "+l:m))}h&&j==l||(i<k.start&&e(k.start,j),i=k.start,j=l),k.start=k.pos}for(;i<k.pos;){var n=Math.min(k.pos,i+5e4);e(n,j),i=n}}function ff(a,b,c,d){var e=[a.state.modeGen],f={};ef(a,b.text,a.doc.mode,c,function(a,b){e.push(a,b)},f,d);for(var g=0;g<a.state.overlays.length;++g){var h=a.state.overlays[g],i=1,j=0;ef(a,b.text,h.mode,!0,function(a,b){for(var c=i;a>j;){var d=e[i];d>a&&e.splice(i,1,a,e[i+1],d),i+=2,j=Math.min(a,d)}if(b)if(h.opaque)e.splice(c,i-c,a,"cm-overlay "+b),i=c+2;else for(;i>c;c+=2){var f=e[c+1];e[c+1]=(f?f+" ":"")+"cm-overlay "+b}},f)}return{styles:e,classes:f.bgClass||f.textClass?f:null}}function gf(a,b){if(!b.styles||b.styles[0]!=a.state.modeGen){var c=ff(a,b,b.stateAfter=Vb(a,Hf(b)));b.styles=c.styles,c.classes?b.styleClasses=c.classes:b.styleClasses&&(b.styleClasses=null)}return b.styles}function hf(a,b,c,d){var e=a.doc.mode,f=new oe(b,a.options.tabSize);for(f.start=f.pos=d||0,""==b&&cf(e,c);!f.eol()&&f.pos<=a.options.maxHighlightLength;)df(e,f,c),f.start=f.pos}function lf(a,b){if(!a||/^\s*$/.test(a))return null;var c=b.addModeClass?kf:jf;return c[a]||(c[a]=a.replace(/\S+/g,"cm-$&"))}function mf(a,b){var c=Lg("span",null,null,h?"padding-right: .1px":null),d={pre:Lg("pre",[c]),content:c,col:0,pos:0,cm:a};b.measure={};for(var e=0;e<=(b.rest?b.rest.length:0);e++){var i,f=e?b.rest[e-1]:b.line;d.pos=0,d.addToken=of,(g||h)&&a.getOption("lineWrapping")&&(d.addToken=pf(d.addToken)),dh(a.display.measure)&&(i=Kf(f))&&(d.addToken=qf(d.addToken,i)),d.map=[],sf(f,d,gf(a,f)),f.styleClasses&&(f.styleClasses.bgClass&&(d.bgClass=Ug(f.styleClasses.bgClass,d.bgClass||"")),f.styleClasses.textClass&&(d.textClass=Ug(f.styleClasses.textClass,d.textClass||""))),0==d.map.length&&d.map.push(0,0,d.content.appendChild(bh(a.display.measure))),0==e?(b.measure.map=d.map,b.measure.cache={}):((b.measure.maps||(b.measure.maps=[])).push(d.map),(b.measure.caches||(b.measure.caches=[])).push({}))}return gg(a,"renderLine",a,b.line,d.pre),d}function nf(a){var b=Lg("span","\u2022","cm-invalidchar");return b.title="\\u"+a.charCodeAt(0).toString(16),b}function of(a,b,c,e,f,g){if(b){var h=a.cm.options.specialChars,i=!1;if(h.test(b))for(var j=document.createDocumentFragment(),k=0;;){h.lastIndex=k;var l=h.exec(b),m=l?l.index-k:b.length-k;if(m){var n=document.createTextNode(b.slice(k,k+m));d?j.appendChild(Lg("span",[n])):j.appendChild(n),a.map.push(a.pos,a.pos+m,n),a.col+=m,a.pos+=m}if(!l)break;if(k+=m+1,"	"==l[0]){var o=a.cm.options.tabSize,p=o-a.col%o,n=j.appendChild(Lg("span",yg(p),"cm-tab"));a.col+=p}else{var n=a.cm.options.specialCharPlaceholder(l[0]);d?j.appendChild(Lg("span",[n])):j.appendChild(n),a.col+=1}a.map.push(a.pos,a.pos+1,n),a.pos++}else{a.col+=b.length;var j=document.createTextNode(b);a.map.push(a.pos,a.pos+b.length,j),d&&(i=!0),a.pos+=b.length}if(c||e||f||i){var q=c||"";e&&(q+=e),f&&(q+=f);var r=Lg("span",[j],q);return g&&(r.title=g),a.content.appendChild(r)}a.content.appendChild(j)}}function pf(a){function b(a){for(var b=" ",c=0;c<a.length-2;++c)b+=c%2?" ":"\xa0";return b+=" "}return function(c,d,e,f,g,h){a(c,d.replace(/ {3,}/g,b),e,f,g,h)}}function qf(a,b){return function(c,d,e,f,g,h){e=e?e+" cm-force-border":"cm-force-border";for(var i=c.pos,j=i+d.length;;){for(var k=0;k<b.length;k++){var l=b[k];if(l.to>i&&l.from<=i)break}if(l.to>=j)return a(c,d,e,f,g,h);a(c,d.slice(0,l.to-i),e,f,null,h),f=null,d=d.slice(l.to-i),i=l.to}}}function rf(a,b,c,d){var e=!d&&c.widgetNode;e&&(a.map.push(a.pos,a.pos+b,e),a.content.appendChild(e)),a.pos+=b}function sf(a,b,c){var d=a.markedSpans,e=a.text,f=0;if(d)for(var k,m,n,o,p,q,h=e.length,i=0,g=1,j="",l=0;;){if(l==i){m=n=o=p="",q=null,l=1/0;for(var r=[],s=0;s<d.length;++s){var t=d[s],u=t.marker;t.from<=i&&(null==t.to||t.to>i)?(null!=t.to&&l>t.to&&(l=t.to,n=""),u.className&&(m+=" "+u.className),u.startStyle&&t.from==i&&(o+=" "+u.startStyle),u.endStyle&&t.to==l&&(n+=" "+u.endStyle),u.title&&!p&&(p=u.title),u.collapsed&&(!q||Le(q.marker,u)<0)&&(q=t)):t.from>i&&l>t.from&&(l=t.from),"bookmark"==u.type&&t.from==i&&u.widgetNode&&r.push(u)}if(q&&(q.from||0)==i&&(rf(b,(null==q.to?h+1:q.to)-i,q.marker,null==q.from),null==q.to))return;if(!q&&r.length)for(var s=0;s<r.length;++s)rf(b,0,r[s])}if(i>=h)break;for(var v=Math.min(h,l);;){if(j){var w=i+j.length;if(!q){var x=w>v?j.slice(0,v-i):j;b.addToken(b,x,k?k+m:m,o,i+x.length==l?n:"",p)}if(w>=v){j=j.slice(v-i),i=v;break}i=w,o=""}j=e.slice(f,f=c[g++]),k=lf(c[g++],b.cm.options)}}else for(var g=1;g<c.length;g+=2)b.addToken(b,e.slice(f,f=c[g]),lf(c[g+1],b.cm.options))}function tf(a,b){return 0==b.from.ch&&0==b.to.ch&&""==zg(b.text)&&(!a.cm||a.cm.options.wholeLineUpdateBefore)}function uf(a,b,c,d){function e(a){return c?c[a]:null}function f(a,c,e){_e(a,c,e,d),jg(a,"change",a,b)}var g=b.from,h=b.to,i=b.text,j=Df(a,g.line),k=Df(a,h.line),l=zg(i),m=e(i.length-1),n=h.line-g.line;if(tf(a,b)){for(var o=0,p=[];o<i.length-1;++o)p.push(new $e(i[o],e(o),d));f(k,k.text,m),n&&a.remove(g.line,n),p.length&&a.insert(g.line,p)}else if(j==k)if(1==i.length)f(j,j.text.slice(0,g.ch)+l+j.text.slice(h.ch),m);else{for(var p=[],o=1;o<i.length-1;++o)p.push(new $e(i[o],e(o),d));p.push(new $e(l+j.text.slice(h.ch),m,d)),f(j,j.text.slice(0,g.ch)+i[0],e(0)),a.insert(g.line+1,p)}else if(1==i.length)f(j,j.text.slice(0,g.ch)+i[0]+k.text.slice(h.ch),e(0)),a.remove(g.line+1,n);else{f(j,j.text.slice(0,g.ch)+i[0],e(0)),f(k,l+k.text.slice(h.ch),m);for(var o=1,p=[];o<i.length-1;++o)p.push(new $e(i[o],e(o),d));n>1&&a.remove(g.line+1,n-1),a.insert(g.line+1,p)}jg(a,"change",a,b)}function vf(a){this.lines=a,this.parent=null;for(var b=0,c=0;b<a.length;++b)a[b].parent=this,c+=a[b].height;this.height=c}function wf(a){this.children=a;for(var b=0,c=0,d=0;d<a.length;++d){var e=a[d];b+=e.chunkSize(),c+=e.height,e.parent=this}this.size=b,this.height=c,this.parent=null}function Bf(a,b,c){function d(a,e,f){if(a.linked)for(var g=0;g<a.linked.length;++g){var h=a.linked[g];if(h.doc!=e){var i=f&&h.sharedHist;(!c||i)&&(b(h.doc,i),d(h.doc,a,i))}}}d(a,null,!0)}function Cf(a,b){if(b.cm)throw new Error("This document is already in use.");a.doc=b,b.cm=a,E(a),A(a),a.options.lineWrapping||L(a),a.options.mode=b.modeOption,Fc(a)}function Df(a,b){if(b-=a.first,0>b||b>=a.size)throw new Error("There is no line "+(b+a.first)+" in the document.");for(var c=a;!c.lines;)for(var d=0;;++d){var e=c.children[d],f=e.chunkSize();if(f>b){c=e;break}b-=f}return c.lines[b]}function Ef(a,b,c){var d=[],e=b.line;return a.iter(b.line,c.line+1,function(a){var f=a.text;e==c.line&&(f=f.slice(0,c.ch)),e==b.line&&(f=f.slice(b.ch)),d.push(f),++e}),d}function Ff(a,b,c){var d=[];return a.iter(b,c,function(a){d.push(a.text)}),d}function Gf(a,b){var c=b-a.height;if(c)for(var d=a;d;d=d.parent)d.height+=c}function Hf(a){if(null==a.parent)return null;for(var b=a.parent,c=Bg(b.lines,a),d=b.parent;d;b=d,d=d.parent)for(var e=0;d.children[e]!=b;++e)c+=d.children[e].chunkSize();return c+b.first}function If(a,b){var c=a.first;a:do{for(var d=0;d<a.children.length;++d){var e=a.children[d],f=e.height;if(f>b){a=e;continue a}b-=f,c+=e.chunkSize()}return c}while(!a.lines);for(var d=0;d<a.lines.length;++d){var g=a.lines[d],h=g.height;if(h>b)break;b-=h}return c+d}function Jf(a){a=Qe(a);for(var b=0,c=a.parent,d=0;d<c.lines.length;++d){var e=c.lines[d];if(e==a)break;b+=e.height}for(var f=c.parent;f;c=f,f=c.parent)for(var d=0;d<f.children.length;++d){var g=f.children[d];if(g==c)break;b+=g.height}return b}function Kf(a){var b=a.order;return null==b&&(b=a.order=vh(a.text)),b}function Lf(a){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=a||1}function Mf(a,b){var c={from:pb(b.from),to:zd(b),text:Ef(a,b.from,b.to)};return Tf(a,c,b.from.line,b.to.line+1),Bf(a,function(a){Tf(a,c,b.from.line,b.to.line+1)},!0),c}function Nf(a){for(;a.length;){var b=zg(a);if(!b.ranges)break;a.pop()}}function Of(a,b){return b?(Nf(a.done),zg(a.done)):a.done.length&&!zg(a.done).ranges?zg(a.done):a.done.length>1&&!a.done[a.done.length-2].ranges?(a.done.pop(),zg(a.done)):void 0}function Pf(a,b,c,d){var e=a.history;e.undone.length=0;var g,f=+new Date;if((e.lastOp==d||e.lastOrigin==b.origin&&b.origin&&("+"==b.origin.charAt(0)&&a.cm&&e.lastModTime>f-a.cm.options.historyEventDelay||"*"==b.origin.charAt(0)))&&(g=Of(e,e.lastOp==d))){var h=zg(g.changes);0==ob(b.from,b.to)&&0==ob(b.from,h.to)?h.to=zd(b):g.changes.push(Mf(a,b))}else{var i=zg(e.done);for(i&&i.ranges||Sf(a.sel,e.done),g={changes:[Mf(a,b)],generation:e.generation},e.done.push(g);e.done.length>e.undoDepth;)e.done.shift(),e.done[0].ranges||e.done.shift()}e.done.push(c),e.generation=++e.maxGeneration,e.lastModTime=e.lastSelTime=f,e.lastOp=d,e.lastOrigin=e.lastSelOrigin=b.origin,h||gg(a,"historyAdded")}function Qf(a,b,c,d){var e=b.charAt(0);return"*"==e||"+"==e&&c.ranges.length==d.ranges.length&&c.somethingSelected()==d.somethingSelected()&&new Date-a.history.lastSelTime<=(a.cm?a.cm.options.historyEventDelay:500)}function Rf(a,b,c,d){var e=a.history,f=d&&d.origin;c==e.lastOp||f&&e.lastSelOrigin==f&&(e.lastModTime==e.lastSelTime&&e.lastOrigin==f||Qf(a,f,zg(e.done),b))?e.done[e.done.length-1]=b:Sf(b,e.done),e.lastSelTime=+new Date,e.lastSelOrigin=f,e.lastOp=c,d&&d.clearRedo!==!1&&Nf(e.undone)}function Sf(a,b){var c=zg(b);c&&c.ranges&&c.equals(a)||b.push(a)}function Tf(a,b,c,d){var e=b["spans_"+a.id],f=0;a.iter(Math.max(a.first,c),Math.min(a.first+a.size,d),function(c){c.markedSpans&&((e||(e=b["spans_"+a.id]={}))[f]=c.markedSpans),++f})}function Uf(a){if(!a)return null;for(var c,b=0;b<a.length;++b)a[b].marker.explicitlyCleared?c||(c=a.slice(0,b)):c&&c.push(a[b]);return c?c.length?c:null:a}function Vf(a,b){var c=b["spans_"+a.id];if(!c)return null;for(var d=0,e=[];d<b.text.length;++d)e.push(Uf(c[d]));return e}function Wf(a,b,c){for(var d=0,e=[];d<a.length;++d){var f=a[d];if(f.ranges)e.push(c?sb.prototype.deepCopy.call(f):f);else{var g=f.changes,h=[];e.push({changes:h});for(var i=0;i<g.length;++i){var k,j=g[i];if(h.push({from:j.from,to:j.to,text:j.text}),b)for(var l in j)(k=l.match(/^spans_(\d+)$/))&&Bg(b,Number(k[1]))>-1&&(zg(h)[l]=j[l],delete j[l])}}}return e}function Xf(a,b,c,d){c<a.line?a.line+=d:b<a.line&&(a.line=b,a.ch=0)}function Yf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e],g=!0;if(f.ranges){f.copied||(f=a[e]=f.deepCopy(),f.copied=!0);for(var h=0;h<f.ranges.length;h++)Xf(f.ranges[h].anchor,b,c,d),Xf(f.ranges[h].head,b,c,d)}else{for(var h=0;h<f.changes.length;++h){var i=f.changes[h];if(c<i.from.line)i.from=nb(i.from.line+d,i.from.ch),i.to=nb(i.to.line+d,i.to.ch);else if(b<=i.to.line){g=!1;break}}g||(a.splice(0,e+1),e=0)}}}function Zf(a,b){var c=b.from.line,d=b.to.line,e=b.text.length-(d-c)-1;Yf(a.done,c,d,e),Yf(a.undone,c,d,e)}function ag(a){return null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue}function cg(a){return a.target||a.srcElement}function dg(a){var b=a.which;return null==b&&(1&a.button?b=1:2&a.button?b=3:4&a.button&&(b=2)),r&&a.ctrlKey&&1==b&&(b=3),b}function jg(a,b){function e(a){return function(){a.apply(null,d)}}var c=a._handlers&&a._handlers[b];if(c){var d=Array.prototype.slice.call(arguments,2);hg||(++ig,hg=[],setTimeout(kg,0));for(var f=0;f<c.length;++f)hg.push(e(c[f]))}}function kg(){--ig;var a=hg;hg=null;for(var b=0;b<a.length;++b)a[b]()}function lg(a,b,c){return gg(a,c||b.type,a,b),ag(b)||b.codemirrorIgnore}function mg(a){var b=a._handlers&&a._handlers.cursorActivity;if(b)for(var c=a.curOp.cursorActivityHandlers||(a.curOp.cursorActivityHandlers=[]),d=0;d<b.length;++d)-1==Bg(c,b[d])&&c.push(b[d])}function ng(a,b){var c=a._handlers&&a._handlers[b];return c&&c.length>0}function og(a){a.prototype.on=function(a,b){eg(this,a,b)},a.prototype.off=function(a,b){fg(this,a,b)}}function ug(){this.id=null}function wg(a,b,c){for(var d=0,e=0;;){var f=a.indexOf("	",d);-1==f&&(f=a.length);var g=f-d;if(f==a.length||e+g>=b)return d+Math.min(g,b-e);if(e+=f-d,e+=c-e%c,d=f+1,e>=b)return d}}function yg(a){for(;xg.length<=a;)xg.push(zg(xg)+" ");return xg[a]}function zg(a){return a[a.length-1]}function Bg(a,b){for(var c=0;c<a.length;++c)if(a[c]==b)return c;return-1}function Cg(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d);return c}function Dg(a,b){var c;if(Object.create)c=Object.create(a);else{var d=function(){};d.prototype=a,c=new d}return b&&Eg(b,c),c}function Eg(a,b,c){b||(b={});for(var d in a)!a.hasOwnProperty(d)||c===!1&&b.hasOwnProperty(d)||(b[d]=a[d]);return b}function Fg(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}}function Ig(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b])return!1;return!0}function Kg(a){return a.charCodeAt(0)>=768&&Jg.test(a)}function Lg(a,b,c,d){var e=document.createElement(a);if(c&&(e.className=c),d&&(e.style.cssText=d),"string"==typeof b)e.appendChild(document.createTextNode(b));else if(b)for(var f=0;f<b.length;++f)e.appendChild(b[f]);return e}function Ng(a){for(var b=a.childNodes.length;b>0;--b)a.removeChild(a.firstChild);return a}function Og(a,b){return Ng(a).appendChild(b)}function Pg(a,b){if(a.contains)return a.contains(b);for(;b=b.parentNode;)if(b==a)return!0}function Qg(){return document.activeElement}function Rg(a){return new RegExp("\\b"+a+"\\b\\s*")}function Sg(a,b){var c=Rg(b);c.test(a.className)&&(a.className=a.className.replace(c,""))}function Tg(a,b){Rg(b).test(a.className)||(a.className+=" "+b)}function Ug(a,b){for(var c=a.split(" "),d=0;d<c.length;d++)c[d]&&!Rg(c[d]).test(b)&&(b+=" "+c[d]);return b}function Vg(a){if(document.body.getElementsByClassName)for(var b=document.body.getElementsByClassName("CodeMirror"),c=0;c<b.length;c++){var d=b[c].CodeMirror;d&&a(d)}}function Xg(){Wg||(Yg(),Wg=!0)}function Yg(){var a;eg(window,"resize",function(){null==a&&(a=setTimeout(function(){a=null,$g=null,Vg(Uc)},100))}),eg(window,"blur",function(){Vg(wd)})}function _g(a){if(null!=$g)return $g;var b=Lg("div",null,null,"width: 50px; height: 50px; overflow-x: scroll");return Og(a,b),b.offsetWidth&&($g=b.offsetHeight-b.clientHeight),$g||0}function bh(a){if(null==ah){var b=Lg("span","\u200b");Og(a,Lg("span",[b,document.createTextNode("x")])),0!=a.firstChild.offsetHeight&&(ah=b.offsetWidth<=1&&b.offsetHeight>2&&!c)}return ah?Lg("span","\u200b"):Lg("span","\xa0",null,"display: inline-block; width: 1px; margin-right: -1px")}function dh(a){if(null!=ch)return ch;var b=Og(a,document.createTextNode("A\u062eA")),c=Mg(b,0,1).getBoundingClientRect();if(c.left==c.right)return!1;var d=Mg(b,1,2).getBoundingClientRect();return ch=d.right-c.right<3}function ih(a,b,c,d){if(!a)return d(b,c,"ltr");for(var e=!1,f=0;f<a.length;++f){var g=a[f];(g.from<c&&g.to>b||b==c&&g.to==b)&&(d(Math.max(g.from,b),Math.min(g.to,c),1==g.level?"rtl":"ltr"),e=!0)}e||d(b,c,"ltr")}function jh(a){return a.level%2?a.to:a.from}function kh(a){return a.level%2?a.from:a.to}function lh(a){var b=Kf(a);return b?jh(b[0]):0}function mh(a){var b=Kf(a);return b?kh(zg(b)):a.text.length}function nh(a,b){var c=Df(a.doc,b),d=Qe(c);d!=c&&(b=Hf(d));var e=Kf(d),f=e?e[0].level%2?mh(d):lh(d):0;return nb(b,f)}function oh(a,b){for(var c,d=Df(a.doc,b);c=Oe(d);)d=c.find(1,!0).line,b=null;var e=Kf(d),f=e?e[0].level%2?lh(d):mh(d):d.text.length;return nb(null==b?Hf(d):b,f)}function ph(a,b,c){var d=a[0].level;return b==d?!0:c==d?!1:c>b}function rh(a,b){qh=null;for(var d,c=0;c<a.length;++c){var e=a[c];if(e.from<b&&e.to>b)return c;if(e.from==b||e.to==b){if(null!=d)return ph(a,e.level,a[d].level)?(e.from!=e.to&&(qh=d),c):(e.from!=e.to&&(qh=c),d);d=c}}return d}function sh(a,b,c,d){if(!d)return b+c;do b+=c;while(b>0&&Kg(a.text.charAt(b)));return b}function th(a,b,c,d){var e=Kf(a);if(!e)return uh(a,b,c,d);for(var f=rh(e,b),g=e[f],h=sh(a,b,g.level%2?-c:c,d);;){if(h>g.from&&h<g.to)return h;if(h==g.from||h==g.to)return rh(e,h)==f?h:(g=e[f+=c],c>0==g.level%2?g.to:g.from);if(g=e[f+=c],!g)return null;h=c>0==g.level%2?sh(a,g.to,-1,d):sh(a,g.from,1,d)}}function uh(a,b,c,d){var e=b+c;if(d)for(;e>0&&Kg(a.text.charAt(e));)e+=c;return 0>e||e>a.text.length?null:e}var a=/gecko\/\d/i.test(navigator.userAgent),b=/MSIE \d/.test(navigator.userAgent),c=b&&(null==document.documentMode||document.documentMode<8),d=b&&(null==document.documentMode||document.documentMode<9),e=b&&(null==document.documentMode||document.documentMode<10),f=/Trident\/([7-9]|\d{2,})\./.test(navigator.userAgent),g=b||f,h=/WebKit\//.test(navigator.userAgent),i=h&&/Qt\/\d+\.\d+/.test(navigator.userAgent),j=/Chrome\//.test(navigator.userAgent),k=/Opera\//.test(navigator.userAgent),l=/Apple Computer/.test(navigator.vendor),m=/KHTML\//.test(navigator.userAgent),n=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent),o=/PhantomJS/.test(navigator.userAgent),p=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent),q=p||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent),r=p||/Mac/.test(navigator.platform),s=/win/i.test(navigator.platform),t=k&&navigator.userAgent.match(/Version\/(\d*\.\d*)/);t&&(t=Number(t[1])),t&&t>=15&&(k=!1,h=!0);var u=r&&(i||k&&(null==t||12.11>t)),v=a||g&&!d,w=!1,x=!1,nb=y.Pos=function(a,b){return this instanceof nb?(this.line=a,this.ch=b,void 0):new nb(a,b)},ob=y.cmpPos=function(a,b){return a.line-b.line||a.ch-b.ch};sb.prototype={primary:function(){return this.ranges[this.primIndex]},equals:function(a){if(a==this)return!0;if(a.primIndex!=this.primIndex||a.ranges.length!=this.ranges.length)return!1;for(var b=0;b<this.ranges.length;b++){var c=this.ranges[b],d=a.ranges[b];if(0!=ob(c.anchor,d.anchor)||0!=ob(c.head,d.head))return!1}return!0},deepCopy:function(){for(var a=[],b=0;b<this.ranges.length;b++)a[b]=new tb(pb(this.ranges[b].anchor),pb(this.ranges[b].head));return new sb(a,this.primIndex)},somethingSelected:function(){for(var a=0;a<this.ranges.length;a++)if(!this.ranges[a].empty())return!0;return!1},contains:function(a,b){b||(b=a);for(var c=0;c<this.ranges.length;c++){var d=this.ranges[c];if(ob(b,d.from())>=0&&ob(a,d.to())<=0)return c}return-1}},tb.prototype={from:function(){return rb(this.anchor,this.head)},to:function(){return qb(this.anchor,this.head)},empty:function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch}};var tc,Yc,Zc,ec={left:0,right:0,top:0,bottom:0},wc=0,dd=0,id=0,jd=null;g?jd=-.53:a?jd=15:j?jd=-.7:l&&(jd=-1/3);var nd,qd=null,zd=y.changeEnd=function(a){return a.text?nb(a.from.line+a.text.length-1,zg(a.text).length+(1==a.text.length?a.from.ch:0)):a.to};y.prototype={constructor:y,focus:function(){window.focus(),Qc(this),Nc(this)},setOption:function(a,b){var c=this.options,d=c[a];(c[a]!=b||"mode"==a)&&(c[a]=b,$d.hasOwnProperty(a)&&Ac(this,$d[a])(this,b,d))},getOption:function(a){return this.options[a]},getDoc:function(){return this.doc},addKeyMap:function(a,b){this.state.keyMaps[b?"push":"unshift"](a)},removeKeyMap:function(a){for(var b=this.state.keyMaps,c=0;c<b.length;++c)if(b[c]==a||"string"!=typeof b[c]&&b[c].name==a)return b.splice(c,1),!0},addOverlay:Bc(function(a,b){var c=a.token?a:y.getMode(this.options,a);if(c.startState)throw new Error("Overlays may not be stateful.");this.state.overlays.push({mode:c,modeSpec:a,opaque:b&&b.opaque}),this.state.modeGen++,Fc(this)}),removeOverlay:Bc(function(a){for(var b=this.state.overlays,c=0;c<b.length;++c){var d=b[c].modeSpec;if(d==a||"string"==typeof a&&d.name==a)return b.splice(c,1),this.state.modeGen++,Fc(this),void 0}}),indentLine:Bc(function(a,b,c){"string"!=typeof b&&"number"!=typeof b&&(b=null==b?this.options.smartIndent?"smart":"prev":b?"add":"subtract"),zb(this.doc,a)&&Td(this,a,b,c)}),indentSelection:Bc(function(a){for(var b=this.doc.sel.ranges,c=-1,d=0;d<b.length;d++){var e=b[d];if(e.empty())e.head.line>c&&(Td(this,e.head.line,a,!0),c=e.head.line,d==this.doc.sel.primIndex&&Rd(this));else{var f=Math.max(c,e.from().line),g=e.to();c=Math.min(this.lastLine(),g.line-(g.ch?0:1))+1;for(var h=f;c>h;++h)Td(this,h,a)}}}),getTokenAt:function(a,b){var c=this.doc;a=xb(c,a);for(var d=Vb(this,a.line,b),e=this.doc.mode,f=Df(c,a.line),g=new oe(f.text,this.options.tabSize);g.pos<a.ch&&!g.eol();){g.start=g.pos;var h=df(e,g,d)}return{start:g.start,end:g.pos,string:g.current(),type:h||null,state:d}},getTokenTypeAt:function(a){a=xb(this.doc,a);var f,b=gf(this,Df(this.doc,a.line)),c=0,d=(b.length-1)/2,e=a.ch;if(0==e)f=b[2];else for(;;){var g=c+d>>1;if((g?b[2*g-1]:0)>=e)d=g;else{if(!(b[2*g+1]<e)){f=b[2*g+2];break}c=g+1}}var h=f?f.indexOf("cm-overlay "):-1;return 0>h?f:0==h?null:f.slice(0,h-1)},getModeAt:function(a){var b=this.doc.mode;return b.innerMode?y.innerMode(b,this.getTokenAt(a).state).mode:b},getHelper:function(a,b){return this.getHelpers(a,b)[0]},getHelpers:function(a,b){var c=[];if(!fe.hasOwnProperty(b))return fe;var d=fe[b],e=this.getModeAt(a);if("string"==typeof e[b])d[e[b]]&&c.push(d[e[b]]);else if(e[b])for(var f=0;f<e[b].length;f++){var g=d[e[b][f]];g&&c.push(g)}else e.helperType&&d[e.helperType]?c.push(d[e.helperType]):d[e.name]&&c.push(d[e.name]);for(var f=0;f<d._global.length;f++){var h=d._global[f];h.pred(e,this)&&-1==Bg(c,h.val)&&c.push(h.val)}return c},getStateAfter:function(a,b){var c=this.doc;return a=wb(c,null==a?c.first+c.size-1:a),Vb(this,a+1,b)},cursorCoords:function(a,b){var c,d=this.doc.sel.primary();return c=null==a?d.head:"object"==typeof a?xb(this.doc,a):a?d.from():d.to(),oc(this,c,b||"page")},charCoords:function(a,b){return nc(this,xb(this.doc,a),b||"page")},coordsChar:function(a,b){return a=mc(this,a,b||"page"),rc(this,a.left,a.top)},lineAtHeight:function(a,b){return a=mc(this,{top:a,left:0},b||"page").top,If(this.doc,a+this.display.viewOffset)},heightAtLine:function(a,b){var c=!1,d=this.doc.first+this.doc.size-1;a<this.doc.first?a=this.doc.first:a>d&&(a=d,c=!0);var e=Df(this.doc,a);return lc(this,e,{top:0,left:0},b||"page").top+(c?this.doc.height-Jf(e):0)},defaultTextHeight:function(){return uc(this.display)},defaultCharWidth:function(){return vc(this.display)},setGutterMarker:Bc(function(a,b,c){return Ud(this,a,"gutter",function(a){var d=a.gutterMarkers||(a.gutterMarkers={});return d[b]=c,!c&&Ig(d)&&(a.gutterMarkers=null),!0})}),clearGutter:Bc(function(a){var b=this,c=b.doc,d=c.first;c.iter(function(c){c.gutterMarkers&&c.gutterMarkers[a]&&(c.gutterMarkers[a]=null,Gc(b,d,"gutter"),Ig(c.gutterMarkers)&&(c.gutterMarkers=null)),++d})}),addLineClass:Bc(function(a,b,c){return Ud(this,a,"class",function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"wrapClass";if(a[d]){if(new RegExp("(?:^|\\s)"+c+"(?:$|\\s)").test(a[d]))return!1;a[d]+=" "+c}else a[d]=c;return!0})}),removeLineClass:Bc(function(a,b,c){return Ud(this,a,"class",function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"wrapClass",e=a[d];if(!e)return!1;if(null==c)a[d]=null;else{var f=e.match(new RegExp("(?:^|\\s+)"+c+"(?:$|\\s+)"));if(!f)return!1;var g=f.index+f[0].length;a[d]=e.slice(0,f.index)+(f.index&&g!=e.length?" ":"")+e.slice(g)||null}return!0})}),addLineWidget:Bc(function(a,b,c){return Ze(this,a,b,c)}),removeLineWidget:function(a){a.clear()},lineInfo:function(a){if("number"==typeof a){if(!zb(this.doc,a))return null;var b=a;if(a=Df(this.doc,a),!a)return null}else{var b=Hf(a);if(null==b)return null}return{line:b,handle:a,text:a.text,gutterMarkers:a.gutterMarkers,textClass:a.textClass,bgClass:a.bgClass,wrapClass:a.wrapClass,widgets:a.widgets}},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(a,b,c,d,e){var f=this.display;a=oc(this,xb(this.doc,a));var g=a.bottom,h=a.left;if(b.style.position="absolute",f.sizer.appendChild(b),"over"==d)g=a.top;else if("above"==d||"near"==d){var i=Math.max(f.wrapper.clientHeight,this.doc.height),j=Math.max(f.sizer.clientWidth,f.lineSpace.clientWidth);("above"==d||a.bottom+b.offsetHeight>i)&&a.top>b.offsetHeight?g=a.top-b.offsetHeight:a.bottom+b.offsetHeight<=i&&(g=a.bottom),h+b.offsetWidth>j&&(h=j-b.offsetWidth)}b.style.top=g+"px",b.style.left=b.style.right="","right"==e?(h=f.sizer.clientWidth-b.offsetWidth,b.style.right="0px"):("left"==e?h=0:"middle"==e&&(h=(f.sizer.clientWidth-b.offsetWidth)/2),b.style.left=h+"px"),c&&Od(this,h,g,h+b.offsetWidth,g+b.offsetHeight)},triggerOnKeyDown:Bc(rd),triggerOnKeyPress:Bc(ud),triggerOnKeyUp:Bc(td),execCommand:function(a){return ie.hasOwnProperty(a)?ie[a](this):void 0},findPosH:function(a,b,c,d){var e=1;0>b&&(e=-1,b=-b);for(var f=0,g=xb(this.doc,a);b>f&&(g=Wd(this.doc,g,e,c,d),!g.hitSide);++f);return g},moveH:Bc(function(a,b){var c=this;c.extendSelectionsBy(function(d){return c.display.shift||c.doc.extend||d.empty()?Wd(c.doc,d.head,a,b,c.options.rtlMoveVisually):0>a?d.from():d.to()},tg)}),deleteH:Bc(function(a,b){var c=this.doc.sel,d=this.doc;c.somethingSelected()?d.replaceSelection("",null,"+delete"):Vd(this,function(c){var e=Wd(d,c.head,a,b,!1);return 0>a?{from:e,to:c.head}:{from:c.head,to:e}})}),findPosV:function(a,b,c,d){var e=1,f=d;0>b&&(e=-1,b=-b);for(var g=0,h=xb(this.doc,a);b>g;++g){var i=oc(this,h,"div");if(null==f?f=i.left:i.left=f,h=Xd(this,i,e,c),h.hitSide)break}return h},moveV:Bc(function(a,b){var c=this,d=this.doc,e=[],f=!c.display.shift&&!d.extend&&d.sel.somethingSelected();if(d.extendSelectionsBy(function(g){if(f)return 0>a?g.from():g.to();var h=oc(c,g.head,"div");null!=g.goalColumn&&(h.left=g.goalColumn),e.push(h.left);var i=Xd(c,h,a,b);return"page"==b&&g==d.sel.primary()&&Qd(c,null,nc(c,i,"div").top-h.top),i},tg),e.length)for(var g=0;g<d.sel.ranges.length;g++)d.sel.ranges[g].goalColumn=e[g]}),toggleOverwrite:function(a){(null==a||a!=this.state.overwrite)&&((this.state.overwrite=!this.state.overwrite)?Tg(this.display.cursorDiv,"CodeMirror-overwrite"):Sg(this.display.cursorDiv,"CodeMirror-overwrite"),gg(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return Qg()==this.display.input},scrollTo:Bc(function(a,b){(null!=a||null!=b)&&Sd(this),null!=a&&(this.curOp.scrollLeft=a),null!=b&&(this.curOp.scrollTop=b)}),getScrollInfo:function(){var a=this.display.scroller,b=pg;return{left:a.scrollLeft,top:a.scrollTop,height:a.scrollHeight-b,width:a.scrollWidth-b,clientHeight:a.clientHeight-b,clientWidth:a.clientWidth-b}},scrollIntoView:Bc(function(a,b){if(null==a?(a={from:this.doc.sel.primary().head,to:null},null==b&&(b=this.options.cursorScrollMargin)):"number"==typeof a?a={from:nb(a,0),to:null}:null==a.from&&(a={from:a,to:null}),a.to||(a.to=a.from),a.margin=b||0,null!=a.from.line)Sd(this),this.curOp.scrollToPos=a;else{var c=Pd(this,Math.min(a.from.left,a.to.left),Math.min(a.from.top,a.to.top)-a.margin,Math.max(a.from.right,a.to.right),Math.max(a.from.bottom,a.to.bottom)+a.margin);this.scrollTo(c.scrollLeft,c.scrollTop)}}),setSize:Bc(function(a,b){function c(a){return"number"==typeof a||/^\d+$/.test(String(a))?a+"px":a}null!=a&&(this.display.wrapper.style.width=c(a)),null!=b&&(this.display.wrapper.style.height=c(b)),this.options.lineWrapping&&hc(this),this.curOp.forceUpdate=!0,gg(this,"refresh",this)}),operation:function(a){return zc(this,a)},refresh:Bc(function(){var a=this.display.cachedTextHeight;Fc(this),this.curOp.forceUpdate=!0,ic(this),this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop),J(this),(null==a||Math.abs(a-uc(this.display))>.5)&&E(this),gg(this,"refresh",this)}),swapDoc:Bc(function(a){var b=this.doc;return b.cm=null,Cf(this,a),ic(this),Pc(this),this.scrollTo(a.scrollLeft,a.scrollTop),jg(this,"swapDoc",this,b),b}),getInputField:function(){return this.display.input},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},og(y);var Zd=y.defaults={},$d=y.optionHandlers={},ae=y.Init={toString:function(){return"CodeMirror.Init"}};_d("value","",function(a,b){a.setValue(b)},!0),_d("mode",null,function(a,b){a.doc.modeOption=b,A(a)
},!0),_d("indentUnit",2,A,!0),_d("indentWithTabs",!1),_d("smartIndent",!0),_d("tabSize",4,function(a){B(a),ic(a),Fc(a)},!0),_d("specialChars",/[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\ufeff]/g,function(a,b){a.options.specialChars=new RegExp(b.source+(b.test("	")?"":"|	"),"g"),a.refresh()},!0),_d("specialCharPlaceholder",nf,function(a){a.refresh()},!0),_d("electricChars",!0),_d("rtlMoveVisually",!s),_d("wholeLineUpdateBefore",!0),_d("theme","default",function(a){G(a),H(a)},!0),_d("keyMap","default",F),_d("extraKeys",null),_d("lineWrapping",!1,C,!0),_d("gutters",[],function(a){M(a.options),H(a)},!0),_d("fixedGutter",!0,function(a,b){a.display.gutters.style.left=b?T(a.display)+"px":"0",a.refresh()},!0),_d("coverGutterNextToScrollbar",!1,O,!0),_d("lineNumbers",!1,function(a){M(a.options),H(a)},!0),_d("firstLineNumber",1,H,!0),_d("lineNumberFormatter",function(a){return a},H,!0),_d("showCursorWhenSelecting",!1,Ob,!0),_d("resetSelectionOnContextMenu",!0),_d("readOnly",!1,function(a,b){"nocursor"==b?(wd(a),a.display.input.blur(),a.display.disabled=!0):(a.display.disabled=!1,b||Pc(a))}),_d("disableInput",!1,function(a,b){b||Pc(a)},!0),_d("dragDrop",!0),_d("cursorBlinkRate",530),_d("cursorScrollMargin",0),_d("cursorHeight",1),_d("workTime",100),_d("workDelay",100),_d("flattenSpans",!0,B,!0),_d("addModeClass",!1,B,!0),_d("pollInterval",100),_d("undoDepth",200,function(a,b){a.doc.history.undoDepth=b}),_d("historyEventDelay",1250),_d("viewportMargin",10,function(a){a.refresh()},!0),_d("maxHighlightLength",1e4,B,!0),_d("moveInputWithCursor",!0,function(a,b){b||(a.display.inputDiv.style.top=a.display.inputDiv.style.left=0)}),_d("tabindex",null,function(a,b){a.display.input.tabIndex=b||""}),_d("autofocus",null);var be=y.modes={},ce=y.mimeModes={};y.defineMode=function(a,b){if(y.defaults.mode||"null"==a||(y.defaults.mode=a),arguments.length>2){b.dependencies=[];for(var c=2;c<arguments.length;++c)b.dependencies.push(arguments[c])}be[a]=b},y.defineMIME=function(a,b){ce[a]=b},y.resolveMode=function(a){if("string"==typeof a&&ce.hasOwnProperty(a))a=ce[a];else if(a&&"string"==typeof a.name&&ce.hasOwnProperty(a.name)){var b=ce[a.name];"string"==typeof b&&(b={name:b}),a=Dg(b,a),a.name=b.name}else if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+xml$/.test(a))return y.resolveMode("application/xml");return"string"==typeof a?{name:a}:a||{name:"null"}},y.getMode=function(a,b){var b=y.resolveMode(b),c=be[b.name];if(!c)return y.getMode(a,"text/plain");var d=c(a,b);if(de.hasOwnProperty(b.name)){var e=de[b.name];for(var f in e)e.hasOwnProperty(f)&&(d.hasOwnProperty(f)&&(d["_"+f]=d[f]),d[f]=e[f])}if(d.name=b.name,b.helperType&&(d.helperType=b.helperType),b.modeProps)for(var f in b.modeProps)d[f]=b.modeProps[f];return d},y.defineMode("null",function(){return{token:function(a){a.skipToEnd()}}}),y.defineMIME("text/plain","null");var de=y.modeExtensions={};y.extendMode=function(a,b){var c=de.hasOwnProperty(a)?de[a]:de[a]={};Eg(b,c)},y.defineExtension=function(a,b){y.prototype[a]=b},y.defineDocExtension=function(a,b){yf.prototype[a]=b},y.defineOption=_d;var ee=[];y.defineInitHook=function(a){ee.push(a)};var fe=y.helpers={};y.registerHelper=function(a,b,c){fe.hasOwnProperty(a)||(fe[a]=y[a]={_global:[]}),fe[a][b]=c},y.registerGlobalHelper=function(a,b,c,d){y.registerHelper(a,b,d),fe[a]._global.push({pred:c,val:d})};var ge=y.copyState=function(a,b){if(b===!0)return b;if(a.copyState)return a.copyState(b);var c={};for(var d in b){var e=b[d];e instanceof Array&&(e=e.concat([])),c[d]=e}return c},he=y.startState=function(a,b,c){return a.startState?a.startState(b,c):!0};y.innerMode=function(a,b){for(;a.innerMode;){var c=a.innerMode(b);if(!c||c.mode==a)break;b=c.state,a=c.mode}return c||{mode:a,state:b}};var ie=y.commands={selectAll:function(a){a.setSelection(nb(a.firstLine(),0),nb(a.lastLine()),rg)},singleSelection:function(a){a.setSelection(a.getCursor("anchor"),a.getCursor("head"),rg)},killLine:function(a){Vd(a,function(b){if(b.empty()){var c=Df(a.doc,b.head.line).text.length;return b.head.ch==c&&b.head.line<a.lastLine()?{from:b.head,to:nb(b.head.line+1,0)}:{from:b.head,to:nb(b.head.line,c)}}return{from:b.from(),to:b.to()}})},deleteLine:function(a){Vd(a,function(b){return{from:nb(b.from().line,0),to:xb(a.doc,nb(b.to().line+1,0))}})},delLineLeft:function(a){Vd(a,function(a){return{from:nb(a.from().line,0),to:a.from()}})},undo:function(a){a.undo()},redo:function(a){a.redo()},undoSelection:function(a){a.undoSelection()},redoSelection:function(a){a.redoSelection()},goDocStart:function(a){a.extendSelection(nb(a.firstLine(),0))},goDocEnd:function(a){a.extendSelection(nb(a.lastLine()))},goLineStart:function(a){a.extendSelectionsBy(function(b){return nh(a,b.head.line)},tg)},goLineStartSmart:function(a){a.extendSelectionsBy(function(b){var c=nh(a,b.head.line),d=a.getLineHandle(c.line),e=Kf(d);if(!e||0==e[0].level){var f=Math.max(0,d.text.search(/\S/)),g=b.head.line==c.line&&b.head.ch<=f&&b.head.ch;return nb(c.line,g?0:f)}return c},tg)},goLineEnd:function(a){a.extendSelectionsBy(function(b){return oh(a,b.head.line)},tg)},goLineRight:function(a){a.extendSelectionsBy(function(b){var c=a.charCoords(b.head,"div").top+5;return a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:c},"div")},tg)},goLineLeft:function(a){a.extendSelectionsBy(function(b){var c=a.charCoords(b.head,"div").top+5;return a.coordsChar({left:0,top:c},"div")},tg)},goLineUp:function(a){a.moveV(-1,"line")},goLineDown:function(a){a.moveV(1,"line")},goPageUp:function(a){a.moveV(-1,"page")},goPageDown:function(a){a.moveV(1,"page")},goCharLeft:function(a){a.moveH(-1,"char")},goCharRight:function(a){a.moveH(1,"char")},goColumnLeft:function(a){a.moveH(-1,"column")},goColumnRight:function(a){a.moveH(1,"column")},goWordLeft:function(a){a.moveH(-1,"word")},goGroupRight:function(a){a.moveH(1,"group")},goGroupLeft:function(a){a.moveH(-1,"group")},goWordRight:function(a){a.moveH(1,"word")},delCharBefore:function(a){a.deleteH(-1,"char")},delCharAfter:function(a){a.deleteH(1,"char")},delWordBefore:function(a){a.deleteH(-1,"word")},delWordAfter:function(a){a.deleteH(1,"word")},delGroupBefore:function(a){a.deleteH(-1,"group")},delGroupAfter:function(a){a.deleteH(1,"group")},indentAuto:function(a){a.indentSelection("smart")},indentMore:function(a){a.indentSelection("add")},indentLess:function(a){a.indentSelection("subtract")},insertTab:function(a){a.replaceSelection("	")},insertSoftTab:function(a){for(var b=[],c=a.listSelections(),d=a.options.tabSize,e=0;e<c.length;e++){var f=c[e].from(),g=vg(a.getLine(f.line),f.ch,d);b.push(new Array(d-g%d+1).join(" "))}a.replaceSelections(b)},defaultTab:function(a){a.somethingSelected()?a.indentSelection("add"):a.execCommand("insertTab")},transposeChars:function(a){zc(a,function(){for(var b=a.listSelections(),c=0;c<b.length;c++){var d=b[c].head,e=Df(a.doc,d.line).text;d.ch>0&&d.ch<e.length-1&&a.replaceRange(e.charAt(d.ch)+e.charAt(d.ch-1),nb(d.line,d.ch-1),nb(d.line,d.ch+1))}})},newlineAndIndent:function(a){zc(a,function(){for(var b=a.listSelections().length,c=0;b>c;c++){var d=a.listSelections()[c];a.replaceRange("\n",d.anchor,d.head,"+input"),a.indentLine(d.from().line+1,null,!0),Rd(a)}})},toggleOverwrite:function(a){a.toggleOverwrite()}},je=y.keyMap={};je.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},je.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-Up":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Down":"goDocEnd","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},je.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineStart","Cmd-Right":"goLineEnd","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delLineLeft","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection",fallthrough:["basic","emacsy"]},je.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars"},je["default"]=r?je.macDefault:je.pcDefault;var le=y.lookupKey=function(a,b,c){function d(b){b=ke(b);var e=b[a];if(e===!1)return"stop";if(null!=e&&c(e))return!0;if(b.nofallthrough)return"stop";var f=b.fallthrough;if(null==f)return!1;if("[object Array]"!=Object.prototype.toString.call(f))return d(f);for(var g=0;g<f.length;++g){var h=d(f[g]);if(h)return h}return!1}for(var e=0;e<b.length;++e){var f=d(b[e]);if(f)return"stop"!=f}},me=y.isModifierKey=function(a){var b=hh[a.keyCode];return"Ctrl"==b||"Alt"==b||"Shift"==b||"Mod"==b},ne=y.keyName=function(a,b){if(k&&34==a.keyCode&&a["char"])return!1;var c=hh[a.keyCode];return null==c||a.altGraphKey?!1:(a.altKey&&(c="Alt-"+c),(u?a.metaKey:a.ctrlKey)&&(c="Ctrl-"+c),(u?a.ctrlKey:a.metaKey)&&(c="Cmd-"+c),!b&&a.shiftKey&&(c="Shift-"+c),c)};y.fromTextArea=function(a,b){function d(){a.value=i.getValue()}if(b||(b={}),b.value=a.value,!b.tabindex&&a.tabindex&&(b.tabindex=a.tabindex),!b.placeholder&&a.placeholder&&(b.placeholder=a.placeholder),null==b.autofocus){var c=Qg();b.autofocus=c==a||null!=a.getAttribute("autofocus")&&c==document.body}if(a.form&&(eg(a.form,"submit",d),!b.leaveSubmitMethodAlone)){var e=a.form,f=e.submit;try{var g=e.submit=function(){d(),e.submit=f,e.submit(),e.submit=g}}catch(h){}}a.style.display="none";var i=y(function(b){a.parentNode.insertBefore(b,a.nextSibling)},b);return i.save=d,i.getTextArea=function(){return a},i.toTextArea=function(){d(),a.parentNode.removeChild(i.getWrapperElement()),a.style.display="",a.form&&(fg(a.form,"submit",d),"function"==typeof a.form.submit&&(a.form.submit=f))},i};var oe=y.StringStream=function(a,b){this.pos=this.start=0,this.string=a,this.tabSize=b||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0};oe.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==this.lineStart},peek:function(){return this.string.charAt(this.pos)||void 0},next:function(){return this.pos<this.string.length?this.string.charAt(this.pos++):void 0},eat:function(a){var b=this.string.charAt(this.pos);if("string"==typeof a)var c=b==a;else var c=b&&(a.test?a.test(b):a(b));return c?(++this.pos,b):void 0},eatWhile:function(a){for(var b=this.pos;this.eat(a););return this.pos>b},eatSpace:function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a},skipToEnd:function(){this.pos=this.string.length},skipTo:function(a){var b=this.string.indexOf(a,this.pos);return b>-1?(this.pos=b,!0):void 0},backUp:function(a){this.pos-=a},column:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=vg(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?vg(this.string,this.lineStart,this.tabSize):0)},indentation:function(){return vg(this.string,null,this.tabSize)-(this.lineStart?vg(this.string,this.lineStart,this.tabSize):0)},match:function(a,b,c){if("string"!=typeof a){var f=this.string.slice(this.pos).match(a);return f&&f.index>0?null:(f&&b!==!1&&(this.pos+=f[0].length),f)}var d=function(a){return c?a.toLowerCase():a},e=this.string.substr(this.pos,a.length);return d(e)==d(a)?(b!==!1&&(this.pos+=a.length),!0):void 0},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}}};var pe=y.TextMarker=function(a,b){this.lines=[],this.type=b,this.doc=a};og(pe),pe.prototype.clear=function(){if(!this.explicitlyCleared){var a=this.doc.cm,b=a&&!a.curOp;if(b&&xc(a),ng(this,"clear")){var c=this.find();c&&jg(this,"clear",c.from,c.to)}for(var d=null,e=null,f=0;f<this.lines.length;++f){var g=this.lines[f],h=ye(g.markedSpans,this);a&&!this.collapsed?Gc(a,Hf(g),"text"):a&&(null!=h.to&&(e=Hf(g)),null!=h.from&&(d=Hf(g))),g.markedSpans=ze(g.markedSpans,h),null==h.from&&this.collapsed&&!Ue(this.doc,g)&&a&&Gf(g,uc(a.display))}if(a&&this.collapsed&&!a.options.lineWrapping)for(var f=0;f<this.lines.length;++f){var i=Qe(this.lines[f]),j=K(i);j>a.display.maxLineLength&&(a.display.maxLine=i,a.display.maxLineLength=j,a.display.maxLineChanged=!0)}null!=d&&a&&this.collapsed&&Fc(a,d,e+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,a&&Lb(a.doc)),a&&jg(a,"markerCleared",a,this),b&&yc(a),this.parent&&this.parent.clear()}},pe.prototype.find=function(a,b){null==a&&"bookmark"==this.type&&(a=1);for(var c,d,e=0;e<this.lines.length;++e){var f=this.lines[e],g=ye(f.markedSpans,this);if(null!=g.from&&(c=nb(b?f:Hf(f),g.from),-1==a))return c;if(null!=g.to&&(d=nb(b?f:Hf(f),g.to),1==a))return d}return c&&{from:c,to:d}},pe.prototype.changed=function(){var a=this.find(-1,!0),b=this,c=this.doc.cm;a&&c&&zc(c,function(){var d=a.line,e=Hf(a.line),f=bc(c,e);if(f&&(gc(f),c.curOp.selectionChanged=c.curOp.forceUpdate=!0),c.curOp.updateMaxLine=!0,!Ue(b.doc,d)&&null!=b.height){var g=b.height;b.height=null;var h=Ye(b)-g;h&&Gf(d,d.height+h)}})},pe.prototype.attachLine=function(a){if(!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;b.maybeHiddenMarkers&&-1!=Bg(b.maybeHiddenMarkers,this)||(b.maybeUnhiddenMarkers||(b.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(a)},pe.prototype.detachLine=function(a){if(this.lines.splice(Bg(this.lines,a),1),!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;(b.maybeHiddenMarkers||(b.maybeHiddenMarkers=[])).push(this)}};var qe=0,se=y.SharedTextMarker=function(a,b){this.markers=a,this.primary=b;for(var c=0;c<a.length;++c)a[c].parent=this};og(se),se.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var a=0;a<this.markers.length;++a)this.markers[a].clear();jg(this,"clear")}},se.prototype.find=function(a,b){return this.primary.find(a,b)};var We=y.LineWidget=function(a,b,c){if(c)for(var d in c)c.hasOwnProperty(d)&&(this[d]=c[d]);this.cm=a,this.node=b};og(We),We.prototype.clear=function(){var a=this.cm,b=this.line.widgets,c=this.line,d=Hf(c);if(null!=d&&b){for(var e=0;e<b.length;++e)b[e]==this&&b.splice(e--,1);b.length||(c.widgets=null);var f=Ye(this);zc(a,function(){Xe(a,c,-f),Gc(a,d,"widget"),Gf(c,Math.max(0,c.height-f))})}},We.prototype.changed=function(){var a=this.height,b=this.cm,c=this.line;this.height=null;var d=Ye(this)-a;d&&zc(b,function(){b.curOp.forceUpdate=!0,Xe(b,c,d),Gf(c,c.height+d)})};var $e=y.Line=function(a,b,c){this.text=a,Ie(this,b),this.height=c?c(this):1};og($e),$e.prototype.lineNo=function(){return Hf(this)};var jf={},kf={};vf.prototype={chunkSize:function(){return this.lines.length},removeInner:function(a,b){for(var c=a,d=a+b;d>c;++c){var e=this.lines[c];this.height-=e.height,af(e),jg(e,"delete")}this.lines.splice(a,b)},collapse:function(a){a.push.apply(a,this.lines)},insertInner:function(a,b,c){this.height+=c,this.lines=this.lines.slice(0,a).concat(b).concat(this.lines.slice(a));for(var d=0;d<b.length;++d)b[d].parent=this},iterN:function(a,b,c){for(var d=a+b;d>a;++a)if(c(this.lines[a]))return!0}},wf.prototype={chunkSize:function(){return this.size},removeInner:function(a,b){this.size-=b;for(var c=0;c<this.children.length;++c){var d=this.children[c],e=d.chunkSize();if(e>a){var f=Math.min(b,e-a),g=d.height;if(d.removeInner(a,f),this.height-=g-d.height,e==f&&(this.children.splice(c--,1),d.parent=null),0==(b-=f))break;a=0}else a-=e}if(this.size-b<25&&(this.children.length>1||!(this.children[0]instanceof vf))){var h=[];this.collapse(h),this.children=[new vf(h)],this.children[0].parent=this}},collapse:function(a){for(var b=0;b<this.children.length;++b)this.children[b].collapse(a)},insertInner:function(a,b,c){this.size+=b.length,this.height+=c;for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(f>=a){if(e.insertInner(a,b,c),e.lines&&e.lines.length>50){for(;e.lines.length>50;){var g=e.lines.splice(e.lines.length-25,25),h=new vf(g);e.height-=h.height,this.children.splice(d+1,0,h),h.parent=this}this.maybeSpill()}break}a-=f}},maybeSpill:function(){if(!(this.children.length<=10)){var a=this;do{var b=a.children.splice(a.children.length-5,5),c=new wf(b);if(a.parent){a.size-=c.size,a.height-=c.height;var e=Bg(a.parent.children,a);a.parent.children.splice(e+1,0,c)}else{var d=new wf(a.children);d.parent=a,a.children=[d,c],a=d}c.parent=a.parent}while(a.children.length>10);a.parent.maybeSpill()}},iterN:function(a,b,c){for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(f>a){var g=Math.min(b,f-a);if(e.iterN(a,g,c))return!0;if(0==(b-=g))break;a=0}else a-=f}}};var xf=0,yf=y.Doc=function(a,b,c){if(!(this instanceof yf))return new yf(a,b,c);null==c&&(c=0),wf.call(this,[new vf([new $e("",null)])]),this.first=c,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.frontier=c;var d=nb(c,0);this.sel=vb(d),this.history=new Lf(null),this.id=++xf,this.modeOption=b,"string"==typeof a&&(a=eh(a)),uf(this,{from:d,to:d,text:a}),Ib(this,vb(d),rg)};yf.prototype=Dg(wf.prototype,{constructor:yf,iter:function(a,b,c){c?this.iterN(a-this.first,b-a,c):this.iterN(this.first,this.first+this.size,a)},insert:function(a,b){for(var c=0,d=0;d<b.length;++d)c+=b[d].height;this.insertInner(a-this.first,b,c)},remove:function(a,b){this.removeInner(a-this.first,b)},getValue:function(a){var b=Ff(this,this.first,this.first+this.size);return a===!1?b:b.join(a||"\n")},setValue:Cc(function(a){var b=nb(this.first,0),c=this.first+this.size-1;Fd(this,{from:b,to:nb(c,Df(this,c).text.length),text:eh(a),origin:"setValue"},!0),Ib(this,vb(b))}),replaceRange:function(a,b,c,d){b=xb(this,b),c=c?xb(this,c):b,Ld(this,a,b,c,d)},getRange:function(a,b,c){var d=Ef(this,xb(this,a),xb(this,b));return c===!1?d:d.join(c||"\n")},getLine:function(a){var b=this.getLineHandle(a);return b&&b.text},getLineHandle:function(a){return zb(this,a)?Df(this,a):void 0},getLineNumber:function(a){return Hf(a)},getLineHandleVisualStart:function(a){return"number"==typeof a&&(a=Df(this,a)),Qe(a)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(a){return xb(this,a)},getCursor:function(a){var c,b=this.sel.primary();return c=null==a||"head"==a?b.head:"anchor"==a?b.anchor:"end"==a||"to"==a||a===!1?b.to():b.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:Cc(function(a,b,c){Fb(this,xb(this,"number"==typeof a?nb(a,b||0):a),null,c)}),setSelection:Cc(function(a,b,c){Fb(this,xb(this,a),xb(this,b||a),c)}),extendSelection:Cc(function(a,b,c){Cb(this,xb(this,a),b&&xb(this,b),c)}),extendSelections:Cc(function(a,b){Db(this,Ab(this,a,b))}),extendSelectionsBy:Cc(function(a,b){Db(this,Cg(this.sel.ranges,a),b)}),setSelections:Cc(function(a,b,c){if(a.length){for(var d=0,e=[];d<a.length;d++)e[d]=new tb(xb(this,a[d].anchor),xb(this,a[d].head));null==b&&(b=Math.min(a.length-1,this.sel.primIndex)),Ib(this,ub(e,b),c)}}),addSelection:Cc(function(a,b,c){var d=this.sel.ranges.slice(0);d.push(new tb(xb(this,a),xb(this,b||a))),Ib(this,ub(d,d.length-1),c)}),getSelection:function(a){for(var c,b=this.sel.ranges,d=0;d<b.length;d++){var e=Ef(this,b[d].from(),b[d].to());c=c?c.concat(e):e}return a===!1?c:c.join(a||"\n")},getSelections:function(a){for(var b=[],c=this.sel.ranges,d=0;d<c.length;d++){var e=Ef(this,c[d].from(),c[d].to());a!==!1&&(e=e.join(a||"\n")),b[d]=e}return b},replaceSelection:function(a,b,c){for(var d=[],e=0;e<this.sel.ranges.length;e++)d[e]=a;this.replaceSelections(d,b,c||"+input")},replaceSelections:Cc(function(a,b,c){for(var d=[],e=this.sel,f=0;f<e.ranges.length;f++){var g=e.ranges[f];d[f]={from:g.from(),to:g.to(),text:eh(a[f]),origin:c}}for(var h=b&&"end"!=b&&Dd(this,d,b),f=d.length-1;f>=0;f--)Fd(this,d[f]);h?Hb(this,h):this.cm&&Rd(this.cm)}),undo:Cc(function(){Hd(this,"undo")}),redo:Cc(function(){Hd(this,"redo")}),undoSelection:Cc(function(){Hd(this,"undo",!0)}),redoSelection:Cc(function(){Hd(this,"redo",!0)}),setExtending:function(a){this.extend=a},getExtending:function(){return this.extend},historySize:function(){for(var a=this.history,b=0,c=0,d=0;d<a.done.length;d++)a.done[d].ranges||++b;for(var d=0;d<a.undone.length;d++)a.undone[d].ranges||++c;return{undo:b,redo:c}},clearHistory:function(){this.history=new Lf(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(a){return a&&(this.history.lastOp=this.history.lastOrigin=null),this.history.generation},isClean:function(a){return this.history.generation==(a||this.cleanGeneration)},getHistory:function(){return{done:Wf(this.history.done),undone:Wf(this.history.undone)}},setHistory:function(a){var b=this.history=new Lf(this.history.maxGeneration);b.done=Wf(a.done.slice(0),null,!0),b.undone=Wf(a.undone.slice(0),null,!0)},markText:function(a,b,c){return re(this,xb(this,a),xb(this,b),c,"range")},setBookmark:function(a,b){var c={replacedWith:b&&(null==b.nodeType?b.widget:b),insertLeft:b&&b.insertLeft,clearWhenEmpty:!1,shared:b&&b.shared};return a=xb(this,a),re(this,a,a,c,"bookmark")},findMarksAt:function(a){a=xb(this,a);var b=[],c=Df(this,a.line).markedSpans;if(c)for(var d=0;d<c.length;++d){var e=c[d];(null==e.from||e.from<=a.ch)&&(null==e.to||e.to>=a.ch)&&b.push(e.marker.parent||e.marker)}return b},findMarks:function(a,b,c){a=xb(this,a),b=xb(this,b);var d=[],e=a.line;return this.iter(a.line,b.line+1,function(f){var g=f.markedSpans;if(g)for(var h=0;h<g.length;h++){var i=g[h];e==a.line&&a.ch>i.to||null==i.from&&e!=a.line||e==b.line&&i.from>b.ch||c&&!c(i.marker)||d.push(i.marker.parent||i.marker)}++e}),d},getAllMarks:function(){var a=[];return this.iter(function(b){var c=b.markedSpans;if(c)for(var d=0;d<c.length;++d)null!=c[d].from&&a.push(c[d].marker)}),a},posFromIndex:function(a){var b,c=this.first;return this.iter(function(d){var e=d.text.length+1;return e>a?(b=a,!0):(a-=e,++c,void 0)}),xb(this,nb(c,b))},indexFromPos:function(a){a=xb(this,a);var b=a.ch;return a.line<this.first||a.ch<0?0:(this.iter(this.first,a.line,function(a){b+=a.text.length+1}),b)},copy:function(a){var b=new yf(Ff(this,this.first,this.first+this.size),this.modeOption,this.first);return b.scrollTop=this.scrollTop,b.scrollLeft=this.scrollLeft,b.sel=this.sel,b.extend=!1,a&&(b.history.undoDepth=this.history.undoDepth,b.setHistory(this.getHistory())),b},linkedDoc:function(a){a||(a={});var b=this.first,c=this.first+this.size;null!=a.from&&a.from>b&&(b=a.from),null!=a.to&&a.to<c&&(c=a.to);var d=new yf(Ff(this,b,c),a.mode||this.modeOption,b);return a.sharedHist&&(d.history=this.history),(this.linked||(this.linked=[])).push({doc:d,sharedHist:a.sharedHist}),d.linked=[{doc:this,isParent:!0,sharedHist:a.sharedHist}],ve(d,ue(this)),d},unlinkDoc:function(a){if(a instanceof y&&(a=a.doc),this.linked)for(var b=0;b<this.linked.length;++b){var c=this.linked[b];if(c.doc==a){this.linked.splice(b,1),a.unlinkDoc(this),we(ue(this));break}}if(a.history==this.history){var d=[a.id];Bf(a,function(a){d.push(a.id)},!0),a.history=new Lf(null),a.history.done=Wf(this.history.done,d),a.history.undone=Wf(this.history.undone,d)}},iterLinkedDocs:function(a){Bf(this,a)},getMode:function(){return this.mode},getEditor:function(){return this.cm}}),yf.prototype.eachLine=yf.prototype.iter;var zf="iter insert remove copy getEditor".split(" ");for(var Af in yf.prototype)yf.prototype.hasOwnProperty(Af)&&Bg(zf,Af)<0&&(y.prototype[Af]=function(a){return function(){return a.apply(this.doc,arguments)}}(yf.prototype[Af]));og(yf);var hg,$f=y.e_preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},_f=y.e_stopPropagation=function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},bg=y.e_stop=function(a){$f(a),_f(a)},eg=y.on=function(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var d=a._handlers||(a._handlers={}),e=d[b]||(d[b]=[]);e.push(c)}},fg=y.off=function(a,b,c){if(a.removeEventListener)a.removeEventListener(b,c,!1);else if(a.detachEvent)a.detachEvent("on"+b,c);else{var d=a._handlers&&a._handlers[b];if(!d)return;for(var e=0;e<d.length;++e)if(d[e]==c){d.splice(e,1);break}}},gg=y.signal=function(a,b){var c=a._handlers&&a._handlers[b];if(c)for(var d=Array.prototype.slice.call(arguments,2),e=0;e<c.length;++e)c[e].apply(null,d)},ig=0,pg=30,qg=y.Pass={toString:function(){return"CodeMirror.Pass"}},rg={scroll:!1},sg={origin:"*mouse"},tg={origin:"+move"};ug.prototype.set=function(a,b){clearTimeout(this.id),this.id=setTimeout(b,a)};var vg=y.countColumn=function(a,b,c,d,e){null==b&&(b=a.search(/[^\s\u00a0]/),-1==b&&(b=a.length));for(var f=d||0,g=e||0;;){var h=a.indexOf("	",f);if(0>h||h>=b)return g+(b-f);g+=h-f,g+=c-g%c,f=h+1}},xg=[""],Ag=function(a){a.select()};p?Ag=function(a){a.selectionStart=0,a.selectionEnd=a.value.length}:g&&(Ag=function(a){try{a.select()}catch(b){}}),[].indexOf&&(Bg=function(a,b){return a.indexOf(b)}),[].map&&(Cg=function(a,b){return a.map(b)});var Mg,Gg=/[\u00df\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,Hg=y.isWordChar=function(a){return/\w/.test(a)||a>"\x80"&&(a.toUpperCase()!=a.toLowerCase()||Gg.test(a))},Jg=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;Mg=document.createRange?function(a,b,c){var d=document.createRange();return d.setEnd(a,c),d.setStart(a,b),d}:function(a,b,c){var d=document.body.createTextRange();return d.moveToElementText(a.parentNode),d.collapse(!0),d.moveEnd("character",c),d.moveStart("character",b),d},b&&(Qg=function(){try{return document.activeElement}catch(a){return document.body}});var $g,ah,ch,Wg=!1,Zg=function(){if(d)return!1;var a=Lg("div");return"draggable"in a||"dragDrop"in a}(),eh=y.splitLines=3!="\n\nb".split(/\n/).length?function(a){for(var b=0,c=[],d=a.length;d>=b;){var e=a.indexOf("\n",b);-1==e&&(e=a.length);var f=a.slice(b,"\r"==a.charAt(e-1)?e-1:e),g=f.indexOf("\r");-1!=g?(c.push(f.slice(0,g)),b+=g+1):(c.push(f),b=e+1)}return c}:function(a){return a.split(/\r\n?|\n/)},fh=window.getSelection?function(a){try{return a.selectionStart!=a.selectionEnd}catch(b){return!1}}:function(a){try{var b=a.ownerDocument.selection.createRange()}catch(c){}return b&&b.parentElement()==a?0!=b.compareEndPoints("StartToEnd",b):!1},gh=function(){var a=Lg("div");return"oncopy"in a?!0:(a.setAttribute("oncopy","return;"),"function"==typeof a.oncopy)}(),hh={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",107:"=",109:"-",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"};y.keyNames=hh,function(){for(var a=0;10>a;a++)hh[a+48]=hh[a+96]=String(a);for(var a=65;90>=a;a++)hh[a]=String.fromCharCode(a);for(var a=1;12>=a;a++)hh[a+111]=hh[a+63235]="F"+a}();var qh,vh=function(){function c(c){return 247>=c?a.charAt(c):c>=1424&&1524>=c?"R":c>=1536&&1773>=c?b.charAt(c-1536):c>=1774&&2220>=c?"r":c>=8192&&8203>=c?"w":8204==c?"b":"L"}function j(a,b,c){this.level=a,this.from=b,this.to=c}var a="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",b="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",d=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,e=/[stwN]/,f=/[LRr]/,g=/[Lb1n]/,h=/[1n]/,i="L";return function(a){if(!d.test(a))return!1;for(var m,b=a.length,k=[],l=0;b>l;++l)k.push(m=c(a.charCodeAt(l)));for(var l=0,n=i;b>l;++l){var m=k[l];"m"==m?k[l]=n:n=m}for(var l=0,o=i;b>l;++l){var m=k[l];"1"==m&&"r"==o?k[l]="n":f.test(m)&&(o=m,"r"==m&&(k[l]="R"))}for(var l=1,n=k[0];b-1>l;++l){var m=k[l];"+"==m&&"1"==n&&"1"==k[l+1]?k[l]="1":","!=m||n!=k[l+1]||"1"!=n&&"n"!=n||(k[l]=n),n=m}for(var l=0;b>l;++l){var m=k[l];if(","==m)k[l]="N";else if("%"==m){for(var p=l+1;b>p&&"%"==k[p];++p);for(var q=l&&"!"==k[l-1]||b>p&&"1"==k[p]?"1":"N",r=l;p>r;++r)k[r]=q;l=p-1}}for(var l=0,o=i;b>l;++l){var m=k[l];"L"==o&&"1"==m?k[l]="L":f.test(m)&&(o=m)}for(var l=0;b>l;++l)if(e.test(k[l])){for(var p=l+1;b>p&&e.test(k[p]);++p);for(var s="L"==(l?k[l-1]:i),t="L"==(b>p?k[p]:i),q=s||t?"L":"R",r=l;p>r;++r)k[r]=q;l=p-1}for(var v,u=[],l=0;b>l;)if(g.test(k[l])){var w=l;for(++l;b>l&&g.test(k[l]);++l);u.push(new j(0,w,l))}else{var x=l,y=u.length;for(++l;b>l&&"L"!=k[l];++l);for(var r=x;l>r;)if(h.test(k[r])){r>x&&u.splice(y,0,new j(1,x,r));var z=r;for(++r;l>r&&h.test(k[r]);++r);u.splice(y,0,new j(2,z,r)),x=r
}else++r;l>x&&u.splice(y,0,new j(1,x,l))}return 1==u[0].level&&(v=a.match(/^\s+/))&&(u[0].from=v[0].length,u.unshift(new j(0,0,v[0].length))),1==zg(u).level&&(v=a.match(/\s+$/))&&(zg(u).to-=v[0].length,u.push(new j(0,b-v[0].length,b))),u[0].level!=zg(u).level&&u.push(new j(u[0].level,b,b)),u}}();return y.version="4.1.1",y}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("javascript",function(b,c){function l(a){for(var c,b=!1,d=!1;null!=(c=a.next());){if(!b){if("/"==c&&!d)return;"["==c?d=!0:d&&"]"==c&&(d=!1)}b=!b&&"\\"==c}}function o(a,b,c){return m=a,n=c,b}function p(a,b){var c=a.next();if('"'==c||"'"==c)return b.tokenize=q(c),b.tokenize(a,b);if("."==c&&a.match(/^\d+(?:[eE][+\-]?\d+)?/))return o("number","number");if("."==c&&a.match(".."))return o("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(c))return o(c);if("="==c&&a.eat(">"))return o("=>","operator");if("0"==c&&a.eat(/x/i))return a.eatWhile(/[\da-f]/i),o("number","number");if(/\d/.test(c))return a.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),o("number","number");if("/"==c)return a.eat("*")?(b.tokenize=r,r(a,b)):a.eat("/")?(a.skipToEnd(),o("comment","comment")):"operator"==b.lastType||"keyword c"==b.lastType||"sof"==b.lastType||/^[\[{}\(,;:]$/.test(b.lastType)?(l(a),a.eatWhile(/[gimy]/),o("regexp","string-2")):(a.eatWhile(j),o("operator","operator",a.current()));if("`"==c)return b.tokenize=s,s(a,b);if("#"==c)return a.skipToEnd(),o("error","error");if(j.test(c))return a.eatWhile(j),o("operator","operator",a.current());a.eatWhile(/[\w\$_]/);var d=a.current(),e=i.propertyIsEnumerable(d)&&i[d];return e&&"."!=b.lastType?o(e.type,e.style,d):o("variable","variable",d)}function q(a){return function(b,c){var e,d=!1;if(f&&"@"==b.peek()&&b.match(k))return c.tokenize=p,o("jsonld-keyword","meta");for(;null!=(e=b.next())&&(e!=a||d);)d=!d&&"\\"==e;return d||(c.tokenize=p),o("string","string")}}function r(a,b){for(var d,c=!1;d=a.next();){if("/"==d&&c){b.tokenize=p;break}c="*"==d}return o("comment","comment")}function s(a,b){for(var d,c=!1;null!=(d=a.next());){if(!c&&("`"==d||"$"==d&&a.eat("{"))){b.tokenize=p;break}c=!c&&"\\"==d}return o("quasi","string-2",a.current())}function u(a,b){b.fatArrowAt&&(b.fatArrowAt=null);var c=a.string.indexOf("=>",a.start);if(!(0>c)){for(var d=0,e=!1,f=c-1;f>=0;--f){var g=a.string.charAt(f),h=t.indexOf(g);if(h>=0&&3>h){if(!d){++f;break}if(0==--d)break}else if(h>=3&&6>h)++d;else if(/[$\w]/.test(g))e=!0;else if(e&&!d){++f;break}}e&&!d&&(b.fatArrowAt=f)}}function w(a,b,c,d,e,f){this.indented=a,this.column=b,this.type=c,this.prev=e,this.info=f,null!=d&&(this.align=d)}function x(a,b){for(var c=a.localVars;c;c=c.next)if(c.name==b)return!0;for(var d=a.context;d;d=d.prev)for(var c=d.vars;c;c=c.next)if(c.name==b)return!0}function y(a,b,c,d,e){var f=a.cc;for(z.state=a,z.stream=e,z.marked=null,z.cc=f,a.lexical.hasOwnProperty("align")||(a.lexical.align=!0);;){var h=f.length?f.pop():g?K:J;if(h(c,d)){for(;f.length&&f[f.length-1].lex;)f.pop()();return z.marked?z.marked:"variable"==c&&x(a,d)?"variable-2":b}}}function A(){for(var a=arguments.length-1;a>=0;a--)z.cc.push(arguments[a])}function B(){return A.apply(null,arguments),!0}function C(a){function b(b){for(var c=b;c;c=c.next)if(c.name==a)return!0;return!1}var d=z.state;if(d.context){if(z.marked="def",b(d.localVars))return;d.localVars={name:a,next:d.localVars}}else{if(b(d.globalVars))return;c.globalVars&&(d.globalVars={name:a,next:d.globalVars})}}function E(){z.state.context={prev:z.state.context,vars:z.state.localVars},z.state.localVars=D}function F(){z.state.localVars=z.state.context.vars,z.state.context=z.state.context.prev}function G(a,b){var c=function(){var c=z.state,d=c.indented;"stat"==c.lexical.type&&(d=c.lexical.indented),c.lexical=new w(d,z.stream.column(),a,null,c.lexical,b)};return c.lex=!0,c}function H(){var a=z.state;a.lexical.prev&&(")"==a.lexical.type&&(a.indented=a.lexical.indented),a.lexical=a.lexical.prev)}function I(a){function b(c){return c==a?B():";"==a?A():B(b)}return b}function J(a,b){return"var"==a?B(G("vardef",b.length),db,I(";"),H):"keyword a"==a?B(G("form"),K,J,H):"keyword b"==a?B(G("form"),J,H):"{"==a?B(G("}"),ab,H):";"==a?B():"if"==a?("else"==z.state.lexical.info&&z.state.cc[z.state.cc.length-1]==H&&z.state.cc.pop()(),B(G("form"),K,J,H,ib)):"function"==a?B(ob):"for"==a?B(G("form"),jb,J,H):"variable"==a?B(G("stat"),V):"switch"==a?B(G("form"),K,G("}","switch"),I("{"),ab,H,H):"case"==a?B(K,I(":")):"default"==a?B(I(":")):"catch"==a?B(G("form"),E,I("("),pb,I(")"),J,H,F):"module"==a?B(G("form"),E,tb,F,H):"class"==a?B(G("form"),qb,sb,H):"export"==a?B(G("form"),ub,H):"import"==a?B(G("form"),vb,H):A(G("stat"),K,I(";"),H)}function K(a){return M(a,!1)}function L(a){return M(a,!0)}function M(a,b){if(z.state.fatArrowAt==z.stream.start){var c=b?U:T;if("("==a)return B(E,G(")"),$(eb,")"),H,I("=>"),c,F);if("variable"==a)return A(E,eb,I("=>"),c,F)}var d=b?Q:P;return v.hasOwnProperty(a)?B(d):"function"==a?B(ob,d):"keyword c"==a?B(b?O:N):"("==a?B(G(")"),N,Ab,I(")"),H,d):"operator"==a||"spread"==a?B(b?L:K):"["==a?B(G("]"),yb,H,d):"{"==a?_(X,"}",null,d):"quasi"==a?A(R,d):B()}function N(a){return a.match(/[;\}\)\],]/)?A():A(K)}function O(a){return a.match(/[;\}\)\],]/)?A():A(L)}function P(a,b){return","==a?B(K):Q(a,b,!1)}function Q(a,b,c){var d=0==c?P:Q,e=0==c?K:L;return"=>"==b?B(E,c?U:T,F):"operator"==a?/\+\+|--/.test(b)?B(d):"?"==b?B(K,I(":"),e):B(e):"quasi"==a?A(R,d):";"!=a?"("==a?_(L,")","call",d):"."==a?B(W,d):"["==a?B(G("]"),N,I("]"),H,d):void 0:void 0}function R(a,b){return"quasi"!=a?A():"${"!=b.slice(b.length-2)?B(R):B(K,S)}function S(a){return"}"==a?(z.marked="string-2",z.state.tokenize=s,B(R)):void 0}function T(a){return u(z.stream,z.state),"{"==a?A(J):A(K)}function U(a){return u(z.stream,z.state),"{"==a?A(J):A(L)}function V(a){return":"==a?B(H,J):A(P,I(";"),H)}function W(a){return"variable"==a?(z.marked="property",B()):void 0}function X(a,b){if("variable"==a){if(z.marked="property","get"==b||"set"==b)return B(Y)}else if("number"==a||"string"==a)z.marked=f?"property":a+" property";else if("["==a)return B(K,I("]"),Z);return v.hasOwnProperty(a)?B(Z):void 0}function Y(a){return"variable"!=a?A(Z):(z.marked="property",B(ob))}function Z(a){return":"==a?B(L):"("==a?A(ob):void 0}function $(a,b){function c(d){if(","==d){var e=z.state.lexical;return"call"==e.info&&(e.pos=(e.pos||0)+1),B(a,c)}return d==b?B():B(I(b))}return function(d){return d==b?B():A(a,c)}}function _(a,b,c){for(var d=3;d<arguments.length;d++)z.cc.push(arguments[d]);return B(G(b,c),$(a,b),H)}function ab(a){return"}"==a?B():A(J,ab)}function bb(a){return h&&":"==a?B(cb):void 0}function cb(a){return"variable"==a?(z.marked="variable-3",B()):void 0}function db(){return A(eb,bb,gb,hb)}function eb(a,b){return"variable"==a?(C(b),B()):"["==a?_(eb,"]"):"{"==a?_(fb,"}"):void 0}function fb(a,b){return"variable"!=a||z.stream.match(/^\s*:/,!1)?("variable"==a&&(z.marked="property"),B(I(":"),eb,gb)):(C(b),B(gb))}function gb(a,b){return"="==b?B(L):void 0}function hb(a){return","==a?B(db):void 0}function ib(a,b){return"keyword b"==a&&"else"==b?B(G("form","else"),J,H):void 0}function jb(a){return"("==a?B(G(")"),kb,I(")"),H):void 0}function kb(a){return"var"==a?B(db,I(";"),mb):";"==a?B(mb):"variable"==a?B(lb):A(K,I(";"),mb)}function lb(a,b){return"in"==b||"of"==b?(z.marked="keyword",B(K)):B(P,mb)}function mb(a,b){return";"==a?B(nb):"in"==b||"of"==b?(z.marked="keyword",B(K)):A(K,I(";"),nb)}function nb(a){")"!=a&&B(K)}function ob(a,b){return"*"==b?(z.marked="keyword",B(ob)):"variable"==a?(C(b),B(ob)):"("==a?B(E,G(")"),$(pb,")"),H,J,F):void 0}function pb(a){return"spread"==a?B(pb):A(eb,bb)}function qb(a,b){return"variable"==a?(C(b),B(rb)):void 0}function rb(a,b){return"extends"==b?B(K):void 0}function sb(a){return"{"==a?_(X,"}"):void 0}function tb(a,b){return"string"==a?B(J):"variable"==a?(C(b),B(xb)):void 0}function ub(a,b){return"*"==b?(z.marked="keyword",B(xb,I(";"))):"default"==b?(z.marked="keyword",B(K,I(";"))):A(J)}function vb(a){return"string"==a?B():A(wb,xb)}function wb(a,b){return"{"==a?_(wb,"}"):("variable"==a&&C(b),B())}function xb(a,b){return"from"==b?(z.marked="keyword",B(K)):void 0}function yb(a){return"]"==a?B():A(L,zb)}function zb(a){return"for"==a?A(Ab,I("]")):","==a?B($(L,"]")):A($(L,"]"))}function Ab(a){return"for"==a?B(jb,Ab):"if"==a?B(K,Ab):void 0}var m,n,d=b.indentUnit,e=c.statementIndent,f=c.jsonld,g=c.json||f,h=c.typescript,i=function(){function a(a){return{type:a,style:"keyword"}}var b=a("keyword a"),c=a("keyword b"),d=a("keyword c"),e=a("operator"),f={type:"atom",style:"atom"},g={"if":a("if"),"while":b,"with":b,"else":c,"do":c,"try":c,"finally":c,"return":d,"break":d,"continue":d,"new":d,"delete":d,"throw":d,"debugger":d,"var":a("var"),"const":a("var"),let:a("var"),"function":a("function"),"catch":a("catch"),"for":a("for"),"switch":a("switch"),"case":a("case"),"default":a("default"),"in":e,"typeof":e,"instanceof":e,"true":f,"false":f,"null":f,undefined:f,NaN:f,Infinity:f,"this":a("this"),module:a("module"),"class":a("class"),"super":a("atom"),yield:d,"export":a("export"),"import":a("import"),"extends":d};if(h){var i={type:"variable",style:"variable-3"},j={"interface":a("interface"),"extends":a("extends"),constructor:a("constructor"),"public":a("public"),"private":a("private"),"protected":a("protected"),"static":a("static"),string:i,number:i,bool:i,any:i};for(var k in j)g[k]=j[k]}return g}(),j=/[+\-*&%=<>!?|~^]/,k=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,t="([{}])",v={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,"this":!0,"jsonld-keyword":!0},z={state:null,column:null,marked:null,cc:null},D={name:"this",next:{name:"arguments"}};return H.lex=!0,{startState:function(a){var b={tokenize:p,lastType:"sof",cc:[],lexical:new w((a||0)-d,0,"block",!1),localVars:c.localVars,context:c.localVars&&{vars:c.localVars},indented:0};return c.globalVars&&"object"==typeof c.globalVars&&(b.globalVars=c.globalVars),b},token:function(a,b){if(a.sol()&&(b.lexical.hasOwnProperty("align")||(b.lexical.align=!1),b.indented=a.indentation(),u(a,b)),b.tokenize!=r&&a.eatSpace())return null;var c=b.tokenize(a,b);return"comment"==m?c:(b.lastType="operator"!=m||"++"!=n&&"--"!=n?m:"incdec",y(b,c,m,n,a))},indent:function(b,f){if(b.tokenize==r)return a.Pass;if(b.tokenize!=p)return 0;var g=f&&f.charAt(0),h=b.lexical;if(!/^\s*else\b/.test(f))for(var i=b.cc.length-1;i>=0;--i){var j=b.cc[i];if(j==H)h=h.prev;else if(j!=ib)break}"stat"==h.type&&"}"==g&&(h=h.prev),e&&")"==h.type&&"stat"==h.prev.type&&(h=h.prev);var k=h.type,l=g==k;return"vardef"==k?h.indented+("operator"==b.lastType||","==b.lastType?h.info+1:0):"form"==k&&"{"==g?h.indented:"form"==k?h.indented+d:"stat"==k?h.indented+("operator"==b.lastType||","==b.lastType?e||d:0):"switch"!=h.info||l||0==c.doubleIndentSwitch?h.align?h.column+(l?0:1):h.indented+(l?0:d):h.indented+(/^(?:case|default)\b/.test(f)?d:2*d)},electricChars:":{}",blockCommentStart:g?null:"/*",blockCommentEnd:g?null:"*/",lineComment:g?null:"//",fold:"brace",helperType:g?"json":"javascript",jsonldMode:f,jsonMode:g}}),a.defineMIME("text/javascript","javascript"),a.defineMIME("text/ecmascript","javascript"),a.defineMIME("application/javascript","javascript"),a.defineMIME("application/ecmascript","javascript"),a.defineMIME("application/json",{name:"javascript",json:!0}),a.defineMIME("application/x-json",{name:"javascript",json:!0}),a.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),a.defineMIME("text/typescript",{name:"javascript",typescript:!0}),a.defineMIME("application/typescript",{name:"javascript",typescript:!0})}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){function f(a,b){var c=a.getRange(e(b.line,b.ch-1),e(b.line,b.ch+1));return 2==c.length?c:null}function g(b){for(var c={name:"autoCloseBrackets",Backspace:function(c){if(c.getOption("disableInput"))return a.Pass;for(var d=c.listSelections(),g=0;g<d.length;g++){if(!d[g].empty())return a.Pass;var h=f(c,d[g].head);if(!h||0!=b.indexOf(h)%2)return a.Pass}for(var g=d.length-1;g>=0;g--){var i=d[g].head;c.replaceRange("",e(i.line,i.ch-1),e(i.line,i.ch+1))}}},g="",h=0;h<b.length;h+=2)!function(b,f){b!=f&&(g+=f),c["'"+b+"'"]=function(c){if(c.getOption("disableInput"))return a.Pass;for(var i,j,h=c.listSelections(),k=0;k<h.length;k++){var n,l=h[k],m=l.head;if("'"==b&&"comment"==c.getTokenTypeAt(m))return a.Pass;var j=c.getRange(m,e(m.line,m.ch+1));if(l.empty())if(b==f&&j==f)n=c.getRange(m,e(m.line,m.ch+3))==b+b+b?"skipThree":"skip";else if(b==f&&m.ch>1&&c.getRange(e(m.line,m.ch-2),m)==b+b&&(m.ch<=2||c.getRange(e(m.line,m.ch-3),e(m.line,m.ch-2))!=b))n="addFour";else{if(b==f&&a.isWordChar(j))return a.Pass;if(!(c.getLine(m.line).length==m.ch||g.indexOf(j)>=0||d.test(j)))return a.Pass;n="both"}else n="surround";if(i){if(i!=n)return a.Pass}else i=n}c.operation(function(){if("skip"==i)c.execCommand("goCharRight");else if("skipThree"==i)for(var a=0;3>a;a++)c.execCommand("goCharRight");else if("surround"==i){for(var d=c.getSelections(),a=0;a<d.length;a++)d[a]=b+d[a]+f;c.replaceSelections(d,"around")}else"both"==i?(c.replaceSelection(b+f,null),c.execCommand("goCharLeft")):"addFour"==i&&(c.replaceSelection(b+b+b+b,"before"),c.execCommand("goCharRight"))})},b!=f&&(c["'"+f+"'"]=function(b){for(var c=b.listSelections(),d=0;d<c.length;d++){var g=c[d];if(!g.empty()||b.getRange(g.head,e(g.head.line,g.head.ch+1))!=f)return a.Pass}b.execCommand("goCharRight")})}(b.charAt(h),b.charAt(h+1));return c}function h(b){return function(c){if(c.getOption("disableInput"))return a.Pass;for(var d=c.listSelections(),e=0;e<d.length;e++){if(!d[e].empty())return a.Pass;var g=f(c,d[e].head);if(!g||0!=b.indexOf(g)%2)return a.Pass}c.operation(function(){c.replaceSelection("\n\n",null),c.execCommand("goCharLeft"),d=c.listSelections();for(var a=0;a<d.length;a++){var b=d[a].head.line;c.indentLine(b,null,!0),c.indentLine(b+1,null,!0)}})}}var b="()[]{}''\"\"",c="[]{}",d=/\s/,e=a.Pos;a.defineOption("autoCloseBrackets",!1,function(d,e,f){if(f!=a.Init&&f&&d.removeKeyMap("autoCloseBrackets"),e){var i=b,j=c;"string"==typeof e?i=e:"object"==typeof e&&(null!=e.pairs&&(i=e.pairs),null!=e.explode&&(j=e.explode));var k=g(i);j&&(k.Enter=h(j)),d.addKeyMap(k)}})}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){function d(b){if(b.getOption("disableInput"))return a.Pass;for(var d,c=b.listSelections(),f=[],g=0;g<c.length;g++){var h=c[g].head,i=b.getTokenAt(h);if("comment"!=i.type)return a.Pass;var j=a.innerMode(b.getMode(),i.state).mode;if(d){if(d!=j)return a.Pass}else d=j;var k=null;if(d.blockCommentStart&&d.blockCommentContinue){var n,l=i.string.indexOf(d.blockCommentEnd),m=b.getRange(a.Pos(h.line,0),a.Pos(h.line,i.end));if(-1!=l&&l==i.string.length-d.blockCommentEnd.length&&h.ch>=l);else if(0==i.string.indexOf(d.blockCommentStart)){if(k=m.slice(0,i.start),!/^\s*$/.test(k)){k="";for(var o=0;o<i.start;++o)k+=" "}}else-1!=(n=m.indexOf(d.blockCommentContinue))&&n+d.blockCommentContinue.length>i.start&&/^\s*$/.test(m.slice(0,n))&&(k=m.slice(0,n));null!=k&&(k+=d.blockCommentContinue)}if(null==k&&d.lineComment&&e(b)){var p=b.getLine(h.line),n=p.indexOf(d.lineComment);n>-1&&(k=p.slice(0,n),/\S/.test(k)?k=null:k+=d.lineComment+p.slice(n+d.lineComment.length).match(/^\s*/)[0])}if(null==k)return a.Pass;f[g]="\n"+k}b.operation(function(){for(var a=c.length-1;a>=0;a--)b.replaceRange(f[a],c[a].from(),c[a].to(),"+insert")})}function e(a){var b=a.getOption("continueComments");return b&&"object"==typeof b?b.continueLineComment!==!1:!0}for(var b=["clike","css","javascript"],c=0;c<b.length;++c)a.extendMode(b[c],{blockCommentContinue:" * "});a.defineOption("continueComments",null,function(b,c,e){if(e&&e!=a.Init&&b.removeKeyMap("continueComment"),c){var f="Enter";"string"==typeof c?f=c:"object"==typeof c&&c.key&&(f=c.key);var g={name:"continueComment"};g[f]=d,b.addKeyMap(g)}})}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){function c(a,b){for(var c=0,d=a.length;d>c;++c)b(a[c])}function d(a,b){if(!Array.prototype.indexOf){for(var c=a.length;c--;)if(a[c]===b)return!0;return!1}return-1!=a.indexOf(b)}function e(c,d,e,f){var g=c.getCursor(),h=e(c,g),i=h;if(!/\b(?:string|comment)\b/.test(h.type)){for(h.state=a.innerMode(c.getMode(),h.state).state,/^[\w$_]*$/.test(h.string)||(h=i={start:g.ch,end:g.ch,string:"",state:h.state,type:"."==h.string?"property":null});"property"==i.type;){if(i=e(c,b(g.line,i.start)),"."!=i.string)return;if(i=e(c,b(g.line,i.start)),!j)var j=[];j.push(i)}return{list:n(h,j,d,f),from:b(g.line,h.start),to:b(g.line,h.end)}}}function f(a,b){return e(a,l,function(a,b){return a.getTokenAt(b)},b)}function g(a,b){var c=a.getTokenAt(b);return b.ch==c.start+1&&"."==c.string.charAt(0)?(c.end=c.start,c.string=".",c.type="property"):/^\.[\w$_]*$/.test(c.string)&&(c.type="property",c.start++,c.string=c.string.replace(/\./,"")),c}function h(a,b){return e(a,m,g,b)}function n(a,b,e,f){function l(a){0!=a.lastIndexOf(h,0)||d(g,a)||g.push(a)}function m(a){"string"==typeof a?c(i,l):a instanceof Array?c(j,l):a instanceof Function&&c(k,l);for(var b in a)l(b)}var g=[],h=a.string;if(b&&b.length){var o,n=b.pop();for(n.type&&0===n.type.indexOf("variable")?(f&&f.additionalContext&&(o=f.additionalContext[n.string]),o=o||window[n.string]):"string"==n.type?o="":"atom"==n.type?o=1:"function"==n.type&&(null==window.jQuery||"$"!=n.string&&"jQuery"!=n.string||"function"!=typeof window.jQuery?null!=window._&&"_"==n.string&&"function"==typeof window._&&(o=window._()):o=window.jQuery());null!=o&&b.length;)o=o[b.pop().string];null!=o&&m(o)}else{for(var p=a.state.localVars;p;p=p.next)l(p.name);for(var p=a.state.globalVars;p;p=p.next)l(p.name);m(window),c(e,l)}return g}var b=a.Pos;a.registerHelper("hint","javascript",f),a.registerHelper("hint","coffeescript",h);var i="charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),j="length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),k="prototype apply call bind".split(" "),l="break case catch continue debugger default delete do else false finally for function if in instanceof new null return switch throw true try typeof var void while with".split(" "),m="and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ")}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){function e(a,b,e,g){var h=a.getLineHandle(b.line),i=b.ch-1,j=i>=0&&d[h.text.charAt(i)]||d[h.text.charAt(++i)];if(!j)return null;var k=">"==j.charAt(1)?1:-1;if(e&&k>0!=(i==b.ch))return null;var l=a.getTokenTypeAt(c(b.line,i+1)),m=f(a,c(b.line,i+(k>0?1:0)),k,l||null,g);return null==m?null:{from:c(b.line,i),to:m&&m.pos,match:m&&m.ch==j.charAt(0),forward:k>0}}function f(a,b,e,f,g){for(var h=g&&g.maxScanLineLength||1e4,i=g&&g.maxScanLines||1e3,j=[],k=g&&g.bracketRegex?g.bracketRegex:/[(){}[\]]/,l=e>0?Math.min(b.line+i,a.lastLine()+1):Math.max(a.firstLine()-1,b.line-i),m=b.line;m!=l;m+=e){var n=a.getLine(m);if(n){var o=e>0?0:n.length-1,p=e>0?n.length:-1;if(!(n.length>h))for(m==b.line&&(o=b.ch-(0>e?1:0));o!=p;o+=e){var q=n.charAt(o);if(k.test(q)&&(void 0===f||a.getTokenTypeAt(c(m,o+1))==f)){var r=d[q];if(">"==r.charAt(1)==e>0)j.push(q);else{if(!j.length)return{pos:c(m,o),ch:q};j.pop()}}}}}return m-e==(e>0?a.lastLine():a.firstLine())?!1:null}function g(a,d,f){for(var g=a.state.matchBrackets.maxHighlightLineLength||1e3,h=[],i=a.listSelections(),j=0;j<i.length;j++){var k=i[j].empty()&&e(a,i[j].head,!1,f);if(k&&a.getLine(k.from.line).length<=g){var l=k.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";h.push(a.markText(k.from,c(k.from.line,k.from.ch+1),{className:l})),k.to&&a.getLine(k.to.line).length<=g&&h.push(a.markText(k.to,c(k.to.line,k.to.ch+1),{className:l}))}}if(h.length){b&&a.state.focused&&a.display.input.focus();var m=function(){a.operation(function(){for(var a=0;a<h.length;a++)h[a].clear()})};if(!d)return m;setTimeout(m,800)}}function i(a){a.operation(function(){h&&(h(),h=null),h=g(a,!1,a.state.matchBrackets)})}var b=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),c=a.Pos,d={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<"},h=null;a.defineOption("matchBrackets",!1,function(b,c,d){d&&d!=a.Init&&b.off("cursorActivity",i),c&&(b.state.matchBrackets="object"==typeof c?c:{},b.on("cursorActivity",i))}),a.defineExtension("matchBrackets",function(){g(this,!0)}),a.defineExtension("findMatchingBracket",function(a,b,c){return e(this,a,b,c)}),a.defineExtension("scanForBracket",function(a,b,c,d){return f(this,a,b,c,d)})}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";function d(a,b,c){this.cm=a,this.getHints=b,this.options=c,this.widget=this.onClose=null}function e(a){return"string"==typeof a?a:a.text}function f(a,b){function e(a,e){var f;f="string"!=typeof e?function(a){return e(a,b)}:c.hasOwnProperty(e)?c[e]:e,d[a]=f}var c={Up:function(){b.moveFocus(-1)},Down:function(){b.moveFocus(1)},PageUp:function(){b.moveFocus(-b.menuSize()+1,!0)},PageDown:function(){b.moveFocus(b.menuSize()-1,!0)},Home:function(){b.setFocus(0)},End:function(){b.setFocus(b.length-1)},Enter:b.pick,Tab:b.pick,Esc:b.close},d=a.customKeys?{}:c;if(a.customKeys)for(var f in a.customKeys)a.customKeys.hasOwnProperty(f)&&e(f,a.customKeys[f]);if(a.extraKeys)for(var f in a.extraKeys)a.extraKeys.hasOwnProperty(f)&&e(f,a.extraKeys[f]);return d}function g(a,b){for(;b&&b!=a;){if("LI"===b.nodeName.toUpperCase()&&b.parentNode==a)return b;b=b.parentNode}}function h(d,h){this.completion=d,this.data=h;var i=this,j=d.cm,k=d.options,l=this.hints=document.createElement("ul");l.className="CodeMirror-hints",this.selectedHint=k.getDefaultSelection?k.getDefaultSelection(j,k,h):0;for(var m=h.list,n=0;n<m.length;++n){var o=l.appendChild(document.createElement("li")),p=m[n],q=b+(n!=this.selectedHint?"":" "+c);null!=p.className&&(q=p.className+" "+q),o.className=q,p.render?p.render(o,h,p):o.appendChild(document.createTextNode(p.displayText||e(p))),o.hintId=n}var r=j.cursorCoords(k.alignWithWord!==!1?h.from:null),s=r.left,t=r.bottom,u=!0;l.style.left=s+"px",l.style.top=t+"px";var v=window.innerWidth||Math.max(document.body.offsetWidth,document.documentElement.offsetWidth),w=window.innerHeight||Math.max(document.body.offsetHeight,document.documentElement.offsetHeight);(k.container||document.body).appendChild(l);var x=l.getBoundingClientRect(),y=x.bottom-w;if(y>0){var z=x.bottom-x.top,A=x.top-(r.bottom-r.top);if(A-z>0)l.style.top=(t=A-z)+"px",u=!1;else if(z>w){l.style.height=w-5+"px",l.style.top=(t=r.bottom-x.top)+"px";var B=j.getCursor();h.from.ch!=B.ch&&(r=j.cursorCoords(B),l.style.left=(s=r.left)+"px",x=l.getBoundingClientRect())}}var C=x.left-v;if(C>0&&(x.right-x.left>v&&(l.style.width=v-5+"px",C-=x.right-x.left-v),l.style.left=(s=r.left-C)+"px"),j.addKeyMap(this.keyMap=f(k,{moveFocus:function(a,b){i.changeActive(i.selectedHint+a,b)},setFocus:function(a){i.changeActive(a)},menuSize:function(){return i.screenAmount()},length:m.length,close:function(){d.close()},pick:function(){i.pick()},data:h})),k.closeOnUnfocus!==!1){var D;j.on("blur",this.onBlur=function(){D=setTimeout(function(){d.close()},100)}),j.on("focus",this.onFocus=function(){clearTimeout(D)})}var E=j.getScrollInfo();return j.on("scroll",this.onScroll=function(){var a=j.getScrollInfo(),b=j.getWrapperElement().getBoundingClientRect(),c=t+E.top-a.top,e=c-(window.pageYOffset||(document.documentElement||document.body).scrollTop);return u||(e+=l.offsetHeight),e<=b.top||e>=b.bottom?d.close():(l.style.top=c+"px",l.style.left=s+E.left-a.left+"px",void 0)}),a.on(l,"dblclick",function(a){var b=g(l,a.target||a.srcElement);b&&null!=b.hintId&&(i.changeActive(b.hintId),i.pick())}),a.on(l,"click",function(a){var b=g(l,a.target||a.srcElement);b&&null!=b.hintId&&(i.changeActive(b.hintId),k.completeOnSingleClick&&i.pick())}),a.on(l,"mousedown",function(){setTimeout(function(){j.focus()},20)}),a.signal(h,"select",m[0],l.firstChild),!0}var b="CodeMirror-hint",c="CodeMirror-hint-active";a.showHint=function(b,c,e){if(!(b.listSelections().length>1||b.somethingSelected())){if(null==c){if(e&&e.async)return;c=a.hint.auto}b.state.completionActive&&b.state.completionActive.close();var f=b.state.completionActive=new d(b,c,e||{});return a.signal(b,"startCompletion",b),f.options.async?(c(b,function(a){f.showHints(a)},f.options),void 0):f.showHints(c(b,f.options))}},d.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.widget&&this.widget.close(),this.onClose&&this.onClose(),a.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(b,c){var d=b.list[c];d.hint?d.hint(this.cm,b,d):this.cm.replaceRange(e(d),d.from||b.from,d.to||b.to,"complete"),a.signal(b,"pick",d),this.close()},showHints:function(a){return a&&a.list.length&&this.active()?(0!=this.options.completeSingle&&1==a.list.length?this.pick(a,0):this.showWidget(a),void 0):this.close()},showWidget:function(b){function l(){e||(e=!0,d.close(),d.cm.off("cursorActivity",p),b&&a.signal(b,"close"))}function m(){e||(a.signal(b,"update"),d.options.async?d.getHints(d.cm,n,d.options):n(d.getHints(d.cm,d.options)))}function n(a){if(b=a,!e){if(!b||!b.list.length)return l();d.widget&&d.widget.close(),d.widget=new h(d,b)}}function o(){c&&(k(c),c=0)}function p(){o();var a=d.cm.getCursor(),b=d.cm.getLine(a.line);a.line!=g.line||b.length-a.ch!=i-g.ch||a.ch<g.ch||d.cm.somethingSelected()||a.ch&&f.test(b.charAt(a.ch-1))?d.close():(c=j(m),d.widget&&d.widget.close())}this.widget=new h(this,b),a.signal(b,"shown");var e,c=0,d=this,f=this.options.closeCharacters||/[\s()\[\]{};:>,]/,g=this.cm.getCursor(),i=this.cm.getLine(g.line).length,j=window.requestAnimationFrame||function(a){return setTimeout(a,1e3/60)},k=window.cancelAnimationFrame||clearTimeout;this.cm.on("cursorActivity",p),this.onClose=l}},h.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var a=this.completion.cm;this.completion.options.closeOnUnfocus!==!1&&(a.off("blur",this.onBlur),a.off("focus",this.onFocus)),a.off("scroll",this.onScroll)}},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(b,d){if(b>=this.data.list.length?b=d?this.data.list.length-1:0:0>b&&(b=d?0:this.data.list.length-1),this.selectedHint!=b){var e=this.hints.childNodes[this.selectedHint];e.className=e.className.replace(" "+c,""),e=this.hints.childNodes[this.selectedHint=b],e.className+=" "+c,e.offsetTop<this.hints.scrollTop?this.hints.scrollTop=e.offsetTop-3:e.offsetTop+e.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=e.offsetTop+e.offsetHeight-this.hints.clientHeight+3),a.signal(this.data,"select",this.data.list[this.selectedHint],e)}},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1}},a.registerHelper("hint","auto",function(b,c){var e,d=b.getHelpers(b.getCursor(),"hint");if(d.length)for(var f=0;f<d.length;f++){var g=d[f](b,c);if(g&&g.list.length)return g}else if(e=b.getHelper(b.getCursor(),"hintWords")){if(e)return a.hint.fromList(b,{words:e})}else if(a.hint.anyword)return a.hint.anyword(b,c)}),a.registerHelper("hint","fromList",function(b,c){for(var d=b.getCursor(),e=b.getTokenAt(d),f=[],g=0;g<c.words.length;g++){var h=c.words[g];h.slice(0,e.string.length)==e.string&&f.push(h)}return f.length?{list:f,from:a.Pos(d.line,e.start),to:a.Pos(d.line,e.end)}:void 0}),a.commands.autocomplete=a.showHint});
/* Port of strftime() by T. H. Doan (https://thdoan.github.io/strftime/)
 *
 * Day of year (%j) code based on Joe Orost's answer:
 * http://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
 *
 * Week number (%V) code based on Taco van den Broek's prototype:
 * http://techblog.procurios.nl/k/news/view/33796/14863/calculate-iso-8601-week-and-year-in-javascript.html
 * 
 * MIT License

Copyright (c) 2016 Tom Doan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
function strftime(sFormat, date) {
  if (!(date instanceof Date)) date = new Date();
  var nDay = date.getDay(),
    nDate = date.getDate(),
    nMonth = date.getMonth(),
    nYear = date.getFullYear(),
    nHour = date.getHours(),
    aDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    aMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    aDayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    isLeapYear = function() {
      return (nYear%4===0 && nYear%100!==0) || nYear%400===0;
    },
    getThursday = function() {
      var target = new Date(date);
      target.setDate(nDate - ((nDay+6)%7) + 3);
      return target;
    },
    zeroPad = function(nNum, nPad) {
      return ((Math.pow(10, nPad) + nNum) + '').slice(1);
    };
  return sFormat.replace(/%[a-z]/gi, function(sMatch) {
    return (({
      '%a': aDays[nDay].slice(0,3),
      '%A': aDays[nDay],
      '%b': aMonths[nMonth].slice(0,3),
      '%B': aMonths[nMonth],
      '%c': date.toUTCString(),
      '%C': Math.floor(nYear/100),
      '%d': zeroPad(nDate, 2),
      '%e': nDate,
      '%F': date.toISOString().slice(0,10),
      '%G': getThursday().getFullYear(),
      '%g': (getThursday().getFullYear() + '').slice(2),
      '%H': zeroPad(nHour, 2),
      '%I': zeroPad((nHour+11)%12 + 1, 2),
      '%j': zeroPad(aDayCount[nMonth] + nDate + ((nMonth>1 && isLeapYear()) ? 1 : 0), 3),
      '%k': nHour,
      '%l': (nHour+11)%12 + 1,
      '%m': zeroPad(nMonth + 1, 2),
      '%n': nMonth + 1,
      '%M': zeroPad(date.getMinutes(), 2),
      '%p': (nHour<12) ? 'AM' : 'PM',
      '%P': (nHour<12) ? 'am' : 'pm',
      '%s': Math.round(date.getTime()/1000),
      '%S': zeroPad(date.getSeconds(), 2),
      '%u': nDay || 7,
      '%V': (function() {
              var target = getThursday(),
                n1stThu = target.valueOf();
              target.setMonth(0, 1);
              var nJan1 = target.getDay();
              if (nJan1!==4) target.setMonth(0, 1 + ((4-nJan1)+7)%7);
              return zeroPad(1 + Math.ceil((n1stThu-target)/604800000), 2);
            })(),
      '%w': nDay,
      '%x': date.toLocaleDateString(),
      '%X': date.toLocaleTimeString(),
      '%y': (nYear + '').slice(2),
      '%Y': nYear,
      '%z': date.toTimeString().replace(/.+GMT([+-]\d+).+/, '$1'),
      '%Z': date.toTimeString().replace(/.+\((.+?)\)$/, '$1')
    }[sMatch] || '') + '') || sMatch;
  });
}

/*
 * jsGrid v1.5.3 (http://js-grid.com)
 * (c) 2016 Artem Tabalin
 * Licensed under MIT (https://github.com/tabalinas/jsgrid/blob/master/LICENSE)
 */

!function(a,b,c){function d(a,c){var d=b(a);d.data(f,this),this._container=d,this.data=[],this.fields=[],this._editingRow=null,this._sortField=null,this._sortOrder=i,this._firstDisplayingPage=1,this._init(c),this.render()}var e="JSGrid",f=e,g="JSGridItem",h="JSGridEditRow",i="asc",j="desc",k="{first}",l="{pages}",m="{prev}",n="{next}",o="{last}",p="{pageIndex}",q="{pageCount}",r="{itemCount}",s="javascript:void(0);",t=function(a,c){return b.isFunction(a)?a.apply(c,b.makeArray(arguments).slice(2)):a},u=function(a){var c=b.Deferred();return a&&a.then?a.then(function(){c.resolve.apply(c,arguments)},function(){c.reject.apply(c,arguments)}):c.resolve(a),c.promise()},v={loadData:b.noop,insertItem:b.noop,updateItem:b.noop,deleteItem:b.noop};d.prototype={width:"auto",height:"auto",updateOnResize:!0,rowClass:b.noop,rowRenderer:null,rowClick:function(a){this.editing&&this.editItem(b(a.event.target).closest("tr"))},rowDoubleClick:b.noop,noDataContent:"Not found",noDataRowClass:"jsgrid-nodata-row",heading:!0,headerRowRenderer:null,headerRowClass:"jsgrid-header-row",headerCellClass:"jsgrid-header-cell",filtering:!1,filterRowRenderer:null,filterRowClass:"jsgrid-filter-row",inserting:!1,insertRowRenderer:null,insertRowClass:"jsgrid-insert-row",editing:!1,editRowRenderer:null,editRowClass:"jsgrid-edit-row",confirmDeleting:!0,deleteConfirm:"Are you sure?",selecting:!0,selectedRowClass:"jsgrid-selected-row",oddRowClass:"jsgrid-row",evenRowClass:"jsgrid-alt-row",cellClass:"jsgrid-cell",sorting:!1,sortableClass:"jsgrid-header-sortable",sortAscClass:"jsgrid-header-sort jsgrid-header-sort-asc",sortDescClass:"jsgrid-header-sort jsgrid-header-sort-desc",paging:!1,pagerContainer:null,pageIndex:1,pageSize:20,pageButtonCount:15,pagerFormat:"Pages: {first} {prev} {pages} {next} {last} &nbsp;&nbsp; {pageIndex} of {pageCount}",pagePrevText:"Prev",pageNextText:"Next",pageFirstText:"First",pageLastText:"Last",pageNavigatorNextText:"...",pageNavigatorPrevText:"...",pagerContainerClass:"jsgrid-pager-container",pagerClass:"jsgrid-pager",pagerNavButtonClass:"jsgrid-pager-nav-button",pagerNavButtonInactiveClass:"jsgrid-pager-nav-inactive-button",pageClass:"jsgrid-pager-page",currentPageClass:"jsgrid-pager-current-page",customLoading:!1,pageLoading:!1,autoload:!1,controller:v,loadIndication:!0,loadIndicationDelay:500,loadMessage:"Please, wait...",loadShading:!0,invalidMessage:"Invalid data entered!",invalidNotify:function(c){var d=b.map(c.errors,function(a){return a.message||null});a.alert([this.invalidMessage].concat(d).join("\n"))},onInit:b.noop,onRefreshing:b.noop,onRefreshed:b.noop,onPageChanged:b.noop,onItemDeleting:b.noop,onItemDeleted:b.noop,onItemInserting:b.noop,onItemInserted:b.noop,onItemEditing:b.noop,onItemUpdating:b.noop,onItemUpdated:b.noop,onItemInvalid:b.noop,onDataLoading:b.noop,onDataLoaded:b.noop,onOptionChanging:b.noop,onOptionChanged:b.noop,onError:b.noop,invalidClass:"jsgrid-invalid",containerClass:"jsgrid",tableClass:"jsgrid-table",gridHeaderClass:"jsgrid-grid-header",gridBodyClass:"jsgrid-grid-body",_init:function(a){b.extend(this,a),this._initLoadStrategy(),this._initController(),this._initFields(),this._attachWindowLoadResize(),this._attachWindowResizeCallback(),this._callEventHandler(this.onInit)},loadStrategy:function(){return this.pageLoading?new jsGrid.loadStrategies.PageLoadingStrategy(this):new jsGrid.loadStrategies.DirectLoadingStrategy(this)},_initLoadStrategy:function(){this._loadStrategy=t(this.loadStrategy,this)},_initController:function(){this._controller=b.extend({},v,t(this.controller,this))},renderTemplate:function(a,b,d){args=[];for(var e in d)args.push(d[e]);return args.unshift(a,b),a=t.apply(null,args),a===c||null===a?"":a},loadIndicator:function(a){return new jsGrid.LoadIndicator(a)},validation:function(a){return jsGrid.Validation&&new jsGrid.Validation(a)},_initFields:function(){var a=this;a.fields=b.map(a.fields,function(c){if(b.isPlainObject(c)){var d=c.type&&jsGrid.fields[c.type]||jsGrid.Field;c=new d(c)}return c._grid=a,c})},_attachWindowLoadResize:function(){b(a).on("load",b.proxy(this._refreshSize,this))},_attachWindowResizeCallback:function(){this.updateOnResize&&b(a).on("resize",b.proxy(this._refreshSize,this))},_detachWindowResizeCallback:function(){b(a).off("resize",this._refreshSize)},option:function(a,b){var c,d;return 1===arguments.length?this[a]:(c={option:a,oldValue:this[a],newValue:b},this._callEventHandler(this.onOptionChanging,c),this._handleOptionChange(c.option,c.newValue),d={option:c.option,value:c.newValue},void this._callEventHandler(this.onOptionChanged,d))},fieldOption:function(a,b,c){return a=this._normalizeField(a),2===arguments.length?a[b]:(a[b]=c,void this._renderGrid())},_handleOptionChange:function(a,b){switch(this[a]=b,a){case"width":case"height":this._refreshSize();break;case"rowClass":case"rowRenderer":case"rowClick":case"rowDoubleClick":case"noDataRowClass":case"noDataContent":case"selecting":case"selectedRowClass":case"oddRowClass":case"evenRowClass":this._refreshContent();break;case"pageButtonCount":case"pagerFormat":case"pagePrevText":case"pageNextText":case"pageFirstText":case"pageLastText":case"pageNavigatorNextText":case"pageNavigatorPrevText":case"pagerClass":case"pagerNavButtonClass":case"pageClass":case"currentPageClass":case"pagerRenderer":this._refreshPager();break;case"fields":this._initFields(),this.render();break;case"data":case"editing":case"heading":case"filtering":case"inserting":case"paging":this.refresh();break;case"loadStrategy":case"pageLoading":this._initLoadStrategy(),this.search();break;case"pageIndex":this.openPage(b);break;case"pageSize":this.refresh(),this.search();break;case"editRowRenderer":case"editRowClass":this.cancelEdit();break;case"updateOnResize":this._detachWindowResizeCallback(),this._attachWindowResizeCallback();break;case"invalidNotify":case"invalidMessage":break;default:this.render()}},destroy:function(){this._detachWindowResizeCallback(),this._clear(),this._container.removeData(f)},render:function(){return this._renderGrid(),this.autoload?this.loadData():b.Deferred().resolve().promise()},_renderGrid:function(){this._clear(),this._container.addClass(this.containerClass).css("position","relative").append(this._createHeader()).append(this._createBody()),this._pagerContainer=this._createPagerContainer(),this._loadIndicator=this._createLoadIndicator(),this._validation=this._createValidation(),this.refresh()},_createLoadIndicator:function(){return t(this.loadIndicator,this,{message:this.loadMessage,shading:this.loadShading,container:this._container})},_createValidation:function(){return t(this.validation,this)},_clear:function(){this.cancelEdit(),clearTimeout(this._loadingTimer),this._pagerContainer&&this._pagerContainer.empty(),this._container.empty().css({position:"",width:"",height:""})},_createHeader:function(){var a=this._headerRow=this._createHeaderRow(),c=this._filterRow=this._createFilterRow(),d=this._insertRow=this._createInsertRow(),e=this._headerGrid=b("<table>").addClass(this.tableClass).append(a).append(c).append(d),f=this._header=b("<div>").addClass(this.gridHeaderClass).addClass(this._scrollBarWidth()?"jsgrid-header-scrollbar":"").append(e);return f},_createBody:function(){var a=this._content=b("<tbody>"),c=this._bodyGrid=b("<table>").addClass(this.tableClass).append(a),d=this._body=b("<div>").addClass(this.gridBodyClass).append(c).on("scroll",b.proxy(function(a){this._header.scrollLeft(a.target.scrollLeft)},this));return d},_createPagerContainer:function(){var a=this.pagerContainer||b("<div>").appendTo(this._container);return b(a).addClass(this.pagerContainerClass)},_eachField:function(a){var c=this;b.each(this.fields,function(b,d){d.visible&&a.call(c,d,b)})},_createHeaderRow:function(){if(b.isFunction(this.headerRowRenderer))return b(this.renderTemplate(this.headerRowRenderer,this));var a=b("<tr>").addClass(this.headerRowClass);return this._eachField(function(c,d){var e=this._prepareCell("<th>",c,"headercss",this.headerCellClass).append(this.renderTemplate(c.headerTemplate,c)).appendTo(a);this.sorting&&c.sorting&&e.addClass(this.sortableClass).on("click",b.proxy(function(){this.sort(d)},this))}),a},_prepareCell:function(a,c,d,e){return b(a).css("width",c.width).addClass(e||this.cellClass).addClass(d&&c[d]||c.css).addClass(c.align?"jsgrid-align-"+c.align:"")},_createFilterRow:function(){if(b.isFunction(this.filterRowRenderer))return b(this.renderTemplate(this.filterRowRenderer,this));var a=b("<tr>").addClass(this.filterRowClass);return this._eachField(function(b){this._prepareCell("<td>",b,"filtercss").append(this.renderTemplate(b.filterTemplate,b)).appendTo(a)}),a},_createInsertRow:function(){if(b.isFunction(this.insertRowRenderer))return b(this.renderTemplate(this.insertRowRenderer,this));var a=b("<tr>").addClass(this.insertRowClass);return this._eachField(function(b){this._prepareCell("<td>",b,"insertcss").append(this.renderTemplate(b.insertTemplate,b)).appendTo(a)}),a},_callEventHandler:function(a,c){return a.call(this,b.extend(c,{grid:this})),c},reset:function(){return this._resetSorting(),this._resetPager(),this._loadStrategy.reset()},_resetPager:function(){this._firstDisplayingPage=1,this._setPage(1)},_resetSorting:function(){this._sortField=null,this._sortOrder=i,this._clearSortingCss()},refresh:function(){this._callEventHandler(this.onRefreshing),this.cancelEdit(),this._refreshHeading(),this._refreshFiltering(),this._refreshInserting(),this._refreshContent(),this._refreshPager(),this._refreshSize(),this._callEventHandler(this.onRefreshed)},_refreshHeading:function(){this._headerRow.toggle(this.heading)},_refreshFiltering:function(){this._filterRow.toggle(this.filtering)},_refreshInserting:function(){this._insertRow.toggle(this.inserting)},_refreshContent:function(){var a=this._content;if(a.empty(),!this.data.length)return a.append(this._createNoDataRow()),this;for(var b=this._loadStrategy.firstDisplayIndex(),c=this._loadStrategy.lastDisplayIndex(),d=b;c>d;d++){var e=this.data[d];a.append(this._createRow(e,d))}},_createNoDataRow:function(){var a=0;return this._eachField(function(){a++}),b("<tr>").addClass(this.noDataRowClass).append(b("<td>").addClass(this.cellClass).attr("colspan",a).append(this.renderTemplate(this.noDataContent,this)))},_createRow:function(a,c){var d;return b.isFunction(this.rowRenderer)?d=this.renderTemplate(this.rowRenderer,this,{item:a,itemIndex:c}):(d=b("<tr>"),this._renderCells(d,a)),d.addClass(this._getRowClasses(a,c)).data(g,a).on("click",b.proxy(function(b){this.rowClick({item:a,itemIndex:c,event:b})},this)).on("dblclick",b.proxy(function(b){this.rowDoubleClick({item:a,itemIndex:c,event:b})},this)),this.selecting&&this._attachRowHover(d),d},_getRowClasses:function(a,b){var c=[];return c.push((b+1)%2?this.oddRowClass:this.evenRowClass),c.push(t(this.rowClass,this,a,b)),c.join(" ")},_attachRowHover:function(a){var c=this.selectedRowClass;a.hover(function(){b(this).addClass(c)},function(){b(this).removeClass(c)})},_renderCells:function(a,b){return this._eachField(function(c){a.append(this._createCell(b,c))}),this},_createCell:function(a,c){var d,e=this._getItemFieldValue(a,c),f={value:e,item:a};return d=b.isFunction(c.cellRenderer)?this.renderTemplate(c.cellRenderer,c,f):b("<td>").append(this.renderTemplate(c.itemTemplate||e,c,f)),this._prepareCell(d,c)},_getItemFieldValue:function(a,b){for(var c=b.name.split("."),d=a[c.shift()];d&&c.length;)d=d[c.shift()];return d},_setItemFieldValue:function(a,b,c){for(var d=b.name.split("."),e=a,f=d[0];e&&d.length;)a=e,f=d.shift(),e=a[f];if(!e)for(;d.length;)a=a[f]={},f=d.shift();a[f]=c},sort:function(a,c){return b.isPlainObject(a)&&(c=a.order,a=a.field),this._clearSortingCss(),this._setSortingParams(a,c),this._setSortingCss(),this._loadStrategy.sort()},_clearSortingCss:function(){this._headerRow.find("th").removeClass(this.sortAscClass).removeClass(this.sortDescClass)},_setSortingParams:function(a,b){a=this._normalizeField(a),b=b||(this._sortField===a?this._reversedSortOrder(this._sortOrder):i),this._sortField=a,this._sortOrder=b},_normalizeField:function(a){return b.isNumeric(a)?this.fields[a]:"string"==typeof a?b.grep(this.fields,function(b){return b.name===a})[0]:a},_reversedSortOrder:function(a){return a===i?j:i},_setSortingCss:function(){var a=this._visibleFieldIndex(this._sortField);this._headerRow.find("th").eq(a).addClass(this._sortOrder===i?this.sortAscClass:this.sortDescClass)},_visibleFieldIndex:function(a){return b.inArray(a,b.grep(this.fields,function(a){return a.visible}))},_sortData:function(){var a=this._sortFactor(),b=this._sortField;b&&this.data.sort(function(c,d){return a*b.sortingFunc(c[b.name],d[b.name])})},_sortFactor:function(){return this._sortOrder===i?1:-1},_itemsCount:function(){return this._loadStrategy.itemsCount()},_pagesCount:function(){var a=this._itemsCount(),b=this.pageSize;return Math.floor(a/b)+(a%b?1:0)},_refreshPager:function(){var a=this._pagerContainer;a.empty(),this.paging&&a.append(this._createPager());var b=this.paging&&this._pagesCount()>1;a.toggle(b)},_createPager:function(){var a;return a=b.isFunction(this.pagerRenderer)?b(this.pagerRenderer({pageIndex:this.pageIndex,pageCount:this._pagesCount()})):b("<div>").append(this._createPagerByFormat()),a.addClass(this.pagerClass),a},_createPagerByFormat:function(){var a=this.pageIndex,c=this._pagesCount(),d=this._itemsCount(),e=this.pagerFormat.split(" ");return b.map(e,b.proxy(function(e){var f=e;return e===l?f=this._createPages():e===k?f=this._createPagerNavButton(this.pageFirstText,1,a>1):e===m?f=this._createPagerNavButton(this.pagePrevText,a-1,a>1):e===n?f=this._createPagerNavButton(this.pageNextText,a+1,c>a):e===o?f=this._createPagerNavButton(this.pageLastText,c,c>a):e===p?f=a:e===q?f=c:e===r&&(f=d),b.isArray(f)?f.concat([" "]):[f," "]},this))},_createPages:function(){var a=this._pagesCount(),b=this.pageButtonCount,c=this._firstDisplayingPage,d=[];c>1&&d.push(this._createPagerPageNavButton(this.pageNavigatorPrevText,this.showPrevPages));for(var e=0,f=c;b>e&&a>=f;e++,f++)d.push(f===this.pageIndex?this._createPagerCurrentPage():this._createPagerPage(f));return a>c+b-1&&d.push(this._createPagerPageNavButton(this.pageNavigatorNextText,this.showNextPages)),d},_createPagerNavButton:function(a,c,d){return this._createPagerButton(a,this.pagerNavButtonClass+(d?"":" "+this.pagerNavButtonInactiveClass),d?function(){this.openPage(c)}:b.noop)},_createPagerPageNavButton:function(a,b){return this._createPagerButton(a,this.pagerNavButtonClass,b)},_createPagerPage:function(a){return this._createPagerButton(a,this.pageClass,function(){this.openPage(a)})},_createPagerButton:function(a,c,d){var e=b("<a>").attr("href",s).html(a).on("click",b.proxy(d,this));return b("<span>").addClass(c).append(e)},_createPagerCurrentPage:function(){return b("<span>").addClass(this.pageClass).addClass(this.currentPageClass).text(this.pageIndex)},_refreshSize:function(){this._refreshHeight(),this._refreshWidth()},_refreshWidth:function(){var a="auto"===this.width?this._getAutoWidth():this.width;this._container.width(a)},_getAutoWidth:function(){var a=this._headerGrid,b=this._header;a.width("auto");var c=a.outerWidth(),d=b.outerWidth()-b.innerWidth();return a.width(""),c+d},_scrollBarWidth:function(){var a;return function(){if(a===c){var d=b("<div style='width:50px;height:50px;overflow:hidden;position:absolute;top:-10000px;left:-10000px;'></div>"),e=b("<div style='height:100px;'></div>");d.append(e).appendTo("body");var f=e.innerWidth();d.css("overflow-y","auto");var g=e.innerWidth();d.remove(),a=f-g}return a}}(),_refreshHeight:function(){var a,b=this._container,c=this._pagerContainer,d=this.height;b.height(d),"auto"!==d&&(d=b.height(),a=this._header.outerHeight(!0),c.parents(b).length&&(a+=c.outerHeight(!0)),this._body.outerHeight(d-a))},showPrevPages:function(){var a=this._firstDisplayingPage,b=this.pageButtonCount;this._firstDisplayingPage=a>b?a-b:1,this._refreshPager()},showNextPages:function(){var a=this._firstDisplayingPage,b=this.pageButtonCount,c=this._pagesCount();this._firstDisplayingPage=a+2*b>c?c-b+1:a+b,this._refreshPager()},openPage:function(a){1>a||a>this._pagesCount()||(this._setPage(a),this._loadStrategy.openPage(a))},_setPage:function(a){var b=this._firstDisplayingPage,c=this.pageButtonCount;this.pageIndex=a,b>a&&(this._firstDisplayingPage=a),a>b+c-1&&(this._firstDisplayingPage=a-c+1),this._callEventHandler(this.onPageChanged,{pageIndex:a})},_controllerCall:function(a,c,d,e){if(d)return b.Deferred().reject().promise();this._showLoading();var f=this._controller;if(!f||!f[a])throw Error("controller has no method '"+a+"'");return u(f[a](c)).done(b.proxy(e,this)).fail(b.proxy(this._errorHandler,this)).always(b.proxy(this._hideLoading,this))},_errorHandler:function(){this._callEventHandler(this.onError,{args:b.makeArray(arguments)})},_showLoading:function(){this.loadIndication&&(clearTimeout(this._loadingTimer),this._loadingTimer=setTimeout(b.proxy(function(){this._loadIndicator.show()},this),this.loadIndicationDelay))},_hideLoading:function(){this.loadIndication&&(clearTimeout(this._loadingTimer),this._loadIndicator.hide())},search:function(a){return this._resetSorting(),this._resetPager(),this.loadData(a)},loadData:function(a){a=a||(this.filtering?this.getFilter():{}),b.extend(a,this._loadStrategy.loadParams(),this._sortingParams());var c=this._callEventHandler(this.onDataLoading,{filter:a});return this._controllerCall("loadData",a,c.cancel,function(a){a&&(this._loadStrategy.finishLoad(a),this._callEventHandler(this.onDataLoaded,{data:a}))})},getFilter:function(){var a={};return this._eachField(function(b){b.filtering&&this._setItemFieldValue(a,b,b.filterValue())}),a},_sortingParams:function(){return this.sorting&&this._sortField?{sortField:this._sortField.name,sortOrder:this._sortOrder}:{}},getSorting:function(){var a=this._sortingParams();return{field:a.sortField,order:a.sortOrder}},clearFilter:function(){var a=this._createFilterRow();return this._filterRow.replaceWith(a),this._filterRow=a,this.search()},insertItem:function(a){var c=a||this._getValidatedInsertItem();if(!c)return b.Deferred().reject().promise();var d=this._callEventHandler(this.onItemInserting,{item:c});return this._controllerCall("insertItem",c,d.cancel,function(a){a=a||c,this._loadStrategy.finishInsert(a),this._callEventHandler(this.onItemInserted,{item:a})})},_getValidatedInsertItem:function(){var a=this._getInsertItem();return this._validateItem(a,this._insertRow)?a:null},_getInsertItem:function(){var a={};return this._eachField(function(b){b.inserting&&this._setItemFieldValue(a,b,b.insertValue())}),a},_validateItem:function(a,c){var d=[],e={item:a,itemIndex:this._rowIndex(c),row:c};if(this._eachField(function(f){if(f.validate&&(c!==this._insertRow||f.inserting)&&(c!==this._getEditRow()||f.editing)){var g=this._getItemFieldValue(a,f),h=this._validation.validate(b.extend({value:g,rules:f.validate},e));this._setCellValidity(c.children().eq(this._visibleFieldIndex(f)),h),h.length&&d.push.apply(d,b.map(h,function(a){return{field:f,message:a}}))}}),!d.length)return!0;var f=b.extend({errors:d},e);return this._callEventHandler(this.onItemInvalid,f),this.invalidNotify(f),!1},_setCellValidity:function(a,b){a.toggleClass(this.invalidClass,!!b.length).attr("title",b.join("\n"))},clearInsert:function(){var a=this._createInsertRow();this._insertRow.replaceWith(a),this._insertRow=a,this.refresh()},editItem:function(a){var b=this.rowByItem(a);b.length&&this._editRow(b)},rowByItem:function(a){return a.jquery||a.nodeType?b(a):this._content.find("tr").filter(function(){return b.data(this,g)===a})},_editRow:function(a){if(this.editing){var b=a.data(g),c=this._callEventHandler(this.onItemEditing,{row:a,item:b,itemIndex:this._itemIndex(b)});if(!c.cancel){this._editingRow&&this.cancelEdit();var d=this._createEditRow(b);this._editingRow=a,a.hide(),d.insertBefore(a),a.data(h,d)}}},_createEditRow:function(a){if(b.isFunction(this.editRowRenderer))return b(this.renderTemplate(this.editRowRenderer,this,{item:a,itemIndex:this._itemIndex(a)}));var c=b("<tr>").addClass(this.editRowClass);return this._eachField(function(b){var d=this._getItemFieldValue(a,b);this._prepareCell("<td>",b,"editcss").append(this.renderTemplate(b.editTemplate||"",b,{value:d,item:a})).appendTo(c)}),c},updateItem:function(a,b){1===arguments.length&&(b=a);var c=a?this.rowByItem(a):this._editingRow;return(b=b||this._getValidatedEditedItem())?this._updateRow(c,b):void 0},_getValidatedEditedItem:function(){var a=this._getEditedItem();return this._validateItem(a,this._getEditRow())?a:null},_updateRow:function(a,c){var d=a.data(g),e=this._itemIndex(d),f=b.extend(!0,{},d,c),h=this._callEventHandler(this.onItemUpdating,{row:a,item:f,itemIndex:e,previousItem:d});return this._controllerCall("updateItem",f,h.cancel,function(g){var h=b.extend(!0,{},d);f=g||b.extend(!0,d,c);var i=this._finishUpdate(a,f,e);this._callEventHandler(this.onItemUpdated,{row:i,item:f,itemIndex:e,previousItem:h})})},_rowIndex:function(a){return this._content.children().index(b(a))},_itemIndex:function(a){return b.inArray(a,this.data)},_finishUpdate:function(a,b,c){this.cancelEdit(),this.data[c]=b;var d=this._createRow(b,c);return a.replaceWith(d),d},_getEditedItem:function(){var a={};return this._eachField(function(b){b.editing&&this._setItemFieldValue(a,b,b.editValue())}),a},cancelEdit:function(){this._editingRow&&(this._getEditRow().remove(),this._editingRow.show(),this._editingRow=null)},_getEditRow:function(){return this._editingRow&&this._editingRow.data(h)},deleteItem:function(b){var c=this.rowByItem(b);if(c.length&&(!this.confirmDeleting||a.confirm(t(this.deleteConfirm,this,c.data(g)))))return this._deleteRow(c)},_deleteRow:function(a){var b=a.data(g),c=this._itemIndex(b),d=this._callEventHandler(this.onItemDeleting,{row:a,item:b,itemIndex:c});return this._controllerCall("deleteItem",b,d.cancel,function(){this._loadStrategy.finishDelete(b,c),this._callEventHandler(this.onItemDeleted,{row:a,item:b,itemIndex:c})})}},b.fn.jsGrid=function(a){var e=b.makeArray(arguments),g=e.slice(1),h=this;return this.each(function(){var e,i=b(this),j=i.data(f);if(j)if("string"==typeof a){if(e=j[a].apply(j,g),e!==c&&e!==j)return h=e,!1}else j._detachWindowResizeCallback(),j._init(a),j.render();else new d(i,a)}),h};var w={},x=function(a){var c;b.isPlainObject(a)?c=d.prototype:(c=w[a].prototype,a=arguments[1]||{}),b.extend(c,a)},y={},z=function(a){var c=b.isPlainObject(a)?a:y[a];if(!c)throw Error("unknown locale "+a);A(jsGrid,c)},A=function(a,c){b.each(c,function(c,d){return b.isPlainObject(d)?void A(a[c]||a[c[0].toUpperCase()+c.slice(1)],d):void(a.hasOwnProperty(c)?a[c]=d:a.prototype[c]=d)})};a.jsGrid={Grid:d,fields:w,setDefaults:x,locales:y,locale:z,version:"1.5.3"}}(window,jQuery),function(a,b){function c(a){this._init(a)}c.prototype={container:"body",message:"Loading...",shading:!0,zIndex:1e3,shaderClass:"jsgrid-load-shader",loadPanelClass:"jsgrid-load-panel",_init:function(a){b.extend(!0,this,a),this._initContainer(),this._initShader(),this._initLoadPanel()},_initContainer:function(){this._container=b(this.container)},_initShader:function(){this.shading&&(this._shader=b("<div>").addClass(this.shaderClass).hide().css({position:"absolute",top:0,right:0,bottom:0,left:0,zIndex:this.zIndex}).appendTo(this._container))},_initLoadPanel:function(){this._loadPanel=b("<div>").addClass(this.loadPanelClass).text(this.message).hide().css({position:"absolute",top:"50%",left:"50%",zIndex:this.zIndex}).appendTo(this._container)},show:function(){var a=this._loadPanel.show(),b=a.outerWidth(),c=a.outerHeight();a.css({marginTop:-c/2,marginLeft:-b/2}),this._shader.show()},hide:function(){this._loadPanel.hide(),this._shader.hide()}},a.LoadIndicator=c}(jsGrid,jQuery),function(a,b){function c(a){this._grid=a}function d(a){this._grid=a,this._itemsCount=0}c.prototype={firstDisplayIndex:function(){var a=this._grid;return a.option("paging")?(a.option("pageIndex")-1)*a.option("pageSize"):0},lastDisplayIndex:function(){var a=this._grid,b=a.option("data").length;return a.option("paging")?Math.min(a.option("pageIndex")*a.option("pageSize"),b):b},itemsCount:function(){return this._grid.option("data").length},openPage:function(){this._grid.refresh()},loadParams:function(){return{}},sort:function(){return this._grid._sortData(),this._grid.refresh(),b.Deferred().resolve().promise()},reset:function(){return this._grid.refresh(),b.Deferred().resolve().promise()},finishLoad:function(a){this._grid.option("data",a)},finishInsert:function(a){var b=this._grid;b.option("data").push(a),b.refresh()},finishDelete:function(a,b){var c=this._grid;c.option("data").splice(b,1),c.reset()}},d.prototype={firstDisplayIndex:function(){return 0},lastDisplayIndex:function(){return this._grid.option("data").length},itemsCount:function(){return this._itemsCount},openPage:function(){this._grid.loadData()},loadParams:function(){var a=this._grid;return{pageIndex:a.option("pageIndex"),pageSize:a.option("pageSize")}},reset:function(){return this._grid.loadData()},sort:function(){return this._grid.loadData()},finishLoad:function(a){this._itemsCount=a.itemsCount,this._grid.option("data",a.data)},finishInsert:function(){this._grid.search()},finishDelete:function(){this._grid.search()}},a.loadStrategies={DirectLoadingStrategy:c,PageLoadingStrategy:d}}(jsGrid,jQuery),function(a){var b=function(a){return"undefined"!=typeof a&&null!==a},c={string:function(a,c){return b(a)||b(c)?b(a)?b(c)?(""+a).localeCompare(""+c):1:-1:0},number:function(a,b){return a-b},date:function(a,b){return a-b},numberAsString:function(a,b){return parseFloat(a)-parseFloat(b)}};a.sortStrategies=c}(jsGrid,jQuery),function(a,b,c){function d(a){this._init(a)}d.prototype={_init:function(a){b.extend(!0,this,a)},validate:function(a){var c=[];return b.each(this._normalizeRules(a.rules),function(d,e){if(!e.validator(a.value,a.item,e.param)){var f=b.isFunction(e.message)?e.message(a.value,a.item):e.message;c.push(f)}}),c},_normalizeRules:function(a){return b.isArray(a)||(a=[a]),b.map(a,b.proxy(function(a){return this._normalizeRule(a)},this))},_normalizeRule:function(a){if("string"==typeof a&&(a={validator:a}),b.isFunction(a)&&(a={validator:a}),!b.isPlainObject(a))throw Error("wrong validation config specified");return a=b.extend({},a),b.isFunction(a.validator)?a:this._applyNamedValidator(a,a.validator)},_applyNamedValidator:function(a,c){delete a.validator;var d=e[c];if(!d)throw Error('unknown validator "'+c+'"');return b.isFunction(d)&&(d={validator:d}),b.extend({},d,a)}},a.Validation=d;var e={required:{message:"Field is required",validator:function(a){return a!==c&&null!==a&&""!==a}},rangeLength:{message:"Field value length is out of the defined range",validator:function(a,b,c){return a.length>=c[0]&&a.length<=c[1]}},minLength:{message:"Field value is too short",validator:function(a,b,c){return a.length>=c}},maxLength:{message:"Field value is too long",validator:function(a,b,c){return a.length<=c}},pattern:{message:"Field value is not matching the defined pattern",validator:function(a,b,c){return"string"==typeof c&&(c=new RegExp("^(?:"+c+")$")),c.test(a)}},range:{message:"Field value is out of the defined range",validator:function(a,b,c){return a>=c[0]&&a<=c[1]}},min:{message:"Field value is too small",validator:function(a,b,c){return a>=c}},max:{message:"Field value is too large",validator:function(a,b,c){return c>=a}}};a.validators=e}(jsGrid,jQuery),function(a,b,c){function d(a){b.extend(!0,this,a),this.sortingFunc=this._getSortingFunc()}d.prototype={name:"",title:null,css:"",align:"",width:100,visible:!0,filtering:!0,inserting:!0,editing:!0,sorting:!0,sorter:"string",headerTemplate:function(){return this.title===c||null===this.title?this.name:this.title},itemTemplate:function(a){return a},filterTemplate:function(){return""},insertTemplate:function(){return""},editTemplate:function(a,b){return this._value=a,this.itemTemplate(a,b)},filterValue:function(){return""},insertValue:function(){return""},editValue:function(){return this._value},_getSortingFunc:function(){var c=this.sorter;if(b.isFunction(c))return c;if("string"==typeof c)return a.sortStrategies[c];throw Error('wrong sorter for the field "'+this.name+'"!')}},a.Field=d}(jsGrid,jQuery),function(a,b){function c(a){d.call(this,a)}var d=a.Field;c.prototype=new d({autosearch:!0,readOnly:!1,filterTemplate:function(){if(!this.filtering)return"";var a=this._grid,b=this.filterControl=this._createTextBox();return this.autosearch&&b.on("keypress",function(b){13===b.which&&(a.search(),b.preventDefault())}),b},insertTemplate:function(){return this.inserting?this.insertControl=this._createTextBox():""},editTemplate:function(a){if(!this.editing)return this.itemTemplate.apply(this,arguments);var b=this.editControl=this._createTextBox();return b.val(a),b},filterValue:function(){return this.filterControl.val()},insertValue:function(){return this.insertControl.val()},editValue:function(){return this.editControl.val()},_createTextBox:function(){return b("<input>").attr("type","text").prop("readonly",!!this.readOnly)}}),a.fields.text=a.TextField=c}(jsGrid,jQuery),function(a,b,c){function d(a){e.call(this,a)}var e=a.TextField;d.prototype=new e({sorter:"number",align:"right",readOnly:!1,filterValue:function(){return this.filterControl.val()?parseInt(this.filterControl.val()||0,10):c},insertValue:function(){return this.insertControl.val()?parseInt(this.insertControl.val()||0,10):c},editValue:function(){return this.editControl.val()?parseInt(this.editControl.val()||0,10):c},_createTextBox:function(){return b("<input>").attr("type","number").prop("readonly",!!this.readOnly)}}),a.fields.number=a.NumberField=d}(jsGrid,jQuery),function(a,b){function c(a){d.call(this,a)}var d=a.TextField;c.prototype=new d({insertTemplate:function(){return this.inserting?this.insertControl=this._createTextArea():""},editTemplate:function(a){if(!this.editing)return this.itemTemplate.apply(this,arguments);var b=this.editControl=this._createTextArea();return b.val(a),b},_createTextArea:function(){return b("<textarea>").prop("readonly",!!this.readOnly)}}),a.fields.textarea=a.TextAreaField=c}(jsGrid,jQuery),function(a,b,c){function d(a){if(this.items=[],this.selectedIndex=-1,this.valueField="",this.textField="",a.valueField&&a.items.length){var b=a.items[0][a.valueField];this.valueType=typeof b===f?f:g}this.sorter=this.valueType,e.call(this,a)}var e=a.NumberField,f="number",g="string";d.prototype=new e({align:"center",valueType:f,itemTemplate:function(a){var d,e=this.items,f=this.valueField,g=this.textField;d=f?b.grep(e,function(b){return b[f]===a})[0]||{}:e[a];var h=g?d[g]:d;return h===c||null===h?"":h},filterTemplate:function(){if(!this.filtering)return"";var a=this._grid,b=this.filterControl=this._createSelect();return this.autosearch&&b.on("change",function(){a.search()}),b},insertTemplate:function(){return this.inserting?this.insertControl=this._createSelect():""},editTemplate:function(a){if(!this.editing)return this.itemTemplate.apply(this,arguments);var b=this.editControl=this._createSelect();return a!==c&&b.val(a),b},filterValue:function(){var a=this.filterControl.val();return this.valueType===f?parseInt(a||0,10):a},insertValue:function(){var a=this.insertControl.val();return this.valueType===f?parseInt(a||0,10):a},editValue:function(){var a=this.editControl.val();return this.valueType===f?parseInt(a||0,10):a},_createSelect:function(){var a=b("<select>"),c=this.valueField,d=this.textField,e=this.selectedIndex;return b.each(this.items,function(f,g){var h=c?g[c]:f,i=d?g[d]:g,j=b("<option>").attr("value",h).text(i).appendTo(a);j.prop("selected",e===f)}),a.prop("disabled",!!this.readOnly),a}}),a.fields.select=a.SelectField=d}(jsGrid,jQuery),function(a,b,c){function d(a){e.call(this,a)}var e=a.Field;d.prototype=new e({sorter:"number",align:"center",autosearch:!0,itemTemplate:function(a){return this._createCheckbox().prop({checked:a,disabled:!0})},filterTemplate:function(){if(!this.filtering)return"";var a=this._grid,c=this.filterControl=this._createCheckbox();return c.prop({readOnly:!0,indeterminate:!0}),c.on("click",function(){var a=b(this);
a.prop("readOnly")?a.prop({checked:!1,readOnly:!1}):a.prop("checked")||a.prop({readOnly:!0,indeterminate:!0})}),this.autosearch&&c.on("click",function(){a.search()}),c},insertTemplate:function(){return this.inserting?this.insertControl=this._createCheckbox():""},editTemplate:function(a){if(!this.editing)return this.itemTemplate.apply(this,arguments);var b=this.editControl=this._createCheckbox();return b.prop("checked",a),b},filterValue:function(){return this.filterControl.get(0).indeterminate?c:this.filterControl.is(":checked")},insertValue:function(){return this.insertControl.is(":checked")},editValue:function(){return this.editControl.is(":checked")},_createCheckbox:function(){return b("<input>").attr("type","checkbox")}}),a.fields.checkbox=a.CheckboxField=d}(jsGrid,jQuery),function(a,b){function c(a){d.call(this,a),this._configInitialized=!1}var d=a.Field;c.prototype=new d({css:"jsgrid-control-field",align:"center",width:50,filtering:!1,inserting:!1,editing:!1,sorting:!1,buttonClass:"jsgrid-button",modeButtonClass:"jsgrid-mode-button",modeOnButtonClass:"jsgrid-mode-on-button",searchModeButtonClass:"jsgrid-search-mode-button",insertModeButtonClass:"jsgrid-insert-mode-button",editButtonClass:"jsgrid-edit-button",deleteButtonClass:"jsgrid-delete-button",searchButtonClass:"jsgrid-search-button",clearFilterButtonClass:"jsgrid-clear-filter-button",insertButtonClass:"jsgrid-insert-button",updateButtonClass:"jsgrid-update-button",cancelEditButtonClass:"jsgrid-cancel-edit-button",searchModeButtonTooltip:"Switch to searching",insertModeButtonTooltip:"Switch to inserting",editButtonTooltip:"Edit",deleteButtonTooltip:"Delete",searchButtonTooltip:"Search",clearFilterButtonTooltip:"Clear filter",insertButtonTooltip:"Insert",updateButtonTooltip:"Update",cancelEditButtonTooltip:"Cancel edit",editButton:!0,deleteButton:!0,clearFilterButton:!0,modeSwitchButton:!0,_initConfig:function(){this._hasFiltering=this._grid.filtering,this._hasInserting=this._grid.inserting,this._hasInserting&&this.modeSwitchButton&&(this._grid.inserting=!1),this._configInitialized=!0},headerTemplate:function(){this._configInitialized||this._initConfig();var a=this._hasFiltering,b=this._hasInserting;return this.modeSwitchButton&&(a||b)?a&&!b?this._createFilterSwitchButton():b&&!a?this._createInsertSwitchButton():this._createModeSwitchButton():""},itemTemplate:function(a,c){var d=b([]);return this.editButton&&(d=d.add(this._createEditButton(c))),this.deleteButton&&(d=d.add(this._createDeleteButton(c))),d},filterTemplate:function(){var a=this._createSearchButton();return this.clearFilterButton?a.add(this._createClearFilterButton()):a},insertTemplate:function(){return this._createInsertButton()},editTemplate:function(){return this._createUpdateButton().add(this._createCancelEditButton())},_createFilterSwitchButton:function(){return this._createOnOffSwitchButton("filtering",this.searchModeButtonClass,!0)},_createInsertSwitchButton:function(){return this._createOnOffSwitchButton("inserting",this.insertModeButtonClass,!1)},_createOnOffSwitchButton:function(a,c,d){var e=d,f=b.proxy(function(){g.toggleClass(this.modeOnButtonClass,e)},this),g=this._createGridButton(this.modeButtonClass+" "+c,"",function(b){e=!e,b.option(a,e),f()});return f(),g},_createModeSwitchButton:function(){var a=!1,c=b.proxy(function(){d.attr("title",a?this.searchModeButtonTooltip:this.insertModeButtonTooltip).toggleClass(this.insertModeButtonClass,!a).toggleClass(this.searchModeButtonClass,a)},this),d=this._createGridButton(this.modeButtonClass,"",function(b){a=!a,b.option("inserting",a),b.option("filtering",!a),c()});return c(),d},_createEditButton:function(a){return this._createGridButton(this.editButtonClass,this.editButtonTooltip,function(b,c){b.editItem(a),c.stopPropagation()})},_createDeleteButton:function(a){return this._createGridButton(this.deleteButtonClass,this.deleteButtonTooltip,function(b,c){b.deleteItem(a),c.stopPropagation()})},_createSearchButton:function(){return this._createGridButton(this.searchButtonClass,this.searchButtonTooltip,function(a){a.search()})},_createClearFilterButton:function(){return this._createGridButton(this.clearFilterButtonClass,this.clearFilterButtonTooltip,function(a){a.clearFilter()})},_createInsertButton:function(){return this._createGridButton(this.insertButtonClass,this.insertButtonTooltip,function(a){a.insertItem().done(function(){a.clearInsert()})})},_createUpdateButton:function(){return this._createGridButton(this.updateButtonClass,this.updateButtonTooltip,function(a,b){a.updateItem(),b.stopPropagation()})},_createCancelEditButton:function(){return this._createGridButton(this.cancelEditButtonClass,this.cancelEditButtonTooltip,function(a,b){a.cancelEdit(),b.stopPropagation()})},_createGridButton:function(a,c,d){var e=this._grid;return b("<input>").addClass(this.buttonClass).addClass(a).attr({type:"button",title:c}).on("click",function(a){d(e,a)})},editValue:function(){return""}}),a.fields.control=a.ControlField=c}(jsGrid,jQuery);
/** Trumbowyg v2.21.0 - A lightweight WYSIWYG editor - alex-d.github.io/Trumbowyg - License MIT - Author : Alexandre Demode (Alex-D) / alex-d.fr */
jQuery.trumbowyg={langs:{en:{viewHTML:"View HTML",undo:"Undo",redo:"Redo",formatting:"Formatting",p:"Paragraph",blockquote:"Quote",code:"Code",header:"Header",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",strong:"Strong",em:"Emphasis",del:"Deleted",superscript:"Superscript",subscript:"Subscript",unorderedList:"Unordered list",orderedList:"Ordered list",insertImage:"Insert Image",link:"Link",createLink:"Insert link",unlink:"Remove link",justifyLeft:"Align Left",justifyCenter:"Align Center",justifyRight:"Align Right",justifyFull:"Align Justify",horizontalRule:"Insert horizontal rule",removeformat:"Remove format",fullscreen:"Fullscreen",close:"Close",submit:"Confirm",reset:"Cancel",required:"Required",description:"Description",title:"Title",text:"Text",target:"Target",width:"Width"}},plugins:{},svgPath:null,hideButtonTexts:null},Object.defineProperty(jQuery.trumbowyg,"defaultOptions",{value:{lang:"en",fixedBtnPane:!1,fixedFullWidth:!1,autogrow:!1,autogrowOnEnter:!1,imageWidthModalEdit:!1,prefix:"trumbowyg-",semantic:!0,semanticKeepAttributes:!1,resetCss:!1,removeformatPasted:!1,tabToIndent:!1,tagsToRemove:[],tagsToKeep:["hr","img","embed","iframe","input"],btns:[["viewHTML"],["undo","redo"],["formatting"],["strong","em","del"],["superscript","subscript"],["link"],["insertImage"],["justifyLeft","justifyCenter","justifyRight","justifyFull"],["unorderedList","orderedList"],["horizontalRule"],["removeformat"],["fullscreen"]],btnsDef:{},changeActiveDropdownIcon:!1,inlineElementsSelector:"a,abbr,acronym,b,caption,cite,code,col,dfn,dir,dt,dd,em,font,hr,i,kbd,li,q,span,strikeout,strong,sub,sup,u",pasteHandlers:[],plugins:{},urlProtocol:!1,minimalLinks:!1,defaultLinkTarget:void 0},writable:!1,enumerable:!0,configurable:!1}),function(e,t,n,a){"use strict";var o="tbwconfirm",r="tbwcancel";a.fn.trumbowyg=function(e,t){var n="trumbowyg";if(e===Object(e)||!e)return this.each(function(){a(this).data(n)||a(this).data(n,new i(this,e))});if(1===this.length)try{var o=a(this).data(n);switch(e){case"execCmd":return o.execCmd(t.cmd,t.param,t.forceCss,t.skipTrumbowyg);case"openModal":return o.openModal(t.title,t.content);case"closeModal":return o.closeModal();case"openModalInsert":return o.openModalInsert(t.title,t.fields,t.callback);case"saveRange":return o.saveRange();case"getRange":return o.range;case"getRangeText":return o.getRangeText();case"restoreRange":return o.restoreRange();case"enable":return o.setDisabled(!1);case"disable":return o.setDisabled(!0);case"toggle":return o.toggle();case"destroy":return o.destroy();case"empty":return o.empty();case"html":return o.html(t)}}catch(r){}return!1};var i=function(o,r){var i=this,s="trumbowyg-icons",l=a.trumbowyg;i.doc=o.ownerDocument||n,i.$ta=a(o),i.$c=a(o),r=r||{},null!=r.lang||null!=l.langs[r.lang]?i.lang=a.extend(!0,{},l.langs.en,l.langs[r.lang]):i.lang=l.langs.en,i.hideButtonTexts=null!=l.hideButtonTexts?l.hideButtonTexts:r.hideButtonTexts;var d=null!=l.svgPath?l.svgPath:r.svgPath;if(i.hasSvg=d!==!1,i.svgPath=i.doc.querySelector("base")?t.location.href.split("#")[0]:"",0===a("#"+s,i.doc).length&&d!==!1){if(null==d){for(var c=n.getElementsByTagName("script"),u=0;u<c.length;u+=1){var g=c[u].src,f=g.match("trumbowyg(.min)?.js");null!=f&&(d=g.substring(0,g.indexOf(f[0]))+"ui/icons.svg")}null==d&&console.warn("You must define svgPath: https://goo.gl/CfTY9U")}var h=i.doc.createElement("div");h.id=s,i.doc.body.insertBefore(h,i.doc.body.childNodes[0]),a.ajax({async:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",dataType:"xml",crossDomain:!0,url:d,data:null,beforeSend:null,complete:null,success:function(e){h.innerHTML=(new XMLSerializer).serializeToString(e.documentElement)}})}var p=i.lang.header,m=function(){return(t.chrome||t.Intl&&Intl.v8BreakIterator)&&"CSS"in t};i.btnsDef={viewHTML:{fn:"toggle","class":"trumbowyg-not-disable"},undo:{isSupported:m,key:"Z"},redo:{isSupported:m,key:"Y"},p:{fn:"formatBlock"},blockquote:{fn:"formatBlock"},h1:{fn:"formatBlock",title:p+" 1"},h2:{fn:"formatBlock",title:p+" 2"},h3:{fn:"formatBlock",title:p+" 3"},h4:{fn:"formatBlock",title:p+" 4"},h5:{fn:"formatBlock",title:p+" 5"},h6:{fn:"formatBlock",title:p+" 6"},subscript:{tag:"sub"},superscript:{tag:"sup"},bold:{key:"B",tag:"b"},italic:{key:"I",tag:"i"},underline:{tag:"u"},strikethrough:{tag:"strike"},strong:{fn:"bold",key:"B"},em:{fn:"italic",key:"I"},del:{fn:"strikethrough"},createLink:{key:"K",tag:"a"},unlink:{},insertImage:{},justifyLeft:{tag:"left",forceCss:!0},justifyCenter:{tag:"center",forceCss:!0},justifyRight:{tag:"right",forceCss:!0},justifyFull:{tag:"justify",forceCss:!0},unorderedList:{fn:"insertUnorderedList",tag:"ul"},orderedList:{fn:"insertOrderedList",tag:"ol"},horizontalRule:{fn:"insertHorizontalRule"},removeformat:{},fullscreen:{"class":"trumbowyg-not-disable"},close:{fn:"destroy","class":"trumbowyg-not-disable"},formatting:{dropdown:["p","blockquote","h1","h2","h3","h4"],ico:"p"},link:{dropdown:["createLink","unlink"]}},i.o=a.extend(!0,{},l.defaultOptions,r),i.o.hasOwnProperty("imgDblClickHandler")||(i.o.imgDblClickHandler=i.getDefaultImgDblClickHandler()),i.urlPrefix=i.setupUrlPrefix(),i.disabled=i.o.disabled||"TEXTAREA"===o.nodeName&&o.disabled,r.btns?i.o.btns=r.btns:i.o.semantic||(i.o.btns[3]=["bold","italic","underline","strikethrough"]),a.each(i.o.btnsDef,function(e,t){i.addBtnDef(e,t)}),i.eventNamespace="trumbowyg-event",i.keys=[],i.tagToButton={},i.tagHandlers=[],i.pasteHandlers=[].concat(i.o.pasteHandlers),i.isIE=e.userAgent.indexOf("MSIE")!==-1||e.appVersion.indexOf("Trident/")!==-1,i.isMac=e.platform.toUpperCase().indexOf("MAC")!==-1,i.init()};i.prototype={DEFAULT_SEMANTIC_MAP:{b:"strong",i:"em",s:"del",strike:"del",div:"p"},init:function(){var e=this;e.height=e.$ta.height(),e.initPlugins();try{e.doc.execCommand("enableObjectResizing",!1,!1),e.doc.execCommand("defaultParagraphSeparator",!1,"p")}catch(t){}e.buildEditor(),e.buildBtnPane(),e.fixedBtnPaneEvents(),e.buildOverlay(),setTimeout(function(){e.disabled&&e.setDisabled(!0),e.$c.trigger("tbwinit")})},addBtnDef:function(e,t){this.btnsDef[e]=a.extend(t,this.btnsDef[e]||{})},setupUrlPrefix:function(){var e=this.o.urlProtocol;if(e)return"string"!=typeof e?"https://":e.replace("://","")+"://"},buildEditor:function(){var e=this,n=e.o.prefix,o="";e.$box=a("<div/>",{"class":n+"box "+n+"editor-visible "+n+e.o.lang+" trumbowyg"}),e.isTextarea=e.$ta.is("textarea"),e.isTextarea?(o=e.$ta.val(),e.$ed=a("<div/>"),e.$box.insertAfter(e.$ta).append(e.$ed,e.$ta)):(e.$ed=e.$ta,o=e.$ed.html(),e.$ta=a("<textarea/>",{name:e.$ta.attr("id"),height:e.height}).val(o),e.$box.insertAfter(e.$ed).append(e.$ta,e.$ed),e.syncCode()),e.$ta.addClass(n+"textarea").attr("tabindex",-1),e.$ed.addClass(n+"editor").attr({contenteditable:!0,dir:e.lang._dir||"ltr"}).html(o),e.o.tabindex&&e.$ed.attr("tabindex",e.o.tabindex),e.$c.is("[placeholder]")&&e.$ed.attr("placeholder",e.$c.attr("placeholder")),e.$c.is("[spellcheck]")&&e.$ed.attr("spellcheck",e.$c.attr("spellcheck")),e.o.resetCss&&e.$ed.addClass(n+"reset-css"),e.o.autogrow||e.$ta.add(e.$ed).css({height:e.height}),e.semanticCode(),e.o.autogrowOnEnter&&e.$ed.addClass(n+"autogrow-on-enter");var r,i=!1,s=!1;e.$ed.on("dblclick","img",e.o.imgDblClickHandler).on("keydown",function(t){if(!t.ctrlKey&&!t.metaKey||t.altKey){if(e.o.tabToIndent&&"Tab"===t.key)try{return t.shiftKey?e.execCmd("outdent",!0,null):e.execCmd("indent",!0,null),!1}catch(n){}}else{i=!0;var a=e.keys[String.fromCharCode(t.which).toUpperCase()];try{return e.execCmd(a.fn,a.param),!1}catch(n){}}}).on("compositionstart compositionupdate",function(){s=!0}).on("keyup compositionend",function(t){if("compositionend"===t.type)s=!1;else if(s)return;var n=t.which;if(!(n>=37&&n<=40)){if(!t.ctrlKey&&!t.metaKey||89!==n&&90!==n)if(i||17===n)"undefined"==typeof t.which&&e.semanticCode(!1,!1,!0);else{var a=!e.isIE||"compositionend"===t.type;e.semanticCode(!1,a&&13===n),e.$c.trigger("tbwchange")}else e.semanticCode(!1,!0),e.$c.trigger("tbwchange");setTimeout(function(){i=!1},50)}}).on("mouseup keydown keyup",function(t){(!t.ctrlKey&&!t.metaKey||t.altKey)&&setTimeout(function(){i=!1},50),clearTimeout(r),r=setTimeout(function(){e.updateButtonPaneStatus()},50)}).on("focus blur",function(t){if("blur"===t.type&&e.clearButtonPaneStatus(),e.$c.trigger("tbw"+t.type),e.o.autogrowOnEnter){if(e.autogrowOnEnterDontClose)return;"focus"===t.type?(e.autogrowOnEnterWasFocused=!0,e.autogrowEditorOnEnter()):e.o.autogrow||(e.$ed.css({height:e.$ed.css("min-height")}),e.$c.trigger("tbwresize"))}}).on("keyup focus",function(){e.$ta.val().match(/<.*>/)||setTimeout(function(){var t=e.isIE?"<p>":"p";e.doc.execCommand("formatBlock",!1,t),e.syncCode()},0)}).on("cut drop",function(){setTimeout(function(){e.semanticCode(!1,!0),e.$c.trigger("tbwchange")},0)}).on("paste",function(n){if(e.o.removeformatPasted){n.preventDefault(),t.getSelection&&t.getSelection().deleteFromDocument&&t.getSelection().deleteFromDocument();try{var o=t.clipboardData.getData("Text");try{e.doc.selection.createRange().pasteHTML(o)}catch(r){e.doc.getSelection().getRangeAt(0).insertNode(e.doc.createTextNode(o))}e.$c.trigger("tbwchange",n)}catch(i){e.execCmd("insertText",(n.originalEvent||n).clipboardData.getData("text/plain"))}}a.each(e.pasteHandlers,function(e,t){t(n)}),setTimeout(function(){e.semanticCode(!1,!0),e.$c.trigger("tbwpaste",n),e.$c.trigger("tbwchange")},0)}),e.$ta.on("keyup",function(){e.$c.trigger("tbwchange")}).on("paste",function(){setTimeout(function(){e.$c.trigger("tbwchange")},0)}),a(e.doc.body).on("keydown."+e.eventNamespace,function(t){if(27===t.which&&a("."+n+"modal-box").length>=1)return e.closeModal(),!1})},autogrowEditorOnEnter:function(){var e=this;e.$ed.removeClass("autogrow-on-enter");var t=e.$ed[0].clientHeight;e.$ed.height("auto");var n=e.$ed[0].scrollHeight;e.$ed.addClass("autogrow-on-enter"),t!==n&&(e.$ed.height(t),setTimeout(function(){e.$ed.css({height:n}),e.$c.trigger("tbwresize")},0))},buildBtnPane:function(){var e=this,t=e.o.prefix,n=e.$btnPane=a("<div/>",{"class":t+"button-pane"});a.each(e.o.btns,function(o,r){a.isArray(r)||(r=[r]);var i=a("<div/>",{"class":t+"button-group "+(r.indexOf("fullscreen")>=0?t+"right":"")});a.each(r,function(t,n){try{e.isSupportedBtn(n)&&i.append(e.buildBtn(n))}catch(a){}}),i.html().trim().length>0&&n.append(i)}),e.$box.prepend(n)},buildBtn:function(e){var t=this,n=t.o.prefix,o=t.btnsDef[e],r=o.dropdown,i=null==o.hasIcon||o.hasIcon,s=t.lang[e]||e,l=a("<button/>",{type:"button","class":n+e+"-button "+(o["class"]||"")+(i?"":" "+n+"textual-button"),html:t.hasSvg&&i?'<svg><use xlink:href="'+t.svgPath+"#"+n+(o.ico||e).replace(/([A-Z]+)/g,"-$1").toLowerCase()+'"/></svg>':t.hideButtonTexts?"":o.text||o.title||t.lang[e]||e,title:(o.title||o.text||s)+(o.key?" ("+(t.isMac?"Cmd":"Ctrl")+" + "+o.key+")":""),tabindex:-1,mousedown:function(){return r&&!a("."+e+"-"+n+"dropdown",t.$box).is(":hidden")||a("body",t.doc).trigger("mousedown"),!((t.$btnPane.hasClass(n+"disable")||t.$box.hasClass(n+"disabled"))&&!a(this).hasClass(n+"active")&&!a(this).hasClass(n+"not-disable"))&&(t.execCmd(!!r&&"dropdown"||o.fn||e,o.param||e,o.forceCss),!1)}});if(r){l.addClass(n+"open-dropdown");var d=n+"dropdown",c={"class":d+"-"+e+" "+d+" "+n+"fixed-top "+(o.dropdownClass||"")};c["data-"+d]=e;var u=a("<div/>",c);a.each(r,function(e,n){t.btnsDef[n]&&t.isSupportedBtn(n)&&u.append(t.buildSubBtn(n))}),t.$box.append(u.hide())}else o.key&&(t.keys[o.key]={fn:o.fn||e,param:o.param||e});return r||(t.tagToButton[(o.tag||e).toLowerCase()]=e),l},buildSubBtn:function(e){var t=this,n=t.o.prefix,o=t.btnsDef[e],r=null==o.hasIcon||o.hasIcon;return o.key&&(t.keys[o.key]={fn:o.fn||e,param:o.param||e}),t.tagToButton[(o.tag||e).toLowerCase()]=e,a("<button/>",{type:"button","class":n+e+"-dropdown-button "+(o["class"]||"")+(o.ico?" "+n+o.ico+"-button":""),html:t.hasSvg&&r?'<svg><use xlink:href="'+t.svgPath+"#"+n+(o.ico||e).replace(/([A-Z]+)/g,"-$1").toLowerCase()+'"/></svg>'+(o.text||o.title||t.lang[e]||e):o.text||o.title||t.lang[e]||e,title:o.key?"("+(t.isMac?"Cmd":"Ctrl")+" + "+o.key+")":null,style:o.style||null,mousedown:function(){return a("body",t.doc).trigger("mousedown"),t.execCmd(o.fn||e,o.param||e,o.forceCss),!1}})},isSupportedBtn:function(e){try{return this.btnsDef[e].isSupported()}catch(t){}return!0},buildOverlay:function(){var e=this;return e.$overlay=a("<div/>",{"class":e.o.prefix+"overlay"}).appendTo(e.$box),e.$overlay},showOverlay:function(){var e=this;a(t).trigger("scroll"),e.$overlay.fadeIn(200),e.$box.addClass(e.o.prefix+"box-blur")},hideOverlay:function(){var e=this;e.$overlay.fadeOut(50),e.$box.removeClass(e.o.prefix+"box-blur")},fixedBtnPaneEvents:function(){var e=this,n=e.o.fixedFullWidth,o=e.$box;e.o.fixedBtnPane&&(e.isFixed=!1,a(t).on("scroll."+e.eventNamespace+" resize."+e.eventNamespace,function(){if(o){e.syncCode();var r=a(t).scrollTop(),i=o.offset().top+1,s=e.$btnPane,l=s.outerHeight()-2;r-i>0&&r-i-e.height<0?(e.isFixed||(e.isFixed=!0,s.css({position:"fixed",top:0,left:n?0:"auto",zIndex:7}),e.$box.css({paddingTop:s.height()})),s.css({width:n?"100%":o.width()-1}),a("."+e.o.prefix+"fixed-top",o).css({position:n?"fixed":"absolute",top:n?l:l+(r-i),zIndex:15})):e.isFixed&&(e.isFixed=!1,s.removeAttr("style"),e.$box.css({paddingTop:0}),a("."+e.o.prefix+"fixed-top",o).css({position:"absolute",top:l}))}}))},setDisabled:function(e){var t=this,n=t.o.prefix;t.disabled=e,e?t.$ta.attr("disabled",!0):t.$ta.removeAttr("disabled"),t.$box.toggleClass(n+"disabled",e),t.$ed.attr("contenteditable",!e)},destroy:function(){var e=this,n=e.o.prefix;e.isTextarea?e.$box.after(e.$ta.css({height:""}).val(e.html()).removeClass(n+"textarea").show()):e.$box.after(e.$ed.css({height:""}).removeClass(n+"editor").removeAttr("contenteditable").removeAttr("dir").html(e.html()).show()),e.$ed.off("dblclick","img"),e.destroyPlugins(),e.$box.remove(),e.$c.removeData("trumbowyg"),a("body").removeClass(n+"body-fullscreen"),e.$c.trigger("tbwclose"),a(t).off("scroll."+e.eventNamespace+" resize."+e.eventNamespace),a(e.doc.body).off("keydown."+e.eventNamespace)},empty:function(){this.$ta.val(""),this.syncCode(!0)},toggle:function(){var e=this,t=e.o.prefix;e.o.autogrowOnEnter&&(e.autogrowOnEnterDontClose=!e.$box.hasClass(t+"editor-hidden")),e.semanticCode(!1,!0),e.$c.trigger("tbwchange"),setTimeout(function(){e.doc.activeElement.blur(),e.$box.toggleClass(t+"editor-hidden "+t+"editor-visible"),e.$btnPane.toggleClass(t+"disable"),a("."+t+"viewHTML-button",e.$btnPane).toggleClass(t+"active"),e.$box.hasClass(t+"editor-visible")?e.$ta.attr("tabindex",-1):e.$ta.removeAttr("tabindex"),e.o.autogrowOnEnter&&!e.autogrowOnEnterDontClose&&e.autogrowEditorOnEnter()},0)},dropdown:function(e){var n=this,o=a("body",n.doc),r=n.o.prefix,i=a("[data-"+r+"dropdown="+e+"]",n.$box),s=a("."+r+e+"-button",n.$btnPane),l=i.is(":hidden");if(o.trigger("mousedown"),l){var d=s.offset().left;s.addClass(r+"active"),i.css({position:"absolute",top:s.offset().top-n.$btnPane.offset().top+s.outerHeight(),left:n.o.fixedFullWidth&&n.isFixed?d:d-n.$btnPane.offset().left}).show(),a(t).trigger("scroll"),o.on("mousedown."+n.eventNamespace,function(e){i.is(e.target)||(a("."+r+"dropdown",n.$box).hide(),a("."+r+"active",n.$btnPane).removeClass(r+"active"),o.off("mousedown."+n.eventNamespace))})}},html:function(e){var t=this;return null!=e?(t.$ta.val(e),t.syncCode(!0),t.$c.trigger("tbwchange"),t):t.$ta.val()},syncTextarea:function(){var e=this;e.$ta.val(e.$ed.text().trim().length>0||e.$ed.find(e.o.tagsToKeep.join(",")).length>0?e.$ed.html():"")},syncCode:function(e){var t=this;if(!e&&t.$ed.is(":visible"))t.syncTextarea();else{var n=a("<div>").html(t.$ta.val()),o=a("<div>").append(n);a(t.o.tagsToRemove.join(","),o).remove(),t.$ed.html(o.contents().html())}if(t.o.autogrow&&(t.height=t.$ed.height(),t.height!==t.$ta.css("height")&&(t.$ta.css({height:t.height}),t.$c.trigger("tbwresize"))),t.o.autogrowOnEnter){t.$ed.height("auto");var r=t.autogrowOnEnterWasFocused?t.$ed[0].scrollHeight:t.$ed.css("min-height");r!==t.$ta.css("height")&&(t.$ed.css({height:r}),t.$c.trigger("tbwresize"))}},semanticCode:function(e,t,n){var o=this;if(o.saveRange(),o.syncCode(e),o.o.semantic){if(o.semanticTag("b",o.o.semanticKeepAttributes),o.semanticTag("i",o.o.semanticKeepAttributes),o.semanticTag("s",o.o.semanticKeepAttributes),o.semanticTag("strike",o.o.semanticKeepAttributes),t){var r=o.o.inlineElementsSelector,i=":not("+r+")";o.$ed.contents().filter(function(){return 3===this.nodeType&&this.nodeValue.trim().length>0}).wrap("<span data-tbw/>");var s=function(e){if(0!==e.length){var t=e.nextUntil(i).addBack().wrapAll("<p/>").parent(),n=t.nextAll(r).first();t.next("br").remove(),s(n)}};s(o.$ed.children(r).first()),o.semanticTag("div",!0),a("[data-tbw]",o.$ed).contents().unwrap(),o.$ed.find("p:empty").remove()}n||o.restoreRange(),o.syncTextarea()}},semanticTag:function(e,t){var n;if(null!=this.o.semantic&&"object"==typeof this.o.semantic&&this.o.semantic.hasOwnProperty(e))n=this.o.semantic[e];else{if(this.o.semantic!==!0||!this.DEFAULT_SEMANTIC_MAP.hasOwnProperty(e))return;n=this.DEFAULT_SEMANTIC_MAP[e]}a(e,this.$ed).each(function(){var e=a(this);return 0!==e.contents().length&&(e.wrap("<"+n+"/>"),t&&a.each(e.prop("attributes"),function(){e.parent().attr(this.name,this.value)}),void e.contents().unwrap())})},createLink:function(){for(var e,t,n,o=this,r=o.doc.getSelection(),i=r.getRangeAt(0),s=r.focusNode,l=(new XMLSerializer).serializeToString(i.cloneContents())||i+"";["A","DIV"].indexOf(s.nodeName)<0;)s=s.parentNode;if(s&&"A"===s.nodeName){var d=a(s);l=d.text(),e=d.attr("href"),o.o.minimalLinks||(t=d.attr("title"),n=d.attr("target")||o.o.defaultLinkTarget);var c=o.doc.createRange();c.selectNode(s),r.removeAllRanges(),r.addRange(c)}o.saveRange();var u={url:{label:"URL",required:!0,value:e},text:{label:o.lang.text,value:l}};o.o.minimalLinks||a.extend(u,{title:{label:o.lang.title,value:t},target:{label:o.lang.target,value:n}}),o.openModalInsert(o.lang.createLink,u,function(e){var t=o.prependUrlPrefix(e.url);if(!t.length)return!1;var n=a(['<a href="',t,'">',e.text||e.url,"</a>"].join(""));return e.title&&n.attr("title",e.title),(e.target||o.o.defaultLinkTarget)&&n.attr("target",e.target||o.o.defaultLinkTarget),o.range.deleteContents(),o.range.insertNode(n[0]),o.syncCode(),o.$c.trigger("tbwchange"),!0})},prependUrlPrefix:function(e){var t=this;if(!t.urlPrefix)return e;var n=/^([a-z][-+.a-z0-9]*:|\/|#)/i;if(n.test(e))return e;var a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return a.test(e)?"mailto:"+e:t.urlPrefix+e},unlink:function(){var e=this,t=e.doc.getSelection(),n=t.focusNode;if(t.isCollapsed){for(;["A","DIV"].indexOf(n.nodeName)<0;)n=n.parentNode;if(n&&"A"===n.nodeName){var a=e.doc.createRange();a.selectNode(n),t.removeAllRanges(),t.addRange(a)}}e.execCmd("unlink",void 0,void 0,!0)},insertImage:function(){var e=this;e.saveRange();var t={url:{label:"URL",required:!0},alt:{label:e.lang.description,value:e.getRangeText()}};e.o.imageWidthModalEdit&&(t.width={}),e.openModalInsert(e.lang.insertImage,t,function(t){e.execCmd("insertImage",t.url,!1,!0);var n=a('img[src="'+t.url+'"]:not([alt])',e.$box);return n.attr("alt",t.alt),e.o.imageWidthModalEdit&&n.attr({width:t.width}),e.syncCode(),e.$c.trigger("tbwchange"),!0})},fullscreen:function(){var e,n=this,o=n.o.prefix,r=o+"fullscreen",i=r+"-placeholder",s=n.$box.outerHeight();n.$box.toggleClass(r),e=n.$box.hasClass(r),e?n.$box.before(a("<div/>",{"class":i}).css({height:s})):a("."+i).remove(),a("body").toggleClass(o+"body-fullscreen",e),a(t).trigger("scroll"),n.$c.trigger("tbw"+(e?"open":"close")+"fullscreen")},execCmd:function(e,t,n,a){var o=this;a=!!a||"","dropdown"!==e&&o.$ed.focus();try{o.doc.execCommand("styleWithCSS",!1,n||!1)}catch(r){}try{o[e+a](t)}catch(r){try{e(t)}catch(i){"insertHorizontalRule"===e?t=void 0:"formatBlock"===e&&o.isIE&&(t="<"+t+">"),o.doc.execCommand(e,!1,t),o.syncCode(),o.semanticCode(!1,!0)}"dropdown"!==e&&(o.updateButtonPaneStatus(),o.$c.trigger("tbwchange"))}},openModal:function(e,n,i){var s=this,l=s.o.prefix;if(i=i!==!1,a("."+l+"modal-box",s.$box).length>0)return!1;s.o.autogrowOnEnter&&(s.autogrowOnEnterDontClose=!0),s.saveRange(),s.showOverlay(),s.$btnPane.addClass(l+"disable");var d=a("<div/>",{"class":l+"modal "+l+"fixed-top"}).css({top:s.$box.offset().top+s.$btnPane.height(),zIndex:99999}).appendTo(a(s.doc.body));s.$overlay.one("click",function(){return d.trigger(r),!1});var c;c=i?a("<form/>",{action:"",html:n}).on("submit",function(){return d.trigger(o),!1}).on("reset",function(){return d.trigger(r),!1}).on("submit reset",function(){s.o.autogrowOnEnter&&(s.autogrowOnEnterDontClose=!1)}):n;var u=a("<div/>",{"class":l+"modal-box",html:c}).css({top:"-"+s.$btnPane.outerHeight(),opacity:0,paddingBottom:i?null:"5%"}).appendTo(d).animate({top:0,opacity:1},100);return e&&a("<span/>",{text:e,"class":l+"modal-title"}).prependTo(u),i&&(a("input:first",u).focus(),s.buildModalBtn("submit",u),s.buildModalBtn("reset",u),d.height(u.outerHeight()+10)),a(t).trigger("scroll"),s.$c.trigger("tbwmodalopen"),d},buildModalBtn:function(e,t){var n=this,o=n.o.prefix;return a("<button/>",{"class":o+"modal-button "+o+"modal-"+e,type:e,text:n.lang[e]||e}).appendTo(a("form",t))},closeModal:function(){var e=this,t=e.o.prefix;e.$btnPane.removeClass(t+"disable"),e.$overlay.off();var n=a("."+t+"modal-box",a(e.doc.body));n.animate({top:"-"+n.height()},100,function(){n.parent().remove(),e.hideOverlay(),e.$c.trigger("tbwmodalclose")}),e.restoreRange()},openModalInsert:function(e,t,n){var i=this,s=i.o.prefix,l=i.lang,d="";return a.each(t,function(e,t){var n=t.label||e,a=t.name||e,o=t.attributes||{},r=Object.keys(o).map(function(e){return e+'="'+o[e]+'"'}).join(" ");d+='<label><input type="'+(t.type||"text")+'" name="'+a+'"'+("checkbox"===t.type&&t.value?' checked="checked"':' value="'+(t.value||"").replace(/"/g,"&quot;"))+'"'+r+'><span class="'+s+'input-infos"><span>'+(l[n]?l[n]:n)+"</span></span></label>"}),i.openModal(e,d).on(o,function(){var e=a("form",a(this)),r=!0,s={};a.each(t,function(t,n){var o=n.name||t,l=a('input[name="'+o+'"]',e),d=l.attr("type");switch(d.toLowerCase()){case"checkbox":s[o]=l.is(":checked");break;case"radio":s[o]=l.filter(":checked").val();break;default:s[o]=a.trim(l.val())}n.required&&""===s[o]?(r=!1,i.addErrorOnModalField(l,i.lang.required)):n.pattern&&!n.pattern.test(s[o])&&(r=!1,i.addErrorOnModalField(l,n.patternError))}),r&&(i.restoreRange(),n(s,t)&&(i.syncCode(),i.$c.trigger("tbwchange"),i.closeModal(),a(this).off(o)))}).one(r,function(){a(this).off(o),i.closeModal()})},addErrorOnModalField:function(e,t){var n=this.o.prefix,o=n+"msg-error",r=e.parent();e.on("change keyup",function(){r.removeClass(n+"input-error"),setTimeout(function(){r.find("."+o).remove()},150)}),r.addClass(n+"input-error").find("input+span").append(a("<span/>",{"class":o,text:t}))},getDefaultImgDblClickHandler:function(){var e=this;return function(){var t=a(this),n=t.attr("src"),o="(Base64)";0===n.indexOf("data:image")&&(n=o);var r={url:{label:"URL",value:n,required:!0},alt:{label:e.lang.description,value:t.attr("alt")}};return e.o.imageWidthModalEdit&&(r.width={value:t.attr("width")?t.attr("width"):""}),e.openModalInsert(e.lang.insertImage,r,function(n){return n.url!==o&&t.attr({src:n.url}),t.attr({alt:n.alt}),e.o.imageWidthModalEdit&&(parseInt(n.width)>0?t.attr({width:n.width}):t.removeAttr("width")),!0}),!1}},saveRange:function(){var e=this,t=e.doc.getSelection();if(e.range=null,t&&t.rangeCount){var n,a=e.range=t.getRangeAt(0),o=e.doc.createRange();o.selectNodeContents(e.$ed[0]),o.setEnd(a.startContainer,a.startOffset),n=(o+"").length,e.metaRange={start:n,end:n+(a+"").length}}},restoreRange:function(){var e,t=this,n=t.metaRange,a=t.range,o=t.doc.getSelection();if(a){if(n&&n.start!==n.end){var r,i=0,s=[t.$ed[0]],l=!1,d=!1;for(e=t.doc.createRange();!d&&(r=s.pop());)if(3===r.nodeType){var c=i+r.length;!l&&n.start>=i&&n.start<=c&&(e.setStart(r,n.start-i),l=!0),l&&n.end>=i&&n.end<=c&&(e.setEnd(r,n.end-i),d=!0),i=c}else for(var u=r.childNodes,g=u.length;g>0;)g-=1,s.push(u[g])}try{o.removeAllRanges()}catch(f){}o.addRange(e||a)}},getRangeText:function(){return this.range+""},clearButtonPaneStatus:function(){var e=this,t=e.o.prefix,n=t+"active-button "+t+"active",o=t+"original-icon";a("."+t+"active-button",e.$btnPane).removeClass(n),a("."+o,e.$btnPane).each(function(){a(this).find("svg use").attr("xlink:href",a(this).data(o))})},updateButtonPaneStatus:function(){var e=this,t=e.o.prefix,n=t+"active-button "+t+"active",o=t+"original-icon",r=e.getTagsRecursive(e.doc.getSelection().focusNode);e.clearButtonPaneStatus(),a.each(r,function(r,i){var s=e.tagToButton[i.toLowerCase()],l=a("."+t+s+"-button",e.$btnPane);if(l.length>0)l.addClass(n);else try{l=a("."+t+"dropdown ."+t+s+"-dropdown-button",e.$box);var d=l.find("svg use"),c=l.parent().data(t+"dropdown"),u=a("."+t+c+"-button",e.$box),g=u.find("svg use");u.addClass(n),e.o.changeActiveDropdownIcon&&d.length>0&&(u.addClass(o).data(o,g.attr("xlink:href")),g.attr("xlink:href",d.attr("xlink:href")))}catch(f){}})},getTagsRecursive:function(e,t){var n=this;if(t=t||(e&&e.tagName?[e.tagName]:[]),!e||!e.parentNode)return t;e=e.parentNode;var o=e.tagName;return"DIV"===o?t:("P"===o&&""!==e.style.textAlign&&t.push(e.style.textAlign),a.each(n.tagHandlers,function(a,o){t=t.concat(o(e,n))}),t.push(o),n.getTagsRecursive(e,t).filter(function(e){return null!=e}))},initPlugins:function(){var e=this;e.loadedPlugins=[],a.each(a.trumbowyg.plugins,function(t,n){n.shouldInit&&!n.shouldInit(e)||(n.init(e),n.tagHandler&&e.tagHandlers.push(n.tagHandler),e.loadedPlugins.push(n))})},destroyPlugins:function(){var e=this;a.each(this.loadedPlugins,function(t,n){n.destroy&&n.destroy(e)})}}}(navigator,window,document,jQuery);
!function(e){"use strict";function t(t,l){t.$ed.focus(),t.saveRange();var a=t.range.startContainer.parentElement,o=t.getRangeText();if(e(a).html()===o)e(a).css("font-size",l);else{t.range.deleteContents();var s='<span style="font-size: '+l+';">'+o+"</span>",n=e(s)[0];t.range.insertNode(n)}t.restoreRange()}function l(l){var a=[];if(e.each(l.o.plugins.fontsize.sizeList,function(e,o){l.addBtnDef("fontsize_"+o,{text:'<span style="font-size: '+o+';">'+(l.lang.fontsizes[o]||o)+"</span>",hasIcon:!1,fn:function(){t(l,o)}}),a.push("fontsize_"+o)}),l.o.plugins.fontsize.allowCustomSize){var o="fontsize_custom",s={fn:function(){l.openModalInsert(l.lang.fontCustomSize.title,{size:{label:l.lang.fontCustomSize.label,value:l.lang.fontCustomSize.value}},function(e){return t(l,e.size),!0})},text:'<span style="font-size: medium;">'+l.lang.fontsizes.custom+"</span>",hasIcon:!1};l.addBtnDef(o,s),a.push(o)}return a}e.extend(!0,e.trumbowyg,{langs:{en:{fontsize:"Font size",fontsizes:{"x-small":"Extra small",small:"Small",medium:"Regular",large:"Large","x-large":"Extra large",custom:"Custom"},fontCustomSize:{title:"Custom Font Size",label:"Font Size",value:"48px"}},es:{fontsize:"Tamaño de Fuente",fontsizes:{"x-small":"Extra pequeña",small:"Pegueña",medium:"Regular",large:"Grande","x-large":"Extra Grande",custom:"Customizada"},fontCustomSize:{title:"Tamaño de Fuente Customizada",label:"Tamaño de Fuente",value:"48px"}},da:{fontsize:"Skriftstørrelse",fontsizes:{"x-small":"Ekstra lille",small:"Lille",medium:"Normal",large:"Stor","x-large":"Ekstra stor",custom:"Brugerdefineret"}},fr:{fontsize:"Taille de la police",fontsizes:{"x-small":"Très petit",small:"Petit",medium:"Normal",large:"Grand","x-large":"Très grand",custom:"Taille personnalisée"},fontCustomSize:{title:"Taille de police personnalisée",label:"Taille de la police",value:"48px"}},de:{fontsize:"Schriftgröße",fontsizes:{"x-small":"Sehr klein",small:"Klein",medium:"Normal",large:"Groß","x-large":"Sehr groß",custom:"Benutzerdefiniert"},fontCustomSize:{title:"Benutzerdefinierte Schriftgröße",label:"Schriftgröße",value:"48px"}},nl:{fontsize:"Lettergrootte",fontsizes:{"x-small":"Extra klein",small:"Klein",medium:"Normaal",large:"Groot","x-large":"Extra groot",custom:"Tilpasset"}},tr:{fontsize:"Yazı Boyutu",fontsizes:{"x-small":"Çok Küçük",small:"Küçük",medium:"Normal",large:"Büyük","x-large":"Çok Büyük",custom:"Görenek"}},zh_tw:{fontsize:"字體大小",fontsizes:{"x-small":"最小",small:"小",medium:"中",large:"大","x-large":"最大",custom:"自訂大小"},fontCustomSize:{title:"自訂義字體大小",label:"字體大小",value:"48px"}},pt_br:{fontsize:"Tamanho da fonte",fontsizes:{"x-small":"Extra pequeno",small:"Pequeno",regular:"Médio",large:"Grande","x-large":"Extra grande",custom:"Personalizado"},fontCustomSize:{title:"Tamanho de Fonte Personalizado",label:"Tamanho de Fonte",value:"48px"}},it:{fontsize:"Dimensioni del testo",fontsizes:{"x-small":"Molto piccolo",small:"piccolo",regular:"normale",large:"grande","x-large":"Molto grande",custom:"Personalizzato"},fontCustomSize:{title:"Dimensioni del testo personalizzato",label:"Dimensioni del testo",value:"48px"}},ko:{fontsize:"글꼴 크기",fontsizes:{"x-small":"아주 작게",small:"작게",medium:"보통",large:"크게","x-large":"아주 크게",custom:"사용자 지정"},fontCustomSize:{title:"사용자 지정 글꼴 크기",label:"글꼴 크기",value:"48px"}}}});var a={sizeList:["x-small","small","medium","large","x-large"],allowCustomSize:!0};e.extend(!0,e.trumbowyg,{plugins:{fontsize:{init:function(t){t.o.plugins.fontsize=e.extend({},a,t.o.plugins.fontsize||{}),t.addBtnDef("fontsize",{dropdown:l(t)})}}}})}(jQuery);
!function(a){"use strict";function n(n){var i=[];return a.each(n.o.plugins.fontfamily.fontList,function(a,e){n.addBtnDef("fontfamily_"+a,{title:'<span style="font-family: '+e.family+';">'+e.name+"</span>",hasIcon:!1,fn:function(){n.execCmd("fontName",e.family,!0)}}),i.push("fontfamily_"+a)}),i}a.extend(!0,a.trumbowyg,{langs:{en:{fontFamily:"Font"},es:{fontFamily:"Fuente"},da:{fontFamily:"Skrifttype"},fr:{fontFamily:"Police"},de:{fontFamily:"Schriftart"},nl:{fontFamily:"Lettertype"},tr:{fontFamily:"Yazı Tipi"},zh_tw:{fontFamily:"字體"},pt_br:{fontFamily:"Fonte"},ko:{fontFamily:"글꼴"}}});var i={fontList:[{name:"Arial",family:"Arial, Helvetica, sans-serif"},{name:"Arial Black",family:"Arial Black, Gadget, sans-serif"},{name:"Comic Sans",family:"Comic Sans MS, Textile, cursive, sans-serif"},{name:"Courier New",family:"Courier New, Courier, monospace"},{name:"Georgia",family:"Georgia, serif"},{name:"Impact",family:"Impact, Charcoal, sans-serif"},{name:"Lucida Console",family:"Lucida Console, Monaco, monospace"},{name:"Lucida Sans",family:"Lucida Sans Uncide, Lucida Grande, sans-serif"},{name:"Palatino",family:"Palatino Linotype, Book Antiqua, Palatino, serif"},{name:"Tahoma",family:"Tahoma, Geneva, sans-serif"},{name:"Times New Roman",family:"Times New Roman, Times, serif"},{name:"Trebuchet",family:"Trebuchet MS, Helvetica, sans-serif"},{name:"Verdana",family:"Verdana, Geneva, sans-serif"}]};a.extend(!0,a.trumbowyg,{plugins:{fontfamily:{init:function(e){e.o.plugins.fontfamily=a.extend({},i,e.o.plugins.fontfamily||{}),e.addBtnDef("fontfamily",{dropdown:n(e),hasIcon:!1,text:e.lang.fontFamily})}}}})}(jQuery);
!function(e){"use strict";var a=function(){return"undefined"!=typeof FileReader},r=function(e){return/^data:image\/[a-z]?/i.test(e)};e.extend(!0,e.trumbowyg,{langs:{en:{base64:"Image as base64",file:"File",errFileReaderNotSupported:"FileReader is not supported by your browser.",errInvalidImage:"Invalid image file."},da:{base64:"Billede som base64",file:"Fil",errFileReaderNotSupported:"FileReader er ikke understøttet af din browser.",errInvalidImage:"Ugyldig billedfil."},fr:{base64:"Image en base64",file:"Fichier"},cs:{base64:"Vložit obrázek",file:"Soubor"},zh_cn:{base64:"图片（Base64编码）",file:"文件"},nl:{base64:"Afbeelding inline",file:"Bestand",errFileReaderNotSupported:"Uw browser ondersteunt deze functionaliteit niet.",errInvalidImage:"De gekozen afbeelding is ongeldig."},ru:{base64:"Изображение как код в base64",file:"Файл",errFileReaderNotSupported:"FileReader не поддерживается вашим браузером.",errInvalidImage:"Недопустимый файл изображения."},ja:{base64:"画像 (Base64形式)",file:"ファイル",errFileReaderNotSupported:"あなたのブラウザーはFileReaderをサポートしていません",errInvalidImage:"画像形式が正しくありません"},tr:{base64:"Base64 olarak resim",file:"Dosya",errFileReaderNotSupported:"FileReader tarayıcınız tarafından desteklenmiyor.",errInvalidImage:"Geçersiz resim dosyası."},zh_tw:{base64:"圖片(base64編碼)",file:"檔案",errFileReaderNotSupported:"你的瀏覽器不支援FileReader",errInvalidImage:"不正確的檔案格式"},pt_br:{base64:"Imagem em base64",file:"Arquivo",errFileReaderNotSupported:"FileReader não é suportado pelo seu navegador.",errInvalidImage:"Arquivo de imagem inválido."},ko:{base64:"그림 넣기(base64)",file:"파일",errFileReaderNotSupported:"FileReader가 현재 브라우저를 지원하지 않습니다.",errInvalidImage:"유효하지 않은 파일"}},plugins:{base64:{shouldInit:a,init:function(i){var t={isSupported:a,fn:function(){i.saveRange();var a,t=i.openModalInsert(i.lang.base64,{file:{type:"file",required:!0,attributes:{accept:"image/*"}},alt:{label:"description",value:i.getRangeText()}},function(l){var n=new FileReader;n.onloadend=function(a){r(a.target.result)?(i.execCmd("insertImage",n.result,!1,!0),e(['img[src="',n.result,'"]:not([alt])'].join(""),i.$box).attr("alt",l.alt),i.closeModal()):i.addErrorOnModalField(e("input[type=file]",t),i.lang.errInvalidImage)},n.readAsDataURL(a)});e("input[type=file]").on("change",function(e){a=e.target.files[0]})}};i.addBtnDef("base64",t)}}}})}(jQuery);
!function(e){"use strict";var t={rows:8,columns:8,styler:"table"};e.extend(!0,e.trumbowyg,{langs:{en:{table:"Insert table",tableAddRow:"Add row",tableAddRowAbove:"Add row above",tableAddColumnLeft:"Add column to the left",tableAddColumn:"Add column to the right",tableDeleteRow:"Delete row",tableDeleteColumn:"Delete column",tableDestroy:"Delete table",error:"Error"},da:{table:"Indsæt tabel",tableAddRow:"Tilføj række",tableAddRowAbove:"Tilføj række",tableAddColumnLeft:"Tilføj kolonne",tableAddColumn:"Tilføj kolonne",tableDeleteRow:"Slet række",tableDeleteColumn:"Slet kolonne",tableDestroy:"Slet tabel",error:"Fejl"},de:{table:"Tabelle einfügen",tableAddRow:"Zeile hinzufügen",tableAddRowAbove:"Zeile hinzufügen",tableAddColumnLeft:"Spalte hinzufügen",tableAddColumn:"Spalte hinzufügen",tableDeleteRow:"Zeile löschen",tableDeleteColumn:"Spalte löschen",tableDestroy:"Tabelle löschen",error:"Error"},sk:{table:"Vytvoriť tabuľky",tableAddRow:"Pridať riadok",tableAddRowAbove:"Pridať riadok",tableAddColumnLeft:"Pridať stĺpec",tableAddColumn:"Pridať stĺpec",error:"Chyba"},fr:{table:"Insérer un tableau",tableAddRow:"Ajouter des lignes",tableAddRowAbove:"Ajouter des lignes",tableAddColumnLeft:"Ajouter des colonnes",tableAddColumn:"Ajouter des colonnes",tableDeleteRow:"Effacer la ligne",tableDeleteColumn:"Effacer la colonne",tableDestroy:"Effacer le tableau",error:"Erreur"},cs:{table:"Vytvořit příkaz Table",tableAddRow:"Přidat řádek",tableAddRowAbove:"Přidat řádek",tableAddColumnLeft:"Přidat sloupec",tableAddColumn:"Přidat sloupec",error:"Chyba"},ru:{table:"Вставить таблицу",tableAddRow:"Добавить строку",tableAddRowAbove:"Добавить строку",tableAddColumnLeft:"Добавить столбец",tableAddColumn:"Добавить столбец",tableDeleteRow:"Удалить строку",tableDeleteColumn:"Удалить столбец",tableDestroy:"Удалить таблицу",error:"Ошибка"},ja:{table:"表の挿入",tableAddRow:"行の追加",tableAddRowAbove:"行の追加",tableAddColumnLeft:"列の追加",tableAddColumn:"列の追加",error:"エラー"},tr:{table:"Tablo ekle",tableAddRow:"Satır ekle",tableAddRowAbove:"Satır ekle",tableAddColumnLeft:"Kolon ekle",tableAddColumn:"Kolon ekle",error:"Hata"},zh_tw:{table:"插入表格",tableAddRow:"加入行",tableAddRowAbove:"加入行",tableAddColumnLeft:"加入列",tableAddColumn:"加入列",tableDeleteRow:"刪除行",tableDeleteColumn:"刪除列",tableDestroy:"刪除表格",error:"錯誤"},id:{table:"Sisipkan tabel",tableAddRow:"Sisipkan baris",tableAddRowAbove:"Sisipkan baris",tableAddColumnLeft:"Sisipkan kolom",tableAddColumn:"Sisipkan kolom",tableDeleteRow:"Hapus baris",tableDeleteColumn:"Hapus kolom",tableDestroy:"Hapus tabel",error:"Galat"},pt_br:{table:"Inserir tabela",tableAddRow:"Adicionar linha",tableAddRowAbove:"Adicionar linha",tableAddColumnLeft:"Adicionar coluna",tableAddColumn:"Adicionar coluna",tableDeleteRow:"Deletar linha",tableDeleteColumn:"Deletar coluna",tableDestroy:"Deletar tabela",error:"Erro"},ko:{table:"표 넣기",tableAddRow:"줄 추가",tableAddRowAbove:"줄 추가",tableAddColumnLeft:"칸 추가",tableAddColumn:"칸 추가",tableDeleteRow:"줄 삭제",tableDeleteColumn:"칸 삭제",tableDestroy:"표 지우기",error:"에러"}},plugins:{table:{init:function(l){l.o.plugins.table=e.extend(!0,{},t,l.o.plugins.table||{});var o={fn:function(){l.saveRange();var t="table",o=l.o.prefix+"dropdown",n={"class":o+"-"+t+" "+o+" "+l.o.prefix+"fixed-top"};n["data-"+o]=t;var b=e("<div/>",n);if(0===l.$box.find("."+o+"-"+t).length?l.$box.append(b.hide()):b=l.$box.find("."+o+"-"+t),b.html(""),l.$box.find("."+l.o.prefix+"table-button").hasClass(l.o.prefix+"active-button"))b.append(l.buildSubBtn("tableAddRowAbove")),b.append(l.buildSubBtn("tableAddRow")),b.append(l.buildSubBtn("tableAddColumnLeft")),b.append(l.buildSubBtn("tableAddColumn")),b.append(l.buildSubBtn("tableDeleteRow")),b.append(l.buildSubBtn("tableDeleteColumn")),b.append(l.buildSubBtn("tableDestroy"));else{var r=e("<table/>");e("<tbody/>").appendTo(r);for(var i=0;i<l.o.plugins.table.rows;i+=1)for(var s=e("<tr/>").appendTo(r),u=0;u<l.o.plugins.table.columns;u+=1)e("<td/>").appendTo(s);r.find("td").on("mouseover",a),r.find("td").on("mousedown",d),b.append(r),b.append(e('<div class="trumbowyg-table-size">1x1</div>'))}l.dropdown(t)}},a=function(t){var l=e(t.target),o=l.closest("table"),a=this.cellIndex,d=this.parentNode.rowIndex;o.find("td").removeClass("active");for(var n=0;n<=d;n+=1)for(var b=0;b<=a;b+=1)o.find("tr:nth-of-type("+(n+1)+")").find("td:nth-of-type("+(b+1)+")").addClass("active");o.next(".trumbowyg-table-size").html(a+1+"x"+(d+1))},d=function(){l.saveRange();var t=e("<table/>");e("<tbody/>").appendTo(t),l.o.plugins.table.styler&&t.attr("class",l.o.plugins.table.styler);for(var o=this.cellIndex,a=this.parentNode.rowIndex,d=0;d<=a;d+=1)for(var n=e("<tr></tr>").appendTo(t),b=0;b<=o;b+=1)e("<td/>").appendTo(n);l.range.deleteContents(),l.range.insertNode(t[0]),l.$c.trigger("tbwchange")},n={title:l.lang.tableAddRow,text:l.lang.tableAddRow,ico:"row-below",fn:function(){l.saveRange();var t=l.doc.getSelection().focusNode,o=e(t).closest("tr"),a=e(t).closest("table");if(a.length>0){for(var d=e("<tr/>"),n=0;n<a.find("tr")[0].childElementCount;n+=1)e("<td/>").appendTo(d);o.after(d)}l.syncCode()}},b={title:l.lang.tableAddRowAbove,text:l.lang.tableAddRowAbove,ico:"row-above",fn:function(){l.saveRange();var t=l.doc.getSelection().focusNode,o=e(t).closest("tr"),a=e(t).closest("table");if(a.length>0){for(var d=e("<tr/>"),n=0;n<a.find("tr")[0].childElementCount;n+=1)e("<td/>").appendTo(d);o.before(d)}l.syncCode()}},r={title:l.lang.tableAddColumn,text:l.lang.tableAddColumn,ico:"col-right",fn:function(){l.saveRange();var t=l.doc.getSelection().focusNode,o=e(t).closest("td"),a=e(t).closest("table"),d=o.index();a.length>0&&e(a).find("tr").each(function(){e(e(this).children()[d]).after("<td></td>")}),l.syncCode()}},i={title:l.lang.tableAddColumnLeft,text:l.lang.tableAddColumnLeft,ico:"col-left",fn:function(){l.saveRange();var t=l.doc.getSelection().focusNode,o=e(t).closest("td"),a=e(t).closest("table"),d=o.index();a.length>0&&e(a).find("tr").each(function(){e(e(this).children()[d]).before("<td></td>")}),l.syncCode()}},s={title:l.lang.tableDestroy,text:l.lang.tableDestroy,ico:"table-delete",fn:function(){l.saveRange();var t=l.doc.getSelection().focusNode,o=e(t).closest("table");o.remove(),l.syncCode()}},u={title:l.lang.tableDeleteRow,text:l.lang.tableDeleteRow,ico:"row-delete",fn:function(){l.saveRange();var t=l.doc.getSelection().focusNode,o=e(t).closest("tr");o.remove(),l.syncCode()}},c={title:l.lang.tableDeleteColumn,text:l.lang.tableDeleteColumn,ico:"col-delete",fn:function(){l.saveRange();var t=l.doc.getSelection().focusNode,o=e(t).closest("table"),a=e(t).closest("td"),d=a.index();e(o).find("tr").each(function(){e(this).find("td:eq("+d+")").remove()}),l.syncCode()}};l.addBtnDef("table",o),l.addBtnDef("tableAddRowAbove",b),l.addBtnDef("tableAddRow",n),l.addBtnDef("tableAddColumnLeft",i),l.addBtnDef("tableAddColumn",r),l.addBtnDef("tableDeleteRow",u),l.addBtnDef("tableDeleteColumn",c),l.addBtnDef("tableDestroy",s)}}}})}(jQuery);
!function(e){"use strict";function t(){var e,t=null;return window.getSelection?(e=window.getSelection(),e.rangeCount&&(t=e.getRangeAt(0).commonAncestorContainer,1!==t.nodeType&&(t=t.parentNode))):(e=document.selection)&&"Control"!==e.type&&(t=e.createRange().parentElement()),t}function r(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""}function n(){var t=null;if(document.selection)t=document.selection.createRange().parentElement();else{var r=window.getSelection();r.rangeCount>0&&(t=r.getRangeAt(0).startContainer.parentNode)}var n=e(t).contents().closest("pre").length,o=e(t).contents().closest("code").length;n&&o?e(t).contents().unwrap("code").unwrap("pre"):n?e(t).contents().unwrap("pre"):o&&e(t).contents().unwrap("code")}e.extend(!0,e.trumbowyg,{langs:{en:{preformatted:"Code sample <pre>"},da:{preformatted:"Præformateret <pre>"},fr:{preformatted:"Exemple de code <pre>"},it:{preformatted:"Codice <pre>"},zh_cn:{preformatted:"代码示例 <pre>"},ru:{preformatted:"Пример кода <pre>"},ja:{preformatted:"コードサンプル <pre>"},tr:{preformatted:"Kod örneği <pre>"},zh_tw:{preformatted:"代碼範例 <pre>"},pt_br:{preformatted:"Exemple de código <pre>"},ko:{preformatted:"코드 예제 <pre>"}},plugins:{preformatted:{init:function(e){var o={fn:function(){e.saveRange();var o=e.getRangeText();if(""!==o.replace(/\s/g,""))try{var a=t().tagName.toLowerCase();if("code"===a||"pre"===a)return n();e.execCmd("insertHTML","<pre><code>"+r(o)+"</code></pre>")}catch(p){}},tag:"pre"};e.addBtnDef("preformatted",o)}}}})}(jQuery);
!function(x){"use strict";function F(F){var E=[];return x.each(F.o.plugins.emoji.emojiList,function(B,A){if(x.isArray(A)){var D=A[0],C=A[1],e='<img src="'+C+'" alt="'+D+'">',i="emoji-"+D.replace(/:/g,""),o={hasIcon:!1,text:e,fn:function(){return F.execCmd("insertImage",C,!1,!0),!0}};F.addBtnDef(i,o),E.push(i)}else{var n=A.replace(/:/g,""),t="emoji-"+n,r={text:A,fn:function(){var x=String.fromCodePoint(A.replace("&#","0"));return F.execCmd("insertText",x),!0}};F.addBtnDef(t,r),E.push(t)}}),E}var E={emojiList:["&#x2049","&#x2122","&#x2139","&#x2194","&#x2195","&#x2196","&#x2197","&#x2198","&#x2199","&#x2328","&#x2600","&#x2601","&#x2602","&#x2603","&#x2604","&#x2611","&#x2614","&#x2615","&#x2618","&#x2620","&#x2622","&#x2623","&#x2626","&#x2638","&#x2639","&#x2640","&#x2642","&#x2648","&#x2649","&#x2650","&#x2651","&#x2652","&#x2653","&#x2660","&#x2663","&#x2665","&#x2666","&#x2668","&#x2692","&#x2693","&#x2694","&#x2695","&#x2696","&#x2697","&#x2699","&#x2702","&#x2705","&#x2708","&#x2709","&#x2712","&#x2714","&#x2716","&#x2721","&#x2728","&#x2733","&#x2734","&#x2744","&#x2747","&#x2753","&#x2754","&#x2755","&#x2757","&#x2763","&#x2764","&#x2795","&#x2796","&#x2797","&#x2934","&#x2935","&#x3030","&#x3297","&#x3299","&#x1F9E1","&#x1F49B","&#x1F49A","&#x1F499","&#x1F49C","&#x1F5A4","&#x1F494","&#x1F495","&#x1F49E","&#x1F493","&#x1F497","&#x1F496","&#x1F498","&#x1F49D","&#x1F49F","&#x262E","&#x271D","&#x262A","&#x1F549","&#x1F52F","&#x1F54E","&#x262F","&#x1F6D0","&#x26CE","&#x264A","&#x264B","&#x264C","&#x264D","&#x264E","&#x264F","&#x1F194","&#x269B","&#x267E","&#x1F251","&#x1F4F4","&#x1F4F3","&#x1F236","&#x1F21A","&#x1F238","&#x1F23A","&#x1F237","&#x1F19A","&#x1F4AE","&#x1F250","&#x1F234","&#x1F235","&#x1F239","&#x1F232","&#x1F170","&#x1F171","&#x1F18E","&#x1F191","&#x1F17E","&#x1F198","&#x274C","&#x2B55","&#x1F6D1","&#x26D4","&#x1F4DB","&#x1F6AB","&#x1F4AF","&#x1F4A2","&#x1F6B7","&#x1F6AF","&#x1F6B3","&#x1F6B1","&#x1F51E","&#x1F4F5","&#x1F6AD","&#x203C","&#x1F505","&#x1F506","&#x303D","&#x26A0","&#x1F6B8","&#x1F531","&#x269C","&#x1F530","&#x267B","&#x1F22F","&#x1F4B9","&#x274E","&#x1F310","&#x1F4A0","&#x24C2","&#x1F300","&#x1F4A4","&#x1F3E7","&#x1F6BE","&#x267F","&#x1F17F","&#x1F233","&#x1F202","&#x1F6C2","&#x1F6C3","&#x1F6C4","&#x1F6C5","&#x1F6B9","&#x1F6BA","&#x1F6BC","&#x1F6BB","&#x1F6AE","&#x1F3A6","&#x1F4F6","&#x1F201","&#x1F523","&#x1F524","&#x1F521","&#x1F520","&#x1F196","&#x1F197","&#x1F199","&#x1F192","&#x1F195","&#x1F193","&#x0030","&#x0031","&#x0032","&#x0033","&#x0034","&#x0035","&#x0036","&#x0037","&#x0038","&#x0039","&#x1F51F","&#x1F522","&#x0023","&#x002A","&#x23CF","&#x25B6","&#x23F8","&#x23EF","&#x23F9","&#x23FA","&#x23ED","&#x23EE","&#x23E9","&#x23EA","&#x23EB","&#x23EC","&#x25C0","&#x1F53C","&#x1F53D","&#x27A1","&#x2B05","&#x2B06","&#x2B07","&#x21AA","&#x21A9","&#x1F500","&#x1F501","&#x1F502","&#x1F504","&#x1F503","&#x1F3B5","&#x1F3B6","&#x1F4B2","&#x1F4B1","&#x00A9","&#x00AE","&#x27B0","&#x27BF","&#x1F51A","&#x1F519","&#x1F51B","&#x1F51D","&#x1F51C","&#x1F518","&#x26AA","&#x26AB","&#x1F534","&#x1F535","&#x1F53A","&#x1F53B","&#x1F538","&#x1F539","&#x1F536","&#x1F537","&#x1F533","&#x1F532","&#x25AA","&#x25AB","&#x25FE","&#x25FD","&#x25FC","&#x25FB","&#x2B1B","&#x2B1C","&#x1F508","&#x1F507","&#x1F509","&#x1F50A","&#x1F514","&#x1F515","&#x1F4E3","&#x1F4E2","&#x1F5E8","&#x1F441","&#x1F4AC","&#x1F4AD","&#x1F5EF","&#x1F0CF","&#x1F3B4","&#x1F004","&#x1F550","&#x1F551","&#x1F552","&#x1F553","&#x1F554","&#x1F555","&#x1F556","&#x1F557","&#x1F558","&#x1F559","&#x1F55A","&#x1F55B","&#x1F55C","&#x1F55D","&#x1F55E","&#x1F55F","&#x1F560","&#x1F561","&#x1F562","&#x1F563","&#x1F564","&#x1F565","&#x1F566","&#x1F567","&#x26BD","&#x1F3C0","&#x1F3C8","&#x26BE","&#x1F94E","&#x1F3BE","&#x1F3D0","&#x1F3C9","&#x1F3B1","&#x1F3D3","&#x1F3F8","&#x1F945","&#x1F3D2","&#x1F3D1","&#x1F3CF","&#x1F94D","&#x26F3","&#x1F94F","&#x1F3F9","&#x1F3A3","&#x1F94A","&#x1F94B","&#x1F3BD","&#x1F6F9","&#x26F8","&#x1F94C","&#x1F6F7","&#x1F3BF","&#x26F7","&#x1F3C2","&#x1F3CB","&#x1F93C","&#x1F938","&#x26F9","&#x1F93A","&#x1F93E","&#x1F3CC","&#x1F3C7","&#x1F9D8","&#x1F3C4","&#x1F3CA","&#x1F93D","&#x1F6A3","&#x1F9D7","&#x1F6B5","&#x1F6B4","&#x1F3C6","&#x1F947","&#x1F948","&#x1F949","&#x1F3C5","&#x1F396","&#x1F3F5","&#x1F397","&#x1F3AB","&#x1F39F","&#x1F3AA","&#x1F939","&#x1F3AD","&#x1F3A8","&#x1F3AC","&#x1F3A4","&#x1F3A7","&#x1F3BC","&#x1F3B9","&#x1F941","&#x1F3B7","&#x1F3BA","&#x1F3B8","&#x1F3BB","&#x1F3B2","&#x1F3AF","&#x1F3B3","&#x1F3AE","&#x1F3B0","&#x231A","&#x1F4F1","&#x1F4F2","&#x1F4BB","&#x1F5A5","&#x1F5A8","&#x1F5B1","&#x1F5B2","&#x1F579","&#x265F","&#x1F9E9","&#x1F5DC","&#x1F4BD","&#x1F4BE","&#x1F4BF","&#x1F4C0","&#x1F4FC","&#x1F4F7","&#x1F4F8","&#x1F4F9","&#x1F3A5","&#x1F4FD","&#x1F39E","&#x1F4DE","&#x260E","&#x1F4DF","&#x1F4E0","&#x1F4FA","&#x1F4FB","&#x1F399","&#x1F39A","&#x1F39B","&#x23F1","&#x23F2","&#x23F0","&#x1F570","&#x231B","&#x23F3","&#x1F4E1","&#x1F9ED","&#x1F50B","&#x1F50C","&#x1F9F2","&#x1F4A1","&#x1F526","&#x1F56F","&#x1F9EF","&#x1F5D1","&#x1F6E2","&#x1F4B8","&#x1F4B5","&#x1F4B4","&#x1F4B6","&#x1F4B7","&#x1F4B0","&#x1F4B3","&#x1F48E","&#x1F9FF","&#x1F9F1","&#x1F9F0","&#x1F527","&#x1F528","&#x1F6E0","&#x26CF","&#x1F529","&#x26D3","&#x1F52B","&#x1F4A3","&#x1F52A","&#x1F5E1","&#x1F6E1","&#x1F6AC","&#x26B0","&#x26B1","&#x1F3FA","&#x1F52E","&#x1F4FF","&#x1F488","&#x1F9EA","&#x1F9EB","&#x1F9EC","&#x1F9EE","&#x1F52D","&#x1F52C","&#x1F573","&#x1F48A","&#x1F489","&#x1F321","&#x1F6BD","&#x1F6B0","&#x1F6BF","&#x1F6C1","&#x1F6C0","&#x1F9F9","&#x1F9FA","&#x1F9FB","&#x1F9FC","&#x1F9FD","&#x1F9F4","&#x1F9F5","&#x1F9F6","&#x1F6CE","&#x1F511","&#x1F5DD","&#x1F6AA","&#x1F6CB","&#x1F6CF","&#x1F6CC","&#x1F9F8","&#x1F5BC","&#x1F6CD","&#x1F6D2","&#x1F381","&#x1F388","&#x1F38F","&#x1F380","&#x1F38A","&#x1F389","&#x1F38E","&#x1F3EE","&#x1F390","&#x1F9E7","&#x1F4E9","&#x1F4E8","&#x1F4E7","&#x1F48C","&#x1F4E5","&#x1F4E4","&#x1F4E6","&#x1F3F7","&#x1F4EA","&#x1F4EB","&#x1F4EC","&#x1F4ED","&#x1F4EE","&#x1F4EF","&#x1F4DC","&#x1F4C3","&#x1F4C4","&#x1F9FE","&#x1F4D1","&#x1F4CA","&#x1F4C8","&#x1F4C9","&#x1F5D2","&#x1F5D3","&#x1F4C6","&#x1F4C5","&#x1F4C7","&#x1F5C3","&#x1F5F3","&#x1F5C4","&#x1F4CB","&#x1F4C1","&#x1F4C2","&#x1F5C2","&#x1F5DE","&#x1F4F0","&#x1F4D3","&#x1F4D4","&#x1F4D2","&#x1F4D5","&#x1F4D7","&#x1F4D8","&#x1F4D9","&#x1F4DA","&#x1F4D6","&#x1F516","&#x1F517","&#x1F4CE","&#x1F587","&#x1F4D0","&#x1F4CF","&#x1F9F7","&#x1F4CC","&#x1F4CD","&#x1F58A","&#x1F58B","&#x1F58C","&#x1F58D","&#x1F4DD","&#x270F","&#x1F50D","&#x1F50E","&#x1F50F","&#x1F510","&#x1F436","&#x1F431","&#x1F42D","&#x1F439","&#x1F430","&#x1F98A","&#x1F99D","&#x1F43B","&#x1F43C","&#x1F998","&#x1F9A1","&#x1F428","&#x1F42F","&#x1F981","&#x1F42E","&#x1F437","&#x1F43D","&#x1F438","&#x1F435","&#x1F648","&#x1F649","&#x1F64A","&#x1F412","&#x1F414","&#x1F427","&#x1F426","&#x1F424","&#x1F423","&#x1F425","&#x1F986","&#x1F9A2","&#x1F985","&#x1F989","&#x1F99C","&#x1F99A","&#x1F987","&#x1F43A","&#x1F417","&#x1F434","&#x1F984","&#x1F41D","&#x1F41B","&#x1F98B","&#x1F40C","&#x1F41A","&#x1F41E","&#x1F41C","&#x1F997","&#x1F577","&#x1F578","&#x1F982","&#x1F99F","&#x1F9A0","&#x1F422","&#x1F40D","&#x1F98E","&#x1F996","&#x1F995","&#x1F419","&#x1F991","&#x1F990","&#x1F980","&#x1F99E","&#x1F421","&#x1F420","&#x1F41F","&#x1F42C","&#x1F433","&#x1F40B","&#x1F988","&#x1F40A","&#x1F405","&#x1F406","&#x1F993","&#x1F98D","&#x1F418","&#x1F98F","&#x1F99B","&#x1F42A","&#x1F42B","&#x1F992","&#x1F999","&#x1F403","&#x1F402","&#x1F404","&#x1F40E","&#x1F416","&#x1F40F","&#x1F411","&#x1F410","&#x1F98C","&#x1F415","&#x1F429","&#x1F408","&#x1F413","&#x1F983","&#x1F54A","&#x1F407","&#x1F401","&#x1F400","&#x1F43F","&#x1F994","&#x1F43E","&#x1F409","&#x1F432","&#x1F335","&#x1F384","&#x1F332","&#x1F333","&#x1F334","&#x1F331","&#x1F33F","&#x1F340","&#x1F38D","&#x1F38B","&#x1F343","&#x1F342","&#x1F341","&#x1F344","&#x1F33E","&#x1F490","&#x1F337","&#x1F339","&#x1F940","&#x1F33A","&#x1F338","&#x1F33C","&#x1F33B","&#x1F31E","&#x1F31D","&#x1F31B","&#x1F31C","&#x1F31A","&#x1F315","&#x1F316","&#x1F317","&#x1F318","&#x1F311","&#x1F312","&#x1F313","&#x1F314","&#x1F319","&#x1F30E","&#x1F30D","&#x1F30F","&#x1F4AB","&#x2B50","&#x1F31F","&#x26A1","&#x1F4A5","&#x1F525","&#x1F32A","&#x1F308","&#x1F324","&#x26C5","&#x1F325","&#x1F326","&#x1F327","&#x26C8","&#x1F329","&#x1F328","&#x26C4","&#x1F32C","&#x1F4A8","&#x1F4A7","&#x1F4A6","&#x1F30A","&#x1F32B","&#x1F34F","&#x1F34E","&#x1F350","&#x1F34A","&#x1F34B","&#x1F34C","&#x1F349","&#x1F347","&#x1F353","&#x1F348","&#x1F352","&#x1F351","&#x1F96D","&#x1F34D","&#x1F965","&#x1F95D","&#x1F345","&#x1F346","&#x1F951","&#x1F966","&#x1F96C","&#x1F952","&#x1F336","&#x1F33D","&#x1F955","&#x1F954","&#x1F360","&#x1F950","&#x1F35E","&#x1F956","&#x1F968","&#x1F96F","&#x1F9C0","&#x1F95A","&#x1F373","&#x1F95E","&#x1F953","&#x1F969","&#x1F357","&#x1F356","&#x1F32D","&#x1F354","&#x1F35F","&#x1F355","&#x1F96A","&#x1F959","&#x1F32E","&#x1F32F","&#x1F957","&#x1F958","&#x1F96B","&#x1F35D","&#x1F35C","&#x1F372","&#x1F35B","&#x1F363","&#x1F371","&#x1F364","&#x1F359","&#x1F35A","&#x1F358","&#x1F365","&#x1F960","&#x1F362","&#x1F361","&#x1F367","&#x1F368","&#x1F366","&#x1F967","&#x1F370","&#x1F382","&#x1F96E","&#x1F9C1","&#x1F36E","&#x1F36D","&#x1F36C","&#x1F36B","&#x1F37F","&#x1F9C2","&#x1F369","&#x1F95F","&#x1F36A","&#x1F330","&#x1F95C","&#x1F36F","&#x1F95B","&#x1F37C","&#x1F375","&#x1F964","&#x1F376","&#x1F37A","&#x1F37B","&#x1F942","&#x1F377","&#x1F943","&#x1F378","&#x1F379","&#x1F37E","&#x1F944","&#x1F374","&#x1F37D","&#x1F963","&#x1F961","&#x1F962","&#x1F600","&#x1F603","&#x1F604","&#x1F601","&#x1F606","&#x1F605","&#x1F602","&#x1F923","&#x263A","&#x1F60A","&#x1F607","&#x1F642","&#x1F643","&#x1F609","&#x1F60C","&#x1F60D","&#x1F618","&#x1F970","&#x1F617","&#x1F619","&#x1F61A","&#x1F60B","&#x1F61B","&#x1F61D","&#x1F61C","&#x1F92A","&#x1F928","&#x1F9D0","&#x1F913","&#x1F60E","&#x1F929","&#x1F973","&#x1F60F","&#x1F612","&#x1F61E","&#x1F614","&#x1F61F","&#x1F615","&#x1F641","&#x1F623","&#x1F616","&#x1F62B","&#x1F629","&#x1F622","&#x1F62D","&#x1F624","&#x1F620","&#x1F621","&#x1F92C","&#x1F92F","&#x1F633","&#x1F631","&#x1F628","&#x1F630","&#x1F975","&#x1F976","&#x1F97A","&#x1F625","&#x1F613","&#x1F917","&#x1F914","&#x1F92D","&#x1F92B","&#x1F925","&#x1F636","&#x1F610","&#x1F611","&#x1F62C","&#x1F644","&#x1F62F","&#x1F626","&#x1F627","&#x1F62E","&#x1F632","&#x1F634","&#x1F924","&#x1F62A","&#x1F635","&#x1F910","&#x1F974","&#x1F922","&#x1F92E","&#x1F927","&#x1F637","&#x1F912","&#x1F915","&#x1F911","&#x1F920","&#x1F608","&#x1F47F","&#x1F479","&#x1F47A","&#x1F921","&#x1F4A9","&#x1F47B","&#x1F480","&#x1F47D","&#x1F47E","&#x1F916","&#x1F383","&#x1F63A","&#x1F638","&#x1F639","&#x1F63B","&#x1F63C","&#x1F63D","&#x1F640","&#x1F63F","&#x1F63E","&#x1F932","&#x1F450","&#x1F64C","&#x1F44F","&#x1F91D","&#x1F44D","&#x1F44E","&#x1F44A","&#x270A","&#x1F91B","&#x1F91C","&#x1F91E","&#x270C","&#x1F91F","&#x1F918","&#x1F44C","&#x1F448","&#x1F449","&#x1F446","&#x1F447","&#x261D","&#x270B","&#x1F91A","&#x1F590","&#x1F596","&#x1F44B","&#x1F919","&#x1F4AA","&#x1F9B5","&#x1F9B6","&#x1F595","&#x270D","&#x1F64F","&#x1F48D","&#x1F484","&#x1F48B","&#x1F444","&#x1F445","&#x1F442","&#x1F443","&#x1F463","&#x1F440","&#x1F9E0","&#x1F9B4","&#x1F9B7","&#x1F5E3","&#x1F464","&#x1F465","&#x1F476","&#x1F467","&#x1F9D2","&#x1F466","&#x1F469","&#x1F9D1","&#x1F468","&#x1F471","&#x1F9D4","&#x1F475","&#x1F9D3","&#x1F474","&#x1F472","&#x1F473","&#x1F9D5","&#x1F46E","&#x1F477","&#x1F482","&#x1F575","&#x1F470","&#x1F935","&#x1F478","&#x1F934","&#x1F936","&#x1F385","&#x1F9B8","&#x1F9B9","&#x1F9D9","&#x1F9DD","&#x1F9DB","&#x1F9DF","&#x1F9DE","&#x1F9DC","&#x1F9DA","&#x1F47C","&#x1F930","&#x1F931","&#x1F647","&#x1F481","&#x1F645","&#x1F646","&#x1F64B","&#x1F926","&#x1F937","&#x1F64E","&#x1F64D","&#x1F487","&#x1F486","&#x1F9D6","&#x1F485","&#x1F933","&#x1F483","&#x1F57A","&#x1F46F","&#x1F574","&#x1F6B6","&#x1F3C3","&#x1F46B","&#x1F46D","&#x1F46C","&#x1F491","&#x1F48F","&#x1F46A","&#x1F9E5","&#x1F45A","&#x1F455","&#x1F456","&#x1F454","&#x1F457","&#x1F459","&#x1F458","&#x1F97C","&#x1F460","&#x1F461","&#x1F462","&#x1F45E","&#x1F45F","&#x1F97E","&#x1F97F","&#x1F9E6","&#x1F9E4","&#x1F9E3","&#x1F3A9","&#x1F9E2","&#x1F452","&#x1F393","&#x26D1","&#x1F451","&#x1F45D","&#x1F45B","&#x1F45C","&#x1F4BC","&#x1F392","&#x1F453","&#x1F576","&#x1F97D","&#x1F302","&#x1F9B0","&#x1F9B1","&#x1F9B3","&#x1F9B2","&#x1F1FF","&#x1F1FE","&#x1F1FD","&#x1F1FC","&#x1F1FB","&#x1F1FA","&#x1F1F9","&#x1F1F8","&#x1F1F7","&#x1F1F6","&#x1F1F5","&#x1F1F4","&#x1F1F3","&#x1F1F2","&#x1F1F1","&#x1F1F0","&#x1F1EF","&#x1F1EE","&#x1F1ED","&#x1F1EC","&#x1F1EB","&#x1F1EA","&#x1F1E9","&#x1F1E8","&#x1F1E7","&#x1F1E6","&#x1F697","&#x1F695","&#x1F699","&#x1F68C","&#x1F68E","&#x1F3CE","&#x1F693","&#x1F691","&#x1F692","&#x1F690","&#x1F69A","&#x1F69B","&#x1F69C","&#x1F6F4","&#x1F6B2","&#x1F6F5","&#x1F3CD","&#x1F6A8","&#x1F694","&#x1F68D","&#x1F698","&#x1F696","&#x1F6A1","&#x1F6A0","&#x1F69F","&#x1F683","&#x1F68B","&#x1F69E","&#x1F69D","&#x1F684","&#x1F685","&#x1F688","&#x1F682","&#x1F686","&#x1F687","&#x1F68A","&#x1F689","&#x1F6EB","&#x1F6EC","&#x1F6E9","&#x1F4BA","&#x1F9F3","&#x1F6F0","&#x1F680","&#x1F6F8","&#x1F681","&#x1F6F6","&#x26F5","&#x1F6A4","&#x1F6E5","&#x1F6F3","&#x26F4","&#x1F6A2","&#x26FD","&#x1F6A7","&#x1F6A6","&#x1F6A5","&#x1F68F","&#x1F5FA","&#x1F5FF","&#x1F5FD","&#x1F5FC","&#x1F3F0","&#x1F3EF","&#x1F3DF","&#x1F3A1","&#x1F3A2","&#x1F3A0","&#x26F2","&#x26F1","&#x1F3D6","&#x1F3DD","&#x1F3DC","&#x1F30B","&#x26F0","&#x1F3D4","&#x1F5FB","&#x1F3D5","&#x26FA","&#x1F3E0","&#x1F3E1","&#x1F3D8","&#x1F3DA","&#x1F3D7","&#x1F3ED","&#x1F3E2","&#x1F3EC","&#x1F3E3","&#x1F3E4","&#x1F3E5","&#x1F3E6","&#x1F3E8","&#x1F3EA","&#x1F3EB","&#x1F3E9","&#x1F492","&#x1F3DB","&#x26EA","&#x1F54C","&#x1F54D","&#x1F54B","&#x26E9","&#x1F6E4","&#x1F6E3","&#x1F5FE","&#x1F391","&#x1F3DE","&#x1F305","&#x1F304","&#x1F320","&#x1F387","&#x1F386","&#x1F9E8","&#x1F307","&#x1F306","&#x1F3D9","&#x1F303","&#x1F30C","&#x1F309","&#x1F512","&#x1F513","&#x1F301","&#x1F3F3","&#x1F3F4","&#x1F3C1","&#x1F6A9","&#x1F38C","&#x1F3FB","&#x1F3FC","&#x1F3FD","&#x1F3FE","&#x1F3FF"]};x.extend(!0,x.trumbowyg,{langs:{en:{emoji:"Add an emoji"},da:{emoji:"Tilføj et humørikon"},de:{emoji:"Emoticon einfügen"},fr:{emoji:"Ajouter un emoji"},zh_cn:{emoji:"添加表情"},ru:{emoji:"Вставить emoji"},ja:{emoji:"絵文字の挿入"},tr:{emoji:"Emoji ekle"},ko:{emoji:"이모지 넣기"}},plugins:{emoji:{init:function(x){x.o.plugins.emoji=x.o.plugins.emoji||E;var B={dropdown:F(x)};x.addBtnDef("emoji",B)}}}})}(jQuery);
!function(s){"use strict";function a(a){var n=[];return s.each(a.o.plugins.specialchars.symbolList,function(s,e){e=null===e?"&nbsp":"&#x"+e;var r=e.replace(/:/g,""),l="symbol-"+r,c={text:e,hasIcon:!1,fn:function(){var s=String.fromCodePoint(parseInt(e.replace("&#","0")));return a.execCmd("insertText",s),!0}};a.addBtnDef(l,c),n.push(l)}),n}var n={symbolList:["0024","20AC","00A3","00A2","00A5","00A4","2030",null,"00A9","00AE","2122",null,"00A7","00B6","00C6","00E6","0152","0153",null,"2022","25CF","2023","25B6","2B29","25C6",null,"00B1","00D7","00F7","21D2","21D4","220F","2211","2243","2264","2265"]};s.extend(!0,s.trumbowyg,{langs:{en:{specialChars:"Special characters"},fr:{specialChars:"Caractères spéciaux"},ko:{specialChars:"특수문자"}},plugins:{specialchars:{init:function(s){s.o.plugins.specialchars=s.o.plugins.specialchars||n;var e={dropdown:a(s)};s.addBtnDef("specialChars",e)}}}})}(jQuery);
!function(o){"use strict";function r(o){return("0"+parseInt(o).toString(16)).slice(-2)}function e(o){return o.search("rgb")===-1?o.replace("#",""):"rgba(0, 0, 0, 0)"===o?"transparent":(o=o.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/),r(o[1])+r(o[2])+r(o[3]))}function l(o,r){var l=[];if(!o.style)return l;if(""!==o.style.backgroundColor){var a=e(o.style.backgroundColor);r.o.plugins.colors.colorList.indexOf(a)>=0?l.push("backColor"+a):l.push("backColorFree")}var c;return""!==o.style.color?c=e(o.style.color):o.hasAttribute("color")&&(c=e(o.getAttribute("color"))),c&&(r.o.plugins.colors.colorList.indexOf(c)>=0?l.push("foreColor"+c):l.push("foreColorFree")),l}function a(r,e){var l=[],a=e.o.plugins.colors,c=a[r+"List"]||a.colorList;o.each(c,function(o,c){var f=r+c,t={fn:r,forceCss:!0,hasIcon:!1,text:e.lang["#"+c]||"#"+c,param:"#"+c,style:"background-color: #"+c+";"};a.displayAsList&&"foreColor"===r&&(t.style="color: #"+c+" !important;"),e.addBtnDef(f,t),l.push(f)});var f=r+"Remove",t={fn:"removeFormat",hasIcon:!1,param:r,style:"background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQIW2NkQAAfEJMRmwBYhoGBYQtMBYoAADziAp0jtJTgAAAAAElFTkSuQmCC);"};if(a.displayAsList&&(t.style=""),e.addBtnDef(f,t),l.push(f),a["allowCustom"+r.charAt(0).toUpperCase()+r.substr(1)]){var d=r+"Free",n={fn:function(){e.openModalInsert(e.lang[r],{color:{label:r,forceCss:!0,type:"color",value:"#FFFFFF"}},function(o){return e.execCmd(r,o.color),!0})},hasIcon:!1,text:"#",style:"text-indent: 0; line-height: 20px; padding: 0 5px;"};e.addBtnDef(d,n),l.push(d)}return l}o.extend(!0,o.trumbowyg,{langs:{cs:{foreColor:"Barva textu",backColor:"Barva pozadí"},en:{foreColor:"Text color",backColor:"Background color",foreColorRemove:"Remove text color",backColorRemove:"Remove background color"},da:{foreColor:"Tekstfarve",backColor:"Baggrundsfarve"},fr:{foreColor:"Couleur du texte",backColor:"Couleur de fond",foreColorRemove:"Supprimer la couleur du texte",backColorRemove:"Supprimer la couleur de fond"},de:{foreColor:"Textfarbe",backColor:"Hintergrundfarbe"},nl:{foreColor:"Tekstkleur",backColor:"Achtergrondkleur"},sk:{foreColor:"Farba textu",backColor:"Farba pozadia"},zh_cn:{foreColor:"文字颜色",backColor:"背景颜色"},zh_tw:{foreColor:"文字顏色",backColor:"背景顏色"},ru:{foreColor:"Цвет текста",backColor:"Цвет выделения текста"},ja:{foreColor:"文字色",backColor:"背景色"},tr:{foreColor:"Yazı rengi",backColor:"Arkaplan rengi"},pt_br:{foreColor:"Cor de fonte",backColor:"Cor de fundo"},ko:{foreColor:"글자색",backColor:"배경색",foreColorRemove:"글자색 지우기",backColorRemove:"배경색 지우기"}}});var c={colorList:["ffffff","000000","eeece1","1f497d","4f81bd","c0504d","9bbb59","8064a2","4bacc6","f79646","ffff00","f2f2f2","7f7f7f","ddd9c3","c6d9f0","dbe5f1","f2dcdb","ebf1dd","e5e0ec","dbeef3","fdeada","fff2ca","d8d8d8","595959","c4bd97","8db3e2","b8cce4","e5b9b7","d7e3bc","ccc1d9","b7dde8","fbd5b5","ffe694","bfbfbf","3f3f3f","938953","548dd4","95b3d7","d99694","c3d69b","b2a2c7","b7dde8","fac08f","f2c314","a5a5a5","262626","494429","17365d","366092","953734","76923c","5f497a","92cddc","e36c09","c09100","7f7f7f","0c0c0c","1d1b10","0f243e","244061","632423","4f6128","3f3151","31859b","974806","7f6000"],foreColorList:null,backColorList:null,allowCustomForeColor:!0,allowCustomBackColor:!0,displayAsList:!1};o.extend(!0,o.trumbowyg,{plugins:{color:{init:function(o){o.o.plugins.colors=o.o.plugins.colors||c;var r=o.o.plugins.colors.displayAsList?o.o.prefix+"dropdown--color-list":"",e={dropdown:a("foreColor",o),dropdownClass:r},l={dropdown:a("backColor",o),dropdownClass:r};o.addBtnDef("foreColor",e),o.addBtnDef("backColor",l)},tagHandler:l}}})}(jQuery);
(function defineMustache(global,factory){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){factory(exports)}else if(typeof define==="function"&&define.amd){define(["exports"],factory)}else{global.Mustache={};factory(global.Mustache)}})(this,function mustacheFactory(mustache){var objectToString=Object.prototype.toString;var isArray=Array.isArray||function isArrayPolyfill(object){return objectToString.call(object)==="[object Array]"};function isFunction(object){return typeof object==="function"}function typeStr(obj){return isArray(obj)?"array":typeof obj}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hasProperty(obj,propName){return obj!=null&&typeof obj==="object"&&propName in obj}function primitiveHasOwnProperty(primitive,propName){return primitive!=null&&typeof primitive!=="object"&&primitive.hasOwnProperty&&primitive.hasOwnProperty(propName)}var regExpTest=RegExp.prototype.test;function testRegExp(re,string){return regExpTest.call(re,string)}var nonSpaceRe=/\S/;function isWhitespace(string){return!testRegExp(nonSpaceRe,string)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(string){return String(string).replace(/[&<>"'`=\/]/g,function fromEntityMap(s){return entityMap[s]})}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){if(!template)return[];var lineHasNonSpace=false;var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;var indentation="";var tagIndex=0;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length)delete tokens[spaces.pop()]}else{spaces=[]}hasTag=false;nonSpace=false}var openingTagRe,closingTagRe,closingCurlyRe;function compileTags(tagsToCompile){if(typeof tagsToCompile==="string")tagsToCompile=tagsToCompile.split(spaceRe,2);if(!isArray(tagsToCompile)||tagsToCompile.length!==2)throw new Error("Invalid tags: "+tagsToCompile);openingTagRe=new RegExp(escapeRegExp(tagsToCompile[0])+"\\s*");closingTagRe=new RegExp("\\s*"+escapeRegExp(tagsToCompile[1]));closingCurlyRe=new RegExp("\\s*"+escapeRegExp("}"+tagsToCompile[1]))}compileTags(tags||mustache.tags);var scanner=new Scanner(template);var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(openingTagRe);if(value){for(var i=0,valueLength=value.length;i<valueLength;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length);indentation+=chr}else{nonSpace=true;lineHasNonSpace=true;indentation+=" "}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n"){stripSpace();indentation="";tagIndex=0;lineHasNonSpace=false}}}if(!scanner.scan(openingTagRe))break;hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe)}else if(type==="{"){value=scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type="&"}else{value=scanner.scanUntil(closingTagRe)}if(!scanner.scan(closingTagRe))throw new Error("Unclosed tag at "+scanner.pos);if(type==">"){token=[type,value,start,scanner.pos,indentation,tagIndex,lineHasNonSpace]}else{token=[type,value,start,scanner.pos]}tagIndex++;tokens.push(token);if(type==="#"||type==="^"){sections.push(token)}else if(type==="/"){openSection=sections.pop();if(!openSection)throw new Error('Unopened section "'+value+'" at '+start);if(openSection[1]!==value)throw new Error('Unclosed section "'+openSection[1]+'" at '+start)}else if(type==="name"||type==="{"||type==="&"){nonSpace=true}else if(type==="="){compileTags(value)}}stripSpace();openSection=sections.pop();if(openSection)throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);return nestTokens(squashTokens(tokens))}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3]}else{squashedTokens.push(token);lastToken=token}}}return squashedTokens}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token)}}return nestedTokens}function Scanner(string){this.string=string;this.tail=string;this.pos=0}Scanner.prototype.eos=function eos(){return this.tail===""};Scanner.prototype.scan=function scan(re){var match=this.tail.match(re);if(!match||match.index!==0)return"";var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string};Scanner.prototype.scanUntil=function scanUntil(re){var index=this.tail.search(re),match;switch(index){case-1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index)}this.pos+=match.length;return match};function Context(view,parentContext){this.view=view;this.cache={".":this.view};this.parent=parentContext}Context.prototype.push=function push(view){return new Context(view,this)};Context.prototype.lookup=function lookup(name){var cache=this.cache;var value;if(cache.hasOwnProperty(name)){value=cache[name]}else{var context=this,intermediateValue,names,index,lookupHit=false;while(context){if(name.indexOf(".")>0){intermediateValue=context.view;names=name.split(".");index=0;while(intermediateValue!=null&&index<names.length){if(index===names.length-1)lookupHit=hasProperty(intermediateValue,names[index])||primitiveHasOwnProperty(intermediateValue,names[index]);intermediateValue=intermediateValue[names[index++]]}}else{intermediateValue=context.view[name];lookupHit=hasProperty(context.view,name)}if(lookupHit){value=intermediateValue;break}context=context.parent}cache[name]=value}if(isFunction(value))value=value.call(this.view);return value};function Writer(){this.cache={}}Writer.prototype.clearCache=function clearCache(){this.cache={}};Writer.prototype.parse=function parse(template,tags){var cache=this.cache;var cacheKey=template+":"+(tags||mustache.tags).join(":");var tokens=cache[cacheKey];if(tokens==null)tokens=cache[cacheKey]=parseTemplate(template,tags);return tokens};Writer.prototype.render=function render(template,view,partials,tags){var tokens=this.parse(template,tags);var context=view instanceof Context?view:new Context(view);return this.renderTokens(tokens,context,partials,template,tags)};Writer.prototype.renderTokens=function renderTokens(tokens,context,partials,originalTemplate,tags){var buffer="";var token,symbol,value;for(var i=0,numTokens=tokens.length;i<numTokens;++i){value=undefined;token=tokens[i];symbol=token[0];if(symbol==="#")value=this.renderSection(token,context,partials,originalTemplate);else if(symbol==="^")value=this.renderInverted(token,context,partials,originalTemplate);else if(symbol===">")value=this.renderPartial(token,context,partials,tags);else if(symbol==="&")value=this.unescapedValue(token,context);else if(symbol==="name")value=this.escapedValue(token,context);else if(symbol==="text")value=this.rawValue(token);if(value!==undefined)buffer+=value}return buffer};Writer.prototype.renderSection=function renderSection(token,context,partials,originalTemplate){var self=this;var buffer="";var value=context.lookup(token[1]);function subRender(template){return self.render(template,context,partials)}if(!value)return;if(isArray(value)){for(var j=0,valueLength=value.length;j<valueLength;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate)}}else if(typeof value==="object"||typeof value==="string"||typeof value==="number"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate)}else if(isFunction(value)){if(typeof originalTemplate!=="string")throw new Error("Cannot use higher-order sections without the original template");value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null)buffer+=value}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate)}return buffer};Writer.prototype.renderInverted=function renderInverted(token,context,partials,originalTemplate){var value=context.lookup(token[1]);if(!value||isArray(value)&&value.length===0)return this.renderTokens(token[4],context,partials,originalTemplate)};Writer.prototype.indentPartial=function indentPartial(partial,indentation,lineHasNonSpace){var filteredIndentation=indentation.replace(/[^ \t]/g,"");var partialByNl=partial.split("\n");for(var i=0;i<partialByNl.length;i++){if(partialByNl[i].length&&(i>0||!lineHasNonSpace)){partialByNl[i]=filteredIndentation+partialByNl[i]}}return partialByNl.join("\n")};Writer.prototype.renderPartial=function renderPartial(token,context,partials,tags){if(!partials)return;var value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null){var lineHasNonSpace=token[6];var tagIndex=token[5];var indentation=token[4];var indentedValue=value;if(tagIndex==0&&indentation){indentedValue=this.indentPartial(value,indentation,lineHasNonSpace)}return this.renderTokens(this.parse(indentedValue,tags),context,partials,indentedValue)}};Writer.prototype.unescapedValue=function unescapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return value};Writer.prototype.escapedValue=function escapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return mustache.escape(value)};Writer.prototype.rawValue=function rawValue(token){return token[1]};mustache.name="mustache.js";mustache.version="3.1.0";mustache.tags=["{{","}}"];var defaultWriter=new Writer;mustache.clearCache=function clearCache(){return defaultWriter.clearCache()};mustache.parse=function parse(template,tags){return defaultWriter.parse(template,tags)};mustache.render=function render(template,view,partials,tags){if(typeof template!=="string"){throw new TypeError('Invalid template! Template should be a "string" '+'but "'+typeStr(template)+'" was given as the first '+"argument for mustache#render(template, view, partials)")}return defaultWriter.render(template,view,partials,tags)};mustache.to_html=function to_html(template,view,partials,send){var result=mustache.render(template,view,partials);if(isFunction(send)){send(result)}else{return result}};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer;return mustache});

(function(factory,undefined){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(typeof module==="object"&&typeof module.exports==="object"){module.exports=factory(require("jquery"))}else{factory(jQuery)}})(function($,undefined){if($.fn.resizableSafe)return;$.fn.resizableSafe=function fnResizable(options){var defaultOptions={handleSelector:null,resizeWidth:true,resizeHeight:true,resizeWidthFrom:"right",resizeHeightFrom:"bottom",onDragStart:null,onDragEnd:null,onDrag:null,touchActionNone:true,instanceId:null};if(typeof options=="object")defaultOptions=$.extend(defaultOptions,options);return this.each(function(){var opt=$.extend({},defaultOptions);if(!opt.instanceId)opt.instanceId="rsz_"+(new Date).getTime();var startPos,startTransition;var $el=$(this);var $handle;if(options==="destroy"){opt=$el.data("resizable");if(!opt)return;$handle=getHandle(opt.handleSelector,$el);$handle.off("mousedown."+opt.instanceId+" touchstart."+opt.instanceId);if(opt.touchActionNone)$handle.css("touch-action","");$el.removeClass("resizable");return}$el.data("resizable",opt);$handle=getHandle(opt.handleSelector,$el);if(opt.touchActionNone)$handle.css("touch-action","none");$el.addClass("resizable");$handle.on("mousedown."+opt.instanceId+" touchstart."+opt.instanceId,startDragging);function noop(e){e.stopPropagation();e.preventDefault()}function startDragging(e){if(e.preventDefault){e.preventDefault()}startPos=getMousePos(e);startPos.width=parseInt($el.width(),10);startPos.height=parseInt($el.height(),10);startTransition=$el.css("transition");$el.css("transition","none");if(opt.onDragStart){if(opt.onDragStart(e,$el,opt)===false)return}$(document).on("mousemove."+opt.instanceId,doDrag);$(document).on("mouseup."+opt.instanceId,stopDragging);if(window.Touch||navigator.maxTouchPoints){$(document).on("touchmove."+opt.instanceId,doDrag);$(document).on("touchend."+opt.instanceId,stopDragging)}$(document).on("selectstart."+opt.instanceId,noop);$("iframe").css("pointer-events","none")}function doDrag(e){var pos=getMousePos(e),newWidth,newHeight;if(opt.resizeWidthFrom==="left")newWidth=startPos.width-pos.x+startPos.x;else newWidth=startPos.width+pos.x-startPos.x;if(opt.resizeHeightFrom==="top")newHeight=startPos.height-pos.y+startPos.y;else newHeight=startPos.height+pos.y-startPos.y;if(!opt.onDrag||opt.onDrag(e,$el,newWidth,newHeight,opt)!==false){if(opt.resizeHeight)$el.height(newHeight);if(opt.resizeWidth)$el.width(newWidth)}}function stopDragging(e){e.stopPropagation();e.preventDefault();$(document).off("mousemove."+opt.instanceId);$(document).off("mouseup."+opt.instanceId);if(window.Touch||navigator.maxTouchPoints){$(document).off("touchmove."+opt.instanceId);$(document).off("touchend."+opt.instanceId)}$(document).off("selectstart."+opt.instanceId,noop);$el.css("transition",startTransition);$("iframe").css("pointer-events","auto");if(opt.onDragEnd)opt.onDragEnd(e,$el,opt);return false}function getMousePos(e){var pos={x:0,y:0,width:0,height:0};if(typeof e.clientX==="number"){pos.x=e.clientX;pos.y=e.clientY}else if(e.originalEvent.touches){pos.x=e.originalEvent.touches[0].clientX;pos.y=e.originalEvent.touches[0].clientY}else return null;return pos}function getHandle(selector,$el){if(selector&&selector.trim()[0]===">"){selector=selector.trim().replace(/^>\s*/,"");return $el.find(selector)}return selector?$el.parent().find(selector):$el}})};if(!$.fn.resizable)$.fn.resizable=$.fn.resizableSafe});
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var s=t();for(var r in s)("object"==typeof exports?exports:e)[r]=s[r]}}(window,function(){return function(e){var t={};function s(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=7)}([function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});const r=s(3),i=s(4);t.blankTableDefinition={id:"",count:0,name:"",rowLocks:{},model:{},columns:[],indexes:{},actions:[],queries:{},views:[],pkType:"string",pkCol:[],isPkNum:!1,ai:!1},t.binarySearch=(e,s,r,i,a)=>{const n=i||0,o=a||e.length;if(e[n]>=s)return r?-1:n;if(e[o]<=s)return r?-1:o+1;const h=Math.floor((n+o)/2);return s==e[h]?h:o-1==n?r?-1:o:s>e[h]?t.binarySearch(e,s,r,h,o):s<e[h]?t.binarySearch(e,s,r,n,h):r?-1:o},t.titleCase=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),t.slugify=e=>String(e).replace(/\s+/g,"-").replace(/[^0-9a-z\-]/gi,"").toLowerCase(),t.buildQuery=(e,s,r,i)=>({databaseID:e,table:r||s.selectedTable,parent:s,action:i,state:"pending",result:[],time:Date.now(),queryID:t.fastID(),extend:[],comments:[],tags:[]}),t.keyToDate=(e,t,s)=>s&&"date"===t?Date.parse(s):s,t.adapterFilters=(e,s,r)=>({write:(i,a,n,o,h)=>{e&&(a=t.keyToDate(s,s.getDB(e)._tables[i].pkType,a),s.doFilter(e,"adapterWrite",{res:{table:i,pk:a,row:n,complete:o,error:h},query:r},t=>{if(!t)return;if(r&&r.transactionId)return s.txs[r.transactionId].push({table:i,type:"put",data:t.res.row}),void t.res.complete(null);(s.getDB(e)._tables[t.res.table].mode||s.getDB(e).adapter).write(s.getDB(e)._tableIds[t.res.table],t.res.pk,t.res.row,e=>{t.res.complete(e)},t.res.error)},h))},read:(i,a,n,o)=>{e&&(a=t.keyToDate(s,s.getDB(e)._tables[i].pkType,a),s.doFilter(e,"adapterRead",{res:{table:i,pk:a,complete:n,error:o},query:r},r=>{if(!r)return;(s.getDB(e)._tables[r.res.table].mode||s.getDB(e).adapter).read(s.getDB(e)._tableIds[r.res.table],r.res.pk,i=>{if(i)if("date"===s.getDB(e)._tables[r.res.table].pkType){const a=Object.assign({},i);t.deepSet(s.getDB(e)._tables[r.res.table].pkCol,a,new Date(r.res.pk).toISOString()),r.res.complete(a)}else r.res.complete(i);else r.res.complete(void 0)},r.res.error)},o))},readMulti:(i,a,n,o,h,l,d,c)=>{e&&(n=t.keyToDate(s,s.getDB(e)._tables[i].pkType,n),o=t.keyToDate(s,s.getDB(e)._tables[i].pkType,o),s.doFilter(e,"adapterReadMulti",{res:{table:i,type:a,offsetOrLow:n,limitOrHigh:o,reverse:h,onRow:l,complete:d,error:c},query:r},r=>{if(!r)return;(s.getDB(e)._tables[r.res.table].mode||s.getDB(e).adapter).readMulti(s.getDB(e)._tableIds[r.res.table],r.res.type,r.res.offsetOrLow,r.res.limitOrHigh,r.res.reverse,(i,a)=>{if("date"===s.getDB(e)._tables[r.res.table].pkType){const n=Object.assign({},i),o=t.deepGet(s.getDB(e)._tables[r.res.table].pkCol,n);t.deepSet(s.getDB(e)._tables[r.res.table].pkCol,n,new Date(o).toISOString()),r.res.onRow(n,a)}else r.res.onRow(i,a)},()=>{r.res.complete()},r.res.error)},c))},connect:(t,i,a)=>{e&&s.doFilter(e,"adapterConnect",{res:{id:t,complete:i,error:a},query:r},t=>{t&&s.getDB(e).adapter.connect(t.res.id,t.res.complete,t.res.error)},a)},disconnect:(t,i)=>{e&&s.doFilter(e,"adapterDisconnect",{res:{complete:t,error:i},query:r},t=>{t&&s.getDB(e).adapter.disconnect(t.res.complete,t.res.error)},i)},createTable:(t,i,a,n)=>{e&&s.doFilter(e,"adapterCreateTable",{res:{table:t,tableData:i,complete:a,error:n},query:r},t=>{if(!t)return;(i.mode||s.getDB(e).adapter).createTable(s.getDB(e)._tableIds[t.res.table],t.res.tableData,t.res.complete,t.res.error)},n)},dropTable:(t,i,a)=>{e&&s.doFilter(e,"adapterDropTable",{res:{table:t,complete:i,error:a},query:r},t=>{if(!t)return;(s.getDB(e)._tables[t.res.table].mode||s.getDB(e).adapter).dropTable(s.getDB(e)._tableIds[t.res.table],t.res.complete,t.res.error)},a)},delete:(i,a,n,o)=>{e&&(a=t.keyToDate(s,s.getDB(e)._tables[i].pkType,a),s.doFilter(e,"adapterDelete",{res:{table:i,pk:a,complete:n,error:o},query:r},t=>{if(!t)return;if(r&&r.transactionId)return s.txs[r.transactionId].push({table:i,type:"del",data:t.res.pk}),void t.res.complete();(s.getDB(e)._tables[t.res.table].mode||s.getDB(e).adapter).delete(s.getDB(e)._tableIds[t.res.table],t.res.pk,t.res.complete,t.res.error)},o))},getTableIndex:(t,i,a)=>{e&&s.doFilter(e,"adapterGetTableIndex",{res:{table:t,complete:i,error:a},query:r},t=>{if(!t)return;(s.getDB(e)._tables[t.res.table].mode||s.getDB(e).adapter).getTableIndex(s.getDB(e)._tableIds[t.res.table],t.res.complete,t.res.error)},a)},getTableIndexLength:(t,i,a)=>{e&&s.doFilter(e,"adapterGetTableIndexLength",{res:{table:t,complete:i,error:a},query:r},t=>{if(!t)return;(s.getDB(e)._tables[t.res.table].mode||s.getDB(e).adapter).getTableIndexLength(s.getDB(e)._tableIds[t.res.table],t.res.complete,t.res.error)},a)},createIndex:(t,i,a,n,o)=>{e&&s.doFilter(e,"adapterCreateIndex",{res:{table:t,indexName:i,type:a,complete:n,error:o},query:r},t=>{if(!t)return;(s.getDB(e)._tables[t.res.table].mode||s.getDB(e).adapter).createIndex(s.getDB(e)._tableIds[t.res.table],t.res.indexName,t.res.type,t.res.complete,t.res.error)},o)},deleteIndex:(t,i,a,n)=>{e&&(s.getDB(e)._tables[t].indexes[i]?s.doFilter(e,"adapterDeleteIndex",{res:{table:t,indexName:i,complete:a,error:n},query:r},t=>{if(!t)return;(s.getDB(e)._tables[t.res.table].mode||s.getDB(e).adapter).deleteIndex(s.getDB(e)._tableIds[t.res.table],t.res.indexName,t.res.complete,t.res.error)},n):n({error:`Index ${i} not found!`}))},addIndexValue:(i,a,n,o,h,l)=>{if(!e)return;if(!s.getDB(e)._tables[i].indexes[a])return void l({error:`Index ${a} not found!`});let d=void 0===o||"undefined"===o?"__NULL__":o;"number"==typeof d&&s.getDB(e)._tables[i].indexes[a].props&&s.getDB(e)._tables[i].indexes[a].props.offset&&(d+=s.getDB(e)._tables[i].indexes[a].props.offset||0),s.getDB(e)._tables[i].indexes[a].props&&s.getDB(e)._tables[i].indexes[a].props.ignore_case&&(d=String(d||"").toUpperCase()),d=t.keyToDate(s,s.getDB(e)._tables[i].indexes[a].isDate?"date":"",d),s.doFilter(e,"adapterAddIndexValue",{res:{table:i,indexName:a,key:n,value:d,complete:h,error:l},query:r},t=>{if(!t)return;if(r&&r.transactionId)return s.txs[r.transactionId].push({table:i,type:"idx-put",data:{indexName:t.res.indexName,tableId:s.getDB(e)._tableIds[t.res.table],key:t.res.key,value:t.res.value}}),void t.res.complete();(s.getDB(e)._tables[t.res.table].mode||s.getDB(e).adapter).addIndexValue(s.getDB(e)._tableIds[t.res.table],t.res.indexName,t.res.key,t.res.value,t.res.complete,t.res.error)},l)},deleteIndexValue:(i,a,n,o,h,l)=>{if(!e)return;if(!s.getDB(e)._tables[i].indexes[a])return void l({error:`Index ${a} not found!`});let d=void 0===o||"undefined"===o?"__NULL__":o;"number"==typeof d&&s.getDB(e)._tables[i].indexes[a].props&&s.getDB(e)._tables[i].indexes[a].props.offset&&(d+=s.getDB(e)._tables[i].indexes[a].props.offset||0),s.getDB(e)._tables[i].indexes[a].props&&s.getDB(e)._tables[i].indexes[a].props.ignore_case&&(d=String(d||"").toUpperCase()),d=t.keyToDate(s,s.getDB(e)._tables[i].indexes[a].isDate?"date":"",d),s.doFilter(e,"adapterDeleteIndexValue",{res:{table:i,indexName:a,key:n,value:d,complete:h,error:l},query:r},t=>{if(!t)return;if(r&&r.transactionId)return s.txs[r.transactionId].push({table:i,type:"idx-del",data:{indexName:t.res.indexName,tableId:s.getDB(e)._tableIds[t.res.table],key:t.res.key,value:t.res.value}}),void t.res.complete();(s.getDB(e)._tables[t.res.table].mode||s.getDB(e).adapter).deleteIndexValue(s.getDB(e)._tableIds[t.res.table],t.res.indexName,t.res.key,t.res.value,t.res.complete,t.res.error)},l)},readIndexKey:(i,a,n,o,h,l)=>{if(!e)return;if(!s.getDB(e)._tables[i].indexes[a])return void l({error:`Index ${a} not found!`});let d="NULL"===n?"__NULL__":n;"number"==typeof d&&s.getDB(e)._tables[i].indexes[a].props&&s.getDB(e)._tables[i].indexes[a].props.offset&&(d+=s.getDB(e)._tables[i].indexes[a].props.offset||0),d=t.keyToDate(s,s.getDB(e)._tables[i].indexes[a].isDate?"date":"",d),s.getDB(e)._tables[i].indexes[a].props&&s.getDB(e)._tables[i].indexes[a].props.ignore_case&&(d=String(d||"").toUpperCase()),s.doFilter(e,"adapterReadIndexKey",{res:{table:i,indexName:a,pk:d,onRowPK:o,complete:h,error:l},query:r},t=>{if(!t)return;(s.getDB(e)._tables[t.res.table].mode||s.getDB(e).adapter).readIndexKey(s.getDB(e)._tableIds[t.res.table],t.res.indexName,t.res.pk,t.res.onRowPK,t.res.complete,t.res.error)},l)},readIndexKeys:(i,a,n,o,h,l,d,c,u)=>{if(!e)return;let p=o,y=h;s.getDB(e)._tables[i].indexes[a]?("number"==typeof p&&"number"==typeof y&&"range"===n&&s.getDB(e)._tables[i].indexes[a]&&s.getDB(e)._tables[i].indexes[a].props.offset&&(p+=s.getDB(e)._tables[i].indexes[a].props.offset||0,y+=s.getDB(e)._tables[i].indexes[a].props.offset||0),p=t.keyToDate(s,s.getDB(e)._tables[i].indexes[a].isDate?"date":"",p),y=t.keyToDate(s,s.getDB(e)._tables[i].indexes[a].isDate?"date":"",y),"range"===n&&s.getDB(e)._tables[i].indexes[a].props&&s.getDB(e)._tables[i].indexes[a].props.ignore_case&&(p=String(p||"").toUpperCase(),y=String(y||"").toUpperCase()),s.doFilter(e,"adapterReadIndexKeys",{res:{table:i,indexName:a,type:n,offsetOrLow:p,limitOrHigh:y,reverse:l,onRowPK:d,complete:c,error:u},query:r},t=>{if(!t)return;(s.getDB(e)._tables[t.res.table].mode||s.getDB(e).adapter).readIndexKeys(s.getDB(e)._tableIds[t.res.table],t.res.indexName,t.res.type,t.res.offsetOrLow,t.res.limitOrHigh,t.res.reverse,(e,s)=>{"__NULL__"!==e&&t.res.onRowPK(e,s)},t.res.complete,t.res.error)},u)):u({error:`Index ${a} not found!`})}}),t.maybeDate=e=>{const t=Date.parse(e);return isNaN(t)?e:t},t.mutateRowTypes=(e,t,s,r)=>{if(!e)return t;const i=r.getDB(e),a=r.getDB(e)._tables[s];if(!a)throw new Error(`nSQL: Table "${s}" not found!`);const n=i.config.types||{},o=(e,t,s)=>t?s&&s.length&&-1!==s.indexOf("[]")?Array.isArray(t)?t.map(t=>o(e,t,s.slice(0,s.lastIndexOf("[]")))):[]:(e.forEach(e=>{if(e.model)t[e.key]=o(e.model,void 0!==t?t[e.key]:void 0);else{const s=e.type.replace(/\[\]/gim,""),r=n[s];if(r&&r.onSelect)t[e.key]=r.onSelect(t[e.key]);else switch(e.type){case"date":t[e.key]=new Date(t[e.key]).toISOString()}}}),t):t,h=a.select?a.select(t):t;return o(r.getDB(e)._tables[s].columns,h)},t.noop=()=>{},t.throwErr=e=>{throw new Error(e)},t.nan=e=>isNaN(e)||null===e?0:parseFloat(e),t.assign=e=>e?JSON.parse(JSON.stringify(e)):e,t.objectsEqual=(e,t)=>e===t||"object"==typeof e&&(!(!e||!t)&&i(e,t));t._nanoSQLQueue=class{constructor(e,t,s){this.processItem=e,this.onError=t,this.onComplete=s,this._items=[],this._going=!1,this._done=!1,this._count=0,this._triggeredComplete=!1,this._progressBuffer=this._progressBuffer.bind(this)}_progressBuffer(){if(this._triggeredComplete)return;if(this._done&&!this._items.length)return this._triggeredComplete=!0,void(this.onComplete&&this.onComplete());if(!this._items.length)return void(this._going=!1);const e=()=>{this._count++,this._count%100==0?t.setFast(this._progressBuffer):this._progressBuffer()},s=this._items.shift()||[];s[1]?s[1](s[0],e,this.onError?this.onError:t.noop):this.processItem&&this.processItem(s[0],this._count,e,this.onError?this.onError:t.noop)}finished(){this._done=!0,this._triggeredComplete||this._going||this._items.length||(this._triggeredComplete=!0,this.onComplete&&this.onComplete())}newItem(e,t){this._items.push([e,t]),this._going||(this._going=!0,this._progressBuffer())}},t.chainAsync=(e,s)=>new Promise((r,i)=>{if(!e||!e.length)return void r([]);let a=[],n=0;const o=()=>{n<e.length?s(e[n],n,e=>{a.push(e||0),++n%250==0?t.setFast(()=>{o()}):o()},e=>{i(e)}):r(a)};o()}),t.allAsync=(e,t)=>e&&e.length?Promise.all((e||[]).map((e,s)=>new Promise((r,i)=>{t(e,s,r,i)}))):Promise.resolve([]);const a="undefined"==typeof window?"":navigator.userAgent||"";t.isSafari=0!==a.length&&(/^((?!chrome|android).)*safari/i.test(a)||/iPad|iPhone|iPod/.test(a)&&!window.MSStream),t.isMSBrowser=0!==a.length&&(a.indexOf("MSIE ")>0||a.indexOf("Trident/")>0||a.indexOf("Edge/")>0),t.isAndroid=/Android/.test(a),t.random16Bits=()=>{if("undefined"==typeof crypto)return Math.round(Math.random()*Math.pow(2,16));if(crypto.getRandomValues){let e=new Uint16Array(1);return crypto.getRandomValues(e),e[0]}return"undefined"!=typeof global&&global._crypto.randomBytes?global._crypto.randomBytes(2).reduce((e,t)=>t*e):Math.round(Math.random()*Math.pow(2,16))},t.throttle=(e,t,s)=>{let r=!1;return(...i)=>{r||(r=!0,setTimeout(()=>{t.apply(e,i),r=!1},s))}},t.timeid=e=>{let s=Math.round((new Date).getTime()/(e?1:1e3)).toString();for(;s.length<(e?13:10);)s="0"+s;let r=(t.random16Bits()+t.random16Bits()).toString(16);for(;r.length<5;)r="0"+r;return s+"-"+r},t.intersect=(e,t)=>!(!e||!t)&&(!(!e.length||!t.length)&&(e||[]).filter(e=>-1!==(t||[]).indexOf(e)).length>0),t.fastID=()=>[0,0].map(e=>Math.round(1024*Math.random()).toString(16)).join(""),t.uuid=()=>{let e,s,r="";return[r,r,r,r,r,r,r,r].reduce((i,a,n)=>{for(e=t.random16Bits(),s=3===n?4:4===n?(e%16&3|8).toString(16):r,e=e.toString(16);e.length<4;)e="0"+e;return i+([2,3,4,5].indexOf(n)>-1?"-":r)+(s+e).slice(0,4)},r)},t.hash=e=>{let t=5381,s=e.length;for(;s;)t=33*t^e.charCodeAt(--s);return(t>>>0).toString(16)},t.generateID=(e,s)=>{const r={int:e=>e,date:e=>e,float:e=>e,uuid:t.uuid,timeId:()=>t.timeid(),timeIdms:()=>t.timeid(!0)};return r[e]?r[e](s||1):void 0},t.cleanArgs2=(e,s,r,i)=>{const a=(r,n,o)=>{if(-1!==r.indexOf("[]")){const e=r.slice(0,r.lastIndexOf("[]"));return Array.isArray(n)?n.map(t=>a(e,t,o)):[]}if("string"!=typeof o){let s={},r=!1,a=[];return Object.keys(o).forEach(o=>{const h=o.split(":");"*"===h[0]?r=!0:(a.push(h[0]),s[h[0]]=t.cast(e,h[1],n[h[0]],!1,i))}),r&&t.isObject(n)&&Object.keys(n).filter(e=>-1===a.indexOf(e)).forEach(e=>{s[e]=n[e]}),s}{let t=o.replace(/\[\]/gim,""),r=Object.keys(i.getDB(e).config.types||{}).reduce((s,r)=>r===t?(i.getDB(e).config.types||{})[r]:s,void 0);if(!r)throw new Error(`Can't find type ${t}!`);const h=e=>{if(-1!==e.indexOf("[]")){const t=e.slice(0,e.lastIndexOf("[]"));return Array.isArray(s)?s.map(e=>h(t)):[]}if(!r)throw new Error(`Can't find type ${t}!`);return r.model?a(o,s,r.model):n};h(o)}};return a("string"==typeof r?r:"",s,r)},t.cleanArgs=(e,s,r,i)=>{let a={},n=s.length;Object.keys(i.getDB(e).config.types||{});for(;n--;){let o=s[n].split(":");o.length>1?a[o[0]]=t.cast(e,o[1],r[o[0]]||void 0,!0,i):a[o[0]]=r[o[0]]||void 0}return a},t.isObject=e=>"[object Object]"===Object.prototype.toString.call(e),t.objSort=(e,s)=>(r,i)=>{const a=e?t.deepGet(e,r)>t.deepGet(e,i)?-1:1:r>i?-1:1;return s?-1*a:a},t.execFunction=(e,s,r,i)=>{const a=s.match(/\((.*)\)/gim);if(!a[0])return{result:void 0};const n=a[0].substr(1,a[0].length-2).split(/\,\s?(?![^\(]*\))/).map(e=>e.trim()),o=s.split("(").shift(),h=n.map(s=>{if(-1!==s.indexOf("(")){const a=t.execFunction(e,s,r,i).result;return"number"==typeof a?a:"string"==typeof a?'"'+a+'"':a}return s});return e.parent.functions[o]?e.parent.functions[o].call(e,r,i,...h):{result:void 0}},t.cast=(e,s,r,i,a)=>{if("any"===s||"blob"===s||"*"===s)return r;if(-1!==s.indexOf("[]")){const a=s.slice(0,s.lastIndexOf("[]"));return Array.isArray(r)?r.map(s=>t.cast(e,a,s,i)):[]}if(null==r)return;const n=typeof r,o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},h=a&&e&&a.getDB(e).config.types||{};if(-1!==Object.keys(h).indexOf(s)){const n=h[s];return n.model?t.isObject(r)?Object.keys(n.model).reduce((s,n)=>{const o=n.split(":");return s[o[0]]=t.cast(e,o[1],r[o[0]],i,a),s},{}):{}:n.onSelect?n.onSelect(r):void 0}const l=(e,s)=>{switch(e){case"safestr":return l("string",s).replace(/[&<>"'`=\/]/gim,e=>o[e]);case"int":return"number"!==n||s%1!=0?Math.round(t.nan(s)):s;case"number":case"float":return"number"!==n?t.nan(s):s;case"array":return Array.isArray(s)?s:[];case"date":case"uuid":case"timeId":case"timeIdms":case"string":return"string"!==n?String(s):s;case"object":case"obj":case"map":return t.isObject(s)?s:void 0;case"boolean":case"bool":return!0===s||1===s}return i?r:null};if(null==r)return;const d=l(String(s||"").toLowerCase(),r);return void 0!==d&&-1!==["int","float","number"].indexOf(s)&&isNaN(d)?0:d},t.rad2deg=e=>180*e/Math.PI,t.deg2rad=e=>e*(Math.PI/180),t.crowDistance=(e,s,r,i,a=6371)=>{const n=t.deg2rad(r-e),o=t.deg2rad(i-s),h=Math.pow(Math.sin(n/2),2)+Math.cos(t.deg2rad(e))*Math.cos(t.deg2rad(r))*Math.pow(Math.sin(o/2),2);return a*(2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h)))},t.levenshtein=(e,t)=>r(e,t);const n={};t.resolvePath=e=>{if(!e)return[];if(n[e])return n[e].slice();const t=-1!==e.indexOf("[")?e.split(/\.|\[/gim).map(e=>e.replace(/\]/gim,"")):e.split(".");return n[e]=t,n[e].slice()},t.fnRegex=/^[\"|\'](.*)[\"|\']$/gim,t.getFnValue=(e,s)=>{if("number"==typeof s)return s;const r=t.fnRegex.exec(s);return r?r[1]:t.deepGet(s,e)},t.deepFreeze=e=>(Object.getOwnPropertyNames(e||{}).forEach(s=>{const r=e[s];"object"==typeof r&&null!==r&&(e[s]=t.deepFreeze(r))}),Object.freeze(e)),t.deepSet=(e,s,r)=>{const i=(e,s,a)=>{e[s+1]?(a[e[s]]&&(Array.isArray(a[e[s]])||t.isObject(a[e[s]]))||(isNaN(e[s+1])?a[e[s]]={}:a[e[s]]=[]),i(e,s+1,a[e[s]])):a[e[s]]=r};return i(Array.isArray(e)?e:t.resolvePath(e),0,s),s},t.deepGet=(e,s)=>{const r=(e,t,s)=>e[t]&&s?r(e,t+1,s[e[t]]):s;return r(Array.isArray(e)?e:t.resolvePath(e),0,s)},t.maybeAssign=e=>Object.isFrozen(e)?t.assign(e):e;const o=e=>e[0].apply(null,Array.prototype.slice.call(e,1));t.setFast="undefined"!=typeof Promise?(...e)=>{Promise.resolve().then(()=>{o(e)})}:(...e)=>{setTimeout(()=>{o(e)},0)}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION=2.37,function(e){e[e.NONE=0]="NONE",e[e.CASCADE=1]="CASCADE",e[e.RESTRICT=2]="RESTRICT",e[e.SET_NULL=3]="SET_NULL"}(t.InanoSQLFKActions||(t.InanoSQLFKActions={})),function(e){e[e.fast=0]="fast",e[e.medium=1]="medium",e[e.slow=2]="slow",e[e.fn=3]="fn",e[e.none=4]="none"}(t.IWhereType||(t.IWhereType={}))},function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});const r=s(0);t.err=new Error("Memory index doesn't support this action!");t.nanoSQLMemoryIndex=class{constructor(e,t){this.assign=e,this.useCache=t}connect(e,s,r){r(t.err)}disconnect(e,s){s(t.err)}createTable(e,s,r,i){i(t.err)}dropTable(e,s,r){r(t.err)}write(e,s,r,i,a){a(t.err)}read(e,s,r,i){i(t.err)}delete(e,s,r,i){i(t.err)}readMulti(e,s,r,i,a,n,o,h){h(t.err)}getTableIndex(e,s,r){r(t.err)}getTableIndexLength(e,s,r){r(t.err)}createIndex(e,t,s,i,a){const n=`_idx_${e}_${t}`;this.createTable(n,Object.assign({},r.blankTableDefinition,{pkType:s,pkCol:["id"],isPkNum:-1!==["float","int","number"].indexOf(s)}),()=>{i()},a)}deleteIndex(e,t,s,r){const i=`_idx_${e}_${t}`;this.dropTable(i,s,r)}addIndexValue(e,t,s,i,a,n){const o=`_idx_${e}_${t}`;this.read(o,i,e=>{let t=e?e.pks:[];if(0===(t=this.assign?r.assign(t):t).length)t.push(s);else{const e=r.binarySearch(t,s,!1);t.splice(e,0,s)}this.write(o,i,{id:s,pks:this.assign?r.assign(t):t},a,n)},n)}deleteIndexValue(e,t,s,i,a,n){const o=`_idx_${e}_${t}`;this.read(o,i,e=>{let t=e?e.pks:[];if(0!==(t=this.assign?r.assign(t):t).length){{const e=t.length<100?t.indexOf(s):r.binarySearch(t,s,!0);-1!==e&&t.splice(e,1)}t.length?this.write(o,i,{id:s,pks:this.assign?r.assign(t):t},a,n):this.delete(o,i,a,n)}else a()},n)}readIndexKey(e,t,s,r,i,a){const n=`_idx_${e}_${t}`;this.read(n,s,e=>{e?(e.pks.forEach(r),i()):i()},a)}readIndexKeys(e,t,s,r,i,a,n,o,h){const l=`_idx_${e}_${t}`;this.readMulti(l,s,r,i,a,e=>{e&&e.pks.forEach(t=>{n(t,e.id)})},o,h)}}},function(e,t,s){"use strict";e.exports=function(e,t,s){var a,n,o,h,l,d,c,u;if(e===t)return 0;if(a=e.length,n=t.length,0===a)return n;if(0===n)return a;s&&(e=e.toLowerCase(),t=t.toLowerCase());c=0;for(;c<a;)i[c]=e.charCodeAt(c),r[c]=++c;u=0;for(;u<n;)for(o=t.charCodeAt(u),h=l=u++,c=-1;++c<a;)d=o===i[c]?l:l+1,l=r[c],r[c]=h=l>h?d>h?h+1:d:d>l?l+1:d;return h};var r=[],i=[]},function(e,t,s){"use strict";var r=Array.isArray,i=Object.keys,a=Object.prototype.hasOwnProperty;e.exports=function e(t,s){if(t===s)return!0;if(t&&s&&"object"==typeof t&&"object"==typeof s){var n,o,h,l=r(t),d=r(s);if(l&&d){if((o=t.length)!=s.length)return!1;for(n=o;0!=n--;)if(!e(t[n],s[n]))return!1;return!0}if(l!=d)return!1;var c=t instanceof Date,u=s instanceof Date;if(c!=u)return!1;if(c&&u)return t.getTime()==s.getTime();var p=t instanceof RegExp,y=s instanceof RegExp;if(p!=y)return!1;if(p&&y)return t.toString()==s.toString();var g=i(t);if((o=g.length)!==i(s).length)return!1;for(n=o;0!=n--;)if(!a.call(s,g[n]))return!1;for(n=o;0!=n--;)if(!e(t[h=g[n]],s[h]))return!1;return!0}return t!=t&&s!=s}},function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});const r=s(6),i=s(12),a=s(13);let n;"undefined"!=typeof global&&(n=global._snapAdapter),t.detectStorage=()=>"undefined"==typeof window?(console.warn("RocksDB has been removed in default nanoSQL!  Follow this guide to restore RocksDB databases: https://nanosql.io/migration.html#_2-3-1-2-3-2"),"SNP"):"undefined"!=typeof indexedDB?"IDB":void 0!==window.openDatabase?"WSQL":"LS",t.resolveMode=(e,s)=>{if("string"!=typeof e)return e;switch("PERM"===e&&(e=t.detectStorage()),e){case"TEMP":return new r.SyncStorage(!1);case"LS":return new r.SyncStorage(!0);case"WSQL":return new i.WebSQL(s&&s.size);case"IDB":return new a.IndexedDB(s&&s.version);case"RKS":throw new Error("RocksDB is no longer built in!  Grab it here https://www.npmjs.com/package/@nano-sql/adapter-rocksdb");case"LVL":throw new Error("LevelDB is no longer build in!  Grab it here https://www.npmjs.com/package/@nano-sql/adapter-leveldb");case"SNP":return new n;default:throw new Error(`Cannot find mode ${e}!`)}}},function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});const r=s(1),i=s(0),a=s(2);t.SyncStorage=class extends a.nanoSQLMemoryIndex{constructor(e){super(!0,!1),this.useLS=e,this.plugin={name:"Sync Storage Adapter",version:r.VERSION},this._index={},this._rows={},this._ai={},this._tableConfigs={}}connect(e,t,s){this._id=e,t()}createTable(e,t,s,r){if(this._index[e]=[],this._rows[e]={},this._tableConfigs[e]=t,this.useLS){const t=localStorage.getItem(this._id+"->"+e+"_idx");t&&(this._index[e]=JSON.parse(t),this._ai[e]=parseFloat(localStorage.getItem(this._id+"->"+e+"_ai")||"0"))}s()}dropTable(e,t,s){this._index[e].forEach(t=>{this.useLS?localStorage.removeItem(this._id+"->"+e+"__"+t):delete this._rows[e][t]}),this.useLS&&localStorage.removeItem(this._id+"->"+e+"_idx"),delete this._index[e],delete this._rows[e],t()}disconnect(e,t){e()}write(e,t,s,r,a){if(void 0!==(t=t||i.generateID(this._tableConfigs[e].pkType,this._ai[e]+1))){if(this._tableConfigs[e].ai&&(this._ai[e]=Math.max(this._ai[e]||0,t)),-1===this._index[e].indexOf(t)){if(this._ai[e])this._index[e].push(t);else{const s=i.binarySearch(this._index[e],t,!1);this._index[e].splice(s,0,t)}this.useLS&&(localStorage.setItem(this._id+"->"+e+"_idx",JSON.stringify(this._index[e])),localStorage.setItem(this._id+"->"+e+"_ai",String(this._ai[e])))}i.deepSet(this._tableConfigs[e].pkCol,s,t),this.useLS?(localStorage.setItem(this._id+"->"+e+"__"+t,JSON.stringify(s)),r(t)):(this._rows[e][t]=i.deepFreeze(s),r(t))}else a(new Error("Can't add a row without a primary key!"))}read(e,t,s,r){if(this.useLS){const r=localStorage.getItem(this._id+"->"+e+"__"+t);s(r?JSON.parse(r):void 0)}else s(this._rows[e][t])}delete(e,t,s,r){let i=this._index[e].indexOf(t);-1!==i&&(this._index[e].splice(i,1),this.useLS&&localStorage.setItem(this._id+"->"+e+"_idx",JSON.stringify(this._index[e].keys()))),this.useLS?localStorage.removeItem(this._id+"->"+e+"__"+t):delete this._rows[e][t],s()}readMulti(e,t,s,r,a,n,o,h){let l={range:[s,r],offset:[s,s+r],all:[]}[t];const d=(()=>{switch(t){case"all":return this._index[e].slice();case"offset":const s=this._index[e].length-1;return a?this._index[e].slice(s-l[1],s-l[0]):this._index[e].slice(l[0],l[1]);case"range":let r=i.binarySearch(this._index[e],l[0],!1),n=i.binarySearch(this._index[e],l[1],!1);for(;this._index[e][n]>l[1];)n--;for(;this._index[e][r]<l[0];)r++;return this._index[e].slice(r,n+1)}return[]})();a&&d.reverse(),d.forEach((t,s)=>{this.useLS?n(JSON.parse(localStorage.getItem(this._id+"->"+e+"__"+t)||"{}"),s):n(this._rows[e][t],s)}),o()}getTableIndex(e,t,s){t(this._index[e].slice())}getTableIndexLength(e,t,s){t(this._index[e].length)}}},function(e,t,s){e.exports=s(8)},function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});const r=s(9),i=s(0),a=s(1);t.InanoSQLInstance=a.InanoSQLInstance;const n=s(10),o=s(11),h=s(14),l=s(0),d=s(5),c=s(6);class u{constructor(){this.dbs={},this.selectedDB="nSQL_DB",this.version=a.VERSION,this.events={},this.planetRadius=6371,this.txs={},this._countTimers={};const e=e=>"object"==typeof e?JSON.stringify(e):String(e),t=e=>t=>isNaN(t)||null===t?0:e(t);this.indexTypes={string:e,geo:e=>{},float:t(parseFloat),int:t(parseInt),number:t(parseFloat),date:t(parseInt),uuid:e,timeId:e,timeIdms:e},this._checkTTL=this._checkTTL.bind(this),n.attachDefaultFns(this)}getDB(e){const t=e||this.selectedDB;if(!this.dbs[t])throw new Error(`Database ${t} doesn't exist!`);return this.dbs[t]}_rebuildFKs(){this.getDB().state.cacheId=i.uuid(),this.getDB()._fkRels={},Object.keys(this.getDB()._tables).forEach(e=>{const t=this.getDB()._tables[e];Object.keys(t.indexes).forEach(s=>{const r=t.indexes[s];if(r.props&&r.props.foreignKey){const t=i.resolvePath(r.props.foreignKey.target),n=t.shift();this.getDB()._fkRels[n]||(this.getDB()._fkRels[n]=[]),this.getDB()._fkRels[n].push({selfPath:t.map(e=>e.replace(/\[\]/gim,"")),selfIsArray:-1!==r.props.foreignKey.target.indexOf("[]"),childTable:e,childPath:r.path,childIsArray:r.isArray,childIndex:s,onDelete:r.props.foreignKey.onDelete||a.InanoSQLFKActions.NONE})}})})}doFilter(e,t,s,r,a){e&&this.dbs[e]&&this.getDB(e).filters[t]?i.chainAsync(this.getDB(e).filters[t],(r,i,n)=>{this.getDB(e).filters[t][i](s,e=>{s=e,n()},a)}).then(()=>{r(s)}):r(s)}getCache(e,t){if(!this.getDB()._queryCache[e])throw new Error(`Cache "${e}" not found!`);return t?this.getDB()._queryCache[e].slice(t.offset,t.offset+t.limit):this.getDB()._queryCache[e].slice()}clearCache(e){const t=void 0!==this.getDB()._queryCache[e];return delete this.getDB()._queryCache[e],t}clearTTL(e){const t=this.selectedTable+"."+e;return new Promise((e,s)=>{this.triggerQuery(this.selectedDB,Object.assign({},i.buildQuery(this.selectedDB,this,"_ttl","delete"),{where:["key","=",t]}),i.noop,e,s)})}expires(e){return new Promise((t,s)=>{const r=this.selectedTable+"."+e;let a=[];this.triggerQuery(this.selectedDB,Object.assign({},i.buildQuery(this.selectedDB,this,"_ttl","select"),{where:["key","=",r]}),e=>{a.push(e)},()=>{a.length?t({time:(a[0].date-Date.now())/1e3,cols:a[0].cols}):t({time:-1,cols:[]})},s)})}_checkTTL(){if(this.getDB().config.disableTTL)return;this.getDB()._ttlTimer&&clearTimeout(this.getDB()._ttlTimer);let e=0,t=0;const s=()=>{let r=[];this.triggerQuery(this.selectedDB,Object.assign({},i.buildQuery(this.selectedDB,this,"_ttl","select"),{limit:20,offset:20*e}),e=>{r.push(e)},()=>{r.length?i.chainAsync(r,(e,s,r)=>{if(e.date<Date.now()){const t=()=>{this.triggerQuery(this.selectedDB,Object.assign({},i.buildQuery(this.selectedDB,this,"_ttl","delete"),{where:["key","=",e.key]}),i.noop,r,i.throwErr)},s=e.key.split("."),a=s[0],n=-1===["float","int","number"].indexOf(this.getDB()._tables[a].pkType)?s[1]:parseFloat(s[1]);if(e.cols.length){let s={};e.cols.forEach(e=>{s[e]=null}),this.triggerQuery(this.selectedDB,Object.assign({},i.buildQuery(this.selectedDB,this,a,"upsert"),{actionArgs:s,where:[this.getDB()._tables[a].pkCol,"=",n]}),i.noop,t,i.throwErr)}else this.triggerQuery(this.selectedDB,Object.assign({},i.buildQuery(this.selectedDB,this,a,"delete"),{where:[this.getDB()._tables[a].pkCol,"=",n]}),i.noop,t,i.throwErr)}else t=Math.max(t,e.date),r()}).then(()=>{e++,s()}):t&&(this.getDB()._ttlTimer=setTimeout(this._checkTTL,t-Date.now()))},i.throwErr)};s()}selectTable(e){return e&&(this.selectedTable=e),this}getPeers(){return JSON.parse(localStorage.getItem("nsql-peers-"+this.getDB().state.id)||"[]")}_initPlugins(e){return new Promise((t,s)=>{let r={};(e.plugins||[]).forEach(e=>{(e.filters||[]).forEach(e=>{r[e.name]||(r[e.name]=[]);let t=e.priority;for(;r[e.name][t];)t++;r[e.name][t]=e.call})}),Object.keys(r).forEach(e=>{this.getDB().filters[e]=[],r[e].forEach(t=>{t&&this.getDB().filters[e].unshift(t)})});const i=(e,t)=>!t||!t.length||(1===t.length?e>=t[0]:e>=t[0]&&e<t[1]);let n=!1;(e.plugins||[]).forEach(t=>{if(t.dependencies){const r=t.dependencies||{};Object.keys(t.dependencies).forEach((o,h,l)=>{if("core"===o)i(a.VERSION,r[o])||(n=!0,s(`Plugin "${t.name}" requires a different core version of nano-sql!`));else{const a=(e.plugins||[]).reduce((e,t)=>t.name===o?t:e);a||(n=!0,s(`Plugin "${t.name}" requires plugin "${o}" but it isn't installed!`)),i(a.version,r[o])||(n=!0,s(`Plugin "${t.name}" requires a different version of "${o}"!`))}})}}),n||t()})}_saveTableIds(e){return new Promise((t,s)=>{this.triggerQuery(e,Object.assign({},i.buildQuery(e,this,"_util","upsert"),{actionArgs:i.assign({key:"tableIds",value:this.getDB(e)._tableIds})}),i.noop,t,s)})}presetQuery(e,t){if("string"!=typeof this.selectedTable)throw new Error("Can't get table queries without selecting a table!");if(!(-1!==Object.keys(this.getDB()._tables[this.selectedTable].queries).indexOf(e)))throw new Error(`Can't find preset query ${e}!`);const s=this.getDB()._tables[this.selectedTable].queries[e].args;let r={};s&&(r=i.cleanArgs2(this.selectedDB,t,s,this));const a=this.getDB()._tables[this.selectedTable].queries[e].call(this,r),n=this.query("");return n._query=a,n}useDatabase(e){return this.selectedDB=e,this}createDatabase(e){return this.connect(e)}listDatabases(){return Object.keys(this.dbs)}dropDatabase(e){return new Promise((t,s)=>{const r=Object.keys(this.getDB(e)._tables);i.chainAsync(r,(t,s,r,a)=>{const n=this.getDB(e)._tables[t];this.triggerQuery(e,Object.assign({},i.buildQuery(e,this,n.name,"drop")),i.noop,()=>{r()},a)}).then(()=>{delete this.dbs[e],t()}).catch(s)})}maybeCreateEventObject(e){this.events[e]||(this.events[e]={Core:{"*":new r.ReallySmallEvents},"*":{"*":new r.ReallySmallEvents}})}connect(e={}){const t=e.id?String(e.id):"nSQL_DB";if(this.dbs[t])throw new Error(`nSQL: ${t} database has already been created!`);return this.maybeCreateEventObject(t),this.dbs[t]={adapter:new c.SyncStorage,_ttlTimer:0,_Q:new i._nanoSQLQueue,state:{activeAV:"",hasAnyEvents:!1,peers:[],pid:i.uuid(),id:i.uuid(),cacheId:i.uuid(),peerEvents:[],focused:!0,peerMode:!1,connected:!1,ready:!1,exportQueryObj:!1},config:{id:t},_tables:{},_fkRels:{},_tableIds:{_util:"_util",_ttl:"_ttl"},_queryCache:{},filters:{}},this.selectedDB=t,this._refreshEventChecker(),this._initPlugins(e).then(()=>new Promise((s,r)=>{this.doFilter(t,"config",{res:e},e=>{s(e.res)},r)})).then(e=>(this.getDB(t).state.id=t,this.getDB(t).config=Object.assign({plugins:[]},e),"undefined"!=typeof window&&e&&e.peer&&(this.getDB(t).state.peerMode=!0),new Promise((e,s)=>{this.doFilter(t,"willConnect",{res:this},()=>{e()},s)}))).then(()=>new Promise((e,s)=>{this.getDB(t).adapter=d.resolveMode(this.getDB(t).config.mode||"TEMP",this.getDB(t).config),this.getDB(t).adapter.plugin&&(this.getDB(t).config.plugins||[]).push(this.getDB(t).adapter.plugin),this._initPlugins(this.getDB(t).config).then(()=>{this.getDB(t).adapter.nSQL=this,i.adapterFilters(t,this).connect(this.getDB(t).state.id,()=>{this.doFilter(t,"postConnect",{res:this.getDB(t).config},s=>{this.getDB(t).config=s.res,e()},s)},s)}).catch(s),this.getDB(t).config.planetRadius&&(this.planetRadius=this.getDB(t).config.planetRadius)})).then(()=>{this.triggerEvent(t,{target:"Core",targetId:this.getDB(t).state.id,path:"*",events:["connect"],time:Date.now()}),this.getDB(t).state.connected=!0;const e=["_util","_ttl"].concat((this.getDB(t).config.tables||[]).map(e=>e.name));return i.chainAsync(e,(e,s,r,a)=>{switch(e){case"_util":this.triggerQuery(t,Object.assign({},i.buildQuery(t,this,"_util","create table"),{actionArgs:{name:"_util",model:{"key:string":{pk:!0},"value:any":{}},_internal:!0}}),i.noop,()=>{this.triggerQuery(t,Object.assign({},i.buildQuery(t,this,"_util","select"),{where:["key","=","tableIds"]}),e=>{this.getDB(t)._tableIds=Object.assign({},this.getDB(t)._tableIds,e.value)},()=>{r()},a)},a);break;case"_ttl":this.triggerQuery(t,Object.assign({},i.buildQuery(t,this,"_ttl","create table"),{actionArgs:{name:"_ttl",model:{"key:string":{pk:!0},"table:string":{},"cols:string[]":{},"date:number":{}},_internal:!0}}),i.noop,r,a);break;default:const s=(this.getDB(t).config.tables||[]).filter(t=>t.name===e)[0];if(!s)return void a("Table not found!");this.triggerQuery(t,Object.assign({},i.buildQuery(t,this,e,"create table"),{actionArgs:s}),i.noop,r,a)}})}).then(()=>new Promise((e,s)=>{let r;this.triggerQuery(t,Object.assign({},i.buildQuery(t,this,"_util","select"),{where:["key","=","version"]}),e=>{e&&(r=e.value)},()=>{!r||r<2?this.triggerQuery(t,Object.assign({},i.buildQuery(t,this,"_util","upsert"),{actionArgs:{key:"version",value:a.VERSION}}),i.noop,e,s):e()},s)})).then(()=>new Promise((e,s)=>{if(!this.getDB(t).config.version)return void e();let r;this.triggerQuery(t,Object.assign({},i.buildQuery(t,this,"_util","select"),{where:["key","=","db-version"]}),e=>{e&&(r=e.value)},()=>{const a=(e,s,r)=>{this.triggerQuery(t,Object.assign({},i.buildQuery(t,this,"_util","upsert"),{actionArgs:{key:"db-version",value:e}}),i.noop,s,r)};if(r){const n=()=>{if(r===this.getDB(t).config.version)a(this.getDB(t).config.version||0,e,s);else{const o=this.getDB(t).config.onVersionUpdate;if(!o)return void a(this.getDB(t).config.version||0,e,s);o(r).then(e=>{a(r=e,()=>{i.setFast(n)},s)}).catch(s)}};n()}else a(this.getDB(t).config.version||0,e,s)},s)})).then(()=>new Promise((e,s)=>{const r={target:"Core",path:"*",targetId:this.getDB(t).state.id,events:["ready"],time:Date.now()};this.doFilter(t,"ready",{res:r},s=>{this.triggerEvent(t,s.res),this.getDB(t).state.ready=!0,this.getDB(t).config.disableTTL||this._checkTTL(),this.getDB(t).config.peer&&this._initPeers(),e()},s)}))}_initPeers(){let e=0;this.getDB().state.pid=i.uuid(),this.getDB().state.peers=this.getPeers(),this.getDB().state.peers.unshift(this.getDB().state.pid),localStorage.setItem("nsql-peers-"+this.getDB().state.id,JSON.stringify(this.getDB().state.peers)),window.addEventListener("storage",t=>{if(t.key==="nsql-peers-"+this.getDB().state.id&&(this.getDB().state.peers=this.getPeers()),t.key&&0===t.key.indexOf(this.getDB().state.pid+".")){localStorage.removeItem(t.key);const e=JSON.parse(t.newValue||"{}");this.getDB().state.peerEvents.push(e.query.queryID||""),this.triggerEvent(this.selectedDB,Object.assign({},e,{types:["peer change"]})),i.setFast(()=>{this.triggerEvent(this.selectedDB,e)})}if(++e>50&&this.getDB().state.peers[0]===this.getDB().state.pid){e=0;let t=localStorage.length,s={};for(;t--;){const e=localStorage.key(t),r=e?e.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{8}/gim):null;if(e&&r){const t=(r||[""])[0];s[t]||(s[t]=[]),s[t].push(e)}}Object.keys(s).forEach(e=>{s[e].length>10&&(this.getDB().state.peers=this.getDB().state.peers.filter(t=>t!==e),s[e].forEach(e=>{localStorage.removeItem(e)}),localStorage.setItem("nsql-peers-"+this.getDB().state.id,JSON.stringify(this.getDB().state.peers)))})}}),window.onblur=()=>{this.getDB().state.focused=!1},window.onfocus=()=>{this.getDB().state.peers=this.getDB().state.peers.filter(e=>e!==this.getDB().state.pid),this.getDB().state.peers.unshift(this.getDB().state.pid),localStorage.setItem("nsql-peers-"+this.getDB().state.id,JSON.stringify(this.getDB().state.peers)),this.getDB().state.focused=!0},t.nSQL("*").on("change",e=>{const t=this.getDB().state.peerEvents.indexOf(e.query.queryID||"");-1===t?this.getDB().state.peers.filter(e=>e!==this.getDB().state.pid).forEach(t=>{localStorage.setItem(t+"."+e.query.queryID,JSON.stringify(e))}):this.getDB().state.peerEvents.splice(t,1)}),window.addEventListener("beforeunload",()=>(this.getDB().state.peers=this.getDB().state.peers.filter(e=>e!==this.getDB().state.pid),localStorage.setItem("nsql-peers-"+this.getDB().state.id,JSON.stringify(this.getDB().state.peers)),!1))}every(e){let t=0,s=[];for(;t<=e.length;)e.every?t%e.every==0&&s.push(t+(e.offset||0)):s.push(t+(e.offset||0)),t++;return s}on(e,t,s){let a=s||("string"!=typeof this.selectedTable?"":this.selectedTable);const n=this.selectedDB;this.maybeCreateEventObject(n),this.doFilter(n,"onEvent",{res:{action:e,callback:t}},t=>{switch(t.res.action){case"connect":case"ready":case"disconnect":case"peer change":case"slow query":this.events[n].Core["*"].on(t.res.action,t.res.callback);break;case"select":case"change":case"delete":case"upsert":case"*":const s=i.resolvePath(a);this.events[n][s[0]]||(this.events[n][s[0]]={"*":new r.ReallySmallEvents});const o=s.filter((e,t)=>t>0).join(".")||"*";this.events[n][s[0]][o]||(this.events[n][s[0]][o]=new r.ReallySmallEvents),this.events[n][s[0]][o].on(t.res.action,t.res.callback);break;default:new Promise((t,s)=>{this.doFilter(n,"customEvent",{res:{nameSpace:"",path:"*"},selectedTable:a,action:e,on:!0},t,s)}).then(s=>{if(!s.res.nameSpace)throw new Error(`Invalid event "${e}"!`);this.events[n][s.res.nameSpace]||(this.events[n][s.res.nameSpace]={"*":new r.ReallySmallEvents}),this.events[n][s.res.nameSpace][s.res.path]||(this.events[n][s.res.nameSpace][s.res.path]=new r.ReallySmallEvents),this.events[n][s.res.nameSpace][s.res.path].on(t.res.action,t.res.callback),this._refreshEventChecker()})}this._refreshEventChecker()},i.noop)}off(e,t,s){let a=s||("string"!=typeof this.selectedTable?"":this.selectedTable);const n=this.selectedDB;this.maybeCreateEventObject(n),this.doFilter(n,"offEvent",{res:{action:e,callback:t}},t=>{switch(t.res.action){case"connect":case"ready":case"disconnect":case"peer change":case"slow query":this.events[n].Core["*"].off(t.res.action,t.res.callback);break;case"select":case"change":case"delete":case"upsert":case"*":const s=i.resolvePath(a);this.events[n][s[0]]||(this.events[n][s[0]]={"*":new r.ReallySmallEvents});const o=s.filter((e,t)=>t>0).join(".")||"*";this.events[n][s[0]][o]||(this.events[n][s[0]][o]=new r.ReallySmallEvents),this.events[n][s[0]][o].off(t.res.action,t.res.callback);break;default:new Promise((t,s)=>{this.doFilter(n,"customEvent",{res:{nameSpace:"",path:"*"},selectedTable:a,action:e,on:!0},t,s)}).then(s=>{if(!s.res.nameSpace)throw new Error(`Invalid event "${e}"!`);this.events[n][s.res.nameSpace]||(this.events[n][s.res.nameSpace]={"*":new r.ReallySmallEvents}),this.events[n][s.res.nameSpace][s.res.path]||(this.events[n][s.res.nameSpace][s.res.path]=new r.ReallySmallEvents),this.events[n][s.res.nameSpace][s.res.path].off(t.res.action,t.res.callback),this._refreshEventChecker()})}this._refreshEventChecker()},i.noop)}_refreshEventChecker(){return this.dbs[this.selectedDB]?(this.getDB().state.hasAnyEvents=Object.keys(this.events[this.selectedDB]).reduce((e,t)=>{if(!0===e)return!0;return Object.keys(this.events[this.selectedDB][t]).reduce((e,s)=>Object.keys(this.events[this.selectedDB][t][s].eventListeners).length+e,0)>0||e},!1),this):this}getView(e,t){return this._doAV("v",this.selectedTable,e,t)}doAction(e,t){return this._doAV("a",this.selectedTable,e,t)}_doAV(e,t,s,r){return"string"!=typeof this.selectedTable?Promise.reject("Can't do Action/View with selected table!"):new Promise((i,a)=>{this.doFilter(this.selectedDB,"actionView",{res:{AVType:e,table:t,AVName:s,AVArgs:r}},i,a)}).then(e=>{const t="a"===e.res.AVType?"actions":"views",s=this.getDB()._tables[e.res.table][t].reduce((t,s)=>s.name===e.res.AVName?s:t,null);return s?s.call(s.args?i.cleanArgs(this.selectedDB,s.args,e.res.AVArgs,this):{},this):new Promise((t,s)=>s(`${e.res.AVType} "${e.res.AVName}" Not Found!`))})}query(e,t){if(this.selectedDB&&"string"==typeof this.selectTable){const s=this.getDB().state.activeAV;return this.getDB().state.activeAV="",new h._nanoSQLQueryBuilder(this.selectedDB,this,this.selectedTable,e,t,s)}return new h._nanoSQLQueryBuilder(this.selectedDB,this,this.selectedTable,e,t,"")}triggerQuery(e,t,s,r,i){const a=t=>{new o._nanoSQLQuery(e,this,t.res,e=>{s(e)},r,i)};if("string"==typeof t.table){if(!this.getDB(e).state.connected)return void i("nSQL: Can't do a query before the database is connected!");this.doFilter(e,"query",{res:t},a,i)}else a({res:t})}triggerEvent(e,t,s){return e&&this.events[e]?(this.doFilter(e,"event",{res:t},t=>{this.getDB(e).state.hasAnyEvents&&i.setFast(()=>{t.res.events.forEach(r=>{if(s||Object.keys(this.events[e]["*"]).forEach(s=>{this.events[e]["*"][s].trigger(r,t.res)}),this.events[e][t.res.target])if("_all_"===t.res.path)Object.keys(this.events[e][t.res.target]).forEach(s=>{this.events[e][t.res.target][s].trigger(r,t.res)});else{if(!this.events[e][t.res.target][t.res.path])return;this.events[e][t.res.target][t.res.path].trigger(r,t.res)}})})},e=>{console.log("Event suppressed",e)}),this):this}saveCount(e,t,s){if(0===t.indexOf("_"))return void(s&&s());const r=(e,t,s,r)=>{const a=e.getDB(t)._tables[s].count,n=e.getDB(t)._tables[s].id;e.triggerQuery(t,Object.assign({},i.buildQuery(t,e,"_util","upsert"),{actionArgs:{key:"total_"+n,value:a}}),i.noop,()=>{r&&r()},e=>{r&&r(e),console.error("nSQL: Error updating table total.",e)})};s?r(this,e,t,s):(this._countTimers[e+t]||(this._countTimers[e+t]=l.throttle(void 0,r,1e3)),this._countTimers[e+t](this,e,t))}default(e,t,s){if(!e)return t;if(t=t||{},!s&&"string"!=typeof this.selectedTable)throw new Error("Must select table to generate defualts!");if(s=s||this.selectedTable,!this.getDB(e)._tables[s])throw new Error(`nSQL: Table "${s}" not found in database ${e} for generating default object!`);let r="";const a=(s,n,o)=>{let h={};if(n=n||{},o&&o.length&&-1!==o.indexOf("[]"))return Array.isArray(n)?n.map(e=>a(s,e,o.slice(0,o.lastIndexOf("[]")))):[];let l=!1;if(s.forEach(s=>{if("*"!==s.key){if(s.model)if(-1!==s.type.indexOf("[]")){const e=void 0!==n?n[s.key]:[];Array.isArray(e)?h[s.key]=e.map(e=>a(s.model,e,s.type.slice(0,s.type.lastIndexOf("[]")))):h[s.key]=[]}else h[s.key]=a(s.model,void 0!==n?n[s.key]:void 0);else{let a=void 0!==n[s.key]?i.cast(e,s.type,n[s.key],!1,this):"function"==typeof s.default?s.default(t):s.default;void 0!==s.max&&a>s.max&&(r=`Data error, column ${s.key} can't be greater than ${s.max}!`),void 0!==s.min&&a<s.min&&(r=`Data error, column ${s.key} can't be less than ${s.min}!`),h[s.key]=a}!s.notNull||null!==h[s.key]&&void 0!==h[s.key]||(r=`Data error, ${s.key} cannot be null!`),null===h[s.key]&&(h[s.key]=void 0)}else l=!0}),r.length)throw new Error(r);if(l&&n){const e=s.map(e=>e.key);Object.keys(n).filter(t=>-1===e.indexOf(t)).forEach(e=>{h[e]=n[e]})}return h};return a(this.getDB(e)._tables[s].columns,t)}rawDump(e,t,s){const r=t?e:Object.keys(this.getDB()._tables).filter(t=>!e.length||-1!==e.indexOf(t));return i.chainAsync(r,(e,r,a,n)=>{if(t){const t=-1!==e.indexOf(":")?e.split(":")[0]:e,r=-1!==e.indexOf(":")?[e.split(":")[1]]:Object.keys(this.getDB()._tables[e].indexes);i.chainAsync(r,(e,r,a,n)=>{i.adapterFilters(this.selectedDB,this).readIndexKeys(t,e,"all",void 0,void 0,!1,(r,i)=>{s(t+"."+e,{indexId:i,rowId:r})},a,n)}).then(a).catch(n)}else i.adapterFilters(this.selectedDB,this).readMulti(e,"all",void 0,void 0,!1,t=>{s(e,t)},a,n||i.noop)})}rawImport(e,t,s){let r=0;const a=Object.keys(e).reduce((t,s)=>t+=e[s].length,0),n=this.selectedDB,o=Object.keys(this.getDB()._tables),h=t?Object.keys(e):Object.keys(e).filter(e=>-1!==o.indexOf(e));return i.chainAsync(h,(o,h,l,d)=>{if(t){const t=o.split(".")[0],s=o.split(".")[1];i.chainAsync(e[o],(e,r,a,o)=>{i.adapterFilters(n,this).addIndexValue(t,s,e.rowId,e.indexId,a,o)}).then(l).catch(d)}else{const t=this.getDB()._tables[o].pkCol,h=this.getDB().adapter.batch;if(h){const t=this.getDB()._tableIds[o];h.apply(this.getDB().adapter,[t,e[o].map(e=>(r++,s&&s(Math.round(r/a*1e4)/100),{type:"put",data:e})),()=>{l()},d])}else console.warn("Batch import not using transaction, transactions not supported by adapter!"),i.chainAsync(e[o],(e,h,l,d)=>{i.deepGet(t,e)||!d?i.adapterFilters(n,this).write(o,i.deepGet(t,e),e,e=>{l(),r++,s&&s(Math.round(r/a*1e4)/100)},d||i.noop):d("No primary key found, can't import: "+JSON.stringify(e))}).then(()=>{this.saveCount(n,o),l()}).catch(d)}})}disconnect(e){return new Promise((t,s)=>{const r=e?[e]:Object.keys(this.dbs);i.chainAsync(r,(e,t,s,r)=>{this.doFilter(e,"disconnect",{},()=>{i.adapterFilters(e,this).disconnect(()=>{delete this.dbs[e],s()},r)},r)}).then(()=>{t()}).catch(s)})}extend(e,...t){return new Promise((s,r)=>{this.doFilter(this.selectedDB,"extend",{scope:e,args:t,res:null},s,r)})}loadJS(e,t,s){const r=this.selectedTable;if("string"!=typeof r)return Promise.reject("nSQL: Can't load JS into temporary table!");const a=e.length;let n=0;return(s?i.allAsync:i.chainAsync)(e,(e,s,o,h)=>{this.triggerQuery(this.selectedDB,Object.assign({},i.buildQuery(this.selectedDB,this,r,"upsert"),{actionArgs:e}),e=>{},()=>{n++,t&&t(n/a*1e4/100),o()},h)})}JSONtoCSV(e,t,s){let r=[];if(!e.length)return"";let i=[];return s?i=s:(e.forEach(e=>{i=Object.keys(e).concat(i)}),i=i.filter((e,t,s)=>s.indexOf(e)===t)),t&&r.push(i.map(e=>`"${e}"`).join(",")),e.forEach(e=>{r.push(i.map(t=>null===e[t]||void 0===e[t]?"":"string"==typeof e[t]?'"'+e[t].replace(/\"/g,'""')+'"':"boolean"==typeof e[t]?!0===e[t]?"true":"false":"object"==typeof e[t]?'"'+JSON.stringify(e[t]).replace(/\"/g,'""')+'"':e[t]).join(","))}),r.join("\n")}csvToArray(e){let t,s="",r=[""],i=[r],a=0,n=0,o=!0;for(t of e)'"'===t?(o&&t===s&&(r[a]+=t),o=!o):","===t&&o?t=r[++a]="":"\n"===t&&o?("\r"===s&&(r[a]=r[a].slice(0,-1)),r=i[++n]=[t=""],a=0):r[a]+=t,s=t;return i[0]}CSVtoJSON(e,t){let s=[];return e.split(/\r?\n|\r|\t/gim).map((e,r)=>{if(0!==r){if(String(e).trim().length<1)return;let r=this.csvToArray(e);if(!r)return;r=r.map(e=>e.trim());let i=s.length,a={};for(;i--;)if(r[i])if("true"===r[i]||"false"===r[i])a[s[i]]="true"===r[i];else if(0===r[i].indexOf("{")||0===r[i].indexOf("["))try{a[s[i]]=JSON.parse(r[i])}catch(e){a[s[i]]=r[i]}else 0===r[i].indexOf('"')?a[s[i]]=r[i].slice(1,r[i].length-1).replace(/\"\"/gim,'"'):a[s[i]]=r[i];return t?t(a):a}s=e.split(",").map(e=>e.substring(1,e.length-1))}).filter(e=>e)}loadCSV(e,t,s,r){const a=this.selectedTable;if("string"!=typeof a)return Promise.reject("nSQL: Can't load CSV into temporary table!");const n=this.CSVtoJSON(e,t),o=r?i.allAsync:i.chainAsync;let h=0;return o(n,(e,t,r,o)=>{this.triggerQuery(this.selectedDB,Object.assign({},i.buildQuery(this.selectedDB,this,a,"upsert"),{actionArgs:e}),i.noop,()=>{h++,s&&s(Math.round(h/n.length*1e4)/100),r()},o||i.noop)})}}t.nanoSQL=u,t.nSQLv1Config=e=>{let t={},s={},r="";const i=e=>((r=e||r)&&!t[r]&&(t[r]={name:r,model:{},indexes:{},actions:[],views:[]}),{model:s=>{let a={};return t[r].model=s.reduce((e,t)=>{const s=t.key+":"+t.type;return e[s]={},t.props&&(-1!==t.props.indexOf("pk")&&(e[s].pk=!0),-1!==t.props.indexOf("ai")&&(e[s].ai=!0),a&&-1!==t.props.indexOf("idx")&&(a[s]={})),e},{}),t[r].indexes=a,i(e)},actions:s=>(t[r].actions=s,i(e)),views:s=>(t[r].views=s,i(e)),config:t=>(s=t,i(e)),table:e=>i(e),rowFilter:s=>(t[r].filter=s,i(e))});return e(i),Object.assign({id:s.id||"nanoSQL_DB"},s,{tables:Object.keys(t).map(e=>t[e])})};let p=new u;t.nSQL=e=>p.selectTable(e),"undefined"!=typeof window&&(window["@nano-sql"]||(window["@nano-sql"]={}),window["@nano-sql"].core={nSQL:t.nSQL,nanoSQL:u,utilities:l,nSQLv1Config:t.nSQLv1Config},window["@nano-sql/core"]=window["@nano-sql"].core)},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(){this.eventListeners={}}return e.prototype.on=function(e,t){this.eventListeners[e]||(this.eventListeners[e]=[]),this.eventListeners[e].push(t)},e.prototype.off=function(e,t){var s=this;this.eventListeners[e]&&this.eventListeners[e].length&&this.eventListeners[e].forEach(function(r,i){r===t&&s.eventListeners[e].splice(i,1)})},e.prototype.trigger=function(e){for(var t=[],s=1;s<arguments.length;s++)t[s-1]=arguments[s];this.eventListeners[e]&&this.eventListeners[e].forEach(function(e){return e.apply(void 0,t)})},e}();t.ReallySmallEvents=s,t.RSE=new s},function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});const r=s(0),i=s(3),a={},n=(e,...t)=>t.map(t=>parseFloat(isNaN(t)?r.getFnValue(e,t):t));t.attachDefaultFns=e=>{e.functions={COUNT:{type:"A",aggregateStart:{result:0,row:{}},call:(e,t,s,i)=>(i&&"*"!==i?r.getFnValue(t,i)&&s.result++:s.result++,s.row=t,s)},MAX:{type:"A",aggregateStart:{result:void 0,row:{}},call:(e,t,s,i)=>{let a=r.getFnValue(t,i)||0;return void 0===s.result?(s.result=a,s.row=t):a>s.result&&(s.result=a,s.row=t),s}},MIN:{type:"A",aggregateStart:{result:void 0,row:{}},call:(e,t,s,i)=>{let a=r.getFnValue(t,i)||0;return void 0===s.result?(s.result=a,s.row=t):a<s.result&&(s.result=a,s.row=t),s}},GREATEST:{type:"S",call:(e,t,s,...i)=>{return{result:i.map(e=>isNaN(e)?r.getFnValue(t,e):parseFloat(e)).sort((e,t)=>e<t?1:-1)[0]}}},LEAST:{type:"S",call:(e,t,s,...i)=>{return{result:i.map(e=>isNaN(e)?r.getFnValue(t,e):parseFloat(e)).sort((e,t)=>e>t?1:-1)[0]}}},AVG:{type:"A",aggregateStart:{result:0,row:{},total:0,records:0},call:(e,t,s,i)=>{const a=parseFloat(r.getFnValue(t,i)||0)||0;return s.total+=isNaN(a)?0:a,s.records++,s.result=s.total/s.records,s.row=t,s}},SUM:{type:"A",aggregateStart:{result:0,row:{}},call:(e,t,s,i)=>{const a=parseFloat(r.getFnValue(t,i)||0)||0;return s.result+=isNaN(a)?0:a,s.row=t,s}},ADD:{type:"S",call:(e,t,s,...r)=>({result:n(t,r).reduce((e,t,s)=>0===s?t:e+t)})},SUB:{type:"S",call:(e,t,s,...r)=>({result:n(t,r).reduce((e,t,s)=>0===s?t:e-t)})},DIV:{type:"S",call:(e,t,s,r,...i)=>({result:n(t,i).reduce((e,t,s)=>0===s?t:e/t)})},MULT:{type:"S",call:(e,t,s,...r)=>({result:n(t,r).reduce((e,t,s)=>0===s?t:e*t)})},MOD:{type:"S",call:(e,t,s,r,i)=>{const[a,o]=n(t,r,i);return{result:a%o}}},PI:{type:"S",call:(e,t,s)=>({result:Math.PI})},TRUNCATE:{type:"S",call:(e,t,s,r,i)=>{const[a,o]=n(t,r,i);return{result:parseFloat(a.toFixed(o))}}},LOWER:{type:"S",call:(e,t,s,i)=>({result:String(r.getFnValue(t,i)).toLowerCase()})},TRIM:{type:"S",call:(e,t,s,i)=>({result:String(r.getFnValue(t,i)).trim()})},FORMAT_NUMBER:{type:"S",call:(e,t,s,r,i)=>{const[a,o]=n(t,r,i||2);return{result:a.toFixed(o).toLocaleString()}}},UPPER:{type:"S",call:(e,t,s,i)=>({result:String(r.getFnValue(t,i)).toUpperCase()})},CAST:{type:"S",call:(e,t,s,i,a)=>({result:r.cast(e.databaseID,r.getFnValue(t,a),r.getFnValue(t,i),!1,e.parent)})},CONCAT:{type:"S",call:(e,t,s,...i)=>({result:i.map(e=>r.getFnValue(t,e)).join("")})},CONCAT_WS:{type:"S",call:(e,t,s,i,...a)=>({result:a.map(e=>r.getFnValue(t,e)).join(r.getFnValue(t,i))})},REPLACE:{type:"S",call:(e,t,s,i,a,n)=>{const o=String(r.getFnValue(t,i)),h=String(r.getFnValue(t,a)),l=String(r.getFnValue(t,n));return{result:o.replace(h,l)}}},STRCMP:{type:"S",call:(e,t,s,i,a)=>{const n=String(r.getFnValue(t,i)),o=String(r.getFnValue(t,a));return n<o?{result:-1}:n>o?{result:1}:{result:0}}},LEVENSHTEIN:{type:"S",call:(e,t,s,n,o)=>{const h=r.getFnValue(t,n),l=r.getFnValue(t,o),d=h+"::"+l;return a[d]||(a[d]=i(h,l)),{result:a[d]}}},IF:{type:"S",call:(e,t,s,i,a,n)=>{const o=i.split(/<|=|>|<=|>=/gim).map(e=>isNaN(e)?r.getFnValue(t,e):parseFloat(e)),h=i.match(/<|=|>|<=|>=/gim)[0];if(!h)return{result:r.getFnValue(t,n)};switch(h){case"=":return o[0]==o[1]?r.getFnValue(t,a):r.getFnValue(t,n);case">":return o[0]>o[1]?r.getFnValue(t,a):r.getFnValue(t,n);case"<":return o[0]<o[1]?r.getFnValue(t,a):r.getFnValue(t,n);case"<=":return o[0]<=o[1]?r.getFnValue(t,a):r.getFnValue(t,n);case">=":return o[0]<o[1]?r.getFnValue(t,a):r.getFnValue(t,n);default:return{result:r.getFnValue(t,n)}}}},CROW:{type:"S",call:(t,s,i,a,n,o)=>{const h=r.getFnValue(s,a+".lat"),l=r.getFnValue(s,a+".lon");return{result:r.crowDistance(h,l,parseFloat(n),parseFloat(o),e.planetRadius)}},checkIndex:(t,s,i)=>{if("<"===i[1]||"<="===i[1]){const a="string"==typeof t.table?e.getDB(t.databaseID)._tables[t.table].indexes:{},n=r.resolvePath(s[0]);let o=[];if(Object.keys(a).forEach(e=>{const t=a[e];"float"===t.type&&r.objectsEqual(t.path.slice(0,t.path.length-1),n)&&o.push(e.replace(".lat","").replace(".lon",""))}),2===o.length)return{index:o[0],parsedFn:{name:"CROW",args:s},comp:i[1],value:i[2]}}return!1},queryIndex:(t,s,i,a,n,o)=>{const h=t.table,l=`${s.index}.lat`,d=`${s.index}.lon`,c=s.comp,u=parseFloat(s.value||"0"),p=parseFloat(s.parsedFn?s.parsedFn.args[1]:"0"),y=parseFloat(s.parsedFn?s.parsedFn.args[2]:"0"),g=u/(2*e.planetRadius*Math.PI)*360;let b=[-1,1].map(e=>p+g*e),f=[],_=[],m=!1;const D=Math.max(90-g,0);if(Math.abs(b[0])>D||Math.abs(b[1])>D)m=!0,b[0]<-1*D&&(b=[-90,b[1]]),b[1]>D&&(b=[b[0],90]);else{const e=Math.max(Math.abs(b[0]),Math.abs(b[1]));if(f=[-1,1].map(t=>{return y+g*t/Math.cos(r.deg2rad(e))}),Math.abs(f[0])>180){const e=Math.abs(f[0])-180;_=[180-e,180]}if(Math.abs(f[1])>180){const e=Math.abs(f[1])-180;_=[-180,-180+e]}}let I={};r.allAsync([l,d,d],(s,i,a,n)=>{const o=[b,f,_][i];o.length?r.adapterFilters(t.databaseID,e,t).readIndexKeys(h,s,"range",o[0],o[1],!1,(e,t)=>{I[e]?I[e].num++:I[e]={key:e,lat:0,lon:0,num:0},0===i?I[e].lat=t-90:I[e].lon=t-180},()=>{a(null)},n):a(null)}).then(()=>{let h=0;const l=(m?Object.keys(I):Object.keys(I).filter(t=>{if(I[t].num<1)return!1;const s=r.crowDistance(I[t].lat,I[t].lon,p,y,e.planetRadius);return"<"===c?s<u:s<=u})).map(e=>I[e]);m||!i?r.allAsync(l,(n,o,l,d)=>{r.adapterFilters(t.databaseID,t.parent,t).read(t.table,n.key,n=>{if(!n)return void l(null);if(!m)return a(n,o),void l(null);const d=r.deepGet((s.parsedFn?s.parsedFn.args[0]:"")+".lat",n),g=r.deepGet((s.parsedFn?s.parsedFn.args[0]:"")+".lon",n),b=r.crowDistance(d,g,p,y,e.planetRadius);("<"===c?b<u:b<=u)&&(a(i?r.deepGet(e.getDB(t.databaseID)._tables[t.table].pkCol,n):n,h),h++),l(null)},d)}).catch(o).then(()=>{n()}):l.forEach((e,t)=>{a(e.key,t)})}).catch(o)}}},(Object.getOwnPropertyNames?Object.getOwnPropertyNames(Math):["abs","acos","asin","atan","atan2","ceil","cos","exp","floor","log","pow","random","round","sin","sqrt","tan"]).filter(e=>-1===["min","max"].indexOf(e)).forEach(t=>{e.functions[t.toUpperCase()]={type:"S",call:(e,s,r,...i)=>({result:Math[t].apply(null,n(s,...i))})}})}},function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});const r=s(1),i=s(0),a=s(5);t.secondaryIndexQueue={};const n={};class o{constructor(e,t,s,r,a,n){this.databaseID=e,this.nSQL=t,this.query=s,this.progress=r,this.complete=a,this.error=n,this._queryBuffer=[],this._stream=!0,this._selectArgs=[],this._pkOrderBy=!1,this._idxOrderBy=!1,this._sortGroups=[],this._sortGroupKeys={},this._indexLocks={},this.query.state="processing",this._indexesUsed=[],this._startTime=Date.now();const o=s.action.toLowerCase().trim();if(this._orderByRows=this._orderByRows.bind(this),this._onError=this._onError.bind(this),-1===["select","clone","create table","create table if not exists","show tables"].indexOf(o)&&"string"!=typeof s.table)return this.query.state="error",void this.error('Only "select", "clone" & "create table" queries are available for this resource!');if(!("string"!=typeof s.table||this.databaseID&&this.nSQL.getDB(this.databaseID).state.connected))return this.query.state="error",void this.error("Can't execute query before the database has connected!");const h=(e,t)=>"string"==typeof this.query.table&&this.query.table?e&&!this.query.actionArgs?(this.query.state="error",void this.error(`${this.query.action} query requires an additional argument!`)):void t():(this.query.state="error",void this.error(`${this.query.action} query requires a table argument!`)),l=()=>{"error"!==this.query.state&&(this.query.state="complete",this.complete())};switch(this.query.cacheID||(this.query.cacheID=this.query.queryID),o){case"select":this._select(l,this.error);break;case"total":h(!1,()=>{const e=this.query.actionArgs;if(e&&e.rebuild)try{i.adapterFilters(this.databaseID,this.nSQL,this.query).getTableIndexLength(this.query.table,e=>{this.nSQL.getDB(this.databaseID)._tables[this.query.table].count=e,this.nSQL.saveCount(this.databaseID||"",this.query.table,t=>{t?this.error(t):(this.progress({total:e},0),this.complete())})},this.error)}catch(e){this.error(e)}else try{const e=this.nSQL.getDB(this.databaseID)._tables[this.query.table].count;this.progress({total:e},0),this.complete()}catch(e){this.error(e)}});break;case"upsert":h(!0,()=>{this._upsert(this.progress,this.complete,this.error)});break;case"delete":h(!1,()=>{this._delete(this.progress,this.complete,this.error)});break;case"show tables":this._showTables();break;case"describe":this._describe();break;case"describe indexes":this._describe("idx");break;case"drop":case"drop table":this._dropTable(this.query.table,l,this.error);break;case"create table":case"create table if not exists":this._createTable(this.query.actionArgs,!1,r,l,this.error);break;case"alter table":h(!0,()=>{this._createTable(this.query.actionArgs,!0,r,l,this.error)});break;case"rebuild indexes":h(!1,()=>{this._rebuildIndexes(this.progress,l,this.error)});break;case"conform rows":h(!1,()=>{this._conform(this.progress,l,this.error)});break;case"clone":h(!0,()=>{this._clone(this.progress,l,this.error)});break;default:this.nSQL.doFilter(this.databaseID,"customQuery",{res:void 0,query:this.query,onRow:r,complete:a,error:n},()=>{this.query.state="error",this.error(`Query type "${s.action}" not supported!`)},e=>{this.query.state="error",this.error(e)})}}_clone(e,t,s){const r=this.query.actionArgs&&this.query.actionArgs.mode,n=this.query.actionArgs&&this.query.actionArgs.getAdapter,o=this.query.actionArgs&&this.query.actionArgs.id||this.query.parent.getDB(this.databaseID).state.id;if(!o||!r)return void s("Id & Mode required for clone query!");const h=a.resolveMode(r),l="*"!==this.query.table?[this.query.table]:Object.keys(this.nSQL.getDB(this.databaseID)._tables);let d={};h.connect(o,()=>{i.chainAsync(l,(t,r,a,n)=>{const o=this.query.parent.getDB(this.databaseID)._tables[t];o?h.createTable(this.query.parent.getDB(this.databaseID)._tableIds[o.name],o,()=>{d[o.name]=this.query.parent.getDB(this.databaseID)._tableIds[o.name],i.allAsync(Object.keys(o.indexes),(e,t,s,r)=>{const i=o.indexes[e];h.createIndex(this.query.parent.getDB(this.databaseID)._tableIds[o.name],e,i.type,s,r)}).then(()=>{const t=new i._nanoSQLQueue((t,s,r,a)=>{e({target:o.name,targetId:this.query.parent.getDB(this.databaseID)._tableIds[o.name],object:t},s),s++,h.write(this.query.parent.getDB(this.databaseID)._tableIds[o.name],i.deepGet(o.pkCol,t),t,r,a)},s,()=>{i.chainAsync(Object.keys(o.indexes),(t,s,r,a)=>{o.indexes[t];i.adapterFilters(this.databaseID,this.query.parent,this.query).readIndexKeys(o.name,t,"all",void 0,void 0,!1,(r,n)=>{e({target:this.query.parent.getDB(this.databaseID)._tableIds[o.name]+"."+t,targetId:o.name+"."+t,object:{key:n,rowId:r}},s),s++,h.addIndexValue(this.query.parent.getDB(this.databaseID)._tableIds[o.name],t,r,n,i.noop,a)},r,a)}).then(()=>{a()}).catch(s)});i.adapterFilters(this.databaseID,this.query.parent,this.query).readMulti(o.name,"all",void 0,void 0,!1,(e,s)=>{t.newItem(e)},()=>{t.finished()},s)}).catch(s)},s):n(`Table ${o} not found!`)}).then(()=>{h.createTable("_util",Object.assign({},i.blankTableDefinition,{name:"_util",model:{"key:string":{pk:!0},"value:any":{}}}),()=>{h.read("_util","tableIds",e=>{const r=Object.assign({},e&&e.value||{},d);h.write("_util","taleIds",{key:"tableIds",value:r},()=>{n?(n(h),t()):h.disconnect(()=>{t()},s)},s)},s)},s)}).catch(s)},s)}_conform(e,t,s){const a=this.query.table,n=this.query.actionArgs||function(e){return e};if(this._whereArgs=this.query.where?this._parseWhere(this.query.where,"string"!=typeof this.query.table||void 0!==this.query.union):{type:r.IWhereType.none},!this.databaseID||!this.nSQL.getDB(this.databaseID)._tables[a])return void s(new Error(`Table ${a} not found for conforming!`));const o=new i._nanoSQLQueue((t,r,n,o)=>{const h=this.nSQL.default(this.databaseID||"",t,a);this.nSQL.doFilter(this.databaseID,"conformRow",{res:h,oldRow:t,query:this.query},s=>{this._diffUpdates(this.query.table,t,s.res,()=>{const o={target:a,path:"*",events:["upsert","change","*"],time:Date.now(),performance:Date.now()-this._startTime,result:s.res,oldRow:t,query:this.query,indexes:this._indexesUsed};this.nSQL.getDB(this.databaseID).state.hasAnyEvents&&(this.nSQL.triggerEvent(this.databaseID||"",o),Object.keys(this.nSQL.events[this.databaseID||""][this.query.table]).forEach(e=>{"*"!==e&&(i.objectsEqual(i.deepGet(e,t),i.deepGet(e,s.res))||this.nSQL.triggerEvent(this.databaseID||"",{target:this.query.table,path:e,events:["upsert","change","*"],time:Date.now(),performance:Date.now()-this._startTime,result:s.res,oldRow:t,query:this.query,indexes:this._indexesUsed},!0))})),this._startTime=Date.now(),e(this.query.returnEvent?o:s.res,r),0,n()},o)},s)},s,()=>{t()});this._getRecords((e,t)=>{o.newItem(n(e))},()=>{o.finished()},s)}_getTable(e,t,s,r){const i=this.query.cacheID;if("function"==typeof s){if(n[i]||(n[i]={}),!n[i][e])return n[i][e]={loading:!0,rows:[],cache:!0},void s(t).then(t=>{const s=t.cache&&!t.filtered||!1;n[i][e]={loading:!1,rows:s?t.rows:[],cache:s},r(t)}).catch(this._onError);if(n[i][e].loading)return void setTimeout(()=>{this._getTable(e,t,s,r)},10);if(n[i][e].cache)return void r({filtered:!1,rows:n[i][e].rows,cache:!0});s(t).then(e=>{r(e)}).catch(this._onError)}else r({rows:s,filtered:!1,cache:!1})}_maybeJoin(e,t,s,r){if(!e[0])return s(t),void r();const a=(t,r,n)=>{const o=e[r];let h=0,l=[];if("cross"!==o.type&&!o.on)return this.query.state="error",void this.error(new Error("Non 'cross' joins require an 'on' parameter!"));const d=new Error("Must use 'AS' when joining temporary tables!");if("string"!=typeof o.with.table&&!o.with.as)return this.query.state="error",void this.error(d);if("string"!=typeof this.query.table&&!this.query.tableAS)return this.query.state="error",void this.error(d);const c=new i._nanoSQLQueue((t,i,n,o)=>{e[r+1]?a(t,r+1,n):(s(t),n())},this.error,n),u="string"==typeof o.with.table?this.nSQL.getDB(this.databaseID)._tables[o.with.table].pkCol:[],p=String(o.with.as||o.with.table),y=String(this.query.tableAS||this.query.table);this.nSQL.triggerQuery(this.databaseID,Object.assign({},i.buildQuery(this.databaseID,this.nSQL,o.with.table,"select"),{tableAS:o.with.as,cacheID:this.query.cacheID,where:o.on&&"cross"!==o.type?this._buildCombineWhereJoin(o.on,o.with.as||o.with.table,t):void 0}),e=>{h++,"right"!==o.type&&"outer"!==o.type||l.push(u?i.deepGet(u,e):i.hash(JSON.stringify(e))),c.newItem(Object.assign({},t,{[p]:e}))},()=>{switch(o.type){case"left":0===h&&c.newItem(Object.assign({},t,{[p]:void 0})),c.finished();break;case"inner":case"cross":c.finished();break;case"outer":case"right":0===h&&"outer"===o.type&&c.newItem(Object.assign({},t,{[p]:void 0})),this.nSQL.triggerQuery(this.databaseID,Object.assign({},i.buildQuery(this.databaseID,this.nSQL,o.with.table,"select"),{cacheID:this.query.cacheID,where:u?[u,"NOT IN",l]:void 0}),e=>{(u||-1===l.indexOf(i.hash(JSON.stringify(e))))&&c.newItem(Object.assign({},t,{[y]:void 0,[p]:e}))},()=>{c.finished()},e=>{this.query.state="error",this.error(e)})}},e=>{this.query.state="error",this.error(e)})};a({[String(this.query.tableAS||this.query.table)]:t},0,r)}_select(e,t){if(this._whereArgs=this.query.where?this._parseWhere(this.query.where,"string"!=typeof this.query.table||void 0!==this.query.union):{type:r.IWhereType.none},this._havingArgs=this.query.having?this._parseWhere(this.query.having,!0):{type:r.IWhereType.none},this._parseSelect(),"error"===this.query.state)return;const s=[this.query.offset||0,(this.query.offset||0)+(this.query.limit||0)],a=s[0]+s[1]>0;let o={};const h=e=>(this.query.distinct||[]).reduce((t,s)=>t+JSON.stringify(i.deepGet(s,e)||{}),"");if(this.query.union){let t=[],r=[],l=0;return void i.chainAsync(this.query.union.queries,(e,n,d)=>{e().then(e=>{r.length||(r=Object.keys(e[0])),this.query.where&&(e=e.filter((e,t)=>this._where(e,this._whereArgs.slowWhere))),e=e.map(e=>{if(this.query.union&&"distinct"===this.query.union.type){const s=i.hash(JSON.stringify(e));if(0===n)t.push(s);else{if(-1!==t.indexOf(s))return;t.push(s)}}return Object.keys(e).reduce((t,s,i)=>(i<r.length&&(t[r[i]]=e[s]),t),{})}).filter(e=>e),this.query.orderBy?this._queryBuffer=this._queryBuffer.concat(e.map(e=>{let t=!0;if(this.query.distinct){const s=h(e);o[s]?t=!1:o[s]=!0}const s=this._streamAS(e);return(!this.query.having||this._where(s,this._havingArgs.slowWhere))&&t?s:void 0}).filter(e=>e)):e.forEach((e,t)=>{let r=!0;if(this.query.distinct){const t=h(e);o[t]?r=!1:o[t]=!0}if(!r)return;const i=this._streamAS(e);(!this.query.having||this._where(i,this._havingArgs.slowWhere))&&(a&&!this._didRangeAlready?l>=s[0]&&l<s[1]&&this.progress(i,l):this.progress(i,l),l++)}),d()})}).then(()=>{if(this.query.orderBy){const e=this.quickSort(this._queryBuffer,this._orderBy);(a&&!this._didRangeAlready?e.slice(s[0],s[1]):e).forEach(this.progress)}this.query.cacheID&&this.query.cacheID===this.query.queryID&&delete n[this.query.cacheID],e()})}const l=Array.isArray(this.query.join)?this.query.join:[this.query.join];let d=0;const c=new i._nanoSQLQueue((e,t,s,r)=>{if(this.query.graph)this._graph(this.query.graph||[],this.query.tableAS||this.query.table,e,u,(t,r)=>{let i=!0;if(this.query.distinct){const e=h(t);o[e]?i=!1:o[e]=!0}if(!i)return d++,void s();const a=this._streamAS(t);this.query.having?this._where(this._streamAS(e),this._havingArgs.slowWhere)&&this.progress(a,d):this.progress(a,d),d++,s()});else{let t=!0;if(this.query.distinct){const s=h(e);o[s]?t=!1:o[s]=!0}if(!t)return d++,void s();this.progress(this._streamAS(e),d),d++,s()}},this._onError,()=>{this.query.cacheID&&this.query.cacheID===this.query.queryID&&delete n[this.query.cacheID],e()});let u=0;const p=new i._nanoSQLQueue((e,t,r,i)=>{this._maybeJoin(l,e,e=>{this._stream?((!a||this._didRangeAlready||u>=s[0]&&u<s[1])&&c.newItem(e),u++):this._queryBuffer.push(e)},r)},this.error,()=>{this._stream?c.finished():i.allAsync(this._queryBuffer,(e,t,s)=>{this._graph(this.query.graph||[],this.query.tableAS||this.query.table,e,t,s)}).then(t=>{this._queryBuffer=t,this._groupByRows(),this.query.having&&(this._queryBuffer=this._queryBuffer.filter(e=>this._where(e,this._havingArgs.slowWhere))),this.query.orderBy&&!this._hasOrdered&&(this._orderBy.sort.length>1?this._queryBuffer=this.quickSort(this._queryBuffer,this._orderBy):this._queryBuffer.sort(this._orderByRows)),a&&!this._didRangeAlready&&(this._queryBuffer=this._queryBuffer.slice(s[0],s[1])),this._queryBuffer.forEach((e,t)=>{let s=!0;if(this.query.distinct){const t=h(e);o[t]?s=!1:o[t]=!0}s&&this.progress(this._streamAS(e,this._hasFn),t)}),this.query.cacheID&&this.query.cacheID===this.query.queryID&&delete n[this.query.cacheID],e()})}),y="string"==typeof this.query.table;let g=!(this.query.join||this.query.distinct||this.query.graph||this.query.actionArgs||this.query.having||this.query.groupBy);g&&this.query.orderBy&&(g=this._pkOrderBy),this._getRecords((e,t)=>{const r={target:this.query.table,path:"_all_",events:["select","*"],time:Date.now(),performance:Date.now()-this._startTime,result:e,query:this.query,indexes:this._indexesUsed};y&&this.nSQL.triggerEvent(this.databaseID,r),this._startTime=Date.now(),this.query.returnEvent?a?t>=s[0]&&t<s[1]&&this.progress(r,t):this.progress(r,t):g?a&&!this._didRangeAlready?t>=s[0]&&t<s[1]&&this.progress(e,t+s[0]):this.progress(e,t):p.newItem(e)},()=>{this.query.returnEvent||g?e():p.finished()},t)}_groupByRows(){if(!this.query.groupBy&&!this._hasAggrFn)return;if((this._groupBy?this._queryBuffer.sort((e,t)=>this._sortObj(e,t,this._groupBy)):this._queryBuffer).forEach((e,t)=>{const s=this._groupBy.sort.map(t=>String(t.fn?i.execFunction(this.query,t.fn,e,{result:void 0}).result:i.deepGet(t.path,e))).join(".");void 0===this._sortGroupKeys[s]&&(this._sortGroupKeys[s]=this._sortGroups.length);const r=this._sortGroupKeys[s];this._sortGroups[r]||this._sortGroups.push([]),this._sortGroups[r].push(e)}),this.query.orderBy&&(this._hasOrdered=!0,this._sortGroups=this._sortGroups.map(e=>e.sort((e,t)=>this._sortObj(e,t,this._orderBy)))),this._queryBuffer=[],this._hasAggrFn){const e=()=>this._selectArgs.reduce((e,t,s)=>{const r=t.value.split("(").shift();return t.isFn&&this.nSQL.functions[r]&&"A"===this.nSQL.functions[r].type&&(e[s]={idx:s,name:t.value,aggr:i.assign(this.nSQL.functions[r].aggregateStart)}),e},[]);if(this._sortGroups.forEach(t=>{const s=e(),r=s.filter(e=>e)[0];t.slice().reverse().forEach((e,t)=>{s.forEach((t,r)=>{t&&(s[r].aggr=i.execFunction(this.query,s[r].name,e,s[r].aggr))})}),this._queryBuffer.push(this._selectArgs.reduce((e,t,a)=>{const n=t.value;return e[t.as||n]=t.isFn&&s[a]?s[a].aggr.result:t.isFn?i.execFunction(this.query,t.value,s[r.idx].aggr.row,{result:void 0}).result:i.deepGet(t.value,s[r.idx].aggr.row)||null,e},{}))}),!this._queryBuffer.length){const t=e(),s=t.filter(e=>e)[0];this._queryBuffer.push(this._selectArgs.reduce((e,r,a)=>{const n=r.value;return e[r.as||n]=r.isFn&&t[a]?t[a].aggr.result:r.isFn?i.execFunction(this.query,r.value,t[s.idx].aggr.row,{result:void 0}).result:i.deepGet(r.value,t[s.idx].aggr.row)||null,e},{}))}}else this._sortGroups.forEach(e=>{this._queryBuffer.push(e.shift())})}_buildCombineWhereJoin(e,t,s){return"function"==typeof e?t=>e(t,s):("string"==typeof e[0]?[e]:e).map(e=>{if(Array.isArray(e[0]))return this._buildCombineWhereJoin(e,t,s);if("AND"===e||"OR"===e)return e;const r=i.resolvePath(e[0]),a=i.resolvePath(e[2]),n=r[0]!==t;return[n?a.slice(1).join("."):r.slice(1).join("."),n?-1!==e[1].indexOf(">")?e[1].replace(">","<"):e[1].replace("<",">"):e[1],i.deepGet(n?r:a,s)]})}_graph(e,t,s,r,a){const n=Array.isArray(e)?e:[e];n&&0!==n.length?i.allAsync(n,(e,r,a)=>{const n=new Error("Must use 'AS' when graphing temporary tables!");if("string"!=typeof e.with.table&&!e.with.as)return this.query.state="error",void this.error(n);if("string"!=typeof this.query.table&&!this.query.tableAS)return this.query.state="error",void this.error(n);s[e.key]=[];const o=this._buildCombineWhereJoin(e.on,e.with.as||e.with.table,{[t]:s});this._getTable(e.with.as||e.with.table,o,e.with.table,t=>{t.filtered?(t.rows.forEach(t=>{e.single?s[e.key]=t:s[e.key].push(t)}),a(null)):this.nSQL.triggerQuery(this.databaseID,Object.assign({},i.buildQuery(this.databaseID,this.nSQL,t.rows,"select"),{tableAS:e.with.as,actionArgs:e.select,where:o,limit:e.limit,offset:e.offset,orderBy:e.orderBy,groupBy:e.groupBy,graph:e.graph,cacheID:this.query.cacheID}),t=>{e.single?s[e.key]=t:s[e.key].push(t)},()=>{a(null)},this._onError)})}).then(()=>{a(s,r)}):a(s,r)}_upsert(e,t,s){if(this.query.actionArgs||(s("nSQL: Can't upsert without records!"),this.query.state="error"),-1!==this.query.table.indexOf(".")||-1!==this.query.table.indexOf("[")){const e=i.resolvePath(this.query.table);this.query.table=e.shift(),this.upsertPath=e}if(this._whereArgs=this.query.where?this._parseWhere(this.query.where):{type:r.IWhereType.none},"error"===this.query.state)return;let a=Array.isArray(this.query.actionArgs)?this.query.actionArgs:[this.query.actionArgs];const n=this.nSQL.getDB(this.databaseID)._tables[this.query.table];if(this._whereArgs.type===r.IWhereType.none)i.allAsync(a,(t,s,r,a)=>{const o=i.deepGet(n.pkCol,t);o?i.adapterFilters(this.databaseID,this.nSQL,this.query).read(this.query.table,o,i=>{i?this._updateRow(t,i,t=>{e(t,s),r(null)},a):this._newRow(t,t=>{e(t,s),r(null)},a)},a):this._newRow(t,t=>{e(t,s),r(null)},a)}).then(()=>{this.nSQL.saveCount(this.databaseID||"",this.query.table),t()}).catch(this._onError);else{if(a.length>1)return this.query.state="error",void s("Cannot upsert multiple records with where condition!");const r=new i._nanoSQLQueue((t,s,r,n)=>{const o=this.nSQL.getDB(this.query.databaseID)._tables[this.query.table].pkCol,h=i.deepGet(o,t),l=()=>{this.nSQL.getDB(this.query.databaseID)._tables[this.query.table].rowLocks[String(h)]?setTimeout(l,10):(this.nSQL.getDB(this.query.databaseID)._tables[this.query.table].rowLocks[String(h)]=!0,this._updateRow(a[0],t,t=>{delete this.nSQL.getDB(this.query.databaseID)._tables[this.query.table].rowLocks[String(h)],e(t,s),r()},n))};l()},s,()=>{t()});this._getRecords((e,t)=>{r.newItem(e)},()=>{r.finished()},s)}}_updateRow(e,t,s,r){this.nSQL.doFilter(this.databaseID,"updateRow",{res:e,row:t,query:this.query},e=>{let a=this.nSQL.default(this.databaseID,this.upsertPath?i.deepSet(this.upsertPath,i.maybeAssign(t),e.res):Object.assign({},t,e.res),this.query.table);const n=this.nSQL.getDB(this.databaseID)._tables[this.query.table].filter;n&&(a=n(a));const o=this.nSQL.getDB(this.databaseID)._tables[this.query.table].columns;let h=o.length;for(;h--;)o[h].immutable&&delete a[o[h].key];this.query.updateImmutable&&(a=Object.assign({},a,this.query.updateImmutable)),this._diffUpdates(this.query.table,t,a,()=>{const e={target:this.query.table,path:"*",events:["upsert","change","*"],time:Date.now(),performance:Date.now()-this._startTime,result:a,oldRow:t,query:this.query,indexes:this._indexesUsed};this.nSQL.doFilter(this.databaseID,"updateRowEvent",{res:e,query:this.query},e=>{"string"==typeof this.query.table&&(this.nSQL.triggerEvent(this.databaseID,e.res),this.nSQL.events[this.databaseID||""][this.query.table]&&Object.keys(this.nSQL.events[this.databaseID||""][this.query.table]).forEach(e=>{"*"!==e&&(i.objectsEqual(i.deepGet(e,t),i.deepGet(e,a))||this.nSQL.triggerEvent(this.databaseID,{target:this.query.table,path:e,events:["upsert","change","*"],time:Date.now(),performance:Date.now()-this._startTime,result:a,oldRow:t,query:this.query,indexes:this._indexesUsed},!0))}),this._startTime=Date.now()),s(this.query.returnEvent?e.res:a)},r)},r)},r)}_checkUniqueIndexes(e,t,s,r,a,n){i.allAsync(Object.keys(r),(a,n,o,h)=>{const l=this.nSQL.getDB(this.databaseID)._tables[this.query.table].indexes[a].props||{};if(l&&l.unique){let n=[];i.adapterFilters(this.databaseID,this.nSQL,this.query).readIndexKey(e,a,r[a],e=>{e!==t&&n.push(e)},()=>{n.length>0?h({error:"Unique Index Collision!",row:s,query:this.query}):o(null)},h)}else o(null)}).then(a).catch(n)}_diffUpdates(e,t,s,r,a){const n=this._getIndexValues(this.nSQL.getDB(this.databaseID)._tables[this.query.table].indexes,s),o=this._getIndexValues(this.nSQL.getDB(this.databaseID)._tables[this.query.table].indexes,t),h=this.nSQL.getDB(this.databaseID)._tables[e];this._checkUniqueIndexes(e,i.deepGet(h.pkCol,t),t,n,()=>{i.allAsync(Object.keys(o).concat(["__pk__"]),(t,r,a,l)=>{if("__pk__"===t)i.adapterFilters(this.databaseID,this.nSQL,this.query).write(e,i.deepGet(h.pkCol,s),s,e=>{i.deepSet(h.pkCol,s,e),a(null)},l);else{const e=this.query.table;if(!1===i.objectsEqual(n[t],o[t]))if(h.indexes[t].isArray){let r=n[t].filter((e,s,r)=>-1===o[t].indexOf(e)),d=o[t].filter((e,s,r)=>-1===n[t].indexOf(e));i.allAsync([r,d],(r,a,n)=>{r.length?i.allAsync(r,(r,n,o)=>{this._updateIndex(e,t,r,i.deepGet(h.pkCol,s),0===a,()=>{o(null)},l)}).then(n):n(null)}).then(a)}else i.chainAsync(["rm","add"],(r,a,d)=>{switch(r){case"add":this._updateIndex(e,t,n[t],i.deepGet(h.pkCol,s),!0,()=>{d(null)},l);break;case"rm":this._updateIndex(e,t,o[t],i.deepGet(h.pkCol,s),!1,()=>{d(null)},l)}}).then(a);else a(null)}}).then(r).catch(a)},a)}_updateIndex(e,t,s,r,a,n,o){const h=this.query.databaseID+e+t;if(this._indexLocks[h]||(this._indexLocks[h]={}),!s&&0!==s)return void n();if(0===String(s).length)return void n();const l={table:e,indexName:t,value:s,pk:r,addToIndex:a,done:n,err:o,query:this.query,nSQL:this.nSQL};this.nSQL.doFilter(this.databaseID,"updateIndex",{res:l,query:this.query},e=>{const t=e.res,s=()=>{if(this._indexLocks[h][String(t.value)])setTimeout(s,10);else{this._indexLocks[h][String(t.value)]=!0,(t.addToIndex?i.adapterFilters(this.databaseID,t.nSQL,t.query).addIndexValue:i.adapterFilters(this.databaseID,t.nSQL,t.query).deleteIndexValue)(t.table,t.indexName,t.pk,t.value,()=>{delete this._indexLocks[h][String(t.value)],t.done(),n()},e=>{delete this._indexLocks[h][String(t.value)],t.err(e),n()})}};s()},o)}_newRow(e,t,s){const r=this.nSQL.getDB(this.databaseID)._tables[this.query.table].filter;r&&(e=r(e)),this.nSQL.doFilter(this.databaseID,"addRow",{res:e,query:this.query},e=>{const r=this.nSQL.getDB(this.databaseID)._tables[this.query.table];e.res=this.nSQL.default(this.databaseID,i.maybeAssign(this.upsertPath?i.deepSet(this.upsertPath,{},e.res):e.res),this.query.table);const a=i.deepGet(r.pkCol,e.res),n=this._getIndexValues(this.nSQL.getDB(this.databaseID)._tables[this.query.table].indexes,e.res);this._checkUniqueIndexes(this.query.table,a,e.res,n,()=>{i.adapterFilters(this.databaseID,this.nSQL,this.query).write(this.query.table,a,e.res,o=>{i.deepSet(r.pkCol,e.res,o),i.allAsync(Object.keys(n),(e,t,s,o)=>{if(r.indexes[e].isArray){const t=n[e]||[];i.allAsync(t,(t,s,r)=>{this._updateIndex(this.query.table,e,t,a,!0,()=>{r(null)},o)}).then(()=>{s(null)}).catch(o)}else this._updateIndex(this.query.table,e,n[e],a,!0,()=>{s(null)},o)}).then(()=>{const r={target:this.query.table,path:"*",events:["upsert","change","*"],time:Date.now(),performance:Date.now()-this._startTime,result:e.res,oldRow:void 0,query:this.query,indexes:this._indexesUsed};this.nSQL.doFilter(this.databaseID,"addRowEvent",{res:r,query:this.query},s=>{"string"==typeof this.query.table&&this.nSQL.triggerEvent(this.databaseID,s.res),this._startTime=Date.now(),this.nSQL.getDB(this.databaseID)._tables[this.query.table].count++,t(this.query.returnEvent?s.res:e.res)},s)})},s)},s)},s)}_delete(e,t,s){if(this._whereArgs=this.query.where?this._parseWhere(this.query.where):{type:r.IWhereType.none},"error"===this.query.state)return;const a=this.nSQL.getDB(this.databaseID)._tables[this.query.table],n=new i._nanoSQLQueue((t,s,n,o)=>{new Promise((e,s)=>{const a=this.query.table;this.nSQL.getDB(this.databaseID)._fkRels[a]&&this.nSQL.getDB(this.databaseID)._fkRels[a].length?i.allAsync(this.nSQL.getDB(this.databaseID)._fkRels[a],(e,s,a,n)=>{const o=i.deepGet(e.selfPath,t),h=i.cast(this.databaseID,"any[]",e.selfIsArray?o:[o]);i.allAsync(h,(t,s,o,h)=>{switch(e.onDelete){case r.InanoSQLFKActions.RESTRICT:let s=0;i.adapterFilters(this.databaseID,this.nSQL,this.query).readIndexKey(e.childTable,e.childIndex,t,e=>{s++},()=>{s>0?h("Foreign key restraint error, can't delete!"):o()},n);break;case r.InanoSQLFKActions.CASCADE:let l=[];i.adapterFilters(this.databaseID,this.nSQL,this.query).readIndexKey(e.childTable,e.childIndex,t,e=>{l.push(e)},()=>{this.nSQL.triggerQuery(this.databaseID,Object.assign({},i.buildQuery(this.databaseID,this.nSQL,e.childTable,"delete"),{where:[e.childPath.join("."),e.childIsArray?"INCLUDES":"IN",l]}),i.noop,o,h)},n);break;case r.InanoSQLFKActions.SET_NULL:let d=[];i.adapterFilters(this.databaseID,this.nSQL,this.query).readIndexKey(e.childTable,e.childIndex,t,e=>{d.push(e)},()=>{this.nSQL.triggerQuery(this.databaseID,Object.assign({},i.buildQuery(this.databaseID,this.nSQL,e.childTable,"upsert"),{actionArgs:{[e.childPath.join(".")]:null},where:[e.childPath.join("."),e.childIsArray?"INCLUDES":"IN",l]}),i.noop,o,h)},n);break;default:a()}}).then(a).catch(n)}).then(e).catch(s):e()}).then(()=>{this._removeRowAndIndexes(a,t,t=>{e(t,s),this.nSQL.getDB(this.databaseID)._tables[a.name].count--,n()},o)}).catch(o)},s,()=>{t()});this._getRecords((e,t)=>{n.newItem(e)},()=>{this.nSQL.saveCount(this.databaseID||"",a.name),n.finished()},s)}_removeRowAndIndexes(e,t,s,r){const a=this._getIndexValues(e.indexes,t);this.nSQL.doFilter(this.databaseID,"deleteRow",{res:t,query:this.query},t=>{i.allAsync(Object.keys(a).concat(["__del__"]),(s,n,o)=>{if("__del__"===s)i.adapterFilters(this.databaseID,this.nSQL,this.query).delete(this.query.table,i.deepGet(e.pkCol,t.res),()=>{o(null)},e=>{this.query.state="error",r(e)});else if(e.indexes[s].isArray){const n=a[s]||[];i.allAsync(n,(a,n,o)=>{this._updateIndex(this.query.table,s,a,i.deepGet(e.pkCol,t.res),!1,()=>{o(null)},r)}).then(o)}else this._updateIndex(this.query.table,s,a[s],i.deepGet(e.pkCol,t.res),!1,()=>{o(null)},this._onError)}).then(()=>{const e={target:this.query.table,path:"_all_",events:["change","delete","*"],time:Date.now(),performance:Date.now()-this._startTime,result:t.res,query:this.query,indexes:this._indexesUsed};this.nSQL.doFilter(this.databaseID,"deleteRowEvent",{res:e,query:this.query},e=>{"string"==typeof this.query.table&&this.nSQL.triggerEvent(this.databaseID,e.res),this._startTime=Date.now(),s(this.query.returnEvent?e.res:t.res)},r)}).catch(r)},r)}_getIndexValues(e,t){return Object.keys(e).reduce((s,r)=>{const a=i.deepGet(e[r].path,t),n=e[r].isDate?"string":e[r].type;return s[r]=e[r].isArray?(Array.isArray(a)?a:[]).map(e=>this.nSQL.indexTypes[n](e)):this.nSQL.indexTypes[n](a),s},{})}_showTables(){Object.keys(this.nSQL.getDB(this.databaseID)._tables).forEach((e,t)=>{this.progress({table:e,id:this.nSQL.getDB(this.databaseID)._tableIds[e]},t)}),this.complete()}_describe(e="table"){if("string"!=typeof this.query.table)return this.query.state="error",void this.error({error:"Can't call describe on that!",query:this.query});if(!this.nSQL.getDB(this.databaseID)._tables[this.query.table])return this.query.state="error",void this.error({error:`Table ${this.query.table} not found!`,query:this.query});switch(e){case"table":this.nSQL.getDB(this.databaseID)._tables[this.query.table].columns.forEach((e,t)=>{this.progress(i.assign(e),t)});break;case"idx":Object.keys(this.nSQL.getDB(this.databaseID)._tables[this.query.table].indexes).forEach((e,t)=>{const s=this.nSQL.getDB(this.databaseID)._tables[this.query.table].indexes[e];this.progress(i.assign(s),t)})}this.complete()}_combineRows(e){return Object.keys(e).reduce((t,s)=>{const r=e[s];return r?(Object.keys(r).forEach(e=>{t[s+"."+e]=r[e]}),t):t},{})}_streamAS(e,t){const s=(this.query.distinct||[]).map(e=>({isFn:!1,value:e})),r=(this._selectArgs||[]).concat(s);if(r.length){let s={};return r.forEach(r=>{r.isFn?s[r.as||r.value]=t?e[r.as||r.value]:i.execFunction(this.query,r.value,e,{}).result:s[r.as||r.value]=i.deepGet(r.value,e)}),s}return this.query.join?this._combineRows(e):e}quickSort(e,t){if(e.length<2)return e;const s=e=>t.sort.reduce((t,s,r)=>{const a=s.fn?i.execFunction(this.query,s.fn,e,{result:void 0}).result:i.deepGet(s.path,e);return t.push({v:a,d:String(s.dir).toUpperCase()}),t},[]),r=(e,t)=>{let s=0,r=0;for(;r<e.length;)s||e[r].v===t[r].v||(s=(e[r].v>t[r].v?1:-1)*("DESC"===e[r].d?-1:1)),r++;return s},a=s(e[Math.floor(Math.random()*e.length)]);let n=[],o=[],h=[];for(let t of e){const e=r(s(t),a);e>0?h.push(t):e<0?n.push(t):o.push(t)}return this.quickSort(n,t).concat(o).concat(this.quickSort(h,t))}_orderByRows(e,t){return this._sortObj(e,t,this._orderBy)}_sortObj(e,t,s){return s.sort.reduce((s,r)=>{const a=r.fn?i.execFunction(this.query,r.fn,e,{result:void 0}).result:i.deepGet(r.path,e),n=r.fn?i.execFunction(this.query,r.fn,t,{result:void 0}).result:i.deepGet(r.path,t);return a===n?0:s||(a>n?1:-1)*("DESC"===r.dir?-1:1)},0)}_tableID(){return[0,1].map(()=>{let e=i.random16Bits().toString(16);for(;e.length<4;)e="0"+e;return e}).join("-")}_createTable(e,s,r,n,o){const h=this.nSQL.getDB(this.databaseID)._tableIds[e.name]||this._tableID();let l=this.query.table;s||-1===Object.keys(this.nSQL.getDB(this.databaseID)._tables).indexOf(e.name)||(s=!0,l=e.name),new Promise((t,s)=>{let r=!1;const i=e.name;e._internal||0!==i.indexOf("_")&&null===i.match(/\s/g)&&null===i.match(/[\(\)\]\[\.]/g)?(Object.keys(e.model).forEach(t=>{const i=t.replace(/\s+/g,"-").split(":");1===i.length&&i.push("any"),i[0]&&null===i[0].match(/[\(\)\]\[\.]/g)&&0!==i[0].indexOf("_")||(r=!0,s({error:`Invalid Data Model at ${e.name+"."+t}! https://docs.nanosql.io/setup/data-models`,query:this.query}))}),r||t()):s({error:`Invalid Table Name ${e.name}! https://docs.nanosql.io/setup/data-models`,query:this.query})}).then(()=>new Promise((t,s)=>{this.nSQL.doFilter(this.databaseID,"configTable",{res:e,query:this.query},t,s)})).then(e=>{const t=(e,s)=>{let r={};if("string"==typeof e){let t=!1;const i=-1!==e.indexOf("[]"),a=e.replace(/\[\]/gim,"");if(0===s&&i)throw new Error("Can't use array types as table definition.");if(r=Object.keys(this.nSQL.getDB(this.databaseID).config.types||{}).reduce((e,s)=>s===a[1]?(t=!0,(this.nSQL.getDB(this.databaseID).config.types||{})[s]):e,{}),!1===t){if(0===s)throw new Error(`Type ${e} not found!`);return}}else r=e;return Object.keys(e).reduce((r,i)=>{return 0===(i.split(":")[1]||"any").indexOf("geo")?r[i]={default:{lat:0,lon:0},model:{"lat:float":{max:90,min:-90},"lon:float":{max:180,min:-180}}}:e[i].model?r[i]=Object.assign({},e[i],{model:t(e[i].model,s+1)}):r[i]=e[i],r},{})},s=e=>Object.keys(e).filter(e=>"*"!==e).map(t=>({key:t.split(":")[0],type:t.split(":")[1]||"any",ai:e[t].ai,pk:e[t].pk,default:e[t].default,immutable:e[t].immutalbe||!1,notNull:e[t].notNull,max:e[t].max,min:e[t].min,model:e[t].model?s(e[t].model):void 0}));let r="";const n=t(e.res.model,0),o=e=>"string"==typeof e?"":Object.keys(e).reduce((t,s)=>e[s]&&e[s].pk?s.split(":")[1]:!t.length&&e[s].model?o(e[s].model):t,"");let l=e.res.indexes||{},d=!1;const c=(e,t)=>{if("string"==typeof t)return[];let s=!1;return Object.keys(t).reduce((r,i)=>t[i]&&t[i].pk?(s=!0,t[i].ai&&(d=!0),r.push(i.split(":")[0]),r):!s&&t[i].model?c(e.concat([i.split(":")[0]]),t[i].model):r,e)},u=e.res.primaryKey?e.res.primaryKey.split(":")[1]:o(e.res.model);let p={id:h,name:e.res.name,rowLocks:{},count:0,mode:e.res.mode?a.resolveMode(e.res.mode):void 0,model:n,columns:s(n),filter:e.res.filter,select:e.res.select,actions:e.res.actions||[],views:e.res.views||[],queries:(e.res.queries||[]).reduce((e,t)=>(e[t.name]=t,e),{}),indexes:Object.keys(l).map(e=>{const t=(e.split(":")[1]||"string").replace(/\[\]/gim,"");return{id:i.resolvePath(e.split(":")[0]).join("."),type:"date"===t?"int":t,isArray:-1!==(e.split(":")[1]||"string").indexOf("[]"),path:i.resolvePath(e.split(":")[0]),props:l[e],isDate:"date"===t}}).reduce((e,t)=>{return-1===Object.keys(this.nSQL.indexTypes).indexOf(t.type)?(r=`Index "${t.id}" does not have a valid type!`,e):(-1!==t.type.indexOf("geo")?(e[t.id+".lon"]={id:t.id+".lon",type:"float",isArray:!1,path:t.path.concat(["lon"]),props:{offset:180},isDate:!1},e[t.id+".lat"]={id:t.id+".lat",type:"float",isArray:!1,path:t.path.concat(["lat"]),props:{offset:90},isDate:!1}):e[t.id]=t,e)},{}),pkType:u,pkCol:e.res.primaryKey?i.resolvePath(e.res.primaryKey.split(":")[0]):c([],e.res.model),isPkNum:-1!==["number","int","float","date"].indexOf(u),ai:d};return 0===p.pkCol.length&&(p.pkCol=["_id"],p.pkType="uuid",p.model["_id:uuid"]={pk:!0},p.columns=s(t(p.model,0))),r&&r.length?Promise.reject(r):new Promise((e,t)=>{this.nSQL.doFilter(this.databaseID,"configTableSystem",{res:p,query:this.query},t=>{e(t.res)},t)})}).then(e=>{const t=this.nSQL.getDB(this.databaseID)._tables[this.query.table]&&this.nSQL.getDB(this.databaseID)._tables[this.query.table].mode;return e.mode||t?new Promise((r,i)=>{if(s&&e.mode===t)r(e);else{const s=()=>{e.mode?e.mode.connect(this.nSQL.getDB(this.databaseID).state.id,()=>{r(e)},i):r(e)};t?t.disconnect(()=>{s()},i):s()}}):Promise.resolve(e)}).then(e=>"_util"===l?Promise.resolve(e):new Promise((t,r)=>{s?t(e):this.nSQL.triggerQuery(this.databaseID,Object.assign({},i.buildQuery(this.databaseID,this.nSQL,"_util","select"),{where:["key","=","total_"+e.id]}),t=>{t.value&&(e.count=t.value)},()=>{t(e)},r)})).then(e=>{const a=s?Object.keys(this.nSQL.getDB(this.databaseID)._tables[l].indexes):[],n=Object.keys(e.indexes),o=n.filter(e=>-1===a.indexOf(e));let h=[e.name].concat(o);return r(e,0),i.chainAsync(h,(r,o,h,l)=>{if(0===o){const t={name:r,conf:e};if(this.nSQL.getDB(this.databaseID)._tableIds[t.name]=e.id,s){const e=a.filter(e=>-1===n.indexOf(e));i.allAsync(e,(e,t,s,a)=>{i.adapterFilters(this.databaseID,this.nSQL,this.query).deleteIndex(r,e,()=>{s(null)},a)}).then(()=>{this.nSQL.getDB(this.databaseID)._tables[t.name]=t.conf,h(null)}).catch(l)}else i.adapterFilters(this.databaseID,this.nSQL,this.query).createTable(t.name,t.conf,()=>{this.nSQL.getDB(this.databaseID)._tables[t.name]=t.conf,h(null)},l)}else{const s=e.indexes[r];t.secondaryIndexQueue[this.nSQL.getDB(this.databaseID).state.id+s.id]=new i._nanoSQLQueue,i.adapterFilters(this.databaseID,this.nSQL,this.query).createIndex(e.name,s.id,s.type,()=>{h(null)},l)}})}).then(()=>(this.nSQL._rebuildFKs(),"_util"===l?Promise.resolve():this.nSQL._saveTableIds(this.databaseID||""))).then(()=>{n()}).catch(o)}_dropTable(e,t,s){new Promise((t,s)=>{this.nSQL.getDB(this.databaseID)._fkRels[e]&&this.nSQL.getDB(this.databaseID)._fkRels[e].length?i.allAsync(this.nSQL.getDB(this.databaseID)._fkRels[e],(e,t,s,a)=>{switch(e.onDelete){case r.InanoSQLFKActions.RESTRICT:let t=0;i.adapterFilters(this.databaseID,this.nSQL,this.query).readIndexKeys(e.childTable,e.childIndex,"offset",0,1,!1,(e,s)=>{t++},()=>{t>0?a("Foreign key restraint error, can't drop!"):s()},a);break;case r.InanoSQLFKActions.CASCADE:let n=[];i.adapterFilters(this.databaseID,this.nSQL,this.query).readIndexKeys(e.childTable,e.childIndex,"all",0,0,!1,(e,t)=>{n.push(e)},()=>{this.nSQL.triggerQuery(this.databaseID,Object.assign({},i.buildQuery(this.databaseID,this.nSQL,e.childTable,"delete"),{where:[e.childPath.join("."),e.childIsArray?"INCLUDES":"IN",n]}),i.noop,s,a)},a);break;case r.InanoSQLFKActions.SET_NULL:let o=[];i.adapterFilters(this.databaseID,this.nSQL,this.query).readIndexKeys(e.childTable,e.childIndex,"all",0,0,!1,(e,t)=>{o.push(e)},()=>{this.nSQL.triggerQuery(this.databaseID,Object.assign({},i.buildQuery(this.databaseID,this.nSQL,e.childTable,"upsert"),{actionArgs:{[e.childPath.join(".")]:null},where:[e.childPath.join("."),e.childIsArray?"INCLUDES":"IN",n]}),i.noop,s,a)},a);break;default:s()}}).then(t).catch(s):t()}).then(()=>{let s=[];return Object.keys(this.nSQL.getDB(this.databaseID)._tables[e].indexes).forEach(e=>{s.push(e)}),s.push(e),i.chainAsync(s,(t,r,a,n)=>{r===s.length-1?i.adapterFilters(this.databaseID,this.nSQL,this.query).dropTable(t,()=>{delete this.nSQL.getDB(this.databaseID)._tables[t],delete this.nSQL.getDB(this.databaseID)._tableIds[t],this.nSQL._saveTableIds(this.databaseID||"").then(()=>{a(t)}).catch(n)},n):i.adapterFilters(this.databaseID,this.nSQL,this.query).deleteIndex(e,t,a,n)}).then(()=>{this.nSQL.getDB(this.databaseID)._tables[e].count=0,this.nSQL.saveCount(this.databaseID||"",e),t()})}).catch(s)}_onError(e){this.query.state="error",this.error(e)}_resolveFastWhere(e,t,s,r,a){if(t.index&&t.parsedFn)return void this.nSQL.functions[t.parsedFn.name].queryIndex(this.query,t,e,r,a,this._onError);const n="_pk_"===t.index,o=this.nSQL.getDB(this.databaseID)._tables[this.query.table].pkCol;let h=0;const l=new i._nanoSQLQueue((t,s,a,l)=>{t?n?(r(e?i.deepGet(o,t):t,0),a()):e?(r(t,h),h++,a()):i.adapterFilters(this.databaseID,this.nSQL,this.query).read(this.query.table,t,e=>{e&&r(e,h),h++,a()},this.error):a()},this._onError,a);if(t.indexArray)switch(t.comp){case"INCLUDES LIKE":i.adapterFilters(this.databaseID,this.nSQL,this.query).readIndexKeys(this.query.table,t.index,"range",t.value.replace(/\%/gim,"")+" ",t.value.replace(/\%/gim,"")+"~",s,e=>{l.newItem(e)},()=>{l.finished()},this._onError);break;case"INCLUDES":i.adapterFilters(this.databaseID,this.nSQL,this.query).readIndexKey(this.query.table,t.index,t.value,e=>{l.newItem(e)},()=>{l.finished()},this.error);break;case"INTERSECT ALL":case"INTERSECT":let e={},r=0;i.allAsync(t.value||[],(s,a,n)=>{i.adapterFilters(this.databaseID,this.nSQL,this.query).readIndexKey(this.query.table,t.index,s,t=>{r=a+1,t&&(e[t]=(e[t]||0)+1)},()=>{n(null)},this.error)}).then(()=>{("INTERSECT"===t.comp?Object.keys(e):Object.keys(e).filter(t=>e[t]===r)).forEach(e=>{l.newItem(e)}),l.finished()})}else switch(t.comp){case"=":e&&n?(r(t.value,0),a()):n?i.adapterFilters(this.databaseID,this.nSQL,this.query).read(this.query.table,t.value,e=>{l.newItem(e),l.finished()},this.error):i.adapterFilters(this.databaseID,this.nSQL,this.query).readIndexKey(this.query.table,t.index,t.value,e=>{l.newItem(e)},()=>{l.finished()},this.error);break;case"LIKE":n?i.adapterFilters(this.databaseID,this.nSQL,this.query).readMulti(this.query.table,"range",t.value.replace(/\%/gim,"")+"0",t.value.replace(/\%/gim,"")+"Z",s,(e,t)=>{l.newItem(e)},()=>{l.finished()},this._onError):i.adapterFilters(this.databaseID,this.nSQL,this.query).readIndexKeys(this.query.table,t.index,"range",t.value.replace(/\%/gim,"")+" ",t.value.replace(/\%/gim,"")+"~",s,e=>{l.newItem(e)},()=>{l.finished()},this._onError);break;case"BETWEEN":n?i.adapterFilters(this.databaseID,this.nSQL,this.query).readMulti(this.query.table,"range",t.value[0],t.value[1],s,(e,t)=>{l.newItem(e)},()=>{l.finished()},this._onError):i.adapterFilters(this.databaseID,this.nSQL,this.query).readIndexKeys(this.query.table,t.index,"range",t.value[0],t.value[1],s,e=>{l.newItem(e)},()=>{l.finished()},this._onError);break;case"IN":const o=s?t.value.sort((e,t)=>e<t?1:-1):t.value.sort((e,t)=>e>t?1:-1);e&&n?(o.forEach((e,t)=>r(e,t)),a()):i.allAsync(o,(e,s,r)=>{n?i.adapterFilters(this.databaseID,this.nSQL,this.query).read(this.query.table,e,e=>{l.newItem(e),r()},this.error):i.adapterFilters(this.databaseID,this.nSQL,this.query).readIndexKey(this.query.table,t.index,e,e=>{l.newItem(e)},()=>{r()},this.error)}).then(()=>{l.finished()})}}_fastQuery(e,t){if(this._whereArgs.fastWhere)if(1===this._whereArgs.fastWhere.length){const s=this._whereArgs.fastWhere[0],r=this._pkOrderBy&&"DESC"===this._orderBy.sort[0].dir;this._resolveFastWhere(!1,s,r,(t,s)=>{e(t,s)},t)}else{let s={},r=0;i.chainAsync(this._whereArgs.fastWhere,(e,t,i)=>{if(t%2==1)return void i();r=t;this._resolveFastWhere(!0,e,!1,e=>{s[e]=(s[e]||0)+1},i)}).then(()=>{let i=[];Object.keys(s).forEach(e=>{s[e]===r&&i.push(e)}),this._resolveFastWhere(!1,{index:"_pk_",col:this.nSQL.getDB(this.databaseID)._tables[this.query.table].pkCol.join("."),comp:"IN",value:i,type:this.nSQL.getDB(this.databaseID)._tables[this.query.table].pkType},!1,e,t)})}}_getRecords(e,t,s){const a=s=>{let i=0;for(;i<s.length;)this._whereArgs.type!==r.IWhereType.none?this._whereArgs.whereFn?this._whereArgs.whereFn(s[i],i)&&e(s[i],i):this._where(s[i],this._whereArgs.slowWhere)&&e(s[i],i):e(s[i],i),i++;t()};if("string"==typeof this.query.table)switch(this._whereArgs.type){case r.IWhereType.fast:this._fastQuery((t,s)=>{e(i.mutateRowTypes(this.databaseID,t,this.query.table,this.nSQL),s)},t);break;case r.IWhereType.medium:this._fastQuery((t,s)=>{this._where(t,this._whereArgs.slowWhere)&&e(i.mutateRowTypes(this.databaseID,t,this.query.table,this.nSQL),s)},t);break;case r.IWhereType.slow:case r.IWhereType.none:case r.IWhereType.fn:"select"===this.query.action&&this.query.databaseID&&this.nSQL.getDB(this.query.databaseID)&&this.nSQL.getDB(this.query.databaseID).config.warnOnSlowQuery&&console.warn("Slow Query: Use secondary indexes or primary keys to perform SELECT.  Avoid full table scans!",this.query);const s=this._pkOrderBy&&"DESC"===this._orderBy.sort[0].dir;(!this.query.orderBy||!0===this._pkOrderBy)&&this._whereArgs.type===r.IWhereType.none&&void 0===this.query.groupBy&&void 0!==this.query.limit&&void 0!==this.query.offset?(this._didRangeAlready=!0,i.adapterFilters(this.databaseID,this.nSQL,this.query).readMulti(this.query.table,"offset",this.query.offset,this.query.limit,s,(t,s)=>{e(i.mutateRowTypes(this.databaseID,t,this.query.table,this.nSQL),s)},()=>{t()},this._onError)):i.adapterFilters(this.databaseID,this.nSQL,this.query).readMulti(this.query.table,"all",void 0,void 0,s,(t,s)=>{this._whereArgs.type===r.IWhereType.slow?this._where(t,this._whereArgs.slowWhere)&&e(i.mutateRowTypes(this.databaseID,t,this.query.table,this.nSQL),s):this._whereArgs.type===r.IWhereType.fn&&this._whereArgs.whereFn?this._whereArgs.whereFn(t,s)&&e(i.mutateRowTypes(this.databaseID,t,this.query.table,this.nSQL),s):e(i.mutateRowTypes(this.databaseID,t,this.query.table,this.nSQL),s)},()=>{t()},this._onError)}else"function"==typeof this.query.table?this._getTable(this.query.tableAS||i.fastID(),this.query.where,this.query.table,e=>{a(e.rows)}):Array.isArray(this.query.table)?a(this.query.table):this.query.table&&s("Can't get selected table!")}_rebuildIndexes(e,t,s){const a=this.query.table;if(this.nSQL.getDB(this.databaseID)._tables[a])if(this._whereArgs=this.query.where?this._parseWhere(this.query.where):{type:r.IWhereType.none},this.query.where){const r=new i._nanoSQLQueue((t,s,r,i)=>{this._removeRowAndIndexes(this.nSQL.getDB(this.databaseID)._tables[a],t,()=>{this._newRow(t,r,i),e(t,s)},i)},s,()=>{t()});this._getRecords(e=>{r.newItem(e)},()=>{r.finished()},s)}else{const r=Object.keys(this.nSQL.getDB(this.databaseID)._tables[a].indexes);i.allAsync(r,(e,t,s,r)=>{i.adapterFilters(this.databaseID,this.nSQL,this.query).deleteIndex(a,e,()=>{i.adapterFilters(this.databaseID,this.nSQL,this.query).createIndex(a,e,this.nSQL.getDB(this.databaseID)._tables[a].indexes[e].type,()=>{s(null)},r)},r)}).then(()=>{const r=new i._nanoSQLQueue((t,s,r,n)=>{const o=this.nSQL.getDB(this.databaseID)._tables[a],h=this._getIndexValues(o.indexes,t),l=i.deepGet(o.pkCol,t);i.allAsync(Object.keys(h),(e,t,s,r)=>{const n=h[e];if(o.indexes[e].isArray){const t=h[e]||[];i.allAsync(t,(t,s,i)=>{this._updateIndex(this.query.table,e,t,l,!0,()=>{i(null)},r)}).then(()=>{s()}).catch(r)}else this._updateIndex(a,e,n,l,!0,()=>{s()},r)}).then(()=>{e(t,s),r()}).catch(n)},s,()=>{t()});this._getRecords(e=>{r.newItem(e)},()=>{r.finished()},s)}).catch(s)}else s(new Error(`Table ${a} not found for rebuilding indexes!`))}_where(e,t){if(t.length>1){let s="AND",r=!0,i=0;for(;i<t.length;){const a=t[i];if(i%2==1)s=a;else{let t=!1;t=Array.isArray(a)?this._where(e,a):this._compare(a,e),r=0===i?t:"AND"===s?r&&t:r||t}i++}return r}return this._compare(t[0],e)}_processLIKE(e,t){if(!o.likeCache[t]){let e="";const s=t.split("").length-1;o.likeCache[t]=new RegExp(t.split("").map((t,r)=>"\\"===e?(e=t,t):(e=t,"%"===t?".*":"_"===t?".":0===r?"^"+t:r===s?t+"$":t)).join(""),"gmi")}return"string"!=typeof e?"number"==typeof e?null!==String(e).match(o.likeCache[t]):null!==JSON.stringify(e).match(o.likeCache[t]):null!==e.match(o.likeCache[t])}_getColValue(e,t){const s=e.fnString?i.execFunction(this.query,e.fnString,t,{result:void 0}).result:i.deepGet(e.col,t);return"date"===e.type?Array.isArray(s)?s.map(e=>i.maybeDate(e)):i.maybeDate(s):s}_compare(e,t){const s=this._getColValue(e,t),r=e.value,a=e.comp;if("NULL"===r||"NOT NULL"===r){const e=-1!==[void 0,null,""].indexOf(s),t="="===a||"LIKE"===a;switch(r){case"NULL":return t?e:!e;case"NOT NULL":return t?!e:e}}if(-1!==["IN","NOT IN","BETWEEN","INTERSECT","INTERSECT ALL","NOT INTERSECT"].indexOf(a)&&!Array.isArray(r))return this.query.state="error",this.error(`WHERE "${a}" comparison requires an array value!`),!1;switch(a){case"=":return i.objectsEqual(r,s);case"!=":return!i.objectsEqual(r,s);case">":return s>r;case"<":return s<r;case"<=":return s<=r;case">=":return s>=r;case"IN":return-1!==r.indexOf(s);case"NOT IN":return-1===r.indexOf(s);case"REGEXP":case"REGEX":return null!==(s||"").match(r);case"LIKE":return this._processLIKE(s||"",r);case"NOT LIKE":return!this._processLIKE(s||"",r);case"BETWEEN":return r[0]<=s&&r[1]>=s;case"NOT BETWEEN":return r[0]>=s||r[1]<=s;case"INCLUDES":return-1!==(s||[]).indexOf(r);case"INCLUDES LIKE":return(s||[]).filter(e=>this._processLIKE(e,r)).length>0;case"NOT INCLUDES":return-1===(s||[]).indexOf(r);case"INTERSECT":return(s||[]).filter(e=>r.indexOf(e)>-1).length>0;case"INTERSECT ALL":return(s||[]).filter(e=>r.indexOf(e)>-1).length===r.length;case"NOT INTERSECT":return 0===(s||[]).filter(e=>r.indexOf(e)>-1).length;default:return!1}}_parseSort(e,t){const s=(e&&e.length?i.hash(JSON.stringify(e)):"")+("string"==typeof this.query.table?this.nSQL.getDB(this.databaseID).state.cacheId:"");if(!s)return{sort:[],index:""};if(o._sortMemoized[s])return o._sortMemoized[s];let r=!1;const a=e.map(e=>e.split(" ").map(e=>e.trim())).reduce((e,t)=>{const s=-1!==t[0].indexOf("(");return s&&(r=!0),e.push({path:s?[]:i.resolvePath(t[0]),fn:s?t[0]:void 0,dir:(t[1]||"asc").toUpperCase()}),e},[]);let n="";if(t&&!1===r&&1===a.length){const e="string"==typeof this.query.table?this.nSQL.getDB(this.databaseID)._tables[this.query.table].pkCol:[];if(a[0].path[0].length&&i.objectsEqual(a[0].path,e))n="_pk_";else{const e=Object.keys(this.nSQL.getDB(this.databaseID)._tables[this.query.table].indexes);let t=e.length;for(;t--&&!n;)i.objectsEqual(this.nSQL.getDB(this.databaseID)._tables[this.query.table].indexes[e[t]],a[0].path)&&(n=this.nSQL.getDB(this.databaseID)._tables[this.query.table].indexes[e[t]].id)}}return o._sortMemoized[s]={sort:a,index:n},o._sortMemoized[s]}_parseSelect(){const e=(this.query.actionArgs&&this.query.actionArgs.length?JSON.stringify(this.query.actionArgs):"")+("string"==typeof this.query.table?this.nSQL.getDB(this.databaseID).state.cacheId:"");this._orderBy=this._parseSort(this.query.orderBy||[],"string"==typeof this.query.table),this._groupBy=this._parseSort(this.query.groupBy||[],!1),e?o._selectArgsMemoized[e]?(this._hasAggrFn=o._selectArgsMemoized[e].hasAggrFn,this._selectArgs=o._selectArgsMemoized[e].args,this._hasFn=o._selectArgsMemoized[e].hasFn):((this.query.actionArgs||[]).forEach(e=>{const t=e.split(/\s+as\s+/i).map(e=>e.trim());if(-1!==t[0].indexOf("(")){const e=t[0].split("(")[0].trim().toUpperCase();this._selectArgs.push({isFn:!0,value:t[0],as:t[1],args:void 0}),this.nSQL.functions[e]?(this._hasFn=!0,"A"===this.nSQL.functions[e].type&&(this._hasAggrFn=!0)):(this.query.state="error",this.error(`Function "${e}" not found!`))}else this._selectArgs.push({isFn:!1,value:t[0],as:t[1]})}),"error"!==this.query.state&&(o._selectArgsMemoized[e]={hasAggrFn:this._hasAggrFn,hasFn:this._hasFn,args:this._selectArgs})):this._selectArgs=[];let t=!1;this._whereArgs.type===r.IWhereType.none?(t="_pk_"===this._orderBy.index)&&(this._pkOrderBy=!0):(t=!!(this._orderBy.index.length&&this._whereArgs.fastWhere&&i.objectsEqual(this._whereArgs.fastWhere[0].col,this._orderBy.sort[0].path)))&&(this._idxOrderBy=!0),(this._orderBy.sort.length&&!t||this._groupBy.sort.length||this._hasAggrFn)&&(this._stream=!1)}_parseWhere(e,t){const s=e||[],a=JSON.stringify(s,(e,t)=>t&&t.constructor&&"RegExp"===t.constructor.name?t.toString():t)+(t?"0":"1")+("string"==typeof this.query.table?this.nSQL.getDB(this.databaseID).state.cacheId:"");if(o._whereMemoized[a])return o._whereMemoized[a];if("function"==typeof s)return{type:r.IWhereType.fn,whereFn:s};if(!s.length)return o._whereMemoized[a]={type:r.IWhereType.none},o._whereMemoized[a];const n="string"==typeof this.query.table?Object.keys(this.nSQL.getDB(this.databaseID)._tables[this.query.table].indexes).map(e=>this.nSQL.getDB(this.databaseID)._tables[this.query.table].indexes[e]):[],h="string"==typeof this.query.table?this.nSQL.getDB(this.databaseID)._tables[this.query.table].pkCol:[],l="string"==typeof this.query.table?this.nSQL.getDB(this.databaseID)._tables[this.query.table].pkType:"",d=(e,s)=>{const r=!t&&0===s;return e.reduce((e,t,a)=>{if(a%2==1)return"string"!=typeof t?(this.query.state="error",this.error("Malformed WHERE statement!"),e):(e.push(t),e);if(!Array.isArray(t))return this.query.state="error",this.error("Malformed WHERE statement!"),e;if(Array.isArray(t[0]))e.push(d(t,s+1));else if(-1!==t[0].indexOf("(")){const s=t[0].split("(")[1].replace(")","").split(",").map(e=>e.trim()).filter(e=>e),a=t[0].split("(")[0].trim().toUpperCase();let n=!1;if(!this.nSQL.functions[a])return this.query.state="error",this.error(`Function "${a}" not found!`),e;if(r&&this.nSQL.functions[a]&&this.nSQL.functions[a].checkIndex){const r=this.nSQL.functions[a].checkIndex(this.query,s,t);r&&(this._indexesUsed.push(i.assign(t)),n=!0,e.push(r))}n||e.push({fnString:t[0],parsedFn:{name:a,args:s},comp:t[1],value:t[2]})}else{let s=!1;const a=r?i.resolvePath(t[0]):[];-1!==["=","BETWEEN","IN","LIKE"].indexOf(t[1])&&r&&("LIKE"!==t[1]||t[2].match(/.*\%$/gim))&&(i.objectsEqual(a,h)?"LIKE"===t[1]&&"string"!==l||(s=!0,this._indexesUsed.push(i.assign(t)),e.push({index:"_pk_",col:t[0],comp:t[1],value:t[2],type:l})):n.forEach(r=>{"LIKE"===t[1]&&"string"!==r.type||!1===s&&i.objectsEqual(r.path,a)&&!1===r.isArray&&"NOT NULL"!==t[2]&&(s=!0,this._indexesUsed.push(i.assign(t)),e.push({index:r.id,col:t[0],comp:t[1],value:t[2],type:this.nSQL.getDB(this.databaseID)._tables[this.query.table].indexes[r.id].type}))})),r&&!s&&-1!==["INCLUDES","INTERSECT","INTERSECT ALL","INCLUDES LIKE"].indexOf(t[1])&&n.forEach(r=>{i.objectsEqual(r.path,a)&&!0===r.isArray&&("INCLUDES LIKE"===t[1]&&"string"!==r.type||(s=!0,this._indexesUsed.push(i.assign(t)),e.push({index:r.id,indexArray:!0,col:t[0],comp:t[1],value:t[2],type:this.nSQL.getDB(this.databaseID)._tables[this.query.table].indexes[r.id].type})))});const o=(e,t)=>{const s=(e,r)=>{const i=r.filter(s=>s.key===t[e])[0];return i?t[e+1]?i.model?s(e+1,i.model):"":i.type:""};return s(0,e)},d="string"==typeof this.query.table?o(this.nSQL.getDB(this.databaseID)._tables[this.query.table].columns,i.resolvePath(t[0])):"";s||e.push({col:t[0],comp:t[1],value:"date"===d?Array.isArray(t[2])?t[2].map(e=>i.maybeDate(e)):i.maybeDate(t[2]):t[2],type:d})}return e},[])};let c=d("string"==typeof s[0]?[s]:s,0),u=!0,p=0,y=-1;for(;p<c.length&&u;)p%2==1?"AND"!==c[p]?u=!1:y=p:Array.isArray(c[p])||!c[p].index?u=!1:y=p,p++;if(y%2==0&&y++,-1===y||"AND"!==c[y]&&c[y])o._whereMemoized[a]={type:r.IWhereType.slow,slowWhere:c};else{const e=c.slice(y+1);o._whereMemoized[a]={type:e.length?r.IWhereType.medium:r.IWhereType.fast,slowWhere:e,fastWhere:c.slice(0,y)}}return o._whereMemoized[a]}}o._whereMemoized={},o._sortMemoized={},o._selectArgsMemoized={},o.likeCache={},t._nanoSQLQuery=o},function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});const r=s(1),i=s(0),a=s(2);t.SQLiteAbstract=(e,t)=>{let s=[],r={};const a=e=>{if(-1===s.indexOf(e))throw Error("No table "+e+" found!");return`"${e}"`},n={createAI:(t,s)=>{e(!0,'CREATE TABLE IF NOT EXISTS "_ai" (id TEXT PRIMARY KEY UNIQUE, inc BIGINT)',[],i.noop,t,s)},createTable:(t,a,n,o,h)=>{s.push(t),r[t]=a,e(!0,`CREATE TABLE IF NOT EXISTS "${t}" (id ${a.isPkNum?"REAL":"TEXT"} PRIMARY KEY UNIQUE, data TEXT)`,[],i.noop,()=>{if(a.ai){let s=[];e(!1,'SELECT "inc" FROM "_ai" WHERE id = ?',[t],e=>{s.push(e)},()=>{s.length?(n[t]=parseInt(s[0].inc),o()):(n[t]=0,e(!0,'INSERT into "_ai" (id, inc) VALUES (?, ?)',[t,0],i.noop,o,h))},h)}else o()},h)},dropTable:(t,r,n)=>{e(!0,`DROP TABLE IF EXISTS ${a(t)}`,[],i.noop,()=>{e(!0,'UPDATE "_ai" SET inc = ? WHERE id = ?',[0,t],i.noop,()=>{s.splice(s.indexOf(t),1),r()},n)},n)},write:(t,s,r,n,o,h,l,d,c)=>{if(void 0===(n=n||i.generateID(t,l[r]+1)))return void c(new Error("Can't add a row without a primary key!"));h&&(l[r]=Math.max(n,l[r])),i.deepSet(s,o,n);const u=JSON.stringify(o),p=()=>{h&&n>=l[r]?e(!0,'UPDATE "_ai" SET inc = ? WHERE id = ?',[l[r],r],i.noop,()=>{d(n)},c):d(n)};let y=[];e(!1,`SELECT id FROM ${a(r)} WHERE id = ?`,[n],e=>{y.push(e)},()=>{y.length?e(!0,`UPDATE ${a(r)} SET data = ? WHERE id = ?`,[u,n],i.noop,p,c):e(!0,`INSERT INTO ${a(r)} (id, data) VALUES (?, ?)`,[n,u],i.noop,p,c)},c)},batch:(t,s,a,o)=>{e(!0,"BEGIN TRANSACTION",[],i.noop,()=>{i.allAsync(s,(e,s,a,o)=>{switch(e.type){case"put":n.write(r[t].pkType,r[t].pkCol,t,i.deepGet(r[t].pkCol,e.data),e.data,r[t].ai,{},a,o);break;case"del":n.remove(t,e.data,a,o)}}).then(t=>{e(!0,"END TRANSACTION",[],i.noop,()=>{a(t)},o)}).catch(o)},o)},read:(t,s,r,i)=>{let n=[];e(!1,`SELECT data FROM ${a(t)} WHERE id = ?`,[s],e=>{n.push(e)},()=>{n.length?r(JSON.parse(n[0].data)):r(void 0)},i)},remove:(t,s,r,n)=>{e(!0,`DELETE FROM ${a(t)} WHERE id = ?`,[s],i.noop,()=>{r()},n)},getIndex:(t,s,r)=>{let i=[];e(!1,`SELECT id FROM ${a(t)} ORDER BY id`,[],e=>{i.push(e.id)},()=>{s(i)},r)},getNumberOfRecords:(t,s,r)=>{let i=[];e(!1,`SELECT COUNT(*) FROM ${a(t)}`,[],e=>{i.push(e)},()=>{s(i[0]["COUNT(*)"])},r)},readMulti:(t,s,r,i,n,o,h,l)=>{let d=`SELECT data FROM ${a(t)}`;"range"===s&&(d+=" WHERE id BETWEEN ? AND ?");let c=d+=n?" ORDER BY id DESC":" ORDER BY id";if("offset"===s){c+=` LIMIT ${i} OFFSET ${n?r+1:r}`}e(!1,c,"range"===s?[r,i]:[],(e,t)=>{o(JSON.parse(e.data),t)},()=>{h()},l)}};return n};t.WebSQL=class extends a.nanoSQLMemoryIndex{constructor(e,s){super(!1,!1),this.plugin={name:"WebSQL Adapter",version:r.VERSION},this._size=1e3*(e||0)*1e3,this._ai={},this._query=this._query.bind(this),this._tableConfigs={},this._sqlite=t.SQLiteAbstract(this._query,s||500)}connect(e,t,s){this._id=e;try{this._db=window.openDatabase(this._id,this.nSQL.dbs[e]?String(this.nSQL.getDB(e).config.version||"1.0"):"1.0",this._id,i.isAndroid?5e6:this._size)}catch(e){s(e)}i.setFast(()=>{this._sqlite.createAI(t,s)})}createTable(e,t,s,r){this._tableConfigs[e]=t,this._sqlite.createTable(e,t,this._ai,s,r)}_query(e,t,s,r,i,a){const n=e=>{e.executeSql(t,s,(e,t)=>{for(let e=0;e<t.rows.length;e++)r(t.rows.item(e),e);i()},(e,t)=>(a(t),!1))};e?this._db.transaction(n):this._db.readTransaction(n)}dropTable(e,t,s){this._sqlite.dropTable(e,t,s)}disconnect(e,t){e()}write(e,t,s,r,i){this._sqlite.write(this._tableConfigs[e].pkType,this._tableConfigs[e].pkCol,e,t,s,this._tableConfigs[e].ai,this._ai,r,i)}read(e,t,s,r){this._sqlite.read(e,t,s,r)}delete(e,t,s,r){this._sqlite.remove(e,t,s,r)}batch(e,t,s,r){this._sqlite.batch(e,t,s,r)}readMulti(e,t,s,r,i,a,n,o){this._sqlite.readMulti(e,t,s,r,i,a,n,o)}getTableIndex(e,t,s){this._sqlite.getIndex(e,t,s)}getTableIndexLength(e,t,s){this._sqlite.getNumberOfRecords(e,t,s)}}},function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});const r=s(1),i=s(0),a=s(2);t.IndexedDB=class extends a.nanoSQLMemoryIndex{constructor(e){super(!1,!1),this.version=e,this.plugin={name:"IndexedDB Adapter",version:r.VERSION},this._db={},this._ai={},this._tableConfigs={}}connect(e,t,s){this._id=e,t()}createTable(e,t,s,r){let a=1;this._tableConfigs[e]=t;const n=i.hash(JSON.stringify(t.columns));this.version?a=this.version:(a=parseInt(localStorage.getItem(this._id+"_"+e+"_idb_version")||"1"),(localStorage.getItem(this._id+"_"+e+"_idb_hash")||n)!==n&&a++,localStorage.setItem(this._id+"_"+e+"_idb_version",String(a)),localStorage.setItem(this._id+"_"+e+"_idb_hash",n));const o=indexedDB.open(this._id+"_"+e,a);this._ai[e]=parseInt(localStorage.getItem(this._id+"_"+e+"_idb_ai")||"0"),o.onerror=r,o.onupgradeneeded=s=>{this._db[e]=s.target.result,this._db[e].objectStoreNames.contains(e)||this._db[e].createObjectStore(e,{keyPath:t.pkCol.join(".")})},o.onsuccess=t=>{this._db[e]=t.target.result,s()}}dropTable(e,t,s){const r=this._db[e].transaction(e,"readwrite");r.onerror=s;const i=r.objectStore(e).clear();i.onerror=s,i.onsuccess=()=>{this._db[e].close(),delete this._db[e],localStorage.removeItem(this._id+"_"+e+"_idb_version"),localStorage.removeItem(this._id+"_"+e+"_idb_hash"),localStorage.removeItem(this._id+"_"+e+"_idb_ai"),t()}}disconnect(e,t){i.allAsync(Object.keys(this._db),(e,t,s,r)=>{this._db[e].close(),i.setFast(()=>{s()})}).then(e).catch(t)}store(e,t,s,r){const i=this._db[e].transaction(e,t);i.onabort=r,i.onerror=r,s(i,i.objectStore(e))}batch(e,t,s,r){this.store(e,"readwrite",(e,i)=>{e.onerror=r;let a=0;for(;a<t.length;){const e=t[a];"put"===e.type?i.put(e.data):i.delete(e.data),a++}e.oncomplete=()=>s([])},r)}write(e,t,s,r,a){void 0===t&&(t=i.generateID(this._tableConfigs[e].pkType,this._ai[e]+1)),void 0!==t?(this._ai[e]=Math.max(t,this._ai[e]),this._tableConfigs[e].ai&&(this._ai[e]=i.cast(this._id,"int",Math.max(this._ai[e]||0,t)),localStorage.setItem(this._id+"_"+e+"_idb_ai",String(this._ai[e]))),i.deepSet(this._tableConfigs[e].pkCol,s,t),this.store(e,"readwrite",(e,i)=>{try{i.put(s).onsuccess=()=>{r(t)}}catch(e){a(e)}},a)):a(new Error("Can't add a row without a primary key!"))}read(e,t,s,r){this.store(e,"readonly",(e,r)=>{const i=r.get(t);i.onerror=e=>{s(void 0)},i.onsuccess=()=>{s(i.result)}},r)}delete(e,t,s,r){this.store(e,"readwrite",(e,i)=>{const a=i.delete(t);a.onerror=r,a.onsuccess=e=>{s()}},r)}readMulti(e,t,s,r,i,a,n,o){let h=0;const l="offset"===t?s:0,d=l+r;let c=!0;this.store(e,"readonly",(e,u)=>{if(u.getAll){const e=u.getAll("range"!==t?void 0:IDBKeyRange.bound(s,r,!1,!1),"offset"!==t||i?void 0:r+s);e.onsuccess=e=>{const o=i?e.target.result.reverse():e.target.result;if("offset"===t){const e=i?1:0;o.slice(s+e,s+r+e).forEach(a)}else o.forEach(a);n()},e.onerror=o}else u.openCursor("range"!==t?void 0:IDBKeyRange.bound(s,r,!1,!1),i?"prev":"next").onsuccess=e=>{const r=e.target.result;if(r){if("offset"===t){if(c){const e=i?l+1:l;return r.advance(e),h=e,void(c=!1)}(i?d>=h:d>h)&&a(r.value,h-s)}else a(r.value,h);h++,r.continue()}else n()}},o)}getTableIndex(e,t,s){let r=[];this.store(e,"readonly",(a,n)=>{if(n.getAllKeys){const e=n.getAllKeys();e.onsuccess=e=>{t(e.target.result)},e.onerror=s}else{const a=n.openCursor();a.onsuccess=s=>{const a=s.target.result;a?(r.push(i.deepGet(this._tableConfigs[e].pkCol,a.value)),a.continue()):t(r)},a.onerror=s}},s)}getTableIndexLength(e,t,s){this.store(e,"readonly",(r,i)=>{const a=r.objectStore(e).count();a.onsuccess=()=>{t(a.result)},a.onerror=s},s)}}},function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});const r=s(0),i=s(4);var a;t._nanoSQLQueryBuilder=class{constructor(e,t,s,i,a,n){this.databaseID=e,this._db=t,this._AV=n||"",this._query="string"==typeof i?Object.assign({},r.buildQuery(e,t,s,i),{comments:[],state:"pending",action:i,actionArgs:a,result:[]}):Object.assign({},i(t),{state:"pending",result:[]})}where(e){return this._query.where=e,this}orderBy(e){return Array.isArray(e)?this._query.orderBy=e:this._query.orderBy=Object.keys(e).map(t=>`${t} ${String(e[t]).toUpperCase()}`),this}distinct(e){return this._query.distinct=e,this}groupBy(e){return Array.isArray(e)?this._query.groupBy=e:this._query.groupBy=Object.keys(e).map(t=>`${t} ${String(e[t]).toUpperCase()}`),this}having(e){return this._query.having=e,this}join(e){const t="Join commands requires table and type arguments!";return Array.isArray(e)?e.forEach(e=>{e.with.table&&e.type||(this._error=t)}):e.with.table&&e.type||(this._error=t),this._query.join=e,this}limit(e){return this._query.limit=e,this}updateImmutable(e){return this._query.updateImmutable=e,this}comment(e){return this._query.comments.push(e),this}tag(e){return this._query.tags.push(e),this}extend(e,...t){return this._query.extend.push({scope:e,args:t}),this}union(e,t){return this._query.union={queries:e,type:t?"all":"distinct"},this}offset(e){return this._query.offset=e,this}emit(){return this._query}ttl(e=60,t){if("upsert"!==this._query.action)throw new Error("nSQL: Can only do ttl on upsert queries!");return this._query.ttl=e,this._query.ttlCols=t||[],this}graph(e){return this._query.graph=e,this}from(e){return"string"==typeof e||Array.isArray(e)?this._query.table=e:(this._query.table=e.table,this._query.tableAS=e.as),this}into(e){return this._query.table=e,this}on(e){return this._query.table=e,this}toCSV(e){return this.exec().then(t=>Promise.resolve(this._db.JSONtoCSV(t,e)))}copyTo(e,t){return this._query.copyTo={table:e,mutate:t||(e=>e)},this}exec(e){return new Promise((t,s)=>{let r=[];this.stream(e=>{e&&r.push(e)},()=>{t(r)},s,e)})}listen(e){return new n(this.databaseID,this._query,e&&e.debounce,e&&e.unique,e&&e.compareFn)}stream(e,t,s,i){if(this._query.returnEvent=i,this._db.dbs[this.databaseID]&&this._db.getDB(this.databaseID).state.exportQueryObj)e(this._query),t&&t();else{const i=this._query.copyTo?new r._nanoSQLQueue((t,s,i,a)=>{this._query.parent.triggerQuery(this.databaseID,Object.assign({},r.buildQuery(this.databaseID,this._query.parent,this._query.copyTo&&this._query.copyTo.table||"","upsert"),{actionArgs:this._query.copyTo&&this._query.copyTo.mutate(t)}),r.noop,()=>{e(t),i()},a)},s,()=>{t&&t()}):void 0;this._db.triggerQuery(this.databaseID,this._query,t=>{i?i.newItem(t):e(t)},()=>{i?i.finished():t&&t()},s||r.noop)}}cache(e,t,s){const i=r.fastID();let a=[],n=!1,o=0;const h=s||{pageSize:0,onPage:r.noop};this.stream(e=>{a.push(e),h.pageSize&&h.onPage&&a.length%h.pageSize==0&&(n=!0,h.onPage(o,a.slice(a.length-h.pageSize)),o++,h.doNotCache&&(a=[]))},()=>{h.pageSize&&h.onPage&&(!n||h.doNotCache?h.onPage(0,a.slice()):h.onPage(o,a.slice(o*h.pageSize))),h.doNotCache?(a=[],e("",0)):(this._db.getDB(this.databaseID)._queryCache[i]=a,e(i,a.length))},t)}},function(e){e[e.stream=0]="stream",e[e.exec=1]="exec"}(a||(a={}));class n{constructor(e,t,s=500,a=!1,n=i){if(this.databaseID=e,this.query=t,this.debounce=s,this.unique=a,this.compareFn=n,this._listenTables=[],this._active=!0,this.trigger=this.trigger.bind(this),this._doQuery=this._doQuery.bind(this),this._throttleTrigger=this._doQuery.bind(this),this._cbs={stream:[r.noop,r.noop,r.noop,!1],exec:[r.noop,!1]},"string"!=typeof t.table)throw new Error("Can't listen on dynamic tables!");if("select"!==t.action)throw new Error("Can't listen to this kind of query!");if(this._listenTables.push(t.table),t.join){const e=Array.isArray(t.join)?t.join:[t.join];this._listenTables.concat(this._getTables(e))}if(t.graph){const e=Array.isArray(t.graph)?t.graph:[t.graph];this._listenTables.concat(this._getTables(e))}this._listenTables=this._listenTables.filter((e,t,s)=>s.indexOf(e)===t),this._throttleTrigger=r.throttle(this,this._doQuery,s),this._listenTables.forEach(e=>{t.parent.on("change",this._throttleTrigger,e)})}_getTables(e){let t=[];return e.forEach(e=>{e.with&&e.with.table&&"string"==typeof e.with.table&&t.push(e.with.table);const s=e.graph;if(s){const e=Array.isArray(s)?s:[s];t.concat(this._getTables(e))}}),t}_doQuery(){if(this._active&&void 0!==this._mode)switch(this._mode){case a.stream:this.query.returnEvent=this._cbs.stream[3],this.query.parent.triggerQuery(this.databaseID,this.query,this._cbs.stream[0],this._cbs.stream[1],this._cbs.stream[2]);break;case a.exec:this.query.returnEvent=this._cbs.exec[1];let e=[];this.query.parent.triggerQuery(this.databaseID,this.query,t=>{e.push(t)},()=>{if(this.unique){let t=!1;(t=!this._oldValues||(this._oldValues.length!==e.length||!this.compareFn(this._oldValues,e)))&&(this._oldValues=e,this._cbs.exec[0](r.assign(e)))}else this._cbs.exec[0](e)},e=>{this._cbs.exec[0]([],e)})}}_maybeError(){if(void 0!==this._mode)throw new Error("Listen can't have multiple exports!")}trigger(){this._throttleTrigger()}stream(e,t,s,r){if(this.unique)throw new Error("Can't use unique with stream listener!");this._maybeError(),this._mode=a.stream,this._cbs.stream=[e,t,s,r||!1],this._doQuery()}exec(e,t){this._maybeError(),this._mode=a.exec,this._cbs.exec=[e,t||!1],this._doQuery()}unsubscribe(){this._active=!1,this._listenTables.forEach(e=>{this.query.parent.off("change",this._throttleTrigger,e)})}}}])});