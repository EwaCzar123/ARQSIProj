using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryProductionApi.Models
{
    public interface IManuFacturingPlanRepository
    {
        ManufacturingPlan GetBy(int id);
        IEnumerable<ManufacturingPlan> GetAll();
        void Add(ManufacturingPlan manufacturingPlan);
        void Delete(ManufacturingPlan manufacturingPlan);
        void Update(ManufacturingPlan manufacturingPlan);
        void SaveChanges();
    }
}
