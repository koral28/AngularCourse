import { Component, OnInit } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Joke } from '../../models/joke.model'
import { DataService } from '../../services/data.service'
import { filter, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  joke$!: Observable<Joke>
  //the id which i want to show
  private id$ = new BehaviorSubject<string>('')

  constructor(private dataService: DataService) {}

  //connect joke$ to id$
  ngOnInit(): void {
    //when the inner func return promise/observabe of object
    //with switchmap we downcast it to observable of value
    this.joke$ = this.id$.pipe(
      filter((id) => id != ''),
      switchMap((id) => this.dataService.getJoke(id, 0)),
    )
  }

  //ask the BehaviorSubject to give next id-the one which the user want to see
  search(id: string) {
    this.id$.next(id)
  }
}
