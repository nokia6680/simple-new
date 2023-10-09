function validationTel() {
    let tel = document.getElementById('tel').value;
    let input = document.querySelector('.js-phone-input');
    let patternTel = /^((\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\-]{7,10}$/;

    if (tel.match(patternTel)) {
        input.classList.remove('error');
        input.classList.add('valid');

    } else {
        input.classList.add('error');
        input.classList.remove('valid');
    }

    if (tel == '+') {
        input.classList.remove('error');
        input.classList.remove('valid');
    }

    if (tel == '') {
        input.classList.remove('error');
        input.classList.remove('valid');
    }

    if (tel == '+7 (') {
        input.classList.remove('error');
        input.classList.remove('valid');
    }
};

function validationMail() {
    var email = document.querySelector('.js-mail-input').value;
    var emailInput = document.querySelector('.js-mail-input');
    var patternMail = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

    if (email == '') {
        emailInput.classList.remove('error');
        emailInput.classList.remove('valid');
        return false;
    }

    if (email.match(patternMail)) {
        emailInput.classList.remove('error');
        emailInput.classList.add('valid');
    } else {
        emailInput.classList.add('error');
        emailInput.classList.remove('valid');
    }
}