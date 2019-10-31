using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FactoryApi.Models;
using FactoryProductionApi.Data;
using FactoryProductionApi.Models;
using Microsoft.EntityFrameworkCore;

namespace FactoryApi.Data.Repositories
{

    public class ManuFacturingRepository : IManuFacturingPlanRepository
    {
        private readonly ProductionContext _context;
        private readonly DbSet<ManufacturingPlan> _manuFacturingPlans;

        public ManuFacturingRepository(ProductionContext dbContext)
        {
            _context = dbContext;
            _manuFacturingPlans = dbContext.ManufacturingPlans;
        }

        public IEnumerable<ManufacturingPlan> GetAll()
        {
            return _manuFacturingPlans.ToList();
        }

        public ManufacturingPlan GetBy(int id)
        {
            return _manuFacturingPlans.SingleOrDefault(product => product.Id == id);
        }
        public void Add(ManufacturingPlan product)
        {
            _manuFacturingPlans.Add(product);
        }

        public void Delete(ManufacturingPlan product)
        {
            _manuFacturingPlans.Remove(product);
        }

        public void Update(ManufacturingPlan product)
        {
            _context.Update(product);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }

}
