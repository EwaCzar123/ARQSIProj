﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Value_objects
{
    public class Duration : ValueObject
    {
        public int Id { get; set; }
        protected override IEnumerable<object> GetAtomicValues()
        {
            throw new NotImplementedException();
        }
    }
}
