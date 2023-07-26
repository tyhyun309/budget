import { createContext, useReducer } from "react";

export const AppReducer = (state, action) => {
	switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

      case 'DELETE_EXPENSE':
        return {
          ...state,
          expenses: state.expenses.filter(
            (expense) => expense.id !== action.payload
          ),
        };

		default:
			return state;
	}
};

const initialState = {
	budget: 30000,
  expenses: [
    { id: 12, name: 'drinks', cost: 300},
    { id: 13, name: 'transport', cost: 650},
    { id: 14, name: 'food', cost: 550},
    { id: 15, name: 'vitamin', cost: 10500}
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
