import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListViewComponent } from './components/contact-list-view/contact-list-view.component';
import { AddContactViewComponent } from './components/add-contact-view/add-contact-view.component';

const routes: Routes = [
  { path: 'view-contacts', component: ContactListViewComponent },
  { path: 'add-contact', component: AddContactViewComponent },
  { path: '', redirectTo: '/view-contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
