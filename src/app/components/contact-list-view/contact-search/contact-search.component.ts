import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactDto } from '../../../dtos/ContactDto';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.sass'],
})
export class ContactSearchComponent {

  @Input() contacts: Array<Partial<ContactDto>> = [];
  @Input() newContacts: Array<Partial<ContactDto>> = [];

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  searchText: string;

  constructor() {
    this.searchText = '';
  }

  search() {
    this.searchEvent.emit(this.searchText);
  }
}
