//panel
$(document).ready(function(){
    var btn = '.panel_icon';
    var panel = '.panel';
    var bg = '.panel_bg';
    var main = '.main_nav';
    var sub = '.sub_nav';
    var close_btn = '.panel_close';
    
    $(btn).click(function(e){
        e.preventDefault();
        
        var has = $(this).hasClass('active');
        
        $(panel + ', html, body').toggleClass('active');
        
        if(has){
            $(bg).stop().delay(500).fadeOut(100,function(){
                $(btn).removeClass('active');
                $(main).removeClass('active');
                $(sub).slideUp(0);
            });
        }else{
            $(bg).stop().fadeIn(100);
            $(this).addClass('active');
        }
    });
    
    $(close_btn).click(function(){
        $(btn).trigger('click');    
    });
    
    $(main).click(function(e){
        e.preventDefault();
        
        var has = $(this).hasClass('active');
        if(has){
            $(this).removeClass('active');
            $(this).next().stop().slideUp('fast');
        }else{
            $(main).removeClass('active');
            $(this).addClass('active');
            $(sub).stop().slideUp('fast');
            $(this).next().stop().slideDown('fast');
        }
    });
    $('.language_box .last').click(function(){
        alert('The English version will be available soon');
    })
});

//search
$(document).ready(function(){
    $('.search_icon').click(function(e){
        e.preventDefault();
        $('.search_box').stop().slideToggle('fast');
    });
});

//top_btn
$(document).ready(function(){
    var btn = '.top_btn a';
    var speed = 1200;
    var easing = 'easeOutCubic';
    
    $(window).scroll(function(){
        var top = $(window).scrollTop(); 
        
        if(top < 200){
            $(btn).parent().fadeOut(400);
        }else{
            $(btn).parent().fadeIn(400);
        }
    });
    
    $(btn).click(function(e){
        e.preventDefault(); 
        $('html, body').stop().animate({
            scrollTop: 0
        },speed,easing);
    });
});