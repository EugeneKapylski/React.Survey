using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Survey.Web.Models;

namespace Survey.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/SurveyPassings")]
    public class SurveyPassingsController : Controller
    {
        // GET: api/SurveyPassings
        [HttpGet]
        public IEnumerable<SurveyPassing> Get()
        {
            return null;
        }

        // GET: api/SurveyPassings/5
        [HttpGet("{id}")]
        public IEnumerable<SurveyPassing> Get(int id)
        {
            return new List<SurveyPassing>
            {
                new SurveyPassing
                {
                    SurveyId = id,
                    Question = new Question
                    {
                        Id = 1,
                        QuestionType = QuestionType.Text,
                        Title = "How old are you?"

                    },
                    User = new UserNameInfo
                    {
                        FirstName = "John",
                        LastName = "Johnson"
                    },
                    Answer = new Answer
                    {
                        AnswerSettings = @"{""isReadonly"": true, ""answer"": ""I'm 22 years old""}"
                    }
                },
                new SurveyPassing
                {
                    SurveyId = id,
                    Question = new Question
                    {
                        Id = 2,
                        QuestionType = QuestionType.SingleChoice,
                        Title = "How are you?"
                    },
                    User = new UserNameInfo
                    {
                        FirstName = "John",
                        LastName = "Johnson"
                    },
                    Answer = new Answer
                    {
                        AnswerSettings = @"{""options"": [{""value"": ""option 1.1"",""isSelected"": false},{""value"": ""option 2"",""isSelected"": true}, {""value"": ""option 3"", ""isSelected"": false}], ""isReadonly"": true, ""groupName"": ""groupName1""}"
                    }
                },
                new SurveyPassing
                {
                    SurveyId = id,
                    Question = new Question
                    {
                        Id = 2,
                        QuestionType = QuestionType.SingleChoice,
                        Title = "How are you?"

                    },
                    User = new UserNameInfo
                    {
                        FirstName = "James",
                        LastName = "Jameson"
                    },
                    Answer = new Answer
                    {
                        AnswerSettings = @"{""options"": [{""value"": ""option 1.1"",""isSelected"": false},{""value"": ""option 2"",""isSelected"": true}, {""value"": ""option 3"", ""isSelected"": false}], ""isReadonly"": true, ""groupName"": ""groupName1""}"
                    }
                },
                new SurveyPassing
                {
                    SurveyId = id,
                    Question = new Question
                    {
                        Id = 1,
                        QuestionType = QuestionType.Text,
                        Title = "How old are you?"

                    },
                    User = new UserNameInfo
                    {
                        FirstName = "James",
                        LastName = "Jameson"
                    },
                    Answer = new Answer
                    {
                        AnswerSettings = @"{""isReadonly"": true, ""answer"": ""I'm 28 years old""}"
                    }
                }
            };
        }
    }
}
