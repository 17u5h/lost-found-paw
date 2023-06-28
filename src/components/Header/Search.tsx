import React from 'react';
import * as S from '../../styles'
import UIDarkButton from "../UI/UIDarkButton";

const Search = () => {
	return (
		<S.SearchBlock>
			<S.SearchField></S.SearchField>
			<UIDarkButton>
				Найти
			</UIDarkButton>
		</S.SearchBlock>

	);
};

export default Search;