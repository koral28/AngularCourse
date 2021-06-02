import { Component, OnInit } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { debounce, debounceTime, filter, switchMap } from 'rxjs/operators'
import { SearchService } from 'src/app/services/search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  private searchWordChanged = new Subject<string>()
  //we want to avoid using subscribe (cause we need to care about unsubscribe as well)
  //in html-async will do the subscribe and unsubscibe
  result$!: Observable<string[]>
  constructor(private searchService: SearchService) {}

  //each time is changes i want to know
  ngOnInit(): void {
    this.result$ = this.searchWordChanged.pipe(
      filter((x) => x.length > 2),
      //only after half second i will get the value in list
      //when ill finish it will presened-it sutible for typing
      debounceTime(500),
      //switch map swipe one observable with new observable (map return observable of observable here)
      //with switch map-if there are searches one after other it ignores the other
      switchMap((searchWord) => this.searchService.search(searchWord)),
    )
  }

  onValueChange(str: string) {
    this.searchWordChanged.next(str)
  }
}
