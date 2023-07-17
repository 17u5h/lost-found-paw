import React, {useEffect} from 'react';
import Logo from "../Logo";
import Search from "./Search";
import LoginButton from "./LoginButton";
import * as S from '../../styles/headerStyles'
import CreateAdvButton from "./CreateAdvButton";
import {useNavigationStore} from "../../store/useNavigationStore";

const Header = () => {
	const isAuth = true																						//useSelector
	const {isCreateAdvPage, isPetPage} = useNavigationStore(({isCreateAdvPage, isPetPage}) => ({isCreateAdvPage, isPetPage}))


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