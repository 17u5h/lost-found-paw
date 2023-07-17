import React, {useEffect} from 'react';
import CardList from "./CardList";
import {useNavigationStore} from "../../store/useNavigationStore";

const Main = () => {
	const {dispatchCreateAdvPage,dispatchPetPage} = useNavigationStore(({dispatchCreateAdvPage, dispatchPetPage}) => ({dispatchCreateAdvPage, dispatchPetPage}))

	useEffect(() => {
		dispatchCreateAdvPage(false)
		dispatchPetPage(false)
	}, [])

	return (
		<div>
			<CardList/>
		</div>
	);
};

export default Main;