using System.Collections.Generic;
using stadtlandfrust.Models;
using System;


namespace stadtlandfrust.Services
{
    public class SlfGameService : ISlfGameService
    {
        SlfGameModel gameModel = new SlfGameModel();

        public SlfGameService()
        {

        }

        public void changeGameState(SlfGameModel newGameModel) 
        {
            this.gameModel = newGameModel;
            Console.WriteLine("gameModel changed");

        }

        public void ChangeCategories(Dictionary<string,string> categories)
        {
            // this.gameModel.Categories = categories;
            // foreach (var value in categories.Values)
            // {
            //     Console.WriteLine("Value of the Dictionary Item is: {0}", value);
            // }
        }

        public SlfGameModel GetGameState() 
        {
            return this.gameModel;
        }
    }
}