import createReducer from './createReducer'

INITIAL_STATE = {
  name: 'Super User',
  age: 16
}

const actions = {
  SET_SUPER_USER_NAME: (state, action) => ({...state, name: action.name, age: action.age}),
  DELETE_SUPER_USER: (state, action) => ({...state, name: '', age: 0})
}

export default createReducer(INITIAL_STATE, actions);
