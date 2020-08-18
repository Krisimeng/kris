$('.showwrap').on('mouseover','.detail',function(){
    $(this).children().eq(1).css('display','block');
});
$('.showwrap').on('mouseout','.detail',function(){
    $(this).children().eq(1).css('display','none');
});
// 默认的样式，首次加载的页面样式
navlis[4].style.backgroundPositionY='-178px';
navlis[4].firstChild.style.color="#eaebeb";
navlis[4].firstChild.className="show";

