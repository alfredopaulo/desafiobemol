using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    [HttpGet]
    public IActionResult ListUsers()
    {
        return Ok(new[] { "Alice", "Bob", "Charlie" });
    }
}
