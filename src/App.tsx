import React from 'react';
import './App.css';
import AppRoutes from "./routes/routes";
import {GlobalStyle} from "./styles/globalStyle";

function App() {
	return (
		<>
			<GlobalStyle/>
			<AppRoutes/>
		</>
	);
}

export default App;
