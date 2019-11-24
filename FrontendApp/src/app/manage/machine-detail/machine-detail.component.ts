import { Component, OnInit, Input } from '@angular/core';
import { Machine } from 'src/app/model/machine';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-machine-detail',
  templateUrl: './machine-detail.component.html',
  styleUrls: ['./machine-detail.component.css']
})
export class MachineDetailComponent implements OnInit {
  public machineFormGroup: FormGroup;

  @Input() machineDetail: Machine; 

  constructor() { 
    
  }

  ngOnInit() {
    this.machineFormGroup = new FormGroup({
      position: new FormControl(),
      machineType: new FormControl()
    })
  }

  onSubmit() {

  }

}
