import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactDto } from '../../../dtos/ContactDto';
import { MatDialog } from '@angular/material/dialog';
import {
  DetailedContactDialogComponent,
} from '../../../dialogs/detailed-contact-dialog/detailed-contact-dialog.component';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.sass'],
})
export class ContactCardComponent implements OnInit {
  constructor(public dialog: MatDialog) {
  }

  @Input() contact: Partial<ContactDto> = {};
  @Input() isNew: boolean = false;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DetailedContactDialogComponent, { data: this.contact });
  }

  removeCard() {
    this.remove.emit(this.contact.id!);
  }
}
