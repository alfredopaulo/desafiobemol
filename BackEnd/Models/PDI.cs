using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models;

public class PDI
{
    [Key]
    public int Id { get; set; }
    public required string Description { get; set; }
    public DateTime Deadline { get; set; }
    public bool Done { get; set; }
    public int UserId { get; set; }
    public User? User { get; set; }
}
