import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PetDescriptionPage from "../pages/PetDescriptionPage";
import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";
import UserProfilePage from "../pages/UserProfilePage";
import CreateAdvPage from "../pages/CreateAdvPage";

const AppRoutes = () => {
	const isAuth = true																							//useSelector

	return (
		<Routes>
			<Route path="/" element={<MainPage />}></Route>
			<Route path="pet/:id" element={<PetDescriptionPage/>} />

			<Route element={<ProtectedRoute isAuth={isAuth} />}>
				<Route path="profile" element={<UserProfilePage />}></Route>
				<Route path="create" element={<CreateAdvPage />}></Route>
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;