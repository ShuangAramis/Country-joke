import {Component, Input} from '@angular/core';
import {Joke} from "../../models/joke.model";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent {

  // @ts-ignore
  @Input() joke: Joke;
}
