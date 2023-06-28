import styled from "styled-components";
import {vars} from "./vars";

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 80px;
	background-color: ${vars.$colorThemeMain};
`

export const HeaderLogo = styled.div`
	width: 100px;
	height: 60px;
	background-color: #fff;
`
export const SearchBlock = styled.div`
	display: flex;
	gap: 10px;
`

export const SearchField = styled.input`
	height: 40px;
	width: 400px;
	border: none;
	border-radius: 20px;
	
	&:active{
		border: 1px solid #000;
	}
`

export const UIDarkButton = styled.button`
	padding: 4px 16px;
	background-color: transparent;
	font-size: ${vars.$fontsizeBigger};
	color: #fff;
	border: 1px solid #fff;
	border-radius: 4px;
`