(()=>{"use strict";let e;function t(e){return{name:e}}function n(e,t,n,o){return document.createElement("div"),console.log(this),{title:e,description:t,dueDate:n,priority:o}}function o(){const t=document.getElementById("form");e=this.parentElement,"none"===t.style.display?t.style.display="block":t.style.display="none"}let d=[0,1,2,3,4],i=[0,1];!function(e,o){o[0]=t("House Chores"),o[1]=t("School Stuff"),e[0]=n("Laundry","Do your laundry!","today",3),e[1]=n("Make Bed","Make your bed!","today",4),e[2]=n("Dishes","Do your dishes!","today",5),e[3]=n("Homework","Finish your homework!","tomorrow",7),e[4]=n("Quiz","Study for your quiz!","Saturday",8);const d=document.getElementById("projcont"),i=document.createElement("div"),l=document.createElement("div"),c=document.createElement("button"),a=document.createElement("button");c.innerHTML="New Task",c.classList.add("taskbutton"),a.innerHTML="New Task",a.classList.add("taskbutton"),i.appendChild(c),l.appendChild(a),i.classList.add("project"),document.getElementById("form").style.display="none";for(let t=0;t<5;t++){const n=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),a=document.createElement("div");o.innerHTML=e[t].title,d.innerHTML=e[t].description,c.innerHTML=e[t].dueDate,a.innerHTML=e[t].priority,n.appendChild(o),n.appendChild(d),n.appendChild(c),n.appendChild(a),t<3?(i.appendChild(n),console.log("asd")):l.appendChild(n)}l.classList.add("project"),d.appendChild(i),d.appendChild(l)}(d,i),console.log(d,i);const l=document.getElementsByClassName("taskbutton");for(let e=0;e<l.length;e++)l[e].addEventListener("click",o);document.getElementById("check").addEventListener("click",(function(){console.log(e)}))})();