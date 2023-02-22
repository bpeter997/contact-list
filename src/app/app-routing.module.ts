import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewContactsComponent} from "./components/view-contacts/view-contacts.component";

const routes: Routes = [
  {path: 'view-contacts', component: ViewContactsComponent},
  {path: '', redirectTo: '/view-contacts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
