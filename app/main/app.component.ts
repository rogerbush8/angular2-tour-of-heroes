import { Component} from 'angular2/core';
import { HeroService } from '../hero/hero.service';
import { HeroesComponent } from '../hero/heroes.component';
import { HeroDetailComponent } from '../hero/hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component ({
  selector: 'my-app',
  templateUrl: "app/main/app.component.html",
  styleUrls: ['app/main/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]
})


@RouteConfig ([
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent,
        useAsDefault: true },
    { path: '/heroes', name: 'Heroes', component: HeroesComponent },
    { path: '/detail/:id', name: 'HeroDetail',
        component: HeroDetailComponent }
])

export class AppComponent {
  title = 'Tour of Heroes';
}
