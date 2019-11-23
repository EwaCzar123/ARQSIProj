import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, mapTo, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Machine } from '../model/machine';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

  public machines: Machine[] = [];
  private _machines$ = new BehaviorSubject([]);
  machines$: Observable<Machine[]> = this._machines$.asObservable();
  
  constructor(private http: HttpClient) { }

  getMachines(): Observable<Machine[]> {
    console.log(`${this.url}/machine`);
    return this.http.get<Machine[]>(`${this.url}/machine`).pipe(
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

  getMachinesObservable() {
    return this._machines$;
  }

  

  getTest() {
    
  }

  getMachineStatic(): Observable<Boolean> {
 
    return this.http.get<Machine[]>(`${this.url}/machine`).pipe(
    tap(folds => {
      folds.forEach(f => {
        this._machines$.next(this.machines);
        this.machines = folds;
      })
    }),
    mapTo(true)
    );
  
}

  

}
