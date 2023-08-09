//Main Goal: Create a to-do list

/*
Goal 1:
 Create a task factory that takes the values 
 'title, description, dueDate, and priority'
 and stores the objects in a global array
*/
let currentProj;
export let taskArray = [0,1,2,3,4];
export let projectArray = [0,1];
export function loadPage()
{  projectArray[0] = {name: 'House Chores'};
   projectArray[1] = {name: 'School Stuff'};
   taskArray[0] = {title: 'Laundry', description:'Do your laundry!', dueDate:'today', priority: 3};
   taskArray[1] = {title:'Make Bed', description:'Make your bed!', dueDate:'today', priority:4};
   taskArray[2] = {title:'Dishes', description:'Do your dishes!', dueDate:'today', priority:5};
   taskArray[3] = {title:'Homework', description:'Finish your homework!', dueDate:'tomorrow',priority: 7};
   taskArray[4] = {title:'Quiz', description:'Study for your quiz!', dueDate:'Saturday', priority:8};
   const projcont = document.getElementById('projcont');
   const project1 = document.createElement('div');
   const project2 = document.createElement('div');
   const projbut1 = document.createElement('button');
   const projbut2 = document.createElement('button');
   const rmbutt1 = document.createElement('button');
   const name1 = document.createElement('div');
   name1.classList.add('projectname');
   const name2 = document.createElement('div');
   name2.classList.add('projectname');
   name1.innerHTML = 'House Chores';
   name2.innerHTML = 'School Stuff';
   rmbutt1.addEventListener('click', removeProject);
   rmbutt1.innerHTML = 'Remove Project';
   rmbutt1.classList.add('removeProject');
   const rmbutt2 = document.createElement('button');
   rmbutt2.addEventListener('click', removeProject);
   rmbutt2.innerHTML = 'Remove Project';
   rmbutt2.classList.add('removeProject');
   projbut1.innerHTML = 'New Task';
   projbut1.classList.add('taskbutton');
   projbut2.innerHTML = 'New Task';
   projbut2.classList.add('taskbutton');
   project1.appendChild(projbut1);
   project1.appendChild(rmbutt1);
   project1.appendChild(name1);
   project2.appendChild(projbut2);
   project2.appendChild(rmbutt2);
   project2.appendChild(name2);
   project1.classList.add('project');
   document.getElementById('form').style.display = 'none';
   document.getElementById('projform').style.display = 'none';
   for(let i=0;i<5;i++)
   {  
      const taskdiv = document.createElement('div');
      const titlediv = document.createElement('div');
      const descriptiondiv = document.createElement('div');
      const dueDatediv = document.createElement('div');
      const prioritydiv = document.createElement('div');
      const rmbutt = document.createElement('button');
      rmbutt.classList.add('removeTask');
      rmbutt.addEventListener('click', removeTask);
      titlediv.innerHTML = taskArray[i].title;
      descriptiondiv.innerHTML = taskArray[i].description;
      dueDatediv.innerHTML = taskArray[i].dueDate;
      prioritydiv.innerHTML = taskArray[i].priority;
      rmbutt.innerHTML = 'Remove'
      taskdiv.appendChild(titlediv);
      taskdiv.appendChild(descriptiondiv);
      taskdiv.appendChild(dueDatediv);
      taskdiv.appendChild(prioritydiv);
      taskdiv.appendChild(rmbutt);  
      if (i<3)
      {
         project1.appendChild(taskdiv)
      }else{
         project2.appendChild(taskdiv)
      }
   }
   project2.classList.add('project');
   projcont.appendChild(project1);
   projcont.appendChild(project2);
   return{
      taskArray, projectArray
   }
}

export function newProject(e)
{
   e.preventDefault();
   projectArray[projectArray.length] = {name: this.parentElement.newprojname.value };
   const projcont = document.getElementById('projcont');
   const newProj = document.createElement('div');
   const name = document.createElement('div');
   name.classList.add('projectname')
   name.innerHTML = projectArray[projectArray.length-1].name;
   const rmbutt = document.createElement('button');
   const newtask = document.createElement('button');
   newtask.classList.add('taskbutton');
   newtask.innerHTML = 'New Task';
   newtask.addEventListener('click', toggleTaskForm);
   rmbutt.addEventListener('click', removeProject);
   rmbutt.innerHTML = 'Remove Project';
   rmbutt.classList.add('removeProject');
   newProj.appendChild(name);
   newProj.appendChild(newtask);
   newProj.appendChild(rmbutt);
   newProj.classList.add('project');
   projcont.appendChild(newProj);
   console.log(projectArray);
}

export function removeProject()
{
   this.parentElement.remove()
}

export function newTask(e)
{  
   e.preventDefault();
   taskArray[taskArray.length] = {
      title: document.getElementById('formtitle').value,
      description: document.getElementById('formdescription').value,
      dueDate: document.getElementById('formdueDate').value,
      priority: document.getElementById('formpriority').value
   }
   const newtask = document.createElement('div');
   const title = document.createElement('div');
   const description = document.createElement('div');
   const dueDate = document.createElement('div');
   const priority = document.createElement('div');
   const rmbutt = document.createElement('button');
   rmbutt.addEventListener('click', removeTask);
   rmbutt.classList.add('removeTask');
   rmbutt.innerHTML = 'Remove';
   title.innerHTML = taskArray[taskArray.length-1].title;
   description.innerHTML = taskArray[taskArray.length-1].description;
   dueDate.innerHTML = taskArray[taskArray.length-1].dueDate;
   priority.innerHTML = taskArray[taskArray.length-1].priority;
   newtask.appendChild(rmbutt);
   newtask.appendChild(title);
   newtask.appendChild(description);
   newtask.appendChild(dueDate);
   newtask.appendChild(priority);
   currentProj.appendChild(newtask);
   console.log(taskArray)
}

function removeTask()
{
   this.parentElement.remove();
}

export function toggleTaskForm()
{
   const form = document.getElementById('form');
   currentProj = this.parentElement;
   if(form.style.display === 'none')
   {
      form.style.display = 'block';
   }
   else
   {
      form.style.display = 'none';
   }
}

export function toggleProjForm()
{
   console.log('working')
   const projForm = document.getElementById('projform');
   if (projForm.style.display === 'none')
   {
      projForm.style.display = 'block';
   }
   else
   {
      projForm.style.display = 'none';
   }
}

export function goHome()
{
   const projects = document.getElementsByClassName('project');
   for (let i=0;i<projectArray.length;i++)
   {  
      for(let j=0;j<projects[i].querySelectorAll('*').length-1;j++)
      {   
      projects[i].querySelectorAll(":not(.projectname)")[j].style.display = 'none';
      }
      const viewbutton = document.createElement('button');
      viewbutton.innerHTML = 'View Project'
      projects[i].appendChild(viewbutton);
   }
}

/*
Goal 2: Create a project factory that takes the
project name and stores the objects in a global
array 
*/

/*
Goal 3:
Make add/remove buttons for tasks and projects.
*/

/*
Goal 4:
Create a user interface that allows a home to
view all projects, view one specific project,
and go back to all projects.
*/

/*
Goal 5:
Make everything look pretty!
*/