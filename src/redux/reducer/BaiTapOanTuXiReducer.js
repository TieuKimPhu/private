

const stateDefault = {
    mangDatCuoc: [
        {ma: "keo", hinhAnh: "./img/gameOanTuXi/keo.png", datCuoc: false},
        {ma: "bua", hinhAnh: "./img/gameOanTuXi/bua.png", datCuoc: false},
        {ma: "bao", hinhAnh: "./img/gameOanTuXi/bao.png", datCuoc: true},
    ],
    ketQua: "I'm iron man, i love you 3000 !!!",
    soBanThang:0,
    soBanChoi:0,
    computer:{ma: "bao", hinhAnh: "./img/gameOanTuXi/bao.png"},
}

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case "CHON_KEO_BUA_BAO": {
            //Reset mảng cược
            let mangCuocUpdate = [...state.mangDatCuoc];
            //Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền lên
            mangCuocUpdate = mangCuocUpdate.map((item,index)=>{
                if(item.ma === action.maCuoc) {
                    return {...item,datCuoc:true}
                }
                return {...item,datCuoc:false}
            })
            //setState của mangCuoc => render lại giao diện
            state.mangDatCuoc = mangCuocUpdate;
            return {...state}
            // console.log(action);
        }
        case "RAN_DOM": {
            // console.log(action)
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return {...state}
        }
        case "END_GAME":
            
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch(player.ma) {
                case "keo": 
                    if(computer.ma === "keo") {
                        state.ketQua = "Hoà nhau !!!";
                    }
                    else if(computer.ma === "bua") {
                        state.ketQua = "Bạn thua !!!";
                    }
                    else {
                        state.soBanThang += 1;
                        state.ketQua = "YOU ARE HERO !!!";
                    }
                ;break;
                case "bua":
                    if(computer.ma === "keo") {
                        state.soBanThang += 1;
                        state.ketQua = "YOU ARE HERO !!!";
                    }
                    else if(computer.ma === "bua") {
                        state.ketQua = "Hoà nhau !!!";
                    }
                    else {
                        state.ketQua = "Bạn thua !!!";
                    }
                break;
                case "bao":
                    if(computer.ma === "keo") {
                        state.ketQua = "Bạn thua !!!";
                    }
                    else if(computer.ma === "bua") {
                        state.soBanThang += 1;
                        state.ketQua = "YOU ARE HERO !!!";
                    }
                    else {
                        state.ketQua = "Hoà nhau !!!";
                    }
                break;
                state.soBanThang += 1;
                default: state.ketQua = "YOU ARE HERO !!!";
            }
            state.soBanChoi += 1;
            return {...state}
        default: return { ...state }
    }
}   

export default BaiTapOanTuXiReducer;