import { StateOrder } from "../enums/state-order";

export interface OrderI {
  // lister toutes les props
  tjmHt: number;
  nbJours: number;
  tva: number;
  state: StateOrder;
  typePresta: string;
  client: string;
  comment: string;
  id: number; // généré par json-server
}

// role interface : définir des types pour chaque propriété
