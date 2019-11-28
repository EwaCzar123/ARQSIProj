import { Component, OnInit, Input } from '@angular/core';
import { Machine } from 'src/app/model/machine';
import { FormGroup, FormControl } from '@angular/forms';
import { MachineService } from 'src/app/service/machine.service';

@Component({
  selector: 'app-machine-detail',
  templateUrl: './machine-detail.component.html',
  styleUrls: ['./machine-detail.component.css']
})
export class MachineDetailComponent implements OnInit {
  public machineFormGroup: FormGroup;
  @Input() machineDetail: Machine; 

  constructor(private machineService: MachineService) { 
    
  }

  ngOnInit() {
    this.machineFormGroup = new FormGroup({
      position: new FormControl(),
      machineType: new FormControl()
    })
  }

  onSubmit() {
    if(this.machineDetail.id == undefined) {
      let machinee = new Machine(this.machineFormGroup.value.position, this.machineFormGroup.value.machineType);
    this.machineService.addMachine(machinee).subscribe(res => {

    })
    }
  }

  get position(): string {
    if(this.machineDetail.position == undefined) {
      return "put position here";
    } else {
      return this.machineDetail.position;
    }
  }
  get machineType(): number {
    if(this.machineDetail.machineType.id == undefined) {
      return 1;
    }
    else {
      return this.machineDetail.machineType.id;
    }
  }

}
