
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

