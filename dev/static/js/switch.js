const switchToggle = document.querySelectorAll('input[name="switch"]')
const switchWrap = document.querySelector('.form__fieldset--switch')
for (const i of switchToggle) {
    i.onchange = () => {
        switchWrap.classList.toggle('manual');
    }
}