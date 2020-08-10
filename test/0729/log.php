<?php
// 设置头部和字符集
header('Content-Type:text/html;charset=utf-8');

// 获取传进来的参数
$type = $_REQUEST['type'];
$user = $_REQUEST['user'];
$pass = $_REQUEST['pass'];
echo $type;

// 连接数据库
$link = mysqli_connect('localhost','root','root','test');
if(!$link){
    echo '{"err":0,"msg":"连接失败"}';
    die();
}
mysqli_set_charset($link,'utf8');
if($type==='rege'){
    //编写sql语句，进行判断，
    $sql_sel="select * from account where user='$user' and pass='$pass'";
    $sql_res=mysqli_query($link,$sql_sel);
    $res_arr=mysqli_fetch_all($sql_res);
    if(count($res_arr)>0){
        echo '{"err":2,"msg":"用户名已被占用"}';
        die();
    }
    $sql_ins="insert into account(user,pass) values('$user','$pass')";
    mysqli_query($link,$sql_ins);
    $ins_arr=mysqli_affected_rows($link);
    if($ins_arr > 0){
        echo '{"err":3,"msg":"注册成功"}';
    }else{
        echo '{"err":4,"msg":"注册失败"}';
    }
}
if($type==='login'){

}
mysqli_close($link);
?>