(this["webpackJsonpmedia-ponderada"]=this["webpackJsonpmedia-ponderada"]||[]).push([[0],{31:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),i=a.n(l),o=a(62),c=a(63),u=a(64),s=a(65),d=a(61),m=a(43),p=a(59),g=Object(p.a)((function(e){return{appBarSpace:e.mixins.toolbar,container:{marginTop:e.spacing(3),marginBottom:e.spacing(3)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeightPaper:{height:"85vh",marginLeft:e.spacing(2),marginRight:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingTop:e.spacing(2)},timePaper:{height:"15vh",marginLeft:e.spacing(2),marginRight:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingTop:e.spacing(2)},formPaper:{height:"85vh",marginLeft:e.spacing(2),marginRight:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingTop:e.spacing(2)},tempo:{paddingTop:e.spacing(3),marginBottom:e.spacing(5)},addButton:{marginTop:e.spacing(3),marginLeft:e.spacing(3),marginRight:e.spacing(3),borderRadius:"50%",borderColor:"#2287C9",background:"#2287C9",fontWeight:"bold",color:"white",width:"50px",height:"50px"},cancelButton:{marginTop:e.spacing(3),marginLeft:e.spacing(3),marginRight:e.spacing(3),borderRadius:"50%",borderColor:"#777",background:"#777",fontWeight:"bold",color:"white",width:"50px",height:"50px"},textFields:{marginBottom:e.spacing(2)},header:{background:"linear-gradient(to bottom, #6377e8 0%, #3f51b5 66%, #182c9c 100%)",color:"whitesmoke"},toolbar:{display:"flex",justifyContent:"space-between"},exportButton:{},importButton:{}}})),f=a(6),E="SET_MEDIAS",v="ADD_MEDIA",b="EDIT_MEDIA",h="DELETE_MEDIA",y="SET_MEDIA",j="SET_EDIT_INDEX",O="SET_FORMULAS",M="SET_OBJETIVO",x="SAVE",I="READ";function T(e){return{type:E,payload:e}}function C(e){return{type:b,payload:e}}function k(e){return{type:y,payload:e}}function A(e){return{type:j,payload:e}}function D(e){return{type:O,payload:e}}function N(e){return{type:M,payload:e}}function w(e){return{type:x,payload:e}}var S=Object(f.b)((function(e){return{colunas:e.colunas,linhas:e.linhas,objetivo:e.objetivo}}),(function(e){return{deleteMedia:function(t){return e({type:h,payload:t})},editMedia:function(t,a){return e(C({id:t,media:a}))},setMedia:function(t){return e(k(t))},setMediaIndex:function(t){return e(A(t))},save:function(){return e(w())}}}))((function(e){var t=g(),a=e.colunas,n=e.linhas,l=e.objetivo,i=function(t){e.setMedia({id:"",valores:a.map((function(){return 0}))}),e.setMediaIndex(null),e.deleteMedia(t),e.save()},o=function(e){return e.reduce((function(e,t,n){return a[n]?e+t*a[n].peso:e}),0).toFixed(2)},c=function(e,t,a){return Math.abs((l-(e-t*a))/a)},u=function(e,t){return e.map((function(e,a){return"".concat(e.peso," . ").concat(t[a]," ")})).join("+ ").concat(" = ".concat(o(t)))};return r.a.createElement(d.a,{item:!0},r.a.createElement(m.a,{className:t.paper},r.a.createElement("table",{className:"mediaTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),a.map((function(e,t){return r.a.createElement("th",{key:t,title:"Peso: ".concat(e.peso)},e.tag)})),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"Editar"),r.a.createElement("th",null,"Deletar"))),r.a.createElement("tbody",null,n.map((function(t,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.id),t.valores.map((function(e,n){return a[n]?r.a.createElement("td",{key:n,title:"".concat(a[n].tag," para objetivo -> ").concat(c(o(t.valores),e,a[n].peso))},e):null})),r.a.createElement("td",{title:"".concat(u(a,t.valores)),style:{color:o(t.valores)>=l?"green":"red"}},o(t.valores)),r.a.createElement("td",null,r.a.createElement("button",{style:{width:"100%"},onClick:function(){return function(t,a){e.setMediaIndex(t),e.setMedia(a)}(n,t)}},"E")),r.a.createElement("td",null,r.a.createElement("button",{style:{width:"100%"},onClick:function(){return i(n)}},"R")))}))))))})),R=a(11),B=a(66),F=Object(f.b)((function(e){return{colunas:e.colunas,media:e.media,mediaIndex:e.mediaIndex}}),(function(e){return{addMedia:function(t){return e({type:v,payload:t})},editMedia:function(t,a){return e(C({id:t,media:a}))},setMedia:function(t){return e(k(t))},setMediaIndex:function(t){return e(A(t))},save:function(){return e(w())}}}))((function(e){var t=g(),a=e.media,l=e.colunas,i=function(){var e=Object.assign({},a);return l.length>e.valores.length&&(e.valores=l.map((function(t,a){return e.valores[a]?e.valores[a]:0}))),e};Object(n.useEffect)((function(){e.setMedia(i())}),[]);return r.a.createElement(d.a,{item:!0},r.a.createElement(m.a,{className:t.paper},r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=i();Number.isInteger(e.mediaIndex)?e.editMedia(e.mediaIndex,a):e.addMedia(a),e.setMedia({id:"",valores:l.map((function(){return 0}))}),e.setMediaIndex(null),e.save()}},r.a.createElement("table",{className:"formTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"M\xe9dia"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Descri\xe7\xe3o"),r.a.createElement("td",null,r.a.createElement(B.a,{value:e.media.id,onChange:function(t){return e.setMedia({id:t.target.value,valores:a.valores})}}))),l.map((function(t,n){return r.a.createElement("tr",{key:n,title:"Peso: ".concat(t.peso)},r.a.createElement("td",null,t.tag),r.a.createElement("td",null,r.a.createElement(B.a,{value:e.media.valores[n],type:"number",onChange:function(t){return function(t,n){var r=Object(R.a)(a.valores);r[n]=+t.target.value,e.setMedia({id:a.id,valores:r})}(t,n)}})))})),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("button",null,null!==e.mediaIndex?"Editar M\xe9dia":"Adicionar M\xe9dia"))))))))})),L=Object(f.b)((function(e){return{colunas:e.colunas,medias:e.linhas,objetivo:e.objetivo}}),(function(e){return{setFormulas:function(t){return e(D(t))},setMedias:function(t){return e(T(t))},setObjetivo:function(t){return e(N(t))},save:function(){return e(w())}}}))((function(e){var t=g(),a=e.colunas,n=e.medias,l=function(t,n,r){var l=Object(R.a)(a);l[n][r]="peso"===r?+t.target.value:t.target.value,e.setFormulas(l),e.save()},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=a.length,l=Object.assign([],n);null!==t?l.forEach((function(e){return e.valores.splice(t,1)})):l.forEach((function(e){return e.valores.splice(r,0,0)})),e.setMedias(l)};return r.a.createElement(d.a,{item:!0},r.a.createElement(m.a,{className:t.paper},r.a.createElement("table",{className:"formTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"F\xf3rmula"),r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",null))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Objetivo"),r.a.createElement("td",null,r.a.createElement(B.a,{value:e.objetivo,onChange:function(t){return e.setObjetivo(+t.target.value)}}))),a.map((function(t,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,"Tag"),r.a.createElement("td",null,r.a.createElement(B.a,{value:t.tag,onChange:function(e){return l(e,n,"tag")}})),r.a.createElement("td",null,"Peso"),r.a.createElement("td",null,r.a.createElement(B.a,{type:"number",value:t.peso,onChange:function(e){return l(e,n,"peso")}})),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return function(t){i(t);var n=Object(R.a)(a);n.splice(t,1),e.setFormulas(n),e.save()}(n)}},"X")))})),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){var t=Object(R.a)(a);e.setFormulas(t.concat({tag:"TAG",peso:0})),i(),e.save()}},"Adicionar campo")))))))})),_=Object(f.b)(null,(function(e){return{read:function(){return e({type:I,payload:t});var t}}}))((function(e){return Object(n.useEffect)((function(){e.read()}),[]),r.a.createElement(d.a,{container:!0,direction:"row",spacing:4},r.a.createElement(d.a,{item:!0},r.a.createElement(S,null)),r.a.createElement(d.a,{item:!0},r.a.createElement(F,null)),r.a.createElement(d.a,{item:!0},r.a.createElement(L,null)))})),J=Object(f.b)((function(e){return{colunas:e.colunas,linhas:e.linhas,objetivo:e.objetivo}}))((function(e){var t=g(),a=e.colunas,n=e.linhas,l=e.objetivo;return r.a.createElement("button",{className:t.exportButton,onClick:function(e){e.preventDefault();var t={colunas:a,linhas:n,objetivo:l},r="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t)),i=document.createElement("a");i.setAttribute("href",r),i.setAttribute("download","data_media.json"),document.body.appendChild(i),i.click(),i.remove()}},"Exportar")})),P=Object(f.b)(null,(function(e){return{setMedias:function(t){return e(T(t))},setFormulas:function(t){return e(D(t))},setObjetivo:function(t){return e(N(t))}}}))((function(e){var t=g();return r.a.createElement("button",{className:t.importButton,onClick:function(t){function a(t){var a=JSON.parse(t.target.result);e.setMedias(a.linhas),e.setFormulas(a.colunas),e.setObjetivo(a.objetivo),n.remove()}t.preventDefault();var n=document.createElement("input");n.setAttribute("type","file"),n.addEventListener("change",(function(e){var t=new FileReader;t.onload=a,t.readAsText(e.target.files[0])})),n.click()}},"Importar")})),W=function(e){var t=g();return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(o.a,{position:"absolute",className:t.header},r.a.createElement(c.a,{className:t.toolbar},r.a.createElement(u.a,{style:{fontWeight:"bold"}},"C\xe1lculo da M\xe9dia"),r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(P,null)))),r.a.createElement("main",{style:{flexGrow:1,height:"100vh",overflow:"auto",background:"#eeeeee"}},r.a.createElement("div",{className:t.appBarSpace}),r.a.createElement(s.a,{maxWidth:"xl",className:t.container,spacing:3},r.a.createElement(_,null))))},G=a(18),U={colunas:[{tag:"AC1",peso:.1},{tag:"AC2",peso:.3},{tag:"AG",peso:.2},{tag:"AF",peso:.4}],linhas:[{id:"Exemplo",valores:[5,5,5,5]}],media:{id:"",valores:[]},mediaIndex:null,objetivo:5};var V=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object.assign({},t,{linhas:a.payload});case v:return Object.assign({},t,{linhas:t.linhas.concat(a.payload)});case h:return(e=Object(R.a)(t.linhas)).splice(a.payload,1),Object.assign({},t,{linhas:e});case b:return(e=Object(R.a)(t.linhas))[a.payload.id]=a.payload.media,Object.assign({},t,{linhas:e});case y:return Object.assign({},t,{media:a.payload});case j:return Object.assign({},t,{mediaIndex:a.payload});case O:return Object.assign({},t,{colunas:a.payload});case M:return Object.assign({},t,{objetivo:a.payload});case x:var n=t.colunas,r=t.linhas,l=t.objetivo,i={colunas:n,linhas:r,objetivo:l};return localStorage.setItem("data",JSON.stringify(i)),t;case I:var o=JSON.parse(localStorage.getItem("data"));return o?Object.assign({},t,{colunas:o.colunas,linhas:o.linhas,objetivo:o.objetivo}):t;default:return t}},X=Object(G.b)(V);i.a.render(r.a.createElement(f.a,{store:X},r.a.createElement(W,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.aec5cf50.chunk.js.map