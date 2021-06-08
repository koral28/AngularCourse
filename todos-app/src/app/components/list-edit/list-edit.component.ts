import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css'],
})
export class ListEditComponent implements OnInit {
  myForm!: FormGroup
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      Caption: '',
      Description: '',
      Icon: '',
      Color: '',
    })
  }

  onSubmit(value: any) {
    console.log(value)
  }
}
