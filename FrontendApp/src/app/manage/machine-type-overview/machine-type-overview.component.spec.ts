import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTypeOverviewComponent } from './machine-type-overview.component';

describe('MachineTypeOverviewComponent', () => {
  let component: MachineTypeOverviewComponent;
  let fixture: ComponentFixture<MachineTypeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineTypeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineTypeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
