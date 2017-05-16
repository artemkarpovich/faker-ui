import {
  USERS_FETCH_REQUESTED,
  USERS_FETCH_SUCCESSED,
  USERS_FETCH_FAILED,
} from './../actions/users';

const initialState = {
  items: [],
  error: {},
  isFetching: false,
  pagination: {
    page: 1,
    perPage: 10,
  },
};

export default (state = initialState, action) => {
  switch(action.type) {
    case USERS_FETCH_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case USERS_FETCH_SUCCESSED:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
      };
    case USERS_FETCH_FAILED:
      return {
        ...state,
        error: action.paylaod,
        isFetching: false,
      };
    default:
      return state;
  }
};
