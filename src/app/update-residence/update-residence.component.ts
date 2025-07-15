import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.css']
})
export class UpdateResidenceComponent {
residence: Residence={
    id: "",
    name: "",
    address: "",
    status: "",
    image: "",
    showAddress: false
  }
  id!: string
  updateResidenceForm!: FormGroup
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private residenceService: ResidenceService){}
  ngOnInit(){
    this.id= this.activatedRoute.snapshot.params['id']
    this.residenceService.getResidenceById(this.id).subscribe((data)=>{
      this.residence= data
      this.updateResidenceForm= new FormGroup({
        name: new FormControl(this.residence.name, [Validators.required, Validators.minLength(3)]),
        address: new FormControl(this.residence.address, Validators.required),
        status: new FormControl(this.residence.status),
        image: new FormControl(this.residence.image),
        showAddress: new FormControl(this.residence.showAddress)
      })
    })
  }

  get address(){ return this.updateResidenceForm.get('updateress')}

  updateResidence(){
    console.log(this.updateResidenceForm.value);
    this.residenceService.updateResidence(this.id,this.updateResidenceForm.value).subscribe(()=>{
      console.log("Residence updated !");
      this.router.navigateByUrl('/residence')
    })
  }
}
