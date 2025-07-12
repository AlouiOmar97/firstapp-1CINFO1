import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from '../core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  apiURL= 'http://localhost:3000/residence/'

  constructor(private http: HttpClient) { }

  getAllResidences(): Observable<Residence[]>{
    return this.http.get<Residence[]>(this.apiURL);
  }
}
