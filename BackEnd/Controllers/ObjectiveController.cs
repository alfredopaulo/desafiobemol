using BackEnd.Data;
using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ObjectiveController : ControllerBase
    {
        private readonly DataContext _context;

        public ObjectiveController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> ListObjectes()
        {
            var objectives = await _context.Objectives.ToListAsync();
            return Ok(objectives);
        }

        [HttpPost]
        public async Task<IActionResult> CreateObjective([FromBody] Objective objective)
        {
            var pdiExists = await _context.Users.AnyAsync(u => u.Id == objective.PDIId);
            if (!pdiExists)
            {
                return BadRequest("PDI não encontrado.");
            }

            _context.Objectives.Add(objective);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetObjectiveById), new { id = objective.Id }, objective);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetObjectiveById(int id)
        {
            var objective = await _context.Objectives
                .Include(p => p.PDI)
                .FirstOrDefaultAsync(p => p.Id == id);
            if (objective == null)
            {
                return NotFound("Objectivo não encontrado.");
            }

            return Ok(objective);
        }
    }
}
