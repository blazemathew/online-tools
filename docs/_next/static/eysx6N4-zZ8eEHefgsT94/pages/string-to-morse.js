(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"2aGO":function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=n("q1tI"),s=n.n(o),i=n("TSYQ"),l=n.n(i),c=n("QJSi"),u=s.a.createElement;t.a=function(e){var t=e.title,n=e.subtitle,o=e.className,s=a(e,["title","subtitle","className"]),i=l()(o,"text-center","text-md-left","mb-sm-0");return u(c.e,r({xs:"12",sm:"4",className:i},s),u("span",{className:"text-uppercase page-subtitle"},n),u("h3",{className:"page-title"},t))}},EF07:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),a=n("vuIU"),o=n("JX7q"),s=n("md7G"),i=n("foSv"),l=n("Ji7U"),c=n("rePB"),u=n("q1tI"),d=n.n(u),h=n("QJSi"),p=n("2aGO");function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e){var t="";return f(e).forEach((function(e){t=t+" "+(g[e.toUpperCase()]||"")})),t}var g={A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",0:"-----",".":".-.-.-",",":"--..--",":":"---...","?":"..--..","'":".----.","-":"-....-","/":"-..-.","(":"-.--.",")":"-.--.-",'"':".-..-.","@":".--.-.","=":"-...-","&":".-...","+":".-.-.","!":"-.-.--"},y=n("ofb8"),v=d.a.createElement,M=function(e){var t=e.title,n=e.list;return v(h.a,{small:!0},v(h.d,{className:"border-bottom"},v("h6",{className:"m-0"},t),v("div",{className:"block-handle"})),v(h.b,{className:"p-0"},v(h.o,{small:!0,flush:!0,className:"list-group-small"},n.map((function(e,t){return v(h.p,{key:t,className:"d-flex px-3"},v("span",{className:"text-semibold text-fiord-blue"},e.title),v("span",{className:"ml-auto text-right text-semibold text-reagent-gray"},e.value))})))),v(h.c,{className:"border-top"},v(h.u,null)))};M.defaultProps={title:"Numbers",list:[{title:"One",value:"1"}]};var O=M,w=d.a.createElement;function N(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var I=function(e){Object(l.a)(u,e);var t,n=(t=u,function(){var e,n=Object(i.a)(t);if(N()){var r=Object(i.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(s.a)(this,e)});function u(){var e;Object(r.a)(this,u);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return e=n.call.apply(n,[this].concat(a)),Object(c.a)(Object(o.a)(e),"IMC",Object.keys(g).map((function(e){return{title:e,value:g[e]}}))),Object(c.a)(Object(o.a)(e),"state",{input:"",output:""}),Object(c.a)(Object(o.a)(e),"handleTextInputChange",(function(t){e.setState({input:t.target.value,output:b(t.target.value)})})),e}return Object(a.a)(u,[{key:"render",value:function(){var e=this.state,t=e.input,n=e.output;return w(y.a,null,w(h.f,{fluid:!0,className:"main-content-container px-4"},w(h.u,{noGutters:!0,className:"page-header py-4"},w(p.a,{title:"String To Morse Code Convertor",subtitle:"Morse encoder",md:"12",className:"ml-sm-auto mr-sm-auto"})),w(h.u,null,w(h.e,{lg:"12"},w(h.a,{small:!0,className:"mb-4"},w(h.o,{flush:!0},w(h.p,{className:"p-3"},w(h.u,null,w(h.e,null,w(h.h,null,w(h.u,{form:!0},w(h.e,{md:"6",className:"form-group"},w("label",{htmlFor:"feDescription"},"String"),w(h.k,{id:"feDescription",placeholder:"Save the world! ",rows:"5",onChange:this.handleTextInputChange,value:t})),w(h.e,{md:"6",className:"form-group"},w("label",{htmlFor:"feDescription"},"Morse Code"),w(h.k,{id:"feDescription",placeholder:"Your text here... ?",rows:"5",value:n,onChange:function(){}}))))))),w(h.p,{className:"p-4"},w("strong",{className:"text-muted d-block mb-2"},"How it Works"),w("pre",{className:"code-part"},w("code",{className:"javascript p-3"},'\n/**\n *\n * @param {*} string\n */\nfunction StringToMorse(str) {\n  let output = "";\n  [...str].forEach(c => {\n    output = output + " " + (MORSE_MAP[c.toUpperCase()] || "");\n  });\n  return output;\n}\n// this list of international morse codes\nconst MORSE_MAP = {A: ".-",B: "-...",C: "-.-.",D: "-..",E: ".",F: "..-.",G: "--.",H: "....",I: "..",J: ".---",K: "-.-",L: ".-..",M: "--",N: "-.",O: "---",P: ".--.",Q: "--.-",R: ".-.",S: "...",T: "-",U: "..-",V: "...-",W: ".--",X: "-..-",Y: "-.--",Z: "--..",1: ".----",2: "..---",3: "...--",4: "....-",5: ".....",6: "-....",7: "--...",8: "---..",9: "----.",0: "-----",".": ".-.-.-",",": "--..--",":": "---...","?": "..--..","\'": ".----.","-": "-....-","/": "-..-.","(": "-.--.",")": "-.--.-",\'"\': ".-..-.","@": ".--.-.","=": "-...-","&": ".-...","+": ".-.-.","!": "-.-.--"};\n'))),w(h.p,null,w(h.u,null,w(h.e,{lg:"4"},w(O,{title:"International Morse code",list:this.IMC.slice(0,Math.ceil(this.IMC.length/3))})),w(h.e,{lg:"4"},w(O,{title:"International Morse code",list:this.IMC.slice(Math.ceil(this.IMC.length/3),Math.ceil(this.IMC.length/3*2))})),w(h.e,{lg:"4"},w(O,{title:"International Morse code",list:this.IMC.slice(Math.ceil(this.IMC.length/3*2),this.IMC.length)})))),w(h.p,{className:"p-4"},w("strong",{className:"text-muted d-block mb-2"},"About Morse Code"),w("p",null,"Morse code is a character encoding scheme used in telecommunication that encodes text characters as standardized sequences of two different signal durations called dots and dashes or dits and dahs.[2][3] Morse code is named for Samuel F. B. Morse, an inventor of the telegraph."),w("p",null,'The International Morse Code encodes the 26 English letters A through Z, some non-English letters, the Arabic numerals and a small set of punctuation and procedural signals (prosigns). There is no distinction between upper and lower case letters. Each Morse code symbol is formed by a sequence of dots and dashes. The dot duration is the basic unit of time measurement in Morse code transmission. The duration of a dash is three times the duration of a dot. Each dot or dash within a character is followed by period of signal absence, called a space, equal to the dot duration. The letters of a word are separated by a space of duration equal to three dots, and the words are separated by a space equal to seven dots. To increase the efficiency of encoding, Morse code was designed so that the length of each symbol is approximately inverse to the frequency of occurrence in text of the English language character that it represents. Thus the most common letter in English, the letter "E", has the shortest code: a single dot. Because the Morse code elements are specified by proportion rather than specific time durations, the code is usually transmitted at the highest rate that the receiver is capable of decoding. The Morse code transmission rate (speed) is specified in groups per minute, commonly referred to as words per minute.'),w("p",null,"Morse code can be memorized, and Morse code signalling in a form perceptible to the human senses, such as sound waves or visible light, can be directly interpreted by persons trained in the skill.",w("br",null),w("a",{href:"https://en.wikipedia.org/wiki/Morse_code"},"Morse code Wiki"),w("br",null),w("a",{href:"https://morsecode.scphillips.com/"},"More info")))))))))}}]),u}(d.a.Component);I.getInitialProps=function(){return{}};t.default=I},sbyM:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/string-to-morse",function(){return n("EF07")}])}},[["sbyM",1,2,5,0,3,4]]]);