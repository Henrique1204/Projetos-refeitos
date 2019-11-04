const links = $('nav a');
const subir = $('#subir');

$(window).on('load', ()=>{
    $(subir).fadeOut();
})

$(window).scroll(function(){
    let minhaPosicao = $(this).scrollTop();
    if(minhaPosicao < 711){
        $(subir).fadeOut(500);
    }else{
        $(subir).fadeIn(500);
    };
});

links.click(function(){
    links.removeClass('ativo');
    $(this).addClass('ativo');

    let seletor = $(this).attr('href');
    let posicao = $(seletor).offset().top;
    $('HTML, body').animate({scrollTop: posicao - 70}, 1500);
});

subir.on('click', function(){
    $('HTML, body').animate({scrollTop: 0}, 1000);
    links.removeClass('ativo');
});


/* Jeito de descobrir a posição do elemento
const sobre = $('#sobre');
let posicao = sobre.offset();
console.log(posicao.top)
*/