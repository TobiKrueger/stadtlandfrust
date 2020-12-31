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
        this.state = {name:"", namelabel : "Name", newCategory : "",joined:false,
        CategoryValueMap : [new slfCategoryValueModel("x"),
            new slfCategoryValueModel("y")],
          Players : []
        }

        this.enterGame = this.enterGame.bind(this)
        this.rigthPanel = this.rigthPanel.bind(this)
        this.nameChanged = this.nameChanged.bind(this)
        this.newCategoryChanged = this.newCategoryChanged.bind(this)
        this.deleteCategory = this.deleteCategory.bind(this)
        this.addCategory = this.addCategory.bind(this)
        this.handleKeyDownNewCategory = this.handleKeyDownNewCategory.bind(this)

      }

    // Tracks name box
    nameChanged(event){
        this.setState({ name: event.target.value });
    }

    //tracks category box 
    newCategoryChanged(event){
      this.setState({ newCategory: event.target.value });
  }    

    // DELETES a Category, Implement send here!
    deleteCategory(categoryValue){

      var x =  this.state.CategoryValueMap.filter(category=> category !== categoryValue);

      if (x.length !== 0){
      this.setState({ CategoryValueMap: x });
      //TODO
      }
      else{
        alert("You need atleast one Category")
      }
    }

    //ADDS a new Category, Implement SEND HERE!
    addCategory(newCategory){
      var x = this.state.CategoryValueMap.filter(category=> category.Category === newCategory)
    
      if (x.length === 0){
        this.setState((state) =>{
          state.CategoryValueMap.push(new slfCategoryValueModel(newCategory));
          state.newCategory = "";
          return state;
        })

        //TODO
      }
      else {
        alert("Idiot!!1! that Category is already there!")
      }
    }

    

    // ENTER PRESSED ON NEW CATEGORY
    handleKeyDownNewCategory(event){
      if (event.key === 'Enter') {
        this.addCategory(this.state.newCategory)
      }
    }

    enterGame(){
      //send name
      
      this.addPlayer(this.state.name)
      
      //if(host){
        //this.props.startGame();
      //}
      

  }

  // ADDS A NEW PLAYER, Add send here!
  addPlayer(Name){

    if(Name === ""){
      alert("You need to enter a Name")
      return
    }

    if(!this.state.joined){
      var x = this.state.Players.filter(player=> player.Name === Name)
      if(x.length === 0){

        this.setState((state) =>{
          state.Players.push(new slfUsersModel("2",Name));
          state.newCategory = "";
          return state;
        })
        this.setState({joined : true})

      }
      else{
        alert("Name already taken")
      }
      

      //TODO
      // if Host : send to server starting
    }
  }

  checkIfHost(){

  }

  rigthPanel(){

    if(this.state.joined){
      return(<Grid item xs={3}>
        <Grid item>
                  Joined as {this.state.name}
        </Grid>

        <Grid item>
          Players:

        {this.state.Players.map(
        user => {
          return (
          <Button key={user.Id} variant="outlined" color="primary">
            {user.Name}
            </Button>
          );
        }
    )}
      </Grid>
      </Grid>)
    }
    else{

      return(<Grid item xs={3}>

        <Grid item>
        <TextField 
        InputProps={{ startAdornment: (
            <InputAdornment position='start'>
              {this.state.namelabel}: 
            </InputAdornment>),}}
        value={this.state.name} onChange={this.nameChanged}
        />
        </Grid>

        <Grid item>
      <Button variant="outlined" color="primary" onClick={this.enterGame}>
      Join the fun :) 
      </Button>
      </Grid>
          

        <Grid item>
          Players:

        {this.state.Players.map(
        user => {
          return (
          <Button key={user.Id} variant="outlined" color="primary">
            {user.Name}
            </Button>
          );
        }
    )}

        </Grid>

      
        
    </Grid>)

    }


  }

    render() {
        return (
          <div>
            <Grid container spacing={3} justify='center'>
            {this.rigthPanel()}
            
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
                onKeyUp={this.handleKeyDownNewCategory}
                />
              </Grid>

              <Grid item>
                  Standart categorys
              </Grid>

            
              

            </Grid>
            
            {/* Rechtes Grid */}
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
