// For the ability to choose if multiple cards
// can be expanded at the same time.
var CloseAll = true;

function toggleDisclosure(btnID) {
    // Change value to false if you want each opened view
    // to stay open as you open more (test the grid).
    // var CloseAll = true;
    if (CloseAll == true) {
        toggleAll(btnID);
    } else {
        toggleOne(btnID);
    }
}

function toggleAll(btnID) {
    var list = document.querySelector(".services__list");
    // Get the button that triggered this
    var theButton = document.getElementById(btnID);
    // Get its state
    var theButtonState = theButton.getAttribute("aria-expanded");
    // Get the value of the aria-controls attribute
    var strControls = theButton.getAttribute("aria-controls");
    // Find the node with that id
    var theDisclosee = document.getElementById(strControls);
    // Get all the disclosure buttons
    var allButtons = document.querySelectorAll("[aria-expanded]");
    // Get all the disclosure content
    var allDisclosees = document.querySelectorAll(".fullwidth");
    // Loop through all buttons and mark as closed
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].setAttribute("aria-expanded", "false");
    }
    // Loop through all disclosees and add hidden class
    for (var i = 0; i < allDisclosees.length; i++) {
        allDisclosees[i].classList.add('is-hidden');
    }
    // If the button was not expanded...
    if (theButtonState == "false") {
        // Now set the button to expanded
        theButton.setAttribute("aria-expanded", "true");
        // Remove the is-hidden class
        theDisclosee.classList.remove('is-hidden');
        // Otherwise button was expanded...
        list.classList.add("item-expanded");
    } else {
        // Now set the button to collapsed
        theButton.setAttribute("aria-expanded", "false");
        // Add the class that hides the content
        theDisclosee.classList.add('is-hidden');

        list.classList.remove("item-expanded");
    }
}

function toggleOne(btnID) {
    var list = document.querySelector(".services__list");
    // Get the button that triggered this
    var theButton = document.getElementById(btnID);
    // Get the value of the aria-controls attribute
    var strControls = theButton.getAttribute("aria-controls");
    // Find the node with that id
    var theDisclosee = document.getElementById(strControls);
    // If the button is not expanded...
    if (theButton.getAttribute("aria-expanded") == "false") {
        // Now set the button to expanded
        theButton.setAttribute("aria-expanded", "true");
        // Remove the is-hidden class
        theDisclosee.classList.remove('is-hidden');
        // Otherwise button is expanded...
        list.classList.add("item-expanded");
    } else {
        // Now set the button to collapsed
        theButton.setAttribute("aria-expanded", "false");
        // Add the class that hides the content
        theDisclosee.classList.add('is-hidden');
    }
}

// Just for the toggle control I added. It has no
// bearing on the card display thinger.
function toggle(btnID) {
    var theButton = document.getElementById(btnID);
    if (theButton.getAttribute("aria-pressed") == "false") {
        theButton.setAttribute("aria-pressed", "true");
        CloseAll = false;
    } else {
        theButton.setAttribute("aria-pressed", "false");
        CloseAll = true;
    }
}


document.addEventListener("click", function(event) {
    var list = document.querySelector(".services__list");

    if (!event.target.closest(".services__item")) {
        var cells = document.querySelectorAll('.services__item');
        
        list.classList.remove('item-expanded');

        cells.forEach((cell, index) => {
            if (index % 2 !== 0) {
                cell.classList.add('is-hidden');
            }

            if (index % 2 == 0) {
                cell.setAttribute("aria-expanded", "false");
            }
        });
    }
});