import React from 'react';
import * as S from '../styles/headerStyles'
import {useNavigate} from "react-router-dom";

const Logo = () => {
	const navigate = useNavigate()

	return (
		<S.HeaderLogo onClick={() => navigate('/')}>
			лого
		</S.HeaderLogo>
	);
};

export default Logo;