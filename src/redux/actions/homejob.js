import axios from 'axios';
import { GET_NEW_ARRIVALS } from '../constants/homejobs';
export const getNewArrivals = (sortBy='desc', limit=3) => async dispatch => {
	try {
		//dispatch({ type: START_LOADING });
		const response = await axios.get('/api/company/readall');
		// dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_JOBS,
			payload: response.data.jobs,
		});
	} catch (err) {
		console.log('getProducts api error: ', err);
		// dispatch({ type: STOP_LOADING });
		// dispatch({
		// 	type: SHOW_ERROR_MESSAGE,
		// 	payload: err.response.data.errorMessage,
		// });
	}
};


