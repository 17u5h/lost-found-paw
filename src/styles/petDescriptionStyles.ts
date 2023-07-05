import styled from "styled-components";
import {vars} from "./vars";


export const PetContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
`

export const ImagesBlock = styled.div`
	width: 400px;
	height: 600px;
	object-fit: contain;
`

export const DescBlock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const DescTitle = styled.p`
	font-size: ${vars.$fontsizeTitle};
`

export const DescAddress = styled.p`
	font-size: ${vars.$fontsizeRegular};
`

export const DescTel = styled.p`
  font-size: ${vars.$fontsizeRegular};

`