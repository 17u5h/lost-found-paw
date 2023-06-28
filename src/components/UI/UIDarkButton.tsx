import React from 'react';
import * as S from "../../styles";

type Props = {
	children: string
}

const UIDarkButton = ({children}: Props) => {
	return (
		<S.UIDarkButton>
			{children}
		</S.UIDarkButton>
	);
};

export default UIDarkButton;