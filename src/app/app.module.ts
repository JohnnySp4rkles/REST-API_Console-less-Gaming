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
import { PcpsCompatabilityPipe } from './pcps-compatability.pipe';
import { PcxbCompatabilityPipe } from './pcxb-compatability.pipe';
import { PsxbCompatabilityPipe } from './psxb-compatability.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    ListingComponent,
    FilterPipe,
    VideoGamePageComponent,
    PcpsCompatabilityPipe,
    PcxbCompatabilityPipe,
    PsxbCompatabilityPipe,
    NavbarComponent,
    AboutusComponent,
    ContactusComponent,
    ThankyouComponent
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
