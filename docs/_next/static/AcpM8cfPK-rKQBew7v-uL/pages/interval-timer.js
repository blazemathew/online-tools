(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{u5Kg:function(e,t,a){"use strict";a.r(t);var n=a("1OyB"),r=a("vuIU"),i=a("JX7q"),s=a("md7G"),c=a("foSv"),o=a("Ji7U"),l=a("rePB"),u=a("ofb8"),m=a("q1tI"),d=a.n(m),p=a("QJSi"),f=(a("ZlWQ"),d.a.createElement);function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,t,a){return(new Array(a+1).join(t)+e).slice(-a)}var k={display:"10:00",timeElapsed:0,target:600,breakTime:120,workMode:!0,running:!1},v=function(e){Object(o.a)(m,e);var t,a=(t=m,function(){var e,a=Object(c.a)(t);if(b()){var n=Object(c.a)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return Object(s.a)(this,e)});function m(){var e;Object(n.a)(this,m);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return e=a.call.apply(a,[this].concat(r)),Object(l.a)(Object(i.a)(e),"state",k),Object(l.a)(Object(i.a)(e),"timer",void 0),Object(l.a)(Object(i.a)(e),"handleStartTimer",(function(){e.timer&&clearInterval(e.timer);var t=e.state,a=t.target,n=t.breakTime;e.triggerUpdateTime(a,n),e.timer=setInterval((function(){e.triggerUpdateTime(a,n)}),1e3)})),Object(l.a)(Object(i.a)(e),"handleStopTimer",(function(){e.timer&&clearInterval(e.timer);var t=e.state,a=t.target,n=t.workMode,r=t.breakTime,i=n?a:r,s=i%60,c=h(~~(i/60),"0",2)+":"+h(s,"0",2);e.setState({running:!1,timeElapsed:0,display:c,workMode:!0})})),Object(l.a)(Object(i.a)(e),"handleResumeTime",(function(t){e.setState({breakTime:60*t.target.value})})),Object(l.a)(Object(i.a)(e),"handleTargetTime",(function(t){e.setState({target:60*t.target.value})})),e}return Object(r.a)(m,[{key:"componentDidMount",value:function(){this.startBreak=new Audio("../static/sounds/start-break.wav"),this.endBreak=new Audio("../static/sounds/end-break.wav")}},{key:"triggerUpdateTime",value:function(e,t){var a=this.state,n=a.timeElapsed,r=a.workMode,i=r?e:t,s=~~((i-n)/60),c=(i-n)%60,o=h(s,"0",2)+":"+h(c,"0",2);s||c?this.setState({timeElapsed:n+1,display:o,running:!0}):(this.setState({timeElapsed:0,display:o,workMode:!r}),r?this.startBreak.play():this.endBreak.play())}},{key:"render",value:function(){var e=this.state,t=e.display,a=e.running,n=e.target,r=e.breakTime,i=e.workMode;return f(u.a,null,f(p.f,{fluid:!0,className:"main-content-container px-4 noisy"},f("div",{className:"emblem"},f("span",{className:"icon-information"})),f("div",{className:"frame"},f("div",{className:"piece output"},f("h1",null,t)),f("div",{className:"piece scanlines noclick"}),f("div",{className:"piece glow noclick"})),f("div",{className:"controls"},f("h2",null,a?i?"I am in work mode":"It's time for a break":null),f("p",null,"I want to take a break after"," ",f("input",{type:"number",defaultValue:n/60,onChange:this.handleTargetTime}),"minutes for",f("input",{type:"number",defaultValue:r/60,onChange:this.handleResumeTime})," ","minutes"),a?f("b",{onClick:this.handleStopTimer,className:"play-button"},f("i",{className:"material-icons"},"stop"),f("span",null,"Stop")):f("b",{onClick:this.handleStartTimer,className:"play-button"},f("i",{className:"material-icons"},"play_arrow"),f("span",null,"Start")))),f("p",null,"The cyber punk retro UI is inspired from"," ",f("a",{href:"https://codepen.io/somethingformed/pen/raWJXV",target:"_blank"},"A PEN BY \u672a\u77e5\u5929\u5730 CLOSED")))}}]),m}(d.a.Component);t.default=v},"ycu/":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interval-timer",function(){return a("u5Kg")}])}},[["ycu/",1,2,3,0,4,5,16]]]);