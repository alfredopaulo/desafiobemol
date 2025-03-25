namespace BackEnd.Models;

public class Feedback
{
    public required string Id { get; set; }
    public required string UserId { get; set; }
    public required string UserReceiver { get; set; } // User that receives the feedback
    public required string Message { get; set; }
    public DateTime CreatedAt { get; set; }
}
