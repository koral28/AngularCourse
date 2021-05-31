import { Component, Input, OnInit } from '@angular/core'
import { Question } from 'src/app/app.component'

@Component({
  selector: 'app-history-component',
  templateUrl: './history-component.component.html',
  styleUrls: ['./history-component.component.css'],
})
export class HistoryComponentComponent implements OnInit {
  @Input() currentQuestion: Question = {
    caption: '',
    answers: ['', '', '', ''],
    correctAnswer: 0,
    userAnswer: 0,
  }
  @Input() isCorrect: boolean[] = []
  @Input() historyArray: Question[] = []

  constructor() {}
  ngOnInit(): void {}
}
