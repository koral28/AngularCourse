import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, Subject } from 'rxjs'

//singelton in all app because it provideIn 'root'
@Injectable({
  providedIn: 'root',
})

//busniess logic-components use it and separtion-di and providers
export class CountService {
  //counterSubject cant be public!! only private-if it was public everybody can tell about changes!
  // functions:
  // 1. this.counterSubject.next(); DO THE CHANGE-RAISE THE EVENT
  // 2.this.counterSubject.subscribe();
  // 2.this.counterSubject.complete();
  // 2.this.counterSubject.error({});

  //Subject-doesnt!!! informed the new joiners about current value
  //private counterSubject = new Subject<number>()

  //always initial with value
  //can recognize who come to subscribe-and tell him about cuurent value
  private counterSubject = new BehaviorSubject<number>(0)

  //when i put this in private-nobody can touch this
  //this is how we show it to the world
  //observable its a minimize Subject
  //observable-only for watch! cant do next with this!
  //observable-has subscribe-doesnt have next!
  //observable-stream of data which inside it all the times arrived numbers
  get counter$(): Observable<number> {
    return this.counterSubject.asObservable()
  }

  //nobody get this directly-cause they ask from the subject to be notice about changes
  //we done need this anymore cause the BehaviorSubject holds the last value
  //private counterValue: number = 0

  constructor() {}
  plus() {
    //we done need this anymore cause the BehaviorSubject holds the last value
    //this.counterValue++

    //like emit-throw evet to the world
    this.counterSubject.next(this.counterSubject.value + 1)
  }
  minus() {
    this.counterSubject.next(this.counterSubject.value - 1)
  }
}
