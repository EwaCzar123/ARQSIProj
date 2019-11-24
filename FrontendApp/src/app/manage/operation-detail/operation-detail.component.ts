import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Operation } from 'src/app/model/operation';

@Component({
  selector: 'app-operation-detail',
  templateUrl: './operation-detail.component.html',
  styleUrls: ['./operation-detail.component.css']
})
export class OperationDetailComponent implements OnInit {
  public operationFormGroup: FormGroup;

  @Input() operationDetail: Operation; 
  
  constructor() { }

  ngOnInit() {
    this.operationFormGroup = new FormGroup({
      duration: new FormControl(),
    })
  }

  onSubmit() {
    
  }

}
