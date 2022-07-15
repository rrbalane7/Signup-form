//Selecting HTML elements for DOM manipulation
const passW = document.querySelector("#password")
const confirmPass = document.querySelector("#confirm-pass")
const errorMsg = document.querySelector("#error-msg")
const form = document.querySelector("#my-form")

// Manually adding submit event to the form for Password Matching Validation
form.addEventListener("submit",validateThenSubmit)

function validateThenSubmit(e){
    if (passW.value !== confirmPass.value){
        e.preventDefault();
        if (errorMsg.textContent === "*Password do not match!"){
            return
        } else{
            const msg = document.createTextNode("*Password do not match!");
            errorMsg.appendChild(msg);
            errorMsg.style.color = "red";
            errorMsg.style.fontSize = "0.8em";
            passW.style.borderColor = "red";
            confirmPass.style.borderColor = "red";
        }

    }
    
}