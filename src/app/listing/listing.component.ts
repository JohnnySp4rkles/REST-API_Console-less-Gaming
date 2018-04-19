import { Component, OnInit, Input } from '@angular/core';
import { VideoGameService} from './../video-game.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers:[VideoGameService]
})
export class ListingComponent implements OnInit {

  constructor(private _videoGameService:VideoGameService) { }
  @Input()  searchString:string;
  vgData=0;

  ngOnInit() {
    this._videoGameService.getGames().subscribe(response => this.vgData = response)
  }

  logIt(){
    console.log(this.vgData);
  }

}
