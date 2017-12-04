using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using SqeakR;

[assembly: OwinStartup(typeof(SqeakR.Startup1))]

namespace SqeakR
{
    public class Startup1
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}
