const fetchUser = () => {
  return {
    type: 'FETCH_USER_REQUEST'
  };
};

const fetchUserSuccess = users => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: users
  };
};

const fetchUserFailure = error => {
  return {
    type: 'FETCH_USER_FAILURE',
    payload: error
  };
};
