import {Component, OnInit} from '@angular/core';
import {JokeService} from "../../services/joke.service";
import {Joke} from "../../models/joke.model";

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {

  // @ts-ignore
  public joke: Joke;

  constructor(private jokeService: JokeService) {
  }

  ngOnInit(): void {
    this.jokeService.getJoke().subscribe(joke => {
      this.joke = joke;
    });
  }
}
