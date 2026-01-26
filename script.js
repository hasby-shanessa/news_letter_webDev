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

    const localPart = parts[0];
    const domainPart = parts[1];

    if (localPart.length < 1) {
        return false;
    }

    const validLocalChars = /^[a-zA-Z0-9._-]+$/;
    if (!validLocalChars.test(localPart)) {
        return false;
    }

    if (localPart.startsWith('.') || localPart.endsWith('.')) {
        return false;
    }

    if (!domainPart.includes('.')) {
        return false;
    }

    const domainParts = domainPart.split('.');

    if (domainParts.length < 2) {
        return false;
    }

    const validDomainChars = /^[a-zA-Z0-9-]+$/;
    for (let i = 0; i < domainParts.length; i++) {
        if (!validDomainChars.test(domainParts[i])) {
            return false;
        }
    }

    const domain = domainParts[0];
    const extension = domainParts[domainParts.length - 1];

    if (domain.length < 2) {
        return false;
    }

    if (extension.length < 2) {
        return false;
    }

    const lettersOnly = /^[a-zA-Z]+$/;
    if (!lettersOnly.test(extension)) {
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