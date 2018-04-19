import { Component, OnInit, Input } from '@angular/core';
import { VideoGameService } from './../video-game.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [VideoGameService]
})
export class ListingComponent implements OnInit {

  constructor(private _videoGameService: VideoGameService) { }
  @Input() searchString: string;
  @Input() pc_ps_Comp: boolean;
  @Input() pc_xb_Comp: boolean;
  @Input() ps_xb_Comp: boolean;
  vgData = 0;

  // pc_ps_Comp = false;
  // pc_xb_Comp = false;
  // ps_xb_Comp = false;

  ngOnInit() {
    this._videoGameService.getGames().subscribe(response => this.vgData = response)
  }

  logIt() {
    console.log(this.vgData);
  }

}
