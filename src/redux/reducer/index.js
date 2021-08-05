import { combineReducers } from "redux";
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer';
import BaiTapDatVeReducer from "./BaiTapDatVeReducer";

const rootReducer = combineReducers({
    //combine child reducer
    BaiTapOanTuXiReducer,
    BaiTapDatVeReducer
});

export default rootReducer;