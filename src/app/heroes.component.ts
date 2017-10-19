import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
})
export class HeroesComponent {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeroes().then((heroes) => this.heroes = heroes);
  }

  onHeroSelected(hero: Hero) {
    this.selectedHero = hero;
  }
}

