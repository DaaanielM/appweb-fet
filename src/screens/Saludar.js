import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AddButton from '../components/Button';
import 'react-bulma-components/dist/react-bulma-components.min.css';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Usuarios from '../components/Usuarios';
import Roles from '../components/Roles';
import Categorias from '../components/Categorias';
import Productos from '../components/Productos';

export default function Hola() {
	return (
		<Router>
			<>
				<Navbar />
				<Switch>
					<Route path={'/Home'} component={Home}></Route>
					<Route path={'/Usuarios'} component={Usuarios}></Route>
					<Route path={'/Roles'} component={Roles}></Route>
					<Route path={'/Productos'} component={Productos}></Route>
					<Route path={'/Categorias'} component={Categorias}></Route>
				</Switch>
			</>
		</Router>
	);
}
