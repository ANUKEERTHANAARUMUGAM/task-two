const initialState = {
  details: []
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DETAIL':
      return {
        ...state,
        details: [...state.details, action.payload]
      };
    default:
      return state;
  }
};

export default detailsReducer;
