import { TestBed } from '@angular/core/testing';

import { MachineTypeServiceService } from './machine-type-service.service';

describe('MachineTypeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MachineTypeServiceService = TestBed.get(MachineTypeServiceService);
    expect(service).toBeTruthy();
  });
});
