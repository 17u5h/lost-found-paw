import styled from "styled-components";
import {vars} from "./vars";

export const FooterContainer = styled.div`
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	background-color: ${vars.$colorThemeMain};
	color: ${vars.$colorThemeReverse};
`
export const ContactsContainer = styled.div`
	display: flex;
	gap: 10px;
`