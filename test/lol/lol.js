// 变量声明
var topbox = document.querySelector('.topbox');
var topmenubar = document.querySelector('.topmenubar');
var search = document.querySelector('.search');
var loginwrap = document.querySelector('.loginwrap');
var android = document.querySelector('.android');
var logo = document.querySelector('.logo');
var submenu = document.querySelectorAll('.submenu');
var searchbar = document.querySelector('.searchbar');
var closese = document.querySelector('.closese');
var searchval = document.querySelector('.searchval');
// 方法声明
function showmenu(){
    topbox.style.cssText="height:352px;";
    topbox.style.background="linear-gradient(rgba(0,0,0,0.9) 5%,rgba(0,0,0,0.5)";
    showsub();
}
function hidemenu(){
    topbox.style.cssText="height:90px;";
    topbox.style.background="linear-gradient(rgba(0,0,0,0.75) 30%,rgba(0,0,0,0.6) 50%, rgba(0,0,0,0))";
    hidesub();
}
function showsub(){
    for(let i = 0;i<submenu.length;i++){
        submenu[i].style.display='block';
    }
}
function hidesub(){
    for(let i = 0;i<submenu.length;i++){
        submenu[i].style.display='none';
    }
}

// 执行






// 其他方法

topmenubar.addEventListener('mouseenter',showmenu);
topmenubar.addEventListener('mouseleave',hidemenu);

// 搜索事件
search.onclick=function(){
    searchbar.style.display='block';
    searchval.focus();
}
closese.onclick=function(){
    searchbar.style.display='none';
}