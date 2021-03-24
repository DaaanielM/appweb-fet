import React from 'react';
import Button from './Button';
const Categorias = () => {
	return (
		<div className='container column is-6'>
			<br />
			<br />
			<table className='table is-bordered is-striped is-hoverable'>
				<thead className='has-background-info'>
					<tr className='hola'>
						<th
							scope='col'
							className='has-text-white has-text-centered'>
							ID
						</th>
						<th
							scope='col'
							className='has-text-white has-text-centered'>
							Nombre
						</th>
						<th
							scope='col'
							className='has-text-white has-text-centered'>
							Precio
						</th>
						<th
							scope='col'
							className='has-text-white has-text-centered'>
							Descripción
						</th>
						<th
							scope='col'
							className='has-text-white has-text-centered'>
							Categoría
						</th>
						<th
							scope='col'
							className='has-text-white has-text-centered'>
							Acciones
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>La Zorra</td>
						<td>8000</td>
						<td>Tiene carne de res, pollo y vegetales</td>
						<td>Hamburguesa</td>
						<td>
							<Button />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Categorias;
