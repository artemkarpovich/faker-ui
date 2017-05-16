import map from 'lodash/map';

export default function* rootSaga() {
  const sagas = {};
  yield map(sagas, saga => saga());
}
