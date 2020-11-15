import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
  {path: 'movies', component: MoviesListComponent},
  {path: 'watchlist', component: WatchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
