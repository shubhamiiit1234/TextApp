(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(6),r=t.n(c),o=(t(16),t(3));t(17);function s(e){return l.a.createElement("div",{className:"container my-3"},l.a.createElement("h3",null,"About Us"),l.a.createElement("div",{className:"accordion my-3",id:"accordionExample"},l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingOne"},l.a.createElement("button",{className:"accordion-button",type:"button",style:{backgroundColor:"dark"===e.theme?"#1B2631":"white",color:"dark"===e.theme?"white":"black"},"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},l.a.createElement("strong",null,"Authors"))),l.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:{backgroundColor:"dark"===e.theme?"#1B2631":"white",color:"dark"===e.theme?"white":"black"}},"The Author is the one and only The",l.a.createElement("strong",null," Bablu OP!!!")))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:{backgroundColor:"dark"===e.theme?"#1B2631":"white",color:"dark"===e.theme?"white":"black"},"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},l.a.createElement("strong",null,"Contacts"))),l.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:{backgroundColor:"dark"===e.theme?"#1B2631":"white",color:"dark"===e.theme?"white":"black"}},"Please don't contact me!! Even if you have then you can call me on:",l.a.createElement("strong",null," +916204898163 ")))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingThree"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:{backgroundColor:"dark"===e.theme?"#1B2631":"white",color:"dark"===e.theme?"white":"black"},"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},l.a.createElement("strong",null,"More"))),l.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:{backgroundColor:"dark"===e.theme?"#1B2631":"white",color:"dark"===e.theme?"white":"black"}},"There is nothing more left to know in this section.")))))}var m=t(4);function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.theme," bg-").concat(e.theme)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(m.b,{className:"navbar-brand",to:"/"},l.a.createElement("b",null,e.title)),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/about"},e.about))),l.a.createElement("div",{className:"form-check form-switch text-".concat("info"===e.theme?"dark":"light"," mx-2")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.changeTheme,role:"Routes",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Dark Theme")),l.a.createElement("form",{className:"d-flex",role:"search"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"info"===e.theme?"btn btn-primary":"btn btn-secondary",type:"submit"},"Search")))))}function d(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),c=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container my-3"},l.a.createElement("div",{className:"mb-3"},l.a.createElement("h5",null,e.heading),l.a.createElement("textarea",{className:"form-control",value:c,placeholder:"Enter your text here!",style:{backgroundColor:"dark"===e.theme?"#1B2631":"white",color:"dark"===e.theme?"white":"black"},onChange:function(e){r(e.target.value)},id:"TextBox",rows:"10"})),l.a.createElement("button",{className:"btn btn-".concat(e.btnClr," mx-1"),onClick:function(){if(c){var a=c.toUpperCase();r(a),e.showAlert("success","Converted to Uppercase!")}else e.showAlert("warning","Please enter the Text first!")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-".concat(e.btnClr," mx-1"),onClick:function(){if(c){var a=c.toLowerCase();r(a),e.showAlert("success","Converted to Lowercase!")}else e.showAlert("warning","Please enter the Text first!")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-".concat(e.btnClr," mx-1"),onClick:function(){var a=document.getElementById("TextBox");a.select(),navigator.clipboard.writeText(a.value),e.showAlert("success","Text is copied to Clipboard!")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-".concat(e.btnClr," mx-1"),onClick:function(){var a=c.split(/[ ]+/);r(a.join(" ")),e.showAlert("success","Extra Spaces are removed!")}},"Remove Extra Space"),l.a.createElement("button",{className:"btn btn-".concat(e.btnClr," mx-1"),onClick:function(){r(""),e.showAlert("success","Text is cleared!")}},"Clear Text")),l.a.createElement("div",{className:"container"},l.a.createElement("h5",null,"Text Summary"),l.a.createElement("p",null,c.split(" ").length," words, ",c.length," characters"),l.a.createElement("p",null,.008*c.split(" ").length,"s to read the full text")))}i.defaultProps={title:"Default Title",about:"Default About"};var u=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type),role:"alert"},function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)," : ",e.alert.msg)},b=t(1);var h=function(){var e=Object(n.useState)("info"),a=Object(o.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(null),h=Object(o.a)(r,2),p=h[0],E=h[1],g=Object(n.useState)("info"),v=Object(o.a)(g,2),f=v[0],k=v[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(i,{title:"Text App",about:"About",changeTheme:function(){"info"===t?(c("dark"),document.body.style.backgroundColor="#212F3C",document.body.style.color="white",k("dark")):(c("info"),document.body.style.backgroundColor="white",document.body.style.color="black",k("info"))},theme:t,btnClr:f}),l.a.createElement(u,{alert:p}),l.a.createElement("div",{className:"container"},l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/about",element:l.a.createElement(s,{theme:t})}),l.a.createElement(b.a,{path:"/",element:l.a.createElement(d,{heading:"Please Enter the Text",theme:t,btnClr:f,showAlert:function(e,a){E({type:e,msg:a}),setTimeout(function(){E(null)},1500)}})})))))},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null))),p()},7:function(e,a,t){e.exports=t(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.ce4cfcb6.chunk.js.map