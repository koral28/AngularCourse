import { Question } from './question'

export class Exam {
  private questions: Question[] = []

  addQuestion(question: Question): void {
    this.questions.push(question)
  }

  print(): void {
    for (let question of this.questions) {
      console.log(question.caption)
      for (let answer of question.answers) {
        console.log(answer)
      }
    }
  }

  grade(answers: number[]): number {
    let sum = 0

    for (let answer of answers) {
      for (let question of this.questions) {
        if (answer === question.correctIndex) {
          sum++
          break
        }
      }
    }
    return (sum / this.questions.length) * 100
  }
}
