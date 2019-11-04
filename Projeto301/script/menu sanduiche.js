const menuSanduiche = $('#menu')
const menuLinks = $('nav')
const cancelaMenu = $('#cancela');

menuSanduiche.on('click', ()=>{
    menuLinks.animate({
        top: '70px'
    }, 1000)
    menuSanduiche.css('display', 'none');
    cancelaMenu.css('display', 'flex');
});

cancelaMenu.on('click', ()=>{
    menuLinks.animate({
        top: '20px'
    }, 1000);
    cancelaMenu.css('display', 'none');
    menuSanduiche.css('display', 'flex');
});