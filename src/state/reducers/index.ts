import { combineReducers } from "redux";
import repositoriesReducer from './repositoriesReducer';


// ---- This whole code means state inside our redux store is gonna be an object that as a 'repositories' key 
// ---- and a value for that is gonna come from 'repositoriesReducer'

const reducers = combineReducers({
    repositories : repositoriesReducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>;