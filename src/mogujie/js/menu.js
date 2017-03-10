$(function() {
        
        var twoNav=$('.inMain .detail');

        $('.menu .inMenu').hover(function() {
            var i=$(this).index();
            $('.inMain').stop(true).show('slow');
            //同时只有一个二级LI显示，做排他
            twoNav.eq(i).show();
            twoNav.eq(i).siblings().hide();

        }, function() {

            //鼠标离开时，要让整个二级导航滑动隐藏
            $('.inMain').stop(true).hide('slow');
           
        });

        $('.inMain').hover(function() {
        	
            //当鼠标落到twoNavList身上时，会触发slideUp动画，所以去清空这个动画
            $('.inMain').stop(true);

        }, function() {
            //离开二级导航时，也要让整个二级导航滑动隐藏
            $('.inMain').stop(true).hide('slow');
        });




});