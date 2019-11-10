import React, {createContext, useContext, useReducer} from 'react';

const StoreContext = createContext();

export const createReducer = (reducers) => (state, action) => {
    const reduce = reducers[action.type];
    return reduce ? reduce(state, action) : state;
};

export const StoreProvider = ({reducer, initialState, children}) =>
    (
        <StoreContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StoreContext.Provider>
    );

export const useStore = () => {
    const [state, dispatch] = useContext(StoreContext);
    return { state, dispatch };
};
