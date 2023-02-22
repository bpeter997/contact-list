import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../services/contact/contact.service";
import {ContactDto} from "../../dtos/ContactDto";

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.sass']
})
export class ViewContactsComponent implements OnInit {

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
