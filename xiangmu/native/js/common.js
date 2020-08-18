var nav = document.querySelector('.nav');
let navlis = document.querySelectorAll('.nav li');
var bottomul = document.querySelector('.bottom-ul');
var botullis = document.querySelectorAll('.bottom-ul li');


// 清除导航栏中的添加的所有类名
function navchecked(){
    for(var i=0;i<navlis.length;i++){
        navlis[i].firstChild.className="";
        navlis[i].style.backgroundPositionY='0';
        navlis[i].firstChild.style.color="#515151";
    }
}

// 将所有的移除事件执行后，将所有的样式还原
function botullist(){
    for(var i=0;i<botullis.length;i++){
        botullis[i].style.background="#e7e9ea";
        botullis[i].firstChild.style.color='#373737';
    }
}


// nav选中移入切换效果
nav.onclick = function(ev){
    var e = ev || event;
    var target = e.target || e.srcElement;
    if(target.parentNode.parentNode.className==='nav'){
       navchecked();
       target.parentNode.style.backgroundPositionY='-178px';
       target.style.color="#eaebeb";
       target.className='show';
    //    previndex=tar.length-1
    }
}
nav.onmouseover = function(ev){
    var e = ev || event;
    var target = e.target || e.srcElement;
    if(target.parentNode.parentNode.className==='nav' && target.className!=='show'){
       target.parentNode.style.backgroundPositionY='-89px';
       target.style.color="#c4a22e";
    }
}
nav.onmouseout = function(ev){
    var e = ev || event;
    var target = e.target || e.srcElement;
    if(target.parentNode.parentNode.className==='nav'&&target.className!=='show'){
       target.parentNode.style.backgroundPositionY='0';
       target.style.color="#515151";
    }
}
// 底部的动态效果
bottomul.onmouseover=function(ev){
    var e = ev || event;
    var target = e.target || e.srcElement;
    var tagclass= target.className.substring(0,target.className.length-1);
    console.log(tagclass);
    if(target.tagName==='LI'&&target.parentNode.className==='bottom-ul'&&tagclass!=='botul-li'){
        botullist();
        target.style.background="#f1f1f1";
        target.firstChild.style.color='#d3b23f';
    }
    if(target.tagName==='SPAN'&&target.parentNode.tagName==='LI'){
        botullist();
        target.parentNode.style.background="#f1f1f1";
        target.style.color='#d3b23f';
    }

};
bottomul.onmouseout=function(ev){
    var e = ev || event;
    var target = e.target || e.srcElement;
    var tagclass= target.className.substring(0,target.className.length-1);
    if(target.tagName==='LI'&&target.parentNode.className==='bottom-ul'&&tagclass!=='botul-li'){
        target.style.background="#e7e9ea";
        target.firstChild.style.color='#373737';
    }
};