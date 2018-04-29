import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {

  constructor(private titleService: Title) {
   }

    pc_ps_Comp = false;
    pc_xb_Comp = false;
    ps_xb_Comp = false;

  ngOnInit() {
    this.titleService.setTitle("Home - Console-less Gaming");
  }

}
