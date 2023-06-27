import { call, put, all,  fork, takeEvery } from 'redux-saga/effects';
import { getPostData } from '../services/postsAPI';
import { getUser } from '../services/postExAPI';
import { getListPostSuccess } from '../action/action';
import { getListEXSuccess } from '../action/action';
import * as actionType from '../utils/constant'


//xu li su kien khi getData mau
function* getListPostSaga(action) {
try {
const data = yield call(getPostData);
yield put(getListPostSuccess(data));
} catch (error) {
//handle error
}
}
function* getListEx(action) {
    try {
    const data = yield call(getUser,action.payload.page);
    yield put(getListEXSuccess(data));
    } catch (error) {
    //handle error
    }
    }
function* getDataLong(){
    yield takeEvery(actionType.GET_LIST_POST,getListPostSaga);
}
function* getDataShort(){
    yield takeEvery(actionType.GET_LIST_EX,getListEx);
}
function* postsSaga() {
    yield all([
         fork(getDataLong),
         fork(getDataShort),
    ])

}

export default postsSaga;