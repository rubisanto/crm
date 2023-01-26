import { StateClient } from "../enums/state-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
  // lister toutes les propriétés avec des valeurs par défaut
  state !: StateClient;
  tva !: number;
  name !: string;
  totalCaHt !: number;
  comment !: string;
  id !: number;
  //  ! pour dire que  pas de valeurs pas défault

  // ici le constructor
  // en paramètre le ? veut dire que le paramètre est optionnel
// partial veut dire que l'objet passé en paramètre peut être partiel
  constructor(obj?: Partial<Client>){
  if(obj){
  Object.assign(this, obj);

  }


}

}

// new Order() => créer un nouvel objet Order
