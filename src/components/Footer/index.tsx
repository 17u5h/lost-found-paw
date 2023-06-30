import React from 'react';
import Contacts from "../Contacts";
import Logo from "../Logo";
import About from "../About";
import * as S from "../../styles/footerStyles";

const Footer = () => {
	return (
		<S.FooterContainer>
			<Logo/>
			<About/>
			<Contacts/>
		</S.FooterContainer>
	);
};

export default Footer;