namespace Backend.Models
{
    public class UserProfileResponse
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string BloodGroup { get; set; }
    }
}
