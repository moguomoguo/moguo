<?php
    /*
        验证用户有效性
 * 验证用户是否被占用(用户是否存在数据库)
 */

include 'connect.php';

$username = isset($_GET['username']) ? $_GET['username'] : null;

$sql = "select * from user where username='$username'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "no";
} else {
    echo "yes";
}

?>