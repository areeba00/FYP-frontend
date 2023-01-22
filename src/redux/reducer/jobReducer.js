import { GET_JOBS } from "../constants/jobsConstants";
import { GET_JOB } from "../constants/jobsConstants";

export const initialState = {
    jobs: [],
    // user: JSON.parse(localStorage.getItem("user")),
    // address: {},
  };

  const jobreducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS:
            return {
              ...state,
              jobs: action.payload
            };

        case GET_JOB:
              return {
                job: action.payload
              };

            default:
                return state;
    }
  };

  export default jobreducer;