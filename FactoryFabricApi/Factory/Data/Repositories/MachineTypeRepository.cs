using FactoryApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Data.Repositories
{
    public class MachineTypeRepository: IMachineTypeRepository
    {
        private readonly FabricContext _context;
        private readonly DbSet<MachineType> _machineTypes;

        public MachineTypeRepository(FabricContext dbContext)
        {
            _context = dbContext;
            _machineTypes = dbContext.MachineTypes;
        }

        public IEnumerable<MachineType> GetAll()
        {
            return _machineTypes.ToList();
        }

        public MachineType GetBy(int id)
        {
            return _machineTypes.SingleOrDefault(f => f.Id == id);
        }
        public void Add(MachineType machineType)
        {
            _machineTypes.Add(machineType);
        }

        public void Delete(MachineType machineType)
        {
            _machineTypes.Remove(machineType);
        }

        public void Update(MachineType machineType)
        {
            _context.Update(machineType);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
