import axios from 'axios';
import { GET_JOBS } from '../constants/jobsConstants';
import { GET_JOB } from '../constants/jobsConstants';
export const getJobs = () => async dispatch => {
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

export const getJobsbtid = (jobId) => async dispatch => {
	try {
		//dispatch({ type: START_LOADING });
		const response = await axios.get(`/api/company/${jobId}`);
		// dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_JOB,
			payload: response.data,
		});
	} catch (err) {
		console.log('getProductssssss api error: ', err);
		// dispatch({ type: STOP_LOADING });
		// dispatch({
		// 	type: SHOW_ERROR_MESSAGE,
		// 	payload: err.response.data.errorMessage,
		// });
	}
};

