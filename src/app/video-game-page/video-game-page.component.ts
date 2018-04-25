import { Component, OnInit } from '@angular/core';
import { VideoGameService} from './../video-game.service';
import { ActivatedRoute } from '@angular/router';
import {Videogame } from '../videogame';

@Component({
  selector: 'app-video-game-page',
  templateUrl: './video-game-page.component.html',
  styleUrls: ['./video-game-page.component.css']
})
export class VideoGamePageComponent implements OnInit {

  constructor(private _videoGameService:VideoGameService, private route:ActivatedRoute) {
    this.url = route.snapshot.params['id'];
  }
  vgData:Videogame = new Videogame(); // Singular Object!
  url:string;

  ngOnInit() {
    this._videoGameService.getGame(this.url).subscribe(response => this.vgData = response)
  }

}
