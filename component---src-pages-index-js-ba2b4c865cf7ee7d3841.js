"use strict";(self.webpackChunkwww_dmccarthy_org=self.webpackChunkwww_dmccarthy_org||[]).push([[678],{4591:function(t,e,s){s.d(e,{Z:function(){return u}});var n=s(7294);var i=()=>{const t="dmccarthy-theme";let{0:e,1:s}=(0,n.useState)("light");const i=(0,n.useCallback)((()=>{"light"===e&&(s("dark"),localStorage.setItem(t,"dark")),"dark"===e&&(s("light"),localStorage.setItem(t,"light"))}),[e]);return(0,n.useEffect)((()=>{const e=localStorage.getItem(t);e&&s(e)}),[]),[e,i]},M=s(3408),a=s(6947);var u=t=>{let{children:e}=t;const[s,u]=i();return(0,n.useEffect)((()=>{const t=document.documentElement;"dark"===s&&(null==t||t.classList.remove("theme--light"),null==t||t.classList.add("theme--dark")),"light"===s&&(null==t||t.classList.remove("theme--dark"),null==t||t.classList.add("theme--light"))}),[s]),n.createElement("div",null,n.createElement(M.Z,{theme:s,toggle:u}),n.createElement(n.Fragment,null,e),n.createElement(a.Z,null))}},3428:function(t,e,s){s.r(e),s.d(e,{default:function(){return j}});var n=s(7294),i=s(3406);function M(){return M=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},M.apply(this,arguments)}var a={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},u=new(function(){function t(){}var e=t.prototype;return e.load=function(t,e,s){if(t.el="string"==typeof s?document.querySelector(s):s,t.options=M({},a,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var n=Array.prototype.slice.apply(t.stringsElement.children),i=n.length;if(i)for(var u=0;u<i;u+=1)t.strings.push(n[u].innerHTML.trim())}for(var r in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[r]=r;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(s)}},e.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(s)}},t}()),r=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n=t.substring(e).charAt(0);if("<"===n||"&"===n){var i;for(i="<"===n?">":";";t.substring(e+1).charAt(0)!==i&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n=t.substring(e).charAt(0);if(">"===n||";"===n){var i;for(i=">"===n?"<":"&";t.substring(e-1).charAt(0)!==i&&!(--e<0););e--}return e},t}()),o=function(){function t(t,e){u.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)},e.typewrite=function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=r.typeHtmlChars(t,e,s);var n=0,M=t.substring(e);if("^"===M.charAt(0)&&/^\^\d+/.test(M)){var a=1;a+=(M=/\d+/.exec(M)[0]).length,n=parseInt(M),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+a),s.toggleBlinking(!0)}if("`"===M.charAt(0)){for(;"`"!==t.substring(e+i).charAt(0)&&(i++,!(e+i>t.length)););var u=t.substring(0,e),o=t.substring(u.length+1,e+i),c=t.substring(e+i+1);t=u+o+c,i--}s.timeout=setTimeout((function(){s.toggleBlinking(!1),e>=t.length?s.doneTyping(t,e):s.keepTyping(t,e,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))}),n)}),n):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substring(0,e+=s);this.replaceText(n),this.typewrite(t,e)},e.doneTyping=function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){s.backspace(t,e)}),this.backDelay))},e.backspace=function(t,e){var s=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=r.backSpaceHtmlChars(t,e,s);var n=t.substring(0,e);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];s.stopNum=i&&n===i.substring(0,e)?e:0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))}),n)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();const c=(0,n.memo)((({style:t,className:e,typedRef:s,parseRef:i,stopped:M,children:a,startWhenVisible:u,...r})=>{const c=(0,n.useRef)(null),l=(0,n.useMemo)((()=>[...Object.values(r).filter((t=>"boolean"==typeof t||"number"==typeof t||"string"==typeof t)),r.strings?.join(",")]),[r]);(0,n.useEffect)((()=>{const t=i&&i(c)||c.current,e=new o(t,{...r});if((M||u)&&e?.stop(),u){const s=new IntersectionObserver((([t])=>{t.isIntersecting&&(e?.start(),s.disconnect())}));s.observe(t)}return s&&e&&s(e),()=>{e.destroy()}}),l);const L=a?n.cloneElement(a,{ref:c}):n.createElement("span",{style:t,ref:c});return n.createElement("span",{style:t,className:e,"data-testid":"react-typed"},L)}));var l=()=>n.createElement("div",{className:"page-header"},n.createElement("div",{className:"lg-head"},n.createElement("div",{className:"head"},n.createElement("p",null,"Hi, I'm"),n.createElement("h1",null,n.createElement(c,{strings:["Dan McCarthy"],typeSpeed:90})),n.createElement("div",{className:"header-bar"},n.createElement("div",{className:"circle red"}),n.createElement("div",{className:"circle green"}),n.createElement("div",{className:"circle yellow"}),n.createElement("div",{className:"circle blue"}))),n.createElement("div",{className:"info-container"},n.createElement("div",{className:"info-row"},n.createElement("img",{className:"info-icon",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJPdXRsaW5lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48cGF0aCBkPSJNMTksNEgxNy45QTUuMDA5LDUuMDA5LDAsMCwwLDEzLDBIMTFBNS4wMDksNS4wMDksMCwwLDAsNi4xLDRINUE1LjAwNiw1LjAwNiwwLDAsMCwwLDlWMTlhNS4wMDYsNS4wMDYsMCwwLDAsNSw1SDE5YTUuMDA2LDUuMDA2LDAsMCwwLDUtNVY5QTUuMDA2LDUuMDA2LDAsMCwwLDE5LDRaTTExLDJoMmEzLDMsMCwwLDEsMi44MTYsMkg4LjE4NEEzLDMsMCwwLDEsMTEsMlpNNSw2SDE5YTMsMywwLDAsMSwzLDN2M0gyVjlBMywzLDAsMCwxLDUsNlpNMTksMjJINWEzLDMsMCwwLDEtMy0zVjE0aDl2MWExLDEsMCwwLDAsMiwwVjE0aDl2NUEzLDMsMCwwLDEsMTksMjJaIi8+PC9zdmc+Cg=="}),n.createElement("h3",null,"Software Developer")),n.createElement("div",{className:"info-row"},n.createElement("img",{className:"info-icon",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJPdXRsaW5lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48cGF0aCBkPSJNMTIsNmE0LDQsMCwxLDAsNCw0QTQsNCwwLDAsMCwxMiw2Wm0wLDZhMiwyLDAsMSwxLDItMkEyLDIsMCwwLDEsMTIsMTJaIi8+PHBhdGggZD0iTTEyLDI0YTUuMjcxLDUuMjcxLDAsMCwxLTQuMzExLTIuMmMtMy44MTEtNS4yNTctNS43NDQtOS4yMDktNS43NDQtMTEuNzQ3YTEwLjA1NSwxMC4wNTUsMCwwLDEsMjAuMTEsMGMwLDIuNTM4LTEuOTMzLDYuNDktNS43NDQsMTEuNzQ3QTUuMjcxLDUuMjcxLDAsMCwxLDEyLDI0Wk0xMiwyLjE4MWE3Ljg4Myw3Ljg4MywwLDAsMC03Ljg3NCw3Ljg3NGMwLDIuMDEsMS44OTMsNS43MjcsNS4zMjksMTAuNDY2YTMuMTQ1LDMuMTQ1LDAsMCwwLDUuMDksMGMzLjQzNi00LjczOSw1LjMyOS04LjQ1Niw1LjMyOS0xMC40NjZBNy44ODMsNy44ODMsMCwwLDAsMTIsMi4xODFaIi8+PC9zdmc+Cg=="}),n.createElement("h3",null,"New Hampshire")))),n.createElement("div",{onClick:function(){document.getElementById("scroll").scrollIntoView({behavior:"smooth"})},id:"scroll",className:"arrow-container"},n.createElement("img",{className:"info-icon",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIgM0MxMi41NTIzIDMgMTMgMy40NDc3MiAxMyA0VjE3LjU4NThMMTguMjkyOSAxMi4yOTI5QzE4LjY4MzQgMTEuOTAyNCAxOS4zMTY2IDExLjkwMjQgMTkuNzA3MSAxMi4yOTI5QzIwLjA5NzYgMTIuNjgzNCAyMC4wOTc2IDEzLjMxNjYgMTkuNzA3MSAxMy43MDcxTDEyLjcwNzEgMjAuNzA3MUMxMi4zMTY2IDIxLjA5NzYgMTEuNjgzNCAyMS4wOTc2IDExLjI5MjkgMjAuNzA3MUw0LjI5Mjg5IDEzLjcwNzFDMy45MDIzNyAxMy4zMTY2IDMuOTAyMzcgMTIuNjgzNCA0LjI5Mjg5IDEyLjI5MjlDNC42ODM0MiAxMS45MDI0IDUuMzE2NTggMTEuOTAyNCA1LjcwNzExIDEyLjI5MjlMMTEgMTcuNTg1OFY0QzExIDMuNDQ3NzIgMTEuNDQ3NyAzIDEyIDNaIiBmaWxsPSIjMDAwMDAwIi8+DQo8L3N2Zz4="})));var L=()=>n.createElement("h3",null,n.createElement("span",null,"I'm "),n.createElement(c,{strings:["a Student","a Developer","a Mentor","a Programmer","a Designer","an Artist"],typeSpeed:50,backSpeed:40,loop:!0,className:"highlight"})),w=s.p+"static/headshot-e210092f8ce7700472b483641fec1f10.jpg";var D=()=>n.createElement("div",{className:"about-background"},n.createElement("h2",{className:"header"},"About Me:"),n.createElement("div",{className:"about"},n.createElement("div",{className:"about-text"},n.createElement(L,null),n.createElement("p",null,"Hi again! My name is Dan and I'm a Computer Science student interested in all things software development. I’m currently working towards a BS in Computer Science at the University of New Hampshire and in my free time I like to work on different projects usually in Python or Javascript.")),n.createElement("div",{className:"about-image"},n.createElement("img",{src:w}))));var N=()=>n.createElement("div",{className:"contact-wrapper"},n.createElement("div",{className:"contact-header"},n.createElement("h2",null,"Get in Contact:")),n.createElement("div",{className:"contact-content"},n.createElement("div",{className:"form-container"},n.createElement("form",{action:"mailto:info@dmccarthy.org",method:"get",enctype:"text/plain",className:"main-form"},n.createElement("div",null,n.createElement("h3",null,"Subject:"),n.createElement("input",{type:"text",name:"subject",placeholder:"Message Subject"})),n.createElement("div",null,n.createElement("h3",null,"Email:"),n.createElement("input",{type:"email",name:"email",placeholder:"Your Email"})),n.createElement("div",null,n.createElement("h3",null,"Message:"),n.createElement("input",{name:"body",placeholder:"Your Message"})),n.createElement("button",{type:"submit",value:"Send",className:"submit-button"},n.createElement("h4",null,"Send")))),n.createElement("div",{className:"account-links"},n.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/dmccrthy",className:"link-tag"},n.createElement("img",{className:"link-icon",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkOyIgZD0iTTEyLDAuMjk2Yy02LjYyNywwLTEyLDUuMzcyLTEyLDEyYzAsNS4zMDIsMy40MzgsOS44LDguMjA2LDExLjM4NyAgIGMwLjYsMC4xMTEsMC44Mi0wLjI2LDAuODItMC41NzdjMC0wLjI4Ni0wLjAxMS0xLjIzMS0wLjAxNi0yLjIzNGMtMy4zMzgsMC43MjYtNC4wNDMtMS40MTYtNC4wNDMtMS40MTYgICBDNC40MjEsMTguMDY5LDMuNjM1LDE3LjcsMy42MzUsMTcuN2MtMS4wODktMC43NDUsMC4wODItMC43MjksMC4wODItMC43MjljMS4yMDUsMC4wODUsMS44MzksMS4yMzcsMS44MzksMS4yMzcgICBjMS4wNywxLjgzNCwyLjgwNywxLjMwNCwzLjQ5MiwwLjk5N0M5LjE1NiwxOC40MjksOS40NjcsMTcuOSw5LjgxLDE3LjZjLTIuNjY1LTAuMzAzLTUuNDY3LTEuMzMyLTUuNDY3LTUuOTMgICBjMC0xLjMxLDAuNDY5LTIuMzgxLDEuMjM3LTMuMjIxQzUuNDU1LDguMTQ2LDUuMDQ0LDYuOTI2LDUuNjk2LDUuMjczYzAsMCwxLjAwOC0wLjMyMiwzLjMwMSwxLjIzICAgQzkuOTU0LDYuMjM3LDEwLjk4LDYuMTA0LDEyLDYuMDk5YzEuMDIsMC4wMDUsMi4wNDcsMC4xMzgsMy4wMDYsMC40MDRjMi4yOS0xLjU1MywzLjI5Ny0xLjIzLDMuMjk3LTEuMjMgICBjMC42NTMsMS42NTMsMC4yNDIsMi44NzMsMC4xMTgsMy4xNzZjMC43NjksMC44NCwxLjIzNSwxLjkxMSwxLjIzNSwzLjIyMWMwLDQuNjA5LTIuODA3LDUuNjI0LTUuNDc5LDUuOTIxICAgYzAuNDMsMC4zNzIsMC44MTQsMS4xMDMsMC44MTQsMi4yMjJjMCwxLjYwNi0wLjAxNCwyLjg5OC0wLjAxNCwzLjI5M2MwLDAuMzE5LDAuMjE2LDAuNjk0LDAuODI0LDAuNTc2ICAgYzQuNzY2LTEuNTg5LDguMi02LjA4NSw4LjItMTEuMzg1QzI0LDUuNjY5LDE4LjYyNywwLjI5NiwxMiwwLjI5NnoiLz4KCTxwYXRoIGQ9Ik00LjU0NSwxNy41MjZjLTAuMDI2LDAuMDYtMC4xMiwwLjA3OC0wLjIwNiwwLjAzN2MtMC4wODctMC4wMzktMC4xMzYtMC4xMjEtMC4xMDgtMC4xOCAgIGMwLjAyNi0wLjA2MSwwLjEyLTAuMDc4LDAuMjA3LTAuMDM3QzQuNTI1LDE3LjM4NCw0LjU3NSwxNy40NjYsNC41NDUsMTcuNTI2TDQuNTQ1LDE3LjUyNnoiLz4KCTxwYXRoIGQ9Ik01LjAzMSwxOC4wNjhjLTAuMDU3LDAuMDUzLTAuMTY5LDAuMDI4LTAuMjQ1LTAuMDU1Yy0wLjA3OS0wLjA4NC0wLjA5My0wLjE5Ni0wLjAzNS0wLjI0OSAgIGMwLjA1OS0wLjA1MywwLjE2Ny0wLjAyOCwwLjI0NiwwLjA1NkM1LjA3NiwxNy45MDMsNS4wOTEsMTguMDE0LDUuMDMxLDE4LjA2OEw1LjAzMSwxOC4wNjh6Ii8+Cgk8cGF0aCBkPSJNNS41MDQsMTguNzU5Yy0wLjA3NCwwLjA1MS0wLjE5NCwwLjAwMy0wLjI2OC0wLjEwM2MtMC4wNzQtMC4xMDctMC4wNzQtMC4yMzUsMC4wMDItMC4yODYgICBjMC4wNzQtMC4wNTEsMC4xOTMtMC4wMDUsMC4yNjgsMC4xMDFDNS41NzksMTguNTc5LDUuNTc5LDE4LjcwNyw1LjUwNCwxOC43NTlMNS41MDQsMTguNzU5eiIvPgoJPHBhdGggZD0iTTYuMTUyLDE5LjQyN2MtMC4wNjYsMC4wNzMtMC4yMDYsMC4wNTMtMC4zMDgtMC4wNDZjLTAuMTA1LTAuMDk3LTAuMTM0LTAuMjM0LTAuMDY4LTAuMzA3ICAgYzAuMDY3LTAuMDczLDAuMjA4LTAuMDUyLDAuMzExLDAuMDQ2QzYuMTkxLDE5LjIxNyw2LjIyMiwxOS4zNTUsNi4xNTIsMTkuNDI3TDYuMTUyLDE5LjQyN3oiLz4KCTxwYXRoIGQ9Ik03LjA0NywxOS44MTRjLTAuMDI5LDAuMDk0LTAuMTY0LDAuMTM3LTAuMywwLjA5N0M2LjYxMSwxOS44Nyw2LjUyMiwxOS43Niw2LjU1LDE5LjY2NSAgIGMwLjAyOC0wLjA5NSwwLjE2NC0wLjEzOSwwLjMwMS0wLjA5NkM2Ljk4NiwxOS42MDksNy4wNzUsMTkuNzE5LDcuMDQ3LDE5LjgxNEw3LjA0NywxOS44MTR6Ii8+Cgk8cGF0aCBkPSJNOC4wMjksMTkuODg2YzAuMDAzLDAuMDk5LTAuMTEyLDAuMTgxLTAuMjU1LDAuMTgzYy0wLjE0MywwLjAwMy0wLjI2LTAuMDc3LTAuMjYxLTAuMTc0YzAtMC4xLDAuMTEzLTAuMTgxLDAuMjU2LTAuMTg0ICAgQzcuOTEyLDE5LjcwOCw4LjAyOSwxOS43ODgsOC4wMjksMTkuODg2TDguMDI5LDE5Ljg4NnoiLz4KCTxwYXRoIGQ9Ik04Ljk0MywxOS43MzFjMC4wMTcsMC4wOTYtMC4wODIsMC4xOTYtMC4yMjQsMC4yMjJjLTAuMTM5LDAuMDI2LTAuMjY4LTAuMDM0LTAuMjg2LTAuMTMgICBjLTAuMDE3LTAuMDk5LDAuMDg0LTAuMTk4LDAuMjIzLTAuMjI0QzguNzk3LDE5LjU3NCw4LjkyNSwxOS42MzIsOC45NDMsMTkuNzMxTDguOTQzLDE5LjczMXoiLz4KPC9nPgoKCgoKCgoKCgoKCgoKCgo8L3N2Zz4K"}),n.createElement("h1",null,"Github")),n.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/danmcc/",className:"link-tag"},n.createElement("img",{className:"link-icon",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+CjxnPgoJPHBhdGggaWQ9IlBhdGhfMjUyNSIgZD0iTTIzLjAwMiwyMS41ODRoMC4yMjdsLTAuNDM1LTAuNjU4bDAsMGMwLjI2NiwwLDAuNDA3LTAuMTY5LDAuNDA5LTAuMzc2YzAtMC4wMDgsMC0wLjAxNy0wLjAwMS0wLjAyNSAgIGMwLTAuMjgyLTAuMTctMC40MTctMC41MTktMC40MTdoLTAuNTY0djEuNDc2aDAuMjEydi0wLjY0M2gwLjI2MUwyMy4wMDIsMjEuNTg0eiBNMjIuNTc3LDIwLjc3NGgtMC4yNDZ2LTAuNDk5aDAuMzEyICAgYzAuMTYxLDAsMC4zNDUsMC4wMjYsMC4zNDUsMC4yMzdjMCwwLjI0Mi0wLjE4NiwwLjI2Mi0wLjQxMiwwLjI2MiIvPgoJPHBhdGggaWQ9IlBhdGhfMjUyMCIgZD0iTTE3LjI5MSwxOS4wNzNoLTMuMDA3di00LjcwOWMwLTEuMTIzLTAuMDItMi41NjgtMS41NjQtMi41NjhjLTEuNTY2LDAtMS44MDYsMS4yMjMtMS44MDYsMi40ODd2NC43OUg3LjkwOCAgIFY5LjM4OWgyLjg4N3YxLjMyM2gwLjA0YzAuNTg5LTEuMDA2LDEuNjgzLTEuNjA3LDIuODQ4LTEuNTY0YzMuMDQ4LDAsMy42MDksMi4wMDUsMy42MDksNC42MTJMMTcuMjkxLDE5LjA3M3ogTTQuNTE1LDguMDY1ICAgYy0wLjk2NCwwLTEuNzQ1LTAuNzgxLTEuNzQ1LTEuNzQ1YzAtMC45NjQsMC43ODEtMS43NDUsMS43NDUtMS43NDVjMC45NjQsMCwxLjc0NSwwLjc4MSwxLjc0NSwxLjc0NSAgIEM2LjI2LDcuMjg0LDUuNDc5LDguMDY1LDQuNTE1LDguMDY1TDQuNTE1LDguMDY1IE02LjAxOCwxOS4wNzNoLTMuMDFWOS4zODloMy4wMVYxOS4wNzN6IE0xOC43OSwxLjc4M0gxLjQ5NyAgIEMwLjY4LDEuNzc0LDAuMDEsMi40MjksMCwzLjI0NlYyMC42MWMwLjAxLDAuODE4LDAuNjgsMS40NzMsMS40OTcsMS40NjRIMTguNzljMC44MTksMC4wMSwxLjQ5Mi0wLjY0NSwxLjUwMy0xLjQ2NFYzLjI0NSAgIGMtMC4wMTItMC44MTktMC42ODUtMS40NzQtMS41MDMtMS40NjMiLz4KCTxwYXRoIGlkPSJQYXRoXzI1MjYiIGQ9Ik0yMi42MDMsMTkuNDUxYy0wLjc2NCwwLjAwNy0xLjM3OCwwLjYzMy0xLjM3LDEuMzk3YzAuMDA3LDAuNzY0LDAuNjMzLDEuMzc4LDEuMzk3LDEuMzcgICBjMC43NjQtMC4wMDcsMS4zNzgtMC42MzMsMS4zNy0xLjM5N2MtMC4wMDctMC43NTQtMC42MTctMS4zNjMtMS4zNy0xLjM3SDIyLjYwMyBNMjIuNjM1LDIyLjA1OSAgIGMtMC42NywwLjAxMS0xLjI1NC0wLjUyMi0xLjI2NS0xLjE5MmMtMC4wMTEtMC42NywwLjUyMy0xLjIyMiwxLjE5My0xLjIzM2MwLjY3LTAuMDExLDEuMjIyLDAuNTIzLDEuMjMzLDEuMTkzICAgYzAsMC4wMDcsMCwwLjAxMywwLDAuMDJDMjMuODEsMjEuNTAyLDIzLjI5LDIyLjA0NSwyMi42MzUsMjIuMDU5aC0wLjAzMSIvPgo8L2c+CgoKCgoKCgoKCgoKCgoKCjwvc3ZnPgo="}),n.createElement("h1",null,"LinkedIn")),n.createElement("a",{target:"_blank",rel:"noreferrer",href:"mailto:info@dmccarthy.org",className:"link-tag"},n.createElement("img",{className:"link-icon",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik0xMiwwQTEyLjAxMywxMi4wMTMsMCwwLDAsMCwxMmMtLjEyNiw5LjU3MywxMS4xNTksMTUuNDI5LDE4LjksOS44MTdhMSwxLDAsMSwwLTEuMTUyLTEuNjM0QzExLjMsMjQuODU2LDEuOSwxOS45NzgsMiwxMiwyLjU0OS0xLjI2NiwyMS40NTMtMS4yNjMsMjIsMTJ2MmEyLDIsMCwwLDEtNCwwVjEyQzE3Ljc0OCw0LjA3MSw2LjI1MSw0LjA3Miw2LDEyYTYuMDE3LDYuMDE3LDAsMCwwLDEwLjUyLDMuOTMzQTQsNCwwLDAsMCwyNCwxNFYxMkExMi4wMTMsMTIuMDEzLDAsMCwwLDEyLDBabTAsMTZhNCw0LDAsMCwxLDAtOEE0LDQsMCwwLDEsMTIsMTZaIi8+PC9zdmc+Cg=="}),n.createElement("h1",null,"info@dmccarthy.org"))))),g=s(4591);var j=()=>n.createElement(g.Z,{className:"fade-in-page"},n.createElement(i.Z,{title:"Dan McCarthy",slug:""}),n.createElement(l,null),n.createElement(D,null),n.createElement(N,null))}}]);
//# sourceMappingURL=component---src-pages-index-js-ba2b4c865cf7ee7d3841.js.map