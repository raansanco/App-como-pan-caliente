<?php



$postjson = json_decode(file_get_contents('php://input'), true);

include_once('config.php');
$result=mysqli_query($mysqli, "SELECT * FROM pedidos WHERE id_usuario='$postjson[id_usuario]'") or die ('Error en el select');
$rows= array();
while($r=mysqli_fetch_assoc($result)){
    $rows[]=$r;
}
$respuesta = json_encode($rows);
echo $respuesta;
return $respuesta;
?>