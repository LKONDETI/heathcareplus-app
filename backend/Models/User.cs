using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("users")] // must match lowercase table name EXACTLY
    public class User
    {
        [Column("userid")]
        public int UserId { get; set; }

        [Column("username")]
        public string Username { get; set; }

        [Column("email")]
        public string Email { get; set; }

        [Column("passwordhash")]
        public string PasswordHash { get; set; }

        [Column("name")]
        public string Name { get; set; }

        [Column("dateofbirth")]
        public DateTime DateOfBirth { get; set; }

        [Column("bloodgroup")]
        public string BloodGroup { get; set; }
    }
}
