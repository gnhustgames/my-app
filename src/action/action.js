import {GET_LIST_POST, GET_LIST_POST_SUCCESS,GET_LIST_EX,GET_LIST_EX_SUCCESS} from '../utils/constant';

export const getListPost = (payload) => {
return {
type: GET_LIST_POST,
payload,
}
}

export const getListPostSuccess = (payload) => {
return {
type: GET_LIST_POST_SUCCESS,
payload,
}
}
export const getListEx=(page)=>{
    return {
        type: GET_LIST_EX,
        payload:{page},
        }
}
export const getListEXSuccess = (payload) => {
    return {
    type: GET_LIST_EX_SUCCESS,
    payload,
    }}
