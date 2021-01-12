import { HubConnectionBuilder } from "@microsoft/signalr";


export class slfConnectionService{

    constructor() {
        this.connection = new HubConnectionBuilder().withUrl("/slfhub").build()
        this.connection.start()
    }

    getConnection(){
        return this.connection
    }

    //#region game creation

    sendNewCategory(newCategory){       
        console.log(newCategory)
        this.connection.invoke("AddCategory", newCategory)
              .catch(function (err) {
              console.log("Mistakes were made")
              return console.error(err.toString())});
                }

    sendDeleteCategory(categoryValue){

      }


    //#endregion
    
    //#region game running

    sendChangedCategorieAnswer(categories){
        this.connection.invoke("ChangeCategorieAnswer", categories)
                .catch(function (err) {
                console.log("Mistakes were made")
                return console.error(err.toString())});
      }


    //#endregion

    //#region game over



    //#endregion
}