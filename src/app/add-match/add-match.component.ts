import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../services/group.service';
import { Group } from '../core/models/group';
import { Match } from '../core/models/match';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent {
  match: Match={
      id: "",
      label: "",
      date: "",
      teams: {
        team1: "",
        team2: ""
      },
      status: ""
    }
    addGroupForm!: FormGroup
    group!: Group
    id=""
    constructor(private activatedRoute: ActivatedRoute,private router: Router, private groupService: GroupService){}
    ngOnInit(){
      this.id = this.activatedRoute.snapshot.params['id']
      this.groupService.getGroupById(this.id).subscribe((data)=>{
        this.group = data
      })
      this.addGroupForm= new FormGroup({
        label: new FormControl(this.match.label, [Validators.required, Validators.minLength(3)]),
        date: new FormControl(this.match.date, Validators.required),
        status: new FormControl("En cours"),
        team1: new FormControl(this.match.teams.team1, [Validators.required, Validators.pattern('^[A-Z].*')]),
        team2: new FormControl(this.match.teams.team2, [Validators.required, Validators.pattern('^[A-Z].*')])
      })
    }
  
    get label(){ return this.addGroupForm.get('label')}
    get date(){ return this.addGroupForm.get('date')}
    get team1(){ return this.addGroupForm.get('team1')}
    get team2(){ return this.addGroupForm.get('team2')}
  
    addGroup(){
      console.log(this.addGroupForm.value);
      this.group.matchs.push(this.addGroupForm.value)
      this.groupService.updateGroup(this.id, this.group).subscribe(()=>{
        console.log("Match added !");
        this.router.navigateByUrl('/group')
      })
    }
}
