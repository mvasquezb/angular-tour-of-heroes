import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  ngOnInit() {
    this.heroService.getHeroes().then((heroes) => this.heroes = heroes);
  }

  onHeroSelected(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name)
      .then((hero) => {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  }
}

