import React from 'react';
import {Pet} from "../../types/petData";
import * as S from "../../styles/mainStyles";

const CardItem = ({id, petName, addressLost, images, isFound, founderData, ownerData}: Pet) => {
	const navigate = useNavigate()

	return (
		<S.CardContainer onClick={navigate(`/pet/${id}`)}>
			<S.CardTitle>{petName}</S.CardTitle>
			{images[0] ? <S.CardImage src={images[0]} alt='pet photo'/> : <p>no picture</p>}
			<S.LostFoundSign $isFound={isFound}>{isFound ? 'FOUND' : 'LOST'}</S.LostFoundSign>
			<S.CardDescription>
				<p>{addressLost}</p>
				<p>Способ связи с владельцем: {ownerData?.ownerTel}</p>
			</S.CardDescription>
		</S.CardContainer>
	);
};

export default CardItem;