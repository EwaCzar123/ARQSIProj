import { Component, OnInit } from '@angular/core';
import { MachineService } from 'src/app/service/machine.service';
import { Machine } from 'src/app/model/machine';
import { MachineType } from 'src/app/model/machine-type';
import { Operation } from 'src/app/model/operation';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  public showOverview: string = "";

  public showMachineDetail: boolean = false;
  public showMachineTypeDetail: boolean = false;
  public showOperationDetail: boolean = false;
  public showProductDetail: boolean = false;
  
  machine: Machine;
  machineType: MachineType;
  operation: Operation;
  product: Product;

  public apiUrl = "def";

  constructor(private ms: MachineService) { 
    this.apiUrl = this.ms.getEnvironment();
  }

  showOverviewClick(view: number) {
    switch(view) {
      case 1:
        this.setAllFalse();
        this.showOverview = "machineOverview";
        break;
      case 2:
          this.setAllFalse();
        this.showOverview = "machineTypeOverview";
        break;
      case 3:
          this.setAllFalse();
        this.showOverview = "operationOverview";
        break;
      case 4:
        this.setAllFalse();
        this.showOverview = "productOverview";
        break;
      default:
        this.showOverview = "";
    }
  }

  showDetailMachine(machine: Machine) {
    this.setAllFalse();
    this.machine = machine;
    this.showMachineDetail = true;
  }
  showDetailMachineType(machineType: MachineType) {
    this.setAllFalse();
    this.machineType = machineType;
    this.showMachineTypeDetail = true;
  }
  showDetailOperation(operation: Operation) {
    this.setAllFalse();
    this.operation = operation;
    this.showOperationDetail = true;
  }
  showDetailProduct(product: Product) {
    this.setAllFalse();
    this.product = product;
    this.showProductDetail = true;
  }

  setAllFalse() {
    this.showMachineDetail = false;
    this.showMachineTypeDetail = false;
    this.showOperationDetail = false;
    this.showProductDetail = false;
  }



}
