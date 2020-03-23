import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() id: string;
  @Input() control: FormControl;
  @Input() inputType: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.id);
  }
  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

}

