// 获取元素------------------------------------------------------------------------------------------------------
//top
var po = document.querySelector('.po');
var pose = document.querySelector('.pose');
var poa = document.querySelector('.poa');
var polia = document.querySelectorAll('.po-li a');
var poli = document.querySelectorAll('.po-li li');
var pol = document.querySelectorAll('.po-li');
var trjd = document.querySelector('.tr-jd');
var jd = document.querySelector('.divjd');
var trqy = document.querySelector('.tr-qy');
var pro = document.querySelector('.procurement');
var client = document.querySelector('.tr-kh');
var clientserve = document.querySelector('.clientserve');
var trwz = document.querySelector('.tr-wz');
var website = document.querySelector('.websitenav');
var qrwrap = document.querySelector('.qrwrap');
var qr = document.querySelector('.qr');

// 定义变量------------------------------------------------------------------------------------------------------



//定位的数组
var poliava = [];
//移入移出事件的所有控件
var alltopli = [trjd,pro,client,trwz];




// 定义方法------------------------------------------------------------------------------------------------------
//将所有的省份放入数组中，
for(var i=0;i<polia.length;i++){
    poliava[i]=polia[i].innerText;
}
// 将地址的颜色变成白色的，选中的颜色变成白色，首先需要，确定你选中的给每一个添加点击事件，如果点击了，就给一个类名，事件委托



//top-po鼠标移入
po.onmouseenter = function(){
    // alert(123);
    pose.style.display="block";
    poa.style.cssText="border:1px solid #ccc;color:#e33333;border-bottom:none;background:white url(../img/po.png)no-repeat 12px 9px;";
}
// top-po鼠标移出
po.onmouseleave = function(){
    pose.style.display="none";
    poa.style.cssText="border:1px solid transparent;color:#999;border-bottom:none;background:url(../img/po.png)no-repeat 12px 9px;";
}

//tr-jd的移入事件
trjd.onmouseenter = function(){
    jd.style.display="block";
    trjd.style.cssText="background:white;border:1px solid #ccc;border-bottom:none;";
}
//tr-jd的移出事件
trjd.onmouseleave = function(){
    jd.style.display="none";
    trjd.style.cssText="border:1px solid transparent;border-bottom:none;";
}

//procurement移入事件
trqy.onmouseenter = function(){
    pro.style.display="block";
    trqy.style.cssText="background:white;border:1px solid #ccc;border-bottom:none;";
}

//procurement移出事件
trqy.onmouseleave = function(){
    pro.style.display="none";
    trqy.style.cssText="border:1px solid transparent;border-bottom:none;";
}

//client移入事件
client.onmouseenter = function(){
    clientserve.style.display="block";
    this.style.cssText="background:white;border:1px solid #ccc;border-bottom:none;";
}

//client移出事件
client.onmouseleave = function(){
    clientserve.style.display="none";
    this.style.cssText="border:1px solid transparent;border-bottom:none;";
}
//tr-wz移入事件
trwz.onmouseenter = function(){
    website.style.display="block";
    this.style.cssText="background:white;border:1px solid #ccc;border-bottom:none;";
}


//tr-wz移出事件
trwz.onmouseleave = function(){
    website.style.display="none";
    this.style.cssText="border:1px solid transparent;border-bottom:none;";
}
//qrwrap移入事件
qrwrap.onmouseenter = function(){
    qr.style.display="block";
}

//qrwrap移出事件

qrwrap.onmouseleave = function(){
    qr.style.display="none";
}





//代码优化整理，对于所有的当前所有的移入移出事件的整理。









// 方法执行------------------------------------------------------------------------------------------------------