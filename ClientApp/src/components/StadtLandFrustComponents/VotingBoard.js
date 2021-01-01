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
        CategoryAnswers: [new slfCategoryAnswers("Y", [new slfUserAnswer(new slfUsersModel("2","3"),"hello"),
                                                        new slfUserAnswer(new slfUsersModel("4","4"),"there")]),
                                                        new slfCategoryAnswers("X", [new slfUserAnswer(new slfUsersModel("2","3"),"General"),
                                                        new slfUserAnswer(new slfUsersModel("4","5"),"Kenobi")])
                                                    ],
          Players : []
        }
        this.buildTable = this.buildTable.bind(this)
      }
        


      buildTable(){

        console.log(this.state.CategoryAnswers)
          return(
            this.state.CategoryAnswers.map(
            catAnwsers =>{
                return( 

                        <SLFVotingTableEntry key={catAnwsers.Category} Anwsermap={catAnwsers}>

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