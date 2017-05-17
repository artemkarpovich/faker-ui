import {
  USERS_FETCH_REQUESTED,
  USERS_FETCH_SUCCESSED,
  USERS_FETCH_FAILED,

  SET_CURRENT_PAGE,
} from './../actions/users';
import { normalizeEntries } from './../utils/normalizeResponse';

const initialState = {
  numberOfItems: 0,
  items: {},
  error: {},
  isFetching: false,
  allIds: [],
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
      const items = normalizeEntries(action.payload.users);
      const allIds = action.payload.users.map(user => user.id);

      return {
        ...state,
        allIds,
        items,
        numberOfItems: action.payload.count,
        isFetching: false,
      };
    case USERS_FETCH_FAILED:
      return {
        ...state,
        error: action.paylaod,
        isFetching: false,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload,
        },
      }
    default:
      return state;
  }
};
