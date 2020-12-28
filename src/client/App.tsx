import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Blogs from './components/view/public/Blogs';
import Blog from './components/view/public/Blog';
import Login from './components/view/public/Login';
import Register from './components/view/public/Register';
import Admin from './components/view/Admin/index';

const App: React.FC = () => {
	return (
		<BrowserRouter> 
			<Header />
			<main className="container"> 
				<Switch>
					<Route exact path="/login"><Login /></Route>
					<Route exact path="/register"><Register /></Route>
					<Route exact path="/blogs/:title/:id"><Blog /></Route>
					<Route exact path="/"><Blogs /></Route>
					<Route path="/admin"><Admin /></Route>
				</Switch>
			</main>
		</BrowserRouter>
	);
};

export default App;
