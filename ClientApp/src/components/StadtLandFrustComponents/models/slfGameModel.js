export class SlfGameModel{
    constructor(Id , GameAdmin,Players, MaxRounds,CurrentRound,CategoryValueMap,Gamemode, GameTime,UseTime) {
        this.Id = Id;
        this.GameAdmin = GameAdmin;
        this.Players = Players;
        this.MaxRounds = MaxRounds;
        this.CurrentRound = CurrentRound;
        this.CategoryValueMap = CategoryValueMap;
        this.Gamemode = Gamemode;
        this.GameTime = GameTime;
        this.UseTime = UseTime;
    }
}