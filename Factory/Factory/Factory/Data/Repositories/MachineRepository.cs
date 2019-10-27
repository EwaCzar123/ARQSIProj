using FactoryApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Data.Repositories
{
    public class MachineRepository : IMachineRepository
    {
        private readonly FabricContext _context;
        private readonly DbSet<Machine> _machines;

        public MachineRepository(FabricContext dbContext)
        {
            _context = dbContext;
            _machines = dbContext.Machines;
        }

        public IEnumerable<Machine> GetAll()
        {
            return _machines.ToList();
        }

        public Machine GetBy(int id)
        {
            return _machines.SingleOrDefault(f => f.Id == id);
        }
        public void Add(Machine machine)
        {
            _machines.Add(machine);
        }

        public void Delete(Machine machine)
        {
            _machines.Remove(machine);
        }

        public void Update(Machine machine)
        {
            _context.Update(machine);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
