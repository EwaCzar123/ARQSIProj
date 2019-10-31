using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Models
{
    public interface IOperationRepository
    {
        Operation GetBy(int id);
        IEnumerable<Operation> GetAll();
        void Add(Operation operation);
        void Delete(Operation operation);
        void Update(Operation operation);
        void SaveChanges();
    }
}
