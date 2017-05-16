export const USERS_FETCH_REQUESTED = 'USERS_FETCH_REQUESTED';
export const USERS_FETCH_SUCCESSED = 'USERS_FETCH_SUCCESSED';
export const USERS_FETCH_FAILED = 'USERS_FETCH_FAILED';

export const usersFetchRequested = (page, perPage) => ({ type: USERS_FETCH_REQUESTED, payload: { page, perPage } });
export const usersFetchSuccessed = users => ({ type: USERS_FETCH_SUCCESSED, payload: users });
export const usersFetchFailed = error => ({ type: USERS_FETCH_FAILED, paylaod: error });
