import { createContext, useReducer } from "react";
import { habitsInitialState, habitsReducer } from "../reducer/habitsReducer";

export const HabitsContext = createContext();

export function HabitsProvider({ children }) {
  const [state, dispatch] = useReducer(habitsReducer, habitsInitialState);

  return (
    <HabitsContext.Provider
      value={{
        dispatch,
        habitsData: state.habitsData,
        archiveData: state.archiveData,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
}
