//function to scrollView
const scrollView = () => {
  
    
    
    const scrollToSec =  (sectionIndex) =>  {
    const sections = document.querySelectorAll('section');
        if (sectionIndex >= 0 && sectionIndex < sections.length)
        {sections[sectionIndex].scrollIntoView({behavior: 'smooth'})}
    }
    //addEvent Listener the navs
    const scrollIcon = document.querySelector('#scroll');
    const navMenu = document.querySelectorAll('ul li');
    navMenu[1].addEventListener('click', () => scrollToSec(1))
    navMenu[2].addEventListener('click', () => scrollToSec(2))
    navMenu[3].addEventListener('click', () => scrollToSec(3))
    //addEvent the scroll
    scrollIcon.addEventListener('click', () => scrollToSec[1])

}
window.addEventListener('DOMContentLoaded', scrollView);

//function to toggleDark
const toggleDark = () => {
    //get the doms
    const toggleIcon = document.querySelector('#toggleDark')

    //addEvent
    toggleIcon.addEventListener('click', () => {
        const body = document.querySelector('body');
        const submitIcon = document.querySelector('.bi-moon');
        body.classList.toggle('bg-[#161A30]')
        submitIcon.classList.replace(' bi-sun')
    })
}
window.addEventListener('DOMContentLoaded',toggleDark);



