import {Component, Inject} from '@angular/core';
import {ContactDto} from "../../dtos/ContactDto";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-detailed-contact-dialog',
  templateUrl: './detailed-contact-dialog.component.html',
  styleUrls: ['./detailed-contact-dialog.component.sass']
})
export class DetailedContactDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public contact: Partial<ContactDto>) {
  }

}
