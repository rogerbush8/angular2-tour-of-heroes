import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  inputs: ['hero'],
  templateUrl: 'app/hero/hero-detail.component.html',
  styleUrls: ['app/hero/hero-detail.component.css']
})

export class HeroDetailComponent {
    constructor (private _heroService: HeroService,
        private _routeParams: RouteParams) {}

    hero: Hero;

    ngOnInit () {
        let id = +this._routeParams.get ('id');
        this._heroService.getHero (id).then (hero => this.hero = hero);
    }

    goBack () {
        window.history.back ();
    }
}
