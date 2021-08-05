import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeType";


const stateDefault = {
    danhSachGheDangDat: [
        
    ]
}

const BaiTapDatVeReducer = (state = stateDefault, action) => {
    switch(action.type){
        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if(index !== -1){
                //Khi người dùng click ghế đang đặt đã có trong mảng => Remove đi
                danhSachGheDangDatUpdate.splice(index,1);
            }
            else{
                //Khi người dùng click ghế đang đặt chưa có trong mảng => Push vào mảng
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            //Cập nhật lại state => giao diện render lại
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;

            return {...state}
        }
        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if(index !== -1){
                //Khi người dùng click ghế đang đặt đã có trong mảng => Remove đi
                danhSachGheDangDatUpdate.splice(index,1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state};
        }
        default:return {...state}
    }
}

export default BaiTapDatVeReducer;