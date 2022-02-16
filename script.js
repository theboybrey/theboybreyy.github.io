const form = document.getElementById("form"),
    username = document.getElementById("username"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    password2 = document.getElementById("password2");

form.addEventListener("submit", (e) =>{

})

//Check Required fields

function checkRequired(inputAll){
    inputAll.forEach((input) => {
        if(input.value.trim()===  ""){
            showError(input, `${getFieldName(input)} is required`);
        }
        else{
            showSuccess(input);
        }
    })
}


//Show Error Message

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;

}

//Show Success Message to the user

function showSuccess(input){
    const formConrol = input.parentElement;
    formControl.className = "form-control success";
}

//Het Field Name For the 
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1);
}
