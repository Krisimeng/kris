$('.showimgbox').on('mouseover','.imgbox',function(){
    $(this).css('opacity',0.3);
});
$('.showimgbox').on('mouseover','.showwrap',function(){
    $(this).css('color',"gold");
});
$('.showimgbox').on('mouseout','.imgbox',function(){
    $(this).css('opacity',1);
});
$('.showimgbox').on('mouseout','.showwrap',function(){
    $(this).css('color',"white");
});
// 默认的样式，首次加载的页面样式
navlis[1].style.backgroundPositionY='-178px';
navlis[1].firstChild.style.color="#eaebeb";
navlis[1].firstChild.className="show";