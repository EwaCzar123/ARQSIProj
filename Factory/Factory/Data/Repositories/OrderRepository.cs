using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FactoryApi.Models;
using Microsoft.EntityFrameworkCore;

namespace FactoryApi.Data.Repositories
{
    
        public class OrderRepository: IOrderRepository
        {
            private readonly FabricContext _context;
            private readonly DbSet<Order> _orders;

            public OrderRepository(FabricContext dbContext)
            {
                _context = dbContext;
                _orders = dbContext.Orders;
            }

            public IEnumerable<Order> GetAll()
            {
                return _orders.ToList();
            }

            public Order GetBy(int id)
            {
                return _orders.SingleOrDefault(f => f.Id == id);
            }
            public void Add(Order order)
            {
                _orders.Add(order);
            }

            public void Delete(Order order)
            {
                _orders.Remove(order);
            }

            public void Update(Order order)
            {
                _context.Update(order);
            }

            public void SaveChanges()
            {
                _context.SaveChanges();
            }
        }
    
}
