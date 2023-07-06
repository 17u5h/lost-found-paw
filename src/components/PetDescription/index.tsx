import React, {useEffect, useState} from 'react';
import * as S from "../../styles/petDescriptionStyles";
import {useParams} from "react-router-dom";
import {getPetDescription} from "../../stub/getPetDescription";
import {Pet} from "../../types/petData";
import ImagesBlock from "./ImagesBlock";
import UILightButton from "../UI/UILightButton";

const PetDescription = () => {
	const {id} = useParams()
	const fetchPet = () => getPetDescription 																//axios
	const [petData, setPetData] = useState<Pet>()

	useEffect(() => {
		setPetData(fetchPet())

	}, [])

	return (
		<S.PetContainer>
			{petData?.images.length > 0 ? <ImagesBlock imageURLs={petData?.images}/> : <S.PetImageSkeleton/>}
			<S.DescBlock>
				<S.DescTitle>{'Имя: ' + petData?.petName}</S.DescTitle>
				<S.DescAddress>{'Адрес пропажи: ' + petData?.addressLost}</S.DescAddress>
				<S.DescTel>{'Телефон владельца: ' + petData?.ownerData?.ownerTel}</S.DescTel>
				<S.ButtonWrapper>
					<UILightButton>Позвонить</UILightButton>
				</S.ButtonWrapper>
			</S.DescBlock>

		</S.PetContainer>
	);
};

export default PetDescription;