[ApiController]
[Route("auth")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _db;

    public AuthController(AppDbContext db)
    {
        _db = db;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        // Simple check: username or email already used
        var exists = await _db.Users
            .AnyAsync(u => u.Username == request.Username || u.Email == request.Email);

        if (exists)
            return BadRequest("Username or email already exists");

        var user = new User
        {
            Username = request.Username,
            Email = request.Email,
            PasswordHash = request.Password, // TODO: hash later
            Name = request.Name,
            DateOfBirth = request.DateOfBirth,
            BloodGroup = request.BloodGroup
        };

        _db.Users.Add(user);
        await _db.SaveChangesAsync();

        return Ok(new AuthResponse
        {
            UserId = user.UserId,
            Username = user.Username
        });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var user = await _db.Users
            .FirstOrDefaultAsync(u => u.Username == request.Username);

        if (user == null || user.PasswordHash != request.Password)
            return Unauthorized("Invalid username or password");

        return Ok(new AuthResponse
        {
            UserId = user.UserId,
            Username = user.Username
        });
    }
}
