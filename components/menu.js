
const menu_click = document.querySelector('.nav_button');
const nav_element = document.querySelector('.navigation_nav');

menu_click.addEventListener('click', function(e){
     //menu_click.classList.toggle('navigation_nav_show');
     //nav_element.style.display = 'initial';
     if (nav_element.style.display === "none") {
        nav_element.style.display = "initial";
      } else {
        nav_element.style.display = "none";
      }

}) 

