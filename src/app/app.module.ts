import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {FullUserComponent} from './components/full-user/full-user.component';
import {RouterModule} from '@angular/router';
import {UserResolveService} from './servises/resolve/user-resolve.service';

const routes = [
  {
    path: 'users', component: UsersComponent, resolve: {userData: UserResolveService},
    children: [{path: ':id', component: FullUserComponent}]
  },
  {path: '', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
