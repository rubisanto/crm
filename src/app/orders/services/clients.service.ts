import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private collection$!: Observable<Client[]>;
  constructor(private http: HttpClient) {
    // on déclenche le setter
    this.collection = this.http.get<Client[]>('http://localhost:3000/clients');
  }

  public get collection() :Observable<Client[]> {
    // on récupère une propriété privée
    return this.collection$;
  }

  public set collection(col: Observable<Client[]>) {
    // attibue une valeur a une propriété privée
    this.collection$ = col;
  }
}
