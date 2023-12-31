//Main Goal: Create a to-do list
//should probably initialize some stuff first.
import {
  loadPage,
  toggleTaskForm,
  newTask,
  taskArray,
  projectArray,
  newProject,
  toggleProjForm,
  goHome,
} from "./dom";
document.getElementById("tasksubmit").addEventListener("click", newTask);
document.getElementById("newProject").addEventListener("click", toggleProjForm);
document.getElementById("projsubmit").addEventListener("click", newProject);
document.getElementById("home").addEventListener("click", goHome);
loadPage();
/*
Goal 1:
 Create a task factory that takes the values 
 'title, description, dueDate, and priority'
 and stores the objects in a global array
*/
const taskbuttons = document.getElementsByClassName("taskbutton");
for (let i = 0; i < taskbuttons.length; i++) {
  taskbuttons[i].addEventListener("click", toggleTaskForm);
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
