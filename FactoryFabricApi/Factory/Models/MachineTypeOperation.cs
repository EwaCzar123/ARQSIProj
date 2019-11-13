using FactoryApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryFabricApi.Models
{
    public class MachineTypeOperation
    {
        public int OperationId { get; set; }
        public Operation Operation { get; set; }

        public int MachineTypeId { get; set; }
        public MachineType MachineType { get; set; }
    }
}
