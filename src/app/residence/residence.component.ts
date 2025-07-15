import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  favoriteList: Residence[]=[]
  search: string=''
  listResidences:Residence[]=[
  {id:"1","name": "El fel","address":"Borj Cedria",
  "image":"../../assets/images/R1.jpg", status: "Disponible", "showAddress": false},
  {id:"2","name": "El yasmine",
  "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
  "Disponible", "showAddress": false },
  {id:"3","name": "El Arij",
  "address":"Rades","image":"../../assets/images/R3.jpg", status:
  "Vendu", "showAddress": false},
  {id:"4","name": "El Anber","address":"inconnu",
  "image":"../../assets/images/R4.jpg", status: "En Construction", "showAddress": true}
  ];

  constructor(private residenceSerivce: ResidenceService){}

  ngOnInit(){
    this.residenceSerivce.getAllResidences().subscribe((data)=>{
      this.listResidences = data
    })
  }

  deleteResidence(id: string){
    this.residenceSerivce.deleteResidence(id).subscribe(()=>{
      console.log("Residence Deleted !")
      this.residenceSerivce.getAllResidences().subscribe((data)=>{
      this.listResidences = data
    })
    })
  }


  showAddress(i: number){
  if(this.listResidences[i].address == "inconnu"){
    alert("inconnu")
  }
  this.listResidences[i].showAddress= !this.listResidences[i].showAddress
  }
  addToFavorite(residence: Residence){
    this.favoriteList.push(residence)
  }
}
