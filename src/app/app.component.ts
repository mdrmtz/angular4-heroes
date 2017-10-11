import { Component, Input, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroService } from './providers/hero.service';
import { Hero } from './providers/hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
}
