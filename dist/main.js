(()=>{"use strict";function e(e){return{name:e}}function t(e,t,o,n){return console.log("working"),{title:e,description:t,dueDate:o,priority:n}}let o=[0,1,2,3,4],n=[0,1];!function(o,n){n[0]=e("House Chores"),n[1]=e("School Stuff"),o[0]=t("Laundry","Do your laundry!","today",3),o[1]=t("Make Bed","Make your bed!","today",4),o[2]=t("Dishes","Do your dishes!","today",5),o[3]=t("Homework","Finish your homework!","tomorrow",7),o[4]=t("Quiz","Study for your quiz!","Saturday",8);const d=document.getElementById("projcont"),i=document.createElement("div"),r=document.createElement("div");i.classList.add("project");for(let e=0;e<5;e++){const t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div");n.innerHTML=o[e].title,d.innerHTML=o[e].description,a.innerHTML=o[e].dueDate,c.innerHTML=o[e].priority,t.appendChild(n),t.appendChild(d),t.appendChild(a),t.appendChild(c),e<3?(i.appendChild(t),console.log("asd")):r.appendChild(t)}r.classList.add("project"),d.appendChild(i),d.appendChild(r)}(o,n),console.log(o,n)})();