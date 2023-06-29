import styled from "styled-components";
import {vars} from "./vars";

export const CardListWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
`

export const CardListContainer = styled.div`
	margin: 20px 0;
  display: flex;
	justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`

export const CardContainer = styled.div`
	position: relative;
	width: 300px;
	height: 450px;
	
	border: 1px solid #ccc;
	
	&:hover{
		box-shadow: 0 0 10px #ccc;
	}
`

export const CardTitle = styled.p`
	position: absolute;
  width: 96%;
  display: flex;
  justify-content: center;
  top: 4px;
  left: 10px;
	font-size: ${vars.$fontsizeTitle};
	color: ${vars.$colorThemeMain};
`