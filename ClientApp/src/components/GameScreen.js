import React, { Component } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { SLFTextField } from "./StadtLandFrustComponents/SLFTextField";
import Grid from "@material-ui/core/Grid";
import { SideScoreBoard } from "./StadtLandFrustComponents/SideScoreBoard";

export class GameScreen extends Component {
  static displayName = GameScreen.name;
  
  constructor(props) {
    super(props);

    this.state = {
      gameState: {
        Categories: { Stadt: "A", Land: "B", Frust: "C" },
        Players: new Map([
          [{ id: 1, name: "Spieler1" }, 2],
          [{ id: 2, name: "Spieler2" }, 3],
          [{ id: 3, name: "Spieler3" }, 4],
        ]),
      },
    };
    
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

    connection
      .start()
      .then(async function () {
        console.log("Trying to invoke send message");
        console.log(connection.state)
        console.log(connection)
        await connection
          .invoke("SendMessage", "Neuer User", "Test Nachricht")
          .catch(function (err) {
            console.log("SCHEI?E ES IST ALLES KACKE")
            return console.error(err.toString());
          }).then(()=> console.log("successfully invoked send message", connection.state));
        await connection.invoke("ChangeCategories", ["A","B", "Z"])
      })
      .catch(function (err) {
        console.log("EROROROROROROROROROROROROR")
        return console.error(err.toString());
      })    

  }

  handleChange(textInput, category) {
    this.setState((state) => {
      state.categories[category] = textInput;
      return state;
    });
  }

  render() {
    return (
      <div>
        <Grid container spacing={3} justify='center'>
          <Grid item xs={3}>
            <form>
              {Object.entries(this.state.gameState.Categories).map(
                ([category, value]) => {
                  console.log(category);
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
