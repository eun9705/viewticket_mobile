$(document).ready(function(){
    var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);
    
    var param = thisfilefullname.substring(thisfilefullname.lastIndexOf('.'), 0);
    
    $.ajax({
        url: "/js/sport.json",
        dataType: "json",
        success: function(data){
            var use_date = new Array();
            
            function data_print(){
                switch(param){
                    case "soccer":
                        use_date = data.soccer;
                        break;
                    case "baseball":   
                        use_date = data.baseball;
                        break;
                    case "basketball":   
                        use_date = data.basketball;
                        break;  
                }
                if(use_date.length > 0){
                    $('#sub_info p').html('<span class="total">'+ String(use_date.length) +'개</span> 구단의 경기를 예매할 수 있습니다.');
                    var ul = $('<ul class="list"/>');
                    for(var i in use_date){
                        var li = $('<li />');
                        var $name = use_date[i].name;
                        var $home = use_date[i].home;
                        var $eng_name = use_date[i].eng_name;
                        var $image = use_date[i].image;
                        
                        li.append(
                            $('<img />').attr({
                                src: $image,
                                alt: $name + ' 엠블럼',
                                onerror: 'javascript:this.src="../images/error_icon.png"'
                            }),
                            $('<h4 />').text($name),
                            $('<p class="home" />').text($home),
                            $('<p class="eng_name" />').text($eng_name),
                            $('<a href="#empty" class="sport_btn" />').text("예매하기")
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
            
            var grid_btn01 = '#grid_btn .grid01 a';
            var grid_btn02 = '#grid_btn .grid02 a';
            $('#sub_contents .wrap').find('.list').addClass('grid01');
            $('#grid_btn').find('li:first a').addClass('active');
            $(grid_btn01).click(function(){
                $('#sub_contents .wrap .list').removeClass('grid02');
                $('#sub_contents .wrap .list').addClass('grid01');
                $('#grid_btn').find('li a').removeClass('active');
                $(this).addClass('active');
                
            });
            $(grid_btn02).click(function(){
                $('#sub_contents .wrap .list').removeClass('grid01');   
                $('#sub_contents .wrap .list').addClass('grid02');
                $('#grid_btn').find('li a').removeClass('active');
                $(this).addClass('active');
            });
        },
        error: function(data){
            $('#sub_contents .wrap').after('<p class="error_img">데이터를 불러오지 못했습니다.<br>관리자에게 문의하세요</p>');    
        }
    });
});