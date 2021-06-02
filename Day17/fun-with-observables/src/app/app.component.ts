import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map, filter } from 'rxjs/operators'
import { CountService } from './services/count.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showHide: boolean = false

  currentCount$!: Observable<number>
  //currentCount: number = 0

  constructor(private countServiece: CountService) {
    // this.countServiece.counter$.subscribe((newValue) => {
    //   this.currentCount = newValue
    // })
  }
  ngOnInit(): void {
    //send pipe to the counter in the service
    // this.currentCount$ = this.countServiece.counter$
    //pipe adds pipes before subscribe to the event-pass the event throw the series of values/operations before it get to me
    //rxjs pipe!!
    this.currentCount$ = this.countServiece.counter$.pipe(
      map((n) => n * 2),
      filter((n) => n % 3 === 0),
    )
  }
}
