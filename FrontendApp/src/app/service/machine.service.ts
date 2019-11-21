import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor() { }

  
  url = environment.apiUrl;

  getEnvironment(): string {
    console.log(this.url);
    return this.url;
  }

  

}
