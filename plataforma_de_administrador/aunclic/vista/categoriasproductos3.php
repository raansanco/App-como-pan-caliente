<br><br>
<div class="row">
<?php
  $id_categoria=$_POST['id_categoria'];

 require_once("../modelo/productos.php");

  $consu=new Productos();
  $cont=0;
 if($lista=$consu->ListarProductos($id_categoria)){
    
     foreach($lista as $registro){
            $cont++;
            echo '
                    <div class="col order-3" align="center">
                    
                        <div class="card shadow p-3" style="width: 18rem;">
                            <img src="../vista/' . $registro['imagen'] . '" class="card-img-top rounded" >
                            <div class="card-body">
                                <form action="controlar_rolesv.php" method="post">
                                    <input name="opcion" value="4" type="hidden"/>
                                    <p class="card-text"><input class="form-control" type="hidden" name="id_producto" value="' . $registro["id_producto"] . '" ></p>
                                    <strong>Nombre:</strong>
                                    <p class="card-text"><input class="form-control" type="text" name="nombre" value="' . $registro["nombre"] . '"></p>
                                    <strong>Descripción:</strong>
                                    <p class="card-text"><input class="form-control" type="text" name="descripcion" value="' . $registro["descripcion"] . '"></p>
                                    <strong>Precio:</strong>
                                    <p class="card-text"><input class="form-control" type="text" name="precio" value="' . $registro["precio"] . '"></p>
                                    <strong>Estado:</strong>
                                    '. $registro["estado"] .'
                                    <p class="card-text">
                                    <select class="form-control" name="estado" id="estado'.$cont.'" onChange="botonhabilitar('.$cont.')" >
                                        <option value="">Seleccionar</option>
                                        <option value="caliente">caliente</option>
                                        <option value="frio">frio</option>
                                    </select>
                                    </p>
                                    <button id="b'.$cont.'" disabled class="btn btn-info" type="submit">Modificar</button>
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
 