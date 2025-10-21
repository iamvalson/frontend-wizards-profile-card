const form = document.getElementById("form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let isValid = true;

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Error variables
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const subjectError = document.getElementById("subject-error");
  const messageError = document.getElementById("message-error");

  if(!name){
    nameError.innerText = "Full name is required";
    nameError.style.display = "block"
  } else {
    nameError.style.display = "none"
  }

  if(!email){
    emailError.innerText = "Email is required";
    emailError.style.display = "block"
  } else{
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(pattern.test(email) !== true){
        isValid = false;
        emailError.innerText = "Please enter a valid email address."
    } else{
        emailError.style.display = "none"
    }
  }

  if(!subject){
    subjectError.innerText = "Subject is required";
    subjectError.style.display = "block"
  } else {
    subjectError.style.display = "none"
  }

  if(!message){
    messageError.innerText = "Message is required";
    messageError.style.display = "block"
  } else{
    if(message.length < 10){
        isValid = false;
        messageError.innerText = "Your message must be at least 10 characters"
    } else{
        messageError.style.display = "none"
    }
  }

  
  if(isValid){
    form.reset();
    successMessage.style.display = "block";
    setTimeout(()=>{
        successMessage.style.display = "none";
    }, 3000);
  }  
}
