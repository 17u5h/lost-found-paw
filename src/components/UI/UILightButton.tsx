import React, {ReactNode} from 'react';
import * as S from "../../styles/UIStyles";

type Props = {
	children: string | ReactNode
	onClick?: () => void
	onMouseEnter?: () => void
	onMouseLeave?: () => void
	$isLoginButton?: boolean
}

const UILightButton = ({onMouseEnter, onMouseLeave, children, $isLoginButton, onClick}: Props) => {
	return (
		<S.UILightButton onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} $isLoginButton={$isLoginButton} onClick={onClick}>
			{children}
		</S.UILightButton>
	);
};

export default UILightButton;