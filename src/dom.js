//Main Goal: Create a to-do list

/*
Goal 1:
 Create a task factory that takes the values 
 'title, description, dueDate, and priority'
 and stores the objects in a global array
*/
let currentProj;
export function loadPage(taskArray, projectArray)
{  projectArray[0] = newProject('House Chores');
   projectArray[1] = newProject('School Stuff');
   taskArray[0] = newTask('Laundry', 'Do your laundry!', 'today', 3);
   taskArray[1] = newTask('Make Bed', 'Make your bed!', 'today', 4);
   taskArray[2] = newTask('Dishes', 'Do your dishes!', 'today', 5);
   taskArray[3] = newTask('Homework', 'Finish your homework!', 'tomorrow', 7);
   taskArray[4] = newTask('Quiz', 'Study for your quiz!', 'Saturday', 8);
   const projcont = document.getElementById('projcont');
   const project1 = document.createElement('div');
   const project2 = document.createElement('div');
   const projbut1 = document.createElement('button');
   const projbut2 = document.createElement('button');
   projbut1.innerHTML = 'New Task';
   projbut1.classList.add('taskbutton');
   projbut2.innerHTML = 'New Task';
   projbut2.classList.add('taskbutton');
   project1.appendChild(projbut1);
   project2.appendChild(projbut2);
   project1.classList.add('project');
   document.getElementById('form').style.display = 'none';
   for(let i=0;i<5;i++)
   {  
      const taskdiv = document.createElement('div');
      const titlediv = document.createElement('div');
      const descriptiondiv = document.createElement('div');
      const dueDatediv = document.createElement('div');
      const prioritydiv = document.createElement('div');
      titlediv.innerHTML = taskArray[i].title;
      descriptiondiv.innerHTML = taskArray[i].description;
      dueDatediv.innerHTML = taskArray[i].dueDate;
      prioritydiv.innerHTML = taskArray[i].priority;
      taskdiv.appendChild(titlediv);
      taskdiv.appendChild(descriptiondiv);
      taskdiv.appendChild(dueDatediv);
      taskdiv.appendChild(prioritydiv);
      if (i<3)
      {
         project1.appendChild(taskdiv)
         console.log('asd')
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

export function newProject(name)
{
   return{
   name: name
   }
}

export function newTask(title,description,dueDate,priority)
{  
   const task = document.createElement('div');
   console.log(this);

   return{
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
   }
}

export function checkFunc(){
   console.log(currentProj)
}

export function toggleForm()
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