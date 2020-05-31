import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  panelOpenState = false;
  titleColor = "blue";
  myMovies = []

  constructor( private movieService:MoviesService) { }

  ngOnInit(): void {

    this.myMovies = this.movieService.getMovies()
    console.log(this.myMovies)

  }

}
