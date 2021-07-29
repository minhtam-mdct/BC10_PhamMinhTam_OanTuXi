import React, { Component } from 'react'
import './assets/oantuxi.css';
import Player from './player';
import BotGame from './BotGame';
import ResultGame from './ResultGame';
import './assets/buble.css';
import { connect } from 'react-redux';


class Baitapoantuxi extends Component {

    render() {
        return (
            <div className="game m-auto" >
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <ResultGame />
                        <button className="btn btn-success mt-5" onClick={() => { this.props.playGame() }}>Play Game</button>
                    </div>
                    <div className="col-4">
                        <BotGame />
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 1;
            //khai bao lap di lap lai
            let randomBot = setInterval(() => {
                dispatch({
                    type: 'ranDom'
                })
                count++;
                if (count > 5) {
                    clearInterval(randomBot)
                    dispatch({
                        type: 'endGame',
                    })
                }
            }, 500)
        }
    }
}
export default connect(null, mapDispatchToProps)(Baitapoantuxi)