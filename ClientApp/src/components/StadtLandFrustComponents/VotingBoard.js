import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid } from "@material-ui/core";
import { slfCategoryValueModel } from "./models/slfCategoryValueModel";
import { slfUsersModel} from "./models/slfUsersModel";
import { slfCategoryAnswers} from "./models/slfCategoryAnswers";

export class VotingBoard extends Component {
    static displayName = VotingBoard.name;

    constructor(props) {
        super(props);
        this.state = {name:"", namelabel : "Name",
        CategoryAnswers: new slfCategoryAnswers("y", [(new slfUsersModel("1","x"), "hello"),new slfUsersModel("2","3"), "there"]),
        CategoryValueMap : [new slfCategoryValueModel("x"),
            new slfCategoryValueModel("y")],
          Players : []
        }

        
        //Bind stuff here
      }

    render() {

        return(

            <div>
                <Grid container spacing={3} justify='center'>
                {this.state.CategoryAnswers.map(
                anwsers => {
                  return (
                  <Button key={categoryValue.Category} variant="outlined" color="primary" onClick={() => this.deleteCategory(categoryValue)}>
                    {categoryValue.Category}
                    </Button>
                  );
                }
            )}
                </Grid>
            
            </div>
        )


    }

}