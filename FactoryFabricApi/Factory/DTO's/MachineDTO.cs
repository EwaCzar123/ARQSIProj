using FactoryApi.Value_objects;
using FactoryFabricApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryFabricApi.DTO_s
{
    public class MachineDTO
    {
        public int MachineTypeId { get; set; }

        public int ProductionLineId { get; set; }

        public Position Position { get; set; }

        public ICollection<MachineTypeOperation> MachineTypeOperations { get; set; }
    }
}
