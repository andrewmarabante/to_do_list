(()=>{"use strict";function e(e){return{name:e}}function t(e,t,n,d){return document.createElement("div"),console.log(this),{title:e,description:t,dueDate:n,priority:d}}let n=[0,1,2,3,4],d=[0,1];!function(n,d){d[0]=e("House Chores"),d[1]=e("School Stuff"),n[0]=t("Laundry","Do your laundry!","today",3),n[1]=t("Make Bed","Make your bed!","today",4),n[2]=t("Dishes","Do your dishes!","today",5),n[3]=t("Homework","Finish your homework!","tomorrow",7),n[4]=t("Quiz","Study for your quiz!","Saturday",8);const o=document.getElementById("projcont"),i=document.createElement("div"),a=document.createElement("div"),r=document.createElement("button"),c=document.createElement("button");r.innerHTML="New Task",r.classList.add("taskbutton"),c.innerHTML="New Task",c.classList.add("taskbutton"),i.appendChild(r),a.appendChild(c),i.classList.add("project");for(let e=0;e<5;e++){const t=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div");d.innerHTML=n[e].title,o.innerHTML=n[e].description,r.innerHTML=n[e].dueDate,c.innerHTML=n[e].priority,t.appendChild(d),t.appendChild(o),t.appendChild(r),t.appendChild(c),e<3?(i.appendChild(t),console.log("asd")):a.appendChild(t)}a.classList.add("project"),o.appendChild(i),o.appendChild(a)}(n,d),console.log(n,d);const o=document.getElementsByClassName("taskbutton");for(let e=0;e<o.length;e++)o[e].addEventListener("click",t);t(n[n.length])})();