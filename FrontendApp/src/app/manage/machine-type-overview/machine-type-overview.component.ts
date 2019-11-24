import { Component, OnInit } from '@angular/core';
import { MachineTypeServiceService } from 'src/app/service/machine-type-service.service';
import { Observable } from 'rxjs/internal/Observable';
import { MachineType } from 'src/app/model/machine-type';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-machine-type-overview',
  templateUrl: './machine-type-overview.component.html',
  styleUrls: ['./machine-type-overview.component.css']
})
export class MachineTypeOverviewComponent implements OnInit {
  
  listMachineTypes$: Observable<MachineType[]>;

  ngOnInit(): void {
    console.log("hallo");
    
  }

  constructor(public machineTypeService: MachineTypeServiceService) {
    this.machineTypeService.getMachineTypes().subscribe(res => {
      this.listMachineTypes$ = of(res);
    })
  }
 

}
