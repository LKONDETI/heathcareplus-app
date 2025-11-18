namespace Backend.Models
{

public class User
{
    public int UserId { get; set; }           // PK
    public string Username { get; set; }      // unique
    public string Email { get; set; }         // unique
    public string PasswordHash { get; set; }  // plain for now if you want demo only
    public string Name { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string BloodGroup { get; set; }
}
}