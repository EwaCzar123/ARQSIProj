import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OperationServiceService } from 'src/app/service/operation-service.service';
import { Operation } from 'src/app/model/operation';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-operation-overview',
  templateUrl: './operation-overview.component.html',
  styleUrls: ['./operation-overview.component.css']
})
export class OperationOverviewComponent implements OnInit {
  listOperations$: Observable<Operation[]>;
  @Output() showDetailOperation = new EventEmitter<Operation>();
  constructor(public operationService: OperationServiceService) {
    this.operationService.getMachines().subscribe(res => {
      this.listOperations$ = of(res);
    })
   }

  ngOnInit() {
  }

  showDetail(operation: Operation) {
    this.showDetailOperation.emit(operation);
  }
}
