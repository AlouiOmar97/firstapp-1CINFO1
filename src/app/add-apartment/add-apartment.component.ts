import { Component } from '@angular/core';
import { Apartment } from '../core/models/apartment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartment: Apartment={
      apartNum:  0,
      floorNum:  0,
      surface:  0,
      terrace:  false, 
      surfaceterrace:  0,
      category:  "",
      ResidenceId:  0
    }
    addApartmentForm!:  FormGroup
    constructor(private router: Router){}
    ngOnInit(){
      this.addApartmentForm= new FormGroup({
        apartNum: new FormControl(this.apartment.apartNum, [Validators.required, Validators.min(1)]),
        floorNum: new FormControl(this.apartment.floorNum, Validators.required),
        surface: new FormControl(this.apartment.surface, Validators.required),
        terrace: new FormControl(this.apartment.terrace, Validators.required),
        surfaceterrace: new FormControl(this.apartment.surfaceterrace, Validators.required),
        category: new FormControl(this.apartment.category, Validators.required),
        ResidenceId: new FormControl(this.apartment.ResidenceId, Validators.required)
      })
    }
  
    get apartNum(){ return this.addApartmentForm.get('apartNum')}
    get floorNum(){ return this.addApartmentForm.get('floorNum')}
    get surface(){ return this.addApartmentForm.get('surface')}
    get terrace(){ return this.addApartmentForm.get('terrace')}
    get surfaceterrace(){ return this.addApartmentForm.get('surfaceterrace')}
    get category(){ return this.addApartmentForm.get('category')}
    get ResidenceId(){ return this.addApartmentForm.get('ResidenceId')}
  
    addApartment(){
      console.log(this.addApartmentForm.value);
     // this.router.navigateByUrl('/apartment')
    }
}
