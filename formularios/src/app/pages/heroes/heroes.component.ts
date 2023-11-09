import { Component} from '@angular/core';
import { GuardsCheckStart } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
constructor(){


  guardar(){
    console.log('disparar');
  }
}
}
