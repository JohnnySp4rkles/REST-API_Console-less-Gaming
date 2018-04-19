import { Component, OnInit } from '@angular/core';
import { VideoGameService} from './../video-game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-game-page',
  templateUrl: './video-game-page.component.html',
  styleUrls: ['./video-game-page.component.css']
})
export class VideoGamePageComponent implements OnInit {

  constructor(private _videoGameService:VideoGameService, private route:ActivatedRoute) {
    this.vgData = route.snapshot.params['id'];
  }
  vgData; // Singular Object!

  ngOnInit() {
    //console.log(videogameID);
    this._videoGameService.getGame(this.vgData).subscribe(response => this.vgData = response)
  }

}
