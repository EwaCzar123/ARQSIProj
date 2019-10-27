using FactoryApi.Value_objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Models
{
    public class MachineType
    {
        public ICollection<Operation> Operations { get; set; }

        public int Id { get; set; }

        public Description Descritipion { get; set; }

        public MachineType()
        {

        }

    }
}
