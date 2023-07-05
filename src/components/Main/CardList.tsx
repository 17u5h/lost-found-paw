import React from 'react';
import * as S from '../../styles/mainStyles'
import {getInitData} from "../../stub/getInitData";
import CardItem from "./CardItem";

const CardList = () => {
	return (
		<S.CardListWrapper>
			<S.CardListContainer>
				{getInitData.map(card => (<CardItem key={card.id}
																						id={card.id}
																						petName={card.petName}
																						addressLost={card.addressLost}
																						images={card.images}
																						isFound={card.isFound}
																						founderData={card.founderData}
																						ownerData={card.ownerData}/>))}
			</S.CardListContainer>
		</S.CardListWrapper>

	);
};

export default CardList;