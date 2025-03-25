using BackEnd.Data;
using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PDIController : ControllerBase
    {
        private readonly DataContext _context;

        public PDIController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> ListPDIs()
        {
            var pdis = await _context.PDI
            .Include(p => p.User) // Include the related User data
            .ToListAsync();
            return Ok(pdis);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePDI([FromBody] PDI pdi)
        {
            var userExists = await _context.Users.AnyAsync(u => u.Id == pdi.UserId);
            if (!userExists)
            {
                return BadRequest("Usuário não encontrado.");
            }

            _context.PDI.Add(pdi);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPDIById), new { id = pdi.Id }, pdi);
        }

        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetPDIsByUserId(int userId)
        {
            var pdIs = await _context.PDI
                .Include(p => p.User)
                .Where(p => p.UserId == userId)
                .ToListAsync();

            if (pdIs == null || !pdIs.Any())
            {
                return NotFound("Nenhum PDI encontrado para este usuário.");
            }

            return Ok(pdIs);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPDIById(int id)
        {
            var pdi = await _context.PDI
                .Include(p => p.User)
                .FirstOrDefaultAsync(p => p.Id == id);
            if (pdi == null)
            {
                return NotFound("PDI não encontrado.");
            }

            return Ok(pdi);
        }
    }
}
