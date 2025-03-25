using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models;

public class Feedback
{
    [Key]
    public int Id { get; set; }
    public int UserId { get; set; }
    public int UserReceiver { get; set; } // User that receives the feedback
    public required string Message { get; set; }
    public DateTime CreatedAt { get; set; }
}
