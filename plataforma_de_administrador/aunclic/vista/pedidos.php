<div class="container-fluid shadow p-3 mb-5 bg-white rounded">
	<div class="container-fluid shadow p-3 mb-5 bg-gradient-info rounded" style="height:100px;">
		<div class="col" align="center">
			<svg width="40px" height="40px" viewBox="0 0 16 16" class="bi bi-file-earmark-bar-graph" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
				<path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3zm-5 11a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z" />
			</svg>
			<h4>ATENDER PEDIDOS</h4>
		</div>
        
	</div>
    <div class="row">
		<div class="col">
			<h3>Seleccione los pedidos según su estado</h3>
			<select class="form-control" name="estado" id="estado" onchange="detallePedido();">
				<option value="">Seleccionar</option>
                <option value="en proceso">En proceso</option>
                <option value="enviado">Enviado</option>
                <option value="entregado">Entregado</option> </select>
		</div>
	</div>
    <div class="row">
		<div class="col" id="cargar2" type="hidden">
			Cargar panes aqui
		</div>
	</div>
    
    </div>