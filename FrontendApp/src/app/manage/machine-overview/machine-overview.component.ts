import { Component, OnInit } from '@angular/core';
import { MachineService } from 'src/app/service/machine.service';
import { Observable } from 'rxjs/internal/Observable';
import { Machine } from 'src/app/model/machine';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { combineLatest, takeUntil, filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-machine-overview',
  templateUrl: './machine-overview.component.html',
  styleUrls: ['./machine-overview.component.css']
})
export class MachineOverviewComponent implements OnInit {
  listMachines: Machine[];
  listMachines$: BehaviorSubject<Machine>; 
  lijst$: Observable<Machine[]>;
  destroy$ = new Subject();
  
  constructor(public machineService: MachineService,private route: ActivatedRoute) {
    
   }

   ngOnInit(): void {
        // this.lijst$ = this.machineService.machines$;

        this.machineService.getMachines().subscribe(res => {
          this.lijst$ = of(res);
        })
  }
  
  logButtonClicked() {
    console.log(this.machineService.machines[0].id);
    this.listMachines = this.machineService.machines;
  }

}
