"use strict";(self["webpackChunkplayexp"]=self["webpackChunkplayexp"]||[]).push([[772],{1774:function(t,a,s){s.r(a),s.d(a,{default:function(){return h}});var o=function(){var t=this,a=t._self._c;return a("div",{staticClass:"colorText"},[a("div",[a("div",{attrs:{id:"noticias"}},[a("div",{staticClass:"colorblau"},[a("h1",{staticClass:"pb-2"},[a("icons",{attrs:{icon:["fas","award"]}}),t._v(" NOTICIAS "),a("icons",{attrs:{icon:["fas","award"]}})],1)]),t._m(0)]),a("div",{staticClass:"container-md"},[a("b-card-group",{attrs:{columns:""}},t._l(t.proyectos,(function(t){return a("div",{key:t.id,staticClass:"colorText2",attrs:{columns:""}},[a("Card2",{attrs:{autor:t.autor,srcimg:t.srcimg,alt:t.alt,titulo:t.titulo,texto:t.texto,url:t.url}})],1)})),0)],1)])])},r=[function(){var t=this,a=t._self._c;return a("p",[t._v(" En este lugar puedes encontrar todas las noticias sobre "),a("strong",[t._v("VIDEOJUEGOS")]),t._v(". ¡Desde actualizaciones a nuevos lanzamientos! ")])}],e=function(){var t=this,a=t._self._c;return a("div",[a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"40rem"},attrs:{title:t.titulo,"img-src":t.srcimg,"img-alt":t.alt,"img-top":"",footer:t.autor,tag:"proyecto"}},[a("b-card-text",[t._v(" "+t._s(t.texto)+" ")]),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Haz click para saber más",variant:"info",href:t.url}},[t._v("Más información")])],1)],1)},i=[],c={props:["id","autor","titulo","srcimg","alt","texto","url"]},n=c,l=s(1001),u=(0,l.Z)(n,e,i,!1,null,"1c3aef46",null),p=u.exports;const d="https://raw.githubusercontent.com/noemifarre/playexp/main/proyectosWD2021.json";var m={props:{name:{type:String,default:"Noticias"}},components:{Card2:p},data(){return{proyectos:[],githubPage:1,page:1,loading:!1,perPage:5}},mounted(){this.fetchData()},methods:{async fetchData(){const t=await fetch(d),a=await t.json();this.proyectos=a,console.log(a)}}},f=m,v=(0,l.Z)(f,o,r,!1,null,"0c151639",null),h=v.exports}}]);
//# sourceMappingURL=Programacion.7b626bce.js.map