<?php
header("Content-Type: application/json; charset=utf-8");

$postjson = json_decode(file_get_contents('php://input'), true);
include_once('config.php');
$result=mysqli_query($mysqli, "SELECT * FROM lista_productos WHERE id_categoria='$postjson[id_categoria]'") or die ('Error en el select');
$rows= array();
while($r=mysqli_fetch_assoc($result)){
    $rows[]=$r;
}
$respuesta = json_encode($rows);
echo $respuesta;
return $respuesta;
?>