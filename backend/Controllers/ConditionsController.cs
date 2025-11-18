using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ConditionsController : ControllerBase
{
    private readonly AppDbContext _db;

    public ConditionsController(AppDbContext db)
    {
        _db = db;
    }

    // GET: api/conditions
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Condition>>> GetAll()
    {
        var items = await _db.Conditions
            .OrderBy(c => c.Id)
            .ToListAsync();

        return Ok(items);
    }

    // GET: api/conditions/5
    [HttpGet("{id:int}")]
    public async Task<ActionResult<Condition>> GetById(int id)
    {
        var item = await _db.Conditions.FindAsync(id);
        if (item == null) return NotFound();
        return Ok(item);
    }

    // POST: api/conditions
    [HttpPost]
    public async Task<ActionResult<Condition>> Create(Condition condition)
    {
        if (string.IsNullOrWhiteSpace(condition.UserId))
        {
            condition.UserId = "demo-user";
        }

        _db.Conditions.Add(condition);
        await _db.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = condition.Id }, condition);
    }

    // PUT: api/conditions/5
    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, Condition updated)
    {
        if (id != updated.Id) return BadRequest();

        var existing = await _db.Conditions.FindAsync(id);
        if (existing == null) return NotFound();

        existing.Name = updated.Name;
        existing.Since = updated.Since;
        existing.Notes = updated.Notes;
        // keep UserId for now

        await _db.SaveChangesAsync();
        return NoContent();
    }

    // DELETE: api/conditions/5
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var existing = await _db.Conditions.FindAsync(id);
        if (existing == null) return NotFound();

        _db.Conditions.Remove(existing);
        await _db.SaveChangesAsync();
        return NoContent();
    }
}
