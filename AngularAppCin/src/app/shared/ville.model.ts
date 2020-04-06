import { Cinema } from './cinema.model';

export class Ville{
    _id:number;
    nomVille:string;
    longitudeVille:number;
    lattitudeVille:number;
    altitudeVille:number;
    cinemas:Cinema;
}