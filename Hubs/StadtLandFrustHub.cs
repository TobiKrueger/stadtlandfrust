using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using stadtlandfrust.Models;

namespace stadtlandfrust.Hubs
{
    public class StadtLandFrustHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
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
            await Clients.All.SendAsync("onChangeOptions", gameModel);
        }

        //when a new game was started

        //Some ping mechanism (client send ping if not 2time they are closed and removed)
    }
}