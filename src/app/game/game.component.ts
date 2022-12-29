import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  // words: Word[] = [
  //   {
  //     word: 'delighted',
  //     image1: 'image1.jpg',
  //     image2: 'image2.jpg',
  //     image3: 'image3.jpg',
  //     image4: 'image4.jpg',
  //   },
  // ];

  // images = [image1, image2, image3, image4];
  // imageUrls = ['/assets/word1/image1.jpg', '/assets/word1/image2.jpg', '/assets/word1/image3.jpg', '/assets/word1/image4.jpg'];
  imageUrls1 = ['/assets/word1/image1.jpg', '/assets/word1/image2.jpg'];
  imageUrls2 = ['/assets/word1/image3.jpg', '/assets/word1/image4.jpg'];

  currentWord: any;
  userGuess = '';
  message: string = '';

  constructor() {}

  ngOnInit(): void {}

  // nextWord() {
  //   this.currentWord = this.words.shift();
  //   this.userGuess = '';
  // }

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

  // changeStyle($event){
  //   this.color = $event.type == 'mouseover' ? 'lightblue' : 'blue';
  // }
}

// export interface Word {
//   word: string;
//   image1: string;
//   image2: string;
//   image3: string;
//   image4: string;
// }
