import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 msg : string = "Hello"
 text: string = ""
 x: boolean = true
  getA(){
    return 10
  }

  fillText(){
    this.text= "This is a new paragraph"
  }

}
