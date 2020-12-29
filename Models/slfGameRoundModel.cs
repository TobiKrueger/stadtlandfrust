using System.Collections.Generic;

namespace stadtlandfrust.Models
{
    public class SlfGameRoundModel
    {
        public int Id { get; set; }
        
        public SlfUsersModel GameAdmin { get; set; }
        //public List<slfUsersModel> players { get; set; }

        public Dictionary<SlfUsersModel, int> PlayersScores {get; set;}

        public Dictionary<SlfUsersModel, int> PlayersAnwsers {get; set;}

        public char CurrentChar { get; set; }
        
        public List<string> Categories { get; set; }

        public int GameTime { get; set; }
    }
}