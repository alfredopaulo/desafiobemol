using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models;

public class Objective
{
    [Key]
    public int Id { get; set; }
    public required string Description { get; set; }
    public DateTime Deadline { get; set; }
    public bool Done { get; set; }
    public int PDIId { get; set; }
    public PDI? PDI { get; set; }
}
