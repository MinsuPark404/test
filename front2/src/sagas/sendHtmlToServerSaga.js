// sagas/sendHtmlToServerSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from '../axios'; // API 호출을 위한 axios 인스턴스
import actionTypes from '../constants/actionTypes';

function* sendHtmlToServerSaga(action) {
  try {
    const response = yield call(axios.post, '/', { url_html: action.html });
    console.log('success', response.data);
    // 성공 액션 디스패치 가능
  } catch (error) {
    console.log(action.html)
    console.error('Error sending HTML', error);
    // 실패 액션 디스패치 가능
  }
}


export default function* watchSendHtmlToServer() {
  yield takeEvery(actionTypes.SEND_HTML_TO_SERVER, sendHtmlToServerSaga);
}
