import { useDispatch } from "react-redux";
const dispatch = useDispatch();
export function addLog(payload) {
  return { type: "ADD_LOG", payload };
}
export const fetchCourseData = async (dispatch) => {
  const response = await getHistoryAPI();
  const history = response;
  return dispatch({
    type: "FETCH_HISTORY",
    payload: history,
  });
};
