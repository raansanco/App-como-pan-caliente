<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token ");
header("Content-Type: application/json; charset=utf-8");

include "config.php";

$postjson = json_decode(file_get_contents('php://input'), true);

$today = date('Y-m-d H:i:s');
if($postjson ['aksi']=="proceso_registro"){

    $cekemail = mysqli_fetch_array(mysqli_query($mysqli, " SELECT correo FROM usuarios WHERE correo='$postjson[correo]'"));

    if ($cekemail['correo']==$postjson['correo']){
        $result = json_encode(array('success'=>false, 'msg'=>'Email ya en uso'));
    }else{

    $contrasena = md5($postjson['contrasena']);

    $insert = mysqli_query($mysqli, "INSERT INTO usuarios SET
    nombre          = '$postjson[nombre]',
    apellido        = '$postjson[apellido]',
    documento       = '$postjson[documento]',
    telefono        = '$postjson[telefono]',
    correo          = '$postjson[correo]',
    contrasena      = '$contrasena',
    direccion       = '$postjson[direccion]',
    creado_el       = '$today'
    ");
    if($insert) {
        $result = json_encode(array('success' => true, 'msg'=>'Registro completado'));
    }else {
        $result = json_encode(array('success'=> false, 'msg'=> 'Error de registro'));
    }
    }

    echo $result;
}

else if($postjson['aksi']=='proceso_login'){

    $contrasena = md5($postjson['contrasena']);
    $logindata = mysqli_fetch_array(mysqli_query($mysqli, " SELECT * FROM usuarios WHERE correo='$postjson[correo]' AND contrasena='$contrasena'"));
    
    $data = array(
    'id_usuario'      => $logindata['id_usuario'],
    'nombre'          => $logindata['nombre'],
    'apellido'        => $logindata['apellido'],
    'documento'       => $logindata['documento'],
    'telefono'        => $logindata['telefono'],
    'correo'          => $logindata['correo'],
    'direccion'       => $logindata['direccion']);
    


    if($logindata) {
        $result = json_encode(array('success' => true, 'result'=>$data));
    }else {
        $result = json_encode(array('success'=> false));
    }

    echo $result;
} else if ($postjson ['aksi']=="proceso_carrito"){

    $insert = mysqli_query($mysqli, "INSERT INTO carrito SET
    id_usuario          = '$postjson[id_usuario]',
    imagen        = '$postjson[imagen]',
    nombre       = '$postjson[nombre]',
    precio        = '$postjson[precio]',
    subtotal          = '$postjson[subtotal]',
    cantidad      = '$postjson[cantidad]'
    ");
    if($insert) {
        $result = json_encode(array('success' => true, 'msg'=>'Registro completado'));
    }else {
        $result = json_encode(array('success'=> false, 'msg'=> 'Error de registro'));
    }
    

    echo $result;
}

else if ($postjson ['aksi']=="borrar_carrito"){

    $insert = mysqli_query($mysqli, "DELETE FROM carrito WHERE id_item='$postjson[id]'");
    if($insert) {
        $result = json_encode(array('success' => true));
    }else {
        $result = json_encode(array('success'=> false, 'msg'=> 'Error'));
    }
    

    echo $result;
}

else if ($postjson ['aksi']=="agregar_pedido"){

    $insert = mysqli_query($mysqli, "INSERT INTO pedidos SET
    id_usuario          = '$postjson[id_usuario]',
    documento        = '$postjson[documento]',
    nombre       = '$postjson[nombre]',
    apellido        = '$postjson[apellido]',
    telefono          = '$postjson[telefono]',
    direccion      = '$postjson[direccion]',
    infoadi      = '$postjson[infoadi]',
    pedido      = '$postjson[pedido]',
    total      = '$postjson[total]',
    estado     = 'en proceso'

    ");
    if($insert) {
        $result = json_encode(array('success' => true, 'msg'=>'Pedido agregado correctamente'));
    }else {
        $result = json_encode(array('success'=> false, 'msg'=> 'Error'));
    }
    

    echo $result;
}
else if ($postjson ['aksi']=="vaciar_carrito"){

    $insert = mysqli_query($mysqli, "DELETE FROM carrito WHERE id_usuario='$postjson[id_usuario]'");
    if($insert) {
        $result = json_encode(array('success' => true, 'msg'=>'Carrito vaciado'));
    }else {
        $result = json_encode(array('success'=> false, 'msg'=> 'Error'));
    }
    

    echo $result;
}

else if ($postjson ['aksi']=="consulta_productos"){

    $insert = mysqli_query($mysqli, "SELECT * FROM lista_productos WHERE id_categoria='$postjson[id_categoria]'");
    if($insert) {
        $result = json_encode(array('success' => true, 'msg'=>'Carrito vaciado'));
    }else {
        $result = json_encode(array('success'=> false, 'msg'=> 'Error'));
    }
    

    echo $result;
}