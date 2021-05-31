import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //data-for all the entire app
  currentQuestion: Question = {
    caption: 'Which email service is owned by Microsoft?',
    answers: ['Gmail', 'Google', 'Hotmail', 'Firefox'],
    correctAnswer: 2,
    userAnswer: 0,
  }
  questions: Question[] = [
    {
      caption: 'Which email service is owned by Microsoft?',
      answers: ['Gmail', 'Google', 'Hotmail', 'Firefox'],
      correctAnswer: 2,
      userAnswer: 0,
    },
    {
      caption: 'What is often seen as the smallest unit of memory?',
      answers: ['Kilobyte', 'Byte', 'Microbyte', 'Megabyte'],
      correctAnswer: 0,
      userAnswer: 0,
    },
    {
      caption: 'What year was the very first model of the iPhone released?',
      answers: ['2005', '2007', '2010', '2008'],
      correctAnswer: 1,
      userAnswer: 0,
    },
    {
      caption:
        'The current richest man in the world Jeff Bezos is CEO and President of which online retailer?',
      answers: ['Amazon', 'Google', 'Twitter', 'Facebook'],
      correctAnswer: 2,
      userAnswer: 0,
    },
  ]
  isCorrect: boolean[] = []
  score: number = 0
  gameIsOver: boolean = false
  questionIndex: number = 0
  historyArray: Question[] = []
  //methods-all the methods required for the entire app
  setCurrentQuestion() {}
  moveToTheNextQuestion() {}
  isOver() {
    if (this.questionIndex == 3) {
      this.gameIsOver = true
    } else {
      this.gameIsOver = false
    }
  }

  selectOption(value: string) {
    this.historyArray.push(this.currentQuestion)
    this.isOver()
    this.questionIndex++
    if (this.gameIsOver === false) {
      //pass to next question
      this.currentQuestion = this.questions[this.questionIndex]
    } else {
      //game is over
    }
  }
  answerIsCorrect(value: boolean) {
    this.isCorrect.push(value)
  }
  userScore(value: number) {
    this.score = value
  }
}

export interface Question {
  caption: string
  answers: string[]
  correctAnswer: number
  userAnswer: number
}
