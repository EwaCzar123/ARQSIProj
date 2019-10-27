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
        public ActionResult<Operation> PostOperation(Operation operation)
        {
            _operationRepository.Add(operation);
            _operationRepository.SaveChanges();

            return CreatedAtAction(nameof(GetOperation), new { id = operation.Id }, operation);
        }

        [HttpPut("{id}")]
        public IActionResult PutOperation(int id, Operation operation)
        {
            if (id != operation.Id)
            {
                return BadRequest();
            }
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