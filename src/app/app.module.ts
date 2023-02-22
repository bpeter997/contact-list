import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ViewContactsComponent } from './components/view-contacts/view-contacts.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ContactCardComponent } from './components/view-contacts/contact-card/contact-card.component';
import {MatCardModule} from "@angular/material/card";
import { AddressPipe } from './pipes/address/address.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ViewContactsComponent,
    ContactCardComponent,
    AddressPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
