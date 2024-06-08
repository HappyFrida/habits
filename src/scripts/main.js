
function toggleMenu() {

    const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    
        const menuBars = document.querySelectorAll('.menu-bars');
        menuBars.forEach(bar => {
            bar.classList.toggle('active');

        });

    const menuButton = document.querySelector('.menu-button');
    
    const rect = menuButton.getBoundingClientRect();
    
    menu.style.left = (window.scrollX - 22.5 + rect.left) + 'px';
    
}



document.addEventListener('click', function(event) {

    const menu = document.querySelector('.menu');
    const menuButton = document.querySelector('.menu-button');
    const menuBars = document.querySelectorAll('.menu-bars');

    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('active');
        menuBars.forEach(bar => {
            bar.classList.remove('active');
        });
    }
  
});


window.addEventListener('resize', function() {
    
    let resizeTriggered = false;

    const menu = document.querySelector('.menu');
    
    if (menu.classList.contains('active') && !resizeTriggered) {
        resizeTriggered = true; 
        toggleMenu(); 
    }

    resizeTriggered = false; 
});


// new habit form

// toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggleCheckbox = document.getElementById('toggle');

    toggleCheckbox.addEventListener('change', function () {
        console.log(this.checked);
    });
});


// tick
document.addEventListener('DOMContentLoaded', function () {
    const tickCheckbox = document.getElementById('tick');

    tickCheckbox.addEventListener('change', function () {
        console.log(this.checked);
    });
});


// calenda date selector

$(document).ready(function() {
    $("#start-date").datepicker({
        dateFormat: "mm/dd/yy",
        onSelect: function(dateText, inst) {
            // Handle the date selection for start date
            console.log("Start Date Selected: " + dateText);
        }
    });

    $("#end-date").datepicker({
        dateFormat: "mm/dd/yy",
        onSelect: function(dateText, inst) {
            // Handle the date selection for end date
            console.log("End Date Selected: " + dateText);
        }
    });
});



// color selector
document.addEventListener('DOMContentLoaded', function() {
    const selectedColor = document.getElementById('selected-color');
    const colorPalette = document.getElementById('color-palette');
    const colorClose = document.querySelector('.color-close');

    selectedColor.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from bubbling up
        colorPalette.classList.toggle('hidden');
    });

    const colorBoxes = document.querySelectorAll('.color-box');
    colorBoxes.forEach(function(box) {
        box.addEventListener('click', function() {
            const color = box.getAttribute('data-color');
            selectedColor.style.backgroundColor = color;
            colorPalette.classList.add('hidden');
            console.log("Selected Color: " + color);
            // Here you can call a function to add the color to an array
            addColorToArray(color);
        });
    });

    // Close the color palette when clicking the 'x' icon
    colorClose.addEventListener('click', function() {
        colorPalette.classList.add('hidden');
    });

    // Hide the color palette when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!selectedColor.contains(event.target) && !colorPalette.contains(event.target)) {
            colorPalette.classList.add('hidden');
        }
    });

    function addColorToArray(color) {
        // Add your logic to handle the color selection
        console.log("Color added to array: " + color);
        // Example: colorsArray.push(color);
    }
});
