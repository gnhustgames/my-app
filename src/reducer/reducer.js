import { GET_LIST_EX, GET_LIST_EX_SUCCESS, GET_LIST_POST,GET_LIST_POST_SUCCESS } from "../utils/constant";

const postsReducer = (state = {listUserLong:[],listUserShort:[]}, action) => {
    switch(action.type) {
    case GET_LIST_POST:
    return {
    ...state,
    };
    case GET_LIST_POST_SUCCESS:
    state.listUserLong=action.payload;
    return {
    ...state,
    };
    case GET_LIST_EX:
        return {
        ...state,
        };
    case GET_LIST_EX_SUCCESS:
        state.listUserShort=action.payload;

        return{
            ...state,     
        };
    default:
    return state;
    };
} 
    export default postsReducer;