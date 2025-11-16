using Backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// DbContext → PostgreSQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// MVC controllers
builder.Services.AddControllers();

var app = builder.Build();

// (optional) HTTPS redirection
// app.UseHttpsRedirection();

app.UseAuthorization();

// Map controllers (ConditionsController etc.)
app.MapControllers();

app.Run();
