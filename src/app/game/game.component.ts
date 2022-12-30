import { compileDeclareDirectiveFromMetadata } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})


export class GameComponent implements OnInit {
  imageUrls1 = ['/assets/word1/image1.jpg', '/assets/word1/image2.jpg'];
  imageUrls2 = ['/assets/word1/image3.jpg', '/assets/word1/image5.jpg'];


  @HostListener('contextmenu', ['$event'])
onRightClick(event: any) {
  event.preventDefault();
}

@HostListener('document:keydown', ['$event'])
handleKeyboardEvent(e: KeyboardEvent) {
    if (e.key === 'F12') {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key === "C") {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
        return false;
    }
    if (e.ctrlKey && e.key == "U") {
        return false;
    }
    return true;
}


  currentWord= "";
  userGuess = '';
  message: string = '';

  numberOfTries = 0;

  constructor() {
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
  }

  ngOnInit(): void {}

  // checkAnswer($event: KeyboardEvent) {
  //   if ($event.key === 'Enter') {
  //     this.checkGuess();
      
  //   }
  // }

  checkGuess() {
    if (this.userGuess.toLowerCase() === this.currentWord.toLowerCase()) {
      // this.message = 'Correct!';
      console.log('Correct');
    } else {
      // this.message = 'Incorrect. Try again.';
      console.log('Incorrect. Try again.');
    }

  }
}
