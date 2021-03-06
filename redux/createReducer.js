export default (INITIAL_STATE, actionHandlers) => (state = INITIAL_STATE, action) => 
  actionHandlers.hasOwnProperty(action.type)
    ? actionHandlers[action.type](state, action)
    : state
