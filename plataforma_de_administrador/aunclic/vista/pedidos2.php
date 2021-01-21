<br><br>

<div class="row  shadow p-3 mb-5 bg-gradient-info rounded" style="height:50px;">
		<div class="col" align="center">
			<h3>Pedidos</h3>
            </div>
		</div>


<div class="row">
<?php
     $estado=$_POST['estado'];
 require_once("../modelo/productos.php");

  $consu=new Productos();
    $cont=0;
 if($lista=$consu->listarPedidos($estado)){
    
     foreach($lista as $pedido){
        $cont++;
            echo '
                    <div class="col order-3" >
                    
                        <div class="card shadow p-3" style="width: 18rem;">
                            <div class="card-body">
                            <div align="center">
                            <h3 class="card-text" ><strong>Pedido #' . $pedido["id_pedido"] . '</strong></h3></div>
                                <form action="controlar_rolesv.php" method="post">
                                    <input name="opcion" value="7" type="hidden" />
                                    <input name="id_pedido" value="' . $pedido["id_pedido"] . '" type="hidden" />
                                    
                                    <strong>Documento:</strong>
                                    ' . $pedido["documento"] . '<br>
                                    <strong>Nombre:</strong>
                                    ' . $pedido["nombre"] . '<br>
                                    <strong>Apellido:</strong>
                                    ' . $pedido["apellido"] . '<br>
                                    <strong>Telefono:</strong>
                                    ' . $pedido["telefono"] . '<br>
                                    <strong>Direccion:</strong>
                                    ' . $pedido["direccion"] . '<br>
                                    <strong>Información Adicional:</strong>
                                    ' . $pedido["infoadi"] . '<br>
                                    <strong>Pedido:</strong>
                                    ' . $pedido["pedido"] . '<br>
                                    <strong>Total:</strong>
                                    $' . $pedido["total"] . '<br>
                                    <strong>Estado:</strong>
                                    ' . $pedido["estado"] . '
                                    <select class="form-control" name="estado" id="estado'.$cont.'" onChange="botonhabilitar('.$cont.')">
                                        <option value="">Seleccionar</option>
                                        <option value="en proceso">En proceso</option>
                                        <option value="enviado">Enviado</option>
                                        <option value="entregado">Entregado</option>
                                    </select>
                                    <br>
                                    <button id="b'.$cont.'" disabled class="btn btn-info" type="submit">Modificar estado del pedido</button>
                                </form>
                                
                            </div>
                        </div>
                    </div>
            ';
}}
else{echo'No hay productos';
	
}
 ?>
</div>
 