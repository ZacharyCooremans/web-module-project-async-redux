import axios from 'axios'
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchCat = () => {
    
return (dispatch => {
    dispatch({type: FETCH_START})

    dispatch(fetchStart())
    axios
    .get("https://thatcopy.pw/catapi/rest/")
    .then((res) => {
        console.log('this is res', res)
        dispatch({type: FETCH_SUCCESS, payload: res.data})
    })
    .catch((err) => {
      console.log(err)
      dispatch({type: FETCH_FAIL, payload:err})
    })
})
}

export const fetchStart = () => {
    return({type: FETCH_START})
}
export const fetchSuccess = (cat) => {
    return({type: FETCH_SUCCESS, payload:cat})
}
export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload:error})
}