const form = document.querySelector('#task-form');
const todoList = document.querySelector('#todo-lane');
const val = document.querySelectorAll(".tasks");
 form.addEventListener('submit',(event) =>{
    event.preventDefault();

    //capturing user input
    const tasks = event.target[0].value;

    if(tasks.length){

    //creation of html tags
    const div = document.createElement('div');
    const para = document.createElement('p');

    //specifying attributes and content to newly added html tags
    para.innerText = tasks;
    div.classList.add('tasks');
    div.setAttribute('draggable','true');

    //appending the html tags accordingly
    div.appendChild(para);
    todoList.appendChild(div);

    event.target[0].value = "";
}

else{
    alert('Your task cannot be empty');
}
 });

 val.forEach((tasks) => {
    tasks.addEventListener('dragstart',() => tasks.classList.add('is-dragging'));
    tasks.addEventListener('dragend', () => tasks.classList.remove('is-dragging'));
 })