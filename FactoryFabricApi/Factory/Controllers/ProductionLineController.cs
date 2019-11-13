using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FactoryApi.Models;
using FactoryFabricApi.DTO_s;
using Microsoft.AspNetCore.Mvc;

namespace FactoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductionLineController : ControllerBase
    {
        private readonly IProductionLineRepository _productionLineRepository;
        public ProductionLineController(IProductionLineRepository context)
        {
            _productionLineRepository = context;
        }

        [HttpGet]
        public IEnumerable<ProductionLine> GetProductionLines()
        {
            return _productionLineRepository.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<ProductionLine> GetProductionLine(int id)
        {
            ProductionLine productionLine = _productionLineRepository.GetBy(id);
            if (productionLine == null) return NotFound();
            return productionLine;
        }


        [HttpPost]
        public ActionResult<ProductionLine> PostProductionLine(ProductionLineDTO DTO)
        {
            ProductionLine productionLine = new ProductionLine(DTO.Name);
            productionLine.Machines = DTO.Machines;
            _productionLineRepository.Add(productionLine);
            _productionLineRepository.SaveChanges();

            return CreatedAtAction(nameof(GetProductionLine), new { id = productionLine.Id }, productionLine);
        }

        [HttpPut("{id}")]
        public IActionResult PutProductionLine(int id, ProductionLineDTO DTO)
        {
            if (id != _productionLineRepository.GetBy(id).Id)
            {
                return BadRequest();
            }
            ProductionLine productionLine = new ProductionLine(DTO.Name);
            productionLine.Machines = DTO.Machines;
            _productionLineRepository.Update(productionLine);
            _productionLineRepository.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult<ProductionLine> DeleteProductionLine(int id)
        {
            ProductionLine productionLine = _productionLineRepository.GetBy(id);
            if (productionLine == null)
            {
                return NotFound();
            }
            _productionLineRepository.Delete(productionLine);
            _productionLineRepository.SaveChanges();
            return productionLine;
        }
    }
}