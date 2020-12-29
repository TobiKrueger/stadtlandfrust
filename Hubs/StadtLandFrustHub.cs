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
            Console.WriteLine("Connected new User");
            await Clients.All.SendAsync("New User");
        }

        //When a User leaves a game 
        public override async Task OnDisconnectedAsync(Exception exception)
        {
            Console.WriteLine(exception);
            await Clients.All.SendAsync("User Disconnected");
        }

        //when the options are changed
        public async Task ChangeOptions(SlfGameModel gameModel){
            _gameService.changeGameState(gameModel);
            await Clients.All.SendAsync("onChangeOptions", _gameService.GetGameState());
        }

        public async Task ChangeCategories(List<string> categories){
            Console.WriteLine("Hello From the Other side");
            _gameService.ChangeCategories(categories);
            Console.WriteLine("I Cant say that ive tried");
            await Clients.All.SendAsync("onChangeOptions", JsonSerializer.Serialize<SlfGameModel>(_gameService.GetGameState()));
            Console.WriteLine(_gameService.GetGameState());
            Console.WriteLine(".........................................");
        }

        //when a new game was started

        //Some ping mechanism (client send ping if not 2time they are closed and removed)
    }
}