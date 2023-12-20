"use strict";(self["webpackChunkplayexp"]=self["webpackChunkplayexp"]||[]).push([[443],{8902:function(t,r,n){n.r(r),n.d(r,{default:function(){return s}});var e=function(){var t=this,r=t._self._c;return r("div",{staticClass:"container"},[r("div",{staticClass:"colorText"},[r("h1",{staticClass:"pb-2"},[r("div",{staticClass:"colorblau"},[r("icons",{attrs:{icon:["fas","star"]}}),t._v(" FORO ")],1),r("icons",{attrs:{icon:["fas","star"]}}),t._m(0)],1),r("p",[t._v(" Rellena con tu información y verás un listado de los usuarios registrados ")]),r("section",{staticClass:"form"},[r("form",{staticClass:"text-center",attrs:{action:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.nombre,expression:"nombre"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nombre de usuario"},domProps:{value:t.nombre},on:{keyup:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.crearPersona.apply(null,arguments)},input:function(r){r.target.composing||(t.nombre=r.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.edad,expression:"edad"}],staticClass:"form-control",attrs:{type:"number",name:"edad",placeholder:"Edad"},domProps:{value:t.edad},on:{keyup:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.crearPersona.apply(null,arguments)},input:function(r){r.target.composing||(t.edad=r.target.value)}}}),r("br"),r("input",{staticClass:"btn botoblau",attrs:{type:"button",value:"Añadir"},on:{click:t.crearPersona}})])]),r("section",{staticClass:"data"},[t._m(1),r("div",{staticClass:"colorText"},[r("table",{staticClass:"table"},[t._m(2),r("tbody",t._l(t.personas,(function(n,e){return r("tr",{key:n.id,staticClass:"colorText"},[r("td",[t._v(t._s(n.id))]),r("td",[t.formActualizar&&t.idActualizar==e?r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.nombreActualizar,expression:"nombreActualizar"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.nombreActualizar},on:{input:function(r){r.target.composing||(t.nombreActualizar=r.target.value)}}})]):r("span",[t._v(" "+t._s(n.nombre)+" ")])]),r("td",[t.formActualizar&&t.idActualizar==e?r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.edadActualizar,expression:"edadActualizar"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.edadActualizar},on:{input:function(r){r.target.composing||(t.edadActualizar=r.target.value)}}})]):r("span",[t._v(" "+t._s(n.edad)+" ")])]),r("td",[t.formActualizar&&t.idActualizar==e?r("span",[r("button",{staticClass:"btn btn-success",on:{click:function(r){return t.guardarActualizacion(e)}}},[t._v("Guardar")])]):r("span",[r("button",{staticClass:"btn btn-warning",on:{click:function(r){return t.verFormActualizar(e)}}},[t._v("Actualizar")]),r("button",{staticClass:"btn btn-danger",on:{click:function(r){return t.borrarPersona(e)}}},[t._v("Borrar")])])])])})),0)])])])])])},o=[function(){var t=this,r=t._self._c;return r("h3",[r("p",[t._v("Regístrate para entrar ")])])},function(){var t=this,r=t._self._c;return r("caption",[r("div",{staticClass:"colorblau"},[r("h5",[t._v("Usuarios")])])])},function(){var t=this,r=t._self._c;return r("thead",[r("tr",[r("th",{staticClass:"colorText",attrs:{scope:"col"}},[t._v("id")]),r("th",{staticClass:"colorText",attrs:{scope:"col"}},[t._v("Nombre de Usuario")]),r("th",{staticClass:"colorText",attrs:{scope:"col"}},[t._v("Edad")]),r("th")])])}],i=(n(560),{data(){return{nombre:"",edad:"",formActualizar:!1,idActualizar:-1,nombreActualizar:"",edadActualizar:"",personas:[]}},methods:{crearPersona:function(){this.personas.push({id:+new Date,nombre:this.nombre,edad:this.edad}),this.nombre="",this.edad=""},verFormActualizar:function(t){this.idActualizar=t,this.nombreActualizar=this.personas[t].nombre,this.edadActualizar=this.personas[t].edad,this.formActualizar=!0},borrarPersona:function(t){this.personas.splice(t,1)},guardarActualizacion:function(t){this.formActualizar=!1,this.personas[t].nombre=this.nombreActualizar,this.personas[t].edad=this.edadActualizar}}}),a=i,u=n(1001),c=(0,u.Z)(a,e,o,!1,null,null,null),s=c.exports},7341:function(t,r,n){n.r(r);var e,o,i=n(1001),a={},u=(0,i.Z)(a,e,o,!1,null,null,null);r["default"]=u.exports},509:function(t,r,n){var e=n(9985),o=n(3691),i=TypeError;t.exports=function(t){if(e(t))return t;throw new i(o(t)+" is not a function")}},5027:function(t,r,n){var e=n(8999),o=String,i=TypeError;t.exports=function(t){if(e(t))return t;throw new i(o(t)+" is not an object")}},4328:function(t,r,n){var e=n(5290),o=n(7578),i=n(6310),a=function(t){return function(r,n,a){var u,c=e(r),s=i(c),f=o(a,s);if(t&&n!==n){while(s>f)if(u=c[f++],u!==u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},5649:function(t,r,n){var e=n(7697),o=n(2297),i=TypeError,a=Object.getOwnPropertyDescriptor,u=e&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=u?function(t,r){if(o(t)&&!a(t,"length").writable)throw new i("Cannot set read only .length");return t.length=r}:function(t,r){return t.length=r}},6648:function(t,r,n){var e=n(8844),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},8758:function(t,r,n){var e=n(6812),o=n(9152),i=n(2474),a=n(2560);t.exports=function(t,r,n){for(var u=o(r),c=a.f,s=i.f,f=0;f<u.length;f++){var l=u[f];e(t,l)||n&&e(n,l)||c(t,l,s(r,l))}}},5773:function(t,r,n){var e=n(7697),o=n(2560),i=n(5684);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},5684:function(t){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},1880:function(t,r,n){var e=n(9985),o=n(2560),i=n(8702),a=n(5014);t.exports=function(t,r,n,u){u||(u={});var c=u.enumerable,s=void 0!==u.name?u.name:r;if(e(n)&&i(n,s,u),u.global)c?t[r]=n:a(r,n);else{try{u.unsafe?t[r]&&(c=!0):delete t[r]}catch(f){}c?t[r]=n:o.f(t,r,{value:n,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},5014:function(t,r,n){var e=n(9037),o=Object.defineProperty;t.exports=function(t,r){try{o(e,t,{value:r,configurable:!0,writable:!0})}catch(n){e[t]=r}return r}},7697:function(t,r,n){var e=n(3689);t.exports=!e((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2659:function(t){var r="object"==typeof document&&document.all,n="undefined"==typeof r&&void 0!==r;t.exports={all:r,IS_HTMLDDA:n}},6420:function(t,r,n){var e=n(9037),o=n(8999),i=e.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},5565:function(t){var r=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw r("Maximum allowed index exceeded");return t}},71:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(t,r,n){var e,o,i=n(9037),a=n(71),u=i.process,c=i.Deno,s=u&&u.versions||c&&c.version,f=s&&s.v8;f&&(e=f.split("."),o=e[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&a&&(e=a.match(/Edge\/(\d+)/),(!e||e[1]>=74)&&(e=a.match(/Chrome\/(\d+)/),e&&(o=+e[1]))),t.exports=o},2739:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9989:function(t,r,n){var e=n(9037),o=n(2474).f,i=n(5773),a=n(1880),u=n(5014),c=n(8758),s=n(5266);t.exports=function(t,r){var n,f,l,p,v,d,b=t.target,y=t.global,m=t.stat;if(f=y?e:m?e[b]||u(b,{}):(e[b]||{}).prototype,f)for(l in r){if(v=r[l],t.dontCallGetSet?(d=o(f,l),p=d&&d.value):p=f[l],n=s(y?l:b+(m?".":"#")+l,t.forced),!n&&void 0!==p){if(typeof v==typeof p)continue;c(v,p)}(t.sham||p&&p.sham)&&i(v,"sham",!0),a(f,l,v,t)}}},3689:function(t){t.exports=function(t){try{return!!t()}catch(r){return!0}}},7215:function(t,r,n){var e=n(3689);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},2615:function(t,r,n){var e=n(7215),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},1236:function(t,r,n){var e=n(7697),o=n(6812),i=Function.prototype,a=e&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,s=u&&(!e||e&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},8844:function(t,r,n){var e=n(7215),o=Function.prototype,i=o.call,a=e&&o.bind.bind(i,i);t.exports=e?a:function(t){return function(){return i.apply(t,arguments)}}},6058:function(t,r,n){var e=n(9037),o=n(9985),i=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?i(e[t]):e[t]&&e[t][r]}},5858:function(t,r,n){var e=n(509),o=n(981);t.exports=function(t,r){var n=t[r];return o(n)?void 0:e(n)}},9037:function(t,r,n){var e=function(t){return t&&t.Math===Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n.g&&n.g)||e("object"==typeof this&&this)||function(){return this}()||Function("return this")()},6812:function(t,r,n){var e=n(8844),o=n(690),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},7248:function(t){t.exports={}},8506:function(t,r,n){var e=n(7697),o=n(3689),i=n(6420);t.exports=!e&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},4413:function(t,r,n){var e=n(8844),o=n(3689),i=n(6648),a=Object,u=e("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?u(t,""):a(t)}:a},6738:function(t,r,n){var e=n(8844),o=n(9985),i=n(4091),a=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},618:function(t,r,n){var e,o,i,a=n(9834),u=n(9037),c=n(8999),s=n(5773),f=n(6812),l=n(4091),p=n(2713),v=n(7248),d="Object already initialized",b=u.TypeError,y=u.WeakMap,m=function(t){return i(t)?o(t):e(t,{})},h=function(t){return function(r){var n;if(!c(r)||(n=o(r)).type!==t)throw new b("Incompatible receiver, "+t+" required");return n}};if(a||l.state){var g=l.state||(l.state=new y);g.get=g.get,g.has=g.has,g.set=g.set,e=function(t,r){if(g.has(t))throw new b(d);return r.facade=t,g.set(t,r),r},o=function(t){return g.get(t)||{}},i=function(t){return g.has(t)}}else{var x=p("state");v[x]=!0,e=function(t,r){if(f(t,x))throw new b(d);return r.facade=t,s(t,x,r),r},o=function(t){return f(t,x)?t[x]:{}},i=function(t){return f(t,x)}}t.exports={set:e,get:o,has:i,enforce:m,getterFor:h}},2297:function(t,r,n){var e=n(6648);t.exports=Array.isArray||function(t){return"Array"===e(t)}},9985:function(t,r,n){var e=n(2659),o=e.all;t.exports=e.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},5266:function(t,r,n){var e=n(3689),o=n(9985),i=/#|\.prototype\./,a=function(t,r){var n=c[u(t)];return n===f||n!==s&&(o(r)?e(r):!!r)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},981:function(t){t.exports=function(t){return null===t||void 0===t}},8999:function(t,r,n){var e=n(9985),o=n(2659),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:e(t)||t===i}:function(t){return"object"==typeof t?null!==t:e(t)}},3931:function(t){t.exports=!1},734:function(t,r,n){var e=n(6058),o=n(9985),i=n(3622),a=n(9525),u=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var r=e("Symbol");return o(r)&&i(r.prototype,u(t))}},6310:function(t,r,n){var e=n(3126);t.exports=function(t){return e(t.length)}},8702:function(t,r,n){var e=n(8844),o=n(3689),i=n(9985),a=n(6812),u=n(7697),c=n(1236).CONFIGURABLE,s=n(6738),f=n(618),l=f.enforce,p=f.get,v=String,d=Object.defineProperty,b=e("".slice),y=e("".replace),m=e([].join),h=u&&!o((function(){return 8!==d((function(){}),"length",{value:8}).length})),g=String(String).split("String"),x=t.exports=function(t,r,n){"Symbol("===b(v(r),0,7)&&(r="["+y(v(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(r="get "+r),n&&n.setter&&(r="set "+r),(!a(t,"name")||c&&t.name!==r)&&(u?d(t,"name",{value:r,configurable:!0}):t.name=r),h&&n&&a(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?u&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var e=l(t);return a(e,"source")||(e.source=m(g,"string"==typeof r?r:"")),t};Function.prototype.toString=x((function(){return i(this)&&p(this).source||s(this)}),"toString")},8828:function(t){var r=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?n:r)(e)}},2560:function(t,r,n){var e=n(7697),o=n(8506),i=n(5648),a=n(5027),u=n(8360),c=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";r.f=e?i?function(t,r,n){if(a(t),r=u(r),a(n),"function"===typeof t&&"prototype"===r&&"value"in n&&v in n&&!n[v]){var e=f(t,r);e&&e[v]&&(t[r]=n.value,n={configurable:p in n?n[p]:e[p],enumerable:l in n?n[l]:e[l],writable:!1})}return s(t,r,n)}:s:function(t,r,n){if(a(t),r=u(r),a(n),o)try{return s(t,r,n)}catch(e){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},2474:function(t,r,n){var e=n(7697),o=n(2615),i=n(9556),a=n(5684),u=n(5290),c=n(8360),s=n(6812),f=n(8506),l=Object.getOwnPropertyDescriptor;r.f=e?l:function(t,r){if(t=u(t),r=c(r),f)try{return l(t,r)}catch(n){}if(s(t,r))return a(!o(i.f,t,r),t[r])}},2741:function(t,r,n){var e=n(4948),o=n(2739),i=o.concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},7518:function(t,r){r.f=Object.getOwnPropertySymbols},3622:function(t,r,n){var e=n(8844);t.exports=e({}.isPrototypeOf)},4948:function(t,r,n){var e=n(8844),o=n(6812),i=n(5290),a=n(4328).indexOf,u=n(7248),c=e([].push);t.exports=function(t,r){var n,e=i(t),s=0,f=[];for(n in e)!o(u,n)&&o(e,n)&&c(f,n);while(r.length>s)o(e,n=r[s++])&&(~a(f,n)||c(f,n));return f}},9556:function(t,r){var n={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!n.call({1:2},1);r.f=o?function(t){var r=e(this,t);return!!r&&r.enumerable}:n},5899:function(t,r,n){var e=n(2615),o=n(9985),i=n(8999),a=TypeError;t.exports=function(t,r){var n,u;if("string"===r&&o(n=t.toString)&&!i(u=e(n,t)))return u;if(o(n=t.valueOf)&&!i(u=e(n,t)))return u;if("string"!==r&&o(n=t.toString)&&!i(u=e(n,t)))return u;throw new a("Can't convert object to primitive value")}},9152:function(t,r,n){var e=n(6058),o=n(8844),i=n(2741),a=n(7518),u=n(5027),c=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var r=i.f(u(t)),n=a.f;return n?c(r,n(t)):r}},4684:function(t,r,n){var e=n(981),o=TypeError;t.exports=function(t){if(e(t))throw new o("Can't call method on "+t);return t}},2713:function(t,r,n){var e=n(3430),o=n(4630),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},4091:function(t,r,n){var e=n(9037),o=n(5014),i="__core-js_shared__",a=e[i]||o(i,{});t.exports=a},3430:function(t,r,n){var e=n(3931),o=n(4091);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.34.0",mode:e?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",source:"https://github.com/zloirock/core-js"})},146:function(t,r,n){var e=n(3615),o=n(3689),i=n(9037),a=i.String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!a(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},7578:function(t,r,n){var e=n(8700),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},5290:function(t,r,n){var e=n(4413),o=n(4684);t.exports=function(t){return e(o(t))}},8700:function(t,r,n){var e=n(8828);t.exports=function(t){var r=+t;return r!==r||0===r?0:e(r)}},3126:function(t,r,n){var e=n(8700),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},690:function(t,r,n){var e=n(4684),o=Object;t.exports=function(t){return o(e(t))}},8732:function(t,r,n){var e=n(2615),o=n(8999),i=n(734),a=n(5858),u=n(5899),c=n(4201),s=TypeError,f=c("toPrimitive");t.exports=function(t,r){if(!o(t)||i(t))return t;var n,c=a(t,f);if(c){if(void 0===r&&(r="default"),n=e(c,t,r),!o(n)||i(n))return n;throw new s("Can't convert object to primitive value")}return void 0===r&&(r="number"),u(t,r)}},8360:function(t,r,n){var e=n(8732),o=n(734);t.exports=function(t){var r=e(t,"string");return o(r)?r:r+""}},3691:function(t){var r=String;t.exports=function(t){try{return r(t)}catch(n){return"Object"}}},4630:function(t,r,n){var e=n(8844),o=0,i=Math.random(),a=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},9525:function(t,r,n){var e=n(146);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(t,r,n){var e=n(7697),o=n(3689);t.exports=e&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},9834:function(t,r,n){var e=n(9037),o=n(9985),i=e.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},4201:function(t,r,n){var e=n(9037),o=n(3430),i=n(6812),a=n(4630),u=n(146),c=n(9525),s=e.Symbol,f=o("wks"),l=c?s["for"]||s:s&&s.withoutSetter||a;t.exports=function(t){return i(f,t)||(f[t]=u&&i(s,t)?s[t]:l("Symbol."+t)),f[t]}},560:function(t,r,n){var e=n(9989),o=n(690),i=n(6310),a=n(5649),u=n(5565),c=n(3689),s=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),f=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},l=s||!f();e({target:"Array",proto:!0,arity:1,forced:l},{push:function(t){var r=o(this),n=i(r),e=arguments.length;u(n+e);for(var c=0;c<e;c++)r[n]=arguments[c],n++;return a(r,n),n}})}}]);
//# sourceMappingURL=about.dcf1d3d8.js.map