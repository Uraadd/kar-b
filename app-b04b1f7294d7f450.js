(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(13729)}])},13729:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(85893);n(19311);var a=n(1571);function s(e){let{children:t,...n}=e;return(0,r.jsx)(a.f,{...n,children:t})}function l(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(s,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:(0,r.jsx)(t,{...n})})}},19311:function(){},1571:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return u}});var r=n(67294),a=["light","dark"],s="(prefers-color-scheme: dark)",l="undefined"==typeof window,o=r.createContext(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=r.useContext(o))?e:i},u=e=>r.useContext(o)?e.children:r.createElement(d,{...e}),m=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:i="theme",themes:c=m,defaultTheme:u=n?"system":"light",attribute:d="data-theme",value:$,children:g,nonce:b})=>{let[w,p]=r.useState(()=>f(i,u)),[S,T]=r.useState(()=>f(i)),C=$?Object.values($):c,E=r.useCallback(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=v());let s=$?$[r]:r,o=t?y():null,i=document.documentElement;if("class"===d?(i.classList.remove(...C),s&&i.classList.add(s)):s?i.setAttribute(d,s):i.removeAttribute(d),l){let e=a.includes(u)?u:null,t=a.includes(r)?r:e;i.style.colorScheme=t}null==o||o()},[]),k=r.useCallback(e=>{let t="function"==typeof e?e(e):e;p(t);try{localStorage.setItem(i,t)}catch(e){}},[e]),_=r.useCallback(t=>{T(v(t)),"system"===w&&n&&!e&&E("system")},[w,e]);r.useEffect(()=>{let e=window.matchMedia(s);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),r.useEffect(()=>{let e=e=>{e.key===i&&k(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[k]),r.useEffect(()=>{E(null!=e?e:w)},[e,w]);let x=r.useMemo(()=>({theme:w,setTheme:k,forcedTheme:e,resolvedTheme:"system"===w?S:w,themes:n?[...c,"system"]:c,systemTheme:n?S:void 0}),[w,k,e,S,n,c]);return r.createElement(o.Provider,{value:x},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:l,storageKey:i,themes:c,defaultTheme:u,attribute:d,value:$,children:g,attrs:C,nonce:b}),g)},h=r.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:l,enableColorScheme:o,defaultTheme:i,value:c,attrs:u,nonce:m})=>{let d="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=o?(a.includes(i)?i:null)?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,r=!0)=>{let s=c?c[e]:e,l=t?e+"|| ''":`'${s}'`,i="";return o&&r&&!t&&a.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?t||s?i+=`c.add(${l})`:i+="null":s&&(i+=`d[s](n,${l})`),i},v=e?`!function(){${h}${y(e)}}()`:l?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}${d?"":"else{"+y(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}else{${y(i,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:v}})}),f=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(9090)}),_N_E=e.O()}]);