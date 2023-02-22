import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../services/contact/contact.service";
import {ContactDto} from "../../dtos/ContactDto";

@Component({
  selector: 'app-contact-list-view',
  templateUrl: './contact-list-view.component.html',
  styleUrls: ['./contact-list-view.component.sass']
})
export class ContactListViewComponent implements OnInit {

  contacts: Array<ContactDto>;
  isLoading: boolean;

  constructor(private contactService: ContactService) {
    this.contacts = [];
    this.isLoading = true;
  }

  ngOnInit() {
    this.contactService.getContact().subscribe({
      next: (data: Array<ContactDto>) => {
        this.contacts = data;
        this.isLoading = false;
      },
      error: error => {
        console.log(error);
        this.isLoading = false;
      },
    })
  }
}
