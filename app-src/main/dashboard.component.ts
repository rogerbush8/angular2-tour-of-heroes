import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
    selector: 'my-dashboard',
    /*
       moduleId: module.id, <= this will allow a component file relative
       path in templateUrl.  Only works for commonjs format currently
       (tsconfig.json:module) which is currently system(js).  systemjs
       is a WIP
    */
    templateUrl: 'app/main/dashboard.component.html',
    styleUrls: ['app/main/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero [] = [];

    constructor (private _router: Router, 
        private _heroService: HeroService) { }

    ngOnInit () {
        this._heroService.getHeroes ()
            .then (heroes => this.heroes = heroes.slice (1,5));
    }
  
    gotoDetail (hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate (link);
    }
}