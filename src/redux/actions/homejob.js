import axios from "axios";
import { GET_NEW_ARRIVALS } from "../constants/homejobs";
export const getNewArrivals =
  (sortBy = "desc", limit = 5) =>
  async (dispatch) => {
    try {
      //dispatch({ type: START_LOADING });
      const response = await axios.get(
        `/api/company?sortBy=${sortBy}&limit=${limit}`
      );
      // dispatch({ type: STOP_LOADING });
      dispatch({
        type: GET_NEW_ARRIVALS,
        payload: response.data.newArrivals, //here newArrivals is the variable coming form backend res.json
      });
    } catch (err) {
      console.log("getnewJobs api error: ", err);
      // dispatch({ type: STOP_LOADING });
      // dispatch({
      // 	type: SHOW_ERROR_MESSAGE,
      // 	payload: err.response.data.errorMessage,
      // });
    }
  };
