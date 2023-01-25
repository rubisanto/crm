import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI {
  // lister toutes les propriétés avec des valeurs par défaut
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  //  ! pour dire que  pas de valeurs pas défault
  typePresta!: string;
  client !: string;
  comment!: string;
  id!: number;
  // ici le constructor
  // en paramètre le ? veut dire que le paramètre est optionnel
// partial veut dire que l'objet passé en paramètre peut être partiel
  constructor(obj?: Partial<Order>){
  if(obj){
  Object.assign(this, obj);

  }


}

}

// new Order() => créer un nouvel objet Order
