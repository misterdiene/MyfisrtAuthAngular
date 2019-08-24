import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

/**
 * La méthode constructor n’a absolument rien à voir avec Angular.
 * Il s’agit d’une méthode liée aux Classes TypeScript (plus exactement ES6).
 * Vous l’aurez compris, le framework Angular n’a absolument aucun contrôle
 * sur ce constructor et son appel Les propriétés @Input seront tout le temps
 * initialisées dans ngOnInit, contrairement à l’intérieur du constructor
 * où elle ne seront pas encore définies.
 * Le seul intérêt d’utiliser le constructor dans vos classes est lors de l’injection de dépendance.
 *  le constructor est appelé par le moteur JavaScript. Par conséquent,
 * il pourra dire au framework Angular de quelles dépendances, il va avoir besoin.
 */

  events = [];

  // tslint:disable-next-line: variable-name
  constructor(private _eventService: EventService) { }
  /**
   * On m’a parlé de lifecycle hooks concernant ngOnInit, mais j’ai pas bien compris
   * une ngOnInit()méthode pour gérer les tâches d'initialisation supplémentaires.
   * La première chose à saisir se situe dans le fait que le framework
   * Angular va gérer ses composants par cycles (lifecycle)
   * Le cycle de vie ou lifecycle d’un composant Angular peut se résumer en plusieurs étapes :
   *
   * 1 - Le composant est créé
   * 2 - Les enfants de ce composant sont créés
   * 3 - Angular va checker les éventuels changements de propriétés
   * 4 - Le composant est détruit
   *
   * Vous l’aurez compris ngOnInit fait partie de cette gestion de composant par Angular.
   * C’est donc une function proposée par le framework Angular.
   * Cette function fait également partie intégrante du lifecycle hook d’un composant.
   * Elle est appelée quand le composant est …. initié (ouah le suspense). Plus précisément,
   * quand les propriétés sont affichées et que les propriétés Input sont initiés.
   */

  ngOnInit() {
    this._eventService.getEvents()
    .subscribe(
      res => this.events = res,
      err => console.log(err)
    );
  }

}
