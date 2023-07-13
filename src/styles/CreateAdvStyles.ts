import styled from "styled-components";
import {vars} from "./vars";

export const Wrapper = styled.div`
	max-width: 1440px;
	margin: auto;
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2vh;
	margin-top: 4vh;
	width: 80vw;
`

export const InputBlock = styled.div`
	display: flex;
	align-items: center;
	gap: 4vw;
`

export const InputLabel = styled.p`
	font-size: ${vars.$fontsizeBigger};
	color: #000;
	width: 20vw;
`

export const Input = styled.input`
	padding: 8px 16px;
	max-width: 60%;
	border: 1px solid ${vars.$colorThemeMain};
	border-radius: 6px;
	font-size: ${vars.$fontsizeRegular};
	
	&:focus, &:hover {
    outline: 2px solid ${vars.$colorThemeMainLighter};
    box-shadow: 0 0 20px ${vars.$colorThemeMainLighter};
	}
`