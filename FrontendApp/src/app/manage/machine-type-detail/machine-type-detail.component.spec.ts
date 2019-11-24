import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTypeDetailComponent } from './machine-type-detail.component';

describe('MachineTypeDetailComponent', () => {
  let component: MachineTypeDetailComponent;
  let fixture: ComponentFixture<MachineTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
