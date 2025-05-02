import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./css/App.css"


import MovieCard from "./components/MovieCard";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";


function App() {
	return (
		<>
			<NavBar />
			<main className="main-content">
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/favorites"
						element={<Favorites />}
					/>
				</Routes>
			</main>
		</>
	);
}

export default App;
