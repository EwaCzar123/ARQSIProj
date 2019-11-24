import { Component, OnInit } from '@angular/core';
import { MachineService } from 'src/app/service/machine.service';
import { Machine } from 'src/app/model/machine';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  public showOverview: string = "";
  public showMachineDetail: boolean = false;
  
  machine: Machine;

  public apiUrl = "def";

  constructor(private ms: MachineService) { 
    this.apiUrl = this.ms.getEnvironment();
  }

  showOverviewClick(view: number) {
    switch(view) {
      case 1:
        this.showOverview = "machineOverview";
        break;
      case 2:
        this.showOverview = "machineTypeOverview";
        break;
      case 3:
        this.showOverview = "operationOverview";
        break;
      case 4:
        this.showOverview = "productOverview";
        break;
      default:
        this.showOverview = "";
    }
  }

  showDetailMachine(machine: Machine) {
    this.machine = machine;
    this.showMachineDetail = true;
  }



}
