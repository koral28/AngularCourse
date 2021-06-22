import { Component, OnInit } from '@angular/core'
import { DataService } from 'src/app/services/data.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items$!: Promise<string[][]>
  constructor(private data: DataService) {}

  // items: string[] = []

  ngOnInit(): void {
    this.items$ = this.data.getItemsOfList()
  }
}
