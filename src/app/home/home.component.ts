import { Component } from '@angular/core';
import { GroupService } from '../services/group.service';
import { Group } from '../core/models/group';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 msg : string = "Hello"
 text: string = ""
 x: boolean = true
  constructor(private groupService: GroupService){}
  listGroup!: Group[]
  ngOnInit(){
    this.groupService.getAllGroups().subscribe((data)=>{
      this.listGroup = data
    })
  }

  getA(){
    return 10
  }

  fillText(){
    this.text= "This is a new paragraph"
  }

  addMatchToGroup(id: string){
    
  }

}
