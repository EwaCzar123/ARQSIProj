using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FactoryApi.Models;

namespace FactoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController: ControllerBase
    {
        private readonly IOrderRepository _orderRepository;
        public OrderController(IOrderRepository context)
        {
            _orderRepository = context;
        }

        [HttpGet]
        public IEnumerable<Order> GetOrder()
        {
            return _orderRepository.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<Order> GetOrder(int id)
        {
            Order order = _orderRepository.GetBy(id);
            if (order == null) return NotFound();
            return order;
        }

        [HttpPost]
        public ActionResult<Order> PostFolder(Order order)
        {
            _orderRepository.Add(order);
            _orderRepository.SaveChanges();

            return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, order);
        }

        [HttpPut("{id}")]
        public IActionResult PutOrder(int id, Order order)
        {
            if (id != order.Id)
            {
                return BadRequest();
            }
            _orderRepository.Update(order);
            _orderRepository.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult<Order> DeleteOrder(int id)
        {
            Order order = _orderRepository.GetBy(id);
            if (order == null)
            {
                return NotFound();
            }
            _orderRepository.Delete(order);
            _orderRepository.SaveChanges();
            return order;
        }
    }
}