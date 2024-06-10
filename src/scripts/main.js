
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
    const colorDropOuter = document.getElementById('color-drop-outer');
    const selectedColor = document.getElementById('selected-color');
    const colorPalette = document.getElementById('color-palette');
    // const colorClose = document.querySelector('.color-close');
    const colorDropdown = document.querySelector('.color-dropdown');

    function updateColorPalettePosition() {
        const rect = colorDropdown.getBoundingClientRect();
        colorPalette.style.left = (window.scrollX + rect.left) + 'px';
        colorPalette.style.top = (window.scrollY + 10 + rect.bottom) + 'px';
        colorPalette.style.width = `${rect.width - 20}px`;
    }

    colorDropOuter.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from bubbling up
        colorPalette.classList.toggle('active');
        if (colorPalette.classList.contains('active')) {
            updateColorPalettePosition();
        }
    });

    const colorBoxes = document.querySelectorAll('.color-box');
    colorBoxes.forEach(function(box) {
        box.addEventListener('click', function() {
            const color = box.getAttribute('data-color');
            selectedColor.style.backgroundColor = color;
            colorPalette.classList.remove('active');
            console.log("Selected Color: " + color);
            // Here you can call a function to add the color to an array
            addColorToArray(color);
        });
    });

    // Close the color palette when clicking the 'x' icon
    // colorClose.addEventListener('click', function() {
    //     colorPalette.classList.remove('active');
    // });

    // Hide the color palette when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!selectedColor.contains(event.target) && !colorPalette.contains(event.target)) {
            colorPalette.classList.remove('active');
        }
    });

    // Close the color palette or reset its position on window resize
    window.addEventListener('resize', function() {
        colorPalette.classList.remove('active');
        // Alternatively, reset the position without hiding it
        // if (colorPalette.classList.contains('active')) {
        //     updateColorPalettePosition();
        // }
    });

    function addColorToArray(color) {
        // Add your logic to handle the color selection
        console.log("Color added to array: " + color);
        // Example: colorsArray.push(color);
    }
});



// weekly or monthly?

document.addEventListener('DOMContentLoaded', function() {
    const weeklyCheckbox = document.getElementById('weekly');
    const monthlyCheckbox = document.getElementById('monthly');

    weeklyCheckbox.addEventListener('change', function() {
        if (weeklyCheckbox.checked) {
            monthlyCheckbox.checked = false;
        }
    });

    monthlyCheckbox.addEventListener('change', function() {
        if (monthlyCheckbox.checked) {
            weeklyCheckbox.checked = false;
        }
    });
});


// if repeat is off no tick on weekly or monthly
document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.getElementById('toggle');
    const weeklyCheckbox = document.getElementById('weekly');
    const monthlyCheckbox = document.getElementById('monthly');

    // Function to update the state of the tick buttons based on the toggle
    function updateTickButtons() {
        if (toggleCheckbox.checked) {
            weeklyCheckbox.disabled = false;
            monthlyCheckbox.disabled = false;
        } else {
            weeklyCheckbox.disabled = true;
            monthlyCheckbox.disabled = true;
            weeklyCheckbox.checked = false;
            monthlyCheckbox.checked = false;
        }
    }

    // Initial state update
    updateTickButtons();

    // Event listener for the toggle checkbox
    toggleCheckbox.addEventListener('change', updateTickButtons);
});

