<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token ");
header("Content-Type: application/json; charset=utf-8");

$postjson = json_decode(file_get_contents('php://input'), true);


include_once('config.php');
$insert=mysqli_query($mysqli, "DELETE FROM carrito WHERE id_item='$postjson[id_item]'") or die ('Error en el select');
if($insert) {
    $result = json_encode(array('success' => true));
}else {
    $result = json_encode(array('success'=> false, 'msg'=> 'Error'));
}


echo $result;
?>