import React from 'react';
import * as S from '../../styles/mainStyles'
import {stubData} from "../../stub/stubData";
import CardItem from "./CardItem";

const CardList = () => {
	return (
		<S.CardListWrapper>
			<S.CardListContainer>
				{stubData.map(card => (<CardItem key={card.id}
																				 id={card.id}
																				 petName={card.petName}
																				 addressLost={card.addressLost}
																				 images={card.images}
																				 isFound={card.isFound}
																				 founderData={card.founderData}/>))}
			</S.CardListContainer>
		</S.CardListWrapper>

	);
};

export default CardList;