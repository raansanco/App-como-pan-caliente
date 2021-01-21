function detalleCategoria() {
     var id_categoria = document.getElementById('id_categoria').value;
     parametros = { "id_categoria": id_categoria };
     $.ajax({
          data: parametros,
          url: "../vista/categoriasproductos3.php",
          type: "post",
          beforeSend: function () {
               $("#cargar2").html('<div class="loading"><img src="loader.gif" alt="Cargando formulario" /></div>');
          },
          success: function (vista) {
               $("#cargar2").html(vista);
          }
     });
}
function detallePedido() {
     var estado = document.getElementById('estado').value;
     parametros = { "estado": estado };
     $.ajax({
          data: parametros,
          url: "../vista/pedidos2.php",
          type: "post",
          beforeSend: function () {
               $("#cargar2").html('<div class="loading"><img src="loader.gif" alt="Cargando formulario" /></div>');
          },
          success: function (vista) {
               $("#cargar2").html(vista);
          }
          
     });
}
function botonhabilitar(cont){
     
     if(document.getElementById('estado'+cont).value!=""){
         
         document.getElementById('b'+cont).disabled=false;
     } else if (document.getElementById('estado'+cont).value=="") {

          document.getElementById('b'+cont).disabled=true;
     }
 }

function detallePedidos() {
     $.ajax({
          
          url: "../vista/pedidos.php",
          type: "post",
          beforeSend: function () {
               $("#cargar").html('<div class="loading"><img src="loader.gif" alt="Cargando formulario" /></div>');
          },
          success: function (vista) {
               $("#cargar").html(vista);
          }
     });
}

function verProducto() {
     $.ajax({
          url: "../vista/consultarproducto.php",
          type: "post",
          beforeSend: function () {
               $("#cargar").html('<div class="loading"><img src="loader.gif" alt="Cargando formulario" /></div>');
          },
          success: function (vista) {
               $("#cargar").html(vista);
          }
     });
}
function registrarCategoria() {
     $.ajax({
          url: "../vista/categorias.php",
          type: "post",
          beforeSend: function () {
               $("#cargar").html('<div class="loading"><img src="loader.gif" alt="Cargando formulario" /></div>');
          },
          success: function (vista) {
               $("#cargar").html(vista);
          }
     });
}
function registrarBanner() {
     $.ajax({
          url: "../vista/banners.php",
          type: "post",
          beforeSend: function () {
               $("#cargar").html('<div class="loading"><img src="loader.gif" alt="Cargando formulario" /></div>');
          },
          success: function (vista) {
               $("#cargar").html(vista);
          }
     });
}

function registrarProductos() {
     $.ajax({
          url: "../vista/registrarproductos.php",
          type: "post",
          beforeSend: function () {
               $("#cargar").html('<div class="loading"><img src="loader.gif" alt="Cargando formulario" /></div>');
          },
          success: function (vista) {
               $("#cargar").html(vista);
          }
     });
}
function verVentasP() {
     $.ajax({
          url: "../vista/ver ventasP.php",
          type: "post",
          beforeSend: function () {
               $("#cargar").html('<div class="loading"><img src="loader.gif" alt="Cargando formulario" /></div>');
          },
          success: function (vista) {
               $("#cargar").html(vista);
          }
     });
}
function verVentasC() {
     $.ajax({
          url: "../vista/ver ventasC.php",
          type: "post",
          beforeSend: function () {
               $("#cargar").html('<div class="loading"><img src="loader.gif" alt="Cargando formulario" /></div>');
          },
          success: function (vista) {
               $("#cargar").html(vista);
          }
     });
}
function inventarioVer() {
     $.ajax({
          url: "../vista/todos inventario.php",
          type: "post",
          beforeSend: function () {
               $("#cargar").html('<div class="loading"><img src="loader.gif" alt="Cargando formulario" /></div>');
          },
          success: function (vista) {
               $("#cargar").html(vista);
          }
     });
}
function consultarProductoINV() {
     var codigo = document.getElementById('codigo').value;
     parametros = { "codigo": codigo };
     $.ajax({
          data: parametros,
          url: "../vista/consultar productoINV.php",
          type: "post",
          beforeSend: function () {
               $("#cargar").html('<div class="loading"><img src="loader.gif" alt="Cargando formulario" /></div>');
          },
          success: function (vista) {
               $("#cargar").html(vista);
          }
     });
}
function inventarioProducto() {
     $.ajax({
          url: "../vista/registrar inventario.php",
          type: "post",
          beforeSend: function () {
               $("#cargar").html('<div class="loading"><img src="loader.gif" alt="Cargando formulario" /></div>');
          },
          success: function (vista) {
               $("#cargar").html(vista);
          }
     });
}

function consultarProducto() {
     $.ajax({
          url: "../vista/consultar producto.php",
          type: "post",
          beforeSend: function () {
               $("#cargar").html('<div class="loading"><img src="loader.gif" alt="Cargando formulario" /></div>');
          },
          success: function (vista) {
               $("#cargar").html(vista);
          }
     });
}
function registrarProducto() {
     $.ajax({
          url: "../vista/registrar producto.php",
          type: "post",
          beforeSend: function () {
               $("#cargar").html('<div class="loading"><img src="loader.gif" alt="Cargando formulario" /></div>');
          },
          success: function (vista) {
               $("#cargar").html(vista);
          }
     });
}



function registrarProducto2(id_aliado) {

     parametros = { "id_aliado": id_aliado };
     $.ajax({
          data: parametros,
          url: "view/tablalistarlicores.php",
          type: "post",
          beforeSend: function () {
               $("#cargar").html('<div class="loading"><img src="loader.gif" alt="Cargando productos" /><br/>Cargando los prodcutos que vos queres...</div>');
          },
          success: function (vista) {
               $("#cargar").html(vista);
          }
     });
}
function validarEstado() {
     if (document.getElementById('estado').value == 4) {
          document.getElementById('div_des_bajo').style.display = "block";
     }
     else {
          document.getElementById('div_des_bajo').style.display = "none";
     }
}