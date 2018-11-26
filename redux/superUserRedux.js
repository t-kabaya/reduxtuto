export const superUserAction = {
  SET_SUPER_USER_NAME: (state, action) => ({...state, name: action.name, age: action.age})
}

INITIAL_STATE = {
  name: 'Super User',
  age: 16
}

export const createReducer = (INITIAL_STATE, actionHandlers) => (state = INITIAL_STATE, action) => {
  if (actionHandlers.hasOwnProperty(action.type)) {
    return actionHandlers[action.type](state, action)
  } else {
    return state
  }
}

export default createReducer(INITIAL_STATE, superUserAction);
