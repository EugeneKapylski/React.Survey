namespace Survey.Web.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public QuestionType QuestionType { get; set; }
        public string AnswerOptions { get; set; }
    }
}
