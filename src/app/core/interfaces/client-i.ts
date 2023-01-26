import { StateClient } from "../enums/state-client";

export interface ClientI {
  // lister toutes les props
  state: StateClient;
  tva: number;
  name: string;
  totalCaHt: number;
  comment: string;
  id: number; // généré par json-server
}

// role interface : définir des types pour chaque propriété
