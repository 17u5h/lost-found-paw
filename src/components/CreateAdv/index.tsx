import React from 'react';
import * as S from "../../styles/CreateAdvStyles";

const CreateAdv = () => {
	return (
		<S.Wrapper>
			<S.Container>
				<S.InputBlock>
					<S.InputLabel>Как зовут вашего потеряшку: </S.InputLabel>
					<S.Input placeholder='Имя питомца'/>
				</S.InputBlock>
				<S.InputBlock>
					<S.InputLabel>Где потерялся (поточнее): </S.InputLabel>
					<S.Input placeholder='Где потерялся'/>
				</S.InputBlock>
				<S.InputBlock>
					<S.InputLabel>Как к вам обращаться: </S.InputLabel>
					<S.Input placeholder='Как к вам обращаться'/>
				</S.InputBlock>
				<S.InputBlock>
					<S.InputLabel>Как с вами связаться: </S.InputLabel>
					<S.Input placeholder='три зеленых свистка'/>
				</S.InputBlock>
			</S.Container>
		</S.Wrapper>
	);
};

export default CreateAdv;