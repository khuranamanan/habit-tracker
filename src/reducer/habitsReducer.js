import { ACTION_TYPES } from "../utils/constant";

export const habitsInitialState = {
  habitsData: [],
  archiveData: [],
};

export function habitsReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_HABIT:
      return {
        ...state,
        habitsData: state.habitsData.map((habit) =>
          habit.id === action.payload.id ? action.payload : habit
        ),
      };

    case ACTION_TYPES.ADD_HABIT:
      return {
        ...state,
        habitsData: [...state.habitsData, action.payload],
      };

    case ACTION_TYPES.SEND_TO_ARCHIVE:
      return {
        ...state,
        habitsData: state.habitsData.filter(
          (habit) => habit.id !== action.payload
        ),
        archiveData: [
          ...state.archiveData,
          state.habitsData.find((habit) => habit.id === action.payload),
        ],
      };

    case ACTION_TYPES.ARCHIVE_TO_MAIN:
      return {
        ...state,
        archiveData: state.archiveData.filter(
          (habit) => habit.id !== action.payload
        ),
        habitsData: [
          ...state.habitsData,
          state.archiveData.find((habit) => habit.id === action.payload),
        ],
      };

    case ACTION_TYPES.DELETE_HABIT_FROM_MAIN:
      return {
        ...state,
        habitsData: state.habitsData.filter(
          (habit) => habit.id !== action.payload
        ),
      };

    case ACTION_TYPES.DELETE_HABIT_FROM_ARCHIVE:
      return {
        ...state,
        archiveData: state.archiveData.filter(
          (habit) => habit.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
