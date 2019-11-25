import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MachineType } from 'src/app/model/machine-type';
import { MachineTypeServiceService } from 'src/app/service/machine-type-service.service';

@Component({
  selector: 'app-machine-type-detail',
  templateUrl: './machine-type-detail.component.html',
  styleUrls: ['./machine-type-detail.component.css']
})
export class MachineTypeDetailComponent implements OnInit {
  public machineTypeFormGroup: FormGroup;

  @Input() machineTypeDetail: MachineType;

  constructor(private machineTypeService: MachineTypeServiceService) { }

  ngOnInit() {
    this.machineTypeFormGroup = new FormGroup({
      machineID: new FormControl(),
      operation: new FormControl()
    })
  }

  onSubmit() {
    if(this.machineTypeDetail.id == undefined) {
      let machinee = new MachineType(this.machineTypeFormGroup.value.machineID, this.machineTypeFormGroup.value.operation);
    this.machineTypeService.addMachineType(machinee).subscribe(res => {

    })
  }
  }
}
