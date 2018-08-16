import { Component, OnInit, Input } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() item: Post;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onItemLoveIt(post: Post): void {
    /*this.item.loveIts += 1;*/
    this.postsService.addLoveIt(post);
  }

  onItemUnLoveIt(post: Post): void {
    /*this.item.loveIts -= 1;*/
    this.postsService.removeLoveIt(post);
  }
  onDelete(post: Post) {
    this.postsService.deletePost(post);
    this.postsService.emitSubject();
  }
}
