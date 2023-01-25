import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private collection$!: Observable<Order[]>;
  constructor(private http: HttpClient) {
    // on déclenche le setter
    this.collection = this.http.get<Order[]>('http://localhost:3000/orders');
  }

  public get collection() :Observable<Order[]> {
    // on récupère une propriété privée
    return this.collection$;
  }

  public set collection(col: Observable<Order[]>) {
    // attibue une valeur a une propriété privée
    this.collection$ = col;
  }
}
