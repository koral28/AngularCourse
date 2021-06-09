import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
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
      Caption: '',
      Description: '',
      Icon: '',
      Color: '',
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
  onSubmit(value: string) {
    console.log(value)
  }
}
