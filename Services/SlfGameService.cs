using System.Collections.Generic;
using stadtlandfrust.Models;

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
        }

        public void ChangeCategories(List<string> categories)
        {
            this.gameModel.Categories = categories;
        }

        public SlfGameModel GetGameState() 
        {
            return this.gameModel;
        }
    }
}