import { combineReducers } from "redux";
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer';
import BaiTapDatVeReducer from "./BaiTapDatVeReducer";
import ToDoListReducer from "./ToDoListReducer";

const rootReducer = combineReducers({
    //combine child reducer
    BaiTapOanTuXiReducer,
    BaiTapDatVeReducer,
    ToDoListReducer
});

export default rootReducer;