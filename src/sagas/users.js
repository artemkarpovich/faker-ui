import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from './../api/users';
import {
  USERS_FETCH_REQUESTED,

  usersFetchSuccessed,
  usersFetchFailed,
} from './../actions/users';

const fetchUsers = function* fetchUsers({ payload: { page, perPage }}) {
  try {
    const response = yield call(api.fetchUsers, page, perPage);

    yield put(usersFetchSuccessed(response.data));
  } catch (error) {
    yield put(usersFetchFailed(error));
  }
}

function* fetchUsersSaga() {
  yield takeEvery(USERS_FETCH_REQUESTED, fetchUsers);
}

export {
  fetchUsersSaga
};
