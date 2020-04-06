import { Component, OnInit } from '@angular/core';
import { Cinema } from '../shared/cinema.model';
import { CinemaService } from '../services/cinema.service';
import { Ville } from '../shared/ville.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

villes:Ville[];
NomVille:string;
cinemas:Cinema[];
  constructor(private http: HttpClient, private cinemaservice:CinemaService) { }

  ngOnInit() {
 this.cinemaservice.getVille().subscribe(res=>{
  this.villes=res as Ville[];
  console.log("liste des villes est "+ this.villes);

   },err=>{
  console.log("Erreur de recuperation des villes");
   })
  }


 onGetCinema(v : Ville){
   this.NomVille=v.nomVille
   this.cinemaservice.getCinema(this.NomVille).subscribe(
     res=>{    
         console.log("liste des cinemas est "+ this.cinemas);

      this.cinemas=res as Cinema[];
      this.cinemas.map(docs=>{
        for(let list in this.cinemas){
        list=docs.nomCinema;
        return list;
        }
      })

    },err=>{
   console.log("Erreur de recuperation des cinémas");
    })
  }
 



  
}
