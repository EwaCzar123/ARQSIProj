import { Product } from './product';

describe('Product', () => {

  let product = new Product("");

  it('should create an instance', () => {
    product = new Product("desc1");
    expect(product).toBeTruthy();
  });

  it('should be serialized to Json properly', () => {
    const jsonPropertiesActual = Object.keys(product.toJSON());
    const jsonPropertiesExpected = [
      'id',
      'description',
    ];
    expect(jsonPropertiesActual).toEqual(jsonPropertiesExpected);
    console.log(jsonPropertiesActual);
    console.log(jsonPropertiesExpected);
  });

});
