using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Survey.Models;

namespace Survey.Controllers
{
    [Produces("application/json")]
    [Route("api/Surveys")]
    public class SurveysController : Controller
    {
        // GET: api/Surveys
        [HttpGet]
        public IEnumerable<Models.Survey> Get()
        {
            return new List<Models.Survey>()
            {
                new Models.Survey
                {
                    Id = 1,
                    Title = "The first"
                },
                new Models.Survey
                {
                    Id = 2,
                    Title = "The second"
                }
            };
        }

        // GET: api/Surveys/5
        [HttpGet("{id}")]//, Name = "Get")]
        public Models.Survey Get(int id)
        {
            return new Models.Survey
            {
                Id = 2,
                Title = "The second new",
                QuestionType = QuestionType.SingleChoice,

            };
        }

        //// POST: api/Surveys
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT: api/Surveys/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
