const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CProgrammingIndex-DzLlHtoK.js","assets/MainLayout.vue_vue_type_style_index_0_lang-ORDhMWYV.js","assets/MainLayout-DOIhJtcZ.css","assets/IntroductionIndex-BMcrvjOV.js","assets/UsefulLinks.vue_vue_type_script_setup_true_lang-DcQZ-P6n.js","assets/UsefulLinks-D7rm6jtc.css","assets/OutputBlock-L_BYpPAK.js","assets/OutputBlock-DLtQWbVZ.css","assets/CompilationProcessIndex-BKGvKnMN.js","assets/IdentifiersIndex-C-ovSbOz.js","assets/IdentifiersIndex-yD7ddLFA.css","assets/KeywordsIndex-AICnlZGo.js","assets/KeywordsIndex-CGuMYKw8.css","assets/VariablesIndex-CIJWWrPz.js","assets/DataTypeIndex-DzPjePyG.js","assets/QuizOneIndex-B-p2KZZM.js","assets/InputAndOutputIndex-BiXQTLAN.js","assets/OperatorsIndex-DSdOhjSQ.js","assets/QuizTwoIndex-WK36X6P5.js","assets/ConditionalStatementsIndex-D7x4Ao9f.js","assets/LoopsIndex-DBMG_0Et.js","assets/QuizThreeIndex-BJZ1kuN9.js","assets/LoginIndex-Bd_Dh8mh.js","assets/LoginIndex-C-ymjigd.css","assets/DashboardIndex-DEfH1mDb.js","assets/MainLayout.vue_vue_type_style_index_0_lang-aD109F3i.js","assets/useThemeStore-BI_Bm76I.js","assets/MainLayout-8ZLcnXjI.css","assets/MemoryListIndex-DaOlZqjv.js","assets/storageUtils-31qm0YYO.js","assets/useMemoriesStore-DPyh1fRy.js","assets/MemoryListIndex-CtxJ-zIk.css","assets/DetailsIndex-DprL5pun.js","assets/DetailsIndex-0yvoXKcq.css","assets/NewMemoryIndex-BIBOP9uN.js","assets/PortfolioIndex-CWXWHslO.js","assets/PortfolioIndex-B8Au0Qul.css","assets/BlogIndex-Dc16GMGQ.js","assets/BlogIndex-Cx_9sonR.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var sf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sc={exports:{}},of;function LE(){return of||(of=1,(function(t){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=(function(r){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,o={},c={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function S(P){return P instanceof l?new l(P.type,S(P.content),P.alias):Array.isArray(P)?P.map(S):P.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(S){return Object.prototype.toString.call(S).slice(8,-1)},objId:function(S){return S.__id||Object.defineProperty(S,"__id",{value:++i}),S.__id},clone:function S(P,C){C=C||{};var L,M;switch(c.util.type(P)){case"Object":if(M=c.util.objId(P),C[M])return C[M];L={},C[M]=L;for(var v in P)P.hasOwnProperty(v)&&(L[v]=S(P[v],C));return L;case"Array":return M=c.util.objId(P),C[M]?C[M]:(L=[],C[M]=L,P.forEach(function(y,m){L[m]=S(y,C)}),L);default:return P}},getLanguage:function(S){for(;S;){var P=s.exec(S.className);if(P)return P[1].toLowerCase();S=S.parentElement}return"none"},setLanguage:function(S,P){S.className=S.className.replace(RegExp(s,"gi"),""),S.classList.add("language-"+P)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(L){var S=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(L.stack)||[])[1];if(S){var P=document.getElementsByTagName("script");for(var C in P)if(P[C].src==S)return P[C]}return null}},isActive:function(S,P,C){for(var L="no-"+P;S;){var M=S.classList;if(M.contains(P))return!0;if(M.contains(L))return!1;S=S.parentElement}return!!C}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(S,P){var C=c.util.clone(c.languages[S]);for(var L in P)C[L]=P[L];return C},insertBefore:function(S,P,C,L){L=L||c.languages;var M=L[S],v={};for(var y in M)if(M.hasOwnProperty(y)){if(y==P)for(var m in C)C.hasOwnProperty(m)&&(v[m]=C[m]);C.hasOwnProperty(y)||(v[y]=M[y])}var I=L[S];return L[S]=v,c.languages.DFS(c.languages,function(A,b){b===I&&A!=S&&(this[A]=v)}),v},DFS:function S(P,C,L,M){M=M||{};var v=c.util.objId;for(var y in P)if(P.hasOwnProperty(y)){C.call(P,y,P[y],L||y);var m=P[y],I=c.util.type(m);I==="Object"&&!M[v(m)]?(M[v(m)]=!0,S(m,C,null,M)):I==="Array"&&!M[v(m)]&&(M[v(m)]=!0,S(m,C,y,M))}}},plugins:{},highlightAll:function(S,P){c.highlightAllUnder(document,S,P)},highlightAllUnder:function(S,P,C){var L={callback:C,container:S,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run("before-highlightall",L),L.elements=Array.prototype.slice.apply(L.container.querySelectorAll(L.selector)),c.hooks.run("before-all-elements-highlight",L);for(var M=0,v;v=L.elements[M++];)c.highlightElement(v,P===!0,L.callback)},highlightElement:function(S,P,C){var L=c.util.getLanguage(S),M=c.languages[L];c.util.setLanguage(S,L);var v=S.parentElement;v&&v.nodeName.toLowerCase()==="pre"&&c.util.setLanguage(v,L);var y=S.textContent,m={element:S,language:L,grammar:M,code:y};function I(b){m.highlightedCode=b,c.hooks.run("before-insert",m),m.element.innerHTML=m.highlightedCode,c.hooks.run("after-highlight",m),c.hooks.run("complete",m),C&&C.call(m.element)}if(c.hooks.run("before-sanity-check",m),v=m.element.parentElement,v&&v.nodeName.toLowerCase()==="pre"&&!v.hasAttribute("tabindex")&&v.setAttribute("tabindex","0"),!m.code){c.hooks.run("complete",m),C&&C.call(m.element);return}if(c.hooks.run("before-highlight",m),!m.grammar){I(c.util.encode(m.code));return}if(P&&r.Worker){var A=new Worker(c.filename);A.onmessage=function(b){I(b.data)},A.postMessage(JSON.stringify({language:m.language,code:m.code,immediateClose:!0}))}else I(c.highlight(m.code,m.grammar,m.language))},highlight:function(S,P,C){var L={code:S,grammar:P,language:C};if(c.hooks.run("before-tokenize",L),!L.grammar)throw new Error('The language "'+L.language+'" has no grammar.');return L.tokens=c.tokenize(L.code,L.grammar),c.hooks.run("after-tokenize",L),l.stringify(c.util.encode(L.tokens),L.language)},tokenize:function(S,P){var C=P.rest;if(C){for(var L in C)P[L]=C[L];delete P.rest}var M=new p;return g(M,M.head,S),f(S,M,P,M.head,0),k(M)},hooks:{all:{},add:function(S,P){var C=c.hooks.all;C[S]=C[S]||[],C[S].push(P)},run:function(S,P){var C=c.hooks.all[S];if(!(!C||!C.length))for(var L=0,M;M=C[L++];)M(P)}},Token:l};r.Prism=c;function l(S,P,C,L){this.type=S,this.content=P,this.alias=C,this.length=(L||"").length|0}l.stringify=function S(P,C){if(typeof P=="string")return P;if(Array.isArray(P)){var L="";return P.forEach(function(I){L+=S(I,C)}),L}var M={type:P.type,content:S(P.content,C),tag:"span",classes:["token",P.type],attributes:{},language:C},v=P.alias;v&&(Array.isArray(v)?Array.prototype.push.apply(M.classes,v):M.classes.push(v)),c.hooks.run("wrap",M);var y="";for(var m in M.attributes)y+=" "+m+'="'+(M.attributes[m]||"").replace(/"/g,"&quot;")+'"';return"<"+M.tag+' class="'+M.classes.join(" ")+'"'+y+">"+M.content+"</"+M.tag+">"};function u(S,P,C,L){S.lastIndex=P;var M=S.exec(C);if(M&&L&&M[1]){var v=M[1].length;M.index+=v,M[0]=M[0].slice(v)}return M}function f(S,P,C,L,M,v){for(var y in C)if(!(!C.hasOwnProperty(y)||!C[y])){var m=C[y];m=Array.isArray(m)?m:[m];for(var I=0;I<m.length;++I){if(v&&v.cause==y+","+I)return;var A=m[I],b=A.inside,T=!!A.lookbehind,ge=!!A.greedy,xe=A.alias;if(ge&&!A.pattern.global){var Ae=A.pattern.toString().match(/[imsuy]*$/)[0];A.pattern=RegExp(A.pattern.source,Ae+"g")}for(var ue=A.pattern||A,ie=L.next,Le=M;ie!==P.tail&&!(v&&Le>=v.reach);Le+=ie.value.length,ie=ie.next){var at=ie.value;if(P.length>S.length)return;if(!(at instanceof l)){var nt=1,Pe;if(ge){if(Pe=u(ue,Le,S,T),!Pe||Pe.index>=S.length)break;var ze=Pe.index,Kt=Pe.index+Pe[0].length,Qe=Le;for(Qe+=ie.value.length;ze>=Qe;)ie=ie.next,Qe+=ie.value.length;if(Qe-=ie.value.length,Le=Qe,ie.value instanceof l)continue;for(var Ct=ie;Ct!==P.tail&&(Qe<Kt||typeof Ct.value=="string");Ct=Ct.next)nt++,Qe+=Ct.value.length;nt--,at=S.slice(Le,Qe),Pe.index-=Le}else if(Pe=u(ue,0,at,T),!Pe)continue;var ze=Pe.index,U=Pe[0],Y=at.slice(0,ze),Q=at.slice(ze+U.length),te=Le+at.length;v&&te>v.reach&&(v.reach=te);var ve=ie.prev;Y&&(ve=g(P,ve,Y),Le+=Y.length),E(P,ve,nt);var w=new l(y,b?c.tokenize(U,b):U,xe,U);if(ie=g(P,ve,w),Q&&g(P,ie,Q),nt>1){var R={cause:y+","+I,reach:te};f(S,P,C,ie.prev,Le,R),v&&R.reach>v.reach&&(v.reach=R.reach)}}}}}}function p(){var S={value:null,prev:null,next:null},P={value:null,prev:S,next:null};S.next=P,this.head=S,this.tail=P,this.length=0}function g(S,P,C){var L=P.next,M={value:C,prev:P,next:L};return P.next=M,L.prev=M,S.length++,M}function E(S,P,C){for(var L=P.next,M=0;M<C&&L!==S.tail;M++)L=L.next;P.next=L,L.prev=P,S.length-=M}function k(S){for(var P=[],C=S.head.next;C!==S.tail;)P.push(C.value),C=C.next;return P}if(!r.document)return r.addEventListener&&(c.disableWorkerMessageHandler||r.addEventListener("message",function(S){var P=JSON.parse(S.data),C=P.language,L=P.code,M=P.immediateClose;r.postMessage(c.highlight(L,c.languages[C],C)),M&&r.close()},!1)),c;var V=c.util.currentScript();V&&(c.filename=V.src,V.hasAttribute("data-manual")&&(c.manual=!0));function N(){c.manual||c.highlightAll()}if(!c.manual){var F=document.readyState;F==="loading"||F==="interactive"&&V&&V.defer?document.addEventListener("DOMContentLoaded",N):window.requestAnimationFrame?window.requestAnimationFrame(N):window.setTimeout(N,16)}return c})(e);t.exports&&(t.exports=n),typeof sf<"u"&&(sf.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(s,i){var o={};o["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[i]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var c={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};c["language-"+i]={pattern:/[\s\S]+/,inside:n.languages[i]};var l={};l[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:c},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,s){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:n.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(r){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var i=r.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,(function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",s=function(V,N){return"✖ Error "+V+" while fetching file: "+N},i="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},c="data-src-status",l="loading",u="loaded",f="failed",p="pre[data-src]:not(["+c+'="'+u+'"]):not(['+c+'="'+l+'"])';function g(V,N,F){var S=new XMLHttpRequest;S.open("GET",V,!0),S.onreadystatechange=function(){S.readyState==4&&(S.status<400&&S.responseText?N(S.responseText):S.status>=400?F(s(S.status,S.statusText)):F(i))},S.send(null)}function E(V){var N=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(V||"");if(N){var F=Number(N[1]),S=N[2],P=N[3];return S?P?[F,Number(P)]:[F,void 0]:[F,F]}}n.hooks.add("before-highlightall",function(V){V.selector+=", "+p}),n.hooks.add("before-sanity-check",function(V){var N=V.element;if(N.matches(p)){V.code="",N.setAttribute(c,l);var F=N.appendChild(document.createElement("CODE"));F.textContent=r;var S=N.getAttribute("data-src"),P=V.language;if(P==="none"){var C=(/\.(\w+)$/.exec(S)||[,"none"])[1];P=o[C]||C}n.util.setLanguage(F,P),n.util.setLanguage(N,P);var L=n.plugins.autoloader;L&&L.loadLanguages(P),g(S,function(M){N.setAttribute(c,u);var v=E(N.getAttribute("data-range"));if(v){var y=M.split(/\r\n?|\n/g),m=v[0],I=v[1]==null?y.length:v[1];m<0&&(m+=y.length),m=Math.max(0,Math.min(m-1,y.length)),I<0&&(I+=y.length),I=Math.max(0,Math.min(I,y.length)),M=y.slice(m,I).join(`
`),N.hasAttribute("data-start")||N.setAttribute("data-start",String(m+1))}F.textContent=M,n.highlightElement(F)},function(M){N.setAttribute(c,f),F.textContent=M})}}),n.plugins.fileHighlight={highlight:function(N){for(var F=(N||document).querySelectorAll(p),S=0,P;P=F[S++];)n.highlightElement(P)}};var k=!1;n.fileHighlight=function(){k||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),k=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(Sc)),Sc.exports}var ME=LE();const hk=xE(ME);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},fs=[],un=()=>{},zp=()=>!1,Ca=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gl=t=>t.startsWith("onUpdate:"),ot=Object.assign,Ql=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},FE=Object.prototype.hasOwnProperty,Re=(t,e)=>FE.call(t,e),se=Array.isArray,ds=t=>Xi(t)==="[object Map]",ka=t=>Xi(t)==="[object Set]",af=t=>Xi(t)==="[object Date]",fe=t=>typeof t=="function",Ge=t=>typeof t=="string",Yt=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",Wp=t=>(ke(t)||fe(t))&&fe(t.then)&&fe(t.catch),Kp=Object.prototype.toString,Xi=t=>Kp.call(t),UE=t=>Xi(t).slice(8,-1),Gp=t=>Xi(t)==="[object Object]",Xl=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fi=Kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Da=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},BE=/-\w/g,Wt=Da(t=>t.replace(BE,e=>e.slice(1).toUpperCase())),$E=/\B([A-Z])/g,Er=Da(t=>t.replace($E,"-$1").toLowerCase()),Na=Da(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pc=Da(t=>t?`on${Na(t)}`:""),nr=(t,e)=>!Object.is(t,e),xo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Qp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},rl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},jE=t=>{const e=Ge(t)?Number(t):NaN;return isNaN(e)?t:e};let cf;const Oa=()=>cf||(cf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yl(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ge(r)?WE(r):Yl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ge(t)||ke(t))return t}const qE=/;(?![^(]*\))/g,HE=/:([^]+)/,zE=/\/\*[^]*?\*\//g;function WE(t){const e={};return t.replace(zE,"").split(qE).forEach(n=>{if(n){const r=n.split(HE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Jl(t){let e="";if(Ge(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=Jl(t[n]);r&&(e+=r+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const KE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",GE=Kl(KE);function Xp(t){return!!t||t===""}function QE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Va(t[r],e[r]);return n}function Va(t,e){if(t===e)return!0;let n=af(t),r=af(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Yt(t),r=Yt(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?QE(t,e):!1;if(n=ke(t),r=ke(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Va(t[o],e[o]))return!1}}return String(t)===String(e)}function Yp(t,e){return t.findIndex(n=>Va(n,e))}const Jp=t=>!!(t&&t.__v_isRef===!0),XE=t=>Ge(t)?t:t==null?"":se(t)||ke(t)&&(t.toString===Kp||!fe(t.toString))?Jp(t)?XE(t.value):JSON.stringify(t,Zp,2):String(t),Zp=(t,e)=>Jp(e)?Zp(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Cc(r,i)+" =>"]=s,n),{})}:ka(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Cc(n))}:Yt(e)?Cc(e):ke(e)&&!se(e)&&!Gp(e)?String(e):e,Cc=(t,e="")=>{var n;return Yt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class eg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){++this._on===1&&(this.prevScope=_t,_t=this)}off(){this._on>0&&--this._on===0&&(_t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function tg(t){return new eg(t)}function ng(){return _t}function YE(t,e=!1){_t&&_t.cleanups.push(t)}let Oe;const kc=new WeakSet;class rg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&_t.active&&_t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,kc.has(this)&&(kc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ig(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lf(this),og(this);const e=Oe,n=Xt;Oe=this,Xt=!0;try{return this.fn()}finally{ag(this),Oe=e,Xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)tu(e);this.deps=this.depsTail=void 0,lf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?kc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){sl(this)&&this.run()}get dirty(){return sl(this)}}let sg=0,di,pi;function ig(t,e=!1){if(t.flags|=8,e){t.next=pi,pi=t;return}t.next=di,di=t}function Zl(){sg++}function eu(){if(--sg>0)return;if(pi){let e=pi;for(pi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;di;){let e=di;for(di=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function og(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ag(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),tu(r),JE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function sl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(cg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function cg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ci)||(t.globalVersion=Ci,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!sl(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=Xt;Oe=t,Xt=!0;try{og(t);const s=t.fn(t._value);(e.version===0||nr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,Xt=r,ag(t),t.flags&=-3}}function tu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)tu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function JE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Xt=!0;const lg=[];function kn(){lg.push(Xt),Xt=!1}function Dn(){const t=lg.pop();Xt=t===void 0?!0:t}function lf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let Ci=0;class ZE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Oe||!Xt||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new ZE(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,ug(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,Ci++,this.notify(e)}notify(e){Zl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{eu()}}}function ug(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ug(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Yo=new WeakMap,Fr=Symbol(""),il=Symbol(""),ki=Symbol("");function Et(t,e,n){if(Xt&&Oe){let r=Yo.get(t);r||Yo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new nu),s.map=r,s.key=n),s.track()}}function Rn(t,e,n,r,s,i){const o=Yo.get(t);if(!o){Ci++;return}const c=l=>{l&&l.trigger()};if(Zl(),e==="clear")o.forEach(c);else{const l=se(t),u=l&&Xl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===ki||!Yt(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(ki)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Fr)),ds(t)&&c(o.get(il)));break;case"delete":l||(c(o.get(Fr)),ds(t)&&c(o.get(il)));break;case"set":ds(t)&&c(o.get(Fr));break}}eu()}function ev(t,e){const n=Yo.get(t);return n&&n.get(e)}function rs(t){const e=Ie(t);return e===t?e:(Et(e,"iterate",ki),Ht(t)?e:e.map(ut))}function xa(t){return Et(t=Ie(t),"iterate",ki),t}const tv={__proto__:null,[Symbol.iterator](){return Dc(this,Symbol.iterator,ut)},concat(...t){return rs(this).concat(...t.map(e=>se(e)?rs(e):e))},entries(){return Dc(this,"entries",t=>(t[1]=ut(t[1]),t))},every(t,e){return Tn(this,"every",t,e,void 0,arguments)},filter(t,e){return Tn(this,"filter",t,e,n=>n.map(ut),arguments)},find(t,e){return Tn(this,"find",t,e,ut,arguments)},findIndex(t,e){return Tn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tn(this,"findLast",t,e,ut,arguments)},findLastIndex(t,e){return Tn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Nc(this,"includes",t)},indexOf(...t){return Nc(this,"indexOf",t)},join(t){return rs(this).join(t)},lastIndexOf(...t){return Nc(this,"lastIndexOf",t)},map(t,e){return Tn(this,"map",t,e,void 0,arguments)},pop(){return ti(this,"pop")},push(...t){return ti(this,"push",t)},reduce(t,...e){return uf(this,"reduce",t,e)},reduceRight(t,...e){return uf(this,"reduceRight",t,e)},shift(){return ti(this,"shift")},some(t,e){return Tn(this,"some",t,e,void 0,arguments)},splice(...t){return ti(this,"splice",t)},toReversed(){return rs(this).toReversed()},toSorted(t){return rs(this).toSorted(t)},toSpliced(...t){return rs(this).toSpliced(...t)},unshift(...t){return ti(this,"unshift",t)},values(){return Dc(this,"values",ut)}};function Dc(t,e,n){const r=xa(t),s=r[e]();return r!==t&&!Ht(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const nv=Array.prototype;function Tn(t,e,n,r,s,i){const o=xa(t),c=o!==t&&!Ht(t),l=o[e];if(l!==nv[e]){const p=l.apply(t,i);return c?ut(p):p}let u=n;o!==t&&(c?u=function(p,g){return n.call(this,ut(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function uf(t,e,n,r){const s=xa(t);let i=n;return s!==t&&(Ht(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ut(c),l,t)}),s[e](i,...r)}function Nc(t,e,n){const r=Ie(t);Et(r,"iterate",ki);const s=r[e](...n);return(s===-1||s===!1)&&iu(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function ti(t,e,n=[]){kn(),Zl();const r=Ie(t)[e].apply(t,n);return eu(),Dn(),r}const rv=Kl("__proto__,__v_isRef,__isVue"),hg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yt));function sv(t){Yt(t)||(t=String(t));const e=Ie(this);return Et(e,"has",t),e.hasOwnProperty(t)}class fg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?pv:mg:i?gg:pg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){let l;if(o&&(l=tv[n]))return l;if(n==="hasOwnProperty")return sv}const c=Reflect.get(e,n,Ke(e)?e:r);if((Yt(n)?hg.has(n):rv(n))||(s||Et(e,"get",n),i))return c;if(Ke(c)){const l=o&&Xl(n)?c:c.value;return s&&ke(l)?al(l):l}return ke(c)?s?al(c):Yi(c):c}}class dg extends fg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ur(i);if(!Ht(r)&&!ur(r)&&(i=Ie(i),r=Ie(r)),!se(e)&&Ke(i)&&!Ke(r))return l||(i.value=r),!0}const o=se(e)&&Xl(n)?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,Ke(e)?e:s);return e===Ie(s)&&(o?nr(r,i)&&Rn(e,"set",n,r):Rn(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Yt(n)||!hg.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",se(e)?"length":Fr),Reflect.ownKeys(e)}}class iv extends fg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ov=new dg,av=new iv,cv=new dg(!0);const ol=t=>t,wo=t=>Reflect.getPrototypeOf(t);function lv(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=ds(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?ol:e?Jo:ut;return!e&&Et(i,"iterate",l?il:Fr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Io(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function uv(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);t||(nr(s,c)&&Et(o,"get",s),Et(o,"get",c));const{has:l}=wo(o),u=e?ol:t?Jo:ut;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Ie(s),"iterate",Fr),s.size},has(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);return t||(nr(s,c)&&Et(o,"has",s),Et(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ie(c),u=e?ol:t?Jo:ut;return!t&&Et(l,"iterate",Fr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return ot(n,t?{add:Io("add"),set:Io("set"),delete:Io("delete"),clear:Io("clear")}:{add(s){!e&&!Ht(s)&&!ur(s)&&(s=Ie(s));const i=Ie(this);return wo(i).has.call(i,s)||(i.add(s),Rn(i,"add",s,s)),this},set(s,i){!e&&!Ht(i)&&!ur(i)&&(i=Ie(i));const o=Ie(this),{has:c,get:l}=wo(o);let u=c.call(o,s);u||(s=Ie(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?nr(i,f)&&Rn(o,"set",s,i):Rn(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:c}=wo(i);let l=o.call(i,s);l||(s=Ie(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Rn(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&Rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=lv(s,t,e)}),n}function ru(t,e){const n=uv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const hv={get:ru(!1,!1)},fv={get:ru(!1,!0)},dv={get:ru(!0,!1)};const pg=new WeakMap,gg=new WeakMap,mg=new WeakMap,pv=new WeakMap;function gv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mv(t){return t.__v_skip||!Object.isExtensible(t)?0:gv(UE(t))}function Yi(t){return ur(t)?t:su(t,!1,ov,hv,pg)}function _g(t){return su(t,!1,cv,fv,gg)}function al(t){return su(t,!0,av,dv,mg)}function su(t,e,n,r,s){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=mv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function rr(t){return ur(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function ur(t){return!!(t&&t.__v_isReadonly)}function Ht(t){return!!(t&&t.__v_isShallow)}function iu(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function ou(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Qp(t,"__v_skip",!0),t}const ut=t=>ke(t)?Yi(t):t,Jo=t=>ke(t)?al(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function Di(t){return yg(t,!1)}function _v(t){return yg(t,!0)}function yg(t,e){return Ke(t)?t:new yv(t,e)}class yv{constructor(e,n){this.dep=new nu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ht(e)||ur(e);e=r?e:Ie(e),nr(e,n)&&(this._rawValue=e,this._value=r?e:ut(e),this.dep.trigger())}}function ps(t){return Ke(t)?t.value:t}const Ev={get:(t,e,n)=>e==="__v_raw"?t:ps(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Eg(t){return rr(t)?t:new Proxy(t,Ev)}function vv(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=wv(t,n);return e}class Tv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ev(Ie(this._object),this._key)}}function wv(t,e,n){const r=t[e];return Ke(r)?r:new Tv(t,e,n)}class Iv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new nu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ci-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return ig(this,!0),!0}get value(){const e=this.dep.track();return cg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Av(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new Iv(r,s,n)}const Ao={},Zo=new WeakMap;let Or;function bv(t,e=!1,n=Or){if(n){let r=Zo.get(n);r||Zo.set(n,r=[]),r.push(t)}}function Rv(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=C=>s?C:Ht(C)||s===!1||s===0?Sn(C,1):Sn(C);let f,p,g,E,k=!1,V=!1;if(Ke(t)?(p=()=>t.value,k=Ht(t)):rr(t)?(p=()=>u(t),k=!0):se(t)?(V=!0,k=t.some(C=>rr(C)||Ht(C)),p=()=>t.map(C=>{if(Ke(C))return C.value;if(rr(C))return u(C);if(fe(C))return l?l(C,2):C()})):fe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){kn();try{g()}finally{Dn()}}const C=Or;Or=f;try{return l?l(t,3,[E]):t(E)}finally{Or=C}}:p=un,e&&s){const C=p,L=s===!0?1/0:s;p=()=>Sn(C(),L)}const N=ng(),F=()=>{f.stop(),N&&N.active&&Ql(N.effects,f)};if(i&&e){const C=e;e=(...L)=>{C(...L),F()}}let S=V?new Array(t.length).fill(Ao):Ao;const P=C=>{if(!(!(f.flags&1)||!f.dirty&&!C))if(e){const L=f.run();if(s||k||(V?L.some((M,v)=>nr(M,S[v])):nr(L,S))){g&&g();const M=Or;Or=f;try{const v=[L,S===Ao?void 0:V&&S[0]===Ao?[]:S,E];S=L,l?l(e,3,v):e(...v)}finally{Or=M}}}else f.run()};return c&&c(P),f=new rg(p),f.scheduler=o?()=>o(P,!1):P,E=C=>bv(C,!1,f),g=f.onStop=()=>{const C=Zo.get(f);if(C){if(l)l(C,4);else for(const L of C)L();Zo.delete(f)}},e?r?P(!0):S=f.run():o?o(P.bind(null,!0),!0):f.run(),F.pause=f.pause.bind(f),F.resume=f.resume.bind(f),F.stop=F,F}function Sn(t,e=1/0,n){if(e<=0||!ke(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ke(t))Sn(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)Sn(t[r],e,n);else if(ka(t)||ds(t))t.forEach(r=>{Sn(r,e,n)});else if(Gp(t)){for(const r in t)Sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ji(t,e,n,r){try{return r?t(...r):t()}catch(s){La(s,e,n)}}function Jt(t,e,n,r){if(fe(t)){const s=Ji(t,e,n,r);return s&&Wp(s)&&s.catch(i=>{La(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Jt(t[i],e,n,r));return s}}function La(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){kn(),Ji(i,null,10,[t,l,u]),Dn();return}}Sv(t,n,s,r,o)}function Sv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const St=[];let on=-1;const gs=[];let Kn=null,is=0;const vg=Promise.resolve();let ea=null;function au(t){const e=ea||vg;return t?e.then(this?t.bind(this):t):e}function Pv(t){let e=on+1,n=St.length;for(;e<n;){const r=e+n>>>1,s=St[r],i=Ni(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function cu(t){if(!(t.flags&1)){const e=Ni(t),n=St[St.length-1];!n||!(t.flags&2)&&e>=Ni(n)?St.push(t):St.splice(Pv(e),0,t),t.flags|=1,Tg()}}function Tg(){ea||(ea=vg.then(Ig))}function Cv(t){se(t)?gs.push(...t):Kn&&t.id===-1?Kn.splice(is+1,0,t):t.flags&1||(gs.push(t),t.flags|=1),Tg()}function hf(t,e,n=on+1){for(;n<St.length;n++){const r=St[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;St.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function wg(t){if(gs.length){const e=[...new Set(gs)].sort((n,r)=>Ni(n)-Ni(r));if(gs.length=0,Kn){Kn.push(...e);return}for(Kn=e,is=0;is<Kn.length;is++){const n=Kn[is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Kn=null,is=0}}const Ni=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ig(t){try{for(on=0;on<St.length;on++){const e=St[on];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ji(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;on<St.length;on++){const e=St[on];e&&(e.flags&=-2)}on=-1,St.length=0,wg(),ea=null,(St.length||gs.length)&&Ig()}}let ft=null,Ag=null;function ta(t){const e=ft;return ft=t,Ag=t&&t.type.__scopeId||null,e}function kv(t,e=ft,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ia(-1);const i=ta(e);let o;try{o=t(...s)}finally{ta(i),r._d&&ia(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function fk(t,e){if(ft===null)return t;const n=$a(ft),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Cr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(kn(),Jt(l,n,8,[t.el,c,t,e]),Dn())}}const Dv=Symbol("_vte"),bg=t=>t.__isTeleport,bn=Symbol("_leaveCb"),bo=Symbol("_enterCb");function Nv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vg(()=>{t.isMounted=!0}),xg(()=>{t.isUnmounting=!0}),t}const Bt=[Function,Array],Rg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt},Sg=t=>{const e=t.subTree;return e.component?Sg(e.component):e},Ov={name:"BaseTransition",props:Rg,setup(t,{slots:e}){const n=fu(),r=Nv();return()=>{const s=e.default&&kg(e.default(),!0);if(!s||!s.length)return;const i=Pg(s),o=Ie(t),{mode:c}=o;if(r.isLeaving)return Oc(i);const l=ff(i);if(!l)return Oc(i);let u=cl(l,o,r,n,p=>u=p);l.type!==Tt&&Oi(l,u);let f=n.subTree&&ff(n.subTree);if(f&&f.type!==Tt&&!xr(f,l)&&Sg(n).type!==Tt){let p=cl(f,o,r,n);if(Oi(f,p),c==="out-in"&&l.type!==Tt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Oc(i);c==="in-out"&&l.type!==Tt?p.delayLeave=(g,E,k)=>{const V=Cg(r,f);V[String(f.key)]=f,g[bn]=()=>{E(),g[bn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{k(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Pg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Tt){e=n;break}}return e}const Vv=Ov;function Cg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function cl(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:E,onAfterLeave:k,onLeaveCancelled:V,onBeforeAppear:N,onAppear:F,onAfterAppear:S,onAppearCancelled:P}=e,C=String(t.key),L=Cg(n,t),M=(m,I)=>{m&&Jt(m,r,9,I)},v=(m,I)=>{const A=I[1];M(m,I),se(m)?m.every(b=>b.length<=1)&&A():m.length<=1&&A()},y={mode:o,persisted:c,beforeEnter(m){let I=l;if(!n.isMounted)if(i)I=N||l;else return;m[bn]&&m[bn](!0);const A=L[C];A&&xr(t,A)&&A.el[bn]&&A.el[bn](),M(I,[m])},enter(m){let I=u,A=f,b=p;if(!n.isMounted)if(i)I=F||u,A=S||f,b=P||p;else return;let T=!1;const ge=m[bo]=xe=>{T||(T=!0,xe?M(b,[m]):M(A,[m]),y.delayedLeave&&y.delayedLeave(),m[bo]=void 0)};I?v(I,[m,ge]):ge()},leave(m,I){const A=String(t.key);if(m[bo]&&m[bo](!0),n.isUnmounting)return I();M(g,[m]);let b=!1;const T=m[bn]=ge=>{b||(b=!0,I(),ge?M(V,[m]):M(k,[m]),m[bn]=void 0,L[A]===t&&delete L[A])};L[A]=t,E?v(E,[m,T]):T()},clone(m){const I=cl(m,e,n,r,s);return s&&s(I),I}};return y}function Oc(t){if(Ma(t))return t=hr(t),t.children=null,t}function ff(t){if(!Ma(t))return bg(t.type)&&t.children?Pg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function Oi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Oi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function kg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Lt?(o.patchFlag&128&&s++,r=r.concat(kg(o.children,e,c))):(e||o.type!==Tt)&&r.push(c!=null?hr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Dg(t,e){return fe(t)?ot({name:t.name},e,{setup:t}):t}function Ng(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const na=new WeakMap;function gi(t,e,n,r,s=!1){if(se(t)){t.forEach((k,V)=>gi(k,e&&(se(e)?e[V]:e),n,r,s));return}if(ms(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&gi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?$a(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Ne?c.refs={}:c.refs,p=c.setupState,g=Ie(p),E=p===Ne?zp:k=>Re(g,k);if(u!=null&&u!==l){if(df(e),Ge(u))f[u]=null,E(u)&&(p[u]=null);else if(Ke(u)){u.value=null;const k=e;k.k&&(f[k.k]=null)}}if(fe(l))Ji(l,c,12,[o,f]);else{const k=Ge(l),V=Ke(l);if(k||V){const N=()=>{if(t.f){const F=k?E(l)?p[l]:f[l]:l.value;if(s)se(F)&&Ql(F,i);else if(se(F))F.includes(i)||F.push(i);else if(k)f[l]=[i],E(l)&&(p[l]=f[l]);else{const S=[i];l.value=S,t.k&&(f[t.k]=S)}}else k?(f[l]=o,E(l)&&(p[l]=o)):V&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const F=()=>{N(),na.delete(t)};F.id=-1,na.set(t,F),xt(F,n)}else df(t),N()}}}function df(t){const e=na.get(t);e&&(e.flags|=8,na.delete(t))}Oa().requestIdleCallback;Oa().cancelIdleCallback;const ms=t=>!!t.type.__asyncLoader,Ma=t=>t.type.__isKeepAlive;function xv(t,e){Og(t,"a",e)}function Lv(t,e){Og(t,"da",e)}function Og(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Fa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ma(s.parent.vnode)&&Mv(r,e,n,s),s=s.parent}}function Mv(t,e,n,r){const s=Fa(e,t,r,!0);Lg(()=>{Ql(r[e],s)},n)}function Fa(t,e,n=wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{kn();const c=Zi(n),l=Jt(e,n,t,o);return c(),Dn(),l});return r?s.unshift(i):s.push(i),i}}const Ln=t=>(e,n=wt)=>{(!Li||t==="sp")&&Fa(t,(...r)=>e(...r),n)},Fv=Ln("bm"),Vg=Ln("m"),Uv=Ln("bu"),Bv=Ln("u"),xg=Ln("bum"),Lg=Ln("um"),$v=Ln("sp"),jv=Ln("rtg"),qv=Ln("rtc");function Hv(t,e=wt){Fa("ec",t,e)}const zv="components";function Wv(t,e){return Gv(zv,t,!0,e)||t}const Kv=Symbol.for("v-ndc");function Gv(t,e,n=!0,r=!1){const s=ft||wt;if(s){const i=s.type;{const c=MT(i,!1);if(c&&(c===e||c===Wt(e)||c===Na(Wt(e))))return i}const o=pf(s[t]||i[t],e)||pf(s.appContext[t],e);return!o&&r?i:o}}function pf(t,e){return t&&(t[e]||t[Wt(e)]||t[Na(Wt(e))])}function dk(t,e,n,r){let s;const i=n,o=se(t);if(o||Ge(t)){const c=o&&rr(t);let l=!1,u=!1;c&&(l=!Ht(t),u=ur(t),t=xa(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?Jo(ut(t[f])):ut(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(ke(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}function pk(t,e,n={},r,s){if(ft.ce||ft.parent&&ms(ft.parent)&&ft.parent.ce){const u=Object.keys(n).length>0;return sa(),oa(Lt,null,[Pt("slot",n,r)],u?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),sa();const o=i&&Mg(i(n)),c=n.key||o&&o.key,l=oa(Lt,{key:(c&&!Yt(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Mg(t){return t.some(e=>xi(e)?!(e.type===Tt||e.type===Lt&&!Mg(e.children)):!0)?t:null}const ll=t=>t?sm(t)?$a(t):ll(t.parent):null,mi=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ll(t.parent),$root:t=>ll(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ug(t),$forceUpdate:t=>t.f||(t.f=()=>{cu(t.update)}),$nextTick:t=>t.n||(t.n=au.bind(t.proxy)),$watch:t=>mT.bind(t)}),Vc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Re(t,e),Qv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Vc(r,e))return o[e]=1,r[e];if(s!==Ne&&Re(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Re(u,e))return o[e]=3,i[e];if(n!==Ne&&Re(n,e))return o[e]=4,n[e];ul&&(o[e]=0)}}const f=mi[e];let p,g;if(f)return e==="$attrs"&&Et(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&Re(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Re(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Vc(s,e)?(s[e]=n,!0):r!==Ne&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==Ne&&c[0]!=="$"&&Re(t,c)||Vc(e,c)||(l=i[0])&&Re(l,c)||Re(r,c)||Re(mi,c)||Re(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function gf(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ul=!0;function Xv(t){const e=Ug(t),n=t.proxy,r=t.ctx;ul=!1,e.beforeCreate&&mf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:E,updated:k,activated:V,deactivated:N,beforeDestroy:F,beforeUnmount:S,destroyed:P,unmounted:C,render:L,renderTracked:M,renderTriggered:v,errorCaptured:y,serverPrefetch:m,expose:I,inheritAttrs:A,components:b,directives:T,filters:ge}=e;if(u&&Yv(u,r,null),o)for(const ue in o){const ie=o[ue];fe(ie)&&(r[ue]=ie.bind(n))}if(s){const ue=s.call(n,n);ke(ue)&&(t.data=Yi(ue))}if(ul=!0,i)for(const ue in i){const ie=i[ue],Le=fe(ie)?ie.bind(n,n):fe(ie.get)?ie.get.bind(n,n):un,at=!fe(ie)&&fe(ie.set)?ie.set.bind(n):un,nt=$t({get:Le,set:at});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Pe=>nt.value=Pe})}if(c)for(const ue in c)Fg(c[ue],r,n,ue);if(l){const ue=fe(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(ie=>{Lo(ie,ue[ie])})}f&&mf(f,t,"c");function Ae(ue,ie){se(ie)?ie.forEach(Le=>ue(Le.bind(n))):ie&&ue(ie.bind(n))}if(Ae(Fv,p),Ae(Vg,g),Ae(Uv,E),Ae(Bv,k),Ae(xv,V),Ae(Lv,N),Ae(Hv,y),Ae(qv,M),Ae(jv,v),Ae(xg,S),Ae(Lg,C),Ae($v,m),se(I))if(I.length){const ue=t.exposed||(t.exposed={});I.forEach(ie=>{Object.defineProperty(ue,ie,{get:()=>n[ie],set:Le=>n[ie]=Le,enumerable:!0})})}else t.exposed||(t.exposed={});L&&t.render===un&&(t.render=L),A!=null&&(t.inheritAttrs=A),b&&(t.components=b),T&&(t.directives=T),m&&Ng(t)}function Yv(t,e,n=un){se(t)&&(t=hl(t));for(const r in t){const s=t[r];let i;ke(s)?"default"in s?i=zt(s.from||r,s.default,!0):i=zt(s.from||r):i=zt(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function mf(t,e,n){Jt(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fg(t,e,n,r){let s=r.includes(".")?Jg(n,r):()=>n[r];if(Ge(t)){const i=e[t];fe(i)&&_i(s,i)}else if(fe(t))_i(s,t.bind(n));else if(ke(t))if(se(t))t.forEach(i=>Fg(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&_i(s,i,t)}}function Ug(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ra(l,u,o,!0)),ra(l,e,o)),ke(e)&&i.set(e,l),l}function ra(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ra(t,i,n,!0),s&&s.forEach(o=>ra(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Jv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Jv={data:_f,props:yf,emits:yf,methods:oi,computed:oi,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:oi,directives:oi,watch:eT,provide:_f,inject:Zv};function _f(t,e){return e?t?function(){return ot(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function Zv(t,e){return oi(hl(t),hl(e))}function hl(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function oi(t,e){return t?ot(Object.create(null),t,e):e}function yf(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:ot(Object.create(null),gf(t),gf(e??{})):e}function eT(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function Bg(){return{app:null,config:{isNativeTag:zp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tT=0;function nT(t,e){return function(r,s=null){fe(r)||(r=ot({},r)),s!=null&&!ke(s)&&(s=null);const i=Bg(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:tT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:UT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(u,...p)):fe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!l){const E=u._ceVNode||Pt(r,s);return E.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(E,f,g),l=!0,u._container=f,f.__vue_app__=u,$a(E.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Jt(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Ur;Ur=u;try{return f()}finally{Ur=p}}};return u}}let Ur=null;function Lo(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function zt(t,e,n=!1){const r=fu();if(r||Ur){let s=Ur?Ur._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function rT(){return!!(fu()||Ur)}const $g={},jg=()=>Object.create($g),qg=t=>Object.getPrototypeOf(t)===$g;function sT(t,e,n,r=!1){const s={},i=jg();t.propsDefaults=Object.create(null),Hg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:_g(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function iT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Ua(t.emitsOptions,g))continue;const E=e[g];if(l)if(Re(i,g))E!==i[g]&&(i[g]=E,u=!0);else{const k=Wt(g);s[k]=fl(l,c,k,E,t,!1)}else E!==i[g]&&(i[g]=E,u=!0)}}}else{Hg(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=Er(p))===p||!Re(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=fl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],u=!0)}u&&Rn(t.attrs,"set","")}function Hg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(fi(l))continue;const u=e[l];let f;s&&Re(s,f=Wt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Ua(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ie(n),u=c||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=fl(s,l,p,u[p],t,!Re(u,p))}}return o}function fl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Zi(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Er(n))&&(r=!0))}return r}const oT=new WeakMap;function zg(t,e,n=!1){const r=n?oT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const f=p=>{l=!0;const[g,E]=zg(p,e,!0);ot(o,g),E&&c.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return ke(t)&&r.set(t,fs),fs;if(se(i))for(let f=0;f<i.length;f++){const p=Wt(i[f]);Ef(p)&&(o[p]=Ne)}else if(i)for(const f in i){const p=Wt(f);if(Ef(p)){const g=i[f],E=o[p]=se(g)||fe(g)?{type:g}:ot({},g),k=E.type;let V=!1,N=!0;if(se(k))for(let F=0;F<k.length;++F){const S=k[F],P=fe(S)&&S.name;if(P==="Boolean"){V=!0;break}else P==="String"&&(N=!1)}else V=fe(k)&&k.name==="Boolean";E[0]=V,E[1]=N,(V||Re(E,"default"))&&c.push(p)}}const u=[o,c];return ke(t)&&r.set(t,u),u}function Ef(t){return t[0]!=="$"&&!fi(t)}const lu=t=>t==="_"||t==="_ctx"||t==="$stable",uu=t=>se(t)?t.map(cn):[cn(t)],aT=(t,e,n)=>{if(e._n)return e;const r=kv((...s)=>uu(e(...s)),n);return r._c=!1,r},Wg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(lu(s))continue;const i=t[s];if(fe(i))e[s]=aT(s,i,r);else if(i!=null){const o=uu(i);e[s]=()=>o}}},Kg=(t,e)=>{const n=uu(e);t.slots.default=()=>n},Gg=(t,e,n)=>{for(const r in e)(n||!lu(r))&&(t[r]=e[r])},cT=(t,e,n)=>{const r=t.slots=jg();if(t.vnode.shapeFlag&32){const s=e._;s?(Gg(r,e,n),n&&Qp(r,"_",s,!0)):Wg(e,r)}else e&&Kg(t,e)},lT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Gg(s,e,n):(i=!e.$stable,Wg(e,s)),o=e}else e&&(Kg(t,e),o={default:1});if(i)for(const c in s)!lu(c)&&o[c]==null&&delete s[c]},xt=AT;function uT(t){return hT(t)}function hT(t,e){const n=Oa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:E=un,insertStaticContent:k}=t,V=(w,R,D,j=null,H=null,B=null,X=void 0,K=null,z=!!R.dynamicChildren)=>{if(w===R)return;w&&!xr(w,R)&&(j=U(w),Pe(w,H,B,!0),w=null),R.patchFlag===-2&&(z=!1,R.dynamicChildren=null);const{type:W,ref:oe,shapeFlag:J}=R;switch(W){case Ba:N(w,R,D,j);break;case Tt:F(w,R,D,j);break;case Mo:w==null&&S(R,D,j,X);break;case Lt:b(w,R,D,j,H,B,X,K,z);break;default:J&1?L(w,R,D,j,H,B,X,K,z):J&6?T(w,R,D,j,H,B,X,K,z):(J&64||J&128)&&W.process(w,R,D,j,H,B,X,K,z,te)}oe!=null&&H?gi(oe,w&&w.ref,B,R||w,!R):oe==null&&w&&w.ref!=null&&gi(w.ref,null,B,w,!0)},N=(w,R,D,j)=>{if(w==null)r(R.el=c(R.children),D,j);else{const H=R.el=w.el;R.children!==w.children&&u(H,R.children)}},F=(w,R,D,j)=>{w==null?r(R.el=l(R.children||""),D,j):R.el=w.el},S=(w,R,D,j)=>{[w.el,w.anchor]=k(w.children,R,D,j,w.el,w.anchor)},P=({el:w,anchor:R},D,j)=>{let H;for(;w&&w!==R;)H=g(w),r(w,D,j),w=H;r(R,D,j)},C=({el:w,anchor:R})=>{let D;for(;w&&w!==R;)D=g(w),s(w),w=D;s(R)},L=(w,R,D,j,H,B,X,K,z)=>{R.type==="svg"?X="svg":R.type==="math"&&(X="mathml"),w==null?M(R,D,j,H,B,X,K,z):m(w,R,H,B,X,K,z)},M=(w,R,D,j,H,B,X,K)=>{let z,W;const{props:oe,shapeFlag:J,transition:re,dirs:ae}=w;if(z=w.el=o(w.type,B,oe&&oe.is,oe),J&8?f(z,w.children):J&16&&y(w.children,z,null,j,H,xc(w,B),X,K),ae&&Cr(w,null,j,"created"),v(z,w,w.scopeId,X,j),oe){for(const Ce in oe)Ce!=="value"&&!fi(Ce)&&i(z,Ce,null,oe[Ce],B,j);"value"in oe&&i(z,"value",null,oe.value,B),(W=oe.onVnodeBeforeMount)&&sn(W,j,w)}ae&&Cr(w,null,j,"beforeMount");const me=fT(H,re);me&&re.beforeEnter(z),r(z,R,D),((W=oe&&oe.onVnodeMounted)||me||ae)&&xt(()=>{W&&sn(W,j,w),me&&re.enter(z),ae&&Cr(w,null,j,"mounted")},H)},v=(w,R,D,j,H)=>{if(D&&E(w,D),j)for(let B=0;B<j.length;B++)E(w,j[B]);if(H){let B=H.subTree;if(R===B||em(B.type)&&(B.ssContent===R||B.ssFallback===R)){const X=H.vnode;v(w,X,X.scopeId,X.slotScopeIds,H.parent)}}},y=(w,R,D,j,H,B,X,K,z=0)=>{for(let W=z;W<w.length;W++){const oe=w[W]=K?Gn(w[W]):cn(w[W]);V(null,oe,R,D,j,H,B,X,K)}},m=(w,R,D,j,H,B,X)=>{const K=R.el=w.el;let{patchFlag:z,dynamicChildren:W,dirs:oe}=R;z|=w.patchFlag&16;const J=w.props||Ne,re=R.props||Ne;let ae;if(D&&kr(D,!1),(ae=re.onVnodeBeforeUpdate)&&sn(ae,D,R,w),oe&&Cr(R,w,D,"beforeUpdate"),D&&kr(D,!0),(J.innerHTML&&re.innerHTML==null||J.textContent&&re.textContent==null)&&f(K,""),W?I(w.dynamicChildren,W,K,D,j,xc(R,H),B):X||ie(w,R,K,null,D,j,xc(R,H),B,!1),z>0){if(z&16)A(K,J,re,D,H);else if(z&2&&J.class!==re.class&&i(K,"class",null,re.class,H),z&4&&i(K,"style",J.style,re.style,H),z&8){const me=R.dynamicProps;for(let Ce=0;Ce<me.length;Ce++){const we=me[Ce],pt=J[we],gt=re[we];(gt!==pt||we==="value")&&i(K,we,pt,gt,H,D)}}z&1&&w.children!==R.children&&f(K,R.children)}else!X&&W==null&&A(K,J,re,D,H);((ae=re.onVnodeUpdated)||oe)&&xt(()=>{ae&&sn(ae,D,R,w),oe&&Cr(R,w,D,"updated")},j)},I=(w,R,D,j,H,B,X)=>{for(let K=0;K<R.length;K++){const z=w[K],W=R[K],oe=z.el&&(z.type===Lt||!xr(z,W)||z.shapeFlag&198)?p(z.el):D;V(z,W,oe,null,j,H,B,X,!0)}},A=(w,R,D,j,H)=>{if(R!==D){if(R!==Ne)for(const B in R)!fi(B)&&!(B in D)&&i(w,B,R[B],null,H,j);for(const B in D){if(fi(B))continue;const X=D[B],K=R[B];X!==K&&B!=="value"&&i(w,B,K,X,H,j)}"value"in D&&i(w,"value",R.value,D.value,H)}},b=(w,R,D,j,H,B,X,K,z)=>{const W=R.el=w?w.el:c(""),oe=R.anchor=w?w.anchor:c("");let{patchFlag:J,dynamicChildren:re,slotScopeIds:ae}=R;ae&&(K=K?K.concat(ae):ae),w==null?(r(W,D,j),r(oe,D,j),y(R.children||[],D,oe,H,B,X,K,z)):J>0&&J&64&&re&&w.dynamicChildren?(I(w.dynamicChildren,re,D,H,B,X,K),(R.key!=null||H&&R===H.subTree)&&Qg(w,R,!0)):ie(w,R,D,oe,H,B,X,K,z)},T=(w,R,D,j,H,B,X,K,z)=>{R.slotScopeIds=K,w==null?R.shapeFlag&512?H.ctx.activate(R,D,j,X,z):ge(R,D,j,H,B,X,z):xe(w,R,z)},ge=(w,R,D,j,H,B,X)=>{const K=w.component=NT(w,j,H);if(Ma(w)&&(K.ctx.renderer=te),OT(K,!1,X),K.asyncDep){if(H&&H.registerDep(K,Ae,X),!w.el){const z=K.subTree=Pt(Tt);F(null,z,R,D),w.placeholder=z.el}}else Ae(K,w,R,D,H,B,X)},xe=(w,R,D)=>{const j=R.component=w.component;if(wT(w,R,D))if(j.asyncDep&&!j.asyncResolved){ue(j,R,D);return}else j.next=R,j.update();else R.el=w.el,j.vnode=R},Ae=(w,R,D,j,H,B,X)=>{const K=()=>{if(w.isMounted){let{next:J,bu:re,u:ae,parent:me,vnode:Ce}=w;{const Ot=Xg(w);if(Ot){J&&(J.el=Ce.el,ue(w,J,X)),Ot.asyncDep.then(()=>{w.isUnmounted||K()});return}}let we=J,pt;kr(w,!1),J?(J.el=Ce.el,ue(w,J,X)):J=Ce,re&&xo(re),(pt=J.props&&J.props.onVnodeBeforeUpdate)&&sn(pt,me,J,Ce),kr(w,!0);const gt=Tf(w),Nt=w.subTree;w.subTree=gt,V(Nt,gt,p(Nt.el),U(Nt),w,H,B),J.el=gt.el,we===null&&IT(w,gt.el),ae&&xt(ae,H),(pt=J.props&&J.props.onVnodeUpdated)&&xt(()=>sn(pt,me,J,Ce),H)}else{let J;const{el:re,props:ae}=R,{bm:me,m:Ce,parent:we,root:pt,type:gt}=w,Nt=ms(R);kr(w,!1),me&&xo(me),!Nt&&(J=ae&&ae.onVnodeBeforeMount)&&sn(J,we,R),kr(w,!0);{pt.ce&&pt.ce._def.shadowRoot!==!1&&pt.ce._injectChildStyle(gt);const Ot=w.subTree=Tf(w);V(null,Ot,D,j,w,H,B),R.el=Ot.el}if(Ce&&xt(Ce,H),!Nt&&(J=ae&&ae.onVnodeMounted)){const Ot=R;xt(()=>sn(J,we,Ot),H)}(R.shapeFlag&256||we&&ms(we.vnode)&&we.vnode.shapeFlag&256)&&w.a&&xt(w.a,H),w.isMounted=!0,R=D=j=null}};w.scope.on();const z=w.effect=new rg(K);w.scope.off();const W=w.update=z.run.bind(z),oe=w.job=z.runIfDirty.bind(z);oe.i=w,oe.id=w.uid,z.scheduler=()=>cu(oe),kr(w,!0),W()},ue=(w,R,D)=>{R.component=w;const j=w.vnode.props;w.vnode=R,w.next=null,iT(w,R.props,j,D),lT(w,R.children,D),kn(),hf(w),Dn()},ie=(w,R,D,j,H,B,X,K,z=!1)=>{const W=w&&w.children,oe=w?w.shapeFlag:0,J=R.children,{patchFlag:re,shapeFlag:ae}=R;if(re>0){if(re&128){at(W,J,D,j,H,B,X,K,z);return}else if(re&256){Le(W,J,D,j,H,B,X,K,z);return}}ae&8?(oe&16&&ze(W,H,B),J!==W&&f(D,J)):oe&16?ae&16?at(W,J,D,j,H,B,X,K,z):ze(W,H,B,!0):(oe&8&&f(D,""),ae&16&&y(J,D,j,H,B,X,K,z))},Le=(w,R,D,j,H,B,X,K,z)=>{w=w||fs,R=R||fs;const W=w.length,oe=R.length,J=Math.min(W,oe);let re;for(re=0;re<J;re++){const ae=R[re]=z?Gn(R[re]):cn(R[re]);V(w[re],ae,D,null,H,B,X,K,z)}W>oe?ze(w,H,B,!0,!1,J):y(R,D,j,H,B,X,K,z,J)},at=(w,R,D,j,H,B,X,K,z)=>{let W=0;const oe=R.length;let J=w.length-1,re=oe-1;for(;W<=J&&W<=re;){const ae=w[W],me=R[W]=z?Gn(R[W]):cn(R[W]);if(xr(ae,me))V(ae,me,D,null,H,B,X,K,z);else break;W++}for(;W<=J&&W<=re;){const ae=w[J],me=R[re]=z?Gn(R[re]):cn(R[re]);if(xr(ae,me))V(ae,me,D,null,H,B,X,K,z);else break;J--,re--}if(W>J){if(W<=re){const ae=re+1,me=ae<oe?R[ae].el:j;for(;W<=re;)V(null,R[W]=z?Gn(R[W]):cn(R[W]),D,me,H,B,X,K,z),W++}}else if(W>re)for(;W<=J;)Pe(w[W],H,B,!0),W++;else{const ae=W,me=W,Ce=new Map;for(W=me;W<=re;W++){const ct=R[W]=z?Gn(R[W]):cn(R[W]);ct.key!=null&&Ce.set(ct.key,W)}let we,pt=0;const gt=re-me+1;let Nt=!1,Ot=0;const Gt=new Array(gt);for(W=0;W<gt;W++)Gt[W]=0;for(W=ae;W<=J;W++){const ct=w[W];if(pt>=gt){Pe(ct,H,B,!0);continue}let rt;if(ct.key!=null)rt=Ce.get(ct.key);else for(we=me;we<=re;we++)if(Gt[we-me]===0&&xr(ct,R[we])){rt=we;break}rt===void 0?Pe(ct,H,B,!0):(Gt[rt-me]=W+1,rt>=Ot?Ot=rt:Nt=!0,V(ct,R[rt],D,null,H,B,X,K,z),pt++)}const Zr=Nt?dT(Gt):fs;for(we=Zr.length-1,W=gt-1;W>=0;W--){const ct=me+W,rt=R[ct],Bs=R[ct+1],Ar=ct+1<oe?Bs.el||Bs.placeholder:j;Gt[W]===0?V(null,rt,D,Ar,H,B,X,K,z):Nt&&(we<0||W!==Zr[we]?nt(rt,D,Ar,2):we--)}}},nt=(w,R,D,j,H=null)=>{const{el:B,type:X,transition:K,children:z,shapeFlag:W}=w;if(W&6){nt(w.component.subTree,R,D,j);return}if(W&128){w.suspense.move(R,D,j);return}if(W&64){X.move(w,R,D,te);return}if(X===Lt){r(B,R,D);for(let J=0;J<z.length;J++)nt(z[J],R,D,j);r(w.anchor,R,D);return}if(X===Mo){P(w,R,D);return}if(j!==2&&W&1&&K)if(j===0)K.beforeEnter(B),r(B,R,D),xt(()=>K.enter(B),H);else{const{leave:J,delayLeave:re,afterLeave:ae}=K,me=()=>{w.ctx.isUnmounted?s(B):r(B,R,D)},Ce=()=>{B._isLeaving&&B[bn](!0),J(B,()=>{me(),ae&&ae()})};re?re(B,me,Ce):Ce()}else r(B,R,D)},Pe=(w,R,D,j=!1,H=!1)=>{const{type:B,props:X,ref:K,children:z,dynamicChildren:W,shapeFlag:oe,patchFlag:J,dirs:re,cacheIndex:ae}=w;if(J===-2&&(H=!1),K!=null&&(kn(),gi(K,null,D,w,!0),Dn()),ae!=null&&(R.renderCache[ae]=void 0),oe&256){R.ctx.deactivate(w);return}const me=oe&1&&re,Ce=!ms(w);let we;if(Ce&&(we=X&&X.onVnodeBeforeUnmount)&&sn(we,R,w),oe&6)Ct(w.component,D,j);else{if(oe&128){w.suspense.unmount(D,j);return}me&&Cr(w,null,R,"beforeUnmount"),oe&64?w.type.remove(w,R,D,te,j):W&&!W.hasOnce&&(B!==Lt||J>0&&J&64)?ze(W,R,D,!1,!0):(B===Lt&&J&384||!H&&oe&16)&&ze(z,R,D),j&&Kt(w)}(Ce&&(we=X&&X.onVnodeUnmounted)||me)&&xt(()=>{we&&sn(we,R,w),me&&Cr(w,null,R,"unmounted")},D)},Kt=w=>{const{type:R,el:D,anchor:j,transition:H}=w;if(R===Lt){Qe(D,j);return}if(R===Mo){C(w);return}const B=()=>{s(D),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(w.shapeFlag&1&&H&&!H.persisted){const{leave:X,delayLeave:K}=H,z=()=>X(D,B);K?K(w.el,B,z):z()}else B()},Qe=(w,R)=>{let D;for(;w!==R;)D=g(w),s(w),w=D;s(R)},Ct=(w,R,D)=>{const{bum:j,scope:H,job:B,subTree:X,um:K,m:z,a:W}=w;vf(z),vf(W),j&&xo(j),H.stop(),B&&(B.flags|=8,Pe(X,w,R,D)),K&&xt(K,R),xt(()=>{w.isUnmounted=!0},R)},ze=(w,R,D,j=!1,H=!1,B=0)=>{for(let X=B;X<w.length;X++)Pe(w[X],R,D,j,H)},U=w=>{if(w.shapeFlag&6)return U(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=g(w.anchor||w.el),D=R&&R[Dv];return D?g(D):R};let Y=!1;const Q=(w,R,D)=>{w==null?R._vnode&&Pe(R._vnode,null,null,!0):V(R._vnode||null,w,R,null,null,null,D),R._vnode=w,Y||(Y=!0,hf(),wg(),Y=!1)},te={p:V,um:Pe,m:nt,r:Kt,mt:ge,mc:y,pc:ie,pbc:I,n:U,o:t};return{render:Q,hydrate:void 0,createApp:nT(Q)}}function xc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function kr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function fT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qg(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Gn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Qg(o,c)),c.type===Ba&&c.patchFlag!==-1&&(c.el=o.el),c.type===Tt&&!c.el&&(c.el=o.el)}}function dT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Xg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xg(e)}function vf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const pT=Symbol.for("v-scx"),gT=()=>zt(pT);function _i(t,e,n){return Yg(t,e,n)}function Yg(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=ot({},n),l=e&&r||!e&&i!=="post";let u;if(Li){if(i==="sync"){const E=gT();u=E.__watcherHandles||(E.__watcherHandles=[])}else if(!l){const E=()=>{};return E.stop=un,E.resume=un,E.pause=un,E}}const f=wt;c.call=(E,k,V)=>Jt(E,f,k,V);let p=!1;i==="post"?c.scheduler=E=>{xt(E,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(E,k)=>{k?E():cu(E)}),c.augmentJob=E=>{e&&(E.flags|=4),p&&(E.flags|=2,f&&(E.id=f.uid,E.i=f))};const g=Rv(t,e,c);return Li&&(u?u.push(g):l&&g()),g}function mT(t,e,n){const r=this.proxy,s=Ge(t)?t.includes(".")?Jg(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Zi(this),c=Yg(s,i.bind(r),n);return o(),c}function Jg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const _T=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Wt(e)}Modifiers`]||t[`${Er(e)}Modifiers`];function yT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&_T(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ge(f)?f.trim():f)),o.number&&(s=n.map(rl)));let c,l=r[c=Pc(e)]||r[c=Pc(Wt(e))];!l&&i&&(l=r[c=Pc(Er(e))]),l&&Jt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Jt(u,t,6,s)}}const ET=new WeakMap;function Zg(t,e,n=!1){const r=n?ET:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=u=>{const f=Zg(u,e,!0);f&&(c=!0,ot(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(ke(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):ot(o,i),ke(t)&&r.set(t,o),o)}function Ua(t,e){return!t||!Ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Er(e))||Re(t,e))}function Tf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:g,setupState:E,ctx:k,inheritAttrs:V}=t,N=ta(t);let F,S;try{if(n.shapeFlag&4){const C=s||r,L=C;F=cn(u.call(L,C,f,p,E,g,k)),S=c}else{const C=e;F=cn(C.length>1?C(p,{attrs:c,slots:o,emit:l}):C(p,null)),S=e.props?c:vT(c)}}catch(C){yi.length=0,La(C,t,1),F=Pt(Tt)}let P=F;if(S&&V!==!1){const C=Object.keys(S),{shapeFlag:L}=P;C.length&&L&7&&(i&&C.some(Gl)&&(S=TT(S,i)),P=hr(P,S,!1,!0))}return n.dirs&&(P=hr(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&Oi(P,n.transition),F=P,ta(N),F}const vT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ca(n))&&((e||(e={}))[n]=t[n]);return e},TT=(t,e)=>{const n={};for(const r in t)(!Gl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function wT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!Ua(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?wf(r,o,u):!0:!!o;return!1}function wf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ua(n,i))return!0}return!1}function IT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const em=t=>t.__isSuspense;function AT(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):Cv(t)}const Lt=Symbol.for("v-fgt"),Ba=Symbol.for("v-txt"),Tt=Symbol.for("v-cmt"),Mo=Symbol.for("v-stc"),yi=[];let Mt=null;function sa(t=!1){yi.push(Mt=t?null:[])}function bT(){yi.pop(),Mt=yi[yi.length-1]||null}let Vi=1;function ia(t,e=!1){Vi+=t,t<0&&Mt&&e&&(Mt.hasOnce=!0)}function tm(t){return t.dynamicChildren=Vi>0?Mt||fs:null,bT(),Vi>0&&Mt&&Mt.push(t),t}function gk(t,e,n,r,s,i){return tm(rm(t,e,n,r,s,i,!0))}function oa(t,e,n,r,s){return tm(Pt(t,e,n,r,s,!0))}function xi(t){return t?t.__v_isVNode===!0:!1}function xr(t,e){return t.type===e.type&&t.key===e.key}const nm=({key:t})=>t??null,Fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||Ke(t)||fe(t)?{i:ft,r:t,k:e,f:!!n}:t:null);function rm(t,e=null,n=null,r=0,s=null,i=t===Lt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nm(e),ref:e&&Fo(e),scopeId:Ag,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ft};return c?(hu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ge(n)?8:16),Vi>0&&!o&&Mt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Mt.push(l),l}const Pt=RT;function RT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Kv)&&(t=Tt),xi(t)){const c=hr(t,e,!0);return n&&hu(c,n),Vi>0&&!i&&Mt&&(c.shapeFlag&6?Mt[Mt.indexOf(t)]=c:Mt.push(c)),c.patchFlag=-2,c}if(FT(t)&&(t=t.__vccOpts),e){e=ST(e);let{class:c,style:l}=e;c&&!Ge(c)&&(e.class=Jl(c)),ke(l)&&(iu(l)&&!se(l)&&(l=ot({},l)),e.style=Yl(l))}const o=Ge(t)?1:em(t)?128:bg(t)?64:ke(t)?4:fe(t)?2:0;return rm(t,e,n,r,s,o,i,!0)}function ST(t){return t?iu(t)||qg(t)?ot({},t):t:null}function hr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?CT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&nm(u),ref:e&&e.ref?n&&i?se(i)?i.concat(Fo(e)):[i,Fo(e)]:Fo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hr(t.ssContent),ssFallback:t.ssFallback&&hr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Oi(f,l.clone(f)),f}function PT(t=" ",e=0){return Pt(Ba,null,t,e)}function mk(t,e){const n=Pt(Mo,null,t);return n.staticCount=e,n}function _k(t="",e=!1){return e?(sa(),oa(Tt,null,t)):Pt(Tt,null,t)}function cn(t){return t==null||typeof t=="boolean"?Pt(Tt):se(t)?Pt(Lt,null,t.slice()):xi(t)?Gn(t):Pt(Ba,null,String(t))}function Gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hr(t)}function hu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),hu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!qg(e)?e._ctx=ft:s===3&&ft&&(ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:ft},n=32):(e=String(e),r&64?(n=16,e=[PT(e)]):n=8);t.children=e,t.shapeFlag|=n}function CT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Jl([e.class,r.class]));else if(s==="style")e.style=Yl([e.style,r.style]);else if(Ca(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){Jt(t,e,7,[n,r])}const kT=Bg();let DT=0;function NT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||kT,i={uid:DT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new eg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zg(r,s),emitsOptions:Zg(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yT.bind(null,i),t.ce&&t.ce(i),i}let wt=null;const fu=()=>wt||ft;let aa,dl;{const t=Oa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};aa=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),dl=e("__VUE_SSR_SETTERS__",n=>Li=n)}const Zi=t=>{const e=wt;return aa(t),t.scope.on(),()=>{t.scope.off(),aa(e)}},If=()=>{wt&&wt.scope.off(),aa(null)};function sm(t){return t.vnode.shapeFlag&4}let Li=!1;function OT(t,e=!1,n=!1){e&&dl(e);const{props:r,children:s}=t.vnode,i=sm(t);sT(t,r,i,e),cT(t,s,n||e);const o=i?VT(t,e):void 0;return e&&dl(!1),o}function VT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Qv);const{setup:r}=n;if(r){kn();const s=t.setupContext=r.length>1?LT(t):null,i=Zi(t),o=Ji(r,t,0,[t.props,s]),c=Wp(o);if(Dn(),i(),(c||t.sp)&&!ms(t)&&Ng(t),c){if(o.then(If,If),e)return o.then(l=>{Af(t,l)}).catch(l=>{La(l,t,0)});t.asyncDep=o}else Af(t,o)}else im(t)}function Af(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=Eg(e)),im(t)}function im(t,e,n){const r=t.type;t.render||(t.render=r.render||un);{const s=Zi(t);kn();try{Xv(t)}finally{Dn(),s()}}}const xT={get(t,e){return Et(t,"get",""),t[e]}};function LT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,xT),slots:t.slots,emit:t.emit,expose:e}}function $a(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Eg(ou(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mi)return mi[n](t)},has(e,n){return n in e||n in mi}})):t.proxy}function MT(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function FT(t){return fe(t)&&"__vccOpts"in t}const $t=(t,e)=>Av(t,e,Li);function du(t,e,n){try{ia(-1);const r=arguments.length;return r===2?ke(e)&&!se(e)?xi(e)?Pt(t,null,[e]):Pt(t,e):Pt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xi(n)&&(n=[n]),Pt(t,e,n))}finally{ia(1)}}const UT="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pl;const bf=typeof window<"u"&&window.trustedTypes;if(bf)try{pl=bf.createPolicy("vue",{createHTML:t=>t})}catch{}const om=pl?t=>pl.createHTML(t):t=>t,BT="http://www.w3.org/2000/svg",$T="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,Rf=An&&An.createElement("template"),jT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?An.createElementNS(BT,t):e==="mathml"?An.createElementNS($T,t):n?An.createElement(t,{is:n}):An.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Rf.innerHTML=om(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Rf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qn="transition",ni="animation",Mi=Symbol("_vtc"),am={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},qT=ot({},Rg,am),HT=t=>(t.displayName="Transition",t.props=qT,t),yk=HT((t,{slots:e})=>du(Vv,zT(t),e)),Dr=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},Sf=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function zT(t){const e={};for(const b in t)b in am||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,k=WT(s),V=k&&k[0],N=k&&k[1],{onBeforeEnter:F,onEnter:S,onEnterCancelled:P,onLeave:C,onLeaveCancelled:L,onBeforeAppear:M=F,onAppear:v=S,onAppearCancelled:y=P}=e,m=(b,T,ge,xe)=>{b._enterCancelled=xe,Nr(b,T?f:c),Nr(b,T?u:o),ge&&ge()},I=(b,T)=>{b._isLeaving=!1,Nr(b,p),Nr(b,E),Nr(b,g),T&&T()},A=b=>(T,ge)=>{const xe=b?v:S,Ae=()=>m(T,b,ge);Dr(xe,[T,Ae]),Pf(()=>{Nr(T,b?l:i),wn(T,b?f:c),Sf(xe)||Cf(T,r,V,Ae)})};return ot(e,{onBeforeEnter(b){Dr(F,[b]),wn(b,i),wn(b,o)},onBeforeAppear(b){Dr(M,[b]),wn(b,l),wn(b,u)},onEnter:A(!1),onAppear:A(!0),onLeave(b,T){b._isLeaving=!0;const ge=()=>I(b,T);wn(b,p),b._enterCancelled?(wn(b,g),Nf(b)):(Nf(b),wn(b,g)),Pf(()=>{b._isLeaving&&(Nr(b,p),wn(b,E),Sf(C)||Cf(b,r,N,ge))}),Dr(C,[b,ge])},onEnterCancelled(b){m(b,!1,void 0,!0),Dr(P,[b])},onAppearCancelled(b){m(b,!0,void 0,!0),Dr(y,[b])},onLeaveCancelled(b){I(b),Dr(L,[b])}})}function WT(t){if(t==null)return null;if(ke(t))return[Lc(t.enter),Lc(t.leave)];{const e=Lc(t);return[e,e]}}function Lc(t){return jE(t)}function wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Mi]||(t[Mi]=new Set)).add(e)}function Nr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Mi];n&&(n.delete(e),n.size||(t[Mi]=void 0))}function Pf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let KT=0;function Cf(t,e,n,r){const s=t._endId=++KT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=GT(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,g),i()},g=E=>{E.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,g)}function GT(t,e){const n=window.getComputedStyle(t),r=k=>(n[k]||"").split(", "),s=r(`${qn}Delay`),i=r(`${qn}Duration`),o=kf(s,i),c=r(`${ni}Delay`),l=r(`${ni}Duration`),u=kf(c,l);let f=null,p=0,g=0;e===qn?o>0&&(f=qn,p=o,g=i.length):e===ni?u>0&&(f=ni,p=u,g=l.length):(p=Math.max(o,u),f=p>0?o>u?qn:ni:null,g=f?f===qn?i.length:l.length:0);const E=f===qn&&/\b(?:transform|all)(?:,|$)/.test(r(`${qn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:E}}function kf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Df(n)+Df(t[r])))}function Df(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Nf(t){return(t?t.ownerDocument:document).body.offsetHeight}function QT(t,e,n){const r=t[Mi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ca=Symbol("_vod"),cm=Symbol("_vsh"),Ek={name:"show",beforeMount(t,{value:e},{transition:n}){t[ca]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ri(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ri(t,!0),r.enter(t)):r.leave(t,()=>{ri(t,!1)}):ri(t,e))},beforeUnmount(t,{value:e}){ri(t,e)}};function ri(t,e){t.style.display=e?t[ca]:"none",t[cm]=!e}const XT=Symbol(""),YT=/(?:^|;)\s*display\s*:/;function JT(t,e,n){const r=t.style,s=Ge(n);let i=!1;if(n&&!s){if(e)if(Ge(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Uo(r,c,"")}else for(const o in e)n[o]==null&&Uo(r,o,"");for(const o in n)o==="display"&&(i=!0),Uo(r,o,n[o])}else if(s){if(e!==n){const o=r[XT];o&&(n+=";"+o),r.cssText=n,i=YT.test(n)}}else e&&t.removeAttribute("style");ca in t&&(t[ca]=i?r.display:"",t[cm]&&(r.display="none"))}const Of=/\s*!important$/;function Uo(t,e,n){if(se(n))n.forEach(r=>Uo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ZT(t,e);Of.test(n)?t.setProperty(Er(r),n.replace(Of,""),"important"):t[r]=n}}const Vf=["Webkit","Moz","ms"],Mc={};function ZT(t,e){const n=Mc[e];if(n)return n;let r=Wt(e);if(r!=="filter"&&r in t)return Mc[e]=r;r=Na(r);for(let s=0;s<Vf.length;s++){const i=Vf[s]+r;if(i in t)return Mc[e]=i}return e}const xf="http://www.w3.org/1999/xlink";function Lf(t,e,n,r,s,i=GE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xf,e.slice(6,e.length)):t.setAttributeNS(xf,e,n):n==null||i&&!Xp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Yt(n)?String(n):n)}function Mf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?om(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Xp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Lr(t,e,n,r){t.addEventListener(e,n,r)}function ew(t,e,n,r){t.removeEventListener(e,n,r)}const Ff=Symbol("_vei");function tw(t,e,n,r,s=null){const i=t[Ff]||(t[Ff]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=nw(e);if(r){const u=i[e]=iw(r,s);Lr(t,c,u,l)}else o&&(ew(t,c,o,l),i[e]=void 0)}}const Uf=/(?:Once|Passive|Capture)$/;function nw(t){let e;if(Uf.test(t)){e={};let r;for(;r=t.match(Uf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Er(t.slice(2)),e]}let Fc=0;const rw=Promise.resolve(),sw=()=>Fc||(rw.then(()=>Fc=0),Fc=Date.now());function iw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Jt(ow(r,n.value),e,5,[r])};return n.value=t,n.attached=sw(),n}function ow(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Bf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,aw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?QT(t,r,o):e==="style"?JT(t,n,r):Ca(e)?Gl(e)||tw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cw(t,e,r,o))?(Mf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Lf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ge(r))?Mf(t,Wt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Lf(t,e,r,o))};function cw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Bf(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Bf(e)&&Ge(n)?!1:e in t}const la=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>xo(e,n):e};function lw(t){t.target.composing=!0}function $f(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _s=Symbol("_assign"),vk={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[_s]=la(s);const i=r||s.props&&s.props.type==="number";Lr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=rl(c)),t[_s](c)}),n&&Lr(t,"change",()=>{t.value=t.value.trim()}),e||(Lr(t,"compositionstart",lw),Lr(t,"compositionend",$f),Lr(t,"change",$f))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[_s]=la(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?rl(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Tk={deep:!0,created(t,e,n){t[_s]=la(n),Lr(t,"change",()=>{const r=t._modelValue,s=uw(t),i=t.checked,o=t[_s];if(se(r)){const c=Yp(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(ka(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(lm(t,i))})},mounted:jf,beforeUpdate(t,e,n){t[_s]=la(n),jf(t,e,n)}};function jf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(se(e))s=Yp(e,r.props.value)>-1;else if(ka(e))s=e.has(r.props.value);else{if(e===n)return;s=Va(e,lm(t,!0))}t.checked!==s&&(t.checked=s)}function uw(t){return"_value"in t?t._value:t.value}function lm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const hw=["ctrl","shift","alt","meta"],fw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hw.some(n=>t[`${n}Key`]&&!e.includes(n))},wk=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=fw[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},dw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ik=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=Er(s.key);if(e.some(o=>o===i||dw[o]===i))return t(s)}))},pw=ot({patchProp:aw},jT);let qf;function gw(){return qf||(qf=uT(pw))}const mw=((...t)=>{const e=gw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=yw(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,_w(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function _w(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function yw(t){return Ge(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let um;const ja=t=>um=t,hm=Symbol();function gl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ei;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ei||(Ei={}));function Ew(){const t=tg(!0),e=t.run(()=>Di({}));let n=[],r=[];const s=ou({install(i){ja(s),s._a=i,i.provide(hm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const fm=()=>{};function Hf(t,e,n,r=fm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ng()&&YE(s),s}function ss(t,...e){t.slice().forEach(n=>{n(...e)})}const vw=t=>t(),zf=Symbol(),Uc=Symbol();function ml(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];gl(s)&&gl(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!rr(r)?t[n]=ml(s,r):t[n]=r}return t}const Tw=Symbol();function ww(t){return!gl(t)||!Object.prototype.hasOwnProperty.call(t,Tw)}const{assign:Wn}=Object;function Iw(t){return!!(Ke(t)&&t.effect)}function Aw(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=vv(n.state.value[t]);return Wn(f,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=ou($t(()=>{ja(n);const E=n._s.get(t);return o[g].call(E,E)})),p),{}))}return l=dm(t,u,e,n,r,!0),l}function dm(t,e,n={},r,s,i){let o;const c=Wn({actions:{}},n),l={deep:!0};let u,f,p=[],g=[],E;const k=r.state.value[t];!i&&!k&&(r.state.value[t]={}),Di({});let V;function N(y){let m;u=f=!1,typeof y=="function"?(y(r.state.value[t]),m={type:Ei.patchFunction,storeId:t,events:E}):(ml(r.state.value[t],y),m={type:Ei.patchObject,payload:y,storeId:t,events:E});const I=V=Symbol();au().then(()=>{V===I&&(u=!0)}),f=!0,ss(p,m,r.state.value[t])}const F=i?function(){const{state:m}=n,I=m?m():{};this.$patch(A=>{Wn(A,I)})}:fm;function S(){o.stop(),p=[],g=[],r._s.delete(t)}const P=(y,m="")=>{if(zf in y)return y[Uc]=m,y;const I=function(){ja(r);const A=Array.from(arguments),b=[],T=[];function ge(ue){b.push(ue)}function xe(ue){T.push(ue)}ss(g,{args:A,name:I[Uc],store:L,after:ge,onError:xe});let Ae;try{Ae=y.apply(this&&this.$id===t?this:L,A)}catch(ue){throw ss(T,ue),ue}return Ae instanceof Promise?Ae.then(ue=>(ss(b,ue),ue)).catch(ue=>(ss(T,ue),Promise.reject(ue))):(ss(b,Ae),Ae)};return I[zf]=!0,I[Uc]=m,I},C={_p:r,$id:t,$onAction:Hf.bind(null,g),$patch:N,$reset:F,$subscribe(y,m={}){const I=Hf(p,y,m.detached,()=>A()),A=o.run(()=>_i(()=>r.state.value[t],b=>{(m.flush==="sync"?f:u)&&y({storeId:t,type:Ei.direct,events:E},b)},Wn({},l,m)));return I},$dispose:S},L=Yi(C);r._s.set(t,L);const v=(r._a&&r._a.runWithContext||vw)(()=>r._e.run(()=>(o=tg()).run(()=>e({action:P}))));for(const y in v){const m=v[y];if(Ke(m)&&!Iw(m)||rr(m))i||(k&&ww(m)&&(Ke(m)?m.value=k[y]:ml(m,k[y])),r.state.value[t][y]=m);else if(typeof m=="function"){const I=P(m,y);v[y]=I,c.actions[y]=m}}return Wn(L,v),Wn(Ie(L),v),Object.defineProperty(L,"$state",{get:()=>r.state.value[t],set:y=>{N(m=>{Wn(m,y)})}}),r._p.forEach(y=>{Wn(L,o.run(()=>y({store:L,app:r._a,pinia:r,options:c})))}),k&&i&&n.hydrate&&n.hydrate(L.$state,k),u=!0,f=!0,L}/*! #__NO_SIDE_EFFECTS__ */function bw(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=rT();return o=o||(l?zt(hm,null):null),o&&ja(o),o=um,o._s.has(t)||(s?dm(t,e,r,o):Aw(t,r,o)),o._s.get(t)}return i.$id=t,i}const Rw=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Sw={};function Pw(t,e){const n=Wv("RouterView");return sa(),oa(n)}const Cw=Rw(Sw,[["render",Pw]]),kw="modulepreload",Dw=function(t){return"/"+t},Wf={},je=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(n.map(u=>{if(u=Dw(u),u in Wf)return;Wf[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":kw,f||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),f)return new Promise((E,k)=>{g.addEventListener("load",E),g.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof document<"u";function pm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&pm(t.default)}const be=Object.assign;function Bc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Zt(s)?s.map(t):t(s)}return n}const vi=()=>{},Zt=Array.isArray,gm=/#/g,Ow=/&/g,Vw=/\//g,xw=/=/g,Lw=/\?/g,mm=/\+/g,Mw=/%5B/g,Fw=/%5D/g,_m=/%5E/g,Uw=/%60/g,ym=/%7B/g,Bw=/%7C/g,Em=/%7D/g,$w=/%20/g;function pu(t){return encodeURI(""+t).replace(Bw,"|").replace(Mw,"[").replace(Fw,"]")}function jw(t){return pu(t).replace(ym,"{").replace(Em,"}").replace(_m,"^")}function _l(t){return pu(t).replace(mm,"%2B").replace($w,"+").replace(gm,"%23").replace(Ow,"%26").replace(Uw,"`").replace(ym,"{").replace(Em,"}").replace(_m,"^")}function qw(t){return _l(t).replace(xw,"%3D")}function Hw(t){return pu(t).replace(gm,"%23").replace(Lw,"%3F")}function zw(t){return t==null?"":Hw(t).replace(Vw,"%2F")}function Fi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ww=/\/$/,Kw=t=>t.replace(Ww,"");function $c(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Yw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Fi(o)}}function Gw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Kf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Qw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&As(e.matched[r],n.matched[s])&&vm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function As(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Xw(t[n],e[n]))return!1;return!0}function Xw(t,e){return Zt(t)?Gf(t,e):Zt(e)?Gf(e,t):t===e}function Gf(t,e){return Zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Yw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ui;(function(t){t.pop="pop",t.push="push"})(Ui||(Ui={}));var Ti;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ti||(Ti={}));function Jw(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Kw(t)}const Zw=/^[^#]+#/;function eI(t,e){return t.replace(Zw,"#")+e}function tI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const qa=()=>({left:window.scrollX,top:window.scrollY});function nI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=tI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Qf(t,e){return(history.state?history.state.position-e:-1)+t}const yl=new Map;function rI(t,e){yl.set(t,e)}function sI(t){const e=yl.get(t);return yl.delete(t),e}let iI=()=>location.protocol+"//"+location.host;function Tm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Kf(l,"")}return Kf(n,t)+r+s}function oI(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const E=Tm(t,location),k=n.value,V=e.value;let N=0;if(g){if(n.value=E,e.value=g,o&&o===k){o=null;return}N=V?g.position-V.position:0}else r(E);s.forEach(F=>{F(n.value,k,{delta:N,type:Ui.pop,direction:N?N>0?Ti.forward:Ti.back:Ti.unknown})})};function l(){o=n.value}function u(g){s.push(g);const E=()=>{const k=s.indexOf(g);k>-1&&s.splice(k,1)};return i.push(E),E}function f(){const{history:g}=window;g.state&&g.replaceState(be({},g.state,{scroll:qa()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Xf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?qa():null}}function aI(t){const{history:e,location:n}=window,r={value:Tm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:iI()+t+l;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(E){console.error(E),n[f?"replace":"assign"](g)}}function o(l,u){const f=be({},e.state,Xf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=be({},s.value,e.state,{forward:l,scroll:qa()});i(f.current,f,!0);const p=be({},Xf(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function cI(t){t=Jw(t);const e=aI(t),n=oI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:eI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function lI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),cI(t)}function uI(t){return typeof t=="string"||t&&typeof t=="object"}function wm(t){return typeof t=="string"||typeof t=="symbol"}const Im=Symbol("");var Yf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Yf||(Yf={}));function bs(t,e){return be(new Error,{type:t,[Im]:!0},e)}function In(t,e){return t instanceof Error&&Im in t&&(e==null||!!(t.type&e))}const Jf="[^/]+?",hI={sensitive:!1,strict:!1,start:!0,end:!0},fI=/[.+*?^${}()[\]/\\]/g;function dI(t,e){const n=be({},hI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let E=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(fI,"\\$&"),E+=40;else if(g.type===1){const{value:k,repeatable:V,optional:N,regexp:F}=g;i.push({name:k,repeatable:V,optional:N});const S=F||Jf;if(S!==Jf){E+=10;try{new RegExp(`(${S})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${k}" (${S}): `+C.message)}}let P=V?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;p||(P=N&&u.length<2?`(?:/${P})`:"/"+P),N&&(P+="?"),s+=P,E+=20,N&&(E+=-8),V&&(E+=-20),S===".*"&&(E+=-50)}f.push(E)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const E=f[g]||"",k=i[g-1];p[k.name]=E&&k.repeatable?E.split("/"):E}return p}function l(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const E of g)if(E.type===0)f+=E.value;else if(E.type===1){const{value:k,repeatable:V,optional:N}=E,F=k in u?u[k]:"";if(Zt(F)&&!V)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const S=Zt(F)?F.join("/"):F;if(!S)if(N)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);f+=S}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function pI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Am(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=pI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Zf(r))return 1;if(Zf(s))return-1}return s.length-r.length}function Zf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const gI={type:0,value:""},mI=/[a-zA-Z0-9_]/;function _I(t){if(!t)return[[]];if(t==="/")return[[gI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${u}": ${E}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:mI.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function yI(t,e,n){const r=dI(_I(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function EI(t,e){const n=[],r=new Map;e=rd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,E){const k=!E,V=td(p);V.aliasOf=E&&E.record;const N=rd(e,p),F=[V];if("alias"in p){const C=typeof p.alias=="string"?[p.alias]:p.alias;for(const L of C)F.push(td(be({},V,{components:E?E.record.components:V.components,path:L,aliasOf:E?E.record:V})))}let S,P;for(const C of F){const{path:L}=C;if(g&&L[0]!=="/"){const M=g.record.path,v=M[M.length-1]==="/"?"":"/";C.path=g.record.path+(L&&v+L)}if(S=yI(C,g,N),E?E.alias.push(S):(P=P||S,P!==S&&P.alias.push(S),k&&p.name&&!nd(S)&&o(p.name)),bm(S)&&l(S),V.children){const M=V.children;for(let v=0;v<M.length;v++)i(M[v],S,E&&E.children[v])}E=E||S}return P?()=>{o(P)}:vi}function o(p){if(wm(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=wI(p,n);n.splice(g,0,p),p.record.name&&!nd(p)&&r.set(p.record.name,p)}function u(p,g){let E,k={},V,N;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw bs(1,{location:p});N=E.record.name,k=be(ed(g.params,E.keys.filter(P=>!P.optional).concat(E.parent?E.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),p.params&&ed(p.params,E.keys.map(P=>P.name))),V=E.stringify(k)}else if(p.path!=null)V=p.path,E=n.find(P=>P.re.test(V)),E&&(k=E.parse(V),N=E.record.name);else{if(E=g.name?r.get(g.name):n.find(P=>P.re.test(g.path)),!E)throw bs(1,{location:p,currentLocation:g});N=E.record.name,k=be({},g.params,p.params),V=E.stringify(k)}const F=[];let S=E;for(;S;)F.unshift(S.record),S=S.parent;return{name:N,path:V,params:k,matched:F,meta:TI(F)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function ed(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function td(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:vI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function vI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function nd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function TI(t){return t.reduce((e,n)=>be(e,n.meta),{})}function rd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function wI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Am(t,e[i])<0?r=i:n=i+1}const s=II(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function II(t){let e=t;for(;e=e.parent;)if(bm(e)&&Am(t,e)===0)return e}function bm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function AI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(mm," "),o=i.indexOf("="),c=Fi(o<0?i:i.slice(0,o)),l=o<0?null:Fi(i.slice(o+1));if(c in e){let u=e[c];Zt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function sd(t){let e="";for(let n in t){const r=t[n];if(n=qw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zt(r)?r.map(i=>i&&_l(i)):[r&&_l(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function bI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const RI=Symbol(""),id=Symbol(""),Ha=Symbol(""),gu=Symbol(""),El=Symbol("");function si(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(bs(4,{from:n,to:e})):g instanceof Error?l(g):uI(g)?l(bs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function jc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(pm(l)){const f=(l.__vccOpts||l)[e];f&&i.push(Qn(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=Nw(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const E=(p.__vccOpts||p)[e];return E&&Qn(E,n,r,o,c,s)()}))}}return i}function od(t){const e=zt(Ha),n=zt(gu),r=$t(()=>{const l=ps(t.to);return e.resolve(l)}),s=$t(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(As.bind(null,f));if(g>-1)return g;const E=ad(l[u-2]);return u>1&&ad(f)===E&&p[p.length-1].path!==E?p.findIndex(As.bind(null,l[u-2])):g}),i=$t(()=>s.value>-1&&DI(n.params,r.value.params)),o=$t(()=>s.value>-1&&s.value===n.matched.length-1&&vm(n.params,r.value.params));function c(l={}){if(kI(l)){const u=e[ps(t.replace)?"replace":"push"](ps(t.to)).catch(vi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:$t(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function SI(t){return t.length===1?t[0]:t}const PI=Dg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:od,setup(t,{slots:e}){const n=Yi(od(t)),{options:r}=zt(Ha),s=$t(()=>({[cd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[cd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&SI(e.default(n));return t.custom?i:du("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),CI=PI;function kI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function DI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ad(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const cd=(t,e,n)=>t??e??n,NI=Dg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zt(El),s=$t(()=>t.route||r.value),i=zt(id,0),o=$t(()=>{let u=ps(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=$t(()=>s.value.matched[o.value]);Lo(id,$t(()=>o.value+1)),Lo(RI,c),Lo(El,s);const l=Di();return _i(()=>[l.value,c.value,t.name],([u,f,p],[g,E,k])=>{f&&(f.instances[p]=u,E&&E!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=E.leaveGuards),f.updateGuards.size||(f.updateGuards=E.updateGuards))),u&&f&&(!E||!As(f,E)||!g)&&(f.enterCallbacks[p]||[]).forEach(V=>V(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return ld(n.default,{Component:g,route:u});const E=p.props[f],k=E?E===!0?u.params:typeof E=="function"?E(u):E:null,N=du(g,be({},k,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return ld(n.default,{Component:N,route:u})||N}}});function ld(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const OI=NI;function VI(t){const e=EI(t.routes,t),n=t.parseQuery||AI,r=t.stringifyQuery||sd,s=t.history,i=si(),o=si(),c=si(),l=_v(Hn);let u=Hn;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Bc.bind(null,U=>""+U),p=Bc.bind(null,zw),g=Bc.bind(null,Fi);function E(U,Y){let Q,te;return wm(U)?(Q=e.getRecordMatcher(U),te=Y):te=U,e.addRoute(te,Q)}function k(U){const Y=e.getRecordMatcher(U);Y&&e.removeRoute(Y)}function V(){return e.getRoutes().map(U=>U.record)}function N(U){return!!e.getRecordMatcher(U)}function F(U,Y){if(Y=be({},Y||l.value),typeof U=="string"){const D=$c(n,U,Y.path),j=e.resolve({path:D.path},Y),H=s.createHref(D.fullPath);return be(D,j,{params:g(j.params),hash:Fi(D.hash),redirectedFrom:void 0,href:H})}let Q;if(U.path!=null)Q=be({},U,{path:$c(n,U.path,Y.path).path});else{const D=be({},U.params);for(const j in D)D[j]==null&&delete D[j];Q=be({},U,{params:p(D)}),Y.params=p(Y.params)}const te=e.resolve(Q,Y),ve=U.hash||"";te.params=f(g(te.params));const w=Gw(r,be({},U,{hash:jw(ve),path:te.path})),R=s.createHref(w);return be({fullPath:w,hash:ve,query:r===sd?bI(U.query):U.query||{}},te,{redirectedFrom:void 0,href:R})}function S(U){return typeof U=="string"?$c(n,U,l.value.path):be({},U)}function P(U,Y){if(u!==U)return bs(8,{from:Y,to:U})}function C(U){return v(U)}function L(U){return C(be(S(U),{replace:!0}))}function M(U){const Y=U.matched[U.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let te=typeof Q=="function"?Q(U):Q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=S(te):{path:te},te.params={}),be({query:U.query,hash:U.hash,params:te.path!=null?{}:U.params},te)}}function v(U,Y){const Q=u=F(U),te=l.value,ve=U.state,w=U.force,R=U.replace===!0,D=M(Q);if(D)return v(be(S(D),{state:typeof D=="object"?be({},ve,D.state):ve,force:w,replace:R}),Y||Q);const j=Q;j.redirectedFrom=Y;let H;return!w&&Qw(r,te,Q)&&(H=bs(16,{to:j,from:te}),nt(te,te,!0,!1)),(H?Promise.resolve(H):I(j,te)).catch(B=>In(B)?In(B,2)?B:at(B):ie(B,j,te)).then(B=>{if(B){if(In(B,2))return v(be({replace:R},S(B.to),{state:typeof B.to=="object"?be({},ve,B.to.state):ve,force:w}),Y||j)}else B=b(j,te,!0,R,ve);return A(j,te,B),B})}function y(U,Y){const Q=P(U,Y);return Q?Promise.reject(Q):Promise.resolve()}function m(U){const Y=Qe.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(U):U()}function I(U,Y){let Q;const[te,ve,w]=xI(U,Y);Q=jc(te.reverse(),"beforeRouteLeave",U,Y);for(const D of te)D.leaveGuards.forEach(j=>{Q.push(Qn(j,U,Y))});const R=y.bind(null,U,Y);return Q.push(R),ze(Q).then(()=>{Q=[];for(const D of i.list())Q.push(Qn(D,U,Y));return Q.push(R),ze(Q)}).then(()=>{Q=jc(ve,"beforeRouteUpdate",U,Y);for(const D of ve)D.updateGuards.forEach(j=>{Q.push(Qn(j,U,Y))});return Q.push(R),ze(Q)}).then(()=>{Q=[];for(const D of w)if(D.beforeEnter)if(Zt(D.beforeEnter))for(const j of D.beforeEnter)Q.push(Qn(j,U,Y));else Q.push(Qn(D.beforeEnter,U,Y));return Q.push(R),ze(Q)}).then(()=>(U.matched.forEach(D=>D.enterCallbacks={}),Q=jc(w,"beforeRouteEnter",U,Y,m),Q.push(R),ze(Q))).then(()=>{Q=[];for(const D of o.list())Q.push(Qn(D,U,Y));return Q.push(R),ze(Q)}).catch(D=>In(D,8)?D:Promise.reject(D))}function A(U,Y,Q){c.list().forEach(te=>m(()=>te(U,Y,Q)))}function b(U,Y,Q,te,ve){const w=P(U,Y);if(w)return w;const R=Y===Hn,D=os?history.state:{};Q&&(te||R?s.replace(U.fullPath,be({scroll:R&&D&&D.scroll},ve)):s.push(U.fullPath,ve)),l.value=U,nt(U,Y,Q,R),at()}let T;function ge(){T||(T=s.listen((U,Y,Q)=>{if(!Ct.listening)return;const te=F(U),ve=M(te);if(ve){v(be(ve,{replace:!0,force:!0}),te).catch(vi);return}u=te;const w=l.value;os&&rI(Qf(w.fullPath,Q.delta),qa()),I(te,w).catch(R=>In(R,12)?R:In(R,2)?(v(be(S(R.to),{force:!0}),te).then(D=>{In(D,20)&&!Q.delta&&Q.type===Ui.pop&&s.go(-1,!1)}).catch(vi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ie(R,te,w))).then(R=>{R=R||b(te,w,!1),R&&(Q.delta&&!In(R,8)?s.go(-Q.delta,!1):Q.type===Ui.pop&&In(R,20)&&s.go(-1,!1)),A(te,w,R)}).catch(vi)}))}let xe=si(),Ae=si(),ue;function ie(U,Y,Q){at(U);const te=Ae.list();return te.length?te.forEach(ve=>ve(U,Y,Q)):console.error(U),Promise.reject(U)}function Le(){return ue&&l.value!==Hn?Promise.resolve():new Promise((U,Y)=>{xe.add([U,Y])})}function at(U){return ue||(ue=!U,ge(),xe.list().forEach(([Y,Q])=>U?Q(U):Y()),xe.reset()),U}function nt(U,Y,Q,te){const{scrollBehavior:ve}=t;if(!os||!ve)return Promise.resolve();const w=!Q&&sI(Qf(U.fullPath,0))||(te||!Q)&&history.state&&history.state.scroll||null;return au().then(()=>ve(U,Y,w)).then(R=>R&&nI(R)).catch(R=>ie(R,U,Y))}const Pe=U=>s.go(U);let Kt;const Qe=new Set,Ct={currentRoute:l,listening:!0,addRoute:E,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:V,resolve:F,options:t,push:C,replace:L,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Ae.add,isReady:Le,install(U){const Y=this;U.component("RouterLink",CI),U.component("RouterView",OI),U.config.globalProperties.$router=Y,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>ps(l)}),os&&!Kt&&l.value===Hn&&(Kt=!0,C(s.location).catch(ve=>{}));const Q={};for(const ve in Hn)Object.defineProperty(Q,ve,{get:()=>l.value[ve],enumerable:!0});U.provide(Ha,Y),U.provide(gu,_g(Q)),U.provide(El,l);const te=U.unmount;Qe.add(U),U.unmount=function(){Qe.delete(U),Qe.size<1&&(u=Hn,T&&T(),T=null,l.value=Hn,Kt=!1,ue=!1),te()}}};function ze(U){return U.reduce((Y,Q)=>Y.then(()=>m(Q)),Promise.resolve())}return Ct}function xI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>As(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>As(u,l))||s.push(l))}return[n,r,s]}function Ak(){return zt(Ha)}function bk(t){return zt(gu)}const LI=()=>{};var ud={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},MI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,E=u&63;l||(E=64,o||(g=64)),r.push(n[f],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new FI;const g=i<<2|c>>4;if(r.push(g),u!==64){const E=c<<4&240|u>>2;if(r.push(E),p!==64){const k=u<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class FI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UI=function(t){const e=Rm(t);return Sm.encodeByteArray(e,!0)},ua=function(t){return UI(t).replace(/\./g,"")},Pm=function(t){try{return Sm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=()=>BI().__FIREBASE_DEFAULTS__,jI=()=>{if(typeof process>"u"||typeof ud>"u")return;const t=ud.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pm(t[1]);return e&&JSON.parse(e)},za=()=>{try{return LI()||$I()||jI()||qI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cm=t=>za()?.emulatorHosts?.[t],km=t=>{const e=Cm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dm=()=>za()?.config,Nm=t=>za()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mu(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ua(JSON.stringify(n)),ua(JSON.stringify(o)),""].join(".")}const wi={};function zI(){const t={prod:[],emulator:[]};for(const e of Object.keys(wi))wi[e]?t.emulator.push(e):t.prod.push(e);return t}function WI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let hd=!1;function _u(t,e){if(typeof window>"u"||typeof document>"u"||!vr(window.location.host)||wi[t]===e||wi[t]||hd)return;wi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=zI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,E){g.setAttribute("width","24"),g.setAttribute("id",E),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{hd=!0,o()},g}function f(g,E){g.setAttribute("id",E),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=WI(r),E=n("text"),k=document.getElementById(E)||document.createElement("span"),V=n("learnmore"),N=document.getElementById(V)||document.createElement("a"),F=n("preprendIcon"),S=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const P=g.element;c(P),f(N,V);const C=u();l(S,F),P.append(S,k,N,C),document.body.appendChild(P)}i?(k.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(S.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function GI(){const t=za()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function YI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JI(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZI(){return!GI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eA(){try{return typeof indexedDB=="object"}catch{return!1}}function tA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nA,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?rA(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new vn(s,c,r)}}function rA(t,e){return t.replace(sA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const sA=/\{\$([^}]+)}/g;function iA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(fd(i)&&fd(o)){if(!$r(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ai(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ci(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function oA(t,e){const n=new aA(t,e);return n.subscribe.bind(n)}class aA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qc),s.error===void 0&&(s.error=qc),s.complete===void 0&&(s.complete=qc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new HI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hA(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uA(t){return t===Vr?void 0:t}function hA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const dA={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},pA=_e.INFO,gA={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},mA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yu{constructor(e){this.name=e,this._logLevel=pA,this._logHandler=mA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const _A=(t,e)=>e.some(n=>t instanceof n);let dd,pd;function yA(){return dd||(dd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EA(){return pd||(pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vm=new WeakMap,vl=new WeakMap,xm=new WeakMap,Hc=new WeakMap,Eu=new WeakMap;function vA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vm.set(n,t)}).catch(()=>{}),Eu.set(e,t),e}function TA(t){if(vl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vl.set(t,e)}let Tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wA(t){Tl=t(Tl)}function IA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zc(this),e,...n);return xm.set(r,e.sort?e.sort():[e]),sr(r)}:EA().includes(t)?function(...e){return t.apply(zc(this),e),sr(Vm.get(this))}:function(...e){return sr(t.apply(zc(this),e))}}function AA(t){return typeof t=="function"?IA(t):(t instanceof IDBTransaction&&TA(t),_A(t,yA())?new Proxy(t,Tl):t)}function sr(t){if(t instanceof IDBRequest)return vA(t);if(Hc.has(t))return Hc.get(t);const e=AA(t);return e!==t&&(Hc.set(t,e),Eu.set(e,t)),e}const zc=t=>Eu.get(t);function bA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sr(o.result),l.oldVersion,l.newVersion,sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const RA=["get","getKey","getAll","getAllKeys","count"],SA=["put","add","delete","clear"],Wc=new Map;function gd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wc.get(e))return Wc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=SA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||RA.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Wc.set(e,i),i}wA(t=>({...t,get:(e,n,r)=>gd(e,n)||t.get(e,n,r),has:(e,n)=>!!gd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CA(t){return t.getComponent()?.type==="VERSION"}const wl="@firebase/app",md="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new yu("@firebase/app"),kA="@firebase/app-compat",DA="@firebase/analytics-compat",NA="@firebase/analytics",OA="@firebase/app-check-compat",VA="@firebase/app-check",xA="@firebase/auth",LA="@firebase/auth-compat",MA="@firebase/database",FA="@firebase/data-connect",UA="@firebase/database-compat",BA="@firebase/functions",$A="@firebase/functions-compat",jA="@firebase/installations",qA="@firebase/installations-compat",HA="@firebase/messaging",zA="@firebase/messaging-compat",WA="@firebase/performance",KA="@firebase/performance-compat",GA="@firebase/remote-config",QA="@firebase/remote-config-compat",XA="@firebase/storage",YA="@firebase/storage-compat",JA="@firebase/firestore",ZA="@firebase/ai",eb="@firebase/firestore-compat",tb="firebase",nb="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="[DEFAULT]",rb={[wl]:"fire-core",[kA]:"fire-core-compat",[NA]:"fire-analytics",[DA]:"fire-analytics-compat",[VA]:"fire-app-check",[OA]:"fire-app-check-compat",[xA]:"fire-auth",[LA]:"fire-auth-compat",[MA]:"fire-rtdb",[FA]:"fire-data-connect",[UA]:"fire-rtdb-compat",[BA]:"fire-fn",[$A]:"fire-fn-compat",[jA]:"fire-iid",[qA]:"fire-iid-compat",[HA]:"fire-fcm",[zA]:"fire-fcm-compat",[WA]:"fire-perf",[KA]:"fire-perf-compat",[GA]:"fire-rc",[QA]:"fire-rc-compat",[XA]:"fire-gcs",[YA]:"fire-gcs-compat",[JA]:"fire-fst",[eb]:"fire-fst-compat",[ZA]:"fire-vertex","fire-js":"fire-js",[tb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Map,sb=new Map,Al=new Map;function _d(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jr(t){const e=t.name;if(Al.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;Al.set(e,t);for(const n of ha.values())_d(n,t);for(const n of sb.values())_d(n,t);return!0}function Wa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new eo("app","Firebase",ib);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=nb;function Lm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Il,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ir.create("bad-app-name",{appName:String(s)});if(n||(n=Dm()),!n)throw ir.create("no-options");const i=ha.get(s);if(i){if($r(n,i.options)&&$r(r,i.config))return i;throw ir.create("duplicate-app",{appName:s})}const o=new fA(s);for(const l of Al.values())o.addComponent(l);const c=new ob(n,r,o);return ha.set(s,c),c}function vu(t=Il){const e=ha.get(t);if(!e&&t===Il&&Dm())return Lm();if(!e)throw ir.create("no-app",{appName:t});return e}function hn(t,e,n){let r=rb[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(o.join(" "));return}jr(new fr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="firebase-heartbeat-database",cb=1,Bi="firebase-heartbeat-store";let Kc=null;function Mm(){return Kc||(Kc=bA(ab,cb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),Kc}async function lb(t){try{const n=(await Mm()).transaction(Bi),r=await n.objectStore(Bi).get(Fm(t));return await n.done,r}catch(e){if(e instanceof vn)Nn.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e?.message});Nn.warn(n.message)}}}async function yd(t,e){try{const r=(await Mm()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(e,Fm(t)),await r.done}catch(n){if(n instanceof vn)Nn.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n?.message});Nn.warn(r.message)}}}function Fm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=1024,hb=30;class fb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ed();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>hb){const s=gb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Nn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ed(),{heartbeatsToSend:n,unsentEntries:r}=db(this._heartbeatsCache.heartbeats),s=ua(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Nn.warn(e),""}}}function Ed(){return new Date().toISOString().substring(0,10)}function db(t,e=ub){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eA()?tA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lb(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vd(t){return ua(JSON.stringify({version:2,heartbeats:t})).length}function gb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(t){jr(new fr("platform-logger",e=>new PA(e),"PRIVATE")),jr(new fr("heartbeat",e=>new fb(e),"PRIVATE")),hn(wl,md,t),hn(wl,md,"esm2020"),hn("fire-js","")}mb("");function Um(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _b=Um,Bm=new eo("auth","Firebase",Um());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new yu("@firebase/auth");function yb(t,...e){fa.logLevel<=_e.WARN&&fa.warn(`Auth (${Gr}): ${t}`,...e)}function Bo(t,...e){fa.logLevel<=_e.ERROR&&fa.error(`Auth (${Gr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,...e){throw Tu(t,...e)}function fn(t,...e){return Tu(t,...e)}function $m(t,e,n){const r={..._b(),[e]:n};return new eo("auth","Firebase",r).create(e,{appName:t.name})}function or(t){return $m(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bm.create(t,...e)}function ce(t,e,...n){if(!t)throw Tu(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bo(e),new Error(e)}function On(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(){return typeof self<"u"&&self.location?.href||""}function Eb(){return Td()==="http:"||Td()==="https:"}function Td(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Eb()||XI()||"connection"in navigator)?navigator.onLine:!0}function Tb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=KI()||YI()}get(){return vb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ab=new no(3e4,6e4);function Qr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Tr(t,e,n,r,s={}){return qm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=to({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return QI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&vr(t.emulatorConfig.host)&&(u.credentials="include"),jm.fetch()(await Hm(t,t.config.apiHost,n,c),u)})}async function qm(t,e,n){t._canInitEmulator=!1;const r={...wb,...e};try{const s=new Rb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ro(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ro(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ro(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ro(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $m(t,f,u);en(t,f)}}catch(s){if(s instanceof vn)throw s;en(t,"network-request-failed",{message:String(s)})}}async function Ka(t,e,n,r,s={}){const i=await Tr(t,e,n,r,s);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Hm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?wu(t.config,s):`${t.config.apiScheme}://${s}`;return Ib.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function bb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Rb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),Ab.get())})}}function Ro(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}function wd(t){return t!==void 0&&t.enterprise!==void 0}class Sb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Pb(t,e){return Tr(t,"GET","/v2/recaptchaConfig",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(t,e){return Tr(t,"POST","/v1/accounts:delete",e)}async function da(t,e){return Tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kb(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),s=Iu(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Ii(Gc(s.auth_time)),issuedAtTime:Ii(Gc(s.iat)),expirationTime:Ii(Gc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Gc(t){return Number(t)*1e3}function Iu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pm(n);return s?JSON.parse(s):(Bo("Failed to decode base64 JWT payload"),null)}catch(s){return Bo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Id(t){const e=Iu(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&Db(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Db({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ii(this.lastLoginAt),this.creationTime=Ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(t){const e=t.auth,n=await t.getIdToken(),r=await $i(t,da(e,{idToken:n}));ce(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?zm(s.providerUserInfo):[],o=Vb(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Ob(t){const e=Ue(t);await pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zm(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(t,e){const n=await qm(t,{},async()=>{const r=to({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Hm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&vr(t.emulatorConfig.host)&&(l.credentials="include"),jm.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Lb(t,e){return Tr(t,"POST","/v2/accounts:revokeToken",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Id(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Id(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await xb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ys;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Nb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $i(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kb(this,e)}reload(){return Ob(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(or(this.auth));const e=await this.getIdToken();return await $i(this,Cb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:E,providerData:k,stsTokenManager:V}=n;ce(p&&V,e,"internal-error");const N=ys.fromJSON(this.name,V);ce(typeof p=="string",e,"internal-error"),zn(r,e.name),zn(s,e.name),ce(typeof g=="boolean",e,"internal-error"),ce(typeof E=="boolean",e,"internal-error"),zn(i,e.name),zn(o,e.name),zn(c,e.name),zn(l,e.name),zn(u,e.name),zn(f,e.name);const F=new Qt({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:N,createdAt:u,lastLoginAt:f});return k&&Array.isArray(k)&&(F.providerData=k.map(S=>({...S}))),l&&(F._redirectEventId=l),F}static async _fromIdTokenResponse(e,n,r=!1){const s=new ys;s.updateFromServerResponse(n);const i=new Qt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await pa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?zm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new ys;c.updateFromIdToken(r);const l=new Qt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=new Map;function Cn(t){On(t instanceof Function,"Expected a class definition");let e=Ad.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ad.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wm.type="NONE";const bd=Wm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$o(this.userKey,s.apiKey,i),this.fullPersistenceKey=$o("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await da(this.auth,{idToken:e}).catch(()=>{});return n?Qt._fromGetAccountInfoResponse(this.auth,n,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Es(Cn(bd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Cn(bd);const o=$o(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const g=await da(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Qt._fromGetAccountInfoResponse(e,g,f)}else p=Qt._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Es(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Es(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Km(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jm(e))return"Blackberry";if(Zm(e))return"Webos";if(Gm(e))return"Safari";if((e.includes("chrome/")||Qm(e))&&!e.includes("edge/"))return"Chrome";if(Ym(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Km(t=It()){return/firefox\//i.test(t)}function Gm(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qm(t=It()){return/crios\//i.test(t)}function Xm(t=It()){return/iemobile/i.test(t)}function Ym(t=It()){return/android/i.test(t)}function Jm(t=It()){return/blackberry/i.test(t)}function Zm(t=It()){return/webos/i.test(t)}function Au(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Mb(t=It()){return Au(t)&&!!window.navigator?.standalone}function Fb(){return JI()&&document.documentMode===10}function e_(t=It()){return Au(t)||Ym(t)||Zm(t)||Jm(t)||/windows phone/i.test(t)||Xm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t,e=[]){let n;switch(t){case"Browser":n=Rd(It());break;case"Worker":n=`${Rd(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bb(t,e={}){return Tr(t,"GET","/v2/passwordPolicy",Qr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=6;class jb{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??$b,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sd(this),this.idTokenSubscription=new Sd(this),this.beforeStateQueue=new Ub(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await da(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(jt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pa(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jt(this.app))return Promise.reject(or(this));const n=e?Ue(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jt(this.app)?Promise.reject(or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bb(this),n=new jb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Lb(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&yb(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Os(t){return Ue(t)}class Sd{constructor(e){this.auth=e,this.observer=null,this.addObserver=oA(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hb(t){Ga=t}function n_(t){return Ga.loadJS(t)}function zb(){return Ga.recaptchaEnterpriseScript}function Wb(){return Ga.gapiScript}function Kb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Gb{constructor(){this.enterprise=new Qb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Qb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Xb="recaptcha-enterprise",r_="NO_RECAPTCHA";class Yb{constructor(e){this.type=Xb,this.auth=Os(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Pb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Sb(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;wd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(r_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Gb().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&wd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=zb();l.length!==0&&(l+=c),n_(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Pd(t,e,n,r=!1,s=!1){const i=new Yb(t);let o;if(s)o=r_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Cd(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Pd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Pd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t,e){const n=Wa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if($r(i,e??{}))return s;en(s,"already-initialized")}return n.initialize({options:e})}function Zb(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Cn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function eR(t,e,n){const r=Os(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=s_(e),{host:o,port:c}=tR(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce($r(u,r.config.emulator)&&$r(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,vr(o)?(mu(`${i}//${o}${l}`),_u("Auth",!0)):nR()}function s_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tR(t){const e=s_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:kd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:kd(o)}}}function kd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function rR(t,e){return Tr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(t,e){return Ka(t,"POST","/v1/accounts:signInWithPassword",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(t,e){return Ka(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}async function oR(t,e){return Ka(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends bu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ji(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ji(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cd(e,n,"signInWithPassword",sR);case"emailLink":return iR(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cd(e,r,"signUpPassword",rR);case"emailLink":return oR(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e){return Ka(t,"POST","/v1/accounts:signInWithIdp",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="http://localhost";class qr extends bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:aR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=to(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lR(t){const e=ai(ci(t)).link,n=e?ai(ci(e)).deep_link_id:null,r=ai(ci(t)).deep_link_id;return(r?ai(ci(r)).link:null)||r||n||e||t}class Ru{constructor(e){const n=ai(ci(e)),r=n.apiKey??null,s=n.oobCode??null,i=cR(n.mode??null);ce(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=lR(e);try{return new Ru(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return ji._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ru.parseLink(n);return ce(r,"argument-error"),ji._fromEmailAndCode(e,r.code,r.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends i_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends ro{constructor(){super("facebook.com")}static credential(e){return qr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends ro{constructor(){super("github.com")}static credential(e){return qr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends ro{constructor(){super("twitter.com")}static credential(e,n){return qr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Qt._fromIdTokenResponse(e,r,s),o=Dd(r);return new Rs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Dd(r);return new Rs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Dd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends vn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ga.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ga(e,n,r,s)}}function o_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ga._fromErrorAndOperation(t,i,e,r):i})}async function uR(t,e,n=!1){const r=await $i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(t,e,n=!1){const{auth:r}=t;if(jt(r.app))return Promise.reject(or(r));const s="reauthenticate";try{const i=await $i(t,o_(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=Iu(i.idToken);ce(o,r,"internal-error");const{sub:c}=o;return ce(t.uid===c,r,"user-mismatch"),Rs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(t,e,n=!1){if(jt(t.app))return Promise.reject(or(t));const r="signIn",s=await o_(t,r,e),i=await Rs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function fR(t,e){return a_(Os(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(t){const e=Os(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function pR(t,e,n){return jt(t.app)?Promise.reject(or(t)):fR(Ue(t),Vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dR(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t,e){return Ue(t).setPersistence(e)}function mR(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function _R(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function yR(t,e,n,r){return Ue(t).onAuthStateChanged(e,n,r)}function ER(t){return Ue(t).signOut()}const ma="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ma,"1"),this.storage.removeItem(ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=1e3,TR=10;class l_ extends c_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=e_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Fb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,TR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}l_.type="LOCAL";const u_=l_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_ extends c_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}h_.type="SESSION";const f_=h_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Qa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await wR(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Su("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function AR(t){dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function bR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RR(){return navigator?.serviceWorker?.controller||null}function SR(){return d_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="firebaseLocalStorageDb",PR=1,_a="firebaseLocalStorage",g_="fbase_key";class so{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xa(t,e){return t.transaction([_a],e?"readwrite":"readonly").objectStore(_a)}function CR(){const t=indexedDB.deleteDatabase(p_);return new so(t).toPromise()}function Sl(){const t=indexedDB.open(p_,PR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_a,{keyPath:g_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_a)?e(r):(r.close(),await CR(),e(await Sl()))})})}async function Nd(t,e,n){const r=Xa(t,!0).put({[g_]:e,value:n});return new so(r).toPromise()}async function kR(t,e){const n=Xa(t,!1).get(e),r=await new so(n).toPromise();return r===void 0?null:r.value}function Od(t,e){const n=Xa(t,!0).delete(e);return new so(n).toPromise()}const DR=800,NR=3;class m_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return d_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qa._getInstance(SR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await bR(),!this.activeServiceWorker)return;this.sender=new IR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sl();return await Nd(e,ma,"1"),await Od(e,ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Od(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xa(s,!1).getAll();return new so(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m_.type="LOCAL";const OR=m_;new no(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t,e){return e?Cn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends bu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xR(t){return a_(t.auth,new Pu(t),t.bypassAuthState)}function LR(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),hR(n,new Pu(t),t.bypassAuthState)}async function MR(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),uR(n,new Pu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xR;case"linkViaPopup":case"linkViaRedirect":return MR;case"reauthViaPopup":case"reauthViaRedirect":return LR;default:en(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new no(2e3,1e4);class hs extends __{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hs.currentPopupAction&&hs.currentPopupAction.cancel(),hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FR.get())};e()}}hs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR="pendingRedirect",jo=new Map;class BR extends __{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jo.get(this.auth._key());if(!e){try{const r=await $R(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jo.set(this.auth._key(),e)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $R(t,e){const n=HR(e),r=qR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function jR(t,e){jo.set(t._key(),e)}function qR(t){return Cn(t._redirectPersistence)}function HR(t){return $o(UR,t.config.apiKey,t.name)}async function zR(t,e,n=!1){if(jt(t.app))return Promise.reject(or(t));const r=Os(t),s=VR(r,e),o=await new BR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=600*1e3;class KR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!y_(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(fn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vd(e))}saveEventToCache(e){this.cachedEventUids.add(Vd(e)),this.lastProcessedEventTime=Date.now()}}function Vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function y_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function GR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(t,e={}){return Tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YR=/^https?/;async function JR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QR(t);for(const n of e)try{if(ZR(n))return}catch{}en(t,"unauthorized-domain")}function ZR(t){const e=bl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YR.test(n))return!1;if(XR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=new no(3e4,6e4);function xd(){const t=dn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tS(t){return new Promise((e,n)=>{function r(){xd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xd(),n(fn(t,"network-request-failed"))},timeout:eS.get()})}if(dn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(dn().gapi?.load)r();else{const s=Kb("iframefcb");return dn()[s]=()=>{gapi.load?r():n(fn(t,"network-request-failed"))},n_(`${Wb()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw qo=null,e})}let qo=null;function nS(t){return qo=qo||tS(t),qo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=new no(5e3,15e3),sS="__/auth/iframe",iS="emulator/auth/iframe",oS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cS(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wu(e,iS):`https://${t.config.authDomain}/${sS}`,r={apiKey:e.apiKey,appName:t.name,v:Gr},s=aS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${to(r).slice(1)}`}async function lS(t){const e=await nS(t),n=dn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:cS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),c=dn().setTimeout(()=>{i(o)},rS.get());function l(){dn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hS=500,fS=600,dS="_blank",pS="http://localhost";class Ld{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gS(t,e,n,r=hS,s=fS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...uS,width:r.toString(),height:s.toString(),top:i,left:o},u=It().toLowerCase();n&&(c=Qm(u)?dS:n),Km(u)&&(e=e||pS,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[E,k])=>`${g}${E}=${k},`,"");if(Mb(u)&&c!=="_self")return mS(e||"",c),new Ld(null);const p=window.open(e||"",c,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Ld(p)}function mS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="__/auth/handler",yS="emulator/auth/handler",ES=encodeURIComponent("fac");async function Md(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gr,eventId:s};if(e instanceof i_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ro){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${ES}=${encodeURIComponent(l)}`:"";return`${vS(t)}?${to(c).slice(1)}${u}`}function vS({config:t}){return t.emulator?wu(t,yS):`https://${t.authDomain}/${_S}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="webStorageSupport";class TS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=f_,this._completeRedirectFn=zR,this._overrideRedirectResult=jR}async _openPopup(e,n,r,s){On(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Md(e,n,r,bl(),s);return gS(e,i,Su())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Md(e,n,r,bl(),s);return AR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(On(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lS(e),r=new KR(e);return n.register("authEvent",s=>(ce(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qc,{type:Qc},s=>{const i=s?.[0]?.[Qc];i!==void 0&&n(!!i),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e_()||Gm()||Au()}}const wS=TS;var Fd="@firebase/auth",Ud="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bS(t){jr(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t_(t)},u=new qb(r,s,i,l);return Zb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jr(new fr("auth-internal",e=>{const n=Os(e.getProvider("auth").getImmediate());return(r=>new IS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Fd,Ud,AS(t)),hn(Fd,Ud,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=300,SS=Nm("authIdTokenMaxAge")||RS;let Bd=null;const PS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SS)return;const s=n?.token;Bd!==s&&(Bd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ho(t=vu()){const e=Wa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Jb(t,{popupRedirectResolver:wS,persistence:[OR,u_,f_]}),r=Nm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=PS(i.toString());_R(n,o,()=>o(n.currentUser)),mR(n,c=>o(c))}}const s=Cm("auth");return s&&eR(n,`http://${s}`),n}function CS(){return document.getElementsByTagName("head")?.[0]??document}Hb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",CS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bS("Browser");const kS=bw("auth",()=>{const t=Di(null),e=Di(!0);return{user:t,loading:e,login:async(i,o)=>{const c=Ho(),l=await pR(c,i,o);t.value={email:l.user.email??""}},logout:async()=>{const i=Ho();await ER(i),t.value=null},fetchUser:()=>new Promise(i=>{const o=Ho();yR(o,c=>{t.value=c?{email:c.email??""}:null,e.value=!1,i()})})}}),DS=[{path:"/blog/c-programming-language",name:"c-programming",component:()=>je(()=>import("./CProgrammingIndex-DzLlHtoK.js"),__vite__mapDeps([0,1,2])),meta:{title:"C Programming Tutorial",icon:"/ralphmaron.png"}},{path:"/blog/c-introduction",name:"c-introduction",component:()=>je(()=>import("./IntroductionIndex-BMcrvjOV.js"),__vite__mapDeps([3,1,2,4,5,6,7])),meta:{title:"C Language Introduction",icon:"/ralphmaron.png"}},{path:"/blog/c-compilation-process",name:"c-compilation-process",component:()=>je(()=>import("./CompilationProcessIndex-BKGvKnMN.js"),__vite__mapDeps([8,1,2,4,5,6,7])),meta:{title:"C Compilation Process",icon:"/ralphmaron.png"}},{path:"/blog/c-identifiers",name:"c-identifiers",component:()=>je(()=>import("./IdentifiersIndex-C-ovSbOz.js"),__vite__mapDeps([9,1,2,4,5,6,7,10])),meta:{title:"Identifiers in C",icon:"/ralphmaron.png"}},{path:"/blog/c-keywords",name:"c-keywords",component:()=>je(()=>import("./KeywordsIndex-AICnlZGo.js"),__vite__mapDeps([11,1,2,4,5,12])),meta:{title:"Identifiers in C",icon:"/ralphmaron.png"}},{path:"/blog/c-variables",name:"c-variables",component:()=>je(()=>import("./VariablesIndex-CIJWWrPz.js"),__vite__mapDeps([13,1,2,4,5,6,7])),meta:{title:"C Language Variables",icon:"/ralphmaron.png"}},{path:"/blog/c-data-types",name:"c-data-types",component:()=>je(()=>import("./DataTypeIndex-DzPjePyG.js"),__vite__mapDeps([14,1,2,4,5,6,7])),meta:{title:"C Data Types",icon:"/ralphmaron.png"}},{path:"/blog/c-quiz-basics",name:"c-quiz-basics",component:()=>je(()=>import("./QuizOneIndex-B-p2KZZM.js"),__vite__mapDeps([15,1,2])),meta:{title:"Quiz Variables and Data Types in C",icon:"/ralphmaron.png"}},{path:"/blog/c-input-output",name:"c-input-output",component:()=>je(()=>import("./InputAndOutputIndex-BiXQTLAN.js"),__vite__mapDeps([16,1,2])),meta:{title:"C Input and Output",icon:"/ralphmaron.png"}},{path:"/blog/c-operators",name:"c-operators",component:()=>je(()=>import("./OperatorsIndex-DSdOhjSQ.js"),__vite__mapDeps([17,1,2])),meta:{title:"C Operators",icon:"/ralphmaron.png"}},{path:"/blog/c-quiz-io-operators",name:"c-quiz-io-operators",component:()=>je(()=>import("./QuizTwoIndex-WK36X6P5.js"),__vite__mapDeps([18,1,2])),meta:{title:"C - Quiz Two",icon:"/ralphmaron.png"}},{path:"/blog/c-conditional-statements",name:"c-conditional-statements",component:()=>je(()=>import("./ConditionalStatementsIndex-D7x4Ao9f.js"),__vite__mapDeps([19,1,2])),meta:{title:"Conditional Statements",icon:"/ralphmaron.png"}},{path:"/blog/c-loops",name:"c-loops",component:()=>je(()=>import("./LoopsIndex-DBMG_0Et.js"),__vite__mapDeps([20,1,2])),meta:{title:"Conditional Statements",icon:"/ralphmaron.png"}},{path:"/blog/c-quiz-conditional-loops",name:"c-quiz-conditional-loops",component:()=>je(()=>import("./QuizThreeIndex-BJZ1kuN9.js"),__vite__mapDeps([21,1,2])),meta:{title:"Conditional Statements",icon:"/ralphmaron.png"}}],NS=[...DS],OS=[{path:"/private/login",name:"login",component:()=>je(()=>import("./LoginIndex-Bd_Dh8mh.js"),__vite__mapDeps([22,23])),meta:{title:"Login",icon:"/favicon.jpg"}},{path:"/private/dashboard",name:"dashboard",component:()=>je(()=>import("./DashboardIndex-DEfH1mDb.js"),__vite__mapDeps([24,25,26,27])),meta:{requiresAuth:!0,title:"Dashboard",icon:"/favicon.jpg"}},{path:"/private/memories",name:"memories",component:()=>je(()=>import("./MemoryListIndex-DaOlZqjv.js"),__vite__mapDeps([28,25,26,27,29,30,31])),meta:{requiresAuth:!0,title:"Memories",icon:"/favicon.jpg"}},{path:"/private/details/:id",name:"details",component:()=>je(()=>import("./DetailsIndex-DprL5pun.js"),__vite__mapDeps([32,25,26,27,30,29,33])),meta:{requiresAuth:!0,title:"Details",icon:"/favicon.jpg"}},{path:"/private/new-memory",name:"new-memory",component:()=>je(()=>import("./NewMemoryIndex-BIBOP9uN.js"),__vite__mapDeps([34,25,26,27,30])),meta:{requiresAuth:!0,title:"New Memory",icon:"/favicon.jpg"}}],E_=VI({history:lI(),routes:[{path:"/",name:"portfolio",component:()=>je(()=>import("./PortfolioIndex-CWXWHslO.js"),__vite__mapDeps([35,26,36])),meta:{title:"Ralph Maron Eda",icon:"/ralphmaron.png"}},{path:"/blog",name:"blog",component:()=>je(()=>import("./BlogIndex-Dc16GMGQ.js"),__vite__mapDeps([37,1,2,38])),meta:{title:"Blogs",icon:"/ralphmaron.png"}},...NS,...OS,{path:"/:pathMatch(.*)*",name:"not-found",component:()=>je(()=>import("./NotFound-BrlWFJBq.js"),[]),meta:{title:"Page Not Found",icon:"/ralphmaron.png"}}],scrollBehavior(t){return t.hash?{el:t.hash,behavior:"smooth"}:{top:0}}});E_.beforeEach(async(t,e,n)=>{const r=kS();if(t.meta.requiresAuth&&(!r.user&&r.loading&&await r.fetchUser(),!r.user))return n({name:"login"});if(t.meta?.title&&(document.title=t.meta.title),t.meta?.icon){const s=document.querySelector("link[rel~='icon']")||document.createElement("link");s.rel="icon",s.href=t.meta.icon,document.head.appendChild(s)}n()});var VS="firebase",xS="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(VS,xS,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="firebasestorage.googleapis.com",T_="storageBucket",LS=120*1e3,MS=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends vn{constructor(e,n,r=0){super(Xc(e),`Firebase Storage: ${n} (${Xc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,He.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qe||(qe={}));function Xc(t){return"storage/"+t}function Cu(){const t="An unknown error occurred, please check the error payload for server response.";return new He(qe.UNKNOWN,t)}function FS(t){return new He(qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function US(t){return new He(qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function BS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new He(qe.UNAUTHENTICATED,t)}function $S(){return new He(qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function jS(t){return new He(qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function qS(){return new He(qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HS(){return new He(qe.CANCELED,"User canceled the upload/download.")}function zS(t){return new He(qe.INVALID_URL,"Invalid URL '"+t+"'.")}function WS(t){return new He(qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function KS(){return new He(qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+T_+"' property when initializing the app?")}function GS(){return new He(qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function QS(){return new He(qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function XS(t){return new He(qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Pl(t){return new He(qe.INVALID_ARGUMENT,t)}function w_(){return new He(qe.APP_DELETED,"The Firebase app was deleted.")}function YS(t){return new He(qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ai(t,e){return new He(qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ii(t){throw new He(qe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(r.path==="")return r;throw WS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),k={bucket:1,path:3},V=n===v_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",F=new RegExp(`^https?://${V}/${s}/${N}`,"i"),P=[{regex:c,indices:l,postModify:i},{regex:E,indices:k,postModify:u},{regex:F,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<P.length;C++){const L=P[C],M=L.regex.exec(e);if(M){const v=M[L.indices.bucket];let y=M[L.indices.path];y||(y=""),r=new Ft(v,y),L.postModify(r);break}}if(r==null)throw zS(e);return r}}class JS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function f(...N){u||(u=!0,e.apply(null,N))}function p(N){s=setTimeout(()=>{s=null,t(E,l())},N)}function g(){i&&clearTimeout(i)}function E(N,...F){if(u){g();return}if(N){g(),f.call(null,N,...F);return}if(l()||o){g(),f.call(null,N,...F);return}r<64&&(r*=2);let P;c===1?(c=2,P=0):P=(r+Math.random())*1e3,p(P)}let k=!1;function V(N){k||(k=!0,g(),!u&&(s!==null?(N||(c=2),clearTimeout(s),p(0)):N||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,V(!0)},n),V}function eP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t){return t!==void 0}function nP(t){return typeof t=="object"&&!Array.isArray(t)}function ku(t){return typeof t=="string"||t instanceof String}function $d(t){return Du()&&t instanceof Blob}function Du(){return typeof Blob<"u"}function jd(t,e,n,r){if(r<e)throw Pl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Pl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function I_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Br;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Br||(Br={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n,r,s,i,o,c,l,u,f,p,g=!0,E=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,V)=>{this.resolve_=k,this.reject_=V,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new So(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Br.NO_ERROR,l=i.getStatus();if(!c||rP(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Br.ABORT;r(!1,new So(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new So(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());tP(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=Cu();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?w_():HS();o(l)}else{const l=qS();o(l)}};this.canceled_?n(!1,new So(!1,null,!0)):this.backoffId_=ZS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&eP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class So{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function iP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function oP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function aP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function cP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lP(t,e,n,r,s,i,o=!0,c=!1){const l=I_(t.urlParams),u=t.url+l,f=Object.assign({},t.headers);return aP(f,e),iP(f,n),oP(f,i),cP(f,r),new sP(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function hP(...t){const e=uP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Du())return new Blob(t);throw new He(qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function fP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t){if(typeof atob>"u")throw XS("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yc{constructor(e,n){this.data=e,this.contentType=n||null}}function pP(t,e){switch(t){case ln.RAW:return new Yc(A_(e));case ln.BASE64:case ln.BASE64URL:return new Yc(b_(t,e));case ln.DATA_URL:return new Yc(mP(e),_P(e))}throw Cu()}function A_(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function gP(t){let e;try{e=decodeURIComponent(t)}catch{throw Ai(ln.DATA_URL,"Malformed data URL.")}return A_(e)}function b_(t,e){switch(t){case ln.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ai(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ln.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ai(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=dP(e)}catch(s){throw s.message.includes("polyfill")?s:Ai(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class R_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ai(ln.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=yP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function mP(t){const e=new R_(t);return e.base64?b_(ln.BASE64,e.rest):gP(e.rest)}function _P(t){return new R_(t).contentType}function yP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){let r=0,s="";$d(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if($d(this.data_)){const r=this.data_,s=fP(r,e,n);return s===null?null:new er(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new er(r,!0)}}static getBlob(...e){if(Du()){const n=e.map(r=>r instanceof er?r.data_:r);return new er(hP.apply(null,n))}else{const n=e.map(o=>ku(o)?pP(ln.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new er(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t){let e;try{e=JSON.parse(t)}catch{return null}return nP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function P_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t,e){return e}class bt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||TP}}let Po=null;function wP(t){return!ku(t)||t.length<2?t:P_(t)}function C_(){if(Po)return Po;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(i,o){return wP(o)}const n=new bt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new bt("size");return s.xform=r,t.push(s),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),Po=t,Po}function IP(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ft(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function AP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return IP(r,t),r}function k_(t,e,n){const r=S_(e);return r===null?null:AP(t,r,n)}function bP(t,e,n,r){const s=S_(e);if(s===null||!ku(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,p=t.fullPath,g="/b/"+o(f)+"/o/"+o(p),E=Nu(g,n,r),k=I_({alt:"media",token:u});return E+k})[0]}function RP(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class D_{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t){if(!t)throw Cu()}function SP(t,e){function n(r,s){const i=k_(t,s,e);return N_(i!==null),i}return n}function PP(t,e){function n(r,s){const i=k_(t,s,e);return N_(i!==null),bP(i,s,t.host,t._protocol)}return n}function O_(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=$S():s=BS():n.getStatus()===402?s=US(t.bucket):n.getStatus()===403?s=jS(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function CP(t){const e=O_(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=FS(t.path)),i.serverResponse=s.serverResponse,i}return n}function kP(t,e,n){const r=e.fullServerUrl(),s=Nu(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new D_(s,i,PP(t,n),o);return c.errorHandler=CP(e),c}function DP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function NP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=DP(null,e)),r}function OP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let P="";for(let C=0;C<2;C++)P=P+Math.random().toString().slice(2);return P}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=NP(e,r,s),f=RP(u,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+l+"--",E=er.getBlob(p,r,g);if(E===null)throw GS();const k={name:u.fullPath},V=Nu(i,t.host,t._protocol),N="POST",F=t.maxUploadRetryTime,S=new D_(V,N,SP(t,n),F);return S.urlParams=k,S.headers=o,S.body=E.uploadData(),S.errorHandler=O_(e),S}class VP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw ii("cannot .send() more than once");if(vr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ii("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ii("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ii("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ii("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xP extends VP{initXhr(){this.xhr_.responseType="text"}}function V_(){return new xP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hr(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return P_(this._location.path)}get storage(){return this._service}get parent(){const e=EP(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new Hr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YS(e)}}function LP(t,e,n){t._throwIfRoot("uploadBytes");const r=OP(t.storage,t._location,C_(),new er(e,!0),n);return t.storage.makeRequestWithTokens(r,V_).then(s=>({metadata:s,ref:t}))}function MP(t){t._throwIfRoot("getDownloadURL");const e=kP(t.storage,t._location,C_());return t.storage.makeRequestWithTokens(e,V_).then(n=>{if(n===null)throw QS();return n})}function FP(t,e){const n=vP(t._location.path,e),r=new Ft(t._location.bucket,n);return new Hr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t){return/^[A-Za-z]+:\/\//.test(t)}function BP(t,e){return new Hr(t,e)}function x_(t,e){if(t instanceof Ou){const n=t;if(n._bucket==null)throw KS();const r=new Hr(n,n._bucket);return e!=null?x_(r,e):r}else return e!==void 0?FP(t,e):t}function $P(t,e){if(e&&UP(e)){if(t instanceof Ou)return BP(t,e);throw Pl("To use ref(service, url), the first argument must be a Storage instance.")}else return x_(t,e)}function qd(t,e){const n=e?.[T_];return n==null?null:Ft.makeFromBucketSpec(n,t)}function jP(t,e,n,r={}){t.host=`${e}:${n}`;const s=vr(e);s&&(mu(`https://${t.host}/b`),_u("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Om(i,t.app.options.projectId))}class Ou{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=v_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LS,this._maxUploadRetryTime=MS,this._requests=new Set,s!=null?this._bucket=Ft.makeFromBucketSpec(s,this._host):this._bucket=qd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=qd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new JS(w_());{const o=lP(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Hd="@firebase/storage",zd="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="storage";function Rk(t,e,n){return t=Ue(t),LP(t,e,n)}function Sk(t){return t=Ue(t),MP(t)}function Pk(t,e){return t=Ue(t),$P(t,e)}function qP(t=vu(),e){t=Ue(t);const r=Wa(t,L_).getImmediate({identifier:e}),s=km("storage");return s&&HP(r,...s),r}function HP(t,e,n,r={}){jP(t,e,n,r)}function zP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ou(n,r,s,e,Gr)}function WP(){jr(new fr(L_,zP,"PUBLIC").setMultipleInstances(!0)),hn(Hd,zd,""),hn(Hd,zd,"esm2020")}WP();var Wd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ar,M_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function m(){}m.prototype=y.prototype,v.F=y.prototype,v.prototype=new m,v.prototype.constructor=v,v.D=function(I,A,b){for(var T=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)T[ge-2]=arguments[ge];return y.prototype[A].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,y,m){m||(m=0);const I=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)I[A]=y.charCodeAt(m++)|y.charCodeAt(m++)<<8|y.charCodeAt(m++)<<16|y.charCodeAt(m++)<<24;else for(A=0;A<16;++A)I[A]=y[m++]|y[m++]<<8|y[m++]<<16|y[m++]<<24;y=v.g[0],m=v.g[1],A=v.g[2];let b=v.g[3],T;T=y+(b^m&(A^b))+I[0]+3614090360&4294967295,y=m+(T<<7&4294967295|T>>>25),T=b+(A^y&(m^A))+I[1]+3905402710&4294967295,b=y+(T<<12&4294967295|T>>>20),T=A+(m^b&(y^m))+I[2]+606105819&4294967295,A=b+(T<<17&4294967295|T>>>15),T=m+(y^A&(b^y))+I[3]+3250441966&4294967295,m=A+(T<<22&4294967295|T>>>10),T=y+(b^m&(A^b))+I[4]+4118548399&4294967295,y=m+(T<<7&4294967295|T>>>25),T=b+(A^y&(m^A))+I[5]+1200080426&4294967295,b=y+(T<<12&4294967295|T>>>20),T=A+(m^b&(y^m))+I[6]+2821735955&4294967295,A=b+(T<<17&4294967295|T>>>15),T=m+(y^A&(b^y))+I[7]+4249261313&4294967295,m=A+(T<<22&4294967295|T>>>10),T=y+(b^m&(A^b))+I[8]+1770035416&4294967295,y=m+(T<<7&4294967295|T>>>25),T=b+(A^y&(m^A))+I[9]+2336552879&4294967295,b=y+(T<<12&4294967295|T>>>20),T=A+(m^b&(y^m))+I[10]+4294925233&4294967295,A=b+(T<<17&4294967295|T>>>15),T=m+(y^A&(b^y))+I[11]+2304563134&4294967295,m=A+(T<<22&4294967295|T>>>10),T=y+(b^m&(A^b))+I[12]+1804603682&4294967295,y=m+(T<<7&4294967295|T>>>25),T=b+(A^y&(m^A))+I[13]+4254626195&4294967295,b=y+(T<<12&4294967295|T>>>20),T=A+(m^b&(y^m))+I[14]+2792965006&4294967295,A=b+(T<<17&4294967295|T>>>15),T=m+(y^A&(b^y))+I[15]+1236535329&4294967295,m=A+(T<<22&4294967295|T>>>10),T=y+(A^b&(m^A))+I[1]+4129170786&4294967295,y=m+(T<<5&4294967295|T>>>27),T=b+(m^A&(y^m))+I[6]+3225465664&4294967295,b=y+(T<<9&4294967295|T>>>23),T=A+(y^m&(b^y))+I[11]+643717713&4294967295,A=b+(T<<14&4294967295|T>>>18),T=m+(b^y&(A^b))+I[0]+3921069994&4294967295,m=A+(T<<20&4294967295|T>>>12),T=y+(A^b&(m^A))+I[5]+3593408605&4294967295,y=m+(T<<5&4294967295|T>>>27),T=b+(m^A&(y^m))+I[10]+38016083&4294967295,b=y+(T<<9&4294967295|T>>>23),T=A+(y^m&(b^y))+I[15]+3634488961&4294967295,A=b+(T<<14&4294967295|T>>>18),T=m+(b^y&(A^b))+I[4]+3889429448&4294967295,m=A+(T<<20&4294967295|T>>>12),T=y+(A^b&(m^A))+I[9]+568446438&4294967295,y=m+(T<<5&4294967295|T>>>27),T=b+(m^A&(y^m))+I[14]+3275163606&4294967295,b=y+(T<<9&4294967295|T>>>23),T=A+(y^m&(b^y))+I[3]+4107603335&4294967295,A=b+(T<<14&4294967295|T>>>18),T=m+(b^y&(A^b))+I[8]+1163531501&4294967295,m=A+(T<<20&4294967295|T>>>12),T=y+(A^b&(m^A))+I[13]+2850285829&4294967295,y=m+(T<<5&4294967295|T>>>27),T=b+(m^A&(y^m))+I[2]+4243563512&4294967295,b=y+(T<<9&4294967295|T>>>23),T=A+(y^m&(b^y))+I[7]+1735328473&4294967295,A=b+(T<<14&4294967295|T>>>18),T=m+(b^y&(A^b))+I[12]+2368359562&4294967295,m=A+(T<<20&4294967295|T>>>12),T=y+(m^A^b)+I[5]+4294588738&4294967295,y=m+(T<<4&4294967295|T>>>28),T=b+(y^m^A)+I[8]+2272392833&4294967295,b=y+(T<<11&4294967295|T>>>21),T=A+(b^y^m)+I[11]+1839030562&4294967295,A=b+(T<<16&4294967295|T>>>16),T=m+(A^b^y)+I[14]+4259657740&4294967295,m=A+(T<<23&4294967295|T>>>9),T=y+(m^A^b)+I[1]+2763975236&4294967295,y=m+(T<<4&4294967295|T>>>28),T=b+(y^m^A)+I[4]+1272893353&4294967295,b=y+(T<<11&4294967295|T>>>21),T=A+(b^y^m)+I[7]+4139469664&4294967295,A=b+(T<<16&4294967295|T>>>16),T=m+(A^b^y)+I[10]+3200236656&4294967295,m=A+(T<<23&4294967295|T>>>9),T=y+(m^A^b)+I[13]+681279174&4294967295,y=m+(T<<4&4294967295|T>>>28),T=b+(y^m^A)+I[0]+3936430074&4294967295,b=y+(T<<11&4294967295|T>>>21),T=A+(b^y^m)+I[3]+3572445317&4294967295,A=b+(T<<16&4294967295|T>>>16),T=m+(A^b^y)+I[6]+76029189&4294967295,m=A+(T<<23&4294967295|T>>>9),T=y+(m^A^b)+I[9]+3654602809&4294967295,y=m+(T<<4&4294967295|T>>>28),T=b+(y^m^A)+I[12]+3873151461&4294967295,b=y+(T<<11&4294967295|T>>>21),T=A+(b^y^m)+I[15]+530742520&4294967295,A=b+(T<<16&4294967295|T>>>16),T=m+(A^b^y)+I[2]+3299628645&4294967295,m=A+(T<<23&4294967295|T>>>9),T=y+(A^(m|~b))+I[0]+4096336452&4294967295,y=m+(T<<6&4294967295|T>>>26),T=b+(m^(y|~A))+I[7]+1126891415&4294967295,b=y+(T<<10&4294967295|T>>>22),T=A+(y^(b|~m))+I[14]+2878612391&4294967295,A=b+(T<<15&4294967295|T>>>17),T=m+(b^(A|~y))+I[5]+4237533241&4294967295,m=A+(T<<21&4294967295|T>>>11),T=y+(A^(m|~b))+I[12]+1700485571&4294967295,y=m+(T<<6&4294967295|T>>>26),T=b+(m^(y|~A))+I[3]+2399980690&4294967295,b=y+(T<<10&4294967295|T>>>22),T=A+(y^(b|~m))+I[10]+4293915773&4294967295,A=b+(T<<15&4294967295|T>>>17),T=m+(b^(A|~y))+I[1]+2240044497&4294967295,m=A+(T<<21&4294967295|T>>>11),T=y+(A^(m|~b))+I[8]+1873313359&4294967295,y=m+(T<<6&4294967295|T>>>26),T=b+(m^(y|~A))+I[15]+4264355552&4294967295,b=y+(T<<10&4294967295|T>>>22),T=A+(y^(b|~m))+I[6]+2734768916&4294967295,A=b+(T<<15&4294967295|T>>>17),T=m+(b^(A|~y))+I[13]+1309151649&4294967295,m=A+(T<<21&4294967295|T>>>11),T=y+(A^(m|~b))+I[4]+4149444226&4294967295,y=m+(T<<6&4294967295|T>>>26),T=b+(m^(y|~A))+I[11]+3174756917&4294967295,b=y+(T<<10&4294967295|T>>>22),T=A+(y^(b|~m))+I[2]+718787259&4294967295,A=b+(T<<15&4294967295|T>>>17),T=m+(b^(A|~y))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+b&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const m=y-this.blockSize,I=this.C;let A=this.h,b=0;for(;b<y;){if(A==0)for(;b<=m;)s(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<y;)if(I[A++]=v.charCodeAt(b++),A==this.blockSize){s(this,I),A=0;break}}else for(;b<y;)if(I[A++]=v[b++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var m=v.length-8;m<v.length;++m)v[m]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,m=0;m<4;++m)for(let I=0;I<32;I+=8)v[y++]=this.g[m]>>>I&255;return v};function i(v,y){var m=c;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=y(v)}function o(v,y){this.h=y;const m=[];let I=!0;for(let A=v.length-1;A>=0;A--){const b=v[A]|0;I&&b==y||(m[A]=b,I=!1)}this.g=m}var c={};function l(v){return-128<=v&&v<128?i(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return N(u(-v));const y=[];let m=1;for(let I=0;v>=m;I++)y[I]=v/m|0,m*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return N(f(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=u(Math.pow(y,8));let I=p;for(let b=0;b<v.length;b+=8){var A=Math.min(8,v.length-b);const T=parseInt(v.substring(b,b+A),y);A<8?(A=u(Math.pow(y,A)),I=I.j(A).add(u(T))):(I=I.j(m),I=I.add(u(T)))}return I}var p=l(0),g=l(1),E=l(16777216);t=o.prototype,t.m=function(){if(V(this))return-N(this).m();let v=0,y=1;for(let m=0;m<this.g.length;m++){const I=this.i(m);v+=(I>=0?I:4294967296+I)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(V(this))return"-"+N(this).toString(v);const y=u(Math.pow(v,6));var m=this;let I="";for(;;){const A=C(m,y).g;m=F(m,A.j(y));let b=((m.g.length>0?m.g[0]:m.h)>>>0).toString(v);if(m=A,k(m))return b+I;for(;b.length<6;)b="0"+b;I=b+I}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function V(v){return v.h==-1}t.l=function(v){return v=F(this,v),V(v)?-1:k(v)?0:1};function N(v){const y=v.g.length,m=[];for(let I=0;I<y;I++)m[I]=~v.g[I];return new o(m,~v.h).add(g)}t.abs=function(){return V(this)?N(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),m=[];let I=0;for(let A=0;A<=y;A++){let b=I+(this.i(A)&65535)+(v.i(A)&65535),T=(b>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);I=T>>>16,b&=65535,T&=65535,m[A]=T<<16|b}return new o(m,m[m.length-1]&-2147483648?-1:0)};function F(v,y){return v.add(N(y))}t.j=function(v){if(k(this)||k(v))return p;if(V(this))return V(v)?N(this).j(N(v)):N(N(this).j(v));if(V(v))return N(this.j(N(v)));if(this.l(E)<0&&v.l(E)<0)return u(this.m()*v.m());const y=this.g.length+v.g.length,m=[];for(var I=0;I<2*y;I++)m[I]=0;for(I=0;I<this.g.length;I++)for(let A=0;A<v.g.length;A++){const b=this.i(I)>>>16,T=this.i(I)&65535,ge=v.i(A)>>>16,xe=v.i(A)&65535;m[2*I+2*A]+=T*xe,S(m,2*I+2*A),m[2*I+2*A+1]+=b*xe,S(m,2*I+2*A+1),m[2*I+2*A+1]+=T*ge,S(m,2*I+2*A+1),m[2*I+2*A+2]+=b*ge,S(m,2*I+2*A+2)}for(v=0;v<y;v++)m[v]=m[2*v+1]<<16|m[2*v];for(v=y;v<2*y;v++)m[v]=0;return new o(m,0)};function S(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function P(v,y){this.g=v,this.h=y}function C(v,y){if(k(y))throw Error("division by zero");if(k(v))return new P(p,p);if(V(v))return y=C(N(v),y),new P(N(y.g),N(y.h));if(V(y))return y=C(v,N(y)),new P(N(y.g),y.h);if(v.g.length>30){if(V(v)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var m=g,I=y;I.l(v)<=0;)m=L(m),I=L(I);var A=M(m,1),b=M(I,1);for(I=M(I,2),m=M(m,2);!k(I);){var T=b.add(I);T.l(v)<=0&&(A=A.add(m),b=T),I=M(I,1),m=M(m,1)}return y=F(v,A.j(y)),new P(A,y)}for(A=p;v.l(y)>=0;){for(m=Math.max(1,Math.floor(v.m()/y.m())),I=Math.ceil(Math.log(m)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),b=u(m),T=b.j(y);V(T)||T.l(v)>0;)m-=I,b=u(m),T=b.j(y);k(b)&&(b=g),A=A.add(b),v=F(v,T)}return new P(A,v)}t.B=function(v){return C(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),m=[];for(let I=0;I<y;I++)m[I]=this.i(I)&v.i(I);return new o(m,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),m=[];for(let I=0;I<y;I++)m[I]=this.i(I)|v.i(I);return new o(m,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),m=[];for(let I=0;I<y;I++)m[I]=this.i(I)^v.i(I);return new o(m,this.h^v.h)};function L(v){const y=v.g.length+1,m=[];for(let I=0;I<y;I++)m[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(m,v.h)}function M(v,y){const m=y>>5;y%=32;const I=v.g.length-m,A=[];for(let b=0;b<I;b++)A[b]=y>0?v.i(b+m)>>>y|v.i(b+m+1)<<32-y:v.i(b+m);return new o(A,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,M_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,ar=o}).apply(typeof Wd<"u"?Wd:typeof self<"u"?self:typeof window<"u"?window:{});var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var F_,li,U_,zo,Cl,B_,$_,j_;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Co=="object"&&Co];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var O=a[_];if(!(O in d))break e;d=d[O]}a=a[a.length-1],_=d[a],h=h(_),h!=_&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&d.push([_,h[_]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(_,O,x){for(var G=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)G[pe-2]=arguments[pe];return h.prototype[O].apply(_,G)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const h=a.length;if(h>0){const d=Array(h);for(let _=0;_<h;_++)d[_]=a[_];return d}return[]}function k(a,h){for(let _=1;_<arguments.length;_++){const O=arguments[_];var d=typeof O;if(d=d!="object"?d:O?Array.isArray(O)?"array":d:"null",d=="array"||d=="object"&&typeof O.length=="number"){d=a.length||0;const x=O.length||0;a.length=d+x;for(let G=0;G<x;G++)a[d+G]=O[G]}else a.push(O)}}class V{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){o.setTimeout(()=>{throw a},0)}function F(){var a=v;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class S{constructor(){this.h=this.g=null}add(h,d){const _=P.get();_.set(h,d),this.h?this.h.next=_:this.g=_,this.h=_}}var P=new V(()=>new C,a=>a.reset());class C{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let L,M=!1,v=new S,y=()=>{const a=Promise.resolve(void 0);L=()=>{a.then(m)}};function m(){for(var a;a=F();){try{a.h.call(a.g)}catch(d){N(d)}var h=P;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}M=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function ge(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(ge,A),ge.prototype.init=function(a,h){const d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ge.Z.h.call(this)},ge.prototype.h=function(){ge.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xe="closure_listenable_"+(Math.random()*1e6|0),Ae=0;function ue(a,h,d,_,O){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!_,this.ha=O,this.key=++Ae,this.da=this.fa=!1}function ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Le(a,h,d){for(const _ in a)h.call(d,a[_],_,a)}function at(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function nt(a){const h={};for(const d in a)h[d]=a[d];return h}const Pe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kt(a,h){let d,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(d in _)a[d]=_[d];for(let x=0;x<Pe.length;x++)d=Pe[x],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function Qe(a){this.src=a,this.g={},this.h=0}Qe.prototype.add=function(a,h,d,_,O){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const G=ze(a,h,_,O);return G>-1?(h=a[G],d||(h.fa=!1)):(h=new ue(h,this.src,x,!!_,O),h.fa=d,a.push(h)),h};function Ct(a,h){const d=h.type;if(d in a.g){var _=a.g[d],O=Array.prototype.indexOf.call(_,h,void 0),x;(x=O>=0)&&Array.prototype.splice.call(_,O,1),x&&(ie(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ze(a,h,d,_){for(let O=0;O<a.length;++O){const x=a[O];if(!x.da&&x.listener==h&&x.capture==!!d&&x.ha==_)return O}return-1}var U="closure_lm_"+(Math.random()*1e6|0),Y={};function Q(a,h,d,_,O){if(Array.isArray(h)){for(let x=0;x<h.length;x++)Q(a,h[x],d,_,O);return null}return d=X(d),a&&a[xe]?a.J(h,d,c(_)?!!_.capture:!1,O):te(a,h,d,!1,_,O)}function te(a,h,d,_,O,x){if(!h)throw Error("Invalid event type");const G=c(O)?!!O.capture:!!O;let pe=H(a);if(pe||(a[U]=pe=new Qe(a)),d=pe.add(h,d,_,G,x),d.proxy)return d;if(_=ve(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)b||(O=G),O===void 0&&(O=!1),a.addEventListener(h.toString(),_,O);else if(a.attachEvent)a.attachEvent(D(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ve(){function a(d){return h.call(a.src,a.listener,d)}const h=j;return a}function w(a,h,d,_,O){if(Array.isArray(h))for(var x=0;x<h.length;x++)w(a,h[x],d,_,O);else _=c(_)?!!_.capture:!!_,d=X(d),a&&a[xe]?(a=a.i,x=String(h).toString(),x in a.g&&(h=a.g[x],d=ze(h,d,_,O),d>-1&&(ie(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[x],a.h--)))):a&&(a=H(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ze(h,d,_,O)),(d=a>-1?h[a]:null)&&R(d))}function R(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[xe])Ct(h.i,a);else{var d=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(d,_,a.capture):h.detachEvent?h.detachEvent(D(d),_):h.addListener&&h.removeListener&&h.removeListener(_),(d=H(h))?(Ct(d,a),d.h==0&&(d.src=null,h[U]=null)):ie(a)}}}function D(a){return a in Y?Y[a]:Y[a]="on"+a}function j(a,h){if(a.da)a=!0;else{h=new ge(h,this);const d=a.listener,_=a.ha||a.src;a.fa&&R(a),a=d.call(_,h)}return a}function H(a){return a=a[U],a instanceof Qe?a:null}var B="__closure_events_fn_"+(Math.random()*1e9>>>0);function X(a){return typeof a=="function"?a:(a[B]||(a[B]=function(h){return a.handleEvent(h)}),a[B])}function K(){I.call(this),this.i=new Qe(this),this.M=this,this.G=null}p(K,I),K.prototype[xe]=!0,K.prototype.removeEventListener=function(a,h,d,_){w(this,a,h,d,_)};function z(a,h){var d,_=a.G;if(_)for(d=[];_;_=_.G)d.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var O=h;h=new A(_,a),Kt(h,O)}O=!0;let x,G;if(d)for(G=d.length-1;G>=0;G--)x=h.g=d[G],O=W(x,_,!0,h)&&O;if(x=h.g=a,O=W(x,_,!0,h)&&O,O=W(x,_,!1,h)&&O,d)for(G=0;G<d.length;G++)x=h.g=d[G],O=W(x,_,!1,h)&&O}K.prototype.N=function(){if(K.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let _=0;_<d.length;_++)ie(d[_]);delete a.g[h],a.h--}}this.G=null},K.prototype.J=function(a,h,d,_){return this.i.add(String(a),h,!1,d,_)},K.prototype.K=function(a,h,d,_){return this.i.add(String(a),h,!0,d,_)};function W(a,h,d,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let x=0;x<h.length;++x){const G=h[x];if(G&&!G.da&&G.capture==d){const pe=G.listener,et=G.ha||G.src;G.fa&&Ct(a.i,G),O=pe.call(et,_)!==!1&&O}}return O&&!_.defaultPrevented}function oe(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function J(a){a.g=oe(()=>{a.g=null,a.i&&(a.i=!1,J(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class re extends I{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:J(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ae(a){I.call(this),this.h=a,this.g={}}p(ae,I);var me=[];function Ce(a){Le(a.g,function(h,d){this.g.hasOwnProperty(d)&&R(h)},a),a.g={}}ae.prototype.N=function(){ae.Z.N.call(this),Ce(this)},ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var we=o.JSON.stringify,pt=o.JSON.parse,gt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Nt(){}function Ot(){}var Gt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Zr(){A.call(this,"d")}p(Zr,A);function ct(){A.call(this,"c")}p(ct,A);var rt={},Bs=null;function Ar(){return Bs=Bs||new K}rt.Ia="serverreachability";function mh(a){A.call(this,rt.Ia,a)}p(mh,A);function $s(a){const h=Ar();z(h,new mh(h))}rt.STAT_EVENT="statevent";function _h(a,h){A.call(this,rt.STAT_EVENT,a),this.stat=h}p(_h,A);function At(a){const h=Ar();z(h,new _h(h,a))}rt.Ja="timingevent";function yh(a,h){A.call(this,rt.Ja,a),this.size=h}p(yh,A);function js(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function qs(){this.g=!0}qs.prototype.ua=function(){this.g=!1};function dE(a,h,d,_,O,x){a.info(function(){if(a.g)if(x){var G="",pe=x.split("&");for(let De=0;De<pe.length;De++){var et=pe[De].split("=");if(et.length>1){const st=et[0];et=et[1];const rn=st.split("_");G=rn.length>=2&&rn[1]=="type"?G+(st+"="+et+"&"):G+(st+"=redacted&")}}}else G=null;else G=x;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+h+`
`+d+`
`+G})}function pE(a,h,d,_,O,x,G){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+h+`
`+d+`
`+x+" "+G})}function es(a,h,d,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+mE(a,d)+(_?" "+_:"")})}function gE(a,h){a.info(function(){return"TIMEOUT: "+h})}qs.prototype.info=function(){};function mE(a,h){if(!a.g)return h;if(!h)return null;try{const x=JSON.parse(h);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var d=x[a];if(!(d.length<2)){var _=d[1];if(Array.isArray(_)&&!(_.length<1)){var O=_[0];if(O!="noop"&&O!="stop"&&O!="close")for(let G=1;G<_.length;G++)_[G]=""}}}}return we(x)}catch{return h}}var ho={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Eh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},vh;function dc(){}p(dc,Nt),dc.prototype.g=function(){return new XMLHttpRequest},vh=new dc;function Hs(a){return encodeURIComponent(String(a))}function _E(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Mn(a,h,d,_){this.j=a,this.i=h,this.l=d,this.S=_||1,this.V=new ae(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Th}function Th(){this.i=null,this.g="",this.h=!1}var wh={},pc={};function gc(a,h,d){a.M=1,a.A=po(nn(h)),a.u=d,a.R=!0,Ih(a,null)}function Ih(a,h){a.F=Date.now(),fo(a),a.B=nn(a.A);var d=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),Lh(d.i,"t",_),a.C=0,d=a.j.L,a.h=new Th,a.g=ef(a.j,d?h:null,!a.u),a.P>0&&(a.O=new re(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,_=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(me[0]=O.toString()),O=me);for(let x=0;x<O.length;x++){const G=Q(d,O[x],_||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.J?nt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),$s(),dE(a.i,a.v,a.B,a.l,a.S,a.u)}Mn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Bn(a)==3?h.j():this.Y(a)},Mn.prototype.Y=function(a){try{if(a==this.g)e:{const pe=Bn(this.g),et=this.g.ya(),De=this.g.ca();if(!(pe<3)&&(pe!=3||this.g&&(this.h.h||this.g.la()||qh(this.g)))){this.K||pe!=4||et==7||(et==8||De<=0?$s(3):$s(2)),mc(this);var h=this.g.ca();this.X=h;var d=yE(this);if(this.o=h==200,pE(this.i,this.v,this.B,this.l,this.S,pe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,O=this.g;if((_=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(_)){var x=_;break t}}x=null}if(a=x)es(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,_c(this,a);else{this.o=!1,this.m=3,At(12),br(this),zs(this);break e}}if(this.R){a=!0;let st;for(;!this.K&&this.C<d.length;)if(st=EE(this,d),st==pc){pe==4&&(this.m=4,At(14),a=!1),es(this.i,this.l,null,"[Incomplete Response]");break}else if(st==wh){this.m=4,At(15),es(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else es(this.i,this.l,st,null),_c(this,st);if(Ah(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pe!=4||d.length!=0||this.h.h||(this.m=1,At(16),a=!1),this.o=this.o&&a,!a)es(this.i,this.l,d,"[Invalid Chunked Response]"),br(this),zs(this);else if(d.length>0&&!this.W){this.W=!0;var G=this.j;G.g==this&&G.aa&&!G.P&&(G.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),bc(G),G.P=!0,At(11))}}else es(this.i,this.l,d,null),_c(this,d);pe==4&&br(this),this.o&&!this.K&&(pe==4?Xh(this.j,this):(this.o=!1,fo(this)))}else OE(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,At(12)):(this.m=0,At(13)),br(this),zs(this)}}}catch{}finally{}};function yE(a){if(!Ah(a))return a.g.la();const h=qh(a.g);if(h==="")return"";let d="";const _=h.length,O=Bn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return br(a),zs(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<_;x++)a.h.h=!0,d+=a.h.i.decode(h[x],{stream:!(O&&x==_-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Ah(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function EE(a,h){var d=a.C,_=h.indexOf(`
`,d);return _==-1?pc:(d=Number(h.substring(d,_)),isNaN(d)?wh:(_+=1,_+d>h.length?pc:(h=h.slice(_,_+d),a.C=_+d,h)))}Mn.prototype.cancel=function(){this.K=!0,br(this)};function fo(a){a.T=Date.now()+a.H,bh(a,a.H)}function bh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=js(u(a.aa,a),h)}function mc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Mn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(gE(this.i,this.B),this.M!=2&&($s(),At(17)),br(this),this.m=2,zs(this)):bh(this,this.T-a)};function zs(a){a.j.I==0||a.K||Xh(a.j,a)}function br(a){mc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Ce(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function _c(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||yc(d.h,a))){if(!a.L&&yc(d.h,a)&&d.I==3){try{var _=d.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Eo(d),_o(d);else break e;Ac(d),At(18)}}else d.xa=O[1],0<d.xa-d.K&&O[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=js(u(d.Va,d),6e3));Ph(d.h)<=1&&d.ta&&(d.ta=void 0)}else Sr(d,11)}else if((a.L||d.g==a)&&Eo(d),!T(h))for(O=d.Ba.g.parse(h),h=0;h<O.length;h++){let De=O[h];const st=De[0];if(!(st<=d.K))if(d.K=st,De=De[1],d.I==2)if(De[0]=="c"){d.M=De[1],d.ba=De[2];const rn=De[3];rn!=null&&(d.ka=rn,d.j.info("VER="+d.ka));const Pr=De[4];Pr!=null&&(d.za=Pr,d.j.info("SVER="+d.za));const $n=De[5];$n!=null&&typeof $n=="number"&&$n>0&&(_=1.5*$n,d.O=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const jn=a.g;if(jn){const To=jn.g?jn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(To){var x=_.h;x.g||To.indexOf("spdy")==-1&&To.indexOf("quic")==-1&&To.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Ec(x,x.h),x.h=null))}if(_.G){const Rc=jn.g?jn.g.getResponseHeader("X-HTTP-Session-Id"):null;Rc&&(_.wa=Rc,Me(_.J,_.G,Rc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),_=d;var G=a;if(_.na=Zh(_,_.L?_.ba:null,_.W),G.L){Ch(_.h,G);var pe=G,et=_.O;et&&(pe.H=et),pe.D&&(mc(pe),fo(pe)),_.g=G}else Gh(_);d.i.length>0&&yo(d)}else De[0]!="stop"&&De[0]!="close"||Sr(d,7);else d.I==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Sr(d,7):Ic(d):De[0]!="noop"&&d.l&&d.l.qa(De),d.A=0)}}$s(4)}catch{}}var vE=class{constructor(a,h){this.g=a,this.map=h}};function Rh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Sh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ph(a){return a.h?1:a.g?a.g.size:0}function yc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ec(a,h){a.g?a.g.add(h):a.h=h}function Ch(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Rh.prototype.cancel=function(){if(this.i=kh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function kh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return E(a.i)}var Dh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function TE(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const _=a[d].indexOf("=");let O,x=null;_>=0?(O=a[d].substring(0,_),x=a[d].substring(_+1)):O=a[d],h(O,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Fn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Fn?(this.l=a.l,Ws(this,a.j),this.o=a.o,this.g=a.g,Ks(this,a.u),this.h=a.h,vc(this,Mh(a.i)),this.m=a.m):a&&(h=String(a).match(Dh))?(this.l=!1,Ws(this,h[1]||"",!0),this.o=Gs(h[2]||""),this.g=Gs(h[3]||"",!0),Ks(this,h[4]),this.h=Gs(h[5]||"",!0),vc(this,h[6]||"",!0),this.m=Gs(h[7]||"")):(this.l=!1,this.i=new Xs(null,this.l))}Fn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Qs(h,Nh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Qs(h,Nh,!0),"@"),a.push(Hs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Qs(d,d.charAt(0)=="/"?AE:IE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Qs(d,RE)),a.join("")},Fn.prototype.resolve=function(a){const h=nn(this);let d=!!a.j;d?Ws(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var _=a.h;if(d)Ks(h,a.u);else if(d=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var O=h.h.lastIndexOf("/");O!=-1&&(_=h.h.slice(0,O+1)+_)}if(O=_,O==".."||O==".")_="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){_=O.lastIndexOf("/",0)==0,O=O.split("/");const x=[];for(let G=0;G<O.length;){const pe=O[G++];pe=="."?_&&G==O.length&&x.push(""):pe==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),_&&G==O.length&&x.push("")):(x.push(pe),_=!0)}_=x.join("/")}else _=O}return d?h.h=_:d=a.i.toString()!=="",d?vc(h,Mh(a.i)):d=!!a.m,d&&(h.m=a.m),h};function nn(a){return new Fn(a)}function Ws(a,h,d){a.j=d?Gs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ks(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function vc(a,h,d){h instanceof Xs?(a.i=h,SE(a.i,a.l)):(d||(h=Qs(h,bE)),a.i=new Xs(h,a.l))}function Me(a,h,d){a.i.set(h,d)}function po(a){return Me(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Gs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,wE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Nh=/[#\/\?@]/g,IE=/[#\?:]/g,AE=/[#\?]/g,bE=/[#\?@]/g,RE=/#/g;function Xs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Rr(a){a.g||(a.g=new Map,a.h=0,a.i&&TE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Xs.prototype,t.add=function(a,h){Rr(this),this.i=null,a=ts(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Oh(a,h){Rr(a),h=ts(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Vh(a,h){return Rr(a),h=ts(a,h),a.g.has(h)}t.forEach=function(a,h){Rr(this),this.g.forEach(function(d,_){d.forEach(function(O){a.call(h,O,_,this)},this)},this)};function xh(a,h){Rr(a);let d=[];if(typeof h=="string")Vh(a,h)&&(d=d.concat(a.g.get(ts(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Rr(this),this.i=null,a=ts(this,a),Vh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=xh(this,a),a.length>0?String(a[0]):h):h};function Lh(a,h,d){Oh(a,h),d.length>0&&(a.i=null,a.g.set(ts(a,h),E(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var d=h[_];const O=Hs(d);d=xh(this,d);for(let x=0;x<d.length;x++){let G=O;d[x]!==""&&(G+="="+Hs(d[x])),a.push(G)}}return this.i=a.join("&")};function Mh(a){const h=new Xs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ts(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function SE(a,h){h&&!a.j&&(Rr(a),a.i=null,a.g.forEach(function(d,_){const O=_.toLowerCase();_!=O&&(Oh(this,_),Lh(this,O,d))},a)),a.j=h}function PE(a,h){const d=new qs;if(o.Image){const _=new Image;_.onload=f(Un,d,"TestLoadImage: loaded",!0,h,_),_.onerror=f(Un,d,"TestLoadImage: error",!1,h,_),_.onabort=f(Un,d,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(Un,d,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function CE(a,h){const d=new qs,_=new AbortController,O=setTimeout(()=>{_.abort(),Un(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(x=>{clearTimeout(O),x.ok?Un(d,"TestPingServer: ok",!0,h):Un(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Un(d,"TestPingServer: error",!1,h)})}function Un(a,h,d,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(d)}catch{}}function kE(){this.g=new gt}function Tc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Tc,Nt),Tc.prototype.g=function(){return new go(this.i,this.h)};function go(a,h){K.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(go,K),t=go.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Js(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ys(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Js(this)),this.g&&(this.readyState=3,Js(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Fh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Fh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ys(this):Js(this),this.readyState==3&&Fh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ys(this))},t.Na=function(a){this.g&&(this.response=a,Ys(this))},t.ga=function(){this.g&&Ys(this)};function Ys(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Js(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Js(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(go.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Uh(a){let h="";return Le(a,function(d,_){h+=_,h+=":",h+=d,h+=`\r
`}),h}function wc(a,h,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=Uh(d),typeof a=="string"?d!=null&&Hs(d):Me(a,h,d))}function $e(a){K.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p($e,K);var DE=/^https?$/i,NE=["POST","PUT"];t=$e.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():vh.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){Bh(this,x);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)d.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const x of _.keys())d.set(x,_.get(x));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(NE,h,void 0)>=0)||_||O||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,G]of d)this.g.setRequestHeader(x,G);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){Bh(this,x)}};function Bh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,$h(a),mo(a)}function $h(a){a.A||(a.A=!0,z(a,"complete"),z(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,z(this,"complete"),z(this,"abort"),mo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mo(this,!0)),$e.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?jh(this):this.Xa())},t.Xa=function(){jh(this)};function jh(a){if(a.h&&typeof i<"u"){if(a.v&&Bn(a)==4)setTimeout(a.Ca.bind(a),0);else if(z(a,"readystatechange"),Bn(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var _;if(_=x===0){let G=String(a.D).match(Dh)[1]||null;!G&&o.self&&o.self.location&&(G=o.self.location.protocol.slice(0,-1)),_=!DE.test(G?G.toLowerCase():"")}d=_}if(d)z(a,"complete"),z(a,"success");else{a.o=6;try{var O=Bn(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",$h(a)}}finally{mo(a)}}}}function mo(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||z(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Bn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),pt(h)}};function qh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function OE(a){const h={};a=(a.g&&Bn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(T(a[_]))continue;var d=_E(a[_]);const O=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=h[O]||[];h[O]=x,x.push(d)}at(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Hh(a){this.za=0,this.i=[],this.j=new qs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Zs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Zs("baseRetryDelayMs",5e3,a),this.Za=Zs("retryDelaySeedMs",1e4,a),this.Ta=Zs("forwardChannelMaxRetries",2,a),this.va=Zs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Rh(a&&a.concurrentRequestLimit),this.Ba=new kE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Hh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,_){At(0),this.W=a,this.H=h||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.J=Zh(this,null,this.W),yo(this)};function Ic(a){if(zh(a),a.I==3){var h=a.V++,d=nn(a.J);if(Me(d,"SID",a.M),Me(d,"RID",h),Me(d,"TYPE","terminate"),ei(a,d),h=new Mn(a,a.j,h),h.M=2,h.A=po(nn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=ef(h.j,null),h.g.ea(h.A)),h.F=Date.now(),fo(h)}Jh(a)}function _o(a){a.g&&(bc(a),a.g.cancel(),a.g=null)}function zh(a){_o(a),a.v&&(o.clearTimeout(a.v),a.v=null),Eo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function yo(a){if(!Sh(a.h)&&!a.m){a.m=!0;var h=a.Ea;L||y(),M||(L(),M=!0),v.add(h,a),a.D=0}}function VE(a,h){return Ph(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=js(u(a.Ea,a,h),Yh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new Mn(this,this.j,a);let x=this.o;if(this.U&&(x?(x=nt(x),Kt(x,this.U)):x=this.U),this.u!==null||this.R||(O.J=x,x=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Kh(this,O,h),d=nn(this.J),Me(d,"RID",a),Me(d,"CVER",22),this.G&&Me(d,"X-HTTP-Session-Id",this.G),ei(this,d),x&&(this.R?h="headers="+Hs(Uh(x))+"&"+h:this.u&&wc(d,this.u,x)),Ec(this.h,O),this.Ra&&Me(d,"TYPE","init"),this.S?(Me(d,"$req",h),Me(d,"SID","null"),O.U=!0,gc(O,d,null)):gc(O,d,h),this.I=2}}else this.I==3&&(a?Wh(this,a):this.i.length==0||Sh(this.h)||Wh(this))};function Wh(a,h){var d;h?d=h.l:d=a.V++;const _=nn(a.J);Me(_,"SID",a.M),Me(_,"RID",d),Me(_,"AID",a.K),ei(a,_),a.u&&a.o&&wc(_,a.u,a.o),d=new Mn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Kh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ec(a.h,d),gc(d,_,h)}function ei(a,h){a.H&&Le(a.H,function(d,_){Me(h,_,d)}),a.l&&Le({},function(d,_){Me(h,_,d)})}function Kh(a,h,d){d=Math.min(a.i.length,d);const _=a.l?u(a.l.Ka,a.l,a):null;e:{var O=a.i;let pe=-1;for(;;){const et=["count="+d];pe==-1?d>0?(pe=O[0].g,et.push("ofs="+pe)):pe=0:et.push("ofs="+pe);let De=!0;for(let st=0;st<d;st++){var x=O[st].g;const rn=O[st].map;if(x-=pe,x<0)pe=Math.max(0,O[st].g-100),De=!1;else try{x="req"+x+"_"||"";try{var G=rn instanceof Map?rn:Object.entries(rn);for(const[Pr,$n]of G){let jn=$n;c($n)&&(jn=we($n)),et.push(x+Pr+"="+encodeURIComponent(jn))}}catch(Pr){throw et.push(x+"type="+encodeURIComponent("_badmap")),Pr}}catch{_&&_(rn)}}if(De){G=et.join("&");break e}}G=void 0}return a=a.i.splice(0,d),h.G=a,G}function Gh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;L||y(),M||(L(),M=!0),v.add(h,a),a.A=0}}function Ac(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=js(u(a.Da,a),Yh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Qh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=js(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,At(10),_o(this),Qh(this))};function bc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Qh(a){a.g=new Mn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=nn(a.na);Me(h,"RID","rpc"),Me(h,"SID",a.M),Me(h,"AID",a.K),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Me(h,"TO",a.ia),Me(h,"TYPE","xmlhttp"),ei(a,h),a.u&&a.o&&wc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=po(nn(h)),d.u=null,d.R=!0,Ih(d,a)}t.Va=function(){this.C!=null&&(this.C=null,_o(this),Ac(this),At(19))};function Eo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Xh(a,h){var d=null;if(a.g==h){Eo(a),bc(a),a.g=null;var _=2}else if(yc(a.h,h))d=h.G,Ch(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;_=Ar(),z(_,new yh(_,d)),yo(a)}else Gh(a);else if(O=h.m,O==3||O==0&&h.X>0||!(_==1&&VE(a,h)||_==2&&Ac(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),O){case 1:Sr(a,5);break;case 4:Sr(a,10);break;case 3:Sr(a,6);break;default:Sr(a,2)}}}function Yh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Sr(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),_=a.Ua;const O=!_;_=new Fn(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ws(_,"https"),po(_),O?PE(_.toString(),d):CE(_.toString(),d)}else At(2);a.I=0,a.l&&a.l.pa(h),Jh(a),zh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Jh(a){if(a.I=0,a.ja=[],a.l){const h=kh(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function Zh(a,h,d){var _=d instanceof Fn?nn(d):new Fn(d);if(_.g!="")h&&(_.g=h+"."+_.g),Ks(_,_.u);else{var O=o.location;_=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const x=new Fn(null);_&&Ws(x,_),h&&(x.g=h),O&&Ks(x,O),d&&(x.h=d),_=x}return d=a.G,h=a.wa,d&&h&&Me(_,d,h),Me(_,"VER",a.ka),ei(a,_),_}function ef(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new $e(new Tc({ab:d})):new $e(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function tf(){}t=tf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function vo(){}vo.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){K.call(this),this.g=new Hh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ns(this)}p(Vt,K),Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Ic(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=we(a),a=d);h.i.push(new vE(h.Ya++,a)),h.I==3&&yo(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Ic(this.g),delete this.g,Vt.Z.N.call(this)};function nf(a){Zr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(nf,Zr);function rf(){ct.call(this),this.status=1}p(rf,ct);function ns(a){this.g=a}p(ns,tf),ns.prototype.ra=function(){z(this.g,"a")},ns.prototype.qa=function(a){z(this.g,new nf(a))},ns.prototype.pa=function(a){z(this.g,new rf)},ns.prototype.oa=function(){z(this.g,"b")},vo.prototype.createWebChannel=vo.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,j_=function(){return new vo},$_=function(){return Ar()},B_=rt,Cl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ho.NO_ERROR=0,ho.TIMEOUT=8,ho.HTTP_ERROR=6,zo=ho,Eh.COMPLETE="complete",U_=Eh,Ot.EventType=Gt,Gt.OPEN="a",Gt.CLOSE="b",Gt.ERROR="c",Gt.MESSAGE="d",K.prototype.listen=K.prototype.J,li=Ot,$e.prototype.listenOnce=$e.prototype.K,$e.prototype.getLastError=$e.prototype.Ha,$e.prototype.getLastErrorCode=$e.prototype.ya,$e.prototype.getStatus=$e.prototype.ca,$e.prototype.getResponseJson=$e.prototype.La,$e.prototype.getResponseText=$e.prototype.la,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Fa,F_=$e}).apply(typeof Co<"u"?Co:typeof self<"u"?self:typeof window<"u"?window:{});const Kd="@firebase/firestore",Gd="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new yu("@firebase/firestore");function as(){return zr.logLevel}function ee(t,...e){if(zr.logLevel<=_e.DEBUG){const n=e.map(Vu);zr.debug(`Firestore (${xs}): ${t}`,...n)}}function Vn(t,...e){if(zr.logLevel<=_e.ERROR){const n=e.map(Vu);zr.error(`Firestore (${xs}): ${t}`,...n)}}function Ss(t,...e){if(zr.logLevel<=_e.WARN){const n=e.map(Vu);zr.warn(`Firestore (${xs}): ${t}`,...n)}}function Vu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,q_(t,r,n)}function q_(t,e,n){let r=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Vn(r),new Error(r)}function Se(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||q_(e,s,r)}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(yt.UNAUTHENTICATED)))}shutdown(){}}class GP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class QP{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new H_(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class XP{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class YP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new XP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Qd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Qd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ZP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function kl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Jc(s)===Jc(i)?ye(s,i):Jc(s)?1:-1}return ye(t.length,e.length)}const eC=55296,tC=57343;function Jc(t){const e=t.charCodeAt(0);return e>=eC&&e<=tC}function Ps(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="__name__";class an{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=an.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const r=an.isNumericId(e),s=an.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?an.extractNumericId(e).compare(an.extractNumericId(n)):kl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ar.fromString(e.substring(4,e.length-2))}}class Ve extends an{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ve(n)}static emptyPath(){return new Ve([])}}const nC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends an{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return nC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xd}static keyField(){return new ht([Xd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Z($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Z($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Ve.fromString(e))}static fromName(e){return new ne(Ve.fromString(e).popFirst(5))}static empty(){return new ne(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Ve(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t,e,n){if(!n)throw new Z($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rC(t,e,n,r){if(e===!0&&r===!0)throw new Z($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yd(t){if(!ne.isDocumentKey(t))throw new Z($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jd(t){if(ne.isDocumentKey(t))throw new Z($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function W_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ya(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function Wr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ya(t);throw new Z($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,e){const n={typeString:t};return e&&(n.value=e),n}function io(t,e){if(!W_(t))throw new Z($.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Z($.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=-62135596800,ep=1e6;class Fe{static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ep);return new Fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Zd)throw new Z($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ep}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(io(e,Fe._jsonSchema))return new Fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Zd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Fe._jsonSchemaVersion="firestore/timestamp/1.0",Fe._jsonSchema={type:Je("string",Fe._jsonSchemaVersion),seconds:Je("number"),nanoseconds:Je("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new Fe(0,0))}static max(){return new he(new Fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=-1;function sC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new dr(s,ne.empty(),e)}function iC(t){return new dr(t.readTime,t.key,qi)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(he.min(),ne.empty(),qi)}static max(){return new dr(he.max(),ne.empty(),qi)}}function oC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==aC)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):q.reject(n)}static resolve(e){return new q(((n,r)=>{n(e)}))}static reject(e){return new q(((n,r)=>{r(e)}))}static waitFor(e){return new q(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=q.resolve(!1);for(const r of e)n=n.next((s=>s?q.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new q(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new q(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function lC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ms(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ja.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=-1;function Za(t){return t==null}function ya(t){return t===0&&1/t==-1/0}function uC(t){return typeof t=="number"&&Number.isInteger(t)&&!ya(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="";function hC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=tp(e)),e=fC(t.get(n),e);return tp(e)}function fC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case K_:n+="";break;default:n+=i}}return n}function tp(t){return t+K_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function G_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ko(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ko(this.root,e,this.comparator,!1)}getReverseIterator(){return new ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ko(this.root,e,this.comparator,!0)}}class ko{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rp(this.data.getIterator())}getIteratorFrom(e){return new rp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class rp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new tt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Q_("Invalid base64 string: "+i):i}})(e);return new dt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const dC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=dC.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gr(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="server_timestamp",Y_="__type__",J_="__previous_value__",Z_="__local_write_time__";function Mu(t){return(t?.mapValue?.fields||{})[Y_]?.stringValue===X_}function ec(t){const e=t.mapValue.fields[J_];return Mu(e)?ec(e):e}function Hi(t){const e=pr(t.mapValue.fields[Z_].timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const Ea="(default)";class zi{constructor(e,n){this.projectId=e,this.database=n||Ea}static empty(){return new zi("","")}get isDefaultDatabase(){return this.database===Ea}isEqual(e){return e instanceof zi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="__type__",gC="__max__",Do={mapValue:{}},ty="__vector__",va="value";function mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mu(t)?4:_C(t)?9007199254740991:mC(t)?10:11:le(28295,{value:t})}function En(t,e){if(t===e)return!0;const n=mr(t);if(n!==mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hi(t).isEqual(Hi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=pr(s.timestampValue),c=pr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return gr(s.bytesValue).isEqual(gr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?ya(o)===ya(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(np(o)!==np(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!En(o[l],c[l])))return!1;return!0})(t,e);default:return le(52216,{left:t})}}function Wi(t,e){return(t.values||[]).find((n=>En(n,e)))!==void 0}function Cs(t,e){if(t===e)return 0;const n=mr(t),r=mr(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return sp(t.timestampValue,e.timestampValue);case 4:return sp(Hi(t),Hi(e));case 5:return kl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=gr(i),l=gr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ye(c[u],l[u]);if(f!==0)return f}return ye(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ye(We(i.latitude),We(o.latitude));return c!==0?c:ye(We(i.longitude),We(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return ip(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[va]?.arrayValue,f=l[va]?.arrayValue,p=ye(u?.values?.length||0,f?.values?.length||0);return p!==0?p:ip(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Do.mapValue&&o===Do.mapValue)return 0;if(i===Do.mapValue)return 1;if(o===Do.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=kl(l[p],f[p]);if(g!==0)return g;const E=Cs(c[l[p]],u[f[p]]);if(E!==0)return E}return ye(l.length,f.length)})(t.mapValue,e.mapValue);default:throw le(23264,{he:n})}}function sp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=pr(t),r=pr(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function ip(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Cs(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function ks(t){return Dl(t)}function Dl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return gr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ne.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Dl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Dl(n.fields[o])}`;return s+"}"})(t.mapValue):le(61005,{value:t})}function Wo(t){switch(mr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ec(t);return e?16+Wo(e):16;case 5:return 2*t.stringValue.length;case 6:return gr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Wo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return wr(r.fields,((i,o)=>{s+=i.length+Wo(o)})),s})(t.mapValue);default:throw le(13486,{value:t})}}function op(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Nl(t){return!!t&&"integerValue"in t}function Fu(t){return!!t&&"arrayValue"in t}function ap(t){return!!t&&"nullValue"in t}function cp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ko(t){return!!t&&"mapValue"in t}function mC(t){return(t?.mapValue?.fields||{})[ey]?.stringValue===ty}function bi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return wr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=bi(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bi(t.arrayValue.values[n]);return e}return{...t}}function _C(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===gC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bi(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=bi(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ko(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){wr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Dt(bi(this.value))}}function ny(t){const e=[];return wr(t.fields,((n,r)=>{const s=new ht([n]);if(Ko(r)){const i=ny(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new vt(e,0,he.min(),he.min(),he.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,he.min(),he.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,he.min(),he.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n){this.position=e,this.inclusive=n}}function lp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=Cs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function up(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n="asc"){this.field=e,this.dir=n}}function yC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{}class Ye extends ry{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vC(e,n,r):n==="array-contains"?new IC(e,r):n==="in"?new AC(e,r):n==="not-in"?new bC(e,r):n==="array-contains-any"?new RC(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new TC(e,r):new wC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Cs(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.matchesComparison(Cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends ry{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new tn(e,n)}matches(e){return sy(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sy(t){return t.op==="and"}function iy(t){return EC(t)&&sy(t)}function EC(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function Ol(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+ks(t.value);if(iy(t))return t.filters.map((e=>Ol(e))).join(",");{const e=t.filters.map((n=>Ol(n))).join(",");return`${t.op}(${e})`}}function oy(t,e){return t instanceof Ye?(function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&En(r.value,s.value)})(t,e):t instanceof tn?(function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&oy(o,s.filters[c])),!0):!1})(t,e):void le(19439)}function ay(t){return t instanceof Ye?(function(n){return`${n.field.canonicalString()} ${n.op} ${ks(n.value)}`})(t):t instanceof tn?(function(n){return n.op.toString()+" {"+n.getFilters().map(ay).join(" ,")+"}"})(t):"Filter"}class vC extends Ye{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class TC extends Ye{constructor(e,n){super(e,"in",n),this.keys=cy("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class wC extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=cy("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function cy(t,e){return(e.arrayValue?.values||[]).map((n=>ne.fromName(n.referenceValue)))}class IC extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fu(n)&&Wi(n.arrayValue,this.value)}}class AC extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wi(this.value.arrayValue,n)}}class bC extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Wi(this.value.arrayValue,n)}}class RC extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Wi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function hp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new SC(t,e,n,r,s,i,o)}function Uu(t){const e=de(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Ol(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Za(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>ks(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>ks(r))).join(",")),e.Te=n}return e.Te}function Bu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!oy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!up(t.startAt,e.startAt)&&up(t.endAt,e.endAt)}function Vl(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function PC(t,e,n,r,s,i,o,c){return new Fs(t,e,n,r,s,i,o,c)}function ly(t){return new Fs(t)}function fp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uy(t){return t.collectionGroup!==null}function Ri(t){const e=de(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new tt(ht.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ki(i,r))})),n.has(ht.keyField().canonicalString())||e.Ie.push(new Ki(ht.keyField(),r))}return e.Ie}function pn(t){const e=de(t);return e.Ee||(e.Ee=CC(e,Ri(t))),e.Ee}function CC(t,e){if(t.limitType==="F")return hp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ki(s.field,i)}));const n=t.endAt?new Ta(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ta(t.startAt.position,t.startAt.inclusive):null;return hp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xl(t,e){const n=t.filters.concat([e]);return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ll(t,e,n){return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tc(t,e){return Bu(pn(t),pn(e))&&t.limitType===e.limitType}function hy(t){return`${Uu(pn(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>ay(s))).join(", ")}]`),Za(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>ks(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>ks(s))).join(",")),`Target(${r})`})(pn(t))}; limitType=${t.limitType})`}function nc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Ri(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=lp(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Ri(r),s)||r.endAt&&!(function(o,c,l){const u=lp(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Ri(r),s))})(t,e)}function kC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fy(t){return(e,n)=>{let r=!1;for(const s of Ri(t)){const i=DC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function DC(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Cs(l,u):le(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){wr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return G_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=new Be(ne.comparator);function xn(){return NC}const dy=new Be(ne.comparator);function ui(...t){let e=dy;for(const n of t)e=e.insert(n.key,n);return e}function py(t){let e=dy;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Mr(){return Si()}function gy(){return Si()}function Si(){return new Xr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const OC=new Be(ne.comparator),VC=new tt(ne.comparator);function Ee(...t){let e=VC;for(const n of t)e=e.add(n);return e}const xC=new tt(ye);function LC(){return xC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ya(e)?"-0":e}}function my(t){return{integerValue:""+t}}function MC(t,e){return uC(e)?my(e):$u(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this._=void 0}}function FC(t,e,n){return t instanceof wa?(function(s,i){const o={fields:{[Y_]:{stringValue:X_},[Z_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mu(i)&&(i=ec(i)),i&&(o.fields[J_]=i),{mapValue:o}})(n,e):t instanceof Gi?yy(t,e):t instanceof Qi?Ey(t,e):(function(s,i){const o=_y(s,i),c=dp(o)+dp(s.Ae);return Nl(o)&&Nl(s.Ae)?my(c):$u(s.serializer,c)})(t,e)}function UC(t,e,n){return t instanceof Gi?yy(t,e):t instanceof Qi?Ey(t,e):n}function _y(t,e){return t instanceof Ia?(function(r){return Nl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class wa extends rc{}class Gi extends rc{constructor(e){super(),this.elements=e}}function yy(t,e){const n=vy(e);for(const r of t.elements)n.some((s=>En(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Qi extends rc{constructor(e){super(),this.elements=e}}function Ey(t,e){let n=vy(e);for(const r of t.elements)n=n.filter((s=>!En(s,r)));return{arrayValue:{values:n}}}class Ia extends rc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function dp(t){return We(t.integerValue||t.doubleValue)}function vy(t){return Fu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function BC(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Gi&&s instanceof Gi||r instanceof Qi&&s instanceof Qi?Ps(r.elements,s.elements,En):r instanceof Ia&&s instanceof Ia?En(r.Ae,s.Ae):r instanceof wa&&s instanceof wa})(t.transform,e.transform)}class $C{constructor(e,n){this.version=e,this.transformResults=n}}class gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Go(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sc{}function Ty(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Iy(t.key,gn.none()):new oo(t.key,t.data,gn.none());{const n=t.data,r=Dt.empty();let s=new tt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ir(t.key,r,new Ut(s.toArray()),gn.none())}}function jC(t,e,n){t instanceof oo?(function(s,i,o){const c=s.value.clone(),l=gp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Ir?(function(s,i,o){if(!Go(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=gp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(wy(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Pi(t,e,n,r){return t instanceof oo?(function(i,o,c,l){if(!Go(i.precondition,o))return c;const u=i.value.clone(),f=mp(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Ir?(function(i,o,c,l){if(!Go(i.precondition,o))return c;const u=mp(i.fieldTransforms,l,o),f=o.data;return f.setAll(wy(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return Go(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function qC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=_y(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function pp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ps(r,s,((i,o)=>BC(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oo extends sc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ir extends sc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wy(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function gp(t,e,n){const r=new Map;Se(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,UC(o,c,n[s]))}return r}function mp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,FC(i,o,e))}return r}class Iy extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HC extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&jC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gy();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Ty(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ee())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,((n,r)=>pp(n,r)))&&Ps(this.baseMutations,e.baseMutations,((n,r)=>pp(n,r)))}}class ju{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return OC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ju(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,Te;function GC(t){switch(t){case $.OK:return le(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return le(15467,{code:t})}}function Ay(t){if(t===void 0)return Vn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Xe.OK:return $.OK;case Xe.CANCELLED:return $.CANCELLED;case Xe.UNKNOWN:return $.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return $.INTERNAL;case Xe.UNAVAILABLE:return $.UNAVAILABLE;case Xe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Xe.NOT_FOUND:return $.NOT_FOUND;case Xe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Xe.ABORTED:return $.ABORTED;case Xe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Xe.DATA_LOSS:return $.DATA_LOSS;default:return le(39323,{code:t})}}(Te=Xe||(Xe={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=new ar([4294967295,4294967295],0);function _p(t){const e=QC().encode(t),n=new M_;return n.update(e),new Uint8Array(n.digest())}function yp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ar([n,r],0),new ar([s,i],0)]}class qu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new hi(`Invalid padding: ${n}`);if(r<0)throw new hi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new hi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ar.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ar.fromNumber(r)));return s.compare(XC)===1&&(s=new ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=_p(e),[r,s]=yp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qu(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=_p(e),[r,s]=yp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ao.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ic(he.min(),s,new Be(ye),xn(),Ee())}}class ao{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ao(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class by{constructor(e,n){this.targetId=e,this.Ce=n}}class Ry{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ep{constructor(){this.ve=0,this.Fe=vp(),this.Me=dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ee(),n=Ee(),r=Ee();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}})),new ao(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=vp()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Se(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class YC{constructor(e){this.Ge=e,this.ze=new Map,this.je=xn(),this.Je=No(),this.He=No(),this.Ye=new Be(ye)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Vl(i))if(r===0){const o=new ne(i.path);this.et(n,o,vt.newNoDocument(o,he.min()))}else Se(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=gr(r).toUint8Array()}catch(l){if(l instanceof Q_)return Ss("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new qu(o,s,i)}catch(l){return Ss(l instanceof hi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Vl(c.target)){const l=new ne(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,vt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Ee();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new ic(e,n,this.Ye,this.je,r);return this.je=xn(),this.Je=No(),this.He=No(),this.Ye=new Be(ye),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Ep,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new tt(ye),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new tt(ye),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ep),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function No(){return new Be(ne.comparator)}function vp(){return new Be(ne.comparator)}const JC={asc:"ASCENDING",desc:"DESCENDING"},ZC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},e0={and:"AND",or:"OR"};class t0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ml(t,e){return t.useProto3Json||Za(e)?e:{value:e}}function Aa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function n0(t,e){return Aa(t,e.toTimestamp())}function mn(t){return Se(!!t,49232),he.fromTimestamp((function(n){const r=pr(n);return new Fe(r.seconds,r.nanos)})(t))}function Hu(t,e){return Fl(t,e).canonicalString()}function Fl(t,e){const n=(function(s){return new Ve(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Py(t){const e=Ve.fromString(t);return Se(Oy(e),10190,{key:e.toString()}),e}function Ul(t,e){return Hu(t.databaseId,e.path)}function Zc(t,e){const n=Py(e);if(n.get(1)!==t.databaseId.projectId)throw new Z($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(ky(n))}function Cy(t,e){return Hu(t.databaseId,e)}function r0(t){const e=Py(t);return e.length===4?Ve.emptyPath():ky(e)}function Bl(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ky(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Tp(t,e,n){return{name:Ul(t,e),fields:n.value.mapValue.fields}}function s0(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:le(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Se(f===void 0||typeof f=="string",58123),dt.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),dt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?$.UNKNOWN:Ay(u.code);return new Z(f,u.message||"")})(o);n=new Ry(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zc(t,r.document.name),i=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):he.min(),c=new Dt({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Qo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Zc(t,r.document),i=r.readTime?mn(r.readTime):he.min(),o=vt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Qo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Zc(t,r.document),i=r.removedTargetIds||[];n=new Qo([],i,s,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new KC(s,i),c=r.targetId;n=new by(c,o)}}return n}function i0(t,e){let n;if(e instanceof oo)n={update:Tp(t,e.key,e.value)};else if(e instanceof Iy)n={delete:Ul(t,e.key)};else if(e instanceof Ir)n={update:Tp(t,e.key,e.data),updateMask:p0(e.fieldMask)};else{if(!(e instanceof HC))return le(16599,{Vt:e.type});n={verify:Ul(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof wa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Gi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Qi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ia)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw le(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:n0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le(27497)})(t,e.precondition)),n}function o0(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?mn(s.updateTime):mn(i);return o.isEqual(he.min())&&(o=mn(i)),new $C(o,s.transformResults||[])})(n,e)))):[]}function a0(t,e){return{documents:[Cy(t,e.path)]}}function c0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Cy(t,s);const i=(function(u){if(u.length!==0)return Ny(tn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(g){return{field:ls(g.field),direction:h0(g.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Ml(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function l0(t){let e=r0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const g=Dy(p);return g instanceof tn&&iy(g)?g.getFilters():[g]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((g=>(function(k){return new Ki(us(k.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(g)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let g;return g=typeof p=="object"?p.value:p,Za(g)?null:g})(n.limit));let l=null;n.startAt&&(l=(function(p){const g=!!p.before,E=p.values||[];return new Ta(E,g)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const g=!p.before,E=p.values||[];return new Ta(E,g)})(n.endAt)),PC(e,s,o,i,c,"F",l,u)}function u0(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Dy(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=us(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=us(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ye.create(us(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return tn.create(n.compositeFilter.filters.map((r=>Dy(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}})(n.compositeFilter.op))})(t):le(30097,{filter:t})}function h0(t){return JC[t]}function f0(t){return ZC[t]}function d0(t){return e0[t]}function ls(t){return{fieldPath:t.canonicalString()}}function us(t){return ht.fromServerFormat(t.fieldPath)}function Ny(t){return t instanceof Ye?(function(n){if(n.op==="=="){if(cp(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(ap(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cp(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(ap(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:f0(n.op),value:n.value}}})(t):t instanceof tn?(function(n){const r=n.getFilters().map((s=>Ny(s)));return r.length===1?r[0]:{compositeFilter:{op:d0(n.op),filters:r}}})(t):le(54877,{filter:t})}function p0(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Oy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r,s,i=he.min(),o=he.min(),c=dt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.yt=e}}function m0(t){const e=l0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ll(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(){this.Cn=new y0}addToCollectionParentIndex(e,n){return this.Cn.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(dr.min())}updateCollectionGroup(e,n,r){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class y0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Vy=41943040;class kt{static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(Vy,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ds(0)}static cr(){return new Ds(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="LruGarbageCollector",E0=1048576;function Ap([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class v0{constructor(e){this.Ir=e,this.buffer=new tt(Ap),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ap(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class T0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(Ip,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ms(n)?ee(Ip,"Ignoring IndexedDB error during garbage collection: ",n):await Ls(n)}await this.Vr(3e5)}))}}class w0{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return q.resolve(Ja.ce);const r=new v0(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(wp)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wp):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),as()<=_e.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function I0(t,e){return new w0(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(){this.changes=new Xr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Pi(r.mutation,s,Ut.empty(),Fe.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ee()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Mr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=ui();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ee())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=xn();const o=Si(),c=(function(){return Si()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Ir)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Pi(f.mutation,u,f.mutation.getFieldMask(),Fe.now())):o.set(u.key,Ut.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new b0(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=Si();let s=new Be(((o,c)=>o-c)),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Ut.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Ee()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=gy();f.forEach((g=>{if(!i.has(g)){const E=Ty(n.get(g),r.get(g));E!==null&&p.set(g,E),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return q.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):q.resolve(Mr());let c=qi,l=i;return o.next((u=>q.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?q.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{l=l.insert(f,g)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,Ee()))).next((f=>({batchId:c,changes:py(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next((r=>{let s=ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ui();return this.indexManager.getCollectionParents(e,i).next((c=>q.forEach(c,(l=>{const u=(function(p,g){return new Fs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,vt.newInvalidDocument(f)))}));let c=ui();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Pi(f.mutation,u,Ut.empty(),Fe.now()),nc(n,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return q.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:mn(s.createTime)}})(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:m0(s.bundledQuery),readTime:mn(s.readTime)}})(n)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(){this.overlays=new Be(ne.comparator),this.qr=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return q.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),q.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),q.resolve()}getOverlaysForCollection(e,n,r){const s=Mr(),i=n.length+1,o=new ne(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return q.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Mr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Mr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return q.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new WC(n,r));let i=this.qr.get(n);i===void 0&&(i=Ee(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.Qr=new tt(it.$r),this.Ur=new tt(it.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new it(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ne(new Ve([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ne(new Ve([])),r=new it(n,e),s=new it(n,e+1);let i=Ee();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new it(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ne.comparator(e.key,n.key)||ye(e.Yr,n.Yr)}static Kr(e,n){return ye(e.Yr,n.Yr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new tt(it.$r)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zC(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new it(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?Lu:this.tr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ye);return n.forEach((s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),q.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new it(new ne(i),0);let c=new tt(ye);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),q.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Se(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return q.forEach(n.mutations,(s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new it(n,0),s=this.Zr.firstAfterOrEqual(r);return q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.ri=e,this.docs=(function(){return new Be(ne.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=xn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))})),q.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=xn();const o=n.path,c=new ne(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||oC(iC(f),r)<=0||(s.has(f.key)||nc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}ii(e,n){return q.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new N0(this)}getSize(e){return q.resolve(this.size)}}class N0 extends A0{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),q.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.persistence=e,this.si=new Xr((n=>Uu(n)),Bu),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.oi=0,this._i=new zu,this.targetCount=0,this.ai=Ds.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),q.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.Pr(n),q.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),q.waitFor(i).next((()=>s))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return q.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),q.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return q.resolve(r)}containsKey(e,n){return q.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ja(0),this.li=!1,this.li=!0,this.hi=new C0,this.referenceDelegate=e(this),this.Pi=new O0(this),this.indexManager=new _0,this.remoteDocumentCache=(function(s){return new D0(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new g0(n),this.Ii=new S0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new P0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new k0(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new V0(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return q.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class V0 extends cC{constructor(e){super(),this.currentSequenceNumber=e}}class Wu{constructor(e){this.persistence=e,this.Ri=new zu,this.Vi=null}static mi(e){return new Wu(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),q.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),q.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.fi,(r=>{const s=ne.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,he.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return q.or([()=>q.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ba{constructor(e,n){this.persistence=e,this.pi=new Xr((r=>hC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=I0(this,n)}static mi(e,n){return new ba(e,n)}Ei(){}di(e){return q.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return q.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?q.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,he.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),q.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),q.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),q.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Wo(e.data.value)),n}br(e,n,r){return q.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return q.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ku(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return ZI()?8:lC(It())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new x0;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(as()<=_e.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),q.resolve()):(as()<=_e.DEBUG&&ee("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(as()<=_e.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):q.resolve())}ys(e,n){if(fp(n))return q.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Ll(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ee(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,Ll(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return fp(n)||s.isEqual(he.min())?q.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?q.resolve(null):(as()<=_e.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cs(n)),this.vs(e,o,n,sC(s,qi)).next((c=>c)))}))}Ds(e,n){let r=new tt(fy(e));return n.forEach(((s,i)=>{nc(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return as()<=_e.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",cs(n)),this.ps.getDocumentsMatchingQuery(e,n,dr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="LocalStore",M0=3e8;class F0{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Be(ye),this.xs=new Xr((i=>Uu(i)),Bu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new R0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function U0(t,e,n,r){return new F0(t,e,n,r)}async function Ly(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=Ee();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function B0(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,g=p.keys();let E=q.resolve();return g.forEach((k=>{E=E.next((()=>f.getEntry(l,k))).next((V=>{const N=u.docVersions.get(k);Se(N!==null,48541),V.version.compareTo(N)<0&&(p.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),f.addEntry(V)))}))})),E.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=Ee();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function My(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function $0(t,e){const n=de(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(dt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(p,E),(function(V,N,F){return V.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=M0?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(g,E,f)&&c.push(n.Pi.updateTargetData(i,E))}));let l=xn(),u=Ee();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(j0(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(he.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return q.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function j0(t,e,n){let r=Ee(),s=Ee();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=xn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee(Gu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function q0(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Lu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function H0(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,q.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function $l(t,e,n){const r=de(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ms(o))throw o;ee(Gu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function bp(t,e,n){const r=de(t);let s=he.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=de(l),g=p.xs.get(f);return g!==void 0?q.resolve(p.Ms.get(g)):p.Pi.getTargetData(u,f)})(r,o,pn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:Ee()))).next((c=>(z0(r,kC(e),c),{documents:c,Qs:i})))))}function z0(t,e,n){let r=t.Os.get(e)||he.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Rp{constructor(){this.activeTargetIds=LC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class W0{constructor(){this.Mo=new Rp,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Rp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="ConnectivityMonitor";class Pp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(Sp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(Sp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo=null;function jl(){return Oo===null?Oo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Oo++,"0x"+Oo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="RestConnection",G0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Q0{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ea?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=jl(),c=this.zo(e,n.toUriEncodedString());ee(el,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=vr(u);return this.Jo(e,c,l,r,f).then((p=>(ee(el,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Ss(el,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+xs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=G0[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class Y0 extends Q0{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=jl();return new Promise(((c,l)=>{const u=new F_;u.setWithCredentials(!0),u.listenOnce(U_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case zo.NO_ERROR:const p=u.getResponseJson();ee(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case zo.TIMEOUT:ee(mt,`RPC '${e}' ${o} timed out`),l(new Z($.DEADLINE_EXCEEDED,"Request time out"));break;case zo.HTTP_ERROR:const g=u.getStatus();if(ee(mt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const k=E?.error;if(k&&k.status&&k.message){const V=(function(F){const S=F.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(S)>=0?S:$.UNKNOWN})(k.status);l(new Z(V,k.message))}else l(new Z($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Z($.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ee(mt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);ee(mt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=jl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=j_(),c=$_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");ee(mt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let g=!1,E=!1;const k=new X0({Yo:N=>{E?ee(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(ee(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),ee(mt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},Zo:()=>p.close()}),V=(N,F,S)=>{N.listen(F,(P=>{try{S(P)}catch(C){setTimeout((()=>{throw C}),0)}}))};return V(p,li.EventType.OPEN,(()=>{E||(ee(mt,`RPC '${e}' stream ${s} transport opened.`),k.o_())})),V(p,li.EventType.CLOSE,(()=>{E||(E=!0,ee(mt,`RPC '${e}' stream ${s} transport closed`),k.a_(),this.E_(p))})),V(p,li.EventType.ERROR,(N=>{E||(E=!0,Ss(mt,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),k.a_(new Z($.UNAVAILABLE,"The operation could not be completed")))})),V(p,li.EventType.MESSAGE,(N=>{if(!E){const F=N.data[0];Se(!!F,16349);const S=F,P=S?.error||S[0]?.error;if(P){ee(mt,`RPC '${e}' stream ${s} received error:`,P);const C=P.status;let L=(function(y){const m=Xe[y];if(m!==void 0)return Ay(m)})(C),M=P.message;L===void 0&&(L=$.INTERNAL,M="Unknown error status: "+C+" with message "+P.message),E=!0,k.a_(new Z(L,M)),p.close()}else ee(mt,`RPC '${e}' stream ${s} received:`,F),k.u_(F)}})),V(c,B_.STAT_EVENT,(N=>{N.stat===Cl.PROXY?ee(mt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Cl.NOPROXY&&ee(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{k.__()}),0),k}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function tl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t){return new t0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="PersistentStream";class Uy{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Fy(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new Z($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ee(Cp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ee(Cp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class J0 extends Uy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=s0(this.serializer,e),r=(function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?mn(o.readTime):he.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Bl(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=Vl(l)?{documents:a0(i,l)}:{query:c0(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Sy(i,o.resumeToken);const u=Ml(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=Aa(i,o.snapshotVersion.toTimestamp());const u=Ml(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=u0(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Bl(this.serializer),n.removeTarget=e,this.q_(n)}}class Z0 extends Uy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=o0(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Bl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>i0(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{}class t1 extends e1{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Z($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Fl(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z($.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,Fl(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z($.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class n1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vn(n),this.aa=!1):ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="RemoteStore";class r1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{Yr(this)&&(ee(Kr,"Restarting streams for network reachability change."),await(async function(l){const u=de(l);u.Ea.add(4),await co(u),u.Ra.set("Unknown"),u.Ea.delete(4),await ac(u)})(this))}))})),this.Ra=new n1(r,s)}}async function ac(t){if(Yr(t))for(const e of t.da)await e(!0)}async function co(t){for(const e of t.da)await e(!1)}function By(t,e){const n=de(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Ju(n)?Yu(n):Us(n).O_()&&Xu(n,e))}function Qu(t,e){const n=de(t),r=Us(n);n.Ia.delete(e),r.O_()&&$y(n,e),n.Ia.size===0&&(r.O_()?r.L_():Yr(n)&&n.Ra.set("Unknown"))}function Xu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Us(t).Y_(e)}function $y(t,e){t.Va.Ue(e),Us(t).Z_(e)}function Yu(t){t.Va=new YC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Us(t).start(),t.Ra.ua()}function Ju(t){return Yr(t)&&!Us(t).x_()&&t.Ia.size>0}function Yr(t){return de(t).Ea.size===0}function jy(t){t.Va=void 0}async function s1(t){t.Ra.set("Online")}async function i1(t){t.Ia.forEach(((e,n)=>{Xu(t,e)}))}async function o1(t,e){jy(t),Ju(t)?(t.Ra.ha(e),Yu(t)):t.Ra.set("Unknown")}async function a1(t,e,n){if(t.Ra.set("Online"),e instanceof Ry&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){ee(Kr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ra(t,r)}else if(e instanceof Qo?t.Va.Ze(e):e instanceof by?t.Va.st(e):t.Va.tt(e),!n.isEqual(he.min()))try{const r=await My(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(dt.EMPTY_BYTE_STRING,f.snapshotVersion)),$y(i,l);const p=new tr(f.target,l,u,f.sequenceNumber);Xu(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){ee(Kr,"Failed to raise snapshot:",r),await Ra(t,r)}}async function Ra(t,e,n){if(!Ms(e))throw e;t.Ea.add(1),await co(t),t.Ra.set("Offline"),n||(n=()=>My(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ee(Kr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ac(t)}))}function qy(t,e){return e().catch((n=>Ra(t,n,e)))}async function cc(t){const e=de(t),n=_r(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Lu;for(;c1(e);)try{const s=await q0(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,l1(e,s)}catch(s){await Ra(e,s)}Hy(e)&&zy(e)}function c1(t){return Yr(t)&&t.Ta.length<10}function l1(t,e){t.Ta.push(e);const n=_r(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Hy(t){return Yr(t)&&!_r(t).x_()&&t.Ta.length>0}function zy(t){_r(t).start()}async function u1(t){_r(t).ra()}async function h1(t){const e=_r(t);for(const n of t.Ta)e.ea(n.mutations)}async function f1(t,e,n){const r=t.Ta.shift(),s=ju.from(r,e,n);await qy(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await cc(t)}async function d1(t,e){e&&_r(t).X_&&await(async function(r,s){if((function(o){return GC(o)&&o!==$.ABORTED})(s.code)){const i=r.Ta.shift();_r(r).B_(),await qy(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await cc(r)}})(t,e),Hy(t)&&zy(t)}async function kp(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),ee(Kr,"RemoteStore received new credentials");const r=Yr(n);n.Ea.add(3),await co(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ac(n)}async function p1(t,e){const n=de(t);e?(n.Ea.delete(2),await ac(n)):e||(n.Ea.add(2),await co(n),n.Ra.set("Unknown"))}function Us(t){return t.ma||(t.ma=(function(n,r,s){const i=de(n);return i.sa(),new J0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:s1.bind(null,t),t_:i1.bind(null,t),r_:o1.bind(null,t),H_:a1.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Ju(t)?Yu(t):t.Ra.set("Unknown")):(await t.ma.stop(),jy(t))}))),t.ma}function _r(t){return t.fa||(t.fa=(function(n,r,s){const i=de(n);return i.sa(),new Z0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:u1.bind(null,t),r_:d1.bind(null,t),ta:h1.bind(null,t),na:f1.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await cc(t)):(await t.fa.stop(),t.Ta.length>0&&(ee(Kr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Zu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eh(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Ms(t))return new Z($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{static emptySet(e){return new Ts(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=ui(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.ga=new Be(ne.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):le(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Ns{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Ns(e,n,Ts.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class m1{constructor(){this.queries=Np(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Np(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new Z($.ABORTED,"Firestore shutting down"))}}function Np(){return new Xr((t=>hy(t)),tc)}async function _1(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new g1,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=eh(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&th(n)}async function y1(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function E1(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&th(n)}function v1(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function th(t){t.Ca.forEach((e=>{e.next()}))}var ql,Op;(Op=ql||(ql={})).Ma="default",Op.Cache="cache";class T1{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ql.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.key=e}}class Ky{constructor(e){this.key=e}}class w1{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ee(),this.mutatedKeys=Ee(),this.eu=fy(e),this.tu=new Ts(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Dp,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const g=s.get(f),E=nc(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),V=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let N=!1;g&&E?g.data.isEqual(E.data)?k!==V&&(r.track({type:3,doc:E}),N=!0):this.su(g,E)||(r.track({type:2,doc:E}),N=!0,(l&&this.eu(E,l)>0||u&&this.eu(E,u)<0)&&(c=!0)):!g&&E?(r.track({type:0,doc:E}),N=!0):g&&!E&&(r.track({type:1,doc:g}),N=!0,(l||u)&&(c=!0)),N&&(E?(o=o.add(E),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(E,k){const V=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:N})}};return V(E)-V(k)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Ns(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Dp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ee(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new Ky(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new Wy(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ee();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ns.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const nh="SyncEngine";class I1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class A1{constructor(e){this.key=e,this.hu=!1}}class b1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Xr((c=>hy(c)),tc),this.Iu=new Map,this.Eu=new Set,this.du=new Be(ne.comparator),this.Au=new Map,this.Ru=new zu,this.Vu={},this.mu=new Map,this.fu=Ds.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function R1(t,e,n=!0){const r=Zy(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Gy(r,e,n,!0),s}async function S1(t,e){const n=Zy(t);await Gy(n,e,!0,!1)}async function Gy(t,e,n,r){const s=await H0(t.localStore,pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await P1(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&By(t.remoteStore,s),c}async function P1(t,e,n,r,s){t.pu=(p,g,E)=>(async function(V,N,F,S){let P=N.view.ru(F);P.Cs&&(P=await bp(V.localStore,N.query,!1).then((({documents:v})=>N.view.ru(v,P))));const C=S&&S.targetChanges.get(N.targetId),L=S&&S.targetMismatches.get(N.targetId)!=null,M=N.view.applyChanges(P,V.isPrimaryClient,C,L);return xp(V,N.targetId,M.au),M.snapshot})(t,p,g,E);const i=await bp(t.localStore,e,!0),o=new w1(e,i.Qs),c=o.ru(i.documents),l=ao.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);xp(t,n,u.au);const f=new I1(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function C1(t,e,n){const r=de(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!tc(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await $l(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Qu(r.remoteStore,s.targetId),Hl(r,s.targetId)})).catch(Ls)):(Hl(r,s.targetId),await $l(r.localStore,s.targetId,!0))}async function k1(t,e){const n=de(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Qu(n.remoteStore,r.targetId))}async function D1(t,e,n){const r=F1(t);try{const s=await(function(o,c){const l=de(o),u=Fe.now(),f=c.reduce(((E,k)=>E.add(k.key)),Ee());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",(E=>{let k=xn(),V=Ee();return l.Ns.getEntries(E,f).next((N=>{k=N,k.forEach(((F,S)=>{S.isValidDocument()||(V=V.add(F))}))})).next((()=>l.localDocuments.getOverlayedDocuments(E,k))).next((N=>{p=N;const F=[];for(const S of c){const P=qC(S,p.get(S.key).overlayedDocument);P!=null&&F.push(new Ir(S.key,P,ny(P.value.mapValue),gn.exists(!0)))}return l.mutationQueue.addMutationBatch(E,u,F,c)})).next((N=>{g=N;const F=N.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(E,N.batchId,F)}))})).then((()=>({batchId:g.batchId,changes:py(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Be(ye)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await lo(r,s.changes),await cc(r.remoteStore)}catch(s){const i=eh(s,"Failed to persist write");n.reject(i)}}async function Qy(t,e){const n=de(t);try{const r=await $0(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Se(o.hu,14607):s.removedDocuments.size>0&&(Se(o.hu,42227),o.hu=!1))})),await lo(n,r,e)}catch(r){await Ls(r)}}function Vp(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=de(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const g of p.Sa)g.va(c)&&(u=!0)})),u&&th(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function N1(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Be(ne.comparator);o=o.insert(i,vt.newNoDocument(i,he.min()));const c=Ee().add(i),l=new ic(he.min(),new Map,new Be(ye),o,c);await Qy(r,l),r.du=r.du.remove(i),r.Au.delete(e),rh(r)}else await $l(r.localStore,e,!1).then((()=>Hl(r,e,n))).catch(Ls)}async function O1(t,e){const n=de(t),r=e.batch.batchId;try{const s=await B0(n.localStore,e);Yy(n,r,null),Xy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lo(n,s)}catch(s){await Ls(s)}}async function V1(t,e,n){const r=de(t);try{const s=await(function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Se(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);Yy(r,e,n),Xy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lo(r,s)}catch(s){await Ls(s)}}function Xy(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Yy(t,e,n){const r=de(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Hl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||Jy(t,r)}))}function Jy(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Qu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),rh(t))}function xp(t,e,n){for(const r of n)r instanceof Wy?(t.Ru.addReference(r.key,e),x1(t,r)):r instanceof Ky?(ee(nh,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Jy(t,r.key)):le(19791,{wu:r})}function x1(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ee(nh,"New document in limbo: "+n),t.Eu.add(r),rh(t))}function rh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ne(Ve.fromString(e)),r=t.fu.next();t.Au.set(r,new A1(n)),t.du=t.du.insert(n,r),By(t.remoteStore,new tr(pn(ly(n.path)),r,"TargetPurposeLimboResolution",Ja.ce))}}async function lo(t,e,n){const r=de(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Ku.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>q.forEach(u,(g=>q.forEach(g.Es,(E=>f.persistence.referenceDelegate.addReference(p,g.targetId,E))).next((()=>q.forEach(g.ds,(E=>f.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))))))}catch(p){if(!Ms(p))throw p;ee(Gu,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const E=f.Ms.get(g),k=E.snapshotVersion,V=E.withLastLimboFreeSnapshotVersion(k);f.Ms=f.Ms.insert(g,V)}}})(r.localStore,i))}async function L1(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){ee(nh,"User change. New user:",e.toKey());const r=await Ly(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new Z($.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lo(n,r.Ls)}}function M1(t,e){const n=de(t),r=n.Au.get(e);if(r&&r.hu)return Ee().add(r.key);{let s=Ee();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function Zy(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=M1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=N1.bind(null,e),e.Pu.H_=E1.bind(null,e.eventManager),e.Pu.yu=v1.bind(null,e.eventManager),e}function F1(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=O1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=V1.bind(null,e),e}class Sa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return U0(this.persistence,new L0,e.initialUser,this.serializer)}Cu(e){return new xy(Wu.mi,this.serializer)}Du(e){return new W0}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sa.provider={build:()=>new Sa};class U1 extends Sa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Se(this.persistence.referenceDelegate instanceof ba,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new T0(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new xy((r=>ba.mi(r,n)),this.serializer)}}class zl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=L1.bind(null,this.syncEngine),await p1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new m1})()}createDatastore(e){const n=oc(e.databaseInfo.databaseId),r=(function(i){return new Y0(i)})(e.databaseInfo);return(function(i,o,c,l){return new t1(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new r1(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Vp(this.syncEngine,n,0)),(function(){return Pp.v()?new Pp:new K0})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new b1(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=de(n);ee(Kr,"RemoteStore shutting down."),r.Ea.add(5),await co(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}zl.provider={build:()=>new zl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="FirestoreClient";class $1{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=xu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ee(yr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ee(yr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=eh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function nl(t,e){t.asyncQueue.verifyOperationInProgress(),ee(yr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Ly(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Lp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await j1(t);ee(yr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>kp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>kp(e.remoteStore,s))),t._onlineComponents=e}async function j1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(yr,"Using user provided OfflineComponentProvider");try{await nl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Ss("Error using user provided cache. Falling back to memory cache: "+n),await nl(t,new Sa)}}else ee(yr,"Using default OfflineComponentProvider"),await nl(t,new U1(void 0));return t._offlineComponents}async function eE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(yr,"Using user provided OnlineComponentProvider"),await Lp(t,t._uninitializedComponentsProvider._online)):(ee(yr,"Using default OnlineComponentProvider"),await Lp(t,new zl))),t._onlineComponents}function q1(t){return eE(t).then((e=>e.syncEngine))}async function H1(t){const e=await eE(t),n=e.eventManager;return n.onListen=R1.bind(null,e.syncEngine),n.onUnlisten=C1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=S1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=k1.bind(null,e.syncEngine),n}function z1(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new B1({next:g=>{f.Nu(),o.enqueueAndForget((()=>y1(i,p))),g.fromCache&&l.source==="server"?u.reject(new Z($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new T1(c,f,{includeMetadataChanges:!0,qa:!0});return _1(i,p)})(await H1(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="firestore.googleapis.com",Fp=!0;class Up{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Z($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nE,this.ssl=Fp}else this.host=e.host,this.ssl=e.ssl??Fp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Vy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<E0)throw new Z($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tE(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Z($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Z($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Z($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Up({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Up(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new KP;switch(r.type){case"firstParty":return new YP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Mp.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Mp.delete(n),r.terminate())})(this),Promise.resolve()}}function W1(t,e,n,r={}){t=Wr(t,lc);const s=vr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(mu(`https://${c}`),_u("Firestore",!0)),i.host!==nE&&i.host!==c&&Ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!$r(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=yt.MOCK_USER;else{u=Om(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Z($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new yt(p)}t._authCredentials=new GP(new H_(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jr(this.firestore,e,this._query)}}class Ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}toJSON(){return{type:Ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(io(n,Ze._jsonSchema))return new Ze(e,r||null,new ne(Ve.fromString(n.referencePath)))}}Ze._jsonSchemaVersion="firestore/documentReference/1.0",Ze._jsonSchema={type:Je("string",Ze._jsonSchemaVersion),referencePath:Je("string")};class lr extends Jr{constructor(e,n,r){super(e,n,ly(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new ne(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function kk(t,e,...n){if(t=Ue(t),z_("collection","path",e),t instanceof lc){const r=Ve.fromString(e,...n);return Jd(r),new lr(t,null,r)}{if(!(t instanceof Ze||t instanceof lr))throw new Z($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Jd(r),new lr(t.firestore,null,r)}}function Dk(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=xu.newId()),z_("doc","path",e),t instanceof lc){const r=Ve.fromString(e,...n);return Yd(r),new Ze(t,null,new ne(r))}{if(!(t instanceof Ze||t instanceof lr))throw new Z($.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Yd(r),new Ze(t.firestore,t instanceof lr?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="AsyncQueue";class $p{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Fy(this,"async_queue_retry"),this._c=()=>{const r=tl();r&&ee(Bp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=tl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=tl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new cr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ms(e))throw e;ee(Bp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Vn("INTERNAL UNHANDLED ERROR: ",jp(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Zu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&le(47125,{Pc:jp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function jp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class uc extends lc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new $p,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $p(e),this._firestoreClient=void 0,await e}}}function K1(t,e){const n=typeof t=="object"?t:vu(),r=typeof t=="string"?t:Ea,s=Wa(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=km("firestore");i&&W1(s,...i)}return s}function rE(t){if(t._terminated)throw new Z($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||G1(t),t._firestoreClient}function G1(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new pC(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,tE(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new $1(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qt(dt.fromBase64String(e))}catch(n){throw new Z($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qt(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(io(e,qt._jsonSchema))return qt.fromBase64String(e.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:Je("string",qt._jsonSchemaVersion),bytes:Je("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_n._jsonSchemaVersion}}static fromJSON(e){if(io(e,_n._jsonSchema))return new _n(e.latitude,e.longitude)}}_n._jsonSchemaVersion="firestore/geoPoint/1.0",_n._jsonSchema={type:Je("string",_n._jsonSchemaVersion),latitude:Je("number"),longitude:Je("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(io(e,yn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new yn(e.vectorValues);throw new Z($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yn._jsonSchemaVersion="firestore/vectorValue/1.0",yn._jsonSchema={type:Je("string",yn._jsonSchemaVersion),vectorValues:Je("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=/^__.*__$/;class X1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new oo(e,this.data,n,this.fieldTransforms)}}class sE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:t})}}class ih{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ih({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Pa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(iE(this.Ac)&&Q1.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Y1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||oc(e)}Cc(e,n,r,s=!1){return new ih({Ac:e,methodName:n,Dc:r,path:ht.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oh(t){const e=t._freezeSettings(),n=oc(t._databaseId);return new Y1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function J1(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);ah("Data must be an object, but it was:",o,r);const c=oE(r,o);let l,u;if(i.merge)l=new Ut(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Wl(e,p,n);if(!o.contains(g))throw new Z($.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);cE(f,g)||f.push(g)}l=new Ut(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new X1(new Dt(c),l,u)}class fc extends sh{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fc}}function Z1(t,e,n,r){const s=t.Cc(1,e,n);ah("Data must be an object, but it was:",s,r);const i=[],o=Dt.empty();wr(r,((l,u)=>{const f=ch(e,l,n);u=Ue(u);const p=s.yc(f);if(u instanceof fc)i.push(f);else{const g=uo(u,p);g!=null&&(i.push(f),o.set(f,g))}}));const c=new Ut(i);return new sE(o,c,s.fieldTransforms)}function ek(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[Wl(e,r,n)],l=[s];if(i.length%2!=0)throw new Z($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Wl(e,i[g])),l.push(i[g+1]);const u=[],f=Dt.empty();for(let g=c.length-1;g>=0;--g)if(!cE(u,c[g])){const E=c[g];let k=l[g];k=Ue(k);const V=o.yc(E);if(k instanceof fc)u.push(E);else{const N=uo(k,V);N!=null&&(u.push(E),f.set(E,N))}}const p=new Ut(u);return new sE(f,p,o.fieldTransforms)}function tk(t,e,n,r=!1){return uo(n,t.Cc(r?4:3,e))}function uo(t,e){if(aE(t=Ue(t)))return ah("Unsupported field value:",e,t),oE(t,e);if(t instanceof sh)return(function(r,s){if(!iE(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=uo(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return MC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:Aa(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Aa(s.serializer,i)}}if(r instanceof _n)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qt)return{bytesValue:Sy(s.serializer,r._byteString)};if(r instanceof Ze){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof yn)return(function(o,c){return{mapValue:{fields:{[ey]:{stringValue:ty},[va]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return $u(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Ya(r)}`)})(t,e)}function oE(t,e){const n={};return G_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(t,((r,s)=>{const i=uo(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function aE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof _n||t instanceof qt||t instanceof Ze||t instanceof sh||t instanceof yn)}function ah(t,e,n){if(!aE(n)||!W_(n)){const r=Ya(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Wl(t,e,n){if((e=Ue(e))instanceof hc)return e._internalPath;if(typeof e=="string")return ch(t,e);throw Pa("Field path arguments must be of type string or ",t,!1,void 0,n)}const nk=new RegExp("[~\\*/\\[\\]]");function ch(t,e,n){if(e.search(nk)>=0)throw Pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hc(...e.split("."))._internalPath}catch{throw Pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Z($.INVALID_ARGUMENT,c+t+l)}function cE(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(lh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rk extends lE{data(){return super.data()}}function lh(t,e){return typeof e=="string"?ch(t,e):e instanceof hc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uh{}class uE extends uh{}function Nk(t,e,...n){let r=[];e instanceof uh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof fh)).length,c=i.filter((l=>l instanceof hh)).length;if(o>1||o>0&&c>0)throw new Z($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class hh extends uE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hh(e,n,r)}_apply(e){const n=this._parse(e);return hE(e._query,n),new Jr(e.firestore,e.converter,xl(e._query,n))}_parse(e){const n=oh(e.firestore);return(function(i,o,c,l,u,f,p){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Z($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Hp(p,f);const k=[];for(const V of p)k.push(qp(l,i,V));g={arrayValue:{values:k}}}else g=qp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Hp(p,f),g=tk(c,o,p,f==="in"||f==="not-in");return Ye.create(u,f,g)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class fh extends uh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new fh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)hE(o,l),o=xl(o,l)})(e._query,n),new Jr(e.firestore,e.converter,xl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dh extends uE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new dh(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new Z($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Z($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ki(i,o)})(e._query,this._field,this._direction);return new Jr(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Fs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function Ok(t,e="asc"){const n=e,r=lh("orderBy",t);return dh._create(r,n)}function qp(t,e,n){if(typeof(n=Ue(n))=="string"){if(n==="")throw new Z($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uy(e)&&n.indexOf("/")!==-1)throw new Z($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!ne.isDocumentKey(r))throw new Z($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return op(t,new ne(r))}if(n instanceof Ze)return op(t,n._key);throw new Z($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ya(n)}.`)}function Hp(t,e){if(!Array.isArray(t)||t.length===0)throw new Z($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hE(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new Z($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ik{convertValue(e,n="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[va].arrayValue?.values?.map((r=>We(r.doubleValue)));return new yn(n)}convertGeoPoint(e){return new _n(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ec(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hi(e));default:return null}}convertTimestamp(e){const n=pr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Se(Oy(r),9688,{name:e});const s=new zi(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Vo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ws extends lE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(lh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ws._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ws._jsonSchemaVersion="firestore/documentSnapshot/1.0",ws._jsonSchema={type:Je("string",ws._jsonSchemaVersion),bundleSource:Je("string","DocumentSnapshot"),bundleName:Je("string"),bundle:Je("string")};class Xo extends ws{data(e={}){return super.data(e)}}class Is{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Xo(this._firestore,this._userDataWriter,r.key,r,new Vo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Xo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Vo(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Xo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Vo(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:ak(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Is._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ak(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}Is._jsonSchemaVersion="firestore/querySnapshot/1.0",Is._jsonSchema={type:Je("string",Is._jsonSchemaVersion),bundleSource:Je("string","QuerySnapshot"),bundleName:Je("string"),bundle:Je("string")};class ck extends ik{constructor(e){super(),this.firestore=e}convertBytes(e){return new qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function Vk(t){t=Wr(t,Jr);const e=Wr(t.firestore,uc),n=rE(e),r=new ck(e);return sk(t._query),z1(n,t._query).then((s=>new Is(e,r,t,s)))}function xk(t,e,n){t=Wr(t,Ze);const r=Wr(t.firestore,uc),s=ok(t.converter,e);return fE(r,[J1(oh(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,gn.none())])}function Lk(t,e,n,...r){t=Wr(t,Ze);const s=Wr(t.firestore,uc),i=oh(s);let o;return o=typeof(e=Ue(e))=="string"||e instanceof hc?ek(i,"updateDoc",t._key,e,n,r):Z1(i,"updateDoc",t._key,e),fE(s,[o.toMutation(t._key,gn.exists(!0))])}function fE(t,e){return(function(r,s){const i=new cr;return r.asyncQueue.enqueueAndForget((async()=>D1(await q1(r),s,i))),i.promise})(rE(t),e)}(function(e,n=!0){(function(s){xs=s})(Gr),jr(new fr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new uc(new QP(r.getProvider("auth-internal")),new JP(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),hn(Kd,Gd,e),hn(Kd,Gd,"esm2020")})();const lk={apiKey:"AIzaSyBRFiDaknpB8mPa_Wq_U6fCNK95LJrlPZU",authDomain:"imralphmaron.firebaseapp.com",projectId:"imralphmaron",storageBucket:"imralphmaron.firebasestorage.app",messagingSenderId:"742817279999",appId:"1:742817279999:web:c3e429bbbb675ae64fc1ca",measurementId:"G-F3ZSVCTWD3"},ph=Lm(lk),uk=Ho(ph);gR(uk,u_);const Mk=qP(ph),Fk=K1(ph),gh=mw(Cw);gh.use(Ew());gh.use(E_);gh.mount("#app");export{kS as A,vk as B,$t as C,bk as D,E_ as E,Lt as F,Yl as G,Pk as H,Sk as I,Mk as J,Ik as K,Tk as L,kk as M,Fk as N,Nk as O,Ok as P,Vk as Q,Dk as R,Lk as S,yk as T,xk as U,qP as V,Rk as W,hk as X,Rw as _,mk as a,rm as b,gk as c,Dg as d,PT as e,_k as f,Vg as g,Wv as h,Pt as i,kv as j,bw as k,xE as l,_i as m,Jl as n,sa as o,fk as p,ps as q,Di as r,Lg as s,XE as t,Ak as u,Ek as v,wk as w,pk as x,oa as y,dk as z};
