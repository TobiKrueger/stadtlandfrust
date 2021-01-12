import React, { Component } from 'react';
import { GameScreen } from './StadtLandFrustComponents/GameScreen';
import { GameCreationScreen } from './StadtLandFrustComponents/GameCreationScreen';
import { VotingBoard } from './StadtLandFrustComponents/VotingBoard';
import { HubConnectionBuilder } from "@microsoft/signalr";
import { SlfContext } from '../context/slfContext';


export class Slf extends Component {
  static displayName = Slf.name;

  constructor(props) {
    super(props);
    this.state= {gameStarting : true};
    this.startGame = this.startGame.bind(this)
    this.gameCreationScreen = this.gameCreationScreen.bind(this)
    this.gameScreen = this.gameScreen.bind(this)

  }

    startGame(){
        console.log("Starting game...")
        // Send to the server game startet
        this.setState({gameStarting : false})
        //TODO SEND TO SERVER
    }

    gameCreationScreen(){
      return (
      <div>
            <GameCreationScreen startGame ={this.startGame}></GameCreationScreen >
      </div>
        )
    }

    gameScreen(){
      return (
        <div>
            <GameScreen></GameScreen>
        </div> 
            );
    }

    //TODO
    votingBoard(){
      return (
        <div>
            <VotingBoard></VotingBoard>
        </div> 
            );
    }

    //TODO
    gameOverScreen(){
      return (
        <div>
            <GameScreen></GameScreen>
        </div> 
            );
    }

  render() {
    if(this.state.gameStarting){
      return(this.gameCreationScreen())
    } else{
        return (this.gameScreen())
    }
     
  }
 
}