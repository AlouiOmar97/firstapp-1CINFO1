import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  id=0
  residence!: Residence
  listResidences:Residence[]=[
  {id:1,"name": "El fel","address":"Borj Cedria",
  "image":"../../assets/images/R1.jpg", status: "Disponible", "showAddress": false},
  {id:2,"name": "El yasmine",
  "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
  "Disponible", "showAddress": false },
  {id:3,"name": "El Arij",
  "address":"Rades","image":"../../assets/images/R3.jpg", status:
  "Vendu", "showAddress": false},
  {id:4,"name": "El Anber","address":"inconnu",
  "image":"../../assets/images/R4.jpg", status: "En Construction", "showAddress": true}
  ];
  constructor(private activatedRoute: ActivatedRoute, private readonly router: Router){}

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.params['id']
    this.residence = this.listResidences.find((element) => element.id ==  this.id)!;

  }

  returnToList(){
    this.router.navigateByUrl('residence')
  }
}
