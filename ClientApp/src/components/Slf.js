import React, { Component } from 'react';
import { GameScreen } from './StadtLandFrustComponents/GameScreen';
import { GameCreationScreen } from './StadtLandFrustComponents/GameCreationScreen';

export class Slf extends Component {
  static displayName = Slf.name;

  constructor(props) {
    super(props);
    this.state= {gameStarting : true}
    this.startGame = this.startGame.bind(this)
  }

    startGame(){
        console.log("starting game...")
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
                    <GameScreen>
                    </GameScreen>
                </div> 
        );
    }    
  }
}