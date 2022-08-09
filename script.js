let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let msg = document.getElementById("msg");
let textarea = document.getElementById("textarea");
let tasks = document.getElementById("tasks");
let addBtn = document.getElementById("addBtn");


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    formValidation()

});

let formValidation = () =>{
    if(textInput.value===""){
        msg.innerHTML = "input can not be blank"
    }
    else{
        console.log("success");
        msg.innerHTML = "";
        acceptData();

        addBtn.setAttribute("data-bs-dismiss", "modal")
        addBtn.click();

        (()=>{
            addBtn.setAttribute("data-bs-dismiss","")

        })()
    }
};

let data = {};

let acceptData = () =>{
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = textarea.value;
    console.log(data);
    createTask();

}

let createTask = () =>{
    tasks.innerHTML += `<div>
    <span>${data.text}</span>
    <span>${data.date}</span>
    <p>${data.description}</p>

    <span class="options">
        <i class="fa-solid fa-pen-to-square"></i>
        <i onClick="deleteTask(this)" class="fa-solid fa-delete-left"></i>
    </span>
    </div>`
    restForm()
}

let restForm = () =>{
     textInput.value = "";
     dateInput.value = "";
     textarea.value = "";
}

let deleteTask = (e) =>{
    e.parentElement.parentElement.remove()
    console.log("task delete");
}
