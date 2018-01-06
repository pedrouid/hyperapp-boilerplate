export const homeState = {
  fetching: false,
  users: [],
  error: null
};

export const homeActions = {
  API_USERS_REQUEST: () => () => ({ fetching: true }),
  API_USERS_SUCCESS: users => () => ({ fetching: false, users }),
  API_USERS_FAILURE: error => () => ({ fetching: false, error })
};
