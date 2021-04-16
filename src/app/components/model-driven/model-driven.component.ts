import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {
  contact: any;
  constructor() { }
  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });
  ngOnInit(): void {
    this.contact = {
      firstname: 'Samad',
      lastname: 'Amirbek',
      email: 'amirbeksamad@gmail.com',
      password: '123'
    };
  }
  onSubmit () {
    console.log(this.contact);
  }
}
