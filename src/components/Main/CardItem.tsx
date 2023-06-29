import React from 'react';
import {Pet} from "../../types/petData";
import * as S from "../../styles/mainStyles";

const CardItem = ({id, petName, addressLost, images, isFound}: Pet) => {
	return (
		<S.CardContainer>
			<S.CardTitle>{petName}</S.CardTitle>

		</S.CardContainer>
	);
};

export default CardItem;