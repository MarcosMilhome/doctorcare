
document.addEventListener('scroll',()=>{
    showNavOnScroll();
    showBackToTopButton();
    activateMenuAtcorrentSection(home);
    activateMenuAtcorrentSection(services);
    activateMenuAtcorrentSection(about);
    activateMenuAtcorrentSection(contact);


});

function activateMenuAtcorrentSection(section){
    const targetLine = scrollY + innerHeight / 2;
    
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionEndsAt = sectionTop + sectionHeight;
    const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`);
   
    menuElement.classList.remove('active');

    if(targetLine >= sectionTop && sectionEndsAt >= targetLine){
        menuElement.classList.add('active');
    }
};



function showNavOnScroll (){
    if(scrollY>0){
        navigation.classList.add('scroll');
    }else{
        navigation.classList.remove('scroll');
    }
};

function showBackToTopButton (){
    if(scrollY>450){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show');
    }
};


function openMenu(){
    document.body.classList.add('menu-expanded');
}
function closeMenu(){
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin:'top',
    distance:'30px',
    duration: 700
}).reveal(`#home, 
            #home img, 
            #home .comentarios,
            #services,
            #services header,
            #services .card,
            #about,
            #about header,
            #about content,
            #about img,
            #contact
            `);