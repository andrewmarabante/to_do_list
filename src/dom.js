
export function loadPage()
{
    

    for(let i=0; i<5;i++)
    {
        const project = new Project(i);
    }
}

export class Project
{
    constructor(name)
    {
        const content = document.getElementById('content')
        const project = document.createElement('div');
        const taskbutton = document.createElement('button');
        taskbutton.innerHTML = 'New Task';
        taskbutton.addEventListener('click', newTask);
        content.appendChild(project);
        project.appendChild(taskbutton);
        console.log(name);
    }
}

export function newTask()
{
    const task = document.createElement('div');
    task.classList.add('task');
    this.parentElement.appendChild(task);
    console.log('Working')
}