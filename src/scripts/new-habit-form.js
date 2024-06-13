document.addEventListener('DOMContentLoaded', function() {
    const colorDropOuter = document.getElementById('color-drop-outer');
    const selectedColor = document.getElementById('selected-color');
    const colorPalette = document.getElementById('color-palette');
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
            selectedColor.setAttribute('data-color', color); // Store the selected color
        });
    });

    // Hide the color palette when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!selectedColor.contains(event.target) && !colorPalette.contains(event.target)) {
            colorPalette.classList.remove('active');
        }
    });

    // Close the color palette or reset its position on window resize
    window.addEventListener('resize', function() {
        colorPalette.classList.remove('active');
    });
});

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

function submitNewHabit(event) {
    event.preventDefault(); // Prevent form submission

    const habitName = document.getElementById('habit-name').value;
    const color = document.getElementById('selected-color').getAttribute('data-color'); // Correctly get the color
    const goalNumber = document.getElementById('goal-number').value;
    const habitUnit = document.getElementById('unit').value;
    const computation = document.getElementById('computation').value;
    const weeklyCheckbox = document.getElementById('weekly').checked;
    const monthlyCheckbox = document.getElementById('monthly').checked;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    let habitDetails = [
        color,
        goalNumber,
        habitUnit,
        computation,
        weeklyCheckbox,
        monthlyCheckbox,
        startDate,
        endDate
    ];

    let storageKey = 'habitDetails_' + habitName;

    localStorage.setItem(storageKey, JSON.stringify(habitDetails));

    let storedData = localStorage.getItem(storageKey);
    console.log(JSON.parse(storedData));

    // Redirect to another HTML file
    window.location.href = '../pages/habits.html';
}

// Add event listener to the submit button
document.getElementById('submit-button').addEventListener('click', submitNewHabit);
