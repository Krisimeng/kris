// 默认的样式，首次加载的页面样式
navlis[2].style.backgroundPositionY='-178px';
navlis[2].firstChild.style.color="#eaebeb";
navlis[2].firstChild.className="show";
// 声明
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var slideul = document.querySelector('.slideul');
var slidelis = document.querySelectorAll('.slideul li');
var slide_now_index = 1;
var slide_prev_index = 1;
var slideimg = document.querySelector('.slideimgwrap img');
var details = document.querySelector('.details');
for(var i=0;i<slidelis.length;i++){
    slidelis[i].index=i;
}





// prev,next移入移出方法定义
function slidebtnover(){
    this.style.backgroundPositionY='-280px';
}
function slidebtnout(){
    this.style.backgroundPositionY='0px';
}


// 轮播图的切换
prev.onclick = function(){
    // 判断是不是第一个
    if(slide_now_index===1){
        slide_now_index=10;
    }else{
        slide_now_index--;
    }
    // 切换图片并给特定的下标的类名，清除所有其他的类名，添加类名。
    slideimg.src='./img/lad' + slide_now_index + '.jpg';
    slidelis[slide_prev_index-1].className='';
    slidelis[slide_now_index-1].className='checkeda';
    slide_prev_index=slide_now_index;
    // 文字的切换
}
next.onclick = function(){
    // 判断是不是最后一个
    if(slide_now_index===10){
        slide_now_index=1;
    }else{
        slide_now_index++;
    }
    // 切换图片并给特定的下标的类名，清除所有其他的类名，添加类名。
    slideimg.src='./img/lad' + slide_now_index + '.jpg';
    slidelis[slide_prev_index-1].className='';
    slidelis[slide_now_index-1].className='checkeda';
    slide_prev_index=slide_now_index;
    // 文字的切换
}
slideul.onclick=function(ev){
    var e = ev || event;
    var target = e.target || e.srcElement;
    if(target.tagName==='LI'&&target.parentNode.className==='slideul'){
        var img = target.index+1;
        slideimg.src='./img/lad' + img + '.jpg';
        slidelis[slide_prev_index-1].className='';
        target.className='checkeda';
        slide_prev_index=img;
    }
}
// prev，next移入样式切换，
prev.addEventListener('mouseover',slidebtnover);
prev.addEventListener('mouseout',slidebtnout);
next.addEventListener('mouseover',slidebtnover);
next.addEventListener('mouseout',slidebtnout);
details.onmouseover=function(ev){
    var e = ev || event;
    var target = e.target || e.srcElement;
    if(target.tagName==='IMG'&&target.parentNode.parentNode.className==='details'){
        target.nextElementSibling.style.display='block';
    }
    if(target.tagName==='DIV'&&target.parentNode.parentNode.className==='details'){
        target.style.display="block";
        target.style.color='#d8b339';
    }
}
details.onmouseout=function(ev){
    var e = ev || event;
    var target = e.target || e.srcElement;
    if(target.tagName==='IMG'&&target.parentNode.parentNode.className==='details'){
        target.nextElementSibling.style.display='none';
    }
    if(target.tagName==='DIV'&&target.parentNode.parentNode.className==='details'){
        target.style.color='#fff';
    }
};


