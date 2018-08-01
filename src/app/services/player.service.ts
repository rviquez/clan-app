import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService extends DataService{

  constructor(http: Http) {
    super('https://crash-royale-api.herokuapp.com/api/player/', http);
   }
}
