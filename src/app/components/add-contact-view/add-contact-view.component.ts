import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactDto} from "../../dtos/ContactDto";
import {ContactService} from "../../services/contact/contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-contact-view',
  templateUrl: './add-contact-view.component.html',
  styleUrls: ['./add-contact-view.component.sass']
})
export class AddContactViewComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private contactService: ContactService, private router: Router) {
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
    const contact: Partial<ContactDto> = this.getContactByForm()
    this.contactService.addNewContact(contact);
    this.contactForm.clearValidators();
    this.contactForm.reset();
    this.router.navigate(['/view-contacts']);
  }

  private getContactByForm() {
    return {
      id: new Date().getTime(),
      name: this.contactForm.controls['name'].value,
      username: this.contactForm.controls['userName'].value,
      phone: this.contactForm.controls['phone'].value,
      email: this.contactForm.controls['email'].value,
      address: {
        street: this.contactForm.controls['street'].value,
        city: this.contactForm.controls['city'].value,
        zipcode: this.contactForm.controls['zipcode'].value,
        suite: this.contactForm.controls['suite'].value,
        geo: {
          lng: '',
          lat: ''
        }
      }
    };
  }
}

