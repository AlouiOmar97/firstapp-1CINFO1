import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from '../core/models/residence';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residence: Residence={
    id: 0,
    name: "",
    address: "",
    status: "",
    image: "",
    showAddress: false
  }
  addResidenceForm!: FormGroup
  constructor(private router: Router){}
  ngOnInit(){
    this.addResidenceForm= new FormGroup({
      name: new FormControl(this.residence.name, [Validators.required, Validators.minLength(3)]),
      address: new FormControl(this.residence.address, Validators.required)
    })
  }

  get address(){ return this.addResidenceForm.get('address')}

  addResidence(){
    console.log(this.addResidenceForm.value);
    this.router.navigateByUrl('/residence')
  }
}
