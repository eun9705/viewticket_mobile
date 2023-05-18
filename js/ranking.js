$(document).ready(function(){
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var day = today.getDay();
    var week = new Array('일','월','화','수','목','금','토');
    $('#sub_contents .current_date').text(year + '.' + month + '.' + date + ' (' + week[day] + ')');
    
    var btn = '#sub_menu ul';
    var content = '#sub_contents .wrap .content';
    $(btn).find('li:first').addClass('active');
    $(content).find('>div:first').fadeIn(0);
    
    $.ajax({
        url: "/js/ranking.json",
        dataType: "json",
        success: function(data){
            var data01 = data.concert;
            var data02 = data.play;
            var data03 = data.musical;
            var data04 = data.classic;
            var data05 = data.kids;
            var num = 1;
            
            var dataArray = [data01, data02, data03, data04, data05];
            
            function dataPrint(index){
                if(dataArray[index].length > 0){
                    var ul = $('<ul class="list" />'); 
                    for(var i in dataArray[index]){
                        var li = $('<li />');
                        
                        var $name = dataArray[index][i].name;
                        var $place = dataArray[index][i].place;
                        var $date = dataArray[index][i].date;
                        var $rate = dataArray[index][i].rate;
                        var $like = dataArray[index][i].like;
                        var $images = dataArray[index][i].images;
                        
                        li.append(
                            $('<a href="empty" />').append(
                                $('<p class="num" />').text(num + '위'),
                                $('<div class="img_box" />'),
                                $('<h4 />').text($name),
                                $('<p class="place" />').text($place),
                                $('<p class="date" />').text($date),
                                $('<p class="rate" />').text($rate + '%'),
                                $('<p class="like" />').text($like)
                            )
                        );
                        ul.append(li);
                        
                        num++;
                        
                        li.find('.img_box').append(
                            $('<img />').attr({
                                src : $images,
                                alt: $name
                            })
                        );
                    }
                    $('#sub_contents .wrap .content > div').append(ul);
                }
            }
            
            dataPrint(0);
            
            $(btn).find('a').click(function(e){
                e.preventDefault();

                $(btn).find('li').removeClass('active');
                $(this).parent().addClass('active');

                var index = $(this).parent().index();

                $(content).find('> div').stop().fadeOut(0);
                $(content).find('> div').eq(index).stop().fadeIn(0);
                
                $('#sub_contents .wrap .list').remove();
                num = 1;
                dataPrint(index);
            });
        },
        error: function(data){
            $('#sub_contents .wrap').after('<p class="error_img">데이터를 불러오지 못했습니다. 관리자에게 문의하세요</p>');  
        }
    });
});