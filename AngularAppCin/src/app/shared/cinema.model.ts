import { Salle } from './salle.model';
import { Ville } from './ville.model';

export class Cinema{
    _id:number;
    nomCinema:string;
    longitudeCinema:number;
    lattitudeCinema:number;
    altitudeCinema:number;
    nombreSalles:number;
    salles:Salle[];
    ville:Ville;
}