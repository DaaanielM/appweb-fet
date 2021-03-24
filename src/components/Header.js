import React from 'react';
import { Section, Container } from 'react-bulma-components';

const Header = ({ title }) => {
	return (
		<div>
			<Section class='section'>
				<Container>
					<h2 class='title has-text-centered'>{title}</h2>
				</Container>
			</Section>
		</div>
	);
};

export default Header;
