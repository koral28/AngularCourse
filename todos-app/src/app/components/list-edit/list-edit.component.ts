import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatIcon } from '@angular/material/icon'

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css'],
})
export class ListEditComponent implements OnInit {
  myForm!: FormGroup
  food!: object
  constructor(private formBuilder: FormBuilder) {}
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
  onSubmit(value: string) {
    console.log(value)
  }
}
