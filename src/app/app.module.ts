import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { AddressComponent } from './components/address/address.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'link/users', component: UsersComponent},
      {path: 'link/user', component: UserComponent, children: [
          {path: ':id', component: AddressComponent}
        ]
        }
    ]

   )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
