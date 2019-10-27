using FactoryApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Data.Repositories
{
    public class OperationRepository : IOperationRepository
    {
        private readonly FabricContext _context;
        private readonly DbSet<Operation> _operations;

        public OperationRepository(FabricContext dbContext)
        {
            _context = dbContext;
            _operations = dbContext.Operations;
        }

        public IEnumerable<Operation> GetAll()
        {
            return _operations.ToList();
        }

        public Operation GetBy(int id)
        {
            return _operations.SingleOrDefault(f => f.Id == id);
        }
        public void Add(Operation operation)
        {
            _operations.Add(operation);
        }

        public void Delete(Operation operation)
        {
            _operations.Remove(operation);
        }

        public void Update(Operation operation)
        {
            _context.Update(operation);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
