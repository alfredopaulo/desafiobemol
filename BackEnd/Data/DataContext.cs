using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Feedback> Feedbacks { get; set; }
    public DbSet<PDI> PDI { get; set; }
    public DbSet<Objective> Objectives { get; set; }
}
