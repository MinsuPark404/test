import { call, put, takeEvery } from 'redux-saga/effects';
import actionTypes from '../constants/actionTypes';
import { receiveHtml } from './actions'; // 액션 가져오기
import axios from '../axios'; // API 호출을 위한 axios 인스턴스


function* fetchHtmlFromServerSaga() {
  try {
    const res = yield call(axios.get, '/');
    console.log(res.data[0].url_html)
    yield put(receiveHtml(res.data[0].url_html)); // 스토어에 저장하기 위해 액션 디스패치
  } catch (error) {
    console.error('Error fetching HTML', error);
  }
}

export default function* watchFetchHtmlFromServer() {
  yield takeEvery(actionTypes.FETCH_HTML_FROM_SERVER, fetchHtmlFromServerSaga);
}