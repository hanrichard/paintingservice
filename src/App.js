import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./features/Home";
import { Gallery } from "./features/Gallery";
import { Videos } from "./features/Videos";
import { Layout } from "./components/layout/Layout";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/videos' element={<Videos />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
