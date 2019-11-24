import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationOverviewComponent } from './operation-overview.component';

describe('OperationOverviewComponent', () => {
  let component: OperationOverviewComponent;
  let fixture: ComponentFixture<OperationOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
