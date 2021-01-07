using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using stadtlandfrust.Models;
using stadtlandfrust.Services;
using System.Text.Json;

namespace stadtlandfrust.Hubs
{
    public class StadtLandFrustHub : Hub
    {
        readonly ISlfGameService _gameService; 
        public StadtLandFrustHub(ISlfGameService gameService) {
            _gameService = gameService;
        }

        public async Task SendMessage(string user, string message)
        {
            Console.WriteLine("Got Message:" + message);
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

        //When a User joins a game
        public override async Task OnConnectedAsync()
        {
            await Clients.All.SendAsync("New User");
        }

        //When a User leaves a game 
        public override async Task OnDisconnectedAsync(Exception exception)
        {
            Console.WriteLine(exception);
            await Clients.All.SendAsync("User Disconnected");
        }

        //when the options are changed
        public async Task ChangeOptions(string gameModel)
        {
            Console.WriteLine(gameModel);
            var newGameModel = JsonSerializer.Deserialize<SlfGameModel>(gameModel);
            _gameService.changeGameState(newGameModel);
            await Clients.All.SendAsync("onChangeCategories", gameModel);
        }

        public async Task GetGameState()
        {
            SlfGameModel gameState = _gameService.GetGameState();
            await Clients.Caller.SendAsync("changeGameState",gameState);
        }

        //when the categories are changed
        public async Task ChangeCategories(string categories)
        {
            Console.WriteLine(categories);
            var newCategories = JsonSerializer.Deserialize<List<SlfCategoryValueModel>>(categories);
            _gameService.ChangeCategories(newCategories);
            await Clients.All.SendAsync("onChangeCategories", newCategories);
        }


        public async Task JoinGame(String user)
        {
            Console.WriteLine(user);
            SlfUsersModel newUser = JsonSerializer.Deserialize<SlfUsersModel>(user);
            _gameService.AddUser(newUser);
            await Clients.Others.SendAsync("newUserJoined",user);
        }

        // JsonSerializer.Serialize<SlfGameModel>(_gameService.GetGameState())

        //when a new game was started

        //Some ping mechanism (client send ping if not 2time they are closed and removed)
    }
}