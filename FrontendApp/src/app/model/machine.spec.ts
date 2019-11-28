import { Machine } from './machine';
import { MachineType } from './machine-type';



describe('Machine', () => {
  let mt  = new MachineType(1, "");
  let machine = new Machine("", mt);

  it('should create an instance', () => {
    let machineType = new MachineType(1, "op2");
    machine = new Machine("pos1", machineType);
    expect(machine).toBeTruthy();
  });

  it('should be serialized to Json properly', () => {
    const jsonPropertiesActual = Object.keys(machine.toJSON());
    const jsonPropertiesExpected = [
      'id',
      'machineType',
      'position'
    ];
    expect(jsonPropertiesActual).toEqual(jsonPropertiesExpected);
    console.log(jsonPropertiesActual);
    console.log(jsonPropertiesExpected);
  });





});
