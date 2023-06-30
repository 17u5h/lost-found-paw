import React from 'react';
import * as S from "../styles/footerStyles";
import {stubCompanyContacts} from "../stub/stubCompanyContacts";
import TelegramLogo from "./UI/TelegramLogo";

const Contacts = () => {
	return (
		<S.ContactsContainer>
			<p><a href={stubCompanyContacts.telHref}>{stubCompanyContacts.showTel}</a></p>
			<p><a href={stubCompanyContacts.telegram}><TelegramLogo size={20}></TelegramLogo></a></p>
		</S.ContactsContainer>
	);
};

export default Contacts;