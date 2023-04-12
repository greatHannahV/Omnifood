// mob nav 
let btnNavEl = document.querySelector('.btn-mob-nav');
let headerEl = document.querySelector('.header');

// btnNavEl.addEventListener("click", function(){
//    headerEl.classList.toggle('nav-open');

// })
// let header_menu = document.querySelector('.main-nav');
let back = document.querySelector('body');
let header__list = document.querySelector('.main-nav-list');

btnNavEl.onclick = function(){
    btnNavEl.classList.toggle('nav-open');
    headerEl.classList.toggle('nav-open');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('nav-open');
    back.classList.toggle('lock');
}



// fixing flexbox gap in safary
function checkFlexGap(){
    var flex = document.createElement('div');
    flex.style.display="flex";
    flex.style.flexDirection="column";
    flex.style.rowGap="1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight===1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if(!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// /year/ 

// const yearEl=document.querySelector(".year");
const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;
let yearEl=document.querySelector(".year");
if (yearEl) {
    yearEl.textContent =currentYear
}
// smooth scrolling animation
const allLinks=document.querySelectorAll('a:link');

allLinks.forEach(function(link){
link.addEventListener("click",function(e){
    e.preventDefault();
    const href=link.getAttribute('href');
    // scroll back to top
    if(href==="#")window.scrollTo({
        top:0,
        behavior:"smooth",
    });

    if(href !=='#' && href.startsWith('#')){
        const sectionEl=document.querySelector(href)
        sectionEl.scrollIntoView({behavior:"smooth"});

    }

});
});

// stick nav
const sectionHeroEl=document.querySelector('.section-hero');

const obs = new IntersectionObserver(
    function(entries){
const ent= entries[0];

if(ent.isIntersecting===false){
    document.body.classList.add("sticky")
}
if(ent.isIntersecting){
    document.body.classList.remove("sticky")
}
},
 {
    // in the viewport
    root:null,
    threshold: 0,
    rootMargin:'-80px',
}
);

obs.observe(sectionHeroEl);


