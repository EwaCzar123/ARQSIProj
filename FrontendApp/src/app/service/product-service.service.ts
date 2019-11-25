import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

  public machines: Product[] = [];
  private _machines$ = new BehaviorSubject([]);
  machines$: Observable<Product[]> = this._machines$.asObservable();
  
  constructor(private http: HttpClient) { }

  getMachines(): Observable<Product[]> {
    console.log(`${this.url}/product`);
    return this.http.get<Product[]>(`${this.url}/product`).pipe(
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

  addProduct(machine: Product): Observable<Product> {
    const body = {
      id: machine.id,
            duration: machine.description
    };
    console.log(machine.description);
    return this.http.post<Product>(`${this.url}/product`, body).pipe(tap(r => {
      this.machines.push(r);
      this._machines$.next(this.machines);
    }));
  }


}
