using System.Collections.Generic;

namespace stadtlandfrust.Models
{
    public class SlfGameModel
    {
        public int Id { get; set; }
        public SlfUsersModel GameAdmin { get; set; }

        //holds players and their corresponding scores
        public List<SlfUsersModel> Players {get; set;}

        //Amount of Gamerounds
        public int MaxRounds { get; set; }

        //Current game round
        public int CurrentRound { get; set; }

        //save chars ?

        //categires
        public List<string> Categories { get; set; }

        //gamemode
        public int Gamemode { get; set; }

        public int GameTime { get; set; }

        //indicates wheater stop round after first player is done
        public bool UseTime { get; set; }

    }
}