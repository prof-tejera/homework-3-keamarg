(this["webpackJsonpreact-intro-components"]=this["webpackJsonpreact-intro-components"]||[]).push([[0],[,,,,,,,function(e,t,n){},,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(8),r=n.n(a),i=(n(16),n(2)),l=n(3),s=n(5),u=n(4),j=n(0),d=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"mainPanel",children:this.props.children})}}]),n}(c.Component),p=(n(7),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.text,c=t.handleClick,o=t.buttonColor,a=t.buttonStyling;return Object(j.jsx)("button",{className:"".concat(a," ").concat(o),onMouseOver:function(){return console.log(e.props.text,"button was moused over.")},onClick:function(){console.log(e.props.text,"button was clicked."),c(n)},children:this.props.text})}}]),n}(c.Component)),b=(n(18),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=function(e){console.log("In App, ".concat(e," clicked"))};return Object(j.jsxs)(d,{backgroundColor:"blue",children:[Object(j.jsx)(p,{text:"Rewind",onClick:function(){},handleClick:e}),Object(j.jsx)(p,{text:"Fast Forward",onClick:function(){},handleClick:e}),Object(j.jsx)(p,{text:"Play",onClick:function(){},color:"green",size:"large",handleClick:e}),Object(j.jsx)(p,{text:"Stop",onClick:function(){},color:"red",size:"large",handleClick:e})]})}}]),n}(c.Component)),h=(n(19),n(10)),O=n(11),x=(n(20),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.type,c=e.name,o=e.handleChange,a=e.handleClick,r=e.id,i=Object(O.a)(e,["placeholder","type","name","handleChange","handleClick","id"]);return Object(j.jsx)("input",Object(h.a)({className:"Default-input",placeholder:t,type:n,name:c,id:r,onChange:function(e){console.log(e.target.value),o(r)},onClick:function(){console.log(r,"was clicked."),a(r)}},i))}}]),n}(c.Component)),f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=!1,t=function(t){e=!e,console.log("In App, ".concat(t," clicked ").concat(e))},n=function(t){console.log("In App, ".concat(t," clicked ").concat(e))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(d,{children:[Object(j.jsx)(x,{id:"username",placeholder:"username",handleChange:n,handleClick:t,skinke:"dsd"}),Object(j.jsx)("br",{}),Object(j.jsx)(x,{id:"password",placeholder:"password",type:"password",handleChange:n,handleClick:t}),Object(j.jsx)("br",{}),Object(j.jsx)(p,{text:"Login",buttonStyling:"Login-button",buttonColor:"Green-button",loggedIn:e,handleChange:n,handleClick:t}),Object(j.jsx)(p,{text:"Logout",buttonStyling:"Login-button",buttonColor:"Red-button",loggedIn:e,handleChange:n,handleClick:t}),Object(j.jsxs)("p",{children:["Not registrered? ",Object(j.jsx)("span",{children:"Create an account"})]})]})})}}]),n}(c.Component),m=n(9),g=(n(21),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=function(e){console.log("In App, ".concat(e," clicked"))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"surroundingBox",children:[Object(j.jsx)(p,{buttonStyling:"Pager-button",buttonColor:"Gray-button",text:"<",handleClick:e}),Object(m.a)(Array(7)).map((function(t,n){return Object(j.jsx)(p,{buttonStyling:"Pager-button",buttonColor:"Gray-button",text:n+1,handleClick:e},n)})),Object(j.jsx)(p,{buttonStyling:"Pager-button",text:">",handleClick:e})]})})}}]),n}(c.Component)),C=(n(22),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("label",{htmlFor:"".concat(this.props.text),children:this.props.text})}}]),n}(c.Component)),k=(n(23),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=function(e){console.log("In App, ".concat(e," clicked"))},t=function(e){console.log("In App, ".concat(e," changed"))};return Object(j.jsx)(j.Fragment,{children:["Apple","Pear","Orange"].map((function(n,c){return Object(j.jsxs)("div",{className:"radio-group",children:[Object(j.jsx)(x,{id:n,type:"radio",name:"radio-buttons",handleClick:e,handleChange:t}),Object(j.jsx)(C,{htmlFor:n,text:n})]},c)}))})}}]),n}(c.Component)),v=(n(24),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"App-component",children:[Object(j.jsx)("header",{className:"App-header",children:"Media Buttons Component (Example)"}),Object(j.jsx)("div",{className:"App-content",children:Object(j.jsx)(b,{})})]}),Object(j.jsxs)("div",{className:"App-component App-login",children:[Object(j.jsx)("header",{className:"App-header",children:"Login form component"}),Object(j.jsx)("div",{className:"App-content",children:Object(j.jsx)(f,{})})]}),Object(j.jsxs)("div",{className:"App-component",children:[Object(j.jsx)("header",{className:"App-header",children:"Pager component"}),Object(j.jsx)("div",{className:"App-content",children:Object(j.jsx)(g,{})})]}),Object(j.jsxs)("div",{className:"App-component",children:[Object(j.jsx)("header",{className:"App-header",children:"Radio Buttons component"}),Object(j.jsx)("div",{className:"App-content",children:Object(j.jsx)(k,{})})]})]})}}]),n}(c.Component));r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.f4f05dbe.chunk.js.map