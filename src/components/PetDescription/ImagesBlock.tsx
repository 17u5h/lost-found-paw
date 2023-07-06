import React from 'react';
import * as S from "../../styles/petDescriptionStyles";

type Props = {
	imageURLs: any												//string
}

const ImagesBlock = ({imageURLs}: Props) => {
	return (
		<S.ImagesBlock>
			<S.MainImage src={imageURLs[0]} alt='pet photo'/>

		</S.ImagesBlock>
	);
};

export default ImagesBlock;