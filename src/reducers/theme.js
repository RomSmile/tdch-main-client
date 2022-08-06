import { THEME } from "../actions/theme";

const defaultState = 'light';

export const theme = (state = defaultState, action) => {
  switch (action.type) {
    case THEME.LIGHT:
      return 'light';
    case THEME.DARK: 
      return 'dark';
    default:
      return state;
  }
}