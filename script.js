// Getting elements we need

const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const emailGroup = document.getElementById('email-group');
const modal = document.getElementById('modal');
const confirmEmail = document.getElementById('confirm-email');
const dismissBtn = document.getElementById('dismiss-btn');

function isValidEmail(email){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function showError() {
    emailGroup.classList.add('error');
}

function hideError() {
    emailGroup.classList.remove('error');
}

function showModal(email){
    confirmEmail.textContent = email;
    modal.classList.add('active')
}

function hideModal() {
    modal.classList.remove('active');
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    const email = emailInput.ariaValueMax.trim();

    if (email === ''){
        showError();
        return;
    }
    if(!isValidEmail(email)){
        showError();
        return;
    }
    hideError();
    showModal(email);
});

emailInput.addEventListener('input', function(){
    hideError();
});

dismissBtn.addEventListener('click', function() {
    hideModal();
    form.reset();
});