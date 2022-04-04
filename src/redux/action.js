import axios from "axios";
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_STATUS,
  ALL_CHECKED,
} from "./actionTypes";

export const fetchData = () => async (dispatch) => {
  const { data } = await axios.get(
    `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
  );
  for (let userDetail of data) {
    userDetail.status = false;
  }
  localStorage.setItem("userData",JSON.stringify(data))
  dispatch({
    type: ADD_TODO,
    payload: data,
  });
};

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
export const deleteUser = (payload) => ({
  type: DELETE_TODO,
  payload,
});
export const editUser = (payload) => ({
  type: EDIT_TODO,
  payload,
});
export const toggleStatus = (payload) => ({
  type: TOGGLE_STATUS,
  payload,
});
export const allChecked = (payload) => ({
  type: ALL_CHECKED,
  payload,
});
