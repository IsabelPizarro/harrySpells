(this.webpackJsonpspellsfinder=this.webpackJsonpspellsfinder||[]).push([[0],{62:function(e,a,t){e.exports=t(73)},67:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),i=t.n(l),c=t(45),s=t(46),o=t(24),u=t(52),m=t(53);t(67);var d=t(47),p=t(51),h=t(111),f=t(3),v=t(114),E=t(116),b=t(120),g=t(117),S=t(119),y=t(124),j=t(118),k=t(36),N=t(35),O=t(34),x=t(49),C=t.n(x),w=t(50),I=t.n(w),V=Object(h.a)((function(e){return{card:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:N.a[500]},heart:{backgroundColor:O.a}}}));function F(e){var a=V(),t=r.a.useState(!1),n=Object(p.a)(t,2),l=n[0],i=n[1],c=e.spell,s=e.i;return r.a.createElement("li",{className:s,key:c.spell},r.a.createElement(v.a,{className:a.card},r.a.createElement(E.a,{avatar:r.a.createElement(y.a,{"aria-label":"recipe",className:a.avatar},"S"),title:c.spell,subheader:c.type}),r.a.createElement(g.a,{disableSpacing:!0},r.a.createElement(j.a,{"aria-label":"add to favorites",className:a.heart},r.a.createElement(C.a,null)),r.a.createElement(k.a,{paragraph:!0},"What it does?"),r.a.createElement(j.a,{className:Object(f.a)(a.expand,Object(d.a)({},a.expandOpen,l)),onClick:function(){i(!l)},"aria-expanded":l,"aria-label":"show more"},r.a.createElement(I.a,null))),r.a.createElement(S.a,{in:l,timeout:"auto",unmountOnExit:!0},r.a.createElement(b.a,null,r.a.createElement(k.a,{paragraph:!0,className:"efect"},c.effect)))))}var A=function(e){var a=e.spell,t=e.i;return r.a.createElement("ul",{className:"ulList"},r.a.createElement(F,{spell:a,i:t,key:t}))},D=t(123),L=t(121),M=Object(h.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},root:{"& > *":{margin:e.spacing(1)}}}}));function T(e){var a=e.handleInput,t=e.handleSubmit,n=e.value;console.log(e);var l=M();return r.a.createElement("form",{className:l.container,noValidate:!0,autoComplete:"off"},r.a.createElement("div",{className:"containerFilter"},r.a.createElement(D.a,{id:"standard-basic",s:!0,className:l.textField,label:"Find your spell",margin:"normal",onChange:a,value:n}),r.a.createElement("div",{className:l.root},r.a.createElement(L.a,{variant:"outlined",color:"secondary",onClick:t,value:n},"Search"))))}var U=t(122),W=Object(h.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function J(){var e=W();return r.a.createElement("div",{className:e.root},r.a.createElement(U.a,null))}var $=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={spells:[],value:"",filteredValue:""},n.handleInput=n.handleInput.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;fetch("https://www.potterapi.com/v1/spells?key=$2a$10$W4Y/r9zaxMfJVdSv/V9U3.6ETMSveALxjAQy9duMzjpaISSQbU8ty").then((function(e){return e.json()})).then((function(a){e.setState({spells:a})}))}},{key:"handleInput",value:function(e){var a=e.currentTarget.value;this.setState({value:a})}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state.value;this.setState({filteredValue:a})}},{key:"render",value:function(){var e=this.state,a=e.spells,t=e.value,n=e.filteredValue;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("h2",null,"Harry Potter Spell Finder"),r.a.createElement(T,{handleInput:this.handleInput,handleSubmit:this.handleSubmit,value:t})),r.a.createElement("div",{className:"cardsContainer"},""==a?r.a.createElement(J,null):a.filter((function(e){return e.spell.toUpperCase().includes(n.toUpperCase())})).map((function(e,a){return r.a.createElement(A,{spell:e,key:a})}))))}}]),t}(n.Component);t(72);i.a.render(r.a.createElement($,null),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.e57ec945.chunk.js.map