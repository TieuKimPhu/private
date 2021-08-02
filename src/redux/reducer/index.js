import { combineReducers } from "redux";
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer';

const rootReducer = combineReducers({
    //combine child reducer
    BaiTapOanTuXiReducer
});

export default rootReducer;