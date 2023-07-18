import React from 'react';
import * as S from "../../styles/UIStyles";

type Props = {
	onClick: () => void
	children: string
}

const UIDarkButton = ({children, onClick}: Props) => {
	return (
		<S.UIDarkButton onClick={onClick}>
			{children}
		</S.UIDarkButton>
	);
};

export default UIDarkButton;