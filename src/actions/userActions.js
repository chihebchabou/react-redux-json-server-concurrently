import axios from "axios";
import { GET_USERS, USERS_ERRORS } from "./types";

// export const getUsers = () => {
//   return async (dispatch) => {
//     try {
//       const res = await axios.get("/users");
//       dispatch({
//         type: GET_USERS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//       dispatch({
//         type: USERS_ERRORS,
//         payload: err.message,
//       });
//     }
//   };
// };

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/users"); // we added "proxy": "http://localhost:5000" in package.json
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: USERS_ERRORS,
      payload: err.message,
    });
  }
};
