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
  filteredContacts: Array<ContactDto>;
  isLoading: boolean;
  searchText: string;

  constructor(private contactService: ContactService) {
    this.contacts = [];
    this.filteredContacts = [];
    this.isLoading = true;
    this.searchText = '';
  }

  ngOnInit() {
    this.contactService.getContact().subscribe({
      next: (data: Array<ContactDto>) => {
        this.contacts = data;
        this.filteredContacts = data;
        this.isLoading = false;
      },
      error: error => {
        console.log(error);
        this.isLoading = false;
      },
    })
  }

  filterContacts() {
    this.filteredContacts = this.contacts.filter(this.filterByName());
  }

  private filterByName() {
    return (contact: Partial<ContactDto>) => contact.name!.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}
