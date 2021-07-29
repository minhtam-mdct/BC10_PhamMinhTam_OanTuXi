import React, { Component } from 'react'
import { connect } from 'react-redux';


class BotGame extends Component {
    render() {

        let keyFrame = `@keyframes randomItem${Date.now()} {
            0% { top: -5px; }
            25% { top: 10px; }
            50% { top: -5px; }
            75% { top: 10px; }
            100% { top: 0; }
        }`

        return (
            <div className="text-center GamePlayer">
                <style>
                    {keyFrame}
                </style>
                <div className="thinking" style={{
                    position: 'relative'
                }}>
                    <img style={{
                        position: 'absolute',
                        animation: `randomItem${Date.now()} 0.5s`,left: '20%', width: 35, marginTop: 12, transform:'scaleX(-1)'
                    }} src={this.props.botGame.hinhAnh} alt={this.props.botGame.hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 150, height: 150 }} src='./img/playerComputer.png' alt="./img/playerComputer.png" />

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        botGame: state.oantuxiReducer.botGame,
    }
}
export default connect(mapStateToProps, null)(BotGame)