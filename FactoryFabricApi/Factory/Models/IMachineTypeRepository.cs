using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Models
{
    public interface IMachineTypeRepository
    {
        MachineType GetBy(int id);
        IEnumerable<MachineType> GetAll();
        void Add(MachineType machine);
        void Delete(MachineType machine);
        void Update(MachineType machine);
        void SaveChanges();

    }
}
