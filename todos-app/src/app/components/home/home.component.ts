import { ValueTransformer } from '@angular/compiler/src/util'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { DataService } from 'src/app/services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  numberOfLists$!: Promise<Number>
  todoItems$!: Promise<Number[]>
  countItems: number = 0
  constructor(private router: Router, private data: DataService) {}

  ngOnInit(): void {
    this.numberOfLists$ = this.data.getNumberOfLists()
    this.data.getNumberOfItems().then((data) =>
      data.forEach((element) => {
        this.countItems += +element
      }),
    )
  }

  createNewList(): void {
    this.router.navigate(['lists', 'id', 'edit'])
  }
  viewLists(): void {
    this.router.navigate(['lists'])
  }
  viewItems(): void {
    this.router.navigate(['items'])
  }
}
