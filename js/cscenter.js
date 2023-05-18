$(document).ready(function(){
    var btn = '.contents_bottom dl a';
    $(btn).click(function(){
        var is = $(this).parent().next().is(':hidden');

        if(is){ 
            $('.contents_bottom dl dd').stop().slideUp(200);
            $(this).parent().next().stop().slideDown(200);
        }else{ 
            $(this).parent().next().stop().slideUp(200);
        } 
    }); 
});