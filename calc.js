let answer=document.getElementById('answer');
let button=document.getElementById('but');
let but1=document.getElementById('but1');
let truec=document.getElementById('true');
let falsec=document.getElementById('false');
let instruc=document.getElementById('instruc');
let mean_fon=document.getElementById('mean_fon');
let star=document.getElementById('star');
let final=document.getElementById('final');
let salut=document.getElementById('salut');
let fon_instruc=document.getElementById('fon_instruc');
let prozdiv=document.getElementById('prozdiv');
let prozimg=document.getElementById('prozimg');
let k=0;
let img1;
let img2;
let p;
let true_answer=1;
var a = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
var a1;
var b1;
var c1;
let photo;
let litter;
let num_litter;  
let right_answers_count=0;
let wrong_answers_count=0;
a1=a;
let sstart=Date.now();
let choice="percent/";
let count=0; 
let last=0;

document.getElementById('inputFile').onchange = function(){
last=1;
prozdiv.hidden=true;
    var reader = new FileReader();
    count++;
    reader.onload = function(e){
      a=e.target.result.split(' ');
      //words=e.target.result.split("*");
    choice="images/";
      num_litter=random(0,a.length-1);
  true_answer=a[num_litter];
  a.splice(num_litter,1);
  photo=choice+true_answer+".png";
document.getElementById("10").src=photo;
    }
    reader.readAsText(this.files[0]);
}
function for_read(){
  alert("Щоб розмістити свої завдання, оберіть файл в якому записані відповіді до завдань через пропуск. Самі завдання збережіть як картинку форматом png у папці images. У назві картинки повинна міститись відповідь до завдання. Наприклад: '10.png' ");
}

function startgame(){
  
  document.getElementById("inputFile").style.visibility="hidden";
  document.getElementById("but_reader").style.visibility="hidden";
  sstart=Date.now();
let start = Date.now(); 
let timer = setInterval(function() {
  let timePassed = Date.now() - start;
  if (timePassed >= 1000) {
    clearInterval(timer); 
    document.getElementById("but1").style.visibility = "hidden";
    mean_fon.hidden=true;
   

  }
mean_fon.style.top=0+timePassed +"px";
but1.style.top=70+timePassed+ 'px';
}, 2);

}


function remove_inst1(){
prozdiv.hidden=true;
prozimg.hidden=true;
}

 answer.addEventListener("keyup", function(event) {
  event.preventDefault;
  if(event.keyCode==13)
    { button.click();}
});




  num_litter=random(0,a.length-1);
  true_answer=a[num_litter];
  a.splice(num_litter,1);
  photo=choice+true_answer+".png";
document.getElementById("10").src=photo;
  


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  
}


function yes(x){
  document.getElementById("true").src="true1.png";
  let time=Date.now();
  let inter=setInterval(SetImage, 1000);
  function SetImage() {
  let time1=Date.now()-time;
  if(time1>=1000) {document.getElementById("true").src="true.png";clearInterval(inter); }
  else  document.getElementById("true").src="true1.png";
}
	img1=x+"level";
	img2=x+"level1.png";
  document.getElementById(img1).src=img2;
  }

function no(x){
  document.getElementById("false").src="false1.png";
  let time=Date.now();
  let inter=setInterval(SetImage, 1000);
  function SetImage() {
  let time1=Date.now()-time;
  if(time1>=1000) {document.getElementById("false").src="false.png";
      clearInterval(inter); }
  else  document.getElementById("false").src="false1.png";
}
 img1=x+"level";
  img2=x+"level2.png";
  document.getElementById(img1).src=img2;	
}


button.onclick=function(){
    
     p=parseFloat(answer.value);
     if(p==true_answer) {k++;if(k<16) yes(k); right_answers_count++; }
     else if(answer.value!=""){k++;if(k<16)no(k);wrong_answers_count++;}
      if(k==15){     
       end();
    }
    if(answer.value!="" && k>0)
    {
    	num_litter=random(0,a.length-1);
     true_answer=a[num_litter];
     a.splice(num_litter,1);
     photo=choice+true_answer+".png";
     document.getElementById("10").src=photo;
  
    }
   
       if(k==5)document.getElementById("help").hidden = true;
     answer.value=""; 
}

function end(){
   let m=0;
   k=0;
   document.getElementById("last_screen").style.visibility="visible";
   let s=((Date.now()-sstart)/1000).toFixed();
   if(s>59){m=Math.trunc(s/60);s-=m*60;}
   if(m<10)m='0'+m;
   if(s<10)s='0'+s;
   document.getElementById("timer").value=m+' : '+s;
   document.getElementById("count_true").value=document.getElementById("count_true").value+right_answers_count;
   document.getElementById("count_false").value=document.getElementById("count_false").value+wrong_answers_count;
   if (right_answers_count==0) {right_answers_count=1;}
   document.getElementById("mark").value=(right_answers_count*12/15).toFixed();
   
}

let restart=document.getElementById("restart");

restart.onclick=function(){
  location.reload();
}





