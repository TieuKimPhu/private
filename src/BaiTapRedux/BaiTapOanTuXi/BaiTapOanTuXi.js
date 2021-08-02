import React, { Component } from 'react';
import "./BaiTapOanTuXi.css";
// import bgGame from "../assets/bgGame.png";
import Player from './Player';
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import { connect } from "react-redux";

class BaiTapOanTuXi extends Component {



    render() {

        

        return (
            <div className="gameOanTuXi">
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi />
                        <button onClick={()=>{
                            this.props.playGame()
                        }} className="btn btn-success p-2 display-4 mt-5">Play game</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: ()=>{

            let count = 0;
            //Khai báo hàm lặp đi lặp lại
            let randomComputerItem = setInterval(()=>{
                dispatch({
                    type: "RAN_DOM"
                })
                count ++;
                if(count > 10) {
                    //Dừng hàm setInterval
                    clearInterval(randomComputerItem)

                    dispatch({
                        type: "END_GAME",
                    })
                }
            }, 100)
            
        }
    }
}

export default connect(null, mapDispatchToProps) (BaiTapOanTuXi)
