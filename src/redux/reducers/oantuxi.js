const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/bao.png', datCuoc: false },
    ],
    ketQua: "Welcome",
    soBanThang: 0,
    soBanChoi: 0,
    botGame: {},
}

const oantuxiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'PlayerChose': {
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            state.mangDatCuoc = mangCuocUpdate;
        }
        case 'ranDom': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

            state.botGame = quanCuocNgauNhien;

            return { ...state };
        }
        case 'endGame': {

            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let bot = state.botGame;

            switch (player.ma) {
                case 'keo':
                    if (bot.ma === 'keo') {
                        state.ketQua = 'Hòa';
                    } else if (bot.ma === 'bua') {
                        state.ketQua = 'Thua';
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = 'Thắng';
                    };
                    break;
                case 'bua':
                    if (bot.ma === 'keo') {
                        state.soBanThang += 1;
                        state.ketQua = 'Thắng';
                    } else if (bot.ma === 'bua') {
                        state.ketQua = 'Hòa';
                    } else {
                        state.ketQua = 'Thua';
                    };
                    break;
                case 'bao':
                    if (bot.ma === 'keo') {
                        state.ketQua = 'Thua';
                    } else if (bot.ma === 'bua') {
                        state.soBanThang += 1;
                        state.ketQua = 'Thắng';
                    } else {
                        state.ketQua = 'Hòa';
                    };
                    break;
                default:
                    break;
            }
        }
        state.soBanChoi += 1;
        return { ...state };
        default: return { ...state }

    }
}

export default oantuxiReducer;