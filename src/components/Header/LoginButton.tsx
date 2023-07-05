import React, {useState} from 'react';
import * as S from "../../styles/headerStyles";
import UIDarkButton from "../UI/UIDarkButton";
import LoginSign from "./LoginSign";
import {vars} from "../../styles/vars";

const LoginButton = () => {
	const isAuth = true        																					  //useSelector
	const [svgColor, setSvgColor] = useState<string>('#fff')

	const toggleHoverTrue = () => {
		setSvgColor(vars.$colorThemeMain)
	}
	const toggleHoverFalse = () => {
		setSvgColor(vars.$colorThemeReverse)
	}

	return (
		<UIDarkButton onMouseEnter={toggleHoverTrue} onMouseLeave={toggleHoverFalse}>
			<S.LoginButtonContainer>
				{isAuth ?
					<p>Войти</p>
					:
					<p>Зарегистрироваться</p>
				}
					<LoginSign color={svgColor}/>
			</S.LoginButtonContainer>
		</UIDarkButton>

	);
};

export default LoginButton;