using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Models
{
    public class ProductionLine
    {
        public int Id { get; set; }
        public ICollection<Machine> Machines { get; set; }

        public String Name { get; set; }

        public ProductionLine(String name)
        {
            Name = name;
        }
    }
}
