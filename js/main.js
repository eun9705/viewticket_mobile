//popup
$(document).ready(function(){
    var popup = '.popup';
    var cookie = '.cookie_save';
    var close = '.popup_close';
    
    function setCookie(name, value, expiredays) {  
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };

    $(cookie).click(function(){
        setCookie('exCookie','done',1);
        $(popup).fadeOut(0);
    });

    $(close).click(function(){
        $(popup).fadeOut(0);
        $('html, body').css('overflow','visible');
    });

    var cookiedata = document.cookie;
    if(cookiedata. indexOf('exCookie=done') < 0 ){
        $(popup).fadeIn(0);
        $('html, body').css('overflow','hidden');
    }else{
        $(popup).fadeOut(0);
        $('html, body').css('overflow','visible');
    }
});

//main
$(document).ready(function(){
    var bg = $('<div class="main_bg"></div>');
    
    $('main').append(bg);
    
    var bgArray = new Array('#4e526b','#a88e77','#272025','#f9cebb','#8292bf','#024f78');
    
    var swiper = new Swiper('main .swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        spaceBetween: 40,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: 'main .swiper-pagination',
            clickable: true,
        },
        loop: true,
        on: {
            slideChangeTransitionStart: function () {
                var activeIndex = $('main .swiper-container .swiper-slide-active').attr('data-swiper-slide-index');
                $('.main_bg').css('background-color',bgArray[activeIndex]);
            },
        }
    });
});

//notice
$(document).ready(function(){
    var swiper = new Swiper('#notice .swiper-container', {
        loop: true,
        direction: 'vertical',
        navigation: {
            nextEl: '#notice .swiper-button-next',
            prevEl: '#notice .swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});

//ranking
$(window).load(function(){
    var swiper = new Swiper('#ranking .swiper-container', {
        initialSlide : 0,
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 5,
        navigation: {
            nextEl: '#ranking .swiper-button-next',
            prevEl: '#ranking .swiper-button-prev',
        },
        pagination: {
            el: '#ranking .swiper-pagination',
            type: 'fraction',
        },
        observer: true,
        observeParents: true,
    });
    
    var btn = '.tab_bar > ul'; 
    var content = '#ranking .content_wrap'; 
    $(btn).find('li:first a').addClass('active'); 
    $(content).find('>div:first').fadeIn(0);
    
    $(btn).find('>li a').click(function(e){
        e.preventDefault();
        
        $(btn).find('>li a').removeClass('active');
        $(this).addClass('active');
        
        var index = $(this).parents('li').index();
        
        $(content).find('.swiper-container').fadeOut(0);
        $(content).find('.swiper-container').eq(index).fadeIn(0);
    });
});

//coming_soon
$(window).load(function(){
    var swiper = new Swiper('#coming_soon .swiper-container', {
        slidesPerView: 2.5,
        spaceBetween: 20,
    });
});

//performance
$(window).load(function(){
    var swiper = new Swiper('#performance .swiper-container', {
        loop:true,
        slidesPerView: 1.2,
        spaceBetween: 35,
    });
});

//story
$(window).load(function(){
    var swiper = new Swiper('#story .swiper-container', {
        loop: true,
        pagination: {
            el: '#story .swiper-pagination',
        },
    });
});