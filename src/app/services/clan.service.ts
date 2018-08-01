import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ClanService extends DataService{

  constructor(http: Http) {
    super('https://crash-royale-api.herokuapp.com/api/clan/', http);
  }
}
