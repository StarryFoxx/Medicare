(function(e){function t(t){for(var r,i,n=t[0],o=t[1],c=t[2],d=0,f=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(f.length)f.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],r=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(r=!1)}r&&(l.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},s={app:0},l=[];function i(e){return n.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ef0dcac3"}[e]+".js"}function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=s[e]=[t,r]}));t.push(a[2]=r);var l,o=document.createElement("script");o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.src=i(e);var c=new Error;l=function(t){o.onerror=o.onload=null,clearTimeout(d);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+l+")",c.name="ChunkLoadError",c.type=r,c.request=l,a[1](c)}s[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:o})}),12e4);o.onerror=o.onload=l,document.head.appendChild(o)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/Medicare/",n.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=c;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0f61":function(e,t,a){e.exports=a.p+"img/prescription.7e21a3da.png"},"1b26":function(e,t,a){e.exports=a.p+"img/nurse.029b2c80.png"},"1e37":function(e,t,a){e.exports=a.p+"img/phone.c114d294.png"},"1ef2":function(e,t,a){e.exports=a.p+"img/doctor.151c7d3b.png"},"21bb":function(e,t,a){"use strict";a("2dad")},"298b":function(e,t,a){e.exports=a.p+"img/smile.dac51eac.png"},"2dad":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],i=(a("5c0b"),a("2877")),n={},o=Object(i["a"])(n,s,l,!1,null,null,null),c=o.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",{},[e._m(0),r("section",{attrs:{id:"lead"}},[r("div",{staticClass:"flex flex-col md:flex-row relative"},[r("img",{staticClass:"hidden lg:block max-h-full",attrs:{src:a("298b"),alt:"smiling"}}),r("Lead",{staticClass:" h-full max-h-full w-full lg:flex lg:h-5/6 lg:w-5/12 lg:absolute lg:-bottom-32 lg:right-20"})],1)]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7)])])},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("div",{staticClass:"flex justify-between container mx-auto py-10"},[r("img",{staticClass:"w-64",attrs:{alt:"Vue logo",src:a("80c8")}}),r("img",{staticClass:"w-64",attrs:{alt:"Vue logo",src:a("1e37")}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"quote"}},[a("div",{staticClass:"text-left p-20"},[a("h2",{staticClass:"text-blue text-4xl font-bold mb-3"},[e._v("Find & Compare Your Local "),a("br"),e._v("Plans and Providers Fast")]),a("p",{staticClass:"leading-relaxed"},[e._v("Let us help you find the right Medicare Supplement Coverage plan for you. In less than "),a("br"),e._v("1 minute you could be saving your deductibles, co-pays and Medicare bills.")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"learn-more"}},[a("div",{staticClass:"text-center text-white flex flex-col md:flex-row bg-light-blue"},[a("div",{staticClass:"flex-1 p-10 learn-more-block mb-2 md:mb-0 md:mr-1"},[a("h4",{staticClass:"text-xl md:text-2xl font-bold"},[e._v("Medicare Part A")]),a("a",{staticClass:"underline hover:no-underline my-auto",attrs:{href:"#"}},[e._v("Learn More")])]),a("div",{staticClass:"flex-1 p-10 learn-more-block mb-2 md:mb-0 md:mr-1"},[a("h4",{staticClass:"text-xl md:text-2xl font-bold"},[e._v("Medicare Supplements")]),a("a",{staticClass:"underline hover:no-underline my-auto",attrs:{href:"#"}},[e._v("Learn More")])]),a("div",{staticClass:"flex-1 p-10 learn-more-block"},[a("h4",{staticClass:"text-xl md:text-2xl font-bold"},[e._v("Perscription Plans")]),a("a",{staticClass:"underline hover:no-underline my-auto",attrs:{href:"#"}},[e._v("Learn More")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("div",{staticClass:"flex flex-col lg:flex-row bg-light-blue"},[r("div",{staticClass:"image-side mb-3 border-b-2 border-white lg:border-b-0 lg:mb-0 "},[r("img",{staticClass:"w-full p-0 p-32 lg:h-full",attrs:{src:a("1ef2"),alt:"Doctor"}})]),r("div",{staticClass:"text-side "},[r("div",{staticClass:"max-w-md lg:max-w-full h-full m-auto flex flex-col justify-center lg:pr-60 py-20 items-start"},[r("h2",{staticClass:"text-blue text-4xl font-bold mb-3"},[e._v("Medicare Part A")]),r("p",{staticClass:"leading-relaxed mb-10"},[e._v("It is administered by the federal government. The plan has two parts: A and B. Part A is referred to as hospital insurance and covers care at hospitals (inpatient) and skilled nursing facilities as well as hospice care and some home health care. Part B is medical insurance and covers doctors’ services (at their offices and at hospitals), preventive care, and medical supplies.")]),r("a",{staticClass:"btn text-center text-white font-bold text-center text-xl rounded-md",attrs:{href:"#"}},[e._v("FIND PLANS")])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("div",{staticClass:"flex flex-col lg:flex-row bg-white-circles"},[r("div",{staticClass:"text-side mb-3 border-b-2 border-gray lg:border-b-0 lg:mb-0"},[r("div",{staticClass:"max-w-md lg:max-w-full h-full m-auto flex flex-col justify-center lg:pl-60 py-20 items-start"},[r("h2",{staticClass:"text-blue text-4xl font-bold mb-3"},[e._v("Medicare Supplements")]),r("p",{staticClass:"leading-relaxed mb-10"},[e._v("Recipients of Traditional Medicare can purchase Medicare supplements (also known as Medigap) from private companies. It is Used for health care costs not covered by Traditional Medicare (copayments, deductibles, etc.) Supplements correspond with different levels of coverage and work with with your original Part A and B benefits. You will pay an additional monthly premium for Medigap. (at their offices and at hospitals), preventive care, and medical supplies.")]),r("a",{staticClass:"btn text-center text-white font-bold text-center text-xl rounded-md",attrs:{href:"#"}},[e._v("FIND PLANS")])])]),r("div",{staticClass:"image-side"},[r("img",{staticClass:"w-full p-0 p-32 lg:h-full",attrs:{src:a("1b26"),alt:"Doctor"}})])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("div",{staticClass:"flex flex-col lg:flex-row bg-light-blue"},[r("div",{staticClass:"image-side mb-3 border-b-2 border-white lg:border-b-0 lg:mb-0"},[r("img",{staticClass:"w-full p-0 p-32 lg:h-full",attrs:{src:a("0f61"),alt:"Doctor"}})]),r("div",{staticClass:"text-side "},[r("div",{staticClass:"max-w-md lg:max-w-full h-full m-auto flex flex-col justify-center lg:pr-60 py-20 items-start"},[r("h2",{staticClass:"text-blue text-4xl font-bold mb-3"},[e._v("Prescription Plans")]),r("p",{staticClass:"leading-relaxed mb-10"},[e._v("It is administered by the federal government. The plan has two parts: A and B. Part A is referred to as hospital insurance and covers care at hospitals (inpatient) and skilled nursing facilities as well as hospice care and some home health care. Part B is medical insurance and covers doctors’ services (at their offices and at hospitals), preventive care, and medical supplies.")]),r("a",{staticClass:"btn text-center text-white font-bold text-center text-xl rounded-md",attrs:{href:"#"}},[e._v("FIND PLANS")])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("div",{staticClass:"flex flex-col lg:flex-row"},[r("div",{staticClass:"text-side-60 py-20 bg-blue flex flex-col justify-center items-center"},[r("div",{staticClass:"max-w-md text-white flex flex-col items-start"},[r("h2",{staticClass:"text-4xl font-bold mb-3"},[e._v("Talk directly with a licensed agent in your area!")]),r("p",{staticClass:" leading-relaxed mb-5"},[e._v("It is administered by the federal government. The plan has two parts: A and B. Part A is referred to as hospital insurance and covers care at hospitals (inpatient) and skilled nursing facilities as well as hospice care and some home health care. Part B is medical insurance and covers doctors’ services (at their offices and at hospitals), preventive care, and medical supplies.")])])]),r("div",{staticClass:"image-side-40"},[r("img",{staticClass:"w-full h-full",attrs:{src:a("7daf"),alt:"Doctor"}})])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",[a("div",{staticClass:"flex justify-around bg-dark-blue p-5 text-white"},[a("p",[e._v("Copyright © 2021 SimpleMedicareCoverage. All rights reserved")]),a("div",{staticClass:"footer-links"},[a("a",{attrs:{href:"#"}},[e._v("Disclaimer")]),a("a",{attrs:{href:"#"}},[e._v("Terms & Conditions")]),a("a",{attrs:{href:"#"}},[e._v("Contact Us")]),a("a",{attrs:{href:"#"}},[e._v("Privacy Policy")])])])])}],p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lead"},[a("div",{staticClass:"zipcode w-full flex flex-col items-center text-center lg:rounded-xl h-full"},[a("h3",{staticClass:" text-white font-extrabold text-3xl bg-light-blue-alt p-5 w-full lg:rounded-t-xl"},[e._v(" Find Medicare Coverage ")]),a("div",{staticClass:"flex flex-col w-full bg-dark-blue-alt py-10 lg:py-5 px-10 lg:rounded-b-xl flex-grow"},[a("p",{staticClass:"leading-relaxed mb-3 text-gray-50 font-medium text-2xl px-5"},[e._v(" Compare "),a("span",{staticClass:"text-gray-200 font-extrabold"},[e._v("Medicare Plans")]),a("br"),e._v("in one minute! ")]),a("div",{staticClass:"flex flex-col bg-white p-5 rounded-xl"},[a("h5",{staticClass:"text-blue font-bold text-lg"},[e._v("Enter Your Zip Code")]),a("input",{staticClass:"text-center w-5/6 py-4 border-black border-2 mt-2 mb-3 mx-auto rounded-md",attrs:{type:"text",placeholder:""}}),a("a",{staticClass:"btn w-2/3 mx-auto text-center text-white font-bold text-center text-center text-xl rounded-md",attrs:{href:"#"}},[e._v("GET STARTED")])])])])])}],x={name:"Lead"},b=x,h=Object(i["a"])(b,p,m,!1,null,"07b65201",null),v=h.exports,g={name:"Home",components:{Lead:v}},C=g,_=(a("21bb"),Object(i["a"])(C,u,f,!1,null,null,null)),w=_.exports;r["a"].use(d["a"]);var y=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],P=new d["a"]({mode:"history",base:"/Medicare/",routes:y}),M=P;a("ba8c");r["a"].config.productionTip=!1,new r["a"]({router:M,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"7daf":function(e,t,a){e.exports=a.p+"img/couple.2b1889dd.png"},"80c8":function(e,t,a){e.exports=a.p+"img/simple-medicare.5531a777.png"},"9c0c":function(e,t,a){},ba8c:function(e,t,a){}});
//# sourceMappingURL=app.422311a6.js.map