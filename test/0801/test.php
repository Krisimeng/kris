<?php
    // 设置头部
    header('Content-Type:text/html;charset=utf-8');
    $mess = $_REQUEST['mess'];
    // 连接数据库
    $link = mysqli_connect('localhost','root','root','test');
    if(!$link){
        echo '{"error":0,"message":"连接失败"}';
        die();
    }
    // 设置数据库字符
    mysqli_set_charset($link,'utf8');
    // 编写mysql语句，
    $sql = "select * from duihua where con1='$mess'";
    
    // 执行查询语句
    $res = mysqli_query($link,$sql);
    $res_arr = mysqli_fetch_all($res,1);
    // echo count($res_arr);
    if(count($res_arr)>0){
        echo json_encode($res_arr,JSON_UNESCAPED_UNICODE);
    }else{
        echo '看不懂你写的什么意思！！！';
    }

?>