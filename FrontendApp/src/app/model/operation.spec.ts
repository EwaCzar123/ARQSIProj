import { Operation } from './operation';

describe('Operation', () => {

  let operation = new Operation("");

  it('should create an instance', () => {
    operation = new Operation("dur1");
    expect(operation).toBeTruthy();
  });

  it('should be serialized to Json properly', () => {
    const jsonPropertiesActual = Object.keys(operation.toJSON());
    const jsonPropertiesExpected = [
      'id',
      'duration',
    ];
    expect(jsonPropertiesActual).toEqual(jsonPropertiesExpected);
    console.log(jsonPropertiesActual);
    console.log(jsonPropertiesExpected);
  });


});
