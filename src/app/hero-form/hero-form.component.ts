import { Component } from '@angular/core';

import { Hero }    from './hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  arregloHeroes: Hero[] = [new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet'),new Hero(19, 'mr IQ', this.powers[0], 'Overstreet')];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

//  submitted = false;



  newHero() {
    this.model = new Hero(42, '', '');
  }
  addHero(hero:Hero) {
      this.arregloHeroes.push(new Hero(this.arregloHeroes.length+1, hero.name, hero.power, hero.alterEgo));

  }

}
