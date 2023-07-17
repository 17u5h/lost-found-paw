import styled from "styled-components";
import {vars} from "./vars";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 80px;
	width: 100%;
  background-color: ${vars.$colorThemeMain};
`

export const HeaderLogo = styled.div`
  width: 100px;
  height: 60px;
  background-color: #fff;
	color: #000;
	cursor: pointer;
`
export const SearchBlock = styled.div`
  display: flex;
	align-items: center;
  gap: 10px;
`

export const SearchField = styled.input`
  height: 40px;
  width: 400px;
  border: none;
  border-radius: 20px;
  padding-left: 20px;
	font-size: ${vars.$fontsizeRegular};

  &:focus, &:hover {
    outline: 2px solid ${vars.$colorThemeMainLighter};
		box-shadow: 0 0 30px ${vars.$colorThemeMainLighter};
  }

  &::placeholder {
    color: #aaa;
    font-size: ${vars.$fontsizeRegular};
  }
`

export const LoginButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: ${vars.$colorThemeMain};
    background-color: ${vars.$colorThemeReverse};
  }
`
export const LoginButtonSign = styled.p`
  font-size: ${vars.$fontsizeBigger};
  color: ${vars.$colorThemeReverse};
`
export const HeaderButtonsBlock = styled.div`
	display: flex;
	gap: 1vw;
`