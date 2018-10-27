<?php

include 'connect.php';
    // 接收请求参数
$sort = isset($_GET['sort']) ? $_GET['sort'] : null;
$desc = isset($_GET['desc']) ? true : false;

$sql = "select * from list";

if ($sort) {
    $sql .= " order by $sort*1";
        // 降序
    if ($desc) {
        $sql .= " desc";
    }
}
$result = $conn->query($sql);

$row = $result->fetch_all(MYSQLI_ASSOC);

$result->close();

$conn->close();

echo json_encode($row, JSON_UNESCAPED_UNICODE);
?>