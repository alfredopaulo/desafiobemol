using BackEnd.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configurar o Kestrel para escutar em todos os endereços
builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(5000); // Porta 5000 para HTTP
});

// Add SQLite configuration
builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlite("Data Source=database.db"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();

app.Run();
