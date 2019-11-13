using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Models
{
    public interface IMachineRepository
    {
        Machine GetBy(int id);
        IEnumerable<Machine> GetAll();
        void Add(Machine machine);
        void Delete(Machine machine);
        void Update(Machine machine);
        void SaveChanges();
    }
}
