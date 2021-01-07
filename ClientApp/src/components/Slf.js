import React, { Component } from 'react';
import { GameScreen } from './StadtLandFrustComponents/GameScreen';
import { GameCreationScreen } from './StadtLandFrustComponents/GameCreationScreen';
import { HubConnectionBuilder } from "@microsoft/signalr";


export class Slf extends Component {
  static displayName = Slf.name;

  constructor(props) {
    super(props);
    this.state= {gameStarting : true, connection : new HubConnectionBuilder().withUrl("/slfhub").build()
  };
    this.startGame = this.startGame.bind(this)


  this.state.connection.start()
  }

    startGame(){
        console.log("Starting game...")
        // Send to the server game startet
        this.setState({gameStarting : false})
    }

  render() {
    if(this.state.gameStarting){

        return (
                <div>
                    <GameCreationScreen startGame ={this.startGame} >
  
                    </GameCreationScreen >
                </div>)
        
    } else{
        return (
                <div>
                    <GameScreen connection={this.state.connection}>
                    </GameScreen>
                </div> 
        );
    }    
  }
}