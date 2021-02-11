import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Post} from '../../models/Post';
import {Observable} from 'rxjs';
import {PostService} from '../post/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]>{

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
    console.log(route.parent.params.id);
    return this.postService.getPostsByUserId(route.parent.params.id);
  }

  // resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
  //   console.log(route.perent.params.id);
  //   return this.postService.getPosts();
  // }
}
