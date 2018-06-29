namespace Survey.Web.Models
{
    public class Survey
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public QuestionType QuestionType { get; set; }
    }
}
