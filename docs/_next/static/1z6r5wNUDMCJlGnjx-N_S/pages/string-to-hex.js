(window.webpackJsonp=window.webpackJsonp||[]).push([["fb8e"],{"2aGO":function(e,t,a){"use strict";var n=a("UXZV"),r=a.n(n);function l(){return(l=r.a||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=a("4mXO"),o=a.n(c),s=a("pLtp"),i=a.n(s);function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=i()(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(o.a){var l=o()(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=a("q1tI"),d=a.n(m),p=a("TSYQ"),h=a.n(p),f=a("QJSi");t.a=function(e){var t=e.title,a=e.subtitle,n=e.className,r=u(e,["title","subtitle","className"]),c=h()(n,"text-center","text-md-left","mb-sm-0");return d.a.createElement(f.e,l({xs:"12",sm:"4",className:c},r),d.a.createElement("span",{className:"text-uppercase page-subtitle"},a),d.a.createElement("h3",{className:"page-title"},t))}},I5HJ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/string-to-hex",function(){var e=a("i6LJ");return{page:e.default||e}}])},i6LJ:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),r=a("sLSF"),l=a("MI3g"),c=a("a7VT"),o=a("AT/M"),s=a("Tit0"),i=a("vYYK"),u=a("ofb8"),m=a("q1tI"),d=a.n(m),p=a("QJSi"),h=a("2aGO");function f(e,t){var a="";return e.split("").forEach(function(e,n){var r="000"+e.charCodeAt(0).toString(16);a=a+t+r.slice(-4)}),a}var g=function(e){function t(){var e,a;Object(n.default)(this,t);for(var r=arguments.length,s=new Array(r),u=0;u<r;u++)s[u]=arguments[u];return a=Object(l.default)(this,(e=Object(c.default)(t)).call.apply(e,[this].concat(s))),Object(i.a)(Object(o.default)(a),"state",{text:"",hexValue:"",option:"1",separator:""}),Object(i.a)(Object(o.default)(a),"getCurrentSeparator",function(e){var t=a.state,n=t.option,r=t.separator;switch(e||n){case"1":return"0x";case"2":return"%u";case"3":return"";case"4":return r}}),Object(i.a)(Object(o.default)(a),"handleTextInputChange",function(e){a.setState({text:e.target.value,hexValue:f(e.target.value,a.getCurrentSeparator())})}),Object(i.a)(Object(o.default)(a),"handleSeparatorChange",function(e){var t=a.state.text;a.setState({separator:e.target.value,hexValue:f(t,e.target.value)})}),Object(i.a)(Object(o.default)(a),"handleOptionChange",function(e){a.setState({option:e,text:a.state.text,hexValue:f(a.state.text,a.getCurrentSeparator(e))})}),a}return Object(s.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.text,n=t.hexValue,r=t.option,l=t.separator;return d.a.createElement(u.a,null,d.a.createElement(p.f,{fluid:!0,className:"main-content-container px-4"},d.a.createElement(p.t,{noGutters:!0,className:"page-header py-4"},d.a.createElement(h.a,{title:"String To Hex Convertor",subtitle:"Character to Unicode Binary ",md:"12",className:"ml-sm-auto mr-sm-auto"})),d.a.createElement(p.t,null,d.a.createElement(p.e,{lg:"12"},d.a.createElement(p.a,{small:!0,className:"mb-4"},d.a.createElement(p.n,{flush:!0},d.a.createElement(p.o,{className:"p-3"},d.a.createElement(p.t,null,d.a.createElement(p.e,null,d.a.createElement(p.g,null,d.a.createElement(p.t,{form:!0},d.a.createElement(p.e,{md:"6",className:"form-group"},d.a.createElement("label",{htmlFor:"feDescription"},"Text"),d.a.createElement(p.j,{id:"feDescription",placeholder:"Your text here... !┓ ₢�kkk?",rows:"5",onChange:this.handleTextInputChange,value:a})),d.a.createElement(p.e,{md:"6",className:"form-group"},d.a.createElement("label",{htmlFor:"feDescription"},"Hex"),d.a.createElement(p.j,{id:"feDescription",placeholder:"0x00210x25130x00200x20a20xfffd0x006b0x006b0x006b0x003f ",rows:"5",value:n,onChange:function(){}}))),d.a.createElement(p.t,null,d.a.createElement(p.e,{className:"mb-3 block-options",md:"6"},d.a.createElement("h5",null,"Separator"),d.a.createElement(p.i,{name:"option",checked:"1"===r,onChange:function(){return e.handleOptionChange("1")}},"0X"),d.a.createElement(p.i,{name:"option",checked:"2"===r,onChange:function(){return e.handleOptionChange("2")}},"%u"),d.a.createElement(p.i,{name:"option",checked:"3"===r,onChange:function(){return e.handleOptionChange("3")}},"none"),d.a.createElement(p.i,{name:"option",checked:"4"===r,onChange:function(){return e.handleOptionChange("4")}},"custom")),d.a.createElement(p.e,{md:"6"},"4"===r?d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"customSeparator"},"Custom Separator"),d.a.createElement(p.h,{id:"customSeparator",placeholder:"separator(eg:%u)",value:l,onChange:this.handleSeparatorChange})):""),d.a.createElement(p.e,{className:"mb-3"})))))),d.a.createElement(p.o,{className:"p-4"},d.a.createElement("strong",{className:"text-muted d-block mb-2"},"How it Works"),d.a.createElement("pre",{className:"code-part"},d.a.createElement("code",{className:"javascript p-3"},'\n/**\n *\n * @param {*} d\n * @param {*} separator\n */\nexport function convertStringToHEX(d, separator) {\n  let f = "";\n  d.split("").forEach((s, i) => {\n    // type "1"\n    // converts !┓ ₢�kkk? and returns 0x00210x25130x00200x20a20xfffd0x006b0x006b0x006b0x003f\n\n    let hexCode = "000" + s.charCodeAt(0).toString(16);\n\n    f = f + separator + hexCode.slice(-4);\n  });\n  return f;\n}\n'))),d.a.createElement(p.o,{className:"p-4"},d.a.createElement("strong",{className:"text-muted d-block mb-2"},"About Unicode"),d.a.createElement("p",null,"Unicode serves as a standard for computers to display character data from any language. There are many variations of the Unicode standard, including UTF-7, UTF-8, UTF-16, UCS-2, as well as Big Endian / Little Endian byte order variations."),d.a.createElement("p",null,"Traditionally, the ASCII standard used 1 byte to store 1 character, resulting in 256 combinations. Unlike the ASCII standard, Unicode character data utilizes multiple bytes per character. This increases the number of possible characters, and this may vary depending on what variation of the Unicode standard is in use."),d.a.createElement("p",null,"Unicode now replaces ASCII, ISO 8859 and EUC at all levels. It enables users to handle not only practically any script and language used on this planet, it also supports a comprehensive set of mathematical and technical symbols to simplify scientific information exchange.",d.a.createElement("a",{href:"https://www.cl.cam.ac.uk/~mgk25/unicode.html"},"UTF-8 and Unicode FAQ for Unix/Linux")))))))))}}]),t}(d.a.Component);t.default=g}},[["I5HJ","5d41","9da1","ad9d"]]]);