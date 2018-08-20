import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor() {  }

  ngOnInit() {

  }
  name="helado fsfsdf";
  passwordConfirmation;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
