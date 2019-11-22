const reducers = (state, action) => {
  switch (action.type) {
    case 'SELECT_PLACE_ORIGIN':
      return { 
        ...state,
        placeOrigin: action.payload
      }
    case 'SELECT_PLACE_DESTINY':
      return { 
        ...state,
        placeDestiny: action.payload
      }
    default:
      return state;
  }
};

export default reducers;
