import React, { Component } from "react";
import { slfUsersModel} from "./models/slfUsersModel";
import { slfCategoryAnswers} from "./models/slfCategoryAnswers";
import { slfUserAnswer} from "./models/slfUserAnswer";
import { SLFVotingTableEntry } from "./SLFVotingTableEntry";




export class VotingBoard extends Component {
    static displayName = VotingBoard.name;

    constructor(props) {
        super(props);
        this.state = {name:"", namelabel : "Name",
        CategoryAnswers: [new slfCategoryAnswers("Y", [new slfUserAnswer(new slfUsersModel("2","3"),"hello",5,6),
                                                        new slfUserAnswer(new slfUsersModel("4","4"),"there")]),
                                                        new slfCategoryAnswers("X", [new slfUserAnswer(new slfUsersModel("2","3"),"General"),
                                                        new slfUserAnswer(new slfUsersModel("4","5"),"Kenobi")])
                                                    ],
          Players : [],
          KickVoted : [],
          BonusVoted: [],

        }
        this.buildTable = this.buildTable.bind(this)
        this.addBonusVote = this.addBonusVote.bind(this)
        this.addkickVote = this.addkickVote.bind(this)
        this.changeBonusState = this.changeBonusState.bind(this)
      }

      // refactor hard
      addBonusVote(answer,answermap,event){
        this.setState((state) => {
          //console.log(state.CategoryAnswers.find(element => element.UserAnswers === answer))
          state.CategoryAnswers.find(element => element === answermap).UserAnswers.find(ans => ans === answer).BonusVotes += 1;
          return state;
        });
        this.changeBonusState(answer)
      }

      changeBonusState(BonusAnswer){
        this.setState(state=>{
          state.BonusVoted.push(BonusAnswer)
          return state;

        })

        console.log(this.state.BonusVoted)
      }


      addkickVote(answer,answermap,event){
        this.setState((state) => {
          state.CategoryAnswers.find(element => element === answermap).UserAnswers.find(ans => ans === answer).KickVotes += 1;
          return state;
        });
      }
        


      buildTable(){

        //console.log(this.state.CategoryAnswers)
          return(
            this.state.CategoryAnswers.map(
            catAnwsers =>{
                return( 

                        <SLFVotingTableEntry key={catAnwsers.Category} Anwsermap={catAnwsers} addBonusVote={this.addBonusVote} addkickVote={this.addkickVote}>

                        </SLFVotingTableEntry>
                )
            }
        )) 
      }


    render() {

        return(

            <div>

                    {this.buildTable()}
         
            </div>
        )


    }

}