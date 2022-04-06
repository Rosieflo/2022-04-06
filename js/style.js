$(document).ready(function(){

    let gnb = $('.gnb > ul > li');

    gnb.mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    });

    gnb.mouseleave(function(){
        $('.sub').stop().slideUp();
    });
});