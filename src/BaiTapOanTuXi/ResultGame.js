import React, { Component } from 'react';
import {connect} from "react-redux";

class ResultGame extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">
                    <h1>{this.props.ketQua}</h1>
                </div>
                <div className="display-4 text-success">
                    <h2>Số bàn thắng: <span className="text-primary">{this.props.soBanThang}</span></h2>
                </div>
                <div className="display-4 text-light">
                    <h2>Số bàn chơi: <span className="text-white">{this.props.soBanChoi}</span></h2>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        ketQua: state.oantuxiReducer.ketQua,
        soBanThang: state.oantuxiReducer.soBanThang,
        soBanChoi:state.oantuxiReducer.soBanChoi,
    }
}
export default connect(mapStateToProps, null) (ResultGame);