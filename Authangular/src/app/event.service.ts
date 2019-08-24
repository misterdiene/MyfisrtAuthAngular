import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
/**
 * nous passons automatiquement pour importer un service d'evenement pour nous
 * passons à un appel HTTP à l'API BACKEND pour recuperer les données d'evenements
 * si l'evenement est ouvert et import d'abord le client HTTP puis on va créer
 * les propriétés afin de pointer sur l' API BACKEND avec l'url des evenements soulignés
 */
export class EventService {

  // tslint:disable-next-line: variable-name
  private _eventsUrl = 'http://localhost:8000/api/partenaire';
  // tslint:disable-next-line: variable-name
  private _specialEventsUrl = 'http://localhost:8000/api/user ';
  constructor(private http: HttpClient) { }

  /**
   * la premiere methode va etre get les evenements et dans le corps nous allons renvoyer ce point HTTP
   * point descendre type et sa va revoyer ce point HTTP puis descendre le tout le type
   * entre l'argument et l'url
   */

  getEvents() {
    return this.http.get<any>(this._eventsUrl);
  }

  /**
   * la deuxieme methode get evenement speciaux va renvoyer d'abord le point HTTP point get de tous type
   * entre l'argument et l'url va etre un point de soulignement des evenements speciaux
   * qui vont renvoyer un tableau d'evenement regulier et d'obtenir des ESpeciaux maintenant comme sa
   * sa renvoie les donnees de maniere observable on va events.component.ts et faire les importations
   * necessaires
   */

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl);
  }

}
