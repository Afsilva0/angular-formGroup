import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.buildForm();
  }

  ngOnInit(): void {}

  buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      apellido: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      date: new FormControl('', [Validators.required]),
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;

    console.log(value);
  }
}
