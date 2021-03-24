import React from 'react';
import { Section, Container, Button } from 'react-bulma-components';

const AddButton = () => {
	return (
		<div>
			<Section class='buttons'>
				<Container>
					<Button class='button is-link'>Editar</Button>
					<Button class='button is-danger'>Eliminar</Button>
				</Container>
			</Section>
		</div>
	);
};

export default AddButton;
