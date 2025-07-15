import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from '../core/models/residence';
import { Router } from '@angular/router';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residence: Residence={
    id: "",
    name: "",
    address: "",
    status: "",
    image: "",
    showAddress: false
  }
  addResidenceForm!: FormGroup
  constructor(private router: Router, private residenceService: ResidenceService){}
  ngOnInit(){
    this.addResidenceForm= new FormGroup({
      name: new FormControl(this.residence.name, [Validators.required, Validators.minLength(3)]),
      address: new FormControl(this.residence.address, Validators.required),
      status: new FormControl(false),
      image: new FormControl("../../assets/images/R2.jpg"),
      showAddress: new FormControl(false)
    })
  }

  get address(){ return this.addResidenceForm.get('address')}

  addResidence(){
    console.log(this.addResidenceForm.value);
    this.residenceService.createResidence(this.addResidenceForm.value).subscribe(()=>{
      console.log("Residence added !");
      this.router.navigateByUrl('/residence')
    })
  }
}
