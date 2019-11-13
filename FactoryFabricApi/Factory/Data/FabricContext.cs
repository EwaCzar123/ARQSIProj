using FactoryApi.Models;
using FactoryFabricApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Data
{
    public class FabricContext: DbContext
    {
        public FabricContext(DbContextOptions<FabricContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<MachineType>()
                .HasMany(a => a.Machines)
                .WithOne();

            builder.Entity<ProductionLine>()
                .HasMany(p => p.Machines)
                .WithOne();

            builder.Entity<MachineTypeOperation>()
            .HasKey(t => new { t.MachineTypeId, t.OperationId });

            //builder.Entity<MachineTypeOperation>()
            //.HasOne(pt => pt.MachineType)
            //.WithMany(p => p.Operations)
            //.HasForeignKey(pt => pt.MachineTypeId);

            //builder.Entity<MachineTypeOperation>()
            //    .HasOne(pt => pt.Operation)
            //    .WithMany(t => t.MachineType)
            //    .HasForeignKey(pt => pt.OperationId);

            //value objects
            builder.Entity<Machine>().OwnsOne(m => m.Position);
            builder.Entity<MachineType>().OwnsOne(mt => mt.Descritipion);
            builder.Entity<Operation>().OwnsOne(o => o.Duration);

        }

        public DbSet<Machine> Machines { get; set; }
        public DbSet<MachineType> MachineTypes { get; set; }

        public DbSet<Operation> Operations { get; set; }
        public DbSet<ProductionLine> ProductionLines { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Customer> Customers { get; set; }
    }
}
