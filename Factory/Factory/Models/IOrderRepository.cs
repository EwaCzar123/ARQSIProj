using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Models
{
    public interface IOrderRepository
    {
        Order GetBy(int id);
        IEnumerable<Order> GetAll();
        void Add(Order order);
        void Delete(Order order);
        void Update(Order order);
        void SaveChanges();
    }
}
