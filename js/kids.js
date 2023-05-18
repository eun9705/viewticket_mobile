$(document).ready(function(){
    
    var btn = '#sort_btn li a';
    $('#sort_btn').find('li:first a').addClass('active');
    
    $(btn).click(function(){
        $('#sort_btn li a').removeClass('active');
        $(this).addClass('active');
    });
    
    var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);
    
    var param = thisfilefullname.substring(thisfilefullname.lastIndexOf('.'), 0);
    
    $.ajax({
        url: "/js/kids.json",
        dataType: "json",
        success: function(data){
            var use_date = new Array();
            
            function data_print(){
                switch(param){
                    case "kids_musical":
                        use_date = data.kids_musical;
                        break;
                    case "kids_play":   
                        use_date = data.kids_play;
                        break;
                    case "kids_classic":   
                        use_date = data.kids_classic;
                        break; 
                    case "kids_exhibition":   
                        use_date = data.kids_exhibition;
                        break;   
                }
                if(use_date.length > 0){
                    $('#sub_info p').html('현재 예매 가능한 공연은 총<span class="total"> ' + String(use_date.length) + '개</span> 입니다.');
                    var ul = $('<ul class="list"/>');
                    for(var i in use_date){
                        var li = $('<li />');
                        var $name = use_date[i].name;
                        var $place = use_date[i].place;
                        var $date = use_date[i].date;
                        var $image = use_date[i].image;
                        
                        li.append(
                            $('<a href="#empty" />').append(
                                $('<img />').attr({
                                    src: $image,
                                    alt: $name,
                                    onerror: 'javascript:this.src="../images/error_icon.png"'
                                }),
                                $('<h4 />').text($name),
                                $('<p class="place" />').text($place),
                                $('<p class="date" />').text($date)
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
            
            var total = use_date.length;
            
            var grid_btn01 = '#grid_btn .grid01 a';
            var grid_btn02 = '#grid_btn .grid02 a';
            $('#sub_contents .wrap').find('.list').addClass('grid01');
            $('#grid_btn').find('li:first a').addClass('active');
            
            var cnum;
            var lastNum;
            var finalNum;
            var num;
            
            function more_btn(total){
                num = 0;
                
                var has = $('#sub_contents .wrap .list').hasClass('grid01');
                if(has){
                    num = 5;
                }else{
                    num = 6;
                }
                
                cnum = 1;
                lastNum = parseInt(total / num);
                finalNum = total % num;
                
                $('.wrap .list li').slideDown(0);
                $('.wrap .list li:gt(' + (num - 1) + ')').slideUp(0);
                
                if(finalNum != 0){
                    ++lastNum;
                }
                $('.wrap + .more_btn .pagination').text('(' + cnum + '/' + lastNum + ')');
            }
            
            $('.wrap + .more_btn').click(function(e){
                e.preventDefault();
                cnum++;
                if(cnum <= lastNum){ 
                    $('.wrap .list li:lt(' + (num * cnum) + ')').stop().slideDown('fast');
                    $(this).find('.pagination').text('(' + cnum + '/' + lastNum + ')');
                }
            }); 
            
            $(grid_btn01).click(function(){
                $('#sub_contents .wrap .list').removeClass('grid02');
                $('#sub_contents .wrap .list').addClass('grid01');
                $('#grid_btn').find('li a').removeClass('active');
                $(this).addClass('active');
                more_btn(total);   
            });
            
            $(grid_btn02).click(function(){
                $('#sub_contents .wrap .list').removeClass('grid01');   
                $('#sub_contents .wrap .list').addClass('grid02');
                $('#grid_btn').find('li a').removeClass('active');
                $(this).addClass('active');
                more_btn(total);
            });
            
            more_btn(total);
            
        },
        error: function(data){
            $('#sub_contents .wrap').after('<p class="error_img">데이터를 불러오지 못했습니다.<br>관리자에게 문의하세요</p>');    
        }
    });
});