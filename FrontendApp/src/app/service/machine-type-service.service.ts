import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MachineType } from '../model/machine-type';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MachineTypeServiceService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

  public machinesTypes: MachineType[] = [];
  private _machinesTypes$ = new BehaviorSubject([]);
  machines$: Observable<MachineType[]> = this._machinesTypes$.asObservable();
  
  constructor(private http: HttpClient) { }

  getMachineTypes(): Observable<MachineType[]> {
    console.log(`${this.url}machine/1/MachineType`);
    return this.http.get<MachineType[]>(`${this.url}machine/1/MachineType`).pipe(
      tap(runs => {
        console.log("got here");
        this.machinesTypes = runs;
        this._machinesTypes$.next(this.machinesTypes);
      }),
    );
  }
  
  url = environment.apiUrl;

  getEnvironment(): string {
    return this.url;
  }
}
