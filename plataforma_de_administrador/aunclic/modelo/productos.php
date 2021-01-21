<?php
 class Productos{
  
private $nombre;
private $precio;
private $descripcion;
private $imagen;
private $categoria;
private $todosProductos;
private $todosPedidos;
private $id_pedido;
private $estado;
private $id_producto;





//********variables encapsuladas************
public function setNombre($nombre){
    $this->nombre=$nombre;
    }
 public function setPrecio($precio){
    $this->precio=$precio;
    }
    public function setDescripcion($descripcion){
    $this->descripcion=$descripcion;
    }
    public function setImagen($imagen){
    $this->imagen=$imagen;
    }
public function setCategoria($categoria){
    $this->categoria=$categoria;
    }
    public function setEstado($estado){
      $this->estado=$estado;
      }
      public function setId_producto($id_producto){
        $this->id_producto=$id_producto;
        }




//------------------------------------------------------------- conexion base de datos
public function __construct(){
	require_once('ConectarBD.php');
	$this->db=ConectarBD::conexion();
}
//-----------------------------------------------------
public function ListarProductos($id_categoria){
              $consulta=$this->db->query("SELECT *            
              	                          FROM lista_productos WHERE id_categoria='$id_categoria'");
                    while( $fila=$consulta->fetch( PDO::FETCH_ASSOC ) ){
			          $this->todosProductos[]=$fila;
			     }//cierra while
		            return $this->todosProductos;
}
//-------------------------------------------------------------------------------
//-----------------------------------------------------
public function ListarCategorias(){
  $consulta=$this->db->query("SELECT *            
                              FROM categorias ");
        while( $fila=$consulta->fetch( PDO::FETCH_ASSOC ) ){
    $this->todosProductos[]=$fila;
}//cierra while
    return $this->todosProductos;
}
//-------------------------------------------------------------------------------
  public function modificarProducto(){
    
$sql="UPDATE lista_productos SET nombre='$this->nombre',descripcion='$this->descripcion',precio='$this->precio', estado='$this->estado'  WHERE id_producto='$this->id_producto'";
    $update=$this->db->query($sql);
  return true;  } 
//-----------------------------------------------------------------------------------------
public function modificarEstadoPedido($id_pedido,$estado){
  $sql="UPDATE pedidos SET  estado='$estado'  WHERE id_pedido='$id_pedido'";
      $update=$this->db->query($sql);
    return true;  } 
  //-----------------------------------------------------------------------------------------
public function ListarProductoInv($codigo){
              $consulta=$this->db->query("SELECT *            
                                          FROM lista_productos,inventario WHERE lista_productos.id_pro=inventario.id_pro and lista_productos.id_pro='$codigo'");
                    while( $fila=$consulta->fetch( PDO::FETCH_ASSOC ) ){
                $this->todosProductos[]=$fila;
           }//cierra while
                return $this->todosProductos;
}

 public function insertarProducto(){

    $sql="INSERT INTO lista_productos VALUES(0,'$this->nombre','$this->precio','$this->descripcion','$this->categoria','$this->imagen','inactivo') ";
     $inser=$this->db->query($sql); 

    return true;

    }
    public function registrarCategoria(){

      $sql="INSERT INTO categorias VALUES(0,'$this->categoria','$this->imagen') ";
       $inser=$this->db->query($sql); 
  
      return true;
  
      }

      public function registrarBanner(){

        $sql="INSERT INTO banners VALUES(0,'$this->imagen') ";
         $inser=$this->db->query($sql); 
    
        return true;
    
        }

        public function listarPedidos($estado){

          $sql=$this->db->query("SELECT *            
          FROM pedidos  WHERE estado='$estado'");
          while( $fila=$sql->fetch( PDO::FETCH_ASSOC ) ){
            $this->todosPedidos[]=$fila;

          }
          return $this->todosPedidos;
          }


          public function listarPedidosEnviados(){

            $sql=$this->db->query("SELECT *            
          FROM pedidos  WHERE estado='enviado'");
          while( $fila=$sql->fetch( PDO::FETCH_ASSOC ) ){
            $this->todosPedidos[]=$fila;

          }
          return $this->todosPedidos;
        
            }
            public function listarPedidosEntregados(){

              $sql=$this->db->query("SELECT *            
          FROM pedidos  WHERE estado='entregado'");
          while( $fila=$sql->fetch( PDO::FETCH_ASSOC ) ){
            $this->todosPedidos[]=$fila;

          }
          return $this->todosPedidos;
          
              }
              public function listarPedidosEnProceso2($id){

                $sql=$this->db->query("SELECT *            
                FROM pedidos  WHERE estado='en proceso' AND id_pedido='$id'");
                while( $fila=$sql->fetch( PDO::FETCH_ASSOC ) ){
                  $this->todosPedidos[]=$fila;
      
                }
                return $this->todosPedidos;
                }
      
      
                public function listarPedidosEnviados2($id){
      
                  $sql=$this->db->query("SELECT *            
                FROM pedidos  WHERE estado='enviado' AND id_pedido='$id'");
                while( $fila=$sql->fetch( PDO::FETCH_ASSOC ) ){
                  $this->todosPedidos[]=$fila;
      
                }
                return $this->todosPedidos;
              
                  }
                  public function listarPedidosEntregados2($id_pedido){
      
                    $sql=$this->db->query("SELECT *            
                FROM pedidos  WHERE estado='entregado' AND id_pedido='$id_pedido'");
                while( $fila=$sql->fetch( PDO::FETCH_ASSOC ) ){
                  $this->todosPedidos[]=$fila;
      
                }
                return $this->todosPedidos;
                
                    }

  
  }//cierra la clase principal 

?>