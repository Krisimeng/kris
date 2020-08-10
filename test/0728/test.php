<?php
header('Content-Type:text/html;charset=utf-8');
// $name = $_REQUEST['name'];
// $phone = $_REQUEST['phone'];
// $sex = $_REQUEST['sex'];
// $age = $_REQUEST['age'];
//连接数据库，
$link = mysqli_connect('localhost','root','root','test');
    if(!$link){
        die('连接失败,'. mysqli_connect_error());
    };

//设置编码字符集，
mysqli_set_charset($link,'utf-8');
// 编写修改sql语句
// $sql_del="delete user ";
//增加指令，
// $sql_adds="INSERT INTO user (name,age,sex,phone) VALUES ('$name','$age','$sex','$phone')";
// 修改指令
// $sql_upd = "update user set phone = '$phone' where username = '$name'";
//删除指令
// $sql_del = "delete from user where name ='$name'";
//查询指令，
$sql_sel ="select * from user where name='兔子'";
// echo $sql_sel;
// 执行sql语句
$res = mysqli_query($link,$sql_sel);
// $res = mysqli_query($link,$sql_upd);
// 判断执行结果
$rows = mysqli_fetch_all($res,1);
// $rows = mysqli_fetch_all($res,1);
// 判断是否有查询的数据
if ( count($rows) <= 0 ){
    die('您查询的内容暂无数据');
}

// echo '<pre>';
echo json_encode($rows,JSON_UNESCAPED_UNICODE);

// if(!$res){
//     echo '{"error":0,"msg":"失败"}';
//     die();
// }
// echo '{"error":1,"msg":"成功"}';
// 给前端返回特定格式的数据

// 关闭连接
mysqli_close($link);

?>