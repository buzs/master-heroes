import 'isomorphic-unfetch';
import axios from 'axios';

const api = axios.create({
	baseURL:
		'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api'
});

export default api;
