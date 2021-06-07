import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';

/**export const getAllMovies = async () => {
	const response = await axios.get(`${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`);
	return response.data.results;
};*/

export const getAllMovies = async (page) => {
	const response = await axios.get(`${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
	return response.data;
	//console.log('pagedata', response.data);
};

export const getMovieDetails = async ({ queryKey }) => {
	/*eslint-disable no-unused-vars*/
	const [ _key, { id } ] = queryKey;
	const response = await axios.get(
		`${baseUrl}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
	);
	return response.data;
	//console.log('movie', response.data);
};

export const getAllGenres = async () => {
	const response = await axios.get(`${baseUrl}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);
	return response.data.genres;
};

export const getMoviesByGenres = async ({ queryKey }) => {
	const [ _key, { id, page } ] = queryKey;

	const genre_id = id.toString();

	const response = await axios.get(
		`${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_genres=${genre_id}`
	);
	//console.log('genre_responses', genres_response.data);
	return response.data;
};

export const getUpComingMovies = async (page) => {
	const response = await axios.get(`${baseUrl}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);

	return response.data;
};

export const getTopRatedMovies = async (page) => {
	const response = await axios.get(
		`${baseUrl}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
	);
	return response.data;
};

export const getPopularMovies = async (page) => {
	const response = await axios.get(`${baseUrl}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
	return response.data;
};

export const getMovieBySearching = async (page, searchQuery = '') => {
	const response = await axios.get(
		`${baseUrl}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}&page=${page}`
	);
	return response.data;
	//console.log(response.data);
};
