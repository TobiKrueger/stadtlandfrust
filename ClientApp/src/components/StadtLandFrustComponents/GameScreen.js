import React, { Component } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { SLFTextField } from "./SLFTextField";
import Grid from "@material-ui/core/Grid";
import { SideScoreBoard } from "./SideScoreBoard";
import { slfCategoryValueModel } from "./models/slfCategoryValueModel";
import { slfUsersModel} from "./models/slfUsersModel";



export class GameScreen extends Component {
  static displayName = GameScreen.name;
  
  constructor(props) {
    super(props);

    // connection.on("onChangeOptions", (gameState)=>{
    //   console.log("Halt Die Ferse Lorenz die fällt sonst ab ", gameState);
    // });
    
    this.state = {
      gameState: {
        CategoryValueMap: [
          new slfCategoryValueModel("Stadt","A"),
          new slfCategoryValueModel("LAnd","v"),
          new slfCategoryValueModel("Frust","b")
        ],

        Players:[ new slfUsersModel(1,"Spieler1"),
                  new slfUsersModel(2,"Spieler2"),
                  new slfUsersModel(3,"Spieler3"), 
        ],
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

  stateToJson(){

  }

  // handles the changes local
  handleChange(textInput, category) {
    this.setState((state) => {
      state.gameState.CategoryValueMap.find(element => element.Category === category).Value = textInput;
      return state;
    });
    //console.log(this.state.CategoryValueMap)
    console.log(JSON.stringify(this.state.gameState.CategoryValueMap))
    this.sendChangedCategorie(this.state.connection, JSON.stringify(this.state.gameState.CategoryValueMap));
  }


  render() {
    return (
      <div>
        <Grid container spacing={3} justify='center'>
          <Grid item xs={3}>
            <form>
              {this.state.gameState.CategoryValueMap.map(
                (categoryValue) => {
                  return (
                    <SLFTextField
                      key={categoryValue.Category}
                      category={categoryValue.Category}
                      value={categoryValue.Value}
                      onChange={(textInput) =>
                        this.handleChange(textInput, categoryValue.Category)
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
        <Grid container spacing={3} justify='center'>
          enter button
        </Grid>
      </div>
    );
  }
}
