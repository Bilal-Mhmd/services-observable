import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input()
  movie: Movie; 

  constructor(private moviesDataService: MoviesDataService) { }

  ngOnInit(): void {
  }

  addToWatchList() {
    this.moviesDataService.addToWatchList(this.movie);
  }

}
