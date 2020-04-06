import { Injectable } from '@angular/core';
import { Ville } from '../shared/ville.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CinemaService {
villes:Ville[];
 baseURL="http://localhost:3000";

  constructor(private http: HttpClient) { }


  getVille(){
 return  this.http.get(this.baseURL+"/villes");
  
  }
getCinema(v : string){
  console.log("url=="+this.baseURL+"/villes/:"+v)
  return this.http.get(this.baseURL+"/villes/"+v);
}
}