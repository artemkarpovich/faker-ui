import map from 'lodash/map';
import * as usersSagas from './users.js';

export default function* rootSaga() {
  const sagas = { ...usersSagas };
  yield map(sagas, saga => saga());
}
