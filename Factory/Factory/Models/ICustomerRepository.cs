using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Models
{
    public interface ICustomerRepository
    {
        Customer GetBy(int id);
        IEnumerable<Customer> GetAll();
        void Add(Customer customer);
        void Delete(Customer customer);
        void Update(Customer customer);
        void SaveChanges();
    }
}
