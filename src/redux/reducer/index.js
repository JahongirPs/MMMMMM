import { combineReducers } from "redux";
import { langReducer } from "./langReducer";
import { cartReducer } from "./cartReducer";

const rootReducers = combineReducers({
    language: langReducer,
    carts: cartReducer
})

export { rootReducers }