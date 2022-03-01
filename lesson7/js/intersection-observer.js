const sectionOne = document.querySelector('.section1');
const sections = document. querySelectorAll('section');

const options = {
    root: null, // it is the viewport
    threshold: 0, // is it's one 100% of the section has to be inside versus having it at 0 so it doesn't fire.
    rootMargin: "-150px" // crossing dotted line, site picks up when it crossed margins
};

const observer = new IntersectionObserver(function(entries, observer)
{
    entries.forEach(entry => {
       // console.log(entry.target);
       entry.target.classList.toggle('inverse');
    })
}, options);
sections. forEach(section => {
    observer.observe(section);
}) //anything something goes on and off the screen, it will fire (collect the data).
