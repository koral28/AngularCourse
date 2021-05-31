import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Question } from 'src/app/app.component'

@Component({
  selector: 'app-current-question',
  templateUrl: './current-question.component.html',
  styleUrls: ['./current-question.component.css'],
})
export class CurrentQuestionComponent implements OnInit {
  isCorrectAnswer: boolean = false
  score: number = 0
  @Input() currentQuestion: Question = {
    caption: '',
    answers: ['', '', '', ''],
    correctAnswer: 0,
    userAnswer: 0,
  }
  ngOnInit(): void {}

  @Output()
  selection = new EventEmitter<string>()
  @Output()
  answerIsCorrect = new EventEmitter<boolean>()
  @Output()
  userScore = new EventEmitter<number>()

  selectOption(value: string, index: number) {
    if (index === this.currentQuestion.correctAnswer) {
      this.isCorrectAnswer = true
      this.currentQuestion.userAnswer = index
      if (
        this.currentQuestion.userAnswer === this.currentQuestion.correctAnswer
      ) {
        this.score++
      }
    } else {
      this.isCorrectAnswer = false
    }
    this.selection.emit(value)
    this.answerIsCorrect.emit(this.isCorrectAnswer)
    this.userScore.emit(this.score)
  }
}
