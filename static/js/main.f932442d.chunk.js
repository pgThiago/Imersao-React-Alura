(this.webpackJsonpancapflix=this.webpackJsonpancapflix||[]).push([[0],{35:function(n,e,t){n.exports=t.p+"static/media/logo.225fe6a0.png"},36:function(n,e,t){n.exports=t(64)},41:function(n,e,t){},60:function(n,e,t){},64:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(30),i=t.n(o),c=(t(41),t(8)),l=t(3),u=t(9),s=t.n(u),p=t(12),d=t(10),m=t(1),f=t(2);function b(){var n=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n"]);return b=function(){return n},n}function g(){var n=Object(m.a)(["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%;\n  @media (max-width: 800px) {\n    display: none;\n  }\n"]);return g=function(){return n},n}var h=f.b.div(g()),x=f.b.iframe(b());var v=function(n){var e=n.youtubeID;return r.a.createElement(h,null,r.a.createElement(x,{title:"Titulo do Iframe",src:"https://www.youtube.com/embed/".concat(e,"?autoplay=0&mute=1"),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))};function y(){var n=Object(m.a)(["\n  font-family: 'Roboto', sans-serif;\n  box-sizing: border-box;\n  cursor: pointer;\n  padding: 16px 24px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  outline: none;\n  border-radius: 5px;\n  text-decoration: none;\n  display: inline-block;\n  border: 1px solid transparent;\n  color: var(--black);\n  background: var(--white);\n  border-color: var(--black);\n  transition: opacity .3s;\n  display: none;\n  margin: 0 auto;\n  @media (max-width: 800px) {\n    display: block;\n  }\n"]);return y=function(){return n},n}function E(){var n=Object(m.a)(["\n  height: 80vh;\n  position: relative;\n  color: #fff;\n  background-image: ",'; \n  background-size: cover;\n  background-position: center;\n  @media (max-width: 800px) {\n    height: auto;\n    min-height: 50vh;\n  }\n\n  &:after,\n  &:before {\n    content: "";\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 20%;\n  }\n\n  &:before {\n    top: 0;\n    height: 100%;\n    background: rgba(0,0,0,0.5);\n  }\n\n  &:after {\n    bottom: 0;\n    background: linear-gradient(0deg, #141414 0%, transparent 100%);\n  }\n']);return E=function(){return n},n}function w(){var n=Object(m.a)(["\n  font-style: normal;\n  font-weight: 300;\n  font-size: 40px;\n  line-height: 1;\n  margin-top: 0;\n  margin-bottom: 32px;\n\n  @media (max-width: 800px) {\n    font-size: 32px;\n    text-align: center;\n  }\n"]);return w=function(){return n},n}function j(){var n=Object(m.a)(["\n  @media (max-width: 800px) {\n    display: none;\n  }\n"]);return j=function(){return n},n}function k(){var n=Object(m.a)(["\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 60px;\n  line-height: 70px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  display: inline-block; \n  padding: 25px;\n  line-height: 1;\n  border-radius: 4px;\n\n  @media (max-width: 800px) {\n    display: none;\n    font-size: 18px;\n    padding: 10px;\n  }\n"]);return k=function(){return n},n}function O(){var n=Object(m.a)(["\n  width: 50%;\n  display: inline-block;\n  margin-bottom: 50px;\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"]);return O=function(){return n},n}function C(){var n=Object(m.a)(["\n  margin-left: 5%;\n  margin-right: 5%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 10;\n  @media (max-width: 800px) {\n    padding-top: 100px;\n    flex-direction: column;\n  }\n"]);return C=function(){return n},n}var F=f.b.section(C());F.Item=f.b.div(O()),F.Category=f.b.h1(k()),F.Description=f.b.p(j()),F.Title=f.b.h2(w());var D=f.b.section(E(),(function(n){var e=n.backgroundImage;return"url(".concat(e,")")})),z=f.b.button(y());function T(n){var e=n.videoTitle,t=n.videoDescription,a=n.url,o=a.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,"$7"),i="https://img.youtube.com/vi/".concat(o,"/maxresdefault.jpg");return r.a.createElement(D,{backgroundImage:i},r.a.createElement(F,null,r.a.createElement(F.Item,null,r.a.createElement(F.Title,null,e),r.a.createElement(F.Description,null,t)),r.a.createElement(F.Item,null,r.a.createElement(v,{youtubeID:o}),r.a.createElement(z,{onClick:function(){window.open(a,"_blank","noopener, noreferrer"),window.focus()}},"Assistir"))))}function I(){var n=Object(m.a)(["\n  color: white;\n  min-height: 197px;\n  margin-left: 5%;\n  margin-bottom: 16px;\n"]);return I=function(){return n},n}function _(){var n=Object(m.a)(["\n  margin: 0;\n  padding-left: 0;\n  padding-bottom: 32px;\n  list-style: none;\n  display: flex;\n  overflow-x: auto;\n  flex-direction: row;\n  \n  li {\n    margin-right: 16px;\n  }\n"]);return _=function(){return n},n}function L(){var n=Object(m.a)(["\n  margin-left: 16px;\n  text-decoration: none;\n  transition: opacity .3s;\n  &:hover,\n  &:focus {\n    opacity: .5;\n  }\n  @media (max-width: 800px) {\n    display: block;\n    margin-bottom: 16px;\n    margin-left: 0;\n  }\n"]);return L=function(){return n},n}function S(){var n=Object(m.a)(["\n  color: black;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 35px;\n  line-height: 1;\n  margin-bottom: 16px;\n  display: inline-block;\n  padding: 20px;\n  line-height: 1;\n  border-radius: 4px;\n\n  @media (max-width: 800px) {\n    font-size: 18px;\n    padding: 10px;\n  }\n"]);return S=function(){return n},n}var A=f.b.h3(S()),N=f.b.a(L()),R=(f.b.ul(_()),f.b.section(I()));function B(){var n=Object(m.a)(["\n  border: 2px solid;\n  border-radius: 4px;\n  text-decoration: none;\n  overflow: hidden;\n  cursor: pointer;\n  color: white;\n  flex: 0 0 298px;\n  width: 298px;\n  height: 197px;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  border-radius: 10px;\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  padding: 16px;\n\n  transition: opacity .3s;\n  &:hover,\n  &:focus {\n    opacity: .5;\n  }\n  \n  &:not(:first-child) {\n    margin-left: 20px;\n  }\n"]);return B=function(){return n},n}var Y=f.b.a(B(),(function(n){var e=n.url;return"url(".concat(e,")")}));var J=function(n){var e=n.videoTitle,t=n.videoURL,a=(n.categoryColor,"https://img.youtube.com/vi/".concat(t.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,"$7"),"/hqdefault.jpg"));return r.a.createElement(Y,{url:a,href:t,target:"_blank",style:{borderColor:"#F4DD00"},title:e})},U=t(34),V=t.n(U);function q(){var n=Object(m.a)(["\n  margin-right: 16px;\n  img {\n    margin: 16px;\n    width: 298px;\n    height: 197px;\n    object-fit: cover;\n  }\n"]);return q=function(){return n},n}function M(){var n=Object(m.a)(["\n  padding: 0;\n  margin: 0;\n  .slick-prev,\n  .slick-next {\n    z-index: 50;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: 30px;\n    height: 30px;\n    transform: initial;\n    &:before {\n      font-size: 30px;\n    }\n  }\n  \n  .slick-prev {\n    left: 0;\n  }\n  .slick-next {\n    right: 16px;\n  }\n"]);return M=function(){return n},n}var $=f.b.ul(M()),H=f.b.li(q()),P=function(n){var e=n.children;return r.a.createElement($,null,r.a.createElement(V.a,{dots:!1,infinite:!1,speed:300,centerMode:!1,variableWidth:!0,adaptiveHeight:!0},e))};var W=function(n){var e=n.ignoreFirstVideo,t=n.category,a=t.titulo,o=t.cor,i=t.link_extra,c=t.videos;return r.a.createElement(R,null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{style:{backgroundColor:"#F4DD00"}},a),i&&r.a.createElement(N,{href:i.url,target:"_blank"},i.text)),r.a.createElement(P,null,c.map((function(n,t){return e&&0===t?null:r.a.createElement(H,{key:n.titulo},r.a.createElement(J,{videoTitle:n.titulo,videoURL:n.url,categoryColor:o}))}))))},X=t(35),G=t.n(X);t(60);function K(){var n=Object(m.a)(["\ncolor: var(--white);\n    border: 1px solid var(--white);\n    background: var(--black);\n    box-sizing: border-box;\n    cursor: pointer;\n    padding: 16px 24px;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 16px;\n    outline: none;\n    border-radius: 5px;\n    text-decoration: none;\n    display: inline-block;\n    transition: opacity .3s;\n  }\n  &:hover,\n  &:focus {\n    opacity: .5;\n  }\n"]);return K=function(){return n},n}var Q=f.b.button(K()),Z=function(){return r.a.createElement("nav",{className:"Menu"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{className:"Logo",src:G.a,alt:"Logo do TSFLIX"})),r.a.createElement(Q,{as:c.b,className:"ButtonLink",to:"/cadastro/video"},"Novo v\xeddeo"))};function nn(){var n=Object(m.a)(["\n  background: var(--black);\n  border-top: 2px solid #F4DD00;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 32px;\n  padding-bottom: 32px;\n  color: var(--white);\n  text-align: center;\n  @media (max-width: 800px) {\n    margin-bottom: 50px;\n  }\n"]);return nn=function(){return n},n}var en=f.b.footer(nn());var tn=function(){return r.a.createElement(en,null,r.a.createElement("a",{href:"https://www.alura.com.br/"},r.a.createElement("img",{src:"https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg",alt:"Logo Alura"})),r.a.createElement("p",null,"Orgulhosamente criado durante a"," ",r.a.createElement("a",{href:"https://www.alura.com.br/"},"Imers\xe3o React da Alura")))};function an(){var n=Object(m.a)(["\n        padding: ",";\n    "]);return an=function(){return n},n}function rn(){var n=Object(m.a)(["\n    background-color: var(--black);\n    color: var(--white);\n    flex: 1;\n    padding-top: 50px;\n    padding-left: 5%;\n    padding-right: 5%;\n    ","\n"]);return rn=function(){return n},n}var on=f.b.main(rn(),(function(n){var e=n.paddingAll;return Object(f.a)(an(),e)})),cn=function(n){var e=n.children,t=n.paddingAll;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement(on,{paddingAll:t},e),r.a.createElement(tn,null))};var ln=function(){var n=Object(a.useState)([]),e=Object(d.a)(n,2),t=e[0],o=e[1];return Object(a.useEffect)((function(){function n(){return(n=Object(p.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"http://localhost:8080/categorias?_embed=videos",n.next=3,fetch("http://localhost:8080/categorias?_embed=videos");case 3:return n.next=5,n.sent.json();case 5:e=n.sent,o(e);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),r.a.createElement(cn,{paddingAll:0},0===t.length&&r.a.createElement("div",null,"Loading..."),t.map((function(n,e){return 0===e?r.a.createElement("div",{key:n.id},r.a.createElement(T,{videoTitle:t[0].videos[0].titulo,url:t[0].videos[0].url,videoDescription:"Voc\xea realmente sabe no que os fascistas acreditavam?"}),r.a.createElement(W,{ignoreFirstVideo:!0,category:t[0]})):r.a.createElement(W,{key:n.id,category:n})})))},un=t(20),sn=t(25);var pn=function(n){var e=Object(a.useState)(n),t=Object(d.a)(e,2),r=t[0],o=t[1];return{valores:r,handleChange:function(n){var e,t;e=n.target.getAttribute("name"),t=n.target.value,o(Object(sn.a)(Object(sn.a)({},r),{},Object(un.a)({},e,t)))},clearForm:function(){o(n)}}};function dn(){var n=Object(m.a)(["\n        &:not([type='color']) + "," {\n          transform: scale(.6) translateY(-10px);\n        }\n      "]);return dn=function(){return n},n}function mn(){var n=Object(m.a)(["\n  background: #53585D;\n  color: #F5F5F5;\n  display: block;\n  width: 100%;\n  height: 57px;\n  font-size: 18px;\n  \n  outline: 0;\n  border: 0;\n  border-top: 4px solid transparent;\n  border-bottom: 4px solid #53585D;\n  \n  padding: 16px 16px;\n  margin-bottom: 45px;\n  \n  resize: none;\n  border-radius: 4px;\n  transition: border-color .3s;\n  \n  &:focus {\n    border-bottom-color: var(--black);\n  }\n  &:focus:not([type='color']) + "," {\n    transform: scale(.6) translateY(-10px);\n  }\n  ","\n"]);return mn=function(){return n},n}function fn(){var n=Object(m.a)(["\n        &:not([type='color']) + "," {\n          transform: scale(.6) translateY(-10px);\n        }\n      "]);return fn=function(){return n},n}function bn(){var n=Object(m.a)(["\n  background: #53585D;\n  color: #F5F5F5;\n  display: block;\n  width: 100%;\n  height: 57px;\n  font-size: 18px;\n  \n  outline: 0;\n  border: 0;\n  border-top: 4px solid transparent;\n  border-bottom: 4px solid #53585D;\n  \n  padding: 16px 16px;\n  margin-bottom: 45px;\n  \n  resize: none;\n  border-radius: 4px;\n  transition: border-color .3s;\n  \n  &:focus {\n    border-bottom-color: var(--black);\n  }\n  &:focus:not([type='color']) + "," {\n    transform: scale(.6) translateY(-10px);\n  }\n  ","\n"]);return bn=function(){return n},n}function gn(){var n=Object(m.a)(["\n  color: #E5E5E5;\n  height: 57px;\n  position: absolute; \n  top: 0;\n  left: 16px;\n  \n  display: flex;\n  align-items: center;\n  \n  transform-origin: 0% 0%;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 300;\n  \n  transition: .1s ease-in-out;\n"]);return gn=function(){return n},n}function hn(){var n=Object(m.a)([""]);return hn=function(){return n},n}function xn(){var n=Object(m.a)(['\n  position: relative;\n  textarea {\n    min-height: 150px;\n  }\n  input[type="color"] {\n    padding-left: 56px;\n  }\n']);return xn=function(){return n},n}var vn=f.b.div(xn()),yn=f.b.label(hn());yn.Text=f.b.span(gn());var En=f.b.input(bn(),yn.Text,(function(n){return n.value.length>0&&Object(f.a)(fn(),yn.Text)})),wn=f.b.textarea(mn(),yn.Text,(function(n){return n.value.length>0&&Object(f.a)(dn(),yn.Text)})),jn=function(n){var e=n.onChange,t=n.type,a=n.name,o=n.label,i=n.value,c=n.suggestions,l="id_".concat(a),u=Boolean(c.length);return r.a.createElement(vn,null,r.a.createElement(yn,{htmlFor:l},"areaDoTexto"===t?r.a.createElement(wn,{name:a,value:i,onChange:e,list:u?"suggestionFor".concat(l):void 0}):r.a.createElement(En,{id:l,type:t,name:a,value:i,autoComplete:u?"off":"on",onChange:e,list:"suggestionFor".concat(l)}),r.a.createElement(yn.Text,null,o,":"),u&&r.a.createElement("datalist",{id:"suggestionFor_".concat(l)},c.map((function(n){return r.a.createElement("option",{value:n,key:"suggestionFor_".concat(l,"_option").concat(n)},n)})))))};jn.defaultProps={type:"text",value:"",onChange:function(){},suggestions:[]};var kn=jn,On=function(){var n=Object(a.useState)([]),e=Object(d.a)(n,2),t=e[0],o=e[1],i=pn({}),u=i.handleChange,m=i.valores,f=Object(l.f)(),b=[];return Object(a.useEffect)((function(){function n(){return(n=Object(p.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"http://localhost:8080/categorias",n.next=3,fetch("http://localhost:8080/categorias");case 3:return n.next=5,n.sent.json();case 5:e=n.sent,o(e);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}(),b=t.map((function(n){return n.titulo}))}),[]),console.log("categoryTitles: ",b),r.a.createElement(cn,null,r.a.createElement("h1",null,"Cadastrar video"),r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),function(){var n=t.find((function(n){return n.titulo===m.categoria}));m.categoriaId=n.id,fetch("http://localhost:8080/videos?_embed=videos",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(m)})}(),f.push("/")}},r.a.createElement(kn,{label:"T\xedtulo do v\xeddeo",name:"titulo",value:m.titulo,onChange:u}),r.a.createElement(kn,{label:"URL",name:"url",value:m.url,onChange:u}),r.a.createElement(kn,{label:"Categoria",name:"categoria",value:m.categoria,onChange:u,suggestions:b}),r.a.createElement(Q,{type:"submit"},"Cadastrar")),r.a.createElement(c.b,{to:"/cadastro/categoria"},"Cadastrar categoria"))},Cn=t(26),Fn=function(){var n=pn({nome:"",descricao:"",cor:""}),e=n.valores,t=n.handleChange,o=n.clearForm,i=Object(a.useState)([]),l=Object(d.a)(i,2),u=l[0],m=l[1];return Object(a.useEffect)((function(){function n(){return(n=Object(p.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"http://localhost:8080/categorias",n.next=3,fetch("http://localhost:8080/categorias");case 3:return n.next=5,n.sent.json();case 5:e=n.sent,m(Object(Cn.a)(e));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),r.a.createElement(cn,null,r.a.createElement("h1",null,"Cadastro Categoria:",e.nome),r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),m([].concat(Object(Cn.a)(u),[e])),o()}},r.a.createElement(kn,{label:"Nome da categoria",type:"text",name:"nome",value:e.nome,onChange:t}),r.a.createElement(kn,{label:"Descri\xe7\xe3o",type:"areaDoTexto",name:"descricao",value:e.descricao,onChange:t}),r.a.createElement(kn,{label:"Cor",type:"color",name:"cor",value:e.cor,onChange:t}),r.a.createElement(Q,null,"Cadastrar")),0===u.length&&r.a.createElement("div",null,"Loading"),r.a.createElement("ul",null,u.map((function(n,e){return r.a.createElement("li",{key:e},n.nome)}))),r.a.createElement(c.b,{to:"/"},"Ir para home"))};i.a.render(r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:ln}),r.a.createElement(l.a,{path:"/cadastro/video",component:On}),r.a.createElement(l.a,{path:"/cadastro/categoria",component:Fn}))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.f932442d.chunk.js.map