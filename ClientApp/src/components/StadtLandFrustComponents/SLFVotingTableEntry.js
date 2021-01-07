import React, { Component } from "react";
import { Button } from '@material-ui/core'
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

        this.addkickVote = this.addkickVote.bind(this)
        this.addBonusVote = this.addBonusVote.bind(this)
    }

    //TODO HANDLE CHANGES
    // TODO SEND TO SERVER
    // ADD DONE BUTTON
    //


    addkickVote(answer,answermap,event){
        this.props.addkickVote(answer,answermap,event)
    }

    addBonusVote(answer,answermap,event){
        this.props.addBonusVote(answer,answermap,event)
    }

    buildTableRow(){

        return(
            this.state.Anwsermap.UserAnswers.map(
                
                answer => {
                    return(
                    <TableRow key={answer.User.Name + answer.Answer}> 
                        <TableCell>{answer.User.Name}</TableCell>
                        <TableCell>{answer.Answer}</TableCell>
       
                    <TableCell> <Button onClick={e => this.addkickVote(answer,this.state.Anwsermap,e)}>{String(answer.KickVotes)}</Button> </TableCell>
                    <TableCell> <Button onClick={e => this.addBonusVote(answer,this.state.Anwsermap,e)}>{String(answer.BonusVotes)}</Button></TableCell>
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