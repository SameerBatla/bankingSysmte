const fetchUser = () => {
  return {
    type: 'FETCH_BANK_REQUEST'
  };
};

const fetchUserSuccess = users => {
  return {
    type: 'FETCH_BANK_SUCCESS',
    payload: users
  };
};

const fetchUserFailure = error => {
  return {
    type: 'FETCH_BANK_FAILURE',
    payload: error
  };
};

const getBanks = () => dispatch => {
  dispatch(fetchUser());
  axios
    .get('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI')
    .then(res => {
      dispatch(fetchUserSuccess(res.data));
    })
    .catch(error => {
      dispatch(fetchUserFailure(error.message));
    });
};
