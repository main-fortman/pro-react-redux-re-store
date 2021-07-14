import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";

const logDispatch = () => (disp) => (action) => {
    console.log("Dispatch action:", action.type);
    return disp(action);
}

const store = createStore(reducer, applyMiddleware(logDispatch));

export default store;