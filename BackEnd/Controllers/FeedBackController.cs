using BackEnd.Data;
using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedBackController : ControllerBase
    {
        private readonly DataContext _context;

        public FeedBackController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetFeedbacks()
        {
            var feedbacks = await _context.Feedbacks.ToListAsync();
            return Ok(feedbacks);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFeedback(string id)
        {
            var feedback = await _context.Feedbacks.FindAsync(id);

            if (feedback == null)
                return NotFound();

            return Ok(feedback);
        }

        [HttpGet("received/{userReceiverId}")]
        public async Task<IActionResult> GetReceivedFeedbacks(string userReceiverId)
        {
            var feedbacks = await _context.Feedbacks
                .Where(f => f.UserReceiver == userReceiverId)
                .ToListAsync();
            return Ok(feedbacks);
        }

        [HttpGet("sent/{userId}")]
        public async Task<IActionResult> GetSentFeedbacks(string userId)
        {
            var feedbacks = await _context.Feedbacks
                .Where(f => f.UserId == userId)
                .ToListAsync();
            return Ok(feedbacks);
        }

        [HttpPost]
        public async Task<IActionResult> CreateFeedback(Feedback feedback)
        {
            feedback.CreatedAt = DateTime.UtcNow;
            _context.Feedbacks.Add(feedback);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetFeedback), new { id = feedback.Id }, feedback);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFeedback(string id)
        {
            var feedback = await _context.Feedbacks.FindAsync(id);
            if (feedback == null)
                return NotFound();

            _context.Feedbacks.Remove(feedback);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FeedbackExists(string id)
        {
            return _context.Feedbacks.Any(e => e.Id == id);
        }
    }
}
