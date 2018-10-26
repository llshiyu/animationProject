// $(document).ready(function(){
//     $('#fullpage').fullpage({
//         navigation:true
//     });
// });
$(function(){
    $('#fullpage').fullpage({
        navigation:true,
        scrollingSpeed:2000,
        onLeave:function(index,nextIndex,direction){
            $('.section *').attr('style','');
            if(nextIndex==3){
                $('#twoe7').css({
                    bottom:-$(window).height()+225,
                    opacity:1,
                    zIndex:10,
                    width:207,
                    marginLeft:-240
                });
                $('#zhegai').css({
                    opacity:1,
                    zIndex:10
                });
                $('.fshafa').css({
                    opacity:0,
                    bottom:$(window).height()+140,
                    marginLeft:-34
                })
            }
            if(nextIndex==4){
                $('#twoe7').css({
                    opacity:0
                });
                $('.fshafa').css({
                    opacity:1,
                    zIndex:10,
                    bottom:198,
                    marginLeft:125
                });
            }
            
            
        }
        
    });
    $('.section-8').on('mousemove',function(e){
        var pagex=e.pageX;

        var pagey=e.pageY;
        var y=$(window).height()-$(this).find('.e4').height();            
        if(pagey<y){
            pagey=y;
        }
            $(this).find('.e4').css({
                left:pagex,
                top: pagey
            });
            
    });
    $('.section-8').find('#again').on('mousemove',function(){
        $.fn.fullpage.moveTo(1);
        // $.fn.fullpage.moveSectionUP();

    });
    
})