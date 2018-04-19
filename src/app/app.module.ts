import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ListingComponent } from './listing/listing.component';

import { VideoGameService } from './video-game.service';
import { FilterPipe } from './filter.pipe';
import { VideoGamePageComponent } from './video-game-page/video-game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    ListingComponent,
    FilterPipe,
    VideoGamePageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [VideoGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
