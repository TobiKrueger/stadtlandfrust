import { HubConnectionBuilder } from "@microsoft/signalr";


export class slfConnectionService{

    constructor() {
        this.testvar = "hello there"
        this.connection = new HubConnectionBuilder().withUrl("/slfhub").build()
        this.connection.start()

    }

    test() {

        console.log(this.testvar)
        
    }

    changetest(){
        this.testvar = "General Kenobi"
    }

    //#region game creation


    //#endregion
    
    //#region game running


    //#endregion

    //#region game over


    
    //#endregion
}