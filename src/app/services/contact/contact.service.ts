import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ContactDto} from "../../dtos/ContactDto";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {
  }

  getContact(): Observable<Array<ContactDto>> {
    return this.http.get<Array<ContactDto>>(environment.contactUrl);
  }
}
