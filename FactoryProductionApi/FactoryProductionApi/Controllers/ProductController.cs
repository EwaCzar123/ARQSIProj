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
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        public ProductController(IProductRepository context)
        {
            _productRepository = context;
        }

        [HttpGet]
        public IEnumerable<Product> GetOperations()
        {
            return _productRepository.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetOperation(int id)
        {
            Product product = _productRepository.GetBy(id);
            if (product == null) return NotFound();
            return product;
        }


        [HttpPost]
        public ActionResult<Product> PostOperation(Product product)
        {
            _productRepository.Add(product);
            _productRepository.SaveChanges();

            return CreatedAtAction(nameof(GetOperation), new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public IActionResult PutOperation(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }
            _productRepository.Update(product);
            _productRepository.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult<Product> DeleteProduct(int id)
        {
            Product product = _productRepository.GetBy(id);
            if (product == null)
            {
                return NotFound();
            }
            _productRepository.Delete(product);
            _productRepository.SaveChanges();
            return product;
        }
    }
}