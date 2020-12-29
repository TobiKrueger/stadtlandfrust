using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace stadtlandfrust.Hubs 
{
    public class StadtLandFrustHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);

        }

        // When a new User opens the site
        public override async Task OnConnectedAsync()
    {
            await Clients.All.SendAsync("New User");
    }

    //When a User joins a game

    //when the options are changed

    //when a new game was started

    //Some ping mechanism (client send ping if not 2time they are closed and removed)


    //




    }
}