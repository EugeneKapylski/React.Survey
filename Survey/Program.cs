using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using System;

namespace Survey.Web
{
    public class Program
    {
        private int _testField;

        public int TestProperty => _testField++;


        public static void Main(string[] args)
        {
            int x = 9;
            //var y = 9;
            //var r = 6;


            if(true){
                x = 8;
            }

            BuildWebHost(args).Run(); //var yy = 9;

            //var s = yy++;
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
