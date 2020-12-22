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
    }
}