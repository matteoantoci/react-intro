export const createReducer = (reducers) => (state, action) => {
    const reduce = reducers[action.type];
    return reduce ? reduce(state, action) : state;
};

export const withLogging = reducer => (state, action) => {
  console.log(`Processing ${action.type} action!`);
  return reducer(state, action);
};
