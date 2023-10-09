var toolOpener = document.querySelectorAll('.js-tooltip-opener');
var toolCloser = document.querySelectorAll('.js-tooltip-closer');

toolOpener.forEach(item => {
    item.addEventListener('click', (e) => {
        toolOpener.forEach(el => {
            el.classList.remove('is-active');
        });
        item.classList.add('is-active');
    });

    toolCloser.forEach(closer => {
        closer.addEventListener('click', (e) => {
            item.classList.remove('is-active');
        });
    });
    
});

const list = document.querySelectorAll('.js-tooltip-opener');

document.addEventListener('click', function(event) {
    let isClickInside = false;

    list.forEach(element => {
        if (element.contains(event.target)) {
            isClickInside = true;
        }
    });

    if (!isClickInside) {
        list.forEach(element => {
            element.classList.remove('is-active');
        });
    }
});