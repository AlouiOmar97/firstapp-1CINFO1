import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title: string = '1CINFO1';
  
  hello(): void {
   /* t
    if(t){
      var t
    }*/
    let list = [4, 5, 6];
    for (let i in list) {
    console.log(i);} 
    for (let i of list) {
    console.log(i);}
  }
}
