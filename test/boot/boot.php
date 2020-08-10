<?php
    header('Content-Type:text/html;charset=utf-8');
    $type = $_GET['type'];
    $page = $_GET['page'];
    $name = $_GET['name'];
    $age = $_GET['age'];
    $sex = $_GET['sex'];
    $phone = $_GET['phone'];
    $userId = $_GET['usId'];
    
    // 连接数据库
    $link = mysqli_connect('localhost','root','root','test');
    if(!$link){
        echo'{"error":-1,"msg":"连接失败"}';
        die();
    }
    if($type==='page'){
        // 查询所有数据条数，
        $all_sql = "select * from user";
        $all_res = mysqli_query($link,$all_sql);
        $total = mysqli_affected_rows($link);
        // 设置每个页面的数据条数，和起始点
        $star = ($page-1)*8;
        // 查询当前页面的数据。通过id查询数据，并顺序排列，从$start开始排列8个
        $page_sql="select * from user order by id limit $star,8";
        $page_res = mysqli_query($link,$page_sql);
        $page_num = mysqli_fetch_all($page_res,1);
        // 数据解码
        $data = json_encode($page_num);
        if(count($page_num)>0){
            echo'{"err":1,"msg":"分页数据","total":'.$total.',"data":'.$data.'}';
        }else{
            echo '{"err":0,"msg":"暂无数据","total":"","data":""}';
        }
    }else if($type==='update'){
        // 先声明sql语句
        $update_sql="update user set name='$name',sex='$sex',age='$age',phone='$phone' where id='$userId'";
        $update_res=mysqli_query($link,$update_sql);
        $update_num=mysqli_affected_rows($link);
        if($update_num>0){
            echo '{"err":1,"msg":"修改成功"}';
        }else{
            echo '{"err":0,"msg":"修改失败"}';
        }
    }else if($type==='insert'){
        $insert_sql="insert into user set name='$name',sex='$sex',age='$age',phone='$phone'";
        $insert_res=mysqli_query($link,$insert_sql);
        $insert_num=mysqli_affected_rows($link);
        if($insert_num>0){
            echo '{"err":1,"msg":"添加成功"}';
        }else{
            echo '{"err":0,"msg":"添加失败"}';
        }
    }else if($type==='delete'){
        $delete_sql="delete from user where id=$userId";
        $delete_res=mysqli_query($link,$delete_sql);
        echo'{"err":1,"msg":"删除成功"}';
    }
    mysqli_close($link);
?>