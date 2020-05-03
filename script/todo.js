const toDoForm = document.querySelector(".js-toDo"),
    toDoInput = toDoForm.querySelector("input");

const toDoList = document.querySelector(".js-toDoList");
const TODO_LS = "toDo";
var toDos = [];


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function filterFn(toDo){
        return toDo.id !== parseInt(li.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDo();
}
function saveToDo(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}
function paintingToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length +1;

    span.innerText = text;
    console.log(text);
    toDoInput.value = "";
    li.appendChild(delBtn);
    li.appendChild(span);
    
    toDoList.appendChild(li);
    li.id = newId;

    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    console.log(toDos);
    saveToDo();
}
function handlerSubmit(event){
    event.preventDefault();
    currentValue = toDoInput.value;
    paintingToDo(currentValue);

}
function loadToDo(){
    const toDoLS = localStorage.getItem(TODO_LS);
    function load(toDo){paintingToDo(toDo.text)}
    if(toDoLS){
        const parsedToDos = JSON.parse(toDoLS);
        parsedToDos.forEach(load);

    }
}
function init(){
    loadToDo();
    toDoForm.addEventListener("submit",handlerSubmit);

}
init();