const input = document.getElementById("input");
const enter = document.getElementById("enter");
const tasks = document.querySelector(".sTask");

function addTask(){
    const text = input.value;
    if(text === "") return;

    const taskElement  = document.createElement('p');
    taskElement.innerHTML = `<span class="task-text">${text}</span>
                             <button class="margin" id="done">&#10003;</button>
                             <button id="remove">&#10006;</button>`

    taskElement.querySelector('#done').addEventListener("click",Done);
    taskElement.querySelector('#remove').addEventListener("click",Remove);

    tasks.appendChild(taskElement);

    input.value = '';
}

function Done(){
    const task = event.target.closest('p');
    task.style.textDecoration = 'line-through';
    task.querySelector('#done').disabled = true;
}

function Remove(){
    const task = event.target.closest('p');
    task.remove();
}

input.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        addTask();
    }
});
enter.addEventListener('click', addTask);

