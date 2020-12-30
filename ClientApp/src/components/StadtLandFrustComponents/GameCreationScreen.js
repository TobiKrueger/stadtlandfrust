import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ConsoleLogger } from "@microsoft/signalr/dist/esm/Utils";


export class GameCreationScreen extends Component {
    static displayName = GameCreationScreen.name;

    constructor(props) {
        super(props);
        this.state = {name:"X"}

        this.enterGame = this.enterGame.bind(this)
        this.nameChanged = this.nameChanged.bind(this)
    }

    nameChanged(event){
        console.log(event.target.value)
        this.setState({ name: event.target.value });
    }

    enterGame(){
        //send name
        this.props.startGame();
    }


    render() {
        return (
          <div>
           <TextField
          value={this.state.name} onChange={this.nameChanged}
        />
        <Button variant="outlined" color="primary" onClick={this.enterGame}>
        Enter the fun :) 
        </Button>
        </div>
        );
    }
}
