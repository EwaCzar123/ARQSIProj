import { MachineType } from './machine-type';

describe('MachineType', () => {
  let machineType = new MachineType(1, "");;

  beforeEach(() => {
    machineType = new MachineType(1, 'op1');
  });

  it('should create an instance', () => {
    expect(machineType).toBeTruthy();
  });

  it('should be serialized to Json properly', () => {
    const jsonPropertiesActual = Object.keys(machineType.toJSON());
    const jsonPropertiesExpected = [
      'id',
      'machineId',
      'operation'
    ];
    expect(jsonPropertiesActual).toEqual(jsonPropertiesExpected);
    console.log(jsonPropertiesActual);
    console.log(jsonPropertiesExpected);
  });

});
