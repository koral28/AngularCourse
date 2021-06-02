import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { CountService } from 'src/app/services/count.service'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counterValue: number = 0
  constructor(private countServiece: CountService) {}

  ngOnInit(): void {
    //NOT GOOD-only one time happened
    // this.counterValue = this.countServiece.counterValue

    //ask to be informed each time the value is changes
    this.countServiece.counter$.subscribe((newCountValue) => {
      console.log('value changed', newCountValue)
      this.counterValue = newCountValue
    })
  }

  plus() {
    this.countServiece.plus()
  }
  minus() {
    this.countServiece.minus()
  }
}
