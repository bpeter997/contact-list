import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-contact-view',
  templateUrl: './add-contact-view.component.html',
  styleUrls: ['./add-contact-view.component.sass']
})
export class AddContactViewComponent implements OnInit {

  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      userName: new FormControl<string>('', [Validators.required]),
      phone: new FormControl<string>('', [Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$'), Validators.required]),
      email: new FormControl<string>('', [Validators.email, Validators.required]),
      street: new FormControl<string>('', [Validators.required]),
      suite: new FormControl<string>('', [Validators.required]),
      city: new FormControl<string>('', [Validators.required]),
      zipcode: new FormControl<string>('', [Validators.required])
    })
    ;
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}

