const name = document.querySelector(".target"),
    nameInput = document.querySelector(".js-name");
    realInput = nameInput.querySelector("input");
const NAME_LS = "USERNAME";

function handleSubmit(event){
    event.preventDefault();
    const pushName = realInput.value;
    console.log(pushName);
    showName(pushName);
    localStorage.setItem(NAME_LS,pushName);


} 

function askName(){
    
    nameInput.classList.remove("hide");
    nameInput.classList.add("show");
    nameInput.addEventListener("submit", handleSubmit);
    
}

function showName(text){
    nameInput.classList.remove("show");
    nameInput.classList.add("hide");
    name.classList.add("show");
    name.innerHTML = `Hello ${text}`;
}



function loadName(){
    const currentValue = localStorage.getItem(NAME_LS);

    if(currentValue===null){
        askName();
    }
    else{
        showName(currentValue);
    }
}

function init(){
    loadName();
    
}
init();
