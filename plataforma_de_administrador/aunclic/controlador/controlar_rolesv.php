<?php // CONTROLADOR
 session_start();
 $opcion=$_POST['opcion'];
 $val=0;
switch ($opcion) {
 case 1:// validar la entrada al sistema
     	 $documento= $_POST['documento'];
	  	$clave= $_POST['clave'];
	require_once("../modelo/logueo.php");
		
		$validar=new Logueo();


	if ($estado=$validar->getadministracionsValidar($documento,$clave)) {
		
			if($estado==1) {
			            require_once("../vista/administracion_tienda.php");
					}
			 else{
				   require_once("../vista/estado mensaje.php");
			}
		 	
		}
	
	else {
		 	require_once("../error validar.html");
		}
  break;
case '2':

require_once("../modelo/productos.php");

$atributos=new Productos();


$nombre=$_POST['nombre'];
$atributos->setNombre($nombre);


$precio=$_POST['precio'];
$atributos->setPrecio($precio);
$descripcion=$_POST['descripcion'];
$atributos->setDescripcion($descripcion);
$atributos->setCategoria($_POST['categoria']);

if (isset ($_FILES["imagen"])) {

        $imagen = "../vista/imagenes_productos/";
        $rutaimagen = "imagenes_productos/";
		$imagen= $imagen.basename( $_FILES["imagen"]["name"]); 
		$rutaimagen=$rutaimagen.basename( $_FILES["imagen"]["name"]); 
if(move_uploaded_file($_FILES["imagen"]["tmp_name"], $imagen) ) 
echo "";
    $atributos->setImagen($rutaimagen);

			}

  $valor=$atributos->insertarProducto();

  if($valor){
  	 require_once("../vista/respuesta insertar.php");
  }


  	break;  

case '3':
	require_once("../vista/administracion_tienda.php");

	break;

case '4':

require_once("../modelo/productos.php");

$atributos=new Productos();


$id_producto=$_POST['id_producto'];	
$atributos->setId_producto($id_producto);
$nombre=$_POST['nombre'];
$atributos->setNombre($nombre);


$precio=$_POST['precio'];
$atributos->setPrecio($precio);
$descripcion=$_POST['descripcion'];
$atributos->setDescripcion($descripcion);

$estado=$_POST['estado'];
$atributos->setEstado($estado);

echo ''.$estado;
echo ''.$id_producto;
$valor=$atributos->modificarProducto($id_producto);



if($valor){
	
	require_once("../vista/respuesta insertar.php");
  }


	break;
	
	case '5':

		require_once("../modelo/productos.php");
		
		$atributos=new Productos();
		
		
		$categoria=$_POST['categoria'];
		$atributos->setCategoria($categoria);
		
		if (isset ($_FILES["imagen"])) {
		
				$imagen = "../vista/imagenes_categorias/";
				$rutaimagen = "imagenes_categorias/";
				$imagen= $imagen.basename( $_FILES["imagen"]["name"]); 
				$rutaimagen=$rutaimagen.basename( $_FILES["imagen"]["name"]); 
		if(move_uploaded_file($_FILES["imagen"]["tmp_name"], $imagen) ) 
		echo "";
			$atributos->setImagen($rutaimagen);
		
					}
		
		  $valor=$atributos->registrarCategoria();
		
		  if($valor){
			   require_once("../vista/respuesta insertar.php");
		  }
		
		
			  break;


			  case '6':

				require_once("../modelo/productos.php");
				
				$atributos=new Productos();
				
				if (isset ($_FILES["imagen"])) {
				
						$imagen = "../vista/imagenes_banners/";
						$rutaimagen = "imagenes_banners/";
						$imagen= $imagen.basename( $_FILES["imagen"]["name"]); 
						$rutaimagen=$rutaimagen.basename( $_FILES["imagen"]["name"]); 
				if(move_uploaded_file($_FILES["imagen"]["tmp_name"], $imagen) ) 
				echo "";
					$atributos->setImagen($rutaimagen);
				
							}
				
				  $valor=$atributos->registrarBanner();
				
				  if($valor){
					   require_once("../vista/respuesta insertar.php");
				  }
				
				
					  break;

	
		
			  case '7':

				require_once("../modelo/productos.php");
				
				$atributos=new Productos();

				$id_pedido=$_POST['id_pedido'];	
				$estado=$_POST['estado'];
				
				$valor=$atributos->modificarEstadoPedido($id_pedido,$estado);
				
				if($valor){
					
					require_once("../vista/respuesta insertar.php");
				  }
				
				
					break;
	}//cierre del switch 	
