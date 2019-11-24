import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MachineType } from 'src/app/model/machine-type';

@Component({
  selector: 'app-machine-type-detail',
  templateUrl: './machine-type-detail.component.html',
  styleUrls: ['./machine-type-detail.component.css']
})
export class MachineTypeDetailComponent implements OnInit {
  public machineTypeFormGroup: FormGroup;

  @Input() machineTypeDetail: MachineType;

  constructor() { }

  ngOnInit() {
    this.machineTypeFormGroup = new FormGroup({
      position: new FormControl(),
      machineTypeID: new FormControl()
    })
  }

  onSubmit() {

  }

}
