import React from 'react';
import * as S from '../styles/headerStyles'
import Logo from "../components/Logo";
import PetDescription from "../components/PetDescription";

const PetDescriptionPage = () => {
	return (
		<>
			<S.Header>
				<Logo/>
			</S.Header>
			<PetDescription/>
		</>
	);
};

export default PetDescriptionPage;