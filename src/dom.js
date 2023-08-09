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
   const viewbutton1 = document.createElement('button');
   viewbutton1.classList.add('view');
   viewbutton1.innerHTML = 'View Project';
   viewbutton1.addEventListener('click', viewProject)
   project1.appendChild(viewbutton1);
   const viewbutton2 = document.createElement('button');
   viewbutton2.classList.add('view');
   viewbutton2.innerHTML = 'View Project';
   viewbutton2.addEventListener('click', viewProject)
   project2.appendChild(viewbutton2);
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
   goHome();
}

export function newProject(e)
{
   e.preventDefault();
   projectArray[projectArray.length] = {name: this.parentElement.newprojname.value };
   const projcont = document.getElementById('projcont');
   const newProj = document.createElement('div');
   const name = document.createElement('div');
   const viewbutton = document.createElement('button');
   viewbutton.classList.add('view');
   viewbutton.innerHTML = 'View Project'
   viewbutton.addEventListener('click', viewProject)
   newProj.appendChild(viewbutton);
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
   goHome();
}

export function removeProject()
{
   this.parentElement.remove()
   projectArray.pop();
   goHome();
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
   const projcont = document.getElementById('projcont');
   projcont.style.display = 'grid';
   projcont.style.gridTemplateColumns = '3, auto';
   projcont.style.gridTemplateRows = 'auto auto';
   projcont.style.justifyContent = '';
   projcont.style.alignItems = '';
   console.log(projcont.querySelectorAll('*').length)
   for (let i=0;i<projectArray.length;i++)
   {    
      projects[i].style.display = 'block';
      projects[i].querySelector('.view').style.display = 'block';
      projects[i].style.minHeight = '10em';
      projects[i].style.maxHeight = '10em';
      projects[i].style.width = 'auto';
      
   }
   for (let i=0;i<projectArray.length;i++)
   {  
      for(let j=0;j<projects[i].querySelectorAll('*').length-2;j++)
      {   
      projects[i].querySelectorAll("*:not(.view):not(.projectname)")[j].style.display = 'none';
      }
   }
}

function viewProject(e){
   e.preventDefault();
   const projcont = document.getElementById('projcont');
   for (let i=0;i<=projcont.childElementCount-1;i++)
   projcont.childNodes[i].style.display = 'none';
   projcont.style.display = 'flex';
   projcont.style.justifyContent = 'center';
   projcont.style.alignItems = 'center';
   projcont.style.minHeight = '30em'
   projcont.style.minWidth = '30em'
   this.parentElement.style.display = 'flex';
   this.parentElement.style.gap = '2em';
   this.parentElement.style.flexDirection = 'column';
   this.parentElement.style.justifyContent = '';
   this.parentElement.style.alignItems = 'center';
   this.parentElement.style.minHeight = '25em';
   this.parentElement.style.width = '20em';
   console.log(this.parentElement.childElementCount)
   for(let i=0; i<this.parentElement.querySelectorAll('*').length; i++)
   {
      this.parentElement.querySelectorAll('*')[i].style.display = 'block';
   }
   this.style.display = 'none';

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