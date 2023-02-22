import {Component, Input, OnInit} from '@angular/core';
import {ContactDto} from "../../../dtos/ContactDto";

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.sass']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: Partial<ContactDto> = {};

  ngOnInit(): void {
  }


}
