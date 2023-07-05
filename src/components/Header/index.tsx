import React from 'react';
import Logo from "../Logo";
import Search from "./Search";
import LoginButton from "./LoginButton";
import * as S from '../../styles/headerStyles'
import CreateAdvButton from "./CreateAdvButton";

const Header = () => {
	const isPetPage = true																				//useSelector
	const isAuth = true																						//useSelector

	return (
		<S.Header>
			<Logo/>
			{!isPetPage && <Search/>}
			{isAuth && <CreateAdvButton/>}
			<LoginButton />
		</S.Header>
	);
};

export default Header;