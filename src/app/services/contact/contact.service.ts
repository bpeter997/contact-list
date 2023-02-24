import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable, of} from "rxjs";
import {ContactDto} from "../../dtos/ContactDto";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private newContracts: Array<Partial<ContactDto>> = []

  constructor(private http: HttpClient) {
  }

  getContact(): Observable<Array<ContactDto>> {
    return this.http.get<Array<ContactDto>>(environment.contactUrl);
  }

  getNewContacts(): Observable<Array<Partial<ContactDto>>> {
    return of(this.newContracts);
  }

  addNewContact(contact: Partial<ContactDto>) {
    this.newContracts.push(contact);
  }

  removeNewContactById(id: number) {
    const index: number = this.newContracts.findIndex(contract => contract.id === id);
    this.newContracts.splice(index,1);
  }
}
