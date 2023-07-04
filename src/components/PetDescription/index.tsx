import React, {useEffect, useState} from 'react';
import * as S from "../../styles/petDescriptionStyles";
import {useParams} from "react-router-dom";
import {getPetDescription} from "../../stub/getPetDescription";
import {Pet} from "../../types/petData";
import ImagesBlock from "./ImagesBlock";

const PetDescription = () => {
	const {id} = useParams()
	const fetchPet = () => getPetDescription 																//axios
	const [petData, setPetData] = useState<Pet>()

	useEffect(() => {
		setPetData(fetchPet())
	}, [])

	return (
		<S.PetContainer>
			<ImagesBlock imageURLs={petData?.images}/>
			<S.DescBlock>
				<S.DescTitle>{petData?.petName}</S.DescTitle>
				<S.DescAddress>{petData?.addressLost}</S.DescAddress>
				<S.DescTel>{petData?.ownerData.ownerTel}</S.DescTel>
			</S.DescBlock>

		</S.PetContainer>
	);
};

export default PetDescription;