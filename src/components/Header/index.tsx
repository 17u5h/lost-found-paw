import React from 'react';
import Logo from "../Logo";
import Search from "./Search";
import LoginButton from "./LoginButton";
import * as S from '../../styles/headerStyles'
import CreateAdvButton from "./CreateAdvButton";

const Header = () => {
	const isPetPage = false																				//useSelector
	const isAuth = true																						//useSelector
	const isCreateAdvPage = true																	//useSelector

	return (
		<S.Header>
			<Logo/>
			{!isPetPage && !isCreateAdvPage && <Search/>}
			<S.HeaderButtonsBlock>
				{isAuth && !isCreateAdvPage && <CreateAdvButton/>}
				<LoginButton />
			</S.HeaderButtonsBlock>
		</S.Header>
	);
};

export default Header;