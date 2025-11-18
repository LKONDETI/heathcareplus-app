using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public class AppDbContext : DbContext
{
    public DbSet<Condition> Conditions => Set<Condition>();

    public DbSet<User> Users { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }
}
