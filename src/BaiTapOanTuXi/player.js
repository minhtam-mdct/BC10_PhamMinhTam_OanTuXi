import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
    render() {
        return (
            <div className="text-center GamePlayer">
                <div className="thinking">
                    <img style={{ width: 35, marginTop: 13 }} src={this.props.mangDatCuoc.find(item=>item.datCuoc===true).hinhAnh} alt={this.props.mangDatCuoc.find(item=>item.datCuoc===true).hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 150, height: 150 }} src='./img/player.png' alt="./img/player.png" />

                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {

                        let border = {};
                        if (item.datCuoc) {
                            border = { border: '3px solid orange' };
                        }

                        return <div className='col-4'>
                            <button style={border} className="btnItem" onClick={()=>{this.props.datCuoc(item.ma)}}>
                                <img style={{ width: 35 }} src={item.hinhAnh} alt={item.hinhAnh} />
                            </button> 
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.oantuxiReducer.mangDatCuoc,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc)=>{
            dispatch({
                type: 'PlayerChose',
                maCuoc,
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)