const { combineReducers } = require("redux");
const { todoReducer } = require("./todoReducer");


export const rootReducer = combineReducers({ todoReducer })