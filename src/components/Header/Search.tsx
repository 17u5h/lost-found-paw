import React from 'react';
import * as S from '../../styles/headerStyles'
import UIDarkButton from "../UI/UIDarkButton";

const Search = () => {
	return (
		<S.SearchBlock>
			<S.SearchField placeholder='Поиск...'></S.SearchField>
			<UIDarkButton>
				Найти
			</UIDarkButton>
		</S.SearchBlock>
	);
};

export default Search;