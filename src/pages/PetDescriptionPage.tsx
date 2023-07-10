import React from 'react';
import * as S from '../styles/headerStyles'
import Logo from "../components/Logo";
import PetDescription from "../components/PetDescription";
import LoginButton from "../components/Header/LoginButton";

const PetDescriptionPage = () => {

	return (
		<>
			<S.Header>
				<Logo/>
				<LoginButton />
			</S.Header>
			<PetDescription/>
		</>
	);
};

export default PetDescriptionPage;