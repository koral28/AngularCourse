import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-quiz-done',
  templateUrl: './quiz-done.component.html',
  styleUrls: ['./quiz-done.component.css'],
})
export class QuizDoneComponent implements OnInit {
  @Input() score: number = 0

  constructor() {}

  ngOnInit(): void {}
}
