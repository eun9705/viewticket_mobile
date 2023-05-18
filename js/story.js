$(document).ready(function(){
    $.ajax({
        url: "/js/story.json",
        dataType: "json",
        success: function(data){
            var use_date = data.story;
            
            function data_print(){
                if(use_date.length > 0){
                    var ul = $('<ul class="list"/>');
                    for(var i in use_date){
                        var li = $('<li />');
                        var $name = use_date[i].name;
                        var $image = use_date[i].image;
                        
                        li.append(
                            $('<a href="#empty" />').append(
                                $('<img />').attr({
                                    src: $image,
                                    alt: $name,
                                    onerror: 'javascript:this.src="../images/error_icon.png"'
                                }),
                                $('<h4 />').html($name)
                            )
                        );
                        $(ul).append(li);
                    }
                    $('#sub_contents .wrap').append(ul);
                }else{
                    $('#sub_info p').html('현재 예매 가능한 공연은 총<span class="total"> 0개</span> 입니다.');
                    $('#sub_contents .wrap').after('<p class="no_img">현재 예매 가능한 공연이 없습니다.</p>'); 
                } 
            }
            data_print();
            
            var num = 6;
            
            $('.wrap .list li:gt(' + (num - 1) + ')').slideUp(0);
            
            var cnum = 1;
            var lastNum = 4;
            
            $('.wrap + .more_btn .pagination').text('(' + cnum + '/' + lastNum + ')');
            
            $('.wrap + .more_btn').click(function(e){
                e.preventDefault();
                cnum++;
                if(cnum <= lastNum){ 
                    $('.wrap .list li:lt(' + (num * cnum) + ')').stop().slideDown('fast');
                    $(this).find('.pagination').text('(' + cnum + '/' + lastNum + ')');
                }
            });
        },
        error: function(data){
            $('#sub_contents .wrap').after('<p class="error_img">데이터를 불러오지 못했습니다.<br>관리자에게 문의하세요</p>');    
        }
    });
});