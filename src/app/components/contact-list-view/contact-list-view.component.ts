import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactService} from "../../services/contact/contact.service";
import {ContactDto} from "../../dtos/ContactDto";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-contact-list-view',
  templateUrl: './contact-list-view.component.html',
  styleUrls: ['./contact-list-view.component.sass']
})
export class ContactListViewComponent implements OnInit, OnDestroy {

  contacts: Array<ContactDto>;
  filteredContacts: Array<ContactDto>;
  newContacts: Array<Partial<ContactDto>>;
  newFilteredContacts: Array<Partial<ContactDto>>;
  isLoading: boolean;
  searchText: string;

  newContactSubscription: Subscription | undefined

  constructor(private contactService: ContactService) {
    this.contacts = [];
    this.filteredContacts = [];
    this.newContacts = [];
    this.newFilteredContacts = [];
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

    this.newContactSubscription = this.contactService.getNewContacts().subscribe({
      next: (data: Array<Partial<ContactDto>>) => {
        this.newContacts = data;
        this.newFilteredContacts = data;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  ngOnDestroy(): void {
  this.newContactSubscription!.unsubscribe();
  }

  filterContacts() {
    this.filteredContacts = this.contacts.filter(this.filterByName());
    this.newFilteredContacts = this.newContacts.filter(this.filterByName())
  }

  private filterByName() {
    return (contact: Partial<ContactDto>) => contact.name!.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }


  removeCard(id: number) {
    this.contactService.removeNewContactById(id);
  }

}
