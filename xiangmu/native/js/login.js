$('.details').on('mouseover','.mubiao',function(){
    $(this).children().eq(1).css('display','block');
});
$('.details').on('mouseout','.mubiao',function(){
    $(this).children().eq(1).css('display','none');
});