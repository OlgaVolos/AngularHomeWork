import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {FullUserComponent} from './components/full-user/full-user.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './servises/user-resolve/user-resolve.service';
import {PostResolveService} from './servises/post-resolve/post-resolve.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { FullPostComponent } from './components/full-post/full-post.component';


const routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {userData: UserResolveService},
    children: [{path: ':id', component: FullUserComponent},
      // {path: 'posts', component: PostsComponent, resolve: {postData: PostResolveService}},
    ]
  },
  {path: 'posts', component: PostsComponent, resolve: {postData: PostResolveService},
  children: [{path: ':id', component: FullPostComponent}]},
  {path: '', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent,
    PostsComponent,
    PostComponent,
    FullPostComponent
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
