import React from 'react';
import './App.css';
import {StoreProvider} from "./store/store";
import {INITIAL_STATE, REDUCER} from "./store/reducer";
import {Widget} from "./components/organisms/Widget";

// Store middleware
const withLogging = reducer => (state, action) => {
    console.log(`Processing ${action.type} action!`);
    return reducer(state, action);
};

export const App = () =>
    (
        <StoreProvider initialState={INITIAL_STATE} reducer={withLogging(REDUCER)}>
            <div className="App">
                <Widget/>
            </div>
        </StoreProvider>
    );
