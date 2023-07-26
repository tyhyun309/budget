import { createContext, useReducer } from "react";

export const AppReducer = (state, action) => {
	switch (action.type) {
    case 'ADD_EXPANSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
		default:
			return state;
	}
};

const initialState = {
	budget: 20000,
  expenses: [
    { id: 12, name: 'drinks', cost: 300},
    { id: 13, name: 'transport', cost: 650},
    { id: 14, name: 'food', cost: 550}
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] =useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
