using FactoryApi.Models;
using FactoryApi.Value_objects;
using FactoryFabricApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryFabricApi.DTO_s
{
    public class MachineTypeDTO
    {
        public ICollection<Operation> Operations { get; set; }

        public ICollection<Machine> Machines { get; set; }

        public ICollection<MachineTypeOperation> MachineTypeOperations { get; set; }

        public Description Descritipion { get; set; }
    }
}
