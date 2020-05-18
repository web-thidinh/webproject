$(document).ready(function(){

	/*SHOW LOGIN FORM*/
	$('a.login').click(function(){
		var loginBox = $(this).attr('href');//lấy giá trị thuộc tính href
		$(loginBox).fadeIn(300);
		$('body').append('<div id="over"></div>');
        $('#over').fadeIn(300);
        return false;
	});
	$('.reg-btn').click(function(){
		$('.show').addClass('show-element');
		$('.reg-btn').addClass('button-change');
        $('.log-btn').addClass('button-change1');
	});
	$('.log-btn').click(function(){
        $('.show').removeClass('show-element');
        $('.log-btn').removeClass('button-change1');
        $('.reg-btn').removeClass('button-change');
    });
    $(document).on('click',"a.close-btn,#over",function(){
    	$('#over,.form-login').fadeOut(300,function(){
    		$('#over').remove();
    	});
    	return false;
    });
    /*END SHOW LOGIN FORM*/
    //var imgSize = $('.slide-box')[0].clientWidth;
    // var imgSize =   document.getElementsByClassName('slide-box')[0].clientWidth;
    // var nextSlide = document.getElementsByClassName('slide')[0];
    // var img = $('.slide img');
    // var max = imgSize * img.length;
    // max = max - imgSize;
    // var next = 0;
    // $('#next_btn').click(function(){
    //     if(next < max)
    //     {
    //         next += imgSize;
    //     }
    //     else
    //     {
    //         next =0;
    //     }
    //     nextSlide.style.marginLeft = '-' + next + 'px';
    // });
    // $('#previus_btn').click(function(){
    //     if(next == 0 ) next = max;
    //     else next -=imgSize;
    //     nextSlide.style.marginLeft = '-' + next + 'px';
    // });









    var stt = 0;
    start = $('.slide-child:first').attr('stt');
    end = $('.slide-child:last').attr('stt');
    $('.slide-child').each(function()
    {
        if($(this).is(':visible'))
            stt = $(this).attr("stt");
        
    });
    $('#next_btn').click(function(){
        if(stt == end){
            stt = -1;
        }
        next = ++stt;
        $('.slide-child').hide();
        $('.slide-child').eq(next).show();
    });
    $('#previus_btn').click(function(){
        if(stt == start){
            stt = 3;
        }
        prev = --stt;
        $('.slide-child').hide();
        $('.slide-child').eq(prev).show();
    });

    /*SLIDE EFECT*/
   /* $('#next_btn').click(function(event){
    	var next_slide = $('.active').next();
    	if(next_slide.length!=0){
    		$('.active').addClass('go_out_left').one('webkitAnimationEnd',function(event){
    			$('.go_out_left').removeClass('go_out_left').removeClass('active');
    		});
    	next_slide.addClass('active').addClass('come_in_right').one('webkitAnimationEnd',function(event){
    		$('.come_in_right').removeClass('come_in_right');
    	});
    	}
    	else{
    		$('.active').addClass('go_out_left').one('webkitAnimationEnd',function(event){
    			$('.go_out_left').removeClass('go_out_left').removeClass('active');
    		});
    		$('.slide-child:first-child').addClass('active').addClass('come_in_right').one('webkitAnimationEnd',function(event){
    			$('.come_in_right').removeClass('come_in_right');
    		});
    	}
    });


    $('#previus_btn').click(function(){
    	var prev_btn = $('.active').prev();
    	if(prev_btn.length!=0){
            $('.active').addClass('go_out_right').one('webkitAnimationEnd',function(){
                $('.go_out_right').removeClass('go_out_right').removeClass('active');
            });
            prev_btn.addClass('active').addClass('come_in_left').one('webkitAnimationEnd',function(){
                $('.come_in_left').removeClass('come_in_left');
            });
        }
        else{
            $('.active').addClass('go_out_right').one('webkitAnimationEnd',function(){
                $('go_out_right').removeClass('go_out_right').removeClass('active');
            });
            $('.slide-child:last-child').addClass('active').addClass('come_in_left').one('webkitAnimationEnd',function(){
                $('.come_in_left').removeClass('come_in_left');
            });

        }
    });*/

    /*END SLIDE EFFECT*/
    
    /*HOVER BOX JQUERY*/



    /*END HOVER BOX JQUERY*/
});