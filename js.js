(()=>{

/* ===== HELPERS ===== */
const el = (t)=>document.createElement(t);
const $ = id=>document.getElementById(id);

/* ===== BASIC STYLE ===== */
document.body.style.margin=0;
document.body.style.fontFamily="Segoe UI, Arial";
document.body.style.background="#b0c5eeff";

/* ===== HEADER ===== */
const header=el("div");
header.style="background:dark;color:black;padding:20px;text-align:center;font-size:26px;font-weight:700";
header.textContent="WELCOME SLearning Platform";
document.body.append(header);

/* ===== MENU ===== */
const menu=el("div");
menu.textContent="☰";
menu.style="padding:12px;background:#3305;color:black;cursor:pointer";
document.body.append(menu);

/* ===== SIDEBAR ===== */
const side=el("div");
side.style=" position:fixed;top:0;left:-240px;width:220px;height:100%;background:black;padding-top:70px;transition:.3s";
document.body.append(side);

/* ===== NAV BAR ===== */
const nav=el("div");
nav.style="background:#2563eb;padding:10px;text-align:center";
document.body.append(nav);

/* ===== VIEW ===== */
const view=el("div");
view.style="max-width:900px;margin:20px auto;background:white;padding:20px;border-radius:10px;min-height:300px";
document.body.append(view);

/* ===== FOOTER ===== */
const footer=el("div");
footer.style="background:#1e3a8a;color:white;text-align:center;padding:15px;margin-top:40px";
footer.textContent="©️ 2025 Salah Mohamad  – All Rights Reserved";
document.body.append(footer);

/* ===== NAVIGATION ===== */
const pages=["HOME","COURSES","ABOUT","CONTACT"];
let active="HOME";

pages.forEach(p=>{
 const b=el("button");
 b.textContent=p;
 b.style="margin:5px;padding:10px 18px;border:none;border-radius:8px;font-weight:600;cursor:pointer";
 b.onclick=()=>go(p);
 nav.append(b);

 const s=el("div");
 s.textContent=p;
 s.style="padding:14px;color:white;cursor:pointer;border-bottom:1px solid #3b82f6";
 s.onclick=()=>{go(p); side.style.left="-240px";}
 side.append(s);
});

menu.onclick=()=> side.style.left = side.style.left==="0px"?"-240px":"0px";

/* ===== ROUTER ===== */
function go(p){
 active=p;
 if(p==="HOME")home();
 if(p==="COURSES")courses();
 if(p==="ABOUT")about();
 if(p==="CONTACT")contact();
}

/* ===== HOME ===== */
function home(){
 view.innerHTML=`
 <h2>Welcome to Salah mohamed Learning Platform</h2>
 <p>This platform is built to help you learn programming in a simple, powerful, and practical way.</p>
 <p>Here you will practice JavaScript, HTML, and CSS using real working examples.</p>
 <p>We focus on learning by doing, not just reading.</p>
 <p>Whether you are a beginner or already know some coding, this platform will help you grow.</p>
 <p>Start today and build your digital future.</p>
 `;
}

/* ===== COURSES DATA ===== */
const chapters = {
 1: [

  // 1. Object Literal
  {
    t: "Object Literal",
    c: `let student = { name: "Ali", age: 20, major: "Computer Science" };
        console.log(student);`
  },

  
  // 2. Access using dot notation
  {
    t: "Dot Notation",
    c: `let student = { name: "Ali", age: 20 };
        console.log(student.name);
        console.log(student.age);`
  },

  // 3. Access using bracket notation
  {
    t: "Bracket Notation",
    c: `let student = { name: "Ali", age: 20 };
        console.log(student["name"]);
        console.log(student["age"]);`
  },

  // 4. Modify properties
  {
    t: "Modify Properties",
    c: `let student = { name: "Ali", age: 20 };
        student.age = 21;
        student["name"] = "Amina";
        console.log(student);`
  },

  // 5. Add new properties
  {
    t: "Add New Properties",
    c: `let student = { name: "Ali", age: 20 };
        student.phone = "0612345678";
        student["nationality"] = "Somali";
        console.log(student);`
  },

  // 6. Method inside object
  {
    t: "Object Method",
    c: `let student = {
          name: "Amina",
          greet: function() {
            console.log("Hello, my name is " + this.name);
          }
        };
        student.greet();`
  },

  // 7. Constructor Function
  {
    t: "Constructor Function",
    c: `function Student(name, age, major) {
          this.name = name;
          this.age = age;
          this.major = major;
        }
        let s1 = new Student("Ali", 20, "CS");
        let s2 = new Student("Amina", 22, "IT");
        console.log(s1);
        console.log(s2);`
  },

  // 8. Role of this
  {
    t: "Using this",
    c: `function Person(name) {
          this.name = name;
        }
        let p1 = new Person("Ali");
        let p2 = new Person("Amina");
        console.log(p1.name);
        console.log(p2.name);`
  },

  // 9. ES6 Class Syntax
  {
    t: "Class Syntax",
    c: `class Car {
          constructor(brand, year) {
            this.brand = brand;
            this.year = year;
          }
        }
        let car1 = new Car("Toyota", 2020);
        console.log(car1);`
  },

  // 10. for...in loop
  {
    t: "for...in Loop",
    c: `let student = { name: "Ali", age: 20, major: "CS" };
        for (let key in student) {
          console.log(key + ":", student[key]);
        }`
  },

  // 11. Object.entries()
  {
    t: "Object.entries",
    c: `let student = { name: "Ali", age: 20, major: "CS" };
        Object.entries(student).forEach(([key, value]) => {
          console.log(key, value);
        });`
  },

  // 12. Object.values()
  {
    t: "Object.values",
    c: `let student = { name: "Ali", age: 20, major: "CS" };
        console.log(Object.values(student));`
  },

  // 13. Object.keys()
  {
    t: "Object.keys",
    c: `let student = { name: "Ali", age: 20, major: "CS" };
        console.log(Object.keys(student));`
  },

  // 14. JSON.parse()
  {
    t: "JSON.parse",
    c: `let jsonData = '{"name":"Ali","age":20,"major":"CS"}';
        let obj = JSON.parse(jsonData);
        console.log(obj);`
  },

  // 15. JSON.stringify()
  {
    t: "JSON.stringify",
    c: `let student = { name: "Ali", age: 20, major: "CS" };
        let json = JSON.stringify(student);
        console.log(json);`
  }

 ]
};

// ================= CHAPTER 2 (Functions) =================
chapters[2] = [

 { t:"Simple Function",
   c:`function greet(){ console.log("Hello"); }
      greet();`
 },

 { t:"Function with Parameter",
   c:`function greet(name){ console.log("Hello "+name); }
      greet("Ali");`
 },

 { t:"Return Value",
   c:`function add(a,b){ return a+b; }
      console.log(add(5,3));`
 },

 { t:"Arrow Function",
   c:`const sum = (a,b)=>a+b;
      console.log(sum(4,6));`
 },

 { t:"Function Expression",
   c:`const greet=function(){ console.log("Hi"); }
      greet();`
 },

 { t:"Default Parameter",
   c:`function greet(name="Guest"){
        console.log("Hello "+name);
      }
      greet();
      greet("Amina");`
 },

 { t:"Scope",
   c:`let x=10;
      function test(){
        let y=5;
        console.log(x+y);
      }
      test();`
 },

 { t:"Callback",
   c:`function callMe(fn){
        fn();
      }
      callMe(()=>console.log("Called"));`
 },

 { t:"Anonymous Function",
   c:`setTimeout(function(){
        console.log("Timeout");
      },100);`
 },

 { t:"IIFE",
   c:`(function(){
        console.log("IIFE ran");
      })();`
 },

 { t:"Function in Object",
   c:`let user={
        name:"Ali",
        greet:function(){
          console.log("Hello "+this.name);
        }
      };
      user.greet();`
 },

 { t:"Rest Parameter",
   c:`function sum(...nums){
        let s=0;
        for(let n of nums) s+=n;
        console.log(s);
      }
      sum(1,2,3);`
 },

 { t:"Arguments Object",
   c:`function test(){
        console.log(arguments.length);
      }
      test(1,2,3);`
 },

 { t:"Return Function",
   c:`function make(){
        return function(){ console.log("Inner"); }
      }
      make()();`
 },

 { t:"Function Chain",
   c:`function a(){ console.log("A"); return b; }
      function b(){ console.log("B"); }
      a()();`
 }
];

// ================= CHAPTER 3  (DOM) =================
chapters[3] = [

  {
    t:"getElementById",
    c:`const p=document.createElement("p");
       p.id="content"; p.textContent="Hello DOM";
       document.body.append(p);
       const contentElement=document.getElementById("content");
       contentElement.style.background="blue";
       contentElement.style.color="white";
       console.log("Styled #content");`
  },

  {
    t:"getElementsByClassName",
    c:`const d1=document.createElement("div");
       d1.className="box"; d1.textContent="Box 1";
       const d2=document.createElement("div");
       d2.className="box"; d2.textContent="Box 2";
       document.body.append(d1,d2);
       const boxes=document.getElementsByClassName("box");
       for(let i=0;i<boxes.length;i++){
         boxes[i].style.border="2px solid red";
       }
       console.log("Boxes:",boxes.length);`
  },

  {
    t:"getElementsByTagName",
    c:`const p1=document.createElement("p"); p1.textContent="P1";
       const p2=document.createElement("p"); p2.textContent="P2";
       document.body.append(p1,p2);
       const ps=document.getElementsByTagName("p");
       for(let i=0;i<ps.length;i++){
         ps[i].style.color="green";
       }
       console.log("Paragraphs:",ps.length);`
  },

  {
    t:"querySelector(p)",
    c:`const p=document.createElement("p");
       p.textContent="First paragraph";
       document.body.append(p);
       console.log(document.querySelector("p"));`
  },

  {
    t:"querySelector(.box)",
    c:`const d=document.createElement("div");
       d.className="box"; d.textContent="Box";
       document.body.append(d);
       console.log(document.querySelector(".box"));`
  },

  {
    t:"querySelectorAll(p)",
    c:`for(let i=0;i<3;i++){
         const p=document.createElement("p");
         p.textContent="P"+(i+1);
         document.body.append(p);
       }
       console.log(document.querySelectorAll("p").length);`
  },

  {
    t:"querySelectorAll(div.box)",
    c:`for(let i=0;i<2;i++){
         const d=document.createElement("div");
         d.className="box"; d.textContent="Box"+(i+1);
         document.body.append(d);
       }
       console.log(document.querySelectorAll("div.box").length);`
  },

  {
    t:"innerHTML",
    c:`const d=document.createElement("div");
       d.id="myId"; d.innerHTML="<b>Bold Text</b>";
       document.body.append(d);
       console.log(document.getElementById("myId").innerHTML);`
  },

  {
    t:"Get href",
    c:`const a=document.createElement("a");
       a.id="link"; a.href="https://example.com";
       a.textContent="Example";
       document.body.append(a);
       console.log(document.getElementById("link").href);`
  },

  {
    t:"Change Style",
    c:`const p=document.createElement("p");
       p.textContent="Styled";
       document.body.append(p);
       p.style.color="blue";
       p.style.fontSize="20px";
       console.log("Style changed");`
  },

  {
    t:"innerText vs textContent",
    c:`const p=document.createElement("p");
       p.innerHTML="Hello <span>World</span>";
       document.body.append(p);
       console.log(p.innerText);
       console.log(p.textContent);`
  },

  {
    t:"setAttribute",
    c:`const a=document.createElement("a");
       a.textContent="Link";
       document.body.append(a);
       a.setAttribute("class","myLink");
       console.log(a.className);`
  },

  {
    t:"createElement",
    c:`const p=document.createElement("p");
       p.textContent="Created element";
       document.body.append(p);
       console.log("Element added");`
  },

  {
    t:"removeChild",
    c:`const div=document.createElement("div");
       const span=document.createElement("span");
       span.textContent="Remove me";
       div.append(span);
       document.body.append(div);
       div.removeChild(span);
       console.log("Span removed");`
  },

  {
    t:"replaceChild & insertBefore",
    c:`const parent=document.createElement("div");
       const oldP=document.createElement("p");
       oldP.textContent="Old";
       parent.append(oldP);
       document.body.append(parent);
       const newP=document.createElement("p");
       newP.textContent="New";
       parent.replaceChild(newP,oldP);
       const span=document.createElement("span");
       span.textContent="Inserted";
       parent.insertBefore(span,newP);
       console.log("Replace & Insert done");`
  }

];

/* ===== COURSES ===== */
function courses(){
 view.innerHTML="<h2>Courses</h2>";
 
 const map = {
   1: "Chapter 7",
   2: "Chapter 8",
   3: "Chapter 9"
 };

 [1,2,3].forEach(ch=>{
  const b=el("button");
  b.textContent = map[ch];
  b.style="margin:15px;padding:20px;background:#440E3;color:black; font-weight:bolder;border:none;border-radius:20px";
  b.onclick=()=>show(ch);
  view.append(b);
 });
}

function show(ch){
 const titleMap = {1:"Chapter 7",2:"Chapter 8",3:"Chapter 9"};
view.innerHTML="<h2>"+titleMap[ch]+"</h2>";
 chapters[ch].forEach(ex=>{
  const card=el("div");
  card.style="border:1px solid #ddd;padding:10px;margin:10px 0;border-radius:8px";
  card.innerHTML=`<b>${ex.t}</b><pre>${ex.c}</pre>`;
  const out=el("pre");
  const btn=el("button");
  btn.textContent="Run";
  btn.onclick=()=>{
   out.textContent="";
   try{
    new Function("console",ex.c)({log:(...a)=>out.textContent+=a.join(" ")+"\n"});
   }catch(e){out.textContent=e;}
  };
  card.append(btn,out);
  view.append(card);
 });
}
/* ===== ABOUT ===== */
function about(){
  // Halkan waxaan ku saxay magaca sawirkaaga
  const sawirka_salah = "image/ttr.jpg - Copy.jpeg"; 

  view.innerHTML = `
  <div style="display:flex; gap:25px; align-items:center; padding:20px; background:#fff; border-radius:15px; box-shadow:0 4px 10px rgba(0,0,0,0.1); font-family:Arial, sans-serif;">
    
    <div style="flex-shrink: 0;">
      <img src="${sawirka_salah}" alt="Salah Mohamed" 
           style="width:200px; height:200px; object-fit:cover; border-radius:15px; border:3px solid #007bff; box-shadow:0 5px 15px rgba(0,0,0,0.2)">
    </div>

    <div>
      <h2 style="margin:0 0 10px 0; color:#007bff; font-size:24px;">Salah Mohamed Abdullahi</h2>
      <p style="margin:5px 0;"><strong>ID:</strong> CS1500994</p>
      <p style="margin:5px 0;"><strong>Phone:</strong> +252611209269</p>
      <p style="margin:5px 0;"><strong>Email:</strong> salahmohamed@gmail.com</p>
      <p style="margin:5px 0;"><strong>University:</strong> JAZEERA UNIVERSITY</p>
      <p style="margin:5px 0;"><strong>Class:</strong> BATCH15A</p>
      <p style="margin:5px 0;"><strong>Skills:</strong> <span style="background:#e7f3ff; color:#007bff; padding:2px 8px; border-radius:4px; font-size:14px;">HTML, CSS, JS, SQL</span></p>
      
      <div style="margin-top:15px;">
        <a href="https://ratiocoffee.com/collections/machines" target="_blank" 
           style="text-decoration:none; background:#007bff; color:white; padding:8px 20px; border-radius:5px; font-weight:bold; display:inline-block;">
           Visit Ratio Coffee
        </a>
      </div>
    </div>

  </div>`;
}


/* ===== CONTACT ===== */
function contact(){
 view.innerHTML=`
 <form id="f" style="max-width:400px;margin:auto;display:flex;flex-direction:column;gap:10px">
  <input id="n" placeholder="Your name">
  <input id="e" placeholder="Email">
  <textarea id="m" placeholder="Message"></textarea>
  <button>Send</button>
 </form>s
 `;
 $("f").onsubmit=e=>{
  e.preventDefault();
  let ok=true;
  ["n","e","m"].forEach(id=>{
   const f=$(id);
   if(!f.value){f.style.border="2px solid red"; ok=false;}
   else f.style.border="";
  });
  if(ok) alert("Message sent successfully!");
 };
}

home();

})();