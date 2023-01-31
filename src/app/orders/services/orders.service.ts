import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private collection$!: Observable<Order[]>;

  private url = environment.urlApi;

  constructor(private http: HttpClient) {
    // on déclenche le setter
    this.collection = this.http.get<Order[]>(`${this.url}/orders`);
  }

  public get collection() :Observable<Order[]> {
    // on récupère une propriété privée
    return this.collection$;
  }

  public set collection(col: Observable<Order[]>) {
    // attibue une valeur a une propriété privée
    this.collection$ = col;
  }
// modifier l'état de l'objet
  public changeState(item: Order, state: StateOrder) {
    // créer un nouvel object avec la nouvelle valeur de state
    const obj = new Order(item);
    // changer l etat
    obj.state = state;
    // déclencher update
    return this.update(obj);


  }


  // methode pour update une commande
  public update(obj : Order) : Observable<Order>{

    // retourner un observable
    return this.http.put<Order>(`${this.url}/orders/${obj.id}`, obj)
  }


  // add order
  public add(obj : Order) : Observable<Order>{
    return this.http.post<Order>(`${this.url}/orders`, obj)
  }

  // modify order
  // getitemById
  public getItemById(id: number) : Observable<Order>{
    return this.http.get<Order>(`${this.url}/orders/${id}`)
  }



}
