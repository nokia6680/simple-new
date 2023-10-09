var sandwichToggle = function sandwichToggle() {
    // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
    var sandwichElements = document.querySelectorAll('.js-toggle'); // Проходим циклом по всем эдементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс

    sandwichElements.forEach(function (item) {
        item.addEventListener('click', showSandwichTarget);
    });

    function showSandwichTarget() {
        var targetId = this.getAttribute('data-target-id'),
            targetClassToggle = this.getAttribute('data-target-class-toggle');
        var body = document.querySelector('.body');
        var nav = document.querySelector('.nav__list');
        var header = document.querySelector('.header');
        this.classList.toggle('open');
        // nav.classList.add('no-transition');
        header.classList.toggle('is-active');
        body.classList.toggle('no-scroll');

        if (targetId && targetClassToggle) {
            document.getElementById(targetId).classList.toggle(targetClassToggle);
        }

        // Add the 'no-transition' class to the 'nav' element after closing the menu
        // if (!this.classList.contains('open')) {
        //     nav.classList.add('no-transition');
        //     setTimeout(function() {
        //         nav.classList.remove('no-transition');
        //     }, 50000);
        // }
    }
};

sandwichToggle(); // Menu hiding lib

$('#citySelect').selectize();

var links = document.querySelectorAll('.nav__list-link');

function handleClick(event) {
    event.preventDefault();
    var currentItem = event.currentTarget.parentNode;
    currentItem.classList.toggle('is-active');
}

function handleResize() {
    if (window.innerWidth < 1279) {
        links.forEach(function (link) {
            link.addEventListener('click', handleClick);
        });
    } else {
        links.forEach(function (link) {
            link.removeEventListener('click', handleClick);
            link.parentNode.classList.remove('is-active');
        });
    }
}

window.addEventListener('resize', handleResize);
handleResize();