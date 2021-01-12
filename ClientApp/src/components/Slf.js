import React, { Component } from 'react';
import { GameScreen } from './StadtLandFrustComponents/GameScreen';
import { GameCreationScreen } from './StadtLandFrustComponents/GameCreationScreen';
import { HubConnectionBuilder } from "@microsoft/signalr";
import { SlfContext } from '../context/slfContext';


export class Slf extends Component {
  static displayName = Slf.name;

  constructor(props) {
    super(props);
    this.state= {gameStarting : true};
    this.startGame = this.startGame.bind(this)


  }

    startGame(){
        console.log("Starting game...")
        // Send to the server game startet
        this.setState({gameStarting : false})
        //TODO SEND TO SERVER
    }

  render() {
    if(this.state.gameStarting){

        return (
                <div>
                    <GameCreationScreen startGame ={this.startGame}>
  
                    </GameCreationScreen >
                </div>
                )
        
    } else{
        return (
                <div>
                    <GameScreen>
                    </GameScreen>
                </div> 
        );
    }
     
  }
 
}