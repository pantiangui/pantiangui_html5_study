$(function () {
    (function () {
        var ulobj = $(".show-list-con ul");
        var picimg = $(".introShow .show-pic img");
        var objimg = $(".introShow .show-shadow img");
        ulobj.on("mouseenter", "li", function () {
            var imgsrc = $(this).children("img").attr("src");
            $(this).addClass("active").siblings().removeClass("active");
            picimg.attr("src", imgsrc);
            objimg.attr("src", imgsrc);
        });
        $('.i_lift').click(function(){
            var imgsrc = $('.imageul .active').prev().children("img").attr("src");
            $('.imageul .active').prev().addClass("active").siblings().removeClass("active");
            picimg.attr("src", imgsrc);
            objimg.attr("src", imgsrc);
            if($('.imageul .active').index()==0){
                var llength=$('.imageul li').length;
                // console.log(llength);
                var imgsrc = $('.imageul li').eq(0).children("img").attr("src");
                $('.imageul li').eq(llength-1).addClass("active").siblings().removeClass("active");
                picimg.attr("src", imgsrc);
                objimg.attr("src", imgsrc);
            }
            // console.log($('.imageul .active').index());
        });
        $('.i_right').click(function(){
            var imgsrc = $('.imageul .active').next().children("img").attr("src");
            $('.imageul .active').next().addClass("active").siblings().removeClass("active");
            picimg.attr("src", imgsrc);
            objimg.attr("src", imgsrc);
            if($('.imageul .active').index()==3){
                var llength=$('.imageul li').length;
                // console.log(llength);
                var imgsrc = $('.imageul li').eq(0).children("img").attr("src");
                $('.imageul li').eq(0).addClass("active").siblings().removeClass("active");
                picimg.attr("src", imgsrc);
                objimg.attr("src", imgsrc);
            }
            // console.log($('.imageul .active').prev().index());
        });
        var pic = $(".introShow .show-pic");
        var magnify = $(".introShow .show-pic .magnify");
        var bigpic = $(".introShow .show-shadow");
        var objimg = $(".introShow .show-shadow img");
        pic.mousemove(function (e) {
            magnify.show();
            bigpic.show();
            var pagex = e.pageX;
            var pagey = e.pageY;
            var pictop = pic.offset().top;
            var picleft = pic.offset().left;
            var magnifyw = magnify.width();
            var magnifyh = magnify.height();
            var magnifytop = pagey - pictop - magnifyh / 2;
            var magnifyleft = pagex - picleft - magnifyw / 2;
            var picw = pic.width() - magnifyw;
            var pich = pic.height() - magnifyh;
            magnifytop = magnifytop < 0 ? 0 : magnifytop;
            magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
            magnifytop = magnifytop > pich ? pich : magnifytop;
            magnifyleft = magnifyleft > picw ? picw : magnifyleft;
            magnify.css({
                top: magnifytop,
                left: magnifyleft
            });
            var minl = bigpic.width() - objimg.width();
            var mint = bigpic.height() - objimg.height();
            var objimgl = -magnifyleft * 2;
            var objimgt = -magnifytop * 2;
            objimgl = objimgl < minl ? minl : objimgl;
            objimgt = objimgt < mint ? mint : objimgt;
            objimg.css({
                top: objimgt,
                left: objimgl
            })
        });
        pic.mouseleave(function () {
            magnify.hide();
            bigpic.hide()
        })
    })()
});
