import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  watchList: Movie[] = [];

  constructor(private moviesDataService: MoviesDataService) { }

  ngOnInit(): void {
    this.watchList = this.moviesDataService.getWatchList();
  }

}
