using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FactoryApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace FactoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository _customerRepository;
        public CustomerController(ICustomerRepository context)
        {
            _customerRepository = context;
        }

        [HttpGet]
        public IEnumerable<Customer> GetCustomers()
        {
            return _customerRepository.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<Customer> GetCustomer(int id)
        {
            Customer customer = _customerRepository.GetBy(id);
            if (customer == null) return NotFound();
            return customer;
        }


        [HttpPost]
        public ActionResult<Customer> PostCustomer(Customer customer)
        {
            _customerRepository.Add(customer);
            _customerRepository.SaveChanges();

            return CreatedAtAction(nameof(GetCustomer), new { id = customer.id }, customer);
        }

        [HttpPut("{id}")]
        public IActionResult PutCustomer(int id, Customer customer)
        {
            if (id != customer.id)
            {
                return BadRequest();
            }
            _customerRepository.Update(customer);
            _customerRepository.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult<Customer> DeleteCustomer(int id)
        {
            Customer customer = _customerRepository.GetBy(id);
            if (customer == null)
            {
                return NotFound();
            }
            _customerRepository.Delete(customer);
            _customerRepository.SaveChanges();
            return customer;
        }
    }
}