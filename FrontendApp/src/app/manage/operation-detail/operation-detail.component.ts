import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Operation } from 'src/app/model/operation';
import { OperationServiceService } from 'src/app/service/operation-service.service';

@Component({
  selector: 'app-operation-detail',
  templateUrl: './operation-detail.component.html',
  styleUrls: ['./operation-detail.component.css']
})
export class OperationDetailComponent implements OnInit {
  public operationFormGroup: FormGroup;

  @Input() operationDetail: Operation; 
  
  constructor(private operationService: OperationServiceService) { }

  ngOnInit() {
    this.operationFormGroup = new FormGroup({
      duration: new FormControl(),
    })
  }

  onSubmit() {
    if(this.operationDetail.id == undefined) {
      let machinee = new Operation(this.operationFormGroup.value.duration);
    this.operationService.addOperation(machinee).subscribe(res => {

    })
  }
  }
}
