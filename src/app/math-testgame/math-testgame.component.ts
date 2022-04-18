import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-math-testgame',
  templateUrl: './math-testgame.component.html',
  styleUrls: ['./math-testgame.component.css']
})
export class MathTestgameComponent implements OnInit {

  number1: number = 1;
  number2: number = 1;
  result: string = 'FAIL';
  @ViewChild('userInput') userInput: any;
  showBanner = false;
  goNext: boolean = false;
  counter: number = 0;
  timeA: any;
  timeB: any;
  averageTimeDisplay: any;
  eachTimeDisplay: any;
  totalTime: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.timeA = performance.now();
    this.createPuzzle();
  }

  checkUserInput(userInput: any): string {
    if (userInput === this.number1 + this.number2) {
      this.result = 'PASS';
      this.goNext = true;
      this.timeB = performance.now();
      this.totalTime = (this.totalTime + Math.floor((this.timeB - this.timeA)/1000)) / this.counter;
      this.eachTimeDisplay = "You took " + Math.floor((this.timeB - this.timeA)/1000) + " seconds for this puzzle."
      this.averageTimeDisplay = "Average time taken is " + this.totalTime + " seconds."
    } else {
      this.result = 'FAIL';
      this.goNext = false;
    }
    this.showBanner = true;
    return this.result;
  }

  nextPuzzle() {
    this.timeA = performance.now();
    this.clearFields();
    this.createPuzzle();
  }

  private createPuzzle() {
    this.counter++;
    this.number1 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    this.number2 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  }

  private clearFields() {
    this.averageTimeDisplay = '';
    this.eachTimeDisplay = '';
    this.showBanner = false;
    this.result = 'FAIL';
    this.goNext = false;
    this.userInput.nativeElement.value = ' ';
  }


}
