import { Injectable } from '@angular/core';
import { Operation } from '../model/operation';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationServiceService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

  public machines: Operation[] = [];
  private _machines$ = new BehaviorSubject([]);
  machines$: Observable<Operation[]> = this._machines$.asObservable();
  
  constructor(private http: HttpClient) { }

  getMachines(): Observable<Operation[]> {
    console.log(`${this.url}/operation`);
    return this.http.get<Operation[]>(`${this.url}/operation`).pipe(
      tap(runs => {
        console.log("got here");
        this.machines = runs;
        this._machines$.next(this.machines);
      }),
    );
  }
  
  url = environment.apiUrl;

  getEnvironment(): string {
    return this.url;
  }

  addOperation(machine: Operation): Observable<Operation> {
    const body = {
      id: machine.id,
            duration: machine.duration
    };
    return this.http.post<Operation>(`${this.url}/operation`, body).pipe(tap(r => {
      this.machines.push(r);
      this._machines$.next(this.machines);
    }));
  }
}
