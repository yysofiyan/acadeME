var k=void 0,m=!0,p=null,q=!1,s,t=this;function ca(a,b){var c=a.split("."),d=t;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&b!==k?d[f]=b:d=d[f]?d[f]:d[f]={}}
function u(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){var b=u(a);return"array"==b||"object"==b&&"number"==typeof a.length}function y(a){return"string"==typeof a}function ea(a){var b=typeof a;return"object"==b&&a!=p||"function"==b}function z(a){return a[fa]||(a[fa]=++ga)}var fa="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),ga=0;
function ha(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}}function ia(a,b){function c(){}c.prototype=b.prototype;a.ya=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ja(a,b){this.x=a;this.y=b};function ka(a){this.J=a};function la(a,b,c,d){0<c?(this.x=a,this.width=c):(this.x=a+c,this.width=-c);0<d?(this.y=b,this.height=d):(this.y=b+d,this.height=-d)};function ma(a,b){this.type=a;this.a=b}function na(a){if("rect"==a.type)return a.a;if("polygon"==a.type){for(var a=a.a.J,b=a[0].x,c=a[0].x,d=a[0].y,f=a[0].y,e=1;e<a.length;e++)a[e].x>c&&(c=a[e].x),a[e].x<b&&(b=a[e].x),a[e].y>f&&(f=a[e].y),a[e].y<d&&(d=a[e].y);return new la(b,d,c-b,f-d)}}
function oa(a,b){if("rect"==a.type){var c=a.a,d=b({x:c.x,y:c.y}),c=b({x:c.width,y:c.height});return new ma("rect",new la(d.x,d.y,c.x,c.y))}if("polygon"==a.type){var f=[];A(a.a.J,function(a){f.push(b(a))});return new ma("polygon",new ka(f))}};function pa(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}function qa(a){if(!ta.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ua,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(va,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(wa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(xa,"&quot;"));return a}var ua=/&/g,va=/</g,wa=/>/g,xa=/\"/g,ta=/[&<>\"]/,ya={};function za(a){return ya[a]||(ya[a]=(""+a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};var B=Array.prototype,Aa=B.indexOf?function(a,b,c){return B.indexOf.call(a,b,c)}:function(a,b,c){c=c==p?0:0>c?Math.max(0,a.length+c):c;if(y(a))return!y(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},A=B.forEach?function(a,b,c){B.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=y(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)};
function Ba(a,b){var c;a:{c=a.length;for(var d=y(a)?a.split(""):a,f=0;f<c;f++)if(f in d&&b.call(k,d[f],f,a)){c=f;break a}c=-1}return 0>c?p:y(a)?a.charAt(c):a[c]}function Ca(a,b){var c=Aa(a,b);0<=c&&B.splice.call(a,c,1)}function Da(a){return B.concat.apply(B,arguments)}function Ea(a){if("array"==u(a))return Da(a);for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}function Fa(a,b,c,d){B.splice.apply(a,Ga(arguments,1))}
function Ga(a,b,c){return 2>=arguments.length?B.slice.call(a,b):B.slice.call(a,b,c)}function Ha(a,b){B.sort.call(a,b||Ia)}function Ia(a,b){return a>b?1:a<b?-1:0};var C,Ja,Ka,La,Ma;function Na(){return t.navigator?t.navigator.userAgent:p}function Oa(){return t.navigator}La=Ka=Ja=C=q;var Pa;if(Pa=Na()){var Sa=Oa();C=0==Pa.indexOf("Opera");Ja=!C&&-1!=Pa.indexOf("MSIE");Ka=!C&&-1!=Pa.indexOf("WebKit");La=!C&&!Ka&&"Gecko"==Sa.product}var Ta=C,D=Ja,F=La,G=Ka,Ua=Oa();Ma=-1!=(Ua&&Ua.platform||"").indexOf("Mac");var Va=!!Oa()&&-1!=(Oa().appVersion||"").indexOf("X11"),Wa;
a:{var Xa="",H;if(Ta&&t.opera)var Ya=t.opera.version,Xa="function"==typeof Ya?Ya():Ya;else if(F?H=/rv\:([^\);]+)(\)|;)/:D?H=/MSIE\s+([^\);]+)(\)|;)/:G&&(H=/WebKit\/(\S+)/),H)var Za=H.exec(Na()),Xa=Za?Za[1]:"";if(D){var $a,ab=t.document;$a=ab?ab.documentMode:k;if($a>parseFloat(Xa)){Wa=""+$a;break a}}Wa=Xa}var bb={};
function I(a){var b;if(!(b=bb[a])){b=0;for(var c=pa(""+Wa).split("."),d=pa(""+a).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",j=RegExp("(\\d*)(\\D*)","g"),i=RegExp("(\\d*)(\\D*)","g");do{var l=j.exec(g)||["","",""],n=i.exec(h)||["","",""];if(0==l[0].length&&0==n[0].length)break;b=((0==l[1].length?0:parseInt(l[1],10))<(0==n[1].length?0:parseInt(n[1],10))?-1:(0==l[1].length?0:parseInt(l[1],10))>(0==n[1].length?0:parseInt(n[1],10))?1:0)||((0==l[2].length)<(0==
n[2].length)?-1:(0==l[2].length)>(0==n[2].length)?1:0)||(l[2]<n[2]?-1:l[2]>n[2]?1:0)}while(0==b)}b=bb[a]=0<=b}return b}var cb={};function db(){return cb[9]||(cb[9]=D&&!!document.documentMode&&9<=document.documentMode)};var eb,fb=!D||db();!F&&!D||D&&db()||F&&I("1.9.1");D&&I("9");function gb(a){return(a=a.className)&&"function"==typeof a.split?a.split(/\s+/):[]}function hb(a,b){var c=gb(a),d=Ga(arguments,1),f;f=c;for(var e=0,g=0;g<d.length;g++)0<=Aa(f,d[g])||(f.push(d[g]),e++);f=e==d.length;a.className=c.join(" ");return f}function ib(a,b){for(var c=gb(a),d=Ga(arguments,1),f=c,e=0,g=0;g<f.length;g++)0<=Aa(d,f[g])&&(Fa(f,g--,1),e++);a.className=c.join(" ")};function jb(a,b){for(var c in a)b.call(k,a[c],c,a)}var kb="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");function lb(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<kb.length;e++)c=kb[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function mb(a,b){jb(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in nb?a.setAttribute(nb[d],b):0==d.lastIndexOf("aria-",0)?a.setAttribute(d,b):a[d]=b})}var nb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",maxlength:"maxLength",type:"type"};
function ob(a,b,c){var d=arguments,f=document,e=d[0],g=d[1];if(!fb&&g&&(g.name||g.type)){e=["<",e];g.name&&e.push(' name="',qa(g.name),'"');if(g.type){e.push(' type="',qa(g.type),'"');var h={};lb(h,g);g=h;delete g.type}e.push(">");e=e.join("")}e=f.createElement(e);g&&(y(g)?e.className=g:"array"==u(g)?hb.apply(p,[e].concat(g)):mb(e,g));2<d.length&&pb(f,e,d);return e}
function pb(a,b,c){function d(c){c&&b.appendChild(y(c)?a.createTextNode(c):c)}for(var f=2;f<c.length;f++){var e=c[f];da(e)&&!(ea(e)&&0<e.nodeType)?A(qb(e)?Ea(e):e,d):d(e)}}function rb(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}function Cb(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function qb(a){if(a&&"number"==typeof a.length){if(ea(a))return"function"==typeof a.item||"string"==typeof a.item;if("function"==u(a))return"function"==typeof a.item}return q}function J(a){this.R=a||t.document||document}J.prototype.createElement=function(a){return this.R.createElement(a)};J.prototype.createTextNode=function(a){return this.R.createTextNode(a)};J.prototype.appendChild=function(a,b){a.appendChild(b)};J.prototype.contains=Cb;function Db(a,b){var c=(eb||(eb=new J)).createElement("DIV");c.innerHTML=a(b||Eb,k,k);if(1==c.childNodes.length){var d=c.firstChild;if(1==d.nodeType)return d}return c}var Eb={};!D||db();var Fb=!D||db();D&&I("8");!G||I("528");F&&I("1.9b")||D&&I("8")||Ta&&I("9.5")||G&&I("528");!F||I("8");function Gb(){}Gb.prototype.fa=q;Gb.prototype.C=function(){this.fa||(this.fa=m,this.D())};Gb.prototype.D=function(){this.ta&&Hb.apply(p,this.ta)};function Hb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];da(d)?Hb.apply(p,d):d&&"function"==typeof d.C&&d.C()}};function K(a,b){this.type=a;this.currentTarget=this.target=b}ia(K,Gb);K.prototype.D=function(){delete this.type;delete this.target;delete this.currentTarget};K.prototype.V=q;K.prototype.xa=m;function Ib(a){Ib[" "](a);return a}Ib[" "]=function(){};function L(a,b){a&&this.t(a,b)}ia(L,K);s=L.prototype;s.target=p;s.relatedTarget=p;s.offsetX=0;s.offsetY=0;s.clientX=0;s.clientY=0;s.screenX=0;s.screenY=0;s.button=0;s.keyCode=0;s.charCode=0;s.ctrlKey=q;s.altKey=q;s.shiftKey=q;s.metaKey=q;
s.t=function(a,b){var c=this.type=a.type;K.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(F){var f;a:{try{Ib(d.nodeName);f=m;break a}catch(e){}f=q}f||(d=p)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=G||a.offsetX!==k?a.offsetX:a.layerX;this.offsetY=G||a.offsetY!==k?a.offsetY:a.layerY;this.clientX=a.clientX!==k?a.clientX:a.pageX;this.clientY=a.clientY!==k?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;delete this.xa;delete this.V};s.D=function(){L.ya.D.call(this);this.relatedTarget=this.currentTarget=this.target=p};function Jb(){}var Kb=0;s=Jb.prototype;s.key=0;s.v=q;s.ea=q;s.t=function(a,b,c,d,f,e){if("function"==u(a))this.ia=m;else if(a&&a.handleEvent&&"function"==u(a.handleEvent))this.ia=q;else throw Error("Invalid listener argument");this.F=a;this.la=b;this.src=c;this.type=d;this.capture=!!f;this.ga=e;this.ea=q;this.key=++Kb;this.v=q};s.handleEvent=function(a){return this.ia?this.F.call(this.ga||this.src,a):this.F.handleEvent.call(this.F,a)};var M={},N={},O={},P={};
function T(a,b,c,d,f){if(b){if("array"==u(b)){for(var e=0;e<b.length;e++)T(a,b[e],c,d,f);return p}var d=!!d,g=N;b in g||(g[b]={k:0,n:0});g=g[b];d in g||(g[d]={k:0,n:0},g.k++);var g=g[d],h=z(a),j;g.n++;if(g[h]){j=g[h];for(e=0;e<j.length;e++)if(g=j[e],g.F==c&&g.ga==f){if(g.v)break;return j[e].key}}else j=g[h]=[],g.k++;e=Lb();e.src=a;g=new Jb;g.t(c,e,a,b,d,f);c=g.key;e.key=c;j.push(g);M[c]=g;O[h]||(O[h]=[]);O[h].push(g);a.addEventListener?(a==t||!a.sa)&&a.addEventListener(b,e,d):a.attachEvent(b in P?
P[b]:P[b]="on"+b,e);return c}throw Error("Invalid event type");}function Lb(){var a=Mb,b=Fb?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b}
function U(a){if(M[a]){var b=M[a];if(!b.v){var c=b.src,d=b.type,f=b.la,e=b.capture;c.removeEventListener?(c==t||!c.sa)&&c.removeEventListener(d,f,e):c.detachEvent&&c.detachEvent(d in P?P[d]:P[d]="on"+d,f);c=z(c);f=N[d][e][c];if(O[c]){var g=O[c];Ca(g,b);0==g.length&&delete O[c]}b.v=m;f.ka=m;Nb(d,e,c,f);delete M[a]}}}
function Nb(a,b,c,d){if(!d.G&&d.ka){for(var f=0,e=0;f<d.length;f++)d[f].v?d[f].la.src=p:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.ka=q;0==e&&(delete N[a][b][c],N[a][b].k--,0==N[a][b].k&&(delete N[a][b],N[a].k--),0==N[a].k&&delete N[a])}}function Ob(a,b,c,d,f){var e=1,b=z(b);if(a[b]){a.n--;a=a[b];a.G?a.G++:a.G=1;try{for(var g=a.length,h=0;h<g;h++){var j=a[h];j&&!j.v&&(e&=Pb(j,f)!==q)}}finally{a.G--,Nb(c,d,b,a)}}return Boolean(e)}function Pb(a,b){var c=a.handleEvent(b);a.ea&&U(a.key);return c}
function Mb(a,b){if(!M[a])return m;var c=M[a],d=c.type,f=N;if(!(d in f))return m;var f=f[d],e,g;if(!Fb){var h;if(!(h=b))a:{h=["window","event"];for(var j=t;e=h.shift();)if(j[e]!=p)j=j[e];else{h=p;break a}h=j}e=h;h=m in f;j=q in f;if(h){if(0>e.keyCode||e.returnValue!=k)return m;a:{var i=q;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(l){i=m}if(i||e.returnValue==k)e.returnValue=m}}i=new L;i.t(e,this);e=m;try{if(h){for(var n=[],v=i.currentTarget;v;v=v.parentNode)n.push(v);g=f[m];g.n=g.k;for(var w=n.length-
1;!i.V&&0<=w&&g.n;w--)i.currentTarget=n[w],e&=Ob(g,n[w],d,m,i);if(j){g=f[q];g.n=g.k;for(w=0;!i.V&&w<n.length&&g.n;w++)i.currentTarget=n[w],e&=Ob(g,n[w],d,q,i)}}else e=Pb(c,i)}finally{n&&(n.length=0),i.C()}return e}d=new L(b,this);try{e=Pb(c,d)}finally{d.C()}return e};function V(){return m};/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

 The "New" BSD License:

 Copyright (c) 2005-2009, The Dojo Foundation
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
 list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
 may be used to endorse or promote products derived from this software
 without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
 FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var Qb=function(){function a(a,c){if(!a)return[];if(a.constructor==Array)return a;if(!y(a))return[a];if(y(c)&&(c=y(c)?document.getElementById(c):c,!c))return[];var c=c||document,e=c.ownerDocument||c.documentElement;Q=c.contentType&&"application/xml"==c.contentType||Ta&&(c.doctype||"[object XMLDocument]"==e.toString())||!!e&&(D?e.xml:c.xmlVersion||e.xmlVersion);return(e=d(a)(c))&&e.H?e:b(e)}function b(a){if(a&&a.H)return a;var b=[];if(!a||!a.length)return b;a[0]&&b.push(a[0]);if(2>a.length)return b;
E++;if(D&&Q){var c=E+"";a[0].setAttribute("_zipIdx",c);for(var d=1,e;e=a[d];d++)a[d].getAttribute("_zipIdx")!=c&&b.push(e),e.setAttribute("_zipIdx",c)}else if(D&&a.ra)try{for(d=1;e=a[d];d++)ra(e)&&b.push(e)}catch(f){}else{a[0]&&(a[0]._zipIdx=E);for(d=1;e=a[d];d++)a[d]._zipIdx!=E&&b.push(e),e._zipIdx=E}return b}function c(a,b){if(!b)return 1;var c=sc(a);return!b[c]?b[c]=1:0}function d(a,b){if(tb){var c=ub[a];if(c&&!b)return c}if(c=vb[a])return c;var c=a.charAt(0),e=-1==a.indexOf(" ");0<=a.indexOf("#")&&
e&&(b=m);if(tb&&!b&&-1==">~+".indexOf(c)&&(!D||-1==a.indexOf(":"))&&!(wb&&0<=a.indexOf("."))&&-1==a.indexOf(":contains")&&-1==a.indexOf("|=")){var g=0<=">~+".indexOf(a.charAt(a.length-1))?a+" *":a;return ub[a]=function(b){try{if(!(9==b.nodeType||e))throw"";var c=b.querySelectorAll(g);D?c.ra=m:c.H=m;return c}catch(f){return d(a,m)(b)}}}var n=a.split(/\s*,\s*/);return vb[a]=2>n.length?f(a):function(a){for(var b=0,c=[],d;d=n[b++];)c=c.concat(f(d)(a));return c}}function f(a){var b=xb(pa(a));if(1==b.length){var c=
e(b[0]);return function(a){if(a=c(a,[]))a.H=m;return a}}return function(a){for(var a=Z(a),c,d,f=b.length,sb,g,Qa=0;Qa<f;Qa++){g=[];c=b[Qa];d=a.length-1;0<d&&(sb={},g.H=m);d=e(c);for(var n=0;c=a[n];n++)d(c,g,sb);if(!g.length)break;a=g}return g}}function e(a){var b=yb[a.u];if(b)return b;var c=a.ha,c=c?c.I:"",d=i(a,{s:1}),e="*"==a.e,f=document.getElementsByClassName;if(c)f={s:1},e&&(f.e=1),d=i(a,f),"+"==c?b=j(d):"~"==c?b=h(d):">"==c&&(b=g(d));else if(a.id)d=!a.ja&&e?V:i(a,{s:1,id:1}),b=function(b,c){var e;
e=b?new J(9==b.nodeType?b:b.ownerDocument||b.document):eb||(eb=new J);var f=a.id;if(f=(e=y(f)?e.R.getElementById(f):f)&&d(e))if(!(f=9==b.nodeType)){for(f=e.parentNode;f&&!(f==b);)f=f.parentNode;f=!!f}if(f)return Z(e,c)};else if(f&&/\{\s*\[native code\]\s*\}/.test(""+f)&&a.j.length&&!wb)var d=i(a,{s:1,j:1,id:1}),n=a.j.join(" "),b=function(a,b){for(var c=Z(0,b),e,f=0,g=a.getElementsByClassName(n);e=g[f++];)d(e,a)&&c.push(e);return c};else!e&&!a.ja?b=function(b,c){for(var d=Z(0,c),e,f=0,g=b.getElementsByTagName(a.S());e=
g[f++];)d.push(e);return d}:(d=i(a,{s:1,e:1,id:1}),b=function(b,c){for(var e=Z(0,c),f,g=0,rc=b.getElementsByTagName(a.S());f=rc[g++];)d(f,b)&&e.push(f);return e});return yb[a.u]=b}function g(a){a=a||V;return function(b,d,e){for(var f=0,g=b[zb];b=g[f++];)aa(b)&&(!e||c(b,e))&&a(b,f)&&d.push(b);return d}}function h(a){return function(b,d,e){for(b=b[ba];b;){if(aa(b)){if(e&&!c(b,e))break;a(b)&&d.push(b)}b=b[ba]}return d}}function j(a){return function(b,d,e){for(;b=b[ba];)if(!sa||ra(b)){(!e||c(b,e))&&a(b)&&
d.push(b);break}return d}}function i(a,b){if(!a)return V;var b=b||{},c=p;b.s||(c=R(c,ra));b.e||"*"!=a.e&&(c=R(c,function(b){return b&&b.tagName==a.S()}));b.j||A(a.j,function(a,b){var d=RegExp("(?:^|\\s)"+a+"(?:\\s|$)");c=R(c,function(a){return d.test(a.className)});c.count=b});b.m||A(a.m,function(a){var b=a.name;Ra[b]&&(c=R(c,Ra[b](b,a.value)))});b.B||A(a.B,function(a){var b,d=a.Q;a.type&&Ab[a.type]?b=Ab[a.type](d,a.T):d.length&&(b=tc(d));b&&(c=R(c,b))});b.id||a.id&&(c=R(c,function(b){return!!b&&
b.id==a.id}));c||"default"in b||(c=V);return c}function l(a){return v(a)%2}function n(a){return!(v(a)%2)}function v(a){var b=a.parentNode,c=0,d=b[zb],e=a._i||-1,f=b._l||-1;if(!d)return-1;d=d.length;if(f==d&&0<=e&&0<=f)return e;b._l=d;e=-1;for(b=b.firstElementChild||b.firstChild;b;b=b[ba])aa(b)&&(b._i=++c,a===b&&(e=c));return e}function w(a){for(;a=a[ba];)if(aa(a))return q;return m}function Bb(a){for(;a=a[uc];)if(aa(a))return q;return m}function S(a,b){return!a?"":"class"==b?a.className||"":"for"==
b?a.htmlFor||"":"style"==b?a.style.cssText||"":(Q?a.getAttribute(b):a.getAttribute(b,2))||""}function ra(a){return 1==a.nodeType}function R(a,b){return!a?b:!b?a:function(){return a.apply(window,arguments)&&b.apply(window,arguments)}}function xb(a){function b(){0<=i&&(o.id=c(i,r).replace(/\\/g,""),i=-1);if(0<=j){var a=j==r?p:c(j,r);0>">~+".indexOf(a)?o.e=a:o.I=a;j=-1}0<=h&&(o.j.push(c(h+1,r).replace(/\\/g,"")),h=-1)}function c(b,d){return pa(a.slice(b,d))}for(var a=0<=">~+".indexOf(a.slice(-1))?a+
" * ":a+" ",d=[],e=-1,f=-1,g=-1,n=-1,h=-1,i=-1,j=-1,v="",l="",w,r=0,E=a.length,o=p,x=p;v=l,l=a.charAt(r),r<E;r++)if("\\"!=v)if(o||(w=r,o={u:p,m:[],B:[],j:[],e:p,I:p,id:p,S:function(){return Q?this.wa:this.e}},j=r),0<=e)if("]"==l){x.Q?x.T=c(g||e+1,r):x.Q=c(e+1,r);if((e=x.T)&&('"'==e.charAt(0)||"'"==e.charAt(0)))x.T=e.slice(1,-1);o.B.push(x);x=p;e=g=-1}else"="==l&&(g=0<="|~^$*".indexOf(v)?v:"",x.type=g+l,x.Q=c(e+1,r-g.length),g=r+1);else 0<=f?")"==l&&(0<=n&&(x.value=c(f+1,r)),n=f=-1):"#"==l?(b(),i=
r+1):"."==l?(b(),h=r):":"==l?(b(),n=r):"["==l?(b(),e=r,x={}):"("==l?(0<=n&&(x={name:c(n+1,r),value:p},o.m.push(x)),f=r):" "==l&&v!=l&&(b(),0<=n&&o.m.push({name:c(n+1,r)}),o.ja=o.m.length||o.B.length||o.j.length,o.Ba=o.u=c(w,r),o.wa=o.e=o.I?p:o.e||"*",o.e&&(o.e=o.e.toUpperCase()),d.length&&d[d.length-1].I&&(o.ha=d.pop(),o.u=o.ha.u+" "+o.u),d.push(o),o=p);return d}function Z(a,b){var c=b||[];a&&c.push(a);return c}var wb=G&&"BackCompat"==document.compatMode,zb=document.firstChild.children?"children":
"childNodes",Q=q,Ab={"*=":function(a,b){return function(c){return 0<=S(c,a).indexOf(b)}},"^=":function(a,b){return function(c){return 0==S(c,a).indexOf(b)}},"$=":function(a,b){return function(c){c=" "+S(c,a);return c.lastIndexOf(b)==c.length-b.length}},"~=":function(a,b){var c=" "+b+" ";return function(b){return 0<=(" "+S(b,a)+" ").indexOf(c)}},"|=":function(a,b){b=" "+b;return function(c){c=" "+S(c,a);return c==b||0==c.indexOf(b+"-")}},"=":function(a,b){return function(c){return S(c,a)==b}}},sa=
"undefined"==typeof document.firstChild.nextElementSibling,ba=!sa?"nextElementSibling":"nextSibling",uc=!sa?"previousElementSibling":"previousSibling",aa=sa?ra:V,Ra={checked:function(){return function(a){return a.checked||a.attributes.checked}},"first-child":function(){return Bb},"last-child":function(){return w},"only-child":function(){return function(a){return!Bb(a)||!w(a)?q:m}},empty:function(){return function(a){for(var b=a.childNodes,a=a.childNodes.length-1;0<=a;a--){var c=b[a].nodeType;if(1===
c||3==c)return q}return m}},contains:function(a,b){var c=b.charAt(0);if('"'==c||"'"==c)b=b.slice(1,-1);return function(a){return 0<=a.innerHTML.indexOf(b)}},not:function(a,b){var c=xb(b)[0],d={s:1};"*"!=c.e&&(d.e=1);c.j.length||(d.j=1);var e=i(c,d);return function(a){return!e(a)}},"nth-child":function(a,b){if("odd"==b)return l;if("even"==b)return n;if(-1!=b.indexOf("n")){var c=b.split("n",2),d=c[0]?"-"==c[0]?-1:parseInt(c[0],10):1,e=c[1]?parseInt(c[1],10):0,f=0,g=-1;0<d?0>e?e=e%d&&d+e%d:0<e&&(e>=
d&&(f=e-e%d),e%=d):0>d&&(d*=-1,0<e&&(g=e,e%=d));if(0<d)return function(a){a=v(a);return a>=f&&(0>g||a<=g)&&a%d==e};b=e}var h=parseInt(b,10);return function(a){return v(a)==h}}},tc=D?function(a){var b=a.toLowerCase();"class"==b&&(a="className");return function(c){return Q?c.getAttribute(a):c[a]||c[b]}}:function(a){return function(b){return b&&b.getAttribute&&b.hasAttribute(a)}},yb={},vb={},ub={},tb=!!document.querySelectorAll&&(!G||I("526")),E=0,sc=D?function(a){return Q?a.getAttribute("_uid")||a.setAttribute("_uid",
++E)||E:a.uniqueID}:function(a){return a._uid||(a._uid=++E)};a.m=Ra;return a}();ca("goog.dom.query",Qb);ca("goog.dom.query.pseudos",Qb.m);function Rb(a,b,c){this.g=a;this.q=b;this.d=c;this.A=[];this.r=[];this.f=this.g.getContext("2d");this.o=m;var d=this;T(this.g,"mousemove",function(a){if(d.o){var b=Sb(d,a.offsetX,a.offsetY);b?d.c?d.c!=b&&(d.o=q,Tb(d.q)):(d.c=b,W(d),d.d.fireEvent(Ub,{annotation:d.c,U:a})):d.c&&(d.o=q,Tb(d.q))}else d.w=a});X(c,Y,function(){delete d.c;d.o=m});X(c,Vb,function(){if(!d.o&&d.w){var a=d.c;d.c=Sb(d,d.w.offsetX,d.w.offsetY);d.o=m;a!=d.c?(W(d),d.d.fireEvent(Wb,{annotation:a,U:d.w}),d.d.fireEvent(Ub,{annotation:d.c,
U:d.w})):d.c&&Xb(d.q)}else W(d)})}function Yb(a,b){a.A.push(b);var c=b.l[0];"pixel"!=c.Ca&&(c=oa(c,function(b){return a.d.ua(b)}));a.r[z(b)]=c;Zb(a,c)}function Sb(a,b,c){a=$b(a,b,c);if(0<a.length)return a[0]}
function $b(a,b,c){var d=[];A(a.A,function(f){var e;var g=a.r[z(f)];if("rect"==g.type)e=b<g.a.x||c<g.a.y||b>g.a.x+g.a.width||c>g.a.y+g.a.height?q:m;else if("polygon"==g.type){e=q;for(var h=g.a.J,j=g=g.a.J.length-1,i=0;i<g;i++){if(h[i].y<c&&h[j].y>=c||h[j].y<c&&h[i].y>=c)h[i].x+(c-h[i].y)/(h[j].y-h[i].y)*(h[j].x-h[i].x)<b&&(e=!e);j=i}}else e=q;e&&d.push(f)});Ha(d,function(a,b){return("rect"==a.l[0].type?a.l[0].a.width*a.l[0].a.height:0)>("rect"==b.l[0].type?b.l[0].a.width*b.l[0].a.height:0)});return d}
function Zb(a,b,c){Ba(a.d.va(),function(){return"rect"==b.type})?ac(a.f,b,c):console.log("WARNING unsupported shape type: "+b.type)}function W(a){a.f.clearRect(0,0,a.g.width,a.g.height);A(a.A,function(b){Zb(a,a.r[z(b)])});if(a.c){var b=a.r[z(a.c)];Zb(a,b,m);b=na(b);a.q.show(a.c,{x:b.x,y:b.y+b.height+5})}};function bc(a,b,c){y(b)?cc(a,c,b):jb(b,ha(cc,a))}function cc(a,b,c){a.style[za(c)]=b}function dc(a,b,c){var d=F&&(Ma||Va)&&I("1.9");a.style.left=ec(b,d);a.style.top=ec(c,d)}function fc(a,b,c){if(c==k)throw Error("missing height argument");a.style.width=ec(b,m);a.style.height=ec(c,m)}function ec(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function gc(a,b){var c=a.style;"opacity"in c?c.opacity=b:"MozOpacity"in c?c.MozOpacity=b:"filter"in c&&(c.filter=""===b?"":"alpha(opacity="+100*b+")")}function hc(a,b){a.style.display=b?"":"none"};function ic(a,b){function c(c){var c=c.relatedTarget,d;if(!(d=!c||Cb(e,c)))if(d=Cb(b.editor.element[0],c))d=b.editor.annotation,d=!d?q:d.url==a.src;return d||Cb(b.viewer.element[0],c)&&jc(h)?m:q}var d=kc(b.element[0].firstChild),f=new lc,e=ob("div","yuma-annotationlayer");bc(e,"position","relative");fc(e,a.width,a.height);rb(e,a);e.appendChild(a);var g=Db(mc,{width:a.width,height:a.height});e.appendChild(g);var h=new nc(a,f,b,d),j=Db(mc,{width:a.width,height:a.height});hc(j,q);e.appendChild(j);var i=
new oc;i.t(j,f);var l=new Rb(g,h,f);new pc(f,e);f.ma=function(a){return a};f.ua=function(a){return a};f.va=function(){return[i]};T(e,"mouseover",function(a){c(a)||f.fireEvent(qc)});T(e,"mouseout",function(a){c(a)||f.fireEvent(Y)});vc(h,function(a){c(a)||f.fireEvent(qc)});wc(h,function(a){c(a)||f.fireEvent(Y)});T(g,"mousedown",function(a){hc(j,m);l.c=k;Tb(l.q);W(l);var b=a.offsetX,a=a.offsetY;i.N=m;i.K();i.b=new ja(b,a);i.d.fireEvent(xc,{offsetX:b,offsetY:a});bc(document.body,"-webkit-user-select",
"none")});X(f,qc,function(){b.clearViewerHideTimer();gc(g,1)});X(f,Y,function(){gc(g,0.4)});X(f,yc,function(c){var e={url:a.src,l:[c.shape]};b.publish("beforeAnnotationCreated",e);var f=kc(a),g=c.shape.a,c=g.x+f.left-d.left+16,f=g.y+g.height+f.top+window.pageYOffset-d.top+5;b.showEditor(e,{top:window.pageYOffset-d.top,left:0});dc(b.editor.element[0],c,f)});X(f,zc,function(){hc(j,q);Ac(i)});b.viewer.on("edit",function(c){if(c.url==a.src){hc(j,m);l.c=k;Tb(l.q);W(l);var e=kc(a),f=c.l[0].a,c=f.x+e.left-
d.left+16,e=f.y+f.height+e.top-d.top+window.pageYOffset+5;dc(b.editor.element[0],0,window.pageYOffset-d.top);b.editor.show();dc(b.editor.element[0],c,e)}});b.subscribe("annotationCreated",function(b){b.url==a.src&&(Ac(i),b.url==a.src&&Yb(l,b))});b.subscribe("annotationsLoaded",function(b){A(b,function(b){b.url==a.src&&Yb(l,b)})});b.subscribe("annotationDeleted",function(b){b.url==a.src&&(b==l.c&&delete l.c,Ca(l.A,b),delete l.r[z(b)],W(l));f.fireEvent(Vb)});b.subscribe("annotationEditorHidden",function(){hc(j,
q);Ac(i);f.fireEvent(Vb)})}window.Annotator.Plugin.AnnotoriousImagePlugin=function(){function a(a){this.na=a}a.prototype.pluginInit=function(){var a=this;A(this.na.getElementsByTagName("img"),function(c){new ic(c,a.annotator)})};return a}();function nc(a,b,c,d){this.Y=a;this.oa=b;this.h=c;this.L=d;this.M=q;this.ba=[];this.aa=[];var f=this;T(this.h.viewer.element[0],"mouseover",function(a){jc(f)&&(Xb(f),A(f.ba,function(b){b(a)}))});T(this.h.viewer.element[0],"mouseout",function(a){jc(f)&&(c.clearViewerHideTimer(),Tb(f),A(f.aa,function(b){b(a)}))})}function jc(a){var b=a.h.viewer.annotations;return!b||1>b.length?q:b[0].url==a.Y.src}function vc(a,b){a.ba.push(b)}function wc(a,b){a.aa.push(b)}
function Tb(a){0<=Aa(gb(a.h.viewer.element[0]),"annotator-hide")||(a.M=q,a.z||(a.z=window.setTimeout(function(){a.oa.fireEvent(Vb);!a.M&&jc(a)&&(hb(a.h.viewer.element[0],"annotator-hide"),a.h.viewer.annotations=[],delete a.z)},300)))}function Xb(a){a.M=m;a.z&&(window.clearTimeout(a.z),delete a.z)}
nc.prototype.show=function(a,b){ib(this.h.viewer.element[0],"annotator-hide");var c=kc(this.Y);dc(this.h.viewer.element[0],0,window.pageYOffset-this.L.top);this.h.viewer.load([a]);dc(this.h.viewer.element[0],c.left-this.L.left+b.x+16,c.top+window.pageYOffset-this.L.top+b.y);Xb(this)};function oc(){}oc.prototype.t=function(a,b){this.g=a;this.d=b;this.f=a.getContext("2d");this.f.lineWidth=1;this.N=q};
oc.prototype.K=function(){var a=this;this.P=T(this.g,"mousemove",function(b){if(a.N){a.i={x:b.offsetX,y:b.offsetY};a.f.clearRect(0,0,a.g.width,a.g.height);var b=a.i.x-a.b.x,c=a.i.y-a.b.y;a.f.strokeStyle="#000000";a.f.strokeRect(a.b.x+0.5,a.b.y+0.5,b,c);a.f.strokeStyle="#ffffff";0<b&&0<c?a.f.strokeRect(a.b.x+1.5,a.b.y+1.5,b-2,c-2):0<b&&0>c?a.f.strokeRect(a.b.x+1.5,a.b.y-0.5,b-2,c+2):0>b&&0>c?a.f.strokeRect(a.b.x-0.5,a.b.y-0.5,b+2,c+2):a.f.strokeRect(a.b.x-0.5,a.b.y+1.5,b+2,c-2)}});this.$=T(this.g,
"mouseup",function(b){a.N=q;var c;if(a.i){var d=Bc(a);c=a.d.ma({x:d.left,y:d.top});d=a.d.ma({x:d.right-1,y:d.bottom-1});c=new ma("rect",new la(c.x,c.y,d.x-c.x,d.y-c.y))}else c=k;c?a.d.fireEvent(yc,{U:b,shape:c,Da:Bc(a)}):a.d.fireEvent(zc)})};oc.prototype.W=function(){this.P&&(U(this.P),delete this.P);this.$&&(U(this.$),delete this.za)};function Ac(a){a.W();a.f.clearRect(0,0,a.g.width,a.g.height);bc(document.body,"-webkit-user-select","auto");delete a.i}
function Bc(a){var b,c;a.i.x>a.b.x?(b=a.i.x,c=a.b.x):(b=a.b.x,c=a.i.x);var d;a.i.y>a.b.y?(d=a.b.y,a=a.i.y):(d=a.i.y,a=a.b.y);return{top:d,right:b,bottom:a,left:c}}function ac(a,b,c){if("rect"==b.type){var d;c?(c="#fff000",d=1.2):(c="#ffffff",d=1);b=b.a;a.strokeStyle="#000000";a.lineWidth=d;a.strokeRect(b.x+0.5,b.y+0.5,b.width+1,b.height+1);a.strokeStyle=c;a.strokeRect(b.x+1.5,b.y+1.5,b.width-1,b.height-1)}};function kc(a){for(var b=0,c=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)b+=a.offsetLeft-a.scrollLeft,c+=a.offsetTop-a.scrollTop,a=a.offsetParent;return{top:c,left:b}};function lc(){this.p=[]}function X(a,b,c){a.p[b]||(a.p[b]=[]);a.p[b].push(c)}lc.prototype.fireEvent=function(a,b){var c=this.p[a];c&&A(c,function(a){a(b)})};var qc="onMouseOverItem",Y="onMouseOutOfItem",Ub="onMouseOverAnnotation",Wb="onMouseOutOfAnnotation",xc="onSelectionStarted",zc="onSelectionCanceled",yc="onSelectionCompleted",Vb="beforePopupHide";function pc(a,b){var c=this;this.element=Db(Cc);this.d=a;this.Z=Qb(".annotorious-hint-msg",this.element)[0];this.X=Qb(".annotorious-hint-icon",this.element)[0];this.da=function(){c.show()};this.ca=function(){Dc(c)};this.K();Dc(this);b.appendChild(this.element)}pc.prototype.K=function(){var a=this;this.qa=T(this.X,"mouseover",function(){a.show();window.clearTimeout(a.O)});this.pa=T(this.X,"mouseout",function(){Dc(a)});X(this.d,qc,this.da);X(this.d,Y,this.ca)};
pc.prototype.W=function(){U(this.qa);U(this.pa);var a=this.d.p[qc];a&&Ca(a,this.da);(a=this.d.p[Y])&&Ca(a,this.ca)};pc.prototype.show=function(){window.clearTimeout(this.O);gc(this.Z,0.8);var a=this;this.O=window.setTimeout(function(){Dc(a)},3E3)};function Dc(a){window.clearTimeout(a.O);gc(a.Z,0)};D&&I(8);"ScriptEngine"in t&&"JScript"==t.ScriptEngine()&&(t.ScriptEngineMajorVersion(),t.ScriptEngineMinorVersion(),t.ScriptEngineBuildVersion());function Ec(a){return"object"===typeof a&&a&&0===a.Aa?a.content:(""+a).replace(Fc,Gc)}var Hc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\u000c":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function Gc(a){return Hc[a]}var Fc=/[\x00\x22\x26\x27\x3c\x3e]/g;function Cc(){return'<div class="annotorious-hint" style="white-space:nowrap; position:absolute; top:0px; left:0px; pointer-events:none;"><div class="annotorious-hint-msg annotorious-opacity-fade">Click and Drag to Annotate</div><div class="annotorious-hint-icon" style="pointer-events:auto"></div></div>'};function mc(a){return'<canvas class="annotorious-opacity-fade" style="position:absolute; top:0px; left:0px; width:'+Ec(a.width)+"px; height:"+Ec(a.height)+'px;" width="'+Ec(a.width)+'" height="'+Ec(a.height)+'"></canvas>'};
