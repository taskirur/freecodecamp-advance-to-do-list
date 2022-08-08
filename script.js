let form = document.getElementById("form")
let textInput = document.getElementById("textInput")

form.addEventListener("click",(e)=>{
    e.preventDefault()
    formValidation()

})

let formValidation = () =>{
    if(textInput.value===""){
        console.log("please enter your text");
    }
    else{
        console.log("success");
    }
}

//1.28