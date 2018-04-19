import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent} from './listing/listing.component';
import { VideoGamePageComponent} from './video-game-page/video-game-page.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

const APP_ROUTES:Routes = [
  {path:'', component: SearchbarComponent},
  {path:'video_games/:id', component: VideoGamePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const APP_ROUTES_PROVIDER = [
//   provideRouter(APP_ROUTES);
// ]
