import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {

  constructor() { }

    pc_ps_Comp = false;
    pc_xb_Comp = false;
    ps_xb_Comp = false;

  ngOnInit() {
  }

}
