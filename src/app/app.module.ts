import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    WatchListComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
