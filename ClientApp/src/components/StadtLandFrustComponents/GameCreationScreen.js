import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid } from "@material-ui/core";
import { slfCategoryValueModel } from "./models/slfCategoryValueModel";
import { slfUsersModel} from "./models/slfUsersModel";


export class GameCreationScreen extends Component {
    static displayName = GameCreationScreen.name;

    constructor(props) {
        super(props);
        this.state = {name:"X", namelabel : "Name", newCategory : "",
        CategoryValueMap : [new slfCategoryValueModel("x"),
            new slfCategoryValueModel("y")],
          players : [ new slfUsersModel("1","player1")]
        }

        this.enterGame = this.enterGame.bind(this)
        this.nameChanged = this.nameChanged.bind(this)
        this.newCategoryChanged = this.newCategoryChanged.bind(this)
        this.deleteCategory = this.deleteCategory.bind(this)
        this.addCategory = this.addCategory.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)


    }

    nameChanged(event){
        this.setState({ name: event.target.value });
    }

    newCategoryChanged(event){
      this.setState({ newCategory: event.target.value });
  }    


    enterGame(){
        //send name
        this.props.startGame();
    }

    // DELETE
    deleteCategory(categoryValue){

      var x =  this.state.CategoryValueMap.filter(category=> category !== categoryValue);
      this.setState({ CategoryValueMap: x });
      console.log(categoryValue)

    }

    //ADD
    addCategory(categoryValue){

      console.log(categoryValue)

    }

    // ENTER PRESSED ON NEW CATEGORY
    handleKeyDown(event){
      if (event.key === 'Enter') {

         // CHECK IF ALREADY CONTAINED ....
         this.setState((state) =>{
          state.CategoryValueMap.push(new slfCategoryValueModel(this.state.newCategory))
          return state;
        })
        }
        
    }

    render() {
        return (
          <div>
            <Grid container spacing={3} justify='center'>
              <Grid item xs={3}>

                <Grid item>
                <TextField 
                InputProps={{ startAdornment: (
                    <InputAdornment position='start'>
                      {this.state.namelabel}: 
                    </InputAdornment>),}}
                value={this.state.name} onChange={this.namesChanged}
                />

                </Grid>

                <Grid item>

                <Button variant="outlined" color="primary" onClick={this.enterGame}>
                Join the fun :) 
                </Button>
                  
                </Grid>

                <Grid item>
                  Players:

                {this.state.players.map(
                user => {
                  return (
                  <Button key={user.ID} variant="outlined" color="primary">
                    {user.Name}
                    </Button>
                  );
                }
            )}

                </Grid>

              
                
            </Grid>
            
            {/* MITTELERES GRID */}
            <Grid item >

              <Grid item>
              {this.state.CategoryValueMap.map(
                categoryValue => {
                  return (
                  <Button key={categoryValue.Category} variant="outlined" color="primary" onClick={() => this.deleteCategory(categoryValue)}>
                    {categoryValue.Category}
                    </Button>
                  );
                }
            )}              
            </Grid>

              <Grid item >
              <TextField 
                InputProps={{ startAdornment: (
                    <InputAdornment position='start'>
                      Neue Kategorie: 
                    </InputAdornment>),}}
                value={this.state.newCategory} onChange={this.newCategoryChanged}
                onKeyUp={this.handleKeyDown}
                />
              </Grid>

              <Grid item>
                  Standart categorys
              </Grid>

            
              

            </Grid>
            
            {/* rechtes Grid */}
            <Grid item xs={3}>
             Einstellungen:

             <Grid item>
               Beispiel einstellung
             </Grid>

            </Grid>

          </Grid>
        
        </div>
        );
    }
}
