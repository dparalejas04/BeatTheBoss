import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  imageUrls1 = ['/assets/word1/image1.jpg', '/assets/word1/image2.jpg'];
  imageUrls2 = ['/assets/word1/image3.jpg', '/assets/word1/image5.jpg'];

  currentWord: any;
  userGuess = '';
  message: string = '';

  constructor() {}

  ngOnInit(): void {}

  checkAnswer($event: KeyboardEvent) {
    if ($event.key === 'Enter') {
      this.checkGuess();
    }
  }

  checkGuess() {
    if (this.userGuess.toLowerCase() === this.currentWord.word.toLowerCase()) {
      this.message = 'Correct!';
    } else {
      this.message = 'Incorrect. Try again.';
    }
  }
}
