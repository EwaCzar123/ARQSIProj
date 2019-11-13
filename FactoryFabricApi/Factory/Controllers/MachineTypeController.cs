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
    public class MachineTypeController : ControllerBase
    {
        private readonly IMachineTypeRepository _machineTypeRepository;
        public MachineTypeController(IMachineTypeRepository context)
        {
            _machineTypeRepository = context;
        }

        [HttpGet]
        public IEnumerable<MachineType> GetMachineType()
        {
            return _machineTypeRepository.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<MachineType> GetMachineType(int id)
        {
            MachineType machineType = _machineTypeRepository.GetBy(id);
            if (machineType == null) return NotFound();
            return machineType;
        }

        [HttpPost]
        public ActionResult<MachineType> PostFolder(MachineTypeDTO DTO)
        {
            MachineType machineType = new MachineType();
            machineType.Machines = DTO.Machines;
            machineType.MachineTypeOperations = DTO.MachineTypeOperations;
            machineType.Operations = DTO.Operations;
            _machineTypeRepository.Add(machineType);
            _machineTypeRepository.SaveChanges();

            return CreatedAtAction(nameof(GetMachineType), new { id = machineType.Id }, machineType);
        }

        [HttpPut("{id}")]
        public IActionResult PutMachineType(int id, MachineTypeDTO DTO)
        {
            if (id != _machineTypeRepository.GetBy(id).Id)
            {   
                return BadRequest();
            }
            MachineType machineType = new MachineType();
            machineType.Machines = DTO.Machines;
            machineType.MachineTypeOperations = DTO.MachineTypeOperations;
            machineType.Operations = DTO.Operations;
            _machineTypeRepository.Update(machineType);
            _machineTypeRepository.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult<MachineType> DeleteMachineType(int id)
        {
            MachineType machineType = _machineTypeRepository.GetBy(id);
            if (machineType == null)
            {
                return NotFound();
            }
            _machineTypeRepository.Delete(machineType);
            _machineTypeRepository.SaveChanges();
            return machineType;
        }
    }
}