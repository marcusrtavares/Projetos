"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_1 = require("./hero");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = [
            new hero_1.Hero(1, 'Windstorm', 'Fire'),
            new hero_1.Hero(13, 'Bombasto', 'Wind'),
            new hero_1.Hero(15, 'Magneta', 'Water'),
            new hero_1.Hero(20, 'Tornado', 'Earth'),
            new hero_1.Hero(25, 'SM', 'Nothing'),
        ];
        this.myHero = this.heroes[0];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1>\n  <h2>Favorite: {{myHero.name}}</h2>\n  <p>Heroes:</p>\n  <ul>\n    <li *ngFor=\"let hero of heroes\">\n      {{ hero.name }}\n    </li>\n  </ul>\n\n  <table border=\"1\">\n    <tr *ngFor=\"let h of heroes\">\n\n      <td >{{h.id}}</td>\n      <td >{{h.name}}</td>\n      <td >{{h.element}}</td>\n    </tr>\n  </table>\n\n  <p *ngIf=\"heroes.length > 3\">There are many heroes!</p>\n\n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map