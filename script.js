const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const emailGroup = document.getElementById('email-group');
const modal = document.getElementById('modal');
const confirmEmail = document.getElementById('confirm-email');
const dismissBtn = document.getElementById('dismiss-btn');

function isValidEmail(email) {
    if (!email.includes('@')) {
        return false;
    }
    
    const parts = email.split('@');
    
    if (parts.length !== 2) {
        return false;
    }
    
    const beforeAt = parts[0];
    const afterAt = parts[1];
    
    if (beforeAt.length < 1) {
        return false;
    }
    
    if (!afterAt.includes('.')) {
        return false;
    }
    
    const domainParts = afterAt.split('.');
    
    if (domainParts.length < 2) {
        return false;
    }
    
    const domain = domainParts[0];
    const extension = domainParts[domainParts.length - 1];
    
    if (domain.length < 2) {
        return false;
    }
    
    if (extension.length < 2) {
        return false;
    }
    
    return true;
}

function showError() {
    emailGroup.classList.add('error');
}

function hideError() {
    emailGroup.classList.remove('error');
}

function showModal(email) {
    confirmEmail.textContent = email;
    modal.classList.add('active');
}

function hideModal() {
    modal.classList.remove('active');
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = emailInput.value.trim();
    
    if (email === '') {
        showError();
        return;
    }
    
    if (!isValidEmail(email)) {
        showError();
        return;
    }
    
    hideError();
    showModal(email);
});

emailInput.addEventListener('input', function() {
    hideError();
});

dismissBtn.addEventListener('click', function() {
    hideModal();
    form.reset();
});