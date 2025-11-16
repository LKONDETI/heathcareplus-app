namespace Backend.Models
{
    public class Condition
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Since { get; set; }
        public string Notes { get; set; }
        public string UserId { get; set; }
    }
}
