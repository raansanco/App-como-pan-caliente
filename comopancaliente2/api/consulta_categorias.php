<?php

include_once('config.php');
$result=mysqli_query($mysqli, "SELECT * FROM categorias") or die ('Error en el select');
$rows= array();
while($r=mysqli_fetch_assoc($result)){
    $rows[]=$r;
}
$respuesta = json_encode($rows);
echo $respuesta;
return $respuesta;
?>