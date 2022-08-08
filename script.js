let form = document.getElementById("form")
let textInput = document.getElementById("textInput")
let msg = document.getElementById("msg")
let dateInput = document.getElementById("dateInput")
let textarea = document.getElementById("textarea")

form.addEventListener("click",(e)=>{
    e.preventDefault()
    formValidation()

})

let formValidation = () =>{
    if(textInput.value===""){
        msg.innerHTML = "input can not be blank"
    }
    else{
        console.log("success");
        msg.innerHTML = ""
        acceptData()
    }
}

let data = {}

let acceptData = () =>{
    data["text"] = textInput.value
    dateInput["date"] = dateInput.value
    textarea["description"] = textarea.value

    console.log(data);

}

//1.36