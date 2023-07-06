import React, {ReactNode} from 'react';
import * as S from "../../styles/UIStyles";

type Props = {
	children: string | ReactNode
	onMouseEnter?: () => void
	onMouseLeave?: () => void
}

const UILightButton = ({onMouseEnter, onMouseLeave, children}: Props) => {
	return (
		<S.UILightButton onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{children}
		</S.UILightButton>
	);
};

export default UILightButton;