import styled from "styled-components";
import {vars} from "./vars";

export const PetImageSkeleton = styled.div`
  width: 400px;
  height: 600px;
  background-color: #f3f3f3;
`

export const PetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
	margin-top: 10vh;
	color: #000;
`

export const ImagesBlock = styled.div`
  width: 40vw;
  height: 50vw;
`

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const DescBlock = styled.div`
  display: flex;
  flex-direction: column;
	gap: 20px;
	width: 40vw;
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

export const ButtonWrapper = styled.div`
	width: 20vw;
`