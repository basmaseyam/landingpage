/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const list = document.querySelector('#navbar__list');
let sections = document.querySelectorAll('.landing__container');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//check which section in viewport by getting the details of the section coordinates according to viewport
let isInViewport = function (element) {
    let details = element.getBoundingClientRect();
    return (
    details.top >= 0 &&
	details.left >= 0 &&
	details.right <= (window.innerWidth || document.documentElement.clientWidth) &&
	details.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
    );
};

let isFooterInViewport = function (element) {
    let details = element.getBoundingClientRect();
    return (
    details.button >= 0 &&
	details.left >= 0 &&
	details.right <= (window.innerWidth || document.documentElement.clientWidth) &&
	details.top <= (window.innerHeight || document.documentElement.clientHeight) 
    );
};




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function addNavItem(){
    
    let i=1;
    for (section of sections){

        const link = section.parentElement.getAttribute('data-nav');
        //create li element 
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#section${i}">${link} </a>`;
        i+=1;
        list.appendChild(listItem);
    }

    
}

// Add class 'active' to section when near top of viewport
function addState(){
    
    list.style.display = 'block';
//checks which section is in the viewport
     for(section of sections){
         if(isInViewport(section)){
             section.parentElement.classList.add("active");
         }
         else{
             section.parentElement.classList.remove("active");
            
         }
     }
    
     //suggestions adds
    
//setTimeout(hideNav,0); 
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(evt){
    //get which nav menu item is chosen
    const secItem = evt.target;
    //get the content of the item to see which section
    const anchorID = secItem.getAttribute('href');
    //get the section to go to
    const sectionTo = document.querySelector(anchorID);
   
   
    sectionTo.scrollTo({top: 100,
        left: 100,
        behavior: 'smooth'});

      
       
    
}
/*suggested function to hide the navbar while not scrolling 
function hideNav(){

    list.style.display = 'none';
}
*/


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
addNavItem();
showButton();
// Scroll to section on link click

list.addEventListener('click',scrollToSection);

// Set sections as active
document.addEventListener('scroll',addState);








