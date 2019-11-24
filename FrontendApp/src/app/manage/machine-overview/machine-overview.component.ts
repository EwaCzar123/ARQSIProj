import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  listMachines$: Observable<Machine[]>;
  @Output() showDetailMachine = new EventEmitter<Machine>();
  
  constructor(public machineService: MachineService,private route: ActivatedRoute) {
    this.machineService.getMachines().subscribe(res => {
          this.listMachines$ = of(res);
        })
   }

   ngOnInit(): void {
  }

  showDetail(machine: Machine) {
    this.showDetailMachine.emit(machine);
  }

}
