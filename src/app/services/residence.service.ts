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

  getResidenceById(id: string): Observable<Residence>{
    return this.http.get<Residence>(this.apiURL+id)
  }

  createResidence(residence: Residence): Observable<Residence>{
    return this.http.post<Residence>(this.apiURL, residence)
  }

  updateResidence(id: string, residence: Residence): Observable<Residence>{
    return this.http.put<Residence>(this.apiURL+id, residence)
  }

  deleteResidence(id: string): Observable<Residence>{
    return this.http.delete<Residence>(this.apiURL+id)
  }
}
