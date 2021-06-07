import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import MovieDetail from './containers/Movies/MovieDetail';
import Genre from './containers/Categories/Genre';
import MovieList from './containers/Movies/MovieList';
import Upcoming from './containers/Categories/Upcoming';
import TopRated from './containers/Categories/TopRated';
import PopularMovies from './containers/Categories/PopularMovies';

import PageNotFound from './components/ui/PageNotFound';
import MovieSearch from './containers/Movies/MovieSearch';
import Header from './components/sections/Header';
import Sidebar from './components/sections/Sidebar';
import { Box } from '@chakra-ui/layout';

function App() {
	return (
		<Router>
			<Header />
			<Sidebar />
			<Box>
				<Switch>
					<Route exact path="/">
						<MovieList />
					</Route>
					<Route exact path="/details/:id">
						<MovieDetail />
					</Route>
					<Route exact path="/genres/:id">
						<Genre />
					</Route>
					<Route exact path="/popular">
						<PopularMovies />
					</Route>
					<Route exact path="/upcoming">
						<Upcoming />
					</Route>
					<Route exact path="/toprated">
						<TopRated />
					</Route>
					<Route exact path="/search">
						<MovieSearch />
					</Route>

					<Route path="*" component={PageNotFound} />
				</Switch>
			</Box>
		</Router>
	);
}

export default App;
