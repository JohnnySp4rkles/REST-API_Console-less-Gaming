import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent} from './listing/listing.component';
import { VideoGamePageComponent} from './video-game-page/video-game-page.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent} from './contactus/contactus.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const APP_ROUTES:Routes = [
  {path:'', component: SearchbarComponent},
  {path:'video_games/:id', component: VideoGamePageComponent},
  {path:'about', component: AboutusComponent},
  {path:'contact', component: ContactusComponent},
  {path:'thankyou', component: ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const APP_ROUTES_PROVIDER = [
//   provideRouter(APP_ROUTES);
// ]
