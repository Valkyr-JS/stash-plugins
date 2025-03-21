window.require=function(e){switch(e){case"@apollo/client":return window.PluginApi.libraries.Apollo;case"@fortawesome/free-regular-svg-icons":return window.PluginApi.libraries.FontAwesomeRegular;case"@fortawesome/free-solid-svg-icons":return window.PluginApi.libraries.FontAwesomeSolid;case"mousetrap":return window.PluginApi.libraries.Mousetrap;case"mousetrap-pause":return window.PluginApi.libraries.MousetrapPause;case"react":return window.PluginApi.React;case"react-bootstrap":return window.PluginApi.libraries.Bootstrap;case"react-dom":return window.PluginApi.ReactDOM;case"react-intl":return window.PluginApi.libraries.Intl;case"react-router-dom":return window.PluginApi.libraries.ReactRouterDOM;case"react-select":return window.PluginApi.libraries.ReactSelect}};var e=require("react");function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t,n={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var i,a=r((t||(t=1,i=n,function(){var e={}.hasOwnProperty;function r(){for(var e="",r=0;r<arguments.length;r++){var i=arguments[r];i&&(e=n(e,t(i)))}return e}function t(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return r.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var i="";for(var a in t)e.call(t,a)&&t[a]&&(i=n(i,a));return i}function n(e,r){return r?e?e+" "+r:e+r:e}i.exports?(r.default=r,i.exports=r):window.classNames=r}()),n.exports));function o(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}function l(e){const r="string"==typeof e?e.split(",").map((e=>isNaN(+e)?e:+e)):[e],t=r[Math.floor(Math.random()*r.length)];return"string"==typeof t?t.trim():t}"function"==typeof SuppressedError&&SuppressedError;const{GQL:s}=window.PluginApi,u=r=>{const t=r.preferOriginalImage?"/image":"/thumbnail",n=l(r.hovercard_gallery);if("string"==typeof n)return null;const i=s.useFindImagesQuery({variables:{filter:{per_page:1,sort:"random"},image_filter:{galleries:{value:[n.toString()],modifier:"INCLUDES"}}}});if(!i.data||0===i.data.findImages.images.length)return null;const a="/image/"+i.data.findImages.images[0].id+t;return e.createElement("img",{loading:"lazy",className:"performer-card-image hover-image",src:a})},c=r=>{const t=r.preferOriginalImage?"/image":"/thumbnail",n=l(r.hovercard_image),i="number"==typeof n?"/image/"+n+t:n;return e.createElement("img",{loading:"lazy",className:"performer-card-image hover-image",src:i})},d=r=>{var{soundActive:t}=r,n=o(r,["soundActive"]);const i=e.useRef(null);e.useEffect((()=>{var e;(null===(e=null==i?void 0:i.current)||void 0===e?void 0:e.volume)&&(i.current.volume=t?.05:0)}),[t]);const a=n.preferFullVideos?"/stream":"/preview",s=l(n.hovercard_video),u="number"==typeof s?"/scene/"+s+a:s;return e.createElement("video",{className:"performer-card-image hover-video",disableRemotePlayback:!0,playsInline:!0,muted:!t,loop:!0,preload:"none",onMouseOver:e=>e.target.play(),onMouseOut:e=>e.target.pause(),ref:i,src:u})},g=r=>{var t,n,i,a,l,s,g,m,p,f,v,w,{performer:y}=r,b=o(r,["performer"]);const{hovercard_gallery:h,hovercard_image:O,hovercard_video:P}=y.custom_fields,A=h?e.createElement(u,{hovercard_gallery:h,preferOriginalImage:null!==(n=null===(t=b.config)||void 0===t?void 0:t.preferOriginalImage)&&void 0!==n&&n}):null,E=O?e.createElement(c,{hovercard_image:O,preferOriginalImage:null!==(a=null===(i=b.config)||void 0===i?void 0:i.preferOriginalImage)&&void 0!==a&&a}):null,S=P?e.createElement(d,{hovercard_video:P,preferFullVideos:null!==(s=null===(l=b.config)||void 0===l?void 0:l.preferFullVideos)&&void 0!==s&&s,soundActive:null!==(p=null===(m=null===(g=b.stashSettings)||void 0===g?void 0:g.interface)||void 0===m?void 0:m.soundOnPreview)&&void 0!==p&&p}):null;return e.createElement("div",{className:"image-wrapper"},e.createElement("img",{loading:"lazy",className:"performer-card-image main-image",alt:null!==(f=y.name)&&void 0!==f?f:"",src:null!==(v=y.image_path)&&void 0!==v?v:""}),null!==(w=null!=S?S:A)&&void 0!==w?w:E)},{PluginApi:m}=window;m.patch.instead("PerformerCard",(function(r,t,n){const i=a("valkyr-hover-card");return[e.createElement("div",{className:i},e.createElement(n,Object.assign({},r)))]})),m.patch.instead("PerformerCard.Image",(function(r,t,n){const i=m.GQL.useConfigurationQuery();if(!i.loading){const t=Object.assign(Object.assign({},r),{config:i.data.configuration.plugins.hovercards,stashSettings:i.data.configuration});return[e.createElement(g,Object.assign({},t))]}return[e.createElement(n,Object.assign({},r))]}));
