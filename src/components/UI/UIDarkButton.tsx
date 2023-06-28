import React, {ReactNode} from 'react';
import * as S from "../../styles/headerStyles";

type Props = {
	children: string | ReactNode
	onMouseEnter?: () => void
	onMouseLeave?: () => void
}

const UIDarkButton = ({onMouseEnter, onMouseLeave, children}: Props) => {
	return (
		<S.UIDarkButton onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{children}
		</S.UIDarkButton>
	);
};

export default UIDarkButton;