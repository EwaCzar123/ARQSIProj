import { Component, OnInit } from '@angular/core';
import { MachineService } from 'src/app/service/machine.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {


  
  public apiUrl = "def";

  constructor(public ms: MachineService) { 
    this.apiUrl = this.ms.getEnvironment();
    
  }

  ngOnInit() {
    
    
  }


}
