using Microsoft.EntityFrameworkCore;

namespace Survey.DataAccess
{
    public class SurveyContext : DbContext
    {
        public SurveyContext(DbContextOptions<SurveyContext> options) : base(options)
        {
        }

        public DbSet<Models.Survey> Surveys { get; set; }
        public DbSet<Models.Survey> SurveyPassings { get; set; }
    }
}