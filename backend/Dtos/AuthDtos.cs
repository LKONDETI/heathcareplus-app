using System;

namespace Backend.Dtos
{
    public class RegisterRequest
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string BloodGroup { get; set; }
    }

    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class AuthResponse
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        // For now, no token – or you can add a fake one later
    }

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
