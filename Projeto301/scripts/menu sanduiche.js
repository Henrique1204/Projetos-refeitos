const menuSanduiche = $('#menu')
const menuLinks = $('nav')
const cancelaMenu = $('#cancela');
const header = $('header');

menuSanduiche.on('click', ()=>{
    menuLinks.animate({
        top: '69px',
    }, 1000);
    menuLinks.addClass('sombra');
    header.removeClass('sombra');
    menuSanduiche.css('display', 'none');
    cancelaMenu.css('display', 'flex');
});

cancelaMenu.on('click', ()=>{
    menuLinks.css('top', '20px');    
    header.addClass('sombra');
    menuLinks.removeClass('sombra');
    cancelaMenu.css('display', 'none');
    menuSanduiche.css('display', 'flex');
});