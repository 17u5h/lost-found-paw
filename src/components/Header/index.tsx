import React from 'react';
import Logo from "../Logo";
import Search from "./Search";
import LoginButton from "./LoginButton";
import * as S from '../../styles'

const Header = () => {
	return (
		<S.Header>
			<Logo/>
			<Search/>
			<LoginButton/>
		</S.Header>
	);
};

export default Header;