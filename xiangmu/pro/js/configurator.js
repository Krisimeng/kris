var allwrap = document.querySelector('.allwrap');
var wrap = document.querySelector('.wrap');
var module = document.querySelector('.module');
var  bikebody = document.querySelector('.bikebody');
var fwheela = document.querySelector('.fwheela');
var fwheelb = document.querySelector('.fwheelb');
var bwheela = document.querySelector('.bwheela');
var bwheelb = document.querySelector('.bwheelb');
var vorne = document.querySelector('.vorne');
var handerbar = document.querySelector('.handerbar');
var saddle = document.querySelector('.saddle');
var saddlebar = document.querySelector('.saddlebar');
var hinten = document.querySelector('.hinten');
var stem = document.querySelector('.stem');
var crank = document.querySelector('.crank');
var chain = document.querySelector('.chain');
var pedals = document.querySelector('.pedals');
var  colorbikebody = document.querySelector('.color-bikebody');
var colorfwheela = document.querySelector('.color-fwheela');
var colorfwheelb = document.querySelector('.color-fwheelb');
var colorbwheela = document.querySelector('.color-bwheela');
var colorbwheelb = document.querySelector('.color-bwheelb');
var colorhanderbar = document.querySelector('.color-handerbar');
var colorsaddle = document.querySelector('.color-saddle');
var colorsaddlebar = document.querySelector('.color-saddlebar');
var colorstem = document.querySelector('.color-stem');
var colorcrank = document.querySelector('.color-crank');
var colorchain = document.querySelector('.color-chain');
var colorpedals = document.querySelector('.color-pedals');
var modsadbox1 = document.querySelector('.modsadbox1');
var modsadbox2 = document.querySelector('.modsadbox2');
var modsadimg = document.querySelectorAll('.modulesaddleimg img');
var swiper = document.querySelector('.swiper');
var staticon = document.querySelector('.staticon');
var staticoff = document.querySelector('.staticoff');
var swiperbox = document.querySelector('.swiperbox');
var fixedopera = document.querySelector('.fixedopera');
// var bikehanbox = document.querySelector('.bikehanbox');
var prevcolorindex=0;

var claname;
var xpos = 0;
var ypos = 0;
var timero;
var bikeimg;
var nowhander;
var timero2;
var timero3;

var bike = [saddle,pedals,handerbar,bikebody,fwheela,fwheelb,bwheela,bwheelb,stem,crank,chain,saddlebar,hinten,vorne];
var bikeindex = ['saddle','pedals','handerbar','bikebody','fwheela','fwheelb','bwheela','bwheelb','stem','crank','chain','saddlebar','hinten','vorne'];
var colorbike = [colorsaddle,colorpedals,colorhanderbar,colorbikebody,colorfwheela,colorfwheelb,colorbwheela,colorbwheelb,colorstem,colorcrank,colorchain,colorsaddlebar];
// 默认的样式，首次加载的页面样式
navlis[0].style.backgroundPositionY='-178px';
navlis[0].firstChild.style.color="#eaebeb";
navlis[0].firstChild.className="show";



function hidebike(){
    for(var i=0;i<bike.length;i++){
        bike[i].style.opacity=0.3;
    }
}
function showbike(){
    for(var i=0;i<bike.length;i++){
        bike[i].style.opacity=1;
    }
}
function hidecolorbar(){
    var _this = this;
    clearTimeout(timero);
    timero=setTimeout(function(){
        _this.style.transform="scale(0) rotate(0deg)";
        animateto(_this,{opacity:0});
    },300);
    tiemro2=setTimeout(function(){
        _this.style.display='none';
    },300);
}
function operation(){
    // 单击确定点击的元素的opa属性，
    var seropa = $(this).attr('opa');
    var operaindex = bikeindex.indexOf(seropa);
    // 清除上次修改的样式，判断单击的是否同一个元素，不是就清除
    if(prevcolorindex!==operaindex){
        colorbike[prevcolorindex].style.display='none';
    }
    if(seropa==='handerbar'||seropa==='saddle'){
        var nowprop = getComputedStyle(colorbike[operaindex],null).display;
        if(nowprop==='none'){
            colorbike[operaindex].style.display='block';
        }else{
            colorbike[operaindex].style.display='none';
        }
    }else{
        var nowprop = getComputedStyle(colorbike[operaindex],null).display;
        if(nowprop==='none'){
            colorbike[operaindex].style.display='block';
            animateto(colorbike[operaindex],{
                opacity:1,
            });
            colorbike[operaindex].style.transform='scale(1) rotate(360deg)';
        }else{
            animateto(colorbike[operaindex],{
                opacity:0,
            });
            colorbike[operaindex].style.transform='scale(0) rotate(0deg)';
            clearTimeout(timero2);
            tiemro2=setTimeout(function(){
                colorbike[operaindex].style.display='none';
            },300);
        }
    }
    clearTimeout(timero3);
    timero3=setTimeout(function(){
        prevcolorindex = operaindex;
    },350)
}

function oparesize(){
    // console.log(document.documentElement.clientWidth);
    // var fixpos = document.documentElement.clientWidth - 1443;
    var fixpos = (document.documentElement.clientWidth-wrap.offsetWidth)/2;
    if(fixpos<=0){
        fixpos = (document.documentElement.clientWidth-wrap.offsetWidth);
    }
    fixedopera.style.right=fixpos + 'px';   
}



//添加移入移出事件,模型盒子和标记上都能触发
module.onmouseover = function(ev){
    var e = ev || event;
    var target = e.target || e.srcElement;
    // 判断标签，
    if(target.tagName==='SPAN'&&target.parentNode.className==='grab'){
        // hidebike();
        var spff = target.parentNode.parentNode.className;
        spff=spff.substring(5,spff.length);
        var index = bikeindex.indexOf(spff);
        hidebike();
        bike[index].style.opacity=1;
    }
    claname = target.className;
    claname = claname.substring(0,claname.length-3);
    var index = bikeindex.indexOf(claname);
    if(index!==-1){
        hidebike();
        bike[index].style.opacity=1;
    }
}
module.onmouseout = function(ev){
    var e = ev || event;
    var target = e.target || e.srcElement;
    claname = target.className;
    var index;
    claname = claname.substring(0,claname.length-3);
    var index = bikeindex.indexOf(claname);
    if(index!==-1){
        showbike();
    }
    if(target.className==='module' || target.tagName==='SPAN'){
        showbike();
    }
    
}
colorsaddle.onmouseleave=function(){
    clearTimeout(timero);
    timero=setTimeout(function(){
        modsadimg[0].style.opacity=1;     
        modsadimg[1].style.opacity=1; 
        colorsaddle.style.backgroundColor="rgba(255,255,255,0.8)";  
        colorsaddle.firstElementChild.style.backgroundColor="rgba(0,0,0,0.6)";
        colorsaddle.firstElementChild.nextElementSibling.style.display="none";
        colorsaddle.style.display='none';
    },500);
}
colorhanderbar.onmouseleave=function(){
    clearTimeout(timero);
    timero=setTimeout(function(){
        colorhanderbar.style.backgroundColor='rgba(255,255,255,0.8)';
        colorhanderbar.firstElementChild.style.backgroundColor='rgba(0,0,0,0.6)';
        colorhanderbar.firstElementChild.nextElementSibling.style.display="none";
        $('.bikehanbox').children().css('opacity',1);
        colorhanderbar.style.display='none';
    },500);

}
module.onmouseleave=function(){
    colorhanderbar.style.display='none';
}
colorbikebody.addEventListener('mouseleave',hidecolorbar);
colorsaddlebar.addEventListener('mouseleave',hidecolorbar);
colorstem.addEventListener('mouseleave',hidecolorbar);
colorfwheela.addEventListener('mouseleave',hidecolorbar);
colorfwheelb.addEventListener('mouseleave',hidecolorbar);
colorbwheela.addEventListener('mouseleave',hidecolorbar);
colorbwheelb.addEventListener('mouseleave',hidecolorbar);
colorchain.addEventListener('mouseleave',hidecolorbar);
colorcrank.addEventListener('mouseleave',hidecolorbar);
colorpedals.addEventListener('mouseleave',hidecolorbar);
// 单击标签会弹出样式
module.onclick=function(ev){
    var e = ev || event;
    var target = e.target || e.srcElement;
    if(target.tagName==='SPAN'&&target.parentNode.className==='grab'){
        // 确定父元素，然后根据父元素显示特定的,确定需要显示的内容，首先获取
        var shows = target.parentNode.parentNode.className;
        shows = shows.substring(5,shows.length);
        var index = bikeindex.indexOf(shows);
        colorbike[index].style.display='block';
        animateto(colorbike[index],{
            opacity:1,
        });
        colorbike[index].style.transform='scale(1) rotate(360deg)';
    }
    // 给每一个色块显示的添加，切换图片元素中的图片，首先确定父元素，被点击的颜色块的父元素，同时确定颜色的类名，div / red / color-bike ,

   
    if(target.parentNode.className==='red'||target.parentNode.className==='white'||target.parentNode.className==='green'||target.parentNode.className==='gray'||target.parentNode.className==='yellow'||target.parentNode.className==='gold'||target.parentNode.className==='purple'||target.parentNode.className==='blue'||target.parentNode.className==='skyblue'||target.parentNode.className==='brown'||target.parentNode.className==='black'){
        // 需要改变的东西是什么，需要改变的元素，于是需要处理当前，并且改变，判断是否是那个里面的，如果是的话，确定是哪个
        var res = target.parentNode.parentNode.className;
        console.log(target.parentNode.className);
        var colorurl = './img/bike/color/'+target.parentNode.className+'.png';
        if(res==='modsadbox1'||res==='modsadbox2'||res==='bikehancolor1'||res==='bikehancolor2'){
            // 需要改变的，需要查找的，   颜色值拼接，自行分辨，产生一个特殊的传入参数
            if(res==='modsadbox1'){
                // 返回一个特殊的组合字符，
                var imgdata = 'saddle1'+ target.parentNode.className;
                $.ajax({
                    url:'../data/imgdata.json',
                    data:imgdata,
                    type:'get',
                    dataType:'json',
                    success:function(json){
                       saddle.firstChild.src=json[imgdata];
                    },
                });
                $('[opa=saddle]').eq(0).attr('src',colorurl);
            }else if(res==='modsadbox2'){
                var imgdata = 'saddle2'+ target.parentNode.className;
                $.ajax({
                    url:'../data/imgdata.json',
                    data:imgdata,
                    type:'get',
                    dataType:'json',
                    success:function(json){
                       saddle.firstChild.src=json[imgdata];
                    },
                });
                $('[opa=saddle]').eq(0).attr('src',colorurl);
            }else{
                var shsh = target.parentNode.className;
                var imgdata = nowhander + shsh;
                $.ajax({
                    url:'../data/imgdata.json',
                    data:imgdata,
                    type:'get',
                    dataType:'json',
                    success:function(json){
                       handerbar.firstChild.src=json[imgdata];
                    },
                });
                $('[opa=handerbar]').eq(0).attr('src',colorurl);
            }
        }else{
            var str = target.parentNode.parentNode.className;
            var changeitem = str.substring(6,str.length);
            var imgdata = changeitem+target.parentNode.className;
            var arrindex = bikeindex.indexOf(changeitem);
            $.ajax({
                url:'../data/imgdata.json',
                data:imgdata,
                type:'get',
                dataType:'json',
                success:function(json){
                   bike[arrindex].firstChild.src=json[imgdata];
                },
            });
            $("[opa="+changeitem+"]").eq(0).attr('src',colorurl);
        }
    }
        
}
modsadimg[0].onclick=function(){
    colorsaddle.style.background='rgba(0,0,0,0.6)';
    colorsaddle.firstElementChild.style.backgroundColor="transparent";
    colorsaddle.firstElementChild.nextElementSibling.style.display="block";
    modsadbox1.style.display="block";
    modsadbox2.style.display="none";
    modsadimg[1].style.opacity=0.7;
    modsadimg[0].style.opacity=1;
}
modsadimg[1].onclick=function(){
    colorsaddle.style.background='rgba(0,0,0,0.6)';
    colorsaddle.firstElementChild.style.backgroundColor="transparent";
    colorsaddle.firstElementChild.nextElementSibling.style.display="block";
    modsadbox2.style.display="block";
    modsadbox1.style.display="none";
    modsadimg[0].style.opacity=0.7;
    modsadimg[1].style.opacity=1;
}

$('.bikehanbox').on('click','div',function(){
    $(this).css("opacity",1);
    $(this).siblings().css("opacity",0.7);
    $(this).parent().parent().css("background",'rgba(0,0,0,0.6)');
    $(this).parent().css('background','transparent');
    $(this).parent().next().css('display','block');
    if($(this).hasClass('basket')){
        $(this).parent().next().children().eq(2).css('display','block');
        $(this).parent().next().children().eq(1).css('display','none');
        nowhander = $(this).attr('class');
    }else{
        $(this).parent().next().children().eq(1).css('display','block');
        $(this).parent().next().children().eq(2).css('display','none');
        nowhander = $(this).attr('class');
    }
});


swiperbox.onclick=function(){
    var swiperstatus = swiper.innerText;
    if(swiperstatus==='OFF'){
        swiper.innerText='ON';
        swiper.style.right='0px';
        $(".module>div:gt(12):lt(12)").css('display','none');
    }else{
        swiper.innerText='OFF';
        swiper.style.right='48px';
        $(".module>div:gt(12):lt(12)").css('display','block');
        // console.log($(".module>div:gt(13):lt(11)"));
    }
}
$('.operabody').on('click','img',operation);
$('.operabody').on('click','span',operation);

// 根据用户浏览器的课时窗口的大小调整固定的位置。
// 获取用户浏览器的可视窗口的宽度
onresize=oparesize;
oparesize();