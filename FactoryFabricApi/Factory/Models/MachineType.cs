using FactoryApi.Value_objects;
using FactoryFabricApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Models
{
    public class MachineType
    {
        public int Id { get; set; }
        public ICollection<Operation> Operations { get; set; }
        public ICollection<Machine> Machines { get; set; }

        public ICollection<MachineTypeOperation> MachineTypeOperations {get;set;}

        public Description Descritipion { get; set; }

        public MachineType()
        {
            Machines = new List<Machine>();
        }

    }
}
