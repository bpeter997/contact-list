import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';
import { ContactDto } from '../../dtos/ContactDto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list-view',
  templateUrl: './contact-list-view.component.html',
  styleUrls: ['./contact-list-view.component.sass'],
})
export class ContactListViewComponent implements OnInit, OnDestroy {
  contacts: Array<ContactDto>;
  filteredContacts: Array<ContactDto>;
  newContacts: Array<Partial<ContactDto>>;
  newFilteredContacts: Array<Partial<ContactDto>>;
  isLoading: boolean;

  apiError: boolean;

  private newContactSubscription: Subscription | undefined;
  private contactSubscription: Subscription | undefined;

  constructor(private contactService: ContactService) {
    this.contacts = [];
    this.filteredContacts = [];
    this.newContacts = [];
    this.newFilteredContacts = [];
    this.isLoading = true;
    this.apiError = false;
  }

  ngOnInit() {
    this.contactSubscription = this.contactService.getContact().subscribe({
      next: (data: Array<ContactDto>) => {
        this.contacts = data;
        this.filteredContacts = data;
        this.isLoading = false;
      },
      error: error => {
        console.log(error);
        this.isLoading = false;
        this.apiError = true;
      },
    });

    this.newContactSubscription = this.contactService
    .getNewContacts()
    .subscribe({
      next: (data: Array<Partial<ContactDto>>) => {
        this.newContacts = data;
        this.newFilteredContacts = data;
      },
      error: error => {
        console.log(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.newContactSubscription!.unsubscribe();
    this.contactSubscription!.unsubscribe();
  }

  filterContacts(searchText: string) {
    this.filteredContacts = this.contacts.filter(this.filterByName(searchText));
    this.newFilteredContacts = this.newContacts.filter(this.filterByName(searchText));
  }

  private filterByName(searchText: string) {
    return (contact: Partial<ContactDto>) =>
      contact.name!.toLowerCase().indexOf(searchText.toLowerCase()) != -1;
  }

  removeCard(id: number) {
    this.contactService.removeNewContactById(id);
  }
}
