import {Component, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/Post';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
  post: Post;
@Output()
bubbleUp = new EventEmitter<Post>();



  ngOnInit(): void {
  }
getPostInfo(post): void{
  this.bubbleUp.emit(post);
}


}
