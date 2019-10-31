using FactoryApi.Models;
using FactoryProductionApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryProductionApi.Data
{
    public class ProductionContext: DbContext
    {
        protected override void OnModelCreating(ModelBuilder builder)
        {
            
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<ManufacturingPlan> ManufacturingPlans { get; set; }

    }
}
