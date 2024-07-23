// const con = document.getElementsByClassName("con");
// console.log(con);
let btn=document.getElementById("a122");
function skill(){
    let btn=document.getElementById("a121");
    con.innerHTML=
    `<h1 style="color:aliceblue;">Skills</h1>
    <div class="skill1">
    <div class="con2">  
    <ul class="ul1">
      <li>HTML</li>
      <li>CSS</li>
      <li>JAVASCRIPT</li>
      <li>PHP</li>
      <li>MYSQL</li>
      <li>MongoDb</li>
      <li>Express</li>
      <li>REACT JS</li>
      <li>NODE-JS</li>
      <li>React-Native</li>
      <li></li>
    </ul>
    <ul class="ul1">
      <li>PYTHON</li>
      <li>C</li>
      <li>Java</li>
      <li>C++</li>
      <li></li>
    </ul>
    </div>
    </div>`
}
function experience(){
    let btn=document.getElementById("a122");
    con.innerHTML=
    `<h1 style="color:aliceblue;">Experience</h1>
    <ul class="ul1" >
    <li><p>• 1 month internship experience as Mobile App Developer in Oasis Infobyte. <a style="color: rgba(255, 179, 37, 0.696);" href="https://github.com/amanchandra100/OIBSIP-To-Do-App" target="main">Project 1</a> <a style="color: rgba(255, 179, 37, 0.696);" href="https://github.com/amanchandra100/OIBSIP-Calculator-App" target="main">Project 2</a> <a style="color: rgba(255, 179, 37, 0.696);" href="https://github.com/amanchandra100/OIBSIP-Unit-Converter-App" target="main">Project 3</a></p></li>
    <li><p>• 1 month internship experience as Web Developer in Codeclause. <a style="color: rgba(255, 179, 37, 0.696);" href="https://github.com/amanchandra100/CodeClauseInternship_Basic_Chat_App" target="main">Project 1</a> <a style="color: rgba(255, 179, 37, 0.696);" href="https://github.com/amanchandra100/CodeClauseInternship_News_Portal" target="main">Project 2</a> <a style="color: rgba(255, 179, 37, 0.696);" href="https://github.com/amanchandra100/CodeClauseInternship_Basic_Text_Editor" target="main">Project 3</a></p></li>
    <li><p>• 6 month internship experience as Web Developer in Predulive Labs. <a style="color: rgba(255, 179, 37, 0.696);" href="https://betaecom.onrender.com/" target="main">Project Link</a></p></li>
    <li><p>• 1 month internship experience as Web Developer in The Sparks Foundation. <a style="color: rgba(255, 179, 37, 0.696);" href="https://github.com/amanchandra100/Spark_Foundation_Task1" target="main">Project Link</a></p></li>
    <li><p>• 1 month internship experience as Web Developer in Oasis Infobyte. <a style="color: rgba(255, 179, 37, 0.696);" href="https://amanchandra100.github.io/OIBSIP-To-Do-Webapp/" target="main">Project 1</a> <a style="color: rgba(255, 179, 37, 0.696);" href="https://amanchandra100.github.io/OIBSIP-Calculator/" target="main">Project 2</a> <a style="color: rgba(255, 179, 37, 0.696);" href="https://amanchandra100.github.io/OIBSIP-Tribute-page/" target="main">Project 3</a></p></li>
    </ul>`
}
function education(){
    let btn=document.getElementById("a123");
    con.innerHTML=
    `<h1 style="color:aliceblue;">Education</h1>
    <ul class="ul1">
    <li><p style="color:red;"><u>2021-2025</u></p></li>
    <li><p>• Currently pursuing BTECH from branch CSE from BBDNIIT LUCKNOW.</p></li>
    <li><p style="color:red;"><u>2020</u></p></li>
    <li><p>• Completed 12th from KVS Gomtinagar Lucknow(2020).</p></li>
    <li><p style="color:red;"><u>2018</u></p></li>
    <li><p>• Completed 10th from KVS Gomtinagar Lucknow(2018).</p></li>
    </ul>`
}


function submit1(){
  alert("This function is not working now. Use email")
  // var name=document.getElementById("input12").values;
  // console.log(name);
}


// function onLoadFunctions() {
//   alert("frg")
//   const logo = document.getElementById("imggCon")
//   logo.innerHTML=
//   `<img src="./Resources/photo.jpg" loading="lazy" alt="logo" class="img1" />`

      
// }





var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff; }";
  document.body.appendChild(css);
};








const nav = document.querySelector(".nav1")

window.onscroll = function() {
  // Check if the user has scrolled down 500 pixels from the top of the document
  if (window.scrollY >= 30) {
    // nav.style.background ="#24292f";
    nav.style.background ="linear-gradient(to right, rgba(106, 17, 203, 0.9), rgba(37, 117, 252, 0.9) )";
  }
  else {
    nav.style.background ="";
  }
   
  
};



// ====================================================================

function displaynav(){
  const nav33 =document.querySelector(".nav33")
  const divmobile0 = document.querySelector(".divmobile0")
  nav33.classList.toggle("givewidth")
  divmobile0.classList.toggle("open")
  // if (nav33.style.visibility=="hidden") {
  //   nav33.style.visibility="visible"
  //   nav33.classList.toggle("givewidth")
  //   divmobile0.classList.toggle("open")

  // } else {
  //   nav33.style.visibility="hidden"
  //   nav33.classList.toggle("givewidth")
  //   divmobile0.classList.toggle("open")
  // }
  
  // alert("hi")
}

