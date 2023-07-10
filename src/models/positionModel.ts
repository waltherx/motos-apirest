import { Moto } from "./motoModel";


export interface Position {
  id: number;
  Date: string;
  Latitude: number;
  Longitude: number;
  moto : Moto;
}
