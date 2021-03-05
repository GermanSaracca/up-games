import gamesReducer from "./gamesReducer";
import themeReducer from "./themeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  games: gamesReducer,
  theme: themeReducer,
});

export default rootReducer;
