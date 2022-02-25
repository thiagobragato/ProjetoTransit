$(document).ready(function() {
    var ScrollBtn = $('.svg-s')
    var flicktyGroup = ($( window ).width() >= 900) ? 1 : 2;
    var width = $(window).width();
    var screen = '';
    if(width >= 900){
        screen = 1;
    }else{
        screen = 2;
    }
    $(window).scroll(function () { 
        ScrollBtn = ($(this).scrollTop() > 150) ? ScrollBtn.fadeIn(300) : ScrollBtn.fadeOut(300);
    });

    $("#btnmob").click(() =>{
        $('#nav').toggleClass('active');
    });
    $("#amodal").click(() =>{
        $('#modal').fadeIn(400);
    });
    $("#fmodal").click(() =>{
        $('#modal').fadeOut(400);
    });
    $('.tab').click(function(){
        $('.tab').removeClass("active-p");
        $(this).addClass("active-p");
    });
    $('#slide, #slide-mob').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        groupCells: flicktyGroup
      });
    $('.tab').click(function(){
        $('.tab').removeClass("active-p");
        $(this).addClass("active-p");
    });
    $('.peg').click(function(){
        //$('#res01').toggle(500);
        //$(this).children().eq(1).toggle(500);
        $(this).children('p').slideToggle(500);
    }); 
    AOS.init();
});
