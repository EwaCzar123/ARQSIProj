using FactoryApi.Value_objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Models
{
    public class Machine
    {
        public int Id { get; set; }
        public MachineType Type { get; set; }

        public Position Position { get; set; }

        public Machine()
        {

        }

                          
    }
}
