using FactoryApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryApi.Data.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly FabricContext _context;
        private readonly DbSet<Customer> _customers;

        public CustomerRepository(FabricContext dbContext)
        {
            _context = dbContext;
            _customers = dbContext.Customers;
        }

        public IEnumerable<Customer> GetAll()
        {
            return _customers.ToList();
        }

        public Customer GetBy(int id)
        {
            return _customers.SingleOrDefault(f => f.id == id);
        }
        public void Add(Customer customer)
        {
            _customers.Add(customer);
        }

        public void Delete(Customer customer)
        {
            _customers.Remove(customer);
        }

        public void Update(Customer customer)
        {
            _context.Update(customer);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
