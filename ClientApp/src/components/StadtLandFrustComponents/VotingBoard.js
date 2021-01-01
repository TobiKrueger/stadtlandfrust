import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid } from "@material-ui/core";
import { slfCategoryValueModel } from "./models/slfCategoryValueModel";
import { slfUsersModel} from "./models/slfUsersModel";
import { slfCategoryAnswers} from "./models/slfCategoryAnswers";
import { slfUserAnswer} from "./models/slfUserAnswer";
import { SLFVotingTableEntry } from "./SLFVotingTableEntry";




export class VotingBoard extends Component {
    static displayName = VotingBoard.name;

    constructor(props) {
        super(props);
        this.state = {name:"", namelabel : "Name",
        CategoryAnswers: [new slfCategoryAnswers("y", [new slfUserAnswer(new slfUsersModel("2","3"),"hello"),
                                                        new slfUserAnswer(new slfUsersModel("4","4"),"there")]),
                                                        new slfCategoryAnswers("X", [new slfUserAnswer(new slfUsersModel("2","3"),"General"),
                                                        new slfUserAnswer(new slfUsersModel("4","4"),"Kenobi")])
                                                    ],
          Players : []
        }

        this.displayCategroy = this.displayCategroy.bind(this)
      }

      displayCategroy(){

        console.log(this.state.CategoryAnswers)
        return this.state.CategoryAnswers.map(
                anwsers => {
                  return (
                      anwsers.UserAnswers.map(solution => {
                       return( 
                       <Button variant="outlined" color="primary" >
                        {solution.User.Name} {solution.Anwser} 
                        </Button>)
                      })
                    
    
                  )
                }
            )
        

      }

    render() {

        return(

            <div>
                <Grid container spacing={3} justify='center'>
                

                    <SLFVotingTableEntry>

                    </SLFVotingTableEntry>
                    {/* <Grid container spacing={3} justify='center'>
                        {this.displayCategroy()}
                
                    </Grid> */}
                </Grid>
            </div>
        )


    }

}