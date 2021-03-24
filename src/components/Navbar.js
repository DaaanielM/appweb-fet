import '../assets/css/Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
	return (
		<div class='main-navbar'>
			<div className='container-nav'>
				<nav className='nav-main'>
					<ul className='nav-menu show'>
						<li>
							<Link to={'/Home'} className='link'>
								Home
							</Link>
						</li>
						<li>
							<Link to={'/Usuarios'} className='link'>
								Usuarios
							</Link>
						</li>
						<li>
							<Link to='/Roles' className='link'>
								Roles
							</Link>
						</li>
						<li>
							<Link to='/Productos' className='link'>
								Productos
							</Link>
						</li>
						<li>
							<Link to='/Categorias' className='link'>
								Categorías
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
