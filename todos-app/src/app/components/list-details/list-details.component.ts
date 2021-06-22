import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css'],
})
export class ListDetailsComponent implements OnInit {
  constructor(private router: Router) {}
  chosenList = {
    Caption: 'Shopping',
    Description: 'Things to buy on our next stop to the supermarket',
    Icon: 'shopping_cart',
    Color: 'pink',
    Items: ['Tomatos', 'Milk', 'Bread', 'Sugar'],
  }

  ngOnInit(): void {}
  createNewList(): void {
    this.router.navigate(['lists', 'id', 'edit'])
  }
  EditList(): void {
    this.router.navigate(['lists', 'id', 'edit'])
  }
  DeleteList(): void {
    //delete
  }
  addItem(newItem: string): void {
    this.chosenList.Items.push(newItem)
  }
}
