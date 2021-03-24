import React from 'react';
import '../assets/css/Cards.css';
import BurgerImage from '../assets/img/h1.jpg';
const Productos = () => {
	return (
		<div className='main-hg'>
			<div className='card-hg'>
				<img src={BurgerImage} alt='' className='img-hg ' />
				<h2 className='nombre_hg'>La Zorra</h2>
				<p className='descripcion_hg'>
					Tiene carne de res, pollo, vegetales
				</p>
				<p className='precio_hg'>
					<span className='dolar'>$</span> 8000{' '}
				</p>
				<button type='submit' className='agregar_hg'>
					Agregar
				</button>
			</div>
		</div>
	);
};

export default Productos;
