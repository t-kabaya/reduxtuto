export const setSuperUserName = name => ({  
  type: 'SET_SUPER_USER_NAME',
  name: name,
});

// export const actions = {  
//   setSuperUserName: (name) => ({type: 'SET_SUPER_USER_NAME', name: name})
// }


export const superUserAction = {
  SET_SUPER_USER_NAME: (state, action) => ({...state, name: action.name})
}

INITIAL_STATE = {
  name: 'Super User'
}

export const createReducer = (initialState, actionHandlers) => {
  return function reducer(state = initialState, action) {
    if (actionHandlers.hasOwnProperty(action.type)) {
      return actionHandlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export default createReducer(INITIAL_STATE, superUserAction);
