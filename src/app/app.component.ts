import { Component } from '@angular/core';
import { Guest } from "./models/svecias";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public guest: Guest;

 public friends: string [] = [
   'Rasa', 
   'Ksenija', 
   'Saulius', 
   'Viktorija'
 ]

    constructor(){
      this.guest = new Guest('Evelina');
    }

    public removeFriend(index:number): void {
      this.friends.splice(index,1)
    }
    
}
