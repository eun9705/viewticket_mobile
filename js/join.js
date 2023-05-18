//약관 전체 동의
$(document).ready(function(){
    var all = '#all_chk';
    var check01 = '#chk01';
    var check02 = '#chk02';
    var check03 = '#chk03';
    var check04 = '#chk04';
    var check05 = '#chk05';

    $(all).change(function(){
        var all_check = $(this).prop('checked');

        if(all_check){
            $('dt input').prop('checked',true);
        }else{
            $('dt input').prop('checked',false);
        }
    });

    $('dt input').change(function(){
        var chk01 = $(check01).prop('checked');
        var chk02 = $(check02).prop('checked');
        var chk03 = $(check03).prop('checked');
        var chk04 = $(check04).prop('checked');
        var chk05 = $(check05).prop('checked');

        if(chk01 && chk02 && chk03 && chk04 && chk05){
            $(all).prop('checked',true);
        }else{
            $(all).prop('checked',false);
        }
    });
});

//내용 자세히보기
$(document).ready(function(){
    var btn = "#join_form dl .agree_more_btn";
    var dd = '#join_form dd';
    var dt = '#join_form dt';
    $(btn).click(function(){
        var is = $(this).parents('dt').next().is(':hidden');

        if(is){ 
            $(dd).stop().slideUp(200);
            $(this).parents('dt').next().stop().slideDown(200);
        }else{ 
            $(this).parents('dt').next().stop().slideUp(200);
        }    
    });
});