//Main Goal: Create a to-do list
//should probably initialize some stuff first.
import { loadPage } from "./dom";
let taskArray = [0,1,2,3,4];
let projectArray = [0,1];
loadPage(taskArray, projectArray);
console.log(taskArray, projectArray);
/*
Goal 1:
 Create a task factory that takes the values 
 'title, description, dueDate, and priority'
 and stores the objects in a global array
*/
import { newTask } from "./dom"
const taskbuttons = document.getElementsByClassName('taskbutton');
for (let i=0; i<taskbuttons.length; i++)
{
    taskbuttons[i].addEventListener('click', newTask);
}
newTask(taskArray[taskArray.length]);

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