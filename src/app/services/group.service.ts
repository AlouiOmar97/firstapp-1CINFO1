import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../core/models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
apiURL= 'http://localhost:3000/group/'

  constructor(private http: HttpClient) { }

  getAllGroups(): Observable<Group[]>{
    return this.http.get<Group[]>(this.apiURL);
  }

  getGroupById(id: string): Observable<Group>{
    return this.http.get<Group>(this.apiURL+id)
  }

  createGroup(group: Group): Observable<Group>{
    return this.http.post<Group>(this.apiURL, group)
  }

  updateGroup(id: string, group: Group): Observable<Group>{
    return this.http.put<Group>(this.apiURL+id, group)
  }

  deleteGroup(id: string): Observable<Group>{
    return this.http.delete<Group>(this.apiURL+id)
  }
}
