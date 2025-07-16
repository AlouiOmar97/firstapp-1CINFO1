import { Component } from '@angular/core';
import { Match } from '../core/models/match';
import { GroupService } from '../services/group.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-matchs',
  templateUrl: './list-matchs.component.html',
  styleUrls: ['./list-matchs.component.css']
})
export class ListMatchsComponent {
  matchsList!: Match[]
  id=""
  constructor(private activateRoute: ActivatedRoute,private groupService: GroupService){}
  ngOnInit(){
    this.id = this.activateRoute.snapshot.params['id']
    this.groupService.getGroupById(this.id).subscribe((data)=>{
      this.matchsList = data.matchs
    })
  }
}
