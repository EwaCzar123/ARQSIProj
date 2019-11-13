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
        public class MachineController : ControllerBase
        {
            private readonly IMachineRepository _machineRepository;
            public MachineController(IMachineRepository context)
            {
            _machineRepository = context;
            }

            [HttpGet]
            public IEnumerable<Machine> GetMachines()
            {
                return _machineRepository.GetAll();
            }

            [HttpGet("{id}")]
            public ActionResult<Machine> GetMachine(int id)
            {
            Machine machine = _machineRepository.GetBy(id);
                if (machine == null) return NotFound();
                return machine;
            }


            [HttpPost]
            public ActionResult<Machine> PostMachine(MachineDTO DTO)
            {
            Machine machine = new Machine(DTO.MachineTypeId, DTO.ProductionLineId) ;
            _machineRepository.Add(machine);
            _machineRepository.SaveChanges();

                return CreatedAtAction(nameof(GetMachine), new { id = machine.Id }, machine);
            }

            [HttpPut("{id}")]
            public IActionResult PutMachine(int id, MachineDTO DTO)
            {
                
                if (id != _machineRepository.GetBy(id).Id)
                {
                    return BadRequest();
                }

            Machine machine = new Machine(DTO.MachineTypeId, DTO.ProductionLineId);
            machine.Position = DTO.Position;
            _machineRepository.Update(machine);
            _machineRepository.SaveChanges();
                return NoContent();
            }

            [HttpDelete("{id}")]
            public ActionResult<Machine> DeleteMachine(int id)
            {
            Machine machine = _machineRepository.GetBy(id);
                if (machine == null)
                {
                    return NotFound();
                }
            _machineRepository.Delete(machine);
            _machineRepository.SaveChanges();
                return machine;
            }
        }
    }