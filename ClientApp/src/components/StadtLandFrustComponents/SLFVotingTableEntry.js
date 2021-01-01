import React, { Component } from "react";
import { Button } from '@material-ui/core'
import { slfUsersModel} from "./models/slfUsersModel";
import { slfCategoryAnswers} from "./models/slfCategoryAnswers";
import { slfUserAnswer} from "./models/slfUserAnswer";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



export class SLFVotingTableEntry extends Component {
    static displayName = SLFVotingTableEntry.name;

constructor(props) {
        super(props);
        this.state =  { Anwsermap : this.props.Anwsermap}
        this.buildTableRow = this.buildTableRow.bind(this)
    }

    buildTableRow(){

        return(
            this.state.Anwsermap.UserAnswers.map(
                answer => {

                    return(
                    <TableRow key={answer.User.Name + answer.Answer}> 
                        <TableCell>{answer.User.Name}</TableCell>
                        <TableCell>{answer.Answer}</TableCell>
       
                        <TableCell> <Button>XX</Button> </TableCell>
                        <TableCell>Bonus</TableCell>
                    </TableRow>)
                }
            )
        )
    }

    render() {

        return(
            
            <TableContainer component={Paper}>
                <Table >
                 
            
                 <TableHead> 
                 <TableRow> 
                 <TableCell colSpan={4}>{this.state.Anwsermap.Category}</TableCell>
                 </TableRow>
     
                 </TableHead>
     
                 <TableBody>

                 {this.buildTableRow()}
     
     
                 </TableBody>
                 </Table>
            </TableContainer>
            

        )
    }

}