const email = document.getElementById('email');
const error = document.getElementById('emailError');
const button = document.getElementById('subscribeBtn');
const buttonDismiss = document.getElementById('dismiss')
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');
const p = document.querySelector('#confirm');

email.addEventListener('input', validarEmail);

function validarEmail() {
  if (!email.checkValidity()) {
    error.innerText = "Valid email required";
    button.disabled = true;
    button.classList.remove('buttonHabi')
    button.classList.add('buttonDisab')
  } else if (email.value != "") {
    error.innerText = "";
    button.disabled = false;
    button.classList.add('buttonHabi')
    button.classList.remove('buttonDisab')
    
  } else {
    error.innerText = "";
    button.disabled = true;
    button.classList.remove('buttonHabi')
    button.classList.add('buttonDisab')
    
  }
}

const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
  
  
  const strong = document.createElement('strong');
  strong.innerText = email.value;

  p.innerHTML = 'A confirmation email has been sent to ';
  p.appendChild(strong); 
  p.innerHTML += '. Please open it and click the button inside to confirm your subscription.';
}

[button, buttonDismiss].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-confirm');

  buttonDismiss.addEventListener('click', function (event) {
      
      event.preventDefault();

      form.submit();
  });
});
