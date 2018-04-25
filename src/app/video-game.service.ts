import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Videogame } from './videogame';

@Injectable()
export class VideoGameService {

  constructor(private _http: Http) { }
  // Define URL to make API Requests
  private _getUrl = "http://localhost:3000/api/video_games/";

  getGames(){
  return this._http.get(this._getUrl).map(response => response.json());
}

getGame(videogameID){
  return this._http.get(this._getUrl+videogameID).map(response => response.json());
}
}
