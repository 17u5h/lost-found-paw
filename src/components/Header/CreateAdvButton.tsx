import React from 'react';
import UILightButton from "../UI/UILightButton";
import {useNavigate} from "react-router-dom";

const CreateAdvButton = () => {
	const navigate = useNavigate()

	return (
		<UILightButton onClick={() => navigate('/create')}>
			Подать объявление
		</UILightButton>
	);
};

export default CreateAdvButton;