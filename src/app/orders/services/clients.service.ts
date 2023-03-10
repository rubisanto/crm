import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private collection$!: Observable<Client[]>;

  private url = environment.urlApi;
  constructor(private http: HttpClient) {
    // on déclenche le setter
    this.collection = this.http.get<Client[]>(`${this.url}/clients`);
  }

  public get collection() :Observable<Client[]> {
    // on récupère une propriété privée
    return this.collection$;
  }

  public set collection(col: Observable<Client[]>) {
    // attibue une valeur a une propriété privée
    this.collection$ = col;
  }

  public changeState(item: Client, state: StateClient){
    // créer un nouvel object avec la nouvelle valeur de state
    const obj = new Client(item);
    // changer l etat
    obj.state = state;
    // déclencher update
    return this.update(obj);
  }

  public update(obj: Client) : Observable<Client>{
    return this.http.put<Client>(`${this.url}/clients/${obj.id}`, obj);
  }

  public add(obj: Client) : Observable<Client>{
    return this.http.post<Client>(`${this.url}/clients`, obj);
  }

  public getItemById(id: number) : Observable<Client>{
    return this.http.get<Client>(`${this.url}/clients/${id}`);
  }
}
