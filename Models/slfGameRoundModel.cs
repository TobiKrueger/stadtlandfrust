using System.Collections.Generic;

namespace stadtlandfrust.Models
{
    public class slfGameRoundModel
    {
        public int Id { get; set; }
        
        public slfUsersModel GameAdmin { get; set; }
        //public List<slfUsersModel> players { get; set; }

        public Dictionary<slfUsersModel, int> PlayersScores {get; set;}

        public Dictionary<slfUsersModel, int> PlayersAnwsers {get; set;}

        public char CurrentChar { get; set; }
        
        public List<string> Categories { get; set; }

        public int GameTime { get; set; }
    }
}