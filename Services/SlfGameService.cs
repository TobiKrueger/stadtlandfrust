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

        public void startNextRound()
        {

        }
        
        public void startNewGame()
        {

        }

        public void stoppRound()
        {

        }
        
        public void AddUser(SlfUsersModel newUser)
        {
            List<SlfUsersModel> players = this.gameModel.Players;
            players.Add(newUser);
            this.gameModel.Players = players;
        }

        public void changeGameState(SlfGameModel newGameModel) 
        {
            this.gameModel = newGameModel;
            Console.WriteLine("gameModel changed");

        }

        public void ChangeCategories(List<SlfCategoryValueModel> categories)
        {
            //Console.WriteLine(categories[0].Value);
            this.gameModel.CategoryValueMap = categories;
        }
        public void AddCategory(SlfCategoryValueModel category)
        {
        
            Console.WriteLine(category);
            List<SlfCategoryValueModel> newCatmap = this.gameModel.CategoryValueMap;
            newCatmap.Add(category);
            this.gameModel.CategoryValueMap = newCatmap;
        }

        public void DeleteCategory(SlfCategoryValueModel removed)
        {
            List<SlfCategoryValueModel> newCatmap = this.gameModel.CategoryValueMap;
            newCatmap.Remove(removed);
            this.gameModel.CategoryValueMap = newCatmap;
        }

        public SlfGameModel GetGameState() 
        {
            return this.gameModel;
        }
    }
}