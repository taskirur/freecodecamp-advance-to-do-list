let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let msg = document.getElementById("msg");
let textarea = document.getElementById("textarea");
let tasks = document.getElementById("tasks");
let addBtn = document.getElementById("addBtn");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formValidation();

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

let data = [{

}]

let acceptData = () =>{
    data.push({
        text: textInput.value,
        date: textInput.value,
        description: textInput.value,
    })
    localStorage.setItem("data",JSON.stringify(data))
    

    createTask();

};

let createTask = () =>{
    tasks.innerHTML = "";
    data.map((x,y)=>{
        return tasks.innerHTML += `<div id=${y}>
        <span>${x.text}</span>
        <span>${x.date}</span>
        <p>${x.description}</p>
    
        <span class="options">
            <i onClick="editTask(this)" class="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#form"></i>
            <i onClick="deleteTask(this)" class="fa-solid fa-delete-left"></i>
        </span>
        </div>`

    })
    
    restForm()
};

let restForm = () =>{
     textInput.value = "";
     dateInput.value = "";
     textarea.value = "";
};

let deleteTask = (e) =>{
    e.parentElement.parentElement.remove();
    
    data.splice(e.parentElement.parentElement.id,1)
    localStorage.setItem("data",JSON.stringify(data))

};

let editTask = (e) =>{
    let selectedTask = e.parentElement.parentElement;
    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;

    
    deleteTask(e)

};

(()=>{
    data = JSON.parse((localStorage.getItem("data")));
    console.log(data);
    createTask();
})()


//2.17