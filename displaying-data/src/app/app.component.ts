import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>Favorite: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
    </li>
  </ul>

  <table border="1">
    <tr *ngFor="let h of heroes">

      <td >{{h.id}}</td>
      <td >{{h.name}}</td>
      <td >{{h.element}}</td>
    </tr>
  </table>

  <p *ngIf="heroes.length > 3">There are many heroes!</p>

`
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm','Fire'),
    new Hero(13, 'Bombasto', 'Wind'),
    new Hero(15, 'Magneta', 'Water'),
    new Hero(20, 'Tornado', 'Earth'),
    new Hero(25, 'SM','Nothing'),
  ];
  myHero = this.heroes[0];
}
