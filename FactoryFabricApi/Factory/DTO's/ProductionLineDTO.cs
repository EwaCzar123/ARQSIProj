using FactoryApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;

using System.Threading.Tasks;

namespace FactoryFabricApi.DTO_s
{
    public class ProductionLineDTO
    {
        public ICollection<Machine> Machines { get; set; }
        public String Name { get; set; }
    }
}
