import axios from 'axios';
import { GET_JOBS } from '../constants/jobsConstants';
export const getProductsByavailableFilter = arg => async dispatch => {
	try {
		//dispatch({ type: START_LOADING });
		const response = await axios.post('/api/company/available', arg);
		// dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_JOBS,
			payload: response.data.jobs,
		});
	} catch (err) {
		console.log('getProductsByFilter api error: ', err);
		// dispatch({ type: STOP_LOADING });
		// dispatch({
		// 	type: SHOW_ERROR_MESSAGE,
		// 	payload: err.response.data.errorMessage,
		// });
	}
};