const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;



function vlidateForm(){
    isValid=form.checkValidity();

    if(!isValid){
        message.textContent= "Please fill out all fields";
        message.style.color = 'orangered';
        messageContainer.style.borderColor = 'orangered';
        return;
    }
    if(password1El.value === password2El.value){

        passwordsMatch=true;
        password1El.style.borderColor = '#1bab5b';
        password2El.style.borderColor = '#1bab5b';
    }else{

        passwordsMatch=false;
        password1El.style.borderColor = 'orangered';
        password2El.style.borderColor = 'orangered';
        message.textContent= "Make sure passwords match";
        message.style.color = 'orangered';
        messageContainer.style.borderColor = 'orangered';
        return;
    }

    if(isValid && passwordsMatch){
        message.textContent= "Successfully Registered";
        message.style.color = '#1bab5b';
        messageContainer.style.borderColor = '#303030';
    }
}

function storeFormData(){
    const user ={
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };

}


function processFormData(e){
    e.preventDefault();
    vlidateForm()
    if(isValid && passwordsMatch){
        storeFormData();
    }
}


// Event Listner
form.addEventListener('submit', processFormData);
