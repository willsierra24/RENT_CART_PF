
import './Filter.css';

export function Filter() {  
	

	return (
		<div className='filtro'>
			<div>
				<div id='filtroT' className='filtroTitulo' >Car Filtering</div><br />
				<option value={"DEFA"}><input type="checkbox" ></input></option>

				
				<div className='filtroSeleccionar'>
					<div>  a filtrar:</div>
					<select id='filtroCon' className='filtroSeleccionarLista' onChange={(e) => cambioEnFiltro(e)}>
						
					</select>
					<div>  a filtrar:</div>
					<select id='filtroAct' className='filtroSeleccionarLista' onChange={(e) => cambioEnFiltro(e)}>
						
					</select>
					<div> Ordenar por:</div>
					<select className='filtroSeleccionarLista' onChange={(e) => cambioEnFiltro(e)}>
						<option default value={"DEFA"}></option>
						<option value={"(AZ)"}> (A - Z)</option> 
						<option value={"(ZA)"}> (Z - A)</option> 
						<option value={"(19)"}> (1 - 9)</option>
						<option value={"(91)"}> (9 - 1)</option> 
					</select>				
					
				</div>
			</div>
			
		</div>
	);
}

