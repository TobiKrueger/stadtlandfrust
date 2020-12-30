import React, { Component } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { SLFTextField } from "./StadtLandFrustComponents/SLFTextField";
import Grid from "@material-ui/core/Grid";
import { SideScoreBoard } from "./StadtLandFrustComponents/SideScoreBoard";

export class GameScreen extends Component {
  static displayName = GameScreen.name;
  
  constructor(props) {
    super(props);

    
    
    var connection = new HubConnectionBuilder().withUrl("/slfhub").build()
    connection.on("ReceiveMessage", function (user, message) {
      var msg = message
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      var encodedMsg = user + " says " + msg;
      var li = document.createElement("li");
      li.textContent = encodedMsg;
      document.getElementById("messagesList").appendChild(li);
    });
    connection.on("onChangeOptions", (gameState)=>{
      console.log("Halt Die Ferse Lorenz die fällt sonst ab ", gameState);
    });
    
    this.state = {
      gameState: {
        Categories: { Stadt: "A", Land: "B", Frust: "C" },
        Players: new Map([
          [{ id: 1, name: "Spieler1" }, 2],
          [{ id: 2, name: "Spieler2" }, 3],
          [{ id: 3, name: "Spieler3" }, 4],
        ]),
      },

    connection : new HubConnectionBuilder().withUrl("/slfhub").build()
    };

    this.state.connection.start()

  }

  sendChangedState(connection, state){
    connection.invoke("ChangeOptions", state)
            .catch(function (err) {
            console.log("Mistakes were made")
            return console.error(err.toString())});
  }

  sendChangedCategorie(connection, categories){
    connection.invoke("ChangeCategories", categories)
            .catch(function (err) {
            console.log("Mistakes were made")
            return console.error(err.toString())});
  }


  // handles the changes local
  handleChange(textInput, category) {
    this.setState((state) => {
      state.gameState.Categories[category] = textInput;
      return state;
    });
    console.log(this.state.gameState)
    this.sendChangedCategorie(this.state.connection, JSON.stringify(this.state.gameState.Categories));
  }


  render() {
    return (
      <div>
        <Grid container spacing={3} justify='center'>
          <Grid item xs={3}>
            <form>
              {Object.entries(this.state.gameState.Categories).map(
                ([category, value]) => {
                  return (
                    <SLFTextField
                      key={category}
                      category={category}
                      value={value}
                      onChange={(textInput) =>
                        this.handleChange(textInput, category)
                      }
                    ></SLFTextField>
                  );
                }
              )}
            </form>
          </Grid>
          <Grid item xs={3}>
            <SideScoreBoard
              players={this.state.gameState.Players}
            ></SideScoreBoard>
          </Grid>
        </Grid>
      </div>
    );
  }
}
