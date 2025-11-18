using Microsoft.AspNetCore.Mvc;
using Backend.Models;
using Backend.Data;
using Backend.Dtos;
using Microsoft.EntityFrameworkCore;
namespace Backend.Controllers;

[ApiController]

[Route("users")]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _db;

    public UsersController(AppDbContext db)
    {
        _db = db;
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<UserProfileResponse>> GetUser(int id)
    {
        var user = await _db.Users.FindAsync(id);

        if (user == null)
            return NotFound();

        return new UserProfileResponse
        {
            UserId = user.UserId,
            Username = user.Username,
            Email = user.Email,
            Name = user.Name,
            DateOfBirth = user.DateOfBirth,
            BloodGroup = user.BloodGroup
        };
    }
}
