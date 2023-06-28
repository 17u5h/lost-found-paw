import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PetDescription from "../pages/PetDescription";
import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";
import UserProfilePage from "../pages/UserProfilePage";

const AppRoutes = () => {
	const isAuth = true

	return (
		<Routes>
			<Route path="/" element={<MainPage />}></Route>
			<Route path="pet/:id" element={<PetDescription />} />

			<Route element={<ProtectedRoute isAuth={isAuth} />}>
				<Route path="profile" element={<UserProfilePage />}></Route>
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;