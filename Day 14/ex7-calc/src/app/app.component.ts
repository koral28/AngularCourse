import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //data
  a: number = 0
  b: number = 0
  addition: number = 0
  substraction: number = 0
  multiply: number = 0
  flag: boolean = false
  results: number[] = []

  //methods
  setA(value: string) {
    this.a = Number(value)
    this.addition = this.a + this.b
    this.substraction = this.a - this.b
    this.multiply = this.a * this.b
  }
  setB(value: string) {
    this.b = Number(value)
    this.addition = this.a + this.b
    this.substraction = this.a - this.b
    this.multiply = this.a * this.b
  }

  showResults() {
    this.flag = true
    this.results = [this.addition, this.substraction, this.multiply]
  }
}
