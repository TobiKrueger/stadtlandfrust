using System.Collections.Generic;
using stadtlandfrust.Models;

namespace stadtlandfrust.Services
{
    public interface ISlfGameService 
    {
        public void changeGameState(SlfGameModel newGameModel);
        public SlfGameModel GetGameState();
        public void ChangeCategories(List<SlfCategoryValueModel> categories);

        public void AddUser(SlfUsersModel newUser);

        public void AddCategory(SlfCategoryValueModel category);
    }
}