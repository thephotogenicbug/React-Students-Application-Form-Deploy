(this.webpackJsonpcontact=this.webpackJsonpcontact||[]).push([[0],{35:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),l=c(26),n=c.n(l),i=(c(35),c(36),c(10)),o=c(2),r=c(14),j=c.n(r),d=c(27),m=c(11),b=c(15),x=c(30),h=c(28),u=c.n(h),O=c(0),p=function(){return Object(O.jsx)("div",{className:"container ",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-md-12 text-center ",children:[Object(O.jsx)("label",{id:"label",children:"React Application Form By"}),Object(O.jsx)("b",{}),Object(O.jsx)("a",{href:"https://github.com/thephotogenicbug",className:"text-primary",style:{textDecoration:"none"},children:" \xa9 thephotogenicbug "})]})})})},g=function(){Object(o.e)();var e,t,c=Object(a.useState)({name:"",email:"",mobile:"",dob:"",gender:"",academic:"",activities:"",course:"",father:"",mother:"",occupation:"",caste:"",country:"",state:"",city:"",nationality:"",college:"",qualification:"",address:"",date:""}),s=Object(x.a)(c,2),l=s[0],n=s[1],i=function(c){console.log(c),e=c.target.name,t=c.target.value,n(Object(b.a)(Object(b.a)({},l),{},Object(m.a)({},e,t)))},r=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,a,s,n,i,o,r,d,m,b,x,h,O,p,g,v,N,f,y,C,w,S;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),u.a.post("https://eduprov-api.herokuapp.com/api/contact"),c=l.name,a=l.email,s=l.mobile,n=l.dob,i=l.gender,o=l.academic,r=l.activities,d=l.course,m=l.father,b=l.mother,x=l.occupation,h=l.caste,O=l.country,p=l.state,g=l.city,v=l.nationality,N=l.college,f=l.qualification,y=l.address,C=l.date,e.next=5,fetch("https://eduprov-api.herokuapp.com/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,email:a,mobile:s,dob:n,gender:i,academic:o,activities:r,course:d,father:m,mother:b,occupation:x,caste:h,country:O,state:p,city:g,nationality:v,college:N,qualification:f,address:y,date:C})});case 5:return w=e.sent,e.next=8,w.json();case 8:500!==(S=e.sent).status&&S?(window.alert("Registration Success"),console.log("Registration Success")):(window.alert("Registration Failed"),console.log("Registration Failed"));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("form",{method:"POST",onSubmit:r,children:Object(O.jsxs)("div",{className:"container mt-2",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"col-lg-12",children:[Object(O.jsx)("h3",{className:"text-center text-primary",children:" Student Application Form "}),Object(O.jsx)("p",{className:"text-center text-success"})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-lg-1"}),Object(O.jsx)("div",{className:"col-lg-10",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-header bg-success text-white",children:"Enter Student Details "}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsxs)("div",{className:"row form-group",children:[Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Full Name"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"name",id:"name",onClick:r,value:l.name,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Email-ID"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"email",id:"email",value:l.email,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Mobile No"}),Object(O.jsx)("input",{type:"number",className:"form-control",name:"mobile",id:"mobile",value:l.mobile,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Dob"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"dob",id:"dob",value:l.dob,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Gender"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"gender",id:"gender",value:l.gender,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Academics"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"academic",id:"academic",value:l.academic,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Activities"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"activities",id:"activities",value:l.activities,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Course"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"course",id:"course",value:l.course,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Father Name"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"father",id:"father",value:l.father,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Mother Name"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"mother",id:"mother",value:l.mother,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Parents Occupation"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"occupation",id:"occupation",value:l.occupation,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Caste"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"caste",id:"caste",value:l.caste,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Country"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"country",id:"country",value:l.country,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"State"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"state",id:"state",value:l.state,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"City"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"city",id:"city",value:l.city,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Nationality"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"nationality",id:"nationality",value:l.nationality,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Prefered College"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"college",id:"college",value:l.college,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Qualification"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"qualification",id:"qualification",value:l.qualification,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Address"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"address",id:"address",value:l.address,onChange:i})]}),Object(O.jsxs)("div",{className:"col-lg-4 mt-2",children:[Object(O.jsx)("label",{children:"Application Date"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"date",id:"date",value:l.date,onChange:i})]})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)("button",{className:"btn btn-success btn-block",children:"Send Message"})})]})]})}),Object(O.jsx)("div",{className:"col-lg-1"})]})]})}),Object(O.jsx)("br",{}),Object(O.jsx)(p,{})]})})},v=function(){return Object(O.jsx)("div",{className:"container mt-2",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-lg-4 text-center",children:Object(O.jsx)("h3",{className:"text-warning"})}),Object(O.jsx)("div",{className:"col-xl-8 text-center",children:Object(O.jsxs)("div",{className:"btn-group",children:[Object(O.jsx)("a",{href:"https://eduprov.com/",className:"btn btn-danger text-white",children:"Home"}),Object(O.jsx)(i.b,{className:"btn btn-primary text-white",to:"/",children:"Application Form"})]})})]})})};var N=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(v,{}),Object(O.jsx)(o.a,{exact:!0,path:"/",component:g})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,l=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),l(e),n(e)}))};n.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root")),f()}},[[65,1,2]]]);
//# sourceMappingURL=main.05682045.chunk.js.map