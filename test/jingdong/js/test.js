// 1.利用递归求15的阶乘 ? ( 1307674368000 )
// var sum = 0;
// function digui(n){
//     if(n==1){
//         return 1;
//     }
//     return n*digui(n-1);
// }
// alert(digui(15));




// 2.公园里有一堆桃子，猴子每天吃掉一半，挑出一个坏的扔掉，
// 第6天的时候发现还剩1个桃子，问原来有多少个桃子？

// function digui(n){
//     if(n==6){
//         return 1;
//     }
//     return (digui(n+1)+1)*2
// }
// alert(digui(1));


// 编写一个函数，计算任意两个数字之间所能组成的奇数个数，数字必须是个位数
//   比如： 计算0-3之间能组成的奇数个是01、03、11、13、21、23、31、33

// function jishu(a,b){
//     for(var i=a;i<=b;i++){
//             for(var j=a;j<=b;j++){
//                 var sum=i+''+j;
//                 if(parseInt(sum)%2==0){

//                 }else{
//                     console.log(sum);
//                 }
//         }
        
//     }
// }
// jishu(0,3);

// var x = 98125147821;
// // x.toString(8);
// console.log(x.toString(8));
// console.log(x.toString(2));
// console.log(x.toString(16));
// var num=12;
// switch(true){
//     case (num <= 5): console.log(0);breask;
//     case (num <= 15 && num > 5):console.log(1);break;
//     case (num <= 25 && num > 25): console.log(2);break;
//     case (num <= 55 && num > 55): console.log(3);break;
// }
// var a=prompt("nihao","123");
// alert(a);
// var inpt = document.querySelector('.inpt');
// inpt.onmousemove = function(){
//     console.log(111);
// }
alert(123);