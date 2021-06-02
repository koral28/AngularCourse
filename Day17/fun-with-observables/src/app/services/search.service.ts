import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})

//in realworld we get info from client in async way
//and we always return obsevable of array and not array
export class SearchService {
  search(str: string): Observable<string[]> {
    const arrResult = []
    for (let index = 0; index < 10; index++) {
      arrResult.push(str + (index + 1))
    }

    //of turn list to stream which include list inside it
    return of(arrResult)
  }

  constructor() {}
}
