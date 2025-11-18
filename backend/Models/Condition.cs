using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("conditions")] // map to lowercase table name
    public class Condition
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("userid")]
        public string UserId { get; set; }   // INTEGER in DB

        [Column("name")]
        public string Name { get; set; }

        [Column("since")]
        public string? Since { get; set; }

        [Column("notes")]
        public string? Notes { get; set; }
    }
}
