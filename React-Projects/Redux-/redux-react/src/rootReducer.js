import { combineReducers } from "redux";
import chickenReducer from "./Chicken/chickenReducer";
import EggReducer from "./redux/EggReducer";
import userReducer from "./Users/userReducer";

const rootReducer = combineReducers(
    {
        egg : EggReducer,
        chicken : chickenReducer,
        user : userReducer
    }
)

export default rootReducer