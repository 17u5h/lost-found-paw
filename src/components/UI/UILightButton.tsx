import React, {ReactNode} from 'react';
import * as S from "../../styles/UIStyles";

type Props = {
	children: string | ReactNode
	onMouseEnter?: () => void
	onMouseLeave?: () => void
	$isLoginButton?: boolean
}

const UILightButton = ({onMouseEnter, onMouseLeave, children, $isLoginButton}: Props) => {
	return (
		<S.UILightButton onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} $isLoginButton={$isLoginButton}>
			{children}
		</S.UILightButton>
	);
};

export default UILightButton;