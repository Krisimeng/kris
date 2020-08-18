$('.impressionwrap').on('mouseover','.chos',function(){
    $(this).prev().css('opacity','0.3');
    $(this).css('background','url(../img/search.png)no-repeat center');
});
$('.impressionwrap').on('mouseout','.chos',function(){
    $(this).prev().css('opacity','1');
    $(this).css('background','');
});
$('.details').on('mouseover','.mubiao',function(){
    $(this).children().eq(1).css('display','block');
});
$('.details').on('mouseout','.mubiao',function(){
    $(this).children().eq(1).css('display','none');
});
// 默认的样式，首次加载的页面样式
navlis[3].style.backgroundPositionY='-178px';
navlis[3].firstChild.style.color="#eaebeb";
navlis[3].firstChild.className="show";