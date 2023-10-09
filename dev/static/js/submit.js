let form = document.querySelector('.callback__form');
let formWrapper = document.querySelector('.callback');
let formSubmit = document.querySelector('.callback__submit');
let formInput = document.getElementById('name');
let formMessage = document.querySelector('.callback__title');

form.onsubmit = function(event) {
    event.preventDefault();

    setTimeout(function() {
        form.classList.add('hidden');
        formWrapper.classList.add('active');
        formMessage.textContent = 'Спасибо, ' + formInput.value + ', скоро с вами  свяжется менеджер'
    }, 300);

    setTimeout(function() {
        formWrapper.classList.remove('active');
        form.classList.remove('hidden');
        formMessage.textContent = '';
        formInput.value = '';
    }, 5000);

    setTimeout(function() {
        form.reset();
    }, 5100);
};