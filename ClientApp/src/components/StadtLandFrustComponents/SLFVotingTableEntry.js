import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import List from '@material-ui/core/List';
import { Button, Grid, ListItemSecondaryAction } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';
import { slfUsersModel} from "./models/slfUsersModel";
import { slfCategoryAnswers} from "./models/slfCategoryAnswers";
import { slfUserAnswer} from "./models/slfUserAnswer";


export class SLFVotingTableEntry extends Component {
    static displayName = SLFVotingTableEntry.name;

constructor(props) {
        super(props);
        this.state = { category: "y", anwsermap: [new slfUserAnswer(new slfUsersModel("2","3"),"hello"),
        new slfUserAnswer(new slfUsersModel("4","4"),"there")]}

    }

    render() {

        return(
            <Grid container>
                    {this.state.category}
                    <Grid container justify='center'>
                        <Grid item xs={3}>
                            anwser
                        </Grid>
                        <Grid xs={3}>
                        <Button >
                           XXX
                        </Button>
                        </Grid>
                        <Grid >
                        <Button>
                            YYY
                        </Button>
                        </Grid>
                    </Grid>
                        
            </Grid>
         
        )
    }

}