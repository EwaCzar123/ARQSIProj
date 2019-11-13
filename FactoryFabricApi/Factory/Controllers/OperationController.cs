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
    public class OperationController : ControllerBase
    {
        private readonly IOperationRepository _operationRepository;
        public OperationController(IOperationRepository context)
        {
            _operationRepository = context;
        }

        [HttpGet]
        public IEnumerable<Operation> GetOperations()
        {
            return _operationRepository.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<Operation> GetOperation(int id)
        {
            Operation operation = _operationRepository.GetBy(id);
            if (operation == null) return NotFound();
            return operation;
        }


        [HttpPost]
        public ActionResult<Operation> PostOperation(OperationDTO DTO)
        {
            Operation operation = new Operation();
            operation.Duration = DTO.Duration;
            _operationRepository.Add(operation);
            _operationRepository.SaveChanges();

            return CreatedAtAction(nameof(GetOperation), new { id = operation.Id }, operation);
        }

        [HttpPut("{id}")]
        public IActionResult PutOperation(int id, OperationDTO DTO)
        {
            if (id != _operationRepository.GetBy(id).Id)
            {
                return BadRequest();
            }
            Operation operation = new Operation();
            operation.Duration = DTO.Duration;
            _operationRepository.Update(operation);
            _operationRepository.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult<Operation> DeleteOperation(int id)
        {
            Operation operation = _operationRepository.GetBy(id);
            if (operation == null)
            {
                return NotFound();
            }
            _operationRepository.Delete(operation);
            _operationRepository.SaveChanges();
            return operation;
        }
    }
}