<?php

include 'connect.php';

$id = isset($_GET['id']) ? $_GET['id'] : null;

$sql = "select * from list where id = '$id' ";

$result = $conn->query($sql);

$row = $result->fetch_all(MYSQLI_ASSOC);

$result->close();

$conn->close();

echo json_encode($row, JSON_UNESCAPED_UNICODE);
?>