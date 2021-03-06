<form action="controlar_rolesv.php" method="post" enctype="multipart/form-data">

	<div class="container-fluid shadow p-3 mb-5 bg-white rounded">
		<div class="container-fluid shadow p-3 mb-5 bg-gradient-info rounded" style="height:100px;">
			<div class="col" align="center">
				<svg width="40px" height="40px" viewBox="0 0 16 16" class="bi bi-file-earmark-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
					<path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
					<path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
				</svg>
				<h3>REGISTRO DE PRODUCTO</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-4">Nombre del producto</div>
			<div class="col-4"><input type="text" name="nombre" class="form-control" required="yes"></div>
		</div>
		<div class="row">
			<div class="col-4">Precio</div>
			<div class="col-4"><input type="text" name="precio" class="form-control" required="yes"></div>
		</div>
		<div class="row">
			<div class="col-4">Descripcion</div>
			<div class="col-4"><input type="text" name="descripcion" class="form-control" required="yes"></div>
		</div>

		<div class="row">
			<div class="col-4">Categoria</div>
			<div class="col-4">
				<select class="form-control" name="categoria" id="categoria">
					<option value="">Seleccionar</option>
					<?php

					require_once("../modelo/productos.php");

					$consu = new Productos();

					$lista = $consu->ListarCategorias();

					foreach ($lista as $categoria) {

						echo ' 
			
			<option value="' . $categoria['id_categoria'] . '">' . $categoria['categoria'] . '</option> 
			
			';
					}


					?>
				</select>
			</div>
		</div>
		<div class="row">
			<div class="col-4">Imagen(ancho x alto)</div>
			<div class="col-4"><input type="file" name="imagen" required="yes" class="form-control">

			</div>

		</div>
		<div class="row">
			<div class="col" align="center"><br><br><button class="btn btn-info">
					<i class="fas fa-save"></i>
					Guardar</button></div>

		</div>
	</div><input type="hidden" name="opcion" value="2">
</form>