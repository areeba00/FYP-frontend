import { GET_AVAILABLE } from "../constants/available";

export const initialState = {
    available: [],
    // user: JSON.parse(localStorage.getItem("user")),
    // address: {},
  };

  const availablereducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AVAILABLE:
            return {
              ...state,
              available: action.payload
            };

            default:
                return state;
    }
  };

  export default availablereducer;