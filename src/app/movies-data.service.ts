import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  movies: Movie[] = [
    new Movie("Parasite", "2020", "Drama, Mystery", "assets/images/m1.jpg", 7.8),
    new Movie("Aliens", "1986", "Horror, SciFi", "assets/images/m8.jpg", 8.8),
    new Movie("Shawshank Redemption", "1994", "Drama", "assets/images/m5.jpg", 6.6),
    new Movie("The Joker", "2019", "Drama, Horror", "assets/images/m4.jpg", 5.6)
  ];

  watchList: Movie[] = [];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  getWatchList() : Movie[] {
    return this.watchList;
  }

  addToWatchList(movie: Movie) {
    this.watchList.push(movie);
  }



}
