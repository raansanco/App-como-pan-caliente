<?php
 class Logueo{
  private $db;
  private $aliados;
  private $estado;
  private $documento;
  private $clave;
  
//*********************variables encapsuladas*********************************
//------------------------------------------------------------- conexion base de datos
public function __construct(){
	require_once('ConectarBD.php');
	$this->db=ConectarBD::conexion();
  $this->rol=false;
}
//-----------------------------------------------------

public function getadministracionsValidar($documento,$clave){

    $sql="SELECT estado FROM administracion WHERE documento='".$documento."' AND  clave='".$clave."'";
    $consulta=$this->db->query($sql);
    while( $fila=$consulta->fetch( PDO::FETCH_ASSOC ) ){
  $this->estado=$fila["estado"];
        }
    return $this->estado;
    }

  }//cierra la clase principal 

?>