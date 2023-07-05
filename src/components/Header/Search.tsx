import React from 'react';
import * as S from '../../styles/headerStyles'
import UILightButton from "../UI/UILightButton";

const Search = () => {
	return (
		<S.SearchBlock>
			<S.SearchField placeholder='Поиск...'></S.SearchField>
			<UILightButton>
				Найти
			</UILightButton>
		</S.SearchBlock>
	);
};

export default Search;