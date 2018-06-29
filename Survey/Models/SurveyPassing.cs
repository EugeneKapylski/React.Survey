namespace Survey.Models
{
    public class SurveyPassing
    {
        public int SurveyId { get; set; }
        public Question Question  { get; set; }
        public UserNameInfo User { get; set; }
        public Answer Answer { get; set; }
    }
}
