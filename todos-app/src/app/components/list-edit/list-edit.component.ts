import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatIcon } from '@angular/material/icon'
import { Router } from '@angular/router'
import { List } from 'src/app/models/list.model'
import { DataService } from 'src/app/services/data.service'

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css'],
})
export class ListEditComponent implements OnInit {
  myForm!: FormGroup
  food!: object
  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      Caption: ['', [Validators.required]],
      Description: ['', [Validators.required, Validators.minLength(3)]],
      Icon: ['', [Validators.required]],
      Color: ['', [Validators.required]],
    })
  }
  iconsName: string[] = ['work', 'shopping']
  colors: string[] = [
    'pink',
    'blue',
    'green',
    'grey',
    'red',
    'yellow',
    'orange',
  ]

  icons: string[] = ['work', 'shopping_cart', 'stars', 'phone', 'flagged']
  onSubmit(list: List) {
    console.log(list)
    this.data.addList(list).subscribe(
      (data: List) => {
        this.router.navigate(['lists'])
      },
      (err: any) => console.log(err),
    )
  }
}
