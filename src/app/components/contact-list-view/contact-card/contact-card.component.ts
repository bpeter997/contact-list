import {Component, Input, OnInit} from '@angular/core';
import {ContactDto} from "../../../dtos/ContactDto";
import {MatDialog} from "@angular/material/dialog";
import {
  DetailedContactDialogComponent
} from "./detailed-contact-dialog/detailed-contact-dialog.component";

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.sass']
})
export class ContactCardComponent implements OnInit {


  constructor(public dialog: MatDialog) {
  }

  @Input() contact: Partial<ContactDto> = {};

  ngOnInit(): void {
  }


  openDialog() {
    this.dialog.open(DetailedContactDialogComponent, {data: this.contact});
  }
}
