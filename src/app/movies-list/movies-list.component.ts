import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private moviesDataService: MoviesDataService) { }

  ngOnInit(): void {
    this.movies = this.moviesDataService.getMovies();
  }

}
