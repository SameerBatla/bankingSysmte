// const state = {}

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BANK_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_BANK_SUCCESS':
      return {
        loading: false,
        banks: action.payload,
        error: ''
      };
    case 'FETCH_BANK_FAILURE':
      return {
        loading: false,
        banks: [],
        error: action.payload
      };
    default:
      return state;
  }
};
export default rootReducer;
